/** ElectricPotentialDcUnits enumeration */
export enum ElectricPotentialDcUnits {
    /** */
    VoltsDc,
    /** */
    MicrovoltsDc,
    /** */
    KilovoltsDc,
    /** */
    MegavoltsDc
}

/** The Electric Potential of a system known to use Direct Current. */
export class ElectricPotentialDc {
    private value: number;
    private voltsdcLazy: number | null = null;
    private microvoltsdcLazy: number | null = null;
    private kilovoltsdcLazy: number | null = null;
    private megavoltsdcLazy: number | null = null;

    /**
     * Create a new ElectricPotentialDc.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotentialDc’ unit to create from.
     * The default unit is VoltsDc
     */
    public constructor(value: number, fromUnit: ElectricPotentialDcUnits = ElectricPotentialDcUnits.VoltsDc) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricPotentialDc is VoltsDc.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get VoltsDc(): number {
        if(this.voltsdcLazy !== null){
            return this.voltsdcLazy;
        }
        return this.voltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.VoltsDc);
    }

    /** */
    public get MicrovoltsDc(): number {
        if(this.microvoltsdcLazy !== null){
            return this.microvoltsdcLazy;
        }
        return this.microvoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MicrovoltsDc);
    }

    /** */
    public get KilovoltsDc(): number {
        if(this.kilovoltsdcLazy !== null){
            return this.kilovoltsdcLazy;
        }
        return this.kilovoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.KilovoltsDc);
    }

    /** */
    public get MegavoltsDc(): number {
        if(this.megavoltsdcLazy !== null){
            return this.megavoltsdcLazy;
        }
        return this.megavoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MegavoltsDc);
    }

    /**
     * Create a new ElectricPotentialDc instance from a VoltsDc
     *
     * @param value The unit as VoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    public static FromVoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.VoltsDc);
    }

    /**
     * Create a new ElectricPotentialDc instance from a MicrovoltsDc
     *
     * @param value The unit as MicrovoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    public static FromMicrovoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MicrovoltsDc);
    }

    /**
     * Create a new ElectricPotentialDc instance from a KilovoltsDc
     *
     * @param value The unit as KilovoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    public static FromKilovoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.KilovoltsDc);
    }

    /**
     * Create a new ElectricPotentialDc instance from a MegavoltsDc
     *
     * @param value The unit as MegavoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    public static FromMegavoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MegavoltsDc);
    }

    private convertFromBase(toUnit: ElectricPotentialDcUnits): number {
        switch (toUnit) {
                
            case ElectricPotentialDcUnits.VoltsDc:
                return this.value;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return (this.value) / 0.000001;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return (this.value) / 1000;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricPotentialDcUnits): number {
        switch (fromUnit) {
                
            case ElectricPotentialDcUnits.VoltsDc:
                return value;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return (value) * 0.000001;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return (value) * 1000;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricPotentialDc to string.
     * Note! the default format for ElectricPotentialDc is VoltsDc.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricPotentialDc.
     * @returns The string format of the ElectricPotentialDc.
     */
    public toString(toUnit: ElectricPotentialDcUnits = ElectricPotentialDcUnits.VoltsDc): string {

        switch (toUnit) {
            
            case ElectricPotentialDcUnits.VoltsDc:
                return this.VoltsDc + ` Vdc`;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return this.MicrovoltsDc + ` `;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return this.KilovoltsDc + ` `;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return this.MegavoltsDc + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given ElectricPotentialDc are equals to the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns True if the given ElectricPotentialDc are equal to the current ElectricPotentialDc.
     */
    public equals(electricPotentialDc: ElectricPotentialDc): boolean {
        return this.value === electricPotentialDc.BaseValue;
    }

    /**
     * Compare the given ElectricPotentialDc against the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns 0 if they are equal, -1 if the current ElectricPotentialDc is less then other, 1 if the current ElectricPotentialDc is greater then other.
     */
    public compareTo(electricPotentialDc: ElectricPotentialDc): number {

        if (this.value > electricPotentialDc.BaseValue)
            return 1;
        if (this.value < electricPotentialDc.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    public add(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc {
        return new ElectricPotentialDc(this.value + electricPotentialDc.BaseValue)
    }

    /**
     * Subtract the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    public subtract(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc {
        return new ElectricPotentialDc(this.value - electricPotentialDc.BaseValue)
    }

    /**
     * Multiply the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    public multiply(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc {
        return new ElectricPotentialDc(this.value * electricPotentialDc.BaseValue)
    }

    /**
     * Divide the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    public divide(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc {
        return new ElectricPotentialDc(this.value / electricPotentialDc.BaseValue)
    }

    /**
     * Modulo the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    public modulo(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc {
        return new ElectricPotentialDc(this.value % electricPotentialDc.BaseValue)
    }

    /**
     * Pow the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    public pow(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc {
        return new ElectricPotentialDc(this.value ** electricPotentialDc.BaseValue)
    }
}
