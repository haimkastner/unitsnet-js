import {
    Project,
    StructureKind,
    PropertyDeclarationStructure,
    Scope,
    EnumDeclarationStructure,
    ClassDeclarationStructure,
    GetAccessorDeclarationStructure,
    ConstructorDeclarationStructure,
    MethodDeclarationStructure,
    EnumMemberStructure
} from "ts-morph";
import { UnitProperties, UnitGenerateOptions } from "./models/units-properties";

/**
 * Build the unit units Enum.
 * For example for 'Angle' unit generate 'AngleEnum' with 'Degrees' 'Radiand' etc.
 * @param enumName The name for the enum.
 * @param units The units properties.
 * @returns The enum structure
 */
function buildEnum(enumName: string, units: UnitProperties[]): EnumDeclarationStructure {
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

/**
 * Build the unit properties get accessors.
 * For example for 'Angle' unit generate a get 'Degrees' get 'Radiand' etc.
 * @param enumName The unit enum name.
 * @param units The units properties.
 * @returns The accessors structure array.
 */
function buildUnitGetters(enumName: string, units: UnitProperties[]): GetAccessorDeclarationStructure[] {
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

/**
 * Build the static unit creators.
 * For example for 'Angle' unit generate a 'FromDegrees(number)' get 'FromRadiand(number)' etc. 
 * @param unitName THe unit name (for example 'Degree' or 'Radian') .
 * @param enumName The unit enum name.
 * @param units The units properties.
 * @returns The creators methods structure array.
 */
function buildUnitCreatorsMethods(unitName: string, enumName: string, units: UnitProperties[]): MethodDeclarationStructure[] {
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

/**
 * Build the case in a 'switch' with unit converting formula for the given unit.
 * @param unitName The specific unit name. (for example 'Degree' or 'Radian') 
 * @param enumName The unit enum name.
 * @param formulaDefenition THe furmula code as string.
 * @param valueVarName The valiable name to replace th 'x' in the formula.
 * @returns The unit case as a string.
 */
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

/**
 * Build a 'switch case' with converting formula for each unit.
 * @param enumName The unit enum name.
 * @param units The units to build cases for.
 * @param isBaseToUnit The direction of the convertion.
 * @returns The unit switch cases as a string.
 */
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

/**
 * Build from base to unit convert method. 
 * @param enumName The unit enum name.
 * @param units The units to convert to.
 * @returns The convert method strucure.
 */
function buildConvertFromBaseMethod(enumName: string, units: UnitProperties[]): MethodDeclarationStructure {
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

/**
 * Build from unit to base convert method. 
 * @param enumName The unit enum name.
 * @param units The units to convert from.
 * @returns The convert method strucure.
 */
function buildConvertToBaseMethod(enumName: string, units: UnitProperties[]): MethodDeclarationStructure {
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

/**
 * Generate a TS class for the given unit (for example for Angle or Length etc).
 * @param project The generating project (of ts-morph lib) object.
 * @param unitsDestinationDirectory The generate file directory destination.
 * @param unitProperties The unit properties.
 */
export function generateUnitClass(project: Project, unitsDestinationDirectory: string, unitProperties: UnitGenerateOptions) {

    // Generate the unit units enum anme 
    const enumName = `${unitProperties.unitName}Units`;

    // Build the enum stracture
    const unitsEnum: EnumDeclarationStructure = buildEnum(enumName, unitProperties.units);

    // Build the base value variable
    const valueMember: PropertyDeclarationStructure = {
        kind: StructureKind.Property,
        name: 'value',
        scope: Scope.Private,
        type: 'number'
    };

    // Build the units get-accessors
    const unitGetters: GetAccessorDeclarationStructure[] = buildUnitGetters(enumName, unitProperties.units);

    // Build the constractor
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

    // Build the static creator mathods  
    const unitCreators: MethodDeclarationStructure[] = buildUnitCreatorsMethods(unitProperties.unitName, enumName, unitProperties.units);

    // Build the convert from base to unit method
    const convertFromBaseMethod: MethodDeclarationStructure = buildConvertFromBaseMethod(enumName, unitProperties.units);

    // Build the convert from unit to base method
    const convertToBaseMethod: MethodDeclarationStructure = buildConvertToBaseMethod(enumName, unitProperties.units);

    // Build the unit class 
    const unitClass: ClassDeclarationStructure = {
        kind: StructureKind.Class,
        name: unitProperties.unitName,
        properties: [valueMember],
        getAccessors: [...unitGetters],
        ctors: [unitCtor],
        methods: [...unitCreators, convertFromBaseMethod, convertToBaseMethod],
        isExported: true,
    }

    // Build the unit file with the unit enum and class
    const sourceFile = project.createSourceFile(`${unitsDestinationDirectory}/${unitProperties.unitName.toLowerCase()}.g.ts`, {
        statements: [unitsEnum, unitClass]
    }, {
        overwrite: true
    });

    // Generate the unit file
    sourceFile.saveSync();
}