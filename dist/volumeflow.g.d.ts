export declare enum VolumeFlowUnits {
    CubicMetersPerSecond = 0,
    CubicMetersPerMinute = 1,
    CubicMetersPerHour = 2,
    CubicMetersPerDay = 3,
    CubicFeetPerSecond = 4,
    CubicFeetPerMinute = 5,
    CubicFeetPerHour = 6,
    CubicYardsPerSecond = 7,
    CubicYardsPerMinute = 8,
    CubicYardsPerHour = 9,
    CubicYardsPerDay = 10,
    MillionUsGallonsPerDay = 11,
    UsGallonsPerDay = 12,
    LitersPerSecond = 13,
    LitersPerMinute = 14,
    LitersPerHour = 15,
    LitersPerDay = 16,
    UsGallonsPerSecond = 17,
    UsGallonsPerMinute = 18,
    UkGallonsPerDay = 19,
    UkGallonsPerHour = 20,
    UkGallonsPerMinute = 21,
    UkGallonsPerSecond = 22,
    KilousGallonsPerMinute = 23,
    UsGallonsPerHour = 24,
    CubicDecimetersPerMinute = 25,
    OilBarrelsPerDay = 26,
    OilBarrelsPerMinute = 27,
    OilBarrelsPerHour = 28,
    OilBarrelsPerSecond = 29,
    CubicMillimetersPerSecond = 30,
    AcreFeetPerSecond = 31,
    AcreFeetPerMinute = 32,
    AcreFeetPerHour = 33,
    AcreFeetPerDay = 34,
    NanolitersPerMinute = 35,
    MicrolitersPerMinute = 36,
    CentilitersPerMinute = 37,
    DecilitersPerMinute = 38,
    KilolitersPerMinute = 39,
    NanolitersPerDay = 40,
    MicrolitersPerDay = 41,
    CentilitersPerDay = 42,
    DecilitersPerDay = 43,
    KilolitersPerDay = 44,
    MegalitersPerDay = 45,
    MegaukGallonsPerSecond = 46
}
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
    constructor(value: number, fromUnit: VolumeFlowUnits);
    get CubicMetersPerSecond(): number;
    get CubicMetersPerMinute(): number;
    get CubicMetersPerHour(): number;
    get CubicMetersPerDay(): number;
    get CubicFeetPerSecond(): number;
    get CubicFeetPerMinute(): number;
    get CubicFeetPerHour(): number;
    get CubicYardsPerSecond(): number;
    get CubicYardsPerMinute(): number;
    get CubicYardsPerHour(): number;
    get CubicYardsPerDay(): number;
    get MillionUsGallonsPerDay(): number;
    get UsGallonsPerDay(): number;
    get LitersPerSecond(): number;
    get LitersPerMinute(): number;
    get LitersPerHour(): number;
    get LitersPerDay(): number;
    get UsGallonsPerSecond(): number;
    get UsGallonsPerMinute(): number;
    get UkGallonsPerDay(): number;
    get UkGallonsPerHour(): number;
    get UkGallonsPerMinute(): number;
    get UkGallonsPerSecond(): number;
    get KilousGallonsPerMinute(): number;
    get UsGallonsPerHour(): number;
    get CubicDecimetersPerMinute(): number;
    get OilBarrelsPerDay(): number;
    get OilBarrelsPerMinute(): number;
    get OilBarrelsPerHour(): number;
    get OilBarrelsPerSecond(): number;
    get CubicMillimetersPerSecond(): number;
    get AcreFeetPerSecond(): number;
    get AcreFeetPerMinute(): number;
    get AcreFeetPerHour(): number;
    get AcreFeetPerDay(): number;
    get NanolitersPerMinute(): number;
    get MicrolitersPerMinute(): number;
    get CentilitersPerMinute(): number;
    get DecilitersPerMinute(): number;
    get KilolitersPerMinute(): number;
    get NanolitersPerDay(): number;
    get MicrolitersPerDay(): number;
    get CentilitersPerDay(): number;
    get DecilitersPerDay(): number;
    get KilolitersPerDay(): number;
    get MegalitersPerDay(): number;
    get MegaukGallonsPerSecond(): number;
    static FromCubicMetersPerSecond(value: number): VolumeFlow;
    static FromCubicMetersPerMinute(value: number): VolumeFlow;
    static FromCubicMetersPerHour(value: number): VolumeFlow;
    static FromCubicMetersPerDay(value: number): VolumeFlow;
    static FromCubicFeetPerSecond(value: number): VolumeFlow;
    static FromCubicFeetPerMinute(value: number): VolumeFlow;
    static FromCubicFeetPerHour(value: number): VolumeFlow;
    static FromCubicYardsPerSecond(value: number): VolumeFlow;
    static FromCubicYardsPerMinute(value: number): VolumeFlow;
    static FromCubicYardsPerHour(value: number): VolumeFlow;
    static FromCubicYardsPerDay(value: number): VolumeFlow;
    static FromMillionUsGallonsPerDay(value: number): VolumeFlow;
    static FromUsGallonsPerDay(value: number): VolumeFlow;
    static FromLitersPerSecond(value: number): VolumeFlow;
    static FromLitersPerMinute(value: number): VolumeFlow;
    static FromLitersPerHour(value: number): VolumeFlow;
    static FromLitersPerDay(value: number): VolumeFlow;
    static FromUsGallonsPerSecond(value: number): VolumeFlow;
    static FromUsGallonsPerMinute(value: number): VolumeFlow;
    static FromUkGallonsPerDay(value: number): VolumeFlow;
    static FromUkGallonsPerHour(value: number): VolumeFlow;
    static FromUkGallonsPerMinute(value: number): VolumeFlow;
    static FromUkGallonsPerSecond(value: number): VolumeFlow;
    static FromKilousGallonsPerMinute(value: number): VolumeFlow;
    static FromUsGallonsPerHour(value: number): VolumeFlow;
    static FromCubicDecimetersPerMinute(value: number): VolumeFlow;
    static FromOilBarrelsPerDay(value: number): VolumeFlow;
    static FromOilBarrelsPerMinute(value: number): VolumeFlow;
    static FromOilBarrelsPerHour(value: number): VolumeFlow;
    static FromOilBarrelsPerSecond(value: number): VolumeFlow;
    static FromCubicMillimetersPerSecond(value: number): VolumeFlow;
    static FromAcreFeetPerSecond(value: number): VolumeFlow;
    static FromAcreFeetPerMinute(value: number): VolumeFlow;
    static FromAcreFeetPerHour(value: number): VolumeFlow;
    static FromAcreFeetPerDay(value: number): VolumeFlow;
    static FromNanolitersPerMinute(value: number): VolumeFlow;
    static FromMicrolitersPerMinute(value: number): VolumeFlow;
    static FromCentilitersPerMinute(value: number): VolumeFlow;
    static FromDecilitersPerMinute(value: number): VolumeFlow;
    static FromKilolitersPerMinute(value: number): VolumeFlow;
    static FromNanolitersPerDay(value: number): VolumeFlow;
    static FromMicrolitersPerDay(value: number): VolumeFlow;
    static FromCentilitersPerDay(value: number): VolumeFlow;
    static FromDecilitersPerDay(value: number): VolumeFlow;
    static FromKilolitersPerDay(value: number): VolumeFlow;
    static FromMegalitersPerDay(value: number): VolumeFlow;
    static FromMegaukGallonsPerSecond(value: number): VolumeFlow;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: VolumeFlowUnits): string;
}
//# sourceMappingURL=volumeflow.g.d.ts.map