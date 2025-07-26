import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a HeatTransferCoefficient */
export interface HeatTransferCoefficientDto {
    /** The value of the HeatTransferCoefficient */
    value: number;
    /**  The specific unit that the HeatTransferCoefficient value is representing */
    unit: HeatTransferCoefficientUnits;
}

/** HeatTransferCoefficientUnits enumeration */
export enum HeatTransferCoefficientUnits {
    /** */
    WattsPerSquareMeterKelvin = "WattPerSquareMeterKelvin",
    /** */
    WattsPerSquareMeterCelsius = "WattPerSquareMeterCelsius",
    /** */
    BtusPerHourSquareFootDegreeFahrenheit = "BtuPerHourSquareFootDegreeFahrenheit",
    /** */
    CaloriesPerHourSquareMeterDegreeCelsius = "CaloriePerHourSquareMeterDegreeCelsius",
    /** */
    KilocaloriesPerHourSquareMeterDegreeCelsius = "KilocaloriePerHourSquareMeterDegreeCelsius"
}

/** The heat transfer coefficient or film coefficient, or film effectiveness, in thermodynamics and in mechanics is the proportionality constant between the heat flux and the thermodynamic driving force for the flow of heat (i.e., the temperature difference, ΔT) */
export class HeatTransferCoefficient extends BaseUnit {
    protected value: number;
    private wattspersquaremeterkelvinLazy: number | null = null;
    private wattspersquaremetercelsiusLazy: number | null = null;
    private btusperhoursquarefootdegreefahrenheitLazy: number | null = null;
    private caloriesperhoursquaremeterdegreecelsiusLazy: number | null = null;
    private kilocaloriesperhoursquaremeterdegreecelsiusLazy: number | null = null;

