export enum PressureUnits {
    Pascals,
    Atmospheres,
    Bars,
    KilogramsForcePerSquareMeter,
    KilogramsForcePerSquareCentimeter,
    KilogramsForcePerSquareMillimeter,
    NewtonsPerSquareMeter,
    NewtonsPerSquareCentimeter,
    NewtonsPerSquareMillimeter,
    TechnicalAtmospheres,
    Torrs,
    PoundsForcePerSquareInch,
    PoundsForcePerSquareFoot,
    TonnesForcePerSquareMillimeter,
    TonnesForcePerSquareMeter,
    MetersOfHead,
    TonnesForcePerSquareCentimeter,
    FeetOfHead,
    MillimetersOfMercury,
    InchesOfMercury,
    DynesPerSquareCentimeter,
    PoundsPerInchSecondSquared,
    InchesOfWaterColumn,
    Micropascal,
    Decapascal,
    Hectopascal,
    Kilopascal,
    Megapascal,
    Gigapascal,
    Microbar,
    Centibar,
    Decibar,
    Kilobar,
    Megabar,
    KilonewtonPerSquareMeter,
    MeganewtonPerSquareMeter,
    KilonewtonPerSquareCentimeter,
    KilonewtonPerSquareMillimeter,
    KilopoundForcePerSquareInch,
    KilopoundForcePerSquareFoot
}

export class Pressure {
    private value: number;
    private pascalsLazy: number | null = null;
    private atmospheresLazy: number | null = null;
    private barsLazy: number | null = null;
    private kilogramsforcepersquaremeterLazy: number | null = null;
    private kilogramsforcepersquarecentimeterLazy: number | null = null;
    private kilogramsforcepersquaremillimeterLazy: number | null = null;
    private newtonspersquaremeterLazy: number | null = null;
    private newtonspersquarecentimeterLazy: number | null = null;
    private newtonspersquaremillimeterLazy: number | null = null;
    private technicalatmospheresLazy: number | null = null;
    private torrsLazy: number | null = null;
    private poundsforcepersquareinchLazy: number | null = null;
    private poundsforcepersquarefootLazy: number | null = null;
    private tonnesforcepersquaremillimeterLazy: number | null = null;
    private tonnesforcepersquaremeterLazy: number | null = null;
    private metersofheadLazy: number | null = null;
    private tonnesforcepersquarecentimeterLazy: number | null = null;
    private feetofheadLazy: number | null = null;
    private millimetersofmercuryLazy: number | null = null;
    private inchesofmercuryLazy: number | null = null;
    private dynespersquarecentimeterLazy: number | null = null;
    private poundsperinchsecondsquaredLazy: number | null = null;
    private inchesofwatercolumnLazy: number | null = null;
    private micropascalLazy: number | null = null;
    private decapascalLazy: number | null = null;
    private hectopascalLazy: number | null = null;
    private kilopascalLazy: number | null = null;
    private megapascalLazy: number | null = null;
    private gigapascalLazy: number | null = null;
    private microbarLazy: number | null = null;
    private centibarLazy: number | null = null;
    private decibarLazy: number | null = null;
    private kilobarLazy: number | null = null;
    private megabarLazy: number | null = null;
    private kilonewtonpersquaremeterLazy: number | null = null;
    private meganewtonpersquaremeterLazy: number | null = null;
    private kilonewtonpersquarecentimeterLazy: number | null = null;
    private kilonewtonpersquaremillimeterLazy: number | null = null;
    private kilopoundforcepersquareinchLazy: number | null = null;
    private kilopoundforcepersquarefootLazy: number | null = null;

