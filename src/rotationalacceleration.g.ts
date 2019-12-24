export enum RotationalAccelerationUnits {
    RadiansPerSecondSquared,
    DegreesPerSecondSquared,
    RevolutionsPerMinutePerSecond,
    RevolutionsPerSecondSquared
}

export class RotationalAcceleration {
    private value: number;

    public constructor(value: number, fromUnit: RotationalAccelerationUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get RadiansPerSecondSquared(): number {
        return this.convertFromBase(RotationalAccelerationUnits.RadiansPerSecondSquared);
    }

    public get DegreesPerSecondSquared(): number {
        return this.convertFromBase(RotationalAccelerationUnits.DegreesPerSecondSquared);
    }

    public get RevolutionsPerMinutePerSecond(): number {
        return this.convertFromBase(RotationalAccelerationUnits.RevolutionsPerMinutePerSecond);
    }

    public get RevolutionsPerSecondSquared(): number {
        return this.convertFromBase(RotationalAccelerationUnits.RevolutionsPerSecondSquared);
    }

    public static FromRadiansPerSecondSquared(value: number): RotationalAcceleration {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RadiansPerSecondSquared);
    }

    public static FromDegreesPerSecondSquared(value: number): RotationalAcceleration {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.DegreesPerSecondSquared);
    }

    public static FromRevolutionsPerMinutePerSecond(value: number): RotationalAcceleration {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RevolutionsPerMinutePerSecond);
    }

    public static FromRevolutionsPerSecondSquared(value: number): RotationalAcceleration {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RevolutionsPerSecondSquared);
    }

    private convertFromBase(toUnit: RotationalAccelerationUnits): number {

            switch (toUnit) {
                
                case RotationalAccelerationUnits.RadiansPerSecondSquared:
                    return this.value;
                
                case RotationalAccelerationUnits.DegreesPerSecondSquared:
                    return (180/Math.PI)*this.value;
                
                case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:
                    return (60/(2*Math.PI))*this.value;
                
                case RotationalAccelerationUnits.RevolutionsPerSecondSquared:
                    return (1/(2*Math.PI))*this.value;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: RotationalAccelerationUnits): number {

                switch (fromUnit) {
                    
                case RotationalAccelerationUnits.RadiansPerSecondSquared:
                    return value;
                
                case RotationalAccelerationUnits.DegreesPerSecondSquared:
                    return (Math.PI/180)*value;
                
                case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:
                    return ((2*Math.PI)/60)*value;
                
                case RotationalAccelerationUnits.RevolutionsPerSecondSquared:
                    return (2*Math.PI)*value;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
