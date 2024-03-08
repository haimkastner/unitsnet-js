/** API DTO represents a Magnetization */
export interface MagnetizationDto {
    value: number;
    unit: MagnetizationUnits;
}

/** MagnetizationUnits enumeration */
export enum MagnetizationUnits {
    /** */
    AmperesPerMeter = "AmperePerMeter"
}

/** In classical electromagnetism, magnetization is the vector field that expresses the density of permanent or induced magnetic dipole moments in a magnetic material. */
export class Magnetization {
    private value: number;
    private amperespermeterLazy: number | null = null;

    /**
     * Create a new Magnetization.
     * @param value The value.
     * @param fromUnit The ‘Magnetization’ unit to create from.
     * The default unit is AmperesPerMeter
     */
    public constructor(value: number, fromUnit: MagnetizationUnits = MagnetizationUnits.AmperesPerMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Magnetization is AmperesPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get AmperesPerMeter(): number {
        if(this.amperespermeterLazy !== null){
            return this.amperespermeterLazy;
        }
        return this.amperespermeterLazy = this.convertFromBase(MagnetizationUnits.AmperesPerMeter);
    }

    /**
     * Create a new Magnetization instance from a AmperesPerMeter
     *
     * @param value The unit as AmperesPerMeter to create a new Magnetization from.
     * @returns The new Magnetization instance.
     */
    public static FromAmperesPerMeter(value: number): Magnetization {
        return new Magnetization(value, MagnetizationUnits.AmperesPerMeter);
    }

    /**
     * Create API DTO represent a Magnetization unit.
     * @param holdInUnit The specific Magnetization unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: MagnetizationUnits = MagnetizationUnits.AmperesPerMeter): MagnetizationDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Magnetization unit from an API DTO representation.
     * @param dtoMagnetization The Magnetization API DTO representation
     */
    public static FromDto(dtoMagnetization: MagnetizationDto): Magnetization {
        return new Magnetization(dtoMagnetization.value, dtoMagnetization.unit);
    }

    /**
     * Convert Magnetization to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: MagnetizationUnits): number {
        switch (toUnit) {
            case MagnetizationUnits.AmperesPerMeter: return this.AmperesPerMeter;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: MagnetizationUnits): number {
        switch (toUnit) {
                
            case MagnetizationUnits.AmperesPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MagnetizationUnits): number {
        switch (fromUnit) {
                
            case MagnetizationUnits.AmperesPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Magnetization to string.
     * Note! the default format for Magnetization is AmperesPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Magnetization.
     * @returns The string format of the Magnetization.
     */
    public toString(unit: MagnetizationUnits = MagnetizationUnits.AmperesPerMeter): string {

        switch (unit) {
            
            case MagnetizationUnits.AmperesPerMeter:
                return this.AmperesPerMeter + ` A/m`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Magnetization unit abbreviation.
     * Note! the default abbreviation for Magnetization is AmperesPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Magnetization.
     * @returns The abbreviation string of Magnetization.
     */
    public getUnitAbbreviation(unitAbbreviation: MagnetizationUnits = MagnetizationUnits.AmperesPerMeter): string {

        switch (unitAbbreviation) {
            
            case MagnetizationUnits.AmperesPerMeter:
                return `A/m`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Magnetization are equals to the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns True if the given Magnetization are equal to the current Magnetization.
     */
    public equals(magnetization: Magnetization): boolean {
        return this.value === magnetization.BaseValue;
    }

    /**
     * Compare the given Magnetization against the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns 0 if they are equal, -1 if the current Magnetization is less then other, 1 if the current Magnetization is greater then other.
     */
    public compareTo(magnetization: Magnetization): number {

        if (this.value > magnetization.BaseValue)
            return 1;
        if (this.value < magnetization.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    public add(magnetization: Magnetization): Magnetization {
        return new Magnetization(this.value + magnetization.BaseValue)
    }

    /**
     * Subtract the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    public subtract(magnetization: Magnetization): Magnetization {
        return new Magnetization(this.value - magnetization.BaseValue)
    }

    /**
     * Multiply the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    public multiply(magnetization: Magnetization): Magnetization {
        return new Magnetization(this.value * magnetization.BaseValue)
    }

    /**
     * Divide the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    public divide(magnetization: Magnetization): Magnetization {
        return new Magnetization(this.value / magnetization.BaseValue)
    }

    /**
     * Modulo the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    public modulo(magnetization: Magnetization): Magnetization {
        return new Magnetization(this.value % magnetization.BaseValue)
    }

    /**
     * Pow the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    public pow(magnetization: Magnetization): Magnetization {
        return new Magnetization(this.value ** magnetization.BaseValue)
    }
}
