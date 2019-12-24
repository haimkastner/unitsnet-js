export declare enum PowerUnits {
    Watts = 0,
    MechanicalHorsepower = 1,
    MetricHorsepower = 2,
    ElectricalHorsepower = 3,
    BoilerHorsepower = 4,
    HydraulicHorsepower = 5,
    BritishThermalUnitsPerHour = 6,
    JoulesPerHour = 7,
    Femtowatts = 8,
    Picowatts = 9,
    Nanowatts = 10,
    Microwatts = 11,
    Deciwatts = 12,
    Decawatts = 13,
    Kilowatts = 14,
    Megawatts = 15,
    Gigawatts = 16,
    Terawatts = 17,
    Petawatts = 18,
    Kilobritishthermalunitsperhour = 19,
    Kilojoulesperhour = 20,
    Megajoulesperhour = 21,
    Gigajoulesperhour = 22
}
export declare class Power {
    private value;
    constructor(value: number, fromUnit: PowerUnits);
    get Watts(): number;
    get MechanicalHorsepower(): number;
    get MetricHorsepower(): number;
    get ElectricalHorsepower(): number;
    get BoilerHorsepower(): number;
    get HydraulicHorsepower(): number;
    get BritishThermalUnitsPerHour(): number;
    get JoulesPerHour(): number;
    get Femtowatts(): number;
    get Picowatts(): number;
    get Nanowatts(): number;
    get Microwatts(): number;
    get Deciwatts(): number;
    get Decawatts(): number;
    get Kilowatts(): number;
    get Megawatts(): number;
    get Gigawatts(): number;
    get Terawatts(): number;
    get Petawatts(): number;
    get Kilobritishthermalunitsperhour(): number;
    get Kilojoulesperhour(): number;
    get Megajoulesperhour(): number;
    get Gigajoulesperhour(): number;
    static FromWatts(value: number): Power;
    static FromMechanicalHorsepower(value: number): Power;
    static FromMetricHorsepower(value: number): Power;
    static FromElectricalHorsepower(value: number): Power;
    static FromBoilerHorsepower(value: number): Power;
    static FromHydraulicHorsepower(value: number): Power;
    static FromBritishThermalUnitsPerHour(value: number): Power;
    static FromJoulesPerHour(value: number): Power;
    static FromFemtowatts(value: number): Power;
    static FromPicowatts(value: number): Power;
    static FromNanowatts(value: number): Power;
    static FromMicrowatts(value: number): Power;
    static FromDeciwatts(value: number): Power;
    static FromDecawatts(value: number): Power;
    static FromKilowatts(value: number): Power;
    static FromMegawatts(value: number): Power;
    static FromGigawatts(value: number): Power;
    static FromTerawatts(value: number): Power;
    static FromPetawatts(value: number): Power;
    static FromKilobritishthermalunitsperhour(value: number): Power;
    static FromKilojoulesperhour(value: number): Power;
    static FromMegajoulesperhour(value: number): Power;
    static FromGigajoulesperhour(value: number): Power;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=power.g.d.ts.map