export declare enum ForceChangeRateUnits {
    NewtonsPerMinute = 0,
    NewtonsPerSecond = 1,
    Kilonewtonsperminute = 2,
    Nanonewtonspersecond = 3,
    Micronewtonspersecond = 4,
    Centinewtonspersecond = 5,
    Decinewtonspersecond = 6,
    Kilonewtonspersecond = 7
}
export declare class ForceChangeRate {
    private value;
    constructor(value: number, fromUnit: ForceChangeRateUnits);
    get NewtonsPerMinute(): number;
    get NewtonsPerSecond(): number;
    get Kilonewtonsperminute(): number;
    get Nanonewtonspersecond(): number;
    get Micronewtonspersecond(): number;
    get Centinewtonspersecond(): number;
    get Decinewtonspersecond(): number;
    get Kilonewtonspersecond(): number;
    static FromNewtonsPerMinute(value: number): ForceChangeRate;
    static FromNewtonsPerSecond(value: number): ForceChangeRate;
    static FromKilonewtonsperminute(value: number): ForceChangeRate;
    static FromNanonewtonspersecond(value: number): ForceChangeRate;
    static FromMicronewtonspersecond(value: number): ForceChangeRate;
    static FromCentinewtonspersecond(value: number): ForceChangeRate;
    static FromDecinewtonspersecond(value: number): ForceChangeRate;
    static FromKilonewtonspersecond(value: number): ForceChangeRate;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=forcechangerate.g.d.ts.map