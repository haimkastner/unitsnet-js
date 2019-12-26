/** LuminousFluxUnits enumeration */
export enum LuminousFluxUnits {
    /** */
    Lumens
}

/** In photometry, luminous flux or luminous power is the measure of the perceived power of light. */
export class LuminousFlux {
    private value: number;
    private lumensLazy: number | null = null;

    /**
     * Create a new LuminousFlux.
     * @param value The value.
     * @param fromUnit The ‘LuminousFlux’ unit to create from.
     */
    public constructor(value: number, fromUnit: LuminousFluxUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of LuminousFlux is Lumen.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Lumens(): number {
        if(this.lumensLazy !== null){
            return this.lumensLazy;
        }
        return this.lumensLazy = this.convertFromBase(LuminousFluxUnits.Lumens);
    }

    /**
     * Create a new LuminousFlux instance from a Lumens
     *
     * @param value The unit as Lumens to create a new LuminousFlux from.
     * @returns The new LuminousFlux instance.
     */
    public static FromLumens(value: number): LuminousFlux {
        return new LuminousFlux(value, LuminousFluxUnits.Lumens);
    }

    private convertFromBase(toUnit: LuminousFluxUnits): number {
        switch (toUnit) {
                
            case LuminousFluxUnits.Lumens:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LuminousFluxUnits): number {
        switch (fromUnit) {
                
            case LuminousFluxUnits.Lumens:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the LuminousFlux to string.
     * Note! the default format for LuminousFlux is Lumens.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the LuminousFlux.
     * @returns The string format of the LuminousFlux.
     */
    public toString(toUnit: LuminousFluxUnits = LuminousFluxUnits.Lumens): string {

        switch (toUnit) {
            
            case LuminousFluxUnits.Lumens:
                return this.Lumens + ` lm`;
        default:
            break;
        }
        return this.value.toString();
    }
}
