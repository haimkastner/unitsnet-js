/** LinearPowerDensityUnits enumeration */
export enum LinearPowerDensityUnits {
    /** */
    WattsPerMeter,
    /** */
    WattsPerCentimeter,
    /** */
    WattsPerMillimeter,
    /** */
    WattsPerInch,
    /** */
    WattsPerFoot,
    /** */
    MilliwattsPerMeter,
    /** */
    KilowattsPerMeter,
    /** */
    MegawattsPerMeter,
    /** */
    GigawattsPerMeter,
    /** */
    MilliwattsPerCentimeter,
    /** */
    KilowattsPerCentimeter,
    /** */
    MegawattsPerCentimeter,
    /** */
    GigawattsPerCentimeter,
    /** */
    MilliwattsPerMillimeter,
    /** */
    KilowattsPerMillimeter,
    /** */
    MegawattsPerMillimeter,
    /** */
    GigawattsPerMillimeter,
    /** */
    MilliwattsPerInch,
    /** */
    KilowattsPerInch,
    /** */
    MegawattsPerInch,
    /** */
    GigawattsPerInch,
    /** */
    MilliwattsPerFoot,
    /** */
    KilowattsPerFoot,
    /** */
    MegawattsPerFoot,
    /** */
    GigawattsPerFoot
}

/** The Linear Power Density of a substance is its power per unit length.  The term linear density is most often used when describing the characteristics of one-dimensional objects, although linear density can also be used to describe the density of a three-dimensional quantity along one particular dimension. */
export class LinearPowerDensity {
    private value: number;
    private wattspermeterLazy: number | null = null;
    private wattspercentimeterLazy: number | null = null;
    private wattspermillimeterLazy: number | null = null;
    private wattsperinchLazy: number | null = null;
    private wattsperfootLazy: number | null = null;
    private milliwattspermeterLazy: number | null = null;
    private kilowattspermeterLazy: number | null = null;
    private megawattspermeterLazy: number | null = null;
    private gigawattspermeterLazy: number | null = null;
    private milliwattspercentimeterLazy: number | null = null;
    private kilowattspercentimeterLazy: number | null = null;
    private megawattspercentimeterLazy: number | null = null;
    private gigawattspercentimeterLazy: number | null = null;
    private milliwattspermillimeterLazy: number | null = null;
    private kilowattspermillimeterLazy: number | null = null;
    private megawattspermillimeterLazy: number | null = null;
    private gigawattspermillimeterLazy: number | null = null;
    private milliwattsperinchLazy: number | null = null;
    private kilowattsperinchLazy: number | null = null;
    private megawattsperinchLazy: number | null = null;
    private gigawattsperinchLazy: number | null = null;
    private milliwattsperfootLazy: number | null = null;
    private kilowattsperfootLazy: number | null = null;
    private megawattsperfootLazy: number | null = null;
    private gigawattsperfootLazy: number | null = null;

