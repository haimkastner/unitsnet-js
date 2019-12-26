/** ElectricInductanceUnits enumeration */
export enum ElectricInductanceUnits {
    /** */
    Henries,
    /** */
    Nanohenries,
    /** */
    Microhenries
}

/** Inductance is a property of an electrical conductor which opposes a change in current. */
export class ElectricInductance {
    private value: number;
    private henriesLazy: number | null = null;
    private nanohenriesLazy: number | null = null;
    private microhenriesLazy: number | null = null;

    /**
     * Create a new ElectricInductance.
     * @param value The value.
     * @param fromUnit The ‘ElectricInductance’ unit to create from.
     */
    public constructor(value: number, fromUnit: ElectricInductanceUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricInductance is Henry.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Henries(): number {
        if(this.henriesLazy !== null){
            return this.henriesLazy;
        }
        return this.henriesLazy = this.convertFromBase(ElectricInductanceUnits.Henries);
    }

    /** */
    public get Nanohenries(): number {
        if(this.nanohenriesLazy !== null){
            return this.nanohenriesLazy;
        }
        return this.nanohenriesLazy = this.convertFromBase(ElectricInductanceUnits.Nanohenries);
    }

    /** */
    public get Microhenries(): number {
        if(this.microhenriesLazy !== null){
            return this.microhenriesLazy;
        }
        return this.microhenriesLazy = this.convertFromBase(ElectricInductanceUnits.Microhenries);
    }

    /**
     * Create a new ElectricInductance instance from a Henries
     *
     * @param value The unit as Henries to create a new ElectricInductance from.
     * @returns The new ElectricInductance instance.
     */
    public static FromHenries(value: number): ElectricInductance {
        return new ElectricInductance(value, ElectricInductanceUnits.Henries);
    }

    /**
     * Create a new ElectricInductance instance from a Nanohenries
     *
     * @param value The unit as Nanohenries to create a new ElectricInductance from.
     * @returns The new ElectricInductance instance.
     */
    public static FromNanohenries(value: number): ElectricInductance {
        return new ElectricInductance(value, ElectricInductanceUnits.Nanohenries);
    }

    /**
     * Create a new ElectricInductance instance from a Microhenries
     *
     * @param value The unit as Microhenries to create a new ElectricInductance from.
     * @returns The new ElectricInductance instance.
     */
    public static FromMicrohenries(value: number): ElectricInductance {
        return new ElectricInductance(value, ElectricInductanceUnits.Microhenries);
    }

    private convertFromBase(toUnit: ElectricInductanceUnits): number {
        switch (toUnit) {
                
            case ElectricInductanceUnits.Henries:
                return this.value;
            case ElectricInductanceUnits.Nanohenries:
                return (this.value) / 1e-9;
            case ElectricInductanceUnits.Microhenries:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricInductanceUnits): number {
        switch (fromUnit) {
                
            case ElectricInductanceUnits.Henries:
                return value;
            case ElectricInductanceUnits.Nanohenries:
                return (value) * 1e-9;
            case ElectricInductanceUnits.Microhenries:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricInductance to string.
     * Note! the default format for ElectricInductance is Henries.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricInductance.
     * @returns The string format of the ElectricInductance.
     */
    public toString(toUnit: ElectricInductanceUnits = ElectricInductanceUnits.Henries): string {

        switch (toUnit) {
            
            case ElectricInductanceUnits.Henries:
                return this.Henries + ` H`;
            case ElectricInductanceUnits.Nanohenries:
                return this.Nanohenries + ` H`;
            case ElectricInductanceUnits.Microhenries:
                return this.Microhenries + ` H`;
        default:
            break;
        }
        return this.value.toString();
    }
}
