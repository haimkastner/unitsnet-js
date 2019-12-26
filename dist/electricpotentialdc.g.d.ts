export declare enum ElectricPotentialDcUnits {
    VoltsDc = 0,
    Microvoltsdc = 1,
    Kilovoltsdc = 2,
    Megavoltsdc = 3
}
export declare class ElectricPotentialDc {
    private value;
    private voltsdcLazy;
    private microvoltsdcLazy;
    private kilovoltsdcLazy;
    private megavoltsdcLazy;
    constructor(value: number, fromUnit: ElectricPotentialDcUnits);
    get VoltsDc(): number;
    get Microvoltsdc(): number;
    get Kilovoltsdc(): number;
    get Megavoltsdc(): number;
    static FromVoltsDc(value: number): ElectricPotentialDc;
    static FromMicrovoltsdc(value: number): ElectricPotentialDc;
    static FromKilovoltsdc(value: number): ElectricPotentialDc;
    static FromMegavoltsdc(value: number): ElectricPotentialDc;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electricpotentialdc.g.d.ts.map