export enum RotationalSpeedUnits {
    RadiansPerSecond,
    DegreesPerSecond,
    DegreesPerMinute,
    RevolutionsPerSecond,
    RevolutionsPerMinute,
    NanoradiansPerSecond,
    MicroradiansPerSecond,
    CentiradiansPerSecond,
    DeciradiansPerSecond,
    NanodegreesPerSecond,
    MicrodegreesPerSecond
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

    public get NanoradiansPerSecond(): number {
        if(this.nanoradianspersecondLazy !== null){
            return this.nanoradianspersecondLazy;
        }
        return this.nanoradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.NanoradiansPerSecond);
    }

    public get MicroradiansPerSecond(): number {
        if(this.microradianspersecondLazy !== null){
            return this.microradianspersecondLazy;
        }
        return this.microradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.MicroradiansPerSecond);
    }

    public get CentiradiansPerSecond(): number {
        if(this.centiradianspersecondLazy !== null){
            return this.centiradianspersecondLazy;
        }
        return this.centiradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.CentiradiansPerSecond);
    }

    public get DeciradiansPerSecond(): number {
        if(this.deciradianspersecondLazy !== null){
            return this.deciradianspersecondLazy;
        }
        return this.deciradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.DeciradiansPerSecond);
    }

    public get NanodegreesPerSecond(): number {
        if(this.nanodegreespersecondLazy !== null){
            return this.nanodegreespersecondLazy;
        }
        return this.nanodegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.NanodegreesPerSecond);
    }

    public get MicrodegreesPerSecond(): number {
        if(this.microdegreespersecondLazy !== null){
            return this.microdegreespersecondLazy;
        }
        return this.microdegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.MicrodegreesPerSecond);
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

    public static FromNanoradiansPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.NanoradiansPerSecond);
    }

    public static FromMicroradiansPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.MicroradiansPerSecond);
    }

    public static FromCentiradiansPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.CentiradiansPerSecond);
    }

    public static FromDeciradiansPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.DeciradiansPerSecond);
    }

    public static FromNanodegreesPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.NanodegreesPerSecond);
    }

    public static FromMicrodegreesPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.MicrodegreesPerSecond);
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
            case RotationalSpeedUnits.NanoradiansPerSecond:
                return (this.value) / 1e-9;
            case RotationalSpeedUnits.MicroradiansPerSecond:
                return (this.value) / 0.000001;
            case RotationalSpeedUnits.CentiradiansPerSecond:
                return (this.value) / 0.01;
            case RotationalSpeedUnits.DeciradiansPerSecond:
                return (this.value) / 0.1;
            case RotationalSpeedUnits.NanodegreesPerSecond:
                return ((180/Math.PI)*this.value) / 1e-9;
            case RotationalSpeedUnits.MicrodegreesPerSecond:
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
            case RotationalSpeedUnits.NanoradiansPerSecond:
                return (value) * 1e-9;
            case RotationalSpeedUnits.MicroradiansPerSecond:
                return (value) * 0.000001;
            case RotationalSpeedUnits.CentiradiansPerSecond:
                return (value) * 0.01;
            case RotationalSpeedUnits.DeciradiansPerSecond:
                return (value) * 0.1;
            case RotationalSpeedUnits.NanodegreesPerSecond:
                return ((Math.PI/180)*value) * 1e-9;
            case RotationalSpeedUnits.MicrodegreesPerSecond:
                return ((Math.PI/180)*value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: RotationalSpeedUnits = RotationalSpeedUnits.RadiansPerSecond): string {

        switch (toUnit) {
            
            case RotationalSpeedUnits.RadiansPerSecond:
                return this.RadiansPerSecond + ` rad/s`;
            case RotationalSpeedUnits.DegreesPerSecond:
                return this.DegreesPerSecond + ` °/s`;
            case RotationalSpeedUnits.DegreesPerMinute:
                return this.DegreesPerMinute + ` °/min`;
            case RotationalSpeedUnits.RevolutionsPerSecond:
                return this.RevolutionsPerSecond + ` r/s`;
            case RotationalSpeedUnits.RevolutionsPerMinute:
                return this.RevolutionsPerMinute + ` rpm`;
            case RotationalSpeedUnits.NanoradiansPerSecond:
                return this.NanoradiansPerSecond + ` rad/s`;
            case RotationalSpeedUnits.MicroradiansPerSecond:
                return this.MicroradiansPerSecond + ` rad/s`;
            case RotationalSpeedUnits.CentiradiansPerSecond:
                return this.CentiradiansPerSecond + ` rad/s`;
            case RotationalSpeedUnits.DeciradiansPerSecond:
                return this.DeciradiansPerSecond + ` rad/s`;
            case RotationalSpeedUnits.NanodegreesPerSecond:
                return this.NanodegreesPerSecond + ` °/s`;
            case RotationalSpeedUnits.MicrodegreesPerSecond:
                return this.MicrodegreesPerSecond + ` °/s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
