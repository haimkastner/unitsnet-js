/** ForcePerLengthUnits enumeration */
export enum ForcePerLengthUnits {
    /** */
    NewtonsPerMeter,
    /** */
    NewtonsPerCentimeter,
    /** */
    NewtonsPerMillimeter,
    /** */
    KilogramsForcePerMeter,
    /** */
    KilogramsForcePerCentimeter,
    /** */
    KilogramsForcePerMillimeter,
    /** */
    TonnesForcePerMeter,
    /** */
    TonnesForcePerCentimeter,
    /** */
    TonnesForcePerMillimeter,
    /** */
    PoundsForcePerFoot,
    /** */
    PoundsForcePerInch,
    /** */
    PoundsForcePerYard,
    /** */
    KilopoundsForcePerFoot,
    /** */
    KilopoundsForcePerInch,
    /** */
    NanonewtonsPerMeter,
    /** */
    MicronewtonsPerMeter,
    /** */
    MillinewtonsPerMeter,
    /** */
    CentinewtonsPerMeter,
    /** */
    DecinewtonsPerMeter,
    /** */
    DecanewtonsPerMeter,
    /** */
    KilonewtonsPerMeter,
    /** */
    MeganewtonsPerMeter,
    /** */
    NanonewtonsPerCentimeter,
    /** */
    MicronewtonsPerCentimeter,
    /** */
    MillinewtonsPerCentimeter,
    /** */
    CentinewtonsPerCentimeter,
    /** */
    DecinewtonsPerCentimeter,
    /** */
    DecanewtonsPerCentimeter,
    /** */
    KilonewtonsPerCentimeter,
    /** */
    MeganewtonsPerCentimeter,
    /** */
    NanonewtonsPerMillimeter,
    /** */
    MicronewtonsPerMillimeter,
    /** */
    MillinewtonsPerMillimeter,
    /** */
    CentinewtonsPerMillimeter,
    /** */
    DecinewtonsPerMillimeter,
    /** */
    DecanewtonsPerMillimeter,
    /** */
    KilonewtonsPerMillimeter,
    /** */
    MeganewtonsPerMillimeter
}

/** The magnitude of force per unit length. */
export class ForcePerLength {
    private value: number;
    private newtonspermeterLazy: number | null = null;
    private newtonspercentimeterLazy: number | null = null;
    private newtonspermillimeterLazy: number | null = null;
    private kilogramsforcepermeterLazy: number | null = null;
    private kilogramsforcepercentimeterLazy: number | null = null;
    private kilogramsforcepermillimeterLazy: number | null = null;
    private tonnesforcepermeterLazy: number | null = null;
    private tonnesforcepercentimeterLazy: number | null = null;
    private tonnesforcepermillimeterLazy: number | null = null;
    private poundsforceperfootLazy: number | null = null;
    private poundsforceperinchLazy: number | null = null;
    private poundsforceperyardLazy: number | null = null;
    private kilopoundsforceperfootLazy: number | null = null;
    private kilopoundsforceperinchLazy: number | null = null;
    private nanonewtonspermeterLazy: number | null = null;
    private micronewtonspermeterLazy: number | null = null;
    private millinewtonspermeterLazy: number | null = null;
    private centinewtonspermeterLazy: number | null = null;
    private decinewtonspermeterLazy: number | null = null;
    private decanewtonspermeterLazy: number | null = null;
    private kilonewtonspermeterLazy: number | null = null;
    private meganewtonspermeterLazy: number | null = null;
    private nanonewtonspercentimeterLazy: number | null = null;
    private micronewtonspercentimeterLazy: number | null = null;
    private millinewtonspercentimeterLazy: number | null = null;
    private centinewtonspercentimeterLazy: number | null = null;
    private decinewtonspercentimeterLazy: number | null = null;
    private decanewtonspercentimeterLazy: number | null = null;
    private kilonewtonspercentimeterLazy: number | null = null;
    private meganewtonspercentimeterLazy: number | null = null;
    private nanonewtonspermillimeterLazy: number | null = null;
    private micronewtonspermillimeterLazy: number | null = null;
    private millinewtonspermillimeterLazy: number | null = null;
    private centinewtonspermillimeterLazy: number | null = null;
    private decinewtonspermillimeterLazy: number | null = null;
    private decanewtonspermillimeterLazy: number | null = null;
    private kilonewtonspermillimeterLazy: number | null = null;
    private meganewtonspermillimeterLazy: number | null = null;

