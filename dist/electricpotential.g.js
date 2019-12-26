"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricPotentialUnits;
(function (ElectricPotentialUnits) {
    ElectricPotentialUnits[ElectricPotentialUnits["Volts"] = 0] = "Volts";
    ElectricPotentialUnits[ElectricPotentialUnits["Microvolt"] = 1] = "Microvolt";
    ElectricPotentialUnits[ElectricPotentialUnits["Kilovolt"] = 2] = "Kilovolt";
    ElectricPotentialUnits[ElectricPotentialUnits["Megavolt"] = 3] = "Megavolt";
})(ElectricPotentialUnits = exports.ElectricPotentialUnits || (exports.ElectricPotentialUnits = {}));
class ElectricPotential {
    constructor(value, fromUnit) {
        this.voltsLazy = null;
        this.microvoltLazy = null;
        this.kilovoltLazy = null;
        this.megavoltLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Volts() {
        if (this.voltsLazy !== null) {
            return this.voltsLazy;
        }
        return this.voltsLazy = this.convertFromBase(ElectricPotentialUnits.Volts);
    }
    get Microvolt() {
        if (this.microvoltLazy !== null) {
            return this.microvoltLazy;
        }
        return this.microvoltLazy = this.convertFromBase(ElectricPotentialUnits.Microvolt);
    }
    get Kilovolt() {
        if (this.kilovoltLazy !== null) {
            return this.kilovoltLazy;
        }
        return this.kilovoltLazy = this.convertFromBase(ElectricPotentialUnits.Kilovolt);
    }
    get Megavolt() {
        if (this.megavoltLazy !== null) {
            return this.megavoltLazy;
        }
        return this.megavoltLazy = this.convertFromBase(ElectricPotentialUnits.Megavolt);
    }
    static FromVolts(value) {
        return new ElectricPotential(value, ElectricPotentialUnits.Volts);
    }
    static FromMicrovolt(value) {
        return new ElectricPotential(value, ElectricPotentialUnits.Microvolt);
    }
    static FromKilovolt(value) {
        return new ElectricPotential(value, ElectricPotentialUnits.Kilovolt);
    }
    static FromMegavolt(value) {
        return new ElectricPotential(value, ElectricPotentialUnits.Megavolt);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricPotentialUnits.Volts:
                return this.value;
            case ElectricPotentialUnits.Microvolt:
                return (this.value) / 0.000001;
            case ElectricPotentialUnits.Kilovolt:
                return (this.value) / 1000;
            case ElectricPotentialUnits.Megavolt:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricPotentialUnits.Volts:
                return value;
            case ElectricPotentialUnits.Microvolt:
                return (value) * 0.000001;
            case ElectricPotentialUnits.Kilovolt:
                return (value) * 1000;
            case ElectricPotentialUnits.Megavolt:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ElectricPotentialUnits.Volts) {
        switch (toUnit) {
            case ElectricPotentialUnits.Volts:
                return this.Volts + ` V`;
            case ElectricPotentialUnits.Microvolt:
                return this.Microvolt + ` V`;
            case ElectricPotentialUnits.Kilovolt:
                return this.Kilovolt + ` V`;
            case ElectricPotentialUnits.Megavolt:
                return this.Megavolt + ` V`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricPotential = ElectricPotential;
//# sourceMappingURL=electricpotential.g.js.map