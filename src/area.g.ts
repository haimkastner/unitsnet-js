export enum AreaUnits {
    SquareKilometers,
    SquareMeters,
    SquareDecimeters,
    SquareCentimeters,
    SquareMillimeters,
    SquareMicrometers,
    SquareMiles,
    SquareYards,
    SquareFeet,
    UsSurveySquareFeet,
    SquareInches,
    Acres,
    Hectares,
    SquareNauticalMiles
}

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

    public constructor(value: number, fromUnit: AreaUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get SquareKilometers(): number {
        if(this.squarekilometersLazy !== null){
            return this.squarekilometersLazy;
        }
        return this.squarekilometersLazy = this.convertFromBase(AreaUnits.SquareKilometers);
    }

    public get SquareMeters(): number {
        if(this.squaremetersLazy !== null){
            return this.squaremetersLazy;
        }
        return this.squaremetersLazy = this.convertFromBase(AreaUnits.SquareMeters);
    }

    public get SquareDecimeters(): number {
        if(this.squaredecimetersLazy !== null){
            return this.squaredecimetersLazy;
        }
        return this.squaredecimetersLazy = this.convertFromBase(AreaUnits.SquareDecimeters);
    }

    public get SquareCentimeters(): number {
        if(this.squarecentimetersLazy !== null){
            return this.squarecentimetersLazy;
        }
        return this.squarecentimetersLazy = this.convertFromBase(AreaUnits.SquareCentimeters);
    }

    public get SquareMillimeters(): number {
        if(this.squaremillimetersLazy !== null){
            return this.squaremillimetersLazy;
        }
        return this.squaremillimetersLazy = this.convertFromBase(AreaUnits.SquareMillimeters);
    }

    public get SquareMicrometers(): number {
        if(this.squaremicrometersLazy !== null){
            return this.squaremicrometersLazy;
        }
        return this.squaremicrometersLazy = this.convertFromBase(AreaUnits.SquareMicrometers);
    }

    public get SquareMiles(): number {
        if(this.squaremilesLazy !== null){
            return this.squaremilesLazy;
        }
        return this.squaremilesLazy = this.convertFromBase(AreaUnits.SquareMiles);
    }

    public get SquareYards(): number {
        if(this.squareyardsLazy !== null){
            return this.squareyardsLazy;
        }
        return this.squareyardsLazy = this.convertFromBase(AreaUnits.SquareYards);
    }

    public get SquareFeet(): number {
        if(this.squarefeetLazy !== null){
            return this.squarefeetLazy;
        }
        return this.squarefeetLazy = this.convertFromBase(AreaUnits.SquareFeet);
    }

    public get UsSurveySquareFeet(): number {
        if(this.ussurveysquarefeetLazy !== null){
            return this.ussurveysquarefeetLazy;
        }
        return this.ussurveysquarefeetLazy = this.convertFromBase(AreaUnits.UsSurveySquareFeet);
    }

    public get SquareInches(): number {
        if(this.squareinchesLazy !== null){
            return this.squareinchesLazy;
        }
        return this.squareinchesLazy = this.convertFromBase(AreaUnits.SquareInches);
    }

    public get Acres(): number {
        if(this.acresLazy !== null){
            return this.acresLazy;
        }
        return this.acresLazy = this.convertFromBase(AreaUnits.Acres);
    }

    public get Hectares(): number {
        if(this.hectaresLazy !== null){
            return this.hectaresLazy;
        }
        return this.hectaresLazy = this.convertFromBase(AreaUnits.Hectares);
    }

    public get SquareNauticalMiles(): number {
        if(this.squarenauticalmilesLazy !== null){
            return this.squarenauticalmilesLazy;
        }
        return this.squarenauticalmilesLazy = this.convertFromBase(AreaUnits.SquareNauticalMiles);
    }

    public static FromSquareKilometers(value: number): Area {
        return new Area(value, AreaUnits.SquareKilometers);
    }

    public static FromSquareMeters(value: number): Area {
        return new Area(value, AreaUnits.SquareMeters);
    }

    public static FromSquareDecimeters(value: number): Area {
        return new Area(value, AreaUnits.SquareDecimeters);
    }

    public static FromSquareCentimeters(value: number): Area {
        return new Area(value, AreaUnits.SquareCentimeters);
    }

    public static FromSquareMillimeters(value: number): Area {
        return new Area(value, AreaUnits.SquareMillimeters);
    }

    public static FromSquareMicrometers(value: number): Area {
        return new Area(value, AreaUnits.SquareMicrometers);
    }

    public static FromSquareMiles(value: number): Area {
        return new Area(value, AreaUnits.SquareMiles);
    }

    public static FromSquareYards(value: number): Area {
        return new Area(value, AreaUnits.SquareYards);
    }

    public static FromSquareFeet(value: number): Area {
        return new Area(value, AreaUnits.SquareFeet);
    }

    public static FromUsSurveySquareFeet(value: number): Area {
        return new Area(value, AreaUnits.UsSurveySquareFeet);
    }

    public static FromSquareInches(value: number): Area {
        return new Area(value, AreaUnits.SquareInches);
    }

    public static FromAcres(value: number): Area {
        return new Area(value, AreaUnits.Acres);
    }

    public static FromHectares(value: number): Area {
        return new Area(value, AreaUnits.Hectares);
    }

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
}
