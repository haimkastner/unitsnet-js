/** PowerDensityUnits enumeration */
export enum PowerDensityUnits {
    /** */
    WattsPerCubicMeter,
    /** */
    WattsPerCubicInch,
    /** */
    WattsPerCubicFoot,
    /** */
    WattsPerLiter,
    /** */
    PicowattsPerCubicMeter,
    /** */
    NanowattsPerCubicMeter,
    /** */
    MicrowattsPerCubicMeter,
    /** */
    DeciwattsPerCubicMeter,
    /** */
    DecawattsPerCubicMeter,
    /** */
    KilowattsPerCubicMeter,
    /** */
    MegawattsPerCubicMeter,
    /** */
    GigawattsPerCubicMeter,
    /** */
    TerawattsPerCubicMeter,
    /** */
    PicowattsPerCubicInch,
    /** */
    NanowattsPerCubicInch,
    /** */
    MicrowattsPerCubicInch,
    /** */
    DeciwattsPerCubicInch,
    /** */
    DecawattsPerCubicInch,
    /** */
    KilowattsPerCubicInch,
    /** */
    MegawattsPerCubicInch,
    /** */
    GigawattsPerCubicInch,
    /** */
    TerawattsPerCubicInch,
    /** */
    PicowattsPerCubicFoot,
    /** */
    NanowattsPerCubicFoot,
    /** */
    MicrowattsPerCubicFoot,
    /** */
    DeciwattsPerCubicFoot,
    /** */
    DecawattsPerCubicFoot,
    /** */
    KilowattsPerCubicFoot,
    /** */
    MegawattsPerCubicFoot,
    /** */
    GigawattsPerCubicFoot,
    /** */
    TerawattsPerCubicFoot,
    /** */
    PicowattsPerLiter,
    /** */
    NanowattsPerLiter,
    /** */
    MicrowattsPerLiter,
    /** */
    DeciwattsPerLiter,
    /** */
    DecawattsPerLiter,
    /** */
    KilowattsPerLiter,
    /** */
    MegawattsPerLiter,
    /** */
    GigawattsPerLiter,
    /** */
    TerawattsPerLiter
}

/** The amount of power in a volume. */
export class PowerDensity {
    private value: number;
    private wattspercubicmeterLazy: number | null = null;
    private wattspercubicinchLazy: number | null = null;
    private wattspercubicfootLazy: number | null = null;
    private wattsperliterLazy: number | null = null;
    private picowattspercubicmeterLazy: number | null = null;
    private nanowattspercubicmeterLazy: number | null = null;
    private microwattspercubicmeterLazy: number | null = null;
    private deciwattspercubicmeterLazy: number | null = null;
    private decawattspercubicmeterLazy: number | null = null;
    private kilowattspercubicmeterLazy: number | null = null;
    private megawattspercubicmeterLazy: number | null = null;
    private gigawattspercubicmeterLazy: number | null = null;
    private terawattspercubicmeterLazy: number | null = null;
    private picowattspercubicinchLazy: number | null = null;
    private nanowattspercubicinchLazy: number | null = null;
    private microwattspercubicinchLazy: number | null = null;
    private deciwattspercubicinchLazy: number | null = null;
    private decawattspercubicinchLazy: number | null = null;
    private kilowattspercubicinchLazy: number | null = null;
    private megawattspercubicinchLazy: number | null = null;
    private gigawattspercubicinchLazy: number | null = null;
    private terawattspercubicinchLazy: number | null = null;
    private picowattspercubicfootLazy: number | null = null;
    private nanowattspercubicfootLazy: number | null = null;
    private microwattspercubicfootLazy: number | null = null;
    private deciwattspercubicfootLazy: number | null = null;
    private decawattspercubicfootLazy: number | null = null;
    private kilowattspercubicfootLazy: number | null = null;
    private megawattspercubicfootLazy: number | null = null;
    private gigawattspercubicfootLazy: number | null = null;
    private terawattspercubicfootLazy: number | null = null;
    private picowattsperliterLazy: number | null = null;
    private nanowattsperliterLazy: number | null = null;
    private microwattsperliterLazy: number | null = null;
    private deciwattsperliterLazy: number | null = null;
    private decawattsperliterLazy: number | null = null;
    private kilowattsperliterLazy: number | null = null;
    private megawattsperliterLazy: number | null = null;
    private gigawattsperliterLazy: number | null = null;
    private terawattsperliterLazy: number | null = null;

    /**
     * Create a new PowerDensity.
     * @param value The value.
     * @param fromUnit The ‘PowerDensity’ unit to create from.
     * The default unit is WattsPerCubicMeter
     */
    public constructor(value: number, fromUnit: PowerDensityUnits = PowerDensityUnits.WattsPerCubicMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of PowerDensity is WattsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get WattsPerCubicMeter(): number {
        if(this.wattspercubicmeterLazy !== null){
            return this.wattspercubicmeterLazy;
        }
        return this.wattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.WattsPerCubicMeter);
    }

