import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a FluidResistance */
export interface FluidResistanceDto {
    /** The value of the FluidResistance */
    value: number;
    /**  The specific unit that the FluidResistance value is representing */
    unit: FluidResistanceUnits;
}

/** FluidResistanceUnits enumeration */
export enum FluidResistanceUnits {
    /** */
    PascalSecondsPerLiter = "PascalSecondPerLiter",
    /** */
    PascalMinutesPerLiter = "PascalMinutePerLiter",
    /** */
    PascalSecondsPerMilliliter = "PascalSecondPerMilliliter",
    /** */
    PascalMinutesPerMilliliter = "PascalMinutePerMilliliter",
    /** */
    PascalSecondsPerCubicMeter = "PascalSecondPerCubicMeter",
    /** */
    PascalMinutesPerCubicMeter = "PascalMinutePerCubicMeter",
    /** */
    PascalSecondsPerCubicCentimeter = "PascalSecondPerCubicCentimeter",
    /** */
    PascalMinutesPerCubicCentimeter = "PascalMinutePerCubicCentimeter",
    /** */
    DyneSecondsPerCentimeterToTheFifth = "DyneSecondPerCentimeterToTheFifth",
    /** */
    MillimeterMercurySecondsPerLiter = "MillimeterMercurySecondPerLiter",
    /** */
    MillimeterMercuryMinutesPerLiter = "MillimeterMercuryMinutePerLiter",
    /** */
    MillimeterMercurySecondsPerMilliliter = "MillimeterMercurySecondPerMilliliter",
    /** */
    MillimeterMercuryMinutesPerMilliliter = "MillimeterMercuryMinutePerMilliliter",
    /** */
    MillimeterMercurySecondsPerCubicCentimeter = "MillimeterMercurySecondPerCubicCentimeter",
    /** */
    MillimeterMercuryMinutesPerCubicCentimeter = "MillimeterMercuryMinutePerCubicCentimeter",
    /** */
    MillimeterMercurySecondsPerCubicMeter = "MillimeterMercurySecondPerCubicMeter",
    /** */
    MillimeterMercuryMinutesPerCubicMeter = "MillimeterMercuryMinutePerCubicMeter",
    /** */
    WoodUnits = "WoodUnit",
    /** */
    MegapascalSecondsPerCubicMeter = "MegapascalSecondPerCubicMeter"
}

/** Fluid Resistance is a force acting opposite to the relative motion of any object moving with respect to a surrounding fluid. Fluid Resistance is sometimes referred to as drag or fluid friction. */
export class FluidResistance extends BaseUnit {
    protected value: number;
    private pascalsecondsperliterLazy: number | null = null;
    private pascalminutesperliterLazy: number | null = null;
    private pascalsecondspermilliliterLazy: number | null = null;
    private pascalminutespermilliliterLazy: number | null = null;
    private pascalsecondspercubicmeterLazy: number | null = null;
    private pascalminutespercubicmeterLazy: number | null = null;
    private pascalsecondspercubiccentimeterLazy: number | null = null;
    private pascalminutespercubiccentimeterLazy: number | null = null;
    private dynesecondspercentimetertothefifthLazy: number | null = null;
    private millimetermercurysecondsperliterLazy: number | null = null;
    private millimetermercuryminutesperliterLazy: number | null = null;
    private millimetermercurysecondspermilliliterLazy: number | null = null;
    private millimetermercuryminutespermilliliterLazy: number | null = null;
    private millimetermercurysecondspercubiccentimeterLazy: number | null = null;
    private millimetermercuryminutespercubiccentimeterLazy: number | null = null;
    private millimetermercurysecondspercubicmeterLazy: number | null = null;
    private millimetermercuryminutespercubicmeterLazy: number | null = null;
    private woodunitsLazy: number | null = null;
    private megapascalsecondspercubicmeterLazy: number | null = null;

    /**
     * Create a new FluidResistance.
     * @param value The value.
     * @param fromUnit The ‘FluidResistance’ unit to create from.
     * The default unit is PascalSecondsPerCubicMeter
     */
    public constructor(value: number, fromUnit: FluidResistanceUnits = FluidResistanceUnits.PascalSecondsPerCubicMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of FluidResistance is PascalSecondsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): FluidResistanceUnits.PascalSecondsPerCubicMeter {
        return FluidResistanceUnits.PascalSecondsPerCubicMeter
    }

    /** */
    public get PascalSecondsPerLiter(): number {
        if(this.pascalsecondsperliterLazy !== null){
            return this.pascalsecondsperliterLazy;
        }
        return this.pascalsecondsperliterLazy = this.convertFromBase(FluidResistanceUnits.PascalSecondsPerLiter);
    }

