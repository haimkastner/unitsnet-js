import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a Temperature */
export interface TemperatureDto {
    /** The value of the Temperature */
    value: number;
    /**  The specific unit that the Temperature value is representing */
    unit: TemperatureUnits;
}

/** TemperatureUnits enumeration */
export enum TemperatureUnits {
    /** */
    Kelvins = "Kelvin",
    /** */
    DegreesCelsius = "DegreeCelsius",
    /** */
    MillidegreesCelsius = "MillidegreeCelsius",
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
    SolarTemperatures = "SolarTemperature"
}

/** A temperature is a numerical measure of hot or cold. Its measurement is by detection of heat radiation or particle velocity or kinetic energy, or by the bulk behavior of a thermometric material. It may be calibrated in any of various temperature scales, Celsius, Fahrenheit, Kelvin, etc. The fundamental physical definition of temperature is provided by thermodynamics. */
export class Temperature extends BaseUnit {
    protected value: number;
    private kelvinsLazy: number | null = null;
    private degreescelsiusLazy: number | null = null;
    private millidegreescelsiusLazy: number | null = null;
    private degreesdelisleLazy: number | null = null;
    private degreesfahrenheitLazy: number | null = null;
    private degreesnewtonLazy: number | null = null;
    private degreesrankineLazy: number | null = null;
    private degreesreaumurLazy: number | null = null;
    private degreesroemerLazy: number | null = null;
    private solartemperaturesLazy: number | null = null;

