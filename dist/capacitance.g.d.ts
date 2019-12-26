export declare enum CapacitanceUnits {
    Farads = 0,
    Picofarad = 1,
    Nanofarad = 2,
    Microfarad = 3,
    Kilofarad = 4,
    Megafarad = 5
}
export declare class Capacitance {
    private value;
    private faradsLazy;
    private picofaradLazy;
    private nanofaradLazy;
    private microfaradLazy;
    private kilofaradLazy;
    private megafaradLazy;
    constructor(value: number, fromUnit: CapacitanceUnits);
    get Farads(): number;
    get Picofarad(): number;
    get Nanofarad(): number;
    get Microfarad(): number;
    get Kilofarad(): number;
    get Megafarad(): number;
    static FromFarads(value: number): Capacitance;
    static FromPicofarad(value: number): Capacitance;
    static FromNanofarad(value: number): Capacitance;
    static FromMicrofarad(value: number): Capacitance;
    static FromKilofarad(value: number): Capacitance;
    static FromMegafarad(value: number): Capacitance;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: CapacitanceUnits): string;
}
//# sourceMappingURL=capacitance.g.d.ts.map