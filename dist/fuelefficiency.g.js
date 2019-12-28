"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** FuelEfficiencyUnits enumeration */
var FuelEfficiencyUnits;
(function (FuelEfficiencyUnits) {
    /** */
    FuelEfficiencyUnits[FuelEfficiencyUnits["LitersPer100Kilometers"] = 0] = "LitersPer100Kilometers";
    /** */
    FuelEfficiencyUnits[FuelEfficiencyUnits["MilesPerUsGallon"] = 1] = "MilesPerUsGallon";
    /** */
    FuelEfficiencyUnits[FuelEfficiencyUnits["MilesPerUkGallon"] = 2] = "MilesPerUkGallon";
    /** */
    FuelEfficiencyUnits[FuelEfficiencyUnits["KilometersPerLiters"] = 3] = "KilometersPerLiters";
})(FuelEfficiencyUnits = exports.FuelEfficiencyUnits || (exports.FuelEfficiencyUnits = {}));
/** Fuel efficiency is a form of thermal efficiency, meaning the ratio from effort to result of a process that converts chemical potential energy contained in a carrier (fuel) into kinetic energy or work. Fuel economy is stated as "fuel consumption" in liters per 100 kilometers (L/100 km). In countries using non-metric system, fuel economy is expressed in miles per gallon (mpg) (imperial galon or US galon). */
class FuelEfficiency {
    /**
     * Create a new FuelEfficiency.
     * @param value The value.
     * @param fromUnit The ‘FuelEfficiency’ unit to create from.
     * The default unit is LitersPer100Kilometers
     */
    constructor(value, fromUnit = FuelEfficiencyUnits.LitersPer100Kilometers) {
        this.litersper100kilometersLazy = null;
        this.milesperusgallonLazy = null;
        this.milesperukgallonLazy = null;
        this.kilometersperlitersLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of FuelEfficiency is LitersPer100Kilometers.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get LitersPer100Kilometers() {
        if (this.litersper100kilometersLazy !== null) {
            return this.litersper100kilometersLazy;
        }
        return this.litersper100kilometersLazy = this.convertFromBase(FuelEfficiencyUnits.LitersPer100Kilometers);
    }
    /** */
    get MilesPerUsGallon() {
        if (this.milesperusgallonLazy !== null) {
            return this.milesperusgallonLazy;
        }
        return this.milesperusgallonLazy = this.convertFromBase(FuelEfficiencyUnits.MilesPerUsGallon);
    }
    /** */
    get MilesPerUkGallon() {
        if (this.milesperukgallonLazy !== null) {
            return this.milesperukgallonLazy;
        }
        return this.milesperukgallonLazy = this.convertFromBase(FuelEfficiencyUnits.MilesPerUkGallon);
    }
    /** */
    get KilometersPerLiters() {
        if (this.kilometersperlitersLazy !== null) {
            return this.kilometersperlitersLazy;
        }
        return this.kilometersperlitersLazy = this.convertFromBase(FuelEfficiencyUnits.KilometersPerLiters);
    }
    /**
     * Create a new FuelEfficiency instance from a LitersPer100Kilometers
     *
     * @param value The unit as LitersPer100Kilometers to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    static FromLitersPer100Kilometers(value) {
        return new FuelEfficiency(value, FuelEfficiencyUnits.LitersPer100Kilometers);
    }
    /**
     * Create a new FuelEfficiency instance from a MilesPerUsGallon
     *
     * @param value The unit as MilesPerUsGallon to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    static FromMilesPerUsGallon(value) {
        return new FuelEfficiency(value, FuelEfficiencyUnits.MilesPerUsGallon);
    }
    /**
     * Create a new FuelEfficiency instance from a MilesPerUkGallon
     *
     * @param value The unit as MilesPerUkGallon to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    static FromMilesPerUkGallon(value) {
        return new FuelEfficiency(value, FuelEfficiencyUnits.MilesPerUkGallon);
    }
    /**
     * Create a new FuelEfficiency instance from a KilometersPerLiters
     *
     * @param value The unit as KilometersPerLiters to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    static FromKilometersPerLiters(value) {
        return new FuelEfficiency(value, FuelEfficiencyUnits.KilometersPerLiters);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case FuelEfficiencyUnits.LitersPer100Kilometers:
                return this.value;
            case FuelEfficiencyUnits.MilesPerUsGallon:
                return (100 * 3.785411784) / (1.609344 * this.value);
            case FuelEfficiencyUnits.MilesPerUkGallon:
                return (100 * 4.54609188) / (1.609344 * this.value);
            case FuelEfficiencyUnits.KilometersPerLiters:
                return 100 / this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case FuelEfficiencyUnits.LitersPer100Kilometers:
                return value;
            case FuelEfficiencyUnits.MilesPerUsGallon:
                return (100 * 3.785411784) / (1.609344 * value);
            case FuelEfficiencyUnits.MilesPerUkGallon:
                return (100 * 4.54609188) / (1.609344 * value);
            case FuelEfficiencyUnits.KilometersPerLiters:
                return 100 / value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the FuelEfficiency to string.
     * Note! the default format for FuelEfficiency is LitersPer100Kilometers.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the FuelEfficiency.
     * @returns The string format of the FuelEfficiency.
     */
    toString(toUnit = FuelEfficiencyUnits.LitersPer100Kilometers) {
        switch (toUnit) {
            case FuelEfficiencyUnits.LitersPer100Kilometers:
                return this.LitersPer100Kilometers + ` L/100km`;
            case FuelEfficiencyUnits.MilesPerUsGallon:
                return this.MilesPerUsGallon + ` mpg (U.S.)`;
            case FuelEfficiencyUnits.MilesPerUkGallon:
                return this.MilesPerUkGallon + ` mpg (imp.)`;
            case FuelEfficiencyUnits.KilometersPerLiters:
                return this.KilometersPerLiters + ` km/L`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given FuelEfficiency are equals to the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns True if the given FuelEfficiency are equal to the current FuelEfficiency.
     */
    equals(fuelEfficiency) {
        return this.value === fuelEfficiency.BaseValue;
    }
    /**
     * Compare the given FuelEfficiency against the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns 0 if they are equal, -1 if the current FuelEfficiency is less then other, 1 if the current FuelEfficiency is greater then other.
     */
    compareTo(fuelEfficiency) {
        if (this.value > fuelEfficiency.BaseValue)
            return 1;
        if (this.value < fuelEfficiency.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    add(fuelEfficiency) {
        return new FuelEfficiency(this.value + fuelEfficiency.BaseValue);
    }
    /**
     * Subtract the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    subtract(fuelEfficiency) {
        return new FuelEfficiency(this.value - fuelEfficiency.BaseValue);
    }
    /**
     * Multiply the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    multiply(fuelEfficiency) {
        return new FuelEfficiency(this.value * fuelEfficiency.BaseValue);
    }
    /**
     * Divide the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    divide(fuelEfficiency) {
        return new FuelEfficiency(this.value / fuelEfficiency.BaseValue);
    }
    /**
     * Modulo the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    modulo(fuelEfficiency) {
        return new FuelEfficiency(this.value % fuelEfficiency.BaseValue);
    }
    /**
     * Pow the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    pow(fuelEfficiency) {
        return new FuelEfficiency(this.value ** fuelEfficiency.BaseValue);
    }
}
exports.FuelEfficiency = FuelEfficiency;
//# sourceMappingURL=fuelefficiency.g.js.map