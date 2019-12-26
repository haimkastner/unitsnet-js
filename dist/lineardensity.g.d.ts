export declare enum LinearDensityUnits {
    GramsPerMeter = 0,
    PoundsPerFoot = 1,
    Kilogramspermeter = 2
}
export declare class LinearDensity {
    private value;
    private gramspermeterLazy;
    private poundsperfootLazy;
    private kilogramspermeterLazy;
    constructor(value: number, fromUnit: LinearDensityUnits);
    get GramsPerMeter(): number;
    get PoundsPerFoot(): number;
    get Kilogramspermeter(): number;
    static FromGramsPerMeter(value: number): LinearDensity;
    static FromPoundsPerFoot(value: number): LinearDensity;
    static FromKilogramspermeter(value: number): LinearDensity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=lineardensity.g.d.ts.map