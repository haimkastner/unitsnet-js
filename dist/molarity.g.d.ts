export declare enum MolarityUnits {
    MolesPerCubicMeter = 0,
    MolesPerLiter = 1,
    PicomolesPerLiter = 2,
    NanomolesPerLiter = 3,
    MicromolesPerLiter = 4,
    CentimolesPerLiter = 5,
    DecimolesPerLiter = 6
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
    get PicomolesPerLiter(): number;
    get NanomolesPerLiter(): number;
    get MicromolesPerLiter(): number;
    get CentimolesPerLiter(): number;
    get DecimolesPerLiter(): number;
    static FromMolesPerCubicMeter(value: number): Molarity;
    static FromMolesPerLiter(value: number): Molarity;
    static FromPicomolesPerLiter(value: number): Molarity;
    static FromNanomolesPerLiter(value: number): Molarity;
    static FromMicromolesPerLiter(value: number): Molarity;
    static FromCentimolesPerLiter(value: number): Molarity;
    static FromDecimolesPerLiter(value: number): Molarity;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MolarityUnits): string;
}
//# sourceMappingURL=molarity.g.d.ts.map