import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a MagneticFlux */
export interface MagneticFluxDto {
    /** The value of the MagneticFlux */
    value: number;
    /**  The specific unit that the MagneticFlux value is representing */
    unit: MagneticFluxUnits;
}

/** MagneticFluxUnits enumeration */
export enum MagneticFluxUnits {
    /** */
    Webers = "Weber"
}

/** In physics, specifically electromagnetism, the magnetic flux through a surface is the surface integral of the normal component of the magnetic field B passing through that surface. */
export class MagneticFlux extends BaseUnit {
    protected value: number;
    private webersLazy: number | null = null;

    /**
     * Create a new MagneticFlux.
     * @param value The value.
     * @param fromUnit The ‘MagneticFlux’ unit to create from.
     * The default unit is Webers
     */
    public constructor(value: number, fromUnit: MagneticFluxUnits = MagneticFluxUnits.Webers) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MagneticFlux is Webers.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): MagneticFluxUnits.Webers {
        return MagneticFluxUnits.Webers
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
     * Gets the base unit enumeration associated with MagneticFlux
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof MagneticFluxUnits {
        return MagneticFluxUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): MagneticFluxUnits.Webers {
        return MagneticFluxUnits.Webers;
    }

    /**
     * Create API DTO represent a MagneticFlux unit.
     * @param holdInUnit The specific MagneticFlux unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: MagneticFluxUnits = MagneticFluxUnits.Webers): MagneticFluxDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a MagneticFlux unit from an API DTO representation.
     * @param dtoMagneticFlux The MagneticFlux API DTO representation
     */
    public static FromDto(dtoMagneticFlux: MagneticFluxDto): MagneticFlux {
        return new MagneticFlux(dtoMagneticFlux.value, dtoMagneticFlux.unit);
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
        return Number.NaN;
    }

    private convertFromBase(toUnit: MagneticFluxUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case MagneticFluxUnits.Webers: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case MagneticFluxUnits.Webers: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: MagneticFluxUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case MagneticFluxUnits.Webers: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case MagneticFluxUnits.Webers: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the MagneticFlux to string.
     * Note! the default format for MagneticFlux is Webers.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the MagneticFlux.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the MagneticFlux.
     */
    public toString(unit: MagneticFluxUnits = MagneticFluxUnits.Webers, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case MagneticFluxUnits.Webers:
                return super.truncateFractionDigits(this.Webers, options as ToStringOptions) + ` Wb`;
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
