/** API DTO represents a Luminosity */
export interface LuminosityDto {
    /** The value of the Luminosity */
    value: number;
    /**  The specific unit that the Luminosity value is representing */
    unit: LuminosityUnits;
}

/** LuminosityUnits enumeration */
export enum LuminosityUnits {
    /** */
    Watts = "Watt",
    /** */
    SolarLuminosities = "SolarLuminosity",
    /** */
    Femtowatts = "Femtowatt",
    /** */
    Picowatts = "Picowatt",
    /** */
    Nanowatts = "Nanowatt",
    /** */
    Microwatts = "Microwatt",
    /** */
    Milliwatts = "Milliwatt",
    /** */
    Deciwatts = "Deciwatt",
    /** */
    Decawatts = "Decawatt",
    /** */
    Kilowatts = "Kilowatt",
    /** */
    Megawatts = "Megawatt",
    /** */
    Gigawatts = "Gigawatt",
    /** */
    Terawatts = "Terawatt",
    /** */
    Petawatts = "Petawatt"
}

/** Luminosity is an absolute measure of radiated electromagnetic power (light), the radiant power emitted by a light-emitting object. */
export class Luminosity extends BaseUnit {
    private value: number;
    private wattsLazy: number | null = null;
    private solarluminositiesLazy: number | null = null;
    private femtowattsLazy: number | null = null;
    private picowattsLazy: number | null = null;
    private nanowattsLazy: number | null = null;
    private microwattsLazy: number | null = null;
    private milliwattsLazy: number | null = null;
    private deciwattsLazy: number | null = null;
    private decawattsLazy: number | null = null;
    private kilowattsLazy: number | null = null;
    private megawattsLazy: number | null = null;
    private gigawattsLazy: number | null = null;
    private terawattsLazy: number | null = null;
    private petawattsLazy: number | null = null;

    /**
     * Create a new Luminosity.
     * @param value The value.
     * @param fromUnit The ‘Luminosity’ unit to create from.
     * The default unit is Watts
     */
    public constructor(value: number, fromUnit: LuminosityUnits = LuminosityUnits.Watts) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Luminosity is Watts.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Watts(): number {
        if(this.wattsLazy !== null){
            return this.wattsLazy;
        }
        return this.wattsLazy = this.convertFromBase(LuminosityUnits.Watts);
    }

    /** */
    public get SolarLuminosities(): number {
        if(this.solarluminositiesLazy !== null){
            return this.solarluminositiesLazy;
        }
        return this.solarluminositiesLazy = this.convertFromBase(LuminosityUnits.SolarLuminosities);
    }

    /** */
    public get Femtowatts(): number {
        if(this.femtowattsLazy !== null){
            return this.femtowattsLazy;
        }
        return this.femtowattsLazy = this.convertFromBase(LuminosityUnits.Femtowatts);
    }

    /** */
    public get Picowatts(): number {
        if(this.picowattsLazy !== null){
            return this.picowattsLazy;
        }
        return this.picowattsLazy = this.convertFromBase(LuminosityUnits.Picowatts);
    }

    /** */
    public get Nanowatts(): number {
        if(this.nanowattsLazy !== null){
            return this.nanowattsLazy;
        }
        return this.nanowattsLazy = this.convertFromBase(LuminosityUnits.Nanowatts);
    }

    /** */
    public get Microwatts(): number {
        if(this.microwattsLazy !== null){
            return this.microwattsLazy;
        }
        return this.microwattsLazy = this.convertFromBase(LuminosityUnits.Microwatts);
    }

    /** */
    public get Milliwatts(): number {
        if(this.milliwattsLazy !== null){
            return this.milliwattsLazy;
        }
        return this.milliwattsLazy = this.convertFromBase(LuminosityUnits.Milliwatts);
    }

    /** */
    public get Deciwatts(): number {
        if(this.deciwattsLazy !== null){
            return this.deciwattsLazy;
        }
        return this.deciwattsLazy = this.convertFromBase(LuminosityUnits.Deciwatts);
    }

    /** */
    public get Decawatts(): number {
        if(this.decawattsLazy !== null){
            return this.decawattsLazy;
        }
        return this.decawattsLazy = this.convertFromBase(LuminosityUnits.Decawatts);
    }

    /** */
    public get Kilowatts(): number {
        if(this.kilowattsLazy !== null){
            return this.kilowattsLazy;
        }
        return this.kilowattsLazy = this.convertFromBase(LuminosityUnits.Kilowatts);
    }

