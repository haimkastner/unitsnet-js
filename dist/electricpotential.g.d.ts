/** ElectricPotentialUnits enumeration */
export declare enum ElectricPotentialUnits {
    /** */
    Volts = 0,
    /** */
    Microvolts = 1,
    /** */
    Kilovolts = 2,
    /** */
    Megavolts = 3
}
/** In classical electromagnetism, the electric potential (a scalar quantity denoted by Φ, ΦE or V and also called the electric field potential or the electrostatic potential) at a point is the amount of electric potential energy that a unitary point charge would have when located at that point. */
export declare class ElectricPotential {
    private value;
    private voltsLazy;
    private microvoltsLazy;
    private kilovoltsLazy;
    private megavoltsLazy;
    /**
     * Create a new ElectricPotential.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotential’ unit to create from.
     */
    constructor(value: number, fromUnit: ElectricPotentialUnits);
    /**
     * The base value of ElectricPotential is Volt.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Volts(): number;
    /** */
    get Microvolts(): number;
    /** */
    get Kilovolts(): number;
    /** */
    get Megavolts(): number;
    /**
     * Create a new ElectricPotential instance from a Volts
     *
     * @param value The unit as Volts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    static FromVolts(value: number): ElectricPotential;
    /**
     * Create a new ElectricPotential instance from a Microvolts
     *
     * @param value The unit as Microvolts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    static FromMicrovolts(value: number): ElectricPotential;
    /**
     * Create a new ElectricPotential instance from a Kilovolts
     *
     * @param value The unit as Kilovolts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    static FromKilovolts(value: number): ElectricPotential;
    /**
     * Create a new ElectricPotential instance from a Megavolts
     *
     * @param value The unit as Megavolts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    static FromMegavolts(value: number): ElectricPotential;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricPotential to string.
     * Note! the default format for ElectricPotential is Volts.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricPotential.
     * @returns The string format of the ElectricPotential.
     */
    toString(toUnit?: ElectricPotentialUnits): string;
}
//# sourceMappingURL=electricpotential.g.d.ts.map