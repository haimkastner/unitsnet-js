/** HeatFluxUnits enumeration */
export enum HeatFluxUnits {
    /** */
    WattsPerSquareMeter,
    /** */
    WattsPerSquareInch,
    /** */
    WattsPerSquareFoot,
    /** */
    BtusPerSecondSquareInch,
    /** */
    BtusPerSecondSquareFoot,
    /** */
    BtusPerMinuteSquareFoot,
    /** */
    BtusPerHourSquareFoot,
    /** */
    CaloriesPerSecondSquareCentimeter,
    /** */
    KilocaloriesPerHourSquareMeter,
    /** */
    PoundsForcePerFootSecond,
    /** */
    PoundsPerSecondCubed,
    /** */
    NanowattsPerSquareMeter,
    /** */
    MicrowattsPerSquareMeter,
    /** */
    CentiwattsPerSquareMeter,
    /** */
    DeciwattsPerSquareMeter,
    /** */
    KilowattsPerSquareMeter,
    /** */
    KilocaloriesPerSecondSquareCentimeter
}

/** Heat flux is the flow of energy per unit of area per unit of time */
export class HeatFlux {
    private value: number;
    private wattspersquaremeterLazy: number | null = null;
    private wattspersquareinchLazy: number | null = null;
    private wattspersquarefootLazy: number | null = null;
    private btuspersecondsquareinchLazy: number | null = null;
    private btuspersecondsquarefootLazy: number | null = null;
    private btusperminutesquarefootLazy: number | null = null;
    private btusperhoursquarefootLazy: number | null = null;
    private caloriespersecondsquarecentimeterLazy: number | null = null;
    private kilocaloriesperhoursquaremeterLazy: number | null = null;
    private poundsforceperfootsecondLazy: number | null = null;
    private poundspersecondcubedLazy: number | null = null;
    private nanowattspersquaremeterLazy: number | null = null;
    private microwattspersquaremeterLazy: number | null = null;
    private centiwattspersquaremeterLazy: number | null = null;
    private deciwattspersquaremeterLazy: number | null = null;
    private kilowattspersquaremeterLazy: number | null = null;
    private kilocaloriespersecondsquarecentimeterLazy: number | null = null;

    /**
     * Create a new HeatFlux.
     * @param value The value.
     * @param fromUnit The ‘HeatFlux’ unit to create from.
     */
    public constructor(value: number, fromUnit: HeatFluxUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of HeatFlux is WattPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get WattsPerSquareMeter(): number {
        if(this.wattspersquaremeterLazy !== null){
            return this.wattspersquaremeterLazy;
        }
        return this.wattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.WattsPerSquareMeter);
    }

    /** */
    public get WattsPerSquareInch(): number {
        if(this.wattspersquareinchLazy !== null){
            return this.wattspersquareinchLazy;
        }
        return this.wattspersquareinchLazy = this.convertFromBase(HeatFluxUnits.WattsPerSquareInch);
    }

    /** */
    public get WattsPerSquareFoot(): number {
        if(this.wattspersquarefootLazy !== null){
            return this.wattspersquarefootLazy;
        }
        return this.wattspersquarefootLazy = this.convertFromBase(HeatFluxUnits.WattsPerSquareFoot);
    }

    /** */
    public get BtusPerSecondSquareInch(): number {
        if(this.btuspersecondsquareinchLazy !== null){
            return this.btuspersecondsquareinchLazy;
        }
        return this.btuspersecondsquareinchLazy = this.convertFromBase(HeatFluxUnits.BtusPerSecondSquareInch);
    }

    /** */
    public get BtusPerSecondSquareFoot(): number {
        if(this.btuspersecondsquarefootLazy !== null){
            return this.btuspersecondsquarefootLazy;
        }
        return this.btuspersecondsquarefootLazy = this.convertFromBase(HeatFluxUnits.BtusPerSecondSquareFoot);
    }

    /** */
    public get BtusPerMinuteSquareFoot(): number {
        if(this.btusperminutesquarefootLazy !== null){
            return this.btusperminutesquarefootLazy;
        }
        return this.btusperminutesquarefootLazy = this.convertFromBase(HeatFluxUnits.BtusPerMinuteSquareFoot);
    }

    /** */
    public get BtusPerHourSquareFoot(): number {
        if(this.btusperhoursquarefootLazy !== null){
            return this.btusperhoursquarefootLazy;
        }
        return this.btusperhoursquarefootLazy = this.convertFromBase(HeatFluxUnits.BtusPerHourSquareFoot);
    }

