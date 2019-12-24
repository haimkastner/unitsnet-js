"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricChargeDensityUnits;
(function (ElectricChargeDensityUnits) {
    ElectricChargeDensityUnits[ElectricChargeDensityUnits["CoulombsPerCubicMeter"] = 0] = "CoulombsPerCubicMeter";
})(ElectricChargeDensityUnits = exports.ElectricChargeDensityUnits || (exports.ElectricChargeDensityUnits = {}));
class ElectricChargeDensity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get CoulombsPerCubicMeter() {
        return this.convertFromBase(ElectricChargeDensityUnits.CoulombsPerCubicMeter);
    }
    static FromCoulombsPerCubicMeter(value) {
        return new ElectricChargeDensity(value, ElectricChargeDensityUnits.CoulombsPerCubicMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricChargeDensity = ElectricChargeDensity;
//# sourceMappingURL=electricchargedensity.g.js.map