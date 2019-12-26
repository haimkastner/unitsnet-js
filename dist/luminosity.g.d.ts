export declare enum LuminosityUnits {
    Watts = 0,
    SolarLuminosities = 1,
    Femtowatt = 2,
    Picowatt = 3,
    Nanowatt = 4,
    Microwatt = 5,
    Deciwatt = 6,
    Decawatt = 7,
    Kilowatt = 8,
    Megawatt = 9,
    Gigawatt = 10,
    Terawatt = 11,
    Petawatt = 12
}
export declare class Luminosity {
    private value;
    private wattsLazy;
    private solarluminositiesLazy;
    private femtowattLazy;
    private picowattLazy;
    private nanowattLazy;
    private microwattLazy;
    private deciwattLazy;
    private decawattLazy;
    private kilowattLazy;
    private megawattLazy;
    private gigawattLazy;
    private terawattLazy;
    private petawattLazy;
    constructor(value: number, fromUnit: LuminosityUnits);
    get Watts(): number;
    get SolarLuminosities(): number;
    get Femtowatt(): number;
    get Picowatt(): number;
    get Nanowatt(): number;
    get Microwatt(): number;
    get Deciwatt(): number;
    get Decawatt(): number;
    get Kilowatt(): number;
    get Megawatt(): number;
    get Gigawatt(): number;
    get Terawatt(): number;
    get Petawatt(): number;
    static FromWatts(value: number): Luminosity;
    static FromSolarLuminosities(value: number): Luminosity;
    static FromFemtowatt(value: number): Luminosity;
    static FromPicowatt(value: number): Luminosity;
    static FromNanowatt(value: number): Luminosity;
    static FromMicrowatt(value: number): Luminosity;
    static FromDeciwatt(value: number): Luminosity;
    static FromDecawatt(value: number): Luminosity;
    static FromKilowatt(value: number): Luminosity;
    static FromMegawatt(value: number): Luminosity;
    static FromGigawatt(value: number): Luminosity;
    static FromTerawatt(value: number): Luminosity;
    static FromPetawatt(value: number): Luminosity;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: LuminosityUnits): string;
}
//# sourceMappingURL=luminosity.g.d.ts.map