"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricResistivityUnits;
(function (ElectricResistivityUnits) {
    ElectricResistivityUnits[ElectricResistivityUnits["OhmMeters"] = 0] = "OhmMeters";
    ElectricResistivityUnits[ElectricResistivityUnits["OhmsCentimeter"] = 1] = "OhmsCentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["PicoohmMeters"] = 2] = "PicoohmMeters";
    ElectricResistivityUnits[ElectricResistivityUnits["NanoohmMeters"] = 3] = "NanoohmMeters";
    ElectricResistivityUnits[ElectricResistivityUnits["MicroohmMeters"] = 4] = "MicroohmMeters";
    ElectricResistivityUnits[ElectricResistivityUnits["KiloohmMeters"] = 5] = "KiloohmMeters";
    ElectricResistivityUnits[ElectricResistivityUnits["MegaohmMeters"] = 6] = "MegaohmMeters";
    ElectricResistivityUnits[ElectricResistivityUnits["PicoohmsCentimeter"] = 7] = "PicoohmsCentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["NanoohmsCentimeter"] = 8] = "NanoohmsCentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["MicroohmsCentimeter"] = 9] = "MicroohmsCentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["KiloohmsCentimeter"] = 10] = "KiloohmsCentimeter";
    ElectricResistivityUnits[ElectricResistivityUnits["MegaohmsCentimeter"] = 11] = "MegaohmsCentimeter";
})(ElectricResistivityUnits = exports.ElectricResistivityUnits || (exports.ElectricResistivityUnits = {}));
class ElectricResistivity {
    constructor(value, fromUnit) {
        this.ohmmetersLazy = null;
        this.ohmscentimeterLazy = null;
        this.picoohmmetersLazy = null;
        this.nanoohmmetersLazy = null;
        this.microohmmetersLazy = null;
        this.kiloohmmetersLazy = null;
        this.megaohmmetersLazy = null;
        this.picoohmscentimeterLazy = null;
        this.nanoohmscentimeterLazy = null;
        this.microohmscentimeterLazy = null;
        this.kiloohmscentimeterLazy = null;
        this.megaohmscentimeterLazy = null;
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
    get PicoohmMeters() {
        if (this.picoohmmetersLazy !== null) {
            return this.picoohmmetersLazy;
        }
        return this.picoohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmMeters);
    }
    get NanoohmMeters() {
        if (this.nanoohmmetersLazy !== null) {
            return this.nanoohmmetersLazy;
        }
        return this.nanoohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmMeters);
    }
    get MicroohmMeters() {
        if (this.microohmmetersLazy !== null) {
            return this.microohmmetersLazy;
        }
        return this.microohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmMeters);
    }
    get KiloohmMeters() {
        if (this.kiloohmmetersLazy !== null) {
            return this.kiloohmmetersLazy;
        }
        return this.kiloohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmMeters);
    }
    get MegaohmMeters() {
        if (this.megaohmmetersLazy !== null) {
            return this.megaohmmetersLazy;
        }
        return this.megaohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmMeters);
    }
    get PicoohmsCentimeter() {
        if (this.picoohmscentimeterLazy !== null) {
            return this.picoohmscentimeterLazy;
        }
        return this.picoohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmsCentimeter);
    }
    get NanoohmsCentimeter() {
        if (this.nanoohmscentimeterLazy !== null) {
            return this.nanoohmscentimeterLazy;
        }
        return this.nanoohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmsCentimeter);
    }
    get MicroohmsCentimeter() {
        if (this.microohmscentimeterLazy !== null) {
            return this.microohmscentimeterLazy;
        }
        return this.microohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmsCentimeter);
    }
    get KiloohmsCentimeter() {
        if (this.kiloohmscentimeterLazy !== null) {
            return this.kiloohmscentimeterLazy;
        }
        return this.kiloohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmsCentimeter);
    }
    get MegaohmsCentimeter() {
        if (this.megaohmscentimeterLazy !== null) {
            return this.megaohmscentimeterLazy;
        }
        return this.megaohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmsCentimeter);
    }
    static FromOhmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmMeters);
    }
    static FromOhmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmsCentimeter);
    }
    static FromPicoohmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmMeters);
    }
    static FromNanoohmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmMeters);
    }
    static FromMicroohmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmMeters);
    }
    static FromKiloohmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmMeters);
    }
    static FromMegaohmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.MegaohmMeters);
    }
    static FromPicoohmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmsCentimeter);
    }
    static FromNanoohmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmsCentimeter);
    }
    static FromMicroohmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmsCentimeter);
    }
    static FromKiloohmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmsCentimeter);
    }
    static FromMegaohmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.MegaohmsCentimeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricResistivityUnits.OhmMeters:
                return this.value;
            case ElectricResistivityUnits.OhmsCentimeter:
                return this.value * 100;
            case ElectricResistivityUnits.PicoohmMeters:
                return (this.value) / 1e-12;
            case ElectricResistivityUnits.NanoohmMeters:
                return (this.value) / 1e-9;
            case ElectricResistivityUnits.MicroohmMeters:
                return (this.value) / 0.000001;
            case ElectricResistivityUnits.KiloohmMeters:
                return (this.value) / 1000;
            case ElectricResistivityUnits.MegaohmMeters:
                return (this.value) / 1000000;
            case ElectricResistivityUnits.PicoohmsCentimeter:
                return (this.value * 100) / 1e-12;
            case ElectricResistivityUnits.NanoohmsCentimeter:
                return (this.value * 100) / 1e-9;
            case ElectricResistivityUnits.MicroohmsCentimeter:
                return (this.value * 100) / 0.000001;
            case ElectricResistivityUnits.KiloohmsCentimeter:
                return (this.value * 100) / 1000;
            case ElectricResistivityUnits.MegaohmsCentimeter:
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
            case ElectricResistivityUnits.PicoohmMeters:
                return (value) * 1e-12;
            case ElectricResistivityUnits.NanoohmMeters:
                return (value) * 1e-9;
            case ElectricResistivityUnits.MicroohmMeters:
                return (value) * 0.000001;
            case ElectricResistivityUnits.KiloohmMeters:
                return (value) * 1000;
            case ElectricResistivityUnits.MegaohmMeters:
                return (value) * 1000000;
            case ElectricResistivityUnits.PicoohmsCentimeter:
                return (value / 100) * 1e-12;
            case ElectricResistivityUnits.NanoohmsCentimeter:
                return (value / 100) * 1e-9;
            case ElectricResistivityUnits.MicroohmsCentimeter:
                return (value / 100) * 0.000001;
            case ElectricResistivityUnits.KiloohmsCentimeter:
                return (value / 100) * 1000;
            case ElectricResistivityUnits.MegaohmsCentimeter:
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
            case ElectricResistivityUnits.PicoohmMeters:
                return this.PicoohmMeters + ` Ω·m`;
            case ElectricResistivityUnits.NanoohmMeters:
                return this.NanoohmMeters + ` Ω·m`;
            case ElectricResistivityUnits.MicroohmMeters:
                return this.MicroohmMeters + ` Ω·m`;
            case ElectricResistivityUnits.KiloohmMeters:
                return this.KiloohmMeters + ` Ω·m`;
            case ElectricResistivityUnits.MegaohmMeters:
                return this.MegaohmMeters + ` Ω·m`;
            case ElectricResistivityUnits.PicoohmsCentimeter:
                return this.PicoohmsCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.NanoohmsCentimeter:
                return this.NanoohmsCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.MicroohmsCentimeter:
                return this.MicroohmsCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.KiloohmsCentimeter:
                return this.KiloohmsCentimeter + ` Ω·cm`;
            case ElectricResistivityUnits.MegaohmsCentimeter:
                return this.MegaohmsCentimeter + ` Ω·cm`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricResistivity = ElectricResistivity;
//# sourceMappingURL=electricresistivity.g.js.map