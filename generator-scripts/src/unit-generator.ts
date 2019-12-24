import { Project, StructureKind, PropertyDeclarationStructure, Scope, EnumDeclarationStructure, ClassDeclarationStructure, GetAccessorDeclarationStructure, ConstructorDeclaration, ConstructorDeclarationStructure, MethodDeclarationStructure, WriterFunction, EnumMemberStructure } from "ts-morph";
import { UnitProperties, UnitGenerateOptions } from "./models/units-properties";

function generateEnum(enumName: string, units: UnitProperties[]): EnumDeclarationStructure {
    return {
        kind: StructureKind.Enum,
        name: enumName,
        members: units.map((unit: UnitProperties): EnumMemberStructure => ({
            kind: StructureKind.EnumMember,
            name: unit.name
        })),
        isExported: true,
    }
}

function generateUnitGetters(enumName: string, units: UnitProperties[]): GetAccessorDeclarationStructure[] {
    return units.map((unit: UnitProperties): GetAccessorDeclarationStructure => {
        return {
            kind: StructureKind.GetAccessor,
            name: unit.name,
            scope: Scope.Public,
            returnType: 'number',
            statements: `return this.convertFromBase(${enumName}.${unit.name});`,

        }
    })
}

function generateunitInitsMethods(unitName: string, enumName: string, units: UnitProperties[]): MethodDeclarationStructure[] {
    return units.map((unit: UnitProperties): MethodDeclarationStructure => {
        return {
            kind: StructureKind.Method,
            name: `From${unit.name}`,
            scope: Scope.Public,
            isStatic: true,
            parameters: [
                {
                    name: 'value',
                    type: 'number'
                }
            ],
            returnType: unitName,
            statements: `return new ${unitName}(value, ${enumName}.${unit.name});`
        }
    })
}

function buildFormulaCase(unitName: string, enumName: string, formulaDefenition: string, valueVarName: string): string {
    // Remove C# number types
    formulaDefenition = formulaDefenition.replace('d', '').replace('m', '');

    // Rename C# Pow method to lower case as in js Math lib name.
    formulaDefenition = formulaDefenition.replace('.Pow(', '.pow(');

    return `
        case ${enumName}.${unitName}:
            return ${formulaDefenition.replace('x', valueVarName)};
        `;
}

function buildFormulaCases(enumName: string, units: UnitProperties[], isBaseToUnit: boolean): string {
    let switchUnitsCode = '';

    for (const unit of units) {
        switchUnitsCode += buildFormulaCase(unit.name,
            enumName,
            isBaseToUnit
                ? unit.baseToUnitFormula
                : unit.unitToBaseFormula,
            isBaseToUnit 
            ? 'value'
            : 'this.value');
    }

    return switchUnitsCode;
}

function generateConvertFromBaseMethod(enumName: string, units: UnitProperties[]): MethodDeclarationStructure {
    return {
        kind: StructureKind.Method,
        name: 'convertFromBase',
        scope: Scope.Private,
        parameters: [
            {
                name: 'toUnit',
                type: enumName
            }
        ],
        returnType: 'number',
        statements: `
    switch (toUnit) {
        ${buildFormulaCases(enumName, units, false)}
        default:
            break;
    }
    return NaN;
    `
    };
}

function generateConvertToBaseMethod(enumName: string, units: UnitProperties[]): MethodDeclarationStructure {
    return {
        kind: StructureKind.Method,
        name: 'convertToBase',
        scope: Scope.Private,
        parameters: [
            {
                name: 'value',
                type: 'number'
            },
            {
                name: 'fromUnit',
                type: enumName
            }
        ],
        returnType: 'number',
        statements: `
        switch (fromUnit) {
            ${buildFormulaCases(enumName, units, true)}
            default:
                break;
        }
        return NaN;
        `
    };
}

export function generateUnitClass(project: Project, unitsDestinationDirectory: string, options: UnitGenerateOptions) {

    const enumName = `${options.unitName}Units`;
    const unitsEnum: EnumDeclarationStructure = generateEnum(enumName, options.units);

    const valueMember: PropertyDeclarationStructure = {
        kind: StructureKind.Property,
        name: 'value',
        scope: Scope.Private,
        type: 'number'
    };

    const unitGetters: GetAccessorDeclarationStructure[] = generateUnitGetters(enumName, options.units);

    const unitCtor: ConstructorDeclarationStructure = {
        kind: StructureKind.Constructor,
        scope: Scope.Public,
        parameters: [
            {
                name: 'value',
                type: 'number'
            },
            {
                name: 'fromUnit',
                type: enumName
            }
        ],
        statements: 'this.value = this.convertToBase(value, fromUnit);'
    };

    const unitInits: MethodDeclarationStructure[] = generateunitInitsMethods(options.unitName, enumName, options.units);


    const convertFromBaseMethod: MethodDeclarationStructure = generateConvertFromBaseMethod(enumName, options.units);

    const convertToBaseMethod: MethodDeclarationStructure = generateConvertToBaseMethod(enumName, options.units);

    const unitClass: ClassDeclarationStructure = {
        kind: StructureKind.Class,
        name: options.unitName,
        properties: [valueMember],
        getAccessors: [...unitGetters],
        ctors: [unitCtor],
        methods: [...unitInits, convertFromBaseMethod, convertToBaseMethod],
        isExported: true,
    }

    const sourceFile = project.createSourceFile(`${unitsDestinationDirectory}/${options.unitName.toLowerCase()}.g.ts`, {
        statements: [unitsEnum, unitClass]
    }, {
        overwrite: true
    });

    sourceFile.saveSync();
}