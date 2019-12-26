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
        this.faradsLazy = null;
        this.picofaradsLazy = null;
        this.nanofaradsLazy = null;
        this.microfaradsLazy = null;
        this.kilofaradsLazy = null;
        this.megafaradsLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Farads() {
        if (this.faradsLazy !== null) {
            return this.faradsLazy;
        }
        return this.faradsLazy = this.convertFromBase(CapacitanceUnits.Farads);
    }
    get Picofarads() {
        if (this.picofaradsLazy !== null) {
            return this.picofaradsLazy;
        }
        return this.picofaradsLazy = this.convertFromBase(CapacitanceUnits.Picofarads);
    }
    get Nanofarads() {
        if (this.nanofaradsLazy !== null) {
            return this.nanofaradsLazy;
        }
        return this.nanofaradsLazy = this.convertFromBase(CapacitanceUnits.Nanofarads);
    }
    get Microfarads() {
        if (this.microfaradsLazy !== null) {
            return this.microfaradsLazy;
        }
        return this.microfaradsLazy = this.convertFromBase(CapacitanceUnits.Microfarads);
    }
    get Kilofarads() {
        if (this.kilofaradsLazy !== null) {
            return this.kilofaradsLazy;
        }
        return this.kilofaradsLazy = this.convertFromBase(CapacitanceUnits.Kilofarads);
    }
    get Megafarads() {
        if (this.megafaradsLazy !== null) {
            return this.megafaradsLazy;
        }
        return this.megafaradsLazy = this.convertFromBase(CapacitanceUnits.Megafarads);
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
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case CapacitanceUnits.Farads:
                return value;
            case CapacitanceUnits.Picofarads:
                return (value) * 1e-12;
            case CapacitanceUnits.Nanofarads:
                return (value) * 1e-9;
            case CapacitanceUnits.Microfarads:
                return (value) * 0.000001;
            case CapacitanceUnits.Kilofarads:
                return (value) * 1000;
            case CapacitanceUnits.Megafarads:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = CapacitanceUnits.Farads) {
        switch (toUnit) {
            case CapacitanceUnits.Farads:
                return this.Farads + ` F`;
            case CapacitanceUnits.Picofarads:
                return this.Picofarads + ` F`;
            case CapacitanceUnits.Nanofarads:
                return this.Nanofarads + ` F`;
            case CapacitanceUnits.Microfarads:
                return this.Microfarads + ` F`;
            case CapacitanceUnits.Kilofarads:
                return this.Kilofarads + ` F`;
            case CapacitanceUnits.Megafarads:
                return this.Megafarads + ` F`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Capacitance = Capacitance;
//# sourceMappingURL=capacitance.g.js.map