export declare enum MolarEntropyUnits {
    JoulesPerMoleKelvin = 0,
    KilojoulesPerMoleKelvin = 1,
    MegajoulesPerMoleKelvin = 2
}
export declare class MolarEntropy {
    private value;
    private joulespermolekelvinLazy;
    private kilojoulespermolekelvinLazy;
    private megajoulespermolekelvinLazy;
    constructor(value: number, fromUnit: MolarEntropyUnits);
    get JoulesPerMoleKelvin(): number;
    get KilojoulesPerMoleKelvin(): number;
    get MegajoulesPerMoleKelvin(): number;
    static FromJoulesPerMoleKelvin(value: number): MolarEntropy;
    static FromKilojoulesPerMoleKelvin(value: number): MolarEntropy;
    static FromMegajoulesPerMoleKelvin(value: number): MolarEntropy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MolarEntropyUnits): string;
}
//# sourceMappingURL=molarentropy.g.d.ts.map