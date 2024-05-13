import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a EnergyDensity */
export interface EnergyDensityDto {
    /** The value of the EnergyDensity */
    value: number;
    /**  The specific unit that the EnergyDensity value is representing */
    unit: EnergyDensityUnits;
}

/** EnergyDensityUnits enumeration */
export enum EnergyDensityUnits {
    /** */
    JoulesPerCubicMeter = "JoulePerCubicMeter",
    /** */
    WattHoursPerCubicMeter = "WattHourPerCubicMeter",
    /** */
    KilojoulesPerCubicMeter = "KilojoulePerCubicMeter",
    /** */
    MegajoulesPerCubicMeter = "MegajoulePerCubicMeter",
    /** */
    GigajoulesPerCubicMeter = "GigajoulePerCubicMeter",
    /** */
    TerajoulesPerCubicMeter = "TerajoulePerCubicMeter",
    /** */
    PetajoulesPerCubicMeter = "PetajoulePerCubicMeter",
    /** */
    KilowattHoursPerCubicMeter = "KilowattHourPerCubicMeter",
    /** */
    MegawattHoursPerCubicMeter = "MegawattHourPerCubicMeter",
    /** */
    GigawattHoursPerCubicMeter = "GigawattHourPerCubicMeter",
    /** */
    TerawattHoursPerCubicMeter = "TerawattHourPerCubicMeter",
    /** */
    PetawattHoursPerCubicMeter = "PetawattHourPerCubicMeter"
}

/** Energy density is the amount of energy stored in a substance per unit volume and is measured in J/m³. It is sometimes confused with energy per unit mass which is properly called specific energy. */
export class EnergyDensity extends BaseUnit {
    protected value: number;
    private joulespercubicmeterLazy: number | null = null;
    private watthourspercubicmeterLazy: number | null = null;
    private kilojoulespercubicmeterLazy: number | null = null;
    private megajoulespercubicmeterLazy: number | null = null;
    private gigajoulespercubicmeterLazy: number | null = null;
    private terajoulespercubicmeterLazy: number | null = null;
    private petajoulespercubicmeterLazy: number | null = null;
    private kilowatthourspercubicmeterLazy: number | null = null;
    private megawatthourspercubicmeterLazy: number | null = null;
    private gigawatthourspercubicmeterLazy: number | null = null;
    private terawatthourspercubicmeterLazy: number | null = null;
    private petawatthourspercubicmeterLazy: number | null = null;

    /**
     * Create a new EnergyDensity.
     * @param value The value.
     * @param fromUnit The ‘EnergyDensity’ unit to create from.
     * The default unit is JoulesPerCubicMeter
     */
    public constructor(value: number, fromUnit: EnergyDensityUnits = EnergyDensityUnits.JoulesPerCubicMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of EnergyDensity is JoulesPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): EnergyDensityUnits.JoulesPerCubicMeter {
        return EnergyDensityUnits.JoulesPerCubicMeter
    }

