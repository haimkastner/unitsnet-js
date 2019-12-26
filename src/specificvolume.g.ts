/** SpecificVolumeUnits enumeration */
export enum SpecificVolumeUnits {
    /** */
    CubicMetersPerKilogram,
    /** */
    CubicFeetPerPound
}

/** In thermodynamics, the specific volume of a substance is the ratio of the substance's volume to its mass. It is the reciprocal of density and an intrinsic property of matter as well. */
export class SpecificVolume {
    private value: number;
    private cubicmetersperkilogramLazy: number | null = null;
    private cubicfeetperpoundLazy: number | null = null;

    /**
     * Create a new SpecificVolume.
     * @param value The value.
     * @param fromUnit The ‘SpecificVolume’ unit to create from.
     */
    public constructor(value: number, fromUnit: SpecificVolumeUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SpecificVolume is CubicMeterPerKilogram.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get CubicMetersPerKilogram(): number {
        if(this.cubicmetersperkilogramLazy !== null){
            return this.cubicmetersperkilogramLazy;
        }
        return this.cubicmetersperkilogramLazy = this.convertFromBase(SpecificVolumeUnits.CubicMetersPerKilogram);
    }

    /** */
    public get CubicFeetPerPound(): number {
        if(this.cubicfeetperpoundLazy !== null){
            return this.cubicfeetperpoundLazy;
        }
        return this.cubicfeetperpoundLazy = this.convertFromBase(SpecificVolumeUnits.CubicFeetPerPound);
    }

    /**
     * Create a new SpecificVolume instance from a CubicMetersPerKilogram
     *
     * @param value The unit as CubicMetersPerKilogram to create a new SpecificVolume from.
     * @returns The new SpecificVolume instance.
     */
    public static FromCubicMetersPerKilogram(value: number): SpecificVolume {
        return new SpecificVolume(value, SpecificVolumeUnits.CubicMetersPerKilogram);
    }

    /**
     * Create a new SpecificVolume instance from a CubicFeetPerPound
     *
     * @param value The unit as CubicFeetPerPound to create a new SpecificVolume from.
     * @returns The new SpecificVolume instance.
     */
    public static FromCubicFeetPerPound(value: number): SpecificVolume {
        return new SpecificVolume(value, SpecificVolumeUnits.CubicFeetPerPound);
    }

    private convertFromBase(toUnit: SpecificVolumeUnits): number {
        switch (toUnit) {
                
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return this.value;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return this.value*16.01846353;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: SpecificVolumeUnits): number {
        switch (fromUnit) {
                
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return value;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return value/16.01846353;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the SpecificVolume to string.
     * Note! the default format for SpecificVolume is CubicMetersPerKilogram.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SpecificVolume.
     * @returns The string format of the SpecificVolume.
     */
    public toString(toUnit: SpecificVolumeUnits = SpecificVolumeUnits.CubicMetersPerKilogram): string {

        switch (toUnit) {
            
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return this.CubicMetersPerKilogram + ` m³/kg`;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return this.CubicFeetPerPound + ` ft³/lb`;
        default:
            break;
        }
        return this.value.toString();
    }
}
