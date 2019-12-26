export declare enum MassFluxUnits {
    GramsPerSecondPerSquareMeter = 0,
    KilogramsPerSecondPerSquareMeter = 1
}
export declare class MassFlux {
    private value;
    private gramspersecondpersquaremeterLazy;
    private kilogramspersecondpersquaremeterLazy;
    constructor(value: number, fromUnit: MassFluxUnits);
    get GramsPerSecondPerSquareMeter(): number;
    get KilogramsPerSecondPerSquareMeter(): number;
    static FromGramsPerSecondPerSquareMeter(value: number): MassFlux;
    static FromKilogramsPerSecondPerSquareMeter(value: number): MassFlux;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MassFluxUnits): string;
}
//# sourceMappingURL=massflux.g.d.ts.map