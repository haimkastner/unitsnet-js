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
    Kilobritishthermalunits = 15,
    Megabritishthermalunits = 16,
    Gigabritishthermalunits = 17,
    Kilowatthours = 18,
    Megawatthours = 19,
    Gigawatthours = 20,
    Terawatthours = 21,
    Decathermsec = 22,
    Decathermsus = 23,
    Decathermsimperial = 24
}
export declare class Energy {
    private value;
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
    get Kilobritishthermalunits(): number;
    get Megabritishthermalunits(): number;
    get Gigabritishthermalunits(): number;
    get Kilowatthours(): number;
    get Megawatthours(): number;
    get Gigawatthours(): number;
    get Terawatthours(): number;
    get Decathermsec(): number;
    get Decathermsus(): number;
    get Decathermsimperial(): number;
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
    static FromKilobritishthermalunits(value: number): Energy;
    static FromMegabritishthermalunits(value: number): Energy;
    static FromGigabritishthermalunits(value: number): Energy;
    static FromKilowatthours(value: number): Energy;
    static FromMegawatthours(value: number): Energy;
    static FromGigawatthours(value: number): Energy;
    static FromTerawatthours(value: number): Energy;
    static FromDecathermsec(value: number): Energy;
    static FromDecathermsus(value: number): Energy;
    static FromDecathermsimperial(value: number): Energy;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=energy.g.d.ts.map