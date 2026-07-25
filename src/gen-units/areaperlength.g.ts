import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a AreaPerLength */
export interface AreaPerLengthDto {
    /** The value of the AreaPerLength */
    value: number;
    /**  The specific unit that the AreaPerLength value is representing */
    unit: AreaPerLengthUnits;
}

/** AreaPerLengthUnits enumeration */
export enum AreaPerLengthUnits {
    /** */
    SquareMetersPerMeter = "SquareMeterPerMeter",
    /** */
    SquareCentimetersPerMeter = "SquareCentimeterPerMeter",
    /** */
    SquareMillimetersPerMeter = "SquareMillimeterPerMeter",
    /** */
    SquareInchesPerFoot = "SquareInchPerFoot",
    /** */
    SquareInchesPerInch = "SquareInchPerInch",
    /** */
    SquareFeetPerFoot = "SquareFootPerFoot"
}

/** The magnitude of area per unit length, typically used in structural engineering to specify distributed reinforcement. */
export class AreaPerLength extends BaseUnit {
    protected value: number;
    private squaremeterspermeterLazy: number | null = null;
    private squarecentimeterspermeterLazy: number | null = null;
    private squaremillimeterspermeterLazy: number | null = null;
    private squareinchesperfootLazy: number | null = null;
    private squareinchesperinchLazy: number | null = null;
    private squarefeetperfootLazy: number | null = null;

    /**
     * Create a new AreaPerLength.
     * @param value The value.
     * @param fromUnit The ‘AreaPerLength’ unit to create from.
     * The default unit is SquareMetersPerMeter
     */
    public constructor(value: number, fromUnit: AreaPerLengthUnits = AreaPerLengthUnits.SquareMetersPerMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of AreaPerLength is SquareMetersPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): AreaPerLengthUnits.SquareMetersPerMeter {
        return AreaPerLengthUnits.SquareMetersPerMeter
    }

    /** */
    public get SquareMetersPerMeter(): number {
        if(this.squaremeterspermeterLazy !== null){
            return this.squaremeterspermeterLazy;
        }
        return this.squaremeterspermeterLazy = this.convertFromBase(AreaPerLengthUnits.SquareMetersPerMeter);
    }

    /** */
    public get SquareCentimetersPerMeter(): number {
        if(this.squarecentimeterspermeterLazy !== null){
            return this.squarecentimeterspermeterLazy;
        }
        return this.squarecentimeterspermeterLazy = this.convertFromBase(AreaPerLengthUnits.SquareCentimetersPerMeter);
    }

    /** */
    public get SquareMillimetersPerMeter(): number {
        if(this.squaremillimeterspermeterLazy !== null){
            return this.squaremillimeterspermeterLazy;
        }
        return this.squaremillimeterspermeterLazy = this.convertFromBase(AreaPerLengthUnits.SquareMillimetersPerMeter);
    }

    /** */
    public get SquareInchesPerFoot(): number {
        if(this.squareinchesperfootLazy !== null){
            return this.squareinchesperfootLazy;
        }
        return this.squareinchesperfootLazy = this.convertFromBase(AreaPerLengthUnits.SquareInchesPerFoot);
    }

    /** */
    public get SquareInchesPerInch(): number {
        if(this.squareinchesperinchLazy !== null){
            return this.squareinchesperinchLazy;
        }
        return this.squareinchesperinchLazy = this.convertFromBase(AreaPerLengthUnits.SquareInchesPerInch);
    }

    /** */
    public get SquareFeetPerFoot(): number {
        if(this.squarefeetperfootLazy !== null){
            return this.squarefeetperfootLazy;
        }
        return this.squarefeetperfootLazy = this.convertFromBase(AreaPerLengthUnits.SquareFeetPerFoot);
    }

    /**
     * Create a new AreaPerLength instance from a SquareMetersPerMeter
     *
     * @param value The unit as SquareMetersPerMeter to create a new AreaPerLength from.
     * @returns The new AreaPerLength instance.
     */
    public static FromSquareMetersPerMeter(value: number): AreaPerLength {
        return new AreaPerLength(value, AreaPerLengthUnits.SquareMetersPerMeter);
    }

