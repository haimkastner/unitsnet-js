export declare enum ElectricPotentialDcUnits {
    VoltsDc = 0,
    MicrovoltsDc = 1,
    KilovoltsDc = 2,
    MegavoltsDc = 3
}
export declare class ElectricPotentialDc {
    private value;
    private voltsdcLazy;
    private microvoltsdcLazy;
    private kilovoltsdcLazy;
    private megavoltsdcLazy;
    constructor(value: number, fromUnit: ElectricPotentialDcUnits);
    get VoltsDc(): number;
    get MicrovoltsDc(): number;
    get KilovoltsDc(): number;
    get MegavoltsDc(): number;
    static FromVoltsDc(value: number): ElectricPotentialDc;
    static FromMicrovoltsDc(value: number): ElectricPotentialDc;
    static FromKilovoltsDc(value: number): ElectricPotentialDc;
    static FromMegavoltsDc(value: number): ElectricPotentialDc;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricPotentialDcUnits): string;
}
//# sourceMappingURL=electricpotentialdc.g.d.ts.map