export declare enum ApparentPowerUnits {
    Voltamperes = 0,
    Kilovoltamperes = 1,
    Megavoltamperes = 2,
    Gigavoltamperes = 3
}
export declare class ApparentPower {
    private value;
    constructor(value: number, fromUnit: ApparentPowerUnits);
    get Voltamperes(): number;
    get Kilovoltamperes(): number;
    get Megavoltamperes(): number;
    get Gigavoltamperes(): number;
    static FromVoltamperes(value: number): ApparentPower;
    static FromKilovoltamperes(value: number): ApparentPower;
    static FromMegavoltamperes(value: number): ApparentPower;
    static FromGigavoltamperes(value: number): ApparentPower;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=apparentpower.g.d.ts.map