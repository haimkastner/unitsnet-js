/** AreaUnits enumeration */
export enum AreaUnits {
    /** */
    SquareKilometers,
    /** */
    SquareMeters,
    /** */
    SquareDecimeters,
    /** */
    SquareCentimeters,
    /** */
    SquareMillimeters,
    /** */
    SquareMicrometers,
    /** */
    SquareMiles,
    /** */
    SquareYards,
    /** */
    SquareFeet,
    /** */
    UsSurveySquareFeet,
    /** */
    SquareInches,
    /** */
    Acres,
    /** */
    Hectares,
    /** */
    SquareNauticalMiles
}

/** Area is a quantity that expresses the extent of a two-dimensional surface or shape, or planar lamina, in the plane. Area can be understood as the amount of material with a given thickness that would be necessary to fashion a model of the shape, or the amount of paint necessary to cover the surface with a single coat.[1] It is the two-dimensional analog of the length of a curve (a one-dimensional concept) or the volume of a solid (a three-dimensional concept). */
export class Area {
    private value: number;
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
     */
    public constructor(value: number, fromUnit: AreaUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Area is SquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
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

    /** */
    public get SquareMiles(): number {
        if(this.squaremilesLazy !== null){
            return this.squaremilesLazy;
        }
        return this.squaremilesLazy = this.convertFromBase(AreaUnits.SquareMiles);
    }

    /** */
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

    /** */
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

    /** */
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
     *
     * @param value The unit as SquareMiles to create a new Area from.
     * @returns The new Area instance.
     */
    public static FromSquareMiles(value: number): Area {
        return new Area(value, AreaUnits.SquareMiles);
    }

    /**
     * Create a new Area instance from a SquareYards
     *
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
     *
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
     *
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

    private convertFromBase(toUnit: AreaUnits): number {
        switch (toUnit) {
                
            case AreaUnits.SquareKilometers:
                return this.value/1e6;
            case AreaUnits.SquareMeters:
                return this.value;
            case AreaUnits.SquareDecimeters:
                return this.value/1e-2;
            case AreaUnits.SquareCentimeters:
                return this.value/1e-4;
            case AreaUnits.SquareMillimeters:
                return this.value/1e-6;
            case AreaUnits.SquareMicrometers:
                return this.value/1e-12;
            case AreaUnits.SquareMiles:
                return this.value/2.59e6;
            case AreaUnits.SquareYards:
                return this.value/0.836127;
            case AreaUnits.SquareFeet:
                return this.value/0.092903;
            case AreaUnits.UsSurveySquareFeet:
                return this.value/0.09290341161;
            case AreaUnits.SquareInches:
                return this.value/0.00064516;
            case AreaUnits.Acres:
                return this.value/4046.85642;
            case AreaUnits.Hectares:
                return this.value/1e4;
            case AreaUnits.SquareNauticalMiles:
                return this.value/3429904;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: AreaUnits): number {
        switch (fromUnit) {
                
            case AreaUnits.SquareKilometers:
                return value*1e6;
            case AreaUnits.SquareMeters:
                return value;
            case AreaUnits.SquareDecimeters:
                return value*1e-2;
            case AreaUnits.SquareCentimeters:
                return value*1e-4;
            case AreaUnits.SquareMillimeters:
                return value*1e-6;
            case AreaUnits.SquareMicrometers:
                return value*1e-12;
            case AreaUnits.SquareMiles:
                return value*2.59e6;
            case AreaUnits.SquareYards:
                return value*0.836127;
            case AreaUnits.SquareFeet:
                return value*0.092903;
            case AreaUnits.UsSurveySquareFeet:
                return value*0.09290341161;
            case AreaUnits.SquareInches:
                return value*0.00064516;
            case AreaUnits.Acres:
                return value*4046.85642;
            case AreaUnits.Hectares:
                return value*1e4;
            case AreaUnits.SquareNauticalMiles:
                return value*3429904;
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
    public toString(toUnit: AreaUnits = AreaUnits.SquareMeters): string {

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
}
