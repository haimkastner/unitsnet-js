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
    EnumMemberStructure,
    JSDocStructure
} from "ts-morph";
import { UnitProperties, UnitGenerateOptions } from "./models/units-properties";

/**
 * Get the lazyload var name for the given unit.
 * @param unit The unit name 
 * @returns The var name
 */
function unitLazyVarName(unit: string) {
    return `${unit.toLowerCase()}Lazy`;
}

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
            name: unit.pluralName,
            docs: [unit.JSDoc ?? '']
        })),
        isExported: true,
        docs: [`${enumName} enumeration`]
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
            name: unit.pluralName,
            scope: Scope.Public,
            returnType: 'number',
            docs: [unit.JSDoc ?? ''],
            statements:
                `if(this.${unitLazyVarName(unit.pluralName)} !== null){
    return this.${unitLazyVarName(unit.pluralName)};
}
return this.${unitLazyVarName(unit.pluralName)} = this.convertFromBase(${enumName}.${unit.pluralName});`,
        }
    })
}

/**
 * Build the static unit creators.
 * For example for 'Angle' unit generate a 'FromDegrees(number)' get 'FromRadiand(number)' etc. 
 * @param unitName The unit name (for example 'Degree' or 'Radian') .
 * @param enumName The unit enum name.
 * @param units The units properties.
 * @returns The creators methods structure array.
 */
