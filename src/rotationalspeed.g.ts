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

    public constructor(value: number, fromUnit: RotationalSpeedUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get RadiansPerSecond(): number {
        return this.convertFromBase(RotationalSpeedUnits.RadiansPerSecond);
    }

    public get DegreesPerSecond(): number {
        return this.convertFromBase(RotationalSpeedUnits.DegreesPerSecond);
    }

    public get DegreesPerMinute(): number {
        return this.convertFromBase(RotationalSpeedUnits.DegreesPerMinute);
    }

    public get RevolutionsPerSecond(): number {
        return this.convertFromBase(RotationalSpeedUnits.RevolutionsPerSecond);
    }

    public get RevolutionsPerMinute(): number {
        return this.convertFromBase(RotationalSpeedUnits.RevolutionsPerMinute);
    }

    public get Nanoradianspersecond(): number {
        return this.convertFromBase(RotationalSpeedUnits.Nanoradianspersecond);
    }

    public get Microradianspersecond(): number {
        return this.convertFromBase(RotationalSpeedUnits.Microradianspersecond);
    }

    public get Centiradianspersecond(): number {
        return this.convertFromBase(RotationalSpeedUnits.Centiradianspersecond);
    }

    public get Deciradianspersecond(): number {
        return this.convertFromBase(RotationalSpeedUnits.Deciradianspersecond);
    }

    public get Nanodegreespersecond(): number {
        return this.convertFromBase(RotationalSpeedUnits.Nanodegreespersecond);
    }

    public get Microdegreespersecond(): number {
        return this.convertFromBase(RotationalSpeedUnits.Microdegreespersecond);
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
                    return (Math.PI/180)*this.value;
                
                case RotationalSpeedUnits.DegreesPerMinute:
                    return (Math.PI/(180*60))*this.value;
                
                case RotationalSpeedUnits.RevolutionsPerSecond:
                    return this.value*6.2831853072;
                
                case RotationalSpeedUnits.RevolutionsPerMinute:
                    return (this.value*6.2831853072)/60;
                
                case RotationalSpeedUnits.Nanoradianspersecond:
                    return (this.value) * 1e-9;
                
                case RotationalSpeedUnits.Microradianspersecond:
                    return (this.value) * 0.000001;
                
                case RotationalSpeedUnits.Centiradianspersecond:
                    return (this.value) * 0.01;
                
                case RotationalSpeedUnits.Deciradianspersecond:
                    return (this.value) * 0.1;
                
                case RotationalSpeedUnits.Nanodegreespersecond:
                    return ((180/Math.PI)*this.value) * 1e-9;
                
                case RotationalSpeedUnits.Microdegreespersecond:
                    return ((180/Math.PI)*this.value) * 0.000001;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: RotationalSpeedUnits): number {

                switch (fromUnit) {
                    
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
                    return ((Math.PI/180)*this.value) / 1e-9;
                
                case RotationalSpeedUnits.Microdegreespersecond:
                    return ((Math.PI/180)*this.value) / 0.000001;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
