import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a AmountOfSubstance */
export interface AmountOfSubstanceDto {
    /** The value of the AmountOfSubstance */
    value: number;
    /**  The specific unit that the AmountOfSubstance value is representing */
    unit: AmountOfSubstanceUnits;
}

/** AmountOfSubstanceUnits enumeration */
export enum AmountOfSubstanceUnits {
    /** */
    Moles = "Mole",
    /** */
    PoundMoles = "PoundMole",
    /** */
    Femtomoles = "Femtomole",
    /** */
    Picomoles = "Picomole",
    /** */
    Nanomoles = "Nanomole",
    /** */
    Micromoles = "Micromole",
    /** */
    Millimoles = "Millimole",
    /** */
    Centimoles = "Centimole",
    /** */
    Decimoles = "Decimole",
    /** */
    Kilomoles = "Kilomole",
    /** */
    Megamoles = "Megamole",
    /** */
    NanopoundMoles = "NanopoundMole",
    /** */
    MicropoundMoles = "MicropoundMole",
    /** */
    MillipoundMoles = "MillipoundMole",
    /** */
    CentipoundMoles = "CentipoundMole",
    /** */
    DecipoundMoles = "DecipoundMole",
    /** */
    KilopoundMoles = "KilopoundMole"
}

/** Mole is the amount of substance containing Avagadro's Number (6.02 x 10 ^ 23) of real particles such as molecules,atoms, ions or radicals. */
export class AmountOfSubstance extends BaseUnit {
    protected value: number;
    private molesLazy: number | null = null;
    private poundmolesLazy: number | null = null;
    private femtomolesLazy: number | null = null;
    private picomolesLazy: number | null = null;
    private nanomolesLazy: number | null = null;
    private micromolesLazy: number | null = null;
    private millimolesLazy: number | null = null;
    private centimolesLazy: number | null = null;
    private decimolesLazy: number | null = null;
    private kilomolesLazy: number | null = null;
    private megamolesLazy: number | null = null;
    private nanopoundmolesLazy: number | null = null;
    private micropoundmolesLazy: number | null = null;
    private millipoundmolesLazy: number | null = null;
    private centipoundmolesLazy: number | null = null;
    private decipoundmolesLazy: number | null = null;
    private kilopoundmolesLazy: number | null = null;

    /**
     * Create a new AmountOfSubstance.
     * @param value The value.
     * @param fromUnit The ‘AmountOfSubstance’ unit to create from.
     * The default unit is Moles
     */
    public constructor(value: number, fromUnit: AmountOfSubstanceUnits = AmountOfSubstanceUnits.Moles) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of AmountOfSubstance is Moles.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Moles(): number {
        if(this.molesLazy !== null){
            return this.molesLazy;
        }
        return this.molesLazy = this.convertFromBase(AmountOfSubstanceUnits.Moles);
    }

