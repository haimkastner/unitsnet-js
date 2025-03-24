import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a SpecificEnergy */
export interface SpecificEnergyDto {
    /** The value of the SpecificEnergy */
    value: number;
    /**  The specific unit that the SpecificEnergy value is representing */
    unit: SpecificEnergyUnits;
}

/** SpecificEnergyUnits enumeration */
export enum SpecificEnergyUnits {
    /** */
    JoulesPerKilogram = "JoulePerKilogram",
    /** */
    MegaJoulesPerTonne = "MegaJoulePerTonne",
    /** */
    CaloriesPerGram = "CaloriePerGram",
    /** */
    WattHoursPerKilogram = "WattHourPerKilogram",
    /** */
    WattDaysPerKilogram = "WattDayPerKilogram",
    /** */
    WattDaysPerTonne = "WattDayPerTonne",
    /** */
    WattDaysPerShortTon = "WattDayPerShortTon",
    /** */
    WattHoursPerPound = "WattHourPerPound",
    /** */
    BtuPerPound = "BtuPerPound",
    /** */
    KilojoulesPerKilogram = "KilojoulePerKilogram",
    /** */
    MegajoulesPerKilogram = "MegajoulePerKilogram",
    /** */
    KilocaloriesPerGram = "KilocaloriePerGram",
    /** */
    KilowattHoursPerKilogram = "KilowattHourPerKilogram",
    /** */
    MegawattHoursPerKilogram = "MegawattHourPerKilogram",
    /** */
    GigawattHoursPerKilogram = "GigawattHourPerKilogram",
    /** */
    KilowattDaysPerKilogram = "KilowattDayPerKilogram",
    /** */
    MegawattDaysPerKilogram = "MegawattDayPerKilogram",
    /** */
    GigawattDaysPerKilogram = "GigawattDayPerKilogram",
    /** */
    TerawattDaysPerKilogram = "TerawattDayPerKilogram",
    /** */
    KilowattDaysPerTonne = "KilowattDayPerTonne",
    /** */
    MegawattDaysPerTonne = "MegawattDayPerTonne",
    /** */
    GigawattDaysPerTonne = "GigawattDayPerTonne",
    /** */
    TerawattDaysPerTonne = "TerawattDayPerTonne",
    /** */
    KilowattDaysPerShortTon = "KilowattDayPerShortTon",
    /** */
    MegawattDaysPerShortTon = "MegawattDayPerShortTon",
    /** */
    GigawattDaysPerShortTon = "GigawattDayPerShortTon",
    /** */
    TerawattDaysPerShortTon = "TerawattDayPerShortTon",
    /** */
    KilowattHoursPerPound = "KilowattHourPerPound",
    /** */
    MegawattHoursPerPound = "MegawattHourPerPound",
    /** */
    GigawattHoursPerPound = "GigawattHourPerPound"
}

/** The SpecificEnergy */
export class SpecificEnergy extends BaseUnit {
    protected value: number;
    private joulesperkilogramLazy: number | null = null;
    private megajoulespertonneLazy: number | null = null;
    private caloriespergramLazy: number | null = null;
    private watthoursperkilogramLazy: number | null = null;
    private wattdaysperkilogramLazy: number | null = null;
    private wattdayspertonneLazy: number | null = null;
    private wattdayspershorttonLazy: number | null = null;
    private watthoursperpoundLazy: number | null = null;
    private btuperpoundLazy: number | null = null;
    private kilojoulesperkilogramLazy: number | null = null;
    private megajoulesperkilogramLazy: number | null = null;
    private kilocaloriespergramLazy: number | null = null;
    private kilowatthoursperkilogramLazy: number | null = null;
    private megawatthoursperkilogramLazy: number | null = null;
    private gigawatthoursperkilogramLazy: number | null = null;
    private kilowattdaysperkilogramLazy: number | null = null;
    private megawattdaysperkilogramLazy: number | null = null;
    private gigawattdaysperkilogramLazy: number | null = null;
    private terawattdaysperkilogramLazy: number | null = null;
    private kilowattdayspertonneLazy: number | null = null;
    private megawattdayspertonneLazy: number | null = null;
    private gigawattdayspertonneLazy: number | null = null;
    private terawattdayspertonneLazy: number | null = null;
    private kilowattdayspershorttonLazy: number | null = null;
    private megawattdayspershorttonLazy: number | null = null;
    private gigawattdayspershorttonLazy: number | null = null;
    private terawattdayspershorttonLazy: number | null = null;
    private kilowatthoursperpoundLazy: number | null = null;
    private megawatthoursperpoundLazy: number | null = null;
    private gigawatthoursperpoundLazy: number | null = null;

