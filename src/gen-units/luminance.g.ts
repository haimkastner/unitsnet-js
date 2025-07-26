import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a Luminance */
export interface LuminanceDto {
    /** The value of the Luminance */
    value: number;
    /**  The specific unit that the Luminance value is representing */
    unit: LuminanceUnits;
}

/** LuminanceUnits enumeration */
export enum LuminanceUnits {
    /** */
    CandelasPerSquareMeter = "CandelaPerSquareMeter",
    /** */
    CandelasPerSquareFoot = "CandelaPerSquareFoot",
    /** */
    CandelasPerSquareInch = "CandelaPerSquareInch",
    /** */
    Nits = "Nit",
    /** */
    NanocandelasPerSquareMeter = "NanocandelaPerSquareMeter",
    /** */
    MicrocandelasPerSquareMeter = "MicrocandelaPerSquareMeter",
    /** */
    MillicandelasPerSquareMeter = "MillicandelaPerSquareMeter",
    /** */
    CenticandelasPerSquareMeter = "CenticandelaPerSquareMeter",
    /** */
    DecicandelasPerSquareMeter = "DecicandelaPerSquareMeter",
    /** */
    KilocandelasPerSquareMeter = "KilocandelaPerSquareMeter"
}

/** Luminance is a photometric measure of the luminous intensity per unit area of light travelling in a given direction. */
export class Luminance extends BaseUnit {
    protected value: number;
    private candelaspersquaremeterLazy: number | null = null;
    private candelaspersquarefootLazy: number | null = null;
    private candelaspersquareinchLazy: number | null = null;
    private nitsLazy: number | null = null;
    private nanocandelaspersquaremeterLazy: number | null = null;
    private microcandelaspersquaremeterLazy: number | null = null;
    private millicandelaspersquaremeterLazy: number | null = null;
    private centicandelaspersquaremeterLazy: number | null = null;
    private decicandelaspersquaremeterLazy: number | null = null;
    private kilocandelaspersquaremeterLazy: number | null = null;

    /**
     * Create a new Luminance.
     * @param value The value.
     * @param fromUnit The ‘Luminance’ unit to create from.
     * The default unit is CandelasPerSquareMeter
     */
    public constructor(value: number, fromUnit: LuminanceUnits = LuminanceUnits.CandelasPerSquareMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Luminance is CandelasPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): LuminanceUnits.CandelasPerSquareMeter {
        return LuminanceUnits.CandelasPerSquareMeter
    }

    /** */
    public get CandelasPerSquareMeter(): number {
        if(this.candelaspersquaremeterLazy !== null){
            return this.candelaspersquaremeterLazy;
        }
        return this.candelaspersquaremeterLazy = this.convertFromBase(LuminanceUnits.CandelasPerSquareMeter);
    }

    /** */
    public get CandelasPerSquareFoot(): number {
        if(this.candelaspersquarefootLazy !== null){
            return this.candelaspersquarefootLazy;
        }
        return this.candelaspersquarefootLazy = this.convertFromBase(LuminanceUnits.CandelasPerSquareFoot);
    }

    /** */
    public get CandelasPerSquareInch(): number {
        if(this.candelaspersquareinchLazy !== null){
            return this.candelaspersquareinchLazy;
        }
        return this.candelaspersquareinchLazy = this.convertFromBase(LuminanceUnits.CandelasPerSquareInch);
    }

    /** */
    public get Nits(): number {
        if(this.nitsLazy !== null){
            return this.nitsLazy;
        }
        return this.nitsLazy = this.convertFromBase(LuminanceUnits.Nits);
    }

    /** */
    public get NanocandelasPerSquareMeter(): number {
        if(this.nanocandelaspersquaremeterLazy !== null){
            return this.nanocandelaspersquaremeterLazy;
        }
        return this.nanocandelaspersquaremeterLazy = this.convertFromBase(LuminanceUnits.NanocandelasPerSquareMeter);
    }

    /** */
    public get MicrocandelasPerSquareMeter(): number {
        if(this.microcandelaspersquaremeterLazy !== null){
            return this.microcandelaspersquaremeterLazy;
        }
        return this.microcandelaspersquaremeterLazy = this.convertFromBase(LuminanceUnits.MicrocandelasPerSquareMeter);
    }

