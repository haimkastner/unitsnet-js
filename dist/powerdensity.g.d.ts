/** PowerDensityUnits enumeration */
export declare enum PowerDensityUnits {
    /** */
    WattsPerCubicMeter = 0,
    /** */
    WattsPerCubicInch = 1,
    /** */
    WattsPerCubicFoot = 2,
    /** */
    WattsPerLiter = 3,
    /** */
    PicowattsPerCubicMeter = 4,
    /** */
    NanowattsPerCubicMeter = 5,
    /** */
    MicrowattsPerCubicMeter = 6,
    /** */
    DeciwattsPerCubicMeter = 7,
    /** */
    DecawattsPerCubicMeter = 8,
    /** */
    KilowattsPerCubicMeter = 9,
    /** */
    MegawattsPerCubicMeter = 10,
    /** */
    GigawattsPerCubicMeter = 11,
    /** */
    TerawattsPerCubicMeter = 12,
    /** */
    PicowattsPerCubicInch = 13,
    /** */
    NanowattsPerCubicInch = 14,
    /** */
    MicrowattsPerCubicInch = 15,
    /** */
    DeciwattsPerCubicInch = 16,
    /** */
    DecawattsPerCubicInch = 17,
    /** */
    KilowattsPerCubicInch = 18,
    /** */
    MegawattsPerCubicInch = 19,
    /** */
    GigawattsPerCubicInch = 20,
    /** */
    TerawattsPerCubicInch = 21,
    /** */
    PicowattsPerCubicFoot = 22,
    /** */
    NanowattsPerCubicFoot = 23,
    /** */
    MicrowattsPerCubicFoot = 24,
    /** */
    DeciwattsPerCubicFoot = 25,
    /** */
    DecawattsPerCubicFoot = 26,
    /** */
    KilowattsPerCubicFoot = 27,
    /** */
    MegawattsPerCubicFoot = 28,
    /** */
    GigawattsPerCubicFoot = 29,
    /** */
    TerawattsPerCubicFoot = 30,
    /** */
    PicowattsPerLiter = 31,
    /** */
    NanowattsPerLiter = 32,
    /** */
    MicrowattsPerLiter = 33,
    /** */
    DeciwattsPerLiter = 34,
    /** */
    DecawattsPerLiter = 35,
    /** */
    KilowattsPerLiter = 36,
    /** */
    MegawattsPerLiter = 37,
    /** */
    GigawattsPerLiter = 38,
    /** */
    TerawattsPerLiter = 39
}
/** The amount of power in a volume. */
export declare class PowerDensity {
    private value;
    private wattspercubicmeterLazy;
    private wattspercubicinchLazy;
    private wattspercubicfootLazy;
    private wattsperliterLazy;
    private picowattspercubicmeterLazy;
    private nanowattspercubicmeterLazy;
    private microwattspercubicmeterLazy;
    private deciwattspercubicmeterLazy;
    private decawattspercubicmeterLazy;
    private kilowattspercubicmeterLazy;
    private megawattspercubicmeterLazy;
    private gigawattspercubicmeterLazy;
    private terawattspercubicmeterLazy;
    private picowattspercubicinchLazy;
    private nanowattspercubicinchLazy;
    private microwattspercubicinchLazy;
    private deciwattspercubicinchLazy;
    private decawattspercubicinchLazy;
    private kilowattspercubicinchLazy;
    private megawattspercubicinchLazy;
    private gigawattspercubicinchLazy;
    private terawattspercubicinchLazy;
    private picowattspercubicfootLazy;
    private nanowattspercubicfootLazy;
    private microwattspercubicfootLazy;
    private deciwattspercubicfootLazy;
    private decawattspercubicfootLazy;
    private kilowattspercubicfootLazy;
    private megawattspercubicfootLazy;
    private gigawattspercubicfootLazy;
    private terawattspercubicfootLazy;
    private picowattsperliterLazy;
    private nanowattsperliterLazy;
    private microwattsperliterLazy;
    private deciwattsperliterLazy;
    private decawattsperliterLazy;
    private kilowattsperliterLazy;
    private megawattsperliterLazy;
    private gigawattsperliterLazy;
    private terawattsperliterLazy;
    /**
     * Create a new PowerDensity.
     * @param value The value.
     * @param fromUnit The ‘PowerDensity’ unit to create from.
     * The default unit is WattsPerCubicMeter
     */
    constructor(value: number, fromUnit?: PowerDensityUnits);
    /**
     * The base value of PowerDensity is WattsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get WattsPerCubicMeter(): number;
    /** */
    get WattsPerCubicInch(): number;
    /** */
    get WattsPerCubicFoot(): number;
    /** */
    get WattsPerLiter(): number;
    /** */
    get PicowattsPerCubicMeter(): number;
    /** */
    get NanowattsPerCubicMeter(): number;
    /** */
    get MicrowattsPerCubicMeter(): number;
    /** */
    get DeciwattsPerCubicMeter(): number;
    /** */
    get DecawattsPerCubicMeter(): number;
    /** */
    get KilowattsPerCubicMeter(): number;
    /** */
    get MegawattsPerCubicMeter(): number;
    /** */
    get GigawattsPerCubicMeter(): number;
    /** */
    get TerawattsPerCubicMeter(): number;
    /** */
    get PicowattsPerCubicInch(): number;
    /** */
    get NanowattsPerCubicInch(): number;
    /** */
    get MicrowattsPerCubicInch(): number;
    /** */
    get DeciwattsPerCubicInch(): number;
    /** */
    get DecawattsPerCubicInch(): number;
    /** */
    get KilowattsPerCubicInch(): number;
    /** */
    get MegawattsPerCubicInch(): number;
    /** */
    get GigawattsPerCubicInch(): number;
    /** */
    get TerawattsPerCubicInch(): number;
    /** */
    get PicowattsPerCubicFoot(): number;
    /** */
    get NanowattsPerCubicFoot(): number;
    /** */
    get MicrowattsPerCubicFoot(): number;
    /** */
    get DeciwattsPerCubicFoot(): number;
    /** */
    get DecawattsPerCubicFoot(): number;
    /** */
    get KilowattsPerCubicFoot(): number;
    /** */
    get MegawattsPerCubicFoot(): number;
    /** */
    get GigawattsPerCubicFoot(): number;
    /** */
    get TerawattsPerCubicFoot(): number;
    /** */
    get PicowattsPerLiter(): number;
    /** */
    get NanowattsPerLiter(): number;
    /** */
    get MicrowattsPerLiter(): number;
    /** */
    get DeciwattsPerLiter(): number;
    /** */
    get DecawattsPerLiter(): number;
    /** */
    get KilowattsPerLiter(): number;
    /** */
    get MegawattsPerLiter(): number;
    /** */
    get GigawattsPerLiter(): number;
    /** */
    get TerawattsPerLiter(): number;
    /**
     * Create a new PowerDensity instance from a WattsPerCubicMeter
     *
     * @param value The unit as WattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromWattsPerCubicMeter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a WattsPerCubicInch
     *
     * @param value The unit as WattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromWattsPerCubicInch(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a WattsPerCubicFoot
     *
     * @param value The unit as WattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromWattsPerCubicFoot(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a WattsPerLiter
     *
     * @param value The unit as WattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromWattsPerLiter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a PicowattsPerCubicMeter
     *
     * @param value The unit as PicowattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromPicowattsPerCubicMeter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a NanowattsPerCubicMeter
     *
     * @param value The unit as NanowattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromNanowattsPerCubicMeter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a MicrowattsPerCubicMeter
     *
     * @param value The unit as MicrowattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromMicrowattsPerCubicMeter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a DeciwattsPerCubicMeter
     *
     * @param value The unit as DeciwattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromDeciwattsPerCubicMeter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a DecawattsPerCubicMeter
     *
     * @param value The unit as DecawattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromDecawattsPerCubicMeter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a KilowattsPerCubicMeter
     *
     * @param value The unit as KilowattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromKilowattsPerCubicMeter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a MegawattsPerCubicMeter
     *
     * @param value The unit as MegawattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromMegawattsPerCubicMeter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a GigawattsPerCubicMeter
     *
     * @param value The unit as GigawattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromGigawattsPerCubicMeter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a TerawattsPerCubicMeter
     *
     * @param value The unit as TerawattsPerCubicMeter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromTerawattsPerCubicMeter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a PicowattsPerCubicInch
     *
     * @param value The unit as PicowattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromPicowattsPerCubicInch(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a NanowattsPerCubicInch
     *
     * @param value The unit as NanowattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromNanowattsPerCubicInch(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a MicrowattsPerCubicInch
     *
     * @param value The unit as MicrowattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromMicrowattsPerCubicInch(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a DeciwattsPerCubicInch
     *
     * @param value The unit as DeciwattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromDeciwattsPerCubicInch(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a DecawattsPerCubicInch
     *
     * @param value The unit as DecawattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromDecawattsPerCubicInch(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a KilowattsPerCubicInch
     *
     * @param value The unit as KilowattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromKilowattsPerCubicInch(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a MegawattsPerCubicInch
     *
     * @param value The unit as MegawattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromMegawattsPerCubicInch(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a GigawattsPerCubicInch
     *
     * @param value The unit as GigawattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromGigawattsPerCubicInch(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a TerawattsPerCubicInch
     *
     * @param value The unit as TerawattsPerCubicInch to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromTerawattsPerCubicInch(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a PicowattsPerCubicFoot
     *
     * @param value The unit as PicowattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromPicowattsPerCubicFoot(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a NanowattsPerCubicFoot
     *
     * @param value The unit as NanowattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromNanowattsPerCubicFoot(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a MicrowattsPerCubicFoot
     *
     * @param value The unit as MicrowattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromMicrowattsPerCubicFoot(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a DeciwattsPerCubicFoot
     *
     * @param value The unit as DeciwattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromDeciwattsPerCubicFoot(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a DecawattsPerCubicFoot
     *
     * @param value The unit as DecawattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromDecawattsPerCubicFoot(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a KilowattsPerCubicFoot
     *
     * @param value The unit as KilowattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromKilowattsPerCubicFoot(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a MegawattsPerCubicFoot
     *
     * @param value The unit as MegawattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromMegawattsPerCubicFoot(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a GigawattsPerCubicFoot
     *
     * @param value The unit as GigawattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromGigawattsPerCubicFoot(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a TerawattsPerCubicFoot
     *
     * @param value The unit as TerawattsPerCubicFoot to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromTerawattsPerCubicFoot(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a PicowattsPerLiter
     *
     * @param value The unit as PicowattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromPicowattsPerLiter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a NanowattsPerLiter
     *
     * @param value The unit as NanowattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromNanowattsPerLiter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a MicrowattsPerLiter
     *
     * @param value The unit as MicrowattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromMicrowattsPerLiter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a DeciwattsPerLiter
     *
     * @param value The unit as DeciwattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromDeciwattsPerLiter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a DecawattsPerLiter
     *
     * @param value The unit as DecawattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromDecawattsPerLiter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a KilowattsPerLiter
     *
     * @param value The unit as KilowattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromKilowattsPerLiter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a MegawattsPerLiter
     *
     * @param value The unit as MegawattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromMegawattsPerLiter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a GigawattsPerLiter
     *
     * @param value The unit as GigawattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromGigawattsPerLiter(value: number): PowerDensity;
    /**
     * Create a new PowerDensity instance from a TerawattsPerLiter
     *
     * @param value The unit as TerawattsPerLiter to create a new PowerDensity from.
     * @returns The new PowerDensity instance.
     */
    static FromTerawattsPerLiter(value: number): PowerDensity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the PowerDensity to string.
     * Note! the default format for PowerDensity is WattsPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the PowerDensity.
     * @returns The string format of the PowerDensity.
     */
    toString(toUnit?: PowerDensityUnits): string;
    /**
     * Check if the given PowerDensity are equals to the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns True if the given PowerDensity are equal to the current PowerDensity.
     */
    equals(powerDensity: PowerDensity): boolean;
    /**
     * Compare the given PowerDensity against the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns 0 if they are equal, -1 if the current PowerDensity is less then other, 1 if the current PowerDensity is greater then other.
     */
    compareTo(powerDensity: PowerDensity): number;
    /**
     * Add the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    add(powerDensity: PowerDensity): PowerDensity;
    /**
     * Subtract the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    subtract(powerDensity: PowerDensity): PowerDensity;
    /**
     * Multiply the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    multiply(powerDensity: PowerDensity): PowerDensity;
    /**
     * Divide the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    divide(powerDensity: PowerDensity): PowerDensity;
    /**
     * Modulo the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    modulo(powerDensity: PowerDensity): PowerDensity;
    /**
     * Pow the given PowerDensity with the current PowerDensity.
     * @param powerDensity The other PowerDensity.
     * @returns A new PowerDensity instance with the results.
     */
    pow(powerDensity: PowerDensity): PowerDensity;
}
//# sourceMappingURL=powerdensity.g.d.ts.map