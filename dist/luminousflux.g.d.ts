export declare enum LuminousFluxUnits {
    Lumens = 0
}
export declare class LuminousFlux {
    private value;
    constructor(value: number, fromUnit: LuminousFluxUnits);
    get Lumens(): number;
    static FromLumens(value: number): LuminousFlux;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=luminousflux.g.d.ts.map