    /** */
    public get MillicandelasPerSquareMeter(): number {
        if(this.millicandelaspersquaremeterLazy !== null){
            return this.millicandelaspersquaremeterLazy;
        }
        return this.millicandelaspersquaremeterLazy = this.convertFromBase(LuminanceUnits.MillicandelasPerSquareMeter);
    }

    /** */
    public get CenticandelasPerSquareMeter(): number {
        if(this.centicandelaspersquaremeterLazy !== null){
            return this.centicandelaspersquaremeterLazy;
        }
        return this.centicandelaspersquaremeterLazy = this.convertFromBase(LuminanceUnits.CenticandelasPerSquareMeter);
    }

    /** */
    public get DecicandelasPerSquareMeter(): number {
        if(this.decicandelaspersquaremeterLazy !== null){
            return this.decicandelaspersquaremeterLazy;
        }
        return this.decicandelaspersquaremeterLazy = this.convertFromBase(LuminanceUnits.DecicandelasPerSquareMeter);
    }

    /** */
    public get KilocandelasPerSquareMeter(): number {
        if(this.kilocandelaspersquaremeterLazy !== null){
            return this.kilocandelaspersquaremeterLazy;
        }
        return this.kilocandelaspersquaremeterLazy = this.convertFromBase(LuminanceUnits.KilocandelasPerSquareMeter);
    }

    /**
     * Create a new Luminance instance from a CandelasPerSquareMeter
     *
     * @param value The unit as CandelasPerSquareMeter to create a new Luminance from.
     * @returns The new Luminance instance.
     */
    public static FromCandelasPerSquareMeter(value: number): Luminance {
        return new Luminance(value, LuminanceUnits.CandelasPerSquareMeter);
    }

    /**
     * Create a new Luminance instance from a CandelasPerSquareFoot
     *
     * @param value The unit as CandelasPerSquareFoot to create a new Luminance from.
     * @returns The new Luminance instance.
     */
    public static FromCandelasPerSquareFoot(value: number): Luminance {
        return new Luminance(value, LuminanceUnits.CandelasPerSquareFoot);
    }

    /**
     * Create a new Luminance instance from a CandelasPerSquareInch
     *
     * @param value The unit as CandelasPerSquareInch to create a new Luminance from.
     * @returns The new Luminance instance.
     */
    public static FromCandelasPerSquareInch(value: number): Luminance {
        return new Luminance(value, LuminanceUnits.CandelasPerSquareInch);
    }

    /**
     * Create a new Luminance instance from a Nits
     *
     * @param value The unit as Nits to create a new Luminance from.
     * @returns The new Luminance instance.
     */
    public static FromNits(value: number): Luminance {
        return new Luminance(value, LuminanceUnits.Nits);
    }

    /**
     * Create a new Luminance instance from a NanocandelasPerSquareMeter
     *
     * @param value The unit as NanocandelasPerSquareMeter to create a new Luminance from.
     * @returns The new Luminance instance.
     */
    public static FromNanocandelasPerSquareMeter(value: number): Luminance {
        return new Luminance(value, LuminanceUnits.NanocandelasPerSquareMeter);
    }

    /**
     * Create a new Luminance instance from a MicrocandelasPerSquareMeter
     *
     * @param value The unit as MicrocandelasPerSquareMeter to create a new Luminance from.
     * @returns The new Luminance instance.
     */
    public static FromMicrocandelasPerSquareMeter(value: number): Luminance {
        return new Luminance(value, LuminanceUnits.MicrocandelasPerSquareMeter);
    }

    /**
     * Create a new Luminance instance from a MillicandelasPerSquareMeter
     *
     * @param value The unit as MillicandelasPerSquareMeter to create a new Luminance from.
     * @returns The new Luminance instance.
     */
    public static FromMillicandelasPerSquareMeter(value: number): Luminance {
        return new Luminance(value, LuminanceUnits.MillicandelasPerSquareMeter);
    }

