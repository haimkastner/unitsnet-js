import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a ElectricCurrentDensity */
export interface ElectricCurrentDensityDto {
    /** The value of the ElectricCurrentDensity */
    value: number;
    /**  The specific unit that the ElectricCurrentDensity value is representing */
    unit: ElectricCurrentDensityUnits;
}

/** ElectricCurrentDensityUnits enumeration */
export enum ElectricCurrentDensityUnits {
    /** */
    AmperesPerSquareMeter = "AmperePerSquareMeter",
    /** */
    AmperesPerSquareInch = "AmperePerSquareInch",
    /** */
    AmperesPerSquareFoot = "AmperePerSquareFoot"
}

/** In electromagnetism, current density is the electric current per unit area of cross section. */
export class ElectricCurrentDensity extends BaseUnit {
    protected value: number;
    private amperespersquaremeterLazy: number | null = null;
    private amperespersquareinchLazy: number | null = null;
    private amperespersquarefootLazy: number | null = null;

    /**
     * Create a new ElectricCurrentDensity.
     * @param value The value.
     * @param fromUnit The ‘ElectricCurrentDensity’ unit to create from.
     * The default unit is AmperesPerSquareMeter
     */
    public constructor(value: number, fromUnit: ElectricCurrentDensityUnits = ElectricCurrentDensityUnits.AmperesPerSquareMeter) {

        super();
        if (Number.isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricCurrentDensity is AmperesPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get AmperesPerSquareMeter(): number {
        if(this.amperespersquaremeterLazy !== null){
            return this.amperespersquaremeterLazy;
        }
        return this.amperespersquaremeterLazy = this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareMeter);
    }

    /** */
    public get AmperesPerSquareInch(): number {
        if(this.amperespersquareinchLazy !== null){
            return this.amperespersquareinchLazy;
        }
        return this.amperespersquareinchLazy = this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareInch);
    }

