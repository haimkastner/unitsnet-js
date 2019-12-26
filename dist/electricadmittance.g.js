"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricAdmittanceUnits;
(function (ElectricAdmittanceUnits) {
    ElectricAdmittanceUnits[ElectricAdmittanceUnits["Siemens"] = 0] = "Siemens";
    ElectricAdmittanceUnits[ElectricAdmittanceUnits["Nanosiemens"] = 1] = "Nanosiemens";
    ElectricAdmittanceUnits[ElectricAdmittanceUnits["Microsiemens"] = 2] = "Microsiemens";
})(ElectricAdmittanceUnits = exports.ElectricAdmittanceUnits || (exports.ElectricAdmittanceUnits = {}));
class ElectricAdmittance {
    constructor(value, fromUnit) {
        this.siemensLazy = null;
        this.nanosiemensLazy = null;
        this.microsiemensLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Siemens() {
        if (this.siemensLazy !== null) {
            return this.siemensLazy;
        }
        return this.siemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Siemens);
    }
    get Nanosiemens() {
        if (this.nanosiemensLazy !== null) {
            return this.nanosiemensLazy;
        }
        return this.nanosiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Nanosiemens);
    }
    get Microsiemens() {
        if (this.microsiemensLazy !== null) {
            return this.microsiemensLazy;
        }
        return this.microsiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Microsiemens);
    }
    static FromSiemens(value) {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Siemens);
    }
    static FromNanosiemens(value) {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Nanosiemens);
    }
    static FromMicrosiemens(value) {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Microsiemens);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricAdmittanceUnits.Siemens:
                return this.value;
            case ElectricAdmittanceUnits.Nanosiemens:
                return (this.value) / 1e-9;
            case ElectricAdmittanceUnits.Microsiemens:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricAdmittanceUnits.Siemens:
                return value;
            case ElectricAdmittanceUnits.Nanosiemens:
                return (value) * 1e-9;
            case ElectricAdmittanceUnits.Microsiemens:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ElectricAdmittanceUnits.Siemens) {
        switch (toUnit) {
            case ElectricAdmittanceUnits.Siemens:
                return this.Siemens + ` S`;
            case ElectricAdmittanceUnits.Nanosiemens:
                return this.Nanosiemens + ` S`;
            case ElectricAdmittanceUnits.Microsiemens:
                return this.Microsiemens + ` S`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricAdmittance = ElectricAdmittance;
//# sourceMappingURL=electricadmittance.g.js.map