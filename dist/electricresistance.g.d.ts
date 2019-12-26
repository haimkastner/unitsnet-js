export declare enum ElectricResistanceUnits {
    Ohms = 0,
    Kiloohm = 1,
    Megaohm = 2,
    Gigaohm = 3
}
export declare class ElectricResistance {
    private value;
    private ohmsLazy;
    private kiloohmLazy;
    private megaohmLazy;
    private gigaohmLazy;
    constructor(value: number, fromUnit: ElectricResistanceUnits);
    get Ohms(): number;
    get Kiloohm(): number;
    get Megaohm(): number;
    get Gigaohm(): number;
    static FromOhms(value: number): ElectricResistance;
    static FromKiloohm(value: number): ElectricResistance;
    static FromMegaohm(value: number): ElectricResistance;
    static FromGigaohm(value: number): ElectricResistance;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricResistanceUnits): string;
}
//# sourceMappingURL=electricresistance.g.d.ts.map