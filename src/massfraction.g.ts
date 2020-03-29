/** MassFractionUnits enumeration */
export enum MassFractionUnits {
    /** */
    DecimalFractions,
    /** */
    GramsPerGram,
    /** */
    GramsPerKilogram,
    /** */
    Percent,
    /** */
    PartsPerThousand,
    /** */
    PartsPerMillion,
    /** */
    PartsPerBillion,
    /** */
    PartsPerTrillion,
    /** */
    NanogramsPerGram,
    /** */
    MicrogramsPerGram,
    /** */
    MilligramsPerGram,
    /** */
    CentigramsPerGram,
    /** */
    DecigramsPerGram,
    /** */
    DecagramsPerGram,
    /** */
    HectogramsPerGram,
    /** */
    KilogramsPerGram,
    /** */
    NanogramsPerKilogram,
    /** */
    MicrogramsPerKilogram,
    /** */
    MilligramsPerKilogram,
    /** */
    CentigramsPerKilogram,
    /** */
    DecigramsPerKilogram,
    /** */
    DecagramsPerKilogram,
    /** */
    HectogramsPerKilogram,
    /** */
    KilogramsPerKilogram
}

/** The mass fraction is defined as the mass of a constituent divided by the total mass of the mixture. */
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
    private milligramspergramLazy: number | null = null;
    private centigramspergramLazy: number | null = null;
    private decigramspergramLazy: number | null = null;
    private decagramspergramLazy: number | null = null;
    private hectogramspergramLazy: number | null = null;
    private kilogramspergramLazy: number | null = null;
    private nanogramsperkilogramLazy: number | null = null;
    private microgramsperkilogramLazy: number | null = null;
    private milligramsperkilogramLazy: number | null = null;
    private centigramsperkilogramLazy: number | null = null;
    private decigramsperkilogramLazy: number | null = null;
    private decagramsperkilogramLazy: number | null = null;
    private hectogramsperkilogramLazy: number | null = null;
    private kilogramsperkilogramLazy: number | null = null;

    /**
     * Create a new MassFraction.
     * @param value The value.
     * @param fromUnit The ‘MassFraction’ unit to create from.
     * The default unit is DecimalFractions
     */
    public constructor(value: number, fromUnit: MassFractionUnits = MassFractionUnits.DecimalFractions) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MassFraction is DecimalFractions.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get DecimalFractions(): number {
        if(this.decimalfractionsLazy !== null){
            return this.decimalfractionsLazy;
        }
        return this.decimalfractionsLazy = this.convertFromBase(MassFractionUnits.DecimalFractions);
    }

    /** */
    public get GramsPerGram(): number {
        if(this.gramspergramLazy !== null){
            return this.gramspergramLazy;
        }
        return this.gramspergramLazy = this.convertFromBase(MassFractionUnits.GramsPerGram);
    }

    /** */
    public get GramsPerKilogram(): number {
        if(this.gramsperkilogramLazy !== null){
            return this.gramsperkilogramLazy;
        }
        return this.gramsperkilogramLazy = this.convertFromBase(MassFractionUnits.GramsPerKilogram);
    }

    /** */
    public get Percent(): number {
        if(this.percentLazy !== null){
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(MassFractionUnits.Percent);
    }

    /** */
    public get PartsPerThousand(): number {
        if(this.partsperthousandLazy !== null){
            return this.partsperthousandLazy;
        }
        return this.partsperthousandLazy = this.convertFromBase(MassFractionUnits.PartsPerThousand);
    }

    /** */
    public get PartsPerMillion(): number {
        if(this.partspermillionLazy !== null){
            return this.partspermillionLazy;
        }
        return this.partspermillionLazy = this.convertFromBase(MassFractionUnits.PartsPerMillion);
    }

    /** */
    public get PartsPerBillion(): number {
        if(this.partsperbillionLazy !== null){
            return this.partsperbillionLazy;
        }
        return this.partsperbillionLazy = this.convertFromBase(MassFractionUnits.PartsPerBillion);
    }

    /** */
    public get PartsPerTrillion(): number {
        if(this.partspertrillionLazy !== null){
            return this.partspertrillionLazy;
        }
        return this.partspertrillionLazy = this.convertFromBase(MassFractionUnits.PartsPerTrillion);
    }

    /** */
    public get NanogramsPerGram(): number {
        if(this.nanogramspergramLazy !== null){
            return this.nanogramspergramLazy;
        }
        return this.nanogramspergramLazy = this.convertFromBase(MassFractionUnits.NanogramsPerGram);
    }

    /** */
    public get MicrogramsPerGram(): number {
        if(this.microgramspergramLazy !== null){
            return this.microgramspergramLazy;
        }
        return this.microgramspergramLazy = this.convertFromBase(MassFractionUnits.MicrogramsPerGram);
    }

    /** */
    public get MilligramsPerGram(): number {
        if(this.milligramspergramLazy !== null){
            return this.milligramspergramLazy;
        }
        return this.milligramspergramLazy = this.convertFromBase(MassFractionUnits.MilligramsPerGram);
    }

    /** */
    public get CentigramsPerGram(): number {
        if(this.centigramspergramLazy !== null){
            return this.centigramspergramLazy;
        }
        return this.centigramspergramLazy = this.convertFromBase(MassFractionUnits.CentigramsPerGram);
    }

    /** */
    public get DecigramsPerGram(): number {
        if(this.decigramspergramLazy !== null){
            return this.decigramspergramLazy;
        }
        return this.decigramspergramLazy = this.convertFromBase(MassFractionUnits.DecigramsPerGram);
    }

    /** */
    public get DecagramsPerGram(): number {
        if(this.decagramspergramLazy !== null){
            return this.decagramspergramLazy;
        }
        return this.decagramspergramLazy = this.convertFromBase(MassFractionUnits.DecagramsPerGram);
    }

    /** */
    public get HectogramsPerGram(): number {
        if(this.hectogramspergramLazy !== null){
            return this.hectogramspergramLazy;
        }
        return this.hectogramspergramLazy = this.convertFromBase(MassFractionUnits.HectogramsPerGram);
    }

    /** */
    public get KilogramsPerGram(): number {
        if(this.kilogramspergramLazy !== null){
            return this.kilogramspergramLazy;
        }
        return this.kilogramspergramLazy = this.convertFromBase(MassFractionUnits.KilogramsPerGram);
    }

    /** */
    public get NanogramsPerKilogram(): number {
        if(this.nanogramsperkilogramLazy !== null){
            return this.nanogramsperkilogramLazy;
        }
        return this.nanogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.NanogramsPerKilogram);
    }

    /** */
    public get MicrogramsPerKilogram(): number {
        if(this.microgramsperkilogramLazy !== null){
            return this.microgramsperkilogramLazy;
        }
        return this.microgramsperkilogramLazy = this.convertFromBase(MassFractionUnits.MicrogramsPerKilogram);
    }

    /** */
    public get MilligramsPerKilogram(): number {
        if(this.milligramsperkilogramLazy !== null){
            return this.milligramsperkilogramLazy;
        }
        return this.milligramsperkilogramLazy = this.convertFromBase(MassFractionUnits.MilligramsPerKilogram);
    }

    /** */
    public get CentigramsPerKilogram(): number {
        if(this.centigramsperkilogramLazy !== null){
            return this.centigramsperkilogramLazy;
        }
        return this.centigramsperkilogramLazy = this.convertFromBase(MassFractionUnits.CentigramsPerKilogram);
    }

    /** */
    public get DecigramsPerKilogram(): number {
        if(this.decigramsperkilogramLazy !== null){
            return this.decigramsperkilogramLazy;
        }
        return this.decigramsperkilogramLazy = this.convertFromBase(MassFractionUnits.DecigramsPerKilogram);
    }

    /** */
    public get DecagramsPerKilogram(): number {
        if(this.decagramsperkilogramLazy !== null){
            return this.decagramsperkilogramLazy;
        }
        return this.decagramsperkilogramLazy = this.convertFromBase(MassFractionUnits.DecagramsPerKilogram);
    }

    /** */
    public get HectogramsPerKilogram(): number {
        if(this.hectogramsperkilogramLazy !== null){
            return this.hectogramsperkilogramLazy;
        }
        return this.hectogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.HectogramsPerKilogram);
    }

    /** */
    public get KilogramsPerKilogram(): number {
        if(this.kilogramsperkilogramLazy !== null){
            return this.kilogramsperkilogramLazy;
        }
        return this.kilogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.KilogramsPerKilogram);
    }

    /**
     * Create a new MassFraction instance from a DecimalFractions
     *
     * @param value The unit as DecimalFractions to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromDecimalFractions(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecimalFractions);
    }

    /**
     * Create a new MassFraction instance from a GramsPerGram
     *
     * @param value The unit as GramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromGramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.GramsPerGram);
    }

    /**
     * Create a new MassFraction instance from a GramsPerKilogram
     *
     * @param value The unit as GramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromGramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.GramsPerKilogram);
    }

    /**
     * Create a new MassFraction instance from a Percent
     *
     * @param value The unit as Percent to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromPercent(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.Percent);
    }

    /**
     * Create a new MassFraction instance from a PartsPerThousand
     *
     * @param value The unit as PartsPerThousand to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromPartsPerThousand(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.PartsPerThousand);
    }

    /**
     * Create a new MassFraction instance from a PartsPerMillion
     *
     * @param value The unit as PartsPerMillion to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromPartsPerMillion(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.PartsPerMillion);
    }

    /**
     * Create a new MassFraction instance from a PartsPerBillion
     *
     * @param value The unit as PartsPerBillion to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromPartsPerBillion(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.PartsPerBillion);
    }

    /**
     * Create a new MassFraction instance from a PartsPerTrillion
     *
     * @param value The unit as PartsPerTrillion to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromPartsPerTrillion(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.PartsPerTrillion);
    }

    /**
     * Create a new MassFraction instance from a NanogramsPerGram
     *
     * @param value The unit as NanogramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromNanogramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.NanogramsPerGram);
    }

    /**
     * Create a new MassFraction instance from a MicrogramsPerGram
     *
     * @param value The unit as MicrogramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromMicrogramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.MicrogramsPerGram);
    }

    /**
     * Create a new MassFraction instance from a MilligramsPerGram
     *
     * @param value The unit as MilligramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromMilligramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.MilligramsPerGram);
    }

    /**
     * Create a new MassFraction instance from a CentigramsPerGram
     *
     * @param value The unit as CentigramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromCentigramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.CentigramsPerGram);
    }

    /**
     * Create a new MassFraction instance from a DecigramsPerGram
     *
     * @param value The unit as DecigramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromDecigramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecigramsPerGram);
    }

    /**
     * Create a new MassFraction instance from a DecagramsPerGram
     *
     * @param value The unit as DecagramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromDecagramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecagramsPerGram);
    }

    /**
     * Create a new MassFraction instance from a HectogramsPerGram
     *
     * @param value The unit as HectogramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromHectogramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.HectogramsPerGram);
    }

    /**
     * Create a new MassFraction instance from a KilogramsPerGram
     *
     * @param value The unit as KilogramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromKilogramsPerGram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.KilogramsPerGram);
    }

    /**
     * Create a new MassFraction instance from a NanogramsPerKilogram
     *
     * @param value The unit as NanogramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromNanogramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.NanogramsPerKilogram);
    }

    /**
     * Create a new MassFraction instance from a MicrogramsPerKilogram
     *
     * @param value The unit as MicrogramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromMicrogramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.MicrogramsPerKilogram);
    }

    /**
     * Create a new MassFraction instance from a MilligramsPerKilogram
     *
     * @param value The unit as MilligramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromMilligramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.MilligramsPerKilogram);
    }

    /**
     * Create a new MassFraction instance from a CentigramsPerKilogram
     *
     * @param value The unit as CentigramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromCentigramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.CentigramsPerKilogram);
    }

    /**
     * Create a new MassFraction instance from a DecigramsPerKilogram
     *
     * @param value The unit as DecigramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromDecigramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecigramsPerKilogram);
    }

    /**
     * Create a new MassFraction instance from a DecagramsPerKilogram
     *
     * @param value The unit as DecagramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromDecagramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.DecagramsPerKilogram);
    }

    /**
     * Create a new MassFraction instance from a HectogramsPerKilogram
     *
     * @param value The unit as HectogramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    public static FromHectogramsPerKilogram(value: number): MassFraction {
        return new MassFraction(value, MassFractionUnits.HectogramsPerKilogram);
    }

    /**
     * Create a new MassFraction instance from a KilogramsPerKilogram
     *
     * @param value The unit as KilogramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
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
            case MassFractionUnits.MilligramsPerGram:
                return (this.value) / 0.001;
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
            case MassFractionUnits.MilligramsPerKilogram:
                return (this.value*1e3) / 0.001;
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
            case MassFractionUnits.MilligramsPerGram:
                return (value) * 0.001;
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
            case MassFractionUnits.MilligramsPerKilogram:
                return (value/1e3) * 0.001;
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

    /**
     * Format the MassFraction to string.
     * Note! the default format for MassFraction is DecimalFractions.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassFraction.
     * @returns The string format of the MassFraction.
     */
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
                return this.NanogramsPerGram + ` `;
            case MassFractionUnits.MicrogramsPerGram:
                return this.MicrogramsPerGram + ` `;
            case MassFractionUnits.MilligramsPerGram:
                return this.MilligramsPerGram + ` `;
            case MassFractionUnits.CentigramsPerGram:
                return this.CentigramsPerGram + ` `;
            case MassFractionUnits.DecigramsPerGram:
                return this.DecigramsPerGram + ` `;
            case MassFractionUnits.DecagramsPerGram:
                return this.DecagramsPerGram + ` `;
            case MassFractionUnits.HectogramsPerGram:
                return this.HectogramsPerGram + ` `;
            case MassFractionUnits.KilogramsPerGram:
                return this.KilogramsPerGram + ` `;
            case MassFractionUnits.NanogramsPerKilogram:
                return this.NanogramsPerKilogram + ` `;
            case MassFractionUnits.MicrogramsPerKilogram:
                return this.MicrogramsPerKilogram + ` `;
            case MassFractionUnits.MilligramsPerKilogram:
                return this.MilligramsPerKilogram + ` `;
            case MassFractionUnits.CentigramsPerKilogram:
                return this.CentigramsPerKilogram + ` `;
            case MassFractionUnits.DecigramsPerKilogram:
                return this.DecigramsPerKilogram + ` `;
            case MassFractionUnits.DecagramsPerKilogram:
                return this.DecagramsPerKilogram + ` `;
            case MassFractionUnits.HectogramsPerKilogram:
                return this.HectogramsPerKilogram + ` `;
            case MassFractionUnits.KilogramsPerKilogram:
                return this.KilogramsPerKilogram + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given MassFraction are equals to the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns True if the given MassFraction are equal to the current MassFraction.
     */
    public equals(massFraction: MassFraction): boolean {
        return this.value === massFraction.BaseValue;
    }

    /**
     * Compare the given MassFraction against the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns 0 if they are equal, -1 if the current MassFraction is less then other, 1 if the current MassFraction is greater then other.
     */
    public compareTo(massFraction: MassFraction): number {

        if (this.value > massFraction.BaseValue)
            return 1;
        if (this.value < massFraction.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given MassFraction with the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns A new MassFraction instance with the results.
     */
    public add(massFraction: MassFraction): MassFraction {
        return new MassFraction(this.value + massFraction.BaseValue)
    }

    /**
     * Subtract the given MassFraction with the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns A new MassFraction instance with the results.
     */
    public subtract(massFraction: MassFraction): MassFraction {
        return new MassFraction(this.value - massFraction.BaseValue)
    }

    /**
     * Multiply the given MassFraction with the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns A new MassFraction instance with the results.
     */
    public multiply(massFraction: MassFraction): MassFraction {
        return new MassFraction(this.value * massFraction.BaseValue)
    }

    /**
     * Divide the given MassFraction with the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns A new MassFraction instance with the results.
     */
    public divide(massFraction: MassFraction): MassFraction {
        return new MassFraction(this.value / massFraction.BaseValue)
    }

    /**
     * Modulo the given MassFraction with the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns A new MassFraction instance with the results.
     */
    public modulo(massFraction: MassFraction): MassFraction {
        return new MassFraction(this.value % massFraction.BaseValue)
    }

    /**
     * Pow the given MassFraction with the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns A new MassFraction instance with the results.
     */
    public pow(massFraction: MassFraction): MassFraction {
        return new MassFraction(this.value ** massFraction.BaseValue)
    }
}
