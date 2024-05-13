import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a TemperatureDelta */
export interface TemperatureDeltaDto {
    /** The value of the TemperatureDelta */
    value: number;
    /**  The specific unit that the TemperatureDelta value is representing */
    unit: TemperatureDeltaUnits;
}

/** TemperatureDeltaUnits enumeration */
export enum TemperatureDeltaUnits {
    /** */
    Kelvins = "Kelvin",
    /** */
    DegreesCelsius = "DegreeCelsius",
    /** */
    DegreesDelisle = "DegreeDelisle",
    /** */
    DegreesFahrenheit = "DegreeFahrenheit",
    /** */
    DegreesNewton = "DegreeNewton",
    /** */
    DegreesRankine = "DegreeRankine",
    /** */
    DegreesReaumur = "DegreeReaumur",
    /** */
    DegreesRoemer = "DegreeRoemer",
    /** */
    MillidegreesCelsius = "MillidegreeCelsius"
}

/** Difference between two temperatures. The conversions are different than for Temperature. */
export class TemperatureDelta extends BaseUnit {
    protected value: number;
    private kelvinsLazy: number | null = null;
    private degreescelsiusLazy: number | null = null;
    private degreesdelisleLazy: number | null = null;
    private degreesfahrenheitLazy: number | null = null;
    private degreesnewtonLazy: number | null = null;
    private degreesrankineLazy: number | null = null;
    private degreesreaumurLazy: number | null = null;
    private degreesroemerLazy: number | null = null;
    private millidegreescelsiusLazy: number | null = null;

