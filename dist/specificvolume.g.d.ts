export declare enum SpecificVolumeUnits {
    CubicMetersPerKilogram = 0,
    CubicFeetPerPound = 1
}
export declare class SpecificVolume {
    private value;
    private cubicmetersperkilogramLazy;
    private cubicfeetperpoundLazy;
    constructor(value: number, fromUnit: SpecificVolumeUnits);
    get CubicMetersPerKilogram(): number;
    get CubicFeetPerPound(): number;
    static FromCubicMetersPerKilogram(value: number): SpecificVolume;
    static FromCubicFeetPerPound(value: number): SpecificVolume;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=specificvolume.g.d.ts.map