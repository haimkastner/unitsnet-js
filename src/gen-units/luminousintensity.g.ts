import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a LuminousIntensity */
export interface LuminousIntensityDto {
    /** The value of the LuminousIntensity */
    value: number;
    /**  The specific unit that the LuminousIntensity value is representing */
    unit: LuminousIntensityUnits;
}

/** LuminousIntensityUnits enumeration */
export enum LuminousIntensityUnits {
    /** */
    Candela = "Candela"
}

/** In photometry, luminous intensity is a measure of the wavelength-weighted power emitted by a light source in a particular direction per unit solid angle, based on the luminosity function, a standardized model of the sensitivity of the human eye. */
export class LuminousIntensity extends BaseUnit {
    protected value: number;
    private candelaLazy: number | null = null;

    /**
     * Create a new LuminousIntensity.
     * @param value The value.
     * @param fromUnit The ‘LuminousIntensity’ unit to create from.
     * The default unit is Candela
     */
    public constructor(value: number, fromUnit: LuminousIntensityUnits = LuminousIntensityUnits.Candela) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of LuminousIntensity is Candela.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get getBaseUnit(): LuminousIntensityUnits.Candela {
        return LuminousIntensityUnits.Candela
    }

    /** */
    public get Candela(): number {
        if(this.candelaLazy !== null){
            return this.candelaLazy;
        }
        return this.candelaLazy = this.convertFromBase(LuminousIntensityUnits.Candela);
    }

    /**
     * Create a new LuminousIntensity instance from a Candela
     *
     * @param value The unit as Candela to create a new LuminousIntensity from.
     * @returns The new LuminousIntensity instance.
     */
    public static FromCandela(value: number): LuminousIntensity {
        return new LuminousIntensity(value, LuminousIntensityUnits.Candela);
    }

    /**
     * Gets the base unit enumeration associated with LuminousIntensity
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof LuminousIntensityUnits {
        return LuminousIntensityUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): LuminousIntensityUnits.Candela {
        return LuminousIntensityUnits.Candela;
    }

    /**
     * Create API DTO represent a LuminousIntensity unit.
     * @param holdInUnit The specific LuminousIntensity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: LuminousIntensityUnits = LuminousIntensityUnits.Candela): LuminousIntensityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a LuminousIntensity unit from an API DTO representation.
     * @param dtoLuminousIntensity The LuminousIntensity API DTO representation
     */
    public static FromDto(dtoLuminousIntensity: LuminousIntensityDto): LuminousIntensity {
        return new LuminousIntensity(dtoLuminousIntensity.value, dtoLuminousIntensity.unit);
    }

    /**
     * Convert LuminousIntensity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: LuminousIntensityUnits): number {
        switch (toUnit) {
            case LuminousIntensityUnits.Candela: return this.Candela;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: LuminousIntensityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case LuminousIntensityUnits.Candela: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case LuminousIntensityUnits.Candela: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: LuminousIntensityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case LuminousIntensityUnits.Candela: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case LuminousIntensityUnits.Candela: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the LuminousIntensity to string.
     * Note! the default format for LuminousIntensity is Candela.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the LuminousIntensity.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the LuminousIntensity.
     */
    public toString(unit: LuminousIntensityUnits = LuminousIntensityUnits.Candela, fractionalDigits?: number): string {

        switch (unit) {
            
            case LuminousIntensityUnits.Candela:
                return super.truncateFractionDigits(this.Candela, fractionalDigits) + ` cd`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get LuminousIntensity unit abbreviation.
     * Note! the default abbreviation for LuminousIntensity is Candela.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the LuminousIntensity.
     * @returns The abbreviation string of LuminousIntensity.
     */
    public getUnitAbbreviation(unitAbbreviation: LuminousIntensityUnits = LuminousIntensityUnits.Candela): string {

        switch (unitAbbreviation) {
            
            case LuminousIntensityUnits.Candela:
                return `cd`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given LuminousIntensity are equals to the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns True if the given LuminousIntensity are equal to the current LuminousIntensity.
     */
    public equals(luminousIntensity: LuminousIntensity): boolean {
        return super.internalEquals(this.value, luminousIntensity.BaseValue);
    }

    /**
     * Compare the given LuminousIntensity against the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns 0 if they are equal, -1 if the current LuminousIntensity is less then other, 1 if the current LuminousIntensity is greater then other.
     */
    public compareTo(luminousIntensity: LuminousIntensity): number {
        return super.internalCompareTo(this.value, luminousIntensity.BaseValue);
    }

    /**
     * Add the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    public add(luminousIntensity: LuminousIntensity): LuminousIntensity {
        return new LuminousIntensity(super.internalAdd(this.value, luminousIntensity.BaseValue))
    }

    /**
     * Subtract the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    public subtract(luminousIntensity: LuminousIntensity): LuminousIntensity {
        return new LuminousIntensity(super.internalSubtract(this.value, luminousIntensity.BaseValue))
    }

    /**
     * Multiply the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    public multiply(luminousIntensity: LuminousIntensity): LuminousIntensity {
        return new LuminousIntensity(super.internalMultiply(this.value, luminousIntensity.BaseValue))
    }

    /**
     * Divide the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    public divide(luminousIntensity: LuminousIntensity): LuminousIntensity {
        return new LuminousIntensity(super.internalDivide(this.value, luminousIntensity.BaseValue))
    }

    /**
     * Modulo the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    public modulo(luminousIntensity: LuminousIntensity): LuminousIntensity {
        return new LuminousIntensity(super.internalModulo(this.value, luminousIntensity.BaseValue))
    }

    /**
     * Pow the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    public pow(luminousIntensity: LuminousIntensity): LuminousIntensity {
        return new LuminousIntensity(super.internalPow(this.value, luminousIntensity.BaseValue))
    }
}
