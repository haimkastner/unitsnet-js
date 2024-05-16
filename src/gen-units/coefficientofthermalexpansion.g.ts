import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a CoefficientOfThermalExpansion */
export interface CoefficientOfThermalExpansionDto {
    /** The value of the CoefficientOfThermalExpansion */
    value: number;
    /**  The specific unit that the CoefficientOfThermalExpansion value is representing */
    unit: CoefficientOfThermalExpansionUnits;
}

/** CoefficientOfThermalExpansionUnits enumeration */
export enum CoefficientOfThermalExpansionUnits {
    /** */
    PerKelvin = "PerKelvin",
    /** */
    PerDegreeCelsius = "PerDegreeCelsius",
    /** */
    PerDegreeFahrenheit = "PerDegreeFahrenheit",
    /** */
    PpmPerKelvin = "PpmPerKelvin",
    /** */
    PpmPerDegreeCelsius = "PpmPerDegreeCelsius",
    /** */
    PpmPerDegreeFahrenheit = "PpmPerDegreeFahrenheit"
}

/** A unit that represents a fractional change in size in response to a change in temperature. */
export class CoefficientOfThermalExpansion extends BaseUnit {
    protected value: number;
    private perkelvinLazy: number | null = null;
    private perdegreecelsiusLazy: number | null = null;
    private perdegreefahrenheitLazy: number | null = null;
    private ppmperkelvinLazy: number | null = null;
    private ppmperdegreecelsiusLazy: number | null = null;
    private ppmperdegreefahrenheitLazy: number | null = null;

