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
     */
    public constructor(value: number, fromUnit: ThermalConductivityUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ThermalConductivity is WattPerMeterKelvin.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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

    private convertFromBase(toUnit: ThermalConductivityUnits): number {
        switch (toUnit) {
                
            case ThermalConductivityUnits.WattsPerMeterKelvin:
                return this.value;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit:
                return this.value/1.73073467;
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
                return value*1.73073467;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ThermalConductivity to string.
     * Note! the default format for ThermalConductivity is WattsPerMeterKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ThermalConductivity.
     * @returns The string format of the ThermalConductivity.
     */
    public toString(toUnit: ThermalConductivityUnits = ThermalConductivityUnits.WattsPerMeterKelvin): string {

        switch (toUnit) {
            
            case ThermalConductivityUnits.WattsPerMeterKelvin:
                return this.WattsPerMeterKelvin + ` W/m·K`;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit:
                return this.BtusPerHourFootFahrenheit + ` BTU/h·ft·°F`;
        default:
            break;
        }
        return this.value.toString();
    }
}
