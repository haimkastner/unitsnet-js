/** ElectricPotentialAcUnits enumeration */
export enum ElectricPotentialAcUnits {
    /** */
    VoltsAc,
    /** */
    MicrovoltsAc,
    /** */
    KilovoltsAc,
    /** */
    MegavoltsAc
}

/** The Electric Potential of a system known to use Alternating Current. */
export class ElectricPotentialAc {
    private value: number;
    private voltsacLazy: number | null = null;
    private microvoltsacLazy: number | null = null;
    private kilovoltsacLazy: number | null = null;
    private megavoltsacLazy: number | null = null;

    /**
     * Create a new ElectricPotentialAc.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotentialAc’ unit to create from.
     */
    public constructor(value: number, fromUnit: ElectricPotentialAcUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricPotentialAc is VoltAc.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get VoltsAc(): number {
        if(this.voltsacLazy !== null){
            return this.voltsacLazy;
        }
        return this.voltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.VoltsAc);
    }

    /** */
    public get MicrovoltsAc(): number {
        if(this.microvoltsacLazy !== null){
            return this.microvoltsacLazy;
        }
        return this.microvoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.MicrovoltsAc);
    }

    /** */
    public get KilovoltsAc(): number {
        if(this.kilovoltsacLazy !== null){
            return this.kilovoltsacLazy;
        }
        return this.kilovoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.KilovoltsAc);
    }

    /** */
    public get MegavoltsAc(): number {
        if(this.megavoltsacLazy !== null){
            return this.megavoltsacLazy;
        }
        return this.megavoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.MegavoltsAc);
    }

    /**
     * Create a new ElectricPotentialAc instance from a VoltsAc
     *
     * @param value The unit as VoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    public static FromVoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.VoltsAc);
    }

    /**
     * Create a new ElectricPotentialAc instance from a MicrovoltsAc
     *
     * @param value The unit as MicrovoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    public static FromMicrovoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MicrovoltsAc);
    }

    /**
     * Create a new ElectricPotentialAc instance from a KilovoltsAc
     *
     * @param value The unit as KilovoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    public static FromKilovoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.KilovoltsAc);
    }

    /**
     * Create a new ElectricPotentialAc instance from a MegavoltsAc
     *
     * @param value The unit as MegavoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    public static FromMegavoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MegavoltsAc);
    }

    private convertFromBase(toUnit: ElectricPotentialAcUnits): number {
        switch (toUnit) {
                
            case ElectricPotentialAcUnits.VoltsAc:
                return this.value;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return (this.value) / 0.000001;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return (this.value) / 1000;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricPotentialAcUnits): number {
        switch (fromUnit) {
                
            case ElectricPotentialAcUnits.VoltsAc:
                return value;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return (value) * 0.000001;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return (value) * 1000;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricPotentialAc to string.
     * Note! the default format for ElectricPotentialAc is VoltsAc.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricPotentialAc.
     * @returns The string format of the ElectricPotentialAc.
     */
    public toString(toUnit: ElectricPotentialAcUnits = ElectricPotentialAcUnits.VoltsAc): string {

        switch (toUnit) {
            
            case ElectricPotentialAcUnits.VoltsAc:
                return this.VoltsAc + ` Vac`;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return this.MicrovoltsAc + ` Vac`;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return this.KilovoltsAc + ` Vac`;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return this.MegavoltsAc + ` Vac`;
        default:
            break;
        }
        return this.value.toString();
    }
}
