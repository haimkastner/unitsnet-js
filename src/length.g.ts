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
    private metersLazy: number | null = null;
    private milesLazy: number | null = null;
    private yardsLazy: number | null = null;
    private feetLazy: number | null = null;
    private ussurveyfeetLazy: number | null = null;
    private inchesLazy: number | null = null;
    private milsLazy: number | null = null;
    private nauticalmilesLazy: number | null = null;
    private fathomsLazy: number | null = null;
    private shacklesLazy: number | null = null;
    private microinchesLazy: number | null = null;
    private printerpointsLazy: number | null = null;
    private dtppointsLazy: number | null = null;
    private printerpicasLazy: number | null = null;
    private dtppicasLazy: number | null = null;
    private twipsLazy: number | null = null;
    private handsLazy: number | null = null;
    private astronomicalunitsLazy: number | null = null;
    private parsecsLazy: number | null = null;
    private lightyearsLazy: number | null = null;
    private solarradiusesLazy: number | null = null;
    private nanometersLazy: number | null = null;
    private micrometersLazy: number | null = null;
    private centimetersLazy: number | null = null;
    private decimetersLazy: number | null = null;
    private hectometersLazy: number | null = null;
    private kilometersLazy: number | null = null;
    private kiloparsecsLazy: number | null = null;
    private megaparsecsLazy: number | null = null;
    private kilolightyearsLazy: number | null = null;
    private megalightyearsLazy: number | null = null;

    public constructor(value: number, fromUnit: LengthUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Meters(): number {
        if(this.metersLazy !== null){
            return this.metersLazy;
        }
        return this.metersLazy = this.convertFromBase(LengthUnits.Meters);
    }

    public get Miles(): number {
        if(this.milesLazy !== null){
            return this.milesLazy;
        }
        return this.milesLazy = this.convertFromBase(LengthUnits.Miles);
    }

    public get Yards(): number {
        if(this.yardsLazy !== null){
            return this.yardsLazy;
        }
        return this.yardsLazy = this.convertFromBase(LengthUnits.Yards);
    }

    public get Feet(): number {
        if(this.feetLazy !== null){
            return this.feetLazy;
        }
        return this.feetLazy = this.convertFromBase(LengthUnits.Feet);
    }

    public get UsSurveyFeet(): number {
        if(this.ussurveyfeetLazy !== null){
            return this.ussurveyfeetLazy;
        }
        return this.ussurveyfeetLazy = this.convertFromBase(LengthUnits.UsSurveyFeet);
    }

    public get Inches(): number {
        if(this.inchesLazy !== null){
            return this.inchesLazy;
        }
        return this.inchesLazy = this.convertFromBase(LengthUnits.Inches);
    }

    public get Mils(): number {
        if(this.milsLazy !== null){
            return this.milsLazy;
        }
        return this.milsLazy = this.convertFromBase(LengthUnits.Mils);
    }

    public get NauticalMiles(): number {
        if(this.nauticalmilesLazy !== null){
            return this.nauticalmilesLazy;
        }
        return this.nauticalmilesLazy = this.convertFromBase(LengthUnits.NauticalMiles);
    }

    public get Fathoms(): number {
        if(this.fathomsLazy !== null){
            return this.fathomsLazy;
        }
        return this.fathomsLazy = this.convertFromBase(LengthUnits.Fathoms);
    }

    public get Shackles(): number {
        if(this.shacklesLazy !== null){
            return this.shacklesLazy;
        }
        return this.shacklesLazy = this.convertFromBase(LengthUnits.Shackles);
    }

    public get Microinches(): number {
        if(this.microinchesLazy !== null){
            return this.microinchesLazy;
        }
        return this.microinchesLazy = this.convertFromBase(LengthUnits.Microinches);
    }

    public get PrinterPoints(): number {
        if(this.printerpointsLazy !== null){
            return this.printerpointsLazy;
        }
        return this.printerpointsLazy = this.convertFromBase(LengthUnits.PrinterPoints);
    }

    public get DtpPoints(): number {
        if(this.dtppointsLazy !== null){
            return this.dtppointsLazy;
        }
        return this.dtppointsLazy = this.convertFromBase(LengthUnits.DtpPoints);
    }

    public get PrinterPicas(): number {
        if(this.printerpicasLazy !== null){
            return this.printerpicasLazy;
        }
        return this.printerpicasLazy = this.convertFromBase(LengthUnits.PrinterPicas);
    }

    public get DtpPicas(): number {
        if(this.dtppicasLazy !== null){
            return this.dtppicasLazy;
        }
        return this.dtppicasLazy = this.convertFromBase(LengthUnits.DtpPicas);
    }

    public get Twips(): number {
        if(this.twipsLazy !== null){
            return this.twipsLazy;
        }
        return this.twipsLazy = this.convertFromBase(LengthUnits.Twips);
    }

    public get Hands(): number {
        if(this.handsLazy !== null){
            return this.handsLazy;
        }
        return this.handsLazy = this.convertFromBase(LengthUnits.Hands);
    }

    public get AstronomicalUnits(): number {
        if(this.astronomicalunitsLazy !== null){
            return this.astronomicalunitsLazy;
        }
        return this.astronomicalunitsLazy = this.convertFromBase(LengthUnits.AstronomicalUnits);
    }

    public get Parsecs(): number {
        if(this.parsecsLazy !== null){
            return this.parsecsLazy;
        }
        return this.parsecsLazy = this.convertFromBase(LengthUnits.Parsecs);
    }

    public get LightYears(): number {
        if(this.lightyearsLazy !== null){
            return this.lightyearsLazy;
        }
        return this.lightyearsLazy = this.convertFromBase(LengthUnits.LightYears);
    }

    public get SolarRadiuses(): number {
        if(this.solarradiusesLazy !== null){
            return this.solarradiusesLazy;
        }
        return this.solarradiusesLazy = this.convertFromBase(LengthUnits.SolarRadiuses);
    }

    public get Nanometers(): number {
        if(this.nanometersLazy !== null){
            return this.nanometersLazy;
        }
        return this.nanometersLazy = this.convertFromBase(LengthUnits.Nanometers);
    }

    public get Micrometers(): number {
        if(this.micrometersLazy !== null){
            return this.micrometersLazy;
        }
        return this.micrometersLazy = this.convertFromBase(LengthUnits.Micrometers);
    }

    public get Centimeters(): number {
        if(this.centimetersLazy !== null){
            return this.centimetersLazy;
        }
        return this.centimetersLazy = this.convertFromBase(LengthUnits.Centimeters);
    }

    public get Decimeters(): number {
        if(this.decimetersLazy !== null){
            return this.decimetersLazy;
        }
        return this.decimetersLazy = this.convertFromBase(LengthUnits.Decimeters);
    }

    public get Hectometers(): number {
        if(this.hectometersLazy !== null){
            return this.hectometersLazy;
        }
        return this.hectometersLazy = this.convertFromBase(LengthUnits.Hectometers);
    }

    public get Kilometers(): number {
        if(this.kilometersLazy !== null){
            return this.kilometersLazy;
        }
        return this.kilometersLazy = this.convertFromBase(LengthUnits.Kilometers);
    }

    public get Kiloparsecs(): number {
        if(this.kiloparsecsLazy !== null){
            return this.kiloparsecsLazy;
        }
        return this.kiloparsecsLazy = this.convertFromBase(LengthUnits.Kiloparsecs);
    }

    public get Megaparsecs(): number {
        if(this.megaparsecsLazy !== null){
            return this.megaparsecsLazy;
        }
        return this.megaparsecsLazy = this.convertFromBase(LengthUnits.Megaparsecs);
    }

    public get Kilolightyears(): number {
        if(this.kilolightyearsLazy !== null){
            return this.kilolightyearsLazy;
        }
        return this.kilolightyearsLazy = this.convertFromBase(LengthUnits.Kilolightyears);
    }

    public get Megalightyears(): number {
        if(this.megalightyearsLazy !== null){
            return this.megalightyearsLazy;
        }
        return this.megalightyearsLazy = this.convertFromBase(LengthUnits.Megalightyears);
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
                return (this.value) / 1e-9;
            case LengthUnits.Micrometers:
                return (this.value) / 0.000001;
            case LengthUnits.Centimeters:
                return (this.value) / 0.01;
            case LengthUnits.Decimeters:
                return (this.value) / 0.1;
            case LengthUnits.Hectometers:
                return (this.value) / 100;
            case LengthUnits.Kilometers:
                return (this.value) / 1000;
            case LengthUnits.Kiloparsecs:
                return (this.value / 3.08567758128e16) / 1000;
            case LengthUnits.Megaparsecs:
                return (this.value / 3.08567758128e16) / 1000000;
            case LengthUnits.Kilolightyears:
                return (this.value / 9.46073047258e15) / 1000;
            case LengthUnits.Megalightyears:
                return (this.value / 9.46073047258e15) / 1000000;
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
                return (value) * 1e-9;
            case LengthUnits.Micrometers:
                return (value) * 0.000001;
            case LengthUnits.Centimeters:
                return (value) * 0.01;
            case LengthUnits.Decimeters:
                return (value) * 0.1;
            case LengthUnits.Hectometers:
                return (value) * 100;
            case LengthUnits.Kilometers:
                return (value) * 1000;
            case LengthUnits.Kiloparsecs:
                return (value * 3.08567758128e16) * 1000;
            case LengthUnits.Megaparsecs:
                return (value * 3.08567758128e16) * 1000000;
            case LengthUnits.Kilolightyears:
                return (value * 9.46073047258e15) * 1000;
            case LengthUnits.Megalightyears:
                return (value * 9.46073047258e15) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
