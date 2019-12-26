export declare enum ApparentEnergyUnits {
    VoltampereHours = 0,
    Kilovoltamperehours = 1,
    Megavoltamperehours = 2
}
export declare class ApparentEnergy {
    private value;
    private voltamperehoursLazy;
    private kilovoltamperehoursLazy;
    private megavoltamperehoursLazy;
    constructor(value: number, fromUnit: ApparentEnergyUnits);
    get VoltampereHours(): number;
    get Kilovoltamperehours(): number;
    get Megavoltamperehours(): number;
    static FromVoltampereHours(value: number): ApparentEnergy;
    static FromKilovoltamperehours(value: number): ApparentEnergy;
    static FromMegavoltamperehours(value: number): ApparentEnergy;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=apparentenergy.g.d.ts.map