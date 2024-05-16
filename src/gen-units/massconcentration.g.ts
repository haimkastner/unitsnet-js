import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a MassConcentration */
export interface MassConcentrationDto {
    /** The value of the MassConcentration */
    value: number;
    /**  The specific unit that the MassConcentration value is representing */
    unit: MassConcentrationUnits;
}

/** MassConcentrationUnits enumeration */
export enum MassConcentrationUnits {
    /** */
    GramsPerCubicMillimeter = "GramPerCubicMillimeter",
    /** */
    GramsPerCubicCentimeter = "GramPerCubicCentimeter",
    /** */
    GramsPerCubicMeter = "GramPerCubicMeter",
    /** */
    GramsPerMicroliter = "GramPerMicroliter",
    /** */
    GramsPerMilliliter = "GramPerMilliliter",
    /** */
    GramsPerDeciliter = "GramPerDeciliter",
    /** */
    GramsPerLiter = "GramPerLiter",
    /** */
    TonnesPerCubicMillimeter = "TonnePerCubicMillimeter",
    /** */
    TonnesPerCubicCentimeter = "TonnePerCubicCentimeter",
    /** */
    TonnesPerCubicMeter = "TonnePerCubicMeter",
    /** */
    PoundsPerCubicInch = "PoundPerCubicInch",
    /** */
    PoundsPerCubicFoot = "PoundPerCubicFoot",
    /** */
    SlugsPerCubicFoot = "SlugPerCubicFoot",
    /** */
    PoundsPerUSGallon = "PoundPerUSGallon",
    /** */
    OuncesPerUSGallon = "OuncePerUSGallon",
    /** */
    OuncesPerImperialGallon = "OuncePerImperialGallon",
    /** */
    PoundsPerImperialGallon = "PoundPerImperialGallon",
    /** */
    KilogramsPerCubicMillimeter = "KilogramPerCubicMillimeter",
    /** */
    KilogramsPerCubicCentimeter = "KilogramPerCubicCentimeter",
    /** */
    KilogramsPerCubicMeter = "KilogramPerCubicMeter",
    /** */
    MilligramsPerCubicMeter = "MilligramPerCubicMeter",
    /** */
    MicrogramsPerCubicMeter = "MicrogramPerCubicMeter",
    /** */
    PicogramsPerMicroliter = "PicogramPerMicroliter",
    /** */
    NanogramsPerMicroliter = "NanogramPerMicroliter",
    /** */
    MicrogramsPerMicroliter = "MicrogramPerMicroliter",
    /** */
    MilligramsPerMicroliter = "MilligramPerMicroliter",
    /** */
    CentigramsPerMicroliter = "CentigramPerMicroliter",
    /** */
    DecigramsPerMicroliter = "DecigramPerMicroliter",
    /** */
    PicogramsPerMilliliter = "PicogramPerMilliliter",
    /** */
    NanogramsPerMilliliter = "NanogramPerMilliliter",
    /** */
    MicrogramsPerMilliliter = "MicrogramPerMilliliter",
    /** */
    MilligramsPerMilliliter = "MilligramPerMilliliter",
    /** */
    CentigramsPerMilliliter = "CentigramPerMilliliter",
    /** */
    DecigramsPerMilliliter = "DecigramPerMilliliter",
    /** */
    PicogramsPerDeciliter = "PicogramPerDeciliter",
    /** */
    NanogramsPerDeciliter = "NanogramPerDeciliter",
    /** */
    MicrogramsPerDeciliter = "MicrogramPerDeciliter",
    /** */
    MilligramsPerDeciliter = "MilligramPerDeciliter",
    /** */
    CentigramsPerDeciliter = "CentigramPerDeciliter",
    /** */
    DecigramsPerDeciliter = "DecigramPerDeciliter",
    /** */
    PicogramsPerLiter = "PicogramPerLiter",
    /** */
    NanogramsPerLiter = "NanogramPerLiter",
    /** */
    MicrogramsPerLiter = "MicrogramPerLiter",
    /** */
    MilligramsPerLiter = "MilligramPerLiter",
    /** */
    CentigramsPerLiter = "CentigramPerLiter",
    /** */
    DecigramsPerLiter = "DecigramPerLiter",
    /** */
    KilogramsPerLiter = "KilogramPerLiter",
    /** */
    KilopoundsPerCubicInch = "KilopoundPerCubicInch",
    /** */
    KilopoundsPerCubicFoot = "KilopoundPerCubicFoot"
}

