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
export class Entropy {
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
        switch (toUnit) {
                
            case EntropyUnits.JoulesPerKelvin:
                return this.value;
            case EntropyUnits.CaloriesPerKelvin:
                return this.value / 4.184;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return this.value;
            case EntropyUnits.KilojoulesPerKelvin:
                return (this.value) / 1000;
            case EntropyUnits.MegajoulesPerKelvin:
                return (this.value) / 1000000;
            case EntropyUnits.KilocaloriesPerKelvin:
                return (this.value / 4.184) / 1000;
            case EntropyUnits.KilojoulesPerDegreeCelsius:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: EntropyUnits): number {
        switch (fromUnit) {
                
            case EntropyUnits.JoulesPerKelvin:
                return value;
            case EntropyUnits.CaloriesPerKelvin:
                return value * 4.184;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return value;
            case EntropyUnits.KilojoulesPerKelvin:
                return (value) * 1000;
            case EntropyUnits.MegajoulesPerKelvin:
                return (value) * 1000000;
            case EntropyUnits.KilocaloriesPerKelvin:
                return (value * 4.184) * 1000;
            case EntropyUnits.KilojoulesPerDegreeCelsius:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Entropy to string.
     * Note! the default format for Entropy is JoulesPerKelvin.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Entropy.
     * @returns The string format of the Entropy.
     */
    public toString(unit: EntropyUnits = EntropyUnits.JoulesPerKelvin): string {

        switch (unit) {
            
            case EntropyUnits.JoulesPerKelvin:
                return this.JoulesPerKelvin + ` J/K`;
            case EntropyUnits.CaloriesPerKelvin:
                return this.CaloriesPerKelvin + ` cal/K`;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return this.JoulesPerDegreeCelsius + ` J/C`;
            case EntropyUnits.KilojoulesPerKelvin:
                return this.KilojoulesPerKelvin + ` kJ/K`;
            case EntropyUnits.MegajoulesPerKelvin:
                return this.MegajoulesPerKelvin + ` MJ/K`;
            case EntropyUnits.KilocaloriesPerKelvin:
                return this.KilocaloriesPerKelvin + ` kcal/K`;
            case EntropyUnits.KilojoulesPerDegreeCelsius:
                return this.KilojoulesPerDegreeCelsius + ` kJ/C`;
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
        return this.value === entropy.BaseValue;
    }

    /**
     * Compare the given Entropy against the current Entropy.
     * @param entropy The other Entropy.
     * @returns 0 if they are equal, -1 if the current Entropy is less then other, 1 if the current Entropy is greater then other.
     */
    public compareTo(entropy: Entropy): number {

        if (this.value > entropy.BaseValue)
            return 1;
        if (this.value < entropy.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    public add(entropy: Entropy): Entropy {
        return new Entropy(this.value + entropy.BaseValue)
    }

    /**
     * Subtract the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    public subtract(entropy: Entropy): Entropy {
        return new Entropy(this.value - entropy.BaseValue)
    }

    /**
     * Multiply the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    public multiply(entropy: Entropy): Entropy {
        return new Entropy(this.value * entropy.BaseValue)
    }

    /**
     * Divide the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    public divide(entropy: Entropy): Entropy {
        return new Entropy(this.value / entropy.BaseValue)
    }

    /**
     * Modulo the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    public modulo(entropy: Entropy): Entropy {
        return new Entropy(this.value % entropy.BaseValue)
    }

    /**
     * Pow the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    public pow(entropy: Entropy): Entropy {
        return new Entropy(this.value ** entropy.BaseValue)
    }
}
