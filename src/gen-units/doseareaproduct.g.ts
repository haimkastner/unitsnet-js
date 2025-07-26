import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a DoseAreaProduct */
export interface DoseAreaProductDto {
    /** The value of the DoseAreaProduct */
    value: number;
    /**  The specific unit that the DoseAreaProduct value is representing */
    unit: DoseAreaProductUnits;
}

/** DoseAreaProductUnits enumeration */
export enum DoseAreaProductUnits {
    /** */
    GraySquareMeters = "GraySquareMeter",
    /** */
    GraySquareDecimeters = "GraySquareDecimeter",
    /** */
    GraySquareCentimeters = "GraySquareCentimeter",
    /** */
    GraySquareMillimeters = "GraySquareMillimeter",
    /** */
    GraySquareMicrometers = "GraySquareMicrometer",
    /** */
    MicrograySquareMeters = "MicrograySquareMeter",
    /** */
    MilligraySquareMeters = "MilligraySquareMeter",
    /** */
    CentigraySquareMeters = "CentigraySquareMeter",
    /** */
    DecigraySquareMeters = "DecigraySquareMeter",
    /** */
    MicrograySquareDecimeters = "MicrograySquareDecimeter",
    /** */
    MilligraySquareDecimeters = "MilligraySquareDecimeter",
    /** */
    CentigraySquareDecimeters = "CentigraySquareDecimeter",
    /** */
    DecigraySquareDecimeters = "DecigraySquareDecimeter",
    /** */
    MicrograySquareCentimeters = "MicrograySquareCentimeter",
    /** */
    MilligraySquareCentimeters = "MilligraySquareCentimeter",
    /** */
    CentigraySquareCentimeters = "CentigraySquareCentimeter",
    /** */
    DecigraySquareCentimeters = "DecigraySquareCentimeter",
    /** */
    MicrograySquareMillimeters = "MicrograySquareMillimeter",
    /** */
    MilligraySquareMillimeters = "MilligraySquareMillimeter",
    /** */
    CentigraySquareMillimeters = "CentigraySquareMillimeter",
    /** */
    DecigraySquareMillimeters = "DecigraySquareMillimeter",
    /** */
    MicrograySquareMicrometers = "MicrograySquareMicrometer",
    /** */
    MilligraySquareMicrometers = "MilligraySquareMicrometer",
    /** */
    CentigraySquareMicrometers = "CentigraySquareMicrometer",
    /** */
    DecigraySquareMicrometers = "DecigraySquareMicrometer"
}

/** It is defined as the absorbed dose multiplied by the area irradiated. */
export class DoseAreaProduct extends BaseUnit {
    protected value: number;
    private graysquaremetersLazy: number | null = null;
    private graysquaredecimetersLazy: number | null = null;
    private graysquarecentimetersLazy: number | null = null;
    private graysquaremillimetersLazy: number | null = null;
    private graysquaremicrometersLazy: number | null = null;
    private micrograysquaremetersLazy: number | null = null;
    private milligraysquaremetersLazy: number | null = null;
    private centigraysquaremetersLazy: number | null = null;
    private decigraysquaremetersLazy: number | null = null;
    private micrograysquaredecimetersLazy: number | null = null;
    private milligraysquaredecimetersLazy: number | null = null;
    private centigraysquaredecimetersLazy: number | null = null;
    private decigraysquaredecimetersLazy: number | null = null;
    private micrograysquarecentimetersLazy: number | null = null;
    private milligraysquarecentimetersLazy: number | null = null;
    private centigraysquarecentimetersLazy: number | null = null;
    private decigraysquarecentimetersLazy: number | null = null;
    private micrograysquaremillimetersLazy: number | null = null;
    private milligraysquaremillimetersLazy: number | null = null;
    private centigraysquaremillimetersLazy: number | null = null;
    private decigraysquaremillimetersLazy: number | null = null;
    private micrograysquaremicrometersLazy: number | null = null;
    private milligraysquaremicrometersLazy: number | null = null;
    private centigraysquaremicrometersLazy: number | null = null;
    private decigraysquaremicrometersLazy: number | null = null;

