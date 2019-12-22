export enum IrradiationUnits {
    JoulesPerSquareMeter,
    JoulesPerSquareCentimeter,
    JoulesPerSquareMillimeter,
    WattHoursPerSquareMeter,
    Kilojoulespersquaremeter,
    Kilowatthourspersquaremeter
}

export class Irradiation {
    private value: number;

    public constructor(value: number, fromUnit: IrradiationUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerSquareMeter(): number {
        return this.convertFromBase(IrradiationUnits.JoulesPerSquareMeter);
    }

    public get JoulesPerSquareCentimeter(): number {
        return this.convertFromBase(IrradiationUnits.JoulesPerSquareCentimeter);
    }

    public get JoulesPerSquareMillimeter(): number {
        return this.convertFromBase(IrradiationUnits.JoulesPerSquareMillimeter);
    }

    public get WattHoursPerSquareMeter(): number {
        return this.convertFromBase(IrradiationUnits.WattHoursPerSquareMeter);
    }

    public get Kilojoulespersquaremeter(): number {
        return this.convertFromBase(IrradiationUnits.Kilojoulespersquaremeter);
    }

    public get Kilowatthourspersquaremeter(): number {
        return this.convertFromBase(IrradiationUnits.Kilowatthourspersquaremeter);
    }

    public static FromJoulesPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareMeter);
    }

    public static FromJoulesPerSquareCentimeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareCentimeter);
    }

    public static FromJoulesPerSquareMillimeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareMillimeter);
    }

    public static FromWattHoursPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.WattHoursPerSquareMeter);
    }

    public static FromKilojoulespersquaremeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.Kilojoulespersquaremeter);
    }

    public static FromKilowatthourspersquaremeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.Kilowatthourspersquaremeter);
    }

    private convertFromBase(toUnit: IrradiationUnits): number {

            switch (toUnit) {
                
                case IrradiationUnits.JoulesPerSquareMeter:
                    return this.value;
                
                case IrradiationUnits.JoulesPerSquareCentimeter:
                    return this.value*1e4;
                
                case IrradiationUnits.JoulesPerSquareMillimeter:
                    return this.value*1e6;
                
                case IrradiationUnits.WattHoursPerSquareMeter:
                    return this.value*3600;
                
                case IrradiationUnits.Kilojoulespersquaremeter:
                    return (this.value) * 1000;
                
                case IrradiationUnits.Kilowatthourspersquaremeter:
                    return (this.value/3600) * 1000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: IrradiationUnits): number {

                switch (fromUnit) {
                    
                case IrradiationUnits.JoulesPerSquareMeter:
                    return this.value;
                
                case IrradiationUnits.JoulesPerSquareCentimeter:
                    return this.value/1e4;
                
                case IrradiationUnits.JoulesPerSquareMillimeter:
                    return this.value/1e6;
                
                case IrradiationUnits.WattHoursPerSquareMeter:
                    return this.value/3600;
                
                case IrradiationUnits.Kilojoulespersquaremeter:
                    return (this.value) / 1000;
                
                case IrradiationUnits.Kilowatthourspersquaremeter:
                    return (this.value*3600) / 1000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