function buildUnitCreatorsMethods(unitName: string, enumName: string, units: UnitProperties[]): MethodDeclarationStructure[] {
    return units.map((unit: UnitProperties): MethodDeclarationStructure => {

        const docs: JSDocStructure = {
            kind: StructureKind.JSDoc,
            description: `Create a new ${unitName} instance from a ${unit.pluralName}\n${unit.JSDoc ?? ''}`,
            tags: [{
                kind: StructureKind.JSDocTag,
                tagName: 'param',
                text: `value The unit as ${unit.pluralName} to create a new ${unitName} from.`
            },{
                kind: StructureKind.JSDocTag,
                tagName: 'returns',
                text: `The new ${unitName} instance.`
            }]
        };

        return {
            kind: StructureKind.Method,
            name: `From${unit.pluralName}`,
            scope: Scope.Public,
            isStatic: true,
            parameters: [
                {
                    name: 'value',
                    type: 'number'
                }
            ],
            docs: [docs],
            returnType: unitName,
            statements: `return new ${unitName}(value, ${enumName}.${unit.pluralName});`
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
        return ${formulaDefenition.replace('x', valueVarName)};`;
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
        switchUnitsCode += buildFormulaCase(unit.pluralName,
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
        statements:
            `switch (toUnit) {
        ${buildFormulaCases(enumName, units, false)}
    default:
        break;
}
return NaN;`
    };
}

/**
 * Build var for each unit to hold the converted value after first request.
 * @param units The units to build a lazyload vars for. 
 * @returns The vars strucure collection.
 */
function buildLazyloadVars(units: UnitProperties[]): PropertyDeclarationStructure[] {
    return units.map((unit): PropertyDeclarationStructure => ({
        kind: StructureKind.Property,
        name: `${unitLazyVarName(unit.pluralName)}`,
        scope: Scope.Private,
        type: 'number | null',
        initializer: 'null',
    }));
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
        statements:
            `switch (fromUnit) {
        ${buildFormulaCases(enumName, units, true)}
    default:
        break;
}
return NaN;`
    };
}

/**
 * Build 'toString' method for the unit class
 * @param unitName The unit name
 * @param enumName The units types enum
 * @param units The units 
 * @param baseUnit The base unit for default unit toString
 * @returns A 'toString' method structure
 */
function buildToStringMethod(unitName: string, enumName: string, units: UnitProperties[], baseUnit: UnitProperties): MethodDeclarationStructure {

    const docs: JSDocStructure = {
        kind: StructureKind.JSDoc,
        description: `Format the ${unitName} to string.\nNote! the default format for ${unitName} is ${baseUnit.pluralName}.\nTo specify the unit fromat set the 'toUnit' parameter.`,
        tags: [{
            kind: StructureKind.JSDocTag,
            tagName: 'param',
            text: `toUnit The unit to format the ${unitName}.`
        }, {
            kind: StructureKind.JSDocTag,
            tagName: 'returns',
            text: `The string format of the ${unitName}.`
        }]
    };

    let toStringCasses = '';
    for (const unit of units) {
        toStringCasses +=
            `
    case ${enumName}.${unit.pluralName}:
        return this.${unit.pluralName} + ` + '` ' + unit.Abbreviation + '`;';
    }

    return {
        kind: StructureKind.Method,
        name: 'toString',
        scope: Scope.Public,
        parameters: [{
            name: 'toUnit',
            type: enumName,
            initializer: `${enumName}.${baseUnit.pluralName}`
        }],
        returnType: 'string',
        docs: [docs],
        statements: `
switch (toUnit) {
    ${toStringCasses}
default:
    break;
}
return this.value.toString();`,
    };
}

/**
 * Build the unit constractor
 * @param unitName The unit name.
 * @param enumName The unit types enum name.
 * @returns The constractor structure
 */
function buildUnitCtor(unitName: string, enumName: string): ConstructorDeclarationStructure {
    const docs: JSDocStructure = {
        kind: StructureKind.JSDoc,
        description: `Create a new ${unitName}.`,
        tags: [{
            kind: StructureKind.JSDocTag,
            tagName: 'param',
            text: 'value The value.'
        }, {
            kind: StructureKind.JSDocTag,
            tagName: 'param',
            text: `fromUnit The ‘${unitName}’ unit to create from.`
        }]
    };
    return {
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
        docs: [docs],
        statements: `
if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
this.value = this.convertToBase(value, fromUnit);`
    }
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

    // Build vars for loadzy load converted value 
    const lazyVars = buildLazyloadVars(unitProperties.units);

    // Build base value accessor
    const baseValueAccessor: GetAccessorDeclarationStructure = {
        kind: StructureKind.GetAccessor,
        name: 'BaseValue',
        scope: Scope.Public,
        returnType: 'number',
        statements: `return this.value;`,
        docs: [`The base value of ${unitProperties.unitName} is ${unitProperties.baseUnitSingularName}.\nThis accessor used when need any value for calculations and it's better to use directly the base value`],
    };

    // Build the units get-accessors
    const unitGetters: GetAccessorDeclarationStructure[] = buildUnitGetters(enumName, unitProperties.units);

    // Build the constractor
    const unitCtor: ConstructorDeclarationStructure = buildUnitCtor(unitProperties.unitName, enumName);

    // Build the static creator mathods  
    const unitCreators: MethodDeclarationStructure[] = buildUnitCreatorsMethods(unitProperties.unitName, enumName, unitProperties.units);

    // Build the convert from base to unit method
    const convertFromBaseMethod: MethodDeclarationStructure = buildConvertFromBaseMethod(enumName, unitProperties.units);

    // Build the convert from unit to base method
    const convertToBaseMethod: MethodDeclarationStructure = buildConvertToBaseMethod(enumName, unitProperties.units);

    // Build the class 'toString' method
    const toStringMethod = buildToStringMethod(unitProperties.unitName, enumName, unitProperties.units, unitProperties.units.find((unit) =>
        (unit.singularName === unitProperties.baseUnitSingularName)) as UnitProperties);

    // Build the unit class 
    const unitClass: ClassDeclarationStructure = {
        kind: StructureKind.Class,
        name: unitProperties.unitName,
        properties: [valueMember, ...lazyVars],
        getAccessors: [baseValueAccessor, ...unitGetters],
        ctors: [unitCtor],
        methods: [...unitCreators, convertFromBaseMethod, convertToBaseMethod, toStringMethod],
        isExported: true,
        docs: [unitProperties.JSDoc],
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