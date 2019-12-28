/** ThermalResistanceUnits enumeration */
export enum ThermalResistanceUnits {
    /** */
    SquareMeterKelvinsPerKilowatt,
    /** */
    SquareMeterDegreesCelsiusPerWatt,
    /** */
    SquareCentimeterKelvinsPerWatt,
    /** */
    SquareCentimeterHourDegreesCelsiusPerKilocalorie,
    /** */
    HourSquareFeetDegreesFahrenheitPerBtu
}

/** Heat Transfer Coefficient or Thermal conductivity - indicates a materials ability to conduct heat. */
export class ThermalResistance {
    private value: number;
    private squaremeterkelvinsperkilowattLazy: number | null = null;
    private squaremeterdegreescelsiusperwattLazy: number | null = null;
    private squarecentimeterkelvinsperwattLazy: number | null = null;
    private squarecentimeterhourdegreescelsiusperkilocalorieLazy: number | null = null;
    private hoursquarefeetdegreesfahrenheitperbtuLazy: number | null = null;

    /**
     * Create a new ThermalResistance.
     * @param value The value.
     * @param fromUnit The ‘ThermalResistance’ unit to create from.
     * The default unit is SquareMeterKelvinsPerKilowatt
     */
    public constructor(value: number, fromUnit: ThermalResistanceUnits = ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ThermalResistance is SquareMeterKelvinsPerKilowatt.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get SquareMeterKelvinsPerKilowatt(): number {
        if(this.squaremeterkelvinsperkilowattLazy !== null){
            return this.squaremeterkelvinsperkilowattLazy;
        }
        return this.squaremeterkelvinsperkilowattLazy = this.convertFromBase(ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt);
    }

    /** */
    public get SquareMeterDegreesCelsiusPerWatt(): number {
        if(this.squaremeterdegreescelsiusperwattLazy !== null){
            return this.squaremeterdegreescelsiusperwattLazy;
        }
        return this.squaremeterdegreescelsiusperwattLazy = this.convertFromBase(ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt);
    }

    /** */
    public get SquareCentimeterKelvinsPerWatt(): number {
        if(this.squarecentimeterkelvinsperwattLazy !== null){
            return this.squarecentimeterkelvinsperwattLazy;
        }
        return this.squarecentimeterkelvinsperwattLazy = this.convertFromBase(ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt);
    }

    /** */
    public get SquareCentimeterHourDegreesCelsiusPerKilocalorie(): number {
        if(this.squarecentimeterhourdegreescelsiusperkilocalorieLazy !== null){
            return this.squarecentimeterhourdegreescelsiusperkilocalorieLazy;
        }
        return this.squarecentimeterhourdegreescelsiusperkilocalorieLazy = this.convertFromBase(ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie);
    }

    /** */
    public get HourSquareFeetDegreesFahrenheitPerBtu(): number {
        if(this.hoursquarefeetdegreesfahrenheitperbtuLazy !== null){
            return this.hoursquarefeetdegreesfahrenheitperbtuLazy;
        }
        return this.hoursquarefeetdegreesfahrenheitperbtuLazy = this.convertFromBase(ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu);
    }

    /**
     * Create a new ThermalResistance instance from a SquareMeterKelvinsPerKilowatt
     *
     * @param value The unit as SquareMeterKelvinsPerKilowatt to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromSquareMeterKelvinsPerKilowatt(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt);
    }

    /**
     * Create a new ThermalResistance instance from a SquareMeterDegreesCelsiusPerWatt
     *
     * @param value The unit as SquareMeterDegreesCelsiusPerWatt to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromSquareMeterDegreesCelsiusPerWatt(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt);
    }

    /**
     * Create a new ThermalResistance instance from a SquareCentimeterKelvinsPerWatt
     *
     * @param value The unit as SquareCentimeterKelvinsPerWatt to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromSquareCentimeterKelvinsPerWatt(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt);
    }

    /**
     * Create a new ThermalResistance instance from a SquareCentimeterHourDegreesCelsiusPerKilocalorie
     *
     * @param value The unit as SquareCentimeterHourDegreesCelsiusPerKilocalorie to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromSquareCentimeterHourDegreesCelsiusPerKilocalorie(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie);
    }

    /**
     * Create a new ThermalResistance instance from a HourSquareFeetDegreesFahrenheitPerBtu
     *
     * @param value The unit as HourSquareFeetDegreesFahrenheitPerBtu to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromHourSquareFeetDegreesFahrenheitPerBtu(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu);
    }

    private convertFromBase(toUnit: ThermalResistanceUnits): number {
        switch (toUnit) {
                
            case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt:
                return this.value;
            case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt:
                return this.value/1000.088056074108;
            case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt:
                return this.value/0.0999964777570357;
            case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                return this.value/0.0859779507590433;
            case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                return this.value/176.1121482159839;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ThermalResistanceUnits): number {
        switch (fromUnit) {
                
            case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt:
                return value;
            case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt:
                return value*1000.088056074108;
            case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt:
                return value*0.0999964777570357;
            case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                return value*0.0859779507590433;
            case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                return value*176.1121482159839;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ThermalResistance to string.
     * Note! the default format for ThermalResistance is SquareMeterKelvinsPerKilowatt.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ThermalResistance.
     * @returns The string format of the ThermalResistance.
     */
    public toString(toUnit: ThermalResistanceUnits = ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt): string {

        switch (toUnit) {
            
            case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt:
                return this.SquareMeterKelvinsPerKilowatt + ` m²K/kW`;
            case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt:
                return this.SquareMeterDegreesCelsiusPerWatt + ` m²°C/W`;
            case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt:
                return this.SquareCentimeterKelvinsPerWatt + ` cm²K/W`;
            case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                return this.SquareCentimeterHourDegreesCelsiusPerKilocalorie + ` cm²Hr°C/kcal`;
            case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                return this.HourSquareFeetDegreesFahrenheitPerBtu + ` Hrft²°F/Btu`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given ThermalResistance are equals to the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns True if the given ThermalResistance are equal to the current ThermalResistance.
     */
    public equals(thermalResistance: ThermalResistance): boolean {
        return this.value === thermalResistance.BaseValue;
    }

    /**
     * Compare the given ThermalResistance against the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns 0 if they are equal, -1 if the current ThermalResistance is less then other, 1 if the current ThermalResistance is greater then other.
     */
    public compareTo(thermalResistance: ThermalResistance): number {

        if (this.value > thermalResistance.BaseValue)
            return 1;
        if (this.value < thermalResistance.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public add(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(this.value + thermalResistance.BaseValue)
    }

    /**
     * Subtract the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public subtract(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(this.value - thermalResistance.BaseValue)
    }

    /**
     * Multiply the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public multiply(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(this.value * thermalResistance.BaseValue)
    }

    /**
     * Divide the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public divide(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(this.value / thermalResistance.BaseValue)
    }

    /**
     * Modulo the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public modulo(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(this.value % thermalResistance.BaseValue)
    }

    /**
     * Pow the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public pow(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(this.value ** thermalResistance.BaseValue)
    }
}
