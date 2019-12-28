/** ElectricConductanceUnits enumeration */
export enum ElectricConductanceUnits {
    /** */
    Siemens,
    /** */
    Microsiemens
}

/** The electrical conductance of an electrical conductor is a measure of the easeness to pass an electric current through that conductor. */
export class ElectricConductance {
    private value: number;
    private siemensLazy: number | null = null;
    private microsiemensLazy: number | null = null;

    /**
     * Create a new ElectricConductance.
     * @param value The value.
     * @param fromUnit The ‘ElectricConductance’ unit to create from.
     * The default unit is Siemens
     */
    public constructor(value: number, fromUnit: ElectricConductanceUnits = ElectricConductanceUnits.Siemens) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricConductance is Siemens.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Siemens(): number {
        if(this.siemensLazy !== null){
            return this.siemensLazy;
        }
        return this.siemensLazy = this.convertFromBase(ElectricConductanceUnits.Siemens);
    }

    /** */
    public get Microsiemens(): number {
        if(this.microsiemensLazy !== null){
            return this.microsiemensLazy;
        }
        return this.microsiemensLazy = this.convertFromBase(ElectricConductanceUnits.Microsiemens);
    }

    /**
     * Create a new ElectricConductance instance from a Siemens
     *
     * @param value The unit as Siemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromSiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Siemens);
    }

    /**
     * Create a new ElectricConductance instance from a Microsiemens
     *
     * @param value The unit as Microsiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    public static FromMicrosiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Microsiemens);
    }

    private convertFromBase(toUnit: ElectricConductanceUnits): number {
        switch (toUnit) {
                
            case ElectricConductanceUnits.Siemens:
                return this.value;
            case ElectricConductanceUnits.Microsiemens:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricConductanceUnits): number {
        switch (fromUnit) {
                
            case ElectricConductanceUnits.Siemens:
                return value;
            case ElectricConductanceUnits.Microsiemens:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricConductance to string.
     * Note! the default format for ElectricConductance is Siemens.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricConductance.
     * @returns The string format of the ElectricConductance.
     */
    public toString(toUnit: ElectricConductanceUnits = ElectricConductanceUnits.Siemens): string {

        switch (toUnit) {
            
            case ElectricConductanceUnits.Siemens:
                return this.Siemens + ` S`;
            case ElectricConductanceUnits.Microsiemens:
                return this.Microsiemens + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given ElectricConductance are equals to the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns True if the given ElectricConductance are equal to the current ElectricConductance.
     */
    public equals(electricConductance: ElectricConductance): boolean {
        return this.value === electricConductance.BaseValue;
    }

    /**
     * Compare the given ElectricConductance against the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns 0 if they are equal, -1 if the current ElectricConductance is less then other, 1 if the current ElectricConductance is greater then other.
     */
    public compareTo(electricConductance: ElectricConductance): number {

        if (this.value > electricConductance.BaseValue)
            return 1;
        if (this.value < electricConductance.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public add(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(this.value + electricConductance.BaseValue)
    }

    /**
     * Subtract the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public subtract(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(this.value - electricConductance.BaseValue)
    }

    /**
     * Multiply the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public multiply(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(this.value * electricConductance.BaseValue)
    }

    /**
     * Divide the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public divide(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(this.value / electricConductance.BaseValue)
    }

    /**
     * Modulo the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public modulo(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(this.value % electricConductance.BaseValue)
    }

    /**
     * Pow the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    public pow(electricConductance: ElectricConductance): ElectricConductance {
        return new ElectricConductance(this.value ** electricConductance.BaseValue)
    }
}
