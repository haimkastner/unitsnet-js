"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForcePerLengthUnits;
(function (ForcePerLengthUnits) {
    ForcePerLengthUnits[ForcePerLengthUnits["NewtonsPerMeter"] = 0] = "NewtonsPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["KilogramsForcePerMeter"] = 1] = "KilogramsForcePerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["PoundsForcePerFoot"] = 2] = "PoundsForcePerFoot";
    ForcePerLengthUnits[ForcePerLengthUnits["PoundsForcePerInch"] = 3] = "PoundsForcePerInch";
    ForcePerLengthUnits[ForcePerLengthUnits["PoundsForcePerYard"] = 4] = "PoundsForcePerYard";
    ForcePerLengthUnits[ForcePerLengthUnits["NanonewtonsPerMeter"] = 5] = "NanonewtonsPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["MicronewtonsPerMeter"] = 6] = "MicronewtonsPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["CentinewtonsPerMeter"] = 7] = "CentinewtonsPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["DecinewtonsPerMeter"] = 8] = "DecinewtonsPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["KilonewtonsPerMeter"] = 9] = "KilonewtonsPerMeter";
    ForcePerLengthUnits[ForcePerLengthUnits["MeganewtonsPerMeter"] = 10] = "MeganewtonsPerMeter";
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
    get NanonewtonsPerMeter() {
        if (this.nanonewtonspermeterLazy !== null) {
            return this.nanonewtonspermeterLazy;
        }
        return this.nanonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.NanonewtonsPerMeter);
    }
    get MicronewtonsPerMeter() {
        if (this.micronewtonspermeterLazy !== null) {
            return this.micronewtonspermeterLazy;
        }
        return this.micronewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.MicronewtonsPerMeter);
    }
    get CentinewtonsPerMeter() {
        if (this.centinewtonspermeterLazy !== null) {
            return this.centinewtonspermeterLazy;
        }
        return this.centinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.CentinewtonsPerMeter);
    }
    get DecinewtonsPerMeter() {
        if (this.decinewtonspermeterLazy !== null) {
            return this.decinewtonspermeterLazy;
        }
        return this.decinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.DecinewtonsPerMeter);
    }
    get KilonewtonsPerMeter() {
        if (this.kilonewtonspermeterLazy !== null) {
            return this.kilonewtonspermeterLazy;
        }
        return this.kilonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.KilonewtonsPerMeter);
    }
    get MeganewtonsPerMeter() {
        if (this.meganewtonspermeterLazy !== null) {
            return this.meganewtonspermeterLazy;
        }
        return this.meganewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.MeganewtonsPerMeter);
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
    static FromNanonewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.NanonewtonsPerMeter);
    }
    static FromMicronewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.MicronewtonsPerMeter);
    }
    static FromCentinewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.CentinewtonsPerMeter);
    }
    static FromDecinewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.DecinewtonsPerMeter);
    }
    static FromKilonewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.KilonewtonsPerMeter);
    }
    static FromMeganewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.MeganewtonsPerMeter);
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
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return (this.value) / 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return (this.value) / 0.000001;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return (this.value) / 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return (this.value) / 0.1;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return (this.value) / 1000;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
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
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return (value) * 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return (value) * 0.000001;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return (value) * 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return (value) * 0.1;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return (value) * 1000;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
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
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return this.NanonewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return this.MicronewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return this.CentinewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return this.DecinewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return this.KilonewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return this.MeganewtonsPerMeter + ` N/m`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ForcePerLength = ForcePerLength;
//# sourceMappingURL=forceperlength.g.js.map