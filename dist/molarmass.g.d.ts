export declare enum MolarMassUnits {
    GramsPerMole = 0,
    PoundsPerMole = 1,
    Nanogramspermole = 2,
    Microgramspermole = 3,
    Centigramspermole = 4,
    Decigramspermole = 5,
    Hectogramspermole = 6,
    Kilogramspermole = 7,
    Kilopoundspermole = 8,
    Megapoundspermole = 9
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
    static FromHectogramspermole(value: number): MolarMass;
    static FromKilogramspermole(value: number): MolarMass;
    static FromKilopoundspermole(value: number): MolarMass;
    static FromMegapoundspermole(value: number): MolarMass;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=molarmass.g.d.ts.map