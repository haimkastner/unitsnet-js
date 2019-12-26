export enum AccelerationUnits {
    MetersPerSecondSquared,
    InchesPerSecondSquared,
    FeetPerSecondSquared,
    KnotsPerSecond,
    KnotsPerMinute,
    KnotsPerHour,
    StandardGravity,
    NanometerPerSecondSquared,
    MicrometerPerSecondSquared,
    CentimeterPerSecondSquared,
    DecimeterPerSecondSquared,
    KilometerPerSecondSquared
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
    private nanometerpersecondsquaredLazy: number | null = null;
    private micrometerpersecondsquaredLazy: number | null = null;
    private centimeterpersecondsquaredLazy: number | null = null;
    private decimeterpersecondsquaredLazy: number | null = null;
    private kilometerpersecondsquaredLazy: number | null = null;

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

    public get NanometerPerSecondSquared(): number {
        if(this.nanometerpersecondsquaredLazy !== null){
            return this.nanometerpersecondsquaredLazy;
        }
        return this.nanometerpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.NanometerPerSecondSquared);
    }

    public get MicrometerPerSecondSquared(): number {
        if(this.micrometerpersecondsquaredLazy !== null){
            return this.micrometerpersecondsquaredLazy;
        }
        return this.micrometerpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.MicrometerPerSecondSquared);
    }

    public get CentimeterPerSecondSquared(): number {
        if(this.centimeterpersecondsquaredLazy !== null){
            return this.centimeterpersecondsquaredLazy;
        }
        return this.centimeterpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.CentimeterPerSecondSquared);
    }

    public get DecimeterPerSecondSquared(): number {
        if(this.decimeterpersecondsquaredLazy !== null){
            return this.decimeterpersecondsquaredLazy;
        }
        return this.decimeterpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.DecimeterPerSecondSquared);
    }

    public get KilometerPerSecondSquared(): number {
        if(this.kilometerpersecondsquaredLazy !== null){
            return this.kilometerpersecondsquaredLazy;
        }
        return this.kilometerpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.KilometerPerSecondSquared);
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

    public static FromNanometerPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.NanometerPerSecondSquared);
    }

    public static FromMicrometerPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.MicrometerPerSecondSquared);
    }

    public static FromCentimeterPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.CentimeterPerSecondSquared);
    }

    public static FromDecimeterPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.DecimeterPerSecondSquared);
    }

    public static FromKilometerPerSecondSquared(value: number): Acceleration {
        return new Acceleration(value, AccelerationUnits.KilometerPerSecondSquared);
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
            case AccelerationUnits.NanometerPerSecondSquared:
                return (this.value) / 1e-9;
            case AccelerationUnits.MicrometerPerSecondSquared:
                return (this.value) / 0.000001;
            case AccelerationUnits.CentimeterPerSecondSquared:
                return (this.value) / 0.01;
            case AccelerationUnits.DecimeterPerSecondSquared:
                return (this.value) / 0.1;
            case AccelerationUnits.KilometerPerSecondSquared:
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
            case AccelerationUnits.NanometerPerSecondSquared:
                return (value) * 1e-9;
            case AccelerationUnits.MicrometerPerSecondSquared:
                return (value) * 0.000001;
            case AccelerationUnits.CentimeterPerSecondSquared:
                return (value) * 0.01;
            case AccelerationUnits.DecimeterPerSecondSquared:
                return (value) * 0.1;
            case AccelerationUnits.KilometerPerSecondSquared:
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
            case AccelerationUnits.NanometerPerSecondSquared:
                return this.NanometerPerSecondSquared + ` m/s²`;
            case AccelerationUnits.MicrometerPerSecondSquared:
                return this.MicrometerPerSecondSquared + ` m/s²`;
            case AccelerationUnits.CentimeterPerSecondSquared:
                return this.CentimeterPerSecondSquared + ` m/s²`;
            case AccelerationUnits.DecimeterPerSecondSquared:
                return this.DecimeterPerSecondSquared + ` m/s²`;
            case AccelerationUnits.KilometerPerSecondSquared:
                return this.KilometerPerSecondSquared + ` m/s²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
