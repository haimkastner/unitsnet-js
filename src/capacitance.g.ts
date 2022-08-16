/** CapacitanceUnits enumeration */
export enum CapacitanceUnits {
    /** */
    Farads,
    /** */
    Picofarads,
    /** */
    Nanofarads,
    /** */
    Microfarads,
    /** */
    Millifarads,
    /** */
    Kilofarads,
    /** */
    Megafarads
}

/** Capacitance is the ability of a body to store an electric charge. */
export class Capacitance {
    private value: number;
    private faradsLazy: number | null = null;
    private picofaradsLazy: number | null = null;
    private nanofaradsLazy: number | null = null;
    private microfaradsLazy: number | null = null;
    private millifaradsLazy: number | null = null;
    private kilofaradsLazy: number | null = null;
    private megafaradsLazy: number | null = null;

    /**
     * Create a new Capacitance.
     * @param value The value.
     * @param fromUnit The ‘Capacitance’ unit to create from.
     * The default unit is Farads
     */
    public constructor(value: number, fromUnit: CapacitanceUnits = CapacitanceUnits.Farads) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Capacitance is Farads.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Farads(): number {
        if(this.faradsLazy !== null){
            return this.faradsLazy;
        }
        return this.faradsLazy = this.convertFromBase(CapacitanceUnits.Farads);
    }

    /** */
    public get Picofarads(): number {
        if(this.picofaradsLazy !== null){
            return this.picofaradsLazy;
        }
        return this.picofaradsLazy = this.convertFromBase(CapacitanceUnits.Picofarads);
    }

    /** */
    public get Nanofarads(): number {
        if(this.nanofaradsLazy !== null){
            return this.nanofaradsLazy;
        }
        return this.nanofaradsLazy = this.convertFromBase(CapacitanceUnits.Nanofarads);
    }

    /** */
    public get Microfarads(): number {
        if(this.microfaradsLazy !== null){
            return this.microfaradsLazy;
        }
        return this.microfaradsLazy = this.convertFromBase(CapacitanceUnits.Microfarads);
    }

    /** */
    public get Millifarads(): number {
        if(this.millifaradsLazy !== null){
            return this.millifaradsLazy;
        }
        return this.millifaradsLazy = this.convertFromBase(CapacitanceUnits.Millifarads);
    }

    /** */
    public get Kilofarads(): number {
        if(this.kilofaradsLazy !== null){
            return this.kilofaradsLazy;
        }
        return this.kilofaradsLazy = this.convertFromBase(CapacitanceUnits.Kilofarads);
    }

    /** */
    public get Megafarads(): number {
        if(this.megafaradsLazy !== null){
            return this.megafaradsLazy;
        }
        return this.megafaradsLazy = this.convertFromBase(CapacitanceUnits.Megafarads);
    }

