export declare enum ElectricFieldUnits {
    VoltsPerMeter = 0
}
export declare class ElectricField {
    private value;
    private voltspermeterLazy;
    constructor(value: number, fromUnit: ElectricFieldUnits);
    get VoltsPerMeter(): number;
    static FromVoltsPerMeter(value: number): ElectricField;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricFieldUnits): string;
}
//# sourceMappingURL=electricfield.g.d.ts.map