export enum RotationalSpeedUnits {
    RadiansPerSecond,
    DegreesPerSecond,
    DegreesPerMinute,
    RevolutionsPerSecond,
    RevolutionsPerMinute,
    NanoradianPerSecond,
    MicroradianPerSecond,
    CentiradianPerSecond,
    DeciradianPerSecond,
    NanodegreePerSecond,
    MicrodegreePerSecond
}

export class RotationalSpeed {
    private value: number;
    private radianspersecondLazy: number | null = null;
    private degreespersecondLazy: number | null = null;
    private degreesperminuteLazy: number | null = null;
    private revolutionspersecondLazy: number | null = null;
    private revolutionsperminuteLazy: number | null = null;
    private nanoradianpersecondLazy: number | null = null;
    private microradianpersecondLazy: number | null = null;
    private centiradianpersecondLazy: number | null = null;
    private deciradianpersecondLazy: number | null = null;
    private nanodegreepersecondLazy: number | null = null;
    private microdegreepersecondLazy: number | null = null;

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

    public get NanoradianPerSecond(): number {
        if(this.nanoradianpersecondLazy !== null){
            return this.nanoradianpersecondLazy;
        }
        return this.nanoradianpersecondLazy = this.convertFromBase(RotationalSpeedUnits.NanoradianPerSecond);
    }

    public get MicroradianPerSecond(): number {
        if(this.microradianpersecondLazy !== null){
            return this.microradianpersecondLazy;
        }
        return this.microradianpersecondLazy = this.convertFromBase(RotationalSpeedUnits.MicroradianPerSecond);
    }

    public get CentiradianPerSecond(): number {
        if(this.centiradianpersecondLazy !== null){
            return this.centiradianpersecondLazy;
        }
        return this.centiradianpersecondLazy = this.convertFromBase(RotationalSpeedUnits.CentiradianPerSecond);
    }

    public get DeciradianPerSecond(): number {
        if(this.deciradianpersecondLazy !== null){
            return this.deciradianpersecondLazy;
        }
        return this.deciradianpersecondLazy = this.convertFromBase(RotationalSpeedUnits.DeciradianPerSecond);
    }

    public get NanodegreePerSecond(): number {
        if(this.nanodegreepersecondLazy !== null){
            return this.nanodegreepersecondLazy;
        }
        return this.nanodegreepersecondLazy = this.convertFromBase(RotationalSpeedUnits.NanodegreePerSecond);
    }

    public get MicrodegreePerSecond(): number {
        if(this.microdegreepersecondLazy !== null){
            return this.microdegreepersecondLazy;
        }
        return this.microdegreepersecondLazy = this.convertFromBase(RotationalSpeedUnits.MicrodegreePerSecond);
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

    public static FromNanoradianPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.NanoradianPerSecond);
    }

    public static FromMicroradianPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.MicroradianPerSecond);
    }

    public static FromCentiradianPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.CentiradianPerSecond);
    }

    public static FromDeciradianPerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.DeciradianPerSecond);
    }

    public static FromNanodegreePerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.NanodegreePerSecond);
    }

    public static FromMicrodegreePerSecond(value: number): RotationalSpeed {
        return new RotationalSpeed(value, RotationalSpeedUnits.MicrodegreePerSecond);
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
            case RotationalSpeedUnits.NanoradianPerSecond:
                return (this.value) / 1e-9;
            case RotationalSpeedUnits.MicroradianPerSecond:
                return (this.value) / 0.000001;
            case RotationalSpeedUnits.CentiradianPerSecond:
                return (this.value) / 0.01;
            case RotationalSpeedUnits.DeciradianPerSecond:
                return (this.value) / 0.1;
            case RotationalSpeedUnits.NanodegreePerSecond:
                return ((180/Math.PI)*this.value) / 1e-9;
            case RotationalSpeedUnits.MicrodegreePerSecond:
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
            case RotationalSpeedUnits.NanoradianPerSecond:
                return (value) * 1e-9;
            case RotationalSpeedUnits.MicroradianPerSecond:
                return (value) * 0.000001;
            case RotationalSpeedUnits.CentiradianPerSecond:
                return (value) * 0.01;
            case RotationalSpeedUnits.DeciradianPerSecond:
                return (value) * 0.1;
            case RotationalSpeedUnits.NanodegreePerSecond:
                return ((Math.PI/180)*value) * 1e-9;
            case RotationalSpeedUnits.MicrodegreePerSecond:
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
            case RotationalSpeedUnits.NanoradianPerSecond:
                return this.NanoradianPerSecond + ` rad/s`;
            case RotationalSpeedUnits.MicroradianPerSecond:
                return this.MicroradianPerSecond + ` rad/s`;
            case RotationalSpeedUnits.CentiradianPerSecond:
                return this.CentiradianPerSecond + ` rad/s`;
            case RotationalSpeedUnits.DeciradianPerSecond:
                return this.DeciradianPerSecond + ` rad/s`;
            case RotationalSpeedUnits.NanodegreePerSecond:
                return this.NanodegreePerSecond + ` °/s`;
            case RotationalSpeedUnits.MicrodegreePerSecond:
                return this.MicrodegreePerSecond + ` °/s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
