export enum IrradianceUnits {
    WattsPerSquareMeter,
    WattsPerSquareCentimeter,
    Picowattspersquaremeter,
    Nanowattspersquaremeter,
    Microwattspersquaremeter,
    Kilowattspersquaremeter,
    Megawattspersquaremeter,
    Picowattspersquarecentimeter,
    Nanowattspersquarecentimeter,
    Microwattspersquarecentimeter,
    Kilowattspersquarecentimeter,
    Megawattspersquarecentimeter
}

export class Irradiance {
    private value: number;

    public constructor(value: number, fromUnit: IrradianceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get WattsPerSquareMeter(): number {
        return this.convertFromBase(IrradianceUnits.WattsPerSquareMeter);
    }

    public get WattsPerSquareCentimeter(): number {
        return this.convertFromBase(IrradianceUnits.WattsPerSquareCentimeter);
    }

    public get Picowattspersquaremeter(): number {
        return this.convertFromBase(IrradianceUnits.Picowattspersquaremeter);
    }

    public get Nanowattspersquaremeter(): number {
        return this.convertFromBase(IrradianceUnits.Nanowattspersquaremeter);
    }

    public get Microwattspersquaremeter(): number {
        return this.convertFromBase(IrradianceUnits.Microwattspersquaremeter);
    }

    public get Kilowattspersquaremeter(): number {
        return this.convertFromBase(IrradianceUnits.Kilowattspersquaremeter);
    }

    public get Megawattspersquaremeter(): number {
        return this.convertFromBase(IrradianceUnits.Megawattspersquaremeter);
    }

    public get Picowattspersquarecentimeter(): number {
        return this.convertFromBase(IrradianceUnits.Picowattspersquarecentimeter);
    }

    public get Nanowattspersquarecentimeter(): number {
        return this.convertFromBase(IrradianceUnits.Nanowattspersquarecentimeter);
    }

    public get Microwattspersquarecentimeter(): number {
        return this.convertFromBase(IrradianceUnits.Microwattspersquarecentimeter);
    }

    public get Kilowattspersquarecentimeter(): number {
        return this.convertFromBase(IrradianceUnits.Kilowattspersquarecentimeter);
    }

    public get Megawattspersquarecentimeter(): number {
        return this.convertFromBase(IrradianceUnits.Megawattspersquarecentimeter);
    }

    public static FromWattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareMeter);
    }

    public static FromWattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareCentimeter);
    }

    public static FromPicowattspersquaremeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.Picowattspersquaremeter);
    }

    public static FromNanowattspersquaremeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.Nanowattspersquaremeter);
    }

    public static FromMicrowattspersquaremeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.Microwattspersquaremeter);
    }

    public static FromKilowattspersquaremeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.Kilowattspersquaremeter);
    }

    public static FromMegawattspersquaremeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.Megawattspersquaremeter);
    }

    public static FromPicowattspersquarecentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.Picowattspersquarecentimeter);
    }

    public static FromNanowattspersquarecentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.Nanowattspersquarecentimeter);
    }

    public static FromMicrowattspersquarecentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.Microwattspersquarecentimeter);
    }

    public static FromKilowattspersquarecentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.Kilowattspersquarecentimeter);
    }

    public static FromMegawattspersquarecentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.Megawattspersquarecentimeter);
    }

    private convertFromBase(toUnit: IrradianceUnits): number {

                switch (toUnit) {
                    
                case IrradianceUnits.WattsPerSquareMeter:
                    return this.value;
                
                case IrradianceUnits.WattsPerSquareCentimeter:
                    return this.value*0.0001;
                
                case IrradianceUnits.Picowattspersquaremeter:
                    return (this.value) * 1e-12;
                
                case IrradianceUnits.Nanowattspersquaremeter:
                    return (this.value) * 1e-9;
                
                case IrradianceUnits.Microwattspersquaremeter:
                    return (this.value) * 0.000001;
                
                case IrradianceUnits.Kilowattspersquaremeter:
                    return (this.value) * 1000;
                
                case IrradianceUnits.Megawattspersquaremeter:
                    return (this.value) * 1000000;
                
                case IrradianceUnits.Picowattspersquarecentimeter:
                    return (this.value*10000) * 1e-12;
                
                case IrradianceUnits.Nanowattspersquarecentimeter:
                    return (this.value*10000) * 1e-9;
                
                case IrradianceUnits.Microwattspersquarecentimeter:
                    return (this.value*10000) * 0.000001;
                
                case IrradianceUnits.Kilowattspersquarecentimeter:
                    return (this.value*10000) * 1000;
                
                case IrradianceUnits.Megawattspersquarecentimeter:
                    return (this.value*10000) * 1000000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: IrradianceUnits): number {

                switch (fromUnit) {
                    
                case IrradianceUnits.WattsPerSquareMeter:
                    return value;
                
                case IrradianceUnits.WattsPerSquareCentimeter:
                    return value*10000;
                
                case IrradianceUnits.Picowattspersquaremeter:
                    return (value) / 1e-12;
                
                case IrradianceUnits.Nanowattspersquaremeter:
                    return (value) / 1e-9;
                
                case IrradianceUnits.Microwattspersquaremeter:
                    return (value) / 0.000001;
                
                case IrradianceUnits.Kilowattspersquaremeter:
                    return (value) / 1000;
                
                case IrradianceUnits.Megawattspersquaremeter:
                    return (value) / 1000000;
                
                case IrradianceUnits.Picowattspersquarecentimeter:
                    return (value*0.0001) / 1e-12;
                
                case IrradianceUnits.Nanowattspersquarecentimeter:
                    return (value*0.0001) / 1e-9;
                
                case IrradianceUnits.Microwattspersquarecentimeter:
                    return (value*0.0001) / 0.000001;
                
                case IrradianceUnits.Kilowattspersquarecentimeter:
                    return (value*0.0001) / 1000;
                
                case IrradianceUnits.Megawattspersquarecentimeter:
                    return (value*0.0001) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
