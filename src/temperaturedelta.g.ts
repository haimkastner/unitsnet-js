/** TemperatureDeltaUnits enumeration */
export enum TemperatureDeltaUnits {
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
    DegreesRoemer
}

/** Difference between two temperatures. The conversions are different than for Temperature. */
export class TemperatureDelta {
    private value: number;
    private kelvinsLazy: number | null = null;
    private degreescelsiusLazy: number | null = null;
    private degreesdelisleLazy: number | null = null;
    private degreesfahrenheitLazy: number | null = null;
    private degreesnewtonLazy: number | null = null;
    private degreesrankineLazy: number | null = null;
    private degreesreaumurLazy: number | null = null;
    private degreesroemerLazy: number | null = null;

    /**
     * Create a new TemperatureDelta.
     * @param value The value.
     * @param fromUnit The ‘TemperatureDelta’ unit to create from.
     */
    public constructor(value: number, fromUnit: TemperatureDeltaUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of TemperatureDelta is Kelvin.
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
        return this.kelvinsLazy = this.convertFromBase(TemperatureDeltaUnits.Kelvins);
    }

    /** */
    public get DegreesCelsius(): number {
        if(this.degreescelsiusLazy !== null){
            return this.degreescelsiusLazy;
        }
        return this.degreescelsiusLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesCelsius);
    }

    /** */
    public get DegreesDelisle(): number {
        if(this.degreesdelisleLazy !== null){
            return this.degreesdelisleLazy;
        }
        return this.degreesdelisleLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesDelisle);
    }

    /** */
    public get DegreesFahrenheit(): number {
        if(this.degreesfahrenheitLazy !== null){
            return this.degreesfahrenheitLazy;
        }
        return this.degreesfahrenheitLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesFahrenheit);
    }

    /** */
    public get DegreesNewton(): number {
        if(this.degreesnewtonLazy !== null){
            return this.degreesnewtonLazy;
        }
        return this.degreesnewtonLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesNewton);
    }

    /** */
    public get DegreesRankine(): number {
        if(this.degreesrankineLazy !== null){
            return this.degreesrankineLazy;
        }
        return this.degreesrankineLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesRankine);
    }

    /** */
    public get DegreesReaumur(): number {
        if(this.degreesreaumurLazy !== null){
            return this.degreesreaumurLazy;
        }
        return this.degreesreaumurLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesReaumur);
    }

    /** */
    public get DegreesRoemer(): number {
        if(this.degreesroemerLazy !== null){
            return this.degreesroemerLazy;
        }
        return this.degreesroemerLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesRoemer);
    }

    /**
     * Create a new TemperatureDelta instance from a Kelvins
     *
     * @param value The unit as Kelvins to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromKelvins(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.Kelvins);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesCelsius
     *
     * @param value The unit as DegreesCelsius to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesCelsius(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesCelsius);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesDelisle
     *
     * @param value The unit as DegreesDelisle to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesDelisle(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesDelisle);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesFahrenheit
     *
     * @param value The unit as DegreesFahrenheit to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesFahrenheit(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesFahrenheit);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesNewton
     *
     * @param value The unit as DegreesNewton to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesNewton(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesNewton);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesRankine
     *
     * @param value The unit as DegreesRankine to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesRankine(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesRankine);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesReaumur
     *
     * @param value The unit as DegreesReaumur to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesReaumur(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesReaumur);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesRoemer
     *
     * @param value The unit as DegreesRoemer to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesRoemer(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesRoemer);
    }

    private convertFromBase(toUnit: TemperatureDeltaUnits): number {
        switch (toUnit) {
                
            case TemperatureDeltaUnits.Kelvins:
                return this.value;
            case TemperatureDeltaUnits.DegreesCelsius:
                return this.value;
            case TemperatureDeltaUnits.DegreesDelisle:
                return this.value*-3/2;
            case TemperatureDeltaUnits.DegreesFahrenheit:
                return this.value*9/5;
            case TemperatureDeltaUnits.DegreesNewton:
                return this.value*33/100;
            case TemperatureDeltaUnits.DegreesRankine:
                return this.value*9/5;
            case TemperatureDeltaUnits.DegreesReaumur:
                return this.value*4/5;
            case TemperatureDeltaUnits.DegreesRoemer:
                return this.value*21/40;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: TemperatureDeltaUnits): number {
        switch (fromUnit) {
                
            case TemperatureDeltaUnits.Kelvins:
                return value;
            case TemperatureDeltaUnits.DegreesCelsius:
                return value;
            case TemperatureDeltaUnits.DegreesDelisle:
                return value*-2/3;
            case TemperatureDeltaUnits.DegreesFahrenheit:
                return value*5/9;
            case TemperatureDeltaUnits.DegreesNewton:
                return value*100/33;
            case TemperatureDeltaUnits.DegreesRankine:
                return value*5/9;
            case TemperatureDeltaUnits.DegreesReaumur:
                return value*5/4;
            case TemperatureDeltaUnits.DegreesRoemer:
                return value*40/21;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the TemperatureDelta to string.
     * Note! the default format for TemperatureDelta is Kelvins.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the TemperatureDelta.
     * @returns The string format of the TemperatureDelta.
     */
    public toString(toUnit: TemperatureDeltaUnits = TemperatureDeltaUnits.Kelvins): string {

        switch (toUnit) {
            
            case TemperatureDeltaUnits.Kelvins:
                return this.Kelvins + ` ∆K`;
            case TemperatureDeltaUnits.DegreesCelsius:
                return this.DegreesCelsius + ` ∆°C`;
            case TemperatureDeltaUnits.DegreesDelisle:
                return this.DegreesDelisle + ` ∆°De`;
            case TemperatureDeltaUnits.DegreesFahrenheit:
                return this.DegreesFahrenheit + ` ∆°F`;
            case TemperatureDeltaUnits.DegreesNewton:
                return this.DegreesNewton + ` ∆°N`;
            case TemperatureDeltaUnits.DegreesRankine:
                return this.DegreesRankine + ` ∆°R`;
            case TemperatureDeltaUnits.DegreesReaumur:
                return this.DegreesReaumur + ` ∆°Ré`;
            case TemperatureDeltaUnits.DegreesRoemer:
                return this.DegreesRoemer + ` ∆°Rø`;
        default:
            break;
        }
        return this.value.toString();
    }
}
