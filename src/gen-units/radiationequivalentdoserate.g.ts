import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a RadiationEquivalentDoseRate */
export interface RadiationEquivalentDoseRateDto {
    /** The value of the RadiationEquivalentDoseRate */
    value: number;
    /**  The specific unit that the RadiationEquivalentDoseRate value is representing */
    unit: RadiationEquivalentDoseRateUnits;
}

/** RadiationEquivalentDoseRateUnits enumeration */
export enum RadiationEquivalentDoseRateUnits {
    /** */
    SievertsPerHour = "SievertPerHour",
    /** */
    SievertsPerSecond = "SievertPerSecond",
    /** */
    RoentgensEquivalentManPerHour = "RoentgenEquivalentManPerHour",
    /** */
    NanosievertsPerHour = "NanosievertPerHour",
    /** */
    MicrosievertsPerHour = "MicrosievertPerHour",
    /** */
    MillisievertsPerHour = "MillisievertPerHour",
    /** */
    NanosievertsPerSecond = "NanosievertPerSecond",
    /** */
    MicrosievertsPerSecond = "MicrosievertPerSecond",
    /** */
    MillisievertsPerSecond = "MillisievertPerSecond",
    /** */
    MilliroentgensEquivalentManPerHour = "MilliroentgenEquivalentManPerHour"
}

/** A dose rate is quantity of radiation absorbed or delivered per unit time. */
export class RadiationEquivalentDoseRate extends BaseUnit {
    protected value: number;
    private sievertsperhourLazy: number | null = null;
    private sievertspersecondLazy: number | null = null;
    private roentgensequivalentmanperhourLazy: number | null = null;
    private nanosievertsperhourLazy: number | null = null;
    private microsievertsperhourLazy: number | null = null;
    private millisievertsperhourLazy: number | null = null;
    private nanosievertspersecondLazy: number | null = null;
    private microsievertspersecondLazy: number | null = null;
    private millisievertspersecondLazy: number | null = null;
    private milliroentgensequivalentmanperhourLazy: number | null = null;

