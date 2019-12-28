/** TorquePerLengthUnits enumeration */
export declare enum TorquePerLengthUnits {
    /** */
    NewtonMillimetersPerMeter = 0,
    /** */
    NewtonCentimetersPerMeter = 1,
    /** */
    NewtonMetersPerMeter = 2,
    /** */
    PoundForceInchesPerFoot = 3,
    /** */
    PoundForceFeetPerFoot = 4,
    /** */
    KilogramForceMillimetersPerMeter = 5,
    /** */
    KilogramForceCentimetersPerMeter = 6,
    /** */
    KilogramForceMetersPerMeter = 7,
    /** */
    TonneForceMillimetersPerMeter = 8,
    /** */
    TonneForceCentimetersPerMeter = 9,
    /** */
    TonneForceMetersPerMeter = 10,
    /** */
    KilonewtonMillimetersPerMeter = 11,
    /** */
    MeganewtonMillimetersPerMeter = 12,
    /** */
    KilonewtonCentimetersPerMeter = 13,
    /** */
    MeganewtonCentimetersPerMeter = 14,
    /** */
    KilonewtonMetersPerMeter = 15,
    /** */
    MeganewtonMetersPerMeter = 16,
    /** */
    KilopoundForceInchesPerFoot = 17,
    /** */
    MegapoundForceInchesPerFoot = 18,
    /** */
    KilopoundForceFeetPerFoot = 19,
    /** */
    MegapoundForceFeetPerFoot = 20
}
/** The magnitude of torque per unit length. */
export declare class TorquePerLength {
    private value;
    private newtonmillimeterspermeterLazy;
    private newtoncentimeterspermeterLazy;
    private newtonmeterspermeterLazy;
    private poundforceinchesperfootLazy;
    private poundforcefeetperfootLazy;
    private kilogramforcemillimeterspermeterLazy;
    private kilogramforcecentimeterspermeterLazy;
    private kilogramforcemeterspermeterLazy;
    private tonneforcemillimeterspermeterLazy;
    private tonneforcecentimeterspermeterLazy;
    private tonneforcemeterspermeterLazy;
    private kilonewtonmillimeterspermeterLazy;
    private meganewtonmillimeterspermeterLazy;
    private kilonewtoncentimeterspermeterLazy;
    private meganewtoncentimeterspermeterLazy;
    private kilonewtonmeterspermeterLazy;
    private meganewtonmeterspermeterLazy;
    private kilopoundforceinchesperfootLazy;
    private megapoundforceinchesperfootLazy;
    private kilopoundforcefeetperfootLazy;
    private megapoundforcefeetperfootLazy;
    /**
     * Create a new TorquePerLength.
     * @param value The value.
     * @param fromUnit The ‘TorquePerLength’ unit to create from.
     * The default unit is NewtonMetersPerMeter
     */
    constructor(value: number, fromUnit?: TorquePerLengthUnits);
    /**
     * The base value of TorquePerLength is NewtonMetersPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get NewtonMillimetersPerMeter(): number;
    /** */
    get NewtonCentimetersPerMeter(): number;
    /** */
    get NewtonMetersPerMeter(): number;
    /** */
    get PoundForceInchesPerFoot(): number;
    /** */
    get PoundForceFeetPerFoot(): number;
    /** */
    get KilogramForceMillimetersPerMeter(): number;
    /** */
    get KilogramForceCentimetersPerMeter(): number;
    /** */
    get KilogramForceMetersPerMeter(): number;
    /** */
    get TonneForceMillimetersPerMeter(): number;
    /** */
    get TonneForceCentimetersPerMeter(): number;
    /** */
    get TonneForceMetersPerMeter(): number;
    /** */
    get KilonewtonMillimetersPerMeter(): number;
    /** */
    get MeganewtonMillimetersPerMeter(): number;
    /** */
    get KilonewtonCentimetersPerMeter(): number;
    /** */
    get MeganewtonCentimetersPerMeter(): number;
    /** */
    get KilonewtonMetersPerMeter(): number;
    /** */
    get MeganewtonMetersPerMeter(): number;
    /** */
    get KilopoundForceInchesPerFoot(): number;
    /** */
    get MegapoundForceInchesPerFoot(): number;
    /** */
    get KilopoundForceFeetPerFoot(): number;
    /** */
    get MegapoundForceFeetPerFoot(): number;
    /**
     * Create a new TorquePerLength instance from a NewtonMillimetersPerMeter
     *
     * @param value The unit as NewtonMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromNewtonMillimetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a NewtonCentimetersPerMeter
     *
     * @param value The unit as NewtonCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromNewtonCentimetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a NewtonMetersPerMeter
     *
     * @param value The unit as NewtonMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromNewtonMetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a PoundForceInchesPerFoot
     *
     * @param value The unit as PoundForceInchesPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromPoundForceInchesPerFoot(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a PoundForceFeetPerFoot
     *
     * @param value The unit as PoundForceFeetPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromPoundForceFeetPerFoot(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a KilogramForceMillimetersPerMeter
     *
     * @param value The unit as KilogramForceMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilogramForceMillimetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a KilogramForceCentimetersPerMeter
     *
     * @param value The unit as KilogramForceCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilogramForceCentimetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a KilogramForceMetersPerMeter
     *
     * @param value The unit as KilogramForceMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilogramForceMetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a TonneForceMillimetersPerMeter
     *
     * @param value The unit as TonneForceMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromTonneForceMillimetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a TonneForceCentimetersPerMeter
     *
     * @param value The unit as TonneForceCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromTonneForceCentimetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a TonneForceMetersPerMeter
     *
     * @param value The unit as TonneForceMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromTonneForceMetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a KilonewtonMillimetersPerMeter
     *
     * @param value The unit as KilonewtonMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilonewtonMillimetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a MeganewtonMillimetersPerMeter
     *
     * @param value The unit as MeganewtonMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromMeganewtonMillimetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a KilonewtonCentimetersPerMeter
     *
     * @param value The unit as KilonewtonCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilonewtonCentimetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a MeganewtonCentimetersPerMeter
     *
     * @param value The unit as MeganewtonCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromMeganewtonCentimetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a KilonewtonMetersPerMeter
     *
     * @param value The unit as KilonewtonMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilonewtonMetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a MeganewtonMetersPerMeter
     *
     * @param value The unit as MeganewtonMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromMeganewtonMetersPerMeter(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a KilopoundForceInchesPerFoot
     *
     * @param value The unit as KilopoundForceInchesPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilopoundForceInchesPerFoot(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a MegapoundForceInchesPerFoot
     *
     * @param value The unit as MegapoundForceInchesPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromMegapoundForceInchesPerFoot(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a KilopoundForceFeetPerFoot
     *
     * @param value The unit as KilopoundForceFeetPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilopoundForceFeetPerFoot(value: number): TorquePerLength;
    /**
     * Create a new TorquePerLength instance from a MegapoundForceFeetPerFoot
     *
     * @param value The unit as MegapoundForceFeetPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromMegapoundForceFeetPerFoot(value: number): TorquePerLength;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the TorquePerLength to string.
     * Note! the default format for TorquePerLength is NewtonMetersPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the TorquePerLength.
     * @returns The string format of the TorquePerLength.
     */
    toString(toUnit?: TorquePerLengthUnits): string;
    /**
     * Check if the given TorquePerLength are equals to the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns True if the given TorquePerLength are equal to the current TorquePerLength.
     */
    equals(torquePerLength: TorquePerLength): boolean;
    /**
     * Compare the given TorquePerLength against the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns 0 if they are equal, -1 if the current TorquePerLength is less then other, 1 if the current TorquePerLength is greater then other.
     */
    compareTo(torquePerLength: TorquePerLength): number;
    /**
     * Add the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    add(torquePerLength: TorquePerLength): TorquePerLength;
    /**
     * Subtract the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    subtract(torquePerLength: TorquePerLength): TorquePerLength;
    /**
     * Multiply the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    multiply(torquePerLength: TorquePerLength): TorquePerLength;
    /**
     * Divide the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    divide(torquePerLength: TorquePerLength): TorquePerLength;
    /**
     * Modulo the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    modulo(torquePerLength: TorquePerLength): TorquePerLength;
    /**
     * Pow the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    pow(torquePerLength: TorquePerLength): TorquePerLength;
}
//# sourceMappingURL=torqueperlength.g.d.ts.map