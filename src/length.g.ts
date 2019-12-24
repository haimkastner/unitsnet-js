export enum LengthUnits {
    Meters,
    Miles,
    Yards,
    Feet,
    UsSurveyFeet,
    Inches,
    Mils,
    NauticalMiles,
    Fathoms,
    Shackles,
    Microinches,
    PrinterPoints,
    DtpPoints,
    PrinterPicas,
    DtpPicas,
    Twips,
    Hands,
    AstronomicalUnits,
    Parsecs,
    LightYears,
    SolarRadiuses,
    Nanometers,
    Micrometers,
    Centimeters,
    Decimeters,
    Hectometers,
    Kilometers,
    Kiloparsecs,
    Megaparsecs,
    Kilolightyears,
    Megalightyears
}

export class Length {
    private value: number;

    public constructor(value: number, fromUnit: LengthUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Meters(): number {
        return this.convertFromBase(LengthUnits.Meters);
    }

    public get Miles(): number {
        return this.convertFromBase(LengthUnits.Miles);
    }

    public get Yards(): number {
        return this.convertFromBase(LengthUnits.Yards);
    }

    public get Feet(): number {
        return this.convertFromBase(LengthUnits.Feet);
    }

    public get UsSurveyFeet(): number {
        return this.convertFromBase(LengthUnits.UsSurveyFeet);
    }

    public get Inches(): number {
        return this.convertFromBase(LengthUnits.Inches);
    }

    public get Mils(): number {
        return this.convertFromBase(LengthUnits.Mils);
    }

    public get NauticalMiles(): number {
        return this.convertFromBase(LengthUnits.NauticalMiles);
    }

    public get Fathoms(): number {
        return this.convertFromBase(LengthUnits.Fathoms);
    }

    public get Shackles(): number {
        return this.convertFromBase(LengthUnits.Shackles);
    }

    public get Microinches(): number {
        return this.convertFromBase(LengthUnits.Microinches);
    }

    public get PrinterPoints(): number {
        return this.convertFromBase(LengthUnits.PrinterPoints);
    }

    public get DtpPoints(): number {
        return this.convertFromBase(LengthUnits.DtpPoints);
    }

    public get PrinterPicas(): number {
        return this.convertFromBase(LengthUnits.PrinterPicas);
    }

    public get DtpPicas(): number {
        return this.convertFromBase(LengthUnits.DtpPicas);
    }

    public get Twips(): number {
        return this.convertFromBase(LengthUnits.Twips);
    }

    public get Hands(): number {
        return this.convertFromBase(LengthUnits.Hands);
    }

    public get AstronomicalUnits(): number {
        return this.convertFromBase(LengthUnits.AstronomicalUnits);
    }

    public get Parsecs(): number {
        return this.convertFromBase(LengthUnits.Parsecs);
    }

    public get LightYears(): number {
        return this.convertFromBase(LengthUnits.LightYears);
    }

    public get SolarRadiuses(): number {
        return this.convertFromBase(LengthUnits.SolarRadiuses);
    }

    public get Nanometers(): number {
        return this.convertFromBase(LengthUnits.Nanometers);
    }

    public get Micrometers(): number {
        return this.convertFromBase(LengthUnits.Micrometers);
    }

    public get Centimeters(): number {
        return this.convertFromBase(LengthUnits.Centimeters);
    }

    public get Decimeters(): number {
        return this.convertFromBase(LengthUnits.Decimeters);
    }

    public get Hectometers(): number {
        return this.convertFromBase(LengthUnits.Hectometers);
    }

    public get Kilometers(): number {
        return this.convertFromBase(LengthUnits.Kilometers);
    }

    public get Kiloparsecs(): number {
        return this.convertFromBase(LengthUnits.Kiloparsecs);
    }

    public get Megaparsecs(): number {
        return this.convertFromBase(LengthUnits.Megaparsecs);
    }

    public get Kilolightyears(): number {
        return this.convertFromBase(LengthUnits.Kilolightyears);
    }

    public get Megalightyears(): number {
        return this.convertFromBase(LengthUnits.Megalightyears);
    }

    public static FromMeters(value: number): Length {
        return new Length(value, LengthUnits.Meters);
    }

    public static FromMiles(value: number): Length {
        return new Length(value, LengthUnits.Miles);
    }

    public static FromYards(value: number): Length {
        return new Length(value, LengthUnits.Yards);
    }

    public static FromFeet(value: number): Length {
        return new Length(value, LengthUnits.Feet);
    }

    public static FromUsSurveyFeet(value: number): Length {
        return new Length(value, LengthUnits.UsSurveyFeet);
    }

    public static FromInches(value: number): Length {
        return new Length(value, LengthUnits.Inches);
    }

    public static FromMils(value: number): Length {
        return new Length(value, LengthUnits.Mils);
    }

    public static FromNauticalMiles(value: number): Length {
        return new Length(value, LengthUnits.NauticalMiles);
    }

    public static FromFathoms(value: number): Length {
        return new Length(value, LengthUnits.Fathoms);
    }

    public static FromShackles(value: number): Length {
        return new Length(value, LengthUnits.Shackles);
    }

    public static FromMicroinches(value: number): Length {
        return new Length(value, LengthUnits.Microinches);
    }

    public static FromPrinterPoints(value: number): Length {
        return new Length(value, LengthUnits.PrinterPoints);
    }

    public static FromDtpPoints(value: number): Length {
        return new Length(value, LengthUnits.DtpPoints);
    }

    public static FromPrinterPicas(value: number): Length {
        return new Length(value, LengthUnits.PrinterPicas);
    }

    public static FromDtpPicas(value: number): Length {
        return new Length(value, LengthUnits.DtpPicas);
    }

    public static FromTwips(value: number): Length {
        return new Length(value, LengthUnits.Twips);
    }

    public static FromHands(value: number): Length {
        return new Length(value, LengthUnits.Hands);
    }

    public static FromAstronomicalUnits(value: number): Length {
        return new Length(value, LengthUnits.AstronomicalUnits);
    }

    public static FromParsecs(value: number): Length {
        return new Length(value, LengthUnits.Parsecs);
    }

    public static FromLightYears(value: number): Length {
        return new Length(value, LengthUnits.LightYears);
    }

    public static FromSolarRadiuses(value: number): Length {
        return new Length(value, LengthUnits.SolarRadiuses);
    }

    public static FromNanometers(value: number): Length {
        return new Length(value, LengthUnits.Nanometers);
    }

    public static FromMicrometers(value: number): Length {
        return new Length(value, LengthUnits.Micrometers);
    }

    public static FromCentimeters(value: number): Length {
        return new Length(value, LengthUnits.Centimeters);
    }

    public static FromDecimeters(value: number): Length {
        return new Length(value, LengthUnits.Decimeters);
    }

    public static FromHectometers(value: number): Length {
        return new Length(value, LengthUnits.Hectometers);
    }

    public static FromKilometers(value: number): Length {
        return new Length(value, LengthUnits.Kilometers);
    }

    public static FromKiloparsecs(value: number): Length {
        return new Length(value, LengthUnits.Kiloparsecs);
    }

    public static FromMegaparsecs(value: number): Length {
        return new Length(value, LengthUnits.Megaparsecs);
    }

    public static FromKilolightyears(value: number): Length {
        return new Length(value, LengthUnits.Kilolightyears);
    }

    public static FromMegalightyears(value: number): Length {
        return new Length(value, LengthUnits.Megalightyears);
    }

    private convertFromBase(toUnit: LengthUnits): number {

                switch (toUnit) {
                    
                case LengthUnits.Meters:
                    return this.value;
                
                case LengthUnits.Miles:
                    return this.value/1609.34;
                
                case LengthUnits.Yards:
                    return this.value/0.9144;
                
                case LengthUnits.Feet:
                    return this.value/0.3048;
                
                case LengthUnits.UsSurveyFeet:
                    return this.value*3937/1200;
                
                case LengthUnits.Inches:
                    return this.value/2.54e-2;
                
                case LengthUnits.Mils:
                    return this.value/2.54e-5;
                
                case LengthUnits.NauticalMiles:
                    return this.value/1852;
                
                case LengthUnits.Fathoms:
                    return this.value/1.8288;
                
                case LengthUnits.Shackles:
                    return this.value/27.432;
                
                case LengthUnits.Microinches:
                    return this.value/2.54e-8;
                
                case LengthUnits.PrinterPoints:
                    return (this.value/2.54e-2)*72.27;
                
                case LengthUnits.DtpPoints:
                    return (this.value/2.54e-2)*72;
                
                case LengthUnits.PrinterPicas:
                    return this.value*237.106301584;
                
                case LengthUnits.DtpPicas:
                    return this.value*236.220472441;
                
                case LengthUnits.Twips:
                    return this.value*56692.913385826;
                
                case LengthUnits.Hands:
                    return this.value / 1.016e-1;
                
                case LengthUnits.AstronomicalUnits:
                    return this.value / 1.4959787070e11;
                
                case LengthUnits.Parsecs:
                    return this.value / 3.08567758128e16;
                
                case LengthUnits.LightYears:
                    return this.value / 9.46073047258e15;
                
                case LengthUnits.SolarRadiuses:
                    return this.value / 6.95510000E+08;
                
                case LengthUnits.Nanometers:
                    return (this.value) * 1e-9;
                
                case LengthUnits.Micrometers:
                    return (this.value) * 0.000001;
                
                case LengthUnits.Centimeters:
                    return (this.value) * 0.01;
                
                case LengthUnits.Decimeters:
                    return (this.value) * 0.1;
                
                case LengthUnits.Hectometers:
                    return (this.value) * 100;
                
                case LengthUnits.Kilometers:
                    return (this.value) * 1000;
                
                case LengthUnits.Kiloparsecs:
                    return (this.value * 3.08567758128e16) * 1000;
                
                case LengthUnits.Megaparsecs:
                    return (this.value * 3.08567758128e16) * 1000000;
                
                case LengthUnits.Kilolightyears:
                    return (this.value * 9.46073047258e15) * 1000;
                
                case LengthUnits.Megalightyears:
                    return (this.value * 9.46073047258e15) * 1000000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: LengthUnits): number {

                switch (fromUnit) {
                    
                case LengthUnits.Meters:
                    return value;
                
                case LengthUnits.Miles:
                    return value*1609.34;
                
                case LengthUnits.Yards:
                    return value*0.9144;
                
                case LengthUnits.Feet:
                    return value*0.3048;
                
                case LengthUnits.UsSurveyFeet:
                    return value*1200/3937;
                
                case LengthUnits.Inches:
                    return value*2.54e-2;
                
                case LengthUnits.Mils:
                    return value*2.54e-5;
                
                case LengthUnits.NauticalMiles:
                    return value*1852;
                
                case LengthUnits.Fathoms:
                    return value*1.8288;
                
                case LengthUnits.Shackles:
                    return value*27.432;
                
                case LengthUnits.Microinches:
                    return value*2.54e-8;
                
                case LengthUnits.PrinterPoints:
                    return (value/72.27)*2.54e-2;
                
                case LengthUnits.DtpPoints:
                    return (value/72)*2.54e-2;
                
                case LengthUnits.PrinterPicas:
                    return value/237.106301584;
                
                case LengthUnits.DtpPicas:
                    return value/236.220472441;
                
                case LengthUnits.Twips:
                    return value/56692.913385826;
                
                case LengthUnits.Hands:
                    return value * 1.016e-1;
                
                case LengthUnits.AstronomicalUnits:
                    return value * 1.4959787070e11;
                
                case LengthUnits.Parsecs:
                    return value * 3.08567758128e16;
                
                case LengthUnits.LightYears:
                    return value * 9.46073047258e15;
                
                case LengthUnits.SolarRadiuses:
                    return value * 6.95510000E+08;
                
                case LengthUnits.Nanometers:
                    return (value) / 1e-9;
                
                case LengthUnits.Micrometers:
                    return (value) / 0.000001;
                
                case LengthUnits.Centimeters:
                    return (value) / 0.01;
                
                case LengthUnits.Decimeters:
                    return (value) / 0.1;
                
                case LengthUnits.Hectometers:
                    return (value) / 100;
                
                case LengthUnits.Kilometers:
                    return (value) / 1000;
                
                case LengthUnits.Kiloparsecs:
                    return (value / 3.08567758128e16) / 1000;
                
                case LengthUnits.Megaparsecs:
                    return (value / 3.08567758128e16) / 1000000;
                
                case LengthUnits.Kilolightyears:
                    return (value / 9.46073047258e15) / 1000;
                
                case LengthUnits.Megalightyears:
                    return (value / 9.46073047258e15) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
