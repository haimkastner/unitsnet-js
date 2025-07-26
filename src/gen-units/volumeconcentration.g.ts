import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a VolumeConcentration */
export interface VolumeConcentrationDto {
    /** The value of the VolumeConcentration */
    value: number;
    /**  The specific unit that the VolumeConcentration value is representing */
    unit: VolumeConcentrationUnits;
}

/** VolumeConcentrationUnits enumeration */
export enum VolumeConcentrationUnits {
    /** */
    DecimalFractions = "DecimalFraction",
    /** */
    LitersPerLiter = "LiterPerLiter",
    /** */
    LitersPerMilliliter = "LiterPerMilliliter",
    /** */
    Percent = "Percent",
    /** */
    PartsPerThousand = "PartPerThousand",
    /** */
    PartsPerMillion = "PartPerMillion",
    /** */
    PartsPerBillion = "PartPerBillion",
    /** */
    PartsPerTrillion = "PartPerTrillion",
    /** */
    PicolitersPerLiter = "PicoliterPerLiter",
    /** */
    NanolitersPerLiter = "NanoliterPerLiter",
    /** */
    MicrolitersPerLiter = "MicroliterPerLiter",
    /** */
    MillilitersPerLiter = "MilliliterPerLiter",
    /** */
    CentilitersPerLiter = "CentiliterPerLiter",
    /** */
    DecilitersPerLiter = "DeciliterPerLiter",
    /** */
    PicolitersPerMilliliter = "PicoliterPerMilliliter",
    /** */
    NanolitersPerMilliliter = "NanoliterPerMilliliter",
    /** */
    MicrolitersPerMilliliter = "MicroliterPerMilliliter",
    /** */
    MillilitersPerMilliliter = "MilliliterPerMilliliter",
    /** */
    CentilitersPerMilliliter = "CentiliterPerMilliliter",
    /** */
    DecilitersPerMilliliter = "DeciliterPerMilliliter"
}

/** The volume concentration (not to be confused with volume fraction) is defined as the volume of a constituent divided by the total volume of the mixture. */
export class VolumeConcentration extends BaseUnit {
    protected value: number;
    private decimalfractionsLazy: number | null = null;
    private litersperliterLazy: number | null = null;
    private literspermilliliterLazy: number | null = null;
    private percentLazy: number | null = null;
    private partsperthousandLazy: number | null = null;
    private partspermillionLazy: number | null = null;
    private partsperbillionLazy: number | null = null;
    private partspertrillionLazy: number | null = null;
    private picolitersperliterLazy: number | null = null;
    private nanolitersperliterLazy: number | null = null;
    private microlitersperliterLazy: number | null = null;
    private millilitersperliterLazy: number | null = null;
    private centilitersperliterLazy: number | null = null;
    private decilitersperliterLazy: number | null = null;
    private picoliterspermilliliterLazy: number | null = null;
    private nanoliterspermilliliterLazy: number | null = null;
    private microliterspermilliliterLazy: number | null = null;
    private milliliterspermilliliterLazy: number | null = null;
    private centiliterspermilliliterLazy: number | null = null;
    private deciliterspermilliliterLazy: number | null = null;

