export declare enum AmplitudeRatioUnits {
    DecibelVolts = 0,
    DecibelMicrovolts = 1,
    DecibelMillivolts = 2,
    DecibelsUnloaded = 3
}
export declare class AmplitudeRatio {
    private value;
    constructor(value: number, fromUnit: AmplitudeRatioUnits);
    get DecibelVolts(): number;
    get DecibelMicrovolts(): number;
    get DecibelMillivolts(): number;
    get DecibelsUnloaded(): number;
    static FromDecibelVolts(value: number): AmplitudeRatio;
    static FromDecibelMicrovolts(value: number): AmplitudeRatio;
    static FromDecibelMillivolts(value: number): AmplitudeRatio;
    static FromDecibelsUnloaded(value: number): AmplitudeRatio;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=amplituderatio.g.d.ts.map