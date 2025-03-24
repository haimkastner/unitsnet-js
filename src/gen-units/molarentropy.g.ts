import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a MolarEntropy */
export interface MolarEntropyDto {
    /** The value of the MolarEntropy */
    value: number;
    /**  The specific unit that the MolarEntropy value is representing */
    unit: MolarEntropyUnits;
}

/** MolarEntropyUnits enumeration */
export enum MolarEntropyUnits {
    /** */
    JoulesPerMoleKelvin = "JoulePerMoleKelvin",
    /** */
    KilojoulesPerMoleKelvin = "KilojoulePerMoleKelvin",
    /** */
    MegajoulesPerMoleKelvin = "MegajoulePerMoleKelvin"
}

/** Molar entropy is amount of energy required to increase temperature of 1 mole substance by 1 Kelvin. */
export class MolarEntropy extends BaseUnit {
    protected value: number;
    private joulespermolekelvinLazy: number | null = null;
    private kilojoulespermolekelvinLazy: number | null = null;
    private megajoulespermolekelvinLazy: number | null = null;

    /**
     * Create a new MolarEntropy.
     * @param value The value.
     * @param fromUnit The ‘MolarEntropy’ unit to create from.
     * The default unit is JoulesPerMoleKelvin
     */
    public constructor(value: number, fromUnit: MolarEntropyUnits = MolarEntropyUnits.JoulesPerMoleKelvin) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MolarEntropy is JoulesPerMoleKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): MolarEntropyUnits.JoulesPerMoleKelvin {
        return MolarEntropyUnits.JoulesPerMoleKelvin
    }

    /** */
    public get JoulesPerMoleKelvin(): number {
        if(this.joulespermolekelvinLazy !== null){
            return this.joulespermolekelvinLazy;
        }
        return this.joulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.JoulesPerMoleKelvin);
    }

    /** */
    public get KilojoulesPerMoleKelvin(): number {
        if(this.kilojoulespermolekelvinLazy !== null){
            return this.kilojoulespermolekelvinLazy;
        }
        return this.kilojoulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.KilojoulesPerMoleKelvin);
    }

    /** */
    public get MegajoulesPerMoleKelvin(): number {
        if(this.megajoulespermolekelvinLazy !== null){
            return this.megajoulespermolekelvinLazy;
        }
        return this.megajoulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.MegajoulesPerMoleKelvin);
    }

    /**
     * Create a new MolarEntropy instance from a JoulesPerMoleKelvin
     *
     * @param value The unit as JoulesPerMoleKelvin to create a new MolarEntropy from.
     * @returns The new MolarEntropy instance.
     */
    public static FromJoulesPerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.JoulesPerMoleKelvin);
    }

    /**
     * Create a new MolarEntropy instance from a KilojoulesPerMoleKelvin
     *
     * @param value The unit as KilojoulesPerMoleKelvin to create a new MolarEntropy from.
     * @returns The new MolarEntropy instance.
     */
    public static FromKilojoulesPerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.KilojoulesPerMoleKelvin);
    }

    /**
     * Create a new MolarEntropy instance from a MegajoulesPerMoleKelvin
     *
     * @param value The unit as MegajoulesPerMoleKelvin to create a new MolarEntropy from.
     * @returns The new MolarEntropy instance.
     */
    public static FromMegajoulesPerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.MegajoulesPerMoleKelvin);
    }

    /**
     * Gets the base unit enumeration associated with MolarEntropy
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof MolarEntropyUnits {
        return MolarEntropyUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): MolarEntropyUnits.JoulesPerMoleKelvin {
        return MolarEntropyUnits.JoulesPerMoleKelvin;
    }

    /**
     * Create API DTO represent a MolarEntropy unit.
     * @param holdInUnit The specific MolarEntropy unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: MolarEntropyUnits = MolarEntropyUnits.JoulesPerMoleKelvin): MolarEntropyDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a MolarEntropy unit from an API DTO representation.
     * @param dtoMolarEntropy The MolarEntropy API DTO representation
     */
    public static FromDto(dtoMolarEntropy: MolarEntropyDto): MolarEntropy {
        return new MolarEntropy(dtoMolarEntropy.value, dtoMolarEntropy.unit);
    }

    /**
     * Convert MolarEntropy to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: MolarEntropyUnits): number {
        switch (toUnit) {
            case MolarEntropyUnits.JoulesPerMoleKelvin: return this.JoulesPerMoleKelvin;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin: return this.KilojoulesPerMoleKelvin;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin: return this.MegajoulesPerMoleKelvin;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: MolarEntropyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case MolarEntropyUnits.JoulesPerMoleKelvin: return this.value;
                case MolarEntropyUnits.KilojoulesPerMoleKelvin: return super.internalDivide(this.value, 1000);
                case MolarEntropyUnits.MegajoulesPerMoleKelvin: return super.internalDivide(this.value, 1000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case MolarEntropyUnits.JoulesPerMoleKelvin: return this.value;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin: return (this.value) / 1000;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin: return (this.value) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: MolarEntropyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case MolarEntropyUnits.JoulesPerMoleKelvin: return value;
                case MolarEntropyUnits.KilojoulesPerMoleKelvin: return super.internalMultiply(value, 1000);
                case MolarEntropyUnits.MegajoulesPerMoleKelvin: return super.internalMultiply(value, 1000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case MolarEntropyUnits.JoulesPerMoleKelvin: return value;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin: return (value) * 1000;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin: return (value) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the MolarEntropy to string.
     * Note! the default format for MolarEntropy is JoulesPerMoleKelvin.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the MolarEntropy.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the MolarEntropy.
     */
    public toString(unit: MolarEntropyUnits = MolarEntropyUnits.JoulesPerMoleKelvin, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return super.truncateFractionDigits(this.JoulesPerMoleKelvin, options as ToStringOptions) + ` J/(mol·K)`;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return super.truncateFractionDigits(this.KilojoulesPerMoleKelvin, options as ToStringOptions) + ` kJ/(mol·K)`;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return super.truncateFractionDigits(this.MegajoulesPerMoleKelvin, options as ToStringOptions) + ` MJ/(mol·K)`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get MolarEntropy unit abbreviation.
     * Note! the default abbreviation for MolarEntropy is JoulesPerMoleKelvin.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the MolarEntropy.
     * @returns The abbreviation string of MolarEntropy.
     */
    public getUnitAbbreviation(unitAbbreviation: MolarEntropyUnits = MolarEntropyUnits.JoulesPerMoleKelvin): string {

        switch (unitAbbreviation) {
            
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return `J/(mol·K)`;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return `kJ/(mol·K)`;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return `MJ/(mol·K)`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given MolarEntropy are equals to the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns True if the given MolarEntropy are equal to the current MolarEntropy.
     */
    public equals(molarEntropy: MolarEntropy): boolean {
        return super.internalEquals(this.value, molarEntropy.BaseValue);
    }

    /**
     * Compare the given MolarEntropy against the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns 0 if they are equal, -1 if the current MolarEntropy is less then other, 1 if the current MolarEntropy is greater then other.
     */
    public compareTo(molarEntropy: MolarEntropy): number {
        return super.internalCompareTo(this.value, molarEntropy.BaseValue);
    }

    /**
     * Add the given MolarEntropy with the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns A new MolarEntropy instance with the results.
     */
    public add(molarEntropy: MolarEntropy): MolarEntropy {
        return new MolarEntropy(super.internalAdd(this.value, molarEntropy.BaseValue))
    }

    /**
     * Subtract the given MolarEntropy with the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns A new MolarEntropy instance with the results.
     */
    public subtract(molarEntropy: MolarEntropy): MolarEntropy {
        return new MolarEntropy(super.internalSubtract(this.value, molarEntropy.BaseValue))
    }

    /**
     * Multiply the given MolarEntropy with the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns A new MolarEntropy instance with the results.
     */
    public multiply(molarEntropy: MolarEntropy): MolarEntropy {
        return new MolarEntropy(super.internalMultiply(this.value, molarEntropy.BaseValue))
    }

    /**
     * Divide the given MolarEntropy with the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns A new MolarEntropy instance with the results.
     */
    public divide(molarEntropy: MolarEntropy): MolarEntropy {
        return new MolarEntropy(super.internalDivide(this.value, molarEntropy.BaseValue))
    }

    /**
     * Modulo the given MolarEntropy with the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns A new MolarEntropy instance with the results.
     */
    public modulo(molarEntropy: MolarEntropy): MolarEntropy {
        return new MolarEntropy(super.internalModulo(this.value, molarEntropy.BaseValue))
    }

    /**
     * Pow the given MolarEntropy with the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns A new MolarEntropy instance with the results.
     */
    public pow(molarEntropy: MolarEntropy): MolarEntropy {
        return new MolarEntropy(super.internalPow(this.value, molarEntropy.BaseValue))
    }
}
