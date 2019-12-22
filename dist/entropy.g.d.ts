export declare enum EntropyUnits {
    JoulesPerKelvin = 0,
    CaloriesPerKelvin = 1,
    JoulesPerDegreeCelsius = 2,
    Kilojoulesperkelvin = 3,
    Megajoulesperkelvin = 4,
    Kilocaloriesperkelvin = 5,
    Kilojoulesperdegreecelsius = 6
}
export declare class Entropy {
    private value;
    constructor(value: number, fromUnit: EntropyUnits);
    get JoulesPerKelvin(): number;
    get CaloriesPerKelvin(): number;
    get JoulesPerDegreeCelsius(): number;
    get Kilojoulesperkelvin(): number;
    get Megajoulesperkelvin(): number;
    get Kilocaloriesperkelvin(): number;
    get Kilojoulesperdegreecelsius(): number;
    static FromJoulesPerKelvin(value: number): Entropy;
    static FromCaloriesPerKelvin(value: number): Entropy;
    static FromJoulesPerDegreeCelsius(value: number): Entropy;
    static FromKilojoulesperkelvin(value: number): Entropy;
    static FromMegajoulesperkelvin(value: number): Entropy;
    static FromKilocaloriesperkelvin(value: number): Entropy;
    static FromKilojoulesperdegreecelsius(value: number): Entropy;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=entropy.g.d.ts.map