    /**
     * Create a new VolumeConcentration.
     * @param value The value.
     * @param fromUnit The ‘VolumeConcentration’ unit to create from.
     * The default unit is DecimalFractions
     */
    public constructor(value: number, fromUnit: VolumeConcentrationUnits = VolumeConcentrationUnits.DecimalFractions) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of VolumeConcentration is DecimalFractions.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): VolumeConcentrationUnits.DecimalFractions {
        return VolumeConcentrationUnits.DecimalFractions
    }

    /** */
    public get DecimalFractions(): number {
        if(this.decimalfractionsLazy !== null){
            return this.decimalfractionsLazy;
        }
        return this.decimalfractionsLazy = this.convertFromBase(VolumeConcentrationUnits.DecimalFractions);
    }

    /** */
    public get LitersPerLiter(): number {
        if(this.litersperliterLazy !== null){
            return this.litersperliterLazy;
        }
        return this.litersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.LitersPerLiter);
    }

    /** */
    public get LitersPerMilliliter(): number {
        if(this.literspermilliliterLazy !== null){
            return this.literspermilliliterLazy;
        }
        return this.literspermilliliterLazy = this.convertFromBase(VolumeConcentrationUnits.LitersPerMilliliter);
    }

    /** */
    public get Percent(): number {
        if(this.percentLazy !== null){
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(VolumeConcentrationUnits.Percent);
    }

    /** */
    public get PartsPerThousand(): number {
        if(this.partsperthousandLazy !== null){
            return this.partsperthousandLazy;
        }
        return this.partsperthousandLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerThousand);
    }

    /** */
    public get PartsPerMillion(): number {
        if(this.partspermillionLazy !== null){
            return this.partspermillionLazy;
        }
        return this.partspermillionLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerMillion);
    }

    /** */
    public get PartsPerBillion(): number {
        if(this.partsperbillionLazy !== null){
            return this.partsperbillionLazy;
        }
        return this.partsperbillionLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerBillion);
    }

    /** */
    public get PartsPerTrillion(): number {
        if(this.partspertrillionLazy !== null){
            return this.partspertrillionLazy;
        }
        return this.partspertrillionLazy = this.convertFromBase(VolumeConcentrationUnits.PartsPerTrillion);
    }

    /** */
    public get PicolitersPerLiter(): number {
        if(this.picolitersperliterLazy !== null){
            return this.picolitersperliterLazy;
        }
        return this.picolitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.PicolitersPerLiter);
    }

    /** */
    public get NanolitersPerLiter(): number {
        if(this.nanolitersperliterLazy !== null){
            return this.nanolitersperliterLazy;
        }
        return this.nanolitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.NanolitersPerLiter);
    }

    /** */
    public get MicrolitersPerLiter(): number {
        if(this.microlitersperliterLazy !== null){
            return this.microlitersperliterLazy;
        }
        return this.microlitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.MicrolitersPerLiter);
    }

    /** */
    public get MillilitersPerLiter(): number {
        if(this.millilitersperliterLazy !== null){
            return this.millilitersperliterLazy;
        }
        return this.millilitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.MillilitersPerLiter);
    }

    /** */
    public get CentilitersPerLiter(): number {
        if(this.centilitersperliterLazy !== null){
            return this.centilitersperliterLazy;
        }
        return this.centilitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.CentilitersPerLiter);
    }

    /** */
    public get DecilitersPerLiter(): number {
        if(this.decilitersperliterLazy !== null){
            return this.decilitersperliterLazy;
        }
        return this.decilitersperliterLazy = this.convertFromBase(VolumeConcentrationUnits.DecilitersPerLiter);
    }

    /** */
    public get PicolitersPerMilliliter(): number {
        if(this.picoliterspermilliliterLazy !== null){
            return this.picoliterspermilliliterLazy;
        }
        return this.picoliterspermilliliterLazy = this.convertFromBase(VolumeConcentrationUnits.PicolitersPerMilliliter);
    }

    /** */
    public get NanolitersPerMilliliter(): number {
        if(this.nanoliterspermilliliterLazy !== null){
            return this.nanoliterspermilliliterLazy;
        }
        return this.nanoliterspermilliliterLazy = this.convertFromBase(VolumeConcentrationUnits.NanolitersPerMilliliter);
    }

    /** */
    public get MicrolitersPerMilliliter(): number {
        if(this.microliterspermilliliterLazy !== null){
            return this.microliterspermilliliterLazy;
        }
        return this.microliterspermilliliterLazy = this.convertFromBase(VolumeConcentrationUnits.MicrolitersPerMilliliter);
    }

    /** */
    public get MillilitersPerMilliliter(): number {
        if(this.milliliterspermilliliterLazy !== null){
            return this.milliliterspermilliliterLazy;
        }
        return this.milliliterspermilliliterLazy = this.convertFromBase(VolumeConcentrationUnits.MillilitersPerMilliliter);
    }

    /** */
    public get CentilitersPerMilliliter(): number {
        if(this.centiliterspermilliliterLazy !== null){
            return this.centiliterspermilliliterLazy;
        }
        return this.centiliterspermilliliterLazy = this.convertFromBase(VolumeConcentrationUnits.CentilitersPerMilliliter);
    }

    /** */
    public get DecilitersPerMilliliter(): number {
        if(this.deciliterspermilliliterLazy !== null){
            return this.deciliterspermilliliterLazy;
        }
        return this.deciliterspermilliliterLazy = this.convertFromBase(VolumeConcentrationUnits.DecilitersPerMilliliter);
    }

    /**
     * Create a new VolumeConcentration instance from a DecimalFractions
     *
     * @param value The unit as DecimalFractions to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromDecimalFractions(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.DecimalFractions);
    }

    /**
     * Create a new VolumeConcentration instance from a LitersPerLiter
     *
     * @param value The unit as LitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromLitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.LitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a LitersPerMilliliter
     *
     * @param value The unit as LitersPerMilliliter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromLitersPerMilliliter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.LitersPerMilliliter);
    }

    /**
     * Create a new VolumeConcentration instance from a Percent
     *
     * @param value The unit as Percent to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPercent(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.Percent);
    }

    /**
     * Create a new VolumeConcentration instance from a PartsPerThousand
     *
     * @param value The unit as PartsPerThousand to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPartsPerThousand(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerThousand);
    }

    /**
     * Create a new VolumeConcentration instance from a PartsPerMillion
     *
     * @param value The unit as PartsPerMillion to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPartsPerMillion(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerMillion);
    }

    /**
     * Create a new VolumeConcentration instance from a PartsPerBillion
     *
     * @param value The unit as PartsPerBillion to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPartsPerBillion(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerBillion);
    }

    /**
     * Create a new VolumeConcentration instance from a PartsPerTrillion
     *
     * @param value The unit as PartsPerTrillion to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPartsPerTrillion(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PartsPerTrillion);
    }

    /**
     * Create a new VolumeConcentration instance from a PicolitersPerLiter
     *
     * @param value The unit as PicolitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPicolitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PicolitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a NanolitersPerLiter
     *
     * @param value The unit as NanolitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromNanolitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.NanolitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a MicrolitersPerLiter
     *
     * @param value The unit as MicrolitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromMicrolitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.MicrolitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a MillilitersPerLiter
     *
     * @param value The unit as MillilitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromMillilitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.MillilitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a CentilitersPerLiter
     *
     * @param value The unit as CentilitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromCentilitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.CentilitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a DecilitersPerLiter
     *
     * @param value The unit as DecilitersPerLiter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromDecilitersPerLiter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.DecilitersPerLiter);
    }

    /**
     * Create a new VolumeConcentration instance from a PicolitersPerMilliliter
     *
     * @param value The unit as PicolitersPerMilliliter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromPicolitersPerMilliliter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.PicolitersPerMilliliter);
    }

    /**
     * Create a new VolumeConcentration instance from a NanolitersPerMilliliter
     *
     * @param value The unit as NanolitersPerMilliliter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromNanolitersPerMilliliter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.NanolitersPerMilliliter);
    }

    /**
     * Create a new VolumeConcentration instance from a MicrolitersPerMilliliter
     *
     * @param value The unit as MicrolitersPerMilliliter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromMicrolitersPerMilliliter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.MicrolitersPerMilliliter);
    }

    /**
     * Create a new VolumeConcentration instance from a MillilitersPerMilliliter
     *
     * @param value The unit as MillilitersPerMilliliter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromMillilitersPerMilliliter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.MillilitersPerMilliliter);
    }

    /**
     * Create a new VolumeConcentration instance from a CentilitersPerMilliliter
     *
     * @param value The unit as CentilitersPerMilliliter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromCentilitersPerMilliliter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.CentilitersPerMilliliter);
    }

    /**
     * Create a new VolumeConcentration instance from a DecilitersPerMilliliter
     *
     * @param value The unit as DecilitersPerMilliliter to create a new VolumeConcentration from.
     * @returns The new VolumeConcentration instance.
     */
    public static FromDecilitersPerMilliliter(value: number): VolumeConcentration {
        return new VolumeConcentration(value, VolumeConcentrationUnits.DecilitersPerMilliliter);
    }

    /**
     * Gets the base unit enumeration associated with VolumeConcentration
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof VolumeConcentrationUnits {
        return VolumeConcentrationUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): VolumeConcentrationUnits.DecimalFractions {
        return VolumeConcentrationUnits.DecimalFractions;
    }

    /**
     * Create API DTO represent a VolumeConcentration unit.
     * @param holdInUnit The specific VolumeConcentration unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: VolumeConcentrationUnits = VolumeConcentrationUnits.DecimalFractions): VolumeConcentrationDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a VolumeConcentration unit from an API DTO representation.
     * @param dtoVolumeConcentration The VolumeConcentration API DTO representation
     */
    public static FromDto(dtoVolumeConcentration: VolumeConcentrationDto): VolumeConcentration {
        return new VolumeConcentration(dtoVolumeConcentration.value, dtoVolumeConcentration.unit);
    }

    /**
     * Convert VolumeConcentration to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: VolumeConcentrationUnits): number {
        switch (toUnit) {
            case VolumeConcentrationUnits.DecimalFractions: return this.DecimalFractions;
            case VolumeConcentrationUnits.LitersPerLiter: return this.LitersPerLiter;
            case VolumeConcentrationUnits.LitersPerMilliliter: return this.LitersPerMilliliter;
            case VolumeConcentrationUnits.Percent: return this.Percent;
            case VolumeConcentrationUnits.PartsPerThousand: return this.PartsPerThousand;
            case VolumeConcentrationUnits.PartsPerMillion: return this.PartsPerMillion;
            case VolumeConcentrationUnits.PartsPerBillion: return this.PartsPerBillion;
            case VolumeConcentrationUnits.PartsPerTrillion: return this.PartsPerTrillion;
            case VolumeConcentrationUnits.PicolitersPerLiter: return this.PicolitersPerLiter;
            case VolumeConcentrationUnits.NanolitersPerLiter: return this.NanolitersPerLiter;
            case VolumeConcentrationUnits.MicrolitersPerLiter: return this.MicrolitersPerLiter;
            case VolumeConcentrationUnits.MillilitersPerLiter: return this.MillilitersPerLiter;
            case VolumeConcentrationUnits.CentilitersPerLiter: return this.CentilitersPerLiter;
            case VolumeConcentrationUnits.DecilitersPerLiter: return this.DecilitersPerLiter;
            case VolumeConcentrationUnits.PicolitersPerMilliliter: return this.PicolitersPerMilliliter;
            case VolumeConcentrationUnits.NanolitersPerMilliliter: return this.NanolitersPerMilliliter;
            case VolumeConcentrationUnits.MicrolitersPerMilliliter: return this.MicrolitersPerMilliliter;
            case VolumeConcentrationUnits.MillilitersPerMilliliter: return this.MillilitersPerMilliliter;
            case VolumeConcentrationUnits.CentilitersPerMilliliter: return this.CentilitersPerMilliliter;
            case VolumeConcentrationUnits.DecilitersPerMilliliter: return this.DecilitersPerMilliliter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: VolumeConcentrationUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case VolumeConcentrationUnits.DecimalFractions: return this.value;
                case VolumeConcentrationUnits.LitersPerLiter: return this.value;
                case VolumeConcentrationUnits.LitersPerMilliliter: return super.internalMultiply(this.value, 1e-3);
                case VolumeConcentrationUnits.Percent: return super.internalMultiply(this.value, 1e2);
                case VolumeConcentrationUnits.PartsPerThousand: return super.internalMultiply(this.value, 1e3);
                case VolumeConcentrationUnits.PartsPerMillion: return super.internalMultiply(this.value, 1e6);
                case VolumeConcentrationUnits.PartsPerBillion: return super.internalMultiply(this.value, 1e9);
                case VolumeConcentrationUnits.PartsPerTrillion: return super.internalMultiply(this.value, 1e12);
                case VolumeConcentrationUnits.PicolitersPerLiter: return super.internalDivide(this.value, 1e-12);
                case VolumeConcentrationUnits.NanolitersPerLiter: return super.internalDivide(this.value, 1e-9);
                case VolumeConcentrationUnits.MicrolitersPerLiter: return super.internalDivide(this.value, 0.000001);
                case VolumeConcentrationUnits.MillilitersPerLiter: return super.internalDivide(this.value, 0.001);
                case VolumeConcentrationUnits.CentilitersPerLiter: return super.internalDivide(this.value, 0.01);
                case VolumeConcentrationUnits.DecilitersPerLiter: return super.internalDivide(this.value, 0.1);
                case VolumeConcentrationUnits.PicolitersPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1e-12);
                }
                case VolumeConcentrationUnits.NanolitersPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1e-9);
                }
                case VolumeConcentrationUnits.MicrolitersPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.000001);
                }
                case VolumeConcentrationUnits.MillilitersPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.001);
                }
                case VolumeConcentrationUnits.CentilitersPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.01);
                }
                case VolumeConcentrationUnits.DecilitersPerMilliliter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.1);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case VolumeConcentrationUnits.DecimalFractions: return this.value;
            case VolumeConcentrationUnits.LitersPerLiter: return this.value;
            case VolumeConcentrationUnits.LitersPerMilliliter: return this.value * 1e-3;
            case VolumeConcentrationUnits.Percent: return this.value * 1e2;
            case VolumeConcentrationUnits.PartsPerThousand: return this.value * 1e3;
            case VolumeConcentrationUnits.PartsPerMillion: return this.value * 1e6;
            case VolumeConcentrationUnits.PartsPerBillion: return this.value * 1e9;
            case VolumeConcentrationUnits.PartsPerTrillion: return this.value * 1e12;
            case VolumeConcentrationUnits.PicolitersPerLiter: return (this.value) / 1e-12;
            case VolumeConcentrationUnits.NanolitersPerLiter: return (this.value) / 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerLiter: return (this.value) / 0.000001;
            case VolumeConcentrationUnits.MillilitersPerLiter: return (this.value) / 0.001;
            case VolumeConcentrationUnits.CentilitersPerLiter: return (this.value) / 0.01;
            case VolumeConcentrationUnits.DecilitersPerLiter: return (this.value) / 0.1;
            case VolumeConcentrationUnits.PicolitersPerMilliliter: return (this.value * 1e-3) / 1e-12;
            case VolumeConcentrationUnits.NanolitersPerMilliliter: return (this.value * 1e-3) / 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerMilliliter: return (this.value * 1e-3) / 0.000001;
            case VolumeConcentrationUnits.MillilitersPerMilliliter: return (this.value * 1e-3) / 0.001;
            case VolumeConcentrationUnits.CentilitersPerMilliliter: return (this.value * 1e-3) / 0.01;
            case VolumeConcentrationUnits.DecilitersPerMilliliter: return (this.value * 1e-3) / 0.1;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: VolumeConcentrationUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case VolumeConcentrationUnits.DecimalFractions: return value;
                case VolumeConcentrationUnits.LitersPerLiter: return value;
                case VolumeConcentrationUnits.LitersPerMilliliter: return super.internalDivide(value, 1e-3);
                case VolumeConcentrationUnits.Percent: return super.internalDivide(value, 1e2);
                case VolumeConcentrationUnits.PartsPerThousand: return super.internalDivide(value, 1e3);
                case VolumeConcentrationUnits.PartsPerMillion: return super.internalDivide(value, 1e6);
                case VolumeConcentrationUnits.PartsPerBillion: return super.internalDivide(value, 1e9);
                case VolumeConcentrationUnits.PartsPerTrillion: return super.internalDivide(value, 1e12);
                case VolumeConcentrationUnits.PicolitersPerLiter: return super.internalMultiply(value, 1e-12);
                case VolumeConcentrationUnits.NanolitersPerLiter: return super.internalMultiply(value, 1e-9);
                case VolumeConcentrationUnits.MicrolitersPerLiter: return super.internalMultiply(value, 0.000001);
                case VolumeConcentrationUnits.MillilitersPerLiter: return super.internalMultiply(value, 0.001);
                case VolumeConcentrationUnits.CentilitersPerLiter: return super.internalMultiply(value, 0.01);
                case VolumeConcentrationUnits.DecilitersPerLiter: return super.internalMultiply(value, 0.1);
                case VolumeConcentrationUnits.PicolitersPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1e-12);
                }
                case VolumeConcentrationUnits.NanolitersPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1e-9);
                }
                case VolumeConcentrationUnits.MicrolitersPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.000001);
                }
                case VolumeConcentrationUnits.MillilitersPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.001);
                }
                case VolumeConcentrationUnits.CentilitersPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.01);
                }
                case VolumeConcentrationUnits.DecilitersPerMilliliter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.1);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case VolumeConcentrationUnits.DecimalFractions: return value;
            case VolumeConcentrationUnits.LitersPerLiter: return value;
            case VolumeConcentrationUnits.LitersPerMilliliter: return value / 1e-3;
            case VolumeConcentrationUnits.Percent: return value / 1e2;
            case VolumeConcentrationUnits.PartsPerThousand: return value / 1e3;
            case VolumeConcentrationUnits.PartsPerMillion: return value / 1e6;
            case VolumeConcentrationUnits.PartsPerBillion: return value / 1e9;
            case VolumeConcentrationUnits.PartsPerTrillion: return value / 1e12;
            case VolumeConcentrationUnits.PicolitersPerLiter: return (value) * 1e-12;
            case VolumeConcentrationUnits.NanolitersPerLiter: return (value) * 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerLiter: return (value) * 0.000001;
            case VolumeConcentrationUnits.MillilitersPerLiter: return (value) * 0.001;
            case VolumeConcentrationUnits.CentilitersPerLiter: return (value) * 0.01;
            case VolumeConcentrationUnits.DecilitersPerLiter: return (value) * 0.1;
            case VolumeConcentrationUnits.PicolitersPerMilliliter: return (value / 1e-3) * 1e-12;
            case VolumeConcentrationUnits.NanolitersPerMilliliter: return (value / 1e-3) * 1e-9;
            case VolumeConcentrationUnits.MicrolitersPerMilliliter: return (value / 1e-3) * 0.000001;
            case VolumeConcentrationUnits.MillilitersPerMilliliter: return (value / 1e-3) * 0.001;
            case VolumeConcentrationUnits.CentilitersPerMilliliter: return (value / 1e-3) * 0.01;
            case VolumeConcentrationUnits.DecilitersPerMilliliter: return (value / 1e-3) * 0.1;
            default: return Number.NaN;
        }
    }

    /**
     * Format the VolumeConcentration to string.
     * Note! the default format for VolumeConcentration is DecimalFractions.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the VolumeConcentration.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the VolumeConcentration.
     */
    public toString(unit: VolumeConcentrationUnits = VolumeConcentrationUnits.DecimalFractions, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case VolumeConcentrationUnits.DecimalFractions:
                return super.truncateFractionDigits(this.DecimalFractions, options as ToStringOptions) + ` `;
            case VolumeConcentrationUnits.LitersPerLiter:
                return super.truncateFractionDigits(this.LitersPerLiter, options as ToStringOptions) + ` l/l`;
            case VolumeConcentrationUnits.LitersPerMilliliter:
                return super.truncateFractionDigits(this.LitersPerMilliliter, options as ToStringOptions) + ` l/ml`;
            case VolumeConcentrationUnits.Percent:
                return super.truncateFractionDigits(this.Percent, options as ToStringOptions) + ` %`;
            case VolumeConcentrationUnits.PartsPerThousand:
                return super.truncateFractionDigits(this.PartsPerThousand, options as ToStringOptions) + ` ‰`;
            case VolumeConcentrationUnits.PartsPerMillion:
                return super.truncateFractionDigits(this.PartsPerMillion, options as ToStringOptions) + ` ppm`;
            case VolumeConcentrationUnits.PartsPerBillion:
                return super.truncateFractionDigits(this.PartsPerBillion, options as ToStringOptions) + ` ppb`;
            case VolumeConcentrationUnits.PartsPerTrillion:
                return super.truncateFractionDigits(this.PartsPerTrillion, options as ToStringOptions) + ` ppt`;
            case VolumeConcentrationUnits.PicolitersPerLiter:
                return super.truncateFractionDigits(this.PicolitersPerLiter, options as ToStringOptions) + ` pl/l`;
            case VolumeConcentrationUnits.NanolitersPerLiter:
                return super.truncateFractionDigits(this.NanolitersPerLiter, options as ToStringOptions) + ` nl/l`;
            case VolumeConcentrationUnits.MicrolitersPerLiter:
                return super.truncateFractionDigits(this.MicrolitersPerLiter, options as ToStringOptions) + ` μl/l`;
            case VolumeConcentrationUnits.MillilitersPerLiter:
                return super.truncateFractionDigits(this.MillilitersPerLiter, options as ToStringOptions) + ` ml/l`;
            case VolumeConcentrationUnits.CentilitersPerLiter:
                return super.truncateFractionDigits(this.CentilitersPerLiter, options as ToStringOptions) + ` cl/l`;
            case VolumeConcentrationUnits.DecilitersPerLiter:
                return super.truncateFractionDigits(this.DecilitersPerLiter, options as ToStringOptions) + ` dl/l`;
            case VolumeConcentrationUnits.PicolitersPerMilliliter:
                return super.truncateFractionDigits(this.PicolitersPerMilliliter, options as ToStringOptions) + ` pl/ml`;
            case VolumeConcentrationUnits.NanolitersPerMilliliter:
                return super.truncateFractionDigits(this.NanolitersPerMilliliter, options as ToStringOptions) + ` nl/ml`;
            case VolumeConcentrationUnits.MicrolitersPerMilliliter:
                return super.truncateFractionDigits(this.MicrolitersPerMilliliter, options as ToStringOptions) + ` μl/ml`;
            case VolumeConcentrationUnits.MillilitersPerMilliliter:
                return super.truncateFractionDigits(this.MillilitersPerMilliliter, options as ToStringOptions) + ` ml/ml`;
            case VolumeConcentrationUnits.CentilitersPerMilliliter:
                return super.truncateFractionDigits(this.CentilitersPerMilliliter, options as ToStringOptions) + ` cl/ml`;
            case VolumeConcentrationUnits.DecilitersPerMilliliter:
                return super.truncateFractionDigits(this.DecilitersPerMilliliter, options as ToStringOptions) + ` dl/ml`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get VolumeConcentration unit abbreviation.
     * Note! the default abbreviation for VolumeConcentration is DecimalFractions.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the VolumeConcentration.
     * @returns The abbreviation string of VolumeConcentration.
     */
    public getUnitAbbreviation(unitAbbreviation: VolumeConcentrationUnits = VolumeConcentrationUnits.DecimalFractions): string {

        switch (unitAbbreviation) {
            
            case VolumeConcentrationUnits.DecimalFractions:
                return ``;
            case VolumeConcentrationUnits.LitersPerLiter:
                return `l/l`;
            case VolumeConcentrationUnits.LitersPerMilliliter:
                return `l/ml`;
            case VolumeConcentrationUnits.Percent:
                return `%`;
            case VolumeConcentrationUnits.PartsPerThousand:
                return `‰`;
            case VolumeConcentrationUnits.PartsPerMillion:
                return `ppm`;
            case VolumeConcentrationUnits.PartsPerBillion:
                return `ppb`;
            case VolumeConcentrationUnits.PartsPerTrillion:
                return `ppt`;
            case VolumeConcentrationUnits.PicolitersPerLiter:
                return `pl/l`;
            case VolumeConcentrationUnits.NanolitersPerLiter:
                return `nl/l`;
            case VolumeConcentrationUnits.MicrolitersPerLiter:
                return `μl/l`;
            case VolumeConcentrationUnits.MillilitersPerLiter:
                return `ml/l`;
            case VolumeConcentrationUnits.CentilitersPerLiter:
                return `cl/l`;
            case VolumeConcentrationUnits.DecilitersPerLiter:
                return `dl/l`;
            case VolumeConcentrationUnits.PicolitersPerMilliliter:
                return `pl/ml`;
            case VolumeConcentrationUnits.NanolitersPerMilliliter:
                return `nl/ml`;
            case VolumeConcentrationUnits.MicrolitersPerMilliliter:
                return `μl/ml`;
            case VolumeConcentrationUnits.MillilitersPerMilliliter:
                return `ml/ml`;
            case VolumeConcentrationUnits.CentilitersPerMilliliter:
                return `cl/ml`;
            case VolumeConcentrationUnits.DecilitersPerMilliliter:
                return `dl/ml`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given VolumeConcentration are equals to the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns True if the given VolumeConcentration are equal to the current VolumeConcentration.
     */
    public equals(volumeConcentration: VolumeConcentration): boolean {
        return super.internalEquals(this.value, volumeConcentration.BaseValue);
    }

    /**
     * Compare the given VolumeConcentration against the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns 0 if they are equal, -1 if the current VolumeConcentration is less then other, 1 if the current VolumeConcentration is greater then other.
     */
    public compareTo(volumeConcentration: VolumeConcentration): number {
        return super.internalCompareTo(this.value, volumeConcentration.BaseValue);
    }

    /**
     * Add the given VolumeConcentration with the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns A new VolumeConcentration instance with the results.
     */
    public add(volumeConcentration: VolumeConcentration): VolumeConcentration {
        return new VolumeConcentration(super.internalAdd(this.value, volumeConcentration.BaseValue))
    }

    /**
     * Subtract the given VolumeConcentration with the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns A new VolumeConcentration instance with the results.
     */
    public subtract(volumeConcentration: VolumeConcentration): VolumeConcentration {
        return new VolumeConcentration(super.internalSubtract(this.value, volumeConcentration.BaseValue))
    }

    /**
     * Multiply the given VolumeConcentration with the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns A new VolumeConcentration instance with the results.
     */
    public multiply(volumeConcentration: VolumeConcentration): VolumeConcentration {
        return new VolumeConcentration(super.internalMultiply(this.value, volumeConcentration.BaseValue))
    }

    /**
     * Divide the given VolumeConcentration with the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns A new VolumeConcentration instance with the results.
     */
    public divide(volumeConcentration: VolumeConcentration): VolumeConcentration {
        return new VolumeConcentration(super.internalDivide(this.value, volumeConcentration.BaseValue))
    }

    /**
     * Modulo the given VolumeConcentration with the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns A new VolumeConcentration instance with the results.
     */
    public modulo(volumeConcentration: VolumeConcentration): VolumeConcentration {
        return new VolumeConcentration(super.internalModulo(this.value, volumeConcentration.BaseValue))
    }

    /**
     * Pow the given VolumeConcentration with the current VolumeConcentration.
     * @param volumeConcentration The other VolumeConcentration.
     * @returns A new VolumeConcentration instance with the results.
     */
    public pow(volumeConcentration: VolumeConcentration): VolumeConcentration {
        return new VolumeConcentration(super.internalPow(this.value, volumeConcentration.BaseValue))
    }
}
