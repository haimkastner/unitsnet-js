import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a StandardVolumeFlow */
export interface StandardVolumeFlowDto {
    /** The value of the StandardVolumeFlow */
    value: number;
    /**  The specific unit that the StandardVolumeFlow value is representing */
    unit: StandardVolumeFlowUnits;
}

/** StandardVolumeFlowUnits enumeration */
export enum StandardVolumeFlowUnits {
    /** */
    StandardCubicMetersPerSecond = "StandardCubicMeterPerSecond",
    /** */
    StandardCubicMetersPerMinute = "StandardCubicMeterPerMinute",
    /** */
    StandardCubicMetersPerHour = "StandardCubicMeterPerHour",
    /** */
    StandardCubicMetersPerDay = "StandardCubicMeterPerDay",
    /** */
    StandardCubicCentimetersPerMinute = "StandardCubicCentimeterPerMinute",
    /** */
    StandardLitersPerMinute = "StandardLiterPerMinute",
    /** */
    StandardCubicFeetPerSecond = "StandardCubicFootPerSecond",
    /** */
    StandardCubicFeetPerMinute = "StandardCubicFootPerMinute",
    /** */
    StandardCubicFeetPerHour = "StandardCubicFootPerHour"
}

/** The molar flow rate of a gas corrected to standardized conditions of temperature and pressure thus representing a fixed number of moles of gas regardless of composition and actual flow conditions. */
export class StandardVolumeFlow extends BaseUnit {
    protected value: number;
    private standardcubicmeterspersecondLazy: number | null = null;
    private standardcubicmetersperminuteLazy: number | null = null;
    private standardcubicmetersperhourLazy: number | null = null;
    private standardcubicmetersperdayLazy: number | null = null;
    private standardcubiccentimetersperminuteLazy: number | null = null;
    private standardlitersperminuteLazy: number | null = null;
    private standardcubicfeetpersecondLazy: number | null = null;
    private standardcubicfeetperminuteLazy: number | null = null;
    private standardcubicfeetperhourLazy: number | null = null;

    /**
     * Create a new StandardVolumeFlow.
     * @param value The value.
     * @param fromUnit The ‘StandardVolumeFlow’ unit to create from.
     * The default unit is StandardCubicMetersPerSecond
     */
    public constructor(value: number, fromUnit: StandardVolumeFlowUnits = StandardVolumeFlowUnits.StandardCubicMetersPerSecond) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of StandardVolumeFlow is StandardCubicMetersPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get StandardCubicMetersPerSecond(): number {
        if(this.standardcubicmeterspersecondLazy !== null){
            return this.standardcubicmeterspersecondLazy;
        }
        return this.standardcubicmeterspersecondLazy = this.convertFromBase(StandardVolumeFlowUnits.StandardCubicMetersPerSecond);
    }

    /** */
    public get StandardCubicMetersPerMinute(): number {
        if(this.standardcubicmetersperminuteLazy !== null){
            return this.standardcubicmetersperminuteLazy;
        }
        return this.standardcubicmetersperminuteLazy = this.convertFromBase(StandardVolumeFlowUnits.StandardCubicMetersPerMinute);
    }

    /** */
    public get StandardCubicMetersPerHour(): number {
        if(this.standardcubicmetersperhourLazy !== null){
            return this.standardcubicmetersperhourLazy;
        }
        return this.standardcubicmetersperhourLazy = this.convertFromBase(StandardVolumeFlowUnits.StandardCubicMetersPerHour);
    }

    /** */
    public get StandardCubicMetersPerDay(): number {
        if(this.standardcubicmetersperdayLazy !== null){
            return this.standardcubicmetersperdayLazy;
        }
        return this.standardcubicmetersperdayLazy = this.convertFromBase(StandardVolumeFlowUnits.StandardCubicMetersPerDay);
    }

