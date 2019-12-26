export declare enum ElectricPotentialUnits {
    Volts = 0,
    Microvolts = 1,
    Kilovolts = 2,
    Megavolts = 3
}
export declare class ElectricPotential {
    private value;
    private voltsLazy;
    private microvoltsLazy;
    private kilovoltsLazy;
    private megavoltsLazy;
    constructor(value: number, fromUnit: ElectricPotentialUnits);
    get Volts(): number;
    get Microvolts(): number;
    get Kilovolts(): number;
    get Megavolts(): number;
    static FromVolts(value: number): ElectricPotential;
    static FromMicrovolts(value: number): ElectricPotential;
    static FromKilovolts(value: number): ElectricPotential;
    static FromMegavolts(value: number): ElectricPotential;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electricpotential.g.d.ts.map