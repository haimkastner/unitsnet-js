export declare enum MolarEntropyUnits {
    JoulesPerMoleKelvin = 0,
    KilojoulePerMoleKelvin = 1,
    MegajoulePerMoleKelvin = 2
}
export declare class MolarEntropy {
    private value;
    private joulespermolekelvinLazy;
    private kilojoulepermolekelvinLazy;
    private megajoulepermolekelvinLazy;
    constructor(value: number, fromUnit: MolarEntropyUnits);
    get JoulesPerMoleKelvin(): number;
    get KilojoulePerMoleKelvin(): number;
    get MegajoulePerMoleKelvin(): number;
    static FromJoulesPerMoleKelvin(value: number): MolarEntropy;
    static FromKilojoulePerMoleKelvin(value: number): MolarEntropy;
    static FromMegajoulePerMoleKelvin(value: number): MolarEntropy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MolarEntropyUnits): string;
}
//# sourceMappingURL=molarentropy.g.d.ts.map