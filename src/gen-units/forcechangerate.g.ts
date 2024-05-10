import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a ForceChangeRate */
export interface ForceChangeRateDto {
    /** The value of the ForceChangeRate */
    value: number;
    /**  The specific unit that the ForceChangeRate value is representing */
    unit: ForceChangeRateUnits;
}

/** ForceChangeRateUnits enumeration */
export enum ForceChangeRateUnits {
    /** */
    NewtonsPerMinute = "NewtonPerMinute",
    /** */
    NewtonsPerSecond = "NewtonPerSecond",
    /** */
    PoundsForcePerMinute = "PoundForcePerMinute",
    /** */
    PoundsForcePerSecond = "PoundForcePerSecond",
    /** */
    DecanewtonsPerMinute = "DecanewtonPerMinute",
    /** */
    KilonewtonsPerMinute = "KilonewtonPerMinute",
    /** */
    NanonewtonsPerSecond = "NanonewtonPerSecond",
    /** */
    MicronewtonsPerSecond = "MicronewtonPerSecond",
    /** */
    MillinewtonsPerSecond = "MillinewtonPerSecond",
    /** */
    CentinewtonsPerSecond = "CentinewtonPerSecond",
    /** */
    DecinewtonsPerSecond = "DecinewtonPerSecond",
    /** */
    DecanewtonsPerSecond = "DecanewtonPerSecond",
    /** */
    KilonewtonsPerSecond = "KilonewtonPerSecond",
    /** */
    KilopoundsForcePerMinute = "KilopoundForcePerMinute",
    /** */
    KilopoundsForcePerSecond = "KilopoundForcePerSecond"
}

/** Force change rate is the ratio of the force change to the time during which the change occurred (value of force changes per unit time). */
export class ForceChangeRate extends BaseUnit {
    protected value: number;
    private newtonsperminuteLazy: number | null = null;
    private newtonspersecondLazy: number | null = null;
    private poundsforceperminuteLazy: number | null = null;
    private poundsforcepersecondLazy: number | null = null;
    private decanewtonsperminuteLazy: number | null = null;
    private kilonewtonsperminuteLazy: number | null = null;
    private nanonewtonspersecondLazy: number | null = null;
    private micronewtonspersecondLazy: number | null = null;
    private millinewtonspersecondLazy: number | null = null;
    private centinewtonspersecondLazy: number | null = null;
    private decinewtonspersecondLazy: number | null = null;
    private decanewtonspersecondLazy: number | null = null;
    private kilonewtonspersecondLazy: number | null = null;
    private kilopoundsforceperminuteLazy: number | null = null;
    private kilopoundsforcepersecondLazy: number | null = null;

    /**
     * Create a new ForceChangeRate.
     * @param value The value.
     * @param fromUnit The ‘ForceChangeRate’ unit to create from.
     * The default unit is NewtonsPerSecond
     */
    public constructor(value: number, fromUnit: ForceChangeRateUnits = ForceChangeRateUnits.NewtonsPerSecond) {

        super();
        if (Number.isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ForceChangeRate is NewtonsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get NewtonsPerMinute(): number {
        if(this.newtonsperminuteLazy !== null){
            return this.newtonsperminuteLazy;
        }
        return this.newtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.NewtonsPerMinute);
    }

    /** */
    public get NewtonsPerSecond(): number {
        if(this.newtonspersecondLazy !== null){
            return this.newtonspersecondLazy;
        }
        return this.newtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.NewtonsPerSecond);
    }

    /** */
    public get PoundsForcePerMinute(): number {
        if(this.poundsforceperminuteLazy !== null){
            return this.poundsforceperminuteLazy;
        }
        return this.poundsforceperminuteLazy = this.convertFromBase(ForceChangeRateUnits.PoundsForcePerMinute);
    }

    /** */
    public get PoundsForcePerSecond(): number {
        if(this.poundsforcepersecondLazy !== null){
            return this.poundsforcepersecondLazy;
        }
        return this.poundsforcepersecondLazy = this.convertFromBase(ForceChangeRateUnits.PoundsForcePerSecond);
    }

