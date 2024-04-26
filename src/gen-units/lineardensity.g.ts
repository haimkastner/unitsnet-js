import { BaseUnit } from "../base-unit";

/** API DTO represents a LinearDensity */
export interface LinearDensityDto {
    /** The value of the LinearDensity */
    value: number;
    /**  The specific unit that the LinearDensity value is representing */
    unit: LinearDensityUnits;
}

/** LinearDensityUnits enumeration */
export enum LinearDensityUnits {
    /** */
    GramsPerMillimeter = "GramPerMillimeter",
    /** */
    GramsPerCentimeter = "GramPerCentimeter",
    /** */
    GramsPerMeter = "GramPerMeter",
    /** */
    PoundsPerInch = "PoundPerInch",
    /** */
    PoundsPerFoot = "PoundPerFoot",
    /** */
    MicrogramsPerMillimeter = "MicrogramPerMillimeter",
    /** */
    MilligramsPerMillimeter = "MilligramPerMillimeter",
    /** */
    KilogramsPerMillimeter = "KilogramPerMillimeter",
    /** */
    MicrogramsPerCentimeter = "MicrogramPerCentimeter",
    /** */
    MilligramsPerCentimeter = "MilligramPerCentimeter",
    /** */
    KilogramsPerCentimeter = "KilogramPerCentimeter",
    /** */
    MicrogramsPerMeter = "MicrogramPerMeter",
    /** */
    MilligramsPerMeter = "MilligramPerMeter",
    /** */
    KilogramsPerMeter = "KilogramPerMeter"
}

/** The Linear Density, or more precisely, the linear mass density, of a substance is its mass per unit length.  The term linear density is most often used when describing the characteristics of one-dimensional objects, although linear density can also be used to describe the density of a three-dimensional quantity along one particular dimension. */
export class LinearDensity extends BaseUnit {
    private value: number;
    private gramspermillimeterLazy: number | null = null;
    private gramspercentimeterLazy: number | null = null;
    private gramspermeterLazy: number | null = null;
    private poundsperinchLazy: number | null = null;
    private poundsperfootLazy: number | null = null;
    private microgramspermillimeterLazy: number | null = null;
    private milligramspermillimeterLazy: number | null = null;
    private kilogramspermillimeterLazy: number | null = null;
    private microgramspercentimeterLazy: number | null = null;
    private milligramspercentimeterLazy: number | null = null;
    private kilogramspercentimeterLazy: number | null = null;
    private microgramspermeterLazy: number | null = null;
    private milligramspermeterLazy: number | null = null;
    private kilogramspermeterLazy: number | null = null;

    /**
     * Create a new LinearDensity.
     * @param value The value.
     * @param fromUnit The ‘LinearDensity’ unit to create from.
     * The default unit is KilogramsPerMeter
     */
    public constructor(value: number, fromUnit: LinearDensityUnits = LinearDensityUnits.KilogramsPerMeter) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of LinearDensity is KilogramsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get GramsPerMillimeter(): number {
        if(this.gramspermillimeterLazy !== null){
            return this.gramspermillimeterLazy;
        }
        return this.gramspermillimeterLazy = this.convertFromBase(LinearDensityUnits.GramsPerMillimeter);
    }

    /** */
    public get GramsPerCentimeter(): number {
        if(this.gramspercentimeterLazy !== null){
            return this.gramspercentimeterLazy;
        }
        return this.gramspercentimeterLazy = this.convertFromBase(LinearDensityUnits.GramsPerCentimeter);
    }

    /** */
    public get GramsPerMeter(): number {
        if(this.gramspermeterLazy !== null){
            return this.gramspermeterLazy;
        }
        return this.gramspermeterLazy = this.convertFromBase(LinearDensityUnits.GramsPerMeter);
    }

    /** */
    public get PoundsPerInch(): number {
        if(this.poundsperinchLazy !== null){
            return this.poundsperinchLazy;
        }
        return this.poundsperinchLazy = this.convertFromBase(LinearDensityUnits.PoundsPerInch);
    }

    /** */
    public get PoundsPerFoot(): number {
        if(this.poundsperfootLazy !== null){
            return this.poundsperfootLazy;
        }
        return this.poundsperfootLazy = this.convertFromBase(LinearDensityUnits.PoundsPerFoot);
    }

