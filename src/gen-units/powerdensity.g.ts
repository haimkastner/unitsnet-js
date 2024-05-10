import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a PowerDensity */
export interface PowerDensityDto {
    /** The value of the PowerDensity */
    value: number;
    /**  The specific unit that the PowerDensity value is representing */
    unit: PowerDensityUnits;
}

/** PowerDensityUnits enumeration */
export enum PowerDensityUnits {
    /** */
    WattsPerCubicMeter = "WattPerCubicMeter",
    /** */
    WattsPerCubicInch = "WattPerCubicInch",
    /** */
    WattsPerCubicFoot = "WattPerCubicFoot",
    /** */
    WattsPerLiter = "WattPerLiter",
    /** */
    PicowattsPerCubicMeter = "PicowattPerCubicMeter",
    /** */
    NanowattsPerCubicMeter = "NanowattPerCubicMeter",
    /** */
    MicrowattsPerCubicMeter = "MicrowattPerCubicMeter",
    /** */
    MilliwattsPerCubicMeter = "MilliwattPerCubicMeter",
    /** */
    DeciwattsPerCubicMeter = "DeciwattPerCubicMeter",
    /** */
    DecawattsPerCubicMeter = "DecawattPerCubicMeter",
    /** */
    KilowattsPerCubicMeter = "KilowattPerCubicMeter",
    /** */
    MegawattsPerCubicMeter = "MegawattPerCubicMeter",
    /** */
    GigawattsPerCubicMeter = "GigawattPerCubicMeter",
    /** */
    TerawattsPerCubicMeter = "TerawattPerCubicMeter",
    /** */
    PicowattsPerCubicInch = "PicowattPerCubicInch",
    /** */
    NanowattsPerCubicInch = "NanowattPerCubicInch",
    /** */
    MicrowattsPerCubicInch = "MicrowattPerCubicInch",
    /** */
    MilliwattsPerCubicInch = "MilliwattPerCubicInch",
    /** */
    DeciwattsPerCubicInch = "DeciwattPerCubicInch",
    /** */
    DecawattsPerCubicInch = "DecawattPerCubicInch",
    /** */
    KilowattsPerCubicInch = "KilowattPerCubicInch",
    /** */
    MegawattsPerCubicInch = "MegawattPerCubicInch",
    /** */
    GigawattsPerCubicInch = "GigawattPerCubicInch",
    /** */
    TerawattsPerCubicInch = "TerawattPerCubicInch",
    /** */
    PicowattsPerCubicFoot = "PicowattPerCubicFoot",
    /** */
    NanowattsPerCubicFoot = "NanowattPerCubicFoot",
    /** */
    MicrowattsPerCubicFoot = "MicrowattPerCubicFoot",
    /** */
    MilliwattsPerCubicFoot = "MilliwattPerCubicFoot",
    /** */
    DeciwattsPerCubicFoot = "DeciwattPerCubicFoot",
    /** */
    DecawattsPerCubicFoot = "DecawattPerCubicFoot",
    /** */
    KilowattsPerCubicFoot = "KilowattPerCubicFoot",
    /** */
    MegawattsPerCubicFoot = "MegawattPerCubicFoot",
    /** */
    GigawattsPerCubicFoot = "GigawattPerCubicFoot",
    /** */
    TerawattsPerCubicFoot = "TerawattPerCubicFoot",
    /** */
    PicowattsPerLiter = "PicowattPerLiter",
    /** */
    NanowattsPerLiter = "NanowattPerLiter",
    /** */
    MicrowattsPerLiter = "MicrowattPerLiter",
    /** */
    MilliwattsPerLiter = "MilliwattPerLiter",
    /** */
    DeciwattsPerLiter = "DeciwattPerLiter",
    /** */
    DecawattsPerLiter = "DecawattPerLiter",
    /** */
    KilowattsPerLiter = "KilowattPerLiter",
    /** */
    MegawattsPerLiter = "MegawattPerLiter",
    /** */
    GigawattsPerLiter = "GigawattPerLiter",
    /** */
    TerawattsPerLiter = "TerawattPerLiter"
}

/** The amount of power in a volume. */
export class PowerDensity extends BaseUnit {
    protected value: number;
    private wattspercubicmeterLazy: number | null = null;
    private wattspercubicinchLazy: number | null = null;
    private wattspercubicfootLazy: number | null = null;
    private wattsperliterLazy: number | null = null;
    private picowattspercubicmeterLazy: number | null = null;
    private nanowattspercubicmeterLazy: number | null = null;
    private microwattspercubicmeterLazy: number | null = null;
    private milliwattspercubicmeterLazy: number | null = null;
    private deciwattspercubicmeterLazy: number | null = null;
    private decawattspercubicmeterLazy: number | null = null;
    private kilowattspercubicmeterLazy: number | null = null;
    private megawattspercubicmeterLazy: number | null = null;
    private gigawattspercubicmeterLazy: number | null = null;
    private terawattspercubicmeterLazy: number | null = null;
    private picowattspercubicinchLazy: number | null = null;
    private nanowattspercubicinchLazy: number | null = null;
    private microwattspercubicinchLazy: number | null = null;
    private milliwattspercubicinchLazy: number | null = null;
    private deciwattspercubicinchLazy: number | null = null;
    private decawattspercubicinchLazy: number | null = null;
    private kilowattspercubicinchLazy: number | null = null;
    private megawattspercubicinchLazy: number | null = null;
    private gigawattspercubicinchLazy: number | null = null;
    private terawattspercubicinchLazy: number | null = null;
    private picowattspercubicfootLazy: number | null = null;
    private nanowattspercubicfootLazy: number | null = null;
    private microwattspercubicfootLazy: number | null = null;
    private milliwattspercubicfootLazy: number | null = null;
    private deciwattspercubicfootLazy: number | null = null;
    private decawattspercubicfootLazy: number | null = null;
    private kilowattspercubicfootLazy: number | null = null;
    private megawattspercubicfootLazy: number | null = null;
    private gigawattspercubicfootLazy: number | null = null;
    private terawattspercubicfootLazy: number | null = null;
    private picowattsperliterLazy: number | null = null;
    private nanowattsperliterLazy: number | null = null;
    private microwattsperliterLazy: number | null = null;
    private milliwattsperliterLazy: number | null = null;
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

