import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricReactivePower */
export interface ElectricReactivePowerDto {
    /** The value of the ElectricReactivePower */
    value: number;
    /**  The specific unit that the ElectricReactivePower value is representing */
    unit: ElectricReactivePowerUnits;
}

/** ElectricReactivePowerUnits enumeration */
export enum ElectricReactivePowerUnits {
    /** */
    VoltamperesReactive = "VoltampereReactive",
    /** */
    KilovoltamperesReactive = "KilovoltampereReactive",
    /** */
    MegavoltamperesReactive = "MegavoltampereReactive",
    /** */
    GigavoltamperesReactive = "GigavoltampereReactive"
}

/** In electric power transmission and distribution, volt-ampere reactive (var) is a unit of measurement of reactive power. Reactive power exists in an AC circuit when the current and voltage are not in phase. */
export class ElectricReactivePower extends BaseUnit {
    protected value: number;
    private voltamperesreactiveLazy: number | null = null;
    private kilovoltamperesreactiveLazy: number | null = null;
    private megavoltamperesreactiveLazy: number | null = null;
    private gigavoltamperesreactiveLazy: number | null = null;

    /**
     * Create a new ElectricReactivePower.
     * @param value The value.
     * @param fromUnit The ‘ElectricReactivePower’ unit to create from.
     * The default unit is VoltamperesReactive
     */
    public constructor(value: number, fromUnit: ElectricReactivePowerUnits = ElectricReactivePowerUnits.VoltamperesReactive) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricReactivePower is VoltamperesReactive.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricReactivePowerUnits.VoltamperesReactive {
        return ElectricReactivePowerUnits.VoltamperesReactive
    }

    /** */
    public get VoltamperesReactive(): number {
        if(this.voltamperesreactiveLazy !== null){
            return this.voltamperesreactiveLazy;
        }
        return this.voltamperesreactiveLazy = this.convertFromBase(ElectricReactivePowerUnits.VoltamperesReactive);
    }

    /** */
    public get KilovoltamperesReactive(): number {
        if(this.kilovoltamperesreactiveLazy !== null){
            return this.kilovoltamperesreactiveLazy;
        }
        return this.kilovoltamperesreactiveLazy = this.convertFromBase(ElectricReactivePowerUnits.KilovoltamperesReactive);
    }

    /** */
    public get MegavoltamperesReactive(): number {
        if(this.megavoltamperesreactiveLazy !== null){
            return this.megavoltamperesreactiveLazy;
        }
        return this.megavoltamperesreactiveLazy = this.convertFromBase(ElectricReactivePowerUnits.MegavoltamperesReactive);
    }

    /** */
    public get GigavoltamperesReactive(): number {
        if(this.gigavoltamperesreactiveLazy !== null){
            return this.gigavoltamperesreactiveLazy;
        }
        return this.gigavoltamperesreactiveLazy = this.convertFromBase(ElectricReactivePowerUnits.GigavoltamperesReactive);
    }

    /**
     * Create a new ElectricReactivePower instance from a VoltamperesReactive
     *
     * @param value The unit as VoltamperesReactive to create a new ElectricReactivePower from.
     * @returns The new ElectricReactivePower instance.
     */
    public static FromVoltamperesReactive(value: number): ElectricReactivePower {
        return new ElectricReactivePower(value, ElectricReactivePowerUnits.VoltamperesReactive);
    }

    /**
     * Create a new ElectricReactivePower instance from a KilovoltamperesReactive
     *
     * @param value The unit as KilovoltamperesReactive to create a new ElectricReactivePower from.
     * @returns The new ElectricReactivePower instance.
     */
    public static FromKilovoltamperesReactive(value: number): ElectricReactivePower {
        return new ElectricReactivePower(value, ElectricReactivePowerUnits.KilovoltamperesReactive);
    }

    /**
     * Create a new ElectricReactivePower instance from a MegavoltamperesReactive
     *
     * @param value The unit as MegavoltamperesReactive to create a new ElectricReactivePower from.
     * @returns The new ElectricReactivePower instance.
     */
    public static FromMegavoltamperesReactive(value: number): ElectricReactivePower {
        return new ElectricReactivePower(value, ElectricReactivePowerUnits.MegavoltamperesReactive);
    }

