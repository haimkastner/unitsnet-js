import { BaseUnit } from "../base-unit";

/** API DTO represents a ElectricResistance */
export interface ElectricResistanceDto {
    /** The value of the ElectricResistance */
    value: number;
    /**  The specific unit that the ElectricResistance value is representing */
    unit: ElectricResistanceUnits;
}

/** ElectricResistanceUnits enumeration */
export enum ElectricResistanceUnits {
    /** */
    Ohms = "Ohm",
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

/** The electrical resistance of an electrical conductor is the opposition to the passage of an electric current through that conductor. */
export class ElectricResistance extends BaseUnit {
    private value: number;
    private ohmsLazy: number | null = null;
    private microohmsLazy: number | null = null;
    private milliohmsLazy: number | null = null;
    private kiloohmsLazy: number | null = null;
    private megaohmsLazy: number | null = null;
    private gigaohmsLazy: number | null = null;
    private teraohmsLazy: number | null = null;

    /**
     * Create a new ElectricResistance.
     * @param value The value.
     * @param fromUnit The ‘ElectricResistance’ unit to create from.
     * The default unit is Ohms
     */
    public constructor(value: number, fromUnit: ElectricResistanceUnits = ElectricResistanceUnits.Ohms) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricResistance is Ohms.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Ohms(): number {
        if(this.ohmsLazy !== null){
            return this.ohmsLazy;
        }
        return this.ohmsLazy = this.convertFromBase(ElectricResistanceUnits.Ohms);
    }

    /** */
    public get Microohms(): number {
        if(this.microohmsLazy !== null){
            return this.microohmsLazy;
        }
        return this.microohmsLazy = this.convertFromBase(ElectricResistanceUnits.Microohms);
    }

    /** */
    public get Milliohms(): number {
        if(this.milliohmsLazy !== null){
            return this.milliohmsLazy;
        }
        return this.milliohmsLazy = this.convertFromBase(ElectricResistanceUnits.Milliohms);
    }

    /** */
    public get Kiloohms(): number {
        if(this.kiloohmsLazy !== null){
            return this.kiloohmsLazy;
        }
        return this.kiloohmsLazy = this.convertFromBase(ElectricResistanceUnits.Kiloohms);
    }

    /** */
    public get Megaohms(): number {
        if(this.megaohmsLazy !== null){
            return this.megaohmsLazy;
        }
        return this.megaohmsLazy = this.convertFromBase(ElectricResistanceUnits.Megaohms);
    }

    /** */
    public get Gigaohms(): number {
        if(this.gigaohmsLazy !== null){
            return this.gigaohmsLazy;
        }
        return this.gigaohmsLazy = this.convertFromBase(ElectricResistanceUnits.Gigaohms);
    }

    /** */
    public get Teraohms(): number {
        if(this.teraohmsLazy !== null){
            return this.teraohmsLazy;
        }
        return this.teraohmsLazy = this.convertFromBase(ElectricResistanceUnits.Teraohms);
    }

    /**
     * Create a new ElectricResistance instance from a Ohms
     *
     * @param value The unit as Ohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    public static FromOhms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Ohms);
    }

    /**
     * Create a new ElectricResistance instance from a Microohms
     *
     * @param value The unit as Microohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    public static FromMicroohms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Microohms);
    }

    /**
     * Create a new ElectricResistance instance from a Milliohms
     *
     * @param value The unit as Milliohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    public static FromMilliohms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Milliohms);
    }

    /**
     * Create a new ElectricResistance instance from a Kiloohms
     *
     * @param value The unit as Kiloohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    public static FromKiloohms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Kiloohms);
    }

    /**
     * Create a new ElectricResistance instance from a Megaohms
     *
     * @param value The unit as Megaohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    public static FromMegaohms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Megaohms);
    }

    /**
     * Create a new ElectricResistance instance from a Gigaohms
     *
     * @param value The unit as Gigaohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    public static FromGigaohms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Gigaohms);
    }

    /**
     * Create a new ElectricResistance instance from a Teraohms
     *
     * @param value The unit as Teraohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    public static FromTeraohms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Teraohms);
    }

    /**
     * Create API DTO represent a ElectricResistance unit.
     * @param holdInUnit The specific ElectricResistance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricResistanceUnits = ElectricResistanceUnits.Ohms): ElectricResistanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricResistance unit from an API DTO representation.
     * @param dtoElectricResistance The ElectricResistance API DTO representation
     */
    public static FromDto(dtoElectricResistance: ElectricResistanceDto): ElectricResistance {
        return new ElectricResistance(dtoElectricResistance.value, dtoElectricResistance.unit);
    }

