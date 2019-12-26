/** LevelUnits enumeration */
export enum LevelUnits {
    /** */
    Decibels,
    /** */
    Nepers
}

/** Level is the logarithm of the ratio of a quantity Q to a reference value of that quantity, Q₀, expressed in dimensionless units. */
export class Level {
    private value: number;
    private decibelsLazy: number | null = null;
    private nepersLazy: number | null = null;

    /**
     * Create a new Level.
     * @param value The value.
     * @param fromUnit The ‘Level’ unit to create from.
     */
    public constructor(value: number, fromUnit: LevelUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Level is Decibel.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Decibels(): number {
        if(this.decibelsLazy !== null){
            return this.decibelsLazy;
        }
        return this.decibelsLazy = this.convertFromBase(LevelUnits.Decibels);
    }

    /** */
    public get Nepers(): number {
        if(this.nepersLazy !== null){
            return this.nepersLazy;
        }
        return this.nepersLazy = this.convertFromBase(LevelUnits.Nepers);
    }

    /**
     * Create a new Level instance from a Decibels
     *
     * @param value The unit as Decibels to create a new Level from.
     * @returns The new Level instance.
     */
    public static FromDecibels(value: number): Level {
        return new Level(value, LevelUnits.Decibels);
    }

    /**
     * Create a new Level instance from a Nepers
     *
     * @param value The unit as Nepers to create a new Level from.
     * @returns The new Level instance.
     */
    public static FromNepers(value: number): Level {
        return new Level(value, LevelUnits.Nepers);
    }

    private convertFromBase(toUnit: LevelUnits): number {
        switch (toUnit) {
                
            case LevelUnits.Decibels:
                return this.value;
            case LevelUnits.Nepers:
                return 0.115129254*this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LevelUnits): number {
        switch (fromUnit) {
                
            case LevelUnits.Decibels:
                return value;
            case LevelUnits.Nepers:
                return (1/0.115129254)*value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Level to string.
     * Note! the default format for Level is Decibels.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Level.
     * @returns The string format of the Level.
     */
    public toString(toUnit: LevelUnits = LevelUnits.Decibels): string {

        switch (toUnit) {
            
            case LevelUnits.Decibels:
                return this.Decibels + ` dB`;
            case LevelUnits.Nepers:
                return this.Nepers + ` Np`;
        default:
            break;
        }
        return this.value.toString();
    }
}
