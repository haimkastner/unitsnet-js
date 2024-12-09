import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a TemperatureChangeRate */
export interface TemperatureChangeRateDto {
    /** The value of the TemperatureChangeRate */
    value: number;
    /**  The specific unit that the TemperatureChangeRate value is representing */
    unit: TemperatureChangeRateUnits;
}

/** TemperatureChangeRateUnits enumeration */
export enum TemperatureChangeRateUnits {
    /** */
    DegreesCelsiusPerSecond = "DegreeCelsiusPerSecond",
    /** */
    DegreesCelsiusPerMinute = "DegreeCelsiusPerMinute",
    /** */
    DegreesKelvinPerMinute = "DegreeKelvinPerMinute",
    /** */
    DegreesFahrenheitPerMinute = "DegreeFahrenheitPerMinute",
    /** */
    DegreesFahrenheitPerSecond = "DegreeFahrenheitPerSecond",
    /** */
    DegreesKelvinPerSecond = "DegreeKelvinPerSecond",
    /** */
    DegreesCelsiusPerHour = "DegreeCelsiusPerHour",
    /** */
    DegreesKelvinPerHour = "DegreeKelvinPerHour",
    /** */
    DegreesFahrenheitPerHour = "DegreeFahrenheitPerHour",
    /** */
    NanodegreesCelsiusPerSecond = "NanodegreeCelsiusPerSecond",
    /** */
    MicrodegreesCelsiusPerSecond = "MicrodegreeCelsiusPerSecond",
    /** */
    MillidegreesCelsiusPerSecond = "MillidegreeCelsiusPerSecond",
    /** */
    CentidegreesCelsiusPerSecond = "CentidegreeCelsiusPerSecond",
    /** */
    DecidegreesCelsiusPerSecond = "DecidegreeCelsiusPerSecond",
    /** */
    DecadegreesCelsiusPerSecond = "DecadegreeCelsiusPerSecond",
    /** */
    HectodegreesCelsiusPerSecond = "HectodegreeCelsiusPerSecond",
    /** */
    KilodegreesCelsiusPerSecond = "KilodegreeCelsiusPerSecond"
}

/** Temperature change rate is the ratio of the temperature change to the time during which the change occurred (value of temperature changes per unit time). */
export class TemperatureChangeRate extends BaseUnit {
    protected value: number;
    private degreescelsiuspersecondLazy: number | null = null;
    private degreescelsiusperminuteLazy: number | null = null;
    private degreeskelvinperminuteLazy: number | null = null;
    private degreesfahrenheitperminuteLazy: number | null = null;
    private degreesfahrenheitpersecondLazy: number | null = null;
    private degreeskelvinpersecondLazy: number | null = null;
    private degreescelsiusperhourLazy: number | null = null;
    private degreeskelvinperhourLazy: number | null = null;
    private degreesfahrenheitperhourLazy: number | null = null;
    private nanodegreescelsiuspersecondLazy: number | null = null;
    private microdegreescelsiuspersecondLazy: number | null = null;
    private millidegreescelsiuspersecondLazy: number | null = null;
    private centidegreescelsiuspersecondLazy: number | null = null;
    private decidegreescelsiuspersecondLazy: number | null = null;
    private decadegreescelsiuspersecondLazy: number | null = null;
    private hectodegreescelsiuspersecondLazy: number | null = null;
    private kilodegreescelsiuspersecondLazy: number | null = null;

