import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricConductance */
export interface ElectricConductanceDto {
    /** The value of the ElectricConductance */
    value: number;
    /**  The specific unit that the ElectricConductance value is representing */
    unit: ElectricConductanceUnits;
}

/** ElectricConductanceUnits enumeration */
export enum ElectricConductanceUnits {
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

/** The electrical conductance of an object is a measure of the ease with which an electric current passes. Along with susceptance, it is one of two elements of admittance. Its reciprocal quantity is electrical resistance. */
export class ElectricConductance extends BaseUnit {
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
     * Create a new ElectricConductance.
     * @param value The value.
     * @param fromUnit The ‘ElectricConductance’ unit to create from.
     * The default unit is Siemens
     */
    public constructor(value: number, fromUnit: ElectricConductanceUnits = ElectricConductanceUnits.Siemens) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricConductance is Siemens.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricConductanceUnits.Siemens {
        return ElectricConductanceUnits.Siemens
    }

    /** */
    public get Siemens(): number {
        if(this.siemensLazy !== null){
            return this.siemensLazy;
        }
        return this.siemensLazy = this.convertFromBase(ElectricConductanceUnits.Siemens);
    }

    /** */
    public get Mhos(): number {
        if(this.mhosLazy !== null){
            return this.mhosLazy;
        }
        return this.mhosLazy = this.convertFromBase(ElectricConductanceUnits.Mhos);
    }

    /** */
    public get Nanosiemens(): number {
        if(this.nanosiemensLazy !== null){
            return this.nanosiemensLazy;
        }
        return this.nanosiemensLazy = this.convertFromBase(ElectricConductanceUnits.Nanosiemens);
    }

    /** */
    public get Microsiemens(): number {
        if(this.microsiemensLazy !== null){
            return this.microsiemensLazy;
        }
        return this.microsiemensLazy = this.convertFromBase(ElectricConductanceUnits.Microsiemens);
    }

    /** */
    public get Millisiemens(): number {
        if(this.millisiemensLazy !== null){
            return this.millisiemensLazy;
        }
        return this.millisiemensLazy = this.convertFromBase(ElectricConductanceUnits.Millisiemens);
    }

    /** */
    public get Kilosiemens(): number {
        if(this.kilosiemensLazy !== null){
            return this.kilosiemensLazy;
        }
        return this.kilosiemensLazy = this.convertFromBase(ElectricConductanceUnits.Kilosiemens);
    }

    /** */
    public get Megasiemens(): number {
        if(this.megasiemensLazy !== null){
            return this.megasiemensLazy;
        }
        return this.megasiemensLazy = this.convertFromBase(ElectricConductanceUnits.Megasiemens);
    }

    /** */
    public get Gigasiemens(): number {
        if(this.gigasiemensLazy !== null){
            return this.gigasiemensLazy;
        }
        return this.gigasiemensLazy = this.convertFromBase(ElectricConductanceUnits.Gigasiemens);
    }

    /** */
    public get Terasiemens(): number {
        if(this.terasiemensLazy !== null){
            return this.terasiemensLazy;
        }
        return this.terasiemensLazy = this.convertFromBase(ElectricConductanceUnits.Terasiemens);
    }

    /** */
    public get Nanomhos(): number {
        if(this.nanomhosLazy !== null){
            return this.nanomhosLazy;
        }
        return this.nanomhosLazy = this.convertFromBase(ElectricConductanceUnits.Nanomhos);
    }

    /** */
    public get Micromhos(): number {
        if(this.micromhosLazy !== null){
            return this.micromhosLazy;
        }
        return this.micromhosLazy = this.convertFromBase(ElectricConductanceUnits.Micromhos);
    }

    /** */
    public get Millimhos(): number {
        if(this.millimhosLazy !== null){
            return this.millimhosLazy;
        }
        return this.millimhosLazy = this.convertFromBase(ElectricConductanceUnits.Millimhos);
    }

    /** */
    public get Kilomhos(): number {
        if(this.kilomhosLazy !== null){
            return this.kilomhosLazy;
        }
        return this.kilomhosLazy = this.convertFromBase(ElectricConductanceUnits.Kilomhos);
    }

