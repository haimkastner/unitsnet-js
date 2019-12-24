"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForceUnits;
(function (ForceUnits) {
    ForceUnits[ForceUnits["Dyne"] = 0] = "Dyne";
    ForceUnits[ForceUnits["KilogramsForce"] = 1] = "KilogramsForce";
    ForceUnits[ForceUnits["TonnesForce"] = 2] = "TonnesForce";
    ForceUnits[ForceUnits["Newtons"] = 3] = "Newtons";
    ForceUnits[ForceUnits["KiloPonds"] = 4] = "KiloPonds";
    ForceUnits[ForceUnits["Poundals"] = 5] = "Poundals";
    ForceUnits[ForceUnits["PoundsForce"] = 6] = "PoundsForce";
    ForceUnits[ForceUnits["OunceForce"] = 7] = "OunceForce";
    ForceUnits[ForceUnits["Micronewtons"] = 8] = "Micronewtons";
    ForceUnits[ForceUnits["Kilonewtons"] = 9] = "Kilonewtons";
    ForceUnits[ForceUnits["Meganewtons"] = 10] = "Meganewtons";
})(ForceUnits = exports.ForceUnits || (exports.ForceUnits = {}));
class Force {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Dyne() {
        return this.convertFromBase(ForceUnits.Dyne);
    }
    get KilogramsForce() {
        return this.convertFromBase(ForceUnits.KilogramsForce);
    }
    get TonnesForce() {
        return this.convertFromBase(ForceUnits.TonnesForce);
    }
    get Newtons() {
        return this.convertFromBase(ForceUnits.Newtons);
    }
    get KiloPonds() {
        return this.convertFromBase(ForceUnits.KiloPonds);
    }
    get Poundals() {
        return this.convertFromBase(ForceUnits.Poundals);
    }
    get PoundsForce() {
        return this.convertFromBase(ForceUnits.PoundsForce);
    }
    get OunceForce() {
        return this.convertFromBase(ForceUnits.OunceForce);
    }
    get Micronewtons() {
        return this.convertFromBase(ForceUnits.Micronewtons);
    }
    get Kilonewtons() {
        return this.convertFromBase(ForceUnits.Kilonewtons);
    }
    get Meganewtons() {
        return this.convertFromBase(ForceUnits.Meganewtons);
    }
    static FromDyne(value) {
        return new Force(value, ForceUnits.Dyne);
    }
    static FromKilogramsForce(value) {
        return new Force(value, ForceUnits.KilogramsForce);
    }
    static FromTonnesForce(value) {
        return new Force(value, ForceUnits.TonnesForce);
    }
    static FromNewtons(value) {
        return new Force(value, ForceUnits.Newtons);
    }
    static FromKiloPonds(value) {
        return new Force(value, ForceUnits.KiloPonds);
    }
    static FromPoundals(value) {
        return new Force(value, ForceUnits.Poundals);
    }
    static FromPoundsForce(value) {
        return new Force(value, ForceUnits.PoundsForce);
    }
    static FromOunceForce(value) {
        return new Force(value, ForceUnits.OunceForce);
    }
    static FromMicronewtons(value) {
        return new Force(value, ForceUnits.Micronewtons);
    }
    static FromKilonewtons(value) {
        return new Force(value, ForceUnits.Kilonewtons);
    }
    static FromMeganewtons(value) {
        return new Force(value, ForceUnits.Meganewtons);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ForceUnits.Dyne:
                return this.value * 1e5;
            case ForceUnits.KilogramsForce:
                return this.value / 9.80665002864;
            case ForceUnits.TonnesForce:
                return this.value / 9.80665002864e3;
            case ForceUnits.Newtons:
                return this.value;
            case ForceUnits.KiloPonds:
                return this.value / 9.80665002864;
            case ForceUnits.Poundals:
                return this.value / 0.13825502798973041652092282466083;
            case ForceUnits.PoundsForce:
                return this.value / 4.4482216152605095551842641431421;
            case ForceUnits.OunceForce:
                return this.value / 2.780138509537812e-1;
            case ForceUnits.Micronewtons:
                return (this.value) * 0.000001;
            case ForceUnits.Kilonewtons:
                return (this.value) * 1000;
            case ForceUnits.Meganewtons:
                return (this.value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ForceUnits.Dyne:
                return value / 1e5;
            case ForceUnits.KilogramsForce:
                return value * 9.80665002864;
            case ForceUnits.TonnesForce:
                return value * 9.80665002864e3;
            case ForceUnits.Newtons:
                return value;
            case ForceUnits.KiloPonds:
                return value * 9.80665002864;
            case ForceUnits.Poundals:
                return value * 0.13825502798973041652092282466083;
            case ForceUnits.PoundsForce:
                return value * 4.4482216152605095551842641431421;
            case ForceUnits.OunceForce:
                return value * 2.780138509537812e-1;
            case ForceUnits.Micronewtons:
                return (value) / 0.000001;
            case ForceUnits.Kilonewtons:
                return (value) / 1000;
            case ForceUnits.Meganewtons:
                return (value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Force = Force;
//# sourceMappingURL=force.g.js.map