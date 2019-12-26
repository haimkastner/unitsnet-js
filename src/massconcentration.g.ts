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
    KilogramPerCubicMillimeter,
    KilogramPerCubicCentimeter,
    KilogramPerCubicMeter,
    MicrogramPerCubicMeter,
    PicogramPerMilliliter,
    NanogramPerMilliliter,
    MicrogramPerMilliliter,
    CentigramPerMilliliter,
    DecigramPerMilliliter,
    PicogramPerDeciliter,
    NanogramPerDeciliter,
    MicrogramPerDeciliter,
    CentigramPerDeciliter,
    DecigramPerDeciliter,
    PicogramPerLiter,
    NanogramPerLiter,
    MicrogramPerLiter,
    CentigramPerLiter,
    DecigramPerLiter,
    KilogramPerLiter,
    KilopoundPerCubicInch,
    KilopoundPerCubicFoot
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
    private kilogrampercubicmillimeterLazy: number | null = null;
    private kilogrampercubiccentimeterLazy: number | null = null;
    private kilogrampercubicmeterLazy: number | null = null;
    private microgrampercubicmeterLazy: number | null = null;
    private picogrampermilliliterLazy: number | null = null;
    private nanogrampermilliliterLazy: number | null = null;
    private microgrampermilliliterLazy: number | null = null;
    private centigrampermilliliterLazy: number | null = null;
    private decigrampermilliliterLazy: number | null = null;
    private picogramperdeciliterLazy: number | null = null;
    private nanogramperdeciliterLazy: number | null = null;
    private microgramperdeciliterLazy: number | null = null;
    private centigramperdeciliterLazy: number | null = null;
    private decigramperdeciliterLazy: number | null = null;
    private picogramperliterLazy: number | null = null;
    private nanogramperliterLazy: number | null = null;
    private microgramperliterLazy: number | null = null;
    private centigramperliterLazy: number | null = null;
    private decigramperliterLazy: number | null = null;
    private kilogramperliterLazy: number | null = null;
    private kilopoundpercubicinchLazy: number | null = null;
    private kilopoundpercubicfootLazy: number | null = null;

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

    public get KilogramPerCubicMillimeter(): number {
        if(this.kilogrampercubicmillimeterLazy !== null){
            return this.kilogrampercubicmillimeterLazy;
        }
        return this.kilogrampercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramPerCubicMillimeter);
    }

    public get KilogramPerCubicCentimeter(): number {
        if(this.kilogrampercubiccentimeterLazy !== null){
            return this.kilogrampercubiccentimeterLazy;
        }
        return this.kilogrampercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramPerCubicCentimeter);
    }

    public get KilogramPerCubicMeter(): number {
        if(this.kilogrampercubicmeterLazy !== null){
            return this.kilogrampercubicmeterLazy;
        }
        return this.kilogrampercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramPerCubicMeter);
    }

    public get MicrogramPerCubicMeter(): number {
        if(this.microgrampercubicmeterLazy !== null){
            return this.microgrampercubicmeterLazy;
        }
        return this.microgrampercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramPerCubicMeter);
    }

    public get PicogramPerMilliliter(): number {
        if(this.picogrampermilliliterLazy !== null){
            return this.picogrampermilliliterLazy;
        }
        return this.picogrampermilliliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramPerMilliliter);
    }

    public get NanogramPerMilliliter(): number {
        if(this.nanogrampermilliliterLazy !== null){
            return this.nanogrampermilliliterLazy;
        }
        return this.nanogrampermilliliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramPerMilliliter);
    }

    public get MicrogramPerMilliliter(): number {
        if(this.microgrampermilliliterLazy !== null){
            return this.microgrampermilliliterLazy;
        }
        return this.microgrampermilliliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramPerMilliliter);
    }

    public get CentigramPerMilliliter(): number {
        if(this.centigrampermilliliterLazy !== null){
            return this.centigrampermilliliterLazy;
        }
        return this.centigrampermilliliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramPerMilliliter);
    }

    public get DecigramPerMilliliter(): number {
        if(this.decigrampermilliliterLazy !== null){
            return this.decigrampermilliliterLazy;
        }
        return this.decigrampermilliliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramPerMilliliter);
    }

    public get PicogramPerDeciliter(): number {
        if(this.picogramperdeciliterLazy !== null){
            return this.picogramperdeciliterLazy;
        }
        return this.picogramperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramPerDeciliter);
    }

    public get NanogramPerDeciliter(): number {
        if(this.nanogramperdeciliterLazy !== null){
            return this.nanogramperdeciliterLazy;
        }
        return this.nanogramperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramPerDeciliter);
    }

    public get MicrogramPerDeciliter(): number {
        if(this.microgramperdeciliterLazy !== null){
            return this.microgramperdeciliterLazy;
        }
        return this.microgramperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramPerDeciliter);
    }

    public get CentigramPerDeciliter(): number {
        if(this.centigramperdeciliterLazy !== null){
            return this.centigramperdeciliterLazy;
        }
        return this.centigramperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramPerDeciliter);
    }

    public get DecigramPerDeciliter(): number {
        if(this.decigramperdeciliterLazy !== null){
            return this.decigramperdeciliterLazy;
        }
        return this.decigramperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramPerDeciliter);
    }

    public get PicogramPerLiter(): number {
        if(this.picogramperliterLazy !== null){
            return this.picogramperliterLazy;
        }
        return this.picogramperliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramPerLiter);
    }

    public get NanogramPerLiter(): number {
        if(this.nanogramperliterLazy !== null){
            return this.nanogramperliterLazy;
        }
        return this.nanogramperliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramPerLiter);
    }

    public get MicrogramPerLiter(): number {
        if(this.microgramperliterLazy !== null){
            return this.microgramperliterLazy;
        }
        return this.microgramperliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramPerLiter);
    }

    public get CentigramPerLiter(): number {
        if(this.centigramperliterLazy !== null){
            return this.centigramperliterLazy;
        }
        return this.centigramperliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramPerLiter);
    }

    public get DecigramPerLiter(): number {
        if(this.decigramperliterLazy !== null){
            return this.decigramperliterLazy;
        }
        return this.decigramperliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramPerLiter);
    }

    public get KilogramPerLiter(): number {
        if(this.kilogramperliterLazy !== null){
            return this.kilogramperliterLazy;
        }
        return this.kilogramperliterLazy = this.convertFromBase(MassConcentrationUnits.KilogramPerLiter);
    }

    public get KilopoundPerCubicInch(): number {
        if(this.kilopoundpercubicinchLazy !== null){
            return this.kilopoundpercubicinchLazy;
        }
        return this.kilopoundpercubicinchLazy = this.convertFromBase(MassConcentrationUnits.KilopoundPerCubicInch);
    }

    public get KilopoundPerCubicFoot(): number {
        if(this.kilopoundpercubicfootLazy !== null){
            return this.kilopoundpercubicfootLazy;
        }
        return this.kilopoundpercubicfootLazy = this.convertFromBase(MassConcentrationUnits.KilopoundPerCubicFoot);
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

    public static FromKilogramPerCubicMillimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilogramPerCubicMillimeter);
    }

    public static FromKilogramPerCubicCentimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilogramPerCubicCentimeter);
    }

    public static FromKilogramPerCubicMeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilogramPerCubicMeter);
    }

    public static FromMicrogramPerCubicMeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramPerCubicMeter);
    }

    public static FromPicogramPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PicogramPerMilliliter);
    }

    public static FromNanogramPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.NanogramPerMilliliter);
    }

    public static FromMicrogramPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramPerMilliliter);
    }

    public static FromCentigramPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.CentigramPerMilliliter);
    }

    public static FromDecigramPerMilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.DecigramPerMilliliter);
    }

    public static FromPicogramPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PicogramPerDeciliter);
    }

    public static FromNanogramPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.NanogramPerDeciliter);
    }

    public static FromMicrogramPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramPerDeciliter);
    }

    public static FromCentigramPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.CentigramPerDeciliter);
    }

    public static FromDecigramPerDeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.DecigramPerDeciliter);
    }

    public static FromPicogramPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.PicogramPerLiter);
    }

    public static FromNanogramPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.NanogramPerLiter);
    }

    public static FromMicrogramPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramPerLiter);
    }

    public static FromCentigramPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.CentigramPerLiter);
    }

    public static FromDecigramPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.DecigramPerLiter);
    }

    public static FromKilogramPerLiter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilogramPerLiter);
    }

    public static FromKilopoundPerCubicInch(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilopoundPerCubicInch);
    }

    public static FromKilopoundPerCubicFoot(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.KilopoundPerCubicFoot);
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
            case MassConcentrationUnits.KilogramPerCubicMillimeter:
                return (this.value*1e-6) / 1000;
            case MassConcentrationUnits.KilogramPerCubicCentimeter:
                return (this.value*1e-3) / 1000;
            case MassConcentrationUnits.KilogramPerCubicMeter:
                return (this.value*1e3) / 1000;
            case MassConcentrationUnits.MicrogramPerCubicMeter:
                return (this.value*1e3) / 0.000001;
            case MassConcentrationUnits.PicogramPerMilliliter:
                return (this.value*1e-3) / 1e-12;
            case MassConcentrationUnits.NanogramPerMilliliter:
                return (this.value*1e-3) / 1e-9;
            case MassConcentrationUnits.MicrogramPerMilliliter:
                return (this.value*1e-3) / 0.000001;
            case MassConcentrationUnits.CentigramPerMilliliter:
                return (this.value*1e-3) / 0.01;
            case MassConcentrationUnits.DecigramPerMilliliter:
                return (this.value*1e-3) / 0.1;
            case MassConcentrationUnits.PicogramPerDeciliter:
                return (this.value*1e-1) / 1e-12;
            case MassConcentrationUnits.NanogramPerDeciliter:
                return (this.value*1e-1) / 1e-9;
            case MassConcentrationUnits.MicrogramPerDeciliter:
                return (this.value*1e-1) / 0.000001;
            case MassConcentrationUnits.CentigramPerDeciliter:
                return (this.value*1e-1) / 0.01;
            case MassConcentrationUnits.DecigramPerDeciliter:
                return (this.value*1e-1) / 0.1;
            case MassConcentrationUnits.PicogramPerLiter:
                return (this.value) / 1e-12;
            case MassConcentrationUnits.NanogramPerLiter:
                return (this.value) / 1e-9;
            case MassConcentrationUnits.MicrogramPerLiter:
                return (this.value) / 0.000001;
            case MassConcentrationUnits.CentigramPerLiter:
                return (this.value) / 0.01;
            case MassConcentrationUnits.DecigramPerLiter:
                return (this.value) / 0.1;
            case MassConcentrationUnits.KilogramPerLiter:
                return (this.value) / 1000;
            case MassConcentrationUnits.KilopoundPerCubicInch:
                return (this.value*3.6127298147753e-5) / 1000;
            case MassConcentrationUnits.KilopoundPerCubicFoot:
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
            case MassConcentrationUnits.KilogramPerCubicMillimeter:
                return (value/1e-6) * 1000;
            case MassConcentrationUnits.KilogramPerCubicCentimeter:
                return (value/1e-3) * 1000;
            case MassConcentrationUnits.KilogramPerCubicMeter:
                return (value/1e3) * 1000;
            case MassConcentrationUnits.MicrogramPerCubicMeter:
                return (value/1e3) * 0.000001;
            case MassConcentrationUnits.PicogramPerMilliliter:
                return (value/1e-3) * 1e-12;
            case MassConcentrationUnits.NanogramPerMilliliter:
                return (value/1e-3) * 1e-9;
            case MassConcentrationUnits.MicrogramPerMilliliter:
                return (value/1e-3) * 0.000001;
            case MassConcentrationUnits.CentigramPerMilliliter:
                return (value/1e-3) * 0.01;
            case MassConcentrationUnits.DecigramPerMilliliter:
                return (value/1e-3) * 0.1;
            case MassConcentrationUnits.PicogramPerDeciliter:
                return (value/1e-1) * 1e-12;
            case MassConcentrationUnits.NanogramPerDeciliter:
                return (value/1e-1) * 1e-9;
            case MassConcentrationUnits.MicrogramPerDeciliter:
                return (value/1e-1) * 0.000001;
            case MassConcentrationUnits.CentigramPerDeciliter:
                return (value/1e-1) * 0.01;
            case MassConcentrationUnits.DecigramPerDeciliter:
                return (value/1e-1) * 0.1;
            case MassConcentrationUnits.PicogramPerLiter:
                return (value) * 1e-12;
            case MassConcentrationUnits.NanogramPerLiter:
                return (value) * 1e-9;
            case MassConcentrationUnits.MicrogramPerLiter:
                return (value) * 0.000001;
            case MassConcentrationUnits.CentigramPerLiter:
                return (value) * 0.01;
            case MassConcentrationUnits.DecigramPerLiter:
                return (value) * 0.1;
            case MassConcentrationUnits.KilogramPerLiter:
                return (value) * 1000;
            case MassConcentrationUnits.KilopoundPerCubicInch:
                return (value/3.6127298147753e-5) * 1000;
            case MassConcentrationUnits.KilopoundPerCubicFoot:
                return (value/0.062427961) * 1000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MassConcentrationUnits = MassConcentrationUnits.KilogramPerCubicMeter): string {

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
            case MassConcentrationUnits.KilogramPerCubicMillimeter:
                return this.KilogramPerCubicMillimeter + ` g/mm³`;
            case MassConcentrationUnits.KilogramPerCubicCentimeter:
                return this.KilogramPerCubicCentimeter + ` g/cm³`;
            case MassConcentrationUnits.KilogramPerCubicMeter:
                return this.KilogramPerCubicMeter + ` g/m³`;
            case MassConcentrationUnits.MicrogramPerCubicMeter:
                return this.MicrogramPerCubicMeter + ` g/m³`;
            case MassConcentrationUnits.PicogramPerMilliliter:
                return this.PicogramPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.NanogramPerMilliliter:
                return this.NanogramPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.MicrogramPerMilliliter:
                return this.MicrogramPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.CentigramPerMilliliter:
                return this.CentigramPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.DecigramPerMilliliter:
                return this.DecigramPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.PicogramPerDeciliter:
                return this.PicogramPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.NanogramPerDeciliter:
                return this.NanogramPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.MicrogramPerDeciliter:
                return this.MicrogramPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.CentigramPerDeciliter:
                return this.CentigramPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.DecigramPerDeciliter:
                return this.DecigramPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.PicogramPerLiter:
                return this.PicogramPerLiter + ` g/L`;
            case MassConcentrationUnits.NanogramPerLiter:
                return this.NanogramPerLiter + ` g/L`;
            case MassConcentrationUnits.MicrogramPerLiter:
                return this.MicrogramPerLiter + ` g/L`;
            case MassConcentrationUnits.CentigramPerLiter:
                return this.CentigramPerLiter + ` g/L`;
            case MassConcentrationUnits.DecigramPerLiter:
                return this.DecigramPerLiter + ` g/L`;
            case MassConcentrationUnits.KilogramPerLiter:
                return this.KilogramPerLiter + ` g/L`;
            case MassConcentrationUnits.KilopoundPerCubicInch:
                return this.KilopoundPerCubicInch + ` lb/in³`;
            case MassConcentrationUnits.KilopoundPerCubicFoot:
                return this.KilopoundPerCubicFoot + ` lb/ft³`;
        default:
            break;
        }
        return this.value.toString();
    }
}
