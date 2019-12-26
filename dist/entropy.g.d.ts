export declare enum EntropyUnits {
    JoulesPerKelvin = 0,
    CaloriesPerKelvin = 1,
    JoulesPerDegreeCelsius = 2,
    KilojoulePerKelvin = 3,
    MegajoulePerKelvin = 4,
    KilocaloriePerKelvin = 5,
    KilojoulePerDegreeCelsius = 6
}
export declare class Entropy {
    private value;
    private joulesperkelvinLazy;
    private caloriesperkelvinLazy;
    private joulesperdegreecelsiusLazy;
    private kilojouleperkelvinLazy;
    private megajouleperkelvinLazy;
    private kilocalorieperkelvinLazy;
    private kilojouleperdegreecelsiusLazy;
    constructor(value: number, fromUnit: EntropyUnits);
    get JoulesPerKelvin(): number;
    get CaloriesPerKelvin(): number;
    get JoulesPerDegreeCelsius(): number;
    get KilojoulePerKelvin(): number;
    get MegajoulePerKelvin(): number;
    get KilocaloriePerKelvin(): number;
    get KilojoulePerDegreeCelsius(): number;
    static FromJoulesPerKelvin(value: number): Entropy;
    static FromCaloriesPerKelvin(value: number): Entropy;
    static FromJoulesPerDegreeCelsius(value: number): Entropy;
    static FromKilojoulePerKelvin(value: number): Entropy;
    static FromMegajoulePerKelvin(value: number): Entropy;
    static FromKilocaloriePerKelvin(value: number): Entropy;
    static FromKilojoulePerDegreeCelsius(value: number): Entropy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: EntropyUnits): string;
}
//# sourceMappingURL=entropy.g.d.ts.map