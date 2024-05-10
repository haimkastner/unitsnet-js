import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a VitaminA */
export interface VitaminADto {
    /** The value of the VitaminA */
    value: number;
    /**  The specific unit that the VitaminA value is representing */
    unit: VitaminAUnits;
}

/** VitaminAUnits enumeration */
export enum VitaminAUnits {
    /** */
    InternationalUnits = "InternationalUnit"
}

/** Vitamin A: 1 IU is the biological equivalent of 0.3 µg retinol, or of 0.6 µg beta-carotene. */
export class VitaminA extends BaseUnit {
    protected value: number;
    private internationalunitsLazy: number | null = null;

    /**
     * Create a new VitaminA.
     * @param value The value.
     * @param fromUnit The ‘VitaminA’ unit to create from.
     * The default unit is InternationalUnits
     */
    public constructor(value: number, fromUnit: VitaminAUnits = VitaminAUnits.InternationalUnits) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of VitaminA is InternationalUnits.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get InternationalUnits(): number {
        if(this.internationalunitsLazy !== null){
            return this.internationalunitsLazy;
        }
        return this.internationalunitsLazy = this.convertFromBase(VitaminAUnits.InternationalUnits);
    }

    /**
     * Create a new VitaminA instance from a InternationalUnits
     *
     * @param value The unit as InternationalUnits to create a new VitaminA from.
     * @returns The new VitaminA instance.
     */
    public static FromInternationalUnits(value: number): VitaminA {
        return new VitaminA(value, VitaminAUnits.InternationalUnits);
    }

    /**
     * Gets the base unit enumeration associated with VitaminA
     * @returns The unit enumeration that can be used to interact with this type
     */
    public static getUnitEnum(): typeof VitaminAUnits {
        return VitaminAUnits;
    }

    /**
     * Create API DTO represent a VitaminA unit.
     * @param holdInUnit The specific VitaminA unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: VitaminAUnits = VitaminAUnits.InternationalUnits): VitaminADto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a VitaminA unit from an API DTO representation.
     * @param dtoVitaminA The VitaminA API DTO representation
     */
    public static FromDto(dtoVitaminA: VitaminADto): VitaminA {
        return new VitaminA(dtoVitaminA.value, dtoVitaminA.unit);
    }

    /**
     * Convert VitaminA to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: VitaminAUnits): number {
        switch (toUnit) {
            case VitaminAUnits.InternationalUnits: return this.InternationalUnits;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: VitaminAUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case VitaminAUnits.InternationalUnits: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case VitaminAUnits.InternationalUnits: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: VitaminAUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case VitaminAUnits.InternationalUnits: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case VitaminAUnits.InternationalUnits: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the VitaminA to string.
     * Note! the default format for VitaminA is InternationalUnits.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the VitaminA.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the VitaminA.
     */
    public toString(unit: VitaminAUnits = VitaminAUnits.InternationalUnits, fractionalDigits?: number): string {

        switch (unit) {
            
            case VitaminAUnits.InternationalUnits:
                return super.truncateFractionDigits(this.InternationalUnits, fractionalDigits) + ` IU`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get VitaminA unit abbreviation.
     * Note! the default abbreviation for VitaminA is InternationalUnits.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the VitaminA.
     * @returns The abbreviation string of VitaminA.
     */
    public getUnitAbbreviation(unitAbbreviation: VitaminAUnits = VitaminAUnits.InternationalUnits): string {

        switch (unitAbbreviation) {
            
            case VitaminAUnits.InternationalUnits:
                return `IU`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given VitaminA are equals to the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns True if the given VitaminA are equal to the current VitaminA.
     */
    public equals(vitaminA: VitaminA): boolean {
        return super.internalEquals(this.value, vitaminA.BaseValue);
    }

    /**
     * Compare the given VitaminA against the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns 0 if they are equal, -1 if the current VitaminA is less then other, 1 if the current VitaminA is greater then other.
     */
    public compareTo(vitaminA: VitaminA): number {
        return super.internalCompareTo(this.value, vitaminA.BaseValue);
    }

    /**
     * Add the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    public add(vitaminA: VitaminA): VitaminA {
        return new VitaminA(super.internalAdd(this.value, vitaminA.BaseValue))
    }

    /**
     * Subtract the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    public subtract(vitaminA: VitaminA): VitaminA {
        return new VitaminA(super.internalSubtract(this.value, vitaminA.BaseValue))
    }

    /**
     * Multiply the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    public multiply(vitaminA: VitaminA): VitaminA {
        return new VitaminA(super.internalMultiply(this.value, vitaminA.BaseValue))
    }

    /**
     * Divide the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    public divide(vitaminA: VitaminA): VitaminA {
        return new VitaminA(super.internalDivide(this.value, vitaminA.BaseValue))
    }

    /**
     * Modulo the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    public modulo(vitaminA: VitaminA): VitaminA {
        return new VitaminA(super.internalModulo(this.value, vitaminA.BaseValue))
    }

    /**
     * Pow the given VitaminA with the current VitaminA.
     * @param vitaminA The other VitaminA.
     * @returns A new VitaminA instance with the results.
     */
    public pow(vitaminA: VitaminA): VitaminA {
        return new VitaminA(super.internalPow(this.value, vitaminA.BaseValue))
    }
}
