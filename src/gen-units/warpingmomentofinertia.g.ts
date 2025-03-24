import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a WarpingMomentOfInertia */
export interface WarpingMomentOfInertiaDto {
    /** The value of the WarpingMomentOfInertia */
    value: number;
    /**  The specific unit that the WarpingMomentOfInertia value is representing */
    unit: WarpingMomentOfInertiaUnits;
}

/** WarpingMomentOfInertiaUnits enumeration */
export enum WarpingMomentOfInertiaUnits {
    /** */
    MetersToTheSixth = "MeterToTheSixth",
    /** */
    DecimetersToTheSixth = "DecimeterToTheSixth",
    /** */
    CentimetersToTheSixth = "CentimeterToTheSixth",
    /** */
    MillimetersToTheSixth = "MillimeterToTheSixth",
    /** */
    FeetToTheSixth = "FootToTheSixth",
    /** */
    InchesToTheSixth = "InchToTheSixth"
}

/** A geometric property of an area that is used to determine the warping stress. */
export class WarpingMomentOfInertia extends BaseUnit {
    protected value: number;
    private meterstothesixthLazy: number | null = null;
    private decimeterstothesixthLazy: number | null = null;
    private centimeterstothesixthLazy: number | null = null;
    private millimeterstothesixthLazy: number | null = null;
    private feettothesixthLazy: number | null = null;
    private inchestothesixthLazy: number | null = null;

