import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Illuminance */
export interface IlluminanceDto {
    /** The value of the Illuminance */
    value: number;
    /**  The specific unit that the Illuminance value is representing */
    unit: IlluminanceUnits;
}

/** IlluminanceUnits enumeration */
export enum IlluminanceUnits {
    /** */
    Lux = "Lux",
    /** */
    Millilux = "Millilux",
    /** */
    Kilolux = "Kilolux",
    /** */
    Megalux = "Megalux"
}

/** In photometry, illuminance is the total luminous flux incident on a surface, per unit area. */
export class Illuminance extends BaseUnit {
    protected value: number;
    private luxLazy: number | null = null;
    private milliluxLazy: number | null = null;
    private kiloluxLazy: number | null = null;
    private megaluxLazy: number | null = null;

    /**
     * Create a new Illuminance.
     * @param value The value.
     * @param fromUnit The ‘Illuminance’ unit to create from.
     * The default unit is Lux
     */
    public constructor(value: number, fromUnit: IlluminanceUnits = IlluminanceUnits.Lux) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Illuminance is Lux.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get getBaseUnit(): IlluminanceUnits.Lux {
        return IlluminanceUnits.Lux
    }

    /** */
    public get Lux(): number {
        if(this.luxLazy !== null){
            return this.luxLazy;
        }
        return this.luxLazy = this.convertFromBase(IlluminanceUnits.Lux);
    }

    /** */
    public get Millilux(): number {
        if(this.milliluxLazy !== null){
            return this.milliluxLazy;
        }
        return this.milliluxLazy = this.convertFromBase(IlluminanceUnits.Millilux);
    }

    /** */
    public get Kilolux(): number {
        if(this.kiloluxLazy !== null){
            return this.kiloluxLazy;
        }
        return this.kiloluxLazy = this.convertFromBase(IlluminanceUnits.Kilolux);
    }

    /** */
    public get Megalux(): number {
        if(this.megaluxLazy !== null){
            return this.megaluxLazy;
        }
        return this.megaluxLazy = this.convertFromBase(IlluminanceUnits.Megalux);
    }

    /**
     * Create a new Illuminance instance from a Lux
     *
     * @param value The unit as Lux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    public static FromLux(value: number): Illuminance {
        return new Illuminance(value, IlluminanceUnits.Lux);
    }

    /**
     * Create a new Illuminance instance from a Millilux
     *
     * @param value The unit as Millilux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    public static FromMillilux(value: number): Illuminance {
        return new Illuminance(value, IlluminanceUnits.Millilux);
    }

    /**
     * Create a new Illuminance instance from a Kilolux
     *
     * @param value The unit as Kilolux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    public static FromKilolux(value: number): Illuminance {
        return new Illuminance(value, IlluminanceUnits.Kilolux);
    }

    /**
     * Create a new Illuminance instance from a Megalux
     *
     * @param value The unit as Megalux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    public static FromMegalux(value: number): Illuminance {
        return new Illuminance(value, IlluminanceUnits.Megalux);
    }

    /**
     * Gets the base unit enumeration associated with Illuminance
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof IlluminanceUnits {
        return IlluminanceUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): IlluminanceUnits.Lux {
        return IlluminanceUnits.Lux;
    }

    /**
     * Create API DTO represent a Illuminance unit.
     * @param holdInUnit The specific Illuminance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: IlluminanceUnits = IlluminanceUnits.Lux): IlluminanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Illuminance unit from an API DTO representation.
     * @param dtoIlluminance The Illuminance API DTO representation
     */
    public static FromDto(dtoIlluminance: IlluminanceDto): Illuminance {
        return new Illuminance(dtoIlluminance.value, dtoIlluminance.unit);
    }

