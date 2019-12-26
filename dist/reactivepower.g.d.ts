export declare enum ReactivePowerUnits {
    VoltamperesReactive = 0,
    KilovoltampereReactive = 1,
    MegavoltampereReactive = 2,
    GigavoltampereReactive = 3
}
export declare class ReactivePower {
    private value;
    private voltamperesreactiveLazy;
    private kilovoltamperereactiveLazy;
    private megavoltamperereactiveLazy;
    private gigavoltamperereactiveLazy;
    constructor(value: number, fromUnit: ReactivePowerUnits);
    get VoltamperesReactive(): number;
    get KilovoltampereReactive(): number;
    get MegavoltampereReactive(): number;
    get GigavoltampereReactive(): number;
    static FromVoltamperesReactive(value: number): ReactivePower;
    static FromKilovoltampereReactive(value: number): ReactivePower;
    static FromMegavoltampereReactive(value: number): ReactivePower;
    static FromGigavoltampereReactive(value: number): ReactivePower;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ReactivePowerUnits): string;
}
//# sourceMappingURL=reactivepower.g.d.ts.map