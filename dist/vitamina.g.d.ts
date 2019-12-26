/** VitaminAUnits enumeration */
export declare enum VitaminAUnits {
    /** */
    InternationalUnits = 0
}
/** Vitamin A: 1 IU is the biological equivalent of 0.3 µg retinol, or of 0.6 µg beta-carotene. */
export declare class VitaminA {
    private value;
    private internationalunitsLazy;
    /**
     * Create a new VitaminA.
     * @param value The value.
     * @param fromUnit The ‘VitaminA’ unit to create from.
     */
    constructor(value: number, fromUnit: VitaminAUnits);
    /**
     * The base value of VitaminA is InternationalUnit.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get InternationalUnits(): number;
    /**
     * Create a new VitaminA instance from a InternationalUnits
     *
     * @param value The unit as InternationalUnits to create a new VitaminA from.
     * @returns The new VitaminA instance.
     */
    static FromInternationalUnits(value: number): VitaminA;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the VitaminA to string.
     * Note! the default format for VitaminA is InternationalUnits.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the VitaminA.
     * @returns The string format of the VitaminA.
     */
    toString(toUnit?: VitaminAUnits): string;
}
//# sourceMappingURL=vitamina.g.d.ts.map