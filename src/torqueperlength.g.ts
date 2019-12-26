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
    KilonewtonMillimeterPerMeter,
    MeganewtonMillimeterPerMeter,
    KilonewtonCentimeterPerMeter,
    MeganewtonCentimeterPerMeter,
    KilonewtonMeterPerMeter,
    MeganewtonMeterPerMeter,
    KilopoundForceInchPerFoot,
    MegapoundForceInchPerFoot,
    KilopoundForceFootPerFoot,
    MegapoundForceFootPerFoot
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
    private kilonewtonmillimeterpermeterLazy: number | null = null;
    private meganewtonmillimeterpermeterLazy: number | null = null;
    private kilonewtoncentimeterpermeterLazy: number | null = null;
    private meganewtoncentimeterpermeterLazy: number | null = null;
    private kilonewtonmeterpermeterLazy: number | null = null;
    private meganewtonmeterpermeterLazy: number | null = null;
    private kilopoundforceinchperfootLazy: number | null = null;
    private megapoundforceinchperfootLazy: number | null = null;
    private kilopoundforcefootperfootLazy: number | null = null;
    private megapoundforcefootperfootLazy: number | null = null;

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

    public get KilonewtonMillimeterPerMeter(): number {
        if(this.kilonewtonmillimeterpermeterLazy !== null){
            return this.kilonewtonmillimeterpermeterLazy;
        }
        return this.kilonewtonmillimeterpermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonMillimeterPerMeter);
    }

    public get MeganewtonMillimeterPerMeter(): number {
        if(this.meganewtonmillimeterpermeterLazy !== null){
            return this.meganewtonmillimeterpermeterLazy;
        }
        return this.meganewtonmillimeterpermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonMillimeterPerMeter);
    }

    public get KilonewtonCentimeterPerMeter(): number {
        if(this.kilonewtoncentimeterpermeterLazy !== null){
            return this.kilonewtoncentimeterpermeterLazy;
        }
        return this.kilonewtoncentimeterpermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonCentimeterPerMeter);
    }

    public get MeganewtonCentimeterPerMeter(): number {
        if(this.meganewtoncentimeterpermeterLazy !== null){
            return this.meganewtoncentimeterpermeterLazy;
        }
        return this.meganewtoncentimeterpermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonCentimeterPerMeter);
    }

    public get KilonewtonMeterPerMeter(): number {
        if(this.kilonewtonmeterpermeterLazy !== null){
            return this.kilonewtonmeterpermeterLazy;
        }
        return this.kilonewtonmeterpermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonMeterPerMeter);
    }

    public get MeganewtonMeterPerMeter(): number {
        if(this.meganewtonmeterpermeterLazy !== null){
            return this.meganewtonmeterpermeterLazy;
        }
        return this.meganewtonmeterpermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonMeterPerMeter);
    }

    public get KilopoundForceInchPerFoot(): number {
        if(this.kilopoundforceinchperfootLazy !== null){
            return this.kilopoundforceinchperfootLazy;
        }
        return this.kilopoundforceinchperfootLazy = this.convertFromBase(TorquePerLengthUnits.KilopoundForceInchPerFoot);
    }

    public get MegapoundForceInchPerFoot(): number {
        if(this.megapoundforceinchperfootLazy !== null){
            return this.megapoundforceinchperfootLazy;
        }
        return this.megapoundforceinchperfootLazy = this.convertFromBase(TorquePerLengthUnits.MegapoundForceInchPerFoot);
    }

    public get KilopoundForceFootPerFoot(): number {
        if(this.kilopoundforcefootperfootLazy !== null){
            return this.kilopoundforcefootperfootLazy;
        }
        return this.kilopoundforcefootperfootLazy = this.convertFromBase(TorquePerLengthUnits.KilopoundForceFootPerFoot);
    }

    public get MegapoundForceFootPerFoot(): number {
        if(this.megapoundforcefootperfootLazy !== null){
            return this.megapoundforcefootperfootLazy;
        }
        return this.megapoundforcefootperfootLazy = this.convertFromBase(TorquePerLengthUnits.MegapoundForceFootPerFoot);
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

    public static FromKilonewtonMillimeterPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonMillimeterPerMeter);
    }

    public static FromMeganewtonMillimeterPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonMillimeterPerMeter);
    }

    public static FromKilonewtonCentimeterPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonCentimeterPerMeter);
    }

    public static FromMeganewtonCentimeterPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonCentimeterPerMeter);
    }

    public static FromKilonewtonMeterPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonMeterPerMeter);
    }

    public static FromMeganewtonMeterPerMeter(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonMeterPerMeter);
    }

    public static FromKilopoundForceInchPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilopoundForceInchPerFoot);
    }

    public static FromMegapoundForceInchPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MegapoundForceInchPerFoot);
    }

    public static FromKilopoundForceFootPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.KilopoundForceFootPerFoot);
    }

    public static FromMegapoundForceFootPerFoot(value: number): TorquePerLength {
        return new TorquePerLength(value, TorquePerLengthUnits.MegapoundForceFootPerFoot);
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
            case TorquePerLengthUnits.KilonewtonMillimeterPerMeter:
                return (this.value*1000) / 1000;
            case TorquePerLengthUnits.MeganewtonMillimeterPerMeter:
                return (this.value*1000) / 1000000;
            case TorquePerLengthUnits.KilonewtonCentimeterPerMeter:
                return (this.value*100) / 1000;
            case TorquePerLengthUnits.MeganewtonCentimeterPerMeter:
                return (this.value*100) / 1000000;
            case TorquePerLengthUnits.KilonewtonMeterPerMeter:
                return (this.value) / 1000;
            case TorquePerLengthUnits.MeganewtonMeterPerMeter:
                return (this.value) / 1000000;
            case TorquePerLengthUnits.KilopoundForceInchPerFoot:
                return (this.value/0.370685147638) / 1000;
            case TorquePerLengthUnits.MegapoundForceInchPerFoot:
                return (this.value/0.370685147638) / 1000000;
            case TorquePerLengthUnits.KilopoundForceFootPerFoot:
                return (this.value/4.44822161526) / 1000;
            case TorquePerLengthUnits.MegapoundForceFootPerFoot:
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
            case TorquePerLengthUnits.KilonewtonMillimeterPerMeter:
                return (value*0.001) * 1000;
            case TorquePerLengthUnits.MeganewtonMillimeterPerMeter:
                return (value*0.001) * 1000000;
            case TorquePerLengthUnits.KilonewtonCentimeterPerMeter:
                return (value*0.01) * 1000;
            case TorquePerLengthUnits.MeganewtonCentimeterPerMeter:
                return (value*0.01) * 1000000;
            case TorquePerLengthUnits.KilonewtonMeterPerMeter:
                return (value) * 1000;
            case TorquePerLengthUnits.MeganewtonMeterPerMeter:
                return (value) * 1000000;
            case TorquePerLengthUnits.KilopoundForceInchPerFoot:
                return (value*0.370685147638) * 1000;
            case TorquePerLengthUnits.MegapoundForceInchPerFoot:
                return (value*0.370685147638) * 1000000;
            case TorquePerLengthUnits.KilopoundForceFootPerFoot:
                return (value*4.44822161526) * 1000;
            case TorquePerLengthUnits.MegapoundForceFootPerFoot:
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
            case TorquePerLengthUnits.KilonewtonMillimeterPerMeter:
                return this.KilonewtonMillimeterPerMeter + ` N·mm/m`;
            case TorquePerLengthUnits.MeganewtonMillimeterPerMeter:
                return this.MeganewtonMillimeterPerMeter + ` N·mm/m`;
            case TorquePerLengthUnits.KilonewtonCentimeterPerMeter:
                return this.KilonewtonCentimeterPerMeter + ` N·cm/m`;
            case TorquePerLengthUnits.MeganewtonCentimeterPerMeter:
                return this.MeganewtonCentimeterPerMeter + ` N·cm/m`;
            case TorquePerLengthUnits.KilonewtonMeterPerMeter:
                return this.KilonewtonMeterPerMeter + ` N·m/m`;
            case TorquePerLengthUnits.MeganewtonMeterPerMeter:
                return this.MeganewtonMeterPerMeter + ` N·m/m`;
            case TorquePerLengthUnits.KilopoundForceInchPerFoot:
                return this.KilopoundForceInchPerFoot + ` lbf·in/ft`;
            case TorquePerLengthUnits.MegapoundForceInchPerFoot:
                return this.MegapoundForceInchPerFoot + ` lbf·in/ft`;
            case TorquePerLengthUnits.KilopoundForceFootPerFoot:
                return this.KilopoundForceFootPerFoot + ` lbf·ft/ft`;
            case TorquePerLengthUnits.MegapoundForceFootPerFoot:
                return this.MegapoundForceFootPerFoot + ` lbf·ft/ft`;
        default:
            break;
        }
        return this.value.toString();
    }
}
