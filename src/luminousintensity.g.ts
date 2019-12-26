/** LuminousIntensityUnits enumeration */
export enum LuminousIntensityUnits {
    /** */
    Candela
}

/** In photometry, luminous intensity is a measure of the wavelength-weighted power emitted by a light source in a particular direction per unit solid angle, based on the luminosity function, a standardized model of the sensitivity of the human eye. */
export class LuminousIntensity {
    private value: number;
    private candelaLazy: number | null = null;

    /**
     * Create a new LuminousIntensity.
     * @param value The value.
     * @param fromUnit The ‘LuminousIntensity’ unit to create from.
     */
    public constructor(value: number, fromUnit: LuminousIntensityUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of LuminousIntensity is Candela.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Candela(): number {
        if(this.candelaLazy !== null){
            return this.candelaLazy;
        }
        return this.candelaLazy = this.convertFromBase(LuminousIntensityUnits.Candela);
    }

    /**
     * Create a new LuminousIntensity instance from a Candela
     *
     * @param value The unit as Candela to create a new LuminousIntensity from.
     * @returns The new LuminousIntensity instance.
     */
    public static FromCandela(value: number): LuminousIntensity {
        return new LuminousIntensity(value, LuminousIntensityUnits.Candela);
    }

    private convertFromBase(toUnit: LuminousIntensityUnits): number {
        switch (toUnit) {
                
            case LuminousIntensityUnits.Candela:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LuminousIntensityUnits): number {
        switch (fromUnit) {
                
            case LuminousIntensityUnits.Candela:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the LuminousIntensity to string.
     * Note! the default format for LuminousIntensity is Candela.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the LuminousIntensity.
     * @returns The string format of the LuminousIntensity.
     */
    public toString(toUnit: LuminousIntensityUnits = LuminousIntensityUnits.Candela): string {

        switch (toUnit) {
            
            case LuminousIntensityUnits.Candela:
                return this.Candela + ` cd`;
        default:
            break;
        }
        return this.value.toString();
    }
}
