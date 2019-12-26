/** ElectricCurrentDensityUnits enumeration */
export enum ElectricCurrentDensityUnits {
    /** */
    AmperesPerSquareMeter,
    /** */
    AmperesPerSquareInch,
    /** */
    AmperesPerSquareFoot
}

/** In electromagnetism, current density is the electric current per unit area of cross section. */
export class ElectricCurrentDensity {
    private value: number;
    private amperespersquaremeterLazy: number | null = null;
    private amperespersquareinchLazy: number | null = null;
    private amperespersquarefootLazy: number | null = null;

    /**
     * Create a new ElectricCurrentDensity.
     * @param value The value.
     * @param fromUnit The ‘ElectricCurrentDensity’ unit to create from.
     */
    public constructor(value: number, fromUnit: ElectricCurrentDensityUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricCurrentDensity is AmperePerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get AmperesPerSquareMeter(): number {
        if(this.amperespersquaremeterLazy !== null){
            return this.amperespersquaremeterLazy;
        }
        return this.amperespersquaremeterLazy = this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareMeter);
    }

    /** */
    public get AmperesPerSquareInch(): number {
        if(this.amperespersquareinchLazy !== null){
            return this.amperespersquareinchLazy;
        }
        return this.amperespersquareinchLazy = this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareInch);
    }

    /** */
    public get AmperesPerSquareFoot(): number {
        if(this.amperespersquarefootLazy !== null){
            return this.amperespersquarefootLazy;
        }
        return this.amperespersquarefootLazy = this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareFoot);
    }

    /**
     * Create a new ElectricCurrentDensity instance from a AmperesPerSquareMeter
     *
     * @param value The unit as AmperesPerSquareMeter to create a new ElectricCurrentDensity from.
     * @returns The new ElectricCurrentDensity instance.
     */
    public static FromAmperesPerSquareMeter(value: number): ElectricCurrentDensity {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareMeter);
    }

    /**
     * Create a new ElectricCurrentDensity instance from a AmperesPerSquareInch
     *
     * @param value The unit as AmperesPerSquareInch to create a new ElectricCurrentDensity from.
     * @returns The new ElectricCurrentDensity instance.
     */
    public static FromAmperesPerSquareInch(value: number): ElectricCurrentDensity {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareInch);
    }

    /**
     * Create a new ElectricCurrentDensity instance from a AmperesPerSquareFoot
     *
     * @param value The unit as AmperesPerSquareFoot to create a new ElectricCurrentDensity from.
     * @returns The new ElectricCurrentDensity instance.
     */
    public static FromAmperesPerSquareFoot(value: number): ElectricCurrentDensity {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareFoot);
    }

    private convertFromBase(toUnit: ElectricCurrentDensityUnits): number {
        switch (toUnit) {
                
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter:
                return this.value;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch:
                return this.value / 1.5500031000062000e3;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot:
                return this.value / 1.0763910416709722e1;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricCurrentDensityUnits): number {
        switch (fromUnit) {
                
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter:
                return value;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch:
                return value * 1.5500031000062000e3;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot:
                return value * 1.0763910416709722e1;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricCurrentDensity to string.
     * Note! the default format for ElectricCurrentDensity is AmperesPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricCurrentDensity.
     * @returns The string format of the ElectricCurrentDensity.
     */
    public toString(toUnit: ElectricCurrentDensityUnits = ElectricCurrentDensityUnits.AmperesPerSquareMeter): string {

        switch (toUnit) {
            
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter:
                return this.AmperesPerSquareMeter + ` A/m²`;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch:
                return this.AmperesPerSquareInch + ` A/in²`;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot:
                return this.AmperesPerSquareFoot + ` A/ft²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
