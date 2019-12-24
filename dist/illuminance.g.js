"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IlluminanceUnits;
(function (IlluminanceUnits) {
    IlluminanceUnits[IlluminanceUnits["Lux"] = 0] = "Lux";
    IlluminanceUnits[IlluminanceUnits["Kilolux"] = 1] = "Kilolux";
    IlluminanceUnits[IlluminanceUnits["Megalux"] = 2] = "Megalux";
})(IlluminanceUnits = exports.IlluminanceUnits || (exports.IlluminanceUnits = {}));
class Illuminance {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Lux() {
        return this.convertFromBase(IlluminanceUnits.Lux);
    }
    get Kilolux() {
        return this.convertFromBase(IlluminanceUnits.Kilolux);
    }
    get Megalux() {
        return this.convertFromBase(IlluminanceUnits.Megalux);
    }
    static FromLux(value) {
        return new Illuminance(value, IlluminanceUnits.Lux);
    }
    static FromKilolux(value) {
        return new Illuminance(value, IlluminanceUnits.Kilolux);
    }
    static FromMegalux(value) {
        return new Illuminance(value, IlluminanceUnits.Megalux);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case IlluminanceUnits.Lux:
                return this.value;
            case IlluminanceUnits.Kilolux:
                return (this.value) * 1000;
            case IlluminanceUnits.Megalux:
                return (this.value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case IlluminanceUnits.Lux:
                return value;
            case IlluminanceUnits.Kilolux:
                return (value) / 1000;
            case IlluminanceUnits.Megalux:
                return (value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Illuminance = Illuminance;
//# sourceMappingURL=illuminance.g.js.map