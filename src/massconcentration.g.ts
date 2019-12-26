export enum MassConcentrationUnits {
    GramsPerCubicMillimeter,
    GramsPerCubicCentimeter,
    GramsPerCubicMeter,
    GramsPerMilliliter,
    GramsPerDeciliter,
    GramsPerLiter,
    TonnesPerCubicMillimeter,
    TonnesPerCubicCentimeter,
    TonnesPerCubicMeter,
    PoundsPerCubicInch,
    PoundsPerCubicFoot,
    SlugsPerCubicFoot,
    PoundsPerUSGallon,
    PoundsPerImperialGallon,
    KilogramsPerCubicMillimeter,
    KilogramsPerCubicCentimeter,
    KilogramsPerCubicMeter,
    MicrogramsPerCubicMeter,
    PicogramsPerMilliliter,
    NanogramsPerMilliliter,
    MicrogramsPerMilliliter,
    CentigramsPerMilliliter,
    DecigramsPerMilliliter,
    PicogramsPerDeciliter,
    NanogramsPerDeciliter,
    MicrogramsPerDeciliter,
    CentigramsPerDeciliter,
    DecigramsPerDeciliter,
    PicogramsPerLiter,
    NanogramsPerLiter,
    MicrogramsPerLiter,
    CentigramsPerLiter,
    DecigramsPerLiter,
    KilogramsPerLiter,
    KilopoundsPerCubicInch,
    KilopoundsPerCubicFoot
}

export class MassConcentration {
    private value: number;
    private gramspercubicmillimeterLazy: number | null = null;
    private gramspercubiccentimeterLazy: number | null = null;
    private gramspercubicmeterLazy: number | null = null;
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
    private microgramspercubicmeterLazy: number | null = null;
    private picogramspermilliliterLazy: number | null = null;
    private nanogramspermilliliterLazy: number | null = null;
    private microgramspermilliliterLazy: number | null = null;
    private centigramspermilliliterLazy: number | null = null;
    private decigramspermilliliterLazy: number | null = null;
    private picogramsperdeciliterLazy: number | null = null;
    private nanogramsperdeciliterLazy: number | null = null;
    private microgramsperdeciliterLazy: number | null = null;
    private centigramsperdeciliterLazy: number | null = null;
    private decigramsperdeciliterLazy: number | null = null;
    private picogramsperliterLazy: number | null = null;
    private nanogramsperliterLazy: number | null = null;
    private microgramsperliterLazy: number | null = null;
    private centigramsperliterLazy: number | null = null;
    private decigramsperliterLazy: number | null = null;
    private kilogramsperliterLazy: number | null = null;
    private kilopoundspercubicinchLazy: number | null = null;
    private kilopoundspercubicfootLazy: number | null = null;

    public constructor(value: number, fromUnit: MassConcentrationUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerCubicMillimeter(): number {
        if(this.gramspercubicmillimeterLazy !== null){
            return this.gramspercubicmillimeterLazy;
        }
        return this.gramspercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicMillimeter);
    }

