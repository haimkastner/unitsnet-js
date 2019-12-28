/** ApparentPowerUnits enumeration */
export enum ApparentPowerUnits {
    /** */
    Voltamperes,
    /** */
    Kilovoltamperes,
    /** */
    Megavoltamperes,
    /** */
    Gigavoltamperes
}

/** Power engineers measure apparent power as the magnitude of the vector sum of active and reactive power. Apparent power is the product of the root-mean-square of voltage and current. */
export class ApparentPower {
    private value: number;
    private voltamperesLazy: number | null = null;
    private kilovoltamperesLazy: number | null = null;
    private megavoltamperesLazy: number | null = null;
    private gigavoltamperesLazy: number | null = null;

    /**
     * Create a new ApparentPower.
     * @param value The value.
     * @param fromUnit The ‘ApparentPower’ unit to create from.
     * The default unit is Voltamperes
     */
    public constructor(value: number, fromUnit: ApparentPowerUnits = ApparentPowerUnits.Voltamperes) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ApparentPower is Voltamperes.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Voltamperes(): number {
        if(this.voltamperesLazy !== null){
            return this.voltamperesLazy;
        }
        return this.voltamperesLazy = this.convertFromBase(ApparentPowerUnits.Voltamperes);
    }

    /** */
    public get Kilovoltamperes(): number {
        if(this.kilovoltamperesLazy !== null){
            return this.kilovoltamperesLazy;
        }
        return this.kilovoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Kilovoltamperes);
    }

    /** */
    public get Megavoltamperes(): number {
        if(this.megavoltamperesLazy !== null){
            return this.megavoltamperesLazy;
        }
        return this.megavoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Megavoltamperes);
    }

    /** */
    public get Gigavoltamperes(): number {
        if(this.gigavoltamperesLazy !== null){
            return this.gigavoltamperesLazy;
        }
        return this.gigavoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Gigavoltamperes);
    }

    /**
     * Create a new ApparentPower instance from a Voltamperes
     *
     * @param value The unit as Voltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    public static FromVoltamperes(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Voltamperes);
    }

    /**
     * Create a new ApparentPower instance from a Kilovoltamperes
     *
     * @param value The unit as Kilovoltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    public static FromKilovoltamperes(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Kilovoltamperes);
    }

    /**
     * Create a new ApparentPower instance from a Megavoltamperes
     *
     * @param value The unit as Megavoltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    public static FromMegavoltamperes(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Megavoltamperes);
    }

    /**
     * Create a new ApparentPower instance from a Gigavoltamperes
     *
     * @param value The unit as Gigavoltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    public static FromGigavoltamperes(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Gigavoltamperes);
    }

    private convertFromBase(toUnit: ApparentPowerUnits): number {
        switch (toUnit) {
                
            case ApparentPowerUnits.Voltamperes:
                return this.value;
            case ApparentPowerUnits.Kilovoltamperes:
                return (this.value) / 1000;
            case ApparentPowerUnits.Megavoltamperes:
                return (this.value) / 1000000;
            case ApparentPowerUnits.Gigavoltamperes:
                return (this.value) / 1000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ApparentPowerUnits): number {
        switch (fromUnit) {
                
            case ApparentPowerUnits.Voltamperes:
                return value;
            case ApparentPowerUnits.Kilovoltamperes:
                return (value) * 1000;
            case ApparentPowerUnits.Megavoltamperes:
                return (value) * 1000000;
            case ApparentPowerUnits.Gigavoltamperes:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ApparentPower to string.
     * Note! the default format for ApparentPower is Voltamperes.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ApparentPower.
     * @returns The string format of the ApparentPower.
     */
    public toString(toUnit: ApparentPowerUnits = ApparentPowerUnits.Voltamperes): string {

        switch (toUnit) {
            
            case ApparentPowerUnits.Voltamperes:
                return this.Voltamperes + ` VA`;
            case ApparentPowerUnits.Kilovoltamperes:
                return this.Kilovoltamperes + ` `;
            case ApparentPowerUnits.Megavoltamperes:
                return this.Megavoltamperes + ` `;
            case ApparentPowerUnits.Gigavoltamperes:
                return this.Gigavoltamperes + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given ApparentPower are equals to the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns True if the given ApparentPower are equal to the current ApparentPower.
     */
    public equals(apparentPower: ApparentPower): boolean {
        return this.value === apparentPower.BaseValue;
    }

    /**
     * Compare the given ApparentPower against the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns 0 if they are equal, -1 if the current ApparentPower is less then other, 1 if the current ApparentPower is greater then other.
     */
    public compareTo(apparentPower: ApparentPower): number {

        if (this.value > apparentPower.BaseValue)
            return 1;
        if (this.value < apparentPower.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ApparentPower with the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns A new ApparentPower instance with the results.
     */
    public add(apparentPower: ApparentPower): ApparentPower {
        return new ApparentPower(this.value + apparentPower.BaseValue)
    }

    /**
     * Subtract the given ApparentPower with the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns A new ApparentPower instance with the results.
     */
    public subtract(apparentPower: ApparentPower): ApparentPower {
        return new ApparentPower(this.value - apparentPower.BaseValue)
    }

    /**
     * Multiply the given ApparentPower with the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns A new ApparentPower instance with the results.
     */
    public multiply(apparentPower: ApparentPower): ApparentPower {
        return new ApparentPower(this.value * apparentPower.BaseValue)
    }

    /**
     * Divide the given ApparentPower with the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns A new ApparentPower instance with the results.
     */
    public divide(apparentPower: ApparentPower): ApparentPower {
        return new ApparentPower(this.value / apparentPower.BaseValue)
    }

    /**
     * Modulo the given ApparentPower with the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns A new ApparentPower instance with the results.
     */
    public modulo(apparentPower: ApparentPower): ApparentPower {
        return new ApparentPower(this.value % apparentPower.BaseValue)
    }

    /**
     * Pow the given ApparentPower with the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns A new ApparentPower instance with the results.
     */
    public pow(apparentPower: ApparentPower): ApparentPower {
        return new ApparentPower(this.value ** apparentPower.BaseValue)
    }
}
