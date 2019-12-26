export declare enum MolarMassUnits {
    GramsPerMole = 0,
    PoundsPerMole = 1,
    NanogramPerMole = 2,
    MicrogramPerMole = 3,
    CentigramPerMole = 4,
    DecigramPerMole = 5,
    DecagramPerMole = 6,
    HectogramPerMole = 7,
    KilogramPerMole = 8,
    KilopoundPerMole = 9,
    MegapoundPerMole = 10
}
export declare class MolarMass {
    private value;
    private gramspermoleLazy;
    private poundspermoleLazy;
    private nanogrampermoleLazy;
    private microgrampermoleLazy;
    private centigrampermoleLazy;
    private decigrampermoleLazy;
    private decagrampermoleLazy;
    private hectogrampermoleLazy;
    private kilogrampermoleLazy;
    private kilopoundpermoleLazy;
    private megapoundpermoleLazy;
    constructor(value: number, fromUnit: MolarMassUnits);
    get GramsPerMole(): number;
    get PoundsPerMole(): number;
    get NanogramPerMole(): number;
    get MicrogramPerMole(): number;
    get CentigramPerMole(): number;
    get DecigramPerMole(): number;
    get DecagramPerMole(): number;
    get HectogramPerMole(): number;
    get KilogramPerMole(): number;
    get KilopoundPerMole(): number;
    get MegapoundPerMole(): number;
    static FromGramsPerMole(value: number): MolarMass;
    static FromPoundsPerMole(value: number): MolarMass;
    static FromNanogramPerMole(value: number): MolarMass;
    static FromMicrogramPerMole(value: number): MolarMass;
    static FromCentigramPerMole(value: number): MolarMass;
    static FromDecigramPerMole(value: number): MolarMass;
    static FromDecagramPerMole(value: number): MolarMass;
    static FromHectogramPerMole(value: number): MolarMass;
    static FromKilogramPerMole(value: number): MolarMass;
    static FromKilopoundPerMole(value: number): MolarMass;
    static FromMegapoundPerMole(value: number): MolarMass;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MolarMassUnits): string;
}
//# sourceMappingURL=molarmass.g.d.ts.map