    /**
     * Create a new Luminance instance from a CenticandelasPerSquareMeter
     *
     * @param value The unit as CenticandelasPerSquareMeter to create a new Luminance from.
     * @returns The new Luminance instance.
     */
    public static FromCenticandelasPerSquareMeter(value: number): Luminance {
        return new Luminance(value, LuminanceUnits.CenticandelasPerSquareMeter);
    }

    /**
     * Create a new Luminance instance from a DecicandelasPerSquareMeter
     *
     * @param value The unit as DecicandelasPerSquareMeter to create a new Luminance from.
     * @returns The new Luminance instance.
     */
    public static FromDecicandelasPerSquareMeter(value: number): Luminance {
        return new Luminance(value, LuminanceUnits.DecicandelasPerSquareMeter);
    }

    /**
     * Create a new Luminance instance from a KilocandelasPerSquareMeter
     *
     * @param value The unit as KilocandelasPerSquareMeter to create a new Luminance from.
     * @returns The new Luminance instance.
     */
    public static FromKilocandelasPerSquareMeter(value: number): Luminance {
        return new Luminance(value, LuminanceUnits.KilocandelasPerSquareMeter);
    }

    /**
     * Gets the base unit enumeration associated with Luminance
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof LuminanceUnits {
        return LuminanceUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): LuminanceUnits.CandelasPerSquareMeter {
        return LuminanceUnits.CandelasPerSquareMeter;
    }

    /**
     * Create API DTO represent a Luminance unit.
     * @param holdInUnit The specific Luminance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: LuminanceUnits = LuminanceUnits.CandelasPerSquareMeter): LuminanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Luminance unit from an API DTO representation.
     * @param dtoLuminance The Luminance API DTO representation
     */
    public static FromDto(dtoLuminance: LuminanceDto): Luminance {
        return new Luminance(dtoLuminance.value, dtoLuminance.unit);
    }

