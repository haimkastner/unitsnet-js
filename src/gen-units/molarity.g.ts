import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a Molarity */
export interface MolarityDto {
    /** The value of the Molarity */
    value: number;
    /**  The specific unit that the Molarity value is representing */
    unit: MolarityUnits;
}

/** MolarityUnits enumeration */
export enum MolarityUnits {
    /** */
    MolesPerCubicMeter = "MolePerCubicMeter",
    /** */
    MolesPerLiter = "MolePerLiter",
    /** */
    PoundMolesPerCubicFoot = "PoundMolePerCubicFoot",
    /** */
    KilomolesPerCubicMeter = "KilomolePerCubicMeter",
    /** */
    FemtomolesPerLiter = "FemtomolePerLiter",
    /** */
    PicomolesPerLiter = "PicomolePerLiter",
    /** */
    NanomolesPerLiter = "NanomolePerLiter",
    /** */
    MicromolesPerLiter = "MicromolePerLiter",
    /** */
    MillimolesPerLiter = "MillimolePerLiter",
    /** */
    CentimolesPerLiter = "CentimolePerLiter",
    /** */
    DecimolesPerLiter = "DecimolePerLiter"
}

/** Molar concentration, also called molarity, amount concentration or substance concentration, is a measure of the concentration of a solute in a solution, or of any chemical species, in terms of amount of substance in a given volume. */
export class Molarity extends BaseUnit {
    protected value: number;
    private molespercubicmeterLazy: number | null = null;
    private molesperliterLazy: number | null = null;
    private poundmolespercubicfootLazy: number | null = null;
    private kilomolespercubicmeterLazy: number | null = null;
    private femtomolesperliterLazy: number | null = null;
    private picomolesperliterLazy: number | null = null;
    private nanomolesperliterLazy: number | null = null;
    private micromolesperliterLazy: number | null = null;
    private millimolesperliterLazy: number | null = null;
    private centimolesperliterLazy: number | null = null;
    private decimolesperliterLazy: number | null = null;

    /**
     * Create a new Molarity.
     * @param value The value.
     * @param fromUnit The ‘Molarity’ unit to create from.
     * The default unit is MolesPerCubicMeter
     */
    public constructor(value: number, fromUnit: MolarityUnits = MolarityUnits.MolesPerCubicMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Molarity is MolesPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): MolarityUnits.MolesPerCubicMeter {
        return MolarityUnits.MolesPerCubicMeter
    }

    /** */
    public get MolesPerCubicMeter(): number {
        if(this.molespercubicmeterLazy !== null){
            return this.molespercubicmeterLazy;
        }
        return this.molespercubicmeterLazy = this.convertFromBase(MolarityUnits.MolesPerCubicMeter);
    }

    /** */
    public get MolesPerLiter(): number {
        if(this.molesperliterLazy !== null){
            return this.molesperliterLazy;
        }
        return this.molesperliterLazy = this.convertFromBase(MolarityUnits.MolesPerLiter);
    }

    /** */
    public get PoundMolesPerCubicFoot(): number {
        if(this.poundmolespercubicfootLazy !== null){
            return this.poundmolespercubicfootLazy;
        }
        return this.poundmolespercubicfootLazy = this.convertFromBase(MolarityUnits.PoundMolesPerCubicFoot);
    }

    /** */
    public get KilomolesPerCubicMeter(): number {
        if(this.kilomolespercubicmeterLazy !== null){
            return this.kilomolespercubicmeterLazy;
        }
        return this.kilomolespercubicmeterLazy = this.convertFromBase(MolarityUnits.KilomolesPerCubicMeter);
    }

    /** */
    public get FemtomolesPerLiter(): number {
        if(this.femtomolesperliterLazy !== null){
            return this.femtomolesperliterLazy;
        }
        return this.femtomolesperliterLazy = this.convertFromBase(MolarityUnits.FemtomolesPerLiter);
    }

    /** */
    public get PicomolesPerLiter(): number {
        if(this.picomolesperliterLazy !== null){
            return this.picomolesperliterLazy;
        }
        return this.picomolesperliterLazy = this.convertFromBase(MolarityUnits.PicomolesPerLiter);
    }

    /** */
    public get NanomolesPerLiter(): number {
        if(this.nanomolesperliterLazy !== null){
            return this.nanomolesperliterLazy;
        }
        return this.nanomolesperliterLazy = this.convertFromBase(MolarityUnits.NanomolesPerLiter);
    }

