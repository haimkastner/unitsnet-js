import { UnitTypeDefinition } from "./models/units-definition";
import stripBom from "strip-bom";
import request from 'sync-request';
import fs from 'fs-extra';
import path from 'path';
import JSON5 from 'json5';

const githubOptions = {
    headers: {
        'user-agent': 'PostmanRuntime/7.20.1',
    },
};


function loadDefinitionFile(fileName: string): any | undefined {
    try {
        const filePath = `${process.cwd()}/.cache/${fileName}`;
        if (fs.existsSync(filePath)) {
            console.info(`Loading ${filePath} cache ...`);
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        } else {
            return undefined;
        }
    } catch (err) {
        console.error('Error reading JSON file:', err);
        return undefined;
    }
}

function keepDefinitionFile(fileName: string, data: any): void {
    try {
        const filePath = `${process.cwd()}/.cache/${fileName}`;
        const dirname = path.dirname(filePath);
        if (!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname, { recursive: true });
        }
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(filePath, jsonData, 'utf8');
        console.log(`JSON data has been written to ${filePath}`);
    } catch (err) {
        console.error('Error writing JSON file:', err);
    }
}

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

        let definitionFiles = loadDefinitionFile('files.json');

        if (!definitionFiles) {
            const response = request('GET', directoryUrl, githubOptions);

            const body = JSON.parse(response.body.toString('utf-8')) as unknown as [];
            definitionFiles = body.map((file: any) => file.name);
            keepDefinitionFile('files.json', definitionFiles);
        }


        const unitsDefinition: UnitTypeDefinition[] = [];

        for (const file of definitionFiles) {

            try {

                let unitDefinition = loadDefinitionFile(file);

                if (!unitDefinition) {
                    console.info(`Fetching ${file} file...`);
                    const response = request('GET', `${filesUrl}/${file}`, githubOptions);
                    // Stringify the payload to utf-8 (and remove the UTF BOM prefix if exists)
                    const rawBody = stripBom(response.body.toString('utf-8'));
                    unitDefinition = JSON5.parse(rawBody) as unknown as UnitTypeDefinition;
                    keepDefinitionFile(file, unitDefinition);
                }

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