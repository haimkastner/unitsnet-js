import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a RotationalSpeed */
export interface RotationalSpeedDto {
    /** The value of the RotationalSpeed */
    value: number;
    /**  The specific unit that the RotationalSpeed value is representing */
    unit: RotationalSpeedUnits;
}

/** RotationalSpeedUnits enumeration */
export enum RotationalSpeedUnits {
    /** */
    RadiansPerSecond = "RadianPerSecond",
    /** */
    DegreesPerSecond = "DegreePerSecond",
    /** */
    DegreesPerMinute = "DegreePerMinute",
    /** */
    RevolutionsPerSecond = "RevolutionPerSecond",
    /** */
    RevolutionsPerMinute = "RevolutionPerMinute",
    /** */
    NanoradiansPerSecond = "NanoradianPerSecond",
    /** */
    MicroradiansPerSecond = "MicroradianPerSecond",
    /** */
    MilliradiansPerSecond = "MilliradianPerSecond",
    /** */
    CentiradiansPerSecond = "CentiradianPerSecond",
    /** */
    DeciradiansPerSecond = "DeciradianPerSecond",
    /** */
    NanodegreesPerSecond = "NanodegreePerSecond",
    /** */
    MicrodegreesPerSecond = "MicrodegreePerSecond",
    /** */
    MillidegreesPerSecond = "MillidegreePerSecond"
}

/** Rotational speed (sometimes called speed of revolution) is the number of complete rotations, revolutions, cycles, or turns per time unit. Rotational speed is a cyclic frequency, measured in radians per second or in hertz in the SI System by scientists, or in revolutions per minute (rpm or min-1) or revolutions per second in everyday life. The symbol for rotational speed is ω (the Greek lowercase letter "omega"). */
export class RotationalSpeed extends BaseUnit {
    protected value: number;
    private radianspersecondLazy: number | null = null;
    private degreespersecondLazy: number | null = null;
    private degreesperminuteLazy: number | null = null;
    private revolutionspersecondLazy: number | null = null;
    private revolutionsperminuteLazy: number | null = null;
    private nanoradianspersecondLazy: number | null = null;
    private microradianspersecondLazy: number | null = null;
    private milliradianspersecondLazy: number | null = null;
    private centiradianspersecondLazy: number | null = null;
    private deciradianspersecondLazy: number | null = null;
    private nanodegreespersecondLazy: number | null = null;
    private microdegreespersecondLazy: number | null = null;
    private millidegreespersecondLazy: number | null = null;

    /**
     * Create a new RotationalSpeed.
     * @param value The value.
     * @param fromUnit The ‘RotationalSpeed’ unit to create from.
     * The default unit is RadiansPerSecond
     */
    public constructor(value: number, fromUnit: RotationalSpeedUnits = RotationalSpeedUnits.RadiansPerSecond) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RotationalSpeed is RadiansPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get getBaseUnit(): RotationalSpeedUnits.RadiansPerSecond {
        return RotationalSpeedUnits.RadiansPerSecond
    }

