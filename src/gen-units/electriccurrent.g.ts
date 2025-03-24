import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricCurrent */
export interface ElectricCurrentDto {
    /** The value of the ElectricCurrent */
    value: number;
    /**  The specific unit that the ElectricCurrent value is representing */
    unit: ElectricCurrentUnits;
}

/** ElectricCurrentUnits enumeration */
export enum ElectricCurrentUnits {
    /** */
    Amperes = "Ampere",
    /** */
    Femtoamperes = "Femtoampere",
    /** */
    Picoamperes = "Picoampere",
    /** */
    Nanoamperes = "Nanoampere",
    /** */
    Microamperes = "Microampere",
    /** */
    Milliamperes = "Milliampere",
    /** */
    Centiamperes = "Centiampere",
    /** */
    Kiloamperes = "Kiloampere",
    /** */
    Megaamperes = "Megaampere"
}

/** An electric current is a flow of electric charge. In electric circuits this charge is often carried by moving electrons in a wire. It can also be carried by ions in an electrolyte, or by both ions and electrons such as in a plasma. */
export class ElectricCurrent extends BaseUnit {
    protected value: number;
    private amperesLazy: number | null = null;
    private femtoamperesLazy: number | null = null;
    private picoamperesLazy: number | null = null;
    private nanoamperesLazy: number | null = null;
    private microamperesLazy: number | null = null;
    private milliamperesLazy: number | null = null;
    private centiamperesLazy: number | null = null;
    private kiloamperesLazy: number | null = null;
    private megaamperesLazy: number | null = null;

    /**
     * Create a new ElectricCurrent.
     * @param value The value.
     * @param fromUnit The ‘ElectricCurrent’ unit to create from.
     * The default unit is Amperes
     */
    public constructor(value: number, fromUnit: ElectricCurrentUnits = ElectricCurrentUnits.Amperes) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricCurrent is Amperes.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricCurrentUnits.Amperes {
        return ElectricCurrentUnits.Amperes
    }

    /** */
    public get Amperes(): number {
        if(this.amperesLazy !== null){
            return this.amperesLazy;
        }
        return this.amperesLazy = this.convertFromBase(ElectricCurrentUnits.Amperes);
    }

    /** */
    public get Femtoamperes(): number {
        if(this.femtoamperesLazy !== null){
            return this.femtoamperesLazy;
        }
        return this.femtoamperesLazy = this.convertFromBase(ElectricCurrentUnits.Femtoamperes);
    }

    /** */
    public get Picoamperes(): number {
        if(this.picoamperesLazy !== null){
            return this.picoamperesLazy;
        }
        return this.picoamperesLazy = this.convertFromBase(ElectricCurrentUnits.Picoamperes);
    }

    /** */
    public get Nanoamperes(): number {
        if(this.nanoamperesLazy !== null){
            return this.nanoamperesLazy;
        }
        return this.nanoamperesLazy = this.convertFromBase(ElectricCurrentUnits.Nanoamperes);
    }

    /** */
    public get Microamperes(): number {
        if(this.microamperesLazy !== null){
            return this.microamperesLazy;
        }
        return this.microamperesLazy = this.convertFromBase(ElectricCurrentUnits.Microamperes);
    }

    /** */
    public get Milliamperes(): number {
        if(this.milliamperesLazy !== null){
            return this.milliamperesLazy;
        }
        return this.milliamperesLazy = this.convertFromBase(ElectricCurrentUnits.Milliamperes);
    }

    /** */
    public get Centiamperes(): number {
        if(this.centiamperesLazy !== null){
            return this.centiamperesLazy;
        }
        return this.centiamperesLazy = this.convertFromBase(ElectricCurrentUnits.Centiamperes);
    }

    /** */
    public get Kiloamperes(): number {
        if(this.kiloamperesLazy !== null){
            return this.kiloamperesLazy;
        }
        return this.kiloamperesLazy = this.convertFromBase(ElectricCurrentUnits.Kiloamperes);
    }

    /** */
    public get Megaamperes(): number {
        if(this.megaamperesLazy !== null){
            return this.megaamperesLazy;
        }
        return this.megaamperesLazy = this.convertFromBase(ElectricCurrentUnits.Megaamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Amperes
     *
     * @param value The unit as Amperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromAmperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Amperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Femtoamperes
     *
     * @param value The unit as Femtoamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromFemtoamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Femtoamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Picoamperes
     *
     * @param value The unit as Picoamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromPicoamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Picoamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Nanoamperes
     *
     * @param value The unit as Nanoamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromNanoamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Nanoamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Microamperes
     *
     * @param value The unit as Microamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromMicroamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Microamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Milliamperes
     *
     * @param value The unit as Milliamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromMilliamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Milliamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Centiamperes
     *
     * @param value The unit as Centiamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromCentiamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Centiamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Kiloamperes
     *
     * @param value The unit as Kiloamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromKiloamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Kiloamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Megaamperes
     *
     * @param value The unit as Megaamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromMegaamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Megaamperes);
    }

