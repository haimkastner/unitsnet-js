import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a SpecificFuelConsumption */
export interface SpecificFuelConsumptionDto {
    /** The value of the SpecificFuelConsumption */
    value: number;
    /**  The specific unit that the SpecificFuelConsumption value is representing */
    unit: SpecificFuelConsumptionUnits;
}

/** SpecificFuelConsumptionUnits enumeration */
export enum SpecificFuelConsumptionUnits {
    /** */
    PoundsMassPerPoundForceHour = "PoundMassPerPoundForceHour",
    /** */
    KilogramsPerKilogramForceHour = "KilogramPerKilogramForceHour",
    /** */
    GramsPerKilonewtonSecond = "GramPerKilonewtonSecond",
    /** */
    KilogramsPerKilonewtonSecond = "KilogramPerKilonewtonSecond"
}

/** SFC is the fuel efficiency of an engine design with respect to thrust output */
export class SpecificFuelConsumption extends BaseUnit {
    protected value: number;
    private poundsmassperpoundforcehourLazy: number | null = null;
    private kilogramsperkilogramforcehourLazy: number | null = null;
    private gramsperkilonewtonsecondLazy: number | null = null;
    private kilogramsperkilonewtonsecondLazy: number | null = null;

    /**
     * Create a new SpecificFuelConsumption.
     * @param value The value.
     * @param fromUnit The ‘SpecificFuelConsumption’ unit to create from.
     * The default unit is GramsPerKilonewtonSecond
     */
    public constructor(value: number, fromUnit: SpecificFuelConsumptionUnits = SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SpecificFuelConsumption is GramsPerKilonewtonSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond {
        return SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond
    }

    /** */
    public get PoundsMassPerPoundForceHour(): number {
        if(this.poundsmassperpoundforcehourLazy !== null){
            return this.poundsmassperpoundforcehourLazy;
        }
        return this.poundsmassperpoundforcehourLazy = this.convertFromBase(SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour);
    }

    /** */
    public get KilogramsPerKilogramForceHour(): number {
        if(this.kilogramsperkilogramforcehourLazy !== null){
            return this.kilogramsperkilogramforcehourLazy;
        }
        return this.kilogramsperkilogramforcehourLazy = this.convertFromBase(SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour);
    }

    /** */
    public get GramsPerKilonewtonSecond(): number {
        if(this.gramsperkilonewtonsecondLazy !== null){
            return this.gramsperkilonewtonsecondLazy;
        }
        return this.gramsperkilonewtonsecondLazy = this.convertFromBase(SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond);
    }

    /** */
    public get KilogramsPerKilonewtonSecond(): number {
        if(this.kilogramsperkilonewtonsecondLazy !== null){
            return this.kilogramsperkilonewtonsecondLazy;
        }
        return this.kilogramsperkilonewtonsecondLazy = this.convertFromBase(SpecificFuelConsumptionUnits.KilogramsPerKilonewtonSecond);
    }

    /**
     * Create a new SpecificFuelConsumption instance from a PoundsMassPerPoundForceHour
     *
     * @param value The unit as PoundsMassPerPoundForceHour to create a new SpecificFuelConsumption from.
     * @returns The new SpecificFuelConsumption instance.
     */
    public static FromPoundsMassPerPoundForceHour(value: number): SpecificFuelConsumption {
        return new SpecificFuelConsumption(value, SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour);
    }

    /**
     * Create a new SpecificFuelConsumption instance from a KilogramsPerKilogramForceHour
     *
     * @param value The unit as KilogramsPerKilogramForceHour to create a new SpecificFuelConsumption from.
     * @returns The new SpecificFuelConsumption instance.
     */
    public static FromKilogramsPerKilogramForceHour(value: number): SpecificFuelConsumption {
        return new SpecificFuelConsumption(value, SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour);
    }

    /**
     * Create a new SpecificFuelConsumption instance from a GramsPerKilonewtonSecond
     *
     * @param value The unit as GramsPerKilonewtonSecond to create a new SpecificFuelConsumption from.
     * @returns The new SpecificFuelConsumption instance.
     */
    public static FromGramsPerKilonewtonSecond(value: number): SpecificFuelConsumption {
        return new SpecificFuelConsumption(value, SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond);
    }

    /**
     * Create a new SpecificFuelConsumption instance from a KilogramsPerKilonewtonSecond
     *
     * @param value The unit as KilogramsPerKilonewtonSecond to create a new SpecificFuelConsumption from.
     * @returns The new SpecificFuelConsumption instance.
     */
    public static FromKilogramsPerKilonewtonSecond(value: number): SpecificFuelConsumption {
        return new SpecificFuelConsumption(value, SpecificFuelConsumptionUnits.KilogramsPerKilonewtonSecond);
    }

    /**
     * Gets the base unit enumeration associated with SpecificFuelConsumption
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof SpecificFuelConsumptionUnits {
        return SpecificFuelConsumptionUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond {
        return SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond;
    }

    /**
     * Create API DTO represent a SpecificFuelConsumption unit.
     * @param holdInUnit The specific SpecificFuelConsumption unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: SpecificFuelConsumptionUnits = SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond): SpecificFuelConsumptionDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a SpecificFuelConsumption unit from an API DTO representation.
     * @param dtoSpecificFuelConsumption The SpecificFuelConsumption API DTO representation
     */
    public static FromDto(dtoSpecificFuelConsumption: SpecificFuelConsumptionDto): SpecificFuelConsumption {
        return new SpecificFuelConsumption(dtoSpecificFuelConsumption.value, dtoSpecificFuelConsumption.unit);
    }

    /**
     * Convert SpecificFuelConsumption to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: SpecificFuelConsumptionUnits): number {
        switch (toUnit) {
            case SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour: return this.PoundsMassPerPoundForceHour;
            case SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour: return this.KilogramsPerKilogramForceHour;
            case SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond: return this.GramsPerKilonewtonSecond;
            case SpecificFuelConsumptionUnits.KilogramsPerKilonewtonSecond: return this.KilogramsPerKilonewtonSecond;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: SpecificFuelConsumptionUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour: {
                    const v3 = super.internalMultiply(this.value, 9.80665e-3);
                    const v6 = super.internalDivide(3600, 1000);
                    return super.internalMultiply(v3, v6);
                }
                case SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour: {
                    const v3 = super.internalMultiply(this.value, 9.80665e-3);
                    const v6 = super.internalDivide(3600, 1000);
                    return super.internalMultiply(v3, v6);
                }
                case SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond: return this.value;
                case SpecificFuelConsumptionUnits.KilogramsPerKilonewtonSecond: return super.internalDivide(this.value, 1000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour: return this.value * 9.80665e-3 * 3600 / 1000;
            case SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour: return this.value * 9.80665e-3 * 3600 / 1000;
            case SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond: return this.value;
            case SpecificFuelConsumptionUnits.KilogramsPerKilonewtonSecond: return (this.value) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: SpecificFuelConsumptionUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour: {
                    const v5 = super.internalMultiply(9.80665e-3, 3600);
                    const v6 = super.internalDivide(1000, v5);
                    return super.internalMultiply(value, v6);
                }
                case SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour: {
                    const v5 = super.internalMultiply(9.80665e-3, 3600);
                    const v6 = super.internalDivide(1000, v5);
                    return super.internalMultiply(value, v6);
                }
                case SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond: return value;
                case SpecificFuelConsumptionUnits.KilogramsPerKilonewtonSecond: return super.internalMultiply(value, 1000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour: return value * 1000 / (9.80665e-3 * 3600);
            case SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour: return value * 1000 / (9.80665e-3 * 3600);
            case SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond: return value;
            case SpecificFuelConsumptionUnits.KilogramsPerKilonewtonSecond: return (value) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the SpecificFuelConsumption to string.
     * Note! the default format for SpecificFuelConsumption is GramsPerKilonewtonSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the SpecificFuelConsumption.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the SpecificFuelConsumption.
     */
    public toString(unit: SpecificFuelConsumptionUnits = SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour:
                return super.truncateFractionDigits(this.PoundsMassPerPoundForceHour, options as ToStringOptions) + ` lb/(lbf·h)`;
            case SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour:
                return super.truncateFractionDigits(this.KilogramsPerKilogramForceHour, options as ToStringOptions) + ` kg/(kgf·h)`;
            case SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond:
                return super.truncateFractionDigits(this.GramsPerKilonewtonSecond, options as ToStringOptions) + ` g/(kN·s)`;
            case SpecificFuelConsumptionUnits.KilogramsPerKilonewtonSecond:
                return super.truncateFractionDigits(this.KilogramsPerKilonewtonSecond, options as ToStringOptions) + ` kg/(kN·s)`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get SpecificFuelConsumption unit abbreviation.
     * Note! the default abbreviation for SpecificFuelConsumption is GramsPerKilonewtonSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the SpecificFuelConsumption.
     * @returns The abbreviation string of SpecificFuelConsumption.
     */
    public getUnitAbbreviation(unitAbbreviation: SpecificFuelConsumptionUnits = SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond): string {

        switch (unitAbbreviation) {
            
            case SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour:
                return `lb/(lbf·h)`;
            case SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour:
                return `kg/(kgf·h)`;
            case SpecificFuelConsumptionUnits.GramsPerKilonewtonSecond:
                return `g/(kN·s)`;
            case SpecificFuelConsumptionUnits.KilogramsPerKilonewtonSecond:
                return `kg/(kN·s)`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given SpecificFuelConsumption are equals to the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns True if the given SpecificFuelConsumption are equal to the current SpecificFuelConsumption.
     */
    public equals(specificFuelConsumption: SpecificFuelConsumption): boolean {
        return super.internalEquals(this.value, specificFuelConsumption.BaseValue);
    }

    /**
     * Compare the given SpecificFuelConsumption against the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns 0 if they are equal, -1 if the current SpecificFuelConsumption is less then other, 1 if the current SpecificFuelConsumption is greater then other.
     */
    public compareTo(specificFuelConsumption: SpecificFuelConsumption): number {
        return super.internalCompareTo(this.value, specificFuelConsumption.BaseValue);
    }

    /**
     * Add the given SpecificFuelConsumption with the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns A new SpecificFuelConsumption instance with the results.
     */
    public add(specificFuelConsumption: SpecificFuelConsumption): SpecificFuelConsumption {
        return new SpecificFuelConsumption(super.internalAdd(this.value, specificFuelConsumption.BaseValue))
    }

    /**
     * Subtract the given SpecificFuelConsumption with the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns A new SpecificFuelConsumption instance with the results.
     */
    public subtract(specificFuelConsumption: SpecificFuelConsumption): SpecificFuelConsumption {
        return new SpecificFuelConsumption(super.internalSubtract(this.value, specificFuelConsumption.BaseValue))
    }

    /**
     * Multiply the given SpecificFuelConsumption with the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns A new SpecificFuelConsumption instance with the results.
     */
    public multiply(specificFuelConsumption: SpecificFuelConsumption): SpecificFuelConsumption {
        return new SpecificFuelConsumption(super.internalMultiply(this.value, specificFuelConsumption.BaseValue))
    }

    /**
     * Divide the given SpecificFuelConsumption with the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns A new SpecificFuelConsumption instance with the results.
     */
    public divide(specificFuelConsumption: SpecificFuelConsumption): SpecificFuelConsumption {
        return new SpecificFuelConsumption(super.internalDivide(this.value, specificFuelConsumption.BaseValue))
    }

    /**
     * Modulo the given SpecificFuelConsumption with the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns A new SpecificFuelConsumption instance with the results.
     */
    public modulo(specificFuelConsumption: SpecificFuelConsumption): SpecificFuelConsumption {
        return new SpecificFuelConsumption(super.internalModulo(this.value, specificFuelConsumption.BaseValue))
    }

    /**
     * Pow the given SpecificFuelConsumption with the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns A new SpecificFuelConsumption instance with the results.
     */
    public pow(specificFuelConsumption: SpecificFuelConsumption): SpecificFuelConsumption {
        return new SpecificFuelConsumption(super.internalPow(this.value, specificFuelConsumption.BaseValue))
    }
}
