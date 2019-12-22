export declare enum PowerDensityUnits {
    WattsPerCubicMeter = 0,
    WattsPerCubicInch = 1,
    WattsPerCubicFoot = 2,
    WattsPerLiter = 3,
    Picowattspercubicmeter = 4,
    Nanowattspercubicmeter = 5,
    Microwattspercubicmeter = 6,
    Deciwattspercubicmeter = 7,
    Kilowattspercubicmeter = 8,
    Megawattspercubicmeter = 9,
    Gigawattspercubicmeter = 10,
    Terawattspercubicmeter = 11,
    Picowattspercubicinch = 12,
    Nanowattspercubicinch = 13,
    Microwattspercubicinch = 14,
    Deciwattspercubicinch = 15,
    Kilowattspercubicinch = 16,
    Megawattspercubicinch = 17,
    Gigawattspercubicinch = 18,
    Terawattspercubicinch = 19,
    Picowattspercubicfoot = 20,
    Nanowattspercubicfoot = 21,
    Microwattspercubicfoot = 22,
    Deciwattspercubicfoot = 23,
    Kilowattspercubicfoot = 24,
    Megawattspercubicfoot = 25,
    Gigawattspercubicfoot = 26,
    Terawattspercubicfoot = 27,
    Picowattsperliter = 28,
    Nanowattsperliter = 29,
    Microwattsperliter = 30,
    Deciwattsperliter = 31,
    Kilowattsperliter = 32,
    Megawattsperliter = 33,
    Gigawattsperliter = 34,
    Terawattsperliter = 35
}
export declare class PowerDensity {
    private value;
    constructor(value: number, fromUnit: PowerDensityUnits);
    get WattsPerCubicMeter(): number;
    get WattsPerCubicInch(): number;
    get WattsPerCubicFoot(): number;
    get WattsPerLiter(): number;
    get Picowattspercubicmeter(): number;
    get Nanowattspercubicmeter(): number;
    get Microwattspercubicmeter(): number;
    get Deciwattspercubicmeter(): number;
    get Kilowattspercubicmeter(): number;
    get Megawattspercubicmeter(): number;
    get Gigawattspercubicmeter(): number;
    get Terawattspercubicmeter(): number;
    get Picowattspercubicinch(): number;
    get Nanowattspercubicinch(): number;
    get Microwattspercubicinch(): number;
    get Deciwattspercubicinch(): number;
    get Kilowattspercubicinch(): number;
    get Megawattspercubicinch(): number;
    get Gigawattspercubicinch(): number;
    get Terawattspercubicinch(): number;
    get Picowattspercubicfoot(): number;
    get Nanowattspercubicfoot(): number;
    get Microwattspercubicfoot(): number;
    get Deciwattspercubicfoot(): number;
    get Kilowattspercubicfoot(): number;
    get Megawattspercubicfoot(): number;
    get Gigawattspercubicfoot(): number;
    get Terawattspercubicfoot(): number;
    get Picowattsperliter(): number;
    get Nanowattsperliter(): number;
    get Microwattsperliter(): number;
    get Deciwattsperliter(): number;
    get Kilowattsperliter(): number;
    get Megawattsperliter(): number;
    get Gigawattsperliter(): number;
    get Terawattsperliter(): number;
    static FromWattsPerCubicMeter(value: number): PowerDensity;
    static FromWattsPerCubicInch(value: number): PowerDensity;
    static FromWattsPerCubicFoot(value: number): PowerDensity;
    static FromWattsPerLiter(value: number): PowerDensity;
    static FromPicowattspercubicmeter(value: number): PowerDensity;
    static FromNanowattspercubicmeter(value: number): PowerDensity;
    static FromMicrowattspercubicmeter(value: number): PowerDensity;
    static FromDeciwattspercubicmeter(value: number): PowerDensity;
    static FromKilowattspercubicmeter(value: number): PowerDensity;
    static FromMegawattspercubicmeter(value: number): PowerDensity;
    static FromGigawattspercubicmeter(value: number): PowerDensity;
    static FromTerawattspercubicmeter(value: number): PowerDensity;
    static FromPicowattspercubicinch(value: number): PowerDensity;
    static FromNanowattspercubicinch(value: number): PowerDensity;
    static FromMicrowattspercubicinch(value: number): PowerDensity;
    static FromDeciwattspercubicinch(value: number): PowerDensity;
    static FromKilowattspercubicinch(value: number): PowerDensity;
    static FromMegawattspercubicinch(value: number): PowerDensity;
    static FromGigawattspercubicinch(value: number): PowerDensity;
    static FromTerawattspercubicinch(value: number): PowerDensity;
    static FromPicowattspercubicfoot(value: number): PowerDensity;
    static FromNanowattspercubicfoot(value: number): PowerDensity;
    static FromMicrowattspercubicfoot(value: number): PowerDensity;
    static FromDeciwattspercubicfoot(value: number): PowerDensity;
    static FromKilowattspercubicfoot(value: number): PowerDensity;
    static FromMegawattspercubicfoot(value: number): PowerDensity;
    static FromGigawattspercubicfoot(value: number): PowerDensity;
    static FromTerawattspercubicfoot(value: number): PowerDensity;
    static FromPicowattsperliter(value: number): PowerDensity;
    static FromNanowattsperliter(value: number): PowerDensity;
    static FromMicrowattsperliter(value: number): PowerDensity;
    static FromDeciwattsperliter(value: number): PowerDensity;
    static FromKilowattsperliter(value: number): PowerDensity;
    static FromMegawattsperliter(value: number): PowerDensity;
    static FromGigawattsperliter(value: number): PowerDensity;
    static FromTerawattsperliter(value: number): PowerDensity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=powerdensity.g.d.ts.map