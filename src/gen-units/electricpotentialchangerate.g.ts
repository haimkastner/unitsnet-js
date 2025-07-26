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
    VoltsPerSecond = "VoltPerSecond",
    /** */
    VoltsPerMicrosecond = "VoltPerMicrosecond",
    /** */
    VoltsPerMinute = "VoltPerMinute",
    /** */
    VoltsPerHour = "VoltPerHour",
    /** */
    MicrovoltsPerSecond = "MicrovoltPerSecond",
    /** */
    MillivoltsPerSecond = "MillivoltPerSecond",
    /** */
    KilovoltsPerSecond = "KilovoltPerSecond",
    /** */
    MegavoltsPerSecond = "MegavoltPerSecond",
    /** */
    MicrovoltsPerMicrosecond = "MicrovoltPerMicrosecond",
    /** */
    MillivoltsPerMicrosecond = "MillivoltPerMicrosecond",
    /** */
    KilovoltsPerMicrosecond = "KilovoltPerMicrosecond",
    /** */
    MegavoltsPerMicrosecond = "MegavoltPerMicrosecond",
    /** */
    MicrovoltsPerMinute = "MicrovoltPerMinute",
    /** */
    MillivoltsPerMinute = "MillivoltPerMinute",
    /** */
    KilovoltsPerMinute = "KilovoltPerMinute",
    /** */
    MegavoltsPerMinute = "MegavoltPerMinute",
    /** */
    MicrovoltsPerHour = "MicrovoltPerHour",
    /** */
    MillivoltsPerHour = "MillivoltPerHour",
    /** */
    KilovoltsPerHour = "KilovoltPerHour",
    /** */
    MegavoltsPerHour = "MegavoltPerHour"
}

/** ElectricPotential change rate is the ratio of the electric potential change to the time during which the change occurred (value of electric potential changes per unit time). */
export class ElectricPotentialChangeRate extends BaseUnit {
    protected value: number;
    private voltspersecondLazy: number | null = null;
    private voltspermicrosecondLazy: number | null = null;
    private voltsperminuteLazy: number | null = null;
    private voltsperhourLazy: number | null = null;
    private microvoltspersecondLazy: number | null = null;
    private millivoltspersecondLazy: number | null = null;
    private kilovoltspersecondLazy: number | null = null;
    private megavoltspersecondLazy: number | null = null;
    private microvoltspermicrosecondLazy: number | null = null;
    private millivoltspermicrosecondLazy: number | null = null;
    private kilovoltspermicrosecondLazy: number | null = null;
    private megavoltspermicrosecondLazy: number | null = null;
    private microvoltsperminuteLazy: number | null = null;
    private millivoltsperminuteLazy: number | null = null;
    private kilovoltsperminuteLazy: number | null = null;
    private megavoltsperminuteLazy: number | null = null;
    private microvoltsperhourLazy: number | null = null;
    private millivoltsperhourLazy: number | null = null;
    private kilovoltsperhourLazy: number | null = null;
    private megavoltsperhourLazy: number | null = null;

    /**
     * Create a new ElectricPotentialChangeRate.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotentialChangeRate’ unit to create from.
     * The default unit is VoltsPerSecond
     */
    public constructor(value: number, fromUnit: ElectricPotentialChangeRateUnits = ElectricPotentialChangeRateUnits.VoltsPerSecond) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricPotentialChangeRate is VoltsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricPotentialChangeRateUnits.VoltsPerSecond {
        return ElectricPotentialChangeRateUnits.VoltsPerSecond
    }

