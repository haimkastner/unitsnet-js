/** SpecificVolumeUnits enumeration */
export declare enum SpecificVolumeUnits {
    /** */
    CubicMetersPerKilogram = 0,
    /** */
    CubicFeetPerPound = 1
}
/** In thermodynamics, the specific volume of a substance is the ratio of the substance's volume to its mass. It is the reciprocal of density and an intrinsic property of matter as well. */
export declare class SpecificVolume {
    private value;
    private cubicmetersperkilogramLazy;
    private cubicfeetperpoundLazy;
    /**
     * Create a new SpecificVolume.
     * @param value The value.
     * @param fromUnit The ‘SpecificVolume’ unit to create from.
     */
    constructor(value: number, fromUnit: SpecificVolumeUnits);
    /**
     * The base value of SpecificVolume is CubicMeterPerKilogram.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get CubicMetersPerKilogram(): number;
    /** */
    get CubicFeetPerPound(): number;
    /**
     * Create a new SpecificVolume instance from a CubicMetersPerKilogram
     *
     * @param value The unit as CubicMetersPerKilogram to create a new SpecificVolume from.
     * @returns The new SpecificVolume instance.
     */
    static FromCubicMetersPerKilogram(value: number): SpecificVolume;
    /**
     * Create a new SpecificVolume instance from a CubicFeetPerPound
     *
     * @param value The unit as CubicFeetPerPound to create a new SpecificVolume from.
     * @returns The new SpecificVolume instance.
     */
    static FromCubicFeetPerPound(value: number): SpecificVolume;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the SpecificVolume to string.
     * Note! the default format for SpecificVolume is CubicMetersPerKilogram.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SpecificVolume.
     * @returns The string format of the SpecificVolume.
     */
    toString(toUnit?: SpecificVolumeUnits): string;
}
//# sourceMappingURL=specificvolume.g.d.ts.map