    /**
     * Create a new CoefficientOfThermalExpansion.
     * @param value The value.
     * @param fromUnit The ‘CoefficientOfThermalExpansion’ unit to create from.
     * The default unit is PerKelvin
     */
    public constructor(value: number, fromUnit: CoefficientOfThermalExpansionUnits = CoefficientOfThermalExpansionUnits.PerKelvin) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of CoefficientOfThermalExpansion is PerKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): CoefficientOfThermalExpansionUnits.PerKelvin {
        return CoefficientOfThermalExpansionUnits.PerKelvin
    }

    /** */
    public get PerKelvin(): number {
        if(this.perkelvinLazy !== null){
            return this.perkelvinLazy;
        }
        return this.perkelvinLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.PerKelvin);
    }

    /** */
    public get PerDegreeCelsius(): number {
        if(this.perdegreecelsiusLazy !== null){
            return this.perdegreecelsiusLazy;
        }
        return this.perdegreecelsiusLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.PerDegreeCelsius);
    }

    /** */
    public get PerDegreeFahrenheit(): number {
        if(this.perdegreefahrenheitLazy !== null){
            return this.perdegreefahrenheitLazy;
        }
        return this.perdegreefahrenheitLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.PerDegreeFahrenheit);
    }

    /** */
    public get PpmPerKelvin(): number {
        if(this.ppmperkelvinLazy !== null){
            return this.ppmperkelvinLazy;
        }
        return this.ppmperkelvinLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.PpmPerKelvin);
    }

    /** */
    public get PpmPerDegreeCelsius(): number {
        if(this.ppmperdegreecelsiusLazy !== null){
            return this.ppmperdegreecelsiusLazy;
        }
        return this.ppmperdegreecelsiusLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.PpmPerDegreeCelsius);
    }

    /** */
    public get PpmPerDegreeFahrenheit(): number {
        if(this.ppmperdegreefahrenheitLazy !== null){
            return this.ppmperdegreefahrenheitLazy;
        }
        return this.ppmperdegreefahrenheitLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.PpmPerDegreeFahrenheit);
    }

    /**
     * Create a new CoefficientOfThermalExpansion instance from a PerKelvin
     *
     * @param value The unit as PerKelvin to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    public static FromPerKelvin(value: number): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.PerKelvin);
    }

    /**
     * Create a new CoefficientOfThermalExpansion instance from a PerDegreeCelsius
     *
     * @param value The unit as PerDegreeCelsius to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    public static FromPerDegreeCelsius(value: number): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.PerDegreeCelsius);
    }

    /**
     * Create a new CoefficientOfThermalExpansion instance from a PerDegreeFahrenheit
     *
     * @param value The unit as PerDegreeFahrenheit to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    public static FromPerDegreeFahrenheit(value: number): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.PerDegreeFahrenheit);
    }

    /**
     * Create a new CoefficientOfThermalExpansion instance from a PpmPerKelvin
     *
     * @param value The unit as PpmPerKelvin to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    public static FromPpmPerKelvin(value: number): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.PpmPerKelvin);
    }

    /**
     * Create a new CoefficientOfThermalExpansion instance from a PpmPerDegreeCelsius
     *
     * @param value The unit as PpmPerDegreeCelsius to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    public static FromPpmPerDegreeCelsius(value: number): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.PpmPerDegreeCelsius);
    }

    /**
     * Create a new CoefficientOfThermalExpansion instance from a PpmPerDegreeFahrenheit
     *
     * @param value The unit as PpmPerDegreeFahrenheit to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    public static FromPpmPerDegreeFahrenheit(value: number): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.PpmPerDegreeFahrenheit);
    }

    /**
     * Gets the base unit enumeration associated with CoefficientOfThermalExpansion
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof CoefficientOfThermalExpansionUnits {
        return CoefficientOfThermalExpansionUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): CoefficientOfThermalExpansionUnits.PerKelvin {
        return CoefficientOfThermalExpansionUnits.PerKelvin;
    }

    /**
     * Create API DTO represent a CoefficientOfThermalExpansion unit.
     * @param holdInUnit The specific CoefficientOfThermalExpansion unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: CoefficientOfThermalExpansionUnits = CoefficientOfThermalExpansionUnits.PerKelvin): CoefficientOfThermalExpansionDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a CoefficientOfThermalExpansion unit from an API DTO representation.
     * @param dtoCoefficientOfThermalExpansion The CoefficientOfThermalExpansion API DTO representation
     */
    public static FromDto(dtoCoefficientOfThermalExpansion: CoefficientOfThermalExpansionDto): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(dtoCoefficientOfThermalExpansion.value, dtoCoefficientOfThermalExpansion.unit);
    }

    /**
     * Convert CoefficientOfThermalExpansion to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: CoefficientOfThermalExpansionUnits): number {
        switch (toUnit) {
            case CoefficientOfThermalExpansionUnits.PerKelvin: return this.PerKelvin;
            case CoefficientOfThermalExpansionUnits.PerDegreeCelsius: return this.PerDegreeCelsius;
            case CoefficientOfThermalExpansionUnits.PerDegreeFahrenheit: return this.PerDegreeFahrenheit;
            case CoefficientOfThermalExpansionUnits.PpmPerKelvin: return this.PpmPerKelvin;
            case CoefficientOfThermalExpansionUnits.PpmPerDegreeCelsius: return this.PpmPerDegreeCelsius;
            case CoefficientOfThermalExpansionUnits.PpmPerDegreeFahrenheit: return this.PpmPerDegreeFahrenheit;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: CoefficientOfThermalExpansionUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case CoefficientOfThermalExpansionUnits.PerKelvin: return this.value;
                case CoefficientOfThermalExpansionUnits.PerDegreeCelsius: return this.value;
                case CoefficientOfThermalExpansionUnits.PerDegreeFahrenheit: {
                    const v4 = super.internalDivide(5, 9);
                    return super.internalMultiply(this.value, v4);
                }
                case CoefficientOfThermalExpansionUnits.PpmPerKelvin: return super.internalMultiply(this.value, 1e6);
                case CoefficientOfThermalExpansionUnits.PpmPerDegreeCelsius: return super.internalMultiply(this.value, 1e6);
                case CoefficientOfThermalExpansionUnits.PpmPerDegreeFahrenheit: {
                    const v4 = super.internalDivide(5e6, 9);
                    return super.internalMultiply(this.value, v4);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case CoefficientOfThermalExpansionUnits.PerKelvin: return this.value;
            case CoefficientOfThermalExpansionUnits.PerDegreeCelsius: return this.value;
            case CoefficientOfThermalExpansionUnits.PerDegreeFahrenheit: return this.value * 5 / 9;
            case CoefficientOfThermalExpansionUnits.PpmPerKelvin: return this.value * 1e6;
            case CoefficientOfThermalExpansionUnits.PpmPerDegreeCelsius: return this.value * 1e6;
            case CoefficientOfThermalExpansionUnits.PpmPerDegreeFahrenheit: return this.value * 5e6 / 9;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: CoefficientOfThermalExpansionUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case CoefficientOfThermalExpansionUnits.PerKelvin: return value;
                case CoefficientOfThermalExpansionUnits.PerDegreeCelsius: return value;
                case CoefficientOfThermalExpansionUnits.PerDegreeFahrenheit: {
                    const v4 = super.internalDivide(9, 5);
                    return super.internalMultiply(value, v4);
                }
                case CoefficientOfThermalExpansionUnits.PpmPerKelvin: return super.internalDivide(value, 1e6);
                case CoefficientOfThermalExpansionUnits.PpmPerDegreeCelsius: return super.internalDivide(value, 1e6);
                case CoefficientOfThermalExpansionUnits.PpmPerDegreeFahrenheit: {
                    const v4 = super.internalDivide(9, 5e6);
                    return super.internalMultiply(value, v4);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case CoefficientOfThermalExpansionUnits.PerKelvin: return value;
            case CoefficientOfThermalExpansionUnits.PerDegreeCelsius: return value;
            case CoefficientOfThermalExpansionUnits.PerDegreeFahrenheit: return value * 9 / 5;
            case CoefficientOfThermalExpansionUnits.PpmPerKelvin: return value / 1e6;
            case CoefficientOfThermalExpansionUnits.PpmPerDegreeCelsius: return value / 1e6;
            case CoefficientOfThermalExpansionUnits.PpmPerDegreeFahrenheit: return value * 9 / 5e6;
            default: return Number.NaN;
        }
    }

    /**
     * Format the CoefficientOfThermalExpansion to string.
     * Note! the default format for CoefficientOfThermalExpansion is PerKelvin.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the CoefficientOfThermalExpansion.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the CoefficientOfThermalExpansion.
     */
    public toString(unit: CoefficientOfThermalExpansionUnits = CoefficientOfThermalExpansionUnits.PerKelvin, fractionalDigits?: number): string {

        switch (unit) {
            
            case CoefficientOfThermalExpansionUnits.PerKelvin:
                return super.truncateFractionDigits(this.PerKelvin, fractionalDigits) + ` K⁻¹`;
            case CoefficientOfThermalExpansionUnits.PerDegreeCelsius:
                return super.truncateFractionDigits(this.PerDegreeCelsius, fractionalDigits) + ` °C⁻¹`;
            case CoefficientOfThermalExpansionUnits.PerDegreeFahrenheit:
                return super.truncateFractionDigits(this.PerDegreeFahrenheit, fractionalDigits) + ` °F⁻¹`;
            case CoefficientOfThermalExpansionUnits.PpmPerKelvin:
                return super.truncateFractionDigits(this.PpmPerKelvin, fractionalDigits) + ` ppm/K`;
            case CoefficientOfThermalExpansionUnits.PpmPerDegreeCelsius:
                return super.truncateFractionDigits(this.PpmPerDegreeCelsius, fractionalDigits) + ` ppm/°C`;
            case CoefficientOfThermalExpansionUnits.PpmPerDegreeFahrenheit:
                return super.truncateFractionDigits(this.PpmPerDegreeFahrenheit, fractionalDigits) + ` ppm/°F`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get CoefficientOfThermalExpansion unit abbreviation.
     * Note! the default abbreviation for CoefficientOfThermalExpansion is PerKelvin.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the CoefficientOfThermalExpansion.
     * @returns The abbreviation string of CoefficientOfThermalExpansion.
     */
    public getUnitAbbreviation(unitAbbreviation: CoefficientOfThermalExpansionUnits = CoefficientOfThermalExpansionUnits.PerKelvin): string {

        switch (unitAbbreviation) {
            
            case CoefficientOfThermalExpansionUnits.PerKelvin:
                return `K⁻¹`;
            case CoefficientOfThermalExpansionUnits.PerDegreeCelsius:
                return `°C⁻¹`;
            case CoefficientOfThermalExpansionUnits.PerDegreeFahrenheit:
                return `°F⁻¹`;
            case CoefficientOfThermalExpansionUnits.PpmPerKelvin:
                return `ppm/K`;
            case CoefficientOfThermalExpansionUnits.PpmPerDegreeCelsius:
                return `ppm/°C`;
            case CoefficientOfThermalExpansionUnits.PpmPerDegreeFahrenheit:
                return `ppm/°F`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given CoefficientOfThermalExpansion are equals to the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns True if the given CoefficientOfThermalExpansion are equal to the current CoefficientOfThermalExpansion.
     */
    public equals(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): boolean {
        return super.internalEquals(this.value, coefficientOfThermalExpansion.BaseValue);
    }

    /**
     * Compare the given CoefficientOfThermalExpansion against the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns 0 if they are equal, -1 if the current CoefficientOfThermalExpansion is less then other, 1 if the current CoefficientOfThermalExpansion is greater then other.
     */
    public compareTo(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): number {
        return super.internalCompareTo(this.value, coefficientOfThermalExpansion.BaseValue);
    }

    /**
     * Add the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    public add(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(super.internalAdd(this.value, coefficientOfThermalExpansion.BaseValue))
    }

    /**
     * Subtract the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    public subtract(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(super.internalSubtract(this.value, coefficientOfThermalExpansion.BaseValue))
    }

    /**
     * Multiply the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    public multiply(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(super.internalMultiply(this.value, coefficientOfThermalExpansion.BaseValue))
    }

    /**
     * Divide the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    public divide(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(super.internalDivide(this.value, coefficientOfThermalExpansion.BaseValue))
    }

    /**
     * Modulo the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    public modulo(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(super.internalModulo(this.value, coefficientOfThermalExpansion.BaseValue))
    }

    /**
     * Pow the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    public pow(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(super.internalPow(this.value, coefficientOfThermalExpansion.BaseValue))
    }
}
