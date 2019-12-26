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
        this.teslasLazy = null;
        this.nanoteslasLazy = null;
        this.microteslasLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Teslas() {
        if (this.teslasLazy !== null) {
            return this.teslasLazy;
        }
        return this.teslasLazy = this.convertFromBase(MagneticFieldUnits.Teslas);
    }
    get Nanoteslas() {
        if (this.nanoteslasLazy !== null) {
            return this.nanoteslasLazy;
        }
        return this.nanoteslasLazy = this.convertFromBase(MagneticFieldUnits.Nanoteslas);
    }
    get Microteslas() {
        if (this.microteslasLazy !== null) {
            return this.microteslasLazy;
        }
        return this.microteslasLazy = this.convertFromBase(MagneticFieldUnits.Microteslas);
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
                return (this.value) / 1e-9;
            case MagneticFieldUnits.Microteslas:
                return (this.value) / 0.000001;
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
                return (value) * 1e-9;
            case MagneticFieldUnits.Microteslas:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MagneticFieldUnits.Teslas) {
        switch (toUnit) {
            case MagneticFieldUnits.Teslas:
                return this.Teslas + ` T`;
            case MagneticFieldUnits.Nanoteslas:
                return this.Nanoteslas + ` T`;
            case MagneticFieldUnits.Microteslas:
                return this.Microteslas + ` T`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MagneticField = MagneticField;
//# sourceMappingURL=magneticfield.g.js.map