export declare enum MolarMassUnits {
    GramsPerMole = 0,
    PoundsPerMole = 1,
    NanogramsPerMole = 2,
    MicrogramsPerMole = 3,
    CentigramsPerMole = 4,
    DecigramsPerMole = 5,
    DecagramsPerMole = 6,
    HectogramsPerMole = 7,
    KilogramsPerMole = 8,
    KilopoundsPerMole = 9,
    MegapoundsPerMole = 10
}
export declare class MolarMass {
    private value;
    private gramspermoleLazy;
    private poundspermoleLazy;
    private nanogramspermoleLazy;
    private microgramspermoleLazy;
    private centigramspermoleLazy;
    private decigramspermoleLazy;
    private decagramspermoleLazy;
    private hectogramspermoleLazy;
    private kilogramspermoleLazy;
    private kilopoundspermoleLazy;
    private megapoundspermoleLazy;
    constructor(value: number, fromUnit: MolarMassUnits);
    get GramsPerMole(): number;
    get PoundsPerMole(): number;
    get NanogramsPerMole(): number;
    get MicrogramsPerMole(): number;
    get CentigramsPerMole(): number;
    get DecigramsPerMole(): number;
    get DecagramsPerMole(): number;
    get HectogramsPerMole(): number;
    get KilogramsPerMole(): number;
    get KilopoundsPerMole(): number;
    get MegapoundsPerMole(): number;
    static FromGramsPerMole(value: number): MolarMass;
    static FromPoundsPerMole(value: number): MolarMass;
    static FromNanogramsPerMole(value: number): MolarMass;
    static FromMicrogramsPerMole(value: number): MolarMass;
    static FromCentigramsPerMole(value: number): MolarMass;
    static FromDecigramsPerMole(value: number): MolarMass;
    static FromDecagramsPerMole(value: number): MolarMass;
    static FromHectogramsPerMole(value: number): MolarMass;
    static FromKilogramsPerMole(value: number): MolarMass;
    static FromKilopoundsPerMole(value: number): MolarMass;
    static FromMegapoundsPerMole(value: number): MolarMass;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MolarMassUnits): string;
}
//# sourceMappingURL=molarmass.g.d.ts.map