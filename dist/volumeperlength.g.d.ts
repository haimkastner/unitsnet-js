/** VolumePerLengthUnits enumeration */
export declare enum VolumePerLengthUnits {
    /** */
    CubicMetersPerMeter = 0,
    /** */
    LitersPerMeter = 1,
    /** */
    OilBarrelsPerFoot = 2
}
/** Volume, typically of fluid, that a container can hold within a unit of length. */
export declare class VolumePerLength {
    private value;
    private cubicmeterspermeterLazy;
    private literspermeterLazy;
    private oilbarrelsperfootLazy;
    /**
     * Create a new VolumePerLength.
     * @param value The value.
     * @param fromUnit The ‘VolumePerLength’ unit to create from.
     * The default unit is CubicMetersPerMeter
     */
    constructor(value: number, fromUnit?: VolumePerLengthUnits);
    /**
     * The base value of VolumePerLength is CubicMetersPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get CubicMetersPerMeter(): number;
    /** */
    get LitersPerMeter(): number;
    /** */
    get OilBarrelsPerFoot(): number;
    /**
     * Create a new VolumePerLength instance from a CubicMetersPerMeter
     *
     * @param value The unit as CubicMetersPerMeter to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    static FromCubicMetersPerMeter(value: number): VolumePerLength;
    /**
     * Create a new VolumePerLength instance from a LitersPerMeter
     *
     * @param value The unit as LitersPerMeter to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    static FromLitersPerMeter(value: number): VolumePerLength;
    /**
     * Create a new VolumePerLength instance from a OilBarrelsPerFoot
     *
     * @param value The unit as OilBarrelsPerFoot to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    static FromOilBarrelsPerFoot(value: number): VolumePerLength;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the VolumePerLength to string.
     * Note! the default format for VolumePerLength is CubicMetersPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the VolumePerLength.
     * @returns The string format of the VolumePerLength.
     */
    toString(toUnit?: VolumePerLengthUnits): string;
    /**
     * Check if the given VolumePerLength are equals to the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns True if the given VolumePerLength are equal to the current VolumePerLength.
     */
    equals(volumePerLength: VolumePerLength): boolean;
    /**
     * Compare the given VolumePerLength against the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns 0 if they are equal, -1 if the current VolumePerLength is less then other, 1 if the current VolumePerLength is greater then other.
     */
    compareTo(volumePerLength: VolumePerLength): number;
    /**
     * Add the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    add(volumePerLength: VolumePerLength): VolumePerLength;
    /**
     * Subtract the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    subtract(volumePerLength: VolumePerLength): VolumePerLength;
    /**
     * Multiply the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    multiply(volumePerLength: VolumePerLength): VolumePerLength;
    /**
     * Divide the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    divide(volumePerLength: VolumePerLength): VolumePerLength;
    /**
     * Modulo the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    modulo(volumePerLength: VolumePerLength): VolumePerLength;
    /**
     * Pow the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    pow(volumePerLength: VolumePerLength): VolumePerLength;
}
//# sourceMappingURL=volumeperlength.g.d.ts.map