"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricChargeUnits;
(function (ElectricChargeUnits) {
    ElectricChargeUnits[ElectricChargeUnits["Coulombs"] = 0] = "Coulombs";
    ElectricChargeUnits[ElectricChargeUnits["AmpereHours"] = 1] = "AmpereHours";
    ElectricChargeUnits[ElectricChargeUnits["KiloampereHours"] = 2] = "KiloampereHours";
    ElectricChargeUnits[ElectricChargeUnits["MegaampereHours"] = 3] = "MegaampereHours";
})(ElectricChargeUnits = exports.ElectricChargeUnits || (exports.ElectricChargeUnits = {}));
class ElectricCharge {
    constructor(value, fromUnit) {
        this.coulombsLazy = null;
        this.amperehoursLazy = null;
        this.kiloamperehoursLazy = null;
        this.megaamperehoursLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Coulombs() {
        if (this.coulombsLazy !== null) {
            return this.coulombsLazy;
        }
        return this.coulombsLazy = this.convertFromBase(ElectricChargeUnits.Coulombs);
    }
    get AmpereHours() {
        if (this.amperehoursLazy !== null) {
            return this.amperehoursLazy;
        }
        return this.amperehoursLazy = this.convertFromBase(ElectricChargeUnits.AmpereHours);
    }
    get KiloampereHours() {
        if (this.kiloamperehoursLazy !== null) {
            return this.kiloamperehoursLazy;
        }
        return this.kiloamperehoursLazy = this.convertFromBase(ElectricChargeUnits.KiloampereHours);
    }
    get MegaampereHours() {
        if (this.megaamperehoursLazy !== null) {
            return this.megaamperehoursLazy;
        }
        return this.megaamperehoursLazy = this.convertFromBase(ElectricChargeUnits.MegaampereHours);
    }
    static FromCoulombs(value) {
        return new ElectricCharge(value, ElectricChargeUnits.Coulombs);
    }
    static FromAmpereHours(value) {
        return new ElectricCharge(value, ElectricChargeUnits.AmpereHours);
    }
    static FromKiloampereHours(value) {
        return new ElectricCharge(value, ElectricChargeUnits.KiloampereHours);
    }
    static FromMegaampereHours(value) {
        return new ElectricCharge(value, ElectricChargeUnits.MegaampereHours);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricChargeUnits.Coulombs:
                return this.value;
            case ElectricChargeUnits.AmpereHours:
                return this.value * 2.77777777777e-4;
            case ElectricChargeUnits.KiloampereHours:
                return (this.value * 2.77777777777e-4) / 1000;
            case ElectricChargeUnits.MegaampereHours:
                return (this.value * 2.77777777777e-4) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricChargeUnits.Coulombs:
                return value;
            case ElectricChargeUnits.AmpereHours:
                return value / 2.77777777777e-4;
            case ElectricChargeUnits.KiloampereHours:
                return (value / 2.77777777777e-4) * 1000;
            case ElectricChargeUnits.MegaampereHours:
                return (value / 2.77777777777e-4) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ElectricChargeUnits.Coulombs) {
        switch (toUnit) {
            case ElectricChargeUnits.Coulombs:
                return this.Coulombs + ` C`;
            case ElectricChargeUnits.AmpereHours:
                return this.AmpereHours + ` A-h`;
            case ElectricChargeUnits.KiloampereHours:
                return this.KiloampereHours + ` A-h`;
            case ElectricChargeUnits.MegaampereHours:
                return this.MegaampereHours + ` A-h`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricCharge = ElectricCharge;
//# sourceMappingURL=electriccharge.g.js.map