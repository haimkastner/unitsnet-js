export declare enum ElectricPotentialAcUnits {
    VoltsAc = 0,
    Microvoltsac = 1,
    Kilovoltsac = 2,
    Megavoltsac = 3
}
export declare class ElectricPotentialAc {
    private value;
    private voltsacLazy;
    private microvoltsacLazy;
    private kilovoltsacLazy;
    private megavoltsacLazy;
    constructor(value: number, fromUnit: ElectricPotentialAcUnits);
    get VoltsAc(): number;
    get Microvoltsac(): number;
    get Kilovoltsac(): number;
    get Megavoltsac(): number;
    static FromVoltsAc(value: number): ElectricPotentialAc;
    static FromMicrovoltsac(value: number): ElectricPotentialAc;
    static FromKilovoltsac(value: number): ElectricPotentialAc;
    static FromMegavoltsac(value: number): ElectricPotentialAc;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electricpotentialac.g.d.ts.map