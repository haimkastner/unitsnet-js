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
    toString(toUnit?: ElectricCurrentGradientUnits): string;
}
//# sourceMappingURL=electriccurrentgradient.g.d.ts.map