/** ElectricConductanceUnits enumeration */
export declare enum ElectricConductanceUnits {
    /** */
    Siemens = 0,
    /** */
    Microsiemens = 1
}
/** The electrical conductance of an electrical conductor is a measure of the easeness to pass an electric current through that conductor. */
export declare class ElectricConductance {
    private value;
    private siemensLazy;
    private microsiemensLazy;
    /**
     * Create a new ElectricConductance.
     * @param value The value.
     * @param fromUnit The ‘ElectricConductance’ unit to create from.
     */
    constructor(value: number, fromUnit: ElectricConductanceUnits);
    /**
     * The base value of ElectricConductance is Siemens.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Siemens(): number;
    /** */
    get Microsiemens(): number;
    /**
     * Create a new ElectricConductance instance from a Siemens
     *
     * @param value The unit as Siemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    static FromSiemens(value: number): ElectricConductance;
    /**
     * Create a new ElectricConductance instance from a Microsiemens
     *
     * @param value The unit as Microsiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    static FromMicrosiemens(value: number): ElectricConductance;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricConductance to string.
     * Note! the default format for ElectricConductance is Siemens.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricConductance.
     * @returns The string format of the ElectricConductance.
     */
    toString(toUnit?: ElectricConductanceUnits): string;
}
//# sourceMappingURL=electricconductance.g.d.ts.map