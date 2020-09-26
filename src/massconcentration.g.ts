/** MassConcentrationUnits enumeration */
export enum MassConcentrationUnits {
    /** */
    GramsPerCubicMillimeter,
    /** */
    GramsPerCubicCentimeter,
    /** */
    GramsPerCubicMeter,
    /** */
    GramsPerMicroliter,
    /** */
    GramsPerMilliliter,
    /** */
    GramsPerDeciliter,
    /** */
    GramsPerLiter,
    /** */
    TonnesPerCubicMillimeter,
    /** */
    TonnesPerCubicCentimeter,
    /** */
    TonnesPerCubicMeter,
    /** */
    PoundsPerCubicInch,
    /** */
    PoundsPerCubicFoot,
    /** */
    SlugsPerCubicFoot,
    /** */
    PoundsPerUSGallon,
    /** */
    PoundsPerImperialGallon,
    /** */
    KilogramsPerCubicMillimeter,
    /** */
    KilogramsPerCubicCentimeter,
    /** */
    KilogramsPerCubicMeter,
    /** */
    MilligramsPerCubicMeter,
    /** */
    MicrogramsPerCubicMeter,
    /** */
    PicogramsPerMicroliter,
    /** */
    NanogramsPerMicroliter,
    /** */
    MicrogramsPerMicroliter,
    /** */
    MilligramsPerMicroliter,
    /** */
    CentigramsPerMicroliter,
    /** */
    DecigramsPerMicroliter,
    /** */
    PicogramsPerMilliliter,
    /** */
    NanogramsPerMilliliter,
    /** */
    MicrogramsPerMilliliter,
    /** */
    MilligramsPerMilliliter,
    /** */
    CentigramsPerMilliliter,
    /** */
    DecigramsPerMilliliter,
    /** */
    PicogramsPerDeciliter,
    /** */
    NanogramsPerDeciliter,
    /** */
    MicrogramsPerDeciliter,
    /** */
    MilligramsPerDeciliter,
    /** */
    CentigramsPerDeciliter,
    /** */
    DecigramsPerDeciliter,
    /** */
    PicogramsPerLiter,
    /** */
    NanogramsPerLiter,
    /** */
    MicrogramsPerLiter,
    /** */
    MilligramsPerLiter,
    /** */
    CentigramsPerLiter,
    /** */
    DecigramsPerLiter,
    /** */
    KilogramsPerLiter,
    /** */
    KilopoundsPerCubicInch,
    /** */
    KilopoundsPerCubicFoot
}

/** In chemistry, the mass concentration ρi (or γi) is defined as the mass of a constituent mi divided by the volume of the mixture V */
export class MassConcentration {
    private value: number;
    private gramspercubicmillimeterLazy: number | null = null;
    private gramspercubiccentimeterLazy: number | null = null;
    private gramspercubicmeterLazy: number | null = null;
    private gramspermicroliterLazy: number | null = null;
    private gramspermilliliterLazy: number | null = null;
    private gramsperdeciliterLazy: number | null = null;
    private gramsperliterLazy: number | null = null;
    private tonnespercubicmillimeterLazy: number | null = null;
    private tonnespercubiccentimeterLazy: number | null = null;
    private tonnespercubicmeterLazy: number | null = null;
    private poundspercubicinchLazy: number | null = null;
    private poundspercubicfootLazy: number | null = null;
    private slugspercubicfootLazy: number | null = null;
    private poundsperusgallonLazy: number | null = null;
    private poundsperimperialgallonLazy: number | null = null;
    private kilogramspercubicmillimeterLazy: number | null = null;
    private kilogramspercubiccentimeterLazy: number | null = null;
    private kilogramspercubicmeterLazy: number | null = null;
    private milligramspercubicmeterLazy: number | null = null;
    private microgramspercubicmeterLazy: number | null = null;
    private picogramspermicroliterLazy: number | null = null;
    private nanogramspermicroliterLazy: number | null = null;
    private microgramspermicroliterLazy: number | null = null;
    private milligramspermicroliterLazy: number | null = null;
    private centigramspermicroliterLazy: number | null = null;
    private decigramspermicroliterLazy: number | null = null;
    private picogramspermilliliterLazy: number | null = null;
    private nanogramspermilliliterLazy: number | null = null;
    private microgramspermilliliterLazy: number | null = null;
    private milligramspermilliliterLazy: number | null = null;
    private centigramspermilliliterLazy: number | null = null;
    private decigramspermilliliterLazy: number | null = null;
    private picogramsperdeciliterLazy: number | null = null;
    private nanogramsperdeciliterLazy: number | null = null;
    private microgramsperdeciliterLazy: number | null = null;
    private milligramsperdeciliterLazy: number | null = null;
    private centigramsperdeciliterLazy: number | null = null;
    private decigramsperdeciliterLazy: number | null = null;
    private picogramsperliterLazy: number | null = null;
    private nanogramsperliterLazy: number | null = null;
    private microgramsperliterLazy: number | null = null;
    private milligramsperliterLazy: number | null = null;
    private centigramsperliterLazy: number | null = null;
    private decigramsperliterLazy: number | null = null;
    private kilogramsperliterLazy: number | null = null;
    private kilopoundspercubicinchLazy: number | null = null;
    private kilopoundspercubicfootLazy: number | null = null;

