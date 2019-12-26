export declare enum MolarEntropyUnits {
    JoulesPerMoleKelvin = 0,
    Kilojoulespermolekelvin = 1,
    Megajoulespermolekelvin = 2
}
export declare class MolarEntropy {
    private value;
    private joulespermolekelvinLazy;
    private kilojoulespermolekelvinLazy;
    private megajoulespermolekelvinLazy;
    constructor(value: number, fromUnit: MolarEntropyUnits);
    get JoulesPerMoleKelvin(): number;
    get Kilojoulespermolekelvin(): number;
    get Megajoulespermolekelvin(): number;
    static FromJoulesPerMoleKelvin(value: number): MolarEntropy;
    static FromKilojoulespermolekelvin(value: number): MolarEntropy;
    static FromMegajoulespermolekelvin(value: number): MolarEntropy;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=molarentropy.g.d.ts.map