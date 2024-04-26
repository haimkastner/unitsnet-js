import { BaseUnit } from "../base-unit";

/** API DTO represents a ElectricAdmittance */
export interface ElectricAdmittanceDto {
    /** The value of the ElectricAdmittance */
    value: number;
    /**  The specific unit that the ElectricAdmittance value is representing */
    unit: ElectricAdmittanceUnits;
}

/** ElectricAdmittanceUnits enumeration */
export enum ElectricAdmittanceUnits {
    /** */
    Siemens = "Siemens",
    /** */
    Nanosiemens = "Nanosiemens",
    /** */
    Microsiemens = "Microsiemens",
    /** */
    Millisiemens = "Millisiemens"
}

/** Electric admittance is a measure of how easily a circuit or device will allow a current to flow. It is defined as the inverse of impedance. The SI unit of admittance is the siemens (symbol S). */
export class ElectricAdmittance extends BaseUnit {
    private value: number;
    private siemensLazy: number | null = null;
    private nanosiemensLazy: number | null = null;
    private microsiemensLazy: number | null = null;
    private millisiemensLazy: number | null = null;

    /**
     * Create a new ElectricAdmittance.
     * @param value The value.
     * @param fromUnit The ‘ElectricAdmittance’ unit to create from.
     * The default unit is Siemens
     */
    public constructor(value: number, fromUnit: ElectricAdmittanceUnits = ElectricAdmittanceUnits.Siemens) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricAdmittance is Siemens.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Siemens(): number {
        if(this.siemensLazy !== null){
            return this.siemensLazy;
        }
        return this.siemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Siemens);
    }

    /** */
    public get Nanosiemens(): number {
        if(this.nanosiemensLazy !== null){
            return this.nanosiemensLazy;
        }
        return this.nanosiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Nanosiemens);
    }

    /** */
    public get Microsiemens(): number {
        if(this.microsiemensLazy !== null){
            return this.microsiemensLazy;
        }
        return this.microsiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Microsiemens);
    }

    /** */
    public get Millisiemens(): number {
        if(this.millisiemensLazy !== null){
            return this.millisiemensLazy;
        }
        return this.millisiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Millisiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Siemens
     *
     * @param value The unit as Siemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromSiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Siemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Nanosiemens
     *
     * @param value The unit as Nanosiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromNanosiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Nanosiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Microsiemens
     *
     * @param value The unit as Microsiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromMicrosiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Microsiemens);
    }

    /**
     * Create a new ElectricAdmittance instance from a Millisiemens
     *
     * @param value The unit as Millisiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    public static FromMillisiemens(value: number): ElectricAdmittance {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Millisiemens);
    }

    /**
     * Create API DTO represent a ElectricAdmittance unit.
     * @param holdInUnit The specific ElectricAdmittance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricAdmittanceUnits = ElectricAdmittanceUnits.Siemens): ElectricAdmittanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricAdmittance unit from an API DTO representation.
     * @param dtoElectricAdmittance The ElectricAdmittance API DTO representation
     */
    public static FromDto(dtoElectricAdmittance: ElectricAdmittanceDto): ElectricAdmittance {
        return new ElectricAdmittance(dtoElectricAdmittance.value, dtoElectricAdmittance.unit);
    }

    /**
     * Convert ElectricAdmittance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricAdmittanceUnits): number {
        switch (toUnit) {
            case ElectricAdmittanceUnits.Siemens: return this.Siemens;
            case ElectricAdmittanceUnits.Nanosiemens: return this.Nanosiemens;
            case ElectricAdmittanceUnits.Microsiemens: return this.Microsiemens;
            case ElectricAdmittanceUnits.Millisiemens: return this.Millisiemens;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: ElectricAdmittanceUnits): number {
        switch (toUnit) {
                
            case ElectricAdmittanceUnits.Siemens:
                return this.value;
            case ElectricAdmittanceUnits.Nanosiemens:
                return (this.value) / 1e-9;
            case ElectricAdmittanceUnits.Microsiemens:
                return (this.value) / 0.000001;
            case ElectricAdmittanceUnits.Millisiemens:
                return (this.value) / 0.001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricAdmittanceUnits): number {
        switch (fromUnit) {
                
            case ElectricAdmittanceUnits.Siemens:
                return value;
            case ElectricAdmittanceUnits.Nanosiemens:
                return (value) * 1e-9;
            case ElectricAdmittanceUnits.Microsiemens:
                return (value) * 0.000001;
            case ElectricAdmittanceUnits.Millisiemens:
                return (value) * 0.001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricAdmittance to string.
     * Note! the default format for ElectricAdmittance is Siemens.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricAdmittance.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the ElectricAdmittance.
     */
    public toString(unit: ElectricAdmittanceUnits = ElectricAdmittanceUnits.Siemens, fractionalDigits?: number): string {

        switch (unit) {
            
            case ElectricAdmittanceUnits.Siemens:
                return super.truncateFractionDigits(this.Siemens, fractionalDigits) + ` S`;
            case ElectricAdmittanceUnits.Nanosiemens:
                return super.truncateFractionDigits(this.Nanosiemens, fractionalDigits) + ` nS`;
            case ElectricAdmittanceUnits.Microsiemens:
                return super.truncateFractionDigits(this.Microsiemens, fractionalDigits) + ` μS`;
            case ElectricAdmittanceUnits.Millisiemens:
                return super.truncateFractionDigits(this.Millisiemens, fractionalDigits) + ` mS`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricAdmittance unit abbreviation.
     * Note! the default abbreviation for ElectricAdmittance is Siemens.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricAdmittance.
     * @returns The abbreviation string of ElectricAdmittance.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricAdmittanceUnits = ElectricAdmittanceUnits.Siemens): string {

        switch (unitAbbreviation) {
            
            case ElectricAdmittanceUnits.Siemens:
                return `S`;
            case ElectricAdmittanceUnits.Nanosiemens:
                return `nS`;
            case ElectricAdmittanceUnits.Microsiemens:
                return `μS`;
            case ElectricAdmittanceUnits.Millisiemens:
                return `mS`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricAdmittance are equals to the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns True if the given ElectricAdmittance are equal to the current ElectricAdmittance.
     */
    public equals(electricAdmittance: ElectricAdmittance): boolean {
        return super.internalEquals(this.value, electricAdmittance.BaseValue);
    }

    /**
     * Compare the given ElectricAdmittance against the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns 0 if they are equal, -1 if the current ElectricAdmittance is less then other, 1 if the current ElectricAdmittance is greater then other.
     */
    public compareTo(electricAdmittance: ElectricAdmittance): number {
        return super.internalCompareTo(this.value, electricAdmittance.BaseValue);
    }

    /**
     * Add the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public add(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(super.internalAdd(this.value, electricAdmittance.BaseValue))
    }

    /**
     * Subtract the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public subtract(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(super.internalSubtract(this.value, electricAdmittance.BaseValue))
    }

    /**
     * Multiply the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public multiply(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(super.internalMultiply(this.value, electricAdmittance.BaseValue))
    }

    /**
     * Divide the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public divide(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(super.internalDivide(this.value, electricAdmittance.BaseValue))
    }

    /**
     * Modulo the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public modulo(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(super.internalModulo(this.value, electricAdmittance.BaseValue))
    }

    /**
     * Pow the given ElectricAdmittance with the current ElectricAdmittance.
     * @param electricAdmittance The other ElectricAdmittance.
     * @returns A new ElectricAdmittance instance with the results.
     */
    public pow(electricAdmittance: ElectricAdmittance): ElectricAdmittance {
        return new ElectricAdmittance(super.internalPow(this.value, electricAdmittance.BaseValue))
    }
}
