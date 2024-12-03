import fse from 'fs-extra';
import { UnitTypeDefinition } from './models/units-definition';

/**
 * Generate README.md file from template. 
 * @param documentationDestinationDirectory The generate file directory destination.
 * @param rawUnitsDefinitions The units definition from the definition JSON files.
 */
export function generateDocumentation(documentationDestinationDirectory: string, rawUnitsDefinitions: UnitTypeDefinition[]) {

    const documentationMarkdownTemplate =
        `
### Supported units

The package provides support for the following units:
`;

    let unitsMarkdownList = '';
    // Add export all for each unit file.
    for (const unitDefinition of rawUnitsDefinitions) {
        unitsMarkdownList += `- **${unitDefinition.Name}**\n    -   *${(unitDefinition.XmlDoc || unitDefinition.XmlDocSummary || '').trim()}*\n`
    }

    fse.writeFileSync(`${documentationDestinationDirectory}/Units.md`, documentationMarkdownTemplate + unitsMarkdownList);
}