import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a ElectricPotentialDc */
export interface ElectricPotentialDcDto {
    /** The value of the ElectricPotentialDc */
    value: number;
    /**  The specific unit that the ElectricPotentialDc value is representing */
    unit: ElectricPotentialDcUnits;
}

/** ElectricPotentialDcUnits enumeration */
export enum ElectricPotentialDcUnits {
    /** */
    VoltsDc = "VoltDc",
    /** */
    MicrovoltsDc = "MicrovoltDc",
    /** */
    MillivoltsDc = "MillivoltDc",
    /** */
    KilovoltsDc = "KilovoltDc",
    /** */
    MegavoltsDc = "MegavoltDc"
}

/** The Electric Potential of a system known to use Direct Current. */
export class ElectricPotentialDc extends BaseUnit {
    protected value: number;
    private voltsdcLazy: number | null = null;
    private microvoltsdcLazy: number | null = null;
    private millivoltsdcLazy: number | null = null;
    private kilovoltsdcLazy: number | null = null;
    private megavoltsdcLazy: number | null = null;

    /**
     * Create a new ElectricPotentialDc.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotentialDc’ unit to create from.
     * The default unit is VoltsDc
     */
    public constructor(value: number, fromUnit: ElectricPotentialDcUnits = ElectricPotentialDcUnits.VoltsDc) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricPotentialDc is VoltsDc.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricPotentialDcUnits.VoltsDc {
        return ElectricPotentialDcUnits.VoltsDc
    }

