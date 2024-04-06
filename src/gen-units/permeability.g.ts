import { BaseUnit } from "../base-unit";

/** PermeabilityUnits enumeration */
export enum PermeabilityUnits {
    /** */
    HenriesPerMeter = "HenryPerMeter"
}

/** In electromagnetism, permeability is the measure of the ability of a material to support the formation of a magnetic field within itself. */
export class Permeability extends BaseUnit {
    private value: number;
    private henriespermeterLazy: number | null = null;

    /**
     * Create a new Permeability.
     * @param value The value.
     * @param fromUnit The ‘Permeability’ unit to create from.
     * The default unit is HenriesPerMeter
     */
    public constructor(value: number, fromUnit: PermeabilityUnits = PermeabilityUnits.HenriesPerMeter) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Permeability is HenriesPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get HenriesPerMeter(): number {
        if(this.henriespermeterLazy !== null){
            return this.henriespermeterLazy;
        }
        return this.henriespermeterLazy = this.convertFromBase(PermeabilityUnits.HenriesPerMeter);
    }

    /**
     * Create a new Permeability instance from a HenriesPerMeter
     *
     * @param value The unit as HenriesPerMeter to create a new Permeability from.
     * @returns The new Permeability instance.
     */
    public static FromHenriesPerMeter(value: number): Permeability {
        return new Permeability(value, PermeabilityUnits.HenriesPerMeter);
    }

    /**
     * Convert Permeability to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: PermeabilityUnits): number {
        switch (toUnit) {
            case PermeabilityUnits.HenriesPerMeter: return this.HenriesPerMeter;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: PermeabilityUnits): number {
        switch (toUnit) {
                
            case PermeabilityUnits.HenriesPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PermeabilityUnits): number {
        switch (fromUnit) {
                
            case PermeabilityUnits.HenriesPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Permeability to string.
     * Note! the default format for Permeability is HenriesPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Permeability.
     * @returns The string format of the Permeability.
     */
    public toString(unit: PermeabilityUnits = PermeabilityUnits.HenriesPerMeter): string {

        switch (unit) {
            
            case PermeabilityUnits.HenriesPerMeter:
                return this.HenriesPerMeter + ` H/m`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Permeability unit abbreviation.
     * Note! the default abbreviation for Permeability is HenriesPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Permeability.
     * @returns The abbreviation string of Permeability.
     */
    public getUnitAbbreviation(unitAbbreviation: PermeabilityUnits = PermeabilityUnits.HenriesPerMeter): string {

        switch (unitAbbreviation) {
            
            case PermeabilityUnits.HenriesPerMeter:
                return `H/m`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Permeability are equals to the current Permeability.
     * @param permeability The other Permeability.
     * @returns True if the given Permeability are equal to the current Permeability.
     */
    public equals(permeability: Permeability): boolean {
        return super.internalEquals(this.value, permeability.BaseValue);
    }

    /**
     * Compare the given Permeability against the current Permeability.
     * @param permeability The other Permeability.
     * @returns 0 if they are equal, -1 if the current Permeability is less then other, 1 if the current Permeability is greater then other.
     */
    public compareTo(permeability: Permeability): number {
        return super.internalCompareTo(this.value, permeability.BaseValue);
    }

    /**
     * Add the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    public add(permeability: Permeability): Permeability {
        return new Permeability(super.internalAdd(this.value, permeability.BaseValue))
    }

    /**
     * Subtract the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    public subtract(permeability: Permeability): Permeability {
        return new Permeability(super.internalSubtract(this.value, permeability.BaseValue))
    }

    /**
     * Multiply the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    public multiply(permeability: Permeability): Permeability {
        return new Permeability(super.internalMultiply(this.value, permeability.BaseValue))
    }

    /**
     * Divide the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    public divide(permeability: Permeability): Permeability {
        return new Permeability(super.internalDivide(this.value, permeability.BaseValue))
    }

    /**
     * Modulo the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    public modulo(permeability: Permeability): Permeability {
        return new Permeability(super.internalModulo(this.value, permeability.BaseValue))
    }

    /**
     * Pow the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    public pow(permeability: Permeability): Permeability {
        return new Permeability(super.internalPow(this.value, permeability.BaseValue))
    }
}
