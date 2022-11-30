/** SpecificFuelConsumptionUnits enumeration */
export enum SpecificFuelConsumptionUnits {
    /** */
    PoundsMassPerPoundForceHour,
    /** */
    KilogramsPerKilogramForceHour,
    /** */
    GramsPerKiloNewtonSecond,
    /** */
    KilogramsPerKiloNewtonSecond
}

/** SFC is the fuel efficiency of an engine design with respect to thrust output */
export class SpecificFuelConsumption {
    private value: number;
    private poundsmassperpoundforcehourLazy: number | null = null;
    private kilogramsperkilogramforcehourLazy: number | null = null;
    private gramsperkilonewtonsecondLazy: number | null = null;
    private kilogramsperkilonewtonsecondLazy: number | null = null;

    /**
     * Create a new SpecificFuelConsumption.
     * @param value The value.
     * @param fromUnit The ‘SpecificFuelConsumption’ unit to create from.
     * The default unit is GramsPerKiloNewtonSecond
     */
    public constructor(value: number, fromUnit: SpecificFuelConsumptionUnits = SpecificFuelConsumptionUnits.GramsPerKiloNewtonSecond) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of SpecificFuelConsumption is GramsPerKiloNewtonSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get PoundsMassPerPoundForceHour(): number {
        if(this.poundsmassperpoundforcehourLazy !== null){
            return this.poundsmassperpoundforcehourLazy;
        }
        return this.poundsmassperpoundforcehourLazy = this.convertFromBase(SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour);
    }

    /** */
    public get KilogramsPerKilogramForceHour(): number {
        if(this.kilogramsperkilogramforcehourLazy !== null){
            return this.kilogramsperkilogramforcehourLazy;
        }
        return this.kilogramsperkilogramforcehourLazy = this.convertFromBase(SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour);
    }

    /** */
    public get GramsPerKiloNewtonSecond(): number {
        if(this.gramsperkilonewtonsecondLazy !== null){
            return this.gramsperkilonewtonsecondLazy;
        }
        return this.gramsperkilonewtonsecondLazy = this.convertFromBase(SpecificFuelConsumptionUnits.GramsPerKiloNewtonSecond);
    }

    /** */
    public get KilogramsPerKiloNewtonSecond(): number {
        if(this.kilogramsperkilonewtonsecondLazy !== null){
            return this.kilogramsperkilonewtonsecondLazy;
        }
        return this.kilogramsperkilonewtonsecondLazy = this.convertFromBase(SpecificFuelConsumptionUnits.KilogramsPerKiloNewtonSecond);
    }

    /**
     * Create a new SpecificFuelConsumption instance from a PoundsMassPerPoundForceHour
     *
     * @param value The unit as PoundsMassPerPoundForceHour to create a new SpecificFuelConsumption from.
     * @returns The new SpecificFuelConsumption instance.
     */
    public static FromPoundsMassPerPoundForceHour(value: number): SpecificFuelConsumption {
        return new SpecificFuelConsumption(value, SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour);
    }

    /**
     * Create a new SpecificFuelConsumption instance from a KilogramsPerKilogramForceHour
     *
     * @param value The unit as KilogramsPerKilogramForceHour to create a new SpecificFuelConsumption from.
     * @returns The new SpecificFuelConsumption instance.
     */
    public static FromKilogramsPerKilogramForceHour(value: number): SpecificFuelConsumption {
        return new SpecificFuelConsumption(value, SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour);
    }

    /**
     * Create a new SpecificFuelConsumption instance from a GramsPerKiloNewtonSecond
     *
     * @param value The unit as GramsPerKiloNewtonSecond to create a new SpecificFuelConsumption from.
     * @returns The new SpecificFuelConsumption instance.
     */
    public static FromGramsPerKiloNewtonSecond(value: number): SpecificFuelConsumption {
        return new SpecificFuelConsumption(value, SpecificFuelConsumptionUnits.GramsPerKiloNewtonSecond);
    }

    /**
     * Create a new SpecificFuelConsumption instance from a KilogramsPerKiloNewtonSecond
     *
     * @param value The unit as KilogramsPerKiloNewtonSecond to create a new SpecificFuelConsumption from.
     * @returns The new SpecificFuelConsumption instance.
     */
    public static FromKilogramsPerKiloNewtonSecond(value: number): SpecificFuelConsumption {
        return new SpecificFuelConsumption(value, SpecificFuelConsumptionUnits.KilogramsPerKiloNewtonSecond);
    }