    /**
     * Create a new RadiationEquivalentDoseRate.
     * @param value The value.
     * @param fromUnit The ‘RadiationEquivalentDoseRate’ unit to create from.
     * The default unit is SievertsPerSecond
     */
    public constructor(value: number, fromUnit: RadiationEquivalentDoseRateUnits = RadiationEquivalentDoseRateUnits.SievertsPerSecond) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RadiationEquivalentDoseRate is SievertsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): RadiationEquivalentDoseRateUnits.SievertsPerSecond {
        return RadiationEquivalentDoseRateUnits.SievertsPerSecond
    }

    /** */
    public get SievertsPerHour(): number {
        if(this.sievertsperhourLazy !== null){
            return this.sievertsperhourLazy;
        }
        return this.sievertsperhourLazy = this.convertFromBase(RadiationEquivalentDoseRateUnits.SievertsPerHour);
    }

    /** */
    public get SievertsPerSecond(): number {
        if(this.sievertspersecondLazy !== null){
            return this.sievertspersecondLazy;
        }
        return this.sievertspersecondLazy = this.convertFromBase(RadiationEquivalentDoseRateUnits.SievertsPerSecond);
    }

    /** */
    public get RoentgensEquivalentManPerHour(): number {
        if(this.roentgensequivalentmanperhourLazy !== null){
            return this.roentgensequivalentmanperhourLazy;
        }
        return this.roentgensequivalentmanperhourLazy = this.convertFromBase(RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour);
    }

    /** */
    public get NanosievertsPerHour(): number {
        if(this.nanosievertsperhourLazy !== null){
            return this.nanosievertsperhourLazy;
        }
        return this.nanosievertsperhourLazy = this.convertFromBase(RadiationEquivalentDoseRateUnits.NanosievertsPerHour);
    }

    /** */
    public get MicrosievertsPerHour(): number {
        if(this.microsievertsperhourLazy !== null){
            return this.microsievertsperhourLazy;
        }
        return this.microsievertsperhourLazy = this.convertFromBase(RadiationEquivalentDoseRateUnits.MicrosievertsPerHour);
    }

    /** */
    public get MillisievertsPerHour(): number {
        if(this.millisievertsperhourLazy !== null){
            return this.millisievertsperhourLazy;
        }
        return this.millisievertsperhourLazy = this.convertFromBase(RadiationEquivalentDoseRateUnits.MillisievertsPerHour);
    }

    /** */
    public get NanosievertsPerSecond(): number {
        if(this.nanosievertspersecondLazy !== null){
            return this.nanosievertspersecondLazy;
        }
        return this.nanosievertspersecondLazy = this.convertFromBase(RadiationEquivalentDoseRateUnits.NanosievertsPerSecond);
    }

    /** */
    public get MicrosievertsPerSecond(): number {
        if(this.microsievertspersecondLazy !== null){
            return this.microsievertspersecondLazy;
        }
        return this.microsievertspersecondLazy = this.convertFromBase(RadiationEquivalentDoseRateUnits.MicrosievertsPerSecond);
    }

    /** */
    public get MillisievertsPerSecond(): number {
        if(this.millisievertspersecondLazy !== null){
            return this.millisievertspersecondLazy;
        }
        return this.millisievertspersecondLazy = this.convertFromBase(RadiationEquivalentDoseRateUnits.MillisievertsPerSecond);
    }

    /** */
    public get MilliroentgensEquivalentManPerHour(): number {
        if(this.milliroentgensequivalentmanperhourLazy !== null){
            return this.milliroentgensequivalentmanperhourLazy;
        }
        return this.milliroentgensequivalentmanperhourLazy = this.convertFromBase(RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour);
    }

    /**
     * Create a new RadiationEquivalentDoseRate instance from a SievertsPerHour
     *
     * @param value The unit as SievertsPerHour to create a new RadiationEquivalentDoseRate from.
     * @returns The new RadiationEquivalentDoseRate instance.
     */
    public static FromSievertsPerHour(value: number): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(value, RadiationEquivalentDoseRateUnits.SievertsPerHour);
    }

    /**
     * Create a new RadiationEquivalentDoseRate instance from a SievertsPerSecond
     *
     * @param value The unit as SievertsPerSecond to create a new RadiationEquivalentDoseRate from.
     * @returns The new RadiationEquivalentDoseRate instance.
     */
    public static FromSievertsPerSecond(value: number): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(value, RadiationEquivalentDoseRateUnits.SievertsPerSecond);
    }

    /**
     * Create a new RadiationEquivalentDoseRate instance from a RoentgensEquivalentManPerHour
     *
     * @param value The unit as RoentgensEquivalentManPerHour to create a new RadiationEquivalentDoseRate from.
     * @returns The new RadiationEquivalentDoseRate instance.
     */
    public static FromRoentgensEquivalentManPerHour(value: number): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(value, RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour);
    }

    /**
     * Create a new RadiationEquivalentDoseRate instance from a NanosievertsPerHour
     *
     * @param value The unit as NanosievertsPerHour to create a new RadiationEquivalentDoseRate from.
     * @returns The new RadiationEquivalentDoseRate instance.
     */
    public static FromNanosievertsPerHour(value: number): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(value, RadiationEquivalentDoseRateUnits.NanosievertsPerHour);
    }

    /**
     * Create a new RadiationEquivalentDoseRate instance from a MicrosievertsPerHour
     *
     * @param value The unit as MicrosievertsPerHour to create a new RadiationEquivalentDoseRate from.
     * @returns The new RadiationEquivalentDoseRate instance.
     */
    public static FromMicrosievertsPerHour(value: number): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(value, RadiationEquivalentDoseRateUnits.MicrosievertsPerHour);
    }

    /**
     * Create a new RadiationEquivalentDoseRate instance from a MillisievertsPerHour
     *
     * @param value The unit as MillisievertsPerHour to create a new RadiationEquivalentDoseRate from.
     * @returns The new RadiationEquivalentDoseRate instance.
     */
    public static FromMillisievertsPerHour(value: number): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(value, RadiationEquivalentDoseRateUnits.MillisievertsPerHour);
    }

    /**
     * Create a new RadiationEquivalentDoseRate instance from a NanosievertsPerSecond
     *
     * @param value The unit as NanosievertsPerSecond to create a new RadiationEquivalentDoseRate from.
     * @returns The new RadiationEquivalentDoseRate instance.
     */
    public static FromNanosievertsPerSecond(value: number): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(value, RadiationEquivalentDoseRateUnits.NanosievertsPerSecond);
    }

    /**
     * Create a new RadiationEquivalentDoseRate instance from a MicrosievertsPerSecond
     *
     * @param value The unit as MicrosievertsPerSecond to create a new RadiationEquivalentDoseRate from.
     * @returns The new RadiationEquivalentDoseRate instance.
     */
    public static FromMicrosievertsPerSecond(value: number): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(value, RadiationEquivalentDoseRateUnits.MicrosievertsPerSecond);
    }

    /**
     * Create a new RadiationEquivalentDoseRate instance from a MillisievertsPerSecond
     *
     * @param value The unit as MillisievertsPerSecond to create a new RadiationEquivalentDoseRate from.
     * @returns The new RadiationEquivalentDoseRate instance.
     */
    public static FromMillisievertsPerSecond(value: number): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(value, RadiationEquivalentDoseRateUnits.MillisievertsPerSecond);
    }

    /**
     * Create a new RadiationEquivalentDoseRate instance from a MilliroentgensEquivalentManPerHour
     *
     * @param value The unit as MilliroentgensEquivalentManPerHour to create a new RadiationEquivalentDoseRate from.
     * @returns The new RadiationEquivalentDoseRate instance.
     */
    public static FromMilliroentgensEquivalentManPerHour(value: number): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(value, RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour);
    }

    /**
     * Gets the base unit enumeration associated with RadiationEquivalentDoseRate
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof RadiationEquivalentDoseRateUnits {
        return RadiationEquivalentDoseRateUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): RadiationEquivalentDoseRateUnits.SievertsPerSecond {
        return RadiationEquivalentDoseRateUnits.SievertsPerSecond;
    }

    /**
     * Create API DTO represent a RadiationEquivalentDoseRate unit.
     * @param holdInUnit The specific RadiationEquivalentDoseRate unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: RadiationEquivalentDoseRateUnits = RadiationEquivalentDoseRateUnits.SievertsPerSecond): RadiationEquivalentDoseRateDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a RadiationEquivalentDoseRate unit from an API DTO representation.
     * @param dtoRadiationEquivalentDoseRate The RadiationEquivalentDoseRate API DTO representation
     */
    public static FromDto(dtoRadiationEquivalentDoseRate: RadiationEquivalentDoseRateDto): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(dtoRadiationEquivalentDoseRate.value, dtoRadiationEquivalentDoseRate.unit);
    }

    /**
     * Convert RadiationEquivalentDoseRate to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: RadiationEquivalentDoseRateUnits): number {
        switch (toUnit) {
            case RadiationEquivalentDoseRateUnits.SievertsPerHour: return this.SievertsPerHour;
            case RadiationEquivalentDoseRateUnits.SievertsPerSecond: return this.SievertsPerSecond;
            case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour: return this.RoentgensEquivalentManPerHour;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerHour: return this.NanosievertsPerHour;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour: return this.MicrosievertsPerHour;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerHour: return this.MillisievertsPerHour;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerSecond: return this.NanosievertsPerSecond;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerSecond: return this.MicrosievertsPerSecond;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerSecond: return this.MillisievertsPerSecond;
            case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour: return this.MilliroentgensEquivalentManPerHour;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: RadiationEquivalentDoseRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case RadiationEquivalentDoseRateUnits.SievertsPerHour: return super.internalMultiply(this.value, 3600);
                case RadiationEquivalentDoseRateUnits.SievertsPerSecond: return this.value;
                case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalMultiply(v3, 3600);
                }
                case RadiationEquivalentDoseRateUnits.NanosievertsPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 1e-9);
                }
                case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 0.000001);
                }
                case RadiationEquivalentDoseRateUnits.MillisievertsPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 0.001);
                }
                case RadiationEquivalentDoseRateUnits.NanosievertsPerSecond: return super.internalDivide(this.value, 1e-9);
                case RadiationEquivalentDoseRateUnits.MicrosievertsPerSecond: return super.internalDivide(this.value, 0.000001);
                case RadiationEquivalentDoseRateUnits.MillisievertsPerSecond: return super.internalDivide(this.value, 0.001);
                case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour: {
                    const v3 = super.internalMultiply(this.value, 100);
                    const v5 = super.internalMultiply(v3, 3600);
                    return super.internalDivide(v5, 0.001);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case RadiationEquivalentDoseRateUnits.SievertsPerHour: return this.value*3600;
            case RadiationEquivalentDoseRateUnits.SievertsPerSecond: return this.value;
            case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour: return this.value * 100 * 3600;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerHour: return (this.value*3600) / 1e-9;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour: return (this.value*3600) / 0.000001;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerHour: return (this.value*3600) / 0.001;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerSecond: return (this.value) / 1e-9;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerSecond: return (this.value) / 0.000001;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerSecond: return (this.value) / 0.001;
            case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour: return (this.value * 100 * 3600) / 0.001;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: RadiationEquivalentDoseRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case RadiationEquivalentDoseRateUnits.SievertsPerHour: return super.internalDivide(value, 3600);
                case RadiationEquivalentDoseRateUnits.SievertsPerSecond: return value;
                case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour: {
                    const v3 = super.internalDivide(value, 100);
                    return super.internalDivide(v3, 3600);
                }
                case RadiationEquivalentDoseRateUnits.NanosievertsPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 1e-9);
                }
                case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 0.000001);
                }
                case RadiationEquivalentDoseRateUnits.MillisievertsPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 0.001);
                }
                case RadiationEquivalentDoseRateUnits.NanosievertsPerSecond: return super.internalMultiply(value, 1e-9);
                case RadiationEquivalentDoseRateUnits.MicrosievertsPerSecond: return super.internalMultiply(value, 0.000001);
                case RadiationEquivalentDoseRateUnits.MillisievertsPerSecond: return super.internalMultiply(value, 0.001);
                case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour: {
                    const v3 = super.internalDivide(value, 100);
                    const v5 = super.internalDivide(v3, 3600);
                    return super.internalMultiply(v5, 0.001);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case RadiationEquivalentDoseRateUnits.SievertsPerHour: return value/3600;
            case RadiationEquivalentDoseRateUnits.SievertsPerSecond: return value;
            case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour: return value / 100 / 3600;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerHour: return (value/3600) * 1e-9;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour: return (value/3600) * 0.000001;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerHour: return (value/3600) * 0.001;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerSecond: return (value) * 1e-9;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerSecond: return (value) * 0.000001;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerSecond: return (value) * 0.001;
            case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour: return (value / 100 / 3600) * 0.001;
            default: return Number.NaN;
        }
    }

    /**
     * Format the RadiationEquivalentDoseRate to string.
     * Note! the default format for RadiationEquivalentDoseRate is SievertsPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RadiationEquivalentDoseRate.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the RadiationEquivalentDoseRate.
     */
    public toString(unit: RadiationEquivalentDoseRateUnits = RadiationEquivalentDoseRateUnits.SievertsPerSecond, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case RadiationEquivalentDoseRateUnits.SievertsPerHour:
                return super.truncateFractionDigits(this.SievertsPerHour, options as ToStringOptions) + ` Sv/h`;
            case RadiationEquivalentDoseRateUnits.SievertsPerSecond:
                return super.truncateFractionDigits(this.SievertsPerSecond, options as ToStringOptions) + ` Sv/s`;
            case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour:
                return super.truncateFractionDigits(this.RoentgensEquivalentManPerHour, options as ToStringOptions) + ` rem/h`;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerHour:
                return super.truncateFractionDigits(this.NanosievertsPerHour, options as ToStringOptions) + ` nSv/h`;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour:
                return super.truncateFractionDigits(this.MicrosievertsPerHour, options as ToStringOptions) + ` μSv/h`;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerHour:
                return super.truncateFractionDigits(this.MillisievertsPerHour, options as ToStringOptions) + ` mSv/h`;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerSecond:
                return super.truncateFractionDigits(this.NanosievertsPerSecond, options as ToStringOptions) + ` nSv/s`;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerSecond:
                return super.truncateFractionDigits(this.MicrosievertsPerSecond, options as ToStringOptions) + ` μSv/s`;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerSecond:
                return super.truncateFractionDigits(this.MillisievertsPerSecond, options as ToStringOptions) + ` mSv/s`;
            case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour:
                return super.truncateFractionDigits(this.MilliroentgensEquivalentManPerHour, options as ToStringOptions) + ` mrem/h`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RadiationEquivalentDoseRate unit abbreviation.
     * Note! the default abbreviation for RadiationEquivalentDoseRate is SievertsPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RadiationEquivalentDoseRate.
     * @returns The abbreviation string of RadiationEquivalentDoseRate.
     */
    public getUnitAbbreviation(unitAbbreviation: RadiationEquivalentDoseRateUnits = RadiationEquivalentDoseRateUnits.SievertsPerSecond): string {

        switch (unitAbbreviation) {
            
            case RadiationEquivalentDoseRateUnits.SievertsPerHour:
                return `Sv/h`;
            case RadiationEquivalentDoseRateUnits.SievertsPerSecond:
                return `Sv/s`;
            case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour:
                return `rem/h`;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerHour:
                return `nSv/h`;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour:
                return `μSv/h`;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerHour:
                return `mSv/h`;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerSecond:
                return `nSv/s`;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerSecond:
                return `μSv/s`;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerSecond:
                return `mSv/s`;
            case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour:
                return `mrem/h`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given RadiationEquivalentDoseRate are equals to the current RadiationEquivalentDoseRate.
     * @param radiationEquivalentDoseRate The other RadiationEquivalentDoseRate.
     * @returns True if the given RadiationEquivalentDoseRate are equal to the current RadiationEquivalentDoseRate.
     */
    public equals(radiationEquivalentDoseRate: RadiationEquivalentDoseRate): boolean {
        return super.internalEquals(this.value, radiationEquivalentDoseRate.BaseValue);
    }

    /**
     * Compare the given RadiationEquivalentDoseRate against the current RadiationEquivalentDoseRate.
     * @param radiationEquivalentDoseRate The other RadiationEquivalentDoseRate.
     * @returns 0 if they are equal, -1 if the current RadiationEquivalentDoseRate is less then other, 1 if the current RadiationEquivalentDoseRate is greater then other.
     */
    public compareTo(radiationEquivalentDoseRate: RadiationEquivalentDoseRate): number {
        return super.internalCompareTo(this.value, radiationEquivalentDoseRate.BaseValue);
    }

    /**
     * Add the given RadiationEquivalentDoseRate with the current RadiationEquivalentDoseRate.
     * @param radiationEquivalentDoseRate The other RadiationEquivalentDoseRate.
     * @returns A new RadiationEquivalentDoseRate instance with the results.
     */
    public add(radiationEquivalentDoseRate: RadiationEquivalentDoseRate): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(super.internalAdd(this.value, radiationEquivalentDoseRate.BaseValue))
    }

    /**
     * Subtract the given RadiationEquivalentDoseRate with the current RadiationEquivalentDoseRate.
     * @param radiationEquivalentDoseRate The other RadiationEquivalentDoseRate.
     * @returns A new RadiationEquivalentDoseRate instance with the results.
     */
    public subtract(radiationEquivalentDoseRate: RadiationEquivalentDoseRate): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(super.internalSubtract(this.value, radiationEquivalentDoseRate.BaseValue))
    }

    /**
     * Multiply the given RadiationEquivalentDoseRate with the current RadiationEquivalentDoseRate.
     * @param radiationEquivalentDoseRate The other RadiationEquivalentDoseRate.
     * @returns A new RadiationEquivalentDoseRate instance with the results.
     */
    public multiply(radiationEquivalentDoseRate: RadiationEquivalentDoseRate): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(super.internalMultiply(this.value, radiationEquivalentDoseRate.BaseValue))
    }

    /**
     * Divide the given RadiationEquivalentDoseRate with the current RadiationEquivalentDoseRate.
     * @param radiationEquivalentDoseRate The other RadiationEquivalentDoseRate.
     * @returns A new RadiationEquivalentDoseRate instance with the results.
     */
    public divide(radiationEquivalentDoseRate: RadiationEquivalentDoseRate): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(super.internalDivide(this.value, radiationEquivalentDoseRate.BaseValue))
    }

    /**
     * Modulo the given RadiationEquivalentDoseRate with the current RadiationEquivalentDoseRate.
     * @param radiationEquivalentDoseRate The other RadiationEquivalentDoseRate.
     * @returns A new RadiationEquivalentDoseRate instance with the results.
     */
    public modulo(radiationEquivalentDoseRate: RadiationEquivalentDoseRate): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(super.internalModulo(this.value, radiationEquivalentDoseRate.BaseValue))
    }

    /**
     * Pow the given RadiationEquivalentDoseRate with the current RadiationEquivalentDoseRate.
     * @param radiationEquivalentDoseRate The other RadiationEquivalentDoseRate.
     * @returns A new RadiationEquivalentDoseRate instance with the results.
     */
    public pow(radiationEquivalentDoseRate: RadiationEquivalentDoseRate): RadiationEquivalentDoseRate {
        return new RadiationEquivalentDoseRate(super.internalPow(this.value, radiationEquivalentDoseRate.BaseValue))
    }
}
