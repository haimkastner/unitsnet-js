import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Area */
export interface AreaDto {
    /** The value of the Area */
    value: number;
    /**  The specific unit that the Area value is representing */
    unit: AreaUnits;
}

/** AreaUnits enumeration */
export enum AreaUnits {
    /** */
    SquareKilometers = "SquareKilometer",
    /** */
    SquareMeters = "SquareMeter",
    /** */
    SquareDecimeters = "SquareDecimeter",
    /** */
    SquareCentimeters = "SquareCentimeter",
    /** */
    SquareMillimeters = "SquareMillimeter",
    /** */
    SquareMicrometers = "SquareMicrometer",
    /** The statute mile was standardised between the British Commonwealth and the United States by an international agreement in 1959, when it was formally redefined with respect to SI units as exactly 1,609.344 metres. */
    SquareMiles = "SquareMile",
    /** The yard (symbol: yd) is an English unit of length in both the British imperial and US customary systems of measurement equalling 3 feet (or 36 inches). Since 1959 the yard has been by international agreement standardized as exactly 0.9144 meter. A distance of 1,760 yards is equal to 1 mile. */
    SquareYards = "SquareYard",
    /** */
    SquareFeet = "SquareFoot",
    /** In the United States, the foot was defined as 12 inches, with the inch being defined by the Mendenhall Order of 1893 as 39.37 inches = 1 m. This makes a U.S. survey foot exactly 1200/3937 meters. */
    UsSurveySquareFeet = "UsSurveySquareFoot",
    /** */
    SquareInches = "SquareInch",
    /** Based upon the international yard and pound agreement of 1959, an acre may be declared as exactly 4,046.8564224 square metres. */
    Acres = "Acre",
    /** */
    Hectares = "Hectare",
    /** */
    SquareNauticalMiles = "SquareNauticalMile"
}

/** Area is a quantity that expresses the extent of a two-dimensional surface or shape, or planar lamina, in the plane. Area can be understood as the amount of material with a given thickness that would be necessary to fashion a model of the shape, or the amount of paint necessary to cover the surface with a single coat.[1] It is the two-dimensional analog of the length of a curve (a one-dimensional concept) or the volume of a solid (a three-dimensional concept). */
export class Area extends BaseUnit {
    protected value: number;
    private squarekilometersLazy: number | null = null;
    private squaremetersLazy: number | null = null;
    private squaredecimetersLazy: number | null = null;
    private squarecentimetersLazy: number | null = null;
    private squaremillimetersLazy: number | null = null;
    private squaremicrometersLazy: number | null = null;
    private squaremilesLazy: number | null = null;
    private squareyardsLazy: number | null = null;
    private squarefeetLazy: number | null = null;
    private ussurveysquarefeetLazy: number | null = null;
    private squareinchesLazy: number | null = null;
    private acresLazy: number | null = null;
    private hectaresLazy: number | null = null;
    private squarenauticalmilesLazy: number | null = null;

