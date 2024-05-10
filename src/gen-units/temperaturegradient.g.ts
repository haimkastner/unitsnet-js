import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a TemperatureGradient */
export interface TemperatureGradientDto {
    /** The value of the TemperatureGradient */
    value: number;
    /**  The specific unit that the TemperatureGradient value is representing */
    unit: TemperatureGradientUnits;
}

/** TemperatureGradientUnits enumeration */
export enum TemperatureGradientUnits {
    /** */
    KelvinsPerMeter = "KelvinPerMeter",
    /** */
    DegreesCelciusPerMeter = "DegreeCelsiusPerMeter",
    /** */
    DegreesFahrenheitPerFoot = "DegreeFahrenheitPerFoot",
    /** */
    DegreesCelciusPerKilometer = "DegreeCelsiusPerKilometer"
}

/** The rate of change of temperature with displacement in a given direction (as with increase of height) */
export class TemperatureGradient extends BaseUnit {
    protected value: number;
    private kelvinspermeterLazy: number | null = null;
    private degreescelciuspermeterLazy: number | null = null;
    private degreesfahrenheitperfootLazy: number | null = null;
    private degreescelciusperkilometerLazy: number | null = null;

    /**
     * Create a new TemperatureGradient.
     * @param value The value.
     * @param fromUnit The ‘TemperatureGradient’ unit to create from.
     * The default unit is KelvinsPerMeter
     */
    public constructor(value: number, fromUnit: TemperatureGradientUnits = TemperatureGradientUnits.KelvinsPerMeter) {

        super();
        if (Number.isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of TemperatureGradient is KelvinsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get KelvinsPerMeter(): number {
        if(this.kelvinspermeterLazy !== null){
            return this.kelvinspermeterLazy;
        }
        return this.kelvinspermeterLazy = this.convertFromBase(TemperatureGradientUnits.KelvinsPerMeter);
    }

    /** */
    public get DegreesCelciusPerMeter(): number {
        if(this.degreescelciuspermeterLazy !== null){
            return this.degreescelciuspermeterLazy;
        }
        return this.degreescelciuspermeterLazy = this.convertFromBase(TemperatureGradientUnits.DegreesCelciusPerMeter);
    }

    /** */
    public get DegreesFahrenheitPerFoot(): number {
        if(this.degreesfahrenheitperfootLazy !== null){
            return this.degreesfahrenheitperfootLazy;
        }
        return this.degreesfahrenheitperfootLazy = this.convertFromBase(TemperatureGradientUnits.DegreesFahrenheitPerFoot);
    }

    /** */
    public get DegreesCelciusPerKilometer(): number {
        if(this.degreescelciusperkilometerLazy !== null){
            return this.degreescelciusperkilometerLazy;
        }
        return this.degreescelciusperkilometerLazy = this.convertFromBase(TemperatureGradientUnits.DegreesCelciusPerKilometer);
    }

    /**
     * Create a new TemperatureGradient instance from a KelvinsPerMeter
     *
     * @param value The unit as KelvinsPerMeter to create a new TemperatureGradient from.
     * @returns The new TemperatureGradient instance.
     */
    public static FromKelvinsPerMeter(value: number): TemperatureGradient {
        return new TemperatureGradient(value, TemperatureGradientUnits.KelvinsPerMeter);
    }

    /**
     * Create a new TemperatureGradient instance from a DegreesCelciusPerMeter
     *
     * @param value The unit as DegreesCelciusPerMeter to create a new TemperatureGradient from.
     * @returns The new TemperatureGradient instance.
     */
    public static FromDegreesCelciusPerMeter(value: number): TemperatureGradient {
        return new TemperatureGradient(value, TemperatureGradientUnits.DegreesCelciusPerMeter);
    }

    /**
     * Create a new TemperatureGradient instance from a DegreesFahrenheitPerFoot
     *
     * @param value The unit as DegreesFahrenheitPerFoot to create a new TemperatureGradient from.
     * @returns The new TemperatureGradient instance.
     */
    public static FromDegreesFahrenheitPerFoot(value: number): TemperatureGradient {
        return new TemperatureGradient(value, TemperatureGradientUnits.DegreesFahrenheitPerFoot);
    }

    /**
     * Create a new TemperatureGradient instance from a DegreesCelciusPerKilometer
     *
     * @param value The unit as DegreesCelciusPerKilometer to create a new TemperatureGradient from.
     * @returns The new TemperatureGradient instance.
     */
    public static FromDegreesCelciusPerKilometer(value: number): TemperatureGradient {
        return new TemperatureGradient(value, TemperatureGradientUnits.DegreesCelciusPerKilometer);
    }

    /**
     * Gets the base unit enumeration associated with TemperatureGradient
     * @returns The unit enumeration that can be used to interact with this type
     */
    public static getUnitEnum(): typeof TemperatureGradientUnits {
        return TemperatureGradientUnits;
    }

    /**
     * Create API DTO represent a TemperatureGradient unit.
     * @param holdInUnit The specific TemperatureGradient unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: TemperatureGradientUnits = TemperatureGradientUnits.KelvinsPerMeter): TemperatureGradientDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a TemperatureGradient unit from an API DTO representation.
     * @param dtoTemperatureGradient The TemperatureGradient API DTO representation
     */
    public static FromDto(dtoTemperatureGradient: TemperatureGradientDto): TemperatureGradient {
        return new TemperatureGradient(dtoTemperatureGradient.value, dtoTemperatureGradient.unit);
    }

    /**
     * Convert TemperatureGradient to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: TemperatureGradientUnits): number {
        switch (toUnit) {
            case TemperatureGradientUnits.KelvinsPerMeter: return this.KelvinsPerMeter;
            case TemperatureGradientUnits.DegreesCelciusPerMeter: return this.DegreesCelciusPerMeter;
            case TemperatureGradientUnits.DegreesFahrenheitPerFoot: return this.DegreesFahrenheitPerFoot;
            case TemperatureGradientUnits.DegreesCelciusPerKilometer: return this.DegreesCelciusPerKilometer;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: TemperatureGradientUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case TemperatureGradientUnits.KelvinsPerMeter: return this.value;
                case TemperatureGradientUnits.DegreesCelciusPerMeter: return this.value;
                case TemperatureGradientUnits.DegreesFahrenheitPerFoot: {
                    const v3 = super.internalMultiply(this.value, 0.3048);
                    const v6 = super.internalDivide(9, 5);
                    return super.internalMultiply(v3, v6);
                }
                case TemperatureGradientUnits.DegreesCelciusPerKilometer: return super.internalMultiply(this.value, 1e3);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case TemperatureGradientUnits.KelvinsPerMeter: return this.value;
            case TemperatureGradientUnits.DegreesCelciusPerMeter: return this.value;
            case TemperatureGradientUnits.DegreesFahrenheitPerFoot: return (this.value * 0.3048) * 9 / 5;
            case TemperatureGradientUnits.DegreesCelciusPerKilometer: return this.value * 1e3;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: TemperatureGradientUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case TemperatureGradientUnits.KelvinsPerMeter: return value;
                case TemperatureGradientUnits.DegreesCelciusPerMeter: return value;
                case TemperatureGradientUnits.DegreesFahrenheitPerFoot: {
                    const v3 = super.internalDivide(value, 0.3048);
                    const v6 = super.internalDivide(5, 9);
                    return super.internalMultiply(v3, v6);
                }
                case TemperatureGradientUnits.DegreesCelciusPerKilometer: return super.internalDivide(value, 1e3);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case TemperatureGradientUnits.KelvinsPerMeter: return value;
            case TemperatureGradientUnits.DegreesCelciusPerMeter: return value;
            case TemperatureGradientUnits.DegreesFahrenheitPerFoot: return (value / 0.3048) * 5 / 9;
            case TemperatureGradientUnits.DegreesCelciusPerKilometer: return value / 1e3;
            default: return Number.NaN;
        }
    }

    /**
     * Format the TemperatureGradient to string.
     * Note! the default format for TemperatureGradient is KelvinsPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the TemperatureGradient.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the TemperatureGradient.
     */
    public toString(unit: TemperatureGradientUnits = TemperatureGradientUnits.KelvinsPerMeter, fractionalDigits?: number): string {

        switch (unit) {
            
            case TemperatureGradientUnits.KelvinsPerMeter:
                return super.truncateFractionDigits(this.KelvinsPerMeter, fractionalDigits) + ` ∆°K/m`;
            case TemperatureGradientUnits.DegreesCelciusPerMeter:
                return super.truncateFractionDigits(this.DegreesCelciusPerMeter, fractionalDigits) + ` ∆°C/m`;
            case TemperatureGradientUnits.DegreesFahrenheitPerFoot:
                return super.truncateFractionDigits(this.DegreesFahrenheitPerFoot, fractionalDigits) + ` ∆°F/ft`;
            case TemperatureGradientUnits.DegreesCelciusPerKilometer:
                return super.truncateFractionDigits(this.DegreesCelciusPerKilometer, fractionalDigits) + ` ∆°C/km`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get TemperatureGradient unit abbreviation.
     * Note! the default abbreviation for TemperatureGradient is KelvinsPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the TemperatureGradient.
     * @returns The abbreviation string of TemperatureGradient.
     */
    public getUnitAbbreviation(unitAbbreviation: TemperatureGradientUnits = TemperatureGradientUnits.KelvinsPerMeter): string {

        switch (unitAbbreviation) {
            
            case TemperatureGradientUnits.KelvinsPerMeter:
                return `∆°K/m`;
            case TemperatureGradientUnits.DegreesCelciusPerMeter:
                return `∆°C/m`;
            case TemperatureGradientUnits.DegreesFahrenheitPerFoot:
                return `∆°F/ft`;
            case TemperatureGradientUnits.DegreesCelciusPerKilometer:
                return `∆°C/km`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given TemperatureGradient are equals to the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns True if the given TemperatureGradient are equal to the current TemperatureGradient.
     */
    public equals(temperatureGradient: TemperatureGradient): boolean {
        return super.internalEquals(this.value, temperatureGradient.BaseValue);
    }

    /**
     * Compare the given TemperatureGradient against the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns 0 if they are equal, -1 if the current TemperatureGradient is less then other, 1 if the current TemperatureGradient is greater then other.
     */
    public compareTo(temperatureGradient: TemperatureGradient): number {
        return super.internalCompareTo(this.value, temperatureGradient.BaseValue);
    }

    /**
     * Add the given TemperatureGradient with the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns A new TemperatureGradient instance with the results.
     */
    public add(temperatureGradient: TemperatureGradient): TemperatureGradient {
        return new TemperatureGradient(super.internalAdd(this.value, temperatureGradient.BaseValue))
    }

    /**
     * Subtract the given TemperatureGradient with the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns A new TemperatureGradient instance with the results.
     */
    public subtract(temperatureGradient: TemperatureGradient): TemperatureGradient {
        return new TemperatureGradient(super.internalSubtract(this.value, temperatureGradient.BaseValue))
    }

    /**
     * Multiply the given TemperatureGradient with the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns A new TemperatureGradient instance with the results.
     */
    public multiply(temperatureGradient: TemperatureGradient): TemperatureGradient {
        return new TemperatureGradient(super.internalMultiply(this.value, temperatureGradient.BaseValue))
    }

    /**
     * Divide the given TemperatureGradient with the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns A new TemperatureGradient instance with the results.
     */
    public divide(temperatureGradient: TemperatureGradient): TemperatureGradient {
        return new TemperatureGradient(super.internalDivide(this.value, temperatureGradient.BaseValue))
    }

    /**
     * Modulo the given TemperatureGradient with the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns A new TemperatureGradient instance with the results.
     */
    public modulo(temperatureGradient: TemperatureGradient): TemperatureGradient {
        return new TemperatureGradient(super.internalModulo(this.value, temperatureGradient.BaseValue))
    }

    /**
     * Pow the given TemperatureGradient with the current TemperatureGradient.
     * @param temperatureGradient The other TemperatureGradient.
     * @returns A new TemperatureGradient instance with the results.
     */
    public pow(temperatureGradient: TemperatureGradient): TemperatureGradient {
        return new TemperatureGradient(super.internalPow(this.value, temperatureGradient.BaseValue))
    }
}
