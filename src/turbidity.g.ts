/** TurbidityUnits enumeration */
export enum TurbidityUnits {
    /** */
    NTU
}

/** Turbidity is the cloudiness or haziness of a fluid caused by large numbers of individual particles that are generally invisible to the naked eye, similar to smoke in air. The measurement of turbidity is a key test of water quality. */
export class Turbidity {
    private value: number;
    private ntuLazy: number | null = null;

    /**
     * Create a new Turbidity.
     * @param value The value.
     * @param fromUnit The ‘Turbidity’ unit to create from.
     * The default unit is NTU
     */
    public constructor(value: number, fromUnit: TurbidityUnits = TurbidityUnits.NTU) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Turbidity is NTU.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get NTU(): number {
        if(this.ntuLazy !== null){
            return this.ntuLazy;
        }
        return this.ntuLazy = this.convertFromBase(TurbidityUnits.NTU);
    }

    /**
     * Create a new Turbidity instance from a NTU
     *
     * @param value The unit as NTU to create a new Turbidity from.
     * @returns The new Turbidity instance.
     */
    public static FromNTU(value: number): Turbidity {
        return new Turbidity(value, TurbidityUnits.NTU);
    }

    private convertFromBase(toUnit: TurbidityUnits): number {
        switch (toUnit) {
                
            case TurbidityUnits.NTU:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: TurbidityUnits): number {
        switch (fromUnit) {
                
            case TurbidityUnits.NTU:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Turbidity to string.
     * Note! the default format for Turbidity is NTU.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Turbidity.
     * @returns The string format of the Turbidity.
     */
    public toString(toUnit: TurbidityUnits = TurbidityUnits.NTU): string {

        switch (toUnit) {
            
            case TurbidityUnits.NTU:
                return this.NTU + ` NTU`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given Turbidity are equals to the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns True if the given Turbidity are equal to the current Turbidity.
     */
    public equals(turbidity: Turbidity): boolean {
        return this.value === turbidity.BaseValue;
    }

    /**
     * Compare the given Turbidity against the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns 0 if they are equal, -1 if the current Turbidity is less then other, 1 if the current Turbidity is greater then other.
     */
    public compareTo(turbidity: Turbidity): number {

        if (this.value > turbidity.BaseValue)
            return 1;
        if (this.value < turbidity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Turbidity with the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns A new Turbidity instance with the results.
     */
    public add(turbidity: Turbidity): Turbidity {
        return new Turbidity(this.value + turbidity.BaseValue)
    }

    /**
     * Subtract the given Turbidity with the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns A new Turbidity instance with the results.
     */
    public subtract(turbidity: Turbidity): Turbidity {
        return new Turbidity(this.value - turbidity.BaseValue)
    }

    /**
     * Multiply the given Turbidity with the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns A new Turbidity instance with the results.
     */
    public multiply(turbidity: Turbidity): Turbidity {
        return new Turbidity(this.value * turbidity.BaseValue)
    }

    /**
     * Divide the given Turbidity with the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns A new Turbidity instance with the results.
     */
    public divide(turbidity: Turbidity): Turbidity {
        return new Turbidity(this.value / turbidity.BaseValue)
    }

    /**
     * Modulo the given Turbidity with the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns A new Turbidity instance with the results.
     */
    public modulo(turbidity: Turbidity): Turbidity {
        return new Turbidity(this.value % turbidity.BaseValue)
    }

    /**
     * Pow the given Turbidity with the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns A new Turbidity instance with the results.
     */
    public pow(turbidity: Turbidity): Turbidity {
        return new Turbidity(this.value ** turbidity.BaseValue)
    }
}