    /**
     * Create a new Area.
     * @param value The value.
     * @param fromUnit The ‘Area’ unit to create from.
     * The default unit is SquareMeters
     */
    public constructor(value: number, fromUnit: AreaUnits = AreaUnits.SquareMeters) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Area is SquareMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): AreaUnits.SquareMeters {
        return AreaUnits.SquareMeters
    }

    /** */
    public get SquareKilometers(): number {
        if(this.squarekilometersLazy !== null){
            return this.squarekilometersLazy;
        }
        return this.squarekilometersLazy = this.convertFromBase(AreaUnits.SquareKilometers);
    }

    /** */
    public get SquareMeters(): number {
        if(this.squaremetersLazy !== null){
            return this.squaremetersLazy;
        }
        return this.squaremetersLazy = this.convertFromBase(AreaUnits.SquareMeters);
    }

    /** */
    public get SquareDecimeters(): number {
        if(this.squaredecimetersLazy !== null){
            return this.squaredecimetersLazy;
        }
        return this.squaredecimetersLazy = this.convertFromBase(AreaUnits.SquareDecimeters);
    }

    /** */
    public get SquareCentimeters(): number {
        if(this.squarecentimetersLazy !== null){
            return this.squarecentimetersLazy;
        }
        return this.squarecentimetersLazy = this.convertFromBase(AreaUnits.SquareCentimeters);
    }

    /** */
    public get SquareMillimeters(): number {
        if(this.squaremillimetersLazy !== null){
            return this.squaremillimetersLazy;
        }
        return this.squaremillimetersLazy = this.convertFromBase(AreaUnits.SquareMillimeters);
    }

    /** */
    public get SquareMicrometers(): number {
        if(this.squaremicrometersLazy !== null){
            return this.squaremicrometersLazy;
        }
        return this.squaremicrometersLazy = this.convertFromBase(AreaUnits.SquareMicrometers);
    }

    /** The statute mile was standardised between the British Commonwealth and the United States by an international agreement in 1959, when it was formally redefined with respect to SI units as exactly 1,609.344 metres. */
    public get SquareMiles(): number {
        if(this.squaremilesLazy !== null){
            return this.squaremilesLazy;
        }
        return this.squaremilesLazy = this.convertFromBase(AreaUnits.SquareMiles);
    }

    /** The yard (symbol: yd) is an English unit of length in both the British imperial and US customary systems of measurement equalling 3 feet (or 36 inches). Since 1959 the yard has been by international agreement standardized as exactly 0.9144 meter. A distance of 1,760 yards is equal to 1 mile. */
    public get SquareYards(): number {
        if(this.squareyardsLazy !== null){
            return this.squareyardsLazy;
        }
        return this.squareyardsLazy = this.convertFromBase(AreaUnits.SquareYards);
    }

    /** */
    public get SquareFeet(): number {
        if(this.squarefeetLazy !== null){
            return this.squarefeetLazy;
        }
        return this.squarefeetLazy = this.convertFromBase(AreaUnits.SquareFeet);
    }

    /** In the United States, the foot was defined as 12 inches, with the inch being defined by the Mendenhall Order of 1893 as 39.37 inches = 1 m. This makes a U.S. survey foot exactly 1200/3937 meters. */
    public get UsSurveySquareFeet(): number {
        if(this.ussurveysquarefeetLazy !== null){
            return this.ussurveysquarefeetLazy;
        }
        return this.ussurveysquarefeetLazy = this.convertFromBase(AreaUnits.UsSurveySquareFeet);
    }

    /** */
    public get SquareInches(): number {
        if(this.squareinchesLazy !== null){
            return this.squareinchesLazy;
        }
        return this.squareinchesLazy = this.convertFromBase(AreaUnits.SquareInches);
    }

    /** Based upon the international yard and pound agreement of 1959, an acre may be declared as exactly 4,046.8564224 square metres. */
    public get Acres(): number {
        if(this.acresLazy !== null){
            return this.acresLazy;
        }
        return this.acresLazy = this.convertFromBase(AreaUnits.Acres);
    }

    /** */
    public get Hectares(): number {
        if(this.hectaresLazy !== null){
            return this.hectaresLazy;
        }
        return this.hectaresLazy = this.convertFromBase(AreaUnits.Hectares);
    }

    /** */
    public get SquareNauticalMiles(): number {
        if(this.squarenauticalmilesLazy !== null){
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
    public static FromSquareKilometers(value: number): Area {
        return new Area(value, AreaUnits.SquareKilometers);
    }

    /**
     * Create a new Area instance from a SquareMeters
     *
     * @param value The unit as SquareMeters to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromSquareMeters(value: number): Area {
        return new Area(value, AreaUnits.SquareMeters);
    }

    /**
     * Create a new Area instance from a SquareDecimeters
     *
     * @param value The unit as SquareDecimeters to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromSquareDecimeters(value: number): Area {
        return new Area(value, AreaUnits.SquareDecimeters);
    }

    /**
     * Create a new Area instance from a SquareCentimeters
     *
     * @param value The unit as SquareCentimeters to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromSquareCentimeters(value: number): Area {
        return new Area(value, AreaUnits.SquareCentimeters);
    }

    /**
     * Create a new Area instance from a SquareMillimeters
     *
     * @param value The unit as SquareMillimeters to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromSquareMillimeters(value: number): Area {
        return new Area(value, AreaUnits.SquareMillimeters);
    }

    /**
     * Create a new Area instance from a SquareMicrometers
     *
     * @param value The unit as SquareMicrometers to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromSquareMicrometers(value: number): Area {
        return new Area(value, AreaUnits.SquareMicrometers);
    }

    /**
     * Create a new Area instance from a SquareMiles
     * The statute mile was standardised between the British Commonwealth and the United States by an international agreement in 1959, when it was formally redefined with respect to SI units as exactly 1,609.344 metres.
     * @param value The unit as SquareMiles to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromSquareMiles(value: number): Area {
        return new Area(value, AreaUnits.SquareMiles);
    }

    /**
     * Create a new Area instance from a SquareYards
     * The yard (symbol: yd) is an English unit of length in both the British imperial and US customary systems of measurement equalling 3 feet (or 36 inches). Since 1959 the yard has been by international agreement standardized as exactly 0.9144 meter. A distance of 1,760 yards is equal to 1 mile.
     * @param value The unit as SquareYards to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromSquareYards(value: number): Area {
        return new Area(value, AreaUnits.SquareYards);
    }

    /**
     * Create a new Area instance from a SquareFeet
     *
     * @param value The unit as SquareFeet to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromSquareFeet(value: number): Area {
        return new Area(value, AreaUnits.SquareFeet);
    }

    /**
     * Create a new Area instance from a UsSurveySquareFeet
     * In the United States, the foot was defined as 12 inches, with the inch being defined by the Mendenhall Order of 1893 as 39.37 inches = 1 m. This makes a U.S. survey foot exactly 1200/3937 meters.
     * @param value The unit as UsSurveySquareFeet to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromUsSurveySquareFeet(value: number): Area {
        return new Area(value, AreaUnits.UsSurveySquareFeet);
    }

    /**
     * Create a new Area instance from a SquareInches
     *
     * @param value The unit as SquareInches to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromSquareInches(value: number): Area {
        return new Area(value, AreaUnits.SquareInches);
    }

    /**
     * Create a new Area instance from a Acres
     * Based upon the international yard and pound agreement of 1959, an acre may be declared as exactly 4,046.8564224 square metres.
     * @param value The unit as Acres to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromAcres(value: number): Area {
        return new Area(value, AreaUnits.Acres);
    }

    /**
     * Create a new Area instance from a Hectares
     *
     * @param value The unit as Hectares to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromHectares(value: number): Area {
        return new Area(value, AreaUnits.Hectares);
    }

    /**
     * Create a new Area instance from a SquareNauticalMiles
     *
     * @param value The unit as SquareNauticalMiles to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromSquareNauticalMiles(value: number): Area {
        return new Area(value, AreaUnits.SquareNauticalMiles);
    }

    /**
     * Gets the base unit enumeration associated with Area
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof AreaUnits {
        return AreaUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): AreaUnits.SquareMeters {
        return AreaUnits.SquareMeters;
    }

    /**
     * Create API DTO represent a Area unit.
     * @param holdInUnit The specific Area unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: AreaUnits = AreaUnits.SquareMeters): AreaDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Area unit from an API DTO representation.
     * @param dtoArea The Area API DTO representation
     */
    public static FromDto(dtoArea: AreaDto): Area {
        return new Area(dtoArea.value, dtoArea.unit);
    }

    /**
     * Convert Area to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: AreaUnits): number {
        switch (toUnit) {
            case AreaUnits.SquareKilometers: return this.SquareKilometers;
            case AreaUnits.SquareMeters: return this.SquareMeters;
            case AreaUnits.SquareDecimeters: return this.SquareDecimeters;
            case AreaUnits.SquareCentimeters: return this.SquareCentimeters;
            case AreaUnits.SquareMillimeters: return this.SquareMillimeters;
            case AreaUnits.SquareMicrometers: return this.SquareMicrometers;
            case AreaUnits.SquareMiles: return this.SquareMiles;
            case AreaUnits.SquareYards: return this.SquareYards;
            case AreaUnits.SquareFeet: return this.SquareFeet;
            case AreaUnits.UsSurveySquareFeet: return this.UsSurveySquareFeet;
            case AreaUnits.SquareInches: return this.SquareInches;
            case AreaUnits.Acres: return this.Acres;
            case AreaUnits.Hectares: return this.Hectares;
            case AreaUnits.SquareNauticalMiles: return this.SquareNauticalMiles;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: AreaUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case AreaUnits.SquareKilometers: return super.internalDivide(this.value, 1e6);
                case AreaUnits.SquareMeters: return this.value;
                case AreaUnits.SquareDecimeters: return super.internalDivide(this.value, 1e-2);
                case AreaUnits.SquareCentimeters: return super.internalDivide(this.value, 1e-4);
                case AreaUnits.SquareMillimeters: return super.internalDivide(this.value, 1e-6);
                case AreaUnits.SquareMicrometers: return super.internalDivide(this.value, 1e-12);
                case AreaUnits.SquareMiles: {
                    const v3 = super.internalDivide(this.value, 1609.344);
                    return super.internalDivide(v3, 1609.344);
                }
                case AreaUnits.SquareYards: {
                    const v3 = super.internalDivide(this.value, 0.9144);
                    return super.internalDivide(v3, 0.9144);
                }
                case AreaUnits.SquareFeet: return super.internalDivide(this.value, 9.290304e-2);
                case AreaUnits.UsSurveySquareFeet: {
                    const v4 = super.internalDivide(1200.0, 3937.0);
                    const v5 = super.internalDivide(this.value, v4);
                    const v8 = super.internalDivide(1200.0, 3937.0);
                    return super.internalDivide(v5, v8);
                }
                case AreaUnits.SquareInches: return super.internalDivide(this.value, 0.00064516);
                case AreaUnits.Acres: return super.internalDivide(this.value, 4046.8564224);
                case AreaUnits.Hectares: return super.internalDivide(this.value, 1e4);
                case AreaUnits.SquareNauticalMiles: return super.internalDivide(this.value, 3429904);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case AreaUnits.SquareKilometers: return this.value / 1e6;
            case AreaUnits.SquareMeters: return this.value;
            case AreaUnits.SquareDecimeters: return this.value / 1e-2;
            case AreaUnits.SquareCentimeters: return this.value / 1e-4;
            case AreaUnits.SquareMillimeters: return this.value / 1e-6;
            case AreaUnits.SquareMicrometers: return this.value / 1e-12;
            case AreaUnits.SquareMiles: return this.value / 1609.344 / 1609.344;
            case AreaUnits.SquareYards: return this.value / 0.9144 / 0.9144;
            case AreaUnits.SquareFeet: return this.value / 9.290304e-2;
            case AreaUnits.UsSurveySquareFeet: return this.value / (1200.0 / 3937.0) / (1200.0 / 3937.0);
            case AreaUnits.SquareInches: return this.value / 0.00064516;
            case AreaUnits.Acres: return this.value / 4046.8564224;
            case AreaUnits.Hectares: return this.value / 1e4;
            case AreaUnits.SquareNauticalMiles: return this.value / 3429904;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: AreaUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case AreaUnits.SquareKilometers: return super.internalMultiply(value, 1e6);
                case AreaUnits.SquareMeters: return value;
                case AreaUnits.SquareDecimeters: return super.internalMultiply(value, 1e-2);
                case AreaUnits.SquareCentimeters: return super.internalMultiply(value, 1e-4);
                case AreaUnits.SquareMillimeters: return super.internalMultiply(value, 1e-6);
                case AreaUnits.SquareMicrometers: return super.internalMultiply(value, 1e-12);
                case AreaUnits.SquareMiles: {
                    const v3 = super.internalMultiply(value, 1609.344);
                    return super.internalMultiply(v3, 1609.344);
                }
                case AreaUnits.SquareYards: {
                    const v3 = super.internalMultiply(value, 0.9144);
                    return super.internalMultiply(v3, 0.9144);
                }
                case AreaUnits.SquareFeet: return super.internalMultiply(value, 9.290304e-2);
                case AreaUnits.UsSurveySquareFeet: {
                    const v4 = super.internalDivide(1200.0, 3937.0);
                    const v5 = super.internalMultiply(value, v4);
                    const v8 = super.internalDivide(1200.0, 3937.0);
                    return super.internalMultiply(v5, v8);
                }
                case AreaUnits.SquareInches: return super.internalMultiply(value, 0.00064516);
                case AreaUnits.Acres: return super.internalMultiply(value, 4046.8564224);
                case AreaUnits.Hectares: return super.internalMultiply(value, 1e4);
                case AreaUnits.SquareNauticalMiles: return super.internalMultiply(value, 3429904);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case AreaUnits.SquareKilometers: return value * 1e6;
            case AreaUnits.SquareMeters: return value;
            case AreaUnits.SquareDecimeters: return value * 1e-2;
            case AreaUnits.SquareCentimeters: return value * 1e-4;
            case AreaUnits.SquareMillimeters: return value * 1e-6;
            case AreaUnits.SquareMicrometers: return value * 1e-12;
            case AreaUnits.SquareMiles: return value * 1609.344 * 1609.344;
            case AreaUnits.SquareYards: return value * 0.9144 * 0.9144;
            case AreaUnits.SquareFeet: return value * 9.290304e-2;
            case AreaUnits.UsSurveySquareFeet: return value * (1200.0 / 3937.0) * (1200.0 / 3937.0);
            case AreaUnits.SquareInches: return value * 0.00064516;
            case AreaUnits.Acres: return value * 4046.8564224;
            case AreaUnits.Hectares: return value * 1e4;
            case AreaUnits.SquareNauticalMiles: return value * 3429904;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Area to string.
     * Note! the default format for Area is SquareMeters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Area.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Area.
     */
    public toString(unit: AreaUnits = AreaUnits.SquareMeters, fractionalDigits?: number): string {

        switch (unit) {
            
            case AreaUnits.SquareKilometers:
                return super.truncateFractionDigits(this.SquareKilometers, fractionalDigits) + ` km²`;
            case AreaUnits.SquareMeters:
                return super.truncateFractionDigits(this.SquareMeters, fractionalDigits) + ` m²`;
            case AreaUnits.SquareDecimeters:
                return super.truncateFractionDigits(this.SquareDecimeters, fractionalDigits) + ` dm²`;
            case AreaUnits.SquareCentimeters:
                return super.truncateFractionDigits(this.SquareCentimeters, fractionalDigits) + ` cm²`;
            case AreaUnits.SquareMillimeters:
                return super.truncateFractionDigits(this.SquareMillimeters, fractionalDigits) + ` mm²`;
            case AreaUnits.SquareMicrometers:
                return super.truncateFractionDigits(this.SquareMicrometers, fractionalDigits) + ` µm²`;
            case AreaUnits.SquareMiles:
                return super.truncateFractionDigits(this.SquareMiles, fractionalDigits) + ` mi²`;
            case AreaUnits.SquareYards:
                return super.truncateFractionDigits(this.SquareYards, fractionalDigits) + ` yd²`;
            case AreaUnits.SquareFeet:
                return super.truncateFractionDigits(this.SquareFeet, fractionalDigits) + ` ft²`;
            case AreaUnits.UsSurveySquareFeet:
                return super.truncateFractionDigits(this.UsSurveySquareFeet, fractionalDigits) + ` ft² (US)`;
            case AreaUnits.SquareInches:
                return super.truncateFractionDigits(this.SquareInches, fractionalDigits) + ` in²`;
            case AreaUnits.Acres:
                return super.truncateFractionDigits(this.Acres, fractionalDigits) + ` ac`;
            case AreaUnits.Hectares:
                return super.truncateFractionDigits(this.Hectares, fractionalDigits) + ` ha`;
            case AreaUnits.SquareNauticalMiles:
                return super.truncateFractionDigits(this.SquareNauticalMiles, fractionalDigits) + ` nmi²`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Area unit abbreviation.
     * Note! the default abbreviation for Area is SquareMeters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Area.
     * @returns The abbreviation string of Area.
     */
    public getUnitAbbreviation(unitAbbreviation: AreaUnits = AreaUnits.SquareMeters): string {

        switch (unitAbbreviation) {
            
            case AreaUnits.SquareKilometers:
                return `km²`;
            case AreaUnits.SquareMeters:
                return `m²`;
            case AreaUnits.SquareDecimeters:
                return `dm²`;
            case AreaUnits.SquareCentimeters:
                return `cm²`;
            case AreaUnits.SquareMillimeters:
                return `mm²`;
            case AreaUnits.SquareMicrometers:
                return `µm²`;
            case AreaUnits.SquareMiles:
                return `mi²`;
            case AreaUnits.SquareYards:
                return `yd²`;
            case AreaUnits.SquareFeet:
                return `ft²`;
            case AreaUnits.UsSurveySquareFeet:
                return `ft² (US)`;
            case AreaUnits.SquareInches:
                return `in²`;
            case AreaUnits.Acres:
                return `ac`;
            case AreaUnits.Hectares:
                return `ha`;
            case AreaUnits.SquareNauticalMiles:
                return `nmi²`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Area are equals to the current Area.
     * @param area The other Area.
     * @returns True if the given Area are equal to the current Area.
     */
    public equals(area: Area): boolean {
        return super.internalEquals(this.value, area.BaseValue);
    }

    /**
     * Compare the given Area against the current Area.
     * @param area The other Area.
     * @returns 0 if they are equal, -1 if the current Area is less then other, 1 if the current Area is greater then other.
     */
    public compareTo(area: Area): number {
        return super.internalCompareTo(this.value, area.BaseValue);
    }

    /**
     * Add the given Area with the current Area.
     * @param area The other Area.
     * @returns A new Area instance with the results.
     */
    public add(area: Area): Area {
        return new Area(super.internalAdd(this.value, area.BaseValue))
    }

    /**
     * Subtract the given Area with the current Area.
     * @param area The other Area.
     * @returns A new Area instance with the results.
     */
    public subtract(area: Area): Area {
        return new Area(super.internalSubtract(this.value, area.BaseValue))
    }

    /**
     * Multiply the given Area with the current Area.
     * @param area The other Area.
     * @returns A new Area instance with the results.
     */
    public multiply(area: Area): Area {
        return new Area(super.internalMultiply(this.value, area.BaseValue))
    }

    /**
     * Divide the given Area with the current Area.
     * @param area The other Area.
     * @returns A new Area instance with the results.
     */
    public divide(area: Area): Area {
        return new Area(super.internalDivide(this.value, area.BaseValue))
    }

    /**
     * Modulo the given Area with the current Area.
     * @param area The other Area.
     * @returns A new Area instance with the results.
     */
    public modulo(area: Area): Area {
        return new Area(super.internalModulo(this.value, area.BaseValue))
    }

    /**
     * Pow the given Area with the current Area.
     * @param area The other Area.
     * @returns A new Area instance with the results.
     */
    public pow(area: Area): Area {
        return new Area(super.internalPow(this.value, area.BaseValue))
    }
}
