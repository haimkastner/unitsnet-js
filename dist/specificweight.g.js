"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpecificWeightUnits;
(function (SpecificWeightUnits) {
    SpecificWeightUnits[SpecificWeightUnits["NewtonsPerCubicMillimeter"] = 0] = "NewtonsPerCubicMillimeter";
    SpecificWeightUnits[SpecificWeightUnits["NewtonsPerCubicCentimeter"] = 1] = "NewtonsPerCubicCentimeter";
    SpecificWeightUnits[SpecificWeightUnits["NewtonsPerCubicMeter"] = 2] = "NewtonsPerCubicMeter";
    SpecificWeightUnits[SpecificWeightUnits["KilogramsForcePerCubicMillimeter"] = 3] = "KilogramsForcePerCubicMillimeter";
    SpecificWeightUnits[SpecificWeightUnits["KilogramsForcePerCubicCentimeter"] = 4] = "KilogramsForcePerCubicCentimeter";
    SpecificWeightUnits[SpecificWeightUnits["KilogramsForcePerCubicMeter"] = 5] = "KilogramsForcePerCubicMeter";
    SpecificWeightUnits[SpecificWeightUnits["PoundsForcePerCubicInch"] = 6] = "PoundsForcePerCubicInch";
    SpecificWeightUnits[SpecificWeightUnits["PoundsForcePerCubicFoot"] = 7] = "PoundsForcePerCubicFoot";
    SpecificWeightUnits[SpecificWeightUnits["TonnesForcePerCubicMillimeter"] = 8] = "TonnesForcePerCubicMillimeter";
    SpecificWeightUnits[SpecificWeightUnits["TonnesForcePerCubicCentimeter"] = 9] = "TonnesForcePerCubicCentimeter";
    SpecificWeightUnits[SpecificWeightUnits["TonnesForcePerCubicMeter"] = 10] = "TonnesForcePerCubicMeter";
    SpecificWeightUnits[SpecificWeightUnits["KilonewtonPerCubicMillimeter"] = 11] = "KilonewtonPerCubicMillimeter";
    SpecificWeightUnits[SpecificWeightUnits["KilonewtonPerCubicCentimeter"] = 12] = "KilonewtonPerCubicCentimeter";
    SpecificWeightUnits[SpecificWeightUnits["KilonewtonPerCubicMeter"] = 13] = "KilonewtonPerCubicMeter";
    SpecificWeightUnits[SpecificWeightUnits["MeganewtonPerCubicMeter"] = 14] = "MeganewtonPerCubicMeter";
    SpecificWeightUnits[SpecificWeightUnits["KilopoundForcePerCubicInch"] = 15] = "KilopoundForcePerCubicInch";
    SpecificWeightUnits[SpecificWeightUnits["KilopoundForcePerCubicFoot"] = 16] = "KilopoundForcePerCubicFoot";
})(SpecificWeightUnits = exports.SpecificWeightUnits || (exports.SpecificWeightUnits = {}));
class SpecificWeight {
    constructor(value, fromUnit) {
        this.newtonspercubicmillimeterLazy = null;
        this.newtonspercubiccentimeterLazy = null;
        this.newtonspercubicmeterLazy = null;
        this.kilogramsforcepercubicmillimeterLazy = null;
        this.kilogramsforcepercubiccentimeterLazy = null;
        this.kilogramsforcepercubicmeterLazy = null;
        this.poundsforcepercubicinchLazy = null;
        this.poundsforcepercubicfootLazy = null;
        this.tonnesforcepercubicmillimeterLazy = null;
        this.tonnesforcepercubiccentimeterLazy = null;
        this.tonnesforcepercubicmeterLazy = null;
        this.kilonewtonpercubicmillimeterLazy = null;
        this.kilonewtonpercubiccentimeterLazy = null;
        this.kilonewtonpercubicmeterLazy = null;
        this.meganewtonpercubicmeterLazy = null;
        this.kilopoundforcepercubicinchLazy = null;
        this.kilopoundforcepercubicfootLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonsPerCubicMillimeter() {
        if (this.newtonspercubicmillimeterLazy !== null) {
            return this.newtonspercubicmillimeterLazy;
        }
        return this.newtonspercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMillimeter);
    }
    get NewtonsPerCubicCentimeter() {
        if (this.newtonspercubiccentimeterLazy !== null) {
            return this.newtonspercubiccentimeterLazy;
        }
        return this.newtonspercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicCentimeter);
    }
    get NewtonsPerCubicMeter() {
        if (this.newtonspercubicmeterLazy !== null) {
            return this.newtonspercubicmeterLazy;
        }
        return this.newtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMeter);
    }
    get KilogramsForcePerCubicMillimeter() {
        if (this.kilogramsforcepercubicmillimeterLazy !== null) {
            return this.kilogramsforcepercubicmillimeterLazy;
        }
        return this.kilogramsforcepercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMillimeter);
    }
    get KilogramsForcePerCubicCentimeter() {
        if (this.kilogramsforcepercubiccentimeterLazy !== null) {
            return this.kilogramsforcepercubiccentimeterLazy;
        }
        return this.kilogramsforcepercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicCentimeter);
    }
    get KilogramsForcePerCubicMeter() {
        if (this.kilogramsforcepercubicmeterLazy !== null) {
            return this.kilogramsforcepercubicmeterLazy;
        }
        return this.kilogramsforcepercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMeter);
    }
    get PoundsForcePerCubicInch() {
        if (this.poundsforcepercubicinchLazy !== null) {
            return this.poundsforcepercubicinchLazy;
        }
        return this.poundsforcepercubicinchLazy = this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicInch);
    }
    get PoundsForcePerCubicFoot() {
        if (this.poundsforcepercubicfootLazy !== null) {
            return this.poundsforcepercubicfootLazy;
        }
        return this.poundsforcepercubicfootLazy = this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicFoot);
    }
    get TonnesForcePerCubicMillimeter() {
        if (this.tonnesforcepercubicmillimeterLazy !== null) {
            return this.tonnesforcepercubicmillimeterLazy;
        }
        return this.tonnesforcepercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMillimeter);
    }
    get TonnesForcePerCubicCentimeter() {
        if (this.tonnesforcepercubiccentimeterLazy !== null) {
            return this.tonnesforcepercubiccentimeterLazy;
        }
        return this.tonnesforcepercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicCentimeter);
    }
    get TonnesForcePerCubicMeter() {
        if (this.tonnesforcepercubicmeterLazy !== null) {
            return this.tonnesforcepercubicmeterLazy;
        }
        return this.tonnesforcepercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMeter);
    }
    get KilonewtonPerCubicMillimeter() {
        if (this.kilonewtonpercubicmillimeterLazy !== null) {
            return this.kilonewtonpercubicmillimeterLazy;
        }
        return this.kilonewtonpercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonPerCubicMillimeter);
    }
    get KilonewtonPerCubicCentimeter() {
        if (this.kilonewtonpercubiccentimeterLazy !== null) {
            return this.kilonewtonpercubiccentimeterLazy;
        }
        return this.kilonewtonpercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonPerCubicCentimeter);
    }
    get KilonewtonPerCubicMeter() {
        if (this.kilonewtonpercubicmeterLazy !== null) {
            return this.kilonewtonpercubicmeterLazy;
        }
        return this.kilonewtonpercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonPerCubicMeter);
    }
    get MeganewtonPerCubicMeter() {
        if (this.meganewtonpercubicmeterLazy !== null) {
            return this.meganewtonpercubicmeterLazy;
        }
        return this.meganewtonpercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.MeganewtonPerCubicMeter);
    }
    get KilopoundForcePerCubicInch() {
        if (this.kilopoundforcepercubicinchLazy !== null) {
            return this.kilopoundforcepercubicinchLazy;
        }
        return this.kilopoundforcepercubicinchLazy = this.convertFromBase(SpecificWeightUnits.KilopoundForcePerCubicInch);
    }
    get KilopoundForcePerCubicFoot() {
        if (this.kilopoundforcepercubicfootLazy !== null) {
            return this.kilopoundforcepercubicfootLazy;
        }
        return this.kilopoundforcepercubicfootLazy = this.convertFromBase(SpecificWeightUnits.KilopoundForcePerCubicFoot);
    }
    static FromNewtonsPerCubicMillimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicMillimeter);
    }
    static FromNewtonsPerCubicCentimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicCentimeter);
    }
    static FromNewtonsPerCubicMeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicMeter);
    }
    static FromKilogramsForcePerCubicMillimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicMillimeter);
    }
    static FromKilogramsForcePerCubicCentimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicCentimeter);
    }
    static FromKilogramsForcePerCubicMeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicMeter);
    }
    static FromPoundsForcePerCubicInch(value) {
        return new SpecificWeight(value, SpecificWeightUnits.PoundsForcePerCubicInch);
    }
    static FromPoundsForcePerCubicFoot(value) {
        return new SpecificWeight(value, SpecificWeightUnits.PoundsForcePerCubicFoot);
    }
    static FromTonnesForcePerCubicMillimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicMillimeter);
    }
    static FromTonnesForcePerCubicCentimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicCentimeter);
    }
    static FromTonnesForcePerCubicMeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicMeter);
    }
    static FromKilonewtonPerCubicMillimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonPerCubicMillimeter);
    }
    static FromKilonewtonPerCubicCentimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonPerCubicCentimeter);
    }
    static FromKilonewtonPerCubicMeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonPerCubicMeter);
    }
    static FromMeganewtonPerCubicMeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.MeganewtonPerCubicMeter);
    }
    static FromKilopoundForcePerCubicInch(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilopoundForcePerCubicInch);
    }
    static FromKilopoundForcePerCubicFoot(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilopoundForcePerCubicFoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return this.value * 0.000000001;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return this.value * 0.000001;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return this.value;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return this.value / 9.80665e9;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return this.value / 9.80665e6;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return this.value / 9.80665;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return this.value / 2.714471375263134e5;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return this.value / 1.570874638462462e2;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return this.value / 9.80665e12;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return this.value / 9.80665e9;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return this.value / 9.80665e3;
            case SpecificWeightUnits.KilonewtonPerCubicMillimeter:
                return (this.value * 0.000000001) / 1000;
            case SpecificWeightUnits.KilonewtonPerCubicCentimeter:
                return (this.value * 0.000001) / 1000;
            case SpecificWeightUnits.KilonewtonPerCubicMeter:
                return (this.value) / 1000;
            case SpecificWeightUnits.MeganewtonPerCubicMeter:
                return (this.value) / 1000000;
            case SpecificWeightUnits.KilopoundForcePerCubicInch:
                return (this.value / 2.714471375263134e5) / 1000;
            case SpecificWeightUnits.KilopoundForcePerCubicFoot:
                return (this.value / 1.570874638462462e2) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return value * 1000000000;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return value * 1000000;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return value;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return value * 9.80665e9;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return value * 9.80665e6;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return value * 9.80665;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return value * 2.714471375263134e5;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return value * 1.570874638462462e2;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return value * 9.80665e12;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return value * 9.80665e9;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return value * 9.80665e3;
            case SpecificWeightUnits.KilonewtonPerCubicMillimeter:
                return (value * 1000000000) * 1000;
            case SpecificWeightUnits.KilonewtonPerCubicCentimeter:
                return (value * 1000000) * 1000;
            case SpecificWeightUnits.KilonewtonPerCubicMeter:
                return (value) * 1000;
            case SpecificWeightUnits.MeganewtonPerCubicMeter:
                return (value) * 1000000;
            case SpecificWeightUnits.KilopoundForcePerCubicInch:
                return (value * 2.714471375263134e5) * 1000;
            case SpecificWeightUnits.KilopoundForcePerCubicFoot:
                return (value * 1.570874638462462e2) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = SpecificWeightUnits.NewtonsPerCubicMeter) {
        switch (toUnit) {
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return this.NewtonsPerCubicMillimeter + ` N/mm³`;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return this.NewtonsPerCubicCentimeter + ` N/cm³`;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return this.NewtonsPerCubicMeter + ` N/m³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return this.KilogramsForcePerCubicMillimeter + ` kgf/mm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return this.KilogramsForcePerCubicCentimeter + ` kgf/cm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return this.KilogramsForcePerCubicMeter + ` kgf/m³`;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return this.PoundsForcePerCubicInch + ` lbf/in³`;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return this.PoundsForcePerCubicFoot + ` lbf/ft³`;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return this.TonnesForcePerCubicMillimeter + ` tf/mm³`;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return this.TonnesForcePerCubicCentimeter + ` tf/cm³`;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return this.TonnesForcePerCubicMeter + ` tf/m³`;
            case SpecificWeightUnits.KilonewtonPerCubicMillimeter:
                return this.KilonewtonPerCubicMillimeter + ` N/mm³`;
            case SpecificWeightUnits.KilonewtonPerCubicCentimeter:
                return this.KilonewtonPerCubicCentimeter + ` N/cm³`;
            case SpecificWeightUnits.KilonewtonPerCubicMeter:
                return this.KilonewtonPerCubicMeter + ` N/m³`;
            case SpecificWeightUnits.MeganewtonPerCubicMeter:
                return this.MeganewtonPerCubicMeter + ` N/m³`;
            case SpecificWeightUnits.KilopoundForcePerCubicInch:
                return this.KilopoundForcePerCubicInch + ` lbf/in³`;
            case SpecificWeightUnits.KilopoundForcePerCubicFoot:
                return this.KilopoundForcePerCubicFoot + ` lbf/ft³`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.SpecificWeight = SpecificWeight;
//# sourceMappingURL=specificweight.g.js.map