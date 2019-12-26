/** MagnetizationUnits enumeration */
export declare enum MagnetizationUnits {
    /** */
    AmperesPerMeter = 0
}
/** In classical electromagnetism, magnetization is the vector field that expresses the density of permanent or induced magnetic dipole moments in a magnetic material. */
export declare class Magnetization {
    private value;
    private amperespermeterLazy;
    /**
     * Create a new Magnetization.
     * @param value The value.
     * @param fromUnit The ‘Magnetization’ unit to create from.
     */
    constructor(value: number, fromUnit: MagnetizationUnits);
    /**
     * The base value of Magnetization is AmperePerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get AmperesPerMeter(): number;
    /**
     * Create a new Magnetization instance from a AmperesPerMeter
     *
     * @param value The unit as AmperesPerMeter to create a new Magnetization from.
     * @returns The new Magnetization instance.
     */
    static FromAmperesPerMeter(value: number): Magnetization;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Magnetization to string.
     * Note! the default format for Magnetization is AmperesPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Magnetization.
     * @returns The string format of the Magnetization.
     */
    toString(toUnit?: MagnetizationUnits): string;
}
//# sourceMappingURL=magnetization.g.d.ts.map