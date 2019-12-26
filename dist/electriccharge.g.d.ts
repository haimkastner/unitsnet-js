export declare enum ElectricChargeUnits {
    Coulombs = 0,
    AmpereHours = 1,
    KiloampereHours = 2,
    MegaampereHours = 3
}
export declare class ElectricCharge {
    private value;
    private coulombsLazy;
    private amperehoursLazy;
    private kiloamperehoursLazy;
    private megaamperehoursLazy;
    constructor(value: number, fromUnit: ElectricChargeUnits);
    get Coulombs(): number;
    get AmpereHours(): number;
    get KiloampereHours(): number;
    get MegaampereHours(): number;
    static FromCoulombs(value: number): ElectricCharge;
    static FromAmpereHours(value: number): ElectricCharge;
    static FromKiloampereHours(value: number): ElectricCharge;
    static FromMegaampereHours(value: number): ElectricCharge;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricChargeUnits): string;
}
//# sourceMappingURL=electriccharge.g.d.ts.map