export enum TorquePerLengthUnits {
    NewtonMillimetersPerMeter,
    NewtonCentimetersPerMeter,
    NewtonMetersPerMeter,
    PoundForceInchesPerFoot,
    PoundForceFeetPerFoot,
    KilogramForceMillimetersPerMeter,
    KilogramForceCentimetersPerMeter,
    KilogramForceMetersPerMeter,
    TonneForceMillimetersPerMeter,
    TonneForceCentimetersPerMeter,
    TonneForceMetersPerMeter,
    Kilonewtonmillimeterspermeter,
    Meganewtonmillimeterspermeter,
    Kilonewtoncentimeterspermeter,
    Meganewtoncentimeterspermeter,
    Kilonewtonmeterspermeter,
    Meganewtonmeterspermeter,
    Kilopoundforceinchesperfoot,
    Megapoundforceinchesperfoot,
    Kilopoundforcefeetperfoot,
    Megapoundforcefeetperfoot
}

export class TorquePerLength {
    private value: number;

    public constructor(value: number, fromUnit: TorquePerLengthUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonMillimetersPerMeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.NewtonMillimetersPerMeter);
    }

    public get NewtonCentimetersPerMeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.NewtonCentimetersPerMeter);
    }

    public get NewtonMetersPerMeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.NewtonMetersPerMeter);
    }

    public get PoundForceInchesPerFoot(): number {
        return this.convertFromBase(TorquePerLengthUnits.PoundForceInchesPerFoot);
    }

    public get PoundForceFeetPerFoot(): number {
        return this.convertFromBase(TorquePerLengthUnits.PoundForceFeetPerFoot);
    }

    public get KilogramForceMillimetersPerMeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.KilogramForceMillimetersPerMeter);
    }

    public get KilogramForceCentimetersPerMeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.KilogramForceCentimetersPerMeter);
    }

    public get KilogramForceMetersPerMeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.KilogramForceMetersPerMeter);
    }

    public get TonneForceMillimetersPerMeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.TonneForceMillimetersPerMeter);
    }

    public get TonneForceCentimetersPerMeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.TonneForceCentimetersPerMeter);
    }

    public get TonneForceMetersPerMeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.TonneForceMetersPerMeter);
    }

    public get Kilonewtonmillimeterspermeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.Kilonewtonmillimeterspermeter);
    }

    public get Meganewtonmillimeterspermeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.Meganewtonmillimeterspermeter);
    }

    public get Kilonewtoncentimeterspermeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.Kilonewtoncentimeterspermeter);
    }

    public get Meganewtoncentimeterspermeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.Meganewtoncentimeterspermeter);
    }

    public get Kilonewtonmeterspermeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.Kilonewtonmeterspermeter);
    }

    public get Meganewtonmeterspermeter(): number {
        return this.convertFromBase(TorquePerLengthUnits.Meganewtonmeterspermeter);
    }

    public get Kilopoundforceinchesperfoot(): number {
        return this.convertFromBase(TorquePerLengthUnits.Kilopoundforceinchesperfoot);
    }

    public get Megapoundforceinchesperfoot(): number {
        return this.convertFromBase(TorquePerLengthUnits.Megapoundforceinchesperfoot);
    }

    public get Kilopoundforcefeetperfoot(): number {
        return this.convertFromBase(TorquePerLengthUnits.Kilopoundforcefeetperfoot);
    }

    public get Megapoundforcefeetperfoot(): number {
        return this.convertFromBase(TorquePerLengthUnits.Megapoundforcefeetperfoot);
    }

    public static FromNewtonMillimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.NewtonMillimetersPerMeter);
    }

    public static FromNewtonCentimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.NewtonCentimetersPerMeter);
    }

    public static FromNewtonMetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.NewtonMetersPerMeter);
    }

    public static FromPoundForceInchesPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.PoundForceInchesPerFoot);
    }

    public static FromPoundForceFeetPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.PoundForceFeetPerFoot);
    }

    public static FromKilogramForceMillimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilogramForceMillimetersPerMeter);
    }

    public static FromKilogramForceCentimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilogramForceCentimetersPerMeter);
    }

    public static FromKilogramForceMetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilogramForceMetersPerMeter);
    }

    public static FromTonneForceMillimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.TonneForceMillimetersPerMeter);
    }

    public static FromTonneForceCentimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.TonneForceCentimetersPerMeter);
    }

    public static FromTonneForceMetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.TonneForceMetersPerMeter);
    }

    public static FromKilonewtonmillimeterspermeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.Kilonewtonmillimeterspermeter);
    }

    public static FromMeganewtonmillimeterspermeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.Meganewtonmillimeterspermeter);
    }

    public static FromKilonewtoncentimeterspermeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.Kilonewtoncentimeterspermeter);
    }

    public static FromMeganewtoncentimeterspermeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.Meganewtoncentimeterspermeter);
    }

    public static FromKilonewtonmeterspermeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.Kilonewtonmeterspermeter);
    }

    public static FromMeganewtonmeterspermeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.Meganewtonmeterspermeter);
    }

    public static FromKilopoundforceinchesperfoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.Kilopoundforceinchesperfoot);
    }

    public static FromMegapoundforceinchesperfoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.Megapoundforceinchesperfoot);
    }

    public static FromKilopoundforcefeetperfoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.Kilopoundforcefeetperfoot);
    }

    public static FromMegapoundforcefeetperfoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.Megapoundforcefeetperfoot);
    }

    private convertFromBase(toUnit: TorquePerLengthUnits): number {

                switch (toUnit) {
                    
                case TorquePerLengthUnits.NewtonMillimetersPerMeter:
                    return this.value*1000;
                
                case TorquePerLengthUnits.NewtonCentimetersPerMeter:
                    return this.value*100;
                
                case TorquePerLengthUnits.NewtonMetersPerMeter:
                    return this.value;
                
                case TorquePerLengthUnits.PoundForceInchesPerFoot:
                    return this.value/0.370685147638;
                
                case TorquePerLengthUnits.PoundForceFeetPerFoot:
                    return this.value/4.44822161526;
                
                case TorquePerLengthUnits.KilogramForceMillimetersPerMeter:
                    return this.value*101.971619222242;
                
                case TorquePerLengthUnits.KilogramForceCentimetersPerMeter:
                    return this.value*10.1971619222242;
                
                case TorquePerLengthUnits.KilogramForceMetersPerMeter:
                    return this.value*0.101971619222242;
                
                case TorquePerLengthUnits.TonneForceMillimetersPerMeter:
                    return this.value*0.101971619222242;
                
                case TorquePerLengthUnits.TonneForceCentimetersPerMeter:
                    return this.value*0.0101971619222242;
                
                case TorquePerLengthUnits.TonneForceMetersPerMeter:
                    return this.value*0.000101971619222242;
                
                case TorquePerLengthUnits.Kilonewtonmillimeterspermeter:
                    return (this.value*1000) / 1000;
                
                case TorquePerLengthUnits.Meganewtonmillimeterspermeter:
                    return (this.value*1000) / 1000000;
                
                case TorquePerLengthUnits.Kilonewtoncentimeterspermeter:
                    return (this.value*100) / 1000;
                
                case TorquePerLengthUnits.Meganewtoncentimeterspermeter:
                    return (this.value*100) / 1000000;
                
                case TorquePerLengthUnits.Kilonewtonmeterspermeter:
                    return (this.value) / 1000;
                
                case TorquePerLengthUnits.Meganewtonmeterspermeter:
                    return (this.value) / 1000000;
                
                case TorquePerLengthUnits.Kilopoundforceinchesperfoot:
                    return (this.value/0.370685147638) / 1000;
                
                case TorquePerLengthUnits.Megapoundforceinchesperfoot:
                    return (this.value/0.370685147638) / 1000000;
                
                case TorquePerLengthUnits.Kilopoundforcefeetperfoot:
                    return (this.value/4.44822161526) / 1000;
                
                case TorquePerLengthUnits.Megapoundforcefeetperfoot:
                    return (this.value/4.44822161526) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: TorquePerLengthUnits): number {

                switch (fromUnit) {
                    
                case TorquePerLengthUnits.NewtonMillimetersPerMeter:
                    return value*0.001;
                
                case TorquePerLengthUnits.NewtonCentimetersPerMeter:
                    return value*0.01;
                
                case TorquePerLengthUnits.NewtonMetersPerMeter:
                    return value;
                
                case TorquePerLengthUnits.PoundForceInchesPerFoot:
                    return value*0.370685147638;
                
                case TorquePerLengthUnits.PoundForceFeetPerFoot:
                    return value*4.44822161526;
                
                case TorquePerLengthUnits.KilogramForceMillimetersPerMeter:
                    return value*0.00980665019960652;
                
                case TorquePerLengthUnits.KilogramForceCentimetersPerMeter:
                    return value*0.0980665019960652;
                
                case TorquePerLengthUnits.KilogramForceMetersPerMeter:
                    return value*9.80665019960652;
                
                case TorquePerLengthUnits.TonneForceMillimetersPerMeter:
                    return value*9.80665019960652;
                
                case TorquePerLengthUnits.TonneForceCentimetersPerMeter:
                    return value*98.0665019960652;
                
                case TorquePerLengthUnits.TonneForceMetersPerMeter:
                    return value*9806.65019960653;
                
                case TorquePerLengthUnits.Kilonewtonmillimeterspermeter:
                    return (value*0.001) * 1000;
                
                case TorquePerLengthUnits.Meganewtonmillimeterspermeter:
                    return (value*0.001) * 1000000;
                
                case TorquePerLengthUnits.Kilonewtoncentimeterspermeter:
                    return (value*0.01) * 1000;
                
                case TorquePerLengthUnits.Meganewtoncentimeterspermeter:
                    return (value*0.01) * 1000000;
                
                case TorquePerLengthUnits.Kilonewtonmeterspermeter:
                    return (value) * 1000;
                
                case TorquePerLengthUnits.Meganewtonmeterspermeter:
                    return (value) * 1000000;
                
                case TorquePerLengthUnits.Kilopoundforceinchesperfoot:
                    return (value*0.370685147638) * 1000;
                
                case TorquePerLengthUnits.Megapoundforceinchesperfoot:
                    return (value*0.370685147638) * 1000000;
                
                case TorquePerLengthUnits.Kilopoundforcefeetperfoot:
                    return (value*4.44822161526) * 1000;
                
                case TorquePerLengthUnits.Megapoundforcefeetperfoot:
                    return (value*4.44822161526) * 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
