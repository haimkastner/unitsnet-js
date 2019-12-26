export declare enum VolumeConcentrationUnits {
    DecimalFractions = 0,
    LitersPerLiter = 1,
    LitersPerMililiter = 2,
    Percent = 3,
    PartsPerThousand = 4,
    PartsPerMillion = 5,
    PartsPerBillion = 6,
    PartsPerTrillion = 7,
    PicolitersPerLiter = 8,
    NanolitersPerLiter = 9,
    MicrolitersPerLiter = 10,
    CentilitersPerLiter = 11,
    DecilitersPerLiter = 12,
    PicolitersPerMililiter = 13,
    NanolitersPerMililiter = 14,
    MicrolitersPerMililiter = 15,
    CentilitersPerMililiter = 16,
    DecilitersPerMililiter = 17
}
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
    constructor(value: number, fromUnit: VolumeConcentrationUnits);
    get DecimalFractions(): number;
    get LitersPerLiter(): number;
    get LitersPerMililiter(): number;
    get Percent(): number;
    get PartsPerThousand(): number;
    get PartsPerMillion(): number;
    get PartsPerBillion(): number;
    get PartsPerTrillion(): number;
    get PicolitersPerLiter(): number;
    get NanolitersPerLiter(): number;
    get MicrolitersPerLiter(): number;
    get CentilitersPerLiter(): number;
    get DecilitersPerLiter(): number;
    get PicolitersPerMililiter(): number;
    get NanolitersPerMililiter(): number;
    get MicrolitersPerMililiter(): number;
    get CentilitersPerMililiter(): number;
    get DecilitersPerMililiter(): number;
    static FromDecimalFractions(value: number): VolumeConcentration;
    static FromLitersPerLiter(value: number): VolumeConcentration;
    static FromLitersPerMililiter(value: number): VolumeConcentration;
    static FromPercent(value: number): VolumeConcentration;
    static FromPartsPerThousand(value: number): VolumeConcentration;
    static FromPartsPerMillion(value: number): VolumeConcentration;
    static FromPartsPerBillion(value: number): VolumeConcentration;
    static FromPartsPerTrillion(value: number): VolumeConcentration;
    static FromPicolitersPerLiter(value: number): VolumeConcentration;
    static FromNanolitersPerLiter(value: number): VolumeConcentration;
    static FromMicrolitersPerLiter(value: number): VolumeConcentration;
    static FromCentilitersPerLiter(value: number): VolumeConcentration;
    static FromDecilitersPerLiter(value: number): VolumeConcentration;
    static FromPicolitersPerMililiter(value: number): VolumeConcentration;
    static FromNanolitersPerMililiter(value: number): VolumeConcentration;
    static FromMicrolitersPerMililiter(value: number): VolumeConcentration;
    static FromCentilitersPerMililiter(value: number): VolumeConcentration;
    static FromDecilitersPerMililiter(value: number): VolumeConcentration;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: VolumeConcentrationUnits): string;
}
//# sourceMappingURL=volumeconcentration.g.d.ts.map