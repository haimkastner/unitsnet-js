export declare interface UnitProperties {
    pluralName: string;
    singularName: string;
    unitToBaseFormula: string;
    baseToUnitFormula: string;
    Abbreviation: string;
    JSDoc?: string;
}

export declare interface UnitGenerateOptions {
    unitName: string;
    units: UnitProperties[];
    JSDoc: string;
    baseUnitSingularName: string;
}