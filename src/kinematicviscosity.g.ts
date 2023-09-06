/** KinematicViscosityUnits enumeration */
export enum KinematicViscosityUnits {
    /** */
    SquareMetersPerSecond,
    /** */
    Stokes,
    /** */
    SquareFeetPerSecond,
    /** */
    Nanostokes,
    /** */
    Microstokes,
    /** */
    Millistokes,
    /** */
    Centistokes,
    /** */
    Decistokes,
    /** */
    Kilostokes
}

/** The viscosity of a fluid is a measure of its resistance to gradual deformation by shear stress or tensile stress. */
export class KinematicViscosity {
    private value: number;
    private squaremeterspersecondLazy: number | null = null;
    private stokesLazy: number | null = null;
    private squarefeetpersecondLazy: number | null = null;
    private nanostokesLazy: number | null = null;
    private microstokesLazy: number | null = null;
    private millistokesLazy: number | null = null;
    private centistokesLazy: number | null = null;
    private decistokesLazy: number | null = null;
    private kilostokesLazy: number | null = null;

    /**
     * Create a new KinematicViscosity.
     * @param value The value.
     * @param fromUnit The ‘KinematicViscosity’ unit to create from.
     * The default unit is SquareMetersPerSecond
     */
    public constructor(value: number, fromUnit: KinematicViscosityUnits = KinematicViscosityUnits.SquareMetersPerSecond) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of KinematicViscosity is SquareMetersPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get SquareMetersPerSecond(): number {
        if(this.squaremeterspersecondLazy !== null){
            return this.squaremeterspersecondLazy;
        }
        return this.squaremeterspersecondLazy = this.convertFromBase(KinematicViscosityUnits.SquareMetersPerSecond);
    }

    /** */
    public get Stokes(): number {
        if(this.stokesLazy !== null){
            return this.stokesLazy;
        }
        return this.stokesLazy = this.convertFromBase(KinematicViscosityUnits.Stokes);
    }

    /** */
    public get SquareFeetPerSecond(): number {
        if(this.squarefeetpersecondLazy !== null){
            return this.squarefeetpersecondLazy;
        }
        return this.squarefeetpersecondLazy = this.convertFromBase(KinematicViscosityUnits.SquareFeetPerSecond);
    }

    /** */
    public get Nanostokes(): number {
        if(this.nanostokesLazy !== null){
            return this.nanostokesLazy;
        }
        return this.nanostokesLazy = this.convertFromBase(KinematicViscosityUnits.Nanostokes);
    }

    /** */
    public get Microstokes(): number {
        if(this.microstokesLazy !== null){
            return this.microstokesLazy;
        }
        return this.microstokesLazy = this.convertFromBase(KinematicViscosityUnits.Microstokes);
    }

    /** */
    public get Millistokes(): number {
        if(this.millistokesLazy !== null){
            return this.millistokesLazy;
        }
        return this.millistokesLazy = this.convertFromBase(KinematicViscosityUnits.Millistokes);
    }

    /** */
    public get Centistokes(): number {
        if(this.centistokesLazy !== null){
            return this.centistokesLazy;
        }
        return this.centistokesLazy = this.convertFromBase(KinematicViscosityUnits.Centistokes);
    }

    /** */
    public get Decistokes(): number {
        if(this.decistokesLazy !== null){
            return this.decistokesLazy;
        }
        return this.decistokesLazy = this.convertFromBase(KinematicViscosityUnits.Decistokes);
    }

    /** */
    public get Kilostokes(): number {
        if(this.kilostokesLazy !== null){
            return this.kilostokesLazy;
        }
        return this.kilostokesLazy = this.convertFromBase(KinematicViscosityUnits.Kilostokes);
    }

