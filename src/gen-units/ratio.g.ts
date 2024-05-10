import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Ratio */
export interface RatioDto {
    /** The value of the Ratio */
    value: number;
    /**  The specific unit that the Ratio value is representing */
    unit: RatioUnits;
}

/** RatioUnits enumeration */
export enum RatioUnits {
    /** */
    DecimalFractions = "DecimalFraction",
    /** */
    Percent = "Percent",
    /** */
    PartsPerThousand = "PartPerThousand",
    /** */
    PartsPerMillion = "PartPerMillion",
    /** */
    PartsPerBillion = "PartPerBillion",
    /** */
    PartsPerTrillion = "PartPerTrillion"
}

/** In mathematics, a ratio is a relationship between two numbers of the same kind (e.g., objects, persons, students, spoonfuls, units of whatever identical dimension), usually expressed as "a to b" or a:b, sometimes expressed arithmetically as a dimensionless quotient of the two that explicitly indicates how many times the first number contains the second (not necessarily an integer). */
export class Ratio extends BaseUnit {
    protected value: number;
    private decimalfractionsLazy: number | null = null;
    private percentLazy: number | null = null;
    private partsperthousandLazy: number | null = null;
    private partspermillionLazy: number | null = null;
    private partsperbillionLazy: number | null = null;
    private partspertrillionLazy: number | null = null;

    /**
     * Create a new Ratio.
     * @param value The value.
     * @param fromUnit The ‘Ratio’ unit to create from.
     * The default unit is DecimalFractions
     */
    public constructor(value: number, fromUnit: RatioUnits = RatioUnits.DecimalFractions) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Ratio is DecimalFractions.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get DecimalFractions(): number {
        if(this.decimalfractionsLazy !== null){
            return this.decimalfractionsLazy;
        }
        return this.decimalfractionsLazy = this.convertFromBase(RatioUnits.DecimalFractions);
    }

