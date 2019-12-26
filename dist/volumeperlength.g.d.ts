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
     */
    constructor(value: number, fromUnit: VolumePerLengthUnits);
    /**
     * The base value of VolumePerLength is CubicMeterPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=volumeperlength.g.d.ts.map