    /**
     * Create a new LinearPowerDensity.
     * @param value The value.
     * @param fromUnit The ‘LinearPowerDensity’ unit to create from.
     * The default unit is WattsPerMeter
     */
    public constructor(value: number, fromUnit: LinearPowerDensityUnits = LinearPowerDensityUnits.WattsPerMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of LinearPowerDensity is WattsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get WattsPerMeter(): number {
        if(this.wattspermeterLazy !== null){
            return this.wattspermeterLazy;
        }
        return this.wattspermeterLazy = this.convertFromBase(LinearPowerDensityUnits.WattsPerMeter);
    }

    /** */
    public get WattsPerCentimeter(): number {
        if(this.wattspercentimeterLazy !== null){
            return this.wattspercentimeterLazy;
        }
        return this.wattspercentimeterLazy = this.convertFromBase(LinearPowerDensityUnits.WattsPerCentimeter);
    }

    /** */
    public get WattsPerMillimeter(): number {
        if(this.wattspermillimeterLazy !== null){
            return this.wattspermillimeterLazy;
        }
        return this.wattspermillimeterLazy = this.convertFromBase(LinearPowerDensityUnits.WattsPerMillimeter);
    }

    /** */
    public get WattsPerInch(): number {
        if(this.wattsperinchLazy !== null){
            return this.wattsperinchLazy;
        }
        return this.wattsperinchLazy = this.convertFromBase(LinearPowerDensityUnits.WattsPerInch);
    }

    /** */
    public get WattsPerFoot(): number {
        if(this.wattsperfootLazy !== null){
            return this.wattsperfootLazy;
        }
        return this.wattsperfootLazy = this.convertFromBase(LinearPowerDensityUnits.WattsPerFoot);
    }

    /** */
    public get MilliwattsPerMeter(): number {
        if(this.milliwattspermeterLazy !== null){
            return this.milliwattspermeterLazy;
        }
        return this.milliwattspermeterLazy = this.convertFromBase(LinearPowerDensityUnits.MilliwattsPerMeter);
    }

    /** */
    public get KilowattsPerMeter(): number {
        if(this.kilowattspermeterLazy !== null){
            return this.kilowattspermeterLazy;
        }
        return this.kilowattspermeterLazy = this.convertFromBase(LinearPowerDensityUnits.KilowattsPerMeter);
    }

    /** */
    public get MegawattsPerMeter(): number {
        if(this.megawattspermeterLazy !== null){
            return this.megawattspermeterLazy;
        }
        return this.megawattspermeterLazy = this.convertFromBase(LinearPowerDensityUnits.MegawattsPerMeter);
    }

    /** */
    public get GigawattsPerMeter(): number {
        if(this.gigawattspermeterLazy !== null){
            return this.gigawattspermeterLazy;
        }
        return this.gigawattspermeterLazy = this.convertFromBase(LinearPowerDensityUnits.GigawattsPerMeter);
    }

    /** */
    public get MilliwattsPerCentimeter(): number {
        if(this.milliwattspercentimeterLazy !== null){
            return this.milliwattspercentimeterLazy;
        }
        return this.milliwattspercentimeterLazy = this.convertFromBase(LinearPowerDensityUnits.MilliwattsPerCentimeter);
    }

    /** */
    public get KilowattsPerCentimeter(): number {
        if(this.kilowattspercentimeterLazy !== null){
            return this.kilowattspercentimeterLazy;
        }
        return this.kilowattspercentimeterLazy = this.convertFromBase(LinearPowerDensityUnits.KilowattsPerCentimeter);
    }

    /** */
    public get MegawattsPerCentimeter(): number {
        if(this.megawattspercentimeterLazy !== null){
            return this.megawattspercentimeterLazy;
        }
        return this.megawattspercentimeterLazy = this.convertFromBase(LinearPowerDensityUnits.MegawattsPerCentimeter);
    }

    /** */
    public get GigawattsPerCentimeter(): number {
        if(this.gigawattspercentimeterLazy !== null){
            return this.gigawattspercentimeterLazy;
        }
        return this.gigawattspercentimeterLazy = this.convertFromBase(LinearPowerDensityUnits.GigawattsPerCentimeter);
    }

    /** */
    public get MilliwattsPerMillimeter(): number {
        if(this.milliwattspermillimeterLazy !== null){
            return this.milliwattspermillimeterLazy;
        }
        return this.milliwattspermillimeterLazy = this.convertFromBase(LinearPowerDensityUnits.MilliwattsPerMillimeter);
    }

    /** */
    public get KilowattsPerMillimeter(): number {
        if(this.kilowattspermillimeterLazy !== null){
            return this.kilowattspermillimeterLazy;
        }
        return this.kilowattspermillimeterLazy = this.convertFromBase(LinearPowerDensityUnits.KilowattsPerMillimeter);
    }

    /** */
    public get MegawattsPerMillimeter(): number {
        if(this.megawattspermillimeterLazy !== null){
            return this.megawattspermillimeterLazy;
        }
        return this.megawattspermillimeterLazy = this.convertFromBase(LinearPowerDensityUnits.MegawattsPerMillimeter);
    }

    /** */
    public get GigawattsPerMillimeter(): number {
        if(this.gigawattspermillimeterLazy !== null){
            return this.gigawattspermillimeterLazy;
        }
        return this.gigawattspermillimeterLazy = this.convertFromBase(LinearPowerDensityUnits.GigawattsPerMillimeter);
    }

    /** */
    public get MilliwattsPerInch(): number {
        if(this.milliwattsperinchLazy !== null){
            return this.milliwattsperinchLazy;
        }
        return this.milliwattsperinchLazy = this.convertFromBase(LinearPowerDensityUnits.MilliwattsPerInch);
    }

    /** */
    public get KilowattsPerInch(): number {
        if(this.kilowattsperinchLazy !== null){
            return this.kilowattsperinchLazy;
        }
        return this.kilowattsperinchLazy = this.convertFromBase(LinearPowerDensityUnits.KilowattsPerInch);
    }

    /** */
    public get MegawattsPerInch(): number {
        if(this.megawattsperinchLazy !== null){
            return this.megawattsperinchLazy;
        }
        return this.megawattsperinchLazy = this.convertFromBase(LinearPowerDensityUnits.MegawattsPerInch);
    }

    /** */
    public get GigawattsPerInch(): number {
        if(this.gigawattsperinchLazy !== null){
            return this.gigawattsperinchLazy;
        }
        return this.gigawattsperinchLazy = this.convertFromBase(LinearPowerDensityUnits.GigawattsPerInch);
    }

    /** */
    public get MilliwattsPerFoot(): number {
        if(this.milliwattsperfootLazy !== null){
            return this.milliwattsperfootLazy;
        }
        return this.milliwattsperfootLazy = this.convertFromBase(LinearPowerDensityUnits.MilliwattsPerFoot);
    }

    /** */
    public get KilowattsPerFoot(): number {
        if(this.kilowattsperfootLazy !== null){
            return this.kilowattsperfootLazy;
        }
        return this.kilowattsperfootLazy = this.convertFromBase(LinearPowerDensityUnits.KilowattsPerFoot);
    }

    /** */
    public get MegawattsPerFoot(): number {
        if(this.megawattsperfootLazy !== null){
            return this.megawattsperfootLazy;
        }
        return this.megawattsperfootLazy = this.convertFromBase(LinearPowerDensityUnits.MegawattsPerFoot);
    }

    /** */
    public get GigawattsPerFoot(): number {
        if(this.gigawattsperfootLazy !== null){
            return this.gigawattsperfootLazy;
        }
        return this.gigawattsperfootLazy = this.convertFromBase(LinearPowerDensityUnits.GigawattsPerFoot);
    }

    /**
     * Create a new LinearPowerDensity instance from a WattsPerMeter
     *
     * @param value The unit as WattsPerMeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromWattsPerMeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.WattsPerMeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a WattsPerCentimeter
     *
     * @param value The unit as WattsPerCentimeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromWattsPerCentimeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.WattsPerCentimeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a WattsPerMillimeter
     *
     * @param value The unit as WattsPerMillimeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromWattsPerMillimeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.WattsPerMillimeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a WattsPerInch
     *
     * @param value The unit as WattsPerInch to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromWattsPerInch(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.WattsPerInch);
    }

    /**
     * Create a new LinearPowerDensity instance from a WattsPerFoot
     *
     * @param value The unit as WattsPerFoot to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromWattsPerFoot(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.WattsPerFoot);
    }

    /**
     * Create a new LinearPowerDensity instance from a MilliwattsPerMeter
     *
     * @param value The unit as MilliwattsPerMeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromMilliwattsPerMeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.MilliwattsPerMeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a KilowattsPerMeter
     *
     * @param value The unit as KilowattsPerMeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromKilowattsPerMeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.KilowattsPerMeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a MegawattsPerMeter
     *
     * @param value The unit as MegawattsPerMeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromMegawattsPerMeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.MegawattsPerMeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a GigawattsPerMeter
     *
     * @param value The unit as GigawattsPerMeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromGigawattsPerMeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.GigawattsPerMeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a MilliwattsPerCentimeter
     *
     * @param value The unit as MilliwattsPerCentimeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromMilliwattsPerCentimeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.MilliwattsPerCentimeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a KilowattsPerCentimeter
     *
     * @param value The unit as KilowattsPerCentimeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromKilowattsPerCentimeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.KilowattsPerCentimeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a MegawattsPerCentimeter
     *
     * @param value The unit as MegawattsPerCentimeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromMegawattsPerCentimeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.MegawattsPerCentimeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a GigawattsPerCentimeter
     *
     * @param value The unit as GigawattsPerCentimeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromGigawattsPerCentimeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.GigawattsPerCentimeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a MilliwattsPerMillimeter
     *
     * @param value The unit as MilliwattsPerMillimeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromMilliwattsPerMillimeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.MilliwattsPerMillimeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a KilowattsPerMillimeter
     *
     * @param value The unit as KilowattsPerMillimeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromKilowattsPerMillimeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.KilowattsPerMillimeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a MegawattsPerMillimeter
     *
     * @param value The unit as MegawattsPerMillimeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromMegawattsPerMillimeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.MegawattsPerMillimeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a GigawattsPerMillimeter
     *
     * @param value The unit as GigawattsPerMillimeter to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromGigawattsPerMillimeter(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.GigawattsPerMillimeter);
    }

    /**
     * Create a new LinearPowerDensity instance from a MilliwattsPerInch
     *
     * @param value The unit as MilliwattsPerInch to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromMilliwattsPerInch(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.MilliwattsPerInch);
    }

    /**
     * Create a new LinearPowerDensity instance from a KilowattsPerInch
     *
     * @param value The unit as KilowattsPerInch to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromKilowattsPerInch(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.KilowattsPerInch);
    }

    /**
     * Create a new LinearPowerDensity instance from a MegawattsPerInch
     *
     * @param value The unit as MegawattsPerInch to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromMegawattsPerInch(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.MegawattsPerInch);
    }

    /**
     * Create a new LinearPowerDensity instance from a GigawattsPerInch
     *
     * @param value The unit as GigawattsPerInch to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromGigawattsPerInch(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.GigawattsPerInch);
    }

    /**
     * Create a new LinearPowerDensity instance from a MilliwattsPerFoot
     *
     * @param value The unit as MilliwattsPerFoot to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromMilliwattsPerFoot(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.MilliwattsPerFoot);
    }

    /**
     * Create a new LinearPowerDensity instance from a KilowattsPerFoot
     *
     * @param value The unit as KilowattsPerFoot to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromKilowattsPerFoot(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.KilowattsPerFoot);
    }

    /**
     * Create a new LinearPowerDensity instance from a MegawattsPerFoot
     *
     * @param value The unit as MegawattsPerFoot to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromMegawattsPerFoot(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.MegawattsPerFoot);
    }

    /**
     * Create a new LinearPowerDensity instance from a GigawattsPerFoot
     *
     * @param value The unit as GigawattsPerFoot to create a new LinearPowerDensity from.
     * @returns The new LinearPowerDensity instance.
     */
    public static FromGigawattsPerFoot(value: number): LinearPowerDensity {
        return new LinearPowerDensity(value, LinearPowerDensityUnits.GigawattsPerFoot);
    }

    /**
     * Convert LinearPowerDensity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: LinearPowerDensityUnits): number {
        switch (toUnit) {
            case LinearPowerDensityUnits.WattsPerMeter: return this.WattsPerMeter;
            case LinearPowerDensityUnits.WattsPerCentimeter: return this.WattsPerCentimeter;
            case LinearPowerDensityUnits.WattsPerMillimeter: return this.WattsPerMillimeter;
            case LinearPowerDensityUnits.WattsPerInch: return this.WattsPerInch;
            case LinearPowerDensityUnits.WattsPerFoot: return this.WattsPerFoot;
            case LinearPowerDensityUnits.MilliwattsPerMeter: return this.MilliwattsPerMeter;
            case LinearPowerDensityUnits.KilowattsPerMeter: return this.KilowattsPerMeter;
            case LinearPowerDensityUnits.MegawattsPerMeter: return this.MegawattsPerMeter;
            case LinearPowerDensityUnits.GigawattsPerMeter: return this.GigawattsPerMeter;
            case LinearPowerDensityUnits.MilliwattsPerCentimeter: return this.MilliwattsPerCentimeter;
            case LinearPowerDensityUnits.KilowattsPerCentimeter: return this.KilowattsPerCentimeter;
            case LinearPowerDensityUnits.MegawattsPerCentimeter: return this.MegawattsPerCentimeter;
            case LinearPowerDensityUnits.GigawattsPerCentimeter: return this.GigawattsPerCentimeter;
            case LinearPowerDensityUnits.MilliwattsPerMillimeter: return this.MilliwattsPerMillimeter;
            case LinearPowerDensityUnits.KilowattsPerMillimeter: return this.KilowattsPerMillimeter;
            case LinearPowerDensityUnits.MegawattsPerMillimeter: return this.MegawattsPerMillimeter;
            case LinearPowerDensityUnits.GigawattsPerMillimeter: return this.GigawattsPerMillimeter;
            case LinearPowerDensityUnits.MilliwattsPerInch: return this.MilliwattsPerInch;
            case LinearPowerDensityUnits.KilowattsPerInch: return this.KilowattsPerInch;
            case LinearPowerDensityUnits.MegawattsPerInch: return this.MegawattsPerInch;
            case LinearPowerDensityUnits.GigawattsPerInch: return this.GigawattsPerInch;
            case LinearPowerDensityUnits.MilliwattsPerFoot: return this.MilliwattsPerFoot;
            case LinearPowerDensityUnits.KilowattsPerFoot: return this.KilowattsPerFoot;
            case LinearPowerDensityUnits.MegawattsPerFoot: return this.MegawattsPerFoot;
            case LinearPowerDensityUnits.GigawattsPerFoot: return this.GigawattsPerFoot;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: LinearPowerDensityUnits): number {
        switch (toUnit) {
                
            case LinearPowerDensityUnits.WattsPerMeter:
                return this.value;
            case LinearPowerDensityUnits.WattsPerCentimeter:
                return this.value / 1e2;
            case LinearPowerDensityUnits.WattsPerMillimeter:
                return this.value / 1e3;
            case LinearPowerDensityUnits.WattsPerInch:
                return this.value / 39.37007874;
            case LinearPowerDensityUnits.WattsPerFoot:
                return this.value / 3.280839895;
            case LinearPowerDensityUnits.MilliwattsPerMeter:
                return (this.value) / 0.001;
            case LinearPowerDensityUnits.KilowattsPerMeter:
                return (this.value) / 1000;
            case LinearPowerDensityUnits.MegawattsPerMeter:
                return (this.value) / 1000000;
            case LinearPowerDensityUnits.GigawattsPerMeter:
                return (this.value) / 1000000000;
            case LinearPowerDensityUnits.MilliwattsPerCentimeter:
                return (this.value / 1e2) / 0.001;
            case LinearPowerDensityUnits.KilowattsPerCentimeter:
                return (this.value / 1e2) / 1000;
            case LinearPowerDensityUnits.MegawattsPerCentimeter:
                return (this.value / 1e2) / 1000000;
            case LinearPowerDensityUnits.GigawattsPerCentimeter:
                return (this.value / 1e2) / 1000000000;
            case LinearPowerDensityUnits.MilliwattsPerMillimeter:
                return (this.value / 1e3) / 0.001;
            case LinearPowerDensityUnits.KilowattsPerMillimeter:
                return (this.value / 1e3) / 1000;
            case LinearPowerDensityUnits.MegawattsPerMillimeter:
                return (this.value / 1e3) / 1000000;
            case LinearPowerDensityUnits.GigawattsPerMillimeter:
                return (this.value / 1e3) / 1000000000;
            case LinearPowerDensityUnits.MilliwattsPerInch:
                return (this.value / 39.37007874) / 0.001;
            case LinearPowerDensityUnits.KilowattsPerInch:
                return (this.value / 39.37007874) / 1000;
            case LinearPowerDensityUnits.MegawattsPerInch:
                return (this.value / 39.37007874) / 1000000;
            case LinearPowerDensityUnits.GigawattsPerInch:
                return (this.value / 39.37007874) / 1000000000;
            case LinearPowerDensityUnits.MilliwattsPerFoot:
                return (this.value / 3.280839895) / 0.001;
            case LinearPowerDensityUnits.KilowattsPerFoot:
                return (this.value / 3.280839895) / 1000;
            case LinearPowerDensityUnits.MegawattsPerFoot:
                return (this.value / 3.280839895) / 1000000;
            case LinearPowerDensityUnits.GigawattsPerFoot:
                return (this.value / 3.280839895) / 1000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LinearPowerDensityUnits): number {
        switch (fromUnit) {
                
            case LinearPowerDensityUnits.WattsPerMeter:
                return value;
            case LinearPowerDensityUnits.WattsPerCentimeter:
                return value * 1e2;
            case LinearPowerDensityUnits.WattsPerMillimeter:
                return value * 1e3;
            case LinearPowerDensityUnits.WattsPerInch:
                return value * 39.37007874;
            case LinearPowerDensityUnits.WattsPerFoot:
                return value * 3.280839895;
            case LinearPowerDensityUnits.MilliwattsPerMeter:
                return (value) * 0.001;
            case LinearPowerDensityUnits.KilowattsPerMeter:
                return (value) * 1000;
            case LinearPowerDensityUnits.MegawattsPerMeter:
                return (value) * 1000000;
            case LinearPowerDensityUnits.GigawattsPerMeter:
                return (value) * 1000000000;
            case LinearPowerDensityUnits.MilliwattsPerCentimeter:
                return (value * 1e2) * 0.001;
            case LinearPowerDensityUnits.KilowattsPerCentimeter:
                return (value * 1e2) * 1000;
            case LinearPowerDensityUnits.MegawattsPerCentimeter:
                return (value * 1e2) * 1000000;
            case LinearPowerDensityUnits.GigawattsPerCentimeter:
                return (value * 1e2) * 1000000000;
            case LinearPowerDensityUnits.MilliwattsPerMillimeter:
                return (value * 1e3) * 0.001;
            case LinearPowerDensityUnits.KilowattsPerMillimeter:
                return (value * 1e3) * 1000;
            case LinearPowerDensityUnits.MegawattsPerMillimeter:
                return (value * 1e3) * 1000000;
            case LinearPowerDensityUnits.GigawattsPerMillimeter:
                return (value * 1e3) * 1000000000;
            case LinearPowerDensityUnits.MilliwattsPerInch:
                return (value * 39.37007874) * 0.001;
            case LinearPowerDensityUnits.KilowattsPerInch:
                return (value * 39.37007874) * 1000;
            case LinearPowerDensityUnits.MegawattsPerInch:
                return (value * 39.37007874) * 1000000;
            case LinearPowerDensityUnits.GigawattsPerInch:
                return (value * 39.37007874) * 1000000000;
            case LinearPowerDensityUnits.MilliwattsPerFoot:
                return (value * 3.280839895) * 0.001;
            case LinearPowerDensityUnits.KilowattsPerFoot:
                return (value * 3.280839895) * 1000;
            case LinearPowerDensityUnits.MegawattsPerFoot:
                return (value * 3.280839895) * 1000000;
            case LinearPowerDensityUnits.GigawattsPerFoot:
                return (value * 3.280839895) * 1000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the LinearPowerDensity to string.
     * Note! the default format for LinearPowerDensity is WattsPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the LinearPowerDensity.
     * @returns The string format of the LinearPowerDensity.
     */
    public toString(unit: LinearPowerDensityUnits = LinearPowerDensityUnits.WattsPerMeter): string {

        switch (unit) {
            
            case LinearPowerDensityUnits.WattsPerMeter:
                return this.WattsPerMeter + ` W/m`;
            case LinearPowerDensityUnits.WattsPerCentimeter:
                return this.WattsPerCentimeter + ` W/cm`;
            case LinearPowerDensityUnits.WattsPerMillimeter:
                return this.WattsPerMillimeter + ` W/mm`;
            case LinearPowerDensityUnits.WattsPerInch:
                return this.WattsPerInch + ` W/in`;
            case LinearPowerDensityUnits.WattsPerFoot:
                return this.WattsPerFoot + ` W/ft`;
            case LinearPowerDensityUnits.MilliwattsPerMeter:
                return this.MilliwattsPerMeter + ` mW/m`;
            case LinearPowerDensityUnits.KilowattsPerMeter:
                return this.KilowattsPerMeter + ` kW/m`;
            case LinearPowerDensityUnits.MegawattsPerMeter:
                return this.MegawattsPerMeter + ` MW/m`;
            case LinearPowerDensityUnits.GigawattsPerMeter:
                return this.GigawattsPerMeter + ` GW/m`;
            case LinearPowerDensityUnits.MilliwattsPerCentimeter:
                return this.MilliwattsPerCentimeter + ` mW/cm`;
            case LinearPowerDensityUnits.KilowattsPerCentimeter:
                return this.KilowattsPerCentimeter + ` kW/cm`;
            case LinearPowerDensityUnits.MegawattsPerCentimeter:
                return this.MegawattsPerCentimeter + ` MW/cm`;
            case LinearPowerDensityUnits.GigawattsPerCentimeter:
                return this.GigawattsPerCentimeter + ` GW/cm`;
            case LinearPowerDensityUnits.MilliwattsPerMillimeter:
                return this.MilliwattsPerMillimeter + ` mW/mm`;
            case LinearPowerDensityUnits.KilowattsPerMillimeter:
                return this.KilowattsPerMillimeter + ` kW/mm`;
            case LinearPowerDensityUnits.MegawattsPerMillimeter:
                return this.MegawattsPerMillimeter + ` MW/mm`;
            case LinearPowerDensityUnits.GigawattsPerMillimeter:
                return this.GigawattsPerMillimeter + ` GW/mm`;
            case LinearPowerDensityUnits.MilliwattsPerInch:
                return this.MilliwattsPerInch + ` mW/in`;
            case LinearPowerDensityUnits.KilowattsPerInch:
                return this.KilowattsPerInch + ` kW/in`;
            case LinearPowerDensityUnits.MegawattsPerInch:
                return this.MegawattsPerInch + ` MW/in`;
            case LinearPowerDensityUnits.GigawattsPerInch:
                return this.GigawattsPerInch + ` GW/in`;
            case LinearPowerDensityUnits.MilliwattsPerFoot:
                return this.MilliwattsPerFoot + ` mW/ft`;
            case LinearPowerDensityUnits.KilowattsPerFoot:
                return this.KilowattsPerFoot + ` kW/ft`;
            case LinearPowerDensityUnits.MegawattsPerFoot:
                return this.MegawattsPerFoot + ` MW/ft`;
            case LinearPowerDensityUnits.GigawattsPerFoot:
                return this.GigawattsPerFoot + ` GW/ft`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get LinearPowerDensity unit abbreviation.
     * Note! the default abbreviation for LinearPowerDensity is WattsPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the LinearPowerDensity.
     * @returns The abbreviation string of LinearPowerDensity.
     */
    public getUnitAbbreviation(unitAbbreviation: LinearPowerDensityUnits = LinearPowerDensityUnits.WattsPerMeter): string {

        switch (unitAbbreviation) {
            
            case LinearPowerDensityUnits.WattsPerMeter:
                return `W/m`;
            case LinearPowerDensityUnits.WattsPerCentimeter:
                return `W/cm`;
            case LinearPowerDensityUnits.WattsPerMillimeter:
                return `W/mm`;
            case LinearPowerDensityUnits.WattsPerInch:
                return `W/in`;
            case LinearPowerDensityUnits.WattsPerFoot:
                return `W/ft`;
            case LinearPowerDensityUnits.MilliwattsPerMeter:
                return `mW/m`;
            case LinearPowerDensityUnits.KilowattsPerMeter:
                return `kW/m`;
            case LinearPowerDensityUnits.MegawattsPerMeter:
                return `MW/m`;
            case LinearPowerDensityUnits.GigawattsPerMeter:
                return `GW/m`;
            case LinearPowerDensityUnits.MilliwattsPerCentimeter:
                return `mW/cm`;
            case LinearPowerDensityUnits.KilowattsPerCentimeter:
                return `kW/cm`;
            case LinearPowerDensityUnits.MegawattsPerCentimeter:
                return `MW/cm`;
            case LinearPowerDensityUnits.GigawattsPerCentimeter:
                return `GW/cm`;
            case LinearPowerDensityUnits.MilliwattsPerMillimeter:
                return `mW/mm`;
            case LinearPowerDensityUnits.KilowattsPerMillimeter:
                return `kW/mm`;
            case LinearPowerDensityUnits.MegawattsPerMillimeter:
                return `MW/mm`;
            case LinearPowerDensityUnits.GigawattsPerMillimeter:
                return `GW/mm`;
            case LinearPowerDensityUnits.MilliwattsPerInch:
                return `mW/in`;
            case LinearPowerDensityUnits.KilowattsPerInch:
                return `kW/in`;
            case LinearPowerDensityUnits.MegawattsPerInch:
                return `MW/in`;
            case LinearPowerDensityUnits.GigawattsPerInch:
                return `GW/in`;
            case LinearPowerDensityUnits.MilliwattsPerFoot:
                return `mW/ft`;
            case LinearPowerDensityUnits.KilowattsPerFoot:
                return `kW/ft`;
            case LinearPowerDensityUnits.MegawattsPerFoot:
                return `MW/ft`;
            case LinearPowerDensityUnits.GigawattsPerFoot:
                return `GW/ft`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given LinearPowerDensity are equals to the current LinearPowerDensity.
     * @param linearPowerDensity The other LinearPowerDensity.
     * @returns True if the given LinearPowerDensity are equal to the current LinearPowerDensity.
     */
    public equals(linearPowerDensity: LinearPowerDensity): boolean {
        return this.value === linearPowerDensity.BaseValue;
    }

    /**
     * Compare the given LinearPowerDensity against the current LinearPowerDensity.
     * @param linearPowerDensity The other LinearPowerDensity.
     * @returns 0 if they are equal, -1 if the current LinearPowerDensity is less then other, 1 if the current LinearPowerDensity is greater then other.
     */
    public compareTo(linearPowerDensity: LinearPowerDensity): number {

        if (this.value > linearPowerDensity.BaseValue)
            return 1;
        if (this.value < linearPowerDensity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given LinearPowerDensity with the current LinearPowerDensity.
     * @param linearPowerDensity The other LinearPowerDensity.
     * @returns A new LinearPowerDensity instance with the results.
     */
    public add(linearPowerDensity: LinearPowerDensity): LinearPowerDensity {
        return new LinearPowerDensity(this.value + linearPowerDensity.BaseValue)
    }

    /**
     * Subtract the given LinearPowerDensity with the current LinearPowerDensity.
     * @param linearPowerDensity The other LinearPowerDensity.
     * @returns A new LinearPowerDensity instance with the results.
     */
    public subtract(linearPowerDensity: LinearPowerDensity): LinearPowerDensity {
        return new LinearPowerDensity(this.value - linearPowerDensity.BaseValue)
    }

    /**
     * Multiply the given LinearPowerDensity with the current LinearPowerDensity.
     * @param linearPowerDensity The other LinearPowerDensity.
     * @returns A new LinearPowerDensity instance with the results.
     */
    public multiply(linearPowerDensity: LinearPowerDensity): LinearPowerDensity {
        return new LinearPowerDensity(this.value * linearPowerDensity.BaseValue)
    }

    /**
     * Divide the given LinearPowerDensity with the current LinearPowerDensity.
     * @param linearPowerDensity The other LinearPowerDensity.
     * @returns A new LinearPowerDensity instance with the results.
     */
    public divide(linearPowerDensity: LinearPowerDensity): LinearPowerDensity {
        return new LinearPowerDensity(this.value / linearPowerDensity.BaseValue)
    }

    /**
     * Modulo the given LinearPowerDensity with the current LinearPowerDensity.
     * @param linearPowerDensity The other LinearPowerDensity.
     * @returns A new LinearPowerDensity instance with the results.
     */
    public modulo(linearPowerDensity: LinearPowerDensity): LinearPowerDensity {
        return new LinearPowerDensity(this.value % linearPowerDensity.BaseValue)
    }

    /**
     * Pow the given LinearPowerDensity with the current LinearPowerDensity.
     * @param linearPowerDensity The other LinearPowerDensity.
     * @returns A new LinearPowerDensity instance with the results.
     */
    public pow(linearPowerDensity: LinearPowerDensity): LinearPowerDensity {
        return new LinearPowerDensity(this.value ** linearPowerDensity.BaseValue)
    }
}
