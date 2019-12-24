"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MagneticFieldUnits;
(function (MagneticFieldUnits) {
    MagneticFieldUnits[MagneticFieldUnits["Teslas"] = 0] = "Teslas";
    MagneticFieldUnits[MagneticFieldUnits["Nanoteslas"] = 1] = "Nanoteslas";
    MagneticFieldUnits[MagneticFieldUnits["Microteslas"] = 2] = "Microteslas";
})(MagneticFieldUnits = exports.MagneticFieldUnits || (exports.MagneticFieldUnits = {}));
class MagneticField {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Teslas() {
        return this.convertFromBase(MagneticFieldUnits.Teslas);
    }
    get Nanoteslas() {
        return this.convertFromBase(MagneticFieldUnits.Nanoteslas);
    }
    get Microteslas() {
        return this.convertFromBase(MagneticFieldUnits.Microteslas);
    }
    static FromTeslas(value) {
        return new MagneticField(value, MagneticFieldUnits.Teslas);
    }
    static FromNanoteslas(value) {
        return new MagneticField(value, MagneticFieldUnits.Nanoteslas);
    }
    static FromMicroteslas(value) {
        return new MagneticField(value, MagneticFieldUnits.Microteslas);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MagneticFieldUnits.Teslas:
                return this.value;
            case MagneticFieldUnits.Nanoteslas:
                return (this.value) * 1e-9;
            case MagneticFieldUnits.Microteslas:
                return (this.value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MagneticFieldUnits.Teslas:
                return value;
            case MagneticFieldUnits.Nanoteslas:
                return (value) / 1e-9;
            case MagneticFieldUnits.Microteslas:
                return (value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }
}
exports.MagneticField = MagneticField;
//# sourceMappingURL=magneticfield.g.js.map