import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a VolumetricHeatCapacity */
export interface VolumetricHeatCapacityDto {
    /** The value of the VolumetricHeatCapacity */
    value: number;
    /**  The specific unit that the VolumetricHeatCapacity value is representing */
    unit: VolumetricHeatCapacityUnits;
}

/** VolumetricHeatCapacityUnits enumeration */
export enum VolumetricHeatCapacityUnits {
    /** */
    JoulesPerCubicMeterKelvin = "JoulePerCubicMeterKelvin",
    /** */
    JoulesPerCubicMeterDegreeCelsius = "JoulePerCubicMeterDegreeCelsius",
    /** */
    CaloriesPerCubicCentimeterDegreeCelsius = "CaloriePerCubicCentimeterDegreeCelsius",
    /** */
    BtusPerCubicFootDegreeFahrenheit = "BtuPerCubicFootDegreeFahrenheit",
    /** */
    KilojoulesPerCubicMeterKelvin = "KilojoulePerCubicMeterKelvin",
    /** */
    MegajoulesPerCubicMeterKelvin = "MegajoulePerCubicMeterKelvin",
    /** */
    KilojoulesPerCubicMeterDegreeCelsius = "KilojoulePerCubicMeterDegreeCelsius",
    /** */
    MegajoulesPerCubicMeterDegreeCelsius = "MegajoulePerCubicMeterDegreeCelsius",
    /** */
    KilocaloriesPerCubicCentimeterDegreeCelsius = "KilocaloriePerCubicCentimeterDegreeCelsius"
}

/** The volumetric heat capacity is the amount of energy that must be added, in the form of heat, to one unit of volume of the material in order to cause an increase of one unit in its temperature. */
export class VolumetricHeatCapacity extends BaseUnit {
    protected value: number;
    private joulespercubicmeterkelvinLazy: number | null = null;
    private joulespercubicmeterdegreecelsiusLazy: number | null = null;
    private caloriespercubiccentimeterdegreecelsiusLazy: number | null = null;
    private btuspercubicfootdegreefahrenheitLazy: number | null = null;
    private kilojoulespercubicmeterkelvinLazy: number | null = null;
    private megajoulespercubicmeterkelvinLazy: number | null = null;
    private kilojoulespercubicmeterdegreecelsiusLazy: number | null = null;
    private megajoulespercubicmeterdegreecelsiusLazy: number | null = null;
    private kilocaloriespercubiccentimeterdegreecelsiusLazy: number | null = null;

