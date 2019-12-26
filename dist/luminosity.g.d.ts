export declare enum LuminosityUnits {
    Watts = 0,
    SolarLuminosities = 1,
    Femtowatts = 2,
    Picowatts = 3,
    Nanowatts = 4,
    Microwatts = 5,
    Deciwatts = 6,
    Decawatts = 7,
    Kilowatts = 8,
    Megawatts = 9,
    Gigawatts = 10,
    Terawatts = 11,
    Petawatts = 12
}
export declare class Luminosity {
    private value;
    private wattsLazy;
    private solarluminositiesLazy;
    private femtowattsLazy;
    private picowattsLazy;
    private nanowattsLazy;
    private microwattsLazy;
    private deciwattsLazy;
    private decawattsLazy;
    private kilowattsLazy;
    private megawattsLazy;
    private gigawattsLazy;
    private terawattsLazy;
    private petawattsLazy;
    constructor(value: number, fromUnit: LuminosityUnits);
    get Watts(): number;
    get SolarLuminosities(): number;
    get Femtowatts(): number;
    get Picowatts(): number;
    get Nanowatts(): number;
    get Microwatts(): number;
    get Deciwatts(): number;
    get Decawatts(): number;
    get Kilowatts(): number;
    get Megawatts(): number;
    get Gigawatts(): number;
    get Terawatts(): number;
    get Petawatts(): number;
    static FromWatts(value: number): Luminosity;
    static FromSolarLuminosities(value: number): Luminosity;
    static FromFemtowatts(value: number): Luminosity;
    static FromPicowatts(value: number): Luminosity;
    static FromNanowatts(value: number): Luminosity;
    static FromMicrowatts(value: number): Luminosity;
    static FromDeciwatts(value: number): Luminosity;
    static FromDecawatts(value: number): Luminosity;
    static FromKilowatts(value: number): Luminosity;
    static FromMegawatts(value: number): Luminosity;
    static FromGigawatts(value: number): Luminosity;
    static FromTerawatts(value: number): Luminosity;
    static FromPetawatts(value: number): Luminosity;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: LuminosityUnits): string;
}
//# sourceMappingURL=luminosity.g.d.ts.map