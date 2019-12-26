/** MassFluxUnits enumeration */
export enum MassFluxUnits {
    /** */
    GramsPerSecondPerSquareMeter,
    /** */
    KilogramsPerSecondPerSquareMeter
}

/** Mass flux is the mass flow rate per unit area. */
export class MassFlux {
    private value: number;
    private gramspersecondpersquaremeterLazy: number | null = null;
    private kilogramspersecondpersquaremeterLazy: number | null = null;

    /**
     * Create a new MassFlux.
     * @param value The value.
     * @param fromUnit The ‘MassFlux’ unit to create from.
     */
    public constructor(value: number, fromUnit: MassFluxUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MassFlux is KilogramPerSecondPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get GramsPerSecondPerSquareMeter(): number {
        if(this.gramspersecondpersquaremeterLazy !== null){
            return this.gramspersecondpersquaremeterLazy;
        }
        return this.gramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.GramsPerSecondPerSquareMeter);
    }

    /** */
    public get KilogramsPerSecondPerSquareMeter(): number {
        if(this.kilogramspersecondpersquaremeterLazy !== null){
            return this.kilogramspersecondpersquaremeterLazy;
        }
        return this.kilogramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.KilogramsPerSecondPerSquareMeter);
    }

    /**
     * Create a new MassFlux instance from a GramsPerSecondPerSquareMeter
     *
     * @param value The unit as GramsPerSecondPerSquareMeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromGramsPerSecondPerSquareMeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.GramsPerSecondPerSquareMeter);
    }

    /**
     * Create a new MassFlux instance from a KilogramsPerSecondPerSquareMeter
     *
     * @param value The unit as KilogramsPerSecondPerSquareMeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromKilogramsPerSecondPerSquareMeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.KilogramsPerSecondPerSquareMeter);
    }

    private convertFromBase(toUnit: MassFluxUnits): number {
        switch (toUnit) {
                
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.value*1e3;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return (this.value*1e3) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MassFluxUnits): number {
        switch (fromUnit) {
                
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return value/1e3;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return (value/1e3) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the MassFlux to string.
     * Note! the default format for MassFlux is KilogramsPerSecondPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassFlux.
     * @returns The string format of the MassFlux.
     */
    public toString(toUnit: MassFluxUnits = MassFluxUnits.KilogramsPerSecondPerSquareMeter): string {

        switch (toUnit) {
            
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.GramsPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return this.KilogramsPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