    /**
     * Gets the base unit enumeration associated with ElectricCurrent
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricCurrentUnits {
        return ElectricCurrentUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricCurrentUnits.Amperes {
        return ElectricCurrentUnits.Amperes;
    }

    /**
     * Create API DTO represent a ElectricCurrent unit.
     * @param holdInUnit The specific ElectricCurrent unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricCurrentUnits = ElectricCurrentUnits.Amperes): ElectricCurrentDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricCurrent unit from an API DTO representation.
     * @param dtoElectricCurrent The ElectricCurrent API DTO representation
     */
    public static FromDto(dtoElectricCurrent: ElectricCurrentDto): ElectricCurrent {
        return new ElectricCurrent(dtoElectricCurrent.value, dtoElectricCurrent.unit);
    }

    /**
     * Convert ElectricCurrent to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricCurrentUnits): number {
        switch (toUnit) {
            case ElectricCurrentUnits.Amperes: return this.Amperes;
            case ElectricCurrentUnits.Femtoamperes: return this.Femtoamperes;
            case ElectricCurrentUnits.Picoamperes: return this.Picoamperes;
            case ElectricCurrentUnits.Nanoamperes: return this.Nanoamperes;
            case ElectricCurrentUnits.Microamperes: return this.Microamperes;
            case ElectricCurrentUnits.Milliamperes: return this.Milliamperes;
            case ElectricCurrentUnits.Centiamperes: return this.Centiamperes;
            case ElectricCurrentUnits.Kiloamperes: return this.Kiloamperes;
            case ElectricCurrentUnits.Megaamperes: return this.Megaamperes;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricCurrentUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricCurrentUnits.Amperes: return this.value;
                case ElectricCurrentUnits.Femtoamperes: return super.internalDivide(this.value, 1e-15);
                case ElectricCurrentUnits.Picoamperes: return super.internalDivide(this.value, 1e-12);
                case ElectricCurrentUnits.Nanoamperes: return super.internalDivide(this.value, 1e-9);
                case ElectricCurrentUnits.Microamperes: return super.internalDivide(this.value, 0.000001);
                case ElectricCurrentUnits.Milliamperes: return super.internalDivide(this.value, 0.001);
                case ElectricCurrentUnits.Centiamperes: return super.internalDivide(this.value, 0.01);
                case ElectricCurrentUnits.Kiloamperes: return super.internalDivide(this.value, 1000);
                case ElectricCurrentUnits.Megaamperes: return super.internalDivide(this.value, 1000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricCurrentUnits.Amperes: return this.value;
            case ElectricCurrentUnits.Femtoamperes: return (this.value) / 1e-15;
            case ElectricCurrentUnits.Picoamperes: return (this.value) / 1e-12;
            case ElectricCurrentUnits.Nanoamperes: return (this.value) / 1e-9;
            case ElectricCurrentUnits.Microamperes: return (this.value) / 0.000001;
            case ElectricCurrentUnits.Milliamperes: return (this.value) / 0.001;
            case ElectricCurrentUnits.Centiamperes: return (this.value) / 0.01;
            case ElectricCurrentUnits.Kiloamperes: return (this.value) / 1000;
            case ElectricCurrentUnits.Megaamperes: return (this.value) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricCurrentUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricCurrentUnits.Amperes: return value;
                case ElectricCurrentUnits.Femtoamperes: return super.internalMultiply(value, 1e-15);
                case ElectricCurrentUnits.Picoamperes: return super.internalMultiply(value, 1e-12);
                case ElectricCurrentUnits.Nanoamperes: return super.internalMultiply(value, 1e-9);
                case ElectricCurrentUnits.Microamperes: return super.internalMultiply(value, 0.000001);
                case ElectricCurrentUnits.Milliamperes: return super.internalMultiply(value, 0.001);
                case ElectricCurrentUnits.Centiamperes: return super.internalMultiply(value, 0.01);
                case ElectricCurrentUnits.Kiloamperes: return super.internalMultiply(value, 1000);
                case ElectricCurrentUnits.Megaamperes: return super.internalMultiply(value, 1000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricCurrentUnits.Amperes: return value;
            case ElectricCurrentUnits.Femtoamperes: return (value) * 1e-15;
            case ElectricCurrentUnits.Picoamperes: return (value) * 1e-12;
            case ElectricCurrentUnits.Nanoamperes: return (value) * 1e-9;
            case ElectricCurrentUnits.Microamperes: return (value) * 0.000001;
            case ElectricCurrentUnits.Milliamperes: return (value) * 0.001;
            case ElectricCurrentUnits.Centiamperes: return (value) * 0.01;
            case ElectricCurrentUnits.Kiloamperes: return (value) * 1000;
            case ElectricCurrentUnits.Megaamperes: return (value) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricCurrent to string.
     * Note! the default format for ElectricCurrent is Amperes.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricCurrent.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricCurrent.
     */
    public toString(unit: ElectricCurrentUnits = ElectricCurrentUnits.Amperes, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricCurrentUnits.Amperes:
                return super.truncateFractionDigits(this.Amperes, options as ToStringOptions) + ` A`;
            case ElectricCurrentUnits.Femtoamperes:
                return super.truncateFractionDigits(this.Femtoamperes, options as ToStringOptions) + ` fA`;
            case ElectricCurrentUnits.Picoamperes:
                return super.truncateFractionDigits(this.Picoamperes, options as ToStringOptions) + ` pA`;
            case ElectricCurrentUnits.Nanoamperes:
                return super.truncateFractionDigits(this.Nanoamperes, options as ToStringOptions) + ` nA`;
            case ElectricCurrentUnits.Microamperes:
                return super.truncateFractionDigits(this.Microamperes, options as ToStringOptions) + ` μA`;
            case ElectricCurrentUnits.Milliamperes:
                return super.truncateFractionDigits(this.Milliamperes, options as ToStringOptions) + ` mA`;
            case ElectricCurrentUnits.Centiamperes:
                return super.truncateFractionDigits(this.Centiamperes, options as ToStringOptions) + ` cA`;
            case ElectricCurrentUnits.Kiloamperes:
                return super.truncateFractionDigits(this.Kiloamperes, options as ToStringOptions) + ` kA`;
            case ElectricCurrentUnits.Megaamperes:
                return super.truncateFractionDigits(this.Megaamperes, options as ToStringOptions) + ` MA`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricCurrent unit abbreviation.
     * Note! the default abbreviation for ElectricCurrent is Amperes.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricCurrent.
     * @returns The abbreviation string of ElectricCurrent.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricCurrentUnits = ElectricCurrentUnits.Amperes): string {

        switch (unitAbbreviation) {
            
            case ElectricCurrentUnits.Amperes:
                return `A`;
            case ElectricCurrentUnits.Femtoamperes:
                return `fA`;
            case ElectricCurrentUnits.Picoamperes:
                return `pA`;
            case ElectricCurrentUnits.Nanoamperes:
                return `nA`;
            case ElectricCurrentUnits.Microamperes:
                return `μA`;
            case ElectricCurrentUnits.Milliamperes:
                return `mA`;
            case ElectricCurrentUnits.Centiamperes:
                return `cA`;
            case ElectricCurrentUnits.Kiloamperes:
                return `kA`;
            case ElectricCurrentUnits.Megaamperes:
                return `MA`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricCurrent are equals to the current ElectricCurrent.
     * @param electricCurrent The other ElectricCurrent.
     * @returns True if the given ElectricCurrent are equal to the current ElectricCurrent.
     */
    public equals(electricCurrent: ElectricCurrent): boolean {
        return super.internalEquals(this.value, electricCurrent.BaseValue);
    }

    /**
     * Compare the given ElectricCurrent against the current ElectricCurrent.
     * @param electricCurrent The other ElectricCurrent.
     * @returns 0 if they are equal, -1 if the current ElectricCurrent is less then other, 1 if the current ElectricCurrent is greater then other.
     */
    public compareTo(electricCurrent: ElectricCurrent): number {
        return super.internalCompareTo(this.value, electricCurrent.BaseValue);
    }

    /**
     * Add the given ElectricCurrent with the current ElectricCurrent.
     * @param electricCurrent The other ElectricCurrent.
     * @returns A new ElectricCurrent instance with the results.
     */
    public add(electricCurrent: ElectricCurrent): ElectricCurrent {
        return new ElectricCurrent(super.internalAdd(this.value, electricCurrent.BaseValue))
    }

    /**
     * Subtract the given ElectricCurrent with the current ElectricCurrent.
     * @param electricCurrent The other ElectricCurrent.
     * @returns A new ElectricCurrent instance with the results.
     */
    public subtract(electricCurrent: ElectricCurrent): ElectricCurrent {
        return new ElectricCurrent(super.internalSubtract(this.value, electricCurrent.BaseValue))
    }

    /**
     * Multiply the given ElectricCurrent with the current ElectricCurrent.
     * @param electricCurrent The other ElectricCurrent.
     * @returns A new ElectricCurrent instance with the results.
     */
    public multiply(electricCurrent: ElectricCurrent): ElectricCurrent {
        return new ElectricCurrent(super.internalMultiply(this.value, electricCurrent.BaseValue))
    }

    /**
     * Divide the given ElectricCurrent with the current ElectricCurrent.
     * @param electricCurrent The other ElectricCurrent.
     * @returns A new ElectricCurrent instance with the results.
     */
    public divide(electricCurrent: ElectricCurrent): ElectricCurrent {
        return new ElectricCurrent(super.internalDivide(this.value, electricCurrent.BaseValue))
    }

    /**
     * Modulo the given ElectricCurrent with the current ElectricCurrent.
     * @param electricCurrent The other ElectricCurrent.
     * @returns A new ElectricCurrent instance with the results.
     */
    public modulo(electricCurrent: ElectricCurrent): ElectricCurrent {
        return new ElectricCurrent(super.internalModulo(this.value, electricCurrent.BaseValue))
    }

    /**
     * Pow the given ElectricCurrent with the current ElectricCurrent.
     * @param electricCurrent The other ElectricCurrent.
     * @returns A new ElectricCurrent instance with the results.
     */
    public pow(electricCurrent: ElectricCurrent): ElectricCurrent {
        return new ElectricCurrent(super.internalPow(this.value, electricCurrent.BaseValue))
    }
}
