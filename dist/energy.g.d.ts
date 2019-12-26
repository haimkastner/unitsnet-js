/** EnergyUnits enumeration */
export declare enum EnergyUnits {
    /** */
    Joules = 0,
    /** */
    Calories = 1,
    /** */
    BritishThermalUnits = 2,
    /** */
    ElectronVolts = 3,
    /** */
    FootPounds = 4,
    /** */
    Ergs = 5,
    /** */
    WattHours = 6,
    /** */
    ThermsEc = 7,
    /** */
    ThermsUs = 8,
    /** */
    ThermsImperial = 9,
    /** */
    Kilojoules = 10,
    /** */
    Megajoules = 11,
    /** */
    Gigajoules = 12,
    /** */
    Kilocalories = 13,
    /** */
    Megacalories = 14,
    /** */
    KilobritishThermalUnits = 15,
    /** */
    MegabritishThermalUnits = 16,
    /** */
    GigabritishThermalUnits = 17,
    /** */
    KilowattHours = 18,
    /** */
    MegawattHours = 19,
    /** */
    GigawattHours = 20,
    /** */
    TerawattHours = 21,
    /** */
    DecathermsEc = 22,
    /** */
    DecathermsUs = 23,
    /** */
    DecathermsImperial = 24
}
/** The joule, symbol J, is a derived unit of energy, work, or amount of heat in the International System of Units. It is equal to the energy transferred (or work done) when applying a force of one newton through a distance of one metre (1 newton metre or N·m), or in passing an electric current of one ampere through a resistance of one ohm for one second. Many other units of energy are included. Please do not confuse this definition of the calorie with the one colloquially used by the food industry, the large calorie, which is equivalent to 1 kcal. Thermochemical definition of the calorie is used. For BTU, the IT definition is used. */
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
    /**
     * Create a new Energy.
     * @param value The value.
     * @param fromUnit The ‘Energy’ unit to create from.
     */
    constructor(value: number, fromUnit: EnergyUnits);
    /**
     * The base value of Energy is Joule.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Joules(): number;
    /** */
    get Calories(): number;
    /** */
    get BritishThermalUnits(): number;
    /** */
    get ElectronVolts(): number;
    /** */
    get FootPounds(): number;
    /** */
    get Ergs(): number;
    /** */
    get WattHours(): number;
    /** */
    get ThermsEc(): number;
    /** */
    get ThermsUs(): number;
    /** */
    get ThermsImperial(): number;
    /** */
    get Kilojoules(): number;
    /** */
    get Megajoules(): number;
    /** */
    get Gigajoules(): number;
    /** */
    get Kilocalories(): number;
    /** */
    get Megacalories(): number;
    /** */
    get KilobritishThermalUnits(): number;
    /** */
    get MegabritishThermalUnits(): number;
    /** */
    get GigabritishThermalUnits(): number;
    /** */
    get KilowattHours(): number;
    /** */
    get MegawattHours(): number;
    /** */
    get GigawattHours(): number;
    /** */
    get TerawattHours(): number;
    /** */
    get DecathermsEc(): number;
    /** */
    get DecathermsUs(): number;
    /** */
    get DecathermsImperial(): number;
    /**
     * Create a new Energy instance from a Joules
     *
     * @param value The unit as Joules to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromJoules(value: number): Energy;
    /**
     * Create a new Energy instance from a Calories
     *
     * @param value The unit as Calories to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromCalories(value: number): Energy;
    /**
     * Create a new Energy instance from a BritishThermalUnits
     *
     * @param value The unit as BritishThermalUnits to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromBritishThermalUnits(value: number): Energy;
    /**
     * Create a new Energy instance from a ElectronVolts
     *
     * @param value The unit as ElectronVolts to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromElectronVolts(value: number): Energy;
    /**
     * Create a new Energy instance from a FootPounds
     *
     * @param value The unit as FootPounds to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromFootPounds(value: number): Energy;
    /**
     * Create a new Energy instance from a Ergs
     *
     * @param value The unit as Ergs to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromErgs(value: number): Energy;
    /**
     * Create a new Energy instance from a WattHours
     *
     * @param value The unit as WattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromWattHours(value: number): Energy;
    /**
     * Create a new Energy instance from a ThermsEc
     *
     * @param value The unit as ThermsEc to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromThermsEc(value: number): Energy;
    /**
     * Create a new Energy instance from a ThermsUs
     *
     * @param value The unit as ThermsUs to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromThermsUs(value: number): Energy;
    /**
     * Create a new Energy instance from a ThermsImperial
     *
     * @param value The unit as ThermsImperial to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromThermsImperial(value: number): Energy;
    /**
     * Create a new Energy instance from a Kilojoules
     *
     * @param value The unit as Kilojoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromKilojoules(value: number): Energy;
    /**
     * Create a new Energy instance from a Megajoules
     *
     * @param value The unit as Megajoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromMegajoules(value: number): Energy;
    /**
     * Create a new Energy instance from a Gigajoules
     *
     * @param value The unit as Gigajoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromGigajoules(value: number): Energy;
    /**
     * Create a new Energy instance from a Kilocalories
     *
     * @param value The unit as Kilocalories to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromKilocalories(value: number): Energy;
    /**
     * Create a new Energy instance from a Megacalories
     *
     * @param value The unit as Megacalories to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromMegacalories(value: number): Energy;
    /**
     * Create a new Energy instance from a KilobritishThermalUnits
     *
     * @param value The unit as KilobritishThermalUnits to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromKilobritishThermalUnits(value: number): Energy;
    /**
     * Create a new Energy instance from a MegabritishThermalUnits
     *
     * @param value The unit as MegabritishThermalUnits to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromMegabritishThermalUnits(value: number): Energy;
    /**
     * Create a new Energy instance from a GigabritishThermalUnits
     *
     * @param value The unit as GigabritishThermalUnits to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromGigabritishThermalUnits(value: number): Energy;
    /**
     * Create a new Energy instance from a KilowattHours
     *
     * @param value The unit as KilowattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromKilowattHours(value: number): Energy;
    /**
     * Create a new Energy instance from a MegawattHours
     *
     * @param value The unit as MegawattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromMegawattHours(value: number): Energy;
    /**
     * Create a new Energy instance from a GigawattHours
     *
     * @param value The unit as GigawattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromGigawattHours(value: number): Energy;
    /**
     * Create a new Energy instance from a TerawattHours
     *
     * @param value The unit as TerawattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromTerawattHours(value: number): Energy;
    /**
     * Create a new Energy instance from a DecathermsEc
     *
     * @param value The unit as DecathermsEc to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromDecathermsEc(value: number): Energy;
    /**
     * Create a new Energy instance from a DecathermsUs
     *
     * @param value The unit as DecathermsUs to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromDecathermsUs(value: number): Energy;
    /**
     * Create a new Energy instance from a DecathermsImperial
     *
     * @param value The unit as DecathermsImperial to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromDecathermsImperial(value: number): Energy;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Energy to string.
     * Note! the default format for Energy is Joules.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Energy.
     * @returns The string format of the Energy.
     */
    toString(toUnit?: EnergyUnits): string;
}
//# sourceMappingURL=energy.g.d.ts.map