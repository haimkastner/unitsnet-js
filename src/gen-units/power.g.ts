import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a Power */
export interface PowerDto {
    /** The value of the Power */
    value: number;
    /**  The specific unit that the Power value is representing */
    unit: PowerUnits;
}

/** PowerUnits enumeration */
export enum PowerUnits {
    /** */
    Watts = "Watt",
    /** */
    MechanicalHorsepower = "MechanicalHorsepower",
    /** */
    MetricHorsepower = "MetricHorsepower",
    /** */
    ElectricalHorsepower = "ElectricalHorsepower",
    /** */
    BoilerHorsepower = "BoilerHorsepower",
    /** */
    HydraulicHorsepower = "HydraulicHorsepower",
    /** */
    BritishThermalUnitsPerHour = "BritishThermalUnitPerHour",
    /** */
    JoulesPerHour = "JoulePerHour",
    /** */
    TonsOfRefrigeration = "TonOfRefrigeration",
    /** */
    Femtowatts = "Femtowatt",
    /** */
    Picowatts = "Picowatt",
    /** */
    Nanowatts = "Nanowatt",
    /** */
    Microwatts = "Microwatt",
    /** */
    Milliwatts = "Milliwatt",
    /** */
    Deciwatts = "Deciwatt",
    /** */
    Decawatts = "Decawatt",
    /** */
    Kilowatts = "Kilowatt",
    /** */
    Megawatts = "Megawatt",
    /** */
    Gigawatts = "Gigawatt",
    /** */
    Terawatts = "Terawatt",
    /** */
    Petawatts = "Petawatt",
    /** */
    KilobritishThermalUnitsPerHour = "KilobritishThermalUnitPerHour",
    /** */
    MegabritishThermalUnitsPerHour = "MegabritishThermalUnitPerHour",
    /** */
    MillijoulesPerHour = "MillijoulePerHour",
    /** */
    KilojoulesPerHour = "KilojoulePerHour",
    /** */
    MegajoulesPerHour = "MegajoulePerHour",
    /** */
    GigajoulesPerHour = "GigajoulePerHour"
}

/** In physics, power is the rate of doing work. It is equivalent to an amount of energy consumed per unit time. */
export class Power extends BaseUnit {
    protected value: number;
    private wattsLazy: number | null = null;
    private mechanicalhorsepowerLazy: number | null = null;
    private metrichorsepowerLazy: number | null = null;
    private electricalhorsepowerLazy: number | null = null;
    private boilerhorsepowerLazy: number | null = null;
    private hydraulichorsepowerLazy: number | null = null;
    private britishthermalunitsperhourLazy: number | null = null;
    private joulesperhourLazy: number | null = null;
    private tonsofrefrigerationLazy: number | null = null;
    private femtowattsLazy: number | null = null;
    private picowattsLazy: number | null = null;
    private nanowattsLazy: number | null = null;
    private microwattsLazy: number | null = null;
    private milliwattsLazy: number | null = null;
    private deciwattsLazy: number | null = null;
    private decawattsLazy: number | null = null;
    private kilowattsLazy: number | null = null;
    private megawattsLazy: number | null = null;
    private gigawattsLazy: number | null = null;
    private terawattsLazy: number | null = null;
    private petawattsLazy: number | null = null;
    private kilobritishthermalunitsperhourLazy: number | null = null;
    private megabritishthermalunitsperhourLazy: number | null = null;
    private millijoulesperhourLazy: number | null = null;
    private kilojoulesperhourLazy: number | null = null;
    private megajoulesperhourLazy: number | null = null;
    private gigajoulesperhourLazy: number | null = null;

