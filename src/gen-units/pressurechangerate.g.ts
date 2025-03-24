import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a PressureChangeRate */
export interface PressureChangeRateDto {
    /** The value of the PressureChangeRate */
    value: number;
    /**  The specific unit that the PressureChangeRate value is representing */
    unit: PressureChangeRateUnits;
}

/** PressureChangeRateUnits enumeration */
export enum PressureChangeRateUnits {
    /** */
    PascalsPerSecond = "PascalPerSecond",
    /** */
    PascalsPerMinute = "PascalPerMinute",
    /** */
    MillimetersOfMercuryPerSecond = "MillimeterOfMercuryPerSecond",
    /** */
    AtmospheresPerSecond = "AtmospherePerSecond",
    /** */
    PoundsForcePerSquareInchPerSecond = "PoundForcePerSquareInchPerSecond",
    /** */
    PoundsForcePerSquareInchPerMinute = "PoundForcePerSquareInchPerMinute",
    /** */
    BarsPerSecond = "BarPerSecond",
    /** */
    BarsPerMinute = "BarPerMinute",
    /** */
    KilopascalsPerSecond = "KilopascalPerSecond",
    /** */
    MegapascalsPerSecond = "MegapascalPerSecond",
    /** */
    KilopascalsPerMinute = "KilopascalPerMinute",
    /** */
    MegapascalsPerMinute = "MegapascalPerMinute",
    /** */
    KilopoundsForcePerSquareInchPerSecond = "KilopoundForcePerSquareInchPerSecond",
    /** */
    MegapoundsForcePerSquareInchPerSecond = "MegapoundForcePerSquareInchPerSecond",
    /** */
    KilopoundsForcePerSquareInchPerMinute = "KilopoundForcePerSquareInchPerMinute",
    /** */
    MegapoundsForcePerSquareInchPerMinute = "MegapoundForcePerSquareInchPerMinute",
    /** */
    MillibarsPerSecond = "MillibarPerSecond",
    /** */
    MillibarsPerMinute = "MillibarPerMinute"
}

/** Pressure change rate is the ratio of the pressure change to the time during which the change occurred (value of pressure changes per unit time). */
export class PressureChangeRate extends BaseUnit {
    protected value: number;
    private pascalspersecondLazy: number | null = null;
    private pascalsperminuteLazy: number | null = null;
    private millimetersofmercurypersecondLazy: number | null = null;
    private atmospherespersecondLazy: number | null = null;
    private poundsforcepersquareinchpersecondLazy: number | null = null;
    private poundsforcepersquareinchperminuteLazy: number | null = null;
    private barspersecondLazy: number | null = null;
    private barsperminuteLazy: number | null = null;
    private kilopascalspersecondLazy: number | null = null;
    private megapascalspersecondLazy: number | null = null;
    private kilopascalsperminuteLazy: number | null = null;
    private megapascalsperminuteLazy: number | null = null;
    private kilopoundsforcepersquareinchpersecondLazy: number | null = null;
    private megapoundsforcepersquareinchpersecondLazy: number | null = null;
    private kilopoundsforcepersquareinchperminuteLazy: number | null = null;
    private megapoundsforcepersquareinchperminuteLazy: number | null = null;
    private millibarspersecondLazy: number | null = null;
    private millibarsperminuteLazy: number | null = null;

