export enum HeatFluxUnits {
    WattsPerSquareMeter,
    WattsPerSquareInch,
    WattsPerSquareFoot,
    BtusPerSecondSquareInch,
    BtusPerSecondSquareFoot,
    BtusPerMinuteSquareFoot,
    BtusPerHourSquareFoot,
    CaloriesPerSecondSquareCentimeter,
    KilocaloriesPerHourSquareMeter,
    PoundsForcePerFootSecond,
    PoundsPerSecondCubed,
    Nanowattspersquaremeter,
    Microwattspersquaremeter,
    Centiwattspersquaremeter,
    Deciwattspersquaremeter,
    Kilowattspersquaremeter,
    Kilocaloriespersecondsquarecentimeter
}

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

    public constructor(value: number, fromUnit: HeatFluxUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get WattsPerSquareMeter(): number {
        if(this.wattspersquaremeterLazy !== null){
            return this.wattspersquaremeterLazy;
        }
        return this.wattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.WattsPerSquareMeter);
    }

    public get WattsPerSquareInch(): number {
        if(this.wattspersquareinchLazy !== null){
            return this.wattspersquareinchLazy;
        }
        return this.wattspersquareinchLazy = this.convertFromBase(HeatFluxUnits.WattsPerSquareInch);
    }

    public get WattsPerSquareFoot(): number {
        if(this.wattspersquarefootLazy !== null){
            return this.wattspersquarefootLazy;
        }
        return this.wattspersquarefootLazy = this.convertFromBase(HeatFluxUnits.WattsPerSquareFoot);
    }

    public get BtusPerSecondSquareInch(): number {
        if(this.btuspersecondsquareinchLazy !== null){
            return this.btuspersecondsquareinchLazy;
        }
        return this.btuspersecondsquareinchLazy = this.convertFromBase(HeatFluxUnits.BtusPerSecondSquareInch);
    }

    public get BtusPerSecondSquareFoot(): number {
        if(this.btuspersecondsquarefootLazy !== null){
            return this.btuspersecondsquarefootLazy;
        }
        return this.btuspersecondsquarefootLazy = this.convertFromBase(HeatFluxUnits.BtusPerSecondSquareFoot);
    }

    public get BtusPerMinuteSquareFoot(): number {
        if(this.btusperminutesquarefootLazy !== null){
            return this.btusperminutesquarefootLazy;
        }
        return this.btusperminutesquarefootLazy = this.convertFromBase(HeatFluxUnits.BtusPerMinuteSquareFoot);
    }

    public get BtusPerHourSquareFoot(): number {
        if(this.btusperhoursquarefootLazy !== null){
            return this.btusperhoursquarefootLazy;
        }
        return this.btusperhoursquarefootLazy = this.convertFromBase(HeatFluxUnits.BtusPerHourSquareFoot);
    }

    public get CaloriesPerSecondSquareCentimeter(): number {
        if(this.caloriespersecondsquarecentimeterLazy !== null){
            return this.caloriespersecondsquarecentimeterLazy;
        }
        return this.caloriespersecondsquarecentimeterLazy = this.convertFromBase(HeatFluxUnits.CaloriesPerSecondSquareCentimeter);
    }

    public get KilocaloriesPerHourSquareMeter(): number {
        if(this.kilocaloriesperhoursquaremeterLazy !== null){
            return this.kilocaloriesperhoursquaremeterLazy;
        }
        return this.kilocaloriesperhoursquaremeterLazy = this.convertFromBase(HeatFluxUnits.KilocaloriesPerHourSquareMeter);
    }

    public get PoundsForcePerFootSecond(): number {
        if(this.poundsforceperfootsecondLazy !== null){
            return this.poundsforceperfootsecondLazy;
        }
        return this.poundsforceperfootsecondLazy = this.convertFromBase(HeatFluxUnits.PoundsForcePerFootSecond);
    }

    public get PoundsPerSecondCubed(): number {
        if(this.poundspersecondcubedLazy !== null){
            return this.poundspersecondcubedLazy;
        }
        return this.poundspersecondcubedLazy = this.convertFromBase(HeatFluxUnits.PoundsPerSecondCubed);
    }

    public get Nanowattspersquaremeter(): number {
        if(this.nanowattspersquaremeterLazy !== null){
            return this.nanowattspersquaremeterLazy;
        }
        return this.nanowattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.Nanowattspersquaremeter);
    }

    public get Microwattspersquaremeter(): number {
        if(this.microwattspersquaremeterLazy !== null){
            return this.microwattspersquaremeterLazy;
        }
        return this.microwattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.Microwattspersquaremeter);
    }

    public get Centiwattspersquaremeter(): number {
        if(this.centiwattspersquaremeterLazy !== null){
            return this.centiwattspersquaremeterLazy;
        }
        return this.centiwattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.Centiwattspersquaremeter);
    }

    public get Deciwattspersquaremeter(): number {
        if(this.deciwattspersquaremeterLazy !== null){
            return this.deciwattspersquaremeterLazy;
        }
        return this.deciwattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.Deciwattspersquaremeter);
    }

    public get Kilowattspersquaremeter(): number {
        if(this.kilowattspersquaremeterLazy !== null){
            return this.kilowattspersquaremeterLazy;
        }
        return this.kilowattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.Kilowattspersquaremeter);
    }

    public get Kilocaloriespersecondsquarecentimeter(): number {
        if(this.kilocaloriespersecondsquarecentimeterLazy !== null){
            return this.kilocaloriespersecondsquarecentimeterLazy;
        }
        return this.kilocaloriespersecondsquarecentimeterLazy = this.convertFromBase(HeatFluxUnits.Kilocaloriespersecondsquarecentimeter);
    }

    public static FromWattsPerSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.WattsPerSquareMeter);
    }

    public static FromWattsPerSquareInch(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.WattsPerSquareInch);
    }

    public static FromWattsPerSquareFoot(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.WattsPerSquareFoot);
    }

    public static FromBtusPerSecondSquareInch(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.BtusPerSecondSquareInch);
    }

    public static FromBtusPerSecondSquareFoot(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.BtusPerSecondSquareFoot);
    }

    public static FromBtusPerMinuteSquareFoot(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.BtusPerMinuteSquareFoot);
    }

    public static FromBtusPerHourSquareFoot(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.BtusPerHourSquareFoot);
    }

    public static FromCaloriesPerSecondSquareCentimeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.CaloriesPerSecondSquareCentimeter);
    }

    public static FromKilocaloriesPerHourSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.KilocaloriesPerHourSquareMeter);
    }

    public static FromPoundsForcePerFootSecond(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.PoundsForcePerFootSecond);
    }

    public static FromPoundsPerSecondCubed(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.PoundsPerSecondCubed);
    }

    public static FromNanowattspersquaremeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.Nanowattspersquaremeter);
    }

    public static FromMicrowattspersquaremeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.Microwattspersquaremeter);
    }

    public static FromCentiwattspersquaremeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.Centiwattspersquaremeter);
    }

    public static FromDeciwattspersquaremeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.Deciwattspersquaremeter);
    }

    public static FromKilowattspersquaremeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.Kilowattspersquaremeter);
    }

    public static FromKilocaloriespersecondsquarecentimeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.Kilocaloriespersecondsquarecentimeter);
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
            case HeatFluxUnits.Nanowattspersquaremeter:
                return (this.value) / 1e-9;
            case HeatFluxUnits.Microwattspersquaremeter:
                return (this.value) / 0.000001;
            case HeatFluxUnits.Centiwattspersquaremeter:
                return (this.value) / 0.01;
            case HeatFluxUnits.Deciwattspersquaremeter:
                return (this.value) / 0.1;
            case HeatFluxUnits.Kilowattspersquaremeter:
                return (this.value) / 1000;
            case HeatFluxUnits.Kilocaloriespersecondsquarecentimeter:
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
            case HeatFluxUnits.Nanowattspersquaremeter:
                return (value) * 1e-9;
            case HeatFluxUnits.Microwattspersquaremeter:
                return (value) * 0.000001;
            case HeatFluxUnits.Centiwattspersquaremeter:
                return (value) * 0.01;
            case HeatFluxUnits.Deciwattspersquaremeter:
                return (value) * 0.1;
            case HeatFluxUnits.Kilowattspersquaremeter:
                return (value) * 1000;
            case HeatFluxUnits.Kilocaloriespersecondsquarecentimeter:
                return (value*4.1868e4) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
