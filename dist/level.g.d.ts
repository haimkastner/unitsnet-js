/** LevelUnits enumeration */
export declare enum LevelUnits {
    /** */
    Decibels = 0,
    /** */
    Nepers = 1
}
/** Level is the logarithm of the ratio of a quantity Q to a reference value of that quantity, Q₀, expressed in dimensionless units. */
export declare class Level {
    private value;
    private decibelsLazy;
    private nepersLazy;
    /**
     * Create a new Level.
     * @param value The value.
     * @param fromUnit The ‘Level’ unit to create from.
     * The default unit is Decibels
     */
    constructor(value: number, fromUnit?: LevelUnits);
    /**
     * The base value of Level is Decibels.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Decibels(): number;
    /** */
    get Nepers(): number;
    /**
     * Create a new Level instance from a Decibels
     *
     * @param value The unit as Decibels to create a new Level from.
     * @returns The new Level instance.
     */
    static FromDecibels(value: number): Level;
    /**
     * Create a new Level instance from a Nepers
     *
     * @param value The unit as Nepers to create a new Level from.
     * @returns The new Level instance.
     */
    static FromNepers(value: number): Level;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Level to string.
     * Note! the default format for Level is Decibels.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Level.
     * @returns The string format of the Level.
     */
    toString(toUnit?: LevelUnits): string;
    /**
     * Check if the given Level are equals to the current Level.
     * @param level The other Level.
     * @returns True if the given Level are equal to the current Level.
     */
    equals(level: Level): boolean;
    /**
     * Compare the given Level against the current Level.
     * @param level The other Level.
     * @returns 0 if they are equal, -1 if the current Level is less then other, 1 if the current Level is greater then other.
     */
    compareTo(level: Level): number;
    /**
     * Add the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    add(level: Level): Level;
    /**
     * Subtract the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    subtract(level: Level): Level;
    /**
     * Multiply the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    multiply(level: Level): Level;
    /**
     * Divide the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    divide(level: Level): Level;
    /**
     * Modulo the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    modulo(level: Level): Level;
    /**
     * Pow the given Level with the current Level.
     * @param level The other Level.
     * @returns A new Level instance with the results.
     */
    pow(level: Level): Level;
}
//# sourceMappingURL=level.g.d.ts.map