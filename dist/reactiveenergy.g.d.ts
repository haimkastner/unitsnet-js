export declare enum ReactiveEnergyUnits {
    VoltampereReactiveHours = 0,
    KilovoltampereReactiveHours = 1,
    MegavoltampereReactiveHours = 2
}
export declare class ReactiveEnergy {
    private value;
    private voltamperereactivehoursLazy;
    private kilovoltamperereactivehoursLazy;
    private megavoltamperereactivehoursLazy;
    constructor(value: number, fromUnit: ReactiveEnergyUnits);
    get VoltampereReactiveHours(): number;
    get KilovoltampereReactiveHours(): number;
    get MegavoltampereReactiveHours(): number;
    static FromVoltampereReactiveHours(value: number): ReactiveEnergy;
    static FromKilovoltampereReactiveHours(value: number): ReactiveEnergy;
    static FromMegavoltampereReactiveHours(value: number): ReactiveEnergy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ReactiveEnergyUnits): string;
}
//# sourceMappingURL=reactiveenergy.g.d.ts.map