    /**
     * Create a new AreaPerLength instance from a SquareCentimetersPerMeter
     *
     * @param value The unit as SquareCentimetersPerMeter to create a new AreaPerLength from.
     * @returns The new AreaPerLength instance.
     */
    public static FromSquareCentimetersPerMeter(value: number): AreaPerLength {
        return new AreaPerLength(value, AreaPerLengthUnits.SquareCentimetersPerMeter);
    }

    /**
     * Create a new AreaPerLength instance from a SquareMillimetersPerMeter
     *
     * @param value The unit as SquareMillimetersPerMeter to create a new AreaPerLength from.
     * @returns The new AreaPerLength instance.
     */
    public static FromSquareMillimetersPerMeter(value: number): AreaPerLength {
        return new AreaPerLength(value, AreaPerLengthUnits.SquareMillimetersPerMeter);
    }

    /**
     * Create a new AreaPerLength instance from a SquareInchesPerFoot
     *
     * @param value The unit as SquareInchesPerFoot to create a new AreaPerLength from.
     * @returns The new AreaPerLength instance.
     */
    public static FromSquareInchesPerFoot(value: number): AreaPerLength {
        return new AreaPerLength(value, AreaPerLengthUnits.SquareInchesPerFoot);
    }

    /**
     * Create a new AreaPerLength instance from a SquareInchesPerInch
     *
     * @param value The unit as SquareInchesPerInch to create a new AreaPerLength from.
     * @returns The new AreaPerLength instance.
     */
    public static FromSquareInchesPerInch(value: number): AreaPerLength {
        return new AreaPerLength(value, AreaPerLengthUnits.SquareInchesPerInch);
    }

    /**
     * Create a new AreaPerLength instance from a SquareFeetPerFoot
     *
     * @param value The unit as SquareFeetPerFoot to create a new AreaPerLength from.
     * @returns The new AreaPerLength instance.
     */
    public static FromSquareFeetPerFoot(value: number): AreaPerLength {
        return new AreaPerLength(value, AreaPerLengthUnits.SquareFeetPerFoot);
    }

    /**
     * Gets the base unit enumeration associated with AreaPerLength
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof AreaPerLengthUnits {
        return AreaPerLengthUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): AreaPerLengthUnits.SquareMetersPerMeter {
        return AreaPerLengthUnits.SquareMetersPerMeter;
    }

    /**
     * Create API DTO represent a AreaPerLength unit.
     * @param holdInUnit The specific AreaPerLength unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: AreaPerLengthUnits = AreaPerLengthUnits.SquareMetersPerMeter): AreaPerLengthDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a AreaPerLength unit from an API DTO representation.
     * @param dtoAreaPerLength The AreaPerLength API DTO representation
     */
    public static FromDto(dtoAreaPerLength: AreaPerLengthDto): AreaPerLength {
        return new AreaPerLength(dtoAreaPerLength.value, dtoAreaPerLength.unit);
    }

