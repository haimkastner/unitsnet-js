export declare enum MagneticFluxUnits {
    Webers = 0
}
export declare class MagneticFlux {
    private value;
    private webersLazy;
    constructor(value: number, fromUnit: MagneticFluxUnits);
    get Webers(): number;
    static FromWebers(value: number): MagneticFlux;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MagneticFluxUnits): string;
}
//# sourceMappingURL=magneticflux.g.d.ts.map