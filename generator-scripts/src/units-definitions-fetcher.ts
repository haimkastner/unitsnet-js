import { UnitTypeDefinition } from "./models/units-definition";
import stripBom from "strip-bom";
import request from 'sync-request';

const githubOptions = {
    headers: {
        'user-agent': 'PostmanRuntime/7.20.1',
    },
};

/**
 * 
 * @param repoOwnerAndName The UnitsNEt repo owner and name
 * @returns The units definition array
 */
export function fetchUnitsDefinitions(repoOwnerAndName: string): UnitTypeDefinition[] {

    const directoryUrl = `https://api.github.com/repos/${repoOwnerAndName}/contents/Common/UnitDefinitions`;
    const filesUrl = `https://raw.githubusercontent.com/${repoOwnerAndName}/master/Common/UnitDefinitions`;

    console.info(`Fetching units files list...`);

    try {

        const response = request('GET', directoryUrl, githubOptions);

        const body = JSON.parse(response.body.toString('utf-8')) as unknown as [];

        const files = body.map((file: any) => file.name);

        const unitsDefinition: UnitTypeDefinition[] = [];

        for (const file of files) {
            try {
                console.info(`Fetching ${file} file...`);
                const response = request('GET', `${filesUrl}/${file}`, githubOptions);
                // Stringify the payload to utf-8 (and remove the UTF BOM prefix if exists)
                const rawBody = stripBom(response.body.toString('utf-8'));

                const unitDefinition = JSON.parse(rawBody) as unknown as UnitTypeDefinition;

                // detect deprecated units definitions
                for (const unit of unitDefinition.Units) {
                    let markAsDeprecated = false;
                    if (unit.ObsoleteText) {
                        console.info(`[fetchUnitsDefinitions] Unit ${unitDefinition.Name}.${unit.PluralName} marked as obsolete, message: "${unit.ObsoleteText}"`);
                        markAsDeprecated = true;
                    }
                    if (unit.SkipConversionGeneration) {
                        console.info(`[fetchUnitsDefinitions] Unit ${unitDefinition.Name}.${unit.PluralName} marked to be ignored`);
                        markAsDeprecated = true;
                    }
                    unit.Deprecated = markAsDeprecated;
                }
                unitsDefinition.push(unitDefinition);
            } catch (error) {
                console.warn(`Fetching ${file} file failed or file damaged, ${error}`);
            }
        }
        return unitsDefinition;

    } catch (error) {
        console.warn(`Fetching files failed or data damaged, ${error}`);
        process.exit(1);
    }
}