/** PermeabilityUnits enumeration */
export declare enum PermeabilityUnits {
    /** */
    HenriesPerMeter = 0
}
/** In electromagnetism, permeability is the measure of the ability of a material to support the formation of a magnetic field within itself. */
export declare class Permeability {
    private value;
    private henriespermeterLazy;
    /**
     * Create a new Permeability.
     * @param value The value.
     * @param fromUnit The ‘Permeability’ unit to create from.
     */
    constructor(value: number, fromUnit: PermeabilityUnits);
    /**
     * The base value of Permeability is HenryPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get HenriesPerMeter(): number;
    /**
     * Create a new Permeability instance from a HenriesPerMeter
     *
     * @param value The unit as HenriesPerMeter to create a new Permeability from.
     * @returns The new Permeability instance.
     */
    static FromHenriesPerMeter(value: number): Permeability;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Permeability to string.
     * Note! the default format for Permeability is HenriesPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Permeability.
     * @returns The string format of the Permeability.
     */
    toString(toUnit?: PermeabilityUnits): string;
}
//# sourceMappingURL=permeability.g.d.ts.map