    /** */
    public get StandardCubicCentimetersPerMinute(): number {
        if(this.standardcubiccentimetersperminuteLazy !== null){
            return this.standardcubiccentimetersperminuteLazy;
        }
        return this.standardcubiccentimetersperminuteLazy = this.convertFromBase(StandardVolumeFlowUnits.StandardCubicCentimetersPerMinute);
    }

    /** */
    public get StandardLitersPerMinute(): number {
        if(this.standardlitersperminuteLazy !== null){
            return this.standardlitersperminuteLazy;
        }
        return this.standardlitersperminuteLazy = this.convertFromBase(StandardVolumeFlowUnits.StandardLitersPerMinute);
    }

    /** */
    public get StandardCubicFeetPerSecond(): number {
        if(this.standardcubicfeetpersecondLazy !== null){
            return this.standardcubicfeetpersecondLazy;
        }
        return this.standardcubicfeetpersecondLazy = this.convertFromBase(StandardVolumeFlowUnits.StandardCubicFeetPerSecond);
    }

    /** */
    public get StandardCubicFeetPerMinute(): number {
        if(this.standardcubicfeetperminuteLazy !== null){
            return this.standardcubicfeetperminuteLazy;
        }
        return this.standardcubicfeetperminuteLazy = this.convertFromBase(StandardVolumeFlowUnits.StandardCubicFeetPerMinute);
    }

    /** */
    public get StandardCubicFeetPerHour(): number {
        if(this.standardcubicfeetperhourLazy !== null){
            return this.standardcubicfeetperhourLazy;
        }
        return this.standardcubicfeetperhourLazy = this.convertFromBase(StandardVolumeFlowUnits.StandardCubicFeetPerHour);
    }

    /**
     * Create a new StandardVolumeFlow instance from a StandardCubicMetersPerSecond
     *
     * @param value The unit as StandardCubicMetersPerSecond to create a new StandardVolumeFlow from.
     * @returns The new StandardVolumeFlow instance.
     */
    public static FromStandardCubicMetersPerSecond(value: number): StandardVolumeFlow {
        return new StandardVolumeFlow(value, StandardVolumeFlowUnits.StandardCubicMetersPerSecond);
    }

    /**
     * Create a new StandardVolumeFlow instance from a StandardCubicMetersPerMinute
     *
     * @param value The unit as StandardCubicMetersPerMinute to create a new StandardVolumeFlow from.
     * @returns The new StandardVolumeFlow instance.
     */
    public static FromStandardCubicMetersPerMinute(value: number): StandardVolumeFlow {
        return new StandardVolumeFlow(value, StandardVolumeFlowUnits.StandardCubicMetersPerMinute);
    }

    /**
     * Create a new StandardVolumeFlow instance from a StandardCubicMetersPerHour
     *
     * @param value The unit as StandardCubicMetersPerHour to create a new StandardVolumeFlow from.
     * @returns The new StandardVolumeFlow instance.
     */
    public static FromStandardCubicMetersPerHour(value: number): StandardVolumeFlow {
        return new StandardVolumeFlow(value, StandardVolumeFlowUnits.StandardCubicMetersPerHour);
    }

    /**
     * Create a new StandardVolumeFlow instance from a StandardCubicMetersPerDay
     *
     * @param value The unit as StandardCubicMetersPerDay to create a new StandardVolumeFlow from.
     * @returns The new StandardVolumeFlow instance.
     */
    public static FromStandardCubicMetersPerDay(value: number): StandardVolumeFlow {
        return new StandardVolumeFlow(value, StandardVolumeFlowUnits.StandardCubicMetersPerDay);
    }

    /**
     * Create a new StandardVolumeFlow instance from a StandardCubicCentimetersPerMinute
     *
     * @param value The unit as StandardCubicCentimetersPerMinute to create a new StandardVolumeFlow from.
     * @returns The new StandardVolumeFlow instance.
     */
    public static FromStandardCubicCentimetersPerMinute(value: number): StandardVolumeFlow {
        return new StandardVolumeFlow(value, StandardVolumeFlowUnits.StandardCubicCentimetersPerMinute);
    }