    /** */
    public get Megamhos(): number {
        if(this.megamhosLazy !== null){
            return this.megamhosLazy;
        }
        return this.megamhosLazy = this.convertFromBase(ElectricConductanceUnits.Megamhos);
    }

    /** */
    public get Gigamhos(): number {
        if(this.gigamhosLazy !== null){
            return this.gigamhosLazy;
        }
        return this.gigamhosLazy = this.convertFromBase(ElectricConductanceUnits.Gigamhos);
    }

    /** */
    public get Teramhos(): number {
        if(this.teramhosLazy !== null){
            return this.teramhosLazy;
        }
        return this.teramhosLazy = this.convertFromBase(ElectricConductanceUnits.Teramhos);
    }

    /**
     * Create a new ElectricConductance instance from a Siemens
     *
     * @param value The unit as Siemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromSiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Siemens);
    }

    /**
     * Create a new ElectricConductance instance from a Mhos
     *
     * @param value The unit as Mhos to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromMhos(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Mhos);
    }

    /**
     * Create a new ElectricConductance instance from a Nanosiemens
     *
     * @param value The unit as Nanosiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromNanosiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Nanosiemens);
    }

    /**
     * Create a new ElectricConductance instance from a Microsiemens
     *
     * @param value The unit as Microsiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromMicrosiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Microsiemens);
    }

    /**
     * Create a new ElectricConductance instance from a Millisiemens
     *
     * @param value The unit as Millisiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromMillisiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Millisiemens);
    }

    /**
     * Create a new ElectricConductance instance from a Kilosiemens
     *
     * @param value The unit as Kilosiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromKilosiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Kilosiemens);
    }

    /**
     * Create a new ElectricConductance instance from a Megasiemens
     *
     * @param value The unit as Megasiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromMegasiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Megasiemens);
    }

    /**
     * Create a new ElectricConductance instance from a Gigasiemens
     *
     * @param value The unit as Gigasiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromGigasiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Gigasiemens);
    }

    /**
     * Create a new ElectricConductance instance from a Terasiemens
     *
     * @param value The unit as Terasiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromTerasiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Terasiemens);
    }

    /**
     * Create a new ElectricConductance instance from a Nanomhos
     *
     * @param value The unit as Nanomhos to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromNanomhos(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Nanomhos);
    }

    /**
     * Create a new ElectricConductance instance from a Micromhos
     *
     * @param value The unit as Micromhos to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromMicromhos(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Micromhos);
    }

    /**
     * Create a new ElectricConductance instance from a Millimhos
     *
     * @param value The unit as Millimhos to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromMillimhos(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Millimhos);
    }

    /**
     * Create a new ElectricConductance instance from a Kilomhos
     *
     * @param value The unit as Kilomhos to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromKilomhos(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Kilomhos);
    }

    /**
     * Create a new ElectricConductance instance from a Megamhos
     *
     * @param value The unit as Megamhos to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromMegamhos(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Megamhos);
    }

    /**
     * Create a new ElectricConductance instance from a Gigamhos
     *
     * @param value The unit as Gigamhos to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromGigamhos(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Gigamhos);
    }

    /**
     * Create a new ElectricConductance instance from a Teramhos
     *
     * @param value The unit as Teramhos to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromTeramhos(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Teramhos);
    }

    /**
     * Gets the base unit enumeration associated with ElectricConductance
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricConductanceUnits {
        return ElectricConductanceUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricConductanceUnits.Siemens {
        return ElectricConductanceUnits.Siemens;
    }

    /**
     * Create API DTO represent a ElectricConductance unit.
     * @param holdInUnit The specific ElectricConductance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricConductanceUnits = ElectricConductanceUnits.Siemens): ElectricConductanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricConductance unit from an API DTO representation.
     * @param dtoElectricConductance The ElectricConductance API DTO representation
     */
    public static FromDto(dtoElectricConductance: ElectricConductanceDto): ElectricConductance {
        return new ElectricConductance(dtoElectricConductance.value, dtoElectricConductance.unit);
    }

