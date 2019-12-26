export enum AccelerationUnits {
    MetersPerSecondSquared,
    InchesPerSecondSquared,
    FeetPerSecondSquared,
    KnotsPerSecond,
    KnotsPerMinute,
    KnotsPerHour,
    StandardGravity,
    Nanometerspersecondsquared,
    Micrometerspersecondsquared,
    Centimeterspersecondsquared,
    Decimeterspersecondsquared,
    Kilometerspersecondsquared
}

export class Acceleration {
    private value: number;
    private meterspersecondsquaredLazy: number | null = null;
    private inchespersecondsquaredLazy: number | null = null;
    private feetpersecondsquaredLazy: number | null = null;
    private knotspersecondLazy: number | null = null;
    private knotsperminuteLazy: number | null = null;
    private knotsperhourLazy: number | null = null;
    private standardgravityLazy: number | null = null;
    private nanometerspersecondsquaredLazy: number | null = null;
    private micrometerspersecondsquaredLazy: number | null = null;
    private centimeterspersecondsquaredLazy: number | null = null;
    private decimeterspersecondsquaredLazy: number | null = null;
    private kilometerspersecondsquaredLazy: number | null = null;

    public constructor(value: number, fromUnit: AccelerationUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get MetersPerSecondSquared(): number {
        if(this.meterspersecondsquaredLazy !== null){
            return this.meterspersecondsquaredLazy;
        }
        return this.meterspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.MetersPerSecondSquared);
    }

    public get InchesPerSecondSquared(): number {
        if(this.inchespersecondsquaredLazy !== null){
            return this.inchespersecondsquaredLazy;
        }
        return this.inchespersecondsquaredLazy = this.convertFromBase(AccelerationUnits.InchesPerSecondSquared);
    }

    public get FeetPerSecondSquared(): number {
        if(this.feetpersecondsquaredLazy !== null){
            return this.feetpersecondsquaredLazy;
        }
        return this.feetpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.FeetPerSecondSquared);
    }

    public get KnotsPerSecond(): number {
        if(this.knotspersecondLazy !== null){
            return this.knotspersecondLazy;
        }
        return this.knotspersecondLazy = this.convertFromBase(AccelerationUnits.KnotsPerSecond);
    }

    public get KnotsPerMinute(): number {
        if(this.knotsperminuteLazy !== null){
            return this.knotsperminuteLazy;
        }
        return this.knotsperminuteLazy = this.convertFromBase(AccelerationUnits.KnotsPerMinute);
    }

    public get KnotsPerHour(): number {
        if(this.knotsperhourLazy !== null){
            return this.knotsperhourLazy;
        }
        return this.knotsperhourLazy = this.convertFromBase(AccelerationUnits.KnotsPerHour);
    }

    public get StandardGravity(): number {
        if(this.standardgravityLazy !== null){
            return this.standardgravityLazy;
        }
        return this.standardgravityLazy = this.convertFromBase(AccelerationUnits.StandardGravity);
    }

    public get Nanometerspersecondsquared(): number {
        if(this.nanometerspersecondsquaredLazy !== null){
            return this.nanometerspersecondsquaredLazy;
        }
        return this.nanometerspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.Nanometerspersecondsquared);
    }

    public get Micrometerspersecondsquared(): number {
        if(this.micrometerspersecondsquaredLazy !== null){
            return this.micrometerspersecondsquaredLazy;
        }
        return this.micrometerspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.Micrometerspersecondsquared);
    }

    public get Centimeterspersecondsquared(): number {
        if(this.centimeterspersecondsquaredLazy !== null){
            return this.centimeterspersecondsquaredLazy;
        }
        return this.centimeterspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.Centimeterspersecondsquared);
    }

    public get Decimeterspersecondsquared(): number {
        if(this.decimeterspersecondsquaredLazy !== null){
            return this.decimeterspersecondsquaredLazy;
        }
        return this.decimeterspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.Decimeterspersecondsquared);
    }

    public get Kilometerspersecondsquared(): number {
        if(this.kilometerspersecondsquaredLazy !== null){
            return this.kilometerspersecondsquaredLazy;
        }
        return this.kilometerspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.Kilometerspersecondsquared);
    }

    public static FromMetersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.MetersPerSecondSquared);
    }

    public static FromInchesPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.InchesPerSecondSquared);
    }

    public static FromFeetPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.FeetPerSecondSquared);
    }

    public static FromKnotsPerSecond(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.KnotsPerSecond);
    }

    public static FromKnotsPerMinute(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.KnotsPerMinute);
    }

    public static FromKnotsPerHour(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.KnotsPerHour);
    }

    public static FromStandardGravity(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.StandardGravity);
    }

    public static FromNanometerspersecondsquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.Nanometerspersecondsquared);
    }

    public static FromMicrometerspersecondsquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.Micrometerspersecondsquared);
    }

    public static FromCentimeterspersecondsquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.Centimeterspersecondsquared);
    }

    public static FromDecimeterspersecondsquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.Decimeterspersecondsquared);
    }

    public static FromKilometerspersecondsquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.Kilometerspersecondsquared);
    }

    private convertFromBase(toUnit: AccelerationUnits): number {
        switch (toUnit) {
                
            case AccelerationUnits.MetersPerSecondSquared:
                return this.value;
            case AccelerationUnits.InchesPerSecondSquared:
                return this.value/0.0254;
            case AccelerationUnits.FeetPerSecondSquared:
                return this.value/0.304800;
            case AccelerationUnits.KnotsPerSecond:
                return this.value/0.5144444444444;
            case AccelerationUnits.KnotsPerMinute:
                return this.value/0.5144444444444*60;
            case AccelerationUnits.KnotsPerHour:
                return this.value/0.5144444444444*3600;
            case AccelerationUnits.StandardGravity:
                return this.value/9.80665;
            case AccelerationUnits.Nanometerspersecondsquared:
                return (this.value) / 1e-9;
            case AccelerationUnits.Micrometerspersecondsquared:
                return (this.value) / 0.000001;
            case AccelerationUnits.Centimeterspersecondsquared:
                return (this.value) / 0.01;
            case AccelerationUnits.Decimeterspersecondsquared:
                return (this.value) / 0.1;
            case AccelerationUnits.Kilometerspersecondsquared:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: AccelerationUnits): number {
        switch (fromUnit) {
                
            case AccelerationUnits.MetersPerSecondSquared:
                return value;
            case AccelerationUnits.InchesPerSecondSquared:
                return value*0.0254;
            case AccelerationUnits.FeetPerSecondSquared:
                return value*0.304800;
            case AccelerationUnits.KnotsPerSecond:
                return value*0.5144444444444;
            case AccelerationUnits.KnotsPerMinute:
                return value*0.5144444444444/60;
            case AccelerationUnits.KnotsPerHour:
                return value*0.5144444444444/3600;
            case AccelerationUnits.StandardGravity:
                return value*9.80665;
            case AccelerationUnits.Nanometerspersecondsquared:
                return (value) * 1e-9;
            case AccelerationUnits.Micrometerspersecondsquared:
                return (value) * 0.000001;
            case AccelerationUnits.Centimeterspersecondsquared:
                return (value) * 0.01;
            case AccelerationUnits.Decimeterspersecondsquared:
                return (value) * 0.1;
            case AccelerationUnits.Kilometerspersecondsquared:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
