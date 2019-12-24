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

    public constructor(value: number, fromUnit: HeatFluxUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get WattsPerSquareMeter(): number {
        return this.convertFromBase(HeatFluxUnits.WattsPerSquareMeter);
    }

    public get WattsPerSquareInch(): number {
        return this.convertFromBase(HeatFluxUnits.WattsPerSquareInch);
    }

    public get WattsPerSquareFoot(): number {
        return this.convertFromBase(HeatFluxUnits.WattsPerSquareFoot);
    }

    public get BtusPerSecondSquareInch(): number {
        return this.convertFromBase(HeatFluxUnits.BtusPerSecondSquareInch);
    }

    public get BtusPerSecondSquareFoot(): number {
        return this.convertFromBase(HeatFluxUnits.BtusPerSecondSquareFoot);
    }

    public get BtusPerMinuteSquareFoot(): number {
        return this.convertFromBase(HeatFluxUnits.BtusPerMinuteSquareFoot);
    }

    public get BtusPerHourSquareFoot(): number {
        return this.convertFromBase(HeatFluxUnits.BtusPerHourSquareFoot);
    }

    public get CaloriesPerSecondSquareCentimeter(): number {
        return this.convertFromBase(HeatFluxUnits.CaloriesPerSecondSquareCentimeter);
    }

    public get KilocaloriesPerHourSquareMeter(): number {
        return this.convertFromBase(HeatFluxUnits.KilocaloriesPerHourSquareMeter);
    }

    public get PoundsForcePerFootSecond(): number {
        return this.convertFromBase(HeatFluxUnits.PoundsForcePerFootSecond);
    }

    public get PoundsPerSecondCubed(): number {
        return this.convertFromBase(HeatFluxUnits.PoundsPerSecondCubed);
    }

    public get Nanowattspersquaremeter(): number {
        return this.convertFromBase(HeatFluxUnits.Nanowattspersquaremeter);
    }

    public get Microwattspersquaremeter(): number {
        return this.convertFromBase(HeatFluxUnits.Microwattspersquaremeter);
    }

    public get Centiwattspersquaremeter(): number {
        return this.convertFromBase(HeatFluxUnits.Centiwattspersquaremeter);
    }

    public get Deciwattspersquaremeter(): number {
        return this.convertFromBase(HeatFluxUnits.Deciwattspersquaremeter);
    }

    public get Kilowattspersquaremeter(): number {
        return this.convertFromBase(HeatFluxUnits.Kilowattspersquaremeter);
    }

    public get Kilocaloriespersecondsquarecentimeter(): number {
        return this.convertFromBase(HeatFluxUnits.Kilocaloriespersecondsquarecentimeter);
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
                    return (this.value) * 1e-9;
                
                case HeatFluxUnits.Microwattspersquaremeter:
                    return (this.value) * 0.000001;
                
                case HeatFluxUnits.Centiwattspersquaremeter:
                    return (this.value) * 0.01;
                
                case HeatFluxUnits.Deciwattspersquaremeter:
                    return (this.value) * 0.1;
                
                case HeatFluxUnits.Kilowattspersquaremeter:
                    return (this.value) * 1000;
                
                case HeatFluxUnits.Kilocaloriespersecondsquarecentimeter:
                    return (this.value*4.1868e4) * 1000;
                
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
                    return (value) / 1e-9;
                
                case HeatFluxUnits.Microwattspersquaremeter:
                    return (value) / 0.000001;
                
                case HeatFluxUnits.Centiwattspersquaremeter:
                    return (value) / 0.01;
                
                case HeatFluxUnits.Deciwattspersquaremeter:
                    return (value) / 0.1;
                
                case HeatFluxUnits.Kilowattspersquaremeter:
                    return (value) / 1000;
                
                case HeatFluxUnits.Kilocaloriespersecondsquarecentimeter:
                    return (value/4.1868e4) / 1000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
