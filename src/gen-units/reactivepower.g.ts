import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ReactivePower */
export interface ReactivePowerDto {
    /** The value of the ReactivePower */
    value: number;
    /**  The specific unit that the ReactivePower value is representing */
    unit: ReactivePowerUnits;
}

/** ReactivePowerUnits enumeration */
export enum ReactivePowerUnits {
    /** */
    VoltamperesReactive = "VoltampereReactive",
    /** */
    KilovoltamperesReactive = "KilovoltampereReactive",
    /** */
    MegavoltamperesReactive = "MegavoltampereReactive",
    /** */
    GigavoltamperesReactive = "GigavoltampereReactive"
}

/** Volt-ampere reactive (var) is a unit by which reactive power is expressed in an AC electric power system. Reactive power exists in an AC circuit when the current and voltage are not in phase. */
export class ReactivePower extends BaseUnit {
    protected value: number;
    private voltamperesreactiveLazy: number | null = null;
    private kilovoltamperesreactiveLazy: number | null = null;
    private megavoltamperesreactiveLazy: number | null = null;
    private gigavoltamperesreactiveLazy: number | null = null;

    /**
     * Create a new ReactivePower.
     * @param value The value.
     * @param fromUnit The ‘ReactivePower’ unit to create from.
     * The default unit is VoltamperesReactive
     */
    public constructor(value: number, fromUnit: ReactivePowerUnits = ReactivePowerUnits.VoltamperesReactive) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ReactivePower is VoltamperesReactive.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ReactivePowerUnits.VoltamperesReactive {
        return ReactivePowerUnits.VoltamperesReactive
    }

