export declare enum ElectricConductivityUnits {
    SiemensPerMeter = 0,
    SiemensPerInch = 1,
    SiemensPerFoot = 2
}
export declare class ElectricConductivity {
    private value;
    private siemenspermeterLazy;
    private siemensperinchLazy;
    private siemensperfootLazy;
    constructor(value: number, fromUnit: ElectricConductivityUnits);
    get SiemensPerMeter(): number;
    get SiemensPerInch(): number;
    get SiemensPerFoot(): number;
    static FromSiemensPerMeter(value: number): ElectricConductivity;
    static FromSiemensPerInch(value: number): ElectricConductivity;
    static FromSiemensPerFoot(value: number): ElectricConductivity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electricconductivity.g.d.ts.map