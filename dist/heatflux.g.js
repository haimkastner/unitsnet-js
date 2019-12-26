"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** HeatFluxUnits enumeration */
var HeatFluxUnits;
(function (HeatFluxUnits) {
    /** */
    HeatFluxUnits[HeatFluxUnits["WattsPerSquareMeter"] = 0] = "WattsPerSquareMeter";
    /** */
    HeatFluxUnits[HeatFluxUnits["WattsPerSquareInch"] = 1] = "WattsPerSquareInch";
    /** */
    HeatFluxUnits[HeatFluxUnits["WattsPerSquareFoot"] = 2] = "WattsPerSquareFoot";
    /** */
    HeatFluxUnits[HeatFluxUnits["BtusPerSecondSquareInch"] = 3] = "BtusPerSecondSquareInch";
    /** */
    HeatFluxUnits[HeatFluxUnits["BtusPerSecondSquareFoot"] = 4] = "BtusPerSecondSquareFoot";
    /** */
    HeatFluxUnits[HeatFluxUnits["BtusPerMinuteSquareFoot"] = 5] = "BtusPerMinuteSquareFoot";
    /** */
    HeatFluxUnits[HeatFluxUnits["BtusPerHourSquareFoot"] = 6] = "BtusPerHourSquareFoot";
    /** */
    HeatFluxUnits[HeatFluxUnits["CaloriesPerSecondSquareCentimeter"] = 7] = "CaloriesPerSecondSquareCentimeter";
    /** */
    HeatFluxUnits[HeatFluxUnits["KilocaloriesPerHourSquareMeter"] = 8] = "KilocaloriesPerHourSquareMeter";
    /** */
    HeatFluxUnits[HeatFluxUnits["PoundsForcePerFootSecond"] = 9] = "PoundsForcePerFootSecond";
    /** */
    HeatFluxUnits[HeatFluxUnits["PoundsPerSecondCubed"] = 10] = "PoundsPerSecondCubed";
    /** */
    HeatFluxUnits[HeatFluxUnits["NanowattsPerSquareMeter"] = 11] = "NanowattsPerSquareMeter";
    /** */
    HeatFluxUnits[HeatFluxUnits["MicrowattsPerSquareMeter"] = 12] = "MicrowattsPerSquareMeter";
    /** */
    HeatFluxUnits[HeatFluxUnits["CentiwattsPerSquareMeter"] = 13] = "CentiwattsPerSquareMeter";
    /** */
    HeatFluxUnits[HeatFluxUnits["DeciwattsPerSquareMeter"] = 14] = "DeciwattsPerSquareMeter";
    /** */
    HeatFluxUnits[HeatFluxUnits["KilowattsPerSquareMeter"] = 15] = "KilowattsPerSquareMeter";
    /** */
    HeatFluxUnits[HeatFluxUnits["KilocaloriesPerSecondSquareCentimeter"] = 16] = "KilocaloriesPerSecondSquareCentimeter";
})(HeatFluxUnits = exports.HeatFluxUnits || (exports.HeatFluxUnits = {}));
/** Heat flux is the flow of energy per unit of area per unit of time */
class HeatFlux {
    /**
     * Create a new HeatFlux.
     * @param value The value.
     * @param fromUnit The ‘HeatFlux’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.wattspersquaremeterLazy = null;
        this.wattspersquareinchLazy = null;
        this.wattspersquarefootLazy = null;
        this.btuspersecondsquareinchLazy = null;
        this.btuspersecondsquarefootLazy = null;
        this.btusperminutesquarefootLazy = null;
        this.btusperhoursquarefootLazy = null;
        this.caloriespersecondsquarecentimeterLazy = null;
        this.kilocaloriesperhoursquaremeterLazy = null;
        this.poundsforceperfootsecondLazy = null;
        this.poundspersecondcubedLazy = null;
        this.nanowattspersquaremeterLazy = null;
        this.microwattspersquaremeterLazy = null;
        this.centiwattspersquaremeterLazy = null;
        this.deciwattspersquaremeterLazy = null;
        this.kilowattspersquaremeterLazy = null;
        this.kilocaloriespersecondsquarecentimeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of HeatFlux is WattPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get WattsPerSquareMeter() {
        if (this.wattspersquaremeterLazy !== null) {
            return this.wattspersquaremeterLazy;
        }
        return this.wattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.WattsPerSquareMeter);
    }
    /** */
    get WattsPerSquareInch() {
        if (this.wattspersquareinchLazy !== null) {
            return this.wattspersquareinchLazy;
        }
        return this.wattspersquareinchLazy = this.convertFromBase(HeatFluxUnits.WattsPerSquareInch);
    }
    /** */
    get WattsPerSquareFoot() {
        if (this.wattspersquarefootLazy !== null) {
            return this.wattspersquarefootLazy;
        }
        return this.wattspersquarefootLazy = this.convertFromBase(HeatFluxUnits.WattsPerSquareFoot);
    }
    /** */
    get BtusPerSecondSquareInch() {
        if (this.btuspersecondsquareinchLazy !== null) {
            return this.btuspersecondsquareinchLazy;
        }
        return this.btuspersecondsquareinchLazy = this.convertFromBase(HeatFluxUnits.BtusPerSecondSquareInch);
    }
    /** */
    get BtusPerSecondSquareFoot() {
        if (this.btuspersecondsquarefootLazy !== null) {
            return this.btuspersecondsquarefootLazy;
        }
        return this.btuspersecondsquarefootLazy = this.convertFromBase(HeatFluxUnits.BtusPerSecondSquareFoot);
    }
    /** */
    get BtusPerMinuteSquareFoot() {
        if (this.btusperminutesquarefootLazy !== null) {
            return this.btusperminutesquarefootLazy;
        }
        return this.btusperminutesquarefootLazy = this.convertFromBase(HeatFluxUnits.BtusPerMinuteSquareFoot);
    }
    /** */
    get BtusPerHourSquareFoot() {
        if (this.btusperhoursquarefootLazy !== null) {
            return this.btusperhoursquarefootLazy;
        }
        return this.btusperhoursquarefootLazy = this.convertFromBase(HeatFluxUnits.BtusPerHourSquareFoot);
    }
    /** */
    get CaloriesPerSecondSquareCentimeter() {
        if (this.caloriespersecondsquarecentimeterLazy !== null) {
            return this.caloriespersecondsquarecentimeterLazy;
        }
        return this.caloriespersecondsquarecentimeterLazy = this.convertFromBase(HeatFluxUnits.CaloriesPerSecondSquareCentimeter);
    }
    /** */
    get KilocaloriesPerHourSquareMeter() {
        if (this.kilocaloriesperhoursquaremeterLazy !== null) {
            return this.kilocaloriesperhoursquaremeterLazy;
        }
        return this.kilocaloriesperhoursquaremeterLazy = this.convertFromBase(HeatFluxUnits.KilocaloriesPerHourSquareMeter);
    }
    /** */
    get PoundsForcePerFootSecond() {
        if (this.poundsforceperfootsecondLazy !== null) {
            return this.poundsforceperfootsecondLazy;
        }
        return this.poundsforceperfootsecondLazy = this.convertFromBase(HeatFluxUnits.PoundsForcePerFootSecond);
    }
    /** */
    get PoundsPerSecondCubed() {
        if (this.poundspersecondcubedLazy !== null) {
            return this.poundspersecondcubedLazy;
        }
        return this.poundspersecondcubedLazy = this.convertFromBase(HeatFluxUnits.PoundsPerSecondCubed);
    }
    /** */
    get NanowattsPerSquareMeter() {
        if (this.nanowattspersquaremeterLazy !== null) {
            return this.nanowattspersquaremeterLazy;
        }
        return this.nanowattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.NanowattsPerSquareMeter);
    }
    /** */
    get MicrowattsPerSquareMeter() {
        if (this.microwattspersquaremeterLazy !== null) {
            return this.microwattspersquaremeterLazy;
        }
        return this.microwattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.MicrowattsPerSquareMeter);
    }
    /** */
    get CentiwattsPerSquareMeter() {
        if (this.centiwattspersquaremeterLazy !== null) {
            return this.centiwattspersquaremeterLazy;
        }
        return this.centiwattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.CentiwattsPerSquareMeter);
    }
    /** */
    get DeciwattsPerSquareMeter() {
        if (this.deciwattspersquaremeterLazy !== null) {
            return this.deciwattspersquaremeterLazy;
        }
        return this.deciwattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.DeciwattsPerSquareMeter);
    }
    /** */
    get KilowattsPerSquareMeter() {
        if (this.kilowattspersquaremeterLazy !== null) {
            return this.kilowattspersquaremeterLazy;
        }
        return this.kilowattspersquaremeterLazy = this.convertFromBase(HeatFluxUnits.KilowattsPerSquareMeter);
    }
    /** */
    get KilocaloriesPerSecondSquareCentimeter() {
        if (this.kilocaloriespersecondsquarecentimeterLazy !== null) {
            return this.kilocaloriespersecondsquarecentimeterLazy;
        }
        return this.kilocaloriespersecondsquarecentimeterLazy = this.convertFromBase(HeatFluxUnits.KilocaloriesPerSecondSquareCentimeter);
    }
    /**
     * Create a new HeatFlux instance from a WattsPerSquareMeter
     *
     * @param value The unit as WattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromWattsPerSquareMeter(value) {
        return new HeatFlux(value, HeatFluxUnits.WattsPerSquareMeter);
    }
    /**
     * Create a new HeatFlux instance from a WattsPerSquareInch
     *
     * @param value The unit as WattsPerSquareInch to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromWattsPerSquareInch(value) {
        return new HeatFlux(value, HeatFluxUnits.WattsPerSquareInch);
    }
    /**
     * Create a new HeatFlux instance from a WattsPerSquareFoot
     *
     * @param value The unit as WattsPerSquareFoot to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromWattsPerSquareFoot(value) {
        return new HeatFlux(value, HeatFluxUnits.WattsPerSquareFoot);
    }
    /**
     * Create a new HeatFlux instance from a BtusPerSecondSquareInch
     *
     * @param value The unit as BtusPerSecondSquareInch to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromBtusPerSecondSquareInch(value) {
        return new HeatFlux(value, HeatFluxUnits.BtusPerSecondSquareInch);
    }
    /**
     * Create a new HeatFlux instance from a BtusPerSecondSquareFoot
     *
     * @param value The unit as BtusPerSecondSquareFoot to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromBtusPerSecondSquareFoot(value) {
        return new HeatFlux(value, HeatFluxUnits.BtusPerSecondSquareFoot);
    }
    /**
     * Create a new HeatFlux instance from a BtusPerMinuteSquareFoot
     *
     * @param value The unit as BtusPerMinuteSquareFoot to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromBtusPerMinuteSquareFoot(value) {
        return new HeatFlux(value, HeatFluxUnits.BtusPerMinuteSquareFoot);
    }
    /**
     * Create a new HeatFlux instance from a BtusPerHourSquareFoot
     *
     * @param value The unit as BtusPerHourSquareFoot to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromBtusPerHourSquareFoot(value) {
        return new HeatFlux(value, HeatFluxUnits.BtusPerHourSquareFoot);
    }
    /**
     * Create a new HeatFlux instance from a CaloriesPerSecondSquareCentimeter
     *
     * @param value The unit as CaloriesPerSecondSquareCentimeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromCaloriesPerSecondSquareCentimeter(value) {
        return new HeatFlux(value, HeatFluxUnits.CaloriesPerSecondSquareCentimeter);
    }
    /**
     * Create a new HeatFlux instance from a KilocaloriesPerHourSquareMeter
     *
     * @param value The unit as KilocaloriesPerHourSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromKilocaloriesPerHourSquareMeter(value) {
        return new HeatFlux(value, HeatFluxUnits.KilocaloriesPerHourSquareMeter);
    }
    /**
     * Create a new HeatFlux instance from a PoundsForcePerFootSecond
     *
     * @param value The unit as PoundsForcePerFootSecond to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromPoundsForcePerFootSecond(value) {
        return new HeatFlux(value, HeatFluxUnits.PoundsForcePerFootSecond);
    }
    /**
     * Create a new HeatFlux instance from a PoundsPerSecondCubed
     *
     * @param value The unit as PoundsPerSecondCubed to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromPoundsPerSecondCubed(value) {
        return new HeatFlux(value, HeatFluxUnits.PoundsPerSecondCubed);
    }
    /**
     * Create a new HeatFlux instance from a NanowattsPerSquareMeter
     *
     * @param value The unit as NanowattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromNanowattsPerSquareMeter(value) {
        return new HeatFlux(value, HeatFluxUnits.NanowattsPerSquareMeter);
    }
    /**
     * Create a new HeatFlux instance from a MicrowattsPerSquareMeter
     *
     * @param value The unit as MicrowattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromMicrowattsPerSquareMeter(value) {
        return new HeatFlux(value, HeatFluxUnits.MicrowattsPerSquareMeter);
    }
    /**
     * Create a new HeatFlux instance from a CentiwattsPerSquareMeter
     *
     * @param value The unit as CentiwattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromCentiwattsPerSquareMeter(value) {
        return new HeatFlux(value, HeatFluxUnits.CentiwattsPerSquareMeter);
    }
    /**
     * Create a new HeatFlux instance from a DeciwattsPerSquareMeter
     *
     * @param value The unit as DeciwattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromDeciwattsPerSquareMeter(value) {
        return new HeatFlux(value, HeatFluxUnits.DeciwattsPerSquareMeter);
    }
    /**
     * Create a new HeatFlux instance from a KilowattsPerSquareMeter
     *
     * @param value The unit as KilowattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromKilowattsPerSquareMeter(value) {
        return new HeatFlux(value, HeatFluxUnits.KilowattsPerSquareMeter);
    }
    /**
     * Create a new HeatFlux instance from a KilocaloriesPerSecondSquareCentimeter
     *
     * @param value The unit as KilocaloriesPerSecondSquareCentimeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromKilocaloriesPerSecondSquareCentimeter(value) {
        return new HeatFlux(value, HeatFluxUnits.KilocaloriesPerSecondSquareCentimeter);
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
            case HeatFluxUnits.NanowattsPerSquareMeter:
                return (this.value) / 1e-9;
            case HeatFluxUnits.MicrowattsPerSquareMeter:
                return (this.value) / 0.000001;
            case HeatFluxUnits.CentiwattsPerSquareMeter:
                return (this.value) / 0.01;
            case HeatFluxUnits.DeciwattsPerSquareMeter:
                return (this.value) / 0.1;
            case HeatFluxUnits.KilowattsPerSquareMeter:
                return (this.value) / 1000;
            case HeatFluxUnits.KilocaloriesPerSecondSquareCentimeter:
                return (this.value / 4.1868e4) / 1000;
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
            case HeatFluxUnits.NanowattsPerSquareMeter:
                return (value) * 1e-9;
            case HeatFluxUnits.MicrowattsPerSquareMeter:
                return (value) * 0.000001;
            case HeatFluxUnits.CentiwattsPerSquareMeter:
                return (value) * 0.01;
            case HeatFluxUnits.DeciwattsPerSquareMeter:
                return (value) * 0.1;
            case HeatFluxUnits.KilowattsPerSquareMeter:
                return (value) * 1000;
            case HeatFluxUnits.KilocaloriesPerSecondSquareCentimeter:
                return (value * 4.1868e4) * 1000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the HeatFlux to string.
     * Note! the default format for HeatFlux is WattsPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the HeatFlux.
     * @returns The string format of the HeatFlux.
     */
    toString(toUnit = HeatFluxUnits.WattsPerSquareMeter) {
        switch (toUnit) {
            case HeatFluxUnits.WattsPerSquareMeter:
                return this.WattsPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.WattsPerSquareInch:
                return this.WattsPerSquareInch + ` W/in²`;
            case HeatFluxUnits.WattsPerSquareFoot:
                return this.WattsPerSquareFoot + ` W/ft²`;
            case HeatFluxUnits.BtusPerSecondSquareInch:
                return this.BtusPerSecondSquareInch + ` BTU/s·in²`;
            case HeatFluxUnits.BtusPerSecondSquareFoot:
                return this.BtusPerSecondSquareFoot + ` BTU/s·ft²`;
            case HeatFluxUnits.BtusPerMinuteSquareFoot:
                return this.BtusPerMinuteSquareFoot + ` BTU/min·ft²`;
            case HeatFluxUnits.BtusPerHourSquareFoot:
                return this.BtusPerHourSquareFoot + ` BTU/h·ft²`;
            case HeatFluxUnits.CaloriesPerSecondSquareCentimeter:
                return this.CaloriesPerSecondSquareCentimeter + ` cal/s·cm²`;
            case HeatFluxUnits.KilocaloriesPerHourSquareMeter:
                return this.KilocaloriesPerHourSquareMeter + ` kcal/h·m²`;
            case HeatFluxUnits.PoundsForcePerFootSecond:
                return this.PoundsForcePerFootSecond + ` lbf/(ft·s)`;
            case HeatFluxUnits.PoundsPerSecondCubed:
                return this.PoundsPerSecondCubed + ` lb/s³`;
            case HeatFluxUnits.NanowattsPerSquareMeter:
                return this.NanowattsPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.MicrowattsPerSquareMeter:
                return this.MicrowattsPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.CentiwattsPerSquareMeter:
                return this.CentiwattsPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.DeciwattsPerSquareMeter:
                return this.DeciwattsPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.KilowattsPerSquareMeter:
                return this.KilowattsPerSquareMeter + ` W/m²`;
            case HeatFluxUnits.KilocaloriesPerSecondSquareCentimeter:
                return this.KilocaloriesPerSecondSquareCentimeter + ` cal/s·cm²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.HeatFlux = HeatFlux;
//# sourceMappingURL=heatflux.g.js.map