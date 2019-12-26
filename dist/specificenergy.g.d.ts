export declare enum SpecificEnergyUnits {
    JoulesPerKilogram = 0,
    CaloriesPerGram = 1,
    WattHoursPerKilogram = 2,
    BtuPerPound = 3,
    KilojoulePerKilogram = 4,
    MegajoulePerKilogram = 5,
    KilocaloriePerGram = 6,
    KilowattHourPerKilogram = 7,
    MegawattHourPerKilogram = 8
}
export declare class SpecificEnergy {
    private value;
    private joulesperkilogramLazy;
    private caloriespergramLazy;
    private watthoursperkilogramLazy;
    private btuperpoundLazy;
    private kilojouleperkilogramLazy;
    private megajouleperkilogramLazy;
    private kilocaloriepergramLazy;
    private kilowatthourperkilogramLazy;
    private megawatthourperkilogramLazy;
    constructor(value: number, fromUnit: SpecificEnergyUnits);
    get JoulesPerKilogram(): number;
    get CaloriesPerGram(): number;
    get WattHoursPerKilogram(): number;
    get BtuPerPound(): number;
    get KilojoulePerKilogram(): number;
    get MegajoulePerKilogram(): number;
    get KilocaloriePerGram(): number;
    get KilowattHourPerKilogram(): number;
    get MegawattHourPerKilogram(): number;
    static FromJoulesPerKilogram(value: number): SpecificEnergy;
    static FromCaloriesPerGram(value: number): SpecificEnergy;
    static FromWattHoursPerKilogram(value: number): SpecificEnergy;
    static FromBtuPerPound(value: number): SpecificEnergy;
    static FromKilojoulePerKilogram(value: number): SpecificEnergy;
    static FromMegajoulePerKilogram(value: number): SpecificEnergy;
    static FromKilocaloriePerGram(value: number): SpecificEnergy;
    static FromKilowattHourPerKilogram(value: number): SpecificEnergy;
    static FromMegawattHourPerKilogram(value: number): SpecificEnergy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: SpecificEnergyUnits): string;
}
//# sourceMappingURL=specificenergy.g.d.ts.map