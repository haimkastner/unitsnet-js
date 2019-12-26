/** PermeabilityUnits enumeration */
export enum PermeabilityUnits {
    /** */
    HenriesPerMeter
}

/** In electromagnetism, permeability is the measure of the ability of a material to support the formation of a magnetic field within itself. */
export class Permeability {
    private value: number;
    private henriespermeterLazy: number | null = null;

    /**
     * Create a new Permeability.
     * @param value The value.
     * @param fromUnit The ‘Permeability’ unit to create from.
     */
    public constructor(value: number, fromUnit: PermeabilityUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Permeability is HenryPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get HenriesPerMeter(): number {
        if(this.henriespermeterLazy !== null){
            return this.henriespermeterLazy;
        }
        return this.henriespermeterLazy = this.convertFromBase(PermeabilityUnits.HenriesPerMeter);
    }

    /**
     * Create a new Permeability instance from a HenriesPerMeter
     *
     * @param value The unit as HenriesPerMeter to create a new Permeability from.
     * @returns The new Permeability instance.
     */
    public static FromHenriesPerMeter(value: number): Permeability {
        return new Permeability(value, PermeabilityUnits.HenriesPerMeter);
    }

    private convertFromBase(toUnit: PermeabilityUnits): number {
        switch (toUnit) {
                
            case PermeabilityUnits.HenriesPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PermeabilityUnits): number {
        switch (fromUnit) {
                
            case PermeabilityUnits.HenriesPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Permeability to string.
     * Note! the default format for Permeability is HenriesPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Permeability.
     * @returns The string format of the Permeability.
     */
    public toString(toUnit: PermeabilityUnits = PermeabilityUnits.HenriesPerMeter): string {

        switch (toUnit) {
            
            case PermeabilityUnits.HenriesPerMeter:
                return this.HenriesPerMeter + ` H/m`;
        default:
            break;
        }
        return this.value.toString();
    }
}
