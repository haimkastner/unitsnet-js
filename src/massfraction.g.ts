export enum MassFractionUnits {
    DecimalFractions,
    GramsPerGram,
    GramsPerKilogram,
    Percent,
    PartsPerThousand,
    PartsPerMillion,
    PartsPerBillion,
    PartsPerTrillion,
    Nanogramspergram,
    Microgramspergram,
    Centigramspergram,
    Decigramspergram,
    Decagramspergram,
    Hectogramspergram,
    Kilogramspergram,
    Nanogramsperkilogram,
    Microgramsperkilogram,
    Centigramsperkilogram,
    Decigramsperkilogram,
    Decagramsperkilogram,
    Hectogramsperkilogram,
    Kilogramsperkilogram
}

export class MassFraction {
    private value: number;
    private decimalfractionsLazy: number | null = null;
    private gramspergramLazy: number | null = null;
    private gramsperkilogramLazy: number | null = null;
    private percentLazy: number | null = null;
    private partsperthousandLazy: number | null = null;
    private partspermillionLazy: number | null = null;
    private partsperbillionLazy: number | null = null;
    private partspertrillionLazy: number | null = null;
    private nanogramspergramLazy: number | null = null;
    private microgramspergramLazy: number | null = null;
    private centigramspergramLazy: number | null = null;
    private decigramspergramLazy: number | null = null;
    private decagramspergramLazy: number | null = null;
    private hectogramspergramLazy: number | null = null;
    private kilogramspergramLazy: number | null = null;
    private nanogramsperkilogramLazy: number | null = null;
    private microgramsperkilogramLazy: number | null = null;
    private centigramsperkilogramLazy: number | null = null;
    private decigramsperkilogramLazy: number | null = null;
    private decagramsperkilogramLazy: number | null = null;
    private hectogramsperkilogramLazy: number | null = null;
    private kilogramsperkilogramLazy: number | null = null;

    public constructor(value: number, fromUnit: MassFractionUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get DecimalFractions(): number {
        if(this.decimalfractionsLazy !== null){
            return this.decimalfractionsLazy;
        }
        return this.decimalfractionsLazy = this.convertFromBase(MassFractionUnits.DecimalFractions);
    }

    public get GramsPerGram(): number {
        if(this.gramspergramLazy !== null){
            return this.gramspergramLazy;
        }
        return this.gramspergramLazy = this.convertFromBase(MassFractionUnits.GramsPerGram);
    }

    public get GramsPerKilogram(): number {
        if(this.gramsperkilogramLazy !== null){
            return this.gramsperkilogramLazy;
        }
        return this.gramsperkilogramLazy = this.convertFromBase(MassFractionUnits.GramsPerKilogram);
    }

    public get Percent(): number {
        if(this.percentLazy !== null){
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(MassFractionUnits.Percent);
    }

    public get PartsPerThousand(): number {
        if(this.partsperthousandLazy !== null){
            return this.partsperthousandLazy;
        }
        return this.partsperthousandLazy = this.convertFromBase(MassFractionUnits.PartsPerThousand);
    }

    public get PartsPerMillion(): number {
        if(this.partspermillionLazy !== null){
            return this.partspermillionLazy;
        }
        return this.partspermillionLazy = this.convertFromBase(MassFractionUnits.PartsPerMillion);
    }

    public get PartsPerBillion(): number {
        if(this.partsperbillionLazy !== null){
            return this.partsperbillionLazy;
        }
        return this.partsperbillionLazy = this.convertFromBase(MassFractionUnits.PartsPerBillion);
    }

    public get PartsPerTrillion(): number {
        if(this.partspertrillionLazy !== null){
            return this.partspertrillionLazy;
        }
        return this.partspertrillionLazy = this.convertFromBase(MassFractionUnits.PartsPerTrillion);
    }

    public get Nanogramspergram(): number {
        if(this.nanogramspergramLazy !== null){
            return this.nanogramspergramLazy;
        }
        return this.nanogramspergramLazy = this.convertFromBase(MassFractionUnits.Nanogramspergram);
    }

    public get Microgramspergram(): number {
        if(this.microgramspergramLazy !== null){
            return this.microgramspergramLazy;
        }
        return this.microgramspergramLazy = this.convertFromBase(MassFractionUnits.Microgramspergram);
    }

    public get Centigramspergram(): number {
        if(this.centigramspergramLazy !== null){
            return this.centigramspergramLazy;
        }
        return this.centigramspergramLazy = this.convertFromBase(MassFractionUnits.Centigramspergram);
    }

    public get Decigramspergram(): number {
        if(this.decigramspergramLazy !== null){
            return this.decigramspergramLazy;
        }
        return this.decigramspergramLazy = this.convertFromBase(MassFractionUnits.Decigramspergram);
    }

    public get Decagramspergram(): number {
        if(this.decagramspergramLazy !== null){
            return this.decagramspergramLazy;
        }
        return this.decagramspergramLazy = this.convertFromBase(MassFractionUnits.Decagramspergram);
    }

    public get Hectogramspergram(): number {
        if(this.hectogramspergramLazy !== null){
            return this.hectogramspergramLazy;
        }
        return this.hectogramspergramLazy = this.convertFromBase(MassFractionUnits.Hectogramspergram);
    }

    public get Kilogramspergram(): number {
        if(this.kilogramspergramLazy !== null){
            return this.kilogramspergramLazy;
        }
        return this.kilogramspergramLazy = this.convertFromBase(MassFractionUnits.Kilogramspergram);
    }

    public get Nanogramsperkilogram(): number {
        if(this.nanogramsperkilogramLazy !== null){
            return this.nanogramsperkilogramLazy;
        }
        return this.nanogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Nanogramsperkilogram);
    }

    public get Microgramsperkilogram(): number {
        if(this.microgramsperkilogramLazy !== null){
            return this.microgramsperkilogramLazy;
        }
        return this.microgramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Microgramsperkilogram);
    }

