/** PowerUnits enumeration */
export enum PowerUnits {
    /** */
    Watts,
    /** */
    MechanicalHorsepower,
    /** */
    MetricHorsepower,
    /** */
    ElectricalHorsepower,
    /** */
    BoilerHorsepower,
    /** */
    HydraulicHorsepower,
    /** */
    BritishThermalUnitsPerHour,
    /** */
    JoulesPerHour,
    /** */
    Femtowatts,
    /** */
    Picowatts,
    /** */
    Nanowatts,
    /** */
    Microwatts,
    /** */
    Deciwatts,
    /** */
    Decawatts,
    /** */
    Kilowatts,
    /** */
    Megawatts,
    /** */
    Gigawatts,
    /** */
    Terawatts,
    /** */
    Petawatts,
    /** */
    KilobritishThermalUnitsPerHour,
    /** */
    KilojoulesPerHour,
    /** */
    MegajoulesPerHour,
    /** */
    GigajoulesPerHour
}

/** In physics, power is the rate of doing work. It is equivalent to an amount of energy consumed per unit time. */
export class Power {
    private value: number;
    private wattsLazy: number | null = null;
    private mechanicalhorsepowerLazy: number | null = null;
    private metrichorsepowerLazy: number | null = null;
    private electricalhorsepowerLazy: number | null = null;
    private boilerhorsepowerLazy: number | null = null;
    private hydraulichorsepowerLazy: number | null = null;
    private britishthermalunitsperhourLazy: number | null = null;
    private joulesperhourLazy: number | null = null;
    private femtowattsLazy: number | null = null;
    private picowattsLazy: number | null = null;
    private nanowattsLazy: number | null = null;
    private microwattsLazy: number | null = null;
    private deciwattsLazy: number | null = null;
    private decawattsLazy: number | null = null;
    private kilowattsLazy: number | null = null;
    private megawattsLazy: number | null = null;
    private gigawattsLazy: number | null = null;
    private terawattsLazy: number | null = null;
    private petawattsLazy: number | null = null;
    private kilobritishthermalunitsperhourLazy: number | null = null;
    private kilojoulesperhourLazy: number | null = null;
    private megajoulesperhourLazy: number | null = null;
    private gigajoulesperhourLazy: number | null = null;

