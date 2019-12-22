export declare enum LuminousIntensityUnits {
    Candela = 0
}
export declare class LuminousIntensity {
    private value;
    constructor(value: number, fromUnit: LuminousIntensityUnits);
    get Candela(): number;
    static FromCandela(value: number): LuminousIntensity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=luminousintensity.g.d.ts.map