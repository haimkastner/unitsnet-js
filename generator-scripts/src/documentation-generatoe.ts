import fse from 'fs-extra';
import { UnitTypeDefinition } from './models/units-definition';

/**
 * Generate README.md file from temolate. 
 * @param documentationDestinationDirectory The generate file directory destination.
 * @param rawUnitsDefinitions The units definition from the definition JSON files.
 */
export function generateDocumentation(documentationDestinationDirectory: string, rawUnitsDefinitions: UnitTypeDefinition[]) {

    let documentationMarkdownTemplate =
        fse.readFileSync(`./src/assets/README.t.md`).toString('utf-8');

    let unitsMarkdownList = '';
    // Add export all for each unit file.
    for (const unitDefinition of rawUnitsDefinitions) {
        unitsMarkdownList += `- **${unitDefinition.Name}**\n    -   *${unitDefinition.XmlDoc.trim()}*\n`
    }

    documentationMarkdownTemplate =
        documentationMarkdownTemplate.replace('~SUPPORTED_UNITS~', unitsMarkdownList);

    fse.writeFileSync(`${documentationDestinationDirectory}/README.md`, documentationMarkdownTemplate);
}