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
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonsPerCubicMillimeter() {
        return this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMillimeter);
    }
    get NewtonsPerCubicCentimeter() {
        return this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicCentimeter);
    }
    get NewtonsPerCubicMeter() {
        return this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMeter);
    }
    get KilogramsForcePerCubicMillimeter() {
        return this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMillimeter);
    }
    get KilogramsForcePerCubicCentimeter() {
        return this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicCentimeter);
    }
    get KilogramsForcePerCubicMeter() {
        return this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMeter);
    }
    get PoundsForcePerCubicInch() {
        return this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicInch);
    }
    get PoundsForcePerCubicFoot() {
        return this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicFoot);
    }
    get TonnesForcePerCubicMillimeter() {
        return this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMillimeter);
    }
    get TonnesForcePerCubicCentimeter() {
        return this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicCentimeter);
    }
    get TonnesForcePerCubicMeter() {
        return this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMeter);
    }
    get Kilonewtonspercubicmillimeter() {
        return this.convertFromBase(SpecificWeightUnits.Kilonewtonspercubicmillimeter);
    }
    get Kilonewtonspercubiccentimeter() {
        return this.convertFromBase(SpecificWeightUnits.Kilonewtonspercubiccentimeter);
    }
    get Kilonewtonspercubicmeter() {
        return this.convertFromBase(SpecificWeightUnits.Kilonewtonspercubicmeter);
    }
    get Meganewtonspercubicmeter() {
        return this.convertFromBase(SpecificWeightUnits.Meganewtonspercubicmeter);
    }
    get Kilopoundsforcepercubicinch() {
        return this.convertFromBase(SpecificWeightUnits.Kilopoundsforcepercubicinch);
    }
    get Kilopoundsforcepercubicfoot() {
        return this.convertFromBase(SpecificWeightUnits.Kilopoundsforcepercubicfoot);
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
                return this.value * 1000000000;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return this.value * 1000000;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return this.value;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return this.value * 9.80665e9;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return this.value * 9.80665e6;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return this.value * 9.80665;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return this.value * 2.714471375263134e5;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return this.value * 1.570874638462462e2;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return this.value * 9.80665e12;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return this.value * 9.80665e9;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return this.value * 9.80665e3;
            case SpecificWeightUnits.Kilonewtonspercubicmillimeter:
                return (this.value * 0.000000001) * 1000;
            case SpecificWeightUnits.Kilonewtonspercubiccentimeter:
                return (this.value * 0.000001) * 1000;
            case SpecificWeightUnits.Kilonewtonspercubicmeter:
                return (this.value) * 1000;
            case SpecificWeightUnits.Meganewtonspercubicmeter:
                return (this.value) * 1000000;
            case SpecificWeightUnits.Kilopoundsforcepercubicinch:
                return (this.value / 2.714471375263134e5) * 1000;
            case SpecificWeightUnits.Kilopoundsforcepercubicfoot:
                return (this.value / 1.570874638462462e2) * 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
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
                return (this.value * 1000000000) / 1000;
            case SpecificWeightUnits.Kilonewtonspercubiccentimeter:
                return (this.value * 1000000) / 1000;
            case SpecificWeightUnits.Kilonewtonspercubicmeter:
                return (this.value) / 1000;
            case SpecificWeightUnits.Meganewtonspercubicmeter:
                return (this.value) / 1000000;
            case SpecificWeightUnits.Kilopoundsforcepercubicinch:
                return (this.value * 2.714471375263134e5) / 1000;
            case SpecificWeightUnits.Kilopoundsforcepercubicfoot:
                return (this.value * 1.570874638462462e2) / 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.SpecificWeight = SpecificWeight;
//# sourceMappingURL=specificweight.g.js.map