/** RotationalAccelerationUnits enumeration */
export enum RotationalAccelerationUnits {
    /** */
    RadiansPerSecondSquared,
    /** */
    DegreesPerSecondSquared,
    /** */
    RevolutionsPerMinutePerSecond,
    /** */
    RevolutionsPerSecondSquared
}

/** Angular acceleration is the rate of change of rotational speed. */
export class RotationalAcceleration {
    private value: number;
    private radianspersecondsquaredLazy: number | null = null;
    private degreespersecondsquaredLazy: number | null = null;
    private revolutionsperminutepersecondLazy: number | null = null;
    private revolutionspersecondsquaredLazy: number | null = null;

    /**
     * Create a new RotationalAcceleration.
     * @param value The value.
     * @param fromUnit The ‘RotationalAcceleration’ unit to create from.
     */
    public constructor(value: number, fromUnit: RotationalAccelerationUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RotationalAcceleration is RadianPerSecondSquared.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get RadiansPerSecondSquared(): number {
        if(this.radianspersecondsquaredLazy !== null){
            return this.radianspersecondsquaredLazy;
        }
        return this.radianspersecondsquaredLazy = this.convertFromBase(RotationalAccelerationUnits.RadiansPerSecondSquared);
    }

    /** */
    public get DegreesPerSecondSquared(): number {
        if(this.degreespersecondsquaredLazy !== null){
            return this.degreespersecondsquaredLazy;
        }
        return this.degreespersecondsquaredLazy = this.convertFromBase(RotationalAccelerationUnits.DegreesPerSecondSquared);
    }

    /** */
    public get RevolutionsPerMinutePerSecond(): number {
        if(this.revolutionsperminutepersecondLazy !== null){
            return this.revolutionsperminutepersecondLazy;
        }
        return this.revolutionsperminutepersecondLazy = this.convertFromBase(RotationalAccelerationUnits.RevolutionsPerMinutePerSecond);
    }

    /** */
    public get RevolutionsPerSecondSquared(): number {
        if(this.revolutionspersecondsquaredLazy !== null){
            return this.revolutionspersecondsquaredLazy;
        }
        return this.revolutionspersecondsquaredLazy = this.convertFromBase(RotationalAccelerationUnits.RevolutionsPerSecondSquared);
    }

    /**
     * Create a new RotationalAcceleration instance from a RadiansPerSecondSquared
     *
     * @param value The unit as RadiansPerSecondSquared to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    public static FromRadiansPerSecondSquared(value: number): RotationalAcceleration {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RadiansPerSecondSquared);
    }

    /**
     * Create a new RotationalAcceleration instance from a DegreesPerSecondSquared
     *
     * @param value The unit as DegreesPerSecondSquared to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    public static FromDegreesPerSecondSquared(value: number): RotationalAcceleration {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.DegreesPerSecondSquared);
    }

    /**
     * Create a new RotationalAcceleration instance from a RevolutionsPerMinutePerSecond
     *
     * @param value The unit as RevolutionsPerMinutePerSecond to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    public static FromRevolutionsPerMinutePerSecond(value: number): RotationalAcceleration {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RevolutionsPerMinutePerSecond);
    }

    /**
     * Create a new RotationalAcceleration instance from a RevolutionsPerSecondSquared
     *
     * @param value The unit as RevolutionsPerSecondSquared to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
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

    /**
     * Format the RotationalAcceleration to string.
     * Note! the default format for RotationalAcceleration is RadiansPerSecondSquared.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RotationalAcceleration.
     * @returns The string format of the RotationalAcceleration.
     */
    public toString(toUnit: RotationalAccelerationUnits = RotationalAccelerationUnits.RadiansPerSecondSquared): string {

        switch (toUnit) {
            
            case RotationalAccelerationUnits.RadiansPerSecondSquared:
                return this.RadiansPerSecondSquared + ` rad/s²`;
            case RotationalAccelerationUnits.DegreesPerSecondSquared:
                return this.DegreesPerSecondSquared + ` °/s²`;
            case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:
                return this.RevolutionsPerMinutePerSecond + ` rpm/s`;
            case RotationalAccelerationUnits.RevolutionsPerSecondSquared:
                return this.RevolutionsPerSecondSquared + ` r/s²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
