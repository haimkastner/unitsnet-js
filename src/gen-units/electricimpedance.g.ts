import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricImpedance */
export interface ElectricImpedanceDto {
    /** The value of the ElectricImpedance */
    value: number;
    /**  The specific unit that the ElectricImpedance value is representing */
    unit: ElectricImpedanceUnits;
}

/** ElectricImpedanceUnits enumeration */
export enum ElectricImpedanceUnits {
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

/** Electric impedance is the opposition to alternating current presented by the combined effect of resistance and reactance in a circuit. It is defined as the inverse of admittance. The SI unit of impedance is the ohm (symbol Ω). */
export class ElectricImpedance extends BaseUnit {
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
     * Create a new ElectricImpedance.
     * @param value The value.
     * @param fromUnit The ‘ElectricImpedance’ unit to create from.
     * The default unit is Ohms
     */
    public constructor(value: number, fromUnit: ElectricImpedanceUnits = ElectricImpedanceUnits.Ohms) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricImpedance is Ohms.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricImpedanceUnits.Ohms {
        return ElectricImpedanceUnits.Ohms
    }

    /** */
    public get Ohms(): number {
        if(this.ohmsLazy !== null){
            return this.ohmsLazy;
        }
        return this.ohmsLazy = this.convertFromBase(ElectricImpedanceUnits.Ohms);
    }

    /** */
    public get Nanoohms(): number {
        if(this.nanoohmsLazy !== null){
            return this.nanoohmsLazy;
        }
        return this.nanoohmsLazy = this.convertFromBase(ElectricImpedanceUnits.Nanoohms);
    }

    /** */
    public get Microohms(): number {
        if(this.microohmsLazy !== null){
            return this.microohmsLazy;
        }
        return this.microohmsLazy = this.convertFromBase(ElectricImpedanceUnits.Microohms);
    }

    /** */
    public get Milliohms(): number {
        if(this.milliohmsLazy !== null){
            return this.milliohmsLazy;
        }
        return this.milliohmsLazy = this.convertFromBase(ElectricImpedanceUnits.Milliohms);
    }

    /** */
    public get Kiloohms(): number {
        if(this.kiloohmsLazy !== null){
            return this.kiloohmsLazy;
        }
        return this.kiloohmsLazy = this.convertFromBase(ElectricImpedanceUnits.Kiloohms);
    }

    /** */
    public get Megaohms(): number {
        if(this.megaohmsLazy !== null){
            return this.megaohmsLazy;
        }
        return this.megaohmsLazy = this.convertFromBase(ElectricImpedanceUnits.Megaohms);
    }

    /** */
    public get Gigaohms(): number {
        if(this.gigaohmsLazy !== null){
            return this.gigaohmsLazy;
        }
        return this.gigaohmsLazy = this.convertFromBase(ElectricImpedanceUnits.Gigaohms);
    }

    /** */
    public get Teraohms(): number {
        if(this.teraohmsLazy !== null){
            return this.teraohmsLazy;
        }
        return this.teraohmsLazy = this.convertFromBase(ElectricImpedanceUnits.Teraohms);
    }

    /**
     * Create a new ElectricImpedance instance from a Ohms
     *
     * @param value The unit as Ohms to create a new ElectricImpedance from.
     * @returns The new ElectricImpedance instance.
     */
    public static FromOhms(value: number): ElectricImpedance {
        return new ElectricImpedance(value, ElectricImpedanceUnits.Ohms);
    }

    /**
     * Create a new ElectricImpedance instance from a Nanoohms
     *
     * @param value The unit as Nanoohms to create a new ElectricImpedance from.
     * @returns The new ElectricImpedance instance.
     */
    public static FromNanoohms(value: number): ElectricImpedance {
        return new ElectricImpedance(value, ElectricImpedanceUnits.Nanoohms);
    }

