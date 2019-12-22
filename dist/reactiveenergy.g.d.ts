export declare enum ReactiveEnergyUnits {
    VoltampereReactiveHours = 0,
    Kilovoltamperereactivehours = 1,
    Megavoltamperereactivehours = 2
}
export declare class ReactiveEnergy {
    private value;
    constructor(value: number, fromUnit: ReactiveEnergyUnits);
    get VoltampereReactiveHours(): number;
    get Kilovoltamperereactivehours(): number;
    get Megavoltamperereactivehours(): number;
    static FromVoltampereReactiveHours(value: number): ReactiveEnergy;
    static FromKilovoltamperereactivehours(value: number): ReactiveEnergy;
    static FromMegavoltamperereactivehours(value: number): ReactiveEnergy;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=reactiveenergy.g.d.ts.map