    /**
     * Create a new TemperatureChangeRate.
     * @param value The value.
     * @param fromUnit The ‘TemperatureChangeRate’ unit to create from.
     * The default unit is DegreesCelsiusPerSecond
     */
    public constructor(value: number, fromUnit: TemperatureChangeRateUnits = TemperatureChangeRateUnits.DegreesCelsiusPerSecond) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of TemperatureChangeRate is DegreesCelsiusPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): TemperatureChangeRateUnits.DegreesCelsiusPerSecond {
        return TemperatureChangeRateUnits.DegreesCelsiusPerSecond
    }

    /** */
    public get DegreesCelsiusPerSecond(): number {
        if(this.degreescelsiuspersecondLazy !== null){
            return this.degreescelsiuspersecondLazy;
        }
        return this.degreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }

    /** */
    public get DegreesCelsiusPerMinute(): number {
        if(this.degreescelsiusperminuteLazy !== null){
            return this.degreescelsiusperminuteLazy;
        }
        return this.degreescelsiusperminuteLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }

    /** */
    public get DegreesKelvinPerMinute(): number {
        if(this.degreeskelvinperminuteLazy !== null){
            return this.degreeskelvinperminuteLazy;
        }
        return this.degreeskelvinperminuteLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesKelvinPerMinute);
    }

    /** */
    public get DegreesFahrenheitPerMinute(): number {
        if(this.degreesfahrenheitperminuteLazy !== null){
            return this.degreesfahrenheitperminuteLazy;
        }
        return this.degreesfahrenheitperminuteLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesFahrenheitPerMinute);
    }

    /** */
    public get DegreesFahrenheitPerSecond(): number {
        if(this.degreesfahrenheitpersecondLazy !== null){
            return this.degreesfahrenheitpersecondLazy;
        }
        return this.degreesfahrenheitpersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesFahrenheitPerSecond);
    }

    /** */
    public get DegreesKelvinPerSecond(): number {
        if(this.degreeskelvinpersecondLazy !== null){
            return this.degreeskelvinpersecondLazy;
        }
        return this.degreeskelvinpersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesKelvinPerSecond);
    }

    /** */
    public get DegreesCelsiusPerHour(): number {
        if(this.degreescelsiusperhourLazy !== null){
            return this.degreescelsiusperhourLazy;
        }
        return this.degreescelsiusperhourLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesCelsiusPerHour);
    }

    /** */
    public get DegreesKelvinPerHour(): number {
        if(this.degreeskelvinperhourLazy !== null){
            return this.degreeskelvinperhourLazy;
        }
        return this.degreeskelvinperhourLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesKelvinPerHour);
    }

    /** */
    public get DegreesFahrenheitPerHour(): number {
        if(this.degreesfahrenheitperhourLazy !== null){
            return this.degreesfahrenheitperhourLazy;
        }
        return this.degreesfahrenheitperhourLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesFahrenheitPerHour);
    }

    /** */
    public get NanodegreesCelsiusPerSecond(): number {
        if(this.nanodegreescelsiuspersecondLazy !== null){
            return this.nanodegreescelsiuspersecondLazy;
        }
        return this.nanodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond);
    }

    /** */
    public get MicrodegreesCelsiusPerSecond(): number {
        if(this.microdegreescelsiuspersecondLazy !== null){
            return this.microdegreescelsiuspersecondLazy;
        }
        return this.microdegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond);
    }

    /** */
    public get MillidegreesCelsiusPerSecond(): number {
        if(this.millidegreescelsiuspersecondLazy !== null){
            return this.millidegreescelsiuspersecondLazy;
        }
        return this.millidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.MillidegreesCelsiusPerSecond);
    }

    /** */
    public get CentidegreesCelsiusPerSecond(): number {
        if(this.centidegreescelsiuspersecondLazy !== null){
            return this.centidegreescelsiuspersecondLazy;
        }
        return this.centidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond);
    }

    /** */
    public get DecidegreesCelsiusPerSecond(): number {
        if(this.decidegreescelsiuspersecondLazy !== null){
            return this.decidegreescelsiuspersecondLazy;
        }
        return this.decidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond);
    }

    /** */
    public get DecadegreesCelsiusPerSecond(): number {
        if(this.decadegreescelsiuspersecondLazy !== null){
            return this.decadegreescelsiuspersecondLazy;
        }
        return this.decadegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond);
    }

    /** */
    public get HectodegreesCelsiusPerSecond(): number {
        if(this.hectodegreescelsiuspersecondLazy !== null){
            return this.hectodegreescelsiuspersecondLazy;
        }
        return this.hectodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond);
    }

    /** */
    public get KilodegreesCelsiusPerSecond(): number {
        if(this.kilodegreescelsiuspersecondLazy !== null){
            return this.kilodegreescelsiuspersecondLazy;
        }
        return this.kilodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DegreesCelsiusPerSecond
     *
     * @param value The unit as DegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DegreesCelsiusPerMinute
     *
     * @param value The unit as DegreesCelsiusPerMinute to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDegreesCelsiusPerMinute(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DegreesKelvinPerMinute
     *
     * @param value The unit as DegreesKelvinPerMinute to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDegreesKelvinPerMinute(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesKelvinPerMinute);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DegreesFahrenheitPerMinute
     *
     * @param value The unit as DegreesFahrenheitPerMinute to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDegreesFahrenheitPerMinute(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesFahrenheitPerMinute);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DegreesFahrenheitPerSecond
     *
     * @param value The unit as DegreesFahrenheitPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDegreesFahrenheitPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesFahrenheitPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DegreesKelvinPerSecond
     *
     * @param value The unit as DegreesKelvinPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDegreesKelvinPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesKelvinPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DegreesCelsiusPerHour
     *
     * @param value The unit as DegreesCelsiusPerHour to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDegreesCelsiusPerHour(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerHour);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DegreesKelvinPerHour
     *
     * @param value The unit as DegreesKelvinPerHour to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDegreesKelvinPerHour(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesKelvinPerHour);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DegreesFahrenheitPerHour
     *
     * @param value The unit as DegreesFahrenheitPerHour to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDegreesFahrenheitPerHour(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesFahrenheitPerHour);
    }

    /**
     * Create a new TemperatureChangeRate instance from a NanodegreesCelsiusPerSecond
     *
     * @param value The unit as NanodegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromNanodegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a MicrodegreesCelsiusPerSecond
     *
     * @param value The unit as MicrodegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromMicrodegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a MillidegreesCelsiusPerSecond
     *
     * @param value The unit as MillidegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromMillidegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.MillidegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a CentidegreesCelsiusPerSecond
     *
     * @param value The unit as CentidegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromCentidegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DecidegreesCelsiusPerSecond
     *
     * @param value The unit as DecidegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDecidegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DecadegreesCelsiusPerSecond
     *
     * @param value The unit as DecadegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDecadegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a HectodegreesCelsiusPerSecond
     *
     * @param value The unit as HectodegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromHectodegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a KilodegreesCelsiusPerSecond
     *
     * @param value The unit as KilodegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromKilodegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond);
    }

    /**
     * Gets the base unit enumeration associated with TemperatureChangeRate
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof TemperatureChangeRateUnits {
        return TemperatureChangeRateUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): TemperatureChangeRateUnits.DegreesCelsiusPerSecond {
        return TemperatureChangeRateUnits.DegreesCelsiusPerSecond;
    }

    /**
     * Create API DTO represent a TemperatureChangeRate unit.
     * @param holdInUnit The specific TemperatureChangeRate unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: TemperatureChangeRateUnits = TemperatureChangeRateUnits.DegreesCelsiusPerSecond): TemperatureChangeRateDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a TemperatureChangeRate unit from an API DTO representation.
     * @param dtoTemperatureChangeRate The TemperatureChangeRate API DTO representation
     */
    public static FromDto(dtoTemperatureChangeRate: TemperatureChangeRateDto): TemperatureChangeRate {
        return new TemperatureChangeRate(dtoTemperatureChangeRate.value, dtoTemperatureChangeRate.unit);
    }

    /**
     * Convert TemperatureChangeRate to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: TemperatureChangeRateUnits): number {
        switch (toUnit) {
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond: return this.DegreesCelsiusPerSecond;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute: return this.DegreesCelsiusPerMinute;
            case TemperatureChangeRateUnits.DegreesKelvinPerMinute: return this.DegreesKelvinPerMinute;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerMinute: return this.DegreesFahrenheitPerMinute;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerSecond: return this.DegreesFahrenheitPerSecond;
            case TemperatureChangeRateUnits.DegreesKelvinPerSecond: return this.DegreesKelvinPerSecond;
            case TemperatureChangeRateUnits.DegreesCelsiusPerHour: return this.DegreesCelsiusPerHour;
            case TemperatureChangeRateUnits.DegreesKelvinPerHour: return this.DegreesKelvinPerHour;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerHour: return this.DegreesFahrenheitPerHour;
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond: return this.NanodegreesCelsiusPerSecond;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond: return this.MicrodegreesCelsiusPerSecond;
            case TemperatureChangeRateUnits.MillidegreesCelsiusPerSecond: return this.MillidegreesCelsiusPerSecond;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond: return this.CentidegreesCelsiusPerSecond;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond: return this.DecidegreesCelsiusPerSecond;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond: return this.DecadegreesCelsiusPerSecond;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond: return this.HectodegreesCelsiusPerSecond;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond: return this.KilodegreesCelsiusPerSecond;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: TemperatureChangeRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case TemperatureChangeRateUnits.DegreesCelsiusPerSecond: return this.value;
                case TemperatureChangeRateUnits.DegreesCelsiusPerMinute: return super.internalMultiply(this.value, 60);
                case TemperatureChangeRateUnits.DegreesKelvinPerMinute: return super.internalMultiply(this.value, 60);
                case TemperatureChangeRateUnits.DegreesFahrenheitPerMinute: {
                    const v4 = super.internalDivide(9, 5);
                    const v5 = super.internalMultiply(this.value, v4);
                    return super.internalMultiply(v5, 60);
                }
                case TemperatureChangeRateUnits.DegreesFahrenheitPerSecond: {
                    const v4 = super.internalDivide(9, 5);
                    return super.internalMultiply(this.value, v4);
                }
                case TemperatureChangeRateUnits.DegreesKelvinPerSecond: return this.value;
                case TemperatureChangeRateUnits.DegreesCelsiusPerHour: return super.internalMultiply(this.value, 3600);
                case TemperatureChangeRateUnits.DegreesKelvinPerHour: return super.internalMultiply(this.value, 3600);
                case TemperatureChangeRateUnits.DegreesFahrenheitPerHour: {
                    const v4 = super.internalDivide(9, 5);
                    const v5 = super.internalMultiply(this.value, v4);
                    return super.internalMultiply(v5, 3600);
                }
                case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond: return super.internalDivide(this.value, 1e-9);
                case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond: return super.internalDivide(this.value, 0.000001);
                case TemperatureChangeRateUnits.MillidegreesCelsiusPerSecond: return super.internalDivide(this.value, 0.001);
                case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond: return super.internalDivide(this.value, 0.01);
                case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond: return super.internalDivide(this.value, 0.1);
                case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond: return super.internalDivide(this.value, 10);
                case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond: return super.internalDivide(this.value, 100);
                case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond: return super.internalDivide(this.value, 1000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond: return this.value;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute: return this.value * 60;
            case TemperatureChangeRateUnits.DegreesKelvinPerMinute: return this.value * 60;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerMinute: return this.value * 9 / 5 * 60;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerSecond: return this.value * 9 / 5;
            case TemperatureChangeRateUnits.DegreesKelvinPerSecond: return this.value;
            case TemperatureChangeRateUnits.DegreesCelsiusPerHour: return this.value * 3600;
            case TemperatureChangeRateUnits.DegreesKelvinPerHour: return this.value * 3600;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerHour: return this.value * 9 / 5 * 3600;
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond: return (this.value) / 1e-9;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond: return (this.value) / 0.000001;
            case TemperatureChangeRateUnits.MillidegreesCelsiusPerSecond: return (this.value) / 0.001;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond: return (this.value) / 0.01;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond: return (this.value) / 0.1;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond: return (this.value) / 10;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond: return (this.value) / 100;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond: return (this.value) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: TemperatureChangeRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case TemperatureChangeRateUnits.DegreesCelsiusPerSecond: return value;
                case TemperatureChangeRateUnits.DegreesCelsiusPerMinute: return super.internalDivide(value, 60);
                case TemperatureChangeRateUnits.DegreesKelvinPerMinute: return super.internalDivide(value, 60);
                case TemperatureChangeRateUnits.DegreesFahrenheitPerMinute: {
                    const v4 = super.internalDivide(5, 9);
                    const v6 = super.internalDivide(v4, 60);
                    return super.internalMultiply(value, v6);
                }
                case TemperatureChangeRateUnits.DegreesFahrenheitPerSecond: {
                    const v4 = super.internalDivide(5, 9);
                    return super.internalMultiply(value, v4);
                }
                case TemperatureChangeRateUnits.DegreesKelvinPerSecond: return value;
                case TemperatureChangeRateUnits.DegreesCelsiusPerHour: return super.internalDivide(value, 3600);
                case TemperatureChangeRateUnits.DegreesKelvinPerHour: return super.internalDivide(value, 3600);
                case TemperatureChangeRateUnits.DegreesFahrenheitPerHour: {
                    const v4 = super.internalDivide(5, 9);
                    const v6 = super.internalDivide(v4, 3600);
                    return super.internalMultiply(value, v6);
                }
                case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond: return super.internalMultiply(value, 1e-9);
                case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond: return super.internalMultiply(value, 0.000001);
                case TemperatureChangeRateUnits.MillidegreesCelsiusPerSecond: return super.internalMultiply(value, 0.001);
                case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond: return super.internalMultiply(value, 0.01);
                case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond: return super.internalMultiply(value, 0.1);
                case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond: return super.internalMultiply(value, 10);
                case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond: return super.internalMultiply(value, 100);
                case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond: return super.internalMultiply(value, 1000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond: return value;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute: return value / 60;
            case TemperatureChangeRateUnits.DegreesKelvinPerMinute: return value / 60;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerMinute: return value * 5 / 9 / 60;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerSecond: return value * 5 / 9;
            case TemperatureChangeRateUnits.DegreesKelvinPerSecond: return value;
            case TemperatureChangeRateUnits.DegreesCelsiusPerHour: return value / 3600;
            case TemperatureChangeRateUnits.DegreesKelvinPerHour: return value / 3600;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerHour: return value * 5 / 9 / 3600;
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond: return (value) * 1e-9;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond: return (value) * 0.000001;
            case TemperatureChangeRateUnits.MillidegreesCelsiusPerSecond: return (value) * 0.001;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond: return (value) * 0.01;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond: return (value) * 0.1;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond: return (value) * 10;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond: return (value) * 100;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond: return (value) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the TemperatureChangeRate to string.
     * Note! the default format for TemperatureChangeRate is DegreesCelsiusPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the TemperatureChangeRate.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the TemperatureChangeRate.
     */
    public toString(unit: TemperatureChangeRateUnits = TemperatureChangeRateUnits.DegreesCelsiusPerSecond, fractionalDigits?: number): string {

        switch (unit) {
            
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return super.truncateFractionDigits(this.DegreesCelsiusPerSecond, fractionalDigits) + ` °C/s`;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return super.truncateFractionDigits(this.DegreesCelsiusPerMinute, fractionalDigits) + ` °C/min`;
            case TemperatureChangeRateUnits.DegreesKelvinPerMinute:
                return super.truncateFractionDigits(this.DegreesKelvinPerMinute, fractionalDigits) + ` K/min`;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerMinute:
                return super.truncateFractionDigits(this.DegreesFahrenheitPerMinute, fractionalDigits) + ` °F/min`;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerSecond:
                return super.truncateFractionDigits(this.DegreesFahrenheitPerSecond, fractionalDigits) + ` °F/s`;
            case TemperatureChangeRateUnits.DegreesKelvinPerSecond:
                return super.truncateFractionDigits(this.DegreesKelvinPerSecond, fractionalDigits) + ` K/s`;
            case TemperatureChangeRateUnits.DegreesCelsiusPerHour:
                return super.truncateFractionDigits(this.DegreesCelsiusPerHour, fractionalDigits) + ` °C/h`;
            case TemperatureChangeRateUnits.DegreesKelvinPerHour:
                return super.truncateFractionDigits(this.DegreesKelvinPerHour, fractionalDigits) + ` K/h`;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerHour:
                return super.truncateFractionDigits(this.DegreesFahrenheitPerHour, fractionalDigits) + ` °F/h`;
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond:
                return super.truncateFractionDigits(this.NanodegreesCelsiusPerSecond, fractionalDigits) + ` n°C/s`;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond:
                return super.truncateFractionDigits(this.MicrodegreesCelsiusPerSecond, fractionalDigits) + ` μ°C/s`;
            case TemperatureChangeRateUnits.MillidegreesCelsiusPerSecond:
                return super.truncateFractionDigits(this.MillidegreesCelsiusPerSecond, fractionalDigits) + ` m°C/s`;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond:
                return super.truncateFractionDigits(this.CentidegreesCelsiusPerSecond, fractionalDigits) + ` c°C/s`;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond:
                return super.truncateFractionDigits(this.DecidegreesCelsiusPerSecond, fractionalDigits) + ` d°C/s`;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond:
                return super.truncateFractionDigits(this.DecadegreesCelsiusPerSecond, fractionalDigits) + ` da°C/s`;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond:
                return super.truncateFractionDigits(this.HectodegreesCelsiusPerSecond, fractionalDigits) + ` h°C/s`;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond:
                return super.truncateFractionDigits(this.KilodegreesCelsiusPerSecond, fractionalDigits) + ` k°C/s`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get TemperatureChangeRate unit abbreviation.
     * Note! the default abbreviation for TemperatureChangeRate is DegreesCelsiusPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the TemperatureChangeRate.
     * @returns The abbreviation string of TemperatureChangeRate.
     */
    public getUnitAbbreviation(unitAbbreviation: TemperatureChangeRateUnits = TemperatureChangeRateUnits.DegreesCelsiusPerSecond): string {

        switch (unitAbbreviation) {
            
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return `°C/s`;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return `°C/min`;
            case TemperatureChangeRateUnits.DegreesKelvinPerMinute:
                return `K/min`;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerMinute:
                return `°F/min`;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerSecond:
                return `°F/s`;
            case TemperatureChangeRateUnits.DegreesKelvinPerSecond:
                return `K/s`;
            case TemperatureChangeRateUnits.DegreesCelsiusPerHour:
                return `°C/h`;
            case TemperatureChangeRateUnits.DegreesKelvinPerHour:
                return `K/h`;
            case TemperatureChangeRateUnits.DegreesFahrenheitPerHour:
                return `°F/h`;
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond:
                return `n°C/s`;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond:
                return `μ°C/s`;
            case TemperatureChangeRateUnits.MillidegreesCelsiusPerSecond:
                return `m°C/s`;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond:
                return `c°C/s`;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond:
                return `d°C/s`;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond:
                return `da°C/s`;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond:
                return `h°C/s`;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond:
                return `k°C/s`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given TemperatureChangeRate are equals to the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns True if the given TemperatureChangeRate are equal to the current TemperatureChangeRate.
     */
    public equals(temperatureChangeRate: TemperatureChangeRate): boolean {
        return super.internalEquals(this.value, temperatureChangeRate.BaseValue);
    }

    /**
     * Compare the given TemperatureChangeRate against the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns 0 if they are equal, -1 if the current TemperatureChangeRate is less then other, 1 if the current TemperatureChangeRate is greater then other.
     */
    public compareTo(temperatureChangeRate: TemperatureChangeRate): number {
        return super.internalCompareTo(this.value, temperatureChangeRate.BaseValue);
    }

    /**
     * Add the given TemperatureChangeRate with the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns A new TemperatureChangeRate instance with the results.
     */
    public add(temperatureChangeRate: TemperatureChangeRate): TemperatureChangeRate {
        return new TemperatureChangeRate(super.internalAdd(this.value, temperatureChangeRate.BaseValue))
    }

    /**
     * Subtract the given TemperatureChangeRate with the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns A new TemperatureChangeRate instance with the results.
     */
    public subtract(temperatureChangeRate: TemperatureChangeRate): TemperatureChangeRate {
        return new TemperatureChangeRate(super.internalSubtract(this.value, temperatureChangeRate.BaseValue))
    }

    /**
     * Multiply the given TemperatureChangeRate with the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns A new TemperatureChangeRate instance with the results.
     */
    public multiply(temperatureChangeRate: TemperatureChangeRate): TemperatureChangeRate {
        return new TemperatureChangeRate(super.internalMultiply(this.value, temperatureChangeRate.BaseValue))
    }

    /**
     * Divide the given TemperatureChangeRate with the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns A new TemperatureChangeRate instance with the results.
     */
    public divide(temperatureChangeRate: TemperatureChangeRate): TemperatureChangeRate {
        return new TemperatureChangeRate(super.internalDivide(this.value, temperatureChangeRate.BaseValue))
    }

    /**
     * Modulo the given TemperatureChangeRate with the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns A new TemperatureChangeRate instance with the results.
     */
    public modulo(temperatureChangeRate: TemperatureChangeRate): TemperatureChangeRate {
        return new TemperatureChangeRate(super.internalModulo(this.value, temperatureChangeRate.BaseValue))
    }

    /**
     * Pow the given TemperatureChangeRate with the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns A new TemperatureChangeRate instance with the results.
     */
    public pow(temperatureChangeRate: TemperatureChangeRate): TemperatureChangeRate {
        return new TemperatureChangeRate(super.internalPow(this.value, temperatureChangeRate.BaseValue))
    }
}
