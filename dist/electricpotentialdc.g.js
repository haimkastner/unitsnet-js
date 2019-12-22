"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricPotentialDcUnits;
(function (ElectricPotentialDcUnits) {
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["VoltsDc"] = 0] = "VoltsDc";
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["Microvoltsdc"] = 1] = "Microvoltsdc";
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["Kilovoltsdc"] = 2] = "Kilovoltsdc";
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["Megavoltsdc"] = 3] = "Megavoltsdc";
})(ElectricPotentialDcUnits = exports.ElectricPotentialDcUnits || (exports.ElectricPotentialDcUnits = {}));
class ElectricPotentialDc {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltsDc() {
        return this.convertFromBase(ElectricPotentialDcUnits.VoltsDc);
    }
    get Microvoltsdc() {
        return this.convertFromBase(ElectricPotentialDcUnits.Microvoltsdc);
    }
    get Kilovoltsdc() {
        return this.convertFromBase(ElectricPotentialDcUnits.Kilovoltsdc);
    }
    get Megavoltsdc() {
        return this.convertFromBase(ElectricPotentialDcUnits.Megavoltsdc);
    }
    static FromVoltsDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.VoltsDc);
    }
    static FromMicrovoltsdc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.Microvoltsdc);
    }
    static FromKilovoltsdc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.Kilovoltsdc);
    }
    static FromMegavoltsdc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.Megavoltsdc);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricPotentialDcUnits.VoltsDc:
                return this.value;
            case ElectricPotentialDcUnits.Microvoltsdc:
                return (this.value) * 0.000001;
            case ElectricPotentialDcUnits.Kilovoltsdc:
                return (this.value) * 1000;
            case ElectricPotentialDcUnits.Megavoltsdc:
                return (this.value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricPotentialDcUnits.VoltsDc:
                return this.value;
            case ElectricPotentialDcUnits.Microvoltsdc:
                return (this.value) / 0.000001;
            case ElectricPotentialDcUnits.Kilovoltsdc:
                return (this.value) / 1000;
            case ElectricPotentialDcUnits.Megavoltsdc:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricPotentialDc = ElectricPotentialDc;
//# sourceMappingURL=electricpotentialdc.g.js.map