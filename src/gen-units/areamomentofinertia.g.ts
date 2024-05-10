import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a AreaMomentOfInertia */
export interface AreaMomentOfInertiaDto {
    /** The value of the AreaMomentOfInertia */
    value: number;
    /**  The specific unit that the AreaMomentOfInertia value is representing */
    unit: AreaMomentOfInertiaUnits;
}

/** AreaMomentOfInertiaUnits enumeration */
export enum AreaMomentOfInertiaUnits {
    /** */
    MetersToTheFourth = "MeterToTheFourth",
    /** */
    DecimetersToTheFourth = "DecimeterToTheFourth",
    /** */
    CentimetersToTheFourth = "CentimeterToTheFourth",
    /** */
    MillimetersToTheFourth = "MillimeterToTheFourth",
    /** */
    FeetToTheFourth = "FootToTheFourth",
    /** */
    InchesToTheFourth = "InchToTheFourth"
}

/** A geometric property of an area that reflects how its points are distributed with regard to an axis. */
export class AreaMomentOfInertia extends BaseUnit {
    protected value: number;
    private meterstothefourthLazy: number | null = null;
    private decimeterstothefourthLazy: number | null = null;
    private centimeterstothefourthLazy: number | null = null;
    private millimeterstothefourthLazy: number | null = null;
    private feettothefourthLazy: number | null = null;
    private inchestothefourthLazy: number | null = null;

    /**
     * Create a new AreaMomentOfInertia.
     * @param value The value.
     * @param fromUnit The ‘AreaMomentOfInertia’ unit to create from.
     * The default unit is MetersToTheFourth
     */
    public constructor(value: number, fromUnit: AreaMomentOfInertiaUnits = AreaMomentOfInertiaUnits.MetersToTheFourth) {

        super();
        if (Number.isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of AreaMomentOfInertia is MetersToTheFourth.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get MetersToTheFourth(): number {
        if(this.meterstothefourthLazy !== null){
            return this.meterstothefourthLazy;
        }
        return this.meterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.MetersToTheFourth);
    }

    /** */
    public get DecimetersToTheFourth(): number {
        if(this.decimeterstothefourthLazy !== null){
            return this.decimeterstothefourthLazy;
        }
        return this.decimeterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.DecimetersToTheFourth);
    }

