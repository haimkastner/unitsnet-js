import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a ReactiveEnergy */
export interface ReactiveEnergyDto {
    /** The value of the ReactiveEnergy */
    value: number;
    /**  The specific unit that the ReactiveEnergy value is representing */
    unit: ReactiveEnergyUnits;
}

/** ReactiveEnergyUnits enumeration */
export enum ReactiveEnergyUnits {
    /** */
    VoltampereReactiveHours = "VoltampereReactiveHour",
    /** */
    KilovoltampereReactiveHours = "KilovoltampereReactiveHour",
    /** */
    MegavoltampereReactiveHours = "MegavoltampereReactiveHour"
}

/** The Volt-ampere reactive hour (expressed as varh) is the reactive power of one Volt-ampere reactive produced in one hour. */
export class ReactiveEnergy extends BaseUnit {
    protected value: number;
    private voltamperereactivehoursLazy: number | null = null;
    private kilovoltamperereactivehoursLazy: number | null = null;
    private megavoltamperereactivehoursLazy: number | null = null;

    /**
     * Create a new ReactiveEnergy.
     * @param value The value.
     * @param fromUnit The ‘ReactiveEnergy’ unit to create from.
     * The default unit is VoltampereReactiveHours
     */
    public constructor(value: number, fromUnit: ReactiveEnergyUnits = ReactiveEnergyUnits.VoltampereReactiveHours) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ReactiveEnergy is VoltampereReactiveHours.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ReactiveEnergyUnits.VoltampereReactiveHours {
        return ReactiveEnergyUnits.VoltampereReactiveHours
    }

