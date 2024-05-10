import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a AmplitudeRatio */
export interface AmplitudeRatioDto {
    /** The value of the AmplitudeRatio */
    value: number;
    /**  The specific unit that the AmplitudeRatio value is representing */
    unit: AmplitudeRatioUnits;
}

/** AmplitudeRatioUnits enumeration */
export enum AmplitudeRatioUnits {
    /** */
    DecibelVolts = "DecibelVolt",
    /** */
    DecibelMicrovolts = "DecibelMicrovolt",
    /** */
    DecibelMillivolts = "DecibelMillivolt",
    /** */
    DecibelsUnloaded = "DecibelUnloaded"
}

/** The strength of a signal expressed in decibels (dB) relative to one volt RMS. */
export class AmplitudeRatio extends BaseUnit {
    protected value: number;
    private decibelvoltsLazy: number | null = null;
    private decibelmicrovoltsLazy: number | null = null;
    private decibelmillivoltsLazy: number | null = null;
    private decibelsunloadedLazy: number | null = null;

    /**
     * Create a new AmplitudeRatio.
     * @param value The value.
     * @param fromUnit The ‘AmplitudeRatio’ unit to create from.
     * The default unit is DecibelVolts
     */
    public constructor(value: number, fromUnit: AmplitudeRatioUnits = AmplitudeRatioUnits.DecibelVolts) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of AmplitudeRatio is DecibelVolts.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get DecibelVolts(): number {
        if(this.decibelvoltsLazy !== null){
            return this.decibelvoltsLazy;
        }
        return this.decibelvoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelVolts);
    }

    /** */
    public get DecibelMicrovolts(): number {
        if(this.decibelmicrovoltsLazy !== null){
            return this.decibelmicrovoltsLazy;
        }
        return this.decibelmicrovoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelMicrovolts);
    }

    /** */
    public get DecibelMillivolts(): number {
        if(this.decibelmillivoltsLazy !== null){
            return this.decibelmillivoltsLazy;
        }
        return this.decibelmillivoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelMillivolts);
    }

    /** */
    public get DecibelsUnloaded(): number {
        if(this.decibelsunloadedLazy !== null){
            return this.decibelsunloadedLazy;
        }
        return this.decibelsunloadedLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelsUnloaded);
    }

    /**
     * Create a new AmplitudeRatio instance from a DecibelVolts
     *
     * @param value The unit as DecibelVolts to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    public static FromDecibelVolts(value: number): AmplitudeRatio {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelVolts);
    }

    /**
     * Create a new AmplitudeRatio instance from a DecibelMicrovolts
     *
     * @param value The unit as DecibelMicrovolts to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    public static FromDecibelMicrovolts(value: number): AmplitudeRatio {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelMicrovolts);
    }

    /**
     * Create a new AmplitudeRatio instance from a DecibelMillivolts
     *
     * @param value The unit as DecibelMillivolts to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    public static FromDecibelMillivolts(value: number): AmplitudeRatio {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelMillivolts);
    }

    /**
     * Create a new AmplitudeRatio instance from a DecibelsUnloaded
     *
     * @param value The unit as DecibelsUnloaded to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    public static FromDecibelsUnloaded(value: number): AmplitudeRatio {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelsUnloaded);
    }

    /**
     * Gets the base unit enumeration associated with AmplitudeRatio
     * @returns The unit enumeration that can be used to interact with this type
     */
    public static getUnitEnum(): typeof AmplitudeRatioUnits {
        return AmplitudeRatioUnits;
    }

    /**
     * Create API DTO represent a AmplitudeRatio unit.
     * @param holdInUnit The specific AmplitudeRatio unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: AmplitudeRatioUnits = AmplitudeRatioUnits.DecibelVolts): AmplitudeRatioDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a AmplitudeRatio unit from an API DTO representation.
     * @param dtoAmplitudeRatio The AmplitudeRatio API DTO representation
     */
    public static FromDto(dtoAmplitudeRatio: AmplitudeRatioDto): AmplitudeRatio {
        return new AmplitudeRatio(dtoAmplitudeRatio.value, dtoAmplitudeRatio.unit);
    }

    /**
     * Convert AmplitudeRatio to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: AmplitudeRatioUnits): number {
        switch (toUnit) {
            case AmplitudeRatioUnits.DecibelVolts: return this.DecibelVolts;
            case AmplitudeRatioUnits.DecibelMicrovolts: return this.DecibelMicrovolts;
            case AmplitudeRatioUnits.DecibelMillivolts: return this.DecibelMillivolts;
            case AmplitudeRatioUnits.DecibelsUnloaded: return this.DecibelsUnloaded;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: AmplitudeRatioUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case AmplitudeRatioUnits.DecibelVolts: return this.value;
                case AmplitudeRatioUnits.DecibelMicrovolts: return super.internalAdd(this.value, 120);
                case AmplitudeRatioUnits.DecibelMillivolts: return super.internalAdd(this.value, 60);
                case AmplitudeRatioUnits.DecibelsUnloaded: return super.internalAdd(this.value, 2.218487499);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case AmplitudeRatioUnits.DecibelVolts: return this.value;
            case AmplitudeRatioUnits.DecibelMicrovolts: return this.value + 120;
            case AmplitudeRatioUnits.DecibelMillivolts: return this.value + 60;
            case AmplitudeRatioUnits.DecibelsUnloaded: return this.value + 2.218487499;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: AmplitudeRatioUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case AmplitudeRatioUnits.DecibelVolts: return value;
                case AmplitudeRatioUnits.DecibelMicrovolts: return super.internalSubtract(value, 120);
                case AmplitudeRatioUnits.DecibelMillivolts: return super.internalSubtract(value, 60);
                case AmplitudeRatioUnits.DecibelsUnloaded: return super.internalSubtract(value, 2.218487499);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case AmplitudeRatioUnits.DecibelVolts: return value;
            case AmplitudeRatioUnits.DecibelMicrovolts: return value - 120;
            case AmplitudeRatioUnits.DecibelMillivolts: return value - 60;
            case AmplitudeRatioUnits.DecibelsUnloaded: return value - 2.218487499;
            default: return Number.NaN;
        }
    }

    /**
     * Format the AmplitudeRatio to string.
     * Note! the default format for AmplitudeRatio is DecibelVolts.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the AmplitudeRatio.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the AmplitudeRatio.
     */
    public toString(unit: AmplitudeRatioUnits = AmplitudeRatioUnits.DecibelVolts, fractionalDigits?: number): string {

        switch (unit) {
            
            case AmplitudeRatioUnits.DecibelVolts:
                return super.truncateFractionDigits(this.DecibelVolts, fractionalDigits) + ` dBV`;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return super.truncateFractionDigits(this.DecibelMicrovolts, fractionalDigits) + ` dBµV`;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return super.truncateFractionDigits(this.DecibelMillivolts, fractionalDigits) + ` dBmV`;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return super.truncateFractionDigits(this.DecibelsUnloaded, fractionalDigits) + ` dBu`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get AmplitudeRatio unit abbreviation.
     * Note! the default abbreviation for AmplitudeRatio is DecibelVolts.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the AmplitudeRatio.
     * @returns The abbreviation string of AmplitudeRatio.
     */
    public getUnitAbbreviation(unitAbbreviation: AmplitudeRatioUnits = AmplitudeRatioUnits.DecibelVolts): string {

        switch (unitAbbreviation) {
            
            case AmplitudeRatioUnits.DecibelVolts:
                return `dBV`;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return `dBµV`;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return `dBmV`;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return `dBu`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given AmplitudeRatio are equals to the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns True if the given AmplitudeRatio are equal to the current AmplitudeRatio.
     */
    public equals(amplitudeRatio: AmplitudeRatio): boolean {
        return super.internalEquals(this.value, amplitudeRatio.BaseValue);
    }

    /**
     * Compare the given AmplitudeRatio against the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns 0 if they are equal, -1 if the current AmplitudeRatio is less then other, 1 if the current AmplitudeRatio is greater then other.
     */
    public compareTo(amplitudeRatio: AmplitudeRatio): number {
        return super.internalCompareTo(this.value, amplitudeRatio.BaseValue);
    }

    /**
     * Add the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    public add(amplitudeRatio: AmplitudeRatio): AmplitudeRatio {
        return new AmplitudeRatio(super.internalAdd(this.value, amplitudeRatio.BaseValue))
    }

    /**
     * Subtract the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    public subtract(amplitudeRatio: AmplitudeRatio): AmplitudeRatio {
        return new AmplitudeRatio(super.internalSubtract(this.value, amplitudeRatio.BaseValue))
    }

    /**
     * Multiply the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    public multiply(amplitudeRatio: AmplitudeRatio): AmplitudeRatio {
        return new AmplitudeRatio(super.internalMultiply(this.value, amplitudeRatio.BaseValue))
    }

    /**
     * Divide the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    public divide(amplitudeRatio: AmplitudeRatio): AmplitudeRatio {
        return new AmplitudeRatio(super.internalDivide(this.value, amplitudeRatio.BaseValue))
    }

    /**
     * Modulo the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    public modulo(amplitudeRatio: AmplitudeRatio): AmplitudeRatio {
        return new AmplitudeRatio(super.internalModulo(this.value, amplitudeRatio.BaseValue))
    }

    /**
     * Pow the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    public pow(amplitudeRatio: AmplitudeRatio): AmplitudeRatio {
        return new AmplitudeRatio(super.internalPow(this.value, amplitudeRatio.BaseValue))
    }
}
