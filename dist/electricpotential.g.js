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
        this.value = this.convertToBase(value, fromUnit);
    }
    get Volts() {
        return this.convertFromBase(ElectricPotentialUnits.Volts);
    }
    get Microvolts() {
        return this.convertFromBase(ElectricPotentialUnits.Microvolts);
    }
    get Kilovolts() {
        return this.convertFromBase(ElectricPotentialUnits.Kilovolts);
    }
    get Megavolts() {
        return this.convertFromBase(ElectricPotentialUnits.Megavolts);
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
                return (this.value) * 0.000001;
            case ElectricPotentialUnits.Kilovolts:
                return (this.value) * 1000;
            case ElectricPotentialUnits.Megavolts:
                return (this.value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
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
}
exports.ElectricPotential = ElectricPotential;
//# sourceMappingURL=electricpotential.g.js.map