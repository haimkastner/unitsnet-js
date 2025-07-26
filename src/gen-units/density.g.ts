import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a Density */
export interface DensityDto {
    /** The value of the Density */
    value: number;
    /**  The specific unit that the Density value is representing */
    unit: DensityUnits;
}

/** DensityUnits enumeration */
export enum DensityUnits {
    /** */
    GramsPerCubicMillimeter = "GramPerCubicMillimeter",
    /** */
    GramsPerCubicCentimeter = "GramPerCubicCentimeter",
    /** */
    GramsPerCubicMeter = "GramPerCubicMeter",
    /** */
    PoundsPerCubicInch = "PoundPerCubicInch",
    /** */
    PoundsPerCubicFoot = "PoundPerCubicFoot",
    /** Calculated from the definition of <a href="https://en.wikipedia.org/wiki/Pound_(mass)">pound</a> and <a href="https://en.wikipedia.org/wiki/Cubic_yard">Cubic yard</a> compared to metric kilogram and meter. */
    PoundsPerCubicYard = "PoundPerCubicYard",
    /** */
    TonnesPerCubicMillimeter = "TonnePerCubicMillimeter",
    /** */
    TonnesPerCubicCentimeter = "TonnePerCubicCentimeter",
    /** */
    TonnesPerCubicMeter = "TonnePerCubicMeter",
    /** */
    SlugsPerCubicFoot = "SlugPerCubicFoot",
    /** */
    GramsPerLiter = "GramPerLiter",
    /** */
    GramsPerDeciliter = "GramPerDeciliter",
    /** */
    GramsPerMilliliter = "GramPerMilliliter",
    /** */
    PoundsPerUSGallon = "PoundPerUSGallon",
    /** */
    PoundsPerImperialGallon = "PoundPerImperialGallon",
    /** */
    KilogramsPerLiter = "KilogramPerLiter",
    /** */
    TonnesPerCubicFoot = "TonnePerCubicFoot",
    /** */
    TonnesPerCubicInch = "TonnePerCubicInch",
    /** */
    GramsPerCubicFoot = "GramPerCubicFoot",
    /** */
    GramsPerCubicInch = "GramPerCubicInch",
    /** */
    PoundsPerCubicMeter = "PoundPerCubicMeter",
    /** */
    PoundsPerCubicCentimeter = "PoundPerCubicCentimeter",
    /** */
    PoundsPerCubicMillimeter = "PoundPerCubicMillimeter",
    /** */
    SlugsPerCubicMeter = "SlugPerCubicMeter",
    /** */
    SlugsPerCubicCentimeter = "SlugPerCubicCentimeter",
    /** */
    SlugsPerCubicMillimeter = "SlugPerCubicMillimeter",
    /** */
    SlugsPerCubicInch = "SlugPerCubicInch",
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
    KilopoundsPerCubicInch = "KilopoundPerCubicInch",
    /** */
    KilopoundsPerCubicFoot = "KilopoundPerCubicFoot",
    /** */
    KilopoundsPerCubicYard = "KilopoundPerCubicYard",
    /** */
    FemtogramsPerLiter = "FemtogramPerLiter",
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
    FemtogramsPerDeciliter = "FemtogramPerDeciliter",
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
    FemtogramsPerMilliliter = "FemtogramPerMilliliter",
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
    DecigramsPerMilliliter = "DecigramPerMilliliter"
}

/** The density, or more precisely, the volumetric mass density, of a substance is its mass per unit volume. */
export class Density extends BaseUnit {
    protected value: number;
    private gramspercubicmillimeterLazy: number | null = null;
    private gramspercubiccentimeterLazy: number | null = null;
    private gramspercubicmeterLazy: number | null = null;
    private poundspercubicinchLazy: number | null = null;
    private poundspercubicfootLazy: number | null = null;
    private poundspercubicyardLazy: number | null = null;
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
    private tonnespercubicfootLazy: number | null = null;
    private tonnespercubicinchLazy: number | null = null;
    private gramspercubicfootLazy: number | null = null;
    private gramspercubicinchLazy: number | null = null;
    private poundspercubicmeterLazy: number | null = null;
    private poundspercubiccentimeterLazy: number | null = null;
    private poundspercubicmillimeterLazy: number | null = null;
    private slugspercubicmeterLazy: number | null = null;
    private slugspercubiccentimeterLazy: number | null = null;
    private slugspercubicmillimeterLazy: number | null = null;
    private slugspercubicinchLazy: number | null = null;
    private kilogramspercubicmillimeterLazy: number | null = null;
    private kilogramspercubiccentimeterLazy: number | null = null;
    private kilogramspercubicmeterLazy: number | null = null;
    private milligramspercubicmeterLazy: number | null = null;
    private microgramspercubicmeterLazy: number | null = null;
    private kilopoundspercubicinchLazy: number | null = null;
    private kilopoundspercubicfootLazy: number | null = null;
    private kilopoundspercubicyardLazy: number | null = null;
    private femtogramsperliterLazy: number | null = null;
    private picogramsperliterLazy: number | null = null;
    private nanogramsperliterLazy: number | null = null;
    private microgramsperliterLazy: number | null = null;
    private milligramsperliterLazy: number | null = null;
    private centigramsperliterLazy: number | null = null;
    private decigramsperliterLazy: number | null = null;
    private femtogramsperdeciliterLazy: number | null = null;
    private picogramsperdeciliterLazy: number | null = null;
    private nanogramsperdeciliterLazy: number | null = null;
    private microgramsperdeciliterLazy: number | null = null;
    private milligramsperdeciliterLazy: number | null = null;
    private centigramsperdeciliterLazy: number | null = null;
    private decigramsperdeciliterLazy: number | null = null;
    private femtogramspermilliliterLazy: number | null = null;
    private picogramspermilliliterLazy: number | null = null;
    private nanogramspermilliliterLazy: number | null = null;
    private microgramspermilliliterLazy: number | null = null;
    private milligramspermilliliterLazy: number | null = null;
    private centigramspermilliliterLazy: number | null = null;
    private decigramspermilliliterLazy: number | null = null;

