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
    KilonewtonsPerCubicMillimeter = 11,
    KilonewtonsPerCubicCentimeter = 12,
    KilonewtonsPerCubicMeter = 13,
    MeganewtonsPerCubicMeter = 14,
    KilopoundsForcePerCubicInch = 15,
    KilopoundsForcePerCubicFoot = 16
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
    private kilonewtonspercubicmillimeterLazy;
    private kilonewtonspercubiccentimeterLazy;
    private kilonewtonspercubicmeterLazy;
    private meganewtonspercubicmeterLazy;
    private kilopoundsforcepercubicinchLazy;
    private kilopoundsforcepercubicfootLazy;
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
    get KilonewtonsPerCubicMillimeter(): number;
    get KilonewtonsPerCubicCentimeter(): number;
    get KilonewtonsPerCubicMeter(): number;
    get MeganewtonsPerCubicMeter(): number;
    get KilopoundsForcePerCubicInch(): number;
    get KilopoundsForcePerCubicFoot(): number;
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
    static FromKilonewtonsPerCubicMillimeter(value: number): SpecificWeight;
    static FromKilonewtonsPerCubicCentimeter(value: number): SpecificWeight;
    static FromKilonewtonsPerCubicMeter(value: number): SpecificWeight;
    static FromMeganewtonsPerCubicMeter(value: number): SpecificWeight;
    static FromKilopoundsForcePerCubicInch(value: number): SpecificWeight;
    static FromKilopoundsForcePerCubicFoot(value: number): SpecificWeight;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: SpecificWeightUnits): string;
}
//# sourceMappingURL=specificweight.g.d.ts.map