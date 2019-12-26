"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TemperatureChangeRateUnits;
(function (TemperatureChangeRateUnits) {
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["DegreesCelsiusPerSecond"] = 0] = "DegreesCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["DegreesCelsiusPerMinute"] = 1] = "DegreesCelsiusPerMinute";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["NanodegreeCelsiusPerSecond"] = 2] = "NanodegreeCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["MicrodegreeCelsiusPerSecond"] = 3] = "MicrodegreeCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["CentidegreeCelsiusPerSecond"] = 4] = "CentidegreeCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["DecidegreeCelsiusPerSecond"] = 5] = "DecidegreeCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["DecadegreeCelsiusPerSecond"] = 6] = "DecadegreeCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["HectodegreeCelsiusPerSecond"] = 7] = "HectodegreeCelsiusPerSecond";
    TemperatureChangeRateUnits[TemperatureChangeRateUnits["KilodegreeCelsiusPerSecond"] = 8] = "KilodegreeCelsiusPerSecond";
})(TemperatureChangeRateUnits = exports.TemperatureChangeRateUnits || (exports.TemperatureChangeRateUnits = {}));
class TemperatureChangeRate {
    constructor(value, fromUnit) {
        this.degreescelsiuspersecondLazy = null;
        this.degreescelsiusperminuteLazy = null;
        this.nanodegreecelsiuspersecondLazy = null;
        this.microdegreecelsiuspersecondLazy = null;
        this.centidegreecelsiuspersecondLazy = null;
        this.decidegreecelsiuspersecondLazy = null;
        this.decadegreecelsiuspersecondLazy = null;
        this.hectodegreecelsiuspersecondLazy = null;
        this.kilodegreecelsiuspersecondLazy = null;
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
    get NanodegreeCelsiusPerSecond() {
        if (this.nanodegreecelsiuspersecondLazy !== null) {
            return this.nanodegreecelsiuspersecondLazy;
        }
        return this.nanodegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.NanodegreeCelsiusPerSecond);
    }
    get MicrodegreeCelsiusPerSecond() {
        if (this.microdegreecelsiuspersecondLazy !== null) {
            return this.microdegreecelsiuspersecondLazy;
        }
        return this.microdegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.MicrodegreeCelsiusPerSecond);
    }
    get CentidegreeCelsiusPerSecond() {
        if (this.centidegreecelsiuspersecondLazy !== null) {
            return this.centidegreecelsiuspersecondLazy;
        }
        return this.centidegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.CentidegreeCelsiusPerSecond);
    }
    get DecidegreeCelsiusPerSecond() {
        if (this.decidegreecelsiuspersecondLazy !== null) {
            return this.decidegreecelsiuspersecondLazy;
        }
        return this.decidegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DecidegreeCelsiusPerSecond);
    }
    get DecadegreeCelsiusPerSecond() {
        if (this.decadegreecelsiuspersecondLazy !== null) {
            return this.decadegreecelsiuspersecondLazy;
        }
        return this.decadegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DecadegreeCelsiusPerSecond);
    }
    get HectodegreeCelsiusPerSecond() {
        if (this.hectodegreecelsiuspersecondLazy !== null) {
            return this.hectodegreecelsiuspersecondLazy;
        }
        return this.hectodegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.HectodegreeCelsiusPerSecond);
    }
    get KilodegreeCelsiusPerSecond() {
        if (this.kilodegreecelsiuspersecondLazy !== null) {
            return this.kilodegreecelsiuspersecondLazy;
        }
        return this.kilodegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.KilodegreeCelsiusPerSecond);
    }
    static FromDegreesCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }
    static FromDegreesCelsiusPerMinute(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }
    static FromNanodegreeCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.NanodegreeCelsiusPerSecond);
    }
    static FromMicrodegreeCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.MicrodegreeCelsiusPerSecond);
    }
    static FromCentidegreeCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.CentidegreeCelsiusPerSecond);
    }
    static FromDecidegreeCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DecidegreeCelsiusPerSecond);
    }
    static FromDecadegreeCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DecadegreeCelsiusPerSecond);
    }
    static FromHectodegreeCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.HectodegreeCelsiusPerSecond);
    }
    static FromKilodegreeCelsiusPerSecond(value) {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.KilodegreeCelsiusPerSecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return this.value;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return this.value * 60;
            case TemperatureChangeRateUnits.NanodegreeCelsiusPerSecond:
                return (this.value) / 1e-9;
            case TemperatureChangeRateUnits.MicrodegreeCelsiusPerSecond:
                return (this.value) / 0.000001;
            case TemperatureChangeRateUnits.CentidegreeCelsiusPerSecond:
                return (this.value) / 0.01;
            case TemperatureChangeRateUnits.DecidegreeCelsiusPerSecond:
                return (this.value) / 0.1;
            case TemperatureChangeRateUnits.DecadegreeCelsiusPerSecond:
                return (this.value) / 10;
            case TemperatureChangeRateUnits.HectodegreeCelsiusPerSecond:
                return (this.value) / 100;
            case TemperatureChangeRateUnits.KilodegreeCelsiusPerSecond:
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
            case TemperatureChangeRateUnits.NanodegreeCelsiusPerSecond:
                return (value) * 1e-9;
            case TemperatureChangeRateUnits.MicrodegreeCelsiusPerSecond:
                return (value) * 0.000001;
            case TemperatureChangeRateUnits.CentidegreeCelsiusPerSecond:
                return (value) * 0.01;
            case TemperatureChangeRateUnits.DecidegreeCelsiusPerSecond:
                return (value) * 0.1;
            case TemperatureChangeRateUnits.DecadegreeCelsiusPerSecond:
                return (value) * 10;
            case TemperatureChangeRateUnits.HectodegreeCelsiusPerSecond:
                return (value) * 100;
            case TemperatureChangeRateUnits.KilodegreeCelsiusPerSecond:
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
            case TemperatureChangeRateUnits.NanodegreeCelsiusPerSecond:
                return this.NanodegreeCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.MicrodegreeCelsiusPerSecond:
                return this.MicrodegreeCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.CentidegreeCelsiusPerSecond:
                return this.CentidegreeCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.DecidegreeCelsiusPerSecond:
                return this.DecidegreeCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.DecadegreeCelsiusPerSecond:
                return this.DecadegreeCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.HectodegreeCelsiusPerSecond:
                return this.HectodegreeCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.KilodegreeCelsiusPerSecond:
                return this.KilodegreeCelsiusPerSecond + ` °C/s`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.TemperatureChangeRate = TemperatureChangeRate;
//# sourceMappingURL=temperaturechangerate.g.js.map