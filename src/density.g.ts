/** DensityUnits enumeration */
export enum DensityUnits {
    /** */
    GramsPerCubicMillimeter,
    /** */
    GramsPerCubicCentimeter,
    /** */
    GramsPerCubicMeter,
    /** */
    PoundsPerCubicInch,
    /** */
    PoundsPerCubicFoot,
    /** */
    TonnesPerCubicMillimeter,
    /** */
    TonnesPerCubicCentimeter,
    /** */
    TonnesPerCubicMeter,
    /** */
    SlugsPerCubicFoot,
    /** */
    GramsPerLiter,
    /** */
    GramsPerDeciLiter,
    /** */
    GramsPerMilliliter,
    /** */
    PoundsPerUSGallon,
    /** */
    PoundsPerImperialGallon,
    /** */
    KilogramsPerLiter,
    /** */
    KilogramsPerCubicMillimeter,
    /** */
    KilogramsPerCubicCentimeter,
    /** */
    KilogramsPerCubicMeter,
    /** */
    MicrogramsPerCubicMeter,
    /** */
    KilopoundsPerCubicInch,
    /** */
    KilopoundsPerCubicFoot,
    /** */
    PicogramsPerLiter,
    /** */
    NanogramsPerLiter,
    /** */
    MicrogramsPerLiter,
    /** */
    CentigramsPerLiter,
    /** */
    DecigramsPerLiter,
    /** */
    PicogramsPerDeciLiter,
    /** */
    NanogramsPerDeciLiter,
    /** */
    MicrogramsPerDeciLiter,
    /** */
    CentigramsPerDeciLiter,
    /** */
    DecigramsPerDeciLiter,
    /** */
    PicogramsPerMilliliter,
    /** */
    NanogramsPerMilliliter,
    /** */
    MicrogramsPerMilliliter,
    /** */
    CentigramsPerMilliliter,
    /** */
    DecigramsPerMilliliter
}

/** The density, or more precisely, the volumetric mass density, of a substance is its mass per unit volume. */
export class Density {
    private value: number;
    private gramspercubicmillimeterLazy: number | null = null;
    private gramspercubiccentimeterLazy: number | null = null;
    private gramspercubicmeterLazy: number | null = null;
    private poundspercubicinchLazy: number | null = null;
    private poundspercubicfootLazy: number | null = null;
    private tonnespercubicmillimeterLazy: number | null = null;
    private tonnespercubiccentimeterLazy: number | null = null;
    private tonnespercubicmeterLazy: number | null = null;
    private slugspercubicfootLazy: number | null = null;
    private gramsperliterLazy: number | null = null;
    private gramsperdeciliterLazy: number | null = null;
    private gramspermilliliterLazy: number | null = null;
    private poundsperusgallonLazy: number | null = null;
    private poundsperimperialgallonLazy: number | null = null;
    private kilogramsperliterLazy: number | null = null;
    private kilogramspercubicmillimeterLazy: number | null = null;
    private kilogramspercubiccentimeterLazy: number | null = null;
    private kilogramspercubicmeterLazy: number | null = null;
    private microgramspercubicmeterLazy: number | null = null;
    private kilopoundspercubicinchLazy: number | null = null;
    private kilopoundspercubicfootLazy: number | null = null;
    private picogramsperliterLazy: number | null = null;
    private nanogramsperliterLazy: number | null = null;
    private microgramsperliterLazy: number | null = null;
    private centigramsperliterLazy: number | null = null;
    private decigramsperliterLazy: number | null = null;
    private picogramsperdeciliterLazy: number | null = null;
    private nanogramsperdeciliterLazy: number | null = null;
    private microgramsperdeciliterLazy: number | null = null;
    private centigramsperdeciliterLazy: number | null = null;
    private decigramsperdeciliterLazy: number | null = null;
    private picogramspermilliliterLazy: number | null = null;
    private nanogramspermilliliterLazy: number | null = null;
    private microgramspermilliliterLazy: number | null = null;
    private centigramspermilliliterLazy: number | null = null;
    private decigramspermilliliterLazy: number | null = null;

