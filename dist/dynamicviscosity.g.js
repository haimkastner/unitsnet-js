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
    DynamicViscosityUnits[DynamicViscosityUnits["MicropascalSeconds"] = 6] = "MicropascalSeconds";
    DynamicViscosityUnits[DynamicViscosityUnits["Centipoise"] = 7] = "Centipoise";
})(DynamicViscosityUnits = exports.DynamicViscosityUnits || (exports.DynamicViscosityUnits = {}));
class DynamicViscosity {
    constructor(value, fromUnit) {
        this.newtonsecondspermetersquaredLazy = null;
        this.pascalsecondsLazy = null;
        this.poiseLazy = null;
        this.reynsLazy = null;
        this.poundsforcesecondpersquareinchLazy = null;
        this.poundsforcesecondpersquarefootLazy = null;
        this.micropascalsecondsLazy = null;
        this.centipoiseLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonSecondsPerMeterSquared() {
        if (this.newtonsecondspermetersquaredLazy !== null) {
            return this.newtonsecondspermetersquaredLazy;
        }
        return this.newtonsecondspermetersquaredLazy = this.convertFromBase(DynamicViscosityUnits.NewtonSecondsPerMeterSquared);
    }
    get PascalSeconds() {
        if (this.pascalsecondsLazy !== null) {
            return this.pascalsecondsLazy;
        }
        return this.pascalsecondsLazy = this.convertFromBase(DynamicViscosityUnits.PascalSeconds);
    }
    get Poise() {
        if (this.poiseLazy !== null) {
            return this.poiseLazy;
        }
        return this.poiseLazy = this.convertFromBase(DynamicViscosityUnits.Poise);
    }
    get Reyns() {
        if (this.reynsLazy !== null) {
            return this.reynsLazy;
        }
        return this.reynsLazy = this.convertFromBase(DynamicViscosityUnits.Reyns);
    }
    get PoundsForceSecondPerSquareInch() {
        if (this.poundsforcesecondpersquareinchLazy !== null) {
            return this.poundsforcesecondpersquareinchLazy;
        }
        return this.poundsforcesecondpersquareinchLazy = this.convertFromBase(DynamicViscosityUnits.PoundsForceSecondPerSquareInch);
    }
    get PoundsForceSecondPerSquareFoot() {
        if (this.poundsforcesecondpersquarefootLazy !== null) {
            return this.poundsforcesecondpersquarefootLazy;
        }
        return this.poundsforcesecondpersquarefootLazy = this.convertFromBase(DynamicViscosityUnits.PoundsForceSecondPerSquareFoot);
    }
    get MicropascalSeconds() {
        if (this.micropascalsecondsLazy !== null) {
            return this.micropascalsecondsLazy;
        }
        return this.micropascalsecondsLazy = this.convertFromBase(DynamicViscosityUnits.MicropascalSeconds);
    }
    get Centipoise() {
        if (this.centipoiseLazy !== null) {
            return this.centipoiseLazy;
        }
        return this.centipoiseLazy = this.convertFromBase(DynamicViscosityUnits.Centipoise);
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
    static FromMicropascalSeconds(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.MicropascalSeconds);
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
            case DynamicViscosityUnits.MicropascalSeconds:
                return (this.value) / 0.000001;
            case DynamicViscosityUnits.Centipoise:
                return (this.value * 10) / 0.01;
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
            case DynamicViscosityUnits.MicropascalSeconds:
                return (value) * 0.000001;
            case DynamicViscosityUnits.Centipoise:
                return (value / 10) * 0.01;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = DynamicViscosityUnits.NewtonSecondsPerMeterSquared) {
        switch (toUnit) {
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                return this.NewtonSecondsPerMeterSquared + ` Ns/m²`;
            case DynamicViscosityUnits.PascalSeconds:
                return this.PascalSeconds + ` Pa·s`;
            case DynamicViscosityUnits.Poise:
                return this.Poise + ` P`;
            case DynamicViscosityUnits.Reyns:
                return this.Reyns + ` reyn`;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return this.PoundsForceSecondPerSquareInch + ` lbf·s/in²`;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return this.PoundsForceSecondPerSquareFoot + ` lbf·s/ft²`;
            case DynamicViscosityUnits.MicropascalSeconds:
                return this.MicropascalSeconds + ` Pa·s`;
            case DynamicViscosityUnits.Centipoise:
                return this.Centipoise + ` P`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.DynamicViscosity = DynamicViscosity;
//# sourceMappingURL=dynamicviscosity.g.js.map