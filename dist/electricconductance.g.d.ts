export declare enum ElectricConductanceUnits {
    Siemens = 0,
    Microsiemens = 1
}
export declare class ElectricConductance {
    private value;
    private siemensLazy;
    private microsiemensLazy;
    constructor(value: number, fromUnit: ElectricConductanceUnits);
    get Siemens(): number;
    get Microsiemens(): number;
    static FromSiemens(value: number): ElectricConductance;
    static FromMicrosiemens(value: number): ElectricConductance;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electricconductance.g.d.ts.map