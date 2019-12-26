export enum DensityUnits {
    GramsPerCubicMillimeter,
    GramsPerCubicCentimeter,
    GramsPerCubicMeter,
    PoundsPerCubicInch,
    PoundsPerCubicFoot,
    TonnesPerCubicMillimeter,
    TonnesPerCubicCentimeter,
    TonnesPerCubicMeter,
    SlugsPerCubicFoot,
    GramsPerLiter,
    GramsPerDeciLiter,
    GramsPerMilliliter,
    PoundsPerUSGallon,
    PoundsPerImperialGallon,
    KilogramsPerLiter,
    KilogramPerCubicMillimeter,
    KilogramPerCubicCentimeter,
    KilogramPerCubicMeter,
    MicrogramPerCubicMeter,
    KilopoundPerCubicInch,
    KilopoundPerCubicFoot,
    PicogramPerLiter,
    NanogramPerLiter,
    MicrogramPerLiter,
    CentigramPerLiter,
    DecigramPerLiter,
    PicogramPerDeciliter,
    NanogramPerDeciliter,
    MicrogramPerDeciliter,
    CentigramPerDeciliter,
    DecigramPerDeciliter,
    PicogramPerMilliliter,
    NanogramPerMilliliter,
    MicrogramPerMilliliter,
    CentigramPerMilliliter,
    DecigramPerMilliliter
}

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
    private kilogrampercubicmillimeterLazy: number | null = null;
    private kilogrampercubiccentimeterLazy: number | null = null;
    private kilogrampercubicmeterLazy: number | null = null;
    private microgrampercubicmeterLazy: number | null = null;
    private kilopoundpercubicinchLazy: number | null = null;
    private kilopoundpercubicfootLazy: number | null = null;
    private picogramperliterLazy: number | null = null;
    private nanogramperliterLazy: number | null = null;
    private microgramperliterLazy: number | null = null;
    private centigramperliterLazy: number | null = null;
    private decigramperliterLazy: number | null = null;
    private picogramperdeciliterLazy: number | null = null;
    private nanogramperdeciliterLazy: number | null = null;
    private microgramperdeciliterLazy: number | null = null;
    private centigramperdeciliterLazy: number | null = null;
    private decigramperdeciliterLazy: number | null = null;
    private picogrampermilliliterLazy: number | null = null;
    private nanogrampermilliliterLazy: number | null = null;
    private microgrampermilliliterLazy: number | null = null;
    private centigrampermilliliterLazy: number | null = null;
    private decigrampermilliliterLazy: number | null = null;

    public constructor(value: number, fromUnit: DensityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerCubicMillimeter(): number {
        if(this.gramspercubicmillimeterLazy !== null){
            return this.gramspercubicmillimeterLazy;
        }
        return this.gramspercubicmillimeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicMillimeter);
    }

    public get GramsPerCubicCentimeter(): number {
        if(this.gramspercubiccentimeterLazy !== null){
            return this.gramspercubiccentimeterLazy;
        }
        return this.gramspercubiccentimeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicCentimeter);
    }

    public get GramsPerCubicMeter(): number {
        if(this.gramspercubicmeterLazy !== null){
            return this.gramspercubicmeterLazy;
        }
        return this.gramspercubicmeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicMeter);
    }

    public get PoundsPerCubicInch(): number {
        if(this.poundspercubicinchLazy !== null){
            return this.poundspercubicinchLazy;
        }
        return this.poundspercubicinchLazy = this.convertFromBase(DensityUnits.PoundsPerCubicInch);
    }

    public get PoundsPerCubicFoot(): number {
        if(this.poundspercubicfootLazy !== null){
            return this.poundspercubicfootLazy;
        }
        return this.poundspercubicfootLazy = this.convertFromBase(DensityUnits.PoundsPerCubicFoot);
    }

    public get TonnesPerCubicMillimeter(): number {
        if(this.tonnespercubicmillimeterLazy !== null){
            return this.tonnespercubicmillimeterLazy;
        }
        return this.tonnespercubicmillimeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicMillimeter);
    }

    public get TonnesPerCubicCentimeter(): number {
        if(this.tonnespercubiccentimeterLazy !== null){
            return this.tonnespercubiccentimeterLazy;
        }
        return this.tonnespercubiccentimeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicCentimeter);
    }

    public get TonnesPerCubicMeter(): number {
        if(this.tonnespercubicmeterLazy !== null){
            return this.tonnespercubicmeterLazy;
        }
        return this.tonnespercubicmeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicMeter);
    }

    public get SlugsPerCubicFoot(): number {
        if(this.slugspercubicfootLazy !== null){
            return this.slugspercubicfootLazy;
        }
        return this.slugspercubicfootLazy = this.convertFromBase(DensityUnits.SlugsPerCubicFoot);
    }

    public get GramsPerLiter(): number {
        if(this.gramsperliterLazy !== null){
            return this.gramsperliterLazy;
        }
        return this.gramsperliterLazy = this.convertFromBase(DensityUnits.GramsPerLiter);
    }

    public get GramsPerDeciLiter(): number {
        if(this.gramsperdeciliterLazy !== null){
            return this.gramsperdeciliterLazy;
        }
        return this.gramsperdeciliterLazy = this.convertFromBase(DensityUnits.GramsPerDeciLiter);
    }

    public get GramsPerMilliliter(): number {
        if(this.gramspermilliliterLazy !== null){
            return this.gramspermilliliterLazy;
        }
        return this.gramspermilliliterLazy = this.convertFromBase(DensityUnits.GramsPerMilliliter);
    }

    public get PoundsPerUSGallon(): number {
        if(this.poundsperusgallonLazy !== null){
            return this.poundsperusgallonLazy;
        }
        return this.poundsperusgallonLazy = this.convertFromBase(DensityUnits.PoundsPerUSGallon);
    }

    public get PoundsPerImperialGallon(): number {
        if(this.poundsperimperialgallonLazy !== null){
            return this.poundsperimperialgallonLazy;
        }
        return this.poundsperimperialgallonLazy = this.convertFromBase(DensityUnits.PoundsPerImperialGallon);
    }

    public get KilogramsPerLiter(): number {
        if(this.kilogramsperliterLazy !== null){
            return this.kilogramsperliterLazy;
        }
        return this.kilogramsperliterLazy = this.convertFromBase(DensityUnits.KilogramsPerLiter);
    }

    public get KilogramPerCubicMillimeter(): number {
        if(this.kilogrampercubicmillimeterLazy !== null){
            return this.kilogrampercubicmillimeterLazy;
        }
        return this.kilogrampercubicmillimeterLazy = this.convertFromBase(DensityUnits.KilogramPerCubicMillimeter);
    }

    public get KilogramPerCubicCentimeter(): number {
        if(this.kilogrampercubiccentimeterLazy !== null){
            return this.kilogrampercubiccentimeterLazy;
        }
        return this.kilogrampercubiccentimeterLazy = this.convertFromBase(DensityUnits.KilogramPerCubicCentimeter);
    }

    public get KilogramPerCubicMeter(): number {
        if(this.kilogrampercubicmeterLazy !== null){
            return this.kilogrampercubicmeterLazy;
        }
        return this.kilogrampercubicmeterLazy = this.convertFromBase(DensityUnits.KilogramPerCubicMeter);
    }

    public get MicrogramPerCubicMeter(): number {
        if(this.microgrampercubicmeterLazy !== null){
            return this.microgrampercubicmeterLazy;
        }
        return this.microgrampercubicmeterLazy = this.convertFromBase(DensityUnits.MicrogramPerCubicMeter);
    }

    public get KilopoundPerCubicInch(): number {
        if(this.kilopoundpercubicinchLazy !== null){
            return this.kilopoundpercubicinchLazy;
        }
        return this.kilopoundpercubicinchLazy = this.convertFromBase(DensityUnits.KilopoundPerCubicInch);
    }

    public get KilopoundPerCubicFoot(): number {
        if(this.kilopoundpercubicfootLazy !== null){
            return this.kilopoundpercubicfootLazy;
        }
        return this.kilopoundpercubicfootLazy = this.convertFromBase(DensityUnits.KilopoundPerCubicFoot);
    }

    public get PicogramPerLiter(): number {
        if(this.picogramperliterLazy !== null){
            return this.picogramperliterLazy;
        }
        return this.picogramperliterLazy = this.convertFromBase(DensityUnits.PicogramPerLiter);
    }

    public get NanogramPerLiter(): number {
        if(this.nanogramperliterLazy !== null){
            return this.nanogramperliterLazy;
        }
        return this.nanogramperliterLazy = this.convertFromBase(DensityUnits.NanogramPerLiter);
    }

    public get MicrogramPerLiter(): number {
        if(this.microgramperliterLazy !== null){
            return this.microgramperliterLazy;
        }
        return this.microgramperliterLazy = this.convertFromBase(DensityUnits.MicrogramPerLiter);
    }

    public get CentigramPerLiter(): number {
        if(this.centigramperliterLazy !== null){
            return this.centigramperliterLazy;
        }
        return this.centigramperliterLazy = this.convertFromBase(DensityUnits.CentigramPerLiter);
    }

    public get DecigramPerLiter(): number {
        if(this.decigramperliterLazy !== null){
            return this.decigramperliterLazy;
        }
        return this.decigramperliterLazy = this.convertFromBase(DensityUnits.DecigramPerLiter);
    }

    public get PicogramPerDeciliter(): number {
        if(this.picogramperdeciliterLazy !== null){
            return this.picogramperdeciliterLazy;
        }
        return this.picogramperdeciliterLazy = this.convertFromBase(DensityUnits.PicogramPerDeciliter);
    }

    public get NanogramPerDeciliter(): number {
        if(this.nanogramperdeciliterLazy !== null){
            return this.nanogramperdeciliterLazy;
        }
        return this.nanogramperdeciliterLazy = this.convertFromBase(DensityUnits.NanogramPerDeciliter);
    }

    public get MicrogramPerDeciliter(): number {
        if(this.microgramperdeciliterLazy !== null){
            return this.microgramperdeciliterLazy;
        }
        return this.microgramperdeciliterLazy = this.convertFromBase(DensityUnits.MicrogramPerDeciliter);
    }

    public get CentigramPerDeciliter(): number {
        if(this.centigramperdeciliterLazy !== null){
            return this.centigramperdeciliterLazy;
        }
        return this.centigramperdeciliterLazy = this.convertFromBase(DensityUnits.CentigramPerDeciliter);
    }

    public get DecigramPerDeciliter(): number {
        if(this.decigramperdeciliterLazy !== null){
            return this.decigramperdeciliterLazy;
        }
        return this.decigramperdeciliterLazy = this.convertFromBase(DensityUnits.DecigramPerDeciliter);
    }

    public get PicogramPerMilliliter(): number {
        if(this.picogrampermilliliterLazy !== null){
            return this.picogrampermilliliterLazy;
        }
        return this.picogrampermilliliterLazy = this.convertFromBase(DensityUnits.PicogramPerMilliliter);
    }

    public get NanogramPerMilliliter(): number {
        if(this.nanogrampermilliliterLazy !== null){
            return this.nanogrampermilliliterLazy;
        }
        return this.nanogrampermilliliterLazy = this.convertFromBase(DensityUnits.NanogramPerMilliliter);
    }

    public get MicrogramPerMilliliter(): number {
        if(this.microgrampermilliliterLazy !== null){
            return this.microgrampermilliliterLazy;
        }
        return this.microgrampermilliliterLazy = this.convertFromBase(DensityUnits.MicrogramPerMilliliter);
    }

    public get CentigramPerMilliliter(): number {
        if(this.centigrampermilliliterLazy !== null){
            return this.centigrampermilliliterLazy;
        }
        return this.centigrampermilliliterLazy = this.convertFromBase(DensityUnits.CentigramPerMilliliter);
    }

    public get DecigramPerMilliliter(): number {
        if(this.decigrampermilliliterLazy !== null){
            return this.decigrampermilliliterLazy;
        }
        return this.decigrampermilliliterLazy = this.convertFromBase(DensityUnits.DecigramPerMilliliter);
    }

    public static FromGramsPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicMillimeter);
    }

    public static FromGramsPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicCentimeter);
    }

    public static FromGramsPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerCubicMeter);
    }

    public static FromPoundsPerCubicInch(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicInch);
    }

    public static FromPoundsPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerCubicFoot);
    }

    public static FromTonnesPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicMillimeter);
    }

    public static FromTonnesPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicCentimeter);
    }

    public static FromTonnesPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.TonnesPerCubicMeter);
    }

    public static FromSlugsPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.SlugsPerCubicFoot);
    }

    public static FromGramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerLiter);
    }

    public static FromGramsPerDeciLiter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerDeciLiter);
    }

    public static FromGramsPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.GramsPerMilliliter);
    }

    public static FromPoundsPerUSGallon(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerUSGallon);
    }

    public static FromPoundsPerImperialGallon(value: number): Density {
        return new Density(value, DensityUnits.PoundsPerImperialGallon);
    }

    public static FromKilogramsPerLiter(value: number): Density {
        return new Density(value, DensityUnits.KilogramsPerLiter);
    }

    public static FromKilogramPerCubicMillimeter(value: number): Density {
        return new Density(value, DensityUnits.KilogramPerCubicMillimeter);
    }

    public static FromKilogramPerCubicCentimeter(value: number): Density {
        return new Density(value, DensityUnits.KilogramPerCubicCentimeter);
    }

    public static FromKilogramPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.KilogramPerCubicMeter);
    }

    public static FromMicrogramPerCubicMeter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramPerCubicMeter);
    }

    public static FromKilopoundPerCubicInch(value: number): Density {
        return new Density(value, DensityUnits.KilopoundPerCubicInch);
    }

    public static FromKilopoundPerCubicFoot(value: number): Density {
        return new Density(value, DensityUnits.KilopoundPerCubicFoot);
    }

    public static FromPicogramPerLiter(value: number): Density {
        return new Density(value, DensityUnits.PicogramPerLiter);
    }

    public static FromNanogramPerLiter(value: number): Density {
        return new Density(value, DensityUnits.NanogramPerLiter);
    }

    public static FromMicrogramPerLiter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramPerLiter);
    }

    public static FromCentigramPerLiter(value: number): Density {
        return new Density(value, DensityUnits.CentigramPerLiter);
    }

    public static FromDecigramPerLiter(value: number): Density {
        return new Density(value, DensityUnits.DecigramPerLiter);
    }

    public static FromPicogramPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.PicogramPerDeciliter);
    }

    public static FromNanogramPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.NanogramPerDeciliter);
    }

    public static FromMicrogramPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramPerDeciliter);
    }

    public static FromCentigramPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.CentigramPerDeciliter);
    }

    public static FromDecigramPerDeciliter(value: number): Density {
        return new Density(value, DensityUnits.DecigramPerDeciliter);
    }

    public static FromPicogramPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.PicogramPerMilliliter);
    }

    public static FromNanogramPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.NanogramPerMilliliter);
    }

    public static FromMicrogramPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.MicrogramPerMilliliter);
    }

    public static FromCentigramPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.CentigramPerMilliliter);
    }

    public static FromDecigramPerMilliliter(value: number): Density {
        return new Density(value, DensityUnits.DecigramPerMilliliter);
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
            case DensityUnits.KilogramPerCubicMillimeter:
                return (this.value*1e-6) / 1000;
            case DensityUnits.KilogramPerCubicCentimeter:
                return (this.value*1e-3) / 1000;
            case DensityUnits.KilogramPerCubicMeter:
                return (this.value*1e3) / 1000;
            case DensityUnits.MicrogramPerCubicMeter:
                return (this.value*1e3) / 0.000001;
            case DensityUnits.KilopoundPerCubicInch:
                return (this.value*3.6127298147753e-5) / 1000;
            case DensityUnits.KilopoundPerCubicFoot:
                return (this.value*0.062427961) / 1000;
            case DensityUnits.PicogramPerLiter:
                return (this.value*1) / 1e-12;
            case DensityUnits.NanogramPerLiter:
                return (this.value*1) / 1e-9;
            case DensityUnits.MicrogramPerLiter:
                return (this.value*1) / 0.000001;
            case DensityUnits.CentigramPerLiter:
                return (this.value*1) / 0.01;
            case DensityUnits.DecigramPerLiter:
                return (this.value*1) / 0.1;
            case DensityUnits.PicogramPerDeciliter:
                return (this.value*1e-1) / 1e-12;
            case DensityUnits.NanogramPerDeciliter:
                return (this.value*1e-1) / 1e-9;
            case DensityUnits.MicrogramPerDeciliter:
                return (this.value*1e-1) / 0.000001;
            case DensityUnits.CentigramPerDeciliter:
                return (this.value*1e-1) / 0.01;
            case DensityUnits.DecigramPerDeciliter:
                return (this.value*1e-1) / 0.1;
            case DensityUnits.PicogramPerMilliliter:
                return (this.value*1e-3) / 1e-12;
            case DensityUnits.NanogramPerMilliliter:
                return (this.value*1e-3) / 1e-9;
            case DensityUnits.MicrogramPerMilliliter:
                return (this.value*1e-3) / 0.000001;
            case DensityUnits.CentigramPerMilliliter:
                return (this.value*1e-3) / 0.01;
            case DensityUnits.DecigramPerMilliliter:
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
            case DensityUnits.KilogramPerCubicMillimeter:
                return (value/1e-6) * 1000;
            case DensityUnits.KilogramPerCubicCentimeter:
                return (value/1e-3) * 1000;
            case DensityUnits.KilogramPerCubicMeter:
                return (value/1e3) * 1000;
            case DensityUnits.MicrogramPerCubicMeter:
                return (value/1e3) * 0.000001;
            case DensityUnits.KilopoundPerCubicInch:
                return (value/3.6127298147753e-5) * 1000;
            case DensityUnits.KilopoundPerCubicFoot:
                return (value/0.062427961) * 1000;
            case DensityUnits.PicogramPerLiter:
                return (value/1) * 1e-12;
            case DensityUnits.NanogramPerLiter:
                return (value/1) * 1e-9;
            case DensityUnits.MicrogramPerLiter:
                return (value/1) * 0.000001;
            case DensityUnits.CentigramPerLiter:
                return (value/1) * 0.01;
            case DensityUnits.DecigramPerLiter:
                return (value/1) * 0.1;
            case DensityUnits.PicogramPerDeciliter:
                return (value/1e-1) * 1e-12;
            case DensityUnits.NanogramPerDeciliter:
                return (value/1e-1) * 1e-9;
            case DensityUnits.MicrogramPerDeciliter:
                return (value/1e-1) * 0.000001;
            case DensityUnits.CentigramPerDeciliter:
                return (value/1e-1) * 0.01;
            case DensityUnits.DecigramPerDeciliter:
                return (value/1e-1) * 0.1;
            case DensityUnits.PicogramPerMilliliter:
                return (value/1e-3) * 1e-12;
            case DensityUnits.NanogramPerMilliliter:
                return (value/1e-3) * 1e-9;
            case DensityUnits.MicrogramPerMilliliter:
                return (value/1e-3) * 0.000001;
            case DensityUnits.CentigramPerMilliliter:
                return (value/1e-3) * 0.01;
            case DensityUnits.DecigramPerMilliliter:
                return (value/1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: DensityUnits = DensityUnits.KilogramPerCubicMeter): string {

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
            case DensityUnits.KilogramPerCubicMillimeter:
                return this.KilogramPerCubicMillimeter + ` g/mm³`;
            case DensityUnits.KilogramPerCubicCentimeter:
                return this.KilogramPerCubicCentimeter + ` g/cm³`;
            case DensityUnits.KilogramPerCubicMeter:
                return this.KilogramPerCubicMeter + ` g/m³`;
            case DensityUnits.MicrogramPerCubicMeter:
                return this.MicrogramPerCubicMeter + ` g/m³`;
            case DensityUnits.KilopoundPerCubicInch:
                return this.KilopoundPerCubicInch + ` lb/in³`;
            case DensityUnits.KilopoundPerCubicFoot:
                return this.KilopoundPerCubicFoot + ` lb/ft³`;
            case DensityUnits.PicogramPerLiter:
                return this.PicogramPerLiter + ` g/L`;
            case DensityUnits.NanogramPerLiter:
                return this.NanogramPerLiter + ` g/L`;
            case DensityUnits.MicrogramPerLiter:
                return this.MicrogramPerLiter + ` g/L`;
            case DensityUnits.CentigramPerLiter:
                return this.CentigramPerLiter + ` g/L`;
            case DensityUnits.DecigramPerLiter:
                return this.DecigramPerLiter + ` g/L`;
            case DensityUnits.PicogramPerDeciliter:
                return this.PicogramPerDeciliter + ` g/dl`;
            case DensityUnits.NanogramPerDeciliter:
                return this.NanogramPerDeciliter + ` g/dl`;
            case DensityUnits.MicrogramPerDeciliter:
                return this.MicrogramPerDeciliter + ` g/dl`;
            case DensityUnits.CentigramPerDeciliter:
                return this.CentigramPerDeciliter + ` g/dl`;
            case DensityUnits.DecigramPerDeciliter:
                return this.DecigramPerDeciliter + ` g/dl`;
            case DensityUnits.PicogramPerMilliliter:
                return this.PicogramPerMilliliter + ` g/ml`;
            case DensityUnits.NanogramPerMilliliter:
                return this.NanogramPerMilliliter + ` g/ml`;
            case DensityUnits.MicrogramPerMilliliter:
                return this.MicrogramPerMilliliter + ` g/ml`;
            case DensityUnits.CentigramPerMilliliter:
                return this.CentigramPerMilliliter + ` g/ml`;
            case DensityUnits.DecigramPerMilliliter:
                return this.DecigramPerMilliliter + ` g/ml`;
        default:
            break;
        }
        return this.value.toString();
    }
}
