import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a ReciprocalLength */
export interface ReciprocalLengthDto {
    /** The value of the ReciprocalLength */
    value: number;
    /**  The specific unit that the ReciprocalLength value is representing */
    unit: ReciprocalLengthUnits;
}

/** ReciprocalLengthUnits enumeration */
export enum ReciprocalLengthUnits {
    /** */
    InverseMeters = "InverseMeter",
    /** */
    InverseCentimeters = "InverseCentimeter",
    /** */
    InverseMillimeters = "InverseMillimeter",
    /** */
    InverseMiles = "InverseMile",
    /** */
    InverseYards = "InverseYard",
    /** */
    InverseFeet = "InverseFoot",
    /** */
    InverseUsSurveyFeet = "InverseUsSurveyFoot",
    /** */
    InverseInches = "InverseInch",
    /** */
    InverseMils = "InverseMil",
    /** */
    InverseMicroinches = "InverseMicroinch"
}

/** Reciprocal (Inverse) Length is used in various fields of science and mathematics. It is defined as the inverse value of a length unit. */
export class ReciprocalLength extends BaseUnit {
    protected value: number;
    private inversemetersLazy: number | null = null;
    private inversecentimetersLazy: number | null = null;
    private inversemillimetersLazy: number | null = null;
    private inversemilesLazy: number | null = null;
    private inverseyardsLazy: number | null = null;
    private inversefeetLazy: number | null = null;
    private inverseussurveyfeetLazy: number | null = null;
    private inverseinchesLazy: number | null = null;
    private inversemilsLazy: number | null = null;
    private inversemicroinchesLazy: number | null = null;

    /**
     * Create a new ReciprocalLength.
     * @param value The value.
     * @param fromUnit The ‘ReciprocalLength’ unit to create from.
     * The default unit is InverseMeters
     */
    public constructor(value: number, fromUnit: ReciprocalLengthUnits = ReciprocalLengthUnits.InverseMeters) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ReciprocalLength is InverseMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ReciprocalLengthUnits.InverseMeters {
        return ReciprocalLengthUnits.InverseMeters
    }

    /** */
    public get InverseMeters(): number {
        if(this.inversemetersLazy !== null){
            return this.inversemetersLazy;
        }
        return this.inversemetersLazy = this.convertFromBase(ReciprocalLengthUnits.InverseMeters);
    }

    /** */
    public get InverseCentimeters(): number {
        if(this.inversecentimetersLazy !== null){
            return this.inversecentimetersLazy;
        }
        return this.inversecentimetersLazy = this.convertFromBase(ReciprocalLengthUnits.InverseCentimeters);
    }

    /** */
    public get InverseMillimeters(): number {
        if(this.inversemillimetersLazy !== null){
            return this.inversemillimetersLazy;
        }
        return this.inversemillimetersLazy = this.convertFromBase(ReciprocalLengthUnits.InverseMillimeters);
    }

    /** */
    public get InverseMiles(): number {
        if(this.inversemilesLazy !== null){
            return this.inversemilesLazy;
        }
        return this.inversemilesLazy = this.convertFromBase(ReciprocalLengthUnits.InverseMiles);
    }

    /** */
    public get InverseYards(): number {
        if(this.inverseyardsLazy !== null){
            return this.inverseyardsLazy;
        }
        return this.inverseyardsLazy = this.convertFromBase(ReciprocalLengthUnits.InverseYards);
    }

    /** */
    public get InverseFeet(): number {
        if(this.inversefeetLazy !== null){
            return this.inversefeetLazy;
        }
        return this.inversefeetLazy = this.convertFromBase(ReciprocalLengthUnits.InverseFeet);
    }

    /** */
    public get InverseUsSurveyFeet(): number {
        if(this.inverseussurveyfeetLazy !== null){
            return this.inverseussurveyfeetLazy;
        }
        return this.inverseussurveyfeetLazy = this.convertFromBase(ReciprocalLengthUnits.InverseUsSurveyFeet);
    }

    /** */
    public get InverseInches(): number {
        if(this.inverseinchesLazy !== null){
            return this.inverseinchesLazy;
        }
        return this.inverseinchesLazy = this.convertFromBase(ReciprocalLengthUnits.InverseInches);
    }

    /** */
    public get InverseMils(): number {
        if(this.inversemilsLazy !== null){
            return this.inversemilsLazy;
        }
        return this.inversemilsLazy = this.convertFromBase(ReciprocalLengthUnits.InverseMils);
    }