    /** */
    public get JoulesPerCubicMeter(): number {
        if(this.joulespercubicmeterLazy !== null){
            return this.joulespercubicmeterLazy;
        }
        return this.joulespercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.JoulesPerCubicMeter);
    }

    /** */
    public get WattHoursPerCubicMeter(): number {
        if(this.watthourspercubicmeterLazy !== null){
            return this.watthourspercubicmeterLazy;
        }
        return this.watthourspercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.WattHoursPerCubicMeter);
    }

    /** */
    public get KilojoulesPerCubicMeter(): number {
        if(this.kilojoulespercubicmeterLazy !== null){
            return this.kilojoulespercubicmeterLazy;
        }
        return this.kilojoulespercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.KilojoulesPerCubicMeter);
    }

    /** */
    public get MegajoulesPerCubicMeter(): number {
        if(this.megajoulespercubicmeterLazy !== null){
            return this.megajoulespercubicmeterLazy;
        }
        return this.megajoulespercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.MegajoulesPerCubicMeter);
    }

    /** */
    public get GigajoulesPerCubicMeter(): number {
        if(this.gigajoulespercubicmeterLazy !== null){
            return this.gigajoulespercubicmeterLazy;
        }
        return this.gigajoulespercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.GigajoulesPerCubicMeter);
    }

    /** */
    public get TerajoulesPerCubicMeter(): number {
        if(this.terajoulespercubicmeterLazy !== null){
            return this.terajoulespercubicmeterLazy;
        }
        return this.terajoulespercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.TerajoulesPerCubicMeter);
    }

    /** */
    public get PetajoulesPerCubicMeter(): number {
        if(this.petajoulespercubicmeterLazy !== null){
            return this.petajoulespercubicmeterLazy;
        }
        return this.petajoulespercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.PetajoulesPerCubicMeter);
    }

    /** */
    public get KilowattHoursPerCubicMeter(): number {
        if(this.kilowatthourspercubicmeterLazy !== null){
            return this.kilowatthourspercubicmeterLazy;
        }
        return this.kilowatthourspercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.KilowattHoursPerCubicMeter);
    }

    /** */
    public get MegawattHoursPerCubicMeter(): number {
        if(this.megawatthourspercubicmeterLazy !== null){
            return this.megawatthourspercubicmeterLazy;
        }
        return this.megawatthourspercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.MegawattHoursPerCubicMeter);
    }

    /** */
    public get GigawattHoursPerCubicMeter(): number {
        if(this.gigawatthourspercubicmeterLazy !== null){
            return this.gigawatthourspercubicmeterLazy;
        }
        return this.gigawatthourspercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.GigawattHoursPerCubicMeter);
    }

    /** */
    public get TerawattHoursPerCubicMeter(): number {
        if(this.terawatthourspercubicmeterLazy !== null){
            return this.terawatthourspercubicmeterLazy;
        }
        return this.terawatthourspercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.TerawattHoursPerCubicMeter);
    }

    /** */
    public get PetawattHoursPerCubicMeter(): number {
        if(this.petawatthourspercubicmeterLazy !== null){
            return this.petawatthourspercubicmeterLazy;
        }
        return this.petawatthourspercubicmeterLazy = this.convertFromBase(EnergyDensityUnits.PetawattHoursPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a JoulesPerCubicMeter
     *
     * @param value The unit as JoulesPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromJoulesPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.JoulesPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a WattHoursPerCubicMeter
     *
     * @param value The unit as WattHoursPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromWattHoursPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.WattHoursPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a KilojoulesPerCubicMeter
     *
     * @param value The unit as KilojoulesPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromKilojoulesPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.KilojoulesPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a MegajoulesPerCubicMeter
     *
     * @param value The unit as MegajoulesPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromMegajoulesPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.MegajoulesPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a GigajoulesPerCubicMeter
     *
     * @param value The unit as GigajoulesPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromGigajoulesPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.GigajoulesPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a TerajoulesPerCubicMeter
     *
     * @param value The unit as TerajoulesPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromTerajoulesPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.TerajoulesPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a PetajoulesPerCubicMeter
     *
     * @param value The unit as PetajoulesPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromPetajoulesPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.PetajoulesPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a KilowattHoursPerCubicMeter
     *
     * @param value The unit as KilowattHoursPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromKilowattHoursPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.KilowattHoursPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a MegawattHoursPerCubicMeter
     *
     * @param value The unit as MegawattHoursPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromMegawattHoursPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.MegawattHoursPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a GigawattHoursPerCubicMeter
     *
     * @param value The unit as GigawattHoursPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromGigawattHoursPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.GigawattHoursPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a TerawattHoursPerCubicMeter
     *
     * @param value The unit as TerawattHoursPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromTerawattHoursPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.TerawattHoursPerCubicMeter);
    }

    /**
     * Create a new EnergyDensity instance from a PetawattHoursPerCubicMeter
     *
     * @param value The unit as PetawattHoursPerCubicMeter to create a new EnergyDensity from.
     * @returns The new EnergyDensity instance.
     */
    public static FromPetawattHoursPerCubicMeter(value: number): EnergyDensity {
        return new EnergyDensity(value, EnergyDensityUnits.PetawattHoursPerCubicMeter);
    }

    /**
     * Gets the base unit enumeration associated with EnergyDensity
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof EnergyDensityUnits {
        return EnergyDensityUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): EnergyDensityUnits.JoulesPerCubicMeter {
        return EnergyDensityUnits.JoulesPerCubicMeter;
    }

    /**
     * Create API DTO represent a EnergyDensity unit.
     * @param holdInUnit The specific EnergyDensity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: EnergyDensityUnits = EnergyDensityUnits.JoulesPerCubicMeter): EnergyDensityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a EnergyDensity unit from an API DTO representation.
     * @param dtoEnergyDensity The EnergyDensity API DTO representation
     */
    public static FromDto(dtoEnergyDensity: EnergyDensityDto): EnergyDensity {
        return new EnergyDensity(dtoEnergyDensity.value, dtoEnergyDensity.unit);
    }

    /**
     * Convert EnergyDensity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: EnergyDensityUnits): number {
        switch (toUnit) {
            case EnergyDensityUnits.JoulesPerCubicMeter: return this.JoulesPerCubicMeter;
            case EnergyDensityUnits.WattHoursPerCubicMeter: return this.WattHoursPerCubicMeter;
            case EnergyDensityUnits.KilojoulesPerCubicMeter: return this.KilojoulesPerCubicMeter;
            case EnergyDensityUnits.MegajoulesPerCubicMeter: return this.MegajoulesPerCubicMeter;
            case EnergyDensityUnits.GigajoulesPerCubicMeter: return this.GigajoulesPerCubicMeter;
            case EnergyDensityUnits.TerajoulesPerCubicMeter: return this.TerajoulesPerCubicMeter;
            case EnergyDensityUnits.PetajoulesPerCubicMeter: return this.PetajoulesPerCubicMeter;
            case EnergyDensityUnits.KilowattHoursPerCubicMeter: return this.KilowattHoursPerCubicMeter;
            case EnergyDensityUnits.MegawattHoursPerCubicMeter: return this.MegawattHoursPerCubicMeter;
            case EnergyDensityUnits.GigawattHoursPerCubicMeter: return this.GigawattHoursPerCubicMeter;
            case EnergyDensityUnits.TerawattHoursPerCubicMeter: return this.TerawattHoursPerCubicMeter;
            case EnergyDensityUnits.PetawattHoursPerCubicMeter: return this.PetawattHoursPerCubicMeter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: EnergyDensityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case EnergyDensityUnits.JoulesPerCubicMeter: return this.value;
                case EnergyDensityUnits.WattHoursPerCubicMeter: return super.internalDivide(this.value, 3.6e+3);
                case EnergyDensityUnits.KilojoulesPerCubicMeter: return super.internalDivide(this.value, 1000);
                case EnergyDensityUnits.MegajoulesPerCubicMeter: return super.internalDivide(this.value, 1000000);
                case EnergyDensityUnits.GigajoulesPerCubicMeter: return super.internalDivide(this.value, 1000000000);
                case EnergyDensityUnits.TerajoulesPerCubicMeter: return super.internalDivide(this.value, 1000000000000);
                case EnergyDensityUnits.PetajoulesPerCubicMeter: return super.internalDivide(this.value, 1000000000000000);
                case EnergyDensityUnits.KilowattHoursPerCubicMeter: {
                    const v3 = super.internalDivide(this.value, 3.6e+3);
                    return super.internalDivide(v3, 1000);
                }
                case EnergyDensityUnits.MegawattHoursPerCubicMeter: {
                    const v3 = super.internalDivide(this.value, 3.6e+3);
                    return super.internalDivide(v3, 1000000);
                }
                case EnergyDensityUnits.GigawattHoursPerCubicMeter: {
                    const v3 = super.internalDivide(this.value, 3.6e+3);
                    return super.internalDivide(v3, 1000000000);
                }
                case EnergyDensityUnits.TerawattHoursPerCubicMeter: {
                    const v3 = super.internalDivide(this.value, 3.6e+3);
                    return super.internalDivide(v3, 1000000000000);
                }
                case EnergyDensityUnits.PetawattHoursPerCubicMeter: {
                    const v3 = super.internalDivide(this.value, 3.6e+3);
                    return super.internalDivide(v3, 1000000000000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case EnergyDensityUnits.JoulesPerCubicMeter: return this.value;
            case EnergyDensityUnits.WattHoursPerCubicMeter: return this.value / 3.6e+3;
            case EnergyDensityUnits.KilojoulesPerCubicMeter: return (this.value) / 1000;
            case EnergyDensityUnits.MegajoulesPerCubicMeter: return (this.value) / 1000000;
            case EnergyDensityUnits.GigajoulesPerCubicMeter: return (this.value) / 1000000000;
            case EnergyDensityUnits.TerajoulesPerCubicMeter: return (this.value) / 1000000000000;
            case EnergyDensityUnits.PetajoulesPerCubicMeter: return (this.value) / 1000000000000000;
            case EnergyDensityUnits.KilowattHoursPerCubicMeter: return (this.value / 3.6e+3) / 1000;
            case EnergyDensityUnits.MegawattHoursPerCubicMeter: return (this.value / 3.6e+3) / 1000000;
            case EnergyDensityUnits.GigawattHoursPerCubicMeter: return (this.value / 3.6e+3) / 1000000000;
            case EnergyDensityUnits.TerawattHoursPerCubicMeter: return (this.value / 3.6e+3) / 1000000000000;
            case EnergyDensityUnits.PetawattHoursPerCubicMeter: return (this.value / 3.6e+3) / 1000000000000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: EnergyDensityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case EnergyDensityUnits.JoulesPerCubicMeter: return value;
                case EnergyDensityUnits.WattHoursPerCubicMeter: return super.internalMultiply(value, 3.6e+3);
                case EnergyDensityUnits.KilojoulesPerCubicMeter: return super.internalMultiply(value, 1000);
                case EnergyDensityUnits.MegajoulesPerCubicMeter: return super.internalMultiply(value, 1000000);
                case EnergyDensityUnits.GigajoulesPerCubicMeter: return super.internalMultiply(value, 1000000000);
                case EnergyDensityUnits.TerajoulesPerCubicMeter: return super.internalMultiply(value, 1000000000000);
                case EnergyDensityUnits.PetajoulesPerCubicMeter: return super.internalMultiply(value, 1000000000000000);
                case EnergyDensityUnits.KilowattHoursPerCubicMeter: {
                    const v3 = super.internalMultiply(value, 3.6e+3);
                    return super.internalMultiply(v3, 1000);
                }
                case EnergyDensityUnits.MegawattHoursPerCubicMeter: {
                    const v3 = super.internalMultiply(value, 3.6e+3);
                    return super.internalMultiply(v3, 1000000);
                }
                case EnergyDensityUnits.GigawattHoursPerCubicMeter: {
                    const v3 = super.internalMultiply(value, 3.6e+3);
                    return super.internalMultiply(v3, 1000000000);
                }
                case EnergyDensityUnits.TerawattHoursPerCubicMeter: {
                    const v3 = super.internalMultiply(value, 3.6e+3);
                    return super.internalMultiply(v3, 1000000000000);
                }
                case EnergyDensityUnits.PetawattHoursPerCubicMeter: {
                    const v3 = super.internalMultiply(value, 3.6e+3);
                    return super.internalMultiply(v3, 1000000000000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case EnergyDensityUnits.JoulesPerCubicMeter: return value;
            case EnergyDensityUnits.WattHoursPerCubicMeter: return value * 3.6e+3;
            case EnergyDensityUnits.KilojoulesPerCubicMeter: return (value) * 1000;
            case EnergyDensityUnits.MegajoulesPerCubicMeter: return (value) * 1000000;
            case EnergyDensityUnits.GigajoulesPerCubicMeter: return (value) * 1000000000;
            case EnergyDensityUnits.TerajoulesPerCubicMeter: return (value) * 1000000000000;
            case EnergyDensityUnits.PetajoulesPerCubicMeter: return (value) * 1000000000000000;
            case EnergyDensityUnits.KilowattHoursPerCubicMeter: return (value * 3.6e+3) * 1000;
            case EnergyDensityUnits.MegawattHoursPerCubicMeter: return (value * 3.6e+3) * 1000000;
            case EnergyDensityUnits.GigawattHoursPerCubicMeter: return (value * 3.6e+3) * 1000000000;
            case EnergyDensityUnits.TerawattHoursPerCubicMeter: return (value * 3.6e+3) * 1000000000000;
            case EnergyDensityUnits.PetawattHoursPerCubicMeter: return (value * 3.6e+3) * 1000000000000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the EnergyDensity to string.
     * Note! the default format for EnergyDensity is JoulesPerCubicMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the EnergyDensity.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the EnergyDensity.
     */
    public toString(unit: EnergyDensityUnits = EnergyDensityUnits.JoulesPerCubicMeter, fractionalDigits?: number): string {

        switch (unit) {
            
            case EnergyDensityUnits.JoulesPerCubicMeter:
                return super.truncateFractionDigits(this.JoulesPerCubicMeter, fractionalDigits) + ` J/m³`;
            case EnergyDensityUnits.WattHoursPerCubicMeter:
                return super.truncateFractionDigits(this.WattHoursPerCubicMeter, fractionalDigits) + ` Wh/m³`;
            case EnergyDensityUnits.KilojoulesPerCubicMeter:
                return super.truncateFractionDigits(this.KilojoulesPerCubicMeter, fractionalDigits) + ` kJ/m³`;
            case EnergyDensityUnits.MegajoulesPerCubicMeter:
                return super.truncateFractionDigits(this.MegajoulesPerCubicMeter, fractionalDigits) + ` MJ/m³`;
            case EnergyDensityUnits.GigajoulesPerCubicMeter:
                return super.truncateFractionDigits(this.GigajoulesPerCubicMeter, fractionalDigits) + ` GJ/m³`;
            case EnergyDensityUnits.TerajoulesPerCubicMeter:
                return super.truncateFractionDigits(this.TerajoulesPerCubicMeter, fractionalDigits) + ` TJ/m³`;
            case EnergyDensityUnits.PetajoulesPerCubicMeter:
                return super.truncateFractionDigits(this.PetajoulesPerCubicMeter, fractionalDigits) + ` PJ/m³`;
            case EnergyDensityUnits.KilowattHoursPerCubicMeter:
                return super.truncateFractionDigits(this.KilowattHoursPerCubicMeter, fractionalDigits) + ` kWh/m³`;
            case EnergyDensityUnits.MegawattHoursPerCubicMeter:
                return super.truncateFractionDigits(this.MegawattHoursPerCubicMeter, fractionalDigits) + ` MWh/m³`;
            case EnergyDensityUnits.GigawattHoursPerCubicMeter:
                return super.truncateFractionDigits(this.GigawattHoursPerCubicMeter, fractionalDigits) + ` GWh/m³`;
            case EnergyDensityUnits.TerawattHoursPerCubicMeter:
                return super.truncateFractionDigits(this.TerawattHoursPerCubicMeter, fractionalDigits) + ` TWh/m³`;
            case EnergyDensityUnits.PetawattHoursPerCubicMeter:
                return super.truncateFractionDigits(this.PetawattHoursPerCubicMeter, fractionalDigits) + ` PWh/m³`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get EnergyDensity unit abbreviation.
     * Note! the default abbreviation for EnergyDensity is JoulesPerCubicMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the EnergyDensity.
     * @returns The abbreviation string of EnergyDensity.
     */
    public getUnitAbbreviation(unitAbbreviation: EnergyDensityUnits = EnergyDensityUnits.JoulesPerCubicMeter): string {

        switch (unitAbbreviation) {
            
            case EnergyDensityUnits.JoulesPerCubicMeter:
                return `J/m³`;
            case EnergyDensityUnits.WattHoursPerCubicMeter:
                return `Wh/m³`;
            case EnergyDensityUnits.KilojoulesPerCubicMeter:
                return `kJ/m³`;
            case EnergyDensityUnits.MegajoulesPerCubicMeter:
                return `MJ/m³`;
            case EnergyDensityUnits.GigajoulesPerCubicMeter:
                return `GJ/m³`;
            case EnergyDensityUnits.TerajoulesPerCubicMeter:
                return `TJ/m³`;
            case EnergyDensityUnits.PetajoulesPerCubicMeter:
                return `PJ/m³`;
            case EnergyDensityUnits.KilowattHoursPerCubicMeter:
                return `kWh/m³`;
            case EnergyDensityUnits.MegawattHoursPerCubicMeter:
                return `MWh/m³`;
            case EnergyDensityUnits.GigawattHoursPerCubicMeter:
                return `GWh/m³`;
            case EnergyDensityUnits.TerawattHoursPerCubicMeter:
                return `TWh/m³`;
            case EnergyDensityUnits.PetawattHoursPerCubicMeter:
                return `PWh/m³`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given EnergyDensity are equals to the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns True if the given EnergyDensity are equal to the current EnergyDensity.
     */
    public equals(energyDensity: EnergyDensity): boolean {
        return super.internalEquals(this.value, energyDensity.BaseValue);
    }

    /**
     * Compare the given EnergyDensity against the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns 0 if they are equal, -1 if the current EnergyDensity is less then other, 1 if the current EnergyDensity is greater then other.
     */
    public compareTo(energyDensity: EnergyDensity): number {
        return super.internalCompareTo(this.value, energyDensity.BaseValue);
    }

    /**
     * Add the given EnergyDensity with the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns A new EnergyDensity instance with the results.
     */
    public add(energyDensity: EnergyDensity): EnergyDensity {
        return new EnergyDensity(super.internalAdd(this.value, energyDensity.BaseValue))
    }

    /**
     * Subtract the given EnergyDensity with the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns A new EnergyDensity instance with the results.
     */
    public subtract(energyDensity: EnergyDensity): EnergyDensity {
        return new EnergyDensity(super.internalSubtract(this.value, energyDensity.BaseValue))
    }

    /**
     * Multiply the given EnergyDensity with the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns A new EnergyDensity instance with the results.
     */
    public multiply(energyDensity: EnergyDensity): EnergyDensity {
        return new EnergyDensity(super.internalMultiply(this.value, energyDensity.BaseValue))
    }

    /**
     * Divide the given EnergyDensity with the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns A new EnergyDensity instance with the results.
     */
    public divide(energyDensity: EnergyDensity): EnergyDensity {
        return new EnergyDensity(super.internalDivide(this.value, energyDensity.BaseValue))
    }

    /**
     * Modulo the given EnergyDensity with the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns A new EnergyDensity instance with the results.
     */
    public modulo(energyDensity: EnergyDensity): EnergyDensity {
        return new EnergyDensity(super.internalModulo(this.value, energyDensity.BaseValue))
    }

    /**
     * Pow the given EnergyDensity with the current EnergyDensity.
     * @param energyDensity The other EnergyDensity.
     * @returns A new EnergyDensity instance with the results.
     */
    public pow(energyDensity: EnergyDensity): EnergyDensity {
        return new EnergyDensity(super.internalPow(this.value, energyDensity.BaseValue))
    }
}
