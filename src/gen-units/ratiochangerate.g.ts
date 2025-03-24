import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a RatioChangeRate */
export interface RatioChangeRateDto {
    /** The value of the RatioChangeRate */
    value: number;
    /**  The specific unit that the RatioChangeRate value is representing */
    unit: RatioChangeRateUnits;
}

/** RatioChangeRateUnits enumeration */
export enum RatioChangeRateUnits {
    /** */
    PercentsPerSecond = "PercentPerSecond",
    /** */
    DecimalFractionsPerSecond = "DecimalFractionPerSecond"
}

/** The change in ratio per unit of time. */
export class RatioChangeRate extends BaseUnit {
    protected value: number;
    private percentspersecondLazy: number | null = null;
    private decimalfractionspersecondLazy: number | null = null;

    /**
     * Create a new RatioChangeRate.
     * @param value The value.
     * @param fromUnit The ‘RatioChangeRate’ unit to create from.
     * The default unit is DecimalFractionsPerSecond
     */
    public constructor(value: number, fromUnit: RatioChangeRateUnits = RatioChangeRateUnits.DecimalFractionsPerSecond) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RatioChangeRate is DecimalFractionsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): RatioChangeRateUnits.DecimalFractionsPerSecond {
        return RatioChangeRateUnits.DecimalFractionsPerSecond
    }

    /** */
    public get PercentsPerSecond(): number {
        if(this.percentspersecondLazy !== null){
            return this.percentspersecondLazy;
        }
        return this.percentspersecondLazy = this.convertFromBase(RatioChangeRateUnits.PercentsPerSecond);
    }

    /** */
    public get DecimalFractionsPerSecond(): number {
        if(this.decimalfractionspersecondLazy !== null){
            return this.decimalfractionspersecondLazy;
        }
        return this.decimalfractionspersecondLazy = this.convertFromBase(RatioChangeRateUnits.DecimalFractionsPerSecond);
    }

    /**
     * Create a new RatioChangeRate instance from a PercentsPerSecond
     *
     * @param value The unit as PercentsPerSecond to create a new RatioChangeRate from.
     * @returns The new RatioChangeRate instance.
     */
    public static FromPercentsPerSecond(value: number): RatioChangeRate {
        return new RatioChangeRate(value, RatioChangeRateUnits.PercentsPerSecond);
    }

    /**
     * Create a new RatioChangeRate instance from a DecimalFractionsPerSecond
     *
     * @param value The unit as DecimalFractionsPerSecond to create a new RatioChangeRate from.
     * @returns The new RatioChangeRate instance.
     */
    public static FromDecimalFractionsPerSecond(value: number): RatioChangeRate {
        return new RatioChangeRate(value, RatioChangeRateUnits.DecimalFractionsPerSecond);
    }

    /**
     * Gets the base unit enumeration associated with RatioChangeRate
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof RatioChangeRateUnits {
        return RatioChangeRateUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): RatioChangeRateUnits.DecimalFractionsPerSecond {
        return RatioChangeRateUnits.DecimalFractionsPerSecond;
    }

    /**
     * Create API DTO represent a RatioChangeRate unit.
     * @param holdInUnit The specific RatioChangeRate unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: RatioChangeRateUnits = RatioChangeRateUnits.DecimalFractionsPerSecond): RatioChangeRateDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a RatioChangeRate unit from an API DTO representation.
     * @param dtoRatioChangeRate The RatioChangeRate API DTO representation
     */
    public static FromDto(dtoRatioChangeRate: RatioChangeRateDto): RatioChangeRate {
        return new RatioChangeRate(dtoRatioChangeRate.value, dtoRatioChangeRate.unit);
    }

    /**
     * Convert RatioChangeRate to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: RatioChangeRateUnits): number {
        switch (toUnit) {
            case RatioChangeRateUnits.PercentsPerSecond: return this.PercentsPerSecond;
            case RatioChangeRateUnits.DecimalFractionsPerSecond: return this.DecimalFractionsPerSecond;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: RatioChangeRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case RatioChangeRateUnits.PercentsPerSecond: return super.internalMultiply(this.value, 1e2);
                case RatioChangeRateUnits.DecimalFractionsPerSecond: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case RatioChangeRateUnits.PercentsPerSecond: return this.value * 1e2;
            case RatioChangeRateUnits.DecimalFractionsPerSecond: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: RatioChangeRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case RatioChangeRateUnits.PercentsPerSecond: return super.internalDivide(value, 1e2);
                case RatioChangeRateUnits.DecimalFractionsPerSecond: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case RatioChangeRateUnits.PercentsPerSecond: return value / 1e2;
            case RatioChangeRateUnits.DecimalFractionsPerSecond: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the RatioChangeRate to string.
     * Note! the default format for RatioChangeRate is DecimalFractionsPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RatioChangeRate.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the RatioChangeRate.
     */
    public toString(unit: RatioChangeRateUnits = RatioChangeRateUnits.DecimalFractionsPerSecond, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case RatioChangeRateUnits.PercentsPerSecond:
                return super.truncateFractionDigits(this.PercentsPerSecond, options as ToStringOptions) + ` %/s`;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return super.truncateFractionDigits(this.DecimalFractionsPerSecond, options as ToStringOptions) + ` /s`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RatioChangeRate unit abbreviation.
     * Note! the default abbreviation for RatioChangeRate is DecimalFractionsPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RatioChangeRate.
     * @returns The abbreviation string of RatioChangeRate.
     */
    public getUnitAbbreviation(unitAbbreviation: RatioChangeRateUnits = RatioChangeRateUnits.DecimalFractionsPerSecond): string {

        switch (unitAbbreviation) {
            
            case RatioChangeRateUnits.PercentsPerSecond:
                return `%/s`;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return `/s`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given RatioChangeRate are equals to the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns True if the given RatioChangeRate are equal to the current RatioChangeRate.
     */
    public equals(ratioChangeRate: RatioChangeRate): boolean {
        return super.internalEquals(this.value, ratioChangeRate.BaseValue);
    }

    /**
     * Compare the given RatioChangeRate against the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns 0 if they are equal, -1 if the current RatioChangeRate is less then other, 1 if the current RatioChangeRate is greater then other.
     */
    public compareTo(ratioChangeRate: RatioChangeRate): number {
        return super.internalCompareTo(this.value, ratioChangeRate.BaseValue);
    }

    /**
     * Add the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    public add(ratioChangeRate: RatioChangeRate): RatioChangeRate {
        return new RatioChangeRate(super.internalAdd(this.value, ratioChangeRate.BaseValue))
    }

    /**
     * Subtract the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    public subtract(ratioChangeRate: RatioChangeRate): RatioChangeRate {
        return new RatioChangeRate(super.internalSubtract(this.value, ratioChangeRate.BaseValue))
    }

    /**
     * Multiply the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    public multiply(ratioChangeRate: RatioChangeRate): RatioChangeRate {
        return new RatioChangeRate(super.internalMultiply(this.value, ratioChangeRate.BaseValue))
    }

    /**
     * Divide the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    public divide(ratioChangeRate: RatioChangeRate): RatioChangeRate {
        return new RatioChangeRate(super.internalDivide(this.value, ratioChangeRate.BaseValue))
    }

    /**
     * Modulo the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    public modulo(ratioChangeRate: RatioChangeRate): RatioChangeRate {
        return new RatioChangeRate(super.internalModulo(this.value, ratioChangeRate.BaseValue))
    }

    /**
     * Pow the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    public pow(ratioChangeRate: RatioChangeRate): RatioChangeRate {
        return new RatioChangeRate(super.internalPow(this.value, ratioChangeRate.BaseValue))
    }
}
