/** AreaUnits enumeration */
export declare enum AreaUnits {
    /** */
    SquareKilometers = 0,
    /** */
    SquareMeters = 1,
    /** */
    SquareDecimeters = 2,
    /** */
    SquareCentimeters = 3,
    /** */
    SquareMillimeters = 4,
    /** */
    SquareMicrometers = 5,
    /** */
    SquareMiles = 6,
    /** */
    SquareYards = 7,
    /** */
    SquareFeet = 8,
    /** */
    UsSurveySquareFeet = 9,
    /** */
    SquareInches = 10,
    /** */
    Acres = 11,
    /** */
    Hectares = 12,
    /** */
    SquareNauticalMiles = 13
}
/** Area is a quantity that expresses the extent of a two-dimensional surface or shape, or planar lamina, in the plane. Area can be understood as the amount of material with a given thickness that would be necessary to fashion a model of the shape, or the amount of paint necessary to cover the surface with a single coat.[1] It is the two-dimensional analog of the length of a curve (a one-dimensional concept) or the volume of a solid (a three-dimensional concept). */
export declare class Area {
    private value;
    private squarekilometersLazy;
    private squaremetersLazy;
    private squaredecimetersLazy;
    private squarecentimetersLazy;
    private squaremillimetersLazy;
    private squaremicrometersLazy;
    private squaremilesLazy;
    private squareyardsLazy;
    private squarefeetLazy;
    private ussurveysquarefeetLazy;
    private squareinchesLazy;
    private acresLazy;
    private hectaresLazy;
    private squarenauticalmilesLazy;
    /**
     * Create a new Area.
     * @param value The value.
     * @param fromUnit The ‘Area’ unit to create from.
     */
    constructor(value: number, fromUnit: AreaUnits);
    /**
     * The base value of Area is SquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get SquareKilometers(): number;
    /** */
    get SquareMeters(): number;
    /** */
    get SquareDecimeters(): number;
    /** */
    get SquareCentimeters(): number;
    /** */
    get SquareMillimeters(): number;
    /** */
    get SquareMicrometers(): number;
    /** */
    get SquareMiles(): number;
    /** */
    get SquareYards(): number;
    /** */
    get SquareFeet(): number;
    /** */
    get UsSurveySquareFeet(): number;
    /** */
    get SquareInches(): number;
    /** */
    get Acres(): number;
    /** */
    get Hectares(): number;
    /** */
    get SquareNauticalMiles(): number;
    /**
     * Create a new Area instance from a SquareKilometers
     *
     * @param value The unit as SquareKilometers to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareKilometers(value: number): Area;
    /**
     * Create a new Area instance from a SquareMeters
     *
     * @param value The unit as SquareMeters to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareMeters(value: number): Area;
    /**
     * Create a new Area instance from a SquareDecimeters
     *
     * @param value The unit as SquareDecimeters to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareDecimeters(value: number): Area;
    /**
     * Create a new Area instance from a SquareCentimeters
     *
     * @param value The unit as SquareCentimeters to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareCentimeters(value: number): Area;
    /**
     * Create a new Area instance from a SquareMillimeters
     *
     * @param value The unit as SquareMillimeters to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareMillimeters(value: number): Area;
    /**
     * Create a new Area instance from a SquareMicrometers
     *
     * @param value The unit as SquareMicrometers to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareMicrometers(value: number): Area;
    /**
     * Create a new Area instance from a SquareMiles
     *
     * @param value The unit as SquareMiles to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareMiles(value: number): Area;
    /**
     * Create a new Area instance from a SquareYards
     *
     * @param value The unit as SquareYards to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareYards(value: number): Area;
    /**
     * Create a new Area instance from a SquareFeet
     *
     * @param value The unit as SquareFeet to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareFeet(value: number): Area;
    /**
     * Create a new Area instance from a UsSurveySquareFeet
     *
     * @param value The unit as UsSurveySquareFeet to create a new Area from.
     * @returns The new Area instance.
     */
    static FromUsSurveySquareFeet(value: number): Area;
    /**
     * Create a new Area instance from a SquareInches
     *
     * @param value The unit as SquareInches to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareInches(value: number): Area;
    /**
     * Create a new Area instance from a Acres
     *
     * @param value The unit as Acres to create a new Area from.
     * @returns The new Area instance.
     */
    static FromAcres(value: number): Area;
    /**
     * Create a new Area instance from a Hectares
     *
     * @param value The unit as Hectares to create a new Area from.
     * @returns The new Area instance.
     */
    static FromHectares(value: number): Area;
    /**
     * Create a new Area instance from a SquareNauticalMiles
     *
     * @param value The unit as SquareNauticalMiles to create a new Area from.
     * @returns The new Area instance.
     */
    static FromSquareNauticalMiles(value: number): Area;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Area to string.
     * Note! the default format for Area is SquareMeters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Area.
     * @returns The string format of the Area.
     */
    toString(toUnit?: AreaUnits): string;
}
//# sourceMappingURL=area.g.d.ts.map