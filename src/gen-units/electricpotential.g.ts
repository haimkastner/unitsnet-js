import { BaseUnit } from "../base-unit";

/** ElectricPotentialUnits enumeration */
export enum ElectricPotentialUnits {
    /** */
    Volts = "Volt",
    /** */
    Nanovolts = "Nanovolt",
    /** */
    Microvolts = "Microvolt",
    /** */
    Millivolts = "Millivolt",
    /** */
    Kilovolts = "Kilovolt",
    /** */
    Megavolts = "Megavolt"
}

/** In classical electromagnetism, the electric potential (a scalar quantity denoted by Φ, ΦE or V and also called the electric field potential or the electrostatic potential) at a point is the amount of electric potential energy that a unitary point charge would have when located at that point. */
export class ElectricPotential extends BaseUnit {
    private value: number;
    private voltsLazy: number | null = null;
    private nanovoltsLazy: number | null = null;
    private microvoltsLazy: number | null = null;
    private millivoltsLazy: number | null = null;
    private kilovoltsLazy: number | null = null;
    private megavoltsLazy: number | null = null;

    /**
     * Create a new ElectricPotential.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotential’ unit to create from.
     * The default unit is Volts
     */
    public constructor(value: number, fromUnit: ElectricPotentialUnits = ElectricPotentialUnits.Volts) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricPotential is Volts.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Volts(): number {
        if(this.voltsLazy !== null){
            return this.voltsLazy;
        }
        return this.voltsLazy = this.convertFromBase(ElectricPotentialUnits.Volts);
    }

    /** */
    public get Nanovolts(): number {
        if(this.nanovoltsLazy !== null){
            return this.nanovoltsLazy;
        }
        return this.nanovoltsLazy = this.convertFromBase(ElectricPotentialUnits.Nanovolts);
    }

    /** */
    public get Microvolts(): number {
        if(this.microvoltsLazy !== null){
            return this.microvoltsLazy;
        }
        return this.microvoltsLazy = this.convertFromBase(ElectricPotentialUnits.Microvolts);
    }

    /** */
    public get Millivolts(): number {
        if(this.millivoltsLazy !== null){
            return this.millivoltsLazy;
        }
        return this.millivoltsLazy = this.convertFromBase(ElectricPotentialUnits.Millivolts);
    }

    /** */
    public get Kilovolts(): number {
        if(this.kilovoltsLazy !== null){
            return this.kilovoltsLazy;
        }
        return this.kilovoltsLazy = this.convertFromBase(ElectricPotentialUnits.Kilovolts);
    }

    /** */
    public get Megavolts(): number {
        if(this.megavoltsLazy !== null){
            return this.megavoltsLazy;
        }
        return this.megavoltsLazy = this.convertFromBase(ElectricPotentialUnits.Megavolts);
    }

