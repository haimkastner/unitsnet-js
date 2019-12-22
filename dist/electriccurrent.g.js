"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricCurrentUnits;
(function (ElectricCurrentUnits) {
    ElectricCurrentUnits[ElectricCurrentUnits["Amperes"] = 0] = "Amperes";
    ElectricCurrentUnits[ElectricCurrentUnits["Picoamperes"] = 1] = "Picoamperes";
    ElectricCurrentUnits[ElectricCurrentUnits["Nanoamperes"] = 2] = "Nanoamperes";
    ElectricCurrentUnits[ElectricCurrentUnits["Microamperes"] = 3] = "Microamperes";
    ElectricCurrentUnits[ElectricCurrentUnits["Centiamperes"] = 4] = "Centiamperes";
    ElectricCurrentUnits[ElectricCurrentUnits["Kiloamperes"] = 5] = "Kiloamperes";
    ElectricCurrentUnits[ElectricCurrentUnits["Megaamperes"] = 6] = "Megaamperes";
})(ElectricCurrentUnits = exports.ElectricCurrentUnits || (exports.ElectricCurrentUnits = {}));
class ElectricCurrent {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Amperes() {
        return this.convertFromBase(ElectricCurrentUnits.Amperes);
    }
    get Picoamperes() {
        return this.convertFromBase(ElectricCurrentUnits.Picoamperes);
    }
    get Nanoamperes() {
        return this.convertFromBase(ElectricCurrentUnits.Nanoamperes);
    }
    get Microamperes() {
        return this.convertFromBase(ElectricCurrentUnits.Microamperes);
    }
    get Centiamperes() {
        return this.convertFromBase(ElectricCurrentUnits.Centiamperes);
    }
    get Kiloamperes() {
        return this.convertFromBase(ElectricCurrentUnits.Kiloamperes);
    }
    get Megaamperes() {
        return this.convertFromBase(ElectricCurrentUnits.Megaamperes);
    }
    static FromAmperes(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Amperes);
    }
    static FromPicoamperes(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Picoamperes);
    }
    static FromNanoamperes(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Nanoamperes);
    }
    static FromMicroamperes(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Microamperes);
    }
    static FromCentiamperes(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Centiamperes);
    }
    static FromKiloamperes(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Kiloamperes);
    }
    static FromMegaamperes(value) {
        return new ElectricCurrent(value, ElectricCurrentUnits.Megaamperes);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricCurrentUnits.Amperes:
                return this.value;
            case ElectricCurrentUnits.Picoamperes:
                return (this.value) * 1e-12;
            case ElectricCurrentUnits.Nanoamperes:
                return (this.value) * 1e-9;
            case ElectricCurrentUnits.Microamperes:
                return (this.value) * 0.000001;
            case ElectricCurrentUnits.Centiamperes:
                return (this.value) * 0.01;
            case ElectricCurrentUnits.Kiloamperes:
                return (this.value) * 1000;
            case ElectricCurrentUnits.Megaamperes:
                return (this.value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricCurrentUnits.Amperes:
                return this.value;
            case ElectricCurrentUnits.Picoamperes:
                return (this.value) / 1e-12;
            case ElectricCurrentUnits.Nanoamperes:
                return (this.value) / 1e-9;
            case ElectricCurrentUnits.Microamperes:
                return (this.value) / 0.000001;
            case ElectricCurrentUnits.Centiamperes:
                return (this.value) / 0.01;
            case ElectricCurrentUnits.Kiloamperes:
                return (this.value) / 1000;
            case ElectricCurrentUnits.Megaamperes:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricCurrent = ElectricCurrent;
//# sourceMappingURL=electriccurrent.g.js.map