export enum RotationalSpeedUnits {
    RadiansPerSecond,
    DegreesPerSecond,
    DegreesPerMinute,
    RevolutionsPerSecond,
    RevolutionsPerMinute,
    Nanoradianspersecond,
    Microradianspersecond,
    Centiradianspersecond,
    Deciradianspersecond,
    Nanodegreespersecond,
    Microdegreespersecond
}

export class RotationalSpeed {
    private value: number;
    private radianspersecondLazy: number | null = null;
    private degreespersecondLazy: number | null = null;
    private degreesperminuteLazy: number | null = null;
    private revolutionspersecondLazy: number | null = null;
    private revolutionsperminuteLazy: number | null = null;
    private nanoradianspersecondLazy: number | null = null;
    private microradianspersecondLazy: number | null = null;
    private centiradianspersecondLazy: number | null = null;
    private deciradianspersecondLazy: number | null = null;
    private nanodegreespersecondLazy: number | null = null;
    private microdegreespersecondLazy: number | null = null;

    public constructor(value: number, fromUnit: RotationalSpeedUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get RadiansPerSecond(): number {
        if(this.radianspersecondLazy !== null){
            return this.radianspersecondLazy;
        }
        return this.radianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.RadiansPerSecond);
    }

    public get DegreesPerSecond(): number {
        if(this.degreespersecondLazy !== null){
            return this.degreespersecondLazy;
        }
        return this.degreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.DegreesPerSecond);
    }

    public get DegreesPerMinute(): number {
        if(this.degreesperminuteLazy !== null){
            return this.degreesperminuteLazy;
        }
        return this.degreesperminuteLazy = this.convertFromBase(RotationalSpeedUnits.DegreesPerMinute);
    }

    public get RevolutionsPerSecond(): number {
        if(this.revolutionspersecondLazy !== null){
            return this.revolutionspersecondLazy;
        }
        return this.revolutionspersecondLazy = this.convertFromBase(RotationalSpeedUnits.RevolutionsPerSecond);
    }

    public get RevolutionsPerMinute(): number {
        if(this.revolutionsperminuteLazy !== null){
            return this.revolutionsperminuteLazy;
        }
        return this.revolutionsperminuteLazy = this.convertFromBase(RotationalSpeedUnits.RevolutionsPerMinute);
    }

    public get Nanoradianspersecond(): number {
        if(this.nanoradianspersecondLazy !== null){
            return this.nanoradianspersecondLazy;
        }
        return this.nanoradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.Nanoradianspersecond);
    }

    public get Microradianspersecond(): number {
        if(this.microradianspersecondLazy !== null){
            return this.microradianspersecondLazy;
        }
        return this.microradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.Microradianspersecond);
    }

    public get Centiradianspersecond(): number {
        if(this.centiradianspersecondLazy !== null){
            return this.centiradianspersecondLazy;
        }
        return this.centiradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.Centiradianspersecond);
    }

    public get Deciradianspersecond(): number {
        if(this.deciradianspersecondLazy !== null){
            return this.deciradianspersecondLazy;
        }
        return this.deciradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.Deciradianspersecond);
    }

    public get Nanodegreespersecond(): number {
        if(this.nanodegreespersecondLazy !== null){
            return this.nanodegreespersecondLazy;
        }
        return this.nanodegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.Nanodegreespersecond);
    }

    public get Microdegreespersecond(): number {
        if(this.microdegreespersecondLazy !== null){
            return this.microdegreespersecondLazy;
        }
        return this.microdegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.Microdegreespersecond);
    }

    public static FromRadiansPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.RadiansPerSecond);
    }

    public static FromDegreesPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.DegreesPerSecond);
    }

    public static FromDegreesPerMinute(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.DegreesPerMinute);
    }

    public static FromRevolutionsPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.RevolutionsPerSecond);
    }

    public static FromRevolutionsPerMinute(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.RevolutionsPerMinute);
    }

    public static FromNanoradianspersecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.Nanoradianspersecond);
    }

    public static FromMicroradianspersecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.Microradianspersecond);
    }

    public static FromCentiradianspersecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.Centiradianspersecond);
    }

    public static FromDeciradianspersecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.Deciradianspersecond);
    }

    public static FromNanodegreespersecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.Nanodegreespersecond);
    }

    public static FromMicrodegreespersecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.Microdegreespersecond);
    }

    private convertFromBase(toUnit: RotationalSpeedUnits): number {
        switch (toUnit) {
                
            case RotationalSpeedUnits.RadiansPerSecond:
                return this.value;
            case RotationalSpeedUnits.DegreesPerSecond:
                return (180/Math.PI)*this.value;
            case RotationalSpeedUnits.DegreesPerMinute:
                return (180*60/Math.PI)*this.value;
            case RotationalSpeedUnits.RevolutionsPerSecond:
                return this.value/6.2831853072;
            case RotationalSpeedUnits.RevolutionsPerMinute:
                return (this.value/6.2831853072)*60;
            case RotationalSpeedUnits.Nanoradianspersecond:
                return (this.value) / 1e-9;
            case RotationalSpeedUnits.Microradianspersecond:
                return (this.value) / 0.000001;
            case RotationalSpeedUnits.Centiradianspersecond:
                return (this.value) / 0.01;
            case RotationalSpeedUnits.Deciradianspersecond:
                return (this.value) / 0.1;
            case RotationalSpeedUnits.Nanodegreespersecond:
                return ((180/Math.PI)*this.value) / 1e-9;
            case RotationalSpeedUnits.Microdegreespersecond:
                return ((180/Math.PI)*this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RotationalSpeedUnits): number {
        switch (fromUnit) {
                
            case RotationalSpeedUnits.RadiansPerSecond:
                return value;
            case RotationalSpeedUnits.DegreesPerSecond:
                return (Math.PI/180)*value;
            case RotationalSpeedUnits.DegreesPerMinute:
                return (Math.PI/(180*60))*value;
            case RotationalSpeedUnits.RevolutionsPerSecond:
                return value*6.2831853072;
            case RotationalSpeedUnits.RevolutionsPerMinute:
                return (value*6.2831853072)/60;
            case RotationalSpeedUnits.Nanoradianspersecond:
                return (value) * 1e-9;
            case RotationalSpeedUnits.Microradianspersecond:
                return (value) * 0.000001;
            case RotationalSpeedUnits.Centiradianspersecond:
                return (value) * 0.01;
            case RotationalSpeedUnits.Deciradianspersecond:
                return (value) * 0.1;
            case RotationalSpeedUnits.Nanodegreespersecond:
                return ((Math.PI/180)*value) * 1e-9;
            case RotationalSpeedUnits.Microdegreespersecond:
                return ((Math.PI/180)*value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
}
