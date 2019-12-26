"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TemperatureChangeRateUnits;
(function (TemperatureChangeRateUnits) {
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["DegreesCelsiusPerSecond"] = 0] = "DegreesCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["DegreesCelsiusPerMinute"] = 1] = "DegreesCelsiusPerMinute";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["Nanodegreescelsiuspersecond"] = 2] = "Nanodegreescelsiuspersecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["Microdegreescelsiuspersecond"] = 3] = "Microdegreescelsiuspersecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["Centidegreescelsiuspersecond"] = 4] = "Centidegreescelsiuspersecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["Decidegreescelsiuspersecond"] = 5] = "Decidegreescelsiuspersecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["Decadegreescelsiuspersecond"] = 6] = "Decadegreescelsiuspersecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["Hectodegreescelsiuspersecond"] = 7] = "Hectodegreescelsiuspersecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["Kilodegreescelsiuspersecond"] = 8] = "Kilodegreescelsiuspersecond";
})(TemperatureChangeRateUnits = exports.TemperatureChangeRateUnits || (exports.TemperatureChangeRateUnits = {}));
class TemperatureChangeRate {
    constructor(value, fromUnit) {
        this.degreescelsiuspersecondLazy = null;
        this.degreescelsiusperminuteLazy = null;
        this.nanodegreescelsiuspersecondLazy = null;
        this.microdegreescelsiuspersecondLazy = null;
        this.centidegreescelsiuspersecondLazy = null;
        this.decidegreescelsiuspersecondLazy = null;
        this.decadegreescelsiuspersecondLazy = null;
        this.hectodegreescelsiuspersecondLazy = null;
        this.kilodegreescelsiuspersecondLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get DegreesCelsiusPerSecond() {
        if (this.degreescelsiuspersecondLazy !== null) {
            return this.degreescelsiuspersecondLazy;
        }
        return this.degreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }
    get DegreesCelsiusPerMinute() {
        if (this.degreescelsiusperminuteLazy !== null) {
            return this.degreescelsiusperminuteLazy;
        }
        return this.degreescelsiusperminuteLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }
    get Nanodegreescelsiuspersecond() {
        if (this.nanodegreescelsiuspersecondLazy !== null) {
            return this.nanodegreescelsiuspersecondLazy;
        }
        return this.nanodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Nanodegreescelsiuspersecond);
    }
    get Microdegreescelsiuspersecond() {
        if (this.microdegreescelsiuspersecondLazy !== null) {
            return this.microdegreescelsiuspersecondLazy;
        }
        return this.microdegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Microdegreescelsiuspersecond);
    }
    get Centidegreescelsiuspersecond() {
        if (this.centidegreescelsiuspersecondLazy !== null) {
            return this.centidegreescelsiuspersecondLazy;
        }
        return this.centidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Centidegreescelsiuspersecond);
    }
    get Decidegreescelsiuspersecond() {
        if (this.decidegreescelsiuspersecondLazy !== null) {
            return this.decidegreescelsiuspersecondLazy;
        }
        return this.decidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Decidegreescelsiuspersecond);
    }
    get Decadegreescelsiuspersecond() {
        if (this.decadegreescelsiuspersecondLazy !== null) {
            return this.decadegreescelsiuspersecondLazy;
        }
        return this.decadegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Decadegreescelsiuspersecond);
    }
    get Hectodegreescelsiuspersecond() {
        if (this.hectodegreescelsiuspersecondLazy !== null) {
            return this.hectodegreescelsiuspersecondLazy;
        }
        return this.hectodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Hectodegreescelsiuspersecond);
    }
    get Kilodegreescelsiuspersecond() {
        if (this.kilodegreescelsiuspersecondLazy !== null) {
            return this.kilodegreescelsiuspersecondLazy;
        }
        return this.kilodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Kilodegreescelsiuspersecond);
    }
    static FromDegreesCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }
    static FromDegreesCelsiusPerMinute(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }
    static FromNanodegreescelsiuspersecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Nanodegreescelsiuspersecond);
    }
    static FromMicrodegreescelsiuspersecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Microdegreescelsiuspersecond);
    }
    static FromCentidegreescelsiuspersecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Centidegreescelsiuspersecond);
    }
    static FromDecidegreescelsiuspersecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Decidegreescelsiuspersecond);
    }
    static FromDecadegreescelsiuspersecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Decadegreescelsiuspersecond);
    }
    static FromHectodegreescelsiuspersecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Hectodegreescelsiuspersecond);
    }
    static FromKilodegreescelsiuspersecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Kilodegreescelsiuspersecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return this.value;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return this.value * 60;
            case TemperatureChangeRateUnits.Nanodegreescelsiuspersecond:
                return (this.value) / 1e-9;
            case TemperatureChangeRateUnits.Microdegreescelsiuspersecond:
                return (this.value) / 0.000001;
            case TemperatureChangeRateUnits.Centidegreescelsiuspersecond:
                return (this.value) / 0.01;
            case TemperatureChangeRateUnits.Decidegreescelsiuspersecond:
                return (this.value) / 0.1;
            case TemperatureChangeRateUnits.Decadegreescelsiuspersecond:
                return (this.value) / 10;
            case TemperatureChangeRateUnits.Hectodegreescelsiuspersecond:
                return (this.value) / 100;
            case TemperatureChangeRateUnits.Kilodegreescelsiuspersecond:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return value;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return value / 60;
            case TemperatureChangeRateUnits.Nanodegreescelsiuspersecond:
                return (value) * 1e-9;
            case TemperatureChangeRateUnits.Microdegreescelsiuspersecond:
                return (value) * 0.000001;
            case TemperatureChangeRateUnits.Centidegreescelsiuspersecond:
                return (value) * 0.01;
            case TemperatureChangeRateUnits.Decidegreescelsiuspersecond:
                return (value) * 0.1;
            case TemperatureChangeRateUnits.Decadegreescelsiuspersecond:
                return (value) * 10;
            case TemperatureChangeRateUnits.Hectodegreescelsiuspersecond:
                return (value) * 100;
            case TemperatureChangeRateUnits.Kilodegreescelsiuspersecond:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.TemperatureChangeRate = TemperatureChangeRate;
//# sourceMappingURL=temperaturechangerate.g.js.map