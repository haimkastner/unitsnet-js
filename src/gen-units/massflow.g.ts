import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a MassFlow */
export interface MassFlowDto {
    /** The value of the MassFlow */
    value: number;
    /**  The specific unit that the MassFlow value is representing */
    unit: MassFlowUnits;
}

/** MassFlowUnits enumeration */
export enum MassFlowUnits {
    /** */
    GramsPerSecond = "GramPerSecond",
    /** */
    GramsPerDay = "GramPerDay",
    /** */
    GramsPerHour = "GramPerHour",
    /** */
    KilogramsPerHour = "KilogramPerHour",
    /** */
    KilogramsPerMinute = "KilogramPerMinute",
    /** */
    TonnesPerHour = "TonnePerHour",
    /** */
    PoundsPerDay = "PoundPerDay",
    /** */
    PoundsPerHour = "PoundPerHour",
    /** */
    PoundsPerMinute = "PoundPerMinute",
    /** */
    PoundsPerSecond = "PoundPerSecond",
    /** */
    TonnesPerDay = "TonnePerDay",
    /** */
    ShortTonsPerHour = "ShortTonPerHour",
    /** */
    NanogramsPerSecond = "NanogramPerSecond",
    /** */
    MicrogramsPerSecond = "MicrogramPerSecond",
    /** */
    MilligramsPerSecond = "MilligramPerSecond",
    /** */
    CentigramsPerSecond = "CentigramPerSecond",
    /** */
    DecigramsPerSecond = "DecigramPerSecond",
    /** */
    DecagramsPerSecond = "DecagramPerSecond",
    /** */
    HectogramsPerSecond = "HectogramPerSecond",
    /** */
    KilogramsPerSecond = "KilogramPerSecond",
    /** */
    NanogramsPerDay = "NanogramPerDay",
    /** */
    MicrogramsPerDay = "MicrogramPerDay",
    /** */
    MilligramsPerDay = "MilligramPerDay",
    /** */
    CentigramsPerDay = "CentigramPerDay",
    /** */
    DecigramsPerDay = "DecigramPerDay",
    /** */
    DecagramsPerDay = "DecagramPerDay",
    /** */
    HectogramsPerDay = "HectogramPerDay",
    /** */
    KilogramsPerDay = "KilogramPerDay",
    /** */
    MegagramsPerDay = "MegagramPerDay",
    /** */
    MegapoundsPerDay = "MegapoundPerDay",
    /** */
    MegapoundsPerHour = "MegapoundPerHour",
    /** */
    MegapoundsPerMinute = "MegapoundPerMinute",
    /** */
    MegapoundsPerSecond = "MegapoundPerSecond"
}

/** Mass flow is the ratio of the mass change to the time during which the change occurred (value of mass changes per unit time). */
export class MassFlow extends BaseUnit {
    protected value: number;
    private gramspersecondLazy: number | null = null;
    private gramsperdayLazy: number | null = null;
    private gramsperhourLazy: number | null = null;
    private kilogramsperhourLazy: number | null = null;
    private kilogramsperminuteLazy: number | null = null;
    private tonnesperhourLazy: number | null = null;
    private poundsperdayLazy: number | null = null;
    private poundsperhourLazy: number | null = null;
    private poundsperminuteLazy: number | null = null;
    private poundspersecondLazy: number | null = null;
    private tonnesperdayLazy: number | null = null;
    private shorttonsperhourLazy: number | null = null;
    private nanogramspersecondLazy: number | null = null;
    private microgramspersecondLazy: number | null = null;
    private milligramspersecondLazy: number | null = null;
    private centigramspersecondLazy: number | null = null;
    private decigramspersecondLazy: number | null = null;
    private decagramspersecondLazy: number | null = null;
    private hectogramspersecondLazy: number | null = null;
    private kilogramspersecondLazy: number | null = null;
    private nanogramsperdayLazy: number | null = null;
    private microgramsperdayLazy: number | null = null;
    private milligramsperdayLazy: number | null = null;
    private centigramsperdayLazy: number | null = null;
    private decigramsperdayLazy: number | null = null;
    private decagramsperdayLazy: number | null = null;
    private hectogramsperdayLazy: number | null = null;
    private kilogramsperdayLazy: number | null = null;
    private megagramsperdayLazy: number | null = null;
    private megapoundsperdayLazy: number | null = null;
    private megapoundsperhourLazy: number | null = null;
    private megapoundsperminuteLazy: number | null = null;
    private megapoundspersecondLazy: number | null = null;

