/** VolumeConcentrationUnits enumeration */
export enum VolumeConcentrationUnits {
    /** */
    DecimalFractions,
    /** */
    LitersPerLiter,
    /** */
    LitersPerMililiter,
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
    PicolitersPerLiter,
    /** */
    NanolitersPerLiter,
    /** */
    MicrolitersPerLiter,
    /** */
    MillilitersPerLiter,
    /** */
    CentilitersPerLiter,
    /** */
    DecilitersPerLiter,
    /** */
    PicolitersPerMililiter,
    /** */
    NanolitersPerMililiter,
    /** */
    MicrolitersPerMililiter,
    /** */
    MillilitersPerMililiter,
    /** */
    CentilitersPerMililiter,
    /** */
    DecilitersPerMililiter
}

/** The volume concentration (not to be confused with volume fraction) is defined as the volume of a constituent divided by the total volume of the mixture. */
export class VolumeConcentration {
    private value: number;
    private decimalfractionsLazy: number | null = null;
    private litersperliterLazy: number | null = null;
    private literspermililiterLazy: number | null = null;
    private percentLazy: number | null = null;
    private partsperthousandLazy: number | null = null;
    private partspermillionLazy: number | null = null;
    private partsperbillionLazy: number | null = null;
    private partspertrillionLazy: number | null = null;
    private picolitersperliterLazy: number | null = null;
    private nanolitersperliterLazy: number | null = null;
    private microlitersperliterLazy: number | null = null;
    private millilitersperliterLazy: number | null = null;
    private centilitersperliterLazy: number | null = null;
    private decilitersperliterLazy: number | null = null;
    private picoliterspermililiterLazy: number | null = null;
    private nanoliterspermililiterLazy: number | null = null;
    private microliterspermililiterLazy: number | null = null;
    private milliliterspermililiterLazy: number | null = null;
    private centiliterspermililiterLazy: number | null = null;
    private deciliterspermililiterLazy: number | null = null;