    /**
     * Create a new ElectricReactivePower instance from a GigavoltamperesReactive
     *
     * @param value The unit as GigavoltamperesReactive to create a new ElectricReactivePower from.
     * @returns The new ElectricReactivePower instance.
     */
    public static FromGigavoltamperesReactive(value: number): ElectricReactivePower {
        return new ElectricReactivePower(value, ElectricReactivePowerUnits.GigavoltamperesReactive);
    }

    /**
     * Gets the base unit enumeration associated with ElectricReactivePower
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricReactivePowerUnits {
        return ElectricReactivePowerUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricReactivePowerUnits.VoltamperesReactive {
        return ElectricReactivePowerUnits.VoltamperesReactive;
    }

    /**
     * Create API DTO represent a ElectricReactivePower unit.
     * @param holdInUnit The specific ElectricReactivePower unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricReactivePowerUnits = ElectricReactivePowerUnits.VoltamperesReactive): ElectricReactivePowerDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricReactivePower unit from an API DTO representation.
     * @param dtoElectricReactivePower The ElectricReactivePower API DTO representation
     */
    public static FromDto(dtoElectricReactivePower: ElectricReactivePowerDto): ElectricReactivePower {
        return new ElectricReactivePower(dtoElectricReactivePower.value, dtoElectricReactivePower.unit);
    }

