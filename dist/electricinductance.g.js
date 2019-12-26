"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricInductanceUnits;
(function (ElectricInductanceUnits) {
    ElectricInductanceUnits[ElectricInductanceUnits["Henries"] = 0] = "Henries";
    ElectricInductanceUnits[ElectricInductanceUnits["Nanohenries"] = 1] = "Nanohenries";
    ElectricInductanceUnits[ElectricInductanceUnits["Microhenries"] = 2] = "Microhenries";
})(ElectricInductanceUnits = exports.ElectricInductanceUnits || (exports.ElectricInductanceUnits = {}));
class ElectricInductance {
    constructor(value, fromUnit) {
        this.henriesLazy = null;
        this.nanohenriesLazy = null;
        this.microhenriesLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Henries() {
        if (this.henriesLazy !== null) {
            return this.henriesLazy;
        }
        return this.henriesLazy = this.convertFromBase(ElectricInductanceUnits.Henries);
    }
    get Nanohenries() {
        if (this.nanohenriesLazy !== null) {
            return this.nanohenriesLazy;
        }
        return this.nanohenriesLazy = this.convertFromBase(ElectricInductanceUnits.Nanohenries);
    }
    get Microhenries() {
        if (this.microhenriesLazy !== null) {
            return this.microhenriesLazy;
        }
        return this.microhenriesLazy = this.convertFromBase(ElectricInductanceUnits.Microhenries);
    }
    static FromHenries(value) {
        return new ElectricInductance(value, ElectricInductanceUnits.Henries);
    }
    static FromNanohenries(value) {
        return new ElectricInductance(value, ElectricInductanceUnits.Nanohenries);
    }
    static FromMicrohenries(value) {
        return new ElectricInductance(value, ElectricInductanceUnits.Microhenries);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricInductanceUnits.Henries:
                return this.value;
            case ElectricInductanceUnits.Nanohenries:
                return (this.value) / 1e-9;
            case ElectricInductanceUnits.Microhenries:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricInductanceUnits.Henries:
                return value;
            case ElectricInductanceUnits.Nanohenries:
                return (value) * 1e-9;
            case ElectricInductanceUnits.Microhenries:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricInductance = ElectricInductance;
//# sourceMappingURL=electricinductance.g.js.map