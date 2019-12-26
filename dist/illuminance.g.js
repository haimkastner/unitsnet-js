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
        this.luxLazy = null;
        this.kiloluxLazy = null;
        this.megaluxLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Lux() {
        if (this.luxLazy !== null) {
            return this.luxLazy;
        }
        return this.luxLazy = this.convertFromBase(IlluminanceUnits.Lux);
    }
    get Kilolux() {
        if (this.kiloluxLazy !== null) {
            return this.kiloluxLazy;
        }
        return this.kiloluxLazy = this.convertFromBase(IlluminanceUnits.Kilolux);
    }
    get Megalux() {
        if (this.megaluxLazy !== null) {
            return this.megaluxLazy;
        }
        return this.megaluxLazy = this.convertFromBase(IlluminanceUnits.Megalux);
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
                return (this.value) / 1000;
            case IlluminanceUnits.Megalux:
                return (this.value) / 1000000;
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
                return (value) * 1000;
            case IlluminanceUnits.Megalux:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = IlluminanceUnits.Lux) {
        switch (toUnit) {
            case IlluminanceUnits.Lux:
                return this.Lux + ` lx`;
            case IlluminanceUnits.Kilolux:
                return this.Kilolux + ` lx`;
            case IlluminanceUnits.Megalux:
                return this.Megalux + ` lx`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Illuminance = Illuminance;
//# sourceMappingURL=illuminance.g.js.map