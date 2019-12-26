export declare enum CapacitanceUnits {
    Farads = 0,
    Picofarads = 1,
    Nanofarads = 2,
    Microfarads = 3,
    Kilofarads = 4,
    Megafarads = 5
}
export declare class Capacitance {
    private value;
    private faradsLazy;
    private picofaradsLazy;
    private nanofaradsLazy;
    private microfaradsLazy;
    private kilofaradsLazy;
    private megafaradsLazy;
    constructor(value: number, fromUnit: CapacitanceUnits);
    get Farads(): number;
    get Picofarads(): number;
    get Nanofarads(): number;
    get Microfarads(): number;
    get Kilofarads(): number;
    get Megafarads(): number;
    static FromFarads(value: number): Capacitance;
    static FromPicofarads(value: number): Capacitance;
    static FromNanofarads(value: number): Capacitance;
    static FromMicrofarads(value: number): Capacitance;
    static FromKilofarads(value: number): Capacitance;
    static FromMegafarads(value: number): Capacitance;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=capacitance.g.d.ts.map