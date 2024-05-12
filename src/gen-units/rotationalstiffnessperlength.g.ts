import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a RotationalStiffnessPerLength */
export interface RotationalStiffnessPerLengthDto {
    /** The value of the RotationalStiffnessPerLength */
    value: number;
    /**  The specific unit that the RotationalStiffnessPerLength value is representing */
    unit: RotationalStiffnessPerLengthUnits;
}

/** RotationalStiffnessPerLengthUnits enumeration */
export enum RotationalStiffnessPerLengthUnits {
    /** */
    NewtonMetersPerRadianPerMeter = "NewtonMeterPerRadianPerMeter",
    /** */
    PoundForceFeetPerDegreesPerFeet = "PoundForceFootPerDegreesPerFoot",
    /** */
    KilopoundForceFeetPerDegreesPerFeet = "KilopoundForceFootPerDegreesPerFoot",
    /** */
    KilonewtonMetersPerRadianPerMeter = "KilonewtonMeterPerRadianPerMeter",
    /** */
    MeganewtonMetersPerRadianPerMeter = "MeganewtonMeterPerRadianPerMeter"
}

/** https://en.wikipedia.org/wiki/Stiffness#Rotational_stiffness */
export class RotationalStiffnessPerLength extends BaseUnit {
    protected value: number;
    private newtonmetersperradianpermeterLazy: number | null = null;
    private poundforcefeetperdegreesperfeetLazy: number | null = null;
    private kilopoundforcefeetperdegreesperfeetLazy: number | null = null;
    private kilonewtonmetersperradianpermeterLazy: number | null = null;
    private meganewtonmetersperradianpermeterLazy: number | null = null;

    /**
     * Create a new RotationalStiffnessPerLength.
     * @param value The value.
     * @param fromUnit The ‘RotationalStiffnessPerLength’ unit to create from.
     * The default unit is NewtonMetersPerRadianPerMeter
     */
    public constructor(value: number, fromUnit: RotationalStiffnessPerLengthUnits = RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RotationalStiffnessPerLength is NewtonMetersPerRadianPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get getBaseUnit(): RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter {
        return RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter
    }

    /** */
    public get NewtonMetersPerRadianPerMeter(): number {
        if(this.newtonmetersperradianpermeterLazy !== null){
            return this.newtonmetersperradianpermeterLazy;
        }
        return this.newtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }

    /** */
    public get PoundForceFeetPerDegreesPerFeet(): number {
        if(this.poundforcefeetperdegreesperfeetLazy !== null){
            return this.poundforcefeetperdegreesperfeetLazy;
        }
        return this.poundforcefeetperdegreesperfeetLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.PoundForceFeetPerDegreesPerFeet);
    }

