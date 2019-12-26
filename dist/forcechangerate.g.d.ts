export declare enum ForceChangeRateUnits {
    NewtonsPerMinute = 0,
    NewtonsPerSecond = 1,
    DecanewtonPerMinute = 2,
    KilonewtonPerMinute = 3,
    NanonewtonPerSecond = 4,
    MicronewtonPerSecond = 5,
    CentinewtonPerSecond = 6,
    DecinewtonPerSecond = 7,
    DecanewtonPerSecond = 8,
    KilonewtonPerSecond = 9
}
export declare class ForceChangeRate {
    private value;
    private newtonsperminuteLazy;
    private newtonspersecondLazy;
    private decanewtonperminuteLazy;
    private kilonewtonperminuteLazy;
    private nanonewtonpersecondLazy;
    private micronewtonpersecondLazy;
    private centinewtonpersecondLazy;
    private decinewtonpersecondLazy;
    private decanewtonpersecondLazy;
    private kilonewtonpersecondLazy;
    constructor(value: number, fromUnit: ForceChangeRateUnits);
    get NewtonsPerMinute(): number;
    get NewtonsPerSecond(): number;
    get DecanewtonPerMinute(): number;
    get KilonewtonPerMinute(): number;
    get NanonewtonPerSecond(): number;
    get MicronewtonPerSecond(): number;
    get CentinewtonPerSecond(): number;
    get DecinewtonPerSecond(): number;
    get DecanewtonPerSecond(): number;
    get KilonewtonPerSecond(): number;
    static FromNewtonsPerMinute(value: number): ForceChangeRate;
    static FromNewtonsPerSecond(value: number): ForceChangeRate;
    static FromDecanewtonPerMinute(value: number): ForceChangeRate;
    static FromKilonewtonPerMinute(value: number): ForceChangeRate;
    static FromNanonewtonPerSecond(value: number): ForceChangeRate;
    static FromMicronewtonPerSecond(value: number): ForceChangeRate;
    static FromCentinewtonPerSecond(value: number): ForceChangeRate;
    static FromDecinewtonPerSecond(value: number): ForceChangeRate;
    static FromDecanewtonPerSecond(value: number): ForceChangeRate;
    static FromKilonewtonPerSecond(value: number): ForceChangeRate;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ForceChangeRateUnits): string;
}
//# sourceMappingURL=forcechangerate.g.d.ts.map