import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricReactance */
export interface ElectricReactanceDto {
    /** The value of the ElectricReactance */
    value: number;
    /**  The specific unit that the ElectricReactance value is representing */
    unit: ElectricReactanceUnits;
}

/** ElectricReactanceUnits enumeration */
export enum ElectricReactanceUnits {
    /** */
    Ohms = "Ohm",
    /** */
    Nanoohms = "Nanoohm",
    /** */
    Microohms = "Microohm",
    /** */
    Milliohms = "Milliohm",
    /** */
    Kiloohms = "Kiloohm",
    /** */
    Megaohms = "Megaohm",
    /** */
    Gigaohms = "Gigaohm",
    /** */
    Teraohms = "Teraohm"
}

/** In electrical circuits, reactance is the opposition presented to alternating current by inductance and capacitance. Along with resistance, it is one of two elements of impedance. */
export class ElectricReactance extends BaseUnit {
    protected value: number;
    private ohmsLazy: number | null = null;
    private nanoohmsLazy: number | null = null;
    private microohmsLazy: number | null = null;
    private milliohmsLazy: number | null = null;
    private kiloohmsLazy: number | null = null;
    private megaohmsLazy: number | null = null;
    private gigaohmsLazy: number | null = null;
    private teraohmsLazy: number | null = null;

    /**
     * Create a new ElectricReactance.
     * @param value The value.
     * @param fromUnit The ‘ElectricReactance’ unit to create from.
     * The default unit is Ohms
     */
    public constructor(value: number, fromUnit: ElectricReactanceUnits = ElectricReactanceUnits.Ohms) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricReactance is Ohms.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricReactanceUnits.Ohms {
        return ElectricReactanceUnits.Ohms
    }

    /** */
    public get Ohms(): number {
        if(this.ohmsLazy !== null){
            return this.ohmsLazy;
        }
        return this.ohmsLazy = this.convertFromBase(ElectricReactanceUnits.Ohms);
    }

    /** */
    public get Nanoohms(): number {
        if(this.nanoohmsLazy !== null){
            return this.nanoohmsLazy;
        }
        return this.nanoohmsLazy = this.convertFromBase(ElectricReactanceUnits.Nanoohms);
    }

    /** */
    public get Microohms(): number {
        if(this.microohmsLazy !== null){
            return this.microohmsLazy;
        }
        return this.microohmsLazy = this.convertFromBase(ElectricReactanceUnits.Microohms);
    }

    /** */
    public get Milliohms(): number {
        if(this.milliohmsLazy !== null){
            return this.milliohmsLazy;
        }
        return this.milliohmsLazy = this.convertFromBase(ElectricReactanceUnits.Milliohms);
    }

    /** */
    public get Kiloohms(): number {
        if(this.kiloohmsLazy !== null){
            return this.kiloohmsLazy;
        }
        return this.kiloohmsLazy = this.convertFromBase(ElectricReactanceUnits.Kiloohms);
    }

    /** */
    public get Megaohms(): number {
        if(this.megaohmsLazy !== null){
            return this.megaohmsLazy;
        }
        return this.megaohmsLazy = this.convertFromBase(ElectricReactanceUnits.Megaohms);
    }

    /** */
    public get Gigaohms(): number {
        if(this.gigaohmsLazy !== null){
            return this.gigaohmsLazy;
        }
        return this.gigaohmsLazy = this.convertFromBase(ElectricReactanceUnits.Gigaohms);
    }

    /** */
    public get Teraohms(): number {
        if(this.teraohmsLazy !== null){
            return this.teraohmsLazy;
        }
        return this.teraohmsLazy = this.convertFromBase(ElectricReactanceUnits.Teraohms);
    }

    /**
     * Create a new ElectricReactance instance from a Ohms
     *
     * @param value The unit as Ohms to create a new ElectricReactance from.
     * @returns The new ElectricReactance instance.
     */
    public static FromOhms(value: number): ElectricReactance {
        return new ElectricReactance(value, ElectricReactanceUnits.Ohms);
    }

