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
    KilonewtonMillimetersPerMeter,
    MeganewtonMillimetersPerMeter,
    KilonewtonCentimetersPerMeter,
    MeganewtonCentimetersPerMeter,
    KilonewtonMetersPerMeter,
    MeganewtonMetersPerMeter,
    KilopoundForceInchesPerFoot,
    MegapoundForceInchesPerFoot,
    KilopoundForceFeetPerFoot,
    MegapoundForceFeetPerFoot
}

export class TorquePerLength {
    private value: number;
    private newtonmillimeterspermeterLazy: number | null = null;
    private newtoncentimeterspermeterLazy: number | null = null;
    private newtonmeterspermeterLazy: number | null = null;
    private poundforceinchesperfootLazy: number | null = null;
    private poundforcefeetperfootLazy: number | null = null;
    private kilogramforcemillimeterspermeterLazy: number | null = null;
    private kilogramforcecentimeterspermeterLazy: number | null = null;
    private kilogramforcemeterspermeterLazy: number | null = null;
    private tonneforcemillimeterspermeterLazy: number | null = null;
    private tonneforcecentimeterspermeterLazy: number | null = null;
    private tonneforcemeterspermeterLazy: number | null = null;
    private kilonewtonmillimeterspermeterLazy: number | null = null;
    private meganewtonmillimeterspermeterLazy: number | null = null;
    private kilonewtoncentimeterspermeterLazy: number | null = null;
    private meganewtoncentimeterspermeterLazy: number | null = null;
    private kilonewtonmeterspermeterLazy: number | null = null;
    private meganewtonmeterspermeterLazy: number | null = null;
    private kilopoundforceinchesperfootLazy: number | null = null;
    private megapoundforceinchesperfootLazy: number | null = null;
    private kilopoundforcefeetperfootLazy: number | null = null;
    private megapoundforcefeetperfootLazy: number | null = null;

    public constructor(value: number, fromUnit: TorquePerLengthUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonMillimetersPerMeter(): number {
        if(this.newtonmillimeterspermeterLazy !== null){
            return this.newtonmillimeterspermeterLazy;
        }
        return this.newtonmillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.NewtonMillimetersPerMeter);
    }

