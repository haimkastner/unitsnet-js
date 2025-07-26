import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ThermalResistance */
export interface ThermalResistanceDto {
    /** The value of the ThermalResistance */
    value: number;
    /**  The specific unit that the ThermalResistance value is representing */
    unit: ThermalResistanceUnits;
}

/** ThermalResistanceUnits enumeration */
export enum ThermalResistanceUnits {
    /** */
    KelvinsPerWatt = "KelvinPerWatt",
    /** */
    DegreesCelsiusPerWatt = "DegreeCelsiusPerWatt"
}

/** Thermal resistance (R) measures the opposition to the heat current in a material or system. It is measured in units of kelvins per watt (K/W) and indicates how much temperature difference (in kelvins) is required to transfer a unit of heat current (in watts) through the material or object. It is essential to optimize the building insulation, evaluate the efficiency of electronic devices, and enhance the performance of heat sinks in various applications. */
export class ThermalResistance extends BaseUnit {
    protected value: number;
    private kelvinsperwattLazy: number | null = null;
    private degreescelsiusperwattLazy: number | null = null;

    /**
     * Create a new ThermalResistance.
     * @param value The value.
     * @param fromUnit The ‘ThermalResistance’ unit to create from.
     * The default unit is KelvinsPerWatt
     */
    public constructor(value: number, fromUnit: ThermalResistanceUnits = ThermalResistanceUnits.KelvinsPerWatt) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ThermalResistance is KelvinsPerWatt.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ThermalResistanceUnits.KelvinsPerWatt {
        return ThermalResistanceUnits.KelvinsPerWatt
    }

    /** */
    public get KelvinsPerWatt(): number {
        if(this.kelvinsperwattLazy !== null){
            return this.kelvinsperwattLazy;
        }
        return this.kelvinsperwattLazy = this.convertFromBase(ThermalResistanceUnits.KelvinsPerWatt);
    }

    /** */
    public get DegreesCelsiusPerWatt(): number {
        if(this.degreescelsiusperwattLazy !== null){
            return this.degreescelsiusperwattLazy;
        }
        return this.degreescelsiusperwattLazy = this.convertFromBase(ThermalResistanceUnits.DegreesCelsiusPerWatt);
    }

    /**
     * Create a new ThermalResistance instance from a KelvinsPerWatt
     *
     * @param value The unit as KelvinsPerWatt to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromKelvinsPerWatt(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.KelvinsPerWatt);
    }

    /**
     * Create a new ThermalResistance instance from a DegreesCelsiusPerWatt
     *
     * @param value The unit as DegreesCelsiusPerWatt to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromDegreesCelsiusPerWatt(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.DegreesCelsiusPerWatt);
    }

    /**
     * Gets the base unit enumeration associated with ThermalResistance
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ThermalResistanceUnits {
        return ThermalResistanceUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ThermalResistanceUnits.KelvinsPerWatt {
        return ThermalResistanceUnits.KelvinsPerWatt;
    }

    /**
     * Create API DTO represent a ThermalResistance unit.
     * @param holdInUnit The specific ThermalResistance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ThermalResistanceUnits = ThermalResistanceUnits.KelvinsPerWatt): ThermalResistanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ThermalResistance unit from an API DTO representation.
     * @param dtoThermalResistance The ThermalResistance API DTO representation
     */
    public static FromDto(dtoThermalResistance: ThermalResistanceDto): ThermalResistance {
        return new ThermalResistance(dtoThermalResistance.value, dtoThermalResistance.unit);
    }

    /**
     * Convert ThermalResistance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ThermalResistanceUnits): number {
        switch (toUnit) {
            case ThermalResistanceUnits.KelvinsPerWatt: return this.KelvinsPerWatt;
            case ThermalResistanceUnits.DegreesCelsiusPerWatt: return this.DegreesCelsiusPerWatt;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ThermalResistanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ThermalResistanceUnits.KelvinsPerWatt: return this.value;
                case ThermalResistanceUnits.DegreesCelsiusPerWatt: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ThermalResistanceUnits.KelvinsPerWatt: return this.value;
            case ThermalResistanceUnits.DegreesCelsiusPerWatt: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ThermalResistanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ThermalResistanceUnits.KelvinsPerWatt: return value;
                case ThermalResistanceUnits.DegreesCelsiusPerWatt: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ThermalResistanceUnits.KelvinsPerWatt: return value;
            case ThermalResistanceUnits.DegreesCelsiusPerWatt: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ThermalResistance to string.
     * Note! the default format for ThermalResistance is KelvinsPerWatt.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ThermalResistance.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ThermalResistance.
     */
    public toString(unit: ThermalResistanceUnits = ThermalResistanceUnits.KelvinsPerWatt, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ThermalResistanceUnits.KelvinsPerWatt:
                return super.truncateFractionDigits(this.KelvinsPerWatt, options as ToStringOptions) + ` K/W`;
            case ThermalResistanceUnits.DegreesCelsiusPerWatt:
                return super.truncateFractionDigits(this.DegreesCelsiusPerWatt, options as ToStringOptions) + ` °C/W`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ThermalResistance unit abbreviation.
     * Note! the default abbreviation for ThermalResistance is KelvinsPerWatt.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ThermalResistance.
     * @returns The abbreviation string of ThermalResistance.
     */
    public getUnitAbbreviation(unitAbbreviation: ThermalResistanceUnits = ThermalResistanceUnits.KelvinsPerWatt): string {

        switch (unitAbbreviation) {
            
            case ThermalResistanceUnits.KelvinsPerWatt:
                return `K/W`;
            case ThermalResistanceUnits.DegreesCelsiusPerWatt:
                return `°C/W`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ThermalResistance are equals to the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns True if the given ThermalResistance are equal to the current ThermalResistance.
     */
    public equals(thermalResistance: ThermalResistance): boolean {
        return super.internalEquals(this.value, thermalResistance.BaseValue);
    }

    /**
     * Compare the given ThermalResistance against the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns 0 if they are equal, -1 if the current ThermalResistance is less then other, 1 if the current ThermalResistance is greater then other.
     */
    public compareTo(thermalResistance: ThermalResistance): number {
        return super.internalCompareTo(this.value, thermalResistance.BaseValue);
    }

    /**
     * Add the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public add(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(super.internalAdd(this.value, thermalResistance.BaseValue))
    }

    /**
     * Subtract the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public subtract(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(super.internalSubtract(this.value, thermalResistance.BaseValue))
    }

    /**
     * Multiply the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public multiply(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(super.internalMultiply(this.value, thermalResistance.BaseValue))
    }

    /**
     * Divide the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public divide(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(super.internalDivide(this.value, thermalResistance.BaseValue))
    }

    /**
     * Modulo the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public modulo(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(super.internalModulo(this.value, thermalResistance.BaseValue))
    }

    /**
     * Pow the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public pow(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(super.internalPow(this.value, thermalResistance.BaseValue))
    }
}
