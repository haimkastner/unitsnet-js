import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a SpecificWeight */
export interface SpecificWeightDto {
    /** The value of the SpecificWeight */
    value: number;
    /**  The specific unit that the SpecificWeight value is representing */
    unit: SpecificWeightUnits;
}

/** SpecificWeightUnits enumeration */
export enum SpecificWeightUnits {
    /** */
    NewtonsPerCubicMillimeter = "NewtonPerCubicMillimeter",
    /** */
    NewtonsPerCubicCentimeter = "NewtonPerCubicCentimeter",
    /** */
    NewtonsPerCubicMeter = "NewtonPerCubicMeter",
    /** */
    KilogramsForcePerCubicMillimeter = "KilogramForcePerCubicMillimeter",
    /** */
    KilogramsForcePerCubicCentimeter = "KilogramForcePerCubicCentimeter",
    /** */
    KilogramsForcePerCubicMeter = "KilogramForcePerCubicMeter",
    /** */
    PoundsForcePerCubicInch = "PoundForcePerCubicInch",
    /** */
    PoundsForcePerCubicFoot = "PoundForcePerCubicFoot",
    /** */
    TonnesForcePerCubicMillimeter = "TonneForcePerCubicMillimeter",
    /** */
    TonnesForcePerCubicCentimeter = "TonneForcePerCubicCentimeter",
    /** */
    TonnesForcePerCubicMeter = "TonneForcePerCubicMeter",
    /** */
    KilonewtonsPerCubicMillimeter = "KilonewtonPerCubicMillimeter",
    /** */
    KilonewtonsPerCubicCentimeter = "KilonewtonPerCubicCentimeter",
    /** */
    KilonewtonsPerCubicMeter = "KilonewtonPerCubicMeter",
    /** */
    MeganewtonsPerCubicMeter = "MeganewtonPerCubicMeter",
    /** */
    KilopoundsForcePerCubicInch = "KilopoundForcePerCubicInch",
    /** */
    KilopoundsForcePerCubicFoot = "KilopoundForcePerCubicFoot"
}

/** The SpecificWeight, or more precisely, the volumetric weight density, of a substance is its weight per unit volume. */
export class SpecificWeight extends BaseUnit {
    protected value: number;
    private newtonspercubicmillimeterLazy: number | null = null;
    private newtonspercubiccentimeterLazy: number | null = null;
    private newtonspercubicmeterLazy: number | null = null;
    private kilogramsforcepercubicmillimeterLazy: number | null = null;
    private kilogramsforcepercubiccentimeterLazy: number | null = null;
    private kilogramsforcepercubicmeterLazy: number | null = null;
    private poundsforcepercubicinchLazy: number | null = null;
    private poundsforcepercubicfootLazy: number | null = null;
    private tonnesforcepercubicmillimeterLazy: number | null = null;
    private tonnesforcepercubiccentimeterLazy: number | null = null;
    private tonnesforcepercubicmeterLazy: number | null = null;
    private kilonewtonspercubicmillimeterLazy: number | null = null;
    private kilonewtonspercubiccentimeterLazy: number | null = null;
    private kilonewtonspercubicmeterLazy: number | null = null;
    private meganewtonspercubicmeterLazy: number | null = null;
    private kilopoundsforcepercubicinchLazy: number | null = null;
    private kilopoundsforcepercubicfootLazy: number | null = null;

    /**
     * Create a new SpecificWeight.
     * @param value The value.
     * @param fromUnit The ‘SpecificWeight’ unit to create from.
     * The default unit is NewtonsPerCubicMeter
     */
    public constructor(value: number, fromUnit: SpecificWeightUnits = SpecificWeightUnits.NewtonsPerCubicMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SpecificWeight is NewtonsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): SpecificWeightUnits.NewtonsPerCubicMeter {
        return SpecificWeightUnits.NewtonsPerCubicMeter
    }