    /** */
    public get InverseMicroinches(): number {
        if(this.inversemicroinchesLazy !== null){
            return this.inversemicroinchesLazy;
        }
        return this.inversemicroinchesLazy = this.convertFromBase(ReciprocalLengthUnits.InverseMicroinches);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseMeters
     *
     * @param value The unit as InverseMeters to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseMeters(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseMeters);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseCentimeters
     *
     * @param value The unit as InverseCentimeters to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseCentimeters(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseCentimeters);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseMillimeters
     *
     * @param value The unit as InverseMillimeters to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseMillimeters(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseMillimeters);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseMiles
     *
     * @param value The unit as InverseMiles to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseMiles(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseMiles);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseYards
     *
     * @param value The unit as InverseYards to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseYards(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseYards);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseFeet
     *
     * @param value The unit as InverseFeet to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseFeet(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseFeet);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseUsSurveyFeet
     *
     * @param value The unit as InverseUsSurveyFeet to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseUsSurveyFeet(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseUsSurveyFeet);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseInches
     *
     * @param value The unit as InverseInches to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseInches(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseInches);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseMils
     *
     * @param value The unit as InverseMils to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseMils(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseMils);
    }

    /**
     * Create a new ReciprocalLength instance from a InverseMicroinches
     *
     * @param value The unit as InverseMicroinches to create a new ReciprocalLength from.
     * @returns The new ReciprocalLength instance.
     */
    public static FromInverseMicroinches(value: number): ReciprocalLength {
        return new ReciprocalLength(value, ReciprocalLengthUnits.InverseMicroinches);
    }

    /**
     * Gets the base unit enumeration associated with ReciprocalLength
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ReciprocalLengthUnits {
        return ReciprocalLengthUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ReciprocalLengthUnits.InverseMeters {
        return ReciprocalLengthUnits.InverseMeters;
    }

    /**
     * Create API DTO represent a ReciprocalLength unit.
     * @param holdInUnit The specific ReciprocalLength unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ReciprocalLengthUnits = ReciprocalLengthUnits.InverseMeters): ReciprocalLengthDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ReciprocalLength unit from an API DTO representation.
     * @param dtoReciprocalLength The ReciprocalLength API DTO representation
     */
    public static FromDto(dtoReciprocalLength: ReciprocalLengthDto): ReciprocalLength {
        return new ReciprocalLength(dtoReciprocalLength.value, dtoReciprocalLength.unit);
    }

