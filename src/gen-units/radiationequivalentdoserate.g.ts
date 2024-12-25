import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

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
    RoentgensEquivalentManPerHour = "RoentgenEquivalentManPerHour",
    /** */
    NanosievertsPerHour = "NanosievertPerHour",
    /** */
    MicrosievertsPerHour = "MicrosievertPerHour",
    /** */
    MillisievertsPerHour = "MillisievertPerHour",
    /** */
    MilliroentgensEquivalentManPerHour = "MilliroentgenEquivalentManPerHour"
}

/** A dose rate is quantity of radiation absorbed or delivered per unit time. */
export class RadiationEquivalentDoseRate extends BaseUnit {
    protected value: number;
    private sievertsperhourLazy: number | null = null;
    private roentgensequivalentmanperhourLazy: number | null = null;
    private nanosievertsperhourLazy: number | null = null;
    private microsievertsperhourLazy: number | null = null;
    private millisievertsperhourLazy: number | null = null;
    private milliroentgensequivalentmanperhourLazy: number | null = null;

    /**
     * Create a new RadiationEquivalentDoseRate.
     * @param value The value.
     * @param fromUnit The ‘RadiationEquivalentDoseRate’ unit to create from.
     * The default unit is SievertsPerHour
     */
    public constructor(value: number, fromUnit: RadiationEquivalentDoseRateUnits = RadiationEquivalentDoseRateUnits.SievertsPerHour) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RadiationEquivalentDoseRate is SievertsPerHour.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): RadiationEquivalentDoseRateUnits.SievertsPerHour {
        return RadiationEquivalentDoseRateUnits.SievertsPerHour
    }

    /** */
    public get SievertsPerHour(): number {
        if(this.sievertsperhourLazy !== null){
            return this.sievertsperhourLazy;
        }
        return this.sievertsperhourLazy = this.convertFromBase(RadiationEquivalentDoseRateUnits.SievertsPerHour);
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
    protected static getBaseUnit(): RadiationEquivalentDoseRateUnits.SievertsPerHour {
        return RadiationEquivalentDoseRateUnits.SievertsPerHour;
    }

    /**
     * Create API DTO represent a RadiationEquivalentDoseRate unit.
     * @param holdInUnit The specific RadiationEquivalentDoseRate unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: RadiationEquivalentDoseRateUnits = RadiationEquivalentDoseRateUnits.SievertsPerHour): RadiationEquivalentDoseRateDto {
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
            case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour: return this.RoentgensEquivalentManPerHour;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerHour: return this.NanosievertsPerHour;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour: return this.MicrosievertsPerHour;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerHour: return this.MillisievertsPerHour;
            case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour: return this.MilliroentgensEquivalentManPerHour;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: RadiationEquivalentDoseRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case RadiationEquivalentDoseRateUnits.SievertsPerHour: return this.value;
                case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour: return super.internalMultiply(this.value, 100);
                case RadiationEquivalentDoseRateUnits.NanosievertsPerHour: return super.internalDivide(this.value, 1e-9);
                case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour: return super.internalDivide(this.value, 0.000001);
                case RadiationEquivalentDoseRateUnits.MillisievertsPerHour: return super.internalDivide(this.value, 0.001);
                case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalDivide(v3, 0.001);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case RadiationEquivalentDoseRateUnits.SievertsPerHour: return this.value;
            case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour: return this.value * 100;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerHour: return (this.value) / 1e-9;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour: return (this.value) / 0.000001;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerHour: return (this.value) / 0.001;
            case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour: return (this.value * 100) / 0.001;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: RadiationEquivalentDoseRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case RadiationEquivalentDoseRateUnits.SievertsPerHour: return value;
                case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour: return super.internalDivide(value, 100);
                case RadiationEquivalentDoseRateUnits.NanosievertsPerHour: return super.internalMultiply(value, 1e-9);
                case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour: return super.internalMultiply(value, 0.000001);
                case RadiationEquivalentDoseRateUnits.MillisievertsPerHour: return super.internalMultiply(value, 0.001);
                case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour: {
                    const v3 = super.internalDivide(value, 100);
                    return super.internalMultiply(v3, 0.001);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case RadiationEquivalentDoseRateUnits.SievertsPerHour: return value;
            case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour: return value / 100;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerHour: return (value) * 1e-9;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour: return (value) * 0.000001;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerHour: return (value) * 0.001;
            case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour: return (value / 100) * 0.001;
            default: return Number.NaN;
        }
    }

    /**
     * Format the RadiationEquivalentDoseRate to string.
     * Note! the default format for RadiationEquivalentDoseRate is SievertsPerHour.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RadiationEquivalentDoseRate.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the RadiationEquivalentDoseRate.
     */
    public toString(unit: RadiationEquivalentDoseRateUnits = RadiationEquivalentDoseRateUnits.SievertsPerHour, fractionalDigits?: number): string {

        switch (unit) {
            
            case RadiationEquivalentDoseRateUnits.SievertsPerHour:
                return super.truncateFractionDigits(this.SievertsPerHour, fractionalDigits) + ` Sv/h`;
            case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour:
                return super.truncateFractionDigits(this.RoentgensEquivalentManPerHour, fractionalDigits) + ` rem/h`;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerHour:
                return super.truncateFractionDigits(this.NanosievertsPerHour, fractionalDigits) + ` nSv/h`;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour:
                return super.truncateFractionDigits(this.MicrosievertsPerHour, fractionalDigits) + ` μSv/h`;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerHour:
                return super.truncateFractionDigits(this.MillisievertsPerHour, fractionalDigits) + ` mSv/h`;
            case RadiationEquivalentDoseRateUnits.MilliroentgensEquivalentManPerHour:
                return super.truncateFractionDigits(this.MilliroentgensEquivalentManPerHour, fractionalDigits) + ` mrem/h`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RadiationEquivalentDoseRate unit abbreviation.
     * Note! the default abbreviation for RadiationEquivalentDoseRate is SievertsPerHour.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RadiationEquivalentDoseRate.
     * @returns The abbreviation string of RadiationEquivalentDoseRate.
     */
    public getUnitAbbreviation(unitAbbreviation: RadiationEquivalentDoseRateUnits = RadiationEquivalentDoseRateUnits.SievertsPerHour): string {

        switch (unitAbbreviation) {
            
            case RadiationEquivalentDoseRateUnits.SievertsPerHour:
                return `Sv/h`;
            case RadiationEquivalentDoseRateUnits.RoentgensEquivalentManPerHour:
                return `rem/h`;
            case RadiationEquivalentDoseRateUnits.NanosievertsPerHour:
                return `nSv/h`;
            case RadiationEquivalentDoseRateUnits.MicrosievertsPerHour:
                return `μSv/h`;
            case RadiationEquivalentDoseRateUnits.MillisievertsPerHour:
                return `mSv/h`;
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
