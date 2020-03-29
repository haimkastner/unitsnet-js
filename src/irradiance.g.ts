/** IrradianceUnits enumeration */
export enum IrradianceUnits {
    /** */
    WattsPerSquareMeter,
    /** */
    WattsPerSquareCentimeter,
    /** */
    PicowattsPerSquareMeter,
    /** */
    NanowattsPerSquareMeter,
    /** */
    MicrowattsPerSquareMeter,
    /** */
    MilliwattsPerSquareMeter,
    /** */
    KilowattsPerSquareMeter,
    /** */
    MegawattsPerSquareMeter,
    /** */
    PicowattsPerSquareCentimeter,
    /** */
    NanowattsPerSquareCentimeter,
    /** */
    MicrowattsPerSquareCentimeter,
    /** */
    MilliwattsPerSquareCentimeter,
    /** */
    KilowattsPerSquareCentimeter,
    /** */
    MegawattsPerSquareCentimeter
}

/** Irradiance is the intensity of ultraviolet (UV) or visible light incident on a surface. */
export class Irradiance {
    private value: number;
    private wattspersquaremeterLazy: number | null = null;
    private wattspersquarecentimeterLazy: number | null = null;
    private picowattspersquaremeterLazy: number | null = null;
    private nanowattspersquaremeterLazy: number | null = null;
    private microwattspersquaremeterLazy: number | null = null;
    private milliwattspersquaremeterLazy: number | null = null;
    private kilowattspersquaremeterLazy: number | null = null;
    private megawattspersquaremeterLazy: number | null = null;
    private picowattspersquarecentimeterLazy: number | null = null;
    private nanowattspersquarecentimeterLazy: number | null = null;
    private microwattspersquarecentimeterLazy: number | null = null;
    private milliwattspersquarecentimeterLazy: number | null = null;
    private kilowattspersquarecentimeterLazy: number | null = null;
    private megawattspersquarecentimeterLazy: number | null = null;

    /**
     * Create a new Irradiance.
     * @param value The value.
     * @param fromUnit The ‘Irradiance’ unit to create from.
     * The default unit is WattsPerSquareMeter
     */
    public constructor(value: number, fromUnit: IrradianceUnits = IrradianceUnits.WattsPerSquareMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Irradiance is WattsPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get WattsPerSquareMeter(): number {
        if(this.wattspersquaremeterLazy !== null){
            return this.wattspersquaremeterLazy;
        }
        return this.wattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.WattsPerSquareMeter);
    }

