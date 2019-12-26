export declare enum ForceChangeRateUnits {
    NewtonsPerMinute = 0,
    NewtonsPerSecond = 1,
    Decanewtonsperminute = 2,
    Kilonewtonsperminute = 3,
    Nanonewtonspersecond = 4,
    Micronewtonspersecond = 5,
    Centinewtonspersecond = 6,
    Decinewtonspersecond = 7,
    Decanewtonspersecond = 8,
    Kilonewtonspersecond = 9
}
export declare class ForceChangeRate {
    private value;
    private newtonsperminuteLazy;
    private newtonspersecondLazy;
    private decanewtonsperminuteLazy;
    private kilonewtonsperminuteLazy;
    private nanonewtonspersecondLazy;
    private micronewtonspersecondLazy;
    private centinewtonspersecondLazy;
    private decinewtonspersecondLazy;
    private decanewtonspersecondLazy;
    private kilonewtonspersecondLazy;
    constructor(value: number, fromUnit: ForceChangeRateUnits);
    get NewtonsPerMinute(): number;
    get NewtonsPerSecond(): number;
    get Decanewtonsperminute(): number;
    get Kilonewtonsperminute(): number;
    get Nanonewtonspersecond(): number;
    get Micronewtonspersecond(): number;
    get Centinewtonspersecond(): number;
    get Decinewtonspersecond(): number;
    get Decanewtonspersecond(): number;
    get Kilonewtonspersecond(): number;
    static FromNewtonsPerMinute(value: number): ForceChangeRate;
    static FromNewtonsPerSecond(value: number): ForceChangeRate;
    static FromDecanewtonsperminute(value: number): ForceChangeRate;
    static FromKilonewtonsperminute(value: number): ForceChangeRate;
    static FromNanonewtonspersecond(value: number): ForceChangeRate;
    static FromMicronewtonspersecond(value: number): ForceChangeRate;
    static FromCentinewtonspersecond(value: number): ForceChangeRate;
    static FromDecinewtonspersecond(value: number): ForceChangeRate;
    static FromDecanewtonspersecond(value: number): ForceChangeRate;
    static FromKilonewtonspersecond(value: number): ForceChangeRate;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=forcechangerate.g.d.ts.map