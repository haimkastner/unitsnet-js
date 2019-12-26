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
     */
    constructor(value: number, fromUnit: ElectricFieldUnits);
    /**
     * The base value of ElectricField is VoltPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=electricfield.g.d.ts.map