"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricSurfaceChargeDensityUnits;
(function (ElectricSurfaceChargeDensityUnits) {
    ElectricSurfaceChargeDensityUnits[ElectricSurfaceChargeDensityUnits["CoulombsPerSquareMeter"] = 0] = "CoulombsPerSquareMeter";
    ElectricSurfaceChargeDensityUnits[ElectricSurfaceChargeDensityUnits["CoulombsPerSquareCentimeter"] = 1] = "CoulombsPerSquareCentimeter";
    ElectricSurfaceChargeDensityUnits[ElectricSurfaceChargeDensityUnits["CoulombsPerSquareInch"] = 2] = "CoulombsPerSquareInch";
})(ElectricSurfaceChargeDensityUnits = exports.ElectricSurfaceChargeDensityUnits || (exports.ElectricSurfaceChargeDensityUnits = {}));
class ElectricSurfaceChargeDensity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get CoulombsPerSquareMeter() {
        return this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter);
    }
    get CoulombsPerSquareCentimeter() {
        return this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter);
    }
    get CoulombsPerSquareInch() {
        return this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch);
    }
    static FromCoulombsPerSquareMeter(value) {
        return new ElectricSurfaceChargeDensity(value, ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter);
    }
    static FromCoulombsPerSquareCentimeter(value) {
        return new ElectricSurfaceChargeDensity(value, ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter);
    }
    static FromCoulombsPerSquareInch(value) {
        return new ElectricSurfaceChargeDensity(value, ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                return this.value;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                return this.value / 1.0e4;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                return this.value / 1.5500031000062000e3;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                return value;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                return value * 1.0e4;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                return value * 1.5500031000062000e3;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricSurfaceChargeDensity = ElectricSurfaceChargeDensity;
//# sourceMappingURL=electricsurfacechargedensity.g.js.map