    public get GramsPerCubicCentimeter(): number {
        if(this.gramspercubiccentimeterLazy !== null){
            return this.gramspercubiccentimeterLazy;
        }
        return this.gramspercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicCentimeter);
    }

    public get GramsPerCubicMeter(): number {
        if(this.gramspercubicmeterLazy !== null){
            return this.gramspercubicmeterLazy;
        }
        return this.gramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicMeter);
    }

    public get GramsPerMilliliter(): number {
        if(this.gramspermilliliterLazy !== null){
            return this.gramspermilliliterLazy;
        }
        return this.gramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerMilliliter);
    }

    public get GramsPerDeciliter(): number {
        if(this.gramsperdeciliterLazy !== null){
            return this.gramsperdeciliterLazy;
        }
        return this.gramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerDeciliter);
    }

    public get GramsPerLiter(): number {
        if(this.gramsperliterLazy !== null){
            return this.gramsperliterLazy;
        }
        return this.gramsperliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerLiter);
    }

    public get TonnesPerCubicMillimeter(): number {
        if(this.tonnespercubicmillimeterLazy !== null){
            return this.tonnespercubicmillimeterLazy;
        }
        return this.tonnespercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicMillimeter);
    }

    public get TonnesPerCubicCentimeter(): number {
        if(this.tonnespercubiccentimeterLazy !== null){
            return this.tonnespercubiccentimeterLazy;
        }
        return this.tonnespercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicCentimeter);
    }

    public get TonnesPerCubicMeter(): number {
        if(this.tonnespercubicmeterLazy !== null){
            return this.tonnespercubicmeterLazy;
        }
        return this.tonnespercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicMeter);
    }

    public get PoundsPerCubicInch(): number {
        if(this.poundspercubicinchLazy !== null){
            return this.poundspercubicinchLazy;
        }
        return this.poundspercubicinchLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerCubicInch);
    }

    public get PoundsPerCubicFoot(): number {
        if(this.poundspercubicfootLazy !== null){
            return this.poundspercubicfootLazy;
        }
        return this.poundspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerCubicFoot);
    }

    public get SlugsPerCubicFoot(): number {
        if(this.slugspercubicfootLazy !== null){
            return this.slugspercubicfootLazy;
        }
        return this.slugspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.SlugsPerCubicFoot);
    }

    public get PoundsPerUSGallon(): number {
        if(this.poundsperusgallonLazy !== null){
            return this.poundsperusgallonLazy;
        }
        return this.poundsperusgallonLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerUSGallon);
    }

    public get PoundsPerImperialGallon(): number {
        if(this.poundsperimperialgallonLazy !== null){
            return this.poundsperimperialgallonLazy;
        }
        return this.poundsperimperialgallonLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerImperialGallon);
    }

    public get KilogramsPerCubicMillimeter(): number {
        if(this.kilogramspercubicmillimeterLazy !== null){
            return this.kilogramspercubicmillimeterLazy;
        }
        return this.kilogramspercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramsPerCubicMillimeter);
    }

    public get KilogramsPerCubicCentimeter(): number {
        if(this.kilogramspercubiccentimeterLazy !== null){
            return this.kilogramspercubiccentimeterLazy;
        }
        return this.kilogramspercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramsPerCubicCentimeter);
    }

    public get KilogramsPerCubicMeter(): number {
        if(this.kilogramspercubicmeterLazy !== null){
            return this.kilogramspercubicmeterLazy;
        }
        return this.kilogramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramsPerCubicMeter);
    }

    public get MicrogramsPerCubicMeter(): number {
        if(this.microgramspercubicmeterLazy !== null){
            return this.microgramspercubicmeterLazy;
        }
        return this.microgramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerCubicMeter);
    }

    public get PicogramsPerMilliliter(): number {
        if(this.picogramspermilliliterLazy !== null){
            return this.picogramspermilliliterLazy;
        }
        return this.picogramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramsPerMilliliter);
    }

    public get NanogramsPerMilliliter(): number {
        if(this.nanogramspermilliliterLazy !== null){
            return this.nanogramspermilliliterLazy;
        }
        return this.nanogramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramsPerMilliliter);
    }

    public get MicrogramsPerMilliliter(): number {
        if(this.microgramspermilliliterLazy !== null){
            return this.microgramspermilliliterLazy;
        }
        return this.microgramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerMilliliter);
    }

    public get CentigramsPerMilliliter(): number {
        if(this.centigramspermilliliterLazy !== null){
            return this.centigramspermilliliterLazy;
        }
        return this.centigramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramsPerMilliliter);
    }

    public get DecigramsPerMilliliter(): number {
        if(this.decigramspermilliliterLazy !== null){
            return this.decigramspermilliliterLazy;
        }
        return this.decigramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramsPerMilliliter);
    }

    public get PicogramsPerDeciliter(): number {
        if(this.picogramsperdeciliterLazy !== null){
            return this.picogramsperdeciliterLazy;
        }
        return this.picogramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramsPerDeciliter);
    }

    public get NanogramsPerDeciliter(): number {
        if(this.nanogramsperdeciliterLazy !== null){
            return this.nanogramsperdeciliterLazy;
        }
        return this.nanogramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramsPerDeciliter);
    }

    public get MicrogramsPerDeciliter(): number {
        if(this.microgramsperdeciliterLazy !== null){
            return this.microgramsperdeciliterLazy;
        }
        return this.microgramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerDeciliter);
    }

    public get CentigramsPerDeciliter(): number {
        if(this.centigramsperdeciliterLazy !== null){
            return this.centigramsperdeciliterLazy;
        }
        return this.centigramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramsPerDeciliter);
    }

    public get DecigramsPerDeciliter(): number {
        if(this.decigramsperdeciliterLazy !== null){
            return this.decigramsperdeciliterLazy;
        }
        return this.decigramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramsPerDeciliter);
    }

    public get PicogramsPerLiter(): number {
        if(this.picogramsperliterLazy !== null){
            return this.picogramsperliterLazy;
        }
        return this.picogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramsPerLiter);
    }

    public get NanogramsPerLiter(): number {
        if(this.nanogramsperliterLazy !== null){
            return this.nanogramsperliterLazy;
        }
        return this.nanogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramsPerLiter);
    }

    public get MicrogramsPerLiter(): number {
        if(this.microgramsperliterLazy !== null){
            return this.microgramsperliterLazy;
        }
        return this.microgramsperliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerLiter);
    }

    public get CentigramsPerLiter(): number {
        if(this.centigramsperliterLazy !== null){
            return this.centigramsperliterLazy;
        }
        return this.centigramsperliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramsPerLiter);
    }

    public get DecigramsPerLiter(): number {
        if(this.decigramsperliterLazy !== null){
            return this.decigramsperliterLazy;
        }
        return this.decigramsperliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramsPerLiter);
    }

    public get KilogramsPerLiter(): number {
        if(this.kilogramsperliterLazy !== null){
            return this.kilogramsperliterLazy;
        }
        return this.kilogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.KilogramsPerLiter);
    }

    public get KilopoundsPerCubicInch(): number {
        if(this.kilopoundspercubicinchLazy !== null){
            return this.kilopoundspercubicinchLazy;
        }
        return this.kilopoundspercubicinchLazy = this.convertFromBase(MassConcentrationUnits.KilopoundsPerCubicInch);
    }

    public get KilopoundsPerCubicFoot(): number {
        if(this.kilopoundspercubicfootLazy !== null){
            return this.kilopoundspercubicfootLazy;
        }
        return this.kilopoundspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.KilopoundsPerCubicFoot);
    }

    public static FromGramsPerCubicMillimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicMillimeter);
    }

    public static FromGramsPerCubicCentimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicCentimeter);
    }

    public static FromGramsPerCubicMeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicMeter);
    }

    public static FromGramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerMilliliter);
    }

    public static FromGramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerDeciliter);
    }

    public static FromGramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerLiter);
    }

    public static FromTonnesPerCubicMillimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicMillimeter);
    }

    public static FromTonnesPerCubicCentimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicCentimeter);
    }

    public static FromTonnesPerCubicMeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicMeter);
    }

    public static FromPoundsPerCubicInch(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerCubicInch);
    }

    public static FromPoundsPerCubicFoot(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerCubicFoot);
    }

    public static FromSlugsPerCubicFoot(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.SlugsPerCubicFoot);
    }

    public static FromPoundsPerUSGallon(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerUSGallon);
    }

    public static FromPoundsPerImperialGallon(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerImperialGallon);
    }

    public static FromKilogramsPerCubicMillimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilogramsPerCubicMillimeter);
    }

    public static FromKilogramsPerCubicCentimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilogramsPerCubicCentimeter);
    }

    public static FromKilogramsPerCubicMeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilogramsPerCubicMeter);
    }

    public static FromMicrogramsPerCubicMeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerCubicMeter);
    }

    public static FromPicogramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PicogramsPerMilliliter);
    }

    public static FromNanogramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.NanogramsPerMilliliter);
    }

    public static FromMicrogramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerMilliliter);
    }

    public static FromCentigramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.CentigramsPerMilliliter);
    }

    public static FromDecigramsPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.DecigramsPerMilliliter);
    }

    public static FromPicogramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PicogramsPerDeciliter);
    }

    public static FromNanogramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.NanogramsPerDeciliter);
    }

    public static FromMicrogramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerDeciliter);
    }

    public static FromCentigramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.CentigramsPerDeciliter);
    }

    public static FromDecigramsPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.DecigramsPerDeciliter);
    }

    public static FromPicogramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PicogramsPerLiter);
    }

    public static FromNanogramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.NanogramsPerLiter);
    }

    public static FromMicrogramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerLiter);
    }

    public static FromCentigramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.CentigramsPerLiter);
    }

    public static FromDecigramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.DecigramsPerLiter);
    }

    public static FromKilogramsPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilogramsPerLiter);
    }

    public static FromKilopoundsPerCubicInch(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilopoundsPerCubicInch);
    }

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
            case MassConcentrationUnits.MicrogramsPerCubicMeter:
                return (this.value*1e3) / 0.000001;
            case MassConcentrationUnits.PicogramsPerMilliliter:
                return (this.value*1e-3) / 1e-12;
            case MassConcentrationUnits.NanogramsPerMilliliter:
                return (this.value*1e-3) / 1e-9;
            case MassConcentrationUnits.MicrogramsPerMilliliter:
                return (this.value*1e-3) / 0.000001;
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
            case MassConcentrationUnits.MicrogramsPerCubicMeter:
                return (value/1e3) * 0.000001;
            case MassConcentrationUnits.PicogramsPerMilliliter:
                return (value/1e-3) * 1e-12;
            case MassConcentrationUnits.NanogramsPerMilliliter:
                return (value/1e-3) * 1e-9;
            case MassConcentrationUnits.MicrogramsPerMilliliter:
                return (value/1e-3) * 0.000001;
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

    public toString(toUnit: MassConcentrationUnits = MassConcentrationUnits.KilogramsPerCubicMeter): string {

        switch (toUnit) {
            
            case MassConcentrationUnits.GramsPerCubicMillimeter:
                return this.GramsPerCubicMillimeter + ` g/mm³`;
            case MassConcentrationUnits.GramsPerCubicCentimeter:
                return this.GramsPerCubicCentimeter + ` g/cm³`;
            case MassConcentrationUnits.GramsPerCubicMeter:
                return this.GramsPerCubicMeter + ` g/m³`;
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
                return this.KilogramsPerCubicMillimeter + ` g/mm³`;
            case MassConcentrationUnits.KilogramsPerCubicCentimeter:
                return this.KilogramsPerCubicCentimeter + ` g/cm³`;
            case MassConcentrationUnits.KilogramsPerCubicMeter:
                return this.KilogramsPerCubicMeter + ` g/m³`;
            case MassConcentrationUnits.MicrogramsPerCubicMeter:
                return this.MicrogramsPerCubicMeter + ` g/m³`;
            case MassConcentrationUnits.PicogramsPerMilliliter:
                return this.PicogramsPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.NanogramsPerMilliliter:
                return this.NanogramsPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.MicrogramsPerMilliliter:
                return this.MicrogramsPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.CentigramsPerMilliliter:
                return this.CentigramsPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.DecigramsPerMilliliter:
                return this.DecigramsPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.PicogramsPerDeciliter:
                return this.PicogramsPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.NanogramsPerDeciliter:
                return this.NanogramsPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.MicrogramsPerDeciliter:
                return this.MicrogramsPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.CentigramsPerDeciliter:
                return this.CentigramsPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.DecigramsPerDeciliter:
                return this.DecigramsPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.PicogramsPerLiter:
                return this.PicogramsPerLiter + ` g/L`;
            case MassConcentrationUnits.NanogramsPerLiter:
                return this.NanogramsPerLiter + ` g/L`;
            case MassConcentrationUnits.MicrogramsPerLiter:
                return this.MicrogramsPerLiter + ` g/L`;
            case MassConcentrationUnits.CentigramsPerLiter:
                return this.CentigramsPerLiter + ` g/L`;
            case MassConcentrationUnits.DecigramsPerLiter:
                return this.DecigramsPerLiter + ` g/L`;
            case MassConcentrationUnits.KilogramsPerLiter:
                return this.KilogramsPerLiter + ` g/L`;
            case MassConcentrationUnits.KilopoundsPerCubicInch:
                return this.KilopoundsPerCubicInch + ` lb/in³`;
            case MassConcentrationUnits.KilopoundsPerCubicFoot:
                return this.KilopoundsPerCubicFoot + ` lb/ft³`;
        default:
            break;
        }
        return this.value.toString();
    }
}
