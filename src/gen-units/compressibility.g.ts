/** API DTO represents a Compressibility */
export interface CompressibilityDto {
    /** The value of the Compressibility */
    value: number;
    /**  The specific unit that the Compressibility value is representing */
    unit: CompressibilityUnits;
}

/** CompressibilityUnits enumeration */
export enum CompressibilityUnits {
    /** */
    InversePascals = "InversePascal",
    /** */
    InverseKilopascals = "InverseKilopascal",
    /** */
    InverseMegapascals = "InverseMegapascal",
    /** */
    InverseAtmospheres = "InverseAtmosphere",
    /** */
    InverseMillibars = "InverseMillibar",
    /** */
    InverseBars = "InverseBar",
    /** */
    InversePoundsForcePerSquareInch = "InversePoundForcePerSquareInch"
}

/** Compressibility is the measure of the relative volume change of a fluid or solid in response to pressure changes. */
export class Compressibility extends BaseUnit {
    private value: number;
    private inversepascalsLazy: number | null = null;
    private inversekilopascalsLazy: number | null = null;
    private inversemegapascalsLazy: number | null = null;
    private inverseatmospheresLazy: number | null = null;
    private inversemillibarsLazy: number | null = null;
    private inversebarsLazy: number | null = null;
    private inversepoundsforcepersquareinchLazy: number | null = null;

    /**
     * Create a new Compressibility.
     * @param value The value.
     * @param fromUnit The ‘Compressibility’ unit to create from.
     * The default unit is InversePascals
     */
    public constructor(value: number, fromUnit: CompressibilityUnits = CompressibilityUnits.InversePascals) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Compressibility is InversePascals.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get InversePascals(): number {
        if(this.inversepascalsLazy !== null){
            return this.inversepascalsLazy;
        }
        return this.inversepascalsLazy = this.convertFromBase(CompressibilityUnits.InversePascals);
    }

    /** */
    public get InverseKilopascals(): number {
        if(this.inversekilopascalsLazy !== null){
            return this.inversekilopascalsLazy;
        }
        return this.inversekilopascalsLazy = this.convertFromBase(CompressibilityUnits.InverseKilopascals);
    }

    /** */
    public get InverseMegapascals(): number {
        if(this.inversemegapascalsLazy !== null){
            return this.inversemegapascalsLazy;
        }
        return this.inversemegapascalsLazy = this.convertFromBase(CompressibilityUnits.InverseMegapascals);
    }

    /** */
    public get InverseAtmospheres(): number {
        if(this.inverseatmospheresLazy !== null){
            return this.inverseatmospheresLazy;
        }
        return this.inverseatmospheresLazy = this.convertFromBase(CompressibilityUnits.InverseAtmospheres);
    }

    /** */
    public get InverseMillibars(): number {
        if(this.inversemillibarsLazy !== null){
            return this.inversemillibarsLazy;
        }
        return this.inversemillibarsLazy = this.convertFromBase(CompressibilityUnits.InverseMillibars);
    }

    /** */
    public get InverseBars(): number {
        if(this.inversebarsLazy !== null){
            return this.inversebarsLazy;
        }
        return this.inversebarsLazy = this.convertFromBase(CompressibilityUnits.InverseBars);
    }

    /** */
    public get InversePoundsForcePerSquareInch(): number {
        if(this.inversepoundsforcepersquareinchLazy !== null){
            return this.inversepoundsforcepersquareinchLazy;
        }
        return this.inversepoundsforcepersquareinchLazy = this.convertFromBase(CompressibilityUnits.InversePoundsForcePerSquareInch);
    }

