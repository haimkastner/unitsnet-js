export declare enum ElectricAdmittanceUnits {
    Siemens = 0,
    Nanosiemens = 1,
    Microsiemens = 2
}
export declare class ElectricAdmittance {
    private value;
    private siemensLazy;
    private nanosiemensLazy;
    private microsiemensLazy;
    constructor(value: number, fromUnit: ElectricAdmittanceUnits);
    get Siemens(): number;
    get Nanosiemens(): number;
    get Microsiemens(): number;
    static FromSiemens(value: number): ElectricAdmittance;
    static FromNanosiemens(value: number): ElectricAdmittance;
    static FromMicrosiemens(value: number): ElectricAdmittance;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricAdmittanceUnits): string;
}
//# sourceMappingURL=electricadmittance.g.d.ts.map