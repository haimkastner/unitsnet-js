/** ElectricChargeDensityUnits enumeration */
export enum ElectricChargeDensityUnits {
    /** */
    CoulombsPerCubicMeter
}

/** In electromagnetism, charge density is a measure of the amount of electric charge per volume. */
export class ElectricChargeDensity {
    private value: number;
    private coulombspercubicmeterLazy: number | null = null;

    /**
     * Create a new ElectricChargeDensity.
     * @param value The value.
     * @param fromUnit The ‘ElectricChargeDensity’ unit to create from.
     * The default unit is CoulombsPerCubicMeter
     */
    public constructor(value: number, fromUnit: ElectricChargeDensityUnits = ElectricChargeDensityUnits.CoulombsPerCubicMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricChargeDensity is CoulombsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get CoulombsPerCubicMeter(): number {
        if(this.coulombspercubicmeterLazy !== null){
            return this.coulombspercubicmeterLazy;
        }
        return this.coulombspercubicmeterLazy = this.convertFromBase(ElectricChargeDensityUnits.CoulombsPerCubicMeter);
    }

    /**
     * Create a new ElectricChargeDensity instance from a CoulombsPerCubicMeter
     *
     * @param value The unit as CoulombsPerCubicMeter to create a new ElectricChargeDensity from.
     * @returns The new ElectricChargeDensity instance.
     */
    public static FromCoulombsPerCubicMeter(value: number): ElectricChargeDensity {
        return new ElectricChargeDensity(value, ElectricChargeDensityUnits.CoulombsPerCubicMeter);
    }

    private convertFromBase(toUnit: ElectricChargeDensityUnits): number {
        switch (toUnit) {
                
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricChargeDensityUnits): number {
        switch (fromUnit) {
                
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricChargeDensity to string.
     * Note! the default format for ElectricChargeDensity is CoulombsPerCubicMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricChargeDensity.
     * @returns The string format of the ElectricChargeDensity.
     */
    public toString(unit: ElectricChargeDensityUnits = ElectricChargeDensityUnits.CoulombsPerCubicMeter): string {

        switch (unit) {
            
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                return this.CoulombsPerCubicMeter + ` C/m³`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricChargeDensity unit abbreviation.
     * Note! the default abbreviation for ElectricChargeDensity is CoulombsPerCubicMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricChargeDensity.
     * @returns The abbreviation string of ElectricChargeDensity.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricChargeDensityUnits = ElectricChargeDensityUnits.CoulombsPerCubicMeter): string {

        switch (unitAbbreviation) {
            
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                return `C/m³`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricChargeDensity are equals to the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns True if the given ElectricChargeDensity are equal to the current ElectricChargeDensity.
     */
    public equals(electricChargeDensity: ElectricChargeDensity): boolean {
        return this.value === electricChargeDensity.BaseValue;
    }

    /**
     * Compare the given ElectricChargeDensity against the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns 0 if they are equal, -1 if the current ElectricChargeDensity is less then other, 1 if the current ElectricChargeDensity is greater then other.
     */
    public compareTo(electricChargeDensity: ElectricChargeDensity): number {

        if (this.value > electricChargeDensity.BaseValue)
            return 1;
        if (this.value < electricChargeDensity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    public add(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity {
        return new ElectricChargeDensity(this.value + electricChargeDensity.BaseValue)
    }

    /**
     * Subtract the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    public subtract(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity {
        return new ElectricChargeDensity(this.value - electricChargeDensity.BaseValue)
    }

    /**
     * Multiply the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    public multiply(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity {
        return new ElectricChargeDensity(this.value * electricChargeDensity.BaseValue)
    }

    /**
     * Divide the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    public divide(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity {
        return new ElectricChargeDensity(this.value / electricChargeDensity.BaseValue)
    }

    /**
     * Modulo the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    public modulo(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity {
        return new ElectricChargeDensity(this.value % electricChargeDensity.BaseValue)
    }

    /**
     * Pow the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    public pow(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity {
        return new ElectricChargeDensity(this.value ** electricChargeDensity.BaseValue)
    }
}
