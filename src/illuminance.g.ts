/** IlluminanceUnits enumeration */
export enum IlluminanceUnits {
    /** */
    Lux,
    /** */
    Millilux,
    /** */
    Kilolux,
    /** */
    Megalux
}

/** In photometry, illuminance is the total luminous flux incident on a surface, per unit area. */
export class Illuminance {
    private value: number;
    private luxLazy: number | null = null;
    private milliluxLazy: number | null = null;
    private kiloluxLazy: number | null = null;
    private megaluxLazy: number | null = null;

    /**
     * Create a new Illuminance.
     * @param value The value.
     * @param fromUnit The ‘Illuminance’ unit to create from.
     * The default unit is Lux
     */
    public constructor(value: number, fromUnit: IlluminanceUnits = IlluminanceUnits.Lux) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Illuminance is Lux.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    public get Millilux(): number {
        if(this.milliluxLazy !== null){
            return this.milliluxLazy;
        }
        return this.milliluxLazy = this.convertFromBase(IlluminanceUnits.Millilux);
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
     * Create a new Illuminance instance from a Millilux
     *
     * @param value The unit as Millilux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    public static FromMillilux(value: number): Illuminance {
        return new Illuminance(value, IlluminanceUnits.Millilux);
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
            case IlluminanceUnits.Millilux:
                return (this.value) / 0.001;
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
            case IlluminanceUnits.Millilux:
                return (value) * 0.001;
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
            case IlluminanceUnits.Millilux:
                return this.Millilux + ` `;
            case IlluminanceUnits.Kilolux:
                return this.Kilolux + ` `;
            case IlluminanceUnits.Megalux:
                return this.Megalux + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given Illuminance are equals to the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns True if the given Illuminance are equal to the current Illuminance.
     */
    public equals(illuminance: Illuminance): boolean {
        return this.value === illuminance.BaseValue;
    }

    /**
     * Compare the given Illuminance against the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns 0 if they are equal, -1 if the current Illuminance is less then other, 1 if the current Illuminance is greater then other.
     */
    public compareTo(illuminance: Illuminance): number {

        if (this.value > illuminance.BaseValue)
            return 1;
        if (this.value < illuminance.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    public add(illuminance: Illuminance): Illuminance {
        return new Illuminance(this.value + illuminance.BaseValue)
    }

    /**
     * Subtract the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    public subtract(illuminance: Illuminance): Illuminance {
        return new Illuminance(this.value - illuminance.BaseValue)
    }

    /**
     * Multiply the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    public multiply(illuminance: Illuminance): Illuminance {
        return new Illuminance(this.value * illuminance.BaseValue)
    }

    /**
     * Divide the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    public divide(illuminance: Illuminance): Illuminance {
        return new Illuminance(this.value / illuminance.BaseValue)
    }

    /**
     * Modulo the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    public modulo(illuminance: Illuminance): Illuminance {
        return new Illuminance(this.value % illuminance.BaseValue)
    }

    /**
     * Pow the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    public pow(illuminance: Illuminance): Illuminance {
        return new Illuminance(this.value ** illuminance.BaseValue)
    }
}
