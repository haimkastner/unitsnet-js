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
    Nanolitersperminute = 35,
    Microlitersperminute = 36,
    Centilitersperminute = 37,
    Decilitersperminute = 38,
    Kilolitersperminute = 39,
    Nanolitersperday = 40,
    Microlitersperday = 41,
    Centilitersperday = 42,
    Decilitersperday = 43,
    Kilolitersperday = 44,
    Megalitersperday = 45,
    Megaukgallonspersecond = 46
}
export declare class VolumeFlow {
    private value;
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
    get Nanolitersperminute(): number;
    get Microlitersperminute(): number;
    get Centilitersperminute(): number;
    get Decilitersperminute(): number;
    get Kilolitersperminute(): number;
    get Nanolitersperday(): number;
    get Microlitersperday(): number;
    get Centilitersperday(): number;
    get Decilitersperday(): number;
    get Kilolitersperday(): number;
    get Megalitersperday(): number;
    get Megaukgallonspersecond(): number;
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
    static FromNanolitersperminute(value: number): VolumeFlow;
    static FromMicrolitersperminute(value: number): VolumeFlow;
    static FromCentilitersperminute(value: number): VolumeFlow;
    static FromDecilitersperminute(value: number): VolumeFlow;
    static FromKilolitersperminute(value: number): VolumeFlow;
    static FromNanolitersperday(value: number): VolumeFlow;
    static FromMicrolitersperday(value: number): VolumeFlow;
    static FromCentilitersperday(value: number): VolumeFlow;
    static FromDecilitersperday(value: number): VolumeFlow;
    static FromKilolitersperday(value: number): VolumeFlow;
    static FromMegalitersperday(value: number): VolumeFlow;
    static FromMegaukgallonspersecond(value: number): VolumeFlow;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=volumeflow.g.d.ts.map