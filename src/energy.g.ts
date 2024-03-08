/** EnergyUnits enumeration */
export enum EnergyUnits {
    /** */
    Joules = "Joule",
    /** */
    Calories = "Calorie",
    /** */
    BritishThermalUnits = "BritishThermalUnit",
    /** */
    ElectronVolts = "ElectronVolt",
    /** */
    FootPounds = "FootPound",
    /** */
    Ergs = "Erg",
    /** */
    WattHours = "WattHour",
    /** */
    WattDays = "WattDay",
    /** */
    ThermsEc = "ThermEc",
    /** */
    ThermsUs = "ThermUs",
    /** */
    ThermsImperial = "ThermImperial",
    /** */
    HorsepowerHours = "HorsepowerHour",
    /** */
    Nanojoules = "Nanojoule",
    /** */
    Microjoules = "Microjoule",
    /** */
    Millijoules = "Millijoule",
    /** */
    Kilojoules = "Kilojoule",
    /** */
    Megajoules = "Megajoule",
    /** */
    Gigajoules = "Gigajoule",
    /** */
    Terajoules = "Terajoule",
    /** */
    Petajoules = "Petajoule",
    /** */
    Kilocalories = "Kilocalorie",
    /** */
    Megacalories = "Megacalorie",
    /** */
    KilobritishThermalUnits = "KilobritishThermalUnit",
    /** */
    MegabritishThermalUnits = "MegabritishThermalUnit",
    /** */
    GigabritishThermalUnits = "GigabritishThermalUnit",
    /** */
    KiloelectronVolts = "KiloelectronVolt",
    /** */
    MegaelectronVolts = "MegaelectronVolt",
    /** */
    GigaelectronVolts = "GigaelectronVolt",
    /** */
    TeraelectronVolts = "TeraelectronVolt",
    /** */
    KilowattHours = "KilowattHour",
    /** */
    MegawattHours = "MegawattHour",
    /** */
    GigawattHours = "GigawattHour",
    /** */
    TerawattHours = "TerawattHour",
    /** */
    KilowattDays = "KilowattDay",
    /** */
    MegawattDays = "MegawattDay",
    /** */
    GigawattDays = "GigawattDay",
    /** */
    TerawattDays = "TerawattDay",
    /** */
    DecathermsEc = "DecathermEc",
    /** */
    DecathermsUs = "DecathermUs",
    /** */
    DecathermsImperial = "DecathermImperial"
}

/** The joule, symbol J, is a derived unit of energy, work, or amount of heat in the International System of Units. It is equal to the energy transferred (or work done) when applying a force of one newton through a distance of one metre (1 newton metre or N·m), or in passing an electric current of one ampere through a resistance of one ohm for one second. Many other units of energy are included. Please do not confuse this definition of the calorie with the one colloquially used by the food industry, the large calorie, which is equivalent to 1 kcal. Thermochemical definition of the calorie is used. For BTU, the IT definition is used. */
export class Energy {
    private value: number;
    private joulesLazy: number | null = null;
    private caloriesLazy: number | null = null;
    private britishthermalunitsLazy: number | null = null;
    private electronvoltsLazy: number | null = null;
    private footpoundsLazy: number | null = null;
    private ergsLazy: number | null = null;
    private watthoursLazy: number | null = null;
    private wattdaysLazy: number | null = null;
    private thermsecLazy: number | null = null;
    private thermsusLazy: number | null = null;
    private thermsimperialLazy: number | null = null;
    private horsepowerhoursLazy: number | null = null;
    private nanojoulesLazy: number | null = null;
    private microjoulesLazy: number | null = null;
    private millijoulesLazy: number | null = null;
    private kilojoulesLazy: number | null = null;
    private megajoulesLazy: number | null = null;
    private gigajoulesLazy: number | null = null;
    private terajoulesLazy: number | null = null;
    private petajoulesLazy: number | null = null;
    private kilocaloriesLazy: number | null = null;
    private megacaloriesLazy: number | null = null;
    private kilobritishthermalunitsLazy: number | null = null;
    private megabritishthermalunitsLazy: number | null = null;
    private gigabritishthermalunitsLazy: number | null = null;
    private kiloelectronvoltsLazy: number | null = null;
    private megaelectronvoltsLazy: number | null = null;
    private gigaelectronvoltsLazy: number | null = null;
    private teraelectronvoltsLazy: number | null = null;
    private kilowatthoursLazy: number | null = null;
    private megawatthoursLazy: number | null = null;
    private gigawatthoursLazy: number | null = null;
    private terawatthoursLazy: number | null = null;
    private kilowattdaysLazy: number | null = null;
    private megawattdaysLazy: number | null = null;
    private gigawattdaysLazy: number | null = null;
    private terawattdaysLazy: number | null = null;
    private decathermsecLazy: number | null = null;
    private decathermsusLazy: number | null = null;
    private decathermsimperialLazy: number | null = null;

    /**
     * Create a new Energy.
     * @param value The value.
     * @param fromUnit The ‘Energy’ unit to create from.
     * The default unit is Joules
     */
    public constructor(value: number, fromUnit: EnergyUnits = EnergyUnits.Joules) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Energy is Joules.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Joules(): number {
        if(this.joulesLazy !== null){
            return this.joulesLazy;
        }
        return this.joulesLazy = this.convertFromBase(EnergyUnits.Joules);
    }

