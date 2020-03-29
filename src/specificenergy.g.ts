/** SpecificEnergyUnits enumeration */
export enum SpecificEnergyUnits {
    /** */
    JoulesPerKilogram,
    /** */
    CaloriesPerGram,
    /** */
    WattHoursPerKilogram,
    /** */
    WattDaysPerKilogram,
    /** */
    WattDaysPerTonne,
    /** */
    WattDaysPerShortTon,
    /** */
    BtuPerPound,
    /** */
    KilojoulesPerKilogram,
    /** */
    MegajoulesPerKilogram,
    /** */
    KilocaloriesPerGram,
    /** */
    KilowattHoursPerKilogram,
    /** */
    MegawattHoursPerKilogram,
    /** */
    GigawattHoursPerKilogram,
    /** */
    KilowattDaysPerKilogram,
    /** */
    MegawattDaysPerKilogram,
    /** */
    GigawattDaysPerKilogram,
    /** */
    TerawattDaysPerKilogram,
    /** */
    KilowattDaysPerTonne,
    /** */
    MegawattDaysPerTonne,
    /** */
    GigawattDaysPerTonne,
    /** */
    TerawattDaysPerTonne,
    /** */
    KilowattDaysPerShortTon,
    /** */
    MegawattDaysPerShortTon,
    /** */
    GigawattDaysPerShortTon,
    /** */
    TerawattDaysPerShortTon
}

/** The SpecificEnergy */
export class SpecificEnergy {
    private value: number;
    private joulesperkilogramLazy: number | null = null;
    private caloriespergramLazy: number | null = null;
    private watthoursperkilogramLazy: number | null = null;
    private wattdaysperkilogramLazy: number | null = null;
    private wattdayspertonneLazy: number | null = null;
    private wattdayspershorttonLazy: number | null = null;
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

    /**
     * Create a new SpecificEnergy.
     * @param value The value.
     * @param fromUnit The ‘SpecificEnergy’ unit to create from.
     * The default unit is JoulesPerKilogram
     */
    public constructor(value: number, fromUnit: SpecificEnergyUnits = SpecificEnergyUnits.JoulesPerKilogram) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SpecificEnergy is JoulesPerKilogram.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get JoulesPerKilogram(): number {
        if(this.joulesperkilogramLazy !== null){
            return this.joulesperkilogramLazy;
        }
        return this.joulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.JoulesPerKilogram);
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

