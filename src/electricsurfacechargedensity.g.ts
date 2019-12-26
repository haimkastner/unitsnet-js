/** ElectricSurfaceChargeDensityUnits enumeration */
export enum ElectricSurfaceChargeDensityUnits {
    /** */
    CoulombsPerSquareMeter,
    /** */
    CoulombsPerSquareCentimeter,
    /** */
    CoulombsPerSquareInch
}

/** In electromagnetism, surface charge density is a measure of the amount of electric charge per surface area. */
export class ElectricSurfaceChargeDensity {
    private value: number;
    private coulombspersquaremeterLazy: number | null = null;
    private coulombspersquarecentimeterLazy: number | null = null;
    private coulombspersquareinchLazy: number | null = null;

    /**
     * Create a new ElectricSurfaceChargeDensity.
     * @param value The value.
     * @param fromUnit The ‘ElectricSurfaceChargeDensity’ unit to create from.
     */
    public constructor(value: number, fromUnit: ElectricSurfaceChargeDensityUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricSurfaceChargeDensity is CoulombPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get CoulombsPerSquareMeter(): number {
        if(this.coulombspersquaremeterLazy !== null){
            return this.coulombspersquaremeterLazy;
        }
        return this.coulombspersquaremeterLazy = this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter);
    }

    /** */
    public get CoulombsPerSquareCentimeter(): number {
        if(this.coulombspersquarecentimeterLazy !== null){
            return this.coulombspersquarecentimeterLazy;
        }
        return this.coulombspersquarecentimeterLazy = this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter);
    }

    /** */
    public get CoulombsPerSquareInch(): number {
        if(this.coulombspersquareinchLazy !== null){
            return this.coulombspersquareinchLazy;
        }
        return this.coulombspersquareinchLazy = this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch);
    }

    /**
     * Create a new ElectricSurfaceChargeDensity instance from a CoulombsPerSquareMeter
     *
     * @param value The unit as CoulombsPerSquareMeter to create a new ElectricSurfaceChargeDensity from.
     * @returns The new ElectricSurfaceChargeDensity instance.
     */
    public static FromCoulombsPerSquareMeter(value: number): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(value, ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter);
    }

    /**
     * Create a new ElectricSurfaceChargeDensity instance from a CoulombsPerSquareCentimeter
     *
     * @param value The unit as CoulombsPerSquareCentimeter to create a new ElectricSurfaceChargeDensity from.
     * @returns The new ElectricSurfaceChargeDensity instance.
     */
    public static FromCoulombsPerSquareCentimeter(value: number): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(value, ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter);
    }

    /**
     * Create a new ElectricSurfaceChargeDensity instance from a CoulombsPerSquareInch
     *
     * @param value The unit as CoulombsPerSquareInch to create a new ElectricSurfaceChargeDensity from.
     * @returns The new ElectricSurfaceChargeDensity instance.
     */
    public static FromCoulombsPerSquareInch(value: number): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(value, ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch);
    }

    private convertFromBase(toUnit: ElectricSurfaceChargeDensityUnits): number {
        switch (toUnit) {
                
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                return this.value;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                return this.value / 1.0e4;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                return this.value / 1.5500031000062000e3;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricSurfaceChargeDensityUnits): number {
        switch (fromUnit) {
                
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                return value;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                return value * 1.0e4;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                return value * 1.5500031000062000e3;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricSurfaceChargeDensity to string.
     * Note! the default format for ElectricSurfaceChargeDensity is CoulombsPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricSurfaceChargeDensity.
     * @returns The string format of the ElectricSurfaceChargeDensity.
     */
    public toString(toUnit: ElectricSurfaceChargeDensityUnits = ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter): string {

        switch (toUnit) {
            
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                return this.CoulombsPerSquareMeter + ` C/m²`;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                return this.CoulombsPerSquareCentimeter + ` C/cm²`;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                return this.CoulombsPerSquareInch + ` C/in²`;
        default:
            break;
        }
        return this.value.toString();
    }
}
