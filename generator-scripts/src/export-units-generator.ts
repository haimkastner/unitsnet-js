import { Project, StructureKind } from "ts-morph";
import { UnitTypeDefinition } from "./models/units-definition";

export function generateExportUnitsModule(project: Project, unitsDestinationDirectory: string, rawUnitsDefinitions: UnitTypeDefinition[]) {

    const sourceFile = project.createSourceFile(`${unitsDestinationDirectory}/index.ts`, {
        statements : []
    }, {
        overwrite: true
    });

    for (const unitDefinition of rawUnitsDefinitions) {
        sourceFile.addExportDeclaration({
            kind: StructureKind.ExportDeclaration,
            moduleSpecifier: `./${unitDefinition.Name.toLocaleLowerCase()}.g`
        })
    }

    sourceFile.saveSync();
}
