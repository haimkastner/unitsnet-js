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
    KilonewtonMillimeters,
    MeganewtonMillimeters,
    KilonewtonCentimeters,
    MeganewtonCentimeters,
    KilonewtonMeters,
    MeganewtonMeters,
    KilopoundForceInches,
    MegapoundForceInches,
    KilopoundForceFeet,
    MegapoundForceFeet
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

    public get KilonewtonMillimeters(): number {
        if(this.kilonewtonmillimetersLazy !== null){
            return this.kilonewtonmillimetersLazy;
        }
        return this.kilonewtonmillimetersLazy = this.convertFromBase(TorqueUnits.KilonewtonMillimeters);
    }

    public get MeganewtonMillimeters(): number {
        if(this.meganewtonmillimetersLazy !== null){
            return this.meganewtonmillimetersLazy;
        }
        return this.meganewtonmillimetersLazy = this.convertFromBase(TorqueUnits.MeganewtonMillimeters);
    }

    public get KilonewtonCentimeters(): number {
        if(this.kilonewtoncentimetersLazy !== null){
            return this.kilonewtoncentimetersLazy;
        }
        return this.kilonewtoncentimetersLazy = this.convertFromBase(TorqueUnits.KilonewtonCentimeters);
    }

    public get MeganewtonCentimeters(): number {
        if(this.meganewtoncentimetersLazy !== null){
            return this.meganewtoncentimetersLazy;
        }
        return this.meganewtoncentimetersLazy = this.convertFromBase(TorqueUnits.MeganewtonCentimeters);
    }

    public get KilonewtonMeters(): number {
        if(this.kilonewtonmetersLazy !== null){
            return this.kilonewtonmetersLazy;
        }
        return this.kilonewtonmetersLazy = this.convertFromBase(TorqueUnits.KilonewtonMeters);
    }

    public get MeganewtonMeters(): number {
        if(this.meganewtonmetersLazy !== null){
            return this.meganewtonmetersLazy;
        }
        return this.meganewtonmetersLazy = this.convertFromBase(TorqueUnits.MeganewtonMeters);
    }

    public get KilopoundForceInches(): number {
        if(this.kilopoundforceinchesLazy !== null){
            return this.kilopoundforceinchesLazy;
        }
        return this.kilopoundforceinchesLazy = this.convertFromBase(TorqueUnits.KilopoundForceInches);
    }

    public get MegapoundForceInches(): number {
        if(this.megapoundforceinchesLazy !== null){
            return this.megapoundforceinchesLazy;
        }
        return this.megapoundforceinchesLazy = this.convertFromBase(TorqueUnits.MegapoundForceInches);
    }

    public get KilopoundForceFeet(): number {
        if(this.kilopoundforcefeetLazy !== null){
            return this.kilopoundforcefeetLazy;
        }
        return this.kilopoundforcefeetLazy = this.convertFromBase(TorqueUnits.KilopoundForceFeet);
    }

    public get MegapoundForceFeet(): number {
        if(this.megapoundforcefeetLazy !== null){
            return this.megapoundforcefeetLazy;
        }
        return this.megapoundforcefeetLazy = this.convertFromBase(TorqueUnits.MegapoundForceFeet);
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

    public static FromKilonewtonMillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.KilonewtonMillimeters);
    }

    public static FromMeganewtonMillimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.MeganewtonMillimeters);
    }

    public static FromKilonewtonCentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.KilonewtonCentimeters);
    }

    public static FromMeganewtonCentimeters(value: number): Torque {
        return new Torque(value, TorqueUnits.MeganewtonCentimeters);
    }

    public static FromKilonewtonMeters(value: number): Torque {
        return new Torque(value, TorqueUnits.KilonewtonMeters);
    }

    public static FromMeganewtonMeters(value: number): Torque {
        return new Torque(value, TorqueUnits.MeganewtonMeters);
    }

    public static FromKilopoundForceInches(value: number): Torque {
        return new Torque(value, TorqueUnits.KilopoundForceInches);
    }

    public static FromMegapoundForceInches(value: number): Torque {
        return new Torque(value, TorqueUnits.MegapoundForceInches);
    }

    public static FromKilopoundForceFeet(value: number): Torque {
        return new Torque(value, TorqueUnits.KilopoundForceFeet);
    }

    public static FromMegapoundForceFeet(value: number): Torque {
        return new Torque(value, TorqueUnits.MegapoundForceFeet);
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
            case TorqueUnits.KilonewtonMillimeters:
                return (this.value*1000) / 1000;
            case TorqueUnits.MeganewtonMillimeters:
                return (this.value*1000) / 1000000;
            case TorqueUnits.KilonewtonCentimeters:
                return (this.value*100) / 1000;
            case TorqueUnits.MeganewtonCentimeters:
                return (this.value*100) / 1000000;
            case TorqueUnits.KilonewtonMeters:
                return (this.value) / 1000;
            case TorqueUnits.MeganewtonMeters:
                return (this.value) / 1000000;
            case TorqueUnits.KilopoundForceInches:
                return (this.value/1.129848290276167e-1) / 1000;
            case TorqueUnits.MegapoundForceInches:
                return (this.value/1.129848290276167e-1) / 1000000;
            case TorqueUnits.KilopoundForceFeet:
                return (this.value/1.3558179483314) / 1000;
            case TorqueUnits.MegapoundForceFeet:
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
            case TorqueUnits.KilonewtonMillimeters:
                return (value*0.001) * 1000;
            case TorqueUnits.MeganewtonMillimeters:
                return (value*0.001) * 1000000;
            case TorqueUnits.KilonewtonCentimeters:
                return (value*0.01) * 1000;
            case TorqueUnits.MeganewtonCentimeters:
                return (value*0.01) * 1000000;
            case TorqueUnits.KilonewtonMeters:
                return (value) * 1000;
            case TorqueUnits.MeganewtonMeters:
                return (value) * 1000000;
            case TorqueUnits.KilopoundForceInches:
                return (value*1.129848290276167e-1) * 1000;
            case TorqueUnits.MegapoundForceInches:
                return (value*1.129848290276167e-1) * 1000000;
            case TorqueUnits.KilopoundForceFeet:
                return (value*1.3558179483314) * 1000;
            case TorqueUnits.MegapoundForceFeet:
                return (value*1.3558179483314) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: TorqueUnits = TorqueUnits.NewtonMeters): string {

        switch (toUnit) {
            
            case TorqueUnits.NewtonMillimeters:
                return this.NewtonMillimeters + ` N·mm`;
            case TorqueUnits.NewtonCentimeters:
                return this.NewtonCentimeters + ` N·cm`;
            case TorqueUnits.NewtonMeters:
                return this.NewtonMeters + ` N·m`;
            case TorqueUnits.PoundForceInches:
                return this.PoundForceInches + ` lbf·in`;
            case TorqueUnits.PoundForceFeet:
                return this.PoundForceFeet + ` lbf·ft`;
            case TorqueUnits.KilogramForceMillimeters:
                return this.KilogramForceMillimeters + ` kgf·mm`;
            case TorqueUnits.KilogramForceCentimeters:
                return this.KilogramForceCentimeters + ` kgf·cm`;
            case TorqueUnits.KilogramForceMeters:
                return this.KilogramForceMeters + ` kgf·m`;
            case TorqueUnits.TonneForceMillimeters:
                return this.TonneForceMillimeters + ` tf·mm`;
            case TorqueUnits.TonneForceCentimeters:
                return this.TonneForceCentimeters + ` tf·cm`;
            case TorqueUnits.TonneForceMeters:
                return this.TonneForceMeters + ` tf·m`;
            case TorqueUnits.KilonewtonMillimeters:
                return this.KilonewtonMillimeters + ` N·mm`;
            case TorqueUnits.MeganewtonMillimeters:
                return this.MeganewtonMillimeters + ` N·mm`;
            case TorqueUnits.KilonewtonCentimeters:
                return this.KilonewtonCentimeters + ` N·cm`;
            case TorqueUnits.MeganewtonCentimeters:
                return this.MeganewtonCentimeters + ` N·cm`;
            case TorqueUnits.KilonewtonMeters:
                return this.KilonewtonMeters + ` N·m`;
            case TorqueUnits.MeganewtonMeters:
                return this.MeganewtonMeters + ` N·m`;
            case TorqueUnits.KilopoundForceInches:
                return this.KilopoundForceInches + ` lbf·in`;
            case TorqueUnits.MegapoundForceInches:
                return this.MegapoundForceInches + ` lbf·in`;
            case TorqueUnits.KilopoundForceFeet:
                return this.KilopoundForceFeet + ` lbf·ft`;
            case TorqueUnits.MegapoundForceFeet:
                return this.MegapoundForceFeet + ` lbf·ft`;
        default:
            break;
        }
        return this.value.toString();
    }
}
