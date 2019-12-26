export declare enum ElectricCurrentUnits {
    Amperes = 0,
    Picoampere = 1,
    Nanoampere = 2,
    Microampere = 3,
    Centiampere = 4,
    Kiloampere = 5,
    Megaampere = 6
}
export declare class ElectricCurrent {
    private value;
    private amperesLazy;
    private picoampereLazy;
    private nanoampereLazy;
    private microampereLazy;
    private centiampereLazy;
    private kiloampereLazy;
    private megaampereLazy;
    constructor(value: number, fromUnit: ElectricCurrentUnits);
    get Amperes(): number;
    get Picoampere(): number;
    get Nanoampere(): number;
    get Microampere(): number;
    get Centiampere(): number;
    get Kiloampere(): number;
    get Megaampere(): number;
    static FromAmperes(value: number): ElectricCurrent;
    static FromPicoampere(value: number): ElectricCurrent;
    static FromNanoampere(value: number): ElectricCurrent;
    static FromMicroampere(value: number): ElectricCurrent;
    static FromCentiampere(value: number): ElectricCurrent;
    static FromKiloampere(value: number): ElectricCurrent;
    static FromMegaampere(value: number): ElectricCurrent;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricCurrentUnits): string;
}
//# sourceMappingURL=electriccurrent.g.d.ts.map