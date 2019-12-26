export declare enum ApparentPowerUnits {
    Voltamperes = 0,
    Kilovoltampere = 1,
    Megavoltampere = 2,
    Gigavoltampere = 3
}
export declare class ApparentPower {
    private value;
    private voltamperesLazy;
    private kilovoltampereLazy;
    private megavoltampereLazy;
    private gigavoltampereLazy;
    constructor(value: number, fromUnit: ApparentPowerUnits);
    get Voltamperes(): number;
    get Kilovoltampere(): number;
    get Megavoltampere(): number;
    get Gigavoltampere(): number;
    static FromVoltamperes(value: number): ApparentPower;
    static FromKilovoltampere(value: number): ApparentPower;
    static FromMegavoltampere(value: number): ApparentPower;
    static FromGigavoltampere(value: number): ApparentPower;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ApparentPowerUnits): string;
}
//# sourceMappingURL=apparentpower.g.d.ts.map