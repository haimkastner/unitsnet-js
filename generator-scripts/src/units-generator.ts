import { UnitTypeDefinition, UnitDefinition, Prefix } from "./models/units-definition";
import { generateUnitClass } from './unit-generator';
import { Project } from "ts-morph";
import { UnitProperties } from "./models/units-properties";

const prefixesFactor: { [key: string]: number } = {
    Exa: 1e18,
    Peta: 1e15,
    Tera: 1e12,
    Giga: 1e9,
    Mega: 1e6,
    Kilo: 1e3,
    Hecto: 1e2,
    Deci: 1e-1,
    Centi: 1e-2,
    Mili: 1e-3,
    Micro: 1e-6,
    Nano: 1e-9,
    Pico: 1e-12,
};

function getUnitPrefixes(unit: UnitDefinition): UnitDefinition[] {
    const unitPrefixes: UnitDefinition[] = [];

    if (!unit.Prefixes) {
        return unitPrefixes;
    }


    for (const prefix of unit.Prefixes) {

        if(!prefixesFactor[prefix]){
            continue;
        }

        let fromUnitToBaseFormula = `(${unit.FromBaseToUnitFunc}) / ${prefixesFactor[prefix]}`;
        let toBaseToUnitFormula = `(${unit.FromUnitToBaseFunc}) * ${prefixesFactor[prefix]}`;

        unitPrefixes.push({
            FromUnitToBaseFunc: fromUnitToBaseFormula,
            FromBaseToUnitFunc: toBaseToUnitFormula,

            SingularName: `${prefix}${unit.SingularName.toLowerCase()}`,
            PluralName: `${prefix}${unit.PluralName.toLowerCase()}`,
            Localization: unit.Localization,
        })
    }

    return unitPrefixes;
}

function extandPrefixesUnits(units: UnitDefinition[]): UnitDefinition[] {
    const prefixesUnits: UnitDefinition[] = [];

    for (const unit of units) {
        prefixesUnits.push(...getUnitPrefixes(unit));
    }
    return prefixesUnits;
}

export function generateUnitsFromUnitsDefinitions(rawUnitsDefinitions: UnitTypeDefinition[], unitsDestinationDirectory : string) {

    const project = new Project({
        tsConfigFilePath: "./tsconfig.json"
    });

    for (const unitDefinitiion of rawUnitsDefinitions) {

        unitDefinitiion.Units.push(...extandPrefixesUnits(unitDefinitiion.Units));

        generateUnitClass(project, unitsDestinationDirectory, {
            unitName: unitDefinitiion.Name,
            units: unitDefinitiion.Units.map((unit: UnitDefinition): UnitProperties => ({
                name: unit.PluralName,
                unitToBaseFormula: unit.FromBaseToUnitFunc,
                baseToUnitFormula: unit.FromUnitToBaseFunc
            }))
        });
    }
}