    /** */
    public get VoltsPerSecond(): number {
        if(this.voltspersecondLazy !== null){
            return this.voltspersecondLazy;
        }
        return this.voltspersecondLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.VoltsPerSecond);
    }

    /** */
    public get VoltsPerMicrosecond(): number {
        if(this.voltspermicrosecondLazy !== null){
            return this.voltspermicrosecondLazy;
        }
        return this.voltspermicrosecondLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.VoltsPerMicrosecond);
    }

    /** */
    public get VoltsPerMinute(): number {
        if(this.voltsperminuteLazy !== null){
            return this.voltsperminuteLazy;
        }
        return this.voltsperminuteLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.VoltsPerMinute);
    }

    /** */
    public get VoltsPerHour(): number {
        if(this.voltsperhourLazy !== null){
            return this.voltsperhourLazy;
        }
        return this.voltsperhourLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.VoltsPerHour);
    }

    /** */
    public get MicrovoltsPerSecond(): number {
        if(this.microvoltspersecondLazy !== null){
            return this.microvoltspersecondLazy;
        }
        return this.microvoltspersecondLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MicrovoltsPerSecond);
    }

    /** */
    public get MillivoltsPerSecond(): number {
        if(this.millivoltspersecondLazy !== null){
            return this.millivoltspersecondLazy;
        }
        return this.millivoltspersecondLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MillivoltsPerSecond);
    }

    /** */
    public get KilovoltsPerSecond(): number {
        if(this.kilovoltspersecondLazy !== null){
            return this.kilovoltspersecondLazy;
        }
        return this.kilovoltspersecondLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.KilovoltsPerSecond);
    }

    /** */
    public get MegavoltsPerSecond(): number {
        if(this.megavoltspersecondLazy !== null){
            return this.megavoltspersecondLazy;
        }
        return this.megavoltspersecondLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MegavoltsPerSecond);
    }

    /** */
    public get MicrovoltsPerMicrosecond(): number {
        if(this.microvoltspermicrosecondLazy !== null){
            return this.microvoltspermicrosecondLazy;
        }
        return this.microvoltspermicrosecondLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MicrovoltsPerMicrosecond);
    }

    /** */
    public get MillivoltsPerMicrosecond(): number {
        if(this.millivoltspermicrosecondLazy !== null){
            return this.millivoltspermicrosecondLazy;
        }
        return this.millivoltspermicrosecondLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MillivoltsPerMicrosecond);
    }

    /** */
    public get KilovoltsPerMicrosecond(): number {
        if(this.kilovoltspermicrosecondLazy !== null){
            return this.kilovoltspermicrosecondLazy;
        }
        return this.kilovoltspermicrosecondLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.KilovoltsPerMicrosecond);
    }

    /** */
    public get MegavoltsPerMicrosecond(): number {
        if(this.megavoltspermicrosecondLazy !== null){
            return this.megavoltspermicrosecondLazy;
        }
        return this.megavoltspermicrosecondLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MegavoltsPerMicrosecond);
    }

    /** */
    public get MicrovoltsPerMinute(): number {
        if(this.microvoltsperminuteLazy !== null){
            return this.microvoltsperminuteLazy;
        }
        return this.microvoltsperminuteLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MicrovoltsPerMinute);
    }

    /** */
    public get MillivoltsPerMinute(): number {
        if(this.millivoltsperminuteLazy !== null){
            return this.millivoltsperminuteLazy;
        }
        return this.millivoltsperminuteLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MillivoltsPerMinute);
    }

    /** */
    public get KilovoltsPerMinute(): number {
        if(this.kilovoltsperminuteLazy !== null){
            return this.kilovoltsperminuteLazy;
        }
        return this.kilovoltsperminuteLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.KilovoltsPerMinute);
    }

    /** */
    public get MegavoltsPerMinute(): number {
        if(this.megavoltsperminuteLazy !== null){
            return this.megavoltsperminuteLazy;
        }
        return this.megavoltsperminuteLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MegavoltsPerMinute);
    }

    /** */
    public get MicrovoltsPerHour(): number {
        if(this.microvoltsperhourLazy !== null){
            return this.microvoltsperhourLazy;
        }
        return this.microvoltsperhourLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MicrovoltsPerHour);
    }

    /** */
    public get MillivoltsPerHour(): number {
        if(this.millivoltsperhourLazy !== null){
            return this.millivoltsperhourLazy;
        }
        return this.millivoltsperhourLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MillivoltsPerHour);
    }

    /** */
    public get KilovoltsPerHour(): number {
        if(this.kilovoltsperhourLazy !== null){
            return this.kilovoltsperhourLazy;
        }
        return this.kilovoltsperhourLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.KilovoltsPerHour);
    }

    /** */
    public get MegavoltsPerHour(): number {
        if(this.megavoltsperhourLazy !== null){
            return this.megavoltsperhourLazy;
        }
        return this.megavoltsperhourLazy = this.convertFromBase(ElectricPotentialChangeRateUnits.MegavoltsPerHour);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a VoltsPerSecond
     *
     * @param value The unit as VoltsPerSecond to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromVoltsPerSecond(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.VoltsPerSecond);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a VoltsPerMicrosecond
     *
     * @param value The unit as VoltsPerMicrosecond to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromVoltsPerMicrosecond(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.VoltsPerMicrosecond);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a VoltsPerMinute
     *
     * @param value The unit as VoltsPerMinute to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromVoltsPerMinute(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.VoltsPerMinute);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a VoltsPerHour
     *
     * @param value The unit as VoltsPerHour to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromVoltsPerHour(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.VoltsPerHour);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MicrovoltsPerSecond
     *
     * @param value The unit as MicrovoltsPerSecond to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMicrovoltsPerSecond(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MicrovoltsPerSecond);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MillivoltsPerSecond
     *
     * @param value The unit as MillivoltsPerSecond to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMillivoltsPerSecond(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MillivoltsPerSecond);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a KilovoltsPerSecond
     *
     * @param value The unit as KilovoltsPerSecond to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromKilovoltsPerSecond(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.KilovoltsPerSecond);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MegavoltsPerSecond
     *
     * @param value The unit as MegavoltsPerSecond to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMegavoltsPerSecond(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MegavoltsPerSecond);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MicrovoltsPerMicrosecond
     *
     * @param value The unit as MicrovoltsPerMicrosecond to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMicrovoltsPerMicrosecond(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MicrovoltsPerMicrosecond);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MillivoltsPerMicrosecond
     *
     * @param value The unit as MillivoltsPerMicrosecond to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMillivoltsPerMicrosecond(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MillivoltsPerMicrosecond);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a KilovoltsPerMicrosecond
     *
     * @param value The unit as KilovoltsPerMicrosecond to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromKilovoltsPerMicrosecond(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.KilovoltsPerMicrosecond);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MegavoltsPerMicrosecond
     *
     * @param value The unit as MegavoltsPerMicrosecond to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMegavoltsPerMicrosecond(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MegavoltsPerMicrosecond);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MicrovoltsPerMinute
     *
     * @param value The unit as MicrovoltsPerMinute to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMicrovoltsPerMinute(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MicrovoltsPerMinute);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MillivoltsPerMinute
     *
     * @param value The unit as MillivoltsPerMinute to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMillivoltsPerMinute(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MillivoltsPerMinute);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a KilovoltsPerMinute
     *
     * @param value The unit as KilovoltsPerMinute to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromKilovoltsPerMinute(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.KilovoltsPerMinute);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MegavoltsPerMinute
     *
     * @param value The unit as MegavoltsPerMinute to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMegavoltsPerMinute(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MegavoltsPerMinute);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MicrovoltsPerHour
     *
     * @param value The unit as MicrovoltsPerHour to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMicrovoltsPerHour(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MicrovoltsPerHour);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MillivoltsPerHour
     *
     * @param value The unit as MillivoltsPerHour to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMillivoltsPerHour(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MillivoltsPerHour);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a KilovoltsPerHour
     *
     * @param value The unit as KilovoltsPerHour to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromKilovoltsPerHour(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.KilovoltsPerHour);
    }

    /**
     * Create a new ElectricPotentialChangeRate instance from a MegavoltsPerHour
     *
     * @param value The unit as MegavoltsPerHour to create a new ElectricPotentialChangeRate from.
     * @returns The new ElectricPotentialChangeRate instance.
     */
    public static FromMegavoltsPerHour(value: number): ElectricPotentialChangeRate {
        return new ElectricPotentialChangeRate(value, ElectricPotentialChangeRateUnits.MegavoltsPerHour);
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
    protected static getBaseUnit(): ElectricPotentialChangeRateUnits.VoltsPerSecond {
        return ElectricPotentialChangeRateUnits.VoltsPerSecond;
    }

    /**
     * Create API DTO represent a ElectricPotentialChangeRate unit.
     * @param holdInUnit The specific ElectricPotentialChangeRate unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricPotentialChangeRateUnits = ElectricPotentialChangeRateUnits.VoltsPerSecond): ElectricPotentialChangeRateDto {
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
            case ElectricPotentialChangeRateUnits.VoltsPerSecond: return this.VoltsPerSecond;
            case ElectricPotentialChangeRateUnits.VoltsPerMicrosecond: return this.VoltsPerMicrosecond;
            case ElectricPotentialChangeRateUnits.VoltsPerMinute: return this.VoltsPerMinute;
            case ElectricPotentialChangeRateUnits.VoltsPerHour: return this.VoltsPerHour;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerSecond: return this.MicrovoltsPerSecond;
            case ElectricPotentialChangeRateUnits.MillivoltsPerSecond: return this.MillivoltsPerSecond;
            case ElectricPotentialChangeRateUnits.KilovoltsPerSecond: return this.KilovoltsPerSecond;
            case ElectricPotentialChangeRateUnits.MegavoltsPerSecond: return this.MegavoltsPerSecond;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMicrosecond: return this.MicrovoltsPerMicrosecond;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMicrosecond: return this.MillivoltsPerMicrosecond;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMicrosecond: return this.KilovoltsPerMicrosecond;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMicrosecond: return this.MegavoltsPerMicrosecond;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMinute: return this.MicrovoltsPerMinute;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMinute: return this.MillivoltsPerMinute;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMinute: return this.KilovoltsPerMinute;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMinute: return this.MegavoltsPerMinute;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerHour: return this.MicrovoltsPerHour;
            case ElectricPotentialChangeRateUnits.MillivoltsPerHour: return this.MillivoltsPerHour;
            case ElectricPotentialChangeRateUnits.KilovoltsPerHour: return this.KilovoltsPerHour;
            case ElectricPotentialChangeRateUnits.MegavoltsPerHour: return this.MegavoltsPerHour;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricPotentialChangeRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricPotentialChangeRateUnits.VoltsPerSecond: return this.value;
                case ElectricPotentialChangeRateUnits.VoltsPerMicrosecond: return super.internalDivide(this.value, 1E6);
                case ElectricPotentialChangeRateUnits.VoltsPerMinute: return super.internalMultiply(this.value, 60);
                case ElectricPotentialChangeRateUnits.VoltsPerHour: return super.internalMultiply(this.value, 3600);
                case ElectricPotentialChangeRateUnits.MicrovoltsPerSecond: return super.internalDivide(this.value, 0.000001);
                case ElectricPotentialChangeRateUnits.MillivoltsPerSecond: return super.internalDivide(this.value, 0.001);
                case ElectricPotentialChangeRateUnits.KilovoltsPerSecond: return super.internalDivide(this.value, 1000);
                case ElectricPotentialChangeRateUnits.MegavoltsPerSecond: return super.internalDivide(this.value, 1000000);
                case ElectricPotentialChangeRateUnits.MicrovoltsPerMicrosecond: {
                    const v3 = super.internalDivide(this.value, 1E6);
                    return super.internalDivide(v3, 0.000001);
                }
                case ElectricPotentialChangeRateUnits.MillivoltsPerMicrosecond: {
                    const v3 = super.internalDivide(this.value, 1E6);
                    return super.internalDivide(v3, 0.001);
                }
                case ElectricPotentialChangeRateUnits.KilovoltsPerMicrosecond: {
                    const v3 = super.internalDivide(this.value, 1E6);
                    return super.internalDivide(v3, 1000);
                }
                case ElectricPotentialChangeRateUnits.MegavoltsPerMicrosecond: {
                    const v3 = super.internalDivide(this.value, 1E6);
                    return super.internalDivide(v3, 1000000);
                }
                case ElectricPotentialChangeRateUnits.MicrovoltsPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 0.000001);
                }
                case ElectricPotentialChangeRateUnits.MillivoltsPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 0.001);
                }
                case ElectricPotentialChangeRateUnits.KilovoltsPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 1000);
                }
                case ElectricPotentialChangeRateUnits.MegavoltsPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 1000000);
                }
                case ElectricPotentialChangeRateUnits.MicrovoltsPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 0.000001);
                }
                case ElectricPotentialChangeRateUnits.MillivoltsPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 0.001);
                }
                case ElectricPotentialChangeRateUnits.KilovoltsPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 1000);
                }
                case ElectricPotentialChangeRateUnits.MegavoltsPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricPotentialChangeRateUnits.VoltsPerSecond: return this.value;
            case ElectricPotentialChangeRateUnits.VoltsPerMicrosecond: return this.value / 1E6;
            case ElectricPotentialChangeRateUnits.VoltsPerMinute: return this.value * 60;
            case ElectricPotentialChangeRateUnits.VoltsPerHour: return this.value * 3600;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerSecond: return (this.value) / 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerSecond: return (this.value) / 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerSecond: return (this.value) / 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerSecond: return (this.value) / 1000000;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMicrosecond: return (this.value / 1E6) / 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMicrosecond: return (this.value / 1E6) / 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMicrosecond: return (this.value / 1E6) / 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMicrosecond: return (this.value / 1E6) / 1000000;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMinute: return (this.value * 60) / 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMinute: return (this.value * 60) / 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMinute: return (this.value * 60) / 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMinute: return (this.value * 60) / 1000000;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerHour: return (this.value * 3600) / 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerHour: return (this.value * 3600) / 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerHour: return (this.value * 3600) / 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerHour: return (this.value * 3600) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricPotentialChangeRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricPotentialChangeRateUnits.VoltsPerSecond: return value;
                case ElectricPotentialChangeRateUnits.VoltsPerMicrosecond: return super.internalMultiply(value, 1E6);
                case ElectricPotentialChangeRateUnits.VoltsPerMinute: return super.internalDivide(value, 60);
                case ElectricPotentialChangeRateUnits.VoltsPerHour: return super.internalDivide(value, 3600);
                case ElectricPotentialChangeRateUnits.MicrovoltsPerSecond: return super.internalMultiply(value, 0.000001);
                case ElectricPotentialChangeRateUnits.MillivoltsPerSecond: return super.internalMultiply(value, 0.001);
                case ElectricPotentialChangeRateUnits.KilovoltsPerSecond: return super.internalMultiply(value, 1000);
                case ElectricPotentialChangeRateUnits.MegavoltsPerSecond: return super.internalMultiply(value, 1000000);
                case ElectricPotentialChangeRateUnits.MicrovoltsPerMicrosecond: {
                    const v3 = super.internalMultiply(value, 1E6);
                    return super.internalMultiply(v3, 0.000001);
                }
                case ElectricPotentialChangeRateUnits.MillivoltsPerMicrosecond: {
                    const v3 = super.internalMultiply(value, 1E6);
                    return super.internalMultiply(v3, 0.001);
                }
                case ElectricPotentialChangeRateUnits.KilovoltsPerMicrosecond: {
                    const v3 = super.internalMultiply(value, 1E6);
                    return super.internalMultiply(v3, 1000);
                }
                case ElectricPotentialChangeRateUnits.MegavoltsPerMicrosecond: {
                    const v3 = super.internalMultiply(value, 1E6);
                    return super.internalMultiply(v3, 1000000);
                }
                case ElectricPotentialChangeRateUnits.MicrovoltsPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 0.000001);
                }
                case ElectricPotentialChangeRateUnits.MillivoltsPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 0.001);
                }
                case ElectricPotentialChangeRateUnits.KilovoltsPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 1000);
                }
                case ElectricPotentialChangeRateUnits.MegavoltsPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 1000000);
                }
                case ElectricPotentialChangeRateUnits.MicrovoltsPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 0.000001);
                }
                case ElectricPotentialChangeRateUnits.MillivoltsPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 0.001);
                }
                case ElectricPotentialChangeRateUnits.KilovoltsPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 1000);
                }
                case ElectricPotentialChangeRateUnits.MegavoltsPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricPotentialChangeRateUnits.VoltsPerSecond: return value;
            case ElectricPotentialChangeRateUnits.VoltsPerMicrosecond: return value * 1E6;
            case ElectricPotentialChangeRateUnits.VoltsPerMinute: return value / 60;
            case ElectricPotentialChangeRateUnits.VoltsPerHour: return value / 3600;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerSecond: return (value) * 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerSecond: return (value) * 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerSecond: return (value) * 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerSecond: return (value) * 1000000;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMicrosecond: return (value * 1E6) * 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMicrosecond: return (value * 1E6) * 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMicrosecond: return (value * 1E6) * 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMicrosecond: return (value * 1E6) * 1000000;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMinute: return (value / 60) * 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMinute: return (value / 60) * 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMinute: return (value / 60) * 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMinute: return (value / 60) * 1000000;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerHour: return (value / 3600) * 0.000001;
            case ElectricPotentialChangeRateUnits.MillivoltsPerHour: return (value / 3600) * 0.001;
            case ElectricPotentialChangeRateUnits.KilovoltsPerHour: return (value / 3600) * 1000;
            case ElectricPotentialChangeRateUnits.MegavoltsPerHour: return (value / 3600) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricPotentialChangeRate to string.
     * Note! the default format for ElectricPotentialChangeRate is VoltsPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricPotentialChangeRate.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricPotentialChangeRate.
     */
    public toString(unit: ElectricPotentialChangeRateUnits = ElectricPotentialChangeRateUnits.VoltsPerSecond, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricPotentialChangeRateUnits.VoltsPerSecond:
                return super.truncateFractionDigits(this.VoltsPerSecond, options as ToStringOptions) + ` V/s`;
            case ElectricPotentialChangeRateUnits.VoltsPerMicrosecond:
                return super.truncateFractionDigits(this.VoltsPerMicrosecond, options as ToStringOptions) + ` V/μs`;
            case ElectricPotentialChangeRateUnits.VoltsPerMinute:
                return super.truncateFractionDigits(this.VoltsPerMinute, options as ToStringOptions) + ` V/min`;
            case ElectricPotentialChangeRateUnits.VoltsPerHour:
                return super.truncateFractionDigits(this.VoltsPerHour, options as ToStringOptions) + ` V/h`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerSecond:
                return super.truncateFractionDigits(this.MicrovoltsPerSecond, options as ToStringOptions) + ` μV/s`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerSecond:
                return super.truncateFractionDigits(this.MillivoltsPerSecond, options as ToStringOptions) + ` mV/s`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerSecond:
                return super.truncateFractionDigits(this.KilovoltsPerSecond, options as ToStringOptions) + ` kV/s`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerSecond:
                return super.truncateFractionDigits(this.MegavoltsPerSecond, options as ToStringOptions) + ` MV/s`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMicrosecond:
                return super.truncateFractionDigits(this.MicrovoltsPerMicrosecond, options as ToStringOptions) + ` μV/μs`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMicrosecond:
                return super.truncateFractionDigits(this.MillivoltsPerMicrosecond, options as ToStringOptions) + ` mV/μs`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMicrosecond:
                return super.truncateFractionDigits(this.KilovoltsPerMicrosecond, options as ToStringOptions) + ` kV/μs`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMicrosecond:
                return super.truncateFractionDigits(this.MegavoltsPerMicrosecond, options as ToStringOptions) + ` MV/μs`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMinute:
                return super.truncateFractionDigits(this.MicrovoltsPerMinute, options as ToStringOptions) + ` μV/min`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMinute:
                return super.truncateFractionDigits(this.MillivoltsPerMinute, options as ToStringOptions) + ` mV/min`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMinute:
                return super.truncateFractionDigits(this.KilovoltsPerMinute, options as ToStringOptions) + ` kV/min`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMinute:
                return super.truncateFractionDigits(this.MegavoltsPerMinute, options as ToStringOptions) + ` MV/min`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerHour:
                return super.truncateFractionDigits(this.MicrovoltsPerHour, options as ToStringOptions) + ` μV/h`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerHour:
                return super.truncateFractionDigits(this.MillivoltsPerHour, options as ToStringOptions) + ` mV/h`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerHour:
                return super.truncateFractionDigits(this.KilovoltsPerHour, options as ToStringOptions) + ` kV/h`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerHour:
                return super.truncateFractionDigits(this.MegavoltsPerHour, options as ToStringOptions) + ` MV/h`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricPotentialChangeRate unit abbreviation.
     * Note! the default abbreviation for ElectricPotentialChangeRate is VoltsPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricPotentialChangeRate.
     * @returns The abbreviation string of ElectricPotentialChangeRate.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricPotentialChangeRateUnits = ElectricPotentialChangeRateUnits.VoltsPerSecond): string {

        switch (unitAbbreviation) {
            
            case ElectricPotentialChangeRateUnits.VoltsPerSecond:
                return `V/s`;
            case ElectricPotentialChangeRateUnits.VoltsPerMicrosecond:
                return `V/μs`;
            case ElectricPotentialChangeRateUnits.VoltsPerMinute:
                return `V/min`;
            case ElectricPotentialChangeRateUnits.VoltsPerHour:
                return `V/h`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerSecond:
                return `μV/s`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerSecond:
                return `mV/s`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerSecond:
                return `kV/s`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerSecond:
                return `MV/s`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMicrosecond:
                return `μV/μs`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMicrosecond:
                return `mV/μs`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMicrosecond:
                return `kV/μs`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMicrosecond:
                return `MV/μs`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerMinute:
                return `μV/min`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerMinute:
                return `mV/min`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerMinute:
                return `kV/min`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerMinute:
                return `MV/min`;
            case ElectricPotentialChangeRateUnits.MicrovoltsPerHour:
                return `μV/h`;
            case ElectricPotentialChangeRateUnits.MillivoltsPerHour:
                return `mV/h`;
            case ElectricPotentialChangeRateUnits.KilovoltsPerHour:
                return `kV/h`;
            case ElectricPotentialChangeRateUnits.MegavoltsPerHour:
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