    /** */
    public get MicrogramsPerMillimeter(): number {
        if(this.microgramspermillimeterLazy !== null){
            return this.microgramspermillimeterLazy;
        }
        return this.microgramspermillimeterLazy = this.convertFromBase(LinearDensityUnits.MicrogramsPerMillimeter);
    }

    /** */
    public get MilligramsPerMillimeter(): number {
        if(this.milligramspermillimeterLazy !== null){
            return this.milligramspermillimeterLazy;
        }
        return this.milligramspermillimeterLazy = this.convertFromBase(LinearDensityUnits.MilligramsPerMillimeter);
    }

    /** */
    public get KilogramsPerMillimeter(): number {
        if(this.kilogramspermillimeterLazy !== null){
            return this.kilogramspermillimeterLazy;
        }
        return this.kilogramspermillimeterLazy = this.convertFromBase(LinearDensityUnits.KilogramsPerMillimeter);
    }

    /** */
    public get MicrogramsPerCentimeter(): number {
        if(this.microgramspercentimeterLazy !== null){
            return this.microgramspercentimeterLazy;
        }
        return this.microgramspercentimeterLazy = this.convertFromBase(LinearDensityUnits.MicrogramsPerCentimeter);
    }

    /** */
    public get MilligramsPerCentimeter(): number {
        if(this.milligramspercentimeterLazy !== null){
            return this.milligramspercentimeterLazy;
        }
        return this.milligramspercentimeterLazy = this.convertFromBase(LinearDensityUnits.MilligramsPerCentimeter);
    }

    /** */
    public get KilogramsPerCentimeter(): number {
        if(this.kilogramspercentimeterLazy !== null){
            return this.kilogramspercentimeterLazy;
        }
        return this.kilogramspercentimeterLazy = this.convertFromBase(LinearDensityUnits.KilogramsPerCentimeter);
    }

    /** */
    public get MicrogramsPerMeter(): number {
        if(this.microgramspermeterLazy !== null){
            return this.microgramspermeterLazy;
        }
        return this.microgramspermeterLazy = this.convertFromBase(LinearDensityUnits.MicrogramsPerMeter);
    }

    /** */
    public get MilligramsPerMeter(): number {
        if(this.milligramspermeterLazy !== null){
            return this.milligramspermeterLazy;
        }
        return this.milligramspermeterLazy = this.convertFromBase(LinearDensityUnits.MilligramsPerMeter);
    }

    /** */
    public get KilogramsPerMeter(): number {
        if(this.kilogramspermeterLazy !== null){
            return this.kilogramspermeterLazy;
        }
        return this.kilogramspermeterLazy = this.convertFromBase(LinearDensityUnits.KilogramsPerMeter);
    }

