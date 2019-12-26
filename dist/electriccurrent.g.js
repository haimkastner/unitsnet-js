"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricCurrentUnits;
(function (ElectricCurrentUnits) {
    ElectricCurrentUnits[ElectricCurrentUnits["Amperes"] = 0] = "Amperes";
    ElectricCurrentUnits[ElectricCurrentUnits["Picoampere"] = 1] = "Picoampere";
    ElectricCurrentUnits[ElectricCurrentUnits["Nanoampere"] = 2] = "Nanoampere";
    ElectricCurrentUnits[ElectricCurrentUnits["Microampere"] = 3] = "Microampere";
    ElectricCurrentUnits[ElectricCurrentUnits["Centiampere"] = 4] = "Centiampere";
    ElectricCurrentUnits[ElectricCurrentUnits["Kiloampere"] = 5] = "Kiloampere";
    ElectricCurrentUnits[ElectricCurrentUnits["Megaampere"] = 6] = "Megaampere";
})(ElectricCurrentUnits = exports.ElectricCurrentUnits || (exports.ElectricCurrentUnits = {}));
class ElectricCurrent {
    constructor(value, fromUnit) {
        this.amperesLazy = null;
        this.picoampereLazy = null;
        this.nanoampereLazy = null;
        this.microampereLazy = null;
        this.centiampereLazy = null;
        this.kiloampereLazy = null;
        this.megaampereLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Amperes() {
        if (this.amperesLazy !== null) {
            return this.amperesLazy;
        }
        return this.amperesLazy = this.convertFromBase(ElectricCurrentUnits.Amperes);
    }
    get Picoampere() {
        if (this.picoampereLazy !== null) {
            return this.picoampereLazy;
        }
        return this.picoampereLazy = this.convertFromBase(ElectricCurrentUnits.Picoampere);
    }
    get Nanoampere() {
        if (this.nanoampereLazy !== null) {
            return this.nanoampereLazy;
        }
        return this.nanoampereLazy = this.convertFromBase(ElectricCurrentUnits.Nanoampere);
    }
    get Microampere() {
        if (this.microampereLazy !== null) {
            return this.microampereLazy;
        }
        return this.microampereLazy = this.convertFromBase(ElectricCurrentUnits.Microampere);
    }
    get Centiampere() {
        if (this.centiampereLazy !== null) {
            return this.centiampereLazy;
        }
        return this.centiampereLazy = this.convertFromBase(ElectricCurrentUnits.Centiampere);
    }
    get Kiloampere() {
        if (this.kiloampereLazy !== null) {
            return this.kiloampereLazy;
        }
        return this.kiloampereLazy = this.convertFromBase(ElectricCurrentUnits.Kiloampere);
    }
    get Megaampere() {
        if (this.megaampereLazy !== null) {
            return this.megaampereLazy;
        }
        return this.megaampereLazy = this.convertFromBase(ElectricCurrentUnits.Megaampere);
    }
    static FromAmperes(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Amperes);
    }
    static FromPicoampere(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Picoampere);
    }
    static FromNanoampere(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Nanoampere);
    }
    static FromMicroampere(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Microampere);
    }
    static FromCentiampere(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Centiampere);
    }
    static FromKiloampere(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Kiloampere);
    }
    static FromMegaampere(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Megaampere);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricCurrentUnits.Amperes:
                return this.value;
            case ElectricCurrentUnits.Picoampere:
                return (this.value) / 1e-12;
            case ElectricCurrentUnits.Nanoampere:
                return (this.value) / 1e-9;
            case ElectricCurrentUnits.Microampere:
                return (this.value) / 0.000001;
            case ElectricCurrentUnits.Centiampere:
                return (this.value) / 0.01;
            case ElectricCurrentUnits.Kiloampere:
                return (this.value) / 1000;
            case ElectricCurrentUnits.Megaampere:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricCurrentUnits.Amperes:
                return value;
            case ElectricCurrentUnits.Picoampere:
                return (value) * 1e-12;
            case ElectricCurrentUnits.Nanoampere:
                return (value) * 1e-9;
            case ElectricCurrentUnits.Microampere:
                return (value) * 0.000001;
            case ElectricCurrentUnits.Centiampere:
                return (value) * 0.01;
            case ElectricCurrentUnits.Kiloampere:
                return (value) * 1000;
            case ElectricCurrentUnits.Megaampere:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ElectricCurrentUnits.Amperes) {
        switch (toUnit) {
            case ElectricCurrentUnits.Amperes:
                return this.Amperes + ` A`;
            case ElectricCurrentUnits.Picoampere:
                return this.Picoampere + ` A`;
            case ElectricCurrentUnits.Nanoampere:
                return this.Nanoampere + ` A`;
            case ElectricCurrentUnits.Microampere:
                return this.Microampere + ` A`;
            case ElectricCurrentUnits.Centiampere:
                return this.Centiampere + ` A`;
            case ElectricCurrentUnits.Kiloampere:
                return this.Kiloampere + ` A`;
            case ElectricCurrentUnits.Megaampere:
                return this.Megaampere + ` A`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricCurrent = ElectricCurrent;
//# sourceMappingURL=electriccurrent.g.js.map