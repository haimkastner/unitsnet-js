"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VitaminAUnits;
(function (VitaminAUnits) {
    VitaminAUnits[VitaminAUnits["InternationalUnits"] = 0] = "InternationalUnits";
})(VitaminAUnits = exports.VitaminAUnits || (exports.VitaminAUnits = {}));
class VitaminA {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get InternationalUnits() {
        return this.convertFromBase(VitaminAUnits.InternationalUnits);
    }
    static FromInternationalUnits(value) {
        return new VitaminA(value, VitaminAUnits.InternationalUnits);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case VitaminAUnits.InternationalUnits:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case VitaminAUnits.InternationalUnits:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
}
exports.VitaminA = VitaminA;
//# sourceMappingURL=vitamina.g.js.map