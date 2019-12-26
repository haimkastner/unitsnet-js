export declare enum EntropyUnits {
    JoulesPerKelvin = 0,
    CaloriesPerKelvin = 1,
    JoulesPerDegreeCelsius = 2,
    KilojoulesPerKelvin = 3,
    MegajoulesPerKelvin = 4,
    KilocaloriesPerKelvin = 5,
    KilojoulesPerDegreeCelsius = 6
}
export declare class Entropy {
    private value;
    private joulesperkelvinLazy;
    private caloriesperkelvinLazy;
    private joulesperdegreecelsiusLazy;
    private kilojoulesperkelvinLazy;
    private megajoulesperkelvinLazy;
    private kilocaloriesperkelvinLazy;
    private kilojoulesperdegreecelsiusLazy;
    constructor(value: number, fromUnit: EntropyUnits);
    get JoulesPerKelvin(): number;
    get CaloriesPerKelvin(): number;
    get JoulesPerDegreeCelsius(): number;
    get KilojoulesPerKelvin(): number;
    get MegajoulesPerKelvin(): number;
    get KilocaloriesPerKelvin(): number;
    get KilojoulesPerDegreeCelsius(): number;
    static FromJoulesPerKelvin(value: number): Entropy;
    static FromCaloriesPerKelvin(value: number): Entropy;
    static FromJoulesPerDegreeCelsius(value: number): Entropy;
    static FromKilojoulesPerKelvin(value: number): Entropy;
    static FromMegajoulesPerKelvin(value: number): Entropy;
    static FromKilocaloriesPerKelvin(value: number): Entropy;
    static FromKilojoulesPerDegreeCelsius(value: number): Entropy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: EntropyUnits): string;
}
//# sourceMappingURL=entropy.g.d.ts.map