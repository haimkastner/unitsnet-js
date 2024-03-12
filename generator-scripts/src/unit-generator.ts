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
    JSDocStructure,
    InterfaceDeclarationStructure
} from "ts-morph";
import { UnitProperties, UnitGenerateOptions } from "./models/units-properties";
import { pascalToCamelCase } from "./utiles";

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
            value: unit.singularName,
            docs: [unit.JSDoc ?? '']
        })),
        isExported: true,
        docs: [`${enumName} enumeration`]
    }
}

/**
 * Build the unit DTO.
 */
function buildDto(Unit: UnitGenerateOptions, enumName: string): InterfaceDeclarationStructure {
    return {
        kind: StructureKind.Interface,
        name: `${Unit.unitName}Dto`,
        properties: [
            {
                name: 'value',
                type: 'number',
                docs: [`The value of the ${Unit.unitName}`]
            },
            {
                name: 'unit',
                type: enumName,
                docs: [` The specific unit that the ${Unit.unitName} value is representing`]
            }
        ],
        isExported: true,
        docs: [`API DTO represents a ${Unit.unitName}`]
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
            }, {
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
 * @param formulaDefinition THe formula code as string.
 * @param valueVarName The variable name to replace th 'x' in the formula.
 * @returns The unit case as a string.
 */
function buildFormulaCase(unitName: string, enumName: string, formulaDefinition: string, valueVarName: string): string {
    // Remove C# number types
    formulaDefinition = formulaDefinition.replace('d', '').replace('m', '');

    // Convert C# math functions to the JS name
    formulaDefinition = formulaDefinition.replace(/\.Pow\(/g, '.pow(');
    formulaDefinition = formulaDefinition.replace(/\.Sqrt\(/g, '.sqrt(');
    formulaDefinition = formulaDefinition.replace(/\.Asin\(/g, '.asin(');
    formulaDefinition = formulaDefinition.replace(/\.Sin\(/g, '.sin(');

    // Remove all C# double signs, since they are not relavant to JS wheere all numbers are just "number" and not int. 
    // see for example https://github.com/angularsen/UnitsNet/blob/master/Common/UnitDefinitions/Irradiation.json#L65
    formulaDefinition = formulaDefinition.replace(/\d+d/g, (match) => match.replace(/d$/, ''));

    return `
    case ${enumName}.${unitName}:
        return ${formulaDefinition.replace(/{x}|x/g, valueVarName)};`;
}

/**
 * Build a 'switch case' with converting formula for each unit.
 * @param enumName The unit enum name.
 * @param units The units to build cases for.
 * @param isBaseToUnit The direction of the conversion.
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
 * Build the convert style method
 */
function buildConvertToUnitMethod(unitName: string, enumName: string, units: UnitProperties[]): MethodDeclarationStructure {
    const docs: JSDocStructure = {
        kind: StructureKind.JSDoc,
        description: `Convert ${unitName} to a specific unit value.`,
        tags: [{
            kind: StructureKind.JSDocTag,
            tagName: 'param',
            text: `toUnit The specific unit to convert to`
        }, {
            kind: StructureKind.JSDocTag,
            tagName: 'returns',
            text: `The value of the specific unit provided.`
        }]
    };

    return {
        kind: StructureKind.Method,
        name: 'convert',
        scope: Scope.Public,
        parameters: [
            {
                name: 'toUnit',
                type: enumName
            }
        ],
        docs: [docs],
        returnType: 'number',
        statements:
            `switch (toUnit) {
${units.map(u => `    case ${enumName}.${u.pluralName}: return this.${u.pluralName};\n`).join('')}
    default:
        break;
}
return NaN;`
    };
}

function buildConvertToDto(unitName: string, enumName: string, baseUnit: UnitProperties): MethodDeclarationStructure {
    const docs: JSDocStructure = {
        kind: StructureKind.JSDoc,
        description: `Create API DTO represent a ${unitName} unit.`,
        tags: [{
            kind: StructureKind.JSDocTag,
            tagName: 'param',
            text: `holdInUnit The specific ${unitName} unit to be used in the unit representation at the DTO`
        }]
    };

    return {
        kind: StructureKind.Method,
        name: 'toDto',
        scope: Scope.Public,
        parameters: [
            {
                name: 'holdInUnit',
                type: enumName,
                initializer: `${enumName}.${baseUnit.pluralName}`
            }
        ],
        docs: [docs],
        returnType: `${unitName}Dto`,
        statements:
            `return {
    value: this.convert(holdInUnit),
    unit: holdInUnit
};`
    };
}

function buildConvertFromDto(unitName: string): MethodDeclarationStructure {
    const docs: JSDocStructure = {
        kind: StructureKind.JSDoc,
        description: `Create a ${unitName} unit from an API DTO representation.`,
        tags: [{
            kind: StructureKind.JSDocTag,
            tagName: 'param',
            text: `dto${unitName} The ${unitName} API DTO representation`
        }]
    };

    return {
        kind: StructureKind.Method,
        name: 'FromDto',
        scope: Scope.Public,
        isStatic: true,
        parameters: [
            {
                name: `dto${unitName}`,
                type: `${unitName}Dto`
            }
        ],
        docs: [docs],
        returnType: unitName,
        statements:
            `return new ${unitName}(dto${unitName}.value, dto${unitName}.unit);`
    };
}

/**
 * Build from base to unit convert method. 
 * @param enumName The unit enum name.
 * @param units The units to convert to.
 * @returns The convert method structure.
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
 * @returns The vars structure collection.
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
        description: `Format the ${unitName} to string.\nNote! the default format for ${unitName} is ${baseUnit.pluralName}.\nTo specify the unit format set the 'unit' parameter.`,
        tags: [{
            kind: StructureKind.JSDocTag,
            tagName: 'param',
            text: `unit The unit to format the ${unitName}.`
        }, {
            kind: StructureKind.JSDocTag,
            tagName: 'returns',
            text: `The string format of the ${unitName}.`
        }]
    };

    let toStringCases = '';
    for (const unit of units) {
        toStringCases +=
            `
    case ${enumName}.${unit.pluralName}:
        return this.${unit.pluralName} + ` + '` ' + unit.Abbreviation + '`;';
    }

    return {
        kind: StructureKind.Method,
        name: 'toString',
        scope: Scope.Public,
        parameters: [{
            name: 'unit',
            type: enumName,
            initializer: `${enumName}.${baseUnit.pluralName}`
        }],
        returnType: 'string',
        docs: [docs],
        statements: `
switch (unit) {
    ${toStringCases}
default:
    break;
}
return this.value.toString();`,
    };
}

/**
 * Build get unit AbbreviationMethod
 * @param unitName The unit name
 * @param enumName The units types enum
 * @param units The units 
 * @param baseUnit The base unit for default unit abbreviation
 * @returns A 'toString' method structure
 */
function buildGetUnitAbbreviationMethod(unitName: string, enumName: string, units: UnitProperties[], baseUnit: UnitProperties): MethodDeclarationStructure {

    const docs: JSDocStructure = {
        kind: StructureKind.JSDoc,
        description: `Get ${unitName} unit abbreviation.\nNote! the default abbreviation for ${unitName} is ${baseUnit.pluralName}.\nTo specify the unit abbreviation set the 'unitAbbreviation' parameter.`,
        tags: [{
            kind: StructureKind.JSDocTag,
            tagName: 'param',
            text: `unitAbbreviation The unit abbreviation of the ${unitName}.`
        }, {
            kind: StructureKind.JSDocTag,
            tagName: 'returns',
            text: `The abbreviation string of ${unitName}.`
        }]
    };

    let toUnitAbbreviation = '';
    for (const unit of units) {
        toUnitAbbreviation +=
            `
    case ${enumName}.${unit.pluralName}:
        return \`${unit.Abbreviation}\`;`;
    };

    return {
        kind: StructureKind.Method,
        name: 'getUnitAbbreviation',
        scope: Scope.Public,
        parameters: [{
            name: 'unitAbbreviation',
            type: enumName,
            initializer: `${enumName}.${baseUnit.pluralName}`
        }],
        returnType: 'string',
        docs: [docs],
        statements: `
switch (unitAbbreviation) {
    ${toUnitAbbreviation}
default:
    break;
}
return '';`,
    };
}

/**
 * Build the 'equals' method.
 * @param unitName The unit name.
 * @returns The 'equals' method structure.
 */
function buildEqualsMethod(unitName: string): MethodDeclarationStructure {

    const docs: JSDocStructure = {
        kind: StructureKind.JSDoc,
        description: `Check if the given ${unitName} are equals to the current ${unitName}.`,
        tags: [{
            kind: StructureKind.JSDocTag,
            tagName: 'param',
            text: `${pascalToCamelCase(unitName)} The other ${unitName}.`
        }, {
            kind: StructureKind.JSDocTag,
            tagName: 'returns',
            text: `True if the given ${unitName} are equal to the current ${unitName}.`
        }],
    };

    return {
        kind: StructureKind.Method,
        name: 'equals',
        scope: Scope.Public,
        parameters: [{
            name: `${pascalToCamelCase(unitName)}`,
            type: unitName,
        }],
        returnType: 'boolean',
        docs: [docs],
        statements: `return this.value === ${pascalToCamelCase(unitName)}.BaseValue;`,
    };
}

/**
 * Build the 'compareTo' method.
 * @param unitName The unit name.
 * @returns The 'compareTo' method structure.
 */
function buildCompareToMethod(unitName: string): MethodDeclarationStructure {

    const docs: JSDocStructure = {
        kind: StructureKind.JSDoc,
        description: `Compare the given ${unitName} against the current ${unitName}.`,
        tags: [{
            kind: StructureKind.JSDocTag,
            tagName: 'param',
            text: `${pascalToCamelCase(unitName)} The other ${unitName}.`
        }, {
            kind: StructureKind.JSDocTag,
            tagName: 'returns',
            text: `0 if they are equal, -1 if the current ${unitName} is less then other, 1 if the current ${unitName} is greater then other.`
        }],
    };

    return {
        kind: StructureKind.Method,
        name: 'compareTo',
        scope: Scope.Public,
        parameters: [{
            name: `${pascalToCamelCase(unitName)}`,
            type: unitName,
        }],
        returnType: 'number',
        docs: [docs],
        statements: `
if (this.value > ${pascalToCamelCase(unitName)}.BaseValue)
    return 1;
if (this.value < ${pascalToCamelCase(unitName)}.BaseValue)
    return -1;
return 0;`,
    };
}

/**
 * Build the basic arithmetics methods. 
 * @param unitName The unit name.
 * @returns The arithmetic methods structure array. 
 */
function buildArithmeticsMethods(unitName: string): MethodDeclarationStructure[] {
    const arithmeticActions = [{
        operator: '+',
        name: 'Add'
    }, {
        operator: '-',
        name: 'Subtract'
    }, {
        operator: '*',
        name: 'Multiply'
    }, {
        operator: '/',
        name: 'Divide'
    }, {
        operator: '%',
        name: 'Modulo'
    }, {
        operator: '**',
        name: 'Pow'
    }];

    return arithmeticActions.map((action): MethodDeclarationStructure => {
        const docs: JSDocStructure = {
            kind: StructureKind.JSDoc,
            description: `${action.name} the given ${unitName} with the current ${unitName}.`,
            tags: [{
                kind: StructureKind.JSDocTag,
                tagName: 'param',
                text: `${pascalToCamelCase(unitName)} The other ${unitName}.`
            }, {
                kind: StructureKind.JSDocTag,
                tagName: 'returns',
                text: `A new ${unitName} instance with the results.`
            }],
        };

        return {
            kind: StructureKind.Method,
            name: `${pascalToCamelCase(action.name)}`,
            scope: Scope.Public,
            parameters: [{
                name: `${pascalToCamelCase(unitName)}`,
                type: unitName,
            }],
            returnType: unitName,
            docs: [docs],
            statements: `return new ${unitName}(this.value ${action.operator} ${pascalToCamelCase(unitName)}.BaseValue)`,
        };
    })
}

/**
 * Build the unit constructor
 * @param unitName The unit name.
 * @param enumName The unit types enum name.
 * @param baseUnitName The base unit enum type name.
 * @returns The constructor structure
 */
function buildUnitCtor(unitName: string, enumName: string, baseUnitName: string): ConstructorDeclarationStructure {
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
            text: `fromUnit The ‘${unitName}’ unit to create from.\nThe default unit is ${baseUnitName}`,
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
                type: enumName,
                initializer: `${enumName}.${baseUnitName}`,
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
export function generateUnitClass(project: Project,
    unitsDestinationDirectory: string,
    unitProperties: UnitGenerateOptions) {

    // Generate the unit units enum name 
    const enumName = `${unitProperties.unitName}Units`;
    const { units, unitName } = unitProperties;
    let baseUnit = units.find((unit) =>
        (unit.singularName === unitProperties.baseUnitSingularName)) as UnitProperties;

    if (!baseUnit) {
        console.warn(`[generateUnitClass] Unable to find singular unit name matching to "BaseUnit" of -${unitProperties.unitName}-, as fallback looking for "PluralName"...`);
        baseUnit = units.find((unit) =>
            (unit.pluralName === unitProperties.baseUnitSingularName)) as UnitProperties;
    }

    if (!baseUnit) {
        console.error(`[generateUnitClass] Unable to find singular nor plural Name unit name to "BaseUnit" of -${unitProperties.unitName}- exiting...`);
        process.exit(1);
    }

    // Build the enum structure
    const unitsEnum = buildEnum(enumName, units);

    // Build the DTO interface
    const dtoInterface = buildDto(unitProperties, enumName);

    // Build the base value variable
    const valueMember: PropertyDeclarationStructure = {
        kind: StructureKind.Property,
        name: 'value',
        scope: Scope.Private,
        type: 'number'
    };

    // Build vars for loadzy load converted value 
    const lazyVars = buildLazyloadVars(units);

    // Build base value accessor
    const baseValueAccessor: GetAccessorDeclarationStructure = {
        kind: StructureKind.GetAccessor,
        name: 'BaseValue',
        scope: Scope.Public,
        returnType: 'number',
        statements: `return this.value;`,
        docs: [`The base value of ${unitName} is ${baseUnit.pluralName}.\nThis accessor used when needs a value for calculations and it's better to use directly the base value`],
    };

    // Build the units get-accessors
    const unitGetters = buildUnitGetters(enumName, units);

    // Build the constructor
    const unitCtor = buildUnitCtor(unitName, enumName, baseUnit.pluralName);

    // The DTO converters
    const convertToDtoMethod = buildConvertToDto(unitName, enumName, baseUnit)
    const convertFromDtoMethod = buildConvertFromDto(unitName)

    
    // Build the static creator methods  
    const unitCreators = buildUnitCreatorsMethods(unitName, enumName, units);

    // Build the convert from base to unit method
    const convertFromBaseMethod = buildConvertFromBaseMethod(enumName, units);

    // Build the alternative method to use convert style
    const convertToUnitMethod = buildConvertToUnitMethod(unitName, enumName, units)

    // Build the convert from unit to base method
    const convertToBaseMethod = buildConvertToBaseMethod(enumName, units);

    // Build the equals method 
    const equalsMethod = buildEqualsMethod(unitName);

    // Build the compareTo method 
    const compareToMethod = buildCompareToMethod(unitName);

    // Build basic arithmetics methods
    const arithmeticsMethods = buildArithmeticsMethods(unitName);

    // Build the class 'toString' method
    const toStringMethod = buildToStringMethod(unitName, enumName, units, baseUnit);

    // Build `getUnitAbbreviation` method see #20
    const toUnitAbbreviationMethod = buildGetUnitAbbreviationMethod(unitName, enumName, units, baseUnit);

    // Build the unit class 
    const unitClass: ClassDeclarationStructure = {
        kind: StructureKind.Class,
        name: unitProperties.unitName,
        properties: [valueMember, ...lazyVars],
        getAccessors: [baseValueAccessor, ...unitGetters],
        ctors: [unitCtor],
        methods: [
            ...unitCreators,
            convertToDtoMethod,
            convertFromDtoMethod,
            convertToUnitMethod,
            convertFromBaseMethod,
            convertToBaseMethod,
            toStringMethod,
            toUnitAbbreviationMethod,
            equalsMethod,
            compareToMethod,
            ...arithmeticsMethods],
        isExported: true,
        docs: [unitProperties.JSDoc],
    }

    // Build the unit file with the unit enum and class
    const sourceFile = project.createSourceFile(`${unitsDestinationDirectory}/${unitProperties.unitName.toLowerCase()}.g.ts`, {
        statements: [dtoInterface, unitsEnum, unitClass]
    }, {
        overwrite: true
    });

    // Generate the unit file
    sourceFile.saveSync();
}