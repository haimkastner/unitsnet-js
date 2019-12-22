"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricCurrentDensityUnits;
(function (ElectricCurrentDensityUnits) {
    ElectricCurrentDensityUnits[ElectricCurrentDensityUnits["AmperesPerSquareMeter"] = 0] = "AmperesPerSquareMeter";
    ElectricCurrentDensityUnits[ElectricCurrentDensityUnits["AmperesPerSquareInch"] = 1] = "AmperesPerSquareInch";
    ElectricCurrentDensityUnits[ElectricCurrentDensityUnits["AmperesPerSquareFoot"] = 2] = "AmperesPerSquareFoot";
})(ElectricCurrentDensityUnits = exports.ElectricCurrentDensityUnits || (exports.ElectricCurrentDensityUnits = {}));
class ElectricCurrentDensity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get AmperesPerSquareMeter() {
        return this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareMeter);
    }
    get AmperesPerSquareInch() {
        return this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareInch);
    }
    get AmperesPerSquareFoot() {
        return this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareFoot);
    }
    static FromAmperesPerSquareMeter(value) {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareMeter);
    }
    static FromAmperesPerSquareInch(value) {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareInch);
    }
    static FromAmperesPerSquareFoot(value) {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareFoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter:
                return this.value;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch:
                return this.value * 1.5500031000062000e3;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot:
                return this.value * 1.0763910416709722e1;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter:
                return this.value;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch:
                return this.value / 1.5500031000062000e3;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot:
                return this.value / 1.0763910416709722e1;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricCurrentDensity = ElectricCurrentDensity;
//# sourceMappingURL=electriccurrentdensity.g.js.map