    /** */
    public get PascalMinutesPerLiter(): number {
        if(this.pascalminutesperliterLazy !== null){
            return this.pascalminutesperliterLazy;
        }
        return this.pascalminutesperliterLazy = this.convertFromBase(FluidResistanceUnits.PascalMinutesPerLiter);
    }

    /** */
    public get PascalSecondsPerMilliliter(): number {
        if(this.pascalsecondspermilliliterLazy !== null){
            return this.pascalsecondspermilliliterLazy;
        }
        return this.pascalsecondspermilliliterLazy = this.convertFromBase(FluidResistanceUnits.PascalSecondsPerMilliliter);
    }

    /** */
    public get PascalMinutesPerMilliliter(): number {
        if(this.pascalminutespermilliliterLazy !== null){
            return this.pascalminutespermilliliterLazy;
        }
        return this.pascalminutespermilliliterLazy = this.convertFromBase(FluidResistanceUnits.PascalMinutesPerMilliliter);
    }

    /** */
    public get PascalSecondsPerCubicMeter(): number {
        if(this.pascalsecondspercubicmeterLazy !== null){
            return this.pascalsecondspercubicmeterLazy;
        }
        return this.pascalsecondspercubicmeterLazy = this.convertFromBase(FluidResistanceUnits.PascalSecondsPerCubicMeter);
    }

    /** */
    public get PascalMinutesPerCubicMeter(): number {
        if(this.pascalminutespercubicmeterLazy !== null){
            return this.pascalminutespercubicmeterLazy;
        }
        return this.pascalminutespercubicmeterLazy = this.convertFromBase(FluidResistanceUnits.PascalMinutesPerCubicMeter);
    }

    /** */
    public get PascalSecondsPerCubicCentimeter(): number {
        if(this.pascalsecondspercubiccentimeterLazy !== null){
            return this.pascalsecondspercubiccentimeterLazy;
        }
        return this.pascalsecondspercubiccentimeterLazy = this.convertFromBase(FluidResistanceUnits.PascalSecondsPerCubicCentimeter);
    }

    /** */
    public get PascalMinutesPerCubicCentimeter(): number {
        if(this.pascalminutespercubiccentimeterLazy !== null){
            return this.pascalminutespercubiccentimeterLazy;
        }
        return this.pascalminutespercubiccentimeterLazy = this.convertFromBase(FluidResistanceUnits.PascalMinutesPerCubicCentimeter);
    }

    /** */
    public get DyneSecondsPerCentimeterToTheFifth(): number {
        if(this.dynesecondspercentimetertothefifthLazy !== null){
            return this.dynesecondspercentimetertothefifthLazy;
        }
        return this.dynesecondspercentimetertothefifthLazy = this.convertFromBase(FluidResistanceUnits.DyneSecondsPerCentimeterToTheFifth);
    }

    /** */
    public get MillimeterMercurySecondsPerLiter(): number {
        if(this.millimetermercurysecondsperliterLazy !== null){
            return this.millimetermercurysecondsperliterLazy;
        }
        return this.millimetermercurysecondsperliterLazy = this.convertFromBase(FluidResistanceUnits.MillimeterMercurySecondsPerLiter);
    }

    /** */
    public get MillimeterMercuryMinutesPerLiter(): number {
        if(this.millimetermercuryminutesperliterLazy !== null){
            return this.millimetermercuryminutesperliterLazy;
        }
        return this.millimetermercuryminutesperliterLazy = this.convertFromBase(FluidResistanceUnits.MillimeterMercuryMinutesPerLiter);
    }

    /** */
    public get MillimeterMercurySecondsPerMilliliter(): number {
        if(this.millimetermercurysecondspermilliliterLazy !== null){
            return this.millimetermercurysecondspermilliliterLazy;
        }
        return this.millimetermercurysecondspermilliliterLazy = this.convertFromBase(FluidResistanceUnits.MillimeterMercurySecondsPerMilliliter);
    }

    /** */
    public get MillimeterMercuryMinutesPerMilliliter(): number {
        if(this.millimetermercuryminutespermilliliterLazy !== null){
            return this.millimetermercuryminutespermilliliterLazy;
        }
        return this.millimetermercuryminutespermilliliterLazy = this.convertFromBase(FluidResistanceUnits.MillimeterMercuryMinutesPerMilliliter);
    }

    /** */
    public get MillimeterMercurySecondsPerCubicCentimeter(): number {
        if(this.millimetermercurysecondspercubiccentimeterLazy !== null){
            return this.millimetermercurysecondspercubiccentimeterLazy;
        }
        return this.millimetermercurysecondspercubiccentimeterLazy = this.convertFromBase(FluidResistanceUnits.MillimeterMercurySecondsPerCubicCentimeter);
    }

