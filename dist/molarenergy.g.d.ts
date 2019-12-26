export declare enum MolarEnergyUnits {
    JoulesPerMole = 0,
    KilojoulesPerMole = 1,
    MegajoulesPerMole = 2
}
export declare class MolarEnergy {
    private value;
    private joulespermoleLazy;
    private kilojoulespermoleLazy;
    private megajoulespermoleLazy;
    constructor(value: number, fromUnit: MolarEnergyUnits);
    get JoulesPerMole(): number;
    get KilojoulesPerMole(): number;
    get MegajoulesPerMole(): number;
    static FromJoulesPerMole(value: number): MolarEnergy;
    static FromKilojoulesPerMole(value: number): MolarEnergy;
    static FromMegajoulesPerMole(value: number): MolarEnergy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MolarEnergyUnits): string;
}
//# sourceMappingURL=molarenergy.g.d.ts.map