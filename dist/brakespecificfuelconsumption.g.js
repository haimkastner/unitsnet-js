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
        this.gramsperkilowatthourLazy = null;
        this.kilogramsperjouleLazy = null;
        this.poundspermechanicalhorsepowerhourLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerKiloWattHour() {
        if (this.gramsperkilowatthourLazy !== null) {
            return this.gramsperkilowatthourLazy;
        }
        return this.gramsperkilowatthourLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour);
    }
    get KilogramsPerJoule() {
        if (this.kilogramsperjouleLazy !== null) {
            return this.kilogramsperjouleLazy;
        }
        return this.kilogramsperjouleLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule);
    }
    get PoundsPerMechanicalHorsepowerHour() {
        if (this.poundspermechanicalhorsepowerhourLazy !== null) {
            return this.poundspermechanicalhorsepowerhourLazy;
        }
        return this.poundspermechanicalhorsepowerhourLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour);
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
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour:
                return value / 3.6e9;
            case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule:
                return value;
            case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour:
                return value * 1.689659410672e-7;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule) {
        switch (toUnit) {
            case BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour:
                return this.GramsPerKiloWattHour + ` g/kWh`;
            case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule:
                return this.KilogramsPerJoule + ` kg/J`;
            case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour:
                return this.PoundsPerMechanicalHorsepowerHour + ` lb/hph`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.BrakeSpecificFuelConsumption = BrakeSpecificFuelConsumption;
//# sourceMappingURL=brakespecificfuelconsumption.g.js.map