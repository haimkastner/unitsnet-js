export enum ElectricResistivityUnits {
    OhmMeters,
    OhmsCentimeter,
    PicoohmMeters,
    NanoohmMeters,
    MicroohmMeters,
    KiloohmMeters,
    MegaohmMeters,
    PicoohmsCentimeter,
    NanoohmsCentimeter,
    MicroohmsCentimeter,
    KiloohmsCentimeter,
    MegaohmsCentimeter
}

export class ElectricResistivity {
    private value: number;
    private ohmmetersLazy: number | null = null;
    private ohmscentimeterLazy: number | null = null;
    private picoohmmetersLazy: number | null = null;
    private nanoohmmetersLazy: number | null = null;
    private microohmmetersLazy: number | null = null;
    private kiloohmmetersLazy: number | null = null;
    private megaohmmetersLazy: number | null = null;
    private picoohmscentimeterLazy: number | null = null;
    private nanoohmscentimeterLazy: number | null = null;
    private microohmscentimeterLazy: number | null = null;
    private kiloohmscentimeterLazy: number | null = null;
    private megaohmscentimeterLazy: number | null = null;

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

    public get PicoohmMeters(): number {
        if(this.picoohmmetersLazy !== null){
            return this.picoohmmetersLazy;
        }
        return this.picoohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmMeters);
    }

    public get NanoohmMeters(): number {
        if(this.nanoohmmetersLazy !== null){
            return this.nanoohmmetersLazy;
        }
        return this.nanoohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmMeters);
    }

    public get MicroohmMeters(): number {
        if(this.microohmmetersLazy !== null){
            return this.microohmmetersLazy;
        }
        return this.microohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmMeters);
    }

    public get KiloohmMeters(): number {
        if(this.kiloohmmetersLazy !== null){
            return this.kiloohmmetersLazy;
        }
        return this.kiloohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmMeters);
    }

    public get MegaohmMeters(): number {
        if(this.megaohmmetersLazy !== null){
            return this.megaohmmetersLazy;
        }
        return this.megaohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmMeters);
    }

    public get PicoohmsCentimeter(): number {
        if(this.picoohmscentimeterLazy !== null){
            return this.picoohmscentimeterLazy;
        }
        return this.picoohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmsCentimeter);
    }

    public get NanoohmsCentimeter(): number {
        if(this.nanoohmscentimeterLazy !== null){
            return this.nanoohmscentimeterLazy;
        }
        return this.nanoohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmsCentimeter);
    }

    public get MicroohmsCentimeter(): number {
        if(this.microohmscentimeterLazy !== null){
            return this.microohmscentimeterLazy;
        }
        return this.microohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmsCentimeter);
    }

    public get KiloohmsCentimeter(): number {
        if(this.kiloohmscentimeterLazy !== null){
            return this.kiloohmscentimeterLazy;
        }
        return this.kiloohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmsCentimeter);
    }

    public get MegaohmsCentimeter(): number {
        if(this.megaohmscentimeterLazy !== null){
            return this.megaohmscentimeterLazy;
        }
        return this.megaohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmsCentimeter);
    }

    public static FromOhmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmMeters);
    }

    public static FromOhmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmsCentimeter);
    }

    public static FromPicoohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmMeters);
    }

    public static FromNanoohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmMeters);
    }

    public static FromMicroohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmMeters);
    }

    public static FromKiloohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmMeters);
    }

    public static FromMegaohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MegaohmMeters);
    }

    public static FromPicoohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmsCentimeter);
    }

    public static FromNanoohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmsCentimeter);
    }

    public static FromMicroohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmsCentimeter);
    }

    public static FromKiloohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmsCentimeter);
    }

    public static FromMegaohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MegaohmsCentimeter);
    }

    private convertFromBase(toUnit: ElectricResistivityUnits): number {
        switch (toUnit) {
                
            case ElectricResistivityUnits.OhmMeters:
                return this.value;
            case ElectricResistivityUnits.OhmsCentimeter:
                return this.value*100;
            case ElectricResistivityUnits.PicoohmMeters:
                return (this.value) / 1e-12;
            case ElectricResistivityUnits.NanoohmMeters:
                return (this.value) / 1e-9;
            case ElectricResistivityUnits.MicroohmMeters:
                return (this.value) / 0.000001;
            case ElectricResistivityUnits.KiloohmMeters:
                return (this.value) / 1000;
            case ElectricResistivityUnits.MegaohmMeters:
                return (this.value) / 1000000;
            case ElectricResistivityUnits.PicoohmsCentimeter:
                return (this.value*100) / 1e-12;
            case ElectricResistivityUnits.NanoohmsCentimeter:
                return (this.value*100) / 1e-9;
            case ElectricResistivityUnits.MicroohmsCentimeter:
                return (this.value*100) / 0.000001;
            case ElectricResistivityUnits.KiloohmsCentimeter:
                return (this.value*100) / 1000;
            case ElectricResistivityUnits.MegaohmsCentimeter:
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
            case ElectricResistivityUnits.PicoohmMeters:
                return (value) * 1e-12;
            case ElectricResistivityUnits.NanoohmMeters:
                return (value) * 1e-9;
            case ElectricResistivityUnits.MicroohmMeters:
                return (value) * 0.000001;
            case ElectricResistivityUnits.KiloohmMeters:
                return (value) * 1000;
            case ElectricResistivityUnits.MegaohmMeters:
                return (value) * 1000000;
            case ElectricResistivityUnits.PicoohmsCentimeter:
                return (value/100) * 1e-12;
            case ElectricResistivityUnits.NanoohmsCentimeter:
                return (value/100) * 1e-9;
            case ElectricResistivityUnits.MicroohmsCentimeter:
                return (value/100) * 0.000001;
            case ElectricResistivityUnits.KiloohmsCentimeter:
                return (value/100) * 1000;
            case ElectricResistivityUnits.MegaohmsCentimeter:
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
            case ElectricResistivityUnits.PicoohmMeters:
                return this.PicoohmMeters + ` Ω·m`;
            case ElectricResistivityUnits.NanoohmMeters:
                return this.NanoohmMeters + ` Ω·m`;
            case ElectricResistivityUnits.MicroohmMeters:
                return this.MicroohmMeters + ` Ω·m`;
            case ElectricResistivityUnits.KiloohmMeters:
                return this.KiloohmMeters + ` Ω·m`;
            case ElectricResistivityUnits.MegaohmMeters:
                return this.MegaohmMeters + ` Ω·m`;
            case ElectricResistivityUnits.PicoohmsCentimeter:
                return this.PicoohmsCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.NanoohmsCentimeter:
                return this.NanoohmsCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.MicroohmsCentimeter:
                return this.MicroohmsCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.KiloohmsCentimeter:
                return this.KiloohmsCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.MegaohmsCentimeter:
                return this.MegaohmsCentimeter + ` Ω·cm`;
        default:
            break;
        }
        return this.value.toString();
    }
}
