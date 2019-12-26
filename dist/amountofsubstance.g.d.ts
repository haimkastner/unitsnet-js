export declare enum AmountOfSubstanceUnits {
    Moles = 0,
    PoundMoles = 1,
    Nanomoles = 2,
    Micromoles = 3,
    Centimoles = 4,
    Decimoles = 5,
    Kilomoles = 6,
    Megamoles = 7,
    NanopoundMoles = 8,
    MicropoundMoles = 9,
    CentipoundMoles = 10,
    DecipoundMoles = 11,
    KilopoundMoles = 12
}
export declare class AmountOfSubstance {
    private value;
    private molesLazy;
    private poundmolesLazy;
    private nanomolesLazy;
    private micromolesLazy;
    private centimolesLazy;
    private decimolesLazy;
    private kilomolesLazy;
    private megamolesLazy;
    private nanopoundmolesLazy;
    private micropoundmolesLazy;
    private centipoundmolesLazy;
    private decipoundmolesLazy;
    private kilopoundmolesLazy;
    constructor(value: number, fromUnit: AmountOfSubstanceUnits);
    get Moles(): number;
    get PoundMoles(): number;
    get Nanomoles(): number;
    get Micromoles(): number;
    get Centimoles(): number;
    get Decimoles(): number;
    get Kilomoles(): number;
    get Megamoles(): number;
    get NanopoundMoles(): number;
    get MicropoundMoles(): number;
    get CentipoundMoles(): number;
    get DecipoundMoles(): number;
    get KilopoundMoles(): number;
    static FromMoles(value: number): AmountOfSubstance;
    static FromPoundMoles(value: number): AmountOfSubstance;
    static FromNanomoles(value: number): AmountOfSubstance;
    static FromMicromoles(value: number): AmountOfSubstance;
    static FromCentimoles(value: number): AmountOfSubstance;
    static FromDecimoles(value: number): AmountOfSubstance;
    static FromKilomoles(value: number): AmountOfSubstance;
    static FromMegamoles(value: number): AmountOfSubstance;
    static FromNanopoundMoles(value: number): AmountOfSubstance;
    static FromMicropoundMoles(value: number): AmountOfSubstance;
    static FromCentipoundMoles(value: number): AmountOfSubstance;
    static FromDecipoundMoles(value: number): AmountOfSubstance;
    static FromKilopoundMoles(value: number): AmountOfSubstance;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: AmountOfSubstanceUnits): string;
}
//# sourceMappingURL=amountofsubstance.g.d.ts.map