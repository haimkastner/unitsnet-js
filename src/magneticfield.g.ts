/** MagneticFieldUnits enumeration */
export enum MagneticFieldUnits {
    /** */
    Teslas,
    /** */
    Nanoteslas,
    /** */
    Microteslas
}

/** A magnetic field is a force field that is created by moving electric charges (electric currents) and magnetic dipoles, and exerts a force on other nearby moving charges and magnetic dipoles. */
export class MagneticField {
    private value: number;
    private teslasLazy: number | null = null;
    private nanoteslasLazy: number | null = null;
    private microteslasLazy: number | null = null;

    /**
     * Create a new MagneticField.
     * @param value The value.
     * @param fromUnit The ‘MagneticField’ unit to create from.
     */
    public constructor(value: number, fromUnit: MagneticFieldUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MagneticField is Tesla.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Teslas(): number {
        if(this.teslasLazy !== null){
            return this.teslasLazy;
        }
        return this.teslasLazy = this.convertFromBase(MagneticFieldUnits.Teslas);
    }

    /** */
    public get Nanoteslas(): number {
        if(this.nanoteslasLazy !== null){
            return this.nanoteslasLazy;
        }
        return this.nanoteslasLazy = this.convertFromBase(MagneticFieldUnits.Nanoteslas);
    }

    /** */
    public get Microteslas(): number {
        if(this.microteslasLazy !== null){
            return this.microteslasLazy;
        }
        return this.microteslasLazy = this.convertFromBase(MagneticFieldUnits.Microteslas);
    }

    /**
     * Create a new MagneticField instance from a Teslas
     *
     * @param value The unit as Teslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    public static FromTeslas(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Teslas);
    }

    /**
     * Create a new MagneticField instance from a Nanoteslas
     *
     * @param value The unit as Nanoteslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    public static FromNanoteslas(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Nanoteslas);
    }

    /**
     * Create a new MagneticField instance from a Microteslas
     *
     * @param value The unit as Microteslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    public static FromMicroteslas(value: number): MagneticField {
        return new MagneticField(value, MagneticFieldUnits.Microteslas);
    }

    private convertFromBase(toUnit: MagneticFieldUnits): number {
        switch (toUnit) {
                
            case MagneticFieldUnits.Teslas:
                return this.value;
            case MagneticFieldUnits.Nanoteslas:
                return (this.value) / 1e-9;
            case MagneticFieldUnits.Microteslas:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MagneticFieldUnits): number {
        switch (fromUnit) {
                
            case MagneticFieldUnits.Teslas:
                return value;
            case MagneticFieldUnits.Nanoteslas:
                return (value) * 1e-9;
            case MagneticFieldUnits.Microteslas:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the MagneticField to string.
     * Note! the default format for MagneticField is Teslas.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MagneticField.
     * @returns The string format of the MagneticField.
     */
    public toString(toUnit: MagneticFieldUnits = MagneticFieldUnits.Teslas): string {

        switch (toUnit) {
            
            case MagneticFieldUnits.Teslas:
                return this.Teslas + ` T`;
            case MagneticFieldUnits.Nanoteslas:
                return this.Nanoteslas + ` T`;
            case MagneticFieldUnits.Microteslas:
                return this.Microteslas + ` T`;
        default:
            break;
        }
        return this.value.toString();
    }
}
