"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricInductanceUnits;
(function (ElectricInductanceUnits) {
    ElectricInductanceUnits[ElectricInductanceUnits["Henries"] = 0] = "Henries";
    ElectricInductanceUnits[ElectricInductanceUnits["Nanohenry"] = 1] = "Nanohenry";
    ElectricInductanceUnits[ElectricInductanceUnits["Microhenry"] = 2] = "Microhenry";
})(ElectricInductanceUnits = exports.ElectricInductanceUnits || (exports.ElectricInductanceUnits = {}));
class ElectricInductance {
    constructor(value, fromUnit) {
        this.henriesLazy = null;
        this.nanohenryLazy = null;
        this.microhenryLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Henries() {
        if (this.henriesLazy !== null) {
            return this.henriesLazy;
        }
        return this.henriesLazy = this.convertFromBase(ElectricInductanceUnits.Henries);
    }
    get Nanohenry() {
        if (this.nanohenryLazy !== null) {
            return this.nanohenryLazy;
        }
        return this.nanohenryLazy = this.convertFromBase(ElectricInductanceUnits.Nanohenry);
    }
    get Microhenry() {
        if (this.microhenryLazy !== null) {
            return this.microhenryLazy;
        }
        return this.microhenryLazy = this.convertFromBase(ElectricInductanceUnits.Microhenry);
    }
    static FromHenries(value) {
        return new ElectricInductance(value, ElectricInductanceUnits.Henries);
    }
    static FromNanohenry(value) {
        return new ElectricInductance(value, ElectricInductanceUnits.Nanohenry);
    }
    static FromMicrohenry(value) {
        return new ElectricInductance(value, ElectricInductanceUnits.Microhenry);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricInductanceUnits.Henries:
                return this.value;
            case ElectricInductanceUnits.Nanohenry:
                return (this.value) / 1e-9;
            case ElectricInductanceUnits.Microhenry:
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
            case ElectricInductanceUnits.Nanohenry:
                return (value) * 1e-9;
            case ElectricInductanceUnits.Microhenry:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ElectricInductanceUnits.Henries) {
        switch (toUnit) {
            case ElectricInductanceUnits.Henries:
                return this.Henries + ` H`;
            case ElectricInductanceUnits.Nanohenry:
                return this.Nanohenry + ` H`;
            case ElectricInductanceUnits.Microhenry:
                return this.Microhenry + ` H`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricInductance = ElectricInductance;
//# sourceMappingURL=electricinductance.g.js.map