/** CoefficientOfThermalExpansionUnits enumeration */
export enum CoefficientOfThermalExpansionUnits {
    /** */
    InverseKelvin,
    /** */
    InverseDegreeCelsius,
    /** */
    InverseDegreeFahrenheit
}

/** A unit that represents a fractional change in size in response to a change in temperature. */
export class CoefficientOfThermalExpansion {
    private value: number;
    private inversekelvinLazy: number | null = null;
    private inversedegreecelsiusLazy: number | null = null;
    private inversedegreefahrenheitLazy: number | null = null;

    /**
     * Create a new CoefficientOfThermalExpansion.
     * @param value The value.
     * @param fromUnit The ‘CoefficientOfThermalExpansion’ unit to create from.
     * The default unit is InverseKelvin
     */
    public constructor(value: number, fromUnit: CoefficientOfThermalExpansionUnits = CoefficientOfThermalExpansionUnits.InverseKelvin) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of CoefficientOfThermalExpansion is InverseKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get InverseKelvin(): number {
        if(this.inversekelvinLazy !== null){
            return this.inversekelvinLazy;
        }
        return this.inversekelvinLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseKelvin);
    }

    /** */
    public get InverseDegreeCelsius(): number {
        if(this.inversedegreecelsiusLazy !== null){
            return this.inversedegreecelsiusLazy;
        }
        return this.inversedegreecelsiusLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseDegreeCelsius);
    }

    /** */
    public get InverseDegreeFahrenheit(): number {
        if(this.inversedegreefahrenheitLazy !== null){
            return this.inversedegreefahrenheitLazy;
        }
        return this.inversedegreefahrenheitLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit);
    }

    /**
     * Create a new CoefficientOfThermalExpansion instance from a InverseKelvin
     *
     * @param value The unit as InverseKelvin to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    public static FromInverseKelvin(value: number): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseKelvin);
    }

    /**
     * Create a new CoefficientOfThermalExpansion instance from a InverseDegreeCelsius
     *
     * @param value The unit as InverseDegreeCelsius to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    public static FromInverseDegreeCelsius(value: number): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseDegreeCelsius);
    }

    /**
     * Create a new CoefficientOfThermalExpansion instance from a InverseDegreeFahrenheit
     *
     * @param value The unit as InverseDegreeFahrenheit to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    public static FromInverseDegreeFahrenheit(value: number): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit);
    }

    private convertFromBase(toUnit: CoefficientOfThermalExpansionUnits): number {
        switch (toUnit) {
                
            case CoefficientOfThermalExpansionUnits.InverseKelvin:
                return this.value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeCelsius:
                return this.value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit:
                return this.value*5/9;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: CoefficientOfThermalExpansionUnits): number {
        switch (fromUnit) {
                
            case CoefficientOfThermalExpansionUnits.InverseKelvin:
                return value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeCelsius:
                return value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit:
                return value*9/5;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the CoefficientOfThermalExpansion to string.
     * Note! the default format for CoefficientOfThermalExpansion is InverseKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the CoefficientOfThermalExpansion.
     * @returns The string format of the CoefficientOfThermalExpansion.
     */
    public toString(toUnit: CoefficientOfThermalExpansionUnits = CoefficientOfThermalExpansionUnits.InverseKelvin): string {

        switch (toUnit) {
            
            case CoefficientOfThermalExpansionUnits.InverseKelvin:
                return this.InverseKelvin + ` K⁻¹`;
            case CoefficientOfThermalExpansionUnits.InverseDegreeCelsius:
                return this.InverseDegreeCelsius + ` °C⁻¹`;
            case CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit:
                return this.InverseDegreeFahrenheit + ` °F⁻¹`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given CoefficientOfThermalExpansion are equals to the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns True if the given CoefficientOfThermalExpansion are equal to the current CoefficientOfThermalExpansion.
     */
    public equals(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): boolean {
        return this.value === coefficientOfThermalExpansion.BaseValue;
    }

    /**
     * Compare the given CoefficientOfThermalExpansion against the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns 0 if they are equal, -1 if the current CoefficientOfThermalExpansion is less then other, 1 if the current CoefficientOfThermalExpansion is greater then other.
     */
    public compareTo(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): number {

        if (this.value > coefficientOfThermalExpansion.BaseValue)
            return 1;
        if (this.value < coefficientOfThermalExpansion.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    public add(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(this.value + coefficientOfThermalExpansion.BaseValue)
    }

    /**
     * Subtract the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    public subtract(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(this.value - coefficientOfThermalExpansion.BaseValue)
    }

    /**
     * Multiply the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    public multiply(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(this.value * coefficientOfThermalExpansion.BaseValue)
    }

    /**
     * Divide the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    public divide(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(this.value / coefficientOfThermalExpansion.BaseValue)
    }

    /**
     * Modulo the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    public modulo(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(this.value % coefficientOfThermalExpansion.BaseValue)
    }

    /**
     * Pow the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    public pow(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(this.value ** coefficientOfThermalExpansion.BaseValue)
    }
}
