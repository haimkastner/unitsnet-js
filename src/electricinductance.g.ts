/** API DTO represents a ElectricInductance */
export interface ElectricInductanceDto {
    /** The value of the ElectricInductance */
    value: number;
    /**  The specific unit that the ElectricInductance value is representing */
    unit: ElectricInductanceUnits;
}

/** ElectricInductanceUnits enumeration */
export enum ElectricInductanceUnits {
    /** */
    Henries = "Henry",
    /** */
    Picohenries = "Picohenry",
    /** */
    Nanohenries = "Nanohenry",
    /** */
    Microhenries = "Microhenry",
    /** */
    Millihenries = "Millihenry"
}

/** Inductance is a property of an electrical conductor which opposes a change in current. */
export class ElectricInductance {
    private value: number;
    private henriesLazy: number | null = null;
    private picohenriesLazy: number | null = null;
    private nanohenriesLazy: number | null = null;
    private microhenriesLazy: number | null = null;
    private millihenriesLazy: number | null = null;

    /**
     * Create a new ElectricInductance.
     * @param value The value.
     * @param fromUnit The ‘ElectricInductance’ unit to create from.
     * The default unit is Henries
     */
    public constructor(value: number, fromUnit: ElectricInductanceUnits = ElectricInductanceUnits.Henries) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricInductance is Henries.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    public get Picohenries(): number {
        if(this.picohenriesLazy !== null){
            return this.picohenriesLazy;
        }
        return this.picohenriesLazy = this.convertFromBase(ElectricInductanceUnits.Picohenries);
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

    /** */
    public get Millihenries(): number {
        if(this.millihenriesLazy !== null){
            return this.millihenriesLazy;
        }
        return this.millihenriesLazy = this.convertFromBase(ElectricInductanceUnits.Millihenries);
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
     * Create a new ElectricInductance instance from a Picohenries
     *
     * @param value The unit as Picohenries to create a new ElectricInductance from.
     * @returns The new ElectricInductance instance.
     */
    public static FromPicohenries(value: number): ElectricInductance {
        return new ElectricInductance(value, ElectricInductanceUnits.Picohenries);
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

    /**
     * Create a new ElectricInductance instance from a Millihenries
     *
     * @param value The unit as Millihenries to create a new ElectricInductance from.
     * @returns The new ElectricInductance instance.
     */
    public static FromMillihenries(value: number): ElectricInductance {
        return new ElectricInductance(value, ElectricInductanceUnits.Millihenries);
    }

    /**
     * Create API DTO represent a ElectricInductance unit.
     * @param holdInUnit The specific ElectricInductance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricInductanceUnits = ElectricInductanceUnits.Henries): ElectricInductanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricInductance unit from an API DTO representation.
     * @param dtoElectricInductance The ElectricInductance API DTO representation
     */
    public static FromDto(dtoElectricInductance: ElectricInductanceDto): ElectricInductance {
        return new ElectricInductance(dtoElectricInductance.value, dtoElectricInductance.unit);
    }

    /**
     * Convert ElectricInductance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricInductanceUnits): number {
        switch (toUnit) {
            case ElectricInductanceUnits.Henries: return this.Henries;
            case ElectricInductanceUnits.Picohenries: return this.Picohenries;
            case ElectricInductanceUnits.Nanohenries: return this.Nanohenries;
            case ElectricInductanceUnits.Microhenries: return this.Microhenries;
            case ElectricInductanceUnits.Millihenries: return this.Millihenries;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: ElectricInductanceUnits): number {
        switch (toUnit) {
                
            case ElectricInductanceUnits.Henries:
                return this.value;
            case ElectricInductanceUnits.Picohenries:
                return (this.value) / 1e-12;
            case ElectricInductanceUnits.Nanohenries:
                return (this.value) / 1e-9;
            case ElectricInductanceUnits.Microhenries:
                return (this.value) / 0.000001;
            case ElectricInductanceUnits.Millihenries:
                return (this.value) / 0.001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricInductanceUnits): number {
        switch (fromUnit) {
                
            case ElectricInductanceUnits.Henries:
                return value;
            case ElectricInductanceUnits.Picohenries:
                return (value) * 1e-12;
            case ElectricInductanceUnits.Nanohenries:
                return (value) * 1e-9;
            case ElectricInductanceUnits.Microhenries:
                return (value) * 0.000001;
            case ElectricInductanceUnits.Millihenries:
                return (value) * 0.001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricInductance to string.
     * Note! the default format for ElectricInductance is Henries.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricInductance.
     * @returns The string format of the ElectricInductance.
     */
    public toString(unit: ElectricInductanceUnits = ElectricInductanceUnits.Henries): string {

        switch (unit) {
            
            case ElectricInductanceUnits.Henries:
                return this.Henries + ` H`;
            case ElectricInductanceUnits.Picohenries:
                return this.Picohenries + ` pH`;
            case ElectricInductanceUnits.Nanohenries:
                return this.Nanohenries + ` nH`;
            case ElectricInductanceUnits.Microhenries:
                return this.Microhenries + ` μH`;
            case ElectricInductanceUnits.Millihenries:
                return this.Millihenries + ` mH`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricInductance unit abbreviation.
     * Note! the default abbreviation for ElectricInductance is Henries.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricInductance.
     * @returns The abbreviation string of ElectricInductance.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricInductanceUnits = ElectricInductanceUnits.Henries): string {

        switch (unitAbbreviation) {
            
            case ElectricInductanceUnits.Henries:
                return `H`;
            case ElectricInductanceUnits.Picohenries:
                return `pH`;
            case ElectricInductanceUnits.Nanohenries:
                return `nH`;
            case ElectricInductanceUnits.Microhenries:
                return `μH`;
            case ElectricInductanceUnits.Millihenries:
                return `mH`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricInductance are equals to the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns True if the given ElectricInductance are equal to the current ElectricInductance.
     */
    public equals(electricInductance: ElectricInductance): boolean {
        return this.value === electricInductance.BaseValue;
    }

    /**
     * Compare the given ElectricInductance against the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns 0 if they are equal, -1 if the current ElectricInductance is less then other, 1 if the current ElectricInductance is greater then other.
     */
    public compareTo(electricInductance: ElectricInductance): number {

        if (this.value > electricInductance.BaseValue)
            return 1;
        if (this.value < electricInductance.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    public add(electricInductance: ElectricInductance): ElectricInductance {
        return new ElectricInductance(this.value + electricInductance.BaseValue)
    }

    /**
     * Subtract the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    public subtract(electricInductance: ElectricInductance): ElectricInductance {
        return new ElectricInductance(this.value - electricInductance.BaseValue)
    }

    /**
     * Multiply the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    public multiply(electricInductance: ElectricInductance): ElectricInductance {
        return new ElectricInductance(this.value * electricInductance.BaseValue)
    }

    /**
     * Divide the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    public divide(electricInductance: ElectricInductance): ElectricInductance {
        return new ElectricInductance(this.value / electricInductance.BaseValue)
    }

    /**
     * Modulo the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    public modulo(electricInductance: ElectricInductance): ElectricInductance {
        return new ElectricInductance(this.value % electricInductance.BaseValue)
    }

    /**
     * Pow the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    public pow(electricInductance: ElectricInductance): ElectricInductance {
        return new ElectricInductance(this.value ** electricInductance.BaseValue)
    }
}
