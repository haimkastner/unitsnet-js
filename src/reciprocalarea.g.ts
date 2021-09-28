/** ReciprocalAreaUnits enumeration */
export enum ReciprocalAreaUnits {
    /** */
    InverseSquareMeters,
    /** */
    InverseSquareKilometers,
    /** */
    InverseSquareDecimeters,
    /** */
    InverseSquareCentimeters,
    /** */
    InverseSquareMillimeters,
    /** */
    InverseSquareMicrometers,
    /** */
    InverseSquareMiles,
    /** */
    InverseSquareYards,
    /** */
    InverseSquareFeet,
    /** */
    InverseUsSurveySquareFeet,
    /** */
    InverseSquareInches
}

/** Reciprocal area (Inverse-square) quantity is used to specify a physical quantity inversely proportional to the square of the distance. */
export class ReciprocalArea {
    private value: number;
    private inversesquaremetersLazy: number | null = null;
    private inversesquarekilometersLazy: number | null = null;
    private inversesquaredecimetersLazy: number | null = null;
    private inversesquarecentimetersLazy: number | null = null;
    private inversesquaremillimetersLazy: number | null = null;
    private inversesquaremicrometersLazy: number | null = null;
    private inversesquaremilesLazy: number | null = null;
    private inversesquareyardsLazy: number | null = null;
    private inversesquarefeetLazy: number | null = null;
    private inverseussurveysquarefeetLazy: number | null = null;
    private inversesquareinchesLazy: number | null = null;

    /**
     * Create a new ReciprocalArea.
     * @param value The value.
     * @param fromUnit The ‘ReciprocalArea’ unit to create from.
     * The default unit is InverseSquareMeters
     */
    public constructor(value: number, fromUnit: ReciprocalAreaUnits = ReciprocalAreaUnits.InverseSquareMeters) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ReciprocalArea is InverseSquareMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get InverseSquareMeters(): number {
        if(this.inversesquaremetersLazy !== null){
            return this.inversesquaremetersLazy;
        }
        return this.inversesquaremetersLazy = this.convertFromBase(ReciprocalAreaUnits.InverseSquareMeters);
    }

    /** */
    public get InverseSquareKilometers(): number {
        if(this.inversesquarekilometersLazy !== null){
            return this.inversesquarekilometersLazy;
        }
        return this.inversesquarekilometersLazy = this.convertFromBase(ReciprocalAreaUnits.InverseSquareKilometers);
    }

    /** */
    public get InverseSquareDecimeters(): number {
        if(this.inversesquaredecimetersLazy !== null){
            return this.inversesquaredecimetersLazy;
        }
        return this.inversesquaredecimetersLazy = this.convertFromBase(ReciprocalAreaUnits.InverseSquareDecimeters);
    }

    /** */
    public get InverseSquareCentimeters(): number {
        if(this.inversesquarecentimetersLazy !== null){
            return this.inversesquarecentimetersLazy;
        }
        return this.inversesquarecentimetersLazy = this.convertFromBase(ReciprocalAreaUnits.InverseSquareCentimeters);
    }

    /** */
    public get InverseSquareMillimeters(): number {
        if(this.inversesquaremillimetersLazy !== null){
            return this.inversesquaremillimetersLazy;
        }
        return this.inversesquaremillimetersLazy = this.convertFromBase(ReciprocalAreaUnits.InverseSquareMillimeters);
    }

    /** */
    public get InverseSquareMicrometers(): number {
        if(this.inversesquaremicrometersLazy !== null){
            return this.inversesquaremicrometersLazy;
        }
        return this.inversesquaremicrometersLazy = this.convertFromBase(ReciprocalAreaUnits.InverseSquareMicrometers);
    }

    /** */
    public get InverseSquareMiles(): number {
        if(this.inversesquaremilesLazy !== null){
            return this.inversesquaremilesLazy;
        }
        return this.inversesquaremilesLazy = this.convertFromBase(ReciprocalAreaUnits.InverseSquareMiles);
    }

    /** */
    public get InverseSquareYards(): number {
        if(this.inversesquareyardsLazy !== null){
            return this.inversesquareyardsLazy;
        }
        return this.inversesquareyardsLazy = this.convertFromBase(ReciprocalAreaUnits.InverseSquareYards);
    }