    /**
     * Create a new HeatTransferCoefficient.
     * @param value The value.
     * @param fromUnit The ‘HeatTransferCoefficient’ unit to create from.
     * The default unit is WattsPerSquareMeterKelvin
     */
    public constructor(value: number, fromUnit: HeatTransferCoefficientUnits = HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of HeatTransferCoefficient is WattsPerSquareMeterKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin {
        return HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin
    }

    /** */
    public get WattsPerSquareMeterKelvin(): number {
        if(this.wattspersquaremeterkelvinLazy !== null){
            return this.wattspersquaremeterkelvinLazy;
        }
        return this.wattspersquaremeterkelvinLazy = this.convertFromBase(HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin);
    }

    /** */
    public get WattsPerSquareMeterCelsius(): number {
        if(this.wattspersquaremetercelsiusLazy !== null){
            return this.wattspersquaremetercelsiusLazy;
        }
        return this.wattspersquaremetercelsiusLazy = this.convertFromBase(HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius);
    }

    /** */
    public get BtusPerHourSquareFootDegreeFahrenheit(): number {
        if(this.btusperhoursquarefootdegreefahrenheitLazy !== null){
            return this.btusperhoursquarefootdegreefahrenheitLazy;
        }
        return this.btusperhoursquarefootdegreefahrenheitLazy = this.convertFromBase(HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit);
    }

    /** */
    public get CaloriesPerHourSquareMeterDegreeCelsius(): number {
        if(this.caloriesperhoursquaremeterdegreecelsiusLazy !== null){
            return this.caloriesperhoursquaremeterdegreecelsiusLazy;
        }
        return this.caloriesperhoursquaremeterdegreecelsiusLazy = this.convertFromBase(HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius);
    }

    /** */
    public get KilocaloriesPerHourSquareMeterDegreeCelsius(): number {
        if(this.kilocaloriesperhoursquaremeterdegreecelsiusLazy !== null){
            return this.kilocaloriesperhoursquaremeterdegreecelsiusLazy;
        }
        return this.kilocaloriesperhoursquaremeterdegreecelsiusLazy = this.convertFromBase(HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius);
    }

    /**
     * Create a new HeatTransferCoefficient instance from a WattsPerSquareMeterKelvin
     *
     * @param value The unit as WattsPerSquareMeterKelvin to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    public static FromWattsPerSquareMeterKelvin(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin);
    }

    /**
     * Create a new HeatTransferCoefficient instance from a WattsPerSquareMeterCelsius
     *
     * @param value The unit as WattsPerSquareMeterCelsius to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    public static FromWattsPerSquareMeterCelsius(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius);
    }

    /**
     * Create a new HeatTransferCoefficient instance from a BtusPerHourSquareFootDegreeFahrenheit
     *
     * @param value The unit as BtusPerHourSquareFootDegreeFahrenheit to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    public static FromBtusPerHourSquareFootDegreeFahrenheit(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit);
    }

    /**
     * Create a new HeatTransferCoefficient instance from a CaloriesPerHourSquareMeterDegreeCelsius
     *
     * @param value The unit as CaloriesPerHourSquareMeterDegreeCelsius to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    public static FromCaloriesPerHourSquareMeterDegreeCelsius(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius);
    }

    /**
     * Create a new HeatTransferCoefficient instance from a KilocaloriesPerHourSquareMeterDegreeCelsius
     *
     * @param value The unit as KilocaloriesPerHourSquareMeterDegreeCelsius to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    public static FromKilocaloriesPerHourSquareMeterDegreeCelsius(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius);
    }

    /**
     * Gets the base unit enumeration associated with HeatTransferCoefficient
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof HeatTransferCoefficientUnits {
        return HeatTransferCoefficientUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin {
        return HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin;
    }

    /**
     * Create API DTO represent a HeatTransferCoefficient unit.
     * @param holdInUnit The specific HeatTransferCoefficient unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: HeatTransferCoefficientUnits = HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin): HeatTransferCoefficientDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a HeatTransferCoefficient unit from an API DTO representation.
     * @param dtoHeatTransferCoefficient The HeatTransferCoefficient API DTO representation
     */
    public static FromDto(dtoHeatTransferCoefficient: HeatTransferCoefficientDto): HeatTransferCoefficient {
        return new HeatTransferCoefficient(dtoHeatTransferCoefficient.value, dtoHeatTransferCoefficient.unit);
    }

    /**
     * Convert HeatTransferCoefficient to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: HeatTransferCoefficientUnits): number {
        switch (toUnit) {
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin: return this.WattsPerSquareMeterKelvin;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius: return this.WattsPerSquareMeterCelsius;
            case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit: return this.BtusPerHourSquareFootDegreeFahrenheit;
            case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius: return this.CaloriesPerHourSquareMeterDegreeCelsius;
            case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius: return this.KilocaloriesPerHourSquareMeterDegreeCelsius;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: HeatTransferCoefficientUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin: return this.value;
                case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius: return this.value;
                case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit: {
                    const v5 = super.internalMultiply(0.3048, 0.3048);
                    const v7 = super.internalMultiply(v5, 3600);
                    const v8 = super.internalDivide(1055.05585262, v7);
                    const v10 = super.internalMultiply(v8, 1.8);
                    return super.internalDivide(this.value, v10);
                }
                case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius: {
                    const v3 = super.internalDivide(this.value, 4.184);
                    return super.internalMultiply(v3, 3600);
                }
                case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius: {
                    const v3 = super.internalDivide(this.value, 4.184);
                    const v5 = super.internalMultiply(v3, 3600);
                    return super.internalDivide(v5, 1000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin: return this.value;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius: return this.value;
            case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit: return this.value / ((1055.05585262 / (0.3048 * 0.3048 * 3600)) * 1.8);
            case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius: return (this.value / 4.184) * 3600;
            case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius: return ((this.value / 4.184) * 3600) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: HeatTransferCoefficientUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin: return value;
                case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius: return value;
                case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit: {
                    const v5 = super.internalMultiply(0.3048, 0.3048);
                    const v7 = super.internalMultiply(v5, 3600);
                    const v8 = super.internalDivide(1055.05585262, v7);
                    const v10 = super.internalMultiply(v8, 1.8);
                    return super.internalMultiply(value, v10);
                }
                case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius: {
                    const v3 = super.internalMultiply(value, 4.184);
                    return super.internalDivide(v3, 3600);
                }
                case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius: {
                    const v3 = super.internalMultiply(value, 4.184);
                    const v5 = super.internalDivide(v3, 3600);
                    return super.internalMultiply(v5, 1000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin: return value;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius: return value;
            case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit: return value * ((1055.05585262 / (0.3048 * 0.3048 * 3600)) * 1.8);
            case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius: return (value * 4.184) / 3600;
            case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius: return ((value * 4.184) / 3600) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the HeatTransferCoefficient to string.
     * Note! the default format for HeatTransferCoefficient is WattsPerSquareMeterKelvin.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the HeatTransferCoefficient.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the HeatTransferCoefficient.
     */
    public toString(unit: HeatTransferCoefficientUnits = HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:
                return super.truncateFractionDigits(this.WattsPerSquareMeterKelvin, options as ToStringOptions) + ` W/(m²·K)`;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:
                return super.truncateFractionDigits(this.WattsPerSquareMeterCelsius, options as ToStringOptions) + ` W/(m²·°C)`;
            case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit:
                return super.truncateFractionDigits(this.BtusPerHourSquareFootDegreeFahrenheit, options as ToStringOptions) + ` Btu/(h·ft²·°F)`;
            case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius:
                return super.truncateFractionDigits(this.CaloriesPerHourSquareMeterDegreeCelsius, options as ToStringOptions) + ` kcal/(h·m²·°C)`;
            case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius:
                return super.truncateFractionDigits(this.KilocaloriesPerHourSquareMeterDegreeCelsius, options as ToStringOptions) + ` kkcal/(h·m²·°C)`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get HeatTransferCoefficient unit abbreviation.
     * Note! the default abbreviation for HeatTransferCoefficient is WattsPerSquareMeterKelvin.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the HeatTransferCoefficient.
     * @returns The abbreviation string of HeatTransferCoefficient.
     */
    public getUnitAbbreviation(unitAbbreviation: HeatTransferCoefficientUnits = HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin): string {

        switch (unitAbbreviation) {
            
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:
                return `W/(m²·K)`;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:
                return `W/(m²·°C)`;
            case HeatTransferCoefficientUnits.BtusPerHourSquareFootDegreeFahrenheit:
                return `Btu/(h·ft²·°F)`;
            case HeatTransferCoefficientUnits.CaloriesPerHourSquareMeterDegreeCelsius:
                return `kcal/(h·m²·°C)`;
            case HeatTransferCoefficientUnits.KilocaloriesPerHourSquareMeterDegreeCelsius:
                return `kkcal/(h·m²·°C)`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given HeatTransferCoefficient are equals to the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns True if the given HeatTransferCoefficient are equal to the current HeatTransferCoefficient.
     */
    public equals(heatTransferCoefficient: HeatTransferCoefficient): boolean {
        return super.internalEquals(this.value, heatTransferCoefficient.BaseValue);
    }

    /**
     * Compare the given HeatTransferCoefficient against the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns 0 if they are equal, -1 if the current HeatTransferCoefficient is less then other, 1 if the current HeatTransferCoefficient is greater then other.
     */
    public compareTo(heatTransferCoefficient: HeatTransferCoefficient): number {
        return super.internalCompareTo(this.value, heatTransferCoefficient.BaseValue);
    }

    /**
     * Add the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    public add(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient {
        return new HeatTransferCoefficient(super.internalAdd(this.value, heatTransferCoefficient.BaseValue))
    }

    /**
     * Subtract the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    public subtract(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient {
        return new HeatTransferCoefficient(super.internalSubtract(this.value, heatTransferCoefficient.BaseValue))
    }

    /**
     * Multiply the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    public multiply(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient {
        return new HeatTransferCoefficient(super.internalMultiply(this.value, heatTransferCoefficient.BaseValue))
    }

    /**
     * Divide the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    public divide(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient {
        return new HeatTransferCoefficient(super.internalDivide(this.value, heatTransferCoefficient.BaseValue))
    }

    /**
     * Modulo the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    public modulo(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient {
        return new HeatTransferCoefficient(super.internalModulo(this.value, heatTransferCoefficient.BaseValue))
    }

    /**
     * Pow the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    public pow(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient {
        return new HeatTransferCoefficient(super.internalPow(this.value, heatTransferCoefficient.BaseValue))
    }
}
