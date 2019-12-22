export declare enum PermittivityUnits {
    FaradsPerMeter = 0
}
export declare class Permittivity {
    private value;
    constructor(value: number, fromUnit: PermittivityUnits);
    get FaradsPerMeter(): number;
    static FromFaradsPerMeter(value: number): Permittivity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=permittivity.g.d.ts.map