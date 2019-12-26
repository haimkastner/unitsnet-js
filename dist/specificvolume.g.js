"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** SpecificVolumeUnits enumeration */
var SpecificVolumeUnits;
(function (SpecificVolumeUnits) {
    /** */
    SpecificVolumeUnits[SpecificVolumeUnits["CubicMetersPerKilogram"] = 0] = "CubicMetersPerKilogram";
    /** */
    SpecificVolumeUnits[SpecificVolumeUnits["CubicFeetPerPound"] = 1] = "CubicFeetPerPound";
})(SpecificVolumeUnits = exports.SpecificVolumeUnits || (exports.SpecificVolumeUnits = {}));
/** In thermodynamics, the specific volume of a substance is the ratio of the substance's volume to its mass. It is the reciprocal of density and an intrinsic property of matter as well. */
class SpecificVolume {
    /**
     * Create a new SpecificVolume.
     * @param value The value.
     * @param fromUnit The ‘SpecificVolume’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.cubicmetersperkilogramLazy = null;
        this.cubicfeetperpoundLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of SpecificVolume is CubicMeterPerKilogram.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get CubicMetersPerKilogram() {
        if (this.cubicmetersperkilogramLazy !== null) {
            return this.cubicmetersperkilogramLazy;
        }
        return this.cubicmetersperkilogramLazy = this.convertFromBase(SpecificVolumeUnits.CubicMetersPerKilogram);
    }
    /** */
    get CubicFeetPerPound() {
        if (this.cubicfeetperpoundLazy !== null) {
            return this.cubicfeetperpoundLazy;
        }
        return this.cubicfeetperpoundLazy = this.convertFromBase(SpecificVolumeUnits.CubicFeetPerPound);
    }
    /**
     * Create a new SpecificVolume instance from a CubicMetersPerKilogram
     *
     * @param value The unit as CubicMetersPerKilogram to create a new SpecificVolume from.
     * @returns The new SpecificVolume instance.
     */
    static FromCubicMetersPerKilogram(value) {
        return new SpecificVolume(value, SpecificVolumeUnits.CubicMetersPerKilogram);
    }
    /**
     * Create a new SpecificVolume instance from a CubicFeetPerPound
     *
     * @param value The unit as CubicFeetPerPound to create a new SpecificVolume from.
     * @returns The new SpecificVolume instance.
     */
    static FromCubicFeetPerPound(value) {
        return new SpecificVolume(value, SpecificVolumeUnits.CubicFeetPerPound);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return this.value;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return this.value * 16.01846353;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return value;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return value / 16.01846353;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the SpecificVolume to string.
     * Note! the default format for SpecificVolume is CubicMetersPerKilogram.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SpecificVolume.
     * @returns The string format of the SpecificVolume.
     */
    toString(toUnit = SpecificVolumeUnits.CubicMetersPerKilogram) {
        switch (toUnit) {
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return this.CubicMetersPerKilogram + ` m³/kg`;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return this.CubicFeetPerPound + ` ft³/lb`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.SpecificVolume = SpecificVolume;
//# sourceMappingURL=specificvolume.g.js.map