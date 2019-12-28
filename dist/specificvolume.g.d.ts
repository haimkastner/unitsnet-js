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
     * The default unit is CubicMetersPerKilogram
     */
    constructor(value: number, fromUnit?: SpecificVolumeUnits);
    /**
     * The base value of SpecificVolume is CubicMetersPerKilogram.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given SpecificVolume are equals to the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns True if the given SpecificVolume are equal to the current SpecificVolume.
     */
    equals(specificVolume: SpecificVolume): boolean;
    /**
     * Compare the given SpecificVolume against the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns 0 if they are equal, -1 if the current SpecificVolume is less then other, 1 if the current SpecificVolume is greater then other.
     */
    compareTo(specificVolume: SpecificVolume): number;
    /**
     * Add the given SpecificVolume with the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns A new SpecificVolume instance with the results.
     */
    add(specificVolume: SpecificVolume): SpecificVolume;
    /**
     * Subtract the given SpecificVolume with the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns A new SpecificVolume instance with the results.
     */
    subtract(specificVolume: SpecificVolume): SpecificVolume;
    /**
     * Multiply the given SpecificVolume with the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns A new SpecificVolume instance with the results.
     */
    multiply(specificVolume: SpecificVolume): SpecificVolume;
    /**
     * Divide the given SpecificVolume with the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns A new SpecificVolume instance with the results.
     */
    divide(specificVolume: SpecificVolume): SpecificVolume;
    /**
     * Modulo the given SpecificVolume with the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns A new SpecificVolume instance with the results.
     */
    modulo(specificVolume: SpecificVolume): SpecificVolume;
    /**
     * Pow the given SpecificVolume with the current SpecificVolume.
     * @param specificVolume The other SpecificVolume.
     * @returns A new SpecificVolume instance with the results.
     */
    pow(specificVolume: SpecificVolume): SpecificVolume;
}
//# sourceMappingURL=specificvolume.g.d.ts.map