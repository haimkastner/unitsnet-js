export declare enum ReactivePowerUnits {
    VoltamperesReactive = 0,
    Kilovoltamperesreactive = 1,
    Megavoltamperesreactive = 2,
    Gigavoltamperesreactive = 3
}
export declare class ReactivePower {
    private value;
    private voltamperesreactiveLazy;
    private kilovoltamperesreactiveLazy;
    private megavoltamperesreactiveLazy;
    private gigavoltamperesreactiveLazy;
    constructor(value: number, fromUnit: ReactivePowerUnits);
    get VoltamperesReactive(): number;
    get Kilovoltamperesreactive(): number;
    get Megavoltamperesreactive(): number;
    get Gigavoltamperesreactive(): number;
    static FromVoltamperesReactive(value: number): ReactivePower;
    static FromKilovoltamperesreactive(value: number): ReactivePower;
    static FromMegavoltamperesreactive(value: number): ReactivePower;
    static FromGigavoltamperesreactive(value: number): ReactivePower;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=reactivepower.g.d.ts.map