    /** */
    public get Calories(): number {
        if(this.caloriesLazy !== null){
            return this.caloriesLazy;
        }
        return this.caloriesLazy = this.convertFromBase(EnergyUnits.Calories);
    }

    /** */
    public get BritishThermalUnits(): number {
        if(this.britishthermalunitsLazy !== null){
            return this.britishthermalunitsLazy;
        }
        return this.britishthermalunitsLazy = this.convertFromBase(EnergyUnits.BritishThermalUnits);
    }

    /** */
    public get ElectronVolts(): number {
        if(this.electronvoltsLazy !== null){
            return this.electronvoltsLazy;
        }
        return this.electronvoltsLazy = this.convertFromBase(EnergyUnits.ElectronVolts);
    }

    /** */
    public get FootPounds(): number {
        if(this.footpoundsLazy !== null){
            return this.footpoundsLazy;
        }
        return this.footpoundsLazy = this.convertFromBase(EnergyUnits.FootPounds);
    }

    /** */
    public get Ergs(): number {
        if(this.ergsLazy !== null){
            return this.ergsLazy;
        }
        return this.ergsLazy = this.convertFromBase(EnergyUnits.Ergs);
    }

    /** */
    public get WattHours(): number {
        if(this.watthoursLazy !== null){
            return this.watthoursLazy;
        }
        return this.watthoursLazy = this.convertFromBase(EnergyUnits.WattHours);
    }

    /** */
    public get WattDays(): number {
        if(this.wattdaysLazy !== null){
            return this.wattdaysLazy;
        }
        return this.wattdaysLazy = this.convertFromBase(EnergyUnits.WattDays);
    }

    /** */
    public get ThermsEc(): number {
        if(this.thermsecLazy !== null){
            return this.thermsecLazy;
        }
        return this.thermsecLazy = this.convertFromBase(EnergyUnits.ThermsEc);
    }

    /** */
    public get ThermsUs(): number {
        if(this.thermsusLazy !== null){
            return this.thermsusLazy;
        }
        return this.thermsusLazy = this.convertFromBase(EnergyUnits.ThermsUs);
    }

    /** */
    public get ThermsImperial(): number {
        if(this.thermsimperialLazy !== null){
            return this.thermsimperialLazy;
        }
        return this.thermsimperialLazy = this.convertFromBase(EnergyUnits.ThermsImperial);
    }

    /** */
    public get HorsepowerHours(): number {
        if(this.horsepowerhoursLazy !== null){
            return this.horsepowerhoursLazy;
        }
        return this.horsepowerhoursLazy = this.convertFromBase(EnergyUnits.HorsepowerHours);
    }

    /** */
    public get Nanojoules(): number {
        if(this.nanojoulesLazy !== null){
            return this.nanojoulesLazy;
        }
        return this.nanojoulesLazy = this.convertFromBase(EnergyUnits.Nanojoules);
    }

    /** */
    public get Microjoules(): number {
        if(this.microjoulesLazy !== null){
            return this.microjoulesLazy;
        }
        return this.microjoulesLazy = this.convertFromBase(EnergyUnits.Microjoules);
    }

    /** */
    public get Millijoules(): number {
        if(this.millijoulesLazy !== null){
            return this.millijoulesLazy;
        }
        return this.millijoulesLazy = this.convertFromBase(EnergyUnits.Millijoules);
    }

    /** */
    public get Kilojoules(): number {
        if(this.kilojoulesLazy !== null){
            return this.kilojoulesLazy;
        }
        return this.kilojoulesLazy = this.convertFromBase(EnergyUnits.Kilojoules);
    }

    /** */
    public get Megajoules(): number {
        if(this.megajoulesLazy !== null){
            return this.megajoulesLazy;
        }
        return this.megajoulesLazy = this.convertFromBase(EnergyUnits.Megajoules);
    }

    /** */
    public get Gigajoules(): number {
        if(this.gigajoulesLazy !== null){
            return this.gigajoulesLazy;
        }
        return this.gigajoulesLazy = this.convertFromBase(EnergyUnits.Gigajoules);
    }

    /** */
    public get Terajoules(): number {
        if(this.terajoulesLazy !== null){
            return this.terajoulesLazy;
        }
        return this.terajoulesLazy = this.convertFromBase(EnergyUnits.Terajoules);
    }

    /** */
    public get Petajoules(): number {
        if(this.petajoulesLazy !== null){
            return this.petajoulesLazy;
        }
        return this.petajoulesLazy = this.convertFromBase(EnergyUnits.Petajoules);
    }

    /** */
    public get Kilocalories(): number {
        if(this.kilocaloriesLazy !== null){
            return this.kilocaloriesLazy;
        }
        return this.kilocaloriesLazy = this.convertFromBase(EnergyUnits.Kilocalories);
    }

    /** */
    public get Megacalories(): number {
        if(this.megacaloriesLazy !== null){
            return this.megacaloriesLazy;
        }
        return this.megacaloriesLazy = this.convertFromBase(EnergyUnits.Megacalories);
    }

    /** */
    public get KilobritishThermalUnits(): number {
        if(this.kilobritishthermalunitsLazy !== null){
            return this.kilobritishthermalunitsLazy;
        }
        return this.kilobritishthermalunitsLazy = this.convertFromBase(EnergyUnits.KilobritishThermalUnits);
    }

