export declare enum PressureChangeRateUnits {
    PascalsPerSecond = 0,
    PascalsPerMinute = 1,
    AtmospheresPerSecond = 2,
    KilopascalsPerSecond = 3,
    MegapascalsPerSecond = 4,
    KilopascalsPerMinute = 5,
    MegapascalsPerMinute = 6
}
export declare class PressureChangeRate {
    private value;
    private pascalspersecondLazy;
    private pascalsperminuteLazy;
    private atmospherespersecondLazy;
    private kilopascalspersecondLazy;
    private megapascalspersecondLazy;
    private kilopascalsperminuteLazy;
    private megapascalsperminuteLazy;
    constructor(value: number, fromUnit: PressureChangeRateUnits);
    get PascalsPerSecond(): number;
    get PascalsPerMinute(): number;
    get AtmospheresPerSecond(): number;
    get KilopascalsPerSecond(): number;
    get MegapascalsPerSecond(): number;
    get KilopascalsPerMinute(): number;
    get MegapascalsPerMinute(): number;
    static FromPascalsPerSecond(value: number): PressureChangeRate;
    static FromPascalsPerMinute(value: number): PressureChangeRate;
    static FromAtmospheresPerSecond(value: number): PressureChangeRate;
    static FromKilopascalsPerSecond(value: number): PressureChangeRate;
    static FromMegapascalsPerSecond(value: number): PressureChangeRate;
    static FromKilopascalsPerMinute(value: number): PressureChangeRate;
    static FromMegapascalsPerMinute(value: number): PressureChangeRate;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: PressureChangeRateUnits): string;
}
//# sourceMappingURL=pressurechangerate.g.d.ts.map