    /** */
    public get DecanewtonsPerMinute(): number {
        if(this.decanewtonsperminuteLazy !== null){
            return this.decanewtonsperminuteLazy;
        }
        return this.decanewtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.DecanewtonsPerMinute);
    }

    /** */
    public get KilonewtonsPerMinute(): number {
        if(this.kilonewtonsperminuteLazy !== null){
            return this.kilonewtonsperminuteLazy;
        }
        return this.kilonewtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.KilonewtonsPerMinute);
    }

    /** */
    public get NanonewtonsPerSecond(): number {
        if(this.nanonewtonspersecondLazy !== null){
            return this.nanonewtonspersecondLazy;
        }
        return this.nanonewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.NanonewtonsPerSecond);
    }

    /** */
    public get MicronewtonsPerSecond(): number {
        if(this.micronewtonspersecondLazy !== null){
            return this.micronewtonspersecondLazy;
        }
        return this.micronewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.MicronewtonsPerSecond);
    }

    /** */
    public get MillinewtonsPerSecond(): number {
        if(this.millinewtonspersecondLazy !== null){
            return this.millinewtonspersecondLazy;
        }
        return this.millinewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.MillinewtonsPerSecond);
    }

    /** */
    public get CentinewtonsPerSecond(): number {
        if(this.centinewtonspersecondLazy !== null){
            return this.centinewtonspersecondLazy;
        }
        return this.centinewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.CentinewtonsPerSecond);
    }

    /** */
    public get DecinewtonsPerSecond(): number {
        if(this.decinewtonspersecondLazy !== null){
            return this.decinewtonspersecondLazy;
        }
        return this.decinewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.DecinewtonsPerSecond);
    }

    /** */
    public get DecanewtonsPerSecond(): number {
        if(this.decanewtonspersecondLazy !== null){
            return this.decanewtonspersecondLazy;
        }
        return this.decanewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.DecanewtonsPerSecond);
    }

    /** */
    public get KilonewtonsPerSecond(): number {
        if(this.kilonewtonspersecondLazy !== null){
            return this.kilonewtonspersecondLazy;
        }
        return this.kilonewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.KilonewtonsPerSecond);
    }

    /** */
    public get KilopoundsForcePerMinute(): number {
        if(this.kilopoundsforceperminuteLazy !== null){
            return this.kilopoundsforceperminuteLazy;
        }
        return this.kilopoundsforceperminuteLazy = this.convertFromBase(ForceChangeRateUnits.KilopoundsForcePerMinute);
    }

    /** */
    public get KilopoundsForcePerSecond(): number {
        if(this.kilopoundsforcepersecondLazy !== null){
            return this.kilopoundsforcepersecondLazy;
        }
        return this.kilopoundsforcepersecondLazy = this.convertFromBase(ForceChangeRateUnits.KilopoundsForcePerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a NewtonsPerMinute
     *
     * @param value The unit as NewtonsPerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromNewtonsPerMinute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerMinute);
    }

    /**
     * Create a new ForceChangeRate instance from a NewtonsPerSecond
     *
     * @param value The unit as NewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromNewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a PoundsForcePerMinute
     *
     * @param value The unit as PoundsForcePerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromPoundsForcePerMinute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.PoundsForcePerMinute);
    }

    /**
     * Create a new ForceChangeRate instance from a PoundsForcePerSecond
     *
     * @param value The unit as PoundsForcePerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromPoundsForcePerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.PoundsForcePerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a DecanewtonsPerMinute
     *
     * @param value The unit as DecanewtonsPerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromDecanewtonsPerMinute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecanewtonsPerMinute);
    }

    /**
     * Create a new ForceChangeRate instance from a KilonewtonsPerMinute
     *
     * @param value The unit as KilonewtonsPerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromKilonewtonsPerMinute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.KilonewtonsPerMinute);
    }

    /**
     * Create a new ForceChangeRate instance from a NanonewtonsPerSecond
     *
     * @param value The unit as NanonewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromNanonewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.NanonewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a MicronewtonsPerSecond
     *
     * @param value The unit as MicronewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromMicronewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.MicronewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a MillinewtonsPerSecond
     *
     * @param value The unit as MillinewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromMillinewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.MillinewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a CentinewtonsPerSecond
     *
     * @param value The unit as CentinewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromCentinewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.CentinewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a DecinewtonsPerSecond
     *
     * @param value The unit as DecinewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromDecinewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecinewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a DecanewtonsPerSecond
     *
     * @param value The unit as DecanewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromDecanewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecanewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a KilonewtonsPerSecond
     *
     * @param value The unit as KilonewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromKilonewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.KilonewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a KilopoundsForcePerMinute
     *
     * @param value The unit as KilopoundsForcePerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromKilopoundsForcePerMinute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.KilopoundsForcePerMinute);
    }

    /**
     * Create a new ForceChangeRate instance from a KilopoundsForcePerSecond
     *
     * @param value The unit as KilopoundsForcePerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromKilopoundsForcePerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.KilopoundsForcePerSecond);
    }

    /**
     * Gets the base unit enumeration associated with ForceChangeRate
     * @returns The unit enumeration that can be used to interact with this type
     */
    public static getUnitEnum(): typeof ForceChangeRateUnits {
        return ForceChangeRateUnits;
    }

    /**
     * Create API DTO represent a ForceChangeRate unit.
     * @param holdInUnit The specific ForceChangeRate unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ForceChangeRateUnits = ForceChangeRateUnits.NewtonsPerSecond): ForceChangeRateDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ForceChangeRate unit from an API DTO representation.
     * @param dtoForceChangeRate The ForceChangeRate API DTO representation
     */
    public static FromDto(dtoForceChangeRate: ForceChangeRateDto): ForceChangeRate {
        return new ForceChangeRate(dtoForceChangeRate.value, dtoForceChangeRate.unit);
    }

    /**
     * Convert ForceChangeRate to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ForceChangeRateUnits): number {
        switch (toUnit) {
            case ForceChangeRateUnits.NewtonsPerMinute: return this.NewtonsPerMinute;
            case ForceChangeRateUnits.NewtonsPerSecond: return this.NewtonsPerSecond;
            case ForceChangeRateUnits.PoundsForcePerMinute: return this.PoundsForcePerMinute;
            case ForceChangeRateUnits.PoundsForcePerSecond: return this.PoundsForcePerSecond;
            case ForceChangeRateUnits.DecanewtonsPerMinute: return this.DecanewtonsPerMinute;
            case ForceChangeRateUnits.KilonewtonsPerMinute: return this.KilonewtonsPerMinute;
            case ForceChangeRateUnits.NanonewtonsPerSecond: return this.NanonewtonsPerSecond;
            case ForceChangeRateUnits.MicronewtonsPerSecond: return this.MicronewtonsPerSecond;
            case ForceChangeRateUnits.MillinewtonsPerSecond: return this.MillinewtonsPerSecond;
            case ForceChangeRateUnits.CentinewtonsPerSecond: return this.CentinewtonsPerSecond;
            case ForceChangeRateUnits.DecinewtonsPerSecond: return this.DecinewtonsPerSecond;
            case ForceChangeRateUnits.DecanewtonsPerSecond: return this.DecanewtonsPerSecond;
            case ForceChangeRateUnits.KilonewtonsPerSecond: return this.KilonewtonsPerSecond;
            case ForceChangeRateUnits.KilopoundsForcePerMinute: return this.KilopoundsForcePerMinute;
            case ForceChangeRateUnits.KilopoundsForcePerSecond: return this.KilopoundsForcePerSecond;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: ForceChangeRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ForceChangeRateUnits.NewtonsPerMinute: return super.internalMultiply(this.value, 60);
                case ForceChangeRateUnits.NewtonsPerSecond: return this.value;
                case ForceChangeRateUnits.PoundsForcePerMinute: {
                    const v3 = super.internalDivide(this.value, 4.4482216152605095551842641431421);
                    return super.internalMultiply(v3, 60);
                }
                case ForceChangeRateUnits.PoundsForcePerSecond: return super.internalDivide(this.value, 4.4482216152605095551842641431421);
                case ForceChangeRateUnits.DecanewtonsPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 10);
                }
                case ForceChangeRateUnits.KilonewtonsPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 1000);
                }
                case ForceChangeRateUnits.NanonewtonsPerSecond: return super.internalDivide(this.value, 1e-9);
                case ForceChangeRateUnits.MicronewtonsPerSecond: return super.internalDivide(this.value, 0.000001);
                case ForceChangeRateUnits.MillinewtonsPerSecond: return super.internalDivide(this.value, 0.001);
                case ForceChangeRateUnits.CentinewtonsPerSecond: return super.internalDivide(this.value, 0.01);
                case ForceChangeRateUnits.DecinewtonsPerSecond: return super.internalDivide(this.value, 0.1);
                case ForceChangeRateUnits.DecanewtonsPerSecond: return super.internalDivide(this.value, 10);
                case ForceChangeRateUnits.KilonewtonsPerSecond: return super.internalDivide(this.value, 1000);
                case ForceChangeRateUnits.KilopoundsForcePerMinute: {
                    const v3 = super.internalDivide(this.value, 4.4482216152605095551842641431421);
                    const v5 = super.internalMultiply(v3, 60);
                    return super.internalDivide(v5, 1000);
                }
                case ForceChangeRateUnits.KilopoundsForcePerSecond: {
                    const v3 = super.internalDivide(this.value, 4.4482216152605095551842641431421);
                    return super.internalDivide(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ForceChangeRateUnits.NewtonsPerMinute: return this.value * 60;
            case ForceChangeRateUnits.NewtonsPerSecond: return this.value;
            case ForceChangeRateUnits.PoundsForcePerMinute: return this.value / 4.4482216152605095551842641431421 * 60;
            case ForceChangeRateUnits.PoundsForcePerSecond: return this.value / 4.4482216152605095551842641431421;
            case ForceChangeRateUnits.DecanewtonsPerMinute: return (this.value * 60) / 10;
            case ForceChangeRateUnits.KilonewtonsPerMinute: return (this.value * 60) / 1000;
            case ForceChangeRateUnits.NanonewtonsPerSecond: return (this.value) / 1e-9;
            case ForceChangeRateUnits.MicronewtonsPerSecond: return (this.value) / 0.000001;
            case ForceChangeRateUnits.MillinewtonsPerSecond: return (this.value) / 0.001;
            case ForceChangeRateUnits.CentinewtonsPerSecond: return (this.value) / 0.01;
            case ForceChangeRateUnits.DecinewtonsPerSecond: return (this.value) / 0.1;
            case ForceChangeRateUnits.DecanewtonsPerSecond: return (this.value) / 10;
            case ForceChangeRateUnits.KilonewtonsPerSecond: return (this.value) / 1000;
            case ForceChangeRateUnits.KilopoundsForcePerMinute: return (this.value / 4.4482216152605095551842641431421 * 60) / 1000;
            case ForceChangeRateUnits.KilopoundsForcePerSecond: return (this.value / 4.4482216152605095551842641431421) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ForceChangeRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ForceChangeRateUnits.NewtonsPerMinute: return super.internalDivide(value, 60);
                case ForceChangeRateUnits.NewtonsPerSecond: return value;
                case ForceChangeRateUnits.PoundsForcePerMinute: {
                    const v4 = super.internalDivide(4.4482216152605095551842641431421, 60);
                    return super.internalMultiply(value, v4);
                }
                case ForceChangeRateUnits.PoundsForcePerSecond: return super.internalMultiply(value, 4.4482216152605095551842641431421);
                case ForceChangeRateUnits.DecanewtonsPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 10);
                }
                case ForceChangeRateUnits.KilonewtonsPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 1000);
                }
                case ForceChangeRateUnits.NanonewtonsPerSecond: return super.internalMultiply(value, 1e-9);
                case ForceChangeRateUnits.MicronewtonsPerSecond: return super.internalMultiply(value, 0.000001);
                case ForceChangeRateUnits.MillinewtonsPerSecond: return super.internalMultiply(value, 0.001);
                case ForceChangeRateUnits.CentinewtonsPerSecond: return super.internalMultiply(value, 0.01);
                case ForceChangeRateUnits.DecinewtonsPerSecond: return super.internalMultiply(value, 0.1);
                case ForceChangeRateUnits.DecanewtonsPerSecond: return super.internalMultiply(value, 10);
                case ForceChangeRateUnits.KilonewtonsPerSecond: return super.internalMultiply(value, 1000);
                case ForceChangeRateUnits.KilopoundsForcePerMinute: {
                    const v4 = super.internalDivide(4.4482216152605095551842641431421, 60);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000);
                }
                case ForceChangeRateUnits.KilopoundsForcePerSecond: {
                    const v3 = super.internalMultiply(value, 4.4482216152605095551842641431421);
                    return super.internalMultiply(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ForceChangeRateUnits.NewtonsPerMinute: return value / 60;
            case ForceChangeRateUnits.NewtonsPerSecond: return value;
            case ForceChangeRateUnits.PoundsForcePerMinute: return value * 4.4482216152605095551842641431421 / 60;
            case ForceChangeRateUnits.PoundsForcePerSecond: return value * 4.4482216152605095551842641431421;
            case ForceChangeRateUnits.DecanewtonsPerMinute: return (value / 60) * 10;
            case ForceChangeRateUnits.KilonewtonsPerMinute: return (value / 60) * 1000;
            case ForceChangeRateUnits.NanonewtonsPerSecond: return (value) * 1e-9;
            case ForceChangeRateUnits.MicronewtonsPerSecond: return (value) * 0.000001;
            case ForceChangeRateUnits.MillinewtonsPerSecond: return (value) * 0.001;
            case ForceChangeRateUnits.CentinewtonsPerSecond: return (value) * 0.01;
            case ForceChangeRateUnits.DecinewtonsPerSecond: return (value) * 0.1;
            case ForceChangeRateUnits.DecanewtonsPerSecond: return (value) * 10;
            case ForceChangeRateUnits.KilonewtonsPerSecond: return (value) * 1000;
            case ForceChangeRateUnits.KilopoundsForcePerMinute: return (value * 4.4482216152605095551842641431421 / 60) * 1000;
            case ForceChangeRateUnits.KilopoundsForcePerSecond: return (value * 4.4482216152605095551842641431421) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ForceChangeRate to string.
     * Note! the default format for ForceChangeRate is NewtonsPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ForceChangeRate.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the ForceChangeRate.
     */
    public toString(unit: ForceChangeRateUnits = ForceChangeRateUnits.NewtonsPerSecond, fractionalDigits?: number): string {

        switch (unit) {
            
            case ForceChangeRateUnits.NewtonsPerMinute:
                return super.truncateFractionDigits(this.NewtonsPerMinute, fractionalDigits) + ` N/min`;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return super.truncateFractionDigits(this.NewtonsPerSecond, fractionalDigits) + ` N/s`;
            case ForceChangeRateUnits.PoundsForcePerMinute:
                return super.truncateFractionDigits(this.PoundsForcePerMinute, fractionalDigits) + ` lbf/min`;
            case ForceChangeRateUnits.PoundsForcePerSecond:
                return super.truncateFractionDigits(this.PoundsForcePerSecond, fractionalDigits) + ` lbf/s`;
            case ForceChangeRateUnits.DecanewtonsPerMinute:
                return super.truncateFractionDigits(this.DecanewtonsPerMinute, fractionalDigits) + ` daN/min`;
            case ForceChangeRateUnits.KilonewtonsPerMinute:
                return super.truncateFractionDigits(this.KilonewtonsPerMinute, fractionalDigits) + ` kN/min`;
            case ForceChangeRateUnits.NanonewtonsPerSecond:
                return super.truncateFractionDigits(this.NanonewtonsPerSecond, fractionalDigits) + ` nN/s`;
            case ForceChangeRateUnits.MicronewtonsPerSecond:
                return super.truncateFractionDigits(this.MicronewtonsPerSecond, fractionalDigits) + ` μN/s`;
            case ForceChangeRateUnits.MillinewtonsPerSecond:
                return super.truncateFractionDigits(this.MillinewtonsPerSecond, fractionalDigits) + ` mN/s`;
            case ForceChangeRateUnits.CentinewtonsPerSecond:
                return super.truncateFractionDigits(this.CentinewtonsPerSecond, fractionalDigits) + ` cN/s`;
            case ForceChangeRateUnits.DecinewtonsPerSecond:
                return super.truncateFractionDigits(this.DecinewtonsPerSecond, fractionalDigits) + ` dN/s`;
            case ForceChangeRateUnits.DecanewtonsPerSecond:
                return super.truncateFractionDigits(this.DecanewtonsPerSecond, fractionalDigits) + ` daN/s`;
            case ForceChangeRateUnits.KilonewtonsPerSecond:
                return super.truncateFractionDigits(this.KilonewtonsPerSecond, fractionalDigits) + ` kN/s`;
            case ForceChangeRateUnits.KilopoundsForcePerMinute:
                return super.truncateFractionDigits(this.KilopoundsForcePerMinute, fractionalDigits) + ` klbf/min`;
            case ForceChangeRateUnits.KilopoundsForcePerSecond:
                return super.truncateFractionDigits(this.KilopoundsForcePerSecond, fractionalDigits) + ` klbf/s`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ForceChangeRate unit abbreviation.
     * Note! the default abbreviation for ForceChangeRate is NewtonsPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ForceChangeRate.
     * @returns The abbreviation string of ForceChangeRate.
     */
    public getUnitAbbreviation(unitAbbreviation: ForceChangeRateUnits = ForceChangeRateUnits.NewtonsPerSecond): string {

        switch (unitAbbreviation) {
            
            case ForceChangeRateUnits.NewtonsPerMinute:
                return `N/min`;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return `N/s`;
            case ForceChangeRateUnits.PoundsForcePerMinute:
                return `lbf/min`;
            case ForceChangeRateUnits.PoundsForcePerSecond:
                return `lbf/s`;
            case ForceChangeRateUnits.DecanewtonsPerMinute:
                return `daN/min`;
            case ForceChangeRateUnits.KilonewtonsPerMinute:
                return `kN/min`;
            case ForceChangeRateUnits.NanonewtonsPerSecond:
                return `nN/s`;
            case ForceChangeRateUnits.MicronewtonsPerSecond:
                return `μN/s`;
            case ForceChangeRateUnits.MillinewtonsPerSecond:
                return `mN/s`;
            case ForceChangeRateUnits.CentinewtonsPerSecond:
                return `cN/s`;
            case ForceChangeRateUnits.DecinewtonsPerSecond:
                return `dN/s`;
            case ForceChangeRateUnits.DecanewtonsPerSecond:
                return `daN/s`;
            case ForceChangeRateUnits.KilonewtonsPerSecond:
                return `kN/s`;
            case ForceChangeRateUnits.KilopoundsForcePerMinute:
                return `klbf/min`;
            case ForceChangeRateUnits.KilopoundsForcePerSecond:
                return `klbf/s`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ForceChangeRate are equals to the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns True if the given ForceChangeRate are equal to the current ForceChangeRate.
     */
    public equals(forceChangeRate: ForceChangeRate): boolean {
        return super.internalEquals(this.value, forceChangeRate.BaseValue);
    }

    /**
     * Compare the given ForceChangeRate against the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns 0 if they are equal, -1 if the current ForceChangeRate is less then other, 1 if the current ForceChangeRate is greater then other.
     */
    public compareTo(forceChangeRate: ForceChangeRate): number {
        return super.internalCompareTo(this.value, forceChangeRate.BaseValue);
    }

    /**
     * Add the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    public add(forceChangeRate: ForceChangeRate): ForceChangeRate {
        return new ForceChangeRate(super.internalAdd(this.value, forceChangeRate.BaseValue))
    }

    /**
     * Subtract the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    public subtract(forceChangeRate: ForceChangeRate): ForceChangeRate {
        return new ForceChangeRate(super.internalSubtract(this.value, forceChangeRate.BaseValue))
    }

    /**
     * Multiply the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    public multiply(forceChangeRate: ForceChangeRate): ForceChangeRate {
        return new ForceChangeRate(super.internalMultiply(this.value, forceChangeRate.BaseValue))
    }

    /**
     * Divide the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    public divide(forceChangeRate: ForceChangeRate): ForceChangeRate {
        return new ForceChangeRate(super.internalDivide(this.value, forceChangeRate.BaseValue))
    }

    /**
     * Modulo the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    public modulo(forceChangeRate: ForceChangeRate): ForceChangeRate {
        return new ForceChangeRate(super.internalModulo(this.value, forceChangeRate.BaseValue))
    }

    /**
     * Pow the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    public pow(forceChangeRate: ForceChangeRate): ForceChangeRate {
        return new ForceChangeRate(super.internalPow(this.value, forceChangeRate.BaseValue))
    }
}