    /**
     * Create a new ElectricImpedance instance from a Microohms
     *
     * @param value The unit as Microohms to create a new ElectricImpedance from.
     * @returns The new ElectricImpedance instance.
     */
    public static FromMicroohms(value: number): ElectricImpedance {
        return new ElectricImpedance(value, ElectricImpedanceUnits.Microohms);
    }

    /**
     * Create a new ElectricImpedance instance from a Milliohms
     *
     * @param value The unit as Milliohms to create a new ElectricImpedance from.
     * @returns The new ElectricImpedance instance.
     */
    public static FromMilliohms(value: number): ElectricImpedance {
        return new ElectricImpedance(value, ElectricImpedanceUnits.Milliohms);
    }

    /**
     * Create a new ElectricImpedance instance from a Kiloohms
     *
     * @param value The unit as Kiloohms to create a new ElectricImpedance from.
     * @returns The new ElectricImpedance instance.
     */
    public static FromKiloohms(value: number): ElectricImpedance {
        return new ElectricImpedance(value, ElectricImpedanceUnits.Kiloohms);
    }

    /**
     * Create a new ElectricImpedance instance from a Megaohms
     *
     * @param value The unit as Megaohms to create a new ElectricImpedance from.
     * @returns The new ElectricImpedance instance.
     */
    public static FromMegaohms(value: number): ElectricImpedance {
        return new ElectricImpedance(value, ElectricImpedanceUnits.Megaohms);
    }

    /**
     * Create a new ElectricImpedance instance from a Gigaohms
     *
     * @param value The unit as Gigaohms to create a new ElectricImpedance from.
     * @returns The new ElectricImpedance instance.
     */
    public static FromGigaohms(value: number): ElectricImpedance {
        return new ElectricImpedance(value, ElectricImpedanceUnits.Gigaohms);
    }

    /**
     * Create a new ElectricImpedance instance from a Teraohms
     *
     * @param value The unit as Teraohms to create a new ElectricImpedance from.
     * @returns The new ElectricImpedance instance.
     */
    public static FromTeraohms(value: number): ElectricImpedance {
        return new ElectricImpedance(value, ElectricImpedanceUnits.Teraohms);
    }

    /**
     * Gets the base unit enumeration associated with ElectricImpedance
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricImpedanceUnits {
        return ElectricImpedanceUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricImpedanceUnits.Ohms {
        return ElectricImpedanceUnits.Ohms;
    }

    /**
     * Create API DTO represent a ElectricImpedance unit.
     * @param holdInUnit The specific ElectricImpedance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricImpedanceUnits = ElectricImpedanceUnits.Ohms): ElectricImpedanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricImpedance unit from an API DTO representation.
     * @param dtoElectricImpedance The ElectricImpedance API DTO representation
     */
    public static FromDto(dtoElectricImpedance: ElectricImpedanceDto): ElectricImpedance {
        return new ElectricImpedance(dtoElectricImpedance.value, dtoElectricImpedance.unit);
    }

