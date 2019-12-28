"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** PowerUnits enumeration */
var PowerUnits;
(function (PowerUnits) {
    /** */
    PowerUnits[PowerUnits["Watts"] = 0] = "Watts";
    /** */
    PowerUnits[PowerUnits["MechanicalHorsepower"] = 1] = "MechanicalHorsepower";
    /** */
    PowerUnits[PowerUnits["MetricHorsepower"] = 2] = "MetricHorsepower";
    /** */
    PowerUnits[PowerUnits["ElectricalHorsepower"] = 3] = "ElectricalHorsepower";
    /** */
    PowerUnits[PowerUnits["BoilerHorsepower"] = 4] = "BoilerHorsepower";
    /** */
    PowerUnits[PowerUnits["HydraulicHorsepower"] = 5] = "HydraulicHorsepower";
    /** */
    PowerUnits[PowerUnits["BritishThermalUnitsPerHour"] = 6] = "BritishThermalUnitsPerHour";
    /** */
    PowerUnits[PowerUnits["JoulesPerHour"] = 7] = "JoulesPerHour";
    /** */
    PowerUnits[PowerUnits["Femtowatts"] = 8] = "Femtowatts";
    /** */
    PowerUnits[PowerUnits["Picowatts"] = 9] = "Picowatts";
    /** */
    PowerUnits[PowerUnits["Nanowatts"] = 10] = "Nanowatts";
    /** */
    PowerUnits[PowerUnits["Microwatts"] = 11] = "Microwatts";
    /** */
    PowerUnits[PowerUnits["Deciwatts"] = 12] = "Deciwatts";
    /** */
    PowerUnits[PowerUnits["Decawatts"] = 13] = "Decawatts";
    /** */
    PowerUnits[PowerUnits["Kilowatts"] = 14] = "Kilowatts";
    /** */
    PowerUnits[PowerUnits["Megawatts"] = 15] = "Megawatts";
    /** */
    PowerUnits[PowerUnits["Gigawatts"] = 16] = "Gigawatts";
    /** */
    PowerUnits[PowerUnits["Terawatts"] = 17] = "Terawatts";
    /** */
    PowerUnits[PowerUnits["Petawatts"] = 18] = "Petawatts";
    /** */
    PowerUnits[PowerUnits["KilobritishThermalUnitsPerHour"] = 19] = "KilobritishThermalUnitsPerHour";
    /** */
    PowerUnits[PowerUnits["KilojoulesPerHour"] = 20] = "KilojoulesPerHour";
    /** */
    PowerUnits[PowerUnits["MegajoulesPerHour"] = 21] = "MegajoulesPerHour";
    /** */
    PowerUnits[PowerUnits["GigajoulesPerHour"] = 22] = "GigajoulesPerHour";
})(PowerUnits = exports.PowerUnits || (exports.PowerUnits = {}));
/** In physics, power is the rate of doing work. It is equivalent to an amount of energy consumed per unit time. */
class Power {
    /**
     * Create a new Power.
     * @param value The value.
     * @param fromUnit The ‘Power’ unit to create from.
     * The default unit is Watts
     */
    constructor(value, fromUnit = PowerUnits.Watts) {
        this.wattsLazy = null;
        this.mechanicalhorsepowerLazy = null;
        this.metrichorsepowerLazy = null;
        this.electricalhorsepowerLazy = null;
        this.boilerhorsepowerLazy = null;
        this.hydraulichorsepowerLazy = null;
        this.britishthermalunitsperhourLazy = null;
        this.joulesperhourLazy = null;
        this.femtowattsLazy = null;
        this.picowattsLazy = null;
        this.nanowattsLazy = null;
        this.microwattsLazy = null;
        this.deciwattsLazy = null;
        this.decawattsLazy = null;
        this.kilowattsLazy = null;
        this.megawattsLazy = null;
        this.gigawattsLazy = null;
        this.terawattsLazy = null;
        this.petawattsLazy = null;
        this.kilobritishthermalunitsperhourLazy = null;
        this.kilojoulesperhourLazy = null;
        this.megajoulesperhourLazy = null;
        this.gigajoulesperhourLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Power is Watts.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Watts() {
        if (this.wattsLazy !== null) {
            return this.wattsLazy;
        }
        return this.wattsLazy = this.convertFromBase(PowerUnits.Watts);
    }
    /** */
    get MechanicalHorsepower() {
        if (this.mechanicalhorsepowerLazy !== null) {
            return this.mechanicalhorsepowerLazy;
        }
        return this.mechanicalhorsepowerLazy = this.convertFromBase(PowerUnits.MechanicalHorsepower);
    }
    /** */
    get MetricHorsepower() {
        if (this.metrichorsepowerLazy !== null) {
            return this.metrichorsepowerLazy;
        }
        return this.metrichorsepowerLazy = this.convertFromBase(PowerUnits.MetricHorsepower);
    }
    /** */
    get ElectricalHorsepower() {
        if (this.electricalhorsepowerLazy !== null) {
            return this.electricalhorsepowerLazy;
        }
        return this.electricalhorsepowerLazy = this.convertFromBase(PowerUnits.ElectricalHorsepower);
    }
    /** */
    get BoilerHorsepower() {
        if (this.boilerhorsepowerLazy !== null) {
            return this.boilerhorsepowerLazy;
        }
        return this.boilerhorsepowerLazy = this.convertFromBase(PowerUnits.BoilerHorsepower);
    }
    /** */
    get HydraulicHorsepower() {
        if (this.hydraulichorsepowerLazy !== null) {
            return this.hydraulichorsepowerLazy;
        }
        return this.hydraulichorsepowerLazy = this.convertFromBase(PowerUnits.HydraulicHorsepower);
    }
    /** */
    get BritishThermalUnitsPerHour() {
        if (this.britishthermalunitsperhourLazy !== null) {
            return this.britishthermalunitsperhourLazy;
        }
        return this.britishthermalunitsperhourLazy = this.convertFromBase(PowerUnits.BritishThermalUnitsPerHour);
    }
    /** */
    get JoulesPerHour() {
        if (this.joulesperhourLazy !== null) {
            return this.joulesperhourLazy;
        }
        return this.joulesperhourLazy = this.convertFromBase(PowerUnits.JoulesPerHour);
    }
    /** */
    get Femtowatts() {
        if (this.femtowattsLazy !== null) {
            return this.femtowattsLazy;
        }
        return this.femtowattsLazy = this.convertFromBase(PowerUnits.Femtowatts);
    }
    /** */
    get Picowatts() {
        if (this.picowattsLazy !== null) {
            return this.picowattsLazy;
        }
        return this.picowattsLazy = this.convertFromBase(PowerUnits.Picowatts);
    }
    /** */
    get Nanowatts() {
        if (this.nanowattsLazy !== null) {
            return this.nanowattsLazy;
        }
        return this.nanowattsLazy = this.convertFromBase(PowerUnits.Nanowatts);
    }
    /** */
    get Microwatts() {
        if (this.microwattsLazy !== null) {
            return this.microwattsLazy;
        }
        return this.microwattsLazy = this.convertFromBase(PowerUnits.Microwatts);
    }
    /** */
    get Deciwatts() {
        if (this.deciwattsLazy !== null) {
            return this.deciwattsLazy;
        }
        return this.deciwattsLazy = this.convertFromBase(PowerUnits.Deciwatts);
    }
    /** */
    get Decawatts() {
        if (this.decawattsLazy !== null) {
            return this.decawattsLazy;
        }
        return this.decawattsLazy = this.convertFromBase(PowerUnits.Decawatts);
    }
    /** */
    get Kilowatts() {
        if (this.kilowattsLazy !== null) {
            return this.kilowattsLazy;
        }
        return this.kilowattsLazy = this.convertFromBase(PowerUnits.Kilowatts);
    }
    /** */
    get Megawatts() {
        if (this.megawattsLazy !== null) {
            return this.megawattsLazy;
        }
        return this.megawattsLazy = this.convertFromBase(PowerUnits.Megawatts);
    }
    /** */
    get Gigawatts() {
        if (this.gigawattsLazy !== null) {
            return this.gigawattsLazy;
        }
        return this.gigawattsLazy = this.convertFromBase(PowerUnits.Gigawatts);
    }
    /** */
    get Terawatts() {
        if (this.terawattsLazy !== null) {
            return this.terawattsLazy;
        }
        return this.terawattsLazy = this.convertFromBase(PowerUnits.Terawatts);
    }
    /** */
    get Petawatts() {
        if (this.petawattsLazy !== null) {
            return this.petawattsLazy;
        }
        return this.petawattsLazy = this.convertFromBase(PowerUnits.Petawatts);
    }
    /** */
    get KilobritishThermalUnitsPerHour() {
        if (this.kilobritishthermalunitsperhourLazy !== null) {
            return this.kilobritishthermalunitsperhourLazy;
        }
        return this.kilobritishthermalunitsperhourLazy = this.convertFromBase(PowerUnits.KilobritishThermalUnitsPerHour);
    }
    /** */
    get KilojoulesPerHour() {
        if (this.kilojoulesperhourLazy !== null) {
            return this.kilojoulesperhourLazy;
        }
        return this.kilojoulesperhourLazy = this.convertFromBase(PowerUnits.KilojoulesPerHour);
    }
    /** */
    get MegajoulesPerHour() {
        if (this.megajoulesperhourLazy !== null) {
            return this.megajoulesperhourLazy;
        }
        return this.megajoulesperhourLazy = this.convertFromBase(PowerUnits.MegajoulesPerHour);
    }
    /** */
    get GigajoulesPerHour() {
        if (this.gigajoulesperhourLazy !== null) {
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
    static FromWatts(value) {
        return new Power(value, PowerUnits.Watts);
    }
    /**
     * Create a new Power instance from a MechanicalHorsepower
     *
     * @param value The unit as MechanicalHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    static FromMechanicalHorsepower(value) {
        return new Power(value, PowerUnits.MechanicalHorsepower);
    }
    /**
     * Create a new Power instance from a MetricHorsepower
     *
     * @param value The unit as MetricHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    static FromMetricHorsepower(value) {
        return new Power(value, PowerUnits.MetricHorsepower);
    }
    /**
     * Create a new Power instance from a ElectricalHorsepower
     *
     * @param value The unit as ElectricalHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    static FromElectricalHorsepower(value) {
        return new Power(value, PowerUnits.ElectricalHorsepower);
    }
    /**
     * Create a new Power instance from a BoilerHorsepower
     *
     * @param value The unit as BoilerHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    static FromBoilerHorsepower(value) {
        return new Power(value, PowerUnits.BoilerHorsepower);
    }
    /**
     * Create a new Power instance from a HydraulicHorsepower
     *
     * @param value The unit as HydraulicHorsepower to create a new Power from.
     * @returns The new Power instance.
     */
    static FromHydraulicHorsepower(value) {
        return new Power(value, PowerUnits.HydraulicHorsepower);
    }
    /**
     * Create a new Power instance from a BritishThermalUnitsPerHour
     *
     * @param value The unit as BritishThermalUnitsPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    static FromBritishThermalUnitsPerHour(value) {
        return new Power(value, PowerUnits.BritishThermalUnitsPerHour);
    }
    /**
     * Create a new Power instance from a JoulesPerHour
     *
     * @param value The unit as JoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    static FromJoulesPerHour(value) {
        return new Power(value, PowerUnits.JoulesPerHour);
    }
    /**
     * Create a new Power instance from a Femtowatts
     *
     * @param value The unit as Femtowatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromFemtowatts(value) {
        return new Power(value, PowerUnits.Femtowatts);
    }
    /**
     * Create a new Power instance from a Picowatts
     *
     * @param value The unit as Picowatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromPicowatts(value) {
        return new Power(value, PowerUnits.Picowatts);
    }
    /**
     * Create a new Power instance from a Nanowatts
     *
     * @param value The unit as Nanowatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromNanowatts(value) {
        return new Power(value, PowerUnits.Nanowatts);
    }
    /**
     * Create a new Power instance from a Microwatts
     *
     * @param value The unit as Microwatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromMicrowatts(value) {
        return new Power(value, PowerUnits.Microwatts);
    }
    /**
     * Create a new Power instance from a Deciwatts
     *
     * @param value The unit as Deciwatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromDeciwatts(value) {
        return new Power(value, PowerUnits.Deciwatts);
    }
    /**
     * Create a new Power instance from a Decawatts
     *
     * @param value The unit as Decawatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromDecawatts(value) {
        return new Power(value, PowerUnits.Decawatts);
    }
    /**
     * Create a new Power instance from a Kilowatts
     *
     * @param value The unit as Kilowatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromKilowatts(value) {
        return new Power(value, PowerUnits.Kilowatts);
    }
    /**
     * Create a new Power instance from a Megawatts
     *
     * @param value The unit as Megawatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromMegawatts(value) {
        return new Power(value, PowerUnits.Megawatts);
    }
    /**
     * Create a new Power instance from a Gigawatts
     *
     * @param value The unit as Gigawatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromGigawatts(value) {
        return new Power(value, PowerUnits.Gigawatts);
    }
    /**
     * Create a new Power instance from a Terawatts
     *
     * @param value The unit as Terawatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromTerawatts(value) {
        return new Power(value, PowerUnits.Terawatts);
    }
    /**
     * Create a new Power instance from a Petawatts
     *
     * @param value The unit as Petawatts to create a new Power from.
     * @returns The new Power instance.
     */
    static FromPetawatts(value) {
        return new Power(value, PowerUnits.Petawatts);
    }
    /**
     * Create a new Power instance from a KilobritishThermalUnitsPerHour
     *
     * @param value The unit as KilobritishThermalUnitsPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    static FromKilobritishThermalUnitsPerHour(value) {
        return new Power(value, PowerUnits.KilobritishThermalUnitsPerHour);
    }
    /**
     * Create a new Power instance from a KilojoulesPerHour
     *
     * @param value The unit as KilojoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    static FromKilojoulesPerHour(value) {
        return new Power(value, PowerUnits.KilojoulesPerHour);
    }
    /**
     * Create a new Power instance from a MegajoulesPerHour
     *
     * @param value The unit as MegajoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    static FromMegajoulesPerHour(value) {
        return new Power(value, PowerUnits.MegajoulesPerHour);
    }
    /**
     * Create a new Power instance from a GigajoulesPerHour
     *
     * @param value The unit as GigajoulesPerHour to create a new Power from.
     * @returns The new Power instance.
     */
    static FromGigajoulesPerHour(value) {
        return new Power(value, PowerUnits.GigajoulesPerHour);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PowerUnits.Watts:
                return this.value;
            case PowerUnits.MechanicalHorsepower:
                return this.value / 745.69;
            case PowerUnits.MetricHorsepower:
                return this.value / 735.49875;
            case PowerUnits.ElectricalHorsepower:
                return this.value / 746;
            case PowerUnits.BoilerHorsepower:
                return this.value / 9812.5;
            case PowerUnits.HydraulicHorsepower:
                return this.value / 745.69988145;
            case PowerUnits.BritishThermalUnitsPerHour:
                return this.value / 0.293071;
            case PowerUnits.JoulesPerHour:
                return this.value * 3600;
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
                return (this.value / 0.293071) / 1000;
            case PowerUnits.KilojoulesPerHour:
                return (this.value * 3600) / 1000;
            case PowerUnits.MegajoulesPerHour:
                return (this.value * 3600) / 1000000;
            case PowerUnits.GigajoulesPerHour:
                return (this.value * 3600) / 1000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case PowerUnits.Watts:
                return value;
            case PowerUnits.MechanicalHorsepower:
                return value * 745.69;
            case PowerUnits.MetricHorsepower:
                return value * 735.49875;
            case PowerUnits.ElectricalHorsepower:
                return value * 746;
            case PowerUnits.BoilerHorsepower:
                return value * 9812.5;
            case PowerUnits.HydraulicHorsepower:
                return value * 745.69988145;
            case PowerUnits.BritishThermalUnitsPerHour:
                return value * 0.293071;
            case PowerUnits.JoulesPerHour:
                return value / 3600;
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
                return (value * 0.293071) * 1000;
            case PowerUnits.KilojoulesPerHour:
                return (value / 3600) * 1000;
            case PowerUnits.MegajoulesPerHour:
                return (value / 3600) * 1000000;
            case PowerUnits.GigajoulesPerHour:
                return (value / 3600) * 1000000000;
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
    toString(toUnit = PowerUnits.Watts) {
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
                return this.Femtowatts + ` `;
            case PowerUnits.Picowatts:
                return this.Picowatts + ` `;
            case PowerUnits.Nanowatts:
                return this.Nanowatts + ` `;
            case PowerUnits.Microwatts:
                return this.Microwatts + ` `;
            case PowerUnits.Deciwatts:
                return this.Deciwatts + ` `;
            case PowerUnits.Decawatts:
                return this.Decawatts + ` `;
            case PowerUnits.Kilowatts:
                return this.Kilowatts + ` `;
            case PowerUnits.Megawatts:
                return this.Megawatts + ` `;
            case PowerUnits.Gigawatts:
                return this.Gigawatts + ` `;
            case PowerUnits.Terawatts:
                return this.Terawatts + ` `;
            case PowerUnits.Petawatts:
                return this.Petawatts + ` `;
            case PowerUnits.KilobritishThermalUnitsPerHour:
                return this.KilobritishThermalUnitsPerHour + ` `;
            case PowerUnits.KilojoulesPerHour:
                return this.KilojoulesPerHour + ` `;
            case PowerUnits.MegajoulesPerHour:
                return this.MegajoulesPerHour + ` `;
            case PowerUnits.GigajoulesPerHour:
                return this.GigajoulesPerHour + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Power are equals to the current Power.
     * @param power The other Power.
     * @returns True if the given Power are equal to the current Power.
     */
    equals(power) {
        return this.value === power.BaseValue;
    }
    /**
     * Compare the given Power against the current Power.
     * @param power The other Power.
     * @returns 0 if they are equal, -1 if the current Power is less then other, 1 if the current Power is greater then other.
     */
    compareTo(power) {
        if (this.value > power.BaseValue)
            return 1;
        if (this.value < power.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    add(power) {
        return new Power(this.value + power.BaseValue);
    }
    /**
     * Subtract the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    subtract(power) {
        return new Power(this.value - power.BaseValue);
    }
    /**
     * Multiply the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    multiply(power) {
        return new Power(this.value * power.BaseValue);
    }
    /**
     * Divide the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    divide(power) {
        return new Power(this.value / power.BaseValue);
    }
    /**
     * Modulo the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    modulo(power) {
        return new Power(this.value % power.BaseValue);
    }
    /**
     * Pow the given Power with the current Power.
     * @param power The other Power.
     * @returns A new Power instance with the results.
     */
    pow(power) {
        return new Power(this.value ** power.BaseValue);
    }
}
exports.Power = Power;
//# sourceMappingURL=power.g.js.map