import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a AbsorbedDoseOfIonizingRadiation */
export interface AbsorbedDoseOfIonizingRadiationDto {
    /** The value of the AbsorbedDoseOfIonizingRadiation */
    value: number;
    /**  The specific unit that the AbsorbedDoseOfIonizingRadiation value is representing */
    unit: AbsorbedDoseOfIonizingRadiationUnits;
}

/** AbsorbedDoseOfIonizingRadiationUnits enumeration */
export enum AbsorbedDoseOfIonizingRadiationUnits {
    /** The gray is the unit of ionizing radiation dose in the SI, defined as the absorption of one joule of radiation energy per kilogram of matter. */
    Grays = "Gray",
    /** The rad is a unit of absorbed radiation dose, defined as 1 rad = 0.01 Gy = 0.01 J/kg. */
    Rads = "Rad",
    /** */
    Femtograys = "Femtogray",
    /** */
    Picograys = "Picogray",
    /** */
    Nanograys = "Nanogray",
    /** */
    Micrograys = "Microgray",
    /** */
    Milligrays = "Milligray",
    /** */
    Centigrays = "Centigray",
    /** */
    Decigrays = "Decigray",
    /** */
    Kilograys = "Kilogray",
    /** */
    Megagrays = "Megagray",
    /** */
    Gigagrays = "Gigagray",
    /** */
    Teragrays = "Teragray",
    /** */
    Petagrays = "Petagray",
    /** */
    Millirads = "Millirad",
    /** */
    Kilorads = "Kilorad",
    /** */
    Megarads = "Megarad"
}