    /** */
    public get MillimeterMercuryMinutesPerCubicCentimeter(): number {
        if(this.millimetermercuryminutespercubiccentimeterLazy !== null){
            return this.millimetermercuryminutespercubiccentimeterLazy;
        }
        return this.millimetermercuryminutespercubiccentimeterLazy = this.convertFromBase(FluidResistanceUnits.MillimeterMercuryMinutesPerCubicCentimeter);
    }

    /** */
    public get MillimeterMercurySecondsPerCubicMeter(): number {
        if(this.millimetermercurysecondspercubicmeterLazy !== null){
            return this.millimetermercurysecondspercubicmeterLazy;
        }
        return this.millimetermercurysecondspercubicmeterLazy = this.convertFromBase(FluidResistanceUnits.MillimeterMercurySecondsPerCubicMeter);
    }

    /** */
    public get MillimeterMercuryMinutesPerCubicMeter(): number {
        if(this.millimetermercuryminutespercubicmeterLazy !== null){
            return this.millimetermercuryminutespercubicmeterLazy;
        }
        return this.millimetermercuryminutespercubicmeterLazy = this.convertFromBase(FluidResistanceUnits.MillimeterMercuryMinutesPerCubicMeter);
    }

    /** */
    public get WoodUnits(): number {
        if(this.woodunitsLazy !== null){
            return this.woodunitsLazy;
        }
        return this.woodunitsLazy = this.convertFromBase(FluidResistanceUnits.WoodUnits);
    }

    /** */
    public get MegapascalSecondsPerCubicMeter(): number {
        if(this.megapascalsecondspercubicmeterLazy !== null){
            return this.megapascalsecondspercubicmeterLazy;
        }
        return this.megapascalsecondspercubicmeterLazy = this.convertFromBase(FluidResistanceUnits.MegapascalSecondsPerCubicMeter);
    }

