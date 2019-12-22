"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DurationUnits;
(function (DurationUnits) {
    DurationUnits[DurationUnits["Years365"] = 0] = "Years365";
    DurationUnits[DurationUnits["Months30"] = 1] = "Months30";
    DurationUnits[DurationUnits["Weeks"] = 2] = "Weeks";
    DurationUnits[DurationUnits["Days"] = 3] = "Days";
    DurationUnits[DurationUnits["Hours"] = 4] = "Hours";
    DurationUnits[DurationUnits["Minutes"] = 5] = "Minutes";
    DurationUnits[DurationUnits["Seconds"] = 6] = "Seconds";
    DurationUnits[DurationUnits["Nanoseconds"] = 7] = "Nanoseconds";
    DurationUnits[DurationUnits["Microseconds"] = 8] = "Microseconds";
})(DurationUnits = exports.DurationUnits || (exports.DurationUnits = {}));
class Duration {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Years365() {
        return this.convertFromBase(DurationUnits.Years365);
    }
    get Months30() {
        return this.convertFromBase(DurationUnits.Months30);
    }
    get Weeks() {
        return this.convertFromBase(DurationUnits.Weeks);
    }
    get Days() {
        return this.convertFromBase(DurationUnits.Days);
    }
    get Hours() {
        return this.convertFromBase(DurationUnits.Hours);
    }
    get Minutes() {
        return this.convertFromBase(DurationUnits.Minutes);
    }
    get Seconds() {
        return this.convertFromBase(DurationUnits.Seconds);
    }
    get Nanoseconds() {
        return this.convertFromBase(DurationUnits.Nanoseconds);
    }
    get Microseconds() {
        return this.convertFromBase(DurationUnits.Microseconds);
    }
    static FromYears365(value) {
        return new Duration(value, DurationUnits.Years365);
    }
    static FromMonths30(value) {
        return new Duration(value, DurationUnits.Months30);
    }
    static FromWeeks(value) {
        return new Duration(value, DurationUnits.Weeks);
    }
    static FromDays(value) {
        return new Duration(value, DurationUnits.Days);
    }
    static FromHours(value) {
        return new Duration(value, DurationUnits.Hours);
    }
    static FromMinutes(value) {
        return new Duration(value, DurationUnits.Minutes);
    }
    static FromSeconds(value) {
        return new Duration(value, DurationUnits.Seconds);
    }
    static FromNanoseconds(value) {
        return new Duration(value, DurationUnits.Nanoseconds);
    }
    static FromMicroseconds(value) {
        return new Duration(value, DurationUnits.Microseconds);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case DurationUnits.Years365:
                return this.value * 365 * 24 * 3600;
            case DurationUnits.Months30:
                return this.value * 30 * 24 * 3600;
            case DurationUnits.Weeks:
                return this.value * 7 * 24 * 3600;
            case DurationUnits.Days:
                return this.value * 24 * 3600;
            case DurationUnits.Hours:
                return this.value * 3600;
            case DurationUnits.Minutes:
                return this.value * 60;
            case DurationUnits.Seconds:
                return this.value;
            case DurationUnits.Nanoseconds:
                return (this.value) * 1e-9;
            case DurationUnits.Microseconds:
                return (this.value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case DurationUnits.Years365:
                return this.value / (365 * 24 * 3600);
            case DurationUnits.Months30:
                return this.value / (30 * 24 * 3600);
            case DurationUnits.Weeks:
                return this.value / (7 * 24 * 3600);
            case DurationUnits.Days:
                return this.value / (24 * 3600);
            case DurationUnits.Hours:
                return this.value / 3600;
            case DurationUnits.Minutes:
                return this.value / 60;
            case DurationUnits.Seconds:
                return this.value;
            case DurationUnits.Nanoseconds:
                return (this.value) / 1e-9;
            case DurationUnits.Microseconds:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }
}
exports.Duration = Duration;
//# sourceMappingURL=duration.g.js.map