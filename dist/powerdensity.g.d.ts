export declare enum PowerDensityUnits {
    WattsPerCubicMeter = 0,
    WattsPerCubicInch = 1,
    WattsPerCubicFoot = 2,
    WattsPerLiter = 3,
    PicowattPerCubicMeter = 4,
    NanowattPerCubicMeter = 5,
    MicrowattPerCubicMeter = 6,
    DeciwattPerCubicMeter = 7,
    DecawattPerCubicMeter = 8,
    KilowattPerCubicMeter = 9,
    MegawattPerCubicMeter = 10,
    GigawattPerCubicMeter = 11,
    TerawattPerCubicMeter = 12,
    PicowattPerCubicInch = 13,
    NanowattPerCubicInch = 14,
    MicrowattPerCubicInch = 15,
    DeciwattPerCubicInch = 16,
    DecawattPerCubicInch = 17,
    KilowattPerCubicInch = 18,
    MegawattPerCubicInch = 19,
    GigawattPerCubicInch = 20,
    TerawattPerCubicInch = 21,
    PicowattPerCubicFoot = 22,
    NanowattPerCubicFoot = 23,
    MicrowattPerCubicFoot = 24,
    DeciwattPerCubicFoot = 25,
    DecawattPerCubicFoot = 26,
    KilowattPerCubicFoot = 27,
    MegawattPerCubicFoot = 28,
    GigawattPerCubicFoot = 29,
    TerawattPerCubicFoot = 30,
    PicowattPerLiter = 31,
    NanowattPerLiter = 32,
    MicrowattPerLiter = 33,
    DeciwattPerLiter = 34,
    DecawattPerLiter = 35,
    KilowattPerLiter = 36,
    MegawattPerLiter = 37,
    GigawattPerLiter = 38,
    TerawattPerLiter = 39
}
export declare class PowerDensity {
    private value;
    private wattspercubicmeterLazy;
    private wattspercubicinchLazy;
    private wattspercubicfootLazy;
    private wattsperliterLazy;
    private picowattpercubicmeterLazy;
    private nanowattpercubicmeterLazy;
    private microwattpercubicmeterLazy;
    private deciwattpercubicmeterLazy;
    private decawattpercubicmeterLazy;
    private kilowattpercubicmeterLazy;
    private megawattpercubicmeterLazy;
    private gigawattpercubicmeterLazy;
    private terawattpercubicmeterLazy;
    private picowattpercubicinchLazy;
    private nanowattpercubicinchLazy;
    private microwattpercubicinchLazy;
    private deciwattpercubicinchLazy;
    private decawattpercubicinchLazy;
    private kilowattpercubicinchLazy;
    private megawattpercubicinchLazy;
    private gigawattpercubicinchLazy;
    private terawattpercubicinchLazy;
    private picowattpercubicfootLazy;
    private nanowattpercubicfootLazy;
    private microwattpercubicfootLazy;
    private deciwattpercubicfootLazy;
    private decawattpercubicfootLazy;
    private kilowattpercubicfootLazy;
    private megawattpercubicfootLazy;
    private gigawattpercubicfootLazy;
    private terawattpercubicfootLazy;
    private picowattperliterLazy;
    private nanowattperliterLazy;
    private microwattperliterLazy;
    private deciwattperliterLazy;
    private decawattperliterLazy;
    private kilowattperliterLazy;
    private megawattperliterLazy;
    private gigawattperliterLazy;
    private terawattperliterLazy;
    constructor(value: number, fromUnit: PowerDensityUnits);
    get WattsPerCubicMeter(): number;
    get WattsPerCubicInch(): number;
    get WattsPerCubicFoot(): number;
    get WattsPerLiter(): number;
    get PicowattPerCubicMeter(): number;
    get NanowattPerCubicMeter(): number;
    get MicrowattPerCubicMeter(): number;
    get DeciwattPerCubicMeter(): number;
    get DecawattPerCubicMeter(): number;
    get KilowattPerCubicMeter(): number;
    get MegawattPerCubicMeter(): number;
    get GigawattPerCubicMeter(): number;
    get TerawattPerCubicMeter(): number;
    get PicowattPerCubicInch(): number;
    get NanowattPerCubicInch(): number;
    get MicrowattPerCubicInch(): number;
    get DeciwattPerCubicInch(): number;
    get DecawattPerCubicInch(): number;
    get KilowattPerCubicInch(): number;
    get MegawattPerCubicInch(): number;
    get GigawattPerCubicInch(): number;
    get TerawattPerCubicInch(): number;
    get PicowattPerCubicFoot(): number;
    get NanowattPerCubicFoot(): number;
    get MicrowattPerCubicFoot(): number;
    get DeciwattPerCubicFoot(): number;
    get DecawattPerCubicFoot(): number;
    get KilowattPerCubicFoot(): number;
    get MegawattPerCubicFoot(): number;
    get GigawattPerCubicFoot(): number;
    get TerawattPerCubicFoot(): number;
    get PicowattPerLiter(): number;
    get NanowattPerLiter(): number;
    get MicrowattPerLiter(): number;
    get DeciwattPerLiter(): number;
    get DecawattPerLiter(): number;
    get KilowattPerLiter(): number;
    get MegawattPerLiter(): number;
    get GigawattPerLiter(): number;
    get TerawattPerLiter(): number;
    static FromWattsPerCubicMeter(value: number): PowerDensity;
    static FromWattsPerCubicInch(value: number): PowerDensity;
    static FromWattsPerCubicFoot(value: number): PowerDensity;
    static FromWattsPerLiter(value: number): PowerDensity;
    static FromPicowattPerCubicMeter(value: number): PowerDensity;
    static FromNanowattPerCubicMeter(value: number): PowerDensity;
    static FromMicrowattPerCubicMeter(value: number): PowerDensity;
    static FromDeciwattPerCubicMeter(value: number): PowerDensity;
    static FromDecawattPerCubicMeter(value: number): PowerDensity;
    static FromKilowattPerCubicMeter(value: number): PowerDensity;
    static FromMegawattPerCubicMeter(value: number): PowerDensity;
    static FromGigawattPerCubicMeter(value: number): PowerDensity;
    static FromTerawattPerCubicMeter(value: number): PowerDensity;
    static FromPicowattPerCubicInch(value: number): PowerDensity;
    static FromNanowattPerCubicInch(value: number): PowerDensity;
    static FromMicrowattPerCubicInch(value: number): PowerDensity;
    static FromDeciwattPerCubicInch(value: number): PowerDensity;
    static FromDecawattPerCubicInch(value: number): PowerDensity;
    static FromKilowattPerCubicInch(value: number): PowerDensity;
    static FromMegawattPerCubicInch(value: number): PowerDensity;
    static FromGigawattPerCubicInch(value: number): PowerDensity;
    static FromTerawattPerCubicInch(value: number): PowerDensity;
    static FromPicowattPerCubicFoot(value: number): PowerDensity;
    static FromNanowattPerCubicFoot(value: number): PowerDensity;
    static FromMicrowattPerCubicFoot(value: number): PowerDensity;
    static FromDeciwattPerCubicFoot(value: number): PowerDensity;
    static FromDecawattPerCubicFoot(value: number): PowerDensity;
    static FromKilowattPerCubicFoot(value: number): PowerDensity;
    static FromMegawattPerCubicFoot(value: number): PowerDensity;
    static FromGigawattPerCubicFoot(value: number): PowerDensity;
    static FromTerawattPerCubicFoot(value: number): PowerDensity;
    static FromPicowattPerLiter(value: number): PowerDensity;
    static FromNanowattPerLiter(value: number): PowerDensity;
    static FromMicrowattPerLiter(value: number): PowerDensity;
    static FromDeciwattPerLiter(value: number): PowerDensity;
    static FromDecawattPerLiter(value: number): PowerDensity;
    static FromKilowattPerLiter(value: number): PowerDensity;
    static FromMegawattPerLiter(value: number): PowerDensity;
    static FromGigawattPerLiter(value: number): PowerDensity;
    static FromTerawattPerLiter(value: number): PowerDensity;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: PowerDensityUnits): string;
}
//# sourceMappingURL=powerdensity.g.d.ts.map