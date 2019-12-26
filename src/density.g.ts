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
    Kilogramspercubicmillimeter,
    Kilogramspercubiccentimeter,
    Kilogramspercubicmeter,
    Microgramspercubicmeter,
    Kilopoundspercubicinch,
    Kilopoundspercubicfoot,
    Picogramsperliter,
    Nanogramsperliter,
    Microgramsperliter,
    Centigramsperliter,
    Decigramsperliter,
    Picogramsperdeciliter,
    Nanogramsperdeciliter,
    Microgramsperdeciliter,
    Centigramsperdeciliter,
    Decigramsperdeciliter,
    Picogramspermilliliter,
    Nanogramspermilliliter,
    Microgramspermilliliter,
    Centigramspermilliliter,
    Decigramspermilliliter
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

    public get Kilogramspercubicmillimeter(): number {
        if(this.kilogramspercubicmillimeterLazy !== null){
            return this.kilogramspercubicmillimeterLazy;
        }
        return this.kilogramspercubicmillimeterLazy = this.convertFromBase(DensityUnits.Kilogramspercubicmillimeter);
    }

    public get Kilogramspercubiccentimeter(): number {
        if(this.kilogramspercubiccentimeterLazy !== null){
            return this.kilogramspercubiccentimeterLazy;
        }
        return this.kilogramspercubiccentimeterLazy = this.convertFromBase(DensityUnits.Kilogramspercubiccentimeter);
    }

    public get Kilogramspercubicmeter(): number {
        if(this.kilogramspercubicmeterLazy !== null){
            return this.kilogramspercubicmeterLazy;
        }
        return this.kilogramspercubicmeterLazy = this.convertFromBase(DensityUnits.Kilogramspercubicmeter);
    }

    public get Microgramspercubicmeter(): number {
        if(this.microgramspercubicmeterLazy !== null){
            return this.microgramspercubicmeterLazy;
        }
        return this.microgramspercubicmeterLazy = this.convertFromBase(DensityUnits.Microgramspercubicmeter);
    }

    public get Kilopoundspercubicinch(): number {
        if(this.kilopoundspercubicinchLazy !== null){
            return this.kilopoundspercubicinchLazy;
        }
        return this.kilopoundspercubicinchLazy = this.convertFromBase(DensityUnits.Kilopoundspercubicinch);
    }

    public get Kilopoundspercubicfoot(): number {
        if(this.kilopoundspercubicfootLazy !== null){
            return this.kilopoundspercubicfootLazy;
        }
        return this.kilopoundspercubicfootLazy = this.convertFromBase(DensityUnits.Kilopoundspercubicfoot);
    }

    public get Picogramsperliter(): number {
        if(this.picogramsperliterLazy !== null){
            return this.picogramsperliterLazy;
        }
        return this.picogramsperliterLazy = this.convertFromBase(DensityUnits.Picogramsperliter);
    }

    public get Nanogramsperliter(): number {
        if(this.nanogramsperliterLazy !== null){
            return this.nanogramsperliterLazy;
        }
        return this.nanogramsperliterLazy = this.convertFromBase(DensityUnits.Nanogramsperliter);
    }

    public get Microgramsperliter(): number {
        if(this.microgramsperliterLazy !== null){
            return this.microgramsperliterLazy;
        }
        return this.microgramsperliterLazy = this.convertFromBase(DensityUnits.Microgramsperliter);
    }

    public get Centigramsperliter(): number {
        if(this.centigramsperliterLazy !== null){
            return this.centigramsperliterLazy;
        }
        return this.centigramsperliterLazy = this.convertFromBase(DensityUnits.Centigramsperliter);
    }

    public get Decigramsperliter(): number {
        if(this.decigramsperliterLazy !== null){
            return this.decigramsperliterLazy;
        }
        return this.decigramsperliterLazy = this.convertFromBase(DensityUnits.Decigramsperliter);
    }

    public get Picogramsperdeciliter(): number {
        if(this.picogramsperdeciliterLazy !== null){
            return this.picogramsperdeciliterLazy;
        }
        return this.picogramsperdeciliterLazy = this.convertFromBase(DensityUnits.Picogramsperdeciliter);
    }

    public get Nanogramsperdeciliter(): number {
        if(this.nanogramsperdeciliterLazy !== null){
            return this.nanogramsperdeciliterLazy;
        }
        return this.nanogramsperdeciliterLazy = this.convertFromBase(DensityUnits.Nanogramsperdeciliter);
    }

    public get Microgramsperdeciliter(): number {
        if(this.microgramsperdeciliterLazy !== null){
            return this.microgramsperdeciliterLazy;
        }
        return this.microgramsperdeciliterLazy = this.convertFromBase(DensityUnits.Microgramsperdeciliter);
    }

    public get Centigramsperdeciliter(): number {
        if(this.centigramsperdeciliterLazy !== null){
            return this.centigramsperdeciliterLazy;
        }
        return this.centigramsperdeciliterLazy = this.convertFromBase(DensityUnits.Centigramsperdeciliter);
    }

    public get Decigramsperdeciliter(): number {
        if(this.decigramsperdeciliterLazy !== null){
            return this.decigramsperdeciliterLazy;
        }
        return this.decigramsperdeciliterLazy = this.convertFromBase(DensityUnits.Decigramsperdeciliter);
    }

    public get Picogramspermilliliter(): number {
        if(this.picogramspermilliliterLazy !== null){
            return this.picogramspermilliliterLazy;
        }
        return this.picogramspermilliliterLazy = this.convertFromBase(DensityUnits.Picogramspermilliliter);
    }

    public get Nanogramspermilliliter(): number {
        if(this.nanogramspermilliliterLazy !== null){
            return this.nanogramspermilliliterLazy;
        }
        return this.nanogramspermilliliterLazy = this.convertFromBase(DensityUnits.Nanogramspermilliliter);
    }

    public get Microgramspermilliliter(): number {
        if(this.microgramspermilliliterLazy !== null){
            return this.microgramspermilliliterLazy;
        }
        return this.microgramspermilliliterLazy = this.convertFromBase(DensityUnits.Microgramspermilliliter);
    }

    public get Centigramspermilliliter(): number {
        if(this.centigramspermilliliterLazy !== null){
            return this.centigramspermilliliterLazy;
        }
        return this.centigramspermilliliterLazy = this.convertFromBase(DensityUnits.Centigramspermilliliter);
    }

    public get Decigramspermilliliter(): number {
        if(this.decigramspermilliliterLazy !== null){
            return this.decigramspermilliliterLazy;
        }
        return this.decigramspermilliliterLazy = this.convertFromBase(DensityUnits.Decigramspermilliliter);
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

    public static FromKilogramspercubicmillimeter(value: number): Density {
        return new Density(value, DensityUnits.Kilogramspercubicmillimeter);
    }

    public static FromKilogramspercubiccentimeter(value: number): Density {
        return new Density(value, DensityUnits.Kilogramspercubiccentimeter);
    }

    public static FromKilogramspercubicmeter(value: number): Density {
        return new Density(value, DensityUnits.Kilogramspercubicmeter);
    }

    public static FromMicrogramspercubicmeter(value: number): Density {
        return new Density(value, DensityUnits.Microgramspercubicmeter);
    }

    public static FromKilopoundspercubicinch(value: number): Density {
        return new Density(value, DensityUnits.Kilopoundspercubicinch);
    }

    public static FromKilopoundspercubicfoot(value: number): Density {
        return new Density(value, DensityUnits.Kilopoundspercubicfoot);
    }

    public static FromPicogramsperliter(value: number): Density {
        return new Density(value, DensityUnits.Picogramsperliter);
    }

    public static FromNanogramsperliter(value: number): Density {
        return new Density(value, DensityUnits.Nanogramsperliter);
    }

    public static FromMicrogramsperliter(value: number): Density {
        return new Density(value, DensityUnits.Microgramsperliter);
    }

    public static FromCentigramsperliter(value: number): Density {
        return new Density(value, DensityUnits.Centigramsperliter);
    }

    public static FromDecigramsperliter(value: number): Density {
        return new Density(value, DensityUnits.Decigramsperliter);
    }

    public static FromPicogramsperdeciliter(value: number): Density {
        return new Density(value, DensityUnits.Picogramsperdeciliter);
    }

    public static FromNanogramsperdeciliter(value: number): Density {
        return new Density(value, DensityUnits.Nanogramsperdeciliter);
    }

    public static FromMicrogramsperdeciliter(value: number): Density {
        return new Density(value, DensityUnits.Microgramsperdeciliter);
    }

    public static FromCentigramsperdeciliter(value: number): Density {
        return new Density(value, DensityUnits.Centigramsperdeciliter);
    }

    public static FromDecigramsperdeciliter(value: number): Density {
        return new Density(value, DensityUnits.Decigramsperdeciliter);
    }

    public static FromPicogramspermilliliter(value: number): Density {
        return new Density(value, DensityUnits.Picogramspermilliliter);
    }

    public static FromNanogramspermilliliter(value: number): Density {
        return new Density(value, DensityUnits.Nanogramspermilliliter);
    }

    public static FromMicrogramspermilliliter(value: number): Density {
        return new Density(value, DensityUnits.Microgramspermilliliter);
    }

    public static FromCentigramspermilliliter(value: number): Density {
        return new Density(value, DensityUnits.Centigramspermilliliter);
    }

    public static FromDecigramspermilliliter(value: number): Density {
        return new Density(value, DensityUnits.Decigramspermilliliter);
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
            case DensityUnits.Kilogramspercubicmillimeter:
                return (this.value*1e-6) / 1000;
            case DensityUnits.Kilogramspercubiccentimeter:
                return (this.value*1e-3) / 1000;
            case DensityUnits.Kilogramspercubicmeter:
                return (this.value*1e3) / 1000;
            case DensityUnits.Microgramspercubicmeter:
                return (this.value*1e3) / 0.000001;
            case DensityUnits.Kilopoundspercubicinch:
                return (this.value*3.6127298147753e-5) / 1000;
            case DensityUnits.Kilopoundspercubicfoot:
                return (this.value*0.062427961) / 1000;
            case DensityUnits.Picogramsperliter:
                return (this.value*1) / 1e-12;
            case DensityUnits.Nanogramsperliter:
                return (this.value*1) / 1e-9;
            case DensityUnits.Microgramsperliter:
                return (this.value*1) / 0.000001;
            case DensityUnits.Centigramsperliter:
                return (this.value*1) / 0.01;
            case DensityUnits.Decigramsperliter:
                return (this.value*1) / 0.1;
            case DensityUnits.Picogramsperdeciliter:
                return (this.value*1e-1) / 1e-12;
            case DensityUnits.Nanogramsperdeciliter:
                return (this.value*1e-1) / 1e-9;
            case DensityUnits.Microgramsperdeciliter:
                return (this.value*1e-1) / 0.000001;
            case DensityUnits.Centigramsperdeciliter:
                return (this.value*1e-1) / 0.01;
            case DensityUnits.Decigramsperdeciliter:
                return (this.value*1e-1) / 0.1;
            case DensityUnits.Picogramspermilliliter:
                return (this.value*1e-3) / 1e-12;
            case DensityUnits.Nanogramspermilliliter:
                return (this.value*1e-3) / 1e-9;
            case DensityUnits.Microgramspermilliliter:
                return (this.value*1e-3) / 0.000001;
            case DensityUnits.Centigramspermilliliter:
                return (this.value*1e-3) / 0.01;
            case DensityUnits.Decigramspermilliliter:
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
            case DensityUnits.Kilogramspercubicmillimeter:
                return (value/1e-6) * 1000;
            case DensityUnits.Kilogramspercubiccentimeter:
                return (value/1e-3) * 1000;
            case DensityUnits.Kilogramspercubicmeter:
                return (value/1e3) * 1000;
            case DensityUnits.Microgramspercubicmeter:
                return (value/1e3) * 0.000001;
            case DensityUnits.Kilopoundspercubicinch:
                return (value/3.6127298147753e-5) * 1000;
            case DensityUnits.Kilopoundspercubicfoot:
                return (value/0.062427961) * 1000;
            case DensityUnits.Picogramsperliter:
                return (value/1) * 1e-12;
            case DensityUnits.Nanogramsperliter:
                return (value/1) * 1e-9;
            case DensityUnits.Microgramsperliter:
                return (value/1) * 0.000001;
            case DensityUnits.Centigramsperliter:
                return (value/1) * 0.01;
            case DensityUnits.Decigramsperliter:
                return (value/1) * 0.1;
            case DensityUnits.Picogramsperdeciliter:
                return (value/1e-1) * 1e-12;
            case DensityUnits.Nanogramsperdeciliter:
                return (value/1e-1) * 1e-9;
            case DensityUnits.Microgramsperdeciliter:
                return (value/1e-1) * 0.000001;
            case DensityUnits.Centigramsperdeciliter:
                return (value/1e-1) * 0.01;
            case DensityUnits.Decigramsperdeciliter:
                return (value/1e-1) * 0.1;
            case DensityUnits.Picogramspermilliliter:
                return (value/1e-3) * 1e-12;
            case DensityUnits.Nanogramspermilliliter:
                return (value/1e-3) * 1e-9;
            case DensityUnits.Microgramspermilliliter:
                return (value/1e-3) * 0.000001;
            case DensityUnits.Centigramspermilliliter:
                return (value/1e-3) * 0.01;
            case DensityUnits.Decigramspermilliliter:
                return (value/1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }
}