    /**
     * Convert AreaPerLength to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: AreaPerLengthUnits): number {
        switch (toUnit) {
            case AreaPerLengthUnits.SquareMetersPerMeter: return this.SquareMetersPerMeter;
            case AreaPerLengthUnits.SquareCentimetersPerMeter: return this.SquareCentimetersPerMeter;
            case AreaPerLengthUnits.SquareMillimetersPerMeter: return this.SquareMillimetersPerMeter;
            case AreaPerLengthUnits.SquareInchesPerFoot: return this.SquareInchesPerFoot;
            case AreaPerLengthUnits.SquareInchesPerInch: return this.SquareInchesPerInch;
            case AreaPerLengthUnits.SquareFeetPerFoot: return this.SquareFeetPerFoot;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: AreaPerLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case AreaPerLengthUnits.SquareMetersPerMeter: return this.value;
                case AreaPerLengthUnits.SquareCentimetersPerMeter: return super.internalDivide(this.value, 1e-4);
                case AreaPerLengthUnits.SquareMillimetersPerMeter: return super.internalDivide(this.value, 1e-6);
                case AreaPerLengthUnits.SquareInchesPerFoot: {
                    const v4 = super.internalDivide(0.3048, 0.00064516);
                    return super.internalMultiply(this.value, v4);
                }
                case AreaPerLengthUnits.SquareInchesPerInch: {
                    const v4 = super.internalDivide(0.0254, 0.00064516);
                    return super.internalMultiply(this.value, v4);
                }
                case AreaPerLengthUnits.SquareFeetPerFoot: {
                    const v4 = super.internalDivide(0.3048, 0.09290304);
                    return super.internalMultiply(this.value, v4);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case AreaPerLengthUnits.SquareMetersPerMeter: return this.value;
            case AreaPerLengthUnits.SquareCentimetersPerMeter: return this.value / 1e-4;
            case AreaPerLengthUnits.SquareMillimetersPerMeter: return this.value / 1e-6;
            case AreaPerLengthUnits.SquareInchesPerFoot: return this.value * 0.3048 / 0.00064516;
            case AreaPerLengthUnits.SquareInchesPerInch: return this.value * 0.0254 / 0.00064516;
            case AreaPerLengthUnits.SquareFeetPerFoot: return this.value * 0.3048 / 0.09290304;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: AreaPerLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case AreaPerLengthUnits.SquareMetersPerMeter: return value;
                case AreaPerLengthUnits.SquareCentimetersPerMeter: return super.internalMultiply(value, 1e-4);
                case AreaPerLengthUnits.SquareMillimetersPerMeter: return super.internalMultiply(value, 1e-6);
                case AreaPerLengthUnits.SquareInchesPerFoot: {
                    const v4 = super.internalDivide(0.00064516, 0.3048);
                    return super.internalMultiply(value, v4);
                }
                case AreaPerLengthUnits.SquareInchesPerInch: {
                    const v4 = super.internalDivide(0.00064516, 0.0254);
                    return super.internalMultiply(value, v4);
                }
                case AreaPerLengthUnits.SquareFeetPerFoot: {
                    const v4 = super.internalDivide(0.09290304, 0.3048);
                    return super.internalMultiply(value, v4);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case AreaPerLengthUnits.SquareMetersPerMeter: return value;
            case AreaPerLengthUnits.SquareCentimetersPerMeter: return value * 1e-4;
            case AreaPerLengthUnits.SquareMillimetersPerMeter: return value * 1e-6;
            case AreaPerLengthUnits.SquareInchesPerFoot: return value * 0.00064516 / 0.3048;
            case AreaPerLengthUnits.SquareInchesPerInch: return value * 0.00064516 / 0.0254;
            case AreaPerLengthUnits.SquareFeetPerFoot: return value * 0.09290304 / 0.3048;
            default: return Number.NaN;
        }
    }

    /**
     * Format the AreaPerLength to string.
     * Note! the default format for AreaPerLength is SquareMetersPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the AreaPerLength.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the AreaPerLength.
     */
    public toString(unit: AreaPerLengthUnits = AreaPerLengthUnits.SquareMetersPerMeter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case AreaPerLengthUnits.SquareMetersPerMeter:
                return super.truncateFractionDigits(this.SquareMetersPerMeter, options as ToStringOptions) + ` m²/m`;
            case AreaPerLengthUnits.SquareCentimetersPerMeter:
                return super.truncateFractionDigits(this.SquareCentimetersPerMeter, options as ToStringOptions) + ` cm²/m`;
            case AreaPerLengthUnits.SquareMillimetersPerMeter:
                return super.truncateFractionDigits(this.SquareMillimetersPerMeter, options as ToStringOptions) + ` mm²/m`;
            case AreaPerLengthUnits.SquareInchesPerFoot:
                return super.truncateFractionDigits(this.SquareInchesPerFoot, options as ToStringOptions) + ` in²/ft`;
            case AreaPerLengthUnits.SquareInchesPerInch:
                return super.truncateFractionDigits(this.SquareInchesPerInch, options as ToStringOptions) + ` in²/in`;
            case AreaPerLengthUnits.SquareFeetPerFoot:
                return super.truncateFractionDigits(this.SquareFeetPerFoot, options as ToStringOptions) + ` ft²/ft`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get AreaPerLength unit abbreviation.
     * Note! the default abbreviation for AreaPerLength is SquareMetersPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the AreaPerLength.
     * @returns The abbreviation string of AreaPerLength.
     */
    public getUnitAbbreviation(unitAbbreviation: AreaPerLengthUnits = AreaPerLengthUnits.SquareMetersPerMeter): string {

        switch (unitAbbreviation) {
            
            case AreaPerLengthUnits.SquareMetersPerMeter:
                return `m²/m`;
            case AreaPerLengthUnits.SquareCentimetersPerMeter:
                return `cm²/m`;
            case AreaPerLengthUnits.SquareMillimetersPerMeter:
                return `mm²/m`;
            case AreaPerLengthUnits.SquareInchesPerFoot:
                return `in²/ft`;
            case AreaPerLengthUnits.SquareInchesPerInch:
                return `in²/in`;
            case AreaPerLengthUnits.SquareFeetPerFoot:
                return `ft²/ft`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given AreaPerLength are equals to the current AreaPerLength.
     * @param areaPerLength The other AreaPerLength.
     * @returns True if the given AreaPerLength are equal to the current AreaPerLength.
     */
    public equals(areaPerLength: AreaPerLength): boolean {
        return super.internalEquals(this.value, areaPerLength.BaseValue);
    }

    /**
     * Compare the given AreaPerLength against the current AreaPerLength.
     * @param areaPerLength The other AreaPerLength.
     * @returns 0 if they are equal, -1 if the current AreaPerLength is less then other, 1 if the current AreaPerLength is greater then other.
     */
    public compareTo(areaPerLength: AreaPerLength): number {
        return super.internalCompareTo(this.value, areaPerLength.BaseValue);
    }

    /**
     * Add the given AreaPerLength with the current AreaPerLength.
     * @param areaPerLength The other AreaPerLength.
     * @returns A new AreaPerLength instance with the results.
     */
    public add(areaPerLength: AreaPerLength): AreaPerLength {
        return new AreaPerLength(super.internalAdd(this.value, areaPerLength.BaseValue))
    }

    /**
     * Subtract the given AreaPerLength with the current AreaPerLength.
     * @param areaPerLength The other AreaPerLength.
     * @returns A new AreaPerLength instance with the results.
     */
    public subtract(areaPerLength: AreaPerLength): AreaPerLength {
        return new AreaPerLength(super.internalSubtract(this.value, areaPerLength.BaseValue))
    }

    /**
     * Multiply the given AreaPerLength with the current AreaPerLength.
     * @param areaPerLength The other AreaPerLength.
     * @returns A new AreaPerLength instance with the results.
     */
    public multiply(areaPerLength: AreaPerLength): AreaPerLength {
        return new AreaPerLength(super.internalMultiply(this.value, areaPerLength.BaseValue))
    }

    /**
     * Divide the given AreaPerLength with the current AreaPerLength.
     * @param areaPerLength The other AreaPerLength.
     * @returns A new AreaPerLength instance with the results.
     */
    public divide(areaPerLength: AreaPerLength): AreaPerLength {
        return new AreaPerLength(super.internalDivide(this.value, areaPerLength.BaseValue))
    }

    /**
     * Modulo the given AreaPerLength with the current AreaPerLength.
     * @param areaPerLength The other AreaPerLength.
     * @returns A new AreaPerLength instance with the results.
     */
    public modulo(areaPerLength: AreaPerLength): AreaPerLength {
        return new AreaPerLength(super.internalModulo(this.value, areaPerLength.BaseValue))
    }

    /**
     * Pow the given AreaPerLength with the current AreaPerLength.
     * @param areaPerLength The other AreaPerLength.
     * @returns A new AreaPerLength instance with the results.
     */
    public pow(areaPerLength: AreaPerLength): AreaPerLength {
        return new AreaPerLength(super.internalPow(this.value, areaPerLength.BaseValue))
    }
}
