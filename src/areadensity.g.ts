/** AreaDensityUnits enumeration */
export enum AreaDensityUnits {
    /** */
    KilogramsPerSquareMeter
}

/** The area density of a two-dimensional object is calculated as the mass per unit area. */
export class AreaDensity {
    private value: number;
    private kilogramspersquaremeterLazy: number | null = null;

    /**
     * Create a new AreaDensity.
     * @param value The value.
     * @param fromUnit The ‘AreaDensity’ unit to create from.
     * The default unit is KilogramsPerSquareMeter
     */
    public constructor(value: number, fromUnit: AreaDensityUnits = AreaDensityUnits.KilogramsPerSquareMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of AreaDensity is KilogramsPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get KilogramsPerSquareMeter(): number {
        if(this.kilogramspersquaremeterLazy !== null){
            return this.kilogramspersquaremeterLazy;
        }
        return this.kilogramspersquaremeterLazy = this.convertFromBase(AreaDensityUnits.KilogramsPerSquareMeter);
    }

    /**
     * Create a new AreaDensity instance from a KilogramsPerSquareMeter
     *
     * @param value The unit as KilogramsPerSquareMeter to create a new AreaDensity from.
     * @returns The new AreaDensity instance.
     */
    public static FromKilogramsPerSquareMeter(value: number): AreaDensity {
        return new AreaDensity(value, AreaDensityUnits.KilogramsPerSquareMeter);
    }

    private convertFromBase(toUnit: AreaDensityUnits): number {
        switch (toUnit) {
                
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: AreaDensityUnits): number {
        switch (fromUnit) {
                
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the AreaDensity to string.
     * Note! the default format for AreaDensity is KilogramsPerSquareMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the AreaDensity.
     * @returns The string format of the AreaDensity.
     */
    public toString(unit: AreaDensityUnits = AreaDensityUnits.KilogramsPerSquareMeter): string {

        switch (unit) {
            
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return this.KilogramsPerSquareMeter + ` kg/m²`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get AreaDensity unit abbreviation.
     * Note! the default abbreviation for AreaDensity is KilogramsPerSquareMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the AreaDensity.
     * @returns The abbreviation string of AreaDensity.
     */
    public getUnitAbbreviation(unitAbbreviation: AreaDensityUnits = AreaDensityUnits.KilogramsPerSquareMeter): string {

        switch (unitAbbreviation) {
            
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return `kg/m²`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given AreaDensity are equals to the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns True if the given AreaDensity are equal to the current AreaDensity.
     */
    public equals(areaDensity: AreaDensity): boolean {
        return this.value === areaDensity.BaseValue;
    }

    /**
     * Compare the given AreaDensity against the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns 0 if they are equal, -1 if the current AreaDensity is less then other, 1 if the current AreaDensity is greater then other.
     */
    public compareTo(areaDensity: AreaDensity): number {

        if (this.value > areaDensity.BaseValue)
            return 1;
        if (this.value < areaDensity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    public add(areaDensity: AreaDensity): AreaDensity {
        return new AreaDensity(this.value + areaDensity.BaseValue)
    }

    /**
     * Subtract the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    public subtract(areaDensity: AreaDensity): AreaDensity {
        return new AreaDensity(this.value - areaDensity.BaseValue)
    }

    /**
     * Multiply the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    public multiply(areaDensity: AreaDensity): AreaDensity {
        return new AreaDensity(this.value * areaDensity.BaseValue)
    }

    /**
     * Divide the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    public divide(areaDensity: AreaDensity): AreaDensity {
        return new AreaDensity(this.value / areaDensity.BaseValue)
    }

    /**
     * Modulo the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    public modulo(areaDensity: AreaDensity): AreaDensity {
        return new AreaDensity(this.value % areaDensity.BaseValue)
    }

    /**
     * Pow the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    public pow(areaDensity: AreaDensity): AreaDensity {
        return new AreaDensity(this.value ** areaDensity.BaseValue)
    }
}