    /**
     * Create a new Capacitance instance from a Farads
     *
     * @param value The unit as Farads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromFarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Farads);
    }

    /**
     * Create a new Capacitance instance from a Picofarads
     *
     * @param value The unit as Picofarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromPicofarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Picofarads);
    }

    /**
     * Create a new Capacitance instance from a Nanofarads
     *
     * @param value The unit as Nanofarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromNanofarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Nanofarads);
    }

    /**
     * Create a new Capacitance instance from a Microfarads
     *
     * @param value The unit as Microfarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromMicrofarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Microfarads);
    }

    /**
     * Create a new Capacitance instance from a Millifarads
     *
     * @param value The unit as Millifarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromMillifarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Millifarads);
    }

    /**
     * Create a new Capacitance instance from a Kilofarads
     *
     * @param value The unit as Kilofarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromKilofarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Kilofarads);
    }

    /**
     * Create a new Capacitance instance from a Megafarads
     *
     * @param value The unit as Megafarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    public static FromMegafarads(value: number): Capacitance {
        return new Capacitance(value, CapacitanceUnits.Megafarads);
    }

    private convertFromBase(toUnit: CapacitanceUnits): number {
        switch (toUnit) {
                
            case CapacitanceUnits.Farads:
                return this.value;
            case CapacitanceUnits.Picofarads:
                return (this.value) / 1e-12;
            case CapacitanceUnits.Nanofarads:
                return (this.value) / 1e-9;
            case CapacitanceUnits.Microfarads:
                return (this.value) / 0.000001;
            case CapacitanceUnits.Millifarads:
                return (this.value) / 0.001;
            case CapacitanceUnits.Kilofarads:
                return (this.value) / 1000;
            case CapacitanceUnits.Megafarads:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: CapacitanceUnits): number {
        switch (fromUnit) {
                
            case CapacitanceUnits.Farads:
                return value;
            case CapacitanceUnits.Picofarads:
                return (value) * 1e-12;
            case CapacitanceUnits.Nanofarads:
                return (value) * 1e-9;
            case CapacitanceUnits.Microfarads:
                return (value) * 0.000001;
            case CapacitanceUnits.Millifarads:
                return (value) * 0.001;
            case CapacitanceUnits.Kilofarads:
                return (value) * 1000;
            case CapacitanceUnits.Megafarads:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Capacitance to string.
     * Note! the default format for Capacitance is Farads.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Capacitance.
     * @returns The string format of the Capacitance.
     */
    public toString(unit: CapacitanceUnits = CapacitanceUnits.Farads): string {

        switch (unit) {
            
            case CapacitanceUnits.Farads:
                return this.Farads + ` F`;
            case CapacitanceUnits.Picofarads:
                return this.Picofarads + ` `;
            case CapacitanceUnits.Nanofarads:
                return this.Nanofarads + ` `;
            case CapacitanceUnits.Microfarads:
                return this.Microfarads + ` `;
            case CapacitanceUnits.Millifarads:
                return this.Millifarads + ` `;
            case CapacitanceUnits.Kilofarads:
                return this.Kilofarads + ` `;
            case CapacitanceUnits.Megafarads:
                return this.Megafarads + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Capacitance unit abbreviation.
     * Note! the default abbreviation for Capacitance is Farads.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Capacitance.
     * @returns The abbreviation string of Capacitance.
     */
    public getUnitAbbreviation(unitAbbreviation: CapacitanceUnits = CapacitanceUnits.Farads): string {

        switch (unitAbbreviation) {
            
            case CapacitanceUnits.Farads:
                return `F`;
            case CapacitanceUnits.Picofarads:
                return ``;
            case CapacitanceUnits.Nanofarads:
                return ``;
            case CapacitanceUnits.Microfarads:
                return ``;
            case CapacitanceUnits.Millifarads:
                return ``;
            case CapacitanceUnits.Kilofarads:
                return ``;
            case CapacitanceUnits.Megafarads:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Capacitance are equals to the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns True if the given Capacitance are equal to the current Capacitance.
     */
    public equals(capacitance: Capacitance): boolean {
        return this.value === capacitance.BaseValue;
    }

    /**
     * Compare the given Capacitance against the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns 0 if they are equal, -1 if the current Capacitance is less then other, 1 if the current Capacitance is greater then other.
     */
    public compareTo(capacitance: Capacitance): number {

        if (this.value > capacitance.BaseValue)
            return 1;
        if (this.value < capacitance.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    public add(capacitance: Capacitance): Capacitance {
        return new Capacitance(this.value + capacitance.BaseValue)
    }

    /**
     * Subtract the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    public subtract(capacitance: Capacitance): Capacitance {
        return new Capacitance(this.value - capacitance.BaseValue)
    }

    /**
     * Multiply the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    public multiply(capacitance: Capacitance): Capacitance {
        return new Capacitance(this.value * capacitance.BaseValue)
    }

    /**
     * Divide the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    public divide(capacitance: Capacitance): Capacitance {
        return new Capacitance(this.value / capacitance.BaseValue)
    }

    /**
     * Modulo the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    public modulo(capacitance: Capacitance): Capacitance {
        return new Capacitance(this.value % capacitance.BaseValue)
    }

    /**
     * Pow the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    public pow(capacitance: Capacitance): Capacitance {
        return new Capacitance(this.value ** capacitance.BaseValue)
    }
}
