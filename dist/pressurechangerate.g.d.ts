export declare enum PressureChangeRateUnits {
    PascalsPerSecond = 0,
    PascalsPerMinute = 1,
    AtmospheresPerSecond = 2,
    KilopascalPerSecond = 3,
    MegapascalPerSecond = 4,
    KilopascalPerMinute = 5,
    MegapascalPerMinute = 6
}
export declare class PressureChangeRate {
    private value;
    private pascalspersecondLazy;
    private pascalsperminuteLazy;
    private atmospherespersecondLazy;
    private kilopascalpersecondLazy;
    private megapascalpersecondLazy;
    private kilopascalperminuteLazy;
    private megapascalperminuteLazy;
    constructor(value: number, fromUnit: PressureChangeRateUnits);
    get PascalsPerSecond(): number;
    get PascalsPerMinute(): number;
    get AtmospheresPerSecond(): number;
    get KilopascalPerSecond(): number;
    get MegapascalPerSecond(): number;
    get KilopascalPerMinute(): number;
    get MegapascalPerMinute(): number;
    static FromPascalsPerSecond(value: number): PressureChangeRate;
    static FromPascalsPerMinute(value: number): PressureChangeRate;
    static FromAtmospheresPerSecond(value: number): PressureChangeRate;
    static FromKilopascalPerSecond(value: number): PressureChangeRate;
    static FromMegapascalPerSecond(value: number): PressureChangeRate;
    static FromKilopascalPerMinute(value: number): PressureChangeRate;
    static FromMegapascalPerMinute(value: number): PressureChangeRate;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: PressureChangeRateUnits): string;
}
//# sourceMappingURL=pressurechangerate.g.d.ts.map