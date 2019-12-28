/** VolumeFlowUnits enumeration */
export declare enum VolumeFlowUnits {
    /** */
    CubicMetersPerSecond = 0,
    /** */
    CubicMetersPerMinute = 1,
    /** */
    CubicMetersPerHour = 2,
    /** */
    CubicMetersPerDay = 3,
    /** */
    CubicFeetPerSecond = 4,
    /** */
    CubicFeetPerMinute = 5,
    /** */
    CubicFeetPerHour = 6,
    /** */
    CubicYardsPerSecond = 7,
    /** */
    CubicYardsPerMinute = 8,
    /** */
    CubicYardsPerHour = 9,
    /** */
    CubicYardsPerDay = 10,
    /** */
    MillionUsGallonsPerDay = 11,
    /** */
    UsGallonsPerDay = 12,
    /** */
    LitersPerSecond = 13,
    /** */
    LitersPerMinute = 14,
    /** */
    LitersPerHour = 15,
    /** */
    LitersPerDay = 16,
    /** */
    UsGallonsPerSecond = 17,
    /** */
    UsGallonsPerMinute = 18,
    /** */
    UkGallonsPerDay = 19,
    /** */
    UkGallonsPerHour = 20,
    /** */
    UkGallonsPerMinute = 21,
    /** */
    UkGallonsPerSecond = 22,
    /** */
    KilousGallonsPerMinute = 23,
    /** */
    UsGallonsPerHour = 24,
    /** */
    CubicDecimetersPerMinute = 25,
    /** */
    OilBarrelsPerDay = 26,
    /** */
    OilBarrelsPerMinute = 27,
    /** */
    OilBarrelsPerHour = 28,
    /** */
    OilBarrelsPerSecond = 29,
    /** */
    CubicMillimetersPerSecond = 30,
    /** */
    AcreFeetPerSecond = 31,
    /** */
    AcreFeetPerMinute = 32,
    /** */
    AcreFeetPerHour = 33,
    /** */
    AcreFeetPerDay = 34,
    /** */
    NanolitersPerMinute = 35,
    /** */
    MicrolitersPerMinute = 36,
    /** */
    CentilitersPerMinute = 37,
    /** */
    DecilitersPerMinute = 38,
    /** */
    KilolitersPerMinute = 39,
    /** */
    NanolitersPerDay = 40,
    /** */
    MicrolitersPerDay = 41,
    /** */
    CentilitersPerDay = 42,
    /** */
    DecilitersPerDay = 43,
    /** */
    KilolitersPerDay = 44,
    /** */
    MegalitersPerDay = 45,
    /** */
    MegaukGallonsPerSecond = 46
}
/** In physics and engineering, in particular fluid dynamics and hydrometry, the volumetric flow rate, (also known as volume flow rate, rate of fluid flow or volume velocity) is the volume of fluid which passes through a given surface per unit time. The SI unit is m³/s (cubic meters per second). In US Customary Units and British Imperial Units, volumetric flow rate is often expressed as ft³/s (cubic feet per second). It is usually represented by the symbol Q. */
export declare class VolumeFlow {
    private value;
    private cubicmeterspersecondLazy;
    private cubicmetersperminuteLazy;
    private cubicmetersperhourLazy;
    private cubicmetersperdayLazy;
    private cubicfeetpersecondLazy;
    private cubicfeetperminuteLazy;
    private cubicfeetperhourLazy;
    private cubicyardspersecondLazy;
    private cubicyardsperminuteLazy;
    private cubicyardsperhourLazy;
    private cubicyardsperdayLazy;
    private millionusgallonsperdayLazy;
    private usgallonsperdayLazy;
    private literspersecondLazy;
    private litersperminuteLazy;
    private litersperhourLazy;
    private litersperdayLazy;
    private usgallonspersecondLazy;
    private usgallonsperminuteLazy;
    private ukgallonsperdayLazy;
    private ukgallonsperhourLazy;
    private ukgallonsperminuteLazy;
    private ukgallonspersecondLazy;
    private kilousgallonsperminuteLazy;
    private usgallonsperhourLazy;
    private cubicdecimetersperminuteLazy;
    private oilbarrelsperdayLazy;
    private oilbarrelsperminuteLazy;
    private oilbarrelsperhourLazy;
    private oilbarrelspersecondLazy;
    private cubicmillimeterspersecondLazy;
    private acrefeetpersecondLazy;
    private acrefeetperminuteLazy;
    private acrefeetperhourLazy;
    private acrefeetperdayLazy;
    private nanolitersperminuteLazy;
    private microlitersperminuteLazy;
    private centilitersperminuteLazy;
    private decilitersperminuteLazy;
    private kilolitersperminuteLazy;
    private nanolitersperdayLazy;
    private microlitersperdayLazy;
    private centilitersperdayLazy;
    private decilitersperdayLazy;
    private kilolitersperdayLazy;
    private megalitersperdayLazy;
    private megaukgallonspersecondLazy;
    /**
     * Create a new VolumeFlow.
     * @param value The value.
     * @param fromUnit The ‘VolumeFlow’ unit to create from.
     * The default unit is CubicMetersPerSecond
     */
    constructor(value: number, fromUnit?: VolumeFlowUnits);
    /**
     * The base value of VolumeFlow is CubicMetersPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get CubicMetersPerSecond(): number;
    /** */
    get CubicMetersPerMinute(): number;
    /** */
    get CubicMetersPerHour(): number;
    /** */
    get CubicMetersPerDay(): number;
    /** */
    get CubicFeetPerSecond(): number;
    /** */
    get CubicFeetPerMinute(): number;
    /** */
    get CubicFeetPerHour(): number;
    /** */
    get CubicYardsPerSecond(): number;
    /** */
    get CubicYardsPerMinute(): number;
    /** */
    get CubicYardsPerHour(): number;
    /** */
    get CubicYardsPerDay(): number;
    /** */
    get MillionUsGallonsPerDay(): number;
    /** */
    get UsGallonsPerDay(): number;
    /** */
    get LitersPerSecond(): number;
    /** */
    get LitersPerMinute(): number;
    /** */
    get LitersPerHour(): number;
    /** */
    get LitersPerDay(): number;
    /** */
    get UsGallonsPerSecond(): number;
    /** */
    get UsGallonsPerMinute(): number;
    /** */
    get UkGallonsPerDay(): number;
    /** */
    get UkGallonsPerHour(): number;
    /** */
    get UkGallonsPerMinute(): number;
    /** */
    get UkGallonsPerSecond(): number;
    /** */
    get KilousGallonsPerMinute(): number;
    /** */
    get UsGallonsPerHour(): number;
    /** */
    get CubicDecimetersPerMinute(): number;
    /** */
    get OilBarrelsPerDay(): number;
    /** */
    get OilBarrelsPerMinute(): number;
    /** */
    get OilBarrelsPerHour(): number;
    /** */
    get OilBarrelsPerSecond(): number;
    /** */
    get CubicMillimetersPerSecond(): number;
    /** */
    get AcreFeetPerSecond(): number;
    /** */
    get AcreFeetPerMinute(): number;
    /** */
    get AcreFeetPerHour(): number;
    /** */
    get AcreFeetPerDay(): number;
    /** */
    get NanolitersPerMinute(): number;
    /** */
    get MicrolitersPerMinute(): number;
    /** */
    get CentilitersPerMinute(): number;
    /** */
    get DecilitersPerMinute(): number;
    /** */
    get KilolitersPerMinute(): number;
    /** */
    get NanolitersPerDay(): number;
    /** */
    get MicrolitersPerDay(): number;
    /** */
    get CentilitersPerDay(): number;
    /** */
    get DecilitersPerDay(): number;
    /** */
    get KilolitersPerDay(): number;
    /** */
    get MegalitersPerDay(): number;
    /** */
    get MegaukGallonsPerSecond(): number;
    /**
     * Create a new VolumeFlow instance from a CubicMetersPerSecond
     *
     * @param value The unit as CubicMetersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicMetersPerSecond(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CubicMetersPerMinute
     *
     * @param value The unit as CubicMetersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicMetersPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CubicMetersPerHour
     *
     * @param value The unit as CubicMetersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicMetersPerHour(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CubicMetersPerDay
     *
     * @param value The unit as CubicMetersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicMetersPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CubicFeetPerSecond
     *
     * @param value The unit as CubicFeetPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicFeetPerSecond(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CubicFeetPerMinute
     *
     * @param value The unit as CubicFeetPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicFeetPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CubicFeetPerHour
     *
     * @param value The unit as CubicFeetPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicFeetPerHour(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CubicYardsPerSecond
     *
     * @param value The unit as CubicYardsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicYardsPerSecond(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CubicYardsPerMinute
     *
     * @param value The unit as CubicYardsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicYardsPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CubicYardsPerHour
     *
     * @param value The unit as CubicYardsPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicYardsPerHour(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CubicYardsPerDay
     *
     * @param value The unit as CubicYardsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicYardsPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a MillionUsGallonsPerDay
     *
     * @param value The unit as MillionUsGallonsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromMillionUsGallonsPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a UsGallonsPerDay
     *
     * @param value The unit as UsGallonsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUsGallonsPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a LitersPerSecond
     *
     * @param value The unit as LitersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromLitersPerSecond(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a LitersPerMinute
     *
     * @param value The unit as LitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromLitersPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a LitersPerHour
     *
     * @param value The unit as LitersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromLitersPerHour(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a LitersPerDay
     *
     * @param value The unit as LitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromLitersPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a UsGallonsPerSecond
     *
     * @param value The unit as UsGallonsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUsGallonsPerSecond(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a UsGallonsPerMinute
     *
     * @param value The unit as UsGallonsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUsGallonsPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a UkGallonsPerDay
     *
     * @param value The unit as UkGallonsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUkGallonsPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a UkGallonsPerHour
     *
     * @param value The unit as UkGallonsPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUkGallonsPerHour(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a UkGallonsPerMinute
     *
     * @param value The unit as UkGallonsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUkGallonsPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a UkGallonsPerSecond
     *
     * @param value The unit as UkGallonsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUkGallonsPerSecond(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a KilousGallonsPerMinute
     *
     * @param value The unit as KilousGallonsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromKilousGallonsPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a UsGallonsPerHour
     *
     * @param value The unit as UsGallonsPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUsGallonsPerHour(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CubicDecimetersPerMinute
     *
     * @param value The unit as CubicDecimetersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicDecimetersPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a OilBarrelsPerDay
     *
     * @param value The unit as OilBarrelsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromOilBarrelsPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a OilBarrelsPerMinute
     *
     * @param value The unit as OilBarrelsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromOilBarrelsPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a OilBarrelsPerHour
     *
     * @param value The unit as OilBarrelsPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromOilBarrelsPerHour(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a OilBarrelsPerSecond
     *
     * @param value The unit as OilBarrelsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromOilBarrelsPerSecond(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CubicMillimetersPerSecond
     *
     * @param value The unit as CubicMillimetersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicMillimetersPerSecond(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a AcreFeetPerSecond
     *
     * @param value The unit as AcreFeetPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromAcreFeetPerSecond(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a AcreFeetPerMinute
     *
     * @param value The unit as AcreFeetPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromAcreFeetPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a AcreFeetPerHour
     *
     * @param value The unit as AcreFeetPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromAcreFeetPerHour(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a AcreFeetPerDay
     *
     * @param value The unit as AcreFeetPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromAcreFeetPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a NanolitersPerMinute
     *
     * @param value The unit as NanolitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromNanolitersPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a MicrolitersPerMinute
     *
     * @param value The unit as MicrolitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromMicrolitersPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CentilitersPerMinute
     *
     * @param value The unit as CentilitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCentilitersPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a DecilitersPerMinute
     *
     * @param value The unit as DecilitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromDecilitersPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a KilolitersPerMinute
     *
     * @param value The unit as KilolitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromKilolitersPerMinute(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a NanolitersPerDay
     *
     * @param value The unit as NanolitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromNanolitersPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a MicrolitersPerDay
     *
     * @param value The unit as MicrolitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromMicrolitersPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a CentilitersPerDay
     *
     * @param value The unit as CentilitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCentilitersPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a DecilitersPerDay
     *
     * @param value The unit as DecilitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromDecilitersPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a KilolitersPerDay
     *
     * @param value The unit as KilolitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromKilolitersPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a MegalitersPerDay
     *
     * @param value The unit as MegalitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromMegalitersPerDay(value: number): VolumeFlow;
    /**
     * Create a new VolumeFlow instance from a MegaukGallonsPerSecond
     *
     * @param value The unit as MegaukGallonsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromMegaukGallonsPerSecond(value: number): VolumeFlow;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the VolumeFlow to string.
     * Note! the default format for VolumeFlow is CubicMetersPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the VolumeFlow.
     * @returns The string format of the VolumeFlow.
     */
    toString(toUnit?: VolumeFlowUnits): string;
    /**
     * Check if the given VolumeFlow are equals to the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns True if the given VolumeFlow are equal to the current VolumeFlow.
     */
    equals(volumeFlow: VolumeFlow): boolean;
    /**
     * Compare the given VolumeFlow against the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns 0 if they are equal, -1 if the current VolumeFlow is less then other, 1 if the current VolumeFlow is greater then other.
     */
    compareTo(volumeFlow: VolumeFlow): number;
    /**
     * Add the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    add(volumeFlow: VolumeFlow): VolumeFlow;
    /**
     * Subtract the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    subtract(volumeFlow: VolumeFlow): VolumeFlow;
    /**
     * Multiply the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    multiply(volumeFlow: VolumeFlow): VolumeFlow;
    /**
     * Divide the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    divide(volumeFlow: VolumeFlow): VolumeFlow;
    /**
     * Modulo the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    modulo(volumeFlow: VolumeFlow): VolumeFlow;
    /**
     * Pow the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    pow(volumeFlow: VolumeFlow): VolumeFlow;
}
//# sourceMappingURL=volumeflow.g.d.ts.map