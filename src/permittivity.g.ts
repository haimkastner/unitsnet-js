/** PermittivityUnits enumeration */
export enum PermittivityUnits {
    /** */
    FaradsPerMeter
}

/** In electromagnetism, permittivity is the measure of resistance that is encountered when forming an electric field in a particular medium. */
export class Permittivity {
    private value: number;
    private faradspermeterLazy: number | null = null;

    /**
     * Create a new Permittivity.
     * @param value The value.
     * @param fromUnit The ‘Permittivity’ unit to create from.
     */
    public constructor(value: number, fromUnit: PermittivityUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Permittivity is FaradPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get FaradsPerMeter(): number {
        if(this.faradspermeterLazy !== null){
            return this.faradspermeterLazy;
        }
        return this.faradspermeterLazy = this.convertFromBase(PermittivityUnits.FaradsPerMeter);
    }

    /**
     * Create a new Permittivity instance from a FaradsPerMeter
     *
     * @param value The unit as FaradsPerMeter to create a new Permittivity from.
     * @returns The new Permittivity instance.
     */
    public static FromFaradsPerMeter(value: number): Permittivity {
        return new Permittivity(value, PermittivityUnits.FaradsPerMeter);
    }

    private convertFromBase(toUnit: PermittivityUnits): number {
        switch (toUnit) {
                
            case PermittivityUnits.FaradsPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PermittivityUnits): number {
        switch (fromUnit) {
                
            case PermittivityUnits.FaradsPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Permittivity to string.
     * Note! the default format for Permittivity is FaradsPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Permittivity.
     * @returns The string format of the Permittivity.
     */
    public toString(toUnit: PermittivityUnits = PermittivityUnits.FaradsPerMeter): string {

        switch (toUnit) {
            
            case PermittivityUnits.FaradsPerMeter:
                return this.FaradsPerMeter + ` F/m`;
        default:
            break;
        }
        return this.value.toString();
    }
}
