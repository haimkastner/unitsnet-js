export declare enum SpecificEntropyUnits {
    JoulesPerKilogramKelvin = 0,
    JoulesPerKilogramDegreeCelsius = 1,
    CaloriesPerGramKelvin = 2,
    BtusPerPoundFahrenheit = 3,
    Kilojoulesperkilogramkelvin = 4,
    Megajoulesperkilogramkelvin = 5,
    Kilojoulesperkilogramdegreecelsius = 6,
    Megajoulesperkilogramdegreecelsius = 7,
    Kilocaloriespergramkelvin = 8
}
export declare class SpecificEntropy {
    private value;
    constructor(value: number, fromUnit: SpecificEntropyUnits);
    get JoulesPerKilogramKelvin(): number;
    get JoulesPerKilogramDegreeCelsius(): number;
    get CaloriesPerGramKelvin(): number;
    get BtusPerPoundFahrenheit(): number;
    get Kilojoulesperkilogramkelvin(): number;
    get Megajoulesperkilogramkelvin(): number;
    get Kilojoulesperkilogramdegreecelsius(): number;
    get Megajoulesperkilogramdegreecelsius(): number;
    get Kilocaloriespergramkelvin(): number;
    static FromJoulesPerKilogramKelvin(value: number): SpecificEntropy;
    static FromJoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy;
    static FromCaloriesPerGramKelvin(value: number): SpecificEntropy;
    static FromBtusPerPoundFahrenheit(value: number): SpecificEntropy;
    static FromKilojoulesperkilogramkelvin(value: number): SpecificEntropy;
    static FromMegajoulesperkilogramkelvin(value: number): SpecificEntropy;
    static FromKilojoulesperkilogramdegreecelsius(value: number): SpecificEntropy;
    static FromMegajoulesperkilogramdegreecelsius(value: number): SpecificEntropy;
    static FromKilocaloriespergramkelvin(value: number): SpecificEntropy;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=specificentropy.g.d.ts.map