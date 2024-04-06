import { BaseUnit } from "../base-unit";

/** AngleUnits enumeration */
export enum AngleUnits {
    /** */
    Radians = "Radian",
    /** */
    Degrees = "Degree",
    /** */
    Arcminutes = "Arcminute",
    /** */
    Arcseconds = "Arcsecond",
    /** */
    Gradians = "Gradian",
    /** */
    NatoMils = "NatoMil",
    /** */
    Revolutions = "Revolution",
    /** */
    Tilt = "Tilt",
    /** */
    Nanoradians = "Nanoradian",
    /** */
    Microradians = "Microradian",
    /** */
    Milliradians = "Milliradian",
    /** */
    Centiradians = "Centiradian",
    /** */
    Deciradians = "Deciradian",
    /** */
    Nanodegrees = "Nanodegree",
    /** */
    Microdegrees = "Microdegree",
    /** */
    Millidegrees = "Millidegree"
}

/** In geometry, an angle is the figure formed by two rays, called the sides of the angle, sharing a common endpoint, called the vertex of the angle. */
export class Angle extends BaseUnit {
    private value: number;
    private radiansLazy: number | null = null;
    private degreesLazy: number | null = null;
    private arcminutesLazy: number | null = null;
    private arcsecondsLazy: number | null = null;
    private gradiansLazy: number | null = null;
    private natomilsLazy: number | null = null;
    private revolutionsLazy: number | null = null;
    private tiltLazy: number | null = null;
    private nanoradiansLazy: number | null = null;
    private microradiansLazy: number | null = null;
    private milliradiansLazy: number | null = null;
    private centiradiansLazy: number | null = null;
    private deciradiansLazy: number | null = null;
    private nanodegreesLazy: number | null = null;
    private microdegreesLazy: number | null = null;
    private millidegreesLazy: number | null = null;

    /**
     * Create a new Angle.
     * @param value The value.
     * @param fromUnit The ‘Angle’ unit to create from.
     * The default unit is Degrees
     */
    public constructor(value: number, fromUnit: AngleUnits = AngleUnits.Degrees) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Angle is Degrees.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Radians(): number {
        if(this.radiansLazy !== null){
            return this.radiansLazy;
        }
        return this.radiansLazy = this.convertFromBase(AngleUnits.Radians);
    }

    /** */
    public get Degrees(): number {
        if(this.degreesLazy !== null){
            return this.degreesLazy;
        }
        return this.degreesLazy = this.convertFromBase(AngleUnits.Degrees);
    }

    /** */
    public get Arcminutes(): number {
        if(this.arcminutesLazy !== null){
            return this.arcminutesLazy;
        }
        return this.arcminutesLazy = this.convertFromBase(AngleUnits.Arcminutes);
    }

    /** */
    public get Arcseconds(): number {
        if(this.arcsecondsLazy !== null){
            return this.arcsecondsLazy;
        }
        return this.arcsecondsLazy = this.convertFromBase(AngleUnits.Arcseconds);
    }

    /** */
    public get Gradians(): number {
        if(this.gradiansLazy !== null){
            return this.gradiansLazy;
        }
        return this.gradiansLazy = this.convertFromBase(AngleUnits.Gradians);
    }

    /** */
    public get NatoMils(): number {
        if(this.natomilsLazy !== null){
            return this.natomilsLazy;
        }
        return this.natomilsLazy = this.convertFromBase(AngleUnits.NatoMils);
    }

    /** */
    public get Revolutions(): number {
        if(this.revolutionsLazy !== null){
            return this.revolutionsLazy;
        }
        return this.revolutionsLazy = this.convertFromBase(AngleUnits.Revolutions);
    }

    /** */
    public get Tilt(): number {
        if(this.tiltLazy !== null){
            return this.tiltLazy;
        }
        return this.tiltLazy = this.convertFromBase(AngleUnits.Tilt);
    }

    /** */
    public get Nanoradians(): number {
        if(this.nanoradiansLazy !== null){
            return this.nanoradiansLazy;
        }
        return this.nanoradiansLazy = this.convertFromBase(AngleUnits.Nanoradians);
    }

    /** */
    public get Microradians(): number {
        if(this.microradiansLazy !== null){
            return this.microradiansLazy;
        }
        return this.microradiansLazy = this.convertFromBase(AngleUnits.Microradians);
    }

    /** */
    public get Milliradians(): number {
        if(this.milliradiansLazy !== null){
            return this.milliradiansLazy;
        }
        return this.milliradiansLazy = this.convertFromBase(AngleUnits.Milliradians);
    }

