"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TemperatureDeltaUnits;
(function (TemperatureDeltaUnits) {
    TemperatureDeltaUnits[TemperatureDeltaUnits["Kelvins"] = 0] = "Kelvins";
    TemperatureDeltaUnits[TemperatureDeltaUnits["DegreesCelsius"] = 1] = "DegreesCelsius";
    TemperatureDeltaUnits[TemperatureDeltaUnits["DegreesDelisle"] = 2] = "DegreesDelisle";
    TemperatureDeltaUnits[TemperatureDeltaUnits["DegreesFahrenheit"] = 3] = "DegreesFahrenheit";
    TemperatureDeltaUnits[TemperatureDeltaUnits["DegreesNewton"] = 4] = "DegreesNewton";
    TemperatureDeltaUnits[TemperatureDeltaUnits["DegreesRankine"] = 5] = "DegreesRankine";
    TemperatureDeltaUnits[TemperatureDeltaUnits["DegreesReaumur"] = 6] = "DegreesReaumur";
    TemperatureDeltaUnits[TemperatureDeltaUnits["DegreesRoemer"] = 7] = "DegreesRoemer";
})(TemperatureDeltaUnits = exports.TemperatureDeltaUnits || (exports.TemperatureDeltaUnits = {}));
class TemperatureDelta {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Kelvins() {
        return this.convertFromBase(TemperatureDeltaUnits.Kelvins);
    }
    get DegreesCelsius() {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesCelsius);
    }
    get DegreesDelisle() {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesDelisle);
    }
    get DegreesFahrenheit() {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesFahrenheit);
    }
    get DegreesNewton() {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesNewton);
    }
    get DegreesRankine() {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesRankine);
    }
    get DegreesReaumur() {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesReaumur);
    }
    get DegreesRoemer() {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesRoemer);
    }
    static FromKelvins(value) {
        return new TemperatureDelta(value, TemperatureDeltaUnits.Kelvins);
    }
    static FromDegreesCelsius(value) {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesCelsius);
    }
    static FromDegreesDelisle(value) {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesDelisle);
    }
    static FromDegreesFahrenheit(value) {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesFahrenheit);
    }
    static FromDegreesNewton(value) {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesNewton);
    }
    static FromDegreesRankine(value) {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesRankine);
    }
    static FromDegreesReaumur(value) {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesReaumur);
    }
    static FromDegreesRoemer(value) {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesRoemer);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case TemperatureDeltaUnits.Kelvins:
                return this.value;
            case TemperatureDeltaUnits.DegreesCelsius:
                return this.value;
            case TemperatureDeltaUnits.DegreesDelisle:
                return this.value * -2 / 3;
            case TemperatureDeltaUnits.DegreesFahrenheit:
                return this.value * 5 / 9;
            case TemperatureDeltaUnits.DegreesNewton:
                return this.value * 100 / 33;
            case TemperatureDeltaUnits.DegreesRankine:
                return this.value * 5 / 9;
            case TemperatureDeltaUnits.DegreesReaumur:
                return this.value * 5 / 4;
            case TemperatureDeltaUnits.DegreesRoemer:
                return this.value * 40 / 21;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case TemperatureDeltaUnits.Kelvins:
                return this.value;
            case TemperatureDeltaUnits.DegreesCelsius:
                return this.value;
            case TemperatureDeltaUnits.DegreesDelisle:
                return this.value * -3 / 2;
            case TemperatureDeltaUnits.DegreesFahrenheit:
                return this.value * 9 / 5;
            case TemperatureDeltaUnits.DegreesNewton:
                return this.value * 33 / 100;
            case TemperatureDeltaUnits.DegreesRankine:
                return this.value * 9 / 5;
            case TemperatureDeltaUnits.DegreesReaumur:
                return this.value * 4 / 5;
            case TemperatureDeltaUnits.DegreesRoemer:
                return this.value * 21 / 40;
            default:
                break;
        }
        return NaN;
    }
}
exports.TemperatureDelta = TemperatureDelta;
//# sourceMappingURL=temperaturedelta.g.js.map