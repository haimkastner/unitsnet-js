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
    Kilogramspercubicmillimeter,
    Kilogramspercubiccentimeter,
    Kilogramspercubicmeter,
    Microgramspercubicmeter,
    Picogramspermilliliter,
    Nanogramspermilliliter,
    Microgramspermilliliter,
    Centigramspermilliliter,
    Decigramspermilliliter,
    Picogramsperdeciliter,
    Nanogramsperdeciliter,
    Microgramsperdeciliter,
    Centigramsperdeciliter,
    Decigramsperdeciliter,
    Picogramsperliter,
    Nanogramsperliter,
    Microgramsperliter,
    Centigramsperliter,
    Decigramsperliter,
    Kilogramsperliter,
    Kilopoundspercubicinch,
    Kilopoundspercubicfoot
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

    public get Kilogramspercubicmillimeter(): number {
        if(this.kilogramspercubicmillimeterLazy !== null){
            return this.kilogramspercubicmillimeterLazy;
        }
        return this.kilogramspercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.Kilogramspercubicmillimeter);
    }

    public get Kilogramspercubiccentimeter(): number {
        if(this.kilogramspercubiccentimeterLazy !== null){
            return this.kilogramspercubiccentimeterLazy;
        }
        return this.kilogramspercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.Kilogramspercubiccentimeter);
    }

    public get Kilogramspercubicmeter(): number {
        if(this.kilogramspercubicmeterLazy !== null){
            return this.kilogramspercubicmeterLazy;
        }
        return this.kilogramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.Kilogramspercubicmeter);
    }

    public get Microgramspercubicmeter(): number {
        if(this.microgramspercubicmeterLazy !== null){
            return this.microgramspercubicmeterLazy;
        }
        return this.microgramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.Microgramspercubicmeter);
    }

    public get Picogramspermilliliter(): number {
        if(this.picogramspermilliliterLazy !== null){
            return this.picogramspermilliliterLazy;
        }
        return this.picogramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.Picogramspermilliliter);
    }

    public get Nanogramspermilliliter(): number {
        if(this.nanogramspermilliliterLazy !== null){
            return this.nanogramspermilliliterLazy;
        }
        return this.nanogramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.Nanogramspermilliliter);
    }

    public get Microgramspermilliliter(): number {
        if(this.microgramspermilliliterLazy !== null){
            return this.microgramspermilliliterLazy;
        }
        return this.microgramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.Microgramspermilliliter);
    }

    public get Centigramspermilliliter(): number {
        if(this.centigramspermilliliterLazy !== null){
            return this.centigramspermilliliterLazy;
        }
        return this.centigramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.Centigramspermilliliter);
    }

    public get Decigramspermilliliter(): number {
        if(this.decigramspermilliliterLazy !== null){
            return this.decigramspermilliliterLazy;
        }
        return this.decigramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.Decigramspermilliliter);
    }

    public get Picogramsperdeciliter(): number {
        if(this.picogramsperdeciliterLazy !== null){
            return this.picogramsperdeciliterLazy;
        }
        return this.picogramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.Picogramsperdeciliter);
    }

    public get Nanogramsperdeciliter(): number {
        if(this.nanogramsperdeciliterLazy !== null){
            return this.nanogramsperdeciliterLazy;
        }
        return this.nanogramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.Nanogramsperdeciliter);
    }

    public get Microgramsperdeciliter(): number {
        if(this.microgramsperdeciliterLazy !== null){
            return this.microgramsperdeciliterLazy;
        }
        return this.microgramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.Microgramsperdeciliter);
    }

    public get Centigramsperdeciliter(): number {
        if(this.centigramsperdeciliterLazy !== null){
            return this.centigramsperdeciliterLazy;
        }
        return this.centigramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.Centigramsperdeciliter);
    }

    public get Decigramsperdeciliter(): number {
        if(this.decigramsperdeciliterLazy !== null){
            return this.decigramsperdeciliterLazy;
        }
        return this.decigramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.Decigramsperdeciliter);
    }

    public get Picogramsperliter(): number {
        if(this.picogramsperliterLazy !== null){
            return this.picogramsperliterLazy;
        }
        return this.picogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.Picogramsperliter);
    }

    public get Nanogramsperliter(): number {
        if(this.nanogramsperliterLazy !== null){
            return this.nanogramsperliterLazy;
        }
        return this.nanogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.Nanogramsperliter);
    }

    public get Microgramsperliter(): number {
        if(this.microgramsperliterLazy !== null){
            return this.microgramsperliterLazy;
        }
        return this.microgramsperliterLazy = this.convertFromBase(MassConcentrationUnits.Microgramsperliter);
    }

    public get Centigramsperliter(): number {
        if(this.centigramsperliterLazy !== null){
            return this.centigramsperliterLazy;
        }
        return this.centigramsperliterLazy = this.convertFromBase(MassConcentrationUnits.Centigramsperliter);
    }

    public get Decigramsperliter(): number {
        if(this.decigramsperliterLazy !== null){
            return this.decigramsperliterLazy;
        }
        return this.decigramsperliterLazy = this.convertFromBase(MassConcentrationUnits.Decigramsperliter);
    }

    public get Kilogramsperliter(): number {
        if(this.kilogramsperliterLazy !== null){
            return this.kilogramsperliterLazy;
        }
        return this.kilogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.Kilogramsperliter);
    }

    public get Kilopoundspercubicinch(): number {
        if(this.kilopoundspercubicinchLazy !== null){
            return this.kilopoundspercubicinchLazy;
        }
        return this.kilopoundspercubicinchLazy = this.convertFromBase(MassConcentrationUnits.Kilopoundspercubicinch);
    }

    public get Kilopoundspercubicfoot(): number {
        if(this.kilopoundspercubicfootLazy !== null){
            return this.kilopoundspercubicfootLazy;
        }
        return this.kilopoundspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.Kilopoundspercubicfoot);
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

    public static FromKilogramspercubicmillimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Kilogramspercubicmillimeter);
    }

    public static FromKilogramspercubiccentimeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Kilogramspercubiccentimeter);
    }

    public static FromKilogramspercubicmeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Kilogramspercubicmeter);
    }

    public static FromMicrogramspercubicmeter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Microgramspercubicmeter);
    }

    public static FromPicogramspermilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Picogramspermilliliter);
    }

    public static FromNanogramspermilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Nanogramspermilliliter);
    }

    public static FromMicrogramspermilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Microgramspermilliliter);
    }

    public static FromCentigramspermilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Centigramspermilliliter);
    }

    public static FromDecigramspermilliliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Decigramspermilliliter);
    }

    public static FromPicogramsperdeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Picogramsperdeciliter);
    }

    public static FromNanogramsperdeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Nanogramsperdeciliter);
    }

    public static FromMicrogramsperdeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Microgramsperdeciliter);
    }

    public static FromCentigramsperdeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Centigramsperdeciliter);
    }

    public static FromDecigramsperdeciliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Decigramsperdeciliter);
    }

    public static FromPicogramsperliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Picogramsperliter);
    }

    public static FromNanogramsperliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Nanogramsperliter);
    }

    public static FromMicrogramsperliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Microgramsperliter);
    }

    public static FromCentigramsperliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Centigramsperliter);
    }

    public static FromDecigramsperliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Decigramsperliter);
    }

    public static FromKilogramsperliter(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Kilogramsperliter);
    }

    public static FromKilopoundspercubicinch(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Kilopoundspercubicinch);
    }

    public static FromKilopoundspercubicfoot(value: number): MassConcentration {
        return new MassConcentration(value, MassConcentrationUnits.Kilopoundspercubicfoot);
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
            case MassConcentrationUnits.Kilogramspercubicmillimeter:
                return (this.value*1e-6) / 1000;
            case MassConcentrationUnits.Kilogramspercubiccentimeter:
                return (this.value*1e-3) / 1000;
            case MassConcentrationUnits.Kilogramspercubicmeter:
                return (this.value*1e3) / 1000;
            case MassConcentrationUnits.Microgramspercubicmeter:
                return (this.value*1e3) / 0.000001;
            case MassConcentrationUnits.Picogramspermilliliter:
                return (this.value*1e-3) / 1e-12;
            case MassConcentrationUnits.Nanogramspermilliliter:
                return (this.value*1e-3) / 1e-9;
            case MassConcentrationUnits.Microgramspermilliliter:
                return (this.value*1e-3) / 0.000001;
            case MassConcentrationUnits.Centigramspermilliliter:
                return (this.value*1e-3) / 0.01;
            case MassConcentrationUnits.Decigramspermilliliter:
                return (this.value*1e-3) / 0.1;
            case MassConcentrationUnits.Picogramsperdeciliter:
                return (this.value*1e-1) / 1e-12;
            case MassConcentrationUnits.Nanogramsperdeciliter:
                return (this.value*1e-1) / 1e-9;
            case MassConcentrationUnits.Microgramsperdeciliter:
                return (this.value*1e-1) / 0.000001;
            case MassConcentrationUnits.Centigramsperdeciliter:
                return (this.value*1e-1) / 0.01;
            case MassConcentrationUnits.Decigramsperdeciliter:
                return (this.value*1e-1) / 0.1;
            case MassConcentrationUnits.Picogramsperliter:
                return (this.value) / 1e-12;
            case MassConcentrationUnits.Nanogramsperliter:
                return (this.value) / 1e-9;
            case MassConcentrationUnits.Microgramsperliter:
                return (this.value) / 0.000001;
            case MassConcentrationUnits.Centigramsperliter:
                return (this.value) / 0.01;
            case MassConcentrationUnits.Decigramsperliter:
                return (this.value) / 0.1;
            case MassConcentrationUnits.Kilogramsperliter:
                return (this.value) / 1000;
            case MassConcentrationUnits.Kilopoundspercubicinch:
                return (this.value*3.6127298147753e-5) / 1000;
            case MassConcentrationUnits.Kilopoundspercubicfoot:
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
            case MassConcentrationUnits.Kilogramspercubicmillimeter:
                return (value/1e-6) * 1000;
            case MassConcentrationUnits.Kilogramspercubiccentimeter:
                return (value/1e-3) * 1000;
            case MassConcentrationUnits.Kilogramspercubicmeter:
                return (value/1e3) * 1000;
            case MassConcentrationUnits.Microgramspercubicmeter:
                return (value/1e3) * 0.000001;
            case MassConcentrationUnits.Picogramspermilliliter:
                return (value/1e-3) * 1e-12;
            case MassConcentrationUnits.Nanogramspermilliliter:
                return (value/1e-3) * 1e-9;
            case MassConcentrationUnits.Microgramspermilliliter:
                return (value/1e-3) * 0.000001;
            case MassConcentrationUnits.Centigramspermilliliter:
                return (value/1e-3) * 0.01;
            case MassConcentrationUnits.Decigramspermilliliter:
                return (value/1e-3) * 0.1;
            case MassConcentrationUnits.Picogramsperdeciliter:
                return (value/1e-1) * 1e-12;
            case MassConcentrationUnits.Nanogramsperdeciliter:
                return (value/1e-1) * 1e-9;
            case MassConcentrationUnits.Microgramsperdeciliter:
                return (value/1e-1) * 0.000001;
            case MassConcentrationUnits.Centigramsperdeciliter:
                return (value/1e-1) * 0.01;
            case MassConcentrationUnits.Decigramsperdeciliter:
                return (value/1e-1) * 0.1;
            case MassConcentrationUnits.Picogramsperliter:
                return (value) * 1e-12;
            case MassConcentrationUnits.Nanogramsperliter:
                return (value) * 1e-9;
            case MassConcentrationUnits.Microgramsperliter:
                return (value) * 0.000001;
            case MassConcentrationUnits.Centigramsperliter:
                return (value) * 0.01;
            case MassConcentrationUnits.Decigramsperliter:
                return (value) * 0.1;
            case MassConcentrationUnits.Kilogramsperliter:
                return (value) * 1000;
            case MassConcentrationUnits.Kilopoundspercubicinch:
                return (value/3.6127298147753e-5) * 1000;
            case MassConcentrationUnits.Kilopoundspercubicfoot:
                return (value/0.062427961) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
