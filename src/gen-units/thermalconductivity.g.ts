import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ThermalConductivity */
export interface ThermalConductivityDto {
    /** The value of the ThermalConductivity */
    value: number;
    /**  The specific unit that the ThermalConductivity value is representing */
    unit: ThermalConductivityUnits;
}

/** ThermalConductivityUnits enumeration */
export enum ThermalConductivityUnits {
    /** */
    WattsPerMeterKelvin = "WattPerMeterKelvin",
    /** */
    BtusPerHourFootFahrenheit = "BtuPerHourFootFahrenheit"
}

/** Thermal conductivity is the property of a material to conduct heat. */
export class ThermalConductivity extends BaseUnit {
    protected value: number;
    private wattspermeterkelvinLazy: number | null = null;
    private btusperhourfootfahrenheitLazy: number | null = null;

    /**
     * Create a new ThermalConductivity.
     * @param value The value.
     * @param fromUnit The ‘ThermalConductivity’ unit to create from.
     * The default unit is WattsPerMeterKelvin
     */
    public constructor(value: number, fromUnit: ThermalConductivityUnits = ThermalConductivityUnits.WattsPerMeterKelvin) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ThermalConductivity is WattsPerMeterKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ThermalConductivityUnits.WattsPerMeterKelvin {
        return ThermalConductivityUnits.WattsPerMeterKelvin
    }

    /** */
    public get WattsPerMeterKelvin(): number {
        if(this.wattspermeterkelvinLazy !== null){
            return this.wattspermeterkelvinLazy;
        }
        return this.wattspermeterkelvinLazy = this.convertFromBase(ThermalConductivityUnits.WattsPerMeterKelvin);
    }

    /** */
    public get BtusPerHourFootFahrenheit(): number {
        if(this.btusperhourfootfahrenheitLazy !== null){
            return this.btusperhourfootfahrenheitLazy;
        }
        return this.btusperhourfootfahrenheitLazy = this.convertFromBase(ThermalConductivityUnits.BtusPerHourFootFahrenheit);
    }

    /**
     * Create a new ThermalConductivity instance from a WattsPerMeterKelvin
     *
     * @param value The unit as WattsPerMeterKelvin to create a new ThermalConductivity from.
     * @returns The new ThermalConductivity instance.
     */
    public static FromWattsPerMeterKelvin(value: number): ThermalConductivity {
        return new ThermalConductivity(value, ThermalConductivityUnits.WattsPerMeterKelvin);
    }

    /**
     * Create a new ThermalConductivity instance from a BtusPerHourFootFahrenheit
     *
     * @param value The unit as BtusPerHourFootFahrenheit to create a new ThermalConductivity from.
     * @returns The new ThermalConductivity instance.
     */
    public static FromBtusPerHourFootFahrenheit(value: number): ThermalConductivity {
        return new ThermalConductivity(value, ThermalConductivityUnits.BtusPerHourFootFahrenheit);
    }

    /**
     * Gets the base unit enumeration associated with ThermalConductivity
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ThermalConductivityUnits {
        return ThermalConductivityUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ThermalConductivityUnits.WattsPerMeterKelvin {
        return ThermalConductivityUnits.WattsPerMeterKelvin;
    }

    /**
     * Create API DTO represent a ThermalConductivity unit.
     * @param holdInUnit The specific ThermalConductivity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ThermalConductivityUnits = ThermalConductivityUnits.WattsPerMeterKelvin): ThermalConductivityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ThermalConductivity unit from an API DTO representation.
     * @param dtoThermalConductivity The ThermalConductivity API DTO representation
     */
    public static FromDto(dtoThermalConductivity: ThermalConductivityDto): ThermalConductivity {
        return new ThermalConductivity(dtoThermalConductivity.value, dtoThermalConductivity.unit);
    }

