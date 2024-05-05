import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a ApparentEnergy */
export interface ApparentEnergyDto {
    /** The value of the ApparentEnergy */
    value: number;
    /**  The specific unit that the ApparentEnergy value is representing */
    unit: ApparentEnergyUnits;
}

/** ApparentEnergyUnits enumeration */
export enum ApparentEnergyUnits {
    /** */
    VoltampereHours = "VoltampereHour",
    /** */
    KilovoltampereHours = "KilovoltampereHour",
    /** */
    MegavoltampereHours = "MegavoltampereHour"
}

/** A unit for expressing the integral of apparent power over time, equal to the product of 1 volt-ampere and 1 hour, or to 3600 joules. */
export class ApparentEnergy extends BaseUnit {
    private value: number;
    private voltamperehoursLazy: number | null = null;
    private kilovoltamperehoursLazy: number | null = null;
    private megavoltamperehoursLazy: number | null = null;

    /**
     * Create a new ApparentEnergy.
     * @param value The value.
     * @param fromUnit The ‘ApparentEnergy’ unit to create from.
     * The default unit is VoltampereHours
     */
    public constructor(value: number, fromUnit: ApparentEnergyUnits = ApparentEnergyUnits.VoltampereHours) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ApparentEnergy is VoltampereHours.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get VoltampereHours(): number {
        if(this.voltamperehoursLazy !== null){
            return this.voltamperehoursLazy;
        }
        return this.voltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.VoltampereHours);
    }

    /** */
    public get KilovoltampereHours(): number {
        if(this.kilovoltamperehoursLazy !== null){
            return this.kilovoltamperehoursLazy;
        }
        return this.kilovoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.KilovoltampereHours);
    }

    /** */
    public get MegavoltampereHours(): number {
        if(this.megavoltamperehoursLazy !== null){
            return this.megavoltamperehoursLazy;
        }
        return this.megavoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.MegavoltampereHours);
    }

    /**
     * Create a new ApparentEnergy instance from a VoltampereHours
     *
     * @param value The unit as VoltampereHours to create a new ApparentEnergy from.
     * @returns The new ApparentEnergy instance.
     */
    public static FromVoltampereHours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.VoltampereHours);
    }

    /**
     * Create a new ApparentEnergy instance from a KilovoltampereHours
     *
     * @param value The unit as KilovoltampereHours to create a new ApparentEnergy from.
     * @returns The new ApparentEnergy instance.
     */
    public static FromKilovoltampereHours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.KilovoltampereHours);
    }

    /**
     * Create a new ApparentEnergy instance from a MegavoltampereHours
     *
     * @param value The unit as MegavoltampereHours to create a new ApparentEnergy from.
     * @returns The new ApparentEnergy instance.
     */
    public static FromMegavoltampereHours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.MegavoltampereHours);
    }

    /**
     * Create API DTO represent a ApparentEnergy unit.
     * @param holdInUnit The specific ApparentEnergy unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ApparentEnergyUnits = ApparentEnergyUnits.VoltampereHours): ApparentEnergyDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ApparentEnergy unit from an API DTO representation.
     * @param dtoApparentEnergy The ApparentEnergy API DTO representation
     */
    public static FromDto(dtoApparentEnergy: ApparentEnergyDto): ApparentEnergy {
        return new ApparentEnergy(dtoApparentEnergy.value, dtoApparentEnergy.unit);
    }

    /**
     * Convert ApparentEnergy to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ApparentEnergyUnits): number {
        switch (toUnit) {
            case ApparentEnergyUnits.VoltampereHours: return this.VoltampereHours;
            case ApparentEnergyUnits.KilovoltampereHours: return this.KilovoltampereHours;
            case ApparentEnergyUnits.MegavoltampereHours: return this.MegavoltampereHours;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: ApparentEnergyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ApparentEnergyUnits.VoltampereHours: return this.value;
                case ApparentEnergyUnits.KilovoltampereHours: return super.internalDivide(this.value, 1000);
                case ApparentEnergyUnits.MegavoltampereHours: return super.internalDivide(this.value, 1000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ApparentEnergyUnits.VoltampereHours: return this.value;
            case ApparentEnergyUnits.KilovoltampereHours: return (this.value) / 1000;
            case ApparentEnergyUnits.MegavoltampereHours: return (this.value) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ApparentEnergyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ApparentEnergyUnits.VoltampereHours: return value;
                case ApparentEnergyUnits.KilovoltampereHours: return super.internalMultiply(value, 1000);
                case ApparentEnergyUnits.MegavoltampereHours: return super.internalMultiply(value, 1000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ApparentEnergyUnits.VoltampereHours: return value;
            case ApparentEnergyUnits.KilovoltampereHours: return (value) * 1000;
            case ApparentEnergyUnits.MegavoltampereHours: return (value) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ApparentEnergy to string.
     * Note! the default format for ApparentEnergy is VoltampereHours.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ApparentEnergy.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the ApparentEnergy.
     */
    public toString(unit: ApparentEnergyUnits = ApparentEnergyUnits.VoltampereHours, fractionalDigits?: number): string {

        switch (unit) {
            
            case ApparentEnergyUnits.VoltampereHours:
                return super.truncateFractionDigits(this.VoltampereHours, fractionalDigits) + ` VAh`;
            case ApparentEnergyUnits.KilovoltampereHours:
                return super.truncateFractionDigits(this.KilovoltampereHours, fractionalDigits) + ` kVAh`;
            case ApparentEnergyUnits.MegavoltampereHours:
                return super.truncateFractionDigits(this.MegavoltampereHours, fractionalDigits) + ` MVAh`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ApparentEnergy unit abbreviation.
     * Note! the default abbreviation for ApparentEnergy is VoltampereHours.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ApparentEnergy.
     * @returns The abbreviation string of ApparentEnergy.
     */
    public getUnitAbbreviation(unitAbbreviation: ApparentEnergyUnits = ApparentEnergyUnits.VoltampereHours): string {

        switch (unitAbbreviation) {
            
            case ApparentEnergyUnits.VoltampereHours:
                return `VAh`;
            case ApparentEnergyUnits.KilovoltampereHours:
                return `kVAh`;
            case ApparentEnergyUnits.MegavoltampereHours:
                return `MVAh`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ApparentEnergy are equals to the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns True if the given ApparentEnergy are equal to the current ApparentEnergy.
     */
    public equals(apparentEnergy: ApparentEnergy): boolean {
        return super.internalEquals(this.value, apparentEnergy.BaseValue);
    }

    /**
     * Compare the given ApparentEnergy against the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns 0 if they are equal, -1 if the current ApparentEnergy is less then other, 1 if the current ApparentEnergy is greater then other.
     */
    public compareTo(apparentEnergy: ApparentEnergy): number {
        return super.internalCompareTo(this.value, apparentEnergy.BaseValue);
    }

    /**
     * Add the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    public add(apparentEnergy: ApparentEnergy): ApparentEnergy {
        return new ApparentEnergy(super.internalAdd(this.value, apparentEnergy.BaseValue))
    }

    /**
     * Subtract the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    public subtract(apparentEnergy: ApparentEnergy): ApparentEnergy {
        return new ApparentEnergy(super.internalSubtract(this.value, apparentEnergy.BaseValue))
    }

    /**
     * Multiply the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    public multiply(apparentEnergy: ApparentEnergy): ApparentEnergy {
        return new ApparentEnergy(super.internalMultiply(this.value, apparentEnergy.BaseValue))
    }

    /**
     * Divide the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    public divide(apparentEnergy: ApparentEnergy): ApparentEnergy {
        return new ApparentEnergy(super.internalDivide(this.value, apparentEnergy.BaseValue))
    }

    /**
     * Modulo the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    public modulo(apparentEnergy: ApparentEnergy): ApparentEnergy {
        return new ApparentEnergy(super.internalModulo(this.value, apparentEnergy.BaseValue))
    }

    /**
     * Pow the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    public pow(apparentEnergy: ApparentEnergy): ApparentEnergy {
        return new ApparentEnergy(super.internalPow(this.value, apparentEnergy.BaseValue))
    }
}