    /** */
    public get MicromolesPerLiter(): number {
        if(this.micromolesperliterLazy !== null){
            return this.micromolesperliterLazy;
        }
        return this.micromolesperliterLazy = this.convertFromBase(MolarityUnits.MicromolesPerLiter);
    }

    /** */
    public get MillimolesPerLiter(): number {
        if(this.millimolesperliterLazy !== null){
            return this.millimolesperliterLazy;
        }
        return this.millimolesperliterLazy = this.convertFromBase(MolarityUnits.MillimolesPerLiter);
    }

    /** */
    public get CentimolesPerLiter(): number {
        if(this.centimolesperliterLazy !== null){
            return this.centimolesperliterLazy;
        }
        return this.centimolesperliterLazy = this.convertFromBase(MolarityUnits.CentimolesPerLiter);
    }

    /** */
    public get DecimolesPerLiter(): number {
        if(this.decimolesperliterLazy !== null){
            return this.decimolesperliterLazy;
        }
        return this.decimolesperliterLazy = this.convertFromBase(MolarityUnits.DecimolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a MolesPerCubicMeter
     *
     * @param value The unit as MolesPerCubicMeter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromMolesPerCubicMeter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.MolesPerCubicMeter);
    }

    /**
     * Create a new Molarity instance from a MolesPerLiter
     *
     * @param value The unit as MolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromMolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.MolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a PoundMolesPerCubicFoot
     *
     * @param value The unit as PoundMolesPerCubicFoot to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromPoundMolesPerCubicFoot(value: number): Molarity {
        return new Molarity(value, MolarityUnits.PoundMolesPerCubicFoot);
    }

    /**
     * Create a new Molarity instance from a KilomolesPerCubicMeter
     *
     * @param value The unit as KilomolesPerCubicMeter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromKilomolesPerCubicMeter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.KilomolesPerCubicMeter);
    }

    /**
     * Create a new Molarity instance from a FemtomolesPerLiter
     *
     * @param value The unit as FemtomolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromFemtomolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.FemtomolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a PicomolesPerLiter
     *
     * @param value The unit as PicomolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromPicomolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.PicomolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a NanomolesPerLiter
     *
     * @param value The unit as NanomolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromNanomolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.NanomolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a MicromolesPerLiter
     *
     * @param value The unit as MicromolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromMicromolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.MicromolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a MillimolesPerLiter
     *
     * @param value The unit as MillimolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromMillimolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.MillimolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a CentimolesPerLiter
     *
     * @param value The unit as CentimolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromCentimolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.CentimolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a DecimolesPerLiter
     *
     * @param value The unit as DecimolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromDecimolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.DecimolesPerLiter);
    }

    /**
     * Gets the base unit enumeration associated with Molarity
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof MolarityUnits {
        return MolarityUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): MolarityUnits.MolesPerCubicMeter {
        return MolarityUnits.MolesPerCubicMeter;
    }

    /**
     * Create API DTO represent a Molarity unit.
     * @param holdInUnit The specific Molarity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: MolarityUnits = MolarityUnits.MolesPerCubicMeter): MolarityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Molarity unit from an API DTO representation.
     * @param dtoMolarity The Molarity API DTO representation
     */
    public static FromDto(dtoMolarity: MolarityDto): Molarity {
        return new Molarity(dtoMolarity.value, dtoMolarity.unit);
    }