    /**
     * Create a new LinearDensity instance from a GramsPerMillimeter
     *
     * @param value The unit as GramsPerMillimeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromGramsPerMillimeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.GramsPerMillimeter);
    }

    /**
     * Create a new LinearDensity instance from a GramsPerCentimeter
     *
     * @param value The unit as GramsPerCentimeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromGramsPerCentimeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.GramsPerCentimeter);
    }

    /**
     * Create a new LinearDensity instance from a GramsPerMeter
     *
     * @param value The unit as GramsPerMeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromGramsPerMeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.GramsPerMeter);
    }

    /**
     * Create a new LinearDensity instance from a PoundsPerInch
     *
     * @param value The unit as PoundsPerInch to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromPoundsPerInch(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.PoundsPerInch);
    }

    /**
     * Create a new LinearDensity instance from a PoundsPerFoot
     *
     * @param value The unit as PoundsPerFoot to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromPoundsPerFoot(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.PoundsPerFoot);
    }

    /**
     * Create a new LinearDensity instance from a MicrogramsPerMillimeter
     *
     * @param value The unit as MicrogramsPerMillimeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromMicrogramsPerMillimeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.MicrogramsPerMillimeter);
    }

    /**
     * Create a new LinearDensity instance from a MilligramsPerMillimeter
     *
     * @param value The unit as MilligramsPerMillimeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromMilligramsPerMillimeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.MilligramsPerMillimeter);
    }

    /**
     * Create a new LinearDensity instance from a KilogramsPerMillimeter
     *
     * @param value The unit as KilogramsPerMillimeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromKilogramsPerMillimeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.KilogramsPerMillimeter);
    }

    /**
     * Create a new LinearDensity instance from a MicrogramsPerCentimeter
     *
     * @param value The unit as MicrogramsPerCentimeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromMicrogramsPerCentimeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.MicrogramsPerCentimeter);
    }

    /**
     * Create a new LinearDensity instance from a MilligramsPerCentimeter
     *
     * @param value The unit as MilligramsPerCentimeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromMilligramsPerCentimeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.MilligramsPerCentimeter);
    }

    /**
     * Create a new LinearDensity instance from a KilogramsPerCentimeter
     *
     * @param value The unit as KilogramsPerCentimeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromKilogramsPerCentimeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.KilogramsPerCentimeter);
    }

    /**
     * Create a new LinearDensity instance from a MicrogramsPerMeter
     *
     * @param value The unit as MicrogramsPerMeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromMicrogramsPerMeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.MicrogramsPerMeter);
    }

    /**
     * Create a new LinearDensity instance from a MilligramsPerMeter
     *
     * @param value The unit as MilligramsPerMeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromMilligramsPerMeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.MilligramsPerMeter);
    }

    /**
     * Create a new LinearDensity instance from a KilogramsPerMeter
     *
     * @param value The unit as KilogramsPerMeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    public static FromKilogramsPerMeter(value: number): LinearDensity {
        return new LinearDensity(value, LinearDensityUnits.KilogramsPerMeter);
    }

    /**
     * Create API DTO represent a LinearDensity unit.
     * @param holdInUnit The specific LinearDensity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: LinearDensityUnits = LinearDensityUnits.KilogramsPerMeter): LinearDensityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a LinearDensity unit from an API DTO representation.
     * @param dtoLinearDensity The LinearDensity API DTO representation
     */
    public static FromDto(dtoLinearDensity: LinearDensityDto): LinearDensity {
        return new LinearDensity(dtoLinearDensity.value, dtoLinearDensity.unit);
    }

