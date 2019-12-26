"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricChargeUnits;
(function (ElectricChargeUnits) {
    ElectricChargeUnits[ElectricChargeUnits["Coulombs"] = 0] = "Coulombs";
    ElectricChargeUnits[ElectricChargeUnits["AmpereHours"] = 1] = "AmpereHours";
    ElectricChargeUnits[ElectricChargeUnits["KiloampereHour"] = 2] = "KiloampereHour";
    ElectricChargeUnits[ElectricChargeUnits["MegaampereHour"] = 3] = "MegaampereHour";
})(ElectricChargeUnits = exports.ElectricChargeUnits || (exports.ElectricChargeUnits = {}));
class ElectricCharge {
    constructor(value, fromUnit) {
        this.coulombsLazy = null;
        this.amperehoursLazy = null;
        this.kiloamperehourLazy = null;
        this.megaamperehourLazy = null;
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
    get KiloampereHour() {
        if (this.kiloamperehourLazy !== null) {
            return this.kiloamperehourLazy;
        }
        return this.kiloamperehourLazy = this.convertFromBase(ElectricChargeUnits.KiloampereHour);
    }
    get MegaampereHour() {
        if (this.megaamperehourLazy !== null) {
            return this.megaamperehourLazy;
        }
        return this.megaamperehourLazy = this.convertFromBase(ElectricChargeUnits.MegaampereHour);
    }
    static FromCoulombs(value) {
        return new ElectricCharge(value, ElectricChargeUnits.Coulombs);
    }
    static FromAmpereHours(value) {
        return new ElectricCharge(value, ElectricChargeUnits.AmpereHours);
    }
    static FromKiloampereHour(value) {
        return new ElectricCharge(value, ElectricChargeUnits.KiloampereHour);
    }
    static FromMegaampereHour(value) {
        return new ElectricCharge(value, ElectricChargeUnits.MegaampereHour);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricChargeUnits.Coulombs:
                return this.value;
            case ElectricChargeUnits.AmpereHours:
                return this.value * 2.77777777777e-4;
            case ElectricChargeUnits.KiloampereHour:
                return (this.value * 2.77777777777e-4) / 1000;
            case ElectricChargeUnits.MegaampereHour:
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
            case ElectricChargeUnits.KiloampereHour:
                return (value / 2.77777777777e-4) * 1000;
            case ElectricChargeUnits.MegaampereHour:
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
            case ElectricChargeUnits.KiloampereHour:
                return this.KiloampereHour + ` A-h`;
            case ElectricChargeUnits.MegaampereHour:
                return this.MegaampereHour + ` A-h`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricCharge = ElectricCharge;
//# sourceMappingURL=electriccharge.g.js.map