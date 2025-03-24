import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricApparentPower */
export interface ElectricApparentPowerDto {
    /** The value of the ElectricApparentPower */
    value: number;
    /**  The specific unit that the ElectricApparentPower value is representing */
    unit: ElectricApparentPowerUnits;
}

/** ElectricApparentPowerUnits enumeration */
export enum ElectricApparentPowerUnits {
    /** */
    Voltamperes = "Voltampere",
    /** */
    Microvoltamperes = "Microvoltampere",
    /** */
    Millivoltamperes = "Millivoltampere",
    /** */
    Kilovoltamperes = "Kilovoltampere",
    /** */
    Megavoltamperes = "Megavoltampere",
    /** */
    Gigavoltamperes = "Gigavoltampere"
}

/** Power engineers measure apparent power as the magnitude of the vector sum of active and reactive power. It is the product of the root mean square voltage (in volts) and the root mean square current (in amperes). */
export class ElectricApparentPower extends BaseUnit {
    protected value: number;
    private voltamperesLazy: number | null = null;
    private microvoltamperesLazy: number | null = null;
    private millivoltamperesLazy: number | null = null;
    private kilovoltamperesLazy: number | null = null;
    private megavoltamperesLazy: number | null = null;
    private gigavoltamperesLazy: number | null = null;

    /**
     * Create a new ElectricApparentPower.
     * @param value The value.
     * @param fromUnit The ‘ElectricApparentPower’ unit to create from.
     * The default unit is Voltamperes
     */
    public constructor(value: number, fromUnit: ElectricApparentPowerUnits = ElectricApparentPowerUnits.Voltamperes) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricApparentPower is Voltamperes.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricApparentPowerUnits.Voltamperes {
        return ElectricApparentPowerUnits.Voltamperes
    }

    /** */
    public get Voltamperes(): number {
        if(this.voltamperesLazy !== null){
            return this.voltamperesLazy;
        }
        return this.voltamperesLazy = this.convertFromBase(ElectricApparentPowerUnits.Voltamperes);
    }

    /** */
    public get Microvoltamperes(): number {
        if(this.microvoltamperesLazy !== null){
            return this.microvoltamperesLazy;
        }
        return this.microvoltamperesLazy = this.convertFromBase(ElectricApparentPowerUnits.Microvoltamperes);
    }

    /** */
    public get Millivoltamperes(): number {
        if(this.millivoltamperesLazy !== null){
            return this.millivoltamperesLazy;
        }
        return this.millivoltamperesLazy = this.convertFromBase(ElectricApparentPowerUnits.Millivoltamperes);
    }

    /** */
    public get Kilovoltamperes(): number {
        if(this.kilovoltamperesLazy !== null){
            return this.kilovoltamperesLazy;
        }
        return this.kilovoltamperesLazy = this.convertFromBase(ElectricApparentPowerUnits.Kilovoltamperes);
    }

    /** */
    public get Megavoltamperes(): number {
        if(this.megavoltamperesLazy !== null){
            return this.megavoltamperesLazy;
        }
        return this.megavoltamperesLazy = this.convertFromBase(ElectricApparentPowerUnits.Megavoltamperes);
    }

    /** */
    public get Gigavoltamperes(): number {
        if(this.gigavoltamperesLazy !== null){
            return this.gigavoltamperesLazy;
        }
        return this.gigavoltamperesLazy = this.convertFromBase(ElectricApparentPowerUnits.Gigavoltamperes);
    }

    /**
     * Create a new ElectricApparentPower instance from a Voltamperes
     *
     * @param value The unit as Voltamperes to create a new ElectricApparentPower from.
     * @returns The new ElectricApparentPower instance.
     */
    public static FromVoltamperes(value: number): ElectricApparentPower {
        return new ElectricApparentPower(value, ElectricApparentPowerUnits.Voltamperes);
    }

    /**
     * Create a new ElectricApparentPower instance from a Microvoltamperes
     *
     * @param value The unit as Microvoltamperes to create a new ElectricApparentPower from.
     * @returns The new ElectricApparentPower instance.
     */
    public static FromMicrovoltamperes(value: number): ElectricApparentPower {
        return new ElectricApparentPower(value, ElectricApparentPowerUnits.Microvoltamperes);
    }

    /**
     * Create a new ElectricApparentPower instance from a Millivoltamperes
     *
     * @param value The unit as Millivoltamperes to create a new ElectricApparentPower from.
     * @returns The new ElectricApparentPower instance.
     */
    public static FromMillivoltamperes(value: number): ElectricApparentPower {
        return new ElectricApparentPower(value, ElectricApparentPowerUnits.Millivoltamperes);
    }

    /**
     * Create a new ElectricApparentPower instance from a Kilovoltamperes
     *
     * @param value The unit as Kilovoltamperes to create a new ElectricApparentPower from.
     * @returns The new ElectricApparentPower instance.
     */
    public static FromKilovoltamperes(value: number): ElectricApparentPower {
        return new ElectricApparentPower(value, ElectricApparentPowerUnits.Kilovoltamperes);
    }

