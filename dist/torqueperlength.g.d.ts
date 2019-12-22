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
    Kilonewtonmillimeterspermeter = 11,
    Meganewtonmillimeterspermeter = 12,
    Kilonewtoncentimeterspermeter = 13,
    Meganewtoncentimeterspermeter = 14,
    Kilonewtonmeterspermeter = 15,
    Meganewtonmeterspermeter = 16,
    Kilopoundforceinchesperfoot = 17,
    Megapoundforceinchesperfoot = 18,
    Kilopoundforcefeetperfoot = 19,
    Megapoundforcefeetperfoot = 20
}
export declare class TorquePerLength {
    private value;
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
    get Kilonewtonmillimeterspermeter(): number;
    get Meganewtonmillimeterspermeter(): number;
    get Kilonewtoncentimeterspermeter(): number;
    get Meganewtoncentimeterspermeter(): number;
    get Kilonewtonmeterspermeter(): number;
    get Meganewtonmeterspermeter(): number;
    get Kilopoundforceinchesperfoot(): number;
    get Megapoundforceinchesperfoot(): number;
    get Kilopoundforcefeetperfoot(): number;
    get Megapoundforcefeetperfoot(): number;
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
    static FromKilonewtonmillimeterspermeter(value: number): TorquePerLength;
    static FromMeganewtonmillimeterspermeter(value: number): TorquePerLength;
    static FromKilonewtoncentimeterspermeter(value: number): TorquePerLength;
    static FromMeganewtoncentimeterspermeter(value: number): TorquePerLength;
    static FromKilonewtonmeterspermeter(value: number): TorquePerLength;
    static FromMeganewtonmeterspermeter(value: number): TorquePerLength;
    static FromKilopoundforceinchesperfoot(value: number): TorquePerLength;
    static FromMegapoundforceinchesperfoot(value: number): TorquePerLength;
    static FromKilopoundforcefeetperfoot(value: number): TorquePerLength;
    static FromMegapoundforcefeetperfoot(value: number): TorquePerLength;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=torqueperlength.g.d.ts.map