    /**
     * Create a new Compressibility instance from a InversePascals
     *
     * @param value The unit as InversePascals to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInversePascals(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InversePascals);
    }

    /**
     * Create a new Compressibility instance from a InverseKilopascals
     *
     * @param value The unit as InverseKilopascals to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInverseKilopascals(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InverseKilopascals);
    }

    /**
     * Create a new Compressibility instance from a InverseMegapascals
     *
     * @param value The unit as InverseMegapascals to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInverseMegapascals(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InverseMegapascals);
    }

    /**
     * Create a new Compressibility instance from a InverseAtmospheres
     *
     * @param value The unit as InverseAtmospheres to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInverseAtmospheres(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InverseAtmospheres);
    }

    /**
     * Create a new Compressibility instance from a InverseMillibars
     *
     * @param value The unit as InverseMillibars to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInverseMillibars(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InverseMillibars);
    }

    /**
     * Create a new Compressibility instance from a InverseBars
     *
     * @param value The unit as InverseBars to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInverseBars(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InverseBars);
    }

    /**
     * Create a new Compressibility instance from a InversePoundsForcePerSquareInch
     *
     * @param value The unit as InversePoundsForcePerSquareInch to create a new Compressibility from.
     * @returns The new Compressibility instance.
     */
    public static FromInversePoundsForcePerSquareInch(value: number): Compressibility {
        return new Compressibility(value, CompressibilityUnits.InversePoundsForcePerSquareInch);
    }

    /**
     * Create API DTO represent a Compressibility unit.
     * @param holdInUnit The specific Compressibility unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: CompressibilityUnits = CompressibilityUnits.InversePascals): CompressibilityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Compressibility unit from an API DTO representation.
     * @param dtoCompressibility The Compressibility API DTO representation
     */
    public static FromDto(dtoCompressibility: CompressibilityDto): Compressibility {
        return new Compressibility(dtoCompressibility.value, dtoCompressibility.unit);
    }

