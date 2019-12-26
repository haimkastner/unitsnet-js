/** ElectricAdmittanceUnits enumeration */
export declare enum ElectricAdmittanceUnits {
    /** */
    Siemens = 0,
    /** */
    Nanosiemens = 1,
    /** */
    Microsiemens = 2
}
/** Electric admittance is a measure of how easily a circuit or device will allow a current to flow. It is defined as the inverse of impedance. The SI unit of admittance is the siemens (symbol S). */
export declare class ElectricAdmittance {
    private value;
    private siemensLazy;
    private nanosiemensLazy;
    private microsiemensLazy;
    /**
     * Create a new ElectricAdmittance.
     * @param value The value.
     * @param fromUnit The ‘ElectricAdmittance’ unit to create from.
     */
    constructor(value: number, fromUnit: ElectricAdmittanceUnits);
    /**
     * The base value of ElectricAdmittance is Siemens.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Siemens(): number;
    /** */
    get Nanosiemens(): number;
    /** */
    get Microsiemens(): number;
    /**
     * Create a new ElectricAdmittance instance from a Siemens
     *
     * @param value The unit as Siemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    static FromSiemens(value: number): ElectricAdmittance;
    /**
     * Create a new ElectricAdmittance instance from a Nanosiemens
     *
     * @param value The unit as Nanosiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    static FromNanosiemens(value: number): ElectricAdmittance;
    /**
     * Create a new ElectricAdmittance instance from a Microsiemens
     *
     * @param value The unit as Microsiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    static FromMicrosiemens(value: number): ElectricAdmittance;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricAdmittance to string.
     * Note! the default format for ElectricAdmittance is Siemens.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricAdmittance.
     * @returns The string format of the ElectricAdmittance.
     */
    toString(toUnit?: ElectricAdmittanceUnits): string;
}
//# sourceMappingURL=electricadmittance.g.d.ts.map