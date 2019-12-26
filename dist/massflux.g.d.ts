export declare enum MassFluxUnits {
    GramsPerSecondPerSquareMeter = 0,
    Kilogramspersecondpersquaremeter = 1
}
export declare class MassFlux {
    private value;
    private gramspersecondpersquaremeterLazy;
    private kilogramspersecondpersquaremeterLazy;
    constructor(value: number, fromUnit: MassFluxUnits);
    get GramsPerSecondPerSquareMeter(): number;
    get Kilogramspersecondpersquaremeter(): number;
    static FromGramsPerSecondPerSquareMeter(value: number): MassFlux;
    static FromKilogramspersecondpersquaremeter(value: number): MassFlux;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=massflux.g.d.ts.map