    /** */
    public get KilopoundForceFeetPerDegreesPerFeet(): number {
        if(this.kilopoundforcefeetperdegreesperfeetLazy !== null){
            return this.kilopoundforcefeetperdegreesperfeetLazy;
        }
        return this.kilopoundforcefeetperdegreesperfeetLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.KilopoundForceFeetPerDegreesPerFeet);
    }

    /** */
    public get KilonewtonMetersPerRadianPerMeter(): number {
        if(this.kilonewtonmetersperradianpermeterLazy !== null){
            return this.kilonewtonmetersperradianpermeterLazy;
        }
        return this.kilonewtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter);
    }

    /** */
    public get MeganewtonMetersPerRadianPerMeter(): number {
        if(this.meganewtonmetersperradianpermeterLazy !== null){
            return this.meganewtonmetersperradianpermeterLazy;
        }
        return this.meganewtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter);
    }

    /**
     * Create a new RotationalStiffnessPerLength instance from a NewtonMetersPerRadianPerMeter
     *
     * @param value The unit as NewtonMetersPerRadianPerMeter to create a new RotationalStiffnessPerLength from.
     * @returns The new RotationalStiffnessPerLength instance.
     */
    public static FromNewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }

    /**
     * Create a new RotationalStiffnessPerLength instance from a PoundForceFeetPerDegreesPerFeet
     *
     * @param value The unit as PoundForceFeetPerDegreesPerFeet to create a new RotationalStiffnessPerLength from.
     * @returns The new RotationalStiffnessPerLength instance.
     */
    public static FromPoundForceFeetPerDegreesPerFeet(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.PoundForceFeetPerDegreesPerFeet);
    }

    /**
     * Create a new RotationalStiffnessPerLength instance from a KilopoundForceFeetPerDegreesPerFeet
     *
     * @param value The unit as KilopoundForceFeetPerDegreesPerFeet to create a new RotationalStiffnessPerLength from.
     * @returns The new RotationalStiffnessPerLength instance.
     */
    public static FromKilopoundForceFeetPerDegreesPerFeet(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.KilopoundForceFeetPerDegreesPerFeet);
    }

    /**
     * Create a new RotationalStiffnessPerLength instance from a KilonewtonMetersPerRadianPerMeter
     *
     * @param value The unit as KilonewtonMetersPerRadianPerMeter to create a new RotationalStiffnessPerLength from.
     * @returns The new RotationalStiffnessPerLength instance.
     */
    public static FromKilonewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter);
    }

    /**
     * Create a new RotationalStiffnessPerLength instance from a MeganewtonMetersPerRadianPerMeter
     *
     * @param value The unit as MeganewtonMetersPerRadianPerMeter to create a new RotationalStiffnessPerLength from.
     * @returns The new RotationalStiffnessPerLength instance.
     */
    public static FromMeganewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter);
    }

    /**
     * Gets the base unit enumeration associated with RotationalStiffnessPerLength
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof RotationalStiffnessPerLengthUnits {
        return RotationalStiffnessPerLengthUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter {
        return RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter;
    }

    /**
     * Create API DTO represent a RotationalStiffnessPerLength unit.
     * @param holdInUnit The specific RotationalStiffnessPerLength unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: RotationalStiffnessPerLengthUnits = RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter): RotationalStiffnessPerLengthDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a RotationalStiffnessPerLength unit from an API DTO representation.
     * @param dtoRotationalStiffnessPerLength The RotationalStiffnessPerLength API DTO representation
     */
    public static FromDto(dtoRotationalStiffnessPerLength: RotationalStiffnessPerLengthDto): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(dtoRotationalStiffnessPerLength.value, dtoRotationalStiffnessPerLength.unit);
    }

    /**
     * Convert RotationalStiffnessPerLength to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: RotationalStiffnessPerLengthUnits): number {
        switch (toUnit) {
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter: return this.NewtonMetersPerRadianPerMeter;
            case RotationalStiffnessPerLengthUnits.PoundForceFeetPerDegreesPerFeet: return this.PoundForceFeetPerDegreesPerFeet;
            case RotationalStiffnessPerLengthUnits.KilopoundForceFeetPerDegreesPerFeet: return this.KilopoundForceFeetPerDegreesPerFeet;
            case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter: return this.KilonewtonMetersPerRadianPerMeter;
            case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter: return this.MeganewtonMetersPerRadianPerMeter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: RotationalStiffnessPerLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter: return this.value;
                case RotationalStiffnessPerLengthUnits.PoundForceFeetPerDegreesPerFeet: return super.internalDivide(this.value, 254.864324570);
                case RotationalStiffnessPerLengthUnits.KilopoundForceFeetPerDegreesPerFeet: return super.internalDivide(this.value, 254864.324570);
                case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter: return super.internalDivide(this.value, 1000);
                case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter: return super.internalDivide(this.value, 1000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter: return this.value;
            case RotationalStiffnessPerLengthUnits.PoundForceFeetPerDegreesPerFeet: return this.value / 254.864324570;
            case RotationalStiffnessPerLengthUnits.KilopoundForceFeetPerDegreesPerFeet: return this.value / 254864.324570;
            case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter: return (this.value) / 1000;
            case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter: return (this.value) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: RotationalStiffnessPerLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter: return value;
                case RotationalStiffnessPerLengthUnits.PoundForceFeetPerDegreesPerFeet: return super.internalMultiply(value, 254.864324570);
                case RotationalStiffnessPerLengthUnits.KilopoundForceFeetPerDegreesPerFeet: return super.internalMultiply(value, 254864.324570);
                case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter: return super.internalMultiply(value, 1000);
                case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter: return super.internalMultiply(value, 1000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter: return value;
            case RotationalStiffnessPerLengthUnits.PoundForceFeetPerDegreesPerFeet: return value * 254.864324570;
            case RotationalStiffnessPerLengthUnits.KilopoundForceFeetPerDegreesPerFeet: return value * 254864.324570;
            case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter: return (value) * 1000;
            case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter: return (value) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the RotationalStiffnessPerLength to string.
     * Note! the default format for RotationalStiffnessPerLength is NewtonMetersPerRadianPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RotationalStiffnessPerLength.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the RotationalStiffnessPerLength.
     */
    public toString(unit: RotationalStiffnessPerLengthUnits = RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter, fractionalDigits?: number): string {

        switch (unit) {
            
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter:
                return super.truncateFractionDigits(this.NewtonMetersPerRadianPerMeter, fractionalDigits) + ` N·m/rad/m`;
            case RotationalStiffnessPerLengthUnits.PoundForceFeetPerDegreesPerFeet:
                return super.truncateFractionDigits(this.PoundForceFeetPerDegreesPerFeet, fractionalDigits) + ` lbf·ft/deg/ft`;
            case RotationalStiffnessPerLengthUnits.KilopoundForceFeetPerDegreesPerFeet:
                return super.truncateFractionDigits(this.KilopoundForceFeetPerDegreesPerFeet, fractionalDigits) + ` kipf·ft/°/ft`;
            case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter:
                return super.truncateFractionDigits(this.KilonewtonMetersPerRadianPerMeter, fractionalDigits) + ` kN·m/rad/m`;
            case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter:
                return super.truncateFractionDigits(this.MeganewtonMetersPerRadianPerMeter, fractionalDigits) + ` MN·m/rad/m`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RotationalStiffnessPerLength unit abbreviation.
     * Note! the default abbreviation for RotationalStiffnessPerLength is NewtonMetersPerRadianPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RotationalStiffnessPerLength.
     * @returns The abbreviation string of RotationalStiffnessPerLength.
     */
    public getUnitAbbreviation(unitAbbreviation: RotationalStiffnessPerLengthUnits = RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter): string {

        switch (unitAbbreviation) {
            
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter:
                return `N·m/rad/m`;
            case RotationalStiffnessPerLengthUnits.PoundForceFeetPerDegreesPerFeet:
                return `lbf·ft/deg/ft`;
            case RotationalStiffnessPerLengthUnits.KilopoundForceFeetPerDegreesPerFeet:
                return `kipf·ft/°/ft`;
            case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter:
                return `kN·m/rad/m`;
            case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter:
                return `MN·m/rad/m`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given RotationalStiffnessPerLength are equals to the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns True if the given RotationalStiffnessPerLength are equal to the current RotationalStiffnessPerLength.
     */
    public equals(rotationalStiffnessPerLength: RotationalStiffnessPerLength): boolean {
        return super.internalEquals(this.value, rotationalStiffnessPerLength.BaseValue);
    }

    /**
     * Compare the given RotationalStiffnessPerLength against the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns 0 if they are equal, -1 if the current RotationalStiffnessPerLength is less then other, 1 if the current RotationalStiffnessPerLength is greater then other.
     */
    public compareTo(rotationalStiffnessPerLength: RotationalStiffnessPerLength): number {
        return super.internalCompareTo(this.value, rotationalStiffnessPerLength.BaseValue);
    }

    /**
     * Add the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    public add(rotationalStiffnessPerLength: RotationalStiffnessPerLength): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(super.internalAdd(this.value, rotationalStiffnessPerLength.BaseValue))
    }

    /**
     * Subtract the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    public subtract(rotationalStiffnessPerLength: RotationalStiffnessPerLength): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(super.internalSubtract(this.value, rotationalStiffnessPerLength.BaseValue))
    }

    /**
     * Multiply the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    public multiply(rotationalStiffnessPerLength: RotationalStiffnessPerLength): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(super.internalMultiply(this.value, rotationalStiffnessPerLength.BaseValue))
    }

    /**
     * Divide the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    public divide(rotationalStiffnessPerLength: RotationalStiffnessPerLength): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(super.internalDivide(this.value, rotationalStiffnessPerLength.BaseValue))
    }

    /**
     * Modulo the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    public modulo(rotationalStiffnessPerLength: RotationalStiffnessPerLength): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(super.internalModulo(this.value, rotationalStiffnessPerLength.BaseValue))
    }

    /**
     * Pow the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    public pow(rotationalStiffnessPerLength: RotationalStiffnessPerLength): RotationalStiffnessPerLength {
        return new RotationalStiffnessPerLength(super.internalPow(this.value, rotationalStiffnessPerLength.BaseValue))
    }
}
