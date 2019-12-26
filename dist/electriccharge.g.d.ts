export declare enum ElectricChargeUnits {
    Coulombs = 0,
    AmpereHours = 1,
    Kiloamperehours = 2,
    Megaamperehours = 3
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
    get Kiloamperehours(): number;
    get Megaamperehours(): number;
    static FromCoulombs(value: number): ElectricCharge;
    static FromAmpereHours(value: number): ElectricCharge;
    static FromKiloamperehours(value: number): ElectricCharge;
    static FromMegaamperehours(value: number): ElectricCharge;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electriccharge.g.d.ts.map