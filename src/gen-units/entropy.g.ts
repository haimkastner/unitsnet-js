import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Entropy */
export interface EntropyDto {
    /** The value of the Entropy */
    value: number;
    /**  The specific unit that the Entropy value is representing */
    unit: EntropyUnits;
}

/** EntropyUnits enumeration */
export enum EntropyUnits {
    /** */
    JoulesPerKelvin = "JoulePerKelvin",
    /** */
    CaloriesPerKelvin = "CaloriePerKelvin",
    /** */
    JoulesPerDegreeCelsius = "JoulePerDegreeCelsius",
    /** */
    KilojoulesPerKelvin = "KilojoulePerKelvin",
    /** */
    MegajoulesPerKelvin = "MegajoulePerKelvin",
    /** */
    KilocaloriesPerKelvin = "KilocaloriePerKelvin",
    /** */
    KilojoulesPerDegreeCelsius = "KilojoulePerDegreeCelsius"
}

/** Entropy is an important concept in the branch of science known as thermodynamics. The idea of "irreversibility" is central to the understanding of entropy.  It is often said that entropy is an expression of the disorder, or randomness of a system, or of our lack of information about it. Entropy is an extensive property. It has the dimension of energy divided by temperature, which has a unit of joules per kelvin (J/K) in the International System of Units */
export class Entropy extends BaseUnit {
    private value: number;
    private joulesperkelvinLazy: number | null = null;
    private caloriesperkelvinLazy: number | null = null;
    private joulesperdegreecelsiusLazy: number | null = null;
    private kilojoulesperkelvinLazy: number | null = null;
    private megajoulesperkelvinLazy: number | null = null;
    private kilocaloriesperkelvinLazy: number | null = null;
    private kilojoulesperdegreecelsiusLazy: number | null = null;

    /**
     * Create a new Entropy.
     * @param value The value.
     * @param fromUnit The ‘Entropy’ unit to create from.
     * The default unit is JoulesPerKelvin
     */
    public constructor(value: number, fromUnit: EntropyUnits = EntropyUnits.JoulesPerKelvin) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Entropy is JoulesPerKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get JoulesPerKelvin(): number {
        if(this.joulesperkelvinLazy !== null){
            return this.joulesperkelvinLazy;
        }
        return this.joulesperkelvinLazy = this.convertFromBase(EntropyUnits.JoulesPerKelvin);
    }

    /** */
    public get CaloriesPerKelvin(): number {
        if(this.caloriesperkelvinLazy !== null){
            return this.caloriesperkelvinLazy;
        }
        return this.caloriesperkelvinLazy = this.convertFromBase(EntropyUnits.CaloriesPerKelvin);
    }

    /** */
    public get JoulesPerDegreeCelsius(): number {
        if(this.joulesperdegreecelsiusLazy !== null){
            return this.joulesperdegreecelsiusLazy;
        }
        return this.joulesperdegreecelsiusLazy = this.convertFromBase(EntropyUnits.JoulesPerDegreeCelsius);
    }

    /** */
    public get KilojoulesPerKelvin(): number {
        if(this.kilojoulesperkelvinLazy !== null){
            return this.kilojoulesperkelvinLazy;
        }
        return this.kilojoulesperkelvinLazy = this.convertFromBase(EntropyUnits.KilojoulesPerKelvin);
    }

    /** */
    public get MegajoulesPerKelvin(): number {
        if(this.megajoulesperkelvinLazy !== null){
            return this.megajoulesperkelvinLazy;
        }
        return this.megajoulesperkelvinLazy = this.convertFromBase(EntropyUnits.MegajoulesPerKelvin);
    }

    /** */
    public get KilocaloriesPerKelvin(): number {
        if(this.kilocaloriesperkelvinLazy !== null){
            return this.kilocaloriesperkelvinLazy;
        }
        return this.kilocaloriesperkelvinLazy = this.convertFromBase(EntropyUnits.KilocaloriesPerKelvin);
    }

    /** */
    public get KilojoulesPerDegreeCelsius(): number {
        if(this.kilojoulesperdegreecelsiusLazy !== null){
            return this.kilojoulesperdegreecelsiusLazy;
        }
        return this.kilojoulesperdegreecelsiusLazy = this.convertFromBase(EntropyUnits.KilojoulesPerDegreeCelsius);
    }