    /**
     * Convert ElectricConductance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricConductanceUnits): number {
        switch (toUnit) {
            case ElectricConductanceUnits.Siemens: return this.Siemens;
            case ElectricConductanceUnits.Mhos: return this.Mhos;
            case ElectricConductanceUnits.Nanosiemens: return this.Nanosiemens;
            case ElectricConductanceUnits.Microsiemens: return this.Microsiemens;
            case ElectricConductanceUnits.Millisiemens: return this.Millisiemens;
            case ElectricConductanceUnits.Kilosiemens: return this.Kilosiemens;
            case ElectricConductanceUnits.Megasiemens: return this.Megasiemens;
            case ElectricConductanceUnits.Gigasiemens: return this.Gigasiemens;
            case ElectricConductanceUnits.Terasiemens: return this.Terasiemens;
            case ElectricConductanceUnits.Nanomhos: return this.Nanomhos;
            case ElectricConductanceUnits.Micromhos: return this.Micromhos;
            case ElectricConductanceUnits.Millimhos: return this.Millimhos;
            case ElectricConductanceUnits.Kilomhos: return this.Kilomhos;
            case ElectricConductanceUnits.Megamhos: return this.Megamhos;
            case ElectricConductanceUnits.Gigamhos: return this.Gigamhos;
            case ElectricConductanceUnits.Teramhos: return this.Teramhos;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricConductanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricConductanceUnits.Siemens: return this.value;
                case ElectricConductanceUnits.Mhos: return this.value;
                case ElectricConductanceUnits.Nanosiemens: return super.internalDivide(this.value, 1e-9);
                case ElectricConductanceUnits.Microsiemens: return super.internalDivide(this.value, 0.000001);
                case ElectricConductanceUnits.Millisiemens: return super.internalDivide(this.value, 0.001);
                case ElectricConductanceUnits.Kilosiemens: return super.internalDivide(this.value, 1000);
                case ElectricConductanceUnits.Megasiemens: return super.internalDivide(this.value, 1000000);
                case ElectricConductanceUnits.Gigasiemens: return super.internalDivide(this.value, 1000000000);
                case ElectricConductanceUnits.Terasiemens: return super.internalDivide(this.value, 1000000000000);
                case ElectricConductanceUnits.Nanomhos: return super.internalDivide(this.value, 1e-9);
                case ElectricConductanceUnits.Micromhos: return super.internalDivide(this.value, 0.000001);
                case ElectricConductanceUnits.Millimhos: return super.internalDivide(this.value, 0.001);
                case ElectricConductanceUnits.Kilomhos: return super.internalDivide(this.value, 1000);
                case ElectricConductanceUnits.Megamhos: return super.internalDivide(this.value, 1000000);
                case ElectricConductanceUnits.Gigamhos: return super.internalDivide(this.value, 1000000000);
                case ElectricConductanceUnits.Teramhos: return super.internalDivide(this.value, 1000000000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricConductanceUnits.Siemens: return this.value;
            case ElectricConductanceUnits.Mhos: return this.value;
            case ElectricConductanceUnits.Nanosiemens: return (this.value) / 1e-9;
            case ElectricConductanceUnits.Microsiemens: return (this.value) / 0.000001;
            case ElectricConductanceUnits.Millisiemens: return (this.value) / 0.001;
            case ElectricConductanceUnits.Kilosiemens: return (this.value) / 1000;
            case ElectricConductanceUnits.Megasiemens: return (this.value) / 1000000;
            case ElectricConductanceUnits.Gigasiemens: return (this.value) / 1000000000;
            case ElectricConductanceUnits.Terasiemens: return (this.value) / 1000000000000;
            case ElectricConductanceUnits.Nanomhos: return (this.value) / 1e-9;
            case ElectricConductanceUnits.Micromhos: return (this.value) / 0.000001;
            case ElectricConductanceUnits.Millimhos: return (this.value) / 0.001;
            case ElectricConductanceUnits.Kilomhos: return (this.value) / 1000;
            case ElectricConductanceUnits.Megamhos: return (this.value) / 1000000;
            case ElectricConductanceUnits.Gigamhos: return (this.value) / 1000000000;
            case ElectricConductanceUnits.Teramhos: return (this.value) / 1000000000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricConductanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricConductanceUnits.Siemens: return value;
                case ElectricConductanceUnits.Mhos: return value;
                case ElectricConductanceUnits.Nanosiemens: return super.internalMultiply(value, 1e-9);
                case ElectricConductanceUnits.Microsiemens: return super.internalMultiply(value, 0.000001);
                case ElectricConductanceUnits.Millisiemens: return super.internalMultiply(value, 0.001);
                case ElectricConductanceUnits.Kilosiemens: return super.internalMultiply(value, 1000);
                case ElectricConductanceUnits.Megasiemens: return super.internalMultiply(value, 1000000);
                case ElectricConductanceUnits.Gigasiemens: return super.internalMultiply(value, 1000000000);
                case ElectricConductanceUnits.Terasiemens: return super.internalMultiply(value, 1000000000000);
                case ElectricConductanceUnits.Nanomhos: return super.internalMultiply(value, 1e-9);
                case ElectricConductanceUnits.Micromhos: return super.internalMultiply(value, 0.000001);
                case ElectricConductanceUnits.Millimhos: return super.internalMultiply(value, 0.001);
                case ElectricConductanceUnits.Kilomhos: return super.internalMultiply(value, 1000);
                case ElectricConductanceUnits.Megamhos: return super.internalMultiply(value, 1000000);
                case ElectricConductanceUnits.Gigamhos: return super.internalMultiply(value, 1000000000);
                case ElectricConductanceUnits.Teramhos: return super.internalMultiply(value, 1000000000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricConductanceUnits.Siemens: return value;
            case ElectricConductanceUnits.Mhos: return value;
            case ElectricConductanceUnits.Nanosiemens: return (value) * 1e-9;
            case ElectricConductanceUnits.Microsiemens: return (value) * 0.000001;
            case ElectricConductanceUnits.Millisiemens: return (value) * 0.001;
            case ElectricConductanceUnits.Kilosiemens: return (value) * 1000;
            case ElectricConductanceUnits.Megasiemens: return (value) * 1000000;
            case ElectricConductanceUnits.Gigasiemens: return (value) * 1000000000;
            case ElectricConductanceUnits.Terasiemens: return (value) * 1000000000000;
            case ElectricConductanceUnits.Nanomhos: return (value) * 1e-9;
            case ElectricConductanceUnits.Micromhos: return (value) * 0.000001;
            case ElectricConductanceUnits.Millimhos: return (value) * 0.001;
            case ElectricConductanceUnits.Kilomhos: return (value) * 1000;
            case ElectricConductanceUnits.Megamhos: return (value) * 1000000;
            case ElectricConductanceUnits.Gigamhos: return (value) * 1000000000;
            case ElectricConductanceUnits.Teramhos: return (value) * 1000000000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricConductance to string.
     * Note! the default format for ElectricConductance is Siemens.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricConductance.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricConductance.
     */
    public toString(unit: ElectricConductanceUnits = ElectricConductanceUnits.Siemens, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricConductanceUnits.Siemens:
                return super.truncateFractionDigits(this.Siemens, options as ToStringOptions) + ` S`;
            case ElectricConductanceUnits.Mhos:
                return super.truncateFractionDigits(this.Mhos, options as ToStringOptions) + ` ℧`;
            case ElectricConductanceUnits.Nanosiemens:
                return super.truncateFractionDigits(this.Nanosiemens, options as ToStringOptions) + ` nS`;
            case ElectricConductanceUnits.Microsiemens:
                return super.truncateFractionDigits(this.Microsiemens, options as ToStringOptions) + ` μS`;
            case ElectricConductanceUnits.Millisiemens:
                return super.truncateFractionDigits(this.Millisiemens, options as ToStringOptions) + ` mS`;
            case ElectricConductanceUnits.Kilosiemens:
                return super.truncateFractionDigits(this.Kilosiemens, options as ToStringOptions) + ` kS`;
            case ElectricConductanceUnits.Megasiemens:
                return super.truncateFractionDigits(this.Megasiemens, options as ToStringOptions) + ` MS`;
            case ElectricConductanceUnits.Gigasiemens:
                return super.truncateFractionDigits(this.Gigasiemens, options as ToStringOptions) + ` GS`;
            case ElectricConductanceUnits.Terasiemens:
                return super.truncateFractionDigits(this.Terasiemens, options as ToStringOptions) + ` TS`;
            case ElectricConductanceUnits.Nanomhos:
                return super.truncateFractionDigits(this.Nanomhos, options as ToStringOptions) + ` n℧`;
            case ElectricConductanceUnits.Micromhos:
                return super.truncateFractionDigits(this.Micromhos, options as ToStringOptions) + ` μ℧`;
            case ElectricConductanceUnits.Millimhos:
                return super.truncateFractionDigits(this.Millimhos, options as ToStringOptions) + ` m℧`;
            case ElectricConductanceUnits.Kilomhos:
                return super.truncateFractionDigits(this.Kilomhos, options as ToStringOptions) + ` k℧`;
            case ElectricConductanceUnits.Megamhos:
                return super.truncateFractionDigits(this.Megamhos, options as ToStringOptions) + ` M℧`;
            case ElectricConductanceUnits.Gigamhos:
                return super.truncateFractionDigits(this.Gigamhos, options as ToStringOptions) + ` G℧`;
            case ElectricConductanceUnits.Teramhos:
                return super.truncateFractionDigits(this.Teramhos, options as ToStringOptions) + ` T℧`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricConductance unit abbreviation.
     * Note! the default abbreviation for ElectricConductance is Siemens.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricConductance.
     * @returns The abbreviation string of ElectricConductance.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricConductanceUnits = ElectricConductanceUnits.Siemens): string {

        switch (unitAbbreviation) {
            
            case ElectricConductanceUnits.Siemens:
                return `S`;
            case ElectricConductanceUnits.Mhos:
                return `℧`;
            case ElectricConductanceUnits.Nanosiemens:
                return `nS`;
            case ElectricConductanceUnits.Microsiemens:
                return `μS`;
            case ElectricConductanceUnits.Millisiemens:
                return `mS`;
            case ElectricConductanceUnits.Kilosiemens:
                return `kS`;
            case ElectricConductanceUnits.Megasiemens:
                return `MS`;
            case ElectricConductanceUnits.Gigasiemens:
                return `GS`;
            case ElectricConductanceUnits.Terasiemens:
                return `TS`;
            case ElectricConductanceUnits.Nanomhos:
                return `n℧`;
            case ElectricConductanceUnits.Micromhos:
                return `μ℧`;
            case ElectricConductanceUnits.Millimhos:
                return `m℧`;
            case ElectricConductanceUnits.Kilomhos:
                return `k℧`;
            case ElectricConductanceUnits.Megamhos:
                return `M℧`;
            case ElectricConductanceUnits.Gigamhos:
                return `G℧`;
            case ElectricConductanceUnits.Teramhos:
                return `T℧`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricConductance are equals to the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns True if the given ElectricConductance are equal to the current ElectricConductance.
     */
    public equals(electricConductance: ElectricConductance): boolean {
        return super.internalEquals(this.value, electricConductance.BaseValue);
    }

    /**
     * Compare the given ElectricConductance against the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns 0 if they are equal, -1 if the current ElectricConductance is less then other, 1 if the current ElectricConductance is greater then other.
     */
    public compareTo(electricConductance: ElectricConductance): number {
        return super.internalCompareTo(this.value, electricConductance.BaseValue);
    }

    /**
     * Add the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public add(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(super.internalAdd(this.value, electricConductance.BaseValue))
    }

    /**
     * Subtract the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public subtract(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(super.internalSubtract(this.value, electricConductance.BaseValue))
    }

    /**
     * Multiply the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public multiply(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(super.internalMultiply(this.value, electricConductance.BaseValue))
    }

    /**
     * Divide the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public divide(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(super.internalDivide(this.value, electricConductance.BaseValue))
    }

    /**
     * Modulo the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public modulo(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(super.internalModulo(this.value, electricConductance.BaseValue))
    }

    /**
     * Pow the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public pow(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(super.internalPow(this.value, electricConductance.BaseValue))
    }
}
