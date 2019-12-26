export declare enum ElectricCurrentGradientUnits {
    AmperesPerSecond = 0
}
export declare class ElectricCurrentGradient {
    private value;
    private amperespersecondLazy;
    constructor(value: number, fromUnit: ElectricCurrentGradientUnits);
    get AmperesPerSecond(): number;
    static FromAmperesPerSecond(value: number): ElectricCurrentGradient;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electriccurrentgradient.g.d.ts.map