/** ElectricResistanceUnits enumeration */
export enum ElectricResistanceUnits {
    /** */
    Ohms,
    /** */
    Kiloohms,
    /** */
    Megaohms,
    /** */
    Gigaohms
}

/** The electrical resistance of an electrical conductor is the opposition to the passage of an electric current through that conductor. */
export class ElectricResistance {
    private value: number;
    private ohmsLazy: number | null = null;
    private kiloohmsLazy: number | null = null;
    private megaohmsLazy: number | null = null;
    private gigaohmsLazy: number | null = null;

    /**
     * Create a new ElectricResistance.
     * @param value The value.
     * @param fromUnit The ‘ElectricResistance’ unit to create from.
     */
    public constructor(value: number, fromUnit: ElectricResistanceUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricResistance is Ohm.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Ohms(): number {
        if(this.ohmsLazy !== null){
            return this.ohmsLazy;
        }
        return this.ohmsLazy = this.convertFromBase(ElectricResistanceUnits.Ohms);
    }

    /** */
    public get Kiloohms(): number {
        if(this.kiloohmsLazy !== null){
            return this.kiloohmsLazy;
        }
        return this.kiloohmsLazy = this.convertFromBase(ElectricResistanceUnits.Kiloohms);
    }

    /** */
    public get Megaohms(): number {
        if(this.megaohmsLazy !== null){
            return this.megaohmsLazy;
        }
        return this.megaohmsLazy = this.convertFromBase(ElectricResistanceUnits.Megaohms);
    }

    /** */
    public get Gigaohms(): number {
        if(this.gigaohmsLazy !== null){
            return this.gigaohmsLazy;
        }
        return this.gigaohmsLazy = this.convertFromBase(ElectricResistanceUnits.Gigaohms);
    }

    /**
     * Create a new ElectricResistance instance from a Ohms
     *
     * @param value The unit as Ohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    public static FromOhms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Ohms);
    }

    /**
     * Create a new ElectricResistance instance from a Kiloohms
     *
     * @param value The unit as Kiloohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    public static FromKiloohms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Kiloohms);
    }

    /**
     * Create a new ElectricResistance instance from a Megaohms
     *
     * @param value The unit as Megaohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    public static FromMegaohms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Megaohms);
    }

    /**
     * Create a new ElectricResistance instance from a Gigaohms
     *
     * @param value The unit as Gigaohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    public static FromGigaohms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Gigaohms);
    }

    private convertFromBase(toUnit: ElectricResistanceUnits): number {
        switch (toUnit) {
                
            case ElectricResistanceUnits.Ohms:
                return this.value;
            case ElectricResistanceUnits.Kiloohms:
                return (this.value) / 1000;
            case ElectricResistanceUnits.Megaohms:
                return (this.value) / 1000000;
            case ElectricResistanceUnits.Gigaohms:
                return (this.value) / 1000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricResistanceUnits): number {
        switch (fromUnit) {
                
            case ElectricResistanceUnits.Ohms:
                return value;
            case ElectricResistanceUnits.Kiloohms:
                return (value) * 1000;
            case ElectricResistanceUnits.Megaohms:
                return (value) * 1000000;
            case ElectricResistanceUnits.Gigaohms:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricResistance to string.
     * Note! the default format for ElectricResistance is Ohms.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricResistance.
     * @returns The string format of the ElectricResistance.
     */
    public toString(toUnit: ElectricResistanceUnits = ElectricResistanceUnits.Ohms): string {

        switch (toUnit) {
            
            case ElectricResistanceUnits.Ohms:
                return this.Ohms + ` Ω`;
            case ElectricResistanceUnits.Kiloohms:
                return this.Kiloohms + ` Ω`;
            case ElectricResistanceUnits.Megaohms:
                return this.Megaohms + ` Ω`;
            case ElectricResistanceUnits.Gigaohms:
                return this.Gigaohms + ` Ω`;
        default:
            break;
        }
        return this.value.toString();
    }
}
