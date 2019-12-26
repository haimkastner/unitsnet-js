export declare enum PowerRatioUnits {
    DecibelWatts = 0,
    DecibelMilliwatts = 1
}
export declare class PowerRatio {
    private value;
    private decibelwattsLazy;
    private decibelmilliwattsLazy;
    constructor(value: number, fromUnit: PowerRatioUnits);
    get DecibelWatts(): number;
    get DecibelMilliwatts(): number;
    static FromDecibelWatts(value: number): PowerRatio;
    static FromDecibelMilliwatts(value: number): PowerRatio;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=powerratio.g.d.ts.map