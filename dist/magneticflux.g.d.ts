export declare enum MagneticFluxUnits {
    Webers = 0
}
export declare class MagneticFlux {
    private value;
    constructor(value: number, fromUnit: MagneticFluxUnits);
    get Webers(): number;
    static FromWebers(value: number): MagneticFlux;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=magneticflux.g.d.ts.map