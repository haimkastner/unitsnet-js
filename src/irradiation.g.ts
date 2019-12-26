/** IrradiationUnits enumeration */
export enum IrradiationUnits {
    /** */
    JoulesPerSquareMeter,
    /** */
    JoulesPerSquareCentimeter,
    /** */
    JoulesPerSquareMillimeter,
    /** */
    WattHoursPerSquareMeter,
    /** */
    KilojoulesPerSquareMeter,
    /** */
    KilowattHoursPerSquareMeter
}

/** Irradiation is the process by which an object is exposed to radiation. The exposure can originate from various sources, including natural sources. */
export class Irradiation {
    private value: number;
    private joulespersquaremeterLazy: number | null = null;
    private joulespersquarecentimeterLazy: number | null = null;
    private joulespersquaremillimeterLazy: number | null = null;
    private watthourspersquaremeterLazy: number | null = null;
    private kilojoulespersquaremeterLazy: number | null = null;
    private kilowatthourspersquaremeterLazy: number | null = null;

    /**
     * Create a new Irradiation.
     * @param value The value.
     * @param fromUnit The ‘Irradiation’ unit to create from.
     */
    public constructor(value: number, fromUnit: IrradiationUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Irradiation is JoulePerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get JoulesPerSquareMeter(): number {
        if(this.joulespersquaremeterLazy !== null){
            return this.joulespersquaremeterLazy;
        }
        return this.joulespersquaremeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareMeter);
    }

    /** */
    public get JoulesPerSquareCentimeter(): number {
        if(this.joulespersquarecentimeterLazy !== null){
            return this.joulespersquarecentimeterLazy;
        }
        return this.joulespersquarecentimeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareCentimeter);
    }

    /** */
    public get JoulesPerSquareMillimeter(): number {
        if(this.joulespersquaremillimeterLazy !== null){
            return this.joulespersquaremillimeterLazy;
        }
        return this.joulespersquaremillimeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareMillimeter);
    }

    /** */
    public get WattHoursPerSquareMeter(): number {
        if(this.watthourspersquaremeterLazy !== null){
            return this.watthourspersquaremeterLazy;
        }
        return this.watthourspersquaremeterLazy = this.convertFromBase(IrradiationUnits.WattHoursPerSquareMeter);
    }

    /** */
    public get KilojoulesPerSquareMeter(): number {
        if(this.kilojoulespersquaremeterLazy !== null){
            return this.kilojoulespersquaremeterLazy;
        }
        return this.kilojoulespersquaremeterLazy = this.convertFromBase(IrradiationUnits.KilojoulesPerSquareMeter);
    }

    /** */
    public get KilowattHoursPerSquareMeter(): number {
        if(this.kilowatthourspersquaremeterLazy !== null){
            return this.kilowatthourspersquaremeterLazy;
        }
        return this.kilowatthourspersquaremeterLazy = this.convertFromBase(IrradiationUnits.KilowattHoursPerSquareMeter);
    }

    /**
     * Create a new Irradiation instance from a JoulesPerSquareMeter
     *
     * @param value The unit as JoulesPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromJoulesPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareMeter);
    }

    /**
     * Create a new Irradiation instance from a JoulesPerSquareCentimeter
     *
     * @param value The unit as JoulesPerSquareCentimeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromJoulesPerSquareCentimeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareCentimeter);
    }

    /**
     * Create a new Irradiation instance from a JoulesPerSquareMillimeter
     *
     * @param value The unit as JoulesPerSquareMillimeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromJoulesPerSquareMillimeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareMillimeter);
    }

    /**
     * Create a new Irradiation instance from a WattHoursPerSquareMeter
     *
     * @param value The unit as WattHoursPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromWattHoursPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.WattHoursPerSquareMeter);
    }

    /**
     * Create a new Irradiation instance from a KilojoulesPerSquareMeter
     *
     * @param value The unit as KilojoulesPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromKilojoulesPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.KilojoulesPerSquareMeter);
    }

    /**
     * Create a new Irradiation instance from a KilowattHoursPerSquareMeter
     *
     * @param value The unit as KilowattHoursPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromKilowattHoursPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.KilowattHoursPerSquareMeter);
    }

    private convertFromBase(toUnit: IrradiationUnits): number {
        switch (toUnit) {
                
            case IrradiationUnits.JoulesPerSquareMeter:
                return this.value;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return this.value/1e4;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return this.value/1e6;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return this.value/3600;
            case IrradiationUnits.KilojoulesPerSquareMeter:
                return (this.value) / 1000;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
                return (this.value/3600) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: IrradiationUnits): number {
        switch (fromUnit) {
                
            case IrradiationUnits.JoulesPerSquareMeter:
                return value;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return value*1e4;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return value*1e6;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return value*3600;
            case IrradiationUnits.KilojoulesPerSquareMeter:
                return (value) * 1000;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
                return (value*3600) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Irradiation to string.
     * Note! the default format for Irradiation is JoulesPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Irradiation.
     * @returns The string format of the Irradiation.
     */
    public toString(toUnit: IrradiationUnits = IrradiationUnits.JoulesPerSquareMeter): string {

        switch (toUnit) {
            
            case IrradiationUnits.JoulesPerSquareMeter:
                return this.JoulesPerSquareMeter + ` J/m²`;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return this.JoulesPerSquareCentimeter + ` J/cm²`;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return this.JoulesPerSquareMillimeter + ` J/mm²`;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return this.WattHoursPerSquareMeter + ` Wh/m²`;
            case IrradiationUnits.KilojoulesPerSquareMeter:
                return this.KilojoulesPerSquareMeter + ` J/m²`;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
                return this.KilowattHoursPerSquareMeter + ` Wh/m²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
