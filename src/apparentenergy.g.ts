/** ApparentEnergyUnits enumeration */
export enum ApparentEnergyUnits {
    /** */
    VoltampereHours,
    /** */
    KilovoltampereHours,
    /** */
    MegavoltampereHours
}

/** A unit for expressing the integral of apparent power over time, equal to the product of 1 volt-ampere and 1 hour, or to 3600 joules. */
export class ApparentEnergy {
    private value: number;
    private voltamperehoursLazy: number | null = null;
    private kilovoltamperehoursLazy: number | null = null;
    private megavoltamperehoursLazy: number | null = null;

    /**
     * Create a new ApparentEnergy.
     * @param value The value.
     * @param fromUnit The ‘ApparentEnergy’ unit to create from.
     * The default unit is VoltampereHours
     */
    public constructor(value: number, fromUnit: ApparentEnergyUnits = ApparentEnergyUnits.VoltampereHours) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ApparentEnergy is VoltampereHours.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get VoltampereHours(): number {
        if(this.voltamperehoursLazy !== null){
            return this.voltamperehoursLazy;
        }
        return this.voltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.VoltampereHours);
    }

    /** */
    public get KilovoltampereHours(): number {
        if(this.kilovoltamperehoursLazy !== null){
            return this.kilovoltamperehoursLazy;
        }
        return this.kilovoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.KilovoltampereHours);
    }

    /** */
    public get MegavoltampereHours(): number {
        if(this.megavoltamperehoursLazy !== null){
            return this.megavoltamperehoursLazy;
        }
        return this.megavoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.MegavoltampereHours);
    }

    /**
     * Create a new ApparentEnergy instance from a VoltampereHours
     *
     * @param value The unit as VoltampereHours to create a new ApparentEnergy from.
     * @returns The new ApparentEnergy instance.
     */
    public static FromVoltampereHours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.VoltampereHours);
    }

    /**
     * Create a new ApparentEnergy instance from a KilovoltampereHours
     *
     * @param value The unit as KilovoltampereHours to create a new ApparentEnergy from.
     * @returns The new ApparentEnergy instance.
     */
    public static FromKilovoltampereHours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.KilovoltampereHours);
    }

    /**
     * Create a new ApparentEnergy instance from a MegavoltampereHours
     *
     * @param value The unit as MegavoltampereHours to create a new ApparentEnergy from.
     * @returns The new ApparentEnergy instance.
     */
    public static FromMegavoltampereHours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.MegavoltampereHours);
    }

    private convertFromBase(toUnit: ApparentEnergyUnits): number {
        switch (toUnit) {
                
            case ApparentEnergyUnits.VoltampereHours:
                return this.value;
            case ApparentEnergyUnits.KilovoltampereHours:
                return (this.value) / 1000;
            case ApparentEnergyUnits.MegavoltampereHours:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ApparentEnergyUnits): number {
        switch (fromUnit) {
                
            case ApparentEnergyUnits.VoltampereHours:
                return value;
            case ApparentEnergyUnits.KilovoltampereHours:
                return (value) * 1000;
            case ApparentEnergyUnits.MegavoltampereHours:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ApparentEnergy to string.
     * Note! the default format for ApparentEnergy is VoltampereHours.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ApparentEnergy.
     * @returns The string format of the ApparentEnergy.
     */
    public toString(unit: ApparentEnergyUnits = ApparentEnergyUnits.VoltampereHours): string {

        switch (unit) {
            
            case ApparentEnergyUnits.VoltampereHours:
                return this.VoltampereHours + ` VAh`;
            case ApparentEnergyUnits.KilovoltampereHours:
                return this.KilovoltampereHours + ` `;
            case ApparentEnergyUnits.MegavoltampereHours:
                return this.MegavoltampereHours + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ApparentEnergy unit abbreviation.
     * Note! the default abbreviation for ApparentEnergy is VoltampereHours.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ApparentEnergy.
     * @returns The abbreviation string of ApparentEnergy.
     */
    public getUnitAbbreviation(unitAbbreviation: ApparentEnergyUnits = ApparentEnergyUnits.VoltampereHours): string {

        switch (unitAbbreviation) {
            
            case ApparentEnergyUnits.VoltampereHours:
                return `VAh`;
            case ApparentEnergyUnits.KilovoltampereHours:
                return ``;
            case ApparentEnergyUnits.MegavoltampereHours:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ApparentEnergy are equals to the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns True if the given ApparentEnergy are equal to the current ApparentEnergy.
     */
    public equals(apparentEnergy: ApparentEnergy): boolean {
        return this.value === apparentEnergy.BaseValue;
    }

    /**
     * Compare the given ApparentEnergy against the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns 0 if they are equal, -1 if the current ApparentEnergy is less then other, 1 if the current ApparentEnergy is greater then other.
     */
    public compareTo(apparentEnergy: ApparentEnergy): number {

        if (this.value > apparentEnergy.BaseValue)
            return 1;
        if (this.value < apparentEnergy.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    public add(apparentEnergy: ApparentEnergy): ApparentEnergy {
        return new ApparentEnergy(this.value + apparentEnergy.BaseValue)
    }

    /**
     * Subtract the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    public subtract(apparentEnergy: ApparentEnergy): ApparentEnergy {
        return new ApparentEnergy(this.value - apparentEnergy.BaseValue)
    }

    /**
     * Multiply the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    public multiply(apparentEnergy: ApparentEnergy): ApparentEnergy {
        return new ApparentEnergy(this.value * apparentEnergy.BaseValue)
    }

    /**
     * Divide the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    public divide(apparentEnergy: ApparentEnergy): ApparentEnergy {
        return new ApparentEnergy(this.value / apparentEnergy.BaseValue)
    }

    /**
     * Modulo the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    public modulo(apparentEnergy: ApparentEnergy): ApparentEnergy {
        return new ApparentEnergy(this.value % apparentEnergy.BaseValue)
    }

    /**
     * Pow the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    public pow(apparentEnergy: ApparentEnergy): ApparentEnergy {
        return new ApparentEnergy(this.value ** apparentEnergy.BaseValue)
    }
}
