/** TemperatureUnits enumeration */
export enum TemperatureUnits {
    /** */
    Kelvins,
    /** */
    DegreesCelsius,
    /** */
    DegreesDelisle,
    /** */
    DegreesFahrenheit,
    /** */
    DegreesNewton,
    /** */
    DegreesRankine,
    /** */
    DegreesReaumur,
    /** */
    DegreesRoemer,
    /** */
    SolarTemperatures
}

/** A temperature is a numerical measure of hot or cold. Its measurement is by detection of heat radiation or particle velocity or kinetic energy, or by the bulk behavior of a thermometric material. It may be calibrated in any of various temperature scales, Celsius, Fahrenheit, Kelvin, etc. The fundamental physical definition of temperature is provided by thermodynamics. */
export class Temperature {
    private value: number;
    private kelvinsLazy: number | null = null;
    private degreescelsiusLazy: number | null = null;
    private degreesdelisleLazy: number | null = null;
    private degreesfahrenheitLazy: number | null = null;
    private degreesnewtonLazy: number | null = null;
    private degreesrankineLazy: number | null = null;
    private degreesreaumurLazy: number | null = null;
    private degreesroemerLazy: number | null = null;
    private solartemperaturesLazy: number | null = null;

    /**
     * Create a new Temperature.
     * @param value The value.
     * @param fromUnit The ‘Temperature’ unit to create from.
     */
    public constructor(value: number, fromUnit: TemperatureUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Temperature is Kelvin.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Kelvins(): number {
        if(this.kelvinsLazy !== null){
            return this.kelvinsLazy;
        }
        return this.kelvinsLazy = this.convertFromBase(TemperatureUnits.Kelvins);
    }

    /** */
    public get DegreesCelsius(): number {
        if(this.degreescelsiusLazy !== null){
            return this.degreescelsiusLazy;
        }
        return this.degreescelsiusLazy = this.convertFromBase(TemperatureUnits.DegreesCelsius);
    }

    /** */
    public get DegreesDelisle(): number {
        if(this.degreesdelisleLazy !== null){
            return this.degreesdelisleLazy;
        }
        return this.degreesdelisleLazy = this.convertFromBase(TemperatureUnits.DegreesDelisle);
    }

    /** */
    public get DegreesFahrenheit(): number {
        if(this.degreesfahrenheitLazy !== null){
            return this.degreesfahrenheitLazy;
        }
        return this.degreesfahrenheitLazy = this.convertFromBase(TemperatureUnits.DegreesFahrenheit);
    }

    /** */
    public get DegreesNewton(): number {
        if(this.degreesnewtonLazy !== null){
            return this.degreesnewtonLazy;
        }
        return this.degreesnewtonLazy = this.convertFromBase(TemperatureUnits.DegreesNewton);
    }

    /** */
    public get DegreesRankine(): number {
        if(this.degreesrankineLazy !== null){
            return this.degreesrankineLazy;
        }
        return this.degreesrankineLazy = this.convertFromBase(TemperatureUnits.DegreesRankine);
    }

    /** */
    public get DegreesReaumur(): number {
        if(this.degreesreaumurLazy !== null){
            return this.degreesreaumurLazy;
        }
        return this.degreesreaumurLazy = this.convertFromBase(TemperatureUnits.DegreesReaumur);
    }

    /** */
    public get DegreesRoemer(): number {
        if(this.degreesroemerLazy !== null){
            return this.degreesroemerLazy;
        }
        return this.degreesroemerLazy = this.convertFromBase(TemperatureUnits.DegreesRoemer);
    }

    /** */
    public get SolarTemperatures(): number {
        if(this.solartemperaturesLazy !== null){
            return this.solartemperaturesLazy;
        }
        return this.solartemperaturesLazy = this.convertFromBase(TemperatureUnits.SolarTemperatures);
    }

    /**
     * Create a new Temperature instance from a Kelvins
     *
     * @param value The unit as Kelvins to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromKelvins(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.Kelvins);
    }

    /**
     * Create a new Temperature instance from a DegreesCelsius
     *
     * @param value The unit as DegreesCelsius to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesCelsius(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesCelsius);
    }

    /**
     * Create a new Temperature instance from a DegreesDelisle
     *
     * @param value The unit as DegreesDelisle to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesDelisle(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesDelisle);
    }

    /**
     * Create a new Temperature instance from a DegreesFahrenheit
     *
     * @param value The unit as DegreesFahrenheit to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesFahrenheit(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesFahrenheit);
    }

    /**
     * Create a new Temperature instance from a DegreesNewton
     *
     * @param value The unit as DegreesNewton to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesNewton(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesNewton);
    }

    /**
     * Create a new Temperature instance from a DegreesRankine
     *
     * @param value The unit as DegreesRankine to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesRankine(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesRankine);
    }

    /**
     * Create a new Temperature instance from a DegreesReaumur
     *
     * @param value The unit as DegreesReaumur to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesReaumur(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesReaumur);
    }

    /**
     * Create a new Temperature instance from a DegreesRoemer
     *
     * @param value The unit as DegreesRoemer to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesRoemer(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesRoemer);
    }

    /**
     * Create a new Temperature instance from a SolarTemperatures
     *
     * @param value The unit as SolarTemperatures to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromSolarTemperatures(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.SolarTemperatures);
    }

    private convertFromBase(toUnit: TemperatureUnits): number {
        switch (toUnit) {
                
            case TemperatureUnits.Kelvins:
                return this.value;
            case TemperatureUnits.DegreesCelsius:
                return this.value - 273.15;
            case TemperatureUnits.DegreesDelisle:
                return (this.value - 373.15)*-3/2;
            case TemperatureUnits.DegreesFahrenheit:
                return (this.value - 459.67*5/9)*9/5;
            case TemperatureUnits.DegreesNewton:
                return (this.value - 273.15)*33/100;
            case TemperatureUnits.DegreesRankine:
                return this.value*9/5;
            case TemperatureUnits.DegreesReaumur:
                return (this.value - 273.15)*4/5;
            case TemperatureUnits.DegreesRoemer:
                return (this.value - (273.15 - 7.5*40/21))*21/40;
            case TemperatureUnits.SolarTemperatures:
                return this.value / 5778;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: TemperatureUnits): number {
        switch (fromUnit) {
                
            case TemperatureUnits.Kelvins:
                return value;
            case TemperatureUnits.DegreesCelsius:
                return value + 273.15;
            case TemperatureUnits.DegreesDelisle:
                return value*-2/3 + 373.15;
            case TemperatureUnits.DegreesFahrenheit:
                return value*5/9 + 459.67*5/9;
            case TemperatureUnits.DegreesNewton:
                return value*100/33 + 273.15;
            case TemperatureUnits.DegreesRankine:
                return value*5/9;
            case TemperatureUnits.DegreesReaumur:
                return value*5/4 + 273.15;
            case TemperatureUnits.DegreesRoemer:
                return value*40/21 + 273.15 - 7.5*40/21;
            case TemperatureUnits.SolarTemperatures:
                return value * 5778;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Temperature to string.
     * Note! the default format for Temperature is Kelvins.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Temperature.
     * @returns The string format of the Temperature.
     */
    public toString(toUnit: TemperatureUnits = TemperatureUnits.Kelvins): string {

        switch (toUnit) {
            
            case TemperatureUnits.Kelvins:
                return this.Kelvins + ` K`;
            case TemperatureUnits.DegreesCelsius:
                return this.DegreesCelsius + ` °C`;
            case TemperatureUnits.DegreesDelisle:
                return this.DegreesDelisle + ` °De`;
            case TemperatureUnits.DegreesFahrenheit:
                return this.DegreesFahrenheit + ` °F`;
            case TemperatureUnits.DegreesNewton:
                return this.DegreesNewton + ` °N`;
            case TemperatureUnits.DegreesRankine:
                return this.DegreesRankine + ` °R`;
            case TemperatureUnits.DegreesReaumur:
                return this.DegreesReaumur + ` °Ré`;
            case TemperatureUnits.DegreesRoemer:
                return this.DegreesRoemer + ` °Rø`;
            case TemperatureUnits.SolarTemperatures:
                return this.SolarTemperatures + ` T⊙`;
        default:
            break;
        }
        return this.value.toString();
    }
}
