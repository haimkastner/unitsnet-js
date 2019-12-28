"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** AreaUnits enumeration */
var AreaUnits;
(function (AreaUnits) {
    /** */
    AreaUnits[AreaUnits["SquareKilometers"] = 0] = "SquareKilometers";
    /** */
    AreaUnits[AreaUnits["SquareMeters"] = 1] = "SquareMeters";
    /** */
    AreaUnits[AreaUnits["SquareDecimeters"] = 2] = "SquareDecimeters";
    /** */
    AreaUnits[AreaUnits["SquareCentimeters"] = 3] = "SquareCentimeters";
    /** */
    AreaUnits[AreaUnits["SquareMillimeters"] = 4] = "SquareMillimeters";
    /** */
    AreaUnits[AreaUnits["SquareMicrometers"] = 5] = "SquareMicrometers";
    /** */
    AreaUnits[AreaUnits["SquareMiles"] = 6] = "SquareMiles";
    /** */
    AreaUnits[AreaUnits["SquareYards"] = 7] = "SquareYards";
    /** */
    AreaUnits[AreaUnits["SquareFeet"] = 8] = "SquareFeet";
    /** */
    AreaUnits[AreaUnits["UsSurveySquareFeet"] = 9] = "UsSurveySquareFeet";
    /** */
    AreaUnits[AreaUnits["SquareInches"] = 10] = "SquareInches";
    /** */
    AreaUnits[AreaUnits["Acres"] = 11] = "Acres";
    /** */
    AreaUnits[AreaUnits["Hectares"] = 12] = "Hectares";
    /** */
    AreaUnits[AreaUnits["SquareNauticalMiles"] = 13] = "SquareNauticalMiles";
})(AreaUnits = exports.AreaUnits || (exports.AreaUnits = {}));
/** Area is a quantity that expresses the extent of a two-dimensional surface or shape, or planar lamina, in the plane. Area can be understood as the amount of material with a given thickness that would be necessary to fashion a model of the shape, or the amount of paint necessary to cover the surface with a single coat.[1] It is the two-dimensional analog of the length of a curve (a one-dimensional concept) or the volume of a solid (a three-dimensional concept). */
class Area {
    /**
     * Create a new Area.
     * @param value The value.
     * @param fromUnit The ‘Area’ unit to create from.
     * The default unit is SquareMeters
     */
    constructor(value, fromUnit = AreaUnits.SquareMeters) {
        this.squarekilometersLazy = null;
        this.squaremetersLazy = null;
        this.squaredecimetersLazy = null;
        this.squarecentimetersLazy = null;
        this.squaremillimetersLazy = null;
        this.squaremicrometersLazy = null;
        this.squaremilesLazy = null;
        this.squareyardsLazy = null;
        this.squarefeetLazy = null;
        this.ussurveysquarefeetLazy = null;
        this.squareinchesLazy = null;
        this.acresLazy = null;
        this.hectaresLazy = null;
        this.squarenauticalmilesLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Area is SquareMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get SquareKilometers() {
        if (this.squarekilometersLazy !== null) {
            return this.squarekilometersLazy;
        }
        return this.squarekilometersLazy = this.convertFromBase(AreaUnits.SquareKilometers);
    }
    /** */
    get SquareMeters() {
        if (this.squaremetersLazy !== null) {
            return this.squaremetersLazy;
        }
        return this.squaremetersLazy = this.convertFromBase(AreaUnits.SquareMeters);
    }
    /** */
    get SquareDecimeters() {
        if (this.squaredecimetersLazy !== null) {
            return this.squaredecimetersLazy;
        }
        return this.squaredecimetersLazy = this.convertFromBase(AreaUnits.SquareDecimeters);
    }
    /** */
    get SquareCentimeters() {
        if (this.squarecentimetersLazy !== null) {
            return this.squarecentimetersLazy;
        }
        return this.squarecentimetersLazy = this.convertFromBase(AreaUnits.SquareCentimeters);
    }
    /** */
    get SquareMillimeters() {
        if (this.squaremillimetersLazy !== null) {
            return this.squaremillimetersLazy;
        }
        return this.squaremillimetersLazy = this.convertFromBase(AreaUnits.SquareMillimeters);
    }
    /** */
    get SquareMicrometers() {
        if (this.squaremicrometersLazy !== null) {
            return this.squaremicrometersLazy;
        }
        return this.squaremicrometersLazy = this.convertFromBase(AreaUnits.SquareMicrometers);
    }
    /** */
    get SquareMiles() {
        if (this.squaremilesLazy !== null) {
            return this.squaremilesLazy;
        }
        return this.squaremilesLazy = this.convertFromBase(AreaUnits.SquareMiles);
    }
    /** */
    get SquareYards() {
        if (this.squareyardsLazy !== null) {
            return this.squareyardsLazy;
        }
        return this.squareyardsLazy = this.convertFromBase(AreaUnits.SquareYards);
    }
    /** */
    get SquareFeet() {
        if (this.squarefeetLazy !== null) {
            return this.squarefeetLazy;
        }
        return this.squarefeetLazy = this.convertFromBase(AreaUnits.SquareFeet);
    }
    /** */
    get UsSurveySquareFeet() {
        if (this.ussurveysquarefeetLazy !== null) {
            return this.ussurveysquarefeetLazy;
        }
        return this.ussurveysquarefeetLazy = this.convertFromBase(AreaUnits.UsSurveySquareFeet);
    }
    /** */
    get SquareInches() {
        if (this.squareinchesLazy !== null) {
            return this.squareinchesLazy;
        }
        return this.squareinchesLazy = this.convertFromBase(AreaUnits.SquareInches);
    }
    /** */
    get Acres() {
        if (this.acresLazy !== null) {
            return this.acresLazy;
        }
        return this.acresLazy = this.convertFromBase(AreaUnits.Acres);
    }
    /** */
    get Hectares() {
        if (this.hectaresLazy !== null) {
            return this.hectaresLazy;
        }
        return this.hectaresLazy = this.convertFromBase(AreaUnits.Hectares);
    }
    /** */
    get SquareNauticalMiles() {
        if (this.squarenauticalmilesLazy !== null) {
            return this.squarenauticalmilesLazy;
        }
        return this.squarenauticalmilesLazy = this.convertFromBase(AreaUnits.SquareNauticalMiles);
    }
    /**
     * Create a new Area instance from a SquareKilometers
     *
     * @param value The unit as SquareKilometers to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareKilometers(value) {
        return new Area(value, AreaUnits.SquareKilometers);
    }
    /**
     * Create a new Area instance from a SquareMeters
     *
     * @param value The unit as SquareMeters to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareMeters(value) {
        return new Area(value, AreaUnits.SquareMeters);
    }
    /**
     * Create a new Area instance from a SquareDecimeters
     *
     * @param value The unit as SquareDecimeters to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareDecimeters(value) {
        return new Area(value, AreaUnits.SquareDecimeters);
    }
    /**
     * Create a new Area instance from a SquareCentimeters
     *
     * @param value The unit as SquareCentimeters to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareCentimeters(value) {
        return new Area(value, AreaUnits.SquareCentimeters);
    }
    /**
     * Create a new Area instance from a SquareMillimeters
     *
     * @param value The unit as SquareMillimeters to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareMillimeters(value) {
        return new Area(value, AreaUnits.SquareMillimeters);
    }
    /**
     * Create a new Area instance from a SquareMicrometers
     *
     * @param value The unit as SquareMicrometers to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareMicrometers(value) {
        return new Area(value, AreaUnits.SquareMicrometers);
    }
    /**
     * Create a new Area instance from a SquareMiles
     *
     * @param value The unit as SquareMiles to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareMiles(value) {
        return new Area(value, AreaUnits.SquareMiles);
    }
    /**
     * Create a new Area instance from a SquareYards
     *
     * @param value The unit as SquareYards to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareYards(value) {
        return new Area(value, AreaUnits.SquareYards);
    }
    /**
     * Create a new Area instance from a SquareFeet
     *
     * @param value The unit as SquareFeet to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareFeet(value) {
        return new Area(value, AreaUnits.SquareFeet);
    }
    /**
     * Create a new Area instance from a UsSurveySquareFeet
     *
     * @param value The unit as UsSurveySquareFeet to create a new Area from.
     * @returns The new Area instance.
     */
    static FromUsSurveySquareFeet(value) {
        return new Area(value, AreaUnits.UsSurveySquareFeet);
    }
    /**
     * Create a new Area instance from a SquareInches
     *
     * @param value The unit as SquareInches to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareInches(value) {
        return new Area(value, AreaUnits.SquareInches);
    }
    /**
     * Create a new Area instance from a Acres
     *
     * @param value The unit as Acres to create a new Area from.
     * @returns The new Area instance.
     */
    static FromAcres(value) {
        return new Area(value, AreaUnits.Acres);
    }
    /**
     * Create a new Area instance from a Hectares
     *
     * @param value The unit as Hectares to create a new Area from.
     * @returns The new Area instance.
     */
    static FromHectares(value) {
        return new Area(value, AreaUnits.Hectares);
    }
    /**
     * Create a new Area instance from a SquareNauticalMiles
     *
     * @param value The unit as SquareNauticalMiles to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareNauticalMiles(value) {
        return new Area(value, AreaUnits.SquareNauticalMiles);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AreaUnits.SquareKilometers:
                return this.value / 1e6;
            case AreaUnits.SquareMeters:
                return this.value;
            case AreaUnits.SquareDecimeters:
                return this.value / 1e-2;
            case AreaUnits.SquareCentimeters:
                return this.value / 1e-4;
            case AreaUnits.SquareMillimeters:
                return this.value / 1e-6;
            case AreaUnits.SquareMicrometers:
                return this.value / 1e-12;
            case AreaUnits.SquareMiles:
                return this.value / 2.59e6;
            case AreaUnits.SquareYards:
                return this.value / 0.836127;
            case AreaUnits.SquareFeet:
                return this.value / 0.092903;
            case AreaUnits.UsSurveySquareFeet:
                return this.value / 0.09290341161;
            case AreaUnits.SquareInches:
                return this.value / 0.00064516;
            case AreaUnits.Acres:
                return this.value / 4046.85642;
            case AreaUnits.Hectares:
                return this.value / 1e4;
            case AreaUnits.SquareNauticalMiles:
                return this.value / 3429904;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case AreaUnits.SquareKilometers:
                return value * 1e6;
            case AreaUnits.SquareMeters:
                return value;
            case AreaUnits.SquareDecimeters:
                return value * 1e-2;
            case AreaUnits.SquareCentimeters:
                return value * 1e-4;
            case AreaUnits.SquareMillimeters:
                return value * 1e-6;
            case AreaUnits.SquareMicrometers:
                return value * 1e-12;
            case AreaUnits.SquareMiles:
                return value * 2.59e6;
            case AreaUnits.SquareYards:
                return value * 0.836127;
            case AreaUnits.SquareFeet:
                return value * 0.092903;
            case AreaUnits.UsSurveySquareFeet:
                return value * 0.09290341161;
            case AreaUnits.SquareInches:
                return value * 0.00064516;
            case AreaUnits.Acres:
                return value * 4046.85642;
            case AreaUnits.Hectares:
                return value * 1e4;
            case AreaUnits.SquareNauticalMiles:
                return value * 3429904;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Area to string.
     * Note! the default format for Area is SquareMeters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Area.
     * @returns The string format of the Area.
     */
    toString(toUnit = AreaUnits.SquareMeters) {
        switch (toUnit) {
            case AreaUnits.SquareKilometers:
                return this.SquareKilometers + ` km²`;
            case AreaUnits.SquareMeters:
                return this.SquareMeters + ` m²`;
            case AreaUnits.SquareDecimeters:
                return this.SquareDecimeters + ` dm²`;
            case AreaUnits.SquareCentimeters:
                return this.SquareCentimeters + ` cm²`;
            case AreaUnits.SquareMillimeters:
                return this.SquareMillimeters + ` mm²`;
            case AreaUnits.SquareMicrometers:
                return this.SquareMicrometers + ` µm²`;
            case AreaUnits.SquareMiles:
                return this.SquareMiles + ` mi²`;
            case AreaUnits.SquareYards:
                return this.SquareYards + ` yd²`;
            case AreaUnits.SquareFeet:
                return this.SquareFeet + ` ft²`;
            case AreaUnits.UsSurveySquareFeet:
                return this.UsSurveySquareFeet + ` ft² (US)`;
            case AreaUnits.SquareInches:
                return this.SquareInches + ` in²`;
            case AreaUnits.Acres:
                return this.Acres + ` ac`;
            case AreaUnits.Hectares:
                return this.Hectares + ` ha`;
            case AreaUnits.SquareNauticalMiles:
                return this.SquareNauticalMiles + ` nmi²`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Area are equals to the current Area.
     * @param area The other Area.
     * @returns True if the given Area are equal to the current Area.
     */
    equals(area) {
        return this.value === area.BaseValue;
    }
    /**
     * Compare the given Area against the current Area.
     * @param area The other Area.
     * @returns 0 if they are equal, -1 if the current Area is less then other, 1 if the current Area is greater then other.
     */
    compareTo(area) {
        if (this.value > area.BaseValue)
            return 1;
        if (this.value < area.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Area with the current Area.
     * @param area The other Area.
     * @returns A new Area instance with the results.
     */
    add(area) {
        return new Area(this.value + area.BaseValue);
    }
    /**
     * Subtract the given Area with the current Area.
     * @param area The other Area.
     * @returns A new Area instance with the results.
     */
    subtract(area) {
        return new Area(this.value - area.BaseValue);
    }
    /**
     * Multiply the given Area with the current Area.
     * @param area The other Area.
     * @returns A new Area instance with the results.
     */
    multiply(area) {
        return new Area(this.value * area.BaseValue);
    }
    /**
     * Divide the given Area with the current Area.
     * @param area The other Area.
     * @returns A new Area instance with the results.
     */
    divide(area) {
        return new Area(this.value / area.BaseValue);
    }
    /**
     * Modulo the given Area with the current Area.
     * @param area The other Area.
     * @returns A new Area instance with the results.
     */
    modulo(area) {
        return new Area(this.value % area.BaseValue);
    }
    /**
     * Pow the given Area with the current Area.
     * @param area The other Area.
     * @returns A new Area instance with the results.
     */
    pow(area) {
        return new Area(this.value ** area.BaseValue);
    }
}
exports.Area = Area;
//# sourceMappingURL=area.g.js.map