    /**
     * Create a new StandardVolumeFlow instance from a StandardLitersPerMinute
     *
     * @param value The unit as StandardLitersPerMinute to create a new StandardVolumeFlow from.
     * @returns The new StandardVolumeFlow instance.
     */
    public static FromStandardLitersPerMinute(value: number): StandardVolumeFlow {
        return new StandardVolumeFlow(value, StandardVolumeFlowUnits.StandardLitersPerMinute);
    }

    /**
     * Create a new StandardVolumeFlow instance from a StandardCubicFeetPerSecond
     *
     * @param value The unit as StandardCubicFeetPerSecond to create a new StandardVolumeFlow from.
     * @returns The new StandardVolumeFlow instance.
     */
    public static FromStandardCubicFeetPerSecond(value: number): StandardVolumeFlow {
        return new StandardVolumeFlow(value, StandardVolumeFlowUnits.StandardCubicFeetPerSecond);
    }

    /**
     * Create a new StandardVolumeFlow instance from a StandardCubicFeetPerMinute
     *
     * @param value The unit as StandardCubicFeetPerMinute to create a new StandardVolumeFlow from.
     * @returns The new StandardVolumeFlow instance.
     */
    public static FromStandardCubicFeetPerMinute(value: number): StandardVolumeFlow {
        return new StandardVolumeFlow(value, StandardVolumeFlowUnits.StandardCubicFeetPerMinute);
    }

    /**
     * Create a new StandardVolumeFlow instance from a StandardCubicFeetPerHour
     *
     * @param value The unit as StandardCubicFeetPerHour to create a new StandardVolumeFlow from.
     * @returns The new StandardVolumeFlow instance.
     */
    public static FromStandardCubicFeetPerHour(value: number): StandardVolumeFlow {
        return new StandardVolumeFlow(value, StandardVolumeFlowUnits.StandardCubicFeetPerHour);
    }

    /**
     * Gets the base unit enumeration associated with StandardVolumeFlow
     * @returns The unit enumeration that can be used to interact with this type
     */
    public static getUnitEnum(): typeof StandardVolumeFlowUnits {
        return StandardVolumeFlowUnits;
    }

    /**
     * Create API DTO represent a StandardVolumeFlow unit.
     * @param holdInUnit The specific StandardVolumeFlow unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: StandardVolumeFlowUnits = StandardVolumeFlowUnits.StandardCubicMetersPerSecond): StandardVolumeFlowDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a StandardVolumeFlow unit from an API DTO representation.
     * @param dtoStandardVolumeFlow The StandardVolumeFlow API DTO representation
     */
    public static FromDto(dtoStandardVolumeFlow: StandardVolumeFlowDto): StandardVolumeFlow {
        return new StandardVolumeFlow(dtoStandardVolumeFlow.value, dtoStandardVolumeFlow.unit);
    }