    /**
     * Create a new WarpingMomentOfInertia.
     * @param value The value.
     * @param fromUnit The ‘WarpingMomentOfInertia’ unit to create from.
     * The default unit is MetersToTheSixth
     */
    public constructor(value: number, fromUnit: WarpingMomentOfInertiaUnits = WarpingMomentOfInertiaUnits.MetersToTheSixth) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of WarpingMomentOfInertia is MetersToTheSixth.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): WarpingMomentOfInertiaUnits.MetersToTheSixth {
        return WarpingMomentOfInertiaUnits.MetersToTheSixth
    }

    /** */
    public get MetersToTheSixth(): number {
        if(this.meterstothesixthLazy !== null){
            return this.meterstothesixthLazy;
        }
        return this.meterstothesixthLazy = this.convertFromBase(WarpingMomentOfInertiaUnits.MetersToTheSixth);
    }

    /** */
    public get DecimetersToTheSixth(): number {
        if(this.decimeterstothesixthLazy !== null){
            return this.decimeterstothesixthLazy;
        }
        return this.decimeterstothesixthLazy = this.convertFromBase(WarpingMomentOfInertiaUnits.DecimetersToTheSixth);
    }

    /** */
    public get CentimetersToTheSixth(): number {
        if(this.centimeterstothesixthLazy !== null){
            return this.centimeterstothesixthLazy;
        }
        return this.centimeterstothesixthLazy = this.convertFromBase(WarpingMomentOfInertiaUnits.CentimetersToTheSixth);
    }

    /** */
    public get MillimetersToTheSixth(): number {
        if(this.millimeterstothesixthLazy !== null){
            return this.millimeterstothesixthLazy;
        }
        return this.millimeterstothesixthLazy = this.convertFromBase(WarpingMomentOfInertiaUnits.MillimetersToTheSixth);
    }

    /** */
    public get FeetToTheSixth(): number {
        if(this.feettothesixthLazy !== null){
            return this.feettothesixthLazy;
        }
        return this.feettothesixthLazy = this.convertFromBase(WarpingMomentOfInertiaUnits.FeetToTheSixth);
    }

    /** */
    public get InchesToTheSixth(): number {
        if(this.inchestothesixthLazy !== null){
            return this.inchestothesixthLazy;
        }
        return this.inchestothesixthLazy = this.convertFromBase(WarpingMomentOfInertiaUnits.InchesToTheSixth);
    }

    /**
     * Create a new WarpingMomentOfInertia instance from a MetersToTheSixth
     *
     * @param value The unit as MetersToTheSixth to create a new WarpingMomentOfInertia from.
     * @returns The new WarpingMomentOfInertia instance.
     */
    public static FromMetersToTheSixth(value: number): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(value, WarpingMomentOfInertiaUnits.MetersToTheSixth);
    }

    /**
     * Create a new WarpingMomentOfInertia instance from a DecimetersToTheSixth
     *
     * @param value The unit as DecimetersToTheSixth to create a new WarpingMomentOfInertia from.
     * @returns The new WarpingMomentOfInertia instance.
     */
    public static FromDecimetersToTheSixth(value: number): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(value, WarpingMomentOfInertiaUnits.DecimetersToTheSixth);
    }

    /**
     * Create a new WarpingMomentOfInertia instance from a CentimetersToTheSixth
     *
     * @param value The unit as CentimetersToTheSixth to create a new WarpingMomentOfInertia from.
     * @returns The new WarpingMomentOfInertia instance.
     */
    public static FromCentimetersToTheSixth(value: number): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(value, WarpingMomentOfInertiaUnits.CentimetersToTheSixth);
    }

    /**
     * Create a new WarpingMomentOfInertia instance from a MillimetersToTheSixth
     *
     * @param value The unit as MillimetersToTheSixth to create a new WarpingMomentOfInertia from.
     * @returns The new WarpingMomentOfInertia instance.
     */
    public static FromMillimetersToTheSixth(value: number): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(value, WarpingMomentOfInertiaUnits.MillimetersToTheSixth);
    }

    /**
     * Create a new WarpingMomentOfInertia instance from a FeetToTheSixth
     *
     * @param value The unit as FeetToTheSixth to create a new WarpingMomentOfInertia from.
     * @returns The new WarpingMomentOfInertia instance.
     */
    public static FromFeetToTheSixth(value: number): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(value, WarpingMomentOfInertiaUnits.FeetToTheSixth);
    }

    /**
     * Create a new WarpingMomentOfInertia instance from a InchesToTheSixth
     *
     * @param value The unit as InchesToTheSixth to create a new WarpingMomentOfInertia from.
     * @returns The new WarpingMomentOfInertia instance.
     */
    public static FromInchesToTheSixth(value: number): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(value, WarpingMomentOfInertiaUnits.InchesToTheSixth);
    }

    /**
     * Gets the base unit enumeration associated with WarpingMomentOfInertia
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof WarpingMomentOfInertiaUnits {
        return WarpingMomentOfInertiaUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): WarpingMomentOfInertiaUnits.MetersToTheSixth {
        return WarpingMomentOfInertiaUnits.MetersToTheSixth;
    }

    /**
     * Create API DTO represent a WarpingMomentOfInertia unit.
     * @param holdInUnit The specific WarpingMomentOfInertia unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: WarpingMomentOfInertiaUnits = WarpingMomentOfInertiaUnits.MetersToTheSixth): WarpingMomentOfInertiaDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a WarpingMomentOfInertia unit from an API DTO representation.
     * @param dtoWarpingMomentOfInertia The WarpingMomentOfInertia API DTO representation
     */
    public static FromDto(dtoWarpingMomentOfInertia: WarpingMomentOfInertiaDto): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(dtoWarpingMomentOfInertia.value, dtoWarpingMomentOfInertia.unit);
    }

    /**
     * Convert WarpingMomentOfInertia to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: WarpingMomentOfInertiaUnits): number {
        switch (toUnit) {
            case WarpingMomentOfInertiaUnits.MetersToTheSixth: return this.MetersToTheSixth;
            case WarpingMomentOfInertiaUnits.DecimetersToTheSixth: return this.DecimetersToTheSixth;
            case WarpingMomentOfInertiaUnits.CentimetersToTheSixth: return this.CentimetersToTheSixth;
            case WarpingMomentOfInertiaUnits.MillimetersToTheSixth: return this.MillimetersToTheSixth;
            case WarpingMomentOfInertiaUnits.FeetToTheSixth: return this.FeetToTheSixth;
            case WarpingMomentOfInertiaUnits.InchesToTheSixth: return this.InchesToTheSixth;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: WarpingMomentOfInertiaUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case WarpingMomentOfInertiaUnits.MetersToTheSixth: return this.value;
                case WarpingMomentOfInertiaUnits.DecimetersToTheSixth: return super.internalMultiply(this.value, 1e6);
                case WarpingMomentOfInertiaUnits.CentimetersToTheSixth: return super.internalMultiply(this.value, 1e12);
                case WarpingMomentOfInertiaUnits.MillimetersToTheSixth: return super.internalMultiply(this.value, 1e18);
                case WarpingMomentOfInertiaUnits.FeetToTheSixth: {
                    const v4 = super.internalPow(0.3048, 6);
                    return super.internalDivide(this.value, v4);
                }
                case WarpingMomentOfInertiaUnits.InchesToTheSixth: {
                    const v4 = super.internalPow(2.54e-2, 6);
                    return super.internalDivide(this.value, v4);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case WarpingMomentOfInertiaUnits.MetersToTheSixth: return this.value;
            case WarpingMomentOfInertiaUnits.DecimetersToTheSixth: return this.value * 1e6;
            case WarpingMomentOfInertiaUnits.CentimetersToTheSixth: return this.value * 1e12;
            case WarpingMomentOfInertiaUnits.MillimetersToTheSixth: return this.value * 1e18;
            case WarpingMomentOfInertiaUnits.FeetToTheSixth: return this.value / Math.pow(0.3048, 6);
            case WarpingMomentOfInertiaUnits.InchesToTheSixth: return this.value / Math.pow(2.54e-2, 6);
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: WarpingMomentOfInertiaUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case WarpingMomentOfInertiaUnits.MetersToTheSixth: return value;
                case WarpingMomentOfInertiaUnits.DecimetersToTheSixth: return super.internalDivide(value, 1e6);
                case WarpingMomentOfInertiaUnits.CentimetersToTheSixth: return super.internalDivide(value, 1e12);
                case WarpingMomentOfInertiaUnits.MillimetersToTheSixth: return super.internalDivide(value, 1e18);
                case WarpingMomentOfInertiaUnits.FeetToTheSixth: {
                    const v4 = super.internalPow(0.3048, 6);
                    return super.internalMultiply(value, v4);
                }
                case WarpingMomentOfInertiaUnits.InchesToTheSixth: {
                    const v4 = super.internalPow(2.54e-2, 6);
                    return super.internalMultiply(value, v4);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case WarpingMomentOfInertiaUnits.MetersToTheSixth: return value;
            case WarpingMomentOfInertiaUnits.DecimetersToTheSixth: return value / 1e6;
            case WarpingMomentOfInertiaUnits.CentimetersToTheSixth: return value / 1e12;
            case WarpingMomentOfInertiaUnits.MillimetersToTheSixth: return value / 1e18;
            case WarpingMomentOfInertiaUnits.FeetToTheSixth: return value * Math.pow(0.3048, 6);
            case WarpingMomentOfInertiaUnits.InchesToTheSixth: return value * Math.pow(2.54e-2, 6);
            default: return Number.NaN;
        }
    }

    /**
     * Format the WarpingMomentOfInertia to string.
     * Note! the default format for WarpingMomentOfInertia is MetersToTheSixth.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the WarpingMomentOfInertia.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the WarpingMomentOfInertia.
     */
    public toString(unit: WarpingMomentOfInertiaUnits = WarpingMomentOfInertiaUnits.MetersToTheSixth, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case WarpingMomentOfInertiaUnits.MetersToTheSixth:
                return super.truncateFractionDigits(this.MetersToTheSixth, options as ToStringOptions) + ` m⁶`;
            case WarpingMomentOfInertiaUnits.DecimetersToTheSixth:
                return super.truncateFractionDigits(this.DecimetersToTheSixth, options as ToStringOptions) + ` dm⁶`;
            case WarpingMomentOfInertiaUnits.CentimetersToTheSixth:
                return super.truncateFractionDigits(this.CentimetersToTheSixth, options as ToStringOptions) + ` cm⁶`;
            case WarpingMomentOfInertiaUnits.MillimetersToTheSixth:
                return super.truncateFractionDigits(this.MillimetersToTheSixth, options as ToStringOptions) + ` mm⁶`;
            case WarpingMomentOfInertiaUnits.FeetToTheSixth:
                return super.truncateFractionDigits(this.FeetToTheSixth, options as ToStringOptions) + ` ft⁶`;
            case WarpingMomentOfInertiaUnits.InchesToTheSixth:
                return super.truncateFractionDigits(this.InchesToTheSixth, options as ToStringOptions) + ` in⁶`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get WarpingMomentOfInertia unit abbreviation.
     * Note! the default abbreviation for WarpingMomentOfInertia is MetersToTheSixth.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the WarpingMomentOfInertia.
     * @returns The abbreviation string of WarpingMomentOfInertia.
     */
    public getUnitAbbreviation(unitAbbreviation: WarpingMomentOfInertiaUnits = WarpingMomentOfInertiaUnits.MetersToTheSixth): string {

        switch (unitAbbreviation) {
            
            case WarpingMomentOfInertiaUnits.MetersToTheSixth:
                return `m⁶`;
            case WarpingMomentOfInertiaUnits.DecimetersToTheSixth:
                return `dm⁶`;
            case WarpingMomentOfInertiaUnits.CentimetersToTheSixth:
                return `cm⁶`;
            case WarpingMomentOfInertiaUnits.MillimetersToTheSixth:
                return `mm⁶`;
            case WarpingMomentOfInertiaUnits.FeetToTheSixth:
                return `ft⁶`;
            case WarpingMomentOfInertiaUnits.InchesToTheSixth:
                return `in⁶`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given WarpingMomentOfInertia are equals to the current WarpingMomentOfInertia.
     * @param warpingMomentOfInertia The other WarpingMomentOfInertia.
     * @returns True if the given WarpingMomentOfInertia are equal to the current WarpingMomentOfInertia.
     */
    public equals(warpingMomentOfInertia: WarpingMomentOfInertia): boolean {
        return super.internalEquals(this.value, warpingMomentOfInertia.BaseValue);
    }

    /**
     * Compare the given WarpingMomentOfInertia against the current WarpingMomentOfInertia.
     * @param warpingMomentOfInertia The other WarpingMomentOfInertia.
     * @returns 0 if they are equal, -1 if the current WarpingMomentOfInertia is less then other, 1 if the current WarpingMomentOfInertia is greater then other.
     */
    public compareTo(warpingMomentOfInertia: WarpingMomentOfInertia): number {
        return super.internalCompareTo(this.value, warpingMomentOfInertia.BaseValue);
    }

    /**
     * Add the given WarpingMomentOfInertia with the current WarpingMomentOfInertia.
     * @param warpingMomentOfInertia The other WarpingMomentOfInertia.
     * @returns A new WarpingMomentOfInertia instance with the results.
     */
    public add(warpingMomentOfInertia: WarpingMomentOfInertia): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(super.internalAdd(this.value, warpingMomentOfInertia.BaseValue))
    }

    /**
     * Subtract the given WarpingMomentOfInertia with the current WarpingMomentOfInertia.
     * @param warpingMomentOfInertia The other WarpingMomentOfInertia.
     * @returns A new WarpingMomentOfInertia instance with the results.
     */
    public subtract(warpingMomentOfInertia: WarpingMomentOfInertia): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(super.internalSubtract(this.value, warpingMomentOfInertia.BaseValue))
    }

    /**
     * Multiply the given WarpingMomentOfInertia with the current WarpingMomentOfInertia.
     * @param warpingMomentOfInertia The other WarpingMomentOfInertia.
     * @returns A new WarpingMomentOfInertia instance with the results.
     */
    public multiply(warpingMomentOfInertia: WarpingMomentOfInertia): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(super.internalMultiply(this.value, warpingMomentOfInertia.BaseValue))
    }

    /**
     * Divide the given WarpingMomentOfInertia with the current WarpingMomentOfInertia.
     * @param warpingMomentOfInertia The other WarpingMomentOfInertia.
     * @returns A new WarpingMomentOfInertia instance with the results.
     */
    public divide(warpingMomentOfInertia: WarpingMomentOfInertia): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(super.internalDivide(this.value, warpingMomentOfInertia.BaseValue))
    }

    /**
     * Modulo the given WarpingMomentOfInertia with the current WarpingMomentOfInertia.
     * @param warpingMomentOfInertia The other WarpingMomentOfInertia.
     * @returns A new WarpingMomentOfInertia instance with the results.
     */
    public modulo(warpingMomentOfInertia: WarpingMomentOfInertia): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(super.internalModulo(this.value, warpingMomentOfInertia.BaseValue))
    }

    /**
     * Pow the given WarpingMomentOfInertia with the current WarpingMomentOfInertia.
     * @param warpingMomentOfInertia The other WarpingMomentOfInertia.
     * @returns A new WarpingMomentOfInertia instance with the results.
     */
    public pow(warpingMomentOfInertia: WarpingMomentOfInertia): WarpingMomentOfInertia {
        return new WarpingMomentOfInertia(super.internalPow(this.value, warpingMomentOfInertia.BaseValue))
    }
}
