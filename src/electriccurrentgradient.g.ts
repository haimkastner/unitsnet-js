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
     */
    public constructor(value: number, fromUnit: ElectricCurrentGradientUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricCurrentGradient is AmperePerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
