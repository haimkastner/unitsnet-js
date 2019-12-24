"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeatFluxUnits;
(function (HeatFluxUnits) {
    HeatFluxUnits[HeatFluxUnits["WattsPerSquareMeter"] = 0] = "WattsPerSquareMeter";
    HeatFluxUnits[HeatFluxUnits["WattsPerSquareInch"] = 1] = "WattsPerSquareInch";
    HeatFluxUnits[HeatFluxUnits["WattsPerSquareFoot"] = 2] = "WattsPerSquareFoot";
    HeatFluxUnits[HeatFluxUnits["BtusPerSecondSquareInch"] = 3] = "BtusPerSecondSquareInch";
    HeatFluxUnits[HeatFluxUnits["BtusPerSecondSquareFoot"] = 4] = "BtusPerSecondSquareFoot";
    HeatFluxUnits[HeatFluxUnits["BtusPerMinuteSquareFoot"] = 5] = "BtusPerMinuteSquareFoot";
    HeatFluxUnits[HeatFluxUnits["BtusPerHourSquareFoot"] = 6] = "BtusPerHourSquareFoot";
    HeatFluxUnits[HeatFluxUnits["CaloriesPerSecondSquareCentimeter"] = 7] = "CaloriesPerSecondSquareCentimeter";
    HeatFluxUnits[HeatFluxUnits["KilocaloriesPerHourSquareMeter"] = 8] = "KilocaloriesPerHourSquareMeter";
    HeatFluxUnits[HeatFluxUnits["PoundsForcePerFootSecond"] = 9] = "PoundsForcePerFootSecond";
    HeatFluxUnits[HeatFluxUnits["PoundsPerSecondCubed"] = 10] = "PoundsPerSecondCubed";
    HeatFluxUnits[HeatFluxUnits["Nanowattspersquaremeter"] = 11] = "Nanowattspersquaremeter";
    HeatFluxUnits[HeatFluxUnits["Microwattspersquaremeter"] = 12] = "Microwattspersquaremeter";
    HeatFluxUnits[HeatFluxUnits["Centiwattspersquaremeter"] = 13] = "Centiwattspersquaremeter";
    HeatFluxUnits[HeatFluxUnits["Deciwattspersquaremeter"] = 14] = "Deciwattspersquaremeter";
    HeatFluxUnits[HeatFluxUnits["Kilowattspersquaremeter"] = 15] = "Kilowattspersquaremeter";
    HeatFluxUnits[HeatFluxUnits["Kilocaloriespersecondsquarecentimeter"] = 16] = "Kilocaloriespersecondsquarecentimeter";
})(HeatFluxUnits = exports.HeatFluxUnits || (exports.HeatFluxUnits = {}));
class HeatFlux {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get WattsPerSquareMeter() {
        return this.convertFromBase(HeatFluxUnits.WattsPerSquareMeter);
    }
    get WattsPerSquareInch() {
        return this.convertFromBase(HeatFluxUnits.WattsPerSquareInch);
    }
    get WattsPerSquareFoot() {
        return this.convertFromBase(HeatFluxUnits.WattsPerSquareFoot);
    }
    get BtusPerSecondSquareInch() {
        return this.convertFromBase(HeatFluxUnits.BtusPerSecondSquareInch);
    }
    get BtusPerSecondSquareFoot() {
        return this.convertFromBase(HeatFluxUnits.BtusPerSecondSquareFoot);
    }
    get BtusPerMinuteSquareFoot() {
        return this.convertFromBase(HeatFluxUnits.BtusPerMinuteSquareFoot);
    }
    get BtusPerHourSquareFoot() {
        return this.convertFromBase(HeatFluxUnits.BtusPerHourSquareFoot);
    }
    get CaloriesPerSecondSquareCentimeter() {
        return this.convertFromBase(HeatFluxUnits.CaloriesPerSecondSquareCentimeter);
    }
    get KilocaloriesPerHourSquareMeter() {
        return this.convertFromBase(HeatFluxUnits.KilocaloriesPerHourSquareMeter);
    }
    get PoundsForcePerFootSecond() {
        return this.convertFromBase(HeatFluxUnits.PoundsForcePerFootSecond);
    }
    get PoundsPerSecondCubed() {
        return this.convertFromBase(HeatFluxUnits.PoundsPerSecondCubed);
    }
    get Nanowattspersquaremeter() {
        return this.convertFromBase(HeatFluxUnits.Nanowattspersquaremeter);
    }
    get Microwattspersquaremeter() {
        return this.convertFromBase(HeatFluxUnits.Microwattspersquaremeter);
    }
    get Centiwattspersquaremeter() {
        return this.convertFromBase(HeatFluxUnits.Centiwattspersquaremeter);
    }
    get Deciwattspersquaremeter() {
        return this.convertFromBase(HeatFluxUnits.Deciwattspersquaremeter);
    }
    get Kilowattspersquaremeter() {
        return this.convertFromBase(HeatFluxUnits.Kilowattspersquaremeter);
    }
    get Kilocaloriespersecondsquarecentimeter() {
        return this.convertFromBase(HeatFluxUnits.Kilocaloriespersecondsquarecentimeter);
    }
    static FromWattsPerSquareMeter(value) {
        return new HeatFlux(value, HeatFluxUnits.WattsPerSquareMeter);
    }
    static FromWattsPerSquareInch(value) {
        return new HeatFlux(value, HeatFluxUnits.WattsPerSquareInch);
    }
    static FromWattsPerSquareFoot(value) {
        return new HeatFlux(value, HeatFluxUnits.WattsPerSquareFoot);
    }
    static FromBtusPerSecondSquareInch(value) {
        return new HeatFlux(value, HeatFluxUnits.BtusPerSecondSquareInch);
    }
    static FromBtusPerSecondSquareFoot(value) {
        return new HeatFlux(value, HeatFluxUnits.BtusPerSecondSquareFoot);
    }
    static FromBtusPerMinuteSquareFoot(value) {
        return new HeatFlux(value, HeatFluxUnits.BtusPerMinuteSquareFoot);
    }
    static FromBtusPerHourSquareFoot(value) {
        return new HeatFlux(value, HeatFluxUnits.BtusPerHourSquareFoot);
    }
    static FromCaloriesPerSecondSquareCentimeter(value) {
        return new HeatFlux(value, HeatFluxUnits.CaloriesPerSecondSquareCentimeter);
    }
    static FromKilocaloriesPerHourSquareMeter(value) {
        return new HeatFlux(value, HeatFluxUnits.KilocaloriesPerHourSquareMeter);
    }
    static FromPoundsForcePerFootSecond(value) {
        return new HeatFlux(value, HeatFluxUnits.PoundsForcePerFootSecond);
    }
    static FromPoundsPerSecondCubed(value) {
        return new HeatFlux(value, HeatFluxUnits.PoundsPerSecondCubed);
    }
    static FromNanowattspersquaremeter(value) {
        return new HeatFlux(value, HeatFluxUnits.Nanowattspersquaremeter);
    }
    static FromMicrowattspersquaremeter(value) {
        return new HeatFlux(value, HeatFluxUnits.Microwattspersquaremeter);
    }
    static FromCentiwattspersquaremeter(value) {
        return new HeatFlux(value, HeatFluxUnits.Centiwattspersquaremeter);
    }
    static FromDeciwattspersquaremeter(value) {
        return new HeatFlux(value, HeatFluxUnits.Deciwattspersquaremeter);
    }
    static FromKilowattspersquaremeter(value) {
        return new HeatFlux(value, HeatFluxUnits.Kilowattspersquaremeter);
    }
    static FromKilocaloriespersecondsquarecentimeter(value) {
        return new HeatFlux(value, HeatFluxUnits.Kilocaloriespersecondsquarecentimeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case HeatFluxUnits.WattsPerSquareMeter:
                return this.value;
            case HeatFluxUnits.WattsPerSquareInch:
                return this.value / 1.5500031e3;
            case HeatFluxUnits.WattsPerSquareFoot:
                return this.value / 1.07639e1;
            case HeatFluxUnits.BtusPerSecondSquareInch:
                return this.value / 1.63533984e6;
            case HeatFluxUnits.BtusPerSecondSquareFoot:
                return this.value / 1.13565267e4;
            case HeatFluxUnits.BtusPerMinuteSquareFoot:
                return this.value / 1.89275445e2;
            case HeatFluxUnits.BtusPerHourSquareFoot:
                return this.value / 3.15459075;
            case HeatFluxUnits.CaloriesPerSecondSquareCentimeter:
                return this.value / 4.1868e4;
            case HeatFluxUnits.KilocaloriesPerHourSquareMeter:
                return this.value / 1.163;
            case HeatFluxUnits.PoundsForcePerFootSecond:
                return this.value / 1.459390293720636e1;
            case HeatFluxUnits.PoundsPerSecondCubed:
                return this.value / 4.5359237e-1;
            case HeatFluxUnits.Nanowattspersquaremeter:
                return (this.value) * 1e-9;
            case HeatFluxUnits.Microwattspersquaremeter:
                return (this.value) * 0.000001;
            case HeatFluxUnits.Centiwattspersquaremeter:
                return (this.value) * 0.01;
            case HeatFluxUnits.Deciwattspersquaremeter:
                return (this.value) * 0.1;
            case HeatFluxUnits.Kilowattspersquaremeter:
                return (this.value) * 1000;
            case HeatFluxUnits.Kilocaloriespersecondsquarecentimeter:
                return (this.value * 4.1868e4) * 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case HeatFluxUnits.WattsPerSquareMeter:
                return value;
            case HeatFluxUnits.WattsPerSquareInch:
                return value * 1.5500031e3;
            case HeatFluxUnits.WattsPerSquareFoot:
                return value * 1.07639e1;
            case HeatFluxUnits.BtusPerSecondSquareInch:
                return value * 1.63533984e6;
            case HeatFluxUnits.BtusPerSecondSquareFoot:
                return value * 1.13565267e4;
            case HeatFluxUnits.BtusPerMinuteSquareFoot:
                return value * 1.89275445e2;
            case HeatFluxUnits.BtusPerHourSquareFoot:
                return value * 3.15459075;
            case HeatFluxUnits.CaloriesPerSecondSquareCentimeter:
                return value * 4.1868e4;
            case HeatFluxUnits.KilocaloriesPerHourSquareMeter:
                return value * 1.163;
            case HeatFluxUnits.PoundsForcePerFootSecond:
                return value * 1.459390293720636e1;
            case HeatFluxUnits.PoundsPerSecondCubed:
                return value * 4.5359237e-1;
            case HeatFluxUnits.Nanowattspersquaremeter:
                return (value) / 1e-9;
            case HeatFluxUnits.Microwattspersquaremeter:
                return (value) / 0.000001;
            case HeatFluxUnits.Centiwattspersquaremeter:
                return (value) / 0.01;
            case HeatFluxUnits.Deciwattspersquaremeter:
                return (value) / 0.1;
            case HeatFluxUnits.Kilowattspersquaremeter:
                return (value) / 1000;
            case HeatFluxUnits.Kilocaloriespersecondsquarecentimeter:
                return (value / 4.1868e4) / 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.HeatFlux = HeatFlux;
//# sourceMappingURL=heatflux.g.js.map