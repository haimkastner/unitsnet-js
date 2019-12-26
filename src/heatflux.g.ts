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
    NanowattPerSquareMeter,
    MicrowattPerSquareMeter,
    CentiwattPerSquareMeter,
    DeciwattPerSquareMeter,
    KilowattPerSquareMeter,
    KilocaloriePerSecondSquareCentimeter
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
    private nanowattpersquaremeterLazy: number | null = null;
    private microwattpersquaremeterLazy: number | null = null;
    private centiwattpersquaremeterLazy: number | null = null;
    private deciwattpersquaremeterLazy: number | null = null;
    private kilowattpersquaremeterLazy: number | null = null;
    private kilocaloriepersecondsquarecentimeterLazy: number | null = null;

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

    public get NanowattPerSquareMeter(): number {
        if(this.nanowattpersquaremeterLazy !== null){
            return this.nanowattpersquaremeterLazy;
        }
        return this.nanowattpersquaremeterLazy = this.convertFromBase(HeatFluxUnits.NanowattPerSquareMeter);
    }

    public get MicrowattPerSquareMeter(): number {
        if(this.microwattpersquaremeterLazy !== null){
            return this.microwattpersquaremeterLazy;
        }
        return this.microwattpersquaremeterLazy = this.convertFromBase(HeatFluxUnits.MicrowattPerSquareMeter);
    }

    public get CentiwattPerSquareMeter(): number {
        if(this.centiwattpersquaremeterLazy !== null){
            return this.centiwattpersquaremeterLazy;
        }
        return this.centiwattpersquaremeterLazy = this.convertFromBase(HeatFluxUnits.CentiwattPerSquareMeter);
    }

    public get DeciwattPerSquareMeter(): number {
        if(this.deciwattpersquaremeterLazy !== null){
            return this.deciwattpersquaremeterLazy;
        }
        return this.deciwattpersquaremeterLazy = this.convertFromBase(HeatFluxUnits.DeciwattPerSquareMeter);
    }

    public get KilowattPerSquareMeter(): number {
        if(this.kilowattpersquaremeterLazy !== null){
            return this.kilowattpersquaremeterLazy;
        }
        return this.kilowattpersquaremeterLazy = this.convertFromBase(HeatFluxUnits.KilowattPerSquareMeter);
    }

    public get KilocaloriePerSecondSquareCentimeter(): number {
        if(this.kilocaloriepersecondsquarecentimeterLazy !== null){
            return this.kilocaloriepersecondsquarecentimeterLazy;
        }
        return this.kilocaloriepersecondsquarecentimeterLazy = this.convertFromBase(HeatFluxUnits.KilocaloriePerSecondSquareCentimeter);
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

    public static FromNanowattPerSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.NanowattPerSquareMeter);
    }

    public static FromMicrowattPerSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.MicrowattPerSquareMeter);
    }

    public static FromCentiwattPerSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.CentiwattPerSquareMeter);
    }

    public static FromDeciwattPerSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.DeciwattPerSquareMeter);
    }

    public static FromKilowattPerSquareMeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.KilowattPerSquareMeter);
    }

    public static FromKilocaloriePerSecondSquareCentimeter(value: number): HeatFlux {
        return new HeatFlux(value, HeatFluxUnits.KilocaloriePerSecondSquareCentimeter);
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
            case HeatFluxUnits.NanowattPerSquareMeter:
                return (this.value) / 1e-9;
            case HeatFluxUnits.MicrowattPerSquareMeter:
                return (this.value) / 0.000001;
            case HeatFluxUnits.CentiwattPerSquareMeter:
                return (this.value) / 0.01;
            case HeatFluxUnits.DeciwattPerSquareMeter:
                return (this.value) / 0.1;
            case HeatFluxUnits.KilowattPerSquareMeter:
                return (this.value) / 1000;
            case HeatFluxUnits.KilocaloriePerSecondSquareCentimeter:
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
            case HeatFluxUnits.NanowattPerSquareMeter:
                return (value) * 1e-9;
            case HeatFluxUnits.MicrowattPerSquareMeter:
                return (value) * 0.000001;
            case HeatFluxUnits.CentiwattPerSquareMeter:
                return (value) * 0.01;
            case HeatFluxUnits.DeciwattPerSquareMeter:
                return (value) * 0.1;
            case HeatFluxUnits.KilowattPerSquareMeter:
                return (value) * 1000;
            case HeatFluxUnits.KilocaloriePerSecondSquareCentimeter:
                return (value*4.1868e4) * 1000;
            default:
                break;
        }
        return NaN;
    }

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
            case HeatFluxUnits.NanowattPerSquareMeter:
                return this.NanowattPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.MicrowattPerSquareMeter:
                return this.MicrowattPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.CentiwattPerSquareMeter:
                return this.CentiwattPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.DeciwattPerSquareMeter:
                return this.DeciwattPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.KilowattPerSquareMeter:
                return this.KilowattPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.KilocaloriePerSecondSquareCentimeter:
                return this.KilocaloriePerSecondSquareCentimeter + ` cal/s·cm²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
