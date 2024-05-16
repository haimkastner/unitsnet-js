import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a SpecificEntropy */
export interface SpecificEntropyDto {
    /** The value of the SpecificEntropy */
    value: number;
    /**  The specific unit that the SpecificEntropy value is representing */
    unit: SpecificEntropyUnits;
}

/** SpecificEntropyUnits enumeration */
export enum SpecificEntropyUnits {
    /** */
    JoulesPerKilogramKelvin = "JoulePerKilogramKelvin",
    /** */
    JoulesPerKilogramDegreeCelsius = "JoulePerKilogramDegreeCelsius",
    /** */
    CaloriesPerGramKelvin = "CaloriePerGramKelvin",
    /** */
    BtusPerPoundFahrenheit = "BtuPerPoundFahrenheit",
    /** */
    KilojoulesPerKilogramKelvin = "KilojoulePerKilogramKelvin",
    /** */
    MegajoulesPerKilogramKelvin = "MegajoulePerKilogramKelvin",
    /** */
    KilojoulesPerKilogramDegreeCelsius = "KilojoulePerKilogramDegreeCelsius",
    /** */
    MegajoulesPerKilogramDegreeCelsius = "MegajoulePerKilogramDegreeCelsius",
    /** */
    KilocaloriesPerGramKelvin = "KilocaloriePerGramKelvin"
}

/** Specific entropy is an amount of energy required to raise temperature of a substance by 1 Kelvin per unit mass. */
export class SpecificEntropy extends BaseUnit {
    protected value: number;
    private joulesperkilogramkelvinLazy: number | null = null;
    private joulesperkilogramdegreecelsiusLazy: number | null = null;
    private caloriespergramkelvinLazy: number | null = null;
    private btusperpoundfahrenheitLazy: number | null = null;
    private kilojoulesperkilogramkelvinLazy: number | null = null;
    private megajoulesperkilogramkelvinLazy: number | null = null;
    private kilojoulesperkilogramdegreecelsiusLazy: number | null = null;
    private megajoulesperkilogramdegreecelsiusLazy: number | null = null;
    private kilocaloriespergramkelvinLazy: number | null = null;

