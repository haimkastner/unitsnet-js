"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SolidAngleUnits;
(function (SolidAngleUnits) {
    SolidAngleUnits[SolidAngleUnits["Steradians"] = 0] = "Steradians";
})(SolidAngleUnits = exports.SolidAngleUnits || (exports.SolidAngleUnits = {}));
class SolidAngle {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Steradians() {
        return this.convertFromBase(SolidAngleUnits.Steradians);
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
                return this.value;
            default:
                break;
        }
        return NaN;
    }
}
exports.SolidAngle = SolidAngle;
//# sourceMappingURL=solidangle.g.js.map