    /**
     * Create a new DoseAreaProduct.
     * @param value The value.
     * @param fromUnit The ‘DoseAreaProduct’ unit to create from.
     * The default unit is GraySquareMeters
     */
    public constructor(value: number, fromUnit: DoseAreaProductUnits = DoseAreaProductUnits.GraySquareMeters) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of DoseAreaProduct is GraySquareMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): DoseAreaProductUnits.GraySquareMeters {
        return DoseAreaProductUnits.GraySquareMeters
    }

    /** */
    public get GraySquareMeters(): number {
        if(this.graysquaremetersLazy !== null){
            return this.graysquaremetersLazy;
        }
        return this.graysquaremetersLazy = this.convertFromBase(DoseAreaProductUnits.GraySquareMeters);
    }

    /** */
    public get GraySquareDecimeters(): number {
        if(this.graysquaredecimetersLazy !== null){
            return this.graysquaredecimetersLazy;
        }
        return this.graysquaredecimetersLazy = this.convertFromBase(DoseAreaProductUnits.GraySquareDecimeters);
    }

    /** */
    public get GraySquareCentimeters(): number {
        if(this.graysquarecentimetersLazy !== null){
            return this.graysquarecentimetersLazy;
        }
        return this.graysquarecentimetersLazy = this.convertFromBase(DoseAreaProductUnits.GraySquareCentimeters);
    }

    /** */
    public get GraySquareMillimeters(): number {
        if(this.graysquaremillimetersLazy !== null){
            return this.graysquaremillimetersLazy;
        }
        return this.graysquaremillimetersLazy = this.convertFromBase(DoseAreaProductUnits.GraySquareMillimeters);
    }

    /** */
    public get GraySquareMicrometers(): number {
        if(this.graysquaremicrometersLazy !== null){
            return this.graysquaremicrometersLazy;
        }
        return this.graysquaremicrometersLazy = this.convertFromBase(DoseAreaProductUnits.GraySquareMicrometers);
    }

    /** */
    public get MicrograySquareMeters(): number {
        if(this.micrograysquaremetersLazy !== null){
            return this.micrograysquaremetersLazy;
        }
        return this.micrograysquaremetersLazy = this.convertFromBase(DoseAreaProductUnits.MicrograySquareMeters);
    }

    /** */
    public get MilligraySquareMeters(): number {
        if(this.milligraysquaremetersLazy !== null){
            return this.milligraysquaremetersLazy;
        }
        return this.milligraysquaremetersLazy = this.convertFromBase(DoseAreaProductUnits.MilligraySquareMeters);
    }

    /** */
    public get CentigraySquareMeters(): number {
        if(this.centigraysquaremetersLazy !== null){
            return this.centigraysquaremetersLazy;
        }
        return this.centigraysquaremetersLazy = this.convertFromBase(DoseAreaProductUnits.CentigraySquareMeters);
    }

    /** */
    public get DecigraySquareMeters(): number {
        if(this.decigraysquaremetersLazy !== null){
            return this.decigraysquaremetersLazy;
        }
        return this.decigraysquaremetersLazy = this.convertFromBase(DoseAreaProductUnits.DecigraySquareMeters);
    }

    /** */
    public get MicrograySquareDecimeters(): number {
        if(this.micrograysquaredecimetersLazy !== null){
            return this.micrograysquaredecimetersLazy;
        }
        return this.micrograysquaredecimetersLazy = this.convertFromBase(DoseAreaProductUnits.MicrograySquareDecimeters);
    }

    /** */
    public get MilligraySquareDecimeters(): number {
        if(this.milligraysquaredecimetersLazy !== null){
            return this.milligraysquaredecimetersLazy;
        }
        return this.milligraysquaredecimetersLazy = this.convertFromBase(DoseAreaProductUnits.MilligraySquareDecimeters);
    }

    /** */
    public get CentigraySquareDecimeters(): number {
        if(this.centigraysquaredecimetersLazy !== null){
            return this.centigraysquaredecimetersLazy;
        }
        return this.centigraysquaredecimetersLazy = this.convertFromBase(DoseAreaProductUnits.CentigraySquareDecimeters);
    }

    /** */
    public get DecigraySquareDecimeters(): number {
        if(this.decigraysquaredecimetersLazy !== null){
            return this.decigraysquaredecimetersLazy;
        }
        return this.decigraysquaredecimetersLazy = this.convertFromBase(DoseAreaProductUnits.DecigraySquareDecimeters);
    }

    /** */
    public get MicrograySquareCentimeters(): number {
        if(this.micrograysquarecentimetersLazy !== null){
            return this.micrograysquarecentimetersLazy;
        }
        return this.micrograysquarecentimetersLazy = this.convertFromBase(DoseAreaProductUnits.MicrograySquareCentimeters);
    }

    /** */
    public get MilligraySquareCentimeters(): number {
        if(this.milligraysquarecentimetersLazy !== null){
            return this.milligraysquarecentimetersLazy;
        }
        return this.milligraysquarecentimetersLazy = this.convertFromBase(DoseAreaProductUnits.MilligraySquareCentimeters);
    }

    /** */
    public get CentigraySquareCentimeters(): number {
        if(this.centigraysquarecentimetersLazy !== null){
            return this.centigraysquarecentimetersLazy;
        }
        return this.centigraysquarecentimetersLazy = this.convertFromBase(DoseAreaProductUnits.CentigraySquareCentimeters);
    }

    /** */
    public get DecigraySquareCentimeters(): number {
        if(this.decigraysquarecentimetersLazy !== null){
            return this.decigraysquarecentimetersLazy;
        }
        return this.decigraysquarecentimetersLazy = this.convertFromBase(DoseAreaProductUnits.DecigraySquareCentimeters);
    }

    /** */
    public get MicrograySquareMillimeters(): number {
        if(this.micrograysquaremillimetersLazy !== null){
            return this.micrograysquaremillimetersLazy;
        }
        return this.micrograysquaremillimetersLazy = this.convertFromBase(DoseAreaProductUnits.MicrograySquareMillimeters);
    }

    /** */
    public get MilligraySquareMillimeters(): number {
        if(this.milligraysquaremillimetersLazy !== null){
            return this.milligraysquaremillimetersLazy;
        }
        return this.milligraysquaremillimetersLazy = this.convertFromBase(DoseAreaProductUnits.MilligraySquareMillimeters);
    }

    /** */
    public get CentigraySquareMillimeters(): number {
        if(this.centigraysquaremillimetersLazy !== null){
            return this.centigraysquaremillimetersLazy;
        }
        return this.centigraysquaremillimetersLazy = this.convertFromBase(DoseAreaProductUnits.CentigraySquareMillimeters);
    }

    /** */
    public get DecigraySquareMillimeters(): number {
        if(this.decigraysquaremillimetersLazy !== null){
            return this.decigraysquaremillimetersLazy;
        }
        return this.decigraysquaremillimetersLazy = this.convertFromBase(DoseAreaProductUnits.DecigraySquareMillimeters);
    }

    /** */
    public get MicrograySquareMicrometers(): number {
        if(this.micrograysquaremicrometersLazy !== null){
            return this.micrograysquaremicrometersLazy;
        }
        return this.micrograysquaremicrometersLazy = this.convertFromBase(DoseAreaProductUnits.MicrograySquareMicrometers);
    }

    /** */
    public get MilligraySquareMicrometers(): number {
        if(this.milligraysquaremicrometersLazy !== null){
            return this.milligraysquaremicrometersLazy;
        }
        return this.milligraysquaremicrometersLazy = this.convertFromBase(DoseAreaProductUnits.MilligraySquareMicrometers);
    }

    /** */
    public get CentigraySquareMicrometers(): number {
        if(this.centigraysquaremicrometersLazy !== null){
            return this.centigraysquaremicrometersLazy;
        }
        return this.centigraysquaremicrometersLazy = this.convertFromBase(DoseAreaProductUnits.CentigraySquareMicrometers);
    }

    /** */
    public get DecigraySquareMicrometers(): number {
        if(this.decigraysquaremicrometersLazy !== null){
            return this.decigraysquaremicrometersLazy;
        }
        return this.decigraysquaremicrometersLazy = this.convertFromBase(DoseAreaProductUnits.DecigraySquareMicrometers);
    }

    /**
     * Create a new DoseAreaProduct instance from a GraySquareMeters
     *
     * @param value The unit as GraySquareMeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromGraySquareMeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.GraySquareMeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a GraySquareDecimeters
     *
     * @param value The unit as GraySquareDecimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromGraySquareDecimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.GraySquareDecimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a GraySquareCentimeters
     *
     * @param value The unit as GraySquareCentimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromGraySquareCentimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.GraySquareCentimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a GraySquareMillimeters
     *
     * @param value The unit as GraySquareMillimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromGraySquareMillimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.GraySquareMillimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a GraySquareMicrometers
     *
     * @param value The unit as GraySquareMicrometers to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromGraySquareMicrometers(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.GraySquareMicrometers);
    }

    /**
     * Create a new DoseAreaProduct instance from a MicrograySquareMeters
     *
     * @param value The unit as MicrograySquareMeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromMicrograySquareMeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.MicrograySquareMeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a MilligraySquareMeters
     *
     * @param value The unit as MilligraySquareMeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromMilligraySquareMeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.MilligraySquareMeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a CentigraySquareMeters
     *
     * @param value The unit as CentigraySquareMeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromCentigraySquareMeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.CentigraySquareMeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a DecigraySquareMeters
     *
     * @param value The unit as DecigraySquareMeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromDecigraySquareMeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.DecigraySquareMeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a MicrograySquareDecimeters
     *
     * @param value The unit as MicrograySquareDecimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromMicrograySquareDecimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.MicrograySquareDecimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a MilligraySquareDecimeters
     *
     * @param value The unit as MilligraySquareDecimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromMilligraySquareDecimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.MilligraySquareDecimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a CentigraySquareDecimeters
     *
     * @param value The unit as CentigraySquareDecimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromCentigraySquareDecimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.CentigraySquareDecimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a DecigraySquareDecimeters
     *
     * @param value The unit as DecigraySquareDecimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromDecigraySquareDecimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.DecigraySquareDecimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a MicrograySquareCentimeters
     *
     * @param value The unit as MicrograySquareCentimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromMicrograySquareCentimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.MicrograySquareCentimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a MilligraySquareCentimeters
     *
     * @param value The unit as MilligraySquareCentimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromMilligraySquareCentimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.MilligraySquareCentimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a CentigraySquareCentimeters
     *
     * @param value The unit as CentigraySquareCentimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromCentigraySquareCentimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.CentigraySquareCentimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a DecigraySquareCentimeters
     *
     * @param value The unit as DecigraySquareCentimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromDecigraySquareCentimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.DecigraySquareCentimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a MicrograySquareMillimeters
     *
     * @param value The unit as MicrograySquareMillimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromMicrograySquareMillimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.MicrograySquareMillimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a MilligraySquareMillimeters
     *
     * @param value The unit as MilligraySquareMillimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromMilligraySquareMillimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.MilligraySquareMillimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a CentigraySquareMillimeters
     *
     * @param value The unit as CentigraySquareMillimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromCentigraySquareMillimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.CentigraySquareMillimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a DecigraySquareMillimeters
     *
     * @param value The unit as DecigraySquareMillimeters to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromDecigraySquareMillimeters(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.DecigraySquareMillimeters);
    }

    /**
     * Create a new DoseAreaProduct instance from a MicrograySquareMicrometers
     *
     * @param value The unit as MicrograySquareMicrometers to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromMicrograySquareMicrometers(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.MicrograySquareMicrometers);
    }

    /**
     * Create a new DoseAreaProduct instance from a MilligraySquareMicrometers
     *
     * @param value The unit as MilligraySquareMicrometers to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromMilligraySquareMicrometers(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.MilligraySquareMicrometers);
    }

    /**
     * Create a new DoseAreaProduct instance from a CentigraySquareMicrometers
     *
     * @param value The unit as CentigraySquareMicrometers to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromCentigraySquareMicrometers(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.CentigraySquareMicrometers);
    }

    /**
     * Create a new DoseAreaProduct instance from a DecigraySquareMicrometers
     *
     * @param value The unit as DecigraySquareMicrometers to create a new DoseAreaProduct from.
     * @returns The new DoseAreaProduct instance.
     */
    public static FromDecigraySquareMicrometers(value: number): DoseAreaProduct {
        return new DoseAreaProduct(value, DoseAreaProductUnits.DecigraySquareMicrometers);
    }

    /**
     * Gets the base unit enumeration associated with DoseAreaProduct
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof DoseAreaProductUnits {
        return DoseAreaProductUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): DoseAreaProductUnits.GraySquareMeters {
        return DoseAreaProductUnits.GraySquareMeters;
    }

    /**
     * Create API DTO represent a DoseAreaProduct unit.
     * @param holdInUnit The specific DoseAreaProduct unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: DoseAreaProductUnits = DoseAreaProductUnits.GraySquareMeters): DoseAreaProductDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a DoseAreaProduct unit from an API DTO representation.
     * @param dtoDoseAreaProduct The DoseAreaProduct API DTO representation
     */
    public static FromDto(dtoDoseAreaProduct: DoseAreaProductDto): DoseAreaProduct {
        return new DoseAreaProduct(dtoDoseAreaProduct.value, dtoDoseAreaProduct.unit);
    }

    /**
     * Convert DoseAreaProduct to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: DoseAreaProductUnits): number {
        switch (toUnit) {
            case DoseAreaProductUnits.GraySquareMeters: return this.GraySquareMeters;
            case DoseAreaProductUnits.GraySquareDecimeters: return this.GraySquareDecimeters;
            case DoseAreaProductUnits.GraySquareCentimeters: return this.GraySquareCentimeters;
            case DoseAreaProductUnits.GraySquareMillimeters: return this.GraySquareMillimeters;
            case DoseAreaProductUnits.GraySquareMicrometers: return this.GraySquareMicrometers;
            case DoseAreaProductUnits.MicrograySquareMeters: return this.MicrograySquareMeters;
            case DoseAreaProductUnits.MilligraySquareMeters: return this.MilligraySquareMeters;
            case DoseAreaProductUnits.CentigraySquareMeters: return this.CentigraySquareMeters;
            case DoseAreaProductUnits.DecigraySquareMeters: return this.DecigraySquareMeters;
            case DoseAreaProductUnits.MicrograySquareDecimeters: return this.MicrograySquareDecimeters;
            case DoseAreaProductUnits.MilligraySquareDecimeters: return this.MilligraySquareDecimeters;
            case DoseAreaProductUnits.CentigraySquareDecimeters: return this.CentigraySquareDecimeters;
            case DoseAreaProductUnits.DecigraySquareDecimeters: return this.DecigraySquareDecimeters;
            case DoseAreaProductUnits.MicrograySquareCentimeters: return this.MicrograySquareCentimeters;
            case DoseAreaProductUnits.MilligraySquareCentimeters: return this.MilligraySquareCentimeters;
            case DoseAreaProductUnits.CentigraySquareCentimeters: return this.CentigraySquareCentimeters;
            case DoseAreaProductUnits.DecigraySquareCentimeters: return this.DecigraySquareCentimeters;
            case DoseAreaProductUnits.MicrograySquareMillimeters: return this.MicrograySquareMillimeters;
            case DoseAreaProductUnits.MilligraySquareMillimeters: return this.MilligraySquareMillimeters;
            case DoseAreaProductUnits.CentigraySquareMillimeters: return this.CentigraySquareMillimeters;
            case DoseAreaProductUnits.DecigraySquareMillimeters: return this.DecigraySquareMillimeters;
            case DoseAreaProductUnits.MicrograySquareMicrometers: return this.MicrograySquareMicrometers;
            case DoseAreaProductUnits.MilligraySquareMicrometers: return this.MilligraySquareMicrometers;
            case DoseAreaProductUnits.CentigraySquareMicrometers: return this.CentigraySquareMicrometers;
            case DoseAreaProductUnits.DecigraySquareMicrometers: return this.DecigraySquareMicrometers;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: DoseAreaProductUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case DoseAreaProductUnits.GraySquareMeters: return this.value;
                case DoseAreaProductUnits.GraySquareDecimeters: return super.internalMultiply(this.value, 100);
                case DoseAreaProductUnits.GraySquareCentimeters: return super.internalMultiply(this.value, 10000);
                case DoseAreaProductUnits.GraySquareMillimeters: return super.internalMultiply(this.value, 1000000);
                case DoseAreaProductUnits.GraySquareMicrometers: return super.internalMultiply(this.value, 1000000000000);
                case DoseAreaProductUnits.MicrograySquareMeters: return super.internalDivide(this.value, 0.000001);
                case DoseAreaProductUnits.MilligraySquareMeters: return super.internalDivide(this.value, 0.001);
                case DoseAreaProductUnits.CentigraySquareMeters: return super.internalDivide(this.value, 0.01);
                case DoseAreaProductUnits.DecigraySquareMeters: return super.internalDivide(this.value, 0.1);
                case DoseAreaProductUnits.MicrograySquareDecimeters: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalDivide(v3, 0.000001);
                }
                case DoseAreaProductUnits.MilligraySquareDecimeters: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalDivide(v3, 0.001);
                }
                case DoseAreaProductUnits.CentigraySquareDecimeters: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalDivide(v3, 0.01);
                }
                case DoseAreaProductUnits.DecigraySquareDecimeters: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalDivide(v3, 0.1);
                }
                case DoseAreaProductUnits.MicrograySquareCentimeters: {
                    const v3 = super.internalMultiply(this.value, 10000);
                    return super.internalDivide(v3, 0.000001);
                }
                case DoseAreaProductUnits.MilligraySquareCentimeters: {
                    const v3 = super.internalMultiply(this.value, 10000);
                    return super.internalDivide(v3, 0.001);
                }
                case DoseAreaProductUnits.CentigraySquareCentimeters: {
                    const v3 = super.internalMultiply(this.value, 10000);
                    return super.internalDivide(v3, 0.01);
                }
                case DoseAreaProductUnits.DecigraySquareCentimeters: {
                    const v3 = super.internalMultiply(this.value, 10000);
                    return super.internalDivide(v3, 0.1);
                }
                case DoseAreaProductUnits.MicrograySquareMillimeters: {
                    const v3 = super.internalMultiply(this.value, 1000000);
                    return super.internalDivide(v3, 0.000001);
                }
                case DoseAreaProductUnits.MilligraySquareMillimeters: {
                    const v3 = super.internalMultiply(this.value, 1000000);
                    return super.internalDivide(v3, 0.001);
                }
                case DoseAreaProductUnits.CentigraySquareMillimeters: {
                    const v3 = super.internalMultiply(this.value, 1000000);
                    return super.internalDivide(v3, 0.01);
                }
                case DoseAreaProductUnits.DecigraySquareMillimeters: {
                    const v3 = super.internalMultiply(this.value, 1000000);
                    return super.internalDivide(v3, 0.1);
                }
                case DoseAreaProductUnits.MicrograySquareMicrometers: {
                    const v3 = super.internalMultiply(this.value, 1000000000000);
                    return super.internalDivide(v3, 0.000001);
                }
                case DoseAreaProductUnits.MilligraySquareMicrometers: {
                    const v3 = super.internalMultiply(this.value, 1000000000000);
                    return super.internalDivide(v3, 0.001);
                }
                case DoseAreaProductUnits.CentigraySquareMicrometers: {
                    const v3 = super.internalMultiply(this.value, 1000000000000);
                    return super.internalDivide(v3, 0.01);
                }
                case DoseAreaProductUnits.DecigraySquareMicrometers: {
                    const v3 = super.internalMultiply(this.value, 1000000000000);
                    return super.internalDivide(v3, 0.1);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case DoseAreaProductUnits.GraySquareMeters: return this.value;
            case DoseAreaProductUnits.GraySquareDecimeters: return this.value * 100;
            case DoseAreaProductUnits.GraySquareCentimeters: return this.value * 10000;
            case DoseAreaProductUnits.GraySquareMillimeters: return this.value * 1000000;
            case DoseAreaProductUnits.GraySquareMicrometers: return this.value * 1000000000000;
            case DoseAreaProductUnits.MicrograySquareMeters: return (this.value) / 0.000001;
            case DoseAreaProductUnits.MilligraySquareMeters: return (this.value) / 0.001;
            case DoseAreaProductUnits.CentigraySquareMeters: return (this.value) / 0.01;
            case DoseAreaProductUnits.DecigraySquareMeters: return (this.value) / 0.1;
            case DoseAreaProductUnits.MicrograySquareDecimeters: return (this.value * 100) / 0.000001;
            case DoseAreaProductUnits.MilligraySquareDecimeters: return (this.value * 100) / 0.001;
            case DoseAreaProductUnits.CentigraySquareDecimeters: return (this.value * 100) / 0.01;
            case DoseAreaProductUnits.DecigraySquareDecimeters: return (this.value * 100) / 0.1;
            case DoseAreaProductUnits.MicrograySquareCentimeters: return (this.value * 10000) / 0.000001;
            case DoseAreaProductUnits.MilligraySquareCentimeters: return (this.value * 10000) / 0.001;
            case DoseAreaProductUnits.CentigraySquareCentimeters: return (this.value * 10000) / 0.01;
            case DoseAreaProductUnits.DecigraySquareCentimeters: return (this.value * 10000) / 0.1;
            case DoseAreaProductUnits.MicrograySquareMillimeters: return (this.value * 1000000) / 0.000001;
            case DoseAreaProductUnits.MilligraySquareMillimeters: return (this.value * 1000000) / 0.001;
            case DoseAreaProductUnits.CentigraySquareMillimeters: return (this.value * 1000000) / 0.01;
            case DoseAreaProductUnits.DecigraySquareMillimeters: return (this.value * 1000000) / 0.1;
            case DoseAreaProductUnits.MicrograySquareMicrometers: return (this.value * 1000000000000) / 0.000001;
            case DoseAreaProductUnits.MilligraySquareMicrometers: return (this.value * 1000000000000) / 0.001;
            case DoseAreaProductUnits.CentigraySquareMicrometers: return (this.value * 1000000000000) / 0.01;
            case DoseAreaProductUnits.DecigraySquareMicrometers: return (this.value * 1000000000000) / 0.1;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: DoseAreaProductUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case DoseAreaProductUnits.GraySquareMeters: return value;
                case DoseAreaProductUnits.GraySquareDecimeters: return super.internalDivide(value, 100);
                case DoseAreaProductUnits.GraySquareCentimeters: return super.internalDivide(value, 10000);
                case DoseAreaProductUnits.GraySquareMillimeters: return super.internalDivide(value, 1000000);
                case DoseAreaProductUnits.GraySquareMicrometers: return super.internalDivide(value, 1000000000000);
                case DoseAreaProductUnits.MicrograySquareMeters: return super.internalMultiply(value, 0.000001);
                case DoseAreaProductUnits.MilligraySquareMeters: return super.internalMultiply(value, 0.001);
                case DoseAreaProductUnits.CentigraySquareMeters: return super.internalMultiply(value, 0.01);
                case DoseAreaProductUnits.DecigraySquareMeters: return super.internalMultiply(value, 0.1);
                case DoseAreaProductUnits.MicrograySquareDecimeters: {
                    const v3 = super.internalDivide(value, 100);
                    return super.internalMultiply(v3, 0.000001);
                }
                case DoseAreaProductUnits.MilligraySquareDecimeters: {
                    const v3 = super.internalDivide(value, 100);
                    return super.internalMultiply(v3, 0.001);
                }
                case DoseAreaProductUnits.CentigraySquareDecimeters: {
                    const v3 = super.internalDivide(value, 100);
                    return super.internalMultiply(v3, 0.01);
                }
                case DoseAreaProductUnits.DecigraySquareDecimeters: {
                    const v3 = super.internalDivide(value, 100);
                    return super.internalMultiply(v3, 0.1);
                }
                case DoseAreaProductUnits.MicrograySquareCentimeters: {
                    const v3 = super.internalDivide(value, 10000);
                    return super.internalMultiply(v3, 0.000001);
                }
                case DoseAreaProductUnits.MilligraySquareCentimeters: {
                    const v3 = super.internalDivide(value, 10000);
                    return super.internalMultiply(v3, 0.001);
                }
                case DoseAreaProductUnits.CentigraySquareCentimeters: {
                    const v3 = super.internalDivide(value, 10000);
                    return super.internalMultiply(v3, 0.01);
                }
                case DoseAreaProductUnits.DecigraySquareCentimeters: {
                    const v3 = super.internalDivide(value, 10000);
                    return super.internalMultiply(v3, 0.1);
                }
                case DoseAreaProductUnits.MicrograySquareMillimeters: {
                    const v3 = super.internalDivide(value, 1000000);
                    return super.internalMultiply(v3, 0.000001);
                }
                case DoseAreaProductUnits.MilligraySquareMillimeters: {
                    const v3 = super.internalDivide(value, 1000000);
                    return super.internalMultiply(v3, 0.001);
                }
                case DoseAreaProductUnits.CentigraySquareMillimeters: {
                    const v3 = super.internalDivide(value, 1000000);
                    return super.internalMultiply(v3, 0.01);
                }
                case DoseAreaProductUnits.DecigraySquareMillimeters: {
                    const v3 = super.internalDivide(value, 1000000);
                    return super.internalMultiply(v3, 0.1);
                }
                case DoseAreaProductUnits.MicrograySquareMicrometers: {
                    const v3 = super.internalDivide(value, 1000000000000);
                    return super.internalMultiply(v3, 0.000001);
                }
                case DoseAreaProductUnits.MilligraySquareMicrometers: {
                    const v3 = super.internalDivide(value, 1000000000000);
                    return super.internalMultiply(v3, 0.001);
                }
                case DoseAreaProductUnits.CentigraySquareMicrometers: {
                    const v3 = super.internalDivide(value, 1000000000000);
                    return super.internalMultiply(v3, 0.01);
                }
                case DoseAreaProductUnits.DecigraySquareMicrometers: {
                    const v3 = super.internalDivide(value, 1000000000000);
                    return super.internalMultiply(v3, 0.1);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case DoseAreaProductUnits.GraySquareMeters: return value;
            case DoseAreaProductUnits.GraySquareDecimeters: return value / 100;
            case DoseAreaProductUnits.GraySquareCentimeters: return value / 10000;
            case DoseAreaProductUnits.GraySquareMillimeters: return value / 1000000;
            case DoseAreaProductUnits.GraySquareMicrometers: return value / 1000000000000;
            case DoseAreaProductUnits.MicrograySquareMeters: return (value) * 0.000001;
            case DoseAreaProductUnits.MilligraySquareMeters: return (value) * 0.001;
            case DoseAreaProductUnits.CentigraySquareMeters: return (value) * 0.01;
            case DoseAreaProductUnits.DecigraySquareMeters: return (value) * 0.1;
            case DoseAreaProductUnits.MicrograySquareDecimeters: return (value / 100) * 0.000001;
            case DoseAreaProductUnits.MilligraySquareDecimeters: return (value / 100) * 0.001;
            case DoseAreaProductUnits.CentigraySquareDecimeters: return (value / 100) * 0.01;
            case DoseAreaProductUnits.DecigraySquareDecimeters: return (value / 100) * 0.1;
            case DoseAreaProductUnits.MicrograySquareCentimeters: return (value / 10000) * 0.000001;
            case DoseAreaProductUnits.MilligraySquareCentimeters: return (value / 10000) * 0.001;
            case DoseAreaProductUnits.CentigraySquareCentimeters: return (value / 10000) * 0.01;
            case DoseAreaProductUnits.DecigraySquareCentimeters: return (value / 10000) * 0.1;
            case DoseAreaProductUnits.MicrograySquareMillimeters: return (value / 1000000) * 0.000001;
            case DoseAreaProductUnits.MilligraySquareMillimeters: return (value / 1000000) * 0.001;
            case DoseAreaProductUnits.CentigraySquareMillimeters: return (value / 1000000) * 0.01;
            case DoseAreaProductUnits.DecigraySquareMillimeters: return (value / 1000000) * 0.1;
            case DoseAreaProductUnits.MicrograySquareMicrometers: return (value / 1000000000000) * 0.000001;
            case DoseAreaProductUnits.MilligraySquareMicrometers: return (value / 1000000000000) * 0.001;
            case DoseAreaProductUnits.CentigraySquareMicrometers: return (value / 1000000000000) * 0.01;
            case DoseAreaProductUnits.DecigraySquareMicrometers: return (value / 1000000000000) * 0.1;
            default: return Number.NaN;
        }
    }

    /**
     * Format the DoseAreaProduct to string.
     * Note! the default format for DoseAreaProduct is GraySquareMeters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the DoseAreaProduct.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the DoseAreaProduct.
     */
    public toString(unit: DoseAreaProductUnits = DoseAreaProductUnits.GraySquareMeters, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case DoseAreaProductUnits.GraySquareMeters:
                return super.truncateFractionDigits(this.GraySquareMeters, options as ToStringOptions) + ` Gy·m²`;
            case DoseAreaProductUnits.GraySquareDecimeters:
                return super.truncateFractionDigits(this.GraySquareDecimeters, options as ToStringOptions) + ` Gy·dm²`;
            case DoseAreaProductUnits.GraySquareCentimeters:
                return super.truncateFractionDigits(this.GraySquareCentimeters, options as ToStringOptions) + ` Gy·cm²`;
            case DoseAreaProductUnits.GraySquareMillimeters:
                return super.truncateFractionDigits(this.GraySquareMillimeters, options as ToStringOptions) + ` Gy·mm²`;
            case DoseAreaProductUnits.GraySquareMicrometers:
                return super.truncateFractionDigits(this.GraySquareMicrometers, options as ToStringOptions) + ` Gy·μm²`;
            case DoseAreaProductUnits.MicrograySquareMeters:
                return super.truncateFractionDigits(this.MicrograySquareMeters, options as ToStringOptions) + ` μGy·m²`;
            case DoseAreaProductUnits.MilligraySquareMeters:
                return super.truncateFractionDigits(this.MilligraySquareMeters, options as ToStringOptions) + ` mGy·m²`;
            case DoseAreaProductUnits.CentigraySquareMeters:
                return super.truncateFractionDigits(this.CentigraySquareMeters, options as ToStringOptions) + ` cGy·m²`;
            case DoseAreaProductUnits.DecigraySquareMeters:
                return super.truncateFractionDigits(this.DecigraySquareMeters, options as ToStringOptions) + ` dGy·m²`;
            case DoseAreaProductUnits.MicrograySquareDecimeters:
                return super.truncateFractionDigits(this.MicrograySquareDecimeters, options as ToStringOptions) + ` μGy·dm²`;
            case DoseAreaProductUnits.MilligraySquareDecimeters:
                return super.truncateFractionDigits(this.MilligraySquareDecimeters, options as ToStringOptions) + ` mGy·dm²`;
            case DoseAreaProductUnits.CentigraySquareDecimeters:
                return super.truncateFractionDigits(this.CentigraySquareDecimeters, options as ToStringOptions) + ` cGy·dm²`;
            case DoseAreaProductUnits.DecigraySquareDecimeters:
                return super.truncateFractionDigits(this.DecigraySquareDecimeters, options as ToStringOptions) + ` dGy·dm²`;
            case DoseAreaProductUnits.MicrograySquareCentimeters:
                return super.truncateFractionDigits(this.MicrograySquareCentimeters, options as ToStringOptions) + ` μGy·cm²`;
            case DoseAreaProductUnits.MilligraySquareCentimeters:
                return super.truncateFractionDigits(this.MilligraySquareCentimeters, options as ToStringOptions) + ` mGy·cm²`;
            case DoseAreaProductUnits.CentigraySquareCentimeters:
                return super.truncateFractionDigits(this.CentigraySquareCentimeters, options as ToStringOptions) + ` cGy·cm²`;
            case DoseAreaProductUnits.DecigraySquareCentimeters:
                return super.truncateFractionDigits(this.DecigraySquareCentimeters, options as ToStringOptions) + ` dGy·cm²`;
            case DoseAreaProductUnits.MicrograySquareMillimeters:
                return super.truncateFractionDigits(this.MicrograySquareMillimeters, options as ToStringOptions) + ` μGy·mm²`;
            case DoseAreaProductUnits.MilligraySquareMillimeters:
                return super.truncateFractionDigits(this.MilligraySquareMillimeters, options as ToStringOptions) + ` mGy·mm²`;
            case DoseAreaProductUnits.CentigraySquareMillimeters:
                return super.truncateFractionDigits(this.CentigraySquareMillimeters, options as ToStringOptions) + ` cGy·mm²`;
            case DoseAreaProductUnits.DecigraySquareMillimeters:
                return super.truncateFractionDigits(this.DecigraySquareMillimeters, options as ToStringOptions) + ` dGy·mm²`;
            case DoseAreaProductUnits.MicrograySquareMicrometers:
                return super.truncateFractionDigits(this.MicrograySquareMicrometers, options as ToStringOptions) + ` μGy·μm²`;
            case DoseAreaProductUnits.MilligraySquareMicrometers:
                return super.truncateFractionDigits(this.MilligraySquareMicrometers, options as ToStringOptions) + ` mGy·μm²`;
            case DoseAreaProductUnits.CentigraySquareMicrometers:
                return super.truncateFractionDigits(this.CentigraySquareMicrometers, options as ToStringOptions) + ` cGy·μm²`;
            case DoseAreaProductUnits.DecigraySquareMicrometers:
                return super.truncateFractionDigits(this.DecigraySquareMicrometers, options as ToStringOptions) + ` dGy·μm²`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get DoseAreaProduct unit abbreviation.
     * Note! the default abbreviation for DoseAreaProduct is GraySquareMeters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the DoseAreaProduct.
     * @returns The abbreviation string of DoseAreaProduct.
     */
    public getUnitAbbreviation(unitAbbreviation: DoseAreaProductUnits = DoseAreaProductUnits.GraySquareMeters): string {

        switch (unitAbbreviation) {
            
            case DoseAreaProductUnits.GraySquareMeters:
                return `Gy·m²`;
            case DoseAreaProductUnits.GraySquareDecimeters:
                return `Gy·dm²`;
            case DoseAreaProductUnits.GraySquareCentimeters:
                return `Gy·cm²`;
            case DoseAreaProductUnits.GraySquareMillimeters:
                return `Gy·mm²`;
            case DoseAreaProductUnits.GraySquareMicrometers:
                return `Gy·μm²`;
            case DoseAreaProductUnits.MicrograySquareMeters:
                return `μGy·m²`;
            case DoseAreaProductUnits.MilligraySquareMeters:
                return `mGy·m²`;
            case DoseAreaProductUnits.CentigraySquareMeters:
                return `cGy·m²`;
            case DoseAreaProductUnits.DecigraySquareMeters:
                return `dGy·m²`;
            case DoseAreaProductUnits.MicrograySquareDecimeters:
                return `μGy·dm²`;
            case DoseAreaProductUnits.MilligraySquareDecimeters:
                return `mGy·dm²`;
            case DoseAreaProductUnits.CentigraySquareDecimeters:
                return `cGy·dm²`;
            case DoseAreaProductUnits.DecigraySquareDecimeters:
                return `dGy·dm²`;
            case DoseAreaProductUnits.MicrograySquareCentimeters:
                return `μGy·cm²`;
            case DoseAreaProductUnits.MilligraySquareCentimeters:
                return `mGy·cm²`;
            case DoseAreaProductUnits.CentigraySquareCentimeters:
                return `cGy·cm²`;
            case DoseAreaProductUnits.DecigraySquareCentimeters:
                return `dGy·cm²`;
            case DoseAreaProductUnits.MicrograySquareMillimeters:
                return `μGy·mm²`;
            case DoseAreaProductUnits.MilligraySquareMillimeters:
                return `mGy·mm²`;
            case DoseAreaProductUnits.CentigraySquareMillimeters:
                return `cGy·mm²`;
            case DoseAreaProductUnits.DecigraySquareMillimeters:
                return `dGy·mm²`;
            case DoseAreaProductUnits.MicrograySquareMicrometers:
                return `μGy·μm²`;
            case DoseAreaProductUnits.MilligraySquareMicrometers:
                return `mGy·μm²`;
            case DoseAreaProductUnits.CentigraySquareMicrometers:
                return `cGy·μm²`;
            case DoseAreaProductUnits.DecigraySquareMicrometers:
                return `dGy·μm²`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given DoseAreaProduct are equals to the current DoseAreaProduct.
     * @param doseAreaProduct The other DoseAreaProduct.
     * @returns True if the given DoseAreaProduct are equal to the current DoseAreaProduct.
     */
    public equals(doseAreaProduct: DoseAreaProduct): boolean {
        return super.internalEquals(this.value, doseAreaProduct.BaseValue);
    }

    /**
     * Compare the given DoseAreaProduct against the current DoseAreaProduct.
     * @param doseAreaProduct The other DoseAreaProduct.
     * @returns 0 if they are equal, -1 if the current DoseAreaProduct is less then other, 1 if the current DoseAreaProduct is greater then other.
     */
    public compareTo(doseAreaProduct: DoseAreaProduct): number {
        return super.internalCompareTo(this.value, doseAreaProduct.BaseValue);
    }

    /**
     * Add the given DoseAreaProduct with the current DoseAreaProduct.
     * @param doseAreaProduct The other DoseAreaProduct.
     * @returns A new DoseAreaProduct instance with the results.
     */
    public add(doseAreaProduct: DoseAreaProduct): DoseAreaProduct {
        return new DoseAreaProduct(super.internalAdd(this.value, doseAreaProduct.BaseValue))
    }

    /**
     * Subtract the given DoseAreaProduct with the current DoseAreaProduct.
     * @param doseAreaProduct The other DoseAreaProduct.
     * @returns A new DoseAreaProduct instance with the results.
     */
    public subtract(doseAreaProduct: DoseAreaProduct): DoseAreaProduct {
        return new DoseAreaProduct(super.internalSubtract(this.value, doseAreaProduct.BaseValue))
    }

    /**
     * Multiply the given DoseAreaProduct with the current DoseAreaProduct.
     * @param doseAreaProduct The other DoseAreaProduct.
     * @returns A new DoseAreaProduct instance with the results.
     */
    public multiply(doseAreaProduct: DoseAreaProduct): DoseAreaProduct {
        return new DoseAreaProduct(super.internalMultiply(this.value, doseAreaProduct.BaseValue))
    }

    /**
     * Divide the given DoseAreaProduct with the current DoseAreaProduct.
     * @param doseAreaProduct The other DoseAreaProduct.
     * @returns A new DoseAreaProduct instance with the results.
     */
    public divide(doseAreaProduct: DoseAreaProduct): DoseAreaProduct {
        return new DoseAreaProduct(super.internalDivide(this.value, doseAreaProduct.BaseValue))
    }

    /**
     * Modulo the given DoseAreaProduct with the current DoseAreaProduct.
     * @param doseAreaProduct The other DoseAreaProduct.
     * @returns A new DoseAreaProduct instance with the results.
     */
    public modulo(doseAreaProduct: DoseAreaProduct): DoseAreaProduct {
        return new DoseAreaProduct(super.internalModulo(this.value, doseAreaProduct.BaseValue))
    }

    /**
     * Pow the given DoseAreaProduct with the current DoseAreaProduct.
     * @param doseAreaProduct The other DoseAreaProduct.
     * @returns A new DoseAreaProduct instance with the results.
     */
    public pow(doseAreaProduct: DoseAreaProduct): DoseAreaProduct {
        return new DoseAreaProduct(super.internalPow(this.value, doseAreaProduct.BaseValue))
    }
}