    /** */
    public get Centiradians(): number {
        if(this.centiradiansLazy !== null){
            return this.centiradiansLazy;
        }
        return this.centiradiansLazy = this.convertFromBase(AngleUnits.Centiradians);
    }

    /** */
    public get Deciradians(): number {
        if(this.deciradiansLazy !== null){
            return this.deciradiansLazy;
        }
        return this.deciradiansLazy = this.convertFromBase(AngleUnits.Deciradians);
    }

    /** */
    public get Nanodegrees(): number {
        if(this.nanodegreesLazy !== null){
            return this.nanodegreesLazy;
        }
        return this.nanodegreesLazy = this.convertFromBase(AngleUnits.Nanodegrees);
    }

    /** */
    public get Microdegrees(): number {
        if(this.microdegreesLazy !== null){
            return this.microdegreesLazy;
        }
        return this.microdegreesLazy = this.convertFromBase(AngleUnits.Microdegrees);
    }

    /** */
    public get Millidegrees(): number {
        if(this.millidegreesLazy !== null){
            return this.millidegreesLazy;
        }
        return this.millidegreesLazy = this.convertFromBase(AngleUnits.Millidegrees);
    }

    /**
     * Create a new Angle instance from a Radians
     *
     * @param value The unit as Radians to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromRadians(value: number): Angle {
        return new Angle(value, AngleUnits.Radians);
    }

    /**
     * Create a new Angle instance from a Degrees
     *
     * @param value The unit as Degrees to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromDegrees(value: number): Angle {
        return new Angle(value, AngleUnits.Degrees);
    }

    /**
     * Create a new Angle instance from a Arcminutes
     *
     * @param value The unit as Arcminutes to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromArcminutes(value: number): Angle {
        return new Angle(value, AngleUnits.Arcminutes);
    }

    /**
     * Create a new Angle instance from a Arcseconds
     *
     * @param value The unit as Arcseconds to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromArcseconds(value: number): Angle {
        return new Angle(value, AngleUnits.Arcseconds);
    }

    /**
     * Create a new Angle instance from a Gradians
     *
     * @param value The unit as Gradians to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromGradians(value: number): Angle {
        return new Angle(value, AngleUnits.Gradians);
    }

    /**
     * Create a new Angle instance from a NatoMils
     *
     * @param value The unit as NatoMils to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromNatoMils(value: number): Angle {
        return new Angle(value, AngleUnits.NatoMils);
    }

    /**
     * Create a new Angle instance from a Revolutions
     *
     * @param value The unit as Revolutions to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromRevolutions(value: number): Angle {
        return new Angle(value, AngleUnits.Revolutions);
    }

    /**
     * Create a new Angle instance from a Tilt
     *
     * @param value The unit as Tilt to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromTilt(value: number): Angle {
        return new Angle(value, AngleUnits.Tilt);
    }

    /**
     * Create a new Angle instance from a Nanoradians
     *
     * @param value The unit as Nanoradians to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromNanoradians(value: number): Angle {
        return new Angle(value, AngleUnits.Nanoradians);
    }

    /**
     * Create a new Angle instance from a Microradians
     *
     * @param value The unit as Microradians to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromMicroradians(value: number): Angle {
        return new Angle(value, AngleUnits.Microradians);
    }

    /**
     * Create a new Angle instance from a Milliradians
     *
     * @param value The unit as Milliradians to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromMilliradians(value: number): Angle {
        return new Angle(value, AngleUnits.Milliradians);
    }

    /**
     * Create a new Angle instance from a Centiradians
     *
     * @param value The unit as Centiradians to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromCentiradians(value: number): Angle {
        return new Angle(value, AngleUnits.Centiradians);
    }

    /**
     * Create a new Angle instance from a Deciradians
     *
     * @param value The unit as Deciradians to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromDeciradians(value: number): Angle {
        return new Angle(value, AngleUnits.Deciradians);
    }

    /**
     * Create a new Angle instance from a Nanodegrees
     *
     * @param value The unit as Nanodegrees to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromNanodegrees(value: number): Angle {
        return new Angle(value, AngleUnits.Nanodegrees);
    }

    /**
     * Create a new Angle instance from a Microdegrees
     *
     * @param value The unit as Microdegrees to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromMicrodegrees(value: number): Angle {
        return new Angle(value, AngleUnits.Microdegrees);
    }

    /**
     * Create a new Angle instance from a Millidegrees
     *
     * @param value The unit as Millidegrees to create a new Angle from.
     * @returns The new Angle instance.
     */
    public static FromMillidegrees(value: number): Angle {
        return new Angle(value, AngleUnits.Millidegrees);
    }

