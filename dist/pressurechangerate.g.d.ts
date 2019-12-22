export declare enum PressureChangeRateUnits {
    PascalsPerSecond = 0,
    PascalsPerMinute = 1,
    AtmospheresPerSecond = 2,
    Kilopascalspersecond = 3,
    Megapascalspersecond = 4,
    Kilopascalsperminute = 5,
    Megapascalsperminute = 6
}
export declare class PressureChangeRate {
    private value;
    constructor(value: number, fromUnit: PressureChangeRateUnits);
    get PascalsPerSecond(): number;
    get PascalsPerMinute(): number;
    get AtmospheresPerSecond(): number;
    get Kilopascalspersecond(): number;
    get Megapascalspersecond(): number;
    get Kilopascalsperminute(): number;
    get Megapascalsperminute(): number;
    static FromPascalsPerSecond(value: number): PressureChangeRate;
    static FromPascalsPerMinute(value: number): PressureChangeRate;
    static FromAtmospheresPerSecond(value: number): PressureChangeRate;
    static FromKilopascalspersecond(value: number): PressureChangeRate;
    static FromMegapascalspersecond(value: number): PressureChangeRate;
    static FromKilopascalsperminute(value: number): PressureChangeRate;
    static FromMegapascalsperminute(value: number): PressureChangeRate;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=pressurechangerate.g.d.ts.map