    /** */
    public get VoltsDc(): number {
        if(this.voltsdcLazy !== null){
            return this.voltsdcLazy;
        }
        return this.voltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.VoltsDc);
    }

    /** */
    public get MicrovoltsDc(): number {
        if(this.microvoltsdcLazy !== null){
            return this.microvoltsdcLazy;
        }
        return this.microvoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MicrovoltsDc);
    }

    /** */
    public get MillivoltsDc(): number {
        if(this.millivoltsdcLazy !== null){
            return this.millivoltsdcLazy;
        }
        return this.millivoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MillivoltsDc);
    }

    /** */
    public get KilovoltsDc(): number {
        if(this.kilovoltsdcLazy !== null){
            return this.kilovoltsdcLazy;
        }
        return this.kilovoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.KilovoltsDc);
    }

    /** */
    public get MegavoltsDc(): number {
        if(this.megavoltsdcLazy !== null){
            return this.megavoltsdcLazy;
        }
        return this.megavoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MegavoltsDc);
    }

    /**
     * Create a new ElectricPotentialDc instance from a VoltsDc
     *
     * @param value The unit as VoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    public static FromVoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.VoltsDc);
    }

    /**
     * Create a new ElectricPotentialDc instance from a MicrovoltsDc
     *
     * @param value The unit as MicrovoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    public static FromMicrovoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MicrovoltsDc);
    }

    /**
     * Create a new ElectricPotentialDc instance from a MillivoltsDc
     *
     * @param value The unit as MillivoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    public static FromMillivoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MillivoltsDc);
    }

    /**
     * Create a new ElectricPotentialDc instance from a KilovoltsDc
     *
     * @param value The unit as KilovoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    public static FromKilovoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.KilovoltsDc);
    }

    /**
     * Create a new ElectricPotentialDc instance from a MegavoltsDc
     *
     * @param value The unit as MegavoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    public static FromMegavoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MegavoltsDc);
    }

    /**
     * Gets the base unit enumeration associated with ElectricPotentialDc
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricPotentialDcUnits {
        return ElectricPotentialDcUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricPotentialDcUnits.VoltsDc {
        return ElectricPotentialDcUnits.VoltsDc;
    }

    /**
     * Create API DTO represent a ElectricPotentialDc unit.
     * @param holdInUnit The specific ElectricPotentialDc unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricPotentialDcUnits = ElectricPotentialDcUnits.VoltsDc): ElectricPotentialDcDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricPotentialDc unit from an API DTO representation.
     * @param dtoElectricPotentialDc The ElectricPotentialDc API DTO representation
     */
    public static FromDto(dtoElectricPotentialDc: ElectricPotentialDcDto): ElectricPotentialDc {
        return new ElectricPotentialDc(dtoElectricPotentialDc.value, dtoElectricPotentialDc.unit);
    }

    /**
     * Convert ElectricPotentialDc to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricPotentialDcUnits): number {
        switch (toUnit) {
            case ElectricPotentialDcUnits.VoltsDc: return this.VoltsDc;
            case ElectricPotentialDcUnits.MicrovoltsDc: return this.MicrovoltsDc;
            case ElectricPotentialDcUnits.MillivoltsDc: return this.MillivoltsDc;
            case ElectricPotentialDcUnits.KilovoltsDc: return this.KilovoltsDc;
            case ElectricPotentialDcUnits.MegavoltsDc: return this.MegavoltsDc;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricPotentialDcUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricPotentialDcUnits.VoltsDc: return this.value;
                case ElectricPotentialDcUnits.MicrovoltsDc: return super.internalDivide(this.value, 0.000001);
                case ElectricPotentialDcUnits.MillivoltsDc: return super.internalDivide(this.value, 0.001);
                case ElectricPotentialDcUnits.KilovoltsDc: return super.internalDivide(this.value, 1000);
                case ElectricPotentialDcUnits.MegavoltsDc: return super.internalDivide(this.value, 1000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricPotentialDcUnits.VoltsDc: return this.value;
            case ElectricPotentialDcUnits.MicrovoltsDc: return (this.value) / 0.000001;
            case ElectricPotentialDcUnits.MillivoltsDc: return (this.value) / 0.001;
            case ElectricPotentialDcUnits.KilovoltsDc: return (this.value) / 1000;
            case ElectricPotentialDcUnits.MegavoltsDc: return (this.value) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricPotentialDcUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricPotentialDcUnits.VoltsDc: return value;
                case ElectricPotentialDcUnits.MicrovoltsDc: return super.internalMultiply(value, 0.000001);
                case ElectricPotentialDcUnits.MillivoltsDc: return super.internalMultiply(value, 0.001);
                case ElectricPotentialDcUnits.KilovoltsDc: return super.internalMultiply(value, 1000);
                case ElectricPotentialDcUnits.MegavoltsDc: return super.internalMultiply(value, 1000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricPotentialDcUnits.VoltsDc: return value;
            case ElectricPotentialDcUnits.MicrovoltsDc: return (value) * 0.000001;
            case ElectricPotentialDcUnits.MillivoltsDc: return (value) * 0.001;
            case ElectricPotentialDcUnits.KilovoltsDc: return (value) * 1000;
            case ElectricPotentialDcUnits.MegavoltsDc: return (value) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricPotentialDc to string.
     * Note! the default format for ElectricPotentialDc is VoltsDc.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricPotentialDc.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the ElectricPotentialDc.
     */
    public toString(unit: ElectricPotentialDcUnits = ElectricPotentialDcUnits.VoltsDc, fractionalDigits?: number): string {

        switch (unit) {
            
            case ElectricPotentialDcUnits.VoltsDc:
                return super.truncateFractionDigits(this.VoltsDc, fractionalDigits) + ` Vdc`;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return super.truncateFractionDigits(this.MicrovoltsDc, fractionalDigits) + ` μVdc`;
            case ElectricPotentialDcUnits.MillivoltsDc:
                return super.truncateFractionDigits(this.MillivoltsDc, fractionalDigits) + ` mVdc`;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return super.truncateFractionDigits(this.KilovoltsDc, fractionalDigits) + ` kVdc`;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return super.truncateFractionDigits(this.MegavoltsDc, fractionalDigits) + ` MVdc`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricPotentialDc unit abbreviation.
     * Note! the default abbreviation for ElectricPotentialDc is VoltsDc.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricPotentialDc.
     * @returns The abbreviation string of ElectricPotentialDc.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricPotentialDcUnits = ElectricPotentialDcUnits.VoltsDc): string {

        switch (unitAbbreviation) {
            
            case ElectricPotentialDcUnits.VoltsDc:
                return `Vdc`;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return `μVdc`;
            case ElectricPotentialDcUnits.MillivoltsDc:
                return `mVdc`;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return `kVdc`;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return `MVdc`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricPotentialDc are equals to the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns True if the given ElectricPotentialDc are equal to the current ElectricPotentialDc.
     */
    public equals(electricPotentialDc: ElectricPotentialDc): boolean {
        return super.internalEquals(this.value, electricPotentialDc.BaseValue);
    }

    /**
     * Compare the given ElectricPotentialDc against the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns 0 if they are equal, -1 if the current ElectricPotentialDc is less then other, 1 if the current ElectricPotentialDc is greater then other.
     */
    public compareTo(electricPotentialDc: ElectricPotentialDc): number {
        return super.internalCompareTo(this.value, electricPotentialDc.BaseValue);
    }

    /**
     * Add the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    public add(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc {
        return new ElectricPotentialDc(super.internalAdd(this.value, electricPotentialDc.BaseValue))
    }

    /**
     * Subtract the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    public subtract(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc {
        return new ElectricPotentialDc(super.internalSubtract(this.value, electricPotentialDc.BaseValue))
    }

    /**
     * Multiply the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    public multiply(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc {
        return new ElectricPotentialDc(super.internalMultiply(this.value, electricPotentialDc.BaseValue))
    }

    /**
     * Divide the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    public divide(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc {
        return new ElectricPotentialDc(super.internalDivide(this.value, electricPotentialDc.BaseValue))
    }

    /**
     * Modulo the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    public modulo(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc {
        return new ElectricPotentialDc(super.internalModulo(this.value, electricPotentialDc.BaseValue))
    }

    /**
     * Pow the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    public pow(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc {
        return new ElectricPotentialDc(super.internalPow(this.value, electricPotentialDc.BaseValue))
    }
}
