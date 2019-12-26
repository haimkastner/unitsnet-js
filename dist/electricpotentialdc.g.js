"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricPotentialDcUnits;
(function (ElectricPotentialDcUnits) {
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["VoltsDc"] = 0] = "VoltsDc";
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["MicrovoltsDc"] = 1] = "MicrovoltsDc";
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["KilovoltsDc"] = 2] = "KilovoltsDc";
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["MegavoltsDc"] = 3] = "MegavoltsDc";
})(ElectricPotentialDcUnits = exports.ElectricPotentialDcUnits || (exports.ElectricPotentialDcUnits = {}));
class ElectricPotentialDc {
    constructor(value, fromUnit) {
        this.voltsdcLazy = null;
        this.microvoltsdcLazy = null;
        this.kilovoltsdcLazy = null;
        this.megavoltsdcLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltsDc() {
        if (this.voltsdcLazy !== null) {
            return this.voltsdcLazy;
        }
        return this.voltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.VoltsDc);
    }
    get MicrovoltsDc() {
        if (this.microvoltsdcLazy !== null) {
            return this.microvoltsdcLazy;
        }
        return this.microvoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MicrovoltsDc);
    }
    get KilovoltsDc() {
        if (this.kilovoltsdcLazy !== null) {
            return this.kilovoltsdcLazy;
        }
        return this.kilovoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.KilovoltsDc);
    }
    get MegavoltsDc() {
        if (this.megavoltsdcLazy !== null) {
            return this.megavoltsdcLazy;
        }
        return this.megavoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MegavoltsDc);
    }
    static FromVoltsDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.VoltsDc);
    }
    static FromMicrovoltsDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MicrovoltsDc);
    }
    static FromKilovoltsDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.KilovoltsDc);
    }
    static FromMegavoltsDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MegavoltsDc);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricPotentialDcUnits.VoltsDc:
                return this.value;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return (this.value) / 0.000001;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return (this.value) / 1000;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricPotentialDcUnits.VoltsDc:
                return value;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return (value) * 0.000001;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return (value) * 1000;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ElectricPotentialDcUnits.VoltsDc) {
        switch (toUnit) {
            case ElectricPotentialDcUnits.VoltsDc:
                return this.VoltsDc + ` Vdc`;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return this.MicrovoltsDc + ` Vdc`;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return this.KilovoltsDc + ` Vdc`;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return this.MegavoltsDc + ` Vdc`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricPotentialDc = ElectricPotentialDc;
//# sourceMappingURL=electricpotentialdc.g.js.map