    /** */
    public get Percent(): number {
        if(this.percentLazy !== null){
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(RatioUnits.Percent);
    }

    /** */
    public get PartsPerThousand(): number {
        if(this.partsperthousandLazy !== null){
            return this.partsperthousandLazy;
        }
        return this.partsperthousandLazy = this.convertFromBase(RatioUnits.PartsPerThousand);
    }

    /** */
    public get PartsPerMillion(): number {
        if(this.partspermillionLazy !== null){
            return this.partspermillionLazy;
        }
        return this.partspermillionLazy = this.convertFromBase(RatioUnits.PartsPerMillion);
    }

    /** */
    public get PartsPerBillion(): number {
        if(this.partsperbillionLazy !== null){
            return this.partsperbillionLazy;
        }
        return this.partsperbillionLazy = this.convertFromBase(RatioUnits.PartsPerBillion);
    }

    /** */
    public get PartsPerTrillion(): number {
        if(this.partspertrillionLazy !== null){
            return this.partspertrillionLazy;
        }
        return this.partspertrillionLazy = this.convertFromBase(RatioUnits.PartsPerTrillion);
    }

    /**
     * Create a new Ratio instance from a DecimalFractions
     *
     * @param value The unit as DecimalFractions to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    public static FromDecimalFractions(value: number): Ratio {
        return new Ratio(value, RatioUnits.DecimalFractions);
    }

    /**
     * Create a new Ratio instance from a Percent
     *
     * @param value The unit as Percent to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    public static FromPercent(value: number): Ratio {
        return new Ratio(value, RatioUnits.Percent);
    }

    /**
     * Create a new Ratio instance from a PartsPerThousand
     *
     * @param value The unit as PartsPerThousand to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    public static FromPartsPerThousand(value: number): Ratio {
        return new Ratio(value, RatioUnits.PartsPerThousand);
    }

    /**
     * Create a new Ratio instance from a PartsPerMillion
     *
     * @param value The unit as PartsPerMillion to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    public static FromPartsPerMillion(value: number): Ratio {
        return new Ratio(value, RatioUnits.PartsPerMillion);
    }

    /**
     * Create a new Ratio instance from a PartsPerBillion
     *
     * @param value The unit as PartsPerBillion to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    public static FromPartsPerBillion(value: number): Ratio {
        return new Ratio(value, RatioUnits.PartsPerBillion);
    }

    /**
     * Create a new Ratio instance from a PartsPerTrillion
     *
     * @param value The unit as PartsPerTrillion to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    public static FromPartsPerTrillion(value: number): Ratio {
        return new Ratio(value, RatioUnits.PartsPerTrillion);
    }

    /**
     * Gets the base unit enumeration associated with Ratio
     * @returns The unit enumeration that can be used to interact with this type
     */
    public static getUnitEnum(): typeof RatioUnits {
        return RatioUnits;
    }

    /**
     * Create API DTO represent a Ratio unit.
     * @param holdInUnit The specific Ratio unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: RatioUnits = RatioUnits.DecimalFractions): RatioDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Ratio unit from an API DTO representation.
     * @param dtoRatio The Ratio API DTO representation
     */
    public static FromDto(dtoRatio: RatioDto): Ratio {
        return new Ratio(dtoRatio.value, dtoRatio.unit);
    }

    /**
     * Convert Ratio to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: RatioUnits): number {
        switch (toUnit) {
            case RatioUnits.DecimalFractions: return this.DecimalFractions;
            case RatioUnits.Percent: return this.Percent;
            case RatioUnits.PartsPerThousand: return this.PartsPerThousand;
            case RatioUnits.PartsPerMillion: return this.PartsPerMillion;
            case RatioUnits.PartsPerBillion: return this.PartsPerBillion;
            case RatioUnits.PartsPerTrillion: return this.PartsPerTrillion;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: RatioUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case RatioUnits.DecimalFractions: return this.value;
                case RatioUnits.Percent: return super.internalMultiply(this.value, 1e2);
                case RatioUnits.PartsPerThousand: return super.internalMultiply(this.value, 1e3);
                case RatioUnits.PartsPerMillion: return super.internalMultiply(this.value, 1e6);
                case RatioUnits.PartsPerBillion: return super.internalMultiply(this.value, 1e9);
                case RatioUnits.PartsPerTrillion: return super.internalMultiply(this.value, 1e12);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case RatioUnits.DecimalFractions: return this.value;
            case RatioUnits.Percent: return this.value * 1e2;
            case RatioUnits.PartsPerThousand: return this.value * 1e3;
            case RatioUnits.PartsPerMillion: return this.value * 1e6;
            case RatioUnits.PartsPerBillion: return this.value * 1e9;
            case RatioUnits.PartsPerTrillion: return this.value * 1e12;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: RatioUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case RatioUnits.DecimalFractions: return value;
                case RatioUnits.Percent: return super.internalDivide(value, 1e2);
                case RatioUnits.PartsPerThousand: return super.internalDivide(value, 1e3);
                case RatioUnits.PartsPerMillion: return super.internalDivide(value, 1e6);
                case RatioUnits.PartsPerBillion: return super.internalDivide(value, 1e9);
                case RatioUnits.PartsPerTrillion: return super.internalDivide(value, 1e12);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case RatioUnits.DecimalFractions: return value;
            case RatioUnits.Percent: return value / 1e2;
            case RatioUnits.PartsPerThousand: return value / 1e3;
            case RatioUnits.PartsPerMillion: return value / 1e6;
            case RatioUnits.PartsPerBillion: return value / 1e9;
            case RatioUnits.PartsPerTrillion: return value / 1e12;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Ratio to string.
     * Note! the default format for Ratio is DecimalFractions.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Ratio.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Ratio.
     */
    public toString(unit: RatioUnits = RatioUnits.DecimalFractions, fractionalDigits?: number): string {

        switch (unit) {
            
            case RatioUnits.DecimalFractions:
                return super.truncateFractionDigits(this.DecimalFractions, fractionalDigits) + ` `;
            case RatioUnits.Percent:
                return super.truncateFractionDigits(this.Percent, fractionalDigits) + ` %`;
            case RatioUnits.PartsPerThousand:
                return super.truncateFractionDigits(this.PartsPerThousand, fractionalDigits) + ` ‰`;
            case RatioUnits.PartsPerMillion:
                return super.truncateFractionDigits(this.PartsPerMillion, fractionalDigits) + ` ppm`;
            case RatioUnits.PartsPerBillion:
                return super.truncateFractionDigits(this.PartsPerBillion, fractionalDigits) + ` ppb`;
            case RatioUnits.PartsPerTrillion:
                return super.truncateFractionDigits(this.PartsPerTrillion, fractionalDigits) + ` ppt`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Ratio unit abbreviation.
     * Note! the default abbreviation for Ratio is DecimalFractions.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Ratio.
     * @returns The abbreviation string of Ratio.
     */
    public getUnitAbbreviation(unitAbbreviation: RatioUnits = RatioUnits.DecimalFractions): string {

        switch (unitAbbreviation) {
            
            case RatioUnits.DecimalFractions:
                return ``;
            case RatioUnits.Percent:
                return `%`;
            case RatioUnits.PartsPerThousand:
                return `‰`;
            case RatioUnits.PartsPerMillion:
                return `ppm`;
            case RatioUnits.PartsPerBillion:
                return `ppb`;
            case RatioUnits.PartsPerTrillion:
                return `ppt`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Ratio are equals to the current Ratio.
     * @param ratio The other Ratio.
     * @returns True if the given Ratio are equal to the current Ratio.
     */
    public equals(ratio: Ratio): boolean {
        return super.internalEquals(this.value, ratio.BaseValue);
    }

    /**
     * Compare the given Ratio against the current Ratio.
     * @param ratio The other Ratio.
     * @returns 0 if they are equal, -1 if the current Ratio is less then other, 1 if the current Ratio is greater then other.
     */
    public compareTo(ratio: Ratio): number {
        return super.internalCompareTo(this.value, ratio.BaseValue);
    }

    /**
     * Add the given Ratio with the current Ratio.
     * @param ratio The other Ratio.
     * @returns A new Ratio instance with the results.
     */
    public add(ratio: Ratio): Ratio {
        return new Ratio(super.internalAdd(this.value, ratio.BaseValue))
    }

    /**
     * Subtract the given Ratio with the current Ratio.
     * @param ratio The other Ratio.
     * @returns A new Ratio instance with the results.
     */
    public subtract(ratio: Ratio): Ratio {
        return new Ratio(super.internalSubtract(this.value, ratio.BaseValue))
    }

    /**
     * Multiply the given Ratio with the current Ratio.
     * @param ratio The other Ratio.
     * @returns A new Ratio instance with the results.
     */
    public multiply(ratio: Ratio): Ratio {
        return new Ratio(super.internalMultiply(this.value, ratio.BaseValue))
    }

    /**
     * Divide the given Ratio with the current Ratio.
     * @param ratio The other Ratio.
     * @returns A new Ratio instance with the results.
     */
    public divide(ratio: Ratio): Ratio {
        return new Ratio(super.internalDivide(this.value, ratio.BaseValue))
    }

    /**
     * Modulo the given Ratio with the current Ratio.
     * @param ratio The other Ratio.
     * @returns A new Ratio instance with the results.
     */
    public modulo(ratio: Ratio): Ratio {
        return new Ratio(super.internalModulo(this.value, ratio.BaseValue))
    }

    /**
     * Pow the given Ratio with the current Ratio.
     * @param ratio The other Ratio.
     * @returns A new Ratio instance with the results.
     */
    public pow(ratio: Ratio): Ratio {
        return new Ratio(super.internalPow(this.value, ratio.BaseValue))
    }
}
