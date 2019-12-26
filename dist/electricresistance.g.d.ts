export declare enum ElectricResistanceUnits {
    Ohms = 0,
    Kiloohms = 1,
    Megaohms = 2,
    Gigaohms = 3
}
export declare class ElectricResistance {
    private value;
    private ohmsLazy;
    private kiloohmsLazy;
    private megaohmsLazy;
    private gigaohmsLazy;
    constructor(value: number, fromUnit: ElectricResistanceUnits);
    get Ohms(): number;
    get Kiloohms(): number;
    get Megaohms(): number;
    get Gigaohms(): number;
    static FromOhms(value: number): ElectricResistance;
    static FromKiloohms(value: number): ElectricResistance;
    static FromMegaohms(value: number): ElectricResistance;
    static FromGigaohms(value: number): ElectricResistance;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricResistanceUnits): string;
}
//# sourceMappingURL=electricresistance.g.d.ts.map