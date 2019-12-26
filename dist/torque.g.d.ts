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
    Kilonewtonmillimeters = 11,
    Meganewtonmillimeters = 12,
    Kilonewtoncentimeters = 13,
    Meganewtoncentimeters = 14,
    Kilonewtonmeters = 15,
    Meganewtonmeters = 16,
    Kilopoundforceinches = 17,
    Megapoundforceinches = 18,
    Kilopoundforcefeet = 19,
    Megapoundforcefeet = 20
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
    get Kilonewtonmillimeters(): number;
    get Meganewtonmillimeters(): number;
    get Kilonewtoncentimeters(): number;
    get Meganewtoncentimeters(): number;
    get Kilonewtonmeters(): number;
    get Meganewtonmeters(): number;
    get Kilopoundforceinches(): number;
    get Megapoundforceinches(): number;
    get Kilopoundforcefeet(): number;
    get Megapoundforcefeet(): number;
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
    static FromKilonewtonmillimeters(value: number): Torque;
    static FromMeganewtonmillimeters(value: number): Torque;
    static FromKilonewtoncentimeters(value: number): Torque;
    static FromMeganewtoncentimeters(value: number): Torque;
    static FromKilonewtonmeters(value: number): Torque;
    static FromMeganewtonmeters(value: number): Torque;
    static FromKilopoundforceinches(value: number): Torque;
    static FromMegapoundforceinches(value: number): Torque;
    static FromKilopoundforcefeet(value: number): Torque;
    static FromMegapoundforcefeet(value: number): Torque;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=torque.g.d.ts.map