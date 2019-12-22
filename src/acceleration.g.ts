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

    public constructor(value: number, fromUnit: AccelerationUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get MetersPerSecondSquared(): number {
        return this.convertFromBase(AccelerationUnits.MetersPerSecondSquared);
    }

    public get InchesPerSecondSquared(): number {
        return this.convertFromBase(AccelerationUnits.InchesPerSecondSquared);
    }

    public get FeetPerSecondSquared(): number {
        return this.convertFromBase(AccelerationUnits.FeetPerSecondSquared);
    }

    public get KnotsPerSecond(): number {
        return this.convertFromBase(AccelerationUnits.KnotsPerSecond);
    }

    public get KnotsPerMinute(): number {
        return this.convertFromBase(AccelerationUnits.KnotsPerMinute);
    }

    public get KnotsPerHour(): number {
        return this.convertFromBase(AccelerationUnits.KnotsPerHour);
    }

    public get StandardGravity(): number {
        return this.convertFromBase(AccelerationUnits.StandardGravity);
    }

    public get Nanometerspersecondsquared(): number {
        return this.convertFromBase(AccelerationUnits.Nanometerspersecondsquared);
    }

    public get Micrometerspersecondsquared(): number {
        return this.convertFromBase(AccelerationUnits.Micrometerspersecondsquared);
    }

    public get Centimeterspersecondsquared(): number {
        return this.convertFromBase(AccelerationUnits.Centimeterspersecondsquared);
    }

    public get Decimeterspersecondsquared(): number {
        return this.convertFromBase(AccelerationUnits.Decimeterspersecondsquared);
    }

    public get Kilometerspersecondsquared(): number {
        return this.convertFromBase(AccelerationUnits.Kilometerspersecondsquared);
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
                    return this.value*0.0254;
                
                case AccelerationUnits.FeetPerSecondSquared:
                    return this.value*0.304800;
                
                case AccelerationUnits.KnotsPerSecond:
                    return this.value*0.5144444444444;
                
                case AccelerationUnits.KnotsPerMinute:
                    return this.value*0.5144444444444/60;
                
                case AccelerationUnits.KnotsPerHour:
                    return this.value*0.5144444444444/3600;
                
                case AccelerationUnits.StandardGravity:
                    return this.value*9.80665;
                
                case AccelerationUnits.Nanometerspersecondsquared:
                    return (this.value) * 1e-9;
                
                case AccelerationUnits.Micrometerspersecondsquared:
                    return (this.value) * 0.000001;
                
                case AccelerationUnits.Centimeterspersecondsquared:
                    return (this.value) * 0.01;
                
                case AccelerationUnits.Decimeterspersecondsquared:
                    return (this.value) * 0.1;
                
                case AccelerationUnits.Kilometerspersecondsquared:
                    return (this.value) * 1000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: AccelerationUnits): number {

                switch (fromUnit) {
                    
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
}