    /** */
    public get InverseSquareFeet(): number {
        if(this.inversesquarefeetLazy !== null){
            return this.inversesquarefeetLazy;
        }
        return this.inversesquarefeetLazy = this.convertFromBase(ReciprocalAreaUnits.InverseSquareFeet);
    }

    /** */
    public get InverseUsSurveySquareFeet(): number {
        if(this.inverseussurveysquarefeetLazy !== null){
            return this.inverseussurveysquarefeetLazy;
        }
        return this.inverseussurveysquarefeetLazy = this.convertFromBase(ReciprocalAreaUnits.InverseUsSurveySquareFeet);
    }

    /** */
    public get InverseSquareInches(): number {
        if(this.inversesquareinchesLazy !== null){
            return this.inversesquareinchesLazy;
        }
        return this.inversesquareinchesLazy = this.convertFromBase(ReciprocalAreaUnits.InverseSquareInches);
    }

    /**
     * Create a new ReciprocalArea instance from a InverseSquareMeters
     *
     * @param value The unit as InverseSquareMeters to create a new ReciprocalArea from.
     * @returns The new ReciprocalArea instance.
     */
    public static FromInverseSquareMeters(value: number): ReciprocalArea {
        return new ReciprocalArea(value, ReciprocalAreaUnits.InverseSquareMeters);
    }

    /**
     * Create a new ReciprocalArea instance from a InverseSquareKilometers
     *
     * @param value The unit as InverseSquareKilometers to create a new ReciprocalArea from.
     * @returns The new ReciprocalArea instance.
     */
    public static FromInverseSquareKilometers(value: number): ReciprocalArea {
        return new ReciprocalArea(value, ReciprocalAreaUnits.InverseSquareKilometers);
    }

    /**
     * Create a new ReciprocalArea instance from a InverseSquareDecimeters
     *
     * @param value The unit as InverseSquareDecimeters to create a new ReciprocalArea from.
     * @returns The new ReciprocalArea instance.
     */
    public static FromInverseSquareDecimeters(value: number): ReciprocalArea {
        return new ReciprocalArea(value, ReciprocalAreaUnits.InverseSquareDecimeters);
    }

    /**
     * Create a new ReciprocalArea instance from a InverseSquareCentimeters
     *
     * @param value The unit as InverseSquareCentimeters to create a new ReciprocalArea from.
     * @returns The new ReciprocalArea instance.
     */
    public static FromInverseSquareCentimeters(value: number): ReciprocalArea {
        return new ReciprocalArea(value, ReciprocalAreaUnits.InverseSquareCentimeters);
    }

    /**
     * Create a new ReciprocalArea instance from a InverseSquareMillimeters
     *
     * @param value The unit as InverseSquareMillimeters to create a new ReciprocalArea from.
     * @returns The new ReciprocalArea instance.
     */
    public static FromInverseSquareMillimeters(value: number): ReciprocalArea {
        return new ReciprocalArea(value, ReciprocalAreaUnits.InverseSquareMillimeters);
    }

    /**
     * Create a new ReciprocalArea instance from a InverseSquareMicrometers
     *
     * @param value The unit as InverseSquareMicrometers to create a new ReciprocalArea from.
     * @returns The new ReciprocalArea instance.
     */
    public static FromInverseSquareMicrometers(value: number): ReciprocalArea {
        return new ReciprocalArea(value, ReciprocalAreaUnits.InverseSquareMicrometers);
    }

    /**
     * Create a new ReciprocalArea instance from a InverseSquareMiles
     *
     * @param value The unit as InverseSquareMiles to create a new ReciprocalArea from.
     * @returns The new ReciprocalArea instance.
     */
    public static FromInverseSquareMiles(value: number): ReciprocalArea {
        return new ReciprocalArea(value, ReciprocalAreaUnits.InverseSquareMiles);
    }

    /**
     * Create a new ReciprocalArea instance from a InverseSquareYards
     *
     * @param value The unit as InverseSquareYards to create a new ReciprocalArea from.
     * @returns The new ReciprocalArea instance.
     */
    public static FromInverseSquareYards(value: number): ReciprocalArea {
        return new ReciprocalArea(value, ReciprocalAreaUnits.InverseSquareYards);
    }

