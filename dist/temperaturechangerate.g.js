"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TemperatureChangeRateUnits;
(function (TemperatureChangeRateUnits) {
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["DegreesCelsiusPerSecond"] = 0] = "DegreesCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["DegreesCelsiusPerMinute"] = 1] = "DegreesCelsiusPerMinute";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["NanodegreesCelsiusPerSecond"] = 2] = "NanodegreesCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["MicrodegreesCelsiusPerSecond"] = 3] = "MicrodegreesCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["CentidegreesCelsiusPerSecond"] = 4] = "CentidegreesCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["DecidegreesCelsiusPerSecond"] = 5] = "DecidegreesCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["DecadegreesCelsiusPerSecond"] = 6] = "DecadegreesCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["HectodegreesCelsiusPerSecond"] = 7] = "HectodegreesCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["KilodegreesCelsiusPerSecond"] = 8] = "KilodegreesCelsiusPerSecond";
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
    get NanodegreesCelsiusPerSecond() {
        if (this.nanodegreescelsiuspersecondLazy !== null) {
            return this.nanodegreescelsiuspersecondLazy;
        }
        return this.nanodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond);
    }
    get MicrodegreesCelsiusPerSecond() {
        if (this.microdegreescelsiuspersecondLazy !== null) {
            return this.microdegreescelsiuspersecondLazy;
        }
        return this.microdegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond);
    }
    get CentidegreesCelsiusPerSecond() {
        if (this.centidegreescelsiuspersecondLazy !== null) {
            return this.centidegreescelsiuspersecondLazy;
        }
        return this.centidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond);
    }
    get DecidegreesCelsiusPerSecond() {
        if (this.decidegreescelsiuspersecondLazy !== null) {
            return this.decidegreescelsiuspersecondLazy;
        }
        return this.decidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond);
    }
    get DecadegreesCelsiusPerSecond() {
        if (this.decadegreescelsiuspersecondLazy !== null) {
            return this.decadegreescelsiuspersecondLazy;
        }
        return this.decadegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond);
    }
    get HectodegreesCelsiusPerSecond() {
        if (this.hectodegreescelsiuspersecondLazy !== null) {
            return this.hectodegreescelsiuspersecondLazy;
        }
        return this.hectodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond);
    }
    get KilodegreesCelsiusPerSecond() {
        if (this.kilodegreescelsiuspersecondLazy !== null) {
            return this.kilodegreescelsiuspersecondLazy;
        }
        return this.kilodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond);
    }
    static FromDegreesCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }
    static FromDegreesCelsiusPerMinute(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }
    static FromNanodegreesCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond);
    }
    static FromMicrodegreesCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond);
    }
    static FromCentidegreesCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond);
    }
    static FromDecidegreesCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond);
    }
    static FromDecadegreesCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond);
    }
    static FromHectodegreesCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond);
    }
    static FromKilodegreesCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return this.value;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return this.value * 60;
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond:
                return (this.value) / 1e-9;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond:
                return (this.value) / 0.000001;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond:
                return (this.value) / 0.01;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond:
                return (this.value) / 0.1;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond:
                return (this.value) / 10;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond:
                return (this.value) / 100;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond:
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
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond:
                return (value) * 1e-9;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond:
                return (value) * 0.000001;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond:
                return (value) * 0.01;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond:
                return (value) * 0.1;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond:
                return (value) * 10;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond:
                return (value) * 100;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = TemperatureChangeRateUnits.DegreesCelsiusPerSecond) {
        switch (toUnit) {
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return this.DegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return this.DegreesCelsiusPerMinute + ` °C/min`;
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond:
                return this.NanodegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond:
                return this.MicrodegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond:
                return this.CentidegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond:
                return this.DecidegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond:
                return this.DecadegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond:
                return this.HectodegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond:
                return this.KilodegreesCelsiusPerSecond + ` °C/s`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.TemperatureChangeRate = TemperatureChangeRate;
//# sourceMappingURL=temperaturechangerate.g.js.map