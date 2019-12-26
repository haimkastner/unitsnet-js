"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricResistanceUnits;
(function (ElectricResistanceUnits) {
    ElectricResistanceUnits[ElectricResistanceUnits["Ohms"] = 0] = "Ohms";
    ElectricResistanceUnits[ElectricResistanceUnits["Kiloohm"] = 1] = "Kiloohm";
    ElectricResistanceUnits[ElectricResistanceUnits["Megaohm"] = 2] = "Megaohm";
    ElectricResistanceUnits[ElectricResistanceUnits["Gigaohm"] = 3] = "Gigaohm";
})(ElectricResistanceUnits = exports.ElectricResistanceUnits || (exports.ElectricResistanceUnits = {}));
class ElectricResistance {
    constructor(value, fromUnit) {
        this.ohmsLazy = null;
        this.kiloohmLazy = null;
        this.megaohmLazy = null;
        this.gigaohmLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Ohms() {
        if (this.ohmsLazy !== null) {
            return this.ohmsLazy;
        }
        return this.ohmsLazy = this.convertFromBase(ElectricResistanceUnits.Ohms);
    }
    get Kiloohm() {
        if (this.kiloohmLazy !== null) {
            return this.kiloohmLazy;
        }
        return this.kiloohmLazy = this.convertFromBase(ElectricResistanceUnits.Kiloohm);
    }
    get Megaohm() {
        if (this.megaohmLazy !== null) {
            return this.megaohmLazy;
        }
        return this.megaohmLazy = this.convertFromBase(ElectricResistanceUnits.Megaohm);
    }
    get Gigaohm() {
        if (this.gigaohmLazy !== null) {
            return this.gigaohmLazy;
        }
        return this.gigaohmLazy = this.convertFromBase(ElectricResistanceUnits.Gigaohm);
    }
    static FromOhms(value) {
        return new ElectricResistance(value, ElectricResistanceUnits.Ohms);
    }
    static FromKiloohm(value) {
        return new ElectricResistance(value, ElectricResistanceUnits.Kiloohm);
    }
    static FromMegaohm(value) {
        return new ElectricResistance(value, ElectricResistanceUnits.Megaohm);
    }
    static FromGigaohm(value) {
        return new ElectricResistance(value, ElectricResistanceUnits.Gigaohm);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricResistanceUnits.Ohms:
                return this.value;
            case ElectricResistanceUnits.Kiloohm:
                return (this.value) / 1000;
            case ElectricResistanceUnits.Megaohm:
                return (this.value) / 1000000;
            case ElectricResistanceUnits.Gigaohm:
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
            case ElectricResistanceUnits.Kiloohm:
                return (value) * 1000;
            case ElectricResistanceUnits.Megaohm:
                return (value) * 1000000;
            case ElectricResistanceUnits.Gigaohm:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ElectricResistanceUnits.Ohms) {
        switch (toUnit) {
            case ElectricResistanceUnits.Ohms:
                return this.Ohms + ` Ω`;
            case ElectricResistanceUnits.Kiloohm:
                return this.Kiloohm + ` Ω`;
            case ElectricResistanceUnits.Megaohm:
                return this.Megaohm + ` Ω`;
            case ElectricResistanceUnits.Gigaohm:
                return this.Gigaohm + ` Ω`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricResistance = ElectricResistance;
//# sourceMappingURL=electricresistance.g.js.map