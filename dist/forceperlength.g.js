"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForcePerLengthUnits;
(function (ForcePerLengthUnits) {
    ForcePerLengthUnits[ForcePerLengthUnits["NewtonsPerMeter"] = 0] = "NewtonsPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["KilogramsForcePerMeter"] = 1] = "KilogramsForcePerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["PoundsForcePerFoot"] = 2] = "PoundsForcePerFoot";
    ForcePerLengthUnits[ForcePerLengthUnits["PoundsForcePerInch"] = 3] = "PoundsForcePerInch";
    ForcePerLengthUnits[ForcePerLengthUnits["PoundsForcePerYard"] = 4] = "PoundsForcePerYard";
    ForcePerLengthUnits[ForcePerLengthUnits["Nanonewtonspermeter"] = 5] = "Nanonewtonspermeter";
    ForcePerLengthUnits[ForcePerLengthUnits["Micronewtonspermeter"] = 6] = "Micronewtonspermeter";
    ForcePerLengthUnits[ForcePerLengthUnits["Centinewtonspermeter"] = 7] = "Centinewtonspermeter";
    ForcePerLengthUnits[ForcePerLengthUnits["Decinewtonspermeter"] = 8] = "Decinewtonspermeter";
    ForcePerLengthUnits[ForcePerLengthUnits["Kilonewtonspermeter"] = 9] = "Kilonewtonspermeter";
    ForcePerLengthUnits[ForcePerLengthUnits["Meganewtonspermeter"] = 10] = "Meganewtonspermeter";
})(ForcePerLengthUnits = exports.ForcePerLengthUnits || (exports.ForcePerLengthUnits = {}));
class ForcePerLength {
    constructor(value, fromUnit) {
        this.newtonspermeterLazy = null;
        this.kilogramsforcepermeterLazy = null;
        this.poundsforceperfootLazy = null;
        this.poundsforceperinchLazy = null;
        this.poundsforceperyardLazy = null;
        this.nanonewtonspermeterLazy = null;
        this.micronewtonspermeterLazy = null;
        this.centinewtonspermeterLazy = null;
        this.decinewtonspermeterLazy = null;
        this.kilonewtonspermeterLazy = null;
        this.meganewtonspermeterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonsPerMeter() {
        if (this.newtonspermeterLazy !== null) {
            return this.newtonspermeterLazy;
        }
        return this.newtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.NewtonsPerMeter);
    }
    get KilogramsForcePerMeter() {
        if (this.kilogramsforcepermeterLazy !== null) {
            return this.kilogramsforcepermeterLazy;
        }
        return this.kilogramsforcepermeterLazy = this.convertFromBase(ForcePerLengthUnits.KilogramsForcePerMeter);
    }
    get PoundsForcePerFoot() {
        if (this.poundsforceperfootLazy !== null) {
            return this.poundsforceperfootLazy;
        }
        return this.poundsforceperfootLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerFoot);
    }
    get PoundsForcePerInch() {
        if (this.poundsforceperinchLazy !== null) {
            return this.poundsforceperinchLazy;
        }
        return this.poundsforceperinchLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerInch);
    }
    get PoundsForcePerYard() {
        if (this.poundsforceperyardLazy !== null) {
            return this.poundsforceperyardLazy;
        }
        return this.poundsforceperyardLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerYard);
    }
    get Nanonewtonspermeter() {
        if (this.nanonewtonspermeterLazy !== null) {
            return this.nanonewtonspermeterLazy;
        }
        return this.nanonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.Nanonewtonspermeter);
    }
    get Micronewtonspermeter() {
        if (this.micronewtonspermeterLazy !== null) {
            return this.micronewtonspermeterLazy;
        }
        return this.micronewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.Micronewtonspermeter);
    }
    get Centinewtonspermeter() {
        if (this.centinewtonspermeterLazy !== null) {
            return this.centinewtonspermeterLazy;
        }
        return this.centinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.Centinewtonspermeter);
    }
    get Decinewtonspermeter() {
        if (this.decinewtonspermeterLazy !== null) {
            return this.decinewtonspermeterLazy;
        }
        return this.decinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.Decinewtonspermeter);
    }
    get Kilonewtonspermeter() {
        if (this.kilonewtonspermeterLazy !== null) {
            return this.kilonewtonspermeterLazy;
        }
        return this.kilonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.Kilonewtonspermeter);
    }
    get Meganewtonspermeter() {
        if (this.meganewtonspermeterLazy !== null) {
            return this.meganewtonspermeterLazy;
        }
        return this.meganewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.Meganewtonspermeter);
    }
    static FromNewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.NewtonsPerMeter);
    }
    static FromKilogramsForcePerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.KilogramsForcePerMeter);
    }
    static FromPoundsForcePerFoot(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerFoot);
    }
    static FromPoundsForcePerInch(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerInch);
    }
    static FromPoundsForcePerYard(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerYard);
    }
    static FromNanonewtonspermeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.Nanonewtonspermeter);
    }
    static FromMicronewtonspermeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.Micronewtonspermeter);
    }
    static FromCentinewtonspermeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.Centinewtonspermeter);
    }
    static FromDecinewtonspermeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.Decinewtonspermeter);
    }
    static FromKilonewtonspermeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.Kilonewtonspermeter);
    }
    static FromMeganewtonspermeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.Meganewtonspermeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ForcePerLengthUnits.NewtonsPerMeter:
                return this.value;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return this.value / 9.80665002864;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return this.value / 14.59390292;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return this.value / 1.75126835e2;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return this.value / 4.864634307;
            case ForcePerLengthUnits.Nanonewtonspermeter:
                return (this.value) / 1e-9;
            case ForcePerLengthUnits.Micronewtonspermeter:
                return (this.value) / 0.000001;
            case ForcePerLengthUnits.Centinewtonspermeter:
                return (this.value) / 0.01;
            case ForcePerLengthUnits.Decinewtonspermeter:
                return (this.value) / 0.1;
            case ForcePerLengthUnits.Kilonewtonspermeter:
                return (this.value) / 1000;
            case ForcePerLengthUnits.Meganewtonspermeter:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ForcePerLengthUnits.NewtonsPerMeter:
                return value;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return value * 9.80665002864;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return value * 14.59390292;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return value * 1.75126835e2;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return value * 4.864634307;
            case ForcePerLengthUnits.Nanonewtonspermeter:
                return (value) * 1e-9;
            case ForcePerLengthUnits.Micronewtonspermeter:
                return (value) * 0.000001;
            case ForcePerLengthUnits.Centinewtonspermeter:
                return (value) * 0.01;
            case ForcePerLengthUnits.Decinewtonspermeter:
                return (value) * 0.1;
            case ForcePerLengthUnits.Kilonewtonspermeter:
                return (value) * 1000;
            case ForcePerLengthUnits.Meganewtonspermeter:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ForcePerLength = ForcePerLength;
//# sourceMappingURL=forceperlength.g.js.map