    /**
     * Convert ReciprocalLength to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ReciprocalLengthUnits): number {
        switch (toUnit) {
            case ReciprocalLengthUnits.InverseMeters: return this.InverseMeters;
            case ReciprocalLengthUnits.InverseCentimeters: return this.InverseCentimeters;
            case ReciprocalLengthUnits.InverseMillimeters: return this.InverseMillimeters;
            case ReciprocalLengthUnits.InverseMiles: return this.InverseMiles;
            case ReciprocalLengthUnits.InverseYards: return this.InverseYards;
            case ReciprocalLengthUnits.InverseFeet: return this.InverseFeet;
            case ReciprocalLengthUnits.InverseUsSurveyFeet: return this.InverseUsSurveyFeet;
            case ReciprocalLengthUnits.InverseInches: return this.InverseInches;
            case ReciprocalLengthUnits.InverseMils: return this.InverseMils;
            case ReciprocalLengthUnits.InverseMicroinches: return this.InverseMicroinches;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ReciprocalLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ReciprocalLengthUnits.InverseMeters: return this.value;
                case ReciprocalLengthUnits.InverseCentimeters: return super.internalDivide(this.value, 1e2);
                case ReciprocalLengthUnits.InverseMillimeters: return super.internalDivide(this.value, 1e3);
                case ReciprocalLengthUnits.InverseMiles: return super.internalMultiply(this.value, 1609.344);
                case ReciprocalLengthUnits.InverseYards: return super.internalMultiply(this.value, 0.9144);
                case ReciprocalLengthUnits.InverseFeet: return super.internalMultiply(this.value, 0.3048);
                case ReciprocalLengthUnits.InverseUsSurveyFeet: {
                    const v4 = super.internalDivide(1200, 3937);
                    return super.internalMultiply(this.value, v4);
                }
                case ReciprocalLengthUnits.InverseInches: return super.internalMultiply(this.value, 2.54e-2);
                case ReciprocalLengthUnits.InverseMils: return super.internalMultiply(this.value, 2.54e-5);
                case ReciprocalLengthUnits.InverseMicroinches: return super.internalMultiply(this.value, 2.54e-8);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ReciprocalLengthUnits.InverseMeters: return this.value;
            case ReciprocalLengthUnits.InverseCentimeters: return this.value / 1e2;
            case ReciprocalLengthUnits.InverseMillimeters: return this.value / 1e3;
            case ReciprocalLengthUnits.InverseMiles: return this.value * 1609.344;
            case ReciprocalLengthUnits.InverseYards: return this.value * 0.9144;
            case ReciprocalLengthUnits.InverseFeet: return this.value * 0.3048;
            case ReciprocalLengthUnits.InverseUsSurveyFeet: return this.value * 1200 / 3937;
            case ReciprocalLengthUnits.InverseInches: return this.value * 2.54e-2;
            case ReciprocalLengthUnits.InverseMils: return this.value * 2.54e-5;
            case ReciprocalLengthUnits.InverseMicroinches: return this.value * 2.54e-8;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ReciprocalLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ReciprocalLengthUnits.InverseMeters: return value;
                case ReciprocalLengthUnits.InverseCentimeters: return super.internalMultiply(value, 1e2);
                case ReciprocalLengthUnits.InverseMillimeters: return super.internalMultiply(value, 1e3);
                case ReciprocalLengthUnits.InverseMiles: return super.internalDivide(value, 1609.344);
                case ReciprocalLengthUnits.InverseYards: return super.internalDivide(value, 0.9144);
                case ReciprocalLengthUnits.InverseFeet: return super.internalDivide(value, 0.3048);
                case ReciprocalLengthUnits.InverseUsSurveyFeet: {
                    const v4 = super.internalDivide(3937, 1200);
                    return super.internalMultiply(value, v4);
                }
                case ReciprocalLengthUnits.InverseInches: return super.internalDivide(value, 2.54e-2);
                case ReciprocalLengthUnits.InverseMils: return super.internalDivide(value, 2.54e-5);
                case ReciprocalLengthUnits.InverseMicroinches: return super.internalDivide(value, 2.54e-8);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ReciprocalLengthUnits.InverseMeters: return value;
            case ReciprocalLengthUnits.InverseCentimeters: return value * 1e2;
            case ReciprocalLengthUnits.InverseMillimeters: return value * 1e3;
            case ReciprocalLengthUnits.InverseMiles: return value / 1609.344;
            case ReciprocalLengthUnits.InverseYards: return value / 0.9144;
            case ReciprocalLengthUnits.InverseFeet: return value / 0.3048;
            case ReciprocalLengthUnits.InverseUsSurveyFeet: return value * 3937 / 1200;
            case ReciprocalLengthUnits.InverseInches: return value / 2.54e-2;
            case ReciprocalLengthUnits.InverseMils: return value / 2.54e-5;
            case ReciprocalLengthUnits.InverseMicroinches: return value / 2.54e-8;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ReciprocalLength to string.
     * Note! the default format for ReciprocalLength is InverseMeters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ReciprocalLength.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the ReciprocalLength.
     */
    public toString(unit: ReciprocalLengthUnits = ReciprocalLengthUnits.InverseMeters, fractionalDigits?: number): string {

        switch (unit) {
            
            case ReciprocalLengthUnits.InverseMeters:
                return super.truncateFractionDigits(this.InverseMeters, fractionalDigits) + ` m⁻¹`;
            case ReciprocalLengthUnits.InverseCentimeters:
                return super.truncateFractionDigits(this.InverseCentimeters, fractionalDigits) + ` cm⁻¹`;
            case ReciprocalLengthUnits.InverseMillimeters:
                return super.truncateFractionDigits(this.InverseMillimeters, fractionalDigits) + ` mm⁻¹`;
            case ReciprocalLengthUnits.InverseMiles:
                return super.truncateFractionDigits(this.InverseMiles, fractionalDigits) + ` mi⁻¹`;
            case ReciprocalLengthUnits.InverseYards:
                return super.truncateFractionDigits(this.InverseYards, fractionalDigits) + ` yd⁻¹`;
            case ReciprocalLengthUnits.InverseFeet:
                return super.truncateFractionDigits(this.InverseFeet, fractionalDigits) + ` ft⁻¹`;
            case ReciprocalLengthUnits.InverseUsSurveyFeet:
                return super.truncateFractionDigits(this.InverseUsSurveyFeet, fractionalDigits) + ` ftUS⁻¹`;
            case ReciprocalLengthUnits.InverseInches:
                return super.truncateFractionDigits(this.InverseInches, fractionalDigits) + ` in⁻¹`;
            case ReciprocalLengthUnits.InverseMils:
                return super.truncateFractionDigits(this.InverseMils, fractionalDigits) + ` mil⁻¹`;
            case ReciprocalLengthUnits.InverseMicroinches:
                return super.truncateFractionDigits(this.InverseMicroinches, fractionalDigits) + ` µin⁻¹`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ReciprocalLength unit abbreviation.
     * Note! the default abbreviation for ReciprocalLength is InverseMeters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ReciprocalLength.
     * @returns The abbreviation string of ReciprocalLength.
     */
    public getUnitAbbreviation(unitAbbreviation: ReciprocalLengthUnits = ReciprocalLengthUnits.InverseMeters): string {

        switch (unitAbbreviation) {
            
            case ReciprocalLengthUnits.InverseMeters:
                return `m⁻¹`;
            case ReciprocalLengthUnits.InverseCentimeters:
                return `cm⁻¹`;
            case ReciprocalLengthUnits.InverseMillimeters:
                return `mm⁻¹`;
            case ReciprocalLengthUnits.InverseMiles:
                return `mi⁻¹`;
            case ReciprocalLengthUnits.InverseYards:
                return `yd⁻¹`;
            case ReciprocalLengthUnits.InverseFeet:
                return `ft⁻¹`;
            case ReciprocalLengthUnits.InverseUsSurveyFeet:
                return `ftUS⁻¹`;
            case ReciprocalLengthUnits.InverseInches:
                return `in⁻¹`;
            case ReciprocalLengthUnits.InverseMils:
                return `mil⁻¹`;
            case ReciprocalLengthUnits.InverseMicroinches:
                return `µin⁻¹`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ReciprocalLength are equals to the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns True if the given ReciprocalLength are equal to the current ReciprocalLength.
     */
    public equals(reciprocalLength: ReciprocalLength): boolean {
        return super.internalEquals(this.value, reciprocalLength.BaseValue);
    }

    /**
     * Compare the given ReciprocalLength against the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns 0 if they are equal, -1 if the current ReciprocalLength is less then other, 1 if the current ReciprocalLength is greater then other.
     */
    public compareTo(reciprocalLength: ReciprocalLength): number {
        return super.internalCompareTo(this.value, reciprocalLength.BaseValue);
    }

    /**
     * Add the given ReciprocalLength with the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns A new ReciprocalLength instance with the results.
     */
    public add(reciprocalLength: ReciprocalLength): ReciprocalLength {
        return new ReciprocalLength(super.internalAdd(this.value, reciprocalLength.BaseValue))
    }

    /**
     * Subtract the given ReciprocalLength with the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns A new ReciprocalLength instance with the results.
     */
    public subtract(reciprocalLength: ReciprocalLength): ReciprocalLength {
        return new ReciprocalLength(super.internalSubtract(this.value, reciprocalLength.BaseValue))
    }

    /**
     * Multiply the given ReciprocalLength with the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns A new ReciprocalLength instance with the results.
     */
    public multiply(reciprocalLength: ReciprocalLength): ReciprocalLength {
        return new ReciprocalLength(super.internalMultiply(this.value, reciprocalLength.BaseValue))
    }

    /**
     * Divide the given ReciprocalLength with the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns A new ReciprocalLength instance with the results.
     */
    public divide(reciprocalLength: ReciprocalLength): ReciprocalLength {
        return new ReciprocalLength(super.internalDivide(this.value, reciprocalLength.BaseValue))
    }

    /**
     * Modulo the given ReciprocalLength with the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns A new ReciprocalLength instance with the results.
     */
    public modulo(reciprocalLength: ReciprocalLength): ReciprocalLength {
        return new ReciprocalLength(super.internalModulo(this.value, reciprocalLength.BaseValue))
    }

    /**
     * Pow the given ReciprocalLength with the current ReciprocalLength.
     * @param reciprocalLength The other ReciprocalLength.
     * @returns A new ReciprocalLength instance with the results.
     */
    public pow(reciprocalLength: ReciprocalLength): ReciprocalLength {
        return new ReciprocalLength(super.internalPow(this.value, reciprocalLength.BaseValue))
    }
}
