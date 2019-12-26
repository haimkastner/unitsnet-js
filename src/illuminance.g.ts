/** IlluminanceUnits enumeration */
export enum IlluminanceUnits {
    /** */
    Lux,
    /** */
    Kilolux,
    /** */
    Megalux
}

/** In photometry, illuminance is the total luminous flux incident on a surface, per unit area. */
export class Illuminance {
    private value: number;
    private luxLazy: number | null = null;
    private kiloluxLazy: number | null = null;
    private megaluxLazy: number | null = null;

    /**
     * Create a new Illuminance.
     * @param value The value.
     * @param fromUnit The ‘Illuminance’ unit to create from.
     */
    public constructor(value: number, fromUnit: IlluminanceUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Illuminance is Lux.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Lux(): number {
        if(this.luxLazy !== null){
            return this.luxLazy;
        }
        return this.luxLazy = this.convertFromBase(IlluminanceUnits.Lux);
    }

    /** */
    public get Kilolux(): number {
        if(this.kiloluxLazy !== null){
            return this.kiloluxLazy;
        }
        return this.kiloluxLazy = this.convertFromBase(IlluminanceUnits.Kilolux);
    }

    /** */
    public get Megalux(): number {
        if(this.megaluxLazy !== null){
            return this.megaluxLazy;
        }
        return this.megaluxLazy = this.convertFromBase(IlluminanceUnits.Megalux);
    }

    /**
     * Create a new Illuminance instance from a Lux
     *
     * @param value The unit as Lux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    public static FromLux(value: number): Illuminance {
        return new Illuminance(value, IlluminanceUnits.Lux);
    }

    /**
     * Create a new Illuminance instance from a Kilolux
     *
     * @param value The unit as Kilolux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    public static FromKilolux(value: number): Illuminance {
        return new Illuminance(value, IlluminanceUnits.Kilolux);
    }

    /**
     * Create a new Illuminance instance from a Megalux
     *
     * @param value The unit as Megalux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    public static FromMegalux(value: number): Illuminance {
        return new Illuminance(value, IlluminanceUnits.Megalux);
    }

    private convertFromBase(toUnit: IlluminanceUnits): number {
        switch (toUnit) {
                
            case IlluminanceUnits.Lux:
                return this.value;
            case IlluminanceUnits.Kilolux:
                return (this.value) / 1000;
            case IlluminanceUnits.Megalux:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: IlluminanceUnits): number {
        switch (fromUnit) {
                
            case IlluminanceUnits.Lux:
                return value;
            case IlluminanceUnits.Kilolux:
                return (value) * 1000;
            case IlluminanceUnits.Megalux:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Illuminance to string.
     * Note! the default format for Illuminance is Lux.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Illuminance.
     * @returns The string format of the Illuminance.
     */
    public toString(toUnit: IlluminanceUnits = IlluminanceUnits.Lux): string {

        switch (toUnit) {
            
            case IlluminanceUnits.Lux:
                return this.Lux + ` lx`;
            case IlluminanceUnits.Kilolux:
                return this.Kilolux + ` lx`;
            case IlluminanceUnits.Megalux:
                return this.Megalux + ` lx`;
        default:
            break;
        }
        return this.value.toString();
    }
}
