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
    Micropascals,
    Decapascals,
    Hectopascals,
    Kilopascals,
    Megapascals,
    Gigapascals,
    Microbars,
    Centibars,
    Decibars,
    Kilobars,
    Megabars,
    Kilonewtonspersquaremeter,
    Meganewtonspersquaremeter,
    Kilonewtonspersquarecentimeter,
    Kilonewtonspersquaremillimeter,
    Kilopoundsforcepersquareinch,
    Kilopoundsforcepersquarefoot
}

export class Pressure {
    private value: number;

    public constructor(value: number, fromUnit: PressureUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Pascals(): number {
        return this.convertFromBase(PressureUnits.Pascals);
    }

    public get Atmospheres(): number {
        return this.convertFromBase(PressureUnits.Atmospheres);
    }

    public get Bars(): number {
        return this.convertFromBase(PressureUnits.Bars);
    }

    public get KilogramsForcePerSquareMeter(): number {
        return this.convertFromBase(PressureUnits.KilogramsForcePerSquareMeter);
    }

    public get KilogramsForcePerSquareCentimeter(): number {
        return this.convertFromBase(PressureUnits.KilogramsForcePerSquareCentimeter);
    }

    public get KilogramsForcePerSquareMillimeter(): number {
        return this.convertFromBase(PressureUnits.KilogramsForcePerSquareMillimeter);
    }

    public get NewtonsPerSquareMeter(): number {
        return this.convertFromBase(PressureUnits.NewtonsPerSquareMeter);
    }

    public get NewtonsPerSquareCentimeter(): number {
        return this.convertFromBase(PressureUnits.NewtonsPerSquareCentimeter);
    }

    public get NewtonsPerSquareMillimeter(): number {
        return this.convertFromBase(PressureUnits.NewtonsPerSquareMillimeter);
    }

    public get TechnicalAtmospheres(): number {
        return this.convertFromBase(PressureUnits.TechnicalAtmospheres);
    }

    public get Torrs(): number {
        return this.convertFromBase(PressureUnits.Torrs);
    }

    public get PoundsForcePerSquareInch(): number {
        return this.convertFromBase(PressureUnits.PoundsForcePerSquareInch);
    }

    public get PoundsForcePerSquareFoot(): number {
        return this.convertFromBase(PressureUnits.PoundsForcePerSquareFoot);
    }

    public get TonnesForcePerSquareMillimeter(): number {
        return this.convertFromBase(PressureUnits.TonnesForcePerSquareMillimeter);
    }

    public get TonnesForcePerSquareMeter(): number {
        return this.convertFromBase(PressureUnits.TonnesForcePerSquareMeter);
    }

    public get MetersOfHead(): number {
        return this.convertFromBase(PressureUnits.MetersOfHead);
    }

    public get TonnesForcePerSquareCentimeter(): number {
        return this.convertFromBase(PressureUnits.TonnesForcePerSquareCentimeter);
    }

    public get FeetOfHead(): number {
        return this.convertFromBase(PressureUnits.FeetOfHead);
    }

    public get MillimetersOfMercury(): number {
        return this.convertFromBase(PressureUnits.MillimetersOfMercury);
    }

    public get InchesOfMercury(): number {
        return this.convertFromBase(PressureUnits.InchesOfMercury);
    }

    public get DynesPerSquareCentimeter(): number {
        return this.convertFromBase(PressureUnits.DynesPerSquareCentimeter);
    }

    public get PoundsPerInchSecondSquared(): number {
        return this.convertFromBase(PressureUnits.PoundsPerInchSecondSquared);
    }

    public get InchesOfWaterColumn(): number {
        return this.convertFromBase(PressureUnits.InchesOfWaterColumn);
    }

    public get Micropascals(): number {
        return this.convertFromBase(PressureUnits.Micropascals);
    }

    public get Decapascals(): number {
        return this.convertFromBase(PressureUnits.Decapascals);
    }

    public get Hectopascals(): number {
        return this.convertFromBase(PressureUnits.Hectopascals);
    }

    public get Kilopascals(): number {
        return this.convertFromBase(PressureUnits.Kilopascals);
    }

    public get Megapascals(): number {
        return this.convertFromBase(PressureUnits.Megapascals);
    }

    public get Gigapascals(): number {
        return this.convertFromBase(PressureUnits.Gigapascals);
    }

    public get Microbars(): number {
        return this.convertFromBase(PressureUnits.Microbars);
    }

    public get Centibars(): number {
        return this.convertFromBase(PressureUnits.Centibars);
    }

    public get Decibars(): number {
        return this.convertFromBase(PressureUnits.Decibars);
    }

    public get Kilobars(): number {
        return this.convertFromBase(PressureUnits.Kilobars);
    }

    public get Megabars(): number {
        return this.convertFromBase(PressureUnits.Megabars);
    }

    public get Kilonewtonspersquaremeter(): number {
        return this.convertFromBase(PressureUnits.Kilonewtonspersquaremeter);
    }

    public get Meganewtonspersquaremeter(): number {
        return this.convertFromBase(PressureUnits.Meganewtonspersquaremeter);
    }

    public get Kilonewtonspersquarecentimeter(): number {
        return this.convertFromBase(PressureUnits.Kilonewtonspersquarecentimeter);
    }

    public get Kilonewtonspersquaremillimeter(): number {
        return this.convertFromBase(PressureUnits.Kilonewtonspersquaremillimeter);
    }

    public get Kilopoundsforcepersquareinch(): number {
        return this.convertFromBase(PressureUnits.Kilopoundsforcepersquareinch);
    }

    public get Kilopoundsforcepersquarefoot(): number {
        return this.convertFromBase(PressureUnits.Kilopoundsforcepersquarefoot);
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

    public static FromMicropascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Micropascals);
    }

