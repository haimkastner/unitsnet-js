"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricResistivityUnits;
(function (ElectricResistivityUnits) {
    ElectricResistivityUnits[ElectricResistivityUnits["OhmMeters"] = 0] = "OhmMeters";
    ElectricResistivityUnits[ElectricResistivityUnits["OhmsCentimeter"] = 1] = "OhmsCentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["PicoohmMeter"] = 2] = "PicoohmMeter";
    ElectricResistivityUnits[ElectricResistivityUnits["NanoohmMeter"] = 3] = "NanoohmMeter";
    ElectricResistivityUnits[ElectricResistivityUnits["MicroohmMeter"] = 4] = "MicroohmMeter";
    ElectricResistivityUnits[ElectricResistivityUnits["KiloohmMeter"] = 5] = "KiloohmMeter";
    ElectricResistivityUnits[ElectricResistivityUnits["MegaohmMeter"] = 6] = "MegaohmMeter";
    ElectricResistivityUnits[ElectricResistivityUnits["PicoohmCentimeter"] = 7] = "PicoohmCentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["NanoohmCentimeter"] = 8] = "NanoohmCentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["MicroohmCentimeter"] = 9] = "MicroohmCentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["KiloohmCentimeter"] = 10] = "KiloohmCentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["MegaohmCentimeter"] = 11] = "MegaohmCentimeter";
})(ElectricResistivityUnits = exports.ElectricResistivityUnits || (exports.ElectricResistivityUnits = {}));
class ElectricResistivity {
    constructor(value, fromUnit) {
        this.ohmmetersLazy = null;
        this.ohmscentimeterLazy = null;
        this.picoohmmeterLazy = null;
        this.nanoohmmeterLazy = null;
        this.microohmmeterLazy = null;
        this.kiloohmmeterLazy = null;
        this.megaohmmeterLazy = null;
        this.picoohmcentimeterLazy = null;
        this.nanoohmcentimeterLazy = null;
        this.microohmcentimeterLazy = null;
        this.kiloohmcentimeterLazy = null;
        this.megaohmcentimeterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get OhmMeters() {
        if (this.ohmmetersLazy !== null) {
            return this.ohmmetersLazy;
        }
        return this.ohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.OhmMeters);
    }
    get OhmsCentimeter() {
        if (this.ohmscentimeterLazy !== null) {
            return this.ohmscentimeterLazy;
        }
        return this.ohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.OhmsCentimeter);
    }
    get PicoohmMeter() {
        if (this.picoohmmeterLazy !== null) {
            return this.picoohmmeterLazy;
        }
        return this.picoohmmeterLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmMeter);
    }
    get NanoohmMeter() {
        if (this.nanoohmmeterLazy !== null) {
            return this.nanoohmmeterLazy;
        }
        return this.nanoohmmeterLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmMeter);
    }
    get MicroohmMeter() {
        if (this.microohmmeterLazy !== null) {
            return this.microohmmeterLazy;
        }
        return this.microohmmeterLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmMeter);
    }
    get KiloohmMeter() {
        if (this.kiloohmmeterLazy !== null) {
            return this.kiloohmmeterLazy;
        }
        return this.kiloohmmeterLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmMeter);
    }
    get MegaohmMeter() {
        if (this.megaohmmeterLazy !== null) {
            return this.megaohmmeterLazy;
        }
        return this.megaohmmeterLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmMeter);
    }
    get PicoohmCentimeter() {
        if (this.picoohmcentimeterLazy !== null) {
            return this.picoohmcentimeterLazy;
        }
        return this.picoohmcentimeterLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmCentimeter);
    }
    get NanoohmCentimeter() {
        if (this.nanoohmcentimeterLazy !== null) {
            return this.nanoohmcentimeterLazy;
        }
        return this.nanoohmcentimeterLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmCentimeter);
    }
    get MicroohmCentimeter() {
        if (this.microohmcentimeterLazy !== null) {
            return this.microohmcentimeterLazy;
        }
        return this.microohmcentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmCentimeter);
    }
    get KiloohmCentimeter() {
        if (this.kiloohmcentimeterLazy !== null) {
            return this.kiloohmcentimeterLazy;
        }
        return this.kiloohmcentimeterLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmCentimeter);
    }
    get MegaohmCentimeter() {
        if (this.megaohmcentimeterLazy !== null) {
            return this.megaohmcentimeterLazy;
        }
        return this.megaohmcentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmCentimeter);
    }
    static FromOhmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmMeters);
    }
    static FromOhmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmsCentimeter);
    }
    static FromPicoohmMeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmMeter);
    }
    static FromNanoohmMeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmMeter);
    }
    static FromMicroohmMeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmMeter);
    }
    static FromKiloohmMeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmMeter);
    }
    static FromMegaohmMeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.MegaohmMeter);
    }
    static FromPicoohmCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmCentimeter);
    }
    static FromNanoohmCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmCentimeter);
    }
    static FromMicroohmCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmCentimeter);
    }
    static FromKiloohmCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmCentimeter);
    }
    static FromMegaohmCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.MegaohmCentimeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricResistivityUnits.OhmMeters:
                return this.value;
            case ElectricResistivityUnits.OhmsCentimeter:
                return this.value * 100;
            case ElectricResistivityUnits.PicoohmMeter:
                return (this.value) / 1e-12;
            case ElectricResistivityUnits.NanoohmMeter:
                return (this.value) / 1e-9;
            case ElectricResistivityUnits.MicroohmMeter:
                return (this.value) / 0.000001;
            case ElectricResistivityUnits.KiloohmMeter:
                return (this.value) / 1000;
            case ElectricResistivityUnits.MegaohmMeter:
                return (this.value) / 1000000;
            case ElectricResistivityUnits.PicoohmCentimeter:
                return (this.value * 100) / 1e-12;
            case ElectricResistivityUnits.NanoohmCentimeter:
                return (this.value * 100) / 1e-9;
            case ElectricResistivityUnits.MicroohmCentimeter:
                return (this.value * 100) / 0.000001;
            case ElectricResistivityUnits.KiloohmCentimeter:
                return (this.value * 100) / 1000;
            case ElectricResistivityUnits.MegaohmCentimeter:
                return (this.value * 100) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricResistivityUnits.OhmMeters:
                return value;
            case ElectricResistivityUnits.OhmsCentimeter:
                return value / 100;
            case ElectricResistivityUnits.PicoohmMeter:
                return (value) * 1e-12;
            case ElectricResistivityUnits.NanoohmMeter:
                return (value) * 1e-9;
            case ElectricResistivityUnits.MicroohmMeter:
                return (value) * 0.000001;
            case ElectricResistivityUnits.KiloohmMeter:
                return (value) * 1000;
            case ElectricResistivityUnits.MegaohmMeter:
                return (value) * 1000000;
            case ElectricResistivityUnits.PicoohmCentimeter:
                return (value / 100) * 1e-12;
            case ElectricResistivityUnits.NanoohmCentimeter:
                return (value / 100) * 1e-9;
            case ElectricResistivityUnits.MicroohmCentimeter:
                return (value / 100) * 0.000001;
            case ElectricResistivityUnits.KiloohmCentimeter:
                return (value / 100) * 1000;
            case ElectricResistivityUnits.MegaohmCentimeter:
                return (value / 100) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ElectricResistivityUnits.OhmMeters) {
        switch (toUnit) {
            case ElectricResistivityUnits.OhmMeters:
                return this.OhmMeters + ` Ω·m`;
            case ElectricResistivityUnits.OhmsCentimeter:
                return this.OhmsCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.PicoohmMeter:
                return this.PicoohmMeter + ` Ω·m`;
            case ElectricResistivityUnits.NanoohmMeter:
                return this.NanoohmMeter + ` Ω·m`;
            case ElectricResistivityUnits.MicroohmMeter:
                return this.MicroohmMeter + ` Ω·m`;
            case ElectricResistivityUnits.KiloohmMeter:
                return this.KiloohmMeter + ` Ω·m`;
            case ElectricResistivityUnits.MegaohmMeter:
                return this.MegaohmMeter + ` Ω·m`;
            case ElectricResistivityUnits.PicoohmCentimeter:
                return this.PicoohmCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.NanoohmCentimeter:
                return this.NanoohmCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.MicroohmCentimeter:
                return this.MicroohmCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.KiloohmCentimeter:
                return this.KiloohmCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.MegaohmCentimeter:
                return this.MegaohmCentimeter + ` Ω·cm`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricResistivity = ElectricResistivity;
//# sourceMappingURL=electricresistivity.g.js.map