    /** */
    public get WattsPerSquareCentimeter(): number {
        if(this.wattspersquarecentimeterLazy !== null){
            return this.wattspersquarecentimeterLazy;
        }
        return this.wattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.WattsPerSquareCentimeter);
    }

    /** */
    public get PicowattsPerSquareMeter(): number {
        if(this.picowattspersquaremeterLazy !== null){
            return this.picowattspersquaremeterLazy;
        }
        return this.picowattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.PicowattsPerSquareMeter);
    }

    /** */
    public get NanowattsPerSquareMeter(): number {
        if(this.nanowattspersquaremeterLazy !== null){
            return this.nanowattspersquaremeterLazy;
        }
        return this.nanowattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.NanowattsPerSquareMeter);
    }

    /** */
    public get MicrowattsPerSquareMeter(): number {
        if(this.microwattspersquaremeterLazy !== null){
            return this.microwattspersquaremeterLazy;
        }
        return this.microwattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.MicrowattsPerSquareMeter);
    }

    /** */
    public get MilliwattsPerSquareMeter(): number {
        if(this.milliwattspersquaremeterLazy !== null){
            return this.milliwattspersquaremeterLazy;
        }
        return this.milliwattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.MilliwattsPerSquareMeter);
    }

    /** */
    public get KilowattsPerSquareMeter(): number {
        if(this.kilowattspersquaremeterLazy !== null){
            return this.kilowattspersquaremeterLazy;
        }
        return this.kilowattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.KilowattsPerSquareMeter);
    }

    /** */
    public get MegawattsPerSquareMeter(): number {
        if(this.megawattspersquaremeterLazy !== null){
            return this.megawattspersquaremeterLazy;
        }
        return this.megawattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.MegawattsPerSquareMeter);
    }

    /** */
    public get PicowattsPerSquareCentimeter(): number {
        if(this.picowattspersquarecentimeterLazy !== null){
            return this.picowattspersquarecentimeterLazy;
        }
        return this.picowattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.PicowattsPerSquareCentimeter);
    }

    /** */
    public get NanowattsPerSquareCentimeter(): number {
        if(this.nanowattspersquarecentimeterLazy !== null){
            return this.nanowattspersquarecentimeterLazy;
        }
        return this.nanowattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.NanowattsPerSquareCentimeter);
    }

    /** */
    public get MicrowattsPerSquareCentimeter(): number {
        if(this.microwattspersquarecentimeterLazy !== null){
            return this.microwattspersquarecentimeterLazy;
        }
        return this.microwattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.MicrowattsPerSquareCentimeter);
    }

    /** */
    public get MilliwattsPerSquareCentimeter(): number {
        if(this.milliwattspersquarecentimeterLazy !== null){
            return this.milliwattspersquarecentimeterLazy;
        }
        return this.milliwattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.MilliwattsPerSquareCentimeter);
    }

    /** */
    public get KilowattsPerSquareCentimeter(): number {
        if(this.kilowattspersquarecentimeterLazy !== null){
            return this.kilowattspersquarecentimeterLazy;
        }
        return this.kilowattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.KilowattsPerSquareCentimeter);
    }

    /** */
    public get MegawattsPerSquareCentimeter(): number {
        if(this.megawattspersquarecentimeterLazy !== null){
            return this.megawattspersquarecentimeterLazy;
        }
        return this.megawattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.MegawattsPerSquareCentimeter);
    }

    /**
     * Create a new Irradiance instance from a WattsPerSquareMeter
     *
     * @param value The unit as WattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromWattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareMeter);
    }

    /**
     * Create a new Irradiance instance from a WattsPerSquareCentimeter
     *
     * @param value The unit as WattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromWattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareCentimeter);
    }

    /**
     * Create a new Irradiance instance from a PicowattsPerSquareMeter
     *
     * @param value The unit as PicowattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromPicowattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.PicowattsPerSquareMeter);
    }

    /**
     * Create a new Irradiance instance from a NanowattsPerSquareMeter
     *
     * @param value The unit as NanowattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromNanowattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.NanowattsPerSquareMeter);
    }

    /**
     * Create a new Irradiance instance from a MicrowattsPerSquareMeter
     *
     * @param value The unit as MicrowattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromMicrowattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MicrowattsPerSquareMeter);
    }

    /**
     * Create a new Irradiance instance from a MilliwattsPerSquareMeter
     *
     * @param value The unit as MilliwattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromMilliwattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MilliwattsPerSquareMeter);
    }

    /**
     * Create a new Irradiance instance from a KilowattsPerSquareMeter
     *
     * @param value The unit as KilowattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromKilowattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.KilowattsPerSquareMeter);
    }

    /**
     * Create a new Irradiance instance from a MegawattsPerSquareMeter
     *
     * @param value The unit as MegawattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromMegawattsPerSquareMeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MegawattsPerSquareMeter);
    }

    /**
     * Create a new Irradiance instance from a PicowattsPerSquareCentimeter
     *
     * @param value The unit as PicowattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromPicowattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.PicowattsPerSquareCentimeter);
    }

    /**
     * Create a new Irradiance instance from a NanowattsPerSquareCentimeter
     *
     * @param value The unit as NanowattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromNanowattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.NanowattsPerSquareCentimeter);
    }

    /**
     * Create a new Irradiance instance from a MicrowattsPerSquareCentimeter
     *
     * @param value The unit as MicrowattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromMicrowattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MicrowattsPerSquareCentimeter);
    }

    /**
     * Create a new Irradiance instance from a MilliwattsPerSquareCentimeter
     *
     * @param value The unit as MilliwattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromMilliwattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.MilliwattsPerSquareCentimeter);
    }

    /**
     * Create a new Irradiance instance from a KilowattsPerSquareCentimeter
     *
     * @param value The unit as KilowattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    public static FromKilowattsPerSquareCentimeter(value: number): Irradiance {
        return new Irradiance(value, IrradianceUnits.KilowattsPerSquareCentimeter);
    }

    /**
     * Create a new Irradiance instance from a MegawattsPerSquareCentimeter
     *
     * @param value The unit as MegawattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
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
            case IrradianceUnits.MilliwattsPerSquareMeter:
                return (this.value) / 0.001;
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
            case IrradianceUnits.MilliwattsPerSquareCentimeter:
                return (this.value*0.0001) / 0.001;
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
            case IrradianceUnits.MilliwattsPerSquareMeter:
                return (value) * 0.001;
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
            case IrradianceUnits.MilliwattsPerSquareCentimeter:
                return (value*10000) * 0.001;
            case IrradianceUnits.KilowattsPerSquareCentimeter:
                return (value*10000) * 1000;
            case IrradianceUnits.MegawattsPerSquareCentimeter:
                return (value*10000) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Irradiance to string.
     * Note! the default format for Irradiance is WattsPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Irradiance.
     * @returns The string format of the Irradiance.
     */
    public toString(toUnit: IrradianceUnits = IrradianceUnits.WattsPerSquareMeter): string {

        switch (toUnit) {
            
            case IrradianceUnits.WattsPerSquareMeter:
                return this.WattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.WattsPerSquareCentimeter:
                return this.WattsPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.PicowattsPerSquareMeter:
                return this.PicowattsPerSquareMeter + ` `;
            case IrradianceUnits.NanowattsPerSquareMeter:
                return this.NanowattsPerSquareMeter + ` `;
            case IrradianceUnits.MicrowattsPerSquareMeter:
                return this.MicrowattsPerSquareMeter + ` `;
            case IrradianceUnits.MilliwattsPerSquareMeter:
                return this.MilliwattsPerSquareMeter + ` `;
            case IrradianceUnits.KilowattsPerSquareMeter:
                return this.KilowattsPerSquareMeter + ` `;
            case IrradianceUnits.MegawattsPerSquareMeter:
                return this.MegawattsPerSquareMeter + ` `;
            case IrradianceUnits.PicowattsPerSquareCentimeter:
                return this.PicowattsPerSquareCentimeter + ` `;
            case IrradianceUnits.NanowattsPerSquareCentimeter:
                return this.NanowattsPerSquareCentimeter + ` `;
            case IrradianceUnits.MicrowattsPerSquareCentimeter:
                return this.MicrowattsPerSquareCentimeter + ` `;
            case IrradianceUnits.MilliwattsPerSquareCentimeter:
                return this.MilliwattsPerSquareCentimeter + ` `;
            case IrradianceUnits.KilowattsPerSquareCentimeter:
                return this.KilowattsPerSquareCentimeter + ` `;
            case IrradianceUnits.MegawattsPerSquareCentimeter:
                return this.MegawattsPerSquareCentimeter + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given Irradiance are equals to the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns True if the given Irradiance are equal to the current Irradiance.
     */
    public equals(irradiance: Irradiance): boolean {
        return this.value === irradiance.BaseValue;
    }

    /**
     * Compare the given Irradiance against the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns 0 if they are equal, -1 if the current Irradiance is less then other, 1 if the current Irradiance is greater then other.
     */
    public compareTo(irradiance: Irradiance): number {

        if (this.value > irradiance.BaseValue)
            return 1;
        if (this.value < irradiance.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Irradiance with the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns A new Irradiance instance with the results.
     */
    public add(irradiance: Irradiance): Irradiance {
        return new Irradiance(this.value + irradiance.BaseValue)
    }

    /**
     * Subtract the given Irradiance with the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns A new Irradiance instance with the results.
     */
    public subtract(irradiance: Irradiance): Irradiance {
        return new Irradiance(this.value - irradiance.BaseValue)
    }

    /**
     * Multiply the given Irradiance with the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns A new Irradiance instance with the results.
     */
    public multiply(irradiance: Irradiance): Irradiance {
        return new Irradiance(this.value * irradiance.BaseValue)
    }

    /**
     * Divide the given Irradiance with the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns A new Irradiance instance with the results.
     */
    public divide(irradiance: Irradiance): Irradiance {
        return new Irradiance(this.value / irradiance.BaseValue)
    }

    /**
     * Modulo the given Irradiance with the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns A new Irradiance instance with the results.
     */
    public modulo(irradiance: Irradiance): Irradiance {
        return new Irradiance(this.value % irradiance.BaseValue)
    }

    /**
     * Pow the given Irradiance with the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns A new Irradiance instance with the results.
     */
    public pow(irradiance: Irradiance): Irradiance {
        return new Irradiance(this.value ** irradiance.BaseValue)
    }
}
