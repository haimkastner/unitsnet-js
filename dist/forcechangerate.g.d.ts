export declare enum ForceChangeRateUnits {
    NewtonsPerMinute = 0,
    NewtonsPerSecond = 1,
    DecanewtonsPerMinute = 2,
    KilonewtonsPerMinute = 3,
    NanonewtonsPerSecond = 4,
    MicronewtonsPerSecond = 5,
    CentinewtonsPerSecond = 6,
    DecinewtonsPerSecond = 7,
    DecanewtonsPerSecond = 8,
    KilonewtonsPerSecond = 9
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
    get DecanewtonsPerMinute(): number;
    get KilonewtonsPerMinute(): number;
    get NanonewtonsPerSecond(): number;
    get MicronewtonsPerSecond(): number;
    get CentinewtonsPerSecond(): number;
    get DecinewtonsPerSecond(): number;
    get DecanewtonsPerSecond(): number;
    get KilonewtonsPerSecond(): number;
    static FromNewtonsPerMinute(value: number): ForceChangeRate;
    static FromNewtonsPerSecond(value: number): ForceChangeRate;
    static FromDecanewtonsPerMinute(value: number): ForceChangeRate;
    static FromKilonewtonsPerMinute(value: number): ForceChangeRate;
    static FromNanonewtonsPerSecond(value: number): ForceChangeRate;
    static FromMicronewtonsPerSecond(value: number): ForceChangeRate;
    static FromCentinewtonsPerSecond(value: number): ForceChangeRate;
    static FromDecinewtonsPerSecond(value: number): ForceChangeRate;
    static FromDecanewtonsPerSecond(value: number): ForceChangeRate;
    static FromKilonewtonsPerSecond(value: number): ForceChangeRate;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ForceChangeRateUnits): string;
}
//# sourceMappingURL=forcechangerate.g.d.ts.map