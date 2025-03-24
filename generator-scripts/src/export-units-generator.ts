import { Project, StructureKind } from 'ts-morph';
import { UnitTypeDefinition } from './models/units-definition';

/**
 * Generate index file to export all generated unit classes 
 * @param project The generating project (of ts-morph lib) object.
 * @param unitsDestinationDirectory The generate file directory destination.
 * @param rawUnitsDefinitions The units definition from the definition JSON files.
 */
export function generateUnitsModuleExport(project: Project, unitsDestinationDirectory: string, rawUnitsDefinitions: UnitTypeDefinition[]) {

    // Create an empty source file
    const sourceFile = project.createSourceFile(`${unitsDestinationDirectory}/index.ts`, {
        statements : []
    }, {
        overwrite: true
    });

    // Add export all for each unit file.
    for (const unitDefinition of rawUnitsDefinitions) {
        sourceFile.addExportDeclaration({
            kind: StructureKind.ExportDeclaration,
            moduleSpecifier: `./gen-units/${unitDefinition.Name.toLocaleLowerCase()}.g`
        });
    }

    sourceFile.addExportDeclaration({
        kind: StructureKind.ExportDeclaration,
        moduleSpecifier: `./base-unit`,
        namedExports: [
            'ArithmeticOperation',
            'CompareOperation',
            'OperatorOverrides',
            'setOperatorOverride',
            'unsetOperatorOverride',
            'unsetAllOperatorOverrides',
            'areAnyOperatorsOverridden',
            'ToStringOptions',
        ]
    });

    // Generate the export modules file.
    sourceFile.saveSync();
}
