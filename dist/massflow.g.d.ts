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
    NanogramPerSecond = 12,
    MicrogramPerSecond = 13,
    CentigramPerSecond = 14,
    DecigramPerSecond = 15,
    DecagramPerSecond = 16,
    HectogramPerSecond = 17,
    KilogramPerSecond = 18,
    NanogramPerDay = 19,
    MicrogramPerDay = 20,
    CentigramPerDay = 21,
    DecigramPerDay = 22,
    DecagramPerDay = 23,
    HectogramPerDay = 24,
    KilogramPerDay = 25,
    MegagramPerDay = 26,
    MegapoundPerDay = 27,
    MegapoundPerHour = 28,
    MegapoundPerMinute = 29,
    MegapoundPerSecond = 30
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
    private nanogrampersecondLazy;
    private microgrampersecondLazy;
    private centigrampersecondLazy;
    private decigrampersecondLazy;
    private decagrampersecondLazy;
    private hectogrampersecondLazy;
    private kilogrampersecondLazy;
    private nanogramperdayLazy;
    private microgramperdayLazy;
    private centigramperdayLazy;
    private decigramperdayLazy;
    private decagramperdayLazy;
    private hectogramperdayLazy;
    private kilogramperdayLazy;
    private megagramperdayLazy;
    private megapoundperdayLazy;
    private megapoundperhourLazy;
    private megapoundperminuteLazy;
    private megapoundpersecondLazy;
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
    get NanogramPerSecond(): number;
    get MicrogramPerSecond(): number;
    get CentigramPerSecond(): number;
    get DecigramPerSecond(): number;
    get DecagramPerSecond(): number;
    get HectogramPerSecond(): number;
    get KilogramPerSecond(): number;
    get NanogramPerDay(): number;
    get MicrogramPerDay(): number;
    get CentigramPerDay(): number;
    get DecigramPerDay(): number;
    get DecagramPerDay(): number;
    get HectogramPerDay(): number;
    get KilogramPerDay(): number;
    get MegagramPerDay(): number;
    get MegapoundPerDay(): number;
    get MegapoundPerHour(): number;
    get MegapoundPerMinute(): number;
    get MegapoundPerSecond(): number;
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
    static FromNanogramPerSecond(value: number): MassFlow;
    static FromMicrogramPerSecond(value: number): MassFlow;
    static FromCentigramPerSecond(value: number): MassFlow;
    static FromDecigramPerSecond(value: number): MassFlow;
    static FromDecagramPerSecond(value: number): MassFlow;
    static FromHectogramPerSecond(value: number): MassFlow;
    static FromKilogramPerSecond(value: number): MassFlow;
    static FromNanogramPerDay(value: number): MassFlow;
    static FromMicrogramPerDay(value: number): MassFlow;
    static FromCentigramPerDay(value: number): MassFlow;
    static FromDecigramPerDay(value: number): MassFlow;
    static FromDecagramPerDay(value: number): MassFlow;
    static FromHectogramPerDay(value: number): MassFlow;
    static FromKilogramPerDay(value: number): MassFlow;
    static FromMegagramPerDay(value: number): MassFlow;
    static FromMegapoundPerDay(value: number): MassFlow;
    static FromMegapoundPerHour(value: number): MassFlow;
    static FromMegapoundPerMinute(value: number): MassFlow;
    static FromMegapoundPerSecond(value: number): MassFlow;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MassFlowUnits): string;
}
//# sourceMappingURL=massflow.g.d.ts.map