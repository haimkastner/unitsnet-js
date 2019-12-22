export declare enum LuminosityUnits {
    Watts = 0,
    SolarLuminosities = 1,
    Picowatts = 2,
    Nanowatts = 3,
    Microwatts = 4,
    Deciwatts = 5,
    Kilowatts = 6,
    Megawatts = 7,
    Gigawatts = 8,
    Terawatts = 9,
    Petawatts = 10
}
export declare class Luminosity {
    private value;
    constructor(value: number, fromUnit: LuminosityUnits);
    get Watts(): number;
    get SolarLuminosities(): number;
    get Picowatts(): number;
    get Nanowatts(): number;
    get Microwatts(): number;
    get Deciwatts(): number;
    get Kilowatts(): number;
    get Megawatts(): number;
    get Gigawatts(): number;
    get Terawatts(): number;
    get Petawatts(): number;
    static FromWatts(value: number): Luminosity;
    static FromSolarLuminosities(value: number): Luminosity;
    static FromPicowatts(value: number): Luminosity;
    static FromNanowatts(value: number): Luminosity;
    static FromMicrowatts(value: number): Luminosity;
    static FromDeciwatts(value: number): Luminosity;
    static FromKilowatts(value: number): Luminosity;
    static FromMegawatts(value: number): Luminosity;
    static FromGigawatts(value: number): Luminosity;
    static FromTerawatts(value: number): Luminosity;
    static FromPetawatts(value: number): Luminosity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=luminosity.g.d.ts.map