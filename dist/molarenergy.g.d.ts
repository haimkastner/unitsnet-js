export declare enum MolarEnergyUnits {
    JoulesPerMole = 0,
    KilojoulePerMole = 1,
    MegajoulePerMole = 2
}
export declare class MolarEnergy {
    private value;
    private joulespermoleLazy;
    private kilojoulepermoleLazy;
    private megajoulepermoleLazy;
    constructor(value: number, fromUnit: MolarEnergyUnits);
    get JoulesPerMole(): number;
    get KilojoulePerMole(): number;
    get MegajoulePerMole(): number;
    static FromJoulesPerMole(value: number): MolarEnergy;
    static FromKilojoulePerMole(value: number): MolarEnergy;
    static FromMegajoulePerMole(value: number): MolarEnergy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MolarEnergyUnits): string;
}
//# sourceMappingURL=molarenergy.g.d.ts.map