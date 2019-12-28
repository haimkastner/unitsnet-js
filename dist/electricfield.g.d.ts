/** ElectricFieldUnits enumeration */
export declare enum ElectricFieldUnits {
    /** */
    VoltsPerMeter = 0
}
/** An electric field is a force field that surrounds electric charges that attracts or repels other electric charges. */
export declare class ElectricField {
    private value;
    private voltspermeterLazy;
    /**
     * Create a new ElectricField.
     * @param value The value.
     * @param fromUnit The ‘ElectricField’ unit to create from.
     * The default unit is VoltsPerMeter
     */
    constructor(value: number, fromUnit?: ElectricFieldUnits);
    /**
     * The base value of ElectricField is VoltsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get VoltsPerMeter(): number;
    /**
     * Create a new ElectricField instance from a VoltsPerMeter
     *
     * @param value The unit as VoltsPerMeter to create a new ElectricField from.
     * @returns The new ElectricField instance.
     */
    static FromVoltsPerMeter(value: number): ElectricField;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricField to string.
     * Note! the default format for ElectricField is VoltsPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricField.
     * @returns The string format of the ElectricField.
     */
    toString(toUnit?: ElectricFieldUnits): string;
    /**
     * Check if the given ElectricField are equals to the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns True if the given ElectricField are equal to the current ElectricField.
     */
    equals(electricField: ElectricField): boolean;
    /**
     * Compare the given ElectricField against the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns 0 if they are equal, -1 if the current ElectricField is less then other, 1 if the current ElectricField is greater then other.
     */
    compareTo(electricField: ElectricField): number;
    /**
     * Add the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    add(electricField: ElectricField): ElectricField;
    /**
     * Subtract the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    subtract(electricField: ElectricField): ElectricField;
    /**
     * Multiply the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    multiply(electricField: ElectricField): ElectricField;
    /**
     * Divide the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    divide(electricField: ElectricField): ElectricField;
    /**
     * Modulo the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    modulo(electricField: ElectricField): ElectricField;
    /**
     * Pow the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    pow(electricField: ElectricField): ElectricField;
}
//# sourceMappingURL=electricfield.g.d.ts.map