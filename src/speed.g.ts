export enum SpeedUnits {
    MetersPerSecond,
    MetersPerMinutes,
    MetersPerHour,
    FeetPerSecond,
    FeetPerMinute,
    FeetPerHour,
    UsSurveyFeetPerSecond,
    UsSurveyFeetPerMinute,
    UsSurveyFeetPerHour,
    InchesPerSecond,
    InchesPerMinute,
    InchesPerHour,
    YardsPerSecond,
    YardsPerMinute,
    YardsPerHour,
    Knots,
    MilesPerHour,
    NanometerPerSecond,
    MicrometerPerSecond,
    CentimeterPerSecond,
    DecimeterPerSecond,
    KilometerPerSecond,
    NanometerPerMinute,
    MicrometerPerMinute,
    CentimeterPerMinute,
    DecimeterPerMinute,
    KilometerPerMinute,
    CentimeterPerHour,
    KilometerPerHour
}

export class Speed {
    private value: number;
    private meterspersecondLazy: number | null = null;
    private metersperminutesLazy: number | null = null;
    private metersperhourLazy: number | null = null;
    private feetpersecondLazy: number | null = null;
    private feetperminuteLazy: number | null = null;
    private feetperhourLazy: number | null = null;
    private ussurveyfeetpersecondLazy: number | null = null;
    private ussurveyfeetperminuteLazy: number | null = null;
    private ussurveyfeetperhourLazy: number | null = null;
    private inchespersecondLazy: number | null = null;
    private inchesperminuteLazy: number | null = null;
    private inchesperhourLazy: number | null = null;
    private yardspersecondLazy: number | null = null;
    private yardsperminuteLazy: number | null = null;
    private yardsperhourLazy: number | null = null;
    private knotsLazy: number | null = null;
    private milesperhourLazy: number | null = null;
    private nanometerpersecondLazy: number | null = null;
    private micrometerpersecondLazy: number | null = null;
    private centimeterpersecondLazy: number | null = null;
    private decimeterpersecondLazy: number | null = null;
    private kilometerpersecondLazy: number | null = null;
    private nanometerperminuteLazy: number | null = null;
    private micrometerperminuteLazy: number | null = null;
    private centimeterperminuteLazy: number | null = null;
    private decimeterperminuteLazy: number | null = null;
    private kilometerperminuteLazy: number | null = null;
    private centimeterperhourLazy: number | null = null;
    private kilometerperhourLazy: number | null = null;

    public constructor(value: number, fromUnit: SpeedUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get MetersPerSecond(): number {
        if(this.meterspersecondLazy !== null){
            return this.meterspersecondLazy;
        }
        return this.meterspersecondLazy = this.convertFromBase(SpeedUnits.MetersPerSecond);
    }

    public get MetersPerMinutes(): number {
        if(this.metersperminutesLazy !== null){
            return this.metersperminutesLazy;
        }
        return this.metersperminutesLazy = this.convertFromBase(SpeedUnits.MetersPerMinutes);
    }

    public get MetersPerHour(): number {
        if(this.metersperhourLazy !== null){
            return this.metersperhourLazy;
        }
        return this.metersperhourLazy = this.convertFromBase(SpeedUnits.MetersPerHour);
    }

    public get FeetPerSecond(): number {
        if(this.feetpersecondLazy !== null){
            return this.feetpersecondLazy;
        }
        return this.feetpersecondLazy = this.convertFromBase(SpeedUnits.FeetPerSecond);
    }

    public get FeetPerMinute(): number {
        if(this.feetperminuteLazy !== null){
            return this.feetperminuteLazy;
        }
        return this.feetperminuteLazy = this.convertFromBase(SpeedUnits.FeetPerMinute);
    }

    public get FeetPerHour(): number {
        if(this.feetperhourLazy !== null){
            return this.feetperhourLazy;
        }
        return this.feetperhourLazy = this.convertFromBase(SpeedUnits.FeetPerHour);
    }

    public get UsSurveyFeetPerSecond(): number {
        if(this.ussurveyfeetpersecondLazy !== null){
            return this.ussurveyfeetpersecondLazy;
        }
        return this.ussurveyfeetpersecondLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerSecond);
    }

