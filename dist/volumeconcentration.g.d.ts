/** VolumeConcentrationUnits enumeration */
export declare enum VolumeConcentrationUnits {
    /** */
    DecimalFractions = 0,
    /** */
    LitersPerLiter = 1,
    /** */
    LitersPerMililiter = 2,
    /** */
    Percent = 3,
    /** */
    PartsPerThousand = 4,
    /** */
    PartsPerMillion = 5,
    /** */
    PartsPerBillion = 6,
    /** */
    PartsPerTrillion = 7,
    /** */
    PicolitersPerLiter = 8,
    /** */
    NanolitersPerLiter = 9,
    /** */
    MicrolitersPerLiter = 10,
    /** */
    CentilitersPerLiter = 11,
    /** */
    DecilitersPerLiter = 12,
    /** */
    PicolitersPerMililiter = 13,
    /** */
    NanolitersPerMililiter = 14,
    /** */
    MicrolitersPerMililiter = 15,
    /** */
    CentilitersPerMililiter = 16,
    /** */
    DecilitersPerMililiter = 17
}
/** The volume concentration (not to be confused with volume fraction) is defined as the volume of a constituent divided by the total volume of the mixture. */
export declare class VolumeConcentration {
    private value;
    private decimalfractionsLazy;
    private litersperliterLazy;
    private literspermililiterLazy;
    private percentLazy;
    private partsperthousandLazy;
    private partspermillionLazy;
    private partsperbillionLazy;
    private partspertrillionLazy;
    private picolitersperliterLazy;
    private nanolitersperliterLazy;
    private microlitersperliterLazy;
    private centilitersperliterLazy;
    private decilitersperliterLazy;
    private picoliterspermililiterLazy;
    private nanoliterspermililiterLazy;
    private microliterspermililiterLazy;
    private centiliterspermililiterLazy;
    private deciliterspermililiterLazy;
    /**
     * Create a new VolumeConcentration.
     * @param value The value.
     * @param fromUnit The ‘VolumeConcentration’ unit to create from.
     */
    constructor(value: number, fromUnit: VolumeConcentrationUnits);
    /**
     * The base value of VolumeConcentration is DecimalFraction.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get DecimalFractions(): number;
    /** */
    get LitersPerLiter(): number;
    /** */
    get LitersPerMililiter(): number;
    /** */
    get Percent(): number;
    /** */
    get PartsPerThousand(): number;
    /** */
    get PartsPerMillion(): number;
    /** */
    get PartsPerBillion(): number;
    /** */
    get PartsPerTrillion(): number;
    /** */
    get PicolitersPerLiter(): number;
    /** */
    get NanolitersPerLiter(): number;
    /** */
    get MicrolitersPerLiter(): number;
    /** */
    get CentilitersPerLiter(): number;
    /** */
    get DecilitersPerLiter(): number;
    /** */
    get PicolitersPerMililiter(): number;
    /** */
    get NanolitersPerMililiter(): number;
    /** */
    get MicrolitersPerMililiter(): number;
    /** */
    get CentilitersPerMililiter(): number;
    /** */
    get DecilitersPerMililiter(): number;
    /**
     * Create a new VolumeConcentration instance from a DecimalFractions
     *
     * @param value The unit as DecimalFractions to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromDecimalFractions(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a LitersPerLiter
     *
     * @param value The unit as LitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromLitersPerLiter(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a LitersPerMililiter
     *
     * @param value The unit as LitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromLitersPerMililiter(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a Percent
     *
     * @param value The unit as Percent to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromPercent(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a PartsPerThousand
     *
     * @param value The unit as PartsPerThousand to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromPartsPerThousand(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a PartsPerMillion
     *
     * @param value The unit as PartsPerMillion to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromPartsPerMillion(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a PartsPerBillion
     *
     * @param value The unit as PartsPerBillion to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromPartsPerBillion(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a PartsPerTrillion
     *
     * @param value The unit as PartsPerTrillion to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromPartsPerTrillion(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a PicolitersPerLiter
     *
     * @param value The unit as PicolitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromPicolitersPerLiter(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a NanolitersPerLiter
     *
     * @param value The unit as NanolitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromNanolitersPerLiter(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a MicrolitersPerLiter
     *
     * @param value The unit as MicrolitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromMicrolitersPerLiter(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a CentilitersPerLiter
     *
     * @param value The unit as CentilitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromCentilitersPerLiter(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a DecilitersPerLiter
     *
     * @param value The unit as DecilitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromDecilitersPerLiter(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a PicolitersPerMililiter
     *
     * @param value The unit as PicolitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromPicolitersPerMililiter(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a NanolitersPerMililiter
     *
     * @param value The unit as NanolitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromNanolitersPerMililiter(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a MicrolitersPerMililiter
     *
     * @param value The unit as MicrolitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromMicrolitersPerMililiter(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a CentilitersPerMililiter
     *
     * @param value The unit as CentilitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromCentilitersPerMililiter(value: number): VolumeConcentration;
    /**
     * Create a new VolumeConcentration instance from a DecilitersPerMililiter
     *
     * @param value The unit as DecilitersPerMililiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    static FromDecilitersPerMililiter(value: number): VolumeConcentration;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the VolumeConcentration to string.
     * Note! the default format for VolumeConcentration is DecimalFractions.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the VolumeConcentration.
     * @returns The string format of the VolumeConcentration.
     */
    toString(toUnit?: VolumeConcentrationUnits): string;
}
//# sourceMappingURL=volumeconcentration.g.d.ts.map