    /**
     * Create a new ForcePerLength.
     * @param value The value.
     * @param fromUnit The ‘ForcePerLength’ unit to create from.
     * The default unit is NewtonsPerMeter
     */
    public constructor(value: number, fromUnit: ForcePerLengthUnits = ForcePerLengthUnits.NewtonsPerMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ForcePerLength is NewtonsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get NewtonsPerMeter(): number {
        if(this.newtonspermeterLazy !== null){
            return this.newtonspermeterLazy;
        }
        return this.newtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.NewtonsPerMeter);
    }

    /** */
    public get NewtonsPerCentimeter(): number {
        if(this.newtonspercentimeterLazy !== null){
            return this.newtonspercentimeterLazy;
        }
        return this.newtonspercentimeterLazy = this.convertFromBase(ForcePerLengthUnits.NewtonsPerCentimeter);
    }

    /** */
    public get NewtonsPerMillimeter(): number {
        if(this.newtonspermillimeterLazy !== null){
            return this.newtonspermillimeterLazy;
        }
        return this.newtonspermillimeterLazy = this.convertFromBase(ForcePerLengthUnits.NewtonsPerMillimeter);
    }

    /** */
    public get KilogramsForcePerMeter(): number {
        if(this.kilogramsforcepermeterLazy !== null){
            return this.kilogramsforcepermeterLazy;
        }
        return this.kilogramsforcepermeterLazy = this.convertFromBase(ForcePerLengthUnits.KilogramsForcePerMeter);
    }

    /** */
    public get KilogramsForcePerCentimeter(): number {
        if(this.kilogramsforcepercentimeterLazy !== null){
            return this.kilogramsforcepercentimeterLazy;
        }
        return this.kilogramsforcepercentimeterLazy = this.convertFromBase(ForcePerLengthUnits.KilogramsForcePerCentimeter);
    }

    /** */
    public get KilogramsForcePerMillimeter(): number {
        if(this.kilogramsforcepermillimeterLazy !== null){
            return this.kilogramsforcepermillimeterLazy;
        }
        return this.kilogramsforcepermillimeterLazy = this.convertFromBase(ForcePerLengthUnits.KilogramsForcePerMillimeter);
    }

    /** */
    public get TonnesForcePerMeter(): number {
        if(this.tonnesforcepermeterLazy !== null){
            return this.tonnesforcepermeterLazy;
        }
        return this.tonnesforcepermeterLazy = this.convertFromBase(ForcePerLengthUnits.TonnesForcePerMeter);
    }

    /** */
    public get TonnesForcePerCentimeter(): number {
        if(this.tonnesforcepercentimeterLazy !== null){
            return this.tonnesforcepercentimeterLazy;
        }
        return this.tonnesforcepercentimeterLazy = this.convertFromBase(ForcePerLengthUnits.TonnesForcePerCentimeter);
    }

    /** */
    public get TonnesForcePerMillimeter(): number {
        if(this.tonnesforcepermillimeterLazy !== null){
            return this.tonnesforcepermillimeterLazy;
        }
        return this.tonnesforcepermillimeterLazy = this.convertFromBase(ForcePerLengthUnits.TonnesForcePerMillimeter);
    }

