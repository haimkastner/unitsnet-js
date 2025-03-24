import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricPotentialChangeRate */
export interface ElectricPotentialChangeRateDto {
    /** The value of the ElectricPotentialChangeRate */
    value: number;
    /**  The specific unit that the ElectricPotentialChangeRate value is representing */
    unit: ElectricPotentialChangeRateUnits;
}

/** ElectricPotentialChangeRateUnits enumeration */
export enum ElectricPotentialChangeRateUnits {
    /** */
    VoltsPerSeconds = "VoltPerSecond",
    /** */
    VoltsPerMicroseconds = "VoltPerMicrosecond",
    /** */
    VoltsPerMinutes = "VoltPerMinute",
    /** */
    VoltsPerHours = "VoltPerHour",
    /** */
    MicrovoltsPerSeconds = "MicrovoltPerSecond",
    /** */
    MillivoltsPerSeconds = "MillivoltPerSecond",
    /** */
    KilovoltsPerSeconds = "KilovoltPerSecond",
    /** */
    MegavoltsPerSeconds = "MegavoltPerSecond",
    /** */
    MicrovoltsPerMicroseconds = "MicrovoltPerMicrosecond",
    /** */
    MillivoltsPerMicroseconds = "MillivoltPerMicrosecond",
    /** */
    KilovoltsPerMicroseconds = "KilovoltPerMicrosecond",
    /** */
    MegavoltsPerMicroseconds = "MegavoltPerMicrosecond",
    /** */
    MicrovoltsPerMinutes = "MicrovoltPerMinute",
    /** */
    MillivoltsPerMinutes = "MillivoltPerMinute",
    /** */
    KilovoltsPerMinutes = "KilovoltPerMinute",
    /** */
    MegavoltsPerMinutes = "MegavoltPerMinute",
    /** */
    MicrovoltsPerHours = "MicrovoltPerHour",
    /** */
    MillivoltsPerHours = "MillivoltPerHour",
    /** */
    KilovoltsPerHours = "KilovoltPerHour",
    /** */
    MegavoltsPerHours = "MegavoltPerHour"
}

/** ElectricPotential change rate is the ratio of the electric potential change to the time during which the change occurred (value of electric potential changes per unit time). */
export class ElectricPotentialChangeRate extends BaseUnit {
    protected value: number;
    private voltspersecondsLazy: number | null = null;
    private voltspermicrosecondsLazy: number | null = null;
    private voltsperminutesLazy: number | null = null;
    private voltsperhoursLazy: number | null = null;
    private microvoltspersecondsLazy: number | null = null;
    private millivoltspersecondsLazy: number | null = null;
    private kilovoltspersecondsLazy: number | null = null;
    private megavoltspersecondsLazy: number | null = null;
    private microvoltspermicrosecondsLazy: number | null = null;
    private millivoltspermicrosecondsLazy: number | null = null;
    private kilovoltspermicrosecondsLazy: number | null = null;
    private megavoltspermicrosecondsLazy: number | null = null;
    private microvoltsperminutesLazy: number | null = null;
    private millivoltsperminutesLazy: number | null = null;
    private kilovoltsperminutesLazy: number | null = null;
    private megavoltsperminutesLazy: number | null = null;
    private microvoltsperhoursLazy: number | null = null;
    private millivoltsperhoursLazy: number | null = null;
    private kilovoltsperhoursLazy: number | null = null;
    private megavoltsperhoursLazy: number | null = null;

    /**
     * Create a new ElectricPotentialChangeRate.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotentialChangeRate’ unit to create from.
     * The default unit is VoltsPerSeconds
     */
    public constructor(value: number, fromUnit: ElectricPotentialChangeRateUnits = ElectricPotentialChangeRateUnits.VoltsPerSeconds) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricPotentialChangeRate is VoltsPerSeconds.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricPotentialChangeRateUnits.VoltsPerSeconds {
        return ElectricPotentialChangeRateUnits.VoltsPerSeconds
    }