    /**
     * Create a new FluidResistance instance from a PascalSecondsPerLiter
     *
     * @param value The unit as PascalSecondsPerLiter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromPascalSecondsPerLiter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.PascalSecondsPerLiter);
    }

    /**
     * Create a new FluidResistance instance from a PascalMinutesPerLiter
     *
     * @param value The unit as PascalMinutesPerLiter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromPascalMinutesPerLiter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.PascalMinutesPerLiter);
    }

    /**
     * Create a new FluidResistance instance from a PascalSecondsPerMilliliter
     *
     * @param value The unit as PascalSecondsPerMilliliter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromPascalSecondsPerMilliliter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.PascalSecondsPerMilliliter);
    }

    /**
     * Create a new FluidResistance instance from a PascalMinutesPerMilliliter
     *
     * @param value The unit as PascalMinutesPerMilliliter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromPascalMinutesPerMilliliter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.PascalMinutesPerMilliliter);
    }

    /**
     * Create a new FluidResistance instance from a PascalSecondsPerCubicMeter
     *
     * @param value The unit as PascalSecondsPerCubicMeter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromPascalSecondsPerCubicMeter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.PascalSecondsPerCubicMeter);
    }

    /**
     * Create a new FluidResistance instance from a PascalMinutesPerCubicMeter
     *
     * @param value The unit as PascalMinutesPerCubicMeter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromPascalMinutesPerCubicMeter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.PascalMinutesPerCubicMeter);
    }

    /**
     * Create a new FluidResistance instance from a PascalSecondsPerCubicCentimeter
     *
     * @param value The unit as PascalSecondsPerCubicCentimeter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromPascalSecondsPerCubicCentimeter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.PascalSecondsPerCubicCentimeter);
    }

    /**
     * Create a new FluidResistance instance from a PascalMinutesPerCubicCentimeter
     *
     * @param value The unit as PascalMinutesPerCubicCentimeter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromPascalMinutesPerCubicCentimeter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.PascalMinutesPerCubicCentimeter);
    }

    /**
     * Create a new FluidResistance instance from a DyneSecondsPerCentimeterToTheFifth
     *
     * @param value The unit as DyneSecondsPerCentimeterToTheFifth to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromDyneSecondsPerCentimeterToTheFifth(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.DyneSecondsPerCentimeterToTheFifth);
    }

    /**
     * Create a new FluidResistance instance from a MillimeterMercurySecondsPerLiter
     *
     * @param value The unit as MillimeterMercurySecondsPerLiter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromMillimeterMercurySecondsPerLiter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.MillimeterMercurySecondsPerLiter);
    }

    /**
     * Create a new FluidResistance instance from a MillimeterMercuryMinutesPerLiter
     *
     * @param value The unit as MillimeterMercuryMinutesPerLiter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromMillimeterMercuryMinutesPerLiter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.MillimeterMercuryMinutesPerLiter);
    }

    /**
     * Create a new FluidResistance instance from a MillimeterMercurySecondsPerMilliliter
     *
     * @param value The unit as MillimeterMercurySecondsPerMilliliter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromMillimeterMercurySecondsPerMilliliter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.MillimeterMercurySecondsPerMilliliter);
    }

    /**
     * Create a new FluidResistance instance from a MillimeterMercuryMinutesPerMilliliter
     *
     * @param value The unit as MillimeterMercuryMinutesPerMilliliter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromMillimeterMercuryMinutesPerMilliliter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.MillimeterMercuryMinutesPerMilliliter);
    }

    /**
     * Create a new FluidResistance instance from a MillimeterMercurySecondsPerCubicCentimeter
     *
     * @param value The unit as MillimeterMercurySecondsPerCubicCentimeter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromMillimeterMercurySecondsPerCubicCentimeter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.MillimeterMercurySecondsPerCubicCentimeter);
    }

    /**
     * Create a new FluidResistance instance from a MillimeterMercuryMinutesPerCubicCentimeter
     *
     * @param value The unit as MillimeterMercuryMinutesPerCubicCentimeter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromMillimeterMercuryMinutesPerCubicCentimeter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.MillimeterMercuryMinutesPerCubicCentimeter);
    }

    /**
     * Create a new FluidResistance instance from a MillimeterMercurySecondsPerCubicMeter
     *
     * @param value The unit as MillimeterMercurySecondsPerCubicMeter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromMillimeterMercurySecondsPerCubicMeter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.MillimeterMercurySecondsPerCubicMeter);
    }

    /**
     * Create a new FluidResistance instance from a MillimeterMercuryMinutesPerCubicMeter
     *
     * @param value The unit as MillimeterMercuryMinutesPerCubicMeter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromMillimeterMercuryMinutesPerCubicMeter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.MillimeterMercuryMinutesPerCubicMeter);
    }

    /**
     * Create a new FluidResistance instance from a WoodUnits
     *
     * @param value The unit as WoodUnits to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromWoodUnits(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.WoodUnits);
    }

    /**
     * Create a new FluidResistance instance from a MegapascalSecondsPerCubicMeter
     *
     * @param value The unit as MegapascalSecondsPerCubicMeter to create a new FluidResistance from.
     * @returns The new FluidResistance instance.
     */
    public static FromMegapascalSecondsPerCubicMeter(value: number): FluidResistance {
        return new FluidResistance(value, FluidResistanceUnits.MegapascalSecondsPerCubicMeter);
    }

    /**
     * Gets the base unit enumeration associated with FluidResistance
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof FluidResistanceUnits {
        return FluidResistanceUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): FluidResistanceUnits.PascalSecondsPerCubicMeter {
        return FluidResistanceUnits.PascalSecondsPerCubicMeter;
    }

    /**
     * Create API DTO represent a FluidResistance unit.
     * @param holdInUnit The specific FluidResistance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: FluidResistanceUnits = FluidResistanceUnits.PascalSecondsPerCubicMeter): FluidResistanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a FluidResistance unit from an API DTO representation.
     * @param dtoFluidResistance The FluidResistance API DTO representation
     */
    public static FromDto(dtoFluidResistance: FluidResistanceDto): FluidResistance {
        return new FluidResistance(dtoFluidResistance.value, dtoFluidResistance.unit);
    }

