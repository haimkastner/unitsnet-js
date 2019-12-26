/** MagnetizationUnits enumeration */
export enum MagnetizationUnits {
    /** */
    AmperesPerMeter
}

/** In classical electromagnetism, magnetization is the vector field that expresses the density of permanent or induced magnetic dipole moments in a magnetic material. */
export class Magnetization {
    private value: number;
    private amperespermeterLazy: number | null = null;

    /**
     * Create a new Magnetization.
     * @param value The value.
     * @param fromUnit The ‘Magnetization’ unit to create from.
     */
    public constructor(value: number, fromUnit: MagnetizationUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Magnetization is AmperePerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get AmperesPerMeter(): number {
        if(this.amperespermeterLazy !== null){
            return this.amperespermeterLazy;
        }
        return this.amperespermeterLazy = this.convertFromBase(MagnetizationUnits.AmperesPerMeter);
    }

    /**
     * Create a new Magnetization instance from a AmperesPerMeter
     *
     * @param value The unit as AmperesPerMeter to create a new Magnetization from.
     * @returns The new Magnetization instance.
     */
    public static FromAmperesPerMeter(value: number): Magnetization {
        return new Magnetization(value, MagnetizationUnits.AmperesPerMeter);
    }

    private convertFromBase(toUnit: MagnetizationUnits): number {
        switch (toUnit) {
                
            case MagnetizationUnits.AmperesPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MagnetizationUnits): number {
        switch (fromUnit) {
                
            case MagnetizationUnits.AmperesPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Magnetization to string.
     * Note! the default format for Magnetization is AmperesPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Magnetization.
     * @returns The string format of the Magnetization.
     */
    public toString(toUnit: MagnetizationUnits = MagnetizationUnits.AmperesPerMeter): string {

        switch (toUnit) {
            
            case MagnetizationUnits.AmperesPerMeter:
                return this.AmperesPerMeter + ` A/m`;
        default:
            break;
        }
        return this.value.toString();
    }
}
