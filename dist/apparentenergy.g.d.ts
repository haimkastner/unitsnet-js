export declare enum ApparentEnergyUnits {
    VoltampereHours = 0,
    KilovoltampereHours = 1,
    MegavoltampereHours = 2
}
export declare class ApparentEnergy {
    private value;
    private voltamperehoursLazy;
    private kilovoltamperehoursLazy;
    private megavoltamperehoursLazy;
    constructor(value: number, fromUnit: ApparentEnergyUnits);
    get VoltampereHours(): number;
    get KilovoltampereHours(): number;
    get MegavoltampereHours(): number;
    static FromVoltampereHours(value: number): ApparentEnergy;
    static FromKilovoltampereHours(value: number): ApparentEnergy;
    static FromMegavoltampereHours(value: number): ApparentEnergy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ApparentEnergyUnits): string;
}
//# sourceMappingURL=apparentenergy.g.d.ts.map