    /** */
    public get CentimetersToTheFourth(): number {
        if(this.centimeterstothefourthLazy !== null){
            return this.centimeterstothefourthLazy;
        }
        return this.centimeterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.CentimetersToTheFourth);
    }

    /** */
    public get MillimetersToTheFourth(): number {
        if(this.millimeterstothefourthLazy !== null){
            return this.millimeterstothefourthLazy;
        }
        return this.millimeterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.MillimetersToTheFourth);
    }

    /** */
    public get FeetToTheFourth(): number {
        if(this.feettothefourthLazy !== null){
            return this.feettothefourthLazy;
        }
        return this.feettothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.FeetToTheFourth);
    }

    /** */
    public get InchesToTheFourth(): number {
        if(this.inchestothefourthLazy !== null){
            return this.inchestothefourthLazy;
        }
        return this.inchestothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.InchesToTheFourth);
    }

    /**
     * Create a new AreaMomentOfInertia instance from a MetersToTheFourth
     *
     * @param value The unit as MetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    public static FromMetersToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.MetersToTheFourth);
    }

    /**
     * Create a new AreaMomentOfInertia instance from a DecimetersToTheFourth
     *
     * @param value The unit as DecimetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    public static FromDecimetersToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.DecimetersToTheFourth);
    }

    /**
     * Create a new AreaMomentOfInertia instance from a CentimetersToTheFourth
     *
     * @param value The unit as CentimetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    public static FromCentimetersToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.CentimetersToTheFourth);
    }

    /**
     * Create a new AreaMomentOfInertia instance from a MillimetersToTheFourth
     *
     * @param value The unit as MillimetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    public static FromMillimetersToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.MillimetersToTheFourth);
    }

    /**
     * Create a new AreaMomentOfInertia instance from a FeetToTheFourth
     *
     * @param value The unit as FeetToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    public static FromFeetToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.FeetToTheFourth);
    }

    /**
     * Create a new AreaMomentOfInertia instance from a InchesToTheFourth
     *
     * @param value The unit as InchesToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    public static FromInchesToTheFourth(value: number): AreaMomentOfInertia {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.InchesToTheFourth);
    }

    /**
     * Gets the base unit enumeration associated with AreaMomentOfInertia
     * @returns The unit enumeration that can be used to interact with this type
     */
    public static getUnitEnum(): typeof AreaMomentOfInertiaUnits {
        return AreaMomentOfInertiaUnits;
    }

    /**
     * Create API DTO represent a AreaMomentOfInertia unit.
     * @param holdInUnit The specific AreaMomentOfInertia unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: AreaMomentOfInertiaUnits = AreaMomentOfInertiaUnits.MetersToTheFourth): AreaMomentOfInertiaDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a AreaMomentOfInertia unit from an API DTO representation.
     * @param dtoAreaMomentOfInertia The AreaMomentOfInertia API DTO representation
     */
    public static FromDto(dtoAreaMomentOfInertia: AreaMomentOfInertiaDto): AreaMomentOfInertia {
        return new AreaMomentOfInertia(dtoAreaMomentOfInertia.value, dtoAreaMomentOfInertia.unit);
    }

    /**
     * Convert AreaMomentOfInertia to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: AreaMomentOfInertiaUnits): number {
        switch (toUnit) {
            case AreaMomentOfInertiaUnits.MetersToTheFourth: return this.MetersToTheFourth;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth: return this.DecimetersToTheFourth;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth: return this.CentimetersToTheFourth;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth: return this.MillimetersToTheFourth;
            case AreaMomentOfInertiaUnits.FeetToTheFourth: return this.FeetToTheFourth;
            case AreaMomentOfInertiaUnits.InchesToTheFourth: return this.InchesToTheFourth;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: AreaMomentOfInertiaUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case AreaMomentOfInertiaUnits.MetersToTheFourth: return this.value;
                case AreaMomentOfInertiaUnits.DecimetersToTheFourth: return super.internalMultiply(this.value, 1e4);
                case AreaMomentOfInertiaUnits.CentimetersToTheFourth: return super.internalMultiply(this.value, 1e8);
                case AreaMomentOfInertiaUnits.MillimetersToTheFourth: return super.internalMultiply(this.value, 1e12);
                case AreaMomentOfInertiaUnits.FeetToTheFourth: {
                    const v4 = Math.pow(0.3048, 4);
                    return super.internalDivide(this.value, v4);
                }
                case AreaMomentOfInertiaUnits.InchesToTheFourth: {
                    const v4 = Math.pow(2.54e-2, 4);
                    return super.internalDivide(this.value, v4);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case AreaMomentOfInertiaUnits.MetersToTheFourth: return this.value;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth: return this.value * 1e4;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth: return this.value * 1e8;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth: return this.value * 1e12;
            case AreaMomentOfInertiaUnits.FeetToTheFourth: return this.value / Math.pow(0.3048, 4);
            case AreaMomentOfInertiaUnits.InchesToTheFourth: return this.value / Math.pow(2.54e-2, 4);
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: AreaMomentOfInertiaUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case AreaMomentOfInertiaUnits.MetersToTheFourth: return value;
                case AreaMomentOfInertiaUnits.DecimetersToTheFourth: return super.internalDivide(value, 1e4);
                case AreaMomentOfInertiaUnits.CentimetersToTheFourth: return super.internalDivide(value, 1e8);
                case AreaMomentOfInertiaUnits.MillimetersToTheFourth: return super.internalDivide(value, 1e12);
                case AreaMomentOfInertiaUnits.FeetToTheFourth: {
                    const v4 = Math.pow(0.3048, 4);
                    return super.internalMultiply(value, v4);
                }
                case AreaMomentOfInertiaUnits.InchesToTheFourth: {
                    const v4 = Math.pow(2.54e-2, 4);
                    return super.internalMultiply(value, v4);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case AreaMomentOfInertiaUnits.MetersToTheFourth: return value;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth: return value / 1e4;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth: return value / 1e8;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth: return value / 1e12;
            case AreaMomentOfInertiaUnits.FeetToTheFourth: return value * Math.pow(0.3048, 4);
            case AreaMomentOfInertiaUnits.InchesToTheFourth: return value * Math.pow(2.54e-2, 4);
            default: return Number.NaN;
        }
    }

    /**
     * Format the AreaMomentOfInertia to string.
     * Note! the default format for AreaMomentOfInertia is MetersToTheFourth.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the AreaMomentOfInertia.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the AreaMomentOfInertia.
     */
    public toString(unit: AreaMomentOfInertiaUnits = AreaMomentOfInertiaUnits.MetersToTheFourth, fractionalDigits?: number): string {

        switch (unit) {
            
            case AreaMomentOfInertiaUnits.MetersToTheFourth:
                return super.truncateFractionDigits(this.MetersToTheFourth, fractionalDigits) + ` m⁴`;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth:
                return super.truncateFractionDigits(this.DecimetersToTheFourth, fractionalDigits) + ` dm⁴`;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth:
                return super.truncateFractionDigits(this.CentimetersToTheFourth, fractionalDigits) + ` cm⁴`;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth:
                return super.truncateFractionDigits(this.MillimetersToTheFourth, fractionalDigits) + ` mm⁴`;
            case AreaMomentOfInertiaUnits.FeetToTheFourth:
                return super.truncateFractionDigits(this.FeetToTheFourth, fractionalDigits) + ` ft⁴`;
            case AreaMomentOfInertiaUnits.InchesToTheFourth:
                return super.truncateFractionDigits(this.InchesToTheFourth, fractionalDigits) + ` in⁴`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get AreaMomentOfInertia unit abbreviation.
     * Note! the default abbreviation for AreaMomentOfInertia is MetersToTheFourth.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the AreaMomentOfInertia.
     * @returns The abbreviation string of AreaMomentOfInertia.
     */
    public getUnitAbbreviation(unitAbbreviation: AreaMomentOfInertiaUnits = AreaMomentOfInertiaUnits.MetersToTheFourth): string {

        switch (unitAbbreviation) {
            
            case AreaMomentOfInertiaUnits.MetersToTheFourth:
                return `m⁴`;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth:
                return `dm⁴`;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth:
                return `cm⁴`;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth:
                return `mm⁴`;
            case AreaMomentOfInertiaUnits.FeetToTheFourth:
                return `ft⁴`;
            case AreaMomentOfInertiaUnits.InchesToTheFourth:
                return `in⁴`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given AreaMomentOfInertia are equals to the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns True if the given AreaMomentOfInertia are equal to the current AreaMomentOfInertia.
     */
    public equals(areaMomentOfInertia: AreaMomentOfInertia): boolean {
        return super.internalEquals(this.value, areaMomentOfInertia.BaseValue);
    }

    /**
     * Compare the given AreaMomentOfInertia against the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns 0 if they are equal, -1 if the current AreaMomentOfInertia is less then other, 1 if the current AreaMomentOfInertia is greater then other.
     */
    public compareTo(areaMomentOfInertia: AreaMomentOfInertia): number {
        return super.internalCompareTo(this.value, areaMomentOfInertia.BaseValue);
    }

    /**
     * Add the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    public add(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia {
        return new AreaMomentOfInertia(super.internalAdd(this.value, areaMomentOfInertia.BaseValue))
    }

    /**
     * Subtract the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    public subtract(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia {
        return new AreaMomentOfInertia(super.internalSubtract(this.value, areaMomentOfInertia.BaseValue))
    }

    /**
     * Multiply the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    public multiply(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia {
        return new AreaMomentOfInertia(super.internalMultiply(this.value, areaMomentOfInertia.BaseValue))
    }

    /**
     * Divide the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    public divide(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia {
        return new AreaMomentOfInertia(super.internalDivide(this.value, areaMomentOfInertia.BaseValue))
    }

    /**
     * Modulo the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    public modulo(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia {
        return new AreaMomentOfInertia(super.internalModulo(this.value, areaMomentOfInertia.BaseValue))
    }

    /**
     * Pow the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    public pow(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia {
        return new AreaMomentOfInertia(super.internalPow(this.value, areaMomentOfInertia.BaseValue))
    }
}