    /**
     * Create a new ElectricReactance instance from a Nanoohms
     *
     * @param value The unit as Nanoohms to create a new ElectricReactance from.
     * @returns The new ElectricReactance instance.
     */
    public static FromNanoohms(value: number): ElectricReactance {
        return new ElectricReactance(value, ElectricReactanceUnits.Nanoohms);
    }

    /**
     * Create a new ElectricReactance instance from a Microohms
     *
     * @param value The unit as Microohms to create a new ElectricReactance from.
     * @returns The new ElectricReactance instance.
     */
    public static FromMicroohms(value: number): ElectricReactance {
        return new ElectricReactance(value, ElectricReactanceUnits.Microohms);
    }

    /**
     * Create a new ElectricReactance instance from a Milliohms
     *
     * @param value The unit as Milliohms to create a new ElectricReactance from.
     * @returns The new ElectricReactance instance.
     */
    public static FromMilliohms(value: number): ElectricReactance {
        return new ElectricReactance(value, ElectricReactanceUnits.Milliohms);
    }

    /**
     * Create a new ElectricReactance instance from a Kiloohms
     *
     * @param value The unit as Kiloohms to create a new ElectricReactance from.
     * @returns The new ElectricReactance instance.
     */
    public static FromKiloohms(value: number): ElectricReactance {
        return new ElectricReactance(value, ElectricReactanceUnits.Kiloohms);
    }

    /**
     * Create a new ElectricReactance instance from a Megaohms
     *
     * @param value The unit as Megaohms to create a new ElectricReactance from.
     * @returns The new ElectricReactance instance.
     */
    public static FromMegaohms(value: number): ElectricReactance {
        return new ElectricReactance(value, ElectricReactanceUnits.Megaohms);
    }

    /**
     * Create a new ElectricReactance instance from a Gigaohms
     *
     * @param value The unit as Gigaohms to create a new ElectricReactance from.
     * @returns The new ElectricReactance instance.
     */
    public static FromGigaohms(value: number): ElectricReactance {
        return new ElectricReactance(value, ElectricReactanceUnits.Gigaohms);
    }

    /**
     * Create a new ElectricReactance instance from a Teraohms
     *
     * @param value The unit as Teraohms to create a new ElectricReactance from.
     * @returns The new ElectricReactance instance.
     */
    public static FromTeraohms(value: number): ElectricReactance {
        return new ElectricReactance(value, ElectricReactanceUnits.Teraohms);
    }

    /**
     * Gets the base unit enumeration associated with ElectricReactance
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricReactanceUnits {
        return ElectricReactanceUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricReactanceUnits.Ohms {
        return ElectricReactanceUnits.Ohms;
    }

    /**
     * Create API DTO represent a ElectricReactance unit.
     * @param holdInUnit The specific ElectricReactance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricReactanceUnits = ElectricReactanceUnits.Ohms): ElectricReactanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricReactance unit from an API DTO representation.
     * @param dtoElectricReactance The ElectricReactance API DTO representation
     */
    public static FromDto(dtoElectricReactance: ElectricReactanceDto): ElectricReactance {
        return new ElectricReactance(dtoElectricReactance.value, dtoElectricReactance.unit);
    }

