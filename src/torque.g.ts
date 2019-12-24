export enum TorqueUnits {
    NewtonMillimeters,
    NewtonCentimeters,
    NewtonMeters,
    PoundForceInches,
    PoundForceFeet,
    KilogramForceMillimeters,
    KilogramForceCentimeters,
    KilogramForceMeters,
    TonneForceMillimeters,
    TonneForceCentimeters,
    TonneForceMeters,
    Kilonewtonmillimeters,
    Meganewtonmillimeters,
    Kilonewtoncentimeters,
    Meganewtoncentimeters,
    Kilonewtonmeters,
    Meganewtonmeters,
    Kilopoundforceinches,
    Megapoundforceinches,
    Kilopoundforcefeet,
    Megapoundforcefeet
}

export class Torque {
    private value: number;

    public constructor(value: number, fromUnit: TorqueUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonMillimeters(): number {
        return this.convertFromBase(TorqueUnits.NewtonMillimeters);
    }

    public get NewtonCentimeters(): number {
        return this.convertFromBase(TorqueUnits.NewtonCentimeters);
    }

    public get NewtonMeters(): number {
        return this.convertFromBase(TorqueUnits.NewtonMeters);
    }

    public get PoundForceInches(): number {
        return this.convertFromBase(TorqueUnits.PoundForceInches);
    }

    public get PoundForceFeet(): number {
        return this.convertFromBase(TorqueUnits.PoundForceFeet);
    }

    public get KilogramForceMillimeters(): number {
        return this.convertFromBase(TorqueUnits.KilogramForceMillimeters);
    }

    public get KilogramForceCentimeters(): number {
        return this.convertFromBase(TorqueUnits.KilogramForceCentimeters);
    }

    public get KilogramForceMeters(): number {
        return this.convertFromBase(TorqueUnits.KilogramForceMeters);
    }

    public get TonneForceMillimeters(): number {
        return this.convertFromBase(TorqueUnits.TonneForceMillimeters);
    }

    public get TonneForceCentimeters(): number {
        return this.convertFromBase(TorqueUnits.TonneForceCentimeters);
    }

    public get TonneForceMeters(): number {
        return this.convertFromBase(TorqueUnits.TonneForceMeters);
    }

    public get Kilonewtonmillimeters(): number {
        return this.convertFromBase(TorqueUnits.Kilonewtonmillimeters);
    }

    public get Meganewtonmillimeters(): number {
        return this.convertFromBase(TorqueUnits.Meganewtonmillimeters);
    }

    public get Kilonewtoncentimeters(): number {
        return this.convertFromBase(TorqueUnits.Kilonewtoncentimeters);
    }

    public get Meganewtoncentimeters(): number {
        return this.convertFromBase(TorqueUnits.Meganewtoncentimeters);
    }

    public get Kilonewtonmeters(): number {
        return this.convertFromBase(TorqueUnits.Kilonewtonmeters);
    }

    public get Meganewtonmeters(): number {
        return this.convertFromBase(TorqueUnits.Meganewtonmeters);
    }

    public get Kilopoundforceinches(): number {
        return this.convertFromBase(TorqueUnits.Kilopoundforceinches);
    }

    public get Megapoundforceinches(): number {
        return this.convertFromBase(TorqueUnits.Megapoundforceinches);
    }

    public get Kilopoundforcefeet(): number {
        return this.convertFromBase(TorqueUnits.Kilopoundforcefeet);
    }

    public get Megapoundforcefeet(): number {
        return this.convertFromBase(TorqueUnits.Megapoundforcefeet);
    }

    public static FromNewtonMillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.NewtonMillimeters);
    }

    public static FromNewtonCentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.NewtonCentimeters);
    }

    public static FromNewtonMeters(value: number): Torque {
        return new Torque(value, TorqueUnits.NewtonMeters);
    }

    public static FromPoundForceInches(value: number): Torque {
        return new Torque(value, TorqueUnits.PoundForceInches);
    }

    public static FromPoundForceFeet(value: number): Torque {
        return new Torque(value, TorqueUnits.PoundForceFeet);
    }

    public static FromKilogramForceMillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.KilogramForceMillimeters);
    }

    public static FromKilogramForceCentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.KilogramForceCentimeters);
    }

    public static FromKilogramForceMeters(value: number): Torque {
        return new Torque(value, TorqueUnits.KilogramForceMeters);
    }

    public static FromTonneForceMillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.TonneForceMillimeters);
    }

    public static FromTonneForceCentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.TonneForceCentimeters);
    }

    public static FromTonneForceMeters(value: number): Torque {
        return new Torque(value, TorqueUnits.TonneForceMeters);
    }

    public static FromKilonewtonmillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.Kilonewtonmillimeters);
    }

    public static FromMeganewtonmillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.Meganewtonmillimeters);
    }

    public static FromKilonewtoncentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.Kilonewtoncentimeters);
    }

    public static FromMeganewtoncentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.Meganewtoncentimeters);
    }

    public static FromKilonewtonmeters(value: number): Torque {
        return new Torque(value, TorqueUnits.Kilonewtonmeters);
    }

    public static FromMeganewtonmeters(value: number): Torque {
        return new Torque(value, TorqueUnits.Meganewtonmeters);
    }

    public static FromKilopoundforceinches(value: number): Torque {
        return new Torque(value, TorqueUnits.Kilopoundforceinches);
    }

    public static FromMegapoundforceinches(value: number): Torque {
        return new Torque(value, TorqueUnits.Megapoundforceinches);
    }

    public static FromKilopoundforcefeet(value: number): Torque {
        return new Torque(value, TorqueUnits.Kilopoundforcefeet);
    }

    public static FromMegapoundforcefeet(value: number): Torque {
        return new Torque(value, TorqueUnits.Megapoundforcefeet);
    }

    private convertFromBase(toUnit: TorqueUnits): number {

                switch (toUnit) {
                    
                case TorqueUnits.NewtonMillimeters:
                    return this.value*1000;
                
                case TorqueUnits.NewtonCentimeters:
                    return this.value*100;
                
                case TorqueUnits.NewtonMeters:
                    return this.value;
                
                case TorqueUnits.PoundForceInches:
                    return this.value/1.129848290276167e-1;
                
                case TorqueUnits.PoundForceFeet:
                    return this.value/1.3558179483314;
                
                case TorqueUnits.KilogramForceMillimeters:
                    return this.value*101.971619222242;
                
                case TorqueUnits.KilogramForceCentimeters:
                    return this.value*10.1971619222242;
                
                case TorqueUnits.KilogramForceMeters:
                    return this.value*0.101971619222242;
                
                case TorqueUnits.TonneForceMillimeters:
                    return this.value*0.101971619222242;
                
                case TorqueUnits.TonneForceCentimeters:
                    return this.value*0.0101971619222242;
                
                case TorqueUnits.TonneForceMeters:
                    return this.value*0.000101971619222242;
                
                case TorqueUnits.Kilonewtonmillimeters:
                    return (this.value*1000) / 1000;
                
                case TorqueUnits.Meganewtonmillimeters:
                    return (this.value*1000) / 1000000;
                
                case TorqueUnits.Kilonewtoncentimeters:
                    return (this.value*100) / 1000;
                
                case TorqueUnits.Meganewtoncentimeters:
                    return (this.value*100) / 1000000;
                
                case TorqueUnits.Kilonewtonmeters:
                    return (this.value) / 1000;
                
                case TorqueUnits.Meganewtonmeters:
                    return (this.value) / 1000000;
                
                case TorqueUnits.Kilopoundforceinches:
                    return (this.value/1.129848290276167e-1) / 1000;
                
                case TorqueUnits.Megapoundforceinches:
                    return (this.value/1.129848290276167e-1) / 1000000;
                
                case TorqueUnits.Kilopoundforcefeet:
                    return (this.value/1.3558179483314) / 1000;
                
                case TorqueUnits.Megapoundforcefeet:
                    return (this.value/1.3558179483314) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: TorqueUnits): number {

                switch (fromUnit) {
                    
                case TorqueUnits.NewtonMillimeters:
                    return value*0.001;
                
                case TorqueUnits.NewtonCentimeters:
                    return value*0.01;
                
                case TorqueUnits.NewtonMeters:
                    return value;
                
                case TorqueUnits.PoundForceInches:
                    return value*1.129848290276167e-1;
                
                case TorqueUnits.PoundForceFeet:
                    return value*1.3558179483314;
                
                case TorqueUnits.KilogramForceMillimeters:
                    return value*0.00980665019960652;
                
                case TorqueUnits.KilogramForceCentimeters:
                    return value*0.0980665019960652;
                
                case TorqueUnits.KilogramForceMeters:
                    return value*9.80665019960652;
                
                case TorqueUnits.TonneForceMillimeters:
                    return value*9.80665019960652;
                
                case TorqueUnits.TonneForceCentimeters:
                    return value*98.0665019960652;
                
                case TorqueUnits.TonneForceMeters:
                    return value*9806.65019960653;
                
                case TorqueUnits.Kilonewtonmillimeters:
                    return (value*0.001) * 1000;
                
                case TorqueUnits.Meganewtonmillimeters:
                    return (value*0.001) * 1000000;
                
                case TorqueUnits.Kilonewtoncentimeters:
                    return (value*0.01) * 1000;
                
                case TorqueUnits.Meganewtoncentimeters:
                    return (value*0.01) * 1000000;
                
                case TorqueUnits.Kilonewtonmeters:
                    return (value) * 1000;
                
                case TorqueUnits.Meganewtonmeters:
                    return (value) * 1000000;
                
                case TorqueUnits.Kilopoundforceinches:
                    return (value*1.129848290276167e-1) * 1000;
                
                case TorqueUnits.Megapoundforceinches:
                    return (value*1.129848290276167e-1) * 1000000;
                
                case TorqueUnits.Kilopoundforcefeet:
                    return (value*1.3558179483314) * 1000;
                
                case TorqueUnits.Megapoundforcefeet:
                    return (value*1.3558179483314) * 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
