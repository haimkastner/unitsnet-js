export enum IrradianceUnits {
    WattsPerSquareMeter,
    WattsPerSquareCentimeter,
    PicowattsPerSquareMeter,
    NanowattsPerSquareMeter,
    MicrowattsPerSquareMeter,
    KilowattsPerSquareMeter,
    MegawattsPerSquareMeter,
    PicowattsPerSquareCentimeter,
    NanowattsPerSquareCentimeter,
    MicrowattsPerSquareCentimeter,
    KilowattsPerSquareCentimeter,
    MegawattsPerSquareCentimeter
}

export class Irradiance {
    private value: number;
    private wattspersquaremeterLazy: number | null = null;
    private wattspersquarecentimeterLazy: number | null = null;
    private picowattspersquaremeterLazy: number | null = null;
    private nanowattspersquaremeterLazy: number | null = null;
    private microwattspersquaremeterLazy: number | null = null;
    private kilowattspersquaremeterLazy: number | null = null;
    private megawattspersquaremeterLazy: number | null = null;
    private picowattspersquarecentimeterLazy: number | null = null;
    private nanowattspersquarecentimeterLazy: number | null = null;
    private microwattspersquarecentimeterLazy: number | null = null;
    private kilowattspersquarecentimeterLazy: number | null = null;
    private megawattspersquarecentimeterLazy: number | null = null;

    public constructor(value: number, fromUnit: IrradianceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get WattsPerSquareMeter(): number {
        if(this.wattspersquaremeterLazy !== null){
            return this.wattspersquaremeterLazy;
        }
        return this.wattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.WattsPerSquareMeter);
    }