    /**
     * Create a new TemperatureDelta.
     * @param value The value.
     * @param fromUnit The ‘TemperatureDelta’ unit to create from.
     * The default unit is Kelvins
     */
    public constructor(value: number, fromUnit: TemperatureDeltaUnits = TemperatureDeltaUnits.Kelvins) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of TemperatureDelta is Kelvins.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): TemperatureDeltaUnits.Kelvins {
        return TemperatureDeltaUnits.Kelvins
    }

    /** */
    public get Kelvins(): number {
        if(this.kelvinsLazy !== null){
            return this.kelvinsLazy;
        }
        return this.kelvinsLazy = this.convertFromBase(TemperatureDeltaUnits.Kelvins);
    }

    /** */
    public get DegreesCelsius(): number {
        if(this.degreescelsiusLazy !== null){
            return this.degreescelsiusLazy;
        }
        return this.degreescelsiusLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesCelsius);
    }

    /** */
    public get DegreesDelisle(): number {
        if(this.degreesdelisleLazy !== null){
            return this.degreesdelisleLazy;
        }
        return this.degreesdelisleLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesDelisle);
    }

    /** */
    public get DegreesFahrenheit(): number {
        if(this.degreesfahrenheitLazy !== null){
            return this.degreesfahrenheitLazy;
        }
        return this.degreesfahrenheitLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesFahrenheit);
    }

    /** */
    public get DegreesNewton(): number {
        if(this.degreesnewtonLazy !== null){
            return this.degreesnewtonLazy;
        }
        return this.degreesnewtonLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesNewton);
    }

    /** */
    public get DegreesRankine(): number {
        if(this.degreesrankineLazy !== null){
            return this.degreesrankineLazy;
        }
        return this.degreesrankineLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesRankine);
    }

    /** */
    public get DegreesReaumur(): number {
        if(this.degreesreaumurLazy !== null){
            return this.degreesreaumurLazy;
        }
        return this.degreesreaumurLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesReaumur);
    }

    /** */
    public get DegreesRoemer(): number {
        if(this.degreesroemerLazy !== null){
            return this.degreesroemerLazy;
        }
        return this.degreesroemerLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesRoemer);
    }

    /** */
    public get MillidegreesCelsius(): number {
        if(this.millidegreescelsiusLazy !== null){
            return this.millidegreescelsiusLazy;
        }
        return this.millidegreescelsiusLazy = this.convertFromBase(TemperatureDeltaUnits.MillidegreesCelsius);
    }

    /**
     * Create a new TemperatureDelta instance from a Kelvins
     *
     * @param value The unit as Kelvins to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromKelvins(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.Kelvins);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesCelsius
     *
     * @param value The unit as DegreesCelsius to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesCelsius(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesCelsius);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesDelisle
     *
     * @param value The unit as DegreesDelisle to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesDelisle(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesDelisle);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesFahrenheit
     *
     * @param value The unit as DegreesFahrenheit to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesFahrenheit(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesFahrenheit);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesNewton
     *
     * @param value The unit as DegreesNewton to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesNewton(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesNewton);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesRankine
     *
     * @param value The unit as DegreesRankine to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesRankine(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesRankine);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesReaumur
     *
     * @param value The unit as DegreesReaumur to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesReaumur(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesReaumur);
    }

    /**
     * Create a new TemperatureDelta instance from a DegreesRoemer
     *
     * @param value The unit as DegreesRoemer to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromDegreesRoemer(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesRoemer);
    }

    /**
     * Create a new TemperatureDelta instance from a MillidegreesCelsius
     *
     * @param value The unit as MillidegreesCelsius to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    public static FromMillidegreesCelsius(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.MillidegreesCelsius);
    }

    /**
     * Gets the base unit enumeration associated with TemperatureDelta
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof TemperatureDeltaUnits {
        return TemperatureDeltaUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): TemperatureDeltaUnits.Kelvins {
        return TemperatureDeltaUnits.Kelvins;
    }

    /**
     * Create API DTO represent a TemperatureDelta unit.
     * @param holdInUnit The specific TemperatureDelta unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: TemperatureDeltaUnits = TemperatureDeltaUnits.Kelvins): TemperatureDeltaDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a TemperatureDelta unit from an API DTO representation.
     * @param dtoTemperatureDelta The TemperatureDelta API DTO representation
     */
    public static FromDto(dtoTemperatureDelta: TemperatureDeltaDto): TemperatureDelta {
        return new TemperatureDelta(dtoTemperatureDelta.value, dtoTemperatureDelta.unit);
    }

    /**
     * Convert TemperatureDelta to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: TemperatureDeltaUnits): number {
        switch (toUnit) {
            case TemperatureDeltaUnits.Kelvins: return this.Kelvins;
            case TemperatureDeltaUnits.DegreesCelsius: return this.DegreesCelsius;
            case TemperatureDeltaUnits.DegreesDelisle: return this.DegreesDelisle;
            case TemperatureDeltaUnits.DegreesFahrenheit: return this.DegreesFahrenheit;
            case TemperatureDeltaUnits.DegreesNewton: return this.DegreesNewton;
            case TemperatureDeltaUnits.DegreesRankine: return this.DegreesRankine;
            case TemperatureDeltaUnits.DegreesReaumur: return this.DegreesReaumur;
            case TemperatureDeltaUnits.DegreesRoemer: return this.DegreesRoemer;
            case TemperatureDeltaUnits.MillidegreesCelsius: return this.MillidegreesCelsius;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: TemperatureDeltaUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case TemperatureDeltaUnits.Kelvins: return this.value;
                case TemperatureDeltaUnits.DegreesCelsius: return this.value;
                case TemperatureDeltaUnits.DegreesDelisle: {
                    const v4 = super.internalDivide(3, 2);
                    return super.internalMultiply(this.value, v4);
                }
                case TemperatureDeltaUnits.DegreesFahrenheit: {
                    const v4 = super.internalDivide(9, 5);
                    return super.internalMultiply(this.value, v4);
                }
                case TemperatureDeltaUnits.DegreesNewton: {
                    const v4 = super.internalDivide(33, 100);
                    return super.internalMultiply(this.value, v4);
                }
                case TemperatureDeltaUnits.DegreesRankine: {
                    const v4 = super.internalDivide(9, 5);
                    return super.internalMultiply(this.value, v4);
                }
                case TemperatureDeltaUnits.DegreesReaumur: {
                    const v4 = super.internalDivide(4, 5);
                    return super.internalMultiply(this.value, v4);
                }
                case TemperatureDeltaUnits.DegreesRoemer: {
                    const v4 = super.internalDivide(21, 40);
                    return super.internalMultiply(this.value, v4);
                }
                case TemperatureDeltaUnits.MillidegreesCelsius: return super.internalDivide(this.value, 0.001);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case TemperatureDeltaUnits.Kelvins: return this.value;
            case TemperatureDeltaUnits.DegreesCelsius: return this.value;
            case TemperatureDeltaUnits.DegreesDelisle: return this.value * -3 / 2;
            case TemperatureDeltaUnits.DegreesFahrenheit: return this.value * 9 / 5;
            case TemperatureDeltaUnits.DegreesNewton: return this.value * 33 / 100;
            case TemperatureDeltaUnits.DegreesRankine: return this.value * 9 / 5;
            case TemperatureDeltaUnits.DegreesReaumur: return this.value * 4 / 5;
            case TemperatureDeltaUnits.DegreesRoemer: return this.value * 21 / 40;
            case TemperatureDeltaUnits.MillidegreesCelsius: return (this.value) / 0.001;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: TemperatureDeltaUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case TemperatureDeltaUnits.Kelvins: return value;
                case TemperatureDeltaUnits.DegreesCelsius: return value;
                case TemperatureDeltaUnits.DegreesDelisle: {
                    const v4 = super.internalDivide(2, 3);
                    return super.internalMultiply(value, v4);
                }
                case TemperatureDeltaUnits.DegreesFahrenheit: {
                    const v4 = super.internalDivide(5, 9);
                    return super.internalMultiply(value, v4);
                }
                case TemperatureDeltaUnits.DegreesNewton: {
                    const v4 = super.internalDivide(100, 33);
                    return super.internalMultiply(value, v4);
                }
                case TemperatureDeltaUnits.DegreesRankine: {
                    const v4 = super.internalDivide(5, 9);
                    return super.internalMultiply(value, v4);
                }
                case TemperatureDeltaUnits.DegreesReaumur: {
                    const v4 = super.internalDivide(5, 4);
                    return super.internalMultiply(value, v4);
                }
                case TemperatureDeltaUnits.DegreesRoemer: {
                    const v4 = super.internalDivide(40, 21);
                    return super.internalMultiply(value, v4);
                }
                case TemperatureDeltaUnits.MillidegreesCelsius: return super.internalMultiply(value, 0.001);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case TemperatureDeltaUnits.Kelvins: return value;
            case TemperatureDeltaUnits.DegreesCelsius: return value;
            case TemperatureDeltaUnits.DegreesDelisle: return value * -2 / 3;
            case TemperatureDeltaUnits.DegreesFahrenheit: return value * 5 / 9;
            case TemperatureDeltaUnits.DegreesNewton: return value * 100 / 33;
            case TemperatureDeltaUnits.DegreesRankine: return value * 5 / 9;
            case TemperatureDeltaUnits.DegreesReaumur: return value * 5 / 4;
            case TemperatureDeltaUnits.DegreesRoemer: return value * 40 / 21;
            case TemperatureDeltaUnits.MillidegreesCelsius: return (value) * 0.001;
            default: return Number.NaN;
        }
    }

    /**
     * Format the TemperatureDelta to string.
     * Note! the default format for TemperatureDelta is Kelvins.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the TemperatureDelta.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the TemperatureDelta.
     */
    public toString(unit: TemperatureDeltaUnits = TemperatureDeltaUnits.Kelvins, fractionalDigits?: number): string {

        switch (unit) {
            
            case TemperatureDeltaUnits.Kelvins:
                return super.truncateFractionDigits(this.Kelvins, fractionalDigits) + ` ∆K`;
            case TemperatureDeltaUnits.DegreesCelsius:
                return super.truncateFractionDigits(this.DegreesCelsius, fractionalDigits) + ` ∆°C`;
            case TemperatureDeltaUnits.DegreesDelisle:
                return super.truncateFractionDigits(this.DegreesDelisle, fractionalDigits) + ` ∆°De`;
            case TemperatureDeltaUnits.DegreesFahrenheit:
                return super.truncateFractionDigits(this.DegreesFahrenheit, fractionalDigits) + ` ∆°F`;
            case TemperatureDeltaUnits.DegreesNewton:
                return super.truncateFractionDigits(this.DegreesNewton, fractionalDigits) + ` ∆°N`;
            case TemperatureDeltaUnits.DegreesRankine:
                return super.truncateFractionDigits(this.DegreesRankine, fractionalDigits) + ` ∆°R`;
            case TemperatureDeltaUnits.DegreesReaumur:
                return super.truncateFractionDigits(this.DegreesReaumur, fractionalDigits) + ` ∆°Ré`;
            case TemperatureDeltaUnits.DegreesRoemer:
                return super.truncateFractionDigits(this.DegreesRoemer, fractionalDigits) + ` ∆°Rø`;
            case TemperatureDeltaUnits.MillidegreesCelsius:
                return super.truncateFractionDigits(this.MillidegreesCelsius, fractionalDigits) + ` m∆°C`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get TemperatureDelta unit abbreviation.
     * Note! the default abbreviation for TemperatureDelta is Kelvins.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the TemperatureDelta.
     * @returns The abbreviation string of TemperatureDelta.
     */
    public getUnitAbbreviation(unitAbbreviation: TemperatureDeltaUnits = TemperatureDeltaUnits.Kelvins): string {

        switch (unitAbbreviation) {
            
            case TemperatureDeltaUnits.Kelvins:
                return `∆K`;
            case TemperatureDeltaUnits.DegreesCelsius:
                return `∆°C`;
            case TemperatureDeltaUnits.DegreesDelisle:
                return `∆°De`;
            case TemperatureDeltaUnits.DegreesFahrenheit:
                return `∆°F`;
            case TemperatureDeltaUnits.DegreesNewton:
                return `∆°N`;
            case TemperatureDeltaUnits.DegreesRankine:
                return `∆°R`;
            case TemperatureDeltaUnits.DegreesReaumur:
                return `∆°Ré`;
            case TemperatureDeltaUnits.DegreesRoemer:
                return `∆°Rø`;
            case TemperatureDeltaUnits.MillidegreesCelsius:
                return `m∆°C`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given TemperatureDelta are equals to the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns True if the given TemperatureDelta are equal to the current TemperatureDelta.
     */
    public equals(temperatureDelta: TemperatureDelta): boolean {
        return super.internalEquals(this.value, temperatureDelta.BaseValue);
    }

    /**
     * Compare the given TemperatureDelta against the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns 0 if they are equal, -1 if the current TemperatureDelta is less then other, 1 if the current TemperatureDelta is greater then other.
     */
    public compareTo(temperatureDelta: TemperatureDelta): number {
        return super.internalCompareTo(this.value, temperatureDelta.BaseValue);
    }

    /**
     * Add the given TemperatureDelta with the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns A new TemperatureDelta instance with the results.
     */
    public add(temperatureDelta: TemperatureDelta): TemperatureDelta {
        return new TemperatureDelta(super.internalAdd(this.value, temperatureDelta.BaseValue))
    }

    /**
     * Subtract the given TemperatureDelta with the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns A new TemperatureDelta instance with the results.
     */
    public subtract(temperatureDelta: TemperatureDelta): TemperatureDelta {
        return new TemperatureDelta(super.internalSubtract(this.value, temperatureDelta.BaseValue))
    }

    /**
     * Multiply the given TemperatureDelta with the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns A new TemperatureDelta instance with the results.
     */
    public multiply(temperatureDelta: TemperatureDelta): TemperatureDelta {
        return new TemperatureDelta(super.internalMultiply(this.value, temperatureDelta.BaseValue))
    }

    /**
     * Divide the given TemperatureDelta with the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns A new TemperatureDelta instance with the results.
     */
    public divide(temperatureDelta: TemperatureDelta): TemperatureDelta {
        return new TemperatureDelta(super.internalDivide(this.value, temperatureDelta.BaseValue))
    }

    /**
     * Modulo the given TemperatureDelta with the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns A new TemperatureDelta instance with the results.
     */
    public modulo(temperatureDelta: TemperatureDelta): TemperatureDelta {
        return new TemperatureDelta(super.internalModulo(this.value, temperatureDelta.BaseValue))
    }

    /**
     * Pow the given TemperatureDelta with the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns A new TemperatureDelta instance with the results.
     */
    public pow(temperatureDelta: TemperatureDelta): TemperatureDelta {
        return new TemperatureDelta(super.internalPow(this.value, temperatureDelta.BaseValue))
    }
}
