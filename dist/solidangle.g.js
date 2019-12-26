"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SolidAngleUnits;
(function (SolidAngleUnits) {
    SolidAngleUnits[SolidAngleUnits["Steradians"] = 0] = "Steradians";
})(SolidAngleUnits = exports.SolidAngleUnits || (exports.SolidAngleUnits = {}));
class SolidAngle {
    constructor(value, fromUnit) {
        this.steradiansLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Steradians() {
        if (this.steradiansLazy !== null) {
            return this.steradiansLazy;
        }
        return this.steradiansLazy = this.convertFromBase(SolidAngleUnits.Steradians);
    }
    static FromSteradians(value) {
        return new SolidAngle(value, SolidAngleUnits.Steradians);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case SolidAngleUnits.Steradians:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case SolidAngleUnits.Steradians:
                return value;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = SolidAngleUnits.Steradians) {
        switch (toUnit) {
            case SolidAngleUnits.Steradians:
                return this.Steradians + ` sr`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.SolidAngle = SolidAngle;
//# sourceMappingURL=solidangle.g.js.map