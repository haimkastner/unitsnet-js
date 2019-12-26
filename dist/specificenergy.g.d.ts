export declare enum SpecificEnergyUnits {
    JoulesPerKilogram = 0,
    CaloriesPerGram = 1,
    WattHoursPerKilogram = 2,
    BtuPerPound = 3,
    KilojoulesPerKilogram = 4,
    MegajoulesPerKilogram = 5,
    KilocaloriesPerGram = 6,
    KilowattHoursPerKilogram = 7,
    MegawattHoursPerKilogram = 8
}
export declare class SpecificEnergy {
    private value;
    private joulesperkilogramLazy;
    private caloriespergramLazy;
    private watthoursperkilogramLazy;
    private btuperpoundLazy;
    private kilojoulesperkilogramLazy;
    private megajoulesperkilogramLazy;
    private kilocaloriespergramLazy;
    private kilowatthoursperkilogramLazy;
    private megawatthoursperkilogramLazy;
    constructor(value: number, fromUnit: SpecificEnergyUnits);
    get JoulesPerKilogram(): number;
    get CaloriesPerGram(): number;
    get WattHoursPerKilogram(): number;
    get BtuPerPound(): number;
    get KilojoulesPerKilogram(): number;
    get MegajoulesPerKilogram(): number;
    get KilocaloriesPerGram(): number;
    get KilowattHoursPerKilogram(): number;
    get MegawattHoursPerKilogram(): number;
    static FromJoulesPerKilogram(value: number): SpecificEnergy;
    static FromCaloriesPerGram(value: number): SpecificEnergy;
    static FromWattHoursPerKilogram(value: number): SpecificEnergy;
    static FromBtuPerPound(value: number): SpecificEnergy;
    static FromKilojoulesPerKilogram(value: number): SpecificEnergy;
    static FromMegajoulesPerKilogram(value: number): SpecificEnergy;
    static FromKilocaloriesPerGram(value: number): SpecificEnergy;
    static FromKilowattHoursPerKilogram(value: number): SpecificEnergy;
    static FromMegawattHoursPerKilogram(value: number): SpecificEnergy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: SpecificEnergyUnits): string;
}
//# sourceMappingURL=specificenergy.g.d.ts.map