    /**
     * Create a new Entropy instance from a JoulesPerKelvin
     *
     * @param value The unit as JoulesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    public static FromJoulesPerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.JoulesPerKelvin);
    }

    /**
     * Create a new Entropy instance from a CaloriesPerKelvin
     *
     * @param value The unit as CaloriesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    public static FromCaloriesPerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.CaloriesPerKelvin);
    }

    /**
     * Create a new Entropy instance from a JoulesPerDegreeCelsius
     *
     * @param value The unit as JoulesPerDegreeCelsius to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    public static FromJoulesPerDegreeCelsius(value: number): Entropy {
        return new Entropy(value, EntropyUnits.JoulesPerDegreeCelsius);
    }

    /**
     * Create a new Entropy instance from a KilojoulesPerKelvin
     *
     * @param value The unit as KilojoulesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    public static FromKilojoulesPerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.KilojoulesPerKelvin);
    }

    /**
     * Create a new Entropy instance from a MegajoulesPerKelvin
     *
     * @param value The unit as MegajoulesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    public static FromMegajoulesPerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.MegajoulesPerKelvin);
    }

    /**
     * Create a new Entropy instance from a KilocaloriesPerKelvin
     *
     * @param value The unit as KilocaloriesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    public static FromKilocaloriesPerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.KilocaloriesPerKelvin);
    }

    /**
     * Create a new Entropy instance from a KilojoulesPerDegreeCelsius
     *
     * @param value The unit as KilojoulesPerDegreeCelsius to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    public static FromKilojoulesPerDegreeCelsius(value: number): Entropy {
        return new Entropy(value, EntropyUnits.KilojoulesPerDegreeCelsius);
    }

    /**
     * Create API DTO represent a Entropy unit.
     * @param holdInUnit The specific Entropy unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: EntropyUnits = EntropyUnits.JoulesPerKelvin): EntropyDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Entropy unit from an API DTO representation.
     * @param dtoEntropy The Entropy API DTO representation
     */
    public static FromDto(dtoEntropy: EntropyDto): Entropy {
        return new Entropy(dtoEntropy.value, dtoEntropy.unit);
    }

