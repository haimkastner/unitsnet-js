"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricResistanceUnits;
(function (ElectricResistanceUnits) {
    ElectricResistanceUnits[ElectricResistanceUnits["Ohms"] = 0] = "Ohms";
    ElectricResistanceUnits[ElectricResistanceUnits["Kiloohms"] = 1] = "Kiloohms";
    ElectricResistanceUnits[ElectricResistanceUnits["Megaohms"] = 2] = "Megaohms";
    ElectricResistanceUnits[ElectricResistanceUnits["Gigaohms"] = 3] = "Gigaohms";
})(ElectricResistanceUnits = exports.ElectricResistanceUnits || (exports.ElectricResistanceUnits = {}));
class ElectricResistance {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Ohms() {
        return this.convertFromBase(ElectricResistanceUnits.Ohms);
    }
    get Kiloohms() {
        return this.convertFromBase(ElectricResistanceUnits.Kiloohms);
    }
    get Megaohms() {
        return this.convertFromBase(ElectricResistanceUnits.Megaohms);
    }
    get Gigaohms() {
        return this.convertFromBase(ElectricResistanceUnits.Gigaohms);
    }
    static FromOhms(value) {
        return new ElectricResistance(value, ElectricResistanceUnits.Ohms);
    }
    static FromKiloohms(value) {
        return new ElectricResistance(value, ElectricResistanceUnits.Kiloohms);
    }
    static FromMegaohms(value) {
        return new ElectricResistance(value, ElectricResistanceUnits.Megaohms);
    }
    static FromGigaohms(value) {
        return new ElectricResistance(value, ElectricResistanceUnits.Gigaohms);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricResistanceUnits.Ohms:
                return this.value;
            case ElectricResistanceUnits.Kiloohms:
                return (this.value) / 1000;
            case ElectricResistanceUnits.Megaohms:
                return (this.value) / 1000000;
            case ElectricResistanceUnits.Gigaohms:
                return (this.value) / 1000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricResistanceUnits.Ohms:
                return value;
            case ElectricResistanceUnits.Kiloohms:
                return (value) * 1000;
            case ElectricResistanceUnits.Megaohms:
                return (value) * 1000000;
            case ElectricResistanceUnits.Gigaohms:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricResistance = ElectricResistance;
//# sourceMappingURL=electricresistance.g.js.map