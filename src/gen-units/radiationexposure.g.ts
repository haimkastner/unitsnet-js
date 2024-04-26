/** API DTO represents a RadiationExposure */
export interface RadiationExposureDto {
    /** The value of the RadiationExposure */
    value: number;
    /**  The specific unit that the RadiationExposure value is representing */
    unit: RadiationExposureUnits;
}

/** RadiationExposureUnits enumeration */
export enum RadiationExposureUnits {
    /** */
    CoulombsPerKilogram = "CoulombPerKilogram",
    /** */
    Roentgens = "Roentgen",
    /** */
    PicocoulombsPerKilogram = "PicocoulombPerKilogram",
    /** */
    NanocoulombsPerKilogram = "NanocoulombPerKilogram",
    /** */
    MicrocoulombsPerKilogram = "MicrocoulombPerKilogram",
    /** */
    MillicoulombsPerKilogram = "MillicoulombPerKilogram",
    /** */
    Microroentgens = "Microroentgen",
    /** */
    Milliroentgens = "Milliroentgen"
}

/** Radiation exposure is a measure of the ionization of air due to ionizing radiation from photons. */
export class RadiationExposure extends BaseUnit {
    private value: number;
    private coulombsperkilogramLazy: number | null = null;
    private roentgensLazy: number | null = null;
    private picocoulombsperkilogramLazy: number | null = null;
    private nanocoulombsperkilogramLazy: number | null = null;
    private microcoulombsperkilogramLazy: number | null = null;
    private millicoulombsperkilogramLazy: number | null = null;
    private microroentgensLazy: number | null = null;
    private milliroentgensLazy: number | null = null;

    /**
     * Create a new RadiationExposure.
     * @param value The value.
     * @param fromUnit The ‘RadiationExposure’ unit to create from.
     * The default unit is CoulombsPerKilogram
     */
    public constructor(value: number, fromUnit: RadiationExposureUnits = RadiationExposureUnits.CoulombsPerKilogram) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RadiationExposure is CoulombsPerKilogram.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get CoulombsPerKilogram(): number {
        if(this.coulombsperkilogramLazy !== null){
            return this.coulombsperkilogramLazy;
        }
        return this.coulombsperkilogramLazy = this.convertFromBase(RadiationExposureUnits.CoulombsPerKilogram);
    }

    /** */
    public get Roentgens(): number {
        if(this.roentgensLazy !== null){
            return this.roentgensLazy;
        }
        return this.roentgensLazy = this.convertFromBase(RadiationExposureUnits.Roentgens);
    }

    /** */
    public get PicocoulombsPerKilogram(): number {
        if(this.picocoulombsperkilogramLazy !== null){
            return this.picocoulombsperkilogramLazy;
        }
        return this.picocoulombsperkilogramLazy = this.convertFromBase(RadiationExposureUnits.PicocoulombsPerKilogram);
    }

    /** */
    public get NanocoulombsPerKilogram(): number {
        if(this.nanocoulombsperkilogramLazy !== null){
            return this.nanocoulombsperkilogramLazy;
        }
        return this.nanocoulombsperkilogramLazy = this.convertFromBase(RadiationExposureUnits.NanocoulombsPerKilogram);
    }

    /** */
    public get MicrocoulombsPerKilogram(): number {
        if(this.microcoulombsperkilogramLazy !== null){
            return this.microcoulombsperkilogramLazy;
        }
        return this.microcoulombsperkilogramLazy = this.convertFromBase(RadiationExposureUnits.MicrocoulombsPerKilogram);
    }

    /** */
    public get MillicoulombsPerKilogram(): number {
        if(this.millicoulombsperkilogramLazy !== null){
            return this.millicoulombsperkilogramLazy;
        }
        return this.millicoulombsperkilogramLazy = this.convertFromBase(RadiationExposureUnits.MillicoulombsPerKilogram);
    }

    /** */
    public get Microroentgens(): number {
        if(this.microroentgensLazy !== null){
            return this.microroentgensLazy;
        }
        return this.microroentgensLazy = this.convertFromBase(RadiationExposureUnits.Microroentgens);
    }

