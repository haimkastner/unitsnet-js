"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricConductivityUnits;
(function (ElectricConductivityUnits) {
    ElectricConductivityUnits[ElectricConductivityUnits["SiemensPerMeter"] = 0] = "SiemensPerMeter";
    ElectricConductivityUnits[ElectricConductivityUnits["SiemensPerInch"] = 1] = "SiemensPerInch";
    ElectricConductivityUnits[ElectricConductivityUnits["SiemensPerFoot"] = 2] = "SiemensPerFoot";
})(ElectricConductivityUnits = exports.ElectricConductivityUnits || (exports.ElectricConductivityUnits = {}));
class ElectricConductivity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get SiemensPerMeter() {
        return this.convertFromBase(ElectricConductivityUnits.SiemensPerMeter);
    }
    get SiemensPerInch() {
        return this.convertFromBase(ElectricConductivityUnits.SiemensPerInch);
    }
    get SiemensPerFoot() {
        return this.convertFromBase(ElectricConductivityUnits.SiemensPerFoot);
    }
    static FromSiemensPerMeter(value) {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerMeter);
    }
    static FromSiemensPerInch(value) {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerInch);
    }
    static FromSiemensPerFoot(value) {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerFoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricConductivityUnits.SiemensPerMeter:
                return this.value;
            case ElectricConductivityUnits.SiemensPerInch:
                return this.value * 3.937007874015748e1;
            case ElectricConductivityUnits.SiemensPerFoot:
                return this.value * 3.2808398950131234;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricConductivityUnits.SiemensPerMeter:
                return this.value;
            case ElectricConductivityUnits.SiemensPerInch:
                return this.value / 3.937007874015748e1;
            case ElectricConductivityUnits.SiemensPerFoot:
                return this.value / 3.2808398950131234;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricConductivity = ElectricConductivity;
//# sourceMappingURL=electricconductivity.g.js.map