    /**
     * Convert Entropy to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: EntropyUnits): number {
        switch (toUnit) {
            case EntropyUnits.JoulesPerKelvin: return this.JoulesPerKelvin;
            case EntropyUnits.CaloriesPerKelvin: return this.CaloriesPerKelvin;
            case EntropyUnits.JoulesPerDegreeCelsius: return this.JoulesPerDegreeCelsius;
            case EntropyUnits.KilojoulesPerKelvin: return this.KilojoulesPerKelvin;
            case EntropyUnits.MegajoulesPerKelvin: return this.MegajoulesPerKelvin;
            case EntropyUnits.KilocaloriesPerKelvin: return this.KilocaloriesPerKelvin;
            case EntropyUnits.KilojoulesPerDegreeCelsius: return this.KilojoulesPerDegreeCelsius;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: EntropyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case EntropyUnits.JoulesPerKelvin: return this.value;
                case EntropyUnits.CaloriesPerKelvin: return super.internalDivide(this.value, 4.184);
                case EntropyUnits.JoulesPerDegreeCelsius: return this.value;
                case EntropyUnits.KilojoulesPerKelvin: return super.internalDivide(this.value, 1000);
                case EntropyUnits.MegajoulesPerKelvin: return super.internalDivide(this.value, 1000000);
                case EntropyUnits.KilocaloriesPerKelvin: {
                    const value3 = super.internalDivide(this.value, 4.184);
                    return super.internalDivide(value3, 1000);
                }
                case EntropyUnits.KilojoulesPerDegreeCelsius: return super.internalDivide(this.value, 1000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case EntropyUnits.JoulesPerKelvin: return this.value;
            case EntropyUnits.CaloriesPerKelvin: return this.value / 4.184;
            case EntropyUnits.JoulesPerDegreeCelsius: return this.value;
            case EntropyUnits.KilojoulesPerKelvin: return (this.value) / 1000;
            case EntropyUnits.MegajoulesPerKelvin: return (this.value) / 1000000;
            case EntropyUnits.KilocaloriesPerKelvin: return (this.value / 4.184) / 1000;
            case EntropyUnits.KilojoulesPerDegreeCelsius: return (this.value) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: EntropyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case EntropyUnits.JoulesPerKelvin: return value;
                case EntropyUnits.CaloriesPerKelvin: return super.internalMultiply(value, 4.184);
                case EntropyUnits.JoulesPerDegreeCelsius: return value;
                case EntropyUnits.KilojoulesPerKelvin: return super.internalMultiply(value, 1000);
                case EntropyUnits.MegajoulesPerKelvin: return super.internalMultiply(value, 1000000);
                case EntropyUnits.KilocaloriesPerKelvin: {
                    const value3 = super.internalMultiply(value, 4.184);
                    return super.internalMultiply(value3, 1000);
                }
                case EntropyUnits.KilojoulesPerDegreeCelsius: return super.internalMultiply(value, 1000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case EntropyUnits.JoulesPerKelvin: return value;
            case EntropyUnits.CaloriesPerKelvin: return value * 4.184;
            case EntropyUnits.JoulesPerDegreeCelsius: return value;
            case EntropyUnits.KilojoulesPerKelvin: return (value) * 1000;
            case EntropyUnits.MegajoulesPerKelvin: return (value) * 1000000;
            case EntropyUnits.KilocaloriesPerKelvin: return (value * 4.184) * 1000;
            case EntropyUnits.KilojoulesPerDegreeCelsius: return (value) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Entropy to string.
     * Note! the default format for Entropy is JoulesPerKelvin.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Entropy.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Entropy.
     */
    public toString(unit: EntropyUnits = EntropyUnits.JoulesPerKelvin, fractionalDigits?: number): string {

        switch (unit) {
            
            case EntropyUnits.JoulesPerKelvin:
                return super.truncateFractionDigits(this.JoulesPerKelvin, fractionalDigits) + ` J/K`;
            case EntropyUnits.CaloriesPerKelvin:
                return super.truncateFractionDigits(this.CaloriesPerKelvin, fractionalDigits) + ` cal/K`;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return super.truncateFractionDigits(this.JoulesPerDegreeCelsius, fractionalDigits) + ` J/C`;
            case EntropyUnits.KilojoulesPerKelvin:
                return super.truncateFractionDigits(this.KilojoulesPerKelvin, fractionalDigits) + ` kJ/K`;
            case EntropyUnits.MegajoulesPerKelvin:
                return super.truncateFractionDigits(this.MegajoulesPerKelvin, fractionalDigits) + ` MJ/K`;
            case EntropyUnits.KilocaloriesPerKelvin:
                return super.truncateFractionDigits(this.KilocaloriesPerKelvin, fractionalDigits) + ` kcal/K`;
            case EntropyUnits.KilojoulesPerDegreeCelsius:
                return super.truncateFractionDigits(this.KilojoulesPerDegreeCelsius, fractionalDigits) + ` kJ/C`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Entropy unit abbreviation.
     * Note! the default abbreviation for Entropy is JoulesPerKelvin.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Entropy.
     * @returns The abbreviation string of Entropy.
     */
    public getUnitAbbreviation(unitAbbreviation: EntropyUnits = EntropyUnits.JoulesPerKelvin): string {

        switch (unitAbbreviation) {
            
            case EntropyUnits.JoulesPerKelvin:
                return `J/K`;
            case EntropyUnits.CaloriesPerKelvin:
                return `cal/K`;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return `J/C`;
            case EntropyUnits.KilojoulesPerKelvin:
                return `kJ/K`;
            case EntropyUnits.MegajoulesPerKelvin:
                return `MJ/K`;
            case EntropyUnits.KilocaloriesPerKelvin:
                return `kcal/K`;
            case EntropyUnits.KilojoulesPerDegreeCelsius:
                return `kJ/C`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Entropy are equals to the current Entropy.
     * @param entropy The other Entropy.
     * @returns True if the given Entropy are equal to the current Entropy.
     */
    public equals(entropy: Entropy): boolean {
        return super.internalEquals(this.value, entropy.BaseValue);
    }

    /**
     * Compare the given Entropy against the current Entropy.
     * @param entropy The other Entropy.
     * @returns 0 if they are equal, -1 if the current Entropy is less then other, 1 if the current Entropy is greater then other.
     */
    public compareTo(entropy: Entropy): number {
        return super.internalCompareTo(this.value, entropy.BaseValue);
    }

    /**
     * Add the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    public add(entropy: Entropy): Entropy {
        return new Entropy(super.internalAdd(this.value, entropy.BaseValue))
    }

    /**
     * Subtract the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    public subtract(entropy: Entropy): Entropy {
        return new Entropy(super.internalSubtract(this.value, entropy.BaseValue))
    }

    /**
     * Multiply the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    public multiply(entropy: Entropy): Entropy {
        return new Entropy(super.internalMultiply(this.value, entropy.BaseValue))
    }

    /**
     * Divide the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    public divide(entropy: Entropy): Entropy {
        return new Entropy(super.internalDivide(this.value, entropy.BaseValue))
    }

    /**
     * Modulo the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    public modulo(entropy: Entropy): Entropy {
        return new Entropy(super.internalModulo(this.value, entropy.BaseValue))
    }

    /**
     * Pow the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    public pow(entropy: Entropy): Entropy {
        return new Entropy(super.internalPow(this.value, entropy.BaseValue))
    }
}
