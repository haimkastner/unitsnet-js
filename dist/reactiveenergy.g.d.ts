export declare enum ReactiveEnergyUnits {
    VoltampereReactiveHours = 0,
    KilovoltampereReactiveHour = 1,
    MegavoltampereReactiveHour = 2
}
export declare class ReactiveEnergy {
    private value;
    private voltamperereactivehoursLazy;
    private kilovoltamperereactivehourLazy;
    private megavoltamperereactivehourLazy;
    constructor(value: number, fromUnit: ReactiveEnergyUnits);
    get VoltampereReactiveHours(): number;
    get KilovoltampereReactiveHour(): number;
    get MegavoltampereReactiveHour(): number;
    static FromVoltampereReactiveHours(value: number): ReactiveEnergy;
    static FromKilovoltampereReactiveHour(value: number): ReactiveEnergy;
    static FromMegavoltampereReactiveHour(value: number): ReactiveEnergy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ReactiveEnergyUnits): string;
}
//# sourceMappingURL=reactiveenergy.g.d.ts.map