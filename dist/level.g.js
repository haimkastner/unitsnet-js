"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** LevelUnits enumeration */
var LevelUnits;
(function (LevelUnits) {
    /** */
    LevelUnits[LevelUnits["Decibels"] = 0] = "Decibels";
    /** */
    LevelUnits[LevelUnits["Nepers"] = 1] = "Nepers";
})(LevelUnits = exports.LevelUnits || (exports.LevelUnits = {}));
/** Level is the logarithm of the ratio of a quantity Q to a reference value of that quantity, Q₀, expressed in dimensionless units. */
class Level {
    /**
     * Create a new Level.
     * @param value The value.
     * @param fromUnit The ‘Level’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.decibelsLazy = null;
        this.nepersLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Level is Decibel.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Decibels() {
        if (this.decibelsLazy !== null) {
            return this.decibelsLazy;
        }
        return this.decibelsLazy = this.convertFromBase(LevelUnits.Decibels);
    }
    /** */
    get Nepers() {
        if (this.nepersLazy !== null) {
            return this.nepersLazy;
        }
        return this.nepersLazy = this.convertFromBase(LevelUnits.Nepers);
    }
    /**
     * Create a new Level instance from a Decibels
     *
     * @param value The unit as Decibels to create a new Level from.
     * @returns The new Level instance.
     */
    static FromDecibels(value) {
        return new Level(value, LevelUnits.Decibels);
    }
    /**
     * Create a new Level instance from a Nepers
     *
     * @param value The unit as Nepers to create a new Level from.
     * @returns The new Level instance.
     */
    static FromNepers(value) {
        return new Level(value, LevelUnits.Nepers);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LevelUnits.Decibels:
                return this.value;
            case LevelUnits.Nepers:
                return 0.115129254 * this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LevelUnits.Decibels:
                return value;
            case LevelUnits.Nepers:
                return (1 / 0.115129254) * value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Level to string.
     * Note! the default format for Level is Decibels.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Level.
     * @returns The string format of the Level.
     */
    toString(toUnit = LevelUnits.Decibels) {
        switch (toUnit) {
            case LevelUnits.Decibels:
                return this.Decibels + ` dB`;
            case LevelUnits.Nepers:
                return this.Nepers + ` Np`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Level = Level;
//# sourceMappingURL=level.g.js.map