export enum ElectricResistivityUnits {
    OhmMeters,
    OhmsCentimeter,
    Picoohmmeters,
    Nanoohmmeters,
    Microohmmeters,
    Kiloohmmeters,
    Megaohmmeters,
    Picoohmscentimeter,
    Nanoohmscentimeter,
    Microohmscentimeter,
    Kiloohmscentimeter,
    Megaohmscentimeter
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

    public get Picoohmmeters(): number {
        if(this.picoohmmetersLazy !== null){
            return this.picoohmmetersLazy;
        }
        return this.picoohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.Picoohmmeters);
    }

    public get Nanoohmmeters(): number {
        if(this.nanoohmmetersLazy !== null){
            return this.nanoohmmetersLazy;
        }
        return this.nanoohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.Nanoohmmeters);
    }

    public get Microohmmeters(): number {
        if(this.microohmmetersLazy !== null){
            return this.microohmmetersLazy;
        }
        return this.microohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.Microohmmeters);
    }

    public get Kiloohmmeters(): number {
        if(this.kiloohmmetersLazy !== null){
            return this.kiloohmmetersLazy;
        }
        return this.kiloohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.Kiloohmmeters);
    }

    public get Megaohmmeters(): number {
        if(this.megaohmmetersLazy !== null){
            return this.megaohmmetersLazy;
        }
        return this.megaohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.Megaohmmeters);
    }

    public get Picoohmscentimeter(): number {
        if(this.picoohmscentimeterLazy !== null){
            return this.picoohmscentimeterLazy;
        }
        return this.picoohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.Picoohmscentimeter);
    }

    public get Nanoohmscentimeter(): number {
        if(this.nanoohmscentimeterLazy !== null){
            return this.nanoohmscentimeterLazy;
        }
        return this.nanoohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.Nanoohmscentimeter);
    }

    public get Microohmscentimeter(): number {
        if(this.microohmscentimeterLazy !== null){
            return this.microohmscentimeterLazy;
        }
        return this.microohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.Microohmscentimeter);
    }

    public get Kiloohmscentimeter(): number {
        if(this.kiloohmscentimeterLazy !== null){
            return this.kiloohmscentimeterLazy;
        }
        return this.kiloohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.Kiloohmscentimeter);
    }

    public get Megaohmscentimeter(): number {
        if(this.megaohmscentimeterLazy !== null){
            return this.megaohmscentimeterLazy;
        }
        return this.megaohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.Megaohmscentimeter);
    }

    public static FromOhmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmMeters);
    }

    public static FromOhmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmsCentimeter);
    }

    public static FromPicoohmmeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Picoohmmeters);
    }

    public static FromNanoohmmeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Nanoohmmeters);
    }

    public static FromMicroohmmeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Microohmmeters);
    }

    public static FromKiloohmmeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Kiloohmmeters);
    }

    public static FromMegaohmmeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Megaohmmeters);
    }

    public static FromPicoohmscentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Picoohmscentimeter);
    }

    public static FromNanoohmscentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Nanoohmscentimeter);
    }

    public static FromMicroohmscentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Microohmscentimeter);
    }

    public static FromKiloohmscentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Kiloohmscentimeter);
    }

    public static FromMegaohmscentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.Megaohmscentimeter);
    }

    private convertFromBase(toUnit: ElectricResistivityUnits): number {
        switch (toUnit) {
                
            case ElectricResistivityUnits.OhmMeters:
                return this.value;
            case ElectricResistivityUnits.OhmsCentimeter:
                return this.value*100;
            case ElectricResistivityUnits.Picoohmmeters:
                return (this.value) / 1e-12;
            case ElectricResistivityUnits.Nanoohmmeters:
                return (this.value) / 1e-9;
            case ElectricResistivityUnits.Microohmmeters:
                return (this.value) / 0.000001;
            case ElectricResistivityUnits.Kiloohmmeters:
                return (this.value) / 1000;
            case ElectricResistivityUnits.Megaohmmeters:
                return (this.value) / 1000000;
            case ElectricResistivityUnits.Picoohmscentimeter:
                return (this.value*100) / 1e-12;
            case ElectricResistivityUnits.Nanoohmscentimeter:
                return (this.value*100) / 1e-9;
            case ElectricResistivityUnits.Microohmscentimeter:
                return (this.value*100) / 0.000001;
            case ElectricResistivityUnits.Kiloohmscentimeter:
                return (this.value*100) / 1000;
            case ElectricResistivityUnits.Megaohmscentimeter:
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
            case ElectricResistivityUnits.Picoohmmeters:
                return (value) * 1e-12;
            case ElectricResistivityUnits.Nanoohmmeters:
                return (value) * 1e-9;
            case ElectricResistivityUnits.Microohmmeters:
                return (value) * 0.000001;
            case ElectricResistivityUnits.Kiloohmmeters:
                return (value) * 1000;
            case ElectricResistivityUnits.Megaohmmeters:
                return (value) * 1000000;
            case ElectricResistivityUnits.Picoohmscentimeter:
                return (value/100) * 1e-12;
            case ElectricResistivityUnits.Nanoohmscentimeter:
                return (value/100) * 1e-9;
            case ElectricResistivityUnits.Microohmscentimeter:
                return (value/100) * 0.000001;
            case ElectricResistivityUnits.Kiloohmscentimeter:
                return (value/100) * 1000;
            case ElectricResistivityUnits.Megaohmscentimeter:
                return (value/100) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
