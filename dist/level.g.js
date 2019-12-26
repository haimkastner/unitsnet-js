"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LevelUnits;
(function (LevelUnits) {
    LevelUnits[LevelUnits["Decibels"] = 0] = "Decibels";
    LevelUnits[LevelUnits["Nepers"] = 1] = "Nepers";
})(LevelUnits = exports.LevelUnits || (exports.LevelUnits = {}));
class Level {
    constructor(value, fromUnit) {
        this.decibelsLazy = null;
        this.nepersLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Decibels() {
        if (this.decibelsLazy !== null) {
            return this.decibelsLazy;
        }
        return this.decibelsLazy = this.convertFromBase(LevelUnits.Decibels);
    }
    get Nepers() {
        if (this.nepersLazy !== null) {
            return this.nepersLazy;
        }
        return this.nepersLazy = this.convertFromBase(LevelUnits.Nepers);
    }
    static FromDecibels(value) {
        return new Level(value, LevelUnits.Decibels);
    }
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
}
exports.Level = Level;
//# sourceMappingURL=level.g.js.map