    private convertFromBase(toUnit: SpecificEnergyUnits): number {
        switch (toUnit) {
                
            case SpecificEnergyUnits.JoulesPerKilogram:
                return this.value;
            case SpecificEnergyUnits.CaloriesPerGram:
                return this.value/4.184e3;
            case SpecificEnergyUnits.WattHoursPerKilogram:
                return this.value/3.6e3;
            case SpecificEnergyUnits.WattDaysPerKilogram:
                return this.value/(24*3.6e3);
            case SpecificEnergyUnits.WattDaysPerTonne:
                return this.value/((24*3.6e3)/1e3);
            case SpecificEnergyUnits.WattDaysPerShortTon:
                return this.value/((24*3.6e3)/9.0718474e2);
            case SpecificEnergyUnits.BtuPerPound:
                return this.value/2326.000075362;
            case SpecificEnergyUnits.KilojoulesPerKilogram:
                return (this.value) / 1000;
            case SpecificEnergyUnits.MegajoulesPerKilogram:
                return (this.value) / 1000000;
            case SpecificEnergyUnits.KilocaloriesPerGram:
                return (this.value/4.184e3) / 1000;
            case SpecificEnergyUnits.KilowattHoursPerKilogram:
                return (this.value/3.6e3) / 1000;
            case SpecificEnergyUnits.MegawattHoursPerKilogram:
                return (this.value/3.6e3) / 1000000;
            case SpecificEnergyUnits.GigawattHoursPerKilogram:
                return (this.value/3.6e3) / 1000000000;
            case SpecificEnergyUnits.KilowattDaysPerKilogram:
                return (this.value/(24*3.6e3)) / 1000;
            case SpecificEnergyUnits.MegawattDaysPerKilogram:
                return (this.value/(24*3.6e3)) / 1000000;
            case SpecificEnergyUnits.GigawattDaysPerKilogram:
                return (this.value/(24*3.6e3)) / 1000000000;
            case SpecificEnergyUnits.TerawattDaysPerKilogram:
                return (this.value/(24*3.6e3)) / 1000000000000;
            case SpecificEnergyUnits.KilowattDaysPerTonne:
                return (this.value/((24*3.6e3)/1e3)) / 1000;
            case SpecificEnergyUnits.MegawattDaysPerTonne:
                return (this.value/((24*3.6e3)/1e3)) / 1000000;
            case SpecificEnergyUnits.GigawattDaysPerTonne:
                return (this.value/((24*3.6e3)/1e3)) / 1000000000;
            case SpecificEnergyUnits.TerawattDaysPerTonne:
                return (this.value/((24*3.6e3)/1e3)) / 1000000000000;
            case SpecificEnergyUnits.KilowattDaysPerShortTon:
                return (this.value/((24*3.6e3)/9.0718474e2)) / 1000;
            case SpecificEnergyUnits.MegawattDaysPerShortTon:
                return (this.value/((24*3.6e3)/9.0718474e2)) / 1000000;
            case SpecificEnergyUnits.GigawattDaysPerShortTon:
                return (this.value/((24*3.6e3)/9.0718474e2)) / 1000000000;
            case SpecificEnergyUnits.TerawattDaysPerShortTon:
                return (this.value/((24*3.6e3)/9.0718474e2)) / 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: SpecificEnergyUnits): number {
        switch (fromUnit) {
                
            case SpecificEnergyUnits.JoulesPerKilogram:
                return value;
            case SpecificEnergyUnits.CaloriesPerGram:
                return value*4.184e3;
            case SpecificEnergyUnits.WattHoursPerKilogram:
                return value*3.6e3;
            case SpecificEnergyUnits.WattDaysPerKilogram:
                return value*(24*3.6e3);
            case SpecificEnergyUnits.WattDaysPerTonne:
                return value*((24*3.6e3)/1e3);
            case SpecificEnergyUnits.WattDaysPerShortTon:
                return value*((24*3.6e3)/9.0718474e2);
            case SpecificEnergyUnits.BtuPerPound:
                return value*2326.000075362;
            case SpecificEnergyUnits.KilojoulesPerKilogram:
                return (value) * 1000;
            case SpecificEnergyUnits.MegajoulesPerKilogram:
                return (value) * 1000000;
            case SpecificEnergyUnits.KilocaloriesPerGram:
                return (value*4.184e3) * 1000;
            case SpecificEnergyUnits.KilowattHoursPerKilogram:
                return (value*3.6e3) * 1000;
            case SpecificEnergyUnits.MegawattHoursPerKilogram:
                return (value*3.6e3) * 1000000;
            case SpecificEnergyUnits.GigawattHoursPerKilogram:
                return (value*3.6e3) * 1000000000;
            case SpecificEnergyUnits.KilowattDaysPerKilogram:
                return (value*(24*3.6e3)) * 1000;
            case SpecificEnergyUnits.MegawattDaysPerKilogram:
                return (value*(24*3.6e3)) * 1000000;
            case SpecificEnergyUnits.GigawattDaysPerKilogram:
                return (value*(24*3.6e3)) * 1000000000;
            case SpecificEnergyUnits.TerawattDaysPerKilogram:
                return (value*(24*3.6e3)) * 1000000000000;
            case SpecificEnergyUnits.KilowattDaysPerTonne:
                return (value*((24*3.6e3)/1e3)) * 1000;
            case SpecificEnergyUnits.MegawattDaysPerTonne:
                return (value*((24*3.6e3)/1e3)) * 1000000;
            case SpecificEnergyUnits.GigawattDaysPerTonne:
                return (value*((24*3.6e3)/1e3)) * 1000000000;
            case SpecificEnergyUnits.TerawattDaysPerTonne:
                return (value*((24*3.6e3)/1e3)) * 1000000000000;
            case SpecificEnergyUnits.KilowattDaysPerShortTon:
                return (value*((24*3.6e3)/9.0718474e2)) * 1000;
            case SpecificEnergyUnits.MegawattDaysPerShortTon:
                return (value*((24*3.6e3)/9.0718474e2)) * 1000000;
            case SpecificEnergyUnits.GigawattDaysPerShortTon:
                return (value*((24*3.6e3)/9.0718474e2)) * 1000000000;
            case SpecificEnergyUnits.TerawattDaysPerShortTon:
                return (value*((24*3.6e3)/9.0718474e2)) * 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the SpecificEnergy to string.
     * Note! the default format for SpecificEnergy is JoulesPerKilogram.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SpecificEnergy.
     * @returns The string format of the SpecificEnergy.
     */
    public toString(toUnit: SpecificEnergyUnits = SpecificEnergyUnits.JoulesPerKilogram): string {

        switch (toUnit) {
            
            case SpecificEnergyUnits.JoulesPerKilogram:
                return this.JoulesPerKilogram + ` J/kg`;
            case SpecificEnergyUnits.CaloriesPerGram:
                return this.CaloriesPerGram + ` cal/g`;
            case SpecificEnergyUnits.WattHoursPerKilogram:
                return this.WattHoursPerKilogram + ` Wh/kg`;
            case SpecificEnergyUnits.WattDaysPerKilogram:
                return this.WattDaysPerKilogram + ` Wd/kg`;
            case SpecificEnergyUnits.WattDaysPerTonne:
                return this.WattDaysPerTonne + ` Wd/t`;
            case SpecificEnergyUnits.WattDaysPerShortTon:
                return this.WattDaysPerShortTon + ` Wd/ST`;
            case SpecificEnergyUnits.BtuPerPound:
                return this.BtuPerPound + ` btu/lb`;
            case SpecificEnergyUnits.KilojoulesPerKilogram:
                return this.KilojoulesPerKilogram + ` `;
            case SpecificEnergyUnits.MegajoulesPerKilogram:
                return this.MegajoulesPerKilogram + ` `;
            case SpecificEnergyUnits.KilocaloriesPerGram:
                return this.KilocaloriesPerGram + ` `;
            case SpecificEnergyUnits.KilowattHoursPerKilogram:
                return this.KilowattHoursPerKilogram + ` `;
            case SpecificEnergyUnits.MegawattHoursPerKilogram:
                return this.MegawattHoursPerKilogram + ` `;
            case SpecificEnergyUnits.GigawattHoursPerKilogram:
                return this.GigawattHoursPerKilogram + ` `;
            case SpecificEnergyUnits.KilowattDaysPerKilogram:
                return this.KilowattDaysPerKilogram + ` `;
            case SpecificEnergyUnits.MegawattDaysPerKilogram:
                return this.MegawattDaysPerKilogram + ` `;
            case SpecificEnergyUnits.GigawattDaysPerKilogram:
                return this.GigawattDaysPerKilogram + ` `;
            case SpecificEnergyUnits.TerawattDaysPerKilogram:
                return this.TerawattDaysPerKilogram + ` `;
            case SpecificEnergyUnits.KilowattDaysPerTonne:
                return this.KilowattDaysPerTonne + ` `;
            case SpecificEnergyUnits.MegawattDaysPerTonne:
                return this.MegawattDaysPerTonne + ` `;
            case SpecificEnergyUnits.GigawattDaysPerTonne:
                return this.GigawattDaysPerTonne + ` `;
            case SpecificEnergyUnits.TerawattDaysPerTonne:
                return this.TerawattDaysPerTonne + ` `;
            case SpecificEnergyUnits.KilowattDaysPerShortTon:
                return this.KilowattDaysPerShortTon + ` `;
            case SpecificEnergyUnits.MegawattDaysPerShortTon:
                return this.MegawattDaysPerShortTon + ` `;
            case SpecificEnergyUnits.GigawattDaysPerShortTon:
                return this.GigawattDaysPerShortTon + ` `;
            case SpecificEnergyUnits.TerawattDaysPerShortTon:
                return this.TerawattDaysPerShortTon + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given SpecificEnergy are equals to the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns True if the given SpecificEnergy are equal to the current SpecificEnergy.
     */
    public equals(specificEnergy: SpecificEnergy): boolean {
        return this.value === specificEnergy.BaseValue;
    }

    /**
     * Compare the given SpecificEnergy against the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns 0 if they are equal, -1 if the current SpecificEnergy is less then other, 1 if the current SpecificEnergy is greater then other.
     */
    public compareTo(specificEnergy: SpecificEnergy): number {

        if (this.value > specificEnergy.BaseValue)
            return 1;
        if (this.value < specificEnergy.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    public add(specificEnergy: SpecificEnergy): SpecificEnergy {
        return new SpecificEnergy(this.value + specificEnergy.BaseValue)
    }

    /**
     * Subtract the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    public subtract(specificEnergy: SpecificEnergy): SpecificEnergy {
        return new SpecificEnergy(this.value - specificEnergy.BaseValue)
    }

    /**
     * Multiply the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    public multiply(specificEnergy: SpecificEnergy): SpecificEnergy {
        return new SpecificEnergy(this.value * specificEnergy.BaseValue)
    }

    /**
     * Divide the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    public divide(specificEnergy: SpecificEnergy): SpecificEnergy {
        return new SpecificEnergy(this.value / specificEnergy.BaseValue)
    }

    /**
     * Modulo the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    public modulo(specificEnergy: SpecificEnergy): SpecificEnergy {
        return new SpecificEnergy(this.value % specificEnergy.BaseValue)
    }

    /**
     * Pow the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    public pow(specificEnergy: SpecificEnergy): SpecificEnergy {
        return new SpecificEnergy(this.value ** specificEnergy.BaseValue)
    }
}
