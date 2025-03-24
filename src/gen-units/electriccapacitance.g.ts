import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricCapacitance */
export interface ElectricCapacitanceDto {
    /** The value of the ElectricCapacitance */
    value: number;
    /**  The specific unit that the ElectricCapacitance value is representing */
    unit: ElectricCapacitanceUnits;
}

/** ElectricCapacitanceUnits enumeration */
export enum ElectricCapacitanceUnits {
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

/** Capacitance is the capacity of a material object or device to store electric charge. */
export class ElectricCapacitance extends BaseUnit {
    protected value: number;
    private faradsLazy: number | null = null;
    private picofaradsLazy: number | null = null;
    private nanofaradsLazy: number | null = null;
    private microfaradsLazy: number | null = null;
    private millifaradsLazy: number | null = null;
    private kilofaradsLazy: number | null = null;
    private megafaradsLazy: number | null = null;

    /**
     * Create a new ElectricCapacitance.
     * @param value The value.
     * @param fromUnit The ‘ElectricCapacitance’ unit to create from.
     * The default unit is Farads
     */
    public constructor(value: number, fromUnit: ElectricCapacitanceUnits = ElectricCapacitanceUnits.Farads) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricCapacitance is Farads.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricCapacitanceUnits.Farads {
        return ElectricCapacitanceUnits.Farads
    }

    /** */
    public get Farads(): number {
        if(this.faradsLazy !== null){
            return this.faradsLazy;
        }
        return this.faradsLazy = this.convertFromBase(ElectricCapacitanceUnits.Farads);
    }

    /** */
    public get Picofarads(): number {
        if(this.picofaradsLazy !== null){
            return this.picofaradsLazy;
        }
        return this.picofaradsLazy = this.convertFromBase(ElectricCapacitanceUnits.Picofarads);
    }

    /** */
    public get Nanofarads(): number {
        if(this.nanofaradsLazy !== null){
            return this.nanofaradsLazy;
        }
        return this.nanofaradsLazy = this.convertFromBase(ElectricCapacitanceUnits.Nanofarads);
    }

    /** */
    public get Microfarads(): number {
        if(this.microfaradsLazy !== null){
            return this.microfaradsLazy;
        }
        return this.microfaradsLazy = this.convertFromBase(ElectricCapacitanceUnits.Microfarads);
    }

    /** */
    public get Millifarads(): number {
        if(this.millifaradsLazy !== null){
            return this.millifaradsLazy;
        }
        return this.millifaradsLazy = this.convertFromBase(ElectricCapacitanceUnits.Millifarads);
    }

    /** */
    public get Kilofarads(): number {
        if(this.kilofaradsLazy !== null){
            return this.kilofaradsLazy;
        }
        return this.kilofaradsLazy = this.convertFromBase(ElectricCapacitanceUnits.Kilofarads);
    }

    /** */
    public get Megafarads(): number {
        if(this.megafaradsLazy !== null){
            return this.megafaradsLazy;
        }
        return this.megafaradsLazy = this.convertFromBase(ElectricCapacitanceUnits.Megafarads);
    }

    /**
     * Create a new ElectricCapacitance instance from a Farads
     *
     * @param value The unit as Farads to create a new ElectricCapacitance from.
     * @returns The new ElectricCapacitance instance.
     */
    public static FromFarads(value: number): ElectricCapacitance {
        return new ElectricCapacitance(value, ElectricCapacitanceUnits.Farads);
    }

    /**
     * Create a new ElectricCapacitance instance from a Picofarads
     *
     * @param value The unit as Picofarads to create a new ElectricCapacitance from.
     * @returns The new ElectricCapacitance instance.
     */
    public static FromPicofarads(value: number): ElectricCapacitance {
        return new ElectricCapacitance(value, ElectricCapacitanceUnits.Picofarads);
    }

    /**
     * Create a new ElectricCapacitance instance from a Nanofarads
     *
     * @param value The unit as Nanofarads to create a new ElectricCapacitance from.
     * @returns The new ElectricCapacitance instance.
     */
    public static FromNanofarads(value: number): ElectricCapacitance {
        return new ElectricCapacitance(value, ElectricCapacitanceUnits.Nanofarads);
    }

    /**
     * Create a new ElectricCapacitance instance from a Microfarads
     *
     * @param value The unit as Microfarads to create a new ElectricCapacitance from.
     * @returns The new ElectricCapacitance instance.
     */
    public static FromMicrofarads(value: number): ElectricCapacitance {
        return new ElectricCapacitance(value, ElectricCapacitanceUnits.Microfarads);
    }

    /**
     * Create a new ElectricCapacitance instance from a Millifarads
     *
     * @param value The unit as Millifarads to create a new ElectricCapacitance from.
     * @returns The new ElectricCapacitance instance.
     */
    public static FromMillifarads(value: number): ElectricCapacitance {
        return new ElectricCapacitance(value, ElectricCapacitanceUnits.Millifarads);
    }

