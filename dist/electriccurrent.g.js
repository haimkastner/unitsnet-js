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
        this.amperesLazy = null;
        this.picoamperesLazy = null;
        this.nanoamperesLazy = null;
        this.microamperesLazy = null;
        this.centiamperesLazy = null;
        this.kiloamperesLazy = null;
        this.megaamperesLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Amperes() {
        if (this.amperesLazy !== null) {
            return this.amperesLazy;
        }
        return this.amperesLazy = this.convertFromBase(ElectricCurrentUnits.Amperes);
    }
    get Picoamperes() {
        if (this.picoamperesLazy !== null) {
            return this.picoamperesLazy;
        }
        return this.picoamperesLazy = this.convertFromBase(ElectricCurrentUnits.Picoamperes);
    }
    get Nanoamperes() {
        if (this.nanoamperesLazy !== null) {
            return this.nanoamperesLazy;
        }
        return this.nanoamperesLazy = this.convertFromBase(ElectricCurrentUnits.Nanoamperes);
    }
    get Microamperes() {
        if (this.microamperesLazy !== null) {
            return this.microamperesLazy;
        }
        return this.microamperesLazy = this.convertFromBase(ElectricCurrentUnits.Microamperes);
    }
    get Centiamperes() {
        if (this.centiamperesLazy !== null) {
            return this.centiamperesLazy;
        }
        return this.centiamperesLazy = this.convertFromBase(ElectricCurrentUnits.Centiamperes);
    }
    get Kiloamperes() {
        if (this.kiloamperesLazy !== null) {
            return this.kiloamperesLazy;
        }
        return this.kiloamperesLazy = this.convertFromBase(ElectricCurrentUnits.Kiloamperes);
    }
    get Megaamperes() {
        if (this.megaamperesLazy !== null) {
            return this.megaamperesLazy;
        }
        return this.megaamperesLazy = this.convertFromBase(ElectricCurrentUnits.Megaamperes);
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
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricCurrentUnits.Amperes:
                return value;
            case ElectricCurrentUnits.Picoamperes:
                return (value) * 1e-12;
            case ElectricCurrentUnits.Nanoamperes:
                return (value) * 1e-9;
            case ElectricCurrentUnits.Microamperes:
                return (value) * 0.000001;
            case ElectricCurrentUnits.Centiamperes:
                return (value) * 0.01;
            case ElectricCurrentUnits.Kiloamperes:
                return (value) * 1000;
            case ElectricCurrentUnits.Megaamperes:
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
            case ElectricCurrentUnits.Picoamperes:
                return this.Picoamperes + ` A`;
            case ElectricCurrentUnits.Nanoamperes:
                return this.Nanoamperes + ` A`;
            case ElectricCurrentUnits.Microamperes:
                return this.Microamperes + ` A`;
            case ElectricCurrentUnits.Centiamperes:
                return this.Centiamperes + ` A`;
            case ElectricCurrentUnits.Kiloamperes:
                return this.Kiloamperes + ` A`;
            case ElectricCurrentUnits.Megaamperes:
                return this.Megaamperes + ` A`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricCurrent = ElectricCurrent;
//# sourceMappingURL=electriccurrent.g.js.map