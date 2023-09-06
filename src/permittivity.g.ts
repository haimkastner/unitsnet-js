/** PermittivityUnits enumeration */
export enum PermittivityUnits {
    /** */
    FaradsPerMeter
}

/** In electromagnetism, permittivity is the measure of resistance that is encountered when forming an electric field in a particular medium. */
export class Permittivity {
    private value: number;
    private faradspermeterLazy: number | null = null;

    /**
     * Create a new Permittivity.
     * @param value The value.
     * @param fromUnit The ‘Permittivity’ unit to create from.
     * The default unit is FaradsPerMeter
     */
    public constructor(value: number, fromUnit: PermittivityUnits = PermittivityUnits.FaradsPerMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Permittivity is FaradsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get FaradsPerMeter(): number {
        if(this.faradspermeterLazy !== null){
            return this.faradspermeterLazy;
        }
        return this.faradspermeterLazy = this.convertFromBase(PermittivityUnits.FaradsPerMeter);
    }

    /**
     * Create a new Permittivity instance from a FaradsPerMeter
     *
     * @param value The unit as FaradsPerMeter to create a new Permittivity from.
     * @returns The new Permittivity instance.
     */
    public static FromFaradsPerMeter(value: number): Permittivity {
        return new Permittivity(value, PermittivityUnits.FaradsPerMeter);
    }

    /**
     * Convert Permittivity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: PermittivityUnits): number {
        switch (toUnit) {
            case PermittivityUnits.FaradsPerMeter: return this.FaradsPerMeter;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: PermittivityUnits): number {
        switch (toUnit) {
                
            case PermittivityUnits.FaradsPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PermittivityUnits): number {
        switch (fromUnit) {
                
            case PermittivityUnits.FaradsPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Permittivity to string.
     * Note! the default format for Permittivity is FaradsPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Permittivity.
     * @returns The string format of the Permittivity.
     */
    public toString(unit: PermittivityUnits = PermittivityUnits.FaradsPerMeter): string {

        switch (unit) {
            
            case PermittivityUnits.FaradsPerMeter:
                return this.FaradsPerMeter + ` F/m`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Permittivity unit abbreviation.
     * Note! the default abbreviation for Permittivity is FaradsPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Permittivity.
     * @returns The abbreviation string of Permittivity.
     */
    public getUnitAbbreviation(unitAbbreviation: PermittivityUnits = PermittivityUnits.FaradsPerMeter): string {

        switch (unitAbbreviation) {
            
            case PermittivityUnits.FaradsPerMeter:
                return `F/m`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Permittivity are equals to the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns True if the given Permittivity are equal to the current Permittivity.
     */
    public equals(permittivity: Permittivity): boolean {
        return this.value === permittivity.BaseValue;
    }

    /**
     * Compare the given Permittivity against the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns 0 if they are equal, -1 if the current Permittivity is less then other, 1 if the current Permittivity is greater then other.
     */
    public compareTo(permittivity: Permittivity): number {

        if (this.value > permittivity.BaseValue)
            return 1;
        if (this.value < permittivity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    public add(permittivity: Permittivity): Permittivity {
        return new Permittivity(this.value + permittivity.BaseValue)
    }

    /**
     * Subtract the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    public subtract(permittivity: Permittivity): Permittivity {
        return new Permittivity(this.value - permittivity.BaseValue)
    }

    /**
     * Multiply the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    public multiply(permittivity: Permittivity): Permittivity {
        return new Permittivity(this.value * permittivity.BaseValue)
    }

    /**
     * Divide the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    public divide(permittivity: Permittivity): Permittivity {
        return new Permittivity(this.value / permittivity.BaseValue)
    }

    /**
     * Modulo the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    public modulo(permittivity: Permittivity): Permittivity {
        return new Permittivity(this.value % permittivity.BaseValue)
    }

    /**
     * Pow the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    public pow(permittivity: Permittivity): Permittivity {
        return new Permittivity(this.value ** permittivity.BaseValue)
    }
}