    /**
     * Create a new ElectricApparentPower instance from a Megavoltamperes
     *
     * @param value The unit as Megavoltamperes to create a new ElectricApparentPower from.
     * @returns The new ElectricApparentPower instance.
     */
    public static FromMegavoltamperes(value: number): ElectricApparentPower {
        return new ElectricApparentPower(value, ElectricApparentPowerUnits.Megavoltamperes);
    }

    /**
     * Create a new ElectricApparentPower instance from a Gigavoltamperes
     *
     * @param value The unit as Gigavoltamperes to create a new ElectricApparentPower from.
     * @returns The new ElectricApparentPower instance.
     */
    public static FromGigavoltamperes(value: number): ElectricApparentPower {
        return new ElectricApparentPower(value, ElectricApparentPowerUnits.Gigavoltamperes);
    }

    /**
     * Gets the base unit enumeration associated with ElectricApparentPower
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricApparentPowerUnits {
        return ElectricApparentPowerUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricApparentPowerUnits.Voltamperes {
        return ElectricApparentPowerUnits.Voltamperes;
    }

    /**
     * Create API DTO represent a ElectricApparentPower unit.
     * @param holdInUnit The specific ElectricApparentPower unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricApparentPowerUnits = ElectricApparentPowerUnits.Voltamperes): ElectricApparentPowerDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricApparentPower unit from an API DTO representation.
     * @param dtoElectricApparentPower The ElectricApparentPower API DTO representation
     */
    public static FromDto(dtoElectricApparentPower: ElectricApparentPowerDto): ElectricApparentPower {
        return new ElectricApparentPower(dtoElectricApparentPower.value, dtoElectricApparentPower.unit);
    }

