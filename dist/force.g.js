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
    ForceUnits[ForceUnits["Micronewton"] = 8] = "Micronewton";
    ForceUnits[ForceUnits["Decanewton"] = 9] = "Decanewton";
    ForceUnits[ForceUnits["Kilonewton"] = 10] = "Kilonewton";
    ForceUnits[ForceUnits["Meganewton"] = 11] = "Meganewton";
})(ForceUnits = exports.ForceUnits || (exports.ForceUnits = {}));
class Force {
    constructor(value, fromUnit) {
        this.dyneLazy = null;
        this.kilogramsforceLazy = null;
        this.tonnesforceLazy = null;
        this.newtonsLazy = null;
        this.kilopondsLazy = null;
        this.poundalsLazy = null;
        this.poundsforceLazy = null;
        this.ounceforceLazy = null;
        this.micronewtonLazy = null;
        this.decanewtonLazy = null;
        this.kilonewtonLazy = null;
        this.meganewtonLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Dyne() {
        if (this.dyneLazy !== null) {
            return this.dyneLazy;
        }
        return this.dyneLazy = this.convertFromBase(ForceUnits.Dyne);
    }
    get KilogramsForce() {
        if (this.kilogramsforceLazy !== null) {
            return this.kilogramsforceLazy;
        }
        return this.kilogramsforceLazy = this.convertFromBase(ForceUnits.KilogramsForce);
    }
    get TonnesForce() {
        if (this.tonnesforceLazy !== null) {
            return this.tonnesforceLazy;
        }
        return this.tonnesforceLazy = this.convertFromBase(ForceUnits.TonnesForce);
    }
    get Newtons() {
        if (this.newtonsLazy !== null) {
            return this.newtonsLazy;
        }
        return this.newtonsLazy = this.convertFromBase(ForceUnits.Newtons);
    }
    get KiloPonds() {
        if (this.kilopondsLazy !== null) {
            return this.kilopondsLazy;
        }
        return this.kilopondsLazy = this.convertFromBase(ForceUnits.KiloPonds);
    }
    get Poundals() {
        if (this.poundalsLazy !== null) {
            return this.poundalsLazy;
        }
        return this.poundalsLazy = this.convertFromBase(ForceUnits.Poundals);
    }
    get PoundsForce() {
        if (this.poundsforceLazy !== null) {
            return this.poundsforceLazy;
        }
        return this.poundsforceLazy = this.convertFromBase(ForceUnits.PoundsForce);
    }
    get OunceForce() {
        if (this.ounceforceLazy !== null) {
            return this.ounceforceLazy;
        }
        return this.ounceforceLazy = this.convertFromBase(ForceUnits.OunceForce);
    }
    get Micronewton() {
        if (this.micronewtonLazy !== null) {
            return this.micronewtonLazy;
        }
        return this.micronewtonLazy = this.convertFromBase(ForceUnits.Micronewton);
    }
    get Decanewton() {
        if (this.decanewtonLazy !== null) {
            return this.decanewtonLazy;
        }
        return this.decanewtonLazy = this.convertFromBase(ForceUnits.Decanewton);
    }
    get Kilonewton() {
        if (this.kilonewtonLazy !== null) {
            return this.kilonewtonLazy;
        }
        return this.kilonewtonLazy = this.convertFromBase(ForceUnits.Kilonewton);
    }
    get Meganewton() {
        if (this.meganewtonLazy !== null) {
            return this.meganewtonLazy;
        }
        return this.meganewtonLazy = this.convertFromBase(ForceUnits.Meganewton);
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
    static FromMicronewton(value) {
        return new Force(value, ForceUnits.Micronewton);
    }
    static FromDecanewton(value) {
        return new Force(value, ForceUnits.Decanewton);
    }
    static FromKilonewton(value) {
        return new Force(value, ForceUnits.Kilonewton);
    }
    static FromMeganewton(value) {
        return new Force(value, ForceUnits.Meganewton);
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
            case ForceUnits.Micronewton:
                return (this.value) / 0.000001;
            case ForceUnits.Decanewton:
                return (this.value) / 10;
            case ForceUnits.Kilonewton:
                return (this.value) / 1000;
            case ForceUnits.Meganewton:
                return (this.value) / 1000000;
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
            case ForceUnits.Micronewton:
                return (value) * 0.000001;
            case ForceUnits.Decanewton:
                return (value) * 10;
            case ForceUnits.Kilonewton:
                return (value) * 1000;
            case ForceUnits.Meganewton:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ForceUnits.Newtons) {
        switch (toUnit) {
            case ForceUnits.Dyne:
                return this.Dyne + ` dyn`;
            case ForceUnits.KilogramsForce:
                return this.KilogramsForce + ` kgf`;
            case ForceUnits.TonnesForce:
                return this.TonnesForce + ` Ton`;
            case ForceUnits.Newtons:
                return this.Newtons + ` N`;
            case ForceUnits.KiloPonds:
                return this.KiloPonds + ` kp`;
            case ForceUnits.Poundals:
                return this.Poundals + ` pdl`;
            case ForceUnits.PoundsForce:
                return this.PoundsForce + ` lbf`;
            case ForceUnits.OunceForce:
                return this.OunceForce + ` ozf`;
            case ForceUnits.Micronewton:
                return this.Micronewton + ` N`;
            case ForceUnits.Decanewton:
                return this.Decanewton + ` N`;
            case ForceUnits.Kilonewton:
                return this.Kilonewton + ` N`;
            case ForceUnits.Meganewton:
                return this.Meganewton + ` N`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Force = Force;
//# sourceMappingURL=force.g.js.map