    /** */
    public get WattsPerCubicInch(): number {
        if(this.wattspercubicinchLazy !== null){
            return this.wattspercubicinchLazy;
        }
        return this.wattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.WattsPerCubicInch);
    }

    /** */
    public get WattsPerCubicFoot(): number {
        if(this.wattspercubicfootLazy !== null){
            return this.wattspercubicfootLazy;
        }
        return this.wattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.WattsPerCubicFoot);
    }

    /** */
    public get WattsPerLiter(): number {
        if(this.wattsperliterLazy !== null){
            return this.wattsperliterLazy;
        }
        return this.wattsperliterLazy = this.convertFromBase(PowerDensityUnits.WattsPerLiter);
    }

    /** */
    public get PicowattsPerCubicMeter(): number {
        if(this.picowattspercubicmeterLazy !== null){
            return this.picowattspercubicmeterLazy;
        }
        return this.picowattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.PicowattsPerCubicMeter);
    }

    /** */
    public get NanowattsPerCubicMeter(): number {
        if(this.nanowattspercubicmeterLazy !== null){
            return this.nanowattspercubicmeterLazy;
        }
        return this.nanowattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.NanowattsPerCubicMeter);
    }

    /** */
    public get MicrowattsPerCubicMeter(): number {
        if(this.microwattspercubicmeterLazy !== null){
            return this.microwattspercubicmeterLazy;
        }
        return this.microwattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.MicrowattsPerCubicMeter);
    }

    /** */
    public get DeciwattsPerCubicMeter(): number {
        if(this.deciwattspercubicmeterLazy !== null){
            return this.deciwattspercubicmeterLazy;
        }
        return this.deciwattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.DeciwattsPerCubicMeter);
    }

    /** */
    public get DecawattsPerCubicMeter(): number {
        if(this.decawattspercubicmeterLazy !== null){
            return this.decawattspercubicmeterLazy;
        }
        return this.decawattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.DecawattsPerCubicMeter);
    }

    /** */
    public get KilowattsPerCubicMeter(): number {
        if(this.kilowattspercubicmeterLazy !== null){
            return this.kilowattspercubicmeterLazy;
        }
        return this.kilowattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.KilowattsPerCubicMeter);
    }

    /** */
    public get MegawattsPerCubicMeter(): number {
        if(this.megawattspercubicmeterLazy !== null){
            return this.megawattspercubicmeterLazy;
        }
        return this.megawattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.MegawattsPerCubicMeter);
    }

    /** */
    public get GigawattsPerCubicMeter(): number {
        if(this.gigawattspercubicmeterLazy !== null){
            return this.gigawattspercubicmeterLazy;
        }
        return this.gigawattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.GigawattsPerCubicMeter);
    }

    /** */
    public get TerawattsPerCubicMeter(): number {
        if(this.terawattspercubicmeterLazy !== null){
            return this.terawattspercubicmeterLazy;
        }
        return this.terawattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.TerawattsPerCubicMeter);
    }

    /** */
    public get PicowattsPerCubicInch(): number {
        if(this.picowattspercubicinchLazy !== null){
            return this.picowattspercubicinchLazy;
        }
        return this.picowattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.PicowattsPerCubicInch);
    }

    /** */
    public get NanowattsPerCubicInch(): number {
        if(this.nanowattspercubicinchLazy !== null){
            return this.nanowattspercubicinchLazy;
        }
        return this.nanowattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.NanowattsPerCubicInch);
    }

    /** */
    public get MicrowattsPerCubicInch(): number {
        if(this.microwattspercubicinchLazy !== null){
            return this.microwattspercubicinchLazy;
        }
        return this.microwattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.MicrowattsPerCubicInch);
    }

    /** */
    public get DeciwattsPerCubicInch(): number {
        if(this.deciwattspercubicinchLazy !== null){
            return this.deciwattspercubicinchLazy;
        }
        return this.deciwattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.DeciwattsPerCubicInch);
    }

    /** */
    public get DecawattsPerCubicInch(): number {
        if(this.decawattspercubicinchLazy !== null){
            return this.decawattspercubicinchLazy;
        }
        return this.decawattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.DecawattsPerCubicInch);
    }

    /** */
    public get KilowattsPerCubicInch(): number {
        if(this.kilowattspercubicinchLazy !== null){
            return this.kilowattspercubicinchLazy;
        }
        return this.kilowattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.KilowattsPerCubicInch);
    }

    /** */
    public get MegawattsPerCubicInch(): number {
        if(this.megawattspercubicinchLazy !== null){
            return this.megawattspercubicinchLazy;
        }
        return this.megawattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.MegawattsPerCubicInch);
    }

    /** */
    public get GigawattsPerCubicInch(): number {
        if(this.gigawattspercubicinchLazy !== null){
            return this.gigawattspercubicinchLazy;
        }
        return this.gigawattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.GigawattsPerCubicInch);
    }

    /** */
    public get TerawattsPerCubicInch(): number {
        if(this.terawattspercubicinchLazy !== null){
            return this.terawattspercubicinchLazy;
        }
        return this.terawattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.TerawattsPerCubicInch);
    }

    /** */
    public get PicowattsPerCubicFoot(): number {
        if(this.picowattspercubicfootLazy !== null){
            return this.picowattspercubicfootLazy;
        }
        return this.picowattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.PicowattsPerCubicFoot);
    }

    /** */
    public get NanowattsPerCubicFoot(): number {
        if(this.nanowattspercubicfootLazy !== null){
            return this.nanowattspercubicfootLazy;
        }
        return this.nanowattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.NanowattsPerCubicFoot);
    }

    /** */
    public get MicrowattsPerCubicFoot(): number {
        if(this.microwattspercubicfootLazy !== null){
            return this.microwattspercubicfootLazy;
        }
        return this.microwattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.MicrowattsPerCubicFoot);
    }

    /** */
    public get DeciwattsPerCubicFoot(): number {
        if(this.deciwattspercubicfootLazy !== null){
            return this.deciwattspercubicfootLazy;
        }
        return this.deciwattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.DeciwattsPerCubicFoot);
    }

    /** */
    public get DecawattsPerCubicFoot(): number {
        if(this.decawattspercubicfootLazy !== null){
            return this.decawattspercubicfootLazy;
        }
        return this.decawattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.DecawattsPerCubicFoot);
    }

    /** */
    public get KilowattsPerCubicFoot(): number {
        if(this.kilowattspercubicfootLazy !== null){
            return this.kilowattspercubicfootLazy;
        }
        return this.kilowattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.KilowattsPerCubicFoot);
    }

    /** */
    public get MegawattsPerCubicFoot(): number {
        if(this.megawattspercubicfootLazy !== null){
            return this.megawattspercubicfootLazy;
        }
        return this.megawattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.MegawattsPerCubicFoot);
    }

    /** */
    public get GigawattsPerCubicFoot(): number {
        if(this.gigawattspercubicfootLazy !== null){
            return this.gigawattspercubicfootLazy;
        }
        return this.gigawattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.GigawattsPerCubicFoot);
    }

    /** */
    public get TerawattsPerCubicFoot(): number {
        if(this.terawattspercubicfootLazy !== null){
            return this.terawattspercubicfootLazy;
        }
        return this.terawattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.TerawattsPerCubicFoot);
    }

    /** */
    public get PicowattsPerLiter(): number {
        if(this.picowattsperliterLazy !== null){
            return this.picowattsperliterLazy;
        }
        return this.picowattsperliterLazy = this.convertFromBase(PowerDensityUnits.PicowattsPerLiter);
    }

    /** */
    public get NanowattsPerLiter(): number {
        if(this.nanowattsperliterLazy !== null){
            return this.nanowattsperliterLazy;
        }
        return this.nanowattsperliterLazy = this.convertFromBase(PowerDensityUnits.NanowattsPerLiter);
    }

    /** */
    public get MicrowattsPerLiter(): number {
        if(this.microwattsperliterLazy !== null){
            return this.microwattsperliterLazy;
        }
        return this.microwattsperliterLazy = this.convertFromBase(PowerDensityUnits.MicrowattsPerLiter);
    }

    /** */
    public get DeciwattsPerLiter(): number {
        if(this.deciwattsperliterLazy !== null){
            return this.deciwattsperliterLazy;
        }
        return this.deciwattsperliterLazy = this.convertFromBase(PowerDensityUnits.DeciwattsPerLiter);
    }

    /** */
    public get DecawattsPerLiter(): number {
        if(this.decawattsperliterLazy !== null){
            return this.decawattsperliterLazy;
        }
        return this.decawattsperliterLazy = this.convertFromBase(PowerDensityUnits.DecawattsPerLiter);
    }

    /** */
    public get KilowattsPerLiter(): number {
        if(this.kilowattsperliterLazy !== null){
            return this.kilowattsperliterLazy;
        }
        return this.kilowattsperliterLazy = this.convertFromBase(PowerDensityUnits.KilowattsPerLiter);
    }

    /** */
    public get MegawattsPerLiter(): number {
        if(this.megawattsperliterLazy !== null){
            return this.megawattsperliterLazy;
        }
        return this.megawattsperliterLazy = this.convertFromBase(PowerDensityUnits.MegawattsPerLiter);
    }

    /** */
    public get GigawattsPerLiter(): number {
        if(this.gigawattsperliterLazy !== null){
            return this.gigawattsperliterLazy;
        }
        return this.gigawattsperliterLazy = this.convertFromBase(PowerDensityUnits.GigawattsPerLiter);
    }

    /** */
    public get TerawattsPerLiter(): number {
        if(this.terawattsperliterLazy !== null){
            return this.terawattsperliterLazy;
        }
        return this.terawattsperliterLazy = this.convertFromBase(PowerDensityUnits.TerawattsPerLiter);
    }

    /**
     * Create a new PowerDensity instance from a WattsPerCubicMeter
     *
     * @param value The unit as WattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromWattsPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.WattsPerCubicMeter);
    }

    /**
     * Create a new PowerDensity instance from a WattsPerCubicInch
     *
     * @param value The unit as WattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromWattsPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.WattsPerCubicInch);
    }

    /**
     * Create a new PowerDensity instance from a WattsPerCubicFoot
     *
     * @param value The unit as WattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromWattsPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.WattsPerCubicFoot);
    }

    /**
     * Create a new PowerDensity instance from a WattsPerLiter
     *
     * @param value The unit as WattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromWattsPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.WattsPerLiter);
    }

    /**
     * Create a new PowerDensity instance from a PicowattsPerCubicMeter
     *
     * @param value The unit as PicowattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromPicowattsPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.PicowattsPerCubicMeter);
    }

    /**
     * Create a new PowerDensity instance from a NanowattsPerCubicMeter
     *
     * @param value The unit as NanowattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromNanowattsPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.NanowattsPerCubicMeter);
    }

    /**
     * Create a new PowerDensity instance from a MicrowattsPerCubicMeter
     *
     * @param value The unit as MicrowattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromMicrowattsPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MicrowattsPerCubicMeter);
    }

    /**
     * Create a new PowerDensity instance from a DeciwattsPerCubicMeter
     *
     * @param value The unit as DeciwattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromDeciwattsPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DeciwattsPerCubicMeter);
    }

    /**
     * Create a new PowerDensity instance from a DecawattsPerCubicMeter
     *
     * @param value The unit as DecawattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromDecawattsPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DecawattsPerCubicMeter);
    }

    /**
     * Create a new PowerDensity instance from a KilowattsPerCubicMeter
     *
     * @param value The unit as KilowattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromKilowattsPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.KilowattsPerCubicMeter);
    }

    /**
     * Create a new PowerDensity instance from a MegawattsPerCubicMeter
     *
     * @param value The unit as MegawattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromMegawattsPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MegawattsPerCubicMeter);
    }

    /**
     * Create a new PowerDensity instance from a GigawattsPerCubicMeter
     *
     * @param value The unit as GigawattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromGigawattsPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.GigawattsPerCubicMeter);
    }

    /**
     * Create a new PowerDensity instance from a TerawattsPerCubicMeter
     *
     * @param value The unit as TerawattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromTerawattsPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.TerawattsPerCubicMeter);
    }

    /**
     * Create a new PowerDensity instance from a PicowattsPerCubicInch
     *
     * @param value The unit as PicowattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromPicowattsPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.PicowattsPerCubicInch);
    }

    /**
     * Create a new PowerDensity instance from a NanowattsPerCubicInch
     *
     * @param value The unit as NanowattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromNanowattsPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.NanowattsPerCubicInch);
    }

    /**
     * Create a new PowerDensity instance from a MicrowattsPerCubicInch
     *
     * @param value The unit as MicrowattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromMicrowattsPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MicrowattsPerCubicInch);
    }

    /**
     * Create a new PowerDensity instance from a DeciwattsPerCubicInch
     *
     * @param value The unit as DeciwattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromDeciwattsPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DeciwattsPerCubicInch);
    }

    /**
     * Create a new PowerDensity instance from a DecawattsPerCubicInch
     *
     * @param value The unit as DecawattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromDecawattsPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DecawattsPerCubicInch);
    }

    /**
     * Create a new PowerDensity instance from a KilowattsPerCubicInch
     *
     * @param value The unit as KilowattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromKilowattsPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.KilowattsPerCubicInch);
    }

    /**
     * Create a new PowerDensity instance from a MegawattsPerCubicInch
     *
     * @param value The unit as MegawattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromMegawattsPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MegawattsPerCubicInch);
    }

    /**
     * Create a new PowerDensity instance from a GigawattsPerCubicInch
     *
     * @param value The unit as GigawattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromGigawattsPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.GigawattsPerCubicInch);
    }

    /**
     * Create a new PowerDensity instance from a TerawattsPerCubicInch
     *
     * @param value The unit as TerawattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromTerawattsPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.TerawattsPerCubicInch);
    }

    /**
     * Create a new PowerDensity instance from a PicowattsPerCubicFoot
     *
     * @param value The unit as PicowattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromPicowattsPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.PicowattsPerCubicFoot);
    }

    /**
     * Create a new PowerDensity instance from a NanowattsPerCubicFoot
     *
     * @param value The unit as NanowattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromNanowattsPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.NanowattsPerCubicFoot);
    }

    /**
     * Create a new PowerDensity instance from a MicrowattsPerCubicFoot
     *
     * @param value The unit as MicrowattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromMicrowattsPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MicrowattsPerCubicFoot);
    }

    /**
     * Create a new PowerDensity instance from a DeciwattsPerCubicFoot
     *
     * @param value The unit as DeciwattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromDeciwattsPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DeciwattsPerCubicFoot);
    }

    /**
     * Create a new PowerDensity instance from a DecawattsPerCubicFoot
     *
     * @param value The unit as DecawattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromDecawattsPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DecawattsPerCubicFoot);
    }

    /**
     * Create a new PowerDensity instance from a KilowattsPerCubicFoot
     *
     * @param value The unit as KilowattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromKilowattsPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.KilowattsPerCubicFoot);
    }

    /**
     * Create a new PowerDensity instance from a MegawattsPerCubicFoot
     *
     * @param value The unit as MegawattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromMegawattsPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MegawattsPerCubicFoot);
    }

    /**
     * Create a new PowerDensity instance from a GigawattsPerCubicFoot
     *
     * @param value The unit as GigawattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromGigawattsPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.GigawattsPerCubicFoot);
    }

    /**
     * Create a new PowerDensity instance from a TerawattsPerCubicFoot
     *
     * @param value The unit as TerawattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromTerawattsPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.TerawattsPerCubicFoot);
    }

    /**
     * Create a new PowerDensity instance from a PicowattsPerLiter
     *
     * @param value The unit as PicowattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromPicowattsPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.PicowattsPerLiter);
    }

    /**
     * Create a new PowerDensity instance from a NanowattsPerLiter
     *
     * @param value The unit as NanowattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromNanowattsPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.NanowattsPerLiter);
    }

    /**
     * Create a new PowerDensity instance from a MicrowattsPerLiter
     *
     * @param value The unit as MicrowattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromMicrowattsPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MicrowattsPerLiter);
    }

    /**
     * Create a new PowerDensity instance from a DeciwattsPerLiter
     *
     * @param value The unit as DeciwattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromDeciwattsPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DeciwattsPerLiter);
    }

    /**
     * Create a new PowerDensity instance from a DecawattsPerLiter
     *
     * @param value The unit as DecawattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromDecawattsPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.DecawattsPerLiter);
    }

    /**
     * Create a new PowerDensity instance from a KilowattsPerLiter
     *
     * @param value The unit as KilowattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromKilowattsPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.KilowattsPerLiter);
    }

    /**
     * Create a new PowerDensity instance from a MegawattsPerLiter
     *
     * @param value The unit as MegawattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromMegawattsPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MegawattsPerLiter);
    }

    /**
     * Create a new PowerDensity instance from a GigawattsPerLiter
     *
     * @param value The unit as GigawattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromGigawattsPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.GigawattsPerLiter);
    }

    /**
     * Create a new PowerDensity instance from a TerawattsPerLiter
     *
     * @param value The unit as TerawattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromTerawattsPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.TerawattsPerLiter);
    }

    private convertFromBase(toUnit: PowerDensityUnits): number {
        switch (toUnit) {
                
            case PowerDensityUnits.WattsPerCubicMeter:
                return this.value;
            case PowerDensityUnits.WattsPerCubicInch:
                return this.value/6.102374409473228e4;
            case PowerDensityUnits.WattsPerCubicFoot:
                return this.value/3.531466672148859e1;
            case PowerDensityUnits.WattsPerLiter:
                return this.value/1.0e3;
            case PowerDensityUnits.PicowattsPerCubicMeter:
                return (this.value) / 1e-12;
            case PowerDensityUnits.NanowattsPerCubicMeter:
                return (this.value) / 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicMeter:
                return (this.value) / 0.000001;
            case PowerDensityUnits.DeciwattsPerCubicMeter:
                return (this.value) / 0.1;
            case PowerDensityUnits.DecawattsPerCubicMeter:
                return (this.value) / 10;
            case PowerDensityUnits.KilowattsPerCubicMeter:
                return (this.value) / 1000;
            case PowerDensityUnits.MegawattsPerCubicMeter:
                return (this.value) / 1000000;
            case PowerDensityUnits.GigawattsPerCubicMeter:
                return (this.value) / 1000000000;
            case PowerDensityUnits.TerawattsPerCubicMeter:
                return (this.value) / 1000000000000;
            case PowerDensityUnits.PicowattsPerCubicInch:
                return (this.value/6.102374409473228e4) / 1e-12;
            case PowerDensityUnits.NanowattsPerCubicInch:
                return (this.value/6.102374409473228e4) / 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicInch:
                return (this.value/6.102374409473228e4) / 0.000001;
            case PowerDensityUnits.DeciwattsPerCubicInch:
                return (this.value/6.102374409473228e4) / 0.1;
            case PowerDensityUnits.DecawattsPerCubicInch:
                return (this.value/6.102374409473228e4) / 10;
            case PowerDensityUnits.KilowattsPerCubicInch:
                return (this.value/6.102374409473228e4) / 1000;
            case PowerDensityUnits.MegawattsPerCubicInch:
                return (this.value/6.102374409473228e4) / 1000000;
            case PowerDensityUnits.GigawattsPerCubicInch:
                return (this.value/6.102374409473228e4) / 1000000000;
            case PowerDensityUnits.TerawattsPerCubicInch:
                return (this.value/6.102374409473228e4) / 1000000000000;
            case PowerDensityUnits.PicowattsPerCubicFoot:
                return (this.value/3.531466672148859e1) / 1e-12;
            case PowerDensityUnits.NanowattsPerCubicFoot:
                return (this.value/3.531466672148859e1) / 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicFoot:
                return (this.value/3.531466672148859e1) / 0.000001;
            case PowerDensityUnits.DeciwattsPerCubicFoot:
                return (this.value/3.531466672148859e1) / 0.1;
            case PowerDensityUnits.DecawattsPerCubicFoot:
                return (this.value/3.531466672148859e1) / 10;
            case PowerDensityUnits.KilowattsPerCubicFoot:
                return (this.value/3.531466672148859e1) / 1000;
            case PowerDensityUnits.MegawattsPerCubicFoot:
                return (this.value/3.531466672148859e1) / 1000000;
            case PowerDensityUnits.GigawattsPerCubicFoot:
                return (this.value/3.531466672148859e1) / 1000000000;
            case PowerDensityUnits.TerawattsPerCubicFoot:
                return (this.value/3.531466672148859e1) / 1000000000000;
            case PowerDensityUnits.PicowattsPerLiter:
                return (this.value/1.0e3) / 1e-12;
            case PowerDensityUnits.NanowattsPerLiter:
                return (this.value/1.0e3) / 1e-9;
            case PowerDensityUnits.MicrowattsPerLiter:
                return (this.value/1.0e3) / 0.000001;
            case PowerDensityUnits.DeciwattsPerLiter:
                return (this.value/1.0e3) / 0.1;
            case PowerDensityUnits.DecawattsPerLiter:
                return (this.value/1.0e3) / 10;
            case PowerDensityUnits.KilowattsPerLiter:
                return (this.value/1.0e3) / 1000;
            case PowerDensityUnits.MegawattsPerLiter:
                return (this.value/1.0e3) / 1000000;
            case PowerDensityUnits.GigawattsPerLiter:
                return (this.value/1.0e3) / 1000000000;
            case PowerDensityUnits.TerawattsPerLiter:
                return (this.value/1.0e3) / 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PowerDensityUnits): number {
        switch (fromUnit) {
                
            case PowerDensityUnits.WattsPerCubicMeter:
                return value;
            case PowerDensityUnits.WattsPerCubicInch:
                return value*6.102374409473228e4;
            case PowerDensityUnits.WattsPerCubicFoot:
                return value*3.531466672148859e1;
            case PowerDensityUnits.WattsPerLiter:
                return value*1.0e3;
            case PowerDensityUnits.PicowattsPerCubicMeter:
                return (value) * 1e-12;
            case PowerDensityUnits.NanowattsPerCubicMeter:
                return (value) * 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicMeter:
                return (value) * 0.000001;
            case PowerDensityUnits.DeciwattsPerCubicMeter:
                return (value) * 0.1;
            case PowerDensityUnits.DecawattsPerCubicMeter:
                return (value) * 10;
            case PowerDensityUnits.KilowattsPerCubicMeter:
                return (value) * 1000;
            case PowerDensityUnits.MegawattsPerCubicMeter:
                return (value) * 1000000;
            case PowerDensityUnits.GigawattsPerCubicMeter:
                return (value) * 1000000000;
            case PowerDensityUnits.TerawattsPerCubicMeter:
                return (value) * 1000000000000;
            case PowerDensityUnits.PicowattsPerCubicInch:
                return (value*6.102374409473228e4) * 1e-12;
            case PowerDensityUnits.NanowattsPerCubicInch:
                return (value*6.102374409473228e4) * 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicInch:
                return (value*6.102374409473228e4) * 0.000001;
            case PowerDensityUnits.DeciwattsPerCubicInch:
                return (value*6.102374409473228e4) * 0.1;
            case PowerDensityUnits.DecawattsPerCubicInch:
                return (value*6.102374409473228e4) * 10;
            case PowerDensityUnits.KilowattsPerCubicInch:
                return (value*6.102374409473228e4) * 1000;
            case PowerDensityUnits.MegawattsPerCubicInch:
                return (value*6.102374409473228e4) * 1000000;
            case PowerDensityUnits.GigawattsPerCubicInch:
                return (value*6.102374409473228e4) * 1000000000;
            case PowerDensityUnits.TerawattsPerCubicInch:
                return (value*6.102374409473228e4) * 1000000000000;
            case PowerDensityUnits.PicowattsPerCubicFoot:
                return (value*3.531466672148859e1) * 1e-12;
            case PowerDensityUnits.NanowattsPerCubicFoot:
                return (value*3.531466672148859e1) * 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicFoot:
                return (value*3.531466672148859e1) * 0.000001;
            case PowerDensityUnits.DeciwattsPerCubicFoot:
                return (value*3.531466672148859e1) * 0.1;
            case PowerDensityUnits.DecawattsPerCubicFoot:
                return (value*3.531466672148859e1) * 10;
            case PowerDensityUnits.KilowattsPerCubicFoot:
                return (value*3.531466672148859e1) * 1000;
            case PowerDensityUnits.MegawattsPerCubicFoot:
                return (value*3.531466672148859e1) * 1000000;
            case PowerDensityUnits.GigawattsPerCubicFoot:
                return (value*3.531466672148859e1) * 1000000000;
            case PowerDensityUnits.TerawattsPerCubicFoot:
                return (value*3.531466672148859e1) * 1000000000000;
            case PowerDensityUnits.PicowattsPerLiter:
                return (value*1.0e3) * 1e-12;
            case PowerDensityUnits.NanowattsPerLiter:
                return (value*1.0e3) * 1e-9;
            case PowerDensityUnits.MicrowattsPerLiter:
                return (value*1.0e3) * 0.000001;
            case PowerDensityUnits.DeciwattsPerLiter:
                return (value*1.0e3) * 0.1;
            case PowerDensityUnits.DecawattsPerLiter:
                return (value*1.0e3) * 10;
            case PowerDensityUnits.KilowattsPerLiter:
                return (value*1.0e3) * 1000;
            case PowerDensityUnits.MegawattsPerLiter:
                return (value*1.0e3) * 1000000;
            case PowerDensityUnits.GigawattsPerLiter:
                return (value*1.0e3) * 1000000000;
            case PowerDensityUnits.TerawattsPerLiter:
                return (value*1.0e3) * 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the PowerDensity to string.
     * Note! the default format for PowerDensity is WattsPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the PowerDensity.
     * @returns The string format of the PowerDensity.
     */
    public toString(toUnit: PowerDensityUnits = PowerDensityUnits.WattsPerCubicMeter): string {

        switch (toUnit) {
            
            case PowerDensityUnits.WattsPerCubicMeter:
                return this.WattsPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.WattsPerCubicInch:
                return this.WattsPerCubicInch + ` W/in³`;
            case PowerDensityUnits.WattsPerCubicFoot:
                return this.WattsPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.WattsPerLiter:
                return this.WattsPerLiter + ` W/l`;
            case PowerDensityUnits.PicowattsPerCubicMeter:
                return this.PicowattsPerCubicMeter + ` `;
            case PowerDensityUnits.NanowattsPerCubicMeter:
                return this.NanowattsPerCubicMeter + ` `;
            case PowerDensityUnits.MicrowattsPerCubicMeter:
                return this.MicrowattsPerCubicMeter + ` `;
            case PowerDensityUnits.DeciwattsPerCubicMeter:
                return this.DeciwattsPerCubicMeter + ` `;
            case PowerDensityUnits.DecawattsPerCubicMeter:
                return this.DecawattsPerCubicMeter + ` `;
            case PowerDensityUnits.KilowattsPerCubicMeter:
                return this.KilowattsPerCubicMeter + ` `;
            case PowerDensityUnits.MegawattsPerCubicMeter:
                return this.MegawattsPerCubicMeter + ` `;
            case PowerDensityUnits.GigawattsPerCubicMeter:
                return this.GigawattsPerCubicMeter + ` `;
            case PowerDensityUnits.TerawattsPerCubicMeter:
                return this.TerawattsPerCubicMeter + ` `;
            case PowerDensityUnits.PicowattsPerCubicInch:
                return this.PicowattsPerCubicInch + ` `;
            case PowerDensityUnits.NanowattsPerCubicInch:
                return this.NanowattsPerCubicInch + ` `;
            case PowerDensityUnits.MicrowattsPerCubicInch:
                return this.MicrowattsPerCubicInch + ` `;
            case PowerDensityUnits.DeciwattsPerCubicInch:
                return this.DeciwattsPerCubicInch + ` `;
            case PowerDensityUnits.DecawattsPerCubicInch:
                return this.DecawattsPerCubicInch + ` `;
            case PowerDensityUnits.KilowattsPerCubicInch:
                return this.KilowattsPerCubicInch + ` `;
            case PowerDensityUnits.MegawattsPerCubicInch:
                return this.MegawattsPerCubicInch + ` `;
            case PowerDensityUnits.GigawattsPerCubicInch:
                return this.GigawattsPerCubicInch + ` `;
            case PowerDensityUnits.TerawattsPerCubicInch:
                return this.TerawattsPerCubicInch + ` `;
            case PowerDensityUnits.PicowattsPerCubicFoot:
                return this.PicowattsPerCubicFoot + ` `;
            case PowerDensityUnits.NanowattsPerCubicFoot:
                return this.NanowattsPerCubicFoot + ` `;
            case PowerDensityUnits.MicrowattsPerCubicFoot:
                return this.MicrowattsPerCubicFoot + ` `;
            case PowerDensityUnits.DeciwattsPerCubicFoot:
                return this.DeciwattsPerCubicFoot + ` `;
            case PowerDensityUnits.DecawattsPerCubicFoot:
                return this.DecawattsPerCubicFoot + ` `;
            case PowerDensityUnits.KilowattsPerCubicFoot:
                return this.KilowattsPerCubicFoot + ` `;
            case PowerDensityUnits.MegawattsPerCubicFoot:
                return this.MegawattsPerCubicFoot + ` `;
            case PowerDensityUnits.GigawattsPerCubicFoot:
                return this.GigawattsPerCubicFoot + ` `;
            case PowerDensityUnits.TerawattsPerCubicFoot:
                return this.TerawattsPerCubicFoot + ` `;
            case PowerDensityUnits.PicowattsPerLiter:
                return this.PicowattsPerLiter + ` `;
            case PowerDensityUnits.NanowattsPerLiter:
                return this.NanowattsPerLiter + ` `;
            case PowerDensityUnits.MicrowattsPerLiter:
                return this.MicrowattsPerLiter + ` `;
            case PowerDensityUnits.DeciwattsPerLiter:
                return this.DeciwattsPerLiter + ` `;
            case PowerDensityUnits.DecawattsPerLiter:
                return this.DecawattsPerLiter + ` `;
            case PowerDensityUnits.KilowattsPerLiter:
                return this.KilowattsPerLiter + ` `;
            case PowerDensityUnits.MegawattsPerLiter:
                return this.MegawattsPerLiter + ` `;
            case PowerDensityUnits.GigawattsPerLiter:
                return this.GigawattsPerLiter + ` `;
            case PowerDensityUnits.TerawattsPerLiter:
                return this.TerawattsPerLiter + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given PowerDensity are equals to the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns True if the given PowerDensity are equal to the current PowerDensity.
     */
    public equals(powerDensity: PowerDensity): boolean {
        return this.value === powerDensity.BaseValue;
    }

    /**
     * Compare the given PowerDensity against the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns 0 if they are equal, -1 if the current PowerDensity is less then other, 1 if the current PowerDensity is greater then other.
     */
    public compareTo(powerDensity: PowerDensity): number {

        if (this.value > powerDensity.BaseValue)
            return 1;
        if (this.value < powerDensity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    public add(powerDensity: PowerDensity): PowerDensity {
        return new PowerDensity(this.value + powerDensity.BaseValue)
    }

    /**
     * Subtract the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    public subtract(powerDensity: PowerDensity): PowerDensity {
        return new PowerDensity(this.value - powerDensity.BaseValue)
    }

    /**
     * Multiply the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    public multiply(powerDensity: PowerDensity): PowerDensity {
        return new PowerDensity(this.value * powerDensity.BaseValue)
    }

    /**
     * Divide the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    public divide(powerDensity: PowerDensity): PowerDensity {
        return new PowerDensity(this.value / powerDensity.BaseValue)
    }

    /**
     * Modulo the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    public modulo(powerDensity: PowerDensity): PowerDensity {
        return new PowerDensity(this.value % powerDensity.BaseValue)
    }

    /**
     * Pow the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    public pow(powerDensity: PowerDensity): PowerDensity {
        return new PowerDensity(this.value ** powerDensity.BaseValue)
    }
}