    /**
     * Create a new MassConcentration.
     * @param value The value.
     * @param fromUnit The ‘MassConcentration’ unit to create from.
     * The default unit is KilogramsPerCubicMeter
     */
    public constructor(value: number, fromUnit: MassConcentrationUnits = MassConcentrationUnits.KilogramsPerCubicMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MassConcentration is KilogramsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get GramsPerCubicMillimeter(): number {
        if(this.gramspercubicmillimeterLazy !== null){
            return this.gramspercubicmillimeterLazy;
        }
        return this.gramspercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicMillimeter);
    }

    /** */
    public get GramsPerCubicCentimeter(): number {
        if(this.gramspercubiccentimeterLazy !== null){
            return this.gramspercubiccentimeterLazy;
        }
        return this.gramspercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicCentimeter);
    }

    /** */
    public get GramsPerCubicMeter(): number {
        if(this.gramspercubicmeterLazy !== null){
            return this.gramspercubicmeterLazy;
        }
        return this.gramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicMeter);
    }

    /** */
    public get GramsPerMicroliter(): number {
        if(this.gramspermicroliterLazy !== null){
            return this.gramspermicroliterLazy;
        }
        return this.gramspermicroliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerMicroliter);
    }

    /** */
    public get GramsPerMilliliter(): number {
        if(this.gramspermilliliterLazy !== null){
            return this.gramspermilliliterLazy;
        }
        return this.gramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerMilliliter);
    }

    /** */
    public get GramsPerDeciliter(): number {
        if(this.gramsperdeciliterLazy !== null){
            return this.gramsperdeciliterLazy;
        }
        return this.gramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerDeciliter);
    }

    /** */
    public get GramsPerLiter(): number {
        if(this.gramsperliterLazy !== null){
            return this.gramsperliterLazy;
        }
        return this.gramsperliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerLiter);
    }

    /** */
    public get TonnesPerCubicMillimeter(): number {
        if(this.tonnespercubicmillimeterLazy !== null){
            return this.tonnespercubicmillimeterLazy;
        }
        return this.tonnespercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicMillimeter);
    }

    /** */
    public get TonnesPerCubicCentimeter(): number {
        if(this.tonnespercubiccentimeterLazy !== null){
            return this.tonnespercubiccentimeterLazy;
        }
        return this.tonnespercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicCentimeter);
    }

    /** */
    public get TonnesPerCubicMeter(): number {
        if(this.tonnespercubicmeterLazy !== null){
            return this.tonnespercubicmeterLazy;
        }
        return this.tonnespercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicMeter);
    }

    /** */
    public get PoundsPerCubicInch(): number {
        if(this.poundspercubicinchLazy !== null){
            return this.poundspercubicinchLazy;
        }
        return this.poundspercubicinchLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerCubicInch);
    }

    /** */
    public get PoundsPerCubicFoot(): number {
        if(this.poundspercubicfootLazy !== null){
            return this.poundspercubicfootLazy;
        }
        return this.poundspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerCubicFoot);
    }

    /** */
    public get SlugsPerCubicFoot(): number {
        if(this.slugspercubicfootLazy !== null){
            return this.slugspercubicfootLazy;
        }
        return this.slugspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.SlugsPerCubicFoot);
    }

    /** */
    public get PoundsPerUSGallon(): number {
        if(this.poundsperusgallonLazy !== null){
            return this.poundsperusgallonLazy;
        }
        return this.poundsperusgallonLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerUSGallon);
    }

    /** */
    public get PoundsPerImperialGallon(): number {
        if(this.poundsperimperialgallonLazy !== null){
            return this.poundsperimperialgallonLazy;
        }
        return this.poundsperimperialgallonLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerImperialGallon);
    }

    /** */
    public get KilogramsPerCubicMillimeter(): number {
        if(this.kilogramspercubicmillimeterLazy !== null){
            return this.kilogramspercubicmillimeterLazy;
        }
        return this.kilogramspercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramsPerCubicMillimeter);
    }

    /** */
    public get KilogramsPerCubicCentimeter(): number {
        if(this.kilogramspercubiccentimeterLazy !== null){
            return this.kilogramspercubiccentimeterLazy;
        }
        return this.kilogramspercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramsPerCubicCentimeter);
    }

    /** */
    public get KilogramsPerCubicMeter(): number {
        if(this.kilogramspercubicmeterLazy !== null){
            return this.kilogramspercubicmeterLazy;
        }
        return this.kilogramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramsPerCubicMeter);
    }

    /** */
    public get MilligramsPerCubicMeter(): number {
        if(this.milligramspercubicmeterLazy !== null){
            return this.milligramspercubicmeterLazy;
        }
        return this.milligramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.MilligramsPerCubicMeter);
    }

    /** */
    public get MicrogramsPerCubicMeter(): number {
        if(this.microgramspercubicmeterLazy !== null){
            return this.microgramspercubicmeterLazy;
        }
        return this.microgramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerCubicMeter);
    }

    /** */
    public get PicogramsPerMicroliter(): number {
        if(this.picogramspermicroliterLazy !== null){
            return this.picogramspermicroliterLazy;
        }
        return this.picogramspermicroliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramsPerMicroliter);
    }

    /** */
    public get NanogramsPerMicroliter(): number {
        if(this.nanogramspermicroliterLazy !== null){
            return this.nanogramspermicroliterLazy;
        }
        return this.nanogramspermicroliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramsPerMicroliter);
    }

    /** */
    public get MicrogramsPerMicroliter(): number {
        if(this.microgramspermicroliterLazy !== null){
            return this.microgramspermicroliterLazy;
        }
        return this.microgramspermicroliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerMicroliter);
    }

    /** */
    public get MilligramsPerMicroliter(): number {
        if(this.milligramspermicroliterLazy !== null){
            return this.milligramspermicroliterLazy;
        }
        return this.milligramspermicroliterLazy = this.convertFromBase(MassConcentrationUnits.MilligramsPerMicroliter);
    }

    /** */
    public get CentigramsPerMicroliter(): number {
        if(this.centigramspermicroliterLazy !== null){
            return this.centigramspermicroliterLazy;
        }
        return this.centigramspermicroliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramsPerMicroliter);
    }

    /** */
    public get DecigramsPerMicroliter(): number {
        if(this.decigramspermicroliterLazy !== null){
            return this.decigramspermicroliterLazy;
        }
        return this.decigramspermicroliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramsPerMicroliter);
    }

    /** */
    public get PicogramsPerMilliliter(): number {
        if(this.picogramspermilliliterLazy !== null){
            return this.picogramspermilliliterLazy;
        }
        return this.picogramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramsPerMilliliter);
    }

    /** */
    public get NanogramsPerMilliliter(): number {
        if(this.nanogramspermilliliterLazy !== null){
            return this.nanogramspermilliliterLazy;
        }
        return this.nanogramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramsPerMilliliter);
    }

    /** */
    public get MicrogramsPerMilliliter(): number {
        if(this.microgramspermilliliterLazy !== null){
            return this.microgramspermilliliterLazy;
        }
        return this.microgramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerMilliliter);
    }

    /** */
    public get MilligramsPerMilliliter(): number {
        if(this.milligramspermilliliterLazy !== null){
            return this.milligramspermilliliterLazy;
        }
        return this.milligramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.MilligramsPerMilliliter);
    }

    /** */
    public get CentigramsPerMilliliter(): number {
        if(this.centigramspermilliliterLazy !== null){
            return this.centigramspermilliliterLazy;
        }
        return this.centigramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramsPerMilliliter);
    }

    /** */
    public get DecigramsPerMilliliter(): number {
        if(this.decigramspermilliliterLazy !== null){
            return this.decigramspermilliliterLazy;
        }
        return this.decigramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramsPerMilliliter);
    }

    /** */
    public get PicogramsPerDeciliter(): number {
        if(this.picogramsperdeciliterLazy !== null){
            return this.picogramsperdeciliterLazy;
        }
        return this.picogramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramsPerDeciliter);
    }

    /** */
    public get NanogramsPerDeciliter(): number {
        if(this.nanogramsperdeciliterLazy !== null){
            return this.nanogramsperdeciliterLazy;
        }
        return this.nanogramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramsPerDeciliter);
    }

    /** */
    public get MicrogramsPerDeciliter(): number {
        if(this.microgramsperdeciliterLazy !== null){
            return this.microgramsperdeciliterLazy;
        }
        return this.microgramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerDeciliter);
    }

    /** */
    public get MilligramsPerDeciliter(): number {
        if(this.milligramsperdeciliterLazy !== null){
            return this.milligramsperdeciliterLazy;
        }
        return this.milligramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.MilligramsPerDeciliter);
    }

    /** */
    public get CentigramsPerDeciliter(): number {
        if(this.centigramsperdeciliterLazy !== null){
            return this.centigramsperdeciliterLazy;
        }
        return this.centigramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramsPerDeciliter);
    }

    /** */
    public get DecigramsPerDeciliter(): number {
        if(this.decigramsperdeciliterLazy !== null){
            return this.decigramsperdeciliterLazy;
        }
        return this.decigramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramsPerDeciliter);
    }

    /** */
    public get PicogramsPerLiter(): number {
        if(this.picogramsperliterLazy !== null){
            return this.picogramsperliterLazy;
        }
        return this.picogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramsPerLiter);
    }

    /** */
    public get NanogramsPerLiter(): number {
        if(this.nanogramsperliterLazy !== null){
            return this.nanogramsperliterLazy;
        }
        return this.nanogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramsPerLiter);
    }

    /** */
    public get MicrogramsPerLiter(): number {
        if(this.microgramsperliterLazy !== null){
            return this.microgramsperliterLazy;
        }
        return this.microgramsperliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerLiter);
    }

    /** */
    public get MilligramsPerLiter(): number {
        if(this.milligramsperliterLazy !== null){
            return this.milligramsperliterLazy;
        }
        return this.milligramsperliterLazy = this.convertFromBase(MassConcentrationUnits.MilligramsPerLiter);
    }

    /** */
    public get CentigramsPerLiter(): number {
        if(this.centigramsperliterLazy !== null){
            return this.centigramsperliterLazy;
        }
        return this.centigramsperliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramsPerLiter);
    }

    /** */
    public get DecigramsPerLiter(): number {
        if(this.decigramsperliterLazy !== null){
            return this.decigramsperliterLazy;
        }
        return this.decigramsperliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramsPerLiter);
    }

    /** */
    public get KilogramsPerLiter(): number {
        if(this.kilogramsperliterLazy !== null){
            return this.kilogramsperliterLazy;
        }
        return this.kilogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.KilogramsPerLiter);
    }

    /** */
    public get KilopoundsPerCubicInch(): number {
        if(this.kilopoundspercubicinchLazy !== null){
            return this.kilopoundspercubicinchLazy;
        }
        return this.kilopoundspercubicinchLazy = this.convertFromBase(MassConcentrationUnits.KilopoundsPerCubicInch);
    }

    /** */
    public get KilopoundsPerCubicFoot(): number {
        if(this.kilopoundspercubicfootLazy !== null){
            return this.kilopoundspercubicfootLazy;
        }
        return this.kilopoundspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.KilopoundsPerCubicFoot);
    }

    /**
     * Create a new MassConcentration instance from a GramsPerCubicMillimeter
     *
     * @param value The unit as GramsPerCubicMillimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromGramsPerCubicMillimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicMillimeter);
    }

    /**
     * Create a new MassConcentration instance from a GramsPerCubicCentimeter
     *
     * @param value The unit as GramsPerCubicCentimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromGramsPerCubicCentimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicCentimeter);
    }

    /**
     * Create a new MassConcentration instance from a GramsPerCubicMeter
     *
     * @param value The unit as GramsPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromGramsPerCubicMeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicMeter);
    }

    /**
     * Create a new MassConcentration instance from a GramsPerMicroliter
     *
     * @param value The unit as GramsPerMicroliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromGramsPerMicroliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerMicroliter);
    }

    /**
     * Create a new MassConcentration instance from a GramsPerMilliliter
     *
     * @param value The unit as GramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromGramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerMilliliter);
    }

    /**
     * Create a new MassConcentration instance from a GramsPerDeciliter
     *
     * @param value The unit as GramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromGramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerDeciliter);
    }

    /**
     * Create a new MassConcentration instance from a GramsPerLiter
     *
     * @param value The unit as GramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromGramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerLiter);
    }

    /**
     * Create a new MassConcentration instance from a TonnesPerCubicMillimeter
     *
     * @param value The unit as TonnesPerCubicMillimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromTonnesPerCubicMillimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicMillimeter);
    }

    /**
     * Create a new MassConcentration instance from a TonnesPerCubicCentimeter
     *
     * @param value The unit as TonnesPerCubicCentimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromTonnesPerCubicCentimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicCentimeter);
    }

    /**
     * Create a new MassConcentration instance from a TonnesPerCubicMeter
     *
     * @param value The unit as TonnesPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromTonnesPerCubicMeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicMeter);
    }

    /**
     * Create a new MassConcentration instance from a PoundsPerCubicInch
     *
     * @param value The unit as PoundsPerCubicInch to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromPoundsPerCubicInch(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerCubicInch);
    }

    /**
     * Create a new MassConcentration instance from a PoundsPerCubicFoot
     *
     * @param value The unit as PoundsPerCubicFoot to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromPoundsPerCubicFoot(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerCubicFoot);
    }

    /**
     * Create a new MassConcentration instance from a SlugsPerCubicFoot
     *
     * @param value The unit as SlugsPerCubicFoot to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromSlugsPerCubicFoot(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.SlugsPerCubicFoot);
    }

    /**
     * Create a new MassConcentration instance from a PoundsPerUSGallon
     *
     * @param value The unit as PoundsPerUSGallon to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromPoundsPerUSGallon(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerUSGallon);
    }

    /**
     * Create a new MassConcentration instance from a PoundsPerImperialGallon
     *
     * @param value The unit as PoundsPerImperialGallon to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromPoundsPerImperialGallon(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerImperialGallon);
    }

    /**
     * Create a new MassConcentration instance from a KilogramsPerCubicMillimeter
     *
     * @param value The unit as KilogramsPerCubicMillimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromKilogramsPerCubicMillimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilogramsPerCubicMillimeter);
    }

    /**
     * Create a new MassConcentration instance from a KilogramsPerCubicCentimeter
     *
     * @param value The unit as KilogramsPerCubicCentimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromKilogramsPerCubicCentimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilogramsPerCubicCentimeter);
    }

    /**
     * Create a new MassConcentration instance from a KilogramsPerCubicMeter
     *
     * @param value The unit as KilogramsPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromKilogramsPerCubicMeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilogramsPerCubicMeter);
    }

    /**
     * Create a new MassConcentration instance from a MilligramsPerCubicMeter
     *
     * @param value The unit as MilligramsPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromMilligramsPerCubicMeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MilligramsPerCubicMeter);
    }

    /**
     * Create a new MassConcentration instance from a MicrogramsPerCubicMeter
     *
     * @param value The unit as MicrogramsPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromMicrogramsPerCubicMeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerCubicMeter);
    }

    /**
     * Create a new MassConcentration instance from a PicogramsPerMicroliter
     *
     * @param value The unit as PicogramsPerMicroliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromPicogramsPerMicroliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PicogramsPerMicroliter);
    }

    /**
     * Create a new MassConcentration instance from a NanogramsPerMicroliter
     *
     * @param value The unit as NanogramsPerMicroliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromNanogramsPerMicroliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.NanogramsPerMicroliter);
    }

    /**
     * Create a new MassConcentration instance from a MicrogramsPerMicroliter
     *
     * @param value The unit as MicrogramsPerMicroliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromMicrogramsPerMicroliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerMicroliter);
    }

    /**
     * Create a new MassConcentration instance from a MilligramsPerMicroliter
     *
     * @param value The unit as MilligramsPerMicroliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromMilligramsPerMicroliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MilligramsPerMicroliter);
    }

    /**
     * Create a new MassConcentration instance from a CentigramsPerMicroliter
     *
     * @param value The unit as CentigramsPerMicroliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromCentigramsPerMicroliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.CentigramsPerMicroliter);
    }

    /**
     * Create a new MassConcentration instance from a DecigramsPerMicroliter
     *
     * @param value The unit as DecigramsPerMicroliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromDecigramsPerMicroliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.DecigramsPerMicroliter);
    }

    /**
     * Create a new MassConcentration instance from a PicogramsPerMilliliter
     *
     * @param value The unit as PicogramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromPicogramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PicogramsPerMilliliter);
    }

    /**
     * Create a new MassConcentration instance from a NanogramsPerMilliliter
     *
     * @param value The unit as NanogramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromNanogramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.NanogramsPerMilliliter);
    }

    /**
     * Create a new MassConcentration instance from a MicrogramsPerMilliliter
     *
     * @param value The unit as MicrogramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromMicrogramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerMilliliter);
    }

    /**
     * Create a new MassConcentration instance from a MilligramsPerMilliliter
     *
     * @param value The unit as MilligramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromMilligramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MilligramsPerMilliliter);
    }

    /**
     * Create a new MassConcentration instance from a CentigramsPerMilliliter
     *
     * @param value The unit as CentigramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromCentigramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.CentigramsPerMilliliter);
    }

    /**
     * Create a new MassConcentration instance from a DecigramsPerMilliliter
     *
     * @param value The unit as DecigramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromDecigramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.DecigramsPerMilliliter);
    }

    /**
     * Create a new MassConcentration instance from a PicogramsPerDeciliter
     *
     * @param value The unit as PicogramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromPicogramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PicogramsPerDeciliter);
    }

    /**
     * Create a new MassConcentration instance from a NanogramsPerDeciliter
     *
     * @param value The unit as NanogramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromNanogramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.NanogramsPerDeciliter);
    }

    /**
     * Create a new MassConcentration instance from a MicrogramsPerDeciliter
     *
     * @param value The unit as MicrogramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromMicrogramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerDeciliter);
    }

    /**
     * Create a new MassConcentration instance from a MilligramsPerDeciliter
     *
     * @param value The unit as MilligramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromMilligramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MilligramsPerDeciliter);
    }

    /**
     * Create a new MassConcentration instance from a CentigramsPerDeciliter
     *
     * @param value The unit as CentigramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromCentigramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.CentigramsPerDeciliter);
    }

    /**
     * Create a new MassConcentration instance from a DecigramsPerDeciliter
     *
     * @param value The unit as DecigramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromDecigramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.DecigramsPerDeciliter);
    }

    /**
     * Create a new MassConcentration instance from a PicogramsPerLiter
     *
     * @param value The unit as PicogramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromPicogramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PicogramsPerLiter);
    }

    /**
     * Create a new MassConcentration instance from a NanogramsPerLiter
     *
     * @param value The unit as NanogramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromNanogramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.NanogramsPerLiter);
    }

    /**
     * Create a new MassConcentration instance from a MicrogramsPerLiter
     *
     * @param value The unit as MicrogramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromMicrogramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerLiter);
    }

    /**
     * Create a new MassConcentration instance from a MilligramsPerLiter
     *
     * @param value The unit as MilligramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromMilligramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MilligramsPerLiter);
    }

    /**
     * Create a new MassConcentration instance from a CentigramsPerLiter
     *
     * @param value The unit as CentigramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromCentigramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.CentigramsPerLiter);
    }

    /**
     * Create a new MassConcentration instance from a DecigramsPerLiter
     *
     * @param value The unit as DecigramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromDecigramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.DecigramsPerLiter);
    }

    /**
     * Create a new MassConcentration instance from a KilogramsPerLiter
     *
     * @param value The unit as KilogramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromKilogramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilogramsPerLiter);
    }

    /**
     * Create a new MassConcentration instance from a KilopoundsPerCubicInch
     *
     * @param value The unit as KilopoundsPerCubicInch to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromKilopoundsPerCubicInch(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilopoundsPerCubicInch);
    }

    /**
     * Create a new MassConcentration instance from a KilopoundsPerCubicFoot
     *
     * @param value The unit as KilopoundsPerCubicFoot to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromKilopoundsPerCubicFoot(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilopoundsPerCubicFoot);
    }

    private convertFromBase(toUnit: MassConcentrationUnits): number {
        switch (toUnit) {
                
            case MassConcentrationUnits.GramsPerCubicMillimeter:
                return this.value*1e-6;
            case MassConcentrationUnits.GramsPerCubicCentimeter:
                return this.value*1e-3;
            case MassConcentrationUnits.GramsPerCubicMeter:
                return this.value*1e3;
            case MassConcentrationUnits.GramsPerMicroliter:
                return this.value*1e-6;
            case MassConcentrationUnits.GramsPerMilliliter:
                return this.value*1e-3;
            case MassConcentrationUnits.GramsPerDeciliter:
                return this.value*1e-1;
            case MassConcentrationUnits.GramsPerLiter:
                return this.value;
            case MassConcentrationUnits.TonnesPerCubicMillimeter:
                return this.value*1e-12;
            case MassConcentrationUnits.TonnesPerCubicCentimeter:
                return this.value*1e-9;
            case MassConcentrationUnits.TonnesPerCubicMeter:
                return this.value*0.001;
            case MassConcentrationUnits.PoundsPerCubicInch:
                return this.value*3.6127298147753e-5;
            case MassConcentrationUnits.PoundsPerCubicFoot:
                return this.value*0.062427961;
            case MassConcentrationUnits.SlugsPerCubicFoot:
                return this.value*0.00194032033;
            case MassConcentrationUnits.PoundsPerUSGallon:
                return this.value/1.19826427e2;
            case MassConcentrationUnits.PoundsPerImperialGallon:
                return this.value/9.9776398e1;
            case MassConcentrationUnits.KilogramsPerCubicMillimeter:
                return (this.value*1e-6) / 1000;
            case MassConcentrationUnits.KilogramsPerCubicCentimeter:
                return (this.value*1e-3) / 1000;
            case MassConcentrationUnits.KilogramsPerCubicMeter:
                return (this.value*1e3) / 1000;
            case MassConcentrationUnits.MilligramsPerCubicMeter:
                return (this.value*1e3) / 0.001;
            case MassConcentrationUnits.MicrogramsPerCubicMeter:
                return (this.value*1e3) / 0.000001;
            case MassConcentrationUnits.PicogramsPerMicroliter:
                return (this.value*1e-6) / 1e-12;
            case MassConcentrationUnits.NanogramsPerMicroliter:
                return (this.value*1e-6) / 1e-9;
            case MassConcentrationUnits.MicrogramsPerMicroliter:
                return (this.value*1e-6) / 0.000001;
            case MassConcentrationUnits.MilligramsPerMicroliter:
                return (this.value*1e-6) / 0.001;
            case MassConcentrationUnits.CentigramsPerMicroliter:
                return (this.value*1e-6) / 0.01;
            case MassConcentrationUnits.DecigramsPerMicroliter:
                return (this.value*1e-6) / 0.1;
            case MassConcentrationUnits.PicogramsPerMilliliter:
                return (this.value*1e-3) / 1e-12;
            case MassConcentrationUnits.NanogramsPerMilliliter:
                return (this.value*1e-3) / 1e-9;
            case MassConcentrationUnits.MicrogramsPerMilliliter:
                return (this.value*1e-3) / 0.000001;
            case MassConcentrationUnits.MilligramsPerMilliliter:
                return (this.value*1e-3) / 0.001;
            case MassConcentrationUnits.CentigramsPerMilliliter:
                return (this.value*1e-3) / 0.01;
            case MassConcentrationUnits.DecigramsPerMilliliter:
                return (this.value*1e-3) / 0.1;
            case MassConcentrationUnits.PicogramsPerDeciliter:
                return (this.value*1e-1) / 1e-12;
            case MassConcentrationUnits.NanogramsPerDeciliter:
                return (this.value*1e-1) / 1e-9;
            case MassConcentrationUnits.MicrogramsPerDeciliter:
                return (this.value*1e-1) / 0.000001;
            case MassConcentrationUnits.MilligramsPerDeciliter:
                return (this.value*1e-1) / 0.001;
            case MassConcentrationUnits.CentigramsPerDeciliter:
                return (this.value*1e-1) / 0.01;
            case MassConcentrationUnits.DecigramsPerDeciliter:
                return (this.value*1e-1) / 0.1;
            case MassConcentrationUnits.PicogramsPerLiter:
                return (this.value) / 1e-12;
            case MassConcentrationUnits.NanogramsPerLiter:
                return (this.value) / 1e-9;
            case MassConcentrationUnits.MicrogramsPerLiter:
                return (this.value) / 0.000001;
            case MassConcentrationUnits.MilligramsPerLiter:
                return (this.value) / 0.001;
            case MassConcentrationUnits.CentigramsPerLiter:
                return (this.value) / 0.01;
            case MassConcentrationUnits.DecigramsPerLiter:
                return (this.value) / 0.1;
            case MassConcentrationUnits.KilogramsPerLiter:
                return (this.value) / 1000;
            case MassConcentrationUnits.KilopoundsPerCubicInch:
                return (this.value*3.6127298147753e-5) / 1000;
            case MassConcentrationUnits.KilopoundsPerCubicFoot:
                return (this.value*0.062427961) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MassConcentrationUnits): number {
        switch (fromUnit) {
                
            case MassConcentrationUnits.GramsPerCubicMillimeter:
                return value/1e-6;
            case MassConcentrationUnits.GramsPerCubicCentimeter:
                return value/1e-3;
            case MassConcentrationUnits.GramsPerCubicMeter:
                return value/1e3;
            case MassConcentrationUnits.GramsPerMicroliter:
                return value/1e-6;
            case MassConcentrationUnits.GramsPerMilliliter:
                return value/1e-3;
            case MassConcentrationUnits.GramsPerDeciliter:
                return value/1e-1;
            case MassConcentrationUnits.GramsPerLiter:
                return value;
            case MassConcentrationUnits.TonnesPerCubicMillimeter:
                return value/1e-12;
            case MassConcentrationUnits.TonnesPerCubicCentimeter:
                return value/1e-9;
            case MassConcentrationUnits.TonnesPerCubicMeter:
                return value/0.001;
            case MassConcentrationUnits.PoundsPerCubicInch:
                return value/3.6127298147753e-5;
            case MassConcentrationUnits.PoundsPerCubicFoot:
                return value/0.062427961;
            case MassConcentrationUnits.SlugsPerCubicFoot:
                return value*515.378818;
            case MassConcentrationUnits.PoundsPerUSGallon:
                return value*1.19826427e2;
            case MassConcentrationUnits.PoundsPerImperialGallon:
                return value*9.9776398e1;
            case MassConcentrationUnits.KilogramsPerCubicMillimeter:
                return (value/1e-6) * 1000;
            case MassConcentrationUnits.KilogramsPerCubicCentimeter:
                return (value/1e-3) * 1000;
            case MassConcentrationUnits.KilogramsPerCubicMeter:
                return (value/1e3) * 1000;
            case MassConcentrationUnits.MilligramsPerCubicMeter:
                return (value/1e3) * 0.001;
            case MassConcentrationUnits.MicrogramsPerCubicMeter:
                return (value/1e3) * 0.000001;
            case MassConcentrationUnits.PicogramsPerMicroliter:
                return (value/1e-6) * 1e-12;
            case MassConcentrationUnits.NanogramsPerMicroliter:
                return (value/1e-6) * 1e-9;
            case MassConcentrationUnits.MicrogramsPerMicroliter:
                return (value/1e-6) * 0.000001;
            case MassConcentrationUnits.MilligramsPerMicroliter:
                return (value/1e-6) * 0.001;
            case MassConcentrationUnits.CentigramsPerMicroliter:
                return (value/1e-6) * 0.01;
            case MassConcentrationUnits.DecigramsPerMicroliter:
                return (value/1e-6) * 0.1;
            case MassConcentrationUnits.PicogramsPerMilliliter:
                return (value/1e-3) * 1e-12;
            case MassConcentrationUnits.NanogramsPerMilliliter:
                return (value/1e-3) * 1e-9;
            case MassConcentrationUnits.MicrogramsPerMilliliter:
                return (value/1e-3) * 0.000001;
            case MassConcentrationUnits.MilligramsPerMilliliter:
                return (value/1e-3) * 0.001;
            case MassConcentrationUnits.CentigramsPerMilliliter:
                return (value/1e-3) * 0.01;
            case MassConcentrationUnits.DecigramsPerMilliliter:
                return (value/1e-3) * 0.1;
            case MassConcentrationUnits.PicogramsPerDeciliter:
                return (value/1e-1) * 1e-12;
            case MassConcentrationUnits.NanogramsPerDeciliter:
                return (value/1e-1) * 1e-9;
            case MassConcentrationUnits.MicrogramsPerDeciliter:
                return (value/1e-1) * 0.000001;
            case MassConcentrationUnits.MilligramsPerDeciliter:
                return (value/1e-1) * 0.001;
            case MassConcentrationUnits.CentigramsPerDeciliter:
                return (value/1e-1) * 0.01;
            case MassConcentrationUnits.DecigramsPerDeciliter:
                return (value/1e-1) * 0.1;
            case MassConcentrationUnits.PicogramsPerLiter:
                return (value) * 1e-12;
            case MassConcentrationUnits.NanogramsPerLiter:
                return (value) * 1e-9;
            case MassConcentrationUnits.MicrogramsPerLiter:
                return (value) * 0.000001;
            case MassConcentrationUnits.MilligramsPerLiter:
                return (value) * 0.001;
            case MassConcentrationUnits.CentigramsPerLiter:
                return (value) * 0.01;
            case MassConcentrationUnits.DecigramsPerLiter:
                return (value) * 0.1;
            case MassConcentrationUnits.KilogramsPerLiter:
                return (value) * 1000;
            case MassConcentrationUnits.KilopoundsPerCubicInch:
                return (value/3.6127298147753e-5) * 1000;
            case MassConcentrationUnits.KilopoundsPerCubicFoot:
                return (value/0.062427961) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the MassConcentration to string.
     * Note! the default format for MassConcentration is KilogramsPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassConcentration.
     * @returns The string format of the MassConcentration.
     */
    public toString(toUnit: MassConcentrationUnits = MassConcentrationUnits.KilogramsPerCubicMeter): string {

        switch (toUnit) {
            
            case MassConcentrationUnits.GramsPerCubicMillimeter:
                return this.GramsPerCubicMillimeter + ` g/mm³`;
            case MassConcentrationUnits.GramsPerCubicCentimeter:
                return this.GramsPerCubicCentimeter + ` g/cm³`;
            case MassConcentrationUnits.GramsPerCubicMeter:
                return this.GramsPerCubicMeter + ` g/m³`;
            case MassConcentrationUnits.GramsPerMicroliter:
                return this.GramsPerMicroliter + ` g/μL`;
            case MassConcentrationUnits.GramsPerMilliliter:
                return this.GramsPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.GramsPerDeciliter:
                return this.GramsPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.GramsPerLiter:
                return this.GramsPerLiter + ` g/L`;
            case MassConcentrationUnits.TonnesPerCubicMillimeter:
                return this.TonnesPerCubicMillimeter + ` t/mm³`;
            case MassConcentrationUnits.TonnesPerCubicCentimeter:
                return this.TonnesPerCubicCentimeter + ` t/cm³`;
            case MassConcentrationUnits.TonnesPerCubicMeter:
                return this.TonnesPerCubicMeter + ` t/m³`;
            case MassConcentrationUnits.PoundsPerCubicInch:
                return this.PoundsPerCubicInch + ` lb/in³`;
            case MassConcentrationUnits.PoundsPerCubicFoot:
                return this.PoundsPerCubicFoot + ` lb/ft³`;
            case MassConcentrationUnits.SlugsPerCubicFoot:
                return this.SlugsPerCubicFoot + ` slug/ft³`;
            case MassConcentrationUnits.PoundsPerUSGallon:
                return this.PoundsPerUSGallon + ` ppg (U.S.)`;
            case MassConcentrationUnits.PoundsPerImperialGallon:
                return this.PoundsPerImperialGallon + ` ppg (imp.)`;
            case MassConcentrationUnits.KilogramsPerCubicMillimeter:
                return this.KilogramsPerCubicMillimeter + ` `;
            case MassConcentrationUnits.KilogramsPerCubicCentimeter:
                return this.KilogramsPerCubicCentimeter + ` `;
            case MassConcentrationUnits.KilogramsPerCubicMeter:
                return this.KilogramsPerCubicMeter + ` `;
            case MassConcentrationUnits.MilligramsPerCubicMeter:
                return this.MilligramsPerCubicMeter + ` `;
            case MassConcentrationUnits.MicrogramsPerCubicMeter:
                return this.MicrogramsPerCubicMeter + ` `;
            case MassConcentrationUnits.PicogramsPerMicroliter:
                return this.PicogramsPerMicroliter + ` `;
            case MassConcentrationUnits.NanogramsPerMicroliter:
                return this.NanogramsPerMicroliter + ` `;
            case MassConcentrationUnits.MicrogramsPerMicroliter:
                return this.MicrogramsPerMicroliter + ` `;
            case MassConcentrationUnits.MilligramsPerMicroliter:
                return this.MilligramsPerMicroliter + ` `;
            case MassConcentrationUnits.CentigramsPerMicroliter:
                return this.CentigramsPerMicroliter + ` `;
            case MassConcentrationUnits.DecigramsPerMicroliter:
                return this.DecigramsPerMicroliter + ` `;
            case MassConcentrationUnits.PicogramsPerMilliliter:
                return this.PicogramsPerMilliliter + ` `;
            case MassConcentrationUnits.NanogramsPerMilliliter:
                return this.NanogramsPerMilliliter + ` `;
            case MassConcentrationUnits.MicrogramsPerMilliliter:
                return this.MicrogramsPerMilliliter + ` `;
            case MassConcentrationUnits.MilligramsPerMilliliter:
                return this.MilligramsPerMilliliter + ` `;
            case MassConcentrationUnits.CentigramsPerMilliliter:
                return this.CentigramsPerMilliliter + ` `;
            case MassConcentrationUnits.DecigramsPerMilliliter:
                return this.DecigramsPerMilliliter + ` `;
            case MassConcentrationUnits.PicogramsPerDeciliter:
                return this.PicogramsPerDeciliter + ` `;
            case MassConcentrationUnits.NanogramsPerDeciliter:
                return this.NanogramsPerDeciliter + ` `;
            case MassConcentrationUnits.MicrogramsPerDeciliter:
                return this.MicrogramsPerDeciliter + ` `;
            case MassConcentrationUnits.MilligramsPerDeciliter:
                return this.MilligramsPerDeciliter + ` `;
            case MassConcentrationUnits.CentigramsPerDeciliter:
                return this.CentigramsPerDeciliter + ` `;
            case MassConcentrationUnits.DecigramsPerDeciliter:
                return this.DecigramsPerDeciliter + ` `;
            case MassConcentrationUnits.PicogramsPerLiter:
                return this.PicogramsPerLiter + ` `;
            case MassConcentrationUnits.NanogramsPerLiter:
                return this.NanogramsPerLiter + ` `;
            case MassConcentrationUnits.MicrogramsPerLiter:
                return this.MicrogramsPerLiter + ` `;
            case MassConcentrationUnits.MilligramsPerLiter:
                return this.MilligramsPerLiter + ` `;
            case MassConcentrationUnits.CentigramsPerLiter:
                return this.CentigramsPerLiter + ` `;
            case MassConcentrationUnits.DecigramsPerLiter:
                return this.DecigramsPerLiter + ` `;
            case MassConcentrationUnits.KilogramsPerLiter:
                return this.KilogramsPerLiter + ` `;
            case MassConcentrationUnits.KilopoundsPerCubicInch:
                return this.KilopoundsPerCubicInch + ` `;
            case MassConcentrationUnits.KilopoundsPerCubicFoot:
                return this.KilopoundsPerCubicFoot + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given MassConcentration are equals to the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns True if the given MassConcentration are equal to the current MassConcentration.
     */
    public equals(massConcentration: MassConcentration): boolean {
        return this.value === massConcentration.BaseValue;
    }

    /**
     * Compare the given MassConcentration against the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns 0 if they are equal, -1 if the current MassConcentration is less then other, 1 if the current MassConcentration is greater then other.
     */
    public compareTo(massConcentration: MassConcentration): number {

        if (this.value > massConcentration.BaseValue)
            return 1;
        if (this.value < massConcentration.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    public add(massConcentration: MassConcentration): MassConcentration {
        return new MassConcentration(this.value + massConcentration.BaseValue)
    }

    /**
     * Subtract the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    public subtract(massConcentration: MassConcentration): MassConcentration {
        return new MassConcentration(this.value - massConcentration.BaseValue)
    }

    /**
     * Multiply the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    public multiply(massConcentration: MassConcentration): MassConcentration {
        return new MassConcentration(this.value * massConcentration.BaseValue)
    }

    /**
     * Divide the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    public divide(massConcentration: MassConcentration): MassConcentration {
        return new MassConcentration(this.value / massConcentration.BaseValue)
    }

    /**
     * Modulo the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    public modulo(massConcentration: MassConcentration): MassConcentration {
        return new MassConcentration(this.value % massConcentration.BaseValue)
    }

    /**
     * Pow the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    public pow(massConcentration: MassConcentration): MassConcentration {
        return new MassConcentration(this.value ** massConcentration.BaseValue)
    }
}