    /**
     * Convert FluidResistance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: FluidResistanceUnits): number {
        switch (toUnit) {
            case FluidResistanceUnits.PascalSecondsPerLiter: return this.PascalSecondsPerLiter;
            case FluidResistanceUnits.PascalMinutesPerLiter: return this.PascalMinutesPerLiter;
            case FluidResistanceUnits.PascalSecondsPerMilliliter: return this.PascalSecondsPerMilliliter;
            case FluidResistanceUnits.PascalMinutesPerMilliliter: return this.PascalMinutesPerMilliliter;
            case FluidResistanceUnits.PascalSecondsPerCubicMeter: return this.PascalSecondsPerCubicMeter;
            case FluidResistanceUnits.PascalMinutesPerCubicMeter: return this.PascalMinutesPerCubicMeter;
            case FluidResistanceUnits.PascalSecondsPerCubicCentimeter: return this.PascalSecondsPerCubicCentimeter;
            case FluidResistanceUnits.PascalMinutesPerCubicCentimeter: return this.PascalMinutesPerCubicCentimeter;
            case FluidResistanceUnits.DyneSecondsPerCentimeterToTheFifth: return this.DyneSecondsPerCentimeterToTheFifth;
            case FluidResistanceUnits.MillimeterMercurySecondsPerLiter: return this.MillimeterMercurySecondsPerLiter;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerLiter: return this.MillimeterMercuryMinutesPerLiter;
            case FluidResistanceUnits.MillimeterMercurySecondsPerMilliliter: return this.MillimeterMercurySecondsPerMilliliter;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerMilliliter: return this.MillimeterMercuryMinutesPerMilliliter;
            case FluidResistanceUnits.MillimeterMercurySecondsPerCubicCentimeter: return this.MillimeterMercurySecondsPerCubicCentimeter;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicCentimeter: return this.MillimeterMercuryMinutesPerCubicCentimeter;
            case FluidResistanceUnits.MillimeterMercurySecondsPerCubicMeter: return this.MillimeterMercurySecondsPerCubicMeter;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicMeter: return this.MillimeterMercuryMinutesPerCubicMeter;
            case FluidResistanceUnits.WoodUnits: return this.WoodUnits;
            case FluidResistanceUnits.MegapascalSecondsPerCubicMeter: return this.MegapascalSecondsPerCubicMeter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: FluidResistanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case FluidResistanceUnits.PascalSecondsPerLiter: return super.internalDivide(this.value, 1e3);
                case FluidResistanceUnits.PascalMinutesPerLiter: return super.internalDivide(this.value, 6e4);
                case FluidResistanceUnits.PascalSecondsPerMilliliter: return super.internalDivide(this.value, 1e6);
                case FluidResistanceUnits.PascalMinutesPerMilliliter: return super.internalDivide(this.value, 6e7);
                case FluidResistanceUnits.PascalSecondsPerCubicMeter: return this.value;
                case FluidResistanceUnits.PascalMinutesPerCubicMeter: return super.internalDivide(this.value, 60);
                case FluidResistanceUnits.PascalSecondsPerCubicCentimeter: return super.internalDivide(this.value, 1e6);
                case FluidResistanceUnits.PascalMinutesPerCubicCentimeter: return super.internalDivide(this.value, 6e7);
                case FluidResistanceUnits.DyneSecondsPerCentimeterToTheFifth: return super.internalDivide(this.value, 1e5);
                case FluidResistanceUnits.MillimeterMercurySecondsPerLiter: return super.internalDivide(this.value, 1.33322368e5);
                case FluidResistanceUnits.MillimeterMercuryMinutesPerLiter: return super.internalDivide(this.value, 7.99934208e6);
                case FluidResistanceUnits.MillimeterMercurySecondsPerMilliliter: return super.internalDivide(this.value, 1.33322368e8);
                case FluidResistanceUnits.MillimeterMercuryMinutesPerMilliliter: return super.internalDivide(this.value, 7.99934208e9);
                case FluidResistanceUnits.MillimeterMercurySecondsPerCubicCentimeter: return super.internalDivide(this.value, 1.33322368e8);
                case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicCentimeter: return super.internalDivide(this.value, 7.99934208e9);
                case FluidResistanceUnits.MillimeterMercurySecondsPerCubicMeter: return super.internalDivide(this.value, 133.322368);
                case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicMeter: return super.internalDivide(this.value, 7.99934208e3);
                case FluidResistanceUnits.WoodUnits: return super.internalDivide(this.value, 7.99934208e6);
                case FluidResistanceUnits.MegapascalSecondsPerCubicMeter: return super.internalDivide(this.value, 1000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case FluidResistanceUnits.PascalSecondsPerLiter: return this.value / 1e3;
            case FluidResistanceUnits.PascalMinutesPerLiter: return this.value / 6e4;
            case FluidResistanceUnits.PascalSecondsPerMilliliter: return this.value / 1e6;
            case FluidResistanceUnits.PascalMinutesPerMilliliter: return this.value / 6e7;
            case FluidResistanceUnits.PascalSecondsPerCubicMeter: return this.value;
            case FluidResistanceUnits.PascalMinutesPerCubicMeter: return this.value / 60;
            case FluidResistanceUnits.PascalSecondsPerCubicCentimeter: return this.value / 1e6;
            case FluidResistanceUnits.PascalMinutesPerCubicCentimeter: return this.value / 6e7;
            case FluidResistanceUnits.DyneSecondsPerCentimeterToTheFifth: return this.value / 1e5;
            case FluidResistanceUnits.MillimeterMercurySecondsPerLiter: return this.value / 1.33322368e5;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerLiter: return this.value / 7.99934208e6;
            case FluidResistanceUnits.MillimeterMercurySecondsPerMilliliter: return this.value / 1.33322368e8;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerMilliliter: return this.value / 7.99934208e9;
            case FluidResistanceUnits.MillimeterMercurySecondsPerCubicCentimeter: return this.value / 1.33322368e8;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicCentimeter: return this.value / 7.99934208e9;
            case FluidResistanceUnits.MillimeterMercurySecondsPerCubicMeter: return this.value / 133.322368;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicMeter: return this.value / 7.99934208e3;
            case FluidResistanceUnits.WoodUnits: return this.value / 7.99934208e6;
            case FluidResistanceUnits.MegapascalSecondsPerCubicMeter: return (this.value) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: FluidResistanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case FluidResistanceUnits.PascalSecondsPerLiter: return super.internalMultiply(value, 1e3);
                case FluidResistanceUnits.PascalMinutesPerLiter: return super.internalMultiply(value, 6e4);
                case FluidResistanceUnits.PascalSecondsPerMilliliter: return super.internalMultiply(value, 1e6);
                case FluidResistanceUnits.PascalMinutesPerMilliliter: return super.internalMultiply(value, 6e7);
                case FluidResistanceUnits.PascalSecondsPerCubicMeter: return value;
                case FluidResistanceUnits.PascalMinutesPerCubicMeter: return super.internalMultiply(value, 60);
                case FluidResistanceUnits.PascalSecondsPerCubicCentimeter: return super.internalMultiply(value, 1e6);
                case FluidResistanceUnits.PascalMinutesPerCubicCentimeter: return super.internalMultiply(value, 6e7);
                case FluidResistanceUnits.DyneSecondsPerCentimeterToTheFifth: return super.internalMultiply(value, 1e5);
                case FluidResistanceUnits.MillimeterMercurySecondsPerLiter: return super.internalMultiply(value, 1.33322368e5);
                case FluidResistanceUnits.MillimeterMercuryMinutesPerLiter: return super.internalMultiply(value, 7.99934208e6);
                case FluidResistanceUnits.MillimeterMercurySecondsPerMilliliter: return super.internalMultiply(value, 1.33322368e8);
                case FluidResistanceUnits.MillimeterMercuryMinutesPerMilliliter: return super.internalMultiply(value, 7.99934208e9);
                case FluidResistanceUnits.MillimeterMercurySecondsPerCubicCentimeter: return super.internalMultiply(value, 1.33322368e8);
                case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicCentimeter: return super.internalMultiply(value, 7.99934208e9);
                case FluidResistanceUnits.MillimeterMercurySecondsPerCubicMeter: return super.internalMultiply(value, 133.322368);
                case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicMeter: return super.internalMultiply(value, 7.99934208e3);
                case FluidResistanceUnits.WoodUnits: return super.internalMultiply(value, 7.99934208e6);
                case FluidResistanceUnits.MegapascalSecondsPerCubicMeter: return super.internalMultiply(value, 1000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case FluidResistanceUnits.PascalSecondsPerLiter: return value * 1e3;
            case FluidResistanceUnits.PascalMinutesPerLiter: return value * 6e4;
            case FluidResistanceUnits.PascalSecondsPerMilliliter: return value * 1e6;
            case FluidResistanceUnits.PascalMinutesPerMilliliter: return value * 6e7;
            case FluidResistanceUnits.PascalSecondsPerCubicMeter: return value;
            case FluidResistanceUnits.PascalMinutesPerCubicMeter: return value * 60;
            case FluidResistanceUnits.PascalSecondsPerCubicCentimeter: return value * 1e6;
            case FluidResistanceUnits.PascalMinutesPerCubicCentimeter: return value * 6e7;
            case FluidResistanceUnits.DyneSecondsPerCentimeterToTheFifth: return value * 1e5;
            case FluidResistanceUnits.MillimeterMercurySecondsPerLiter: return value * 1.33322368e5;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerLiter: return value * 7.99934208e6;
            case FluidResistanceUnits.MillimeterMercurySecondsPerMilliliter: return value * 1.33322368e8;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerMilliliter: return value * 7.99934208e9;
            case FluidResistanceUnits.MillimeterMercurySecondsPerCubicCentimeter: return value * 1.33322368e8;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicCentimeter: return value * 7.99934208e9;
            case FluidResistanceUnits.MillimeterMercurySecondsPerCubicMeter: return value * 133.322368;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicMeter: return value * 7.99934208e3;
            case FluidResistanceUnits.WoodUnits: return value * 7.99934208e6;
            case FluidResistanceUnits.MegapascalSecondsPerCubicMeter: return (value) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the FluidResistance to string.
     * Note! the default format for FluidResistance is PascalSecondsPerCubicMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the FluidResistance.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the FluidResistance.
     */
    public toString(unit: FluidResistanceUnits = FluidResistanceUnits.PascalSecondsPerCubicMeter, fractionalDigits?: number): string {

        switch (unit) {
            
            case FluidResistanceUnits.PascalSecondsPerLiter:
                return super.truncateFractionDigits(this.PascalSecondsPerLiter, fractionalDigits) + ` Pa·s/l`;
            case FluidResistanceUnits.PascalMinutesPerLiter:
                return super.truncateFractionDigits(this.PascalMinutesPerLiter, fractionalDigits) + ` Pa·min/l`;
            case FluidResistanceUnits.PascalSecondsPerMilliliter:
                return super.truncateFractionDigits(this.PascalSecondsPerMilliliter, fractionalDigits) + ` Pa·s/ml`;
            case FluidResistanceUnits.PascalMinutesPerMilliliter:
                return super.truncateFractionDigits(this.PascalMinutesPerMilliliter, fractionalDigits) + ` Pa·min/ml`;
            case FluidResistanceUnits.PascalSecondsPerCubicMeter:
                return super.truncateFractionDigits(this.PascalSecondsPerCubicMeter, fractionalDigits) + ` Pa·s/m³`;
            case FluidResistanceUnits.PascalMinutesPerCubicMeter:
                return super.truncateFractionDigits(this.PascalMinutesPerCubicMeter, fractionalDigits) + ` Pa·min/m³`;
            case FluidResistanceUnits.PascalSecondsPerCubicCentimeter:
                return super.truncateFractionDigits(this.PascalSecondsPerCubicCentimeter, fractionalDigits) + ` Pa·s/cm³`;
            case FluidResistanceUnits.PascalMinutesPerCubicCentimeter:
                return super.truncateFractionDigits(this.PascalMinutesPerCubicCentimeter, fractionalDigits) + ` Pa·min/cm³`;
            case FluidResistanceUnits.DyneSecondsPerCentimeterToTheFifth:
                return super.truncateFractionDigits(this.DyneSecondsPerCentimeterToTheFifth, fractionalDigits) + ` dyn·s/cm⁵`;
            case FluidResistanceUnits.MillimeterMercurySecondsPerLiter:
                return super.truncateFractionDigits(this.MillimeterMercurySecondsPerLiter, fractionalDigits) + ` mmHg·s/l`;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerLiter:
                return super.truncateFractionDigits(this.MillimeterMercuryMinutesPerLiter, fractionalDigits) + ` mmHg·min/l`;
            case FluidResistanceUnits.MillimeterMercurySecondsPerMilliliter:
                return super.truncateFractionDigits(this.MillimeterMercurySecondsPerMilliliter, fractionalDigits) + ` mmHg·s/ml`;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerMilliliter:
                return super.truncateFractionDigits(this.MillimeterMercuryMinutesPerMilliliter, fractionalDigits) + ` mmHg·min/ml`;
            case FluidResistanceUnits.MillimeterMercurySecondsPerCubicCentimeter:
                return super.truncateFractionDigits(this.MillimeterMercurySecondsPerCubicCentimeter, fractionalDigits) + ` mmHg·s/cm³`;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicCentimeter:
                return super.truncateFractionDigits(this.MillimeterMercuryMinutesPerCubicCentimeter, fractionalDigits) + ` mmHg·min/cm³`;
            case FluidResistanceUnits.MillimeterMercurySecondsPerCubicMeter:
                return super.truncateFractionDigits(this.MillimeterMercurySecondsPerCubicMeter, fractionalDigits) + ` mmHg·s/m³`;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicMeter:
                return super.truncateFractionDigits(this.MillimeterMercuryMinutesPerCubicMeter, fractionalDigits) + ` mmHg·min/m³`;
            case FluidResistanceUnits.WoodUnits:
                return super.truncateFractionDigits(this.WoodUnits, fractionalDigits) + ` WU`;
            case FluidResistanceUnits.MegapascalSecondsPerCubicMeter:
                return super.truncateFractionDigits(this.MegapascalSecondsPerCubicMeter, fractionalDigits) + ` MPa·s/m³`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get FluidResistance unit abbreviation.
     * Note! the default abbreviation for FluidResistance is PascalSecondsPerCubicMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the FluidResistance.
     * @returns The abbreviation string of FluidResistance.
     */
    public getUnitAbbreviation(unitAbbreviation: FluidResistanceUnits = FluidResistanceUnits.PascalSecondsPerCubicMeter): string {

        switch (unitAbbreviation) {
            
            case FluidResistanceUnits.PascalSecondsPerLiter:
                return `Pa·s/l`;
            case FluidResistanceUnits.PascalMinutesPerLiter:
                return `Pa·min/l`;
            case FluidResistanceUnits.PascalSecondsPerMilliliter:
                return `Pa·s/ml`;
            case FluidResistanceUnits.PascalMinutesPerMilliliter:
                return `Pa·min/ml`;
            case FluidResistanceUnits.PascalSecondsPerCubicMeter:
                return `Pa·s/m³`;
            case FluidResistanceUnits.PascalMinutesPerCubicMeter:
                return `Pa·min/m³`;
            case FluidResistanceUnits.PascalSecondsPerCubicCentimeter:
                return `Pa·s/cm³`;
            case FluidResistanceUnits.PascalMinutesPerCubicCentimeter:
                return `Pa·min/cm³`;
            case FluidResistanceUnits.DyneSecondsPerCentimeterToTheFifth:
                return `dyn·s/cm⁵`;
            case FluidResistanceUnits.MillimeterMercurySecondsPerLiter:
                return `mmHg·s/l`;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerLiter:
                return `mmHg·min/l`;
            case FluidResistanceUnits.MillimeterMercurySecondsPerMilliliter:
                return `mmHg·s/ml`;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerMilliliter:
                return `mmHg·min/ml`;
            case FluidResistanceUnits.MillimeterMercurySecondsPerCubicCentimeter:
                return `mmHg·s/cm³`;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicCentimeter:
                return `mmHg·min/cm³`;
            case FluidResistanceUnits.MillimeterMercurySecondsPerCubicMeter:
                return `mmHg·s/m³`;
            case FluidResistanceUnits.MillimeterMercuryMinutesPerCubicMeter:
                return `mmHg·min/m³`;
            case FluidResistanceUnits.WoodUnits:
                return `WU`;
            case FluidResistanceUnits.MegapascalSecondsPerCubicMeter:
                return `MPa·s/m³`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given FluidResistance are equals to the current FluidResistance.
     * @param fluidResistance The other FluidResistance.
     * @returns True if the given FluidResistance are equal to the current FluidResistance.
     */
    public equals(fluidResistance: FluidResistance): boolean {
        return super.internalEquals(this.value, fluidResistance.BaseValue);
    }

    /**
     * Compare the given FluidResistance against the current FluidResistance.
     * @param fluidResistance The other FluidResistance.
     * @returns 0 if they are equal, -1 if the current FluidResistance is less then other, 1 if the current FluidResistance is greater then other.
     */
    public compareTo(fluidResistance: FluidResistance): number {
        return super.internalCompareTo(this.value, fluidResistance.BaseValue);
    }

    /**
     * Add the given FluidResistance with the current FluidResistance.
     * @param fluidResistance The other FluidResistance.
     * @returns A new FluidResistance instance with the results.
     */
    public add(fluidResistance: FluidResistance): FluidResistance {
        return new FluidResistance(super.internalAdd(this.value, fluidResistance.BaseValue))
    }

    /**
     * Subtract the given FluidResistance with the current FluidResistance.
     * @param fluidResistance The other FluidResistance.
     * @returns A new FluidResistance instance with the results.
     */
    public subtract(fluidResistance: FluidResistance): FluidResistance {
        return new FluidResistance(super.internalSubtract(this.value, fluidResistance.BaseValue))
    }

    /**
     * Multiply the given FluidResistance with the current FluidResistance.
     * @param fluidResistance The other FluidResistance.
     * @returns A new FluidResistance instance with the results.
     */
    public multiply(fluidResistance: FluidResistance): FluidResistance {
        return new FluidResistance(super.internalMultiply(this.value, fluidResistance.BaseValue))
    }

    /**
     * Divide the given FluidResistance with the current FluidResistance.
     * @param fluidResistance The other FluidResistance.
     * @returns A new FluidResistance instance with the results.
     */
    public divide(fluidResistance: FluidResistance): FluidResistance {
        return new FluidResistance(super.internalDivide(this.value, fluidResistance.BaseValue))
    }

    /**
     * Modulo the given FluidResistance with the current FluidResistance.
     * @param fluidResistance The other FluidResistance.
     * @returns A new FluidResistance instance with the results.
     */
    public modulo(fluidResistance: FluidResistance): FluidResistance {
        return new FluidResistance(super.internalModulo(this.value, fluidResistance.BaseValue))
    }

    /**
     * Pow the given FluidResistance with the current FluidResistance.
     * @param fluidResistance The other FluidResistance.
     * @returns A new FluidResistance instance with the results.
     */
    public pow(fluidResistance: FluidResistance): FluidResistance {
        return new FluidResistance(super.internalPow(this.value, fluidResistance.BaseValue))
    }
}
