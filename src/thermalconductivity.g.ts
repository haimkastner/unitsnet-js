/** ThermalConductivityUnits enumeration */
export enum ThermalConductivityUnits {
    /** */
    WattsPerMeterKelvin,
    /** */
    BtusPerHourFootFahrenheit
}

/** Thermal conductivity is the property of a material to conduct heat. */
export class ThermalConductivity {
    private value: number;
    private wattspermeterkelvinLazy: number | null = null;
    private btusperhourfootfahrenheitLazy: number | null = null;

    /**
     * Create a new ThermalConductivity.
     * @param value The value.
     * @param fromUnit The ‘ThermalConductivity’ unit to create from.
     * The default unit is WattsPerMeterKelvin
     */
    public constructor(value: number, fromUnit: ThermalConductivityUnits = ThermalConductivityUnits.WattsPerMeterKelvin) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ThermalConductivity is WattsPerMeterKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
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
        return NaN;
    }

    private convertFromBase(toUnit: ThermalConductivityUnits): number {
        switch (toUnit) {
                
            case ThermalConductivityUnits.WattsPerMeterKelvin:
                return this.value;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit:
                return this.value / 1.73073467;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ThermalConductivityUnits): number {
        switch (fromUnit) {
                
            case ThermalConductivityUnits.WattsPerMeterKelvin:
                return value;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit:
                return value * 1.73073467;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ThermalConductivity to string.
     * Note! the default format for ThermalConductivity is WattsPerMeterKelvin.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ThermalConductivity.
     * @returns The string format of the ThermalConductivity.
     */
    public toString(unit: ThermalConductivityUnits = ThermalConductivityUnits.WattsPerMeterKelvin): string {

        switch (unit) {
            
            case ThermalConductivityUnits.WattsPerMeterKelvin:
                return this.WattsPerMeterKelvin + ` W/m·K`;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit:
                return this.BtusPerHourFootFahrenheit + ` BTU/h·ft·°F`;
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
        return this.value === thermalConductivity.BaseValue;
    }

    /**
     * Compare the given ThermalConductivity against the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns 0 if they are equal, -1 if the current ThermalConductivity is less then other, 1 if the current ThermalConductivity is greater then other.
     */
    public compareTo(thermalConductivity: ThermalConductivity): number {

        if (this.value > thermalConductivity.BaseValue)
            return 1;
        if (this.value < thermalConductivity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    public add(thermalConductivity: ThermalConductivity): ThermalConductivity {
        return new ThermalConductivity(this.value + thermalConductivity.BaseValue)
    }

    /**
     * Subtract the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    public subtract(thermalConductivity: ThermalConductivity): ThermalConductivity {
        return new ThermalConductivity(this.value - thermalConductivity.BaseValue)
    }

    /**
     * Multiply the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    public multiply(thermalConductivity: ThermalConductivity): ThermalConductivity {
        return new ThermalConductivity(this.value * thermalConductivity.BaseValue)
    }

    /**
     * Divide the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    public divide(thermalConductivity: ThermalConductivity): ThermalConductivity {
        return new ThermalConductivity(this.value / thermalConductivity.BaseValue)
    }

    /**
     * Modulo the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    public modulo(thermalConductivity: ThermalConductivity): ThermalConductivity {
        return new ThermalConductivity(this.value % thermalConductivity.BaseValue)
    }

    /**
     * Pow the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    public pow(thermalConductivity: ThermalConductivity): ThermalConductivity {
        return new ThermalConductivity(this.value ** thermalConductivity.BaseValue)
    }
}
