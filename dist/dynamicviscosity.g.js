"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DynamicViscosityUnits;
(function (DynamicViscosityUnits) {
    DynamicViscosityUnits[DynamicViscosityUnits["NewtonSecondsPerMeterSquared"] = 0] = "NewtonSecondsPerMeterSquared";
    DynamicViscosityUnits[DynamicViscosityUnits["PascalSeconds"] = 1] = "PascalSeconds";
    DynamicViscosityUnits[DynamicViscosityUnits["Poise"] = 2] = "Poise";
    DynamicViscosityUnits[DynamicViscosityUnits["Reyns"] = 3] = "Reyns";
    DynamicViscosityUnits[DynamicViscosityUnits["PoundsForceSecondPerSquareInch"] = 4] = "PoundsForceSecondPerSquareInch";
    DynamicViscosityUnits[DynamicViscosityUnits["PoundsForceSecondPerSquareFoot"] = 5] = "PoundsForceSecondPerSquareFoot";
    DynamicViscosityUnits[DynamicViscosityUnits["Micropascalseconds"] = 6] = "Micropascalseconds";
    DynamicViscosityUnits[DynamicViscosityUnits["Centipoise"] = 7] = "Centipoise";
})(DynamicViscosityUnits = exports.DynamicViscosityUnits || (exports.DynamicViscosityUnits = {}));
class DynamicViscosity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonSecondsPerMeterSquared() {
        return this.convertFromBase(DynamicViscosityUnits.NewtonSecondsPerMeterSquared);
    }
    get PascalSeconds() {
        return this.convertFromBase(DynamicViscosityUnits.PascalSeconds);
    }
    get Poise() {
        return this.convertFromBase(DynamicViscosityUnits.Poise);
    }
    get Reyns() {
        return this.convertFromBase(DynamicViscosityUnits.Reyns);
    }
    get PoundsForceSecondPerSquareInch() {
        return this.convertFromBase(DynamicViscosityUnits.PoundsForceSecondPerSquareInch);
    }
    get PoundsForceSecondPerSquareFoot() {
        return this.convertFromBase(DynamicViscosityUnits.PoundsForceSecondPerSquareFoot);
    }
    get Micropascalseconds() {
        return this.convertFromBase(DynamicViscosityUnits.Micropascalseconds);
    }
    get Centipoise() {
        return this.convertFromBase(DynamicViscosityUnits.Centipoise);
    }
    static FromNewtonSecondsPerMeterSquared(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.NewtonSecondsPerMeterSquared);
    }
    static FromPascalSeconds(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.PascalSeconds);
    }
    static FromPoise(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.Poise);
    }
    static FromReyns(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.Reyns);
    }
    static FromPoundsForceSecondPerSquareInch(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.PoundsForceSecondPerSquareInch);
    }
    static FromPoundsForceSecondPerSquareFoot(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.PoundsForceSecondPerSquareFoot);
    }
    static FromMicropascalseconds(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.Micropascalseconds);
    }
    static FromCentipoise(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.Centipoise);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                return this.value;
            case DynamicViscosityUnits.PascalSeconds:
                return this.value;
            case DynamicViscosityUnits.Poise:
                return this.value * 10;
            case DynamicViscosityUnits.Reyns:
                return this.value / 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return this.value / 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return this.value / 4.7880258980335843e1;
            case DynamicViscosityUnits.Micropascalseconds:
                return (this.value) * 0.000001;
            case DynamicViscosityUnits.Centipoise:
                return (this.value / 10) * 0.01;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                return value;
            case DynamicViscosityUnits.PascalSeconds:
                return value;
            case DynamicViscosityUnits.Poise:
                return value / 10;
            case DynamicViscosityUnits.Reyns:
                return value * 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return value * 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return value * 4.7880258980335843e1;
            case DynamicViscosityUnits.Micropascalseconds:
                return (value) / 0.000001;
            case DynamicViscosityUnits.Centipoise:
                return (value * 10) / 0.01;
            default:
                break;
        }
        return NaN;
    }
}
exports.DynamicViscosity = DynamicViscosity;
//# sourceMappingURL=dynamicviscosity.g.js.map