    /** */
    public get Milliroentgens(): number {
        if(this.milliroentgensLazy !== null){
            return this.milliroentgensLazy;
        }
        return this.milliroentgensLazy = this.convertFromBase(RadiationExposureUnits.Milliroentgens);
    }

    /**
     * Create a new RadiationExposure instance from a CoulombsPerKilogram
     *
     * @param value The unit as CoulombsPerKilogram to create a new RadiationExposure from.
     * @returns The new RadiationExposure instance.
     */
    public static FromCoulombsPerKilogram(value: number): RadiationExposure {
        return new RadiationExposure(value, RadiationExposureUnits.CoulombsPerKilogram);
    }

    /**
     * Create a new RadiationExposure instance from a Roentgens
     *
     * @param value The unit as Roentgens to create a new RadiationExposure from.
     * @returns The new RadiationExposure instance.
     */
    public static FromRoentgens(value: number): RadiationExposure {
        return new RadiationExposure(value, RadiationExposureUnits.Roentgens);
    }

    /**
     * Create a new RadiationExposure instance from a PicocoulombsPerKilogram
     *
     * @param value The unit as PicocoulombsPerKilogram to create a new RadiationExposure from.
     * @returns The new RadiationExposure instance.
     */
    public static FromPicocoulombsPerKilogram(value: number): RadiationExposure {
        return new RadiationExposure(value, RadiationExposureUnits.PicocoulombsPerKilogram);
    }

    /**
     * Create a new RadiationExposure instance from a NanocoulombsPerKilogram
     *
     * @param value The unit as NanocoulombsPerKilogram to create a new RadiationExposure from.
     * @returns The new RadiationExposure instance.
     */
    public static FromNanocoulombsPerKilogram(value: number): RadiationExposure {
        return new RadiationExposure(value, RadiationExposureUnits.NanocoulombsPerKilogram);
    }

    /**
     * Create a new RadiationExposure instance from a MicrocoulombsPerKilogram
     *
     * @param value The unit as MicrocoulombsPerKilogram to create a new RadiationExposure from.
     * @returns The new RadiationExposure instance.
     */
    public static FromMicrocoulombsPerKilogram(value: number): RadiationExposure {
        return new RadiationExposure(value, RadiationExposureUnits.MicrocoulombsPerKilogram);
    }

    /**
     * Create a new RadiationExposure instance from a MillicoulombsPerKilogram
     *
     * @param value The unit as MillicoulombsPerKilogram to create a new RadiationExposure from.
     * @returns The new RadiationExposure instance.
     */
    public static FromMillicoulombsPerKilogram(value: number): RadiationExposure {
        return new RadiationExposure(value, RadiationExposureUnits.MillicoulombsPerKilogram);
    }

    /**
     * Create a new RadiationExposure instance from a Microroentgens
     *
     * @param value The unit as Microroentgens to create a new RadiationExposure from.
     * @returns The new RadiationExposure instance.
     */
    public static FromMicroroentgens(value: number): RadiationExposure {
        return new RadiationExposure(value, RadiationExposureUnits.Microroentgens);
    }

    /**
     * Create a new RadiationExposure instance from a Milliroentgens
     *
     * @param value The unit as Milliroentgens to create a new RadiationExposure from.
     * @returns The new RadiationExposure instance.
     */
    public static FromMilliroentgens(value: number): RadiationExposure {
        return new RadiationExposure(value, RadiationExposureUnits.Milliroentgens);
    }

    /**
     * Create API DTO represent a RadiationExposure unit.
     * @param holdInUnit The specific RadiationExposure unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: RadiationExposureUnits = RadiationExposureUnits.CoulombsPerKilogram): RadiationExposureDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a RadiationExposure unit from an API DTO representation.
     * @param dtoRadiationExposure The RadiationExposure API DTO representation
     */
    public static FromDto(dtoRadiationExposure: RadiationExposureDto): RadiationExposure {
        return new RadiationExposure(dtoRadiationExposure.value, dtoRadiationExposure.unit);
    }

