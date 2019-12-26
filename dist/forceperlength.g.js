"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForcePerLengthUnits;
(function (ForcePerLengthUnits) {
    ForcePerLengthUnits[ForcePerLengthUnits["NewtonsPerMeter"] = 0] = "NewtonsPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["KilogramsForcePerMeter"] = 1] = "KilogramsForcePerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["PoundsForcePerFoot"] = 2] = "PoundsForcePerFoot";
    ForcePerLengthUnits[ForcePerLengthUnits["PoundsForcePerInch"] = 3] = "PoundsForcePerInch";
    ForcePerLengthUnits[ForcePerLengthUnits["PoundsForcePerYard"] = 4] = "PoundsForcePerYard";
    ForcePerLengthUnits[ForcePerLengthUnits["NanonewtonPerMeter"] = 5] = "NanonewtonPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["MicronewtonPerMeter"] = 6] = "MicronewtonPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["CentinewtonPerMeter"] = 7] = "CentinewtonPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["DecinewtonPerMeter"] = 8] = "DecinewtonPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["KilonewtonPerMeter"] = 9] = "KilonewtonPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["MeganewtonPerMeter"] = 10] = "MeganewtonPerMeter";
})(ForcePerLengthUnits = exports.ForcePerLengthUnits || (exports.ForcePerLengthUnits = {}));
class ForcePerLength {
    constructor(value, fromUnit) {
        this.newtonspermeterLazy = null;
        this.kilogramsforcepermeterLazy = null;
        this.poundsforceperfootLazy = null;
        this.poundsforceperinchLazy = null;
        this.poundsforceperyardLazy = null;
        this.nanonewtonpermeterLazy = null;
        this.micronewtonpermeterLazy = null;
        this.centinewtonpermeterLazy = null;
        this.decinewtonpermeterLazy = null;
        this.kilonewtonpermeterLazy = null;
        this.meganewtonpermeterLazy = null;
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
    get NanonewtonPerMeter() {
        if (this.nanonewtonpermeterLazy !== null) {
            return this.nanonewtonpermeterLazy;
        }
        return this.nanonewtonpermeterLazy = this.convertFromBase(ForcePerLengthUnits.NanonewtonPerMeter);
    }
    get MicronewtonPerMeter() {
        if (this.micronewtonpermeterLazy !== null) {
            return this.micronewtonpermeterLazy;
        }
        return this.micronewtonpermeterLazy = this.convertFromBase(ForcePerLengthUnits.MicronewtonPerMeter);
    }
    get CentinewtonPerMeter() {
        if (this.centinewtonpermeterLazy !== null) {
            return this.centinewtonpermeterLazy;
        }
        return this.centinewtonpermeterLazy = this.convertFromBase(ForcePerLengthUnits.CentinewtonPerMeter);
    }
    get DecinewtonPerMeter() {
        if (this.decinewtonpermeterLazy !== null) {
            return this.decinewtonpermeterLazy;
        }
        return this.decinewtonpermeterLazy = this.convertFromBase(ForcePerLengthUnits.DecinewtonPerMeter);
    }
    get KilonewtonPerMeter() {
        if (this.kilonewtonpermeterLazy !== null) {
            return this.kilonewtonpermeterLazy;
        }
        return this.kilonewtonpermeterLazy = this.convertFromBase(ForcePerLengthUnits.KilonewtonPerMeter);
    }
    get MeganewtonPerMeter() {
        if (this.meganewtonpermeterLazy !== null) {
            return this.meganewtonpermeterLazy;
        }
        return this.meganewtonpermeterLazy = this.convertFromBase(ForcePerLengthUnits.MeganewtonPerMeter);
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
    static FromNanonewtonPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.NanonewtonPerMeter);
    }
    static FromMicronewtonPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.MicronewtonPerMeter);
    }
    static FromCentinewtonPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.CentinewtonPerMeter);
    }
    static FromDecinewtonPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.DecinewtonPerMeter);
    }
    static FromKilonewtonPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.KilonewtonPerMeter);
    }
    static FromMeganewtonPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.MeganewtonPerMeter);
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
            case ForcePerLengthUnits.NanonewtonPerMeter:
                return (this.value) / 1e-9;
            case ForcePerLengthUnits.MicronewtonPerMeter:
                return (this.value) / 0.000001;
            case ForcePerLengthUnits.CentinewtonPerMeter:
                return (this.value) / 0.01;
            case ForcePerLengthUnits.DecinewtonPerMeter:
                return (this.value) / 0.1;
            case ForcePerLengthUnits.KilonewtonPerMeter:
                return (this.value) / 1000;
            case ForcePerLengthUnits.MeganewtonPerMeter:
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
            case ForcePerLengthUnits.NanonewtonPerMeter:
                return (value) * 1e-9;
            case ForcePerLengthUnits.MicronewtonPerMeter:
                return (value) * 0.000001;
            case ForcePerLengthUnits.CentinewtonPerMeter:
                return (value) * 0.01;
            case ForcePerLengthUnits.DecinewtonPerMeter:
                return (value) * 0.1;
            case ForcePerLengthUnits.KilonewtonPerMeter:
                return (value) * 1000;
            case ForcePerLengthUnits.MeganewtonPerMeter:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ForcePerLengthUnits.NewtonsPerMeter) {
        switch (toUnit) {
            case ForcePerLengthUnits.NewtonsPerMeter:
                return this.NewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return this.KilogramsForcePerMeter + ` kgf/m`;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return this.PoundsForcePerFoot + ` lbf/ft`;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return this.PoundsForcePerInch + ` lbf/in`;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return this.PoundsForcePerYard + ` lbf/yd`;
            case ForcePerLengthUnits.NanonewtonPerMeter:
                return this.NanonewtonPerMeter + ` N/m`;
            case ForcePerLengthUnits.MicronewtonPerMeter:
                return this.MicronewtonPerMeter + ` N/m`;
            case ForcePerLengthUnits.CentinewtonPerMeter:
                return this.CentinewtonPerMeter + ` N/m`;
            case ForcePerLengthUnits.DecinewtonPerMeter:
                return this.DecinewtonPerMeter + ` N/m`;
            case ForcePerLengthUnits.KilonewtonPerMeter:
                return this.KilonewtonPerMeter + ` N/m`;
            case ForcePerLengthUnits.MeganewtonPerMeter:
                return this.MeganewtonPerMeter + ` N/m`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ForcePerLength = ForcePerLength;
//# sourceMappingURL=forceperlength.g.js.map