import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Capacitance */
export interface CapacitanceDto {
    /** The value of the Capacitance */
    value: number;
    /**  The specific unit that the Capacitance value is representing */
    unit: CapacitanceUnits;
}

/** CapacitanceUnits enumeration */
export enum CapacitanceUnits {
    /** */
    Farads = "Farad",
    /** */
    Picofarads = "Picofarad",
    /** */
    Nanofarads = "Nanofarad",
    /** */
    Microfarads = "Microfarad",
    /** */
    Millifarads = "Millifarad",
    /** */
    Kilofarads = "Kilofarad",
    /** */
    Megafarads = "Megafarad"
}

/** Capacitance is the ability of a body to store an electric charge. */
export class Capacitance extends BaseUnit {
    private value: number;
    private faradsLazy: number | null = null;
    private picofaradsLazy: number | null = null;
    private nanofaradsLazy: number | null = null;
    private microfaradsLazy: number | null = null;
    private millifaradsLazy: number | null = null;
    private kilofaradsLazy: number | null = null;
    private megafaradsLazy: number | null = null;

    /**
     * Create a new Capacitance.
     * @param value The value.
     * @param fromUnit The ‘Capacitance’ unit to create from.
     * The default unit is Farads
     */
    public constructor(value: number, fromUnit: CapacitanceUnits = CapacitanceUnits.Farads) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Capacitance is Farads.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Farads(): number {
        if(this.faradsLazy !== null){
            return this.faradsLazy;
        }
        return this.faradsLazy = this.convertFromBase(CapacitanceUnits.Farads);
    }

    /** */
    public get Picofarads(): number {
        if(this.picofaradsLazy !== null){
            return this.picofaradsLazy;
        }
        return this.picofaradsLazy = this.convertFromBase(CapacitanceUnits.Picofarads);
    }

    /** */
    public get Nanofarads(): number {
        if(this.nanofaradsLazy !== null){
            return this.nanofaradsLazy;
        }
        return this.nanofaradsLazy = this.convertFromBase(CapacitanceUnits.Nanofarads);
    }

    /** */
    public get Microfarads(): number {
        if(this.microfaradsLazy !== null){
            return this.microfaradsLazy;
        }
        return this.microfaradsLazy = this.convertFromBase(CapacitanceUnits.Microfarads);
    }

    /** */
    public get Millifarads(): number {
        if(this.millifaradsLazy !== null){
            return this.millifaradsLazy;
        }
        return this.millifaradsLazy = this.convertFromBase(CapacitanceUnits.Millifarads);
    }

    /** */
    public get Kilofarads(): number {
        if(this.kilofaradsLazy !== null){
            return this.kilofaradsLazy;
        }
        return this.kilofaradsLazy = this.convertFromBase(CapacitanceUnits.Kilofarads);
    }

    /** */
    public get Megafarads(): number {
        if(this.megafaradsLazy !== null){
            return this.megafaradsLazy;
        }
        return this.megafaradsLazy = this.convertFromBase(CapacitanceUnits.Megafarads);
    }

    /**
     * Create a new Capacitance instance from a Farads
     *
     * @param value The unit as Farads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromFarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Farads);
    }

    /**
     * Create a new Capacitance instance from a Picofarads
     *
     * @param value The unit as Picofarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromPicofarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Picofarads);
    }

    /**
     * Create a new Capacitance instance from a Nanofarads
     *
     * @param value The unit as Nanofarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromNanofarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Nanofarads);
    }

    /**
     * Create a new Capacitance instance from a Microfarads
     *
     * @param value The unit as Microfarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromMicrofarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Microfarads);
    }

    /**
     * Create a new Capacitance instance from a Millifarads
     *
     * @param value The unit as Millifarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromMillifarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Millifarads);
    }

    /**
     * Create a new Capacitance instance from a Kilofarads
     *
     * @param value The unit as Kilofarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromKilofarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Kilofarads);
    }

    /**
     * Create a new Capacitance instance from a Megafarads
     *
     * @param value The unit as Megafarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromMegafarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Megafarads);
    }

    /**
     * Create API DTO represent a Capacitance unit.
     * @param holdInUnit The specific Capacitance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: CapacitanceUnits = CapacitanceUnits.Farads): CapacitanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Capacitance unit from an API DTO representation.
     * @param dtoCapacitance The Capacitance API DTO representation
     */
    public static FromDto(dtoCapacitance: CapacitanceDto): Capacitance {
        return new Capacitance(dtoCapacitance.value, dtoCapacitance.unit);
    }

