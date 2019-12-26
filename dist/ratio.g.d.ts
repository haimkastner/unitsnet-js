export declare enum RatioUnits {
    DecimalFractions = 0,
    Percent = 1,
    PartsPerThousand = 2,
    PartsPerMillion = 3,
    PartsPerBillion = 4,
    PartsPerTrillion = 5
}
export declare class Ratio {
    private value;
    private decimalfractionsLazy;
    private percentLazy;
    private partsperthousandLazy;
    private partspermillionLazy;
    private partsperbillionLazy;
    private partspertrillionLazy;
    constructor(value: number, fromUnit: RatioUnits);
    get DecimalFractions(): number;
    get Percent(): number;
    get PartsPerThousand(): number;
    get PartsPerMillion(): number;
    get PartsPerBillion(): number;
    get PartsPerTrillion(): number;
    static FromDecimalFractions(value: number): Ratio;
    static FromPercent(value: number): Ratio;
    static FromPartsPerThousand(value: number): Ratio;
    static FromPartsPerMillion(value: number): Ratio;
    static FromPartsPerBillion(value: number): Ratio;
    static FromPartsPerTrillion(value: number): Ratio;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: RatioUnits): string;
}
//# sourceMappingURL=ratio.g.d.ts.map