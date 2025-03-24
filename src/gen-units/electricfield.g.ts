import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricField */
export interface ElectricFieldDto {
    /** The value of the ElectricField */
    value: number;
    /**  The specific unit that the ElectricField value is representing */
    unit: ElectricFieldUnits;
}

/** ElectricFieldUnits enumeration */
export enum ElectricFieldUnits {
    /** */
    VoltsPerMeter = "VoltPerMeter"
}

/** An electric field is a force field that surrounds electric charges that attracts or repels other electric charges. */
export class ElectricField extends BaseUnit {
    protected value: number;
    private voltspermeterLazy: number | null = null;

    /**
     * Create a new ElectricField.
     * @param value The value.
     * @param fromUnit The ‘ElectricField’ unit to create from.
     * The default unit is VoltsPerMeter
     */
    public constructor(value: number, fromUnit: ElectricFieldUnits = ElectricFieldUnits.VoltsPerMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricField is VoltsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricFieldUnits.VoltsPerMeter {
        return ElectricFieldUnits.VoltsPerMeter
    }

    /** */
    public get VoltsPerMeter(): number {
        if(this.voltspermeterLazy !== null){
            return this.voltspermeterLazy;
        }
        return this.voltspermeterLazy = this.convertFromBase(ElectricFieldUnits.VoltsPerMeter);
    }

    /**
     * Create a new ElectricField instance from a VoltsPerMeter
     *
     * @param value The unit as VoltsPerMeter to create a new ElectricField from.
     * @returns The new ElectricField instance.
     */
    public static FromVoltsPerMeter(value: number): ElectricField {
        return new ElectricField(value, ElectricFieldUnits.VoltsPerMeter);
    }

    /**
     * Gets the base unit enumeration associated with ElectricField
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricFieldUnits {
        return ElectricFieldUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricFieldUnits.VoltsPerMeter {
        return ElectricFieldUnits.VoltsPerMeter;
    }

    /**
     * Create API DTO represent a ElectricField unit.
     * @param holdInUnit The specific ElectricField unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricFieldUnits = ElectricFieldUnits.VoltsPerMeter): ElectricFieldDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricField unit from an API DTO representation.
     * @param dtoElectricField The ElectricField API DTO representation
     */
    public static FromDto(dtoElectricField: ElectricFieldDto): ElectricField {
        return new ElectricField(dtoElectricField.value, dtoElectricField.unit);
    }

    /**
     * Convert ElectricField to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricFieldUnits): number {
        switch (toUnit) {
            case ElectricFieldUnits.VoltsPerMeter: return this.VoltsPerMeter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricFieldUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricFieldUnits.VoltsPerMeter: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricFieldUnits.VoltsPerMeter: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricFieldUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricFieldUnits.VoltsPerMeter: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricFieldUnits.VoltsPerMeter: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricField to string.
     * Note! the default format for ElectricField is VoltsPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricField.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricField.
     */
    public toString(unit: ElectricFieldUnits = ElectricFieldUnits.VoltsPerMeter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricFieldUnits.VoltsPerMeter:
                return super.truncateFractionDigits(this.VoltsPerMeter, options as ToStringOptions) + ` V/m`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricField unit abbreviation.
     * Note! the default abbreviation for ElectricField is VoltsPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricField.
     * @returns The abbreviation string of ElectricField.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricFieldUnits = ElectricFieldUnits.VoltsPerMeter): string {

        switch (unitAbbreviation) {
            
            case ElectricFieldUnits.VoltsPerMeter:
                return `V/m`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricField are equals to the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns True if the given ElectricField are equal to the current ElectricField.
     */
    public equals(electricField: ElectricField): boolean {
        return super.internalEquals(this.value, electricField.BaseValue);
    }

    /**
     * Compare the given ElectricField against the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns 0 if they are equal, -1 if the current ElectricField is less then other, 1 if the current ElectricField is greater then other.
     */
    public compareTo(electricField: ElectricField): number {
        return super.internalCompareTo(this.value, electricField.BaseValue);
    }

    /**
     * Add the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    public add(electricField: ElectricField): ElectricField {
        return new ElectricField(super.internalAdd(this.value, electricField.BaseValue))
    }

    /**
     * Subtract the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    public subtract(electricField: ElectricField): ElectricField {
        return new ElectricField(super.internalSubtract(this.value, electricField.BaseValue))
    }

    /**
     * Multiply the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    public multiply(electricField: ElectricField): ElectricField {
        return new ElectricField(super.internalMultiply(this.value, electricField.BaseValue))
    }

    /**
     * Divide the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    public divide(electricField: ElectricField): ElectricField {
        return new ElectricField(super.internalDivide(this.value, electricField.BaseValue))
    }

    /**
     * Modulo the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    public modulo(electricField: ElectricField): ElectricField {
        return new ElectricField(super.internalModulo(this.value, electricField.BaseValue))
    }

    /**
     * Pow the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    public pow(electricField: ElectricField): ElectricField {
        return new ElectricField(super.internalPow(this.value, electricField.BaseValue))
    }
}
