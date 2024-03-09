/** API DTO represents a ElectricSurfaceChargeDensity */
export interface ElectricSurfaceChargeDensityDto {
    /** The value of the ElectricSurfaceChargeDensity */
    value: number;
    /**  The specific unit that the ElectricSurfaceChargeDensity value is representing */
    unit: ElectricSurfaceChargeDensityUnits;
}

/** ElectricSurfaceChargeDensityUnits enumeration */
export enum ElectricSurfaceChargeDensityUnits {
    /** */
    CoulombsPerSquareMeter = "CoulombPerSquareMeter",
    /** */
    CoulombsPerSquareCentimeter = "CoulombPerSquareCentimeter",
    /** */
    CoulombsPerSquareInch = "CoulombPerSquareInch"
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
     * The default unit is CoulombsPerSquareMeter
     */
    public constructor(value: number, fromUnit: ElectricSurfaceChargeDensityUnits = ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricSurfaceChargeDensity is CoulombsPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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

    /**
     * Create API DTO represent a ElectricSurfaceChargeDensity unit.
     * @param holdInUnit The specific ElectricSurfaceChargeDensity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricSurfaceChargeDensityUnits = ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter): ElectricSurfaceChargeDensityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricSurfaceChargeDensity unit from an API DTO representation.
     * @param dtoElectricSurfaceChargeDensity The ElectricSurfaceChargeDensity API DTO representation
     */
    public static FromDto(dtoElectricSurfaceChargeDensity: ElectricSurfaceChargeDensityDto): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(dtoElectricSurfaceChargeDensity.value, dtoElectricSurfaceChargeDensity.unit);
    }

    /**
     * Convert ElectricSurfaceChargeDensity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricSurfaceChargeDensityUnits): number {
        switch (toUnit) {
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter: return this.CoulombsPerSquareMeter;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter: return this.CoulombsPerSquareCentimeter;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch: return this.CoulombsPerSquareInch;

            default:
                break;
        }
        return NaN;
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
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricSurfaceChargeDensity.
     * @returns The string format of the ElectricSurfaceChargeDensity.
     */
    public toString(unit: ElectricSurfaceChargeDensityUnits = ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter): string {

        switch (unit) {
            
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

    /**
     * Get ElectricSurfaceChargeDensity unit abbreviation.
     * Note! the default abbreviation for ElectricSurfaceChargeDensity is CoulombsPerSquareMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricSurfaceChargeDensity.
     * @returns The abbreviation string of ElectricSurfaceChargeDensity.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricSurfaceChargeDensityUnits = ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter): string {

        switch (unitAbbreviation) {
            
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                return `C/m²`;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                return `C/cm²`;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                return `C/in²`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricSurfaceChargeDensity are equals to the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns True if the given ElectricSurfaceChargeDensity are equal to the current ElectricSurfaceChargeDensity.
     */
    public equals(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): boolean {
        return this.value === electricSurfaceChargeDensity.BaseValue;
    }

    /**
     * Compare the given ElectricSurfaceChargeDensity against the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns 0 if they are equal, -1 if the current ElectricSurfaceChargeDensity is less then other, 1 if the current ElectricSurfaceChargeDensity is greater then other.
     */
    public compareTo(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): number {

        if (this.value > electricSurfaceChargeDensity.BaseValue)
            return 1;
        if (this.value < electricSurfaceChargeDensity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricSurfaceChargeDensity with the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns A new ElectricSurfaceChargeDensity instance with the results.
     */
    public add(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(this.value + electricSurfaceChargeDensity.BaseValue)
    }

    /**
     * Subtract the given ElectricSurfaceChargeDensity with the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns A new ElectricSurfaceChargeDensity instance with the results.
     */
    public subtract(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(this.value - electricSurfaceChargeDensity.BaseValue)
    }

    /**
     * Multiply the given ElectricSurfaceChargeDensity with the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns A new ElectricSurfaceChargeDensity instance with the results.
     */
    public multiply(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(this.value * electricSurfaceChargeDensity.BaseValue)
    }

    /**
     * Divide the given ElectricSurfaceChargeDensity with the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns A new ElectricSurfaceChargeDensity instance with the results.
     */
    public divide(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(this.value / electricSurfaceChargeDensity.BaseValue)
    }

    /**
     * Modulo the given ElectricSurfaceChargeDensity with the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns A new ElectricSurfaceChargeDensity instance with the results.
     */
    public modulo(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(this.value % electricSurfaceChargeDensity.BaseValue)
    }

    /**
     * Pow the given ElectricSurfaceChargeDensity with the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns A new ElectricSurfaceChargeDensity instance with the results.
     */
    public pow(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): ElectricSurfaceChargeDensity {
        return new ElectricSurfaceChargeDensity(this.value ** electricSurfaceChargeDensity.BaseValue)
    }
}
