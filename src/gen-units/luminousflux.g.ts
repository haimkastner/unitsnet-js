import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a LuminousFlux */
export interface LuminousFluxDto {
    /** The value of the LuminousFlux */
    value: number;
    /**  The specific unit that the LuminousFlux value is representing */
    unit: LuminousFluxUnits;
}

/** LuminousFluxUnits enumeration */
export enum LuminousFluxUnits {
    /** */
    Lumens = "Lumen"
}

/** In photometry, luminous flux or luminous power is the measure of the perceived power of light. */
export class LuminousFlux extends BaseUnit {
    protected value: number;
    private lumensLazy: number | null = null;

    /**
     * Create a new LuminousFlux.
     * @param value The value.
     * @param fromUnit The ‘LuminousFlux’ unit to create from.
     * The default unit is Lumens
     */
    public constructor(value: number, fromUnit: LuminousFluxUnits = LuminousFluxUnits.Lumens) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of LuminousFlux is Lumens.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): LuminousFluxUnits.Lumens {
        return LuminousFluxUnits.Lumens
    }

    /** */
    public get Lumens(): number {
        if(this.lumensLazy !== null){
            return this.lumensLazy;
        }
        return this.lumensLazy = this.convertFromBase(LuminousFluxUnits.Lumens);
    }

    /**
     * Create a new LuminousFlux instance from a Lumens
     *
     * @param value The unit as Lumens to create a new LuminousFlux from.
     * @returns The new LuminousFlux instance.
     */
    public static FromLumens(value: number): LuminousFlux {
        return new LuminousFlux(value, LuminousFluxUnits.Lumens);
    }

    /**
     * Gets the base unit enumeration associated with LuminousFlux
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof LuminousFluxUnits {
        return LuminousFluxUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): LuminousFluxUnits.Lumens {
        return LuminousFluxUnits.Lumens;
    }

    /**
     * Create API DTO represent a LuminousFlux unit.
     * @param holdInUnit The specific LuminousFlux unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: LuminousFluxUnits = LuminousFluxUnits.Lumens): LuminousFluxDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a LuminousFlux unit from an API DTO representation.
     * @param dtoLuminousFlux The LuminousFlux API DTO representation
     */
    public static FromDto(dtoLuminousFlux: LuminousFluxDto): LuminousFlux {
        return new LuminousFlux(dtoLuminousFlux.value, dtoLuminousFlux.unit);
    }

    /**
     * Convert LuminousFlux to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: LuminousFluxUnits): number {
        switch (toUnit) {
            case LuminousFluxUnits.Lumens: return this.Lumens;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: LuminousFluxUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case LuminousFluxUnits.Lumens: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case LuminousFluxUnits.Lumens: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: LuminousFluxUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case LuminousFluxUnits.Lumens: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case LuminousFluxUnits.Lumens: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the LuminousFlux to string.
     * Note! the default format for LuminousFlux is Lumens.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the LuminousFlux.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the LuminousFlux.
     */
    public toString(unit: LuminousFluxUnits = LuminousFluxUnits.Lumens, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case LuminousFluxUnits.Lumens:
                return super.truncateFractionDigits(this.Lumens, options as ToStringOptions) + ` lm`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get LuminousFlux unit abbreviation.
     * Note! the default abbreviation for LuminousFlux is Lumens.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the LuminousFlux.
     * @returns The abbreviation string of LuminousFlux.
     */
    public getUnitAbbreviation(unitAbbreviation: LuminousFluxUnits = LuminousFluxUnits.Lumens): string {

        switch (unitAbbreviation) {
            
            case LuminousFluxUnits.Lumens:
                return `lm`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given LuminousFlux are equals to the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns True if the given LuminousFlux are equal to the current LuminousFlux.
     */
    public equals(luminousFlux: LuminousFlux): boolean {
        return super.internalEquals(this.value, luminousFlux.BaseValue);
    }

    /**
     * Compare the given LuminousFlux against the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns 0 if they are equal, -1 if the current LuminousFlux is less then other, 1 if the current LuminousFlux is greater then other.
     */
    public compareTo(luminousFlux: LuminousFlux): number {
        return super.internalCompareTo(this.value, luminousFlux.BaseValue);
    }

    /**
     * Add the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    public add(luminousFlux: LuminousFlux): LuminousFlux {
        return new LuminousFlux(super.internalAdd(this.value, luminousFlux.BaseValue))
    }

    /**
     * Subtract the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    public subtract(luminousFlux: LuminousFlux): LuminousFlux {
        return new LuminousFlux(super.internalSubtract(this.value, luminousFlux.BaseValue))
    }

    /**
     * Multiply the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    public multiply(luminousFlux: LuminousFlux): LuminousFlux {
        return new LuminousFlux(super.internalMultiply(this.value, luminousFlux.BaseValue))
    }

    /**
     * Divide the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    public divide(luminousFlux: LuminousFlux): LuminousFlux {
        return new LuminousFlux(super.internalDivide(this.value, luminousFlux.BaseValue))
    }

    /**
     * Modulo the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    public modulo(luminousFlux: LuminousFlux): LuminousFlux {
        return new LuminousFlux(super.internalModulo(this.value, luminousFlux.BaseValue))
    }

    /**
     * Pow the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    public pow(luminousFlux: LuminousFlux): LuminousFlux {
        return new LuminousFlux(super.internalPow(this.value, luminousFlux.BaseValue))
    }
}
