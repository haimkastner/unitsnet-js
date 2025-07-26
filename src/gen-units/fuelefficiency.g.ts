import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

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
    KilometersPerLiter = "KilometerPerLiter"
}

/** In the context of transport, fuel economy is the energy efficiency of a particular vehicle, given as a ratio of distance traveled per unit of fuel consumed. In most countries, using the metric system, fuel economy is stated as "fuel consumption" in liters per 100 kilometers (L/100 km) or kilometers per liter (km/L or kmpl). In countries using non-metric system, fuel economy is expressed in miles per gallon (mpg) (imperial galon or US galon). */
export class FuelEfficiency extends BaseUnit {
    protected value: number;
    private litersper100kilometersLazy: number | null = null;
    private milesperusgallonLazy: number | null = null;
    private milesperukgallonLazy: number | null = null;
    private kilometersperliterLazy: number | null = null;

    /**
     * Create a new FuelEfficiency.
     * @param value The value.
     * @param fromUnit The ‘FuelEfficiency’ unit to create from.
     * The default unit is KilometersPerLiter
     */
    public constructor(value: number, fromUnit: FuelEfficiencyUnits = FuelEfficiencyUnits.KilometersPerLiter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of FuelEfficiency is KilometersPerLiter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): FuelEfficiencyUnits.KilometersPerLiter {
        return FuelEfficiencyUnits.KilometersPerLiter
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
    public get KilometersPerLiter(): number {
        if(this.kilometersperliterLazy !== null){
            return this.kilometersperliterLazy;
        }
        return this.kilometersperliterLazy = this.convertFromBase(FuelEfficiencyUnits.KilometersPerLiter);
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
     * Create a new FuelEfficiency instance from a KilometersPerLiter
     *
     * @param value The unit as KilometersPerLiter to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    public static FromKilometersPerLiter(value: number): FuelEfficiency {
        return new FuelEfficiency(value, FuelEfficiencyUnits.KilometersPerLiter);
    }

    /**
     * Gets the base unit enumeration associated with FuelEfficiency
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof FuelEfficiencyUnits {
        return FuelEfficiencyUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): FuelEfficiencyUnits.KilometersPerLiter {
        return FuelEfficiencyUnits.KilometersPerLiter;
    }

    /**
     * Create API DTO represent a FuelEfficiency unit.
     * @param holdInUnit The specific FuelEfficiency unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: FuelEfficiencyUnits = FuelEfficiencyUnits.KilometersPerLiter): FuelEfficiencyDto {
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
            case FuelEfficiencyUnits.KilometersPerLiter: return this.KilometersPerLiter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: FuelEfficiencyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case FuelEfficiencyUnits.LitersPer100Kilometers: return super.internalDivide(100, this.value);
                case FuelEfficiencyUnits.MilesPerUsGallon: {
                    const v4 = super.internalDivide(3.785411784, 1.609344);
                    return super.internalMultiply(this.value, v4);
                }
                case FuelEfficiencyUnits.MilesPerUkGallon: {
                    const v4 = super.internalDivide(4.54609, 1.609344);
                    return super.internalMultiply(this.value, v4);
                }
                case FuelEfficiencyUnits.KilometersPerLiter: return this.value;
                default: return Number.NaN;
            }
        switch (toUnit) {
            case FuelEfficiencyUnits.LitersPer100Kilometers: return 100 / this.value;
            case FuelEfficiencyUnits.MilesPerUsGallon: return this.value * 3.785411784 / 1.609344;
            case FuelEfficiencyUnits.MilesPerUkGallon: return this.value * 4.54609 / 1.609344;
            case FuelEfficiencyUnits.KilometersPerLiter: return this.value;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: FuelEfficiencyUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case FuelEfficiencyUnits.LitersPer100Kilometers: return super.internalDivide(100, value);
                case FuelEfficiencyUnits.MilesPerUsGallon: {
                    const v4 = super.internalDivide(1.609344, 3.785411784);
                    return super.internalMultiply(value, v4);
                }
                case FuelEfficiencyUnits.MilesPerUkGallon: {
                    const v4 = super.internalDivide(1.609344, 4.54609);
                    return super.internalMultiply(value, v4);
                }
                case FuelEfficiencyUnits.KilometersPerLiter: return value;
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case FuelEfficiencyUnits.LitersPer100Kilometers: return 100 / value;
            case FuelEfficiencyUnits.MilesPerUsGallon: return value * 1.609344 / 3.785411784;
            case FuelEfficiencyUnits.MilesPerUkGallon: return value * 1.609344 / 4.54609;
            case FuelEfficiencyUnits.KilometersPerLiter: return value;
            default: return Number.NaN;
        }
    }

    /**
     * Format the FuelEfficiency to string.
     * Note! the default format for FuelEfficiency is KilometersPerLiter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the FuelEfficiency.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the FuelEfficiency.
     */
    public toString(unit: FuelEfficiencyUnits = FuelEfficiencyUnits.KilometersPerLiter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case FuelEfficiencyUnits.LitersPer100Kilometers:
                return super.truncateFractionDigits(this.LitersPer100Kilometers, options as ToStringOptions) + ` l/100km`;
            case FuelEfficiencyUnits.MilesPerUsGallon:
                return super.truncateFractionDigits(this.MilesPerUsGallon, options as ToStringOptions) + ` mpg (U.S.)`;
            case FuelEfficiencyUnits.MilesPerUkGallon:
                return super.truncateFractionDigits(this.MilesPerUkGallon, options as ToStringOptions) + ` mpg (imp.)`;
            case FuelEfficiencyUnits.KilometersPerLiter:
                return super.truncateFractionDigits(this.KilometersPerLiter, options as ToStringOptions) + ` km/l`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get FuelEfficiency unit abbreviation.
     * Note! the default abbreviation for FuelEfficiency is KilometersPerLiter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the FuelEfficiency.
     * @returns The abbreviation string of FuelEfficiency.
     */
    public getUnitAbbreviation(unitAbbreviation: FuelEfficiencyUnits = FuelEfficiencyUnits.KilometersPerLiter): string {

        switch (unitAbbreviation) {
            
            case FuelEfficiencyUnits.LitersPer100Kilometers:
                return `l/100km`;
            case FuelEfficiencyUnits.MilesPerUsGallon:
                return `mpg (U.S.)`;
            case FuelEfficiencyUnits.MilesPerUkGallon:
                return `mpg (imp.)`;
            case FuelEfficiencyUnits.KilometersPerLiter:
                return `km/l`;
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
