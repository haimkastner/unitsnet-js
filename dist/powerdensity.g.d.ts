export declare enum PowerDensityUnits {
    WattsPerCubicMeter = 0,
    WattsPerCubicInch = 1,
    WattsPerCubicFoot = 2,
    WattsPerLiter = 3,
    PicowattsPerCubicMeter = 4,
    NanowattsPerCubicMeter = 5,
    MicrowattsPerCubicMeter = 6,
    DeciwattsPerCubicMeter = 7,
    DecawattsPerCubicMeter = 8,
    KilowattsPerCubicMeter = 9,
    MegawattsPerCubicMeter = 10,
    GigawattsPerCubicMeter = 11,
    TerawattsPerCubicMeter = 12,
    PicowattsPerCubicInch = 13,
    NanowattsPerCubicInch = 14,
    MicrowattsPerCubicInch = 15,
    DeciwattsPerCubicInch = 16,
    DecawattsPerCubicInch = 17,
    KilowattsPerCubicInch = 18,
    MegawattsPerCubicInch = 19,
    GigawattsPerCubicInch = 20,
    TerawattsPerCubicInch = 21,
    PicowattsPerCubicFoot = 22,
    NanowattsPerCubicFoot = 23,
    MicrowattsPerCubicFoot = 24,
    DeciwattsPerCubicFoot = 25,
    DecawattsPerCubicFoot = 26,
    KilowattsPerCubicFoot = 27,
    MegawattsPerCubicFoot = 28,
    GigawattsPerCubicFoot = 29,
    TerawattsPerCubicFoot = 30,
    PicowattsPerLiter = 31,
    NanowattsPerLiter = 32,
    MicrowattsPerLiter = 33,
    DeciwattsPerLiter = 34,
    DecawattsPerLiter = 35,
    KilowattsPerLiter = 36,
    MegawattsPerLiter = 37,
    GigawattsPerLiter = 38,
    TerawattsPerLiter = 39
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
    get PicowattsPerCubicMeter(): number;
    get NanowattsPerCubicMeter(): number;
    get MicrowattsPerCubicMeter(): number;
    get DeciwattsPerCubicMeter(): number;
    get DecawattsPerCubicMeter(): number;
    get KilowattsPerCubicMeter(): number;
    get MegawattsPerCubicMeter(): number;
    get GigawattsPerCubicMeter(): number;
    get TerawattsPerCubicMeter(): number;
    get PicowattsPerCubicInch(): number;
    get NanowattsPerCubicInch(): number;
    get MicrowattsPerCubicInch(): number;
    get DeciwattsPerCubicInch(): number;
    get DecawattsPerCubicInch(): number;
    get KilowattsPerCubicInch(): number;
    get MegawattsPerCubicInch(): number;
    get GigawattsPerCubicInch(): number;
    get TerawattsPerCubicInch(): number;
    get PicowattsPerCubicFoot(): number;
    get NanowattsPerCubicFoot(): number;
    get MicrowattsPerCubicFoot(): number;
    get DeciwattsPerCubicFoot(): number;
    get DecawattsPerCubicFoot(): number;
    get KilowattsPerCubicFoot(): number;
    get MegawattsPerCubicFoot(): number;
    get GigawattsPerCubicFoot(): number;
    get TerawattsPerCubicFoot(): number;
    get PicowattsPerLiter(): number;
    get NanowattsPerLiter(): number;
    get MicrowattsPerLiter(): number;
    get DeciwattsPerLiter(): number;
    get DecawattsPerLiter(): number;
    get KilowattsPerLiter(): number;
    get MegawattsPerLiter(): number;
    get GigawattsPerLiter(): number;
    get TerawattsPerLiter(): number;
    static FromWattsPerCubicMeter(value: number): PowerDensity;
    static FromWattsPerCubicInch(value: number): PowerDensity;
    static FromWattsPerCubicFoot(value: number): PowerDensity;
    static FromWattsPerLiter(value: number): PowerDensity;
    static FromPicowattsPerCubicMeter(value: number): PowerDensity;
    static FromNanowattsPerCubicMeter(value: number): PowerDensity;
    static FromMicrowattsPerCubicMeter(value: number): PowerDensity;
    static FromDeciwattsPerCubicMeter(value: number): PowerDensity;
    static FromDecawattsPerCubicMeter(value: number): PowerDensity;
    static FromKilowattsPerCubicMeter(value: number): PowerDensity;
    static FromMegawattsPerCubicMeter(value: number): PowerDensity;
    static FromGigawattsPerCubicMeter(value: number): PowerDensity;
    static FromTerawattsPerCubicMeter(value: number): PowerDensity;
    static FromPicowattsPerCubicInch(value: number): PowerDensity;
    static FromNanowattsPerCubicInch(value: number): PowerDensity;
    static FromMicrowattsPerCubicInch(value: number): PowerDensity;
    static FromDeciwattsPerCubicInch(value: number): PowerDensity;
    static FromDecawattsPerCubicInch(value: number): PowerDensity;
    static FromKilowattsPerCubicInch(value: number): PowerDensity;
    static FromMegawattsPerCubicInch(value: number): PowerDensity;
    static FromGigawattsPerCubicInch(value: number): PowerDensity;
    static FromTerawattsPerCubicInch(value: number): PowerDensity;
    static FromPicowattsPerCubicFoot(value: number): PowerDensity;
    static FromNanowattsPerCubicFoot(value: number): PowerDensity;
    static FromMicrowattsPerCubicFoot(value: number): PowerDensity;
    static FromDeciwattsPerCubicFoot(value: number): PowerDensity;
    static FromDecawattsPerCubicFoot(value: number): PowerDensity;
    static FromKilowattsPerCubicFoot(value: number): PowerDensity;
    static FromMegawattsPerCubicFoot(value: number): PowerDensity;
    static FromGigawattsPerCubicFoot(value: number): PowerDensity;
    static FromTerawattsPerCubicFoot(value: number): PowerDensity;
    static FromPicowattsPerLiter(value: number): PowerDensity;
    static FromNanowattsPerLiter(value: number): PowerDensity;
    static FromMicrowattsPerLiter(value: number): PowerDensity;
    static FromDeciwattsPerLiter(value: number): PowerDensity;
    static FromDecawattsPerLiter(value: number): PowerDensity;
    static FromKilowattsPerLiter(value: number): PowerDensity;
    static FromMegawattsPerLiter(value: number): PowerDensity;
    static FromGigawattsPerLiter(value: number): PowerDensity;
    static FromTerawattsPerLiter(value: number): PowerDensity;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: PowerDensityUnits): string;
}
//# sourceMappingURL=powerdensity.g.d.ts.map