    /** */
    public get CaloriesPerSecondSquareCentimeter(): number {
        if(this.caloriespersecondsquarecentimeterLazy !== null){
            return this.caloriespersecondsquarecentimeterLazy;
        }
        return this.caloriespersecondsquarecentimeterLazy = this.convertFromBase(HeatFluxUnits.CaloriesPerSecondSquareCentimeter);
    }

    /** */
    public get KilocaloriesPerHourSquareMeter(): number {
        if(this.kilocaloriesperhoursquaremeterLazy !== null){
            return this.kilocaloriesperhoursquaremeterLazy;
        }
        return this.kilocaloriesperhoursquaremeterLazy = this.convertFromBase(HeatFluxUnits.KilocaloriesPerHourSquareMeter);
    }

    /** */
    public get PoundsForcePerFootSecond(): number {
        if(this.poundsforceperfootsecondLazy !== null){
            return this.poundsforceperfootsecondLazy;
        }
        return this.poundsforceperfootsecondLazy = this.convertFromBase(HeatFluxUnits.PoundsForcePerFootSecond);
    }

    /** */
    public get PoundsPerSecondCubed(): number {
        if(this.poundspersecondcubedLazy !== null){
            return this.poundspersecondcubedLazy;
        }
        return this.poundspersecondcubedLazy = this.convertFromBase(HeatFluxUnits.PoundsPerSecondCubed);
    }