    private convertFromBase(toUnit: SpecificFuelConsumptionUnits): number {
        switch (toUnit) {
                
            case SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour:
                return this.value / 28.33;
            case SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour:
                return this.value / 28.33;
            case SpecificFuelConsumptionUnits.GramsPerKiloNewtonSecond:
                return this.value;
            case SpecificFuelConsumptionUnits.KilogramsPerKiloNewtonSecond:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: SpecificFuelConsumptionUnits): number {
        switch (fromUnit) {
                
            case SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour:
                return value * 28.33;
            case SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour:
                return value * 28.33;
            case SpecificFuelConsumptionUnits.GramsPerKiloNewtonSecond:
                return value;
            case SpecificFuelConsumptionUnits.KilogramsPerKiloNewtonSecond:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the SpecificFuelConsumption to string.
     * Note! the default format for SpecificFuelConsumption is GramsPerKiloNewtonSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the SpecificFuelConsumption.
     * @returns The string format of the SpecificFuelConsumption.
     */
    public toString(unit: SpecificFuelConsumptionUnits = SpecificFuelConsumptionUnits.GramsPerKiloNewtonSecond): string {

        switch (unit) {
            
            case SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour:
                return this.PoundsMassPerPoundForceHour + ` lb/(lbf·h)`;
            case SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour:
                return this.KilogramsPerKilogramForceHour + ` kg/(kgf�h)`;
            case SpecificFuelConsumptionUnits.GramsPerKiloNewtonSecond:
                return this.GramsPerKiloNewtonSecond + ` g/(kN�s)`;
            case SpecificFuelConsumptionUnits.KilogramsPerKiloNewtonSecond:
                return this.KilogramsPerKiloNewtonSecond + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get SpecificFuelConsumption unit abbreviation.
     * Note! the default abbreviation for SpecificFuelConsumption is GramsPerKiloNewtonSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the SpecificFuelConsumption.
     * @returns The abbreviation string of SpecificFuelConsumption.
     */
    public getUnitAbbreviation(unitAbbreviation: SpecificFuelConsumptionUnits = SpecificFuelConsumptionUnits.GramsPerKiloNewtonSecond): string {

        switch (unitAbbreviation) {
            
            case SpecificFuelConsumptionUnits.PoundsMassPerPoundForceHour:
                return `lb/(lbf·h)`;
            case SpecificFuelConsumptionUnits.KilogramsPerKilogramForceHour:
                return `kg/(kgf�h)`;
            case SpecificFuelConsumptionUnits.GramsPerKiloNewtonSecond:
                return `g/(kN�s)`;
            case SpecificFuelConsumptionUnits.KilogramsPerKiloNewtonSecond:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given SpecificFuelConsumption are equals to the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns True if the given SpecificFuelConsumption are equal to the current SpecificFuelConsumption.
     */
    public equals(specificFuelConsumption: SpecificFuelConsumption): boolean {
        return this.value === specificFuelConsumption.BaseValue;
    }

    /**
     * Compare the given SpecificFuelConsumption against the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns 0 if they are equal, -1 if the current SpecificFuelConsumption is less then other, 1 if the current SpecificFuelConsumption is greater then other.
     */
    public compareTo(specificFuelConsumption: SpecificFuelConsumption): number {

        if (this.value > specificFuelConsumption.BaseValue)
            return 1;
        if (this.value < specificFuelConsumption.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given SpecificFuelConsumption with the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns A new SpecificFuelConsumption instance with the results.
     */
    public add(specificFuelConsumption: SpecificFuelConsumption): SpecificFuelConsumption {
        return new SpecificFuelConsumption(this.value + specificFuelConsumption.BaseValue)
    }

    /**
     * Subtract the given SpecificFuelConsumption with the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns A new SpecificFuelConsumption instance with the results.
     */
    public subtract(specificFuelConsumption: SpecificFuelConsumption): SpecificFuelConsumption {
        return new SpecificFuelConsumption(this.value - specificFuelConsumption.BaseValue)
    }

    /**
     * Multiply the given SpecificFuelConsumption with the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns A new SpecificFuelConsumption instance with the results.
     */
    public multiply(specificFuelConsumption: SpecificFuelConsumption): SpecificFuelConsumption {
        return new SpecificFuelConsumption(this.value * specificFuelConsumption.BaseValue)
    }

    /**
     * Divide the given SpecificFuelConsumption with the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns A new SpecificFuelConsumption instance with the results.
     */
    public divide(specificFuelConsumption: SpecificFuelConsumption): SpecificFuelConsumption {
        return new SpecificFuelConsumption(this.value / specificFuelConsumption.BaseValue)
    }

    /**
     * Modulo the given SpecificFuelConsumption with the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns A new SpecificFuelConsumption instance with the results.
     */
    public modulo(specificFuelConsumption: SpecificFuelConsumption): SpecificFuelConsumption {
        return new SpecificFuelConsumption(this.value % specificFuelConsumption.BaseValue)
    }

    /**
     * Pow the given SpecificFuelConsumption with the current SpecificFuelConsumption.
     * @param specificFuelConsumption The other SpecificFuelConsumption.
     * @returns A new SpecificFuelConsumption instance with the results.
     */
    public pow(specificFuelConsumption: SpecificFuelConsumption): SpecificFuelConsumption {
        return new SpecificFuelConsumption(this.value ** specificFuelConsumption.BaseValue)
    }
}
