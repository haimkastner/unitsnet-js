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
     * The default unit is KilogramsPerSecondPerSquareMeter
     */
    public constructor(value: number, fromUnit: MassFluxUnits = MassFluxUnits.KilogramsPerSecondPerSquareMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MassFlux is KilogramsPerSecondPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
                return this.KilogramsPerSecondPerSquareMeter + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given MassFlux are equals to the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns True if the given MassFlux are equal to the current MassFlux.
     */
    public equals(massFlux: MassFlux): boolean {
        return this.value === massFlux.BaseValue;
    }

    /**
     * Compare the given MassFlux against the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns 0 if they are equal, -1 if the current MassFlux is less then other, 1 if the current MassFlux is greater then other.
     */
    public compareTo(massFlux: MassFlux): number {

        if (this.value > massFlux.BaseValue)
            return 1;
        if (this.value < massFlux.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    public add(massFlux: MassFlux): MassFlux {
        return new MassFlux(this.value + massFlux.BaseValue)
    }

    /**
     * Subtract the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    public subtract(massFlux: MassFlux): MassFlux {
        return new MassFlux(this.value - massFlux.BaseValue)
    }

    /**
     * Multiply the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    public multiply(massFlux: MassFlux): MassFlux {
        return new MassFlux(this.value * massFlux.BaseValue)
    }

    /**
     * Divide the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    public divide(massFlux: MassFlux): MassFlux {
        return new MassFlux(this.value / massFlux.BaseValue)
    }

    /**
     * Modulo the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    public modulo(massFlux: MassFlux): MassFlux {
        return new MassFlux(this.value % massFlux.BaseValue)
    }

    /**
     * Pow the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    public pow(massFlux: MassFlux): MassFlux {
        return new MassFlux(this.value ** massFlux.BaseValue)
    }
}
