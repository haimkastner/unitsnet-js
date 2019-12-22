"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrakeSpecificFuelConsumptionUnits;
(function (BrakeSpecificFuelConsumptionUnits) {
    BrakeSpecificFuelConsumptionUnits[BrakeSpecificFuelConsumptionUnits["GramsPerKiloWattHour"] = 0] = "GramsPerKiloWattHour";
    BrakeSpecificFuelConsumptionUnits[BrakeSpecificFuelConsumptionUnits["KilogramsPerJoule"] = 1] = "KilogramsPerJoule";
    BrakeSpecificFuelConsumptionUnits[BrakeSpecificFuelConsumptionUnits["PoundsPerMechanicalHorsepowerHour"] = 2] = "PoundsPerMechanicalHorsepowerHour";
})(BrakeSpecificFuelConsumptionUnits = exports.BrakeSpecificFuelConsumptionUnits || (exports.BrakeSpecificFuelConsumptionUnits = {}));
class BrakeSpecificFuelConsumption {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerKiloWattHour() {
        return this.convertFromBase(BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour);
    }
    get KilogramsPerJoule() {
        return this.convertFromBase(BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule);
    }
    get PoundsPerMechanicalHorsepowerHour() {
        return this.convertFromBase(BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour);
    }
    static FromGramsPerKiloWattHour(value) {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour);
    }
    static FromKilogramsPerJoule(value) {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule);
    }
    static FromPoundsPerMechanicalHorsepowerHour(value) {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour:
                return this.value / 3.6e9;
            case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule:
                return this.value;
            case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour:
                return this.value * 1.689659410672e-7;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour:
                return this.value * 3.6e9;
            case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule:
                return this.value;
            case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour:
                return this.value / 1.689659410672e-7;
            default:
                break;
        }
        return NaN;
    }
}
exports.BrakeSpecificFuelConsumption = BrakeSpecificFuelConsumption;
//# sourceMappingURL=brakespecificfuelconsumption.g.js.map