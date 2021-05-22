/** PressureChangeRateUnits enumeration */
export enum PressureChangeRateUnits {
    /** */
    PascalsPerSecond,
    /** */
    PascalsPerMinute,
    /** */
    AtmospheresPerSecond,
    /** */
    PoundsForcePerSquareInchPerSecond,
    /** */
    PoundsForcePerSquareInchPerMinute,
    /** */
    KilopascalsPerSecond,
    /** */
    MegapascalsPerSecond,
    /** */
    KilopascalsPerMinute,
    /** */
    MegapascalsPerMinute,
    /** */
    KilopoundsForcePerSquareInchPerSecond,
    /** */
    MegapoundsForcePerSquareInchPerSecond,
    /** */
    KilopoundsForcePerSquareInchPerMinute,
    /** */
    MegapoundsForcePerSquareInchPerMinute
}

/** Pressure change rate is the ratio of the pressure change to the time during which the change occurred (value of pressure changes per unit time). */
export class PressureChangeRate {
    private value: number;
    private pascalspersecondLazy: number | null = null;
    private pascalsperminuteLazy: number | null = null;
    private atmospherespersecondLazy: number | null = null;
    private poundsforcepersquareinchpersecondLazy: number | null = null;
    private poundsforcepersquareinchperminuteLazy: number | null = null;
    private kilopascalspersecondLazy: number | null = null;
    private megapascalspersecondLazy: number | null = null;
    private kilopascalsperminuteLazy: number | null = null;
    private megapascalsperminuteLazy: number | null = null;
    private kilopoundsforcepersquareinchpersecondLazy: number | null = null;
    private megapoundsforcepersquareinchpersecondLazy: number | null = null;
    private kilopoundsforcepersquareinchperminuteLazy: number | null = null;
    private megapoundsforcepersquareinchperminuteLazy: number | null = null;

    /**
     * Create a new PressureChangeRate.
     * @param value The value.
     * @param fromUnit The ‘PressureChangeRate’ unit to create from.
     * The default unit is PascalsPerSecond
     */
    public constructor(value: number, fromUnit: PressureChangeRateUnits = PressureChangeRateUnits.PascalsPerSecond) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of PressureChangeRate is PascalsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
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

    private convertFromBase(toUnit: PressureChangeRateUnits): number {
        switch (toUnit) {
                
            case PressureChangeRateUnits.PascalsPerSecond:
                return this.value;
            case PressureChangeRateUnits.PascalsPerMinute:
                return this.value*60;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return this.value / (1.01325*1e5);
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerSecond:
                return this.value/6.894757293168361e3;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerMinute:
                return this.value/6.894757293168361e3*60;
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return (this.value) / 1000;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return (this.value) / 1000000;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return (this.value*60) / 1000;
            case PressureChangeRateUnits.MegapascalsPerMinute:
                return (this.value*60) / 1000000;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerSecond:
                return (this.value/6.894757293168361e3) / 1000;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerSecond:
                return (this.value/6.894757293168361e3) / 1000000;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerMinute:
                return (this.value/6.894757293168361e3*60) / 1000;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerMinute:
                return (this.value/6.894757293168361e3*60) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PressureChangeRateUnits): number {
        switch (fromUnit) {
                
            case PressureChangeRateUnits.PascalsPerSecond:
                return value;
            case PressureChangeRateUnits.PascalsPerMinute:
                return value/60;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return value * 1.01325*1e5;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerSecond:
                return value*6.894757293168361e3;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerMinute:
                return value*6.894757293168361e3/60;
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return (value) * 1000;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return (value) * 1000000;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return (value/60) * 1000;
            case PressureChangeRateUnits.MegapascalsPerMinute:
                return (value/60) * 1000000;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerSecond:
                return (value*6.894757293168361e3) * 1000;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerSecond:
                return (value*6.894757293168361e3) * 1000000;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerMinute:
                return (value*6.894757293168361e3/60) * 1000;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerMinute:
                return (value*6.894757293168361e3/60) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the PressureChangeRate to string.
     * Note! the default format for PressureChangeRate is PascalsPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the PressureChangeRate.
     * @returns The string format of the PressureChangeRate.
     */
    public toString(toUnit: PressureChangeRateUnits = PressureChangeRateUnits.PascalsPerSecond): string {

        switch (toUnit) {
            
            case PressureChangeRateUnits.PascalsPerSecond:
                return this.PascalsPerSecond + ` Pa/s`;
            case PressureChangeRateUnits.PascalsPerMinute:
                return this.PascalsPerMinute + ` Pa/min`;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return this.AtmospheresPerSecond + ` atm/s`;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerSecond:
                return this.PoundsForcePerSquareInchPerSecond + ` psi/s`;
            case PressureChangeRateUnits.PoundsForcePerSquareInchPerMinute:
                return this.PoundsForcePerSquareInchPerMinute + ` psi/min`;
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return this.KilopascalsPerSecond + ` `;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return this.MegapascalsPerSecond + ` `;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return this.KilopascalsPerMinute + ` `;
            case PressureChangeRateUnits.MegapascalsPerMinute:
                return this.MegapascalsPerMinute + ` `;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerSecond:
                return this.KilopoundsForcePerSquareInchPerSecond + ` `;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerSecond:
                return this.MegapoundsForcePerSquareInchPerSecond + ` `;
            case PressureChangeRateUnits.KilopoundsForcePerSquareInchPerMinute:
                return this.KilopoundsForcePerSquareInchPerMinute + ` `;
            case PressureChangeRateUnits.MegapoundsForcePerSquareInchPerMinute:
                return this.MegapoundsForcePerSquareInchPerMinute + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given PressureChangeRate are equals to the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns True if the given PressureChangeRate are equal to the current PressureChangeRate.
     */
    public equals(pressureChangeRate: PressureChangeRate): boolean {
        return this.value === pressureChangeRate.BaseValue;
    }

    /**
     * Compare the given PressureChangeRate against the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns 0 if they are equal, -1 if the current PressureChangeRate is less then other, 1 if the current PressureChangeRate is greater then other.
     */
    public compareTo(pressureChangeRate: PressureChangeRate): number {

        if (this.value > pressureChangeRate.BaseValue)
            return 1;
        if (this.value < pressureChangeRate.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    public add(pressureChangeRate: PressureChangeRate): PressureChangeRate {
        return new PressureChangeRate(this.value + pressureChangeRate.BaseValue)
    }

    /**
     * Subtract the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    public subtract(pressureChangeRate: PressureChangeRate): PressureChangeRate {
        return new PressureChangeRate(this.value - pressureChangeRate.BaseValue)
    }

    /**
     * Multiply the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    public multiply(pressureChangeRate: PressureChangeRate): PressureChangeRate {
        return new PressureChangeRate(this.value * pressureChangeRate.BaseValue)
    }

    /**
     * Divide the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    public divide(pressureChangeRate: PressureChangeRate): PressureChangeRate {
        return new PressureChangeRate(this.value / pressureChangeRate.BaseValue)
    }

    /**
     * Modulo the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    public modulo(pressureChangeRate: PressureChangeRate): PressureChangeRate {
        return new PressureChangeRate(this.value % pressureChangeRate.BaseValue)
    }

    /**
     * Pow the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    public pow(pressureChangeRate: PressureChangeRate): PressureChangeRate {
        return new PressureChangeRate(this.value ** pressureChangeRate.BaseValue)
    }
}
