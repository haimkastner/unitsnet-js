export declare enum ElectricPotentialDcUnits {
    VoltsDc = 0,
    MicrovoltDc = 1,
    KilovoltDc = 2,
    MegavoltDc = 3
}
export declare class ElectricPotentialDc {
    private value;
    private voltsdcLazy;
    private microvoltdcLazy;
    private kilovoltdcLazy;
    private megavoltdcLazy;
    constructor(value: number, fromUnit: ElectricPotentialDcUnits);
    get VoltsDc(): number;
    get MicrovoltDc(): number;
    get KilovoltDc(): number;
    get MegavoltDc(): number;
    static FromVoltsDc(value: number): ElectricPotentialDc;
    static FromMicrovoltDc(value: number): ElectricPotentialDc;
    static FromKilovoltDc(value: number): ElectricPotentialDc;
    static FromMegavoltDc(value: number): ElectricPotentialDc;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricPotentialDcUnits): string;
}
//# sourceMappingURL=electricpotentialdc.g.d.ts.map