    /**
     * Create a new VolumeConcentration.
     * @param value The value.
     * @param fromUnit The ‘VolumeConcentration’ unit to create from.
     * The default unit is DecimalFractions
     */
    public constructor(value: number, fromUnit: VolumeConcentrationUnits = VolumeConcentrationUnits.DecimalFractions) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of VolumeConcentration is DecimalFractions.
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
        return this.decimalfractionsLazy = this.convertFromBase(VolumeConcentrationUnits.DecimalFractions);
    }

    /** */
    public get LitersPerLiter(): number {
        if(this.litersperliterLazy !== null){
            return this.litersperliterLazy;
        }
        return this.litersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.LitersPerLiter);
    }

    /** */
    public get LitersPerMililiter(): number {
        if(this.literspermililiterLazy !== null){
            return this.literspermililiterLazy;
        }
        return this.literspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.LitersPerMililiter);
    }

    /** */
    public get Percent(): number {
        if(this.percentLazy !== null){
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(VolumeConcentrationUnits.Percent);
    }

    /** */
    public get PartsPerThousand(): number {
        if(this.partsperthousandLazy !== null){
            return this.partsperthousandLazy;
        }
        return this.partsperthousandLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerThousand);
    }

    /** */
    public get PartsPerMillion(): number {
        if(this.partspermillionLazy !== null){
            return this.partspermillionLazy;
        }
        return this.partspermillionLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerMillion);
    }

    /** */
    public get PartsPerBillion(): number {
        if(this.partsperbillionLazy !== null){
            return this.partsperbillionLazy;
        }
        return this.partsperbillionLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerBillion);
    }

    /** */
    public get PartsPerTrillion(): number {
        if(this.partspertrillionLazy !== null){
            return this.partspertrillionLazy;
        }
        return this.partspertrillionLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerTrillion);
    }

    /** */
    public get PicolitersPerLiter(): number {
        if(this.picolitersperliterLazy !== null){
            return this.picolitersperliterLazy;
        }
        return this.picolitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.PicolitersPerLiter);
    }

    /** */
    public get NanolitersPerLiter(): number {
        if(this.nanolitersperliterLazy !== null){
            return this.nanolitersperliterLazy;
        }
        return this.nanolitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.NanolitersPerLiter);
    }

    /** */
    public get MicrolitersPerLiter(): number {
        if(this.microlitersperliterLazy !== null){
            return this.microlitersperliterLazy;
        }
        return this.microlitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.MicrolitersPerLiter);
    }

    /** */
    public get MillilitersPerLiter(): number {
        if(this.millilitersperliterLazy !== null){
            return this.millilitersperliterLazy;
        }
        return this.millilitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.MillilitersPerLiter);
    }

    /** */
    public get CentilitersPerLiter(): number {
        if(this.centilitersperliterLazy !== null){
            return this.centilitersperliterLazy;
        }
        return this.centilitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.CentilitersPerLiter);
    }

    /** */
    public get DecilitersPerLiter(): number {
        if(this.decilitersperliterLazy !== null){
            return this.decilitersperliterLazy;
        }
        return this.decilitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.DecilitersPerLiter);
    }

    /** */
    public get PicolitersPerMililiter(): number {
        if(this.picoliterspermililiterLazy !== null){
            return this.picoliterspermililiterLazy;
        }
        return this.picoliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.PicolitersPerMililiter);
    }

    /** */
    public get NanolitersPerMililiter(): number {
        if(this.nanoliterspermililiterLazy !== null){
            return this.nanoliterspermililiterLazy;
        }
        return this.nanoliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.NanolitersPerMililiter);
    }

    /** */
    public get MicrolitersPerMililiter(): number {
        if(this.microliterspermililiterLazy !== null){
            return this.microliterspermililiterLazy;
        }
        return this.microliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.MicrolitersPerMililiter);
    }

    /** */
    public get MillilitersPerMililiter(): number {
        if(this.milliliterspermililiterLazy !== null){
            return this.milliliterspermililiterLazy;
        }
        return this.milliliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.MillilitersPerMililiter);
    }

    /** */
    public get CentilitersPerMililiter(): number {
        if(this.centiliterspermililiterLazy !== null){
            return this.centiliterspermililiterLazy;
        }
        return this.centiliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.CentilitersPerMililiter);
    }

    /** */
    public get DecilitersPerMililiter(): number {
        if(this.deciliterspermililiterLazy !== null){
            return this.deciliterspermililiterLazy;
        }
        return this.deciliterspermililiterLazy = this.convertFromBase(VolumeConcentrationUnits.DecilitersPerMililiter);
    }

    /**
     * Create a new VolumeConcentration instance from a DecimalFractions
     *
     * @param value The unit as DecimalFractions to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromDecimalFractions(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.DecimalFractions);
    }

    /**
     * Create a new VolumeConcentration instance from a LitersPerLiter
     *
     * @param value The unit as LitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromLitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.LitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a LitersPerMililiter
     *
     * @param value The unit as LitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromLitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.LitersPerMililiter);
    }

    /**
     * Create a new VolumeConcentration instance from a Percent
     *
     * @param value The unit as Percent to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPercent(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Percent);
    }

    /**
     * Create a new VolumeConcentration instance from a PartsPerThousand
     *
     * @param value The unit as PartsPerThousand to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPartsPerThousand(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerThousand);
    }

    /**
     * Create a new VolumeConcentration instance from a PartsPerMillion
     *
     * @param value The unit as PartsPerMillion to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPartsPerMillion(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerMillion);
    }

    /**
     * Create a new VolumeConcentration instance from a PartsPerBillion
     *
     * @param value The unit as PartsPerBillion to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPartsPerBillion(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerBillion);
    }

    /**
     * Create a new VolumeConcentration instance from a PartsPerTrillion
     *
     * @param value The unit as PartsPerTrillion to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPartsPerTrillion(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerTrillion);
    }

    /**
     * Create a new VolumeConcentration instance from a PicolitersPerLiter
     *
     * @param value The unit as PicolitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPicolitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PicolitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a NanolitersPerLiter
     *
     * @param value The unit as NanolitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromNanolitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.NanolitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a MicrolitersPerLiter
     *
     * @param value The unit as MicrolitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromMicrolitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.MicrolitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a MillilitersPerLiter
     *
     * @param value The unit as MillilitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromMillilitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.MillilitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a CentilitersPerLiter
     *
     * @param value The unit as CentilitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromCentilitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.CentilitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a DecilitersPerLiter
     *
     * @param value The unit as DecilitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromDecilitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.DecilitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a PicolitersPerMililiter
     *
     * @param value The unit as PicolitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPicolitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PicolitersPerMililiter);
    }

    /**
     * Create a new VolumeConcentration instance from a NanolitersPerMililiter
     *
     * @param value The unit as NanolitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromNanolitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.NanolitersPerMililiter);
    }

    /**
     * Create a new VolumeConcentration instance from a MicrolitersPerMililiter
     *
     * @param value The unit as MicrolitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromMicrolitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.MicrolitersPerMililiter);
    }

    /**
     * Create a new VolumeConcentration instance from a MillilitersPerMililiter
     *
     * @param value The unit as MillilitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromMillilitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.MillilitersPerMililiter);
    }

    /**
     * Create a new VolumeConcentration instance from a CentilitersPerMililiter
     *
     * @param value The unit as CentilitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromCentilitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.CentilitersPerMililiter);
    }

    /**
     * Create a new VolumeConcentration instance from a DecilitersPerMililiter
     *
     * @param value The unit as DecilitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromDecilitersPerMililiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.DecilitersPerMililiter);
    }

    /**
     * Convert VolumeConcentration to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: VolumeConcentrationUnits): number {
        switch (toUnit) {
            case VolumeConcentrationUnits.DecimalFractions: return this.DecimalFractions;
            case VolumeConcentrationUnits.LitersPerLiter: return this.LitersPerLiter;
            case VolumeConcentrationUnits.LitersPerMililiter: return this.LitersPerMililiter;
            case VolumeConcentrationUnits.Percent: return this.Percent;
            case VolumeConcentrationUnits.PartsPerThousand: return this.PartsPerThousand;
            case VolumeConcentrationUnits.PartsPerMillion: return this.PartsPerMillion;
            case VolumeConcentrationUnits.PartsPerBillion: return this.PartsPerBillion;
            case VolumeConcentrationUnits.PartsPerTrillion: return this.PartsPerTrillion;
            case VolumeConcentrationUnits.PicolitersPerLiter: return this.PicolitersPerLiter;
            case VolumeConcentrationUnits.NanolitersPerLiter: return this.NanolitersPerLiter;
            case VolumeConcentrationUnits.MicrolitersPerLiter: return this.MicrolitersPerLiter;
            case VolumeConcentrationUnits.MillilitersPerLiter: return this.MillilitersPerLiter;
            case VolumeConcentrationUnits.CentilitersPerLiter: return this.CentilitersPerLiter;
            case VolumeConcentrationUnits.DecilitersPerLiter: return this.DecilitersPerLiter;
            case VolumeConcentrationUnits.PicolitersPerMililiter: return this.PicolitersPerMililiter;
            case VolumeConcentrationUnits.NanolitersPerMililiter: return this.NanolitersPerMililiter;
            case VolumeConcentrationUnits.MicrolitersPerMililiter: return this.MicrolitersPerMililiter;
            case VolumeConcentrationUnits.MillilitersPerMililiter: return this.MillilitersPerMililiter;
            case VolumeConcentrationUnits.CentilitersPerMililiter: return this.CentilitersPerMililiter;
            case VolumeConcentrationUnits.DecilitersPerMililiter: return this.DecilitersPerMililiter;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: VolumeConcentrationUnits): number {
        switch (toUnit) {
                
            case VolumeConcentrationUnits.DecimalFractions:
                return this.value;
            case VolumeConcentrationUnits.LitersPerLiter:
                return this.value;
            case VolumeConcentrationUnits.LitersPerMililiter:
                return this.value * 1e-3;
            case VolumeConcentrationUnits.Percent:
                return this.value * 1e2;
            case VolumeConcentrationUnits.PartsPerThousand:
                return this.value * 1e3;
            case VolumeConcentrationUnits.PartsPerMillion:
                return this.value * 1e6;
            case VolumeConcentrationUnits.PartsPerBillion:
                return this.value * 1e9;
            case VolumeConcentrationUnits.PartsPerTrillion:
                return this.value * 1e12;
            case VolumeConcentrationUnits.PicolitersPerLiter:
                return (this.value) / 1e-12;
            case VolumeConcentrationUnits.NanolitersPerLiter:
                return (this.value) / 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerLiter:
                return (this.value) / 0.000001;
            case VolumeConcentrationUnits.MillilitersPerLiter:
                return (this.value) / 0.001;
            case VolumeConcentrationUnits.CentilitersPerLiter:
                return (this.value) / 0.01;
            case VolumeConcentrationUnits.DecilitersPerLiter:
                return (this.value) / 0.1;
            case VolumeConcentrationUnits.PicolitersPerMililiter:
                return (this.value * 1e-3) / 1e-12;
            case VolumeConcentrationUnits.NanolitersPerMililiter:
                return (this.value * 1e-3) / 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerMililiter:
                return (this.value * 1e-3) / 0.000001;
            case VolumeConcentrationUnits.MillilitersPerMililiter:
                return (this.value * 1e-3) / 0.001;
            case VolumeConcentrationUnits.CentilitersPerMililiter:
                return (this.value * 1e-3) / 0.01;
            case VolumeConcentrationUnits.DecilitersPerMililiter:
                return (this.value * 1e-3) / 0.1;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: VolumeConcentrationUnits): number {
        switch (fromUnit) {
                
            case VolumeConcentrationUnits.DecimalFractions:
                return value;
            case VolumeConcentrationUnits.LitersPerLiter:
                return value;
            case VolumeConcentrationUnits.LitersPerMililiter:
                return value / 1e-3;
            case VolumeConcentrationUnits.Percent:
                return value / 1e2;
            case VolumeConcentrationUnits.PartsPerThousand:
                return value / 1e3;
            case VolumeConcentrationUnits.PartsPerMillion:
                return value / 1e6;
            case VolumeConcentrationUnits.PartsPerBillion:
                return value / 1e9;
            case VolumeConcentrationUnits.PartsPerTrillion:
                return value / 1e12;
            case VolumeConcentrationUnits.PicolitersPerLiter:
                return (value) * 1e-12;
            case VolumeConcentrationUnits.NanolitersPerLiter:
                return (value) * 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerLiter:
                return (value) * 0.000001;
            case VolumeConcentrationUnits.MillilitersPerLiter:
                return (value) * 0.001;
            case VolumeConcentrationUnits.CentilitersPerLiter:
                return (value) * 0.01;
            case VolumeConcentrationUnits.DecilitersPerLiter:
                return (value) * 0.1;
            case VolumeConcentrationUnits.PicolitersPerMililiter:
                return (value / 1e-3) * 1e-12;
            case VolumeConcentrationUnits.NanolitersPerMililiter:
                return (value / 1e-3) * 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerMililiter:
                return (value / 1e-3) * 0.000001;
            case VolumeConcentrationUnits.MillilitersPerMililiter:
                return (value / 1e-3) * 0.001;
            case VolumeConcentrationUnits.CentilitersPerMililiter:
                return (value / 1e-3) * 0.01;
            case VolumeConcentrationUnits.DecilitersPerMililiter:
                return (value / 1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the VolumeConcentration to string.
     * Note! the default format for VolumeConcentration is DecimalFractions.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the VolumeConcentration.
     * @returns The string format of the VolumeConcentration.
     */
    public toString(unit: VolumeConcentrationUnits = VolumeConcentrationUnits.DecimalFractions): string {

        switch (unit) {
            
            case VolumeConcentrationUnits.DecimalFractions:
                return this.DecimalFractions + ` `;
            case VolumeConcentrationUnits.LitersPerLiter:
                return this.LitersPerLiter + ` L/L`;
            case VolumeConcentrationUnits.LitersPerMililiter:
                return this.LitersPerMililiter + ` L/mL`;
            case VolumeConcentrationUnits.Percent:
                return this.Percent + ` %`;
            case VolumeConcentrationUnits.PartsPerThousand:
                return this.PartsPerThousand + ` ‰`;
            case VolumeConcentrationUnits.PartsPerMillion:
                return this.PartsPerMillion + ` ppm`;
            case VolumeConcentrationUnits.PartsPerBillion:
                return this.PartsPerBillion + ` ppb`;
            case VolumeConcentrationUnits.PartsPerTrillion:
                return this.PartsPerTrillion + ` ppt`;
            case VolumeConcentrationUnits.PicolitersPerLiter:
                return this.PicolitersPerLiter + ` pL/L`;
            case VolumeConcentrationUnits.NanolitersPerLiter:
                return this.NanolitersPerLiter + ` nL/L`;
            case VolumeConcentrationUnits.MicrolitersPerLiter:
                return this.MicrolitersPerLiter + ` μL/L`;
            case VolumeConcentrationUnits.MillilitersPerLiter:
                return this.MillilitersPerLiter + ` mL/L`;
            case VolumeConcentrationUnits.CentilitersPerLiter:
                return this.CentilitersPerLiter + ` cL/L`;
            case VolumeConcentrationUnits.DecilitersPerLiter:
                return this.DecilitersPerLiter + ` dL/L`;
            case VolumeConcentrationUnits.PicolitersPerMililiter:
                return this.PicolitersPerMililiter + ` pL/mL`;
            case VolumeConcentrationUnits.NanolitersPerMililiter:
                return this.NanolitersPerMililiter + ` nL/mL`;
            case VolumeConcentrationUnits.MicrolitersPerMililiter:
                return this.MicrolitersPerMililiter + ` μL/mL`;
            case VolumeConcentrationUnits.MillilitersPerMililiter:
                return this.MillilitersPerMililiter + ` mL/mL`;
            case VolumeConcentrationUnits.CentilitersPerMililiter:
                return this.CentilitersPerMililiter + ` cL/mL`;
            case VolumeConcentrationUnits.DecilitersPerMililiter:
                return this.DecilitersPerMililiter + ` dL/mL`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get VolumeConcentration unit abbreviation.
     * Note! the default abbreviation for VolumeConcentration is DecimalFractions.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the VolumeConcentration.
     * @returns The abbreviation string of VolumeConcentration.
     */
    public getUnitAbbreviation(unitAbbreviation: VolumeConcentrationUnits = VolumeConcentrationUnits.DecimalFractions): string {

        switch (unitAbbreviation) {
            
            case VolumeConcentrationUnits.DecimalFractions:
                return ``;
            case VolumeConcentrationUnits.LitersPerLiter:
                return `L/L`;
            case VolumeConcentrationUnits.LitersPerMililiter:
                return `L/mL`;
            case VolumeConcentrationUnits.Percent:
                return `%`;
            case VolumeConcentrationUnits.PartsPerThousand:
                return `‰`;
            case VolumeConcentrationUnits.PartsPerMillion:
                return `ppm`;
            case VolumeConcentrationUnits.PartsPerBillion:
                return `ppb`;
            case VolumeConcentrationUnits.PartsPerTrillion:
                return `ppt`;
            case VolumeConcentrationUnits.PicolitersPerLiter:
                return `pL/L`;
            case VolumeConcentrationUnits.NanolitersPerLiter:
                return `nL/L`;
            case VolumeConcentrationUnits.MicrolitersPerLiter:
                return `μL/L`;
            case VolumeConcentrationUnits.MillilitersPerLiter:
                return `mL/L`;
            case VolumeConcentrationUnits.CentilitersPerLiter:
                return `cL/L`;
            case VolumeConcentrationUnits.DecilitersPerLiter:
                return `dL/L`;
            case VolumeConcentrationUnits.PicolitersPerMililiter:
                return `pL/mL`;
            case VolumeConcentrationUnits.NanolitersPerMililiter:
                return `nL/mL`;
            case VolumeConcentrationUnits.MicrolitersPerMililiter:
                return `μL/mL`;
            case VolumeConcentrationUnits.MillilitersPerMililiter:
                return `mL/mL`;
            case VolumeConcentrationUnits.CentilitersPerMililiter:
                return `cL/mL`;
            case VolumeConcentrationUnits.DecilitersPerMililiter:
                return `dL/mL`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given VolumeConcentration are equals to the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns True if the given VolumeConcentration are equal to the current VolumeConcentration.
     */
    public equals(volumeConcentration: VolumeConcentration): boolean {
        return this.value === volumeConcentration.BaseValue;
    }

    /**
     * Compare the given VolumeConcentration against the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns 0 if they are equal, -1 if the current VolumeConcentration is less then other, 1 if the current VolumeConcentration is greater then other.
     */
    public compareTo(volumeConcentration: VolumeConcentration): number {

        if (this.value > volumeConcentration.BaseValue)
            return 1;
        if (this.value < volumeConcentration.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given VolumeConcentration with the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns A new VolumeConcentration instance with the results.
     */
    public add(volumeConcentration: VolumeConcentration): VolumeConcentration {
        return new VolumeConcentration(this.value + volumeConcentration.BaseValue)
    }

    /**
     * Subtract the given VolumeConcentration with the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns A new VolumeConcentration instance with the results.
     */
    public subtract(volumeConcentration: VolumeConcentration): VolumeConcentration {
        return new VolumeConcentration(this.value - volumeConcentration.BaseValue)
    }

    /**
     * Multiply the given VolumeConcentration with the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns A new VolumeConcentration instance with the results.
     */
    public multiply(volumeConcentration: VolumeConcentration): VolumeConcentration {
        return new VolumeConcentration(this.value * volumeConcentration.BaseValue)
    }

    /**
     * Divide the given VolumeConcentration with the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns A new VolumeConcentration instance with the results.
     */
    public divide(volumeConcentration: VolumeConcentration): VolumeConcentration {
        return new VolumeConcentration(this.value / volumeConcentration.BaseValue)
    }

    /**
     * Modulo the given VolumeConcentration with the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns A new VolumeConcentration instance with the results.
     */
    public modulo(volumeConcentration: VolumeConcentration): VolumeConcentration {
        return new VolumeConcentration(this.value % volumeConcentration.BaseValue)
    }

    /**
     * Pow the given VolumeConcentration with the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns A new VolumeConcentration instance with the results.
     */
    public pow(volumeConcentration: VolumeConcentration): VolumeConcentration {
        return new VolumeConcentration(this.value ** volumeConcentration.BaseValue)
    }
}
