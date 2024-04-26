import { BaseUnit } from "../base-unit";

/** DynamicViscosityUnits enumeration */
export enum DynamicViscosityUnits {
    /** */
    NewtonSecondsPerMeterSquared = "NewtonSecondPerMeterSquared",
    /** */
    PascalSeconds = "PascalSecond",
    /** */
    Poise = "Poise",
    /** */
    Reyns = "Reyn",
    /** */
    PoundsForceSecondPerSquareInch = "PoundForceSecondPerSquareInch",
    /** */
    PoundsForceSecondPerSquareFoot = "PoundForceSecondPerSquareFoot",
    /** */
    PoundsPerFootSecond = "PoundPerFootSecond",
    /** */
    MillipascalSeconds = "MillipascalSecond",
    /** */
    MicropascalSeconds = "MicropascalSecond",
    /** */
    Centipoise = "Centipoise"
}

/** The dynamic (shear) viscosity of a fluid expresses its resistance to shearing flows, where adjacent layers move parallel to each other with different speeds */
export class DynamicViscosity extends BaseUnit {
    private value: number;
    private newtonsecondspermetersquaredLazy: number | null = null;
    private pascalsecondsLazy: number | null = null;
    private poiseLazy: number | null = null;
    private reynsLazy: number | null = null;
    private poundsforcesecondpersquareinchLazy: number | null = null;
    private poundsforcesecondpersquarefootLazy: number | null = null;
    private poundsperfootsecondLazy: number | null = null;
    private millipascalsecondsLazy: number | null = null;
    private micropascalsecondsLazy: number | null = null;
    private centipoiseLazy: number | null = null;

    /**
     * Create a new DynamicViscosity.
     * @param value The value.
     * @param fromUnit The ‘DynamicViscosity’ unit to create from.
     * The default unit is NewtonSecondsPerMeterSquared
     */
    public constructor(value: number, fromUnit: DynamicViscosityUnits = DynamicViscosityUnits.NewtonSecondsPerMeterSquared) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of DynamicViscosity is NewtonSecondsPerMeterSquared.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get NewtonSecondsPerMeterSquared(): number {
        if(this.newtonsecondspermetersquaredLazy !== null){
            return this.newtonsecondspermetersquaredLazy;
        }
        return this.newtonsecondspermetersquaredLazy = this.convertFromBase(DynamicViscosityUnits.NewtonSecondsPerMeterSquared);
    }

    /** */
    public get PascalSeconds(): number {
        if(this.pascalsecondsLazy !== null){
            return this.pascalsecondsLazy;
        }
        return this.pascalsecondsLazy = this.convertFromBase(DynamicViscosityUnits.PascalSeconds);
    }

    /** */
    public get Poise(): number {
        if(this.poiseLazy !== null){
            return this.poiseLazy;
        }
        return this.poiseLazy = this.convertFromBase(DynamicViscosityUnits.Poise);
    }

    /** */
    public get Reyns(): number {
        if(this.reynsLazy !== null){
            return this.reynsLazy;
        }
        return this.reynsLazy = this.convertFromBase(DynamicViscosityUnits.Reyns);
    }

    /** */
    public get PoundsForceSecondPerSquareInch(): number {
        if(this.poundsforcesecondpersquareinchLazy !== null){
            return this.poundsforcesecondpersquareinchLazy;
        }
        return this.poundsforcesecondpersquareinchLazy = this.convertFromBase(DynamicViscosityUnits.PoundsForceSecondPerSquareInch);
    }

    /** */
    public get PoundsForceSecondPerSquareFoot(): number {
        if(this.poundsforcesecondpersquarefootLazy !== null){
            return this.poundsforcesecondpersquarefootLazy;
        }
        return this.poundsforcesecondpersquarefootLazy = this.convertFromBase(DynamicViscosityUnits.PoundsForceSecondPerSquareFoot);
    }

    /** */
    public get PoundsPerFootSecond(): number {
        if(this.poundsperfootsecondLazy !== null){
            return this.poundsperfootsecondLazy;
        }
        return this.poundsperfootsecondLazy = this.convertFromBase(DynamicViscosityUnits.PoundsPerFootSecond);
    }

    /** */
    public get MillipascalSeconds(): number {
        if(this.millipascalsecondsLazy !== null){
            return this.millipascalsecondsLazy;
        }
        return this.millipascalsecondsLazy = this.convertFromBase(DynamicViscosityUnits.MillipascalSeconds);
    }

    /** */
    public get MicropascalSeconds(): number {
        if(this.micropascalsecondsLazy !== null){
            return this.micropascalsecondsLazy;
        }
        return this.micropascalsecondsLazy = this.convertFromBase(DynamicViscosityUnits.MicropascalSeconds);
    }

    /** */
    public get Centipoise(): number {
        if(this.centipoiseLazy !== null){
            return this.centipoiseLazy;
        }
        return this.centipoiseLazy = this.convertFromBase(DynamicViscosityUnits.Centipoise);
    }