    /**
     * Create a new ElectricPotential instance from a Volts
     *
     * @param value The unit as Volts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    public static FromVolts(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Volts);
    }

    /**
     * Create a new ElectricPotential instance from a Nanovolts
     *
     * @param value The unit as Nanovolts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    public static FromNanovolts(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Nanovolts);
    }

    /**
     * Create a new ElectricPotential instance from a Microvolts
     *
     * @param value The unit as Microvolts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    public static FromMicrovolts(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Microvolts);
    }

    /**
     * Create a new ElectricPotential instance from a Millivolts
     *
     * @param value The unit as Millivolts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    public static FromMillivolts(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Millivolts);
    }

    /**
     * Create a new ElectricPotential instance from a Kilovolts
     *
     * @param value The unit as Kilovolts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    public static FromKilovolts(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Kilovolts);
    }

    /**
     * Create a new ElectricPotential instance from a Megavolts
     *
     * @param value The unit as Megavolts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    public static FromMegavolts(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Megavolts);
    }

    /**
     * Convert ElectricPotential to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricPotentialUnits): number {
        switch (toUnit) {
            case ElectricPotentialUnits.Volts: return this.Volts;
            case ElectricPotentialUnits.Nanovolts: return this.Nanovolts;
            case ElectricPotentialUnits.Microvolts: return this.Microvolts;
            case ElectricPotentialUnits.Millivolts: return this.Millivolts;
            case ElectricPotentialUnits.Kilovolts: return this.Kilovolts;
            case ElectricPotentialUnits.Megavolts: return this.Megavolts;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: ElectricPotentialUnits): number {
        switch (toUnit) {
                
            case ElectricPotentialUnits.Volts:
                return this.value;
            case ElectricPotentialUnits.Nanovolts:
                return (this.value) / 1e-9;
            case ElectricPotentialUnits.Microvolts:
                return (this.value) / 0.000001;
            case ElectricPotentialUnits.Millivolts:
                return (this.value) / 0.001;
            case ElectricPotentialUnits.Kilovolts:
                return (this.value) / 1000;
            case ElectricPotentialUnits.Megavolts:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricPotentialUnits): number {
        switch (fromUnit) {
                
            case ElectricPotentialUnits.Volts:
                return value;
            case ElectricPotentialUnits.Nanovolts:
                return (value) * 1e-9;
            case ElectricPotentialUnits.Microvolts:
                return (value) * 0.000001;
            case ElectricPotentialUnits.Millivolts:
                return (value) * 0.001;
            case ElectricPotentialUnits.Kilovolts:
                return (value) * 1000;
            case ElectricPotentialUnits.Megavolts:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricPotential to string.
     * Note! the default format for ElectricPotential is Volts.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricPotential.
     * @returns The string format of the ElectricPotential.
     */
    public toString(unit: ElectricPotentialUnits = ElectricPotentialUnits.Volts): string {

        switch (unit) {
            
            case ElectricPotentialUnits.Volts:
                return this.Volts + ` V`;
            case ElectricPotentialUnits.Nanovolts:
                return this.Nanovolts + ` nV`;
            case ElectricPotentialUnits.Microvolts:
                return this.Microvolts + ` μV`;
            case ElectricPotentialUnits.Millivolts:
                return this.Millivolts + ` mV`;
            case ElectricPotentialUnits.Kilovolts:
                return this.Kilovolts + ` kV`;
            case ElectricPotentialUnits.Megavolts:
                return this.Megavolts + ` MV`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricPotential unit abbreviation.
     * Note! the default abbreviation for ElectricPotential is Volts.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricPotential.
     * @returns The abbreviation string of ElectricPotential.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricPotentialUnits = ElectricPotentialUnits.Volts): string {

        switch (unitAbbreviation) {
            
            case ElectricPotentialUnits.Volts:
                return `V`;
            case ElectricPotentialUnits.Nanovolts:
                return `nV`;
            case ElectricPotentialUnits.Microvolts:
                return `μV`;
            case ElectricPotentialUnits.Millivolts:
                return `mV`;
            case ElectricPotentialUnits.Kilovolts:
                return `kV`;
            case ElectricPotentialUnits.Megavolts:
                return `MV`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricPotential are equals to the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns True if the given ElectricPotential are equal to the current ElectricPotential.
     */
    public equals(electricPotential: ElectricPotential): boolean {
        return super.internalEquals(this.value, electricPotential.BaseValue);
    }

    /**
     * Compare the given ElectricPotential against the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns 0 if they are equal, -1 if the current ElectricPotential is less then other, 1 if the current ElectricPotential is greater then other.
     */
    public compareTo(electricPotential: ElectricPotential): number {
        return super.internalCompareTo(this.value, electricPotential.BaseValue);
    }

    /**
     * Add the given ElectricPotential with the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns A new ElectricPotential instance with the results.
     */
    public add(electricPotential: ElectricPotential): ElectricPotential {
        return new ElectricPotential(super.internalAdd(this.value, electricPotential.BaseValue))
    }

    /**
     * Subtract the given ElectricPotential with the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns A new ElectricPotential instance with the results.
     */
    public subtract(electricPotential: ElectricPotential): ElectricPotential {
        return new ElectricPotential(super.internalSubtract(this.value, electricPotential.BaseValue))
    }

    /**
     * Multiply the given ElectricPotential with the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns A new ElectricPotential instance with the results.
     */
    public multiply(electricPotential: ElectricPotential): ElectricPotential {
        return new ElectricPotential(super.internalMultiply(this.value, electricPotential.BaseValue))
    }

    /**
     * Divide the given ElectricPotential with the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns A new ElectricPotential instance with the results.
     */
    public divide(electricPotential: ElectricPotential): ElectricPotential {
        return new ElectricPotential(super.internalDivide(this.value, electricPotential.BaseValue))
    }

    /**
     * Modulo the given ElectricPotential with the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns A new ElectricPotential instance with the results.
     */
    public modulo(electricPotential: ElectricPotential): ElectricPotential {
        return new ElectricPotential(super.internalModulo(this.value, electricPotential.BaseValue))
    }

    /**
     * Pow the given ElectricPotential with the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns A new ElectricPotential instance with the results.
     */
    public pow(electricPotential: ElectricPotential): ElectricPotential {
        return new ElectricPotential(super.internalPow(this.value, electricPotential.BaseValue))
    }
}
