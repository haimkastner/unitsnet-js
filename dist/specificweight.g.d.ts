export declare enum SpecificWeightUnits {
    NewtonsPerCubicMillimeter = 0,
    NewtonsPerCubicCentimeter = 1,
    NewtonsPerCubicMeter = 2,
    KilogramsForcePerCubicMillimeter = 3,
    KilogramsForcePerCubicCentimeter = 4,
    KilogramsForcePerCubicMeter = 5,
    PoundsForcePerCubicInch = 6,
    PoundsForcePerCubicFoot = 7,
    TonnesForcePerCubicMillimeter = 8,
    TonnesForcePerCubicCentimeter = 9,
    TonnesForcePerCubicMeter = 10,
    KilonewtonPerCubicMillimeter = 11,
    KilonewtonPerCubicCentimeter = 12,
    KilonewtonPerCubicMeter = 13,
    MeganewtonPerCubicMeter = 14,
    KilopoundForcePerCubicInch = 15,
    KilopoundForcePerCubicFoot = 16
}
export declare class SpecificWeight {
    private value;
    private newtonspercubicmillimeterLazy;
    private newtonspercubiccentimeterLazy;
    private newtonspercubicmeterLazy;
    private kilogramsforcepercubicmillimeterLazy;
    private kilogramsforcepercubiccentimeterLazy;
    private kilogramsforcepercubicmeterLazy;
    private poundsforcepercubicinchLazy;
    private poundsforcepercubicfootLazy;
    private tonnesforcepercubicmillimeterLazy;
    private tonnesforcepercubiccentimeterLazy;
    private tonnesforcepercubicmeterLazy;
    private kilonewtonpercubicmillimeterLazy;
    private kilonewtonpercubiccentimeterLazy;
    private kilonewtonpercubicmeterLazy;
    private meganewtonpercubicmeterLazy;
    private kilopoundforcepercubicinchLazy;
    private kilopoundforcepercubicfootLazy;
    constructor(value: number, fromUnit: SpecificWeightUnits);
    get NewtonsPerCubicMillimeter(): number;
    get NewtonsPerCubicCentimeter(): number;
    get NewtonsPerCubicMeter(): number;
    get KilogramsForcePerCubicMillimeter(): number;
    get KilogramsForcePerCubicCentimeter(): number;
    get KilogramsForcePerCubicMeter(): number;
    get PoundsForcePerCubicInch(): number;
    get PoundsForcePerCubicFoot(): number;
    get TonnesForcePerCubicMillimeter(): number;
    get TonnesForcePerCubicCentimeter(): number;
    get TonnesForcePerCubicMeter(): number;
    get KilonewtonPerCubicMillimeter(): number;
    get KilonewtonPerCubicCentimeter(): number;
    get KilonewtonPerCubicMeter(): number;
    get MeganewtonPerCubicMeter(): number;
    get KilopoundForcePerCubicInch(): number;
    get KilopoundForcePerCubicFoot(): number;
    static FromNewtonsPerCubicMillimeter(value: number): SpecificWeight;
    static FromNewtonsPerCubicCentimeter(value: number): SpecificWeight;
    static FromNewtonsPerCubicMeter(value: number): SpecificWeight;
    static FromKilogramsForcePerCubicMillimeter(value: number): SpecificWeight;
    static FromKilogramsForcePerCubicCentimeter(value: number): SpecificWeight;
    static FromKilogramsForcePerCubicMeter(value: number): SpecificWeight;
    static FromPoundsForcePerCubicInch(value: number): SpecificWeight;
    static FromPoundsForcePerCubicFoot(value: number): SpecificWeight;
    static FromTonnesForcePerCubicMillimeter(value: number): SpecificWeight;
    static FromTonnesForcePerCubicCentimeter(value: number): SpecificWeight;
    static FromTonnesForcePerCubicMeter(value: number): SpecificWeight;
    static FromKilonewtonPerCubicMillimeter(value: number): SpecificWeight;
    static FromKilonewtonPerCubicCentimeter(value: number): SpecificWeight;
    static FromKilonewtonPerCubicMeter(value: number): SpecificWeight;
    static FromMeganewtonPerCubicMeter(value: number): SpecificWeight;
    static FromKilopoundForcePerCubicInch(value: number): SpecificWeight;
    static FromKilopoundForcePerCubicFoot(value: number): SpecificWeight;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: SpecificWeightUnits): string;
}
//# sourceMappingURL=specificweight.g.d.ts.map