    public get UsSurveyFeetPerMinute(): number {
        if(this.ussurveyfeetperminuteLazy !== null){
            return this.ussurveyfeetperminuteLazy;
        }
        return this.ussurveyfeetperminuteLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerMinute);
    }

    public get UsSurveyFeetPerHour(): number {
        if(this.ussurveyfeetperhourLazy !== null){
            return this.ussurveyfeetperhourLazy;
        }
        return this.ussurveyfeetperhourLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerHour);
    }

    public get InchesPerSecond(): number {
        if(this.inchespersecondLazy !== null){
            return this.inchespersecondLazy;
        }
        return this.inchespersecondLazy = this.convertFromBase(SpeedUnits.InchesPerSecond);
    }

    public get InchesPerMinute(): number {
        if(this.inchesperminuteLazy !== null){
            return this.inchesperminuteLazy;
        }
        return this.inchesperminuteLazy = this.convertFromBase(SpeedUnits.InchesPerMinute);
    }

    public get InchesPerHour(): number {
        if(this.inchesperhourLazy !== null){
            return this.inchesperhourLazy;
        }
        return this.inchesperhourLazy = this.convertFromBase(SpeedUnits.InchesPerHour);
    }

    public get YardsPerSecond(): number {
        if(this.yardspersecondLazy !== null){
            return this.yardspersecondLazy;
        }
        return this.yardspersecondLazy = this.convertFromBase(SpeedUnits.YardsPerSecond);
    }

    public get YardsPerMinute(): number {
        if(this.yardsperminuteLazy !== null){
            return this.yardsperminuteLazy;
        }
        return this.yardsperminuteLazy = this.convertFromBase(SpeedUnits.YardsPerMinute);
    }

    public get YardsPerHour(): number {
        if(this.yardsperhourLazy !== null){
            return this.yardsperhourLazy;
        }
        return this.yardsperhourLazy = this.convertFromBase(SpeedUnits.YardsPerHour);
    }

    public get Knots(): number {
        if(this.knotsLazy !== null){
            return this.knotsLazy;
        }
        return this.knotsLazy = this.convertFromBase(SpeedUnits.Knots);
    }

    public get MilesPerHour(): number {
        if(this.milesperhourLazy !== null){
            return this.milesperhourLazy;
        }
        return this.milesperhourLazy = this.convertFromBase(SpeedUnits.MilesPerHour);
    }

    public get NanometerPerSecond(): number {
        if(this.nanometerpersecondLazy !== null){
            return this.nanometerpersecondLazy;
        }
        return this.nanometerpersecondLazy = this.convertFromBase(SpeedUnits.NanometerPerSecond);
    }

    public get MicrometerPerSecond(): number {
        if(this.micrometerpersecondLazy !== null){
            return this.micrometerpersecondLazy;
        }
        return this.micrometerpersecondLazy = this.convertFromBase(SpeedUnits.MicrometerPerSecond);
    }

    public get CentimeterPerSecond(): number {
        if(this.centimeterpersecondLazy !== null){
            return this.centimeterpersecondLazy;
        }
        return this.centimeterpersecondLazy = this.convertFromBase(SpeedUnits.CentimeterPerSecond);
    }

    public get DecimeterPerSecond(): number {
        if(this.decimeterpersecondLazy !== null){
            return this.decimeterpersecondLazy;
        }
        return this.decimeterpersecondLazy = this.convertFromBase(SpeedUnits.DecimeterPerSecond);
    }

    public get KilometerPerSecond(): number {
        if(this.kilometerpersecondLazy !== null){
            return this.kilometerpersecondLazy;
        }
        return this.kilometerpersecondLazy = this.convertFromBase(SpeedUnits.KilometerPerSecond);
    }

    public get NanometerPerMinute(): number {
        if(this.nanometerperminuteLazy !== null){
            return this.nanometerperminuteLazy;
        }
        return this.nanometerperminuteLazy = this.convertFromBase(SpeedUnits.NanometerPerMinute);
    }

    public get MicrometerPerMinute(): number {
        if(this.micrometerperminuteLazy !== null){
            return this.micrometerperminuteLazy;
        }
        return this.micrometerperminuteLazy = this.convertFromBase(SpeedUnits.MicrometerPerMinute);
    }

    public get CentimeterPerMinute(): number {
        if(this.centimeterperminuteLazy !== null){
            return this.centimeterperminuteLazy;
        }
        return this.centimeterperminuteLazy = this.convertFromBase(SpeedUnits.CentimeterPerMinute);
    }

    public get DecimeterPerMinute(): number {
        if(this.decimeterperminuteLazy !== null){
            return this.decimeterperminuteLazy;
        }
        return this.decimeterperminuteLazy = this.convertFromBase(SpeedUnits.DecimeterPerMinute);
    }

    public get KilometerPerMinute(): number {
        if(this.kilometerperminuteLazy !== null){
            return this.kilometerperminuteLazy;
        }
        return this.kilometerperminuteLazy = this.convertFromBase(SpeedUnits.KilometerPerMinute);
    }

    public get CentimeterPerHour(): number {
        if(this.centimeterperhourLazy !== null){
            return this.centimeterperhourLazy;
        }
        return this.centimeterperhourLazy = this.convertFromBase(SpeedUnits.CentimeterPerHour);
    }

    public get KilometerPerHour(): number {
        if(this.kilometerperhourLazy !== null){
            return this.kilometerperhourLazy;
        }
        return this.kilometerperhourLazy = this.convertFromBase(SpeedUnits.KilometerPerHour);
    }

    public static FromMetersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.MetersPerSecond);
    }

    public static FromMetersPerMinutes(value: number): Speed {
        return new Speed(value, SpeedUnits.MetersPerMinutes);
    }

    public static FromMetersPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.MetersPerHour);
    }

    public static FromFeetPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.FeetPerSecond);
    }

    public static FromFeetPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.FeetPerMinute);
    }

    public static FromFeetPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.FeetPerHour);
    }

    public static FromUsSurveyFeetPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerSecond);
    }

    public static FromUsSurveyFeetPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerMinute);
    }

    public static FromUsSurveyFeetPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerHour);
    }

    public static FromInchesPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.InchesPerSecond);
    }

    public static FromInchesPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.InchesPerMinute);
    }

    public static FromInchesPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.InchesPerHour);
    }

    public static FromYardsPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.YardsPerSecond);
    }

    public static FromYardsPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.YardsPerMinute);
    }

    public static FromYardsPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.YardsPerHour);
    }

    public static FromKnots(value: number): Speed {
        return new Speed(value, SpeedUnits.Knots);
    }

    public static FromMilesPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.MilesPerHour);
    }

    public static FromNanometerPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.NanometerPerSecond);
    }

    public static FromMicrometerPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.MicrometerPerSecond);
    }

    public static FromCentimeterPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.CentimeterPerSecond);
    }

    public static FromDecimeterPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.DecimeterPerSecond);
    }

    public static FromKilometerPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.KilometerPerSecond);
    }

    public static FromNanometerPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.NanometerPerMinute);
    }

    public static FromMicrometerPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.MicrometerPerMinute);
    }

    public static FromCentimeterPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.CentimeterPerMinute);
    }

    public static FromDecimeterPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.DecimeterPerMinute);
    }

    public static FromKilometerPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.KilometerPerMinute);
    }

    public static FromCentimeterPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.CentimeterPerHour);
    }

    public static FromKilometerPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.KilometerPerHour);
    }

    private convertFromBase(toUnit: SpeedUnits): number {
        switch (toUnit) {
                
            case SpeedUnits.MetersPerSecond:
                return this.value;
            case SpeedUnits.MetersPerMinutes:
                return this.value*60;
            case SpeedUnits.MetersPerHour:
                return this.value*3600;
            case SpeedUnits.FeetPerSecond:
                return this.value/0.3048;
            case SpeedUnits.FeetPerMinute:
                return this.value/0.3048*60;
            case SpeedUnits.FeetPerHour:
                return this.value/0.3048*3600;
            case SpeedUnits.UsSurveyFeetPerSecond:
                return this.value*3937/1200;
            case SpeedUnits.UsSurveyFeetPerMinute:
                return (this.value*3937/1200)*60;
            case SpeedUnits.UsSurveyFeetPerHour:
                return (this.value*3937/1200)*3600;
            case SpeedUnits.InchesPerSecond:
                return this.value/2.54e-2;
            case SpeedUnits.InchesPerMinute:
                return (this.value/2.54e-2)*60;
            case SpeedUnits.InchesPerHour:
                return (this.value/2.54e-2)*3600;
            case SpeedUnits.YardsPerSecond:
                return this.value/0.9144;
            case SpeedUnits.YardsPerMinute:
                return this.value/0.9144*60;
            case SpeedUnits.YardsPerHour:
                return this.value/0.9144*3600;
            case SpeedUnits.Knots:
                return this.value/0.514444;
            case SpeedUnits.MilesPerHour:
                return this.value/0.44704;
            case SpeedUnits.NanometerPerSecond:
                return (this.value) / 1e-9;
            case SpeedUnits.MicrometerPerSecond:
                return (this.value) / 0.000001;
            case SpeedUnits.CentimeterPerSecond:
                return (this.value) / 0.01;
            case SpeedUnits.DecimeterPerSecond:
                return (this.value) / 0.1;
            case SpeedUnits.KilometerPerSecond:
                return (this.value) / 1000;
            case SpeedUnits.NanometerPerMinute:
                return (this.value*60) / 1e-9;
            case SpeedUnits.MicrometerPerMinute:
                return (this.value*60) / 0.000001;
            case SpeedUnits.CentimeterPerMinute:
                return (this.value*60) / 0.01;
            case SpeedUnits.DecimeterPerMinute:
                return (this.value*60) / 0.1;
            case SpeedUnits.KilometerPerMinute:
                return (this.value*60) / 1000;
            case SpeedUnits.CentimeterPerHour:
                return (this.value*3600) / 0.01;
            case SpeedUnits.KilometerPerHour:
                return (this.value*3600) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: SpeedUnits): number {
        switch (fromUnit) {
                
            case SpeedUnits.MetersPerSecond:
                return value;
            case SpeedUnits.MetersPerMinutes:
                return value/60;
            case SpeedUnits.MetersPerHour:
                return value/3600;
            case SpeedUnits.FeetPerSecond:
                return value*0.3048;
            case SpeedUnits.FeetPerMinute:
                return value*0.3048/60;
            case SpeedUnits.FeetPerHour:
                return value*0.3048/3600;
            case SpeedUnits.UsSurveyFeetPerSecond:
                return value*1200/3937;
            case SpeedUnits.UsSurveyFeetPerMinute:
                return (value*1200/3937)/60;
            case SpeedUnits.UsSurveyFeetPerHour:
                return (value*1200/3937)/3600;
            case SpeedUnits.InchesPerSecond:
                return value*2.54e-2;
            case SpeedUnits.InchesPerMinute:
                return (value/60)*2.54e-2;
            case SpeedUnits.InchesPerHour:
                return (value/3600)*2.54e-2;
            case SpeedUnits.YardsPerSecond:
                return value*0.9144;
            case SpeedUnits.YardsPerMinute:
                return value*0.9144/60;
            case SpeedUnits.YardsPerHour:
                return value*0.9144/3600;
            case SpeedUnits.Knots:
                return value*0.514444;
            case SpeedUnits.MilesPerHour:
                return value*0.44704;
            case SpeedUnits.NanometerPerSecond:
                return (value) * 1e-9;
            case SpeedUnits.MicrometerPerSecond:
                return (value) * 0.000001;
            case SpeedUnits.CentimeterPerSecond:
                return (value) * 0.01;
            case SpeedUnits.DecimeterPerSecond:
                return (value) * 0.1;
            case SpeedUnits.KilometerPerSecond:
                return (value) * 1000;
            case SpeedUnits.NanometerPerMinute:
                return (value/60) * 1e-9;
            case SpeedUnits.MicrometerPerMinute:
                return (value/60) * 0.000001;
            case SpeedUnits.CentimeterPerMinute:
                return (value/60) * 0.01;
            case SpeedUnits.DecimeterPerMinute:
                return (value/60) * 0.1;
            case SpeedUnits.KilometerPerMinute:
                return (value/60) * 1000;
            case SpeedUnits.CentimeterPerHour:
                return (value/3600) * 0.01;
            case SpeedUnits.KilometerPerHour:
                return (value/3600) * 1000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: SpeedUnits = SpeedUnits.MetersPerSecond): string {

        switch (toUnit) {
            
            case SpeedUnits.MetersPerSecond:
                return this.MetersPerSecond + ` m/s`;
            case SpeedUnits.MetersPerMinutes:
                return this.MetersPerMinutes + ` m/min`;
            case SpeedUnits.MetersPerHour:
                return this.MetersPerHour + ` m/h`;
            case SpeedUnits.FeetPerSecond:
                return this.FeetPerSecond + ` ft/s`;
            case SpeedUnits.FeetPerMinute:
                return this.FeetPerMinute + ` ft/min`;
            case SpeedUnits.FeetPerHour:
                return this.FeetPerHour + ` ft/h`;
            case SpeedUnits.UsSurveyFeetPerSecond:
                return this.UsSurveyFeetPerSecond + ` ftUS/s`;
            case SpeedUnits.UsSurveyFeetPerMinute:
                return this.UsSurveyFeetPerMinute + ` ftUS/min`;
            case SpeedUnits.UsSurveyFeetPerHour:
                return this.UsSurveyFeetPerHour + ` ftUS/h`;
            case SpeedUnits.InchesPerSecond:
                return this.InchesPerSecond + ` in/s`;
            case SpeedUnits.InchesPerMinute:
                return this.InchesPerMinute + ` in/min`;
            case SpeedUnits.InchesPerHour:
                return this.InchesPerHour + ` in/h`;
            case SpeedUnits.YardsPerSecond:
                return this.YardsPerSecond + ` yd/s`;
            case SpeedUnits.YardsPerMinute:
                return this.YardsPerMinute + ` yd/min`;
            case SpeedUnits.YardsPerHour:
                return this.YardsPerHour + ` yd/h`;
            case SpeedUnits.Knots:
                return this.Knots + ` kn`;
            case SpeedUnits.MilesPerHour:
                return this.MilesPerHour + ` mph`;
            case SpeedUnits.NanometerPerSecond:
                return this.NanometerPerSecond + ` m/s`;
            case SpeedUnits.MicrometerPerSecond:
                return this.MicrometerPerSecond + ` m/s`;
            case SpeedUnits.CentimeterPerSecond:
                return this.CentimeterPerSecond + ` m/s`;
            case SpeedUnits.DecimeterPerSecond:
                return this.DecimeterPerSecond + ` m/s`;
            case SpeedUnits.KilometerPerSecond:
                return this.KilometerPerSecond + ` m/s`;
            case SpeedUnits.NanometerPerMinute:
                return this.NanometerPerMinute + ` m/min`;
            case SpeedUnits.MicrometerPerMinute:
                return this.MicrometerPerMinute + ` m/min`;
            case SpeedUnits.CentimeterPerMinute:
                return this.CentimeterPerMinute + ` m/min`;
            case SpeedUnits.DecimeterPerMinute:
                return this.DecimeterPerMinute + ` m/min`;
            case SpeedUnits.KilometerPerMinute:
                return this.KilometerPerMinute + ` m/min`;
            case SpeedUnits.CentimeterPerHour:
                return this.CentimeterPerHour + ` m/h`;
            case SpeedUnits.KilometerPerHour:
                return this.KilometerPerHour + ` m/h`;
        default:
            break;
        }
        return this.value.toString();
    }
}
