export declare enum ElectricInductanceUnits {
    Henries = 0,
    Nanohenry = 1,
    Microhenry = 2
}
export declare class ElectricInductance {
    private value;
    private henriesLazy;
    private nanohenryLazy;
    private microhenryLazy;
    constructor(value: number, fromUnit: ElectricInductanceUnits);
    get Henries(): number;
    get Nanohenry(): number;
    get Microhenry(): number;
    static FromHenries(value: number): ElectricInductance;
    static FromNanohenry(value: number): ElectricInductance;
    static FromMicrohenry(value: number): ElectricInductance;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricInductanceUnits): string;
}
//# sourceMappingURL=electricinductance.g.d.ts.map