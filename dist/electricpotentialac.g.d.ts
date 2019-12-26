export declare enum ElectricPotentialAcUnits {
    VoltsAc = 0,
    MicrovoltAc = 1,
    KilovoltAc = 2,
    MegavoltAc = 3
}
export declare class ElectricPotentialAc {
    private value;
    private voltsacLazy;
    private microvoltacLazy;
    private kilovoltacLazy;
    private megavoltacLazy;
    constructor(value: number, fromUnit: ElectricPotentialAcUnits);
    get VoltsAc(): number;
    get MicrovoltAc(): number;
    get KilovoltAc(): number;
    get MegavoltAc(): number;
    static FromVoltsAc(value: number): ElectricPotentialAc;
    static FromMicrovoltAc(value: number): ElectricPotentialAc;
    static FromKilovoltAc(value: number): ElectricPotentialAc;
    static FromMegavoltAc(value: number): ElectricPotentialAc;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricPotentialAcUnits): string;
}
//# sourceMappingURL=electricpotentialac.g.d.ts.map