    /**
     * Convert Compressibility to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: CompressibilityUnits): number {
        switch (toUnit) {
            case CompressibilityUnits.InversePascals: return this.InversePascals;
            case CompressibilityUnits.InverseKilopascals: return this.InverseKilopascals;
            case CompressibilityUnits.InverseMegapascals: return this.InverseMegapascals;
            case CompressibilityUnits.InverseAtmospheres: return this.InverseAtmospheres;
            case CompressibilityUnits.InverseMillibars: return this.InverseMillibars;
            case CompressibilityUnits.InverseBars: return this.InverseBars;
            case CompressibilityUnits.InversePoundsForcePerSquareInch: return this.InversePoundsForcePerSquareInch;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: CompressibilityUnits): number {
        switch (toUnit) {
                
            case CompressibilityUnits.InversePascals:
                return this.value;
            case CompressibilityUnits.InverseKilopascals:
                return this.value / 1e3;
            case CompressibilityUnits.InverseMegapascals:
                return this.value / 1e6;
            case CompressibilityUnits.InverseAtmospheres:
                return this.value / 101325;
            case CompressibilityUnits.InverseMillibars:
                return this.value / 100;
            case CompressibilityUnits.InverseBars:
                return this.value / 1e5;
            case CompressibilityUnits.InversePoundsForcePerSquareInch:
                return this.value / 6.894757293168361e3;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: CompressibilityUnits): number {
        switch (fromUnit) {
                
            case CompressibilityUnits.InversePascals:
                return value;
            case CompressibilityUnits.InverseKilopascals:
                return value * 1e3;
            case CompressibilityUnits.InverseMegapascals:
                return value * 1e6;
            case CompressibilityUnits.InverseAtmospheres:
                return value * 101325;
            case CompressibilityUnits.InverseMillibars:
                return value * 100;
            case CompressibilityUnits.InverseBars:
                return value * 1e5;
            case CompressibilityUnits.InversePoundsForcePerSquareInch:
                return value * 6.894757293168361e3;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Compressibility to string.
     * Note! the default format for Compressibility is InversePascals.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Compressibility.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Compressibility.
     */
    public toString(unit: CompressibilityUnits = CompressibilityUnits.InversePascals, fractionalDigits?: number): string {

        switch (unit) {
            
            case CompressibilityUnits.InversePascals:
                return super.truncateFractionDigits(this.InversePascals, fractionalDigits) + ` Pa⁻¹`;
            case CompressibilityUnits.InverseKilopascals:
                return super.truncateFractionDigits(this.InverseKilopascals, fractionalDigits) + ` kPa⁻¹`;
            case CompressibilityUnits.InverseMegapascals:
                return super.truncateFractionDigits(this.InverseMegapascals, fractionalDigits) + ` MPa⁻¹`;
            case CompressibilityUnits.InverseAtmospheres:
                return super.truncateFractionDigits(this.InverseAtmospheres, fractionalDigits) + ` atm⁻¹`;
            case CompressibilityUnits.InverseMillibars:
                return super.truncateFractionDigits(this.InverseMillibars, fractionalDigits) + ` mbar⁻¹`;
            case CompressibilityUnits.InverseBars:
                return super.truncateFractionDigits(this.InverseBars, fractionalDigits) + ` bar⁻¹`;
            case CompressibilityUnits.InversePoundsForcePerSquareInch:
                return super.truncateFractionDigits(this.InversePoundsForcePerSquareInch, fractionalDigits) + ` psi⁻¹`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Compressibility unit abbreviation.
     * Note! the default abbreviation for Compressibility is InversePascals.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Compressibility.
     * @returns The abbreviation string of Compressibility.
     */
    public getUnitAbbreviation(unitAbbreviation: CompressibilityUnits = CompressibilityUnits.InversePascals): string {

        switch (unitAbbreviation) {
            
            case CompressibilityUnits.InversePascals:
                return `Pa⁻¹`;
            case CompressibilityUnits.InverseKilopascals:
                return `kPa⁻¹`;
            case CompressibilityUnits.InverseMegapascals:
                return `MPa⁻¹`;
            case CompressibilityUnits.InverseAtmospheres:
                return `atm⁻¹`;
            case CompressibilityUnits.InverseMillibars:
                return `mbar⁻¹`;
            case CompressibilityUnits.InverseBars:
                return `bar⁻¹`;
            case CompressibilityUnits.InversePoundsForcePerSquareInch:
                return `psi⁻¹`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Compressibility are equals to the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns True if the given Compressibility are equal to the current Compressibility.
     */
    public equals(compressibility: Compressibility): boolean {
        return super.internalEquals(this.value, compressibility.BaseValue);
    }

    /**
     * Compare the given Compressibility against the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns 0 if they are equal, -1 if the current Compressibility is less then other, 1 if the current Compressibility is greater then other.
     */
    public compareTo(compressibility: Compressibility): number {
        return super.internalCompareTo(this.value, compressibility.BaseValue);
    }

    /**
     * Add the given Compressibility with the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns A new Compressibility instance with the results.
     */
    public add(compressibility: Compressibility): Compressibility {
        return new Compressibility(super.internalAdd(this.value, compressibility.BaseValue))
    }

    /**
     * Subtract the given Compressibility with the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns A new Compressibility instance with the results.
     */
    public subtract(compressibility: Compressibility): Compressibility {
        return new Compressibility(super.internalSubtract(this.value, compressibility.BaseValue))
    }

    /**
     * Multiply the given Compressibility with the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns A new Compressibility instance with the results.
     */
    public multiply(compressibility: Compressibility): Compressibility {
        return new Compressibility(super.internalMultiply(this.value, compressibility.BaseValue))
    }

    /**
     * Divide the given Compressibility with the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns A new Compressibility instance with the results.
     */
    public divide(compressibility: Compressibility): Compressibility {
        return new Compressibility(super.internalDivide(this.value, compressibility.BaseValue))
    }

    /**
     * Modulo the given Compressibility with the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns A new Compressibility instance with the results.
     */
    public modulo(compressibility: Compressibility): Compressibility {
        return new Compressibility(super.internalModulo(this.value, compressibility.BaseValue))
    }

    /**
     * Pow the given Compressibility with the current Compressibility.
     * @param compressibility The other Compressibility.
     * @returns A new Compressibility instance with the results.
     */
    public pow(compressibility: Compressibility): Compressibility {
        return new Compressibility(super.internalPow(this.value, compressibility.BaseValue))
    }
}
