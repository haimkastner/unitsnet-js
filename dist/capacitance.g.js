"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CapacitanceUnits;
(function (CapacitanceUnits) {
    CapacitanceUnits[CapacitanceUnits["Farads"] = 0] = "Farads";
    CapacitanceUnits[CapacitanceUnits["Picofarad"] = 1] = "Picofarad";
    CapacitanceUnits[CapacitanceUnits["Nanofarad"] = 2] = "Nanofarad";
    CapacitanceUnits[CapacitanceUnits["Microfarad"] = 3] = "Microfarad";
    CapacitanceUnits[CapacitanceUnits["Kilofarad"] = 4] = "Kilofarad";
    CapacitanceUnits[CapacitanceUnits["Megafarad"] = 5] = "Megafarad";
})(CapacitanceUnits = exports.CapacitanceUnits || (exports.CapacitanceUnits = {}));
class Capacitance {
    constructor(value, fromUnit) {
        this.faradsLazy = null;
        this.picofaradLazy = null;
        this.nanofaradLazy = null;
        this.microfaradLazy = null;
        this.kilofaradLazy = null;
        this.megafaradLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Farads() {
        if (this.faradsLazy !== null) {
            return this.faradsLazy;
        }
        return this.faradsLazy = this.convertFromBase(CapacitanceUnits.Farads);
    }
    get Picofarad() {
        if (this.picofaradLazy !== null) {
            return this.picofaradLazy;
        }
        return this.picofaradLazy = this.convertFromBase(CapacitanceUnits.Picofarad);
    }
    get Nanofarad() {
        if (this.nanofaradLazy !== null) {
            return this.nanofaradLazy;
        }
        return this.nanofaradLazy = this.convertFromBase(CapacitanceUnits.Nanofarad);
    }
    get Microfarad() {
        if (this.microfaradLazy !== null) {
            return this.microfaradLazy;
        }
        return this.microfaradLazy = this.convertFromBase(CapacitanceUnits.Microfarad);
    }
    get Kilofarad() {
        if (this.kilofaradLazy !== null) {
            return this.kilofaradLazy;
        }
        return this.kilofaradLazy = this.convertFromBase(CapacitanceUnits.Kilofarad);
    }
    get Megafarad() {
        if (this.megafaradLazy !== null) {
            return this.megafaradLazy;
        }
        return this.megafaradLazy = this.convertFromBase(CapacitanceUnits.Megafarad);
    }
    static FromFarads(value) {
        return new Capacitance(value, CapacitanceUnits.Farads);
    }
    static FromPicofarad(value) {
        return new Capacitance(value, CapacitanceUnits.Picofarad);
    }
    static FromNanofarad(value) {
        return new Capacitance(value, CapacitanceUnits.Nanofarad);
    }
    static FromMicrofarad(value) {
        return new Capacitance(value, CapacitanceUnits.Microfarad);
    }
    static FromKilofarad(value) {
        return new Capacitance(value, CapacitanceUnits.Kilofarad);
    }
    static FromMegafarad(value) {
        return new Capacitance(value, CapacitanceUnits.Megafarad);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case CapacitanceUnits.Farads:
                return this.value;
            case CapacitanceUnits.Picofarad:
                return (this.value) / 1e-12;
            case CapacitanceUnits.Nanofarad:
                return (this.value) / 1e-9;
            case CapacitanceUnits.Microfarad:
                return (this.value) / 0.000001;
            case CapacitanceUnits.Kilofarad:
                return (this.value) / 1000;
            case CapacitanceUnits.Megafarad:
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
            case CapacitanceUnits.Picofarad:
                return (value) * 1e-12;
            case CapacitanceUnits.Nanofarad:
                return (value) * 1e-9;
            case CapacitanceUnits.Microfarad:
                return (value) * 0.000001;
            case CapacitanceUnits.Kilofarad:
                return (value) * 1000;
            case CapacitanceUnits.Megafarad:
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
            case CapacitanceUnits.Picofarad:
                return this.Picofarad + ` F`;
            case CapacitanceUnits.Nanofarad:
                return this.Nanofarad + ` F`;
            case CapacitanceUnits.Microfarad:
                return this.Microfarad + ` F`;
            case CapacitanceUnits.Kilofarad:
                return this.Kilofarad + ` F`;
            case CapacitanceUnits.Megafarad:
                return this.Megafarad + ` F`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Capacitance = Capacitance;
//# sourceMappingURL=capacitance.g.js.map