    /**
     * Convert Illuminance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: IlluminanceUnits): number {
        switch (toUnit) {
            case IlluminanceUnits.Lux: return this.Lux;
            case IlluminanceUnits.Millilux: return this.Millilux;
            case IlluminanceUnits.Kilolux: return this.Kilolux;
            case IlluminanceUnits.Megalux: return this.Megalux;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: IlluminanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case IlluminanceUnits.Lux: return this.value;
                case IlluminanceUnits.Millilux: return super.internalDivide(this.value, 0.001);
                case IlluminanceUnits.Kilolux: return super.internalDivide(this.value, 1000);
                case IlluminanceUnits.Megalux: return super.internalDivide(this.value, 1000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case IlluminanceUnits.Lux: return this.value;
            case IlluminanceUnits.Millilux: return (this.value) / 0.001;
            case IlluminanceUnits.Kilolux: return (this.value) / 1000;
            case IlluminanceUnits.Megalux: return (this.value) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: IlluminanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case IlluminanceUnits.Lux: return value;
                case IlluminanceUnits.Millilux: return super.internalMultiply(value, 0.001);
                case IlluminanceUnits.Kilolux: return super.internalMultiply(value, 1000);
                case IlluminanceUnits.Megalux: return super.internalMultiply(value, 1000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case IlluminanceUnits.Lux: return value;
            case IlluminanceUnits.Millilux: return (value) * 0.001;
            case IlluminanceUnits.Kilolux: return (value) * 1000;
            case IlluminanceUnits.Megalux: return (value) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Illuminance to string.
     * Note! the default format for Illuminance is Lux.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Illuminance.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Illuminance.
     */
    public toString(unit: IlluminanceUnits = IlluminanceUnits.Lux, fractionalDigits?: number): string {

        switch (unit) {
            
            case IlluminanceUnits.Lux:
                return super.truncateFractionDigits(this.Lux, fractionalDigits) + ` lx`;
            case IlluminanceUnits.Millilux:
                return super.truncateFractionDigits(this.Millilux, fractionalDigits) + ` mlx`;
            case IlluminanceUnits.Kilolux:
                return super.truncateFractionDigits(this.Kilolux, fractionalDigits) + ` klx`;
            case IlluminanceUnits.Megalux:
                return super.truncateFractionDigits(this.Megalux, fractionalDigits) + ` Mlx`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Illuminance unit abbreviation.
     * Note! the default abbreviation for Illuminance is Lux.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Illuminance.
     * @returns The abbreviation string of Illuminance.
     */
    public getUnitAbbreviation(unitAbbreviation: IlluminanceUnits = IlluminanceUnits.Lux): string {

        switch (unitAbbreviation) {
            
            case IlluminanceUnits.Lux:
                return `lx`;
            case IlluminanceUnits.Millilux:
                return `mlx`;
            case IlluminanceUnits.Kilolux:
                return `klx`;
            case IlluminanceUnits.Megalux:
                return `Mlx`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Illuminance are equals to the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns True if the given Illuminance are equal to the current Illuminance.
     */
    public equals(illuminance: Illuminance): boolean {
        return super.internalEquals(this.value, illuminance.BaseValue);
    }

    /**
     * Compare the given Illuminance against the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns 0 if they are equal, -1 if the current Illuminance is less then other, 1 if the current Illuminance is greater then other.
     */
    public compareTo(illuminance: Illuminance): number {
        return super.internalCompareTo(this.value, illuminance.BaseValue);
    }

    /**
     * Add the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    public add(illuminance: Illuminance): Illuminance {
        return new Illuminance(super.internalAdd(this.value, illuminance.BaseValue))
    }

    /**
     * Subtract the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    public subtract(illuminance: Illuminance): Illuminance {
        return new Illuminance(super.internalSubtract(this.value, illuminance.BaseValue))
    }

    /**
     * Multiply the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    public multiply(illuminance: Illuminance): Illuminance {
        return new Illuminance(super.internalMultiply(this.value, illuminance.BaseValue))
    }

    /**
     * Divide the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    public divide(illuminance: Illuminance): Illuminance {
        return new Illuminance(super.internalDivide(this.value, illuminance.BaseValue))
    }

    /**
     * Modulo the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    public modulo(illuminance: Illuminance): Illuminance {
        return new Illuminance(super.internalModulo(this.value, illuminance.BaseValue))
    }

    /**
     * Pow the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    public pow(illuminance: Illuminance): Illuminance {
        return new Illuminance(super.internalPow(this.value, illuminance.BaseValue))
    }
}
