export declare enum TorquePerLengthUnits {
    NewtonMillimetersPerMeter = 0,
    NewtonCentimetersPerMeter = 1,
    NewtonMetersPerMeter = 2,
    PoundForceInchesPerFoot = 3,
    PoundForceFeetPerFoot = 4,
    KilogramForceMillimetersPerMeter = 5,
    KilogramForceCentimetersPerMeter = 6,
    KilogramForceMetersPerMeter = 7,
    TonneForceMillimetersPerMeter = 8,
    TonneForceCentimetersPerMeter = 9,
    TonneForceMetersPerMeter = 10,
    KilonewtonMillimetersPerMeter = 11,
    MeganewtonMillimetersPerMeter = 12,
    KilonewtonCentimetersPerMeter = 13,
    MeganewtonCentimetersPerMeter = 14,
    KilonewtonMetersPerMeter = 15,
    MeganewtonMetersPerMeter = 16,
    KilopoundForceInchesPerFoot = 17,
    MegapoundForceInchesPerFoot = 18,
    KilopoundForceFeetPerFoot = 19,
    MegapoundForceFeetPerFoot = 20
}
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
    constructor(value: number, fromUnit: TorquePerLengthUnits);
    get NewtonMillimetersPerMeter(): number;
    get NewtonCentimetersPerMeter(): number;
    get NewtonMetersPerMeter(): number;
    get PoundForceInchesPerFoot(): number;
    get PoundForceFeetPerFoot(): number;
    get KilogramForceMillimetersPerMeter(): number;
    get KilogramForceCentimetersPerMeter(): number;
    get KilogramForceMetersPerMeter(): number;
    get TonneForceMillimetersPerMeter(): number;
    get TonneForceCentimetersPerMeter(): number;
    get TonneForceMetersPerMeter(): number;
    get KilonewtonMillimetersPerMeter(): number;
    get MeganewtonMillimetersPerMeter(): number;
    get KilonewtonCentimetersPerMeter(): number;
    get MeganewtonCentimetersPerMeter(): number;
    get KilonewtonMetersPerMeter(): number;
    get MeganewtonMetersPerMeter(): number;
    get KilopoundForceInchesPerFoot(): number;
    get MegapoundForceInchesPerFoot(): number;
    get KilopoundForceFeetPerFoot(): number;
    get MegapoundForceFeetPerFoot(): number;
    static FromNewtonMillimetersPerMeter(value: number): TorquePerLength;
    static FromNewtonCentimetersPerMeter(value: number): TorquePerLength;
    static FromNewtonMetersPerMeter(value: number): TorquePerLength;
    static FromPoundForceInchesPerFoot(value: number): TorquePerLength;
    static FromPoundForceFeetPerFoot(value: number): TorquePerLength;
    static FromKilogramForceMillimetersPerMeter(value: number): TorquePerLength;
    static FromKilogramForceCentimetersPerMeter(value: number): TorquePerLength;
    static FromKilogramForceMetersPerMeter(value: number): TorquePerLength;
    static FromTonneForceMillimetersPerMeter(value: number): TorquePerLength;
    static FromTonneForceCentimetersPerMeter(value: number): TorquePerLength;
    static FromTonneForceMetersPerMeter(value: number): TorquePerLength;
    static FromKilonewtonMillimetersPerMeter(value: number): TorquePerLength;
    static FromMeganewtonMillimetersPerMeter(value: number): TorquePerLength;
    static FromKilonewtonCentimetersPerMeter(value: number): TorquePerLength;
    static FromMeganewtonCentimetersPerMeter(value: number): TorquePerLength;
    static FromKilonewtonMetersPerMeter(value: number): TorquePerLength;
    static FromMeganewtonMetersPerMeter(value: number): TorquePerLength;
    static FromKilopoundForceInchesPerFoot(value: number): TorquePerLength;
    static FromMegapoundForceInchesPerFoot(value: number): TorquePerLength;
    static FromKilopoundForceFeetPerFoot(value: number): TorquePerLength;
    static FromMegapoundForceFeetPerFoot(value: number): TorquePerLength;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: TorquePerLengthUnits): string;
}
//# sourceMappingURL=torqueperlength.g.d.ts.map