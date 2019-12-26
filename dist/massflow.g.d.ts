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
    NanogramsPerSecond = 12,
    MicrogramsPerSecond = 13,
    CentigramsPerSecond = 14,
    DecigramsPerSecond = 15,
    DecagramsPerSecond = 16,
    HectogramsPerSecond = 17,
    KilogramsPerSecond = 18,
    NanogramsPerDay = 19,
    MicrogramsPerDay = 20,
    CentigramsPerDay = 21,
    DecigramsPerDay = 22,
    DecagramsPerDay = 23,
    HectogramsPerDay = 24,
    KilogramsPerDay = 25,
    MegagramsPerDay = 26,
    MegapoundsPerDay = 27,
    MegapoundsPerHour = 28,
    MegapoundsPerMinute = 29,
    MegapoundsPerSecond = 30
}
export declare class MassFlow {
    private value;
    private gramspersecondLazy;
    private gramsperdayLazy;
    private gramsperhourLazy;
    private kilogramsperhourLazy;
    private kilogramsperminuteLazy;
    private tonnesperhourLazy;
    private poundsperdayLazy;
    private poundsperhourLazy;
    private poundsperminuteLazy;
    private poundspersecondLazy;
    private tonnesperdayLazy;
    private shorttonsperhourLazy;
    private nanogramspersecondLazy;
    private microgramspersecondLazy;
    private centigramspersecondLazy;
    private decigramspersecondLazy;
    private decagramspersecondLazy;
    private hectogramspersecondLazy;
    private kilogramspersecondLazy;
    private nanogramsperdayLazy;
    private microgramsperdayLazy;
    private centigramsperdayLazy;
    private decigramsperdayLazy;
    private decagramsperdayLazy;
    private hectogramsperdayLazy;
    private kilogramsperdayLazy;
    private megagramsperdayLazy;
    private megapoundsperdayLazy;
    private megapoundsperhourLazy;
    private megapoundsperminuteLazy;
    private megapoundspersecondLazy;
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
    get NanogramsPerSecond(): number;
    get MicrogramsPerSecond(): number;
    get CentigramsPerSecond(): number;
    get DecigramsPerSecond(): number;
    get DecagramsPerSecond(): number;
    get HectogramsPerSecond(): number;
    get KilogramsPerSecond(): number;
    get NanogramsPerDay(): number;
    get MicrogramsPerDay(): number;
    get CentigramsPerDay(): number;
    get DecigramsPerDay(): number;
    get DecagramsPerDay(): number;
    get HectogramsPerDay(): number;
    get KilogramsPerDay(): number;
    get MegagramsPerDay(): number;
    get MegapoundsPerDay(): number;
    get MegapoundsPerHour(): number;
    get MegapoundsPerMinute(): number;
    get MegapoundsPerSecond(): number;
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
    static FromNanogramsPerSecond(value: number): MassFlow;
    static FromMicrogramsPerSecond(value: number): MassFlow;
    static FromCentigramsPerSecond(value: number): MassFlow;
    static FromDecigramsPerSecond(value: number): MassFlow;
    static FromDecagramsPerSecond(value: number): MassFlow;
    static FromHectogramsPerSecond(value: number): MassFlow;
    static FromKilogramsPerSecond(value: number): MassFlow;
    static FromNanogramsPerDay(value: number): MassFlow;
    static FromMicrogramsPerDay(value: number): MassFlow;
    static FromCentigramsPerDay(value: number): MassFlow;
    static FromDecigramsPerDay(value: number): MassFlow;
    static FromDecagramsPerDay(value: number): MassFlow;
    static FromHectogramsPerDay(value: number): MassFlow;
    static FromKilogramsPerDay(value: number): MassFlow;
    static FromMegagramsPerDay(value: number): MassFlow;
    static FromMegapoundsPerDay(value: number): MassFlow;
    static FromMegapoundsPerHour(value: number): MassFlow;
    static FromMegapoundsPerMinute(value: number): MassFlow;
    static FromMegapoundsPerSecond(value: number): MassFlow;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MassFlowUnits): string;
}
//# sourceMappingURL=massflow.g.d.ts.map