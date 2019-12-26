/** ElectricFieldUnits enumeration */
export enum ElectricFieldUnits {
    /** */
    VoltsPerMeter
}

/** An electric field is a force field that surrounds electric charges that attracts or repels other electric charges. */
export class ElectricField {
    private value: number;
    private voltspermeterLazy: number | null = null;

    /**
     * Create a new ElectricField.
     * @param value The value.
     * @param fromUnit The ‘ElectricField’ unit to create from.
     */
    public constructor(value: number, fromUnit: ElectricFieldUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricField is VoltPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricField.
     * @returns The string format of the ElectricField.
     */
    public toString(toUnit: ElectricFieldUnits = ElectricFieldUnits.VoltsPerMeter): string {

        switch (toUnit) {
            
            case ElectricFieldUnits.VoltsPerMeter:
                return this.VoltsPerMeter + ` V/m`;
        default:
            break;
        }
        return this.value.toString();
    }
}
