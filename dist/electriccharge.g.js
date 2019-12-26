"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricChargeUnits;
(function (ElectricChargeUnits) {
    ElectricChargeUnits[ElectricChargeUnits["Coulombs"] = 0] = "Coulombs";
    ElectricChargeUnits[ElectricChargeUnits["AmpereHours"] = 1] = "AmpereHours";
    ElectricChargeUnits[ElectricChargeUnits["Kiloamperehours"] = 2] = "Kiloamperehours";
    ElectricChargeUnits[ElectricChargeUnits["Megaamperehours"] = 3] = "Megaamperehours";
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
    get Kiloamperehours() {
        if (this.kiloamperehoursLazy !== null) {
            return this.kiloamperehoursLazy;
        }
        return this.kiloamperehoursLazy = this.convertFromBase(ElectricChargeUnits.Kiloamperehours);
    }
    get Megaamperehours() {
        if (this.megaamperehoursLazy !== null) {
            return this.megaamperehoursLazy;
        }
        return this.megaamperehoursLazy = this.convertFromBase(ElectricChargeUnits.Megaamperehours);
    }
    static FromCoulombs(value) {
        return new ElectricCharge(value, ElectricChargeUnits.Coulombs);
    }
    static FromAmpereHours(value) {
        return new ElectricCharge(value, ElectricChargeUnits.AmpereHours);
    }
    static FromKiloamperehours(value) {
        return new ElectricCharge(value, ElectricChargeUnits.Kiloamperehours);
    }
    static FromMegaamperehours(value) {
        return new ElectricCharge(value, ElectricChargeUnits.Megaamperehours);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricChargeUnits.Coulombs:
                return this.value;
            case ElectricChargeUnits.AmpereHours:
                return this.value * 2.77777777777e-4;
            case ElectricChargeUnits.Kiloamperehours:
                return (this.value * 2.77777777777e-4) / 1000;
            case ElectricChargeUnits.Megaamperehours:
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
            case ElectricChargeUnits.Kiloamperehours:
                return (value / 2.77777777777e-4) * 1000;
            case ElectricChargeUnits.Megaamperehours:
                return (value / 2.77777777777e-4) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricCharge = ElectricCharge;
//# sourceMappingURL=electriccharge.g.js.map