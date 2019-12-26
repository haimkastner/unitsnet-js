export declare enum SpecificEntropyUnits {
    JoulesPerKilogramKelvin = 0,
    JoulesPerKilogramDegreeCelsius = 1,
    CaloriesPerGramKelvin = 2,
    BtusPerPoundFahrenheit = 3,
    KilojoulePerKilogramKelvin = 4,
    MegajoulePerKilogramKelvin = 5,
    KilojoulePerKilogramDegreeCelsius = 6,
    MegajoulePerKilogramDegreeCelsius = 7,
    KilocaloriePerGramKelvin = 8
}
export declare class SpecificEntropy {
    private value;
    private joulesperkilogramkelvinLazy;
    private joulesperkilogramdegreecelsiusLazy;
    private caloriespergramkelvinLazy;
    private btusperpoundfahrenheitLazy;
    private kilojouleperkilogramkelvinLazy;
    private megajouleperkilogramkelvinLazy;
    private kilojouleperkilogramdegreecelsiusLazy;
    private megajouleperkilogramdegreecelsiusLazy;
    private kilocaloriepergramkelvinLazy;
    constructor(value: number, fromUnit: SpecificEntropyUnits);
    get JoulesPerKilogramKelvin(): number;
    get JoulesPerKilogramDegreeCelsius(): number;
    get CaloriesPerGramKelvin(): number;
    get BtusPerPoundFahrenheit(): number;
    get KilojoulePerKilogramKelvin(): number;
    get MegajoulePerKilogramKelvin(): number;
    get KilojoulePerKilogramDegreeCelsius(): number;
    get MegajoulePerKilogramDegreeCelsius(): number;
    get KilocaloriePerGramKelvin(): number;
    static FromJoulesPerKilogramKelvin(value: number): SpecificEntropy;
    static FromJoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy;
    static FromCaloriesPerGramKelvin(value: number): SpecificEntropy;
    static FromBtusPerPoundFahrenheit(value: number): SpecificEntropy;
    static FromKilojoulePerKilogramKelvin(value: number): SpecificEntropy;
    static FromMegajoulePerKilogramKelvin(value: number): SpecificEntropy;
    static FromKilojoulePerKilogramDegreeCelsius(value: number): SpecificEntropy;
    static FromMegajoulePerKilogramDegreeCelsius(value: number): SpecificEntropy;
    static FromKilocaloriePerGramKelvin(value: number): SpecificEntropy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: SpecificEntropyUnits): string;
}
//# sourceMappingURL=specificentropy.g.d.ts.map