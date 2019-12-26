/** ElectricResistivityUnits enumeration */
export enum ElectricResistivityUnits {
    /** */
    OhmMeters,
    /** */
    OhmsCentimeter,
    /** */
    PicoohmMeters,
    /** */
    NanoohmMeters,
    /** */
    MicroohmMeters,
    /** */
    KiloohmMeters,
    /** */
    MegaohmMeters,
    /** */
    PicoohmsCentimeter,
    /** */
    NanoohmsCentimeter,
    /** */
    MicroohmsCentimeter,
    /** */
    KiloohmsCentimeter,
    /** */
    MegaohmsCentimeter
}

/** Electrical resistivity (also known as resistivity, specific electrical resistance, or volume resistivity) is a fundamental property that quantifies how strongly a given material opposes the flow of electric current. */
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

    /**
     * Create a new ElectricResistivity.
     * @param value The value.
     * @param fromUnit The ‘ElectricResistivity’ unit to create from.
     */
    public constructor(value: number, fromUnit: ElectricResistivityUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricResistivity is OhmMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get OhmMeters(): number {
        if(this.ohmmetersLazy !== null){
            return this.ohmmetersLazy;
        }
        return this.ohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.OhmMeters);
    }

    /** */
    public get OhmsCentimeter(): number {
        if(this.ohmscentimeterLazy !== null){
            return this.ohmscentimeterLazy;
        }
        return this.ohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.OhmsCentimeter);
    }

    /** */
    public get PicoohmMeters(): number {
        if(this.picoohmmetersLazy !== null){
            return this.picoohmmetersLazy;
        }
        return this.picoohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmMeters);
    }

    /** */
    public get NanoohmMeters(): number {
        if(this.nanoohmmetersLazy !== null){
            return this.nanoohmmetersLazy;
        }
        return this.nanoohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmMeters);
    }

    /** */
    public get MicroohmMeters(): number {
        if(this.microohmmetersLazy !== null){
            return this.microohmmetersLazy;
        }
        return this.microohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmMeters);
    }

    /** */
    public get KiloohmMeters(): number {
        if(this.kiloohmmetersLazy !== null){
            return this.kiloohmmetersLazy;
        }
        return this.kiloohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmMeters);
    }

    /** */
    public get MegaohmMeters(): number {
        if(this.megaohmmetersLazy !== null){
            return this.megaohmmetersLazy;
        }
        return this.megaohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmMeters);
    }

    /** */
    public get PicoohmsCentimeter(): number {
        if(this.picoohmscentimeterLazy !== null){
            return this.picoohmscentimeterLazy;
        }
        return this.picoohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmsCentimeter);
    }

    /** */
    public get NanoohmsCentimeter(): number {
        if(this.nanoohmscentimeterLazy !== null){
            return this.nanoohmscentimeterLazy;
        }
        return this.nanoohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmsCentimeter);
    }

    /** */
    public get MicroohmsCentimeter(): number {
        if(this.microohmscentimeterLazy !== null){
            return this.microohmscentimeterLazy;
        }
        return this.microohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmsCentimeter);
    }

    /** */
    public get KiloohmsCentimeter(): number {
        if(this.kiloohmscentimeterLazy !== null){
            return this.kiloohmscentimeterLazy;
        }
        return this.kiloohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmsCentimeter);
    }

    /** */
    public get MegaohmsCentimeter(): number {
        if(this.megaohmscentimeterLazy !== null){
            return this.megaohmscentimeterLazy;
        }
        return this.megaohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a OhmMeters
     *
     * @param value The unit as OhmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromOhmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a OhmsCentimeter
     *
     * @param value The unit as OhmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromOhmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a PicoohmMeters
     *
     * @param value The unit as PicoohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromPicoohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a NanoohmMeters
     *
     * @param value The unit as NanoohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromNanoohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a MicroohmMeters
     *
     * @param value The unit as MicroohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromMicroohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a KiloohmMeters
     *
     * @param value The unit as KiloohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromKiloohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a MegaohmMeters
     *
     * @param value The unit as MegaohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromMegaohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MegaohmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a PicoohmsCentimeter
     *
     * @param value The unit as PicoohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromPicoohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a NanoohmsCentimeter
     *
     * @param value The unit as NanoohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromNanoohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a MicroohmsCentimeter
     *
     * @param value The unit as MicroohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromMicroohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a KiloohmsCentimeter
     *
     * @param value The unit as KiloohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromKiloohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a MegaohmsCentimeter
     *
     * @param value The unit as MegaohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
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

    /**
     * Format the ElectricResistivity to string.
     * Note! the default format for ElectricResistivity is OhmMeters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricResistivity.
     * @returns The string format of the ElectricResistivity.
     */
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