    /**
     * Create a new SpecificEnergy.
     * @param value The value.
     * @param fromUnit The ‘SpecificEnergy’ unit to create from.
     * The default unit is JoulesPerKilogram
     */
    public constructor(value: number, fromUnit: SpecificEnergyUnits = SpecificEnergyUnits.JoulesPerKilogram) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SpecificEnergy is JoulesPerKilogram.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): SpecificEnergyUnits.JoulesPerKilogram {
        return SpecificEnergyUnits.JoulesPerKilogram
    }

    /** */
    public get JoulesPerKilogram(): number {
        if(this.joulesperkilogramLazy !== null){
            return this.joulesperkilogramLazy;
        }
        return this.joulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.JoulesPerKilogram);
    }

    /** */
    public get MegaJoulesPerTonne(): number {
        if(this.megajoulespertonneLazy !== null){
            return this.megajoulespertonneLazy;
        }
        return this.megajoulespertonneLazy = this.convertFromBase(SpecificEnergyUnits.MegaJoulesPerTonne);
    }

    /** */
    public get CaloriesPerGram(): number {
        if(this.caloriespergramLazy !== null){
            return this.caloriespergramLazy;
        }
        return this.caloriespergramLazy = this.convertFromBase(SpecificEnergyUnits.CaloriesPerGram);
    }

    /** */
    public get WattHoursPerKilogram(): number {
        if(this.watthoursperkilogramLazy !== null){
            return this.watthoursperkilogramLazy;
        }
        return this.watthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.WattHoursPerKilogram);
    }

    /** */
    public get WattDaysPerKilogram(): number {
        if(this.wattdaysperkilogramLazy !== null){
            return this.wattdaysperkilogramLazy;
        }
        return this.wattdaysperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.WattDaysPerKilogram);
    }

    /** */
    public get WattDaysPerTonne(): number {
        if(this.wattdayspertonneLazy !== null){
            return this.wattdayspertonneLazy;
        }
        return this.wattdayspertonneLazy = this.convertFromBase(SpecificEnergyUnits.WattDaysPerTonne);
    }

    /** */
    public get WattDaysPerShortTon(): number {
        if(this.wattdayspershorttonLazy !== null){
            return this.wattdayspershorttonLazy;
        }
        return this.wattdayspershorttonLazy = this.convertFromBase(SpecificEnergyUnits.WattDaysPerShortTon);
    }

    /** */
    public get WattHoursPerPound(): number {
        if(this.watthoursperpoundLazy !== null){
            return this.watthoursperpoundLazy;
        }
        return this.watthoursperpoundLazy = this.convertFromBase(SpecificEnergyUnits.WattHoursPerPound);
    }

    /** */
    public get BtuPerPound(): number {
        if(this.btuperpoundLazy !== null){
            return this.btuperpoundLazy;
        }
        return this.btuperpoundLazy = this.convertFromBase(SpecificEnergyUnits.BtuPerPound);
    }

    /** */
    public get KilojoulesPerKilogram(): number {
        if(this.kilojoulesperkilogramLazy !== null){
            return this.kilojoulesperkilogramLazy;
        }
        return this.kilojoulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilojoulesPerKilogram);
    }

    /** */
    public get MegajoulesPerKilogram(): number {
        if(this.megajoulesperkilogramLazy !== null){
            return this.megajoulesperkilogramLazy;
        }
        return this.megajoulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegajoulesPerKilogram);
    }

    /** */
    public get KilocaloriesPerGram(): number {
        if(this.kilocaloriespergramLazy !== null){
            return this.kilocaloriespergramLazy;
        }
        return this.kilocaloriespergramLazy = this.convertFromBase(SpecificEnergyUnits.KilocaloriesPerGram);
    }

    /** */
    public get KilowattHoursPerKilogram(): number {
        if(this.kilowatthoursperkilogramLazy !== null){
            return this.kilowatthoursperkilogramLazy;
        }
        return this.kilowatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilowattHoursPerKilogram);
    }

    /** */
    public get MegawattHoursPerKilogram(): number {
        if(this.megawatthoursperkilogramLazy !== null){
            return this.megawatthoursperkilogramLazy;
        }
        return this.megawatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegawattHoursPerKilogram);
    }

    /** */
    public get GigawattHoursPerKilogram(): number {
        if(this.gigawatthoursperkilogramLazy !== null){
            return this.gigawatthoursperkilogramLazy;
        }
        return this.gigawatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.GigawattHoursPerKilogram);
    }

    /** */
    public get KilowattDaysPerKilogram(): number {
        if(this.kilowattdaysperkilogramLazy !== null){
            return this.kilowattdaysperkilogramLazy;
        }
        return this.kilowattdaysperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilowattDaysPerKilogram);
    }

    /** */
    public get MegawattDaysPerKilogram(): number {
        if(this.megawattdaysperkilogramLazy !== null){
            return this.megawattdaysperkilogramLazy;
        }
        return this.megawattdaysperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegawattDaysPerKilogram);
    }

    /** */
    public get GigawattDaysPerKilogram(): number {
        if(this.gigawattdaysperkilogramLazy !== null){
            return this.gigawattdaysperkilogramLazy;
        }
        return this.gigawattdaysperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.GigawattDaysPerKilogram);
    }

    /** */
    public get TerawattDaysPerKilogram(): number {
        if(this.terawattdaysperkilogramLazy !== null){
            return this.terawattdaysperkilogramLazy;
        }
        return this.terawattdaysperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.TerawattDaysPerKilogram);
    }

    /** */
    public get KilowattDaysPerTonne(): number {
        if(this.kilowattdayspertonneLazy !== null){
            return this.kilowattdayspertonneLazy;
        }
        return this.kilowattdayspertonneLazy = this.convertFromBase(SpecificEnergyUnits.KilowattDaysPerTonne);
    }

    /** */
    public get MegawattDaysPerTonne(): number {
        if(this.megawattdayspertonneLazy !== null){
            return this.megawattdayspertonneLazy;
        }
        return this.megawattdayspertonneLazy = this.convertFromBase(SpecificEnergyUnits.MegawattDaysPerTonne);
    }

    /** */
    public get GigawattDaysPerTonne(): number {
        if(this.gigawattdayspertonneLazy !== null){
            return this.gigawattdayspertonneLazy;
        }
        return this.gigawattdayspertonneLazy = this.convertFromBase(SpecificEnergyUnits.GigawattDaysPerTonne);
    }

    /** */
    public get TerawattDaysPerTonne(): number {
        if(this.terawattdayspertonneLazy !== null){
            return this.terawattdayspertonneLazy;
        }
        return this.terawattdayspertonneLazy = this.convertFromBase(SpecificEnergyUnits.TerawattDaysPerTonne);
    }

    /** */
    public get KilowattDaysPerShortTon(): number {
        if(this.kilowattdayspershorttonLazy !== null){
            return this.kilowattdayspershorttonLazy;
        }
        return this.kilowattdayspershorttonLazy = this.convertFromBase(SpecificEnergyUnits.KilowattDaysPerShortTon);
    }

    /** */
    public get MegawattDaysPerShortTon(): number {
        if(this.megawattdayspershorttonLazy !== null){
            return this.megawattdayspershorttonLazy;
        }
        return this.megawattdayspershorttonLazy = this.convertFromBase(SpecificEnergyUnits.MegawattDaysPerShortTon);
    }

    /** */
    public get GigawattDaysPerShortTon(): number {
        if(this.gigawattdayspershorttonLazy !== null){
            return this.gigawattdayspershorttonLazy;
        }
        return this.gigawattdayspershorttonLazy = this.convertFromBase(SpecificEnergyUnits.GigawattDaysPerShortTon);
    }

    /** */
    public get TerawattDaysPerShortTon(): number {
        if(this.terawattdayspershorttonLazy !== null){
            return this.terawattdayspershorttonLazy;
        }
        return this.terawattdayspershorttonLazy = this.convertFromBase(SpecificEnergyUnits.TerawattDaysPerShortTon);
    }

    /** */
    public get KilowattHoursPerPound(): number {
        if(this.kilowatthoursperpoundLazy !== null){
            return this.kilowatthoursperpoundLazy;
        }
        return this.kilowatthoursperpoundLazy = this.convertFromBase(SpecificEnergyUnits.KilowattHoursPerPound);
    }

    /** */
    public get MegawattHoursPerPound(): number {
        if(this.megawatthoursperpoundLazy !== null){
            return this.megawatthoursperpoundLazy;
        }
        return this.megawatthoursperpoundLazy = this.convertFromBase(SpecificEnergyUnits.MegawattHoursPerPound);
    }

    /** */
    public get GigawattHoursPerPound(): number {
        if(this.gigawatthoursperpoundLazy !== null){
            return this.gigawatthoursperpoundLazy;
        }
        return this.gigawatthoursperpoundLazy = this.convertFromBase(SpecificEnergyUnits.GigawattHoursPerPound);
    }

    /**
     * Create a new SpecificEnergy instance from a JoulesPerKilogram
     *
     * @param value The unit as JoulesPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromJoulesPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.JoulesPerKilogram);
    }

    /**
     * Create a new SpecificEnergy instance from a MegaJoulesPerTonne
     *
     * @param value The unit as MegaJoulesPerTonne to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromMegaJoulesPerTonne(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegaJoulesPerTonne);
    }

    /**
     * Create a new SpecificEnergy instance from a CaloriesPerGram
     *
     * @param value The unit as CaloriesPerGram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromCaloriesPerGram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.CaloriesPerGram);
    }

    /**
     * Create a new SpecificEnergy instance from a WattHoursPerKilogram
     *
     * @param value The unit as WattHoursPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromWattHoursPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.WattHoursPerKilogram);
    }

    /**
     * Create a new SpecificEnergy instance from a WattDaysPerKilogram
     *
     * @param value The unit as WattDaysPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromWattDaysPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.WattDaysPerKilogram);
    }

    /**
     * Create a new SpecificEnergy instance from a WattDaysPerTonne
     *
     * @param value The unit as WattDaysPerTonne to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromWattDaysPerTonne(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.WattDaysPerTonne);
    }

    /**
     * Create a new SpecificEnergy instance from a WattDaysPerShortTon
     *
     * @param value The unit as WattDaysPerShortTon to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromWattDaysPerShortTon(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.WattDaysPerShortTon);
    }

    /**
     * Create a new SpecificEnergy instance from a WattHoursPerPound
     *
     * @param value The unit as WattHoursPerPound to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromWattHoursPerPound(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.WattHoursPerPound);
    }

    /**
     * Create a new SpecificEnergy instance from a BtuPerPound
     *
     * @param value The unit as BtuPerPound to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromBtuPerPound(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.BtuPerPound);
    }

    /**
     * Create a new SpecificEnergy instance from a KilojoulesPerKilogram
     *
     * @param value The unit as KilojoulesPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromKilojoulesPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilojoulesPerKilogram);
    }

    /**
     * Create a new SpecificEnergy instance from a MegajoulesPerKilogram
     *
     * @param value The unit as MegajoulesPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromMegajoulesPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegajoulesPerKilogram);
    }

    /**
     * Create a new SpecificEnergy instance from a KilocaloriesPerGram
     *
     * @param value The unit as KilocaloriesPerGram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromKilocaloriesPerGram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilocaloriesPerGram);
    }

    /**
     * Create a new SpecificEnergy instance from a KilowattHoursPerKilogram
     *
     * @param value The unit as KilowattHoursPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromKilowattHoursPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilowattHoursPerKilogram);
    }

    /**
     * Create a new SpecificEnergy instance from a MegawattHoursPerKilogram
     *
     * @param value The unit as MegawattHoursPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromMegawattHoursPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegawattHoursPerKilogram);
    }

    /**
     * Create a new SpecificEnergy instance from a GigawattHoursPerKilogram
     *
     * @param value The unit as GigawattHoursPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromGigawattHoursPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.GigawattHoursPerKilogram);
    }

    /**
     * Create a new SpecificEnergy instance from a KilowattDaysPerKilogram
     *
     * @param value The unit as KilowattDaysPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromKilowattDaysPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilowattDaysPerKilogram);
    }

    /**
     * Create a new SpecificEnergy instance from a MegawattDaysPerKilogram
     *
     * @param value The unit as MegawattDaysPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromMegawattDaysPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegawattDaysPerKilogram);
    }

    /**
     * Create a new SpecificEnergy instance from a GigawattDaysPerKilogram
     *
     * @param value The unit as GigawattDaysPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromGigawattDaysPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.GigawattDaysPerKilogram);
    }

    /**
     * Create a new SpecificEnergy instance from a TerawattDaysPerKilogram
     *
     * @param value The unit as TerawattDaysPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromTerawattDaysPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.TerawattDaysPerKilogram);
    }

    /**
     * Create a new SpecificEnergy instance from a KilowattDaysPerTonne
     *
     * @param value The unit as KilowattDaysPerTonne to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromKilowattDaysPerTonne(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilowattDaysPerTonne);
    }

    /**
     * Create a new SpecificEnergy instance from a MegawattDaysPerTonne
     *
     * @param value The unit as MegawattDaysPerTonne to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromMegawattDaysPerTonne(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegawattDaysPerTonne);
    }

    /**
     * Create a new SpecificEnergy instance from a GigawattDaysPerTonne
     *
     * @param value The unit as GigawattDaysPerTonne to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromGigawattDaysPerTonne(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.GigawattDaysPerTonne);
    }

    /**
     * Create a new SpecificEnergy instance from a TerawattDaysPerTonne
     *
     * @param value The unit as TerawattDaysPerTonne to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromTerawattDaysPerTonne(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.TerawattDaysPerTonne);
    }

    /**
     * Create a new SpecificEnergy instance from a KilowattDaysPerShortTon
     *
     * @param value The unit as KilowattDaysPerShortTon to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromKilowattDaysPerShortTon(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilowattDaysPerShortTon);
    }

    /**
     * Create a new SpecificEnergy instance from a MegawattDaysPerShortTon
     *
     * @param value The unit as MegawattDaysPerShortTon to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromMegawattDaysPerShortTon(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegawattDaysPerShortTon);
    }

    /**
     * Create a new SpecificEnergy instance from a GigawattDaysPerShortTon
     *
     * @param value The unit as GigawattDaysPerShortTon to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromGigawattDaysPerShortTon(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.GigawattDaysPerShortTon);
    }

    /**
     * Create a new SpecificEnergy instance from a TerawattDaysPerShortTon
     *
     * @param value The unit as TerawattDaysPerShortTon to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromTerawattDaysPerShortTon(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.TerawattDaysPerShortTon);
    }

    /**
     * Create a new SpecificEnergy instance from a KilowattHoursPerPound
     *
     * @param value The unit as KilowattHoursPerPound to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromKilowattHoursPerPound(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilowattHoursPerPound);
    }

    /**
     * Create a new SpecificEnergy instance from a MegawattHoursPerPound
     *
     * @param value The unit as MegawattHoursPerPound to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromMegawattHoursPerPound(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegawattHoursPerPound);
    }

    /**
     * Create a new SpecificEnergy instance from a GigawattHoursPerPound
     *
     * @param value The unit as GigawattHoursPerPound to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    public static FromGigawattHoursPerPound(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.GigawattHoursPerPound);
    }

    /**
     * Gets the base unit enumeration associated with SpecificEnergy
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof SpecificEnergyUnits {
        return SpecificEnergyUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): SpecificEnergyUnits.JoulesPerKilogram {
        return SpecificEnergyUnits.JoulesPerKilogram;
    }

    /**
     * Create API DTO represent a SpecificEnergy unit.
     * @param holdInUnit The specific SpecificEnergy unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: SpecificEnergyUnits = SpecificEnergyUnits.JoulesPerKilogram): SpecificEnergyDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a SpecificEnergy unit from an API DTO representation.
     * @param dtoSpecificEnergy The SpecificEnergy API DTO representation
     */
    public static FromDto(dtoSpecificEnergy: SpecificEnergyDto): SpecificEnergy {
        return new SpecificEnergy(dtoSpecificEnergy.value, dtoSpecificEnergy.unit);
    }

    /**
     * Convert SpecificEnergy to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: SpecificEnergyUnits): number {
        switch (toUnit) {
            case SpecificEnergyUnits.JoulesPerKilogram: return this.JoulesPerKilogram;
            case SpecificEnergyUnits.MegaJoulesPerTonne: return this.MegaJoulesPerTonne;
            case SpecificEnergyUnits.CaloriesPerGram: return this.CaloriesPerGram;
            case SpecificEnergyUnits.WattHoursPerKilogram: return this.WattHoursPerKilogram;
            case SpecificEnergyUnits.WattDaysPerKilogram: return this.WattDaysPerKilogram;
            case SpecificEnergyUnits.WattDaysPerTonne: return this.WattDaysPerTonne;
            case SpecificEnergyUnits.WattDaysPerShortTon: return this.WattDaysPerShortTon;
            case SpecificEnergyUnits.WattHoursPerPound: return this.WattHoursPerPound;
            case SpecificEnergyUnits.BtuPerPound: return this.BtuPerPound;
            case SpecificEnergyUnits.KilojoulesPerKilogram: return this.KilojoulesPerKilogram;
            case SpecificEnergyUnits.MegajoulesPerKilogram: return this.MegajoulesPerKilogram;
            case SpecificEnergyUnits.KilocaloriesPerGram: return this.KilocaloriesPerGram;
            case SpecificEnergyUnits.KilowattHoursPerKilogram: return this.KilowattHoursPerKilogram;
            case SpecificEnergyUnits.MegawattHoursPerKilogram: return this.MegawattHoursPerKilogram;
            case SpecificEnergyUnits.GigawattHoursPerKilogram: return this.GigawattHoursPerKilogram;
            case SpecificEnergyUnits.KilowattDaysPerKilogram: return this.KilowattDaysPerKilogram;
            case SpecificEnergyUnits.MegawattDaysPerKilogram: return this.MegawattDaysPerKilogram;
            case SpecificEnergyUnits.GigawattDaysPerKilogram: return this.GigawattDaysPerKilogram;
            case SpecificEnergyUnits.TerawattDaysPerKilogram: return this.TerawattDaysPerKilogram;
            case SpecificEnergyUnits.KilowattDaysPerTonne: return this.KilowattDaysPerTonne;
            case SpecificEnergyUnits.MegawattDaysPerTonne: return this.MegawattDaysPerTonne;
            case SpecificEnergyUnits.GigawattDaysPerTonne: return this.GigawattDaysPerTonne;
            case SpecificEnergyUnits.TerawattDaysPerTonne: return this.TerawattDaysPerTonne;
            case SpecificEnergyUnits.KilowattDaysPerShortTon: return this.KilowattDaysPerShortTon;
            case SpecificEnergyUnits.MegawattDaysPerShortTon: return this.MegawattDaysPerShortTon;
            case SpecificEnergyUnits.GigawattDaysPerShortTon: return this.GigawattDaysPerShortTon;
            case SpecificEnergyUnits.TerawattDaysPerShortTon: return this.TerawattDaysPerShortTon;
            case SpecificEnergyUnits.KilowattHoursPerPound: return this.KilowattHoursPerPound;
            case SpecificEnergyUnits.MegawattHoursPerPound: return this.MegawattHoursPerPound;
            case SpecificEnergyUnits.GigawattHoursPerPound: return this.GigawattHoursPerPound;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: SpecificEnergyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case SpecificEnergyUnits.JoulesPerKilogram: return this.value;
                case SpecificEnergyUnits.MegaJoulesPerTonne: return super.internalDivide(this.value, 1e3);
                case SpecificEnergyUnits.CaloriesPerGram: return super.internalDivide(this.value, 4.184e3);
                case SpecificEnergyUnits.WattHoursPerKilogram: return super.internalDivide(this.value, 3.6e3);
                case SpecificEnergyUnits.WattDaysPerKilogram: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    return super.internalDivide(this.value, v4);
                }
                case SpecificEnergyUnits.WattDaysPerTonne: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 1e3);
                    return super.internalDivide(this.value, v6);
                }
                case SpecificEnergyUnits.WattDaysPerShortTon: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 9.0718474e2);
                    return super.internalDivide(this.value, v6);
                }
                case SpecificEnergyUnits.WattHoursPerPound: return super.internalDivide(this.value, 7.93664e3);
                case SpecificEnergyUnits.BtuPerPound: return super.internalDivide(this.value, 2326.000075362);
                case SpecificEnergyUnits.KilojoulesPerKilogram: return super.internalDivide(this.value, 1000);
                case SpecificEnergyUnits.MegajoulesPerKilogram: return super.internalDivide(this.value, 1000000);
                case SpecificEnergyUnits.KilocaloriesPerGram: {
                    const v3 = super.internalDivide(this.value, 4.184e3);
                    return super.internalDivide(v3, 1000);
                }
                case SpecificEnergyUnits.KilowattHoursPerKilogram: {
                    const v3 = super.internalDivide(this.value, 3.6e3);
                    return super.internalDivide(v3, 1000);
                }
                case SpecificEnergyUnits.MegawattHoursPerKilogram: {
                    const v3 = super.internalDivide(this.value, 3.6e3);
                    return super.internalDivide(v3, 1000000);
                }
                case SpecificEnergyUnits.GigawattHoursPerKilogram: {
                    const v3 = super.internalDivide(this.value, 3.6e3);
                    return super.internalDivide(v3, 1000000000);
                }
                case SpecificEnergyUnits.KilowattDaysPerKilogram: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v5 = super.internalDivide(this.value, v4);
                    return super.internalDivide(v5, 1000);
                }
                case SpecificEnergyUnits.MegawattDaysPerKilogram: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v5 = super.internalDivide(this.value, v4);
                    return super.internalDivide(v5, 1000000);
                }
                case SpecificEnergyUnits.GigawattDaysPerKilogram: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v5 = super.internalDivide(this.value, v4);
                    return super.internalDivide(v5, 1000000000);
                }
                case SpecificEnergyUnits.TerawattDaysPerKilogram: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v5 = super.internalDivide(this.value, v4);
                    return super.internalDivide(v5, 1000000000000);
                }
                case SpecificEnergyUnits.KilowattDaysPerTonne: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 1e3);
                    const v7 = super.internalDivide(this.value, v6);
                    return super.internalDivide(v7, 1000);
                }
                case SpecificEnergyUnits.MegawattDaysPerTonne: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 1e3);
                    const v7 = super.internalDivide(this.value, v6);
                    return super.internalDivide(v7, 1000000);
                }
                case SpecificEnergyUnits.GigawattDaysPerTonne: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 1e3);
                    const v7 = super.internalDivide(this.value, v6);
                    return super.internalDivide(v7, 1000000000);
                }
                case SpecificEnergyUnits.TerawattDaysPerTonne: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 1e3);
                    const v7 = super.internalDivide(this.value, v6);
                    return super.internalDivide(v7, 1000000000000);
                }
                case SpecificEnergyUnits.KilowattDaysPerShortTon: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 9.0718474e2);
                    const v7 = super.internalDivide(this.value, v6);
                    return super.internalDivide(v7, 1000);
                }
                case SpecificEnergyUnits.MegawattDaysPerShortTon: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 9.0718474e2);
                    const v7 = super.internalDivide(this.value, v6);
                    return super.internalDivide(v7, 1000000);
                }
                case SpecificEnergyUnits.GigawattDaysPerShortTon: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 9.0718474e2);
                    const v7 = super.internalDivide(this.value, v6);
                    return super.internalDivide(v7, 1000000000);
                }
                case SpecificEnergyUnits.TerawattDaysPerShortTon: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 9.0718474e2);
                    const v7 = super.internalDivide(this.value, v6);
                    return super.internalDivide(v7, 1000000000000);
                }
                case SpecificEnergyUnits.KilowattHoursPerPound: {
                    const v3 = super.internalDivide(this.value, 7.93664e3);
                    return super.internalDivide(v3, 1000);
                }
                case SpecificEnergyUnits.MegawattHoursPerPound: {
                    const v3 = super.internalDivide(this.value, 7.93664e3);
                    return super.internalDivide(v3, 1000000);
                }
                case SpecificEnergyUnits.GigawattHoursPerPound: {
                    const v3 = super.internalDivide(this.value, 7.93664e3);
                    return super.internalDivide(v3, 1000000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case SpecificEnergyUnits.JoulesPerKilogram: return this.value;
            case SpecificEnergyUnits.MegaJoulesPerTonne: return this.value / 1e3;
            case SpecificEnergyUnits.CaloriesPerGram: return this.value / 4.184e3;
            case SpecificEnergyUnits.WattHoursPerKilogram: return this.value / 3.6e3;
            case SpecificEnergyUnits.WattDaysPerKilogram: return this.value / (24 * 3.6e3);
            case SpecificEnergyUnits.WattDaysPerTonne: return this.value / ((24 * 3.6e3) / 1e3);
            case SpecificEnergyUnits.WattDaysPerShortTon: return this.value / ((24 * 3.6e3) / 9.0718474e2);
            case SpecificEnergyUnits.WattHoursPerPound: return this.value / 7.93664e3;
            case SpecificEnergyUnits.BtuPerPound: return this.value / 2326.000075362;
            case SpecificEnergyUnits.KilojoulesPerKilogram: return (this.value) / 1000;
            case SpecificEnergyUnits.MegajoulesPerKilogram: return (this.value) / 1000000;
            case SpecificEnergyUnits.KilocaloriesPerGram: return (this.value / 4.184e3) / 1000;
            case SpecificEnergyUnits.KilowattHoursPerKilogram: return (this.value / 3.6e3) / 1000;
            case SpecificEnergyUnits.MegawattHoursPerKilogram: return (this.value / 3.6e3) / 1000000;
            case SpecificEnergyUnits.GigawattHoursPerKilogram: return (this.value / 3.6e3) / 1000000000;
            case SpecificEnergyUnits.KilowattDaysPerKilogram: return (this.value / (24 * 3.6e3)) / 1000;
            case SpecificEnergyUnits.MegawattDaysPerKilogram: return (this.value / (24 * 3.6e3)) / 1000000;
            case SpecificEnergyUnits.GigawattDaysPerKilogram: return (this.value / (24 * 3.6e3)) / 1000000000;
            case SpecificEnergyUnits.TerawattDaysPerKilogram: return (this.value / (24 * 3.6e3)) / 1000000000000;
            case SpecificEnergyUnits.KilowattDaysPerTonne: return (this.value / ((24 * 3.6e3) / 1e3)) / 1000;
            case SpecificEnergyUnits.MegawattDaysPerTonne: return (this.value / ((24 * 3.6e3) / 1e3)) / 1000000;
            case SpecificEnergyUnits.GigawattDaysPerTonne: return (this.value / ((24 * 3.6e3) / 1e3)) / 1000000000;
            case SpecificEnergyUnits.TerawattDaysPerTonne: return (this.value / ((24 * 3.6e3) / 1e3)) / 1000000000000;
            case SpecificEnergyUnits.KilowattDaysPerShortTon: return (this.value / ((24 * 3.6e3) / 9.0718474e2)) / 1000;
            case SpecificEnergyUnits.MegawattDaysPerShortTon: return (this.value / ((24 * 3.6e3) / 9.0718474e2)) / 1000000;
            case SpecificEnergyUnits.GigawattDaysPerShortTon: return (this.value / ((24 * 3.6e3) / 9.0718474e2)) / 1000000000;
            case SpecificEnergyUnits.TerawattDaysPerShortTon: return (this.value / ((24 * 3.6e3) / 9.0718474e2)) / 1000000000000;
            case SpecificEnergyUnits.KilowattHoursPerPound: return (this.value / 7.93664e3) / 1000;
            case SpecificEnergyUnits.MegawattHoursPerPound: return (this.value / 7.93664e3) / 1000000;
            case SpecificEnergyUnits.GigawattHoursPerPound: return (this.value / 7.93664e3) / 1000000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: SpecificEnergyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case SpecificEnergyUnits.JoulesPerKilogram: return value;
                case SpecificEnergyUnits.MegaJoulesPerTonne: return super.internalMultiply(value, 1e3);
                case SpecificEnergyUnits.CaloriesPerGram: return super.internalMultiply(value, 4.184e3);
                case SpecificEnergyUnits.WattHoursPerKilogram: return super.internalMultiply(value, 3.6e3);
                case SpecificEnergyUnits.WattDaysPerKilogram: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    return super.internalMultiply(value, v4);
                }
                case SpecificEnergyUnits.WattDaysPerTonne: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 1e3);
                    return super.internalMultiply(value, v6);
                }
                case SpecificEnergyUnits.WattDaysPerShortTon: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 9.0718474e2);
                    return super.internalMultiply(value, v6);
                }
                case SpecificEnergyUnits.WattHoursPerPound: return super.internalMultiply(value, 7.93664e3);
                case SpecificEnergyUnits.BtuPerPound: return super.internalMultiply(value, 2326.000075362);
                case SpecificEnergyUnits.KilojoulesPerKilogram: return super.internalMultiply(value, 1000);
                case SpecificEnergyUnits.MegajoulesPerKilogram: return super.internalMultiply(value, 1000000);
                case SpecificEnergyUnits.KilocaloriesPerGram: {
                    const v3 = super.internalMultiply(value, 4.184e3);
                    return super.internalMultiply(v3, 1000);
                }
                case SpecificEnergyUnits.KilowattHoursPerKilogram: {
                    const v3 = super.internalMultiply(value, 3.6e3);
                    return super.internalMultiply(v3, 1000);
                }
                case SpecificEnergyUnits.MegawattHoursPerKilogram: {
                    const v3 = super.internalMultiply(value, 3.6e3);
                    return super.internalMultiply(v3, 1000000);
                }
                case SpecificEnergyUnits.GigawattHoursPerKilogram: {
                    const v3 = super.internalMultiply(value, 3.6e3);
                    return super.internalMultiply(v3, 1000000000);
                }
                case SpecificEnergyUnits.KilowattDaysPerKilogram: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000);
                }
                case SpecificEnergyUnits.MegawattDaysPerKilogram: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000000);
                }
                case SpecificEnergyUnits.GigawattDaysPerKilogram: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000000000);
                }
                case SpecificEnergyUnits.TerawattDaysPerKilogram: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000000000000);
                }
                case SpecificEnergyUnits.KilowattDaysPerTonne: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 1e3);
                    const v7 = super.internalMultiply(value, v6);
                    return super.internalMultiply(v7, 1000);
                }
                case SpecificEnergyUnits.MegawattDaysPerTonne: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 1e3);
                    const v7 = super.internalMultiply(value, v6);
                    return super.internalMultiply(v7, 1000000);
                }
                case SpecificEnergyUnits.GigawattDaysPerTonne: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 1e3);
                    const v7 = super.internalMultiply(value, v6);
                    return super.internalMultiply(v7, 1000000000);
                }
                case SpecificEnergyUnits.TerawattDaysPerTonne: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 1e3);
                    const v7 = super.internalMultiply(value, v6);
                    return super.internalMultiply(v7, 1000000000000);
                }
                case SpecificEnergyUnits.KilowattDaysPerShortTon: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 9.0718474e2);
                    const v7 = super.internalMultiply(value, v6);
                    return super.internalMultiply(v7, 1000);
                }
                case SpecificEnergyUnits.MegawattDaysPerShortTon: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 9.0718474e2);
                    const v7 = super.internalMultiply(value, v6);
                    return super.internalMultiply(v7, 1000000);
                }
                case SpecificEnergyUnits.GigawattDaysPerShortTon: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 9.0718474e2);
                    const v7 = super.internalMultiply(value, v6);
                    return super.internalMultiply(v7, 1000000000);
                }
                case SpecificEnergyUnits.TerawattDaysPerShortTon: {
                    const v4 = super.internalMultiply(24, 3.6e3);
                    const v6 = super.internalDivide(v4, 9.0718474e2);
                    const v7 = super.internalMultiply(value, v6);
                    return super.internalMultiply(v7, 1000000000000);
                }
                case SpecificEnergyUnits.KilowattHoursPerPound: {
                    const v3 = super.internalMultiply(value, 7.93664e3);
                    return super.internalMultiply(v3, 1000);
                }
                case SpecificEnergyUnits.MegawattHoursPerPound: {
                    const v3 = super.internalMultiply(value, 7.93664e3);
                    return super.internalMultiply(v3, 1000000);
                }
                case SpecificEnergyUnits.GigawattHoursPerPound: {
                    const v3 = super.internalMultiply(value, 7.93664e3);
                    return super.internalMultiply(v3, 1000000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case SpecificEnergyUnits.JoulesPerKilogram: return value;
            case SpecificEnergyUnits.MegaJoulesPerTonne: return value * 1e3;
            case SpecificEnergyUnits.CaloriesPerGram: return value * 4.184e3;
            case SpecificEnergyUnits.WattHoursPerKilogram: return value * 3.6e3;
            case SpecificEnergyUnits.WattDaysPerKilogram: return value * (24 * 3.6e3);
            case SpecificEnergyUnits.WattDaysPerTonne: return value * ((24 * 3.6e3) / 1e3);
            case SpecificEnergyUnits.WattDaysPerShortTon: return value * ((24 * 3.6e3) / 9.0718474e2);
            case SpecificEnergyUnits.WattHoursPerPound: return value * 7.93664e3;
            case SpecificEnergyUnits.BtuPerPound: return value * 2326.000075362;
            case SpecificEnergyUnits.KilojoulesPerKilogram: return (value) * 1000;
            case SpecificEnergyUnits.MegajoulesPerKilogram: return (value) * 1000000;
            case SpecificEnergyUnits.KilocaloriesPerGram: return (value * 4.184e3) * 1000;
            case SpecificEnergyUnits.KilowattHoursPerKilogram: return (value * 3.6e3) * 1000;
            case SpecificEnergyUnits.MegawattHoursPerKilogram: return (value * 3.6e3) * 1000000;
            case SpecificEnergyUnits.GigawattHoursPerKilogram: return (value * 3.6e3) * 1000000000;
            case SpecificEnergyUnits.KilowattDaysPerKilogram: return (value * (24 * 3.6e3)) * 1000;
            case SpecificEnergyUnits.MegawattDaysPerKilogram: return (value * (24 * 3.6e3)) * 1000000;
            case SpecificEnergyUnits.GigawattDaysPerKilogram: return (value * (24 * 3.6e3)) * 1000000000;
            case SpecificEnergyUnits.TerawattDaysPerKilogram: return (value * (24 * 3.6e3)) * 1000000000000;
            case SpecificEnergyUnits.KilowattDaysPerTonne: return (value * ((24 * 3.6e3) / 1e3)) * 1000;
            case SpecificEnergyUnits.MegawattDaysPerTonne: return (value * ((24 * 3.6e3) / 1e3)) * 1000000;
            case SpecificEnergyUnits.GigawattDaysPerTonne: return (value * ((24 * 3.6e3) / 1e3)) * 1000000000;
            case SpecificEnergyUnits.TerawattDaysPerTonne: return (value * ((24 * 3.6e3) / 1e3)) * 1000000000000;
            case SpecificEnergyUnits.KilowattDaysPerShortTon: return (value * ((24 * 3.6e3) / 9.0718474e2)) * 1000;
            case SpecificEnergyUnits.MegawattDaysPerShortTon: return (value * ((24 * 3.6e3) / 9.0718474e2)) * 1000000;
            case SpecificEnergyUnits.GigawattDaysPerShortTon: return (value * ((24 * 3.6e3) / 9.0718474e2)) * 1000000000;
            case SpecificEnergyUnits.TerawattDaysPerShortTon: return (value * ((24 * 3.6e3) / 9.0718474e2)) * 1000000000000;
            case SpecificEnergyUnits.KilowattHoursPerPound: return (value * 7.93664e3) * 1000;
            case SpecificEnergyUnits.MegawattHoursPerPound: return (value * 7.93664e3) * 1000000;
            case SpecificEnergyUnits.GigawattHoursPerPound: return (value * 7.93664e3) * 1000000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the SpecificEnergy to string.
     * Note! the default format for SpecificEnergy is JoulesPerKilogram.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the SpecificEnergy.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the SpecificEnergy.
     */
    public toString(unit: SpecificEnergyUnits = SpecificEnergyUnits.JoulesPerKilogram, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case SpecificEnergyUnits.JoulesPerKilogram:
                return super.truncateFractionDigits(this.JoulesPerKilogram, options as ToStringOptions) + ` J/kg`;
            case SpecificEnergyUnits.MegaJoulesPerTonne:
                return super.truncateFractionDigits(this.MegaJoulesPerTonne, options as ToStringOptions) + ` MJ/t`;
            case SpecificEnergyUnits.CaloriesPerGram:
                return super.truncateFractionDigits(this.CaloriesPerGram, options as ToStringOptions) + ` cal/g`;
            case SpecificEnergyUnits.WattHoursPerKilogram:
                return super.truncateFractionDigits(this.WattHoursPerKilogram, options as ToStringOptions) + ` Wh/kg`;
            case SpecificEnergyUnits.WattDaysPerKilogram:
                return super.truncateFractionDigits(this.WattDaysPerKilogram, options as ToStringOptions) + ` Wd/kg`;
            case SpecificEnergyUnits.WattDaysPerTonne:
                return super.truncateFractionDigits(this.WattDaysPerTonne, options as ToStringOptions) + ` Wd/t`;
            case SpecificEnergyUnits.WattDaysPerShortTon:
                return super.truncateFractionDigits(this.WattDaysPerShortTon, options as ToStringOptions) + ` Wd/ST`;
            case SpecificEnergyUnits.WattHoursPerPound:
                return super.truncateFractionDigits(this.WattHoursPerPound, options as ToStringOptions) + ` Wh/lbs`;
            case SpecificEnergyUnits.BtuPerPound:
                return super.truncateFractionDigits(this.BtuPerPound, options as ToStringOptions) + ` btu/lb`;
            case SpecificEnergyUnits.KilojoulesPerKilogram:
                return super.truncateFractionDigits(this.KilojoulesPerKilogram, options as ToStringOptions) + ` kJ/kg`;
            case SpecificEnergyUnits.MegajoulesPerKilogram:
                return super.truncateFractionDigits(this.MegajoulesPerKilogram, options as ToStringOptions) + ` MJ/kg`;
            case SpecificEnergyUnits.KilocaloriesPerGram:
                return super.truncateFractionDigits(this.KilocaloriesPerGram, options as ToStringOptions) + ` kcal/g`;
            case SpecificEnergyUnits.KilowattHoursPerKilogram:
                return super.truncateFractionDigits(this.KilowattHoursPerKilogram, options as ToStringOptions) + ` kWh/kg`;
            case SpecificEnergyUnits.MegawattHoursPerKilogram:
                return super.truncateFractionDigits(this.MegawattHoursPerKilogram, options as ToStringOptions) + ` MWh/kg`;
            case SpecificEnergyUnits.GigawattHoursPerKilogram:
                return super.truncateFractionDigits(this.GigawattHoursPerKilogram, options as ToStringOptions) + ` GWh/kg`;
            case SpecificEnergyUnits.KilowattDaysPerKilogram:
                return super.truncateFractionDigits(this.KilowattDaysPerKilogram, options as ToStringOptions) + ` kWd/kg`;
            case SpecificEnergyUnits.MegawattDaysPerKilogram:
                return super.truncateFractionDigits(this.MegawattDaysPerKilogram, options as ToStringOptions) + ` MWd/kg`;
            case SpecificEnergyUnits.GigawattDaysPerKilogram:
                return super.truncateFractionDigits(this.GigawattDaysPerKilogram, options as ToStringOptions) + ` GWd/kg`;
            case SpecificEnergyUnits.TerawattDaysPerKilogram:
                return super.truncateFractionDigits(this.TerawattDaysPerKilogram, options as ToStringOptions) + ` TWd/kg`;
            case SpecificEnergyUnits.KilowattDaysPerTonne:
                return super.truncateFractionDigits(this.KilowattDaysPerTonne, options as ToStringOptions) + ` kWd/t`;
            case SpecificEnergyUnits.MegawattDaysPerTonne:
                return super.truncateFractionDigits(this.MegawattDaysPerTonne, options as ToStringOptions) + ` MWd/t`;
            case SpecificEnergyUnits.GigawattDaysPerTonne:
                return super.truncateFractionDigits(this.GigawattDaysPerTonne, options as ToStringOptions) + ` GWd/t`;
            case SpecificEnergyUnits.TerawattDaysPerTonne:
                return super.truncateFractionDigits(this.TerawattDaysPerTonne, options as ToStringOptions) + ` TWd/t`;
            case SpecificEnergyUnits.KilowattDaysPerShortTon:
                return super.truncateFractionDigits(this.KilowattDaysPerShortTon, options as ToStringOptions) + ` kWd/ST`;
            case SpecificEnergyUnits.MegawattDaysPerShortTon:
                return super.truncateFractionDigits(this.MegawattDaysPerShortTon, options as ToStringOptions) + ` MWd/ST`;
            case SpecificEnergyUnits.GigawattDaysPerShortTon:
                return super.truncateFractionDigits(this.GigawattDaysPerShortTon, options as ToStringOptions) + ` GWd/ST`;
            case SpecificEnergyUnits.TerawattDaysPerShortTon:
                return super.truncateFractionDigits(this.TerawattDaysPerShortTon, options as ToStringOptions) + ` TWd/ST`;
            case SpecificEnergyUnits.KilowattHoursPerPound:
                return super.truncateFractionDigits(this.KilowattHoursPerPound, options as ToStringOptions) + ` kWh/lbs`;
            case SpecificEnergyUnits.MegawattHoursPerPound:
                return super.truncateFractionDigits(this.MegawattHoursPerPound, options as ToStringOptions) + ` MWh/lbs`;
            case SpecificEnergyUnits.GigawattHoursPerPound:
                return super.truncateFractionDigits(this.GigawattHoursPerPound, options as ToStringOptions) + ` GWh/lbs`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get SpecificEnergy unit abbreviation.
     * Note! the default abbreviation for SpecificEnergy is JoulesPerKilogram.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the SpecificEnergy.
     * @returns The abbreviation string of SpecificEnergy.
     */
    public getUnitAbbreviation(unitAbbreviation: SpecificEnergyUnits = SpecificEnergyUnits.JoulesPerKilogram): string {

        switch (unitAbbreviation) {
            
            case SpecificEnergyUnits.JoulesPerKilogram:
                return `J/kg`;
            case SpecificEnergyUnits.MegaJoulesPerTonne:
                return `MJ/t`;
            case SpecificEnergyUnits.CaloriesPerGram:
                return `cal/g`;
            case SpecificEnergyUnits.WattHoursPerKilogram:
                return `Wh/kg`;
            case SpecificEnergyUnits.WattDaysPerKilogram:
                return `Wd/kg`;
            case SpecificEnergyUnits.WattDaysPerTonne:
                return `Wd/t`;
            case SpecificEnergyUnits.WattDaysPerShortTon:
                return `Wd/ST`;
            case SpecificEnergyUnits.WattHoursPerPound:
                return `Wh/lbs`;
            case SpecificEnergyUnits.BtuPerPound:
                return `btu/lb`;
            case SpecificEnergyUnits.KilojoulesPerKilogram:
                return `kJ/kg`;
            case SpecificEnergyUnits.MegajoulesPerKilogram:
                return `MJ/kg`;
            case SpecificEnergyUnits.KilocaloriesPerGram:
                return `kcal/g`;
            case SpecificEnergyUnits.KilowattHoursPerKilogram:
                return `kWh/kg`;
            case SpecificEnergyUnits.MegawattHoursPerKilogram:
                return `MWh/kg`;
            case SpecificEnergyUnits.GigawattHoursPerKilogram:
                return `GWh/kg`;
            case SpecificEnergyUnits.KilowattDaysPerKilogram:
                return `kWd/kg`;
            case SpecificEnergyUnits.MegawattDaysPerKilogram:
                return `MWd/kg`;
            case SpecificEnergyUnits.GigawattDaysPerKilogram:
                return `GWd/kg`;
            case SpecificEnergyUnits.TerawattDaysPerKilogram:
                return `TWd/kg`;
            case SpecificEnergyUnits.KilowattDaysPerTonne:
                return `kWd/t`;
            case SpecificEnergyUnits.MegawattDaysPerTonne:
                return `MWd/t`;
            case SpecificEnergyUnits.GigawattDaysPerTonne:
                return `GWd/t`;
            case SpecificEnergyUnits.TerawattDaysPerTonne:
                return `TWd/t`;
            case SpecificEnergyUnits.KilowattDaysPerShortTon:
                return `kWd/ST`;
            case SpecificEnergyUnits.MegawattDaysPerShortTon:
                return `MWd/ST`;
            case SpecificEnergyUnits.GigawattDaysPerShortTon:
                return `GWd/ST`;
            case SpecificEnergyUnits.TerawattDaysPerShortTon:
                return `TWd/ST`;
            case SpecificEnergyUnits.KilowattHoursPerPound:
                return `kWh/lbs`;
            case SpecificEnergyUnits.MegawattHoursPerPound:
                return `MWh/lbs`;
            case SpecificEnergyUnits.GigawattHoursPerPound:
                return `GWh/lbs`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given SpecificEnergy are equals to the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns True if the given SpecificEnergy are equal to the current SpecificEnergy.
     */
    public equals(specificEnergy: SpecificEnergy): boolean {
        return super.internalEquals(this.value, specificEnergy.BaseValue);
    }

    /**
     * Compare the given SpecificEnergy against the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns 0 if they are equal, -1 if the current SpecificEnergy is less then other, 1 if the current SpecificEnergy is greater then other.
     */
    public compareTo(specificEnergy: SpecificEnergy): number {
        return super.internalCompareTo(this.value, specificEnergy.BaseValue);
    }

    /**
     * Add the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    public add(specificEnergy: SpecificEnergy): SpecificEnergy {
        return new SpecificEnergy(super.internalAdd(this.value, specificEnergy.BaseValue))
    }

    /**
     * Subtract the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    public subtract(specificEnergy: SpecificEnergy): SpecificEnergy {
        return new SpecificEnergy(super.internalSubtract(this.value, specificEnergy.BaseValue))
    }

    /**
     * Multiply the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    public multiply(specificEnergy: SpecificEnergy): SpecificEnergy {
        return new SpecificEnergy(super.internalMultiply(this.value, specificEnergy.BaseValue))
    }

    /**
     * Divide the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    public divide(specificEnergy: SpecificEnergy): SpecificEnergy {
        return new SpecificEnergy(super.internalDivide(this.value, specificEnergy.BaseValue))
    }

    /**
     * Modulo the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    public modulo(specificEnergy: SpecificEnergy): SpecificEnergy {
        return new SpecificEnergy(super.internalModulo(this.value, specificEnergy.BaseValue))
    }

    /**
     * Pow the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    public pow(specificEnergy: SpecificEnergy): SpecificEnergy {
        return new SpecificEnergy(super.internalPow(this.value, specificEnergy.BaseValue))
    }
}
