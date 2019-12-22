export declare enum MolarEnergyUnits {
    JoulesPerMole = 0,
    Kilojoulespermole = 1,
    Megajoulespermole = 2
}
export declare class MolarEnergy {
    private value;
    constructor(value: number, fromUnit: MolarEnergyUnits);
    get JoulesPerMole(): number;
    get Kilojoulespermole(): number;
    get Megajoulespermole(): number;
    static FromJoulesPerMole(value: number): MolarEnergy;
    static FromKilojoulespermole(value: number): MolarEnergy;
    static FromMegajoulespermole(value: number): MolarEnergy;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=molarenergy.g.d.ts.map