"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricPotentialDcUnits;
(function (ElectricPotentialDcUnits) {
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["VoltsDc"] = 0] = "VoltsDc";
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["MicrovoltDc"] = 1] = "MicrovoltDc";
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["KilovoltDc"] = 2] = "KilovoltDc";
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["MegavoltDc"] = 3] = "MegavoltDc";
})(ElectricPotentialDcUnits = exports.ElectricPotentialDcUnits || (exports.ElectricPotentialDcUnits = {}));
class ElectricPotentialDc {
    constructor(value, fromUnit) {
        this.voltsdcLazy = null;
        this.microvoltdcLazy = null;
        this.kilovoltdcLazy = null;
        this.megavoltdcLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltsDc() {
        if (this.voltsdcLazy !== null) {
            return this.voltsdcLazy;
        }
        return this.voltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.VoltsDc);
    }
    get MicrovoltDc() {
        if (this.microvoltdcLazy !== null) {
            return this.microvoltdcLazy;
        }
        return this.microvoltdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MicrovoltDc);
    }
    get KilovoltDc() {
        if (this.kilovoltdcLazy !== null) {
            return this.kilovoltdcLazy;
        }
        return this.kilovoltdcLazy = this.convertFromBase(ElectricPotentialDcUnits.KilovoltDc);
    }
    get MegavoltDc() {
        if (this.megavoltdcLazy !== null) {
            return this.megavoltdcLazy;
        }
        return this.megavoltdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MegavoltDc);
    }
    static FromVoltsDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.VoltsDc);
    }
    static FromMicrovoltDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MicrovoltDc);
    }
    static FromKilovoltDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.KilovoltDc);
    }
    static FromMegavoltDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MegavoltDc);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricPotentialDcUnits.VoltsDc:
                return this.value;
            case ElectricPotentialDcUnits.MicrovoltDc:
                return (this.value) / 0.000001;
            case ElectricPotentialDcUnits.KilovoltDc:
                return (this.value) / 1000;
            case ElectricPotentialDcUnits.MegavoltDc:
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
            case ElectricPotentialDcUnits.MicrovoltDc:
                return (value) * 0.000001;
            case ElectricPotentialDcUnits.KilovoltDc:
                return (value) * 1000;
            case ElectricPotentialDcUnits.MegavoltDc:
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
            case ElectricPotentialDcUnits.MicrovoltDc:
                return this.MicrovoltDc + ` Vdc`;
            case ElectricPotentialDcUnits.KilovoltDc:
                return this.KilovoltDc + ` Vdc`;
            case ElectricPotentialDcUnits.MegavoltDc:
                return this.MegavoltDc + ` Vdc`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricPotentialDc = ElectricPotentialDc;
//# sourceMappingURL=electricpotentialdc.g.js.map