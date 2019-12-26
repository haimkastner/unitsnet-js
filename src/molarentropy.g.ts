/** MolarEntropyUnits enumeration */
export enum MolarEntropyUnits {
    /** */
    JoulesPerMoleKelvin,
    /** */
    KilojoulesPerMoleKelvin,
    /** */
    MegajoulesPerMoleKelvin
}

/** Molar entropy is amount of energy required to increase temperature of 1 mole substance by 1 Kelvin. */
export class MolarEntropy {
    private value: number;
    private joulespermolekelvinLazy: number | null = null;
    private kilojoulespermolekelvinLazy: number | null = null;
    private megajoulespermolekelvinLazy: number | null = null;

    /**
     * Create a new MolarEntropy.
     * @param value The value.
     * @param fromUnit The ‘MolarEntropy’ unit to create from.
     */
    public constructor(value: number, fromUnit: MolarEntropyUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MolarEntropy is JoulePerMoleKelvin.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get JoulesPerMoleKelvin(): number {
        if(this.joulespermolekelvinLazy !== null){
            return this.joulespermolekelvinLazy;
        }
        return this.joulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.JoulesPerMoleKelvin);
    }

    /** */
    public get KilojoulesPerMoleKelvin(): number {
        if(this.kilojoulespermolekelvinLazy !== null){
            return this.kilojoulespermolekelvinLazy;
        }
        return this.kilojoulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.KilojoulesPerMoleKelvin);
    }

    /** */
    public get MegajoulesPerMoleKelvin(): number {
        if(this.megajoulespermolekelvinLazy !== null){
            return this.megajoulespermolekelvinLazy;
        }
        return this.megajoulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.MegajoulesPerMoleKelvin);
    }

    /**
     * Create a new MolarEntropy instance from a JoulesPerMoleKelvin
     *
     * @param value The unit as JoulesPerMoleKelvin to create a new MolarEntropy from.
     * @returns The new MolarEntropy instance.
     */
    public static FromJoulesPerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.JoulesPerMoleKelvin);
    }

    /**
     * Create a new MolarEntropy instance from a KilojoulesPerMoleKelvin
     *
     * @param value The unit as KilojoulesPerMoleKelvin to create a new MolarEntropy from.
     * @returns The new MolarEntropy instance.
     */
    public static FromKilojoulesPerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.KilojoulesPerMoleKelvin);
    }

    /**
     * Create a new MolarEntropy instance from a MegajoulesPerMoleKelvin
     *
     * @param value The unit as MegajoulesPerMoleKelvin to create a new MolarEntropy from.
     * @returns The new MolarEntropy instance.
     */
    public static FromMegajoulesPerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.MegajoulesPerMoleKelvin);
    }

    private convertFromBase(toUnit: MolarEntropyUnits): number {
        switch (toUnit) {
                
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return this.value;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return (this.value) / 1000;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MolarEntropyUnits): number {
        switch (fromUnit) {
                
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return value;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return (value) * 1000;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the MolarEntropy to string.
     * Note! the default format for MolarEntropy is JoulesPerMoleKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MolarEntropy.
     * @returns The string format of the MolarEntropy.
     */
    public toString(toUnit: MolarEntropyUnits = MolarEntropyUnits.JoulesPerMoleKelvin): string {

        switch (toUnit) {
            
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return this.JoulesPerMoleKelvin + ` J/(mol*K)`;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return this.KilojoulesPerMoleKelvin + ` J/(mol*K)`;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return this.MegajoulesPerMoleKelvin + ` J/(mol*K)`;
        default:
            break;
        }
        return this.value.toString();
    }
}
