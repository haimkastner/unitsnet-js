export declare enum ElectricPotentialUnits {
    Volts = 0,
    Microvolt = 1,
    Kilovolt = 2,
    Megavolt = 3
}
export declare class ElectricPotential {
    private value;
    private voltsLazy;
    private microvoltLazy;
    private kilovoltLazy;
    private megavoltLazy;
    constructor(value: number, fromUnit: ElectricPotentialUnits);
    get Volts(): number;
    get Microvolt(): number;
    get Kilovolt(): number;
    get Megavolt(): number;
    static FromVolts(value: number): ElectricPotential;
    static FromMicrovolt(value: number): ElectricPotential;
    static FromKilovolt(value: number): ElectricPotential;
    static FromMegavolt(value: number): ElectricPotential;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricPotentialUnits): string;
}
//# sourceMappingURL=electricpotential.g.d.ts.map