    /**
     * Convert RadiationExposure to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: RadiationExposureUnits): number {
        switch (toUnit) {
            case RadiationExposureUnits.CoulombsPerKilogram: return this.CoulombsPerKilogram;
            case RadiationExposureUnits.Roentgens: return this.Roentgens;
            case RadiationExposureUnits.PicocoulombsPerKilogram: return this.PicocoulombsPerKilogram;
            case RadiationExposureUnits.NanocoulombsPerKilogram: return this.NanocoulombsPerKilogram;
            case RadiationExposureUnits.MicrocoulombsPerKilogram: return this.MicrocoulombsPerKilogram;
            case RadiationExposureUnits.MillicoulombsPerKilogram: return this.MillicoulombsPerKilogram;
            case RadiationExposureUnits.Microroentgens: return this.Microroentgens;
            case RadiationExposureUnits.Milliroentgens: return this.Milliroentgens;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: RadiationExposureUnits): number {
        switch (toUnit) {
                
            case RadiationExposureUnits.CoulombsPerKilogram:
                return this.value;
            case RadiationExposureUnits.Roentgens:
                return this.value / 2.58e-4;
            case RadiationExposureUnits.PicocoulombsPerKilogram:
                return (this.value) / 1e-12;
            case RadiationExposureUnits.NanocoulombsPerKilogram:
                return (this.value) / 1e-9;
            case RadiationExposureUnits.MicrocoulombsPerKilogram:
                return (this.value) / 0.000001;
            case RadiationExposureUnits.MillicoulombsPerKilogram:
                return (this.value) / 0.001;
            case RadiationExposureUnits.Microroentgens:
                return (this.value / 2.58e-4) / 0.000001;
            case RadiationExposureUnits.Milliroentgens:
                return (this.value / 2.58e-4) / 0.001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RadiationExposureUnits): number {
        switch (fromUnit) {
                
            case RadiationExposureUnits.CoulombsPerKilogram:
                return value;
            case RadiationExposureUnits.Roentgens:
                return value * 2.58e-4;
            case RadiationExposureUnits.PicocoulombsPerKilogram:
                return (value) * 1e-12;
            case RadiationExposureUnits.NanocoulombsPerKilogram:
                return (value) * 1e-9;
            case RadiationExposureUnits.MicrocoulombsPerKilogram:
                return (value) * 0.000001;
            case RadiationExposureUnits.MillicoulombsPerKilogram:
                return (value) * 0.001;
            case RadiationExposureUnits.Microroentgens:
                return (value * 2.58e-4) * 0.000001;
            case RadiationExposureUnits.Milliroentgens:
                return (value * 2.58e-4) * 0.001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the RadiationExposure to string.
     * Note! the default format for RadiationExposure is CoulombsPerKilogram.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RadiationExposure.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the RadiationExposure.
     */
    public toString(unit: RadiationExposureUnits = RadiationExposureUnits.CoulombsPerKilogram, fractionalDigits?: number): string {

        switch (unit) {
            
            case RadiationExposureUnits.CoulombsPerKilogram:
                return super.truncateFractionDigits(this.CoulombsPerKilogram, fractionalDigits) + ` C/kg`;
            case RadiationExposureUnits.Roentgens:
                return super.truncateFractionDigits(this.Roentgens, fractionalDigits) + ` R`;
            case RadiationExposureUnits.PicocoulombsPerKilogram:
                return super.truncateFractionDigits(this.PicocoulombsPerKilogram, fractionalDigits) + ` pC/kg`;
            case RadiationExposureUnits.NanocoulombsPerKilogram:
                return super.truncateFractionDigits(this.NanocoulombsPerKilogram, fractionalDigits) + ` nC/kg`;
            case RadiationExposureUnits.MicrocoulombsPerKilogram:
                return super.truncateFractionDigits(this.MicrocoulombsPerKilogram, fractionalDigits) + ` μC/kg`;
            case RadiationExposureUnits.MillicoulombsPerKilogram:
                return super.truncateFractionDigits(this.MillicoulombsPerKilogram, fractionalDigits) + ` mC/kg`;
            case RadiationExposureUnits.Microroentgens:
                return super.truncateFractionDigits(this.Microroentgens, fractionalDigits) + ` μR`;
            case RadiationExposureUnits.Milliroentgens:
                return super.truncateFractionDigits(this.Milliroentgens, fractionalDigits) + ` mR`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RadiationExposure unit abbreviation.
     * Note! the default abbreviation for RadiationExposure is CoulombsPerKilogram.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RadiationExposure.
     * @returns The abbreviation string of RadiationExposure.
     */
    public getUnitAbbreviation(unitAbbreviation: RadiationExposureUnits = RadiationExposureUnits.CoulombsPerKilogram): string {

        switch (unitAbbreviation) {
            
            case RadiationExposureUnits.CoulombsPerKilogram:
                return `C/kg`;
            case RadiationExposureUnits.Roentgens:
                return `R`;
            case RadiationExposureUnits.PicocoulombsPerKilogram:
                return `pC/kg`;
            case RadiationExposureUnits.NanocoulombsPerKilogram:
                return `nC/kg`;
            case RadiationExposureUnits.MicrocoulombsPerKilogram:
                return `μC/kg`;
            case RadiationExposureUnits.MillicoulombsPerKilogram:
                return `mC/kg`;
            case RadiationExposureUnits.Microroentgens:
                return `μR`;
            case RadiationExposureUnits.Milliroentgens:
                return `mR`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given RadiationExposure are equals to the current RadiationExposure.
     * @param radiationExposure The other RadiationExposure.
     * @returns True if the given RadiationExposure are equal to the current RadiationExposure.
     */
    public equals(radiationExposure: RadiationExposure): boolean {
        return super.internalEquals(this.value, radiationExposure.BaseValue);
    }

    /**
     * Compare the given RadiationExposure against the current RadiationExposure.
     * @param radiationExposure The other RadiationExposure.
     * @returns 0 if they are equal, -1 if the current RadiationExposure is less then other, 1 if the current RadiationExposure is greater then other.
     */
    public compareTo(radiationExposure: RadiationExposure): number {
        return super.internalCompareTo(this.value, radiationExposure.BaseValue);
    }

    /**
     * Add the given RadiationExposure with the current RadiationExposure.
     * @param radiationExposure The other RadiationExposure.
     * @returns A new RadiationExposure instance with the results.
     */
    public add(radiationExposure: RadiationExposure): RadiationExposure {
        return new RadiationExposure(super.internalAdd(this.value, radiationExposure.BaseValue))
    }

    /**
     * Subtract the given RadiationExposure with the current RadiationExposure.
     * @param radiationExposure The other RadiationExposure.
     * @returns A new RadiationExposure instance with the results.
     */
    public subtract(radiationExposure: RadiationExposure): RadiationExposure {
        return new RadiationExposure(super.internalSubtract(this.value, radiationExposure.BaseValue))
    }

    /**
     * Multiply the given RadiationExposure with the current RadiationExposure.
     * @param radiationExposure The other RadiationExposure.
     * @returns A new RadiationExposure instance with the results.
     */
    public multiply(radiationExposure: RadiationExposure): RadiationExposure {
        return new RadiationExposure(super.internalMultiply(this.value, radiationExposure.BaseValue))
    }

    /**
     * Divide the given RadiationExposure with the current RadiationExposure.
     * @param radiationExposure The other RadiationExposure.
     * @returns A new RadiationExposure instance with the results.
     */
    public divide(radiationExposure: RadiationExposure): RadiationExposure {
        return new RadiationExposure(super.internalDivide(this.value, radiationExposure.BaseValue))
    }

    /**
     * Modulo the given RadiationExposure with the current RadiationExposure.
     * @param radiationExposure The other RadiationExposure.
     * @returns A new RadiationExposure instance with the results.
     */
    public modulo(radiationExposure: RadiationExposure): RadiationExposure {
        return new RadiationExposure(super.internalModulo(this.value, radiationExposure.BaseValue))
    }

    /**
     * Pow the given RadiationExposure with the current RadiationExposure.
     * @param radiationExposure The other RadiationExposure.
     * @returns A new RadiationExposure instance with the results.
     */
    public pow(radiationExposure: RadiationExposure): RadiationExposure {
        return new RadiationExposure(super.internalPow(this.value, radiationExposure.BaseValue))
    }
}
