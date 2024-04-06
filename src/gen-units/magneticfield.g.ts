import { BaseUnit } from "../base-unit";

/** MagneticFieldUnits enumeration */
export enum MagneticFieldUnits {
    /** */
    Teslas = "Tesla",
    /** */
    Gausses = "Gauss",
    /** */
    Nanoteslas = "Nanotesla",
    /** */
    Microteslas = "Microtesla",
    /** */
    Milliteslas = "Millitesla",
    /** */
    Milligausses = "Milligauss"
}

/** A magnetic field is a force field that is created by moving electric charges (electric currents) and magnetic dipoles, and exerts a force on other nearby moving charges and magnetic dipoles. */
export class MagneticField extends BaseUnit {
    private value: number;
    private teslasLazy: number | null = null;
    private gaussesLazy: number | null = null;
    private nanoteslasLazy: number | null = null;
    private microteslasLazy: number | null = null;
    private milliteslasLazy: number | null = null;
    private milligaussesLazy: number | null = null;

    /**
     * Create a new MagneticField.
     * @param value The value.
     * @param fromUnit The ‘MagneticField’ unit to create from.
     * The default unit is Teslas
     */
    public constructor(value: number, fromUnit: MagneticFieldUnits = MagneticFieldUnits.Teslas) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MagneticField is Teslas.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Teslas(): number {
        if(this.teslasLazy !== null){
            return this.teslasLazy;
        }
        return this.teslasLazy = this.convertFromBase(MagneticFieldUnits.Teslas);
    }

    /** */
    public get Gausses(): number {
        if(this.gaussesLazy !== null){
            return this.gaussesLazy;
        }
        return this.gaussesLazy = this.convertFromBase(MagneticFieldUnits.Gausses);
    }

    /** */
    public get Nanoteslas(): number {
        if(this.nanoteslasLazy !== null){
            return this.nanoteslasLazy;
        }
        return this.nanoteslasLazy = this.convertFromBase(MagneticFieldUnits.Nanoteslas);
    }

    /** */
    public get Microteslas(): number {
        if(this.microteslasLazy !== null){
            return this.microteslasLazy;
        }
        return this.microteslasLazy = this.convertFromBase(MagneticFieldUnits.Microteslas);
    }

    /** */
    public get Milliteslas(): number {
        if(this.milliteslasLazy !== null){
            return this.milliteslasLazy;
        }
        return this.milliteslasLazy = this.convertFromBase(MagneticFieldUnits.Milliteslas);
    }

    /** */
    public get Milligausses(): number {
        if(this.milligaussesLazy !== null){
            return this.milligaussesLazy;
        }
        return this.milligaussesLazy = this.convertFromBase(MagneticFieldUnits.Milligausses);
    }

