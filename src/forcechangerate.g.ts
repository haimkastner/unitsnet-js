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
export class ForceChangeRate {
    private value: number;
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

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
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
        switch (toUnit) {
                
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.value * 60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.value;
            case ForceChangeRateUnits.PoundsForcePerMinute:
                return this.value / 4.4482216152605095551842641431421 * 60;
            case ForceChangeRateUnits.PoundsForcePerSecond:
                return this.value / 4.4482216152605095551842641431421;
            case ForceChangeRateUnits.DecanewtonsPerMinute:
                return (this.value * 60) / 10;
            case ForceChangeRateUnits.KilonewtonsPerMinute:
                return (this.value * 60) / 1000;
            case ForceChangeRateUnits.NanonewtonsPerSecond:
                return (this.value) / 1e-9;
            case ForceChangeRateUnits.MicronewtonsPerSecond:
                return (this.value) / 0.000001;
            case ForceChangeRateUnits.MillinewtonsPerSecond:
                return (this.value) / 0.001;
            case ForceChangeRateUnits.CentinewtonsPerSecond:
                return (this.value) / 0.01;
            case ForceChangeRateUnits.DecinewtonsPerSecond:
                return (this.value) / 0.1;
            case ForceChangeRateUnits.DecanewtonsPerSecond:
                return (this.value) / 10;
            case ForceChangeRateUnits.KilonewtonsPerSecond:
                return (this.value) / 1000;
            case ForceChangeRateUnits.KilopoundsForcePerMinute:
                return (this.value / 4.4482216152605095551842641431421 * 60) / 1000;
            case ForceChangeRateUnits.KilopoundsForcePerSecond:
                return (this.value / 4.4482216152605095551842641431421) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ForceChangeRateUnits): number {
        switch (fromUnit) {
                
            case ForceChangeRateUnits.NewtonsPerMinute:
                return value / 60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return value;
            case ForceChangeRateUnits.PoundsForcePerMinute:
                return value * 4.4482216152605095551842641431421 / 60;
            case ForceChangeRateUnits.PoundsForcePerSecond:
                return value * 4.4482216152605095551842641431421;
            case ForceChangeRateUnits.DecanewtonsPerMinute:
                return (value / 60) * 10;
            case ForceChangeRateUnits.KilonewtonsPerMinute:
                return (value / 60) * 1000;
            case ForceChangeRateUnits.NanonewtonsPerSecond:
                return (value) * 1e-9;
            case ForceChangeRateUnits.MicronewtonsPerSecond:
                return (value) * 0.000001;
            case ForceChangeRateUnits.MillinewtonsPerSecond:
                return (value) * 0.001;
            case ForceChangeRateUnits.CentinewtonsPerSecond:
                return (value) * 0.01;
            case ForceChangeRateUnits.DecinewtonsPerSecond:
                return (value) * 0.1;
            case ForceChangeRateUnits.DecanewtonsPerSecond:
                return (value) * 10;
            case ForceChangeRateUnits.KilonewtonsPerSecond:
                return (value) * 1000;
            case ForceChangeRateUnits.KilopoundsForcePerMinute:
                return (value * 4.4482216152605095551842641431421 / 60) * 1000;
            case ForceChangeRateUnits.KilopoundsForcePerSecond:
                return (value * 4.4482216152605095551842641431421) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ForceChangeRate to string.
     * Note! the default format for ForceChangeRate is NewtonsPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ForceChangeRate.
     * @returns The string format of the ForceChangeRate.
     */
    public toString(unit: ForceChangeRateUnits = ForceChangeRateUnits.NewtonsPerSecond): string {

        switch (unit) {
            
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.NewtonsPerMinute + ` N/min`;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.NewtonsPerSecond + ` N/s`;
            case ForceChangeRateUnits.PoundsForcePerMinute:
                return this.PoundsForcePerMinute + ` lbf/min`;
            case ForceChangeRateUnits.PoundsForcePerSecond:
                return this.PoundsForcePerSecond + ` lbf/s`;
            case ForceChangeRateUnits.DecanewtonsPerMinute:
                return this.DecanewtonsPerMinute + ` daN/min`;
            case ForceChangeRateUnits.KilonewtonsPerMinute:
                return this.KilonewtonsPerMinute + ` kN/min`;
            case ForceChangeRateUnits.NanonewtonsPerSecond:
                return this.NanonewtonsPerSecond + ` nN/s`;
            case ForceChangeRateUnits.MicronewtonsPerSecond:
                return this.MicronewtonsPerSecond + ` μN/s`;
            case ForceChangeRateUnits.MillinewtonsPerSecond:
                return this.MillinewtonsPerSecond + ` mN/s`;
            case ForceChangeRateUnits.CentinewtonsPerSecond:
                return this.CentinewtonsPerSecond + ` cN/s`;
            case ForceChangeRateUnits.DecinewtonsPerSecond:
                return this.DecinewtonsPerSecond + ` dN/s`;
            case ForceChangeRateUnits.DecanewtonsPerSecond:
                return this.DecanewtonsPerSecond + ` daN/s`;
            case ForceChangeRateUnits.KilonewtonsPerSecond:
                return this.KilonewtonsPerSecond + ` kN/s`;
            case ForceChangeRateUnits.KilopoundsForcePerMinute:
                return this.KilopoundsForcePerMinute + ` klbf/min`;
            case ForceChangeRateUnits.KilopoundsForcePerSecond:
                return this.KilopoundsForcePerSecond + ` klbf/s`;
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
        return this.value === forceChangeRate.BaseValue;
    }

    /**
     * Compare the given ForceChangeRate against the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns 0 if they are equal, -1 if the current ForceChangeRate is less then other, 1 if the current ForceChangeRate is greater then other.
     */
    public compareTo(forceChangeRate: ForceChangeRate): number {

        if (this.value > forceChangeRate.BaseValue)
            return 1;
        if (this.value < forceChangeRate.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    public add(forceChangeRate: ForceChangeRate): ForceChangeRate {
        return new ForceChangeRate(this.value + forceChangeRate.BaseValue)
    }

    /**
     * Subtract the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    public subtract(forceChangeRate: ForceChangeRate): ForceChangeRate {
        return new ForceChangeRate(this.value - forceChangeRate.BaseValue)
    }

    /**
     * Multiply the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    public multiply(forceChangeRate: ForceChangeRate): ForceChangeRate {
        return new ForceChangeRate(this.value * forceChangeRate.BaseValue)
    }

    /**
     * Divide the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    public divide(forceChangeRate: ForceChangeRate): ForceChangeRate {
        return new ForceChangeRate(this.value / forceChangeRate.BaseValue)
    }

    /**
     * Modulo the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    public modulo(forceChangeRate: ForceChangeRate): ForceChangeRate {
        return new ForceChangeRate(this.value % forceChangeRate.BaseValue)
    }

    /**
     * Pow the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    public pow(forceChangeRate: ForceChangeRate): ForceChangeRate {
        return new ForceChangeRate(this.value ** forceChangeRate.BaseValue)
    }
}
