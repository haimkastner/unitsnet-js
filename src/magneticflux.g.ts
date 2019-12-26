/** MagneticFluxUnits enumeration */
export enum MagneticFluxUnits {
    /** */
    Webers
}

/** In physics, specifically electromagnetism, the magnetic flux through a surface is the surface integral of the normal component of the magnetic field B passing through that surface. */
export class MagneticFlux {
    private value: number;
    private webersLazy: number | null = null;

    /**
     * Create a new MagneticFlux.
     * @param value The value.
     * @param fromUnit The ‘MagneticFlux’ unit to create from.
     */
    public constructor(value: number, fromUnit: MagneticFluxUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MagneticFlux is Weber.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Webers(): number {
        if(this.webersLazy !== null){
            return this.webersLazy;
        }
        return this.webersLazy = this.convertFromBase(MagneticFluxUnits.Webers);
    }

    /**
     * Create a new MagneticFlux instance from a Webers
     *
     * @param value The unit as Webers to create a new MagneticFlux from.
     * @returns The new MagneticFlux instance.
     */
    public static FromWebers(value: number): MagneticFlux {
        return new MagneticFlux(value, MagneticFluxUnits.Webers);
    }

    private convertFromBase(toUnit: MagneticFluxUnits): number {
        switch (toUnit) {
                
            case MagneticFluxUnits.Webers:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MagneticFluxUnits): number {
        switch (fromUnit) {
                
            case MagneticFluxUnits.Webers:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the MagneticFlux to string.
     * Note! the default format for MagneticFlux is Webers.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MagneticFlux.
     * @returns The string format of the MagneticFlux.
     */
    public toString(toUnit: MagneticFluxUnits = MagneticFluxUnits.Webers): string {

        switch (toUnit) {
            
            case MagneticFluxUnits.Webers:
                return this.Webers + ` Wb`;
        default:
            break;
        }
        return this.value.toString();
    }
}
