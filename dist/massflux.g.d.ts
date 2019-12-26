export declare enum MassFluxUnits {
    GramsPerSecondPerSquareMeter = 0,
    KilogramPerSecondPerSquareMeter = 1
}
export declare class MassFlux {
    private value;
    private gramspersecondpersquaremeterLazy;
    private kilogrampersecondpersquaremeterLazy;
    constructor(value: number, fromUnit: MassFluxUnits);
    get GramsPerSecondPerSquareMeter(): number;
    get KilogramPerSecondPerSquareMeter(): number;
    static FromGramsPerSecondPerSquareMeter(value: number): MassFlux;
    static FromKilogramPerSecondPerSquareMeter(value: number): MassFlux;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MassFluxUnits): string;
}
//# sourceMappingURL=massflux.g.d.ts.map