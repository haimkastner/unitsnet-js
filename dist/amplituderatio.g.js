"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AmplitudeRatioUnits;
(function (AmplitudeRatioUnits) {
    AmplitudeRatioUnits[AmplitudeRatioUnits["DecibelVolts"] = 0] = "DecibelVolts";
    AmplitudeRatioUnits[AmplitudeRatioUnits["DecibelMicrovolts"] = 1] = "DecibelMicrovolts";
    AmplitudeRatioUnits[AmplitudeRatioUnits["DecibelMillivolts"] = 2] = "DecibelMillivolts";
    AmplitudeRatioUnits[AmplitudeRatioUnits["DecibelsUnloaded"] = 3] = "DecibelsUnloaded";
})(AmplitudeRatioUnits = exports.AmplitudeRatioUnits || (exports.AmplitudeRatioUnits = {}));
class AmplitudeRatio {
    constructor(value, fromUnit) {
        this.decibelvoltsLazy = null;
        this.decibelmicrovoltsLazy = null;
        this.decibelmillivoltsLazy = null;
        this.decibelsunloadedLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get DecibelVolts() {
        if (this.decibelvoltsLazy !== null) {
            return this.decibelvoltsLazy;
        }
        return this.decibelvoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelVolts);
    }
    get DecibelMicrovolts() {
        if (this.decibelmicrovoltsLazy !== null) {
            return this.decibelmicrovoltsLazy;
        }
        return this.decibelmicrovoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelMicrovolts);
    }
    get DecibelMillivolts() {
        if (this.decibelmillivoltsLazy !== null) {
            return this.decibelmillivoltsLazy;
        }
        return this.decibelmillivoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelMillivolts);
    }
    get DecibelsUnloaded() {
        if (this.decibelsunloadedLazy !== null) {
            return this.decibelsunloadedLazy;
        }
        return this.decibelsunloadedLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelsUnloaded);
    }
    static FromDecibelVolts(value) {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelVolts);
    }
    static FromDecibelMicrovolts(value) {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelMicrovolts);
    }
    static FromDecibelMillivolts(value) {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelMillivolts);
    }
    static FromDecibelsUnloaded(value) {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelsUnloaded);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AmplitudeRatioUnits.DecibelVolts:
                return this.value;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return this.value + 120;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return this.value + 60;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return this.value + 2.218487499;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case AmplitudeRatioUnits.DecibelVolts:
                return value;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return value - 120;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return value - 60;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return value - 2.218487499;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = AmplitudeRatioUnits.DecibelVolts) {
        switch (toUnit) {
            case AmplitudeRatioUnits.DecibelVolts:
                return this.DecibelVolts + ` dBV`;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return this.DecibelMicrovolts + ` dBµV`;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return this.DecibelMillivolts + ` dBmV`;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return this.DecibelsUnloaded + ` dBu`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.AmplitudeRatio = AmplitudeRatio;
//# sourceMappingURL=amplituderatio.g.js.map