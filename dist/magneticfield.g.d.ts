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
     */
    constructor(value: number, fromUnit: MagneticFieldUnits);
    /**
     * The base value of MagneticField is Tesla.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=magneticfield.g.d.ts.map