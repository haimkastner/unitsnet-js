"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricFieldUnits;
(function (ElectricFieldUnits) {
    ElectricFieldUnits[ElectricFieldUnits["VoltsPerMeter"] = 0] = "VoltsPerMeter";
})(ElectricFieldUnits = exports.ElectricFieldUnits || (exports.ElectricFieldUnits = {}));
class ElectricField {
    constructor(value, fromUnit) {
        this.voltspermeterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltsPerMeter() {
        if (this.voltspermeterLazy !== null) {
            return this.voltspermeterLazy;
        }
        return this.voltspermeterLazy = this.convertFromBase(ElectricFieldUnits.VoltsPerMeter);
    }
    static FromVoltsPerMeter(value) {
        return new ElectricField(value, ElectricFieldUnits.VoltsPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricFieldUnits.VoltsPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricFieldUnits.VoltsPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricField = ElectricField;
//# sourceMappingURL=electricfield.g.js.map