    /**
     * Create a new SpecificEntropy.
     * @param value The value.
     * @param fromUnit The ‘SpecificEntropy’ unit to create from.
     * The default unit is JoulesPerKilogramKelvin
     */
    public constructor(value: number, fromUnit: SpecificEntropyUnits = SpecificEntropyUnits.JoulesPerKilogramKelvin) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SpecificEntropy is JoulesPerKilogramKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): SpecificEntropyUnits.JoulesPerKilogramKelvin {
        return SpecificEntropyUnits.JoulesPerKilogramKelvin
    }

    /** */
    public get JoulesPerKilogramKelvin(): number {
        if(this.joulesperkilogramkelvinLazy !== null){
            return this.joulesperkilogramkelvinLazy;
        }
        return this.joulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramKelvin);
    }

    /** */
    public get JoulesPerKilogramDegreeCelsius(): number {
        if(this.joulesperkilogramdegreecelsiusLazy !== null){
            return this.joulesperkilogramdegreecelsiusLazy;
        }
        return this.joulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius);
    }

    /** */
    public get CaloriesPerGramKelvin(): number {
        if(this.caloriespergramkelvinLazy !== null){
            return this.caloriespergramkelvinLazy;
        }
        return this.caloriespergramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.CaloriesPerGramKelvin);
    }

    /** */
    public get BtusPerPoundFahrenheit(): number {
        if(this.btusperpoundfahrenheitLazy !== null){
            return this.btusperpoundfahrenheitLazy;
        }
        return this.btusperpoundfahrenheitLazy = this.convertFromBase(SpecificEntropyUnits.BtusPerPoundFahrenheit);
    }

    /** */
    public get KilojoulesPerKilogramKelvin(): number {
        if(this.kilojoulesperkilogramkelvinLazy !== null){
            return this.kilojoulesperkilogramkelvinLazy;
        }
        return this.kilojoulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.KilojoulesPerKilogramKelvin);
    }

    /** */
    public get MegajoulesPerKilogramKelvin(): number {
        if(this.megajoulesperkilogramkelvinLazy !== null){
            return this.megajoulesperkilogramkelvinLazy;
        }
        return this.megajoulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.MegajoulesPerKilogramKelvin);
    }

    /** */
    public get KilojoulesPerKilogramDegreeCelsius(): number {
        if(this.kilojoulesperkilogramdegreecelsiusLazy !== null){
            return this.kilojoulesperkilogramdegreecelsiusLazy;
        }
        return this.kilojoulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius);
    }

    /** */
    public get MegajoulesPerKilogramDegreeCelsius(): number {
        if(this.megajoulesperkilogramdegreecelsiusLazy !== null){
            return this.megajoulesperkilogramdegreecelsiusLazy;
        }
        return this.megajoulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius);
    }

    /** */
    public get KilocaloriesPerGramKelvin(): number {
        if(this.kilocaloriespergramkelvinLazy !== null){
            return this.kilocaloriespergramkelvinLazy;
        }
        return this.kilocaloriespergramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.KilocaloriesPerGramKelvin);
    }

    /**
     * Create a new SpecificEntropy instance from a JoulesPerKilogramKelvin
     *
     * @param value The unit as JoulesPerKilogramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromJoulesPerKilogramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.JoulesPerKilogramKelvin);
    }

    /**
     * Create a new SpecificEntropy instance from a JoulesPerKilogramDegreeCelsius
     *
     * @param value The unit as JoulesPerKilogramDegreeCelsius to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromJoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius);
    }

    /**
     * Create a new SpecificEntropy instance from a CaloriesPerGramKelvin
     *
     * @param value The unit as CaloriesPerGramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromCaloriesPerGramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.CaloriesPerGramKelvin);
    }

    /**
     * Create a new SpecificEntropy instance from a BtusPerPoundFahrenheit
     *
     * @param value The unit as BtusPerPoundFahrenheit to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromBtusPerPoundFahrenheit(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.BtusPerPoundFahrenheit);
    }

    /**
     * Create a new SpecificEntropy instance from a KilojoulesPerKilogramKelvin
     *
     * @param value The unit as KilojoulesPerKilogramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromKilojoulesPerKilogramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilojoulesPerKilogramKelvin);
    }

    /**
     * Create a new SpecificEntropy instance from a MegajoulesPerKilogramKelvin
     *
     * @param value The unit as MegajoulesPerKilogramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromMegajoulesPerKilogramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.MegajoulesPerKilogramKelvin);
    }

    /**
     * Create a new SpecificEntropy instance from a KilojoulesPerKilogramDegreeCelsius
     *
     * @param value The unit as KilojoulesPerKilogramDegreeCelsius to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromKilojoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius);
    }

    /**
     * Create a new SpecificEntropy instance from a MegajoulesPerKilogramDegreeCelsius
     *
     * @param value The unit as MegajoulesPerKilogramDegreeCelsius to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromMegajoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius);
    }

    /**
     * Create a new SpecificEntropy instance from a KilocaloriesPerGramKelvin
     *
     * @param value The unit as KilocaloriesPerGramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    public static FromKilocaloriesPerGramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilocaloriesPerGramKelvin);
    }

    /**
     * Gets the base unit enumeration associated with SpecificEntropy
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof SpecificEntropyUnits {
        return SpecificEntropyUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): SpecificEntropyUnits.JoulesPerKilogramKelvin {
        return SpecificEntropyUnits.JoulesPerKilogramKelvin;
    }

    /**
     * Create API DTO represent a SpecificEntropy unit.
     * @param holdInUnit The specific SpecificEntropy unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: SpecificEntropyUnits = SpecificEntropyUnits.JoulesPerKilogramKelvin): SpecificEntropyDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a SpecificEntropy unit from an API DTO representation.
     * @param dtoSpecificEntropy The SpecificEntropy API DTO representation
     */
    public static FromDto(dtoSpecificEntropy: SpecificEntropyDto): SpecificEntropy {
        return new SpecificEntropy(dtoSpecificEntropy.value, dtoSpecificEntropy.unit);
    }

    /**
     * Convert SpecificEntropy to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: SpecificEntropyUnits): number {
        switch (toUnit) {
            case SpecificEntropyUnits.JoulesPerKilogramKelvin: return this.JoulesPerKilogramKelvin;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius: return this.JoulesPerKilogramDegreeCelsius;
            case SpecificEntropyUnits.CaloriesPerGramKelvin: return this.CaloriesPerGramKelvin;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit: return this.BtusPerPoundFahrenheit;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin: return this.KilojoulesPerKilogramKelvin;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin: return this.MegajoulesPerKilogramKelvin;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius: return this.KilojoulesPerKilogramDegreeCelsius;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius: return this.MegajoulesPerKilogramDegreeCelsius;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin: return this.KilocaloriesPerGramKelvin;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: SpecificEntropyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case SpecificEntropyUnits.JoulesPerKilogramKelvin: return this.value;
                case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius: return this.value;
                case SpecificEntropyUnits.CaloriesPerGramKelvin: return super.internalDivide(this.value, 4.184e3);
                case SpecificEntropyUnits.BtusPerPoundFahrenheit: return super.internalDivide(this.value, 4.1868e3);
                case SpecificEntropyUnits.KilojoulesPerKilogramKelvin: return super.internalDivide(this.value, 1000);
                case SpecificEntropyUnits.MegajoulesPerKilogramKelvin: return super.internalDivide(this.value, 1000000);
                case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius: return super.internalDivide(this.value, 1000);
                case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius: return super.internalDivide(this.value, 1000000);
                case SpecificEntropyUnits.KilocaloriesPerGramKelvin: {
                    const v3 = super.internalDivide(this.value, 4.184e3);
                    return super.internalDivide(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case SpecificEntropyUnits.JoulesPerKilogramKelvin: return this.value;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius: return this.value;
            case SpecificEntropyUnits.CaloriesPerGramKelvin: return this.value / 4.184e3;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit: return this.value / 4.1868e3;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin: return (this.value) / 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin: return (this.value) / 1000000;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius: return (this.value) / 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius: return (this.value) / 1000000;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin: return (this.value / 4.184e3) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: SpecificEntropyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case SpecificEntropyUnits.JoulesPerKilogramKelvin: return value;
                case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius: return value;
                case SpecificEntropyUnits.CaloriesPerGramKelvin: return super.internalMultiply(value, 4.184e3);
                case SpecificEntropyUnits.BtusPerPoundFahrenheit: return super.internalMultiply(value, 4.1868e3);
                case SpecificEntropyUnits.KilojoulesPerKilogramKelvin: return super.internalMultiply(value, 1000);
                case SpecificEntropyUnits.MegajoulesPerKilogramKelvin: return super.internalMultiply(value, 1000000);
                case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius: return super.internalMultiply(value, 1000);
                case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius: return super.internalMultiply(value, 1000000);
                case SpecificEntropyUnits.KilocaloriesPerGramKelvin: {
                    const v3 = super.internalMultiply(value, 4.184e3);
                    return super.internalMultiply(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case SpecificEntropyUnits.JoulesPerKilogramKelvin: return value;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius: return value;
            case SpecificEntropyUnits.CaloriesPerGramKelvin: return value * 4.184e3;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit: return value * 4.1868e3;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin: return (value) * 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin: return (value) * 1000000;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius: return (value) * 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius: return (value) * 1000000;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin: return (value * 4.184e3) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the SpecificEntropy to string.
     * Note! the default format for SpecificEntropy is JoulesPerKilogramKelvin.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the SpecificEntropy.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the SpecificEntropy.
     */
    public toString(unit: SpecificEntropyUnits = SpecificEntropyUnits.JoulesPerKilogramKelvin, fractionalDigits?: number): string {

        switch (unit) {
            
            case SpecificEntropyUnits.JoulesPerKilogramKelvin:
                return super.truncateFractionDigits(this.JoulesPerKilogramKelvin, fractionalDigits) + ` J/kg.K`;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:
                return super.truncateFractionDigits(this.JoulesPerKilogramDegreeCelsius, fractionalDigits) + ` J/kg.C`;
            case SpecificEntropyUnits.CaloriesPerGramKelvin:
                return super.truncateFractionDigits(this.CaloriesPerGramKelvin, fractionalDigits) + ` cal/g.K`;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit:
                return super.truncateFractionDigits(this.BtusPerPoundFahrenheit, fractionalDigits) + ` BTU/lb·°F`;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:
                return super.truncateFractionDigits(this.KilojoulesPerKilogramKelvin, fractionalDigits) + ` kJ/kg.K`;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:
                return super.truncateFractionDigits(this.MegajoulesPerKilogramKelvin, fractionalDigits) + ` MJ/kg.K`;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:
                return super.truncateFractionDigits(this.KilojoulesPerKilogramDegreeCelsius, fractionalDigits) + ` kJ/kg.C`;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:
                return super.truncateFractionDigits(this.MegajoulesPerKilogramDegreeCelsius, fractionalDigits) + ` MJ/kg.C`;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:
                return super.truncateFractionDigits(this.KilocaloriesPerGramKelvin, fractionalDigits) + ` kcal/g.K`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get SpecificEntropy unit abbreviation.
     * Note! the default abbreviation for SpecificEntropy is JoulesPerKilogramKelvin.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the SpecificEntropy.
     * @returns The abbreviation string of SpecificEntropy.
     */
    public getUnitAbbreviation(unitAbbreviation: SpecificEntropyUnits = SpecificEntropyUnits.JoulesPerKilogramKelvin): string {

        switch (unitAbbreviation) {
            
            case SpecificEntropyUnits.JoulesPerKilogramKelvin:
                return `J/kg.K`;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:
                return `J/kg.C`;
            case SpecificEntropyUnits.CaloriesPerGramKelvin:
                return `cal/g.K`;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit:
                return `BTU/lb·°F`;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:
                return `kJ/kg.K`;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:
                return `MJ/kg.K`;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:
                return `kJ/kg.C`;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:
                return `MJ/kg.C`;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:
                return `kcal/g.K`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given SpecificEntropy are equals to the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns True if the given SpecificEntropy are equal to the current SpecificEntropy.
     */
    public equals(specificEntropy: SpecificEntropy): boolean {
        return super.internalEquals(this.value, specificEntropy.BaseValue);
    }

    /**
     * Compare the given SpecificEntropy against the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns 0 if they are equal, -1 if the current SpecificEntropy is less then other, 1 if the current SpecificEntropy is greater then other.
     */
    public compareTo(specificEntropy: SpecificEntropy): number {
        return super.internalCompareTo(this.value, specificEntropy.BaseValue);
    }

    /**
     * Add the given SpecificEntropy with the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns A new SpecificEntropy instance with the results.
     */
    public add(specificEntropy: SpecificEntropy): SpecificEntropy {
        return new SpecificEntropy(super.internalAdd(this.value, specificEntropy.BaseValue))
    }

    /**
     * Subtract the given SpecificEntropy with the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns A new SpecificEntropy instance with the results.
     */
    public subtract(specificEntropy: SpecificEntropy): SpecificEntropy {
        return new SpecificEntropy(super.internalSubtract(this.value, specificEntropy.BaseValue))
    }

    /**
     * Multiply the given SpecificEntropy with the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns A new SpecificEntropy instance with the results.
     */
    public multiply(specificEntropy: SpecificEntropy): SpecificEntropy {
        return new SpecificEntropy(super.internalMultiply(this.value, specificEntropy.BaseValue))
    }

    /**
     * Divide the given SpecificEntropy with the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns A new SpecificEntropy instance with the results.
     */
    public divide(specificEntropy: SpecificEntropy): SpecificEntropy {
        return new SpecificEntropy(super.internalDivide(this.value, specificEntropy.BaseValue))
    }

    /**
     * Modulo the given SpecificEntropy with the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns A new SpecificEntropy instance with the results.
     */
    public modulo(specificEntropy: SpecificEntropy): SpecificEntropy {
        return new SpecificEntropy(super.internalModulo(this.value, specificEntropy.BaseValue))
    }

    /**
     * Pow the given SpecificEntropy with the current SpecificEntropy.
     * @param specificEntropy The other SpecificEntropy.
     * @returns A new SpecificEntropy instance with the results.
     */
    public pow(specificEntropy: SpecificEntropy): SpecificEntropy {
        return new SpecificEntropy(super.internalPow(this.value, specificEntropy.BaseValue))
    }
}
