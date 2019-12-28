/** MassFlowUnits enumeration */
export declare enum MassFlowUnits {
    /** */
    GramsPerSecond = 0,
    /** */
    GramsPerDay = 1,
    /** */
    GramsPerHour = 2,
    /** */
    KilogramsPerHour = 3,
    /** */
    KilogramsPerMinute = 4,
    /** */
    TonnesPerHour = 5,
    /** */
    PoundsPerDay = 6,
    /** */
    PoundsPerHour = 7,
    /** */
    PoundsPerMinute = 8,
    /** */
    PoundsPerSecond = 9,
    /** */
    TonnesPerDay = 10,
    /** */
    ShortTonsPerHour = 11,
    /** */
    NanogramsPerSecond = 12,
    /** */
    MicrogramsPerSecond = 13,
    /** */
    CentigramsPerSecond = 14,
    /** */
    DecigramsPerSecond = 15,
    /** */
    DecagramsPerSecond = 16,
    /** */
    HectogramsPerSecond = 17,
    /** */
    KilogramsPerSecond = 18,
    /** */
    NanogramsPerDay = 19,
    /** */
    MicrogramsPerDay = 20,
    /** */
    CentigramsPerDay = 21,
    /** */
    DecigramsPerDay = 22,
    /** */
    DecagramsPerDay = 23,
    /** */
    HectogramsPerDay = 24,
    /** */
    KilogramsPerDay = 25,
    /** */
    MegagramsPerDay = 26,
    /** */
    MegapoundsPerDay = 27,
    /** */
    MegapoundsPerHour = 28,
    /** */
    MegapoundsPerMinute = 29,
    /** */
    MegapoundsPerSecond = 30
}
/** Mass flow is the ratio of the mass change to the time during which the change occurred (value of mass changes per unit time). */
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
    /**
     * Create a new MassFlow.
     * @param value The value.
     * @param fromUnit The ‘MassFlow’ unit to create from.
     * The default unit is GramsPerSecond
     */
    constructor(value: number, fromUnit?: MassFlowUnits);
    /**
     * The base value of MassFlow is GramsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get GramsPerSecond(): number;
    /** */
    get GramsPerDay(): number;
    /** */
    get GramsPerHour(): number;
    /** */
    get KilogramsPerHour(): number;
    /** */
    get KilogramsPerMinute(): number;
    /** */
    get TonnesPerHour(): number;
    /** */
    get PoundsPerDay(): number;
    /** */
    get PoundsPerHour(): number;
    /** */
    get PoundsPerMinute(): number;
    /** */
    get PoundsPerSecond(): number;
    /** */
    get TonnesPerDay(): number;
    /** */
    get ShortTonsPerHour(): number;
    /** */
    get NanogramsPerSecond(): number;
    /** */
    get MicrogramsPerSecond(): number;
    /** */
    get CentigramsPerSecond(): number;
    /** */
    get DecigramsPerSecond(): number;
    /** */
    get DecagramsPerSecond(): number;
    /** */
    get HectogramsPerSecond(): number;
    /** */
    get KilogramsPerSecond(): number;
    /** */
    get NanogramsPerDay(): number;
    /** */
    get MicrogramsPerDay(): number;
    /** */
    get CentigramsPerDay(): number;
    /** */
    get DecigramsPerDay(): number;
    /** */
    get DecagramsPerDay(): number;
    /** */
    get HectogramsPerDay(): number;
    /** */
    get KilogramsPerDay(): number;
    /** */
    get MegagramsPerDay(): number;
    /** */
    get MegapoundsPerDay(): number;
    /** */
    get MegapoundsPerHour(): number;
    /** */
    get MegapoundsPerMinute(): number;
    /** */
    get MegapoundsPerSecond(): number;
    /**
     * Create a new MassFlow instance from a GramsPerSecond
     *
     * @param value The unit as GramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromGramsPerSecond(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a GramsPerDay
     *
     * @param value The unit as GramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromGramsPerDay(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a GramsPerHour
     *
     * @param value The unit as GramsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromGramsPerHour(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a KilogramsPerHour
     *
     * @param value The unit as KilogramsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromKilogramsPerHour(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a KilogramsPerMinute
     *
     * @param value The unit as KilogramsPerMinute to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromKilogramsPerMinute(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a TonnesPerHour
     *
     * @param value The unit as TonnesPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromTonnesPerHour(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a PoundsPerDay
     *
     * @param value The unit as PoundsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromPoundsPerDay(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a PoundsPerHour
     *
     * @param value The unit as PoundsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromPoundsPerHour(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a PoundsPerMinute
     *
     * @param value The unit as PoundsPerMinute to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromPoundsPerMinute(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a PoundsPerSecond
     *
     * @param value The unit as PoundsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromPoundsPerSecond(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a TonnesPerDay
     *
     * @param value The unit as TonnesPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromTonnesPerDay(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a ShortTonsPerHour
     *
     * @param value The unit as ShortTonsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromShortTonsPerHour(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a NanogramsPerSecond
     *
     * @param value The unit as NanogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromNanogramsPerSecond(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a MicrogramsPerSecond
     *
     * @param value The unit as MicrogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMicrogramsPerSecond(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a CentigramsPerSecond
     *
     * @param value The unit as CentigramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromCentigramsPerSecond(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a DecigramsPerSecond
     *
     * @param value The unit as DecigramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromDecigramsPerSecond(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a DecagramsPerSecond
     *
     * @param value The unit as DecagramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromDecagramsPerSecond(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a HectogramsPerSecond
     *
     * @param value The unit as HectogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromHectogramsPerSecond(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a KilogramsPerSecond
     *
     * @param value The unit as KilogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromKilogramsPerSecond(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a NanogramsPerDay
     *
     * @param value The unit as NanogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromNanogramsPerDay(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a MicrogramsPerDay
     *
     * @param value The unit as MicrogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMicrogramsPerDay(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a CentigramsPerDay
     *
     * @param value The unit as CentigramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromCentigramsPerDay(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a DecigramsPerDay
     *
     * @param value The unit as DecigramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromDecigramsPerDay(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a DecagramsPerDay
     *
     * @param value The unit as DecagramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromDecagramsPerDay(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a HectogramsPerDay
     *
     * @param value The unit as HectogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromHectogramsPerDay(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a KilogramsPerDay
     *
     * @param value The unit as KilogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromKilogramsPerDay(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a MegagramsPerDay
     *
     * @param value The unit as MegagramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMegagramsPerDay(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a MegapoundsPerDay
     *
     * @param value The unit as MegapoundsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMegapoundsPerDay(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a MegapoundsPerHour
     *
     * @param value The unit as MegapoundsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMegapoundsPerHour(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a MegapoundsPerMinute
     *
     * @param value The unit as MegapoundsPerMinute to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMegapoundsPerMinute(value: number): MassFlow;
    /**
     * Create a new MassFlow instance from a MegapoundsPerSecond
     *
     * @param value The unit as MegapoundsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    static FromMegapoundsPerSecond(value: number): MassFlow;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the MassFlow to string.
     * Note! the default format for MassFlow is GramsPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassFlow.
     * @returns The string format of the MassFlow.
     */
    toString(toUnit?: MassFlowUnits): string;
    /**
     * Check if the given MassFlow are equals to the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns True if the given MassFlow are equal to the current MassFlow.
     */
    equals(massFlow: MassFlow): boolean;
    /**
     * Compare the given MassFlow against the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns 0 if they are equal, -1 if the current MassFlow is less then other, 1 if the current MassFlow is greater then other.
     */
    compareTo(massFlow: MassFlow): number;
    /**
     * Add the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    add(massFlow: MassFlow): MassFlow;
    /**
     * Subtract the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    subtract(massFlow: MassFlow): MassFlow;
    /**
     * Multiply the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    multiply(massFlow: MassFlow): MassFlow;
    /**
     * Divide the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    divide(massFlow: MassFlow): MassFlow;
    /**
     * Modulo the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    modulo(massFlow: MassFlow): MassFlow;
    /**
     * Pow the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    pow(massFlow: MassFlow): MassFlow;
}
//# sourceMappingURL=massflow.g.d.ts.map