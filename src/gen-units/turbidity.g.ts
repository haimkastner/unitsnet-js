import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Turbidity */
export interface TurbidityDto {
    /** The value of the Turbidity */
    value: number;
    /**  The specific unit that the Turbidity value is representing */
    unit: TurbidityUnits;
}

/** TurbidityUnits enumeration */
export enum TurbidityUnits {
    /** */
    NTU = "NTU"
}

/** Turbidity is the cloudiness or haziness of a fluid caused by large numbers of individual particles that are generally invisible to the naked eye, similar to smoke in air. The measurement of turbidity is a key test of water quality. */
export class Turbidity extends BaseUnit {
    protected value: number;
    private ntuLazy: number | null = null;

    /**
     * Create a new Turbidity.
     * @param value The value.
     * @param fromUnit The ‘Turbidity’ unit to create from.
     * The default unit is NTU
     */
    public constructor(value: number, fromUnit: TurbidityUnits = TurbidityUnits.NTU) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Turbidity is NTU.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): TurbidityUnits.NTU {
        return TurbidityUnits.NTU
    }

    /** */
    public get NTU(): number {
        if(this.ntuLazy !== null){
            return this.ntuLazy;
        }
        return this.ntuLazy = this.convertFromBase(TurbidityUnits.NTU);
    }

    /**
     * Create a new Turbidity instance from a NTU
     *
     * @param value The unit as NTU to create a new Turbidity from.
     * @returns The new Turbidity instance.
     */
    public static FromNTU(value: number): Turbidity {
        return new Turbidity(value, TurbidityUnits.NTU);
    }

    /**
     * Gets the base unit enumeration associated with Turbidity
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof TurbidityUnits {
        return TurbidityUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): TurbidityUnits.NTU {
        return TurbidityUnits.NTU;
    }

    /**
     * Create API DTO represent a Turbidity unit.
     * @param holdInUnit The specific Turbidity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: TurbidityUnits = TurbidityUnits.NTU): TurbidityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Turbidity unit from an API DTO representation.
     * @param dtoTurbidity The Turbidity API DTO representation
     */
    public static FromDto(dtoTurbidity: TurbidityDto): Turbidity {
        return new Turbidity(dtoTurbidity.value, dtoTurbidity.unit);
    }

    /**
     * Convert Turbidity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: TurbidityUnits): number {
        switch (toUnit) {
            case TurbidityUnits.NTU: return this.NTU;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: TurbidityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case TurbidityUnits.NTU: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case TurbidityUnits.NTU: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: TurbidityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case TurbidityUnits.NTU: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case TurbidityUnits.NTU: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Turbidity to string.
     * Note! the default format for Turbidity is NTU.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Turbidity.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Turbidity.
     */
    public toString(unit: TurbidityUnits = TurbidityUnits.NTU, fractionalDigits?: number): string {

        switch (unit) {
            
            case TurbidityUnits.NTU:
                return super.truncateFractionDigits(this.NTU, fractionalDigits) + ` NTU`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Turbidity unit abbreviation.
     * Note! the default abbreviation for Turbidity is NTU.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Turbidity.
     * @returns The abbreviation string of Turbidity.
     */
    public getUnitAbbreviation(unitAbbreviation: TurbidityUnits = TurbidityUnits.NTU): string {

        switch (unitAbbreviation) {
            
            case TurbidityUnits.NTU:
                return `NTU`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Turbidity are equals to the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns True if the given Turbidity are equal to the current Turbidity.
     */
    public equals(turbidity: Turbidity): boolean {
        return super.internalEquals(this.value, turbidity.BaseValue);
    }

    /**
     * Compare the given Turbidity against the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns 0 if they are equal, -1 if the current Turbidity is less then other, 1 if the current Turbidity is greater then other.
     */
    public compareTo(turbidity: Turbidity): number {
        return super.internalCompareTo(this.value, turbidity.BaseValue);
    }

    /**
     * Add the given Turbidity with the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns A new Turbidity instance with the results.
     */
    public add(turbidity: Turbidity): Turbidity {
        return new Turbidity(super.internalAdd(this.value, turbidity.BaseValue))
    }

    /**
     * Subtract the given Turbidity with the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns A new Turbidity instance with the results.
     */
    public subtract(turbidity: Turbidity): Turbidity {
        return new Turbidity(super.internalSubtract(this.value, turbidity.BaseValue))
    }

    /**
     * Multiply the given Turbidity with the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns A new Turbidity instance with the results.
     */
    public multiply(turbidity: Turbidity): Turbidity {
        return new Turbidity(super.internalMultiply(this.value, turbidity.BaseValue))
    }

    /**
     * Divide the given Turbidity with the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns A new Turbidity instance with the results.
     */
    public divide(turbidity: Turbidity): Turbidity {
        return new Turbidity(super.internalDivide(this.value, turbidity.BaseValue))
    }

    /**
     * Modulo the given Turbidity with the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns A new Turbidity instance with the results.
     */
    public modulo(turbidity: Turbidity): Turbidity {
        return new Turbidity(super.internalModulo(this.value, turbidity.BaseValue))
    }

    /**
     * Pow the given Turbidity with the current Turbidity.
     * @param turbidity The other Turbidity.
     * @returns A new Turbidity instance with the results.
     */
    public pow(turbidity: Turbidity): Turbidity {
        return new Turbidity(super.internalPow(this.value, turbidity.BaseValue))
    }
}
