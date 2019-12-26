export enum AccelerationUnits {
    MetersPerSecondSquared,
    InchesPerSecondSquared,
    FeetPerSecondSquared,
    KnotsPerSecond,
    KnotsPerMinute,
    KnotsPerHour,
    StandardGravity,
    NanometersPerSecondSquared,
    MicrometersPerSecondSquared,
    CentimetersPerSecondSquared,
    DecimetersPerSecondSquared,
    KilometersPerSecondSquared
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

    public get NanometersPerSecondSquared(): number {
        if(this.nanometerspersecondsquaredLazy !== null){
            return this.nanometerspersecondsquaredLazy;
        }
        return this.nanometerspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.NanometersPerSecondSquared);
    }

    public get MicrometersPerSecondSquared(): number {
        if(this.micrometerspersecondsquaredLazy !== null){
            return this.micrometerspersecondsquaredLazy;
        }
        return this.micrometerspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.MicrometersPerSecondSquared);
    }

    public get CentimetersPerSecondSquared(): number {
        if(this.centimeterspersecondsquaredLazy !== null){
            return this.centimeterspersecondsquaredLazy;
        }
        return this.centimeterspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.CentimetersPerSecondSquared);
    }

    public get DecimetersPerSecondSquared(): number {
        if(this.decimeterspersecondsquaredLazy !== null){
            return this.decimeterspersecondsquaredLazy;
        }
        return this.decimeterspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.DecimetersPerSecondSquared);
    }

    public get KilometersPerSecondSquared(): number {
        if(this.kilometerspersecondsquaredLazy !== null){
            return this.kilometerspersecondsquaredLazy;
        }
        return this.kilometerspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.KilometersPerSecondSquared);
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

    public static FromNanometersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.NanometersPerSecondSquared);
    }

    public static FromMicrometersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.MicrometersPerSecondSquared);
    }

    public static FromCentimetersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.CentimetersPerSecondSquared);
    }

    public static FromDecimetersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.DecimetersPerSecondSquared);
    }

    public static FromKilometersPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.KilometersPerSecondSquared);
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
            case AccelerationUnits.NanometersPerSecondSquared:
                return (this.value) / 1e-9;
            case AccelerationUnits.MicrometersPerSecondSquared:
                return (this.value) / 0.000001;
            case AccelerationUnits.CentimetersPerSecondSquared:
                return (this.value) / 0.01;
            case AccelerationUnits.DecimetersPerSecondSquared:
                return (this.value) / 0.1;
            case AccelerationUnits.KilometersPerSecondSquared:
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
            case AccelerationUnits.NanometersPerSecondSquared:
                return (value) * 1e-9;
            case AccelerationUnits.MicrometersPerSecondSquared:
                return (value) * 0.000001;
            case AccelerationUnits.CentimetersPerSecondSquared:
                return (value) * 0.01;
            case AccelerationUnits.DecimetersPerSecondSquared:
                return (value) * 0.1;
            case AccelerationUnits.KilometersPerSecondSquared:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: AccelerationUnits = AccelerationUnits.MetersPerSecondSquared): string {

        switch (toUnit) {
            
            case AccelerationUnits.MetersPerSecondSquared:
                return this.MetersPerSecondSquared + ` m/s²`;
            case AccelerationUnits.InchesPerSecondSquared:
                return this.InchesPerSecondSquared + ` in/s²`;
            case AccelerationUnits.FeetPerSecondSquared:
                return this.FeetPerSecondSquared + ` ft/s²`;
            case AccelerationUnits.KnotsPerSecond:
                return this.KnotsPerSecond + ` kn/s`;
            case AccelerationUnits.KnotsPerMinute:
                return this.KnotsPerMinute + ` kn/min`;
            case AccelerationUnits.KnotsPerHour:
                return this.KnotsPerHour + ` kn/h`;
            case AccelerationUnits.StandardGravity:
                return this.StandardGravity + ` g`;
            case AccelerationUnits.NanometersPerSecondSquared:
                return this.NanometersPerSecondSquared + ` m/s²`;
            case AccelerationUnits.MicrometersPerSecondSquared:
                return this.MicrometersPerSecondSquared + ` m/s²`;
            case AccelerationUnits.CentimetersPerSecondSquared:
                return this.CentimetersPerSecondSquared + ` m/s²`;
            case AccelerationUnits.DecimetersPerSecondSquared:
                return this.DecimetersPerSecondSquared + ` m/s²`;
            case AccelerationUnits.KilometersPerSecondSquared:
                return this.KilometersPerSecondSquared + ` m/s²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
