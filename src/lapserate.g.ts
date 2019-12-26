/** LapseRateUnits enumeration */
export enum LapseRateUnits {
    /** */
    DegreesCelciusPerKilometer
}

/** Lapse rate is the rate at which Earth's atmospheric temperature decreases with an increase in altitude, or increases with the decrease in altitude. */
export class LapseRate {
    private value: number;
    private degreescelciusperkilometerLazy: number | null = null;

    /**
     * Create a new LapseRate.
     * @param value The value.
     * @param fromUnit The ‘LapseRate’ unit to create from.
     */
    public constructor(value: number, fromUnit: LapseRateUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of LapseRate is DegreeCelsiusPerKilometer.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get DegreesCelciusPerKilometer(): number {
        if(this.degreescelciusperkilometerLazy !== null){
            return this.degreescelciusperkilometerLazy;
        }
        return this.degreescelciusperkilometerLazy = this.convertFromBase(LapseRateUnits.DegreesCelciusPerKilometer);
    }

    /**
     * Create a new LapseRate instance from a DegreesCelciusPerKilometer
     *
     * @param value The unit as DegreesCelciusPerKilometer to create a new LapseRate from.
     * @returns The new LapseRate instance.
     */
    public static FromDegreesCelciusPerKilometer(value: number): LapseRate {
        return new LapseRate(value, LapseRateUnits.DegreesCelciusPerKilometer);
    }

    private convertFromBase(toUnit: LapseRateUnits): number {
        switch (toUnit) {
                
            case LapseRateUnits.DegreesCelciusPerKilometer:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LapseRateUnits): number {
        switch (fromUnit) {
                
            case LapseRateUnits.DegreesCelciusPerKilometer:
                return value;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the LapseRate to string.
     * Note! the default format for LapseRate is DegreesCelciusPerKilometer.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the LapseRate.
     * @returns The string format of the LapseRate.
     */
    public toString(toUnit: LapseRateUnits = LapseRateUnits.DegreesCelciusPerKilometer): string {

        switch (toUnit) {
            
            case LapseRateUnits.DegreesCelciusPerKilometer:
                return this.DegreesCelciusPerKilometer + ` ∆°C/km`;
        default:
            break;
        }
        return this.value.toString();
    }
}
