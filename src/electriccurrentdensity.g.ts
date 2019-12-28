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
     * The default unit is AmperesPerSquareMeter
     */
    public constructor(value: number, fromUnit: ElectricCurrentDensityUnits = ElectricCurrentDensityUnits.AmperesPerSquareMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricCurrentDensity is AmperesPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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

    /**
     * Check if the given ElectricCurrentDensity are equals to the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns True if the given ElectricCurrentDensity are equal to the current ElectricCurrentDensity.
     */
    public equals(electricCurrentDensity: ElectricCurrentDensity): boolean {
        return this.value === electricCurrentDensity.BaseValue;
    }

    /**
     * Compare the given ElectricCurrentDensity against the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns 0 if they are equal, -1 if the current ElectricCurrentDensity is less then other, 1 if the current ElectricCurrentDensity is greater then other.
     */
    public compareTo(electricCurrentDensity: ElectricCurrentDensity): number {

        if (this.value > electricCurrentDensity.BaseValue)
            return 1;
        if (this.value < electricCurrentDensity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    public add(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity {
        return new ElectricCurrentDensity(this.value + electricCurrentDensity.BaseValue)
    }

    /**
     * Subtract the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    public subtract(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity {
        return new ElectricCurrentDensity(this.value - electricCurrentDensity.BaseValue)
    }

    /**
     * Multiply the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    public multiply(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity {
        return new ElectricCurrentDensity(this.value * electricCurrentDensity.BaseValue)
    }

    /**
     * Divide the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    public divide(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity {
        return new ElectricCurrentDensity(this.value / electricCurrentDensity.BaseValue)
    }

    /**
     * Modulo the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    public modulo(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity {
        return new ElectricCurrentDensity(this.value % electricCurrentDensity.BaseValue)
    }

    /**
     * Pow the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    public pow(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity {
        return new ElectricCurrentDensity(this.value ** electricCurrentDensity.BaseValue)
    }
}