    /**
     * Create a new MagneticField instance from a Teslas
     *
     * @param value The unit as Teslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    public static FromTeslas(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Teslas);
    }

    /**
     * Create a new MagneticField instance from a Gausses
     *
     * @param value The unit as Gausses to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    public static FromGausses(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Gausses);
    }

    /**
     * Create a new MagneticField instance from a Nanoteslas
     *
     * @param value The unit as Nanoteslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    public static FromNanoteslas(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Nanoteslas);
    }

    /**
     * Create a new MagneticField instance from a Microteslas
     *
     * @param value The unit as Microteslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    public static FromMicroteslas(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Microteslas);
    }

    /**
     * Create a new MagneticField instance from a Milliteslas
     *
     * @param value The unit as Milliteslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    public static FromMilliteslas(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Milliteslas);
    }

    /**
     * Create a new MagneticField instance from a Milligausses
     *
     * @param value The unit as Milligausses to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    public static FromMilligausses(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Milligausses);
    }

    /**
     * Convert MagneticField to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: MagneticFieldUnits): number {
        switch (toUnit) {
            case MagneticFieldUnits.Teslas: return this.Teslas;
            case MagneticFieldUnits.Gausses: return this.Gausses;
            case MagneticFieldUnits.Nanoteslas: return this.Nanoteslas;
            case MagneticFieldUnits.Microteslas: return this.Microteslas;
            case MagneticFieldUnits.Milliteslas: return this.Milliteslas;
            case MagneticFieldUnits.Milligausses: return this.Milligausses;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: MagneticFieldUnits): number {
        switch (toUnit) {
                
            case MagneticFieldUnits.Teslas:
                return this.value;
            case MagneticFieldUnits.Gausses:
                return this.value * 1e4;
            case MagneticFieldUnits.Nanoteslas:
                return (this.value) / 1e-9;
            case MagneticFieldUnits.Microteslas:
                return (this.value) / 0.000001;
            case MagneticFieldUnits.Milliteslas:
                return (this.value) / 0.001;
            case MagneticFieldUnits.Milligausses:
                return (this.value * 1e4) / 0.001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MagneticFieldUnits): number {
        switch (fromUnit) {
                
            case MagneticFieldUnits.Teslas:
                return value;
            case MagneticFieldUnits.Gausses:
                return value / 1e4;
            case MagneticFieldUnits.Nanoteslas:
                return (value) * 1e-9;
            case MagneticFieldUnits.Microteslas:
                return (value) * 0.000001;
            case MagneticFieldUnits.Milliteslas:
                return (value) * 0.001;
            case MagneticFieldUnits.Milligausses:
                return (value / 1e4) * 0.001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the MagneticField to string.
     * Note! the default format for MagneticField is Teslas.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the MagneticField.
     * @returns The string format of the MagneticField.
     */
    public toString(unit: MagneticFieldUnits = MagneticFieldUnits.Teslas): string {

        switch (unit) {
            
            case MagneticFieldUnits.Teslas:
                return this.Teslas + ` T`;
            case MagneticFieldUnits.Gausses:
                return this.Gausses + ` G`;
            case MagneticFieldUnits.Nanoteslas:
                return this.Nanoteslas + ` nT`;
            case MagneticFieldUnits.Microteslas:
                return this.Microteslas + ` μT`;
            case MagneticFieldUnits.Milliteslas:
                return this.Milliteslas + ` mT`;
            case MagneticFieldUnits.Milligausses:
                return this.Milligausses + ` mG`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get MagneticField unit abbreviation.
     * Note! the default abbreviation for MagneticField is Teslas.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the MagneticField.
     * @returns The abbreviation string of MagneticField.
     */
    public getUnitAbbreviation(unitAbbreviation: MagneticFieldUnits = MagneticFieldUnits.Teslas): string {

        switch (unitAbbreviation) {
            
            case MagneticFieldUnits.Teslas:
                return `T`;
            case MagneticFieldUnits.Gausses:
                return `G`;
            case MagneticFieldUnits.Nanoteslas:
                return `nT`;
            case MagneticFieldUnits.Microteslas:
                return `μT`;
            case MagneticFieldUnits.Milliteslas:
                return `mT`;
            case MagneticFieldUnits.Milligausses:
                return `mG`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given MagneticField are equals to the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns True if the given MagneticField are equal to the current MagneticField.
     */
    public equals(magneticField: MagneticField): boolean {
        return super.internalEquals(this.value, magneticField.BaseValue);
    }

    /**
     * Compare the given MagneticField against the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns 0 if they are equal, -1 if the current MagneticField is less then other, 1 if the current MagneticField is greater then other.
     */
    public compareTo(magneticField: MagneticField): number {
        return super.internalCompareTo(this.value, magneticField.BaseValue);
    }

    /**
     * Add the given MagneticField with the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns A new MagneticField instance with the results.
     */
    public add(magneticField: MagneticField): MagneticField {
        return new MagneticField(super.internalAdd(this.value, magneticField.BaseValue))
    }

    /**
     * Subtract the given MagneticField with the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns A new MagneticField instance with the results.
     */
    public subtract(magneticField: MagneticField): MagneticField {
        return new MagneticField(super.internalSubtract(this.value, magneticField.BaseValue))
    }

    /**
     * Multiply the given MagneticField with the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns A new MagneticField instance with the results.
     */
    public multiply(magneticField: MagneticField): MagneticField {
        return new MagneticField(super.internalMultiply(this.value, magneticField.BaseValue))
    }

    /**
     * Divide the given MagneticField with the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns A new MagneticField instance with the results.
     */
    public divide(magneticField: MagneticField): MagneticField {
        return new MagneticField(super.internalDivide(this.value, magneticField.BaseValue))
    }

    /**
     * Modulo the given MagneticField with the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns A new MagneticField instance with the results.
     */
    public modulo(magneticField: MagneticField): MagneticField {
        return new MagneticField(super.internalModulo(this.value, magneticField.BaseValue))
    }

    /**
     * Pow the given MagneticField with the current MagneticField.
     * @param magneticField The other MagneticField.
     * @returns A new MagneticField instance with the results.
     */
    public pow(magneticField: MagneticField): MagneticField {
        return new MagneticField(super.internalPow(this.value, magneticField.BaseValue))
    }
}
