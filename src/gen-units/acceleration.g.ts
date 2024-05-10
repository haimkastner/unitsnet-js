import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Acceleration */
export interface AccelerationDto {
    /** The value of the Acceleration */
    value: number;
    /**  The specific unit that the Acceleration value is representing */
    unit: AccelerationUnits;
}

/** AccelerationUnits enumeration */
export enum AccelerationUnits {
    /** */
    MetersPerSecondSquared = "MeterPerSecondSquared",
    /** */
    InchesPerSecondSquared = "InchPerSecondSquared",
    /** */
    FeetPerSecondSquared = "FootPerSecondSquared",
    /** */
    KnotsPerSecond = "KnotPerSecond",
    /** */
    KnotsPerMinute = "KnotPerMinute",
    /** */
    KnotsPerHour = "KnotPerHour",
    /** */
    StandardGravity = "StandardGravity",
    /** */
    NanometersPerSecondSquared = "NanometerPerSecondSquared",
    /** */
    MicrometersPerSecondSquared = "MicrometerPerSecondSquared",
    /** */
    MillimetersPerSecondSquared = "MillimeterPerSecondSquared",
    /** */
    CentimetersPerSecondSquared = "CentimeterPerSecondSquared",
    /** */
    DecimetersPerSecondSquared = "DecimeterPerSecondSquared",
    /** */
    KilometersPerSecondSquared = "KilometerPerSecondSquared",
    /** */
    MillistandardGravity = "MillistandardGravity"
}

/** Acceleration, in physics, is the rate at which the velocity of an object changes over time. An object's acceleration is the net result of any and all forces acting on the object, as described by Newton's Second Law. The SI unit for acceleration is the Meter per second squared (m/s²). Accelerations are vector quantities (they have magnitude and direction) and add according to the parallelogram law. As a vector, the calculated net force is equal to the product of the object's mass (a scalar quantity) and the acceleration. */
export class Acceleration extends BaseUnit {
    protected value: number;
    private meterspersecondsquaredLazy: number | null = null;
    private inchespersecondsquaredLazy: number | null = null;
    private feetpersecondsquaredLazy: number | null = null;
    private knotspersecondLazy: number | null = null;
    private knotsperminuteLazy: number | null = null;
    private knotsperhourLazy: number | null = null;
    private standardgravityLazy: number | null = null;
    private nanometerspersecondsquaredLazy: number | null = null;
    private micrometerspersecondsquaredLazy: number | null = null;
    private millimeterspersecondsquaredLazy: number | null = null;
    private centimeterspersecondsquaredLazy: number | null = null;
    private decimeterspersecondsquaredLazy: number | null = null;
    private kilometerspersecondsquaredLazy: number | null = null;
    private millistandardgravityLazy: number | null = null;

