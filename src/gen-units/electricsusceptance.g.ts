import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a ElectricSusceptance */
export interface ElectricSusceptanceDto {
    /** The value of the ElectricSusceptance */
    value: number;
    /**  The specific unit that the ElectricSusceptance value is representing */
    unit: ElectricSusceptanceUnits;
}

/** ElectricSusceptanceUnits enumeration */
export enum ElectricSusceptanceUnits {
    /** */
    Siemens = "Siemens",
    /** */
    Mhos = "Mho",
    /** */
    Nanosiemens = "Nanosiemens",
    /** */
    Microsiemens = "Microsiemens",
    /** */
    Millisiemens = "Millisiemens",
    /** */
    Kilosiemens = "Kilosiemens",
    /** */
    Megasiemens = "Megasiemens",
    /** */
    Gigasiemens = "Gigasiemens",
    /** */
    Terasiemens = "Terasiemens",
    /** */
    Nanomhos = "Nanomho",
    /** */
    Micromhos = "Micromho",
    /** */
    Millimhos = "Millimho",
    /** */
    Kilomhos = "Kilomho",
    /** */
    Megamhos = "Megamho",
    /** */
    Gigamhos = "Gigamho",
    /** */
    Teramhos = "Teramho"
}

/** Electrical susceptance is the imaginary part of admittance, where the real part is conductance. */
export class ElectricSusceptance extends BaseUnit {
    protected value: number;
    private siemensLazy: number | null = null;
    private mhosLazy: number | null = null;
    private nanosiemensLazy: number | null = null;
    private microsiemensLazy: number | null = null;
    private millisiemensLazy: number | null = null;
    private kilosiemensLazy: number | null = null;
    private megasiemensLazy: number | null = null;
    private gigasiemensLazy: number | null = null;
    private terasiemensLazy: number | null = null;
    private nanomhosLazy: number | null = null;
    private micromhosLazy: number | null = null;
    private millimhosLazy: number | null = null;
    private kilomhosLazy: number | null = null;
    private megamhosLazy: number | null = null;
    private gigamhosLazy: number | null = null;
    private teramhosLazy: number | null = null;

    /**
     * Create a new ElectricSusceptance.
     * @param value The value.
     * @param fromUnit The ‘ElectricSusceptance’ unit to create from.
     * The default unit is Siemens
     */
    public constructor(value: number, fromUnit: ElectricSusceptanceUnits = ElectricSusceptanceUnits.Siemens) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricSusceptance is Siemens.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricSusceptanceUnits.Siemens {
        return ElectricSusceptanceUnits.Siemens
    }

    /** */
    public get Siemens(): number {
        if(this.siemensLazy !== null){
            return this.siemensLazy;
        }
        return this.siemensLazy = this.convertFromBase(ElectricSusceptanceUnits.Siemens);
    }

    /** */
    public get Mhos(): number {
        if(this.mhosLazy !== null){
            return this.mhosLazy;
        }
        return this.mhosLazy = this.convertFromBase(ElectricSusceptanceUnits.Mhos);
    }

    /** */
    public get Nanosiemens(): number {
        if(this.nanosiemensLazy !== null){
            return this.nanosiemensLazy;
        }
        return this.nanosiemensLazy = this.convertFromBase(ElectricSusceptanceUnits.Nanosiemens);
    }

    /** */
    public get Microsiemens(): number {
        if(this.microsiemensLazy !== null){
            return this.microsiemensLazy;
        }
        return this.microsiemensLazy = this.convertFromBase(ElectricSusceptanceUnits.Microsiemens);
    }

    /** */
    public get Millisiemens(): number {
        if(this.millisiemensLazy !== null){
            return this.millisiemensLazy;
        }
        return this.millisiemensLazy = this.convertFromBase(ElectricSusceptanceUnits.Millisiemens);
    }

    /** */
    public get Kilosiemens(): number {
        if(this.kilosiemensLazy !== null){
            return this.kilosiemensLazy;
        }
        return this.kilosiemensLazy = this.convertFromBase(ElectricSusceptanceUnits.Kilosiemens);
    }

    /** */
    public get Megasiemens(): number {
        if(this.megasiemensLazy !== null){
            return this.megasiemensLazy;
        }
        return this.megasiemensLazy = this.convertFromBase(ElectricSusceptanceUnits.Megasiemens);
    }

