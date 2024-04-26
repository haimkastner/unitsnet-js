import { BaseUnit } from "../base-unit";

/** LeakRateUnits enumeration */
export enum LeakRateUnits {
    /** */
    PascalCubicMetersPerSecond = "PascalCubicMeterPerSecond",
    /** */
    MillibarLitersPerSecond = "MillibarLiterPerSecond",
    /** */
    TorrLitersPerSecond = "TorrLiterPerSecond"
}

/** A leakage rate of QL = 1 Pa-m³/s is given when the pressure in a closed, evacuated container with a volume of 1 m³ rises by 1 Pa per second or when the pressure in the container drops by 1 Pa in the event of overpressure. */
export class LeakRate extends BaseUnit {
    private value: number;
    private pascalcubicmeterspersecondLazy: number | null = null;
    private millibarliterspersecondLazy: number | null = null;
    private torrliterspersecondLazy: number | null = null;

    /**
     * Create a new LeakRate.
     * @param value The value.
     * @param fromUnit The ‘LeakRate’ unit to create from.
     * The default unit is PascalCubicMetersPerSecond
     */
    public constructor(value: number, fromUnit: LeakRateUnits = LeakRateUnits.PascalCubicMetersPerSecond) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of LeakRate is PascalCubicMetersPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get PascalCubicMetersPerSecond(): number {
        if(this.pascalcubicmeterspersecondLazy !== null){
            return this.pascalcubicmeterspersecondLazy;
        }
        return this.pascalcubicmeterspersecondLazy = this.convertFromBase(LeakRateUnits.PascalCubicMetersPerSecond);
    }

    /** */
    public get MillibarLitersPerSecond(): number {
        if(this.millibarliterspersecondLazy !== null){
            return this.millibarliterspersecondLazy;
        }
        return this.millibarliterspersecondLazy = this.convertFromBase(LeakRateUnits.MillibarLitersPerSecond);
    }

    /** */
    public get TorrLitersPerSecond(): number {
        if(this.torrliterspersecondLazy !== null){
            return this.torrliterspersecondLazy;
        }
        return this.torrliterspersecondLazy = this.convertFromBase(LeakRateUnits.TorrLitersPerSecond);
    }

    /**
     * Create a new LeakRate instance from a PascalCubicMetersPerSecond
     *
     * @param value The unit as PascalCubicMetersPerSecond to create a new LeakRate from.
     * @returns The new LeakRate instance.
     */
    public static FromPascalCubicMetersPerSecond(value: number): LeakRate {
        return new LeakRate(value, LeakRateUnits.PascalCubicMetersPerSecond);
    }

    /**
     * Create a new LeakRate instance from a MillibarLitersPerSecond
     *
     * @param value The unit as MillibarLitersPerSecond to create a new LeakRate from.
     * @returns The new LeakRate instance.
     */
    public static FromMillibarLitersPerSecond(value: number): LeakRate {
        return new LeakRate(value, LeakRateUnits.MillibarLitersPerSecond);
    }

    /**
     * Create a new LeakRate instance from a TorrLitersPerSecond
     *
     * @param value The unit as TorrLitersPerSecond to create a new LeakRate from.
     * @returns The new LeakRate instance.
     */
    public static FromTorrLitersPerSecond(value: number): LeakRate {
        return new LeakRate(value, LeakRateUnits.TorrLitersPerSecond);
    }

