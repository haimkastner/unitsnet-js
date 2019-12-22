"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AreaMomentOfInertiaUnits;
(function (AreaMomentOfInertiaUnits) {
    AreaMomentOfInertiaUnits[AreaMomentOfInertiaUnits["MetersToTheFourth"] = 0] = "MetersToTheFourth";
    AreaMomentOfInertiaUnits[AreaMomentOfInertiaUnits["DecimetersToTheFourth"] = 1] = "DecimetersToTheFourth";
    AreaMomentOfInertiaUnits[AreaMomentOfInertiaUnits["CentimetersToTheFourth"] = 2] = "CentimetersToTheFourth";
    AreaMomentOfInertiaUnits[AreaMomentOfInertiaUnits["MillimetersToTheFourth"] = 3] = "MillimetersToTheFourth";
    AreaMomentOfInertiaUnits[AreaMomentOfInertiaUnits["FeetToTheFourth"] = 4] = "FeetToTheFourth";
    AreaMomentOfInertiaUnits[AreaMomentOfInertiaUnits["InchesToTheFourth"] = 5] = "InchesToTheFourth";
})(AreaMomentOfInertiaUnits = exports.AreaMomentOfInertiaUnits || (exports.AreaMomentOfInertiaUnits = {}));
class AreaMomentOfInertia {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get MetersToTheFourth() {
        return this.convertFromBase(AreaMomentOfInertiaUnits.MetersToTheFourth);
    }
    get DecimetersToTheFourth() {
        return this.convertFromBase(AreaMomentOfInertiaUnits.DecimetersToTheFourth);
    }
    get CentimetersToTheFourth() {
        return this.convertFromBase(AreaMomentOfInertiaUnits.CentimetersToTheFourth);
    }
    get MillimetersToTheFourth() {
        return this.convertFromBase(AreaMomentOfInertiaUnits.MillimetersToTheFourth);
    }
    get FeetToTheFourth() {
        return this.convertFromBase(AreaMomentOfInertiaUnits.FeetToTheFourth);
    }
    get InchesToTheFourth() {
        return this.convertFromBase(AreaMomentOfInertiaUnits.InchesToTheFourth);
    }
    static FromMetersToTheFourth(value) {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.MetersToTheFourth);
    }
    static FromDecimetersToTheFourth(value) {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.DecimetersToTheFourth);
    }
    static FromCentimetersToTheFourth(value) {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.CentimetersToTheFourth);
    }
    static FromMillimetersToTheFourth(value) {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.MillimetersToTheFourth);
    }
    static FromFeetToTheFourth(value) {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.FeetToTheFourth);
    }
    static FromInchesToTheFourth(value) {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.InchesToTheFourth);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AreaMomentOfInertiaUnits.MetersToTheFourth:
                return this.value;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth:
                return this.value / 1e4;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth:
                return this.value / 1e8;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth:
                return this.value / 1e12;
            case AreaMomentOfInertiaUnits.FeetToTheFourth:
                return this.value * Math.pow(0.3048, 4);
            case AreaMomentOfInertiaUnits.InchesToTheFourth:
                return this.value * Math.pow(2.54e-2, 4);
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case AreaMomentOfInertiaUnits.MetersToTheFourth:
                return this.value;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth:
                return this.value * 1e4;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth:
                return this.value * 1e8;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth:
                return this.value * 1e12;
            case AreaMomentOfInertiaUnits.FeetToTheFourth:
                return this.value / Math.pow(0.3048, 4);
            case AreaMomentOfInertiaUnits.InchesToTheFourth:
                return this.value / Math.pow(2.54e-2, 4);
            default:
                break;
        }
        return NaN;
    }
}
exports.AreaMomentOfInertia = AreaMomentOfInertia;
//# sourceMappingURL=areamomentofinertia.g.js.map