export declare enum MagneticFieldUnits {
    Teslas = 0,
    Nanotesla = 1,
    Microtesla = 2
}
export declare class MagneticField {
    private value;
    private teslasLazy;
    private nanoteslaLazy;
    private microteslaLazy;
    constructor(value: number, fromUnit: MagneticFieldUnits);
    get Teslas(): number;
    get Nanotesla(): number;
    get Microtesla(): number;
    static FromTeslas(value: number): MagneticField;
    static FromNanotesla(value: number): MagneticField;
    static FromMicrotesla(value: number): MagneticField;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MagneticFieldUnits): string;
}
//# sourceMappingURL=magneticfield.g.d.ts.map