/** In chemistry, the mass concentration ρi (or γi) is defined as the mass of a constituent mi divided by the volume of the mixture V */
export class MassConcentration extends BaseUnit {
    protected value: number;
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
    private ouncesperusgallonLazy: number | null = null;
    private ouncesperimperialgallonLazy: number | null = null;
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

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MassConcentration is KilogramsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): MassConcentrationUnits.KilogramsPerCubicMeter {
        return MassConcentrationUnits.KilogramsPerCubicMeter
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
    public get OuncesPerUSGallon(): number {
        if(this.ouncesperusgallonLazy !== null){
            return this.ouncesperusgallonLazy;
        }
        return this.ouncesperusgallonLazy = this.convertFromBase(MassConcentrationUnits.OuncesPerUSGallon);
    }

    /** */
    public get OuncesPerImperialGallon(): number {
        if(this.ouncesperimperialgallonLazy !== null){
            return this.ouncesperimperialgallonLazy;
        }
        return this.ouncesperimperialgallonLazy = this.convertFromBase(MassConcentrationUnits.OuncesPerImperialGallon);
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
     * Create a new MassConcentration instance from a OuncesPerUSGallon
     *
     * @param value The unit as OuncesPerUSGallon to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromOuncesPerUSGallon(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.OuncesPerUSGallon);
    }

    /**
     * Create a new MassConcentration instance from a OuncesPerImperialGallon
     *
     * @param value The unit as OuncesPerImperialGallon to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    public static FromOuncesPerImperialGallon(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.OuncesPerImperialGallon);
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

    /**
     * Gets the base unit enumeration associated with MassConcentration
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof MassConcentrationUnits {
        return MassConcentrationUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): MassConcentrationUnits.KilogramsPerCubicMeter {
        return MassConcentrationUnits.KilogramsPerCubicMeter;
    }

    /**
     * Create API DTO represent a MassConcentration unit.
     * @param holdInUnit The specific MassConcentration unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: MassConcentrationUnits = MassConcentrationUnits.KilogramsPerCubicMeter): MassConcentrationDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a MassConcentration unit from an API DTO representation.
     * @param dtoMassConcentration The MassConcentration API DTO representation
     */
    public static FromDto(dtoMassConcentration: MassConcentrationDto): MassConcentration {
        return new MassConcentration(dtoMassConcentration.value, dtoMassConcentration.unit);
    }

    /**
     * Convert MassConcentration to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: MassConcentrationUnits): number {
        switch (toUnit) {
            case MassConcentrationUnits.GramsPerCubicMillimeter: return this.GramsPerCubicMillimeter;
            case MassConcentrationUnits.GramsPerCubicCentimeter: return this.GramsPerCubicCentimeter;
            case MassConcentrationUnits.GramsPerCubicMeter: return this.GramsPerCubicMeter;
            case MassConcentrationUnits.GramsPerMicroliter: return this.GramsPerMicroliter;
            case MassConcentrationUnits.GramsPerMilliliter: return this.GramsPerMilliliter;
            case MassConcentrationUnits.GramsPerDeciliter: return this.GramsPerDeciliter;
            case MassConcentrationUnits.GramsPerLiter: return this.GramsPerLiter;
            case MassConcentrationUnits.TonnesPerCubicMillimeter: return this.TonnesPerCubicMillimeter;
            case MassConcentrationUnits.TonnesPerCubicCentimeter: return this.TonnesPerCubicCentimeter;
            case MassConcentrationUnits.TonnesPerCubicMeter: return this.TonnesPerCubicMeter;
            case MassConcentrationUnits.PoundsPerCubicInch: return this.PoundsPerCubicInch;
            case MassConcentrationUnits.PoundsPerCubicFoot: return this.PoundsPerCubicFoot;
            case MassConcentrationUnits.SlugsPerCubicFoot: return this.SlugsPerCubicFoot;
            case MassConcentrationUnits.PoundsPerUSGallon: return this.PoundsPerUSGallon;
            case MassConcentrationUnits.OuncesPerUSGallon: return this.OuncesPerUSGallon;
            case MassConcentrationUnits.OuncesPerImperialGallon: return this.OuncesPerImperialGallon;
            case MassConcentrationUnits.PoundsPerImperialGallon: return this.PoundsPerImperialGallon;
            case MassConcentrationUnits.KilogramsPerCubicMillimeter: return this.KilogramsPerCubicMillimeter;
            case MassConcentrationUnits.KilogramsPerCubicCentimeter: return this.KilogramsPerCubicCentimeter;
            case MassConcentrationUnits.KilogramsPerCubicMeter: return this.KilogramsPerCubicMeter;
            case MassConcentrationUnits.MilligramsPerCubicMeter: return this.MilligramsPerCubicMeter;
            case MassConcentrationUnits.MicrogramsPerCubicMeter: return this.MicrogramsPerCubicMeter;
            case MassConcentrationUnits.PicogramsPerMicroliter: return this.PicogramsPerMicroliter;
            case MassConcentrationUnits.NanogramsPerMicroliter: return this.NanogramsPerMicroliter;
            case MassConcentrationUnits.MicrogramsPerMicroliter: return this.MicrogramsPerMicroliter;
            case MassConcentrationUnits.MilligramsPerMicroliter: return this.MilligramsPerMicroliter;
            case MassConcentrationUnits.CentigramsPerMicroliter: return this.CentigramsPerMicroliter;
            case MassConcentrationUnits.DecigramsPerMicroliter: return this.DecigramsPerMicroliter;
            case MassConcentrationUnits.PicogramsPerMilliliter: return this.PicogramsPerMilliliter;
            case MassConcentrationUnits.NanogramsPerMilliliter: return this.NanogramsPerMilliliter;
            case MassConcentrationUnits.MicrogramsPerMilliliter: return this.MicrogramsPerMilliliter;
            case MassConcentrationUnits.MilligramsPerMilliliter: return this.MilligramsPerMilliliter;
            case MassConcentrationUnits.CentigramsPerMilliliter: return this.CentigramsPerMilliliter;
            case MassConcentrationUnits.DecigramsPerMilliliter: return this.DecigramsPerMilliliter;
            case MassConcentrationUnits.PicogramsPerDeciliter: return this.PicogramsPerDeciliter;
            case MassConcentrationUnits.NanogramsPerDeciliter: return this.NanogramsPerDeciliter;
            case MassConcentrationUnits.MicrogramsPerDeciliter: return this.MicrogramsPerDeciliter;
            case MassConcentrationUnits.MilligramsPerDeciliter: return this.MilligramsPerDeciliter;
            case MassConcentrationUnits.CentigramsPerDeciliter: return this.CentigramsPerDeciliter;
            case MassConcentrationUnits.DecigramsPerDeciliter: return this.DecigramsPerDeciliter;
            case MassConcentrationUnits.PicogramsPerLiter: return this.PicogramsPerLiter;
            case MassConcentrationUnits.NanogramsPerLiter: return this.NanogramsPerLiter;
            case MassConcentrationUnits.MicrogramsPerLiter: return this.MicrogramsPerLiter;
            case MassConcentrationUnits.MilligramsPerLiter: return this.MilligramsPerLiter;
            case MassConcentrationUnits.CentigramsPerLiter: return this.CentigramsPerLiter;
            case MassConcentrationUnits.DecigramsPerLiter: return this.DecigramsPerLiter;
            case MassConcentrationUnits.KilogramsPerLiter: return this.KilogramsPerLiter;
            case MassConcentrationUnits.KilopoundsPerCubicInch: return this.KilopoundsPerCubicInch;
            case MassConcentrationUnits.KilopoundsPerCubicFoot: return this.KilopoundsPerCubicFoot;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: MassConcentrationUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case MassConcentrationUnits.GramsPerCubicMillimeter: return super.internalMultiply(this.value, 1e-6);
                case MassConcentrationUnits.GramsPerCubicCentimeter: return super.internalMultiply(this.value, 1e-3);
                case MassConcentrationUnits.GramsPerCubicMeter: return super.internalMultiply(this.value, 1e3);
                case MassConcentrationUnits.GramsPerMicroliter: return super.internalMultiply(this.value, 1e-6);
                case MassConcentrationUnits.GramsPerMilliliter: return super.internalMultiply(this.value, 1e-3);
                case MassConcentrationUnits.GramsPerDeciliter: return super.internalMultiply(this.value, 1e-1);
                case MassConcentrationUnits.GramsPerLiter: return this.value;
                case MassConcentrationUnits.TonnesPerCubicMillimeter: return super.internalMultiply(this.value, 1e-12);
                case MassConcentrationUnits.TonnesPerCubicCentimeter: return super.internalMultiply(this.value, 1e-9);
                case MassConcentrationUnits.TonnesPerCubicMeter: return super.internalMultiply(this.value, 0.001);
                case MassConcentrationUnits.PoundsPerCubicInch: return super.internalMultiply(this.value, 3.6127298147753e-5);
                case MassConcentrationUnits.PoundsPerCubicFoot: return super.internalMultiply(this.value, 0.062427961);
                case MassConcentrationUnits.SlugsPerCubicFoot: return super.internalMultiply(this.value, 0.00194032033);
                case MassConcentrationUnits.PoundsPerUSGallon: return super.internalDivide(this.value, 1.19826427e2);
                case MassConcentrationUnits.OuncesPerUSGallon: return super.internalMultiply(this.value, 0.1335264711843);
                case MassConcentrationUnits.OuncesPerImperialGallon: return super.internalMultiply(this.value, 0.1603586720609);
                case MassConcentrationUnits.PoundsPerImperialGallon: return super.internalDivide(this.value, 9.9776398e1);
                case MassConcentrationUnits.KilogramsPerCubicMillimeter: {
                    const v3 = super.internalMultiply(this.value, 1e-6);
                    return super.internalDivide(v3, 1000);
                }
                case MassConcentrationUnits.KilogramsPerCubicCentimeter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1000);
                }
                case MassConcentrationUnits.KilogramsPerCubicMeter: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 1000);
                }
                case MassConcentrationUnits.MilligramsPerCubicMeter: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 0.001);
                }
                case MassConcentrationUnits.MicrogramsPerCubicMeter: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 0.000001);
                }
                case MassConcentrationUnits.PicogramsPerMicroliter: {
                    const v3 = super.internalMultiply(this.value, 1e-6);
                    return super.internalDivide(v3, 1e-12);
                }
                case MassConcentrationUnits.NanogramsPerMicroliter: {
                    const v3 = super.internalMultiply(this.value, 1e-6);
                    return super.internalDivide(v3, 1e-9);
                }
                case MassConcentrationUnits.MicrogramsPerMicroliter: {
                    const v3 = super.internalMultiply(this.value, 1e-6);
                    return super.internalDivide(v3, 0.000001);
                }
                case MassConcentrationUnits.MilligramsPerMicroliter: {
                    const v3 = super.internalMultiply(this.value, 1e-6);
                    return super.internalDivide(v3, 0.001);
                }
                case MassConcentrationUnits.CentigramsPerMicroliter: {
                    const v3 = super.internalMultiply(this.value, 1e-6);
                    return super.internalDivide(v3, 0.01);
                }
                case MassConcentrationUnits.DecigramsPerMicroliter: {
                    const v3 = super.internalMultiply(this.value, 1e-6);
                    return super.internalDivide(v3, 0.1);
                }
                case MassConcentrationUnits.PicogramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1e-12);
                }
                case MassConcentrationUnits.NanogramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1e-9);
                }
                case MassConcentrationUnits.MicrogramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.000001);
                }
                case MassConcentrationUnits.MilligramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.001);
                }
                case MassConcentrationUnits.CentigramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.01);
                }
                case MassConcentrationUnits.DecigramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.1);
                }
                case MassConcentrationUnits.PicogramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 1e-12);
                }
                case MassConcentrationUnits.NanogramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 1e-9);
                }
                case MassConcentrationUnits.MicrogramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 0.000001);
                }
                case MassConcentrationUnits.MilligramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 0.001);
                }
                case MassConcentrationUnits.CentigramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 0.01);
                }
                case MassConcentrationUnits.DecigramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 0.1);
                }
                case MassConcentrationUnits.PicogramsPerLiter: return super.internalDivide(this.value, 1e-12);
                case MassConcentrationUnits.NanogramsPerLiter: return super.internalDivide(this.value, 1e-9);
                case MassConcentrationUnits.MicrogramsPerLiter: return super.internalDivide(this.value, 0.000001);
                case MassConcentrationUnits.MilligramsPerLiter: return super.internalDivide(this.value, 0.001);
                case MassConcentrationUnits.CentigramsPerLiter: return super.internalDivide(this.value, 0.01);
                case MassConcentrationUnits.DecigramsPerLiter: return super.internalDivide(this.value, 0.1);
                case MassConcentrationUnits.KilogramsPerLiter: return super.internalDivide(this.value, 1000);
                case MassConcentrationUnits.KilopoundsPerCubicInch: {
                    const v3 = super.internalMultiply(this.value, 3.6127298147753e-5);
                    return super.internalDivide(v3, 1000);
                }
                case MassConcentrationUnits.KilopoundsPerCubicFoot: {
                    const v3 = super.internalMultiply(this.value, 0.062427961);
                    return super.internalDivide(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case MassConcentrationUnits.GramsPerCubicMillimeter: return this.value * 1e-6;
            case MassConcentrationUnits.GramsPerCubicCentimeter: return this.value * 1e-3;
            case MassConcentrationUnits.GramsPerCubicMeter: return this.value * 1e3;
            case MassConcentrationUnits.GramsPerMicroliter: return this.value * 1e-6;
            case MassConcentrationUnits.GramsPerMilliliter: return this.value * 1e-3;
            case MassConcentrationUnits.GramsPerDeciliter: return this.value * 1e-1;
            case MassConcentrationUnits.GramsPerLiter: return this.value;
            case MassConcentrationUnits.TonnesPerCubicMillimeter: return this.value * 1e-12;
            case MassConcentrationUnits.TonnesPerCubicCentimeter: return this.value * 1e-9;
            case MassConcentrationUnits.TonnesPerCubicMeter: return this.value * 0.001;
            case MassConcentrationUnits.PoundsPerCubicInch: return this.value * 3.6127298147753e-5;
            case MassConcentrationUnits.PoundsPerCubicFoot: return this.value * 0.062427961;
            case MassConcentrationUnits.SlugsPerCubicFoot: return this.value * 0.00194032033;
            case MassConcentrationUnits.PoundsPerUSGallon: return this.value / 1.19826427e2;
            case MassConcentrationUnits.OuncesPerUSGallon: return this.value * 0.1335264711843;
            case MassConcentrationUnits.OuncesPerImperialGallon: return this.value * 0.1603586720609;
            case MassConcentrationUnits.PoundsPerImperialGallon: return this.value / 9.9776398e1;
            case MassConcentrationUnits.KilogramsPerCubicMillimeter: return (this.value * 1e-6) / 1000;
            case MassConcentrationUnits.KilogramsPerCubicCentimeter: return (this.value * 1e-3) / 1000;
            case MassConcentrationUnits.KilogramsPerCubicMeter: return (this.value * 1e3) / 1000;
            case MassConcentrationUnits.MilligramsPerCubicMeter: return (this.value * 1e3) / 0.001;
            case MassConcentrationUnits.MicrogramsPerCubicMeter: return (this.value * 1e3) / 0.000001;
            case MassConcentrationUnits.PicogramsPerMicroliter: return (this.value * 1e-6) / 1e-12;
            case MassConcentrationUnits.NanogramsPerMicroliter: return (this.value * 1e-6) / 1e-9;
            case MassConcentrationUnits.MicrogramsPerMicroliter: return (this.value * 1e-6) / 0.000001;
            case MassConcentrationUnits.MilligramsPerMicroliter: return (this.value * 1e-6) / 0.001;
            case MassConcentrationUnits.CentigramsPerMicroliter: return (this.value * 1e-6) / 0.01;
            case MassConcentrationUnits.DecigramsPerMicroliter: return (this.value * 1e-6) / 0.1;
            case MassConcentrationUnits.PicogramsPerMilliliter: return (this.value * 1e-3) / 1e-12;
            case MassConcentrationUnits.NanogramsPerMilliliter: return (this.value * 1e-3) / 1e-9;
            case MassConcentrationUnits.MicrogramsPerMilliliter: return (this.value * 1e-3) / 0.000001;
            case MassConcentrationUnits.MilligramsPerMilliliter: return (this.value * 1e-3) / 0.001;
            case MassConcentrationUnits.CentigramsPerMilliliter: return (this.value * 1e-3) / 0.01;
            case MassConcentrationUnits.DecigramsPerMilliliter: return (this.value * 1e-3) / 0.1;
            case MassConcentrationUnits.PicogramsPerDeciliter: return (this.value * 1e-1) / 1e-12;
            case MassConcentrationUnits.NanogramsPerDeciliter: return (this.value * 1e-1) / 1e-9;
            case MassConcentrationUnits.MicrogramsPerDeciliter: return (this.value * 1e-1) / 0.000001;
            case MassConcentrationUnits.MilligramsPerDeciliter: return (this.value * 1e-1) / 0.001;
            case MassConcentrationUnits.CentigramsPerDeciliter: return (this.value * 1e-1) / 0.01;
            case MassConcentrationUnits.DecigramsPerDeciliter: return (this.value * 1e-1) / 0.1;
            case MassConcentrationUnits.PicogramsPerLiter: return (this.value) / 1e-12;
            case MassConcentrationUnits.NanogramsPerLiter: return (this.value) / 1e-9;
            case MassConcentrationUnits.MicrogramsPerLiter: return (this.value) / 0.000001;
            case MassConcentrationUnits.MilligramsPerLiter: return (this.value) / 0.001;
            case MassConcentrationUnits.CentigramsPerLiter: return (this.value) / 0.01;
            case MassConcentrationUnits.DecigramsPerLiter: return (this.value) / 0.1;
            case MassConcentrationUnits.KilogramsPerLiter: return (this.value) / 1000;
            case MassConcentrationUnits.KilopoundsPerCubicInch: return (this.value * 3.6127298147753e-5) / 1000;
            case MassConcentrationUnits.KilopoundsPerCubicFoot: return (this.value * 0.062427961) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: MassConcentrationUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case MassConcentrationUnits.GramsPerCubicMillimeter: return super.internalDivide(value, 1e-6);
                case MassConcentrationUnits.GramsPerCubicCentimeter: return super.internalDivide(value, 1e-3);
                case MassConcentrationUnits.GramsPerCubicMeter: return super.internalDivide(value, 1e3);
                case MassConcentrationUnits.GramsPerMicroliter: return super.internalDivide(value, 1e-6);
                case MassConcentrationUnits.GramsPerMilliliter: return super.internalDivide(value, 1e-3);
                case MassConcentrationUnits.GramsPerDeciliter: return super.internalDivide(value, 1e-1);
                case MassConcentrationUnits.GramsPerLiter: return value;
                case MassConcentrationUnits.TonnesPerCubicMillimeter: return super.internalDivide(value, 1e-12);
                case MassConcentrationUnits.TonnesPerCubicCentimeter: return super.internalDivide(value, 1e-9);
                case MassConcentrationUnits.TonnesPerCubicMeter: return super.internalDivide(value, 0.001);
                case MassConcentrationUnits.PoundsPerCubicInch: return super.internalDivide(value, 3.6127298147753e-5);
                case MassConcentrationUnits.PoundsPerCubicFoot: return super.internalDivide(value, 0.062427961);
                case MassConcentrationUnits.SlugsPerCubicFoot: return super.internalMultiply(value, 515.378818);
                case MassConcentrationUnits.PoundsPerUSGallon: return super.internalMultiply(value, 1.19826427e2);
                case MassConcentrationUnits.OuncesPerUSGallon: return super.internalDivide(value, 0.1335264711843);
                case MassConcentrationUnits.OuncesPerImperialGallon: return super.internalDivide(value, 0.1603586720609);
                case MassConcentrationUnits.PoundsPerImperialGallon: return super.internalMultiply(value, 9.9776398e1);
                case MassConcentrationUnits.KilogramsPerCubicMillimeter: {
                    const v3 = super.internalDivide(value, 1e-6);
                    return super.internalMultiply(v3, 1000);
                }
                case MassConcentrationUnits.KilogramsPerCubicCentimeter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1000);
                }
                case MassConcentrationUnits.KilogramsPerCubicMeter: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 1000);
                }
                case MassConcentrationUnits.MilligramsPerCubicMeter: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 0.001);
                }
                case MassConcentrationUnits.MicrogramsPerCubicMeter: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 0.000001);
                }
                case MassConcentrationUnits.PicogramsPerMicroliter: {
                    const v3 = super.internalDivide(value, 1e-6);
                    return super.internalMultiply(v3, 1e-12);
                }
                case MassConcentrationUnits.NanogramsPerMicroliter: {
                    const v3 = super.internalDivide(value, 1e-6);
                    return super.internalMultiply(v3, 1e-9);
                }
                case MassConcentrationUnits.MicrogramsPerMicroliter: {
                    const v3 = super.internalDivide(value, 1e-6);
                    return super.internalMultiply(v3, 0.000001);
                }
                case MassConcentrationUnits.MilligramsPerMicroliter: {
                    const v3 = super.internalDivide(value, 1e-6);
                    return super.internalMultiply(v3, 0.001);
                }
                case MassConcentrationUnits.CentigramsPerMicroliter: {
                    const v3 = super.internalDivide(value, 1e-6);
                    return super.internalMultiply(v3, 0.01);
                }
                case MassConcentrationUnits.DecigramsPerMicroliter: {
                    const v3 = super.internalDivide(value, 1e-6);
                    return super.internalMultiply(v3, 0.1);
                }
                case MassConcentrationUnits.PicogramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1e-12);
                }
                case MassConcentrationUnits.NanogramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1e-9);
                }
                case MassConcentrationUnits.MicrogramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.000001);
                }
                case MassConcentrationUnits.MilligramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.001);
                }
                case MassConcentrationUnits.CentigramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.01);
                }
                case MassConcentrationUnits.DecigramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.1);
                }
                case MassConcentrationUnits.PicogramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 1e-12);
                }
                case MassConcentrationUnits.NanogramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 1e-9);
                }
                case MassConcentrationUnits.MicrogramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 0.000001);
                }
                case MassConcentrationUnits.MilligramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 0.001);
                }
                case MassConcentrationUnits.CentigramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 0.01);
                }
                case MassConcentrationUnits.DecigramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 0.1);
                }
                case MassConcentrationUnits.PicogramsPerLiter: return super.internalMultiply(value, 1e-12);
                case MassConcentrationUnits.NanogramsPerLiter: return super.internalMultiply(value, 1e-9);
                case MassConcentrationUnits.MicrogramsPerLiter: return super.internalMultiply(value, 0.000001);
                case MassConcentrationUnits.MilligramsPerLiter: return super.internalMultiply(value, 0.001);
                case MassConcentrationUnits.CentigramsPerLiter: return super.internalMultiply(value, 0.01);
                case MassConcentrationUnits.DecigramsPerLiter: return super.internalMultiply(value, 0.1);
                case MassConcentrationUnits.KilogramsPerLiter: return super.internalMultiply(value, 1000);
                case MassConcentrationUnits.KilopoundsPerCubicInch: {
                    const v3 = super.internalDivide(value, 3.6127298147753e-5);
                    return super.internalMultiply(v3, 1000);
                }
                case MassConcentrationUnits.KilopoundsPerCubicFoot: {
                    const v3 = super.internalDivide(value, 0.062427961);
                    return super.internalMultiply(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case MassConcentrationUnits.GramsPerCubicMillimeter: return value / 1e-6;
            case MassConcentrationUnits.GramsPerCubicCentimeter: return value / 1e-3;
            case MassConcentrationUnits.GramsPerCubicMeter: return value / 1e3;
            case MassConcentrationUnits.GramsPerMicroliter: return value / 1e-6;
            case MassConcentrationUnits.GramsPerMilliliter: return value / 1e-3;
            case MassConcentrationUnits.GramsPerDeciliter: return value / 1e-1;
            case MassConcentrationUnits.GramsPerLiter: return value;
            case MassConcentrationUnits.TonnesPerCubicMillimeter: return value / 1e-12;
            case MassConcentrationUnits.TonnesPerCubicCentimeter: return value / 1e-9;
            case MassConcentrationUnits.TonnesPerCubicMeter: return value / 0.001;
            case MassConcentrationUnits.PoundsPerCubicInch: return value / 3.6127298147753e-5;
            case MassConcentrationUnits.PoundsPerCubicFoot: return value / 0.062427961;
            case MassConcentrationUnits.SlugsPerCubicFoot: return value * 515.378818;
            case MassConcentrationUnits.PoundsPerUSGallon: return value * 1.19826427e2;
            case MassConcentrationUnits.OuncesPerUSGallon: return  value / 0.1335264711843;
            case MassConcentrationUnits.OuncesPerImperialGallon: return  value / 0.1603586720609;
            case MassConcentrationUnits.PoundsPerImperialGallon: return value * 9.9776398e1;
            case MassConcentrationUnits.KilogramsPerCubicMillimeter: return (value / 1e-6) * 1000;
            case MassConcentrationUnits.KilogramsPerCubicCentimeter: return (value / 1e-3) * 1000;
            case MassConcentrationUnits.KilogramsPerCubicMeter: return (value / 1e3) * 1000;
            case MassConcentrationUnits.MilligramsPerCubicMeter: return (value / 1e3) * 0.001;
            case MassConcentrationUnits.MicrogramsPerCubicMeter: return (value / 1e3) * 0.000001;
            case MassConcentrationUnits.PicogramsPerMicroliter: return (value / 1e-6) * 1e-12;
            case MassConcentrationUnits.NanogramsPerMicroliter: return (value / 1e-6) * 1e-9;
            case MassConcentrationUnits.MicrogramsPerMicroliter: return (value / 1e-6) * 0.000001;
            case MassConcentrationUnits.MilligramsPerMicroliter: return (value / 1e-6) * 0.001;
            case MassConcentrationUnits.CentigramsPerMicroliter: return (value / 1e-6) * 0.01;
            case MassConcentrationUnits.DecigramsPerMicroliter: return (value / 1e-6) * 0.1;
            case MassConcentrationUnits.PicogramsPerMilliliter: return (value / 1e-3) * 1e-12;
            case MassConcentrationUnits.NanogramsPerMilliliter: return (value / 1e-3) * 1e-9;
            case MassConcentrationUnits.MicrogramsPerMilliliter: return (value / 1e-3) * 0.000001;
            case MassConcentrationUnits.MilligramsPerMilliliter: return (value / 1e-3) * 0.001;
            case MassConcentrationUnits.CentigramsPerMilliliter: return (value / 1e-3) * 0.01;
            case MassConcentrationUnits.DecigramsPerMilliliter: return (value / 1e-3) * 0.1;
            case MassConcentrationUnits.PicogramsPerDeciliter: return (value / 1e-1) * 1e-12;
            case MassConcentrationUnits.NanogramsPerDeciliter: return (value / 1e-1) * 1e-9;
            case MassConcentrationUnits.MicrogramsPerDeciliter: return (value / 1e-1) * 0.000001;
            case MassConcentrationUnits.MilligramsPerDeciliter: return (value / 1e-1) * 0.001;
            case MassConcentrationUnits.CentigramsPerDeciliter: return (value / 1e-1) * 0.01;
            case MassConcentrationUnits.DecigramsPerDeciliter: return (value / 1e-1) * 0.1;
            case MassConcentrationUnits.PicogramsPerLiter: return (value) * 1e-12;
            case MassConcentrationUnits.NanogramsPerLiter: return (value) * 1e-9;
            case MassConcentrationUnits.MicrogramsPerLiter: return (value) * 0.000001;
            case MassConcentrationUnits.MilligramsPerLiter: return (value) * 0.001;
            case MassConcentrationUnits.CentigramsPerLiter: return (value) * 0.01;
            case MassConcentrationUnits.DecigramsPerLiter: return (value) * 0.1;
            case MassConcentrationUnits.KilogramsPerLiter: return (value) * 1000;
            case MassConcentrationUnits.KilopoundsPerCubicInch: return (value / 3.6127298147753e-5) * 1000;
            case MassConcentrationUnits.KilopoundsPerCubicFoot: return (value / 0.062427961) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the MassConcentration to string.
     * Note! the default format for MassConcentration is KilogramsPerCubicMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the MassConcentration.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the MassConcentration.
     */
    public toString(unit: MassConcentrationUnits = MassConcentrationUnits.KilogramsPerCubicMeter, fractionalDigits?: number): string {

        switch (unit) {
            
            case MassConcentrationUnits.GramsPerCubicMillimeter:
                return super.truncateFractionDigits(this.GramsPerCubicMillimeter, fractionalDigits) + ` g/mm³`;
            case MassConcentrationUnits.GramsPerCubicCentimeter:
                return super.truncateFractionDigits(this.GramsPerCubicCentimeter, fractionalDigits) + ` g/cm³`;
            case MassConcentrationUnits.GramsPerCubicMeter:
                return super.truncateFractionDigits(this.GramsPerCubicMeter, fractionalDigits) + ` g/m³`;
            case MassConcentrationUnits.GramsPerMicroliter:
                return super.truncateFractionDigits(this.GramsPerMicroliter, fractionalDigits) + ` g/μL`;
            case MassConcentrationUnits.GramsPerMilliliter:
                return super.truncateFractionDigits(this.GramsPerMilliliter, fractionalDigits) + ` g/mL`;
            case MassConcentrationUnits.GramsPerDeciliter:
                return super.truncateFractionDigits(this.GramsPerDeciliter, fractionalDigits) + ` g/dL`;
            case MassConcentrationUnits.GramsPerLiter:
                return super.truncateFractionDigits(this.GramsPerLiter, fractionalDigits) + ` g/L`;
            case MassConcentrationUnits.TonnesPerCubicMillimeter:
                return super.truncateFractionDigits(this.TonnesPerCubicMillimeter, fractionalDigits) + ` t/mm³`;
            case MassConcentrationUnits.TonnesPerCubicCentimeter:
                return super.truncateFractionDigits(this.TonnesPerCubicCentimeter, fractionalDigits) + ` t/cm³`;
            case MassConcentrationUnits.TonnesPerCubicMeter:
                return super.truncateFractionDigits(this.TonnesPerCubicMeter, fractionalDigits) + ` t/m³`;
            case MassConcentrationUnits.PoundsPerCubicInch:
                return super.truncateFractionDigits(this.PoundsPerCubicInch, fractionalDigits) + ` lb/in³`;
            case MassConcentrationUnits.PoundsPerCubicFoot:
                return super.truncateFractionDigits(this.PoundsPerCubicFoot, fractionalDigits) + ` lb/ft³`;
            case MassConcentrationUnits.SlugsPerCubicFoot:
                return super.truncateFractionDigits(this.SlugsPerCubicFoot, fractionalDigits) + ` slug/ft³`;
            case MassConcentrationUnits.PoundsPerUSGallon:
                return super.truncateFractionDigits(this.PoundsPerUSGallon, fractionalDigits) + ` ppg (U.S.)`;
            case MassConcentrationUnits.OuncesPerUSGallon:
                return super.truncateFractionDigits(this.OuncesPerUSGallon, fractionalDigits) + ` oz/gal (U.S.)`;
            case MassConcentrationUnits.OuncesPerImperialGallon:
                return super.truncateFractionDigits(this.OuncesPerImperialGallon, fractionalDigits) + ` oz/gal (imp.)`;
            case MassConcentrationUnits.PoundsPerImperialGallon:
                return super.truncateFractionDigits(this.PoundsPerImperialGallon, fractionalDigits) + ` ppg (imp.)`;
            case MassConcentrationUnits.KilogramsPerCubicMillimeter:
                return super.truncateFractionDigits(this.KilogramsPerCubicMillimeter, fractionalDigits) + ` kg/mm³`;
            case MassConcentrationUnits.KilogramsPerCubicCentimeter:
                return super.truncateFractionDigits(this.KilogramsPerCubicCentimeter, fractionalDigits) + ` kg/cm³`;
            case MassConcentrationUnits.KilogramsPerCubicMeter:
                return super.truncateFractionDigits(this.KilogramsPerCubicMeter, fractionalDigits) + ` kg/m³`;
            case MassConcentrationUnits.MilligramsPerCubicMeter:
                return super.truncateFractionDigits(this.MilligramsPerCubicMeter, fractionalDigits) + ` mg/m³`;
            case MassConcentrationUnits.MicrogramsPerCubicMeter:
                return super.truncateFractionDigits(this.MicrogramsPerCubicMeter, fractionalDigits) + ` μg/m³`;
            case MassConcentrationUnits.PicogramsPerMicroliter:
                return super.truncateFractionDigits(this.PicogramsPerMicroliter, fractionalDigits) + ` pg/μL`;
            case MassConcentrationUnits.NanogramsPerMicroliter:
                return super.truncateFractionDigits(this.NanogramsPerMicroliter, fractionalDigits) + ` ng/μL`;
            case MassConcentrationUnits.MicrogramsPerMicroliter:
                return super.truncateFractionDigits(this.MicrogramsPerMicroliter, fractionalDigits) + ` μg/μL`;
            case MassConcentrationUnits.MilligramsPerMicroliter:
                return super.truncateFractionDigits(this.MilligramsPerMicroliter, fractionalDigits) + ` mg/μL`;
            case MassConcentrationUnits.CentigramsPerMicroliter:
                return super.truncateFractionDigits(this.CentigramsPerMicroliter, fractionalDigits) + ` cg/μL`;
            case MassConcentrationUnits.DecigramsPerMicroliter:
                return super.truncateFractionDigits(this.DecigramsPerMicroliter, fractionalDigits) + ` dg/μL`;
            case MassConcentrationUnits.PicogramsPerMilliliter:
                return super.truncateFractionDigits(this.PicogramsPerMilliliter, fractionalDigits) + ` pg/mL`;
            case MassConcentrationUnits.NanogramsPerMilliliter:
                return super.truncateFractionDigits(this.NanogramsPerMilliliter, fractionalDigits) + ` ng/mL`;
            case MassConcentrationUnits.MicrogramsPerMilliliter:
                return super.truncateFractionDigits(this.MicrogramsPerMilliliter, fractionalDigits) + ` μg/mL`;
            case MassConcentrationUnits.MilligramsPerMilliliter:
                return super.truncateFractionDigits(this.MilligramsPerMilliliter, fractionalDigits) + ` mg/mL`;
            case MassConcentrationUnits.CentigramsPerMilliliter:
                return super.truncateFractionDigits(this.CentigramsPerMilliliter, fractionalDigits) + ` cg/mL`;
            case MassConcentrationUnits.DecigramsPerMilliliter:
                return super.truncateFractionDigits(this.DecigramsPerMilliliter, fractionalDigits) + ` dg/mL`;
            case MassConcentrationUnits.PicogramsPerDeciliter:
                return super.truncateFractionDigits(this.PicogramsPerDeciliter, fractionalDigits) + ` pg/dL`;
            case MassConcentrationUnits.NanogramsPerDeciliter:
                return super.truncateFractionDigits(this.NanogramsPerDeciliter, fractionalDigits) + ` ng/dL`;
            case MassConcentrationUnits.MicrogramsPerDeciliter:
                return super.truncateFractionDigits(this.MicrogramsPerDeciliter, fractionalDigits) + ` μg/dL`;
            case MassConcentrationUnits.MilligramsPerDeciliter:
                return super.truncateFractionDigits(this.MilligramsPerDeciliter, fractionalDigits) + ` mg/dL`;
            case MassConcentrationUnits.CentigramsPerDeciliter:
                return super.truncateFractionDigits(this.CentigramsPerDeciliter, fractionalDigits) + ` cg/dL`;
            case MassConcentrationUnits.DecigramsPerDeciliter:
                return super.truncateFractionDigits(this.DecigramsPerDeciliter, fractionalDigits) + ` dg/dL`;
            case MassConcentrationUnits.PicogramsPerLiter:
                return super.truncateFractionDigits(this.PicogramsPerLiter, fractionalDigits) + ` pg/L`;
            case MassConcentrationUnits.NanogramsPerLiter:
                return super.truncateFractionDigits(this.NanogramsPerLiter, fractionalDigits) + ` ng/L`;
            case MassConcentrationUnits.MicrogramsPerLiter:
                return super.truncateFractionDigits(this.MicrogramsPerLiter, fractionalDigits) + ` μg/L`;
            case MassConcentrationUnits.MilligramsPerLiter:
                return super.truncateFractionDigits(this.MilligramsPerLiter, fractionalDigits) + ` mg/L`;
            case MassConcentrationUnits.CentigramsPerLiter:
                return super.truncateFractionDigits(this.CentigramsPerLiter, fractionalDigits) + ` cg/L`;
            case MassConcentrationUnits.DecigramsPerLiter:
                return super.truncateFractionDigits(this.DecigramsPerLiter, fractionalDigits) + ` dg/L`;
            case MassConcentrationUnits.KilogramsPerLiter:
                return super.truncateFractionDigits(this.KilogramsPerLiter, fractionalDigits) + ` kg/L`;
            case MassConcentrationUnits.KilopoundsPerCubicInch:
                return super.truncateFractionDigits(this.KilopoundsPerCubicInch, fractionalDigits) + ` klb/in³`;
            case MassConcentrationUnits.KilopoundsPerCubicFoot:
                return super.truncateFractionDigits(this.KilopoundsPerCubicFoot, fractionalDigits) + ` klb/ft³`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get MassConcentration unit abbreviation.
     * Note! the default abbreviation for MassConcentration is KilogramsPerCubicMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the MassConcentration.
     * @returns The abbreviation string of MassConcentration.
     */
    public getUnitAbbreviation(unitAbbreviation: MassConcentrationUnits = MassConcentrationUnits.KilogramsPerCubicMeter): string {

        switch (unitAbbreviation) {
            
            case MassConcentrationUnits.GramsPerCubicMillimeter:
                return `g/mm³`;
            case MassConcentrationUnits.GramsPerCubicCentimeter:
                return `g/cm³`;
            case MassConcentrationUnits.GramsPerCubicMeter:
                return `g/m³`;
            case MassConcentrationUnits.GramsPerMicroliter:
                return `g/μL`;
            case MassConcentrationUnits.GramsPerMilliliter:
                return `g/mL`;
            case MassConcentrationUnits.GramsPerDeciliter:
                return `g/dL`;
            case MassConcentrationUnits.GramsPerLiter:
                return `g/L`;
            case MassConcentrationUnits.TonnesPerCubicMillimeter:
                return `t/mm³`;
            case MassConcentrationUnits.TonnesPerCubicCentimeter:
                return `t/cm³`;
            case MassConcentrationUnits.TonnesPerCubicMeter:
                return `t/m³`;
            case MassConcentrationUnits.PoundsPerCubicInch:
                return `lb/in³`;
            case MassConcentrationUnits.PoundsPerCubicFoot:
                return `lb/ft³`;
            case MassConcentrationUnits.SlugsPerCubicFoot:
                return `slug/ft³`;
            case MassConcentrationUnits.PoundsPerUSGallon:
                return `ppg (U.S.)`;
            case MassConcentrationUnits.OuncesPerUSGallon:
                return `oz/gal (U.S.)`;
            case MassConcentrationUnits.OuncesPerImperialGallon:
                return `oz/gal (imp.)`;
            case MassConcentrationUnits.PoundsPerImperialGallon:
                return `ppg (imp.)`;
            case MassConcentrationUnits.KilogramsPerCubicMillimeter:
                return `kg/mm³`;
            case MassConcentrationUnits.KilogramsPerCubicCentimeter:
                return `kg/cm³`;
            case MassConcentrationUnits.KilogramsPerCubicMeter:
                return `kg/m³`;
            case MassConcentrationUnits.MilligramsPerCubicMeter:
                return `mg/m³`;
            case MassConcentrationUnits.MicrogramsPerCubicMeter:
                return `μg/m³`;
            case MassConcentrationUnits.PicogramsPerMicroliter:
                return `pg/μL`;
            case MassConcentrationUnits.NanogramsPerMicroliter:
                return `ng/μL`;
            case MassConcentrationUnits.MicrogramsPerMicroliter:
                return `μg/μL`;
            case MassConcentrationUnits.MilligramsPerMicroliter:
                return `mg/μL`;
            case MassConcentrationUnits.CentigramsPerMicroliter:
                return `cg/μL`;
            case MassConcentrationUnits.DecigramsPerMicroliter:
                return `dg/μL`;
            case MassConcentrationUnits.PicogramsPerMilliliter:
                return `pg/mL`;
            case MassConcentrationUnits.NanogramsPerMilliliter:
                return `ng/mL`;
            case MassConcentrationUnits.MicrogramsPerMilliliter:
                return `μg/mL`;
            case MassConcentrationUnits.MilligramsPerMilliliter:
                return `mg/mL`;
            case MassConcentrationUnits.CentigramsPerMilliliter:
                return `cg/mL`;
            case MassConcentrationUnits.DecigramsPerMilliliter:
                return `dg/mL`;
            case MassConcentrationUnits.PicogramsPerDeciliter:
                return `pg/dL`;
            case MassConcentrationUnits.NanogramsPerDeciliter:
                return `ng/dL`;
            case MassConcentrationUnits.MicrogramsPerDeciliter:
                return `μg/dL`;
            case MassConcentrationUnits.MilligramsPerDeciliter:
                return `mg/dL`;
            case MassConcentrationUnits.CentigramsPerDeciliter:
                return `cg/dL`;
            case MassConcentrationUnits.DecigramsPerDeciliter:
                return `dg/dL`;
            case MassConcentrationUnits.PicogramsPerLiter:
                return `pg/L`;
            case MassConcentrationUnits.NanogramsPerLiter:
                return `ng/L`;
            case MassConcentrationUnits.MicrogramsPerLiter:
                return `μg/L`;
            case MassConcentrationUnits.MilligramsPerLiter:
                return `mg/L`;
            case MassConcentrationUnits.CentigramsPerLiter:
                return `cg/L`;
            case MassConcentrationUnits.DecigramsPerLiter:
                return `dg/L`;
            case MassConcentrationUnits.KilogramsPerLiter:
                return `kg/L`;
            case MassConcentrationUnits.KilopoundsPerCubicInch:
                return `klb/in³`;
            case MassConcentrationUnits.KilopoundsPerCubicFoot:
                return `klb/ft³`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given MassConcentration are equals to the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns True if the given MassConcentration are equal to the current MassConcentration.
     */
    public equals(massConcentration: MassConcentration): boolean {
        return super.internalEquals(this.value, massConcentration.BaseValue);
    }

    /**
     * Compare the given MassConcentration against the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns 0 if they are equal, -1 if the current MassConcentration is less then other, 1 if the current MassConcentration is greater then other.
     */
    public compareTo(massConcentration: MassConcentration): number {
        return super.internalCompareTo(this.value, massConcentration.BaseValue);
    }

    /**
     * Add the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    public add(massConcentration: MassConcentration): MassConcentration {
        return new MassConcentration(super.internalAdd(this.value, massConcentration.BaseValue))
    }

    /**
     * Subtract the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    public subtract(massConcentration: MassConcentration): MassConcentration {
        return new MassConcentration(super.internalSubtract(this.value, massConcentration.BaseValue))
    }

    /**
     * Multiply the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    public multiply(massConcentration: MassConcentration): MassConcentration {
        return new MassConcentration(super.internalMultiply(this.value, massConcentration.BaseValue))
    }

    /**
     * Divide the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    public divide(massConcentration: MassConcentration): MassConcentration {
        return new MassConcentration(super.internalDivide(this.value, massConcentration.BaseValue))
    }

    /**
     * Modulo the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    public modulo(massConcentration: MassConcentration): MassConcentration {
        return new MassConcentration(super.internalModulo(this.value, massConcentration.BaseValue))
    }

    /**
     * Pow the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    public pow(massConcentration: MassConcentration): MassConcentration {
        return new MassConcentration(super.internalPow(this.value, massConcentration.BaseValue))
    }
}