    /** */
    public get VoltsPerSeconds(): number {
        if(this.voltspersecondsLazy !== null){
            return this.voltspersecondsLazy;
        }
        return this.voltspersecondsLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.VoltsPerSeconds);
    }

    /** */
    public get VoltsPerMicroseconds(): number {
        if(this.voltspermicrosecondsLazy !== null){
            return this.voltspermicrosecondsLazy;
        }
        return this.voltspermicrosecondsLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.VoltsPerMicroseconds);
    }

    /** */
    public get VoltsPerMinutes(): number {
        if(this.voltsperminutesLazy !== null){
            return this.voltsperminutesLazy;
        }
        return this.voltsperminutesLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.VoltsPerMinutes);
    }

    /** */
    public get VoltsPerHours(): number {
        if(this.voltsperhoursLazy !== null){
            return this.voltsperhoursLazy;
        }
        return this.voltsperhoursLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.VoltsPerHours);
    }

    /** */
    public get MicrovoltsPerSeconds(): number {
        if(this.microvoltspersecondsLazy !== null){
            return this.microvoltspersecondsLazy;
        }
        return this.microvoltspersecondsLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MicrovoltsPerSeconds);
    }

    /** */
    public get MillivoltsPerSeconds(): number {
        if(this.millivoltspersecondsLazy !== null){
            return this.millivoltspersecondsLazy;
        }
        return this.millivoltspersecondsLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MillivoltsPerSeconds);
    }

    /** */
    public get KilovoltsPerSeconds(): number {
        if(this.kilovoltspersecondsLazy !== null){
            return this.kilovoltspersecondsLazy;
        }
        return this.kilovoltspersecondsLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.KilovoltsPerSeconds);
    }

    /** */
    public get MegavoltsPerSeconds(): number {
        if(this.megavoltspersecondsLazy !== null){
            return this.megavoltspersecondsLazy;
        }
        return this.megavoltspersecondsLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MegavoltsPerSeconds);
    }

    /** */
    public get MicrovoltsPerMicroseconds(): number {
        if(this.microvoltspermicrosecondsLazy !== null){
            return this.microvoltspermicrosecondsLazy;
        }
        return this.microvoltspermicrosecondsLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MicrovoltsPerMicroseconds);
    }

    /** */
    public get MillivoltsPerMicroseconds(): number {
        if(this.millivoltspermicrosecondsLazy !== null){
            return this.millivoltspermicrosecondsLazy;
        }
        return this.millivoltspermicrosecondsLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MillivoltsPerMicroseconds);
    }

    /** */
    public get KilovoltsPerMicroseconds(): number {
        if(this.kilovoltspermicrosecondsLazy !== null){
            return this.kilovoltspermicrosecondsLazy;
        }
        return this.kilovoltspermicrosecondsLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.KilovoltsPerMicroseconds);
    }

    /** */
    public get MegavoltsPerMicroseconds(): number {
        if(this.megavoltspermicrosecondsLazy !== null){
            return this.megavoltspermicrosecondsLazy;
        }
        return this.megavoltspermicrosecondsLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MegavoltsPerMicroseconds);
    }

    /** */
    public get MicrovoltsPerMinutes(): number {
        if(this.microvoltsperminutesLazy !== null){
            return this.microvoltsperminutesLazy;
        }
        return this.microvoltsperminutesLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MicrovoltsPerMinutes);
    }

    /** */
    public get MillivoltsPerMinutes(): number {
        if(this.millivoltsperminutesLazy !== null){
            return this.millivoltsperminutesLazy;
        }
        return this.millivoltsperminutesLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MillivoltsPerMinutes);
    }

    /** */
    public get KilovoltsPerMinutes(): number {
        if(this.kilovoltsperminutesLazy !== null){
            return this.kilovoltsperminutesLazy;
        }
        return this.kilovoltsperminutesLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.KilovoltsPerMinutes);
    }

    /** */
    public get MegavoltsPerMinutes(): number {
        if(this.megavoltsperminutesLazy !== null){
            return this.megavoltsperminutesLazy;
        }
        return this.megavoltsperminutesLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MegavoltsPerMinutes);
    }

    /** */
    public get MicrovoltsPerHours(): number {
        if(this.microvoltsperhoursLazy !== null){
            return this.microvoltsperhoursLazy;
        }
        return this.microvoltsperhoursLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MicrovoltsPerHours);
    }

    /** */
    public get MillivoltsPerHours(): number {
        if(this.millivoltsperhoursLazy !== null){
            return this.millivoltsperhoursLazy;
        }
        return this.millivoltsperhoursLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MillivoltsPerHours);
    }

    /** */
    public get KilovoltsPerHours(): number {
        if(this.kilovoltsperhoursLazy !== null){
            return this.kilovoltsperhoursLazy;
        }
        return this.kilovoltsperhoursLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.KilovoltsPerHours);
    }

    /** */
    public get MegavoltsPerHours(): number {
        if(this.megavoltsperhoursLazy !== null){
            return this.megavoltsperhoursLazy;
        }
        return this.megavoltsperhoursLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MegavoltsPerHours);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a VoltsPerSeconds
     *
     * @param value The unit as VoltsPerSeconds to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromVoltsPerSeconds(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.VoltsPerSeconds);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a VoltsPerMicroseconds
     *
     * @param value The unit as VoltsPerMicroseconds to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromVoltsPerMicroseconds(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.VoltsPerMicroseconds);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a VoltsPerMinutes
     *
     * @param value The unit as VoltsPerMinutes to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromVoltsPerMinutes(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.VoltsPerMinutes);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a VoltsPerHours
     *
     * @param value The unit as VoltsPerHours to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromVoltsPerHours(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.VoltsPerHours);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MicrovoltsPerSeconds
     *
     * @param value The unit as MicrovoltsPerSeconds to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMicrovoltsPerSeconds(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MicrovoltsPerSeconds);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MillivoltsPerSeconds
     *
     * @param value The unit as MillivoltsPerSeconds to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMillivoltsPerSeconds(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MillivoltsPerSeconds);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a KilovoltsPerSeconds
     *
     * @param value The unit as KilovoltsPerSeconds to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromKilovoltsPerSeconds(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.KilovoltsPerSeconds);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MegavoltsPerSeconds
     *
     * @param value The unit as MegavoltsPerSeconds to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMegavoltsPerSeconds(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MegavoltsPerSeconds);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MicrovoltsPerMicroseconds
     *
     * @param value The unit as MicrovoltsPerMicroseconds to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMicrovoltsPerMicroseconds(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MicrovoltsPerMicroseconds);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MillivoltsPerMicroseconds
     *
     * @param value The unit as MillivoltsPerMicroseconds to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMillivoltsPerMicroseconds(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MillivoltsPerMicroseconds);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a KilovoltsPerMicroseconds
     *
     * @param value The unit as KilovoltsPerMicroseconds to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromKilovoltsPerMicroseconds(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.KilovoltsPerMicroseconds);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MegavoltsPerMicroseconds
     *
     * @param value The unit as MegavoltsPerMicroseconds to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMegavoltsPerMicroseconds(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MegavoltsPerMicroseconds);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MicrovoltsPerMinutes
     *
     * @param value The unit as MicrovoltsPerMinutes to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMicrovoltsPerMinutes(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MicrovoltsPerMinutes);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MillivoltsPerMinutes
     *
     * @param value The unit as MillivoltsPerMinutes to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMillivoltsPerMinutes(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MillivoltsPerMinutes);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a KilovoltsPerMinutes
     *
     * @param value The unit as KilovoltsPerMinutes to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromKilovoltsPerMinutes(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.KilovoltsPerMinutes);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MegavoltsPerMinutes
     *
     * @param value The unit as MegavoltsPerMinutes to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMegavoltsPerMinutes(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MegavoltsPerMinutes);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MicrovoltsPerHours
     *
     * @param value The unit as MicrovoltsPerHours to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMicrovoltsPerHours(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MicrovoltsPerHours);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MillivoltsPerHours
     *
     * @param value The unit as MillivoltsPerHours to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMillivoltsPerHours(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MillivoltsPerHours);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a KilovoltsPerHours
     *
     * @param value The unit as KilovoltsPerHours to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromKilovoltsPerHours(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.KilovoltsPerHours);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MegavoltsPerHours
     *
     * @param value The unit as MegavoltsPerHours to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMegavoltsPerHours(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MegavoltsPerHours);
    }

    /**
     * Gets the base unit enumeration associated with ElectricPotentialChangeRate
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricPotentialChangeRateUnits {
        return ElectricPotentialChangeRateUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricPotentialChangeRateUnits.VoltsPerSeconds {
        return ElectricPotentialChangeRateUnits.VoltsPerSeconds;
    }

    /**
     * Create API DTO represent a ElectricPotentialChangeRate unit.
     * @param holdInUnit The specific ElectricPotentialChangeRate unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricPotentialChangeRateUnits = ElectricPotentialChangeRateUnits.VoltsPerSeconds): ElectricPotentialChangeRateDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricPotentialChangeRate unit from an API DTO representation.
     * @param dtoElectricPotentialChangeRate The ElectricPotentialChangeRate API DTO representation
     */
    public static FromDto(dtoElectricPotentialChangeRate: ElectricPotentialChangeRateDto): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(dtoElectricPotentialChangeRate.value, dtoElectricPotentialChangeRate.unit);
    }

    /**
     * Convert ElectricPotentialChangeRate to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricPotentialChangeRateUnits): number {
        switch (toUnit) {
            case ElectricPotentialChangeRateUnits.VoltsPerSeconds: return this.VoltsPerSeconds;
            case ElectricPotentialChangeRateUnits.VoltsPerMicroseconds: return this.VoltsPerMicroseconds;
            case ElectricPotentialChangeRateUnits.VoltsPerMinutes: return this.VoltsPerMinutes;
            case ElectricPotentialChangeRateUnits.VoltsPerHours: return this.VoltsPerHours;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerSeconds: return this.MicrovoltsPerSeconds;
            case ElectricPotentialChangeRateUnits.MillivoltsPerSeconds: return this.MillivoltsPerSeconds;
            case ElectricPotentialChangeRateUnits.KilovoltsPerSeconds: return this.KilovoltsPerSeconds;
            case ElectricPotentialChangeRateUnits.MegavoltsPerSeconds: return this.MegavoltsPerSeconds;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMicroseconds: return this.MicrovoltsPerMicroseconds;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMicroseconds: return this.MillivoltsPerMicroseconds;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMicroseconds: return this.KilovoltsPerMicroseconds;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMicroseconds: return this.MegavoltsPerMicroseconds;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMinutes: return this.MicrovoltsPerMinutes;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMinutes: return this.MillivoltsPerMinutes;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMinutes: return this.KilovoltsPerMinutes;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMinutes: return this.MegavoltsPerMinutes;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerHours: return this.MicrovoltsPerHours;
            case ElectricPotentialChangeRateUnits.MillivoltsPerHours: return this.MillivoltsPerHours;
            case ElectricPotentialChangeRateUnits.KilovoltsPerHours: return this.KilovoltsPerHours;
            case ElectricPotentialChangeRateUnits.MegavoltsPerHours: return this.MegavoltsPerHours;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricPotentialChangeRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricPotentialChangeRateUnits.VoltsPerSeconds: return this.value;
                case ElectricPotentialChangeRateUnits.VoltsPerMicroseconds: return super.internalDivide(this.value, 1E6);
                case ElectricPotentialChangeRateUnits.VoltsPerMinutes: return super.internalMultiply(this.value, 60);
                case ElectricPotentialChangeRateUnits.VoltsPerHours: return super.internalMultiply(this.value, 3600);
                case ElectricPotentialChangeRateUnits.MicrovoltsPerSeconds: return super.internalDivide(this.value, 0.000001);
                case ElectricPotentialChangeRateUnits.MillivoltsPerSeconds: return super.internalDivide(this.value, 0.001);
                case ElectricPotentialChangeRateUnits.KilovoltsPerSeconds: return super.internalDivide(this.value, 1000);
                case ElectricPotentialChangeRateUnits.MegavoltsPerSeconds: return super.internalDivide(this.value, 1000000);
                case ElectricPotentialChangeRateUnits.MicrovoltsPerMicroseconds: {
                    const v3 = super.internalDivide(this.value, 1E6);
                    return super.internalDivide(v3, 0.000001);
                }
                case ElectricPotentialChangeRateUnits.MillivoltsPerMicroseconds: {
                    const v3 = super.internalDivide(this.value, 1E6);
                    return super.internalDivide(v3, 0.001);
                }
                case ElectricPotentialChangeRateUnits.KilovoltsPerMicroseconds: {
                    const v3 = super.internalDivide(this.value, 1E6);
                    return super.internalDivide(v3, 1000);
                }
                case ElectricPotentialChangeRateUnits.MegavoltsPerMicroseconds: {
                    const v3 = super.internalDivide(this.value, 1E6);
                    return super.internalDivide(v3, 1000000);
                }
                case ElectricPotentialChangeRateUnits.MicrovoltsPerMinutes: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 0.000001);
                }
                case ElectricPotentialChangeRateUnits.MillivoltsPerMinutes: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 0.001);
                }
                case ElectricPotentialChangeRateUnits.KilovoltsPerMinutes: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 1000);
                }
                case ElectricPotentialChangeRateUnits.MegavoltsPerMinutes: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 1000000);
                }
                case ElectricPotentialChangeRateUnits.MicrovoltsPerHours: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 0.000001);
                }
                case ElectricPotentialChangeRateUnits.MillivoltsPerHours: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 0.001);
                }
                case ElectricPotentialChangeRateUnits.KilovoltsPerHours: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 1000);
                }
                case ElectricPotentialChangeRateUnits.MegavoltsPerHours: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricPotentialChangeRateUnits.VoltsPerSeconds: return this.value;
            case ElectricPotentialChangeRateUnits.VoltsPerMicroseconds: return this.value / 1E6;
            case ElectricPotentialChangeRateUnits.VoltsPerMinutes: return this.value * 60;
            case ElectricPotentialChangeRateUnits.VoltsPerHours: return this.value * 3600;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerSeconds: return (this.value) / 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerSeconds: return (this.value) / 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerSeconds: return (this.value) / 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerSeconds: return (this.value) / 1000000;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMicroseconds: return (this.value / 1E6) / 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMicroseconds: return (this.value / 1E6) / 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMicroseconds: return (this.value / 1E6) / 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMicroseconds: return (this.value / 1E6) / 1000000;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMinutes: return (this.value * 60) / 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMinutes: return (this.value * 60) / 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMinutes: return (this.value * 60) / 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMinutes: return (this.value * 60) / 1000000;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerHours: return (this.value * 3600) / 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerHours: return (this.value * 3600) / 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerHours: return (this.value * 3600) / 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerHours: return (this.value * 3600) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricPotentialChangeRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricPotentialChangeRateUnits.VoltsPerSeconds: return value;
                case ElectricPotentialChangeRateUnits.VoltsPerMicroseconds: return super.internalMultiply(value, 1E6);
                case ElectricPotentialChangeRateUnits.VoltsPerMinutes: return super.internalDivide(value, 60);
                case ElectricPotentialChangeRateUnits.VoltsPerHours: return super.internalDivide(value, 3600);
                case ElectricPotentialChangeRateUnits.MicrovoltsPerSeconds: return super.internalMultiply(value, 0.000001);
                case ElectricPotentialChangeRateUnits.MillivoltsPerSeconds: return super.internalMultiply(value, 0.001);
                case ElectricPotentialChangeRateUnits.KilovoltsPerSeconds: return super.internalMultiply(value, 1000);
                case ElectricPotentialChangeRateUnits.MegavoltsPerSeconds: return super.internalMultiply(value, 1000000);
                case ElectricPotentialChangeRateUnits.MicrovoltsPerMicroseconds: {
                    const v3 = super.internalMultiply(value, 1E6);
                    return super.internalMultiply(v3, 0.000001);
                }
                case ElectricPotentialChangeRateUnits.MillivoltsPerMicroseconds: {
                    const v3 = super.internalMultiply(value, 1E6);
                    return super.internalMultiply(v3, 0.001);
                }
                case ElectricPotentialChangeRateUnits.KilovoltsPerMicroseconds: {
                    const v3 = super.internalMultiply(value, 1E6);
                    return super.internalMultiply(v3, 1000);
                }
                case ElectricPotentialChangeRateUnits.MegavoltsPerMicroseconds: {
                    const v3 = super.internalMultiply(value, 1E6);
                    return super.internalMultiply(v3, 1000000);
                }
                case ElectricPotentialChangeRateUnits.MicrovoltsPerMinutes: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 0.000001);
                }
                case ElectricPotentialChangeRateUnits.MillivoltsPerMinutes: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 0.001);
                }
                case ElectricPotentialChangeRateUnits.KilovoltsPerMinutes: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 1000);
                }
                case ElectricPotentialChangeRateUnits.MegavoltsPerMinutes: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 1000000);
                }
                case ElectricPotentialChangeRateUnits.MicrovoltsPerHours: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 0.000001);
                }
                case ElectricPotentialChangeRateUnits.MillivoltsPerHours: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 0.001);
                }
                case ElectricPotentialChangeRateUnits.KilovoltsPerHours: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 1000);
                }
                case ElectricPotentialChangeRateUnits.MegavoltsPerHours: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricPotentialChangeRateUnits.VoltsPerSeconds: return value;
            case ElectricPotentialChangeRateUnits.VoltsPerMicroseconds: return value * 1E6;
            case ElectricPotentialChangeRateUnits.VoltsPerMinutes: return value / 60;
            case ElectricPotentialChangeRateUnits.VoltsPerHours: return value / 3600;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerSeconds: return (value) * 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerSeconds: return (value) * 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerSeconds: return (value) * 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerSeconds: return (value) * 1000000;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMicroseconds: return (value * 1E6) * 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMicroseconds: return (value * 1E6) * 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMicroseconds: return (value * 1E6) * 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMicroseconds: return (value * 1E6) * 1000000;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMinutes: return (value / 60) * 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMinutes: return (value / 60) * 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMinutes: return (value / 60) * 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMinutes: return (value / 60) * 1000000;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerHours: return (value / 3600) * 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerHours: return (value / 3600) * 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerHours: return (value / 3600) * 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerHours: return (value / 3600) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricPotentialChangeRate to string.
     * Note! the default format for ElectricPotentialChangeRate is VoltsPerSeconds.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricPotentialChangeRate.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricPotentialChangeRate.
     */
    public toString(unit: ElectricPotentialChangeRateUnits = ElectricPotentialChangeRateUnits.VoltsPerSeconds, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricPotentialChangeRateUnits.VoltsPerSeconds:
                return super.truncateFractionDigits(this.VoltsPerSeconds, options as ToStringOptions) + ` V/s`;
            case ElectricPotentialChangeRateUnits.VoltsPerMicroseconds:
                return super.truncateFractionDigits(this.VoltsPerMicroseconds, options as ToStringOptions) + ` V/μs`;
            case ElectricPotentialChangeRateUnits.VoltsPerMinutes:
                return super.truncateFractionDigits(this.VoltsPerMinutes, options as ToStringOptions) + ` V/min`;
            case ElectricPotentialChangeRateUnits.VoltsPerHours:
                return super.truncateFractionDigits(this.VoltsPerHours, options as ToStringOptions) + ` V/h`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerSeconds:
                return super.truncateFractionDigits(this.MicrovoltsPerSeconds, options as ToStringOptions) + ` μV/s`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerSeconds:
                return super.truncateFractionDigits(this.MillivoltsPerSeconds, options as ToStringOptions) + ` mV/s`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerSeconds:
                return super.truncateFractionDigits(this.KilovoltsPerSeconds, options as ToStringOptions) + ` kV/s`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerSeconds:
                return super.truncateFractionDigits(this.MegavoltsPerSeconds, options as ToStringOptions) + ` MV/s`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMicroseconds:
                return super.truncateFractionDigits(this.MicrovoltsPerMicroseconds, options as ToStringOptions) + ` μV/μs`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMicroseconds:
                return super.truncateFractionDigits(this.MillivoltsPerMicroseconds, options as ToStringOptions) + ` mV/μs`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMicroseconds:
                return super.truncateFractionDigits(this.KilovoltsPerMicroseconds, options as ToStringOptions) + ` kV/μs`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMicroseconds:
                return super.truncateFractionDigits(this.MegavoltsPerMicroseconds, options as ToStringOptions) + ` MV/μs`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMinutes:
                return super.truncateFractionDigits(this.MicrovoltsPerMinutes, options as ToStringOptions) + ` μV/min`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMinutes:
                return super.truncateFractionDigits(this.MillivoltsPerMinutes, options as ToStringOptions) + ` mV/min`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMinutes:
                return super.truncateFractionDigits(this.KilovoltsPerMinutes, options as ToStringOptions) + ` kV/min`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMinutes:
                return super.truncateFractionDigits(this.MegavoltsPerMinutes, options as ToStringOptions) + ` MV/min`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerHours:
                return super.truncateFractionDigits(this.MicrovoltsPerHours, options as ToStringOptions) + ` μV/h`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerHours:
                return super.truncateFractionDigits(this.MillivoltsPerHours, options as ToStringOptions) + ` mV/h`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerHours:
                return super.truncateFractionDigits(this.KilovoltsPerHours, options as ToStringOptions) + ` kV/h`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerHours:
                return super.truncateFractionDigits(this.MegavoltsPerHours, options as ToStringOptions) + ` MV/h`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricPotentialChangeRate unit abbreviation.
     * Note! the default abbreviation for ElectricPotentialChangeRate is VoltsPerSeconds.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricPotentialChangeRate.
     * @returns The abbreviation string of ElectricPotentialChangeRate.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricPotentialChangeRateUnits = ElectricPotentialChangeRateUnits.VoltsPerSeconds): string {

        switch (unitAbbreviation) {
            
            case ElectricPotentialChangeRateUnits.VoltsPerSeconds:
                return `V/s`;
            case ElectricPotentialChangeRateUnits.VoltsPerMicroseconds:
                return `V/μs`;
            case ElectricPotentialChangeRateUnits.VoltsPerMinutes:
                return `V/min`;
            case ElectricPotentialChangeRateUnits.VoltsPerHours:
                return `V/h`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerSeconds:
                return `μV/s`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerSeconds:
                return `mV/s`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerSeconds:
                return `kV/s`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerSeconds:
                return `MV/s`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMicroseconds:
                return `μV/μs`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMicroseconds:
                return `mV/μs`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMicroseconds:
                return `kV/μs`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMicroseconds:
                return `MV/μs`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMinutes:
                return `μV/min`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMinutes:
                return `mV/min`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMinutes:
                return `kV/min`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMinutes:
                return `MV/min`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerHours:
                return `μV/h`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerHours:
                return `mV/h`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerHours:
                return `kV/h`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerHours:
                return `MV/h`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricPotentialChangeRate are equals to the current ElectricPotentialChangeRate.
     * @param electricPotentialChangeRate The other ElectricPotentialChangeRate.
     * @returns True if the given ElectricPotentialChangeRate are equal to the current ElectricPotentialChangeRate.
     */
    public equals(electricPotentialChangeRate: ElectricPotentialChangeRate): boolean {
        return super.internalEquals(this.value, electricPotentialChangeRate.BaseValue);
    }

    /**
     * Compare the given ElectricPotentialChangeRate against the current ElectricPotentialChangeRate.
     * @param electricPotentialChangeRate The other ElectricPotentialChangeRate.
     * @returns 0 if they are equal, -1 if the current ElectricPotentialChangeRate is less then other, 1 if the current ElectricPotentialChangeRate is greater then other.
     */
    public compareTo(electricPotentialChangeRate: ElectricPotentialChangeRate): number {
        return super.internalCompareTo(this.value, electricPotentialChangeRate.BaseValue);
    }

    /**
     * Add the given ElectricPotentialChangeRate with the current ElectricPotentialChangeRate.
     * @param electricPotentialChangeRate The other ElectricPotentialChangeRate.
     * @returns A new ElectricPotentialChangeRate instance with the results.
     */
    public add(electricPotentialChangeRate: ElectricPotentialChangeRate): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(super.internalAdd(this.value, electricPotentialChangeRate.BaseValue))
    }

    /**
     * Subtract the given ElectricPotentialChangeRate with the current ElectricPotentialChangeRate.
     * @param electricPotentialChangeRate The other ElectricPotentialChangeRate.
     * @returns A new ElectricPotentialChangeRate instance with the results.
     */
    public subtract(electricPotentialChangeRate: ElectricPotentialChangeRate): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(super.internalSubtract(this.value, electricPotentialChangeRate.BaseValue))
    }

    /**
     * Multiply the given ElectricPotentialChangeRate with the current ElectricPotentialChangeRate.
     * @param electricPotentialChangeRate The other ElectricPotentialChangeRate.
     * @returns A new ElectricPotentialChangeRate instance with the results.
     */
    public multiply(electricPotentialChangeRate: ElectricPotentialChangeRate): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(super.internalMultiply(this.value, electricPotentialChangeRate.BaseValue))
    }

    /**
     * Divide the given ElectricPotentialChangeRate with the current ElectricPotentialChangeRate.
     * @param electricPotentialChangeRate The other ElectricPotentialChangeRate.
     * @returns A new ElectricPotentialChangeRate instance with the results.
     */
    public divide(electricPotentialChangeRate: ElectricPotentialChangeRate): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(super.internalDivide(this.value, electricPotentialChangeRate.BaseValue))
    }

    /**
     * Modulo the given ElectricPotentialChangeRate with the current ElectricPotentialChangeRate.
     * @param electricPotentialChangeRate The other ElectricPotentialChangeRate.
     * @returns A new ElectricPotentialChangeRate instance with the results.
     */
    public modulo(electricPotentialChangeRate: ElectricPotentialChangeRate): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(super.internalModulo(this.value, electricPotentialChangeRate.BaseValue))
    }

    /**
     * Pow the given ElectricPotentialChangeRate with the current ElectricPotentialChangeRate.
     * @param electricPotentialChangeRate The other ElectricPotentialChangeRate.
     * @returns A new ElectricPotentialChangeRate instance with the results.
     */
    public pow(electricPotentialChangeRate: ElectricPotentialChangeRate): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(super.internalPow(this.value, electricPotentialChangeRate.BaseValue))
    }
}
