import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a MolarFlow */
export interface MolarFlowDto {
    /** The value of the MolarFlow */
    value: number;
    /**  The specific unit that the MolarFlow value is representing */
    unit: MolarFlowUnits;
}

/** MolarFlowUnits enumeration */
export enum MolarFlowUnits {
    /** */
    MolesPerSecond = "MolePerSecond",
    /** */
    MolesPerMinute = "MolePerMinute",
    /** */
    MolesPerHour = "MolePerHour",
    /** */
    PoundMolesPerSecond = "PoundMolePerSecond",
    /** */
    PoundMolesPerMinute = "PoundMolePerMinute",
    /** */
    PoundMolesPerHour = "PoundMolePerHour",
    /** */
    KilomolesPerSecond = "KilomolePerSecond",
    /** */
    KilomolesPerMinute = "KilomolePerMinute",
    /** */
    KilomolesPerHour = "KilomolePerHour"
}

/** Molar flow is the ratio of the amount of substance change to the time during which the change occurred (value of amount of substance changes per unit time). */
export class MolarFlow extends BaseUnit {
    protected value: number;
    private molespersecondLazy: number | null = null;
    private molesperminuteLazy: number | null = null;
    private molesperhourLazy: number | null = null;
    private poundmolespersecondLazy: number | null = null;
    private poundmolesperminuteLazy: number | null = null;
    private poundmolesperhourLazy: number | null = null;
    private kilomolespersecondLazy: number | null = null;
    private kilomolesperminuteLazy: number | null = null;
    private kilomolesperhourLazy: number | null = null;

