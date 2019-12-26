/** AreaDensityUnits enumeration */
export enum AreaDensityUnits {
    /** */
    KilogramsPerSquareMeter
}

/** The area density of a two-dimensional object is calculated as the mass per unit area. */
export class AreaDensity {
    private value: number;
    private kilogramspersquaremeterLazy: number | null = null;

    /**
     * Create a new AreaDensity.
     * @param value The value.
     * @param fromUnit The ‘AreaDensity’ unit to create from.
     */
    public constructor(value: number, fromUnit: AreaDensityUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of AreaDensity is KilogramPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get KilogramsPerSquareMeter(): number {
        if(this.kilogramspersquaremeterLazy !== null){
            return this.kilogramspersquaremeterLazy;
        }
        return this.kilogramspersquaremeterLazy = this.convertFromBase(AreaDensityUnits.KilogramsPerSquareMeter);
    }

    /**
     * Create a new AreaDensity instance from a KilogramsPerSquareMeter
     *
     * @param value The unit as KilogramsPerSquareMeter to create a new AreaDensity from.
     * @returns The new AreaDensity instance.
     */
    public static FromKilogramsPerSquareMeter(value: number): AreaDensity {
        return new AreaDensity(value, AreaDensityUnits.KilogramsPerSquareMeter);
    }

    private convertFromBase(toUnit: AreaDensityUnits): number {
        switch (toUnit) {
                
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: AreaDensityUnits): number {
        switch (fromUnit) {
                
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the AreaDensity to string.
     * Note! the default format for AreaDensity is KilogramsPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the AreaDensity.
     * @returns The string format of the AreaDensity.
     */
    public toString(toUnit: AreaDensityUnits = AreaDensityUnits.KilogramsPerSquareMeter): string {

        switch (toUnit) {
            
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return this.KilogramsPerSquareMeter + ` kg/m²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
