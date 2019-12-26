"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VitaminAUnits;
(function (VitaminAUnits) {
    VitaminAUnits[VitaminAUnits["InternationalUnits"] = 0] = "InternationalUnits";
})(VitaminAUnits = exports.VitaminAUnits || (exports.VitaminAUnits = {}));
class VitaminA {
    constructor(value, fromUnit) {
        this.internationalunitsLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get InternationalUnits() {
        if (this.internationalunitsLazy !== null) {
            return this.internationalunitsLazy;
        }
        return this.internationalunitsLazy = this.convertFromBase(VitaminAUnits.InternationalUnits);
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
                return value;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = VitaminAUnits.InternationalUnits) {
        switch (toUnit) {
            case VitaminAUnits.InternationalUnits:
                return this.InternationalUnits + ` IU`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.VitaminA = VitaminA;
//# sourceMappingURL=vitamina.g.js.map