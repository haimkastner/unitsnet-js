import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a ElectricAdmittance */
export interface ElectricAdmittanceDto {
    /** The value of the ElectricAdmittance */
    value: number;
    /**  The specific unit that the ElectricAdmittance value is representing */
    unit: ElectricAdmittanceUnits;
}

/** ElectricAdmittanceUnits enumeration */
export enum ElectricAdmittanceUnits {
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

/** Electric admittance is a measure of how easily a circuit or device will allow a current to flow by the combined effect of conductance and susceptance in a circuit. It is defined as the inverse of impedance. The SI unit of admittance is the siemens (symbol S). */
export class ElectricAdmittance extends BaseUnit {
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
     * Create a new ElectricAdmittance.
     * @param value The value.
     * @param fromUnit The ‘ElectricAdmittance’ unit to create from.
     * The default unit is Siemens
     */
    public constructor(value: number, fromUnit: ElectricAdmittanceUnits = ElectricAdmittanceUnits.Siemens) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricAdmittance is Siemens.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricAdmittanceUnits.Siemens {
        return ElectricAdmittanceUnits.Siemens
    }

    /** */
    public get Siemens(): number {
        if(this.siemensLazy !== null){
            return this.siemensLazy;
        }
        return this.siemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Siemens);
    }

    /** */
    public get Mhos(): number {
        if(this.mhosLazy !== null){
            return this.mhosLazy;
        }
        return this.mhosLazy = this.convertFromBase(ElectricAdmittanceUnits.Mhos);
    }