    public constructor(value: number, fromUnit: PressureUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Pascals(): number {
        if(this.pascalsLazy !== null){
            return this.pascalsLazy;
        }
        return this.pascalsLazy = this.convertFromBase(PressureUnits.Pascals);
    }

    public get Atmospheres(): number {
        if(this.atmospheresLazy !== null){
            return this.atmospheresLazy;
        }
        return this.atmospheresLazy = this.convertFromBase(PressureUnits.Atmospheres);
    }

    public get Bars(): number {
        if(this.barsLazy !== null){
            return this.barsLazy;
        }
        return this.barsLazy = this.convertFromBase(PressureUnits.Bars);
    }

    public get KilogramsForcePerSquareMeter(): number {
        if(this.kilogramsforcepersquaremeterLazy !== null){
            return this.kilogramsforcepersquaremeterLazy;
        }
        return this.kilogramsforcepersquaremeterLazy = this.convertFromBase(PressureUnits.KilogramsForcePerSquareMeter);
    }

    public get KilogramsForcePerSquareCentimeter(): number {
        if(this.kilogramsforcepersquarecentimeterLazy !== null){
            return this.kilogramsforcepersquarecentimeterLazy;
        }
        return this.kilogramsforcepersquarecentimeterLazy = this.convertFromBase(PressureUnits.KilogramsForcePerSquareCentimeter);
    }

    public get KilogramsForcePerSquareMillimeter(): number {
        if(this.kilogramsforcepersquaremillimeterLazy !== null){
            return this.kilogramsforcepersquaremillimeterLazy;
        }
        return this.kilogramsforcepersquaremillimeterLazy = this.convertFromBase(PressureUnits.KilogramsForcePerSquareMillimeter);
    }

    public get NewtonsPerSquareMeter(): number {
        if(this.newtonspersquaremeterLazy !== null){
            return this.newtonspersquaremeterLazy;
        }
        return this.newtonspersquaremeterLazy = this.convertFromBase(PressureUnits.NewtonsPerSquareMeter);
    }

    public get NewtonsPerSquareCentimeter(): number {
        if(this.newtonspersquarecentimeterLazy !== null){
            return this.newtonspersquarecentimeterLazy;
        }
        return this.newtonspersquarecentimeterLazy = this.convertFromBase(PressureUnits.NewtonsPerSquareCentimeter);
    }

    public get NewtonsPerSquareMillimeter(): number {
        if(this.newtonspersquaremillimeterLazy !== null){
            return this.newtonspersquaremillimeterLazy;
        }
        return this.newtonspersquaremillimeterLazy = this.convertFromBase(PressureUnits.NewtonsPerSquareMillimeter);
    }

    public get TechnicalAtmospheres(): number {
        if(this.technicalatmospheresLazy !== null){
            return this.technicalatmospheresLazy;
        }
        return this.technicalatmospheresLazy = this.convertFromBase(PressureUnits.TechnicalAtmospheres);
    }

    public get Torrs(): number {
        if(this.torrsLazy !== null){
            return this.torrsLazy;
        }
        return this.torrsLazy = this.convertFromBase(PressureUnits.Torrs);
    }

    public get PoundsForcePerSquareInch(): number {
        if(this.poundsforcepersquareinchLazy !== null){
            return this.poundsforcepersquareinchLazy;
        }
        return this.poundsforcepersquareinchLazy = this.convertFromBase(PressureUnits.PoundsForcePerSquareInch);
    }

    public get PoundsForcePerSquareFoot(): number {
        if(this.poundsforcepersquarefootLazy !== null){
            return this.poundsforcepersquarefootLazy;
        }
        return this.poundsforcepersquarefootLazy = this.convertFromBase(PressureUnits.PoundsForcePerSquareFoot);
    }

    public get TonnesForcePerSquareMillimeter(): number {
        if(this.tonnesforcepersquaremillimeterLazy !== null){
            return this.tonnesforcepersquaremillimeterLazy;
        }
        return this.tonnesforcepersquaremillimeterLazy = this.convertFromBase(PressureUnits.TonnesForcePerSquareMillimeter);
    }

    public get TonnesForcePerSquareMeter(): number {
        if(this.tonnesforcepersquaremeterLazy !== null){
            return this.tonnesforcepersquaremeterLazy;
        }
        return this.tonnesforcepersquaremeterLazy = this.convertFromBase(PressureUnits.TonnesForcePerSquareMeter);
    }

    public get MetersOfHead(): number {
        if(this.metersofheadLazy !== null){
            return this.metersofheadLazy;
        }
        return this.metersofheadLazy = this.convertFromBase(PressureUnits.MetersOfHead);
    }

    public get TonnesForcePerSquareCentimeter(): number {
        if(this.tonnesforcepersquarecentimeterLazy !== null){
            return this.tonnesforcepersquarecentimeterLazy;
        }
        return this.tonnesforcepersquarecentimeterLazy = this.convertFromBase(PressureUnits.TonnesForcePerSquareCentimeter);
    }

    public get FeetOfHead(): number {
        if(this.feetofheadLazy !== null){
            return this.feetofheadLazy;
        }
        return this.feetofheadLazy = this.convertFromBase(PressureUnits.FeetOfHead);
    }

    public get MillimetersOfMercury(): number {
        if(this.millimetersofmercuryLazy !== null){
            return this.millimetersofmercuryLazy;
        }
        return this.millimetersofmercuryLazy = this.convertFromBase(PressureUnits.MillimetersOfMercury);
    }

    public get InchesOfMercury(): number {
        if(this.inchesofmercuryLazy !== null){
            return this.inchesofmercuryLazy;
        }
        return this.inchesofmercuryLazy = this.convertFromBase(PressureUnits.InchesOfMercury);
    }

    public get DynesPerSquareCentimeter(): number {
        if(this.dynespersquarecentimeterLazy !== null){
            return this.dynespersquarecentimeterLazy;
        }
        return this.dynespersquarecentimeterLazy = this.convertFromBase(PressureUnits.DynesPerSquareCentimeter);
    }

    public get PoundsPerInchSecondSquared(): number {
        if(this.poundsperinchsecondsquaredLazy !== null){
            return this.poundsperinchsecondsquaredLazy;
        }
        return this.poundsperinchsecondsquaredLazy = this.convertFromBase(PressureUnits.PoundsPerInchSecondSquared);
    }

    public get InchesOfWaterColumn(): number {
        if(this.inchesofwatercolumnLazy !== null){
            return this.inchesofwatercolumnLazy;
        }
        return this.inchesofwatercolumnLazy = this.convertFromBase(PressureUnits.InchesOfWaterColumn);
    }

    public get Micropascal(): number {
        if(this.micropascalLazy !== null){
            return this.micropascalLazy;
        }
        return this.micropascalLazy = this.convertFromBase(PressureUnits.Micropascal);
    }

    public get Decapascal(): number {
        if(this.decapascalLazy !== null){
            return this.decapascalLazy;
        }
        return this.decapascalLazy = this.convertFromBase(PressureUnits.Decapascal);
    }

    public get Hectopascal(): number {
        if(this.hectopascalLazy !== null){
            return this.hectopascalLazy;
        }
        return this.hectopascalLazy = this.convertFromBase(PressureUnits.Hectopascal);
    }

    public get Kilopascal(): number {
        if(this.kilopascalLazy !== null){
            return this.kilopascalLazy;
        }
        return this.kilopascalLazy = this.convertFromBase(PressureUnits.Kilopascal);
    }

    public get Megapascal(): number {
        if(this.megapascalLazy !== null){
            return this.megapascalLazy;
        }
        return this.megapascalLazy = this.convertFromBase(PressureUnits.Megapascal);
    }

    public get Gigapascal(): number {
        if(this.gigapascalLazy !== null){
            return this.gigapascalLazy;
        }
        return this.gigapascalLazy = this.convertFromBase(PressureUnits.Gigapascal);
    }

    public get Microbar(): number {
        if(this.microbarLazy !== null){
            return this.microbarLazy;
        }
        return this.microbarLazy = this.convertFromBase(PressureUnits.Microbar);
    }

    public get Centibar(): number {
        if(this.centibarLazy !== null){
            return this.centibarLazy;
        }
        return this.centibarLazy = this.convertFromBase(PressureUnits.Centibar);
    }

    public get Decibar(): number {
        if(this.decibarLazy !== null){
            return this.decibarLazy;
        }
        return this.decibarLazy = this.convertFromBase(PressureUnits.Decibar);
    }

    public get Kilobar(): number {
        if(this.kilobarLazy !== null){
            return this.kilobarLazy;
        }
        return this.kilobarLazy = this.convertFromBase(PressureUnits.Kilobar);
    }

    public get Megabar(): number {
        if(this.megabarLazy !== null){
            return this.megabarLazy;
        }
        return this.megabarLazy = this.convertFromBase(PressureUnits.Megabar);
    }

    public get KilonewtonPerSquareMeter(): number {
        if(this.kilonewtonpersquaremeterLazy !== null){
            return this.kilonewtonpersquaremeterLazy;
        }
        return this.kilonewtonpersquaremeterLazy = this.convertFromBase(PressureUnits.KilonewtonPerSquareMeter);
    }

    public get MeganewtonPerSquareMeter(): number {
        if(this.meganewtonpersquaremeterLazy !== null){
            return this.meganewtonpersquaremeterLazy;
        }
        return this.meganewtonpersquaremeterLazy = this.convertFromBase(PressureUnits.MeganewtonPerSquareMeter);
    }

    public get KilonewtonPerSquareCentimeter(): number {
        if(this.kilonewtonpersquarecentimeterLazy !== null){
            return this.kilonewtonpersquarecentimeterLazy;
        }
        return this.kilonewtonpersquarecentimeterLazy = this.convertFromBase(PressureUnits.KilonewtonPerSquareCentimeter);
    }

    public get KilonewtonPerSquareMillimeter(): number {
        if(this.kilonewtonpersquaremillimeterLazy !== null){
            return this.kilonewtonpersquaremillimeterLazy;
        }
        return this.kilonewtonpersquaremillimeterLazy = this.convertFromBase(PressureUnits.KilonewtonPerSquareMillimeter);
    }

    public get KilopoundForcePerSquareInch(): number {
        if(this.kilopoundforcepersquareinchLazy !== null){
            return this.kilopoundforcepersquareinchLazy;
        }
        return this.kilopoundforcepersquareinchLazy = this.convertFromBase(PressureUnits.KilopoundForcePerSquareInch);
    }

    public get KilopoundForcePerSquareFoot(): number {
        if(this.kilopoundforcepersquarefootLazy !== null){
            return this.kilopoundforcepersquarefootLazy;
        }
        return this.kilopoundforcepersquarefootLazy = this.convertFromBase(PressureUnits.KilopoundForcePerSquareFoot);
    }

    public static FromPascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Pascals);
    }

    public static FromAtmospheres(value: number): Pressure {
        return new Pressure(value, PressureUnits.Atmospheres);
    }

    public static FromBars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Bars);
    }

    public static FromKilogramsForcePerSquareMeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilogramsForcePerSquareMeter);
    }

    public static FromKilogramsForcePerSquareCentimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilogramsForcePerSquareCentimeter);
    }

    public static FromKilogramsForcePerSquareMillimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilogramsForcePerSquareMillimeter);
    }

    public static FromNewtonsPerSquareMeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.NewtonsPerSquareMeter);
    }

    public static FromNewtonsPerSquareCentimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.NewtonsPerSquareCentimeter);
    }

    public static FromNewtonsPerSquareMillimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.NewtonsPerSquareMillimeter);
    }

    public static FromTechnicalAtmospheres(value: number): Pressure {
        return new Pressure(value, PressureUnits.TechnicalAtmospheres);
    }

    public static FromTorrs(value: number): Pressure {
        return new Pressure(value, PressureUnits.Torrs);
    }

    public static FromPoundsForcePerSquareInch(value: number): Pressure {
        return new Pressure(value, PressureUnits.PoundsForcePerSquareInch);
    }

    public static FromPoundsForcePerSquareFoot(value: number): Pressure {
        return new Pressure(value, PressureUnits.PoundsForcePerSquareFoot);
    }

    public static FromTonnesForcePerSquareMillimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.TonnesForcePerSquareMillimeter);
    }

    public static FromTonnesForcePerSquareMeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.TonnesForcePerSquareMeter);
    }

    public static FromMetersOfHead(value: number): Pressure {
        return new Pressure(value, PressureUnits.MetersOfHead);
    }

    public static FromTonnesForcePerSquareCentimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.TonnesForcePerSquareCentimeter);
    }

    public static FromFeetOfHead(value: number): Pressure {
        return new Pressure(value, PressureUnits.FeetOfHead);
    }

    public static FromMillimetersOfMercury(value: number): Pressure {
        return new Pressure(value, PressureUnits.MillimetersOfMercury);
    }

    public static FromInchesOfMercury(value: number): Pressure {
        return new Pressure(value, PressureUnits.InchesOfMercury);
    }

    public static FromDynesPerSquareCentimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.DynesPerSquareCentimeter);
    }

    public static FromPoundsPerInchSecondSquared(value: number): Pressure {
        return new Pressure(value, PressureUnits.PoundsPerInchSecondSquared);
    }

    public static FromInchesOfWaterColumn(value: number): Pressure {
        return new Pressure(value, PressureUnits.InchesOfWaterColumn);
    }

    public static FromMicropascal(value: number): Pressure {
        return new Pressure(value, PressureUnits.Micropascal);
    }

    public static FromDecapascal(value: number): Pressure {
        return new Pressure(value, PressureUnits.Decapascal);
    }

    public static FromHectopascal(value: number): Pressure {
        return new Pressure(value, PressureUnits.Hectopascal);
    }

    public static FromKilopascal(value: number): Pressure {
        return new Pressure(value, PressureUnits.Kilopascal);
    }

    public static FromMegapascal(value: number): Pressure {
        return new Pressure(value, PressureUnits.Megapascal);
    }

    public static FromGigapascal(value: number): Pressure {
        return new Pressure(value, PressureUnits.Gigapascal);
    }

    public static FromMicrobar(value: number): Pressure {
        return new Pressure(value, PressureUnits.Microbar);
    }

    public static FromCentibar(value: number): Pressure {
        return new Pressure(value, PressureUnits.Centibar);
    }

    public static FromDecibar(value: number): Pressure {
        return new Pressure(value, PressureUnits.Decibar);
    }

    public static FromKilobar(value: number): Pressure {
        return new Pressure(value, PressureUnits.Kilobar);
    }

    public static FromMegabar(value: number): Pressure {
        return new Pressure(value, PressureUnits.Megabar);
    }

    public static FromKilonewtonPerSquareMeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilonewtonPerSquareMeter);
    }

    public static FromMeganewtonPerSquareMeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.MeganewtonPerSquareMeter);
    }

    public static FromKilonewtonPerSquareCentimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilonewtonPerSquareCentimeter);
    }

    public static FromKilonewtonPerSquareMillimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilonewtonPerSquareMillimeter);
    }

    public static FromKilopoundForcePerSquareInch(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilopoundForcePerSquareInch);
    }

    public static FromKilopoundForcePerSquareFoot(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilopoundForcePerSquareFoot);
    }

    private convertFromBase(toUnit: PressureUnits): number {
        switch (toUnit) {
                
            case PressureUnits.Pascals:
                return this.value;
            case PressureUnits.Atmospheres:
                return this.value/(1.01325*1e5);
            case PressureUnits.Bars:
                return this.value/1e5;
            case PressureUnits.KilogramsForcePerSquareMeter:
                return this.value*0.101971619222242;
            case PressureUnits.KilogramsForcePerSquareCentimeter:
                return this.value/9.80665e4;
            case PressureUnits.KilogramsForcePerSquareMillimeter:
                return this.value/9.80665e6;
            case PressureUnits.NewtonsPerSquareMeter:
                return this.value;
            case PressureUnits.NewtonsPerSquareCentimeter:
                return this.value/1e4;
            case PressureUnits.NewtonsPerSquareMillimeter:
                return this.value/1e6;
            case PressureUnits.TechnicalAtmospheres:
                return this.value/(9.80680592331*1e4);
            case PressureUnits.Torrs:
                return this.value/(1.3332266752*1e2);
            case PressureUnits.PoundsForcePerSquareInch:
                return this.value/6.894757293168361e3;
            case PressureUnits.PoundsForcePerSquareFoot:
                return this.value/4.788025898033584e1;
            case PressureUnits.TonnesForcePerSquareMillimeter:
                return this.value/9.80665e9;
            case PressureUnits.TonnesForcePerSquareMeter:
                return this.value/9.80665e3;
            case PressureUnits.MetersOfHead:
                return this.value*0.0001019977334;
            case PressureUnits.TonnesForcePerSquareCentimeter:
                return this.value/9.80665e7;
            case PressureUnits.FeetOfHead:
                return this.value*0.000334552565551;
            case PressureUnits.MillimetersOfMercury:
                return this.value*7.50061561302643e-3;
            case PressureUnits.InchesOfMercury:
                return this.value*2.95299830714159e-4;
            case PressureUnits.DynesPerSquareCentimeter:
                return this.value/1.0e-1;
            case PressureUnits.PoundsPerInchSecondSquared:
                return this.value/1.785796732283465e1;
            case PressureUnits.InchesOfWaterColumn:
                return this.value/249.08890833333;
            case PressureUnits.Micropascal:
                return (this.value) / 0.000001;
            case PressureUnits.Decapascal:
                return (this.value) / 10;
            case PressureUnits.Hectopascal:
                return (this.value) / 100;
            case PressureUnits.Kilopascal:
                return (this.value) / 1000;
            case PressureUnits.Megapascal:
                return (this.value) / 1000000;
            case PressureUnits.Gigapascal:
                return (this.value) / 1000000000;
            case PressureUnits.Microbar:
                return (this.value/1e5) / 0.000001;
            case PressureUnits.Centibar:
                return (this.value/1e5) / 0.01;
            case PressureUnits.Decibar:
                return (this.value/1e5) / 0.1;
            case PressureUnits.Kilobar:
                return (this.value/1e5) / 1000;
            case PressureUnits.Megabar:
                return (this.value/1e5) / 1000000;
            case PressureUnits.KilonewtonPerSquareMeter:
                return (this.value) / 1000;
            case PressureUnits.MeganewtonPerSquareMeter:
                return (this.value) / 1000000;
            case PressureUnits.KilonewtonPerSquareCentimeter:
                return (this.value/1e4) / 1000;
            case PressureUnits.KilonewtonPerSquareMillimeter:
                return (this.value/1e6) / 1000;
            case PressureUnits.KilopoundForcePerSquareInch:
                return (this.value/6.894757293168361e3) / 1000;
            case PressureUnits.KilopoundForcePerSquareFoot:
                return (this.value/4.788025898033584e1) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PressureUnits): number {
        switch (fromUnit) {
                
            case PressureUnits.Pascals:
                return value;
            case PressureUnits.Atmospheres:
                return value*1.01325*1e5;
            case PressureUnits.Bars:
                return value*1e5;
            case PressureUnits.KilogramsForcePerSquareMeter:
                return value*9.80665019960652;
            case PressureUnits.KilogramsForcePerSquareCentimeter:
                return value*9.80665e4;
            case PressureUnits.KilogramsForcePerSquareMillimeter:
                return value*9.80665e6;
            case PressureUnits.NewtonsPerSquareMeter:
                return value;
            case PressureUnits.NewtonsPerSquareCentimeter:
                return value*1e4;
            case PressureUnits.NewtonsPerSquareMillimeter:
                return value*1e6;
            case PressureUnits.TechnicalAtmospheres:
                return value*9.80680592331*1e4;
            case PressureUnits.Torrs:
                return value*1.3332266752*1e2;
            case PressureUnits.PoundsForcePerSquareInch:
                return value*6.894757293168361e3;
            case PressureUnits.PoundsForcePerSquareFoot:
                return value*4.788025898033584e1;
            case PressureUnits.TonnesForcePerSquareMillimeter:
                return value*9.80665e9;
            case PressureUnits.TonnesForcePerSquareMeter:
                return value*9.80665e3;
            case PressureUnits.MetersOfHead:
                return value*9804.139432;
            case PressureUnits.TonnesForcePerSquareCentimeter:
                return value*9.80665e7;
            case PressureUnits.FeetOfHead:
                return value*2989.0669;
            case PressureUnits.MillimetersOfMercury:
                return value/7.50061561302643e-3;
            case PressureUnits.InchesOfMercury:
                return value/2.95299830714159e-4;
            case PressureUnits.DynesPerSquareCentimeter:
                return value*1.0e-1;
            case PressureUnits.PoundsPerInchSecondSquared:
                return value*1.785796732283465e1;
            case PressureUnits.InchesOfWaterColumn:
                return value*249.08890833333;
            case PressureUnits.Micropascal:
                return (value) * 0.000001;
            case PressureUnits.Decapascal:
                return (value) * 10;
            case PressureUnits.Hectopascal:
                return (value) * 100;
            case PressureUnits.Kilopascal:
                return (value) * 1000;
            case PressureUnits.Megapascal:
                return (value) * 1000000;
            case PressureUnits.Gigapascal:
                return (value) * 1000000000;
            case PressureUnits.Microbar:
                return (value*1e5) * 0.000001;
            case PressureUnits.Centibar:
                return (value*1e5) * 0.01;
            case PressureUnits.Decibar:
                return (value*1e5) * 0.1;
            case PressureUnits.Kilobar:
                return (value*1e5) * 1000;
            case PressureUnits.Megabar:
                return (value*1e5) * 1000000;
            case PressureUnits.KilonewtonPerSquareMeter:
                return (value) * 1000;
            case PressureUnits.MeganewtonPerSquareMeter:
                return (value) * 1000000;
            case PressureUnits.KilonewtonPerSquareCentimeter:
                return (value*1e4) * 1000;
            case PressureUnits.KilonewtonPerSquareMillimeter:
                return (value*1e6) * 1000;
            case PressureUnits.KilopoundForcePerSquareInch:
                return (value*6.894757293168361e3) * 1000;
            case PressureUnits.KilopoundForcePerSquareFoot:
                return (value*4.788025898033584e1) * 1000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: PressureUnits = PressureUnits.Pascals): string {

        switch (toUnit) {
            
            case PressureUnits.Pascals:
                return this.Pascals + ` Pa`;
            case PressureUnits.Atmospheres:
                return this.Atmospheres + ` atm`;
            case PressureUnits.Bars:
                return this.Bars + ` bar`;
            case PressureUnits.KilogramsForcePerSquareMeter:
                return this.KilogramsForcePerSquareMeter + ` kgf/m²`;
            case PressureUnits.KilogramsForcePerSquareCentimeter:
                return this.KilogramsForcePerSquareCentimeter + ` kgf/cm²`;
            case PressureUnits.KilogramsForcePerSquareMillimeter:
                return this.KilogramsForcePerSquareMillimeter + ` kgf/mm²`;
            case PressureUnits.NewtonsPerSquareMeter:
                return this.NewtonsPerSquareMeter + ` N/m²`;
            case PressureUnits.NewtonsPerSquareCentimeter:
                return this.NewtonsPerSquareCentimeter + ` N/cm²`;
            case PressureUnits.NewtonsPerSquareMillimeter:
                return this.NewtonsPerSquareMillimeter + ` N/mm²`;
            case PressureUnits.TechnicalAtmospheres:
                return this.TechnicalAtmospheres + ` at`;
            case PressureUnits.Torrs:
                return this.Torrs + ` torr`;
            case PressureUnits.PoundsForcePerSquareInch:
                return this.PoundsForcePerSquareInch + ` psi`;
            case PressureUnits.PoundsForcePerSquareFoot:
                return this.PoundsForcePerSquareFoot + ` lb/ft²`;
            case PressureUnits.TonnesForcePerSquareMillimeter:
                return this.TonnesForcePerSquareMillimeter + ` tf/mm²`;
            case PressureUnits.TonnesForcePerSquareMeter:
                return this.TonnesForcePerSquareMeter + ` tf/m²`;
            case PressureUnits.MetersOfHead:
                return this.MetersOfHead + ` m of head`;
            case PressureUnits.TonnesForcePerSquareCentimeter:
                return this.TonnesForcePerSquareCentimeter + ` tf/cm²`;
            case PressureUnits.FeetOfHead:
                return this.FeetOfHead + ` ft of head`;
            case PressureUnits.MillimetersOfMercury:
                return this.MillimetersOfMercury + ` mmHg`;
            case PressureUnits.InchesOfMercury:
                return this.InchesOfMercury + ` inHg`;
            case PressureUnits.DynesPerSquareCentimeter:
                return this.DynesPerSquareCentimeter + ` dyn/cm²`;
            case PressureUnits.PoundsPerInchSecondSquared:
                return this.PoundsPerInchSecondSquared + ` lbm/(in·s²)`;
            case PressureUnits.InchesOfWaterColumn:
                return this.InchesOfWaterColumn + ` wc`;
            case PressureUnits.Micropascal:
                return this.Micropascal + ` Pa`;
            case PressureUnits.Decapascal:
                return this.Decapascal + ` Pa`;
            case PressureUnits.Hectopascal:
                return this.Hectopascal + ` Pa`;
            case PressureUnits.Kilopascal:
                return this.Kilopascal + ` Pa`;
            case PressureUnits.Megapascal:
                return this.Megapascal + ` Pa`;
            case PressureUnits.Gigapascal:
                return this.Gigapascal + ` Pa`;
            case PressureUnits.Microbar:
                return this.Microbar + ` bar`;
            case PressureUnits.Centibar:
                return this.Centibar + ` bar`;
            case PressureUnits.Decibar:
                return this.Decibar + ` bar`;
            case PressureUnits.Kilobar:
                return this.Kilobar + ` bar`;
            case PressureUnits.Megabar:
                return this.Megabar + ` bar`;
            case PressureUnits.KilonewtonPerSquareMeter:
                return this.KilonewtonPerSquareMeter + ` N/m²`;
            case PressureUnits.MeganewtonPerSquareMeter:
                return this.MeganewtonPerSquareMeter + ` N/m²`;
            case PressureUnits.KilonewtonPerSquareCentimeter:
                return this.KilonewtonPerSquareCentimeter + ` N/cm²`;
            case PressureUnits.KilonewtonPerSquareMillimeter:
                return this.KilonewtonPerSquareMillimeter + ` N/mm²`;
            case PressureUnits.KilopoundForcePerSquareInch:
                return this.KilopoundForcePerSquareInch + ` psi`;
            case PressureUnits.KilopoundForcePerSquareFoot:
                return this.KilopoundForcePerSquareFoot + ` lb/ft²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
