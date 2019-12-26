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
    private kilofaradsLazy: number | null = null;
    private megafaradsLazy: number | null = null;

    /**
     * Create a new Capacitance.
     * @param value The value.
     * @param fromUnit The ‘Capacitance’ unit to create from.
     */
    public constructor(value: number, fromUnit: CapacitanceUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Capacitance is Farad.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Capacitance.
     * @returns The string format of the Capacitance.
     */
    public toString(toUnit: CapacitanceUnits = CapacitanceUnits.Farads): string {

        switch (toUnit) {
            
            case CapacitanceUnits.Farads:
                return this.Farads + ` F`;
            case CapacitanceUnits.Picofarads:
                return this.Picofarads + ` F`;
            case CapacitanceUnits.Nanofarads:
                return this.Nanofarads + ` F`;
            case CapacitanceUnits.Microfarads:
                return this.Microfarads + ` F`;
            case CapacitanceUnits.Kilofarads:
                return this.Kilofarads + ` F`;
            case CapacitanceUnits.Megafarads:
                return this.Megafarads + ` F`;
        default:
            break;
        }
        return this.value.toString();
    }
}
