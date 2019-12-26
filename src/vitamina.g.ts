/** VitaminAUnits enumeration */
export enum VitaminAUnits {
    /** */
    InternationalUnits
}

/** Vitamin A: 1 IU is the biological equivalent of 0.3 µg retinol, or of 0.6 µg beta-carotene. */
export class VitaminA {
    private value: number;
    private internationalunitsLazy: number | null = null;

    /**
     * Create a new VitaminA.
     * @param value The value.
     * @param fromUnit The ‘VitaminA’ unit to create from.
     */
    public constructor(value: number, fromUnit: VitaminAUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of VitaminA is InternationalUnit.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get InternationalUnits(): number {
        if(this.internationalunitsLazy !== null){
            return this.internationalunitsLazy;
        }
        return this.internationalunitsLazy = this.convertFromBase(VitaminAUnits.InternationalUnits);
    }

    /**
     * Create a new VitaminA instance from a InternationalUnits
     *
     * @param value The unit as InternationalUnits to create a new VitaminA from.
     * @returns The new VitaminA instance.
     */
    public static FromInternationalUnits(value: number): VitaminA {
        return new VitaminA(value, VitaminAUnits.InternationalUnits);
    }

    private convertFromBase(toUnit: VitaminAUnits): number {
        switch (toUnit) {
                
            case VitaminAUnits.InternationalUnits:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: VitaminAUnits): number {
        switch (fromUnit) {
                
            case VitaminAUnits.InternationalUnits:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the VitaminA to string.
     * Note! the default format for VitaminA is InternationalUnits.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the VitaminA.
     * @returns The string format of the VitaminA.
     */
    public toString(toUnit: VitaminAUnits = VitaminAUnits.InternationalUnits): string {

        switch (toUnit) {
            
            case VitaminAUnits.InternationalUnits:
                return this.InternationalUnits + ` IU`;
        default:
            break;
        }
        return this.value.toString();
    }
}
