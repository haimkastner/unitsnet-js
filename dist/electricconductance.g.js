"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricConductanceUnits;
(function (ElectricConductanceUnits) {
    ElectricConductanceUnits[ElectricConductanceUnits["Siemens"] = 0] = "Siemens";
    ElectricConductanceUnits[ElectricConductanceUnits["Microsiemens"] = 1] = "Microsiemens";
})(ElectricConductanceUnits = exports.ElectricConductanceUnits || (exports.ElectricConductanceUnits = {}));
class ElectricConductance {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Siemens() {
        return this.convertFromBase(ElectricConductanceUnits.Siemens);
    }
    get Microsiemens() {
        return this.convertFromBase(ElectricConductanceUnits.Microsiemens);
    }
    static FromSiemens(value) {
        return new ElectricConductance(value, ElectricConductanceUnits.Siemens);
    }
    static FromMicrosiemens(value) {
        return new ElectricConductance(value, ElectricConductanceUnits.Microsiemens);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricConductanceUnits.Siemens:
                return this.value;
            case ElectricConductanceUnits.Microsiemens:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricConductanceUnits.Siemens:
                return value;
            case ElectricConductanceUnits.Microsiemens:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricConductance = ElectricConductance;
//# sourceMappingURL=electricconductance.g.js.map