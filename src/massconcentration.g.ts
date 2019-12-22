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

    public constructor(value: number, fromUnit: MassConcentrationUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerCubicMillimeter(): number {
        return this.convertFromBase(MassConcentrationUnits.GramsPerCubicMillimeter);
    }

    public get GramsPerCubicCentimeter(): number {
        return this.convertFromBase(MassConcentrationUnits.GramsPerCubicCentimeter);
    }

    public get GramsPerCubicMeter(): number {
        return this.convertFromBase(MassConcentrationUnits.GramsPerCubicMeter);
    }

    public get GramsPerMilliliter(): number {
        return this.convertFromBase(MassConcentrationUnits.GramsPerMilliliter);
    }

    public get GramsPerDeciliter(): number {
        return this.convertFromBase(MassConcentrationUnits.GramsPerDeciliter);
    }

    public get GramsPerLiter(): number {
        return this.convertFromBase(MassConcentrationUnits.GramsPerLiter);
    }

    public get TonnesPerCubicMillimeter(): number {
        return this.convertFromBase(MassConcentrationUnits.TonnesPerCubicMillimeter);
    }

    public get TonnesPerCubicCentimeter(): number {
        return this.convertFromBase(MassConcentrationUnits.TonnesPerCubicCentimeter);
    }

    public get TonnesPerCubicMeter(): number {
        return this.convertFromBase(MassConcentrationUnits.TonnesPerCubicMeter);
    }

    public get PoundsPerCubicInch(): number {
        return this.convertFromBase(MassConcentrationUnits.PoundsPerCubicInch);
    }

    public get PoundsPerCubicFoot(): number {
        return this.convertFromBase(MassConcentrationUnits.PoundsPerCubicFoot);
    }

    public get SlugsPerCubicFoot(): number {
        return this.convertFromBase(MassConcentrationUnits.SlugsPerCubicFoot);
    }

    public get PoundsPerUSGallon(): number {
        return this.convertFromBase(MassConcentrationUnits.PoundsPerUSGallon);
    }

    public get PoundsPerImperialGallon(): number {
        return this.convertFromBase(MassConcentrationUnits.PoundsPerImperialGallon);
    }

    public get Kilogramspercubicmillimeter(): number {
        return this.convertFromBase(MassConcentrationUnits.Kilogramspercubicmillimeter);
    }

    public get Kilogramspercubiccentimeter(): number {
        return this.convertFromBase(MassConcentrationUnits.Kilogramspercubiccentimeter);
    }

    public get Kilogramspercubicmeter(): number {
        return this.convertFromBase(MassConcentrationUnits.Kilogramspercubicmeter);
    }

    public get Microgramspercubicmeter(): number {
        return this.convertFromBase(MassConcentrationUnits.Microgramspercubicmeter);
    }

    public get Picogramspermilliliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Picogramspermilliliter);
    }

    public get Nanogramspermilliliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Nanogramspermilliliter);
    }

    public get Microgramspermilliliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Microgramspermilliliter);
    }

    public get Centigramspermilliliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Centigramspermilliliter);
    }

    public get Decigramspermilliliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Decigramspermilliliter);
    }

    public get Picogramsperdeciliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Picogramsperdeciliter);
    }

    public get Nanogramsperdeciliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Nanogramsperdeciliter);
    }

    public get Microgramsperdeciliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Microgramsperdeciliter);
    }

    public get Centigramsperdeciliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Centigramsperdeciliter);
    }

    public get Decigramsperdeciliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Decigramsperdeciliter);
    }

    public get Picogramsperliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Picogramsperliter);
    }

    public get Nanogramsperliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Nanogramsperliter);
    }

    public get Microgramsperliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Microgramsperliter);
    }

    public get Centigramsperliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Centigramsperliter);
    }

    public get Decigramsperliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Decigramsperliter);
    }

    public get Kilogramsperliter(): number {
        return this.convertFromBase(MassConcentrationUnits.Kilogramsperliter);
    }

    public get Kilopoundspercubicinch(): number {
        return this.convertFromBase(MassConcentrationUnits.Kilopoundspercubicinch);
    }

    public get Kilopoundspercubicfoot(): number {
        return this.convertFromBase(MassConcentrationUnits.Kilopoundspercubicfoot);
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
                    return this.value/1e-6;
                
                case MassConcentrationUnits.GramsPerCubicCentimeter:
                    return this.value/1e-3;
                
                case MassConcentrationUnits.GramsPerCubicMeter:
                    return this.value/1e3;
                
                case MassConcentrationUnits.GramsPerMilliliter:
                    return this.value/1e-3;
                
                case MassConcentrationUnits.GramsPerDeciliter:
                    return this.value/1e-1;
                
                case MassConcentrationUnits.GramsPerLiter:
                    return this.value;
                
                case MassConcentrationUnits.TonnesPerCubicMillimeter:
                    return this.value/1e-12;
                
                case MassConcentrationUnits.TonnesPerCubicCentimeter:
                    return this.value/1e-9;
                
                case MassConcentrationUnits.TonnesPerCubicMeter:
                    return this.value/0.001;
                
                case MassConcentrationUnits.PoundsPerCubicInch:
                    return this.value/3.6127298147753e-5;
                
                case MassConcentrationUnits.PoundsPerCubicFoot:
                    return this.value/0.062427961;
                
                case MassConcentrationUnits.SlugsPerCubicFoot:
                    return this.value*515.378818;
                
                case MassConcentrationUnits.PoundsPerUSGallon:
                    return this.value*1.19826427e2;
                
                case MassConcentrationUnits.PoundsPerImperialGallon:
                    return this.value*9.9776398e1;
                
                case MassConcentrationUnits.Kilogramspercubicmillimeter:
                    return (this.value*1e-6) * 1000;
                
                case MassConcentrationUnits.Kilogramspercubiccentimeter:
                    return (this.value*1e-3) * 1000;
                
                case MassConcentrationUnits.Kilogramspercubicmeter:
                    return (this.value*1e3) * 1000;
                
                case MassConcentrationUnits.Microgramspercubicmeter:
                    return (this.value*1e3) * 0.000001;
                
                case MassConcentrationUnits.Picogramspermilliliter:
                    return (this.value*1e-3) * 1e-12;
                
                case MassConcentrationUnits.Nanogramspermilliliter:
                    return (this.value*1e-3) * 1e-9;
                
                case MassConcentrationUnits.Microgramspermilliliter:
                    return (this.value*1e-3) * 0.000001;
                
                case MassConcentrationUnits.Centigramspermilliliter:
                    return (this.value*1e-3) * 0.01;
                
                case MassConcentrationUnits.Decigramspermilliliter:
                    return (this.value*1e-3) * 0.1;
                
                case MassConcentrationUnits.Picogramsperdeciliter:
                    return (this.value*1e-1) * 1e-12;
                
                case MassConcentrationUnits.Nanogramsperdeciliter:
                    return (this.value*1e-1) * 1e-9;
                
                case MassConcentrationUnits.Microgramsperdeciliter:
                    return (this.value*1e-1) * 0.000001;
                
                case MassConcentrationUnits.Centigramsperdeciliter:
                    return (this.value*1e-1) * 0.01;
                
                case MassConcentrationUnits.Decigramsperdeciliter:
                    return (this.value*1e-1) * 0.1;
                
                case MassConcentrationUnits.Picogramsperliter:
                    return (this.value) * 1e-12;
                
                case MassConcentrationUnits.Nanogramsperliter:
                    return (this.value) * 1e-9;
                
                case MassConcentrationUnits.Microgramsperliter:
                    return (this.value) * 0.000001;
                
                case MassConcentrationUnits.Centigramsperliter:
                    return (this.value) * 0.01;
                
                case MassConcentrationUnits.Decigramsperliter:
                    return (this.value) * 0.1;
                
                case MassConcentrationUnits.Kilogramsperliter:
                    return (this.value) * 1000;
                
                case MassConcentrationUnits.Kilopoundspercubicinch:
                    return (this.value*3.6127298147753e-5) * 1000;
                
                case MassConcentrationUnits.Kilopoundspercubicfoot:
                    return (this.value*0.062427961) * 1000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: MassConcentrationUnits): number {

                switch (fromUnit) {
                    
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
                    return (this.value/1e-6) / 1000;
                
                case MassConcentrationUnits.Kilogramspercubiccentimeter:
                    return (this.value/1e-3) / 1000;
                
                case MassConcentrationUnits.Kilogramspercubicmeter:
                    return (this.value/1e3) / 1000;
                
                case MassConcentrationUnits.Microgramspercubicmeter:
                    return (this.value/1e3) / 0.000001;
                
                case MassConcentrationUnits.Picogramspermilliliter:
                    return (this.value/1e-3) / 1e-12;
                
                case MassConcentrationUnits.Nanogramspermilliliter:
                    return (this.value/1e-3) / 1e-9;
                
                case MassConcentrationUnits.Microgramspermilliliter:
                    return (this.value/1e-3) / 0.000001;
                
                case MassConcentrationUnits.Centigramspermilliliter:
                    return (this.value/1e-3) / 0.01;
                
                case MassConcentrationUnits.Decigramspermilliliter:
                    return (this.value/1e-3) / 0.1;
                
                case MassConcentrationUnits.Picogramsperdeciliter:
                    return (this.value/1e-1) / 1e-12;
                
                case MassConcentrationUnits.Nanogramsperdeciliter:
                    return (this.value/1e-1) / 1e-9;
                
                case MassConcentrationUnits.Microgramsperdeciliter:
                    return (this.value/1e-1) / 0.000001;
                
                case MassConcentrationUnits.Centigramsperdeciliter:
                    return (this.value/1e-1) / 0.01;
                
                case MassConcentrationUnits.Decigramsperdeciliter:
                    return (this.value/1e-1) / 0.1;
                
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
                    return (this.value/3.6127298147753e-5) / 1000;
                
                case MassConcentrationUnits.Kilopoundspercubicfoot:
                    return (this.value/0.062427961) / 1000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