        super();
        if (Number.isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
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
    public get MilliwattsPerCubicMeter(): number {
        if(this.milliwattspercubicmeterLazy !== null){
            return this.milliwattspercubicmeterLazy;
        }
        return this.milliwattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.MilliwattsPerCubicMeter);
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
    public get MilliwattsPerCubicInch(): number {
        if(this.milliwattspercubicinchLazy !== null){
            return this.milliwattspercubicinchLazy;
        }
        return this.milliwattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.MilliwattsPerCubicInch);
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
    public get MilliwattsPerCubicFoot(): number {
        if(this.milliwattspercubicfootLazy !== null){
            return this.milliwattspercubicfootLazy;
        }
        return this.milliwattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.MilliwattsPerCubicFoot);
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
    public get MilliwattsPerLiter(): number {
        if(this.milliwattsperliterLazy !== null){
            return this.milliwattsperliterLazy;
        }
        return this.milliwattsperliterLazy = this.convertFromBase(PowerDensityUnits.MilliwattsPerLiter);
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
     * Create a new PowerDensity instance from a MilliwattsPerCubicMeter
     *
     * @param value The unit as MilliwattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromMilliwattsPerCubicMeter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MilliwattsPerCubicMeter);
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
     * Create a new PowerDensity instance from a MilliwattsPerCubicInch
     *
     * @param value The unit as MilliwattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromMilliwattsPerCubicInch(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MilliwattsPerCubicInch);
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
     * Create a new PowerDensity instance from a MilliwattsPerCubicFoot
     *
     * @param value The unit as MilliwattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromMilliwattsPerCubicFoot(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MilliwattsPerCubicFoot);
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
     * Create a new PowerDensity instance from a MilliwattsPerLiter
     *
     * @param value The unit as MilliwattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    public static FromMilliwattsPerLiter(value: number): PowerDensity {
        return new PowerDensity(value, PowerDensityUnits.MilliwattsPerLiter);
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

    /**
     * Gets the base unit enumeration associated with PowerDensity
     * @returns The unit enumeration that can be used to interact with this type
     */
    public static getUnitEnum(): typeof PowerDensityUnits {
        return PowerDensityUnits;
    }

    /**
     * Create API DTO represent a PowerDensity unit.
     * @param holdInUnit The specific PowerDensity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: PowerDensityUnits = PowerDensityUnits.WattsPerCubicMeter): PowerDensityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a PowerDensity unit from an API DTO representation.
     * @param dtoPowerDensity The PowerDensity API DTO representation
     */
    public static FromDto(dtoPowerDensity: PowerDensityDto): PowerDensity {
        return new PowerDensity(dtoPowerDensity.value, dtoPowerDensity.unit);
    }

    /**
     * Convert PowerDensity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: PowerDensityUnits): number {
        switch (toUnit) {
            case PowerDensityUnits.WattsPerCubicMeter: return this.WattsPerCubicMeter;
            case PowerDensityUnits.WattsPerCubicInch: return this.WattsPerCubicInch;
            case PowerDensityUnits.WattsPerCubicFoot: return this.WattsPerCubicFoot;
            case PowerDensityUnits.WattsPerLiter: return this.WattsPerLiter;
            case PowerDensityUnits.PicowattsPerCubicMeter: return this.PicowattsPerCubicMeter;
            case PowerDensityUnits.NanowattsPerCubicMeter: return this.NanowattsPerCubicMeter;
            case PowerDensityUnits.MicrowattsPerCubicMeter: return this.MicrowattsPerCubicMeter;
            case PowerDensityUnits.MilliwattsPerCubicMeter: return this.MilliwattsPerCubicMeter;
            case PowerDensityUnits.DeciwattsPerCubicMeter: return this.DeciwattsPerCubicMeter;
            case PowerDensityUnits.DecawattsPerCubicMeter: return this.DecawattsPerCubicMeter;
            case PowerDensityUnits.KilowattsPerCubicMeter: return this.KilowattsPerCubicMeter;
            case PowerDensityUnits.MegawattsPerCubicMeter: return this.MegawattsPerCubicMeter;
            case PowerDensityUnits.GigawattsPerCubicMeter: return this.GigawattsPerCubicMeter;
            case PowerDensityUnits.TerawattsPerCubicMeter: return this.TerawattsPerCubicMeter;
            case PowerDensityUnits.PicowattsPerCubicInch: return this.PicowattsPerCubicInch;
            case PowerDensityUnits.NanowattsPerCubicInch: return this.NanowattsPerCubicInch;
            case PowerDensityUnits.MicrowattsPerCubicInch: return this.MicrowattsPerCubicInch;
            case PowerDensityUnits.MilliwattsPerCubicInch: return this.MilliwattsPerCubicInch;
            case PowerDensityUnits.DeciwattsPerCubicInch: return this.DeciwattsPerCubicInch;
            case PowerDensityUnits.DecawattsPerCubicInch: return this.DecawattsPerCubicInch;
            case PowerDensityUnits.KilowattsPerCubicInch: return this.KilowattsPerCubicInch;
            case PowerDensityUnits.MegawattsPerCubicInch: return this.MegawattsPerCubicInch;
            case PowerDensityUnits.GigawattsPerCubicInch: return this.GigawattsPerCubicInch;
            case PowerDensityUnits.TerawattsPerCubicInch: return this.TerawattsPerCubicInch;
            case PowerDensityUnits.PicowattsPerCubicFoot: return this.PicowattsPerCubicFoot;
            case PowerDensityUnits.NanowattsPerCubicFoot: return this.NanowattsPerCubicFoot;
            case PowerDensityUnits.MicrowattsPerCubicFoot: return this.MicrowattsPerCubicFoot;
            case PowerDensityUnits.MilliwattsPerCubicFoot: return this.MilliwattsPerCubicFoot;
            case PowerDensityUnits.DeciwattsPerCubicFoot: return this.DeciwattsPerCubicFoot;
            case PowerDensityUnits.DecawattsPerCubicFoot: return this.DecawattsPerCubicFoot;
            case PowerDensityUnits.KilowattsPerCubicFoot: return this.KilowattsPerCubicFoot;
            case PowerDensityUnits.MegawattsPerCubicFoot: return this.MegawattsPerCubicFoot;
            case PowerDensityUnits.GigawattsPerCubicFoot: return this.GigawattsPerCubicFoot;
            case PowerDensityUnits.TerawattsPerCubicFoot: return this.TerawattsPerCubicFoot;
            case PowerDensityUnits.PicowattsPerLiter: return this.PicowattsPerLiter;
            case PowerDensityUnits.NanowattsPerLiter: return this.NanowattsPerLiter;
            case PowerDensityUnits.MicrowattsPerLiter: return this.MicrowattsPerLiter;
            case PowerDensityUnits.MilliwattsPerLiter: return this.MilliwattsPerLiter;
            case PowerDensityUnits.DeciwattsPerLiter: return this.DeciwattsPerLiter;
            case PowerDensityUnits.DecawattsPerLiter: return this.DecawattsPerLiter;
            case PowerDensityUnits.KilowattsPerLiter: return this.KilowattsPerLiter;
            case PowerDensityUnits.MegawattsPerLiter: return this.MegawattsPerLiter;
            case PowerDensityUnits.GigawattsPerLiter: return this.GigawattsPerLiter;
            case PowerDensityUnits.TerawattsPerLiter: return this.TerawattsPerLiter;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: PowerDensityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case PowerDensityUnits.WattsPerCubicMeter: return this.value;
                case PowerDensityUnits.WattsPerCubicInch: return super.internalDivide(this.value, 6.102374409473228e4);
                case PowerDensityUnits.WattsPerCubicFoot: return super.internalDivide(this.value, 3.531466672148859e1);
                case PowerDensityUnits.WattsPerLiter: return super.internalDivide(this.value, 1.0e3);
                case PowerDensityUnits.PicowattsPerCubicMeter: return super.internalDivide(this.value, 1e-12);
                case PowerDensityUnits.NanowattsPerCubicMeter: return super.internalDivide(this.value, 1e-9);
                case PowerDensityUnits.MicrowattsPerCubicMeter: return super.internalDivide(this.value, 0.000001);
                case PowerDensityUnits.MilliwattsPerCubicMeter: return super.internalDivide(this.value, 0.001);
                case PowerDensityUnits.DeciwattsPerCubicMeter: return super.internalDivide(this.value, 0.1);
                case PowerDensityUnits.DecawattsPerCubicMeter: return super.internalDivide(this.value, 10);
                case PowerDensityUnits.KilowattsPerCubicMeter: return super.internalDivide(this.value, 1000);
                case PowerDensityUnits.MegawattsPerCubicMeter: return super.internalDivide(this.value, 1000000);
                case PowerDensityUnits.GigawattsPerCubicMeter: return super.internalDivide(this.value, 1000000000);
                case PowerDensityUnits.TerawattsPerCubicMeter: return super.internalDivide(this.value, 1000000000000);
                case PowerDensityUnits.PicowattsPerCubicInch: {
                    const v3 = super.internalDivide(this.value, 6.102374409473228e4);
                    return super.internalDivide(v3, 1e-12);
                }
                case PowerDensityUnits.NanowattsPerCubicInch: {
                    const v3 = super.internalDivide(this.value, 6.102374409473228e4);
                    return super.internalDivide(v3, 1e-9);
                }
                case PowerDensityUnits.MicrowattsPerCubicInch: {
                    const v3 = super.internalDivide(this.value, 6.102374409473228e4);
                    return super.internalDivide(v3, 0.000001);
                }
                case PowerDensityUnits.MilliwattsPerCubicInch: {
                    const v3 = super.internalDivide(this.value, 6.102374409473228e4);
                    return super.internalDivide(v3, 0.001);
                }
                case PowerDensityUnits.DeciwattsPerCubicInch: {
                    const v3 = super.internalDivide(this.value, 6.102374409473228e4);
                    return super.internalDivide(v3, 0.1);
                }
                case PowerDensityUnits.DecawattsPerCubicInch: {
                    const v3 = super.internalDivide(this.value, 6.102374409473228e4);
                    return super.internalDivide(v3, 10);
                }
                case PowerDensityUnits.KilowattsPerCubicInch: {
                    const v3 = super.internalDivide(this.value, 6.102374409473228e4);
                    return super.internalDivide(v3, 1000);
                }
                case PowerDensityUnits.MegawattsPerCubicInch: {
                    const v3 = super.internalDivide(this.value, 6.102374409473228e4);
                    return super.internalDivide(v3, 1000000);
                }
                case PowerDensityUnits.GigawattsPerCubicInch: {
                    const v3 = super.internalDivide(this.value, 6.102374409473228e4);
                    return super.internalDivide(v3, 1000000000);
                }
                case PowerDensityUnits.TerawattsPerCubicInch: {
                    const v3 = super.internalDivide(this.value, 6.102374409473228e4);
                    return super.internalDivide(v3, 1000000000000);
                }
                case PowerDensityUnits.PicowattsPerCubicFoot: {
                    const v3 = super.internalDivide(this.value, 3.531466672148859e1);
                    return super.internalDivide(v3, 1e-12);
                }
                case PowerDensityUnits.NanowattsPerCubicFoot: {
                    const v3 = super.internalDivide(this.value, 3.531466672148859e1);
                    return super.internalDivide(v3, 1e-9);
                }
                case PowerDensityUnits.MicrowattsPerCubicFoot: {
                    const v3 = super.internalDivide(this.value, 3.531466672148859e1);
                    return super.internalDivide(v3, 0.000001);
                }
                case PowerDensityUnits.MilliwattsPerCubicFoot: {
                    const v3 = super.internalDivide(this.value, 3.531466672148859e1);
                    return super.internalDivide(v3, 0.001);
                }
                case PowerDensityUnits.DeciwattsPerCubicFoot: {
                    const v3 = super.internalDivide(this.value, 3.531466672148859e1);
                    return super.internalDivide(v3, 0.1);
                }
                case PowerDensityUnits.DecawattsPerCubicFoot: {
                    const v3 = super.internalDivide(this.value, 3.531466672148859e1);
                    return super.internalDivide(v3, 10);
                }
                case PowerDensityUnits.KilowattsPerCubicFoot: {
                    const v3 = super.internalDivide(this.value, 3.531466672148859e1);
                    return super.internalDivide(v3, 1000);
                }
                case PowerDensityUnits.MegawattsPerCubicFoot: {
                    const v3 = super.internalDivide(this.value, 3.531466672148859e1);
                    return super.internalDivide(v3, 1000000);
                }
                case PowerDensityUnits.GigawattsPerCubicFoot: {
                    const v3 = super.internalDivide(this.value, 3.531466672148859e1);
                    return super.internalDivide(v3, 1000000000);
                }
                case PowerDensityUnits.TerawattsPerCubicFoot: {
                    const v3 = super.internalDivide(this.value, 3.531466672148859e1);
                    return super.internalDivide(v3, 1000000000000);
                }
                case PowerDensityUnits.PicowattsPerLiter: {
                    const v3 = super.internalDivide(this.value, 1.0e3);
                    return super.internalDivide(v3, 1e-12);
                }
                case PowerDensityUnits.NanowattsPerLiter: {
                    const v3 = super.internalDivide(this.value, 1.0e3);
                    return super.internalDivide(v3, 1e-9);
                }
                case PowerDensityUnits.MicrowattsPerLiter: {
                    const v3 = super.internalDivide(this.value, 1.0e3);
                    return super.internalDivide(v3, 0.000001);
                }
                case PowerDensityUnits.MilliwattsPerLiter: {
                    const v3 = super.internalDivide(this.value, 1.0e3);
                    return super.internalDivide(v3, 0.001);
                }
                case PowerDensityUnits.DeciwattsPerLiter: {
                    const v3 = super.internalDivide(this.value, 1.0e3);
                    return super.internalDivide(v3, 0.1);
                }
                case PowerDensityUnits.DecawattsPerLiter: {
                    const v3 = super.internalDivide(this.value, 1.0e3);
                    return super.internalDivide(v3, 10);
                }
                case PowerDensityUnits.KilowattsPerLiter: {
                    const v3 = super.internalDivide(this.value, 1.0e3);
                    return super.internalDivide(v3, 1000);
                }
                case PowerDensityUnits.MegawattsPerLiter: {
                    const v3 = super.internalDivide(this.value, 1.0e3);
                    return super.internalDivide(v3, 1000000);
                }
                case PowerDensityUnits.GigawattsPerLiter: {
                    const v3 = super.internalDivide(this.value, 1.0e3);
                    return super.internalDivide(v3, 1000000000);
                }
                case PowerDensityUnits.TerawattsPerLiter: {
                    const v3 = super.internalDivide(this.value, 1.0e3);
                    return super.internalDivide(v3, 1000000000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case PowerDensityUnits.WattsPerCubicMeter: return this.value;
            case PowerDensityUnits.WattsPerCubicInch: return this.value / 6.102374409473228e4;
            case PowerDensityUnits.WattsPerCubicFoot: return this.value / 3.531466672148859e1;
            case PowerDensityUnits.WattsPerLiter: return this.value / 1.0e3;
            case PowerDensityUnits.PicowattsPerCubicMeter: return (this.value) / 1e-12;
            case PowerDensityUnits.NanowattsPerCubicMeter: return (this.value) / 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicMeter: return (this.value) / 0.000001;
            case PowerDensityUnits.MilliwattsPerCubicMeter: return (this.value) / 0.001;
            case PowerDensityUnits.DeciwattsPerCubicMeter: return (this.value) / 0.1;
            case PowerDensityUnits.DecawattsPerCubicMeter: return (this.value) / 10;
            case PowerDensityUnits.KilowattsPerCubicMeter: return (this.value) / 1000;
            case PowerDensityUnits.MegawattsPerCubicMeter: return (this.value) / 1000000;
            case PowerDensityUnits.GigawattsPerCubicMeter: return (this.value) / 1000000000;
            case PowerDensityUnits.TerawattsPerCubicMeter: return (this.value) / 1000000000000;
            case PowerDensityUnits.PicowattsPerCubicInch: return (this.value / 6.102374409473228e4) / 1e-12;
            case PowerDensityUnits.NanowattsPerCubicInch: return (this.value / 6.102374409473228e4) / 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicInch: return (this.value / 6.102374409473228e4) / 0.000001;
            case PowerDensityUnits.MilliwattsPerCubicInch: return (this.value / 6.102374409473228e4) / 0.001;
            case PowerDensityUnits.DeciwattsPerCubicInch: return (this.value / 6.102374409473228e4) / 0.1;
            case PowerDensityUnits.DecawattsPerCubicInch: return (this.value / 6.102374409473228e4) / 10;
            case PowerDensityUnits.KilowattsPerCubicInch: return (this.value / 6.102374409473228e4) / 1000;
            case PowerDensityUnits.MegawattsPerCubicInch: return (this.value / 6.102374409473228e4) / 1000000;
            case PowerDensityUnits.GigawattsPerCubicInch: return (this.value / 6.102374409473228e4) / 1000000000;
            case PowerDensityUnits.TerawattsPerCubicInch: return (this.value / 6.102374409473228e4) / 1000000000000;
            case PowerDensityUnits.PicowattsPerCubicFoot: return (this.value / 3.531466672148859e1) / 1e-12;
            case PowerDensityUnits.NanowattsPerCubicFoot: return (this.value / 3.531466672148859e1) / 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicFoot: return (this.value / 3.531466672148859e1) / 0.000001;
            case PowerDensityUnits.MilliwattsPerCubicFoot: return (this.value / 3.531466672148859e1) / 0.001;
            case PowerDensityUnits.DeciwattsPerCubicFoot: return (this.value / 3.531466672148859e1) / 0.1;
            case PowerDensityUnits.DecawattsPerCubicFoot: return (this.value / 3.531466672148859e1) / 10;
            case PowerDensityUnits.KilowattsPerCubicFoot: return (this.value / 3.531466672148859e1) / 1000;
            case PowerDensityUnits.MegawattsPerCubicFoot: return (this.value / 3.531466672148859e1) / 1000000;
            case PowerDensityUnits.GigawattsPerCubicFoot: return (this.value / 3.531466672148859e1) / 1000000000;
            case PowerDensityUnits.TerawattsPerCubicFoot: return (this.value / 3.531466672148859e1) / 1000000000000;
            case PowerDensityUnits.PicowattsPerLiter: return (this.value / 1.0e3) / 1e-12;
            case PowerDensityUnits.NanowattsPerLiter: return (this.value / 1.0e3) / 1e-9;
            case PowerDensityUnits.MicrowattsPerLiter: return (this.value / 1.0e3) / 0.000001;
            case PowerDensityUnits.MilliwattsPerLiter: return (this.value / 1.0e3) / 0.001;
            case PowerDensityUnits.DeciwattsPerLiter: return (this.value / 1.0e3) / 0.1;
            case PowerDensityUnits.DecawattsPerLiter: return (this.value / 1.0e3) / 10;
            case PowerDensityUnits.KilowattsPerLiter: return (this.value / 1.0e3) / 1000;
            case PowerDensityUnits.MegawattsPerLiter: return (this.value / 1.0e3) / 1000000;
            case PowerDensityUnits.GigawattsPerLiter: return (this.value / 1.0e3) / 1000000000;
            case PowerDensityUnits.TerawattsPerLiter: return (this.value / 1.0e3) / 1000000000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: PowerDensityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case PowerDensityUnits.WattsPerCubicMeter: return value;
                case PowerDensityUnits.WattsPerCubicInch: return super.internalMultiply(value, 6.102374409473228e4);
                case PowerDensityUnits.WattsPerCubicFoot: return super.internalMultiply(value, 3.531466672148859e1);
                case PowerDensityUnits.WattsPerLiter: return super.internalMultiply(value, 1.0e3);
                case PowerDensityUnits.PicowattsPerCubicMeter: return super.internalMultiply(value, 1e-12);
                case PowerDensityUnits.NanowattsPerCubicMeter: return super.internalMultiply(value, 1e-9);
                case PowerDensityUnits.MicrowattsPerCubicMeter: return super.internalMultiply(value, 0.000001);
                case PowerDensityUnits.MilliwattsPerCubicMeter: return super.internalMultiply(value, 0.001);
                case PowerDensityUnits.DeciwattsPerCubicMeter: return super.internalMultiply(value, 0.1);
                case PowerDensityUnits.DecawattsPerCubicMeter: return super.internalMultiply(value, 10);
                case PowerDensityUnits.KilowattsPerCubicMeter: return super.internalMultiply(value, 1000);
                case PowerDensityUnits.MegawattsPerCubicMeter: return super.internalMultiply(value, 1000000);
                case PowerDensityUnits.GigawattsPerCubicMeter: return super.internalMultiply(value, 1000000000);
                case PowerDensityUnits.TerawattsPerCubicMeter: return super.internalMultiply(value, 1000000000000);
                case PowerDensityUnits.PicowattsPerCubicInch: {
                    const v3 = super.internalMultiply(value, 6.102374409473228e4);
                    return super.internalMultiply(v3, 1e-12);
                }
                case PowerDensityUnits.NanowattsPerCubicInch: {
                    const v3 = super.internalMultiply(value, 6.102374409473228e4);
                    return super.internalMultiply(v3, 1e-9);
                }
                case PowerDensityUnits.MicrowattsPerCubicInch: {
                    const v3 = super.internalMultiply(value, 6.102374409473228e4);
                    return super.internalMultiply(v3, 0.000001);
                }
                case PowerDensityUnits.MilliwattsPerCubicInch: {
                    const v3 = super.internalMultiply(value, 6.102374409473228e4);
                    return super.internalMultiply(v3, 0.001);
                }
                case PowerDensityUnits.DeciwattsPerCubicInch: {
                    const v3 = super.internalMultiply(value, 6.102374409473228e4);
                    return super.internalMultiply(v3, 0.1);
                }
                case PowerDensityUnits.DecawattsPerCubicInch: {
                    const v3 = super.internalMultiply(value, 6.102374409473228e4);
                    return super.internalMultiply(v3, 10);
                }
                case PowerDensityUnits.KilowattsPerCubicInch: {
                    const v3 = super.internalMultiply(value, 6.102374409473228e4);
                    return super.internalMultiply(v3, 1000);
                }
                case PowerDensityUnits.MegawattsPerCubicInch: {
                    const v3 = super.internalMultiply(value, 6.102374409473228e4);
                    return super.internalMultiply(v3, 1000000);
                }
                case PowerDensityUnits.GigawattsPerCubicInch: {
                    const v3 = super.internalMultiply(value, 6.102374409473228e4);
                    return super.internalMultiply(v3, 1000000000);
                }
                case PowerDensityUnits.TerawattsPerCubicInch: {
                    const v3 = super.internalMultiply(value, 6.102374409473228e4);
                    return super.internalMultiply(v3, 1000000000000);
                }
                case PowerDensityUnits.PicowattsPerCubicFoot: {
                    const v3 = super.internalMultiply(value, 3.531466672148859e1);
                    return super.internalMultiply(v3, 1e-12);
                }
                case PowerDensityUnits.NanowattsPerCubicFoot: {
                    const v3 = super.internalMultiply(value, 3.531466672148859e1);
                    return super.internalMultiply(v3, 1e-9);
                }
                case PowerDensityUnits.MicrowattsPerCubicFoot: {
                    const v3 = super.internalMultiply(value, 3.531466672148859e1);
                    return super.internalMultiply(v3, 0.000001);
                }
                case PowerDensityUnits.MilliwattsPerCubicFoot: {
                    const v3 = super.internalMultiply(value, 3.531466672148859e1);
                    return super.internalMultiply(v3, 0.001);
                }
                case PowerDensityUnits.DeciwattsPerCubicFoot: {
                    const v3 = super.internalMultiply(value, 3.531466672148859e1);
                    return super.internalMultiply(v3, 0.1);
                }
                case PowerDensityUnits.DecawattsPerCubicFoot: {
                    const v3 = super.internalMultiply(value, 3.531466672148859e1);
                    return super.internalMultiply(v3, 10);
                }
                case PowerDensityUnits.KilowattsPerCubicFoot: {
                    const v3 = super.internalMultiply(value, 3.531466672148859e1);
                    return super.internalMultiply(v3, 1000);
                }
                case PowerDensityUnits.MegawattsPerCubicFoot: {
                    const v3 = super.internalMultiply(value, 3.531466672148859e1);
                    return super.internalMultiply(v3, 1000000);
                }
                case PowerDensityUnits.GigawattsPerCubicFoot: {
                    const v3 = super.internalMultiply(value, 3.531466672148859e1);
                    return super.internalMultiply(v3, 1000000000);
                }
                case PowerDensityUnits.TerawattsPerCubicFoot: {
                    const v3 = super.internalMultiply(value, 3.531466672148859e1);
                    return super.internalMultiply(v3, 1000000000000);
                }
                case PowerDensityUnits.PicowattsPerLiter: {
                    const v3 = super.internalMultiply(value, 1.0e3);
                    return super.internalMultiply(v3, 1e-12);
                }
                case PowerDensityUnits.NanowattsPerLiter: {
                    const v3 = super.internalMultiply(value, 1.0e3);
                    return super.internalMultiply(v3, 1e-9);
                }
                case PowerDensityUnits.MicrowattsPerLiter: {
                    const v3 = super.internalMultiply(value, 1.0e3);
                    return super.internalMultiply(v3, 0.000001);
                }
                case PowerDensityUnits.MilliwattsPerLiter: {
                    const v3 = super.internalMultiply(value, 1.0e3);
                    return super.internalMultiply(v3, 0.001);
                }
                case PowerDensityUnits.DeciwattsPerLiter: {
                    const v3 = super.internalMultiply(value, 1.0e3);
                    return super.internalMultiply(v3, 0.1);
                }
                case PowerDensityUnits.DecawattsPerLiter: {
                    const v3 = super.internalMultiply(value, 1.0e3);
                    return super.internalMultiply(v3, 10);
                }
                case PowerDensityUnits.KilowattsPerLiter: {
                    const v3 = super.internalMultiply(value, 1.0e3);
                    return super.internalMultiply(v3, 1000);
                }
                case PowerDensityUnits.MegawattsPerLiter: {
                    const v3 = super.internalMultiply(value, 1.0e3);
                    return super.internalMultiply(v3, 1000000);
                }
                case PowerDensityUnits.GigawattsPerLiter: {
                    const v3 = super.internalMultiply(value, 1.0e3);
                    return super.internalMultiply(v3, 1000000000);
                }
                case PowerDensityUnits.TerawattsPerLiter: {
                    const v3 = super.internalMultiply(value, 1.0e3);
                    return super.internalMultiply(v3, 1000000000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case PowerDensityUnits.WattsPerCubicMeter: return value;
            case PowerDensityUnits.WattsPerCubicInch: return value * 6.102374409473228e4;
            case PowerDensityUnits.WattsPerCubicFoot: return value * 3.531466672148859e1;
            case PowerDensityUnits.WattsPerLiter: return value * 1.0e3;
            case PowerDensityUnits.PicowattsPerCubicMeter: return (value) * 1e-12;
            case PowerDensityUnits.NanowattsPerCubicMeter: return (value) * 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicMeter: return (value) * 0.000001;
            case PowerDensityUnits.MilliwattsPerCubicMeter: return (value) * 0.001;
            case PowerDensityUnits.DeciwattsPerCubicMeter: return (value) * 0.1;
            case PowerDensityUnits.DecawattsPerCubicMeter: return (value) * 10;
            case PowerDensityUnits.KilowattsPerCubicMeter: return (value) * 1000;
            case PowerDensityUnits.MegawattsPerCubicMeter: return (value) * 1000000;
            case PowerDensityUnits.GigawattsPerCubicMeter: return (value) * 1000000000;
            case PowerDensityUnits.TerawattsPerCubicMeter: return (value) * 1000000000000;
            case PowerDensityUnits.PicowattsPerCubicInch: return (value * 6.102374409473228e4) * 1e-12;
            case PowerDensityUnits.NanowattsPerCubicInch: return (value * 6.102374409473228e4) * 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicInch: return (value * 6.102374409473228e4) * 0.000001;
            case PowerDensityUnits.MilliwattsPerCubicInch: return (value * 6.102374409473228e4) * 0.001;
            case PowerDensityUnits.DeciwattsPerCubicInch: return (value * 6.102374409473228e4) * 0.1;
            case PowerDensityUnits.DecawattsPerCubicInch: return (value * 6.102374409473228e4) * 10;
            case PowerDensityUnits.KilowattsPerCubicInch: return (value * 6.102374409473228e4) * 1000;
            case PowerDensityUnits.MegawattsPerCubicInch: return (value * 6.102374409473228e4) * 1000000;
            case PowerDensityUnits.GigawattsPerCubicInch: return (value * 6.102374409473228e4) * 1000000000;
            case PowerDensityUnits.TerawattsPerCubicInch: return (value * 6.102374409473228e4) * 1000000000000;
            case PowerDensityUnits.PicowattsPerCubicFoot: return (value * 3.531466672148859e1) * 1e-12;
            case PowerDensityUnits.NanowattsPerCubicFoot: return (value * 3.531466672148859e1) * 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicFoot: return (value * 3.531466672148859e1) * 0.000001;
            case PowerDensityUnits.MilliwattsPerCubicFoot: return (value * 3.531466672148859e1) * 0.001;
            case PowerDensityUnits.DeciwattsPerCubicFoot: return (value * 3.531466672148859e1) * 0.1;
            case PowerDensityUnits.DecawattsPerCubicFoot: return (value * 3.531466672148859e1) * 10;
            case PowerDensityUnits.KilowattsPerCubicFoot: return (value * 3.531466672148859e1) * 1000;
            case PowerDensityUnits.MegawattsPerCubicFoot: return (value * 3.531466672148859e1) * 1000000;
            case PowerDensityUnits.GigawattsPerCubicFoot: return (value * 3.531466672148859e1) * 1000000000;
            case PowerDensityUnits.TerawattsPerCubicFoot: return (value * 3.531466672148859e1) * 1000000000000;
            case PowerDensityUnits.PicowattsPerLiter: return (value * 1.0e3) * 1e-12;
            case PowerDensityUnits.NanowattsPerLiter: return (value * 1.0e3) * 1e-9;
            case PowerDensityUnits.MicrowattsPerLiter: return (value * 1.0e3) * 0.000001;
            case PowerDensityUnits.MilliwattsPerLiter: return (value * 1.0e3) * 0.001;
            case PowerDensityUnits.DeciwattsPerLiter: return (value * 1.0e3) * 0.1;
            case PowerDensityUnits.DecawattsPerLiter: return (value * 1.0e3) * 10;
            case PowerDensityUnits.KilowattsPerLiter: return (value * 1.0e3) * 1000;
            case PowerDensityUnits.MegawattsPerLiter: return (value * 1.0e3) * 1000000;
            case PowerDensityUnits.GigawattsPerLiter: return (value * 1.0e3) * 1000000000;
            case PowerDensityUnits.TerawattsPerLiter: return (value * 1.0e3) * 1000000000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the PowerDensity to string.
     * Note! the default format for PowerDensity is WattsPerCubicMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the PowerDensity.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the PowerDensity.
     */
    public toString(unit: PowerDensityUnits = PowerDensityUnits.WattsPerCubicMeter, fractionalDigits?: number): string {

        switch (unit) {
            
            case PowerDensityUnits.WattsPerCubicMeter:
                return super.truncateFractionDigits(this.WattsPerCubicMeter, fractionalDigits) + ` W/m³`;
            case PowerDensityUnits.WattsPerCubicInch:
                return super.truncateFractionDigits(this.WattsPerCubicInch, fractionalDigits) + ` W/in³`;
            case PowerDensityUnits.WattsPerCubicFoot:
                return super.truncateFractionDigits(this.WattsPerCubicFoot, fractionalDigits) + ` W/ft³`;
            case PowerDensityUnits.WattsPerLiter:
                return super.truncateFractionDigits(this.WattsPerLiter, fractionalDigits) + ` W/l`;
            case PowerDensityUnits.PicowattsPerCubicMeter:
                return super.truncateFractionDigits(this.PicowattsPerCubicMeter, fractionalDigits) + ` pW/m³`;
            case PowerDensityUnits.NanowattsPerCubicMeter:
                return super.truncateFractionDigits(this.NanowattsPerCubicMeter, fractionalDigits) + ` nW/m³`;
            case PowerDensityUnits.MicrowattsPerCubicMeter:
                return super.truncateFractionDigits(this.MicrowattsPerCubicMeter, fractionalDigits) + ` μW/m³`;
            case PowerDensityUnits.MilliwattsPerCubicMeter:
                return super.truncateFractionDigits(this.MilliwattsPerCubicMeter, fractionalDigits) + ` mW/m³`;
            case PowerDensityUnits.DeciwattsPerCubicMeter:
                return super.truncateFractionDigits(this.DeciwattsPerCubicMeter, fractionalDigits) + ` dW/m³`;
            case PowerDensityUnits.DecawattsPerCubicMeter:
                return super.truncateFractionDigits(this.DecawattsPerCubicMeter, fractionalDigits) + ` daW/m³`;
            case PowerDensityUnits.KilowattsPerCubicMeter:
                return super.truncateFractionDigits(this.KilowattsPerCubicMeter, fractionalDigits) + ` kW/m³`;
            case PowerDensityUnits.MegawattsPerCubicMeter:
                return super.truncateFractionDigits(this.MegawattsPerCubicMeter, fractionalDigits) + ` MW/m³`;
            case PowerDensityUnits.GigawattsPerCubicMeter:
                return super.truncateFractionDigits(this.GigawattsPerCubicMeter, fractionalDigits) + ` GW/m³`;
            case PowerDensityUnits.TerawattsPerCubicMeter:
                return super.truncateFractionDigits(this.TerawattsPerCubicMeter, fractionalDigits) + ` TW/m³`;
            case PowerDensityUnits.PicowattsPerCubicInch:
                return super.truncateFractionDigits(this.PicowattsPerCubicInch, fractionalDigits) + ` pW/in³`;
            case PowerDensityUnits.NanowattsPerCubicInch:
                return super.truncateFractionDigits(this.NanowattsPerCubicInch, fractionalDigits) + ` nW/in³`;
            case PowerDensityUnits.MicrowattsPerCubicInch:
                return super.truncateFractionDigits(this.MicrowattsPerCubicInch, fractionalDigits) + ` μW/in³`;
            case PowerDensityUnits.MilliwattsPerCubicInch:
                return super.truncateFractionDigits(this.MilliwattsPerCubicInch, fractionalDigits) + ` mW/in³`;
            case PowerDensityUnits.DeciwattsPerCubicInch:
                return super.truncateFractionDigits(this.DeciwattsPerCubicInch, fractionalDigits) + ` dW/in³`;
            case PowerDensityUnits.DecawattsPerCubicInch:
                return super.truncateFractionDigits(this.DecawattsPerCubicInch, fractionalDigits) + ` daW/in³`;
            case PowerDensityUnits.KilowattsPerCubicInch:
                return super.truncateFractionDigits(this.KilowattsPerCubicInch, fractionalDigits) + ` kW/in³`;
            case PowerDensityUnits.MegawattsPerCubicInch:
                return super.truncateFractionDigits(this.MegawattsPerCubicInch, fractionalDigits) + ` MW/in³`;
            case PowerDensityUnits.GigawattsPerCubicInch:
                return super.truncateFractionDigits(this.GigawattsPerCubicInch, fractionalDigits) + ` GW/in³`;
            case PowerDensityUnits.TerawattsPerCubicInch:
                return super.truncateFractionDigits(this.TerawattsPerCubicInch, fractionalDigits) + ` TW/in³`;
            case PowerDensityUnits.PicowattsPerCubicFoot:
                return super.truncateFractionDigits(this.PicowattsPerCubicFoot, fractionalDigits) + ` pW/ft³`;
            case PowerDensityUnits.NanowattsPerCubicFoot:
                return super.truncateFractionDigits(this.NanowattsPerCubicFoot, fractionalDigits) + ` nW/ft³`;
            case PowerDensityUnits.MicrowattsPerCubicFoot:
                return super.truncateFractionDigits(this.MicrowattsPerCubicFoot, fractionalDigits) + ` μW/ft³`;
            case PowerDensityUnits.MilliwattsPerCubicFoot:
                return super.truncateFractionDigits(this.MilliwattsPerCubicFoot, fractionalDigits) + ` mW/ft³`;
            case PowerDensityUnits.DeciwattsPerCubicFoot:
                return super.truncateFractionDigits(this.DeciwattsPerCubicFoot, fractionalDigits) + ` dW/ft³`;
            case PowerDensityUnits.DecawattsPerCubicFoot:
                return super.truncateFractionDigits(this.DecawattsPerCubicFoot, fractionalDigits) + ` daW/ft³`;
            case PowerDensityUnits.KilowattsPerCubicFoot:
                return super.truncateFractionDigits(this.KilowattsPerCubicFoot, fractionalDigits) + ` kW/ft³`;
            case PowerDensityUnits.MegawattsPerCubicFoot:
                return super.truncateFractionDigits(this.MegawattsPerCubicFoot, fractionalDigits) + ` MW/ft³`;
            case PowerDensityUnits.GigawattsPerCubicFoot:
                return super.truncateFractionDigits(this.GigawattsPerCubicFoot, fractionalDigits) + ` GW/ft³`;
            case PowerDensityUnits.TerawattsPerCubicFoot:
                return super.truncateFractionDigits(this.TerawattsPerCubicFoot, fractionalDigits) + ` TW/ft³`;
            case PowerDensityUnits.PicowattsPerLiter:
                return super.truncateFractionDigits(this.PicowattsPerLiter, fractionalDigits) + ` pW/l`;
            case PowerDensityUnits.NanowattsPerLiter:
                return super.truncateFractionDigits(this.NanowattsPerLiter, fractionalDigits) + ` nW/l`;
            case PowerDensityUnits.MicrowattsPerLiter:
                return super.truncateFractionDigits(this.MicrowattsPerLiter, fractionalDigits) + ` μW/l`;
            case PowerDensityUnits.MilliwattsPerLiter:
                return super.truncateFractionDigits(this.MilliwattsPerLiter, fractionalDigits) + ` mW/l`;
            case PowerDensityUnits.DeciwattsPerLiter:
                return super.truncateFractionDigits(this.DeciwattsPerLiter, fractionalDigits) + ` dW/l`;
            case PowerDensityUnits.DecawattsPerLiter:
                return super.truncateFractionDigits(this.DecawattsPerLiter, fractionalDigits) + ` daW/l`;
            case PowerDensityUnits.KilowattsPerLiter:
                return super.truncateFractionDigits(this.KilowattsPerLiter, fractionalDigits) + ` kW/l`;
            case PowerDensityUnits.MegawattsPerLiter:
                return super.truncateFractionDigits(this.MegawattsPerLiter, fractionalDigits) + ` MW/l`;
            case PowerDensityUnits.GigawattsPerLiter:
                return super.truncateFractionDigits(this.GigawattsPerLiter, fractionalDigits) + ` GW/l`;
            case PowerDensityUnits.TerawattsPerLiter:
                return super.truncateFractionDigits(this.TerawattsPerLiter, fractionalDigits) + ` TW/l`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get PowerDensity unit abbreviation.
     * Note! the default abbreviation for PowerDensity is WattsPerCubicMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the PowerDensity.
     * @returns The abbreviation string of PowerDensity.
     */
    public getUnitAbbreviation(unitAbbreviation: PowerDensityUnits = PowerDensityUnits.WattsPerCubicMeter): string {

        switch (unitAbbreviation) {
            
            case PowerDensityUnits.WattsPerCubicMeter:
                return `W/m³`;
            case PowerDensityUnits.WattsPerCubicInch:
                return `W/in³`;
            case PowerDensityUnits.WattsPerCubicFoot:
                return `W/ft³`;
            case PowerDensityUnits.WattsPerLiter:
                return `W/l`;
            case PowerDensityUnits.PicowattsPerCubicMeter:
                return `pW/m³`;
            case PowerDensityUnits.NanowattsPerCubicMeter:
                return `nW/m³`;
            case PowerDensityUnits.MicrowattsPerCubicMeter:
                return `μW/m³`;
            case PowerDensityUnits.MilliwattsPerCubicMeter:
                return `mW/m³`;
            case PowerDensityUnits.DeciwattsPerCubicMeter:
                return `dW/m³`;
            case PowerDensityUnits.DecawattsPerCubicMeter:
                return `daW/m³`;
            case PowerDensityUnits.KilowattsPerCubicMeter:
                return `kW/m³`;
            case PowerDensityUnits.MegawattsPerCubicMeter:
                return `MW/m³`;
            case PowerDensityUnits.GigawattsPerCubicMeter:
                return `GW/m³`;
            case PowerDensityUnits.TerawattsPerCubicMeter:
                return `TW/m³`;
            case PowerDensityUnits.PicowattsPerCubicInch:
                return `pW/in³`;
            case PowerDensityUnits.NanowattsPerCubicInch:
                return `nW/in³`;
            case PowerDensityUnits.MicrowattsPerCubicInch:
                return `μW/in³`;
            case PowerDensityUnits.MilliwattsPerCubicInch:
                return `mW/in³`;
            case PowerDensityUnits.DeciwattsPerCubicInch:
                return `dW/in³`;
            case PowerDensityUnits.DecawattsPerCubicInch:
                return `daW/in³`;
            case PowerDensityUnits.KilowattsPerCubicInch:
                return `kW/in³`;
            case PowerDensityUnits.MegawattsPerCubicInch:
                return `MW/in³`;
            case PowerDensityUnits.GigawattsPerCubicInch:
                return `GW/in³`;
            case PowerDensityUnits.TerawattsPerCubicInch:
                return `TW/in³`;
            case PowerDensityUnits.PicowattsPerCubicFoot:
                return `pW/ft³`;
            case PowerDensityUnits.NanowattsPerCubicFoot:
                return `nW/ft³`;
            case PowerDensityUnits.MicrowattsPerCubicFoot:
                return `μW/ft³`;
            case PowerDensityUnits.MilliwattsPerCubicFoot:
                return `mW/ft³`;
            case PowerDensityUnits.DeciwattsPerCubicFoot:
                return `dW/ft³`;
            case PowerDensityUnits.DecawattsPerCubicFoot:
                return `daW/ft³`;
            case PowerDensityUnits.KilowattsPerCubicFoot:
                return `kW/ft³`;
            case PowerDensityUnits.MegawattsPerCubicFoot:
                return `MW/ft³`;
            case PowerDensityUnits.GigawattsPerCubicFoot:
                return `GW/ft³`;
            case PowerDensityUnits.TerawattsPerCubicFoot:
                return `TW/ft³`;
            case PowerDensityUnits.PicowattsPerLiter:
                return `pW/l`;
            case PowerDensityUnits.NanowattsPerLiter:
                return `nW/l`;
            case PowerDensityUnits.MicrowattsPerLiter:
                return `μW/l`;
            case PowerDensityUnits.MilliwattsPerLiter:
                return `mW/l`;
            case PowerDensityUnits.DeciwattsPerLiter:
                return `dW/l`;
            case PowerDensityUnits.DecawattsPerLiter:
                return `daW/l`;
            case PowerDensityUnits.KilowattsPerLiter:
                return `kW/l`;
            case PowerDensityUnits.MegawattsPerLiter:
                return `MW/l`;
            case PowerDensityUnits.GigawattsPerLiter:
                return `GW/l`;
            case PowerDensityUnits.TerawattsPerLiter:
                return `TW/l`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given PowerDensity are equals to the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns True if the given PowerDensity are equal to the current PowerDensity.
     */
    public equals(powerDensity: PowerDensity): boolean {
        return super.internalEquals(this.value, powerDensity.BaseValue);
    }

    /**
     * Compare the given PowerDensity against the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns 0 if they are equal, -1 if the current PowerDensity is less then other, 1 if the current PowerDensity is greater then other.
     */
    public compareTo(powerDensity: PowerDensity): number {
        return super.internalCompareTo(this.value, powerDensity.BaseValue);
    }

    /**
     * Add the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    public add(powerDensity: PowerDensity): PowerDensity {
        return new PowerDensity(super.internalAdd(this.value, powerDensity.BaseValue))
    }

    /**
     * Subtract the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    public subtract(powerDensity: PowerDensity): PowerDensity {
        return new PowerDensity(super.internalSubtract(this.value, powerDensity.BaseValue))
    }

    /**
     * Multiply the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    public multiply(powerDensity: PowerDensity): PowerDensity {
        return new PowerDensity(super.internalMultiply(this.value, powerDensity.BaseValue))
    }

    /**
     * Divide the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    public divide(powerDensity: PowerDensity): PowerDensity {
        return new PowerDensity(super.internalDivide(this.value, powerDensity.BaseValue))
    }

    /**
     * Modulo the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    public modulo(powerDensity: PowerDensity): PowerDensity {
        return new PowerDensity(super.internalModulo(this.value, powerDensity.BaseValue))
    }

    /**
     * Pow the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    public pow(powerDensity: PowerDensity): PowerDensity {
        return new PowerDensity(super.internalPow(this.value, powerDensity.BaseValue))
    }
}
