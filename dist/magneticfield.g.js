"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MagneticFieldUnits;
(function (MagneticFieldUnits) {
    MagneticFieldUnits[MagneticFieldUnits["Teslas"] = 0] = "Teslas";
    MagneticFieldUnits[MagneticFieldUnits["Nanotesla"] = 1] = "Nanotesla";
    MagneticFieldUnits[MagneticFieldUnits["Microtesla"] = 2] = "Microtesla";
})(MagneticFieldUnits = exports.MagneticFieldUnits || (exports.MagneticFieldUnits = {}));
class MagneticField {
    constructor(value, fromUnit) {
        this.teslasLazy = null;
        this.nanoteslaLazy = null;
        this.microteslaLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Teslas() {
        if (this.teslasLazy !== null) {
            return this.teslasLazy;
        }
        return this.teslasLazy = this.convertFromBase(MagneticFieldUnits.Teslas);
    }
    get Nanotesla() {
        if (this.nanoteslaLazy !== null) {
            return this.nanoteslaLazy;
        }
        return this.nanoteslaLazy = this.convertFromBase(MagneticFieldUnits.Nanotesla);
    }
    get Microtesla() {
        if (this.microteslaLazy !== null) {
            return this.microteslaLazy;
        }
        return this.microteslaLazy = this.convertFromBase(MagneticFieldUnits.Microtesla);
    }
    static FromTeslas(value) {
        return new MagneticField(value, MagneticFieldUnits.Teslas);
    }
    static FromNanotesla(value) {
        return new MagneticField(value, MagneticFieldUnits.Nanotesla);
    }
    static FromMicrotesla(value) {
        return new MagneticField(value, MagneticFieldUnits.Microtesla);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MagneticFieldUnits.Teslas:
                return this.value;
            case MagneticFieldUnits.Nanotesla:
                return (this.value) / 1e-9;
            case MagneticFieldUnits.Microtesla:
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
            case MagneticFieldUnits.Nanotesla:
                return (value) * 1e-9;
            case MagneticFieldUnits.Microtesla:
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
            case MagneticFieldUnits.Nanotesla:
                return this.Nanotesla + ` T`;
            case MagneticFieldUnits.Microtesla:
                return this.Microtesla + ` T`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MagneticField = MagneticField;
//# sourceMappingURL=magneticfield.g.js.map