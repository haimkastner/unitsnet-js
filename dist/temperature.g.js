"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TemperatureUnits;
(function (TemperatureUnits) {
    TemperatureUnits[TemperatureUnits["Kelvins"] = 0] = "Kelvins";
    TemperatureUnits[TemperatureUnits["DegreesCelsius"] = 1] = "DegreesCelsius";
    TemperatureUnits[TemperatureUnits["DegreesDelisle"] = 2] = "DegreesDelisle";
    TemperatureUnits[TemperatureUnits["DegreesFahrenheit"] = 3] = "DegreesFahrenheit";
    TemperatureUnits[TemperatureUnits["DegreesNewton"] = 4] = "DegreesNewton";
    TemperatureUnits[TemperatureUnits["DegreesRankine"] = 5] = "DegreesRankine";
    TemperatureUnits[TemperatureUnits["DegreesReaumur"] = 6] = "DegreesReaumur";
    TemperatureUnits[TemperatureUnits["DegreesRoemer"] = 7] = "DegreesRoemer";
    TemperatureUnits[TemperatureUnits["SolarTemperatures"] = 8] = "SolarTemperatures";
})(TemperatureUnits = exports.TemperatureUnits || (exports.TemperatureUnits = {}));
class Temperature {
    constructor(value, fromUnit) {
        this.kelvinsLazy = null;
        this.degreescelsiusLazy = null;
        this.degreesdelisleLazy = null;
        this.degreesfahrenheitLazy = null;
        this.degreesnewtonLazy = null;
        this.degreesrankineLazy = null;
        this.degreesreaumurLazy = null;
        this.degreesroemerLazy = null;
        this.solartemperaturesLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Kelvins() {
        if (this.kelvinsLazy !== null) {
            return this.kelvinsLazy;
        }
        return this.kelvinsLazy = this.convertFromBase(TemperatureUnits.Kelvins);
    }
    get DegreesCelsius() {
        if (this.degreescelsiusLazy !== null) {
            return this.degreescelsiusLazy;
        }
        return this.degreescelsiusLazy = this.convertFromBase(TemperatureUnits.DegreesCelsius);
    }
    get DegreesDelisle() {
        if (this.degreesdelisleLazy !== null) {
            return this.degreesdelisleLazy;
        }
        return this.degreesdelisleLazy = this.convertFromBase(TemperatureUnits.DegreesDelisle);
    }
    get DegreesFahrenheit() {
        if (this.degreesfahrenheitLazy !== null) {
            return this.degreesfahrenheitLazy;
        }
        return this.degreesfahrenheitLazy = this.convertFromBase(TemperatureUnits.DegreesFahrenheit);
    }
    get DegreesNewton() {
        if (this.degreesnewtonLazy !== null) {
            return this.degreesnewtonLazy;
        }
        return this.degreesnewtonLazy = this.convertFromBase(TemperatureUnits.DegreesNewton);
    }
    get DegreesRankine() {
        if (this.degreesrankineLazy !== null) {
            return this.degreesrankineLazy;
        }
        return this.degreesrankineLazy = this.convertFromBase(TemperatureUnits.DegreesRankine);
    }
    get DegreesReaumur() {
        if (this.degreesreaumurLazy !== null) {
            return this.degreesreaumurLazy;
        }
        return this.degreesreaumurLazy = this.convertFromBase(TemperatureUnits.DegreesReaumur);
    }
    get DegreesRoemer() {
        if (this.degreesroemerLazy !== null) {
            return this.degreesroemerLazy;
        }
        return this.degreesroemerLazy = this.convertFromBase(TemperatureUnits.DegreesRoemer);
    }
    get SolarTemperatures() {
        if (this.solartemperaturesLazy !== null) {
            return this.solartemperaturesLazy;
        }
        return this.solartemperaturesLazy = this.convertFromBase(TemperatureUnits.SolarTemperatures);
    }
    static FromKelvins(value) {
        return new Temperature(value, TemperatureUnits.Kelvins);
    }
    static FromDegreesCelsius(value) {
        return new Temperature(value, TemperatureUnits.DegreesCelsius);
    }
    static FromDegreesDelisle(value) {
        return new Temperature(value, TemperatureUnits.DegreesDelisle);
    }
    static FromDegreesFahrenheit(value) {
        return new Temperature(value, TemperatureUnits.DegreesFahrenheit);
    }
    static FromDegreesNewton(value) {
        return new Temperature(value, TemperatureUnits.DegreesNewton);
    }
    static FromDegreesRankine(value) {
        return new Temperature(value, TemperatureUnits.DegreesRankine);
    }
    static FromDegreesReaumur(value) {
        return new Temperature(value, TemperatureUnits.DegreesReaumur);
    }
    static FromDegreesRoemer(value) {
        return new Temperature(value, TemperatureUnits.DegreesRoemer);
    }
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
}
exports.Temperature = Temperature;
//# sourceMappingURL=temperature.g.js.map