    /**
     * Convert ElectricResistance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricResistanceUnits): number {
        switch (toUnit) {
            case ElectricResistanceUnits.Ohms: return this.Ohms;
            case ElectricResistanceUnits.Microohms: return this.Microohms;
            case ElectricResistanceUnits.Milliohms: return this.Milliohms;
            case ElectricResistanceUnits.Kiloohms: return this.Kiloohms;
            case ElectricResistanceUnits.Megaohms: return this.Megaohms;
            case ElectricResistanceUnits.Gigaohms: return this.Gigaohms;
            case ElectricResistanceUnits.Teraohms: return this.Teraohms;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: ElectricResistanceUnits): number {
        switch (toUnit) {
                
            case ElectricResistanceUnits.Ohms:
                return this.value;
            case ElectricResistanceUnits.Microohms:
                return (this.value) / 0.000001;
            case ElectricResistanceUnits.Milliohms:
                return (this.value) / 0.001;
            case ElectricResistanceUnits.Kiloohms:
                return (this.value) / 1000;
            case ElectricResistanceUnits.Megaohms:
                return (this.value) / 1000000;
            case ElectricResistanceUnits.Gigaohms:
                return (this.value) / 1000000000;
            case ElectricResistanceUnits.Teraohms:
                return (this.value) / 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricResistanceUnits): number {
        switch (fromUnit) {
                
            case ElectricResistanceUnits.Ohms:
                return value;
            case ElectricResistanceUnits.Microohms:
                return (value) * 0.000001;
            case ElectricResistanceUnits.Milliohms:
                return (value) * 0.001;
            case ElectricResistanceUnits.Kiloohms:
                return (value) * 1000;
            case ElectricResistanceUnits.Megaohms:
                return (value) * 1000000;
            case ElectricResistanceUnits.Gigaohms:
                return (value) * 1000000000;
            case ElectricResistanceUnits.Teraohms:
                return (value) * 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricResistance to string.
     * Note! the default format for ElectricResistance is Ohms.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricResistance.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the ElectricResistance.
     */
    public toString(unit: ElectricResistanceUnits = ElectricResistanceUnits.Ohms, fractionalDigits?: number): string {

        switch (unit) {
            
            case ElectricResistanceUnits.Ohms:
                return super.truncateFractionDigits(this.Ohms, fractionalDigits) + ` Ω`;
            case ElectricResistanceUnits.Microohms:
                return super.truncateFractionDigits(this.Microohms, fractionalDigits) + ` μΩ`;
            case ElectricResistanceUnits.Milliohms:
                return super.truncateFractionDigits(this.Milliohms, fractionalDigits) + ` mΩ`;
            case ElectricResistanceUnits.Kiloohms:
                return super.truncateFractionDigits(this.Kiloohms, fractionalDigits) + ` kΩ`;
            case ElectricResistanceUnits.Megaohms:
                return super.truncateFractionDigits(this.Megaohms, fractionalDigits) + ` MΩ`;
            case ElectricResistanceUnits.Gigaohms:
                return super.truncateFractionDigits(this.Gigaohms, fractionalDigits) + ` GΩ`;
            case ElectricResistanceUnits.Teraohms:
                return super.truncateFractionDigits(this.Teraohms, fractionalDigits) + ` TΩ`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricResistance unit abbreviation.
     * Note! the default abbreviation for ElectricResistance is Ohms.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricResistance.
     * @returns The abbreviation string of ElectricResistance.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricResistanceUnits = ElectricResistanceUnits.Ohms): string {

        switch (unitAbbreviation) {
            
            case ElectricResistanceUnits.Ohms:
                return `Ω`;
            case ElectricResistanceUnits.Microohms:
                return `μΩ`;
            case ElectricResistanceUnits.Milliohms:
                return `mΩ`;
            case ElectricResistanceUnits.Kiloohms:
                return `kΩ`;
            case ElectricResistanceUnits.Megaohms:
                return `MΩ`;
            case ElectricResistanceUnits.Gigaohms:
                return `GΩ`;
            case ElectricResistanceUnits.Teraohms:
                return `TΩ`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricResistance are equals to the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns True if the given ElectricResistance are equal to the current ElectricResistance.
     */
    public equals(electricResistance: ElectricResistance): boolean {
        return super.internalEquals(this.value, electricResistance.BaseValue);
    }

    /**
     * Compare the given ElectricResistance against the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns 0 if they are equal, -1 if the current ElectricResistance is less then other, 1 if the current ElectricResistance is greater then other.
     */
    public compareTo(electricResistance: ElectricResistance): number {
        return super.internalCompareTo(this.value, electricResistance.BaseValue);
    }

    /**
     * Add the given ElectricResistance with the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns A new ElectricResistance instance with the results.
     */
    public add(electricResistance: ElectricResistance): ElectricResistance {
        return new ElectricResistance(super.internalAdd(this.value, electricResistance.BaseValue))
    }

    /**
     * Subtract the given ElectricResistance with the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns A new ElectricResistance instance with the results.
     */
    public subtract(electricResistance: ElectricResistance): ElectricResistance {
        return new ElectricResistance(super.internalSubtract(this.value, electricResistance.BaseValue))
    }

    /**
     * Multiply the given ElectricResistance with the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns A new ElectricResistance instance with the results.
     */
    public multiply(electricResistance: ElectricResistance): ElectricResistance {
        return new ElectricResistance(super.internalMultiply(this.value, electricResistance.BaseValue))
    }

    /**
     * Divide the given ElectricResistance with the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns A new ElectricResistance instance with the results.
     */
    public divide(electricResistance: ElectricResistance): ElectricResistance {
        return new ElectricResistance(super.internalDivide(this.value, electricResistance.BaseValue))
    }

    /**
     * Modulo the given ElectricResistance with the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns A new ElectricResistance instance with the results.
     */
    public modulo(electricResistance: ElectricResistance): ElectricResistance {
        return new ElectricResistance(super.internalModulo(this.value, electricResistance.BaseValue))
    }

    /**
     * Pow the given ElectricResistance with the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns A new ElectricResistance instance with the results.
     */
    public pow(electricResistance: ElectricResistance): ElectricResistance {
        return new ElectricResistance(super.internalPow(this.value, electricResistance.BaseValue))
    }
}
