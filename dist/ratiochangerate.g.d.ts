export declare enum RatioChangeRateUnits {
    PercentsPerSecond = 0,
    DecimalFractionsPerSecond = 1
}
export declare class RatioChangeRate {
    private value;
    constructor(value: number, fromUnit: RatioChangeRateUnits);
    get PercentsPerSecond(): number;
    get DecimalFractionsPerSecond(): number;
    static FromPercentsPerSecond(value: number): RatioChangeRate;
    static FromDecimalFractionsPerSecond(value: number): RatioChangeRate;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=ratiochangerate.g.d.ts.map