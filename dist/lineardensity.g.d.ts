export declare enum LinearDensityUnits {
    GramsPerMeter = 0,
    PoundsPerFoot = 1,
    KilogramPerMeter = 2
}
export declare class LinearDensity {
    private value;
    private gramspermeterLazy;
    private poundsperfootLazy;
    private kilogrampermeterLazy;
    constructor(value: number, fromUnit: LinearDensityUnits);
    get GramsPerMeter(): number;
    get PoundsPerFoot(): number;
    get KilogramPerMeter(): number;
    static FromGramsPerMeter(value: number): LinearDensity;
    static FromPoundsPerFoot(value: number): LinearDensity;
    static FromKilogramPerMeter(value: number): LinearDensity;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: LinearDensityUnits): string;
}
//# sourceMappingURL=lineardensity.g.d.ts.map