export declare type Prefix = 'Nano' | 'Micro' | 'Milli' | 'Centi' | 'Deci' | 'Hecto' | 'Kilo' | 'Mega' | 'Giga' | 'Tera' | 'Peta' | 'Exa';

export declare interface Abbreviation {
    Culture: string;
    Abbreviations: string[];
}

export declare interface UnitDefinition {
    SingularName: string;
    PluralName: string;
    FromUnitToBaseFunc: string;
    FromBaseToUnitFunc: string;
    Prefixes?: Prefix[];
    XmlDocSummary?: string;
    XmlDocRemarks?: string;
    Localization: Abbreviation[];
}


export declare interface UnitTypeDefinition {
    Name: string;
    BaseUnit: string;
    XmlDoc: string;
    Units: UnitDefinition[];
}