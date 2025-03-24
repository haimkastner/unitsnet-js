import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a SolidAngle */
export interface SolidAngleDto {
    /** The value of the SolidAngle */
    value: number;
    /**  The specific unit that the SolidAngle value is representing */
    unit: SolidAngleUnits;
}

/** SolidAngleUnits enumeration */
export enum SolidAngleUnits {
    /** */
    Steradians = "Steradian"
}

/** In geometry, a solid angle is the two-dimensional angle in three-dimensional space that an object subtends at a point. */
export class SolidAngle extends BaseUnit {
    protected value: number;
    private steradiansLazy: number | null = null;

    /**
     * Create a new SolidAngle.
     * @param value The value.
     * @param fromUnit The ‘SolidAngle’ unit to create from.
     * The default unit is Steradians
     */
    public constructor(value: number, fromUnit: SolidAngleUnits = SolidAngleUnits.Steradians) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SolidAngle is Steradians.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): SolidAngleUnits.Steradians {
        return SolidAngleUnits.Steradians
    }

    /** */
    public get Steradians(): number {
        if(this.steradiansLazy !== null){
            return this.steradiansLazy;
        }
        return this.steradiansLazy = this.convertFromBase(SolidAngleUnits.Steradians);
    }

    /**
     * Create a new SolidAngle instance from a Steradians
     *
     * @param value The unit as Steradians to create a new SolidAngle from.
     * @returns The new SolidAngle instance.
     */
    public static FromSteradians(value: number): SolidAngle {
        return new SolidAngle(value, SolidAngleUnits.Steradians);
    }

    /**
     * Gets the base unit enumeration associated with SolidAngle
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof SolidAngleUnits {
        return SolidAngleUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): SolidAngleUnits.Steradians {
        return SolidAngleUnits.Steradians;
    }

    /**
     * Create API DTO represent a SolidAngle unit.
     * @param holdInUnit The specific SolidAngle unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: SolidAngleUnits = SolidAngleUnits.Steradians): SolidAngleDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a SolidAngle unit from an API DTO representation.
     * @param dtoSolidAngle The SolidAngle API DTO representation
     */
    public static FromDto(dtoSolidAngle: SolidAngleDto): SolidAngle {
        return new SolidAngle(dtoSolidAngle.value, dtoSolidAngle.unit);
    }

    /**
     * Convert SolidAngle to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: SolidAngleUnits): number {
        switch (toUnit) {
            case SolidAngleUnits.Steradians: return this.Steradians;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: SolidAngleUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case SolidAngleUnits.Steradians: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case SolidAngleUnits.Steradians: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: SolidAngleUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case SolidAngleUnits.Steradians: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case SolidAngleUnits.Steradians: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the SolidAngle to string.
     * Note! the default format for SolidAngle is Steradians.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the SolidAngle.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the SolidAngle.
     */
    public toString(unit: SolidAngleUnits = SolidAngleUnits.Steradians, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case SolidAngleUnits.Steradians:
                return super.truncateFractionDigits(this.Steradians, options as ToStringOptions) + ` sr`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get SolidAngle unit abbreviation.
     * Note! the default abbreviation for SolidAngle is Steradians.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the SolidAngle.
     * @returns The abbreviation string of SolidAngle.
     */
    public getUnitAbbreviation(unitAbbreviation: SolidAngleUnits = SolidAngleUnits.Steradians): string {

        switch (unitAbbreviation) {
            
            case SolidAngleUnits.Steradians:
                return `sr`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given SolidAngle are equals to the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns True if the given SolidAngle are equal to the current SolidAngle.
     */
    public equals(solidAngle: SolidAngle): boolean {
        return super.internalEquals(this.value, solidAngle.BaseValue);
    }

    /**
     * Compare the given SolidAngle against the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns 0 if they are equal, -1 if the current SolidAngle is less then other, 1 if the current SolidAngle is greater then other.
     */
    public compareTo(solidAngle: SolidAngle): number {
        return super.internalCompareTo(this.value, solidAngle.BaseValue);
    }

    /**
     * Add the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    public add(solidAngle: SolidAngle): SolidAngle {
        return new SolidAngle(super.internalAdd(this.value, solidAngle.BaseValue))
    }

    /**
     * Subtract the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    public subtract(solidAngle: SolidAngle): SolidAngle {
        return new SolidAngle(super.internalSubtract(this.value, solidAngle.BaseValue))
    }

    /**
     * Multiply the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    public multiply(solidAngle: SolidAngle): SolidAngle {
        return new SolidAngle(super.internalMultiply(this.value, solidAngle.BaseValue))
    }

    /**
     * Divide the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    public divide(solidAngle: SolidAngle): SolidAngle {
        return new SolidAngle(super.internalDivide(this.value, solidAngle.BaseValue))
    }

    /**
     * Modulo the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    public modulo(solidAngle: SolidAngle): SolidAngle {
        return new SolidAngle(super.internalModulo(this.value, solidAngle.BaseValue))
    }

    /**
     * Pow the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    public pow(solidAngle: SolidAngle): SolidAngle {
        return new SolidAngle(super.internalPow(this.value, solidAngle.BaseValue))
    }
}