    /** */
    public get Gigasiemens(): number {
        if(this.gigasiemensLazy !== null){
            return this.gigasiemensLazy;
        }
        return this.gigasiemensLazy = this.convertFromBase(ElectricSusceptanceUnits.Gigasiemens);
    }

    /** */
    public get Terasiemens(): number {
        if(this.terasiemensLazy !== null){
            return this.terasiemensLazy;
        }
        return this.terasiemensLazy = this.convertFromBase(ElectricSusceptanceUnits.Terasiemens);
    }

    /** */
    public get Nanomhos(): number {
        if(this.nanomhosLazy !== null){
            return this.nanomhosLazy;
        }
        return this.nanomhosLazy = this.convertFromBase(ElectricSusceptanceUnits.Nanomhos);
    }

    /** */
    public get Micromhos(): number {
        if(this.micromhosLazy !== null){
            return this.micromhosLazy;
        }
        return this.micromhosLazy = this.convertFromBase(ElectricSusceptanceUnits.Micromhos);
    }

    /** */
    public get Millimhos(): number {
        if(this.millimhosLazy !== null){
            return this.millimhosLazy;
        }
        return this.millimhosLazy = this.convertFromBase(ElectricSusceptanceUnits.Millimhos);
    }

    /** */
    public get Kilomhos(): number {
        if(this.kilomhosLazy !== null){
            return this.kilomhosLazy;
        }
        return this.kilomhosLazy = this.convertFromBase(ElectricSusceptanceUnits.Kilomhos);
    }

    /** */
    public get Megamhos(): number {
        if(this.megamhosLazy !== null){
            return this.megamhosLazy;
        }
        return this.megamhosLazy = this.convertFromBase(ElectricSusceptanceUnits.Megamhos);
    }

    /** */
    public get Gigamhos(): number {
        if(this.gigamhosLazy !== null){
            return this.gigamhosLazy;
        }
        return this.gigamhosLazy = this.convertFromBase(ElectricSusceptanceUnits.Gigamhos);
    }

    /** */
    public get Teramhos(): number {
        if(this.teramhosLazy !== null){
            return this.teramhosLazy;
        }
        return this.teramhosLazy = this.convertFromBase(ElectricSusceptanceUnits.Teramhos);
    }

    /**
     * Create a new ElectricSusceptance instance from a Siemens
     *
     * @param value The unit as Siemens to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromSiemens(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Siemens);
    }

    /**
     * Create a new ElectricSusceptance instance from a Mhos
     *
     * @param value The unit as Mhos to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromMhos(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Mhos);
    }

    /**
     * Create a new ElectricSusceptance instance from a Nanosiemens
     *
     * @param value The unit as Nanosiemens to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromNanosiemens(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Nanosiemens);
    }

    /**
     * Create a new ElectricSusceptance instance from a Microsiemens
     *
     * @param value The unit as Microsiemens to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromMicrosiemens(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Microsiemens);
    }

    /**
     * Create a new ElectricSusceptance instance from a Millisiemens
     *
     * @param value The unit as Millisiemens to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromMillisiemens(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Millisiemens);
    }

    /**
     * Create a new ElectricSusceptance instance from a Kilosiemens
     *
     * @param value The unit as Kilosiemens to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromKilosiemens(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Kilosiemens);
    }

    /**
     * Create a new ElectricSusceptance instance from a Megasiemens
     *
     * @param value The unit as Megasiemens to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromMegasiemens(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Megasiemens);
    }

    /**
     * Create a new ElectricSusceptance instance from a Gigasiemens
     *
     * @param value The unit as Gigasiemens to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromGigasiemens(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Gigasiemens);
    }

    /**
     * Create a new ElectricSusceptance instance from a Terasiemens
     *
     * @param value The unit as Terasiemens to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromTerasiemens(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Terasiemens);
    }

    /**
     * Create a new ElectricSusceptance instance from a Nanomhos
     *
     * @param value The unit as Nanomhos to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromNanomhos(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Nanomhos);
    }

    /**
     * Create a new ElectricSusceptance instance from a Micromhos
     *
     * @param value The unit as Micromhos to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromMicromhos(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Micromhos);
    }

    /**
     * Create a new ElectricSusceptance instance from a Millimhos
     *
     * @param value The unit as Millimhos to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromMillimhos(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Millimhos);
    }

    /**
     * Create a new ElectricSusceptance instance from a Kilomhos
     *
     * @param value The unit as Kilomhos to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromKilomhos(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Kilomhos);
    }

    /**
     * Create a new ElectricSusceptance instance from a Megamhos
     *
     * @param value The unit as Megamhos to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromMegamhos(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Megamhos);
    }

    /**
     * Create a new ElectricSusceptance instance from a Gigamhos
     *
     * @param value The unit as Gigamhos to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromGigamhos(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Gigamhos);
    }

    /**
     * Create a new ElectricSusceptance instance from a Teramhos
     *
     * @param value The unit as Teramhos to create a new ElectricSusceptance from.
     * @returns The new ElectricSusceptance instance.
     */
    public static FromTeramhos(value: number): ElectricSusceptance {
        return new ElectricSusceptance(value, ElectricSusceptanceUnits.Teramhos);
    }