    /**
     * Create a new Temperature.
     * @param value The value.
     * @param fromUnit The ‘Temperature’ unit to create from.
     * The default unit is Kelvins
     */
    public constructor(value: number, fromUnit: TemperatureUnits = TemperatureUnits.Kelvins) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Temperature is Kelvins.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): TemperatureUnits.Kelvins {
        return TemperatureUnits.Kelvins
    }

    /** */
    public get Kelvins(): number {
        if(this.kelvinsLazy !== null){
            return this.kelvinsLazy;
        }
        return this.kelvinsLazy = this.convertFromBase(TemperatureUnits.Kelvins);
    }

    /** */
    public get DegreesCelsius(): number {
        if(this.degreescelsiusLazy !== null){
            return this.degreescelsiusLazy;
        }
        return this.degreescelsiusLazy = this.convertFromBase(TemperatureUnits.DegreesCelsius);
    }

    /** */
    public get MillidegreesCelsius(): number {
        if(this.millidegreescelsiusLazy !== null){
            return this.millidegreescelsiusLazy;
        }
        return this.millidegreescelsiusLazy = this.convertFromBase(TemperatureUnits.MillidegreesCelsius);
    }

    /** */
    public get DegreesDelisle(): number {
        if(this.degreesdelisleLazy !== null){
            return this.degreesdelisleLazy;
        }
        return this.degreesdelisleLazy = this.convertFromBase(TemperatureUnits.DegreesDelisle);
    }

    /** */
    public get DegreesFahrenheit(): number {
        if(this.degreesfahrenheitLazy !== null){
            return this.degreesfahrenheitLazy;
        }
        return this.degreesfahrenheitLazy = this.convertFromBase(TemperatureUnits.DegreesFahrenheit);
    }

    /** */
    public get DegreesNewton(): number {
        if(this.degreesnewtonLazy !== null){
            return this.degreesnewtonLazy;
        }
        return this.degreesnewtonLazy = this.convertFromBase(TemperatureUnits.DegreesNewton);
    }

    /** */
    public get DegreesRankine(): number {
        if(this.degreesrankineLazy !== null){
            return this.degreesrankineLazy;
        }
        return this.degreesrankineLazy = this.convertFromBase(TemperatureUnits.DegreesRankine);
    }

    /** */
    public get DegreesReaumur(): number {
        if(this.degreesreaumurLazy !== null){
            return this.degreesreaumurLazy;
        }
        return this.degreesreaumurLazy = this.convertFromBase(TemperatureUnits.DegreesReaumur);
    }

    /** */
    public get DegreesRoemer(): number {
        if(this.degreesroemerLazy !== null){
            return this.degreesroemerLazy;
        }
        return this.degreesroemerLazy = this.convertFromBase(TemperatureUnits.DegreesRoemer);
    }

    /** */
    public get SolarTemperatures(): number {
        if(this.solartemperaturesLazy !== null){
            return this.solartemperaturesLazy;
        }
        return this.solartemperaturesLazy = this.convertFromBase(TemperatureUnits.SolarTemperatures);
    }

    /**
     * Create a new Temperature instance from a Kelvins
     *
     * @param value The unit as Kelvins to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromKelvins(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.Kelvins);
    }

    /**
     * Create a new Temperature instance from a DegreesCelsius
     *
     * @param value The unit as DegreesCelsius to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesCelsius(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesCelsius);
    }

    /**
     * Create a new Temperature instance from a MillidegreesCelsius
     *
     * @param value The unit as MillidegreesCelsius to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromMillidegreesCelsius(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.MillidegreesCelsius);
    }

    /**
     * Create a new Temperature instance from a DegreesDelisle
     *
     * @param value The unit as DegreesDelisle to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesDelisle(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesDelisle);
    }

    /**
     * Create a new Temperature instance from a DegreesFahrenheit
     *
     * @param value The unit as DegreesFahrenheit to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesFahrenheit(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesFahrenheit);
    }

    /**
     * Create a new Temperature instance from a DegreesNewton
     *
     * @param value The unit as DegreesNewton to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesNewton(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesNewton);
    }

    /**
     * Create a new Temperature instance from a DegreesRankine
     *
     * @param value The unit as DegreesRankine to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesRankine(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesRankine);
    }

    /**
     * Create a new Temperature instance from a DegreesReaumur
     *
     * @param value The unit as DegreesReaumur to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesReaumur(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesReaumur);
    }

    /**
     * Create a new Temperature instance from a DegreesRoemer
     *
     * @param value The unit as DegreesRoemer to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromDegreesRoemer(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesRoemer);
    }

    /**
     * Create a new Temperature instance from a SolarTemperatures
     *
     * @param value The unit as SolarTemperatures to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    public static FromSolarTemperatures(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.SolarTemperatures);
    }

    /**
     * Gets the base unit enumeration associated with Temperature
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof TemperatureUnits {
        return TemperatureUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): TemperatureUnits.Kelvins {
        return TemperatureUnits.Kelvins;
    }

    /**
     * Create API DTO represent a Temperature unit.
     * @param holdInUnit The specific Temperature unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: TemperatureUnits = TemperatureUnits.Kelvins): TemperatureDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Temperature unit from an API DTO representation.
     * @param dtoTemperature The Temperature API DTO representation
     */
    public static FromDto(dtoTemperature: TemperatureDto): Temperature {
        return new Temperature(dtoTemperature.value, dtoTemperature.unit);
    }

    /**
     * Convert Temperature to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: TemperatureUnits): number {
        switch (toUnit) {
            case TemperatureUnits.Kelvins: return this.Kelvins;
            case TemperatureUnits.DegreesCelsius: return this.DegreesCelsius;
            case TemperatureUnits.MillidegreesCelsius: return this.MillidegreesCelsius;
            case TemperatureUnits.DegreesDelisle: return this.DegreesDelisle;
            case TemperatureUnits.DegreesFahrenheit: return this.DegreesFahrenheit;
            case TemperatureUnits.DegreesNewton: return this.DegreesNewton;
            case TemperatureUnits.DegreesRankine: return this.DegreesRankine;
            case TemperatureUnits.DegreesReaumur: return this.DegreesReaumur;
            case TemperatureUnits.DegreesRoemer: return this.DegreesRoemer;
            case TemperatureUnits.SolarTemperatures: return this.SolarTemperatures;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: TemperatureUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case TemperatureUnits.Kelvins: return this.value;
                case TemperatureUnits.DegreesCelsius: return super.internalSubtract(this.value, 273.15);
                case TemperatureUnits.MillidegreesCelsius: {
                    const v3 = super.internalSubtract(this.value, 273.15);
                    return super.internalMultiply(v3, 1000);
                }
                case TemperatureUnits.DegreesDelisle: {
                    const v3 = super.internalSubtract(this.value, 373.15);
                    const v6 = super.internalDivide(3, 2);
                    return super.internalMultiply(v3, v6);
                }
                case TemperatureUnits.DegreesFahrenheit: {
                    const v5 = super.internalDivide(5, 9);
                    const v6 = super.internalMultiply(459.67, v5);
                    const v7 = super.internalSubtract(this.value, v6);
                    const v10 = super.internalDivide(9, 5);
                    return super.internalMultiply(v7, v10);
                }
                case TemperatureUnits.DegreesNewton: {
                    const v3 = super.internalSubtract(this.value, 273.15);
                    const v6 = super.internalDivide(33, 100);
                    return super.internalMultiply(v3, v6);
                }
                case TemperatureUnits.DegreesRankine: {
                    const v4 = super.internalDivide(9, 5);
                    return super.internalMultiply(this.value, v4);
                }
                case TemperatureUnits.DegreesReaumur: {
                    const v3 = super.internalSubtract(this.value, 273.15);
                    const v6 = super.internalDivide(4, 5);
                    return super.internalMultiply(v3, v6);
                }
                case TemperatureUnits.DegreesRoemer: {
                    const v6 = super.internalDivide(40, 21);
                    const v7 = super.internalMultiply(7.5, v6);
                    const v8 = super.internalSubtract(273.15, v7);
                    const v9 = super.internalSubtract(this.value, v8);
                    const v12 = super.internalDivide(21, 40);
                    return super.internalMultiply(v9, v12);
                }
                case TemperatureUnits.SolarTemperatures: return super.internalDivide(this.value, 5778);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case TemperatureUnits.Kelvins: return this.value;
            case TemperatureUnits.DegreesCelsius: return this.value - 273.15;
            case TemperatureUnits.MillidegreesCelsius: return (this.value - 273.15) * 1000;
            case TemperatureUnits.DegreesDelisle: return (this.value - 373.15) * -3 / 2;
            case TemperatureUnits.DegreesFahrenheit: return (this.value - 459.67 * 5 / 9) * 9 / 5;
            case TemperatureUnits.DegreesNewton: return (this.value - 273.15) * 33 / 100;
            case TemperatureUnits.DegreesRankine: return this.value * 9 / 5;
            case TemperatureUnits.DegreesReaumur: return (this.value - 273.15) * 4 / 5;
            case TemperatureUnits.DegreesRoemer: return (this.value - (273.15 - 7.5 * 40 / 21)) * 21 / 40;
            case TemperatureUnits.SolarTemperatures: return this.value / 5778;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: TemperatureUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case TemperatureUnits.Kelvins: return value;
                case TemperatureUnits.DegreesCelsius: return super.internalAdd(value, 273.15);
                case TemperatureUnits.MillidegreesCelsius: {
                    const v3 = super.internalDivide(value, 1000);
                    return super.internalAdd(v3, 273.15);
                }
                case TemperatureUnits.DegreesDelisle: {
                    const v4 = super.internalDivide(2, 3);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalAdd(v5, 373.15);
                }
                case TemperatureUnits.DegreesFahrenheit: {
                    const v4 = super.internalDivide(5, 9);
                    const v5 = super.internalMultiply(value, v4);
                    const v9 = super.internalDivide(5, 9);
                    const v10 = super.internalMultiply(459.67, v9);
                    return super.internalAdd(v5, v10);
                }
                case TemperatureUnits.DegreesNewton: {
                    const v4 = super.internalDivide(100, 33);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalAdd(v5, 273.15);
                }
                case TemperatureUnits.DegreesRankine: {
                    const v4 = super.internalDivide(5, 9);
                    return super.internalMultiply(value, v4);
                }
                case TemperatureUnits.DegreesReaumur: {
                    const v4 = super.internalDivide(5, 4);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalAdd(v5, 273.15);
                }
                case TemperatureUnits.DegreesRoemer: {
                    const v4 = super.internalDivide(40, 21);
                    const v5 = super.internalMultiply(value, v4);
                    const v7 = super.internalAdd(v5, 273.15);
                    const v11 = super.internalDivide(40, 21);
                    const v12 = super.internalMultiply(7.5, v11);
                    return super.internalSubtract(v7, v12);
                }
                case TemperatureUnits.SolarTemperatures: return super.internalMultiply(value, 5778);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case TemperatureUnits.Kelvins: return value;
            case TemperatureUnits.DegreesCelsius: return value + 273.15;
            case TemperatureUnits.MillidegreesCelsius: return value / 1000 + 273.15;
            case TemperatureUnits.DegreesDelisle: return value * -2 / 3 + 373.15;
            case TemperatureUnits.DegreesFahrenheit: return value * 5 / 9 + 459.67 * 5 / 9;
            case TemperatureUnits.DegreesNewton: return value * 100 / 33 + 273.15;
            case TemperatureUnits.DegreesRankine: return value * 5 / 9;
            case TemperatureUnits.DegreesReaumur: return value * 5 / 4 + 273.15;
            case TemperatureUnits.DegreesRoemer: return value * 40 / 21 + 273.15 - 7.5 * 40 / 21;
            case TemperatureUnits.SolarTemperatures: return value * 5778;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Temperature to string.
     * Note! the default format for Temperature is Kelvins.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Temperature.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the Temperature.
     */
    public toString(unit: TemperatureUnits = TemperatureUnits.Kelvins, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case TemperatureUnits.Kelvins:
                return super.truncateFractionDigits(this.Kelvins, options as ToStringOptions) + ` K`;
            case TemperatureUnits.DegreesCelsius:
                return super.truncateFractionDigits(this.DegreesCelsius, options as ToStringOptions) + ` °C`;
            case TemperatureUnits.MillidegreesCelsius:
                return super.truncateFractionDigits(this.MillidegreesCelsius, options as ToStringOptions) + ` m°C`;
            case TemperatureUnits.DegreesDelisle:
                return super.truncateFractionDigits(this.DegreesDelisle, options as ToStringOptions) + ` °De`;
            case TemperatureUnits.DegreesFahrenheit:
                return super.truncateFractionDigits(this.DegreesFahrenheit, options as ToStringOptions) + ` °F`;
            case TemperatureUnits.DegreesNewton:
                return super.truncateFractionDigits(this.DegreesNewton, options as ToStringOptions) + ` °N`;
            case TemperatureUnits.DegreesRankine:
                return super.truncateFractionDigits(this.DegreesRankine, options as ToStringOptions) + ` °R`;
            case TemperatureUnits.DegreesReaumur:
                return super.truncateFractionDigits(this.DegreesReaumur, options as ToStringOptions) + ` °Ré`;
            case TemperatureUnits.DegreesRoemer:
                return super.truncateFractionDigits(this.DegreesRoemer, options as ToStringOptions) + ` °Rø`;
            case TemperatureUnits.SolarTemperatures:
                return super.truncateFractionDigits(this.SolarTemperatures, options as ToStringOptions) + ` T⊙`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Temperature unit abbreviation.
     * Note! the default abbreviation for Temperature is Kelvins.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Temperature.
     * @returns The abbreviation string of Temperature.
     */
    public getUnitAbbreviation(unitAbbreviation: TemperatureUnits = TemperatureUnits.Kelvins): string {

        switch (unitAbbreviation) {
            
            case TemperatureUnits.Kelvins:
                return `K`;
            case TemperatureUnits.DegreesCelsius:
                return `°C`;
            case TemperatureUnits.MillidegreesCelsius:
                return `m°C`;
            case TemperatureUnits.DegreesDelisle:
                return `°De`;
            case TemperatureUnits.DegreesFahrenheit:
                return `°F`;
            case TemperatureUnits.DegreesNewton:
                return `°N`;
            case TemperatureUnits.DegreesRankine:
                return `°R`;
            case TemperatureUnits.DegreesReaumur:
                return `°Ré`;
            case TemperatureUnits.DegreesRoemer:
                return `°Rø`;
            case TemperatureUnits.SolarTemperatures:
                return `T⊙`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Temperature are equals to the current Temperature.
     * @param temperature The other Temperature.
     * @returns True if the given Temperature are equal to the current Temperature.
     */
    public equals(temperature: Temperature): boolean {
        return super.internalEquals(this.value, temperature.BaseValue);
    }

    /**
     * Compare the given Temperature against the current Temperature.
     * @param temperature The other Temperature.
     * @returns 0 if they are equal, -1 if the current Temperature is less then other, 1 if the current Temperature is greater then other.
     */
    public compareTo(temperature: Temperature): number {
        return super.internalCompareTo(this.value, temperature.BaseValue);
    }

    /**
     * Add the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    public add(temperature: Temperature): Temperature {
        return new Temperature(super.internalAdd(this.value, temperature.BaseValue))
    }

    /**
     * Subtract the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    public subtract(temperature: Temperature): Temperature {
        return new Temperature(super.internalSubtract(this.value, temperature.BaseValue))
    }

    /**
     * Multiply the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    public multiply(temperature: Temperature): Temperature {
        return new Temperature(super.internalMultiply(this.value, temperature.BaseValue))
    }

    /**
     * Divide the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    public divide(temperature: Temperature): Temperature {
        return new Temperature(super.internalDivide(this.value, temperature.BaseValue))
    }

    /**
     * Modulo the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    public modulo(temperature: Temperature): Temperature {
        return new Temperature(super.internalModulo(this.value, temperature.BaseValue))
    }

    /**
     * Pow the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    public pow(temperature: Temperature): Temperature {
        return new Temperature(super.internalPow(this.value, temperature.BaseValue))
    }
}
