export declare enum ElectricCurrentUnits {
    Amperes = 0,
    Picoamperes = 1,
    Nanoamperes = 2,
    Microamperes = 3,
    Centiamperes = 4,
    Kiloamperes = 5,
    Megaamperes = 6
}
export declare class ElectricCurrent {
    private value;
    constructor(value: number, fromUnit: ElectricCurrentUnits);
    get Amperes(): number;
    get Picoamperes(): number;
    get Nanoamperes(): number;
    get Microamperes(): number;
    get Centiamperes(): number;
    get Kiloamperes(): number;
    get Megaamperes(): number;
    static FromAmperes(value: number): ElectricCurrent;
    static FromPicoamperes(value: number): ElectricCurrent;
    static FromNanoamperes(value: number): ElectricCurrent;
    static FromMicroamperes(value: number): ElectricCurrent;
    static FromCentiamperes(value: number): ElectricCurrent;
    static FromKiloamperes(value: number): ElectricCurrent;
    static FromMegaamperes(value: number): ElectricCurrent;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electriccurrent.g.d.ts.map