    /**
     * Convert Capacitance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: CapacitanceUnits): number {
        switch (toUnit) {
            case CapacitanceUnits.Farads: return this.Farads;
            case CapacitanceUnits.Picofarads: return this.Picofarads;
            case CapacitanceUnits.Nanofarads: return this.Nanofarads;
            case CapacitanceUnits.Microfarads: return this.Microfarads;
            case CapacitanceUnits.Millifarads: return this.Millifarads;
            case CapacitanceUnits.Kilofarads: return this.Kilofarads;
            case CapacitanceUnits.Megafarads: return this.Megafarads;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: CapacitanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case CapacitanceUnits.Farads: return this.value;
                case CapacitanceUnits.Picofarads: return super.internalDivide(this.value, 1e-12);
                case CapacitanceUnits.Nanofarads: return super.internalDivide(this.value, 1e-9);
                case CapacitanceUnits.Microfarads: return super.internalDivide(this.value, 0.000001);
                case CapacitanceUnits.Millifarads: return super.internalDivide(this.value, 0.001);
                case CapacitanceUnits.Kilofarads: return super.internalDivide(this.value, 1000);
                case CapacitanceUnits.Megafarads: return super.internalDivide(this.value, 1000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case CapacitanceUnits.Farads: return this.value;
            case CapacitanceUnits.Picofarads: return (this.value) / 1e-12;
            case CapacitanceUnits.Nanofarads: return (this.value) / 1e-9;
            case CapacitanceUnits.Microfarads: return (this.value) / 0.000001;
            case CapacitanceUnits.Millifarads: return (this.value) / 0.001;
            case CapacitanceUnits.Kilofarads: return (this.value) / 1000;
            case CapacitanceUnits.Megafarads: return (this.value) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: CapacitanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case CapacitanceUnits.Farads: return value;
                case CapacitanceUnits.Picofarads: return super.internalMultiply(value, 1e-12);
                case CapacitanceUnits.Nanofarads: return super.internalMultiply(value, 1e-9);
                case CapacitanceUnits.Microfarads: return super.internalMultiply(value, 0.000001);
                case CapacitanceUnits.Millifarads: return super.internalMultiply(value, 0.001);
                case CapacitanceUnits.Kilofarads: return super.internalMultiply(value, 1000);
                case CapacitanceUnits.Megafarads: return super.internalMultiply(value, 1000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case CapacitanceUnits.Farads: return value;
            case CapacitanceUnits.Picofarads: return (value) * 1e-12;
            case CapacitanceUnits.Nanofarads: return (value) * 1e-9;
            case CapacitanceUnits.Microfarads: return (value) * 0.000001;
            case CapacitanceUnits.Millifarads: return (value) * 0.001;
            case CapacitanceUnits.Kilofarads: return (value) * 1000;
            case CapacitanceUnits.Megafarads: return (value) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Capacitance to string.
     * Note! the default format for Capacitance is Farads.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Capacitance.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Capacitance.
     */
    public toString(unit: CapacitanceUnits = CapacitanceUnits.Farads, fractionalDigits?: number): string {

        switch (unit) {
            
            case CapacitanceUnits.Farads:
                return super.truncateFractionDigits(this.Farads, fractionalDigits) + ` F`;
            case CapacitanceUnits.Picofarads:
                return super.truncateFractionDigits(this.Picofarads, fractionalDigits) + ` pF`;
            case CapacitanceUnits.Nanofarads:
                return super.truncateFractionDigits(this.Nanofarads, fractionalDigits) + ` nF`;
            case CapacitanceUnits.Microfarads:
                return super.truncateFractionDigits(this.Microfarads, fractionalDigits) + ` μF`;
            case CapacitanceUnits.Millifarads:
                return super.truncateFractionDigits(this.Millifarads, fractionalDigits) + ` mF`;
            case CapacitanceUnits.Kilofarads:
                return super.truncateFractionDigits(this.Kilofarads, fractionalDigits) + ` kF`;
            case CapacitanceUnits.Megafarads:
                return super.truncateFractionDigits(this.Megafarads, fractionalDigits) + ` MF`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Capacitance unit abbreviation.
     * Note! the default abbreviation for Capacitance is Farads.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Capacitance.
     * @returns The abbreviation string of Capacitance.
     */
    public getUnitAbbreviation(unitAbbreviation: CapacitanceUnits = CapacitanceUnits.Farads): string {

        switch (unitAbbreviation) {
            
            case CapacitanceUnits.Farads:
                return `F`;
            case CapacitanceUnits.Picofarads:
                return `pF`;
            case CapacitanceUnits.Nanofarads:
                return `nF`;
            case CapacitanceUnits.Microfarads:
                return `μF`;
            case CapacitanceUnits.Millifarads:
                return `mF`;
            case CapacitanceUnits.Kilofarads:
                return `kF`;
            case CapacitanceUnits.Megafarads:
                return `MF`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Capacitance are equals to the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns True if the given Capacitance are equal to the current Capacitance.
     */
    public equals(capacitance: Capacitance): boolean {
        return super.internalEquals(this.value, capacitance.BaseValue);
    }

    /**
     * Compare the given Capacitance against the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns 0 if they are equal, -1 if the current Capacitance is less then other, 1 if the current Capacitance is greater then other.
     */
    public compareTo(capacitance: Capacitance): number {
        return super.internalCompareTo(this.value, capacitance.BaseValue);
    }

    /**
     * Add the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    public add(capacitance: Capacitance): Capacitance {
        return new Capacitance(super.internalAdd(this.value, capacitance.BaseValue))
    }

    /**
     * Subtract the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    public subtract(capacitance: Capacitance): Capacitance {
        return new Capacitance(super.internalSubtract(this.value, capacitance.BaseValue))
    }

    /**
     * Multiply the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    public multiply(capacitance: Capacitance): Capacitance {
        return new Capacitance(super.internalMultiply(this.value, capacitance.BaseValue))
    }

    /**
     * Divide the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    public divide(capacitance: Capacitance): Capacitance {
        return new Capacitance(super.internalDivide(this.value, capacitance.BaseValue))
    }

    /**
     * Modulo the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    public modulo(capacitance: Capacitance): Capacitance {
        return new Capacitance(super.internalModulo(this.value, capacitance.BaseValue))
    }

    /**
     * Pow the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    public pow(capacitance: Capacitance): Capacitance {
        return new Capacitance(super.internalPow(this.value, capacitance.BaseValue))
    }
}