    /** */
    public get MegabritishThermalUnits(): number {
        if(this.megabritishthermalunitsLazy !== null){
            return this.megabritishthermalunitsLazy;
        }
        return this.megabritishthermalunitsLazy = this.convertFromBase(EnergyUnits.MegabritishThermalUnits);
    }

    /** */
    public get GigabritishThermalUnits(): number {
        if(this.gigabritishthermalunitsLazy !== null){
            return this.gigabritishthermalunitsLazy;
        }
        return this.gigabritishthermalunitsLazy = this.convertFromBase(EnergyUnits.GigabritishThermalUnits);
    }

    /** */
    public get KiloelectronVolts(): number {
        if(this.kiloelectronvoltsLazy !== null){
            return this.kiloelectronvoltsLazy;
        }
        return this.kiloelectronvoltsLazy = this.convertFromBase(EnergyUnits.KiloelectronVolts);
    }

    /** */
    public get MegaelectronVolts(): number {
        if(this.megaelectronvoltsLazy !== null){
            return this.megaelectronvoltsLazy;
        }
        return this.megaelectronvoltsLazy = this.convertFromBase(EnergyUnits.MegaelectronVolts);
    }

    /** */
    public get GigaelectronVolts(): number {
        if(this.gigaelectronvoltsLazy !== null){
            return this.gigaelectronvoltsLazy;
        }
        return this.gigaelectronvoltsLazy = this.convertFromBase(EnergyUnits.GigaelectronVolts);
    }

    /** */
    public get TeraelectronVolts(): number {
        if(this.teraelectronvoltsLazy !== null){
            return this.teraelectronvoltsLazy;
        }
        return this.teraelectronvoltsLazy = this.convertFromBase(EnergyUnits.TeraelectronVolts);
    }

    /** */
    public get KilowattHours(): number {
        if(this.kilowatthoursLazy !== null){
            return this.kilowatthoursLazy;
        }
        return this.kilowatthoursLazy = this.convertFromBase(EnergyUnits.KilowattHours);
    }

    /** */
    public get MegawattHours(): number {
        if(this.megawatthoursLazy !== null){
            return this.megawatthoursLazy;
        }
        return this.megawatthoursLazy = this.convertFromBase(EnergyUnits.MegawattHours);
    }

    /** */
    public get GigawattHours(): number {
        if(this.gigawatthoursLazy !== null){
            return this.gigawatthoursLazy;
        }
        return this.gigawatthoursLazy = this.convertFromBase(EnergyUnits.GigawattHours);
    }

    /** */
    public get TerawattHours(): number {
        if(this.terawatthoursLazy !== null){
            return this.terawatthoursLazy;
        }
        return this.terawatthoursLazy = this.convertFromBase(EnergyUnits.TerawattHours);
    }

    /** */
    public get KilowattDays(): number {
        if(this.kilowattdaysLazy !== null){
            return this.kilowattdaysLazy;
        }
        return this.kilowattdaysLazy = this.convertFromBase(EnergyUnits.KilowattDays);
    }

    /** */
    public get MegawattDays(): number {
        if(this.megawattdaysLazy !== null){
            return this.megawattdaysLazy;
        }
        return this.megawattdaysLazy = this.convertFromBase(EnergyUnits.MegawattDays);
    }

    /** */
    public get GigawattDays(): number {
        if(this.gigawattdaysLazy !== null){
            return this.gigawattdaysLazy;
        }
        return this.gigawattdaysLazy = this.convertFromBase(EnergyUnits.GigawattDays);
    }

    /** */
    public get TerawattDays(): number {
        if(this.terawattdaysLazy !== null){
            return this.terawattdaysLazy;
        }
        return this.terawattdaysLazy = this.convertFromBase(EnergyUnits.TerawattDays);
    }

    /** */
    public get DecathermsEc(): number {
        if(this.decathermsecLazy !== null){
            return this.decathermsecLazy;
        }
        return this.decathermsecLazy = this.convertFromBase(EnergyUnits.DecathermsEc);
    }

    /** */
    public get DecathermsUs(): number {
        if(this.decathermsusLazy !== null){
            return this.decathermsusLazy;
        }
        return this.decathermsusLazy = this.convertFromBase(EnergyUnits.DecathermsUs);
    }

    /** */
    public get DecathermsImperial(): number {
        if(this.decathermsimperialLazy !== null){
            return this.decathermsimperialLazy;
        }
        return this.decathermsimperialLazy = this.convertFromBase(EnergyUnits.DecathermsImperial);
    }