    /**
     * Convert ElectricApparentPower to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricApparentPowerUnits): number {
        switch (toUnit) {
            case ElectricApparentPowerUnits.Voltamperes: return this.Voltamperes;
            case ElectricApparentPowerUnits.Microvoltamperes: return this.Microvoltamperes;
            case ElectricApparentPowerUnits.Millivoltamperes: return this.Millivoltamperes;
            case ElectricApparentPowerUnits.Kilovoltamperes: return this.Kilovoltamperes;
            case ElectricApparentPowerUnits.Megavoltamperes: return this.Megavoltamperes;
            case ElectricApparentPowerUnits.Gigavoltamperes: return this.Gigavoltamperes;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricApparentPowerUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricApparentPowerUnits.Voltamperes: return this.value;
                case ElectricApparentPowerUnits.Microvoltamperes: return super.internalDivide(this.value, 0.000001);
                case ElectricApparentPowerUnits.Millivoltamperes: return super.internalDivide(this.value, 0.001);
                case ElectricApparentPowerUnits.Kilovoltamperes: return super.internalDivide(this.value, 1000);
                case ElectricApparentPowerUnits.Megavoltamperes: return super.internalDivide(this.value, 1000000);
                case ElectricApparentPowerUnits.Gigavoltamperes: return super.internalDivide(this.value, 1000000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricApparentPowerUnits.Voltamperes: return this.value;
            case ElectricApparentPowerUnits.Microvoltamperes: return (this.value) / 0.000001;
            case ElectricApparentPowerUnits.Millivoltamperes: return (this.value) / 0.001;
            case ElectricApparentPowerUnits.Kilovoltamperes: return (this.value) / 1000;
            case ElectricApparentPowerUnits.Megavoltamperes: return (this.value) / 1000000;
            case ElectricApparentPowerUnits.Gigavoltamperes: return (this.value) / 1000000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricApparentPowerUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricApparentPowerUnits.Voltamperes: return value;
                case ElectricApparentPowerUnits.Microvoltamperes: return super.internalMultiply(value, 0.000001);
                case ElectricApparentPowerUnits.Millivoltamperes: return super.internalMultiply(value, 0.001);
                case ElectricApparentPowerUnits.Kilovoltamperes: return super.internalMultiply(value, 1000);
                case ElectricApparentPowerUnits.Megavoltamperes: return super.internalMultiply(value, 1000000);
                case ElectricApparentPowerUnits.Gigavoltamperes: return super.internalMultiply(value, 1000000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricApparentPowerUnits.Voltamperes: return value;
            case ElectricApparentPowerUnits.Microvoltamperes: return (value) * 0.000001;
            case ElectricApparentPowerUnits.Millivoltamperes: return (value) * 0.001;
            case ElectricApparentPowerUnits.Kilovoltamperes: return (value) * 1000;
            case ElectricApparentPowerUnits.Megavoltamperes: return (value) * 1000000;
            case ElectricApparentPowerUnits.Gigavoltamperes: return (value) * 1000000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricApparentPower to string.
     * Note! the default format for ElectricApparentPower is Voltamperes.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricApparentPower.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricApparentPower.
     */
    public toString(unit: ElectricApparentPowerUnits = ElectricApparentPowerUnits.Voltamperes, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricApparentPowerUnits.Voltamperes:
                return super.truncateFractionDigits(this.Voltamperes, options as ToStringOptions) + ` VA`;
            case ElectricApparentPowerUnits.Microvoltamperes:
                return super.truncateFractionDigits(this.Microvoltamperes, options as ToStringOptions) + ` μVA`;
            case ElectricApparentPowerUnits.Millivoltamperes:
                return super.truncateFractionDigits(this.Millivoltamperes, options as ToStringOptions) + ` mVA`;
            case ElectricApparentPowerUnits.Kilovoltamperes:
                return super.truncateFractionDigits(this.Kilovoltamperes, options as ToStringOptions) + ` kVA`;
            case ElectricApparentPowerUnits.Megavoltamperes:
                return super.truncateFractionDigits(this.Megavoltamperes, options as ToStringOptions) + ` MVA`;
            case ElectricApparentPowerUnits.Gigavoltamperes:
                return super.truncateFractionDigits(this.Gigavoltamperes, options as ToStringOptions) + ` GVA`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricApparentPower unit abbreviation.
     * Note! the default abbreviation for ElectricApparentPower is Voltamperes.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricApparentPower.
     * @returns The abbreviation string of ElectricApparentPower.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricApparentPowerUnits = ElectricApparentPowerUnits.Voltamperes): string {

        switch (unitAbbreviation) {
            
            case ElectricApparentPowerUnits.Voltamperes:
                return `VA`;
            case ElectricApparentPowerUnits.Microvoltamperes:
                return `μVA`;
            case ElectricApparentPowerUnits.Millivoltamperes:
                return `mVA`;
            case ElectricApparentPowerUnits.Kilovoltamperes:
                return `kVA`;
            case ElectricApparentPowerUnits.Megavoltamperes:
                return `MVA`;
            case ElectricApparentPowerUnits.Gigavoltamperes:
                return `GVA`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricApparentPower are equals to the current ElectricApparentPower.
     * @param electricApparentPower The other ElectricApparentPower.
     * @returns True if the given ElectricApparentPower are equal to the current ElectricApparentPower.
     */
    public equals(electricApparentPower: ElectricApparentPower): boolean {
        return super.internalEquals(this.value, electricApparentPower.BaseValue);
    }

    /**
     * Compare the given ElectricApparentPower against the current ElectricApparentPower.
     * @param electricApparentPower The other ElectricApparentPower.
     * @returns 0 if they are equal, -1 if the current ElectricApparentPower is less then other, 1 if the current ElectricApparentPower is greater then other.
     */
    public compareTo(electricApparentPower: ElectricApparentPower): number {
        return super.internalCompareTo(this.value, electricApparentPower.BaseValue);
    }

    /**
     * Add the given ElectricApparentPower with the current ElectricApparentPower.
     * @param electricApparentPower The other ElectricApparentPower.
     * @returns A new ElectricApparentPower instance with the results.
     */
    public add(electricApparentPower: ElectricApparentPower): ElectricApparentPower {
        return new ElectricApparentPower(super.internalAdd(this.value, electricApparentPower.BaseValue))
    }

    /**
     * Subtract the given ElectricApparentPower with the current ElectricApparentPower.
     * @param electricApparentPower The other ElectricApparentPower.
     * @returns A new ElectricApparentPower instance with the results.
     */
    public subtract(electricApparentPower: ElectricApparentPower): ElectricApparentPower {
        return new ElectricApparentPower(super.internalSubtract(this.value, electricApparentPower.BaseValue))
    }

    /**
     * Multiply the given ElectricApparentPower with the current ElectricApparentPower.
     * @param electricApparentPower The other ElectricApparentPower.
     * @returns A new ElectricApparentPower instance with the results.
     */
    public multiply(electricApparentPower: ElectricApparentPower): ElectricApparentPower {
        return new ElectricApparentPower(super.internalMultiply(this.value, electricApparentPower.BaseValue))
    }

    /**
     * Divide the given ElectricApparentPower with the current ElectricApparentPower.
     * @param electricApparentPower The other ElectricApparentPower.
     * @returns A new ElectricApparentPower instance with the results.
     */
    public divide(electricApparentPower: ElectricApparentPower): ElectricApparentPower {
        return new ElectricApparentPower(super.internalDivide(this.value, electricApparentPower.BaseValue))
    }

    /**
     * Modulo the given ElectricApparentPower with the current ElectricApparentPower.
     * @param electricApparentPower The other ElectricApparentPower.
     * @returns A new ElectricApparentPower instance with the results.
     */
    public modulo(electricApparentPower: ElectricApparentPower): ElectricApparentPower {
        return new ElectricApparentPower(super.internalModulo(this.value, electricApparentPower.BaseValue))
    }

    /**
     * Pow the given ElectricApparentPower with the current ElectricApparentPower.
     * @param electricApparentPower The other ElectricApparentPower.
     * @returns A new ElectricApparentPower instance with the results.
     */
    public pow(electricApparentPower: ElectricApparentPower): ElectricApparentPower {
        return new ElectricApparentPower(super.internalPow(this.value, electricApparentPower.BaseValue))
    }
}
