export declare enum MagneticFieldUnits {
    Teslas = 0,
    Nanoteslas = 1,
    Microteslas = 2
}
export declare class MagneticField {
    private value;
    private teslasLazy;
    private nanoteslasLazy;
    private microteslasLazy;
    constructor(value: number, fromUnit: MagneticFieldUnits);
    get Teslas(): number;
    get Nanoteslas(): number;
    get Microteslas(): number;
    static FromTeslas(value: number): MagneticField;
    static FromNanoteslas(value: number): MagneticField;
    static FromMicroteslas(value: number): MagneticField;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=magneticfield.g.d.ts.map