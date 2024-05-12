import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a RelativeHumidity */
export interface RelativeHumidityDto {
    /** The value of the RelativeHumidity */
    value: number;
    /**  The specific unit that the RelativeHumidity value is representing */
    unit: RelativeHumidityUnits;
}

/** RelativeHumidityUnits enumeration */
export enum RelativeHumidityUnits {
    /** */
    Percent = "Percent"
}

/** Relative humidity is a ratio of the actual water vapor present in the air to the maximum water vapor in the air at the given temperature. */
export class RelativeHumidity extends BaseUnit {
    protected value: number;
    private percentLazy: number | null = null;

    /**
     * Create a new RelativeHumidity.
     * @param value The value.
     * @param fromUnit The ‘RelativeHumidity’ unit to create from.
     * The default unit is Percent
     */
    public constructor(value: number, fromUnit: RelativeHumidityUnits = RelativeHumidityUnits.Percent) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RelativeHumidity is Percent.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get getBaseUnit(): RelativeHumidityUnits.Percent {
        return RelativeHumidityUnits.Percent
    }

    /** */
    public get Percent(): number {
        if(this.percentLazy !== null){
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(RelativeHumidityUnits.Percent);
    }

    /**
     * Create a new RelativeHumidity instance from a Percent
     *
     * @param value The unit as Percent to create a new RelativeHumidity from.
     * @returns The new RelativeHumidity instance.
     */
    public static FromPercent(value: number): RelativeHumidity {
        return new RelativeHumidity(value, RelativeHumidityUnits.Percent);
    }

    /**
     * Gets the base unit enumeration associated with RelativeHumidity
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof RelativeHumidityUnits {
        return RelativeHumidityUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): RelativeHumidityUnits.Percent {
        return RelativeHumidityUnits.Percent;
    }

    /**
     * Create API DTO represent a RelativeHumidity unit.
     * @param holdInUnit The specific RelativeHumidity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: RelativeHumidityUnits = RelativeHumidityUnits.Percent): RelativeHumidityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a RelativeHumidity unit from an API DTO representation.
     * @param dtoRelativeHumidity The RelativeHumidity API DTO representation
     */
    public static FromDto(dtoRelativeHumidity: RelativeHumidityDto): RelativeHumidity {
        return new RelativeHumidity(dtoRelativeHumidity.value, dtoRelativeHumidity.unit);
    }

    /**
     * Convert RelativeHumidity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: RelativeHumidityUnits): number {
        switch (toUnit) {
            case RelativeHumidityUnits.Percent: return this.Percent;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: RelativeHumidityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case RelativeHumidityUnits.Percent: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case RelativeHumidityUnits.Percent: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: RelativeHumidityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case RelativeHumidityUnits.Percent: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case RelativeHumidityUnits.Percent: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the RelativeHumidity to string.
     * Note! the default format for RelativeHumidity is Percent.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RelativeHumidity.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the RelativeHumidity.
     */
    public toString(unit: RelativeHumidityUnits = RelativeHumidityUnits.Percent, fractionalDigits?: number): string {

        switch (unit) {
            
            case RelativeHumidityUnits.Percent:
                return super.truncateFractionDigits(this.Percent, fractionalDigits) + ` %RH`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RelativeHumidity unit abbreviation.
     * Note! the default abbreviation for RelativeHumidity is Percent.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RelativeHumidity.
     * @returns The abbreviation string of RelativeHumidity.
     */
    public getUnitAbbreviation(unitAbbreviation: RelativeHumidityUnits = RelativeHumidityUnits.Percent): string {

        switch (unitAbbreviation) {
            
            case RelativeHumidityUnits.Percent:
                return `%RH`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given RelativeHumidity are equals to the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns True if the given RelativeHumidity are equal to the current RelativeHumidity.
     */
    public equals(relativeHumidity: RelativeHumidity): boolean {
        return super.internalEquals(this.value, relativeHumidity.BaseValue);
    }

    /**
     * Compare the given RelativeHumidity against the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns 0 if they are equal, -1 if the current RelativeHumidity is less then other, 1 if the current RelativeHumidity is greater then other.
     */
    public compareTo(relativeHumidity: RelativeHumidity): number {
        return super.internalCompareTo(this.value, relativeHumidity.BaseValue);
    }

    /**
     * Add the given RelativeHumidity with the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns A new RelativeHumidity instance with the results.
     */
    public add(relativeHumidity: RelativeHumidity): RelativeHumidity {
        return new RelativeHumidity(super.internalAdd(this.value, relativeHumidity.BaseValue))
    }

    /**
     * Subtract the given RelativeHumidity with the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns A new RelativeHumidity instance with the results.
     */
    public subtract(relativeHumidity: RelativeHumidity): RelativeHumidity {
        return new RelativeHumidity(super.internalSubtract(this.value, relativeHumidity.BaseValue))
    }

    /**
     * Multiply the given RelativeHumidity with the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns A new RelativeHumidity instance with the results.
     */
    public multiply(relativeHumidity: RelativeHumidity): RelativeHumidity {
        return new RelativeHumidity(super.internalMultiply(this.value, relativeHumidity.BaseValue))
    }

    /**
     * Divide the given RelativeHumidity with the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns A new RelativeHumidity instance with the results.
     */
    public divide(relativeHumidity: RelativeHumidity): RelativeHumidity {
        return new RelativeHumidity(super.internalDivide(this.value, relativeHumidity.BaseValue))
    }

    /**
     * Modulo the given RelativeHumidity with the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns A new RelativeHumidity instance with the results.
     */
    public modulo(relativeHumidity: RelativeHumidity): RelativeHumidity {
        return new RelativeHumidity(super.internalModulo(this.value, relativeHumidity.BaseValue))
    }

    /**
     * Pow the given RelativeHumidity with the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns A new RelativeHumidity instance with the results.
     */
    public pow(relativeHumidity: RelativeHumidity): RelativeHumidity {
        return new RelativeHumidity(super.internalPow(this.value, relativeHumidity.BaseValue))
    }
}