    /**
     * Convert Molarity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: MolarityUnits): number {
        switch (toUnit) {
            case MolarityUnits.MolesPerCubicMeter: return this.MolesPerCubicMeter;
            case MolarityUnits.MolesPerLiter: return this.MolesPerLiter;
            case MolarityUnits.PoundMolesPerCubicFoot: return this.PoundMolesPerCubicFoot;
            case MolarityUnits.KilomolesPerCubicMeter: return this.KilomolesPerCubicMeter;
            case MolarityUnits.FemtomolesPerLiter: return this.FemtomolesPerLiter;
            case MolarityUnits.PicomolesPerLiter: return this.PicomolesPerLiter;
            case MolarityUnits.NanomolesPerLiter: return this.NanomolesPerLiter;
            case MolarityUnits.MicromolesPerLiter: return this.MicromolesPerLiter;
            case MolarityUnits.MillimolesPerLiter: return this.MillimolesPerLiter;
            case MolarityUnits.CentimolesPerLiter: return this.CentimolesPerLiter;
            case MolarityUnits.DecimolesPerLiter: return this.DecimolesPerLiter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: MolarityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case MolarityUnits.MolesPerCubicMeter: return this.value;
                case MolarityUnits.MolesPerLiter: return super.internalMultiply(this.value, 1e-3);
                case MolarityUnits.PoundMolesPerCubicFoot: return super.internalMultiply(this.value, 6.2427960576144611956325455827221e-5);
                case MolarityUnits.KilomolesPerCubicMeter: return super.internalDivide(this.value, 1000);
                case MolarityUnits.FemtomolesPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1e-15);
                }
                case MolarityUnits.PicomolesPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1e-12);
                }
                case MolarityUnits.NanomolesPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1e-9);
                }
                case MolarityUnits.MicromolesPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.000001);
                }
                case MolarityUnits.MillimolesPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.001);
                }
                case MolarityUnits.CentimolesPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.01);
                }
                case MolarityUnits.DecimolesPerLiter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 0.1);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case MolarityUnits.MolesPerCubicMeter: return this.value;
            case MolarityUnits.MolesPerLiter: return this.value * 1e-3;
            case MolarityUnits.PoundMolesPerCubicFoot: return this.value * 6.2427960576144611956325455827221e-5;
            case MolarityUnits.KilomolesPerCubicMeter: return (this.value) / 1000;
            case MolarityUnits.FemtomolesPerLiter: return (this.value * 1e-3) / 1e-15;
            case MolarityUnits.PicomolesPerLiter: return (this.value * 1e-3) / 1e-12;
            case MolarityUnits.NanomolesPerLiter: return (this.value * 1e-3) / 1e-9;
            case MolarityUnits.MicromolesPerLiter: return (this.value * 1e-3) / 0.000001;
            case MolarityUnits.MillimolesPerLiter: return (this.value * 1e-3) / 0.001;
            case MolarityUnits.CentimolesPerLiter: return (this.value * 1e-3) / 0.01;
            case MolarityUnits.DecimolesPerLiter: return (this.value * 1e-3) / 0.1;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: MolarityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case MolarityUnits.MolesPerCubicMeter: return value;
                case MolarityUnits.MolesPerLiter: return super.internalDivide(value, 1e-3);
                case MolarityUnits.PoundMolesPerCubicFoot: return super.internalDivide(value, 6.2427960576144611956325455827221e-5);
                case MolarityUnits.KilomolesPerCubicMeter: return super.internalMultiply(value, 1000);
                case MolarityUnits.FemtomolesPerLiter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1e-15);
                }
                case MolarityUnits.PicomolesPerLiter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1e-12);
                }
                case MolarityUnits.NanomolesPerLiter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1e-9);
                }
                case MolarityUnits.MicromolesPerLiter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.000001);
                }
                case MolarityUnits.MillimolesPerLiter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.001);
                }
                case MolarityUnits.CentimolesPerLiter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.01);
                }
                case MolarityUnits.DecimolesPerLiter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 0.1);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case MolarityUnits.MolesPerCubicMeter: return value;
            case MolarityUnits.MolesPerLiter: return value / 1e-3;
            case MolarityUnits.PoundMolesPerCubicFoot: return value / 6.2427960576144611956325455827221e-5;
            case MolarityUnits.KilomolesPerCubicMeter: return (value) * 1000;
            case MolarityUnits.FemtomolesPerLiter: return (value / 1e-3) * 1e-15;
            case MolarityUnits.PicomolesPerLiter: return (value / 1e-3) * 1e-12;
            case MolarityUnits.NanomolesPerLiter: return (value / 1e-3) * 1e-9;
            case MolarityUnits.MicromolesPerLiter: return (value / 1e-3) * 0.000001;
            case MolarityUnits.MillimolesPerLiter: return (value / 1e-3) * 0.001;
            case MolarityUnits.CentimolesPerLiter: return (value / 1e-3) * 0.01;
            case MolarityUnits.DecimolesPerLiter: return (value / 1e-3) * 0.1;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Molarity to string.
     * Note! the default format for Molarity is MolesPerCubicMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Molarity.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the Molarity.
     */
    public toString(unit: MolarityUnits = MolarityUnits.MolesPerCubicMeter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case MolarityUnits.MolesPerCubicMeter:
                return super.truncateFractionDigits(this.MolesPerCubicMeter, options as ToStringOptions) + ` mol/m³`;
            case MolarityUnits.MolesPerLiter:
                return super.truncateFractionDigits(this.MolesPerLiter, options as ToStringOptions) + ` mol/L`;
            case MolarityUnits.PoundMolesPerCubicFoot:
                return super.truncateFractionDigits(this.PoundMolesPerCubicFoot, options as ToStringOptions) + ` lbmol/ft³`;
            case MolarityUnits.KilomolesPerCubicMeter:
                return super.truncateFractionDigits(this.KilomolesPerCubicMeter, options as ToStringOptions) + ` kmol/m³`;
            case MolarityUnits.FemtomolesPerLiter:
                return super.truncateFractionDigits(this.FemtomolesPerLiter, options as ToStringOptions) + ` fmol/L`;
            case MolarityUnits.PicomolesPerLiter:
                return super.truncateFractionDigits(this.PicomolesPerLiter, options as ToStringOptions) + ` pmol/L`;
            case MolarityUnits.NanomolesPerLiter:
                return super.truncateFractionDigits(this.NanomolesPerLiter, options as ToStringOptions) + ` nmol/L`;
            case MolarityUnits.MicromolesPerLiter:
                return super.truncateFractionDigits(this.MicromolesPerLiter, options as ToStringOptions) + ` μmol/L`;
            case MolarityUnits.MillimolesPerLiter:
                return super.truncateFractionDigits(this.MillimolesPerLiter, options as ToStringOptions) + ` mmol/L`;
            case MolarityUnits.CentimolesPerLiter:
                return super.truncateFractionDigits(this.CentimolesPerLiter, options as ToStringOptions) + ` cmol/L`;
            case MolarityUnits.DecimolesPerLiter:
                return super.truncateFractionDigits(this.DecimolesPerLiter, options as ToStringOptions) + ` dmol/L`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Molarity unit abbreviation.
     * Note! the default abbreviation for Molarity is MolesPerCubicMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Molarity.
     * @returns The abbreviation string of Molarity.
     */
    public getUnitAbbreviation(unitAbbreviation: MolarityUnits = MolarityUnits.MolesPerCubicMeter): string {

        switch (unitAbbreviation) {
            
            case MolarityUnits.MolesPerCubicMeter:
                return `mol/m³`;
            case MolarityUnits.MolesPerLiter:
                return `mol/L`;
            case MolarityUnits.PoundMolesPerCubicFoot:
                return `lbmol/ft³`;
            case MolarityUnits.KilomolesPerCubicMeter:
                return `kmol/m³`;
            case MolarityUnits.FemtomolesPerLiter:
                return `fmol/L`;
            case MolarityUnits.PicomolesPerLiter:
                return `pmol/L`;
            case MolarityUnits.NanomolesPerLiter:
                return `nmol/L`;
            case MolarityUnits.MicromolesPerLiter:
                return `μmol/L`;
            case MolarityUnits.MillimolesPerLiter:
                return `mmol/L`;
            case MolarityUnits.CentimolesPerLiter:
                return `cmol/L`;
            case MolarityUnits.DecimolesPerLiter:
                return `dmol/L`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Molarity are equals to the current Molarity.
     * @param molarity The other Molarity.
     * @returns True if the given Molarity are equal to the current Molarity.
     */
    public equals(molarity: Molarity): boolean {
        return super.internalEquals(this.value, molarity.BaseValue);
    }

    /**
     * Compare the given Molarity against the current Molarity.
     * @param molarity The other Molarity.
     * @returns 0 if they are equal, -1 if the current Molarity is less then other, 1 if the current Molarity is greater then other.
     */
    public compareTo(molarity: Molarity): number {
        return super.internalCompareTo(this.value, molarity.BaseValue);
    }

    /**
     * Add the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    public add(molarity: Molarity): Molarity {
        return new Molarity(super.internalAdd(this.value, molarity.BaseValue))
    }

    /**
     * Subtract the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    public subtract(molarity: Molarity): Molarity {
        return new Molarity(super.internalSubtract(this.value, molarity.BaseValue))
    }

    /**
     * Multiply the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    public multiply(molarity: Molarity): Molarity {
        return new Molarity(super.internalMultiply(this.value, molarity.BaseValue))
    }

    /**
     * Divide the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    public divide(molarity: Molarity): Molarity {
        return new Molarity(super.internalDivide(this.value, molarity.BaseValue))
    }

    /**
     * Modulo the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    public modulo(molarity: Molarity): Molarity {
        return new Molarity(super.internalModulo(this.value, molarity.BaseValue))
    }

    /**
     * Pow the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    public pow(molarity: Molarity): Molarity {
        return new Molarity(super.internalPow(this.value, molarity.BaseValue))
    }
}