    public get WattsPerSquareCentimeter(): number {
        if(this.wattspersquarecentimeterLazy !== null){
            return this.wattspersquarecentimeterLazy;
        }
        return this.wattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.WattsPerSquareCentimeter);
    }

    public get PicowattsPerSquareMeter(): number {
        if(this.picowattspersquaremeterLazy !== null){
            return this.picowattspersquaremeterLazy;
        }
        return this.picowattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.PicowattsPerSquareMeter);
    }

    public get NanowattsPerSquareMeter(): number {
        if(this.nanowattspersquaremeterLazy !== null){
            return this.nanowattspersquaremeterLazy;
        }
        return this.nanowattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.NanowattsPerSquareMeter);
    }

    public get MicrowattsPerSquareMeter(): number {
        if(this.microwattspersquaremeterLazy !== null){
            return this.microwattspersquaremeterLazy;
        }
        return this.microwattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.MicrowattsPerSquareMeter);
    }

    public get KilowattsPerSquareMeter(): number {
        if(this.kilowattspersquaremeterLazy !== null){
            return this.kilowattspersquaremeterLazy;
        }
        return this.kilowattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.KilowattsPerSquareMeter);
    }

    public get MegawattsPerSquareMeter(): number {
        if(this.megawattspersquaremeterLazy !== null){
            return this.megawattspersquaremeterLazy;
        }
        return this.megawattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.MegawattsPerSquareMeter);
    }

    public get PicowattsPerSquareCentimeter(): number {
        if(this.picowattspersquarecentimeterLazy !== null){
            return this.picowattspersquarecentimeterLazy;
        }
        return this.picowattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.PicowattsPerSquareCentimeter);
    }

    public get NanowattsPerSquareCentimeter(): number {
        if(this.nanowattspersquarecentimeterLazy !== null){
            return this.nanowattspersquarecentimeterLazy;
        }
        return this.nanowattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.NanowattsPerSquareCentimeter);
    }

    public get MicrowattsPerSquareCentimeter(): number {
        if(this.microwattspersquarecentimeterLazy !== null){
            return this.microwattspersquarecentimeterLazy;
        }
        return this.microwattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.MicrowattsPerSquareCentimeter);
    }

    public get KilowattsPerSquareCentimeter(): number {
        if(this.kilowattspersquarecentimeterLazy !== null){
            return this.kilowattspersquarecentimeterLazy;
        }
        return this.kilowattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.KilowattsPerSquareCentimeter);
    }

    public get MegawattsPerSquareCentimeter(): number {
        if(this.megawattspersquarecentimeterLazy !== null){
            return this.megawattspersquarecentimeterLazy;
        }
        return this.megawattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.MegawattsPerSquareCentimeter);
    }

    public static FromWattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareMeter);
    }

    public static FromWattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareCentimeter);
    }

    public static FromPicowattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.PicowattsPerSquareMeter);
    }

    public static FromNanowattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.NanowattsPerSquareMeter);
    }

    public static FromMicrowattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MicrowattsPerSquareMeter);
    }

    public static FromKilowattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.KilowattsPerSquareMeter);
    }

    public static FromMegawattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MegawattsPerSquareMeter);
    }

    public static FromPicowattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.PicowattsPerSquareCentimeter);
    }

    public static FromNanowattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.NanowattsPerSquareCentimeter);
    }

    public static FromMicrowattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MicrowattsPerSquareCentimeter);
    }

    public static FromKilowattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.KilowattsPerSquareCentimeter);
    }

    public static FromMegawattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MegawattsPerSquareCentimeter);
    }

    private convertFromBase(toUnit: IrradianceUnits): number {
        switch (toUnit) {
                
            case IrradianceUnits.WattsPerSquareMeter:
                return this.value;
            case IrradianceUnits.WattsPerSquareCentimeter:
                return this.value*0.0001;
            case IrradianceUnits.PicowattsPerSquareMeter:
                return (this.value) / 1e-12;
            case IrradianceUnits.NanowattsPerSquareMeter:
                return (this.value) / 1e-9;
            case IrradianceUnits.MicrowattsPerSquareMeter:
                return (this.value) / 0.000001;
            case IrradianceUnits.KilowattsPerSquareMeter:
                return (this.value) / 1000;
            case IrradianceUnits.MegawattsPerSquareMeter:
                return (this.value) / 1000000;
            case IrradianceUnits.PicowattsPerSquareCentimeter:
                return (this.value*0.0001) / 1e-12;
            case IrradianceUnits.NanowattsPerSquareCentimeter:
                return (this.value*0.0001) / 1e-9;
            case IrradianceUnits.MicrowattsPerSquareCentimeter:
                return (this.value*0.0001) / 0.000001;
            case IrradianceUnits.KilowattsPerSquareCentimeter:
                return (this.value*0.0001) / 1000;
            case IrradianceUnits.MegawattsPerSquareCentimeter:
                return (this.value*0.0001) / 1000000;
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
            case IrradianceUnits.PicowattsPerSquareMeter:
                return (value) * 1e-12;
            case IrradianceUnits.NanowattsPerSquareMeter:
                return (value) * 1e-9;
            case IrradianceUnits.MicrowattsPerSquareMeter:
                return (value) * 0.000001;
            case IrradianceUnits.KilowattsPerSquareMeter:
                return (value) * 1000;
            case IrradianceUnits.MegawattsPerSquareMeter:
                return (value) * 1000000;
            case IrradianceUnits.PicowattsPerSquareCentimeter:
                return (value*10000) * 1e-12;
            case IrradianceUnits.NanowattsPerSquareCentimeter:
                return (value*10000) * 1e-9;
            case IrradianceUnits.MicrowattsPerSquareCentimeter:
                return (value*10000) * 0.000001;
            case IrradianceUnits.KilowattsPerSquareCentimeter:
                return (value*10000) * 1000;
            case IrradianceUnits.MegawattsPerSquareCentimeter:
                return (value*10000) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: IrradianceUnits = IrradianceUnits.WattsPerSquareMeter): string {

        switch (toUnit) {
            
            case IrradianceUnits.WattsPerSquareMeter:
                return this.WattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.WattsPerSquareCentimeter:
                return this.WattsPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.PicowattsPerSquareMeter:
                return this.PicowattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.NanowattsPerSquareMeter:
                return this.NanowattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.MicrowattsPerSquareMeter:
                return this.MicrowattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.KilowattsPerSquareMeter:
                return this.KilowattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.MegawattsPerSquareMeter:
                return this.MegawattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.PicowattsPerSquareCentimeter:
                return this.PicowattsPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.NanowattsPerSquareCentimeter:
                return this.NanowattsPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.MicrowattsPerSquareCentimeter:
                return this.MicrowattsPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.KilowattsPerSquareCentimeter:
                return this.KilowattsPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.MegawattsPerSquareCentimeter:
                return this.MegawattsPerSquareCentimeter + ` W/cm²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
