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

    public constructor(value: number, fromUnit: SpeedUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get MetersPerSecond(): number {
        return this.convertFromBase(SpeedUnits.MetersPerSecond);
    }

    public get MetersPerMinutes(): number {
        return this.convertFromBase(SpeedUnits.MetersPerMinutes);
    }

    public get MetersPerHour(): number {
        return this.convertFromBase(SpeedUnits.MetersPerHour);
    }

    public get FeetPerSecond(): number {
        return this.convertFromBase(SpeedUnits.FeetPerSecond);
    }

    public get FeetPerMinute(): number {
        return this.convertFromBase(SpeedUnits.FeetPerMinute);
    }

    public get FeetPerHour(): number {
        return this.convertFromBase(SpeedUnits.FeetPerHour);
    }

    public get UsSurveyFeetPerSecond(): number {
        return this.convertFromBase(SpeedUnits.UsSurveyFeetPerSecond);
    }

    public get UsSurveyFeetPerMinute(): number {
        return this.convertFromBase(SpeedUnits.UsSurveyFeetPerMinute);
    }

    public get UsSurveyFeetPerHour(): number {
        return this.convertFromBase(SpeedUnits.UsSurveyFeetPerHour);
    }

    public get InchesPerSecond(): number {
        return this.convertFromBase(SpeedUnits.InchesPerSecond);
    }

    public get InchesPerMinute(): number {
        return this.convertFromBase(SpeedUnits.InchesPerMinute);
    }

    public get InchesPerHour(): number {
        return this.convertFromBase(SpeedUnits.InchesPerHour);
    }

    public get YardsPerSecond(): number {
        return this.convertFromBase(SpeedUnits.YardsPerSecond);
    }

    public get YardsPerMinute(): number {
        return this.convertFromBase(SpeedUnits.YardsPerMinute);
    }

    public get YardsPerHour(): number {
        return this.convertFromBase(SpeedUnits.YardsPerHour);
    }

    public get Knots(): number {
        return this.convertFromBase(SpeedUnits.Knots);
    }

    public get MilesPerHour(): number {
        return this.convertFromBase(SpeedUnits.MilesPerHour);
    }

    public get Nanometerspersecond(): number {
        return this.convertFromBase(SpeedUnits.Nanometerspersecond);
    }

    public get Micrometerspersecond(): number {
        return this.convertFromBase(SpeedUnits.Micrometerspersecond);
    }

    public get Centimeterspersecond(): number {
        return this.convertFromBase(SpeedUnits.Centimeterspersecond);
    }

    public get Decimeterspersecond(): number {
        return this.convertFromBase(SpeedUnits.Decimeterspersecond);
    }

    public get Kilometerspersecond(): number {
        return this.convertFromBase(SpeedUnits.Kilometerspersecond);
    }

    public get Nanometersperminutes(): number {
        return this.convertFromBase(SpeedUnits.Nanometersperminutes);
    }

    public get Micrometersperminutes(): number {
        return this.convertFromBase(SpeedUnits.Micrometersperminutes);
    }

    public get Centimetersperminutes(): number {
        return this.convertFromBase(SpeedUnits.Centimetersperminutes);
    }

    public get Decimetersperminutes(): number {
        return this.convertFromBase(SpeedUnits.Decimetersperminutes);
    }

    public get Kilometersperminutes(): number {
        return this.convertFromBase(SpeedUnits.Kilometersperminutes);
    }

    public get Centimetersperhour(): number {
        return this.convertFromBase(SpeedUnits.Centimetersperhour);
    }

    public get Kilometersperhour(): number {
        return this.convertFromBase(SpeedUnits.Kilometersperhour);
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
                    return this.value/60;
                
                case SpeedUnits.MetersPerHour:
                    return this.value/3600;
                
                case SpeedUnits.FeetPerSecond:
                    return this.value*0.3048;
                
                case SpeedUnits.FeetPerMinute:
                    return this.value*0.3048/60;
                
                case SpeedUnits.FeetPerHour:
                    return this.value*0.3048/3600;
                
                case SpeedUnits.UsSurveyFeetPerSecond:
                    return this.value*1200/3937;
                
                case SpeedUnits.UsSurveyFeetPerMinute:
                    return (this.value*1200/3937)/60;
                
                case SpeedUnits.UsSurveyFeetPerHour:
                    return (this.value*1200/3937)/3600;
                
                case SpeedUnits.InchesPerSecond:
                    return this.value*2.54e-2;
                
                case SpeedUnits.InchesPerMinute:
                    return (this.value/60)*2.54e-2;
                
                case SpeedUnits.InchesPerHour:
                    return (this.value/3600)*2.54e-2;
                
                case SpeedUnits.YardsPerSecond:
                    return this.value*0.9144;
                
                case SpeedUnits.YardsPerMinute:
                    return this.value*0.9144/60;
                
                case SpeedUnits.YardsPerHour:
                    return this.value*0.9144/3600;
                
                case SpeedUnits.Knots:
                    return this.value*0.514444;
                
                case SpeedUnits.MilesPerHour:
                    return this.value*0.44704;
                
                case SpeedUnits.Nanometerspersecond:
                    return (this.value) * 1e-9;
                
                case SpeedUnits.Micrometerspersecond:
                    return (this.value) * 0.000001;
                
                case SpeedUnits.Centimeterspersecond:
                    return (this.value) * 0.01;
                
                case SpeedUnits.Decimeterspersecond:
                    return (this.value) * 0.1;
                
                case SpeedUnits.Kilometerspersecond:
                    return (this.value) * 1000;
                
                case SpeedUnits.Nanometersperminutes:
                    return (this.value*60) * 1e-9;
                
                case SpeedUnits.Micrometersperminutes:
                    return (this.value*60) * 0.000001;
                
                case SpeedUnits.Centimetersperminutes:
                    return (this.value*60) * 0.01;
                
                case SpeedUnits.Decimetersperminutes:
                    return (this.value*60) * 0.1;
                
                case SpeedUnits.Kilometersperminutes:
                    return (this.value*60) * 1000;
                
                case SpeedUnits.Centimetersperhour:
                    return (this.value*3600) * 0.01;
                
                case SpeedUnits.Kilometersperhour:
                    return (this.value*3600) * 1000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: SpeedUnits): number {

                switch (fromUnit) {
                    
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
                    return (this.value/60) / 1e-9;
                
                case SpeedUnits.Micrometersperminutes:
                    return (this.value/60) / 0.000001;
                
                case SpeedUnits.Centimetersperminutes:
                    return (this.value/60) / 0.01;
                
                case SpeedUnits.Decimetersperminutes:
                    return (this.value/60) / 0.1;
                
                case SpeedUnits.Kilometersperminutes:
                    return (this.value/60) / 1000;
                
                case SpeedUnits.Centimetersperhour:
                    return (this.value/3600) / 0.01;
                
                case SpeedUnits.Kilometersperhour:
                    return (this.value/3600) / 1000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