    /**
     * Create a new Energy instance from a Joules
     *
     * @param value The unit as Joules to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromJoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Joules);
    }

    /**
     * Create a new Energy instance from a Calories
     *
     * @param value The unit as Calories to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromCalories(value: number): Energy {
        return new Energy(value, EnergyUnits.Calories);
    }

    /**
     * Create a new Energy instance from a BritishThermalUnits
     *
     * @param value The unit as BritishThermalUnits to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromBritishThermalUnits(value: number): Energy {
        return new Energy(value, EnergyUnits.BritishThermalUnits);
    }

    /**
     * Create a new Energy instance from a ElectronVolts
     *
     * @param value The unit as ElectronVolts to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromElectronVolts(value: number): Energy {
        return new Energy(value, EnergyUnits.ElectronVolts);
    }

    /**
     * Create a new Energy instance from a FootPounds
     *
     * @param value The unit as FootPounds to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromFootPounds(value: number): Energy {
        return new Energy(value, EnergyUnits.FootPounds);
    }

    /**
     * Create a new Energy instance from a Ergs
     *
     * @param value The unit as Ergs to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromErgs(value: number): Energy {
        return new Energy(value, EnergyUnits.Ergs);
    }

    /**
     * Create a new Energy instance from a WattHours
     *
     * @param value The unit as WattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromWattHours(value: number): Energy {
        return new Energy(value, EnergyUnits.WattHours);
    }

    /**
     * Create a new Energy instance from a WattDays
     *
     * @param value The unit as WattDays to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromWattDays(value: number): Energy {
        return new Energy(value, EnergyUnits.WattDays);
    }

    /**
     * Create a new Energy instance from a ThermsEc
     *
     * @param value The unit as ThermsEc to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromThermsEc(value: number): Energy {
        return new Energy(value, EnergyUnits.ThermsEc);
    }

    /**
     * Create a new Energy instance from a ThermsUs
     *
     * @param value The unit as ThermsUs to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromThermsUs(value: number): Energy {
        return new Energy(value, EnergyUnits.ThermsUs);
    }

    /**
     * Create a new Energy instance from a ThermsImperial
     *
     * @param value The unit as ThermsImperial to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromThermsImperial(value: number): Energy {
        return new Energy(value, EnergyUnits.ThermsImperial);
    }

    /**
     * Create a new Energy instance from a HorsepowerHours
     *
     * @param value The unit as HorsepowerHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromHorsepowerHours(value: number): Energy {
        return new Energy(value, EnergyUnits.HorsepowerHours);
    }

    /**
     * Create a new Energy instance from a Nanojoules
     *
     * @param value The unit as Nanojoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromNanojoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Nanojoules);
    }

    /**
     * Create a new Energy instance from a Microjoules
     *
     * @param value The unit as Microjoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromMicrojoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Microjoules);
    }

    /**
     * Create a new Energy instance from a Millijoules
     *
     * @param value The unit as Millijoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromMillijoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Millijoules);
    }

    /**
     * Create a new Energy instance from a Kilojoules
     *
     * @param value The unit as Kilojoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromKilojoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Kilojoules);
    }

    /**
     * Create a new Energy instance from a Megajoules
     *
     * @param value The unit as Megajoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromMegajoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Megajoules);
    }

    /**
     * Create a new Energy instance from a Gigajoules
     *
     * @param value The unit as Gigajoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromGigajoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Gigajoules);
    }

    /**
     * Create a new Energy instance from a Terajoules
     *
     * @param value The unit as Terajoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromTerajoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Terajoules);
    }

    /**
     * Create a new Energy instance from a Petajoules
     *
     * @param value The unit as Petajoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromPetajoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Petajoules);
    }

    /**
     * Create a new Energy instance from a Kilocalories
     *
     * @param value The unit as Kilocalories to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromKilocalories(value: number): Energy {
        return new Energy(value, EnergyUnits.Kilocalories);
    }

    /**
     * Create a new Energy instance from a Megacalories
     *
     * @param value The unit as Megacalories to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromMegacalories(value: number): Energy {
        return new Energy(value, EnergyUnits.Megacalories);
    }

    /**
     * Create a new Energy instance from a KilobritishThermalUnits
     *
     * @param value The unit as KilobritishThermalUnits to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromKilobritishThermalUnits(value: number): Energy {
        return new Energy(value, EnergyUnits.KilobritishThermalUnits);
    }

    /**
     * Create a new Energy instance from a MegabritishThermalUnits
     *
     * @param value The unit as MegabritishThermalUnits to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromMegabritishThermalUnits(value: number): Energy {
        return new Energy(value, EnergyUnits.MegabritishThermalUnits);
    }

    /**
     * Create a new Energy instance from a GigabritishThermalUnits
     *
     * @param value The unit as GigabritishThermalUnits to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromGigabritishThermalUnits(value: number): Energy {
        return new Energy(value, EnergyUnits.GigabritishThermalUnits);
    }

    /**
     * Create a new Energy instance from a KiloelectronVolts
     *
     * @param value The unit as KiloelectronVolts to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromKiloelectronVolts(value: number): Energy {
        return new Energy(value, EnergyUnits.KiloelectronVolts);
    }

    /**
     * Create a new Energy instance from a MegaelectronVolts
     *
     * @param value The unit as MegaelectronVolts to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromMegaelectronVolts(value: number): Energy {
        return new Energy(value, EnergyUnits.MegaelectronVolts);
    }

    /**
     * Create a new Energy instance from a GigaelectronVolts
     *
     * @param value The unit as GigaelectronVolts to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromGigaelectronVolts(value: number): Energy {
        return new Energy(value, EnergyUnits.GigaelectronVolts);
    }

    /**
     * Create a new Energy instance from a TeraelectronVolts
     *
     * @param value The unit as TeraelectronVolts to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromTeraelectronVolts(value: number): Energy {
        return new Energy(value, EnergyUnits.TeraelectronVolts);
    }

    /**
     * Create a new Energy instance from a KilowattHours
     *
     * @param value The unit as KilowattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromKilowattHours(value: number): Energy {
        return new Energy(value, EnergyUnits.KilowattHours);
    }

    /**
     * Create a new Energy instance from a MegawattHours
     *
     * @param value The unit as MegawattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromMegawattHours(value: number): Energy {
        return new Energy(value, EnergyUnits.MegawattHours);
    }

    /**
     * Create a new Energy instance from a GigawattHours
     *
     * @param value The unit as GigawattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromGigawattHours(value: number): Energy {
        return new Energy(value, EnergyUnits.GigawattHours);
    }

    /**
     * Create a new Energy instance from a TerawattHours
     *
     * @param value The unit as TerawattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromTerawattHours(value: number): Energy {
        return new Energy(value, EnergyUnits.TerawattHours);
    }

    /**
     * Create a new Energy instance from a KilowattDays
     *
     * @param value The unit as KilowattDays to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromKilowattDays(value: number): Energy {
        return new Energy(value, EnergyUnits.KilowattDays);
    }

    /**
     * Create a new Energy instance from a MegawattDays
     *
     * @param value The unit as MegawattDays to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromMegawattDays(value: number): Energy {
        return new Energy(value, EnergyUnits.MegawattDays);
    }

    /**
     * Create a new Energy instance from a GigawattDays
     *
     * @param value The unit as GigawattDays to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromGigawattDays(value: number): Energy {
        return new Energy(value, EnergyUnits.GigawattDays);
    }

    /**
     * Create a new Energy instance from a TerawattDays
     *
     * @param value The unit as TerawattDays to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromTerawattDays(value: number): Energy {
        return new Energy(value, EnergyUnits.TerawattDays);
    }

    /**
     * Create a new Energy instance from a DecathermsEc
     *
     * @param value The unit as DecathermsEc to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromDecathermsEc(value: number): Energy {
        return new Energy(value, EnergyUnits.DecathermsEc);
    }

    /**
     * Create a new Energy instance from a DecathermsUs
     *
     * @param value The unit as DecathermsUs to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromDecathermsUs(value: number): Energy {
        return new Energy(value, EnergyUnits.DecathermsUs);
    }

    /**
     * Create a new Energy instance from a DecathermsImperial
     *
     * @param value The unit as DecathermsImperial to create a new Energy from.
     * @returns The new Energy instance.
     */
    public static FromDecathermsImperial(value: number): Energy {
        return new Energy(value, EnergyUnits.DecathermsImperial);
    }

