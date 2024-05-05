import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a FuelEfficiency */
export interface FuelEfficiencyDto {
    /** The value of the FuelEfficiency */
    value: number;
    /**  The specific unit that the FuelEfficiency value is representing */
    unit: FuelEfficiencyUnits;
}

/** FuelEfficiencyUnits enumeration */
export enum FuelEfficiencyUnits {
    /** */
    LitersPer100Kilometers = "LiterPer100Kilometers",
    /** */
    MilesPerUsGallon = "MilePerUsGallon",
    /** */
    MilesPerUkGallon = "MilePerUkGallon",
    /** */
    KilometersPerLiters = "KilometerPerLiter"
}

/** Fuel efficiency is a form of thermal efficiency, meaning the ratio from effort to result of a process that converts chemical potential energy contained in a carrier (fuel) into kinetic energy or work. Fuel economy is stated as "fuel consumption" in liters per 100 kilometers (L/100 km). In countries using non-metric system, fuel economy is expressed in miles per gallon (mpg) (imperial galon or US galon). */
export class FuelEfficiency extends BaseUnit {
    private value: number;
    private litersper100kilometersLazy: number | null = null;
    private milesperusgallonLazy: number | null = null;
    private milesperukgallonLazy: number | null = null;
    private kilometersperlitersLazy: number | null = null;

    /**
     * Create a new FuelEfficiency.
     * @param value The value.
     * @param fromUnit The ‘FuelEfficiency’ unit to create from.
     * The default unit is LitersPer100Kilometers
     */
    public constructor(value: number, fromUnit: FuelEfficiencyUnits = FuelEfficiencyUnits.LitersPer100Kilometers) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of FuelEfficiency is LitersPer100Kilometers.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get LitersPer100Kilometers(): number {
        if(this.litersper100kilometersLazy !== null){
            return this.litersper100kilometersLazy;
        }
        return this.litersper100kilometersLazy = this.convertFromBase(FuelEfficiencyUnits.LitersPer100Kilometers);
    }

    /** */
    public get MilesPerUsGallon(): number {
        if(this.milesperusgallonLazy !== null){
            return this.milesperusgallonLazy;
        }
        return this.milesperusgallonLazy = this.convertFromBase(FuelEfficiencyUnits.MilesPerUsGallon);
    }

    /** */
    public get MilesPerUkGallon(): number {
        if(this.milesperukgallonLazy !== null){
            return this.milesperukgallonLazy;
        }
        return this.milesperukgallonLazy = this.convertFromBase(FuelEfficiencyUnits.MilesPerUkGallon);
    }

    /** */
    public get KilometersPerLiters(): number {
        if(this.kilometersperlitersLazy !== null){
            return this.kilometersperlitersLazy;
        }
        return this.kilometersperlitersLazy = this.convertFromBase(FuelEfficiencyUnits.KilometersPerLiters);
    }

    /**
     * Create a new FuelEfficiency instance from a LitersPer100Kilometers
     *
     * @param value The unit as LitersPer100Kilometers to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    public static FromLitersPer100Kilometers(value: number): FuelEfficiency {
        return new FuelEfficiency(value, FuelEfficiencyUnits.LitersPer100Kilometers);
    }

    /**
     * Create a new FuelEfficiency instance from a MilesPerUsGallon
     *
     * @param value The unit as MilesPerUsGallon to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    public static FromMilesPerUsGallon(value: number): FuelEfficiency {
        return new FuelEfficiency(value, FuelEfficiencyUnits.MilesPerUsGallon);
    }

    /**
     * Create a new FuelEfficiency instance from a MilesPerUkGallon
     *
     * @param value The unit as MilesPerUkGallon to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    public static FromMilesPerUkGallon(value: number): FuelEfficiency {
        return new FuelEfficiency(value, FuelEfficiencyUnits.MilesPerUkGallon);
    }

    /**
     * Create a new FuelEfficiency instance from a KilometersPerLiters
     *
     * @param value The unit as KilometersPerLiters to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    public static FromKilometersPerLiters(value: number): FuelEfficiency {
        return new FuelEfficiency(value, FuelEfficiencyUnits.KilometersPerLiters);
    }

    /**
     * Create API DTO represent a FuelEfficiency unit.
     * @param holdInUnit The specific FuelEfficiency unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: FuelEfficiencyUnits = FuelEfficiencyUnits.LitersPer100Kilometers): FuelEfficiencyDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a FuelEfficiency unit from an API DTO representation.
     * @param dtoFuelEfficiency The FuelEfficiency API DTO representation
     */
    public static FromDto(dtoFuelEfficiency: FuelEfficiencyDto): FuelEfficiency {
        return new FuelEfficiency(dtoFuelEfficiency.value, dtoFuelEfficiency.unit);
    }

