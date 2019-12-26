export declare enum ElectricChargeUnits {
    Coulombs = 0,
    AmpereHours = 1,
    KiloampereHour = 2,
    MegaampereHour = 3
}
export declare class ElectricCharge {
    private value;
    private coulombsLazy;
    private amperehoursLazy;
    private kiloamperehourLazy;
    private megaamperehourLazy;
    constructor(value: number, fromUnit: ElectricChargeUnits);
    get Coulombs(): number;
    get AmpereHours(): number;
    get KiloampereHour(): number;
    get MegaampereHour(): number;
    static FromCoulombs(value: number): ElectricCharge;
    static FromAmpereHours(value: number): ElectricCharge;
    static FromKiloampereHour(value: number): ElectricCharge;
    static FromMegaampereHour(value: number): ElectricCharge;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricChargeUnits): string;
}
//# sourceMappingURL=electriccharge.g.d.ts.map