    /** */
    public get AmperesPerSquareFoot(): number {
        if(this.amperespersquarefootLazy !== null){
            return this.amperespersquarefootLazy;
        }
        return this.amperespersquarefootLazy = this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareFoot);
    }

    /**
     * Create a new ElectricCurrentDensity instance from a AmperesPerSquareMeter
     *
     * @param value The unit as AmperesPerSquareMeter to create a new ElectricCurrentDensity from.
     * @returns The new ElectricCurrentDensity instance.
     */
    public static FromAmperesPerSquareMeter(value: number): ElectricCurrentDensity {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareMeter);
    }

    /**
     * Create a new ElectricCurrentDensity instance from a AmperesPerSquareInch
     *
     * @param value The unit as AmperesPerSquareInch to create a new ElectricCurrentDensity from.
     * @returns The new ElectricCurrentDensity instance.
     */
    public static FromAmperesPerSquareInch(value: number): ElectricCurrentDensity {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareInch);
    }

    /**
     * Create a new ElectricCurrentDensity instance from a AmperesPerSquareFoot
     *
     * @param value The unit as AmperesPerSquareFoot to create a new ElectricCurrentDensity from.
     * @returns The new ElectricCurrentDensity instance.
     */
    public static FromAmperesPerSquareFoot(value: number): ElectricCurrentDensity {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareFoot);
    }

    /**
     * Gets the base unit enumeration associated with ElectricCurrentDensity
     * @returns The unit enumeration that can be used to interact with this type
     */
    public static getUnitEnum(): typeof ElectricCurrentDensityUnits {
        return ElectricCurrentDensityUnits;
    }

    /**
     * Create API DTO represent a ElectricCurrentDensity unit.
     * @param holdInUnit The specific ElectricCurrentDensity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricCurrentDensityUnits = ElectricCurrentDensityUnits.AmperesPerSquareMeter): ElectricCurrentDensityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricCurrentDensity unit from an API DTO representation.
     * @param dtoElectricCurrentDensity The ElectricCurrentDensity API DTO representation
     */
    public static FromDto(dtoElectricCurrentDensity: ElectricCurrentDensityDto): ElectricCurrentDensity {
        return new ElectricCurrentDensity(dtoElectricCurrentDensity.value, dtoElectricCurrentDensity.unit);
    }

    /**
     * Convert ElectricCurrentDensity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricCurrentDensityUnits): number {
        switch (toUnit) {
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter: return this.AmperesPerSquareMeter;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch: return this.AmperesPerSquareInch;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot: return this.AmperesPerSquareFoot;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: ElectricCurrentDensityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricCurrentDensityUnits.AmperesPerSquareMeter: return this.value;
                case ElectricCurrentDensityUnits.AmperesPerSquareInch: return super.internalDivide(this.value, 1.5500031000062000e3);
                case ElectricCurrentDensityUnits.AmperesPerSquareFoot: return super.internalDivide(this.value, 1.0763910416709722e1);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter: return this.value;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch: return this.value / 1.5500031000062000e3;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot: return this.value / 1.0763910416709722e1;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricCurrentDensityUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricCurrentDensityUnits.AmperesPerSquareMeter: return value;
                case ElectricCurrentDensityUnits.AmperesPerSquareInch: return super.internalMultiply(value, 1.5500031000062000e3);
                case ElectricCurrentDensityUnits.AmperesPerSquareFoot: return super.internalMultiply(value, 1.0763910416709722e1);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter: return value;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch: return value * 1.5500031000062000e3;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot: return value * 1.0763910416709722e1;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricCurrentDensity to string.
     * Note! the default format for ElectricCurrentDensity is AmperesPerSquareMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricCurrentDensity.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the ElectricCurrentDensity.
     */
    public toString(unit: ElectricCurrentDensityUnits = ElectricCurrentDensityUnits.AmperesPerSquareMeter, fractionalDigits?: number): string {

        switch (unit) {
            
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter:
                return super.truncateFractionDigits(this.AmperesPerSquareMeter, fractionalDigits) + ` A/m²`;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch:
                return super.truncateFractionDigits(this.AmperesPerSquareInch, fractionalDigits) + ` A/in²`;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot:
                return super.truncateFractionDigits(this.AmperesPerSquareFoot, fractionalDigits) + ` A/ft²`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricCurrentDensity unit abbreviation.
     * Note! the default abbreviation for ElectricCurrentDensity is AmperesPerSquareMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricCurrentDensity.
     * @returns The abbreviation string of ElectricCurrentDensity.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricCurrentDensityUnits = ElectricCurrentDensityUnits.AmperesPerSquareMeter): string {

        switch (unitAbbreviation) {
            
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter:
                return `A/m²`;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch:
                return `A/in²`;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot:
                return `A/ft²`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricCurrentDensity are equals to the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns True if the given ElectricCurrentDensity are equal to the current ElectricCurrentDensity.
     */
    public equals(electricCurrentDensity: ElectricCurrentDensity): boolean {
        return super.internalEquals(this.value, electricCurrentDensity.BaseValue);
    }

    /**
     * Compare the given ElectricCurrentDensity against the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns 0 if they are equal, -1 if the current ElectricCurrentDensity is less then other, 1 if the current ElectricCurrentDensity is greater then other.
     */
    public compareTo(electricCurrentDensity: ElectricCurrentDensity): number {
        return super.internalCompareTo(this.value, electricCurrentDensity.BaseValue);
    }

    /**
     * Add the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    public add(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity {
        return new ElectricCurrentDensity(super.internalAdd(this.value, electricCurrentDensity.BaseValue))
    }

    /**
     * Subtract the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    public subtract(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity {
        return new ElectricCurrentDensity(super.internalSubtract(this.value, electricCurrentDensity.BaseValue))
    }

    /**
     * Multiply the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    public multiply(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity {
        return new ElectricCurrentDensity(super.internalMultiply(this.value, electricCurrentDensity.BaseValue))
    }

    /**
     * Divide the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    public divide(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity {
        return new ElectricCurrentDensity(super.internalDivide(this.value, electricCurrentDensity.BaseValue))
    }

    /**
     * Modulo the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    public modulo(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity {
        return new ElectricCurrentDensity(super.internalModulo(this.value, electricCurrentDensity.BaseValue))
    }

    /**
     * Pow the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    public pow(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity {
        return new ElectricCurrentDensity(super.internalPow(this.value, electricCurrentDensity.BaseValue))
    }
}