    /**
     * Create a new MassFlow.
     * @param value The value.
     * @param fromUnit The ‘MassFlow’ unit to create from.
     * The default unit is GramsPerSecond
     */
    public constructor(value: number, fromUnit: MassFlowUnits = MassFlowUnits.GramsPerSecond) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MassFlow is GramsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): MassFlowUnits.GramsPerSecond {
        return MassFlowUnits.GramsPerSecond
    }

    /** */
    public get GramsPerSecond(): number {
        if(this.gramspersecondLazy !== null){
            return this.gramspersecondLazy;
        }
        return this.gramspersecondLazy = this.convertFromBase(MassFlowUnits.GramsPerSecond);
    }

    /** */
    public get GramsPerDay(): number {
        if(this.gramsperdayLazy !== null){
            return this.gramsperdayLazy;
        }
        return this.gramsperdayLazy = this.convertFromBase(MassFlowUnits.GramsPerDay);
    }

    /** */
    public get GramsPerHour(): number {
        if(this.gramsperhourLazy !== null){
            return this.gramsperhourLazy;
        }
        return this.gramsperhourLazy = this.convertFromBase(MassFlowUnits.GramsPerHour);
    }

    /** */
    public get KilogramsPerHour(): number {
        if(this.kilogramsperhourLazy !== null){
            return this.kilogramsperhourLazy;
        }
        return this.kilogramsperhourLazy = this.convertFromBase(MassFlowUnits.KilogramsPerHour);
    }

    /** */
    public get KilogramsPerMinute(): number {
        if(this.kilogramsperminuteLazy !== null){
            return this.kilogramsperminuteLazy;
        }
        return this.kilogramsperminuteLazy = this.convertFromBase(MassFlowUnits.KilogramsPerMinute);
    }

    /** */
    public get TonnesPerHour(): number {
        if(this.tonnesperhourLazy !== null){
            return this.tonnesperhourLazy;
        }
        return this.tonnesperhourLazy = this.convertFromBase(MassFlowUnits.TonnesPerHour);
    }

    /** */
    public get PoundsPerDay(): number {
        if(this.poundsperdayLazy !== null){
            return this.poundsperdayLazy;
        }
        return this.poundsperdayLazy = this.convertFromBase(MassFlowUnits.PoundsPerDay);
    }

    /** */
    public get PoundsPerHour(): number {
        if(this.poundsperhourLazy !== null){
            return this.poundsperhourLazy;
        }
        return this.poundsperhourLazy = this.convertFromBase(MassFlowUnits.PoundsPerHour);
    }

    /** */
    public get PoundsPerMinute(): number {
        if(this.poundsperminuteLazy !== null){
            return this.poundsperminuteLazy;
        }
        return this.poundsperminuteLazy = this.convertFromBase(MassFlowUnits.PoundsPerMinute);
    }

    /** */
    public get PoundsPerSecond(): number {
        if(this.poundspersecondLazy !== null){
            return this.poundspersecondLazy;
        }
        return this.poundspersecondLazy = this.convertFromBase(MassFlowUnits.PoundsPerSecond);
    }

    /** */
    public get TonnesPerDay(): number {
        if(this.tonnesperdayLazy !== null){
            return this.tonnesperdayLazy;
        }
        return this.tonnesperdayLazy = this.convertFromBase(MassFlowUnits.TonnesPerDay);
    }

    /** */
    public get ShortTonsPerHour(): number {
        if(this.shorttonsperhourLazy !== null){
            return this.shorttonsperhourLazy;
        }
        return this.shorttonsperhourLazy = this.convertFromBase(MassFlowUnits.ShortTonsPerHour);
    }

    /** */
    public get NanogramsPerSecond(): number {
        if(this.nanogramspersecondLazy !== null){
            return this.nanogramspersecondLazy;
        }
        return this.nanogramspersecondLazy = this.convertFromBase(MassFlowUnits.NanogramsPerSecond);
    }

    /** */
    public get MicrogramsPerSecond(): number {
        if(this.microgramspersecondLazy !== null){
            return this.microgramspersecondLazy;
        }
        return this.microgramspersecondLazy = this.convertFromBase(MassFlowUnits.MicrogramsPerSecond);
    }

    /** */
    public get MilligramsPerSecond(): number {
        if(this.milligramspersecondLazy !== null){
            return this.milligramspersecondLazy;
        }
        return this.milligramspersecondLazy = this.convertFromBase(MassFlowUnits.MilligramsPerSecond);
    }

    /** */
    public get CentigramsPerSecond(): number {
        if(this.centigramspersecondLazy !== null){
            return this.centigramspersecondLazy;
        }
        return this.centigramspersecondLazy = this.convertFromBase(MassFlowUnits.CentigramsPerSecond);
    }

    /** */
    public get DecigramsPerSecond(): number {
        if(this.decigramspersecondLazy !== null){
            return this.decigramspersecondLazy;
        }
        return this.decigramspersecondLazy = this.convertFromBase(MassFlowUnits.DecigramsPerSecond);
    }

    /** */
    public get DecagramsPerSecond(): number {
        if(this.decagramspersecondLazy !== null){
            return this.decagramspersecondLazy;
        }
        return this.decagramspersecondLazy = this.convertFromBase(MassFlowUnits.DecagramsPerSecond);
    }

    /** */
    public get HectogramsPerSecond(): number {
        if(this.hectogramspersecondLazy !== null){
            return this.hectogramspersecondLazy;
        }
        return this.hectogramspersecondLazy = this.convertFromBase(MassFlowUnits.HectogramsPerSecond);
    }

    /** */
    public get KilogramsPerSecond(): number {
        if(this.kilogramspersecondLazy !== null){
            return this.kilogramspersecondLazy;
        }
        return this.kilogramspersecondLazy = this.convertFromBase(MassFlowUnits.KilogramsPerSecond);
    }

    /** */
    public get NanogramsPerDay(): number {
        if(this.nanogramsperdayLazy !== null){
            return this.nanogramsperdayLazy;
        }
        return this.nanogramsperdayLazy = this.convertFromBase(MassFlowUnits.NanogramsPerDay);
    }

    /** */
    public get MicrogramsPerDay(): number {
        if(this.microgramsperdayLazy !== null){
            return this.microgramsperdayLazy;
        }
        return this.microgramsperdayLazy = this.convertFromBase(MassFlowUnits.MicrogramsPerDay);
    }

    /** */
    public get MilligramsPerDay(): number {
        if(this.milligramsperdayLazy !== null){
            return this.milligramsperdayLazy;
        }
        return this.milligramsperdayLazy = this.convertFromBase(MassFlowUnits.MilligramsPerDay);
    }

    /** */
    public get CentigramsPerDay(): number {
        if(this.centigramsperdayLazy !== null){
            return this.centigramsperdayLazy;
        }
        return this.centigramsperdayLazy = this.convertFromBase(MassFlowUnits.CentigramsPerDay);
    }

    /** */
    public get DecigramsPerDay(): number {
        if(this.decigramsperdayLazy !== null){
            return this.decigramsperdayLazy;
        }
        return this.decigramsperdayLazy = this.convertFromBase(MassFlowUnits.DecigramsPerDay);
    }

    /** */
    public get DecagramsPerDay(): number {
        if(this.decagramsperdayLazy !== null){
            return this.decagramsperdayLazy;
        }
        return this.decagramsperdayLazy = this.convertFromBase(MassFlowUnits.DecagramsPerDay);
    }

    /** */
    public get HectogramsPerDay(): number {
        if(this.hectogramsperdayLazy !== null){
            return this.hectogramsperdayLazy;
        }
        return this.hectogramsperdayLazy = this.convertFromBase(MassFlowUnits.HectogramsPerDay);
    }

    /** */
    public get KilogramsPerDay(): number {
        if(this.kilogramsperdayLazy !== null){
            return this.kilogramsperdayLazy;
        }
        return this.kilogramsperdayLazy = this.convertFromBase(MassFlowUnits.KilogramsPerDay);
    }

    /** */
    public get MegagramsPerDay(): number {
        if(this.megagramsperdayLazy !== null){
            return this.megagramsperdayLazy;
        }
        return this.megagramsperdayLazy = this.convertFromBase(MassFlowUnits.MegagramsPerDay);
    }

    /** */
    public get MegapoundsPerDay(): number {
        if(this.megapoundsperdayLazy !== null){
            return this.megapoundsperdayLazy;
        }
        return this.megapoundsperdayLazy = this.convertFromBase(MassFlowUnits.MegapoundsPerDay);
    }

    /** */
    public get MegapoundsPerHour(): number {
        if(this.megapoundsperhourLazy !== null){
            return this.megapoundsperhourLazy;
        }
        return this.megapoundsperhourLazy = this.convertFromBase(MassFlowUnits.MegapoundsPerHour);
    }

    /** */
    public get MegapoundsPerMinute(): number {
        if(this.megapoundsperminuteLazy !== null){
            return this.megapoundsperminuteLazy;
        }
        return this.megapoundsperminuteLazy = this.convertFromBase(MassFlowUnits.MegapoundsPerMinute);
    }

    /** */
    public get MegapoundsPerSecond(): number {
        if(this.megapoundspersecondLazy !== null){
            return this.megapoundspersecondLazy;
        }
        return this.megapoundspersecondLazy = this.convertFromBase(MassFlowUnits.MegapoundsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a GramsPerSecond
     *
     * @param value The unit as GramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromGramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.GramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a GramsPerDay
     *
     * @param value The unit as GramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromGramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.GramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a GramsPerHour
     *
     * @param value The unit as GramsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromGramsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.GramsPerHour);
    }

    /**
     * Create a new MassFlow instance from a KilogramsPerHour
     *
     * @param value The unit as KilogramsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromKilogramsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.KilogramsPerHour);
    }

    /**
     * Create a new MassFlow instance from a KilogramsPerMinute
     *
     * @param value The unit as KilogramsPerMinute to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromKilogramsPerMinute(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.KilogramsPerMinute);
    }

    /**
     * Create a new MassFlow instance from a TonnesPerHour
     *
     * @param value The unit as TonnesPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromTonnesPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.TonnesPerHour);
    }

    /**
     * Create a new MassFlow instance from a PoundsPerDay
     *
     * @param value The unit as PoundsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromPoundsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.PoundsPerDay);
    }

    /**
     * Create a new MassFlow instance from a PoundsPerHour
     *
     * @param value The unit as PoundsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromPoundsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.PoundsPerHour);
    }

    /**
     * Create a new MassFlow instance from a PoundsPerMinute
     *
     * @param value The unit as PoundsPerMinute to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromPoundsPerMinute(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.PoundsPerMinute);
    }

    /**
     * Create a new MassFlow instance from a PoundsPerSecond
     *
     * @param value The unit as PoundsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromPoundsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.PoundsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a TonnesPerDay
     *
     * @param value The unit as TonnesPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromTonnesPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.TonnesPerDay);
    }

    /**
     * Create a new MassFlow instance from a ShortTonsPerHour
     *
     * @param value The unit as ShortTonsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromShortTonsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.ShortTonsPerHour);
    }

    /**
     * Create a new MassFlow instance from a NanogramsPerSecond
     *
     * @param value The unit as NanogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromNanogramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.NanogramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a MicrogramsPerSecond
     *
     * @param value The unit as MicrogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMicrogramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MicrogramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a MilligramsPerSecond
     *
     * @param value The unit as MilligramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMilligramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MilligramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a CentigramsPerSecond
     *
     * @param value The unit as CentigramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromCentigramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.CentigramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a DecigramsPerSecond
     *
     * @param value The unit as DecigramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromDecigramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.DecigramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a DecagramsPerSecond
     *
     * @param value The unit as DecagramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromDecagramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.DecagramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a HectogramsPerSecond
     *
     * @param value The unit as HectogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromHectogramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.HectogramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a KilogramsPerSecond
     *
     * @param value The unit as KilogramsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromKilogramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.KilogramsPerSecond);
    }

    /**
     * Create a new MassFlow instance from a NanogramsPerDay
     *
     * @param value The unit as NanogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromNanogramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.NanogramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a MicrogramsPerDay
     *
     * @param value The unit as MicrogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMicrogramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MicrogramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a MilligramsPerDay
     *
     * @param value The unit as MilligramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMilligramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MilligramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a CentigramsPerDay
     *
     * @param value The unit as CentigramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromCentigramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.CentigramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a DecigramsPerDay
     *
     * @param value The unit as DecigramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromDecigramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.DecigramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a DecagramsPerDay
     *
     * @param value The unit as DecagramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromDecagramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.DecagramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a HectogramsPerDay
     *
     * @param value The unit as HectogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromHectogramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.HectogramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a KilogramsPerDay
     *
     * @param value The unit as KilogramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromKilogramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.KilogramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a MegagramsPerDay
     *
     * @param value The unit as MegagramsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMegagramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegagramsPerDay);
    }

    /**
     * Create a new MassFlow instance from a MegapoundsPerDay
     *
     * @param value The unit as MegapoundsPerDay to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMegapoundsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegapoundsPerDay);
    }

    /**
     * Create a new MassFlow instance from a MegapoundsPerHour
     *
     * @param value The unit as MegapoundsPerHour to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMegapoundsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegapoundsPerHour);
    }

    /**
     * Create a new MassFlow instance from a MegapoundsPerMinute
     *
     * @param value The unit as MegapoundsPerMinute to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMegapoundsPerMinute(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegapoundsPerMinute);
    }

    /**
     * Create a new MassFlow instance from a MegapoundsPerSecond
     *
     * @param value The unit as MegapoundsPerSecond to create a new MassFlow from.
     * @returns The new MassFlow instance.
     */
    public static FromMegapoundsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegapoundsPerSecond);
    }

    /**
     * Gets the base unit enumeration associated with MassFlow
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof MassFlowUnits {
        return MassFlowUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): MassFlowUnits.GramsPerSecond {
        return MassFlowUnits.GramsPerSecond;
    }

    /**
     * Create API DTO represent a MassFlow unit.
     * @param holdInUnit The specific MassFlow unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: MassFlowUnits = MassFlowUnits.GramsPerSecond): MassFlowDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a MassFlow unit from an API DTO representation.
     * @param dtoMassFlow The MassFlow API DTO representation
     */
    public static FromDto(dtoMassFlow: MassFlowDto): MassFlow {
        return new MassFlow(dtoMassFlow.value, dtoMassFlow.unit);
    }

    /**
     * Convert MassFlow to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: MassFlowUnits): number {
        switch (toUnit) {
            case MassFlowUnits.GramsPerSecond: return this.GramsPerSecond;
            case MassFlowUnits.GramsPerDay: return this.GramsPerDay;
            case MassFlowUnits.GramsPerHour: return this.GramsPerHour;
            case MassFlowUnits.KilogramsPerHour: return this.KilogramsPerHour;
            case MassFlowUnits.KilogramsPerMinute: return this.KilogramsPerMinute;
            case MassFlowUnits.TonnesPerHour: return this.TonnesPerHour;
            case MassFlowUnits.PoundsPerDay: return this.PoundsPerDay;
            case MassFlowUnits.PoundsPerHour: return this.PoundsPerHour;
            case MassFlowUnits.PoundsPerMinute: return this.PoundsPerMinute;
            case MassFlowUnits.PoundsPerSecond: return this.PoundsPerSecond;
            case MassFlowUnits.TonnesPerDay: return this.TonnesPerDay;
            case MassFlowUnits.ShortTonsPerHour: return this.ShortTonsPerHour;
            case MassFlowUnits.NanogramsPerSecond: return this.NanogramsPerSecond;
            case MassFlowUnits.MicrogramsPerSecond: return this.MicrogramsPerSecond;
            case MassFlowUnits.MilligramsPerSecond: return this.MilligramsPerSecond;
            case MassFlowUnits.CentigramsPerSecond: return this.CentigramsPerSecond;
            case MassFlowUnits.DecigramsPerSecond: return this.DecigramsPerSecond;
            case MassFlowUnits.DecagramsPerSecond: return this.DecagramsPerSecond;
            case MassFlowUnits.HectogramsPerSecond: return this.HectogramsPerSecond;
            case MassFlowUnits.KilogramsPerSecond: return this.KilogramsPerSecond;
            case MassFlowUnits.NanogramsPerDay: return this.NanogramsPerDay;
            case MassFlowUnits.MicrogramsPerDay: return this.MicrogramsPerDay;
            case MassFlowUnits.MilligramsPerDay: return this.MilligramsPerDay;
            case MassFlowUnits.CentigramsPerDay: return this.CentigramsPerDay;
            case MassFlowUnits.DecigramsPerDay: return this.DecigramsPerDay;
            case MassFlowUnits.DecagramsPerDay: return this.DecagramsPerDay;
            case MassFlowUnits.HectogramsPerDay: return this.HectogramsPerDay;
            case MassFlowUnits.KilogramsPerDay: return this.KilogramsPerDay;
            case MassFlowUnits.MegagramsPerDay: return this.MegagramsPerDay;
            case MassFlowUnits.MegapoundsPerDay: return this.MegapoundsPerDay;
            case MassFlowUnits.MegapoundsPerHour: return this.MegapoundsPerHour;
            case MassFlowUnits.MegapoundsPerMinute: return this.MegapoundsPerMinute;
            case MassFlowUnits.MegapoundsPerSecond: return this.MegapoundsPerSecond;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: MassFlowUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case MassFlowUnits.GramsPerSecond: return this.value;
                case MassFlowUnits.GramsPerDay: return super.internalMultiply(this.value, 86400);
                case MassFlowUnits.GramsPerHour: return super.internalMultiply(this.value, 3600);
                case MassFlowUnits.KilogramsPerHour: return super.internalMultiply(this.value, 3.6);
                case MassFlowUnits.KilogramsPerMinute: return super.internalMultiply(this.value, 0.06);
                case MassFlowUnits.TonnesPerHour: {
                    const v4 = super.internalDivide(3.6, 1000);
                    return super.internalMultiply(this.value, v4);
                }
                case MassFlowUnits.PoundsPerDay: return super.internalMultiply(this.value, 190.47936);
                case MassFlowUnits.PoundsPerHour: return super.internalMultiply(this.value, 7.93664);
                case MassFlowUnits.PoundsPerMinute: return super.internalMultiply(this.value, 0.132277);
                case MassFlowUnits.PoundsPerSecond: return super.internalDivide(this.value, 453.59237);
                case MassFlowUnits.TonnesPerDay: return super.internalMultiply(this.value, 0.0864000);
                case MassFlowUnits.ShortTonsPerHour: return super.internalDivide(this.value, 251.9957611);
                case MassFlowUnits.NanogramsPerSecond: return super.internalDivide(this.value, 1e-9);
                case MassFlowUnits.MicrogramsPerSecond: return super.internalDivide(this.value, 0.000001);
                case MassFlowUnits.MilligramsPerSecond: return super.internalDivide(this.value, 0.001);
                case MassFlowUnits.CentigramsPerSecond: return super.internalDivide(this.value, 0.01);
                case MassFlowUnits.DecigramsPerSecond: return super.internalDivide(this.value, 0.1);
                case MassFlowUnits.DecagramsPerSecond: return super.internalDivide(this.value, 10);
                case MassFlowUnits.HectogramsPerSecond: return super.internalDivide(this.value, 100);
                case MassFlowUnits.KilogramsPerSecond: return super.internalDivide(this.value, 1000);
                case MassFlowUnits.NanogramsPerDay: {
                    const v3 = super.internalMultiply(this.value, 86400);
                    return super.internalDivide(v3, 1e-9);
                }
                case MassFlowUnits.MicrogramsPerDay: {
                    const v3 = super.internalMultiply(this.value, 86400);
                    return super.internalDivide(v3, 0.000001);
                }
                case MassFlowUnits.MilligramsPerDay: {
                    const v3 = super.internalMultiply(this.value, 86400);
                    return super.internalDivide(v3, 0.001);
                }
                case MassFlowUnits.CentigramsPerDay: {
                    const v3 = super.internalMultiply(this.value, 86400);
                    return super.internalDivide(v3, 0.01);
                }
                case MassFlowUnits.DecigramsPerDay: {
                    const v3 = super.internalMultiply(this.value, 86400);
                    return super.internalDivide(v3, 0.1);
                }
                case MassFlowUnits.DecagramsPerDay: {
                    const v3 = super.internalMultiply(this.value, 86400);
                    return super.internalDivide(v3, 10);
                }
                case MassFlowUnits.HectogramsPerDay: {
                    const v3 = super.internalMultiply(this.value, 86400);
                    return super.internalDivide(v3, 100);
                }
                case MassFlowUnits.KilogramsPerDay: {
                    const v3 = super.internalMultiply(this.value, 86400);
                    return super.internalDivide(v3, 1000);
                }
                case MassFlowUnits.MegagramsPerDay: {
                    const v3 = super.internalMultiply(this.value, 86400);
                    return super.internalDivide(v3, 1000000);
                }
                case MassFlowUnits.MegapoundsPerDay: {
                    const v3 = super.internalMultiply(this.value, 190.47936);
                    return super.internalDivide(v3, 1000000);
                }
                case MassFlowUnits.MegapoundsPerHour: {
                    const v3 = super.internalMultiply(this.value, 7.93664);
                    return super.internalDivide(v3, 1000000);
                }
                case MassFlowUnits.MegapoundsPerMinute: {
                    const v3 = super.internalMultiply(this.value, 0.132277);
                    return super.internalDivide(v3, 1000000);
                }
                case MassFlowUnits.MegapoundsPerSecond: {
                    const v3 = super.internalDivide(this.value, 453.59237);
                    return super.internalDivide(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case MassFlowUnits.GramsPerSecond: return this.value;
            case MassFlowUnits.GramsPerDay: return this.value * 86400;
            case MassFlowUnits.GramsPerHour: return this.value * 3600;
            case MassFlowUnits.KilogramsPerHour: return this.value * 3.6;
            case MassFlowUnits.KilogramsPerMinute: return this.value * 0.06;
            case MassFlowUnits.TonnesPerHour: return this.value * 3.6 / 1000;
            case MassFlowUnits.PoundsPerDay: return this.value * 190.47936;
            case MassFlowUnits.PoundsPerHour: return this.value * 7.93664;
            case MassFlowUnits.PoundsPerMinute: return this.value * 0.132277;
            case MassFlowUnits.PoundsPerSecond: return this.value / 453.59237;
            case MassFlowUnits.TonnesPerDay: return this.value * 0.0864000;
            case MassFlowUnits.ShortTonsPerHour: return this.value / 251.9957611;
            case MassFlowUnits.NanogramsPerSecond: return (this.value) / 1e-9;
            case MassFlowUnits.MicrogramsPerSecond: return (this.value) / 0.000001;
            case MassFlowUnits.MilligramsPerSecond: return (this.value) / 0.001;
            case MassFlowUnits.CentigramsPerSecond: return (this.value) / 0.01;
            case MassFlowUnits.DecigramsPerSecond: return (this.value) / 0.1;
            case MassFlowUnits.DecagramsPerSecond: return (this.value) / 10;
            case MassFlowUnits.HectogramsPerSecond: return (this.value) / 100;
            case MassFlowUnits.KilogramsPerSecond: return (this.value) / 1000;
            case MassFlowUnits.NanogramsPerDay: return (this.value * 86400) / 1e-9;
            case MassFlowUnits.MicrogramsPerDay: return (this.value * 86400) / 0.000001;
            case MassFlowUnits.MilligramsPerDay: return (this.value * 86400) / 0.001;
            case MassFlowUnits.CentigramsPerDay: return (this.value * 86400) / 0.01;
            case MassFlowUnits.DecigramsPerDay: return (this.value * 86400) / 0.1;
            case MassFlowUnits.DecagramsPerDay: return (this.value * 86400) / 10;
            case MassFlowUnits.HectogramsPerDay: return (this.value * 86400) / 100;
            case MassFlowUnits.KilogramsPerDay: return (this.value * 86400) / 1000;
            case MassFlowUnits.MegagramsPerDay: return (this.value * 86400) / 1000000;
            case MassFlowUnits.MegapoundsPerDay: return (this.value * 190.47936) / 1000000;
            case MassFlowUnits.MegapoundsPerHour: return (this.value * 7.93664) / 1000000;
            case MassFlowUnits.MegapoundsPerMinute: return (this.value * 0.132277) / 1000000;
            case MassFlowUnits.MegapoundsPerSecond: return (this.value / 453.59237) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: MassFlowUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case MassFlowUnits.GramsPerSecond: return value;
                case MassFlowUnits.GramsPerDay: return super.internalDivide(value, 86400);
                case MassFlowUnits.GramsPerHour: return super.internalDivide(value, 3600);
                case MassFlowUnits.KilogramsPerHour: return super.internalDivide(value, 3.6);
                case MassFlowUnits.KilogramsPerMinute: return super.internalDivide(value, 0.06);
                case MassFlowUnits.TonnesPerHour: {
                    const v4 = super.internalDivide(value, 3.6);
                    return super.internalMultiply(1000, v4);
                }
                case MassFlowUnits.PoundsPerDay: return super.internalDivide(value, 190.47936);
                case MassFlowUnits.PoundsPerHour: return super.internalDivide(value, 7.93664);
                case MassFlowUnits.PoundsPerMinute: return super.internalDivide(value, 0.132277);
                case MassFlowUnits.PoundsPerSecond: return super.internalMultiply(value, 453.59237);
                case MassFlowUnits.TonnesPerDay: return super.internalDivide(value, 0.0864000);
                case MassFlowUnits.ShortTonsPerHour: return super.internalMultiply(value, 251.9957611);
                case MassFlowUnits.NanogramsPerSecond: return super.internalMultiply(value, 1e-9);
                case MassFlowUnits.MicrogramsPerSecond: return super.internalMultiply(value, 0.000001);
                case MassFlowUnits.MilligramsPerSecond: return super.internalMultiply(value, 0.001);
                case MassFlowUnits.CentigramsPerSecond: return super.internalMultiply(value, 0.01);
                case MassFlowUnits.DecigramsPerSecond: return super.internalMultiply(value, 0.1);
                case MassFlowUnits.DecagramsPerSecond: return super.internalMultiply(value, 10);
                case MassFlowUnits.HectogramsPerSecond: return super.internalMultiply(value, 100);
                case MassFlowUnits.KilogramsPerSecond: return super.internalMultiply(value, 1000);
                case MassFlowUnits.NanogramsPerDay: {
                    const v3 = super.internalDivide(value, 86400);
                    return super.internalMultiply(v3, 1e-9);
                }
                case MassFlowUnits.MicrogramsPerDay: {
                    const v3 = super.internalDivide(value, 86400);
                    return super.internalMultiply(v3, 0.000001);
                }
                case MassFlowUnits.MilligramsPerDay: {
                    const v3 = super.internalDivide(value, 86400);
                    return super.internalMultiply(v3, 0.001);
                }
                case MassFlowUnits.CentigramsPerDay: {
                    const v3 = super.internalDivide(value, 86400);
                    return super.internalMultiply(v3, 0.01);
                }
                case MassFlowUnits.DecigramsPerDay: {
                    const v3 = super.internalDivide(value, 86400);
                    return super.internalMultiply(v3, 0.1);
                }
                case MassFlowUnits.DecagramsPerDay: {
                    const v3 = super.internalDivide(value, 86400);
                    return super.internalMultiply(v3, 10);
                }
                case MassFlowUnits.HectogramsPerDay: {
                    const v3 = super.internalDivide(value, 86400);
                    return super.internalMultiply(v3, 100);
                }
                case MassFlowUnits.KilogramsPerDay: {
                    const v3 = super.internalDivide(value, 86400);
                    return super.internalMultiply(v3, 1000);
                }
                case MassFlowUnits.MegagramsPerDay: {
                    const v3 = super.internalDivide(value, 86400);
                    return super.internalMultiply(v3, 1000000);
                }
                case MassFlowUnits.MegapoundsPerDay: {
                    const v3 = super.internalDivide(value, 190.47936);
                    return super.internalMultiply(v3, 1000000);
                }
                case MassFlowUnits.MegapoundsPerHour: {
                    const v3 = super.internalDivide(value, 7.93664);
                    return super.internalMultiply(v3, 1000000);
                }
                case MassFlowUnits.MegapoundsPerMinute: {
                    const v3 = super.internalDivide(value, 0.132277);
                    return super.internalMultiply(v3, 1000000);
                }
                case MassFlowUnits.MegapoundsPerSecond: {
                    const v3 = super.internalMultiply(value, 453.59237);
                    return super.internalMultiply(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case MassFlowUnits.GramsPerSecond: return value;
            case MassFlowUnits.GramsPerDay: return value / 86400;
            case MassFlowUnits.GramsPerHour: return value / 3600;
            case MassFlowUnits.KilogramsPerHour: return value / 3.6;
            case MassFlowUnits.KilogramsPerMinute: return value / 0.06;
            case MassFlowUnits.TonnesPerHour: return 1000 * value / 3.6;
            case MassFlowUnits.PoundsPerDay: return value / 190.47936;
            case MassFlowUnits.PoundsPerHour: return value / 7.93664;
            case MassFlowUnits.PoundsPerMinute: return value / 0.132277;
            case MassFlowUnits.PoundsPerSecond: return value * 453.59237;
            case MassFlowUnits.TonnesPerDay: return value / 0.0864000;
            case MassFlowUnits.ShortTonsPerHour: return value * 251.9957611;
            case MassFlowUnits.NanogramsPerSecond: return (value) * 1e-9;
            case MassFlowUnits.MicrogramsPerSecond: return (value) * 0.000001;
            case MassFlowUnits.MilligramsPerSecond: return (value) * 0.001;
            case MassFlowUnits.CentigramsPerSecond: return (value) * 0.01;
            case MassFlowUnits.DecigramsPerSecond: return (value) * 0.1;
            case MassFlowUnits.DecagramsPerSecond: return (value) * 10;
            case MassFlowUnits.HectogramsPerSecond: return (value) * 100;
            case MassFlowUnits.KilogramsPerSecond: return (value) * 1000;
            case MassFlowUnits.NanogramsPerDay: return (value / 86400) * 1e-9;
            case MassFlowUnits.MicrogramsPerDay: return (value / 86400) * 0.000001;
            case MassFlowUnits.MilligramsPerDay: return (value / 86400) * 0.001;
            case MassFlowUnits.CentigramsPerDay: return (value / 86400) * 0.01;
            case MassFlowUnits.DecigramsPerDay: return (value / 86400) * 0.1;
            case MassFlowUnits.DecagramsPerDay: return (value / 86400) * 10;
            case MassFlowUnits.HectogramsPerDay: return (value / 86400) * 100;
            case MassFlowUnits.KilogramsPerDay: return (value / 86400) * 1000;
            case MassFlowUnits.MegagramsPerDay: return (value / 86400) * 1000000;
            case MassFlowUnits.MegapoundsPerDay: return (value / 190.47936) * 1000000;
            case MassFlowUnits.MegapoundsPerHour: return (value / 7.93664) * 1000000;
            case MassFlowUnits.MegapoundsPerMinute: return (value / 0.132277) * 1000000;
            case MassFlowUnits.MegapoundsPerSecond: return (value * 453.59237) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the MassFlow to string.
     * Note! the default format for MassFlow is GramsPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the MassFlow.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the MassFlow.
     */
    public toString(unit: MassFlowUnits = MassFlowUnits.GramsPerSecond, fractionalDigits?: number): string {

        switch (unit) {
            
            case MassFlowUnits.GramsPerSecond:
                return super.truncateFractionDigits(this.GramsPerSecond, fractionalDigits) + ` g/s`;
            case MassFlowUnits.GramsPerDay:
                return super.truncateFractionDigits(this.GramsPerDay, fractionalDigits) + ` g/d`;
            case MassFlowUnits.GramsPerHour:
                return super.truncateFractionDigits(this.GramsPerHour, fractionalDigits) + ` g/h`;
            case MassFlowUnits.KilogramsPerHour:
                return super.truncateFractionDigits(this.KilogramsPerHour, fractionalDigits) + ` kg/h`;
            case MassFlowUnits.KilogramsPerMinute:
                return super.truncateFractionDigits(this.KilogramsPerMinute, fractionalDigits) + ` kg/min`;
            case MassFlowUnits.TonnesPerHour:
                return super.truncateFractionDigits(this.TonnesPerHour, fractionalDigits) + ` t/h`;
            case MassFlowUnits.PoundsPerDay:
                return super.truncateFractionDigits(this.PoundsPerDay, fractionalDigits) + ` lb/d`;
            case MassFlowUnits.PoundsPerHour:
                return super.truncateFractionDigits(this.PoundsPerHour, fractionalDigits) + ` lb/h`;
            case MassFlowUnits.PoundsPerMinute:
                return super.truncateFractionDigits(this.PoundsPerMinute, fractionalDigits) + ` lb/min`;
            case MassFlowUnits.PoundsPerSecond:
                return super.truncateFractionDigits(this.PoundsPerSecond, fractionalDigits) + ` lb/s`;
            case MassFlowUnits.TonnesPerDay:
                return super.truncateFractionDigits(this.TonnesPerDay, fractionalDigits) + ` t/d`;
            case MassFlowUnits.ShortTonsPerHour:
                return super.truncateFractionDigits(this.ShortTonsPerHour, fractionalDigits) + ` short tn/h`;
            case MassFlowUnits.NanogramsPerSecond:
                return super.truncateFractionDigits(this.NanogramsPerSecond, fractionalDigits) + ` ng/s`;
            case MassFlowUnits.MicrogramsPerSecond:
                return super.truncateFractionDigits(this.MicrogramsPerSecond, fractionalDigits) + ` μg/s`;
            case MassFlowUnits.MilligramsPerSecond:
                return super.truncateFractionDigits(this.MilligramsPerSecond, fractionalDigits) + ` mg/s`;
            case MassFlowUnits.CentigramsPerSecond:
                return super.truncateFractionDigits(this.CentigramsPerSecond, fractionalDigits) + ` cg/s`;
            case MassFlowUnits.DecigramsPerSecond:
                return super.truncateFractionDigits(this.DecigramsPerSecond, fractionalDigits) + ` dg/s`;
            case MassFlowUnits.DecagramsPerSecond:
                return super.truncateFractionDigits(this.DecagramsPerSecond, fractionalDigits) + ` dag/s`;
            case MassFlowUnits.HectogramsPerSecond:
                return super.truncateFractionDigits(this.HectogramsPerSecond, fractionalDigits) + ` hg/s`;
            case MassFlowUnits.KilogramsPerSecond:
                return super.truncateFractionDigits(this.KilogramsPerSecond, fractionalDigits) + ` kg/s`;
            case MassFlowUnits.NanogramsPerDay:
                return super.truncateFractionDigits(this.NanogramsPerDay, fractionalDigits) + ` ng/d`;
            case MassFlowUnits.MicrogramsPerDay:
                return super.truncateFractionDigits(this.MicrogramsPerDay, fractionalDigits) + ` μg/d`;
            case MassFlowUnits.MilligramsPerDay:
                return super.truncateFractionDigits(this.MilligramsPerDay, fractionalDigits) + ` mg/d`;
            case MassFlowUnits.CentigramsPerDay:
                return super.truncateFractionDigits(this.CentigramsPerDay, fractionalDigits) + ` cg/d`;
            case MassFlowUnits.DecigramsPerDay:
                return super.truncateFractionDigits(this.DecigramsPerDay, fractionalDigits) + ` dg/d`;
            case MassFlowUnits.DecagramsPerDay:
                return super.truncateFractionDigits(this.DecagramsPerDay, fractionalDigits) + ` dag/d`;
            case MassFlowUnits.HectogramsPerDay:
                return super.truncateFractionDigits(this.HectogramsPerDay, fractionalDigits) + ` hg/d`;
            case MassFlowUnits.KilogramsPerDay:
                return super.truncateFractionDigits(this.KilogramsPerDay, fractionalDigits) + ` kg/d`;
            case MassFlowUnits.MegagramsPerDay:
                return super.truncateFractionDigits(this.MegagramsPerDay, fractionalDigits) + ` Mg/d`;
            case MassFlowUnits.MegapoundsPerDay:
                return super.truncateFractionDigits(this.MegapoundsPerDay, fractionalDigits) + ` Mlb/d`;
            case MassFlowUnits.MegapoundsPerHour:
                return super.truncateFractionDigits(this.MegapoundsPerHour, fractionalDigits) + ` Mlb/h`;
            case MassFlowUnits.MegapoundsPerMinute:
                return super.truncateFractionDigits(this.MegapoundsPerMinute, fractionalDigits) + ` Mlb/min`;
            case MassFlowUnits.MegapoundsPerSecond:
                return super.truncateFractionDigits(this.MegapoundsPerSecond, fractionalDigits) + ` Mlb/s`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get MassFlow unit abbreviation.
     * Note! the default abbreviation for MassFlow is GramsPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the MassFlow.
     * @returns The abbreviation string of MassFlow.
     */
    public getUnitAbbreviation(unitAbbreviation: MassFlowUnits = MassFlowUnits.GramsPerSecond): string {

        switch (unitAbbreviation) {
            
            case MassFlowUnits.GramsPerSecond:
                return `g/s`;
            case MassFlowUnits.GramsPerDay:
                return `g/d`;
            case MassFlowUnits.GramsPerHour:
                return `g/h`;
            case MassFlowUnits.KilogramsPerHour:
                return `kg/h`;
            case MassFlowUnits.KilogramsPerMinute:
                return `kg/min`;
            case MassFlowUnits.TonnesPerHour:
                return `t/h`;
            case MassFlowUnits.PoundsPerDay:
                return `lb/d`;
            case MassFlowUnits.PoundsPerHour:
                return `lb/h`;
            case MassFlowUnits.PoundsPerMinute:
                return `lb/min`;
            case MassFlowUnits.PoundsPerSecond:
                return `lb/s`;
            case MassFlowUnits.TonnesPerDay:
                return `t/d`;
            case MassFlowUnits.ShortTonsPerHour:
                return `short tn/h`;
            case MassFlowUnits.NanogramsPerSecond:
                return `ng/s`;
            case MassFlowUnits.MicrogramsPerSecond:
                return `μg/s`;
            case MassFlowUnits.MilligramsPerSecond:
                return `mg/s`;
            case MassFlowUnits.CentigramsPerSecond:
                return `cg/s`;
            case MassFlowUnits.DecigramsPerSecond:
                return `dg/s`;
            case MassFlowUnits.DecagramsPerSecond:
                return `dag/s`;
            case MassFlowUnits.HectogramsPerSecond:
                return `hg/s`;
            case MassFlowUnits.KilogramsPerSecond:
                return `kg/s`;
            case MassFlowUnits.NanogramsPerDay:
                return `ng/d`;
            case MassFlowUnits.MicrogramsPerDay:
                return `μg/d`;
            case MassFlowUnits.MilligramsPerDay:
                return `mg/d`;
            case MassFlowUnits.CentigramsPerDay:
                return `cg/d`;
            case MassFlowUnits.DecigramsPerDay:
                return `dg/d`;
            case MassFlowUnits.DecagramsPerDay:
                return `dag/d`;
            case MassFlowUnits.HectogramsPerDay:
                return `hg/d`;
            case MassFlowUnits.KilogramsPerDay:
                return `kg/d`;
            case MassFlowUnits.MegagramsPerDay:
                return `Mg/d`;
            case MassFlowUnits.MegapoundsPerDay:
                return `Mlb/d`;
            case MassFlowUnits.MegapoundsPerHour:
                return `Mlb/h`;
            case MassFlowUnits.MegapoundsPerMinute:
                return `Mlb/min`;
            case MassFlowUnits.MegapoundsPerSecond:
                return `Mlb/s`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given MassFlow are equals to the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns True if the given MassFlow are equal to the current MassFlow.
     */
    public equals(massFlow: MassFlow): boolean {
        return super.internalEquals(this.value, massFlow.BaseValue);
    }

    /**
     * Compare the given MassFlow against the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns 0 if they are equal, -1 if the current MassFlow is less then other, 1 if the current MassFlow is greater then other.
     */
    public compareTo(massFlow: MassFlow): number {
        return super.internalCompareTo(this.value, massFlow.BaseValue);
    }

    /**
     * Add the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    public add(massFlow: MassFlow): MassFlow {
        return new MassFlow(super.internalAdd(this.value, massFlow.BaseValue))
    }

    /**
     * Subtract the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    public subtract(massFlow: MassFlow): MassFlow {
        return new MassFlow(super.internalSubtract(this.value, massFlow.BaseValue))
    }

    /**
     * Multiply the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    public multiply(massFlow: MassFlow): MassFlow {
        return new MassFlow(super.internalMultiply(this.value, massFlow.BaseValue))
    }

    /**
     * Divide the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    public divide(massFlow: MassFlow): MassFlow {
        return new MassFlow(super.internalDivide(this.value, massFlow.BaseValue))
    }

    /**
     * Modulo the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    public modulo(massFlow: MassFlow): MassFlow {
        return new MassFlow(super.internalModulo(this.value, massFlow.BaseValue))
    }

    /**
     * Pow the given MassFlow with the current MassFlow.
     * @param massFlow The other MassFlow.
     * @returns A new MassFlow instance with the results.
     */
    public pow(massFlow: MassFlow): MassFlow {
        return new MassFlow(super.internalPow(this.value, massFlow.BaseValue))
    }
}
