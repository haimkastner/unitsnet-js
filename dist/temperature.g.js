"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** TemperatureUnits enumeration */
var TemperatureUnits;
(function (TemperatureUnits) {
    /** */
    TemperatureUnits[TemperatureUnits["Kelvins"] = 0] = "Kelvins";
    /** */
    TemperatureUnits[TemperatureUnits["DegreesCelsius"] = 1] = "DegreesCelsius";
    /** */
    TemperatureUnits[TemperatureUnits["DegreesDelisle"] = 2] = "DegreesDelisle";
    /** */
    TemperatureUnits[TemperatureUnits["DegreesFahrenheit"] = 3] = "DegreesFahrenheit";
    /** */
    TemperatureUnits[TemperatureUnits["DegreesNewton"] = 4] = "DegreesNewton";
    /** */
    TemperatureUnits[TemperatureUnits["DegreesRankine"] = 5] = "DegreesRankine";
    /** */
    TemperatureUnits[TemperatureUnits["DegreesReaumur"] = 6] = "DegreesReaumur";
    /** */
    TemperatureUnits[TemperatureUnits["DegreesRoemer"] = 7] = "DegreesRoemer";
    /** */
    TemperatureUnits[TemperatureUnits["SolarTemperatures"] = 8] = "SolarTemperatures";
})(TemperatureUnits = exports.TemperatureUnits || (exports.TemperatureUnits = {}));
/** A temperature is a numerical measure of hot or cold. Its measurement is by detection of heat radiation or particle velocity or kinetic energy, or by the bulk behavior of a thermometric material. It may be calibrated in any of various temperature scales, Celsius, Fahrenheit, Kelvin, etc. The fundamental physical definition of temperature is provided by thermodynamics. */
class Temperature {
    /**
     * Create a new Temperature.
     * @param value The value.
     * @param fromUnit The ‘Temperature’ unit to create from.
     * The default unit is Kelvins
     */
    constructor(value, fromUnit = TemperatureUnits.Kelvins) {
        this.kelvinsLazy = null;
        this.degreescelsiusLazy = null;
        this.degreesdelisleLazy = null;
        this.degreesfahrenheitLazy = null;
        this.degreesnewtonLazy = null;
        this.degreesrankineLazy = null;
        this.degreesreaumurLazy = null;
        this.degreesroemerLazy = null;
        this.solartemperaturesLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Temperature is Kelvins.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Kelvins() {
        if (this.kelvinsLazy !== null) {
            return this.kelvinsLazy;
        }
        return this.kelvinsLazy = this.convertFromBase(TemperatureUnits.Kelvins);
    }
    /** */
    get DegreesCelsius() {
        if (this.degreescelsiusLazy !== null) {
            return this.degreescelsiusLazy;
        }
        return this.degreescelsiusLazy = this.convertFromBase(TemperatureUnits.DegreesCelsius);
    }
    /** */
    get DegreesDelisle() {
        if (this.degreesdelisleLazy !== null) {
            return this.degreesdelisleLazy;
        }
        return this.degreesdelisleLazy = this.convertFromBase(TemperatureUnits.DegreesDelisle);
    }
    /** */
    get DegreesFahrenheit() {
        if (this.degreesfahrenheitLazy !== null) {
            return this.degreesfahrenheitLazy;
        }
        return this.degreesfahrenheitLazy = this.convertFromBase(TemperatureUnits.DegreesFahrenheit);
    }
    /** */
    get DegreesNewton() {
        if (this.degreesnewtonLazy !== null) {
            return this.degreesnewtonLazy;
        }
        return this.degreesnewtonLazy = this.convertFromBase(TemperatureUnits.DegreesNewton);
    }
    /** */
    get DegreesRankine() {
        if (this.degreesrankineLazy !== null) {
            return this.degreesrankineLazy;
        }
        return this.degreesrankineLazy = this.convertFromBase(TemperatureUnits.DegreesRankine);
    }
    /** */
    get DegreesReaumur() {
        if (this.degreesreaumurLazy !== null) {
            return this.degreesreaumurLazy;
        }
        return this.degreesreaumurLazy = this.convertFromBase(TemperatureUnits.DegreesReaumur);
    }
    /** */
    get DegreesRoemer() {
        if (this.degreesroemerLazy !== null) {
            return this.degreesroemerLazy;
        }
        return this.degreesroemerLazy = this.convertFromBase(TemperatureUnits.DegreesRoemer);
    }
    /** */
    get SolarTemperatures() {
        if (this.solartemperaturesLazy !== null) {
            return this.solartemperaturesLazy;
        }
        return this.solartemperaturesLazy = this.convertFromBase(TemperatureUnits.SolarTemperatures);
    }
    /**
     * Create a new Temperature instance from a Kelvins
     *
     * @param value The unit as Kelvins to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromKelvins(value) {
        return new Temperature(value, TemperatureUnits.Kelvins);
    }
    /**
     * Create a new Temperature instance from a DegreesCelsius
     *
     * @param value The unit as DegreesCelsius to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesCelsius(value) {
        return new Temperature(value, TemperatureUnits.DegreesCelsius);
    }
    /**
     * Create a new Temperature instance from a DegreesDelisle
     *
     * @param value The unit as DegreesDelisle to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesDelisle(value) {
        return new Temperature(value, TemperatureUnits.DegreesDelisle);
    }
    /**
     * Create a new Temperature instance from a DegreesFahrenheit
     *
     * @param value The unit as DegreesFahrenheit to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesFahrenheit(value) {
        return new Temperature(value, TemperatureUnits.DegreesFahrenheit);
    }
    /**
     * Create a new Temperature instance from a DegreesNewton
     *
     * @param value The unit as DegreesNewton to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesNewton(value) {
        return new Temperature(value, TemperatureUnits.DegreesNewton);
    }
    /**
     * Create a new Temperature instance from a DegreesRankine
     *
     * @param value The unit as DegreesRankine to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesRankine(value) {
        return new Temperature(value, TemperatureUnits.DegreesRankine);
    }
    /**
     * Create a new Temperature instance from a DegreesReaumur
     *
     * @param value The unit as DegreesReaumur to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesReaumur(value) {
        return new Temperature(value, TemperatureUnits.DegreesReaumur);
    }
    /**
     * Create a new Temperature instance from a DegreesRoemer
     *
     * @param value The unit as DegreesRoemer to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesRoemer(value) {
        return new Temperature(value, TemperatureUnits.DegreesRoemer);
    }
    /**
     * Create a new Temperature instance from a SolarTemperatures
     *
     * @param value The unit as SolarTemperatures to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromSolarTemperatures(value) {
        return new Temperature(value, TemperatureUnits.SolarTemperatures);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case TemperatureUnits.Kelvins:
                return this.value;
            case TemperatureUnits.DegreesCelsius:
                return this.value - 273.15;
            case TemperatureUnits.DegreesDelisle:
                return (this.value - 373.15) * -3 / 2;
            case TemperatureUnits.DegreesFahrenheit:
                return (this.value - 459.67 * 5 / 9) * 9 / 5;
            case TemperatureUnits.DegreesNewton:
                return (this.value - 273.15) * 33 / 100;
            case TemperatureUnits.DegreesRankine:
                return this.value * 9 / 5;
            case TemperatureUnits.DegreesReaumur:
                return (this.value - 273.15) * 4 / 5;
            case TemperatureUnits.DegreesRoemer:
                return (this.value - (273.15 - 7.5 * 40 / 21)) * 21 / 40;
            case TemperatureUnits.SolarTemperatures:
                return this.value / 5778;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case TemperatureUnits.Kelvins:
                return value;
            case TemperatureUnits.DegreesCelsius:
                return value + 273.15;
            case TemperatureUnits.DegreesDelisle:
                return value * -2 / 3 + 373.15;
            case TemperatureUnits.DegreesFahrenheit:
                return value * 5 / 9 + 459.67 * 5 / 9;
            case TemperatureUnits.DegreesNewton:
                return value * 100 / 33 + 273.15;
            case TemperatureUnits.DegreesRankine:
                return value * 5 / 9;
            case TemperatureUnits.DegreesReaumur:
                return value * 5 / 4 + 273.15;
            case TemperatureUnits.DegreesRoemer:
                return value * 40 / 21 + 273.15 - 7.5 * 40 / 21;
            case TemperatureUnits.SolarTemperatures:
                return value * 5778;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Temperature to string.
     * Note! the default format for Temperature is Kelvins.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Temperature.
     * @returns The string format of the Temperature.
     */
    toString(toUnit = TemperatureUnits.Kelvins) {
        switch (toUnit) {
            case TemperatureUnits.Kelvins:
                return this.Kelvins + ` K`;
            case TemperatureUnits.DegreesCelsius:
                return this.DegreesCelsius + ` °C`;
            case TemperatureUnits.DegreesDelisle:
                return this.DegreesDelisle + ` °De`;
            case TemperatureUnits.DegreesFahrenheit:
                return this.DegreesFahrenheit + ` °F`;
            case TemperatureUnits.DegreesNewton:
                return this.DegreesNewton + ` °N`;
            case TemperatureUnits.DegreesRankine:
                return this.DegreesRankine + ` °R`;
            case TemperatureUnits.DegreesReaumur:
                return this.DegreesReaumur + ` °Ré`;
            case TemperatureUnits.DegreesRoemer:
                return this.DegreesRoemer + ` °Rø`;
            case TemperatureUnits.SolarTemperatures:
                return this.SolarTemperatures + ` T⊙`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Temperature are equals to the current Temperature.
     * @param temperature The other Temperature.
     * @returns True if the given Temperature are equal to the current Temperature.
     */
    equals(temperature) {
        return this.value === temperature.BaseValue;
    }
    /**
     * Compare the given Temperature against the current Temperature.
     * @param temperature The other Temperature.
     * @returns 0 if they are equal, -1 if the current Temperature is less then other, 1 if the current Temperature is greater then other.
     */
    compareTo(temperature) {
        if (this.value > temperature.BaseValue)
            return 1;
        if (this.value < temperature.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    add(temperature) {
        return new Temperature(this.value + temperature.BaseValue);
    }
    /**
     * Subtract the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    subtract(temperature) {
        return new Temperature(this.value - temperature.BaseValue);
    }
    /**
     * Multiply the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    multiply(temperature) {
        return new Temperature(this.value * temperature.BaseValue);
    }
    /**
     * Divide the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    divide(temperature) {
        return new Temperature(this.value / temperature.BaseValue);
    }
    /**
     * Modulo the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    modulo(temperature) {
        return new Temperature(this.value % temperature.BaseValue);
    }
    /**
     * Pow the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    pow(temperature) {
        return new Temperature(this.value ** temperature.BaseValue);
    }
}
exports.Temperature = Temperature;
//# sourceMappingURL=temperature.g.js.map