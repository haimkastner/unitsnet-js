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
     */
    public constructor(value: number, fromUnit: ElectricChargeDensityUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricChargeDensity is CoulombPerCubicMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricChargeDensity.
     * @returns The string format of the ElectricChargeDensity.
     */
    public toString(toUnit: ElectricChargeDensityUnits = ElectricChargeDensityUnits.CoulombsPerCubicMeter): string {

        switch (toUnit) {
            
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                return this.CoulombsPerCubicMeter + ` C/m³`;
        default:
            break;
        }
        return this.value.toString();
    }
}