    /** */
    public get Nanosiemens(): number {
        if(this.nanosiemensLazy !== null){
            return this.nanosiemensLazy;
        }
        return this.nanosiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Nanosiemens);
    }

    /** */
    public get Microsiemens(): number {
        if(this.microsiemensLazy !== null){
            return this.microsiemensLazy;
        }
        return this.microsiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Microsiemens);
    }

    /** */
    public get Millisiemens(): number {
        if(this.millisiemensLazy !== null){
            return this.millisiemensLazy;
        }
        return this.millisiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Millisiemens);
    }

    /** */
    public get Kilosiemens(): number {
        if(this.kilosiemensLazy !== null){
            return this.kilosiemensLazy;
        }
        return this.kilosiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Kilosiemens);
    }

    /** */
    public get Megasiemens(): number {
        if(this.megasiemensLazy !== null){
            return this.megasiemensLazy;
        }
        return this.megasiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Megasiemens);
    }

    /** */
    public get Gigasiemens(): number {
        if(this.gigasiemensLazy !== null){
            return this.gigasiemensLazy;
        }
        return this.gigasiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Gigasiemens);
    }

    /** */
    public get Terasiemens(): number {
        if(this.terasiemensLazy !== null){
            return this.terasiemensLazy;
        }
        return this.terasiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Terasiemens);
    }

    /** */
    public get Nanomhos(): number {
        if(this.nanomhosLazy !== null){
            return this.nanomhosLazy;
        }
        return this.nanomhosLazy = this.convertFromBase(ElectricAdmittanceUnits.Nanomhos);
    }

    /** */
    public get Micromhos(): number {
        if(this.micromhosLazy !== null){
            return this.micromhosLazy;
        }
        return this.micromhosLazy = this.convertFromBase(ElectricAdmittanceUnits.Micromhos);
    }

    /** */
    public get Millimhos(): number {
        if(this.millimhosLazy !== null){
            return this.millimhosLazy;
        }
        return this.millimhosLazy = this.convertFromBase(ElectricAdmittanceUnits.Millimhos);
    }

    /** */
    public get Kilomhos(): number {
        if(this.kilomhosLazy !== null){
            return this.kilomhosLazy;
        }
        return this.kilomhosLazy = this.convertFromBase(ElectricAdmittanceUnits.Kilomhos);
    }

    /** */
    public get Megamhos(): number {
        if(this.megamhosLazy !== null){
            return this.megamhosLazy;
        }
        return this.megamhosLazy = this.convertFromBase(ElectricAdmittanceUnits.Megamhos);
    }

    /** */
    public get Gigamhos(): number {
        if(this.gigamhosLazy !== null){
            return this.gigamhosLazy;
        }
        return this.gigamhosLazy = this.convertFromBase(ElectricAdmittanceUnits.Gigamhos);
    }

    /** */
    public get Teramhos(): number {
        if(this.teramhosLazy !== null){
            return this.teramhosLazy;
        }
        return this.teramhosLazy = this.convertFromBase(ElectricAdmittanceUnits.Teramhos);
    }

    /**
     * Create a new ElectricAdmittance instance from a Siemens
     *
     * @param value The unit as Siemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromSiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Siemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Mhos
     *
     * @param value The unit as Mhos to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromMhos(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Mhos);
    }

    /**
     * Create a new ElectricAdmittance instance from a Nanosiemens
     *
     * @param value The unit as Nanosiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromNanosiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Nanosiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Microsiemens
     *
     * @param value The unit as Microsiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromMicrosiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Microsiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Millisiemens
     *
     * @param value The unit as Millisiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromMillisiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Millisiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Kilosiemens
     *
     * @param value The unit as Kilosiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromKilosiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Kilosiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Megasiemens
     *
     * @param value The unit as Megasiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromMegasiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Megasiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Gigasiemens
     *
     * @param value The unit as Gigasiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromGigasiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Gigasiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Terasiemens
     *
     * @param value The unit as Terasiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromTerasiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Terasiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Nanomhos
     *
     * @param value The unit as Nanomhos to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromNanomhos(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Nanomhos);
    }

    /**
     * Create a new ElectricAdmittance instance from a Micromhos
     *
     * @param value The unit as Micromhos to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromMicromhos(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Micromhos);
    }

    /**
     * Create a new ElectricAdmittance instance from a Millimhos
     *
     * @param value The unit as Millimhos to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromMillimhos(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Millimhos);
    }

    /**
     * Create a new ElectricAdmittance instance from a Kilomhos
     *
     * @param value The unit as Kilomhos to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromKilomhos(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Kilomhos);
    }

    /**
     * Create a new ElectricAdmittance instance from a Megamhos
     *
     * @param value The unit as Megamhos to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromMegamhos(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Megamhos);
    }

    /**
     * Create a new ElectricAdmittance instance from a Gigamhos
     *
     * @param value The unit as Gigamhos to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromGigamhos(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Gigamhos);
    }

    /**
     * Create a new ElectricAdmittance instance from a Teramhos
     *
     * @param value The unit as Teramhos to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromTeramhos(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Teramhos);
    }

    /**
     * Gets the base unit enumeration associated with ElectricAdmittance
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricAdmittanceUnits {
        return ElectricAdmittanceUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricAdmittanceUnits.Siemens {
        return ElectricAdmittanceUnits.Siemens;
    }

    /**
     * Create API DTO represent a ElectricAdmittance unit.
     * @param holdInUnit The specific ElectricAdmittance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricAdmittanceUnits = ElectricAdmittanceUnits.Siemens): ElectricAdmittanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricAdmittance unit from an API DTO representation.
     * @param dtoElectricAdmittance The ElectricAdmittance API DTO representation
     */
    public static FromDto(dtoElectricAdmittance: ElectricAdmittanceDto): ElectricAdmittance {
        return new ElectricAdmittance(dtoElectricAdmittance.value, dtoElectricAdmittance.unit);
    }

    /**
     * Convert ElectricAdmittance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricAdmittanceUnits): number {
        switch (toUnit) {
            case ElectricAdmittanceUnits.Siemens: return this.Siemens;
            case ElectricAdmittanceUnits.Mhos: return this.Mhos;
            case ElectricAdmittanceUnits.Nanosiemens: return this.Nanosiemens;
            case ElectricAdmittanceUnits.Microsiemens: return this.Microsiemens;
            case ElectricAdmittanceUnits.Millisiemens: return this.Millisiemens;
            case ElectricAdmittanceUnits.Kilosiemens: return this.Kilosiemens;
            case ElectricAdmittanceUnits.Megasiemens: return this.Megasiemens;
            case ElectricAdmittanceUnits.Gigasiemens: return this.Gigasiemens;
            case ElectricAdmittanceUnits.Terasiemens: return this.Terasiemens;
            case ElectricAdmittanceUnits.Nanomhos: return this.Nanomhos;
            case ElectricAdmittanceUnits.Micromhos: return this.Micromhos;
            case ElectricAdmittanceUnits.Millimhos: return this.Millimhos;
            case ElectricAdmittanceUnits.Kilomhos: return this.Kilomhos;
            case ElectricAdmittanceUnits.Megamhos: return this.Megamhos;
            case ElectricAdmittanceUnits.Gigamhos: return this.Gigamhos;
            case ElectricAdmittanceUnits.Teramhos: return this.Teramhos;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricAdmittanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricAdmittanceUnits.Siemens: return this.value;
                case ElectricAdmittanceUnits.Mhos: return this.value;
                case ElectricAdmittanceUnits.Nanosiemens: return super.internalDivide(this.value, 1e-9);
                case ElectricAdmittanceUnits.Microsiemens: return super.internalDivide(this.value, 0.000001);
                case ElectricAdmittanceUnits.Millisiemens: return super.internalDivide(this.value, 0.001);
                case ElectricAdmittanceUnits.Kilosiemens: return super.internalDivide(this.value, 1000);
                case ElectricAdmittanceUnits.Megasiemens: return super.internalDivide(this.value, 1000000);
                case ElectricAdmittanceUnits.Gigasiemens: return super.internalDivide(this.value, 1000000000);
                case ElectricAdmittanceUnits.Terasiemens: return super.internalDivide(this.value, 1000000000000);
                case ElectricAdmittanceUnits.Nanomhos: return super.internalDivide(this.value, 1e-9);
                case ElectricAdmittanceUnits.Micromhos: return super.internalDivide(this.value, 0.000001);
                case ElectricAdmittanceUnits.Millimhos: return super.internalDivide(this.value, 0.001);
                case ElectricAdmittanceUnits.Kilomhos: return super.internalDivide(this.value, 1000);
                case ElectricAdmittanceUnits.Megamhos: return super.internalDivide(this.value, 1000000);
                case ElectricAdmittanceUnits.Gigamhos: return super.internalDivide(this.value, 1000000000);
                case ElectricAdmittanceUnits.Teramhos: return super.internalDivide(this.value, 1000000000000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricAdmittanceUnits.Siemens: return this.value;
            case ElectricAdmittanceUnits.Mhos: return this.value;
            case ElectricAdmittanceUnits.Nanosiemens: return (this.value) / 1e-9;
            case ElectricAdmittanceUnits.Microsiemens: return (this.value) / 0.000001;
            case ElectricAdmittanceUnits.Millisiemens: return (this.value) / 0.001;
            case ElectricAdmittanceUnits.Kilosiemens: return (this.value) / 1000;
            case ElectricAdmittanceUnits.Megasiemens: return (this.value) / 1000000;
            case ElectricAdmittanceUnits.Gigasiemens: return (this.value) / 1000000000;
            case ElectricAdmittanceUnits.Terasiemens: return (this.value) / 1000000000000;
            case ElectricAdmittanceUnits.Nanomhos: return (this.value) / 1e-9;
            case ElectricAdmittanceUnits.Micromhos: return (this.value) / 0.000001;
            case ElectricAdmittanceUnits.Millimhos: return (this.value) / 0.001;
            case ElectricAdmittanceUnits.Kilomhos: return (this.value) / 1000;
            case ElectricAdmittanceUnits.Megamhos: return (this.value) / 1000000;
            case ElectricAdmittanceUnits.Gigamhos: return (this.value) / 1000000000;
            case ElectricAdmittanceUnits.Teramhos: return (this.value) / 1000000000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricAdmittanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricAdmittanceUnits.Siemens: return value;
                case ElectricAdmittanceUnits.Mhos: return value;
                case ElectricAdmittanceUnits.Nanosiemens: return super.internalMultiply(value, 1e-9);
                case ElectricAdmittanceUnits.Microsiemens: return super.internalMultiply(value, 0.000001);
                case ElectricAdmittanceUnits.Millisiemens: return super.internalMultiply(value, 0.001);
                case ElectricAdmittanceUnits.Kilosiemens: return super.internalMultiply(value, 1000);
                case ElectricAdmittanceUnits.Megasiemens: return super.internalMultiply(value, 1000000);
                case ElectricAdmittanceUnits.Gigasiemens: return super.internalMultiply(value, 1000000000);
                case ElectricAdmittanceUnits.Terasiemens: return super.internalMultiply(value, 1000000000000);
                case ElectricAdmittanceUnits.Nanomhos: return super.internalMultiply(value, 1e-9);
                case ElectricAdmittanceUnits.Micromhos: return super.internalMultiply(value, 0.000001);
                case ElectricAdmittanceUnits.Millimhos: return super.internalMultiply(value, 0.001);
                case ElectricAdmittanceUnits.Kilomhos: return super.internalMultiply(value, 1000);
                case ElectricAdmittanceUnits.Megamhos: return super.internalMultiply(value, 1000000);
                case ElectricAdmittanceUnits.Gigamhos: return super.internalMultiply(value, 1000000000);
                case ElectricAdmittanceUnits.Teramhos: return super.internalMultiply(value, 1000000000000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricAdmittanceUnits.Siemens: return value;
            case ElectricAdmittanceUnits.Mhos: return value;
            case ElectricAdmittanceUnits.Nanosiemens: return (value) * 1e-9;
            case ElectricAdmittanceUnits.Microsiemens: return (value) * 0.000001;
            case ElectricAdmittanceUnits.Millisiemens: return (value) * 0.001;
            case ElectricAdmittanceUnits.Kilosiemens: return (value) * 1000;
            case ElectricAdmittanceUnits.Megasiemens: return (value) * 1000000;
            case ElectricAdmittanceUnits.Gigasiemens: return (value) * 1000000000;
            case ElectricAdmittanceUnits.Terasiemens: return (value) * 1000000000000;
            case ElectricAdmittanceUnits.Nanomhos: return (value) * 1e-9;
            case ElectricAdmittanceUnits.Micromhos: return (value) * 0.000001;
            case ElectricAdmittanceUnits.Millimhos: return (value) * 0.001;
            case ElectricAdmittanceUnits.Kilomhos: return (value) * 1000;
            case ElectricAdmittanceUnits.Megamhos: return (value) * 1000000;
            case ElectricAdmittanceUnits.Gigamhos: return (value) * 1000000000;
            case ElectricAdmittanceUnits.Teramhos: return (value) * 1000000000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricAdmittance to string.
     * Note! the default format for ElectricAdmittance is Siemens.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricAdmittance.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the ElectricAdmittance.
     */
    public toString(unit: ElectricAdmittanceUnits = ElectricAdmittanceUnits.Siemens, fractionalDigits?: number): string {

        switch (unit) {
            
            case ElectricAdmittanceUnits.Siemens:
                return super.truncateFractionDigits(this.Siemens, fractionalDigits) + ` S`;
            case ElectricAdmittanceUnits.Mhos:
                return super.truncateFractionDigits(this.Mhos, fractionalDigits) + ` ℧`;
            case ElectricAdmittanceUnits.Nanosiemens:
                return super.truncateFractionDigits(this.Nanosiemens, fractionalDigits) + ` nS`;
            case ElectricAdmittanceUnits.Microsiemens:
                return super.truncateFractionDigits(this.Microsiemens, fractionalDigits) + ` μS`;
            case ElectricAdmittanceUnits.Millisiemens:
                return super.truncateFractionDigits(this.Millisiemens, fractionalDigits) + ` mS`;
            case ElectricAdmittanceUnits.Kilosiemens:
                return super.truncateFractionDigits(this.Kilosiemens, fractionalDigits) + ` kS`;
            case ElectricAdmittanceUnits.Megasiemens:
                return super.truncateFractionDigits(this.Megasiemens, fractionalDigits) + ` MS`;
            case ElectricAdmittanceUnits.Gigasiemens:
                return super.truncateFractionDigits(this.Gigasiemens, fractionalDigits) + ` GS`;
            case ElectricAdmittanceUnits.Terasiemens:
                return super.truncateFractionDigits(this.Terasiemens, fractionalDigits) + ` TS`;
            case ElectricAdmittanceUnits.Nanomhos:
                return super.truncateFractionDigits(this.Nanomhos, fractionalDigits) + ` n℧`;
            case ElectricAdmittanceUnits.Micromhos:
                return super.truncateFractionDigits(this.Micromhos, fractionalDigits) + ` μ℧`;
            case ElectricAdmittanceUnits.Millimhos:
                return super.truncateFractionDigits(this.Millimhos, fractionalDigits) + ` m℧`;
            case ElectricAdmittanceUnits.Kilomhos:
                return super.truncateFractionDigits(this.Kilomhos, fractionalDigits) + ` k℧`;
            case ElectricAdmittanceUnits.Megamhos:
                return super.truncateFractionDigits(this.Megamhos, fractionalDigits) + ` M℧`;
            case ElectricAdmittanceUnits.Gigamhos:
                return super.truncateFractionDigits(this.Gigamhos, fractionalDigits) + ` G℧`;
            case ElectricAdmittanceUnits.Teramhos:
                return super.truncateFractionDigits(this.Teramhos, fractionalDigits) + ` T℧`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricAdmittance unit abbreviation.
     * Note! the default abbreviation for ElectricAdmittance is Siemens.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricAdmittance.
     * @returns The abbreviation string of ElectricAdmittance.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricAdmittanceUnits = ElectricAdmittanceUnits.Siemens): string {

        switch (unitAbbreviation) {
            
            case ElectricAdmittanceUnits.Siemens:
                return `S`;
            case ElectricAdmittanceUnits.Mhos:
                return `℧`;
            case ElectricAdmittanceUnits.Nanosiemens:
                return `nS`;
            case ElectricAdmittanceUnits.Microsiemens:
                return `μS`;
            case ElectricAdmittanceUnits.Millisiemens:
                return `mS`;
            case ElectricAdmittanceUnits.Kilosiemens:
                return `kS`;
            case ElectricAdmittanceUnits.Megasiemens:
                return `MS`;
            case ElectricAdmittanceUnits.Gigasiemens:
                return `GS`;
            case ElectricAdmittanceUnits.Terasiemens:
                return `TS`;
            case ElectricAdmittanceUnits.Nanomhos:
                return `n℧`;
            case ElectricAdmittanceUnits.Micromhos:
                return `μ℧`;
            case ElectricAdmittanceUnits.Millimhos:
                return `m℧`;
            case ElectricAdmittanceUnits.Kilomhos:
                return `k℧`;
            case ElectricAdmittanceUnits.Megamhos:
                return `M℧`;
            case ElectricAdmittanceUnits.Gigamhos:
                return `G℧`;
            case ElectricAdmittanceUnits.Teramhos:
                return `T℧`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricAdmittance are equals to the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns True if the given ElectricAdmittance are equal to the current ElectricAdmittance.
     */
    public equals(electricAdmittance: ElectricAdmittance): boolean {
        return super.internalEquals(this.value, electricAdmittance.BaseValue);
    }

    /**
     * Compare the given ElectricAdmittance against the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns 0 if they are equal, -1 if the current ElectricAdmittance is less then other, 1 if the current ElectricAdmittance is greater then other.
     */
    public compareTo(electricAdmittance: ElectricAdmittance): number {
        return super.internalCompareTo(this.value, electricAdmittance.BaseValue);
    }

    /**
     * Add the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public add(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(super.internalAdd(this.value, electricAdmittance.BaseValue))
    }

    /**
     * Subtract the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public subtract(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(super.internalSubtract(this.value, electricAdmittance.BaseValue))
    }

    /**
     * Multiply the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public multiply(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(super.internalMultiply(this.value, electricAdmittance.BaseValue))
    }

    /**
     * Divide the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public divide(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(super.internalDivide(this.value, electricAdmittance.BaseValue))
    }

    /**
     * Modulo the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public modulo(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(super.internalModulo(this.value, electricAdmittance.BaseValue))
    }

    /**
     * Pow the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public pow(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(super.internalPow(this.value, electricAdmittance.BaseValue))
    }
}
