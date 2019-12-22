export declare enum AmountOfSubstanceUnits {
    Moles = 0,
    PoundMoles = 1,
    Nanomoles = 2,
    Micromoles = 3,
    Centimoles = 4,
    Decimoles = 5,
    Kilomoles = 6,
    Megamoles = 7,
    Nanopoundmoles = 8,
    Micropoundmoles = 9,
    Centipoundmoles = 10,
    Decipoundmoles = 11,
    Kilopoundmoles = 12
}
export declare class AmountOfSubstance {
    private value;
    constructor(value: number, fromUnit: AmountOfSubstanceUnits);
    get Moles(): number;
    get PoundMoles(): number;
    get Nanomoles(): number;
    get Micromoles(): number;
    get Centimoles(): number;
    get Decimoles(): number;
    get Kilomoles(): number;
    get Megamoles(): number;
    get Nanopoundmoles(): number;
    get Micropoundmoles(): number;
    get Centipoundmoles(): number;
    get Decipoundmoles(): number;
    get Kilopoundmoles(): number;
    static FromMoles(value: number): AmountOfSubstance;
    static FromPoundMoles(value: number): AmountOfSubstance;
    static FromNanomoles(value: number): AmountOfSubstance;
    static FromMicromoles(value: number): AmountOfSubstance;
    static FromCentimoles(value: number): AmountOfSubstance;
    static FromDecimoles(value: number): AmountOfSubstance;
    static FromKilomoles(value: number): AmountOfSubstance;
    static FromMegamoles(value: number): AmountOfSubstance;
    static FromNanopoundmoles(value: number): AmountOfSubstance;
    static FromMicropoundmoles(value: number): AmountOfSubstance;
    static FromCentipoundmoles(value: number): AmountOfSubstance;
    static FromDecipoundmoles(value: number): AmountOfSubstance;
    static FromKilopoundmoles(value: number): AmountOfSubstance;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=amountofsubstance.g.d.ts.map