    /**
     * Create a new Power.
     * @param value The value.
     * @param fromUnit The ‘Power’ unit to create from.
     */
    public constructor(value: number, fromUnit: PowerUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Power is Watt.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
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

    private convertFromBase(toUnit: PowerUnits): number {
        switch (toUnit) {
                
            case PowerUnits.Watts:
                return this.value;
            case PowerUnits.MechanicalHorsepower:
                return this.value/745.69;
            case PowerUnits.MetricHorsepower:
                return this.value/735.49875;
            case PowerUnits.ElectricalHorsepower:
                return this.value/746;
            case PowerUnits.BoilerHorsepower:
                return this.value/9812.5;
            case PowerUnits.HydraulicHorsepower:
                return this.value/745.69988145;
            case PowerUnits.BritishThermalUnitsPerHour:
                return this.value/0.293071;
            case PowerUnits.JoulesPerHour:
                return this.value*3600;
            case PowerUnits.Femtowatts:
                return (this.value) / 1e-15;
            case PowerUnits.Picowatts:
                return (this.value) / 1e-12;
            case PowerUnits.Nanowatts:
                return (this.value) / 1e-9;
            case PowerUnits.Microwatts:
                return (this.value) / 0.000001;
            case PowerUnits.Deciwatts:
                return (this.value) / 0.1;
            case PowerUnits.Decawatts:
                return (this.value) / 10;
            case PowerUnits.Kilowatts:
                return (this.value) / 1000;
            case PowerUnits.Megawatts:
                return (this.value) / 1000000;
            case PowerUnits.Gigawatts:
                return (this.value) / 1000000000;
            case PowerUnits.Terawatts:
                return (this.value) / 1000000000000;
            case PowerUnits.Petawatts:
                return (this.value) / 1000000000000000;
            case PowerUnits.KilobritishThermalUnitsPerHour:
                return (this.value/0.293071) / 1000;
            case PowerUnits.KilojoulesPerHour:
                return (this.value*3600) / 1000;
            case PowerUnits.MegajoulesPerHour:
                return (this.value*3600) / 1000000;
            case PowerUnits.GigajoulesPerHour:
                return (this.value*3600) / 1000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PowerUnits): number {
        switch (fromUnit) {
                
            case PowerUnits.Watts:
                return value;
            case PowerUnits.MechanicalHorsepower:
                return value*745.69;
            case PowerUnits.MetricHorsepower:
                return value*735.49875;
            case PowerUnits.ElectricalHorsepower:
                return value*746;
            case PowerUnits.BoilerHorsepower:
                return value*9812.5;
            case PowerUnits.HydraulicHorsepower:
                return value*745.69988145;
            case PowerUnits.BritishThermalUnitsPerHour:
                return value*0.293071;
            case PowerUnits.JoulesPerHour:
                return value/3600;
            case PowerUnits.Femtowatts:
                return (value) * 1e-15;
            case PowerUnits.Picowatts:
                return (value) * 1e-12;
            case PowerUnits.Nanowatts:
                return (value) * 1e-9;
            case PowerUnits.Microwatts:
                return (value) * 0.000001;
            case PowerUnits.Deciwatts:
                return (value) * 0.1;
            case PowerUnits.Decawatts:
                return (value) * 10;
            case PowerUnits.Kilowatts:
                return (value) * 1000;
            case PowerUnits.Megawatts:
                return (value) * 1000000;
            case PowerUnits.Gigawatts:
                return (value) * 1000000000;
            case PowerUnits.Terawatts:
                return (value) * 1000000000000;
            case PowerUnits.Petawatts:
                return (value) * 1000000000000000;
            case PowerUnits.KilobritishThermalUnitsPerHour:
                return (value*0.293071) * 1000;
            case PowerUnits.KilojoulesPerHour:
                return (value/3600) * 1000;
            case PowerUnits.MegajoulesPerHour:
                return (value/3600) * 1000000;
            case PowerUnits.GigajoulesPerHour:
                return (value/3600) * 1000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Power to string.
     * Note! the default format for Power is Watts.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Power.
     * @returns The string format of the Power.
     */
    public toString(toUnit: PowerUnits = PowerUnits.Watts): string {

        switch (toUnit) {
            
            case PowerUnits.Watts:
                return this.Watts + ` W`;
            case PowerUnits.MechanicalHorsepower:
                return this.MechanicalHorsepower + ` hp(I)`;
            case PowerUnits.MetricHorsepower:
                return this.MetricHorsepower + ` hp(M)`;
            case PowerUnits.ElectricalHorsepower:
                return this.ElectricalHorsepower + ` hp(E)`;
            case PowerUnits.BoilerHorsepower:
                return this.BoilerHorsepower + ` hp(S)`;
            case PowerUnits.HydraulicHorsepower:
                return this.HydraulicHorsepower + ` hp(H)`;
            case PowerUnits.BritishThermalUnitsPerHour:
                return this.BritishThermalUnitsPerHour + ` Btu/h`;
            case PowerUnits.JoulesPerHour:
                return this.JoulesPerHour + ` J/h`;
            case PowerUnits.Femtowatts:
                return this.Femtowatts + ` W`;
            case PowerUnits.Picowatts:
                return this.Picowatts + ` W`;
            case PowerUnits.Nanowatts:
                return this.Nanowatts + ` W`;
            case PowerUnits.Microwatts:
                return this.Microwatts + ` W`;
            case PowerUnits.Deciwatts:
                return this.Deciwatts + ` W`;
            case PowerUnits.Decawatts:
                return this.Decawatts + ` W`;
            case PowerUnits.Kilowatts:
                return this.Kilowatts + ` W`;
            case PowerUnits.Megawatts:
                return this.Megawatts + ` W`;
            case PowerUnits.Gigawatts:
                return this.Gigawatts + ` W`;
            case PowerUnits.Terawatts:
                return this.Terawatts + ` W`;
            case PowerUnits.Petawatts:
                return this.Petawatts + ` W`;
            case PowerUnits.KilobritishThermalUnitsPerHour:
                return this.KilobritishThermalUnitsPerHour + ` Btu/h`;
            case PowerUnits.KilojoulesPerHour:
                return this.KilojoulesPerHour + ` J/h`;
            case PowerUnits.MegajoulesPerHour:
                return this.MegajoulesPerHour + ` J/h`;
            case PowerUnits.GigajoulesPerHour:
                return this.GigajoulesPerHour + ` J/h`;
        default:
            break;
        }
        return this.value.toString();
    }
}