    /**
     * Convert Angle to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: AngleUnits): number {
        switch (toUnit) {
            case AngleUnits.Radians: return this.Radians;
            case AngleUnits.Degrees: return this.Degrees;
            case AngleUnits.Arcminutes: return this.Arcminutes;
            case AngleUnits.Arcseconds: return this.Arcseconds;
            case AngleUnits.Gradians: return this.Gradians;
            case AngleUnits.NatoMils: return this.NatoMils;
            case AngleUnits.Revolutions: return this.Revolutions;
            case AngleUnits.Tilt: return this.Tilt;
            case AngleUnits.Nanoradians: return this.Nanoradians;
            case AngleUnits.Microradians: return this.Microradians;
            case AngleUnits.Milliradians: return this.Milliradians;
            case AngleUnits.Centiradians: return this.Centiradians;
            case AngleUnits.Deciradians: return this.Deciradians;
            case AngleUnits.Nanodegrees: return this.Nanodegrees;
            case AngleUnits.Microdegrees: return this.Microdegrees;
            case AngleUnits.Millidegrees: return this.Millidegrees;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: AngleUnits): number {
        switch (toUnit) {
                
            case AngleUnits.Radians:
                return this.value / 180 * Math.PI;
            case AngleUnits.Degrees:
                return this.value;
            case AngleUnits.Arcminutes:
                return this.value * 60;
            case AngleUnits.Arcseconds:
                return this.value * 3600;
            case AngleUnits.Gradians:
                return this.value / 0.9;
            case AngleUnits.NatoMils:
                return this.value * 160 / 9;
            case AngleUnits.Revolutions:
                return this.value / 360;
            case AngleUnits.Tilt:
                return Math.sin(this.value / 180 * Math.PI);
            case AngleUnits.Nanoradians:
                return (this.value / 180 * Math.PI) / 1e-9;
            case AngleUnits.Microradians:
                return (this.value / 180 * Math.PI) / 0.000001;
            case AngleUnits.Milliradians:
                return (this.value / 180 * Math.PI) / 0.001;
            case AngleUnits.Centiradians:
                return (this.value / 180 * Math.PI) / 0.01;
            case AngleUnits.Deciradians:
                return (this.value / 180 * Math.PI) / 0.1;
            case AngleUnits.Nanodegrees:
                return (this.value) / 1e-9;
            case AngleUnits.Microdegrees:
                return (this.value) / 0.000001;
            case AngleUnits.Millidegrees:
                return (this.value) / 0.001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: AngleUnits): number {
        switch (fromUnit) {
                
            case AngleUnits.Radians:
                return value * 180 / Math.PI;
            case AngleUnits.Degrees:
                return value;
            case AngleUnits.Arcminutes:
                return value / 60;
            case AngleUnits.Arcseconds:
                return value / 3600;
            case AngleUnits.Gradians:
                return value * 0.9;
            case AngleUnits.NatoMils:
                return value * 9 / 160;
            case AngleUnits.Revolutions:
                return value * 360;
            case AngleUnits.Tilt:
                return Math.asin(value) * 180 / Math.PI;
            case AngleUnits.Nanoradians:
                return (value * 180 / Math.PI) * 1e-9;
            case AngleUnits.Microradians:
                return (value * 180 / Math.PI) * 0.000001;
            case AngleUnits.Milliradians:
                return (value * 180 / Math.PI) * 0.001;
            case AngleUnits.Centiradians:
                return (value * 180 / Math.PI) * 0.01;
            case AngleUnits.Deciradians:
                return (value * 180 / Math.PI) * 0.1;
            case AngleUnits.Nanodegrees:
                return (value) * 1e-9;
            case AngleUnits.Microdegrees:
                return (value) * 0.000001;
            case AngleUnits.Millidegrees:
                return (value) * 0.001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Angle to string.
     * Note! the default format for Angle is Degrees.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Angle.
     * @returns The string format of the Angle.
     */
    public toString(unit: AngleUnits = AngleUnits.Degrees): string {

        switch (unit) {
            
            case AngleUnits.Radians:
                return this.Radians + ` rad`;
            case AngleUnits.Degrees:
                return this.Degrees + ` °`;
            case AngleUnits.Arcminutes:
                return this.Arcminutes + ` '`;
            case AngleUnits.Arcseconds:
                return this.Arcseconds + ` ″`;
            case AngleUnits.Gradians:
                return this.Gradians + ` g`;
            case AngleUnits.NatoMils:
                return this.NatoMils + ` mil`;
            case AngleUnits.Revolutions:
                return this.Revolutions + ` r`;
            case AngleUnits.Tilt:
                return this.Tilt + ` sin(θ)`;
            case AngleUnits.Nanoradians:
                return this.Nanoradians + ` nrad`;
            case AngleUnits.Microradians:
                return this.Microradians + ` μrad`;
            case AngleUnits.Milliradians:
                return this.Milliradians + ` mrad`;
            case AngleUnits.Centiradians:
                return this.Centiradians + ` crad`;
            case AngleUnits.Deciradians:
                return this.Deciradians + ` drad`;
            case AngleUnits.Nanodegrees:
                return this.Nanodegrees + ` n°`;
            case AngleUnits.Microdegrees:
                return this.Microdegrees + ` μ°`;
            case AngleUnits.Millidegrees:
                return this.Millidegrees + ` m°`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Angle unit abbreviation.
     * Note! the default abbreviation for Angle is Degrees.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Angle.
     * @returns The abbreviation string of Angle.
     */
    public getUnitAbbreviation(unitAbbreviation: AngleUnits = AngleUnits.Degrees): string {

        switch (unitAbbreviation) {
            
            case AngleUnits.Radians:
                return `rad`;
            case AngleUnits.Degrees:
                return `°`;
            case AngleUnits.Arcminutes:
                return `'`;
            case AngleUnits.Arcseconds:
                return `″`;
            case AngleUnits.Gradians:
                return `g`;
            case AngleUnits.NatoMils:
                return `mil`;
            case AngleUnits.Revolutions:
                return `r`;
            case AngleUnits.Tilt:
                return `sin(θ)`;
            case AngleUnits.Nanoradians:
                return `nrad`;
            case AngleUnits.Microradians:
                return `μrad`;
            case AngleUnits.Milliradians:
                return `mrad`;
            case AngleUnits.Centiradians:
                return `crad`;
            case AngleUnits.Deciradians:
                return `drad`;
            case AngleUnits.Nanodegrees:
                return `n°`;
            case AngleUnits.Microdegrees:
                return `μ°`;
            case AngleUnits.Millidegrees:
                return `m°`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Angle are equals to the current Angle.
     * @param angle The other Angle.
     * @returns True if the given Angle are equal to the current Angle.
     */
    public equals(angle: Angle): boolean {
        return super.internalEquals(this.value, angle.BaseValue);
    }

    /**
     * Compare the given Angle against the current Angle.
     * @param angle The other Angle.
     * @returns 0 if they are equal, -1 if the current Angle is less then other, 1 if the current Angle is greater then other.
     */
    public compareTo(angle: Angle): number {
        return super.internalCompareTo(this.value, angle.BaseValue);
    }

    /**
     * Add the given Angle with the current Angle.
     * @param angle The other Angle.
     * @returns A new Angle instance with the results.
     */
    public add(angle: Angle): Angle {
        return new Angle(super.internalAdd(this.value, angle.BaseValue))
    }

    /**
     * Subtract the given Angle with the current Angle.
     * @param angle The other Angle.
     * @returns A new Angle instance with the results.
     */
    public subtract(angle: Angle): Angle {
        return new Angle(super.internalSubtract(this.value, angle.BaseValue))
    }

    /**
     * Multiply the given Angle with the current Angle.
     * @param angle The other Angle.
     * @returns A new Angle instance with the results.
     */
    public multiply(angle: Angle): Angle {
        return new Angle(super.internalMultiply(this.value, angle.BaseValue))
    }

    /**
     * Divide the given Angle with the current Angle.
     * @param angle The other Angle.
     * @returns A new Angle instance with the results.
     */
    public divide(angle: Angle): Angle {
        return new Angle(super.internalDivide(this.value, angle.BaseValue))
    }

    /**
     * Modulo the given Angle with the current Angle.
     * @param angle The other Angle.
     * @returns A new Angle instance with the results.
     */
    public modulo(angle: Angle): Angle {
        return new Angle(super.internalModulo(this.value, angle.BaseValue))
    }

    /**
     * Pow the given Angle with the current Angle.
     * @param angle The other Angle.
     * @returns A new Angle instance with the results.
     */
    public pow(angle: Angle): Angle {
        return new Angle(super.internalPow(this.value, angle.BaseValue))
    }
}
