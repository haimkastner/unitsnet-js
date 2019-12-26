export declare enum PowerUnits {
    Watts = 0,
    MechanicalHorsepower = 1,
    MetricHorsepower = 2,
    ElectricalHorsepower = 3,
    BoilerHorsepower = 4,
    HydraulicHorsepower = 5,
    BritishThermalUnitsPerHour = 6,
    JoulesPerHour = 7,
    Femtowatt = 8,
    Picowatt = 9,
    Nanowatt = 10,
    Microwatt = 11,
    Deciwatt = 12,
    Decawatt = 13,
    Kilowatt = 14,
    Megawatt = 15,
    Gigawatt = 16,
    Terawatt = 17,
    Petawatt = 18,
    KilobritishThermalUnitPerHour = 19,
    KilojoulePerHour = 20,
    MegajoulePerHour = 21,
    GigajoulePerHour = 22
}
export declare class Power {
    private value;
    private wattsLazy;
    private mechanicalhorsepowerLazy;
    private metrichorsepowerLazy;
    private electricalhorsepowerLazy;
    private boilerhorsepowerLazy;
    private hydraulichorsepowerLazy;
    private britishthermalunitsperhourLazy;
    private joulesperhourLazy;
    private femtowattLazy;
    private picowattLazy;
    private nanowattLazy;
    private microwattLazy;
    private deciwattLazy;
    private decawattLazy;
    private kilowattLazy;
    private megawattLazy;
    private gigawattLazy;
    private terawattLazy;
    private petawattLazy;
    private kilobritishthermalunitperhourLazy;
    private kilojouleperhourLazy;
    private megajouleperhourLazy;
    private gigajouleperhourLazy;
    constructor(value: number, fromUnit: PowerUnits);
    get Watts(): number;
    get MechanicalHorsepower(): number;
    get MetricHorsepower(): number;
    get ElectricalHorsepower(): number;
    get BoilerHorsepower(): number;
    get HydraulicHorsepower(): number;
    get BritishThermalUnitsPerHour(): number;
    get JoulesPerHour(): number;
    get Femtowatt(): number;
    get Picowatt(): number;
    get Nanowatt(): number;
    get Microwatt(): number;
    get Deciwatt(): number;
    get Decawatt(): number;
    get Kilowatt(): number;
    get Megawatt(): number;
    get Gigawatt(): number;
    get Terawatt(): number;
    get Petawatt(): number;
    get KilobritishThermalUnitPerHour(): number;
    get KilojoulePerHour(): number;
    get MegajoulePerHour(): number;
    get GigajoulePerHour(): number;
    static FromWatts(value: number): Power;
    static FromMechanicalHorsepower(value: number): Power;
    static FromMetricHorsepower(value: number): Power;
    static FromElectricalHorsepower(value: number): Power;
    static FromBoilerHorsepower(value: number): Power;
    static FromHydraulicHorsepower(value: number): Power;
    static FromBritishThermalUnitsPerHour(value: number): Power;
    static FromJoulesPerHour(value: number): Power;
    static FromFemtowatt(value: number): Power;
    static FromPicowatt(value: number): Power;
    static FromNanowatt(value: number): Power;
    static FromMicrowatt(value: number): Power;
    static FromDeciwatt(value: number): Power;
    static FromDecawatt(value: number): Power;
    static FromKilowatt(value: number): Power;
    static FromMegawatt(value: number): Power;
    static FromGigawatt(value: number): Power;
    static FromTerawatt(value: number): Power;
    static FromPetawatt(value: number): Power;
    static FromKilobritishThermalUnitPerHour(value: number): Power;
    static FromKilojoulePerHour(value: number): Power;
    static FromMegajoulePerHour(value: number): Power;
    static FromGigajoulePerHour(value: number): Power;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: PowerUnits): string;
}
//# sourceMappingURL=power.g.d.ts.map