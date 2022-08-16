/** LuminousIntensityUnits enumeration */
export enum LuminousIntensityUnits {
    /** */
    Candela
}

/** In photometry, luminous intensity is a measure of the wavelength-weighted power emitted by a light source in a particular direction per unit solid angle, based on the luminosity function, a standardized model of the sensitivity of the human eye. */
export class LuminousIntensity {
    private value: number;
    private candelaLazy: number | null = null;

    /**
     * Create a new LuminousIntensity.
     * @param value The value.
     * @param fromUnit The ‘LuminousIntensity’ unit to create from.
     * The default unit is Candela
     */
    public constructor(value: number, fromUnit: LuminousIntensityUnits = LuminousIntensityUnits.Candela) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of LuminousIntensity is Candela.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Candela(): number {
        if(this.candelaLazy !== null){
            return this.candelaLazy;
        }
        return this.candelaLazy = this.convertFromBase(LuminousIntensityUnits.Candela);
    }

    /**
     * Create a new LuminousIntensity instance from a Candela
     *
     * @param value The unit as Candela to create a new LuminousIntensity from.
     * @returns The new LuminousIntensity instance.
     */
    public static FromCandela(value: number): LuminousIntensity {
        return new LuminousIntensity(value, LuminousIntensityUnits.Candela);
    }

    private convertFromBase(toUnit: LuminousIntensityUnits): number {
        switch (toUnit) {
                
            case LuminousIntensityUnits.Candela:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LuminousIntensityUnits): number {
        switch (fromUnit) {
                
            case LuminousIntensityUnits.Candela:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the LuminousIntensity to string.
     * Note! the default format for LuminousIntensity is Candela.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the LuminousIntensity.
     * @returns The string format of the LuminousIntensity.
     */
    public toString(unit: LuminousIntensityUnits = LuminousIntensityUnits.Candela): string {

        switch (unit) {
            
            case LuminousIntensityUnits.Candela:
                return this.Candela + ` cd`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get LuminousIntensity unit abbreviation.
     * Note! the default abbreviation for LuminousIntensity is Candela.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the LuminousIntensity.
     * @returns The abbreviation string of LuminousIntensity.
     */
    public getUnitAbbreviation(unitAbbreviation: LuminousIntensityUnits = LuminousIntensityUnits.Candela): string {

        switch (unitAbbreviation) {
            
            case LuminousIntensityUnits.Candela:
                return `cd`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given LuminousIntensity are equals to the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns True if the given LuminousIntensity are equal to the current LuminousIntensity.
     */
    public equals(luminousIntensity: LuminousIntensity): boolean {
        return this.value === luminousIntensity.BaseValue;
    }

    /**
     * Compare the given LuminousIntensity against the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns 0 if they are equal, -1 if the current LuminousIntensity is less then other, 1 if the current LuminousIntensity is greater then other.
     */
    public compareTo(luminousIntensity: LuminousIntensity): number {

        if (this.value > luminousIntensity.BaseValue)
            return 1;
        if (this.value < luminousIntensity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    public add(luminousIntensity: LuminousIntensity): LuminousIntensity {
        return new LuminousIntensity(this.value + luminousIntensity.BaseValue)
    }

    /**
     * Subtract the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    public subtract(luminousIntensity: LuminousIntensity): LuminousIntensity {
        return new LuminousIntensity(this.value - luminousIntensity.BaseValue)
    }

    /**
     * Multiply the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    public multiply(luminousIntensity: LuminousIntensity): LuminousIntensity {
        return new LuminousIntensity(this.value * luminousIntensity.BaseValue)
    }

    /**
     * Divide the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    public divide(luminousIntensity: LuminousIntensity): LuminousIntensity {
        return new LuminousIntensity(this.value / luminousIntensity.BaseValue)
    }

    /**
     * Modulo the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    public modulo(luminousIntensity: LuminousIntensity): LuminousIntensity {
        return new LuminousIntensity(this.value % luminousIntensity.BaseValue)
    }

    /**
     * Pow the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    public pow(luminousIntensity: LuminousIntensity): LuminousIntensity {
        return new LuminousIntensity(this.value ** luminousIntensity.BaseValue)
    }
}
