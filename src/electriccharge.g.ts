/** ElectricChargeUnits enumeration */
export enum ElectricChargeUnits {
    /** */
    Coulombs,
    /** */
    AmpereHours,
    /** */
    KiloampereHours,
    /** */
    MegaampereHours
}

/** Electric charge is the physical property of matter that causes it to experience a force when placed in an electromagnetic field. */
export class ElectricCharge {
    private value: number;
    private coulombsLazy: number | null = null;
    private amperehoursLazy: number | null = null;
    private kiloamperehoursLazy: number | null = null;
    private megaamperehoursLazy: number | null = null;

    /**
     * Create a new ElectricCharge.
     * @param value The value.
     * @param fromUnit The ‘ElectricCharge’ unit to create from.
     * The default unit is Coulombs
     */
    public constructor(value: number, fromUnit: ElectricChargeUnits = ElectricChargeUnits.Coulombs) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricCharge is Coulombs.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Coulombs(): number {
        if(this.coulombsLazy !== null){
            return this.coulombsLazy;
        }
        return this.coulombsLazy = this.convertFromBase(ElectricChargeUnits.Coulombs);
    }

    /** */
    public get AmpereHours(): number {
        if(this.amperehoursLazy !== null){
            return this.amperehoursLazy;
        }
        return this.amperehoursLazy = this.convertFromBase(ElectricChargeUnits.AmpereHours);
    }

    /** */
    public get KiloampereHours(): number {
        if(this.kiloamperehoursLazy !== null){
            return this.kiloamperehoursLazy;
        }
        return this.kiloamperehoursLazy = this.convertFromBase(ElectricChargeUnits.KiloampereHours);
    }

    /** */
    public get MegaampereHours(): number {
        if(this.megaamperehoursLazy !== null){
            return this.megaamperehoursLazy;
        }
        return this.megaamperehoursLazy = this.convertFromBase(ElectricChargeUnits.MegaampereHours);
    }

    /**
     * Create a new ElectricCharge instance from a Coulombs
     *
     * @param value The unit as Coulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromCoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Coulombs);
    }

    /**
     * Create a new ElectricCharge instance from a AmpereHours
     *
     * @param value The unit as AmpereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromAmpereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.AmpereHours);
    }

    /**
     * Create a new ElectricCharge instance from a KiloampereHours
     *
     * @param value The unit as KiloampereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromKiloampereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.KiloampereHours);
    }

    /**
     * Create a new ElectricCharge instance from a MegaampereHours
     *
     * @param value The unit as MegaampereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromMegaampereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.MegaampereHours);
    }

    private convertFromBase(toUnit: ElectricChargeUnits): number {
        switch (toUnit) {
                
            case ElectricChargeUnits.Coulombs:
                return this.value;
            case ElectricChargeUnits.AmpereHours:
                return this.value*2.77777777777e-4;
            case ElectricChargeUnits.KiloampereHours:
                return (this.value*2.77777777777e-4) / 1000;
            case ElectricChargeUnits.MegaampereHours:
                return (this.value*2.77777777777e-4) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricChargeUnits): number {
        switch (fromUnit) {
                
            case ElectricChargeUnits.Coulombs:
                return value;
            case ElectricChargeUnits.AmpereHours:
                return value/2.77777777777e-4;
            case ElectricChargeUnits.KiloampereHours:
                return (value/2.77777777777e-4) * 1000;
            case ElectricChargeUnits.MegaampereHours:
                return (value/2.77777777777e-4) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricCharge to string.
     * Note! the default format for ElectricCharge is Coulombs.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricCharge.
     * @returns The string format of the ElectricCharge.
     */
    public toString(toUnit: ElectricChargeUnits = ElectricChargeUnits.Coulombs): string {

        switch (toUnit) {
            
            case ElectricChargeUnits.Coulombs:
                return this.Coulombs + ` C`;
            case ElectricChargeUnits.AmpereHours:
                return this.AmpereHours + ` A-h`;
            case ElectricChargeUnits.KiloampereHours:
                return this.KiloampereHours + ` `;
            case ElectricChargeUnits.MegaampereHours:
                return this.MegaampereHours + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given ElectricCharge are equals to the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns True if the given ElectricCharge are equal to the current ElectricCharge.
     */
    public equals(electricCharge: ElectricCharge): boolean {
        return this.value === electricCharge.BaseValue;
    }

    /**
     * Compare the given ElectricCharge against the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns 0 if they are equal, -1 if the current ElectricCharge is less then other, 1 if the current ElectricCharge is greater then other.
     */
    public compareTo(electricCharge: ElectricCharge): number {

        if (this.value > electricCharge.BaseValue)
            return 1;
        if (this.value < electricCharge.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public add(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(this.value + electricCharge.BaseValue)
    }

    /**
     * Subtract the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public subtract(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(this.value - electricCharge.BaseValue)
    }

    /**
     * Multiply the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public multiply(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(this.value * electricCharge.BaseValue)
    }

    /**
     * Divide the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public divide(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(this.value / electricCharge.BaseValue)
    }

    /**
     * Modulo the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public modulo(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(this.value % electricCharge.BaseValue)
    }

    /**
     * Pow the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public pow(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(this.value ** electricCharge.BaseValue)
    }
}