    /**
     * Create a new PressureChangeRate.
     * @param value The value.
     * @param fromUnit The ‘PressureChangeRate’ unit to create from.
     * The default unit is PascalsPerSecond
     */
    public constructor(value: number, fromUnit: PressureChangeRateUnits = PressureChangeRateUnits.PascalsPerSecond) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of PressureChangeRate is PascalsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): PressureChangeRateUnits.PascalsPerSecond {
        return PressureChangeRateUnits.PascalsPerSecond
    }

    /** */
    public get PascalsPerSecond(): number {
        if(this.pascalspersecondLazy !== null){
            return this.pascalspersecondLazy;
        }
        return this.pascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.PascalsPerSecond);
    }

    /** */
    public get PascalsPerMinute(): number {
        if(this.pascalsperminuteLazy !== null){
            return this.pascalsperminuteLazy;
        }
        return this.pascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.PascalsPerMinute);
    }

    /** */
    public get MillimetersOfMercuryPerSecond(): number {
        if(this.millimetersofmercurypersecondLazy !== null){
            return this.millimetersofmercurypersecondLazy;
        }
        return this.millimetersofmercurypersecondLazy = this.convertFromBase(PressureChangeRateUnits.MillimetersOfMercuryPerSecond);
    }

    /** */
    public get AtmospheresPerSecond(): number {
        if(this.atmospherespersecondLazy !== null){
            return this.atmospherespersecondLazy;
        }
        return this.atmospherespersecondLazy = this.convertFromBase(PressureChangeRateUnits.AtmospheresPerSecond);
    }

    /** */
    public get PoundsForcePerSquareInchPerSecond(): number {
        if(this.poundsforcepersquareinchpersecondLazy !== null){
            return this.poundsforcepersquareinchpersecondLazy;
        }
        return this.poundsforcepersquareinchpersecondLazy = this.convertFromBase(PressureChangeRateUnits.PoundsForcePerSquareInchPerSecond);
    }

    /** */
    public get PoundsForcePerSquareInchPerMinute(): number {
        if(this.poundsforcepersquareinchperminuteLazy !== null){
            return this.poundsforcepersquareinchperminuteLazy;
        }
        return this.poundsforcepersquareinchperminuteLazy = this.convertFromBase(PressureChangeRateUnits.PoundsForcePerSquareInchPerMinute);
    }

    /** */
    public get BarsPerSecond(): number {
        if(this.barspersecondLazy !== null){
            return this.barspersecondLazy;
        }
        return this.barspersecondLazy = this.convertFromBase(PressureChangeRateUnits.BarsPerSecond);
    }

    /** */
    public get BarsPerMinute(): number {
        if(this.barsperminuteLazy !== null){
            return this.barsperminuteLazy;
        }
        return this.barsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.BarsPerMinute);
    }

    /** */
    public get KilopascalsPerSecond(): number {
        if(this.kilopascalspersecondLazy !== null){
            return this.kilopascalspersecondLazy;
        }
        return this.kilopascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.KilopascalsPerSecond);
    }

    /** */
    public get MegapascalsPerSecond(): number {
        if(this.megapascalspersecondLazy !== null){
            return this.megapascalspersecondLazy;
        }
        return this.megapascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.MegapascalsPerSecond);
    }

    /** */
    public get KilopascalsPerMinute(): number {
        if(this.kilopascalsperminuteLazy !== null){
            return this.kilopascalsperminuteLazy;
        }
        return this.kilopascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.KilopascalsPerMinute);
    }

    /** */
    public get MegapascalsPerMinute(): number {
        if(this.megapascalsperminuteLazy !== null){
            return this.megapascalsperminuteLazy;
        }
        return this.megapascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.MegapascalsPerMinute);
    }

    /** */
    public get KilopoundsForcePerSquareInchPerSecond(): number {
        if(this.kilopoundsforcepersquareinchpersecondLazy !== null){
            return this.kilopoundsforcepersquareinchpersecondLazy;
        }
        return this.kilopoundsforcepersquareinchpersecondLazy = this.convertFromBase(PressureChangeRateUnits.KilopoundsForcePerSquareInchPerSecond);
    }

    /** */
    public get MegapoundsForcePerSquareInchPerSecond(): number {
        if(this.megapoundsforcepersquareinchpersecondLazy !== null){
            return this.megapoundsforcepersquareinchpersecondLazy;
        }
        return this.megapoundsforcepersquareinchpersecondLazy = this.convertFromBase(PressureChangeRateUnits.MegapoundsForcePerSquareInchPerSecond);
    }

    /** */
    public get KilopoundsForcePerSquareInchPerMinute(): number {
        if(this.kilopoundsforcepersquareinchperminuteLazy !== null){
            return this.kilopoundsforcepersquareinchperminuteLazy;
        }
        return this.kilopoundsforcepersquareinchperminuteLazy = this.convertFromBase(PressureChangeRateUnits.KilopoundsForcePerSquareInchPerMinute);
    }

    /** */
    public get MegapoundsForcePerSquareInchPerMinute(): number {
        if(this.megapoundsforcepersquareinchperminuteLazy !== null){
            return this.megapoundsforcepersquareinchperminuteLazy;
        }
        return this.megapoundsforcepersquareinchperminuteLazy = this.convertFromBase(PressureChangeRateUnits.MegapoundsForcePerSquareInchPerMinute);
    }

    /** */
    public get MillibarsPerSecond(): number {
        if(this.millibarspersecondLazy !== null){
            return this.millibarspersecondLazy;
        }
        return this.millibarspersecondLazy = this.convertFromBase(PressureChangeRateUnits.MillibarsPerSecond);
    }

    /** */
    public get MillibarsPerMinute(): number {
        if(this.millibarsperminuteLazy !== null){
            return this.millibarsperminuteLazy;
        }
        return this.millibarsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.MillibarsPerMinute);
    }

    /**
     * Create a new PressureChangeRate instance from a PascalsPerSecond
     *
     * @param value The unit as PascalsPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromPascalsPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.PascalsPerSecond);
    }

    /**
     * Create a new PressureChangeRate instance from a PascalsPerMinute
     *
     * @param value The unit as PascalsPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromPascalsPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.PascalsPerMinute);
    }

    /**
     * Create a new PressureChangeRate instance from a MillimetersOfMercuryPerSecond
     *
     * @param value The unit as MillimetersOfMercuryPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromMillimetersOfMercuryPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.MillimetersOfMercuryPerSecond);
    }

    /**
     * Create a new PressureChangeRate instance from a AtmospheresPerSecond
     *
     * @param value The unit as AtmospheresPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromAtmospheresPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.AtmospheresPerSecond);
    }

    /**
     * Create a new PressureChangeRate instance from a PoundsForcePerSquareInchPerSecond
     *
     * @param value The unit as PoundsForcePerSquareInchPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromPoundsForcePerSquareInchPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.PoundsForcePerSquareInchPerSecond);
    }

    /**
     * Create a new PressureChangeRate instance from a PoundsForcePerSquareInchPerMinute
     *
     * @param value The unit as PoundsForcePerSquareInchPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromPoundsForcePerSquareInchPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.PoundsForcePerSquareInchPerMinute);
    }

    /**
     * Create a new PressureChangeRate instance from a BarsPerSecond
     *
     * @param value The unit as BarsPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromBarsPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.BarsPerSecond);
    }

    /**
     * Create a new PressureChangeRate instance from a BarsPerMinute
     *
     * @param value The unit as BarsPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromBarsPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.BarsPerMinute);
    }

    /**
     * Create a new PressureChangeRate instance from a KilopascalsPerSecond
     *
     * @param value The unit as KilopascalsPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromKilopascalsPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopascalsPerSecond);
    }

    /**
     * Create a new PressureChangeRate instance from a MegapascalsPerSecond
     *
     * @param value The unit as MegapascalsPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromMegapascalsPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapascalsPerSecond);
    }

    /**
     * Create a new PressureChangeRate instance from a KilopascalsPerMinute
     *
     * @param value The unit as KilopascalsPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromKilopascalsPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopascalsPerMinute);
    }

    /**
     * Create a new PressureChangeRate instance from a MegapascalsPerMinute
     *
     * @param value The unit as MegapascalsPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromMegapascalsPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapascalsPerMinute);
    }

    /**
     * Create a new PressureChangeRate instance from a KilopoundsForcePerSquareInchPerSecond
     *
     * @param value The unit as KilopoundsForcePerSquareInchPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromKilopoundsForcePerSquareInchPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopoundsForcePerSquareInchPerSecond);
    }

    /**
     * Create a new PressureChangeRate instance from a MegapoundsForcePerSquareInchPerSecond
     *
     * @param value The unit as MegapoundsForcePerSquareInchPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromMegapoundsForcePerSquareInchPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapoundsForcePerSquareInchPerSecond);
    }

    /**
     * Create a new PressureChangeRate instance from a KilopoundsForcePerSquareInchPerMinute
     *
     * @param value The unit as KilopoundsForcePerSquareInchPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromKilopoundsForcePerSquareInchPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopoundsForcePerSquareInchPerMinute);
    }

    /**
     * Create a new PressureChangeRate instance from a MegapoundsForcePerSquareInchPerMinute
     *
     * @param value The unit as MegapoundsForcePerSquareInchPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromMegapoundsForcePerSquareInchPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapoundsForcePerSquareInchPerMinute);
    }

    /**
     * Create a new PressureChangeRate instance from a MillibarsPerSecond
     *
     * @param value The unit as MillibarsPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromMillibarsPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.MillibarsPerSecond);
    }

    /**
     * Create a new PressureChangeRate instance from a MillibarsPerMinute
     *
     * @param value The unit as MillibarsPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    public static FromMillibarsPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.MillibarsPerMinute);
    }

    /**
     * Gets the base unit enumeration associated with PressureChangeRate
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof PressureChangeRateUnits {
        return PressureChangeRateUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): PressureChangeRateUnits.PascalsPerSecond {
        return PressureChangeRateUnits.PascalsPerSecond;
    }

    /**
     * Create API DTO represent a PressureChangeRate unit.
     * @param holdInUnit The specific PressureChangeRate unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: PressureChangeRateUnits = PressureChangeRateUnits.PascalsPerSecond): PressureChangeRateDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a PressureChangeRate unit from an API DTO representation.
     * @param dtoPressureChangeRate The PressureChangeRate API DTO representation
     */
    public static FromDto(dtoPressureChangeRate: PressureChangeRateDto): PressureChangeRate {
        return new PressureChangeRate(dtoPressureChangeRate.value, dtoPressureChangeRate.unit);
    }

    /**
     * Convert PressureChangeRate to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: PressureChangeRateUnits): number {
        switch (toUnit) {
            case PressureChangeRateUnits.PascalsPerSecond: return this.PascalsPerSecond;
            case PressureChangeRateUnits.PascalsPerMinute: return this.PascalsPerMinute;
            case PressureChangeRateUnits.MillimetersOfMercuryPerSecond: return this.MillimetersOfMercuryPerSecond;
            case PressureChangeRateUnits.AtmospheresPerSecond: return this.AtmospheresPerSecond;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerSecond: return this.PoundsForcePerSquareInchPerSecond;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerMinute: return this.PoundsForcePerSquareInchPerMinute;
            case PressureChangeRateUnits.BarsPerSecond: return this.BarsPerSecond;
            case PressureChangeRateUnits.BarsPerMinute: return this.BarsPerMinute;
            case PressureChangeRateUnits.KilopascalsPerSecond: return this.KilopascalsPerSecond;
            case PressureChangeRateUnits.MegapascalsPerSecond: return this.MegapascalsPerSecond;
            case PressureChangeRateUnits.KilopascalsPerMinute: return this.KilopascalsPerMinute;
            case PressureChangeRateUnits.MegapascalsPerMinute: return this.MegapascalsPerMinute;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerSecond: return this.KilopoundsForcePerSquareInchPerSecond;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerSecond: return this.MegapoundsForcePerSquareInchPerSecond;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerMinute: return this.KilopoundsForcePerSquareInchPerMinute;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerMinute: return this.MegapoundsForcePerSquareInchPerMinute;
            case PressureChangeRateUnits.MillibarsPerSecond: return this.MillibarsPerSecond;
            case PressureChangeRateUnits.MillibarsPerMinute: return this.MillibarsPerMinute;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: PressureChangeRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case PressureChangeRateUnits.PascalsPerSecond: return this.value;
                case PressureChangeRateUnits.PascalsPerMinute: return super.internalMultiply(this.value, 60);
                case PressureChangeRateUnits.MillimetersOfMercuryPerSecond: return super.internalDivide(this.value, 133.322);
                case PressureChangeRateUnits.AtmospheresPerSecond: {
                    const v4 = super.internalMultiply(1.01325, 1e5);
                    return super.internalDivide(this.value, v4);
                }
                case PressureChangeRateUnits.PoundsForcePerSquareInchPerSecond: return super.internalDivide(this.value, 6.894757293168361e3);
                case PressureChangeRateUnits.PoundsForcePerSquareInchPerMinute: {
                    const v3 = super.internalDivide(this.value, 6.894757293168361e3);
                    return super.internalMultiply(v3, 60);
                }
                case PressureChangeRateUnits.BarsPerSecond: return super.internalDivide(this.value, 1e5);
                case PressureChangeRateUnits.BarsPerMinute: {
                    const v3 = super.internalDivide(this.value, 1e5);
                    return super.internalMultiply(v3, 60);
                }
                case PressureChangeRateUnits.KilopascalsPerSecond: return super.internalDivide(this.value, 1000);
                case PressureChangeRateUnits.MegapascalsPerSecond: return super.internalDivide(this.value, 1000000);
                case PressureChangeRateUnits.KilopascalsPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 1000);
                }
                case PressureChangeRateUnits.MegapascalsPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 1000000);
                }
                case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerSecond: {
                    const v3 = super.internalDivide(this.value, 6.894757293168361e3);
                    return super.internalDivide(v3, 1000);
                }
                case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerSecond: {
                    const v3 = super.internalDivide(this.value, 6.894757293168361e3);
                    return super.internalDivide(v3, 1000000);
                }
                case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerMinute: {
                    const v3 = super.internalDivide(this.value, 6.894757293168361e3);
                    const v5 = super.internalMultiply(v3, 60);
                    return super.internalDivide(v5, 1000);
                }
                case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerMinute: {
                    const v3 = super.internalDivide(this.value, 6.894757293168361e3);
                    const v5 = super.internalMultiply(v3, 60);
                    return super.internalDivide(v5, 1000000);
                }
                case PressureChangeRateUnits.MillibarsPerSecond: {
                    const v3 = super.internalDivide(this.value, 1e5);
                    return super.internalDivide(v3, 0.001);
                }
                case PressureChangeRateUnits.MillibarsPerMinute: {
                    const v3 = super.internalDivide(this.value, 1e5);
                    const v5 = super.internalMultiply(v3, 60);
                    return super.internalDivide(v5, 0.001);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case PressureChangeRateUnits.PascalsPerSecond: return this.value;
            case PressureChangeRateUnits.PascalsPerMinute: return this.value * 60;
            case PressureChangeRateUnits.MillimetersOfMercuryPerSecond: return this.value / 133.322;
            case PressureChangeRateUnits.AtmospheresPerSecond: return this.value / (1.01325 * 1e5);
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerSecond: return this.value / 6.894757293168361e3;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerMinute: return this.value / 6.894757293168361e3 * 60;
            case PressureChangeRateUnits.BarsPerSecond: return this.value / 1e5;
            case PressureChangeRateUnits.BarsPerMinute: return this.value / 1e5 * 60;
            case PressureChangeRateUnits.KilopascalsPerSecond: return (this.value) / 1000;
            case PressureChangeRateUnits.MegapascalsPerSecond: return (this.value) / 1000000;
            case PressureChangeRateUnits.KilopascalsPerMinute: return (this.value * 60) / 1000;
            case PressureChangeRateUnits.MegapascalsPerMinute: return (this.value * 60) / 1000000;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerSecond: return (this.value / 6.894757293168361e3) / 1000;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerSecond: return (this.value / 6.894757293168361e3) / 1000000;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerMinute: return (this.value / 6.894757293168361e3 * 60) / 1000;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerMinute: return (this.value / 6.894757293168361e3 * 60) / 1000000;
            case PressureChangeRateUnits.MillibarsPerSecond: return (this.value / 1e5) / 0.001;
            case PressureChangeRateUnits.MillibarsPerMinute: return (this.value / 1e5 * 60) / 0.001;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: PressureChangeRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case PressureChangeRateUnits.PascalsPerSecond: return value;
                case PressureChangeRateUnits.PascalsPerMinute: return super.internalDivide(value, 60);
                case PressureChangeRateUnits.MillimetersOfMercuryPerSecond: return super.internalMultiply(value, 133.322);
                case PressureChangeRateUnits.AtmospheresPerSecond: {
                    const v3 = super.internalMultiply(value, 1.01325);
                    return super.internalMultiply(v3, 1e5);
                }
                case PressureChangeRateUnits.PoundsForcePerSquareInchPerSecond: return super.internalMultiply(value, 6.894757293168361e3);
                case PressureChangeRateUnits.PoundsForcePerSquareInchPerMinute: {
                    const v4 = super.internalDivide(6.894757293168361e3, 60);
                    return super.internalMultiply(value, v4);
                }
                case PressureChangeRateUnits.BarsPerSecond: return super.internalMultiply(value, 1e5);
                case PressureChangeRateUnits.BarsPerMinute: {
                    const v4 = super.internalDivide(1e5, 60);
                    return super.internalMultiply(value, v4);
                }
                case PressureChangeRateUnits.KilopascalsPerSecond: return super.internalMultiply(value, 1000);
                case PressureChangeRateUnits.MegapascalsPerSecond: return super.internalMultiply(value, 1000000);
                case PressureChangeRateUnits.KilopascalsPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 1000);
                }
                case PressureChangeRateUnits.MegapascalsPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 1000000);
                }
                case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerSecond: {
                    const v3 = super.internalMultiply(value, 6.894757293168361e3);
                    return super.internalMultiply(v3, 1000);
                }
                case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerSecond: {
                    const v3 = super.internalMultiply(value, 6.894757293168361e3);
                    return super.internalMultiply(v3, 1000000);
                }
                case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerMinute: {
                    const v4 = super.internalDivide(6.894757293168361e3, 60);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000);
                }
                case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerMinute: {
                    const v4 = super.internalDivide(6.894757293168361e3, 60);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 1000000);
                }
                case PressureChangeRateUnits.MillibarsPerSecond: {
                    const v3 = super.internalMultiply(value, 1e5);
                    return super.internalMultiply(v3, 0.001);
                }
                case PressureChangeRateUnits.MillibarsPerMinute: {
                    const v4 = super.internalDivide(1e5, 60);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalMultiply(v5, 0.001);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case PressureChangeRateUnits.PascalsPerSecond: return value;
            case PressureChangeRateUnits.PascalsPerMinute: return value / 60;
            case PressureChangeRateUnits.MillimetersOfMercuryPerSecond: return value * 133.322;
            case PressureChangeRateUnits.AtmospheresPerSecond: return value * 1.01325 * 1e5;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerSecond: return value * 6.894757293168361e3;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerMinute: return value * 6.894757293168361e3 / 60;
            case PressureChangeRateUnits.BarsPerSecond: return value * 1e5;
            case PressureChangeRateUnits.BarsPerMinute: return value * 1e5 / 60;
            case PressureChangeRateUnits.KilopascalsPerSecond: return (value) * 1000;
            case PressureChangeRateUnits.MegapascalsPerSecond: return (value) * 1000000;
            case PressureChangeRateUnits.KilopascalsPerMinute: return (value / 60) * 1000;
            case PressureChangeRateUnits.MegapascalsPerMinute: return (value / 60) * 1000000;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerSecond: return (value * 6.894757293168361e3) * 1000;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerSecond: return (value * 6.894757293168361e3) * 1000000;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerMinute: return (value * 6.894757293168361e3 / 60) * 1000;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerMinute: return (value * 6.894757293168361e3 / 60) * 1000000;
            case PressureChangeRateUnits.MillibarsPerSecond: return (value * 1e5) * 0.001;
            case PressureChangeRateUnits.MillibarsPerMinute: return (value * 1e5 / 60) * 0.001;
            default: return Number.NaN;
        }
    }

    /**
     * Format the PressureChangeRate to string.
     * Note! the default format for PressureChangeRate is PascalsPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the PressureChangeRate.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the PressureChangeRate.
     */
    public toString(unit: PressureChangeRateUnits = PressureChangeRateUnits.PascalsPerSecond, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case PressureChangeRateUnits.PascalsPerSecond:
                return super.truncateFractionDigits(this.PascalsPerSecond, options as ToStringOptions) + ` Pa/s`;
            case PressureChangeRateUnits.PascalsPerMinute:
                return super.truncateFractionDigits(this.PascalsPerMinute, options as ToStringOptions) + ` Pa/min`;
            case PressureChangeRateUnits.MillimetersOfMercuryPerSecond:
                return super.truncateFractionDigits(this.MillimetersOfMercuryPerSecond, options as ToStringOptions) + ` mmHg/s`;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return super.truncateFractionDigits(this.AtmospheresPerSecond, options as ToStringOptions) + ` atm/s`;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerSecond:
                return super.truncateFractionDigits(this.PoundsForcePerSquareInchPerSecond, options as ToStringOptions) + ` psi/s`;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerMinute:
                return super.truncateFractionDigits(this.PoundsForcePerSquareInchPerMinute, options as ToStringOptions) + ` psi/min`;
            case PressureChangeRateUnits.BarsPerSecond:
                return super.truncateFractionDigits(this.BarsPerSecond, options as ToStringOptions) + ` bar/s`;
            case PressureChangeRateUnits.BarsPerMinute:
                return super.truncateFractionDigits(this.BarsPerMinute, options as ToStringOptions) + ` bar/min`;
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return super.truncateFractionDigits(this.KilopascalsPerSecond, options as ToStringOptions) + ` kPa/s`;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return super.truncateFractionDigits(this.MegapascalsPerSecond, options as ToStringOptions) + ` MPa/s`;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return super.truncateFractionDigits(this.KilopascalsPerMinute, options as ToStringOptions) + ` kPa/min`;
            case PressureChangeRateUnits.MegapascalsPerMinute:
                return super.truncateFractionDigits(this.MegapascalsPerMinute, options as ToStringOptions) + ` MPa/min`;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerSecond:
                return super.truncateFractionDigits(this.KilopoundsForcePerSquareInchPerSecond, options as ToStringOptions) + ` kpsi/s`;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerSecond:
                return super.truncateFractionDigits(this.MegapoundsForcePerSquareInchPerSecond, options as ToStringOptions) + ` Mpsi/s`;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerMinute:
                return super.truncateFractionDigits(this.KilopoundsForcePerSquareInchPerMinute, options as ToStringOptions) + ` kpsi/min`;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerMinute:
                return super.truncateFractionDigits(this.MegapoundsForcePerSquareInchPerMinute, options as ToStringOptions) + ` Mpsi/min`;
            case PressureChangeRateUnits.MillibarsPerSecond:
                return super.truncateFractionDigits(this.MillibarsPerSecond, options as ToStringOptions) + ` mbar/s`;
            case PressureChangeRateUnits.MillibarsPerMinute:
                return super.truncateFractionDigits(this.MillibarsPerMinute, options as ToStringOptions) + ` mbar/min`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get PressureChangeRate unit abbreviation.
     * Note! the default abbreviation for PressureChangeRate is PascalsPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the PressureChangeRate.
     * @returns The abbreviation string of PressureChangeRate.
     */
    public getUnitAbbreviation(unitAbbreviation: PressureChangeRateUnits = PressureChangeRateUnits.PascalsPerSecond): string {

        switch (unitAbbreviation) {
            
            case PressureChangeRateUnits.PascalsPerSecond:
                return `Pa/s`;
            case PressureChangeRateUnits.PascalsPerMinute:
                return `Pa/min`;
            case PressureChangeRateUnits.MillimetersOfMercuryPerSecond:
                return `mmHg/s`;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return `atm/s`;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerSecond:
                return `psi/s`;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerMinute:
                return `psi/min`;
            case PressureChangeRateUnits.BarsPerSecond:
                return `bar/s`;
            case PressureChangeRateUnits.BarsPerMinute:
                return `bar/min`;
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return `kPa/s`;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return `MPa/s`;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return `kPa/min`;
            case PressureChangeRateUnits.MegapascalsPerMinute:
                return `MPa/min`;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerSecond:
                return `kpsi/s`;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerSecond:
                return `Mpsi/s`;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerMinute:
                return `kpsi/min`;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerMinute:
                return `Mpsi/min`;
            case PressureChangeRateUnits.MillibarsPerSecond:
                return `mbar/s`;
            case PressureChangeRateUnits.MillibarsPerMinute:
                return `mbar/min`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given PressureChangeRate are equals to the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns True if the given PressureChangeRate are equal to the current PressureChangeRate.
     */
    public equals(pressureChangeRate: PressureChangeRate): boolean {
        return super.internalEquals(this.value, pressureChangeRate.BaseValue);
    }

    /**
     * Compare the given PressureChangeRate against the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns 0 if they are equal, -1 if the current PressureChangeRate is less then other, 1 if the current PressureChangeRate is greater then other.
     */
    public compareTo(pressureChangeRate: PressureChangeRate): number {
        return super.internalCompareTo(this.value, pressureChangeRate.BaseValue);
    }

    /**
     * Add the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    public add(pressureChangeRate: PressureChangeRate): PressureChangeRate {
        return new PressureChangeRate(super.internalAdd(this.value, pressureChangeRate.BaseValue))
    }

    /**
     * Subtract the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    public subtract(pressureChangeRate: PressureChangeRate): PressureChangeRate {
        return new PressureChangeRate(super.internalSubtract(this.value, pressureChangeRate.BaseValue))
    }

    /**
     * Multiply the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    public multiply(pressureChangeRate: PressureChangeRate): PressureChangeRate {
        return new PressureChangeRate(super.internalMultiply(this.value, pressureChangeRate.BaseValue))
    }

    /**
     * Divide the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    public divide(pressureChangeRate: PressureChangeRate): PressureChangeRate {
        return new PressureChangeRate(super.internalDivide(this.value, pressureChangeRate.BaseValue))
    }

    /**
     * Modulo the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    public modulo(pressureChangeRate: PressureChangeRate): PressureChangeRate {
        return new PressureChangeRate(super.internalModulo(this.value, pressureChangeRate.BaseValue))
    }

    /**
     * Pow the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    public pow(pressureChangeRate: PressureChangeRate): PressureChangeRate {
        return new PressureChangeRate(super.internalPow(this.value, pressureChangeRate.BaseValue))
    }
}
