import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a Level */
export interface LevelDto {
    /** The value of the Level */
    value: number;
    /**  The specific unit that the Level value is representing */
    unit: LevelUnits;
}

/** LevelUnits enumeration */
export enum LevelUnits {
    /** */
    Decibels = "Decibel",
    /** */
    Nepers = "Neper"
}

/** Level is the logarithm of the ratio of a quantity Q to a reference value of that quantity, Q₀, expressed in dimensionless units. */
export class Level extends BaseUnit {
    protected value: number;
    private decibelsLazy: number | null = null;
    private nepersLazy: number | null = null;

    /**
     * Create a new Level.
     * @param value The value.
     * @param fromUnit The ‘Level’ unit to create from.
     * The default unit is Decibels
     */
    public constructor(value: number, fromUnit: LevelUnits = LevelUnits.Decibels) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Level is Decibels.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): LevelUnits.Decibels {
        return LevelUnits.Decibels
    }

    /** */
    public get Decibels(): number {
        if(this.decibelsLazy !== null){
            return this.decibelsLazy;
        }
        return this.decibelsLazy = this.convertFromBase(LevelUnits.Decibels);
    }

    /** */
    public get Nepers(): number {
        if(this.nepersLazy !== null){
            return this.nepersLazy;
        }
        return this.nepersLazy = this.convertFromBase(LevelUnits.Nepers);
    }

    /**
     * Create a new Level instance from a Decibels
     *
     * @param value The unit as Decibels to create a new Level from.
     * @returns The new Level instance.
     */
    public static FromDecibels(value: number): Level {
        return new Level(value, LevelUnits.Decibels);
    }

    /**
     * Create a new Level instance from a Nepers
     *
     * @param value The unit as Nepers to create a new Level from.
     * @returns The new Level instance.
     */
    public static FromNepers(value: number): Level {
        return new Level(value, LevelUnits.Nepers);
    }

    /**
     * Gets the base unit enumeration associated with Level
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof LevelUnits {
        return LevelUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): LevelUnits.Decibels {
        return LevelUnits.Decibels;
    }

    /**
     * Create API DTO represent a Level unit.
     * @param holdInUnit The specific Level unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: LevelUnits = LevelUnits.Decibels): LevelDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Level unit from an API DTO representation.
     * @param dtoLevel The Level API DTO representation
     */
    public static FromDto(dtoLevel: LevelDto): Level {
        return new Level(dtoLevel.value, dtoLevel.unit);
    }

    /**
     * Convert Level to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: LevelUnits): number {
        switch (toUnit) {
            case LevelUnits.Decibels: return this.Decibels;
            case LevelUnits.Nepers: return this.Nepers;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: LevelUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case LevelUnits.Decibels: return this.value;
                case LevelUnits.Nepers: return super.internalMultiply(0.115129254, this.value);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case LevelUnits.Decibels: return this.value;
            case LevelUnits.Nepers: return 0.115129254 * this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: LevelUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case LevelUnits.Decibels: return value;
                case LevelUnits.Nepers: {
                    const v3 = super.internalDivide(1, 0.115129254);
                    return super.internalMultiply(v3, value);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case LevelUnits.Decibels: return value;
            case LevelUnits.Nepers: return (1 / 0.115129254) * value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Level to string.
     * Note! the default format for Level is Decibels.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Level.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the Level.
     */
    public toString(unit: LevelUnits = LevelUnits.Decibels, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case LevelUnits.Decibels:
                return super.truncateFractionDigits(this.Decibels, options as ToStringOptions) + ` dB`;
            case LevelUnits.Nepers:
                return super.truncateFractionDigits(this.Nepers, options as ToStringOptions) + ` Np`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Level unit abbreviation.
     * Note! the default abbreviation for Level is Decibels.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Level.
     * @returns The abbreviation string of Level.
     */
    public getUnitAbbreviation(unitAbbreviation: LevelUnits = LevelUnits.Decibels): string {

        switch (unitAbbreviation) {
            
            case LevelUnits.Decibels:
                return `dB`;
            case LevelUnits.Nepers:
                return `Np`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Level are equals to the current Level.
     * @param level The other Level.
     * @returns True if the given Level are equal to the current Level.
     */
    public equals(level: Level): boolean {
        return super.internalEquals(this.value, level.BaseValue);
    }

    /**
     * Compare the given Level against the current Level.
     * @param level The other Level.
     * @returns 0 if they are equal, -1 if the current Level is less then other, 1 if the current Level is greater then other.
     */
    public compareTo(level: Level): number {
        return super.internalCompareTo(this.value, level.BaseValue);
    }

    /**
     * Add the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    public add(level: Level): Level {
        return new Level(super.internalAdd(this.value, level.BaseValue))
    }

    /**
     * Subtract the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    public subtract(level: Level): Level {
        return new Level(super.internalSubtract(this.value, level.BaseValue))
    }

    /**
     * Multiply the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    public multiply(level: Level): Level {
        return new Level(super.internalMultiply(this.value, level.BaseValue))
    }

    /**
     * Divide the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    public divide(level: Level): Level {
        return new Level(super.internalDivide(this.value, level.BaseValue))
    }

    /**
     * Modulo the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    public modulo(level: Level): Level {
        return new Level(super.internalModulo(this.value, level.BaseValue))
    }

    /**
     * Pow the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    public pow(level: Level): Level {
        return new Level(super.internalPow(this.value, level.BaseValue))
    }
}