    /**
     * Create a new KinematicViscosity instance from a SquareMetersPerSecond
     *
     * @param value The unit as SquareMetersPerSecond to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    public static FromSquareMetersPerSecond(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.SquareMetersPerSecond);
    }

    /**
     * Create a new KinematicViscosity instance from a Stokes
     *
     * @param value The unit as Stokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    public static FromStokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Stokes);
    }

    /**
     * Create a new KinematicViscosity instance from a SquareFeetPerSecond
     *
     * @param value The unit as SquareFeetPerSecond to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    public static FromSquareFeetPerSecond(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.SquareFeetPerSecond);
    }

    /**
     * Create a new KinematicViscosity instance from a Nanostokes
     *
     * @param value The unit as Nanostokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    public static FromNanostokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Nanostokes);
    }

    /**
     * Create a new KinematicViscosity instance from a Microstokes
     *
     * @param value The unit as Microstokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    public static FromMicrostokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Microstokes);
    }

    /**
     * Create a new KinematicViscosity instance from a Millistokes
     *
     * @param value The unit as Millistokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    public static FromMillistokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Millistokes);
    }

    /**
     * Create a new KinematicViscosity instance from a Centistokes
     *
     * @param value The unit as Centistokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    public static FromCentistokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Centistokes);
    }

    /**
     * Create a new KinematicViscosity instance from a Decistokes
     *
     * @param value The unit as Decistokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    public static FromDecistokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Decistokes);
    }

    /**
     * Create a new KinematicViscosity instance from a Kilostokes
     *
     * @param value The unit as Kilostokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    public static FromKilostokes(value: number): KinematicViscosity {
        return new KinematicViscosity(value, KinematicViscosityUnits.Kilostokes);
    }

    /**
     * Convert KinematicViscosity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: KinematicViscosityUnits): number {
        switch (toUnit) {
            case KinematicViscosityUnits.SquareMetersPerSecond: return this.SquareMetersPerSecond;
            case KinematicViscosityUnits.Stokes: return this.Stokes;
            case KinematicViscosityUnits.SquareFeetPerSecond: return this.SquareFeetPerSecond;
            case KinematicViscosityUnits.Nanostokes: return this.Nanostokes;
            case KinematicViscosityUnits.Microstokes: return this.Microstokes;
            case KinematicViscosityUnits.Millistokes: return this.Millistokes;
            case KinematicViscosityUnits.Centistokes: return this.Centistokes;
            case KinematicViscosityUnits.Decistokes: return this.Decistokes;
            case KinematicViscosityUnits.Kilostokes: return this.Kilostokes;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: KinematicViscosityUnits): number {
        switch (toUnit) {
                
            case KinematicViscosityUnits.SquareMetersPerSecond:
                return this.value;
            case KinematicViscosityUnits.Stokes:
                return this.value * 1e4;
            case KinematicViscosityUnits.SquareFeetPerSecond:
                return this.value * 10.7639;
            case KinematicViscosityUnits.Nanostokes:
                return (this.value * 1e4) / 1e-9;
            case KinematicViscosityUnits.Microstokes:
                return (this.value * 1e4) / 0.000001;
            case KinematicViscosityUnits.Millistokes:
                return (this.value * 1e4) / 0.001;
            case KinematicViscosityUnits.Centistokes:
                return (this.value * 1e4) / 0.01;
            case KinematicViscosityUnits.Decistokes:
                return (this.value * 1e4) / 0.1;
            case KinematicViscosityUnits.Kilostokes:
                return (this.value * 1e4) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: KinematicViscosityUnits): number {
        switch (fromUnit) {
                
            case KinematicViscosityUnits.SquareMetersPerSecond:
                return value;
            case KinematicViscosityUnits.Stokes:
                return value / 1e4;
            case KinematicViscosityUnits.SquareFeetPerSecond:
                return value / 10.7639;
            case KinematicViscosityUnits.Nanostokes:
                return (value / 1e4) * 1e-9;
            case KinematicViscosityUnits.Microstokes:
                return (value / 1e4) * 0.000001;
            case KinematicViscosityUnits.Millistokes:
                return (value / 1e4) * 0.001;
            case KinematicViscosityUnits.Centistokes:
                return (value / 1e4) * 0.01;
            case KinematicViscosityUnits.Decistokes:
                return (value / 1e4) * 0.1;
            case KinematicViscosityUnits.Kilostokes:
                return (value / 1e4) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the KinematicViscosity to string.
     * Note! the default format for KinematicViscosity is SquareMetersPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the KinematicViscosity.
     * @returns The string format of the KinematicViscosity.
     */
    public toString(unit: KinematicViscosityUnits = KinematicViscosityUnits.SquareMetersPerSecond): string {

        switch (unit) {
            
            case KinematicViscosityUnits.SquareMetersPerSecond:
                return this.SquareMetersPerSecond + ` m²/s`;
            case KinematicViscosityUnits.Stokes:
                return this.Stokes + ` St`;
            case KinematicViscosityUnits.SquareFeetPerSecond:
                return this.SquareFeetPerSecond + ` ft²/s`;
            case KinematicViscosityUnits.Nanostokes:
                return this.Nanostokes + ` nSt`;
            case KinematicViscosityUnits.Microstokes:
                return this.Microstokes + ` μSt`;
            case KinematicViscosityUnits.Millistokes:
                return this.Millistokes + ` mSt`;
            case KinematicViscosityUnits.Centistokes:
                return this.Centistokes + ` cSt`;
            case KinematicViscosityUnits.Decistokes:
                return this.Decistokes + ` dSt`;
            case KinematicViscosityUnits.Kilostokes:
                return this.Kilostokes + ` kSt`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get KinematicViscosity unit abbreviation.
     * Note! the default abbreviation for KinematicViscosity is SquareMetersPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the KinematicViscosity.
     * @returns The abbreviation string of KinematicViscosity.
     */
    public getUnitAbbreviation(unitAbbreviation: KinematicViscosityUnits = KinematicViscosityUnits.SquareMetersPerSecond): string {

        switch (unitAbbreviation) {
            
            case KinematicViscosityUnits.SquareMetersPerSecond:
                return `m²/s`;
            case KinematicViscosityUnits.Stokes:
                return `St`;
            case KinematicViscosityUnits.SquareFeetPerSecond:
                return `ft²/s`;
            case KinematicViscosityUnits.Nanostokes:
                return `nSt`;
            case KinematicViscosityUnits.Microstokes:
                return `μSt`;
            case KinematicViscosityUnits.Millistokes:
                return `mSt`;
            case KinematicViscosityUnits.Centistokes:
                return `cSt`;
            case KinematicViscosityUnits.Decistokes:
                return `dSt`;
            case KinematicViscosityUnits.Kilostokes:
                return `kSt`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given KinematicViscosity are equals to the current KinematicViscosity.
     * @param kinematicViscosity The other KinematicViscosity.
     * @returns True if the given KinematicViscosity are equal to the current KinematicViscosity.
     */
    public equals(kinematicViscosity: KinematicViscosity): boolean {
        return this.value === kinematicViscosity.BaseValue;
    }

    /**
     * Compare the given KinematicViscosity against the current KinematicViscosity.
     * @param kinematicViscosity The other KinematicViscosity.
     * @returns 0 if they are equal, -1 if the current KinematicViscosity is less then other, 1 if the current KinematicViscosity is greater then other.
     */
    public compareTo(kinematicViscosity: KinematicViscosity): number {

        if (this.value > kinematicViscosity.BaseValue)
            return 1;
        if (this.value < kinematicViscosity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given KinematicViscosity with the current KinematicViscosity.
     * @param kinematicViscosity The other KinematicViscosity.
     * @returns A new KinematicViscosity instance with the results.
     */
    public add(kinematicViscosity: KinematicViscosity): KinematicViscosity {
        return new KinematicViscosity(this.value + kinematicViscosity.BaseValue)
    }

    /**
     * Subtract the given KinematicViscosity with the current KinematicViscosity.
     * @param kinematicViscosity The other KinematicViscosity.
     * @returns A new KinematicViscosity instance with the results.
     */
    public subtract(kinematicViscosity: KinematicViscosity): KinematicViscosity {
        return new KinematicViscosity(this.value - kinematicViscosity.BaseValue)
    }

    /**
     * Multiply the given KinematicViscosity with the current KinematicViscosity.
     * @param kinematicViscosity The other KinematicViscosity.
     * @returns A new KinematicViscosity instance with the results.
     */
    public multiply(kinematicViscosity: KinematicViscosity): KinematicViscosity {
        return new KinematicViscosity(this.value * kinematicViscosity.BaseValue)
    }

    /**
     * Divide the given KinematicViscosity with the current KinematicViscosity.
     * @param kinematicViscosity The other KinematicViscosity.
     * @returns A new KinematicViscosity instance with the results.
     */
    public divide(kinematicViscosity: KinematicViscosity): KinematicViscosity {
        return new KinematicViscosity(this.value / kinematicViscosity.BaseValue)
    }

    /**
     * Modulo the given KinematicViscosity with the current KinematicViscosity.
     * @param kinematicViscosity The other KinematicViscosity.
     * @returns A new KinematicViscosity instance with the results.
     */
    public modulo(kinematicViscosity: KinematicViscosity): KinematicViscosity {
        return new KinematicViscosity(this.value % kinematicViscosity.BaseValue)
    }

    /**
     * Pow the given KinematicViscosity with the current KinematicViscosity.
     * @param kinematicViscosity The other KinematicViscosity.
     * @returns A new KinematicViscosity instance with the results.
     */
    public pow(kinematicViscosity: KinematicViscosity): KinematicViscosity {
        return new KinematicViscosity(this.value ** kinematicViscosity.BaseValue)
    }
}