    /** */
    public get VoltamperesReactive(): number {
        if(this.voltamperesreactiveLazy !== null){
            return this.voltamperesreactiveLazy;
        }
        return this.voltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.VoltamperesReactive);
    }

    /** */
    public get KilovoltamperesReactive(): number {
        if(this.kilovoltamperesreactiveLazy !== null){
            return this.kilovoltamperesreactiveLazy;
        }
        return this.kilovoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.KilovoltamperesReactive);
    }

    /** */
    public get MegavoltamperesReactive(): number {
        if(this.megavoltamperesreactiveLazy !== null){
            return this.megavoltamperesreactiveLazy;
        }
        return this.megavoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.MegavoltamperesReactive);
    }

    /** */
    public get GigavoltamperesReactive(): number {
        if(this.gigavoltamperesreactiveLazy !== null){
            return this.gigavoltamperesreactiveLazy;
        }
        return this.gigavoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.GigavoltamperesReactive);
    }

    /**
     * Create a new ReactivePower instance from a VoltamperesReactive
     *
     * @param value The unit as VoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    public static FromVoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.VoltamperesReactive);
    }

    /**
     * Create a new ReactivePower instance from a KilovoltamperesReactive
     *
     * @param value The unit as KilovoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    public static FromKilovoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.KilovoltamperesReactive);
    }

    /**
     * Create a new ReactivePower instance from a MegavoltamperesReactive
     *
     * @param value The unit as MegavoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    public static FromMegavoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.MegavoltamperesReactive);
    }

    /**
     * Create a new ReactivePower instance from a GigavoltamperesReactive
     *
     * @param value The unit as GigavoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    public static FromGigavoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.GigavoltamperesReactive);
    }

    /**
     * Gets the base unit enumeration associated with ReactivePower
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ReactivePowerUnits {
        return ReactivePowerUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ReactivePowerUnits.VoltamperesReactive {
        return ReactivePowerUnits.VoltamperesReactive;
    }

    /**
     * Create API DTO represent a ReactivePower unit.
     * @param holdInUnit The specific ReactivePower unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ReactivePowerUnits = ReactivePowerUnits.VoltamperesReactive): ReactivePowerDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ReactivePower unit from an API DTO representation.
     * @param dtoReactivePower The ReactivePower API DTO representation
     */
    public static FromDto(dtoReactivePower: ReactivePowerDto): ReactivePower {
        return new ReactivePower(dtoReactivePower.value, dtoReactivePower.unit);
    }

    /**
     * Convert ReactivePower to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ReactivePowerUnits): number {
        switch (toUnit) {
            case ReactivePowerUnits.VoltamperesReactive: return this.VoltamperesReactive;
            case ReactivePowerUnits.KilovoltamperesReactive: return this.KilovoltamperesReactive;
            case ReactivePowerUnits.MegavoltamperesReactive: return this.MegavoltamperesReactive;
            case ReactivePowerUnits.GigavoltamperesReactive: return this.GigavoltamperesReactive;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ReactivePowerUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ReactivePowerUnits.VoltamperesReactive: return this.value;
                case ReactivePowerUnits.KilovoltamperesReactive: return super.internalDivide(this.value, 1000);
                case ReactivePowerUnits.MegavoltamperesReactive: return super.internalDivide(this.value, 1000000);
                case ReactivePowerUnits.GigavoltamperesReactive: return super.internalDivide(this.value, 1000000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ReactivePowerUnits.VoltamperesReactive: return this.value;
            case ReactivePowerUnits.KilovoltamperesReactive: return (this.value) / 1000;
            case ReactivePowerUnits.MegavoltamperesReactive: return (this.value) / 1000000;
            case ReactivePowerUnits.GigavoltamperesReactive: return (this.value) / 1000000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ReactivePowerUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ReactivePowerUnits.VoltamperesReactive: return value;
                case ReactivePowerUnits.KilovoltamperesReactive: return super.internalMultiply(value, 1000);
                case ReactivePowerUnits.MegavoltamperesReactive: return super.internalMultiply(value, 1000000);
                case ReactivePowerUnits.GigavoltamperesReactive: return super.internalMultiply(value, 1000000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ReactivePowerUnits.VoltamperesReactive: return value;
            case ReactivePowerUnits.KilovoltamperesReactive: return (value) * 1000;
            case ReactivePowerUnits.MegavoltamperesReactive: return (value) * 1000000;
            case ReactivePowerUnits.GigavoltamperesReactive: return (value) * 1000000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ReactivePower to string.
     * Note! the default format for ReactivePower is VoltamperesReactive.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ReactivePower.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ReactivePower.
     */
    public toString(unit: ReactivePowerUnits = ReactivePowerUnits.VoltamperesReactive, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ReactivePowerUnits.VoltamperesReactive:
                return super.truncateFractionDigits(this.VoltamperesReactive, options as ToStringOptions) + ` var`;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return super.truncateFractionDigits(this.KilovoltamperesReactive, options as ToStringOptions) + ` kvar`;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return super.truncateFractionDigits(this.MegavoltamperesReactive, options as ToStringOptions) + ` Mvar`;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return super.truncateFractionDigits(this.GigavoltamperesReactive, options as ToStringOptions) + ` Gvar`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ReactivePower unit abbreviation.
     * Note! the default abbreviation for ReactivePower is VoltamperesReactive.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ReactivePower.
     * @returns The abbreviation string of ReactivePower.
     */
    public getUnitAbbreviation(unitAbbreviation: ReactivePowerUnits = ReactivePowerUnits.VoltamperesReactive): string {

        switch (unitAbbreviation) {
            
            case ReactivePowerUnits.VoltamperesReactive:
                return `var`;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return `kvar`;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return `Mvar`;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return `Gvar`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ReactivePower are equals to the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns True if the given ReactivePower are equal to the current ReactivePower.
     */
    public equals(reactivePower: ReactivePower): boolean {
        return super.internalEquals(this.value, reactivePower.BaseValue);
    }

    /**
     * Compare the given ReactivePower against the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns 0 if they are equal, -1 if the current ReactivePower is less then other, 1 if the current ReactivePower is greater then other.
     */
    public compareTo(reactivePower: ReactivePower): number {
        return super.internalCompareTo(this.value, reactivePower.BaseValue);
    }

    /**
     * Add the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    public add(reactivePower: ReactivePower): ReactivePower {
        return new ReactivePower(super.internalAdd(this.value, reactivePower.BaseValue))
    }

    /**
     * Subtract the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    public subtract(reactivePower: ReactivePower): ReactivePower {
        return new ReactivePower(super.internalSubtract(this.value, reactivePower.BaseValue))
    }

    /**
     * Multiply the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    public multiply(reactivePower: ReactivePower): ReactivePower {
        return new ReactivePower(super.internalMultiply(this.value, reactivePower.BaseValue))
    }

    /**
     * Divide the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    public divide(reactivePower: ReactivePower): ReactivePower {
        return new ReactivePower(super.internalDivide(this.value, reactivePower.BaseValue))
    }

    /**
     * Modulo the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    public modulo(reactivePower: ReactivePower): ReactivePower {
        return new ReactivePower(super.internalModulo(this.value, reactivePower.BaseValue))
    }

    /**
     * Pow the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    public pow(reactivePower: ReactivePower): ReactivePower {
        return new ReactivePower(super.internalPow(this.value, reactivePower.BaseValue))
    }
}
