export declare enum PowerDensityUnits {
    WattsPerCubicMeter = 0,
    WattsPerCubicInch = 1,
    WattsPerCubicFoot = 2,
    WattsPerLiter = 3,
    Picowattspercubicmeter = 4,
    Nanowattspercubicmeter = 5,
    Microwattspercubicmeter = 6,
    Deciwattspercubicmeter = 7,
    Decawattspercubicmeter = 8,
    Kilowattspercubicmeter = 9,
    Megawattspercubicmeter = 10,
    Gigawattspercubicmeter = 11,
    Terawattspercubicmeter = 12,
    Picowattspercubicinch = 13,
    Nanowattspercubicinch = 14,
    Microwattspercubicinch = 15,
    Deciwattspercubicinch = 16,
    Decawattspercubicinch = 17,
    Kilowattspercubicinch = 18,
    Megawattspercubicinch = 19,
    Gigawattspercubicinch = 20,
    Terawattspercubicinch = 21,
    Picowattspercubicfoot = 22,
    Nanowattspercubicfoot = 23,
    Microwattspercubicfoot = 24,
    Deciwattspercubicfoot = 25,
    Decawattspercubicfoot = 26,
    Kilowattspercubicfoot = 27,
    Megawattspercubicfoot = 28,
    Gigawattspercubicfoot = 29,
    Terawattspercubicfoot = 30,
    Picowattsperliter = 31,
    Nanowattsperliter = 32,
    Microwattsperliter = 33,
    Deciwattsperliter = 34,
    Decawattsperliter = 35,
    Kilowattsperliter = 36,
    Megawattsperliter = 37,
    Gigawattsperliter = 38,
    Terawattsperliter = 39
}
export declare class PowerDensity {
    private value;
    private wattspercubicmeterLazy;
    private wattspercubicinchLazy;
    private wattspercubicfootLazy;
    private wattsperliterLazy;
    private picowattspercubicmeterLazy;
    private nanowattspercubicmeterLazy;
    private microwattspercubicmeterLazy;
    private deciwattspercubicmeterLazy;
    private decawattspercubicmeterLazy;
    private kilowattspercubicmeterLazy;
    private megawattspercubicmeterLazy;
    private gigawattspercubicmeterLazy;
    private terawattspercubicmeterLazy;
    private picowattspercubicinchLazy;
    private nanowattspercubicinchLazy;
    private microwattspercubicinchLazy;
    private deciwattspercubicinchLazy;
    private decawattspercubicinchLazy;
    private kilowattspercubicinchLazy;
    private megawattspercubicinchLazy;
    private gigawattspercubicinchLazy;
    private terawattspercubicinchLazy;
    private picowattspercubicfootLazy;
    private nanowattspercubicfootLazy;
    private microwattspercubicfootLazy;
    private deciwattspercubicfootLazy;
    private decawattspercubicfootLazy;
    private kilowattspercubicfootLazy;
    private megawattspercubicfootLazy;
    private gigawattspercubicfootLazy;
    private terawattspercubicfootLazy;
    private picowattsperliterLazy;
    private nanowattsperliterLazy;
    private microwattsperliterLazy;
    private deciwattsperliterLazy;
    private decawattsperliterLazy;
    private kilowattsperliterLazy;
    private megawattsperliterLazy;
    private gigawattsperliterLazy;
    private terawattsperliterLazy;
    constructor(value: number, fromUnit: PowerDensityUnits);
    get WattsPerCubicMeter(): number;
    get WattsPerCubicInch(): number;
    get WattsPerCubicFoot(): number;
    get WattsPerLiter(): number;
    get Picowattspercubicmeter(): number;
    get Nanowattspercubicmeter(): number;
    get Microwattspercubicmeter(): number;
    get Deciwattspercubicmeter(): number;
    get Decawattspercubicmeter(): number;
    get Kilowattspercubicmeter(): number;
    get Megawattspercubicmeter(): number;
    get Gigawattspercubicmeter(): number;
    get Terawattspercubicmeter(): number;
    get Picowattspercubicinch(): number;
    get Nanowattspercubicinch(): number;
    get Microwattspercubicinch(): number;
    get Deciwattspercubicinch(): number;
    get Decawattspercubicinch(): number;
    get Kilowattspercubicinch(): number;
    get Megawattspercubicinch(): number;
    get Gigawattspercubicinch(): number;
    get Terawattspercubicinch(): number;
    get Picowattspercubicfoot(): number;
    get Nanowattspercubicfoot(): number;
    get Microwattspercubicfoot(): number;
    get Deciwattspercubicfoot(): number;
    get Decawattspercubicfoot(): number;
    get Kilowattspercubicfoot(): number;
    get Megawattspercubicfoot(): number;
    get Gigawattspercubicfoot(): number;
    get Terawattspercubicfoot(): number;
    get Picowattsperliter(): number;
    get Nanowattsperliter(): number;
    get Microwattsperliter(): number;
    get Deciwattsperliter(): number;
    get Decawattsperliter(): number;
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
    static FromDecawattspercubicmeter(value: number): PowerDensity;
    static FromKilowattspercubicmeter(value: number): PowerDensity;
    static FromMegawattspercubicmeter(value: number): PowerDensity;
    static FromGigawattspercubicmeter(value: number): PowerDensity;
    static FromTerawattspercubicmeter(value: number): PowerDensity;
    static FromPicowattspercubicinch(value: number): PowerDensity;
    static FromNanowattspercubicinch(value: number): PowerDensity;
    static FromMicrowattspercubicinch(value: number): PowerDensity;
    static FromDeciwattspercubicinch(value: number): PowerDensity;
    static FromDecawattspercubicinch(value: number): PowerDensity;
    static FromKilowattspercubicinch(value: number): PowerDensity;
    static FromMegawattspercubicinch(value: number): PowerDensity;
    static FromGigawattspercubicinch(value: number): PowerDensity;
    static FromTerawattspercubicinch(value: number): PowerDensity;
    static FromPicowattspercubicfoot(value: number): PowerDensity;
    static FromNanowattspercubicfoot(value: number): PowerDensity;
    static FromMicrowattspercubicfoot(value: number): PowerDensity;
    static FromDeciwattspercubicfoot(value: number): PowerDensity;
    static FromDecawattspercubicfoot(value: number): PowerDensity;
    static FromKilowattspercubicfoot(value: number): PowerDensity;
    static FromMegawattspercubicfoot(value: number): PowerDensity;
    static FromGigawattspercubicfoot(value: number): PowerDensity;
    static FromTerawattspercubicfoot(value: number): PowerDensity;
    static FromPicowattsperliter(value: number): PowerDensity;
    static FromNanowattsperliter(value: number): PowerDensity;
    static FromMicrowattsperliter(value: number): PowerDensity;
    static FromDeciwattsperliter(value: number): PowerDensity;
    static FromDecawattsperliter(value: number): PowerDensity;
    static FromKilowattsperliter(value: number): PowerDensity;
    static FromMegawattsperliter(value: number): PowerDensity;
    static FromGigawattsperliter(value: number): PowerDensity;
    static FromTerawattsperliter(value: number): PowerDensity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=powerdensity.g.d.ts.map