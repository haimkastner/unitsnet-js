import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricReactiveEnergy */
export interface ElectricReactiveEnergyDto {
    /** The value of the ElectricReactiveEnergy */
    value: number;
    /**  The specific unit that the ElectricReactiveEnergy value is representing */
    unit: ElectricReactiveEnergyUnits;
}

/** ElectricReactiveEnergyUnits enumeration */
export enum ElectricReactiveEnergyUnits {
    /** */
    VoltampereReactiveHours = "VoltampereReactiveHour",
    /** */
    KilovoltampereReactiveHours = "KilovoltampereReactiveHour",
    /** */
    MegavoltampereReactiveHours = "MegavoltampereReactiveHour"
}

/** The volt-ampere reactive hour (expressed as varh) is the reactive power of one Volt-ampere reactive produced in one hour. */
export class ElectricReactiveEnergy extends BaseUnit {
    protected value: number;
    private voltamperereactivehoursLazy: number | null = null;
    private kilovoltamperereactivehoursLazy: number | null = null;
    private megavoltamperereactivehoursLazy: number | null = null;

    /**
     * Create a new ElectricReactiveEnergy.
     * @param value The value.
     * @param fromUnit The ‘ElectricReactiveEnergy’ unit to create from.
     * The default unit is VoltampereReactiveHours
     */
    public constructor(value: number, fromUnit: ElectricReactiveEnergyUnits = ElectricReactiveEnergyUnits.VoltampereReactiveHours) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricReactiveEnergy is VoltampereReactiveHours.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricReactiveEnergyUnits.VoltampereReactiveHours {
        return ElectricReactiveEnergyUnits.VoltampereReactiveHours
    }

    /** */
    public get VoltampereReactiveHours(): number {
        if(this.voltamperereactivehoursLazy !== null){
            return this.voltamperereactivehoursLazy;
        }
        return this.voltamperereactivehoursLazy = this.convertFromBase(ElectricReactiveEnergyUnits.VoltampereReactiveHours);
    }

    /** */
    public get KilovoltampereReactiveHours(): number {
        if(this.kilovoltamperereactivehoursLazy !== null){
            return this.kilovoltamperereactivehoursLazy;
        }
        return this.kilovoltamperereactivehoursLazy = this.convertFromBase(ElectricReactiveEnergyUnits.KilovoltampereReactiveHours);
    }

    /** */
    public get MegavoltampereReactiveHours(): number {
        if(this.megavoltamperereactivehoursLazy !== null){
            return this.megavoltamperereactivehoursLazy;
        }
        return this.megavoltamperereactivehoursLazy = this.convertFromBase(ElectricReactiveEnergyUnits.MegavoltampereReactiveHours);
    }

    /**
     * Create a new ElectricReactiveEnergy instance from a VoltampereReactiveHours
     *
     * @param value The unit as VoltampereReactiveHours to create a new ElectricReactiveEnergy from.
     * @returns The new ElectricReactiveEnergy instance.
     */
    public static FromVoltampereReactiveHours(value: number): ElectricReactiveEnergy {
        return new ElectricReactiveEnergy(value, ElectricReactiveEnergyUnits.VoltampereReactiveHours);
    }

    /**
     * Create a new ElectricReactiveEnergy instance from a KilovoltampereReactiveHours
     *
     * @param value The unit as KilovoltampereReactiveHours to create a new ElectricReactiveEnergy from.
     * @returns The new ElectricReactiveEnergy instance.
     */
    public static FromKilovoltampereReactiveHours(value: number): ElectricReactiveEnergy {
        return new ElectricReactiveEnergy(value, ElectricReactiveEnergyUnits.KilovoltampereReactiveHours);
    }

    /**
     * Create a new ElectricReactiveEnergy instance from a MegavoltampereReactiveHours
     *
     * @param value The unit as MegavoltampereReactiveHours to create a new ElectricReactiveEnergy from.
     * @returns The new ElectricReactiveEnergy instance.
     */
    public static FromMegavoltampereReactiveHours(value: number): ElectricReactiveEnergy {
        return new ElectricReactiveEnergy(value, ElectricReactiveEnergyUnits.MegavoltampereReactiveHours);
    }

