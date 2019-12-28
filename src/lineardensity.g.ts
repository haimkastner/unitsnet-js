/** LinearDensityUnits enumeration */
export enum LinearDensityUnits {
    /** */
    GramsPerMeter,
    /** */
    PoundsPerFoot,
    /** */
    KilogramsPerMeter
}

/** The Linear Density, or more precisely, the linear mass density, of a substance is its mass per unit length.  The term linear density is most often used when describing the characteristics of one-dimensional objects, although linear density can also be used to describe the density of a three-dimensional quantity along one particular dimension. */
export class LinearDensity {
    private value: number;
    private gramspermeterLazy: number | null = null;
    private poundsperfootLazy: number | null = null;
    private kilogramspermeterLazy: number | null = null;

    /**
     * Create a new LinearDensity.
     * @param value The value.
     * @param fromUnit The ‘LinearDensity’ unit to create from.
     * The default unit is KilogramsPerMeter
     */
    public constructor(value: number, fromUnit: LinearDensityUnits = LinearDensityUnits.KilogramsPerMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of LinearDensity is KilogramsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get GramsPerMeter(): number {
        if(this.gramspermeterLazy !== null){
            return this.gramspermeterLazy;
        }
        return this.gramspermeterLazy = this.convertFromBase(LinearDensityUnits.GramsPerMeter);
    }

    /** */
    public get PoundsPerFoot(): number {
        if(this.poundsperfootLazy !== null){
            return this.poundsperfootLazy;
        }
        return this.poundsperfootLazy = this.convertFromBase(LinearDensityUnits.PoundsPerFoot);
    }

    /** */
    public get KilogramsPerMeter(): number {
        if(this.kilogramspermeterLazy !== null){
            return this.kilogramspermeterLazy;
        }
        return this.kilogramspermeterLazy = this.convertFromBase(LinearDensityUnits.KilogramsPerMeter);
    }

    /**
     * Create a new LinearDensity instance from a GramsPerMeter
     *
     * @param value The unit as GramsPerMeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromGramsPerMeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.GramsPerMeter);
    }

    /**
     * Create a new LinearDensity instance from a PoundsPerFoot
     *
     * @param value The unit as PoundsPerFoot to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromPoundsPerFoot(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.PoundsPerFoot);
    }

    /**
     * Create a new LinearDensity instance from a KilogramsPerMeter
     *
     * @param value The unit as KilogramsPerMeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromKilogramsPerMeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.KilogramsPerMeter);
    }

    private convertFromBase(toUnit: LinearDensityUnits): number {
        switch (toUnit) {
                
            case LinearDensityUnits.GramsPerMeter:
                return this.value/1e-3;
            case LinearDensityUnits.PoundsPerFoot:
                return this.value/1.48816394;
            case LinearDensityUnits.KilogramsPerMeter:
                return (this.value/1e-3) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LinearDensityUnits): number {
        switch (fromUnit) {
                
            case LinearDensityUnits.GramsPerMeter:
                return value*1e-3;
            case LinearDensityUnits.PoundsPerFoot:
                return value*1.48816394;
            case LinearDensityUnits.KilogramsPerMeter:
                return (value*1e-3) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the LinearDensity to string.
     * Note! the default format for LinearDensity is KilogramsPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the LinearDensity.
     * @returns The string format of the LinearDensity.
     */
    public toString(toUnit: LinearDensityUnits = LinearDensityUnits.KilogramsPerMeter): string {

        switch (toUnit) {
            
            case LinearDensityUnits.GramsPerMeter:
                return this.GramsPerMeter + ` g/m`;
            case LinearDensityUnits.PoundsPerFoot:
                return this.PoundsPerFoot + ` lb/ft`;
            case LinearDensityUnits.KilogramsPerMeter:
                return this.KilogramsPerMeter + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given LinearDensity are equals to the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns True if the given LinearDensity are equal to the current LinearDensity.
     */
    public equals(linearDensity: LinearDensity): boolean {
        return this.value === linearDensity.BaseValue;
    }

    /**
     * Compare the given LinearDensity against the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns 0 if they are equal, -1 if the current LinearDensity is less then other, 1 if the current LinearDensity is greater then other.
     */
    public compareTo(linearDensity: LinearDensity): number {

        if (this.value > linearDensity.BaseValue)
            return 1;
        if (this.value < linearDensity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    public add(linearDensity: LinearDensity): LinearDensity {
        return new LinearDensity(this.value + linearDensity.BaseValue)
    }

    /**
     * Subtract the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    public subtract(linearDensity: LinearDensity): LinearDensity {
        return new LinearDensity(this.value - linearDensity.BaseValue)
    }

    /**
     * Multiply the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    public multiply(linearDensity: LinearDensity): LinearDensity {
        return new LinearDensity(this.value * linearDensity.BaseValue)
    }

    /**
     * Divide the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    public divide(linearDensity: LinearDensity): LinearDensity {
        return new LinearDensity(this.value / linearDensity.BaseValue)
    }

    /**
     * Modulo the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    public modulo(linearDensity: LinearDensity): LinearDensity {
        return new LinearDensity(this.value % linearDensity.BaseValue)
    }

    /**
     * Pow the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    public pow(linearDensity: LinearDensity): LinearDensity {
        return new LinearDensity(this.value ** linearDensity.BaseValue)
    }
}
