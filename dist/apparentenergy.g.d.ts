export declare enum ApparentEnergyUnits {
    VoltampereHours = 0,
    KilovoltampereHour = 1,
    MegavoltampereHour = 2
}
export declare class ApparentEnergy {
    private value;
    private voltamperehoursLazy;
    private kilovoltamperehourLazy;
    private megavoltamperehourLazy;
    constructor(value: number, fromUnit: ApparentEnergyUnits);
    get VoltampereHours(): number;
    get KilovoltampereHour(): number;
    get MegavoltampereHour(): number;
    static FromVoltampereHours(value: number): ApparentEnergy;
    static FromKilovoltampereHour(value: number): ApparentEnergy;
    static FromMegavoltampereHour(value: number): ApparentEnergy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ApparentEnergyUnits): string;
}
//# sourceMappingURL=apparentenergy.g.d.ts.map