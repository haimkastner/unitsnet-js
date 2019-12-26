export declare enum AreaUnits {
    SquareKilometers = 0,
    SquareMeters = 1,
    SquareDecimeters = 2,
    SquareCentimeters = 3,
    SquareMillimeters = 4,
    SquareMicrometers = 5,
    SquareMiles = 6,
    SquareYards = 7,
    SquareFeet = 8,
    UsSurveySquareFeet = 9,
    SquareInches = 10,
    Acres = 11,
    Hectares = 12,
    SquareNauticalMiles = 13
}
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
    constructor(value: number, fromUnit: AreaUnits);
    get SquareKilometers(): number;
    get SquareMeters(): number;
    get SquareDecimeters(): number;
    get SquareCentimeters(): number;
    get SquareMillimeters(): number;
    get SquareMicrometers(): number;
    get SquareMiles(): number;
    get SquareYards(): number;
    get SquareFeet(): number;
    get UsSurveySquareFeet(): number;
    get SquareInches(): number;
    get Acres(): number;
    get Hectares(): number;
    get SquareNauticalMiles(): number;
    static FromSquareKilometers(value: number): Area;
    static FromSquareMeters(value: number): Area;
    static FromSquareDecimeters(value: number): Area;
    static FromSquareCentimeters(value: number): Area;
    static FromSquareMillimeters(value: number): Area;
    static FromSquareMicrometers(value: number): Area;
    static FromSquareMiles(value: number): Area;
    static FromSquareYards(value: number): Area;
    static FromSquareFeet(value: number): Area;
    static FromUsSurveySquareFeet(value: number): Area;
    static FromSquareInches(value: number): Area;
    static FromAcres(value: number): Area;
    static FromHectares(value: number): Area;
    static FromSquareNauticalMiles(value: number): Area;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: AreaUnits): string;
}
//# sourceMappingURL=area.g.d.ts.map