/** Absorbed dose is a dose quantity which is the measure of the energy deposited in matter by ionizing radiation per unit mass. */
export class AbsorbedDoseOfIonizingRadiation extends BaseUnit {
    protected value: number;
    private graysLazy: number | null = null;
    private radsLazy: number | null = null;
    private femtograysLazy: number | null = null;
    private picograysLazy: number | null = null;
    private nanograysLazy: number | null = null;
    private micrograysLazy: number | null = null;
    private milligraysLazy: number | null = null;
    private centigraysLazy: number | null = null;
    private decigraysLazy: number | null = null;
    private kilograysLazy: number | null = null;
    private megagraysLazy: number | null = null;
    private gigagraysLazy: number | null = null;
    private teragraysLazy: number | null = null;
    private petagraysLazy: number | null = null;
    private milliradsLazy: number | null = null;
    private kiloradsLazy: number | null = null;
    private megaradsLazy: number | null = null;

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation.
     * @param value The value.
     * @param fromUnit The ‘AbsorbedDoseOfIonizingRadiation’ unit to create from.
     * The default unit is Grays
     */
    public constructor(value: number, fromUnit: AbsorbedDoseOfIonizingRadiationUnits = AbsorbedDoseOfIonizingRadiationUnits.Grays) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of AbsorbedDoseOfIonizingRadiation is Grays.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): AbsorbedDoseOfIonizingRadiationUnits.Grays {
        return AbsorbedDoseOfIonizingRadiationUnits.Grays
    }

    /** The gray is the unit of ionizing radiation dose in the SI, defined as the absorption of one joule of radiation energy per kilogram of matter. */
    public get Grays(): number {
        if(this.graysLazy !== null){
            return this.graysLazy;
        }
        return this.graysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Grays);
    }

    /** The rad is a unit of absorbed radiation dose, defined as 1 rad = 0.01 Gy = 0.01 J/kg. */
    public get Rads(): number {
        if(this.radsLazy !== null){
            return this.radsLazy;
        }
        return this.radsLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Rads);
    }

    /** */
    public get Femtograys(): number {
        if(this.femtograysLazy !== null){
            return this.femtograysLazy;
        }
        return this.femtograysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Femtograys);
    }

    /** */
    public get Picograys(): number {
        if(this.picograysLazy !== null){
            return this.picograysLazy;
        }
        return this.picograysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Picograys);
    }

    /** */
    public get Nanograys(): number {
        if(this.nanograysLazy !== null){
            return this.nanograysLazy;
        }
        return this.nanograysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Nanograys);
    }

    /** */
    public get Micrograys(): number {
        if(this.micrograysLazy !== null){
            return this.micrograysLazy;
        }
        return this.micrograysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Micrograys);
    }

    /** */
    public get Milligrays(): number {
        if(this.milligraysLazy !== null){
            return this.milligraysLazy;
        }
        return this.milligraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Milligrays);
    }

    /** */
    public get Centigrays(): number {
        if(this.centigraysLazy !== null){
            return this.centigraysLazy;
        }
        return this.centigraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Centigrays);
    }

    /** */
    public get Decigrays(): number {
        if(this.decigraysLazy !== null){
            return this.decigraysLazy;
        }
        return this.decigraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Decigrays);
    }

    /** */
    public get Kilograys(): number {
        if(this.kilograysLazy !== null){
            return this.kilograysLazy;
        }
        return this.kilograysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Kilograys);
    }

    /** */
    public get Megagrays(): number {
        if(this.megagraysLazy !== null){
            return this.megagraysLazy;
        }
        return this.megagraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Megagrays);
    }

    /** */
    public get Gigagrays(): number {
        if(this.gigagraysLazy !== null){
            return this.gigagraysLazy;
        }
        return this.gigagraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Gigagrays);
    }

    /** */
    public get Teragrays(): number {
        if(this.teragraysLazy !== null){
            return this.teragraysLazy;
        }
        return this.teragraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Teragrays);
    }

    /** */
    public get Petagrays(): number {
        if(this.petagraysLazy !== null){
            return this.petagraysLazy;
        }
        return this.petagraysLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Petagrays);
    }

    /** */
    public get Millirads(): number {
        if(this.milliradsLazy !== null){
            return this.milliradsLazy;
        }
        return this.milliradsLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Millirads);
    }

    /** */
    public get Kilorads(): number {
        if(this.kiloradsLazy !== null){
            return this.kiloradsLazy;
        }
        return this.kiloradsLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Kilorads);
    }

    /** */
    public get Megarads(): number {
        if(this.megaradsLazy !== null){
            return this.megaradsLazy;
        }
        return this.megaradsLazy = this.convertFromBase(AbsorbedDoseOfIonizingRadiationUnits.Megarads);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Grays
     * The gray is the unit of ionizing radiation dose in the SI, defined as the absorption of one joule of radiation energy per kilogram of matter.
     * @param value The unit as Grays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromGrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Grays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Rads
     * The rad is a unit of absorbed radiation dose, defined as 1 rad = 0.01 Gy = 0.01 J/kg.
     * @param value The unit as Rads to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromRads(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Rads);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Femtograys
     *
     * @param value The unit as Femtograys to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromFemtograys(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Femtograys);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Picograys
     *
     * @param value The unit as Picograys to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromPicograys(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Picograys);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Nanograys
     *
     * @param value The unit as Nanograys to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromNanograys(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Nanograys);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Micrograys
     *
     * @param value The unit as Micrograys to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromMicrograys(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Micrograys);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Milligrays
     *
     * @param value The unit as Milligrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromMilligrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Milligrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Centigrays
     *
     * @param value The unit as Centigrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromCentigrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Centigrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Decigrays
     *
     * @param value The unit as Decigrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromDecigrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Decigrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Kilograys
     *
     * @param value The unit as Kilograys to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromKilograys(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Kilograys);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Megagrays
     *
     * @param value The unit as Megagrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromMegagrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Megagrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Gigagrays
     *
     * @param value The unit as Gigagrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromGigagrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Gigagrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Teragrays
     *
     * @param value The unit as Teragrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromTeragrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Teragrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Petagrays
     *
     * @param value The unit as Petagrays to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromPetagrays(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Petagrays);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Millirads
     *
     * @param value The unit as Millirads to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromMillirads(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Millirads);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Kilorads
     *
     * @param value The unit as Kilorads to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromKilorads(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Kilorads);
    }

    /**
     * Create a new AbsorbedDoseOfIonizingRadiation instance from a Megarads
     *
     * @param value The unit as Megarads to create a new AbsorbedDoseOfIonizingRadiation from.
     * @returns The new AbsorbedDoseOfIonizingRadiation instance.
     */
    public static FromMegarads(value: number): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(value, AbsorbedDoseOfIonizingRadiationUnits.Megarads);
    }

    /**
     * Gets the base unit enumeration associated with AbsorbedDoseOfIonizingRadiation
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof AbsorbedDoseOfIonizingRadiationUnits {
        return AbsorbedDoseOfIonizingRadiationUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): AbsorbedDoseOfIonizingRadiationUnits.Grays {
        return AbsorbedDoseOfIonizingRadiationUnits.Grays;
    }

    /**
     * Create API DTO represent a AbsorbedDoseOfIonizingRadiation unit.
     * @param holdInUnit The specific AbsorbedDoseOfIonizingRadiation unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: AbsorbedDoseOfIonizingRadiationUnits = AbsorbedDoseOfIonizingRadiationUnits.Grays): AbsorbedDoseOfIonizingRadiationDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a AbsorbedDoseOfIonizingRadiation unit from an API DTO representation.
     * @param dtoAbsorbedDoseOfIonizingRadiation The AbsorbedDoseOfIonizingRadiation API DTO representation
     */
    public static FromDto(dtoAbsorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiationDto): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(dtoAbsorbedDoseOfIonizingRadiation.value, dtoAbsorbedDoseOfIonizingRadiation.unit);
    }

    /**
     * Convert AbsorbedDoseOfIonizingRadiation to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: AbsorbedDoseOfIonizingRadiationUnits): number {
        switch (toUnit) {
            case AbsorbedDoseOfIonizingRadiationUnits.Grays: return this.Grays;
            case AbsorbedDoseOfIonizingRadiationUnits.Rads: return this.Rads;
            case AbsorbedDoseOfIonizingRadiationUnits.Femtograys: return this.Femtograys;
            case AbsorbedDoseOfIonizingRadiationUnits.Picograys: return this.Picograys;
            case AbsorbedDoseOfIonizingRadiationUnits.Nanograys: return this.Nanograys;
            case AbsorbedDoseOfIonizingRadiationUnits.Micrograys: return this.Micrograys;
            case AbsorbedDoseOfIonizingRadiationUnits.Milligrays: return this.Milligrays;
            case AbsorbedDoseOfIonizingRadiationUnits.Centigrays: return this.Centigrays;
            case AbsorbedDoseOfIonizingRadiationUnits.Decigrays: return this.Decigrays;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilograys: return this.Kilograys;
            case AbsorbedDoseOfIonizingRadiationUnits.Megagrays: return this.Megagrays;
            case AbsorbedDoseOfIonizingRadiationUnits.Gigagrays: return this.Gigagrays;
            case AbsorbedDoseOfIonizingRadiationUnits.Teragrays: return this.Teragrays;
            case AbsorbedDoseOfIonizingRadiationUnits.Petagrays: return this.Petagrays;
            case AbsorbedDoseOfIonizingRadiationUnits.Millirads: return this.Millirads;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilorads: return this.Kilorads;
            case AbsorbedDoseOfIonizingRadiationUnits.Megarads: return this.Megarads;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: AbsorbedDoseOfIonizingRadiationUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case AbsorbedDoseOfIonizingRadiationUnits.Grays: return this.value;
                case AbsorbedDoseOfIonizingRadiationUnits.Rads: return super.internalMultiply(this.value, 100);
                case AbsorbedDoseOfIonizingRadiationUnits.Femtograys: return super.internalDivide(this.value, 1e-15);
                case AbsorbedDoseOfIonizingRadiationUnits.Picograys: return super.internalDivide(this.value, 1e-12);
                case AbsorbedDoseOfIonizingRadiationUnits.Nanograys: return super.internalDivide(this.value, 1e-9);
                case AbsorbedDoseOfIonizingRadiationUnits.Micrograys: return super.internalDivide(this.value, 0.000001);
                case AbsorbedDoseOfIonizingRadiationUnits.Milligrays: return super.internalDivide(this.value, 0.001);
                case AbsorbedDoseOfIonizingRadiationUnits.Centigrays: return super.internalDivide(this.value, 0.01);
                case AbsorbedDoseOfIonizingRadiationUnits.Decigrays: return super.internalDivide(this.value, 0.1);
                case AbsorbedDoseOfIonizingRadiationUnits.Kilograys: return super.internalDivide(this.value, 1000);
                case AbsorbedDoseOfIonizingRadiationUnits.Megagrays: return super.internalDivide(this.value, 1000000);
                case AbsorbedDoseOfIonizingRadiationUnits.Gigagrays: return super.internalDivide(this.value, 1000000000);
                case AbsorbedDoseOfIonizingRadiationUnits.Teragrays: return super.internalDivide(this.value, 1000000000000);
                case AbsorbedDoseOfIonizingRadiationUnits.Petagrays: return super.internalDivide(this.value, 1000000000000000);
                case AbsorbedDoseOfIonizingRadiationUnits.Millirads: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalDivide(v3, 0.001);
                }
                case AbsorbedDoseOfIonizingRadiationUnits.Kilorads: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalDivide(v3, 1000);
                }
                case AbsorbedDoseOfIonizingRadiationUnits.Megarads: {
                    const v3 = super.internalMultiply(this.value, 100);
                    return super.internalDivide(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case AbsorbedDoseOfIonizingRadiationUnits.Grays: return this.value;
            case AbsorbedDoseOfIonizingRadiationUnits.Rads: return this.value * 100;
            case AbsorbedDoseOfIonizingRadiationUnits.Femtograys: return (this.value) / 1e-15;
            case AbsorbedDoseOfIonizingRadiationUnits.Picograys: return (this.value) / 1e-12;
            case AbsorbedDoseOfIonizingRadiationUnits.Nanograys: return (this.value) / 1e-9;
            case AbsorbedDoseOfIonizingRadiationUnits.Micrograys: return (this.value) / 0.000001;
            case AbsorbedDoseOfIonizingRadiationUnits.Milligrays: return (this.value) / 0.001;
            case AbsorbedDoseOfIonizingRadiationUnits.Centigrays: return (this.value) / 0.01;
            case AbsorbedDoseOfIonizingRadiationUnits.Decigrays: return (this.value) / 0.1;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilograys: return (this.value) / 1000;
            case AbsorbedDoseOfIonizingRadiationUnits.Megagrays: return (this.value) / 1000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Gigagrays: return (this.value) / 1000000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Teragrays: return (this.value) / 1000000000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Petagrays: return (this.value) / 1000000000000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Millirads: return (this.value * 100) / 0.001;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilorads: return (this.value * 100) / 1000;
            case AbsorbedDoseOfIonizingRadiationUnits.Megarads: return (this.value * 100) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: AbsorbedDoseOfIonizingRadiationUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case AbsorbedDoseOfIonizingRadiationUnits.Grays: return value;
                case AbsorbedDoseOfIonizingRadiationUnits.Rads: return super.internalDivide(value, 100);
                case AbsorbedDoseOfIonizingRadiationUnits.Femtograys: return super.internalMultiply(value, 1e-15);
                case AbsorbedDoseOfIonizingRadiationUnits.Picograys: return super.internalMultiply(value, 1e-12);
                case AbsorbedDoseOfIonizingRadiationUnits.Nanograys: return super.internalMultiply(value, 1e-9);
                case AbsorbedDoseOfIonizingRadiationUnits.Micrograys: return super.internalMultiply(value, 0.000001);
                case AbsorbedDoseOfIonizingRadiationUnits.Milligrays: return super.internalMultiply(value, 0.001);
                case AbsorbedDoseOfIonizingRadiationUnits.Centigrays: return super.internalMultiply(value, 0.01);
                case AbsorbedDoseOfIonizingRadiationUnits.Decigrays: return super.internalMultiply(value, 0.1);
                case AbsorbedDoseOfIonizingRadiationUnits.Kilograys: return super.internalMultiply(value, 1000);
                case AbsorbedDoseOfIonizingRadiationUnits.Megagrays: return super.internalMultiply(value, 1000000);
                case AbsorbedDoseOfIonizingRadiationUnits.Gigagrays: return super.internalMultiply(value, 1000000000);
                case AbsorbedDoseOfIonizingRadiationUnits.Teragrays: return super.internalMultiply(value, 1000000000000);
                case AbsorbedDoseOfIonizingRadiationUnits.Petagrays: return super.internalMultiply(value, 1000000000000000);
                case AbsorbedDoseOfIonizingRadiationUnits.Millirads: {
                    const v3 = super.internalDivide(value, 100);
                    return super.internalMultiply(v3, 0.001);
                }
                case AbsorbedDoseOfIonizingRadiationUnits.Kilorads: {
                    const v3 = super.internalDivide(value, 100);
                    return super.internalMultiply(v3, 1000);
                }
                case AbsorbedDoseOfIonizingRadiationUnits.Megarads: {
                    const v3 = super.internalDivide(value, 100);
                    return super.internalMultiply(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case AbsorbedDoseOfIonizingRadiationUnits.Grays: return value;
            case AbsorbedDoseOfIonizingRadiationUnits.Rads: return value / 100;
            case AbsorbedDoseOfIonizingRadiationUnits.Femtograys: return (value) * 1e-15;
            case AbsorbedDoseOfIonizingRadiationUnits.Picograys: return (value) * 1e-12;
            case AbsorbedDoseOfIonizingRadiationUnits.Nanograys: return (value) * 1e-9;
            case AbsorbedDoseOfIonizingRadiationUnits.Micrograys: return (value) * 0.000001;
            case AbsorbedDoseOfIonizingRadiationUnits.Milligrays: return (value) * 0.001;
            case AbsorbedDoseOfIonizingRadiationUnits.Centigrays: return (value) * 0.01;
            case AbsorbedDoseOfIonizingRadiationUnits.Decigrays: return (value) * 0.1;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilograys: return (value) * 1000;
            case AbsorbedDoseOfIonizingRadiationUnits.Megagrays: return (value) * 1000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Gigagrays: return (value) * 1000000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Teragrays: return (value) * 1000000000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Petagrays: return (value) * 1000000000000000;
            case AbsorbedDoseOfIonizingRadiationUnits.Millirads: return (value / 100) * 0.001;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilorads: return (value / 100) * 1000;
            case AbsorbedDoseOfIonizingRadiationUnits.Megarads: return (value / 100) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the AbsorbedDoseOfIonizingRadiation to string.
     * Note! the default format for AbsorbedDoseOfIonizingRadiation is Grays.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the AbsorbedDoseOfIonizingRadiation.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the AbsorbedDoseOfIonizingRadiation.
     */
    public toString(unit: AbsorbedDoseOfIonizingRadiationUnits = AbsorbedDoseOfIonizingRadiationUnits.Grays, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case AbsorbedDoseOfIonizingRadiationUnits.Grays:
                return super.truncateFractionDigits(this.Grays, options as ToStringOptions) + ` Gy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Rads:
                return super.truncateFractionDigits(this.Rads, options as ToStringOptions) + ` rad`;
            case AbsorbedDoseOfIonizingRadiationUnits.Femtograys:
                return super.truncateFractionDigits(this.Femtograys, options as ToStringOptions) + ` fGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Picograys:
                return super.truncateFractionDigits(this.Picograys, options as ToStringOptions) + ` pGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Nanograys:
                return super.truncateFractionDigits(this.Nanograys, options as ToStringOptions) + ` nGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Micrograys:
                return super.truncateFractionDigits(this.Micrograys, options as ToStringOptions) + ` μGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Milligrays:
                return super.truncateFractionDigits(this.Milligrays, options as ToStringOptions) + ` mGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Centigrays:
                return super.truncateFractionDigits(this.Centigrays, options as ToStringOptions) + ` cGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Decigrays:
                return super.truncateFractionDigits(this.Decigrays, options as ToStringOptions) + ` dGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilograys:
                return super.truncateFractionDigits(this.Kilograys, options as ToStringOptions) + ` kGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Megagrays:
                return super.truncateFractionDigits(this.Megagrays, options as ToStringOptions) + ` MGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Gigagrays:
                return super.truncateFractionDigits(this.Gigagrays, options as ToStringOptions) + ` GGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Teragrays:
                return super.truncateFractionDigits(this.Teragrays, options as ToStringOptions) + ` TGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Petagrays:
                return super.truncateFractionDigits(this.Petagrays, options as ToStringOptions) + ` PGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Millirads:
                return super.truncateFractionDigits(this.Millirads, options as ToStringOptions) + ` mrad`;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilorads:
                return super.truncateFractionDigits(this.Kilorads, options as ToStringOptions) + ` krad`;
            case AbsorbedDoseOfIonizingRadiationUnits.Megarads:
                return super.truncateFractionDigits(this.Megarads, options as ToStringOptions) + ` Mrad`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get AbsorbedDoseOfIonizingRadiation unit abbreviation.
     * Note! the default abbreviation for AbsorbedDoseOfIonizingRadiation is Grays.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the AbsorbedDoseOfIonizingRadiation.
     * @returns The abbreviation string of AbsorbedDoseOfIonizingRadiation.
     */
    public getUnitAbbreviation(unitAbbreviation: AbsorbedDoseOfIonizingRadiationUnits = AbsorbedDoseOfIonizingRadiationUnits.Grays): string {

        switch (unitAbbreviation) {
            
            case AbsorbedDoseOfIonizingRadiationUnits.Grays:
                return `Gy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Rads:
                return `rad`;
            case AbsorbedDoseOfIonizingRadiationUnits.Femtograys:
                return `fGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Picograys:
                return `pGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Nanograys:
                return `nGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Micrograys:
                return `μGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Milligrays:
                return `mGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Centigrays:
                return `cGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Decigrays:
                return `dGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilograys:
                return `kGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Megagrays:
                return `MGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Gigagrays:
                return `GGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Teragrays:
                return `TGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Petagrays:
                return `PGy`;
            case AbsorbedDoseOfIonizingRadiationUnits.Millirads:
                return `mrad`;
            case AbsorbedDoseOfIonizingRadiationUnits.Kilorads:
                return `krad`;
            case AbsorbedDoseOfIonizingRadiationUnits.Megarads:
                return `Mrad`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given AbsorbedDoseOfIonizingRadiation are equals to the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns True if the given AbsorbedDoseOfIonizingRadiation are equal to the current AbsorbedDoseOfIonizingRadiation.
     */
    public equals(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): boolean {
        return super.internalEquals(this.value, absorbedDoseOfIonizingRadiation.BaseValue);
    }

    /**
     * Compare the given AbsorbedDoseOfIonizingRadiation against the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns 0 if they are equal, -1 if the current AbsorbedDoseOfIonizingRadiation is less then other, 1 if the current AbsorbedDoseOfIonizingRadiation is greater then other.
     */
    public compareTo(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): number {
        return super.internalCompareTo(this.value, absorbedDoseOfIonizingRadiation.BaseValue);
    }

    /**
     * Add the given AbsorbedDoseOfIonizingRadiation with the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns A new AbsorbedDoseOfIonizingRadiation instance with the results.
     */
    public add(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(super.internalAdd(this.value, absorbedDoseOfIonizingRadiation.BaseValue))
    }

    /**
     * Subtract the given AbsorbedDoseOfIonizingRadiation with the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns A new AbsorbedDoseOfIonizingRadiation instance with the results.
     */
    public subtract(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(super.internalSubtract(this.value, absorbedDoseOfIonizingRadiation.BaseValue))
    }

    /**
     * Multiply the given AbsorbedDoseOfIonizingRadiation with the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns A new AbsorbedDoseOfIonizingRadiation instance with the results.
     */
    public multiply(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(super.internalMultiply(this.value, absorbedDoseOfIonizingRadiation.BaseValue))
    }

    /**
     * Divide the given AbsorbedDoseOfIonizingRadiation with the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns A new AbsorbedDoseOfIonizingRadiation instance with the results.
     */
    public divide(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(super.internalDivide(this.value, absorbedDoseOfIonizingRadiation.BaseValue))
    }

    /**
     * Modulo the given AbsorbedDoseOfIonizingRadiation with the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns A new AbsorbedDoseOfIonizingRadiation instance with the results.
     */
    public modulo(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(super.internalModulo(this.value, absorbedDoseOfIonizingRadiation.BaseValue))
    }

    /**
     * Pow the given AbsorbedDoseOfIonizingRadiation with the current AbsorbedDoseOfIonizingRadiation.
     * @param absorbedDoseOfIonizingRadiation The other AbsorbedDoseOfIonizingRadiation.
     * @returns A new AbsorbedDoseOfIonizingRadiation instance with the results.
     */
    public pow(absorbedDoseOfIonizingRadiation: AbsorbedDoseOfIonizingRadiation): AbsorbedDoseOfIonizingRadiation {
        return new AbsorbedDoseOfIonizingRadiation(super.internalPow(this.value, absorbedDoseOfIonizingRadiation.BaseValue))
    }
}