    /**
     * Convert StandardVolumeFlow to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: StandardVolumeFlowUnits): number {
        switch (toUnit) {
            case StandardVolumeFlowUnits.StandardCubicMetersPerSecond: return this.StandardCubicMetersPerSecond;
            case StandardVolumeFlowUnits.StandardCubicMetersPerMinute: return this.StandardCubicMetersPerMinute;
            case StandardVolumeFlowUnits.StandardCubicMetersPerHour: return this.StandardCubicMetersPerHour;
            case StandardVolumeFlowUnits.StandardCubicMetersPerDay: return this.StandardCubicMetersPerDay;
            case StandardVolumeFlowUnits.StandardCubicCentimetersPerMinute: return this.StandardCubicCentimetersPerMinute;
            case StandardVolumeFlowUnits.StandardLitersPerMinute: return this.StandardLitersPerMinute;
            case StandardVolumeFlowUnits.StandardCubicFeetPerSecond: return this.StandardCubicFeetPerSecond;
            case StandardVolumeFlowUnits.StandardCubicFeetPerMinute: return this.StandardCubicFeetPerMinute;
            case StandardVolumeFlowUnits.StandardCubicFeetPerHour: return this.StandardCubicFeetPerHour;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: StandardVolumeFlowUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case StandardVolumeFlowUnits.StandardCubicMetersPerSecond: return this.value;
                case StandardVolumeFlowUnits.StandardCubicMetersPerMinute: return super.internalMultiply(this.value, 60);
                case StandardVolumeFlowUnits.StandardCubicMetersPerHour: return super.internalMultiply(this.value, 3600);
                case StandardVolumeFlowUnits.StandardCubicMetersPerDay: return super.internalMultiply(this.value, 86400);
                case StandardVolumeFlowUnits.StandardCubicCentimetersPerMinute: return super.internalMultiply(this.value, 6e7);
                case StandardVolumeFlowUnits.StandardLitersPerMinute: return super.internalMultiply(this.value, 60000);
                case StandardVolumeFlowUnits.StandardCubicFeetPerSecond: return super.internalMultiply(this.value, 35.314666721);
                case StandardVolumeFlowUnits.StandardCubicFeetPerMinute: return super.internalMultiply(this.value, 2118.88000326);
                case StandardVolumeFlowUnits.StandardCubicFeetPerHour: return super.internalDivide(this.value, 7.8657907199999087346816086183876e-6);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case StandardVolumeFlowUnits.StandardCubicMetersPerSecond: return this.value;
            case StandardVolumeFlowUnits.StandardCubicMetersPerMinute: return this.value * 60;
            case StandardVolumeFlowUnits.StandardCubicMetersPerHour: return this.value * 3600;
            case StandardVolumeFlowUnits.StandardCubicMetersPerDay: return this.value * 86400;
            case StandardVolumeFlowUnits.StandardCubicCentimetersPerMinute: return this.value * 6e7;
            case StandardVolumeFlowUnits.StandardLitersPerMinute: return this.value * 60000;
            case StandardVolumeFlowUnits.StandardCubicFeetPerSecond: return this.value * 35.314666721;
            case StandardVolumeFlowUnits.StandardCubicFeetPerMinute: return this.value * 2118.88000326;
            case StandardVolumeFlowUnits.StandardCubicFeetPerHour: return this.value / 7.8657907199999087346816086183876e-6;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: StandardVolumeFlowUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case StandardVolumeFlowUnits.StandardCubicMetersPerSecond: return value;
                case StandardVolumeFlowUnits.StandardCubicMetersPerMinute: return super.internalDivide(value, 60);
                case StandardVolumeFlowUnits.StandardCubicMetersPerHour: return super.internalDivide(value, 3600);
                case StandardVolumeFlowUnits.StandardCubicMetersPerDay: return super.internalDivide(value, 86400);
                case StandardVolumeFlowUnits.StandardCubicCentimetersPerMinute: return super.internalDivide(value, 6e7);
                case StandardVolumeFlowUnits.StandardLitersPerMinute: return super.internalDivide(value, 60000);
                case StandardVolumeFlowUnits.StandardCubicFeetPerSecond: return super.internalDivide(value, 35.314666721);
                case StandardVolumeFlowUnits.StandardCubicFeetPerMinute: return super.internalDivide(value, 2118.88000326);
                case StandardVolumeFlowUnits.StandardCubicFeetPerHour: return super.internalMultiply(value, 7.8657907199999087346816086183876e-6);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case StandardVolumeFlowUnits.StandardCubicMetersPerSecond: return value;
            case StandardVolumeFlowUnits.StandardCubicMetersPerMinute: return value / 60;
            case StandardVolumeFlowUnits.StandardCubicMetersPerHour: return value / 3600;
            case StandardVolumeFlowUnits.StandardCubicMetersPerDay: return value / 86400;
            case StandardVolumeFlowUnits.StandardCubicCentimetersPerMinute: return value / 6e7;
            case StandardVolumeFlowUnits.StandardLitersPerMinute: return value / 60000;
            case StandardVolumeFlowUnits.StandardCubicFeetPerSecond: return value / 35.314666721;
            case StandardVolumeFlowUnits.StandardCubicFeetPerMinute: return value / 2118.88000326;
            case StandardVolumeFlowUnits.StandardCubicFeetPerHour: return value * 7.8657907199999087346816086183876e-6;
            default: return Number.NaN;
        }
    }

    /**
     * Format the StandardVolumeFlow to string.
     * Note! the default format for StandardVolumeFlow is StandardCubicMetersPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the StandardVolumeFlow.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the StandardVolumeFlow.
     */
    public toString(unit: StandardVolumeFlowUnits = StandardVolumeFlowUnits.StandardCubicMetersPerSecond, fractionalDigits?: number): string {

        switch (unit) {
            
            case StandardVolumeFlowUnits.StandardCubicMetersPerSecond:
                return super.truncateFractionDigits(this.StandardCubicMetersPerSecond, fractionalDigits) + ` Sm³/s`;
            case StandardVolumeFlowUnits.StandardCubicMetersPerMinute:
                return super.truncateFractionDigits(this.StandardCubicMetersPerMinute, fractionalDigits) + ` Sm³/min`;
            case StandardVolumeFlowUnits.StandardCubicMetersPerHour:
                return super.truncateFractionDigits(this.StandardCubicMetersPerHour, fractionalDigits) + ` Sm³/h`;
            case StandardVolumeFlowUnits.StandardCubicMetersPerDay:
                return super.truncateFractionDigits(this.StandardCubicMetersPerDay, fractionalDigits) + ` Sm³/d`;
            case StandardVolumeFlowUnits.StandardCubicCentimetersPerMinute:
                return super.truncateFractionDigits(this.StandardCubicCentimetersPerMinute, fractionalDigits) + ` sccm`;
            case StandardVolumeFlowUnits.StandardLitersPerMinute:
                return super.truncateFractionDigits(this.StandardLitersPerMinute, fractionalDigits) + ` slm`;
            case StandardVolumeFlowUnits.StandardCubicFeetPerSecond:
                return super.truncateFractionDigits(this.StandardCubicFeetPerSecond, fractionalDigits) + ` Sft³/s`;
            case StandardVolumeFlowUnits.StandardCubicFeetPerMinute:
                return super.truncateFractionDigits(this.StandardCubicFeetPerMinute, fractionalDigits) + ` scfm`;
            case StandardVolumeFlowUnits.StandardCubicFeetPerHour:
                return super.truncateFractionDigits(this.StandardCubicFeetPerHour, fractionalDigits) + ` scfh`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get StandardVolumeFlow unit abbreviation.
     * Note! the default abbreviation for StandardVolumeFlow is StandardCubicMetersPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the StandardVolumeFlow.
     * @returns The abbreviation string of StandardVolumeFlow.
     */
    public getUnitAbbreviation(unitAbbreviation: StandardVolumeFlowUnits = StandardVolumeFlowUnits.StandardCubicMetersPerSecond): string {

        switch (unitAbbreviation) {
            
            case StandardVolumeFlowUnits.StandardCubicMetersPerSecond:
                return `Sm³/s`;
            case StandardVolumeFlowUnits.StandardCubicMetersPerMinute:
                return `Sm³/min`;
            case StandardVolumeFlowUnits.StandardCubicMetersPerHour:
                return `Sm³/h`;
            case StandardVolumeFlowUnits.StandardCubicMetersPerDay:
                return `Sm³/d`;
            case StandardVolumeFlowUnits.StandardCubicCentimetersPerMinute:
                return `sccm`;
            case StandardVolumeFlowUnits.StandardLitersPerMinute:
                return `slm`;
            case StandardVolumeFlowUnits.StandardCubicFeetPerSecond:
                return `Sft³/s`;
            case StandardVolumeFlowUnits.StandardCubicFeetPerMinute:
                return `scfm`;
            case StandardVolumeFlowUnits.StandardCubicFeetPerHour:
                return `scfh`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given StandardVolumeFlow are equals to the current StandardVolumeFlow.
     * @param standardVolumeFlow The other StandardVolumeFlow.
     * @returns True if the given StandardVolumeFlow are equal to the current StandardVolumeFlow.
     */
    public equals(standardVolumeFlow: StandardVolumeFlow): boolean {
        return super.internalEquals(this.value, standardVolumeFlow.BaseValue);
    }

    /**
     * Compare the given StandardVolumeFlow against the current StandardVolumeFlow.
     * @param standardVolumeFlow The other StandardVolumeFlow.
     * @returns 0 if they are equal, -1 if the current StandardVolumeFlow is less then other, 1 if the current StandardVolumeFlow is greater then other.
     */
    public compareTo(standardVolumeFlow: StandardVolumeFlow): number {
        return super.internalCompareTo(this.value, standardVolumeFlow.BaseValue);
    }

    /**
     * Add the given StandardVolumeFlow with the current StandardVolumeFlow.
     * @param standardVolumeFlow The other StandardVolumeFlow.
     * @returns A new StandardVolumeFlow instance with the results.
     */
    public add(standardVolumeFlow: StandardVolumeFlow): StandardVolumeFlow {
        return new StandardVolumeFlow(super.internalAdd(this.value, standardVolumeFlow.BaseValue))
    }

    /**
     * Subtract the given StandardVolumeFlow with the current StandardVolumeFlow.
     * @param standardVolumeFlow The other StandardVolumeFlow.
     * @returns A new StandardVolumeFlow instance with the results.
     */
    public subtract(standardVolumeFlow: StandardVolumeFlow): StandardVolumeFlow {
        return new StandardVolumeFlow(super.internalSubtract(this.value, standardVolumeFlow.BaseValue))
    }

    /**
     * Multiply the given StandardVolumeFlow with the current StandardVolumeFlow.
     * @param standardVolumeFlow The other StandardVolumeFlow.
     * @returns A new StandardVolumeFlow instance with the results.
     */
    public multiply(standardVolumeFlow: StandardVolumeFlow): StandardVolumeFlow {
        return new StandardVolumeFlow(super.internalMultiply(this.value, standardVolumeFlow.BaseValue))
    }

    /**
     * Divide the given StandardVolumeFlow with the current StandardVolumeFlow.
     * @param standardVolumeFlow The other StandardVolumeFlow.
     * @returns A new StandardVolumeFlow instance with the results.
     */
    public divide(standardVolumeFlow: StandardVolumeFlow): StandardVolumeFlow {
        return new StandardVolumeFlow(super.internalDivide(this.value, standardVolumeFlow.BaseValue))
    }

    /**
     * Modulo the given StandardVolumeFlow with the current StandardVolumeFlow.
     * @param standardVolumeFlow The other StandardVolumeFlow.
     * @returns A new StandardVolumeFlow instance with the results.
     */
    public modulo(standardVolumeFlow: StandardVolumeFlow): StandardVolumeFlow {
        return new StandardVolumeFlow(super.internalModulo(this.value, standardVolumeFlow.BaseValue))
    }

    /**
     * Pow the given StandardVolumeFlow with the current StandardVolumeFlow.
     * @param standardVolumeFlow The other StandardVolumeFlow.
     * @returns A new StandardVolumeFlow instance with the results.
     */
    public pow(standardVolumeFlow: StandardVolumeFlow): StandardVolumeFlow {
        return new StandardVolumeFlow(super.internalPow(this.value, standardVolumeFlow.BaseValue))
    }
}