    public static FromDecapascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Decapascals);
    }

    public static FromHectopascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Hectopascals);
    }

    public static FromKilopascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Kilopascals);
    }

    public static FromMegapascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Megapascals);
    }

    public static FromGigapascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Gigapascals);
    }

    public static FromMicrobars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Microbars);
    }

    public static FromCentibars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Centibars);
    }

    public static FromDecibars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Decibars);
    }

    public static FromKilobars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Kilobars);
    }

    public static FromMegabars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Megabars);
    }

    public static FromKilonewtonspersquaremeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.Kilonewtonspersquaremeter);
    }

    public static FromMeganewtonspersquaremeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.Meganewtonspersquaremeter);
    }

    public static FromKilonewtonspersquarecentimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.Kilonewtonspersquarecentimeter);
    }

    public static FromKilonewtonspersquaremillimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.Kilonewtonspersquaremillimeter);
    }

    public static FromKilopoundsforcepersquareinch(value: number): Pressure {
        return new Pressure(value, PressureUnits.Kilopoundsforcepersquareinch);
    }

    public static FromKilopoundsforcepersquarefoot(value: number): Pressure {
        return new Pressure(value, PressureUnits.Kilopoundsforcepersquarefoot);
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
                
                case PressureUnits.Micropascals:
                    return (this.value) / 0.000001;
                
                case PressureUnits.Decapascals:
                    return (this.value) / 10;
                
                case PressureUnits.Hectopascals:
                    return (this.value) / 100;
                
                case PressureUnits.Kilopascals:
                    return (this.value) / 1000;
                
                case PressureUnits.Megapascals:
                    return (this.value) / 1000000;
                
                case PressureUnits.Gigapascals:
                    return (this.value) / 1000000000;
                
                case PressureUnits.Microbars:
                    return (this.value/1e5) / 0.000001;
                
                case PressureUnits.Centibars:
                    return (this.value/1e5) / 0.01;
                
                case PressureUnits.Decibars:
                    return (this.value/1e5) / 0.1;
                
                case PressureUnits.Kilobars:
                    return (this.value/1e5) / 1000;
                
                case PressureUnits.Megabars:
                    return (this.value/1e5) / 1000000;
                
                case PressureUnits.Kilonewtonspersquaremeter:
                    return (this.value) / 1000;
                
                case PressureUnits.Meganewtonspersquaremeter:
                    return (this.value) / 1000000;
                
                case PressureUnits.Kilonewtonspersquarecentimeter:
                    return (this.value/1e4) / 1000;
                
                case PressureUnits.Kilonewtonspersquaremillimeter:
                    return (this.value/1e6) / 1000;
                
                case PressureUnits.Kilopoundsforcepersquareinch:
                    return (this.value/6.894757293168361e3) / 1000;
                
                case PressureUnits.Kilopoundsforcepersquarefoot:
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
                
                case PressureUnits.Micropascals:
                    return (value) * 0.000001;
                
                case PressureUnits.Decapascals:
                    return (value) * 10;
                
                case PressureUnits.Hectopascals:
                    return (value) * 100;
                
                case PressureUnits.Kilopascals:
                    return (value) * 1000;
                
                case PressureUnits.Megapascals:
                    return (value) * 1000000;
                
                case PressureUnits.Gigapascals:
                    return (value) * 1000000000;
                
                case PressureUnits.Microbars:
                    return (value*1e5) * 0.000001;
                
                case PressureUnits.Centibars:
                    return (value*1e5) * 0.01;
                
                case PressureUnits.Decibars:
                    return (value*1e5) * 0.1;
                
                case PressureUnits.Kilobars:
                    return (value*1e5) * 1000;
                
                case PressureUnits.Megabars:
                    return (value*1e5) * 1000000;
                
                case PressureUnits.Kilonewtonspersquaremeter:
                    return (value) * 1000;
                
                case PressureUnits.Meganewtonspersquaremeter:
                    return (value) * 1000000;
                
                case PressureUnits.Kilonewtonspersquarecentimeter:
                    return (value*1e4) * 1000;
                
                case PressureUnits.Kilonewtonspersquaremillimeter:
                    return (value*1e6) * 1000;
                
                case PressureUnits.Kilopoundsforcepersquareinch:
                    return (value*6.894757293168361e3) * 1000;
                
                case PressureUnits.Kilopoundsforcepersquarefoot:
                    return (value*4.788025898033584e1) * 1000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