    /**
     * Create a new ElectricCapacitance instance from a Kilofarads
     *
     * @param value The unit as Kilofarads to create a new ElectricCapacitance from.
     * @returns The new ElectricCapacitance instance.
     */
    public static FromKilofarads(value: number): ElectricCapacitance {
        return new ElectricCapacitance(value, ElectricCapacitanceUnits.Kilofarads);
    }

    /**
     * Create a new ElectricCapacitance instance from a Megafarads
     *
     * @param value The unit as Megafarads to create a new ElectricCapacitance from.
     * @returns The new ElectricCapacitance instance.
     */
    public static FromMegafarads(value: number): ElectricCapacitance {
        return new ElectricCapacitance(value, ElectricCapacitanceUnits.Megafarads);
    }

    /**
     * Gets the base unit enumeration associated with ElectricCapacitance
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricCapacitanceUnits {
        return ElectricCapacitanceUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricCapacitanceUnits.Farads {
        return ElectricCapacitanceUnits.Farads;
    }

    /**
     * Create API DTO represent a ElectricCapacitance unit.
     * @param holdInUnit The specific ElectricCapacitance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricCapacitanceUnits = ElectricCapacitanceUnits.Farads): ElectricCapacitanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricCapacitance unit from an API DTO representation.
     * @param dtoElectricCapacitance The ElectricCapacitance API DTO representation
     */
    public static FromDto(dtoElectricCapacitance: ElectricCapacitanceDto): ElectricCapacitance {
        return new ElectricCapacitance(dtoElectricCapacitance.value, dtoElectricCapacitance.unit);
    }