    /** */
    public get Megawatts(): number {
        if(this.megawattsLazy !== null){
            return this.megawattsLazy;
        }
        return this.megawattsLazy = this.convertFromBase(LuminosityUnits.Megawatts);
    }

    /** */
    public get Gigawatts(): number {
        if(this.gigawattsLazy !== null){
            return this.gigawattsLazy;
        }
        return this.gigawattsLazy = this.convertFromBase(LuminosityUnits.Gigawatts);
    }

    /** */
    public get Terawatts(): number {
        if(this.terawattsLazy !== null){
            return this.terawattsLazy;
        }
        return this.terawattsLazy = this.convertFromBase(LuminosityUnits.Terawatts);
    }

    /** */
    public get Petawatts(): number {
        if(this.petawattsLazy !== null){
            return this.petawattsLazy;
        }
        return this.petawattsLazy = this.convertFromBase(LuminosityUnits.Petawatts);
    }

    /**
     * Create a new Luminosity instance from a Watts
     *
     * @param value The unit as Watts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromWatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Watts);
    }

    /**
     * Create a new Luminosity instance from a SolarLuminosities
     *
     * @param value The unit as SolarLuminosities to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromSolarLuminosities(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.SolarLuminosities);
    }

    /**
     * Create a new Luminosity instance from a Femtowatts
     *
     * @param value The unit as Femtowatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromFemtowatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Femtowatts);
    }

    /**
     * Create a new Luminosity instance from a Picowatts
     *
     * @param value The unit as Picowatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromPicowatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Picowatts);
    }

    /**
     * Create a new Luminosity instance from a Nanowatts
     *
     * @param value The unit as Nanowatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromNanowatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Nanowatts);
    }

    /**
     * Create a new Luminosity instance from a Microwatts
     *
     * @param value The unit as Microwatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromMicrowatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Microwatts);
    }

    /**
     * Create a new Luminosity instance from a Milliwatts
     *
     * @param value The unit as Milliwatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromMilliwatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Milliwatts);
    }

    /**
     * Create a new Luminosity instance from a Deciwatts
     *
     * @param value The unit as Deciwatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromDeciwatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Deciwatts);
    }

    /**
     * Create a new Luminosity instance from a Decawatts
     *
     * @param value The unit as Decawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromDecawatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Decawatts);
    }

    /**
     * Create a new Luminosity instance from a Kilowatts
     *
     * @param value The unit as Kilowatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromKilowatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Kilowatts);
    }

    /**
     * Create a new Luminosity instance from a Megawatts
     *
     * @param value The unit as Megawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromMegawatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Megawatts);
    }

    /**
     * Create a new Luminosity instance from a Gigawatts
     *
     * @param value The unit as Gigawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromGigawatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Gigawatts);
    }

    /**
     * Create a new Luminosity instance from a Terawatts
     *
     * @param value The unit as Terawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromTerawatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Terawatts);
    }

    /**
     * Create a new Luminosity instance from a Petawatts
     *
     * @param value The unit as Petawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    public static FromPetawatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Petawatts);
    }

    /**
     * Create API DTO represent a Luminosity unit.
     * @param holdInUnit The specific Luminosity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: LuminosityUnits = LuminosityUnits.Watts): LuminosityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Luminosity unit from an API DTO representation.
     * @param dtoLuminosity The Luminosity API DTO representation
     */
    public static FromDto(dtoLuminosity: LuminosityDto): Luminosity {
        return new Luminosity(dtoLuminosity.value, dtoLuminosity.unit);
    }

