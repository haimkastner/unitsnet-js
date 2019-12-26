/** SolidAngleUnits enumeration */
export enum SolidAngleUnits {
    /** */
    Steradians
}

/** In geometry, a solid angle is the two-dimensional angle in three-dimensional space that an object subtends at a point. */
export class SolidAngle {
    private value: number;
    private steradiansLazy: number | null = null;

    /**
     * Create a new SolidAngle.
     * @param value The value.
     * @param fromUnit The ‘SolidAngle’ unit to create from.
     */
    public constructor(value: number, fromUnit: SolidAngleUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SolidAngle is Steradian.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Steradians(): number {
        if(this.steradiansLazy !== null){
            return this.steradiansLazy;
        }
        return this.steradiansLazy = this.convertFromBase(SolidAngleUnits.Steradians);
    }

    /**
     * Create a new SolidAngle instance from a Steradians
     *
     * @param value The unit as Steradians to create a new SolidAngle from.
     * @returns The new SolidAngle instance.
     */
    public static FromSteradians(value: number): SolidAngle {
        return new SolidAngle(value, SolidAngleUnits.Steradians);
    }

    private convertFromBase(toUnit: SolidAngleUnits): number {
        switch (toUnit) {
                
            case SolidAngleUnits.Steradians:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: SolidAngleUnits): number {
        switch (fromUnit) {
                
            case SolidAngleUnits.Steradians:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the SolidAngle to string.
     * Note! the default format for SolidAngle is Steradians.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SolidAngle.
     * @returns The string format of the SolidAngle.
     */
    public toString(toUnit: SolidAngleUnits = SolidAngleUnits.Steradians): string {

        switch (toUnit) {
            
            case SolidAngleUnits.Steradians:
                return this.Steradians + ` sr`;
        default:
            break;
        }
        return this.value.toString();
    }
}
