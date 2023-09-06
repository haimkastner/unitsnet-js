/** LuminanceUnits enumeration */
export enum LuminanceUnits {
    /** */
    CandelasPerSquareMeter,
    /** */
    CandelasPerSquareFoot,
    /** */
    CandelasPerSquareInch,
    /** */
    Nits,
    /** */
    NanocandelasPerSquareMeter,
    /** */
    MicrocandelasPerSquareMeter,
    /** */
    MillicandelasPerSquareMeter,
    /** */
    CenticandelasPerSquareMeter,
    /** */
    DecicandelasPerSquareMeter,
    /** */
    KilocandelasPerSquareMeter
}

/** Luminance is a photometric measure of the luminous intensity per unit area of light travelling in a given direction. */
export class Luminance {
    private value: number;
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

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Luminance is CandelasPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
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
        return NaN;
    }

    private convertFromBase(toUnit: LuminanceUnits): number {
        switch (toUnit) {
                
            case LuminanceUnits.CandelasPerSquareMeter:
                return this.value;
            case LuminanceUnits.CandelasPerSquareFoot:
                return this.value/ 1.07639e1;
            case LuminanceUnits.CandelasPerSquareInch:
                return this.value/ 1.5500031e3;
            case LuminanceUnits.Nits:
                return this.value;
            case LuminanceUnits.NanocandelasPerSquareMeter:
                return (this.value) / 1e-9;
            case LuminanceUnits.MicrocandelasPerSquareMeter:
                return (this.value) / 0.000001;
            case LuminanceUnits.MillicandelasPerSquareMeter:
                return (this.value) / 0.001;
            case LuminanceUnits.CenticandelasPerSquareMeter:
                return (this.value) / 0.01;
            case LuminanceUnits.DecicandelasPerSquareMeter:
                return (this.value) / 0.1;
            case LuminanceUnits.KilocandelasPerSquareMeter:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LuminanceUnits): number {
        switch (fromUnit) {
                
            case LuminanceUnits.CandelasPerSquareMeter:
                return value;
            case LuminanceUnits.CandelasPerSquareFoot:
                return value* 1.07639e1;
            case LuminanceUnits.CandelasPerSquareInch:
                return value* 1.5500031e3;
            case LuminanceUnits.Nits:
                return value;
            case LuminanceUnits.NanocandelasPerSquareMeter:
                return (value) * 1e-9;
            case LuminanceUnits.MicrocandelasPerSquareMeter:
                return (value) * 0.000001;
            case LuminanceUnits.MillicandelasPerSquareMeter:
                return (value) * 0.001;
            case LuminanceUnits.CenticandelasPerSquareMeter:
                return (value) * 0.01;
            case LuminanceUnits.DecicandelasPerSquareMeter:
                return (value) * 0.1;
            case LuminanceUnits.KilocandelasPerSquareMeter:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Luminance to string.
     * Note! the default format for Luminance is CandelasPerSquareMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Luminance.
     * @returns The string format of the Luminance.
     */
    public toString(unit: LuminanceUnits = LuminanceUnits.CandelasPerSquareMeter): string {

        switch (unit) {
            
            case LuminanceUnits.CandelasPerSquareMeter:
                return this.CandelasPerSquareMeter + ` Cd/m²`;
            case LuminanceUnits.CandelasPerSquareFoot:
                return this.CandelasPerSquareFoot + ` Cd/ft²`;
            case LuminanceUnits.CandelasPerSquareInch:
                return this.CandelasPerSquareInch + ` Cd/in²`;
            case LuminanceUnits.Nits:
                return this.Nits + ` nt`;
            case LuminanceUnits.NanocandelasPerSquareMeter:
                return this.NanocandelasPerSquareMeter + ` nCd/m²`;
            case LuminanceUnits.MicrocandelasPerSquareMeter:
                return this.MicrocandelasPerSquareMeter + ` μCd/m²`;
            case LuminanceUnits.MillicandelasPerSquareMeter:
                return this.MillicandelasPerSquareMeter + ` mCd/m²`;
            case LuminanceUnits.CenticandelasPerSquareMeter:
                return this.CenticandelasPerSquareMeter + ` cCd/m²`;
            case LuminanceUnits.DecicandelasPerSquareMeter:
                return this.DecicandelasPerSquareMeter + ` dCd/m²`;
            case LuminanceUnits.KilocandelasPerSquareMeter:
                return this.KilocandelasPerSquareMeter + ` kCd/m²`;
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
        return this.value === luminance.BaseValue;
    }

    /**
     * Compare the given Luminance against the current Luminance.
     * @param luminance The other Luminance.
     * @returns 0 if they are equal, -1 if the current Luminance is less then other, 1 if the current Luminance is greater then other.
     */
    public compareTo(luminance: Luminance): number {

        if (this.value > luminance.BaseValue)
            return 1;
        if (this.value < luminance.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Luminance with the current Luminance.
     * @param luminance The other Luminance.
     * @returns A new Luminance instance with the results.
     */
    public add(luminance: Luminance): Luminance {
        return new Luminance(this.value + luminance.BaseValue)
    }

    /**
     * Subtract the given Luminance with the current Luminance.
     * @param luminance The other Luminance.
     * @returns A new Luminance instance with the results.
     */
    public subtract(luminance: Luminance): Luminance {
        return new Luminance(this.value - luminance.BaseValue)
    }

    /**
     * Multiply the given Luminance with the current Luminance.
     * @param luminance The other Luminance.
     * @returns A new Luminance instance with the results.
     */
    public multiply(luminance: Luminance): Luminance {
        return new Luminance(this.value * luminance.BaseValue)
    }

    /**
     * Divide the given Luminance with the current Luminance.
     * @param luminance The other Luminance.
     * @returns A new Luminance instance with the results.
     */
    public divide(luminance: Luminance): Luminance {
        return new Luminance(this.value / luminance.BaseValue)
    }

    /**
     * Modulo the given Luminance with the current Luminance.
     * @param luminance The other Luminance.
     * @returns A new Luminance instance with the results.
     */
    public modulo(luminance: Luminance): Luminance {
        return new Luminance(this.value % luminance.BaseValue)
    }

    /**
     * Pow the given Luminance with the current Luminance.
     * @param luminance The other Luminance.
     * @returns A new Luminance instance with the results.
     */
    public pow(luminance: Luminance): Luminance {
        return new Luminance(this.value ** luminance.BaseValue)
    }
}