    /** */
    public get PoundMoles(): number {
        if(this.poundmolesLazy !== null){
            return this.poundmolesLazy;
        }
        return this.poundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.PoundMoles);
    }

    /** */
    public get Femtomoles(): number {
        if(this.femtomolesLazy !== null){
            return this.femtomolesLazy;
        }
        return this.femtomolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Femtomoles);
    }

    /** */
    public get Picomoles(): number {
        if(this.picomolesLazy !== null){
            return this.picomolesLazy;
        }
        return this.picomolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Picomoles);
    }

    /** */
    public get Nanomoles(): number {
        if(this.nanomolesLazy !== null){
            return this.nanomolesLazy;
        }
        return this.nanomolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Nanomoles);
    }

    /** */
    public get Micromoles(): number {
        if(this.micromolesLazy !== null){
            return this.micromolesLazy;
        }
        return this.micromolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Micromoles);
    }

    /** */
    public get Millimoles(): number {
        if(this.millimolesLazy !== null){
            return this.millimolesLazy;
        }
        return this.millimolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Millimoles);
    }

    /** */
    public get Centimoles(): number {
        if(this.centimolesLazy !== null){
            return this.centimolesLazy;
        }
        return this.centimolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Centimoles);
    }

    /** */
    public get Decimoles(): number {
        if(this.decimolesLazy !== null){
            return this.decimolesLazy;
        }
        return this.decimolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Decimoles);
    }

    /** */
    public get Kilomoles(): number {
        if(this.kilomolesLazy !== null){
            return this.kilomolesLazy;
        }
        return this.kilomolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Kilomoles);
    }

    /** */
    public get Megamoles(): number {
        if(this.megamolesLazy !== null){
            return this.megamolesLazy;
        }
        return this.megamolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Megamoles);
    }

    /** */
    public get NanopoundMoles(): number {
        if(this.nanopoundmolesLazy !== null){
            return this.nanopoundmolesLazy;
        }
        return this.nanopoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.NanopoundMoles);
    }

    /** */
    public get MicropoundMoles(): number {
        if(this.micropoundmolesLazy !== null){
            return this.micropoundmolesLazy;
        }
        return this.micropoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.MicropoundMoles);
    }

    /** */
    public get MillipoundMoles(): number {
        if(this.millipoundmolesLazy !== null){
            return this.millipoundmolesLazy;
        }
        return this.millipoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.MillipoundMoles);
    }

    /** */
    public get CentipoundMoles(): number {
        if(this.centipoundmolesLazy !== null){
            return this.centipoundmolesLazy;
        }
        return this.centipoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.CentipoundMoles);
    }

    /** */
    public get DecipoundMoles(): number {
        if(this.decipoundmolesLazy !== null){
            return this.decipoundmolesLazy;
        }
        return this.decipoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.DecipoundMoles);
    }

    /** */
    public get KilopoundMoles(): number {
        if(this.kilopoundmolesLazy !== null){
            return this.kilopoundmolesLazy;
        }
        return this.kilopoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.KilopoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Moles
     *
     * @param value The unit as Moles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Moles);
    }

    /**
     * Create a new AmountOfSubstance instance from a PoundMoles
     *
     * @param value The unit as PoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromPoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.PoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Femtomoles
     *
     * @param value The unit as Femtomoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromFemtomoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Femtomoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Picomoles
     *
     * @param value The unit as Picomoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromPicomoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Picomoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Nanomoles
     *
     * @param value The unit as Nanomoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromNanomoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Nanomoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Micromoles
     *
     * @param value The unit as Micromoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromMicromoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Micromoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Millimoles
     *
     * @param value The unit as Millimoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromMillimoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Millimoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Centimoles
     *
     * @param value The unit as Centimoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromCentimoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Centimoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Decimoles
     *
     * @param value The unit as Decimoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromDecimoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Decimoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Kilomoles
     *
     * @param value The unit as Kilomoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromKilomoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Kilomoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Megamoles
     *
     * @param value The unit as Megamoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromMegamoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Megamoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a NanopoundMoles
     *
     * @param value The unit as NanopoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromNanopoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.NanopoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a MicropoundMoles
     *
     * @param value The unit as MicropoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromMicropoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.MicropoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a MillipoundMoles
     *
     * @param value The unit as MillipoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromMillipoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.MillipoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a CentipoundMoles
     *
     * @param value The unit as CentipoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromCentipoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.CentipoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a DecipoundMoles
     *
     * @param value The unit as DecipoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromDecipoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.DecipoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a KilopoundMoles
     *
     * @param value The unit as KilopoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromKilopoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.KilopoundMoles);
    }

    /**
     * Gets the base unit enumeration associated with AmountOfSubstance
     * @returns The unit enumeration that can be used to interact with this type
     */
    public static getUnitEnum(): typeof AmountOfSubstanceUnits {
        return AmountOfSubstanceUnits;
    }

    /**
     * Create API DTO represent a AmountOfSubstance unit.
     * @param holdInUnit The specific AmountOfSubstance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: AmountOfSubstanceUnits = AmountOfSubstanceUnits.Moles): AmountOfSubstanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a AmountOfSubstance unit from an API DTO representation.
     * @param dtoAmountOfSubstance The AmountOfSubstance API DTO representation
     */
    public static FromDto(dtoAmountOfSubstance: AmountOfSubstanceDto): AmountOfSubstance {
        return new AmountOfSubstance(dtoAmountOfSubstance.value, dtoAmountOfSubstance.unit);
    }

    /**
     * Convert AmountOfSubstance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: AmountOfSubstanceUnits): number {
        switch (toUnit) {
            case AmountOfSubstanceUnits.Moles: return this.Moles;
            case AmountOfSubstanceUnits.PoundMoles: return this.PoundMoles;
            case AmountOfSubstanceUnits.Femtomoles: return this.Femtomoles;
            case AmountOfSubstanceUnits.Picomoles: return this.Picomoles;
            case AmountOfSubstanceUnits.Nanomoles: return this.Nanomoles;
            case AmountOfSubstanceUnits.Micromoles: return this.Micromoles;
            case AmountOfSubstanceUnits.Millimoles: return this.Millimoles;
            case AmountOfSubstanceUnits.Centimoles: return this.Centimoles;
            case AmountOfSubstanceUnits.Decimoles: return this.Decimoles;
            case AmountOfSubstanceUnits.Kilomoles: return this.Kilomoles;
            case AmountOfSubstanceUnits.Megamoles: return this.Megamoles;
            case AmountOfSubstanceUnits.NanopoundMoles: return this.NanopoundMoles;
            case AmountOfSubstanceUnits.MicropoundMoles: return this.MicropoundMoles;
            case AmountOfSubstanceUnits.MillipoundMoles: return this.MillipoundMoles;
            case AmountOfSubstanceUnits.CentipoundMoles: return this.CentipoundMoles;
            case AmountOfSubstanceUnits.DecipoundMoles: return this.DecipoundMoles;
            case AmountOfSubstanceUnits.KilopoundMoles: return this.KilopoundMoles;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: AmountOfSubstanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case AmountOfSubstanceUnits.Moles: return this.value;
                case AmountOfSubstanceUnits.PoundMoles: return super.internalDivide(this.value, 453.59237);
                case AmountOfSubstanceUnits.Femtomoles: return super.internalDivide(this.value, 1e-15);
                case AmountOfSubstanceUnits.Picomoles: return super.internalDivide(this.value, 1e-12);
                case AmountOfSubstanceUnits.Nanomoles: return super.internalDivide(this.value, 1e-9);
                case AmountOfSubstanceUnits.Micromoles: return super.internalDivide(this.value, 0.000001);
                case AmountOfSubstanceUnits.Millimoles: return super.internalDivide(this.value, 0.001);
                case AmountOfSubstanceUnits.Centimoles: return super.internalDivide(this.value, 0.01);
                case AmountOfSubstanceUnits.Decimoles: return super.internalDivide(this.value, 0.1);
                case AmountOfSubstanceUnits.Kilomoles: return super.internalDivide(this.value, 1000);
                case AmountOfSubstanceUnits.Megamoles: return super.internalDivide(this.value, 1000000);
                case AmountOfSubstanceUnits.NanopoundMoles: {
                    const v3 = super.internalDivide(this.value, 453.59237);
                    return super.internalDivide(v3, 1e-9);
                }
                case AmountOfSubstanceUnits.MicropoundMoles: {
                    const v3 = super.internalDivide(this.value, 453.59237);
                    return super.internalDivide(v3, 0.000001);
                }
                case AmountOfSubstanceUnits.MillipoundMoles: {
                    const v3 = super.internalDivide(this.value, 453.59237);
                    return super.internalDivide(v3, 0.001);
                }
                case AmountOfSubstanceUnits.CentipoundMoles: {
                    const v3 = super.internalDivide(this.value, 453.59237);
                    return super.internalDivide(v3, 0.01);
                }
                case AmountOfSubstanceUnits.DecipoundMoles: {
                    const v3 = super.internalDivide(this.value, 453.59237);
                    return super.internalDivide(v3, 0.1);
                }
                case AmountOfSubstanceUnits.KilopoundMoles: {
                    const v3 = super.internalDivide(this.value, 453.59237);
                    return super.internalDivide(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case AmountOfSubstanceUnits.Moles: return this.value;
            case AmountOfSubstanceUnits.PoundMoles: return this.value / 453.59237;
            case AmountOfSubstanceUnits.Femtomoles: return (this.value) / 1e-15;
            case AmountOfSubstanceUnits.Picomoles: return (this.value) / 1e-12;
            case AmountOfSubstanceUnits.Nanomoles: return (this.value) / 1e-9;
            case AmountOfSubstanceUnits.Micromoles: return (this.value) / 0.000001;
            case AmountOfSubstanceUnits.Millimoles: return (this.value) / 0.001;
            case AmountOfSubstanceUnits.Centimoles: return (this.value) / 0.01;
            case AmountOfSubstanceUnits.Decimoles: return (this.value) / 0.1;
            case AmountOfSubstanceUnits.Kilomoles: return (this.value) / 1000;
            case AmountOfSubstanceUnits.Megamoles: return (this.value) / 1000000;
            case AmountOfSubstanceUnits.NanopoundMoles: return (this.value / 453.59237) / 1e-9;
            case AmountOfSubstanceUnits.MicropoundMoles: return (this.value / 453.59237) / 0.000001;
            case AmountOfSubstanceUnits.MillipoundMoles: return (this.value / 453.59237) / 0.001;
            case AmountOfSubstanceUnits.CentipoundMoles: return (this.value / 453.59237) / 0.01;
            case AmountOfSubstanceUnits.DecipoundMoles: return (this.value / 453.59237) / 0.1;
            case AmountOfSubstanceUnits.KilopoundMoles: return (this.value / 453.59237) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: AmountOfSubstanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case AmountOfSubstanceUnits.Moles: return value;
                case AmountOfSubstanceUnits.PoundMoles: return super.internalMultiply(value, 453.59237);
                case AmountOfSubstanceUnits.Femtomoles: return super.internalMultiply(value, 1e-15);
                case AmountOfSubstanceUnits.Picomoles: return super.internalMultiply(value, 1e-12);
                case AmountOfSubstanceUnits.Nanomoles: return super.internalMultiply(value, 1e-9);
                case AmountOfSubstanceUnits.Micromoles: return super.internalMultiply(value, 0.000001);
                case AmountOfSubstanceUnits.Millimoles: return super.internalMultiply(value, 0.001);
                case AmountOfSubstanceUnits.Centimoles: return super.internalMultiply(value, 0.01);
                case AmountOfSubstanceUnits.Decimoles: return super.internalMultiply(value, 0.1);
                case AmountOfSubstanceUnits.Kilomoles: return super.internalMultiply(value, 1000);
                case AmountOfSubstanceUnits.Megamoles: return super.internalMultiply(value, 1000000);
                case AmountOfSubstanceUnits.NanopoundMoles: {
                    const v3 = super.internalMultiply(value, 453.59237);
                    return super.internalMultiply(v3, 1e-9);
                }
                case AmountOfSubstanceUnits.MicropoundMoles: {
                    const v3 = super.internalMultiply(value, 453.59237);
                    return super.internalMultiply(v3, 0.000001);
                }
                case AmountOfSubstanceUnits.MillipoundMoles: {
                    const v3 = super.internalMultiply(value, 453.59237);
                    return super.internalMultiply(v3, 0.001);
                }
                case AmountOfSubstanceUnits.CentipoundMoles: {
                    const v3 = super.internalMultiply(value, 453.59237);
                    return super.internalMultiply(v3, 0.01);
                }
                case AmountOfSubstanceUnits.DecipoundMoles: {
                    const v3 = super.internalMultiply(value, 453.59237);
                    return super.internalMultiply(v3, 0.1);
                }
                case AmountOfSubstanceUnits.KilopoundMoles: {
                    const v3 = super.internalMultiply(value, 453.59237);
                    return super.internalMultiply(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case AmountOfSubstanceUnits.Moles: return value;
            case AmountOfSubstanceUnits.PoundMoles: return value * 453.59237;
            case AmountOfSubstanceUnits.Femtomoles: return (value) * 1e-15;
            case AmountOfSubstanceUnits.Picomoles: return (value) * 1e-12;
            case AmountOfSubstanceUnits.Nanomoles: return (value) * 1e-9;
            case AmountOfSubstanceUnits.Micromoles: return (value) * 0.000001;
            case AmountOfSubstanceUnits.Millimoles: return (value) * 0.001;
            case AmountOfSubstanceUnits.Centimoles: return (value) * 0.01;
            case AmountOfSubstanceUnits.Decimoles: return (value) * 0.1;
            case AmountOfSubstanceUnits.Kilomoles: return (value) * 1000;
            case AmountOfSubstanceUnits.Megamoles: return (value) * 1000000;
            case AmountOfSubstanceUnits.NanopoundMoles: return (value * 453.59237) * 1e-9;
            case AmountOfSubstanceUnits.MicropoundMoles: return (value * 453.59237) * 0.000001;
            case AmountOfSubstanceUnits.MillipoundMoles: return (value * 453.59237) * 0.001;
            case AmountOfSubstanceUnits.CentipoundMoles: return (value * 453.59237) * 0.01;
            case AmountOfSubstanceUnits.DecipoundMoles: return (value * 453.59237) * 0.1;
            case AmountOfSubstanceUnits.KilopoundMoles: return (value * 453.59237) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the AmountOfSubstance to string.
     * Note! the default format for AmountOfSubstance is Moles.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the AmountOfSubstance.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the AmountOfSubstance.
     */
    public toString(unit: AmountOfSubstanceUnits = AmountOfSubstanceUnits.Moles, fractionalDigits?: number): string {

        switch (unit) {
            
            case AmountOfSubstanceUnits.Moles:
                return super.truncateFractionDigits(this.Moles, fractionalDigits) + ` mol`;
            case AmountOfSubstanceUnits.PoundMoles:
                return super.truncateFractionDigits(this.PoundMoles, fractionalDigits) + ` lbmol`;
            case AmountOfSubstanceUnits.Femtomoles:
                return super.truncateFractionDigits(this.Femtomoles, fractionalDigits) + ` fmol`;
            case AmountOfSubstanceUnits.Picomoles:
                return super.truncateFractionDigits(this.Picomoles, fractionalDigits) + ` pmol`;
            case AmountOfSubstanceUnits.Nanomoles:
                return super.truncateFractionDigits(this.Nanomoles, fractionalDigits) + ` nmol`;
            case AmountOfSubstanceUnits.Micromoles:
                return super.truncateFractionDigits(this.Micromoles, fractionalDigits) + ` μmol`;
            case AmountOfSubstanceUnits.Millimoles:
                return super.truncateFractionDigits(this.Millimoles, fractionalDigits) + ` mmol`;
            case AmountOfSubstanceUnits.Centimoles:
                return super.truncateFractionDigits(this.Centimoles, fractionalDigits) + ` cmol`;
            case AmountOfSubstanceUnits.Decimoles:
                return super.truncateFractionDigits(this.Decimoles, fractionalDigits) + ` dmol`;
            case AmountOfSubstanceUnits.Kilomoles:
                return super.truncateFractionDigits(this.Kilomoles, fractionalDigits) + ` kmol`;
            case AmountOfSubstanceUnits.Megamoles:
                return super.truncateFractionDigits(this.Megamoles, fractionalDigits) + ` Mmol`;
            case AmountOfSubstanceUnits.NanopoundMoles:
                return super.truncateFractionDigits(this.NanopoundMoles, fractionalDigits) + ` nlbmol`;
            case AmountOfSubstanceUnits.MicropoundMoles:
                return super.truncateFractionDigits(this.MicropoundMoles, fractionalDigits) + ` μlbmol`;
            case AmountOfSubstanceUnits.MillipoundMoles:
                return super.truncateFractionDigits(this.MillipoundMoles, fractionalDigits) + ` mlbmol`;
            case AmountOfSubstanceUnits.CentipoundMoles:
                return super.truncateFractionDigits(this.CentipoundMoles, fractionalDigits) + ` clbmol`;
            case AmountOfSubstanceUnits.DecipoundMoles:
                return super.truncateFractionDigits(this.DecipoundMoles, fractionalDigits) + ` dlbmol`;
            case AmountOfSubstanceUnits.KilopoundMoles:
                return super.truncateFractionDigits(this.KilopoundMoles, fractionalDigits) + ` klbmol`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get AmountOfSubstance unit abbreviation.
     * Note! the default abbreviation for AmountOfSubstance is Moles.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the AmountOfSubstance.
     * @returns The abbreviation string of AmountOfSubstance.
     */
    public getUnitAbbreviation(unitAbbreviation: AmountOfSubstanceUnits = AmountOfSubstanceUnits.Moles): string {

        switch (unitAbbreviation) {
            
            case AmountOfSubstanceUnits.Moles:
                return `mol`;
            case AmountOfSubstanceUnits.PoundMoles:
                return `lbmol`;
            case AmountOfSubstanceUnits.Femtomoles:
                return `fmol`;
            case AmountOfSubstanceUnits.Picomoles:
                return `pmol`;
            case AmountOfSubstanceUnits.Nanomoles:
                return `nmol`;
            case AmountOfSubstanceUnits.Micromoles:
                return `μmol`;
            case AmountOfSubstanceUnits.Millimoles:
                return `mmol`;
            case AmountOfSubstanceUnits.Centimoles:
                return `cmol`;
            case AmountOfSubstanceUnits.Decimoles:
                return `dmol`;
            case AmountOfSubstanceUnits.Kilomoles:
                return `kmol`;
            case AmountOfSubstanceUnits.Megamoles:
                return `Mmol`;
            case AmountOfSubstanceUnits.NanopoundMoles:
                return `nlbmol`;
            case AmountOfSubstanceUnits.MicropoundMoles:
                return `μlbmol`;
            case AmountOfSubstanceUnits.MillipoundMoles:
                return `mlbmol`;
            case AmountOfSubstanceUnits.CentipoundMoles:
                return `clbmol`;
            case AmountOfSubstanceUnits.DecipoundMoles:
                return `dlbmol`;
            case AmountOfSubstanceUnits.KilopoundMoles:
                return `klbmol`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given AmountOfSubstance are equals to the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns True if the given AmountOfSubstance are equal to the current AmountOfSubstance.
     */
    public equals(amountOfSubstance: AmountOfSubstance): boolean {
        return super.internalEquals(this.value, amountOfSubstance.BaseValue);
    }

    /**
     * Compare the given AmountOfSubstance against the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns 0 if they are equal, -1 if the current AmountOfSubstance is less then other, 1 if the current AmountOfSubstance is greater then other.
     */
    public compareTo(amountOfSubstance: AmountOfSubstance): number {
        return super.internalCompareTo(this.value, amountOfSubstance.BaseValue);
    }

    /**
     * Add the given AmountOfSubstance with the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns A new AmountOfSubstance instance with the results.
     */
    public add(amountOfSubstance: AmountOfSubstance): AmountOfSubstance {
        return new AmountOfSubstance(super.internalAdd(this.value, amountOfSubstance.BaseValue))
    }

    /**
     * Subtract the given AmountOfSubstance with the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns A new AmountOfSubstance instance with the results.
     */
    public subtract(amountOfSubstance: AmountOfSubstance): AmountOfSubstance {
        return new AmountOfSubstance(super.internalSubtract(this.value, amountOfSubstance.BaseValue))
    }

    /**
     * Multiply the given AmountOfSubstance with the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns A new AmountOfSubstance instance with the results.
     */
    public multiply(amountOfSubstance: AmountOfSubstance): AmountOfSubstance {
        return new AmountOfSubstance(super.internalMultiply(this.value, amountOfSubstance.BaseValue))
    }

    /**
     * Divide the given AmountOfSubstance with the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns A new AmountOfSubstance instance with the results.
     */
    public divide(amountOfSubstance: AmountOfSubstance): AmountOfSubstance {
        return new AmountOfSubstance(super.internalDivide(this.value, amountOfSubstance.BaseValue))
    }

    /**
     * Modulo the given AmountOfSubstance with the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns A new AmountOfSubstance instance with the results.
     */
    public modulo(amountOfSubstance: AmountOfSubstance): AmountOfSubstance {
        return new AmountOfSubstance(super.internalModulo(this.value, amountOfSubstance.BaseValue))
    }

    /**
     * Pow the given AmountOfSubstance with the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns A new AmountOfSubstance instance with the results.
     */
    public pow(amountOfSubstance: AmountOfSubstance): AmountOfSubstance {
        return new AmountOfSubstance(super.internalPow(this.value, amountOfSubstance.BaseValue))
    }
}
