/** AreaMomentOfInertiaUnits enumeration */
export enum AreaMomentOfInertiaUnits {
    /** */
    MetersToTheFourth,
    /** */
    DecimetersToTheFourth,
    /** */
    CentimetersToTheFourth,
    /** */
    MillimetersToTheFourth,
    /** */
    FeetToTheFourth,
    /** */
    InchesToTheFourth
}

/** A geometric property of an area that reflects how its points are distributed with regard to an axis. */
export class AreaMomentOfInertia {
    private value: number;
    private meterstothefourthLazy: number | null = null;
    private decimeterstothefourthLazy: number | null = null;
    private centimeterstothefourthLazy: number | null = null;
    private millimeterstothefourthLazy: number | null = null;
    private feettothefourthLazy: number | null = null;
    private inchestothefourthLazy: number | null = null;

    /**
     * Create a new AreaMomentOfInertia.
     * @param value The value.
     * @param fromUnit The ‘AreaMomentOfInertia’ unit to create from.
     * The default unit is MetersToTheFourth
     */
    public constructor(value: number, fromUnit: AreaMomentOfInertiaUnits = AreaMomentOfInertiaUnits.MetersToTheFourth) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of AreaMomentOfInertia is MetersToTheFourth.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get MetersToTheFourth(): number {
        if(this.meterstothefourthLazy !== null){
            return this.meterstothefourthLazy;
        }
        return this.meterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.MetersToTheFourth);
    }

    /** */
    public get DecimetersToTheFourth(): number {
        if(this.decimeterstothefourthLazy !== null){
            return this.decimeterstothefourthLazy;
        }
        return this.decimeterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.DecimetersToTheFourth);
    }

    /** */
    public get CentimetersToTheFourth(): number {
        if(this.centimeterstothefourthLazy !== null){
            return this.centimeterstothefourthLazy;
        }
        return this.centimeterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.CentimetersToTheFourth);
    }

    /** */
    public get MillimetersToTheFourth(): number {
        if(this.millimeterstothefourthLazy !== null){
            return this.millimeterstothefourthLazy;
        }
        return this.millimeterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.MillimetersToTheFourth);
    }

    /** */
    public get FeetToTheFourth(): number {
        if(this.feettothefourthLazy !== null){
            return this.feettothefourthLazy;
        }
        return this.feettothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.FeetToTheFourth);
    }

    /** */
    public get InchesToTheFourth(): number {
        if(this.inchestothefourthLazy !== null){
            return this.inchestothefourthLazy;
        }
        return this.inchestothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.InchesToTheFourth);
    }

    /**
     * Create a new AreaMomentOfInertia instance from a MetersToTheFourth
     *
     * @param value The unit as MetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    public static FromMetersToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.MetersToTheFourth);
    }

    /**
     * Create a new AreaMomentOfInertia instance from a DecimetersToTheFourth
     *
     * @param value The unit as DecimetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    public static FromDecimetersToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.DecimetersToTheFourth);
    }

    /**
     * Create a new AreaMomentOfInertia instance from a CentimetersToTheFourth
     *
     * @param value The unit as CentimetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    public static FromCentimetersToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.CentimetersToTheFourth);
    }

    /**
     * Create a new AreaMomentOfInertia instance from a MillimetersToTheFourth
     *
     * @param value The unit as MillimetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    public static FromMillimetersToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.MillimetersToTheFourth);
    }

    /**
     * Create a new AreaMomentOfInertia instance from a FeetToTheFourth
     *
     * @param value The unit as FeetToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    public static FromFeetToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.FeetToTheFourth);
    }

    /**
     * Create a new AreaMomentOfInertia instance from a InchesToTheFourth
     *
     * @param value The unit as InchesToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    public static FromInchesToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.InchesToTheFourth);
    }

    private convertFromBase(toUnit: AreaMomentOfInertiaUnits): number {
        switch (toUnit) {
                
            case AreaMomentOfInertiaUnits.MetersToTheFourth:
                return this.value;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth:
                return this.value*1e4;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth:
                return this.value*1e8;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth:
                return this.value*1e12;
            case AreaMomentOfInertiaUnits.FeetToTheFourth:
                return this.value/Math.pow(0.3048, 4);
            case AreaMomentOfInertiaUnits.InchesToTheFourth:
                return this.value/Math.pow(2.54e-2, 4);
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: AreaMomentOfInertiaUnits): number {
        switch (fromUnit) {
                
            case AreaMomentOfInertiaUnits.MetersToTheFourth:
                return value;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth:
                return value/1e4;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth:
                return value/1e8;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth:
                return value/1e12;
            case AreaMomentOfInertiaUnits.FeetToTheFourth:
                return value*Math.pow(0.3048, 4);
            case AreaMomentOfInertiaUnits.InchesToTheFourth:
                return value*Math.pow(2.54e-2, 4);
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the AreaMomentOfInertia to string.
     * Note! the default format for AreaMomentOfInertia is MetersToTheFourth.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the AreaMomentOfInertia.
     * @returns The string format of the AreaMomentOfInertia.
     */
    public toString(toUnit: AreaMomentOfInertiaUnits = AreaMomentOfInertiaUnits.MetersToTheFourth): string {

        switch (toUnit) {
            
            case AreaMomentOfInertiaUnits.MetersToTheFourth:
                return this.MetersToTheFourth + ` m⁴`;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth:
                return this.DecimetersToTheFourth + ` dm⁴`;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth:
                return this.CentimetersToTheFourth + ` cm⁴`;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth:
                return this.MillimetersToTheFourth + ` mm⁴`;
            case AreaMomentOfInertiaUnits.FeetToTheFourth:
                return this.FeetToTheFourth + ` ft⁴`;
            case AreaMomentOfInertiaUnits.InchesToTheFourth:
                return this.InchesToTheFourth + ` in⁴`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given AreaMomentOfInertia are equals to the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns True if the given AreaMomentOfInertia are equal to the current AreaMomentOfInertia.
     */
    public equals(areaMomentOfInertia: AreaMomentOfInertia): boolean {
        return this.value === areaMomentOfInertia.BaseValue;
    }

    /**
     * Compare the given AreaMomentOfInertia against the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns 0 if they are equal, -1 if the current AreaMomentOfInertia is less then other, 1 if the current AreaMomentOfInertia is greater then other.
     */
    public compareTo(areaMomentOfInertia: AreaMomentOfInertia): number {

        if (this.value > areaMomentOfInertia.BaseValue)
            return 1;
        if (this.value < areaMomentOfInertia.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    public add(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia {
        return new AreaMomentOfInertia(this.value + areaMomentOfInertia.BaseValue)
    }

    /**
     * Subtract the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    public subtract(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia {
        return new AreaMomentOfInertia(this.value - areaMomentOfInertia.BaseValue)
    }

    /**
     * Multiply the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    public multiply(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia {
        return new AreaMomentOfInertia(this.value * areaMomentOfInertia.BaseValue)
    }

    /**
     * Divide the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    public divide(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia {
        return new AreaMomentOfInertia(this.value / areaMomentOfInertia.BaseValue)
    }

    /**
     * Modulo the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    public modulo(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia {
        return new AreaMomentOfInertia(this.value % areaMomentOfInertia.BaseValue)
    }

    /**
     * Pow the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    public pow(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia {
        return new AreaMomentOfInertia(this.value ** areaMomentOfInertia.BaseValue)
    }
}
