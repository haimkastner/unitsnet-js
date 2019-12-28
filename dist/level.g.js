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
     * The default unit is Decibels
     */
    constructor(value, fromUnit = LevelUnits.Decibels) {
        this.decibelsLazy = null;
        this.nepersLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Level is Decibels.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given Level are equals to the current Level.
     * @param level The other Level.
     * @returns True if the given Level are equal to the current Level.
     */
    equals(level) {
        return this.value === level.BaseValue;
    }
    /**
     * Compare the given Level against the current Level.
     * @param level The other Level.
     * @returns 0 if they are equal, -1 if the current Level is less then other, 1 if the current Level is greater then other.
     */
    compareTo(level) {
        if (this.value > level.BaseValue)
            return 1;
        if (this.value < level.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    add(level) {
        return new Level(this.value + level.BaseValue);
    }
    /**
     * Subtract the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    subtract(level) {
        return new Level(this.value - level.BaseValue);
    }
    /**
     * Multiply the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    multiply(level) {
        return new Level(this.value * level.BaseValue);
    }
    /**
     * Divide the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    divide(level) {
        return new Level(this.value / level.BaseValue);
    }
    /**
     * Modulo the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    modulo(level) {
        return new Level(this.value % level.BaseValue);
    }
    /**
     * Pow the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    pow(level) {
        return new Level(this.value ** level.BaseValue);
    }
}
exports.Level = Level;
//# sourceMappingURL=level.g.js.map