    /** */
    public get VoltampereReactiveHours(): number {
        if(this.voltamperereactivehoursLazy !== null){
            return this.voltamperereactivehoursLazy;
        }
        return this.voltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.VoltampereReactiveHours);
    }

    /** */
    public get KilovoltampereReactiveHours(): number {
        if(this.kilovoltamperereactivehoursLazy !== null){
            return this.kilovoltamperereactivehoursLazy;
        }
        return this.kilovoltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.KilovoltampereReactiveHours);
    }

    /** */
    public get MegavoltampereReactiveHours(): number {
        if(this.megavoltamperereactivehoursLazy !== null){
            return this.megavoltamperereactivehoursLazy;
        }
        return this.megavoltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.MegavoltampereReactiveHours);
    }

    /**
     * Create a new ReactiveEnergy instance from a VoltampereReactiveHours
     *
     * @param value The unit as VoltampereReactiveHours to create a new ReactiveEnergy from.
     * @returns The new ReactiveEnergy instance.
     */
    public static FromVoltampereReactiveHours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.VoltampereReactiveHours);
    }

    /**
     * Create a new ReactiveEnergy instance from a KilovoltampereReactiveHours
     *
     * @param value The unit as KilovoltampereReactiveHours to create a new ReactiveEnergy from.
     * @returns The new ReactiveEnergy instance.
     */
    public static FromKilovoltampereReactiveHours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.KilovoltampereReactiveHours);
    }

    /**
     * Create a new ReactiveEnergy instance from a MegavoltampereReactiveHours
     *
     * @param value The unit as MegavoltampereReactiveHours to create a new ReactiveEnergy from.
     * @returns The new ReactiveEnergy instance.
     */
    public static FromMegavoltampereReactiveHours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.MegavoltampereReactiveHours);
    }

    /**
     * Gets the base unit enumeration associated with ReactiveEnergy
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ReactiveEnergyUnits {
        return ReactiveEnergyUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ReactiveEnergyUnits.VoltampereReactiveHours {
        return ReactiveEnergyUnits.VoltampereReactiveHours;
    }

    /**
     * Create API DTO represent a ReactiveEnergy unit.
     * @param holdInUnit The specific ReactiveEnergy unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ReactiveEnergyUnits = ReactiveEnergyUnits.VoltampereReactiveHours): ReactiveEnergyDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ReactiveEnergy unit from an API DTO representation.
     * @param dtoReactiveEnergy The ReactiveEnergy API DTO representation
     */
    public static FromDto(dtoReactiveEnergy: ReactiveEnergyDto): ReactiveEnergy {
        return new ReactiveEnergy(dtoReactiveEnergy.value, dtoReactiveEnergy.unit);
    }

    /**
     * Convert ReactiveEnergy to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ReactiveEnergyUnits): number {
        switch (toUnit) {
            case ReactiveEnergyUnits.VoltampereReactiveHours: return this.VoltampereReactiveHours;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours: return this.KilovoltampereReactiveHours;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours: return this.MegavoltampereReactiveHours;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ReactiveEnergyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ReactiveEnergyUnits.VoltampereReactiveHours: return this.value;
                case ReactiveEnergyUnits.KilovoltampereReactiveHours: return super.internalDivide(this.value, 1000);
                case ReactiveEnergyUnits.MegavoltampereReactiveHours: return super.internalDivide(this.value, 1000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ReactiveEnergyUnits.VoltampereReactiveHours: return this.value;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours: return (this.value) / 1000;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours: return (this.value) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ReactiveEnergyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ReactiveEnergyUnits.VoltampereReactiveHours: return value;
                case ReactiveEnergyUnits.KilovoltampereReactiveHours: return super.internalMultiply(value, 1000);
                case ReactiveEnergyUnits.MegavoltampereReactiveHours: return super.internalMultiply(value, 1000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ReactiveEnergyUnits.VoltampereReactiveHours: return value;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours: return (value) * 1000;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours: return (value) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ReactiveEnergy to string.
     * Note! the default format for ReactiveEnergy is VoltampereReactiveHours.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ReactiveEnergy.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the ReactiveEnergy.
     */
    public toString(unit: ReactiveEnergyUnits = ReactiveEnergyUnits.VoltampereReactiveHours, fractionalDigits?: number): string {

        switch (unit) {
            
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return super.truncateFractionDigits(this.VoltampereReactiveHours, fractionalDigits) + ` varh`;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours:
                return super.truncateFractionDigits(this.KilovoltampereReactiveHours, fractionalDigits) + ` kvarh`;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours:
                return super.truncateFractionDigits(this.MegavoltampereReactiveHours, fractionalDigits) + ` Mvarh`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ReactiveEnergy unit abbreviation.
     * Note! the default abbreviation for ReactiveEnergy is VoltampereReactiveHours.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ReactiveEnergy.
     * @returns The abbreviation string of ReactiveEnergy.
     */
    public getUnitAbbreviation(unitAbbreviation: ReactiveEnergyUnits = ReactiveEnergyUnits.VoltampereReactiveHours): string {

        switch (unitAbbreviation) {
            
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return `varh`;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours:
                return `kvarh`;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours:
                return `Mvarh`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ReactiveEnergy are equals to the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns True if the given ReactiveEnergy are equal to the current ReactiveEnergy.
     */
    public equals(reactiveEnergy: ReactiveEnergy): boolean {
        return super.internalEquals(this.value, reactiveEnergy.BaseValue);
    }

    /**
     * Compare the given ReactiveEnergy against the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns 0 if they are equal, -1 if the current ReactiveEnergy is less then other, 1 if the current ReactiveEnergy is greater then other.
     */
    public compareTo(reactiveEnergy: ReactiveEnergy): number {
        return super.internalCompareTo(this.value, reactiveEnergy.BaseValue);
    }

    /**
     * Add the given ReactiveEnergy with the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns A new ReactiveEnergy instance with the results.
     */
    public add(reactiveEnergy: ReactiveEnergy): ReactiveEnergy {
        return new ReactiveEnergy(super.internalAdd(this.value, reactiveEnergy.BaseValue))
    }

    /**
     * Subtract the given ReactiveEnergy with the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns A new ReactiveEnergy instance with the results.
     */
    public subtract(reactiveEnergy: ReactiveEnergy): ReactiveEnergy {
        return new ReactiveEnergy(super.internalSubtract(this.value, reactiveEnergy.BaseValue))
    }

    /**
     * Multiply the given ReactiveEnergy with the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns A new ReactiveEnergy instance with the results.
     */
    public multiply(reactiveEnergy: ReactiveEnergy): ReactiveEnergy {
        return new ReactiveEnergy(super.internalMultiply(this.value, reactiveEnergy.BaseValue))
    }

    /**
     * Divide the given ReactiveEnergy with the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns A new ReactiveEnergy instance with the results.
     */
    public divide(reactiveEnergy: ReactiveEnergy): ReactiveEnergy {
        return new ReactiveEnergy(super.internalDivide(this.value, reactiveEnergy.BaseValue))
    }

    /**
     * Modulo the given ReactiveEnergy with the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns A new ReactiveEnergy instance with the results.
     */
    public modulo(reactiveEnergy: ReactiveEnergy): ReactiveEnergy {
        return new ReactiveEnergy(super.internalModulo(this.value, reactiveEnergy.BaseValue))
    }

    /**
     * Pow the given ReactiveEnergy with the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns A new ReactiveEnergy instance with the results.
     */
    public pow(reactiveEnergy: ReactiveEnergy): ReactiveEnergy {
        return new ReactiveEnergy(super.internalPow(this.value, reactiveEnergy.BaseValue))
    }
}
