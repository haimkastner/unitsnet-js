export declare enum ReactivePowerUnits {
    VoltamperesReactive = 0,
    KilovoltamperesReactive = 1,
    MegavoltamperesReactive = 2,
    GigavoltamperesReactive = 3
}
export declare class ReactivePower {
    private value;
    private voltamperesreactiveLazy;
    private kilovoltamperesreactiveLazy;
    private megavoltamperesreactiveLazy;
    private gigavoltamperesreactiveLazy;
    constructor(value: number, fromUnit: ReactivePowerUnits);
    get VoltamperesReactive(): number;
    get KilovoltamperesReactive(): number;
    get MegavoltamperesReactive(): number;
    get GigavoltamperesReactive(): number;
    static FromVoltamperesReactive(value: number): ReactivePower;
    static FromKilovoltamperesReactive(value: number): ReactivePower;
    static FromMegavoltamperesReactive(value: number): ReactivePower;
    static FromGigavoltamperesReactive(value: number): ReactivePower;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ReactivePowerUnits): string;
}
//# sourceMappingURL=reactivepower.g.d.ts.map