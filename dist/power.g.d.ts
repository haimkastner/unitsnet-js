/** PowerUnits enumeration */
export declare enum PowerUnits {
    /** */
    Watts = 0,
    /** */
    MechanicalHorsepower = 1,
    /** */
    MetricHorsepower = 2,
    /** */
    ElectricalHorsepower = 3,
    /** */
    BoilerHorsepower = 4,
    /** */
    HydraulicHorsepower = 5,
    /** */
    BritishThermalUnitsPerHour = 6,
    /** */
    JoulesPerHour = 7,
    /** */
    Femtowatts = 8,
    /** */
    Picowatts = 9,
    /** */
    Nanowatts = 10,
    /** */
    Microwatts = 11,
    /** */
    Deciwatts = 12,
    /** */
    Decawatts = 13,
    /** */
    Kilowatts = 14,
    /** */
    Megawatts = 15,
    /** */
    Gigawatts = 16,
    /** */
    Terawatts = 17,
    /** */
    Petawatts = 18,
    /** */
    KilobritishThermalUnitsPerHour = 19,
    /** */
    KilojoulesPerHour = 20,
    /** */
    MegajoulesPerHour = 21,
    /** */
    GigajoulesPerHour = 22
}
/** In physics, power is the rate of doing work. It is equivalent to an amount of energy consumed per unit time. */
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
    private femtowattsLazy;
    private picowattsLazy;
    private nanowattsLazy;
    private microwattsLazy;
    private deciwattsLazy;
    private decawattsLazy;
    private kilowattsLazy;
    private megawattsLazy;
    private gigawattsLazy;
    private terawattsLazy;
    private petawattsLazy;
    private kilobritishthermalunitsperhourLazy;
    private kilojoulesperhourLazy;
    private megajoulesperhourLazy;
    private gigajoulesperhourLazy;
    /**
     * Create a new Power.
     * @param value The value.
     * @param fromUnit The ‘Power’ unit to create from.
     */
    constructor(value: number, fromUnit: PowerUnits);
    /**
     * The base value of Power is Watt.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Watts(): number;
    /** */
    get MechanicalHorsepower(): number;
    /** */
    get MetricHorsepower(): number;
    /** */
    get ElectricalHorsepower(): number;
    /** */
    get BoilerHorsepower(): number;
    /** */
    get HydraulicHorsepower(): number;
    /** */
    get BritishThermalUnitsPerHour(): number;
    /** */
    get JoulesPerHour(): number;
    /** */
    get Femtowatts(): number;
    /** */
    get Picowatts(): number;
    /** */
    get Nanowatts(): number;
    /** */
    get Microwatts(): number;
    /** */
    get Deciwatts(): number;
    /** */
    get Decawatts(): number;
    /** */
    get Kilowatts(): number;
    /** */
    get Megawatts(): number;
    /** */
    get Gigawatts(): number;
    /** */
    get Terawatts(): number;
    /** */
    get Petawatts(): number;
    /** */
    get KilobritishThermalUnitsPerHour(): number;
    /** */
    get KilojoulesPerHour(): number;
    /** */
    get MegajoulesPerHour(): number;
    /** */
    get GigajoulesPerHour(): number;
    /**
     * Create a new Power instance from a Watts
     *
     * @param value The unit as Watts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromWatts(value: number): Power;
    /**
     * Create a new Power instance from a MechanicalHorsepower
     *
     * @param value The unit as MechanicalHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    static FromMechanicalHorsepower(value: number): Power;
    /**
     * Create a new Power instance from a MetricHorsepower
     *
     * @param value The unit as MetricHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    static FromMetricHorsepower(value: number): Power;
    /**
     * Create a new Power instance from a ElectricalHorsepower
     *
     * @param value The unit as ElectricalHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    static FromElectricalHorsepower(value: number): Power;
    /**
     * Create a new Power instance from a BoilerHorsepower
     *
     * @param value The unit as BoilerHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    static FromBoilerHorsepower(value: number): Power;
    /**
     * Create a new Power instance from a HydraulicHorsepower
     *
     * @param value The unit as HydraulicHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    static FromHydraulicHorsepower(value: number): Power;
    /**
     * Create a new Power instance from a BritishThermalUnitsPerHour
     *
     * @param value The unit as BritishThermalUnitsPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    static FromBritishThermalUnitsPerHour(value: number): Power;
    /**
     * Create a new Power instance from a JoulesPerHour
     *
     * @param value The unit as JoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    static FromJoulesPerHour(value: number): Power;
    /**
     * Create a new Power instance from a Femtowatts
     *
     * @param value The unit as Femtowatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromFemtowatts(value: number): Power;
    /**
     * Create a new Power instance from a Picowatts
     *
     * @param value The unit as Picowatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromPicowatts(value: number): Power;
    /**
     * Create a new Power instance from a Nanowatts
     *
     * @param value The unit as Nanowatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromNanowatts(value: number): Power;
    /**
     * Create a new Power instance from a Microwatts
     *
     * @param value The unit as Microwatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromMicrowatts(value: number): Power;
    /**
     * Create a new Power instance from a Deciwatts
     *
     * @param value The unit as Deciwatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromDeciwatts(value: number): Power;
    /**
     * Create a new Power instance from a Decawatts
     *
     * @param value The unit as Decawatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromDecawatts(value: number): Power;
    /**
     * Create a new Power instance from a Kilowatts
     *
     * @param value The unit as Kilowatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromKilowatts(value: number): Power;
    /**
     * Create a new Power instance from a Megawatts
     *
     * @param value The unit as Megawatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromMegawatts(value: number): Power;
    /**
     * Create a new Power instance from a Gigawatts
     *
     * @param value The unit as Gigawatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromGigawatts(value: number): Power;
    /**
     * Create a new Power instance from a Terawatts
     *
     * @param value The unit as Terawatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromTerawatts(value: number): Power;
    /**
     * Create a new Power instance from a Petawatts
     *
     * @param value The unit as Petawatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromPetawatts(value: number): Power;
    /**
     * Create a new Power instance from a KilobritishThermalUnitsPerHour
     *
     * @param value The unit as KilobritishThermalUnitsPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    static FromKilobritishThermalUnitsPerHour(value: number): Power;
    /**
     * Create a new Power instance from a KilojoulesPerHour
     *
     * @param value The unit as KilojoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    static FromKilojoulesPerHour(value: number): Power;
    /**
     * Create a new Power instance from a MegajoulesPerHour
     *
     * @param value The unit as MegajoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    static FromMegajoulesPerHour(value: number): Power;
    /**
     * Create a new Power instance from a GigajoulesPerHour
     *
     * @param value The unit as GigajoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    static FromGigajoulesPerHour(value: number): Power;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Power to string.
     * Note! the default format for Power is Watts.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Power.
     * @returns The string format of the Power.
     */
    toString(toUnit?: PowerUnits): string;
}
//# sourceMappingURL=power.g.d.ts.map