    /**
     * Create a new VolumetricHeatCapacity.
     * @param value The value.
     * @param fromUnit The ‘VolumetricHeatCapacity’ unit to create from.
     * The default unit is JoulesPerCubicMeterKelvin
     */
    public constructor(value: number, fromUnit: VolumetricHeatCapacityUnits = VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of VolumetricHeatCapacity is JoulesPerCubicMeterKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin {
        return VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin
    }

    /** */
    public get JoulesPerCubicMeterKelvin(): number {
        if(this.joulespercubicmeterkelvinLazy !== null){
            return this.joulespercubicmeterkelvinLazy;
        }
        return this.joulespercubicmeterkelvinLazy = this.convertFromBase(VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin);
    }

    /** */
    public get JoulesPerCubicMeterDegreeCelsius(): number {
        if(this.joulespercubicmeterdegreecelsiusLazy !== null){
            return this.joulespercubicmeterdegreecelsiusLazy;
        }
        return this.joulespercubicmeterdegreecelsiusLazy = this.convertFromBase(VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius);
    }

    /** */
    public get CaloriesPerCubicCentimeterDegreeCelsius(): number {
        if(this.caloriespercubiccentimeterdegreecelsiusLazy !== null){
            return this.caloriespercubiccentimeterdegreecelsiusLazy;
        }
        return this.caloriespercubiccentimeterdegreecelsiusLazy = this.convertFromBase(VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius);
    }

    /** */
    public get BtusPerCubicFootDegreeFahrenheit(): number {
        if(this.btuspercubicfootdegreefahrenheitLazy !== null){
            return this.btuspercubicfootdegreefahrenheitLazy;
        }
        return this.btuspercubicfootdegreefahrenheitLazy = this.convertFromBase(VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit);
    }

    /** */
    public get KilojoulesPerCubicMeterKelvin(): number {
        if(this.kilojoulespercubicmeterkelvinLazy !== null){
            return this.kilojoulespercubicmeterkelvinLazy;
        }
        return this.kilojoulespercubicmeterkelvinLazy = this.convertFromBase(VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin);
    }

    /** */
    public get MegajoulesPerCubicMeterKelvin(): number {
        if(this.megajoulespercubicmeterkelvinLazy !== null){
            return this.megajoulespercubicmeterkelvinLazy;
        }
        return this.megajoulespercubicmeterkelvinLazy = this.convertFromBase(VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin);
    }

    /** */
    public get KilojoulesPerCubicMeterDegreeCelsius(): number {
        if(this.kilojoulespercubicmeterdegreecelsiusLazy !== null){
            return this.kilojoulespercubicmeterdegreecelsiusLazy;
        }
        return this.kilojoulespercubicmeterdegreecelsiusLazy = this.convertFromBase(VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius);
    }

    /** */
    public get MegajoulesPerCubicMeterDegreeCelsius(): number {
        if(this.megajoulespercubicmeterdegreecelsiusLazy !== null){
            return this.megajoulespercubicmeterdegreecelsiusLazy;
        }
        return this.megajoulespercubicmeterdegreecelsiusLazy = this.convertFromBase(VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius);
    }

    /** */
    public get KilocaloriesPerCubicCentimeterDegreeCelsius(): number {
        if(this.kilocaloriespercubiccentimeterdegreecelsiusLazy !== null){
            return this.kilocaloriespercubiccentimeterdegreecelsiusLazy;
        }
        return this.kilocaloriespercubiccentimeterdegreecelsiusLazy = this.convertFromBase(VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a JoulesPerCubicMeterKelvin
     *
     * @param value The unit as JoulesPerCubicMeterKelvin to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromJoulesPerCubicMeterKelvin(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a JoulesPerCubicMeterDegreeCelsius
     *
     * @param value The unit as JoulesPerCubicMeterDegreeCelsius to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromJoulesPerCubicMeterDegreeCelsius(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a CaloriesPerCubicCentimeterDegreeCelsius
     *
     * @param value The unit as CaloriesPerCubicCentimeterDegreeCelsius to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromCaloriesPerCubicCentimeterDegreeCelsius(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a BtusPerCubicFootDegreeFahrenheit
     *
     * @param value The unit as BtusPerCubicFootDegreeFahrenheit to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromBtusPerCubicFootDegreeFahrenheit(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a KilojoulesPerCubicMeterKelvin
     *
     * @param value The unit as KilojoulesPerCubicMeterKelvin to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromKilojoulesPerCubicMeterKelvin(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a MegajoulesPerCubicMeterKelvin
     *
     * @param value The unit as MegajoulesPerCubicMeterKelvin to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromMegajoulesPerCubicMeterKelvin(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a KilojoulesPerCubicMeterDegreeCelsius
     *
     * @param value The unit as KilojoulesPerCubicMeterDegreeCelsius to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromKilojoulesPerCubicMeterDegreeCelsius(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a MegajoulesPerCubicMeterDegreeCelsius
     *
     * @param value The unit as MegajoulesPerCubicMeterDegreeCelsius to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromMegajoulesPerCubicMeterDegreeCelsius(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius);
    }

    /**
     * Create a new VolumetricHeatCapacity instance from a KilocaloriesPerCubicCentimeterDegreeCelsius
     *
     * @param value The unit as KilocaloriesPerCubicCentimeterDegreeCelsius to create a new VolumetricHeatCapacity from.
     * @returns The new VolumetricHeatCapacity instance.
     */
    public static FromKilocaloriesPerCubicCentimeterDegreeCelsius(value: number): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(value, VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius);
    }

    /**
     * Gets the base unit enumeration associated with VolumetricHeatCapacity
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof VolumetricHeatCapacityUnits {
        return VolumetricHeatCapacityUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin {
        return VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin;
    }

    /**
     * Create API DTO represent a VolumetricHeatCapacity unit.
     * @param holdInUnit The specific VolumetricHeatCapacity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: VolumetricHeatCapacityUnits = VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin): VolumetricHeatCapacityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a VolumetricHeatCapacity unit from an API DTO representation.
     * @param dtoVolumetricHeatCapacity The VolumetricHeatCapacity API DTO representation
     */
    public static FromDto(dtoVolumetricHeatCapacity: VolumetricHeatCapacityDto): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(dtoVolumetricHeatCapacity.value, dtoVolumetricHeatCapacity.unit);
    }

    /**
     * Convert VolumetricHeatCapacity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: VolumetricHeatCapacityUnits): number {
        switch (toUnit) {
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin: return this.JoulesPerCubicMeterKelvin;
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius: return this.JoulesPerCubicMeterDegreeCelsius;
            case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius: return this.CaloriesPerCubicCentimeterDegreeCelsius;
            case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit: return this.BtusPerCubicFootDegreeFahrenheit;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin: return this.KilojoulesPerCubicMeterKelvin;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin: return this.MegajoulesPerCubicMeterKelvin;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius: return this.KilojoulesPerCubicMeterDegreeCelsius;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius: return this.MegajoulesPerCubicMeterDegreeCelsius;
            case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius: return this.KilocaloriesPerCubicCentimeterDegreeCelsius;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: VolumetricHeatCapacityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin: return this.value;
                case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius: return this.value;
                case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius: return super.internalDivide(this.value, 4.184e6);
                case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit: {
                    const v4 = super.internalDivide(1055.05585262, 0.028316846592);
                    const v6 = super.internalMultiply(v4, 1.8);
                    return super.internalDivide(this.value, v6);
                }
                case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin: return super.internalDivide(this.value, 1000);
                case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin: return super.internalDivide(this.value, 1000000);
                case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius: return super.internalDivide(this.value, 1000);
                case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius: return super.internalDivide(this.value, 1000000);
                case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius: {
                    const v3 = super.internalDivide(this.value, 4.184e6);
                    return super.internalDivide(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin: return this.value;
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius: return this.value;
            case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius: return this.value / 4.184e6;
            case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit: return this.value / ((1055.05585262 / 0.028316846592) * 1.8);
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin: return (this.value) / 1000;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin: return (this.value) / 1000000;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius: return (this.value) / 1000;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius: return (this.value) / 1000000;
            case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius: return (this.value / 4.184e6) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: VolumetricHeatCapacityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin: return value;
                case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius: return value;
                case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius: return super.internalMultiply(value, 4.184e6);
                case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit: {
                    const v4 = super.internalDivide(1055.05585262, 0.028316846592);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1.8);
                }
                case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin: return super.internalMultiply(value, 1000);
                case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin: return super.internalMultiply(value, 1000000);
                case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius: return super.internalMultiply(value, 1000);
                case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius: return super.internalMultiply(value, 1000000);
                case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius: {
                    const v3 = super.internalMultiply(value, 4.184e6);
                    return super.internalMultiply(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin: return value;
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius: return value;
            case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius: return value * 4.184e6;
            case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit: return value * (1055.05585262 / 0.028316846592) * 1.8;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin: return (value) * 1000;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin: return (value) * 1000000;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius: return (value) * 1000;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius: return (value) * 1000000;
            case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius: return (value * 4.184e6) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the VolumetricHeatCapacity to string.
     * Note! the default format for VolumetricHeatCapacity is JoulesPerCubicMeterKelvin.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the VolumetricHeatCapacity.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the VolumetricHeatCapacity.
     */
    public toString(unit: VolumetricHeatCapacityUnits = VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin:
                return super.truncateFractionDigits(this.JoulesPerCubicMeterKelvin, options as ToStringOptions) + ` J/(m³·K)`;
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius:
                return super.truncateFractionDigits(this.JoulesPerCubicMeterDegreeCelsius, options as ToStringOptions) + ` J/(m³·°C)`;
            case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius:
                return super.truncateFractionDigits(this.CaloriesPerCubicCentimeterDegreeCelsius, options as ToStringOptions) + ` cal/(cm³·°C)`;
            case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit:
                return super.truncateFractionDigits(this.BtusPerCubicFootDegreeFahrenheit, options as ToStringOptions) + ` BTU/(ft³·°F)`;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin:
                return super.truncateFractionDigits(this.KilojoulesPerCubicMeterKelvin, options as ToStringOptions) + ` kJ/(m³·K)`;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin:
                return super.truncateFractionDigits(this.MegajoulesPerCubicMeterKelvin, options as ToStringOptions) + ` MJ/(m³·K)`;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius:
                return super.truncateFractionDigits(this.KilojoulesPerCubicMeterDegreeCelsius, options as ToStringOptions) + ` kJ/(m³·°C)`;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius:
                return super.truncateFractionDigits(this.MegajoulesPerCubicMeterDegreeCelsius, options as ToStringOptions) + ` MJ/(m³·°C)`;
            case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius:
                return super.truncateFractionDigits(this.KilocaloriesPerCubicCentimeterDegreeCelsius, options as ToStringOptions) + ` kcal/(cm³·°C)`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get VolumetricHeatCapacity unit abbreviation.
     * Note! the default abbreviation for VolumetricHeatCapacity is JoulesPerCubicMeterKelvin.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the VolumetricHeatCapacity.
     * @returns The abbreviation string of VolumetricHeatCapacity.
     */
    public getUnitAbbreviation(unitAbbreviation: VolumetricHeatCapacityUnits = VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin): string {

        switch (unitAbbreviation) {
            
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterKelvin:
                return `J/(m³·K)`;
            case VolumetricHeatCapacityUnits.JoulesPerCubicMeterDegreeCelsius:
                return `J/(m³·°C)`;
            case VolumetricHeatCapacityUnits.CaloriesPerCubicCentimeterDegreeCelsius:
                return `cal/(cm³·°C)`;
            case VolumetricHeatCapacityUnits.BtusPerCubicFootDegreeFahrenheit:
                return `BTU/(ft³·°F)`;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterKelvin:
                return `kJ/(m³·K)`;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterKelvin:
                return `MJ/(m³·K)`;
            case VolumetricHeatCapacityUnits.KilojoulesPerCubicMeterDegreeCelsius:
                return `kJ/(m³·°C)`;
            case VolumetricHeatCapacityUnits.MegajoulesPerCubicMeterDegreeCelsius:
                return `MJ/(m³·°C)`;
            case VolumetricHeatCapacityUnits.KilocaloriesPerCubicCentimeterDegreeCelsius:
                return `kcal/(cm³·°C)`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given VolumetricHeatCapacity are equals to the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns True if the given VolumetricHeatCapacity are equal to the current VolumetricHeatCapacity.
     */
    public equals(volumetricHeatCapacity: VolumetricHeatCapacity): boolean {
        return super.internalEquals(this.value, volumetricHeatCapacity.BaseValue);
    }

    /**
     * Compare the given VolumetricHeatCapacity against the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns 0 if they are equal, -1 if the current VolumetricHeatCapacity is less then other, 1 if the current VolumetricHeatCapacity is greater then other.
     */
    public compareTo(volumetricHeatCapacity: VolumetricHeatCapacity): number {
        return super.internalCompareTo(this.value, volumetricHeatCapacity.BaseValue);
    }

    /**
     * Add the given VolumetricHeatCapacity with the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns A new VolumetricHeatCapacity instance with the results.
     */
    public add(volumetricHeatCapacity: VolumetricHeatCapacity): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(super.internalAdd(this.value, volumetricHeatCapacity.BaseValue))
    }

    /**
     * Subtract the given VolumetricHeatCapacity with the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns A new VolumetricHeatCapacity instance with the results.
     */
    public subtract(volumetricHeatCapacity: VolumetricHeatCapacity): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(super.internalSubtract(this.value, volumetricHeatCapacity.BaseValue))
    }

    /**
     * Multiply the given VolumetricHeatCapacity with the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns A new VolumetricHeatCapacity instance with the results.
     */
    public multiply(volumetricHeatCapacity: VolumetricHeatCapacity): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(super.internalMultiply(this.value, volumetricHeatCapacity.BaseValue))
    }

    /**
     * Divide the given VolumetricHeatCapacity with the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns A new VolumetricHeatCapacity instance with the results.
     */
    public divide(volumetricHeatCapacity: VolumetricHeatCapacity): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(super.internalDivide(this.value, volumetricHeatCapacity.BaseValue))
    }

    /**
     * Modulo the given VolumetricHeatCapacity with the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns A new VolumetricHeatCapacity instance with the results.
     */
    public modulo(volumetricHeatCapacity: VolumetricHeatCapacity): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(super.internalModulo(this.value, volumetricHeatCapacity.BaseValue))
    }

    /**
     * Pow the given VolumetricHeatCapacity with the current VolumetricHeatCapacity.
     * @param volumetricHeatCapacity The other VolumetricHeatCapacity.
     * @returns A new VolumetricHeatCapacity instance with the results.
     */
    public pow(volumetricHeatCapacity: VolumetricHeatCapacity): VolumetricHeatCapacity {
        return new VolumetricHeatCapacity(super.internalPow(this.value, volumetricHeatCapacity.BaseValue))
    }
}