    /**
     * Create a new Density.
     * @param value The value.
     * @param fromUnit The ‘Density’ unit to create from.
     */
    public constructor(value: number, fromUnit: DensityUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Density is KilogramPerCubicMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get GramsPerCubicMillimeter(): number {
        if(this.gramspercubicmillimeterLazy !== null){
            return this.gramspercubicmillimeterLazy;
        }
        return this.gramspercubicmillimeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicMillimeter);
    }

    /** */
    public get GramsPerCubicCentimeter(): number {
        if(this.gramspercubiccentimeterLazy !== null){
            return this.gramspercubiccentimeterLazy;
        }
        return this.gramspercubiccentimeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicCentimeter);
    }

    /** */
    public get GramsPerCubicMeter(): number {
        if(this.gramspercubicmeterLazy !== null){
            return this.gramspercubicmeterLazy;
        }
        return this.gramspercubicmeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicMeter);
    }

    /** */
    public get PoundsPerCubicInch(): number {
        if(this.poundspercubicinchLazy !== null){
            return this.poundspercubicinchLazy;
        }
        return this.poundspercubicinchLazy = this.convertFromBase(DensityUnits.PoundsPerCubicInch);
    }

    /** */
    public get PoundsPerCubicFoot(): number {
        if(this.poundspercubicfootLazy !== null){
            return this.poundspercubicfootLazy;
        }
        return this.poundspercubicfootLazy = this.convertFromBase(DensityUnits.PoundsPerCubicFoot);
    }

    /** */
    public get TonnesPerCubicMillimeter(): number {
        if(this.tonnespercubicmillimeterLazy !== null){
            return this.tonnespercubicmillimeterLazy;
        }
        return this.tonnespercubicmillimeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicMillimeter);
    }

    /** */
    public get TonnesPerCubicCentimeter(): number {
        if(this.tonnespercubiccentimeterLazy !== null){
            return this.tonnespercubiccentimeterLazy;
        }
        return this.tonnespercubiccentimeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicCentimeter);
    }

    /** */
    public get TonnesPerCubicMeter(): number {
        if(this.tonnespercubicmeterLazy !== null){
            return this.tonnespercubicmeterLazy;
        }
        return this.tonnespercubicmeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicMeter);
    }

    /** */
    public get SlugsPerCubicFoot(): number {
        if(this.slugspercubicfootLazy !== null){
            return this.slugspercubicfootLazy;
        }
        return this.slugspercubicfootLazy = this.convertFromBase(DensityUnits.SlugsPerCubicFoot);
    }

    /** */
    public get GramsPerLiter(): number {
        if(this.gramsperliterLazy !== null){
            return this.gramsperliterLazy;
        }
        return this.gramsperliterLazy = this.convertFromBase(DensityUnits.GramsPerLiter);
    }

    /** */
    public get GramsPerDeciLiter(): number {
        if(this.gramsperdeciliterLazy !== null){
            return this.gramsperdeciliterLazy;
        }
        return this.gramsperdeciliterLazy = this.convertFromBase(DensityUnits.GramsPerDeciLiter);
    }

    /** */
    public get GramsPerMilliliter(): number {
        if(this.gramspermilliliterLazy !== null){
            return this.gramspermilliliterLazy;
        }
        return this.gramspermilliliterLazy = this.convertFromBase(DensityUnits.GramsPerMilliliter);
    }

    /** */
    public get PoundsPerUSGallon(): number {
        if(this.poundsperusgallonLazy !== null){
            return this.poundsperusgallonLazy;
        }
        return this.poundsperusgallonLazy = this.convertFromBase(DensityUnits.PoundsPerUSGallon);
    }

    /** */
    public get PoundsPerImperialGallon(): number {
        if(this.poundsperimperialgallonLazy !== null){
            return this.poundsperimperialgallonLazy;
        }
        return this.poundsperimperialgallonLazy = this.convertFromBase(DensityUnits.PoundsPerImperialGallon);
    }

    /** */
    public get KilogramsPerLiter(): number {
        if(this.kilogramsperliterLazy !== null){
            return this.kilogramsperliterLazy;
        }
        return this.kilogramsperliterLazy = this.convertFromBase(DensityUnits.KilogramsPerLiter);
    }

    /** */
    public get KilogramsPerCubicMillimeter(): number {
        if(this.kilogramspercubicmillimeterLazy !== null){
            return this.kilogramspercubicmillimeterLazy;
        }
        return this.kilogramspercubicmillimeterLazy = this.convertFromBase(DensityUnits.KilogramsPerCubicMillimeter);
    }

    /** */
    public get KilogramsPerCubicCentimeter(): number {
        if(this.kilogramspercubiccentimeterLazy !== null){
            return this.kilogramspercubiccentimeterLazy;
        }
        return this.kilogramspercubiccentimeterLazy = this.convertFromBase(DensityUnits.KilogramsPerCubicCentimeter);
    }

    /** */
    public get KilogramsPerCubicMeter(): number {
        if(this.kilogramspercubicmeterLazy !== null){
            return this.kilogramspercubicmeterLazy;
        }
        return this.kilogramspercubicmeterLazy = this.convertFromBase(DensityUnits.KilogramsPerCubicMeter);
    }

    /** */
    public get MicrogramsPerCubicMeter(): number {
        if(this.microgramspercubicmeterLazy !== null){
            return this.microgramspercubicmeterLazy;
        }
        return this.microgramspercubicmeterLazy = this.convertFromBase(DensityUnits.MicrogramsPerCubicMeter);
    }

    /** */
    public get KilopoundsPerCubicInch(): number {
        if(this.kilopoundspercubicinchLazy !== null){
            return this.kilopoundspercubicinchLazy;
        }
        return this.kilopoundspercubicinchLazy = this.convertFromBase(DensityUnits.KilopoundsPerCubicInch);
    }

    /** */
    public get KilopoundsPerCubicFoot(): number {
        if(this.kilopoundspercubicfootLazy !== null){
            return this.kilopoundspercubicfootLazy;
        }
        return this.kilopoundspercubicfootLazy = this.convertFromBase(DensityUnits.KilopoundsPerCubicFoot);
    }

    /** */
    public get PicogramsPerLiter(): number {
        if(this.picogramsperliterLazy !== null){
            return this.picogramsperliterLazy;
        }
        return this.picogramsperliterLazy = this.convertFromBase(DensityUnits.PicogramsPerLiter);
    }

    /** */
    public get NanogramsPerLiter(): number {
        if(this.nanogramsperliterLazy !== null){
            return this.nanogramsperliterLazy;
        }
        return this.nanogramsperliterLazy = this.convertFromBase(DensityUnits.NanogramsPerLiter);
    }

    /** */
    public get MicrogramsPerLiter(): number {
        if(this.microgramsperliterLazy !== null){
            return this.microgramsperliterLazy;
        }
        return this.microgramsperliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerLiter);
    }

    /** */
    public get CentigramsPerLiter(): number {
        if(this.centigramsperliterLazy !== null){
            return this.centigramsperliterLazy;
        }
        return this.centigramsperliterLazy = this.convertFromBase(DensityUnits.CentigramsPerLiter);
    }

    /** */
    public get DecigramsPerLiter(): number {
        if(this.decigramsperliterLazy !== null){
            return this.decigramsperliterLazy;
        }
        return this.decigramsperliterLazy = this.convertFromBase(DensityUnits.DecigramsPerLiter);
    }

    /** */
    public get PicogramsPerDeciLiter(): number {
        if(this.picogramsperdeciliterLazy !== null){
            return this.picogramsperdeciliterLazy;
        }
        return this.picogramsperdeciliterLazy = this.convertFromBase(DensityUnits.PicogramsPerDeciLiter);
    }

    /** */
    public get NanogramsPerDeciLiter(): number {
        if(this.nanogramsperdeciliterLazy !== null){
            return this.nanogramsperdeciliterLazy;
        }
        return this.nanogramsperdeciliterLazy = this.convertFromBase(DensityUnits.NanogramsPerDeciLiter);
    }

    /** */
    public get MicrogramsPerDeciLiter(): number {
        if(this.microgramsperdeciliterLazy !== null){
            return this.microgramsperdeciliterLazy;
        }
        return this.microgramsperdeciliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerDeciLiter);
    }

    /** */
    public get CentigramsPerDeciLiter(): number {
        if(this.centigramsperdeciliterLazy !== null){
            return this.centigramsperdeciliterLazy;
        }
        return this.centigramsperdeciliterLazy = this.convertFromBase(DensityUnits.CentigramsPerDeciLiter);
    }

    /** */
    public get DecigramsPerDeciLiter(): number {
        if(this.decigramsperdeciliterLazy !== null){
            return this.decigramsperdeciliterLazy;
        }
        return this.decigramsperdeciliterLazy = this.convertFromBase(DensityUnits.DecigramsPerDeciLiter);
    }

    /** */
    public get PicogramsPerMilliliter(): number {
        if(this.picogramspermilliliterLazy !== null){
            return this.picogramspermilliliterLazy;
        }
        return this.picogramspermilliliterLazy = this.convertFromBase(DensityUnits.PicogramsPerMilliliter);
    }

    /** */
    public get NanogramsPerMilliliter(): number {
        if(this.nanogramspermilliliterLazy !== null){
            return this.nanogramspermilliliterLazy;
        }
        return this.nanogramspermilliliterLazy = this.convertFromBase(DensityUnits.NanogramsPerMilliliter);
    }

    /** */
    public get MicrogramsPerMilliliter(): number {
        if(this.microgramspermilliliterLazy !== null){
            return this.microgramspermilliliterLazy;
        }
        return this.microgramspermilliliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerMilliliter);
    }

    /** */
    public get CentigramsPerMilliliter(): number {
        if(this.centigramspermilliliterLazy !== null){
            return this.centigramspermilliliterLazy;
        }
        return this.centigramspermilliliterLazy = this.convertFromBase(DensityUnits.CentigramsPerMilliliter);
    }

    /** */
    public get DecigramsPerMilliliter(): number {
        if(this.decigramspermilliliterLazy !== null){
            return this.decigramspermilliliterLazy;
        }
        return this.decigramspermilliliterLazy = this.convertFromBase(DensityUnits.DecigramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a GramsPerCubicMillimeter
     *
     * @param value The unit as GramsPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicMillimeter);
    }

    /**
     * Create a new Density instance from a GramsPerCubicCentimeter
     *
     * @param value The unit as GramsPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicCentimeter);
    }

    /**
     * Create a new Density instance from a GramsPerCubicMeter
     *
     * @param value The unit as GramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicMeter);
    }

    /**
     * Create a new Density instance from a PoundsPerCubicInch
     *
     * @param value The unit as PoundsPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerCubicInch(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicInch);
    }

    /**
     * Create a new Density instance from a PoundsPerCubicFoot
     *
     * @param value The unit as PoundsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicFoot);
    }

    /**
     * Create a new Density instance from a TonnesPerCubicMillimeter
     *
     * @param value The unit as TonnesPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromTonnesPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicMillimeter);
    }

    /**
     * Create a new Density instance from a TonnesPerCubicCentimeter
     *
     * @param value The unit as TonnesPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromTonnesPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicCentimeter);
    }

    /**
     * Create a new Density instance from a TonnesPerCubicMeter
     *
     * @param value The unit as TonnesPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromTonnesPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicMeter);
    }

    /**
     * Create a new Density instance from a SlugsPerCubicFoot
     *
     * @param value The unit as SlugsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromSlugsPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.SlugsPerCubicFoot);
    }

    /**
     * Create a new Density instance from a GramsPerLiter
     *
     * @param value The unit as GramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerLiter);
    }

    /**
     * Create a new Density instance from a GramsPerDeciLiter
     *
     * @param value The unit as GramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a GramsPerMilliliter
     *
     * @param value The unit as GramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a PoundsPerUSGallon
     *
     * @param value The unit as PoundsPerUSGallon to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerUSGallon(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerUSGallon);
    }

    /**
     * Create a new Density instance from a PoundsPerImperialGallon
     *
     * @param value The unit as PoundsPerImperialGallon to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerImperialGallon(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerImperialGallon);
    }

    /**
     * Create a new Density instance from a KilogramsPerLiter
     *
     * @param value The unit as KilogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilogramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.KilogramsPerLiter);
    }

    /**
     * Create a new Density instance from a KilogramsPerCubicMillimeter
     *
     * @param value The unit as KilogramsPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilogramsPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.KilogramsPerCubicMillimeter);
    }

    /**
     * Create a new Density instance from a KilogramsPerCubicCentimeter
     *
     * @param value The unit as KilogramsPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilogramsPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.KilogramsPerCubicCentimeter);
    }

    /**
     * Create a new Density instance from a KilogramsPerCubicMeter
     *
     * @param value The unit as KilogramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilogramsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.KilogramsPerCubicMeter);
    }

    /**
     * Create a new Density instance from a MicrogramsPerCubicMeter
     *
     * @param value The unit as MicrogramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMicrogramsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramsPerCubicMeter);
    }

    /**
     * Create a new Density instance from a KilopoundsPerCubicInch
     *
     * @param value The unit as KilopoundsPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilopoundsPerCubicInch(value: number): Density {
        return new Density(value, DensityUnits.KilopoundsPerCubicInch);
    }

    /**
     * Create a new Density instance from a KilopoundsPerCubicFoot
     *
     * @param value The unit as KilopoundsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilopoundsPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.KilopoundsPerCubicFoot);
    }

    /**
     * Create a new Density instance from a PicogramsPerLiter
     *
     * @param value The unit as PicogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPicogramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.PicogramsPerLiter);
    }

    /**
     * Create a new Density instance from a NanogramsPerLiter
     *
     * @param value The unit as NanogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromNanogramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.NanogramsPerLiter);
    }

    /**
     * Create a new Density instance from a MicrogramsPerLiter
     *
     * @param value The unit as MicrogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMicrogramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramsPerLiter);
    }

    /**
     * Create a new Density instance from a CentigramsPerLiter
     *
     * @param value The unit as CentigramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromCentigramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.CentigramsPerLiter);
    }

    /**
     * Create a new Density instance from a DecigramsPerLiter
     *
     * @param value The unit as DecigramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromDecigramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.DecigramsPerLiter);
    }

    /**
     * Create a new Density instance from a PicogramsPerDeciLiter
     *
     * @param value The unit as PicogramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPicogramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.PicogramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a NanogramsPerDeciLiter
     *
     * @param value The unit as NanogramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromNanogramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.NanogramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a MicrogramsPerDeciLiter
     *
     * @param value The unit as MicrogramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMicrogramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a CentigramsPerDeciLiter
     *
     * @param value The unit as CentigramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromCentigramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.CentigramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a DecigramsPerDeciLiter
     *
     * @param value The unit as DecigramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromDecigramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.DecigramsPerDeciLiter);
    }

    /**
     * Create a new Density instance from a PicogramsPerMilliliter
     *
     * @param value The unit as PicogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPicogramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.PicogramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a NanogramsPerMilliliter
     *
     * @param value The unit as NanogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromNanogramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.NanogramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a MicrogramsPerMilliliter
     *
     * @param value The unit as MicrogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMicrogramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a CentigramsPerMilliliter
     *
     * @param value The unit as CentigramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromCentigramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.CentigramsPerMilliliter);
    }

    /**
     * Create a new Density instance from a DecigramsPerMilliliter
     *
     * @param value The unit as DecigramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromDecigramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.DecigramsPerMilliliter);
    }

    private convertFromBase(toUnit: DensityUnits): number {
        switch (toUnit) {
                
            case DensityUnits.GramsPerCubicMillimeter:
                return this.value*1e-6;
            case DensityUnits.GramsPerCubicCentimeter:
                return this.value*1e-3;
            case DensityUnits.GramsPerCubicMeter:
                return this.value*1e3;
            case DensityUnits.PoundsPerCubicInch:
                return this.value*3.6127298147753e-5;
            case DensityUnits.PoundsPerCubicFoot:
                return this.value*0.062427961;
            case DensityUnits.TonnesPerCubicMillimeter:
                return this.value*1e-12;
            case DensityUnits.TonnesPerCubicCentimeter:
                return this.value*1e-9;
            case DensityUnits.TonnesPerCubicMeter:
                return this.value*0.001;
            case DensityUnits.SlugsPerCubicFoot:
                return this.value*0.00194032033;
            case DensityUnits.GramsPerLiter:
                return this.value*1;
            case DensityUnits.GramsPerDeciLiter:
                return this.value*1e-1;
            case DensityUnits.GramsPerMilliliter:
                return this.value*1e-3;
            case DensityUnits.PoundsPerUSGallon:
                return this.value/1.19826427e2;
            case DensityUnits.PoundsPerImperialGallon:
                return this.value/9.9776398e1;
            case DensityUnits.KilogramsPerLiter:
                return this.value/1e3;
            case DensityUnits.KilogramsPerCubicMillimeter:
                return (this.value*1e-6) / 1000;
            case DensityUnits.KilogramsPerCubicCentimeter:
                return (this.value*1e-3) / 1000;
            case DensityUnits.KilogramsPerCubicMeter:
                return (this.value*1e3) / 1000;
            case DensityUnits.MicrogramsPerCubicMeter:
                return (this.value*1e3) / 0.000001;
            case DensityUnits.KilopoundsPerCubicInch:
                return (this.value*3.6127298147753e-5) / 1000;
            case DensityUnits.KilopoundsPerCubicFoot:
                return (this.value*0.062427961) / 1000;
            case DensityUnits.PicogramsPerLiter:
                return (this.value*1) / 1e-12;
            case DensityUnits.NanogramsPerLiter:
                return (this.value*1) / 1e-9;
            case DensityUnits.MicrogramsPerLiter:
                return (this.value*1) / 0.000001;
            case DensityUnits.CentigramsPerLiter:
                return (this.value*1) / 0.01;
            case DensityUnits.DecigramsPerLiter:
                return (this.value*1) / 0.1;
            case DensityUnits.PicogramsPerDeciLiter:
                return (this.value*1e-1) / 1e-12;
            case DensityUnits.NanogramsPerDeciLiter:
                return (this.value*1e-1) / 1e-9;
            case DensityUnits.MicrogramsPerDeciLiter:
                return (this.value*1e-1) / 0.000001;
            case DensityUnits.CentigramsPerDeciLiter:
                return (this.value*1e-1) / 0.01;
            case DensityUnits.DecigramsPerDeciLiter:
                return (this.value*1e-1) / 0.1;
            case DensityUnits.PicogramsPerMilliliter:
                return (this.value*1e-3) / 1e-12;
            case DensityUnits.NanogramsPerMilliliter:
                return (this.value*1e-3) / 1e-9;
            case DensityUnits.MicrogramsPerMilliliter:
                return (this.value*1e-3) / 0.000001;
            case DensityUnits.CentigramsPerMilliliter:
                return (this.value*1e-3) / 0.01;
            case DensityUnits.DecigramsPerMilliliter:
                return (this.value*1e-3) / 0.1;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: DensityUnits): number {
        switch (fromUnit) {
                
            case DensityUnits.GramsPerCubicMillimeter:
                return value/1e-6;
            case DensityUnits.GramsPerCubicCentimeter:
                return value/1e-3;
            case DensityUnits.GramsPerCubicMeter:
                return value/1e3;
            case DensityUnits.PoundsPerCubicInch:
                return value/3.6127298147753e-5;
            case DensityUnits.PoundsPerCubicFoot:
                return value/0.062427961;
            case DensityUnits.TonnesPerCubicMillimeter:
                return value/1e-12;
            case DensityUnits.TonnesPerCubicCentimeter:
                return value/1e-9;
            case DensityUnits.TonnesPerCubicMeter:
                return value/0.001;
            case DensityUnits.SlugsPerCubicFoot:
                return value*515.378818;
            case DensityUnits.GramsPerLiter:
                return value/1;
            case DensityUnits.GramsPerDeciLiter:
                return value/1e-1;
            case DensityUnits.GramsPerMilliliter:
                return value/1e-3;
            case DensityUnits.PoundsPerUSGallon:
                return value*1.19826427e2;
            case DensityUnits.PoundsPerImperialGallon:
                return value*9.9776398e1;
            case DensityUnits.KilogramsPerLiter:
                return value*1e3;
            case DensityUnits.KilogramsPerCubicMillimeter:
                return (value/1e-6) * 1000;
            case DensityUnits.KilogramsPerCubicCentimeter:
                return (value/1e-3) * 1000;
            case DensityUnits.KilogramsPerCubicMeter:
                return (value/1e3) * 1000;
            case DensityUnits.MicrogramsPerCubicMeter:
                return (value/1e3) * 0.000001;
            case DensityUnits.KilopoundsPerCubicInch:
                return (value/3.6127298147753e-5) * 1000;
            case DensityUnits.KilopoundsPerCubicFoot:
                return (value/0.062427961) * 1000;
            case DensityUnits.PicogramsPerLiter:
                return (value/1) * 1e-12;
            case DensityUnits.NanogramsPerLiter:
                return (value/1) * 1e-9;
            case DensityUnits.MicrogramsPerLiter:
                return (value/1) * 0.000001;
            case DensityUnits.CentigramsPerLiter:
                return (value/1) * 0.01;
            case DensityUnits.DecigramsPerLiter:
                return (value/1) * 0.1;
            case DensityUnits.PicogramsPerDeciLiter:
                return (value/1e-1) * 1e-12;
            case DensityUnits.NanogramsPerDeciLiter:
                return (value/1e-1) * 1e-9;
            case DensityUnits.MicrogramsPerDeciLiter:
                return (value/1e-1) * 0.000001;
            case DensityUnits.CentigramsPerDeciLiter:
                return (value/1e-1) * 0.01;
            case DensityUnits.DecigramsPerDeciLiter:
                return (value/1e-1) * 0.1;
            case DensityUnits.PicogramsPerMilliliter:
                return (value/1e-3) * 1e-12;
            case DensityUnits.NanogramsPerMilliliter:
                return (value/1e-3) * 1e-9;
            case DensityUnits.MicrogramsPerMilliliter:
                return (value/1e-3) * 0.000001;
            case DensityUnits.CentigramsPerMilliliter:
                return (value/1e-3) * 0.01;
            case DensityUnits.DecigramsPerMilliliter:
                return (value/1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Density to string.
     * Note! the default format for Density is KilogramsPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Density.
     * @returns The string format of the Density.
     */
    public toString(toUnit: DensityUnits = DensityUnits.KilogramsPerCubicMeter): string {

        switch (toUnit) {
            
            case DensityUnits.GramsPerCubicMillimeter:
                return this.GramsPerCubicMillimeter + ` g/mm³`;
            case DensityUnits.GramsPerCubicCentimeter:
                return this.GramsPerCubicCentimeter + ` g/cm³`;
            case DensityUnits.GramsPerCubicMeter:
                return this.GramsPerCubicMeter + ` g/m³`;
            case DensityUnits.PoundsPerCubicInch:
                return this.PoundsPerCubicInch + ` lb/in³`;
            case DensityUnits.PoundsPerCubicFoot:
                return this.PoundsPerCubicFoot + ` lb/ft³`;
            case DensityUnits.TonnesPerCubicMillimeter:
                return this.TonnesPerCubicMillimeter + ` t/mm³`;
            case DensityUnits.TonnesPerCubicCentimeter:
                return this.TonnesPerCubicCentimeter + ` t/cm³`;
            case DensityUnits.TonnesPerCubicMeter:
                return this.TonnesPerCubicMeter + ` t/m³`;
            case DensityUnits.SlugsPerCubicFoot:
                return this.SlugsPerCubicFoot + ` slug/ft³`;
            case DensityUnits.GramsPerLiter:
                return this.GramsPerLiter + ` g/L`;
            case DensityUnits.GramsPerDeciLiter:
                return this.GramsPerDeciLiter + ` g/dl`;
            case DensityUnits.GramsPerMilliliter:
                return this.GramsPerMilliliter + ` g/ml`;
            case DensityUnits.PoundsPerUSGallon:
                return this.PoundsPerUSGallon + ` ppg (U.S.)`;
            case DensityUnits.PoundsPerImperialGallon:
                return this.PoundsPerImperialGallon + ` ppg (imp.)`;
            case DensityUnits.KilogramsPerLiter:
                return this.KilogramsPerLiter + ` kg/l`;
            case DensityUnits.KilogramsPerCubicMillimeter:
                return this.KilogramsPerCubicMillimeter + ` g/mm³`;
            case DensityUnits.KilogramsPerCubicCentimeter:
                return this.KilogramsPerCubicCentimeter + ` g/cm³`;
            case DensityUnits.KilogramsPerCubicMeter:
                return this.KilogramsPerCubicMeter + ` g/m³`;
            case DensityUnits.MicrogramsPerCubicMeter:
                return this.MicrogramsPerCubicMeter + ` g/m³`;
            case DensityUnits.KilopoundsPerCubicInch:
                return this.KilopoundsPerCubicInch + ` lb/in³`;
            case DensityUnits.KilopoundsPerCubicFoot:
                return this.KilopoundsPerCubicFoot + ` lb/ft³`;
            case DensityUnits.PicogramsPerLiter:
                return this.PicogramsPerLiter + ` g/L`;
            case DensityUnits.NanogramsPerLiter:
                return this.NanogramsPerLiter + ` g/L`;
            case DensityUnits.MicrogramsPerLiter:
                return this.MicrogramsPerLiter + ` g/L`;
            case DensityUnits.CentigramsPerLiter:
                return this.CentigramsPerLiter + ` g/L`;
            case DensityUnits.DecigramsPerLiter:
                return this.DecigramsPerLiter + ` g/L`;
            case DensityUnits.PicogramsPerDeciLiter:
                return this.PicogramsPerDeciLiter + ` g/dl`;
            case DensityUnits.NanogramsPerDeciLiter:
                return this.NanogramsPerDeciLiter + ` g/dl`;
            case DensityUnits.MicrogramsPerDeciLiter:
                return this.MicrogramsPerDeciLiter + ` g/dl`;
            case DensityUnits.CentigramsPerDeciLiter:
                return this.CentigramsPerDeciLiter + ` g/dl`;
            case DensityUnits.DecigramsPerDeciLiter:
                return this.DecigramsPerDeciLiter + ` g/dl`;
            case DensityUnits.PicogramsPerMilliliter:
                return this.PicogramsPerMilliliter + ` g/ml`;
            case DensityUnits.NanogramsPerMilliliter:
                return this.NanogramsPerMilliliter + ` g/ml`;
            case DensityUnits.MicrogramsPerMilliliter:
                return this.MicrogramsPerMilliliter + ` g/ml`;
            case DensityUnits.CentigramsPerMilliliter:
                return this.CentigramsPerMilliliter + ` g/ml`;
            case DensityUnits.DecigramsPerMilliliter:
                return this.DecigramsPerMilliliter + ` g/ml`;
        default:
            break;
        }
        return this.value.toString();
    }
}
