/** MagneticFieldUnits enumeration */
export declare enum MagneticFieldUnits {
    /** */
    Teslas = 0,
    /** */
    Nanoteslas = 1,
    /** */
    Microteslas = 2
}
/** A magnetic field is a force field that is created by moving electric charges (electric currents) and magnetic dipoles, and exerts a force on other nearby moving charges and magnetic dipoles. */
export declare class MagneticField {
    private value;
    private teslasLazy;
    private nanoteslasLazy;
    private microteslasLazy;
    /**
     * Create a new MagneticField.
     * @param value The value.
     * @param fromUnit The ‘MagneticField’ unit to create from.
     * The default unit is Teslas
     */
    constructor(value: number, fromUnit?: MagneticFieldUnits);
    /**
     * The base value of MagneticField is Teslas.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Teslas(): number;
    /** */
    get Nanoteslas(): number;
    /** */
    get Microteslas(): number;
    /**
     * Create a new MagneticField instance from a Teslas
     *
     * @param value The unit as Teslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    static FromTeslas(value: number): MagneticField;
    /**
     * Create a new MagneticField instance from a Nanoteslas
     *
     * @param value The unit as Nanoteslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    static FromNanoteslas(value: number): MagneticField;
    /**
     * Create a new MagneticField instance from a Microteslas
     *
     * @param value The unit as Microteslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    static FromMicroteslas(value: number): MagneticField;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the MagneticField to string.
     * Note! the default format for MagneticField is Teslas.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MagneticField.
     * @returns The string format of the MagneticField.
     */
    toString(toUnit?: MagneticFieldUnits): string;
    /**
     * Check if the given MagneticField are equals to the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns True if the given MagneticField are equal to the current MagneticField.
     */
    equals(magneticField: MagneticField): boolean;
    /**
     * Compare the given MagneticField against the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns 0 if they are equal, -1 if the current MagneticField is less then other, 1 if the current MagneticField is greater then other.
     */
    compareTo(magneticField: MagneticField): number;
    /**
     * Add the given MagneticField with the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns A new MagneticField instance with the results.
     */
    add(magneticField: MagneticField): MagneticField;
    /**
     * Subtract the given MagneticField with the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns A new MagneticField instance with the results.
     */
    subtract(magneticField: MagneticField): MagneticField;
    /**
     * Multiply the given MagneticField with the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns A new MagneticField instance with the results.
     */
    multiply(magneticField: MagneticField): MagneticField;
    /**
     * Divide the given MagneticField with the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns A new MagneticField instance with the results.
     */
    divide(magneticField: MagneticField): MagneticField;
    /**
     * Modulo the given MagneticField with the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns A new MagneticField instance with the results.
     */
    modulo(magneticField: MagneticField): MagneticField;
    /**
     * Pow the given MagneticField with the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns A new MagneticField instance with the results.
     */
    pow(magneticField: MagneticField): MagneticField;
}
//# sourceMappingURL=magneticfield.g.d.ts.map