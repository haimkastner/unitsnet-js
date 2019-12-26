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
    private newtonmillimetersLazy: number | null = null;
    private newtoncentimetersLazy: number | null = null;
    private newtonmetersLazy: number | null = null;
    private poundforceinchesLazy: number | null = null;
    private poundforcefeetLazy: number | null = null;
    private kilogramforcemillimetersLazy: number | null = null;
    private kilogramforcecentimetersLazy: number | null = null;
    private kilogramforcemetersLazy: number | null = null;
    private tonneforcemillimetersLazy: number | null = null;
    private tonneforcecentimetersLazy: number | null = null;
    private tonneforcemetersLazy: number | null = null;
    private kilonewtonmillimetersLazy: number | null = null;
    private meganewtonmillimetersLazy: number | null = null;
    private kilonewtoncentimetersLazy: number | null = null;
    private meganewtoncentimetersLazy: number | null = null;
    private kilonewtonmetersLazy: number | null = null;
    private meganewtonmetersLazy: number | null = null;
    private kilopoundforceinchesLazy: number | null = null;
    private megapoundforceinchesLazy: number | null = null;
    private kilopoundforcefeetLazy: number | null = null;
    private megapoundforcefeetLazy: number | null = null;

    public constructor(value: number, fromUnit: TorqueUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonMillimeters(): number {
        if(this.newtonmillimetersLazy !== null){
            return this.newtonmillimetersLazy;
        }
        return this.newtonmillimetersLazy = this.convertFromBase(TorqueUnits.NewtonMillimeters);
    }

    public get NewtonCentimeters(): number {
        if(this.newtoncentimetersLazy !== null){
            return this.newtoncentimetersLazy;
        }
        return this.newtoncentimetersLazy = this.convertFromBase(TorqueUnits.NewtonCentimeters);
    }

    public get NewtonMeters(): number {
        if(this.newtonmetersLazy !== null){
            return this.newtonmetersLazy;
        }
        return this.newtonmetersLazy = this.convertFromBase(TorqueUnits.NewtonMeters);
    }

    public get PoundForceInches(): number {
        if(this.poundforceinchesLazy !== null){
            return this.poundforceinchesLazy;
        }
        return this.poundforceinchesLazy = this.convertFromBase(TorqueUnits.PoundForceInches);
    }

    public get PoundForceFeet(): number {
        if(this.poundforcefeetLazy !== null){
            return this.poundforcefeetLazy;
        }
        return this.poundforcefeetLazy = this.convertFromBase(TorqueUnits.PoundForceFeet);
    }

    public get KilogramForceMillimeters(): number {
        if(this.kilogramforcemillimetersLazy !== null){
            return this.kilogramforcemillimetersLazy;
        }
        return this.kilogramforcemillimetersLazy = this.convertFromBase(TorqueUnits.KilogramForceMillimeters);
    }

    public get KilogramForceCentimeters(): number {
        if(this.kilogramforcecentimetersLazy !== null){
            return this.kilogramforcecentimetersLazy;
        }
        return this.kilogramforcecentimetersLazy = this.convertFromBase(TorqueUnits.KilogramForceCentimeters);
    }

    public get KilogramForceMeters(): number {
        if(this.kilogramforcemetersLazy !== null){
            return this.kilogramforcemetersLazy;
        }
        return this.kilogramforcemetersLazy = this.convertFromBase(TorqueUnits.KilogramForceMeters);
    }

    public get TonneForceMillimeters(): number {
        if(this.tonneforcemillimetersLazy !== null){
            return this.tonneforcemillimetersLazy;
        }
        return this.tonneforcemillimetersLazy = this.convertFromBase(TorqueUnits.TonneForceMillimeters);
    }

    public get TonneForceCentimeters(): number {
        if(this.tonneforcecentimetersLazy !== null){
            return this.tonneforcecentimetersLazy;
        }
        return this.tonneforcecentimetersLazy = this.convertFromBase(TorqueUnits.TonneForceCentimeters);
    }

    public get TonneForceMeters(): number {
        if(this.tonneforcemetersLazy !== null){
            return this.tonneforcemetersLazy;
        }
        return this.tonneforcemetersLazy = this.convertFromBase(TorqueUnits.TonneForceMeters);
    }

    public get Kilonewtonmillimeters(): number {
        if(this.kilonewtonmillimetersLazy !== null){
            return this.kilonewtonmillimetersLazy;
        }
        return this.kilonewtonmillimetersLazy = this.convertFromBase(TorqueUnits.Kilonewtonmillimeters);
    }

    public get Meganewtonmillimeters(): number {
        if(this.meganewtonmillimetersLazy !== null){
            return this.meganewtonmillimetersLazy;
        }
        return this.meganewtonmillimetersLazy = this.convertFromBase(TorqueUnits.Meganewtonmillimeters);
    }

    public get Kilonewtoncentimeters(): number {
        if(this.kilonewtoncentimetersLazy !== null){
            return this.kilonewtoncentimetersLazy;
        }
        return this.kilonewtoncentimetersLazy = this.convertFromBase(TorqueUnits.Kilonewtoncentimeters);
    }

    public get Meganewtoncentimeters(): number {
        if(this.meganewtoncentimetersLazy !== null){
            return this.meganewtoncentimetersLazy;
        }
        return this.meganewtoncentimetersLazy = this.convertFromBase(TorqueUnits.Meganewtoncentimeters);
    }

    public get Kilonewtonmeters(): number {
        if(this.kilonewtonmetersLazy !== null){
            return this.kilonewtonmetersLazy;
        }
        return this.kilonewtonmetersLazy = this.convertFromBase(TorqueUnits.Kilonewtonmeters);
    }

    public get Meganewtonmeters(): number {
        if(this.meganewtonmetersLazy !== null){
            return this.meganewtonmetersLazy;
        }
        return this.meganewtonmetersLazy = this.convertFromBase(TorqueUnits.Meganewtonmeters);
    }

    public get Kilopoundforceinches(): number {
        if(this.kilopoundforceinchesLazy !== null){
            return this.kilopoundforceinchesLazy;
        }
        return this.kilopoundforceinchesLazy = this.convertFromBase(TorqueUnits.Kilopoundforceinches);
    }

    public get Megapoundforceinches(): number {
        if(this.megapoundforceinchesLazy !== null){
            return this.megapoundforceinchesLazy;
        }
        return this.megapoundforceinchesLazy = this.convertFromBase(TorqueUnits.Megapoundforceinches);
    }

    public get Kilopoundforcefeet(): number {
        if(this.kilopoundforcefeetLazy !== null){
            return this.kilopoundforcefeetLazy;
        }
        return this.kilopoundforcefeetLazy = this.convertFromBase(TorqueUnits.Kilopoundforcefeet);
    }

    public get Megapoundforcefeet(): number {
        if(this.megapoundforcefeetLazy !== null){
            return this.megapoundforcefeetLazy;
        }
        return this.megapoundforcefeetLazy = this.convertFromBase(TorqueUnits.Megapoundforcefeet);
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
