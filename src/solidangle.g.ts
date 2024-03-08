/** SolidAngleUnits enumeration */
export enum SolidAngleUnits {
    /** */
    Steradians = "Steradian"
}

/** In geometry, a solid angle is the two-dimensional angle in three-dimensional space that an object subtends at a point. */
export class SolidAngle {
    private value: number;
    private steradiansLazy: number | null = null;

    /**
     * Create a new SolidAngle.
     * @param value The value.
     * @param fromUnit The ‘SolidAngle’ unit to create from.
     * The default unit is Steradians
     */
    public constructor(value: number, fromUnit: SolidAngleUnits = SolidAngleUnits.Steradians) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SolidAngle is Steradians.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Steradians(): number {
        if(this.steradiansLazy !== null){
            return this.steradiansLazy;
        }
        return this.steradiansLazy = this.convertFromBase(SolidAngleUnits.Steradians);
    }

    /**
     * Create a new SolidAngle instance from a Steradians
     *
     * @param value The unit as Steradians to create a new SolidAngle from.
     * @returns The new SolidAngle instance.
     */
    public static FromSteradians(value: number): SolidAngle {
        return new SolidAngle(value, SolidAngleUnits.Steradians);
    }

    /**
     * Convert SolidAngle to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: SolidAngleUnits): number {
        switch (toUnit) {
            case SolidAngleUnits.Steradians: return this.Steradians;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: SolidAngleUnits): number {
        switch (toUnit) {
                
            case SolidAngleUnits.Steradians:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: SolidAngleUnits): number {
        switch (fromUnit) {
                
            case SolidAngleUnits.Steradians:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the SolidAngle to string.
     * Note! the default format for SolidAngle is Steradians.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the SolidAngle.
     * @returns The string format of the SolidAngle.
     */
    public toString(unit: SolidAngleUnits = SolidAngleUnits.Steradians): string {

        switch (unit) {
            
            case SolidAngleUnits.Steradians:
                return this.Steradians + ` sr`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get SolidAngle unit abbreviation.
     * Note! the default abbreviation for SolidAngle is Steradians.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the SolidAngle.
     * @returns The abbreviation string of SolidAngle.
     */
    public getUnitAbbreviation(unitAbbreviation: SolidAngleUnits = SolidAngleUnits.Steradians): string {

        switch (unitAbbreviation) {
            
            case SolidAngleUnits.Steradians:
                return `sr`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given SolidAngle are equals to the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns True if the given SolidAngle are equal to the current SolidAngle.
     */
    public equals(solidAngle: SolidAngle): boolean {
        return this.value === solidAngle.BaseValue;
    }

    /**
     * Compare the given SolidAngle against the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns 0 if they are equal, -1 if the current SolidAngle is less then other, 1 if the current SolidAngle is greater then other.
     */
    public compareTo(solidAngle: SolidAngle): number {

        if (this.value > solidAngle.BaseValue)
            return 1;
        if (this.value < solidAngle.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    public add(solidAngle: SolidAngle): SolidAngle {
        return new SolidAngle(this.value + solidAngle.BaseValue)
    }

    /**
     * Subtract the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    public subtract(solidAngle: SolidAngle): SolidAngle {
        return new SolidAngle(this.value - solidAngle.BaseValue)
    }

    /**
     * Multiply the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    public multiply(solidAngle: SolidAngle): SolidAngle {
        return new SolidAngle(this.value * solidAngle.BaseValue)
    }

    /**
     * Divide the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    public divide(solidAngle: SolidAngle): SolidAngle {
        return new SolidAngle(this.value / solidAngle.BaseValue)
    }

    /**
     * Modulo the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    public modulo(solidAngle: SolidAngle): SolidAngle {
        return new SolidAngle(this.value % solidAngle.BaseValue)
    }

    /**
     * Pow the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    public pow(solidAngle: SolidAngle): SolidAngle {
        return new SolidAngle(this.value ** solidAngle.BaseValue)
    }
}
