import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricApparentEnergy */
export interface ElectricApparentEnergyDto {
    /** The value of the ElectricApparentEnergy */
    value: number;
    /**  The specific unit that the ElectricApparentEnergy value is representing */
    unit: ElectricApparentEnergyUnits;
}

/** ElectricApparentEnergyUnits enumeration */
export enum ElectricApparentEnergyUnits {
    /** */
    VoltampereHours = "VoltampereHour",
    /** */
    KilovoltampereHours = "KilovoltampereHour",
    /** */
    MegavoltampereHours = "MegavoltampereHour"
}

/** A unit for expressing the integral of apparent power over time, equal to the product of 1 volt-ampere and 1 hour, or to 3600 joules. */
export class ElectricApparentEnergy extends BaseUnit {
    protected value: number;
    private voltamperehoursLazy: number | null = null;
    private kilovoltamperehoursLazy: number | null = null;
    private megavoltamperehoursLazy: number | null = null;

    /**
     * Create a new ElectricApparentEnergy.
     * @param value The value.
     * @param fromUnit The ‘ElectricApparentEnergy’ unit to create from.
     * The default unit is VoltampereHours
     */
    public constructor(value: number, fromUnit: ElectricApparentEnergyUnits = ElectricApparentEnergyUnits.VoltampereHours) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricApparentEnergy is VoltampereHours.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricApparentEnergyUnits.VoltampereHours {
        return ElectricApparentEnergyUnits.VoltampereHours
    }

    /** */
    public get VoltampereHours(): number {
        if(this.voltamperehoursLazy !== null){
            return this.voltamperehoursLazy;
        }
        return this.voltamperehoursLazy = this.convertFromBase(ElectricApparentEnergyUnits.VoltampereHours);
    }

    /** */
    public get KilovoltampereHours(): number {
        if(this.kilovoltamperehoursLazy !== null){
            return this.kilovoltamperehoursLazy;
        }
        return this.kilovoltamperehoursLazy = this.convertFromBase(ElectricApparentEnergyUnits.KilovoltampereHours);
    }

    /** */
    public get MegavoltampereHours(): number {
        if(this.megavoltamperehoursLazy !== null){
            return this.megavoltamperehoursLazy;
        }
        return this.megavoltamperehoursLazy = this.convertFromBase(ElectricApparentEnergyUnits.MegavoltampereHours);
    }

    /**
     * Create a new ElectricApparentEnergy instance from a VoltampereHours
     *
     * @param value The unit as VoltampereHours to create a new ElectricApparentEnergy from.
     * @returns The new ElectricApparentEnergy instance.
     */
    public static FromVoltampereHours(value: number): ElectricApparentEnergy {
        return new ElectricApparentEnergy(value, ElectricApparentEnergyUnits.VoltampereHours);
    }

    /**
     * Create a new ElectricApparentEnergy instance from a KilovoltampereHours
     *
     * @param value The unit as KilovoltampereHours to create a new ElectricApparentEnergy from.
     * @returns The new ElectricApparentEnergy instance.
     */
    public static FromKilovoltampereHours(value: number): ElectricApparentEnergy {
        return new ElectricApparentEnergy(value, ElectricApparentEnergyUnits.KilovoltampereHours);
    }

    /**
     * Create a new ElectricApparentEnergy instance from a MegavoltampereHours
     *
     * @param value The unit as MegavoltampereHours to create a new ElectricApparentEnergy from.
     * @returns The new ElectricApparentEnergy instance.
     */
    public static FromMegavoltampereHours(value: number): ElectricApparentEnergy {
        return new ElectricApparentEnergy(value, ElectricApparentEnergyUnits.MegavoltampereHours);
    }

    /**
     * Gets the base unit enumeration associated with ElectricApparentEnergy
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricApparentEnergyUnits {
        return ElectricApparentEnergyUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricApparentEnergyUnits.VoltampereHours {
        return ElectricApparentEnergyUnits.VoltampereHours;
    }

    /**
     * Create API DTO represent a ElectricApparentEnergy unit.
     * @param holdInUnit The specific ElectricApparentEnergy unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricApparentEnergyUnits = ElectricApparentEnergyUnits.VoltampereHours): ElectricApparentEnergyDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricApparentEnergy unit from an API DTO representation.
     * @param dtoElectricApparentEnergy The ElectricApparentEnergy API DTO representation
     */
    public static FromDto(dtoElectricApparentEnergy: ElectricApparentEnergyDto): ElectricApparentEnergy {
        return new ElectricApparentEnergy(dtoElectricApparentEnergy.value, dtoElectricApparentEnergy.unit);
    }

