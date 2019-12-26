export enum DurationUnits {
    Years365,
    Months30,
    Weeks,
    Days,
    Hours,
    Minutes,
    Seconds,
    Nanosecond,
    Microsecond
}

export class Duration {
    private value: number;
    private years365Lazy: number | null = null;
    private months30Lazy: number | null = null;
    private weeksLazy: number | null = null;
    private daysLazy: number | null = null;
    private hoursLazy: number | null = null;
    private minutesLazy: number | null = null;
    private secondsLazy: number | null = null;
    private nanosecondLazy: number | null = null;
    private microsecondLazy: number | null = null;

    public constructor(value: number, fromUnit: DurationUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Years365(): number {
        if(this.years365Lazy !== null){
            return this.years365Lazy;
        }
        return this.years365Lazy = this.convertFromBase(DurationUnits.Years365);
    }

    public get Months30(): number {
        if(this.months30Lazy !== null){
            return this.months30Lazy;
        }
        return this.months30Lazy = this.convertFromBase(DurationUnits.Months30);
    }

    public get Weeks(): number {
        if(this.weeksLazy !== null){
            return this.weeksLazy;
        }
        return this.weeksLazy = this.convertFromBase(DurationUnits.Weeks);
    }

    public get Days(): number {
        if(this.daysLazy !== null){
            return this.daysLazy;
        }
        return this.daysLazy = this.convertFromBase(DurationUnits.Days);
    }

    public get Hours(): number {
        if(this.hoursLazy !== null){
            return this.hoursLazy;
        }
        return this.hoursLazy = this.convertFromBase(DurationUnits.Hours);
    }

    public get Minutes(): number {
        if(this.minutesLazy !== null){
            return this.minutesLazy;
        }
        return this.minutesLazy = this.convertFromBase(DurationUnits.Minutes);
    }

    public get Seconds(): number {
        if(this.secondsLazy !== null){
            return this.secondsLazy;
        }
        return this.secondsLazy = this.convertFromBase(DurationUnits.Seconds);
    }

    public get Nanosecond(): number {
        if(this.nanosecondLazy !== null){
            return this.nanosecondLazy;
        }
        return this.nanosecondLazy = this.convertFromBase(DurationUnits.Nanosecond);
    }

    public get Microsecond(): number {
        if(this.microsecondLazy !== null){
            return this.microsecondLazy;
        }
        return this.microsecondLazy = this.convertFromBase(DurationUnits.Microsecond);
    }

    public static FromYears365(value: number): Duration {
        return new Duration(value, DurationUnits.Years365);
    }

    public static FromMonths30(value: number): Duration {
        return new Duration(value, DurationUnits.Months30);
    }

    public static FromWeeks(value: number): Duration {
        return new Duration(value, DurationUnits.Weeks);
    }

    public static FromDays(value: number): Duration {
        return new Duration(value, DurationUnits.Days);
    }

    public static FromHours(value: number): Duration {
        return new Duration(value, DurationUnits.Hours);
    }

    public static FromMinutes(value: number): Duration {
        return new Duration(value, DurationUnits.Minutes);
    }

    public static FromSeconds(value: number): Duration {
        return new Duration(value, DurationUnits.Seconds);
    }

    public static FromNanosecond(value: number): Duration {
        return new Duration(value, DurationUnits.Nanosecond);
    }

    public static FromMicrosecond(value: number): Duration {
        return new Duration(value, DurationUnits.Microsecond);
    }

    private convertFromBase(toUnit: DurationUnits): number {
        switch (toUnit) {
                
            case DurationUnits.Years365:
                return this.value/(365*24*3600);
            case DurationUnits.Months30:
                return this.value/(30*24*3600);
            case DurationUnits.Weeks:
                return this.value/(7*24*3600);
            case DurationUnits.Days:
                return this.value/(24*3600);
            case DurationUnits.Hours:
                return this.value/3600;
            case DurationUnits.Minutes:
                return this.value/60;
            case DurationUnits.Seconds:
                return this.value;
            case DurationUnits.Nanosecond:
                return (this.value) / 1e-9;
            case DurationUnits.Microsecond:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: DurationUnits): number {
        switch (fromUnit) {
                
            case DurationUnits.Years365:
                return value*365*24*3600;
            case DurationUnits.Months30:
                return value*30*24*3600;
            case DurationUnits.Weeks:
                return value*7*24*3600;
            case DurationUnits.Days:
                return value*24*3600;
            case DurationUnits.Hours:
                return value*3600;
            case DurationUnits.Minutes:
                return value*60;
            case DurationUnits.Seconds:
                return value;
            case DurationUnits.Nanosecond:
                return (value) * 1e-9;
            case DurationUnits.Microsecond:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: DurationUnits = DurationUnits.Seconds): string {

        switch (toUnit) {
            
            case DurationUnits.Years365:
                return this.Years365 + ` yr`;
            case DurationUnits.Months30:
                return this.Months30 + ` mo`;
            case DurationUnits.Weeks:
                return this.Weeks + ` wk`;
            case DurationUnits.Days:
                return this.Days + ` d`;
            case DurationUnits.Hours:
                return this.Hours + ` h`;
            case DurationUnits.Minutes:
                return this.Minutes + ` m`;
            case DurationUnits.Seconds:
                return this.Seconds + ` s`;
            case DurationUnits.Nanosecond:
                return this.Nanosecond + ` s`;
            case DurationUnits.Microsecond:
                return this.Microsecond + ` s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
