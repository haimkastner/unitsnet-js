import { UnitTypeDefinition, UnitDefinition } from "./models/units-definition";
import { generateUnitClass } from './unit-generator';
import { Project } from "ts-morph";
import { UnitProperties } from "./models/units-properties";
import { pascalToCamelCase } from './utiles';
/**
 * The factor between unit and his prefix.
 */
const prefixesFactor: { [key: string]: number } = {
    Exa: 1e18,
    Peta: 1e15,
    Tera: 1e12,
    Giga: 1e9,
    Mega: 1e6,
    Kilo: 1e3,
    Hecto: 1e2,
    Deca: 1e1,
    Deci: 1e-1,
    Centi: 1e-2,
    Mili: 1e-3,
    Micro: 1e-6,
    Nano: 1e-9,
    Pico: 1e-12,
    Femto: 1e-15,
};

/**
 * Generate units from the unit prefixes.
 * For example for if the unit 'Degree' has 'Mili' and 'Micro' prefixes, generate 'Milidegrees' and 'Microdegrees' units. 
 * @param unit The unit to generate from his prefixes
 */
function getUnitPrefixes(unit: UnitDefinition): UnitDefinition[] {
    const unitPrefixes: UnitDefinition[] = [];

    // If there is no prefixes abort.
    if (!unit.Prefixes) {
        return unitPrefixes;
    }

    for (const prefix of unit.Prefixes) {

        // If theere is no factor for the current prefix ignore it.
        if (!prefixesFactor[prefix]) {
            console.warn(`There is no factor for the '${prefix}' ${unit.PluralName} prefix in the 'prefixesFactor' map`);
            continue;
        }

        // Build the prefix formula based on the original unit faormula.
        let fromUnitPrefixToBaseFormula = `(${unit.FromUnitToBaseFunc}) * ${prefixesFactor[prefix]}`;
        let fromBaseToUnitPrefixFormula = `(${unit.FromBaseToUnitFunc}) / ${prefixesFactor[prefix]}`;

        // Create the new unit and push it to the units collection.
        unitPrefixes.push({
            FromUnitToBaseFunc: fromUnitPrefixToBaseFormula,
            FromBaseToUnitFunc: fromBaseToUnitPrefixFormula,

            SingularName: `${prefix}${pascalToCamelCase(unit.SingularName)}`,
            PluralName: `${prefix}${pascalToCamelCase(unit.PluralName)}`,
            Localization: unit.Localization,
        })
    }

    return unitPrefixes;
}

/**
 * Generate units from the unit unis-prefixes.
 * For example for the unit 'Angle' the units 'Degrees' and 'Radians' has 'Mili' prefix so generate 'Milidegrees' and 'Miliradians' units. 
 * @param units The units collection
 * @returns The generated units.
 */
function extandPrefixesUnits(units: UnitDefinition[]): UnitDefinition[] {
    const prefixesUnits: UnitDefinition[] = [];

    for (const unit of units) {
        prefixesUnits.push(...getUnitPrefixes(unit));
    }
    return prefixesUnits;
}

/**
 * Generate a TS class for eatch unit in given units.
 * @param project The generating project (of ts-morph lib) object.
 * @param unitsDestinationDirectory The generate file directory destination.
 * @param rawUnitsDefinitions The units definition from the definition JSON files
 */
export function generateUnitsFromUnitsDefinitions(project: Project, unitsDestinationDirectory: string, rawUnitsDefinitions: UnitTypeDefinition[]) {

    for (const unitDefinitiion of rawUnitsDefinitions) {

        // Add the units prefixes (like MiliXXX or KiloXXX) as unit in the unit units collection.
        unitDefinitiion.Units.push(...extandPrefixesUnits(unitDefinitiion.Units));

        // Generate the TS file to the unit
        generateUnitClass(project, unitsDestinationDirectory, {
            unitName: unitDefinitiion.Name,
            baseUnitSingularName: unitDefinitiion.BaseUnit,
            JSDoc : unitDefinitiion.XmlDoc,
            units: unitDefinitiion.Units.map((unit: UnitDefinition): UnitProperties => ({
                pluralName: unit.PluralName,
                singularName: unit.SingularName,
                unitToBaseFormula: unit.FromBaseToUnitFunc,
                baseToUnitFormula: unit.FromUnitToBaseFunc,
                JSDoc : unit.XmlDocSummary,
                Abbreviation: unit.Localization.find(Abbre => Abbre.Culture === 'en-US')?.Abbreviations[0] as string,
            }))
        });
    }
}