import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a Permittivity */
export interface PermittivityDto {
    /** The value of the Permittivity */
    value: number;
    /**  The specific unit that the Permittivity value is representing */
    unit: PermittivityUnits;
}

/** PermittivityUnits enumeration */
export enum PermittivityUnits {
    /** */
    FaradsPerMeter = "FaradPerMeter"
}

/** In electromagnetism, permittivity is the measure of resistance that is encountered when forming an electric field in a particular medium. */
export class Permittivity extends BaseUnit {
    protected value: number;
    private faradspermeterLazy: number | null = null;

    /**
     * Create a new Permittivity.
     * @param value The value.
     * @param fromUnit The ‘Permittivity’ unit to create from.
     * The default unit is FaradsPerMeter
     */
    public constructor(value: number, fromUnit: PermittivityUnits = PermittivityUnits.FaradsPerMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Permittivity is FaradsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): PermittivityUnits.FaradsPerMeter {
        return PermittivityUnits.FaradsPerMeter
    }

    /** */
    public get FaradsPerMeter(): number {
        if(this.faradspermeterLazy !== null){
            return this.faradspermeterLazy;
        }
        return this.faradspermeterLazy = this.convertFromBase(PermittivityUnits.FaradsPerMeter);
    }

    /**
     * Create a new Permittivity instance from a FaradsPerMeter
     *
     * @param value The unit as FaradsPerMeter to create a new Permittivity from.
     * @returns The new Permittivity instance.
     */
    public static FromFaradsPerMeter(value: number): Permittivity {
        return new Permittivity(value, PermittivityUnits.FaradsPerMeter);
    }

    /**
     * Gets the base unit enumeration associated with Permittivity
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof PermittivityUnits {
        return PermittivityUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): PermittivityUnits.FaradsPerMeter {
        return PermittivityUnits.FaradsPerMeter;
    }

    /**
     * Create API DTO represent a Permittivity unit.
     * @param holdInUnit The specific Permittivity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: PermittivityUnits = PermittivityUnits.FaradsPerMeter): PermittivityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Permittivity unit from an API DTO representation.
     * @param dtoPermittivity The Permittivity API DTO representation
     */
    public static FromDto(dtoPermittivity: PermittivityDto): Permittivity {
        return new Permittivity(dtoPermittivity.value, dtoPermittivity.unit);
    }

    /**
     * Convert Permittivity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: PermittivityUnits): number {
        switch (toUnit) {
            case PermittivityUnits.FaradsPerMeter: return this.FaradsPerMeter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: PermittivityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case PermittivityUnits.FaradsPerMeter: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case PermittivityUnits.FaradsPerMeter: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: PermittivityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case PermittivityUnits.FaradsPerMeter: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case PermittivityUnits.FaradsPerMeter: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Permittivity to string.
     * Note! the default format for Permittivity is FaradsPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Permittivity.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the Permittivity.
     */
    public toString(unit: PermittivityUnits = PermittivityUnits.FaradsPerMeter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case PermittivityUnits.FaradsPerMeter:
                return super.truncateFractionDigits(this.FaradsPerMeter, options as ToStringOptions) + ` F/m`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Permittivity unit abbreviation.
     * Note! the default abbreviation for Permittivity is FaradsPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Permittivity.
     * @returns The abbreviation string of Permittivity.
     */
    public getUnitAbbreviation(unitAbbreviation: PermittivityUnits = PermittivityUnits.FaradsPerMeter): string {

        switch (unitAbbreviation) {
            
            case PermittivityUnits.FaradsPerMeter:
                return `F/m`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Permittivity are equals to the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns True if the given Permittivity are equal to the current Permittivity.
     */
    public equals(permittivity: Permittivity): boolean {
        return super.internalEquals(this.value, permittivity.BaseValue);
    }

    /**
     * Compare the given Permittivity against the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns 0 if they are equal, -1 if the current Permittivity is less then other, 1 if the current Permittivity is greater then other.
     */
    public compareTo(permittivity: Permittivity): number {
        return super.internalCompareTo(this.value, permittivity.BaseValue);
    }

    /**
     * Add the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    public add(permittivity: Permittivity): Permittivity {
        return new Permittivity(super.internalAdd(this.value, permittivity.BaseValue))
    }

    /**
     * Subtract the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    public subtract(permittivity: Permittivity): Permittivity {
        return new Permittivity(super.internalSubtract(this.value, permittivity.BaseValue))
    }

    /**
     * Multiply the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    public multiply(permittivity: Permittivity): Permittivity {
        return new Permittivity(super.internalMultiply(this.value, permittivity.BaseValue))
    }

    /**
     * Divide the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    public divide(permittivity: Permittivity): Permittivity {
        return new Permittivity(super.internalDivide(this.value, permittivity.BaseValue))
    }

    /**
     * Modulo the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    public modulo(permittivity: Permittivity): Permittivity {
        return new Permittivity(super.internalModulo(this.value, permittivity.BaseValue))
    }

    /**
     * Pow the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    public pow(permittivity: Permittivity): Permittivity {
        return new Permittivity(super.internalPow(this.value, permittivity.BaseValue))
    }
}