    /** */
    public get NanowattsPerSquareMeter(): number {
        if(this.nanowattspersquaremeterLazy !== null){
            return this.nanowattspersquaremeterLazy;
        }
        return this.nanowattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.NanowattsPerSquareMeter);
    }

    /** */
    public get MicrowattsPerSquareMeter(): number {
        if(this.microwattspersquaremeterLazy !== null){
            return this.microwattspersquaremeterLazy;
        }
        return this.microwattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.MicrowattsPerSquareMeter);
    }

    /** */
    public get CentiwattsPerSquareMeter(): number {
        if(this.centiwattspersquaremeterLazy !== null){
            return this.centiwattspersquaremeterLazy;
        }
        return this.centiwattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.CentiwattsPerSquareMeter);
    }

    /** */
    public get DeciwattsPerSquareMeter(): number {
        if(this.deciwattspersquaremeterLazy !== null){
            return this.deciwattspersquaremeterLazy;
        }
        return this.deciwattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.DeciwattsPerSquareMeter);
    }

    /** */
    public get KilowattsPerSquareMeter(): number {
        if(this.kilowattspersquaremeterLazy !== null){
            return this.kilowattspersquaremeterLazy;
        }
        return this.kilowattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.KilowattsPerSquareMeter);
    }

    /** */
    public get KilocaloriesPerSecondSquareCentimeter(): number {
        if(this.kilocaloriespersecondsquarecentimeterLazy !== null){
            return this.kilocaloriespersecondsquarecentimeterLazy;
        }
        return this.kilocaloriespersecondsquarecentimeterLazy = this.convertFromBase(HeatFluxUnits.KilocaloriesPerSecondSquareCentimeter);
    }

    /**
     * Create a new HeatFlux instance from a WattsPerSquareMeter
     *
     * @param value The unit as WattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromWattsPerSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.WattsPerSquareMeter);
    }

    /**
     * Create a new HeatFlux instance from a WattsPerSquareInch
     *
     * @param value The unit as WattsPerSquareInch to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromWattsPerSquareInch(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.WattsPerSquareInch);
    }

    /**
     * Create a new HeatFlux instance from a WattsPerSquareFoot
     *
     * @param value The unit as WattsPerSquareFoot to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromWattsPerSquareFoot(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.WattsPerSquareFoot);
    }

    /**
     * Create a new HeatFlux instance from a BtusPerSecondSquareInch
     *
     * @param value The unit as BtusPerSecondSquareInch to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromBtusPerSecondSquareInch(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.BtusPerSecondSquareInch);
    }

    /**
     * Create a new HeatFlux instance from a BtusPerSecondSquareFoot
     *
     * @param value The unit as BtusPerSecondSquareFoot to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromBtusPerSecondSquareFoot(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.BtusPerSecondSquareFoot);
    }

    /**
     * Create a new HeatFlux instance from a BtusPerMinuteSquareFoot
     *
     * @param value The unit as BtusPerMinuteSquareFoot to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromBtusPerMinuteSquareFoot(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.BtusPerMinuteSquareFoot);
    }

    /**
     * Create a new HeatFlux instance from a BtusPerHourSquareFoot
     *
     * @param value The unit as BtusPerHourSquareFoot to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromBtusPerHourSquareFoot(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.BtusPerHourSquareFoot);
    }

    /**
     * Create a new HeatFlux instance from a CaloriesPerSecondSquareCentimeter
     *
     * @param value The unit as CaloriesPerSecondSquareCentimeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromCaloriesPerSecondSquareCentimeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.CaloriesPerSecondSquareCentimeter);
    }

    /**
     * Create a new HeatFlux instance from a KilocaloriesPerHourSquareMeter
     *
     * @param value The unit as KilocaloriesPerHourSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromKilocaloriesPerHourSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.KilocaloriesPerHourSquareMeter);
    }

    /**
     * Create a new HeatFlux instance from a PoundsForcePerFootSecond
     *
     * @param value The unit as PoundsForcePerFootSecond to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromPoundsForcePerFootSecond(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.PoundsForcePerFootSecond);
    }

    /**
     * Create a new HeatFlux instance from a PoundsPerSecondCubed
     *
     * @param value The unit as PoundsPerSecondCubed to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromPoundsPerSecondCubed(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.PoundsPerSecondCubed);
    }

    /**
     * Create a new HeatFlux instance from a NanowattsPerSquareMeter
     *
     * @param value The unit as NanowattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromNanowattsPerSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.NanowattsPerSquareMeter);
    }

    /**
     * Create a new HeatFlux instance from a MicrowattsPerSquareMeter
     *
     * @param value The unit as MicrowattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromMicrowattsPerSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.MicrowattsPerSquareMeter);
    }

    /**
     * Create a new HeatFlux instance from a CentiwattsPerSquareMeter
     *
     * @param value The unit as CentiwattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromCentiwattsPerSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.CentiwattsPerSquareMeter);
    }

    /**
     * Create a new HeatFlux instance from a DeciwattsPerSquareMeter
     *
     * @param value The unit as DeciwattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromDeciwattsPerSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.DeciwattsPerSquareMeter);
    }

    /**
     * Create a new HeatFlux instance from a KilowattsPerSquareMeter
     *
     * @param value The unit as KilowattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromKilowattsPerSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.KilowattsPerSquareMeter);
    }

    /**
     * Create a new HeatFlux instance from a KilocaloriesPerSecondSquareCentimeter
     *
     * @param value The unit as KilocaloriesPerSecondSquareCentimeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    public static FromKilocaloriesPerSecondSquareCentimeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.KilocaloriesPerSecondSquareCentimeter);
    }

    private convertFromBase(toUnit: HeatFluxUnits): number {
        switch (toUnit) {
                
            case HeatFluxUnits.WattsPerSquareMeter:
                return this.value;
            case HeatFluxUnits.WattsPerSquareInch:
                return this.value/1.5500031e3;
            case HeatFluxUnits.WattsPerSquareFoot:
                return this.value/1.07639e1;
            case HeatFluxUnits.BtusPerSecondSquareInch:
                return this.value/1.63533984e6;
            case HeatFluxUnits.BtusPerSecondSquareFoot:
                return this.value/1.13565267e4;
            case HeatFluxUnits.BtusPerMinuteSquareFoot:
                return this.value/1.89275445e2;
            case HeatFluxUnits.BtusPerHourSquareFoot:
                return this.value/3.15459075;
            case HeatFluxUnits.CaloriesPerSecondSquareCentimeter:
                return this.value/4.1868e4;
            case HeatFluxUnits.KilocaloriesPerHourSquareMeter:
                return this.value/1.163;
            case HeatFluxUnits.PoundsForcePerFootSecond:
                return this.value/1.459390293720636e1;
            case HeatFluxUnits.PoundsPerSecondCubed:
                return this.value/4.5359237e-1;
            case HeatFluxUnits.NanowattsPerSquareMeter:
                return (this.value) / 1e-9;
            case HeatFluxUnits.MicrowattsPerSquareMeter:
                return (this.value) / 0.000001;
            case HeatFluxUnits.CentiwattsPerSquareMeter:
                return (this.value) / 0.01;
            case HeatFluxUnits.DeciwattsPerSquareMeter:
                return (this.value) / 0.1;
            case HeatFluxUnits.KilowattsPerSquareMeter:
                return (this.value) / 1000;
            case HeatFluxUnits.KilocaloriesPerSecondSquareCentimeter:
                return (this.value/4.1868e4) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: HeatFluxUnits): number {
        switch (fromUnit) {
                
            case HeatFluxUnits.WattsPerSquareMeter:
                return value;
            case HeatFluxUnits.WattsPerSquareInch:
                return value*1.5500031e3;
            case HeatFluxUnits.WattsPerSquareFoot:
                return value*1.07639e1;
            case HeatFluxUnits.BtusPerSecondSquareInch:
                return value*1.63533984e6;
            case HeatFluxUnits.BtusPerSecondSquareFoot:
                return value*1.13565267e4;
            case HeatFluxUnits.BtusPerMinuteSquareFoot:
                return value*1.89275445e2;
            case HeatFluxUnits.BtusPerHourSquareFoot:
                return value*3.15459075;
            case HeatFluxUnits.CaloriesPerSecondSquareCentimeter:
                return value*4.1868e4;
            case HeatFluxUnits.KilocaloriesPerHourSquareMeter:
                return value*1.163;
            case HeatFluxUnits.PoundsForcePerFootSecond:
                return value*1.459390293720636e1;
            case HeatFluxUnits.PoundsPerSecondCubed:
                return value*4.5359237e-1;
            case HeatFluxUnits.NanowattsPerSquareMeter:
                return (value) * 1e-9;
            case HeatFluxUnits.MicrowattsPerSquareMeter:
                return (value) * 0.000001;
            case HeatFluxUnits.CentiwattsPerSquareMeter:
                return (value) * 0.01;
            case HeatFluxUnits.DeciwattsPerSquareMeter:
                return (value) * 0.1;
            case HeatFluxUnits.KilowattsPerSquareMeter:
                return (value) * 1000;
            case HeatFluxUnits.KilocaloriesPerSecondSquareCentimeter:
                return (value*4.1868e4) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the HeatFlux to string.
     * Note! the default format for HeatFlux is WattsPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the HeatFlux.
     * @returns The string format of the HeatFlux.
     */
    public toString(toUnit: HeatFluxUnits = HeatFluxUnits.WattsPerSquareMeter): string {

        switch (toUnit) {
            
            case HeatFluxUnits.WattsPerSquareMeter:
                return this.WattsPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.WattsPerSquareInch:
                return this.WattsPerSquareInch + ` W/in²`;
            case HeatFluxUnits.WattsPerSquareFoot:
                return this.WattsPerSquareFoot + ` W/ft²`;
            case HeatFluxUnits.BtusPerSecondSquareInch:
                return this.BtusPerSecondSquareInch + ` BTU/s·in²`;
            case HeatFluxUnits.BtusPerSecondSquareFoot:
                return this.BtusPerSecondSquareFoot + ` BTU/s·ft²`;
            case HeatFluxUnits.BtusPerMinuteSquareFoot:
                return this.BtusPerMinuteSquareFoot + ` BTU/min·ft²`;
            case HeatFluxUnits.BtusPerHourSquareFoot:
                return this.BtusPerHourSquareFoot + ` BTU/h·ft²`;
            case HeatFluxUnits.CaloriesPerSecondSquareCentimeter:
                return this.CaloriesPerSecondSquareCentimeter + ` cal/s·cm²`;
            case HeatFluxUnits.KilocaloriesPerHourSquareMeter:
                return this.KilocaloriesPerHourSquareMeter + ` kcal/h·m²`;
            case HeatFluxUnits.PoundsForcePerFootSecond:
                return this.PoundsForcePerFootSecond + ` lbf/(ft·s)`;
            case HeatFluxUnits.PoundsPerSecondCubed:
                return this.PoundsPerSecondCubed + ` lb/s³`;
            case HeatFluxUnits.NanowattsPerSquareMeter:
                return this.NanowattsPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.MicrowattsPerSquareMeter:
                return this.MicrowattsPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.CentiwattsPerSquareMeter:
                return this.CentiwattsPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.DeciwattsPerSquareMeter:
                return this.DeciwattsPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.KilowattsPerSquareMeter:
                return this.KilowattsPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.KilocaloriesPerSecondSquareCentimeter:
                return this.KilocaloriesPerSecondSquareCentimeter + ` cal/s·cm²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