    /**
     * Convert ElectricCapacitance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricCapacitanceUnits): number {
        switch (toUnit) {
            case ElectricCapacitanceUnits.Farads: return this.Farads;
            case ElectricCapacitanceUnits.Picofarads: return this.Picofarads;
            case ElectricCapacitanceUnits.Nanofarads: return this.Nanofarads;
            case ElectricCapacitanceUnits.Microfarads: return this.Microfarads;
            case ElectricCapacitanceUnits.Millifarads: return this.Millifarads;
            case ElectricCapacitanceUnits.Kilofarads: return this.Kilofarads;
            case ElectricCapacitanceUnits.Megafarads: return this.Megafarads;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricCapacitanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricCapacitanceUnits.Farads: return this.value;
                case ElectricCapacitanceUnits.Picofarads: return super.internalDivide(this.value, 1e-12);
                case ElectricCapacitanceUnits.Nanofarads: return super.internalDivide(this.value, 1e-9);
                case ElectricCapacitanceUnits.Microfarads: return super.internalDivide(this.value, 0.000001);
                case ElectricCapacitanceUnits.Millifarads: return super.internalDivide(this.value, 0.001);
                case ElectricCapacitanceUnits.Kilofarads: return super.internalDivide(this.value, 1000);
                case ElectricCapacitanceUnits.Megafarads: return super.internalDivide(this.value, 1000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricCapacitanceUnits.Farads: return this.value;
            case ElectricCapacitanceUnits.Picofarads: return (this.value) / 1e-12;
            case ElectricCapacitanceUnits.Nanofarads: return (this.value) / 1e-9;
            case ElectricCapacitanceUnits.Microfarads: return (this.value) / 0.000001;
            case ElectricCapacitanceUnits.Millifarads: return (this.value) / 0.001;
            case ElectricCapacitanceUnits.Kilofarads: return (this.value) / 1000;
            case ElectricCapacitanceUnits.Megafarads: return (this.value) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricCapacitanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricCapacitanceUnits.Farads: return value;
                case ElectricCapacitanceUnits.Picofarads: return super.internalMultiply(value, 1e-12);
                case ElectricCapacitanceUnits.Nanofarads: return super.internalMultiply(value, 1e-9);
                case ElectricCapacitanceUnits.Microfarads: return super.internalMultiply(value, 0.000001);
                case ElectricCapacitanceUnits.Millifarads: return super.internalMultiply(value, 0.001);
                case ElectricCapacitanceUnits.Kilofarads: return super.internalMultiply(value, 1000);
                case ElectricCapacitanceUnits.Megafarads: return super.internalMultiply(value, 1000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricCapacitanceUnits.Farads: return value;
            case ElectricCapacitanceUnits.Picofarads: return (value) * 1e-12;
            case ElectricCapacitanceUnits.Nanofarads: return (value) * 1e-9;
            case ElectricCapacitanceUnits.Microfarads: return (value) * 0.000001;
            case ElectricCapacitanceUnits.Millifarads: return (value) * 0.001;
            case ElectricCapacitanceUnits.Kilofarads: return (value) * 1000;
            case ElectricCapacitanceUnits.Megafarads: return (value) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricCapacitance to string.
     * Note! the default format for ElectricCapacitance is Farads.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricCapacitance.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricCapacitance.
     */
    public toString(unit: ElectricCapacitanceUnits = ElectricCapacitanceUnits.Farads, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricCapacitanceUnits.Farads:
                return super.truncateFractionDigits(this.Farads, options as ToStringOptions) + ` F`;
            case ElectricCapacitanceUnits.Picofarads:
                return super.truncateFractionDigits(this.Picofarads, options as ToStringOptions) + ` pF`;
            case ElectricCapacitanceUnits.Nanofarads:
                return super.truncateFractionDigits(this.Nanofarads, options as ToStringOptions) + ` nF`;
            case ElectricCapacitanceUnits.Microfarads:
                return super.truncateFractionDigits(this.Microfarads, options as ToStringOptions) + ` μF`;
            case ElectricCapacitanceUnits.Millifarads:
                return super.truncateFractionDigits(this.Millifarads, options as ToStringOptions) + ` mF`;
            case ElectricCapacitanceUnits.Kilofarads:
                return super.truncateFractionDigits(this.Kilofarads, options as ToStringOptions) + ` kF`;
            case ElectricCapacitanceUnits.Megafarads:
                return super.truncateFractionDigits(this.Megafarads, options as ToStringOptions) + ` MF`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricCapacitance unit abbreviation.
     * Note! the default abbreviation for ElectricCapacitance is Farads.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricCapacitance.
     * @returns The abbreviation string of ElectricCapacitance.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricCapacitanceUnits = ElectricCapacitanceUnits.Farads): string {

        switch (unitAbbreviation) {
            
            case ElectricCapacitanceUnits.Farads:
                return `F`;
            case ElectricCapacitanceUnits.Picofarads:
                return `pF`;
            case ElectricCapacitanceUnits.Nanofarads:
                return `nF`;
            case ElectricCapacitanceUnits.Microfarads:
                return `μF`;
            case ElectricCapacitanceUnits.Millifarads:
                return `mF`;
            case ElectricCapacitanceUnits.Kilofarads:
                return `kF`;
            case ElectricCapacitanceUnits.Megafarads:
                return `MF`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricCapacitance are equals to the current ElectricCapacitance.
     * @param electricCapacitance The other ElectricCapacitance.
     * @returns True if the given ElectricCapacitance are equal to the current ElectricCapacitance.
     */
    public equals(electricCapacitance: ElectricCapacitance): boolean {
        return super.internalEquals(this.value, electricCapacitance.BaseValue);
    }

    /**
     * Compare the given ElectricCapacitance against the current ElectricCapacitance.
     * @param electricCapacitance The other ElectricCapacitance.
     * @returns 0 if they are equal, -1 if the current ElectricCapacitance is less then other, 1 if the current ElectricCapacitance is greater then other.
     */
    public compareTo(electricCapacitance: ElectricCapacitance): number {
        return super.internalCompareTo(this.value, electricCapacitance.BaseValue);
    }

    /**
     * Add the given ElectricCapacitance with the current ElectricCapacitance.
     * @param electricCapacitance The other ElectricCapacitance.
     * @returns A new ElectricCapacitance instance with the results.
     */
    public add(electricCapacitance: ElectricCapacitance): ElectricCapacitance {
        return new ElectricCapacitance(super.internalAdd(this.value, electricCapacitance.BaseValue))
    }

    /**
     * Subtract the given ElectricCapacitance with the current ElectricCapacitance.
     * @param electricCapacitance The other ElectricCapacitance.
     * @returns A new ElectricCapacitance instance with the results.
     */
    public subtract(electricCapacitance: ElectricCapacitance): ElectricCapacitance {
        return new ElectricCapacitance(super.internalSubtract(this.value, electricCapacitance.BaseValue))
    }

    /**
     * Multiply the given ElectricCapacitance with the current ElectricCapacitance.
     * @param electricCapacitance The other ElectricCapacitance.
     * @returns A new ElectricCapacitance instance with the results.
     */
    public multiply(electricCapacitance: ElectricCapacitance): ElectricCapacitance {
        return new ElectricCapacitance(super.internalMultiply(this.value, electricCapacitance.BaseValue))
    }

    /**
     * Divide the given ElectricCapacitance with the current ElectricCapacitance.
     * @param electricCapacitance The other ElectricCapacitance.
     * @returns A new ElectricCapacitance instance with the results.
     */
    public divide(electricCapacitance: ElectricCapacitance): ElectricCapacitance {
        return new ElectricCapacitance(super.internalDivide(this.value, electricCapacitance.BaseValue))
    }

    /**
     * Modulo the given ElectricCapacitance with the current ElectricCapacitance.
     * @param electricCapacitance The other ElectricCapacitance.
     * @returns A new ElectricCapacitance instance with the results.
     */
    public modulo(electricCapacitance: ElectricCapacitance): ElectricCapacitance {
        return new ElectricCapacitance(super.internalModulo(this.value, electricCapacitance.BaseValue))
    }

    /**
     * Pow the given ElectricCapacitance with the current ElectricCapacitance.
     * @param electricCapacitance The other ElectricCapacitance.
     * @returns A new ElectricCapacitance instance with the results.
     */
    public pow(electricCapacitance: ElectricCapacitance): ElectricCapacitance {
        return new ElectricCapacitance(super.internalPow(this.value, electricCapacitance.BaseValue))
    }
}