    /**
     * Create a new Density.
     * @param value The value.
     * @param fromUnit The ‘Density’ unit to create from.
     * The default unit is KilogramsPerCubicMeter
     */
    public constructor(value: number, fromUnit: DensityUnits = DensityUnits.KilogramsPerCubicMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Density is KilogramsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): DensityUnits.KilogramsPerCubicMeter {
        return DensityUnits.KilogramsPerCubicMeter
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

    /** Calculated from the definition of <a href="https://en.wikipedia.org/wiki/Pound_(mass)">pound</a> and <a href="https://en.wikipedia.org/wiki/Cubic_yard">Cubic yard</a> compared to metric kilogram and meter. */
    public get PoundsPerCubicYard(): number {
        if(this.poundspercubicyardLazy !== null){
            return this.poundspercubicyardLazy;
        }
        return this.poundspercubicyardLazy = this.convertFromBase(DensityUnits.PoundsPerCubicYard);
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
    public get GramsPerDeciliter(): number {
        if(this.gramsperdeciliterLazy !== null){
            return this.gramsperdeciliterLazy;
        }
        return this.gramsperdeciliterLazy = this.convertFromBase(DensityUnits.GramsPerDeciliter);
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
    public get TonnesPerCubicFoot(): number {
        if(this.tonnespercubicfootLazy !== null){
            return this.tonnespercubicfootLazy;
        }
        return this.tonnespercubicfootLazy = this.convertFromBase(DensityUnits.TonnesPerCubicFoot);
    }

    /** */
    public get TonnesPerCubicInch(): number {
        if(this.tonnespercubicinchLazy !== null){
            return this.tonnespercubicinchLazy;
        }
        return this.tonnespercubicinchLazy = this.convertFromBase(DensityUnits.TonnesPerCubicInch);
    }

    /** */
    public get GramsPerCubicFoot(): number {
        if(this.gramspercubicfootLazy !== null){
            return this.gramspercubicfootLazy;
        }
        return this.gramspercubicfootLazy = this.convertFromBase(DensityUnits.GramsPerCubicFoot);
    }

    /** */
    public get GramsPerCubicInch(): number {
        if(this.gramspercubicinchLazy !== null){
            return this.gramspercubicinchLazy;
        }
        return this.gramspercubicinchLazy = this.convertFromBase(DensityUnits.GramsPerCubicInch);
    }

    /** */
    public get PoundsPerCubicMeter(): number {
        if(this.poundspercubicmeterLazy !== null){
            return this.poundspercubicmeterLazy;
        }
        return this.poundspercubicmeterLazy = this.convertFromBase(DensityUnits.PoundsPerCubicMeter);
    }

    /** */
    public get PoundsPerCubicCentimeter(): number {
        if(this.poundspercubiccentimeterLazy !== null){
            return this.poundspercubiccentimeterLazy;
        }
        return this.poundspercubiccentimeterLazy = this.convertFromBase(DensityUnits.PoundsPerCubicCentimeter);
    }

    /** */
    public get PoundsPerCubicMillimeter(): number {
        if(this.poundspercubicmillimeterLazy !== null){
            return this.poundspercubicmillimeterLazy;
        }
        return this.poundspercubicmillimeterLazy = this.convertFromBase(DensityUnits.PoundsPerCubicMillimeter);
    }

    /** */
    public get SlugsPerCubicMeter(): number {
        if(this.slugspercubicmeterLazy !== null){
            return this.slugspercubicmeterLazy;
        }
        return this.slugspercubicmeterLazy = this.convertFromBase(DensityUnits.SlugsPerCubicMeter);
    }

    /** */
    public get SlugsPerCubicCentimeter(): number {
        if(this.slugspercubiccentimeterLazy !== null){
            return this.slugspercubiccentimeterLazy;
        }
        return this.slugspercubiccentimeterLazy = this.convertFromBase(DensityUnits.SlugsPerCubicCentimeter);
    }

    /** */
    public get SlugsPerCubicMillimeter(): number {
        if(this.slugspercubicmillimeterLazy !== null){
            return this.slugspercubicmillimeterLazy;
        }
        return this.slugspercubicmillimeterLazy = this.convertFromBase(DensityUnits.SlugsPerCubicMillimeter);
    }

    /** */
    public get SlugsPerCubicInch(): number {
        if(this.slugspercubicinchLazy !== null){
            return this.slugspercubicinchLazy;
        }
        return this.slugspercubicinchLazy = this.convertFromBase(DensityUnits.SlugsPerCubicInch);
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
    public get MilligramsPerCubicMeter(): number {
        if(this.milligramspercubicmeterLazy !== null){
            return this.milligramspercubicmeterLazy;
        }
        return this.milligramspercubicmeterLazy = this.convertFromBase(DensityUnits.MilligramsPerCubicMeter);
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
    public get KilopoundsPerCubicYard(): number {
        if(this.kilopoundspercubicyardLazy !== null){
            return this.kilopoundspercubicyardLazy;
        }
        return this.kilopoundspercubicyardLazy = this.convertFromBase(DensityUnits.KilopoundsPerCubicYard);
    }

    /** */
    public get FemtogramsPerLiter(): number {
        if(this.femtogramsperliterLazy !== null){
            return this.femtogramsperliterLazy;
        }
        return this.femtogramsperliterLazy = this.convertFromBase(DensityUnits.FemtogramsPerLiter);
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
    public get MilligramsPerLiter(): number {
        if(this.milligramsperliterLazy !== null){
            return this.milligramsperliterLazy;
        }
        return this.milligramsperliterLazy = this.convertFromBase(DensityUnits.MilligramsPerLiter);
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
    public get FemtogramsPerDeciliter(): number {
        if(this.femtogramsperdeciliterLazy !== null){
            return this.femtogramsperdeciliterLazy;
        }
        return this.femtogramsperdeciliterLazy = this.convertFromBase(DensityUnits.FemtogramsPerDeciliter);
    }

    /** */
    public get PicogramsPerDeciliter(): number {
        if(this.picogramsperdeciliterLazy !== null){
            return this.picogramsperdeciliterLazy;
        }
        return this.picogramsperdeciliterLazy = this.convertFromBase(DensityUnits.PicogramsPerDeciliter);
    }

    /** */
    public get NanogramsPerDeciliter(): number {
        if(this.nanogramsperdeciliterLazy !== null){
            return this.nanogramsperdeciliterLazy;
        }
        return this.nanogramsperdeciliterLazy = this.convertFromBase(DensityUnits.NanogramsPerDeciliter);
    }

    /** */
    public get MicrogramsPerDeciliter(): number {
        if(this.microgramsperdeciliterLazy !== null){
            return this.microgramsperdeciliterLazy;
        }
        return this.microgramsperdeciliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerDeciliter);
    }

    /** */
    public get MilligramsPerDeciliter(): number {
        if(this.milligramsperdeciliterLazy !== null){
            return this.milligramsperdeciliterLazy;
        }
        return this.milligramsperdeciliterLazy = this.convertFromBase(DensityUnits.MilligramsPerDeciliter);
    }

    /** */
    public get CentigramsPerDeciliter(): number {
        if(this.centigramsperdeciliterLazy !== null){
            return this.centigramsperdeciliterLazy;
        }
        return this.centigramsperdeciliterLazy = this.convertFromBase(DensityUnits.CentigramsPerDeciliter);
    }

    /** */
    public get DecigramsPerDeciliter(): number {
        if(this.decigramsperdeciliterLazy !== null){
            return this.decigramsperdeciliterLazy;
        }
        return this.decigramsperdeciliterLazy = this.convertFromBase(DensityUnits.DecigramsPerDeciliter);
    }

    /** */
    public get FemtogramsPerMilliliter(): number {
        if(this.femtogramspermilliliterLazy !== null){
            return this.femtogramspermilliliterLazy;
        }
        return this.femtogramspermilliliterLazy = this.convertFromBase(DensityUnits.FemtogramsPerMilliliter);
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
    public get MilligramsPerMilliliter(): number {
        if(this.milligramspermilliliterLazy !== null){
            return this.milligramspermilliliterLazy;
        }
        return this.milligramspermilliliterLazy = this.convertFromBase(DensityUnits.MilligramsPerMilliliter);
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
     * Create a new Density instance from a PoundsPerCubicYard
     * Calculated from the definition of <a href="https://en.wikipedia.org/wiki/Pound_(mass)">pound</a> and <a href="https://en.wikipedia.org/wiki/Cubic_yard">Cubic yard</a> compared to metric kilogram and meter.
     * @param value The unit as PoundsPerCubicYard to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerCubicYard(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicYard);
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
     * Create a new Density instance from a GramsPerDeciliter
     *
     * @param value The unit as GramsPerDeciliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerDeciliter);
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
     * Create a new Density instance from a TonnesPerCubicFoot
     *
     * @param value The unit as TonnesPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromTonnesPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicFoot);
    }

    /**
     * Create a new Density instance from a TonnesPerCubicInch
     *
     * @param value The unit as TonnesPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromTonnesPerCubicInch(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicInch);
    }

    /**
     * Create a new Density instance from a GramsPerCubicFoot
     *
     * @param value The unit as GramsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicFoot);
    }

    /**
     * Create a new Density instance from a GramsPerCubicInch
     *
     * @param value The unit as GramsPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromGramsPerCubicInch(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicInch);
    }

    /**
     * Create a new Density instance from a PoundsPerCubicMeter
     *
     * @param value The unit as PoundsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicMeter);
    }

    /**
     * Create a new Density instance from a PoundsPerCubicCentimeter
     *
     * @param value The unit as PoundsPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicCentimeter);
    }

    /**
     * Create a new Density instance from a PoundsPerCubicMillimeter
     *
     * @param value The unit as PoundsPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPoundsPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicMillimeter);
    }

    /**
     * Create a new Density instance from a SlugsPerCubicMeter
     *
     * @param value The unit as SlugsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromSlugsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.SlugsPerCubicMeter);
    }

    /**
     * Create a new Density instance from a SlugsPerCubicCentimeter
     *
     * @param value The unit as SlugsPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromSlugsPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.SlugsPerCubicCentimeter);
    }

    /**
     * Create a new Density instance from a SlugsPerCubicMillimeter
     *
     * @param value The unit as SlugsPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromSlugsPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.SlugsPerCubicMillimeter);
    }

    /**
     * Create a new Density instance from a SlugsPerCubicInch
     *
     * @param value The unit as SlugsPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromSlugsPerCubicInch(value: number): Density {
        return new Density(value, DensityUnits.SlugsPerCubicInch);
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
     * Create a new Density instance from a MilligramsPerCubicMeter
     *
     * @param value The unit as MilligramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMilligramsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.MilligramsPerCubicMeter);
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
     * Create a new Density instance from a KilopoundsPerCubicYard
     *
     * @param value The unit as KilopoundsPerCubicYard to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromKilopoundsPerCubicYard(value: number): Density {
        return new Density(value, DensityUnits.KilopoundsPerCubicYard);
    }

    /**
     * Create a new Density instance from a FemtogramsPerLiter
     *
     * @param value The unit as FemtogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromFemtogramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.FemtogramsPerLiter);
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
     * Create a new Density instance from a MilligramsPerLiter
     *
     * @param value The unit as MilligramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMilligramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.MilligramsPerLiter);
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
     * Create a new Density instance from a FemtogramsPerDeciliter
     *
     * @param value The unit as FemtogramsPerDeciliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromFemtogramsPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.FemtogramsPerDeciliter);
    }

    /**
     * Create a new Density instance from a PicogramsPerDeciliter
     *
     * @param value The unit as PicogramsPerDeciliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromPicogramsPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.PicogramsPerDeciliter);
    }

    /**
     * Create a new Density instance from a NanogramsPerDeciliter
     *
     * @param value The unit as NanogramsPerDeciliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromNanogramsPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.NanogramsPerDeciliter);
    }

    /**
     * Create a new Density instance from a MicrogramsPerDeciliter
     *
     * @param value The unit as MicrogramsPerDeciliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMicrogramsPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramsPerDeciliter);
    }

    /**
     * Create a new Density instance from a MilligramsPerDeciliter
     *
     * @param value The unit as MilligramsPerDeciliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMilligramsPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.MilligramsPerDeciliter);
    }

    /**
     * Create a new Density instance from a CentigramsPerDeciliter
     *
     * @param value The unit as CentigramsPerDeciliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromCentigramsPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.CentigramsPerDeciliter);
    }

    /**
     * Create a new Density instance from a DecigramsPerDeciliter
     *
     * @param value The unit as DecigramsPerDeciliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromDecigramsPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.DecigramsPerDeciliter);
    }

    /**
     * Create a new Density instance from a FemtogramsPerMilliliter
     *
     * @param value The unit as FemtogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromFemtogramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.FemtogramsPerMilliliter);
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
     * Create a new Density instance from a MilligramsPerMilliliter
     *
     * @param value The unit as MilligramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    public static FromMilligramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.MilligramsPerMilliliter);
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

    /**
     * Gets the base unit enumeration associated with Density
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof DensityUnits {
        return DensityUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): DensityUnits.KilogramsPerCubicMeter {
        return DensityUnits.KilogramsPerCubicMeter;
    }

    /**
     * Create API DTO represent a Density unit.
     * @param holdInUnit The specific Density unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: DensityUnits = DensityUnits.KilogramsPerCubicMeter): DensityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Density unit from an API DTO representation.
     * @param dtoDensity The Density API DTO representation
     */
    public static FromDto(dtoDensity: DensityDto): Density {
        return new Density(dtoDensity.value, dtoDensity.unit);
    }

    /**
     * Convert Density to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: DensityUnits): number {
        switch (toUnit) {
            case DensityUnits.GramsPerCubicMillimeter: return this.GramsPerCubicMillimeter;
            case DensityUnits.GramsPerCubicCentimeter: return this.GramsPerCubicCentimeter;
            case DensityUnits.GramsPerCubicMeter: return this.GramsPerCubicMeter;
            case DensityUnits.PoundsPerCubicInch: return this.PoundsPerCubicInch;
            case DensityUnits.PoundsPerCubicFoot: return this.PoundsPerCubicFoot;
            case DensityUnits.PoundsPerCubicYard: return this.PoundsPerCubicYard;
            case DensityUnits.TonnesPerCubicMillimeter: return this.TonnesPerCubicMillimeter;
            case DensityUnits.TonnesPerCubicCentimeter: return this.TonnesPerCubicCentimeter;
            case DensityUnits.TonnesPerCubicMeter: return this.TonnesPerCubicMeter;
            case DensityUnits.SlugsPerCubicFoot: return this.SlugsPerCubicFoot;
            case DensityUnits.GramsPerLiter: return this.GramsPerLiter;
            case DensityUnits.GramsPerDeciliter: return this.GramsPerDeciliter;
            case DensityUnits.GramsPerMilliliter: return this.GramsPerMilliliter;
            case DensityUnits.PoundsPerUSGallon: return this.PoundsPerUSGallon;
            case DensityUnits.PoundsPerImperialGallon: return this.PoundsPerImperialGallon;
            case DensityUnits.KilogramsPerLiter: return this.KilogramsPerLiter;
            case DensityUnits.TonnesPerCubicFoot: return this.TonnesPerCubicFoot;
            case DensityUnits.TonnesPerCubicInch: return this.TonnesPerCubicInch;
            case DensityUnits.GramsPerCubicFoot: return this.GramsPerCubicFoot;
            case DensityUnits.GramsPerCubicInch: return this.GramsPerCubicInch;
            case DensityUnits.PoundsPerCubicMeter: return this.PoundsPerCubicMeter;
            case DensityUnits.PoundsPerCubicCentimeter: return this.PoundsPerCubicCentimeter;
            case DensityUnits.PoundsPerCubicMillimeter: return this.PoundsPerCubicMillimeter;
            case DensityUnits.SlugsPerCubicMeter: return this.SlugsPerCubicMeter;
            case DensityUnits.SlugsPerCubicCentimeter: return this.SlugsPerCubicCentimeter;
            case DensityUnits.SlugsPerCubicMillimeter: return this.SlugsPerCubicMillimeter;
            case DensityUnits.SlugsPerCubicInch: return this.SlugsPerCubicInch;
            case DensityUnits.KilogramsPerCubicMillimeter: return this.KilogramsPerCubicMillimeter;
            case DensityUnits.KilogramsPerCubicCentimeter: return this.KilogramsPerCubicCentimeter;
            case DensityUnits.KilogramsPerCubicMeter: return this.KilogramsPerCubicMeter;
            case DensityUnits.MilligramsPerCubicMeter: return this.MilligramsPerCubicMeter;
            case DensityUnits.MicrogramsPerCubicMeter: return this.MicrogramsPerCubicMeter;
            case DensityUnits.KilopoundsPerCubicInch: return this.KilopoundsPerCubicInch;
            case DensityUnits.KilopoundsPerCubicFoot: return this.KilopoundsPerCubicFoot;
            case DensityUnits.KilopoundsPerCubicYard: return this.KilopoundsPerCubicYard;
            case DensityUnits.FemtogramsPerLiter: return this.FemtogramsPerLiter;
            case DensityUnits.PicogramsPerLiter: return this.PicogramsPerLiter;
            case DensityUnits.NanogramsPerLiter: return this.NanogramsPerLiter;
            case DensityUnits.MicrogramsPerLiter: return this.MicrogramsPerLiter;
            case DensityUnits.MilligramsPerLiter: return this.MilligramsPerLiter;
            case DensityUnits.CentigramsPerLiter: return this.CentigramsPerLiter;
            case DensityUnits.DecigramsPerLiter: return this.DecigramsPerLiter;
            case DensityUnits.FemtogramsPerDeciliter: return this.FemtogramsPerDeciliter;
            case DensityUnits.PicogramsPerDeciliter: return this.PicogramsPerDeciliter;
            case DensityUnits.NanogramsPerDeciliter: return this.NanogramsPerDeciliter;
            case DensityUnits.MicrogramsPerDeciliter: return this.MicrogramsPerDeciliter;
            case DensityUnits.MilligramsPerDeciliter: return this.MilligramsPerDeciliter;
            case DensityUnits.CentigramsPerDeciliter: return this.CentigramsPerDeciliter;
            case DensityUnits.DecigramsPerDeciliter: return this.DecigramsPerDeciliter;
            case DensityUnits.FemtogramsPerMilliliter: return this.FemtogramsPerMilliliter;
            case DensityUnits.PicogramsPerMilliliter: return this.PicogramsPerMilliliter;
            case DensityUnits.NanogramsPerMilliliter: return this.NanogramsPerMilliliter;
            case DensityUnits.MicrogramsPerMilliliter: return this.MicrogramsPerMilliliter;
            case DensityUnits.MilligramsPerMilliliter: return this.MilligramsPerMilliliter;
            case DensityUnits.CentigramsPerMilliliter: return this.CentigramsPerMilliliter;
            case DensityUnits.DecigramsPerMilliliter: return this.DecigramsPerMilliliter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: DensityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case DensityUnits.GramsPerCubicMillimeter: return super.internalMultiply(this.value, 1e-6);
                case DensityUnits.GramsPerCubicCentimeter: return super.internalMultiply(this.value, 1e-3);
                case DensityUnits.GramsPerCubicMeter: return super.internalMultiply(this.value, 1e3);
                case DensityUnits.PoundsPerCubicInch: {
                    const v4 = super.internalDivide(1.6387064e-5, 0.45359237);
                    return super.internalMultiply(this.value, v4);
                }
                case DensityUnits.PoundsPerCubicFoot: {
                    const v4 = super.internalDivide(0.028316846592, 0.45359237);
                    return super.internalMultiply(this.value, v4);
                }
                case DensityUnits.PoundsPerCubicYard: {
                    const v4 = super.internalDivide(0.764554857984, 0.45359237);
                    return super.internalMultiply(this.value, v4);
                }
                case DensityUnits.TonnesPerCubicMillimeter: return super.internalMultiply(this.value, 1e-12);
                case DensityUnits.TonnesPerCubicCentimeter: return super.internalMultiply(this.value, 1e-9);
                case DensityUnits.TonnesPerCubicMeter: return super.internalMultiply(this.value, 0.001);
                case DensityUnits.SlugsPerCubicFoot: {
                    const v4 = super.internalMultiply(0.3048, 0.028316846592);
                    const v7 = super.internalMultiply(0.45359237, 9.80665);
                    const v8 = super.internalDivide(v4, v7);
                    return super.internalMultiply(this.value, v8);
                }
                case DensityUnits.GramsPerLiter: return super.internalMultiply(this.value, 1);
                case DensityUnits.GramsPerDeciliter: return super.internalMultiply(this.value, 1e-1);
                case DensityUnits.GramsPerMilliliter: return super.internalMultiply(this.value, 1e-3);
                case DensityUnits.PoundsPerUSGallon: {
                    const v4 = super.internalDivide(0.003785411784, 0.45359237);
                    return super.internalMultiply(this.value, v4);
                }
                case DensityUnits.PoundsPerImperialGallon: {
                    const v4 = super.internalDivide(0.00454609, 0.45359237);
                    return super.internalMultiply(this.value, v4);
                }
                case DensityUnits.KilogramsPerLiter: return super.internalDivide(this.value, 1e3);
                case DensityUnits.TonnesPerCubicFoot: {
                    const v4 = super.internalDivide(0.028316846592, 1000);
                    return super.internalMultiply(this.value, v4);
                }
                case DensityUnits.TonnesPerCubicInch: {
                    const v4 = super.internalDivide(1.6387064e-5, 1000);
                    return super.internalMultiply(this.value, v4);
                }
                case DensityUnits.GramsPerCubicFoot: {
                    const v4 = super.internalDivide(0.028316846592, 0.001);
                    return super.internalMultiply(this.value, v4);
                }
                case DensityUnits.GramsPerCubicInch: {
                    const v4 = super.internalDivide(1.6387064e-5, 0.001);
                    return super.internalMultiply(this.value, v4);
                }
                case DensityUnits.PoundsPerCubicMeter: return super.internalDivide(this.value, 0.45359237);
                case DensityUnits.PoundsPerCubicCentimeter: return super.internalDivide(this.value, 0.45359237e6);
                case DensityUnits.PoundsPerCubicMillimeter: return super.internalDivide(this.value, 0.45359237e9);
                case DensityUnits.SlugsPerCubicMeter: {
                    const v5 = super.internalMultiply(0.45359237, 9.80665);
                    const v6 = super.internalDivide(0.3048, v5);
                    return super.internalMultiply(this.value, v6);
                }
                case DensityUnits.SlugsPerCubicCentimeter: {
                    const v5 = super.internalMultiply(0.45359237e6, 9.80665);
                    const v6 = super.internalDivide(0.3048, v5);
                    return super.internalMultiply(this.value, v6);
                }
                case DensityUnits.SlugsPerCubicMillimeter: {
                    const v5 = super.internalMultiply(0.45359237e9, 9.80665);
                    const v6 = super.internalDivide(0.3048, v5);
                    return super.internalMultiply(this.value, v6);
                }
                case DensityUnits.SlugsPerCubicInch: {
                    const v4 = super.internalMultiply(0.3048, 1.6387064e-5);
                    const v7 = super.internalMultiply(0.45359237, 9.80665);
                    const v8 = super.internalDivide(v4, v7);
                    return super.internalMultiply(this.value, v8);
                }
                case DensityUnits.KilogramsPerCubicMillimeter: {
                    const v3 = super.internalMultiply(this.value, 1e-6);
                    return super.internalDivide(v3, 1000);
                }
                case DensityUnits.KilogramsPerCubicCentimeter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1000);
                }
                case DensityUnits.KilogramsPerCubicMeter: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 1000);
                }
                case DensityUnits.MilligramsPerCubicMeter: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 0.001);
                }
                case DensityUnits.MicrogramsPerCubicMeter: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 0.000001);
                }
                case DensityUnits.KilopoundsPerCubicInch: {
                    const v4 = super.internalDivide(1.6387064e-5, 0.45359237);
                    const v5 = super.internalMultiply(this.value, v4);
                    return super.internalDivide(v5, 1000);
                }
                case DensityUnits.KilopoundsPerCubicFoot: {
                    const v4 = super.internalDivide(0.028316846592, 0.45359237);
                    const v5 = super.internalMultiply(this.value, v4);
                    return super.internalDivide(v5, 1000);
                }
                case DensityUnits.KilopoundsPerCubicYard: {
                    const v4 = super.internalDivide(0.764554857984, 0.45359237);
                    const v5 = super.internalMultiply(this.value, v4);
                    return super.internalDivide(v5, 1000);
                }
                case DensityUnits.FemtogramsPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1);
                    return super.internalDivide(v3, 1e-15);
                }
                case DensityUnits.PicogramsPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1);
                    return super.internalDivide(v3, 1e-12);
                }
                case DensityUnits.NanogramsPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1);
                    return super.internalDivide(v3, 1e-9);
                }
                case DensityUnits.MicrogramsPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1);
                    return super.internalDivide(v3, 0.000001);
                }
                case DensityUnits.MilligramsPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1);
                    return super.internalDivide(v3, 0.001);
                }
                case DensityUnits.CentigramsPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1);
                    return super.internalDivide(v3, 0.01);
                }
                case DensityUnits.DecigramsPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1);
                    return super.internalDivide(v3, 0.1);
                }
                case DensityUnits.FemtogramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 1e-15);
                }
                case DensityUnits.PicogramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 1e-12);
                }
                case DensityUnits.NanogramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 1e-9);
                }
                case DensityUnits.MicrogramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 0.000001);
                }
                case DensityUnits.MilligramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 0.001);
                }
                case DensityUnits.CentigramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 0.01);
                }
                case DensityUnits.DecigramsPerDeciliter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 0.1);
                }
                case DensityUnits.FemtogramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1e-15);
                }
                case DensityUnits.PicogramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1e-12);
                }
                case DensityUnits.NanogramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1e-9);
                }
                case DensityUnits.MicrogramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.000001);
                }
                case DensityUnits.MilligramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.001);
                }
                case DensityUnits.CentigramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.01);
                }
                case DensityUnits.DecigramsPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.1);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case DensityUnits.GramsPerCubicMillimeter: return this.value * 1e-6;
            case DensityUnits.GramsPerCubicCentimeter: return this.value * 1e-3;
            case DensityUnits.GramsPerCubicMeter: return this.value * 1e3;
            case DensityUnits.PoundsPerCubicInch: return this.value * 1.6387064e-5 / 0.45359237;
            case DensityUnits.PoundsPerCubicFoot: return this.value * 0.028316846592 / 0.45359237;
            case DensityUnits.PoundsPerCubicYard: return this.value * 0.764554857984 / 0.45359237;
            case DensityUnits.TonnesPerCubicMillimeter: return this.value * 1e-12;
            case DensityUnits.TonnesPerCubicCentimeter: return this.value * 1e-9;
            case DensityUnits.TonnesPerCubicMeter: return this.value * 0.001;
            case DensityUnits.SlugsPerCubicFoot: return this.value * (0.3048 * 0.028316846592) / (0.45359237 * 9.80665);
            case DensityUnits.GramsPerLiter: return this.value * 1;
            case DensityUnits.GramsPerDeciliter: return this.value * 1e-1;
            case DensityUnits.GramsPerMilliliter: return this.value * 1e-3;
            case DensityUnits.PoundsPerUSGallon: return this.value * 0.003785411784 / 0.45359237;
            case DensityUnits.PoundsPerImperialGallon: return this.value * 0.00454609 / 0.45359237;
            case DensityUnits.KilogramsPerLiter: return this.value / 1e3;
            case DensityUnits.TonnesPerCubicFoot: return this.value * 0.028316846592 / 1000;
            case DensityUnits.TonnesPerCubicInch: return this.value * 1.6387064e-5 / 1000;
            case DensityUnits.GramsPerCubicFoot: return this.value * 0.028316846592 / 0.001;
            case DensityUnits.GramsPerCubicInch: return this.value * 1.6387064e-5 / 0.001;
            case DensityUnits.PoundsPerCubicMeter: return this.value / 0.45359237;
            case DensityUnits.PoundsPerCubicCentimeter: return this.value / 0.45359237e6;
            case DensityUnits.PoundsPerCubicMillimeter: return this.value / 0.45359237e9;
            case DensityUnits.SlugsPerCubicMeter: return this.value * 0.3048 / (0.45359237 * 9.80665);
            case DensityUnits.SlugsPerCubicCentimeter: return this.value * 0.3048 / (0.45359237e6 * 9.80665);
            case DensityUnits.SlugsPerCubicMillimeter: return this.value * 0.3048 / (0.45359237e9 * 9.80665);
            case DensityUnits.SlugsPerCubicInch: return this.value * (0.3048 * 1.6387064e-5) / (0.45359237 * 9.80665);
            case DensityUnits.KilogramsPerCubicMillimeter: return (this.value * 1e-6) / 1000;
            case DensityUnits.KilogramsPerCubicCentimeter: return (this.value * 1e-3) / 1000;
            case DensityUnits.KilogramsPerCubicMeter: return (this.value * 1e3) / 1000;
            case DensityUnits.MilligramsPerCubicMeter: return (this.value * 1e3) / 0.001;
            case DensityUnits.MicrogramsPerCubicMeter: return (this.value * 1e3) / 0.000001;
            case DensityUnits.KilopoundsPerCubicInch: return (this.value * 1.6387064e-5 / 0.45359237) / 1000;
            case DensityUnits.KilopoundsPerCubicFoot: return (this.value * 0.028316846592 / 0.45359237) / 1000;
            case DensityUnits.KilopoundsPerCubicYard: return (this.value * 0.764554857984 / 0.45359237) / 1000;
            case DensityUnits.FemtogramsPerLiter: return (this.value * 1) / 1e-15;
            case DensityUnits.PicogramsPerLiter: return (this.value * 1) / 1e-12;
            case DensityUnits.NanogramsPerLiter: return (this.value * 1) / 1e-9;
            case DensityUnits.MicrogramsPerLiter: return (this.value * 1) / 0.000001;
            case DensityUnits.MilligramsPerLiter: return (this.value * 1) / 0.001;
            case DensityUnits.CentigramsPerLiter: return (this.value * 1) / 0.01;
            case DensityUnits.DecigramsPerLiter: return (this.value * 1) / 0.1;
            case DensityUnits.FemtogramsPerDeciliter: return (this.value * 1e-1) / 1e-15;
            case DensityUnits.PicogramsPerDeciliter: return (this.value * 1e-1) / 1e-12;
            case DensityUnits.NanogramsPerDeciliter: return (this.value * 1e-1) / 1e-9;
            case DensityUnits.MicrogramsPerDeciliter: return (this.value * 1e-1) / 0.000001;
            case DensityUnits.MilligramsPerDeciliter: return (this.value * 1e-1) / 0.001;
            case DensityUnits.CentigramsPerDeciliter: return (this.value * 1e-1) / 0.01;
            case DensityUnits.DecigramsPerDeciliter: return (this.value * 1e-1) / 0.1;
            case DensityUnits.FemtogramsPerMilliliter: return (this.value * 1e-3) / 1e-15;
            case DensityUnits.PicogramsPerMilliliter: return (this.value * 1e-3) / 1e-12;
            case DensityUnits.NanogramsPerMilliliter: return (this.value * 1e-3) / 1e-9;
            case DensityUnits.MicrogramsPerMilliliter: return (this.value * 1e-3) / 0.000001;
            case DensityUnits.MilligramsPerMilliliter: return (this.value * 1e-3) / 0.001;
            case DensityUnits.CentigramsPerMilliliter: return (this.value * 1e-3) / 0.01;
            case DensityUnits.DecigramsPerMilliliter: return (this.value * 1e-3) / 0.1;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: DensityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case DensityUnits.GramsPerCubicMillimeter: return super.internalDivide(value, 1e-6);
                case DensityUnits.GramsPerCubicCentimeter: return super.internalDivide(value, 1e-3);
                case DensityUnits.GramsPerCubicMeter: return super.internalDivide(value, 1e3);
                case DensityUnits.PoundsPerCubicInch: {
                    const v4 = super.internalDivide(0.45359237, 1.6387064e-5);
                    return super.internalMultiply(value, v4);
                }
                case DensityUnits.PoundsPerCubicFoot: {
                    const v4 = super.internalDivide(0.45359237, 0.028316846592);
                    return super.internalMultiply(value, v4);
                }
                case DensityUnits.PoundsPerCubicYard: {
                    const v4 = super.internalDivide(0.45359237, 0.764554857984);
                    return super.internalMultiply(value, v4);
                }
                case DensityUnits.TonnesPerCubicMillimeter: return super.internalDivide(value, 1e-12);
                case DensityUnits.TonnesPerCubicCentimeter: return super.internalDivide(value, 1e-9);
                case DensityUnits.TonnesPerCubicMeter: return super.internalDivide(value, 0.001);
                case DensityUnits.SlugsPerCubicFoot: {
                    const v4 = super.internalMultiply(0.45359237, 9.80665);
                    const v7 = super.internalMultiply(0.3048, 0.028316846592);
                    const v8 = super.internalDivide(v4, v7);
                    return super.internalMultiply(value, v8);
                }
                case DensityUnits.GramsPerLiter: return super.internalDivide(value, 1);
                case DensityUnits.GramsPerDeciliter: return super.internalDivide(value, 1e-1);
                case DensityUnits.GramsPerMilliliter: return super.internalDivide(value, 1e-3);
                case DensityUnits.PoundsPerUSGallon: {
                    const v4 = super.internalDivide(0.45359237, 0.003785411784);
                    return super.internalMultiply(value, v4);
                }
                case DensityUnits.PoundsPerImperialGallon: {
                    const v4 = super.internalDivide(0.45359237, 0.00454609);
                    return super.internalMultiply(value, v4);
                }
                case DensityUnits.KilogramsPerLiter: return super.internalMultiply(value, 1e3);
                case DensityUnits.TonnesPerCubicFoot: {
                    const v4 = super.internalDivide(1000, 0.028316846592);
                    return super.internalMultiply(value, v4);
                }
                case DensityUnits.TonnesPerCubicInch: {
                    const v4 = super.internalDivide(1000, 1.6387064e-5);
                    return super.internalMultiply(value, v4);
                }
                case DensityUnits.GramsPerCubicFoot: {
                    const v4 = super.internalDivide(0.001, 0.028316846592);
                    return super.internalMultiply(value, v4);
                }
                case DensityUnits.GramsPerCubicInch: {
                    const v4 = super.internalDivide(0.001, 1.6387064e-5);
                    return super.internalMultiply(value, v4);
                }
                case DensityUnits.PoundsPerCubicMeter: return super.internalMultiply(value, 0.45359237);
                case DensityUnits.PoundsPerCubicCentimeter: return super.internalMultiply(value, 0.45359237e6);
                case DensityUnits.PoundsPerCubicMillimeter: return super.internalMultiply(value, 0.45359237e9);
                case DensityUnits.SlugsPerCubicMeter: {
                    const v3 = super.internalMultiply(value, 0.45359237);
                    const v6 = super.internalDivide(9.80665, 0.3048);
                    return super.internalMultiply(v3, v6);
                }
                case DensityUnits.SlugsPerCubicCentimeter: {
                    const v3 = super.internalMultiply(value, 0.45359237e6);
                    const v6 = super.internalDivide(9.80665, 0.3048);
                    return super.internalMultiply(v3, v6);
                }
                case DensityUnits.SlugsPerCubicMillimeter: {
                    const v3 = super.internalMultiply(value, 0.45359237e9);
                    const v6 = super.internalDivide(9.80665, 0.3048);
                    return super.internalMultiply(v3, v6);
                }
                case DensityUnits.SlugsPerCubicInch: {
                    const v4 = super.internalMultiply(0.45359237, 9.80665);
                    const v7 = super.internalMultiply(0.3048, 1.6387064e-5);
                    const v8 = super.internalDivide(v4, v7);
                    return super.internalMultiply(value, v8);
                }
                case DensityUnits.KilogramsPerCubicMillimeter: {
                    const v3 = super.internalDivide(value, 1e-6);
                    return super.internalMultiply(v3, 1000);
                }
                case DensityUnits.KilogramsPerCubicCentimeter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1000);
                }
                case DensityUnits.KilogramsPerCubicMeter: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 1000);
                }
                case DensityUnits.MilligramsPerCubicMeter: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 0.001);
                }
                case DensityUnits.MicrogramsPerCubicMeter: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 0.000001);
                }
                case DensityUnits.KilopoundsPerCubicInch: {
                    const v4 = super.internalDivide(0.45359237, 1.6387064e-5);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000);
                }
                case DensityUnits.KilopoundsPerCubicFoot: {
                    const v4 = super.internalDivide(0.45359237, 0.028316846592);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000);
                }
                case DensityUnits.KilopoundsPerCubicYard: {
                    const v4 = super.internalDivide(0.45359237, 0.764554857984);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000);
                }
                case DensityUnits.FemtogramsPerLiter: {
                    const v3 = super.internalDivide(value, 1);
                    return super.internalMultiply(v3, 1e-15);
                }
                case DensityUnits.PicogramsPerLiter: {
                    const v3 = super.internalDivide(value, 1);
                    return super.internalMultiply(v3, 1e-12);
                }
                case DensityUnits.NanogramsPerLiter: {
                    const v3 = super.internalDivide(value, 1);
                    return super.internalMultiply(v3, 1e-9);
                }
                case DensityUnits.MicrogramsPerLiter: {
                    const v3 = super.internalDivide(value, 1);
                    return super.internalMultiply(v3, 0.000001);
                }
                case DensityUnits.MilligramsPerLiter: {
                    const v3 = super.internalDivide(value, 1);
                    return super.internalMultiply(v3, 0.001);
                }
                case DensityUnits.CentigramsPerLiter: {
                    const v3 = super.internalDivide(value, 1);
                    return super.internalMultiply(v3, 0.01);
                }
                case DensityUnits.DecigramsPerLiter: {
                    const v3 = super.internalDivide(value, 1);
                    return super.internalMultiply(v3, 0.1);
                }
                case DensityUnits.FemtogramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 1e-15);
                }
                case DensityUnits.PicogramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 1e-12);
                }
                case DensityUnits.NanogramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 1e-9);
                }
                case DensityUnits.MicrogramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 0.000001);
                }
                case DensityUnits.MilligramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 0.001);
                }
                case DensityUnits.CentigramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 0.01);
                }
                case DensityUnits.DecigramsPerDeciliter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 0.1);
                }
                case DensityUnits.FemtogramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1e-15);
                }
                case DensityUnits.PicogramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1e-12);
                }
                case DensityUnits.NanogramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1e-9);
                }
                case DensityUnits.MicrogramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.000001);
                }
                case DensityUnits.MilligramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.001);
                }
                case DensityUnits.CentigramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.01);
                }
                case DensityUnits.DecigramsPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.1);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case DensityUnits.GramsPerCubicMillimeter: return value / 1e-6;
            case DensityUnits.GramsPerCubicCentimeter: return value / 1e-3;
            case DensityUnits.GramsPerCubicMeter: return value / 1e3;
            case DensityUnits.PoundsPerCubicInch: return value * 0.45359237 / 1.6387064e-5;
            case DensityUnits.PoundsPerCubicFoot: return value * 0.45359237 / 0.028316846592;
            case DensityUnits.PoundsPerCubicYard: return value * 0.45359237 / 0.764554857984;
            case DensityUnits.TonnesPerCubicMillimeter: return value / 1e-12;
            case DensityUnits.TonnesPerCubicCentimeter: return value / 1e-9;
            case DensityUnits.TonnesPerCubicMeter: return value / 0.001;
            case DensityUnits.SlugsPerCubicFoot: return value * (0.45359237 * 9.80665) / (0.3048 * 0.028316846592);
            case DensityUnits.GramsPerLiter: return value / 1;
            case DensityUnits.GramsPerDeciliter: return value / 1e-1;
            case DensityUnits.GramsPerMilliliter: return value / 1e-3;
            case DensityUnits.PoundsPerUSGallon: return value * 0.45359237 / 0.003785411784;
            case DensityUnits.PoundsPerImperialGallon: return value * 0.45359237 / 0.00454609;
            case DensityUnits.KilogramsPerLiter: return value * 1e3;
            case DensityUnits.TonnesPerCubicFoot: return value * 1000 / 0.028316846592;
            case DensityUnits.TonnesPerCubicInch: return value * 1000 / 1.6387064e-5;
            case DensityUnits.GramsPerCubicFoot: return value * 0.001 / 0.028316846592;
            case DensityUnits.GramsPerCubicInch: return value * 0.001 / 1.6387064e-5;
            case DensityUnits.PoundsPerCubicMeter: return value * 0.45359237;
            case DensityUnits.PoundsPerCubicCentimeter: return value * 0.45359237e6;
            case DensityUnits.PoundsPerCubicMillimeter: return value * 0.45359237e9;
            case DensityUnits.SlugsPerCubicMeter: return value * 0.45359237 * 9.80665 / 0.3048;
            case DensityUnits.SlugsPerCubicCentimeter: return value * 0.45359237e6 * 9.80665 / 0.3048;
            case DensityUnits.SlugsPerCubicMillimeter: return value * 0.45359237e9 * 9.80665 / 0.3048;
            case DensityUnits.SlugsPerCubicInch: return value * (0.45359237 * 9.80665) / (0.3048 * 1.6387064e-5);
            case DensityUnits.KilogramsPerCubicMillimeter: return (value / 1e-6) * 1000;
            case DensityUnits.KilogramsPerCubicCentimeter: return (value / 1e-3) * 1000;
            case DensityUnits.KilogramsPerCubicMeter: return (value / 1e3) * 1000;
            case DensityUnits.MilligramsPerCubicMeter: return (value / 1e3) * 0.001;
            case DensityUnits.MicrogramsPerCubicMeter: return (value / 1e3) * 0.000001;
            case DensityUnits.KilopoundsPerCubicInch: return (value * 0.45359237 / 1.6387064e-5) * 1000;
            case DensityUnits.KilopoundsPerCubicFoot: return (value * 0.45359237 / 0.028316846592) * 1000;
            case DensityUnits.KilopoundsPerCubicYard: return (value * 0.45359237 / 0.764554857984) * 1000;
            case DensityUnits.FemtogramsPerLiter: return (value / 1) * 1e-15;
            case DensityUnits.PicogramsPerLiter: return (value / 1) * 1e-12;
            case DensityUnits.NanogramsPerLiter: return (value / 1) * 1e-9;
            case DensityUnits.MicrogramsPerLiter: return (value / 1) * 0.000001;
            case DensityUnits.MilligramsPerLiter: return (value / 1) * 0.001;
            case DensityUnits.CentigramsPerLiter: return (value / 1) * 0.01;
            case DensityUnits.DecigramsPerLiter: return (value / 1) * 0.1;
            case DensityUnits.FemtogramsPerDeciliter: return (value / 1e-1) * 1e-15;
            case DensityUnits.PicogramsPerDeciliter: return (value / 1e-1) * 1e-12;
            case DensityUnits.NanogramsPerDeciliter: return (value / 1e-1) * 1e-9;
            case DensityUnits.MicrogramsPerDeciliter: return (value / 1e-1) * 0.000001;
            case DensityUnits.MilligramsPerDeciliter: return (value / 1e-1) * 0.001;
            case DensityUnits.CentigramsPerDeciliter: return (value / 1e-1) * 0.01;
            case DensityUnits.DecigramsPerDeciliter: return (value / 1e-1) * 0.1;
            case DensityUnits.FemtogramsPerMilliliter: return (value / 1e-3) * 1e-15;
            case DensityUnits.PicogramsPerMilliliter: return (value / 1e-3) * 1e-12;
            case DensityUnits.NanogramsPerMilliliter: return (value / 1e-3) * 1e-9;
            case DensityUnits.MicrogramsPerMilliliter: return (value / 1e-3) * 0.000001;
            case DensityUnits.MilligramsPerMilliliter: return (value / 1e-3) * 0.001;
            case DensityUnits.CentigramsPerMilliliter: return (value / 1e-3) * 0.01;
            case DensityUnits.DecigramsPerMilliliter: return (value / 1e-3) * 0.1;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Density to string.
     * Note! the default format for Density is KilogramsPerCubicMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Density.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the Density.
     */
    public toString(unit: DensityUnits = DensityUnits.KilogramsPerCubicMeter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case DensityUnits.GramsPerCubicMillimeter:
                return super.truncateFractionDigits(this.GramsPerCubicMillimeter, options as ToStringOptions) + ` g/mm³`;
            case DensityUnits.GramsPerCubicCentimeter:
                return super.truncateFractionDigits(this.GramsPerCubicCentimeter, options as ToStringOptions) + ` g/cm³`;
            case DensityUnits.GramsPerCubicMeter:
                return super.truncateFractionDigits(this.GramsPerCubicMeter, options as ToStringOptions) + ` g/m³`;
            case DensityUnits.PoundsPerCubicInch:
                return super.truncateFractionDigits(this.PoundsPerCubicInch, options as ToStringOptions) + ` lb/in³`;
            case DensityUnits.PoundsPerCubicFoot:
                return super.truncateFractionDigits(this.PoundsPerCubicFoot, options as ToStringOptions) + ` lb/ft³`;
            case DensityUnits.PoundsPerCubicYard:
                return super.truncateFractionDigits(this.PoundsPerCubicYard, options as ToStringOptions) + ` lb/yd³`;
            case DensityUnits.TonnesPerCubicMillimeter:
                return super.truncateFractionDigits(this.TonnesPerCubicMillimeter, options as ToStringOptions) + ` t/mm³`;
            case DensityUnits.TonnesPerCubicCentimeter:
                return super.truncateFractionDigits(this.TonnesPerCubicCentimeter, options as ToStringOptions) + ` t/cm³`;
            case DensityUnits.TonnesPerCubicMeter:
                return super.truncateFractionDigits(this.TonnesPerCubicMeter, options as ToStringOptions) + ` t/m³`;
            case DensityUnits.SlugsPerCubicFoot:
                return super.truncateFractionDigits(this.SlugsPerCubicFoot, options as ToStringOptions) + ` slug/ft³`;
            case DensityUnits.GramsPerLiter:
                return super.truncateFractionDigits(this.GramsPerLiter, options as ToStringOptions) + ` g/l`;
            case DensityUnits.GramsPerDeciliter:
                return super.truncateFractionDigits(this.GramsPerDeciliter, options as ToStringOptions) + ` g/dl`;
            case DensityUnits.GramsPerMilliliter:
                return super.truncateFractionDigits(this.GramsPerMilliliter, options as ToStringOptions) + ` g/ml`;
            case DensityUnits.PoundsPerUSGallon:
                return super.truncateFractionDigits(this.PoundsPerUSGallon, options as ToStringOptions) + ` ppg (U.S.)`;
            case DensityUnits.PoundsPerImperialGallon:
                return super.truncateFractionDigits(this.PoundsPerImperialGallon, options as ToStringOptions) + ` ppg (imp.)`;
            case DensityUnits.KilogramsPerLiter:
                return super.truncateFractionDigits(this.KilogramsPerLiter, options as ToStringOptions) + ` kg/l`;
            case DensityUnits.TonnesPerCubicFoot:
                return super.truncateFractionDigits(this.TonnesPerCubicFoot, options as ToStringOptions) + ` t/ft³`;
            case DensityUnits.TonnesPerCubicInch:
                return super.truncateFractionDigits(this.TonnesPerCubicInch, options as ToStringOptions) + ` t/in³`;
            case DensityUnits.GramsPerCubicFoot:
                return super.truncateFractionDigits(this.GramsPerCubicFoot, options as ToStringOptions) + ` g/ft³`;
            case DensityUnits.GramsPerCubicInch:
                return super.truncateFractionDigits(this.GramsPerCubicInch, options as ToStringOptions) + ` g/in³`;
            case DensityUnits.PoundsPerCubicMeter:
                return super.truncateFractionDigits(this.PoundsPerCubicMeter, options as ToStringOptions) + ` lb/m³`;
            case DensityUnits.PoundsPerCubicCentimeter:
                return super.truncateFractionDigits(this.PoundsPerCubicCentimeter, options as ToStringOptions) + ` lb/cm³`;
            case DensityUnits.PoundsPerCubicMillimeter:
                return super.truncateFractionDigits(this.PoundsPerCubicMillimeter, options as ToStringOptions) + ` lb/mm³`;
            case DensityUnits.SlugsPerCubicMeter:
                return super.truncateFractionDigits(this.SlugsPerCubicMeter, options as ToStringOptions) + ` slug/m³`;
            case DensityUnits.SlugsPerCubicCentimeter:
                return super.truncateFractionDigits(this.SlugsPerCubicCentimeter, options as ToStringOptions) + ` slug/cm³`;
            case DensityUnits.SlugsPerCubicMillimeter:
                return super.truncateFractionDigits(this.SlugsPerCubicMillimeter, options as ToStringOptions) + ` slug/mm³`;
            case DensityUnits.SlugsPerCubicInch:
                return super.truncateFractionDigits(this.SlugsPerCubicInch, options as ToStringOptions) + ` slug/in³`;
            case DensityUnits.KilogramsPerCubicMillimeter:
                return super.truncateFractionDigits(this.KilogramsPerCubicMillimeter, options as ToStringOptions) + ` kg/mm³`;
            case DensityUnits.KilogramsPerCubicCentimeter:
                return super.truncateFractionDigits(this.KilogramsPerCubicCentimeter, options as ToStringOptions) + ` kg/cm³`;
            case DensityUnits.KilogramsPerCubicMeter:
                return super.truncateFractionDigits(this.KilogramsPerCubicMeter, options as ToStringOptions) + ` kg/m³`;
            case DensityUnits.MilligramsPerCubicMeter:
                return super.truncateFractionDigits(this.MilligramsPerCubicMeter, options as ToStringOptions) + ` mg/m³`;
            case DensityUnits.MicrogramsPerCubicMeter:
                return super.truncateFractionDigits(this.MicrogramsPerCubicMeter, options as ToStringOptions) + ` μg/m³`;
            case DensityUnits.KilopoundsPerCubicInch:
                return super.truncateFractionDigits(this.KilopoundsPerCubicInch, options as ToStringOptions) + ` klb/in³`;
            case DensityUnits.KilopoundsPerCubicFoot:
                return super.truncateFractionDigits(this.KilopoundsPerCubicFoot, options as ToStringOptions) + ` klb/ft³`;
            case DensityUnits.KilopoundsPerCubicYard:
                return super.truncateFractionDigits(this.KilopoundsPerCubicYard, options as ToStringOptions) + ` klb/yd³`;
            case DensityUnits.FemtogramsPerLiter:
                return super.truncateFractionDigits(this.FemtogramsPerLiter, options as ToStringOptions) + ` fg/l`;
            case DensityUnits.PicogramsPerLiter:
                return super.truncateFractionDigits(this.PicogramsPerLiter, options as ToStringOptions) + ` pg/l`;
            case DensityUnits.NanogramsPerLiter:
                return super.truncateFractionDigits(this.NanogramsPerLiter, options as ToStringOptions) + ` ng/l`;
            case DensityUnits.MicrogramsPerLiter:
                return super.truncateFractionDigits(this.MicrogramsPerLiter, options as ToStringOptions) + ` μg/l`;
            case DensityUnits.MilligramsPerLiter:
                return super.truncateFractionDigits(this.MilligramsPerLiter, options as ToStringOptions) + ` mg/l`;
            case DensityUnits.CentigramsPerLiter:
                return super.truncateFractionDigits(this.CentigramsPerLiter, options as ToStringOptions) + ` cg/l`;
            case DensityUnits.DecigramsPerLiter:
                return super.truncateFractionDigits(this.DecigramsPerLiter, options as ToStringOptions) + ` dg/l`;
            case DensityUnits.FemtogramsPerDeciliter:
                return super.truncateFractionDigits(this.FemtogramsPerDeciliter, options as ToStringOptions) + ` fg/dl`;
            case DensityUnits.PicogramsPerDeciliter:
                return super.truncateFractionDigits(this.PicogramsPerDeciliter, options as ToStringOptions) + ` pg/dl`;
            case DensityUnits.NanogramsPerDeciliter:
                return super.truncateFractionDigits(this.NanogramsPerDeciliter, options as ToStringOptions) + ` ng/dl`;
            case DensityUnits.MicrogramsPerDeciliter:
                return super.truncateFractionDigits(this.MicrogramsPerDeciliter, options as ToStringOptions) + ` μg/dl`;
            case DensityUnits.MilligramsPerDeciliter:
                return super.truncateFractionDigits(this.MilligramsPerDeciliter, options as ToStringOptions) + ` mg/dl`;
            case DensityUnits.CentigramsPerDeciliter:
                return super.truncateFractionDigits(this.CentigramsPerDeciliter, options as ToStringOptions) + ` cg/dl`;
            case DensityUnits.DecigramsPerDeciliter:
                return super.truncateFractionDigits(this.DecigramsPerDeciliter, options as ToStringOptions) + ` dg/dl`;
            case DensityUnits.FemtogramsPerMilliliter:
                return super.truncateFractionDigits(this.FemtogramsPerMilliliter, options as ToStringOptions) + ` fg/ml`;
            case DensityUnits.PicogramsPerMilliliter:
                return super.truncateFractionDigits(this.PicogramsPerMilliliter, options as ToStringOptions) + ` pg/ml`;
            case DensityUnits.NanogramsPerMilliliter:
                return super.truncateFractionDigits(this.NanogramsPerMilliliter, options as ToStringOptions) + ` ng/ml`;
            case DensityUnits.MicrogramsPerMilliliter:
                return super.truncateFractionDigits(this.MicrogramsPerMilliliter, options as ToStringOptions) + ` μg/ml`;
            case DensityUnits.MilligramsPerMilliliter:
                return super.truncateFractionDigits(this.MilligramsPerMilliliter, options as ToStringOptions) + ` mg/ml`;
            case DensityUnits.CentigramsPerMilliliter:
                return super.truncateFractionDigits(this.CentigramsPerMilliliter, options as ToStringOptions) + ` cg/ml`;
            case DensityUnits.DecigramsPerMilliliter:
                return super.truncateFractionDigits(this.DecigramsPerMilliliter, options as ToStringOptions) + ` dg/ml`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Density unit abbreviation.
     * Note! the default abbreviation for Density is KilogramsPerCubicMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Density.
     * @returns The abbreviation string of Density.
     */
    public getUnitAbbreviation(unitAbbreviation: DensityUnits = DensityUnits.KilogramsPerCubicMeter): string {

        switch (unitAbbreviation) {
            
            case DensityUnits.GramsPerCubicMillimeter:
                return `g/mm³`;
            case DensityUnits.GramsPerCubicCentimeter:
                return `g/cm³`;
            case DensityUnits.GramsPerCubicMeter:
                return `g/m³`;
            case DensityUnits.PoundsPerCubicInch:
                return `lb/in³`;
            case DensityUnits.PoundsPerCubicFoot:
                return `lb/ft³`;
            case DensityUnits.PoundsPerCubicYard:
                return `lb/yd³`;
            case DensityUnits.TonnesPerCubicMillimeter:
                return `t/mm³`;
            case DensityUnits.TonnesPerCubicCentimeter:
                return `t/cm³`;
            case DensityUnits.TonnesPerCubicMeter:
                return `t/m³`;
            case DensityUnits.SlugsPerCubicFoot:
                return `slug/ft³`;
            case DensityUnits.GramsPerLiter:
                return `g/l`;
            case DensityUnits.GramsPerDeciliter:
                return `g/dl`;
            case DensityUnits.GramsPerMilliliter:
                return `g/ml`;
            case DensityUnits.PoundsPerUSGallon:
                return `ppg (U.S.)`;
            case DensityUnits.PoundsPerImperialGallon:
                return `ppg (imp.)`;
            case DensityUnits.KilogramsPerLiter:
                return `kg/l`;
            case DensityUnits.TonnesPerCubicFoot:
                return `t/ft³`;
            case DensityUnits.TonnesPerCubicInch:
                return `t/in³`;
            case DensityUnits.GramsPerCubicFoot:
                return `g/ft³`;
            case DensityUnits.GramsPerCubicInch:
                return `g/in³`;
            case DensityUnits.PoundsPerCubicMeter:
                return `lb/m³`;
            case DensityUnits.PoundsPerCubicCentimeter:
                return `lb/cm³`;
            case DensityUnits.PoundsPerCubicMillimeter:
                return `lb/mm³`;
            case DensityUnits.SlugsPerCubicMeter:
                return `slug/m³`;
            case DensityUnits.SlugsPerCubicCentimeter:
                return `slug/cm³`;
            case DensityUnits.SlugsPerCubicMillimeter:
                return `slug/mm³`;
            case DensityUnits.SlugsPerCubicInch:
                return `slug/in³`;
            case DensityUnits.KilogramsPerCubicMillimeter:
                return `kg/mm³`;
            case DensityUnits.KilogramsPerCubicCentimeter:
                return `kg/cm³`;
            case DensityUnits.KilogramsPerCubicMeter:
                return `kg/m³`;
            case DensityUnits.MilligramsPerCubicMeter:
                return `mg/m³`;
            case DensityUnits.MicrogramsPerCubicMeter:
                return `μg/m³`;
            case DensityUnits.KilopoundsPerCubicInch:
                return `klb/in³`;
            case DensityUnits.KilopoundsPerCubicFoot:
                return `klb/ft³`;
            case DensityUnits.KilopoundsPerCubicYard:
                return `klb/yd³`;
            case DensityUnits.FemtogramsPerLiter:
                return `fg/l`;
            case DensityUnits.PicogramsPerLiter:
                return `pg/l`;
            case DensityUnits.NanogramsPerLiter:
                return `ng/l`;
            case DensityUnits.MicrogramsPerLiter:
                return `μg/l`;
            case DensityUnits.MilligramsPerLiter:
                return `mg/l`;
            case DensityUnits.CentigramsPerLiter:
                return `cg/l`;
            case DensityUnits.DecigramsPerLiter:
                return `dg/l`;
            case DensityUnits.FemtogramsPerDeciliter:
                return `fg/dl`;
            case DensityUnits.PicogramsPerDeciliter:
                return `pg/dl`;
            case DensityUnits.NanogramsPerDeciliter:
                return `ng/dl`;
            case DensityUnits.MicrogramsPerDeciliter:
                return `μg/dl`;
            case DensityUnits.MilligramsPerDeciliter:
                return `mg/dl`;
            case DensityUnits.CentigramsPerDeciliter:
                return `cg/dl`;
            case DensityUnits.DecigramsPerDeciliter:
                return `dg/dl`;
            case DensityUnits.FemtogramsPerMilliliter:
                return `fg/ml`;
            case DensityUnits.PicogramsPerMilliliter:
                return `pg/ml`;
            case DensityUnits.NanogramsPerMilliliter:
                return `ng/ml`;
            case DensityUnits.MicrogramsPerMilliliter:
                return `μg/ml`;
            case DensityUnits.MilligramsPerMilliliter:
                return `mg/ml`;
            case DensityUnits.CentigramsPerMilliliter:
                return `cg/ml`;
            case DensityUnits.DecigramsPerMilliliter:
                return `dg/ml`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Density are equals to the current Density.
     * @param density The other Density.
     * @returns True if the given Density are equal to the current Density.
     */
    public equals(density: Density): boolean {
        return super.internalEquals(this.value, density.BaseValue);
    }

    /**
     * Compare the given Density against the current Density.
     * @param density The other Density.
     * @returns 0 if they are equal, -1 if the current Density is less then other, 1 if the current Density is greater then other.
     */
    public compareTo(density: Density): number {
        return super.internalCompareTo(this.value, density.BaseValue);
    }

    /**
     * Add the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    public add(density: Density): Density {
        return new Density(super.internalAdd(this.value, density.BaseValue))
    }

    /**
     * Subtract the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    public subtract(density: Density): Density {
        return new Density(super.internalSubtract(this.value, density.BaseValue))
    }

    /**
     * Multiply the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    public multiply(density: Density): Density {
        return new Density(super.internalMultiply(this.value, density.BaseValue))
    }

    /**
     * Divide the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    public divide(density: Density): Density {
        return new Density(super.internalDivide(this.value, density.BaseValue))
    }

    /**
     * Modulo the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    public modulo(density: Density): Density {
        return new Density(super.internalModulo(this.value, density.BaseValue))
    }

    /**
     * Pow the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    public pow(density: Density): Density {
        return new Density(super.internalPow(this.value, density.BaseValue))
    }
}
