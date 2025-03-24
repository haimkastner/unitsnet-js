import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a Angle */
export interface AngleDto {
    /** The value of the Angle */
    value: number;
    /**  The specific unit that the Angle value is representing */
    unit: AngleUnits;
}

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
    protected value: number;
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
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Angle is Degrees.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): AngleUnits.Degrees {
        return AngleUnits.Degrees
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
     * Gets the base unit enumeration associated with Angle
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof AngleUnits {
        return AngleUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): AngleUnits.Degrees {
        return AngleUnits.Degrees;
    }

    /**
     * Create API DTO represent a Angle unit.
     * @param holdInUnit The specific Angle unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: AngleUnits = AngleUnits.Degrees): AngleDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Angle unit from an API DTO representation.
     * @param dtoAngle The Angle API DTO representation
     */
    public static FromDto(dtoAngle: AngleDto): Angle {
        return new Angle(dtoAngle.value, dtoAngle.unit);
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
        return Number.NaN;
    }

    private convertFromBase(toUnit: AngleUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case AngleUnits.Radians: {
                    const v3 = super.internalDivide(this.value, 180);
                    return super.internalMultiply(v3, Math.PI);
                }
                case AngleUnits.Degrees: return this.value;
                case AngleUnits.Arcminutes: return super.internalMultiply(this.value, 60);
                case AngleUnits.Arcseconds: return super.internalMultiply(this.value, 3600);
                case AngleUnits.Gradians: return super.internalDivide(this.value, 0.9);
                case AngleUnits.NatoMils: {
                    const v4 = super.internalDivide(160, 9);
                    return super.internalMultiply(this.value, v4);
                }
                case AngleUnits.Revolutions: return super.internalDivide(this.value, 360);
                case AngleUnits.Tilt: {
                    const v3 = super.internalDivide(this.value, 180);
                    return super.internalMultiply(v3, Math.PI);
                }
                case AngleUnits.Nanoradians: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    return super.internalDivide(v5, 1e-9);
                }
                case AngleUnits.Microradians: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    return super.internalDivide(v5, 0.000001);
                }
                case AngleUnits.Milliradians: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    return super.internalDivide(v5, 0.001);
                }
                case AngleUnits.Centiradians: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    return super.internalDivide(v5, 0.01);
                }
                case AngleUnits.Deciradians: {
                    const v3 = super.internalDivide(this.value, 180);
                    const v5 = super.internalMultiply(v3, Math.PI);
                    return super.internalDivide(v5, 0.1);
                }
                case AngleUnits.Nanodegrees: return super.internalDivide(this.value, 1e-9);
                case AngleUnits.Microdegrees: return super.internalDivide(this.value, 0.000001);
                case AngleUnits.Millidegrees: return super.internalDivide(this.value, 0.001);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case AngleUnits.Radians: return this.value / 180 * Math.PI;
            case AngleUnits.Degrees: return this.value;
            case AngleUnits.Arcminutes: return this.value * 60;
            case AngleUnits.Arcseconds: return this.value * 3600;
            case AngleUnits.Gradians: return this.value / 0.9;
            case AngleUnits.NatoMils: return this.value * 160 / 9;
            case AngleUnits.Revolutions: return this.value / 360;
            case AngleUnits.Tilt: return Math.sin(this.value / 180 * Math.PI);
            case AngleUnits.Nanoradians: return (this.value / 180 * Math.PI) / 1e-9;
            case AngleUnits.Microradians: return (this.value / 180 * Math.PI) / 0.000001;
            case AngleUnits.Milliradians: return (this.value / 180 * Math.PI) / 0.001;
            case AngleUnits.Centiradians: return (this.value / 180 * Math.PI) / 0.01;
            case AngleUnits.Deciradians: return (this.value / 180 * Math.PI) / 0.1;
            case AngleUnits.Nanodegrees: return (this.value) / 1e-9;
            case AngleUnits.Microdegrees: return (this.value) / 0.000001;
            case AngleUnits.Millidegrees: return (this.value) / 0.001;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: AngleUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case AngleUnits.Radians: {
                    const v4 = super.internalDivide(180, Math.PI);
                    return super.internalMultiply(value, v4);
                }
                case AngleUnits.Degrees: return value;
                case AngleUnits.Arcminutes: return super.internalDivide(value, 60);
                case AngleUnits.Arcseconds: return super.internalDivide(value, 3600);
                case AngleUnits.Gradians: return super.internalMultiply(value, 0.9);
                case AngleUnits.NatoMils: {
                    const v4 = super.internalDivide(9, 160);
                    return super.internalMultiply(value, v4);
                }
                case AngleUnits.Revolutions: return super.internalMultiply(value, 360);
                case AngleUnits.Tilt: {
                    const v4 = super.internalDivide(180, Math.PI);
                    return super.internalMultiply(value, v4);
                }
                case AngleUnits.Nanoradians: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1e-9);
                }
                case AngleUnits.Microradians: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 0.000001);
                }
                case AngleUnits.Milliradians: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 0.001);
                }
                case AngleUnits.Centiradians: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 0.01);
                }
                case AngleUnits.Deciradians: {
                    const v4 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 0.1);
                }
                case AngleUnits.Nanodegrees: return super.internalMultiply(value, 1e-9);
                case AngleUnits.Microdegrees: return super.internalMultiply(value, 0.000001);
                case AngleUnits.Millidegrees: return super.internalMultiply(value, 0.001);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case AngleUnits.Radians: return value * 180 / Math.PI;
            case AngleUnits.Degrees: return value;
            case AngleUnits.Arcminutes: return value / 60;
            case AngleUnits.Arcseconds: return value / 3600;
            case AngleUnits.Gradians: return value * 0.9;
            case AngleUnits.NatoMils: return value * 9 / 160;
            case AngleUnits.Revolutions: return value * 360;
            case AngleUnits.Tilt: return Math.asin(value) * 180 / Math.PI;
            case AngleUnits.Nanoradians: return (value * 180 / Math.PI) * 1e-9;
            case AngleUnits.Microradians: return (value * 180 / Math.PI) * 0.000001;
            case AngleUnits.Milliradians: return (value * 180 / Math.PI) * 0.001;
            case AngleUnits.Centiradians: return (value * 180 / Math.PI) * 0.01;
            case AngleUnits.Deciradians: return (value * 180 / Math.PI) * 0.1;
            case AngleUnits.Nanodegrees: return (value) * 1e-9;
            case AngleUnits.Microdegrees: return (value) * 0.000001;
            case AngleUnits.Millidegrees: return (value) * 0.001;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Angle to string.
     * Note! the default format for Angle is Degrees.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Angle.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the Angle.
     */
    public toString(unit: AngleUnits = AngleUnits.Degrees, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case AngleUnits.Radians:
                return super.truncateFractionDigits(this.Radians, options as ToStringOptions) + ` rad`;
            case AngleUnits.Degrees:
                return super.truncateFractionDigits(this.Degrees, options as ToStringOptions) + ` °`;
            case AngleUnits.Arcminutes:
                return super.truncateFractionDigits(this.Arcminutes, options as ToStringOptions) + ` '`;
            case AngleUnits.Arcseconds:
                return super.truncateFractionDigits(this.Arcseconds, options as ToStringOptions) + ` ″`;
            case AngleUnits.Gradians:
                return super.truncateFractionDigits(this.Gradians, options as ToStringOptions) + ` g`;
            case AngleUnits.NatoMils:
                return super.truncateFractionDigits(this.NatoMils, options as ToStringOptions) + ` mil`;
            case AngleUnits.Revolutions:
                return super.truncateFractionDigits(this.Revolutions, options as ToStringOptions) + ` r`;
            case AngleUnits.Tilt:
                return super.truncateFractionDigits(this.Tilt, options as ToStringOptions) + ` sin(θ)`;
            case AngleUnits.Nanoradians:
                return super.truncateFractionDigits(this.Nanoradians, options as ToStringOptions) + ` nrad`;
            case AngleUnits.Microradians:
                return super.truncateFractionDigits(this.Microradians, options as ToStringOptions) + ` μrad`;
            case AngleUnits.Milliradians:
                return super.truncateFractionDigits(this.Milliradians, options as ToStringOptions) + ` mrad`;
            case AngleUnits.Centiradians:
                return super.truncateFractionDigits(this.Centiradians, options as ToStringOptions) + ` crad`;
            case AngleUnits.Deciradians:
                return super.truncateFractionDigits(this.Deciradians, options as ToStringOptions) + ` drad`;
            case AngleUnits.Nanodegrees:
                return super.truncateFractionDigits(this.Nanodegrees, options as ToStringOptions) + ` n°`;
            case AngleUnits.Microdegrees:
                return super.truncateFractionDigits(this.Microdegrees, options as ToStringOptions) + ` μ°`;
            case AngleUnits.Millidegrees:
                return super.truncateFractionDigits(this.Millidegrees, options as ToStringOptions) + ` m°`;
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
