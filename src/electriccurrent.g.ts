/** ElectricCurrentUnits enumeration */
export enum ElectricCurrentUnits {
    /** */
    Amperes,
    /** */
    Picoamperes,
    /** */
    Nanoamperes,
    /** */
    Microamperes,
    /** */
    Centiamperes,
    /** */
    Kiloamperes,
    /** */
    Megaamperes
}

/** An electric current is a flow of electric charge. In electric circuits this charge is often carried by moving electrons in a wire. It can also be carried by ions in an electrolyte, or by both ions and electrons such as in a plasma. */
export class ElectricCurrent {
    private value: number;
    private amperesLazy: number | null = null;
    private picoamperesLazy: number | null = null;
    private nanoamperesLazy: number | null = null;
    private microamperesLazy: number | null = null;
    private centiamperesLazy: number | null = null;
    private kiloamperesLazy: number | null = null;
    private megaamperesLazy: number | null = null;

    /**
     * Create a new ElectricCurrent.
     * @param value The value.
     * @param fromUnit The ‘ElectricCurrent’ unit to create from.
     */
    public constructor(value: number, fromUnit: ElectricCurrentUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricCurrent is Ampere.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Amperes(): number {
        if(this.amperesLazy !== null){
            return this.amperesLazy;
        }
        return this.amperesLazy = this.convertFromBase(ElectricCurrentUnits.Amperes);
    }

    /** */
    public get Picoamperes(): number {
        if(this.picoamperesLazy !== null){
            return this.picoamperesLazy;
        }
        return this.picoamperesLazy = this.convertFromBase(ElectricCurrentUnits.Picoamperes);
    }

    /** */
    public get Nanoamperes(): number {
        if(this.nanoamperesLazy !== null){
            return this.nanoamperesLazy;
        }
        return this.nanoamperesLazy = this.convertFromBase(ElectricCurrentUnits.Nanoamperes);
    }

    /** */
    public get Microamperes(): number {
        if(this.microamperesLazy !== null){
            return this.microamperesLazy;
        }
        return this.microamperesLazy = this.convertFromBase(ElectricCurrentUnits.Microamperes);
    }

    /** */
    public get Centiamperes(): number {
        if(this.centiamperesLazy !== null){
            return this.centiamperesLazy;
        }
        return this.centiamperesLazy = this.convertFromBase(ElectricCurrentUnits.Centiamperes);
    }

    /** */
    public get Kiloamperes(): number {
        if(this.kiloamperesLazy !== null){
            return this.kiloamperesLazy;
        }
        return this.kiloamperesLazy = this.convertFromBase(ElectricCurrentUnits.Kiloamperes);
    }

    /** */
    public get Megaamperes(): number {
        if(this.megaamperesLazy !== null){
            return this.megaamperesLazy;
        }
        return this.megaamperesLazy = this.convertFromBase(ElectricCurrentUnits.Megaamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Amperes
     *
     * @param value The unit as Amperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromAmperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Amperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Picoamperes
     *
     * @param value The unit as Picoamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromPicoamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Picoamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Nanoamperes
     *
     * @param value The unit as Nanoamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromNanoamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Nanoamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Microamperes
     *
     * @param value The unit as Microamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromMicroamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Microamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Centiamperes
     *
     * @param value The unit as Centiamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromCentiamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Centiamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Kiloamperes
     *
     * @param value The unit as Kiloamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromKiloamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Kiloamperes);
    }

    /**
     * Create a new ElectricCurrent instance from a Megaamperes
     *
     * @param value The unit as Megaamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    public static FromMegaamperes(value: number): ElectricCurrent {
        return new ElectricCurrent(value, ElectricCurrentUnits.Megaamperes);
    }

    private convertFromBase(toUnit: ElectricCurrentUnits): number {
        switch (toUnit) {
                
            case ElectricCurrentUnits.Amperes:
                return this.value;
            case ElectricCurrentUnits.Picoamperes:
                return (this.value) / 1e-12;
            case ElectricCurrentUnits.Nanoamperes:
                return (this.value) / 1e-9;
            case ElectricCurrentUnits.Microamperes:
                return (this.value) / 0.000001;
            case ElectricCurrentUnits.Centiamperes:
                return (this.value) / 0.01;
            case ElectricCurrentUnits.Kiloamperes:
                return (this.value) / 1000;
            case ElectricCurrentUnits.Megaamperes:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricCurrentUnits): number {
        switch (fromUnit) {
                
            case ElectricCurrentUnits.Amperes:
                return value;
            case ElectricCurrentUnits.Picoamperes:
                return (value) * 1e-12;
            case ElectricCurrentUnits.Nanoamperes:
                return (value) * 1e-9;
            case ElectricCurrentUnits.Microamperes:
                return (value) * 0.000001;
            case ElectricCurrentUnits.Centiamperes:
                return (value) * 0.01;
            case ElectricCurrentUnits.Kiloamperes:
                return (value) * 1000;
            case ElectricCurrentUnits.Megaamperes:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricCurrent to string.
     * Note! the default format for ElectricCurrent is Amperes.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricCurrent.
     * @returns The string format of the ElectricCurrent.
     */
    public toString(toUnit: ElectricCurrentUnits = ElectricCurrentUnits.Amperes): string {

        switch (toUnit) {
            
            case ElectricCurrentUnits.Amperes:
                return this.Amperes + ` A`;
            case ElectricCurrentUnits.Picoamperes:
                return this.Picoamperes + ` A`;
            case ElectricCurrentUnits.Nanoamperes:
                return this.Nanoamperes + ` A`;
            case ElectricCurrentUnits.Microamperes:
                return this.Microamperes + ` A`;
            case ElectricCurrentUnits.Centiamperes:
                return this.Centiamperes + ` A`;
            case ElectricCurrentUnits.Kiloamperes:
                return this.Kiloamperes + ` A`;
            case ElectricCurrentUnits.Megaamperes:
                return this.Megaamperes + ` A`;
        default:
            break;
        }
        return this.value.toString();
    }
}