    public get NewtonCentimetersPerMeter(): number {
        if(this.newtoncentimeterspermeterLazy !== null){
            return this.newtoncentimeterspermeterLazy;
        }
        return this.newtoncentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.NewtonCentimetersPerMeter);
    }

    public get NewtonMetersPerMeter(): number {
        if(this.newtonmeterspermeterLazy !== null){
            return this.newtonmeterspermeterLazy;
        }
        return this.newtonmeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.NewtonMetersPerMeter);
    }

    public get PoundForceInchesPerFoot(): number {
        if(this.poundforceinchesperfootLazy !== null){
            return this.poundforceinchesperfootLazy;
        }
        return this.poundforceinchesperfootLazy = this.convertFromBase(TorquePerLengthUnits.PoundForceInchesPerFoot);
    }

    public get PoundForceFeetPerFoot(): number {
        if(this.poundforcefeetperfootLazy !== null){
            return this.poundforcefeetperfootLazy;
        }
        return this.poundforcefeetperfootLazy = this.convertFromBase(TorquePerLengthUnits.PoundForceFeetPerFoot);
    }

    public get KilogramForceMillimetersPerMeter(): number {
        if(this.kilogramforcemillimeterspermeterLazy !== null){
            return this.kilogramforcemillimeterspermeterLazy;
        }
        return this.kilogramforcemillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilogramForceMillimetersPerMeter);
    }

    public get KilogramForceCentimetersPerMeter(): number {
        if(this.kilogramforcecentimeterspermeterLazy !== null){
            return this.kilogramforcecentimeterspermeterLazy;
        }
        return this.kilogramforcecentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilogramForceCentimetersPerMeter);
    }

    public get KilogramForceMetersPerMeter(): number {
        if(this.kilogramforcemeterspermeterLazy !== null){
            return this.kilogramforcemeterspermeterLazy;
        }
        return this.kilogramforcemeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilogramForceMetersPerMeter);
    }

    public get TonneForceMillimetersPerMeter(): number {
        if(this.tonneforcemillimeterspermeterLazy !== null){
            return this.tonneforcemillimeterspermeterLazy;
        }
        return this.tonneforcemillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.TonneForceMillimetersPerMeter);
    }

    public get TonneForceCentimetersPerMeter(): number {
        if(this.tonneforcecentimeterspermeterLazy !== null){
            return this.tonneforcecentimeterspermeterLazy;
        }
        return this.tonneforcecentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.TonneForceCentimetersPerMeter);
    }

    public get TonneForceMetersPerMeter(): number {
        if(this.tonneforcemeterspermeterLazy !== null){
            return this.tonneforcemeterspermeterLazy;
        }
        return this.tonneforcemeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.TonneForceMetersPerMeter);
    }

    public get KilonewtonMillimetersPerMeter(): number {
        if(this.kilonewtonmillimeterspermeterLazy !== null){
            return this.kilonewtonmillimeterspermeterLazy;
        }
        return this.kilonewtonmillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonMillimetersPerMeter);
    }

    public get MeganewtonMillimetersPerMeter(): number {
        if(this.meganewtonmillimeterspermeterLazy !== null){
            return this.meganewtonmillimeterspermeterLazy;
        }
        return this.meganewtonmillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonMillimetersPerMeter);
    }

    public get KilonewtonCentimetersPerMeter(): number {
        if(this.kilonewtoncentimeterspermeterLazy !== null){
            return this.kilonewtoncentimeterspermeterLazy;
        }
        return this.kilonewtoncentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonCentimetersPerMeter);
    }

    public get MeganewtonCentimetersPerMeter(): number {
        if(this.meganewtoncentimeterspermeterLazy !== null){
            return this.meganewtoncentimeterspermeterLazy;
        }
        return this.meganewtoncentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonCentimetersPerMeter);
    }

    public get KilonewtonMetersPerMeter(): number {
        if(this.kilonewtonmeterspermeterLazy !== null){
            return this.kilonewtonmeterspermeterLazy;
        }
        return this.kilonewtonmeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonMetersPerMeter);
    }

    public get MeganewtonMetersPerMeter(): number {
        if(this.meganewtonmeterspermeterLazy !== null){
            return this.meganewtonmeterspermeterLazy;
        }
        return this.meganewtonmeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonMetersPerMeter);
    }

    public get KilopoundForceInchesPerFoot(): number {
        if(this.kilopoundforceinchesperfootLazy !== null){
            return this.kilopoundforceinchesperfootLazy;
        }
        return this.kilopoundforceinchesperfootLazy = this.convertFromBase(TorquePerLengthUnits.KilopoundForceInchesPerFoot);
    }

    public get MegapoundForceInchesPerFoot(): number {
        if(this.megapoundforceinchesperfootLazy !== null){
            return this.megapoundforceinchesperfootLazy;
        }
        return this.megapoundforceinchesperfootLazy = this.convertFromBase(TorquePerLengthUnits.MegapoundForceInchesPerFoot);
    }

    public get KilopoundForceFeetPerFoot(): number {
        if(this.kilopoundforcefeetperfootLazy !== null){
            return this.kilopoundforcefeetperfootLazy;
        }
        return this.kilopoundforcefeetperfootLazy = this.convertFromBase(TorquePerLengthUnits.KilopoundForceFeetPerFoot);
    }

    public get MegapoundForceFeetPerFoot(): number {
        if(this.megapoundforcefeetperfootLazy !== null){
            return this.megapoundforcefeetperfootLazy;
        }
        return this.megapoundforcefeetperfootLazy = this.convertFromBase(TorquePerLengthUnits.MegapoundForceFeetPerFoot);
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

    public static FromKilonewtonMillimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonMillimetersPerMeter);
    }

    public static FromMeganewtonMillimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonMillimetersPerMeter);
    }

    public static FromKilonewtonCentimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonCentimetersPerMeter);
    }

    public static FromMeganewtonCentimetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonCentimetersPerMeter);
    }

    public static FromKilonewtonMetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonMetersPerMeter);
    }

    public static FromMeganewtonMetersPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonMetersPerMeter);
    }

    public static FromKilopoundForceInchesPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilopoundForceInchesPerFoot);
    }

    public static FromMegapoundForceInchesPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MegapoundForceInchesPerFoot);
    }

    public static FromKilopoundForceFeetPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilopoundForceFeetPerFoot);
    }

    public static FromMegapoundForceFeetPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MegapoundForceFeetPerFoot);
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
            case TorquePerLengthUnits.KilonewtonMillimetersPerMeter:
                return (this.value*1000) / 1000;
            case TorquePerLengthUnits.MeganewtonMillimetersPerMeter:
                return (this.value*1000) / 1000000;
            case TorquePerLengthUnits.KilonewtonCentimetersPerMeter:
                return (this.value*100) / 1000;
            case TorquePerLengthUnits.MeganewtonCentimetersPerMeter:
                return (this.value*100) / 1000000;
            case TorquePerLengthUnits.KilonewtonMetersPerMeter:
                return (this.value) / 1000;
            case TorquePerLengthUnits.MeganewtonMetersPerMeter:
                return (this.value) / 1000000;
            case TorquePerLengthUnits.KilopoundForceInchesPerFoot:
                return (this.value/0.370685147638) / 1000;
            case TorquePerLengthUnits.MegapoundForceInchesPerFoot:
                return (this.value/0.370685147638) / 1000000;
            case TorquePerLengthUnits.KilopoundForceFeetPerFoot:
                return (this.value/4.44822161526) / 1000;
            case TorquePerLengthUnits.MegapoundForceFeetPerFoot:
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
            case TorquePerLengthUnits.KilonewtonMillimetersPerMeter:
                return (value*0.001) * 1000;
            case TorquePerLengthUnits.MeganewtonMillimetersPerMeter:
                return (value*0.001) * 1000000;
            case TorquePerLengthUnits.KilonewtonCentimetersPerMeter:
                return (value*0.01) * 1000;
            case TorquePerLengthUnits.MeganewtonCentimetersPerMeter:
                return (value*0.01) * 1000000;
            case TorquePerLengthUnits.KilonewtonMetersPerMeter:
                return (value) * 1000;
            case TorquePerLengthUnits.MeganewtonMetersPerMeter:
                return (value) * 1000000;
            case TorquePerLengthUnits.KilopoundForceInchesPerFoot:
                return (value*0.370685147638) * 1000;
            case TorquePerLengthUnits.MegapoundForceInchesPerFoot:
                return (value*0.370685147638) * 1000000;
            case TorquePerLengthUnits.KilopoundForceFeetPerFoot:
                return (value*4.44822161526) * 1000;
            case TorquePerLengthUnits.MegapoundForceFeetPerFoot:
                return (value*4.44822161526) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: TorquePerLengthUnits = TorquePerLengthUnits.NewtonMetersPerMeter): string {

        switch (toUnit) {
            
            case TorquePerLengthUnits.NewtonMillimetersPerMeter:
                return this.NewtonMillimetersPerMeter + ` N·mm/m`;
            case TorquePerLengthUnits.NewtonCentimetersPerMeter:
                return this.NewtonCentimetersPerMeter + ` N·cm/m`;
            case TorquePerLengthUnits.NewtonMetersPerMeter:
                return this.NewtonMetersPerMeter + ` N·m/m`;
            case TorquePerLengthUnits.PoundForceInchesPerFoot:
                return this.PoundForceInchesPerFoot + ` lbf·in/ft`;
            case TorquePerLengthUnits.PoundForceFeetPerFoot:
                return this.PoundForceFeetPerFoot + ` lbf·ft/ft`;
            case TorquePerLengthUnits.KilogramForceMillimetersPerMeter:
                return this.KilogramForceMillimetersPerMeter + ` kgf·mm/m`;
            case TorquePerLengthUnits.KilogramForceCentimetersPerMeter:
                return this.KilogramForceCentimetersPerMeter + ` kgf·cm/m`;
            case TorquePerLengthUnits.KilogramForceMetersPerMeter:
                return this.KilogramForceMetersPerMeter + ` kgf·m/m`;
            case TorquePerLengthUnits.TonneForceMillimetersPerMeter:
                return this.TonneForceMillimetersPerMeter + ` tf·mm/m`;
            case TorquePerLengthUnits.TonneForceCentimetersPerMeter:
                return this.TonneForceCentimetersPerMeter + ` tf·cm/m`;
            case TorquePerLengthUnits.TonneForceMetersPerMeter:
                return this.TonneForceMetersPerMeter + ` tf·m/m`;
            case TorquePerLengthUnits.KilonewtonMillimetersPerMeter:
                return this.KilonewtonMillimetersPerMeter + ` N·mm/m`;
            case TorquePerLengthUnits.MeganewtonMillimetersPerMeter:
                return this.MeganewtonMillimetersPerMeter + ` N·mm/m`;
            case TorquePerLengthUnits.KilonewtonCentimetersPerMeter:
                return this.KilonewtonCentimetersPerMeter + ` N·cm/m`;
            case TorquePerLengthUnits.MeganewtonCentimetersPerMeter:
                return this.MeganewtonCentimetersPerMeter + ` N·cm/m`;
            case TorquePerLengthUnits.KilonewtonMetersPerMeter:
                return this.KilonewtonMetersPerMeter + ` N·m/m`;
            case TorquePerLengthUnits.MeganewtonMetersPerMeter:
                return this.MeganewtonMetersPerMeter + ` N·m/m`;
            case TorquePerLengthUnits.KilopoundForceInchesPerFoot:
                return this.KilopoundForceInchesPerFoot + ` lbf·in/ft`;
            case TorquePerLengthUnits.MegapoundForceInchesPerFoot:
                return this.MegapoundForceInchesPerFoot + ` lbf·in/ft`;
            case TorquePerLengthUnits.KilopoundForceFeetPerFoot:
                return this.KilopoundForceFeetPerFoot + ` lbf·ft/ft`;
            case TorquePerLengthUnits.MegapoundForceFeetPerFoot:
                return this.MegapoundForceFeetPerFoot + ` lbf·ft/ft`;
        default:
            break;
        }
        return this.value.toString();
    }
}
