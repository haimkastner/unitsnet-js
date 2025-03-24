import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a Molality */
export interface MolalityDto {
    /** The value of the Molality */
    value: number;
    /**  The specific unit that the Molality value is representing */
    unit: MolalityUnits;
}

/** MolalityUnits enumeration */
export enum MolalityUnits {
    /** */
    MolesPerKilogram = "MolePerKilogram",
    /** */
    MolesPerGram = "MolePerGram",
    /** */
    MillimolesPerKilogram = "MillimolePerKilogram"
}

/** Molality is a measure of the amount of solute in a solution relative to a given mass of solvent. */
export class Molality extends BaseUnit {
    protected value: number;
    private molesperkilogramLazy: number | null = null;
    private molespergramLazy: number | null = null;
    private millimolesperkilogramLazy: number | null = null;

    /**
     * Create a new Molality.
     * @param value The value.
     * @param fromUnit The ‘Molality’ unit to create from.
     * The default unit is MolesPerKilogram
     */
    public constructor(value: number, fromUnit: MolalityUnits = MolalityUnits.MolesPerKilogram) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Molality is MolesPerKilogram.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): MolalityUnits.MolesPerKilogram {
        return MolalityUnits.MolesPerKilogram
    }

    /** */
    public get MolesPerKilogram(): number {
        if(this.molesperkilogramLazy !== null){
            return this.molesperkilogramLazy;
        }
        return this.molesperkilogramLazy = this.convertFromBase(MolalityUnits.MolesPerKilogram);
    }

    /** */
    public get MolesPerGram(): number {
        if(this.molespergramLazy !== null){
            return this.molespergramLazy;
        }
        return this.molespergramLazy = this.convertFromBase(MolalityUnits.MolesPerGram);
    }

    /** */
    public get MillimolesPerKilogram(): number {
        if(this.millimolesperkilogramLazy !== null){
            return this.millimolesperkilogramLazy;
        }
        return this.millimolesperkilogramLazy = this.convertFromBase(MolalityUnits.MillimolesPerKilogram);
    }

    /**
     * Create a new Molality instance from a MolesPerKilogram
     *
     * @param value The unit as MolesPerKilogram to create a new Molality from.
     * @returns The new Molality instance.
     */
    public static FromMolesPerKilogram(value: number): Molality {
        return new Molality(value, MolalityUnits.MolesPerKilogram);
    }

    /**
     * Create a new Molality instance from a MolesPerGram
     *
     * @param value The unit as MolesPerGram to create a new Molality from.
     * @returns The new Molality instance.
     */
    public static FromMolesPerGram(value: number): Molality {
        return new Molality(value, MolalityUnits.MolesPerGram);
    }

    /**
     * Create a new Molality instance from a MillimolesPerKilogram
     *
     * @param value The unit as MillimolesPerKilogram to create a new Molality from.
     * @returns The new Molality instance.
     */
    public static FromMillimolesPerKilogram(value: number): Molality {
        return new Molality(value, MolalityUnits.MillimolesPerKilogram);
    }

    /**
     * Gets the base unit enumeration associated with Molality
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof MolalityUnits {
        return MolalityUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): MolalityUnits.MolesPerKilogram {
        return MolalityUnits.MolesPerKilogram;
    }

    /**
     * Create API DTO represent a Molality unit.
     * @param holdInUnit The specific Molality unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: MolalityUnits = MolalityUnits.MolesPerKilogram): MolalityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Molality unit from an API DTO representation.
     * @param dtoMolality The Molality API DTO representation
     */
    public static FromDto(dtoMolality: MolalityDto): Molality {
        return new Molality(dtoMolality.value, dtoMolality.unit);
    }

    /**
     * Convert Molality to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: MolalityUnits): number {
        switch (toUnit) {
            case MolalityUnits.MolesPerKilogram: return this.MolesPerKilogram;
            case MolalityUnits.MolesPerGram: return this.MolesPerGram;
            case MolalityUnits.MillimolesPerKilogram: return this.MillimolesPerKilogram;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: MolalityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case MolalityUnits.MolesPerKilogram: return this.value;
                case MolalityUnits.MolesPerGram: return super.internalMultiply(this.value, 1e-3);
                case MolalityUnits.MillimolesPerKilogram: return super.internalDivide(this.value, 0.001);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case MolalityUnits.MolesPerKilogram: return this.value;
            case MolalityUnits.MolesPerGram: return this.value * 1e-3;
            case MolalityUnits.MillimolesPerKilogram: return (this.value) / 0.001;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: MolalityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case MolalityUnits.MolesPerKilogram: return value;
                case MolalityUnits.MolesPerGram: return super.internalDivide(value, 1e-3);
                case MolalityUnits.MillimolesPerKilogram: return super.internalMultiply(value, 0.001);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case MolalityUnits.MolesPerKilogram: return value;
            case MolalityUnits.MolesPerGram: return value / 1e-3;
            case MolalityUnits.MillimolesPerKilogram: return (value) * 0.001;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Molality to string.
     * Note! the default format for Molality is MolesPerKilogram.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Molality.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the Molality.
     */
    public toString(unit: MolalityUnits = MolalityUnits.MolesPerKilogram, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case MolalityUnits.MolesPerKilogram:
                return super.truncateFractionDigits(this.MolesPerKilogram, options as ToStringOptions) + ` mol/kg`;
            case MolalityUnits.MolesPerGram:
                return super.truncateFractionDigits(this.MolesPerGram, options as ToStringOptions) + ` mol/g`;
            case MolalityUnits.MillimolesPerKilogram:
                return super.truncateFractionDigits(this.MillimolesPerKilogram, options as ToStringOptions) + ` mmol/kg`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Molality unit abbreviation.
     * Note! the default abbreviation for Molality is MolesPerKilogram.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Molality.
     * @returns The abbreviation string of Molality.
     */
    public getUnitAbbreviation(unitAbbreviation: MolalityUnits = MolalityUnits.MolesPerKilogram): string {

        switch (unitAbbreviation) {
            
            case MolalityUnits.MolesPerKilogram:
                return `mol/kg`;
            case MolalityUnits.MolesPerGram:
                return `mol/g`;
            case MolalityUnits.MillimolesPerKilogram:
                return `mmol/kg`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Molality are equals to the current Molality.
     * @param molality The other Molality.
     * @returns True if the given Molality are equal to the current Molality.
     */
    public equals(molality: Molality): boolean {
        return super.internalEquals(this.value, molality.BaseValue);
    }

    /**
     * Compare the given Molality against the current Molality.
     * @param molality The other Molality.
     * @returns 0 if they are equal, -1 if the current Molality is less then other, 1 if the current Molality is greater then other.
     */
    public compareTo(molality: Molality): number {
        return super.internalCompareTo(this.value, molality.BaseValue);
    }

    /**
     * Add the given Molality with the current Molality.
     * @param molality The other Molality.
     * @returns A new Molality instance with the results.
     */
    public add(molality: Molality): Molality {
        return new Molality(super.internalAdd(this.value, molality.BaseValue))
    }

    /**
     * Subtract the given Molality with the current Molality.
     * @param molality The other Molality.
     * @returns A new Molality instance with the results.
     */
    public subtract(molality: Molality): Molality {
        return new Molality(super.internalSubtract(this.value, molality.BaseValue))
    }

    /**
     * Multiply the given Molality with the current Molality.
     * @param molality The other Molality.
     * @returns A new Molality instance with the results.
     */
    public multiply(molality: Molality): Molality {
        return new Molality(super.internalMultiply(this.value, molality.BaseValue))
    }

    /**
     * Divide the given Molality with the current Molality.
     * @param molality The other Molality.
     * @returns A new Molality instance with the results.
     */
    public divide(molality: Molality): Molality {
        return new Molality(super.internalDivide(this.value, molality.BaseValue))
    }

    /**
     * Modulo the given Molality with the current Molality.
     * @param molality The other Molality.
     * @returns A new Molality instance with the results.
     */
    public modulo(molality: Molality): Molality {
        return new Molality(super.internalModulo(this.value, molality.BaseValue))
    }

    /**
     * Pow the given Molality with the current Molality.
     * @param molality The other Molality.
     * @returns A new Molality instance with the results.
     */
    public pow(molality: Molality): Molality {
        return new Molality(super.internalPow(this.value, molality.BaseValue))
    }
}