    /**
     * Gets the base unit enumeration associated with ElectricSusceptance
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricSusceptanceUnits {
        return ElectricSusceptanceUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricSusceptanceUnits.Siemens {
        return ElectricSusceptanceUnits.Siemens;
    }

    /**
     * Create API DTO represent a ElectricSusceptance unit.
     * @param holdInUnit The specific ElectricSusceptance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricSusceptanceUnits = ElectricSusceptanceUnits.Siemens): ElectricSusceptanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricSusceptance unit from an API DTO representation.
     * @param dtoElectricSusceptance The ElectricSusceptance API DTO representation
     */
    public static FromDto(dtoElectricSusceptance: ElectricSusceptanceDto): ElectricSusceptance {
        return new ElectricSusceptance(dtoElectricSusceptance.value, dtoElectricSusceptance.unit);
    }

    /**
     * Convert ElectricSusceptance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricSusceptanceUnits): number {
        switch (toUnit) {
            case ElectricSusceptanceUnits.Siemens: return this.Siemens;
            case ElectricSusceptanceUnits.Mhos: return this.Mhos;
            case ElectricSusceptanceUnits.Nanosiemens: return this.Nanosiemens;
            case ElectricSusceptanceUnits.Microsiemens: return this.Microsiemens;
            case ElectricSusceptanceUnits.Millisiemens: return this.Millisiemens;
            case ElectricSusceptanceUnits.Kilosiemens: return this.Kilosiemens;
            case ElectricSusceptanceUnits.Megasiemens: return this.Megasiemens;
            case ElectricSusceptanceUnits.Gigasiemens: return this.Gigasiemens;
            case ElectricSusceptanceUnits.Terasiemens: return this.Terasiemens;
            case ElectricSusceptanceUnits.Nanomhos: return this.Nanomhos;
            case ElectricSusceptanceUnits.Micromhos: return this.Micromhos;
            case ElectricSusceptanceUnits.Millimhos: return this.Millimhos;
            case ElectricSusceptanceUnits.Kilomhos: return this.Kilomhos;
            case ElectricSusceptanceUnits.Megamhos: return this.Megamhos;
            case ElectricSusceptanceUnits.Gigamhos: return this.Gigamhos;
            case ElectricSusceptanceUnits.Teramhos: return this.Teramhos;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricSusceptanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricSusceptanceUnits.Siemens: return this.value;
                case ElectricSusceptanceUnits.Mhos: return this.value;
                case ElectricSusceptanceUnits.Nanosiemens: return super.internalDivide(this.value, 1e-9);
                case ElectricSusceptanceUnits.Microsiemens: return super.internalDivide(this.value, 0.000001);
                case ElectricSusceptanceUnits.Millisiemens: return super.internalDivide(this.value, 0.001);
                case ElectricSusceptanceUnits.Kilosiemens: return super.internalDivide(this.value, 1000);
                case ElectricSusceptanceUnits.Megasiemens: return super.internalDivide(this.value, 1000000);
                case ElectricSusceptanceUnits.Gigasiemens: return super.internalDivide(this.value, 1000000000);
                case ElectricSusceptanceUnits.Terasiemens: return super.internalDivide(this.value, 1000000000000);
                case ElectricSusceptanceUnits.Nanomhos: return super.internalDivide(this.value, 1e-9);
                case ElectricSusceptanceUnits.Micromhos: return super.internalDivide(this.value, 0.000001);
                case ElectricSusceptanceUnits.Millimhos: return super.internalDivide(this.value, 0.001);
                case ElectricSusceptanceUnits.Kilomhos: return super.internalDivide(this.value, 1000);
                case ElectricSusceptanceUnits.Megamhos: return super.internalDivide(this.value, 1000000);
                case ElectricSusceptanceUnits.Gigamhos: return super.internalDivide(this.value, 1000000000);
                case ElectricSusceptanceUnits.Teramhos: return super.internalDivide(this.value, 1000000000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricSusceptanceUnits.Siemens: return this.value;
            case ElectricSusceptanceUnits.Mhos: return this.value;
            case ElectricSusceptanceUnits.Nanosiemens: return (this.value) / 1e-9;
            case ElectricSusceptanceUnits.Microsiemens: return (this.value) / 0.000001;
            case ElectricSusceptanceUnits.Millisiemens: return (this.value) / 0.001;
            case ElectricSusceptanceUnits.Kilosiemens: return (this.value) / 1000;
            case ElectricSusceptanceUnits.Megasiemens: return (this.value) / 1000000;
            case ElectricSusceptanceUnits.Gigasiemens: return (this.value) / 1000000000;
            case ElectricSusceptanceUnits.Terasiemens: return (this.value) / 1000000000000;
            case ElectricSusceptanceUnits.Nanomhos: return (this.value) / 1e-9;
            case ElectricSusceptanceUnits.Micromhos: return (this.value) / 0.000001;
            case ElectricSusceptanceUnits.Millimhos: return (this.value) / 0.001;
            case ElectricSusceptanceUnits.Kilomhos: return (this.value) / 1000;
            case ElectricSusceptanceUnits.Megamhos: return (this.value) / 1000000;
            case ElectricSusceptanceUnits.Gigamhos: return (this.value) / 1000000000;
            case ElectricSusceptanceUnits.Teramhos: return (this.value) / 1000000000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricSusceptanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricSusceptanceUnits.Siemens: return value;
                case ElectricSusceptanceUnits.Mhos: return value;
                case ElectricSusceptanceUnits.Nanosiemens: return super.internalMultiply(value, 1e-9);
                case ElectricSusceptanceUnits.Microsiemens: return super.internalMultiply(value, 0.000001);
                case ElectricSusceptanceUnits.Millisiemens: return super.internalMultiply(value, 0.001);
                case ElectricSusceptanceUnits.Kilosiemens: return super.internalMultiply(value, 1000);
                case ElectricSusceptanceUnits.Megasiemens: return super.internalMultiply(value, 1000000);
                case ElectricSusceptanceUnits.Gigasiemens: return super.internalMultiply(value, 1000000000);
                case ElectricSusceptanceUnits.Terasiemens: return super.internalMultiply(value, 1000000000000);
                case ElectricSusceptanceUnits.Nanomhos: return super.internalMultiply(value, 1e-9);
                case ElectricSusceptanceUnits.Micromhos: return super.internalMultiply(value, 0.000001);
                case ElectricSusceptanceUnits.Millimhos: return super.internalMultiply(value, 0.001);
                case ElectricSusceptanceUnits.Kilomhos: return super.internalMultiply(value, 1000);
                case ElectricSusceptanceUnits.Megamhos: return super.internalMultiply(value, 1000000);
                case ElectricSusceptanceUnits.Gigamhos: return super.internalMultiply(value, 1000000000);
                case ElectricSusceptanceUnits.Teramhos: return super.internalMultiply(value, 1000000000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricSusceptanceUnits.Siemens: return value;
            case ElectricSusceptanceUnits.Mhos: return value;
            case ElectricSusceptanceUnits.Nanosiemens: return (value) * 1e-9;
            case ElectricSusceptanceUnits.Microsiemens: return (value) * 0.000001;
            case ElectricSusceptanceUnits.Millisiemens: return (value) * 0.001;
            case ElectricSusceptanceUnits.Kilosiemens: return (value) * 1000;
            case ElectricSusceptanceUnits.Megasiemens: return (value) * 1000000;
            case ElectricSusceptanceUnits.Gigasiemens: return (value) * 1000000000;
            case ElectricSusceptanceUnits.Terasiemens: return (value) * 1000000000000;
            case ElectricSusceptanceUnits.Nanomhos: return (value) * 1e-9;
            case ElectricSusceptanceUnits.Micromhos: return (value) * 0.000001;
            case ElectricSusceptanceUnits.Millimhos: return (value) * 0.001;
            case ElectricSusceptanceUnits.Kilomhos: return (value) * 1000;
            case ElectricSusceptanceUnits.Megamhos: return (value) * 1000000;
            case ElectricSusceptanceUnits.Gigamhos: return (value) * 1000000000;
            case ElectricSusceptanceUnits.Teramhos: return (value) * 1000000000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricSusceptance to string.
     * Note! the default format for ElectricSusceptance is Siemens.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricSusceptance.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the ElectricSusceptance.
     */
    public toString(unit: ElectricSusceptanceUnits = ElectricSusceptanceUnits.Siemens, fractionalDigits?: number): string {

        switch (unit) {
            
            case ElectricSusceptanceUnits.Siemens:
                return super.truncateFractionDigits(this.Siemens, fractionalDigits) + ` S`;
            case ElectricSusceptanceUnits.Mhos:
                return super.truncateFractionDigits(this.Mhos, fractionalDigits) + ` ℧`;
            case ElectricSusceptanceUnits.Nanosiemens:
                return super.truncateFractionDigits(this.Nanosiemens, fractionalDigits) + ` nS`;
            case ElectricSusceptanceUnits.Microsiemens:
                return super.truncateFractionDigits(this.Microsiemens, fractionalDigits) + ` μS`;
            case ElectricSusceptanceUnits.Millisiemens:
                return super.truncateFractionDigits(this.Millisiemens, fractionalDigits) + ` mS`;
            case ElectricSusceptanceUnits.Kilosiemens:
                return super.truncateFractionDigits(this.Kilosiemens, fractionalDigits) + ` kS`;
            case ElectricSusceptanceUnits.Megasiemens:
                return super.truncateFractionDigits(this.Megasiemens, fractionalDigits) + ` MS`;
            case ElectricSusceptanceUnits.Gigasiemens:
                return super.truncateFractionDigits(this.Gigasiemens, fractionalDigits) + ` GS`;
            case ElectricSusceptanceUnits.Terasiemens:
                return super.truncateFractionDigits(this.Terasiemens, fractionalDigits) + ` TS`;
            case ElectricSusceptanceUnits.Nanomhos:
                return super.truncateFractionDigits(this.Nanomhos, fractionalDigits) + ` n℧`;
            case ElectricSusceptanceUnits.Micromhos:
                return super.truncateFractionDigits(this.Micromhos, fractionalDigits) + ` μ℧`;
            case ElectricSusceptanceUnits.Millimhos:
                return super.truncateFractionDigits(this.Millimhos, fractionalDigits) + ` m℧`;
            case ElectricSusceptanceUnits.Kilomhos:
                return super.truncateFractionDigits(this.Kilomhos, fractionalDigits) + ` k℧`;
            case ElectricSusceptanceUnits.Megamhos:
                return super.truncateFractionDigits(this.Megamhos, fractionalDigits) + ` M℧`;
            case ElectricSusceptanceUnits.Gigamhos:
                return super.truncateFractionDigits(this.Gigamhos, fractionalDigits) + ` G℧`;
            case ElectricSusceptanceUnits.Teramhos:
                return super.truncateFractionDigits(this.Teramhos, fractionalDigits) + ` T℧`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricSusceptance unit abbreviation.
     * Note! the default abbreviation for ElectricSusceptance is Siemens.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricSusceptance.
     * @returns The abbreviation string of ElectricSusceptance.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricSusceptanceUnits = ElectricSusceptanceUnits.Siemens): string {

        switch (unitAbbreviation) {
            
            case ElectricSusceptanceUnits.Siemens:
                return `S`;
            case ElectricSusceptanceUnits.Mhos:
                return `℧`;
            case ElectricSusceptanceUnits.Nanosiemens:
                return `nS`;
            case ElectricSusceptanceUnits.Microsiemens:
                return `μS`;
            case ElectricSusceptanceUnits.Millisiemens:
                return `mS`;
            case ElectricSusceptanceUnits.Kilosiemens:
                return `kS`;
            case ElectricSusceptanceUnits.Megasiemens:
                return `MS`;
            case ElectricSusceptanceUnits.Gigasiemens:
                return `GS`;
            case ElectricSusceptanceUnits.Terasiemens:
                return `TS`;
            case ElectricSusceptanceUnits.Nanomhos:
                return `n℧`;
            case ElectricSusceptanceUnits.Micromhos:
                return `μ℧`;
            case ElectricSusceptanceUnits.Millimhos:
                return `m℧`;
            case ElectricSusceptanceUnits.Kilomhos:
                return `k℧`;
            case ElectricSusceptanceUnits.Megamhos:
                return `M℧`;
            case ElectricSusceptanceUnits.Gigamhos:
                return `G℧`;
            case ElectricSusceptanceUnits.Teramhos:
                return `T℧`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricSusceptance are equals to the current ElectricSusceptance.
     * @param electricSusceptance The other ElectricSusceptance.
     * @returns True if the given ElectricSusceptance are equal to the current ElectricSusceptance.
     */
    public equals(electricSusceptance: ElectricSusceptance): boolean {
        return super.internalEquals(this.value, electricSusceptance.BaseValue);
    }

    /**
     * Compare the given ElectricSusceptance against the current ElectricSusceptance.
     * @param electricSusceptance The other ElectricSusceptance.
     * @returns 0 if they are equal, -1 if the current ElectricSusceptance is less then other, 1 if the current ElectricSusceptance is greater then other.
     */
    public compareTo(electricSusceptance: ElectricSusceptance): number {
        return super.internalCompareTo(this.value, electricSusceptance.BaseValue);
    }

    /**
     * Add the given ElectricSusceptance with the current ElectricSusceptance.
     * @param electricSusceptance The other ElectricSusceptance.
     * @returns A new ElectricSusceptance instance with the results.
     */
    public add(electricSusceptance: ElectricSusceptance): ElectricSusceptance {
        return new ElectricSusceptance(super.internalAdd(this.value, electricSusceptance.BaseValue))
    }

    /**
     * Subtract the given ElectricSusceptance with the current ElectricSusceptance.
     * @param electricSusceptance The other ElectricSusceptance.
     * @returns A new ElectricSusceptance instance with the results.
     */
    public subtract(electricSusceptance: ElectricSusceptance): ElectricSusceptance {
        return new ElectricSusceptance(super.internalSubtract(this.value, electricSusceptance.BaseValue))
    }

    /**
     * Multiply the given ElectricSusceptance with the current ElectricSusceptance.
     * @param electricSusceptance The other ElectricSusceptance.
     * @returns A new ElectricSusceptance instance with the results.
     */
    public multiply(electricSusceptance: ElectricSusceptance): ElectricSusceptance {
        return new ElectricSusceptance(super.internalMultiply(this.value, electricSusceptance.BaseValue))
    }

    /**
     * Divide the given ElectricSusceptance with the current ElectricSusceptance.
     * @param electricSusceptance The other ElectricSusceptance.
     * @returns A new ElectricSusceptance instance with the results.
     */
    public divide(electricSusceptance: ElectricSusceptance): ElectricSusceptance {
        return new ElectricSusceptance(super.internalDivide(this.value, electricSusceptance.BaseValue))
    }

    /**
     * Modulo the given ElectricSusceptance with the current ElectricSusceptance.
     * @param electricSusceptance The other ElectricSusceptance.
     * @returns A new ElectricSusceptance instance with the results.
     */
    public modulo(electricSusceptance: ElectricSusceptance): ElectricSusceptance {
        return new ElectricSusceptance(super.internalModulo(this.value, electricSusceptance.BaseValue))
    }

    /**
     * Pow the given ElectricSusceptance with the current ElectricSusceptance.
     * @param electricSusceptance The other ElectricSusceptance.
     * @returns A new ElectricSusceptance instance with the results.
     */
    public pow(electricSusceptance: ElectricSusceptance): ElectricSusceptance {
        return new ElectricSusceptance(super.internalPow(this.value, electricSusceptance.BaseValue))
    }
}
