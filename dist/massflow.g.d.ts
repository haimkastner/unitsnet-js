export declare enum MassFlowUnits {
    GramsPerSecond = 0,
    GramsPerDay = 1,
    GramsPerHour = 2,
    KilogramsPerHour = 3,
    KilogramsPerMinute = 4,
    TonnesPerHour = 5,
    PoundsPerDay = 6,
    PoundsPerHour = 7,
    PoundsPerMinute = 8,
    PoundsPerSecond = 9,
    TonnesPerDay = 10,
    ShortTonsPerHour = 11,
    Nanogramspersecond = 12,
    Microgramspersecond = 13,
    Centigramspersecond = 14,
    Decigramspersecond = 15,
    Hectogramspersecond = 16,
    Kilogramspersecond = 17,
    Nanogramsperday = 18,
    Microgramsperday = 19,
    Centigramsperday = 20,
    Decigramsperday = 21,
    Hectogramsperday = 22,
    Kilogramsperday = 23,
    Megagramsperday = 24,
    Megapoundsperday = 25,
    Megapoundsperhour = 26,
    Megapoundsperminute = 27,
    Megapoundspersecond = 28
}
export declare class MassFlow {
    private value;
    constructor(value: number, fromUnit: MassFlowUnits);
    get GramsPerSecond(): number;
    get GramsPerDay(): number;
    get GramsPerHour(): number;
    get KilogramsPerHour(): number;
    get KilogramsPerMinute(): number;
    get TonnesPerHour(): number;
    get PoundsPerDay(): number;
    get PoundsPerHour(): number;
    get PoundsPerMinute(): number;
    get PoundsPerSecond(): number;
    get TonnesPerDay(): number;
    get ShortTonsPerHour(): number;
    get Nanogramspersecond(): number;
    get Microgramspersecond(): number;
    get Centigramspersecond(): number;
    get Decigramspersecond(): number;
    get Hectogramspersecond(): number;
    get Kilogramspersecond(): number;
    get Nanogramsperday(): number;
    get Microgramsperday(): number;
    get Centigramsperday(): number;
    get Decigramsperday(): number;
    get Hectogramsperday(): number;
    get Kilogramsperday(): number;
    get Megagramsperday(): number;
    get Megapoundsperday(): number;
    get Megapoundsperhour(): number;
    get Megapoundsperminute(): number;
    get Megapoundspersecond(): number;
    static FromGramsPerSecond(value: number): MassFlow;
    static FromGramsPerDay(value: number): MassFlow;
    static FromGramsPerHour(value: number): MassFlow;
    static FromKilogramsPerHour(value: number): MassFlow;
    static FromKilogramsPerMinute(value: number): MassFlow;
    static FromTonnesPerHour(value: number): MassFlow;
    static FromPoundsPerDay(value: number): MassFlow;
    static FromPoundsPerHour(value: number): MassFlow;
    static FromPoundsPerMinute(value: number): MassFlow;
    static FromPoundsPerSecond(value: number): MassFlow;
    static FromTonnesPerDay(value: number): MassFlow;
    static FromShortTonsPerHour(value: number): MassFlow;
    static FromNanogramspersecond(value: number): MassFlow;
    static FromMicrogramspersecond(value: number): MassFlow;
    static FromCentigramspersecond(value: number): MassFlow;
    static FromDecigramspersecond(value: number): MassFlow;
    static FromHectogramspersecond(value: number): MassFlow;
    static FromKilogramspersecond(value: number): MassFlow;
    static FromNanogramsperday(value: number): MassFlow;
    static FromMicrogramsperday(value: number): MassFlow;
    static FromCentigramsperday(value: number): MassFlow;
    static FromDecigramsperday(value: number): MassFlow;
    static FromHectogramsperday(value: number): MassFlow;
    static FromKilogramsperday(value: number): MassFlow;
    static FromMegagramsperday(value: number): MassFlow;
    static FromMegapoundsperday(value: number): MassFlow;
    static FromMegapoundsperhour(value: number): MassFlow;
    static FromMegapoundsperminute(value: number): MassFlow;
    static FromMegapoundspersecond(value: number): MassFlow;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=massflow.g.d.ts.map