    /**
     * Create a new Power.
     * @param value The value.
     * @param fromUnit The ‘Power’ unit to create from.
     * The default unit is Watts
     */
    public constructor(value: number, fromUnit: PowerUnits = PowerUnits.Watts) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Power is Watts.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): PowerUnits.Watts {
        return PowerUnits.Watts
    }

    /** */
    public get Watts(): number {
        if(this.wattsLazy !== null){
            return this.wattsLazy;
        }
        return this.wattsLazy = this.convertFromBase(PowerUnits.Watts);
    }

    /** */
    public get MechanicalHorsepower(): number {
        if(this.mechanicalhorsepowerLazy !== null){
            return this.mechanicalhorsepowerLazy;
        }
        return this.mechanicalhorsepowerLazy = this.convertFromBase(PowerUnits.MechanicalHorsepower);
    }

    /** */
    public get MetricHorsepower(): number {
        if(this.metrichorsepowerLazy !== null){
            return this.metrichorsepowerLazy;
        }
        return this.metrichorsepowerLazy = this.convertFromBase(PowerUnits.MetricHorsepower);
    }

    /** */
    public get ElectricalHorsepower(): number {
        if(this.electricalhorsepowerLazy !== null){
            return this.electricalhorsepowerLazy;
        }
        return this.electricalhorsepowerLazy = this.convertFromBase(PowerUnits.ElectricalHorsepower);
    }

    /** */
    public get BoilerHorsepower(): number {
        if(this.boilerhorsepowerLazy !== null){
            return this.boilerhorsepowerLazy;
        }
        return this.boilerhorsepowerLazy = this.convertFromBase(PowerUnits.BoilerHorsepower);
    }

    /** */
    public get HydraulicHorsepower(): number {
        if(this.hydraulichorsepowerLazy !== null){
            return this.hydraulichorsepowerLazy;
        }
        return this.hydraulichorsepowerLazy = this.convertFromBase(PowerUnits.HydraulicHorsepower);
    }

    /** */
    public get BritishThermalUnitsPerHour(): number {
        if(this.britishthermalunitsperhourLazy !== null){
            return this.britishthermalunitsperhourLazy;
        }
        return this.britishthermalunitsperhourLazy = this.convertFromBase(PowerUnits.BritishThermalUnitsPerHour);
    }

    /** */
    public get JoulesPerHour(): number {
        if(this.joulesperhourLazy !== null){
            return this.joulesperhourLazy;
        }
        return this.joulesperhourLazy = this.convertFromBase(PowerUnits.JoulesPerHour);
    }

    /** */
    public get TonsOfRefrigeration(): number {
        if(this.tonsofrefrigerationLazy !== null){
            return this.tonsofrefrigerationLazy;
        }
        return this.tonsofrefrigerationLazy = this.convertFromBase(PowerUnits.TonsOfRefrigeration);
    }

    /** */
    public get Femtowatts(): number {
        if(this.femtowattsLazy !== null){
            return this.femtowattsLazy;
        }
        return this.femtowattsLazy = this.convertFromBase(PowerUnits.Femtowatts);
    }

    /** */
    public get Picowatts(): number {
        if(this.picowattsLazy !== null){
            return this.picowattsLazy;
        }
        return this.picowattsLazy = this.convertFromBase(PowerUnits.Picowatts);
    }

    /** */
    public get Nanowatts(): number {
        if(this.nanowattsLazy !== null){
            return this.nanowattsLazy;
        }
        return this.nanowattsLazy = this.convertFromBase(PowerUnits.Nanowatts);
    }

    /** */
    public get Microwatts(): number {
        if(this.microwattsLazy !== null){
            return this.microwattsLazy;
        }
        return this.microwattsLazy = this.convertFromBase(PowerUnits.Microwatts);
    }

    /** */
    public get Milliwatts(): number {
        if(this.milliwattsLazy !== null){
            return this.milliwattsLazy;
        }
        return this.milliwattsLazy = this.convertFromBase(PowerUnits.Milliwatts);
    }

    /** */
    public get Deciwatts(): number {
        if(this.deciwattsLazy !== null){
            return this.deciwattsLazy;
        }
        return this.deciwattsLazy = this.convertFromBase(PowerUnits.Deciwatts);
    }

    /** */
    public get Decawatts(): number {
        if(this.decawattsLazy !== null){
            return this.decawattsLazy;
        }
        return this.decawattsLazy = this.convertFromBase(PowerUnits.Decawatts);
    }

    /** */
    public get Kilowatts(): number {
        if(this.kilowattsLazy !== null){
            return this.kilowattsLazy;
        }
        return this.kilowattsLazy = this.convertFromBase(PowerUnits.Kilowatts);
    }

    /** */
    public get Megawatts(): number {
        if(this.megawattsLazy !== null){
            return this.megawattsLazy;
        }
        return this.megawattsLazy = this.convertFromBase(PowerUnits.Megawatts);
    }

    /** */
    public get Gigawatts(): number {
        if(this.gigawattsLazy !== null){
            return this.gigawattsLazy;
        }
        return this.gigawattsLazy = this.convertFromBase(PowerUnits.Gigawatts);
    }

    /** */
    public get Terawatts(): number {
        if(this.terawattsLazy !== null){
            return this.terawattsLazy;
        }
        return this.terawattsLazy = this.convertFromBase(PowerUnits.Terawatts);
    }

    /** */
    public get Petawatts(): number {
        if(this.petawattsLazy !== null){
            return this.petawattsLazy;
        }
        return this.petawattsLazy = this.convertFromBase(PowerUnits.Petawatts);
    }

    /** */
    public get KilobritishThermalUnitsPerHour(): number {
        if(this.kilobritishthermalunitsperhourLazy !== null){
            return this.kilobritishthermalunitsperhourLazy;
        }
        return this.kilobritishthermalunitsperhourLazy = this.convertFromBase(PowerUnits.KilobritishThermalUnitsPerHour);
    }

    /** */
    public get MegabritishThermalUnitsPerHour(): number {
        if(this.megabritishthermalunitsperhourLazy !== null){
            return this.megabritishthermalunitsperhourLazy;
        }
        return this.megabritishthermalunitsperhourLazy = this.convertFromBase(PowerUnits.MegabritishThermalUnitsPerHour);
    }

    /** */
    public get MillijoulesPerHour(): number {
        if(this.millijoulesperhourLazy !== null){
            return this.millijoulesperhourLazy;
        }
        return this.millijoulesperhourLazy = this.convertFromBase(PowerUnits.MillijoulesPerHour);
    }

    /** */
    public get KilojoulesPerHour(): number {
        if(this.kilojoulesperhourLazy !== null){
            return this.kilojoulesperhourLazy;
        }
        return this.kilojoulesperhourLazy = this.convertFromBase(PowerUnits.KilojoulesPerHour);
    }

    /** */
    public get MegajoulesPerHour(): number {
        if(this.megajoulesperhourLazy !== null){
            return this.megajoulesperhourLazy;
        }
        return this.megajoulesperhourLazy = this.convertFromBase(PowerUnits.MegajoulesPerHour);
    }

    /** */
    public get GigajoulesPerHour(): number {
        if(this.gigajoulesperhourLazy !== null){
            return this.gigajoulesperhourLazy;
        }
        return this.gigajoulesperhourLazy = this.convertFromBase(PowerUnits.GigajoulesPerHour);
    }

    /**
     * Create a new Power instance from a Watts
     *
     * @param value The unit as Watts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromWatts(value: number): Power {
        return new Power(value, PowerUnits.Watts);
    }

    /**
     * Create a new Power instance from a MechanicalHorsepower
     *
     * @param value The unit as MechanicalHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMechanicalHorsepower(value: number): Power {
        return new Power(value, PowerUnits.MechanicalHorsepower);
    }

    /**
     * Create a new Power instance from a MetricHorsepower
     *
     * @param value The unit as MetricHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMetricHorsepower(value: number): Power {
        return new Power(value, PowerUnits.MetricHorsepower);
    }

    /**
     * Create a new Power instance from a ElectricalHorsepower
     *
     * @param value The unit as ElectricalHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromElectricalHorsepower(value: number): Power {
        return new Power(value, PowerUnits.ElectricalHorsepower);
    }

    /**
     * Create a new Power instance from a BoilerHorsepower
     *
     * @param value The unit as BoilerHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromBoilerHorsepower(value: number): Power {
        return new Power(value, PowerUnits.BoilerHorsepower);
    }

    /**
     * Create a new Power instance from a HydraulicHorsepower
     *
     * @param value The unit as HydraulicHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromHydraulicHorsepower(value: number): Power {
        return new Power(value, PowerUnits.HydraulicHorsepower);
    }

    /**
     * Create a new Power instance from a BritishThermalUnitsPerHour
     *
     * @param value The unit as BritishThermalUnitsPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromBritishThermalUnitsPerHour(value: number): Power {
        return new Power(value, PowerUnits.BritishThermalUnitsPerHour);
    }

    /**
     * Create a new Power instance from a JoulesPerHour
     *
     * @param value The unit as JoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromJoulesPerHour(value: number): Power {
        return new Power(value, PowerUnits.JoulesPerHour);
    }

    /**
     * Create a new Power instance from a TonsOfRefrigeration
     *
     * @param value The unit as TonsOfRefrigeration to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromTonsOfRefrigeration(value: number): Power {
        return new Power(value, PowerUnits.TonsOfRefrigeration);
    }

    /**
     * Create a new Power instance from a Femtowatts
     *
     * @param value The unit as Femtowatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromFemtowatts(value: number): Power {
        return new Power(value, PowerUnits.Femtowatts);
    }

    /**
     * Create a new Power instance from a Picowatts
     *
     * @param value The unit as Picowatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromPicowatts(value: number): Power {
        return new Power(value, PowerUnits.Picowatts);
    }

    /**
     * Create a new Power instance from a Nanowatts
     *
     * @param value The unit as Nanowatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromNanowatts(value: number): Power {
        return new Power(value, PowerUnits.Nanowatts);
    }

    /**
     * Create a new Power instance from a Microwatts
     *
     * @param value The unit as Microwatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMicrowatts(value: number): Power {
        return new Power(value, PowerUnits.Microwatts);
    }

    /**
     * Create a new Power instance from a Milliwatts
     *
     * @param value The unit as Milliwatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMilliwatts(value: number): Power {
        return new Power(value, PowerUnits.Milliwatts);
    }

    /**
     * Create a new Power instance from a Deciwatts
     *
     * @param value The unit as Deciwatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromDeciwatts(value: number): Power {
        return new Power(value, PowerUnits.Deciwatts);
    }

    /**
     * Create a new Power instance from a Decawatts
     *
     * @param value The unit as Decawatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromDecawatts(value: number): Power {
        return new Power(value, PowerUnits.Decawatts);
    }

    /**
     * Create a new Power instance from a Kilowatts
     *
     * @param value The unit as Kilowatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromKilowatts(value: number): Power {
        return new Power(value, PowerUnits.Kilowatts);
    }

    /**
     * Create a new Power instance from a Megawatts
     *
     * @param value The unit as Megawatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMegawatts(value: number): Power {
        return new Power(value, PowerUnits.Megawatts);
    }

    /**
     * Create a new Power instance from a Gigawatts
     *
     * @param value The unit as Gigawatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromGigawatts(value: number): Power {
        return new Power(value, PowerUnits.Gigawatts);
    }

    /**
     * Create a new Power instance from a Terawatts
     *
     * @param value The unit as Terawatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromTerawatts(value: number): Power {
        return new Power(value, PowerUnits.Terawatts);
    }

    /**
     * Create a new Power instance from a Petawatts
     *
     * @param value The unit as Petawatts to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromPetawatts(value: number): Power {
        return new Power(value, PowerUnits.Petawatts);
    }

    /**
     * Create a new Power instance from a KilobritishThermalUnitsPerHour
     *
     * @param value The unit as KilobritishThermalUnitsPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromKilobritishThermalUnitsPerHour(value: number): Power {
        return new Power(value, PowerUnits.KilobritishThermalUnitsPerHour);
    }

    /**
     * Create a new Power instance from a MegabritishThermalUnitsPerHour
     *
     * @param value The unit as MegabritishThermalUnitsPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMegabritishThermalUnitsPerHour(value: number): Power {
        return new Power(value, PowerUnits.MegabritishThermalUnitsPerHour);
    }

    /**
     * Create a new Power instance from a MillijoulesPerHour
     *
     * @param value The unit as MillijoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMillijoulesPerHour(value: number): Power {
        return new Power(value, PowerUnits.MillijoulesPerHour);
    }

    /**
     * Create a new Power instance from a KilojoulesPerHour
     *
     * @param value The unit as KilojoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromKilojoulesPerHour(value: number): Power {
        return new Power(value, PowerUnits.KilojoulesPerHour);
    }

    /**
     * Create a new Power instance from a MegajoulesPerHour
     *
     * @param value The unit as MegajoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromMegajoulesPerHour(value: number): Power {
        return new Power(value, PowerUnits.MegajoulesPerHour);
    }

    /**
     * Create a new Power instance from a GigajoulesPerHour
     *
     * @param value The unit as GigajoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    public static FromGigajoulesPerHour(value: number): Power {
        return new Power(value, PowerUnits.GigajoulesPerHour);
    }

    /**
     * Gets the base unit enumeration associated with Power
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof PowerUnits {
        return PowerUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): PowerUnits.Watts {
        return PowerUnits.Watts;
    }

    /**
     * Create API DTO represent a Power unit.
     * @param holdInUnit The specific Power unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: PowerUnits = PowerUnits.Watts): PowerDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Power unit from an API DTO representation.
     * @param dtoPower The Power API DTO representation
     */
    public static FromDto(dtoPower: PowerDto): Power {
        return new Power(dtoPower.value, dtoPower.unit);
    }

    /**
     * Convert Power to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: PowerUnits): number {
        switch (toUnit) {
            case PowerUnits.Watts: return this.Watts;
            case PowerUnits.MechanicalHorsepower: return this.MechanicalHorsepower;
            case PowerUnits.MetricHorsepower: return this.MetricHorsepower;
            case PowerUnits.ElectricalHorsepower: return this.ElectricalHorsepower;
            case PowerUnits.BoilerHorsepower: return this.BoilerHorsepower;
            case PowerUnits.HydraulicHorsepower: return this.HydraulicHorsepower;
            case PowerUnits.BritishThermalUnitsPerHour: return this.BritishThermalUnitsPerHour;
            case PowerUnits.JoulesPerHour: return this.JoulesPerHour;
            case PowerUnits.TonsOfRefrigeration: return this.TonsOfRefrigeration;
            case PowerUnits.Femtowatts: return this.Femtowatts;
            case PowerUnits.Picowatts: return this.Picowatts;
            case PowerUnits.Nanowatts: return this.Nanowatts;
            case PowerUnits.Microwatts: return this.Microwatts;
            case PowerUnits.Milliwatts: return this.Milliwatts;
            case PowerUnits.Deciwatts: return this.Deciwatts;
            case PowerUnits.Decawatts: return this.Decawatts;
            case PowerUnits.Kilowatts: return this.Kilowatts;
            case PowerUnits.Megawatts: return this.Megawatts;
            case PowerUnits.Gigawatts: return this.Gigawatts;
            case PowerUnits.Terawatts: return this.Terawatts;
            case PowerUnits.Petawatts: return this.Petawatts;
            case PowerUnits.KilobritishThermalUnitsPerHour: return this.KilobritishThermalUnitsPerHour;
            case PowerUnits.MegabritishThermalUnitsPerHour: return this.MegabritishThermalUnitsPerHour;
            case PowerUnits.MillijoulesPerHour: return this.MillijoulesPerHour;
            case PowerUnits.KilojoulesPerHour: return this.KilojoulesPerHour;
            case PowerUnits.MegajoulesPerHour: return this.MegajoulesPerHour;
            case PowerUnits.GigajoulesPerHour: return this.GigajoulesPerHour;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: PowerUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case PowerUnits.Watts: return this.value;
                case PowerUnits.MechanicalHorsepower: return super.internalDivide(this.value, 745.69);
                case PowerUnits.MetricHorsepower: return super.internalDivide(this.value, 735.49875);
                case PowerUnits.ElectricalHorsepower: return super.internalDivide(this.value, 746);
                case PowerUnits.BoilerHorsepower: return super.internalDivide(this.value, 9812.5);
                case PowerUnits.HydraulicHorsepower: return super.internalDivide(this.value, 745.69988145);
                case PowerUnits.BritishThermalUnitsPerHour: return super.internalDivide(this.value, 0.29307107017);
                case PowerUnits.JoulesPerHour: return super.internalMultiply(this.value, 3600);
                case PowerUnits.TonsOfRefrigeration: return super.internalDivide(this.value, 3516.853);
                case PowerUnits.Femtowatts: return super.internalDivide(this.value, 1e-15);
                case PowerUnits.Picowatts: return super.internalDivide(this.value, 1e-12);
                case PowerUnits.Nanowatts: return super.internalDivide(this.value, 1e-9);
                case PowerUnits.Microwatts: return super.internalDivide(this.value, 0.000001);
                case PowerUnits.Milliwatts: return super.internalDivide(this.value, 0.001);
                case PowerUnits.Deciwatts: return super.internalDivide(this.value, 0.1);
                case PowerUnits.Decawatts: return super.internalDivide(this.value, 10);
                case PowerUnits.Kilowatts: return super.internalDivide(this.value, 1000);
                case PowerUnits.Megawatts: return super.internalDivide(this.value, 1000000);
                case PowerUnits.Gigawatts: return super.internalDivide(this.value, 1000000000);
                case PowerUnits.Terawatts: return super.internalDivide(this.value, 1000000000000);
                case PowerUnits.Petawatts: return super.internalDivide(this.value, 1000000000000000);
                case PowerUnits.KilobritishThermalUnitsPerHour: {
                    const v3 = super.internalDivide(this.value, 0.29307107017);
                    return super.internalDivide(v3, 1000);
                }
                case PowerUnits.MegabritishThermalUnitsPerHour: {
                    const v3 = super.internalDivide(this.value, 0.29307107017);
                    return super.internalDivide(v3, 1000000);
                }
                case PowerUnits.MillijoulesPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 0.001);
                }
                case PowerUnits.KilojoulesPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 1000);
                }
                case PowerUnits.MegajoulesPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 1000000);
                }
                case PowerUnits.GigajoulesPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 1000000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case PowerUnits.Watts: return this.value;
            case PowerUnits.MechanicalHorsepower: return this.value / 745.69;
            case PowerUnits.MetricHorsepower: return this.value / 735.49875;
            case PowerUnits.ElectricalHorsepower: return this.value / 746;
            case PowerUnits.BoilerHorsepower: return this.value / 9812.5;
            case PowerUnits.HydraulicHorsepower: return this.value / 745.69988145;
            case PowerUnits.BritishThermalUnitsPerHour: return this.value / 0.29307107017;
            case PowerUnits.JoulesPerHour: return this.value * 3600;
            case PowerUnits.TonsOfRefrigeration: return this.value / 3516.853;
            case PowerUnits.Femtowatts: return (this.value) / 1e-15;
            case PowerUnits.Picowatts: return (this.value) / 1e-12;
            case PowerUnits.Nanowatts: return (this.value) / 1e-9;
            case PowerUnits.Microwatts: return (this.value) / 0.000001;
            case PowerUnits.Milliwatts: return (this.value) / 0.001;
            case PowerUnits.Deciwatts: return (this.value) / 0.1;
            case PowerUnits.Decawatts: return (this.value) / 10;
            case PowerUnits.Kilowatts: return (this.value) / 1000;
            case PowerUnits.Megawatts: return (this.value) / 1000000;
            case PowerUnits.Gigawatts: return (this.value) / 1000000000;
            case PowerUnits.Terawatts: return (this.value) / 1000000000000;
            case PowerUnits.Petawatts: return (this.value) / 1000000000000000;
            case PowerUnits.KilobritishThermalUnitsPerHour: return (this.value / 0.29307107017) / 1000;
            case PowerUnits.MegabritishThermalUnitsPerHour: return (this.value / 0.29307107017) / 1000000;
            case PowerUnits.MillijoulesPerHour: return (this.value * 3600) / 0.001;
            case PowerUnits.KilojoulesPerHour: return (this.value * 3600) / 1000;
            case PowerUnits.MegajoulesPerHour: return (this.value * 3600) / 1000000;
            case PowerUnits.GigajoulesPerHour: return (this.value * 3600) / 1000000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: PowerUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case PowerUnits.Watts: return value;
                case PowerUnits.MechanicalHorsepower: return super.internalMultiply(value, 745.69);
                case PowerUnits.MetricHorsepower: return super.internalMultiply(value, 735.49875);
                case PowerUnits.ElectricalHorsepower: return super.internalMultiply(value, 746);
                case PowerUnits.BoilerHorsepower: return super.internalMultiply(value, 9812.5);
                case PowerUnits.HydraulicHorsepower: return super.internalMultiply(value, 745.69988145);
                case PowerUnits.BritishThermalUnitsPerHour: return super.internalMultiply(value, 0.29307107017);
                case PowerUnits.JoulesPerHour: return super.internalDivide(value, 3600);
                case PowerUnits.TonsOfRefrigeration: return super.internalMultiply(value, 3516.853);
                case PowerUnits.Femtowatts: return super.internalMultiply(value, 1e-15);
                case PowerUnits.Picowatts: return super.internalMultiply(value, 1e-12);
                case PowerUnits.Nanowatts: return super.internalMultiply(value, 1e-9);
                case PowerUnits.Microwatts: return super.internalMultiply(value, 0.000001);
                case PowerUnits.Milliwatts: return super.internalMultiply(value, 0.001);
                case PowerUnits.Deciwatts: return super.internalMultiply(value, 0.1);
                case PowerUnits.Decawatts: return super.internalMultiply(value, 10);
                case PowerUnits.Kilowatts: return super.internalMultiply(value, 1000);
                case PowerUnits.Megawatts: return super.internalMultiply(value, 1000000);
                case PowerUnits.Gigawatts: return super.internalMultiply(value, 1000000000);
                case PowerUnits.Terawatts: return super.internalMultiply(value, 1000000000000);
                case PowerUnits.Petawatts: return super.internalMultiply(value, 1000000000000000);
                case PowerUnits.KilobritishThermalUnitsPerHour: {
                    const v3 = super.internalMultiply(value, 0.29307107017);
                    return super.internalMultiply(v3, 1000);
                }
                case PowerUnits.MegabritishThermalUnitsPerHour: {
                    const v3 = super.internalMultiply(value, 0.29307107017);
                    return super.internalMultiply(v3, 1000000);
                }
                case PowerUnits.MillijoulesPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 0.001);
                }
                case PowerUnits.KilojoulesPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 1000);
                }
                case PowerUnits.MegajoulesPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 1000000);
                }
                case PowerUnits.GigajoulesPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 1000000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case PowerUnits.Watts: return value;
            case PowerUnits.MechanicalHorsepower: return value * 745.69;
            case PowerUnits.MetricHorsepower: return value * 735.49875;
            case PowerUnits.ElectricalHorsepower: return value * 746;
            case PowerUnits.BoilerHorsepower: return value * 9812.5;
            case PowerUnits.HydraulicHorsepower: return value * 745.69988145;
            case PowerUnits.BritishThermalUnitsPerHour: return value * 0.29307107017;
            case PowerUnits.JoulesPerHour: return value / 3600;
            case PowerUnits.TonsOfRefrigeration: return value * 3516.853;
            case PowerUnits.Femtowatts: return (value) * 1e-15;
            case PowerUnits.Picowatts: return (value) * 1e-12;
            case PowerUnits.Nanowatts: return (value) * 1e-9;
            case PowerUnits.Microwatts: return (value) * 0.000001;
            case PowerUnits.Milliwatts: return (value) * 0.001;
            case PowerUnits.Deciwatts: return (value) * 0.1;
            case PowerUnits.Decawatts: return (value) * 10;
            case PowerUnits.Kilowatts: return (value) * 1000;
            case PowerUnits.Megawatts: return (value) * 1000000;
            case PowerUnits.Gigawatts: return (value) * 1000000000;
            case PowerUnits.Terawatts: return (value) * 1000000000000;
            case PowerUnits.Petawatts: return (value) * 1000000000000000;
            case PowerUnits.KilobritishThermalUnitsPerHour: return (value * 0.29307107017) * 1000;
            case PowerUnits.MegabritishThermalUnitsPerHour: return (value * 0.29307107017) * 1000000;
            case PowerUnits.MillijoulesPerHour: return (value / 3600) * 0.001;
            case PowerUnits.KilojoulesPerHour: return (value / 3600) * 1000;
            case PowerUnits.MegajoulesPerHour: return (value / 3600) * 1000000;
            case PowerUnits.GigajoulesPerHour: return (value / 3600) * 1000000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Power to string.
     * Note! the default format for Power is Watts.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Power.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the Power.
     */
    public toString(unit: PowerUnits = PowerUnits.Watts, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case PowerUnits.Watts:
                return super.truncateFractionDigits(this.Watts, options as ToStringOptions) + ` W`;
            case PowerUnits.MechanicalHorsepower:
                return super.truncateFractionDigits(this.MechanicalHorsepower, options as ToStringOptions) + ` hp(I)`;
            case PowerUnits.MetricHorsepower:
                return super.truncateFractionDigits(this.MetricHorsepower, options as ToStringOptions) + ` hp(M)`;
            case PowerUnits.ElectricalHorsepower:
                return super.truncateFractionDigits(this.ElectricalHorsepower, options as ToStringOptions) + ` hp(E)`;
            case PowerUnits.BoilerHorsepower:
                return super.truncateFractionDigits(this.BoilerHorsepower, options as ToStringOptions) + ` hp(S)`;
            case PowerUnits.HydraulicHorsepower:
                return super.truncateFractionDigits(this.HydraulicHorsepower, options as ToStringOptions) + ` hp(H)`;
            case PowerUnits.BritishThermalUnitsPerHour:
                return super.truncateFractionDigits(this.BritishThermalUnitsPerHour, options as ToStringOptions) + ` Btu/h`;
            case PowerUnits.JoulesPerHour:
                return super.truncateFractionDigits(this.JoulesPerHour, options as ToStringOptions) + ` J/h`;
            case PowerUnits.TonsOfRefrigeration:
                return super.truncateFractionDigits(this.TonsOfRefrigeration, options as ToStringOptions) + ` TR`;
            case PowerUnits.Femtowatts:
                return super.truncateFractionDigits(this.Femtowatts, options as ToStringOptions) + ` fW`;
            case PowerUnits.Picowatts:
                return super.truncateFractionDigits(this.Picowatts, options as ToStringOptions) + ` pW`;
            case PowerUnits.Nanowatts:
                return super.truncateFractionDigits(this.Nanowatts, options as ToStringOptions) + ` nW`;
            case PowerUnits.Microwatts:
                return super.truncateFractionDigits(this.Microwatts, options as ToStringOptions) + ` μW`;
            case PowerUnits.Milliwatts:
                return super.truncateFractionDigits(this.Milliwatts, options as ToStringOptions) + ` mW`;
            case PowerUnits.Deciwatts:
                return super.truncateFractionDigits(this.Deciwatts, options as ToStringOptions) + ` dW`;
            case PowerUnits.Decawatts:
                return super.truncateFractionDigits(this.Decawatts, options as ToStringOptions) + ` daW`;
            case PowerUnits.Kilowatts:
                return super.truncateFractionDigits(this.Kilowatts, options as ToStringOptions) + ` kW`;
            case PowerUnits.Megawatts:
                return super.truncateFractionDigits(this.Megawatts, options as ToStringOptions) + ` MW`;
            case PowerUnits.Gigawatts:
                return super.truncateFractionDigits(this.Gigawatts, options as ToStringOptions) + ` GW`;
            case PowerUnits.Terawatts:
                return super.truncateFractionDigits(this.Terawatts, options as ToStringOptions) + ` TW`;
            case PowerUnits.Petawatts:
                return super.truncateFractionDigits(this.Petawatts, options as ToStringOptions) + ` PW`;
            case PowerUnits.KilobritishThermalUnitsPerHour:
                return super.truncateFractionDigits(this.KilobritishThermalUnitsPerHour, options as ToStringOptions) + ` kBtu/h`;
            case PowerUnits.MegabritishThermalUnitsPerHour:
                return super.truncateFractionDigits(this.MegabritishThermalUnitsPerHour, options as ToStringOptions) + ` MBtu/h`;
            case PowerUnits.MillijoulesPerHour:
                return super.truncateFractionDigits(this.MillijoulesPerHour, options as ToStringOptions) + ` mJ/h`;
            case PowerUnits.KilojoulesPerHour:
                return super.truncateFractionDigits(this.KilojoulesPerHour, options as ToStringOptions) + ` kJ/h`;
            case PowerUnits.MegajoulesPerHour:
                return super.truncateFractionDigits(this.MegajoulesPerHour, options as ToStringOptions) + ` MJ/h`;
            case PowerUnits.GigajoulesPerHour:
                return super.truncateFractionDigits(this.GigajoulesPerHour, options as ToStringOptions) + ` GJ/h`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Power unit abbreviation.
     * Note! the default abbreviation for Power is Watts.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Power.
     * @returns The abbreviation string of Power.
     */
    public getUnitAbbreviation(unitAbbreviation: PowerUnits = PowerUnits.Watts): string {

        switch (unitAbbreviation) {
            
            case PowerUnits.Watts:
                return `W`;
            case PowerUnits.MechanicalHorsepower:
                return `hp(I)`;
            case PowerUnits.MetricHorsepower:
                return `hp(M)`;
            case PowerUnits.ElectricalHorsepower:
                return `hp(E)`;
            case PowerUnits.BoilerHorsepower:
                return `hp(S)`;
            case PowerUnits.HydraulicHorsepower:
                return `hp(H)`;
            case PowerUnits.BritishThermalUnitsPerHour:
                return `Btu/h`;
            case PowerUnits.JoulesPerHour:
                return `J/h`;
            case PowerUnits.TonsOfRefrigeration:
                return `TR`;
            case PowerUnits.Femtowatts:
                return `fW`;
            case PowerUnits.Picowatts:
                return `pW`;
            case PowerUnits.Nanowatts:
                return `nW`;
            case PowerUnits.Microwatts:
                return `μW`;
            case PowerUnits.Milliwatts:
                return `mW`;
            case PowerUnits.Deciwatts:
                return `dW`;
            case PowerUnits.Decawatts:
                return `daW`;
            case PowerUnits.Kilowatts:
                return `kW`;
            case PowerUnits.Megawatts:
                return `MW`;
            case PowerUnits.Gigawatts:
                return `GW`;
            case PowerUnits.Terawatts:
                return `TW`;
            case PowerUnits.Petawatts:
                return `PW`;
            case PowerUnits.KilobritishThermalUnitsPerHour:
                return `kBtu/h`;
            case PowerUnits.MegabritishThermalUnitsPerHour:
                return `MBtu/h`;
            case PowerUnits.MillijoulesPerHour:
                return `mJ/h`;
            case PowerUnits.KilojoulesPerHour:
                return `kJ/h`;
            case PowerUnits.MegajoulesPerHour:
                return `MJ/h`;
            case PowerUnits.GigajoulesPerHour:
                return `GJ/h`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Power are equals to the current Power.
     * @param power The other Power.
     * @returns True if the given Power are equal to the current Power.
     */
    public equals(power: Power): boolean {
        return super.internalEquals(this.value, power.BaseValue);
    }

    /**
     * Compare the given Power against the current Power.
     * @param power The other Power.
     * @returns 0 if they are equal, -1 if the current Power is less then other, 1 if the current Power is greater then other.
     */
    public compareTo(power: Power): number {
        return super.internalCompareTo(this.value, power.BaseValue);
    }

    /**
     * Add the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    public add(power: Power): Power {
        return new Power(super.internalAdd(this.value, power.BaseValue))
    }

    /**
     * Subtract the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    public subtract(power: Power): Power {
        return new Power(super.internalSubtract(this.value, power.BaseValue))
    }

    /**
     * Multiply the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    public multiply(power: Power): Power {
        return new Power(super.internalMultiply(this.value, power.BaseValue))
    }

    /**
     * Divide the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    public divide(power: Power): Power {
        return new Power(super.internalDivide(this.value, power.BaseValue))
    }

    /**
     * Modulo the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    public modulo(power: Power): Power {
        return new Power(super.internalModulo(this.value, power.BaseValue))
    }

    /**
     * Pow the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    public pow(power: Power): Power {
        return new Power(super.internalPow(this.value, power.BaseValue))
    }
}
