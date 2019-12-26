export enum MassFractionUnits {
    DecimalFractions,
    GramsPerGram,
    GramsPerKilogram,
    Percent,
    PartsPerThousand,
    PartsPerMillion,
    PartsPerBillion,
    PartsPerTrillion,
    NanogramsPerGram,
    MicrogramsPerGram,
    CentigramsPerGram,
    DecigramsPerGram,
    DecagramsPerGram,
    HectogramsPerGram,
    KilogramsPerGram,
    NanogramsPerKilogram,
    MicrogramsPerKilogram,
    CentigramsPerKilogram,
    DecigramsPerKilogram,
    DecagramsPerKilogram,
    HectogramsPerKilogram,
    KilogramsPerKilogram
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

    public get NanogramsPerGram(): number {
        if(this.nanogramspergramLazy !== null){
            return this.nanogramspergramLazy;
        }
        return this.nanogramspergramLazy = this.convertFromBase(MassFractionUnits.NanogramsPerGram);
    }

    public get MicrogramsPerGram(): number {
        if(this.microgramspergramLazy !== null){
            return this.microgramspergramLazy;
        }
        return this.microgramspergramLazy = this.convertFromBase(MassFractionUnits.MicrogramsPerGram);
    }

    public get CentigramsPerGram(): number {
        if(this.centigramspergramLazy !== null){
            return this.centigramspergramLazy;
        }
        return this.centigramspergramLazy = this.convertFromBase(MassFractionUnits.CentigramsPerGram);
    }

    public get DecigramsPerGram(): number {
        if(this.decigramspergramLazy !== null){
            return this.decigramspergramLazy;
        }
        return this.decigramspergramLazy = this.convertFromBase(MassFractionUnits.DecigramsPerGram);
    }

    public get DecagramsPerGram(): number {
        if(this.decagramspergramLazy !== null){
            return this.decagramspergramLazy;
        }
        return this.decagramspergramLazy = this.convertFromBase(MassFractionUnits.DecagramsPerGram);
    }

    public get HectogramsPerGram(): number {
        if(this.hectogramspergramLazy !== null){
            return this.hectogramspergramLazy;
        }
        return this.hectogramspergramLazy = this.convertFromBase(MassFractionUnits.HectogramsPerGram);
    }

    public get KilogramsPerGram(): number {
        if(this.kilogramspergramLazy !== null){
            return this.kilogramspergramLazy;
        }
        return this.kilogramspergramLazy = this.convertFromBase(MassFractionUnits.KilogramsPerGram);
    }

    public get NanogramsPerKilogram(): number {
        if(this.nanogramsperkilogramLazy !== null){
            return this.nanogramsperkilogramLazy;
        }
        return this.nanogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.NanogramsPerKilogram);
    }

    public get MicrogramsPerKilogram(): number {
        if(this.microgramsperkilogramLazy !== null){
            return this.microgramsperkilogramLazy;
        }
        return this.microgramsperkilogramLazy = this.convertFromBase(MassFractionUnits.MicrogramsPerKilogram);
    }

    public get CentigramsPerKilogram(): number {
        if(this.centigramsperkilogramLazy !== null){
            return this.centigramsperkilogramLazy;
        }
        return this.centigramsperkilogramLazy = this.convertFromBase(MassFractionUnits.CentigramsPerKilogram);
    }

    public get DecigramsPerKilogram(): number {
        if(this.decigramsperkilogramLazy !== null){
            return this.decigramsperkilogramLazy;
        }
        return this.decigramsperkilogramLazy = this.convertFromBase(MassFractionUnits.DecigramsPerKilogram);
    }

    public get DecagramsPerKilogram(): number {
        if(this.decagramsperkilogramLazy !== null){
            return this.decagramsperkilogramLazy;
        }
        return this.decagramsperkilogramLazy = this.convertFromBase(MassFractionUnits.DecagramsPerKilogram);
    }

    public get HectogramsPerKilogram(): number {
        if(this.hectogramsperkilogramLazy !== null){
            return this.hectogramsperkilogramLazy;
        }
        return this.hectogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.HectogramsPerKilogram);
    }

    public get KilogramsPerKilogram(): number {
        if(this.kilogramsperkilogramLazy !== null){
            return this.kilogramsperkilogramLazy;
        }
        return this.kilogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.KilogramsPerKilogram);
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

    public static FromNanogramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.NanogramsPerGram);
    }

    public static FromMicrogramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.MicrogramsPerGram);
    }

    public static FromCentigramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.CentigramsPerGram);
    }

    public static FromDecigramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecigramsPerGram);
    }

    public static FromDecagramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecagramsPerGram);
    }

    public static FromHectogramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.HectogramsPerGram);
    }

    public static FromKilogramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.KilogramsPerGram);
    }

    public static FromNanogramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.NanogramsPerKilogram);
    }

    public static FromMicrogramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.MicrogramsPerKilogram);
    }

    public static FromCentigramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.CentigramsPerKilogram);
    }

    public static FromDecigramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecigramsPerKilogram);
    }

    public static FromDecagramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecagramsPerKilogram);
    }

    public static FromHectogramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.HectogramsPerKilogram);
    }

    public static FromKilogramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.KilogramsPerKilogram);
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
            case MassFractionUnits.NanogramsPerGram:
                return (this.value) / 1e-9;
            case MassFractionUnits.MicrogramsPerGram:
                return (this.value) / 0.000001;
            case MassFractionUnits.CentigramsPerGram:
                return (this.value) / 0.01;
            case MassFractionUnits.DecigramsPerGram:
                return (this.value) / 0.1;
            case MassFractionUnits.DecagramsPerGram:
                return (this.value) / 10;
            case MassFractionUnits.HectogramsPerGram:
                return (this.value) / 100;
            case MassFractionUnits.KilogramsPerGram:
                return (this.value) / 1000;
            case MassFractionUnits.NanogramsPerKilogram:
                return (this.value*1e3) / 1e-9;
            case MassFractionUnits.MicrogramsPerKilogram:
                return (this.value*1e3) / 0.000001;
            case MassFractionUnits.CentigramsPerKilogram:
                return (this.value*1e3) / 0.01;
            case MassFractionUnits.DecigramsPerKilogram:
                return (this.value*1e3) / 0.1;
            case MassFractionUnits.DecagramsPerKilogram:
                return (this.value*1e3) / 10;
            case MassFractionUnits.HectogramsPerKilogram:
                return (this.value*1e3) / 100;
            case MassFractionUnits.KilogramsPerKilogram:
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
            case MassFractionUnits.NanogramsPerGram:
                return (value) * 1e-9;
            case MassFractionUnits.MicrogramsPerGram:
                return (value) * 0.000001;
            case MassFractionUnits.CentigramsPerGram:
                return (value) * 0.01;
            case MassFractionUnits.DecigramsPerGram:
                return (value) * 0.1;
            case MassFractionUnits.DecagramsPerGram:
                return (value) * 10;
            case MassFractionUnits.HectogramsPerGram:
                return (value) * 100;
            case MassFractionUnits.KilogramsPerGram:
                return (value) * 1000;
            case MassFractionUnits.NanogramsPerKilogram:
                return (value/1e3) * 1e-9;
            case MassFractionUnits.MicrogramsPerKilogram:
                return (value/1e3) * 0.000001;
            case MassFractionUnits.CentigramsPerKilogram:
                return (value/1e3) * 0.01;
            case MassFractionUnits.DecigramsPerKilogram:
                return (value/1e3) * 0.1;
            case MassFractionUnits.DecagramsPerKilogram:
                return (value/1e3) * 10;
            case MassFractionUnits.HectogramsPerKilogram:
                return (value/1e3) * 100;
            case MassFractionUnits.KilogramsPerKilogram:
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
            case MassFractionUnits.NanogramsPerGram:
                return this.NanogramsPerGram + ` g/g`;
            case MassFractionUnits.MicrogramsPerGram:
                return this.MicrogramsPerGram + ` g/g`;
            case MassFractionUnits.CentigramsPerGram:
                return this.CentigramsPerGram + ` g/g`;
            case MassFractionUnits.DecigramsPerGram:
                return this.DecigramsPerGram + ` g/g`;
            case MassFractionUnits.DecagramsPerGram:
                return this.DecagramsPerGram + ` g/g`;
            case MassFractionUnits.HectogramsPerGram:
                return this.HectogramsPerGram + ` g/g`;
            case MassFractionUnits.KilogramsPerGram:
                return this.KilogramsPerGram + ` g/g`;
            case MassFractionUnits.NanogramsPerKilogram:
                return this.NanogramsPerKilogram + ` g/kg`;
            case MassFractionUnits.MicrogramsPerKilogram:
                return this.MicrogramsPerKilogram + ` g/kg`;
            case MassFractionUnits.CentigramsPerKilogram:
                return this.CentigramsPerKilogram + ` g/kg`;
            case MassFractionUnits.DecigramsPerKilogram:
                return this.DecigramsPerKilogram + ` g/kg`;
            case MassFractionUnits.DecagramsPerKilogram:
                return this.DecagramsPerKilogram + ` g/kg`;
            case MassFractionUnits.HectogramsPerKilogram:
                return this.HectogramsPerKilogram + ` g/kg`;
            case MassFractionUnits.KilogramsPerKilogram:
                return this.KilogramsPerKilogram + ` g/kg`;
        default:
            break;
        }
        return this.value.toString();
    }
}
