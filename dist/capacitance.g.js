"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CapacitanceUnits;
(function (CapacitanceUnits) {
    CapacitanceUnits[CapacitanceUnits["Farads"] = 0] = "Farads";
    CapacitanceUnits[CapacitanceUnits["Picofarads"] = 1] = "Picofarads";
    CapacitanceUnits[CapacitanceUnits["Nanofarads"] = 2] = "Nanofarads";
    CapacitanceUnits[CapacitanceUnits["Microfarads"] = 3] = "Microfarads";
    CapacitanceUnits[CapacitanceUnits["Kilofarads"] = 4] = "Kilofarads";
    CapacitanceUnits[CapacitanceUnits["Megafarads"] = 5] = "Megafarads";
})(CapacitanceUnits = exports.CapacitanceUnits || (exports.CapacitanceUnits = {}));
class Capacitance {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Farads() {
        return this.convertFromBase(CapacitanceUnits.Farads);
    }
    get Picofarads() {
        return this.convertFromBase(CapacitanceUnits.Picofarads);
    }
    get Nanofarads() {
        return this.convertFromBase(CapacitanceUnits.Nanofarads);
    }
    get Microfarads() {
        return this.convertFromBase(CapacitanceUnits.Microfarads);
    }
    get Kilofarads() {
        return this.convertFromBase(CapacitanceUnits.Kilofarads);
    }
    get Megafarads() {
        return this.convertFromBase(CapacitanceUnits.Megafarads);
    }
    static FromFarads(value) {
        return new Capacitance(value, CapacitanceUnits.Farads);
    }
    static FromPicofarads(value) {
        return new Capacitance(value, CapacitanceUnits.Picofarads);
    }
    static FromNanofarads(value) {
        return new Capacitance(value, CapacitanceUnits.Nanofarads);
    }
    static FromMicrofarads(value) {
        return new Capacitance(value, CapacitanceUnits.Microfarads);
    }
    static FromKilofarads(value) {
        return new Capacitance(value, CapacitanceUnits.Kilofarads);
    }
    static FromMegafarads(value) {
        return new Capacitance(value, CapacitanceUnits.Megafarads);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case CapacitanceUnits.Farads:
                return this.value;
            case CapacitanceUnits.Picofarads:
                return (this.value) * 1e-12;
            case CapacitanceUnits.Nanofarads:
                return (this.value) * 1e-9;
            case CapacitanceUnits.Microfarads:
                return (this.value) * 0.000001;
            case CapacitanceUnits.Kilofarads:
                return (this.value) * 1000;
            case CapacitanceUnits.Megafarads:
                return (this.value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case CapacitanceUnits.Farads:
                return this.value;
            case CapacitanceUnits.Picofarads:
                return (this.value) / 1e-12;
            case CapacitanceUnits.Nanofarads:
                return (this.value) / 1e-9;
            case CapacitanceUnits.Microfarads:
                return (this.value) / 0.000001;
            case CapacitanceUnits.Kilofarads:
                return (this.value) / 1000;
            case CapacitanceUnits.Megafarads:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Capacitance = Capacitance;
//# sourceMappingURL=capacitance.g.js.map