    /**
     * Convert ElectricApparentEnergy to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricApparentEnergyUnits): number {
        switch (toUnit) {
            case ElectricApparentEnergyUnits.VoltampereHours: return this.VoltampereHours;
            case ElectricApparentEnergyUnits.KilovoltampereHours: return this.KilovoltampereHours;
            case ElectricApparentEnergyUnits.MegavoltampereHours: return this.MegavoltampereHours;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricApparentEnergyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricApparentEnergyUnits.VoltampereHours: return this.value;
                case ElectricApparentEnergyUnits.KilovoltampereHours: return super.internalDivide(this.value, 1000);
                case ElectricApparentEnergyUnits.MegavoltampereHours: return super.internalDivide(this.value, 1000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricApparentEnergyUnits.VoltampereHours: return this.value;
            case ElectricApparentEnergyUnits.KilovoltampereHours: return (this.value) / 1000;
            case ElectricApparentEnergyUnits.MegavoltampereHours: return (this.value) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricApparentEnergyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricApparentEnergyUnits.VoltampereHours: return value;
                case ElectricApparentEnergyUnits.KilovoltampereHours: return super.internalMultiply(value, 1000);
                case ElectricApparentEnergyUnits.MegavoltampereHours: return super.internalMultiply(value, 1000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricApparentEnergyUnits.VoltampereHours: return value;
            case ElectricApparentEnergyUnits.KilovoltampereHours: return (value) * 1000;
            case ElectricApparentEnergyUnits.MegavoltampereHours: return (value) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricApparentEnergy to string.
     * Note! the default format for ElectricApparentEnergy is VoltampereHours.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricApparentEnergy.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricApparentEnergy.
     */
    public toString(unit: ElectricApparentEnergyUnits = ElectricApparentEnergyUnits.VoltampereHours, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricApparentEnergyUnits.VoltampereHours:
                return super.truncateFractionDigits(this.VoltampereHours, options as ToStringOptions) + ` VAh`;
            case ElectricApparentEnergyUnits.KilovoltampereHours:
                return super.truncateFractionDigits(this.KilovoltampereHours, options as ToStringOptions) + ` kVAh`;
            case ElectricApparentEnergyUnits.MegavoltampereHours:
                return super.truncateFractionDigits(this.MegavoltampereHours, options as ToStringOptions) + ` MVAh`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricApparentEnergy unit abbreviation.
     * Note! the default abbreviation for ElectricApparentEnergy is VoltampereHours.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricApparentEnergy.
     * @returns The abbreviation string of ElectricApparentEnergy.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricApparentEnergyUnits = ElectricApparentEnergyUnits.VoltampereHours): string {

        switch (unitAbbreviation) {
            
            case ElectricApparentEnergyUnits.VoltampereHours:
                return `VAh`;
            case ElectricApparentEnergyUnits.KilovoltampereHours:
                return `kVAh`;
            case ElectricApparentEnergyUnits.MegavoltampereHours:
                return `MVAh`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricApparentEnergy are equals to the current ElectricApparentEnergy.
     * @param electricApparentEnergy The other ElectricApparentEnergy.
     * @returns True if the given ElectricApparentEnergy are equal to the current ElectricApparentEnergy.
     */
    public equals(electricApparentEnergy: ElectricApparentEnergy): boolean {
        return super.internalEquals(this.value, electricApparentEnergy.BaseValue);
    }

    /**
     * Compare the given ElectricApparentEnergy against the current ElectricApparentEnergy.
     * @param electricApparentEnergy The other ElectricApparentEnergy.
     * @returns 0 if they are equal, -1 if the current ElectricApparentEnergy is less then other, 1 if the current ElectricApparentEnergy is greater then other.
     */
    public compareTo(electricApparentEnergy: ElectricApparentEnergy): number {
        return super.internalCompareTo(this.value, electricApparentEnergy.BaseValue);
    }

    /**
     * Add the given ElectricApparentEnergy with the current ElectricApparentEnergy.
     * @param electricApparentEnergy The other ElectricApparentEnergy.
     * @returns A new ElectricApparentEnergy instance with the results.
     */
    public add(electricApparentEnergy: ElectricApparentEnergy): ElectricApparentEnergy {
        return new ElectricApparentEnergy(super.internalAdd(this.value, electricApparentEnergy.BaseValue))
    }

    /**
     * Subtract the given ElectricApparentEnergy with the current ElectricApparentEnergy.
     * @param electricApparentEnergy The other ElectricApparentEnergy.
     * @returns A new ElectricApparentEnergy instance with the results.
     */
    public subtract(electricApparentEnergy: ElectricApparentEnergy): ElectricApparentEnergy {
        return new ElectricApparentEnergy(super.internalSubtract(this.value, electricApparentEnergy.BaseValue))
    }

    /**
     * Multiply the given ElectricApparentEnergy with the current ElectricApparentEnergy.
     * @param electricApparentEnergy The other ElectricApparentEnergy.
     * @returns A new ElectricApparentEnergy instance with the results.
     */
    public multiply(electricApparentEnergy: ElectricApparentEnergy): ElectricApparentEnergy {
        return new ElectricApparentEnergy(super.internalMultiply(this.value, electricApparentEnergy.BaseValue))
    }

    /**
     * Divide the given ElectricApparentEnergy with the current ElectricApparentEnergy.
     * @param electricApparentEnergy The other ElectricApparentEnergy.
     * @returns A new ElectricApparentEnergy instance with the results.
     */
    public divide(electricApparentEnergy: ElectricApparentEnergy): ElectricApparentEnergy {
        return new ElectricApparentEnergy(super.internalDivide(this.value, electricApparentEnergy.BaseValue))
    }

    /**
     * Modulo the given ElectricApparentEnergy with the current ElectricApparentEnergy.
     * @param electricApparentEnergy The other ElectricApparentEnergy.
     * @returns A new ElectricApparentEnergy instance with the results.
     */
    public modulo(electricApparentEnergy: ElectricApparentEnergy): ElectricApparentEnergy {
        return new ElectricApparentEnergy(super.internalModulo(this.value, electricApparentEnergy.BaseValue))
    }

    /**
     * Pow the given ElectricApparentEnergy with the current ElectricApparentEnergy.
     * @param electricApparentEnergy The other ElectricApparentEnergy.
     * @returns A new ElectricApparentEnergy instance with the results.
     */
    public pow(electricApparentEnergy: ElectricApparentEnergy): ElectricApparentEnergy {
        return new ElectricApparentEnergy(super.internalPow(this.value, electricApparentEnergy.BaseValue))
    }
}
