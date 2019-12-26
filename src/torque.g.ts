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
    KilonewtonMillimeter,
    MeganewtonMillimeter,
    KilonewtonCentimeter,
    MeganewtonCentimeter,
    KilonewtonMeter,
    MeganewtonMeter,
    KilopoundForceInch,
    MegapoundForceInch,
    KilopoundForceFoot,
    MegapoundForceFoot
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
    private kilonewtonmillimeterLazy: number | null = null;
    private meganewtonmillimeterLazy: number | null = null;
    private kilonewtoncentimeterLazy: number | null = null;
    private meganewtoncentimeterLazy: number | null = null;
    private kilonewtonmeterLazy: number | null = null;
    private meganewtonmeterLazy: number | null = null;
    private kilopoundforceinchLazy: number | null = null;
    private megapoundforceinchLazy: number | null = null;
    private kilopoundforcefootLazy: number | null = null;
    private megapoundforcefootLazy: number | null = null;

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

    public get KilonewtonMillimeter(): number {
        if(this.kilonewtonmillimeterLazy !== null){
            return this.kilonewtonmillimeterLazy;
        }
        return this.kilonewtonmillimeterLazy = this.convertFromBase(TorqueUnits.KilonewtonMillimeter);
    }

    public get MeganewtonMillimeter(): number {
        if(this.meganewtonmillimeterLazy !== null){
            return this.meganewtonmillimeterLazy;
        }
        return this.meganewtonmillimeterLazy = this.convertFromBase(TorqueUnits.MeganewtonMillimeter);
    }

    public get KilonewtonCentimeter(): number {
        if(this.kilonewtoncentimeterLazy !== null){
            return this.kilonewtoncentimeterLazy;
        }
        return this.kilonewtoncentimeterLazy = this.convertFromBase(TorqueUnits.KilonewtonCentimeter);
    }

    public get MeganewtonCentimeter(): number {
        if(this.meganewtoncentimeterLazy !== null){
            return this.meganewtoncentimeterLazy;
        }
        return this.meganewtoncentimeterLazy = this.convertFromBase(TorqueUnits.MeganewtonCentimeter);
    }

    public get KilonewtonMeter(): number {
        if(this.kilonewtonmeterLazy !== null){
            return this.kilonewtonmeterLazy;
        }
        return this.kilonewtonmeterLazy = this.convertFromBase(TorqueUnits.KilonewtonMeter);
    }

    public get MeganewtonMeter(): number {
        if(this.meganewtonmeterLazy !== null){
            return this.meganewtonmeterLazy;
        }
        return this.meganewtonmeterLazy = this.convertFromBase(TorqueUnits.MeganewtonMeter);
    }

    public get KilopoundForceInch(): number {
        if(this.kilopoundforceinchLazy !== null){
            return this.kilopoundforceinchLazy;
        }
        return this.kilopoundforceinchLazy = this.convertFromBase(TorqueUnits.KilopoundForceInch);
    }

    public get MegapoundForceInch(): number {
        if(this.megapoundforceinchLazy !== null){
            return this.megapoundforceinchLazy;
        }
        return this.megapoundforceinchLazy = this.convertFromBase(TorqueUnits.MegapoundForceInch);
    }

    public get KilopoundForceFoot(): number {
        if(this.kilopoundforcefootLazy !== null){
            return this.kilopoundforcefootLazy;
        }
        return this.kilopoundforcefootLazy = this.convertFromBase(TorqueUnits.KilopoundForceFoot);
    }

    public get MegapoundForceFoot(): number {
        if(this.megapoundforcefootLazy !== null){
            return this.megapoundforcefootLazy;
        }
        return this.megapoundforcefootLazy = this.convertFromBase(TorqueUnits.MegapoundForceFoot);
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

    public static FromKilonewtonMillimeter(value: number): Torque {
        return new Torque(value, TorqueUnits.KilonewtonMillimeter);
    }

    public static FromMeganewtonMillimeter(value: number): Torque {
        return new Torque(value, TorqueUnits.MeganewtonMillimeter);
    }

    public static FromKilonewtonCentimeter(value: number): Torque {
        return new Torque(value, TorqueUnits.KilonewtonCentimeter);
    }

    public static FromMeganewtonCentimeter(value: number): Torque {
        return new Torque(value, TorqueUnits.MeganewtonCentimeter);
    }

    public static FromKilonewtonMeter(value: number): Torque {
        return new Torque(value, TorqueUnits.KilonewtonMeter);
    }

    public static FromMeganewtonMeter(value: number): Torque {
        return new Torque(value, TorqueUnits.MeganewtonMeter);
    }

    public static FromKilopoundForceInch(value: number): Torque {
        return new Torque(value, TorqueUnits.KilopoundForceInch);
    }

    public static FromMegapoundForceInch(value: number): Torque {
        return new Torque(value, TorqueUnits.MegapoundForceInch);
    }

    public static FromKilopoundForceFoot(value: number): Torque {
        return new Torque(value, TorqueUnits.KilopoundForceFoot);
    }

    public static FromMegapoundForceFoot(value: number): Torque {
        return new Torque(value, TorqueUnits.MegapoundForceFoot);
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
            case TorqueUnits.KilonewtonMillimeter:
                return (this.value*1000) / 1000;
            case TorqueUnits.MeganewtonMillimeter:
                return (this.value*1000) / 1000000;
            case TorqueUnits.KilonewtonCentimeter:
                return (this.value*100) / 1000;
            case TorqueUnits.MeganewtonCentimeter:
                return (this.value*100) / 1000000;
            case TorqueUnits.KilonewtonMeter:
                return (this.value) / 1000;
            case TorqueUnits.MeganewtonMeter:
                return (this.value) / 1000000;
            case TorqueUnits.KilopoundForceInch:
                return (this.value/1.129848290276167e-1) / 1000;
            case TorqueUnits.MegapoundForceInch:
                return (this.value/1.129848290276167e-1) / 1000000;
            case TorqueUnits.KilopoundForceFoot:
                return (this.value/1.3558179483314) / 1000;
            case TorqueUnits.MegapoundForceFoot:
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
            case TorqueUnits.KilonewtonMillimeter:
                return (value*0.001) * 1000;
            case TorqueUnits.MeganewtonMillimeter:
                return (value*0.001) * 1000000;
            case TorqueUnits.KilonewtonCentimeter:
                return (value*0.01) * 1000;
            case TorqueUnits.MeganewtonCentimeter:
                return (value*0.01) * 1000000;
            case TorqueUnits.KilonewtonMeter:
                return (value) * 1000;
            case TorqueUnits.MeganewtonMeter:
                return (value) * 1000000;
            case TorqueUnits.KilopoundForceInch:
                return (value*1.129848290276167e-1) * 1000;
            case TorqueUnits.MegapoundForceInch:
                return (value*1.129848290276167e-1) * 1000000;
            case TorqueUnits.KilopoundForceFoot:
                return (value*1.3558179483314) * 1000;
            case TorqueUnits.MegapoundForceFoot:
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
            case TorqueUnits.KilonewtonMillimeter:
                return this.KilonewtonMillimeter + ` N·mm`;
            case TorqueUnits.MeganewtonMillimeter:
                return this.MeganewtonMillimeter + ` N·mm`;
            case TorqueUnits.KilonewtonCentimeter:
                return this.KilonewtonCentimeter + ` N·cm`;
            case TorqueUnits.MeganewtonCentimeter:
                return this.MeganewtonCentimeter + ` N·cm`;
            case TorqueUnits.KilonewtonMeter:
                return this.KilonewtonMeter + ` N·m`;
            case TorqueUnits.MeganewtonMeter:
                return this.MeganewtonMeter + ` N·m`;
            case TorqueUnits.KilopoundForceInch:
                return this.KilopoundForceInch + ` lbf·in`;
            case TorqueUnits.MegapoundForceInch:
                return this.MegapoundForceInch + ` lbf·in`;
            case TorqueUnits.KilopoundForceFoot:
                return this.KilopoundForceFoot + ` lbf·ft`;
            case TorqueUnits.MegapoundForceFoot:
                return this.MegapoundForceFoot + ` lbf·ft`;
        default:
            break;
        }
        return this.value.toString();
    }
}
