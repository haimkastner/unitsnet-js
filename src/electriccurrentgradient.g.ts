/** ElectricCurrentGradientUnits enumeration */
export enum ElectricCurrentGradientUnits {
    /** */
    AmperesPerSecond
}

/** In electromagnetism, the current gradient describes how the current changes in time. */
export class ElectricCurrentGradient {
    private value: number;
    private amperespersecondLazy: number | null = null;

    /**
     * Create a new ElectricCurrentGradient.
     * @param value The value.
     * @param fromUnit The ‘ElectricCurrentGradient’ unit to create from.
     * The default unit is AmperesPerSecond
     */
    public constructor(value: number, fromUnit: ElectricCurrentGradientUnits = ElectricCurrentGradientUnits.AmperesPerSecond) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricCurrentGradient is AmperesPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get AmperesPerSecond(): number {
        if(this.amperespersecondLazy !== null){
            return this.amperespersecondLazy;
        }
        return this.amperespersecondLazy = this.convertFromBase(ElectricCurrentGradientUnits.AmperesPerSecond);
    }

    /**
     * Create a new ElectricCurrentGradient instance from a AmperesPerSecond
     *
     * @param value The unit as AmperesPerSecond to create a new ElectricCurrentGradient from.
     * @returns The new ElectricCurrentGradient instance.
     */
    public static FromAmperesPerSecond(value: number): ElectricCurrentGradient {
        return new ElectricCurrentGradient(value, ElectricCurrentGradientUnits.AmperesPerSecond);
    }

    private convertFromBase(toUnit: ElectricCurrentGradientUnits): number {
        switch (toUnit) {
                
            case ElectricCurrentGradientUnits.AmperesPerSecond:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricCurrentGradientUnits): number {
        switch (fromUnit) {
                
            case ElectricCurrentGradientUnits.AmperesPerSecond:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricCurrentGradient to string.
     * Note! the default format for ElectricCurrentGradient is AmperesPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricCurrentGradient.
     * @returns The string format of the ElectricCurrentGradient.
     */
    public toString(toUnit: ElectricCurrentGradientUnits = ElectricCurrentGradientUnits.AmperesPerSecond): string {

        switch (toUnit) {
            
            case ElectricCurrentGradientUnits.AmperesPerSecond:
                return this.AmperesPerSecond + ` A/s`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given ElectricCurrentGradient are equals to the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns True if the given ElectricCurrentGradient are equal to the current ElectricCurrentGradient.
     */
    public equals(electricCurrentGradient: ElectricCurrentGradient): boolean {
        return this.value === electricCurrentGradient.BaseValue;
    }

    /**
     * Compare the given ElectricCurrentGradient against the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns 0 if they are equal, -1 if the current ElectricCurrentGradient is less then other, 1 if the current ElectricCurrentGradient is greater then other.
     */
    public compareTo(electricCurrentGradient: ElectricCurrentGradient): number {

        if (this.value > electricCurrentGradient.BaseValue)
            return 1;
        if (this.value < electricCurrentGradient.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricCurrentGradient with the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns A new ElectricCurrentGradient instance with the results.
     */
    public add(electricCurrentGradient: ElectricCurrentGradient): ElectricCurrentGradient {
        return new ElectricCurrentGradient(this.value + electricCurrentGradient.BaseValue)
    }

    /**
     * Subtract the given ElectricCurrentGradient with the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns A new ElectricCurrentGradient instance with the results.
     */
    public subtract(electricCurrentGradient: ElectricCurrentGradient): ElectricCurrentGradient {
        return new ElectricCurrentGradient(this.value - electricCurrentGradient.BaseValue)
    }

    /**
     * Multiply the given ElectricCurrentGradient with the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns A new ElectricCurrentGradient instance with the results.
     */
    public multiply(electricCurrentGradient: ElectricCurrentGradient): ElectricCurrentGradient {
        return new ElectricCurrentGradient(this.value * electricCurrentGradient.BaseValue)
    }

    /**
     * Divide the given ElectricCurrentGradient with the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns A new ElectricCurrentGradient instance with the results.
     */
    public divide(electricCurrentGradient: ElectricCurrentGradient): ElectricCurrentGradient {
        return new ElectricCurrentGradient(this.value / electricCurrentGradient.BaseValue)
    }

    /**
     * Modulo the given ElectricCurrentGradient with the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns A new ElectricCurrentGradient instance with the results.
     */
    public modulo(electricCurrentGradient: ElectricCurrentGradient): ElectricCurrentGradient {
        return new ElectricCurrentGradient(this.value % electricCurrentGradient.BaseValue)
    }

    /**
     * Pow the given ElectricCurrentGradient with the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns A new ElectricCurrentGradient instance with the results.
     */
    public pow(electricCurrentGradient: ElectricCurrentGradient): ElectricCurrentGradient {
        return new ElectricCurrentGradient(this.value ** electricCurrentGradient.BaseValue)
    }
}