    /**
     * Convert ElectricImpedance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricImpedanceUnits): number {
        switch (toUnit) {
            case ElectricImpedanceUnits.Ohms: return this.Ohms;
            case ElectricImpedanceUnits.Nanoohms: return this.Nanoohms;
            case ElectricImpedanceUnits.Microohms: return this.Microohms;
            case ElectricImpedanceUnits.Milliohms: return this.Milliohms;
            case ElectricImpedanceUnits.Kiloohms: return this.Kiloohms;
            case ElectricImpedanceUnits.Megaohms: return this.Megaohms;
            case ElectricImpedanceUnits.Gigaohms: return this.Gigaohms;
            case ElectricImpedanceUnits.Teraohms: return this.Teraohms;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricImpedanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricImpedanceUnits.Ohms: return this.value;
                case ElectricImpedanceUnits.Nanoohms: return super.internalDivide(this.value, 1e-9);
                case ElectricImpedanceUnits.Microohms: return super.internalDivide(this.value, 0.000001);
                case ElectricImpedanceUnits.Milliohms: return super.internalDivide(this.value, 0.001);
                case ElectricImpedanceUnits.Kiloohms: return super.internalDivide(this.value, 1000);
                case ElectricImpedanceUnits.Megaohms: return super.internalDivide(this.value, 1000000);
                case ElectricImpedanceUnits.Gigaohms: return super.internalDivide(this.value, 1000000000);
                case ElectricImpedanceUnits.Teraohms: return super.internalDivide(this.value, 1000000000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricImpedanceUnits.Ohms: return this.value;
            case ElectricImpedanceUnits.Nanoohms: return (this.value) / 1e-9;
            case ElectricImpedanceUnits.Microohms: return (this.value) / 0.000001;
            case ElectricImpedanceUnits.Milliohms: return (this.value) / 0.001;
            case ElectricImpedanceUnits.Kiloohms: return (this.value) / 1000;
            case ElectricImpedanceUnits.Megaohms: return (this.value) / 1000000;
            case ElectricImpedanceUnits.Gigaohms: return (this.value) / 1000000000;
            case ElectricImpedanceUnits.Teraohms: return (this.value) / 1000000000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricImpedanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricImpedanceUnits.Ohms: return value;
                case ElectricImpedanceUnits.Nanoohms: return super.internalMultiply(value, 1e-9);
                case ElectricImpedanceUnits.Microohms: return super.internalMultiply(value, 0.000001);
                case ElectricImpedanceUnits.Milliohms: return super.internalMultiply(value, 0.001);
                case ElectricImpedanceUnits.Kiloohms: return super.internalMultiply(value, 1000);
                case ElectricImpedanceUnits.Megaohms: return super.internalMultiply(value, 1000000);
                case ElectricImpedanceUnits.Gigaohms: return super.internalMultiply(value, 1000000000);
                case ElectricImpedanceUnits.Teraohms: return super.internalMultiply(value, 1000000000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricImpedanceUnits.Ohms: return value;
            case ElectricImpedanceUnits.Nanoohms: return (value) * 1e-9;
            case ElectricImpedanceUnits.Microohms: return (value) * 0.000001;
            case ElectricImpedanceUnits.Milliohms: return (value) * 0.001;
            case ElectricImpedanceUnits.Kiloohms: return (value) * 1000;
            case ElectricImpedanceUnits.Megaohms: return (value) * 1000000;
            case ElectricImpedanceUnits.Gigaohms: return (value) * 1000000000;
            case ElectricImpedanceUnits.Teraohms: return (value) * 1000000000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricImpedance to string.
     * Note! the default format for ElectricImpedance is Ohms.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricImpedance.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricImpedance.
     */
    public toString(unit: ElectricImpedanceUnits = ElectricImpedanceUnits.Ohms, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricImpedanceUnits.Ohms:
                return super.truncateFractionDigits(this.Ohms, options as ToStringOptions) + ` Ω`;
            case ElectricImpedanceUnits.Nanoohms:
                return super.truncateFractionDigits(this.Nanoohms, options as ToStringOptions) + ` nΩ`;
            case ElectricImpedanceUnits.Microohms:
                return super.truncateFractionDigits(this.Microohms, options as ToStringOptions) + ` μΩ`;
            case ElectricImpedanceUnits.Milliohms:
                return super.truncateFractionDigits(this.Milliohms, options as ToStringOptions) + ` mΩ`;
            case ElectricImpedanceUnits.Kiloohms:
                return super.truncateFractionDigits(this.Kiloohms, options as ToStringOptions) + ` kΩ`;
            case ElectricImpedanceUnits.Megaohms:
                return super.truncateFractionDigits(this.Megaohms, options as ToStringOptions) + ` MΩ`;
            case ElectricImpedanceUnits.Gigaohms:
                return super.truncateFractionDigits(this.Gigaohms, options as ToStringOptions) + ` GΩ`;
            case ElectricImpedanceUnits.Teraohms:
                return super.truncateFractionDigits(this.Teraohms, options as ToStringOptions) + ` TΩ`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricImpedance unit abbreviation.
     * Note! the default abbreviation for ElectricImpedance is Ohms.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricImpedance.
     * @returns The abbreviation string of ElectricImpedance.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricImpedanceUnits = ElectricImpedanceUnits.Ohms): string {

        switch (unitAbbreviation) {
            
            case ElectricImpedanceUnits.Ohms:
                return `Ω`;
            case ElectricImpedanceUnits.Nanoohms:
                return `nΩ`;
            case ElectricImpedanceUnits.Microohms:
                return `μΩ`;
            case ElectricImpedanceUnits.Milliohms:
                return `mΩ`;
            case ElectricImpedanceUnits.Kiloohms:
                return `kΩ`;
            case ElectricImpedanceUnits.Megaohms:
                return `MΩ`;
            case ElectricImpedanceUnits.Gigaohms:
                return `GΩ`;
            case ElectricImpedanceUnits.Teraohms:
                return `TΩ`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricImpedance are equals to the current ElectricImpedance.
     * @param electricImpedance The other ElectricImpedance.
     * @returns True if the given ElectricImpedance are equal to the current ElectricImpedance.
     */
    public equals(electricImpedance: ElectricImpedance): boolean {
        return super.internalEquals(this.value, electricImpedance.BaseValue);
    }

    /**
     * Compare the given ElectricImpedance against the current ElectricImpedance.
     * @param electricImpedance The other ElectricImpedance.
     * @returns 0 if they are equal, -1 if the current ElectricImpedance is less then other, 1 if the current ElectricImpedance is greater then other.
     */
    public compareTo(electricImpedance: ElectricImpedance): number {
        return super.internalCompareTo(this.value, electricImpedance.BaseValue);
    }

    /**
     * Add the given ElectricImpedance with the current ElectricImpedance.
     * @param electricImpedance The other ElectricImpedance.
     * @returns A new ElectricImpedance instance with the results.
     */
    public add(electricImpedance: ElectricImpedance): ElectricImpedance {
        return new ElectricImpedance(super.internalAdd(this.value, electricImpedance.BaseValue))
    }

    /**
     * Subtract the given ElectricImpedance with the current ElectricImpedance.
     * @param electricImpedance The other ElectricImpedance.
     * @returns A new ElectricImpedance instance with the results.
     */
    public subtract(electricImpedance: ElectricImpedance): ElectricImpedance {
        return new ElectricImpedance(super.internalSubtract(this.value, electricImpedance.BaseValue))
    }

    /**
     * Multiply the given ElectricImpedance with the current ElectricImpedance.
     * @param electricImpedance The other ElectricImpedance.
     * @returns A new ElectricImpedance instance with the results.
     */
    public multiply(electricImpedance: ElectricImpedance): ElectricImpedance {
        return new ElectricImpedance(super.internalMultiply(this.value, electricImpedance.BaseValue))
    }

    /**
     * Divide the given ElectricImpedance with the current ElectricImpedance.
     * @param electricImpedance The other ElectricImpedance.
     * @returns A new ElectricImpedance instance with the results.
     */
    public divide(electricImpedance: ElectricImpedance): ElectricImpedance {
        return new ElectricImpedance(super.internalDivide(this.value, electricImpedance.BaseValue))
    }

    /**
     * Modulo the given ElectricImpedance with the current ElectricImpedance.
     * @param electricImpedance The other ElectricImpedance.
     * @returns A new ElectricImpedance instance with the results.
     */
    public modulo(electricImpedance: ElectricImpedance): ElectricImpedance {
        return new ElectricImpedance(super.internalModulo(this.value, electricImpedance.BaseValue))
    }

    /**
     * Pow the given ElectricImpedance with the current ElectricImpedance.
     * @param electricImpedance The other ElectricImpedance.
     * @returns A new ElectricImpedance instance with the results.
     */
    public pow(electricImpedance: ElectricImpedance): ElectricImpedance {
        return new ElectricImpedance(super.internalPow(this.value, electricImpedance.BaseValue))
    }
}
