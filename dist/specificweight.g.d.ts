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
    Kilonewtonspercubicmillimeter = 11,
    Kilonewtonspercubiccentimeter = 12,
    Kilonewtonspercubicmeter = 13,
    Meganewtonspercubicmeter = 14,
    Kilopoundsforcepercubicinch = 15,
    Kilopoundsforcepercubicfoot = 16
}
export declare class SpecificWeight {
    private value;
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
    get Kilonewtonspercubicmillimeter(): number;
    get Kilonewtonspercubiccentimeter(): number;
    get Kilonewtonspercubicmeter(): number;
    get Meganewtonspercubicmeter(): number;
    get Kilopoundsforcepercubicinch(): number;
    get Kilopoundsforcepercubicfoot(): number;
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
    static FromKilonewtonspercubicmillimeter(value: number): SpecificWeight;
    static FromKilonewtonspercubiccentimeter(value: number): SpecificWeight;
    static FromKilonewtonspercubicmeter(value: number): SpecificWeight;
    static FromMeganewtonspercubicmeter(value: number): SpecificWeight;
    static FromKilopoundsforcepercubicinch(value: number): SpecificWeight;
    static FromKilopoundsforcepercubicfoot(value: number): SpecificWeight;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=specificweight.g.d.ts.map