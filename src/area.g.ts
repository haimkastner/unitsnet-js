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

    public constructor(value: number, fromUnit: AreaUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get SquareKilometers(): number {
        return this.convertFromBase(AreaUnits.SquareKilometers);
    }

    public get SquareMeters(): number {
        return this.convertFromBase(AreaUnits.SquareMeters);
    }

    public get SquareDecimeters(): number {
        return this.convertFromBase(AreaUnits.SquareDecimeters);
    }

    public get SquareCentimeters(): number {
        return this.convertFromBase(AreaUnits.SquareCentimeters);
    }

    public get SquareMillimeters(): number {
        return this.convertFromBase(AreaUnits.SquareMillimeters);
    }

    public get SquareMicrometers(): number {
        return this.convertFromBase(AreaUnits.SquareMicrometers);
    }

    public get SquareMiles(): number {
        return this.convertFromBase(AreaUnits.SquareMiles);
    }

    public get SquareYards(): number {
        return this.convertFromBase(AreaUnits.SquareYards);
    }

    public get SquareFeet(): number {
        return this.convertFromBase(AreaUnits.SquareFeet);
    }

    public get UsSurveySquareFeet(): number {
        return this.convertFromBase(AreaUnits.UsSurveySquareFeet);
    }

    public get SquareInches(): number {
        return this.convertFromBase(AreaUnits.SquareInches);
    }

    public get Acres(): number {
        return this.convertFromBase(AreaUnits.Acres);
    }

    public get Hectares(): number {
        return this.convertFromBase(AreaUnits.Hectares);
    }

    public get SquareNauticalMiles(): number {
        return this.convertFromBase(AreaUnits.SquareNauticalMiles);
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
                    return this.value*1e6;
                
                case AreaUnits.SquareMeters:
                    return this.value;
                
                case AreaUnits.SquareDecimeters:
                    return this.value*1e-2;
                
                case AreaUnits.SquareCentimeters:
                    return this.value*1e-4;
                
                case AreaUnits.SquareMillimeters:
                    return this.value*1e-6;
                
                case AreaUnits.SquareMicrometers:
                    return this.value*1e-12;
                
                case AreaUnits.SquareMiles:
                    return this.value*2.59e6;
                
                case AreaUnits.SquareYards:
                    return this.value*0.836127;
                
                case AreaUnits.SquareFeet:
                    return this.value*0.092903;
                
                case AreaUnits.UsSurveySquareFeet:
                    return this.value*0.09290341161;
                
                case AreaUnits.SquareInches:
                    return this.value*0.00064516;
                
                case AreaUnits.Acres:
                    return this.value*4046.85642;
                
                case AreaUnits.Hectares:
                    return this.value*1e4;
                
                case AreaUnits.SquareNauticalMiles:
                    return this.value*3429904;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: AreaUnits): number {

                switch (fromUnit) {
                    
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
}
