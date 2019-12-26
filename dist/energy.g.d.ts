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
    Kilojoule = 10,
    Megajoule = 11,
    Gigajoule = 12,
    Kilocalorie = 13,
    Megacalorie = 14,
    KilobritishThermalUnit = 15,
    MegabritishThermalUnit = 16,
    GigabritishThermalUnit = 17,
    KilowattHour = 18,
    MegawattHour = 19,
    GigawattHour = 20,
    TerawattHour = 21,
    DecathermEc = 22,
    DecathermUs = 23,
    DecathermImperial = 24
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
    private kilojouleLazy;
    private megajouleLazy;
    private gigajouleLazy;
    private kilocalorieLazy;
    private megacalorieLazy;
    private kilobritishthermalunitLazy;
    private megabritishthermalunitLazy;
    private gigabritishthermalunitLazy;
    private kilowatthourLazy;
    private megawatthourLazy;
    private gigawatthourLazy;
    private terawatthourLazy;
    private decathermecLazy;
    private decathermusLazy;
    private decathermimperialLazy;
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
    get Kilojoule(): number;
    get Megajoule(): number;
    get Gigajoule(): number;
    get Kilocalorie(): number;
    get Megacalorie(): number;
    get KilobritishThermalUnit(): number;
    get MegabritishThermalUnit(): number;
    get GigabritishThermalUnit(): number;
    get KilowattHour(): number;
    get MegawattHour(): number;
    get GigawattHour(): number;
    get TerawattHour(): number;
    get DecathermEc(): number;
    get DecathermUs(): number;
    get DecathermImperial(): number;
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
    static FromKilojoule(value: number): Energy;
    static FromMegajoule(value: number): Energy;
    static FromGigajoule(value: number): Energy;
    static FromKilocalorie(value: number): Energy;
    static FromMegacalorie(value: number): Energy;
    static FromKilobritishThermalUnit(value: number): Energy;
    static FromMegabritishThermalUnit(value: number): Energy;
    static FromGigabritishThermalUnit(value: number): Energy;
    static FromKilowattHour(value: number): Energy;
    static FromMegawattHour(value: number): Energy;
    static FromGigawattHour(value: number): Energy;
    static FromTerawattHour(value: number): Energy;
    static FromDecathermEc(value: number): Energy;
    static FromDecathermUs(value: number): Energy;
    static FromDecathermImperial(value: number): Energy;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: EnergyUnits): string;
}
//# sourceMappingURL=energy.g.d.ts.map