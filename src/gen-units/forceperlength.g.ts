import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ForcePerLength */
export interface ForcePerLengthDto {
    /** The value of the ForcePerLength */
    value: number;
    /**  The specific unit that the ForcePerLength value is representing */
    unit: ForcePerLengthUnits;
}

/** ForcePerLengthUnits enumeration */
export enum ForcePerLengthUnits {
    /** */
    NewtonsPerMeter = "NewtonPerMeter",
    /** */
    NewtonsPerCentimeter = "NewtonPerCentimeter",
    /** */
    NewtonsPerMillimeter = "NewtonPerMillimeter",
    /** */
    KilogramsForcePerMeter = "KilogramForcePerMeter",
    /** */
    KilogramsForcePerCentimeter = "KilogramForcePerCentimeter",
    /** */
    KilogramsForcePerMillimeter = "KilogramForcePerMillimeter",
    /** */
    TonnesForcePerMeter = "TonneForcePerMeter",
    /** */
    TonnesForcePerCentimeter = "TonneForcePerCentimeter",
    /** */
    TonnesForcePerMillimeter = "TonneForcePerMillimeter",
    /** */
    PoundsForcePerFoot = "PoundForcePerFoot",
    /** */
    PoundsForcePerInch = "PoundForcePerInch",
    /** */
    PoundsForcePerYard = "PoundForcePerYard",
    /** */
    KilopoundsForcePerFoot = "KilopoundForcePerFoot",
    /** */
    KilopoundsForcePerInch = "KilopoundForcePerInch",
    /** */
    NanonewtonsPerMeter = "NanonewtonPerMeter",
    /** */
    MicronewtonsPerMeter = "MicronewtonPerMeter",
    /** */
    MillinewtonsPerMeter = "MillinewtonPerMeter",
    /** */
    CentinewtonsPerMeter = "CentinewtonPerMeter",
    /** */
    DecinewtonsPerMeter = "DecinewtonPerMeter",
    /** */
    DecanewtonsPerMeter = "DecanewtonPerMeter",
    /** */
    KilonewtonsPerMeter = "KilonewtonPerMeter",
    /** */
    MeganewtonsPerMeter = "MeganewtonPerMeter",
    /** */
    NanonewtonsPerCentimeter = "NanonewtonPerCentimeter",
    /** */
    MicronewtonsPerCentimeter = "MicronewtonPerCentimeter",
    /** */
    MillinewtonsPerCentimeter = "MillinewtonPerCentimeter",
    /** */
    CentinewtonsPerCentimeter = "CentinewtonPerCentimeter",
    /** */
    DecinewtonsPerCentimeter = "DecinewtonPerCentimeter",
    /** */
    DecanewtonsPerCentimeter = "DecanewtonPerCentimeter",
    /** */
    KilonewtonsPerCentimeter = "KilonewtonPerCentimeter",
    /** */
    MeganewtonsPerCentimeter = "MeganewtonPerCentimeter",
    /** */
    NanonewtonsPerMillimeter = "NanonewtonPerMillimeter",
    /** */
    MicronewtonsPerMillimeter = "MicronewtonPerMillimeter",
    /** */
    MillinewtonsPerMillimeter = "MillinewtonPerMillimeter",
    /** */
    CentinewtonsPerMillimeter = "CentinewtonPerMillimeter",
    /** */
    DecinewtonsPerMillimeter = "DecinewtonPerMillimeter",
    /** */
    DecanewtonsPerMillimeter = "DecanewtonPerMillimeter",
    /** */
    KilonewtonsPerMillimeter = "KilonewtonPerMillimeter",
    /** */
    MeganewtonsPerMillimeter = "MeganewtonPerMillimeter"
}