    /**
     * Create a new MolarFlow.
     * @param value The value.
     * @param fromUnit The ‘MolarFlow’ unit to create from.
     * The default unit is MolesPerSecond
     */
    public constructor(value: number, fromUnit: MolarFlowUnits = MolarFlowUnits.MolesPerSecond) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MolarFlow is MolesPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): MolarFlowUnits.MolesPerSecond {
        return MolarFlowUnits.MolesPerSecond
    }

    /** */
    public get MolesPerSecond(): number {
        if(this.molespersecondLazy !== null){
            return this.molespersecondLazy;
        }
        return this.molespersecondLazy = this.convertFromBase(MolarFlowUnits.MolesPerSecond);
    }

    /** */
    public get MolesPerMinute(): number {
        if(this.molesperminuteLazy !== null){
            return this.molesperminuteLazy;
        }
        return this.molesperminuteLazy = this.convertFromBase(MolarFlowUnits.MolesPerMinute);
    }

    /** */
    public get MolesPerHour(): number {
        if(this.molesperhourLazy !== null){
            return this.molesperhourLazy;
        }
        return this.molesperhourLazy = this.convertFromBase(MolarFlowUnits.MolesPerHour);
    }

    /** */
    public get PoundMolesPerSecond(): number {
        if(this.poundmolespersecondLazy !== null){
            return this.poundmolespersecondLazy;
        }
        return this.poundmolespersecondLazy = this.convertFromBase(MolarFlowUnits.PoundMolesPerSecond);
    }

    /** */
    public get PoundMolesPerMinute(): number {
        if(this.poundmolesperminuteLazy !== null){
            return this.poundmolesperminuteLazy;
        }
        return this.poundmolesperminuteLazy = this.convertFromBase(MolarFlowUnits.PoundMolesPerMinute);
    }

    /** */
    public get PoundMolesPerHour(): number {
        if(this.poundmolesperhourLazy !== null){
            return this.poundmolesperhourLazy;
        }
        return this.poundmolesperhourLazy = this.convertFromBase(MolarFlowUnits.PoundMolesPerHour);
    }

    /** */
    public get KilomolesPerSecond(): number {
        if(this.kilomolespersecondLazy !== null){
            return this.kilomolespersecondLazy;
        }
        return this.kilomolespersecondLazy = this.convertFromBase(MolarFlowUnits.KilomolesPerSecond);
    }

    /** */
    public get KilomolesPerMinute(): number {
        if(this.kilomolesperminuteLazy !== null){
            return this.kilomolesperminuteLazy;
        }
        return this.kilomolesperminuteLazy = this.convertFromBase(MolarFlowUnits.KilomolesPerMinute);
    }

    /** */
    public get KilomolesPerHour(): number {
        if(this.kilomolesperhourLazy !== null){
            return this.kilomolesperhourLazy;
        }
        return this.kilomolesperhourLazy = this.convertFromBase(MolarFlowUnits.KilomolesPerHour);
    }

    /**
     * Create a new MolarFlow instance from a MolesPerSecond
     *
     * @param value The unit as MolesPerSecond to create a new MolarFlow from.
     * @returns The new MolarFlow instance.
     */
    public static FromMolesPerSecond(value: number): MolarFlow {
        return new MolarFlow(value, MolarFlowUnits.MolesPerSecond);
    }

    /**
     * Create a new MolarFlow instance from a MolesPerMinute
     *
     * @param value The unit as MolesPerMinute to create a new MolarFlow from.
     * @returns The new MolarFlow instance.
     */
    public static FromMolesPerMinute(value: number): MolarFlow {
        return new MolarFlow(value, MolarFlowUnits.MolesPerMinute);
    }

    /**
     * Create a new MolarFlow instance from a MolesPerHour
     *
     * @param value The unit as MolesPerHour to create a new MolarFlow from.
     * @returns The new MolarFlow instance.
     */
    public static FromMolesPerHour(value: number): MolarFlow {
        return new MolarFlow(value, MolarFlowUnits.MolesPerHour);
    }

    /**
     * Create a new MolarFlow instance from a PoundMolesPerSecond
     *
     * @param value The unit as PoundMolesPerSecond to create a new MolarFlow from.
     * @returns The new MolarFlow instance.
     */
    public static FromPoundMolesPerSecond(value: number): MolarFlow {
        return new MolarFlow(value, MolarFlowUnits.PoundMolesPerSecond);
    }

    /**
     * Create a new MolarFlow instance from a PoundMolesPerMinute
     *
     * @param value The unit as PoundMolesPerMinute to create a new MolarFlow from.
     * @returns The new MolarFlow instance.
     */
    public static FromPoundMolesPerMinute(value: number): MolarFlow {
        return new MolarFlow(value, MolarFlowUnits.PoundMolesPerMinute);
    }

    /**
     * Create a new MolarFlow instance from a PoundMolesPerHour
     *
     * @param value The unit as PoundMolesPerHour to create a new MolarFlow from.
     * @returns The new MolarFlow instance.
     */
    public static FromPoundMolesPerHour(value: number): MolarFlow {
        return new MolarFlow(value, MolarFlowUnits.PoundMolesPerHour);
    }

    /**
     * Create a new MolarFlow instance from a KilomolesPerSecond
     *
     * @param value The unit as KilomolesPerSecond to create a new MolarFlow from.
     * @returns The new MolarFlow instance.
     */
    public static FromKilomolesPerSecond(value: number): MolarFlow {
        return new MolarFlow(value, MolarFlowUnits.KilomolesPerSecond);
    }

    /**
     * Create a new MolarFlow instance from a KilomolesPerMinute
     *
     * @param value The unit as KilomolesPerMinute to create a new MolarFlow from.
     * @returns The new MolarFlow instance.
     */
    public static FromKilomolesPerMinute(value: number): MolarFlow {
        return new MolarFlow(value, MolarFlowUnits.KilomolesPerMinute);
    }

    /**
     * Create a new MolarFlow instance from a KilomolesPerHour
     *
     * @param value The unit as KilomolesPerHour to create a new MolarFlow from.
     * @returns The new MolarFlow instance.
     */
    public static FromKilomolesPerHour(value: number): MolarFlow {
        return new MolarFlow(value, MolarFlowUnits.KilomolesPerHour);
    }

    /**
     * Gets the base unit enumeration associated with MolarFlow
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof MolarFlowUnits {
        return MolarFlowUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): MolarFlowUnits.MolesPerSecond {
        return MolarFlowUnits.MolesPerSecond;
    }

    /**
     * Create API DTO represent a MolarFlow unit.
     * @param holdInUnit The specific MolarFlow unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: MolarFlowUnits = MolarFlowUnits.MolesPerSecond): MolarFlowDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a MolarFlow unit from an API DTO representation.
     * @param dtoMolarFlow The MolarFlow API DTO representation
     */
    public static FromDto(dtoMolarFlow: MolarFlowDto): MolarFlow {
        return new MolarFlow(dtoMolarFlow.value, dtoMolarFlow.unit);
    }

    /**
     * Convert MolarFlow to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: MolarFlowUnits): number {
        switch (toUnit) {
            case MolarFlowUnits.MolesPerSecond: return this.MolesPerSecond;
            case MolarFlowUnits.MolesPerMinute: return this.MolesPerMinute;
            case MolarFlowUnits.MolesPerHour: return this.MolesPerHour;
            case MolarFlowUnits.PoundMolesPerSecond: return this.PoundMolesPerSecond;
            case MolarFlowUnits.PoundMolesPerMinute: return this.PoundMolesPerMinute;
            case MolarFlowUnits.PoundMolesPerHour: return this.PoundMolesPerHour;
            case MolarFlowUnits.KilomolesPerSecond: return this.KilomolesPerSecond;
            case MolarFlowUnits.KilomolesPerMinute: return this.KilomolesPerMinute;
            case MolarFlowUnits.KilomolesPerHour: return this.KilomolesPerHour;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: MolarFlowUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case MolarFlowUnits.MolesPerSecond: return this.value;
                case MolarFlowUnits.MolesPerMinute: return super.internalMultiply(this.value, 60);
                case MolarFlowUnits.MolesPerHour: return super.internalMultiply(this.value, 3600);
                case MolarFlowUnits.PoundMolesPerSecond: return super.internalDivide(this.value, 453.59237);
                case MolarFlowUnits.PoundMolesPerMinute: {
                    const v3 = super.internalDivide(this.value, 453.59237);
                    return super.internalMultiply(v3, 60);
                }
                case MolarFlowUnits.PoundMolesPerHour: {
                    const v3 = super.internalDivide(this.value, 453.59237);
                    return super.internalMultiply(v3, 3600);
                }
                case MolarFlowUnits.KilomolesPerSecond: return super.internalDivide(this.value, 1000);
                case MolarFlowUnits.KilomolesPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 1000);
                }
                case MolarFlowUnits.KilomolesPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case MolarFlowUnits.MolesPerSecond: return this.value;
            case MolarFlowUnits.MolesPerMinute: return this.value * 60;
            case MolarFlowUnits.MolesPerHour: return this.value * 3600;
            case MolarFlowUnits.PoundMolesPerSecond: return this.value / 453.59237;
            case MolarFlowUnits.PoundMolesPerMinute: return (this.value / 453.59237) * 60;
            case MolarFlowUnits.PoundMolesPerHour: return (this.value / 453.59237) * 3600;
            case MolarFlowUnits.KilomolesPerSecond: return (this.value) / 1000;
            case MolarFlowUnits.KilomolesPerMinute: return (this.value * 60) / 1000;
            case MolarFlowUnits.KilomolesPerHour: return (this.value * 3600) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: MolarFlowUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case MolarFlowUnits.MolesPerSecond: return value;
                case MolarFlowUnits.MolesPerMinute: return super.internalDivide(value, 60);
                case MolarFlowUnits.MolesPerHour: return super.internalDivide(value, 3600);
                case MolarFlowUnits.PoundMolesPerSecond: return super.internalMultiply(value, 453.59237);
                case MolarFlowUnits.PoundMolesPerMinute: {
                    const v3 = super.internalMultiply(value, 453.59237);
                    return super.internalDivide(v3, 60);
                }
                case MolarFlowUnits.PoundMolesPerHour: {
                    const v3 = super.internalMultiply(value, 453.59237);
                    return super.internalDivide(v3, 3600);
                }
                case MolarFlowUnits.KilomolesPerSecond: return super.internalMultiply(value, 1000);
                case MolarFlowUnits.KilomolesPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 1000);
                }
                case MolarFlowUnits.KilomolesPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case MolarFlowUnits.MolesPerSecond: return value;
            case MolarFlowUnits.MolesPerMinute: return value / 60;
            case MolarFlowUnits.MolesPerHour: return value / 3600;
            case MolarFlowUnits.PoundMolesPerSecond: return value * 453.59237;
            case MolarFlowUnits.PoundMolesPerMinute: return (value * 453.59237) / 60;
            case MolarFlowUnits.PoundMolesPerHour: return (value * 453.59237) / 3600;
            case MolarFlowUnits.KilomolesPerSecond: return (value) * 1000;
            case MolarFlowUnits.KilomolesPerMinute: return (value / 60) * 1000;
            case MolarFlowUnits.KilomolesPerHour: return (value / 3600) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the MolarFlow to string.
     * Note! the default format for MolarFlow is MolesPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the MolarFlow.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the MolarFlow.
     */
    public toString(unit: MolarFlowUnits = MolarFlowUnits.MolesPerSecond, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case MolarFlowUnits.MolesPerSecond:
                return super.truncateFractionDigits(this.MolesPerSecond, options as ToStringOptions) + ` mol/s`;
            case MolarFlowUnits.MolesPerMinute:
                return super.truncateFractionDigits(this.MolesPerMinute, options as ToStringOptions) + ` mol/min`;
            case MolarFlowUnits.MolesPerHour:
                return super.truncateFractionDigits(this.MolesPerHour, options as ToStringOptions) + ` kmol/h`;
            case MolarFlowUnits.PoundMolesPerSecond:
                return super.truncateFractionDigits(this.PoundMolesPerSecond, options as ToStringOptions) + ` lbmol/s`;
            case MolarFlowUnits.PoundMolesPerMinute:
                return super.truncateFractionDigits(this.PoundMolesPerMinute, options as ToStringOptions) + ` lbmol/min`;
            case MolarFlowUnits.PoundMolesPerHour:
                return super.truncateFractionDigits(this.PoundMolesPerHour, options as ToStringOptions) + ` lbmol/h`;
            case MolarFlowUnits.KilomolesPerSecond:
                return super.truncateFractionDigits(this.KilomolesPerSecond, options as ToStringOptions) + ` kmol/s`;
            case MolarFlowUnits.KilomolesPerMinute:
                return super.truncateFractionDigits(this.KilomolesPerMinute, options as ToStringOptions) + ` kmol/min`;
            case MolarFlowUnits.KilomolesPerHour:
                return super.truncateFractionDigits(this.KilomolesPerHour, options as ToStringOptions) + ` kkmol/h`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get MolarFlow unit abbreviation.
     * Note! the default abbreviation for MolarFlow is MolesPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the MolarFlow.
     * @returns The abbreviation string of MolarFlow.
     */
    public getUnitAbbreviation(unitAbbreviation: MolarFlowUnits = MolarFlowUnits.MolesPerSecond): string {

        switch (unitAbbreviation) {
            
            case MolarFlowUnits.MolesPerSecond:
                return `mol/s`;
            case MolarFlowUnits.MolesPerMinute:
                return `mol/min`;
            case MolarFlowUnits.MolesPerHour:
                return `kmol/h`;
            case MolarFlowUnits.PoundMolesPerSecond:
                return `lbmol/s`;
            case MolarFlowUnits.PoundMolesPerMinute:
                return `lbmol/min`;
            case MolarFlowUnits.PoundMolesPerHour:
                return `lbmol/h`;
            case MolarFlowUnits.KilomolesPerSecond:
                return `kmol/s`;
            case MolarFlowUnits.KilomolesPerMinute:
                return `kmol/min`;
            case MolarFlowUnits.KilomolesPerHour:
                return `kkmol/h`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given MolarFlow are equals to the current MolarFlow.
     * @param molarFlow The other MolarFlow.
     * @returns True if the given MolarFlow are equal to the current MolarFlow.
     */
    public equals(molarFlow: MolarFlow): boolean {
        return super.internalEquals(this.value, molarFlow.BaseValue);
    }

    /**
     * Compare the given MolarFlow against the current MolarFlow.
     * @param molarFlow The other MolarFlow.
     * @returns 0 if they are equal, -1 if the current MolarFlow is less then other, 1 if the current MolarFlow is greater then other.
     */
    public compareTo(molarFlow: MolarFlow): number {
        return super.internalCompareTo(this.value, molarFlow.BaseValue);
    }

    /**
     * Add the given MolarFlow with the current MolarFlow.
     * @param molarFlow The other MolarFlow.
     * @returns A new MolarFlow instance with the results.
     */
    public add(molarFlow: MolarFlow): MolarFlow {
        return new MolarFlow(super.internalAdd(this.value, molarFlow.BaseValue))
    }

    /**
     * Subtract the given MolarFlow with the current MolarFlow.
     * @param molarFlow The other MolarFlow.
     * @returns A new MolarFlow instance with the results.
     */
    public subtract(molarFlow: MolarFlow): MolarFlow {
        return new MolarFlow(super.internalSubtract(this.value, molarFlow.BaseValue))
    }

    /**
     * Multiply the given MolarFlow with the current MolarFlow.
     * @param molarFlow The other MolarFlow.
     * @returns A new MolarFlow instance with the results.
     */
    public multiply(molarFlow: MolarFlow): MolarFlow {
        return new MolarFlow(super.internalMultiply(this.value, molarFlow.BaseValue))
    }

    /**
     * Divide the given MolarFlow with the current MolarFlow.
     * @param molarFlow The other MolarFlow.
     * @returns A new MolarFlow instance with the results.
     */
    public divide(molarFlow: MolarFlow): MolarFlow {
        return new MolarFlow(super.internalDivide(this.value, molarFlow.BaseValue))
    }

    /**
     * Modulo the given MolarFlow with the current MolarFlow.
     * @param molarFlow The other MolarFlow.
     * @returns A new MolarFlow instance with the results.
     */
    public modulo(molarFlow: MolarFlow): MolarFlow {
        return new MolarFlow(super.internalModulo(this.value, molarFlow.BaseValue))
    }

    /**
     * Pow the given MolarFlow with the current MolarFlow.
     * @param molarFlow The other MolarFlow.
     * @returns A new MolarFlow instance with the results.
     */
    public pow(molarFlow: MolarFlow): MolarFlow {
        return new MolarFlow(super.internalPow(this.value, molarFlow.BaseValue))
    }
}
