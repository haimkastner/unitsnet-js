export enum ElectricResistivityUnits {
    OhmMeters,
    OhmsCentimeter,
    PicoohmMeter,
    NanoohmMeter,
    MicroohmMeter,
    KiloohmMeter,
    MegaohmMeter,
    PicoohmCentimeter,
    NanoohmCentimeter,
    MicroohmCentimeter,
    KiloohmCentimeter,
    MegaohmCentimeter
}

export class ElectricResistivity {
    private value: number;
    private ohmmetersLazy: number | null = null;
    private ohmscentimeterLazy: number | null = null;
    private picoohmmeterLazy: number | null = null;
    private nanoohmmeterLazy: number | null = null;
    private microohmmeterLazy: number | null = null;
    private kiloohmmeterLazy: number | null = null;
    private megaohmmeterLazy: number | null = null;
    private picoohmcentimeterLazy: number | null = null;
    private nanoohmcentimeterLazy: number | null = null;
    private microohmcentimeterLazy: number | null = null;
    private kiloohmcentimeterLazy: number | null = null;
    private megaohmcentimeterLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricResistivityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get OhmMeters(): number {
        if(this.ohmmetersLazy !== null){
            return this.ohmmetersLazy;
        }
        return this.ohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.OhmMeters);
    }

    public get OhmsCentimeter(): number {
        if(this.ohmscentimeterLazy !== null){
            return this.ohmscentimeterLazy;
        }
        return this.ohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.OhmsCentimeter);
    }

    public get PicoohmMeter(): number {
        if(this.picoohmmeterLazy !== null){
            return this.picoohmmeterLazy;
        }
        return this.picoohmmeterLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmMeter);
    }

    public get NanoohmMeter(): number {
        if(this.nanoohmmeterLazy !== null){
            return this.nanoohmmeterLazy;
        }
        return this.nanoohmmeterLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmMeter);
    }

    public get MicroohmMeter(): number {
        if(this.microohmmeterLazy !== null){
            return this.microohmmeterLazy;
        }
        return this.microohmmeterLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmMeter);
    }

    public get KiloohmMeter(): number {
        if(this.kiloohmmeterLazy !== null){
            return this.kiloohmmeterLazy;
        }
        return this.kiloohmmeterLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmMeter);
    }

    public get MegaohmMeter(): number {
        if(this.megaohmmeterLazy !== null){
            return this.megaohmmeterLazy;
        }
        return this.megaohmmeterLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmMeter);
    }

    public get PicoohmCentimeter(): number {
        if(this.picoohmcentimeterLazy !== null){
            return this.picoohmcentimeterLazy;
        }
        return this.picoohmcentimeterLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmCentimeter);
    }

    public get NanoohmCentimeter(): number {
        if(this.nanoohmcentimeterLazy !== null){
            return this.nanoohmcentimeterLazy;
        }
        return this.nanoohmcentimeterLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmCentimeter);
    }

    public get MicroohmCentimeter(): number {
        if(this.microohmcentimeterLazy !== null){
            return this.microohmcentimeterLazy;
        }
        return this.microohmcentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmCentimeter);
    }

    public get KiloohmCentimeter(): number {
        if(this.kiloohmcentimeterLazy !== null){
            return this.kiloohmcentimeterLazy;
        }
        return this.kiloohmcentimeterLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmCentimeter);
    }

    public get MegaohmCentimeter(): number {
        if(this.megaohmcentimeterLazy !== null){
            return this.megaohmcentimeterLazy;
        }
        return this.megaohmcentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmCentimeter);
    }

    public static FromOhmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmMeters);
    }

    public static FromOhmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmsCentimeter);
    }

    public static FromPicoohmMeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmMeter);
    }

    public static FromNanoohmMeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmMeter);
    }

    public static FromMicroohmMeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmMeter);
    }

    public static FromKiloohmMeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmMeter);
    }

    public static FromMegaohmMeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MegaohmMeter);
    }

    public static FromPicoohmCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmCentimeter);
    }

    public static FromNanoohmCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmCentimeter);
    }

    public static FromMicroohmCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmCentimeter);
    }

    public static FromKiloohmCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmCentimeter);
    }

    public static FromMegaohmCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MegaohmCentimeter);
    }

    private convertFromBase(toUnit: ElectricResistivityUnits): number {
        switch (toUnit) {
                
            case ElectricResistivityUnits.OhmMeters:
                return this.value;
            case ElectricResistivityUnits.OhmsCentimeter:
                return this.value*100;
            case ElectricResistivityUnits.PicoohmMeter:
                return (this.value) / 1e-12;
            case ElectricResistivityUnits.NanoohmMeter:
                return (this.value) / 1e-9;
            case ElectricResistivityUnits.MicroohmMeter:
                return (this.value) / 0.000001;
            case ElectricResistivityUnits.KiloohmMeter:
                return (this.value) / 1000;
            case ElectricResistivityUnits.MegaohmMeter:
                return (this.value) / 1000000;
            case ElectricResistivityUnits.PicoohmCentimeter:
                return (this.value*100) / 1e-12;
            case ElectricResistivityUnits.NanoohmCentimeter:
                return (this.value*100) / 1e-9;
            case ElectricResistivityUnits.MicroohmCentimeter:
                return (this.value*100) / 0.000001;
            case ElectricResistivityUnits.KiloohmCentimeter:
                return (this.value*100) / 1000;
            case ElectricResistivityUnits.MegaohmCentimeter:
                return (this.value*100) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricResistivityUnits): number {
        switch (fromUnit) {
                
            case ElectricResistivityUnits.OhmMeters:
                return value;
            case ElectricResistivityUnits.OhmsCentimeter:
                return value/100;
            case ElectricResistivityUnits.PicoohmMeter:
                return (value) * 1e-12;
            case ElectricResistivityUnits.NanoohmMeter:
                return (value) * 1e-9;
            case ElectricResistivityUnits.MicroohmMeter:
                return (value) * 0.000001;
            case ElectricResistivityUnits.KiloohmMeter:
                return (value) * 1000;
            case ElectricResistivityUnits.MegaohmMeter:
                return (value) * 1000000;
            case ElectricResistivityUnits.PicoohmCentimeter:
                return (value/100) * 1e-12;
            case ElectricResistivityUnits.NanoohmCentimeter:
                return (value/100) * 1e-9;
            case ElectricResistivityUnits.MicroohmCentimeter:
                return (value/100) * 0.000001;
            case ElectricResistivityUnits.KiloohmCentimeter:
                return (value/100) * 1000;
            case ElectricResistivityUnits.MegaohmCentimeter:
                return (value/100) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricResistivityUnits = ElectricResistivityUnits.OhmMeters): string {

        switch (toUnit) {
            
            case ElectricResistivityUnits.OhmMeters:
                return this.OhmMeters + ` Ω·m`;
            case ElectricResistivityUnits.OhmsCentimeter:
                return this.OhmsCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.PicoohmMeter:
                return this.PicoohmMeter + ` Ω·m`;
            case ElectricResistivityUnits.NanoohmMeter:
                return this.NanoohmMeter + ` Ω·m`;
            case ElectricResistivityUnits.MicroohmMeter:
                return this.MicroohmMeter + ` Ω·m`;
            case ElectricResistivityUnits.KiloohmMeter:
                return this.KiloohmMeter + ` Ω·m`;
            case ElectricResistivityUnits.MegaohmMeter:
                return this.MegaohmMeter + ` Ω·m`;
            case ElectricResistivityUnits.PicoohmCentimeter:
                return this.PicoohmCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.NanoohmCentimeter:
                return this.NanoohmCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.MicroohmCentimeter:
                return this.MicroohmCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.KiloohmCentimeter:
                return this.KiloohmCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.MegaohmCentimeter:
                return this.MegaohmCentimeter + ` Ω·cm`;
        default:
            break;
        }
        return this.value.toString();
    }
}
