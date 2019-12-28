/** RotationalStiffnessUnits enumeration */
export enum RotationalStiffnessUnits {
    /** */
    NewtonMetersPerRadian,
    /** */
    KilonewtonMetersPerRadian,
    /** */
    MeganewtonMetersPerRadian
}

/** https://en.wikipedia.org/wiki/Stiffness#Rotational_stiffness */
export class RotationalStiffness {
    private value: number;
    private newtonmetersperradianLazy: number | null = null;
    private kilonewtonmetersperradianLazy: number | null = null;
    private meganewtonmetersperradianLazy: number | null = null;

    /**
     * Create a new RotationalStiffness.
     * @param value The value.
     * @param fromUnit The ‘RotationalStiffness’ unit to create from.
     * The default unit is NewtonMetersPerRadian
     */
    public constructor(value: number, fromUnit: RotationalStiffnessUnits = RotationalStiffnessUnits.NewtonMetersPerRadian) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RotationalStiffness is NewtonMetersPerRadian.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get NewtonMetersPerRadian(): number {
        if(this.newtonmetersperradianLazy !== null){
            return this.newtonmetersperradianLazy;
        }
        return this.newtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMetersPerRadian);
    }

    /** */
    public get KilonewtonMetersPerRadian(): number {
        if(this.kilonewtonmetersperradianLazy !== null){
            return this.kilonewtonmetersperradianLazy;
        }
        return this.kilonewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMetersPerRadian);
    }

    /** */
    public get MeganewtonMetersPerRadian(): number {
        if(this.meganewtonmetersperradianLazy !== null){
            return this.meganewtonmetersperradianLazy;
        }
        return this.meganewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a NewtonMetersPerRadian
     *
     * @param value The unit as NewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromNewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a KilonewtonMetersPerRadian
     *
     * @param value The unit as KilonewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromKilonewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMetersPerRadian);
    }

    /**
     * Create a new RotationalStiffness instance from a MeganewtonMetersPerRadian
     *
     * @param value The unit as MeganewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    public static FromMeganewtonMetersPerRadian(value: number): RotationalStiffness {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMetersPerRadian);
    }

    private convertFromBase(toUnit: RotationalStiffnessUnits): number {
        switch (toUnit) {
                
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return this.value;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return (this.value) / 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RotationalStiffnessUnits): number {
        switch (fromUnit) {
                
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return value;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return (value) * 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the RotationalStiffness to string.
     * Note! the default format for RotationalStiffness is NewtonMetersPerRadian.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RotationalStiffness.
     * @returns The string format of the RotationalStiffness.
     */
    public toString(toUnit: RotationalStiffnessUnits = RotationalStiffnessUnits.NewtonMetersPerRadian): string {

        switch (toUnit) {
            
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return this.NewtonMetersPerRadian + ` N·m/rad`;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return this.KilonewtonMetersPerRadian + ` `;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
                return this.MeganewtonMetersPerRadian + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given RotationalStiffness are equals to the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns True if the given RotationalStiffness are equal to the current RotationalStiffness.
     */
    public equals(rotationalStiffness: RotationalStiffness): boolean {
        return this.value === rotationalStiffness.BaseValue;
    }

    /**
     * Compare the given RotationalStiffness against the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns 0 if they are equal, -1 if the current RotationalStiffness is less then other, 1 if the current RotationalStiffness is greater then other.
     */
    public compareTo(rotationalStiffness: RotationalStiffness): number {

        if (this.value > rotationalStiffness.BaseValue)
            return 1;
        if (this.value < rotationalStiffness.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public add(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(this.value + rotationalStiffness.BaseValue)
    }

    /**
     * Subtract the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public subtract(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(this.value - rotationalStiffness.BaseValue)
    }

    /**
     * Multiply the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public multiply(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(this.value * rotationalStiffness.BaseValue)
    }

    /**
     * Divide the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public divide(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(this.value / rotationalStiffness.BaseValue)
    }

    /**
     * Modulo the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public modulo(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(this.value % rotationalStiffness.BaseValue)
    }

    /**
     * Pow the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    public pow(rotationalStiffness: RotationalStiffness): RotationalStiffness {
        return new RotationalStiffness(this.value ** rotationalStiffness.BaseValue)
    }
}
