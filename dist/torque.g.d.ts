export declare enum TorqueUnits {
    NewtonMillimeters = 0,
    NewtonCentimeters = 1,
    NewtonMeters = 2,
    PoundForceInches = 3,
    PoundForceFeet = 4,
    KilogramForceMillimeters = 5,
    KilogramForceCentimeters = 6,
    KilogramForceMeters = 7,
    TonneForceMillimeters = 8,
    TonneForceCentimeters = 9,
    TonneForceMeters = 10,
    KilonewtonMillimeters = 11,
    MeganewtonMillimeters = 12,
    KilonewtonCentimeters = 13,
    MeganewtonCentimeters = 14,
    KilonewtonMeters = 15,
    MeganewtonMeters = 16,
    KilopoundForceInches = 17,
    MegapoundForceInches = 18,
    KilopoundForceFeet = 19,
    MegapoundForceFeet = 20
}
export declare class Torque {
    private value;
    private newtonmillimetersLazy;
    private newtoncentimetersLazy;
    private newtonmetersLazy;
    private poundforceinchesLazy;
    private poundforcefeetLazy;
    private kilogramforcemillimetersLazy;
    private kilogramforcecentimetersLazy;
    private kilogramforcemetersLazy;
    private tonneforcemillimetersLazy;
    private tonneforcecentimetersLazy;
    private tonneforcemetersLazy;
    private kilonewtonmillimetersLazy;
    private meganewtonmillimetersLazy;
    private kilonewtoncentimetersLazy;
    private meganewtoncentimetersLazy;
    private kilonewtonmetersLazy;
    private meganewtonmetersLazy;
    private kilopoundforceinchesLazy;
    private megapoundforceinchesLazy;
    private kilopoundforcefeetLazy;
    private megapoundforcefeetLazy;
    constructor(value: number, fromUnit: TorqueUnits);
    get NewtonMillimeters(): number;
    get NewtonCentimeters(): number;
    get NewtonMeters(): number;
    get PoundForceInches(): number;
    get PoundForceFeet(): number;
    get KilogramForceMillimeters(): number;
    get KilogramForceCentimeters(): number;
    get KilogramForceMeters(): number;
    get TonneForceMillimeters(): number;
    get TonneForceCentimeters(): number;
    get TonneForceMeters(): number;
    get KilonewtonMillimeters(): number;
    get MeganewtonMillimeters(): number;
    get KilonewtonCentimeters(): number;
    get MeganewtonCentimeters(): number;
    get KilonewtonMeters(): number;
    get MeganewtonMeters(): number;
    get KilopoundForceInches(): number;
    get MegapoundForceInches(): number;
    get KilopoundForceFeet(): number;
    get MegapoundForceFeet(): number;
    static FromNewtonMillimeters(value: number): Torque;
    static FromNewtonCentimeters(value: number): Torque;
    static FromNewtonMeters(value: number): Torque;
    static FromPoundForceInches(value: number): Torque;
    static FromPoundForceFeet(value: number): Torque;
    static FromKilogramForceMillimeters(value: number): Torque;
    static FromKilogramForceCentimeters(value: number): Torque;
    static FromKilogramForceMeters(value: number): Torque;
    static FromTonneForceMillimeters(value: number): Torque;
    static FromTonneForceCentimeters(value: number): Torque;
    static FromTonneForceMeters(value: number): Torque;
    static FromKilonewtonMillimeters(value: number): Torque;
    static FromMeganewtonMillimeters(value: number): Torque;
    static FromKilonewtonCentimeters(value: number): Torque;
    static FromMeganewtonCentimeters(value: number): Torque;
    static FromKilonewtonMeters(value: number): Torque;
    static FromMeganewtonMeters(value: number): Torque;
    static FromKilopoundForceInches(value: number): Torque;
    static FromMegapoundForceInches(value: number): Torque;
    static FromKilopoundForceFeet(value: number): Torque;
    static FromMegapoundForceFeet(value: number): Torque;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: TorqueUnits): string;
}
//# sourceMappingURL=torque.g.d.ts.map