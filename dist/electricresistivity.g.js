"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricResistivityUnits;
(function (ElectricResistivityUnits) {
    ElectricResistivityUnits[ElectricResistivityUnits["OhmMeters"] = 0] = "OhmMeters";
    ElectricResistivityUnits[ElectricResistivityUnits["OhmsCentimeter"] = 1] = "OhmsCentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["Picoohmmeters"] = 2] = "Picoohmmeters";
    ElectricResistivityUnits[ElectricResistivityUnits["Nanoohmmeters"] = 3] = "Nanoohmmeters";
    ElectricResistivityUnits[ElectricResistivityUnits["Microohmmeters"] = 4] = "Microohmmeters";
    ElectricResistivityUnits[ElectricResistivityUnits["Kiloohmmeters"] = 5] = "Kiloohmmeters";
    ElectricResistivityUnits[ElectricResistivityUnits["Megaohmmeters"] = 6] = "Megaohmmeters";
    ElectricResistivityUnits[ElectricResistivityUnits["Picoohmscentimeter"] = 7] = "Picoohmscentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["Nanoohmscentimeter"] = 8] = "Nanoohmscentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["Microohmscentimeter"] = 9] = "Microohmscentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["Kiloohmscentimeter"] = 10] = "Kiloohmscentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["Megaohmscentimeter"] = 11] = "Megaohmscentimeter";
})(ElectricResistivityUnits = exports.ElectricResistivityUnits || (exports.ElectricResistivityUnits = {}));
class ElectricResistivity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get OhmMeters() {
        return this.convertFromBase(ElectricResistivityUnits.OhmMeters);
    }
    get OhmsCentimeter() {
        return this.convertFromBase(ElectricResistivityUnits.OhmsCentimeter);
    }
    get Picoohmmeters() {
        return this.convertFromBase(ElectricResistivityUnits.Picoohmmeters);
    }
    get Nanoohmmeters() {
        return this.convertFromBase(ElectricResistivityUnits.Nanoohmmeters);
    }
    get Microohmmeters() {
        return this.convertFromBase(ElectricResistivityUnits.Microohmmeters);
    }
    get Kiloohmmeters() {
        return this.convertFromBase(ElectricResistivityUnits.Kiloohmmeters);
    }
    get Megaohmmeters() {
        return this.convertFromBase(ElectricResistivityUnits.Megaohmmeters);
    }
    get Picoohmscentimeter() {
        return this.convertFromBase(ElectricResistivityUnits.Picoohmscentimeter);
    }
    get Nanoohmscentimeter() {
        return this.convertFromBase(ElectricResistivityUnits.Nanoohmscentimeter);
    }
    get Microohmscentimeter() {
        return this.convertFromBase(ElectricResistivityUnits.Microohmscentimeter);
    }
    get Kiloohmscentimeter() {
        return this.convertFromBase(ElectricResistivityUnits.Kiloohmscentimeter);
    }
    get Megaohmscentimeter() {
        return this.convertFromBase(ElectricResistivityUnits.Megaohmscentimeter);
    }
    static FromOhmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmMeters);
    }
    static FromOhmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmsCentimeter);
    }
    static FromPicoohmmeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.Picoohmmeters);
    }
    static FromNanoohmmeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.Nanoohmmeters);
    }
    static FromMicroohmmeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.Microohmmeters);
    }
    static FromKiloohmmeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.Kiloohmmeters);
    }
    static FromMegaohmmeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.Megaohmmeters);
    }
    static FromPicoohmscentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.Picoohmscentimeter);
    }
    static FromNanoohmscentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.Nanoohmscentimeter);
    }
    static FromMicroohmscentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.Microohmscentimeter);
    }
    static FromKiloohmscentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.Kiloohmscentimeter);
    }
    static FromMegaohmscentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.Megaohmscentimeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricResistivityUnits.OhmMeters:
                return this.value;
            case ElectricResistivityUnits.OhmsCentimeter:
                return this.value / 100;
            case ElectricResistivityUnits.Picoohmmeters:
                return (this.value) * 1e-12;
            case ElectricResistivityUnits.Nanoohmmeters:
                return (this.value) * 1e-9;
            case ElectricResistivityUnits.Microohmmeters:
                return (this.value) * 0.000001;
            case ElectricResistivityUnits.Kiloohmmeters:
                return (this.value) * 1000;
            case ElectricResistivityUnits.Megaohmmeters:
                return (this.value) * 1000000;
            case ElectricResistivityUnits.Picoohmscentimeter:
                return (this.value * 100) * 1e-12;
            case ElectricResistivityUnits.Nanoohmscentimeter:
                return (this.value * 100) * 1e-9;
            case ElectricResistivityUnits.Microohmscentimeter:
                return (this.value * 100) * 0.000001;
            case ElectricResistivityUnits.Kiloohmscentimeter:
                return (this.value * 100) * 1000;
            case ElectricResistivityUnits.Megaohmscentimeter:
                return (this.value * 100) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricResistivityUnits.OhmMeters:
                return this.value;
            case ElectricResistivityUnits.OhmsCentimeter:
                return this.value * 100;
            case ElectricResistivityUnits.Picoohmmeters:
                return (this.value) / 1e-12;
            case ElectricResistivityUnits.Nanoohmmeters:
                return (this.value) / 1e-9;
            case ElectricResistivityUnits.Microohmmeters:
                return (this.value) / 0.000001;
            case ElectricResistivityUnits.Kiloohmmeters:
                return (this.value) / 1000;
            case ElectricResistivityUnits.Megaohmmeters:
                return (this.value) / 1000000;
            case ElectricResistivityUnits.Picoohmscentimeter:
                return (this.value / 100) / 1e-12;
            case ElectricResistivityUnits.Nanoohmscentimeter:
                return (this.value / 100) / 1e-9;
            case ElectricResistivityUnits.Microohmscentimeter:
                return (this.value / 100) / 0.000001;
            case ElectricResistivityUnits.Kiloohmscentimeter:
                return (this.value / 100) / 1000;
            case ElectricResistivityUnits.Megaohmscentimeter:
                return (this.value / 100) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricResistivity = ElectricResistivity;
//# sourceMappingURL=electricresistivity.g.js.map