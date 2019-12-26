export enum IrradiationUnits {
    JoulesPerSquareMeter,
    JoulesPerSquareCentimeter,
    JoulesPerSquareMillimeter,
    WattHoursPerSquareMeter,
    KilojoulePerSquareMeter,
    KilowattHourPerSquareMeter
}

export class Irradiation {
    private value: number;
    private joulespersquaremeterLazy: number | null = null;
    private joulespersquarecentimeterLazy: number | null = null;
    private joulespersquaremillimeterLazy: number | null = null;
    private watthourspersquaremeterLazy: number | null = null;
    private kilojoulepersquaremeterLazy: number | null = null;
    private kilowatthourpersquaremeterLazy: number | null = null;

    public constructor(value: number, fromUnit: IrradiationUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerSquareMeter(): number {
        if(this.joulespersquaremeterLazy !== null){
            return this.joulespersquaremeterLazy;
        }
        return this.joulespersquaremeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareMeter);
    }

    public get JoulesPerSquareCentimeter(): number {
        if(this.joulespersquarecentimeterLazy !== null){
            return this.joulespersquarecentimeterLazy;
        }
        return this.joulespersquarecentimeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareCentimeter);
    }

    public get JoulesPerSquareMillimeter(): number {
        if(this.joulespersquaremillimeterLazy !== null){
            return this.joulespersquaremillimeterLazy;
        }
        return this.joulespersquaremillimeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareMillimeter);
    }

    public get WattHoursPerSquareMeter(): number {
        if(this.watthourspersquaremeterLazy !== null){
            return this.watthourspersquaremeterLazy;
        }
        return this.watthourspersquaremeterLazy = this.convertFromBase(IrradiationUnits.WattHoursPerSquareMeter);
    }

    public get KilojoulePerSquareMeter(): number {
        if(this.kilojoulepersquaremeterLazy !== null){
            return this.kilojoulepersquaremeterLazy;
        }
        return this.kilojoulepersquaremeterLazy = this.convertFromBase(IrradiationUnits.KilojoulePerSquareMeter);
    }

    public get KilowattHourPerSquareMeter(): number {
        if(this.kilowatthourpersquaremeterLazy !== null){
            return this.kilowatthourpersquaremeterLazy;
        }
        return this.kilowatthourpersquaremeterLazy = this.convertFromBase(IrradiationUnits.KilowattHourPerSquareMeter);
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

    public static FromKilojoulePerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.KilojoulePerSquareMeter);
    }

    public static FromKilowattHourPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.KilowattHourPerSquareMeter);
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
            case IrradiationUnits.KilojoulePerSquareMeter:
                return (this.value) / 1000;
            case IrradiationUnits.KilowattHourPerSquareMeter:
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
            case IrradiationUnits.KilojoulePerSquareMeter:
                return (value) * 1000;
            case IrradiationUnits.KilowattHourPerSquareMeter:
                return (value*3600) * 1000;
            default:
                break;
        }
        return NaN;
    }

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
            case IrradiationUnits.KilojoulePerSquareMeter:
                return this.KilojoulePerSquareMeter + ` J/m²`;
            case IrradiationUnits.KilowattHourPerSquareMeter:
                return this.KilowattHourPerSquareMeter + ` Wh/m²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
