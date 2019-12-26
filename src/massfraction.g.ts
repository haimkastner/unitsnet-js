export enum MassFractionUnits {
    DecimalFractions,
    GramsPerGram,
    GramsPerKilogram,
    Percent,
    PartsPerThousand,
    PartsPerMillion,
    PartsPerBillion,
    PartsPerTrillion,
    NanogramPerGram,
    MicrogramPerGram,
    CentigramPerGram,
    DecigramPerGram,
    DecagramPerGram,
    HectogramPerGram,
    KilogramPerGram,
    NanogramPerKilogram,
    MicrogramPerKilogram,
    CentigramPerKilogram,
    DecigramPerKilogram,
    DecagramPerKilogram,
    HectogramPerKilogram,
    KilogramPerKilogram
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
    private nanogrampergramLazy: number | null = null;
    private microgrampergramLazy: number | null = null;
    private centigrampergramLazy: number | null = null;
    private decigrampergramLazy: number | null = null;
    private decagrampergramLazy: number | null = null;
    private hectogrampergramLazy: number | null = null;
    private kilogrampergramLazy: number | null = null;
    private nanogramperkilogramLazy: number | null = null;
    private microgramperkilogramLazy: number | null = null;
    private centigramperkilogramLazy: number | null = null;
    private decigramperkilogramLazy: number | null = null;
    private decagramperkilogramLazy: number | null = null;
    private hectogramperkilogramLazy: number | null = null;
    private kilogramperkilogramLazy: number | null = null;

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

    public get NanogramPerGram(): number {
        if(this.nanogrampergramLazy !== null){
            return this.nanogrampergramLazy;
        }
        return this.nanogrampergramLazy = this.convertFromBase(MassFractionUnits.NanogramPerGram);
    }

    public get MicrogramPerGram(): number {
        if(this.microgrampergramLazy !== null){
            return this.microgrampergramLazy;
        }
        return this.microgrampergramLazy = this.convertFromBase(MassFractionUnits.MicrogramPerGram);
    }

    public get CentigramPerGram(): number {
        if(this.centigrampergramLazy !== null){
            return this.centigrampergramLazy;
        }
        return this.centigrampergramLazy = this.convertFromBase(MassFractionUnits.CentigramPerGram);
    }

    public get DecigramPerGram(): number {
        if(this.decigrampergramLazy !== null){
            return this.decigrampergramLazy;
        }
        return this.decigrampergramLazy = this.convertFromBase(MassFractionUnits.DecigramPerGram);
    }

    public get DecagramPerGram(): number {
        if(this.decagrampergramLazy !== null){
            return this.decagrampergramLazy;
        }
        return this.decagrampergramLazy = this.convertFromBase(MassFractionUnits.DecagramPerGram);
    }

    public get HectogramPerGram(): number {
        if(this.hectogrampergramLazy !== null){
            return this.hectogrampergramLazy;
        }
        return this.hectogrampergramLazy = this.convertFromBase(MassFractionUnits.HectogramPerGram);
    }

    public get KilogramPerGram(): number {
        if(this.kilogrampergramLazy !== null){
            return this.kilogrampergramLazy;
        }
        return this.kilogrampergramLazy = this.convertFromBase(MassFractionUnits.KilogramPerGram);
    }

    public get NanogramPerKilogram(): number {
        if(this.nanogramperkilogramLazy !== null){
            return this.nanogramperkilogramLazy;
        }
        return this.nanogramperkilogramLazy = this.convertFromBase(MassFractionUnits.NanogramPerKilogram);
    }

    public get MicrogramPerKilogram(): number {
        if(this.microgramperkilogramLazy !== null){
            return this.microgramperkilogramLazy;
        }
        return this.microgramperkilogramLazy = this.convertFromBase(MassFractionUnits.MicrogramPerKilogram);
    }

    public get CentigramPerKilogram(): number {
        if(this.centigramperkilogramLazy !== null){
            return this.centigramperkilogramLazy;
        }
        return this.centigramperkilogramLazy = this.convertFromBase(MassFractionUnits.CentigramPerKilogram);
    }

    public get DecigramPerKilogram(): number {
        if(this.decigramperkilogramLazy !== null){
            return this.decigramperkilogramLazy;
        }
        return this.decigramperkilogramLazy = this.convertFromBase(MassFractionUnits.DecigramPerKilogram);
    }

    public get DecagramPerKilogram(): number {
        if(this.decagramperkilogramLazy !== null){
            return this.decagramperkilogramLazy;
        }
        return this.decagramperkilogramLazy = this.convertFromBase(MassFractionUnits.DecagramPerKilogram);
    }

    public get HectogramPerKilogram(): number {
        if(this.hectogramperkilogramLazy !== null){
            return this.hectogramperkilogramLazy;
        }
        return this.hectogramperkilogramLazy = this.convertFromBase(MassFractionUnits.HectogramPerKilogram);
    }

    public get KilogramPerKilogram(): number {
        if(this.kilogramperkilogramLazy !== null){
            return this.kilogramperkilogramLazy;
        }
        return this.kilogramperkilogramLazy = this.convertFromBase(MassFractionUnits.KilogramPerKilogram);
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

    public static FromNanogramPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.NanogramPerGram);
    }

    public static FromMicrogramPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.MicrogramPerGram);
    }

    public static FromCentigramPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.CentigramPerGram);
    }

    public static FromDecigramPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecigramPerGram);
    }

    public static FromDecagramPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecagramPerGram);
    }

    public static FromHectogramPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.HectogramPerGram);
    }

    public static FromKilogramPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.KilogramPerGram);
    }

    public static FromNanogramPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.NanogramPerKilogram);
    }

    public static FromMicrogramPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.MicrogramPerKilogram);
    }

    public static FromCentigramPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.CentigramPerKilogram);
    }

    public static FromDecigramPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecigramPerKilogram);
    }

    public static FromDecagramPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecagramPerKilogram);
    }

    public static FromHectogramPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.HectogramPerKilogram);
    }

    public static FromKilogramPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.KilogramPerKilogram);
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
            case MassFractionUnits.NanogramPerGram:
                return (this.value) / 1e-9;
            case MassFractionUnits.MicrogramPerGram:
                return (this.value) / 0.000001;
            case MassFractionUnits.CentigramPerGram:
                return (this.value) / 0.01;
            case MassFractionUnits.DecigramPerGram:
                return (this.value) / 0.1;
            case MassFractionUnits.DecagramPerGram:
                return (this.value) / 10;
            case MassFractionUnits.HectogramPerGram:
                return (this.value) / 100;
            case MassFractionUnits.KilogramPerGram:
                return (this.value) / 1000;
            case MassFractionUnits.NanogramPerKilogram:
                return (this.value*1e3) / 1e-9;
            case MassFractionUnits.MicrogramPerKilogram:
                return (this.value*1e3) / 0.000001;
            case MassFractionUnits.CentigramPerKilogram:
                return (this.value*1e3) / 0.01;
            case MassFractionUnits.DecigramPerKilogram:
                return (this.value*1e3) / 0.1;
            case MassFractionUnits.DecagramPerKilogram:
                return (this.value*1e3) / 10;
            case MassFractionUnits.HectogramPerKilogram:
                return (this.value*1e3) / 100;
            case MassFractionUnits.KilogramPerKilogram:
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
            case MassFractionUnits.NanogramPerGram:
                return (value) * 1e-9;
            case MassFractionUnits.MicrogramPerGram:
                return (value) * 0.000001;
            case MassFractionUnits.CentigramPerGram:
                return (value) * 0.01;
            case MassFractionUnits.DecigramPerGram:
                return (value) * 0.1;
            case MassFractionUnits.DecagramPerGram:
                return (value) * 10;
            case MassFractionUnits.HectogramPerGram:
                return (value) * 100;
            case MassFractionUnits.KilogramPerGram:
                return (value) * 1000;
            case MassFractionUnits.NanogramPerKilogram:
                return (value/1e3) * 1e-9;
            case MassFractionUnits.MicrogramPerKilogram:
                return (value/1e3) * 0.000001;
            case MassFractionUnits.CentigramPerKilogram:
                return (value/1e3) * 0.01;
            case MassFractionUnits.DecigramPerKilogram:
                return (value/1e3) * 0.1;
            case MassFractionUnits.DecagramPerKilogram:
                return (value/1e3) * 10;
            case MassFractionUnits.HectogramPerKilogram:
                return (value/1e3) * 100;
            case MassFractionUnits.KilogramPerKilogram:
                return (value/1e3) * 1000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MassFractionUnits = MassFractionUnits.DecimalFractions): string {

        switch (toUnit) {
            
            case MassFractionUnits.DecimalFractions:
                return this.DecimalFractions + ` `;
            case MassFractionUnits.GramsPerGram:
                return this.GramsPerGram + ` g/g`;
            case MassFractionUnits.GramsPerKilogram:
                return this.GramsPerKilogram + ` g/kg`;
            case MassFractionUnits.Percent:
                return this.Percent + ` %`;
            case MassFractionUnits.PartsPerThousand:
                return this.PartsPerThousand + ` ‰`;
            case MassFractionUnits.PartsPerMillion:
                return this.PartsPerMillion + ` ppm`;
            case MassFractionUnits.PartsPerBillion:
                return this.PartsPerBillion + ` ppb`;
            case MassFractionUnits.PartsPerTrillion:
                return this.PartsPerTrillion + ` ppt`;
            case MassFractionUnits.NanogramPerGram:
                return this.NanogramPerGram + ` g/g`;
            case MassFractionUnits.MicrogramPerGram:
                return this.MicrogramPerGram + ` g/g`;
            case MassFractionUnits.CentigramPerGram:
                return this.CentigramPerGram + ` g/g`;
            case MassFractionUnits.DecigramPerGram:
                return this.DecigramPerGram + ` g/g`;
            case MassFractionUnits.DecagramPerGram:
                return this.DecagramPerGram + ` g/g`;
            case MassFractionUnits.HectogramPerGram:
                return this.HectogramPerGram + ` g/g`;
            case MassFractionUnits.KilogramPerGram:
                return this.KilogramPerGram + ` g/g`;
            case MassFractionUnits.NanogramPerKilogram:
                return this.NanogramPerKilogram + ` g/kg`;
            case MassFractionUnits.MicrogramPerKilogram:
                return this.MicrogramPerKilogram + ` g/kg`;
            case MassFractionUnits.CentigramPerKilogram:
                return this.CentigramPerKilogram + ` g/kg`;
            case MassFractionUnits.DecigramPerKilogram:
                return this.DecigramPerKilogram + ` g/kg`;
            case MassFractionUnits.DecagramPerKilogram:
                return this.DecagramPerKilogram + ` g/kg`;
            case MassFractionUnits.HectogramPerKilogram:
                return this.HectogramPerKilogram + ` g/kg`;
            case MassFractionUnits.KilogramPerKilogram:
                return this.KilogramPerKilogram + ` g/kg`;
        default:
            break;
        }
        return this.value.toString();
    }
}