    /**
     * Create a new DynamicViscosity instance from a NewtonSecondsPerMeterSquared
     *
     * @param value The unit as NewtonSecondsPerMeterSquared to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    public static FromNewtonSecondsPerMeterSquared(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.NewtonSecondsPerMeterSquared);
    }

    /**
     * Create a new DynamicViscosity instance from a PascalSeconds
     *
     * @param value The unit as PascalSeconds to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    public static FromPascalSeconds(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.PascalSeconds);
    }

    /**
     * Create a new DynamicViscosity instance from a Poise
     *
     * @param value The unit as Poise to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    public static FromPoise(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.Poise);
    }

    /**
     * Create a new DynamicViscosity instance from a Reyns
     *
     * @param value The unit as Reyns to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    public static FromReyns(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.Reyns);
    }

    /**
     * Create a new DynamicViscosity instance from a PoundsForceSecondPerSquareInch
     *
     * @param value The unit as PoundsForceSecondPerSquareInch to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    public static FromPoundsForceSecondPerSquareInch(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.PoundsForceSecondPerSquareInch);
    }

    /**
     * Create a new DynamicViscosity instance from a PoundsForceSecondPerSquareFoot
     *
     * @param value The unit as PoundsForceSecondPerSquareFoot to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    public static FromPoundsForceSecondPerSquareFoot(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.PoundsForceSecondPerSquareFoot);
    }

    /**
     * Create a new DynamicViscosity instance from a PoundsPerFootSecond
     *
     * @param value The unit as PoundsPerFootSecond to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    public static FromPoundsPerFootSecond(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.PoundsPerFootSecond);
    }

    /**
     * Create a new DynamicViscosity instance from a MillipascalSeconds
     *
     * @param value The unit as MillipascalSeconds to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    public static FromMillipascalSeconds(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.MillipascalSeconds);
    }

    /**
     * Create a new DynamicViscosity instance from a MicropascalSeconds
     *
     * @param value The unit as MicropascalSeconds to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    public static FromMicropascalSeconds(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.MicropascalSeconds);
    }

    /**
     * Create a new DynamicViscosity instance from a Centipoise
     *
     * @param value The unit as Centipoise to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    public static FromCentipoise(value: number): DynamicViscosity {
        return new DynamicViscosity(value, DynamicViscosityUnits.Centipoise);
    }

    /**
     * Convert DynamicViscosity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: DynamicViscosityUnits): number {
        switch (toUnit) {
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared: return this.NewtonSecondsPerMeterSquared;
            case DynamicViscosityUnits.PascalSeconds: return this.PascalSeconds;
            case DynamicViscosityUnits.Poise: return this.Poise;
            case DynamicViscosityUnits.Reyns: return this.Reyns;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch: return this.PoundsForceSecondPerSquareInch;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot: return this.PoundsForceSecondPerSquareFoot;
            case DynamicViscosityUnits.PoundsPerFootSecond: return this.PoundsPerFootSecond;
            case DynamicViscosityUnits.MillipascalSeconds: return this.MillipascalSeconds;
            case DynamicViscosityUnits.MicropascalSeconds: return this.MicropascalSeconds;
            case DynamicViscosityUnits.Centipoise: return this.Centipoise;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: DynamicViscosityUnits): number {
        switch (toUnit) {
                
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                return this.value;
            case DynamicViscosityUnits.PascalSeconds:
                return this.value;
            case DynamicViscosityUnits.Poise:
                return this.value * 10;
            case DynamicViscosityUnits.Reyns:
                return this.value / 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return this.value / 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return this.value / 4.7880258980335843e1;
            case DynamicViscosityUnits.PoundsPerFootSecond:
                return this.value / 1.4881639;
            case DynamicViscosityUnits.MillipascalSeconds:
                return (this.value) / 0.001;
            case DynamicViscosityUnits.MicropascalSeconds:
                return (this.value) / 0.000001;
            case DynamicViscosityUnits.Centipoise:
                return (this.value * 10) / 0.01;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: DynamicViscosityUnits): number {
        switch (fromUnit) {
                
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                return value;
            case DynamicViscosityUnits.PascalSeconds:
                return value;
            case DynamicViscosityUnits.Poise:
                return value / 10;
            case DynamicViscosityUnits.Reyns:
                return value * 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return value * 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return value * 4.7880258980335843e1;
            case DynamicViscosityUnits.PoundsPerFootSecond:
                return value * 1.4881639;
            case DynamicViscosityUnits.MillipascalSeconds:
                return (value) * 0.001;
            case DynamicViscosityUnits.MicropascalSeconds:
                return (value) * 0.000001;
            case DynamicViscosityUnits.Centipoise:
                return (value / 10) * 0.01;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the DynamicViscosity to string.
     * Note! the default format for DynamicViscosity is NewtonSecondsPerMeterSquared.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the DynamicViscosity.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the DynamicViscosity.
     */
    public toString(unit: DynamicViscosityUnits = DynamicViscosityUnits.NewtonSecondsPerMeterSquared, fractionalDigits?: number): string {

        switch (unit) {
            
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                return super.truncateFractionDigits(this.NewtonSecondsPerMeterSquared, fractionalDigits) + ` Ns/m²`;
            case DynamicViscosityUnits.PascalSeconds:
                return super.truncateFractionDigits(this.PascalSeconds, fractionalDigits) + ` Pa·s`;
            case DynamicViscosityUnits.Poise:
                return super.truncateFractionDigits(this.Poise, fractionalDigits) + ` P`;
            case DynamicViscosityUnits.Reyns:
                return super.truncateFractionDigits(this.Reyns, fractionalDigits) + ` reyn`;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return super.truncateFractionDigits(this.PoundsForceSecondPerSquareInch, fractionalDigits) + ` lbf·s/in²`;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return super.truncateFractionDigits(this.PoundsForceSecondPerSquareFoot, fractionalDigits) + ` lbf·s/ft²`;
            case DynamicViscosityUnits.PoundsPerFootSecond:
                return super.truncateFractionDigits(this.PoundsPerFootSecond, fractionalDigits) + ` lb/ft·s`;
            case DynamicViscosityUnits.MillipascalSeconds:
                return super.truncateFractionDigits(this.MillipascalSeconds, fractionalDigits) + ` mPa·s`;
            case DynamicViscosityUnits.MicropascalSeconds:
                return super.truncateFractionDigits(this.MicropascalSeconds, fractionalDigits) + ` μPa·s`;
            case DynamicViscosityUnits.Centipoise:
                return super.truncateFractionDigits(this.Centipoise, fractionalDigits) + ` cP`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get DynamicViscosity unit abbreviation.
     * Note! the default abbreviation for DynamicViscosity is NewtonSecondsPerMeterSquared.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the DynamicViscosity.
     * @returns The abbreviation string of DynamicViscosity.
     */
    public getUnitAbbreviation(unitAbbreviation: DynamicViscosityUnits = DynamicViscosityUnits.NewtonSecondsPerMeterSquared): string {

        switch (unitAbbreviation) {
            
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                return `Ns/m²`;
            case DynamicViscosityUnits.PascalSeconds:
                return `Pa·s`;
            case DynamicViscosityUnits.Poise:
                return `P`;
            case DynamicViscosityUnits.Reyns:
                return `reyn`;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return `lbf·s/in²`;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return `lbf·s/ft²`;
            case DynamicViscosityUnits.PoundsPerFootSecond:
                return `lb/ft·s`;
            case DynamicViscosityUnits.MillipascalSeconds:
                return `mPa·s`;
            case DynamicViscosityUnits.MicropascalSeconds:
                return `μPa·s`;
            case DynamicViscosityUnits.Centipoise:
                return `cP`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given DynamicViscosity are equals to the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns True if the given DynamicViscosity are equal to the current DynamicViscosity.
     */
    public equals(dynamicViscosity: DynamicViscosity): boolean {
        return super.internalEquals(this.value, dynamicViscosity.BaseValue);
    }

    /**
     * Compare the given DynamicViscosity against the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns 0 if they are equal, -1 if the current DynamicViscosity is less then other, 1 if the current DynamicViscosity is greater then other.
     */
    public compareTo(dynamicViscosity: DynamicViscosity): number {
        return super.internalCompareTo(this.value, dynamicViscosity.BaseValue);
    }

    /**
     * Add the given DynamicViscosity with the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns A new DynamicViscosity instance with the results.
     */
    public add(dynamicViscosity: DynamicViscosity): DynamicViscosity {
        return new DynamicViscosity(super.internalAdd(this.value, dynamicViscosity.BaseValue))
    }

    /**
     * Subtract the given DynamicViscosity with the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns A new DynamicViscosity instance with the results.
     */
    public subtract(dynamicViscosity: DynamicViscosity): DynamicViscosity {
        return new DynamicViscosity(super.internalSubtract(this.value, dynamicViscosity.BaseValue))
    }

    /**
     * Multiply the given DynamicViscosity with the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns A new DynamicViscosity instance with the results.
     */
    public multiply(dynamicViscosity: DynamicViscosity): DynamicViscosity {
        return new DynamicViscosity(super.internalMultiply(this.value, dynamicViscosity.BaseValue))
    }

    /**
     * Divide the given DynamicViscosity with the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns A new DynamicViscosity instance with the results.
     */
    public divide(dynamicViscosity: DynamicViscosity): DynamicViscosity {
        return new DynamicViscosity(super.internalDivide(this.value, dynamicViscosity.BaseValue))
    }

    /**
     * Modulo the given DynamicViscosity with the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns A new DynamicViscosity instance with the results.
     */
    public modulo(dynamicViscosity: DynamicViscosity): DynamicViscosity {
        return new DynamicViscosity(super.internalModulo(this.value, dynamicViscosity.BaseValue))
    }

    /**
     * Pow the given DynamicViscosity with the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns A new DynamicViscosity instance with the results.
     */
    public pow(dynamicViscosity: DynamicViscosity): DynamicViscosity {
        return new DynamicViscosity(super.internalPow(this.value, dynamicViscosity.BaseValue))
    }
}