    /** */
    public get RadiansPerSecond(): number {
        if(this.radianspersecondLazy !== null){
            return this.radianspersecondLazy;
        }
        return this.radianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.RadiansPerSecond);
    }

    /** */
    public get DegreesPerSecond(): number {
        if(this.degreespersecondLazy !== null){
            return this.degreespersecondLazy;
        }
        return this.degreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.DegreesPerSecond);
    }

    /** */
    public get DegreesPerMinute(): number {
        if(this.degreesperminuteLazy !== null){
            return this.degreesperminuteLazy;
        }
        return this.degreesperminuteLazy = this.convertFromBase(RotationalSpeedUnits.DegreesPerMinute);
    }

    /** */
    public get RevolutionsPerSecond(): number {
        if(this.revolutionspersecondLazy !== null){
            return this.revolutionspersecondLazy;
        }
        return this.revolutionspersecondLazy = this.convertFromBase(RotationalSpeedUnits.RevolutionsPerSecond);
    }

    /** */
    public get RevolutionsPerMinute(): number {
        if(this.revolutionsperminuteLazy !== null){
            return this.revolutionsperminuteLazy;
        }
        return this.revolutionsperminuteLazy = this.convertFromBase(RotationalSpeedUnits.RevolutionsPerMinute);
    }

    /** */
    public get NanoradiansPerSecond(): number {
        if(this.nanoradianspersecondLazy !== null){
            return this.nanoradianspersecondLazy;
        }
        return this.nanoradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.NanoradiansPerSecond);
    }

    /** */
    public get MicroradiansPerSecond(): number {
        if(this.microradianspersecondLazy !== null){
            return this.microradianspersecondLazy;
        }
        return this.microradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.MicroradiansPerSecond);
    }

    /** */
    public get MilliradiansPerSecond(): number {
        if(this.milliradianspersecondLazy !== null){
            return this.milliradianspersecondLazy;
        }
        return this.milliradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.MilliradiansPerSecond);
    }

    /** */
    public get CentiradiansPerSecond(): number {
        if(this.centiradianspersecondLazy !== null){
            return this.centiradianspersecondLazy;
        }
        return this.centiradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.CentiradiansPerSecond);
    }

    /** */
    public get DeciradiansPerSecond(): number {
        if(this.deciradianspersecondLazy !== null){
            return this.deciradianspersecondLazy;
        }
        return this.deciradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.DeciradiansPerSecond);
    }

    /** */
    public get NanodegreesPerSecond(): number {
        if(this.nanodegreespersecondLazy !== null){
            return this.nanodegreespersecondLazy;
        }
        return this.nanodegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.NanodegreesPerSecond);
    }

    /** */
    public get MicrodegreesPerSecond(): number {
        if(this.microdegreespersecondLazy !== null){
            return this.microdegreespersecondLazy;
        }
        return this.microdegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.MicrodegreesPerSecond);
    }

    /** */
    public get MillidegreesPerSecond(): number {
        if(this.millidegreespersecondLazy !== null){
            return this.millidegreespersecondLazy;
        }
        return this.millidegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.MillidegreesPerSecond);
    }

    /**
     * Create a new RotationalSpeed instance from a RadiansPerSecond
     *
     * @param value The unit as RadiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromRadiansPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.RadiansPerSecond);
    }

    /**
     * Create a new RotationalSpeed instance from a DegreesPerSecond
     *
     * @param value The unit as DegreesPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromDegreesPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.DegreesPerSecond);
    }

    /**
     * Create a new RotationalSpeed instance from a DegreesPerMinute
     *
     * @param value The unit as DegreesPerMinute to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromDegreesPerMinute(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.DegreesPerMinute);
    }

    /**
     * Create a new RotationalSpeed instance from a RevolutionsPerSecond
     *
     * @param value The unit as RevolutionsPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromRevolutionsPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.RevolutionsPerSecond);
    }

    /**
     * Create a new RotationalSpeed instance from a RevolutionsPerMinute
     *
     * @param value The unit as RevolutionsPerMinute to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromRevolutionsPerMinute(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.RevolutionsPerMinute);
    }

    /**
     * Create a new RotationalSpeed instance from a NanoradiansPerSecond
     *
     * @param value The unit as NanoradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromNanoradiansPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.NanoradiansPerSecond);
    }

    /**
     * Create a new RotationalSpeed instance from a MicroradiansPerSecond
     *
     * @param value The unit as MicroradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromMicroradiansPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.MicroradiansPerSecond);
    }

    /**
     * Create a new RotationalSpeed instance from a MilliradiansPerSecond
     *
     * @param value The unit as MilliradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromMilliradiansPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.MilliradiansPerSecond);
    }

    /**
     * Create a new RotationalSpeed instance from a CentiradiansPerSecond
     *
     * @param value The unit as CentiradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromCentiradiansPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.CentiradiansPerSecond);
    }

    /**
     * Create a new RotationalSpeed instance from a DeciradiansPerSecond
     *
     * @param value The unit as DeciradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromDeciradiansPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.DeciradiansPerSecond);
    }

    /**
     * Create a new RotationalSpeed instance from a NanodegreesPerSecond
     *
     * @param value The unit as NanodegreesPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromNanodegreesPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.NanodegreesPerSecond);
    }

    /**
     * Create a new RotationalSpeed instance from a MicrodegreesPerSecond
     *
     * @param value The unit as MicrodegreesPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromMicrodegreesPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.MicrodegreesPerSecond);
    }

    /**
     * Create a new RotationalSpeed instance from a MillidegreesPerSecond
     *
     * @param value The unit as MillidegreesPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    public static FromMillidegreesPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.MillidegreesPerSecond);
    }

    /**
     * Gets the base unit enumeration associated with RotationalSpeed
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof RotationalSpeedUnits {
        return RotationalSpeedUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): RotationalSpeedUnits.RadiansPerSecond {
        return RotationalSpeedUnits.RadiansPerSecond;
    }

    /**
     * Create API DTO represent a RotationalSpeed unit.
     * @param holdInUnit The specific RotationalSpeed unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: RotationalSpeedUnits = RotationalSpeedUnits.RadiansPerSecond): RotationalSpeedDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a RotationalSpeed unit from an API DTO representation.
     * @param dtoRotationalSpeed The RotationalSpeed API DTO representation
     */
    public static FromDto(dtoRotationalSpeed: RotationalSpeedDto): RotationalSpeed {
        return new RotationalSpeed(dtoRotationalSpeed.value, dtoRotationalSpeed.unit);
    }

    /**
     * Convert RotationalSpeed to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: RotationalSpeedUnits): number {
        switch (toUnit) {
            case RotationalSpeedUnits.RadiansPerSecond: return this.RadiansPerSecond;
            case RotationalSpeedUnits.DegreesPerSecond: return this.DegreesPerSecond;
            case RotationalSpeedUnits.DegreesPerMinute: return this.DegreesPerMinute;
            case RotationalSpeedUnits.RevolutionsPerSecond: return this.RevolutionsPerSecond;
            case RotationalSpeedUnits.RevolutionsPerMinute: return this.RevolutionsPerMinute;
            case RotationalSpeedUnits.NanoradiansPerSecond: return this.NanoradiansPerSecond;
            case RotationalSpeedUnits.MicroradiansPerSecond: return this.MicroradiansPerSecond;
            case RotationalSpeedUnits.MilliradiansPerSecond: return this.MilliradiansPerSecond;
            case RotationalSpeedUnits.CentiradiansPerSecond: return this.CentiradiansPerSecond;
            case RotationalSpeedUnits.DeciradiansPerSecond: return this.DeciradiansPerSecond;
            case RotationalSpeedUnits.NanodegreesPerSecond: return this.NanodegreesPerSecond;
            case RotationalSpeedUnits.MicrodegreesPerSecond: return this.MicrodegreesPerSecond;
            case RotationalSpeedUnits.MillidegreesPerSecond: return this.MillidegreesPerSecond;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: RotationalSpeedUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case RotationalSpeedUnits.RadiansPerSecond: return this.value;
                case RotationalSpeedUnits.DegreesPerSecond: {
                    const v3 = super.internalDivide(180, Math.PI);
                    return super.internalMultiply(v3, this.value);
                }
                case RotationalSpeedUnits.DegreesPerMinute: {
                    const v4 = super.internalDivide(60, Math.PI);
                    const v5 = super.internalMultiply(180, v4);
                    return super.internalMultiply(v5, this.value);
                }
                case RotationalSpeedUnits.RevolutionsPerSecond: return super.internalDivide(this.value, 6.2831853072);
                case RotationalSpeedUnits.RevolutionsPerMinute: {
                    const v3 = super.internalDivide(this.value, 6.2831853072);
                    return super.internalMultiply(v3, 60);
                }
                case RotationalSpeedUnits.NanoradiansPerSecond: return super.internalDivide(this.value, 1e-9);
                case RotationalSpeedUnits.MicroradiansPerSecond: return super.internalDivide(this.value, 0.000001);
                case RotationalSpeedUnits.MilliradiansPerSecond: return super.internalDivide(this.value, 0.001);
                case RotationalSpeedUnits.CentiradiansPerSecond: return super.internalDivide(this.value, 0.01);
                case RotationalSpeedUnits.DeciradiansPerSecond: return super.internalDivide(this.value, 0.1);
                case RotationalSpeedUnits.NanodegreesPerSecond: {
                    const v3 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(v3, this.value);
                    return super.internalDivide(v5, 1e-9);
                }
                case RotationalSpeedUnits.MicrodegreesPerSecond: {
                    const v3 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(v3, this.value);
                    return super.internalDivide(v5, 0.000001);
                }
                case RotationalSpeedUnits.MillidegreesPerSecond: {
                    const v3 = super.internalDivide(180, Math.PI);
                    const v5 = super.internalMultiply(v3, this.value);
                    return super.internalDivide(v5, 0.001);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case RotationalSpeedUnits.RadiansPerSecond: return this.value;
            case RotationalSpeedUnits.DegreesPerSecond: return (180 / Math.PI) * this.value;
            case RotationalSpeedUnits.DegreesPerMinute: return (180 * 60 / Math.PI) * this.value;
            case RotationalSpeedUnits.RevolutionsPerSecond: return this.value / 6.2831853072;
            case RotationalSpeedUnits.RevolutionsPerMinute: return (this.value / 6.2831853072) * 60;
            case RotationalSpeedUnits.NanoradiansPerSecond: return (this.value) / 1e-9;
            case RotationalSpeedUnits.MicroradiansPerSecond: return (this.value) / 0.000001;
            case RotationalSpeedUnits.MilliradiansPerSecond: return (this.value) / 0.001;
            case RotationalSpeedUnits.CentiradiansPerSecond: return (this.value) / 0.01;
            case RotationalSpeedUnits.DeciradiansPerSecond: return (this.value) / 0.1;
            case RotationalSpeedUnits.NanodegreesPerSecond: return ((180 / Math.PI) * this.value) / 1e-9;
            case RotationalSpeedUnits.MicrodegreesPerSecond: return ((180 / Math.PI) * this.value) / 0.000001;
            case RotationalSpeedUnits.MillidegreesPerSecond: return ((180 / Math.PI) * this.value) / 0.001;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: RotationalSpeedUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case RotationalSpeedUnits.RadiansPerSecond: return value;
                case RotationalSpeedUnits.DegreesPerSecond: {
                    const v3 = super.internalDivide(Math.PI, 180);
                    return super.internalMultiply(v3, value);
                }
                case RotationalSpeedUnits.DegreesPerMinute: {
                    const v4 = super.internalMultiply(180, 60);
                    const v5 = super.internalDivide(Math.PI, v4);
                    return super.internalMultiply(v5, value);
                }
                case RotationalSpeedUnits.RevolutionsPerSecond: return super.internalMultiply(value, 6.2831853072);
                case RotationalSpeedUnits.RevolutionsPerMinute: {
                    const v3 = super.internalMultiply(value, 6.2831853072);
                    return super.internalDivide(v3, 60);
                }
                case RotationalSpeedUnits.NanoradiansPerSecond: return super.internalMultiply(value, 1e-9);
                case RotationalSpeedUnits.MicroradiansPerSecond: return super.internalMultiply(value, 0.000001);
                case RotationalSpeedUnits.MilliradiansPerSecond: return super.internalMultiply(value, 0.001);
                case RotationalSpeedUnits.CentiradiansPerSecond: return super.internalMultiply(value, 0.01);
                case RotationalSpeedUnits.DeciradiansPerSecond: return super.internalMultiply(value, 0.1);
                case RotationalSpeedUnits.NanodegreesPerSecond: {
                    const v3 = super.internalDivide(Math.PI, 180);
                    const v5 = super.internalMultiply(v3, value);
                    return super.internalMultiply(v5, 1e-9);
                }
                case RotationalSpeedUnits.MicrodegreesPerSecond: {
                    const v3 = super.internalDivide(Math.PI, 180);
                    const v5 = super.internalMultiply(v3, value);
                    return super.internalMultiply(v5, 0.000001);
                }
                case RotationalSpeedUnits.MillidegreesPerSecond: {
                    const v3 = super.internalDivide(Math.PI, 180);
                    const v5 = super.internalMultiply(v3, value);
                    return super.internalMultiply(v5, 0.001);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case RotationalSpeedUnits.RadiansPerSecond: return value;
            case RotationalSpeedUnits.DegreesPerSecond: return (Math.PI / 180) * value;
            case RotationalSpeedUnits.DegreesPerMinute: return (Math.PI / (180 * 60)) * value;
            case RotationalSpeedUnits.RevolutionsPerSecond: return value * 6.2831853072;
            case RotationalSpeedUnits.RevolutionsPerMinute: return (value * 6.2831853072) / 60;
            case RotationalSpeedUnits.NanoradiansPerSecond: return (value) * 1e-9;
            case RotationalSpeedUnits.MicroradiansPerSecond: return (value) * 0.000001;
            case RotationalSpeedUnits.MilliradiansPerSecond: return (value) * 0.001;
            case RotationalSpeedUnits.CentiradiansPerSecond: return (value) * 0.01;
            case RotationalSpeedUnits.DeciradiansPerSecond: return (value) * 0.1;
            case RotationalSpeedUnits.NanodegreesPerSecond: return ((Math.PI / 180) * value) * 1e-9;
            case RotationalSpeedUnits.MicrodegreesPerSecond: return ((Math.PI / 180) * value) * 0.000001;
            case RotationalSpeedUnits.MillidegreesPerSecond: return ((Math.PI / 180) * value) * 0.001;
            default: return Number.NaN;
        }
    }

    /**
     * Format the RotationalSpeed to string.
     * Note! the default format for RotationalSpeed is RadiansPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RotationalSpeed.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the RotationalSpeed.
     */
    public toString(unit: RotationalSpeedUnits = RotationalSpeedUnits.RadiansPerSecond, fractionalDigits?: number): string {

        switch (unit) {
            
            case RotationalSpeedUnits.RadiansPerSecond:
                return super.truncateFractionDigits(this.RadiansPerSecond, fractionalDigits) + ` rad/s`;
            case RotationalSpeedUnits.DegreesPerSecond:
                return super.truncateFractionDigits(this.DegreesPerSecond, fractionalDigits) + ` °/s`;
            case RotationalSpeedUnits.DegreesPerMinute:
                return super.truncateFractionDigits(this.DegreesPerMinute, fractionalDigits) + ` °/min`;
            case RotationalSpeedUnits.RevolutionsPerSecond:
                return super.truncateFractionDigits(this.RevolutionsPerSecond, fractionalDigits) + ` r/s`;
            case RotationalSpeedUnits.RevolutionsPerMinute:
                return super.truncateFractionDigits(this.RevolutionsPerMinute, fractionalDigits) + ` rpm`;
            case RotationalSpeedUnits.NanoradiansPerSecond:
                return super.truncateFractionDigits(this.NanoradiansPerSecond, fractionalDigits) + ` nrad/s`;
            case RotationalSpeedUnits.MicroradiansPerSecond:
                return super.truncateFractionDigits(this.MicroradiansPerSecond, fractionalDigits) + ` μrad/s`;
            case RotationalSpeedUnits.MilliradiansPerSecond:
                return super.truncateFractionDigits(this.MilliradiansPerSecond, fractionalDigits) + ` mrad/s`;
            case RotationalSpeedUnits.CentiradiansPerSecond:
                return super.truncateFractionDigits(this.CentiradiansPerSecond, fractionalDigits) + ` crad/s`;
            case RotationalSpeedUnits.DeciradiansPerSecond:
                return super.truncateFractionDigits(this.DeciradiansPerSecond, fractionalDigits) + ` drad/s`;
            case RotationalSpeedUnits.NanodegreesPerSecond:
                return super.truncateFractionDigits(this.NanodegreesPerSecond, fractionalDigits) + ` n°/s`;
            case RotationalSpeedUnits.MicrodegreesPerSecond:
                return super.truncateFractionDigits(this.MicrodegreesPerSecond, fractionalDigits) + ` μ°/s`;
            case RotationalSpeedUnits.MillidegreesPerSecond:
                return super.truncateFractionDigits(this.MillidegreesPerSecond, fractionalDigits) + ` m°/s`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RotationalSpeed unit abbreviation.
     * Note! the default abbreviation for RotationalSpeed is RadiansPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RotationalSpeed.
     * @returns The abbreviation string of RotationalSpeed.
     */
    public getUnitAbbreviation(unitAbbreviation: RotationalSpeedUnits = RotationalSpeedUnits.RadiansPerSecond): string {

        switch (unitAbbreviation) {
            
            case RotationalSpeedUnits.RadiansPerSecond:
                return `rad/s`;
            case RotationalSpeedUnits.DegreesPerSecond:
                return `°/s`;
            case RotationalSpeedUnits.DegreesPerMinute:
                return `°/min`;
            case RotationalSpeedUnits.RevolutionsPerSecond:
                return `r/s`;
            case RotationalSpeedUnits.RevolutionsPerMinute:
                return `rpm`;
            case RotationalSpeedUnits.NanoradiansPerSecond:
                return `nrad/s`;
            case RotationalSpeedUnits.MicroradiansPerSecond:
                return `μrad/s`;
            case RotationalSpeedUnits.MilliradiansPerSecond:
                return `mrad/s`;
            case RotationalSpeedUnits.CentiradiansPerSecond:
                return `crad/s`;
            case RotationalSpeedUnits.DeciradiansPerSecond:
                return `drad/s`;
            case RotationalSpeedUnits.NanodegreesPerSecond:
                return `n°/s`;
            case RotationalSpeedUnits.MicrodegreesPerSecond:
                return `μ°/s`;
            case RotationalSpeedUnits.MillidegreesPerSecond:
                return `m°/s`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given RotationalSpeed are equals to the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns True if the given RotationalSpeed are equal to the current RotationalSpeed.
     */
    public equals(rotationalSpeed: RotationalSpeed): boolean {
        return super.internalEquals(this.value, rotationalSpeed.BaseValue);
    }

    /**
     * Compare the given RotationalSpeed against the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns 0 if they are equal, -1 if the current RotationalSpeed is less then other, 1 if the current RotationalSpeed is greater then other.
     */
    public compareTo(rotationalSpeed: RotationalSpeed): number {
        return super.internalCompareTo(this.value, rotationalSpeed.BaseValue);
    }

    /**
     * Add the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    public add(rotationalSpeed: RotationalSpeed): RotationalSpeed {
        return new RotationalSpeed(super.internalAdd(this.value, rotationalSpeed.BaseValue))
    }

    /**
     * Subtract the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    public subtract(rotationalSpeed: RotationalSpeed): RotationalSpeed {
        return new RotationalSpeed(super.internalSubtract(this.value, rotationalSpeed.BaseValue))
    }

    /**
     * Multiply the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    public multiply(rotationalSpeed: RotationalSpeed): RotationalSpeed {
        return new RotationalSpeed(super.internalMultiply(this.value, rotationalSpeed.BaseValue))
    }

    /**
     * Divide the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    public divide(rotationalSpeed: RotationalSpeed): RotationalSpeed {
        return new RotationalSpeed(super.internalDivide(this.value, rotationalSpeed.BaseValue))
    }

    /**
     * Modulo the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    public modulo(rotationalSpeed: RotationalSpeed): RotationalSpeed {
        return new RotationalSpeed(super.internalModulo(this.value, rotationalSpeed.BaseValue))
    }

    /**
     * Pow the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    public pow(rotationalSpeed: RotationalSpeed): RotationalSpeed {
        return new RotationalSpeed(super.internalPow(this.value, rotationalSpeed.BaseValue))
    }
}