    public get Centigramsperkilogram(): number {
        if(this.centigramsperkilogramLazy !== null){
            return this.centigramsperkilogramLazy;
        }
        return this.centigramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Centigramsperkilogram);
    }

    public get Decigramsperkilogram(): number {
        if(this.decigramsperkilogramLazy !== null){
            return this.decigramsperkilogramLazy;
        }
        return this.decigramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Decigramsperkilogram);
    }

    public get Decagramsperkilogram(): number {
        if(this.decagramsperkilogramLazy !== null){
            return this.decagramsperkilogramLazy;
        }
        return this.decagramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Decagramsperkilogram);
    }

    public get Hectogramsperkilogram(): number {
        if(this.hectogramsperkilogramLazy !== null){
            return this.hectogramsperkilogramLazy;
        }
        return this.hectogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Hectogramsperkilogram);
    }

    public get Kilogramsperkilogram(): number {
        if(this.kilogramsperkilogramLazy !== null){
            return this.kilogramsperkilogramLazy;
        }
        return this.kilogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Kilogramsperkilogram);
    }

    public static FromDecimalFractions(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecimalFractions);
    }

    public static FromGramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.GramsPerGram);
    }

    public static FromGramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.GramsPerKilogram);
    }

    public static FromPercent(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Percent);
    }

    public static FromPartsPerThousand(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.PartsPerThousand);
    }

    public static FromPartsPerMillion(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.PartsPerMillion);
    }

    public static FromPartsPerBillion(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.PartsPerBillion);
    }

    public static FromPartsPerTrillion(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.PartsPerTrillion);
    }

    public static FromNanogramspergram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Nanogramspergram);
    }

    public static FromMicrogramspergram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Microgramspergram);
    }

    public static FromCentigramspergram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Centigramspergram);
    }

    public static FromDecigramspergram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Decigramspergram);
    }

    public static FromDecagramspergram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Decagramspergram);
    }

    public static FromHectogramspergram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Hectogramspergram);
    }

    public static FromKilogramspergram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Kilogramspergram);
    }

    public static FromNanogramsperkilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Nanogramsperkilogram);
    }

    public static FromMicrogramsperkilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Microgramsperkilogram);
    }

    public static FromCentigramsperkilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Centigramsperkilogram);
    }

    public static FromDecigramsperkilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Decigramsperkilogram);
    }

    public static FromDecagramsperkilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Decagramsperkilogram);
    }

    public static FromHectogramsperkilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Hectogramsperkilogram);
    }

    public static FromKilogramsperkilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Kilogramsperkilogram);
    }

    private convertFromBase(toUnit: MassFractionUnits): number {
        switch (toUnit) {
                
            case MassFractionUnits.DecimalFractions:
                return this.value;
            case MassFractionUnits.GramsPerGram:
                return this.value;
            case MassFractionUnits.GramsPerKilogram:
                return this.value*1e3;
            case MassFractionUnits.Percent:
                return this.value*1e2;
            case MassFractionUnits.PartsPerThousand:
                return this.value*1e3;
            case MassFractionUnits.PartsPerMillion:
                return this.value*1e6;
            case MassFractionUnits.PartsPerBillion:
                return this.value*1e9;
            case MassFractionUnits.PartsPerTrillion:
                return this.value*1e12;
            case MassFractionUnits.Nanogramspergram:
                return (this.value) / 1e-9;
            case MassFractionUnits.Microgramspergram:
                return (this.value) / 0.000001;
            case MassFractionUnits.Centigramspergram:
                return (this.value) / 0.01;
            case MassFractionUnits.Decigramspergram:
                return (this.value) / 0.1;
            case MassFractionUnits.Decagramspergram:
                return (this.value) / 10;
            case MassFractionUnits.Hectogramspergram:
                return (this.value) / 100;
            case MassFractionUnits.Kilogramspergram:
                return (this.value) / 1000;
            case MassFractionUnits.Nanogramsperkilogram:
                return (this.value*1e3) / 1e-9;
            case MassFractionUnits.Microgramsperkilogram:
                return (this.value*1e3) / 0.000001;
            case MassFractionUnits.Centigramsperkilogram:
                return (this.value*1e3) / 0.01;
            case MassFractionUnits.Decigramsperkilogram:
                return (this.value*1e3) / 0.1;
            case MassFractionUnits.Decagramsperkilogram:
                return (this.value*1e3) / 10;
            case MassFractionUnits.Hectogramsperkilogram:
                return (this.value*1e3) / 100;
            case MassFractionUnits.Kilogramsperkilogram:
                return (this.value*1e3) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MassFractionUnits): number {
        switch (fromUnit) {
                
            case MassFractionUnits.DecimalFractions:
                return value;
            case MassFractionUnits.GramsPerGram:
                return value;
            case MassFractionUnits.GramsPerKilogram:
                return value/1e3;
            case MassFractionUnits.Percent:
                return value/1e2;
            case MassFractionUnits.PartsPerThousand:
                return value/1e3;
            case MassFractionUnits.PartsPerMillion:
                return value/1e6;
            case MassFractionUnits.PartsPerBillion:
                return value/1e9;
            case MassFractionUnits.PartsPerTrillion:
                return value/1e12;
            case MassFractionUnits.Nanogramspergram:
                return (value) * 1e-9;
            case MassFractionUnits.Microgramspergram:
                return (value) * 0.000001;
            case MassFractionUnits.Centigramspergram:
                return (value) * 0.01;
            case MassFractionUnits.Decigramspergram:
                return (value) * 0.1;
            case MassFractionUnits.Decagramspergram:
                return (value) * 10;
            case MassFractionUnits.Hectogramspergram:
                return (value) * 100;
            case MassFractionUnits.Kilogramspergram:
                return (value) * 1000;
            case MassFractionUnits.Nanogramsperkilogram:
                return (value/1e3) * 1e-9;
            case MassFractionUnits.Microgramsperkilogram:
                return (value/1e3) * 0.000001;
            case MassFractionUnits.Centigramsperkilogram:
                return (value/1e3) * 0.01;
            case MassFractionUnits.Decigramsperkilogram:
                return (value/1e3) * 0.1;
            case MassFractionUnits.Decagramsperkilogram:
                return (value/1e3) * 10;
            case MassFractionUnits.Hectogramsperkilogram:
                return (value/1e3) * 100;
            case MassFractionUnits.Kilogramsperkilogram:
                return (value/1e3) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
