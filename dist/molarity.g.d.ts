export declare enum MolarityUnits {
    MolesPerCubicMeter = 0,
    MolesPerLiter = 1,
    Picomolesperliter = 2,
    Nanomolesperliter = 3,
    Micromolesperliter = 4,
    Centimolesperliter = 5,
    Decimolesperliter = 6
}
export declare class Molarity {
    private value;
    private molespercubicmeterLazy;
    private molesperliterLazy;
    private picomolesperliterLazy;
    private nanomolesperliterLazy;
    private micromolesperliterLazy;
    private centimolesperliterLazy;
    private decimolesperliterLazy;
    constructor(value: number, fromUnit: MolarityUnits);
    get MolesPerCubicMeter(): number;
    get MolesPerLiter(): number;
    get Picomolesperliter(): number;
    get Nanomolesperliter(): number;
    get Micromolesperliter(): number;
    get Centimolesperliter(): number;
    get Decimolesperliter(): number;
    static FromMolesPerCubicMeter(value: number): Molarity;
    static FromMolesPerLiter(value: number): Molarity;
    static FromPicomolesperliter(value: number): Molarity;
    static FromNanomolesperliter(value: number): Molarity;
    static FromMicromolesperliter(value: number): Molarity;
    static FromCentimolesperliter(value: number): Molarity;
    static FromDecimolesperliter(value: number): Molarity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=molarity.g.d.ts.map