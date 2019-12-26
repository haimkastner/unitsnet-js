"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricResistivityUnits enumeration */
var ElectricResistivityUnits;
(function (ElectricResistivityUnits) {
    /** */
    ElectricResistivityUnits[ElectricResistivityUnits["OhmMeters"] = 0] = "OhmMeters";
    /** */
    ElectricResistivityUnits[ElectricResistivityUnits["OhmsCentimeter"] = 1] = "OhmsCentimeter";
    /** */
    ElectricResistivityUnits[ElectricResistivityUnits["PicoohmMeters"] = 2] = "PicoohmMeters";
    /** */
    ElectricResistivityUnits[ElectricResistivityUnits["NanoohmMeters"] = 3] = "NanoohmMeters";
    /** */
    ElectricResistivityUnits[ElectricResistivityUnits["MicroohmMeters"] = 4] = "MicroohmMeters";
    /** */
    ElectricResistivityUnits[ElectricResistivityUnits["KiloohmMeters"] = 5] = "KiloohmMeters";
    /** */
    ElectricResistivityUnits[ElectricResistivityUnits["MegaohmMeters"] = 6] = "MegaohmMeters";
    /** */
    ElectricResistivityUnits[ElectricResistivityUnits["PicoohmsCentimeter"] = 7] = "PicoohmsCentimeter";
    /** */
    ElectricResistivityUnits[ElectricResistivityUnits["NanoohmsCentimeter"] = 8] = "NanoohmsCentimeter";
    /** */
    ElectricResistivityUnits[ElectricResistivityUnits["MicroohmsCentimeter"] = 9] = "MicroohmsCentimeter";
    /** */
    ElectricResistivityUnits[ElectricResistivityUnits["KiloohmsCentimeter"] = 10] = "KiloohmsCentimeter";
    /** */
    ElectricResistivityUnits[ElectricResistivityUnits["MegaohmsCentimeter"] = 11] = "MegaohmsCentimeter";
})(ElectricResistivityUnits = exports.ElectricResistivityUnits || (exports.ElectricResistivityUnits = {}));
/** Electrical resistivity (also known as resistivity, specific electrical resistance, or volume resistivity) is a fundamental property that quantifies how strongly a given material opposes the flow of electric current. */
class ElectricResistivity {
    /**
     * Create a new ElectricResistivity.
     * @param value The value.
     * @param fromUnit The ‘ElectricResistivity’ unit to create from.
     */
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
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricResistivity is OhmMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get OhmMeters() {
        if (this.ohmmetersLazy !== null) {
            return this.ohmmetersLazy;
        }
        return this.ohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.OhmMeters);
    }
    /** */
    get OhmsCentimeter() {
        if (this.ohmscentimeterLazy !== null) {
            return this.ohmscentimeterLazy;
        }
        return this.ohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.OhmsCentimeter);
    }
    /** */
    get PicoohmMeters() {
        if (this.picoohmmetersLazy !== null) {
            return this.picoohmmetersLazy;
        }
        return this.picoohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmMeters);
    }
    /** */
    get NanoohmMeters() {
        if (this.nanoohmmetersLazy !== null) {
            return this.nanoohmmetersLazy;
        }
        return this.nanoohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmMeters);
    }
    /** */
    get MicroohmMeters() {
        if (this.microohmmetersLazy !== null) {
            return this.microohmmetersLazy;
        }
        return this.microohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmMeters);
    }
    /** */
    get KiloohmMeters() {
        if (this.kiloohmmetersLazy !== null) {
            return this.kiloohmmetersLazy;
        }
        return this.kiloohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmMeters);
    }
    /** */
    get MegaohmMeters() {
        if (this.megaohmmetersLazy !== null) {
            return this.megaohmmetersLazy;
        }
        return this.megaohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmMeters);
    }
    /** */
    get PicoohmsCentimeter() {
        if (this.picoohmscentimeterLazy !== null) {
            return this.picoohmscentimeterLazy;
        }
        return this.picoohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmsCentimeter);
    }
    /** */
    get NanoohmsCentimeter() {
        if (this.nanoohmscentimeterLazy !== null) {
            return this.nanoohmscentimeterLazy;
        }
        return this.nanoohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmsCentimeter);
    }
    /** */
    get MicroohmsCentimeter() {
        if (this.microohmscentimeterLazy !== null) {
            return this.microohmscentimeterLazy;
        }
        return this.microohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmsCentimeter);
    }
    /** */
    get KiloohmsCentimeter() {
        if (this.kiloohmscentimeterLazy !== null) {
            return this.kiloohmscentimeterLazy;
        }
        return this.kiloohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmsCentimeter);
    }
    /** */
    get MegaohmsCentimeter() {
        if (this.megaohmscentimeterLazy !== null) {
            return this.megaohmscentimeterLazy;
        }
        return this.megaohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmsCentimeter);
    }
    /**
     * Create a new ElectricResistivity instance from a OhmMeters
     *
     * @param value The unit as OhmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromOhmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmMeters);
    }
    /**
     * Create a new ElectricResistivity instance from a OhmsCentimeter
     *
     * @param value The unit as OhmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromOhmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmsCentimeter);
    }
    /**
     * Create a new ElectricResistivity instance from a PicoohmMeters
     *
     * @param value The unit as PicoohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromPicoohmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmMeters);
    }
    /**
     * Create a new ElectricResistivity instance from a NanoohmMeters
     *
     * @param value The unit as NanoohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromNanoohmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmMeters);
    }
    /**
     * Create a new ElectricResistivity instance from a MicroohmMeters
     *
     * @param value The unit as MicroohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromMicroohmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmMeters);
    }
    /**
     * Create a new ElectricResistivity instance from a KiloohmMeters
     *
     * @param value The unit as KiloohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromKiloohmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmMeters);
    }
    /**
     * Create a new ElectricResistivity instance from a MegaohmMeters
     *
     * @param value The unit as MegaohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromMegaohmMeters(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.MegaohmMeters);
    }
    /**
     * Create a new ElectricResistivity instance from a PicoohmsCentimeter
     *
     * @param value The unit as PicoohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromPicoohmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmsCentimeter);
    }
    /**
     * Create a new ElectricResistivity instance from a NanoohmsCentimeter
     *
     * @param value The unit as NanoohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromNanoohmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmsCentimeter);
    }
    /**
     * Create a new ElectricResistivity instance from a MicroohmsCentimeter
     *
     * @param value The unit as MicroohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromMicroohmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmsCentimeter);
    }
    /**
     * Create a new ElectricResistivity instance from a KiloohmsCentimeter
     *
     * @param value The unit as KiloohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromKiloohmsCentimeter(value) {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmsCentimeter);
    }
    /**
     * Create a new ElectricResistivity instance from a MegaohmsCentimeter
     *
     * @param value The unit as MegaohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
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
    /**
     * Format the ElectricResistivity to string.
     * Note! the default format for ElectricResistivity is OhmMeters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricResistivity.
     * @returns The string format of the ElectricResistivity.
     */
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