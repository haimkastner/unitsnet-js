/** ElectricConductivityUnits enumeration */
export declare enum ElectricConductivityUnits {
    /** */
    SiemensPerMeter = 0,
    /** */
    SiemensPerInch = 1,
    /** */
    SiemensPerFoot = 2
}
/** Electrical conductivity or specific conductance is the reciprocal of electrical resistivity, and measures a material's ability to conduct an electric current. */
export declare class ElectricConductivity {
    private value;
    private siemenspermeterLazy;
    private siemensperinchLazy;
    private siemensperfootLazy;
    /**
     * Create a new ElectricConductivity.
     * @param value The value.
     * @param fromUnit The ‘ElectricConductivity’ unit to create from.
     */
    constructor(value: number, fromUnit: ElectricConductivityUnits);
    /**
     * The base value of ElectricConductivity is SiemensPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get SiemensPerMeter(): number;
    /** */
    get SiemensPerInch(): number;
    /** */
    get SiemensPerFoot(): number;
    /**
     * Create a new ElectricConductivity instance from a SiemensPerMeter
     *
     * @param value The unit as SiemensPerMeter to create a new ElectricConductivity from.
     * @returns The new ElectricConductivity instance.
     */
    static FromSiemensPerMeter(value: number): ElectricConductivity;
    /**
     * Create a new ElectricConductivity instance from a SiemensPerInch
     *
     * @param value The unit as SiemensPerInch to create a new ElectricConductivity from.
     * @returns The new ElectricConductivity instance.
     */
    static FromSiemensPerInch(value: number): ElectricConductivity;
    /**
     * Create a new ElectricConductivity instance from a SiemensPerFoot
     *
     * @param value The unit as SiemensPerFoot to create a new ElectricConductivity from.
     * @returns The new ElectricConductivity instance.
     */
    static FromSiemensPerFoot(value: number): ElectricConductivity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricConductivity to string.
     * Note! the default format for ElectricConductivity is SiemensPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricConductivity.
     * @returns The string format of the ElectricConductivity.
     */
    toString(toUnit?: ElectricConductivityUnits): string;
}
//# sourceMappingURL=electricconductivity.g.d.ts.map