    /**
     * Convert FuelEfficiency to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: FuelEfficiencyUnits): number {
        switch (toUnit) {
            case FuelEfficiencyUnits.LitersPer100Kilometers: return this.LitersPer100Kilometers;
            case FuelEfficiencyUnits.MilesPerUsGallon: return this.MilesPerUsGallon;
            case FuelEfficiencyUnits.MilesPerUkGallon: return this.MilesPerUkGallon;
            case FuelEfficiencyUnits.KilometersPerLiters: return this.KilometersPerLiters;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: FuelEfficiencyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case FuelEfficiencyUnits.LitersPer100Kilometers: return this.value;
                case FuelEfficiencyUnits.MilesPerUsGallon: {
                    const value3 = super.internalMultiply(100, 3.785411784);
                    const value6 = super.internalMultiply(1.609344, this.value);
                    return super.internalDivide(value3, value6);
                }
                case FuelEfficiencyUnits.MilesPerUkGallon: {
                    const value3 = super.internalMultiply(100, 4.54609188);
                    const value6 = super.internalMultiply(1.609344, this.value);
                    return super.internalDivide(value3, value6);
                }
                case FuelEfficiencyUnits.KilometersPerLiters: return super.internalDivide(100, this.value);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case FuelEfficiencyUnits.LitersPer100Kilometers: return this.value;
            case FuelEfficiencyUnits.MilesPerUsGallon: return (100 * 3.785411784) / (1.609344 * this.value);
            case FuelEfficiencyUnits.MilesPerUkGallon: return (100 * 4.54609188) / (1.609344 * this.value);
            case FuelEfficiencyUnits.KilometersPerLiters: return 100 / this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: FuelEfficiencyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case FuelEfficiencyUnits.LitersPer100Kilometers: return value;
                case FuelEfficiencyUnits.MilesPerUsGallon: {
                    const value3 = super.internalMultiply(100, 3.785411784);
                    const value6 = super.internalMultiply(1.609344, value);
                    return super.internalDivide(value3, value6);
                }
                case FuelEfficiencyUnits.MilesPerUkGallon: {
                    const value3 = super.internalMultiply(100, 4.54609188);
                    const value6 = super.internalMultiply(1.609344, value);
                    return super.internalDivide(value3, value6);
                }
                case FuelEfficiencyUnits.KilometersPerLiters: return super.internalDivide(100, value);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case FuelEfficiencyUnits.LitersPer100Kilometers: return value;
            case FuelEfficiencyUnits.MilesPerUsGallon: return (100 * 3.785411784) / (1.609344 * value);
            case FuelEfficiencyUnits.MilesPerUkGallon: return (100 * 4.54609188) / (1.609344 * value);
            case FuelEfficiencyUnits.KilometersPerLiters: return 100 / value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the FuelEfficiency to string.
     * Note! the default format for FuelEfficiency is LitersPer100Kilometers.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the FuelEfficiency.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the FuelEfficiency.
     */
    public toString(unit: FuelEfficiencyUnits = FuelEfficiencyUnits.LitersPer100Kilometers, fractionalDigits?: number): string {

        switch (unit) {
            
            case FuelEfficiencyUnits.LitersPer100Kilometers:
                return super.truncateFractionDigits(this.LitersPer100Kilometers, fractionalDigits) + ` L/100km`;
            case FuelEfficiencyUnits.MilesPerUsGallon:
                return super.truncateFractionDigits(this.MilesPerUsGallon, fractionalDigits) + ` mpg (U.S.)`;
            case FuelEfficiencyUnits.MilesPerUkGallon:
                return super.truncateFractionDigits(this.MilesPerUkGallon, fractionalDigits) + ` mpg (imp.)`;
            case FuelEfficiencyUnits.KilometersPerLiters:
                return super.truncateFractionDigits(this.KilometersPerLiters, fractionalDigits) + ` km/L`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get FuelEfficiency unit abbreviation.
     * Note! the default abbreviation for FuelEfficiency is LitersPer100Kilometers.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the FuelEfficiency.
     * @returns The abbreviation string of FuelEfficiency.
     */
    public getUnitAbbreviation(unitAbbreviation: FuelEfficiencyUnits = FuelEfficiencyUnits.LitersPer100Kilometers): string {

        switch (unitAbbreviation) {
            
            case FuelEfficiencyUnits.LitersPer100Kilometers:
                return `L/100km`;
            case FuelEfficiencyUnits.MilesPerUsGallon:
                return `mpg (U.S.)`;
            case FuelEfficiencyUnits.MilesPerUkGallon:
                return `mpg (imp.)`;
            case FuelEfficiencyUnits.KilometersPerLiters:
                return `km/L`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given FuelEfficiency are equals to the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns True if the given FuelEfficiency are equal to the current FuelEfficiency.
     */
    public equals(fuelEfficiency: FuelEfficiency): boolean {
        return super.internalEquals(this.value, fuelEfficiency.BaseValue);
    }

    /**
     * Compare the given FuelEfficiency against the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns 0 if they are equal, -1 if the current FuelEfficiency is less then other, 1 if the current FuelEfficiency is greater then other.
     */
    public compareTo(fuelEfficiency: FuelEfficiency): number {
        return super.internalCompareTo(this.value, fuelEfficiency.BaseValue);
    }

    /**
     * Add the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    public add(fuelEfficiency: FuelEfficiency): FuelEfficiency {
        return new FuelEfficiency(super.internalAdd(this.value, fuelEfficiency.BaseValue))
    }

    /**
     * Subtract the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    public subtract(fuelEfficiency: FuelEfficiency): FuelEfficiency {
        return new FuelEfficiency(super.internalSubtract(this.value, fuelEfficiency.BaseValue))
    }

    /**
     * Multiply the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    public multiply(fuelEfficiency: FuelEfficiency): FuelEfficiency {
        return new FuelEfficiency(super.internalMultiply(this.value, fuelEfficiency.BaseValue))
    }

    /**
     * Divide the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    public divide(fuelEfficiency: FuelEfficiency): FuelEfficiency {
        return new FuelEfficiency(super.internalDivide(this.value, fuelEfficiency.BaseValue))
    }

    /**
     * Modulo the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    public modulo(fuelEfficiency: FuelEfficiency): FuelEfficiency {
        return new FuelEfficiency(super.internalModulo(this.value, fuelEfficiency.BaseValue))
    }

    /**
     * Pow the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    public pow(fuelEfficiency: FuelEfficiency): FuelEfficiency {
        return new FuelEfficiency(super.internalPow(this.value, fuelEfficiency.BaseValue))
    }
}
