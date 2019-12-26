export enum IrradianceUnits {
    WattsPerSquareMeter,
    WattsPerSquareCentimeter,
    PicowattPerSquareMeter,
    NanowattPerSquareMeter,
    MicrowattPerSquareMeter,
    KilowattPerSquareMeter,
    MegawattPerSquareMeter,
    PicowattPerSquareCentimeter,
    NanowattPerSquareCentimeter,
    MicrowattPerSquareCentimeter,
    KilowattPerSquareCentimeter,
    MegawattPerSquareCentimeter
}

export class Irradiance {
    private value: number;
    private wattspersquaremeterLazy: number | null = null;
    private wattspersquarecentimeterLazy: number | null = null;
    private picowattpersquaremeterLazy: number | null = null;
    private nanowattpersquaremeterLazy: number | null = null;
    private microwattpersquaremeterLazy: number | null = null;
    private kilowattpersquaremeterLazy: number | null = null;
    private megawattpersquaremeterLazy: number | null = null;
    private picowattpersquarecentimeterLazy: number | null = null;
    private nanowattpersquarecentimeterLazy: number | null = null;
    private microwattpersquarecentimeterLazy: number | null = null;
    private kilowattpersquarecentimeterLazy: number | null = null;
    private megawattpersquarecentimeterLazy: number | null = null;

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

    public get PicowattPerSquareMeter(): number {
        if(this.picowattpersquaremeterLazy !== null){
            return this.picowattpersquaremeterLazy;
        }
        return this.picowattpersquaremeterLazy = this.convertFromBase(IrradianceUnits.PicowattPerSquareMeter);
    }

    public get NanowattPerSquareMeter(): number {
        if(this.nanowattpersquaremeterLazy !== null){
            return this.nanowattpersquaremeterLazy;
        }
        return this.nanowattpersquaremeterLazy = this.convertFromBase(IrradianceUnits.NanowattPerSquareMeter);
    }

    public get MicrowattPerSquareMeter(): number {
        if(this.microwattpersquaremeterLazy !== null){
            return this.microwattpersquaremeterLazy;
        }
        return this.microwattpersquaremeterLazy = this.convertFromBase(IrradianceUnits.MicrowattPerSquareMeter);
    }

    public get KilowattPerSquareMeter(): number {
        if(this.kilowattpersquaremeterLazy !== null){
            return this.kilowattpersquaremeterLazy;
        }
        return this.kilowattpersquaremeterLazy = this.convertFromBase(IrradianceUnits.KilowattPerSquareMeter);
    }

    public get MegawattPerSquareMeter(): number {
        if(this.megawattpersquaremeterLazy !== null){
            return this.megawattpersquaremeterLazy;
        }
        return this.megawattpersquaremeterLazy = this.convertFromBase(IrradianceUnits.MegawattPerSquareMeter);
    }

