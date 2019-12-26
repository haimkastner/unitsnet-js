"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricPotentialUnits;
(function (ElectricPotentialUnits) {
    ElectricPotentialUnits[ElectricPotentialUnits["Volts"] = 0] = "Volts";
    ElectricPotentialUnits[ElectricPotentialUnits["Microvolts"] = 1] = "Microvolts";
    ElectricPotentialUnits[ElectricPotentialUnits["Kilovolts"] = 2] = "Kilovolts";
    ElectricPotentialUnits[ElectricPotentialUnits["Megavolts"] = 3] = "Megavolts";
})(ElectricPotentialUnits = exports.ElectricPotentialUnits || (exports.ElectricPotentialUnits = {}));
class ElectricPotential {
    constructor(value, fromUnit) {
        this.voltsLazy = null;
        this.microvoltsLazy = null;
        this.kilovoltsLazy = null;
        this.megavoltsLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Volts() {
        if (this.voltsLazy !== null) {
            return this.voltsLazy;
        }
        return this.voltsLazy = this.convertFromBase(ElectricPotentialUnits.Volts);
    }
    get Microvolts() {
        if (this.microvoltsLazy !== null) {
            return this.microvoltsLazy;
        }
        return this.microvoltsLazy = this.convertFromBase(ElectricPotentialUnits.Microvolts);
    }
    get Kilovolts() {
        if (this.kilovoltsLazy !== null) {
            return this.kilovoltsLazy;
        }
        return this.kilovoltsLazy = this.convertFromBase(ElectricPotentialUnits.Kilovolts);
    }
    get Megavolts() {
        if (this.megavoltsLazy !== null) {
            return this.megavoltsLazy;
        }
        return this.megavoltsLazy = this.convertFromBase(ElectricPotentialUnits.Megavolts);
    }
    static FromVolts(value) {
        return new ElectricPotential(value, ElectricPotentialUnits.Volts);
    }
    static FromMicrovolts(value) {
        return new ElectricPotential(value, ElectricPotentialUnits.Microvolts);
    }
    static FromKilovolts(value) {
        return new ElectricPotential(value, ElectricPotentialUnits.Kilovolts);
    }
    static FromMegavolts(value) {
        return new ElectricPotential(value, ElectricPotentialUnits.Megavolts);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricPotentialUnits.Volts:
                return this.value;
            case ElectricPotentialUnits.Microvolts:
                return (this.value) / 0.000001;
            case ElectricPotentialUnits.Kilovolts:
                return (this.value) / 1000;
            case ElectricPotentialUnits.Megavolts:
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
            case ElectricPotentialUnits.Microvolts:
                return (value) * 0.000001;
            case ElectricPotentialUnits.Kilovolts:
                return (value) * 1000;
            case ElectricPotentialUnits.Megavolts:
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
            case ElectricPotentialUnits.Microvolts:
                return this.Microvolts + ` V`;
            case ElectricPotentialUnits.Kilovolts:
                return this.Kilovolts + ` V`;
            case ElectricPotentialUnits.Megavolts:
                return this.Megavolts + ` V`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricPotential = ElectricPotential;
//# sourceMappingURL=electricpotential.g.js.map