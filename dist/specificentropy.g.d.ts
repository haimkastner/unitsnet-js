export declare enum SpecificEntropyUnits {
    JoulesPerKilogramKelvin = 0,
    JoulesPerKilogramDegreeCelsius = 1,
    CaloriesPerGramKelvin = 2,
    BtusPerPoundFahrenheit = 3,
    KilojoulesPerKilogramKelvin = 4,
    MegajoulesPerKilogramKelvin = 5,
    KilojoulesPerKilogramDegreeCelsius = 6,
    MegajoulesPerKilogramDegreeCelsius = 7,
    KilocaloriesPerGramKelvin = 8
}
export declare class SpecificEntropy {
    private value;
    private joulesperkilogramkelvinLazy;
    private joulesperkilogramdegreecelsiusLazy;
    private caloriespergramkelvinLazy;
    private btusperpoundfahrenheitLazy;
    private kilojoulesperkilogramkelvinLazy;
    private megajoulesperkilogramkelvinLazy;
    private kilojoulesperkilogramdegreecelsiusLazy;
    private megajoulesperkilogramdegreecelsiusLazy;
    private kilocaloriespergramkelvinLazy;
    constructor(value: number, fromUnit: SpecificEntropyUnits);
    get JoulesPerKilogramKelvin(): number;
    get JoulesPerKilogramDegreeCelsius(): number;
    get CaloriesPerGramKelvin(): number;
    get BtusPerPoundFahrenheit(): number;
    get KilojoulesPerKilogramKelvin(): number;
    get MegajoulesPerKilogramKelvin(): number;
    get KilojoulesPerKilogramDegreeCelsius(): number;
    get MegajoulesPerKilogramDegreeCelsius(): number;
    get KilocaloriesPerGramKelvin(): number;
    static FromJoulesPerKilogramKelvin(value: number): SpecificEntropy;
    static FromJoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy;
    static FromCaloriesPerGramKelvin(value: number): SpecificEntropy;
    static FromBtusPerPoundFahrenheit(value: number): SpecificEntropy;
    static FromKilojoulesPerKilogramKelvin(value: number): SpecificEntropy;
    static FromMegajoulesPerKilogramKelvin(value: number): SpecificEntropy;
    static FromKilojoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy;
    static FromMegajoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy;
    static FromKilocaloriesPerGramKelvin(value: number): SpecificEntropy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: SpecificEntropyUnits): string;
}
//# sourceMappingURL=specificentropy.g.d.ts.map