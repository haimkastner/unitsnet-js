"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricConductanceUnits;
(function (ElectricConductanceUnits) {
    ElectricConductanceUnits[ElectricConductanceUnits["Siemens"] = 0] = "Siemens";
    ElectricConductanceUnits[ElectricConductanceUnits["Microsiemens"] = 1] = "Microsiemens";
})(ElectricConductanceUnits = exports.ElectricConductanceUnits || (exports.ElectricConductanceUnits = {}));
class ElectricConductance {
    constructor(value, fromUnit) {
        this.siemensLazy = null;
        this.microsiemensLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Siemens() {
        if (this.siemensLazy !== null) {
            return this.siemensLazy;
        }
        return this.siemensLazy = this.convertFromBase(ElectricConductanceUnits.Siemens);
    }
    get Microsiemens() {
        if (this.microsiemensLazy !== null) {
            return this.microsiemensLazy;
        }
        return this.microsiemensLazy = this.convertFromBase(ElectricConductanceUnits.Microsiemens);
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
    toString(toUnit = ElectricConductanceUnits.Siemens) {
        switch (toUnit) {
            case ElectricConductanceUnits.Siemens:
                return this.Siemens + ` S`;
            case ElectricConductanceUnits.Microsiemens:
                return this.Microsiemens + ` S`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricConductance = ElectricConductance;
//# sourceMappingURL=electricconductance.g.js.map