/** The magnitude of force per unit length. */
export class ForcePerLength extends BaseUnit {
    protected value: number;
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

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ForcePerLength is NewtonsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ForcePerLengthUnits.NewtonsPerMeter {
        return ForcePerLengthUnits.NewtonsPerMeter
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

    /**
     * Gets the base unit enumeration associated with ForcePerLength
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ForcePerLengthUnits {
        return ForcePerLengthUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ForcePerLengthUnits.NewtonsPerMeter {
        return ForcePerLengthUnits.NewtonsPerMeter;
    }

    /**
     * Create API DTO represent a ForcePerLength unit.
     * @param holdInUnit The specific ForcePerLength unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ForcePerLengthUnits = ForcePerLengthUnits.NewtonsPerMeter): ForcePerLengthDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ForcePerLength unit from an API DTO representation.
     * @param dtoForcePerLength The ForcePerLength API DTO representation
     */
    public static FromDto(dtoForcePerLength: ForcePerLengthDto): ForcePerLength {
        return new ForcePerLength(dtoForcePerLength.value, dtoForcePerLength.unit);
    }

    /**
     * Convert ForcePerLength to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ForcePerLengthUnits): number {
        switch (toUnit) {
            case ForcePerLengthUnits.NewtonsPerMeter: return this.NewtonsPerMeter;
            case ForcePerLengthUnits.NewtonsPerCentimeter: return this.NewtonsPerCentimeter;
            case ForcePerLengthUnits.NewtonsPerMillimeter: return this.NewtonsPerMillimeter;
            case ForcePerLengthUnits.KilogramsForcePerMeter: return this.KilogramsForcePerMeter;
            case ForcePerLengthUnits.KilogramsForcePerCentimeter: return this.KilogramsForcePerCentimeter;
            case ForcePerLengthUnits.KilogramsForcePerMillimeter: return this.KilogramsForcePerMillimeter;
            case ForcePerLengthUnits.TonnesForcePerMeter: return this.TonnesForcePerMeter;
            case ForcePerLengthUnits.TonnesForcePerCentimeter: return this.TonnesForcePerCentimeter;
            case ForcePerLengthUnits.TonnesForcePerMillimeter: return this.TonnesForcePerMillimeter;
            case ForcePerLengthUnits.PoundsForcePerFoot: return this.PoundsForcePerFoot;
            case ForcePerLengthUnits.PoundsForcePerInch: return this.PoundsForcePerInch;
            case ForcePerLengthUnits.PoundsForcePerYard: return this.PoundsForcePerYard;
            case ForcePerLengthUnits.KilopoundsForcePerFoot: return this.KilopoundsForcePerFoot;
            case ForcePerLengthUnits.KilopoundsForcePerInch: return this.KilopoundsForcePerInch;
            case ForcePerLengthUnits.NanonewtonsPerMeter: return this.NanonewtonsPerMeter;
            case ForcePerLengthUnits.MicronewtonsPerMeter: return this.MicronewtonsPerMeter;
            case ForcePerLengthUnits.MillinewtonsPerMeter: return this.MillinewtonsPerMeter;
            case ForcePerLengthUnits.CentinewtonsPerMeter: return this.CentinewtonsPerMeter;
            case ForcePerLengthUnits.DecinewtonsPerMeter: return this.DecinewtonsPerMeter;
            case ForcePerLengthUnits.DecanewtonsPerMeter: return this.DecanewtonsPerMeter;
            case ForcePerLengthUnits.KilonewtonsPerMeter: return this.KilonewtonsPerMeter;
            case ForcePerLengthUnits.MeganewtonsPerMeter: return this.MeganewtonsPerMeter;
            case ForcePerLengthUnits.NanonewtonsPerCentimeter: return this.NanonewtonsPerCentimeter;
            case ForcePerLengthUnits.MicronewtonsPerCentimeter: return this.MicronewtonsPerCentimeter;
            case ForcePerLengthUnits.MillinewtonsPerCentimeter: return this.MillinewtonsPerCentimeter;
            case ForcePerLengthUnits.CentinewtonsPerCentimeter: return this.CentinewtonsPerCentimeter;
            case ForcePerLengthUnits.DecinewtonsPerCentimeter: return this.DecinewtonsPerCentimeter;
            case ForcePerLengthUnits.DecanewtonsPerCentimeter: return this.DecanewtonsPerCentimeter;
            case ForcePerLengthUnits.KilonewtonsPerCentimeter: return this.KilonewtonsPerCentimeter;
            case ForcePerLengthUnits.MeganewtonsPerCentimeter: return this.MeganewtonsPerCentimeter;
            case ForcePerLengthUnits.NanonewtonsPerMillimeter: return this.NanonewtonsPerMillimeter;
            case ForcePerLengthUnits.MicronewtonsPerMillimeter: return this.MicronewtonsPerMillimeter;
            case ForcePerLengthUnits.MillinewtonsPerMillimeter: return this.MillinewtonsPerMillimeter;
            case ForcePerLengthUnits.CentinewtonsPerMillimeter: return this.CentinewtonsPerMillimeter;
            case ForcePerLengthUnits.DecinewtonsPerMillimeter: return this.DecinewtonsPerMillimeter;
            case ForcePerLengthUnits.DecanewtonsPerMillimeter: return this.DecanewtonsPerMillimeter;
            case ForcePerLengthUnits.KilonewtonsPerMillimeter: return this.KilonewtonsPerMillimeter;
            case ForcePerLengthUnits.MeganewtonsPerMillimeter: return this.MeganewtonsPerMillimeter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ForcePerLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ForcePerLengthUnits.NewtonsPerMeter: return this.value;
                case ForcePerLengthUnits.NewtonsPerCentimeter: return super.internalDivide(this.value, 1e2);
                case ForcePerLengthUnits.NewtonsPerMillimeter: return super.internalDivide(this.value, 1e3);
                case ForcePerLengthUnits.KilogramsForcePerMeter: return super.internalDivide(this.value, 9.80665);
                case ForcePerLengthUnits.KilogramsForcePerCentimeter: return super.internalDivide(this.value, 980.665);
                case ForcePerLengthUnits.KilogramsForcePerMillimeter: return super.internalDivide(this.value, 9.80665e3);
                case ForcePerLengthUnits.TonnesForcePerMeter: return super.internalDivide(this.value, 9.80665e3);
                case ForcePerLengthUnits.TonnesForcePerCentimeter: return super.internalDivide(this.value, 9.80665e5);
                case ForcePerLengthUnits.TonnesForcePerMillimeter: return super.internalDivide(this.value, 9.80665e6);
                case ForcePerLengthUnits.PoundsForcePerFoot: {
                    const v4 = super.internalDivide(0.3048, 4.4482216152605);
                    return super.internalMultiply(this.value, v4);
                }
                case ForcePerLengthUnits.PoundsForcePerInch: {
                    const v4 = super.internalDivide(2.54e-2, 4.4482216152605);
                    return super.internalMultiply(this.value, v4);
                }
                case ForcePerLengthUnits.PoundsForcePerYard: {
                    const v4 = super.internalDivide(0.9144, 4.4482216152605);
                    return super.internalMultiply(this.value, v4);
                }
                case ForcePerLengthUnits.KilopoundsForcePerFoot: {
                    const v4 = super.internalDivide(0.3048e-3, 4.4482216152605);
                    return super.internalMultiply(this.value, v4);
                }
                case ForcePerLengthUnits.KilopoundsForcePerInch: {
                    const v4 = super.internalDivide(2.54e-5, 4.4482216152605);
                    return super.internalMultiply(this.value, v4);
                }
                case ForcePerLengthUnits.NanonewtonsPerMeter: return super.internalDivide(this.value, 1e-9);
                case ForcePerLengthUnits.MicronewtonsPerMeter: return super.internalDivide(this.value, 0.000001);
                case ForcePerLengthUnits.MillinewtonsPerMeter: return super.internalDivide(this.value, 0.001);
                case ForcePerLengthUnits.CentinewtonsPerMeter: return super.internalDivide(this.value, 0.01);
                case ForcePerLengthUnits.DecinewtonsPerMeter: return super.internalDivide(this.value, 0.1);
                case ForcePerLengthUnits.DecanewtonsPerMeter: return super.internalDivide(this.value, 10);
                case ForcePerLengthUnits.KilonewtonsPerMeter: return super.internalDivide(this.value, 1000);
                case ForcePerLengthUnits.MeganewtonsPerMeter: return super.internalDivide(this.value, 1000000);
                case ForcePerLengthUnits.NanonewtonsPerCentimeter: {
                    const v3 = super.internalDivide(this.value, 1e2);
                    return super.internalDivide(v3, 1e-9);
                }
                case ForcePerLengthUnits.MicronewtonsPerCentimeter: {
                    const v3 = super.internalDivide(this.value, 1e2);
                    return super.internalDivide(v3, 0.000001);
                }
                case ForcePerLengthUnits.MillinewtonsPerCentimeter: {
                    const v3 = super.internalDivide(this.value, 1e2);
                    return super.internalDivide(v3, 0.001);
                }
                case ForcePerLengthUnits.CentinewtonsPerCentimeter: {
                    const v3 = super.internalDivide(this.value, 1e2);
                    return super.internalDivide(v3, 0.01);
                }
                case ForcePerLengthUnits.DecinewtonsPerCentimeter: {
                    const v3 = super.internalDivide(this.value, 1e2);
                    return super.internalDivide(v3, 0.1);
                }
                case ForcePerLengthUnits.DecanewtonsPerCentimeter: {
                    const v3 = super.internalDivide(this.value, 1e2);
                    return super.internalDivide(v3, 10);
                }
                case ForcePerLengthUnits.KilonewtonsPerCentimeter: {
                    const v3 = super.internalDivide(this.value, 1e2);
                    return super.internalDivide(v3, 1000);
                }
                case ForcePerLengthUnits.MeganewtonsPerCentimeter: {
                    const v3 = super.internalDivide(this.value, 1e2);
                    return super.internalDivide(v3, 1000000);
                }
                case ForcePerLengthUnits.NanonewtonsPerMillimeter: {
                    const v3 = super.internalDivide(this.value, 1e3);
                    return super.internalDivide(v3, 1e-9);
                }
                case ForcePerLengthUnits.MicronewtonsPerMillimeter: {
                    const v3 = super.internalDivide(this.value, 1e3);
                    return super.internalDivide(v3, 0.000001);
                }
                case ForcePerLengthUnits.MillinewtonsPerMillimeter: {
                    const v3 = super.internalDivide(this.value, 1e3);
                    return super.internalDivide(v3, 0.001);
                }
                case ForcePerLengthUnits.CentinewtonsPerMillimeter: {
                    const v3 = super.internalDivide(this.value, 1e3);
                    return super.internalDivide(v3, 0.01);
                }
                case ForcePerLengthUnits.DecinewtonsPerMillimeter: {
                    const v3 = super.internalDivide(this.value, 1e3);
                    return super.internalDivide(v3, 0.1);
                }
                case ForcePerLengthUnits.DecanewtonsPerMillimeter: {
                    const v3 = super.internalDivide(this.value, 1e3);
                    return super.internalDivide(v3, 10);
                }
                case ForcePerLengthUnits.KilonewtonsPerMillimeter: {
                    const v3 = super.internalDivide(this.value, 1e3);
                    return super.internalDivide(v3, 1000);
                }
                case ForcePerLengthUnits.MeganewtonsPerMillimeter: {
                    const v3 = super.internalDivide(this.value, 1e3);
                    return super.internalDivide(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ForcePerLengthUnits.NewtonsPerMeter: return this.value;
            case ForcePerLengthUnits.NewtonsPerCentimeter: return this.value / 1e2;
            case ForcePerLengthUnits.NewtonsPerMillimeter: return this.value / 1e3;
            case ForcePerLengthUnits.KilogramsForcePerMeter: return this.value / 9.80665;
            case ForcePerLengthUnits.KilogramsForcePerCentimeter: return this.value / 980.665;
            case ForcePerLengthUnits.KilogramsForcePerMillimeter: return this.value / 9.80665e3;
            case ForcePerLengthUnits.TonnesForcePerMeter: return this.value / 9.80665e3;
            case ForcePerLengthUnits.TonnesForcePerCentimeter: return this.value / 9.80665e5;
            case ForcePerLengthUnits.TonnesForcePerMillimeter: return this.value / 9.80665e6;
            case ForcePerLengthUnits.PoundsForcePerFoot: return this.value * 0.3048 / 4.4482216152605;
            case ForcePerLengthUnits.PoundsForcePerInch: return this.value * 2.54e-2 / 4.4482216152605;
            case ForcePerLengthUnits.PoundsForcePerYard: return this.value * 0.9144 / 4.4482216152605;
            case ForcePerLengthUnits.KilopoundsForcePerFoot: return this.value * 0.3048e-3 / 4.4482216152605;
            case ForcePerLengthUnits.KilopoundsForcePerInch: return this.value * 2.54e-5 / 4.4482216152605;
            case ForcePerLengthUnits.NanonewtonsPerMeter: return (this.value) / 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMeter: return (this.value) / 0.000001;
            case ForcePerLengthUnits.MillinewtonsPerMeter: return (this.value) / 0.001;
            case ForcePerLengthUnits.CentinewtonsPerMeter: return (this.value) / 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMeter: return (this.value) / 0.1;
            case ForcePerLengthUnits.DecanewtonsPerMeter: return (this.value) / 10;
            case ForcePerLengthUnits.KilonewtonsPerMeter: return (this.value) / 1000;
            case ForcePerLengthUnits.MeganewtonsPerMeter: return (this.value) / 1000000;
            case ForcePerLengthUnits.NanonewtonsPerCentimeter: return (this.value / 1e2) / 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerCentimeter: return (this.value / 1e2) / 0.000001;
            case ForcePerLengthUnits.MillinewtonsPerCentimeter: return (this.value / 1e2) / 0.001;
            case ForcePerLengthUnits.CentinewtonsPerCentimeter: return (this.value / 1e2) / 0.01;
            case ForcePerLengthUnits.DecinewtonsPerCentimeter: return (this.value / 1e2) / 0.1;
            case ForcePerLengthUnits.DecanewtonsPerCentimeter: return (this.value / 1e2) / 10;
            case ForcePerLengthUnits.KilonewtonsPerCentimeter: return (this.value / 1e2) / 1000;
            case ForcePerLengthUnits.MeganewtonsPerCentimeter: return (this.value / 1e2) / 1000000;
            case ForcePerLengthUnits.NanonewtonsPerMillimeter: return (this.value / 1e3) / 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMillimeter: return (this.value / 1e3) / 0.000001;
            case ForcePerLengthUnits.MillinewtonsPerMillimeter: return (this.value / 1e3) / 0.001;
            case ForcePerLengthUnits.CentinewtonsPerMillimeter: return (this.value / 1e3) / 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMillimeter: return (this.value / 1e3) / 0.1;
            case ForcePerLengthUnits.DecanewtonsPerMillimeter: return (this.value / 1e3) / 10;
            case ForcePerLengthUnits.KilonewtonsPerMillimeter: return (this.value / 1e3) / 1000;
            case ForcePerLengthUnits.MeganewtonsPerMillimeter: return (this.value / 1e3) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ForcePerLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ForcePerLengthUnits.NewtonsPerMeter: return value;
                case ForcePerLengthUnits.NewtonsPerCentimeter: return super.internalMultiply(value, 1e2);
                case ForcePerLengthUnits.NewtonsPerMillimeter: return super.internalMultiply(value, 1e3);
                case ForcePerLengthUnits.KilogramsForcePerMeter: return super.internalMultiply(value, 9.80665);
                case ForcePerLengthUnits.KilogramsForcePerCentimeter: return super.internalMultiply(value, 980.665);
                case ForcePerLengthUnits.KilogramsForcePerMillimeter: return super.internalMultiply(value, 9.80665e3);
                case ForcePerLengthUnits.TonnesForcePerMeter: return super.internalMultiply(value, 9.80665e3);
                case ForcePerLengthUnits.TonnesForcePerCentimeter: return super.internalMultiply(value, 9.80665e5);
                case ForcePerLengthUnits.TonnesForcePerMillimeter: return super.internalMultiply(value, 9.80665e6);
                case ForcePerLengthUnits.PoundsForcePerFoot: {
                    const v4 = super.internalDivide(4.4482216152605, 0.3048);
                    return super.internalMultiply(value, v4);
                }
                case ForcePerLengthUnits.PoundsForcePerInch: {
                    const v4 = super.internalDivide(4.4482216152605, 2.54e-2);
                    return super.internalMultiply(value, v4);
                }
                case ForcePerLengthUnits.PoundsForcePerYard: {
                    const v4 = super.internalDivide(4.4482216152605, 0.9144);
                    return super.internalMultiply(value, v4);
                }
                case ForcePerLengthUnits.KilopoundsForcePerFoot: {
                    const v4 = super.internalDivide(4.4482216152605, 0.3048e-3);
                    return super.internalMultiply(value, v4);
                }
                case ForcePerLengthUnits.KilopoundsForcePerInch: {
                    const v4 = super.internalDivide(4.4482216152605, 2.54e-5);
                    return super.internalMultiply(value, v4);
                }
                case ForcePerLengthUnits.NanonewtonsPerMeter: return super.internalMultiply(value, 1e-9);
                case ForcePerLengthUnits.MicronewtonsPerMeter: return super.internalMultiply(value, 0.000001);
                case ForcePerLengthUnits.MillinewtonsPerMeter: return super.internalMultiply(value, 0.001);
                case ForcePerLengthUnits.CentinewtonsPerMeter: return super.internalMultiply(value, 0.01);
                case ForcePerLengthUnits.DecinewtonsPerMeter: return super.internalMultiply(value, 0.1);
                case ForcePerLengthUnits.DecanewtonsPerMeter: return super.internalMultiply(value, 10);
                case ForcePerLengthUnits.KilonewtonsPerMeter: return super.internalMultiply(value, 1000);
                case ForcePerLengthUnits.MeganewtonsPerMeter: return super.internalMultiply(value, 1000000);
                case ForcePerLengthUnits.NanonewtonsPerCentimeter: {
                    const v3 = super.internalMultiply(value, 1e2);
                    return super.internalMultiply(v3, 1e-9);
                }
                case ForcePerLengthUnits.MicronewtonsPerCentimeter: {
                    const v3 = super.internalMultiply(value, 1e2);
                    return super.internalMultiply(v3, 0.000001);
                }
                case ForcePerLengthUnits.MillinewtonsPerCentimeter: {
                    const v3 = super.internalMultiply(value, 1e2);
                    return super.internalMultiply(v3, 0.001);
                }
                case ForcePerLengthUnits.CentinewtonsPerCentimeter: {
                    const v3 = super.internalMultiply(value, 1e2);
                    return super.internalMultiply(v3, 0.01);
                }
                case ForcePerLengthUnits.DecinewtonsPerCentimeter: {
                    const v3 = super.internalMultiply(value, 1e2);
                    return super.internalMultiply(v3, 0.1);
                }
                case ForcePerLengthUnits.DecanewtonsPerCentimeter: {
                    const v3 = super.internalMultiply(value, 1e2);
                    return super.internalMultiply(v3, 10);
                }
                case ForcePerLengthUnits.KilonewtonsPerCentimeter: {
                    const v3 = super.internalMultiply(value, 1e2);
                    return super.internalMultiply(v3, 1000);
                }
                case ForcePerLengthUnits.MeganewtonsPerCentimeter: {
                    const v3 = super.internalMultiply(value, 1e2);
                    return super.internalMultiply(v3, 1000000);
                }
                case ForcePerLengthUnits.NanonewtonsPerMillimeter: {
                    const v3 = super.internalMultiply(value, 1e3);
                    return super.internalMultiply(v3, 1e-9);
                }
                case ForcePerLengthUnits.MicronewtonsPerMillimeter: {
                    const v3 = super.internalMultiply(value, 1e3);
                    return super.internalMultiply(v3, 0.000001);
                }
                case ForcePerLengthUnits.MillinewtonsPerMillimeter: {
                    const v3 = super.internalMultiply(value, 1e3);
                    return super.internalMultiply(v3, 0.001);
                }
                case ForcePerLengthUnits.CentinewtonsPerMillimeter: {
                    const v3 = super.internalMultiply(value, 1e3);
                    return super.internalMultiply(v3, 0.01);
                }
                case ForcePerLengthUnits.DecinewtonsPerMillimeter: {
                    const v3 = super.internalMultiply(value, 1e3);
                    return super.internalMultiply(v3, 0.1);
                }
                case ForcePerLengthUnits.DecanewtonsPerMillimeter: {
                    const v3 = super.internalMultiply(value, 1e3);
                    return super.internalMultiply(v3, 10);
                }
                case ForcePerLengthUnits.KilonewtonsPerMillimeter: {
                    const v3 = super.internalMultiply(value, 1e3);
                    return super.internalMultiply(v3, 1000);
                }
                case ForcePerLengthUnits.MeganewtonsPerMillimeter: {
                    const v3 = super.internalMultiply(value, 1e3);
                    return super.internalMultiply(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ForcePerLengthUnits.NewtonsPerMeter: return value;
            case ForcePerLengthUnits.NewtonsPerCentimeter: return value * 1e2;
            case ForcePerLengthUnits.NewtonsPerMillimeter: return value * 1e3;
            case ForcePerLengthUnits.KilogramsForcePerMeter: return value * 9.80665;
            case ForcePerLengthUnits.KilogramsForcePerCentimeter: return value * 980.665;
            case ForcePerLengthUnits.KilogramsForcePerMillimeter: return value * 9.80665e3;
            case ForcePerLengthUnits.TonnesForcePerMeter: return value * 9.80665e3;
            case ForcePerLengthUnits.TonnesForcePerCentimeter: return value * 9.80665e5;
            case ForcePerLengthUnits.TonnesForcePerMillimeter: return value * 9.80665e6;
            case ForcePerLengthUnits.PoundsForcePerFoot: return value * 4.4482216152605 / 0.3048;
            case ForcePerLengthUnits.PoundsForcePerInch: return value * 4.4482216152605 / 2.54e-2;
            case ForcePerLengthUnits.PoundsForcePerYard: return value * 4.4482216152605 / 0.9144;
            case ForcePerLengthUnits.KilopoundsForcePerFoot: return value * 4.4482216152605 / 0.3048e-3;
            case ForcePerLengthUnits.KilopoundsForcePerInch: return value * 4.4482216152605 / 2.54e-5;
            case ForcePerLengthUnits.NanonewtonsPerMeter: return (value) * 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMeter: return (value) * 0.000001;
            case ForcePerLengthUnits.MillinewtonsPerMeter: return (value) * 0.001;
            case ForcePerLengthUnits.CentinewtonsPerMeter: return (value) * 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMeter: return (value) * 0.1;
            case ForcePerLengthUnits.DecanewtonsPerMeter: return (value) * 10;
            case ForcePerLengthUnits.KilonewtonsPerMeter: return (value) * 1000;
            case ForcePerLengthUnits.MeganewtonsPerMeter: return (value) * 1000000;
            case ForcePerLengthUnits.NanonewtonsPerCentimeter: return (value * 1e2) * 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerCentimeter: return (value * 1e2) * 0.000001;
            case ForcePerLengthUnits.MillinewtonsPerCentimeter: return (value * 1e2) * 0.001;
            case ForcePerLengthUnits.CentinewtonsPerCentimeter: return (value * 1e2) * 0.01;
            case ForcePerLengthUnits.DecinewtonsPerCentimeter: return (value * 1e2) * 0.1;
            case ForcePerLengthUnits.DecanewtonsPerCentimeter: return (value * 1e2) * 10;
            case ForcePerLengthUnits.KilonewtonsPerCentimeter: return (value * 1e2) * 1000;
            case ForcePerLengthUnits.MeganewtonsPerCentimeter: return (value * 1e2) * 1000000;
            case ForcePerLengthUnits.NanonewtonsPerMillimeter: return (value * 1e3) * 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMillimeter: return (value * 1e3) * 0.000001;
            case ForcePerLengthUnits.MillinewtonsPerMillimeter: return (value * 1e3) * 0.001;
            case ForcePerLengthUnits.CentinewtonsPerMillimeter: return (value * 1e3) * 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMillimeter: return (value * 1e3) * 0.1;
            case ForcePerLengthUnits.DecanewtonsPerMillimeter: return (value * 1e3) * 10;
            case ForcePerLengthUnits.KilonewtonsPerMillimeter: return (value * 1e3) * 1000;
            case ForcePerLengthUnits.MeganewtonsPerMillimeter: return (value * 1e3) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ForcePerLength to string.
     * Note! the default format for ForcePerLength is NewtonsPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ForcePerLength.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ForcePerLength.
     */
    public toString(unit: ForcePerLengthUnits = ForcePerLengthUnits.NewtonsPerMeter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ForcePerLengthUnits.NewtonsPerMeter:
                return super.truncateFractionDigits(this.NewtonsPerMeter, options as ToStringOptions) + ` N/m`;
            case ForcePerLengthUnits.NewtonsPerCentimeter:
                return super.truncateFractionDigits(this.NewtonsPerCentimeter, options as ToStringOptions) + ` N/cm`;
            case ForcePerLengthUnits.NewtonsPerMillimeter:
                return super.truncateFractionDigits(this.NewtonsPerMillimeter, options as ToStringOptions) + ` N/mm`;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return super.truncateFractionDigits(this.KilogramsForcePerMeter, options as ToStringOptions) + ` kgf/m`;
            case ForcePerLengthUnits.KilogramsForcePerCentimeter:
                return super.truncateFractionDigits(this.KilogramsForcePerCentimeter, options as ToStringOptions) + ` kgf/cm`;
            case ForcePerLengthUnits.KilogramsForcePerMillimeter:
                return super.truncateFractionDigits(this.KilogramsForcePerMillimeter, options as ToStringOptions) + ` kgf/mm`;
            case ForcePerLengthUnits.TonnesForcePerMeter:
                return super.truncateFractionDigits(this.TonnesForcePerMeter, options as ToStringOptions) + ` tf/m`;
            case ForcePerLengthUnits.TonnesForcePerCentimeter:
                return super.truncateFractionDigits(this.TonnesForcePerCentimeter, options as ToStringOptions) + ` tf/cm`;
            case ForcePerLengthUnits.TonnesForcePerMillimeter:
                return super.truncateFractionDigits(this.TonnesForcePerMillimeter, options as ToStringOptions) + ` tf/mm`;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return super.truncateFractionDigits(this.PoundsForcePerFoot, options as ToStringOptions) + ` lbf/ft`;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return super.truncateFractionDigits(this.PoundsForcePerInch, options as ToStringOptions) + ` lbf/in`;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return super.truncateFractionDigits(this.PoundsForcePerYard, options as ToStringOptions) + ` lbf/yd`;
            case ForcePerLengthUnits.KilopoundsForcePerFoot:
                return super.truncateFractionDigits(this.KilopoundsForcePerFoot, options as ToStringOptions) + ` kipf/ft`;
            case ForcePerLengthUnits.KilopoundsForcePerInch:
                return super.truncateFractionDigits(this.KilopoundsForcePerInch, options as ToStringOptions) + ` kipf/in`;
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return super.truncateFractionDigits(this.NanonewtonsPerMeter, options as ToStringOptions) + ` nN/m`;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return super.truncateFractionDigits(this.MicronewtonsPerMeter, options as ToStringOptions) + ` μN/m`;
            case ForcePerLengthUnits.MillinewtonsPerMeter:
                return super.truncateFractionDigits(this.MillinewtonsPerMeter, options as ToStringOptions) + ` mN/m`;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return super.truncateFractionDigits(this.CentinewtonsPerMeter, options as ToStringOptions) + ` cN/m`;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return super.truncateFractionDigits(this.DecinewtonsPerMeter, options as ToStringOptions) + ` dN/m`;
            case ForcePerLengthUnits.DecanewtonsPerMeter:
                return super.truncateFractionDigits(this.DecanewtonsPerMeter, options as ToStringOptions) + ` daN/m`;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return super.truncateFractionDigits(this.KilonewtonsPerMeter, options as ToStringOptions) + ` kN/m`;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return super.truncateFractionDigits(this.MeganewtonsPerMeter, options as ToStringOptions) + ` MN/m`;
            case ForcePerLengthUnits.NanonewtonsPerCentimeter:
                return super.truncateFractionDigits(this.NanonewtonsPerCentimeter, options as ToStringOptions) + ` nN/cm`;
            case ForcePerLengthUnits.MicronewtonsPerCentimeter:
                return super.truncateFractionDigits(this.MicronewtonsPerCentimeter, options as ToStringOptions) + ` μN/cm`;
            case ForcePerLengthUnits.MillinewtonsPerCentimeter:
                return super.truncateFractionDigits(this.MillinewtonsPerCentimeter, options as ToStringOptions) + ` mN/cm`;
            case ForcePerLengthUnits.CentinewtonsPerCentimeter:
                return super.truncateFractionDigits(this.CentinewtonsPerCentimeter, options as ToStringOptions) + ` cN/cm`;
            case ForcePerLengthUnits.DecinewtonsPerCentimeter:
                return super.truncateFractionDigits(this.DecinewtonsPerCentimeter, options as ToStringOptions) + ` dN/cm`;
            case ForcePerLengthUnits.DecanewtonsPerCentimeter:
                return super.truncateFractionDigits(this.DecanewtonsPerCentimeter, options as ToStringOptions) + ` daN/cm`;
            case ForcePerLengthUnits.KilonewtonsPerCentimeter:
                return super.truncateFractionDigits(this.KilonewtonsPerCentimeter, options as ToStringOptions) + ` kN/cm`;
            case ForcePerLengthUnits.MeganewtonsPerCentimeter:
                return super.truncateFractionDigits(this.MeganewtonsPerCentimeter, options as ToStringOptions) + ` MN/cm`;
            case ForcePerLengthUnits.NanonewtonsPerMillimeter:
                return super.truncateFractionDigits(this.NanonewtonsPerMillimeter, options as ToStringOptions) + ` nN/mm`;
            case ForcePerLengthUnits.MicronewtonsPerMillimeter:
                return super.truncateFractionDigits(this.MicronewtonsPerMillimeter, options as ToStringOptions) + ` μN/mm`;
            case ForcePerLengthUnits.MillinewtonsPerMillimeter:
                return super.truncateFractionDigits(this.MillinewtonsPerMillimeter, options as ToStringOptions) + ` mN/mm`;
            case ForcePerLengthUnits.CentinewtonsPerMillimeter:
                return super.truncateFractionDigits(this.CentinewtonsPerMillimeter, options as ToStringOptions) + ` cN/mm`;
            case ForcePerLengthUnits.DecinewtonsPerMillimeter:
                return super.truncateFractionDigits(this.DecinewtonsPerMillimeter, options as ToStringOptions) + ` dN/mm`;
            case ForcePerLengthUnits.DecanewtonsPerMillimeter:
                return super.truncateFractionDigits(this.DecanewtonsPerMillimeter, options as ToStringOptions) + ` daN/mm`;
            case ForcePerLengthUnits.KilonewtonsPerMillimeter:
                return super.truncateFractionDigits(this.KilonewtonsPerMillimeter, options as ToStringOptions) + ` kN/mm`;
            case ForcePerLengthUnits.MeganewtonsPerMillimeter:
                return super.truncateFractionDigits(this.MeganewtonsPerMillimeter, options as ToStringOptions) + ` MN/mm`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ForcePerLength unit abbreviation.
     * Note! the default abbreviation for ForcePerLength is NewtonsPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ForcePerLength.
     * @returns The abbreviation string of ForcePerLength.
     */
    public getUnitAbbreviation(unitAbbreviation: ForcePerLengthUnits = ForcePerLengthUnits.NewtonsPerMeter): string {

        switch (unitAbbreviation) {
            
            case ForcePerLengthUnits.NewtonsPerMeter:
                return `N/m`;
            case ForcePerLengthUnits.NewtonsPerCentimeter:
                return `N/cm`;
            case ForcePerLengthUnits.NewtonsPerMillimeter:
                return `N/mm`;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return `kgf/m`;
            case ForcePerLengthUnits.KilogramsForcePerCentimeter:
                return `kgf/cm`;
            case ForcePerLengthUnits.KilogramsForcePerMillimeter:
                return `kgf/mm`;
            case ForcePerLengthUnits.TonnesForcePerMeter:
                return `tf/m`;
            case ForcePerLengthUnits.TonnesForcePerCentimeter:
                return `tf/cm`;
            case ForcePerLengthUnits.TonnesForcePerMillimeter:
                return `tf/mm`;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return `lbf/ft`;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return `lbf/in`;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return `lbf/yd`;
            case ForcePerLengthUnits.KilopoundsForcePerFoot:
                return `kipf/ft`;
            case ForcePerLengthUnits.KilopoundsForcePerInch:
                return `kipf/in`;
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return `nN/m`;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return `μN/m`;
            case ForcePerLengthUnits.MillinewtonsPerMeter:
                return `mN/m`;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return `cN/m`;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return `dN/m`;
            case ForcePerLengthUnits.DecanewtonsPerMeter:
                return `daN/m`;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return `kN/m`;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return `MN/m`;
            case ForcePerLengthUnits.NanonewtonsPerCentimeter:
                return `nN/cm`;
            case ForcePerLengthUnits.MicronewtonsPerCentimeter:
                return `μN/cm`;
            case ForcePerLengthUnits.MillinewtonsPerCentimeter:
                return `mN/cm`;
            case ForcePerLengthUnits.CentinewtonsPerCentimeter:
                return `cN/cm`;
            case ForcePerLengthUnits.DecinewtonsPerCentimeter:
                return `dN/cm`;
            case ForcePerLengthUnits.DecanewtonsPerCentimeter:
                return `daN/cm`;
            case ForcePerLengthUnits.KilonewtonsPerCentimeter:
                return `kN/cm`;
            case ForcePerLengthUnits.MeganewtonsPerCentimeter:
                return `MN/cm`;
            case ForcePerLengthUnits.NanonewtonsPerMillimeter:
                return `nN/mm`;
            case ForcePerLengthUnits.MicronewtonsPerMillimeter:
                return `μN/mm`;
            case ForcePerLengthUnits.MillinewtonsPerMillimeter:
                return `mN/mm`;
            case ForcePerLengthUnits.CentinewtonsPerMillimeter:
                return `cN/mm`;
            case ForcePerLengthUnits.DecinewtonsPerMillimeter:
                return `dN/mm`;
            case ForcePerLengthUnits.DecanewtonsPerMillimeter:
                return `daN/mm`;
            case ForcePerLengthUnits.KilonewtonsPerMillimeter:
                return `kN/mm`;
            case ForcePerLengthUnits.MeganewtonsPerMillimeter:
                return `MN/mm`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ForcePerLength are equals to the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns True if the given ForcePerLength are equal to the current ForcePerLength.
     */
    public equals(forcePerLength: ForcePerLength): boolean {
        return super.internalEquals(this.value, forcePerLength.BaseValue);
    }

    /**
     * Compare the given ForcePerLength against the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns 0 if they are equal, -1 if the current ForcePerLength is less then other, 1 if the current ForcePerLength is greater then other.
     */
    public compareTo(forcePerLength: ForcePerLength): number {
        return super.internalCompareTo(this.value, forcePerLength.BaseValue);
    }

    /**
     * Add the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public add(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(super.internalAdd(this.value, forcePerLength.BaseValue))
    }

    /**
     * Subtract the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public subtract(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(super.internalSubtract(this.value, forcePerLength.BaseValue))
    }

    /**
     * Multiply the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public multiply(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(super.internalMultiply(this.value, forcePerLength.BaseValue))
    }

    /**
     * Divide the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public divide(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(super.internalDivide(this.value, forcePerLength.BaseValue))
    }

    /**
     * Modulo the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public modulo(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(super.internalModulo(this.value, forcePerLength.BaseValue))
    }

    /**
     * Pow the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public pow(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(super.internalPow(this.value, forcePerLength.BaseValue))
    }
}