    /**
     * Convert Luminance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: LuminanceUnits): number {
        switch (toUnit) {
            case LuminanceUnits.CandelasPerSquareMeter: return this.CandelasPerSquareMeter;
            case LuminanceUnits.CandelasPerSquareFoot: return this.CandelasPerSquareFoot;
            case LuminanceUnits.CandelasPerSquareInch: return this.CandelasPerSquareInch;
            case LuminanceUnits.Nits: return this.Nits;
            case LuminanceUnits.NanocandelasPerSquareMeter: return this.NanocandelasPerSquareMeter;
            case LuminanceUnits.MicrocandelasPerSquareMeter: return this.MicrocandelasPerSquareMeter;
            case LuminanceUnits.MillicandelasPerSquareMeter: return this.MillicandelasPerSquareMeter;
            case LuminanceUnits.CenticandelasPerSquareMeter: return this.CenticandelasPerSquareMeter;
            case LuminanceUnits.DecicandelasPerSquareMeter: return this.DecicandelasPerSquareMeter;
            case LuminanceUnits.KilocandelasPerSquareMeter: return this.KilocandelasPerSquareMeter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: LuminanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case LuminanceUnits.CandelasPerSquareMeter: return this.value;
                case LuminanceUnits.CandelasPerSquareFoot: return super.internalMultiply(this.value, 9.290304e-2);
                case LuminanceUnits.CandelasPerSquareInch: return super.internalMultiply(this.value, 0.00064516);
                case LuminanceUnits.Nits: return this.value;
                case LuminanceUnits.NanocandelasPerSquareMeter: return super.internalDivide(this.value, 1e-9);
                case LuminanceUnits.MicrocandelasPerSquareMeter: return super.internalDivide(this.value, 0.000001);
                case LuminanceUnits.MillicandelasPerSquareMeter: return super.internalDivide(this.value, 0.001);
                case LuminanceUnits.CenticandelasPerSquareMeter: return super.internalDivide(this.value, 0.01);
                case LuminanceUnits.DecicandelasPerSquareMeter: return super.internalDivide(this.value, 0.1);
                case LuminanceUnits.KilocandelasPerSquareMeter: return super.internalDivide(this.value, 1000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case LuminanceUnits.CandelasPerSquareMeter: return this.value;
            case LuminanceUnits.CandelasPerSquareFoot: return this.value * 9.290304e-2;
            case LuminanceUnits.CandelasPerSquareInch: return this.value * 0.00064516;
            case LuminanceUnits.Nits: return this.value;
            case LuminanceUnits.NanocandelasPerSquareMeter: return (this.value) / 1e-9;
            case LuminanceUnits.MicrocandelasPerSquareMeter: return (this.value) / 0.000001;
            case LuminanceUnits.MillicandelasPerSquareMeter: return (this.value) / 0.001;
            case LuminanceUnits.CenticandelasPerSquareMeter: return (this.value) / 0.01;
            case LuminanceUnits.DecicandelasPerSquareMeter: return (this.value) / 0.1;
            case LuminanceUnits.KilocandelasPerSquareMeter: return (this.value) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: LuminanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case LuminanceUnits.CandelasPerSquareMeter: return value;
                case LuminanceUnits.CandelasPerSquareFoot: return super.internalDivide(value, 9.290304e-2);
                case LuminanceUnits.CandelasPerSquareInch: return super.internalDivide(value, 0.00064516);
                case LuminanceUnits.Nits: return value;
                case LuminanceUnits.NanocandelasPerSquareMeter: return super.internalMultiply(value, 1e-9);
                case LuminanceUnits.MicrocandelasPerSquareMeter: return super.internalMultiply(value, 0.000001);
                case LuminanceUnits.MillicandelasPerSquareMeter: return super.internalMultiply(value, 0.001);
                case LuminanceUnits.CenticandelasPerSquareMeter: return super.internalMultiply(value, 0.01);
                case LuminanceUnits.DecicandelasPerSquareMeter: return super.internalMultiply(value, 0.1);
                case LuminanceUnits.KilocandelasPerSquareMeter: return super.internalMultiply(value, 1000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case LuminanceUnits.CandelasPerSquareMeter: return value;
            case LuminanceUnits.CandelasPerSquareFoot: return value / 9.290304e-2;
            case LuminanceUnits.CandelasPerSquareInch: return value / 0.00064516;
            case LuminanceUnits.Nits: return value;
            case LuminanceUnits.NanocandelasPerSquareMeter: return (value) * 1e-9;
            case LuminanceUnits.MicrocandelasPerSquareMeter: return (value) * 0.000001;
            case LuminanceUnits.MillicandelasPerSquareMeter: return (value) * 0.001;
            case LuminanceUnits.CenticandelasPerSquareMeter: return (value) * 0.01;
            case LuminanceUnits.DecicandelasPerSquareMeter: return (value) * 0.1;
            case LuminanceUnits.KilocandelasPerSquareMeter: return (value) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Luminance to string.
     * Note! the default format for Luminance is CandelasPerSquareMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Luminance.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the Luminance.
     */
    public toString(unit: LuminanceUnits = LuminanceUnits.CandelasPerSquareMeter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case LuminanceUnits.CandelasPerSquareMeter:
                return super.truncateFractionDigits(this.CandelasPerSquareMeter, options as ToStringOptions) + ` Cd/m²`;
            case LuminanceUnits.CandelasPerSquareFoot:
                return super.truncateFractionDigits(this.CandelasPerSquareFoot, options as ToStringOptions) + ` Cd/ft²`;
            case LuminanceUnits.CandelasPerSquareInch:
                return super.truncateFractionDigits(this.CandelasPerSquareInch, options as ToStringOptions) + ` Cd/in²`;
            case LuminanceUnits.Nits:
                return super.truncateFractionDigits(this.Nits, options as ToStringOptions) + ` nt`;
            case LuminanceUnits.NanocandelasPerSquareMeter:
                return super.truncateFractionDigits(this.NanocandelasPerSquareMeter, options as ToStringOptions) + ` nCd/m²`;
            case LuminanceUnits.MicrocandelasPerSquareMeter:
                return super.truncateFractionDigits(this.MicrocandelasPerSquareMeter, options as ToStringOptions) + ` μCd/m²`;
            case LuminanceUnits.MillicandelasPerSquareMeter:
                return super.truncateFractionDigits(this.MillicandelasPerSquareMeter, options as ToStringOptions) + ` mCd/m²`;
            case LuminanceUnits.CenticandelasPerSquareMeter:
                return super.truncateFractionDigits(this.CenticandelasPerSquareMeter, options as ToStringOptions) + ` cCd/m²`;
            case LuminanceUnits.DecicandelasPerSquareMeter:
                return super.truncateFractionDigits(this.DecicandelasPerSquareMeter, options as ToStringOptions) + ` dCd/m²`;
            case LuminanceUnits.KilocandelasPerSquareMeter:
                return super.truncateFractionDigits(this.KilocandelasPerSquareMeter, options as ToStringOptions) + ` kCd/m²`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Luminance unit abbreviation.
     * Note! the default abbreviation for Luminance is CandelasPerSquareMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Luminance.
     * @returns The abbreviation string of Luminance.
     */
    public getUnitAbbreviation(unitAbbreviation: LuminanceUnits = LuminanceUnits.CandelasPerSquareMeter): string {

        switch (unitAbbreviation) {
            
            case LuminanceUnits.CandelasPerSquareMeter:
                return `Cd/m²`;
            case LuminanceUnits.CandelasPerSquareFoot:
                return `Cd/ft²`;
            case LuminanceUnits.CandelasPerSquareInch:
                return `Cd/in²`;
            case LuminanceUnits.Nits:
                return `nt`;
            case LuminanceUnits.NanocandelasPerSquareMeter:
                return `nCd/m²`;
            case LuminanceUnits.MicrocandelasPerSquareMeter:
                return `μCd/m²`;
            case LuminanceUnits.MillicandelasPerSquareMeter:
                return `mCd/m²`;
            case LuminanceUnits.CenticandelasPerSquareMeter:
                return `cCd/m²`;
            case LuminanceUnits.DecicandelasPerSquareMeter:
                return `dCd/m²`;
            case LuminanceUnits.KilocandelasPerSquareMeter:
                return `kCd/m²`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Luminance are equals to the current Luminance.
     * @param luminance The other Luminance.
     * @returns True if the given Luminance are equal to the current Luminance.
     */
    public equals(luminance: Luminance): boolean {
        return super.internalEquals(this.value, luminance.BaseValue);
    }

    /**
     * Compare the given Luminance against the current Luminance.
     * @param luminance The other Luminance.
     * @returns 0 if they are equal, -1 if the current Luminance is less then other, 1 if the current Luminance is greater then other.
     */
    public compareTo(luminance: Luminance): number {
        return super.internalCompareTo(this.value, luminance.BaseValue);
    }

    /**
     * Add the given Luminance with the current Luminance.
     * @param luminance The other Luminance.
     * @returns A new Luminance instance with the results.
     */
    public add(luminance: Luminance): Luminance {
        return new Luminance(super.internalAdd(this.value, luminance.BaseValue))
    }

    /**
     * Subtract the given Luminance with the current Luminance.
     * @param luminance The other Luminance.
     * @returns A new Luminance instance with the results.
     */
    public subtract(luminance: Luminance): Luminance {
        return new Luminance(super.internalSubtract(this.value, luminance.BaseValue))
    }

    /**
     * Multiply the given Luminance with the current Luminance.
     * @param luminance The other Luminance.
     * @returns A new Luminance instance with the results.
     */
    public multiply(luminance: Luminance): Luminance {
        return new Luminance(super.internalMultiply(this.value, luminance.BaseValue))
    }

    /**
     * Divide the given Luminance with the current Luminance.
     * @param luminance The other Luminance.
     * @returns A new Luminance instance with the results.
     */
    public divide(luminance: Luminance): Luminance {
        return new Luminance(super.internalDivide(this.value, luminance.BaseValue))
    }

    /**
     * Modulo the given Luminance with the current Luminance.
     * @param luminance The other Luminance.
     * @returns A new Luminance instance with the results.
     */
    public modulo(luminance: Luminance): Luminance {
        return new Luminance(super.internalModulo(this.value, luminance.BaseValue))
    }

    /**
     * Pow the given Luminance with the current Luminance.
     * @param luminance The other Luminance.
     * @returns A new Luminance instance with the results.
     */
    public pow(luminance: Luminance): Luminance {
        return new Luminance(super.internalPow(this.value, luminance.BaseValue))
    }
}