    /** */
    public get NewtonsPerCubicMillimeter(): number {
        if(this.newtonspercubicmillimeterLazy !== null){
            return this.newtonspercubicmillimeterLazy;
        }
        return this.newtonspercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMillimeter);
    }

    /** */
    public get NewtonsPerCubicCentimeter(): number {
        if(this.newtonspercubiccentimeterLazy !== null){
            return this.newtonspercubiccentimeterLazy;
        }
        return this.newtonspercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicCentimeter);
    }

    /** */
    public get NewtonsPerCubicMeter(): number {
        if(this.newtonspercubicmeterLazy !== null){
            return this.newtonspercubicmeterLazy;
        }
        return this.newtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMeter);
    }

    /** */
    public get KilogramsForcePerCubicMillimeter(): number {
        if(this.kilogramsforcepercubicmillimeterLazy !== null){
            return this.kilogramsforcepercubicmillimeterLazy;
        }
        return this.kilogramsforcepercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMillimeter);
    }

    /** */
    public get KilogramsForcePerCubicCentimeter(): number {
        if(this.kilogramsforcepercubiccentimeterLazy !== null){
            return this.kilogramsforcepercubiccentimeterLazy;
        }
        return this.kilogramsforcepercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicCentimeter);
    }

    /** */
    public get KilogramsForcePerCubicMeter(): number {
        if(this.kilogramsforcepercubicmeterLazy !== null){
            return this.kilogramsforcepercubicmeterLazy;
        }
        return this.kilogramsforcepercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMeter);
    }

    /** */
    public get PoundsForcePerCubicInch(): number {
        if(this.poundsforcepercubicinchLazy !== null){
            return this.poundsforcepercubicinchLazy;
        }
        return this.poundsforcepercubicinchLazy = this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicInch);
    }

    /** */
    public get PoundsForcePerCubicFoot(): number {
        if(this.poundsforcepercubicfootLazy !== null){
            return this.poundsforcepercubicfootLazy;
        }
        return this.poundsforcepercubicfootLazy = this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicFoot);
    }

    /** */
    public get TonnesForcePerCubicMillimeter(): number {
        if(this.tonnesforcepercubicmillimeterLazy !== null){
            return this.tonnesforcepercubicmillimeterLazy;
        }
        return this.tonnesforcepercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMillimeter);
    }

    /** */
    public get TonnesForcePerCubicCentimeter(): number {
        if(this.tonnesforcepercubiccentimeterLazy !== null){
            return this.tonnesforcepercubiccentimeterLazy;
        }
        return this.tonnesforcepercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicCentimeter);
    }

    /** */
    public get TonnesForcePerCubicMeter(): number {
        if(this.tonnesforcepercubicmeterLazy !== null){
            return this.tonnesforcepercubicmeterLazy;
        }
        return this.tonnesforcepercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMeter);
    }

    /** */
    public get KilonewtonsPerCubicMillimeter(): number {
        if(this.kilonewtonspercubicmillimeterLazy !== null){
            return this.kilonewtonspercubicmillimeterLazy;
        }
        return this.kilonewtonspercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonsPerCubicMillimeter);
    }

    /** */
    public get KilonewtonsPerCubicCentimeter(): number {
        if(this.kilonewtonspercubiccentimeterLazy !== null){
            return this.kilonewtonspercubiccentimeterLazy;
        }
        return this.kilonewtonspercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonsPerCubicCentimeter);
    }

    /** */
    public get KilonewtonsPerCubicMeter(): number {
        if(this.kilonewtonspercubicmeterLazy !== null){
            return this.kilonewtonspercubicmeterLazy;
        }
        return this.kilonewtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonsPerCubicMeter);
    }

    /** */
    public get MeganewtonsPerCubicMeter(): number {
        if(this.meganewtonspercubicmeterLazy !== null){
            return this.meganewtonspercubicmeterLazy;
        }
        return this.meganewtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.MeganewtonsPerCubicMeter);
    }

    /** */
    public get KilopoundsForcePerCubicInch(): number {
        if(this.kilopoundsforcepercubicinchLazy !== null){
            return this.kilopoundsforcepercubicinchLazy;
        }
        return this.kilopoundsforcepercubicinchLazy = this.convertFromBase(SpecificWeightUnits.KilopoundsForcePerCubicInch);
    }

    /** */
    public get KilopoundsForcePerCubicFoot(): number {
        if(this.kilopoundsforcepercubicfootLazy !== null){
            return this.kilopoundsforcepercubicfootLazy;
        }
        return this.kilopoundsforcepercubicfootLazy = this.convertFromBase(SpecificWeightUnits.KilopoundsForcePerCubicFoot);
    }

    /**
     * Create a new SpecificWeight instance from a NewtonsPerCubicMillimeter
     *
     * @param value The unit as NewtonsPerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromNewtonsPerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicMillimeter);
    }

    /**
     * Create a new SpecificWeight instance from a NewtonsPerCubicCentimeter
     *
     * @param value The unit as NewtonsPerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromNewtonsPerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicCentimeter);
    }

    /**
     * Create a new SpecificWeight instance from a NewtonsPerCubicMeter
     *
     * @param value The unit as NewtonsPerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromNewtonsPerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicMeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilogramsForcePerCubicMillimeter
     *
     * @param value The unit as KilogramsForcePerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilogramsForcePerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicMillimeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilogramsForcePerCubicCentimeter
     *
     * @param value The unit as KilogramsForcePerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilogramsForcePerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicCentimeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilogramsForcePerCubicMeter
     *
     * @param value The unit as KilogramsForcePerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilogramsForcePerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicMeter);
    }

    /**
     * Create a new SpecificWeight instance from a PoundsForcePerCubicInch
     *
     * @param value The unit as PoundsForcePerCubicInch to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromPoundsForcePerCubicInch(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.PoundsForcePerCubicInch);
    }

    /**
     * Create a new SpecificWeight instance from a PoundsForcePerCubicFoot
     *
     * @param value The unit as PoundsForcePerCubicFoot to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromPoundsForcePerCubicFoot(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.PoundsForcePerCubicFoot);
    }

    /**
     * Create a new SpecificWeight instance from a TonnesForcePerCubicMillimeter
     *
     * @param value The unit as TonnesForcePerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromTonnesForcePerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicMillimeter);
    }

    /**
     * Create a new SpecificWeight instance from a TonnesForcePerCubicCentimeter
     *
     * @param value The unit as TonnesForcePerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromTonnesForcePerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicCentimeter);
    }

    /**
     * Create a new SpecificWeight instance from a TonnesForcePerCubicMeter
     *
     * @param value The unit as TonnesForcePerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromTonnesForcePerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicMeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilonewtonsPerCubicMillimeter
     *
     * @param value The unit as KilonewtonsPerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilonewtonsPerCubicMillimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonsPerCubicMillimeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilonewtonsPerCubicCentimeter
     *
     * @param value The unit as KilonewtonsPerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilonewtonsPerCubicCentimeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonsPerCubicCentimeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilonewtonsPerCubicMeter
     *
     * @param value The unit as KilonewtonsPerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilonewtonsPerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonsPerCubicMeter);
    }

    /**
     * Create a new SpecificWeight instance from a MeganewtonsPerCubicMeter
     *
     * @param value The unit as MeganewtonsPerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromMeganewtonsPerCubicMeter(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.MeganewtonsPerCubicMeter);
    }

    /**
     * Create a new SpecificWeight instance from a KilopoundsForcePerCubicInch
     *
     * @param value The unit as KilopoundsForcePerCubicInch to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilopoundsForcePerCubicInch(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilopoundsForcePerCubicInch);
    }

    /**
     * Create a new SpecificWeight instance from a KilopoundsForcePerCubicFoot
     *
     * @param value The unit as KilopoundsForcePerCubicFoot to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    public static FromKilopoundsForcePerCubicFoot(value: number): SpecificWeight {
        return new SpecificWeight(value, SpecificWeightUnits.KilopoundsForcePerCubicFoot);
    }

    /**
     * Gets the base unit enumeration associated with SpecificWeight
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof SpecificWeightUnits {
        return SpecificWeightUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): SpecificWeightUnits.NewtonsPerCubicMeter {
        return SpecificWeightUnits.NewtonsPerCubicMeter;
    }

    /**
     * Create API DTO represent a SpecificWeight unit.
     * @param holdInUnit The specific SpecificWeight unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: SpecificWeightUnits = SpecificWeightUnits.NewtonsPerCubicMeter): SpecificWeightDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a SpecificWeight unit from an API DTO representation.
     * @param dtoSpecificWeight The SpecificWeight API DTO representation
     */
    public static FromDto(dtoSpecificWeight: SpecificWeightDto): SpecificWeight {
        return new SpecificWeight(dtoSpecificWeight.value, dtoSpecificWeight.unit);
    }

    /**
     * Convert SpecificWeight to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: SpecificWeightUnits): number {
        switch (toUnit) {
            case SpecificWeightUnits.NewtonsPerCubicMillimeter: return this.NewtonsPerCubicMillimeter;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter: return this.NewtonsPerCubicCentimeter;
            case SpecificWeightUnits.NewtonsPerCubicMeter: return this.NewtonsPerCubicMeter;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter: return this.KilogramsForcePerCubicMillimeter;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter: return this.KilogramsForcePerCubicCentimeter;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter: return this.KilogramsForcePerCubicMeter;
            case SpecificWeightUnits.PoundsForcePerCubicInch: return this.PoundsForcePerCubicInch;
            case SpecificWeightUnits.PoundsForcePerCubicFoot: return this.PoundsForcePerCubicFoot;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter: return this.TonnesForcePerCubicMillimeter;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter: return this.TonnesForcePerCubicCentimeter;
            case SpecificWeightUnits.TonnesForcePerCubicMeter: return this.TonnesForcePerCubicMeter;
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter: return this.KilonewtonsPerCubicMillimeter;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter: return this.KilonewtonsPerCubicCentimeter;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter: return this.KilonewtonsPerCubicMeter;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter: return this.MeganewtonsPerCubicMeter;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch: return this.KilopoundsForcePerCubicInch;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot: return this.KilopoundsForcePerCubicFoot;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: SpecificWeightUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case SpecificWeightUnits.NewtonsPerCubicMillimeter: return super.internalMultiply(this.value, 0.000000001);
                case SpecificWeightUnits.NewtonsPerCubicCentimeter: return super.internalMultiply(this.value, 0.000001);
                case SpecificWeightUnits.NewtonsPerCubicMeter: return this.value;
                case SpecificWeightUnits.KilogramsForcePerCubicMillimeter: return super.internalDivide(this.value, 9.80665e9);
                case SpecificWeightUnits.KilogramsForcePerCubicCentimeter: return super.internalDivide(this.value, 9.80665e6);
                case SpecificWeightUnits.KilogramsForcePerCubicMeter: return super.internalDivide(this.value, 9.80665);
                case SpecificWeightUnits.PoundsForcePerCubicInch: {
                    const v4 = super.internalDivide(1.6387064e-5, 4.4482216152605);
                    return super.internalMultiply(this.value, v4);
                }
                case SpecificWeightUnits.PoundsForcePerCubicFoot: {
                    const v4 = super.internalDivide(0.028316846592, 4.4482216152605);
                    return super.internalMultiply(this.value, v4);
                }
                case SpecificWeightUnits.TonnesForcePerCubicMillimeter: return super.internalDivide(this.value, 9.80665e12);
                case SpecificWeightUnits.TonnesForcePerCubicCentimeter: return super.internalDivide(this.value, 9.80665e9);
                case SpecificWeightUnits.TonnesForcePerCubicMeter: return super.internalDivide(this.value, 9.80665e3);
                case SpecificWeightUnits.KilonewtonsPerCubicMillimeter: {
                    const v3 = super.internalMultiply(this.value, 0.000000001);
                    return super.internalDivide(v3, 1000);
                }
                case SpecificWeightUnits.KilonewtonsPerCubicCentimeter: {
                    const v3 = super.internalMultiply(this.value, 0.000001);
                    return super.internalDivide(v3, 1000);
                }
                case SpecificWeightUnits.KilonewtonsPerCubicMeter: return super.internalDivide(this.value, 1000);
                case SpecificWeightUnits.MeganewtonsPerCubicMeter: return super.internalDivide(this.value, 1000000);
                case SpecificWeightUnits.KilopoundsForcePerCubicInch: {
                    const v4 = super.internalDivide(1.6387064e-5, 4.4482216152605);
                    const v5 = super.internalMultiply(this.value, v4);
                    return super.internalDivide(v5, 1000);
                }
                case SpecificWeightUnits.KilopoundsForcePerCubicFoot: {
                    const v4 = super.internalDivide(0.028316846592, 4.4482216152605);
                    const v5 = super.internalMultiply(this.value, v4);
                    return super.internalDivide(v5, 1000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case SpecificWeightUnits.NewtonsPerCubicMillimeter: return this.value * 0.000000001;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter: return this.value * 0.000001;
            case SpecificWeightUnits.NewtonsPerCubicMeter: return this.value;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter: return this.value / 9.80665e9;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter: return this.value / 9.80665e6;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter: return this.value / 9.80665;
            case SpecificWeightUnits.PoundsForcePerCubicInch: return this.value * 1.6387064e-5 / 4.4482216152605;
            case SpecificWeightUnits.PoundsForcePerCubicFoot: return this.value * 0.028316846592 / 4.4482216152605;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter: return this.value / 9.80665e12;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter: return this.value / 9.80665e9;
            case SpecificWeightUnits.TonnesForcePerCubicMeter: return this.value / 9.80665e3;
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter: return (this.value * 0.000000001) / 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter: return (this.value * 0.000001) / 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter: return (this.value) / 1000;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter: return (this.value) / 1000000;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch: return (this.value * 1.6387064e-5 / 4.4482216152605) / 1000;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot: return (this.value * 0.028316846592 / 4.4482216152605) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: SpecificWeightUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case SpecificWeightUnits.NewtonsPerCubicMillimeter: return super.internalMultiply(value, 1000000000);
                case SpecificWeightUnits.NewtonsPerCubicCentimeter: return super.internalMultiply(value, 1000000);
                case SpecificWeightUnits.NewtonsPerCubicMeter: return value;
                case SpecificWeightUnits.KilogramsForcePerCubicMillimeter: return super.internalMultiply(value, 9.80665e9);
                case SpecificWeightUnits.KilogramsForcePerCubicCentimeter: return super.internalMultiply(value, 9.80665e6);
                case SpecificWeightUnits.KilogramsForcePerCubicMeter: return super.internalMultiply(value, 9.80665);
                case SpecificWeightUnits.PoundsForcePerCubicInch: {
                    const v4 = super.internalDivide(4.4482216152605, 1.6387064e-5);
                    return super.internalMultiply(value, v4);
                }
                case SpecificWeightUnits.PoundsForcePerCubicFoot: {
                    const v4 = super.internalDivide(4.4482216152605, 0.028316846592);
                    return super.internalMultiply(value, v4);
                }
                case SpecificWeightUnits.TonnesForcePerCubicMillimeter: return super.internalMultiply(value, 9.80665e12);
                case SpecificWeightUnits.TonnesForcePerCubicCentimeter: return super.internalMultiply(value, 9.80665e9);
                case SpecificWeightUnits.TonnesForcePerCubicMeter: return super.internalMultiply(value, 9.80665e3);
                case SpecificWeightUnits.KilonewtonsPerCubicMillimeter: {
                    const v3 = super.internalMultiply(value, 1000000000);
                    return super.internalMultiply(v3, 1000);
                }
                case SpecificWeightUnits.KilonewtonsPerCubicCentimeter: {
                    const v3 = super.internalMultiply(value, 1000000);
                    return super.internalMultiply(v3, 1000);
                }
                case SpecificWeightUnits.KilonewtonsPerCubicMeter: return super.internalMultiply(value, 1000);
                case SpecificWeightUnits.MeganewtonsPerCubicMeter: return super.internalMultiply(value, 1000000);
                case SpecificWeightUnits.KilopoundsForcePerCubicInch: {
                    const v4 = super.internalDivide(4.4482216152605, 1.6387064e-5);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000);
                }
                case SpecificWeightUnits.KilopoundsForcePerCubicFoot: {
                    const v4 = super.internalDivide(4.4482216152605, 0.028316846592);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case SpecificWeightUnits.NewtonsPerCubicMillimeter: return value * 1000000000;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter: return value * 1000000;
            case SpecificWeightUnits.NewtonsPerCubicMeter: return value;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter: return value * 9.80665e9;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter: return value * 9.80665e6;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter: return value * 9.80665;
            case SpecificWeightUnits.PoundsForcePerCubicInch: return value * 4.4482216152605 / 1.6387064e-5;
            case SpecificWeightUnits.PoundsForcePerCubicFoot: return value * 4.4482216152605 / 0.028316846592;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter: return value * 9.80665e12;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter: return value * 9.80665e9;
            case SpecificWeightUnits.TonnesForcePerCubicMeter: return value * 9.80665e3;
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter: return (value * 1000000000) * 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter: return (value * 1000000) * 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter: return (value) * 1000;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter: return (value) * 1000000;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch: return (value * 4.4482216152605 / 1.6387064e-5) * 1000;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot: return (value * 4.4482216152605 / 0.028316846592) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the SpecificWeight to string.
     * Note! the default format for SpecificWeight is NewtonsPerCubicMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the SpecificWeight.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the SpecificWeight.
     */
    public toString(unit: SpecificWeightUnits = SpecificWeightUnits.NewtonsPerCubicMeter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return super.truncateFractionDigits(this.NewtonsPerCubicMillimeter, options as ToStringOptions) + ` N/mm³`;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return super.truncateFractionDigits(this.NewtonsPerCubicCentimeter, options as ToStringOptions) + ` N/cm³`;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return super.truncateFractionDigits(this.NewtonsPerCubicMeter, options as ToStringOptions) + ` N/m³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return super.truncateFractionDigits(this.KilogramsForcePerCubicMillimeter, options as ToStringOptions) + ` kgf/mm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return super.truncateFractionDigits(this.KilogramsForcePerCubicCentimeter, options as ToStringOptions) + ` kgf/cm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return super.truncateFractionDigits(this.KilogramsForcePerCubicMeter, options as ToStringOptions) + ` kgf/m³`;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return super.truncateFractionDigits(this.PoundsForcePerCubicInch, options as ToStringOptions) + ` lbf/in³`;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return super.truncateFractionDigits(this.PoundsForcePerCubicFoot, options as ToStringOptions) + ` lbf/ft³`;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return super.truncateFractionDigits(this.TonnesForcePerCubicMillimeter, options as ToStringOptions) + ` tf/mm³`;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return super.truncateFractionDigits(this.TonnesForcePerCubicCentimeter, options as ToStringOptions) + ` tf/cm³`;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return super.truncateFractionDigits(this.TonnesForcePerCubicMeter, options as ToStringOptions) + ` tf/m³`;
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:
                return super.truncateFractionDigits(this.KilonewtonsPerCubicMillimeter, options as ToStringOptions) + ` kN/mm³`;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:
                return super.truncateFractionDigits(this.KilonewtonsPerCubicCentimeter, options as ToStringOptions) + ` kN/cm³`;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:
                return super.truncateFractionDigits(this.KilonewtonsPerCubicMeter, options as ToStringOptions) + ` kN/m³`;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:
                return super.truncateFractionDigits(this.MeganewtonsPerCubicMeter, options as ToStringOptions) + ` MN/m³`;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:
                return super.truncateFractionDigits(this.KilopoundsForcePerCubicInch, options as ToStringOptions) + ` klbf/in³`;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:
                return super.truncateFractionDigits(this.KilopoundsForcePerCubicFoot, options as ToStringOptions) + ` klbf/ft³`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get SpecificWeight unit abbreviation.
     * Note! the default abbreviation for SpecificWeight is NewtonsPerCubicMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the SpecificWeight.
     * @returns The abbreviation string of SpecificWeight.
     */
    public getUnitAbbreviation(unitAbbreviation: SpecificWeightUnits = SpecificWeightUnits.NewtonsPerCubicMeter): string {

        switch (unitAbbreviation) {
            
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return `N/mm³`;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return `N/cm³`;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return `N/m³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return `kgf/mm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return `kgf/cm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return `kgf/m³`;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return `lbf/in³`;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return `lbf/ft³`;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return `tf/mm³`;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return `tf/cm³`;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return `tf/m³`;
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:
                return `kN/mm³`;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:
                return `kN/cm³`;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:
                return `kN/m³`;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:
                return `MN/m³`;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:
                return `klbf/in³`;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:
                return `klbf/ft³`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given SpecificWeight are equals to the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns True if the given SpecificWeight are equal to the current SpecificWeight.
     */
    public equals(specificWeight: SpecificWeight): boolean {
        return super.internalEquals(this.value, specificWeight.BaseValue);
    }

    /**
     * Compare the given SpecificWeight against the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns 0 if they are equal, -1 if the current SpecificWeight is less then other, 1 if the current SpecificWeight is greater then other.
     */
    public compareTo(specificWeight: SpecificWeight): number {
        return super.internalCompareTo(this.value, specificWeight.BaseValue);
    }

    /**
     * Add the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    public add(specificWeight: SpecificWeight): SpecificWeight {
        return new SpecificWeight(super.internalAdd(this.value, specificWeight.BaseValue))
    }

    /**
     * Subtract the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    public subtract(specificWeight: SpecificWeight): SpecificWeight {
        return new SpecificWeight(super.internalSubtract(this.value, specificWeight.BaseValue))
    }

    /**
     * Multiply the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    public multiply(specificWeight: SpecificWeight): SpecificWeight {
        return new SpecificWeight(super.internalMultiply(this.value, specificWeight.BaseValue))
    }

    /**
     * Divide the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    public divide(specificWeight: SpecificWeight): SpecificWeight {
        return new SpecificWeight(super.internalDivide(this.value, specificWeight.BaseValue))
    }

    /**
     * Modulo the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    public modulo(specificWeight: SpecificWeight): SpecificWeight {
        return new SpecificWeight(super.internalModulo(this.value, specificWeight.BaseValue))
    }

    /**
     * Pow the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    public pow(specificWeight: SpecificWeight): SpecificWeight {
        return new SpecificWeight(super.internalPow(this.value, specificWeight.BaseValue))
    }
}
