"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AreaDensityUnits;
(function (AreaDensityUnits) {
    AreaDensityUnits[AreaDensityUnits["KilogramsPerSquareMeter"] = 0] = "KilogramsPerSquareMeter";
})(AreaDensityUnits = exports.AreaDensityUnits || (exports.AreaDensityUnits = {}));
class AreaDensity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get KilogramsPerSquareMeter() {
        return this.convertFromBase(AreaDensityUnits.KilogramsPerSquareMeter);
    }
    static FromKilogramsPerSquareMeter(value) {
        return new AreaDensity(value, AreaDensityUnits.KilogramsPerSquareMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
}
exports.AreaDensity = AreaDensity;
//# sourceMappingURL=areadensity.g.js.map