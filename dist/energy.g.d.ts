export declare enum EnergyUnits {
    Joules = 0,
    Calories = 1,
    BritishThermalUnits = 2,
    ElectronVolts = 3,
    FootPounds = 4,
    Ergs = 5,
    WattHours = 6,
    ThermsEc = 7,
    ThermsUs = 8,
    ThermsImperial = 9,
    Kilojoules = 10,
    Megajoules = 11,
    Gigajoules = 12,
    Kilocalories = 13,
    Megacalories = 14,
    KilobritishThermalUnits = 15,
    MegabritishThermalUnits = 16,
    GigabritishThermalUnits = 17,
    KilowattHours = 18,
    MegawattHours = 19,
    GigawattHours = 20,
    TerawattHours = 21,
    DecathermsEc = 22,
    DecathermsUs = 23,
    DecathermsImperial = 24
}
export declare class Energy {
    private value;
    private joulesLazy;
    private caloriesLazy;
    private britishthermalunitsLazy;
    private electronvoltsLazy;
    private footpoundsLazy;
    private ergsLazy;
    private watthoursLazy;
    private thermsecLazy;
    private thermsusLazy;
    private thermsimperialLazy;
    private kilojoulesLazy;
    private megajoulesLazy;
    private gigajoulesLazy;
    private kilocaloriesLazy;
    private megacaloriesLazy;
    private kilobritishthermalunitsLazy;
    private megabritishthermalunitsLazy;
    private gigabritishthermalunitsLazy;
    private kilowatthoursLazy;
    private megawatthoursLazy;
    private gigawatthoursLazy;
    private terawatthoursLazy;
    private decathermsecLazy;
    private decathermsusLazy;
    private decathermsimperialLazy;
    constructor(value: number, fromUnit: EnergyUnits);
    get Joules(): number;
    get Calories(): number;
    get BritishThermalUnits(): number;
    get ElectronVolts(): number;
    get FootPounds(): number;
    get Ergs(): number;
    get WattHours(): number;
    get ThermsEc(): number;
    get ThermsUs(): number;
    get ThermsImperial(): number;
    get Kilojoules(): number;
    get Megajoules(): number;
    get Gigajoules(): number;
    get Kilocalories(): number;
    get Megacalories(): number;
    get KilobritishThermalUnits(): number;
    get MegabritishThermalUnits(): number;
    get GigabritishThermalUnits(): number;
    get KilowattHours(): number;
    get MegawattHours(): number;
    get GigawattHours(): number;
    get TerawattHours(): number;
    get DecathermsEc(): number;
    get DecathermsUs(): number;
    get DecathermsImperial(): number;
    static FromJoules(value: number): Energy;
    static FromCalories(value: number): Energy;
    static FromBritishThermalUnits(value: number): Energy;
    static FromElectronVolts(value: number): Energy;
    static FromFootPounds(value: number): Energy;
    static FromErgs(value: number): Energy;
    static FromWattHours(value: number): Energy;
    static FromThermsEc(value: number): Energy;
    static FromThermsUs(value: number): Energy;
    static FromThermsImperial(value: number): Energy;
    static FromKilojoules(value: number): Energy;
    static FromMegajoules(value: number): Energy;
    static FromGigajoules(value: number): Energy;
    static FromKilocalories(value: number): Energy;
    static FromMegacalories(value: number): Energy;
    static FromKilobritishThermalUnits(value: number): Energy;
    static FromMegabritishThermalUnits(value: number): Energy;
    static FromGigabritishThermalUnits(value: number): Energy;
    static FromKilowattHours(value: number): Energy;
    static FromMegawattHours(value: number): Energy;
    static FromGigawattHours(value: number): Energy;
    static FromTerawattHours(value: number): Energy;
    static FromDecathermsEc(value: number): Energy;
    static FromDecathermsUs(value: number): Energy;
    static FromDecathermsImperial(value: number): Energy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: EnergyUnits): string;
}
//# sourceMappingURL=energy.g.d.ts.map