    /**
     * Convert ThermalConductivity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ThermalConductivityUnits): number {
        switch (toUnit) {
            case ThermalConductivityUnits.WattsPerMeterKelvin: return this.WattsPerMeterKelvin;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit: return this.BtusPerHourFootFahrenheit;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ThermalConductivityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ThermalConductivityUnits.WattsPerMeterKelvin: return this.value;
                case ThermalConductivityUnits.BtusPerHourFootFahrenheit: return super.internalDivide(this.value, 1.73073467);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ThermalConductivityUnits.WattsPerMeterKelvin: return this.value;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit: return this.value / 1.73073467;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ThermalConductivityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ThermalConductivityUnits.WattsPerMeterKelvin: return value;
                case ThermalConductivityUnits.BtusPerHourFootFahrenheit: return super.internalMultiply(value, 1.73073467);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ThermalConductivityUnits.WattsPerMeterKelvin: return value;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit: return value * 1.73073467;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ThermalConductivity to string.
     * Note! the default format for ThermalConductivity is WattsPerMeterKelvin.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ThermalConductivity.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ThermalConductivity.
     */
    public toString(unit: ThermalConductivityUnits = ThermalConductivityUnits.WattsPerMeterKelvin, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ThermalConductivityUnits.WattsPerMeterKelvin:
                return super.truncateFractionDigits(this.WattsPerMeterKelvin, options as ToStringOptions) + ` W/m·K`;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit:
                return super.truncateFractionDigits(this.BtusPerHourFootFahrenheit, options as ToStringOptions) + ` BTU/h·ft·°F`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ThermalConductivity unit abbreviation.
     * Note! the default abbreviation for ThermalConductivity is WattsPerMeterKelvin.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ThermalConductivity.
     * @returns The abbreviation string of ThermalConductivity.
     */
    public getUnitAbbreviation(unitAbbreviation: ThermalConductivityUnits = ThermalConductivityUnits.WattsPerMeterKelvin): string {

        switch (unitAbbreviation) {
            
            case ThermalConductivityUnits.WattsPerMeterKelvin:
                return `W/m·K`;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit:
                return `BTU/h·ft·°F`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ThermalConductivity are equals to the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns True if the given ThermalConductivity are equal to the current ThermalConductivity.
     */
    public equals(thermalConductivity: ThermalConductivity): boolean {
        return super.internalEquals(this.value, thermalConductivity.BaseValue);
    }

    /**
     * Compare the given ThermalConductivity against the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns 0 if they are equal, -1 if the current ThermalConductivity is less then other, 1 if the current ThermalConductivity is greater then other.
     */
    public compareTo(thermalConductivity: ThermalConductivity): number {
        return super.internalCompareTo(this.value, thermalConductivity.BaseValue);
    }

    /**
     * Add the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    public add(thermalConductivity: ThermalConductivity): ThermalConductivity {
        return new ThermalConductivity(super.internalAdd(this.value, thermalConductivity.BaseValue))
    }

    /**
     * Subtract the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    public subtract(thermalConductivity: ThermalConductivity): ThermalConductivity {
        return new ThermalConductivity(super.internalSubtract(this.value, thermalConductivity.BaseValue))
    }

    /**
     * Multiply the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    public multiply(thermalConductivity: ThermalConductivity): ThermalConductivity {
        return new ThermalConductivity(super.internalMultiply(this.value, thermalConductivity.BaseValue))
    }

    /**
     * Divide the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    public divide(thermalConductivity: ThermalConductivity): ThermalConductivity {
        return new ThermalConductivity(super.internalDivide(this.value, thermalConductivity.BaseValue))
    }

    /**
     * Modulo the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    public modulo(thermalConductivity: ThermalConductivity): ThermalConductivity {
        return new ThermalConductivity(super.internalModulo(this.value, thermalConductivity.BaseValue))
    }

    /**
     * Pow the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    public pow(thermalConductivity: ThermalConductivity): ThermalConductivity {
        return new ThermalConductivity(super.internalPow(this.value, thermalConductivity.BaseValue))
    }
}