    /**
     * Convert Luminosity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: LuminosityUnits): number {
        switch (toUnit) {
            case LuminosityUnits.Watts: return this.Watts;
            case LuminosityUnits.SolarLuminosities: return this.SolarLuminosities;
            case LuminosityUnits.Femtowatts: return this.Femtowatts;
            case LuminosityUnits.Picowatts: return this.Picowatts;
            case LuminosityUnits.Nanowatts: return this.Nanowatts;
            case LuminosityUnits.Microwatts: return this.Microwatts;
            case LuminosityUnits.Milliwatts: return this.Milliwatts;
            case LuminosityUnits.Deciwatts: return this.Deciwatts;
            case LuminosityUnits.Decawatts: return this.Decawatts;
            case LuminosityUnits.Kilowatts: return this.Kilowatts;
            case LuminosityUnits.Megawatts: return this.Megawatts;
            case LuminosityUnits.Gigawatts: return this.Gigawatts;
            case LuminosityUnits.Terawatts: return this.Terawatts;
            case LuminosityUnits.Petawatts: return this.Petawatts;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: LuminosityUnits): number {
        switch (toUnit) {
                
            case LuminosityUnits.Watts:
                return this.value;
            case LuminosityUnits.SolarLuminosities:
                return this.value / 3.846e26;
            case LuminosityUnits.Femtowatts:
                return (this.value) / 1e-15;
            case LuminosityUnits.Picowatts:
                return (this.value) / 1e-12;
            case LuminosityUnits.Nanowatts:
                return (this.value) / 1e-9;
            case LuminosityUnits.Microwatts:
                return (this.value) / 0.000001;
            case LuminosityUnits.Milliwatts:
                return (this.value) / 0.001;
            case LuminosityUnits.Deciwatts:
                return (this.value) / 0.1;
            case LuminosityUnits.Decawatts:
                return (this.value) / 10;
            case LuminosityUnits.Kilowatts:
                return (this.value) / 1000;
            case LuminosityUnits.Megawatts:
                return (this.value) / 1000000;
            case LuminosityUnits.Gigawatts:
                return (this.value) / 1000000000;
            case LuminosityUnits.Terawatts:
                return (this.value) / 1000000000000;
            case LuminosityUnits.Petawatts:
                return (this.value) / 1000000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LuminosityUnits): number {
        switch (fromUnit) {
                
            case LuminosityUnits.Watts:
                return value;
            case LuminosityUnits.SolarLuminosities:
                return value * 3.846e26;
            case LuminosityUnits.Femtowatts:
                return (value) * 1e-15;
            case LuminosityUnits.Picowatts:
                return (value) * 1e-12;
            case LuminosityUnits.Nanowatts:
                return (value) * 1e-9;
            case LuminosityUnits.Microwatts:
                return (value) * 0.000001;
            case LuminosityUnits.Milliwatts:
                return (value) * 0.001;
            case LuminosityUnits.Deciwatts:
                return (value) * 0.1;
            case LuminosityUnits.Decawatts:
                return (value) * 10;
            case LuminosityUnits.Kilowatts:
                return (value) * 1000;
            case LuminosityUnits.Megawatts:
                return (value) * 1000000;
            case LuminosityUnits.Gigawatts:
                return (value) * 1000000000;
            case LuminosityUnits.Terawatts:
                return (value) * 1000000000000;
            case LuminosityUnits.Petawatts:
                return (value) * 1000000000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Luminosity to string.
     * Note! the default format for Luminosity is Watts.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Luminosity.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Luminosity.
     */
    public toString(unit: LuminosityUnits = LuminosityUnits.Watts, fractionalDigits?: number): string {

        switch (unit) {
            
            case LuminosityUnits.Watts:
                return super.truncateFractionDigits(this.Watts, fractionalDigits) + ` W`;
            case LuminosityUnits.SolarLuminosities:
                return super.truncateFractionDigits(this.SolarLuminosities, fractionalDigits) + ` L⊙`;
            case LuminosityUnits.Femtowatts:
                return super.truncateFractionDigits(this.Femtowatts, fractionalDigits) + ` fW`;
            case LuminosityUnits.Picowatts:
                return super.truncateFractionDigits(this.Picowatts, fractionalDigits) + ` pW`;
            case LuminosityUnits.Nanowatts:
                return super.truncateFractionDigits(this.Nanowatts, fractionalDigits) + ` nW`;
            case LuminosityUnits.Microwatts:
                return super.truncateFractionDigits(this.Microwatts, fractionalDigits) + ` μW`;
            case LuminosityUnits.Milliwatts:
                return super.truncateFractionDigits(this.Milliwatts, fractionalDigits) + ` mW`;
            case LuminosityUnits.Deciwatts:
                return super.truncateFractionDigits(this.Deciwatts, fractionalDigits) + ` dW`;
            case LuminosityUnits.Decawatts:
                return super.truncateFractionDigits(this.Decawatts, fractionalDigits) + ` daW`;
            case LuminosityUnits.Kilowatts:
                return super.truncateFractionDigits(this.Kilowatts, fractionalDigits) + ` kW`;
            case LuminosityUnits.Megawatts:
                return super.truncateFractionDigits(this.Megawatts, fractionalDigits) + ` MW`;
            case LuminosityUnits.Gigawatts:
                return super.truncateFractionDigits(this.Gigawatts, fractionalDigits) + ` GW`;
            case LuminosityUnits.Terawatts:
                return super.truncateFractionDigits(this.Terawatts, fractionalDigits) + ` TW`;
            case LuminosityUnits.Petawatts:
                return super.truncateFractionDigits(this.Petawatts, fractionalDigits) + ` PW`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Luminosity unit abbreviation.
     * Note! the default abbreviation for Luminosity is Watts.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Luminosity.
     * @returns The abbreviation string of Luminosity.
     */
    public getUnitAbbreviation(unitAbbreviation: LuminosityUnits = LuminosityUnits.Watts): string {

        switch (unitAbbreviation) {
            
            case LuminosityUnits.Watts:
                return `W`;
            case LuminosityUnits.SolarLuminosities:
                return `L⊙`;
            case LuminosityUnits.Femtowatts:
                return `fW`;
            case LuminosityUnits.Picowatts:
                return `pW`;
            case LuminosityUnits.Nanowatts:
                return `nW`;
            case LuminosityUnits.Microwatts:
                return `μW`;
            case LuminosityUnits.Milliwatts:
                return `mW`;
            case LuminosityUnits.Deciwatts:
                return `dW`;
            case LuminosityUnits.Decawatts:
                return `daW`;
            case LuminosityUnits.Kilowatts:
                return `kW`;
            case LuminosityUnits.Megawatts:
                return `MW`;
            case LuminosityUnits.Gigawatts:
                return `GW`;
            case LuminosityUnits.Terawatts:
                return `TW`;
            case LuminosityUnits.Petawatts:
                return `PW`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Luminosity are equals to the current Luminosity.
     * @param luminosity The other Luminosity.
     * @returns True if the given Luminosity are equal to the current Luminosity.
     */
    public equals(luminosity: Luminosity): boolean {
        return super.internalEquals(this.value, luminosity.BaseValue);
    }

    /**
     * Compare the given Luminosity against the current Luminosity.
     * @param luminosity The other Luminosity.
     * @returns 0 if they are equal, -1 if the current Luminosity is less then other, 1 if the current Luminosity is greater then other.
     */
    public compareTo(luminosity: Luminosity): number {
        return super.internalCompareTo(this.value, luminosity.BaseValue);
    }

    /**
     * Add the given Luminosity with the current Luminosity.
     * @param luminosity The other Luminosity.
     * @returns A new Luminosity instance with the results.
     */
    public add(luminosity: Luminosity): Luminosity {
        return new Luminosity(super.internalAdd(this.value, luminosity.BaseValue))
    }

    /**
     * Subtract the given Luminosity with the current Luminosity.
     * @param luminosity The other Luminosity.
     * @returns A new Luminosity instance with the results.
     */
    public subtract(luminosity: Luminosity): Luminosity {
        return new Luminosity(super.internalSubtract(this.value, luminosity.BaseValue))
    }

    /**
     * Multiply the given Luminosity with the current Luminosity.
     * @param luminosity The other Luminosity.
     * @returns A new Luminosity instance with the results.
     */
    public multiply(luminosity: Luminosity): Luminosity {
        return new Luminosity(super.internalMultiply(this.value, luminosity.BaseValue))
    }

    /**
     * Divide the given Luminosity with the current Luminosity.
     * @param luminosity The other Luminosity.
     * @returns A new Luminosity instance with the results.
     */
    public divide(luminosity: Luminosity): Luminosity {
        return new Luminosity(super.internalDivide(this.value, luminosity.BaseValue))
    }

    /**
     * Modulo the given Luminosity with the current Luminosity.
     * @param luminosity The other Luminosity.
     * @returns A new Luminosity instance with the results.
     */
    public modulo(luminosity: Luminosity): Luminosity {
        return new Luminosity(super.internalModulo(this.value, luminosity.BaseValue))
    }

    /**
     * Pow the given Luminosity with the current Luminosity.
     * @param luminosity The other Luminosity.
     * @returns A new Luminosity instance with the results.
     */
    public pow(luminosity: Luminosity): Luminosity {
        return new Luminosity(super.internalPow(this.value, luminosity.BaseValue))
    }
}
