export declare enum VolumeConcentrationUnits {
    DecimalFractions = 0,
    LitersPerLiter = 1,
    LitersPerMililiter = 2,
    Percent = 3,
    PartsPerThousand = 4,
    PartsPerMillion = 5,
    PartsPerBillion = 6,
    PartsPerTrillion = 7,
    Picolitersperliter = 8,
    Nanolitersperliter = 9,
    Microlitersperliter = 10,
    Centilitersperliter = 11,
    Decilitersperliter = 12,
    Picoliterspermililiter = 13,
    Nanoliterspermililiter = 14,
    Microliterspermililiter = 15,
    Centiliterspermililiter = 16,
    Deciliterspermililiter = 17
}
export declare class VolumeConcentration {
    private value;
    constructor(value: number, fromUnit: VolumeConcentrationUnits);
    get DecimalFractions(): number;
    get LitersPerLiter(): number;
    get LitersPerMililiter(): number;
    get Percent(): number;
    get PartsPerThousand(): number;
    get PartsPerMillion(): number;
    get PartsPerBillion(): number;
    get PartsPerTrillion(): number;
    get Picolitersperliter(): number;
    get Nanolitersperliter(): number;
    get Microlitersperliter(): number;
    get Centilitersperliter(): number;
    get Decilitersperliter(): number;
    get Picoliterspermililiter(): number;
    get Nanoliterspermililiter(): number;
    get Microliterspermililiter(): number;
    get Centiliterspermililiter(): number;
    get Deciliterspermililiter(): number;
    static FromDecimalFractions(value: number): VolumeConcentration;
    static FromLitersPerLiter(value: number): VolumeConcentration;
    static FromLitersPerMililiter(value: number): VolumeConcentration;
    static FromPercent(value: number): VolumeConcentration;
    static FromPartsPerThousand(value: number): VolumeConcentration;
    static FromPartsPerMillion(value: number): VolumeConcentration;
    static FromPartsPerBillion(value: number): VolumeConcentration;
    static FromPartsPerTrillion(value: number): VolumeConcentration;
    static FromPicolitersperliter(value: number): VolumeConcentration;
    static FromNanolitersperliter(value: number): VolumeConcentration;
    static FromMicrolitersperliter(value: number): VolumeConcentration;
    static FromCentilitersperliter(value: number): VolumeConcentration;
    static FromDecilitersperliter(value: number): VolumeConcentration;
    static FromPicoliterspermililiter(value: number): VolumeConcentration;
    static FromNanoliterspermililiter(value: number): VolumeConcentration;
    static FromMicroliterspermililiter(value: number): VolumeConcentration;
    static FromCentiliterspermililiter(value: number): VolumeConcentration;
    static FromDeciliterspermililiter(value: number): VolumeConcentration;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=volumeconcentration.g.d.ts.map