export declare enum ElectricPotentialAcUnits {
    VoltsAc = 0,
    MicrovoltsAc = 1,
    KilovoltsAc = 2,
    MegavoltsAc = 3
}
export declare class ElectricPotentialAc {
    private value;
    private voltsacLazy;
    private microvoltsacLazy;
    private kilovoltsacLazy;
    private megavoltsacLazy;
    constructor(value: number, fromUnit: ElectricPotentialAcUnits);
    get VoltsAc(): number;
    get MicrovoltsAc(): number;
    get KilovoltsAc(): number;
    get MegavoltsAc(): number;
    static FromVoltsAc(value: number): ElectricPotentialAc;
    static FromMicrovoltsAc(value: number): ElectricPotentialAc;
    static FromKilovoltsAc(value: number): ElectricPotentialAc;
    static FromMegavoltsAc(value: number): ElectricPotentialAc;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricPotentialAcUnits): string;
}
//# sourceMappingURL=electricpotentialac.g.d.ts.map