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
    KilonewtonMillimeterPerMeter = 11,
    MeganewtonMillimeterPerMeter = 12,
    KilonewtonCentimeterPerMeter = 13,
    MeganewtonCentimeterPerMeter = 14,
    KilonewtonMeterPerMeter = 15,
    MeganewtonMeterPerMeter = 16,
    KilopoundForceInchPerFoot = 17,
    MegapoundForceInchPerFoot = 18,
    KilopoundForceFootPerFoot = 19,
    MegapoundForceFootPerFoot = 20
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
    private kilonewtonmillimeterpermeterLazy;
    private meganewtonmillimeterpermeterLazy;
    private kilonewtoncentimeterpermeterLazy;
    private meganewtoncentimeterpermeterLazy;
    private kilonewtonmeterpermeterLazy;
    private meganewtonmeterpermeterLazy;
    private kilopoundforceinchperfootLazy;
    private megapoundforceinchperfootLazy;
    private kilopoundforcefootperfootLazy;
    private megapoundforcefootperfootLazy;
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
    get KilonewtonMillimeterPerMeter(): number;
    get MeganewtonMillimeterPerMeter(): number;
    get KilonewtonCentimeterPerMeter(): number;
    get MeganewtonCentimeterPerMeter(): number;
    get KilonewtonMeterPerMeter(): number;
    get MeganewtonMeterPerMeter(): number;
    get KilopoundForceInchPerFoot(): number;
    get MegapoundForceInchPerFoot(): number;
    get KilopoundForceFootPerFoot(): number;
    get MegapoundForceFootPerFoot(): number;
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
    static FromKilonewtonMillimeterPerMeter(value: number): TorquePerLength;
    static FromMeganewtonMillimeterPerMeter(value: number): TorquePerLength;
    static FromKilonewtonCentimeterPerMeter(value: number): TorquePerLength;
    static FromMeganewtonCentimeterPerMeter(value: number): TorquePerLength;
    static FromKilonewtonMeterPerMeter(value: number): TorquePerLength;
    static FromMeganewtonMeterPerMeter(value: number): TorquePerLength;
    static FromKilopoundForceInchPerFoot(value: number): TorquePerLength;
    static FromMegapoundForceInchPerFoot(value: number): TorquePerLength;
    static FromKilopoundForceFootPerFoot(value: number): TorquePerLength;
    static FromMegapoundForceFootPerFoot(value: number): TorquePerLength;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: TorquePerLengthUnits): string;
}
//# sourceMappingURL=torqueperlength.g.d.ts.map