import { BaseUnit } from "../base-unit";

/** MagneticFluxUnits enumeration */
export enum MagneticFluxUnits {
    /** */
    Webers = "Weber"
}

/** In physics, specifically electromagnetism, the magnetic flux through a surface is the surface integral of the normal component of the magnetic field B passing through that surface. */
export class MagneticFlux extends BaseUnit {
    private value: number;
    private webersLazy: number | null = null;

    /**
     * Create a new MagneticFlux.
     * @param value The value.
     * @param fromUnit The ‘MagneticFlux’ unit to create from.
     * The default unit is Webers
     */
    public constructor(value: number, fromUnit: MagneticFluxUnits = MagneticFluxUnits.Webers) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MagneticFlux is Webers.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Webers(): number {
        if(this.webersLazy !== null){
            return this.webersLazy;
        }
        return this.webersLazy = this.convertFromBase(MagneticFluxUnits.Webers);
    }

    /**
     * Create a new MagneticFlux instance from a Webers
     *
     * @param value The unit as Webers to create a new MagneticFlux from.
     * @returns The new MagneticFlux instance.
     */
    public static FromWebers(value: number): MagneticFlux {
        return new MagneticFlux(value, MagneticFluxUnits.Webers);
    }

    /**
     * Convert MagneticFlux to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: MagneticFluxUnits): number {
        switch (toUnit) {
            case MagneticFluxUnits.Webers: return this.Webers;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: MagneticFluxUnits): number {
        switch (toUnit) {
                
            case MagneticFluxUnits.Webers:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MagneticFluxUnits): number {
        switch (fromUnit) {
                
            case MagneticFluxUnits.Webers:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the MagneticFlux to string.
     * Note! the default format for MagneticFlux is Webers.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the MagneticFlux.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the MagneticFlux.
     */
    public toString(unit: MagneticFluxUnits = MagneticFluxUnits.Webers, fractionalDigits?: number): string {

        switch (unit) {
            
            case MagneticFluxUnits.Webers:
                return super.truncateFractionDigits(this.Webers, fractionalDigits) + ` Wb`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get MagneticFlux unit abbreviation.
     * Note! the default abbreviation for MagneticFlux is Webers.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the MagneticFlux.
     * @returns The abbreviation string of MagneticFlux.
     */
    public getUnitAbbreviation(unitAbbreviation: MagneticFluxUnits = MagneticFluxUnits.Webers): string {

        switch (unitAbbreviation) {
            
            case MagneticFluxUnits.Webers:
                return `Wb`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given MagneticFlux are equals to the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns True if the given MagneticFlux are equal to the current MagneticFlux.
     */
    public equals(magneticFlux: MagneticFlux): boolean {
        return super.internalEquals(this.value, magneticFlux.BaseValue);
    }

    /**
     * Compare the given MagneticFlux against the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns 0 if they are equal, -1 if the current MagneticFlux is less then other, 1 if the current MagneticFlux is greater then other.
     */
    public compareTo(magneticFlux: MagneticFlux): number {
        return super.internalCompareTo(this.value, magneticFlux.BaseValue);
    }

    /**
     * Add the given MagneticFlux with the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns A new MagneticFlux instance with the results.
     */
    public add(magneticFlux: MagneticFlux): MagneticFlux {
        return new MagneticFlux(super.internalAdd(this.value, magneticFlux.BaseValue))
    }

    /**
     * Subtract the given MagneticFlux with the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns A new MagneticFlux instance with the results.
     */
    public subtract(magneticFlux: MagneticFlux): MagneticFlux {
        return new MagneticFlux(super.internalSubtract(this.value, magneticFlux.BaseValue))
    }

    /**
     * Multiply the given MagneticFlux with the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns A new MagneticFlux instance with the results.
     */
    public multiply(magneticFlux: MagneticFlux): MagneticFlux {
        return new MagneticFlux(super.internalMultiply(this.value, magneticFlux.BaseValue))
    }

    /**
     * Divide the given MagneticFlux with the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns A new MagneticFlux instance with the results.
     */
    public divide(magneticFlux: MagneticFlux): MagneticFlux {
        return new MagneticFlux(super.internalDivide(this.value, magneticFlux.BaseValue))
    }

    /**
     * Modulo the given MagneticFlux with the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns A new MagneticFlux instance with the results.
     */
    public modulo(magneticFlux: MagneticFlux): MagneticFlux {
        return new MagneticFlux(super.internalModulo(this.value, magneticFlux.BaseValue))
    }

    /**
     * Pow the given MagneticFlux with the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns A new MagneticFlux instance with the results.
     */
    public pow(magneticFlux: MagneticFlux): MagneticFlux {
        return new MagneticFlux(super.internalPow(this.value, magneticFlux.BaseValue))
    }
}
