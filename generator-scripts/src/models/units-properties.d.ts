export declare interface UnitProperties {
    pluralName: string;
    singularName: string;
    unitToBaseFormula: string;
    baseToUnitFormula: string;
    Abbreviation: string;
}

export declare interface UnitGenerateOptions {
    unitName: string;
    units: UnitProperties[];
    baseUnitSingularName: string;
}