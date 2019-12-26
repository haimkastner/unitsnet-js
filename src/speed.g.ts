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
    Nanometerspersecond,
    Micrometerspersecond,
    Centimeterspersecond,
    Decimeterspersecond,
    Kilometerspersecond,
    Nanometersperminutes,
    Micrometersperminutes,
    Centimetersperminutes,
    Decimetersperminutes,
    Kilometersperminutes,
    Centimetersperhour,
    Kilometersperhour
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
    private nanometerspersecondLazy: number | null = null;
    private micrometerspersecondLazy: number | null = null;
    private centimeterspersecondLazy: number | null = null;
    private decimeterspersecondLazy: number | null = null;
    private kilometerspersecondLazy: number | null = null;
    private nanometersperminutesLazy: number | null = null;
    private micrometersperminutesLazy: number | null = null;
    private centimetersperminutesLazy: number | null = null;
    private decimetersperminutesLazy: number | null = null;
    private kilometersperminutesLazy: number | null = null;
    private centimetersperhourLazy: number | null = null;
    private kilometersperhourLazy: number | null = null;

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

    public get Nanometerspersecond(): number {
        if(this.nanometerspersecondLazy !== null){
            return this.nanometerspersecondLazy;
        }
        return this.nanometerspersecondLazy = this.convertFromBase(SpeedUnits.Nanometerspersecond);
    }

    public get Micrometerspersecond(): number {
        if(this.micrometerspersecondLazy !== null){
            return this.micrometerspersecondLazy;
        }
        return this.micrometerspersecondLazy = this.convertFromBase(SpeedUnits.Micrometerspersecond);
    }

    public get Centimeterspersecond(): number {
        if(this.centimeterspersecondLazy !== null){
            return this.centimeterspersecondLazy;
        }
        return this.centimeterspersecondLazy = this.convertFromBase(SpeedUnits.Centimeterspersecond);
    }

    public get Decimeterspersecond(): number {
        if(this.decimeterspersecondLazy !== null){
            return this.decimeterspersecondLazy;
        }
        return this.decimeterspersecondLazy = this.convertFromBase(SpeedUnits.Decimeterspersecond);
    }

    public get Kilometerspersecond(): number {
        if(this.kilometerspersecondLazy !== null){
            return this.kilometerspersecondLazy;
        }
        return this.kilometerspersecondLazy = this.convertFromBase(SpeedUnits.Kilometerspersecond);
    }

    public get Nanometersperminutes(): number {
        if(this.nanometersperminutesLazy !== null){
            return this.nanometersperminutesLazy;
        }
        return this.nanometersperminutesLazy = this.convertFromBase(SpeedUnits.Nanometersperminutes);
    }

    public get Micrometersperminutes(): number {
        if(this.micrometersperminutesLazy !== null){
            return this.micrometersperminutesLazy;
        }
        return this.micrometersperminutesLazy = this.convertFromBase(SpeedUnits.Micrometersperminutes);
    }

    public get Centimetersperminutes(): number {
        if(this.centimetersperminutesLazy !== null){
            return this.centimetersperminutesLazy;
        }
        return this.centimetersperminutesLazy = this.convertFromBase(SpeedUnits.Centimetersperminutes);
    }

    public get Decimetersperminutes(): number {
        if(this.decimetersperminutesLazy !== null){
            return this.decimetersperminutesLazy;
        }
        return this.decimetersperminutesLazy = this.convertFromBase(SpeedUnits.Decimetersperminutes);
    }

    public get Kilometersperminutes(): number {
        if(this.kilometersperminutesLazy !== null){
            return this.kilometersperminutesLazy;
        }
        return this.kilometersperminutesLazy = this.convertFromBase(SpeedUnits.Kilometersperminutes);
    }

    public get Centimetersperhour(): number {
        if(this.centimetersperhourLazy !== null){
            return this.centimetersperhourLazy;
        }
        return this.centimetersperhourLazy = this.convertFromBase(SpeedUnits.Centimetersperhour);
    }

    public get Kilometersperhour(): number {
        if(this.kilometersperhourLazy !== null){
            return this.kilometersperhourLazy;
        }
        return this.kilometersperhourLazy = this.convertFromBase(SpeedUnits.Kilometersperhour);
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

    public static FromNanometerspersecond(value: number): Speed {
        return new Speed(value, SpeedUnits.Nanometerspersecond);
    }

    public static FromMicrometerspersecond(value: number): Speed {
        return new Speed(value, SpeedUnits.Micrometerspersecond);
    }

    public static FromCentimeterspersecond(value: number): Speed {
        return new Speed(value, SpeedUnits.Centimeterspersecond);
    }

    public static FromDecimeterspersecond(value: number): Speed {
        return new Speed(value, SpeedUnits.Decimeterspersecond);
    }

    public static FromKilometerspersecond(value: number): Speed {
        return new Speed(value, SpeedUnits.Kilometerspersecond);
    }

    public static FromNanometersperminutes(value: number): Speed {
        return new Speed(value, SpeedUnits.Nanometersperminutes);
    }

    public static FromMicrometersperminutes(value: number): Speed {
        return new Speed(value, SpeedUnits.Micrometersperminutes);
    }

    public static FromCentimetersperminutes(value: number): Speed {
        return new Speed(value, SpeedUnits.Centimetersperminutes);
    }

    public static FromDecimetersperminutes(value: number): Speed {
        return new Speed(value, SpeedUnits.Decimetersperminutes);
    }

    public static FromKilometersperminutes(value: number): Speed {
        return new Speed(value, SpeedUnits.Kilometersperminutes);
    }

    public static FromCentimetersperhour(value: number): Speed {
        return new Speed(value, SpeedUnits.Centimetersperhour);
    }

    public static FromKilometersperhour(value: number): Speed {
        return new Speed(value, SpeedUnits.Kilometersperhour);
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
            case SpeedUnits.Nanometerspersecond:
                return (this.value) / 1e-9;
            case SpeedUnits.Micrometerspersecond:
                return (this.value) / 0.000001;
            case SpeedUnits.Centimeterspersecond:
                return (this.value) / 0.01;
            case SpeedUnits.Decimeterspersecond:
                return (this.value) / 0.1;
            case SpeedUnits.Kilometerspersecond:
                return (this.value) / 1000;
            case SpeedUnits.Nanometersperminutes:
                return (this.value*60) / 1e-9;
            case SpeedUnits.Micrometersperminutes:
                return (this.value*60) / 0.000001;
            case SpeedUnits.Centimetersperminutes:
                return (this.value*60) / 0.01;
            case SpeedUnits.Decimetersperminutes:
                return (this.value*60) / 0.1;
            case SpeedUnits.Kilometersperminutes:
                return (this.value*60) / 1000;
            case SpeedUnits.Centimetersperhour:
                return (this.value*3600) / 0.01;
            case SpeedUnits.Kilometersperhour:
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
            case SpeedUnits.Nanometerspersecond:
                return (value) * 1e-9;
            case SpeedUnits.Micrometerspersecond:
                return (value) * 0.000001;
            case SpeedUnits.Centimeterspersecond:
                return (value) * 0.01;
            case SpeedUnits.Decimeterspersecond:
                return (value) * 0.1;
            case SpeedUnits.Kilometerspersecond:
                return (value) * 1000;
            case SpeedUnits.Nanometersperminutes:
                return (value/60) * 1e-9;
            case SpeedUnits.Micrometersperminutes:
                return (value/60) * 0.000001;
            case SpeedUnits.Centimetersperminutes:
                return (value/60) * 0.01;
            case SpeedUnits.Decimetersperminutes:
                return (value/60) * 0.1;
            case SpeedUnits.Kilometersperminutes:
                return (value/60) * 1000;
            case SpeedUnits.Centimetersperhour:
                return (value/3600) * 0.01;
            case SpeedUnits.Kilometersperhour:
                return (value/3600) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