    /**
     * Convert Energy to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: EnergyUnits): number {
        switch (toUnit) {
            case EnergyUnits.Joules: return this.Joules;
            case EnergyUnits.Calories: return this.Calories;
            case EnergyUnits.BritishThermalUnits: return this.BritishThermalUnits;
            case EnergyUnits.ElectronVolts: return this.ElectronVolts;
            case EnergyUnits.FootPounds: return this.FootPounds;
            case EnergyUnits.Ergs: return this.Ergs;
            case EnergyUnits.WattHours: return this.WattHours;
            case EnergyUnits.WattDays: return this.WattDays;
            case EnergyUnits.ThermsEc: return this.ThermsEc;
            case EnergyUnits.ThermsUs: return this.ThermsUs;
            case EnergyUnits.ThermsImperial: return this.ThermsImperial;
            case EnergyUnits.HorsepowerHours: return this.HorsepowerHours;
            case EnergyUnits.Nanojoules: return this.Nanojoules;
            case EnergyUnits.Microjoules: return this.Microjoules;
            case EnergyUnits.Millijoules: return this.Millijoules;
            case EnergyUnits.Kilojoules: return this.Kilojoules;
            case EnergyUnits.Megajoules: return this.Megajoules;
            case EnergyUnits.Gigajoules: return this.Gigajoules;
            case EnergyUnits.Terajoules: return this.Terajoules;
            case EnergyUnits.Petajoules: return this.Petajoules;
            case EnergyUnits.Kilocalories: return this.Kilocalories;
            case EnergyUnits.Megacalories: return this.Megacalories;
            case EnergyUnits.KilobritishThermalUnits: return this.KilobritishThermalUnits;
            case EnergyUnits.MegabritishThermalUnits: return this.MegabritishThermalUnits;
            case EnergyUnits.GigabritishThermalUnits: return this.GigabritishThermalUnits;
            case EnergyUnits.KiloelectronVolts: return this.KiloelectronVolts;
            case EnergyUnits.MegaelectronVolts: return this.MegaelectronVolts;
            case EnergyUnits.GigaelectronVolts: return this.GigaelectronVolts;
            case EnergyUnits.TeraelectronVolts: return this.TeraelectronVolts;
            case EnergyUnits.KilowattHours: return this.KilowattHours;
            case EnergyUnits.MegawattHours: return this.MegawattHours;
            case EnergyUnits.GigawattHours: return this.GigawattHours;
            case EnergyUnits.TerawattHours: return this.TerawattHours;
            case EnergyUnits.KilowattDays: return this.KilowattDays;
            case EnergyUnits.MegawattDays: return this.MegawattDays;
            case EnergyUnits.GigawattDays: return this.GigawattDays;
            case EnergyUnits.TerawattDays: return this.TerawattDays;
            case EnergyUnits.DecathermsEc: return this.DecathermsEc;
            case EnergyUnits.DecathermsUs: return this.DecathermsUs;
            case EnergyUnits.DecathermsImperial: return this.DecathermsImperial;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: EnergyUnits): number {
        switch (toUnit) {
                
            case EnergyUnits.Joules:
                return this.value;
            case EnergyUnits.Calories:
                return this.value / 4.184;
            case EnergyUnits.BritishThermalUnits:
                return this.value / 1055.05585262;
            case EnergyUnits.ElectronVolts:
                return this.value / 1.602176565e-19;
            case EnergyUnits.FootPounds:
                return this.value / 1.355817948;
            case EnergyUnits.Ergs:
                return this.value / 1e-7;
            case EnergyUnits.WattHours:
                return this.value / 3600;
            case EnergyUnits.WattDays:
                return this.value / (24 * 3600);
            case EnergyUnits.ThermsEc:
                return this.value / 1.05505585262e8;
            case EnergyUnits.ThermsUs:
                return this.value / 1.054804e8;
            case EnergyUnits.ThermsImperial:
                return this.value / 1.05505585257348e8;
            case EnergyUnits.HorsepowerHours:
                return this.value / 2.6845195377e6;
            case EnergyUnits.Nanojoules:
                return (this.value) / 1e-9;
            case EnergyUnits.Microjoules:
                return (this.value) / 0.000001;
            case EnergyUnits.Millijoules:
                return (this.value) / 0.001;
            case EnergyUnits.Kilojoules:
                return (this.value) / 1000;
            case EnergyUnits.Megajoules:
                return (this.value) / 1000000;
            case EnergyUnits.Gigajoules:
                return (this.value) / 1000000000;
            case EnergyUnits.Terajoules:
                return (this.value) / 1000000000000;
            case EnergyUnits.Petajoules:
                return (this.value) / 1000000000000000;
            case EnergyUnits.Kilocalories:
                return (this.value / 4.184) / 1000;
            case EnergyUnits.Megacalories:
                return (this.value / 4.184) / 1000000;
            case EnergyUnits.KilobritishThermalUnits:
                return (this.value / 1055.05585262) / 1000;
            case EnergyUnits.MegabritishThermalUnits:
                return (this.value / 1055.05585262) / 1000000;
            case EnergyUnits.GigabritishThermalUnits:
                return (this.value / 1055.05585262) / 1000000000;
            case EnergyUnits.KiloelectronVolts:
                return (this.value / 1.602176565e-19) / 1000;
            case EnergyUnits.MegaelectronVolts:
                return (this.value / 1.602176565e-19) / 1000000;
            case EnergyUnits.GigaelectronVolts:
                return (this.value / 1.602176565e-19) / 1000000000;
            case EnergyUnits.TeraelectronVolts:
                return (this.value / 1.602176565e-19) / 1000000000000;
            case EnergyUnits.KilowattHours:
                return (this.value / 3600) / 1000;
            case EnergyUnits.MegawattHours:
                return (this.value / 3600) / 1000000;
            case EnergyUnits.GigawattHours:
                return (this.value / 3600) / 1000000000;
            case EnergyUnits.TerawattHours:
                return (this.value / 3600) / 1000000000000;
            case EnergyUnits.KilowattDays:
                return (this.value / (24 * 3600)) / 1000;
            case EnergyUnits.MegawattDays:
                return (this.value / (24 * 3600)) / 1000000;
            case EnergyUnits.GigawattDays:
                return (this.value / (24 * 3600)) / 1000000000;
            case EnergyUnits.TerawattDays:
                return (this.value / (24 * 3600)) / 1000000000000;
            case EnergyUnits.DecathermsEc:
                return (this.value / 1.05505585262e8) / 10;
            case EnergyUnits.DecathermsUs:
                return (this.value / 1.054804e8) / 10;
            case EnergyUnits.DecathermsImperial:
                return (this.value / 1.05505585257348e8) / 10;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: EnergyUnits): number {
        switch (fromUnit) {
                
            case EnergyUnits.Joules:
                return value;
            case EnergyUnits.Calories:
                return value * 4.184;
            case EnergyUnits.BritishThermalUnits:
                return value * 1055.05585262;
            case EnergyUnits.ElectronVolts:
                return value * 1.602176565e-19;
            case EnergyUnits.FootPounds:
                return value * 1.355817948;
            case EnergyUnits.Ergs:
                return value * 1e-7;
            case EnergyUnits.WattHours:
                return value * 3600;
            case EnergyUnits.WattDays:
                return value * 24 * 3600;
            case EnergyUnits.ThermsEc:
                return value * 1.05505585262e8;
            case EnergyUnits.ThermsUs:
                return value * 1.054804e8;
            case EnergyUnits.ThermsImperial:
                return value * 1.05505585257348e8;
            case EnergyUnits.HorsepowerHours:
                return value * 2.6845195377e6;
            case EnergyUnits.Nanojoules:
                return (value) * 1e-9;
            case EnergyUnits.Microjoules:
                return (value) * 0.000001;
            case EnergyUnits.Millijoules:
                return (value) * 0.001;
            case EnergyUnits.Kilojoules:
                return (value) * 1000;
            case EnergyUnits.Megajoules:
                return (value) * 1000000;
            case EnergyUnits.Gigajoules:
                return (value) * 1000000000;
            case EnergyUnits.Terajoules:
                return (value) * 1000000000000;
            case EnergyUnits.Petajoules:
                return (value) * 1000000000000000;
            case EnergyUnits.Kilocalories:
                return (value * 4.184) * 1000;
            case EnergyUnits.Megacalories:
                return (value * 4.184) * 1000000;
            case EnergyUnits.KilobritishThermalUnits:
                return (value * 1055.05585262) * 1000;
            case EnergyUnits.MegabritishThermalUnits:
                return (value * 1055.05585262) * 1000000;
            case EnergyUnits.GigabritishThermalUnits:
                return (value * 1055.05585262) * 1000000000;
            case EnergyUnits.KiloelectronVolts:
                return (value * 1.602176565e-19) * 1000;
            case EnergyUnits.MegaelectronVolts:
                return (value * 1.602176565e-19) * 1000000;
            case EnergyUnits.GigaelectronVolts:
                return (value * 1.602176565e-19) * 1000000000;
            case EnergyUnits.TeraelectronVolts:
                return (value * 1.602176565e-19) * 1000000000000;
            case EnergyUnits.KilowattHours:
                return (value * 3600) * 1000;
            case EnergyUnits.MegawattHours:
                return (value * 3600) * 1000000;
            case EnergyUnits.GigawattHours:
                return (value * 3600) * 1000000000;
            case EnergyUnits.TerawattHours:
                return (value * 3600) * 1000000000000;
            case EnergyUnits.KilowattDays:
                return (value * 24 * 3600) * 1000;
            case EnergyUnits.MegawattDays:
                return (value * 24 * 3600) * 1000000;
            case EnergyUnits.GigawattDays:
                return (value * 24 * 3600) * 1000000000;
            case EnergyUnits.TerawattDays:
                return (value * 24 * 3600) * 1000000000000;
            case EnergyUnits.DecathermsEc:
                return (value * 1.05505585262e8) * 10;
            case EnergyUnits.DecathermsUs:
                return (value * 1.054804e8) * 10;
            case EnergyUnits.DecathermsImperial:
                return (value * 1.05505585257348e8) * 10;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Energy to string.
     * Note! the default format for Energy is Joules.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Energy.
     * @returns The string format of the Energy.
     */
    public toString(unit: EnergyUnits = EnergyUnits.Joules): string {

        switch (unit) {
            
            case EnergyUnits.Joules:
                return this.Joules + ` J`;
            case EnergyUnits.Calories:
                return this.Calories + ` cal`;
            case EnergyUnits.BritishThermalUnits:
                return this.BritishThermalUnits + ` BTU`;
            case EnergyUnits.ElectronVolts:
                return this.ElectronVolts + ` eV`;
            case EnergyUnits.FootPounds:
                return this.FootPounds + ` ft·lb`;
            case EnergyUnits.Ergs:
                return this.Ergs + ` erg`;
            case EnergyUnits.WattHours:
                return this.WattHours + ` Wh`;
            case EnergyUnits.WattDays:
                return this.WattDays + ` Wd`;
            case EnergyUnits.ThermsEc:
                return this.ThermsEc + ` th (E.C.)`;
            case EnergyUnits.ThermsUs:
                return this.ThermsUs + ` th (U.S.)`;
            case EnergyUnits.ThermsImperial:
                return this.ThermsImperial + ` th (imp.)`;
            case EnergyUnits.HorsepowerHours:
                return this.HorsepowerHours + ` hp·h`;
            case EnergyUnits.Nanojoules:
                return this.Nanojoules + ` nJ`;
            case EnergyUnits.Microjoules:
                return this.Microjoules + ` μJ`;
            case EnergyUnits.Millijoules:
                return this.Millijoules + ` mJ`;
            case EnergyUnits.Kilojoules:
                return this.Kilojoules + ` kJ`;
            case EnergyUnits.Megajoules:
                return this.Megajoules + ` MJ`;
            case EnergyUnits.Gigajoules:
                return this.Gigajoules + ` GJ`;
            case EnergyUnits.Terajoules:
                return this.Terajoules + ` TJ`;
            case EnergyUnits.Petajoules:
                return this.Petajoules + ` PJ`;
            case EnergyUnits.Kilocalories:
                return this.Kilocalories + ` kcal`;
            case EnergyUnits.Megacalories:
                return this.Megacalories + ` Mcal`;
            case EnergyUnits.KilobritishThermalUnits:
                return this.KilobritishThermalUnits + ` kBTU`;
            case EnergyUnits.MegabritishThermalUnits:
                return this.MegabritishThermalUnits + ` MBTU`;
            case EnergyUnits.GigabritishThermalUnits:
                return this.GigabritishThermalUnits + ` GBTU`;
            case EnergyUnits.KiloelectronVolts:
                return this.KiloelectronVolts + ` keV`;
            case EnergyUnits.MegaelectronVolts:
                return this.MegaelectronVolts + ` MeV`;
            case EnergyUnits.GigaelectronVolts:
                return this.GigaelectronVolts + ` GeV`;
            case EnergyUnits.TeraelectronVolts:
                return this.TeraelectronVolts + ` TeV`;
            case EnergyUnits.KilowattHours:
                return this.KilowattHours + ` kWh`;
            case EnergyUnits.MegawattHours:
                return this.MegawattHours + ` MWh`;
            case EnergyUnits.GigawattHours:
                return this.GigawattHours + ` GWh`;
            case EnergyUnits.TerawattHours:
                return this.TerawattHours + ` TWh`;
            case EnergyUnits.KilowattDays:
                return this.KilowattDays + ` kWd`;
            case EnergyUnits.MegawattDays:
                return this.MegawattDays + ` MWd`;
            case EnergyUnits.GigawattDays:
                return this.GigawattDays + ` GWd`;
            case EnergyUnits.TerawattDays:
                return this.TerawattDays + ` TWd`;
            case EnergyUnits.DecathermsEc:
                return this.DecathermsEc + ` dath (E.C.)`;
            case EnergyUnits.DecathermsUs:
                return this.DecathermsUs + ` dath (U.S.)`;
            case EnergyUnits.DecathermsImperial:
                return this.DecathermsImperial + ` dath (imp.)`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Energy unit abbreviation.
     * Note! the default abbreviation for Energy is Joules.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Energy.
     * @returns The abbreviation string of Energy.
     */
    public getUnitAbbreviation(unitAbbreviation: EnergyUnits = EnergyUnits.Joules): string {

        switch (unitAbbreviation) {
            
            case EnergyUnits.Joules:
                return `J`;
            case EnergyUnits.Calories:
                return `cal`;
            case EnergyUnits.BritishThermalUnits:
                return `BTU`;
            case EnergyUnits.ElectronVolts:
                return `eV`;
            case EnergyUnits.FootPounds:
                return `ft·lb`;
            case EnergyUnits.Ergs:
                return `erg`;
            case EnergyUnits.WattHours:
                return `Wh`;
            case EnergyUnits.WattDays:
                return `Wd`;
            case EnergyUnits.ThermsEc:
                return `th (E.C.)`;
            case EnergyUnits.ThermsUs:
                return `th (U.S.)`;
            case EnergyUnits.ThermsImperial:
                return `th (imp.)`;
            case EnergyUnits.HorsepowerHours:
                return `hp·h`;
            case EnergyUnits.Nanojoules:
                return `nJ`;
            case EnergyUnits.Microjoules:
                return `μJ`;
            case EnergyUnits.Millijoules:
                return `mJ`;
            case EnergyUnits.Kilojoules:
                return `kJ`;
            case EnergyUnits.Megajoules:
                return `MJ`;
            case EnergyUnits.Gigajoules:
                return `GJ`;
            case EnergyUnits.Terajoules:
                return `TJ`;
            case EnergyUnits.Petajoules:
                return `PJ`;
            case EnergyUnits.Kilocalories:
                return `kcal`;
            case EnergyUnits.Megacalories:
                return `Mcal`;
            case EnergyUnits.KilobritishThermalUnits:
                return `kBTU`;
            case EnergyUnits.MegabritishThermalUnits:
                return `MBTU`;
            case EnergyUnits.GigabritishThermalUnits:
                return `GBTU`;
            case EnergyUnits.KiloelectronVolts:
                return `keV`;
            case EnergyUnits.MegaelectronVolts:
                return `MeV`;
            case EnergyUnits.GigaelectronVolts:
                return `GeV`;
            case EnergyUnits.TeraelectronVolts:
                return `TeV`;
            case EnergyUnits.KilowattHours:
                return `kWh`;
            case EnergyUnits.MegawattHours:
                return `MWh`;
            case EnergyUnits.GigawattHours:
                return `GWh`;
            case EnergyUnits.TerawattHours:
                return `TWh`;
            case EnergyUnits.KilowattDays:
                return `kWd`;
            case EnergyUnits.MegawattDays:
                return `MWd`;
            case EnergyUnits.GigawattDays:
                return `GWd`;
            case EnergyUnits.TerawattDays:
                return `TWd`;
            case EnergyUnits.DecathermsEc:
                return `dath (E.C.)`;
            case EnergyUnits.DecathermsUs:
                return `dath (U.S.)`;
            case EnergyUnits.DecathermsImperial:
                return `dath (imp.)`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Energy are equals to the current Energy.
     * @param energy The other Energy.
     * @returns True if the given Energy are equal to the current Energy.
     */
    public equals(energy: Energy): boolean {
        return this.value === energy.BaseValue;
    }

    /**
     * Compare the given Energy against the current Energy.
     * @param energy The other Energy.
     * @returns 0 if they are equal, -1 if the current Energy is less then other, 1 if the current Energy is greater then other.
     */
    public compareTo(energy: Energy): number {

        if (this.value > energy.BaseValue)
            return 1;
        if (this.value < energy.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Energy with the current Energy.
     * @param energy The other Energy.
     * @returns A new Energy instance with the results.
     */
    public add(energy: Energy): Energy {
        return new Energy(this.value + energy.BaseValue)
    }

    /**
     * Subtract the given Energy with the current Energy.
     * @param energy The other Energy.
     * @returns A new Energy instance with the results.
     */
    public subtract(energy: Energy): Energy {
        return new Energy(this.value - energy.BaseValue)
    }

    /**
     * Multiply the given Energy with the current Energy.
     * @param energy The other Energy.
     * @returns A new Energy instance with the results.
     */
    public multiply(energy: Energy): Energy {
        return new Energy(this.value * energy.BaseValue)
    }

    /**
     * Divide the given Energy with the current Energy.
     * @param energy The other Energy.
     * @returns A new Energy instance with the results.
     */
    public divide(energy: Energy): Energy {
        return new Energy(this.value / energy.BaseValue)
    }

    /**
     * Modulo the given Energy with the current Energy.
     * @param energy The other Energy.
     * @returns A new Energy instance with the results.
     */
    public modulo(energy: Energy): Energy {
        return new Energy(this.value % energy.BaseValue)
    }

    /**
     * Pow the given Energy with the current Energy.
     * @param energy The other Energy.
     * @returns A new Energy instance with the results.
     */
    public pow(energy: Energy): Energy {
        return new Energy(this.value ** energy.BaseValue)
    }
}
