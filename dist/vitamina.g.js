"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** VitaminAUnits enumeration */
var VitaminAUnits;
(function (VitaminAUnits) {
    /** */
    VitaminAUnits[VitaminAUnits["InternationalUnits"] = 0] = "InternationalUnits";
})(VitaminAUnits = exports.VitaminAUnits || (exports.VitaminAUnits = {}));
/** Vitamin A: 1 IU is the biological equivalent of 0.3 µg retinol, or of 0.6 µg beta-carotene. */
class VitaminA {
    /**
     * Create a new VitaminA.
     * @param value The value.
     * @param fromUnit The ‘VitaminA’ unit to create from.
     * The default unit is InternationalUnits
     */
    constructor(value, fromUnit = VitaminAUnits.InternationalUnits) {
        this.internationalunitsLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of VitaminA is InternationalUnits.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get InternationalUnits() {
        if (this.internationalunitsLazy !== null) {
            return this.internationalunitsLazy;
        }
        return this.internationalunitsLazy = this.convertFromBase(VitaminAUnits.InternationalUnits);
    }
    /**
     * Create a new VitaminA instance from a InternationalUnits
     *
     * @param value The unit as InternationalUnits to create a new VitaminA from.
     * @returns The new VitaminA instance.
     */
    static FromInternationalUnits(value) {
        return new VitaminA(value, VitaminAUnits.InternationalUnits);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case VitaminAUnits.InternationalUnits:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case VitaminAUnits.InternationalUnits:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the VitaminA to string.
     * Note! the default format for VitaminA is InternationalUnits.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the VitaminA.
     * @returns The string format of the VitaminA.
     */
    toString(toUnit = VitaminAUnits.InternationalUnits) {
        switch (toUnit) {
            case VitaminAUnits.InternationalUnits:
                return this.InternationalUnits + ` IU`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given VitaminA are equals to the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns True if the given VitaminA are equal to the current VitaminA.
     */
    equals(vitaminA) {
        return this.value === vitaminA.BaseValue;
    }
    /**
     * Compare the given VitaminA against the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns 0 if they are equal, -1 if the current VitaminA is less then other, 1 if the current VitaminA is greater then other.
     */
    compareTo(vitaminA) {
        if (this.value > vitaminA.BaseValue)
            return 1;
        if (this.value < vitaminA.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    add(vitaminA) {
        return new VitaminA(this.value + vitaminA.BaseValue);
    }
    /**
     * Subtract the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    subtract(vitaminA) {
        return new VitaminA(this.value - vitaminA.BaseValue);
    }
    /**
     * Multiply the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    multiply(vitaminA) {
        return new VitaminA(this.value * vitaminA.BaseValue);
    }
    /**
     * Divide the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    divide(vitaminA) {
        return new VitaminA(this.value / vitaminA.BaseValue);
    }
    /**
     * Modulo the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    modulo(vitaminA) {
        return new VitaminA(this.value % vitaminA.BaseValue);
    }
    /**
     * Pow the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    pow(vitaminA) {
        return new VitaminA(this.value ** vitaminA.BaseValue);
    }
}
exports.VitaminA = VitaminA;
//# sourceMappingURL=vitamina.g.js.map