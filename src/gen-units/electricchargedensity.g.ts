import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricChargeDensity */
export interface ElectricChargeDensityDto {
    /** The value of the ElectricChargeDensity */
    value: number;
    /**  The specific unit that the ElectricChargeDensity value is representing */
    unit: ElectricChargeDensityUnits;
}

/** ElectricChargeDensityUnits enumeration */
export enum ElectricChargeDensityUnits {
    /** */
    CoulombsPerCubicMeter = "CoulombPerCubicMeter"
}

/** In electromagnetism, charge density is a measure of the amount of electric charge per volume. */
export class ElectricChargeDensity extends BaseUnit {
    protected value: number;
    private coulombspercubicmeterLazy: number | null = null;

    /**
     * Create a new ElectricChargeDensity.
     * @param value The value.
     * @param fromUnit The ‘ElectricChargeDensity’ unit to create from.
     * The default unit is CoulombsPerCubicMeter
     */
    public constructor(value: number, fromUnit: ElectricChargeDensityUnits = ElectricChargeDensityUnits.CoulombsPerCubicMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricChargeDensity is CoulombsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricChargeDensityUnits.CoulombsPerCubicMeter {
        return ElectricChargeDensityUnits.CoulombsPerCubicMeter
    }

    /** */
    public get CoulombsPerCubicMeter(): number {
        if(this.coulombspercubicmeterLazy !== null){
            return this.coulombspercubicmeterLazy;
        }
        return this.coulombspercubicmeterLazy = this.convertFromBase(ElectricChargeDensityUnits.CoulombsPerCubicMeter);
    }

    /**
     * Create a new ElectricChargeDensity instance from a CoulombsPerCubicMeter
     *
     * @param value The unit as CoulombsPerCubicMeter to create a new ElectricChargeDensity from.
     * @returns The new ElectricChargeDensity instance.
     */
    public static FromCoulombsPerCubicMeter(value: number): ElectricChargeDensity {
        return new ElectricChargeDensity(value, ElectricChargeDensityUnits.CoulombsPerCubicMeter);
    }

    /**
     * Gets the base unit enumeration associated with ElectricChargeDensity
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricChargeDensityUnits {
        return ElectricChargeDensityUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricChargeDensityUnits.CoulombsPerCubicMeter {
        return ElectricChargeDensityUnits.CoulombsPerCubicMeter;
    }

    /**
     * Create API DTO represent a ElectricChargeDensity unit.
     * @param holdInUnit The specific ElectricChargeDensity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricChargeDensityUnits = ElectricChargeDensityUnits.CoulombsPerCubicMeter): ElectricChargeDensityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricChargeDensity unit from an API DTO representation.
     * @param dtoElectricChargeDensity The ElectricChargeDensity API DTO representation
     */
    public static FromDto(dtoElectricChargeDensity: ElectricChargeDensityDto): ElectricChargeDensity {
        return new ElectricChargeDensity(dtoElectricChargeDensity.value, dtoElectricChargeDensity.unit);
    }

    /**
     * Convert ElectricChargeDensity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricChargeDensityUnits): number {
        switch (toUnit) {
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter: return this.CoulombsPerCubicMeter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricChargeDensityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricChargeDensityUnits.CoulombsPerCubicMeter: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricChargeDensityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricChargeDensityUnits.CoulombsPerCubicMeter: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricChargeDensity to string.
     * Note! the default format for ElectricChargeDensity is CoulombsPerCubicMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricChargeDensity.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricChargeDensity.
     */
    public toString(unit: ElectricChargeDensityUnits = ElectricChargeDensityUnits.CoulombsPerCubicMeter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                return super.truncateFractionDigits(this.CoulombsPerCubicMeter, options as ToStringOptions) + ` C/m³`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricChargeDensity unit abbreviation.
     * Note! the default abbreviation for ElectricChargeDensity is CoulombsPerCubicMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricChargeDensity.
     * @returns The abbreviation string of ElectricChargeDensity.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricChargeDensityUnits = ElectricChargeDensityUnits.CoulombsPerCubicMeter): string {

        switch (unitAbbreviation) {
            
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                return `C/m³`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricChargeDensity are equals to the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns True if the given ElectricChargeDensity are equal to the current ElectricChargeDensity.
     */
    public equals(electricChargeDensity: ElectricChargeDensity): boolean {
        return super.internalEquals(this.value, electricChargeDensity.BaseValue);
    }

    /**
     * Compare the given ElectricChargeDensity against the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns 0 if they are equal, -1 if the current ElectricChargeDensity is less then other, 1 if the current ElectricChargeDensity is greater then other.
     */
    public compareTo(electricChargeDensity: ElectricChargeDensity): number {
        return super.internalCompareTo(this.value, electricChargeDensity.BaseValue);
    }

    /**
     * Add the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    public add(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity {
        return new ElectricChargeDensity(super.internalAdd(this.value, electricChargeDensity.BaseValue))
    }

    /**
     * Subtract the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    public subtract(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity {
        return new ElectricChargeDensity(super.internalSubtract(this.value, electricChargeDensity.BaseValue))
    }

    /**
     * Multiply the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    public multiply(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity {
        return new ElectricChargeDensity(super.internalMultiply(this.value, electricChargeDensity.BaseValue))
    }

    /**
     * Divide the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    public divide(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity {
        return new ElectricChargeDensity(super.internalDivide(this.value, electricChargeDensity.BaseValue))
    }

    /**
     * Modulo the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    public modulo(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity {
        return new ElectricChargeDensity(super.internalModulo(this.value, electricChargeDensity.BaseValue))
    }

    /**
     * Pow the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    public pow(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity {
        return new ElectricChargeDensity(super.internalPow(this.value, electricChargeDensity.BaseValue))
    }
}
