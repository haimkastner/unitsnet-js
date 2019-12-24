export declare enum MolarMassUnits {
    GramsPerMole = 0,
    PoundsPerMole = 1,
    Nanogramspermole = 2,
    Microgramspermole = 3,
    Centigramspermole = 4,
    Decigramspermole = 5,
    Decagramspermole = 6,
    Hectogramspermole = 7,
    Kilogramspermole = 8,
    Kilopoundspermole = 9,
    Megapoundspermole = 10
}
export declare class MolarMass {
    private value;
    constructor(value: number, fromUnit: MolarMassUnits);
    get GramsPerMole(): number;
    get PoundsPerMole(): number;
    get Nanogramspermole(): number;
    get Microgramspermole(): number;
    get Centigramspermole(): number;
    get Decigramspermole(): number;
    get Decagramspermole(): number;
    get Hectogramspermole(): number;
    get Kilogramspermole(): number;
    get Kilopoundspermole(): number;
    get Megapoundspermole(): number;
    static FromGramsPerMole(value: number): MolarMass;
    static FromPoundsPerMole(value: number): MolarMass;
    static FromNanogramspermole(value: number): MolarMass;
    static FromMicrogramspermole(value: number): MolarMass;
    static FromCentigramspermole(value: number): MolarMass;
    static FromDecigramspermole(value: number): MolarMass;
    static FromDecagramspermole(value: number): MolarMass;
    static FromHectogramspermole(value: number): MolarMass;
    static FromKilogramspermole(value: number): MolarMass;
    static FromKilopoundspermole(value: number): MolarMass;
    static FromMegapoundspermole(value: number): MolarMass;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=molarmass.g.d.ts.map