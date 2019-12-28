"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** VolumePerLengthUnits enumeration */
var VolumePerLengthUnits;
(function (VolumePerLengthUnits) {
    /** */
    VolumePerLengthUnits[VolumePerLengthUnits["CubicMetersPerMeter"] = 0] = "CubicMetersPerMeter";
    /** */
    VolumePerLengthUnits[VolumePerLengthUnits["LitersPerMeter"] = 1] = "LitersPerMeter";
    /** */
    VolumePerLengthUnits[VolumePerLengthUnits["OilBarrelsPerFoot"] = 2] = "OilBarrelsPerFoot";
})(VolumePerLengthUnits = exports.VolumePerLengthUnits || (exports.VolumePerLengthUnits = {}));
/** Volume, typically of fluid, that a container can hold within a unit of length. */
class VolumePerLength {
    /**
     * Create a new VolumePerLength.
     * @param value The value.
     * @param fromUnit The ‘VolumePerLength’ unit to create from.
     * The default unit is CubicMetersPerMeter
     */
    constructor(value, fromUnit = VolumePerLengthUnits.CubicMetersPerMeter) {
        this.cubicmeterspermeterLazy = null;
        this.literspermeterLazy = null;
        this.oilbarrelsperfootLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of VolumePerLength is CubicMetersPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get CubicMetersPerMeter() {
        if (this.cubicmeterspermeterLazy !== null) {
            return this.cubicmeterspermeterLazy;
        }
        return this.cubicmeterspermeterLazy = this.convertFromBase(VolumePerLengthUnits.CubicMetersPerMeter);
    }
    /** */
    get LitersPerMeter() {
        if (this.literspermeterLazy !== null) {
            return this.literspermeterLazy;
        }
        return this.literspermeterLazy = this.convertFromBase(VolumePerLengthUnits.LitersPerMeter);
    }
    /** */
    get OilBarrelsPerFoot() {
        if (this.oilbarrelsperfootLazy !== null) {
            return this.oilbarrelsperfootLazy;
        }
        return this.oilbarrelsperfootLazy = this.convertFromBase(VolumePerLengthUnits.OilBarrelsPerFoot);
    }
    /**
     * Create a new VolumePerLength instance from a CubicMetersPerMeter
     *
     * @param value The unit as CubicMetersPerMeter to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    static FromCubicMetersPerMeter(value) {
        return new VolumePerLength(value, VolumePerLengthUnits.CubicMetersPerMeter);
    }
    /**
     * Create a new VolumePerLength instance from a LitersPerMeter
     *
     * @param value The unit as LitersPerMeter to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    static FromLitersPerMeter(value) {
        return new VolumePerLength(value, VolumePerLengthUnits.LitersPerMeter);
    }
    /**
     * Create a new VolumePerLength instance from a OilBarrelsPerFoot
     *
     * @param value The unit as OilBarrelsPerFoot to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    static FromOilBarrelsPerFoot(value) {
        return new VolumePerLength(value, VolumePerLengthUnits.OilBarrelsPerFoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return this.value;
            case VolumePerLengthUnits.LitersPerMeter:
                return this.value * 1000;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return this.value * 1.91713408;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return value;
            case VolumePerLengthUnits.LitersPerMeter:
                return value / 1000;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return value / 1.91713408;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the VolumePerLength to string.
     * Note! the default format for VolumePerLength is CubicMetersPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the VolumePerLength.
     * @returns The string format of the VolumePerLength.
     */
    toString(toUnit = VolumePerLengthUnits.CubicMetersPerMeter) {
        switch (toUnit) {
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return this.CubicMetersPerMeter + ` m³/m`;
            case VolumePerLengthUnits.LitersPerMeter:
                return this.LitersPerMeter + ` l/m`;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return this.OilBarrelsPerFoot + ` bbl/ft`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given VolumePerLength are equals to the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns True if the given VolumePerLength are equal to the current VolumePerLength.
     */
    equals(volumePerLength) {
        return this.value === volumePerLength.BaseValue;
    }
    /**
     * Compare the given VolumePerLength against the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns 0 if they are equal, -1 if the current VolumePerLength is less then other, 1 if the current VolumePerLength is greater then other.
     */
    compareTo(volumePerLength) {
        if (this.value > volumePerLength.BaseValue)
            return 1;
        if (this.value < volumePerLength.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    add(volumePerLength) {
        return new VolumePerLength(this.value + volumePerLength.BaseValue);
    }
    /**
     * Subtract the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    subtract(volumePerLength) {
        return new VolumePerLength(this.value - volumePerLength.BaseValue);
    }
    /**
     * Multiply the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    multiply(volumePerLength) {
        return new VolumePerLength(this.value * volumePerLength.BaseValue);
    }
    /**
     * Divide the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    divide(volumePerLength) {
        return new VolumePerLength(this.value / volumePerLength.BaseValue);
    }
    /**
     * Modulo the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    modulo(volumePerLength) {
        return new VolumePerLength(this.value % volumePerLength.BaseValue);
    }
    /**
     * Pow the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    pow(volumePerLength) {
        return new VolumePerLength(this.value ** volumePerLength.BaseValue);
    }
}
exports.VolumePerLength = VolumePerLength;
//# sourceMappingURL=volumeperlength.g.js.map