    /**
     * Convert LeakRate to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: LeakRateUnits): number {
        switch (toUnit) {
            case LeakRateUnits.PascalCubicMetersPerSecond: return this.PascalCubicMetersPerSecond;
            case LeakRateUnits.MillibarLitersPerSecond: return this.MillibarLitersPerSecond;
            case LeakRateUnits.TorrLitersPerSecond: return this.TorrLitersPerSecond;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: LeakRateUnits): number {
        switch (toUnit) {
                
            case LeakRateUnits.PascalCubicMetersPerSecond:
                return this.value;
            case LeakRateUnits.MillibarLitersPerSecond:
                return this.value * 10;
            case LeakRateUnits.TorrLitersPerSecond:
                return this.value * 7.5;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LeakRateUnits): number {
        switch (fromUnit) {
                
            case LeakRateUnits.PascalCubicMetersPerSecond:
                return value;
            case LeakRateUnits.MillibarLitersPerSecond:
                return value / 10;
            case LeakRateUnits.TorrLitersPerSecond:
                return value / 7.5;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the LeakRate to string.
     * Note! the default format for LeakRate is PascalCubicMetersPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the LeakRate.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the LeakRate.
     */
    public toString(unit: LeakRateUnits = LeakRateUnits.PascalCubicMetersPerSecond, fractionalDigits?: number): string {

        switch (unit) {
            
            case LeakRateUnits.PascalCubicMetersPerSecond:
                return super.truncateFractionDigits(this.PascalCubicMetersPerSecond, fractionalDigits) + ` Pa·m³/s`;
            case LeakRateUnits.MillibarLitersPerSecond:
                return super.truncateFractionDigits(this.MillibarLitersPerSecond, fractionalDigits) + ` mbar·l/s`;
            case LeakRateUnits.TorrLitersPerSecond:
                return super.truncateFractionDigits(this.TorrLitersPerSecond, fractionalDigits) + ` Torr·l/s`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get LeakRate unit abbreviation.
     * Note! the default abbreviation for LeakRate is PascalCubicMetersPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the LeakRate.
     * @returns The abbreviation string of LeakRate.
     */
    public getUnitAbbreviation(unitAbbreviation: LeakRateUnits = LeakRateUnits.PascalCubicMetersPerSecond): string {

        switch (unitAbbreviation) {
            
            case LeakRateUnits.PascalCubicMetersPerSecond:
                return `Pa·m³/s`;
            case LeakRateUnits.MillibarLitersPerSecond:
                return `mbar·l/s`;
            case LeakRateUnits.TorrLitersPerSecond:
                return `Torr·l/s`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given LeakRate are equals to the current LeakRate.
     * @param leakRate The other LeakRate.
     * @returns True if the given LeakRate are equal to the current LeakRate.
     */
    public equals(leakRate: LeakRate): boolean {
        return super.internalEquals(this.value, leakRate.BaseValue);
    }

    /**
     * Compare the given LeakRate against the current LeakRate.
     * @param leakRate The other LeakRate.
     * @returns 0 if they are equal, -1 if the current LeakRate is less then other, 1 if the current LeakRate is greater then other.
     */
    public compareTo(leakRate: LeakRate): number {
        return super.internalCompareTo(this.value, leakRate.BaseValue);
    }

    /**
     * Add the given LeakRate with the current LeakRate.
     * @param leakRate The other LeakRate.
     * @returns A new LeakRate instance with the results.
     */
    public add(leakRate: LeakRate): LeakRate {
        return new LeakRate(super.internalAdd(this.value, leakRate.BaseValue))
    }

    /**
     * Subtract the given LeakRate with the current LeakRate.
     * @param leakRate The other LeakRate.
     * @returns A new LeakRate instance with the results.
     */
    public subtract(leakRate: LeakRate): LeakRate {
        return new LeakRate(super.internalSubtract(this.value, leakRate.BaseValue))
    }

    /**
     * Multiply the given LeakRate with the current LeakRate.
     * @param leakRate The other LeakRate.
     * @returns A new LeakRate instance with the results.
     */
    public multiply(leakRate: LeakRate): LeakRate {
        return new LeakRate(super.internalMultiply(this.value, leakRate.BaseValue))
    }

    /**
     * Divide the given LeakRate with the current LeakRate.
     * @param leakRate The other LeakRate.
     * @returns A new LeakRate instance with the results.
     */
    public divide(leakRate: LeakRate): LeakRate {
        return new LeakRate(super.internalDivide(this.value, leakRate.BaseValue))
    }

    /**
     * Modulo the given LeakRate with the current LeakRate.
     * @param leakRate The other LeakRate.
     * @returns A new LeakRate instance with the results.
     */
    public modulo(leakRate: LeakRate): LeakRate {
        return new LeakRate(super.internalModulo(this.value, leakRate.BaseValue))
    }

    /**
     * Pow the given LeakRate with the current LeakRate.
     * @param leakRate The other LeakRate.
     * @returns A new LeakRate instance with the results.
     */
    public pow(leakRate: LeakRate): LeakRate {
        return new LeakRate(super.internalPow(this.value, leakRate.BaseValue))
    }
}
