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
    KilonewtonMillimeter = 11,
    MeganewtonMillimeter = 12,
    KilonewtonCentimeter = 13,
    MeganewtonCentimeter = 14,
    KilonewtonMeter = 15,
    MeganewtonMeter = 16,
    KilopoundForceInch = 17,
    MegapoundForceInch = 18,
    KilopoundForceFoot = 19,
    MegapoundForceFoot = 20
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
    private kilonewtonmillimeterLazy;
    private meganewtonmillimeterLazy;
    private kilonewtoncentimeterLazy;
    private meganewtoncentimeterLazy;
    private kilonewtonmeterLazy;
    private meganewtonmeterLazy;
    private kilopoundforceinchLazy;
    private megapoundforceinchLazy;
    private kilopoundforcefootLazy;
    private megapoundforcefootLazy;
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
    get KilonewtonMillimeter(): number;
    get MeganewtonMillimeter(): number;
    get KilonewtonCentimeter(): number;
    get MeganewtonCentimeter(): number;
    get KilonewtonMeter(): number;
    get MeganewtonMeter(): number;
    get KilopoundForceInch(): number;
    get MegapoundForceInch(): number;
    get KilopoundForceFoot(): number;
    get MegapoundForceFoot(): number;
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
    static FromKilonewtonMillimeter(value: number): Torque;
    static FromMeganewtonMillimeter(value: number): Torque;
    static FromKilonewtonCentimeter(value: number): Torque;
    static FromMeganewtonCentimeter(value: number): Torque;
    static FromKilonewtonMeter(value: number): Torque;
    static FromMeganewtonMeter(value: number): Torque;
    static FromKilopoundForceInch(value: number): Torque;
    static FromMegapoundForceInch(value: number): Torque;
    static FromKilopoundForceFoot(value: number): Torque;
    static FromMegapoundForceFoot(value: number): Torque;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: TorqueUnits): string;
}
//# sourceMappingURL=torque.g.d.ts.map