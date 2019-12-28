/** MolarMassUnits enumeration */
export declare enum MolarMassUnits {
    /** */
    GramsPerMole = 0,
    /** */
    PoundsPerMole = 1,
    /** */
    NanogramsPerMole = 2,
    /** */
    MicrogramsPerMole = 3,
    /** */
    CentigramsPerMole = 4,
    /** */
    DecigramsPerMole = 5,
    /** */
    DecagramsPerMole = 6,
    /** */
    HectogramsPerMole = 7,
    /** */
    KilogramsPerMole = 8,
    /** */
    KilopoundsPerMole = 9,
    /** */
    MegapoundsPerMole = 10
}
/** In chemistry, the molar mass M is a physical property defined as the mass of a given substance (chemical element or chemical compound) divided by the amount of substance. */
export declare class MolarMass {
    private value;
    private gramspermoleLazy;
    private poundspermoleLazy;
    private nanogramspermoleLazy;
    private microgramspermoleLazy;
    private centigramspermoleLazy;
    private decigramspermoleLazy;
    private decagramspermoleLazy;
    private hectogramspermoleLazy;
    private kilogramspermoleLazy;
    private kilopoundspermoleLazy;
    private megapoundspermoleLazy;
    /**
     * Create a new MolarMass.
     * @param value The value.
     * @param fromUnit The ‘MolarMass’ unit to create from.
     * The default unit is KilogramsPerMole
     */
    constructor(value: number, fromUnit?: MolarMassUnits);
    /**
     * The base value of MolarMass is KilogramsPerMole.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get GramsPerMole(): number;
    /** */
    get PoundsPerMole(): number;
    /** */
    get NanogramsPerMole(): number;
    /** */
    get MicrogramsPerMole(): number;
    /** */
    get CentigramsPerMole(): number;
    /** */
    get DecigramsPerMole(): number;
    /** */
    get DecagramsPerMole(): number;
    /** */
    get HectogramsPerMole(): number;
    /** */
    get KilogramsPerMole(): number;
    /** */
    get KilopoundsPerMole(): number;
    /** */
    get MegapoundsPerMole(): number;
    /**
     * Create a new MolarMass instance from a GramsPerMole
     *
     * @param value The unit as GramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromGramsPerMole(value: number): MolarMass;
    /**
     * Create a new MolarMass instance from a PoundsPerMole
     *
     * @param value The unit as PoundsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromPoundsPerMole(value: number): MolarMass;
    /**
     * Create a new MolarMass instance from a NanogramsPerMole
     *
     * @param value The unit as NanogramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromNanogramsPerMole(value: number): MolarMass;
    /**
     * Create a new MolarMass instance from a MicrogramsPerMole
     *
     * @param value The unit as MicrogramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromMicrogramsPerMole(value: number): MolarMass;
    /**
     * Create a new MolarMass instance from a CentigramsPerMole
     *
     * @param value The unit as CentigramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromCentigramsPerMole(value: number): MolarMass;
    /**
     * Create a new MolarMass instance from a DecigramsPerMole
     *
     * @param value The unit as DecigramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromDecigramsPerMole(value: number): MolarMass;
    /**
     * Create a new MolarMass instance from a DecagramsPerMole
     *
     * @param value The unit as DecagramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromDecagramsPerMole(value: number): MolarMass;
    /**
     * Create a new MolarMass instance from a HectogramsPerMole
     *
     * @param value The unit as HectogramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromHectogramsPerMole(value: number): MolarMass;
    /**
     * Create a new MolarMass instance from a KilogramsPerMole
     *
     * @param value The unit as KilogramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromKilogramsPerMole(value: number): MolarMass;
    /**
     * Create a new MolarMass instance from a KilopoundsPerMole
     *
     * @param value The unit as KilopoundsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromKilopoundsPerMole(value: number): MolarMass;
    /**
     * Create a new MolarMass instance from a MegapoundsPerMole
     *
     * @param value The unit as MegapoundsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromMegapoundsPerMole(value: number): MolarMass;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the MolarMass to string.
     * Note! the default format for MolarMass is KilogramsPerMole.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MolarMass.
     * @returns The string format of the MolarMass.
     */
    toString(toUnit?: MolarMassUnits): string;
    /**
     * Check if the given MolarMass are equals to the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns True if the given MolarMass are equal to the current MolarMass.
     */
    equals(molarMass: MolarMass): boolean;
    /**
     * Compare the given MolarMass against the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns 0 if they are equal, -1 if the current MolarMass is less then other, 1 if the current MolarMass is greater then other.
     */
    compareTo(molarMass: MolarMass): number;
    /**
     * Add the given MolarMass with the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns A new MolarMass instance with the results.
     */
    add(molarMass: MolarMass): MolarMass;
    /**
     * Subtract the given MolarMass with the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns A new MolarMass instance with the results.
     */
    subtract(molarMass: MolarMass): MolarMass;
    /**
     * Multiply the given MolarMass with the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns A new MolarMass instance with the results.
     */
    multiply(molarMass: MolarMass): MolarMass;
    /**
     * Divide the given MolarMass with the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns A new MolarMass instance with the results.
     */
    divide(molarMass: MolarMass): MolarMass;
    /**
     * Modulo the given MolarMass with the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns A new MolarMass instance with the results.
     */
    modulo(molarMass: MolarMass): MolarMass;
    /**
     * Pow the given MolarMass with the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns A new MolarMass instance with the results.
     */
    pow(molarMass: MolarMass): MolarMass;
}
//# sourceMappingURL=molarmass.g.d.ts.map