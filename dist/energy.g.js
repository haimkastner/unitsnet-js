"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** EnergyUnits enumeration */
var EnergyUnits;
(function (EnergyUnits) {
    /** */
    EnergyUnits[EnergyUnits["Joules"] = 0] = "Joules";
    /** */
    EnergyUnits[EnergyUnits["Calories"] = 1] = "Calories";
    /** */
    EnergyUnits[EnergyUnits["BritishThermalUnits"] = 2] = "BritishThermalUnits";
    /** */
    EnergyUnits[EnergyUnits["ElectronVolts"] = 3] = "ElectronVolts";
    /** */
    EnergyUnits[EnergyUnits["FootPounds"] = 4] = "FootPounds";
    /** */
    EnergyUnits[EnergyUnits["Ergs"] = 5] = "Ergs";
    /** */
    EnergyUnits[EnergyUnits["WattHours"] = 6] = "WattHours";
    /** */
    EnergyUnits[EnergyUnits["ThermsEc"] = 7] = "ThermsEc";
    /** */
    EnergyUnits[EnergyUnits["ThermsUs"] = 8] = "ThermsUs";
    /** */
    EnergyUnits[EnergyUnits["ThermsImperial"] = 9] = "ThermsImperial";
    /** */
    EnergyUnits[EnergyUnits["Kilojoules"] = 10] = "Kilojoules";
    /** */
    EnergyUnits[EnergyUnits["Megajoules"] = 11] = "Megajoules";
    /** */
    EnergyUnits[EnergyUnits["Gigajoules"] = 12] = "Gigajoules";
    /** */
    EnergyUnits[EnergyUnits["Kilocalories"] = 13] = "Kilocalories";
    /** */
    EnergyUnits[EnergyUnits["Megacalories"] = 14] = "Megacalories";
    /** */
    EnergyUnits[EnergyUnits["KilobritishThermalUnits"] = 15] = "KilobritishThermalUnits";
    /** */
    EnergyUnits[EnergyUnits["MegabritishThermalUnits"] = 16] = "MegabritishThermalUnits";
    /** */
    EnergyUnits[EnergyUnits["GigabritishThermalUnits"] = 17] = "GigabritishThermalUnits";
    /** */
    EnergyUnits[EnergyUnits["KilowattHours"] = 18] = "KilowattHours";
    /** */
    EnergyUnits[EnergyUnits["MegawattHours"] = 19] = "MegawattHours";
    /** */
    EnergyUnits[EnergyUnits["GigawattHours"] = 20] = "GigawattHours";
    /** */
    EnergyUnits[EnergyUnits["TerawattHours"] = 21] = "TerawattHours";
    /** */
    EnergyUnits[EnergyUnits["DecathermsEc"] = 22] = "DecathermsEc";
    /** */
    EnergyUnits[EnergyUnits["DecathermsUs"] = 23] = "DecathermsUs";
    /** */
    EnergyUnits[EnergyUnits["DecathermsImperial"] = 24] = "DecathermsImperial";
})(EnergyUnits = exports.EnergyUnits || (exports.EnergyUnits = {}));
/** The joule, symbol J, is a derived unit of energy, work, or amount of heat in the International System of Units. It is equal to the energy transferred (or work done) when applying a force of one newton through a distance of one metre (1 newton metre or N·m), or in passing an electric current of one ampere through a resistance of one ohm for one second. Many other units of energy are included. Please do not confuse this definition of the calorie with the one colloquially used by the food industry, the large calorie, which is equivalent to 1 kcal. Thermochemical definition of the calorie is used. For BTU, the IT definition is used. */
class Energy {
    /**
     * Create a new Energy.
     * @param value The value.
     * @param fromUnit The ‘Energy’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.joulesLazy = null;
        this.caloriesLazy = null;
        this.britishthermalunitsLazy = null;
        this.electronvoltsLazy = null;
        this.footpoundsLazy = null;
        this.ergsLazy = null;
        this.watthoursLazy = null;
        this.thermsecLazy = null;
        this.thermsusLazy = null;
        this.thermsimperialLazy = null;
        this.kilojoulesLazy = null;
        this.megajoulesLazy = null;
        this.gigajoulesLazy = null;
        this.kilocaloriesLazy = null;
        this.megacaloriesLazy = null;
        this.kilobritishthermalunitsLazy = null;
        this.megabritishthermalunitsLazy = null;
        this.gigabritishthermalunitsLazy = null;
        this.kilowatthoursLazy = null;
        this.megawatthoursLazy = null;
        this.gigawatthoursLazy = null;
        this.terawatthoursLazy = null;
        this.decathermsecLazy = null;
        this.decathermsusLazy = null;
        this.decathermsimperialLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Energy is Joule.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Joules() {
        if (this.joulesLazy !== null) {
            return this.joulesLazy;
        }
        return this.joulesLazy = this.convertFromBase(EnergyUnits.Joules);
    }
    /** */
    get Calories() {
        if (this.caloriesLazy !== null) {
            return this.caloriesLazy;
        }
        return this.caloriesLazy = this.convertFromBase(EnergyUnits.Calories);
    }
    /** */
    get BritishThermalUnits() {
        if (this.britishthermalunitsLazy !== null) {
            return this.britishthermalunitsLazy;
        }
        return this.britishthermalunitsLazy = this.convertFromBase(EnergyUnits.BritishThermalUnits);
    }
    /** */
    get ElectronVolts() {
        if (this.electronvoltsLazy !== null) {
            return this.electronvoltsLazy;
        }
        return this.electronvoltsLazy = this.convertFromBase(EnergyUnits.ElectronVolts);
    }
    /** */
    get FootPounds() {
        if (this.footpoundsLazy !== null) {
            return this.footpoundsLazy;
        }
        return this.footpoundsLazy = this.convertFromBase(EnergyUnits.FootPounds);
    }
    /** */
    get Ergs() {
        if (this.ergsLazy !== null) {
            return this.ergsLazy;
        }
        return this.ergsLazy = this.convertFromBase(EnergyUnits.Ergs);
    }
    /** */
    get WattHours() {
        if (this.watthoursLazy !== null) {
            return this.watthoursLazy;
        }
        return this.watthoursLazy = this.convertFromBase(EnergyUnits.WattHours);
    }
    /** */
    get ThermsEc() {
        if (this.thermsecLazy !== null) {
            return this.thermsecLazy;
        }
        return this.thermsecLazy = this.convertFromBase(EnergyUnits.ThermsEc);
    }
    /** */
    get ThermsUs() {
        if (this.thermsusLazy !== null) {
            return this.thermsusLazy;
        }
        return this.thermsusLazy = this.convertFromBase(EnergyUnits.ThermsUs);
    }
    /** */
    get ThermsImperial() {
        if (this.thermsimperialLazy !== null) {
            return this.thermsimperialLazy;
        }
        return this.thermsimperialLazy = this.convertFromBase(EnergyUnits.ThermsImperial);
    }
    /** */
    get Kilojoules() {
        if (this.kilojoulesLazy !== null) {
            return this.kilojoulesLazy;
        }
        return this.kilojoulesLazy = this.convertFromBase(EnergyUnits.Kilojoules);
    }
    /** */
    get Megajoules() {
        if (this.megajoulesLazy !== null) {
            return this.megajoulesLazy;
        }
        return this.megajoulesLazy = this.convertFromBase(EnergyUnits.Megajoules);
    }
    /** */
    get Gigajoules() {
        if (this.gigajoulesLazy !== null) {
            return this.gigajoulesLazy;
        }
        return this.gigajoulesLazy = this.convertFromBase(EnergyUnits.Gigajoules);
    }
    /** */
    get Kilocalories() {
        if (this.kilocaloriesLazy !== null) {
            return this.kilocaloriesLazy;
        }
        return this.kilocaloriesLazy = this.convertFromBase(EnergyUnits.Kilocalories);
    }
    /** */
    get Megacalories() {
        if (this.megacaloriesLazy !== null) {
            return this.megacaloriesLazy;
        }
        return this.megacaloriesLazy = this.convertFromBase(EnergyUnits.Megacalories);
    }
    /** */
    get KilobritishThermalUnits() {
        if (this.kilobritishthermalunitsLazy !== null) {
            return this.kilobritishthermalunitsLazy;
        }
        return this.kilobritishthermalunitsLazy = this.convertFromBase(EnergyUnits.KilobritishThermalUnits);
    }
    /** */
    get MegabritishThermalUnits() {
        if (this.megabritishthermalunitsLazy !== null) {
            return this.megabritishthermalunitsLazy;
        }
        return this.megabritishthermalunitsLazy = this.convertFromBase(EnergyUnits.MegabritishThermalUnits);
    }
    /** */
    get GigabritishThermalUnits() {
        if (this.gigabritishthermalunitsLazy !== null) {
            return this.gigabritishthermalunitsLazy;
        }
        return this.gigabritishthermalunitsLazy = this.convertFromBase(EnergyUnits.GigabritishThermalUnits);
    }
    /** */
    get KilowattHours() {
        if (this.kilowatthoursLazy !== null) {
            return this.kilowatthoursLazy;
        }
        return this.kilowatthoursLazy = this.convertFromBase(EnergyUnits.KilowattHours);
    }
    /** */
    get MegawattHours() {
        if (this.megawatthoursLazy !== null) {
            return this.megawatthoursLazy;
        }
        return this.megawatthoursLazy = this.convertFromBase(EnergyUnits.MegawattHours);
    }
    /** */
    get GigawattHours() {
        if (this.gigawatthoursLazy !== null) {
            return this.gigawatthoursLazy;
        }
        return this.gigawatthoursLazy = this.convertFromBase(EnergyUnits.GigawattHours);
    }
    /** */
    get TerawattHours() {
        if (this.terawatthoursLazy !== null) {
            return this.terawatthoursLazy;
        }
        return this.terawatthoursLazy = this.convertFromBase(EnergyUnits.TerawattHours);
    }
    /** */
    get DecathermsEc() {
        if (this.decathermsecLazy !== null) {
            return this.decathermsecLazy;
        }
        return this.decathermsecLazy = this.convertFromBase(EnergyUnits.DecathermsEc);
    }
    /** */
    get DecathermsUs() {
        if (this.decathermsusLazy !== null) {
            return this.decathermsusLazy;
        }
        return this.decathermsusLazy = this.convertFromBase(EnergyUnits.DecathermsUs);
    }
    /** */
    get DecathermsImperial() {
        if (this.decathermsimperialLazy !== null) {
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
    static FromJoules(value) {
        return new Energy(value, EnergyUnits.Joules);
    }
    /**
     * Create a new Energy instance from a Calories
     *
     * @param value The unit as Calories to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromCalories(value) {
        return new Energy(value, EnergyUnits.Calories);
    }
    /**
     * Create a new Energy instance from a BritishThermalUnits
     *
     * @param value The unit as BritishThermalUnits to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromBritishThermalUnits(value) {
        return new Energy(value, EnergyUnits.BritishThermalUnits);
    }
    /**
     * Create a new Energy instance from a ElectronVolts
     *
     * @param value The unit as ElectronVolts to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromElectronVolts(value) {
        return new Energy(value, EnergyUnits.ElectronVolts);
    }
    /**
     * Create a new Energy instance from a FootPounds
     *
     * @param value The unit as FootPounds to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromFootPounds(value) {
        return new Energy(value, EnergyUnits.FootPounds);
    }
    /**
     * Create a new Energy instance from a Ergs
     *
     * @param value The unit as Ergs to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromErgs(value) {
        return new Energy(value, EnergyUnits.Ergs);
    }
    /**
     * Create a new Energy instance from a WattHours
     *
     * @param value The unit as WattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromWattHours(value) {
        return new Energy(value, EnergyUnits.WattHours);
    }
    /**
     * Create a new Energy instance from a ThermsEc
     *
     * @param value The unit as ThermsEc to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromThermsEc(value) {
        return new Energy(value, EnergyUnits.ThermsEc);
    }
    /**
     * Create a new Energy instance from a ThermsUs
     *
     * @param value The unit as ThermsUs to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromThermsUs(value) {
        return new Energy(value, EnergyUnits.ThermsUs);
    }
    /**
     * Create a new Energy instance from a ThermsImperial
     *
     * @param value The unit as ThermsImperial to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromThermsImperial(value) {
        return new Energy(value, EnergyUnits.ThermsImperial);
    }
    /**
     * Create a new Energy instance from a Kilojoules
     *
     * @param value The unit as Kilojoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromKilojoules(value) {
        return new Energy(value, EnergyUnits.Kilojoules);
    }
    /**
     * Create a new Energy instance from a Megajoules
     *
     * @param value The unit as Megajoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromMegajoules(value) {
        return new Energy(value, EnergyUnits.Megajoules);
    }
    /**
     * Create a new Energy instance from a Gigajoules
     *
     * @param value The unit as Gigajoules to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromGigajoules(value) {
        return new Energy(value, EnergyUnits.Gigajoules);
    }
    /**
     * Create a new Energy instance from a Kilocalories
     *
     * @param value The unit as Kilocalories to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromKilocalories(value) {
        return new Energy(value, EnergyUnits.Kilocalories);
    }
    /**
     * Create a new Energy instance from a Megacalories
     *
     * @param value The unit as Megacalories to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromMegacalories(value) {
        return new Energy(value, EnergyUnits.Megacalories);
    }
    /**
     * Create a new Energy instance from a KilobritishThermalUnits
     *
     * @param value The unit as KilobritishThermalUnits to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromKilobritishThermalUnits(value) {
        return new Energy(value, EnergyUnits.KilobritishThermalUnits);
    }
    /**
     * Create a new Energy instance from a MegabritishThermalUnits
     *
     * @param value The unit as MegabritishThermalUnits to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromMegabritishThermalUnits(value) {
        return new Energy(value, EnergyUnits.MegabritishThermalUnits);
    }
    /**
     * Create a new Energy instance from a GigabritishThermalUnits
     *
     * @param value The unit as GigabritishThermalUnits to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromGigabritishThermalUnits(value) {
        return new Energy(value, EnergyUnits.GigabritishThermalUnits);
    }
    /**
     * Create a new Energy instance from a KilowattHours
     *
     * @param value The unit as KilowattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromKilowattHours(value) {
        return new Energy(value, EnergyUnits.KilowattHours);
    }
    /**
     * Create a new Energy instance from a MegawattHours
     *
     * @param value The unit as MegawattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromMegawattHours(value) {
        return new Energy(value, EnergyUnits.MegawattHours);
    }
    /**
     * Create a new Energy instance from a GigawattHours
     *
     * @param value The unit as GigawattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromGigawattHours(value) {
        return new Energy(value, EnergyUnits.GigawattHours);
    }
    /**
     * Create a new Energy instance from a TerawattHours
     *
     * @param value The unit as TerawattHours to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromTerawattHours(value) {
        return new Energy(value, EnergyUnits.TerawattHours);
    }
    /**
     * Create a new Energy instance from a DecathermsEc
     *
     * @param value The unit as DecathermsEc to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromDecathermsEc(value) {
        return new Energy(value, EnergyUnits.DecathermsEc);
    }
    /**
     * Create a new Energy instance from a DecathermsUs
     *
     * @param value The unit as DecathermsUs to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromDecathermsUs(value) {
        return new Energy(value, EnergyUnits.DecathermsUs);
    }
    /**
     * Create a new Energy instance from a DecathermsImperial
     *
     * @param value The unit as DecathermsImperial to create a new Energy from.
     * @returns The new Energy instance.
     */
    static FromDecathermsImperial(value) {
        return new Energy(value, EnergyUnits.DecathermsImperial);
    }
    convertFromBase(toUnit) {
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
            case EnergyUnits.ThermsEc:
                return this.value / 1.05505585262e8;
            case EnergyUnits.ThermsUs:
                return this.value / 1.054804e8;
            case EnergyUnits.ThermsImperial:
                return this.value / 1.05505585257348e8;
            case EnergyUnits.Kilojoules:
                return (this.value) / 1000;
            case EnergyUnits.Megajoules:
                return (this.value) / 1000000;
            case EnergyUnits.Gigajoules:
                return (this.value) / 1000000000;
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
            case EnergyUnits.KilowattHours:
                return (this.value / 3600) / 1000;
            case EnergyUnits.MegawattHours:
                return (this.value / 3600) / 1000000;
            case EnergyUnits.GigawattHours:
                return (this.value / 3600) / 1000000000;
            case EnergyUnits.TerawattHours:
                return (this.value / 3600) / 1000000000000;
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
    convertToBase(value, fromUnit) {
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
            case EnergyUnits.ThermsEc:
                return value * 1.05505585262e8;
            case EnergyUnits.ThermsUs:
                return value * 1.054804e8;
            case EnergyUnits.ThermsImperial:
                return value * 1.05505585257348e8;
            case EnergyUnits.Kilojoules:
                return (value) * 1000;
            case EnergyUnits.Megajoules:
                return (value) * 1000000;
            case EnergyUnits.Gigajoules:
                return (value) * 1000000000;
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
            case EnergyUnits.KilowattHours:
                return (value * 3600) * 1000;
            case EnergyUnits.MegawattHours:
                return (value * 3600) * 1000000;
            case EnergyUnits.GigawattHours:
                return (value * 3600) * 1000000000;
            case EnergyUnits.TerawattHours:
                return (value * 3600) * 1000000000000;
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
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Energy.
     * @returns The string format of the Energy.
     */
    toString(toUnit = EnergyUnits.Joules) {
        switch (toUnit) {
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
            case EnergyUnits.ThermsEc:
                return this.ThermsEc + ` th (E.C.)`;
            case EnergyUnits.ThermsUs:
                return this.ThermsUs + ` th (U.S.)`;
            case EnergyUnits.ThermsImperial:
                return this.ThermsImperial + ` th (imp.)`;
            case EnergyUnits.Kilojoules:
                return this.Kilojoules + ` J`;
            case EnergyUnits.Megajoules:
                return this.Megajoules + ` J`;
            case EnergyUnits.Gigajoules:
                return this.Gigajoules + ` J`;
            case EnergyUnits.Kilocalories:
                return this.Kilocalories + ` cal`;
            case EnergyUnits.Megacalories:
                return this.Megacalories + ` cal`;
            case EnergyUnits.KilobritishThermalUnits:
                return this.KilobritishThermalUnits + ` BTU`;
            case EnergyUnits.MegabritishThermalUnits:
                return this.MegabritishThermalUnits + ` BTU`;
            case EnergyUnits.GigabritishThermalUnits:
                return this.GigabritishThermalUnits + ` BTU`;
            case EnergyUnits.KilowattHours:
                return this.KilowattHours + ` Wh`;
            case EnergyUnits.MegawattHours:
                return this.MegawattHours + ` Wh`;
            case EnergyUnits.GigawattHours:
                return this.GigawattHours + ` Wh`;
            case EnergyUnits.TerawattHours:
                return this.TerawattHours + ` Wh`;
            case EnergyUnits.DecathermsEc:
                return this.DecathermsEc + ` th (E.C.)`;
            case EnergyUnits.DecathermsUs:
                return this.DecathermsUs + ` th (U.S.)`;
            case EnergyUnits.DecathermsImperial:
                return this.DecathermsImperial + ` th (imp.)`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Energy = Energy;
//# sourceMappingURL=energy.g.js.map