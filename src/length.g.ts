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
    Nanometer,
    Micrometer,
    Centimeter,
    Decimeter,
    Hectometer,
    Kilometer,
    Kiloparsec,
    Megaparsec,
    KilolightYear,
    MegalightYear
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
    private nanometerLazy: number | null = null;
    private micrometerLazy: number | null = null;
    private centimeterLazy: number | null = null;
    private decimeterLazy: number | null = null;
    private hectometerLazy: number | null = null;
    private kilometerLazy: number | null = null;
    private kiloparsecLazy: number | null = null;
    private megaparsecLazy: number | null = null;
    private kilolightyearLazy: number | null = null;
    private megalightyearLazy: number | null = null;

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

    public get Nanometer(): number {
        if(this.nanometerLazy !== null){
            return this.nanometerLazy;
        }
        return this.nanometerLazy = this.convertFromBase(LengthUnits.Nanometer);
    }

    public get Micrometer(): number {
        if(this.micrometerLazy !== null){
            return this.micrometerLazy;
        }
        return this.micrometerLazy = this.convertFromBase(LengthUnits.Micrometer);
    }

    public get Centimeter(): number {
        if(this.centimeterLazy !== null){
            return this.centimeterLazy;
        }
        return this.centimeterLazy = this.convertFromBase(LengthUnits.Centimeter);
    }

    public get Decimeter(): number {
        if(this.decimeterLazy !== null){
            return this.decimeterLazy;
        }
        return this.decimeterLazy = this.convertFromBase(LengthUnits.Decimeter);
    }

    public get Hectometer(): number {
        if(this.hectometerLazy !== null){
            return this.hectometerLazy;
        }
        return this.hectometerLazy = this.convertFromBase(LengthUnits.Hectometer);
    }

    public get Kilometer(): number {
        if(this.kilometerLazy !== null){
            return this.kilometerLazy;
        }
        return this.kilometerLazy = this.convertFromBase(LengthUnits.Kilometer);
    }

    public get Kiloparsec(): number {
        if(this.kiloparsecLazy !== null){
            return this.kiloparsecLazy;
        }
        return this.kiloparsecLazy = this.convertFromBase(LengthUnits.Kiloparsec);
    }

    public get Megaparsec(): number {
        if(this.megaparsecLazy !== null){
            return this.megaparsecLazy;
        }
        return this.megaparsecLazy = this.convertFromBase(LengthUnits.Megaparsec);
    }

    public get KilolightYear(): number {
        if(this.kilolightyearLazy !== null){
            return this.kilolightyearLazy;
        }
        return this.kilolightyearLazy = this.convertFromBase(LengthUnits.KilolightYear);
    }

    public get MegalightYear(): number {
        if(this.megalightyearLazy !== null){
            return this.megalightyearLazy;
        }
        return this.megalightyearLazy = this.convertFromBase(LengthUnits.MegalightYear);
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

    public static FromNanometer(value: number): Length {
        return new Length(value, LengthUnits.Nanometer);
    }

    public static FromMicrometer(value: number): Length {
        return new Length(value, LengthUnits.Micrometer);
    }

    public static FromCentimeter(value: number): Length {
        return new Length(value, LengthUnits.Centimeter);
    }

    public static FromDecimeter(value: number): Length {
        return new Length(value, LengthUnits.Decimeter);
    }

    public static FromHectometer(value: number): Length {
        return new Length(value, LengthUnits.Hectometer);
    }

    public static FromKilometer(value: number): Length {
        return new Length(value, LengthUnits.Kilometer);
    }

    public static FromKiloparsec(value: number): Length {
        return new Length(value, LengthUnits.Kiloparsec);
    }

    public static FromMegaparsec(value: number): Length {
        return new Length(value, LengthUnits.Megaparsec);
    }

    public static FromKilolightYear(value: number): Length {
        return new Length(value, LengthUnits.KilolightYear);
    }

    public static FromMegalightYear(value: number): Length {
        return new Length(value, LengthUnits.MegalightYear);
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
            case LengthUnits.Nanometer:
                return (this.value) / 1e-9;
            case LengthUnits.Micrometer:
                return (this.value) / 0.000001;
            case LengthUnits.Centimeter:
                return (this.value) / 0.01;
            case LengthUnits.Decimeter:
                return (this.value) / 0.1;
            case LengthUnits.Hectometer:
                return (this.value) / 100;
            case LengthUnits.Kilometer:
                return (this.value) / 1000;
            case LengthUnits.Kiloparsec:
                return (this.value / 3.08567758128e16) / 1000;
            case LengthUnits.Megaparsec:
                return (this.value / 3.08567758128e16) / 1000000;
            case LengthUnits.KilolightYear:
                return (this.value / 9.46073047258e15) / 1000;
            case LengthUnits.MegalightYear:
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
            case LengthUnits.Nanometer:
                return (value) * 1e-9;
            case LengthUnits.Micrometer:
                return (value) * 0.000001;
            case LengthUnits.Centimeter:
                return (value) * 0.01;
            case LengthUnits.Decimeter:
                return (value) * 0.1;
            case LengthUnits.Hectometer:
                return (value) * 100;
            case LengthUnits.Kilometer:
                return (value) * 1000;
            case LengthUnits.Kiloparsec:
                return (value * 3.08567758128e16) * 1000;
            case LengthUnits.Megaparsec:
                return (value * 3.08567758128e16) * 1000000;
            case LengthUnits.KilolightYear:
                return (value * 9.46073047258e15) * 1000;
            case LengthUnits.MegalightYear:
                return (value * 9.46073047258e15) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: LengthUnits = LengthUnits.Meters): string {

        switch (toUnit) {
            
            case LengthUnits.Meters:
                return this.Meters + ` m`;
            case LengthUnits.Miles:
                return this.Miles + ` mi`;
            case LengthUnits.Yards:
                return this.Yards + ` yd`;
            case LengthUnits.Feet:
                return this.Feet + ` ft`;
            case LengthUnits.UsSurveyFeet:
                return this.UsSurveyFeet + ` ftUS`;
            case LengthUnits.Inches:
                return this.Inches + ` in`;
            case LengthUnits.Mils:
                return this.Mils + ` mil`;
            case LengthUnits.NauticalMiles:
                return this.NauticalMiles + ` NM`;
            case LengthUnits.Fathoms:
                return this.Fathoms + ` fathom`;
            case LengthUnits.Shackles:
                return this.Shackles + ` shackle`;
            case LengthUnits.Microinches:
                return this.Microinches + ` µin`;
            case LengthUnits.PrinterPoints:
                return this.PrinterPoints + ` pt`;
            case LengthUnits.DtpPoints:
                return this.DtpPoints + ` pt`;
            case LengthUnits.PrinterPicas:
                return this.PrinterPicas + ` pica`;
            case LengthUnits.DtpPicas:
                return this.DtpPicas + ` pica`;
            case LengthUnits.Twips:
                return this.Twips + ` twip`;
            case LengthUnits.Hands:
                return this.Hands + ` h`;
            case LengthUnits.AstronomicalUnits:
                return this.AstronomicalUnits + ` au`;
            case LengthUnits.Parsecs:
                return this.Parsecs + ` pc`;
            case LengthUnits.LightYears:
                return this.LightYears + ` ly`;
            case LengthUnits.SolarRadiuses:
                return this.SolarRadiuses + ` R⊙`;
            case LengthUnits.Nanometer:
                return this.Nanometer + ` m`;
            case LengthUnits.Micrometer:
                return this.Micrometer + ` m`;
            case LengthUnits.Centimeter:
                return this.Centimeter + ` m`;
            case LengthUnits.Decimeter:
                return this.Decimeter + ` m`;
            case LengthUnits.Hectometer:
                return this.Hectometer + ` m`;
            case LengthUnits.Kilometer:
                return this.Kilometer + ` m`;
            case LengthUnits.Kiloparsec:
                return this.Kiloparsec + ` pc`;
            case LengthUnits.Megaparsec:
                return this.Megaparsec + ` pc`;
            case LengthUnits.KilolightYear:
                return this.KilolightYear + ` ly`;
            case LengthUnits.MegalightYear:
                return this.MegalightYear + ` ly`;
        default:
            break;
        }
        return this.value.toString();
    }
}