    /**
     * Convert LinearDensity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: LinearDensityUnits): number {
        switch (toUnit) {
            case LinearDensityUnits.GramsPerMillimeter: return this.GramsPerMillimeter;
            case LinearDensityUnits.GramsPerCentimeter: return this.GramsPerCentimeter;
            case LinearDensityUnits.GramsPerMeter: return this.GramsPerMeter;
            case LinearDensityUnits.PoundsPerInch: return this.PoundsPerInch;
            case LinearDensityUnits.PoundsPerFoot: return this.PoundsPerFoot;
            case LinearDensityUnits.MicrogramsPerMillimeter: return this.MicrogramsPerMillimeter;
            case LinearDensityUnits.MilligramsPerMillimeter: return this.MilligramsPerMillimeter;
            case LinearDensityUnits.KilogramsPerMillimeter: return this.KilogramsPerMillimeter;
            case LinearDensityUnits.MicrogramsPerCentimeter: return this.MicrogramsPerCentimeter;
            case LinearDensityUnits.MilligramsPerCentimeter: return this.MilligramsPerCentimeter;
            case LinearDensityUnits.KilogramsPerCentimeter: return this.KilogramsPerCentimeter;
            case LinearDensityUnits.MicrogramsPerMeter: return this.MicrogramsPerMeter;
            case LinearDensityUnits.MilligramsPerMeter: return this.MilligramsPerMeter;
            case LinearDensityUnits.KilogramsPerMeter: return this.KilogramsPerMeter;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: LinearDensityUnits): number {
        switch (toUnit) {
                
            case LinearDensityUnits.GramsPerMillimeter:
                return this.value;
            case LinearDensityUnits.GramsPerCentimeter:
                return this.value / 1e-1;
            case LinearDensityUnits.GramsPerMeter:
                return this.value / 1e-3;
            case LinearDensityUnits.PoundsPerInch:
                return this.value * 5.5997415e-2;
            case LinearDensityUnits.PoundsPerFoot:
                return this.value / 1.48816394;
            case LinearDensityUnits.MicrogramsPerMillimeter:
                return (this.value) / 0.000001;
            case LinearDensityUnits.MilligramsPerMillimeter:
                return (this.value) / 0.001;
            case LinearDensityUnits.KilogramsPerMillimeter:
                return (this.value) / 1000;
            case LinearDensityUnits.MicrogramsPerCentimeter:
                return (this.value / 1e-1) / 0.000001;
            case LinearDensityUnits.MilligramsPerCentimeter:
                return (this.value / 1e-1) / 0.001;
            case LinearDensityUnits.KilogramsPerCentimeter:
                return (this.value / 1e-1) / 1000;
            case LinearDensityUnits.MicrogramsPerMeter:
                return (this.value / 1e-3) / 0.000001;
            case LinearDensityUnits.MilligramsPerMeter:
                return (this.value / 1e-3) / 0.001;
            case LinearDensityUnits.KilogramsPerMeter:
                return (this.value / 1e-3) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LinearDensityUnits): number {
        switch (fromUnit) {
                
            case LinearDensityUnits.GramsPerMillimeter:
                return value;
            case LinearDensityUnits.GramsPerCentimeter:
                return value * 1e-1;
            case LinearDensityUnits.GramsPerMeter:
                return value * 1e-3;
            case LinearDensityUnits.PoundsPerInch:
                return value / 5.5997415e-2;
            case LinearDensityUnits.PoundsPerFoot:
                return value * 1.48816394;
            case LinearDensityUnits.MicrogramsPerMillimeter:
                return (value) * 0.000001;
            case LinearDensityUnits.MilligramsPerMillimeter:
                return (value) * 0.001;
            case LinearDensityUnits.KilogramsPerMillimeter:
                return (value) * 1000;
            case LinearDensityUnits.MicrogramsPerCentimeter:
                return (value * 1e-1) * 0.000001;
            case LinearDensityUnits.MilligramsPerCentimeter:
                return (value * 1e-1) * 0.001;
            case LinearDensityUnits.KilogramsPerCentimeter:
                return (value * 1e-1) * 1000;
            case LinearDensityUnits.MicrogramsPerMeter:
                return (value * 1e-3) * 0.000001;
            case LinearDensityUnits.MilligramsPerMeter:
                return (value * 1e-3) * 0.001;
            case LinearDensityUnits.KilogramsPerMeter:
                return (value * 1e-3) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the LinearDensity to string.
     * Note! the default format for LinearDensity is KilogramsPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the LinearDensity.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the LinearDensity.
     */
    public toString(unit: LinearDensityUnits = LinearDensityUnits.KilogramsPerMeter, fractionalDigits?: number): string {

        switch (unit) {
            
            case LinearDensityUnits.GramsPerMillimeter:
                return super.truncateFractionDigits(this.GramsPerMillimeter, fractionalDigits) + ` g/mm`;
            case LinearDensityUnits.GramsPerCentimeter:
                return super.truncateFractionDigits(this.GramsPerCentimeter, fractionalDigits) + ` g/cm`;
            case LinearDensityUnits.GramsPerMeter:
                return super.truncateFractionDigits(this.GramsPerMeter, fractionalDigits) + ` g/m`;
            case LinearDensityUnits.PoundsPerInch:
                return super.truncateFractionDigits(this.PoundsPerInch, fractionalDigits) + ` lb/in`;
            case LinearDensityUnits.PoundsPerFoot:
                return super.truncateFractionDigits(this.PoundsPerFoot, fractionalDigits) + ` lb/ft`;
            case LinearDensityUnits.MicrogramsPerMillimeter:
                return super.truncateFractionDigits(this.MicrogramsPerMillimeter, fractionalDigits) + ` μg/mm`;
            case LinearDensityUnits.MilligramsPerMillimeter:
                return super.truncateFractionDigits(this.MilligramsPerMillimeter, fractionalDigits) + ` mg/mm`;
            case LinearDensityUnits.KilogramsPerMillimeter:
                return super.truncateFractionDigits(this.KilogramsPerMillimeter, fractionalDigits) + ` kg/mm`;
            case LinearDensityUnits.MicrogramsPerCentimeter:
                return super.truncateFractionDigits(this.MicrogramsPerCentimeter, fractionalDigits) + ` μg/cm`;
            case LinearDensityUnits.MilligramsPerCentimeter:
                return super.truncateFractionDigits(this.MilligramsPerCentimeter, fractionalDigits) + ` mg/cm`;
            case LinearDensityUnits.KilogramsPerCentimeter:
                return super.truncateFractionDigits(this.KilogramsPerCentimeter, fractionalDigits) + ` kg/cm`;
            case LinearDensityUnits.MicrogramsPerMeter:
                return super.truncateFractionDigits(this.MicrogramsPerMeter, fractionalDigits) + ` μg/m`;
            case LinearDensityUnits.MilligramsPerMeter:
                return super.truncateFractionDigits(this.MilligramsPerMeter, fractionalDigits) + ` mg/m`;
            case LinearDensityUnits.KilogramsPerMeter:
                return super.truncateFractionDigits(this.KilogramsPerMeter, fractionalDigits) + ` kg/m`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get LinearDensity unit abbreviation.
     * Note! the default abbreviation for LinearDensity is KilogramsPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the LinearDensity.
     * @returns The abbreviation string of LinearDensity.
     */
    public getUnitAbbreviation(unitAbbreviation: LinearDensityUnits = LinearDensityUnits.KilogramsPerMeter): string {

        switch (unitAbbreviation) {
            
            case LinearDensityUnits.GramsPerMillimeter:
                return `g/mm`;
            case LinearDensityUnits.GramsPerCentimeter:
                return `g/cm`;
            case LinearDensityUnits.GramsPerMeter:
                return `g/m`;
            case LinearDensityUnits.PoundsPerInch:
                return `lb/in`;
            case LinearDensityUnits.PoundsPerFoot:
                return `lb/ft`;
            case LinearDensityUnits.MicrogramsPerMillimeter:
                return `μg/mm`;
            case LinearDensityUnits.MilligramsPerMillimeter:
                return `mg/mm`;
            case LinearDensityUnits.KilogramsPerMillimeter:
                return `kg/mm`;
            case LinearDensityUnits.MicrogramsPerCentimeter:
                return `μg/cm`;
            case LinearDensityUnits.MilligramsPerCentimeter:
                return `mg/cm`;
            case LinearDensityUnits.KilogramsPerCentimeter:
                return `kg/cm`;
            case LinearDensityUnits.MicrogramsPerMeter:
                return `μg/m`;
            case LinearDensityUnits.MilligramsPerMeter:
                return `mg/m`;
            case LinearDensityUnits.KilogramsPerMeter:
                return `kg/m`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given LinearDensity are equals to the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns True if the given LinearDensity are equal to the current LinearDensity.
     */
    public equals(linearDensity: LinearDensity): boolean {
        return super.internalEquals(this.value, linearDensity.BaseValue);
    }

    /**
     * Compare the given LinearDensity against the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns 0 if they are equal, -1 if the current LinearDensity is less then other, 1 if the current LinearDensity is greater then other.
     */
    public compareTo(linearDensity: LinearDensity): number {
        return super.internalCompareTo(this.value, linearDensity.BaseValue);
    }

    /**
     * Add the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    public add(linearDensity: LinearDensity): LinearDensity {
        return new LinearDensity(super.internalAdd(this.value, linearDensity.BaseValue))
    }

    /**
     * Subtract the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    public subtract(linearDensity: LinearDensity): LinearDensity {
        return new LinearDensity(super.internalSubtract(this.value, linearDensity.BaseValue))
    }

    /**
     * Multiply the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    public multiply(linearDensity: LinearDensity): LinearDensity {
        return new LinearDensity(super.internalMultiply(this.value, linearDensity.BaseValue))
    }

    /**
     * Divide the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    public divide(linearDensity: LinearDensity): LinearDensity {
        return new LinearDensity(super.internalDivide(this.value, linearDensity.BaseValue))
    }

    /**
     * Modulo the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    public modulo(linearDensity: LinearDensity): LinearDensity {
        return new LinearDensity(super.internalModulo(this.value, linearDensity.BaseValue))
    }

    /**
     * Pow the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    public pow(linearDensity: LinearDensity): LinearDensity {
        return new LinearDensity(super.internalPow(this.value, linearDensity.BaseValue))
    }
}
