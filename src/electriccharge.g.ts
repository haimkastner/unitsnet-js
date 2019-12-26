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
     */
    public constructor(value: number, fromUnit: ElectricChargeUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricCharge is Coulomb.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
                return this.KiloampereHours + ` A-h`;
            case ElectricChargeUnits.MegaampereHours:
                return this.MegaampereHours + ` A-h`;
        default:
            break;
        }
        return this.value.toString();
    }
}
