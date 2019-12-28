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
     * The default unit is InternationalUnits
     */
    constructor(value: number, fromUnit?: VitaminAUnits);
    /**
     * The base value of VitaminA is InternationalUnits.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given VitaminA are equals to the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns True if the given VitaminA are equal to the current VitaminA.
     */
    equals(vitaminA: VitaminA): boolean;
    /**
     * Compare the given VitaminA against the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns 0 if they are equal, -1 if the current VitaminA is less then other, 1 if the current VitaminA is greater then other.
     */
    compareTo(vitaminA: VitaminA): number;
    /**
     * Add the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    add(vitaminA: VitaminA): VitaminA;
    /**
     * Subtract the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    subtract(vitaminA: VitaminA): VitaminA;
    /**
     * Multiply the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    multiply(vitaminA: VitaminA): VitaminA;
    /**
     * Divide the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    divide(vitaminA: VitaminA): VitaminA;
    /**
     * Modulo the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    modulo(vitaminA: VitaminA): VitaminA;
    /**
     * Pow the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    pow(vitaminA: VitaminA): VitaminA;
}
//# sourceMappingURL=vitamina.g.d.ts.map