    /**
     * Convert ElectricReactivePower to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricReactivePowerUnits): number {
        switch (toUnit) {
            case ElectricReactivePowerUnits.VoltamperesReactive: return this.VoltamperesReactive;
            case ElectricReactivePowerUnits.KilovoltamperesReactive: return this.KilovoltamperesReactive;
            case ElectricReactivePowerUnits.MegavoltamperesReactive: return this.MegavoltamperesReactive;
            case ElectricReactivePowerUnits.GigavoltamperesReactive: return this.GigavoltamperesReactive;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricReactivePowerUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricReactivePowerUnits.VoltamperesReactive: return this.value;
                case ElectricReactivePowerUnits.KilovoltamperesReactive: return super.internalDivide(this.value, 1000);
                case ElectricReactivePowerUnits.MegavoltamperesReactive: return super.internalDivide(this.value, 1000000);
                case ElectricReactivePowerUnits.GigavoltamperesReactive: return super.internalDivide(this.value, 1000000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricReactivePowerUnits.VoltamperesReactive: return this.value;
            case ElectricReactivePowerUnits.KilovoltamperesReactive: return (this.value) / 1000;
            case ElectricReactivePowerUnits.MegavoltamperesReactive: return (this.value) / 1000000;
            case ElectricReactivePowerUnits.GigavoltamperesReactive: return (this.value) / 1000000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricReactivePowerUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricReactivePowerUnits.VoltamperesReactive: return value;
                case ElectricReactivePowerUnits.KilovoltamperesReactive: return super.internalMultiply(value, 1000);
                case ElectricReactivePowerUnits.MegavoltamperesReactive: return super.internalMultiply(value, 1000000);
                case ElectricReactivePowerUnits.GigavoltamperesReactive: return super.internalMultiply(value, 1000000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricReactivePowerUnits.VoltamperesReactive: return value;
            case ElectricReactivePowerUnits.KilovoltamperesReactive: return (value) * 1000;
            case ElectricReactivePowerUnits.MegavoltamperesReactive: return (value) * 1000000;
            case ElectricReactivePowerUnits.GigavoltamperesReactive: return (value) * 1000000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricReactivePower to string.
     * Note! the default format for ElectricReactivePower is VoltamperesReactive.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricReactivePower.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricReactivePower.
     */
    public toString(unit: ElectricReactivePowerUnits = ElectricReactivePowerUnits.VoltamperesReactive, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricReactivePowerUnits.VoltamperesReactive:
                return super.truncateFractionDigits(this.VoltamperesReactive, options as ToStringOptions) + ` var`;
            case ElectricReactivePowerUnits.KilovoltamperesReactive:
                return super.truncateFractionDigits(this.KilovoltamperesReactive, options as ToStringOptions) + ` kvar`;
            case ElectricReactivePowerUnits.MegavoltamperesReactive:
                return super.truncateFractionDigits(this.MegavoltamperesReactive, options as ToStringOptions) + ` Mvar`;
            case ElectricReactivePowerUnits.GigavoltamperesReactive:
                return super.truncateFractionDigits(this.GigavoltamperesReactive, options as ToStringOptions) + ` Gvar`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricReactivePower unit abbreviation.
     * Note! the default abbreviation for ElectricReactivePower is VoltamperesReactive.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricReactivePower.
     * @returns The abbreviation string of ElectricReactivePower.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricReactivePowerUnits = ElectricReactivePowerUnits.VoltamperesReactive): string {

        switch (unitAbbreviation) {
            
            case ElectricReactivePowerUnits.VoltamperesReactive:
                return `var`;
            case ElectricReactivePowerUnits.KilovoltamperesReactive:
                return `kvar`;
            case ElectricReactivePowerUnits.MegavoltamperesReactive:
                return `Mvar`;
            case ElectricReactivePowerUnits.GigavoltamperesReactive:
                return `Gvar`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricReactivePower are equals to the current ElectricReactivePower.
     * @param electricReactivePower The other ElectricReactivePower.
     * @returns True if the given ElectricReactivePower are equal to the current ElectricReactivePower.
     */
    public equals(electricReactivePower: ElectricReactivePower): boolean {
        return super.internalEquals(this.value, electricReactivePower.BaseValue);
    }

    /**
     * Compare the given ElectricReactivePower against the current ElectricReactivePower.
     * @param electricReactivePower The other ElectricReactivePower.
     * @returns 0 if they are equal, -1 if the current ElectricReactivePower is less then other, 1 if the current ElectricReactivePower is greater then other.
     */
    public compareTo(electricReactivePower: ElectricReactivePower): number {
        return super.internalCompareTo(this.value, electricReactivePower.BaseValue);
    }

    /**
     * Add the given ElectricReactivePower with the current ElectricReactivePower.
     * @param electricReactivePower The other ElectricReactivePower.
     * @returns A new ElectricReactivePower instance with the results.
     */
    public add(electricReactivePower: ElectricReactivePower): ElectricReactivePower {
        return new ElectricReactivePower(super.internalAdd(this.value, electricReactivePower.BaseValue))
    }

    /**
     * Subtract the given ElectricReactivePower with the current ElectricReactivePower.
     * @param electricReactivePower The other ElectricReactivePower.
     * @returns A new ElectricReactivePower instance with the results.
     */
    public subtract(electricReactivePower: ElectricReactivePower): ElectricReactivePower {
        return new ElectricReactivePower(super.internalSubtract(this.value, electricReactivePower.BaseValue))
    }

    /**
     * Multiply the given ElectricReactivePower with the current ElectricReactivePower.
     * @param electricReactivePower The other ElectricReactivePower.
     * @returns A new ElectricReactivePower instance with the results.
     */
    public multiply(electricReactivePower: ElectricReactivePower): ElectricReactivePower {
        return new ElectricReactivePower(super.internalMultiply(this.value, electricReactivePower.BaseValue))
    }

    /**
     * Divide the given ElectricReactivePower with the current ElectricReactivePower.
     * @param electricReactivePower The other ElectricReactivePower.
     * @returns A new ElectricReactivePower instance with the results.
     */
    public divide(electricReactivePower: ElectricReactivePower): ElectricReactivePower {
        return new ElectricReactivePower(super.internalDivide(this.value, electricReactivePower.BaseValue))
    }

    /**
     * Modulo the given ElectricReactivePower with the current ElectricReactivePower.
     * @param electricReactivePower The other ElectricReactivePower.
     * @returns A new ElectricReactivePower instance with the results.
     */
    public modulo(electricReactivePower: ElectricReactivePower): ElectricReactivePower {
        return new ElectricReactivePower(super.internalModulo(this.value, electricReactivePower.BaseValue))
    }

    /**
     * Pow the given ElectricReactivePower with the current ElectricReactivePower.
     * @param electricReactivePower The other ElectricReactivePower.
     * @returns A new ElectricReactivePower instance with the results.
     */
    public pow(electricReactivePower: ElectricReactivePower): ElectricReactivePower {
        return new ElectricReactivePower(super.internalPow(this.value, electricReactivePower.BaseValue))
    }
}