    /**
     * Create a new ReciprocalArea instance from a InverseSquareFeet
     *
     * @param value The unit as InverseSquareFeet to create a new ReciprocalArea from.
     * @returns The new ReciprocalArea instance.
     */
    public static FromInverseSquareFeet(value: number): ReciprocalArea {
        return new ReciprocalArea(value, ReciprocalAreaUnits.InverseSquareFeet);
    }

    /**
     * Create a new ReciprocalArea instance from a InverseUsSurveySquareFeet
     *
     * @param value The unit as InverseUsSurveySquareFeet to create a new ReciprocalArea from.
     * @returns The new ReciprocalArea instance.
     */
    public static FromInverseUsSurveySquareFeet(value: number): ReciprocalArea {
        return new ReciprocalArea(value, ReciprocalAreaUnits.InverseUsSurveySquareFeet);
    }

    /**
     * Create a new ReciprocalArea instance from a InverseSquareInches
     *
     * @param value The unit as InverseSquareInches to create a new ReciprocalArea from.
     * @returns The new ReciprocalArea instance.
     */
    public static FromInverseSquareInches(value: number): ReciprocalArea {
        return new ReciprocalArea(value, ReciprocalAreaUnits.InverseSquareInches);
    }

    private convertFromBase(toUnit: ReciprocalAreaUnits): number {
        switch (toUnit) {
                
            case ReciprocalAreaUnits.InverseSquareMeters:
                return this.value;
            case ReciprocalAreaUnits.InverseSquareKilometers:
                return this.value*1e6;
            case ReciprocalAreaUnits.InverseSquareDecimeters:
                return this.value*1e-2;
            case ReciprocalAreaUnits.InverseSquareCentimeters:
                return this.value*1e-4;
            case ReciprocalAreaUnits.InverseSquareMillimeters:
                return this.value*1e-6;
            case ReciprocalAreaUnits.InverseSquareMicrometers:
                return this.value*1e-12;
            case ReciprocalAreaUnits.InverseSquareMiles:
                return this.value*2.59e6;
            case ReciprocalAreaUnits.InverseSquareYards:
                return this.value*0.836127;
            case ReciprocalAreaUnits.InverseSquareFeet:
                return this.value*0.092903;
            case ReciprocalAreaUnits.InverseUsSurveySquareFeet:
                return this.value*0.09290341161;
            case ReciprocalAreaUnits.InverseSquareInches:
                return this.value*0.00064516;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ReciprocalAreaUnits): number {
        switch (fromUnit) {
                
            case ReciprocalAreaUnits.InverseSquareMeters:
                return value;
            case ReciprocalAreaUnits.InverseSquareKilometers:
                return value/1e6;
            case ReciprocalAreaUnits.InverseSquareDecimeters:
                return value/1e-2;
            case ReciprocalAreaUnits.InverseSquareCentimeters:
                return value/1e-4;
            case ReciprocalAreaUnits.InverseSquareMillimeters:
                return value/1e-6;
            case ReciprocalAreaUnits.InverseSquareMicrometers:
                return value/1e-12;
            case ReciprocalAreaUnits.InverseSquareMiles:
                return value/2.59e6;
            case ReciprocalAreaUnits.InverseSquareYards:
                return value/0.836127;
            case ReciprocalAreaUnits.InverseSquareFeet:
                return value/0.092903;
            case ReciprocalAreaUnits.InverseUsSurveySquareFeet:
                return value/0.09290341161;
            case ReciprocalAreaUnits.InverseSquareInches:
                return value/0.00064516;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ReciprocalArea to string.
     * Note! the default format for ReciprocalArea is InverseSquareMeters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ReciprocalArea.
     * @returns The string format of the ReciprocalArea.
     */
    public toString(toUnit: ReciprocalAreaUnits = ReciprocalAreaUnits.InverseSquareMeters): string {

        switch (toUnit) {
            
            case ReciprocalAreaUnits.InverseSquareMeters:
                return this.InverseSquareMeters + ` m⁻²`;
            case ReciprocalAreaUnits.InverseSquareKilometers:
                return this.InverseSquareKilometers + ` km⁻²`;
            case ReciprocalAreaUnits.InverseSquareDecimeters:
                return this.InverseSquareDecimeters + ` dm⁻²`;
            case ReciprocalAreaUnits.InverseSquareCentimeters:
                return this.InverseSquareCentimeters + ` cm⁻²`;
            case ReciprocalAreaUnits.InverseSquareMillimeters:
                return this.InverseSquareMillimeters + ` mm⁻²`;
            case ReciprocalAreaUnits.InverseSquareMicrometers:
                return this.InverseSquareMicrometers + ` µm⁻²`;
            case ReciprocalAreaUnits.InverseSquareMiles:
                return this.InverseSquareMiles + ` mi⁻²`;
            case ReciprocalAreaUnits.InverseSquareYards:
                return this.InverseSquareYards + ` yd⁻²`;
            case ReciprocalAreaUnits.InverseSquareFeet:
                return this.InverseSquareFeet + ` ft⁻²`;
            case ReciprocalAreaUnits.InverseUsSurveySquareFeet:
                return this.InverseUsSurveySquareFeet + ` ft⁻² (US)`;
            case ReciprocalAreaUnits.InverseSquareInches:
                return this.InverseSquareInches + ` in⁻²`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given ReciprocalArea are equals to the current ReciprocalArea.
     * @param reciprocalArea The other ReciprocalArea.
     * @returns True if the given ReciprocalArea are equal to the current ReciprocalArea.
     */
    public equals(reciprocalArea: ReciprocalArea): boolean {
        return this.value === reciprocalArea.BaseValue;
    }

    /**
     * Compare the given ReciprocalArea against the current ReciprocalArea.
     * @param reciprocalArea The other ReciprocalArea.
     * @returns 0 if they are equal, -1 if the current ReciprocalArea is less then other, 1 if the current ReciprocalArea is greater then other.
     */
    public compareTo(reciprocalArea: ReciprocalArea): number {

        if (this.value > reciprocalArea.BaseValue)
            return 1;
        if (this.value < reciprocalArea.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ReciprocalArea with the current ReciprocalArea.
     * @param reciprocalArea The other ReciprocalArea.
     * @returns A new ReciprocalArea instance with the results.
     */
    public add(reciprocalArea: ReciprocalArea): ReciprocalArea {
        return new ReciprocalArea(this.value + reciprocalArea.BaseValue)
    }

    /**
     * Subtract the given ReciprocalArea with the current ReciprocalArea.
     * @param reciprocalArea The other ReciprocalArea.
     * @returns A new ReciprocalArea instance with the results.
     */
    public subtract(reciprocalArea: ReciprocalArea): ReciprocalArea {
        return new ReciprocalArea(this.value - reciprocalArea.BaseValue)
    }

    /**
     * Multiply the given ReciprocalArea with the current ReciprocalArea.
     * @param reciprocalArea The other ReciprocalArea.
     * @returns A new ReciprocalArea instance with the results.
     */
    public multiply(reciprocalArea: ReciprocalArea): ReciprocalArea {
        return new ReciprocalArea(this.value * reciprocalArea.BaseValue)
    }

    /**
     * Divide the given ReciprocalArea with the current ReciprocalArea.
     * @param reciprocalArea The other ReciprocalArea.
     * @returns A new ReciprocalArea instance with the results.
     */
    public divide(reciprocalArea: ReciprocalArea): ReciprocalArea {
        return new ReciprocalArea(this.value / reciprocalArea.BaseValue)
    }

    /**
     * Modulo the given ReciprocalArea with the current ReciprocalArea.
     * @param reciprocalArea The other ReciprocalArea.
     * @returns A new ReciprocalArea instance with the results.
     */
    public modulo(reciprocalArea: ReciprocalArea): ReciprocalArea {
        return new ReciprocalArea(this.value % reciprocalArea.BaseValue)
    }

    /**
     * Pow the given ReciprocalArea with the current ReciprocalArea.
     * @param reciprocalArea The other ReciprocalArea.
     * @returns A new ReciprocalArea instance with the results.
     */
    public pow(reciprocalArea: ReciprocalArea): ReciprocalArea {
        return new ReciprocalArea(this.value ** reciprocalArea.BaseValue)
    }
}