    /**
     * Create a new Acceleration.
     * @param value The value.
     * @param fromUnit The ‘Acceleration’ unit to create from.
     * The default unit is MetersPerSecondSquared
     */
    public constructor(value: number, fromUnit: AccelerationUnits = AccelerationUnits.MetersPerSecondSquared) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Acceleration is MetersPerSecondSquared.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get MetersPerSecondSquared(): number {
        if(this.meterspersecondsquaredLazy !== null){
            return this.meterspersecondsquaredLazy;
        }
        return this.meterspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.MetersPerSecondSquared);
    }

    /** */
    public get InchesPerSecondSquared(): number {
        if(this.inchespersecondsquaredLazy !== null){
            return this.inchespersecondsquaredLazy;
        }
        return this.inchespersecondsquaredLazy = this.convertFromBase(AccelerationUnits.InchesPerSecondSquared);
    }

    /** */
    public get FeetPerSecondSquared(): number {
        if(this.feetpersecondsquaredLazy !== null){
            return this.feetpersecondsquaredLazy;
        }
        return this.feetpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.FeetPerSecondSquared);
    }

    /** */
    public get KnotsPerSecond(): number {
        if(this.knotspersecondLazy !== null){
            return this.knotspersecondLazy;
        }
        return this.knotspersecondLazy = this.convertFromBase(AccelerationUnits.KnotsPerSecond);
    }

    /** */
    public get KnotsPerMinute(): number {
        if(this.knotsperminuteLazy !== null){
            return this.knotsperminuteLazy;
        }
        return this.knotsperminuteLazy = this.convertFromBase(AccelerationUnits.KnotsPerMinute);
    }

    /** */
    public get KnotsPerHour(): number {
        if(this.knotsperhourLazy !== null){
            return this.knotsperhourLazy;
        }
        return this.knotsperhourLazy = this.convertFromBase(AccelerationUnits.KnotsPerHour);
    }

    /** */
    public get StandardGravity(): number {
        if(this.standardgravityLazy !== null){
            return this.standardgravityLazy;
        }
        return this.standardgravityLazy = this.convertFromBase(AccelerationUnits.StandardGravity);
    }

    /** */
    public get NanometersPerSecondSquared(): number {
        if(this.nanometerspersecondsquaredLazy !== null){
            return this.nanometerspersecondsquaredLazy;
        }
        return this.nanometerspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.NanometersPerSecondSquared);
    }

    /** */
    public get MicrometersPerSecondSquared(): number {
        if(this.micrometerspersecondsquaredLazy !== null){
            return this.micrometerspersecondsquaredLazy;
        }
        return this.micrometerspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.MicrometersPerSecondSquared);
    }

    /** */
    public get MillimetersPerSecondSquared(): number {
        if(this.millimeterspersecondsquaredLazy !== null){
            return this.millimeterspersecondsquaredLazy;
        }
        return this.millimeterspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.MillimetersPerSecondSquared);
    }

    /** */
    public get CentimetersPerSecondSquared(): number {
        if(this.centimeterspersecondsquaredLazy !== null){
            return this.centimeterspersecondsquaredLazy;
        }
        return this.centimeterspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.CentimetersPerSecondSquared);
    }

    /** */
    public get DecimetersPerSecondSquared(): number {
        if(this.decimeterspersecondsquaredLazy !== null){
            return this.decimeterspersecondsquaredLazy;
        }
        return this.decimeterspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.DecimetersPerSecondSquared);
    }

    /** */
    public get KilometersPerSecondSquared(): number {
        if(this.kilometerspersecondsquaredLazy !== null){
            return this.kilometerspersecondsquaredLazy;
        }
        return this.kilometerspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.KilometersPerSecondSquared);
    }

    /** */
    public get MillistandardGravity(): number {
        if(this.millistandardgravityLazy !== null){
            return this.millistandardgravityLazy;
        }
        return this.millistandardgravityLazy = this.convertFromBase(AccelerationUnits.MillistandardGravity);
    }

    /**
     * Create a new Acceleration instance from a MetersPerSecondSquared
     *
     * @param value The unit as MetersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromMetersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.MetersPerSecondSquared);
    }

    /**
     * Create a new Acceleration instance from a InchesPerSecondSquared
     *
     * @param value The unit as InchesPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromInchesPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.InchesPerSecondSquared);
    }

    /**
     * Create a new Acceleration instance from a FeetPerSecondSquared
     *
     * @param value The unit as FeetPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromFeetPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.FeetPerSecondSquared);
    }

    /**
     * Create a new Acceleration instance from a KnotsPerSecond
     *
     * @param value The unit as KnotsPerSecond to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromKnotsPerSecond(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.KnotsPerSecond);
    }

    /**
     * Create a new Acceleration instance from a KnotsPerMinute
     *
     * @param value The unit as KnotsPerMinute to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromKnotsPerMinute(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.KnotsPerMinute);
    }

    /**
     * Create a new Acceleration instance from a KnotsPerHour
     *
     * @param value The unit as KnotsPerHour to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromKnotsPerHour(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.KnotsPerHour);
    }

    /**
     * Create a new Acceleration instance from a StandardGravity
     *
     * @param value The unit as StandardGravity to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromStandardGravity(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.StandardGravity);
    }

    /**
     * Create a new Acceleration instance from a NanometersPerSecondSquared
     *
     * @param value The unit as NanometersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromNanometersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.NanometersPerSecondSquared);
    }

    /**
     * Create a new Acceleration instance from a MicrometersPerSecondSquared
     *
     * @param value The unit as MicrometersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromMicrometersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.MicrometersPerSecondSquared);
    }

    /**
     * Create a new Acceleration instance from a MillimetersPerSecondSquared
     *
     * @param value The unit as MillimetersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromMillimetersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.MillimetersPerSecondSquared);
    }

    /**
     * Create a new Acceleration instance from a CentimetersPerSecondSquared
     *
     * @param value The unit as CentimetersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromCentimetersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.CentimetersPerSecondSquared);
    }

    /**
     * Create a new Acceleration instance from a DecimetersPerSecondSquared
     *
     * @param value The unit as DecimetersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromDecimetersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.DecimetersPerSecondSquared);
    }

    /**
     * Create a new Acceleration instance from a KilometersPerSecondSquared
     *
     * @param value The unit as KilometersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromKilometersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.KilometersPerSecondSquared);
    }

    /**
     * Create a new Acceleration instance from a MillistandardGravity
     *
     * @param value The unit as MillistandardGravity to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    public static FromMillistandardGravity(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.MillistandardGravity);
    }

    /**
     * Gets the base unit enumeration associated with Acceleration
     * @returns The unit enumeration that can be used to interact with this type
     */
    public static getUnitEnum(): typeof AccelerationUnits {
        return AccelerationUnits;
    }

    /**
     * Create API DTO represent a Acceleration unit.
     * @param holdInUnit The specific Acceleration unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: AccelerationUnits = AccelerationUnits.MetersPerSecondSquared): AccelerationDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Acceleration unit from an API DTO representation.
     * @param dtoAcceleration The Acceleration API DTO representation
     */
    public static FromDto(dtoAcceleration: AccelerationDto): Acceleration {
        return new Acceleration(dtoAcceleration.value, dtoAcceleration.unit);
    }

    /**
     * Convert Acceleration to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: AccelerationUnits): number {
        switch (toUnit) {
            case AccelerationUnits.MetersPerSecondSquared: return this.MetersPerSecondSquared;
            case AccelerationUnits.InchesPerSecondSquared: return this.InchesPerSecondSquared;
            case AccelerationUnits.FeetPerSecondSquared: return this.FeetPerSecondSquared;
            case AccelerationUnits.KnotsPerSecond: return this.KnotsPerSecond;
            case AccelerationUnits.KnotsPerMinute: return this.KnotsPerMinute;
            case AccelerationUnits.KnotsPerHour: return this.KnotsPerHour;
            case AccelerationUnits.StandardGravity: return this.StandardGravity;
            case AccelerationUnits.NanometersPerSecondSquared: return this.NanometersPerSecondSquared;
            case AccelerationUnits.MicrometersPerSecondSquared: return this.MicrometersPerSecondSquared;
            case AccelerationUnits.MillimetersPerSecondSquared: return this.MillimetersPerSecondSquared;
            case AccelerationUnits.CentimetersPerSecondSquared: return this.CentimetersPerSecondSquared;
            case AccelerationUnits.DecimetersPerSecondSquared: return this.DecimetersPerSecondSquared;
            case AccelerationUnits.KilometersPerSecondSquared: return this.KilometersPerSecondSquared;
            case AccelerationUnits.MillistandardGravity: return this.MillistandardGravity;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: AccelerationUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case AccelerationUnits.MetersPerSecondSquared: return this.value;
                case AccelerationUnits.InchesPerSecondSquared: return super.internalDivide(this.value, 0.0254);
                case AccelerationUnits.FeetPerSecondSquared: return super.internalDivide(this.value, 0.304800);
                case AccelerationUnits.KnotsPerSecond: return super.internalDivide(this.value, 0.5144444444444);
                case AccelerationUnits.KnotsPerMinute: {
                    const v3 = super.internalDivide(this.value, 0.5144444444444);
                    return super.internalMultiply(v3, 60);
                }
                case AccelerationUnits.KnotsPerHour: {
                    const v3 = super.internalDivide(this.value, 0.5144444444444);
                    return super.internalMultiply(v3, 3600);
                }
                case AccelerationUnits.StandardGravity: return super.internalDivide(this.value, 9.80665);
                case AccelerationUnits.NanometersPerSecondSquared: return super.internalDivide(this.value, 1e-9);
                case AccelerationUnits.MicrometersPerSecondSquared: return super.internalDivide(this.value, 0.000001);
                case AccelerationUnits.MillimetersPerSecondSquared: return super.internalDivide(this.value, 0.001);
                case AccelerationUnits.CentimetersPerSecondSquared: return super.internalDivide(this.value, 0.01);
                case AccelerationUnits.DecimetersPerSecondSquared: return super.internalDivide(this.value, 0.1);
                case AccelerationUnits.KilometersPerSecondSquared: return super.internalDivide(this.value, 1000);
                case AccelerationUnits.MillistandardGravity: {
                    const v3 = super.internalDivide(this.value, 9.80665);
                    return super.internalDivide(v3, 0.001);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case AccelerationUnits.MetersPerSecondSquared: return this.value;
            case AccelerationUnits.InchesPerSecondSquared: return this.value / 0.0254;
            case AccelerationUnits.FeetPerSecondSquared: return this.value / 0.304800;
            case AccelerationUnits.KnotsPerSecond: return this.value / 0.5144444444444;
            case AccelerationUnits.KnotsPerMinute: return this.value / 0.5144444444444 * 60;
            case AccelerationUnits.KnotsPerHour: return this.value / 0.5144444444444 * 3600;
            case AccelerationUnits.StandardGravity: return this.value / 9.80665;
            case AccelerationUnits.NanometersPerSecondSquared: return (this.value) / 1e-9;
            case AccelerationUnits.MicrometersPerSecondSquared: return (this.value) / 0.000001;
            case AccelerationUnits.MillimetersPerSecondSquared: return (this.value) / 0.001;
            case AccelerationUnits.CentimetersPerSecondSquared: return (this.value) / 0.01;
            case AccelerationUnits.DecimetersPerSecondSquared: return (this.value) / 0.1;
            case AccelerationUnits.KilometersPerSecondSquared: return (this.value) / 1000;
            case AccelerationUnits.MillistandardGravity: return (this.value / 9.80665) / 0.001;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: AccelerationUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case AccelerationUnits.MetersPerSecondSquared: return value;
                case AccelerationUnits.InchesPerSecondSquared: return super.internalMultiply(value, 0.0254);
                case AccelerationUnits.FeetPerSecondSquared: return super.internalMultiply(value, 0.304800);
                case AccelerationUnits.KnotsPerSecond: return super.internalMultiply(value, 0.5144444444444);
                case AccelerationUnits.KnotsPerMinute: {
                    const v4 = super.internalDivide(0.5144444444444, 60);
                    return super.internalMultiply(value, v4);
                }
                case AccelerationUnits.KnotsPerHour: {
                    const v4 = super.internalDivide(0.5144444444444, 3600);
                    return super.internalMultiply(value, v4);
                }
                case AccelerationUnits.StandardGravity: return super.internalMultiply(value, 9.80665);
                case AccelerationUnits.NanometersPerSecondSquared: return super.internalMultiply(value, 1e-9);
                case AccelerationUnits.MicrometersPerSecondSquared: return super.internalMultiply(value, 0.000001);
                case AccelerationUnits.MillimetersPerSecondSquared: return super.internalMultiply(value, 0.001);
                case AccelerationUnits.CentimetersPerSecondSquared: return super.internalMultiply(value, 0.01);
                case AccelerationUnits.DecimetersPerSecondSquared: return super.internalMultiply(value, 0.1);
                case AccelerationUnits.KilometersPerSecondSquared: return super.internalMultiply(value, 1000);
                case AccelerationUnits.MillistandardGravity: {
                    const v3 = super.internalMultiply(value, 9.80665);
                    return super.internalMultiply(v3, 0.001);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case AccelerationUnits.MetersPerSecondSquared: return value;
            case AccelerationUnits.InchesPerSecondSquared: return value * 0.0254;
            case AccelerationUnits.FeetPerSecondSquared: return value * 0.304800;
            case AccelerationUnits.KnotsPerSecond: return value * 0.5144444444444;
            case AccelerationUnits.KnotsPerMinute: return value * 0.5144444444444 / 60;
            case AccelerationUnits.KnotsPerHour: return value * 0.5144444444444 / 3600;
            case AccelerationUnits.StandardGravity: return value * 9.80665;
            case AccelerationUnits.NanometersPerSecondSquared: return (value) * 1e-9;
            case AccelerationUnits.MicrometersPerSecondSquared: return (value) * 0.000001;
            case AccelerationUnits.MillimetersPerSecondSquared: return (value) * 0.001;
            case AccelerationUnits.CentimetersPerSecondSquared: return (value) * 0.01;
            case AccelerationUnits.DecimetersPerSecondSquared: return (value) * 0.1;
            case AccelerationUnits.KilometersPerSecondSquared: return (value) * 1000;
            case AccelerationUnits.MillistandardGravity: return (value * 9.80665) * 0.001;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Acceleration to string.
     * Note! the default format for Acceleration is MetersPerSecondSquared.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Acceleration.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Acceleration.
     */
    public toString(unit: AccelerationUnits = AccelerationUnits.MetersPerSecondSquared, fractionalDigits?: number): string {

        switch (unit) {
            
            case AccelerationUnits.MetersPerSecondSquared:
                return super.truncateFractionDigits(this.MetersPerSecondSquared, fractionalDigits) + ` m/s²`;
            case AccelerationUnits.InchesPerSecondSquared:
                return super.truncateFractionDigits(this.InchesPerSecondSquared, fractionalDigits) + ` in/s²`;
            case AccelerationUnits.FeetPerSecondSquared:
                return super.truncateFractionDigits(this.FeetPerSecondSquared, fractionalDigits) + ` ft/s²`;
            case AccelerationUnits.KnotsPerSecond:
                return super.truncateFractionDigits(this.KnotsPerSecond, fractionalDigits) + ` kn/s`;
            case AccelerationUnits.KnotsPerMinute:
                return super.truncateFractionDigits(this.KnotsPerMinute, fractionalDigits) + ` kn/min`;
            case AccelerationUnits.KnotsPerHour:
                return super.truncateFractionDigits(this.KnotsPerHour, fractionalDigits) + ` kn/h`;
            case AccelerationUnits.StandardGravity:
                return super.truncateFractionDigits(this.StandardGravity, fractionalDigits) + ` g`;
            case AccelerationUnits.NanometersPerSecondSquared:
                return super.truncateFractionDigits(this.NanometersPerSecondSquared, fractionalDigits) + ` nm/s²`;
            case AccelerationUnits.MicrometersPerSecondSquared:
                return super.truncateFractionDigits(this.MicrometersPerSecondSquared, fractionalDigits) + ` μm/s²`;
            case AccelerationUnits.MillimetersPerSecondSquared:
                return super.truncateFractionDigits(this.MillimetersPerSecondSquared, fractionalDigits) + ` mm/s²`;
            case AccelerationUnits.CentimetersPerSecondSquared:
                return super.truncateFractionDigits(this.CentimetersPerSecondSquared, fractionalDigits) + ` cm/s²`;
            case AccelerationUnits.DecimetersPerSecondSquared:
                return super.truncateFractionDigits(this.DecimetersPerSecondSquared, fractionalDigits) + ` dm/s²`;
            case AccelerationUnits.KilometersPerSecondSquared:
                return super.truncateFractionDigits(this.KilometersPerSecondSquared, fractionalDigits) + ` km/s²`;
            case AccelerationUnits.MillistandardGravity:
                return super.truncateFractionDigits(this.MillistandardGravity, fractionalDigits) + ` mg`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Acceleration unit abbreviation.
     * Note! the default abbreviation for Acceleration is MetersPerSecondSquared.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Acceleration.
     * @returns The abbreviation string of Acceleration.
     */
    public getUnitAbbreviation(unitAbbreviation: AccelerationUnits = AccelerationUnits.MetersPerSecondSquared): string {

        switch (unitAbbreviation) {
            
            case AccelerationUnits.MetersPerSecondSquared:
                return `m/s²`;
            case AccelerationUnits.InchesPerSecondSquared:
                return `in/s²`;
            case AccelerationUnits.FeetPerSecondSquared:
                return `ft/s²`;
            case AccelerationUnits.KnotsPerSecond:
                return `kn/s`;
            case AccelerationUnits.KnotsPerMinute:
                return `kn/min`;
            case AccelerationUnits.KnotsPerHour:
                return `kn/h`;
            case AccelerationUnits.StandardGravity:
                return `g`;
            case AccelerationUnits.NanometersPerSecondSquared:
                return `nm/s²`;
            case AccelerationUnits.MicrometersPerSecondSquared:
                return `μm/s²`;
            case AccelerationUnits.MillimetersPerSecondSquared:
                return `mm/s²`;
            case AccelerationUnits.CentimetersPerSecondSquared:
                return `cm/s²`;
            case AccelerationUnits.DecimetersPerSecondSquared:
                return `dm/s²`;
            case AccelerationUnits.KilometersPerSecondSquared:
                return `km/s²`;
            case AccelerationUnits.MillistandardGravity:
                return `mg`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Acceleration are equals to the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns True if the given Acceleration are equal to the current Acceleration.
     */
    public equals(acceleration: Acceleration): boolean {
        return super.internalEquals(this.value, acceleration.BaseValue);
    }

    /**
     * Compare the given Acceleration against the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns 0 if they are equal, -1 if the current Acceleration is less then other, 1 if the current Acceleration is greater then other.
     */
    public compareTo(acceleration: Acceleration): number {
        return super.internalCompareTo(this.value, acceleration.BaseValue);
    }

    /**
     * Add the given Acceleration with the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns A new Acceleration instance with the results.
     */
    public add(acceleration: Acceleration): Acceleration {
        return new Acceleration(super.internalAdd(this.value, acceleration.BaseValue))
    }

    /**
     * Subtract the given Acceleration with the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns A new Acceleration instance with the results.
     */
    public subtract(acceleration: Acceleration): Acceleration {
        return new Acceleration(super.internalSubtract(this.value, acceleration.BaseValue))
    }

    /**
     * Multiply the given Acceleration with the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns A new Acceleration instance with the results.
     */
    public multiply(acceleration: Acceleration): Acceleration {
        return new Acceleration(super.internalMultiply(this.value, acceleration.BaseValue))
    }

    /**
     * Divide the given Acceleration with the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns A new Acceleration instance with the results.
     */
    public divide(acceleration: Acceleration): Acceleration {
        return new Acceleration(super.internalDivide(this.value, acceleration.BaseValue))
    }

    /**
     * Modulo the given Acceleration with the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns A new Acceleration instance with the results.
     */
    public modulo(acceleration: Acceleration): Acceleration {
        return new Acceleration(super.internalModulo(this.value, acceleration.BaseValue))
    }

    /**
     * Pow the given Acceleration with the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns A new Acceleration instance with the results.
     */
    public pow(acceleration: Acceleration): Acceleration {
        return new Acceleration(super.internalPow(this.value, acceleration.BaseValue))
    }
}
