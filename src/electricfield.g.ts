/** API DTO represents a ElectricField */
export interface ElectricFieldDto {
    value: number;
    unit: ElectricFieldUnits;
}

/** ElectricFieldUnits enumeration */
export enum ElectricFieldUnits {
    /** */
    VoltsPerMeter = "VoltPerMeter"
}

/** An electric field is a force field that surrounds electric charges that attracts or repels other electric charges. */
export class ElectricField {
    private value: number;
    private voltspermeterLazy: number | null = null;

    /**
     * Create a new ElectricField.
     * @param value The value.
     * @param fromUnit The ‘ElectricField’ unit to create from.
     * The default unit is VoltsPerMeter
     */
    public constructor(value: number, fromUnit: ElectricFieldUnits = ElectricFieldUnits.VoltsPerMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricField is VoltsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get VoltsPerMeter(): number {
        if(this.voltspermeterLazy !== null){
            return this.voltspermeterLazy;
        }
        return this.voltspermeterLazy = this.convertFromBase(ElectricFieldUnits.VoltsPerMeter);
    }

    /**
     * Create a new ElectricField instance from a VoltsPerMeter
     *
     * @param value The unit as VoltsPerMeter to create a new ElectricField from.
     * @returns The new ElectricField instance.
     */
    public static FromVoltsPerMeter(value: number): ElectricField {
        return new ElectricField(value, ElectricFieldUnits.VoltsPerMeter);
    }

    /**
     * Create API DTO represent a ElectricField unit.
     * @param holdInUnit The specific ElectricField unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricFieldUnits = ElectricFieldUnits.VoltsPerMeter): ElectricFieldDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricField unit from an API DTO representation.
     * @param dtoElectricField The ElectricField API DTO representation
     */
    public static FromDto(dtoElectricField: ElectricFieldDto): ElectricField {
        return new ElectricField(dtoElectricField.value, dtoElectricField.unit);
    }

    /**
     * Convert ElectricField to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricFieldUnits): number {
        switch (toUnit) {
            case ElectricFieldUnits.VoltsPerMeter: return this.VoltsPerMeter;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: ElectricFieldUnits): number {
        switch (toUnit) {
                
            case ElectricFieldUnits.VoltsPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricFieldUnits): number {
        switch (fromUnit) {
                
            case ElectricFieldUnits.VoltsPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricField to string.
     * Note! the default format for ElectricField is VoltsPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricField.
     * @returns The string format of the ElectricField.
     */
    public toString(unit: ElectricFieldUnits = ElectricFieldUnits.VoltsPerMeter): string {

        switch (unit) {
            
            case ElectricFieldUnits.VoltsPerMeter:
                return this.VoltsPerMeter + ` V/m`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricField unit abbreviation.
     * Note! the default abbreviation for ElectricField is VoltsPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricField.
     * @returns The abbreviation string of ElectricField.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricFieldUnits = ElectricFieldUnits.VoltsPerMeter): string {

        switch (unitAbbreviation) {
            
            case ElectricFieldUnits.VoltsPerMeter:
                return `V/m`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricField are equals to the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns True if the given ElectricField are equal to the current ElectricField.
     */
    public equals(electricField: ElectricField): boolean {
        return this.value === electricField.BaseValue;
    }

    /**
     * Compare the given ElectricField against the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns 0 if they are equal, -1 if the current ElectricField is less then other, 1 if the current ElectricField is greater then other.
     */
    public compareTo(electricField: ElectricField): number {

        if (this.value > electricField.BaseValue)
            return 1;
        if (this.value < electricField.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    public add(electricField: ElectricField): ElectricField {
        return new ElectricField(this.value + electricField.BaseValue)
    }

    /**
     * Subtract the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    public subtract(electricField: ElectricField): ElectricField {
        return new ElectricField(this.value - electricField.BaseValue)
    }

    /**
     * Multiply the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    public multiply(electricField: ElectricField): ElectricField {
        return new ElectricField(this.value * electricField.BaseValue)
    }

    /**
     * Divide the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    public divide(electricField: ElectricField): ElectricField {
        return new ElectricField(this.value / electricField.BaseValue)
    }

    /**
     * Modulo the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    public modulo(electricField: ElectricField): ElectricField {
        return new ElectricField(this.value % electricField.BaseValue)
    }

    /**
     * Pow the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    public pow(electricField: ElectricField): ElectricField {
        return new ElectricField(this.value ** electricField.BaseValue)
    }
}