    public get PicowattPerSquareCentimeter(): number {
        if(this.picowattpersquarecentimeterLazy !== null){
            return this.picowattpersquarecentimeterLazy;
        }
        return this.picowattpersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.PicowattPerSquareCentimeter);
    }

    public get NanowattPerSquareCentimeter(): number {
        if(this.nanowattpersquarecentimeterLazy !== null){
            return this.nanowattpersquarecentimeterLazy;
        }
        return this.nanowattpersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.NanowattPerSquareCentimeter);
    }

    public get MicrowattPerSquareCentimeter(): number {
        if(this.microwattpersquarecentimeterLazy !== null){
            return this.microwattpersquarecentimeterLazy;
        }
        return this.microwattpersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.MicrowattPerSquareCentimeter);
    }

    public get KilowattPerSquareCentimeter(): number {
        if(this.kilowattpersquarecentimeterLazy !== null){
            return this.kilowattpersquarecentimeterLazy;
        }
        return this.kilowattpersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.KilowattPerSquareCentimeter);
    }

    public get MegawattPerSquareCentimeter(): number {
        if(this.megawattpersquarecentimeterLazy !== null){
            return this.megawattpersquarecentimeterLazy;
        }
        return this.megawattpersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.MegawattPerSquareCentimeter);
    }

    public static FromWattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareMeter);
    }

    public static FromWattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareCentimeter);
    }

    public static FromPicowattPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.PicowattPerSquareMeter);
    }

    public static FromNanowattPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.NanowattPerSquareMeter);
    }

    public static FromMicrowattPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MicrowattPerSquareMeter);
    }

    public static FromKilowattPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.KilowattPerSquareMeter);
    }

    public static FromMegawattPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MegawattPerSquareMeter);
    }

    public static FromPicowattPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.PicowattPerSquareCentimeter);
    }

    public static FromNanowattPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.NanowattPerSquareCentimeter);
    }

    public static FromMicrowattPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MicrowattPerSquareCentimeter);
    }

    public static FromKilowattPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.KilowattPerSquareCentimeter);
    }

    public static FromMegawattPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MegawattPerSquareCentimeter);
    }

    private convertFromBase(toUnit: IrradianceUnits): number {
        switch (toUnit) {
                
            case IrradianceUnits.WattsPerSquareMeter:
                return this.value;
            case IrradianceUnits.WattsPerSquareCentimeter:
                return this.value*0.0001;
            case IrradianceUnits.PicowattPerSquareMeter:
                return (this.value) / 1e-12;
            case IrradianceUnits.NanowattPerSquareMeter:
                return (this.value) / 1e-9;
            case IrradianceUnits.MicrowattPerSquareMeter:
                return (this.value) / 0.000001;
            case IrradianceUnits.KilowattPerSquareMeter:
                return (this.value) / 1000;
            case IrradianceUnits.MegawattPerSquareMeter:
                return (this.value) / 1000000;
            case IrradianceUnits.PicowattPerSquareCentimeter:
                return (this.value*0.0001) / 1e-12;
            case IrradianceUnits.NanowattPerSquareCentimeter:
                return (this.value*0.0001) / 1e-9;
            case IrradianceUnits.MicrowattPerSquareCentimeter:
                return (this.value*0.0001) / 0.000001;
            case IrradianceUnits.KilowattPerSquareCentimeter:
                return (this.value*0.0001) / 1000;
            case IrradianceUnits.MegawattPerSquareCentimeter:
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
            case IrradianceUnits.PicowattPerSquareMeter:
                return (value) * 1e-12;
            case IrradianceUnits.NanowattPerSquareMeter:
                return (value) * 1e-9;
            case IrradianceUnits.MicrowattPerSquareMeter:
                return (value) * 0.000001;
            case IrradianceUnits.KilowattPerSquareMeter:
                return (value) * 1000;
            case IrradianceUnits.MegawattPerSquareMeter:
                return (value) * 1000000;
            case IrradianceUnits.PicowattPerSquareCentimeter:
                return (value*10000) * 1e-12;
            case IrradianceUnits.NanowattPerSquareCentimeter:
                return (value*10000) * 1e-9;
            case IrradianceUnits.MicrowattPerSquareCentimeter:
                return (value*10000) * 0.000001;
            case IrradianceUnits.KilowattPerSquareCentimeter:
                return (value*10000) * 1000;
            case IrradianceUnits.MegawattPerSquareCentimeter:
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
            case IrradianceUnits.PicowattPerSquareMeter:
                return this.PicowattPerSquareMeter + ` W/m²`;
            case IrradianceUnits.NanowattPerSquareMeter:
                return this.NanowattPerSquareMeter + ` W/m²`;
            case IrradianceUnits.MicrowattPerSquareMeter:
                return this.MicrowattPerSquareMeter + ` W/m²`;
            case IrradianceUnits.KilowattPerSquareMeter:
                return this.KilowattPerSquareMeter + ` W/m²`;
            case IrradianceUnits.MegawattPerSquareMeter:
                return this.MegawattPerSquareMeter + ` W/m²`;
            case IrradianceUnits.PicowattPerSquareCentimeter:
                return this.PicowattPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.NanowattPerSquareCentimeter:
                return this.NanowattPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.MicrowattPerSquareCentimeter:
                return this.MicrowattPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.KilowattPerSquareCentimeter:
                return this.KilowattPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.MegawattPerSquareCentimeter:
                return this.MegawattPerSquareCentimeter + ` W/cm²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
