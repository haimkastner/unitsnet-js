"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LapseRateUnits;
(function (LapseRateUnits) {
    LapseRateUnits[LapseRateUnits["DegreesCelciusPerKilometer"] = 0] = "DegreesCelciusPerKilometer";
})(LapseRateUnits = exports.LapseRateUnits || (exports.LapseRateUnits = {}));
class LapseRate {
    constructor(value, fromUnit) {
        this.degreescelciusperkilometerLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get DegreesCelciusPerKilometer() {
        if (this.degreescelciusperkilometerLazy !== null) {
            return this.degreescelciusperkilometerLazy;
        }
        return this.degreescelciusperkilometerLazy = this.convertFromBase(LapseRateUnits.DegreesCelciusPerKilometer);
    }
    static FromDegreesCelciusPerKilometer(value) {
        return new LapseRate(value, LapseRateUnits.DegreesCelciusPerKilometer);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LapseRateUnits.DegreesCelciusPerKilometer:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LapseRateUnits.DegreesCelciusPerKilometer:
                return value;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = LapseRateUnits.DegreesCelciusPerKilometer) {
        switch (toUnit) {
            case LapseRateUnits.DegreesCelciusPerKilometer:
                return this.DegreesCelciusPerKilometer + ` ∆°C/km`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.LapseRate = LapseRate;
//# sourceMappingURL=lapserate.g.js.map