    /**
     * Convert ElectricReactance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricReactanceUnits): number {
        switch (toUnit) {
            case ElectricReactanceUnits.Ohms: return this.Ohms;
            case ElectricReactanceUnits.Nanoohms: return this.Nanoohms;
            case ElectricReactanceUnits.Microohms: return this.Microohms;
            case ElectricReactanceUnits.Milliohms: return this.Milliohms;
            case ElectricReactanceUnits.Kiloohms: return this.Kiloohms;
            case ElectricReactanceUnits.Megaohms: return this.Megaohms;
            case ElectricReactanceUnits.Gigaohms: return this.Gigaohms;
            case ElectricReactanceUnits.Teraohms: return this.Teraohms;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricReactanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricReactanceUnits.Ohms: return this.value;
                case ElectricReactanceUnits.Nanoohms: return super.internalDivide(this.value, 1e-9);
                case ElectricReactanceUnits.Microohms: return super.internalDivide(this.value, 0.000001);
                case ElectricReactanceUnits.Milliohms: return super.internalDivide(this.value, 0.001);
                case ElectricReactanceUnits.Kiloohms: return super.internalDivide(this.value, 1000);
                case ElectricReactanceUnits.Megaohms: return super.internalDivide(this.value, 1000000);
                case ElectricReactanceUnits.Gigaohms: return super.internalDivide(this.value, 1000000000);
                case ElectricReactanceUnits.Teraohms: return super.internalDivide(this.value, 1000000000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricReactanceUnits.Ohms: return this.value;
            case ElectricReactanceUnits.Nanoohms: return (this.value) / 1e-9;
            case ElectricReactanceUnits.Microohms: return (this.value) / 0.000001;
            case ElectricReactanceUnits.Milliohms: return (this.value) / 0.001;
            case ElectricReactanceUnits.Kiloohms: return (this.value) / 1000;
            case ElectricReactanceUnits.Megaohms: return (this.value) / 1000000;
            case ElectricReactanceUnits.Gigaohms: return (this.value) / 1000000000;
            case ElectricReactanceUnits.Teraohms: return (this.value) / 1000000000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricReactanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricReactanceUnits.Ohms: return value;
                case ElectricReactanceUnits.Nanoohms: return super.internalMultiply(value, 1e-9);
                case ElectricReactanceUnits.Microohms: return super.internalMultiply(value, 0.000001);
                case ElectricReactanceUnits.Milliohms: return super.internalMultiply(value, 0.001);
                case ElectricReactanceUnits.Kiloohms: return super.internalMultiply(value, 1000);
                case ElectricReactanceUnits.Megaohms: return super.internalMultiply(value, 1000000);
                case ElectricReactanceUnits.Gigaohms: return super.internalMultiply(value, 1000000000);
                case ElectricReactanceUnits.Teraohms: return super.internalMultiply(value, 1000000000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricReactanceUnits.Ohms: return value;
            case ElectricReactanceUnits.Nanoohms: return (value) * 1e-9;
            case ElectricReactanceUnits.Microohms: return (value) * 0.000001;
            case ElectricReactanceUnits.Milliohms: return (value) * 0.001;
            case ElectricReactanceUnits.Kiloohms: return (value) * 1000;
            case ElectricReactanceUnits.Megaohms: return (value) * 1000000;
            case ElectricReactanceUnits.Gigaohms: return (value) * 1000000000;
            case ElectricReactanceUnits.Teraohms: return (value) * 1000000000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricReactance to string.
     * Note! the default format for ElectricReactance is Ohms.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricReactance.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricReactance.
     */
    public toString(unit: ElectricReactanceUnits = ElectricReactanceUnits.Ohms, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricReactanceUnits.Ohms:
                return super.truncateFractionDigits(this.Ohms, options as ToStringOptions) + ` Ω`;
            case ElectricReactanceUnits.Nanoohms:
                return super.truncateFractionDigits(this.Nanoohms, options as ToStringOptions) + ` nΩ`;
            case ElectricReactanceUnits.Microohms:
                return super.truncateFractionDigits(this.Microohms, options as ToStringOptions) + ` μΩ`;
            case ElectricReactanceUnits.Milliohms:
                return super.truncateFractionDigits(this.Milliohms, options as ToStringOptions) + ` mΩ`;
            case ElectricReactanceUnits.Kiloohms:
                return super.truncateFractionDigits(this.Kiloohms, options as ToStringOptions) + ` kΩ`;
            case ElectricReactanceUnits.Megaohms:
                return super.truncateFractionDigits(this.Megaohms, options as ToStringOptions) + ` MΩ`;
            case ElectricReactanceUnits.Gigaohms:
                return super.truncateFractionDigits(this.Gigaohms, options as ToStringOptions) + ` GΩ`;
            case ElectricReactanceUnits.Teraohms:
                return super.truncateFractionDigits(this.Teraohms, options as ToStringOptions) + ` TΩ`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricReactance unit abbreviation.
     * Note! the default abbreviation for ElectricReactance is Ohms.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricReactance.
     * @returns The abbreviation string of ElectricReactance.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricReactanceUnits = ElectricReactanceUnits.Ohms): string {

        switch (unitAbbreviation) {
            
            case ElectricReactanceUnits.Ohms:
                return `Ω`;
            case ElectricReactanceUnits.Nanoohms:
                return `nΩ`;
            case ElectricReactanceUnits.Microohms:
                return `μΩ`;
            case ElectricReactanceUnits.Milliohms:
                return `mΩ`;
            case ElectricReactanceUnits.Kiloohms:
                return `kΩ`;
            case ElectricReactanceUnits.Megaohms:
                return `MΩ`;
            case ElectricReactanceUnits.Gigaohms:
                return `GΩ`;
            case ElectricReactanceUnits.Teraohms:
                return `TΩ`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricReactance are equals to the current ElectricReactance.
     * @param electricReactance The other ElectricReactance.
     * @returns True if the given ElectricReactance are equal to the current ElectricReactance.
     */
    public equals(electricReactance: ElectricReactance): boolean {
        return super.internalEquals(this.value, electricReactance.BaseValue);
    }

    /**
     * Compare the given ElectricReactance against the current ElectricReactance.
     * @param electricReactance The other ElectricReactance.
     * @returns 0 if they are equal, -1 if the current ElectricReactance is less then other, 1 if the current ElectricReactance is greater then other.
     */
    public compareTo(electricReactance: ElectricReactance): number {
        return super.internalCompareTo(this.value, electricReactance.BaseValue);
    }

    /**
     * Add the given ElectricReactance with the current ElectricReactance.
     * @param electricReactance The other ElectricReactance.
     * @returns A new ElectricReactance instance with the results.
     */
    public add(electricReactance: ElectricReactance): ElectricReactance {
        return new ElectricReactance(super.internalAdd(this.value, electricReactance.BaseValue))
    }

    /**
     * Subtract the given ElectricReactance with the current ElectricReactance.
     * @param electricReactance The other ElectricReactance.
     * @returns A new ElectricReactance instance with the results.
     */
    public subtract(electricReactance: ElectricReactance): ElectricReactance {
        return new ElectricReactance(super.internalSubtract(this.value, electricReactance.BaseValue))
    }

    /**
     * Multiply the given ElectricReactance with the current ElectricReactance.
     * @param electricReactance The other ElectricReactance.
     * @returns A new ElectricReactance instance with the results.
     */
    public multiply(electricReactance: ElectricReactance): ElectricReactance {
        return new ElectricReactance(super.internalMultiply(this.value, electricReactance.BaseValue))
    }

    /**
     * Divide the given ElectricReactance with the current ElectricReactance.
     * @param electricReactance The other ElectricReactance.
     * @returns A new ElectricReactance instance with the results.
     */
    public divide(electricReactance: ElectricReactance): ElectricReactance {
        return new ElectricReactance(super.internalDivide(this.value, electricReactance.BaseValue))
    }

    /**
     * Modulo the given ElectricReactance with the current ElectricReactance.
     * @param electricReactance The other ElectricReactance.
     * @returns A new ElectricReactance instance with the results.
     */
    public modulo(electricReactance: ElectricReactance): ElectricReactance {
        return new ElectricReactance(super.internalModulo(this.value, electricReactance.BaseValue))
    }

    /**
     * Pow the given ElectricReactance with the current ElectricReactance.
     * @param electricReactance The other ElectricReactance.
     * @returns A new ElectricReactance instance with the results.
     */
    public pow(electricReactance: ElectricReactance): ElectricReactance {
        return new ElectricReactance(super.internalPow(this.value, electricReactance.BaseValue))
    }
}