    /**
     * Gets the base unit enumeration associated with ElectricReactiveEnergy
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricReactiveEnergyUnits {
        return ElectricReactiveEnergyUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricReactiveEnergyUnits.VoltampereReactiveHours {
        return ElectricReactiveEnergyUnits.VoltampereReactiveHours;
    }

    /**
     * Create API DTO represent a ElectricReactiveEnergy unit.
     * @param holdInUnit The specific ElectricReactiveEnergy unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricReactiveEnergyUnits = ElectricReactiveEnergyUnits.VoltampereReactiveHours): ElectricReactiveEnergyDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricReactiveEnergy unit from an API DTO representation.
     * @param dtoElectricReactiveEnergy The ElectricReactiveEnergy API DTO representation
     */
    public static FromDto(dtoElectricReactiveEnergy: ElectricReactiveEnergyDto): ElectricReactiveEnergy {
        return new ElectricReactiveEnergy(dtoElectricReactiveEnergy.value, dtoElectricReactiveEnergy.unit);
    }

    /**
     * Convert ElectricReactiveEnergy to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricReactiveEnergyUnits): number {
        switch (toUnit) {
            case ElectricReactiveEnergyUnits.VoltampereReactiveHours: return this.VoltampereReactiveHours;
            case ElectricReactiveEnergyUnits.KilovoltampereReactiveHours: return this.KilovoltampereReactiveHours;
            case ElectricReactiveEnergyUnits.MegavoltampereReactiveHours: return this.MegavoltampereReactiveHours;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricReactiveEnergyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricReactiveEnergyUnits.VoltampereReactiveHours: return this.value;
                case ElectricReactiveEnergyUnits.KilovoltampereReactiveHours: return super.internalDivide(this.value, 1000);
                case ElectricReactiveEnergyUnits.MegavoltampereReactiveHours: return super.internalDivide(this.value, 1000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricReactiveEnergyUnits.VoltampereReactiveHours: return this.value;
            case ElectricReactiveEnergyUnits.KilovoltampereReactiveHours: return (this.value) / 1000;
            case ElectricReactiveEnergyUnits.MegavoltampereReactiveHours: return (this.value) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricReactiveEnergyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricReactiveEnergyUnits.VoltampereReactiveHours: return value;
                case ElectricReactiveEnergyUnits.KilovoltampereReactiveHours: return super.internalMultiply(value, 1000);
                case ElectricReactiveEnergyUnits.MegavoltampereReactiveHours: return super.internalMultiply(value, 1000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricReactiveEnergyUnits.VoltampereReactiveHours: return value;
            case ElectricReactiveEnergyUnits.KilovoltampereReactiveHours: return (value) * 1000;
            case ElectricReactiveEnergyUnits.MegavoltampereReactiveHours: return (value) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricReactiveEnergy to string.
     * Note! the default format for ElectricReactiveEnergy is VoltampereReactiveHours.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricReactiveEnergy.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricReactiveEnergy.
     */
    public toString(unit: ElectricReactiveEnergyUnits = ElectricReactiveEnergyUnits.VoltampereReactiveHours, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricReactiveEnergyUnits.VoltampereReactiveHours:
                return super.truncateFractionDigits(this.VoltampereReactiveHours, options as ToStringOptions) + ` varh`;
            case ElectricReactiveEnergyUnits.KilovoltampereReactiveHours:
                return super.truncateFractionDigits(this.KilovoltampereReactiveHours, options as ToStringOptions) + ` kvarh`;
            case ElectricReactiveEnergyUnits.MegavoltampereReactiveHours:
                return super.truncateFractionDigits(this.MegavoltampereReactiveHours, options as ToStringOptions) + ` Mvarh`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricReactiveEnergy unit abbreviation.
     * Note! the default abbreviation for ElectricReactiveEnergy is VoltampereReactiveHours.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricReactiveEnergy.
     * @returns The abbreviation string of ElectricReactiveEnergy.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricReactiveEnergyUnits = ElectricReactiveEnergyUnits.VoltampereReactiveHours): string {

        switch (unitAbbreviation) {
            
            case ElectricReactiveEnergyUnits.VoltampereReactiveHours:
                return `varh`;
            case ElectricReactiveEnergyUnits.KilovoltampereReactiveHours:
                return `kvarh`;
            case ElectricReactiveEnergyUnits.MegavoltampereReactiveHours:
                return `Mvarh`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricReactiveEnergy are equals to the current ElectricReactiveEnergy.
     * @param electricReactiveEnergy The other ElectricReactiveEnergy.
     * @returns True if the given ElectricReactiveEnergy are equal to the current ElectricReactiveEnergy.
     */
    public equals(electricReactiveEnergy: ElectricReactiveEnergy): boolean {
        return super.internalEquals(this.value, electricReactiveEnergy.BaseValue);
    }

    /**
     * Compare the given ElectricReactiveEnergy against the current ElectricReactiveEnergy.
     * @param electricReactiveEnergy The other ElectricReactiveEnergy.
     * @returns 0 if they are equal, -1 if the current ElectricReactiveEnergy is less then other, 1 if the current ElectricReactiveEnergy is greater then other.
     */
    public compareTo(electricReactiveEnergy: ElectricReactiveEnergy): number {
        return super.internalCompareTo(this.value, electricReactiveEnergy.BaseValue);
    }

    /**
     * Add the given ElectricReactiveEnergy with the current ElectricReactiveEnergy.
     * @param electricReactiveEnergy The other ElectricReactiveEnergy.
     * @returns A new ElectricReactiveEnergy instance with the results.
     */
    public add(electricReactiveEnergy: ElectricReactiveEnergy): ElectricReactiveEnergy {
        return new ElectricReactiveEnergy(super.internalAdd(this.value, electricReactiveEnergy.BaseValue))
    }

    /**
     * Subtract the given ElectricReactiveEnergy with the current ElectricReactiveEnergy.
     * @param electricReactiveEnergy The other ElectricReactiveEnergy.
     * @returns A new ElectricReactiveEnergy instance with the results.
     */
    public subtract(electricReactiveEnergy: ElectricReactiveEnergy): ElectricReactiveEnergy {
        return new ElectricReactiveEnergy(super.internalSubtract(this.value, electricReactiveEnergy.BaseValue))
    }

    /**
     * Multiply the given ElectricReactiveEnergy with the current ElectricReactiveEnergy.
     * @param electricReactiveEnergy The other ElectricReactiveEnergy.
     * @returns A new ElectricReactiveEnergy instance with the results.
     */
    public multiply(electricReactiveEnergy: ElectricReactiveEnergy): ElectricReactiveEnergy {
        return new ElectricReactiveEnergy(super.internalMultiply(this.value, electricReactiveEnergy.BaseValue))
    }

    /**
     * Divide the given ElectricReactiveEnergy with the current ElectricReactiveEnergy.
     * @param electricReactiveEnergy The other ElectricReactiveEnergy.
     * @returns A new ElectricReactiveEnergy instance with the results.
     */
    public divide(electricReactiveEnergy: ElectricReactiveEnergy): ElectricReactiveEnergy {
        return new ElectricReactiveEnergy(super.internalDivide(this.value, electricReactiveEnergy.BaseValue))
    }

    /**
     * Modulo the given ElectricReactiveEnergy with the current ElectricReactiveEnergy.
     * @param electricReactiveEnergy The other ElectricReactiveEnergy.
     * @returns A new ElectricReactiveEnergy instance with the results.
     */
    public modulo(electricReactiveEnergy: ElectricReactiveEnergy): ElectricReactiveEnergy {
        return new ElectricReactiveEnergy(super.internalModulo(this.value, electricReactiveEnergy.BaseValue))
    }

    /**
     * Pow the given ElectricReactiveEnergy with the current ElectricReactiveEnergy.
     * @param electricReactiveEnergy The other ElectricReactiveEnergy.
     * @returns A new ElectricReactiveEnergy instance with the results.
     */
    public pow(electricReactiveEnergy: ElectricReactiveEnergy): ElectricReactiveEnergy {
        return new ElectricReactiveEnergy(super.internalPow(this.value, electricReactiveEnergy.BaseValue))
    }
}