    /** */
    public get PoundsForcePerFoot(): number {
        if(this.poundsforceperfootLazy !== null){
            return this.poundsforceperfootLazy;
        }
        return this.poundsforceperfootLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerFoot);
    }

    /** */
    public get PoundsForcePerInch(): number {
        if(this.poundsforceperinchLazy !== null){
            return this.poundsforceperinchLazy;
        }
        return this.poundsforceperinchLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerInch);
    }

    /** */
    public get PoundsForcePerYard(): number {
        if(this.poundsforceperyardLazy !== null){
            return this.poundsforceperyardLazy;
        }
        return this.poundsforceperyardLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerYard);
    }

    /** */
    public get KilopoundsForcePerFoot(): number {
        if(this.kilopoundsforceperfootLazy !== null){
            return this.kilopoundsforceperfootLazy;
        }
        return this.kilopoundsforceperfootLazy = this.convertFromBase(ForcePerLengthUnits.KilopoundsForcePerFoot);
    }

    /** */
    public get KilopoundsForcePerInch(): number {
        if(this.kilopoundsforceperinchLazy !== null){
            return this.kilopoundsforceperinchLazy;
        }
        return this.kilopoundsforceperinchLazy = this.convertFromBase(ForcePerLengthUnits.KilopoundsForcePerInch);
    }

    /** */
    public get NanonewtonsPerMeter(): number {
        if(this.nanonewtonspermeterLazy !== null){
            return this.nanonewtonspermeterLazy;
        }
        return this.nanonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.NanonewtonsPerMeter);
    }

    /** */
    public get MicronewtonsPerMeter(): number {
        if(this.micronewtonspermeterLazy !== null){
            return this.micronewtonspermeterLazy;
        }
        return this.micronewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.MicronewtonsPerMeter);
    }

    /** */
    public get MillinewtonsPerMeter(): number {
        if(this.millinewtonspermeterLazy !== null){
            return this.millinewtonspermeterLazy;
        }
        return this.millinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.MillinewtonsPerMeter);
    }

    /** */
    public get CentinewtonsPerMeter(): number {
        if(this.centinewtonspermeterLazy !== null){
            return this.centinewtonspermeterLazy;
        }
        return this.centinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.CentinewtonsPerMeter);
    }

    /** */
    public get DecinewtonsPerMeter(): number {
        if(this.decinewtonspermeterLazy !== null){
            return this.decinewtonspermeterLazy;
        }
        return this.decinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.DecinewtonsPerMeter);
    }

    /** */
    public get DecanewtonsPerMeter(): number {
        if(this.decanewtonspermeterLazy !== null){
            return this.decanewtonspermeterLazy;
        }
        return this.decanewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.DecanewtonsPerMeter);
    }

    /** */
    public get KilonewtonsPerMeter(): number {
        if(this.kilonewtonspermeterLazy !== null){
            return this.kilonewtonspermeterLazy;
        }
        return this.kilonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.KilonewtonsPerMeter);
    }

    /** */
    public get MeganewtonsPerMeter(): number {
        if(this.meganewtonspermeterLazy !== null){
            return this.meganewtonspermeterLazy;
        }
        return this.meganewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.MeganewtonsPerMeter);
    }

    /** */
    public get NanonewtonsPerCentimeter(): number {
        if(this.nanonewtonspercentimeterLazy !== null){
            return this.nanonewtonspercentimeterLazy;
        }
        return this.nanonewtonspercentimeterLazy = this.convertFromBase(ForcePerLengthUnits.NanonewtonsPerCentimeter);
    }

    /** */
    public get MicronewtonsPerCentimeter(): number {
        if(this.micronewtonspercentimeterLazy !== null){
            return this.micronewtonspercentimeterLazy;
        }
        return this.micronewtonspercentimeterLazy = this.convertFromBase(ForcePerLengthUnits.MicronewtonsPerCentimeter);
    }

    /** */
    public get MillinewtonsPerCentimeter(): number {
        if(this.millinewtonspercentimeterLazy !== null){
            return this.millinewtonspercentimeterLazy;
        }
        return this.millinewtonspercentimeterLazy = this.convertFromBase(ForcePerLengthUnits.MillinewtonsPerCentimeter);
    }

    /** */
    public get CentinewtonsPerCentimeter(): number {
        if(this.centinewtonspercentimeterLazy !== null){
            return this.centinewtonspercentimeterLazy;
        }
        return this.centinewtonspercentimeterLazy = this.convertFromBase(ForcePerLengthUnits.CentinewtonsPerCentimeter);
    }

    /** */
    public get DecinewtonsPerCentimeter(): number {
        if(this.decinewtonspercentimeterLazy !== null){
            return this.decinewtonspercentimeterLazy;
        }
        return this.decinewtonspercentimeterLazy = this.convertFromBase(ForcePerLengthUnits.DecinewtonsPerCentimeter);
    }

    /** */
    public get DecanewtonsPerCentimeter(): number {
        if(this.decanewtonspercentimeterLazy !== null){
            return this.decanewtonspercentimeterLazy;
        }
        return this.decanewtonspercentimeterLazy = this.convertFromBase(ForcePerLengthUnits.DecanewtonsPerCentimeter);
    }

    /** */
    public get KilonewtonsPerCentimeter(): number {
        if(this.kilonewtonspercentimeterLazy !== null){
            return this.kilonewtonspercentimeterLazy;
        }
        return this.kilonewtonspercentimeterLazy = this.convertFromBase(ForcePerLengthUnits.KilonewtonsPerCentimeter);
    }

    /** */
    public get MeganewtonsPerCentimeter(): number {
        if(this.meganewtonspercentimeterLazy !== null){
            return this.meganewtonspercentimeterLazy;
        }
        return this.meganewtonspercentimeterLazy = this.convertFromBase(ForcePerLengthUnits.MeganewtonsPerCentimeter);
    }

    /** */
    public get NanonewtonsPerMillimeter(): number {
        if(this.nanonewtonspermillimeterLazy !== null){
            return this.nanonewtonspermillimeterLazy;
        }
        return this.nanonewtonspermillimeterLazy = this.convertFromBase(ForcePerLengthUnits.NanonewtonsPerMillimeter);
    }

    /** */
    public get MicronewtonsPerMillimeter(): number {
        if(this.micronewtonspermillimeterLazy !== null){
            return this.micronewtonspermillimeterLazy;
        }
        return this.micronewtonspermillimeterLazy = this.convertFromBase(ForcePerLengthUnits.MicronewtonsPerMillimeter);
    }

    /** */
    public get MillinewtonsPerMillimeter(): number {
        if(this.millinewtonspermillimeterLazy !== null){
            return this.millinewtonspermillimeterLazy;
        }
        return this.millinewtonspermillimeterLazy = this.convertFromBase(ForcePerLengthUnits.MillinewtonsPerMillimeter);
    }

    /** */
    public get CentinewtonsPerMillimeter(): number {
        if(this.centinewtonspermillimeterLazy !== null){
            return this.centinewtonspermillimeterLazy;
        }
        return this.centinewtonspermillimeterLazy = this.convertFromBase(ForcePerLengthUnits.CentinewtonsPerMillimeter);
    }

    /** */
    public get DecinewtonsPerMillimeter(): number {
        if(this.decinewtonspermillimeterLazy !== null){
            return this.decinewtonspermillimeterLazy;
        }
        return this.decinewtonspermillimeterLazy = this.convertFromBase(ForcePerLengthUnits.DecinewtonsPerMillimeter);
    }

    /** */
    public get DecanewtonsPerMillimeter(): number {
        if(this.decanewtonspermillimeterLazy !== null){
            return this.decanewtonspermillimeterLazy;
        }
        return this.decanewtonspermillimeterLazy = this.convertFromBase(ForcePerLengthUnits.DecanewtonsPerMillimeter);
    }

    /** */
    public get KilonewtonsPerMillimeter(): number {
        if(this.kilonewtonspermillimeterLazy !== null){
            return this.kilonewtonspermillimeterLazy;
        }
        return this.kilonewtonspermillimeterLazy = this.convertFromBase(ForcePerLengthUnits.KilonewtonsPerMillimeter);
    }

    /** */
    public get MeganewtonsPerMillimeter(): number {
        if(this.meganewtonspermillimeterLazy !== null){
            return this.meganewtonspermillimeterLazy;
        }
        return this.meganewtonspermillimeterLazy = this.convertFromBase(ForcePerLengthUnits.MeganewtonsPerMillimeter);
    }

    /**
     * Create a new ForcePerLength instance from a NewtonsPerMeter
     *
     * @param value The unit as NewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromNewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.NewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a NewtonsPerCentimeter
     *
     * @param value The unit as NewtonsPerCentimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromNewtonsPerCentimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.NewtonsPerCentimeter);
    }

    /**
     * Create a new ForcePerLength instance from a NewtonsPerMillimeter
     *
     * @param value The unit as NewtonsPerMillimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromNewtonsPerMillimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.NewtonsPerMillimeter);
    }

    /**
     * Create a new ForcePerLength instance from a KilogramsForcePerMeter
     *
     * @param value The unit as KilogramsForcePerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromKilogramsForcePerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilogramsForcePerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a KilogramsForcePerCentimeter
     *
     * @param value The unit as KilogramsForcePerCentimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromKilogramsForcePerCentimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilogramsForcePerCentimeter);
    }

    /**
     * Create a new ForcePerLength instance from a KilogramsForcePerMillimeter
     *
     * @param value The unit as KilogramsForcePerMillimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromKilogramsForcePerMillimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilogramsForcePerMillimeter);
    }

    /**
     * Create a new ForcePerLength instance from a TonnesForcePerMeter
     *
     * @param value The unit as TonnesForcePerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromTonnesForcePerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.TonnesForcePerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a TonnesForcePerCentimeter
     *
     * @param value The unit as TonnesForcePerCentimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromTonnesForcePerCentimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.TonnesForcePerCentimeter);
    }

    /**
     * Create a new ForcePerLength instance from a TonnesForcePerMillimeter
     *
     * @param value The unit as TonnesForcePerMillimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromTonnesForcePerMillimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.TonnesForcePerMillimeter);
    }

    /**
     * Create a new ForcePerLength instance from a PoundsForcePerFoot
     *
     * @param value The unit as PoundsForcePerFoot to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromPoundsForcePerFoot(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerFoot);
    }

    /**
     * Create a new ForcePerLength instance from a PoundsForcePerInch
     *
     * @param value The unit as PoundsForcePerInch to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromPoundsForcePerInch(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerInch);
    }

    /**
     * Create a new ForcePerLength instance from a PoundsForcePerYard
     *
     * @param value The unit as PoundsForcePerYard to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromPoundsForcePerYard(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerYard);
    }

    /**
     * Create a new ForcePerLength instance from a KilopoundsForcePerFoot
     *
     * @param value The unit as KilopoundsForcePerFoot to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromKilopoundsForcePerFoot(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilopoundsForcePerFoot);
    }

    /**
     * Create a new ForcePerLength instance from a KilopoundsForcePerInch
     *
     * @param value The unit as KilopoundsForcePerInch to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromKilopoundsForcePerInch(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilopoundsForcePerInch);
    }

    /**
     * Create a new ForcePerLength instance from a NanonewtonsPerMeter
     *
     * @param value The unit as NanonewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromNanonewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.NanonewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a MicronewtonsPerMeter
     *
     * @param value The unit as MicronewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromMicronewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MicronewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a MillinewtonsPerMeter
     *
     * @param value The unit as MillinewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromMillinewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MillinewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a CentinewtonsPerMeter
     *
     * @param value The unit as CentinewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromCentinewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.CentinewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a DecinewtonsPerMeter
     *
     * @param value The unit as DecinewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromDecinewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.DecinewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a DecanewtonsPerMeter
     *
     * @param value The unit as DecanewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromDecanewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.DecanewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a KilonewtonsPerMeter
     *
     * @param value The unit as KilonewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromKilonewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilonewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a MeganewtonsPerMeter
     *
     * @param value The unit as MeganewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromMeganewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MeganewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a NanonewtonsPerCentimeter
     *
     * @param value The unit as NanonewtonsPerCentimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromNanonewtonsPerCentimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.NanonewtonsPerCentimeter);
    }

    /**
     * Create a new ForcePerLength instance from a MicronewtonsPerCentimeter
     *
     * @param value The unit as MicronewtonsPerCentimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromMicronewtonsPerCentimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MicronewtonsPerCentimeter);
    }

    /**
     * Create a new ForcePerLength instance from a MillinewtonsPerCentimeter
     *
     * @param value The unit as MillinewtonsPerCentimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromMillinewtonsPerCentimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MillinewtonsPerCentimeter);
    }

    /**
     * Create a new ForcePerLength instance from a CentinewtonsPerCentimeter
     *
     * @param value The unit as CentinewtonsPerCentimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromCentinewtonsPerCentimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.CentinewtonsPerCentimeter);
    }

    /**
     * Create a new ForcePerLength instance from a DecinewtonsPerCentimeter
     *
     * @param value The unit as DecinewtonsPerCentimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromDecinewtonsPerCentimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.DecinewtonsPerCentimeter);
    }

    /**
     * Create a new ForcePerLength instance from a DecanewtonsPerCentimeter
     *
     * @param value The unit as DecanewtonsPerCentimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromDecanewtonsPerCentimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.DecanewtonsPerCentimeter);
    }

    /**
     * Create a new ForcePerLength instance from a KilonewtonsPerCentimeter
     *
     * @param value The unit as KilonewtonsPerCentimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromKilonewtonsPerCentimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilonewtonsPerCentimeter);
    }

    /**
     * Create a new ForcePerLength instance from a MeganewtonsPerCentimeter
     *
     * @param value The unit as MeganewtonsPerCentimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromMeganewtonsPerCentimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MeganewtonsPerCentimeter);
    }

    /**
     * Create a new ForcePerLength instance from a NanonewtonsPerMillimeter
     *
     * @param value The unit as NanonewtonsPerMillimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromNanonewtonsPerMillimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.NanonewtonsPerMillimeter);
    }

    /**
     * Create a new ForcePerLength instance from a MicronewtonsPerMillimeter
     *
     * @param value The unit as MicronewtonsPerMillimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromMicronewtonsPerMillimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MicronewtonsPerMillimeter);
    }

    /**
     * Create a new ForcePerLength instance from a MillinewtonsPerMillimeter
     *
     * @param value The unit as MillinewtonsPerMillimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromMillinewtonsPerMillimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MillinewtonsPerMillimeter);
    }

    /**
     * Create a new ForcePerLength instance from a CentinewtonsPerMillimeter
     *
     * @param value The unit as CentinewtonsPerMillimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromCentinewtonsPerMillimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.CentinewtonsPerMillimeter);
    }

    /**
     * Create a new ForcePerLength instance from a DecinewtonsPerMillimeter
     *
     * @param value The unit as DecinewtonsPerMillimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromDecinewtonsPerMillimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.DecinewtonsPerMillimeter);
    }

    /**
     * Create a new ForcePerLength instance from a DecanewtonsPerMillimeter
     *
     * @param value The unit as DecanewtonsPerMillimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromDecanewtonsPerMillimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.DecanewtonsPerMillimeter);
    }

    /**
     * Create a new ForcePerLength instance from a KilonewtonsPerMillimeter
     *
     * @param value The unit as KilonewtonsPerMillimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromKilonewtonsPerMillimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilonewtonsPerMillimeter);
    }

    /**
     * Create a new ForcePerLength instance from a MeganewtonsPerMillimeter
     *
     * @param value The unit as MeganewtonsPerMillimeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromMeganewtonsPerMillimeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MeganewtonsPerMillimeter);
    }

    private convertFromBase(toUnit: ForcePerLengthUnits): number {
        switch (toUnit) {
                
            case ForcePerLengthUnits.NewtonsPerMeter:
                return this.value;
            case ForcePerLengthUnits.NewtonsPerCentimeter:
                return this.value/1e2;
            case ForcePerLengthUnits.NewtonsPerMillimeter:
                return this.value/1e3;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return this.value/9.80665002864;
            case ForcePerLengthUnits.KilogramsForcePerCentimeter:
                return this.value/980.665002864;
            case ForcePerLengthUnits.KilogramsForcePerMillimeter:
                return this.value/9.80665002864e3;
            case ForcePerLengthUnits.TonnesForcePerMeter:
                return this.value/9.80665002864e3;
            case ForcePerLengthUnits.TonnesForcePerCentimeter:
                return this.value/9.80665002864e5;
            case ForcePerLengthUnits.TonnesForcePerMillimeter:
                return this.value/9.80665002864e6;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return this.value/14.59390292;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return this.value/1.75126835e2;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return this.value/4.864634307;
            case ForcePerLengthUnits.KilopoundsForcePerFoot:
                return this.value/14593.90292;
            case ForcePerLengthUnits.KilopoundsForcePerInch:
                return this.value/1.75126835e5;
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return (this.value) / 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return (this.value) / 0.000001;
            case ForcePerLengthUnits.MillinewtonsPerMeter:
                return (this.value) / 0.001;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return (this.value) / 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return (this.value) / 0.1;
            case ForcePerLengthUnits.DecanewtonsPerMeter:
                return (this.value) / 10;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return (this.value) / 1000;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return (this.value) / 1000000;
            case ForcePerLengthUnits.NanonewtonsPerCentimeter:
                return (this.value/1e2) / 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerCentimeter:
                return (this.value/1e2) / 0.000001;
            case ForcePerLengthUnits.MillinewtonsPerCentimeter:
                return (this.value/1e2) / 0.001;
            case ForcePerLengthUnits.CentinewtonsPerCentimeter:
                return (this.value/1e2) / 0.01;
            case ForcePerLengthUnits.DecinewtonsPerCentimeter:
                return (this.value/1e2) / 0.1;
            case ForcePerLengthUnits.DecanewtonsPerCentimeter:
                return (this.value/1e2) / 10;
            case ForcePerLengthUnits.KilonewtonsPerCentimeter:
                return (this.value/1e2) / 1000;
            case ForcePerLengthUnits.MeganewtonsPerCentimeter:
                return (this.value/1e2) / 1000000;
            case ForcePerLengthUnits.NanonewtonsPerMillimeter:
                return (this.value/1e3) / 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMillimeter:
                return (this.value/1e3) / 0.000001;
            case ForcePerLengthUnits.MillinewtonsPerMillimeter:
                return (this.value/1e3) / 0.001;
            case ForcePerLengthUnits.CentinewtonsPerMillimeter:
                return (this.value/1e3) / 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMillimeter:
                return (this.value/1e3) / 0.1;
            case ForcePerLengthUnits.DecanewtonsPerMillimeter:
                return (this.value/1e3) / 10;
            case ForcePerLengthUnits.KilonewtonsPerMillimeter:
                return (this.value/1e3) / 1000;
            case ForcePerLengthUnits.MeganewtonsPerMillimeter:
                return (this.value/1e3) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ForcePerLengthUnits): number {
        switch (fromUnit) {
                
            case ForcePerLengthUnits.NewtonsPerMeter:
                return value;
            case ForcePerLengthUnits.NewtonsPerCentimeter:
                return value*1e2;
            case ForcePerLengthUnits.NewtonsPerMillimeter:
                return value*1e3;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return value*9.80665002864;
            case ForcePerLengthUnits.KilogramsForcePerCentimeter:
                return value*980.665002864;
            case ForcePerLengthUnits.KilogramsForcePerMillimeter:
                return value*9.80665002864e3;
            case ForcePerLengthUnits.TonnesForcePerMeter:
                return value*9.80665002864e3;
            case ForcePerLengthUnits.TonnesForcePerCentimeter:
                return value*9.80665002864e5;
            case ForcePerLengthUnits.TonnesForcePerMillimeter:
                return value*9.80665002864e6;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return value*14.59390292;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return value*1.75126835e2;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return value*4.864634307;
            case ForcePerLengthUnits.KilopoundsForcePerFoot:
                return value*14593.90292;
            case ForcePerLengthUnits.KilopoundsForcePerInch:
                return value*1.75126835e5;
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return (value) * 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return (value) * 0.000001;
            case ForcePerLengthUnits.MillinewtonsPerMeter:
                return (value) * 0.001;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return (value) * 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return (value) * 0.1;
            case ForcePerLengthUnits.DecanewtonsPerMeter:
                return (value) * 10;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return (value) * 1000;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return (value) * 1000000;
            case ForcePerLengthUnits.NanonewtonsPerCentimeter:
                return (value*1e2) * 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerCentimeter:
                return (value*1e2) * 0.000001;
            case ForcePerLengthUnits.MillinewtonsPerCentimeter:
                return (value*1e2) * 0.001;
            case ForcePerLengthUnits.CentinewtonsPerCentimeter:
                return (value*1e2) * 0.01;
            case ForcePerLengthUnits.DecinewtonsPerCentimeter:
                return (value*1e2) * 0.1;
            case ForcePerLengthUnits.DecanewtonsPerCentimeter:
                return (value*1e2) * 10;
            case ForcePerLengthUnits.KilonewtonsPerCentimeter:
                return (value*1e2) * 1000;
            case ForcePerLengthUnits.MeganewtonsPerCentimeter:
                return (value*1e2) * 1000000;
            case ForcePerLengthUnits.NanonewtonsPerMillimeter:
                return (value*1e3) * 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMillimeter:
                return (value*1e3) * 0.000001;
            case ForcePerLengthUnits.MillinewtonsPerMillimeter:
                return (value*1e3) * 0.001;
            case ForcePerLengthUnits.CentinewtonsPerMillimeter:
                return (value*1e3) * 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMillimeter:
                return (value*1e3) * 0.1;
            case ForcePerLengthUnits.DecanewtonsPerMillimeter:
                return (value*1e3) * 10;
            case ForcePerLengthUnits.KilonewtonsPerMillimeter:
                return (value*1e3) * 1000;
            case ForcePerLengthUnits.MeganewtonsPerMillimeter:
                return (value*1e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ForcePerLength to string.
     * Note! the default format for ForcePerLength is NewtonsPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ForcePerLength.
     * @returns The string format of the ForcePerLength.
     */
    public toString(toUnit: ForcePerLengthUnits = ForcePerLengthUnits.NewtonsPerMeter): string {

        switch (toUnit) {
            
            case ForcePerLengthUnits.NewtonsPerMeter:
                return this.NewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.NewtonsPerCentimeter:
                return this.NewtonsPerCentimeter + ` N/cm`;
            case ForcePerLengthUnits.NewtonsPerMillimeter:
                return this.NewtonsPerMillimeter + ` N/mm`;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return this.KilogramsForcePerMeter + ` kgf/m`;
            case ForcePerLengthUnits.KilogramsForcePerCentimeter:
                return this.KilogramsForcePerCentimeter + ` kgf/cm`;
            case ForcePerLengthUnits.KilogramsForcePerMillimeter:
                return this.KilogramsForcePerMillimeter + ` kgf/mm`;
            case ForcePerLengthUnits.TonnesForcePerMeter:
                return this.TonnesForcePerMeter + ` tf/m`;
            case ForcePerLengthUnits.TonnesForcePerCentimeter:
                return this.TonnesForcePerCentimeter + ` tf/cm`;
            case ForcePerLengthUnits.TonnesForcePerMillimeter:
                return this.TonnesForcePerMillimeter + ` tf/mm`;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return this.PoundsForcePerFoot + ` lbf/ft`;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return this.PoundsForcePerInch + ` lbf/in`;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return this.PoundsForcePerYard + ` lbf/yd`;
            case ForcePerLengthUnits.KilopoundsForcePerFoot:
                return this.KilopoundsForcePerFoot + ` kipf/ft`;
            case ForcePerLengthUnits.KilopoundsForcePerInch:
                return this.KilopoundsForcePerInch + ` kipf/in`;
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return this.NanonewtonsPerMeter + ` `;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return this.MicronewtonsPerMeter + ` `;
            case ForcePerLengthUnits.MillinewtonsPerMeter:
                return this.MillinewtonsPerMeter + ` `;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return this.CentinewtonsPerMeter + ` `;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return this.DecinewtonsPerMeter + ` `;
            case ForcePerLengthUnits.DecanewtonsPerMeter:
                return this.DecanewtonsPerMeter + ` `;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return this.KilonewtonsPerMeter + ` `;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return this.MeganewtonsPerMeter + ` `;
            case ForcePerLengthUnits.NanonewtonsPerCentimeter:
                return this.NanonewtonsPerCentimeter + ` `;
            case ForcePerLengthUnits.MicronewtonsPerCentimeter:
                return this.MicronewtonsPerCentimeter + ` `;
            case ForcePerLengthUnits.MillinewtonsPerCentimeter:
                return this.MillinewtonsPerCentimeter + ` `;
            case ForcePerLengthUnits.CentinewtonsPerCentimeter:
                return this.CentinewtonsPerCentimeter + ` `;
            case ForcePerLengthUnits.DecinewtonsPerCentimeter:
                return this.DecinewtonsPerCentimeter + ` `;
            case ForcePerLengthUnits.DecanewtonsPerCentimeter:
                return this.DecanewtonsPerCentimeter + ` `;
            case ForcePerLengthUnits.KilonewtonsPerCentimeter:
                return this.KilonewtonsPerCentimeter + ` `;
            case ForcePerLengthUnits.MeganewtonsPerCentimeter:
                return this.MeganewtonsPerCentimeter + ` `;
            case ForcePerLengthUnits.NanonewtonsPerMillimeter:
                return this.NanonewtonsPerMillimeter + ` `;
            case ForcePerLengthUnits.MicronewtonsPerMillimeter:
                return this.MicronewtonsPerMillimeter + ` `;
            case ForcePerLengthUnits.MillinewtonsPerMillimeter:
                return this.MillinewtonsPerMillimeter + ` `;
            case ForcePerLengthUnits.CentinewtonsPerMillimeter:
                return this.CentinewtonsPerMillimeter + ` `;
            case ForcePerLengthUnits.DecinewtonsPerMillimeter:
                return this.DecinewtonsPerMillimeter + ` `;
            case ForcePerLengthUnits.DecanewtonsPerMillimeter:
                return this.DecanewtonsPerMillimeter + ` `;
            case ForcePerLengthUnits.KilonewtonsPerMillimeter:
                return this.KilonewtonsPerMillimeter + ` `;
            case ForcePerLengthUnits.MeganewtonsPerMillimeter:
                return this.MeganewtonsPerMillimeter + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given ForcePerLength are equals to the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns True if the given ForcePerLength are equal to the current ForcePerLength.
     */
    public equals(forcePerLength: ForcePerLength): boolean {
        return this.value === forcePerLength.BaseValue;
    }

    /**
     * Compare the given ForcePerLength against the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns 0 if they are equal, -1 if the current ForcePerLength is less then other, 1 if the current ForcePerLength is greater then other.
     */
    public compareTo(forcePerLength: ForcePerLength): number {

        if (this.value > forcePerLength.BaseValue)
            return 1;
        if (this.value < forcePerLength.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public add(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(this.value + forcePerLength.BaseValue)
    }

    /**
     * Subtract the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public subtract(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(this.value - forcePerLength.BaseValue)
    }

    /**
     * Multiply the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public multiply(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(this.value * forcePerLength.BaseValue)
    }

    /**
     * Divide the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public divide(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(this.value / forcePerLength.BaseValue)
    }

    /**
     * Modulo the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public modulo(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(this.value % forcePerLength.BaseValue)
    }

    /**
     * Pow the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public pow(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(this.value ** forcePerLength.BaseValue)
    }
}
