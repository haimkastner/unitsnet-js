/** RelativeHumidityUnits enumeration */
export enum RelativeHumidityUnits {
    /** */
    Percent
}

/** Relative humidity is a ratio of the actual water vapor present in the air to the maximum water vapor in the air at the given temperature. */
export class RelativeHumidity {
    private value: number;
    private percentLazy: number | null = null;

    /**
     * Create a new RelativeHumidity.
     * @param value The value.
     * @param fromUnit The ‘RelativeHumidity’ unit to create from.
     * The default unit is Percent
     */
    public constructor(value: number, fromUnit: RelativeHumidityUnits = RelativeHumidityUnits.Percent) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RelativeHumidity is Percent.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Percent(): number {
        if(this.percentLazy !== null){
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(RelativeHumidityUnits.Percent);
    }

    /**
     * Create a new RelativeHumidity instance from a Percent
     *
     * @param value The unit as Percent to create a new RelativeHumidity from.
     * @returns The new RelativeHumidity instance.
     */
    public static FromPercent(value: number): RelativeHumidity {
        return new RelativeHumidity(value, RelativeHumidityUnits.Percent);
    }

    private convertFromBase(toUnit: RelativeHumidityUnits): number {
        switch (toUnit) {
                
            case RelativeHumidityUnits.Percent:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RelativeHumidityUnits): number {
        switch (fromUnit) {
                
            case RelativeHumidityUnits.Percent:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the RelativeHumidity to string.
     * Note! the default format for RelativeHumidity is Percent.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RelativeHumidity.
     * @returns The string format of the RelativeHumidity.
     */
    public toString(unit: RelativeHumidityUnits = RelativeHumidityUnits.Percent): string {

        switch (unit) {
            
            case RelativeHumidityUnits.Percent:
                return this.Percent + ` %RH`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RelativeHumidity unit abbreviation.
     * Note! the default abbreviation for RelativeHumidity is Percent.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RelativeHumidity.
     * @returns The abbreviation string of RelativeHumidity.
     */
    public getUnitAbbreviation(unitAbbreviation: RelativeHumidityUnits = RelativeHumidityUnits.Percent): string {

        switch (unitAbbreviation) {
            
            case RelativeHumidityUnits.Percent:
                return `%RH`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given RelativeHumidity are equals to the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns True if the given RelativeHumidity are equal to the current RelativeHumidity.
     */
    public equals(relativeHumidity: RelativeHumidity): boolean {
        return this.value === relativeHumidity.BaseValue;
    }

    /**
     * Compare the given RelativeHumidity against the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns 0 if they are equal, -1 if the current RelativeHumidity is less then other, 1 if the current RelativeHumidity is greater then other.
     */
    public compareTo(relativeHumidity: RelativeHumidity): number {

        if (this.value > relativeHumidity.BaseValue)
            return 1;
        if (this.value < relativeHumidity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given RelativeHumidity with the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns A new RelativeHumidity instance with the results.
     */
    public add(relativeHumidity: RelativeHumidity): RelativeHumidity {
        return new RelativeHumidity(this.value + relativeHumidity.BaseValue)
    }

    /**
     * Subtract the given RelativeHumidity with the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns A new RelativeHumidity instance with the results.
     */
    public subtract(relativeHumidity: RelativeHumidity): RelativeHumidity {
        return new RelativeHumidity(this.value - relativeHumidity.BaseValue)
    }

    /**
     * Multiply the given RelativeHumidity with the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns A new RelativeHumidity instance with the results.
     */
    public multiply(relativeHumidity: RelativeHumidity): RelativeHumidity {
        return new RelativeHumidity(this.value * relativeHumidity.BaseValue)
    }

    /**
     * Divide the given RelativeHumidity with the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns A new RelativeHumidity instance with the results.
     */
    public divide(relativeHumidity: RelativeHumidity): RelativeHumidity {
        return new RelativeHumidity(this.value / relativeHumidity.BaseValue)
    }

    /**
     * Modulo the given RelativeHumidity with the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns A new RelativeHumidity instance with the results.
     */
    public modulo(relativeHumidity: RelativeHumidity): RelativeHumidity {
        return new RelativeHumidity(this.value % relativeHumidity.BaseValue)
    }

    /**
     * Pow the given RelativeHumidity with the current RelativeHumidity.
     * @param relativeHumidity The other RelativeHumidity.
     * @returns A new RelativeHumidity instance with the results.
     */
    public pow(relativeHumidity: RelativeHumidity): RelativeHumidity {
        return new RelativeHumidity(this.value ** relativeHumidity.BaseValue)
    }
}
