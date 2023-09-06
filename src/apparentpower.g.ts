/** ApparentPowerUnits enumeration */
export enum ApparentPowerUnits {
    /** */
    Voltamperes,
    /** */
    Microvoltamperes,
    /** */
    Millivoltamperes,
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
    private microvoltamperesLazy: number | null = null;
    private millivoltamperesLazy: number | null = null;
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
    public get Microvoltamperes(): number {
        if(this.microvoltamperesLazy !== null){
            return this.microvoltamperesLazy;
        }
        return this.microvoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Microvoltamperes);
    }

    /** */
    public get Millivoltamperes(): number {
        if(this.millivoltamperesLazy !== null){
            return this.millivoltamperesLazy;
        }
        return this.millivoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Millivoltamperes);
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
     * Create a new ApparentPower instance from a Microvoltamperes
     *
     * @param value The unit as Microvoltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    public static FromMicrovoltamperes(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Microvoltamperes);
    }

    /**
     * Create a new ApparentPower instance from a Millivoltamperes
     *
     * @param value The unit as Millivoltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    public static FromMillivoltamperes(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Millivoltamperes);
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

    /**
     * Convert ApparentPower to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ApparentPowerUnits): number {
        switch (toUnit) {
            case ApparentPowerUnits.Voltamperes: return this.Voltamperes;
            case ApparentPowerUnits.Microvoltamperes: return this.Microvoltamperes;
            case ApparentPowerUnits.Millivoltamperes: return this.Millivoltamperes;
            case ApparentPowerUnits.Kilovoltamperes: return this.Kilovoltamperes;
            case ApparentPowerUnits.Megavoltamperes: return this.Megavoltamperes;
            case ApparentPowerUnits.Gigavoltamperes: return this.Gigavoltamperes;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: ApparentPowerUnits): number {
        switch (toUnit) {
                
            case ApparentPowerUnits.Voltamperes:
                return this.value;
            case ApparentPowerUnits.Microvoltamperes:
                return (this.value) / 0.000001;
            case ApparentPowerUnits.Millivoltamperes:
                return (this.value) / 0.001;
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
            case ApparentPowerUnits.Microvoltamperes:
                return (value) * 0.000001;
            case ApparentPowerUnits.Millivoltamperes:
                return (value) * 0.001;
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
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ApparentPower.
     * @returns The string format of the ApparentPower.
     */
    public toString(unit: ApparentPowerUnits = ApparentPowerUnits.Voltamperes): string {

        switch (unit) {
            
            case ApparentPowerUnits.Voltamperes:
                return this.Voltamperes + ` VA`;
            case ApparentPowerUnits.Microvoltamperes:
                return this.Microvoltamperes + ` μVA`;
            case ApparentPowerUnits.Millivoltamperes:
                return this.Millivoltamperes + ` mVA`;
            case ApparentPowerUnits.Kilovoltamperes:
                return this.Kilovoltamperes + ` kVA`;
            case ApparentPowerUnits.Megavoltamperes:
                return this.Megavoltamperes + ` MVA`;
            case ApparentPowerUnits.Gigavoltamperes:
                return this.Gigavoltamperes + ` GVA`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ApparentPower unit abbreviation.
     * Note! the default abbreviation for ApparentPower is Voltamperes.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ApparentPower.
     * @returns The abbreviation string of ApparentPower.
     */
    public getUnitAbbreviation(unitAbbreviation: ApparentPowerUnits = ApparentPowerUnits.Voltamperes): string {

        switch (unitAbbreviation) {
            
            case ApparentPowerUnits.Voltamperes:
                return `VA`;
            case ApparentPowerUnits.Microvoltamperes:
                return `μVA`;
            case ApparentPowerUnits.Millivoltamperes:
                return `mVA`;
            case ApparentPowerUnits.Kilovoltamperes:
                return `kVA`;
            case ApparentPowerUnits.Megavoltamperes:
                return `MVA`;
            case ApparentPowerUnits.Gigavoltamperes:
                return `GVA`;
        default:
            break;
        }
        return '';
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
