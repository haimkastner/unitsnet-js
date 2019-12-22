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

    public constructor(value: number, fromUnit: DensityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerCubicMillimeter(): number {
        return this.convertFromBase(DensityUnits.GramsPerCubicMillimeter);
    }

    public get GramsPerCubicCentimeter(): number {
        return this.convertFromBase(DensityUnits.GramsPerCubicCentimeter);
    }

    public get GramsPerCubicMeter(): number {
        return this.convertFromBase(DensityUnits.GramsPerCubicMeter);
    }

    public get PoundsPerCubicInch(): number {
        return this.convertFromBase(DensityUnits.PoundsPerCubicInch);
    }

    public get PoundsPerCubicFoot(): number {
        return this.convertFromBase(DensityUnits.PoundsPerCubicFoot);
    }

    public get TonnesPerCubicMillimeter(): number {
        return this.convertFromBase(DensityUnits.TonnesPerCubicMillimeter);
    }

    public get TonnesPerCubicCentimeter(): number {
        return this.convertFromBase(DensityUnits.TonnesPerCubicCentimeter);
    }

    public get TonnesPerCubicMeter(): number {
        return this.convertFromBase(DensityUnits.TonnesPerCubicMeter);
    }

    public get SlugsPerCubicFoot(): number {
        return this.convertFromBase(DensityUnits.SlugsPerCubicFoot);
    }

    public get GramsPerLiter(): number {
        return this.convertFromBase(DensityUnits.GramsPerLiter);
    }

    public get GramsPerDeciLiter(): number {
        return this.convertFromBase(DensityUnits.GramsPerDeciLiter);
    }

    public get GramsPerMilliliter(): number {
        return this.convertFromBase(DensityUnits.GramsPerMilliliter);
    }

    public get PoundsPerUSGallon(): number {
        return this.convertFromBase(DensityUnits.PoundsPerUSGallon);
    }

    public get PoundsPerImperialGallon(): number {
        return this.convertFromBase(DensityUnits.PoundsPerImperialGallon);
    }

    public get KilogramsPerLiter(): number {
        return this.convertFromBase(DensityUnits.KilogramsPerLiter);
    }

    public get Kilogramspercubicmillimeter(): number {
        return this.convertFromBase(DensityUnits.Kilogramspercubicmillimeter);
    }

    public get Kilogramspercubiccentimeter(): number {
        return this.convertFromBase(DensityUnits.Kilogramspercubiccentimeter);
    }

    public get Kilogramspercubicmeter(): number {
        return this.convertFromBase(DensityUnits.Kilogramspercubicmeter);
    }

    public get Microgramspercubicmeter(): number {
        return this.convertFromBase(DensityUnits.Microgramspercubicmeter);
    }

    public get Kilopoundspercubicinch(): number {
        return this.convertFromBase(DensityUnits.Kilopoundspercubicinch);
    }

    public get Kilopoundspercubicfoot(): number {
        return this.convertFromBase(DensityUnits.Kilopoundspercubicfoot);
    }

    public get Picogramsperliter(): number {
        return this.convertFromBase(DensityUnits.Picogramsperliter);
    }

    public get Nanogramsperliter(): number {
        return this.convertFromBase(DensityUnits.Nanogramsperliter);
    }

    public get Microgramsperliter(): number {
        return this.convertFromBase(DensityUnits.Microgramsperliter);
    }

    public get Centigramsperliter(): number {
        return this.convertFromBase(DensityUnits.Centigramsperliter);
    }

    public get Decigramsperliter(): number {
        return this.convertFromBase(DensityUnits.Decigramsperliter);
    }

    public get Picogramsperdeciliter(): number {
        return this.convertFromBase(DensityUnits.Picogramsperdeciliter);
    }

    public get Nanogramsperdeciliter(): number {
        return this.convertFromBase(DensityUnits.Nanogramsperdeciliter);
    }

    public get Microgramsperdeciliter(): number {
        return this.convertFromBase(DensityUnits.Microgramsperdeciliter);
    }

    public get Centigramsperdeciliter(): number {
        return this.convertFromBase(DensityUnits.Centigramsperdeciliter);
    }

    public get Decigramsperdeciliter(): number {
        return this.convertFromBase(DensityUnits.Decigramsperdeciliter);
    }

    public get Picogramspermilliliter(): number {
        return this.convertFromBase(DensityUnits.Picogramspermilliliter);
    }

    public get Nanogramspermilliliter(): number {
        return this.convertFromBase(DensityUnits.Nanogramspermilliliter);
    }

    public get Microgramspermilliliter(): number {
        return this.convertFromBase(DensityUnits.Microgramspermilliliter);
    }

    public get Centigramspermilliliter(): number {
        return this.convertFromBase(DensityUnits.Centigramspermilliliter);
    }

    public get Decigramspermilliliter(): number {
        return this.convertFromBase(DensityUnits.Decigramspermilliliter);
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
                    return this.value/1e-6;
                
                case DensityUnits.GramsPerCubicCentimeter:
                    return this.value/1e-3;
                
                case DensityUnits.GramsPerCubicMeter:
                    return this.value/1e3;
                
                case DensityUnits.PoundsPerCubicInch:
                    return this.value/3.6127298147753e-5;
                
                case DensityUnits.PoundsPerCubicFoot:
                    return this.value/0.062427961;
                
                case DensityUnits.TonnesPerCubicMillimeter:
                    return this.value/1e-12;
                
                case DensityUnits.TonnesPerCubicCentimeter:
                    return this.value/1e-9;
                
                case DensityUnits.TonnesPerCubicMeter:
                    return this.value/0.001;
                
                case DensityUnits.SlugsPerCubicFoot:
                    return this.value*515.378818;
                
                case DensityUnits.GramsPerLiter:
                    return this.value/1;
                
                case DensityUnits.GramsPerDeciLiter:
                    return this.value/1e-1;
                
                case DensityUnits.GramsPerMilliliter:
                    return this.value/1e-3;
                
                case DensityUnits.PoundsPerUSGallon:
                    return this.value*1.19826427e2;
                
                case DensityUnits.PoundsPerImperialGallon:
                    return this.value*9.9776398e1;
                
                case DensityUnits.KilogramsPerLiter:
                    return this.value*1e3;
                
                case DensityUnits.Kilogramspercubicmillimeter:
                    return (this.value*1e-6) * 1000;
                
                case DensityUnits.Kilogramspercubiccentimeter:
                    return (this.value*1e-3) * 1000;
                
                case DensityUnits.Kilogramspercubicmeter:
                    return (this.value*1e3) * 1000;
                
                case DensityUnits.Microgramspercubicmeter:
                    return (this.value*1e3) * 0.000001;
                
                case DensityUnits.Kilopoundspercubicinch:
                    return (this.value*3.6127298147753e-5) * 1000;
                
                case DensityUnits.Kilopoundspercubicfoot:
                    return (this.value*0.062427961) * 1000;
                
                case DensityUnits.Picogramsperliter:
                    return (this.value*1) * 1e-12;
                
                case DensityUnits.Nanogramsperliter:
                    return (this.value*1) * 1e-9;
                
                case DensityUnits.Microgramsperliter:
                    return (this.value*1) * 0.000001;
                
                case DensityUnits.Centigramsperliter:
                    return (this.value*1) * 0.01;
                
                case DensityUnits.Decigramsperliter:
                    return (this.value*1) * 0.1;
                
                case DensityUnits.Picogramsperdeciliter:
                    return (this.value*1e-1) * 1e-12;
                
                case DensityUnits.Nanogramsperdeciliter:
                    return (this.value*1e-1) * 1e-9;
                
                case DensityUnits.Microgramsperdeciliter:
                    return (this.value*1e-1) * 0.000001;
                
                case DensityUnits.Centigramsperdeciliter:
                    return (this.value*1e-1) * 0.01;
                
                case DensityUnits.Decigramsperdeciliter:
                    return (this.value*1e-1) * 0.1;
                
                case DensityUnits.Picogramspermilliliter:
                    return (this.value*1e-3) * 1e-12;
                
                case DensityUnits.Nanogramspermilliliter:
                    return (this.value*1e-3) * 1e-9;
                
                case DensityUnits.Microgramspermilliliter:
                    return (this.value*1e-3) * 0.000001;
                
                case DensityUnits.Centigramspermilliliter:
                    return (this.value*1e-3) * 0.01;
                
                case DensityUnits.Decigramspermilliliter:
                    return (this.value*1e-3) * 0.1;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: DensityUnits): number {

                switch (fromUnit) {
                    
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
                    return (this.value/1e-6) / 1000;
                
                case DensityUnits.Kilogramspercubiccentimeter:
                    return (this.value/1e-3) / 1000;
                
                case DensityUnits.Kilogramspercubicmeter:
                    return (this.value/1e3) / 1000;
                
                case DensityUnits.Microgramspercubicmeter:
                    return (this.value/1e3) / 0.000001;
                
                case DensityUnits.Kilopoundspercubicinch:
                    return (this.value/3.6127298147753e-5) / 1000;
                
                case DensityUnits.Kilopoundspercubicfoot:
                    return (this.value/0.062427961) / 1000;
                
                case DensityUnits.Picogramsperliter:
                    return (this.value/1) / 1e-12;
                
                case DensityUnits.Nanogramsperliter:
                    return (this.value/1) / 1e-9;
                
                case DensityUnits.Microgramsperliter:
                    return (this.value/1) / 0.000001;
                
                case DensityUnits.Centigramsperliter:
                    return (this.value/1) / 0.01;
                
                case DensityUnits.Decigramsperliter:
                    return (this.value/1) / 0.1;
                
                case DensityUnits.Picogramsperdeciliter:
                    return (this.value/1e-1) / 1e-12;
                
                case DensityUnits.Nanogramsperdeciliter:
                    return (this.value/1e-1) / 1e-9;
                
                case DensityUnits.Microgramsperdeciliter:
                    return (this.value/1e-1) / 0.000001;
                
                case DensityUnits.Centigramsperdeciliter:
                    return (this.value/1e-1) / 0.01;
                
                case DensityUnits.Decigramsperdeciliter:
                    return (this.value/1e-1) / 0.1;
                
                case DensityUnits.Picogramspermilliliter:
                    return (this.value/1e-3) / 1e-12;
                
                case DensityUnits.Nanogramspermilliliter:
                    return (this.value/1e-3) / 1e-9;
                
                case DensityUnits.Microgramspermilliliter:
                    return (this.value/1e-3) / 0.000001;
                
                case DensityUnits.Centigramspermilliliter:
                    return (this.value/1e-3) / 0.01;
                
                case DensityUnits.Decigramspermilliliter:
                    return (this.value/1e-3) / 0.1;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
