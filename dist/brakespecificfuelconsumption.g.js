"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** BrakeSpecificFuelConsumptionUnits enumeration */
var BrakeSpecificFuelConsumptionUnits;
(function (BrakeSpecificFuelConsumptionUnits) {
    /** */
    BrakeSpecificFuelConsumptionUnits[BrakeSpecificFuelConsumptionUnits["GramsPerKiloWattHour"] = 0] = "GramsPerKiloWattHour";
    /** */
    BrakeSpecificFuelConsumptionUnits[BrakeSpecificFuelConsumptionUnits["KilogramsPerJoule"] = 1] = "KilogramsPerJoule";
    /** The pound per horse power hour uses mechanical horse power and the imperial pound */
    BrakeSpecificFuelConsumptionUnits[BrakeSpecificFuelConsumptionUnits["PoundsPerMechanicalHorsepowerHour"] = 2] = "PoundsPerMechanicalHorsepowerHour";
})(BrakeSpecificFuelConsumptionUnits = exports.BrakeSpecificFuelConsumptionUnits || (exports.BrakeSpecificFuelConsumptionUnits = {}));
/** Brake specific fuel consumption (BSFC) is a measure of the fuel efficiency of any prime mover that burns fuel and produces rotational, or shaft, power. It is typically used for comparing the efficiency of internal combustion engines with a shaft output. */
class BrakeSpecificFuelConsumption {
    /**
     * Create a new BrakeSpecificFuelConsumption.
     * @param value The value.
     * @param fromUnit The ‘BrakeSpecificFuelConsumption’ unit to create from.
     * The default unit is KilogramsPerJoule
     */
    constructor(value, fromUnit = BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule) {
        this.gramsperkilowatthourLazy = null;
        this.kilogramsperjouleLazy = null;
        this.poundspermechanicalhorsepowerhourLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of BrakeSpecificFuelConsumption is KilogramsPerJoule.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get GramsPerKiloWattHour() {
        if (this.gramsperkilowatthourLazy !== null) {
            return this.gramsperkilowatthourLazy;
        }
        return this.gramsperkilowatthourLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour);
    }
    /** */
    get KilogramsPerJoule() {
        if (this.kilogramsperjouleLazy !== null) {
            return this.kilogramsperjouleLazy;
        }
        return this.kilogramsperjouleLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule);
    }
    /** The pound per horse power hour uses mechanical horse power and the imperial pound */
    get PoundsPerMechanicalHorsepowerHour() {
        if (this.poundspermechanicalhorsepowerhourLazy !== null) {
            return this.poundspermechanicalhorsepowerhourLazy;
        }
        return this.poundspermechanicalhorsepowerhourLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour);
    }
    /**
     * Create a new BrakeSpecificFuelConsumption instance from a GramsPerKiloWattHour
     *
     * @param value The unit as GramsPerKiloWattHour to create a new BrakeSpecificFuelConsumption from.
     * @returns The new BrakeSpecificFuelConsumption instance.
     */
    static FromGramsPerKiloWattHour(value) {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour);
    }
    /**
     * Create a new BrakeSpecificFuelConsumption instance from a KilogramsPerJoule
     *
     * @param value The unit as KilogramsPerJoule to create a new BrakeSpecificFuelConsumption from.
     * @returns The new BrakeSpecificFuelConsumption instance.
     */
    static FromKilogramsPerJoule(value) {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule);
    }
    /**
     * Create a new BrakeSpecificFuelConsumption instance from a PoundsPerMechanicalHorsepowerHour
     * The pound per horse power hour uses mechanical horse power and the imperial pound
     * @param value The unit as PoundsPerMechanicalHorsepowerHour to create a new BrakeSpecificFuelConsumption from.
     * @returns The new BrakeSpecificFuelConsumption instance.
     */
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
    /**
     * Format the BrakeSpecificFuelConsumption to string.
     * Note! the default format for BrakeSpecificFuelConsumption is KilogramsPerJoule.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the BrakeSpecificFuelConsumption.
     * @returns The string format of the BrakeSpecificFuelConsumption.
     */
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
    /**
     * Check if the given BrakeSpecificFuelConsumption are equals to the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns True if the given BrakeSpecificFuelConsumption are equal to the current BrakeSpecificFuelConsumption.
     */
    equals(brakeSpecificFuelConsumption) {
        return this.value === brakeSpecificFuelConsumption.BaseValue;
    }
    /**
     * Compare the given BrakeSpecificFuelConsumption against the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns 0 if they are equal, -1 if the current BrakeSpecificFuelConsumption is less then other, 1 if the current BrakeSpecificFuelConsumption is greater then other.
     */
    compareTo(brakeSpecificFuelConsumption) {
        if (this.value > brakeSpecificFuelConsumption.BaseValue)
            return 1;
        if (this.value < brakeSpecificFuelConsumption.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given BrakeSpecificFuelConsumption with the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns A new BrakeSpecificFuelConsumption instance with the results.
     */
    add(brakeSpecificFuelConsumption) {
        return new BrakeSpecificFuelConsumption(this.value + brakeSpecificFuelConsumption.BaseValue);
    }
    /**
     * Subtract the given BrakeSpecificFuelConsumption with the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns A new BrakeSpecificFuelConsumption instance with the results.
     */
    subtract(brakeSpecificFuelConsumption) {
        return new BrakeSpecificFuelConsumption(this.value - brakeSpecificFuelConsumption.BaseValue);
    }
    /**
     * Multiply the given BrakeSpecificFuelConsumption with the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns A new BrakeSpecificFuelConsumption instance with the results.
     */
    multiply(brakeSpecificFuelConsumption) {
        return new BrakeSpecificFuelConsumption(this.value * brakeSpecificFuelConsumption.BaseValue);
    }
    /**
     * Divide the given BrakeSpecificFuelConsumption with the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns A new BrakeSpecificFuelConsumption instance with the results.
     */
    divide(brakeSpecificFuelConsumption) {
        return new BrakeSpecificFuelConsumption(this.value / brakeSpecificFuelConsumption.BaseValue);
    }
    /**
     * Modulo the given BrakeSpecificFuelConsumption with the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns A new BrakeSpecificFuelConsumption instance with the results.
     */
    modulo(brakeSpecificFuelConsumption) {
        return new BrakeSpecificFuelConsumption(this.value % brakeSpecificFuelConsumption.BaseValue);
    }
    /**
     * Pow the given BrakeSpecificFuelConsumption with the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns A new BrakeSpecificFuelConsumption instance with the results.
     */
    pow(brakeSpecificFuelConsumption) {
        return new BrakeSpecificFuelConsumption(this.value ** brakeSpecificFuelConsumption.BaseValue);
    }
}
exports.BrakeSpecificFuelConsumption = BrakeSpecificFuelConsumption;
//# sourceMappingURL=brakespecificfuelconsumption.g.js.map