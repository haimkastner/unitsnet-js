/** LevelUnits enumeration */
export enum LevelUnits {
    /** */
    Decibels = "Decibel",
    /** */
    Nepers = "Neper"
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
     * The default unit is Decibels
     */
    public constructor(value: number, fromUnit: LevelUnits = LevelUnits.Decibels) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Level is Decibels.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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

    /**
     * Convert Level to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: LevelUnits): number {
        switch (toUnit) {
            case LevelUnits.Decibels: return this.Decibels;
            case LevelUnits.Nepers: return this.Nepers;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: LevelUnits): number {
        switch (toUnit) {
                
            case LevelUnits.Decibels:
                return this.value;
            case LevelUnits.Nepers:
                return 0.115129254 * this.value;
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
                return (1 / 0.115129254) * value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Level to string.
     * Note! the default format for Level is Decibels.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Level.
     * @returns The string format of the Level.
     */
    public toString(unit: LevelUnits = LevelUnits.Decibels): string {

        switch (unit) {
            
            case LevelUnits.Decibels:
                return this.Decibels + ` dB`;
            case LevelUnits.Nepers:
                return this.Nepers + ` Np`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Level unit abbreviation.
     * Note! the default abbreviation for Level is Decibels.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Level.
     * @returns The abbreviation string of Level.
     */
    public getUnitAbbreviation(unitAbbreviation: LevelUnits = LevelUnits.Decibels): string {

        switch (unitAbbreviation) {
            
            case LevelUnits.Decibels:
                return `dB`;
            case LevelUnits.Nepers:
                return `Np`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Level are equals to the current Level.
     * @param level The other Level.
     * @returns True if the given Level are equal to the current Level.
     */
    public equals(level: Level): boolean {
        return this.value === level.BaseValue;
    }

    /**
     * Compare the given Level against the current Level.
     * @param level The other Level.
     * @returns 0 if they are equal, -1 if the current Level is less then other, 1 if the current Level is greater then other.
     */
    public compareTo(level: Level): number {

        if (this.value > level.BaseValue)
            return 1;
        if (this.value < level.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    public add(level: Level): Level {
        return new Level(this.value + level.BaseValue)
    }

    /**
     * Subtract the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    public subtract(level: Level): Level {
        return new Level(this.value - level.BaseValue)
    }

    /**
     * Multiply the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    public multiply(level: Level): Level {
        return new Level(this.value * level.BaseValue)
    }

    /**
     * Divide the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    public divide(level: Level): Level {
        return new Level(this.value / level.BaseValue)
    }

    /**
     * Modulo the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    public modulo(level: Level): Level {
        return new Level(this.value % level.BaseValue)
    }

    /**
     * Pow the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    public pow(level: Level): Level {
        return new Level(this.value ** level.BaseValue)
    }
}
