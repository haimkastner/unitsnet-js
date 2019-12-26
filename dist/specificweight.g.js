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
    SpecificWeightUnits[SpecificWeightUnits["Kilonewtonspercubicmillimeter"] = 11] = "Kilonewtonspercubicmillimeter";
    SpecificWeightUnits[SpecificWeightUnits["Kilonewtonspercubiccentimeter"] = 12] = "Kilonewtonspercubiccentimeter";
    SpecificWeightUnits[SpecificWeightUnits["Kilonewtonspercubicmeter"] = 13] = "Kilonewtonspercubicmeter";
    SpecificWeightUnits[SpecificWeightUnits["Meganewtonspercubicmeter"] = 14] = "Meganewtonspercubicmeter";
    SpecificWeightUnits[SpecificWeightUnits["Kilopoundsforcepercubicinch"] = 15] = "Kilopoundsforcepercubicinch";
    SpecificWeightUnits[SpecificWeightUnits["Kilopoundsforcepercubicfoot"] = 16] = "Kilopoundsforcepercubicfoot";
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
        this.kilonewtonspercubicmillimeterLazy = null;
        this.kilonewtonspercubiccentimeterLazy = null;
        this.kilonewtonspercubicmeterLazy = null;
        this.meganewtonspercubicmeterLazy = null;
        this.kilopoundsforcepercubicinchLazy = null;
        this.kilopoundsforcepercubicfootLazy = null;
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
    get Kilonewtonspercubicmillimeter() {
        if (this.kilonewtonspercubicmillimeterLazy !== null) {
            return this.kilonewtonspercubicmillimeterLazy;
        }
        return this.kilonewtonspercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.Kilonewtonspercubicmillimeter);
    }
    get Kilonewtonspercubiccentimeter() {
        if (this.kilonewtonspercubiccentimeterLazy !== null) {
            return this.kilonewtonspercubiccentimeterLazy;
        }
        return this.kilonewtonspercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.Kilonewtonspercubiccentimeter);
    }
    get Kilonewtonspercubicmeter() {
        if (this.kilonewtonspercubicmeterLazy !== null) {
            return this.kilonewtonspercubicmeterLazy;
        }
        return this.kilonewtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.Kilonewtonspercubicmeter);
    }
    get Meganewtonspercubicmeter() {
        if (this.meganewtonspercubicmeterLazy !== null) {
            return this.meganewtonspercubicmeterLazy;
        }
        return this.meganewtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.Meganewtonspercubicmeter);
    }
    get Kilopoundsforcepercubicinch() {
        if (this.kilopoundsforcepercubicinchLazy !== null) {
            return this.kilopoundsforcepercubicinchLazy;
        }
        return this.kilopoundsforcepercubicinchLazy = this.convertFromBase(SpecificWeightUnits.Kilopoundsforcepercubicinch);
    }
    get Kilopoundsforcepercubicfoot() {
        if (this.kilopoundsforcepercubicfootLazy !== null) {
            return this.kilopoundsforcepercubicfootLazy;
        }
        return this.kilopoundsforcepercubicfootLazy = this.convertFromBase(SpecificWeightUnits.Kilopoundsforcepercubicfoot);
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
    static FromKilonewtonspercubicmillimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.Kilonewtonspercubicmillimeter);
    }
    static FromKilonewtonspercubiccentimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.Kilonewtonspercubiccentimeter);
    }
    static FromKilonewtonspercubicmeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.Kilonewtonspercubicmeter);
    }
    static FromMeganewtonspercubicmeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.Meganewtonspercubicmeter);
    }
    static FromKilopoundsforcepercubicinch(value) {
        return new SpecificWeight(value, SpecificWeightUnits.Kilopoundsforcepercubicinch);
    }
    static FromKilopoundsforcepercubicfoot(value) {
        return new SpecificWeight(value, SpecificWeightUnits.Kilopoundsforcepercubicfoot);
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
            case SpecificWeightUnits.Kilonewtonspercubicmillimeter:
                return (this.value * 0.000000001) / 1000;
            case SpecificWeightUnits.Kilonewtonspercubiccentimeter:
                return (this.value * 0.000001) / 1000;
            case SpecificWeightUnits.Kilonewtonspercubicmeter:
                return (this.value) / 1000;
            case SpecificWeightUnits.Meganewtonspercubicmeter:
                return (this.value) / 1000000;
            case SpecificWeightUnits.Kilopoundsforcepercubicinch:
                return (this.value / 2.714471375263134e5) / 1000;
            case SpecificWeightUnits.Kilopoundsforcepercubicfoot:
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
            case SpecificWeightUnits.Kilonewtonspercubicmillimeter:
                return (value * 1000000000) * 1000;
            case SpecificWeightUnits.Kilonewtonspercubiccentimeter:
                return (value * 1000000) * 1000;
            case SpecificWeightUnits.Kilonewtonspercubicmeter:
                return (value) * 1000;
            case SpecificWeightUnits.Meganewtonspercubicmeter:
                return (value) * 1000000;
            case SpecificWeightUnits.Kilopoundsforcepercubicinch:
                return (value * 2.714471375263134e5) * 1000;
            case SpecificWeightUnits.Kilopoundsforcepercubicfoot:
                return (value * 1.570874638462462e2) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.SpecificWeight = SpecificWeight;
//# sourceMappingURL=specificweight.g.js.map