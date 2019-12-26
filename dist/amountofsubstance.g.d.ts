export declare enum AmountOfSubstanceUnits {
    Moles = 0,
    PoundMoles = 1,
    Nanomole = 2,
    Micromole = 3,
    Centimole = 4,
    Decimole = 5,
    Kilomole = 6,
    Megamole = 7,
    NanopoundMole = 8,
    MicropoundMole = 9,
    CentipoundMole = 10,
    DecipoundMole = 11,
    KilopoundMole = 12
}
export declare class AmountOfSubstance {
    private value;
    private molesLazy;
    private poundmolesLazy;
    private nanomoleLazy;
    private micromoleLazy;
    private centimoleLazy;
    private decimoleLazy;
    private kilomoleLazy;
    private megamoleLazy;
    private nanopoundmoleLazy;
    private micropoundmoleLazy;
    private centipoundmoleLazy;
    private decipoundmoleLazy;
    private kilopoundmoleLazy;
    constructor(value: number, fromUnit: AmountOfSubstanceUnits);
    get Moles(): number;
    get PoundMoles(): number;
    get Nanomole(): number;
    get Micromole(): number;
    get Centimole(): number;
    get Decimole(): number;
    get Kilomole(): number;
    get Megamole(): number;
    get NanopoundMole(): number;
    get MicropoundMole(): number;
    get CentipoundMole(): number;
    get DecipoundMole(): number;
    get KilopoundMole(): number;
    static FromMoles(value: number): AmountOfSubstance;
    static FromPoundMoles(value: number): AmountOfSubstance;
    static FromNanomole(value: number): AmountOfSubstance;
    static FromMicromole(value: number): AmountOfSubstance;
    static FromCentimole(value: number): AmountOfSubstance;
    static FromDecimole(value: number): AmountOfSubstance;
    static FromKilomole(value: number): AmountOfSubstance;
    static FromMegamole(value: number): AmountOfSubstance;
    static FromNanopoundMole(value: number): AmountOfSubstance;
    static FromMicropoundMole(value: number): AmountOfSubstance;
    static FromCentipoundMole(value: number): AmountOfSubstance;
    static FromDecipoundMole(value: number): AmountOfSubstance;
    static FromKilopoundMole(value: number): AmountOfSubstance;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: AmountOfSubstanceUnits): string;
}
//# sourceMappingURL=amountofsubstance.g.d.ts.map