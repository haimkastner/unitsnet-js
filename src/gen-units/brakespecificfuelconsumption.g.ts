import { BaseUnit } from "../base-unit";

/** API DTO represents a BrakeSpecificFuelConsumption */
export interface BrakeSpecificFuelConsumptionDto {
    /** The value of the BrakeSpecificFuelConsumption */
    value: number;
    /**  The specific unit that the BrakeSpecificFuelConsumption value is representing */
    unit: BrakeSpecificFuelConsumptionUnits;
}

/** BrakeSpecificFuelConsumptionUnits enumeration */
export enum BrakeSpecificFuelConsumptionUnits {
    /** */
    GramsPerKiloWattHour = "GramPerKiloWattHour",
    /** */
    KilogramsPerJoule = "KilogramPerJoule",
    /** The pound per horse power hour uses mechanical horse power and the imperial pound */
    PoundsPerMechanicalHorsepowerHour = "PoundPerMechanicalHorsepowerHour"
}

/** Brake specific fuel consumption (BSFC) is a measure of the fuel efficiency of any prime mover that burns fuel and produces rotational, or shaft, power. It is typically used for comparing the efficiency of internal combustion engines with a shaft output. */
export class BrakeSpecificFuelConsumption extends BaseUnit {
    private value: number;
    private gramsperkilowatthourLazy: number | null = null;
    private kilogramsperjouleLazy: number | null = null;
    private poundspermechanicalhorsepowerhourLazy: number | null = null;

    /**
     * Create a new BrakeSpecificFuelConsumption.
     * @param value The value.
     * @param fromUnit The ‘BrakeSpecificFuelConsumption’ unit to create from.
     * The default unit is KilogramsPerJoule
     */
    public constructor(value: number, fromUnit: BrakeSpecificFuelConsumptionUnits = BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of BrakeSpecificFuelConsumption is KilogramsPerJoule.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get GramsPerKiloWattHour(): number {
        if(this.gramsperkilowatthourLazy !== null){
            return this.gramsperkilowatthourLazy;
        }
        return this.gramsperkilowatthourLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour);
    }

    /** */
    public get KilogramsPerJoule(): number {
        if(this.kilogramsperjouleLazy !== null){
            return this.kilogramsperjouleLazy;
        }
        return this.kilogramsperjouleLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule);
    }

    /** The pound per horse power hour uses mechanical horse power and the imperial pound */
    public get PoundsPerMechanicalHorsepowerHour(): number {
        if(this.poundspermechanicalhorsepowerhourLazy !== null){
            return this.poundspermechanicalhorsepowerhourLazy;
        }
        return this.poundspermechanicalhorsepowerhourLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour);
    }

    /**
     * Create a new BrakeSpecificFuelConsumption instance from a GramsPerKiloWattHour
     *
     * @param value The unit as GramsPerKiloWattHour to create a new BrakeSpecificFuelConsumption from.
     * @returns The new BrakeSpecificFuelConsumption instance.
     */
    public static FromGramsPerKiloWattHour(value: number): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour);
    }

    /**
     * Create a new BrakeSpecificFuelConsumption instance from a KilogramsPerJoule
     *
     * @param value The unit as KilogramsPerJoule to create a new BrakeSpecificFuelConsumption from.
     * @returns The new BrakeSpecificFuelConsumption instance.
     */
    public static FromKilogramsPerJoule(value: number): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule);
    }

    /**
     * Create a new BrakeSpecificFuelConsumption instance from a PoundsPerMechanicalHorsepowerHour
     * The pound per horse power hour uses mechanical horse power and the imperial pound
     * @param value The unit as PoundsPerMechanicalHorsepowerHour to create a new BrakeSpecificFuelConsumption from.
     * @returns The new BrakeSpecificFuelConsumption instance.
     */
    public static FromPoundsPerMechanicalHorsepowerHour(value: number): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour);
    }

    /**
     * Create API DTO represent a BrakeSpecificFuelConsumption unit.
     * @param holdInUnit The specific BrakeSpecificFuelConsumption unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: BrakeSpecificFuelConsumptionUnits = BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule): BrakeSpecificFuelConsumptionDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a BrakeSpecificFuelConsumption unit from an API DTO representation.
     * @param dtoBrakeSpecificFuelConsumption The BrakeSpecificFuelConsumption API DTO representation
     */
    public static FromDto(dtoBrakeSpecificFuelConsumption: BrakeSpecificFuelConsumptionDto): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(dtoBrakeSpecificFuelConsumption.value, dtoBrakeSpecificFuelConsumption.unit);
    }

    /**
     * Convert BrakeSpecificFuelConsumption to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: BrakeSpecificFuelConsumptionUnits): number {
        switch (toUnit) {
            case BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour: return this.GramsPerKiloWattHour;
            case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule: return this.KilogramsPerJoule;
            case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour: return this.PoundsPerMechanicalHorsepowerHour;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: BrakeSpecificFuelConsumptionUnits): number {
        switch (toUnit) {
                
            case BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour:
                return this.value * 3.6e9;
            case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule:
                return this.value;
            case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour:
                return this.value / 1.689659410672e-7;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: BrakeSpecificFuelConsumptionUnits): number {
        switch (fromUnit) {
                
            case BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour:
                return value / 3.6e9;
            case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule:
                return value;
            case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour:
                return value * 1.689659410672e-7;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the BrakeSpecificFuelConsumption to string.
     * Note! the default format for BrakeSpecificFuelConsumption is KilogramsPerJoule.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the BrakeSpecificFuelConsumption.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the BrakeSpecificFuelConsumption.
     */
    public toString(unit: BrakeSpecificFuelConsumptionUnits = BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule, fractionalDigits?: number): string {

        switch (unit) {
            
            case BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour:
                return super.truncateFractionDigits(this.GramsPerKiloWattHour, fractionalDigits) + ` g/kWh`;
            case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule:
                return super.truncateFractionDigits(this.KilogramsPerJoule, fractionalDigits) + ` kg/J`;
            case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour:
                return super.truncateFractionDigits(this.PoundsPerMechanicalHorsepowerHour, fractionalDigits) + ` lb/hph`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get BrakeSpecificFuelConsumption unit abbreviation.
     * Note! the default abbreviation for BrakeSpecificFuelConsumption is KilogramsPerJoule.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the BrakeSpecificFuelConsumption.
     * @returns The abbreviation string of BrakeSpecificFuelConsumption.
     */
    public getUnitAbbreviation(unitAbbreviation: BrakeSpecificFuelConsumptionUnits = BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule): string {

        switch (unitAbbreviation) {
            
            case BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour:
                return `g/kWh`;
            case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule:
                return `kg/J`;
            case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour:
                return `lb/hph`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given BrakeSpecificFuelConsumption are equals to the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns True if the given BrakeSpecificFuelConsumption are equal to the current BrakeSpecificFuelConsumption.
     */
    public equals(brakeSpecificFuelConsumption: BrakeSpecificFuelConsumption): boolean {
        return super.internalEquals(this.value, brakeSpecificFuelConsumption.BaseValue);
    }

    /**
     * Compare the given BrakeSpecificFuelConsumption against the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns 0 if they are equal, -1 if the current BrakeSpecificFuelConsumption is less then other, 1 if the current BrakeSpecificFuelConsumption is greater then other.
     */
    public compareTo(brakeSpecificFuelConsumption: BrakeSpecificFuelConsumption): number {
        return super.internalCompareTo(this.value, brakeSpecificFuelConsumption.BaseValue);
    }

    /**
     * Add the given BrakeSpecificFuelConsumption with the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns A new BrakeSpecificFuelConsumption instance with the results.
     */
    public add(brakeSpecificFuelConsumption: BrakeSpecificFuelConsumption): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(super.internalAdd(this.value, brakeSpecificFuelConsumption.BaseValue))
    }

    /**
     * Subtract the given BrakeSpecificFuelConsumption with the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns A new BrakeSpecificFuelConsumption instance with the results.
     */
    public subtract(brakeSpecificFuelConsumption: BrakeSpecificFuelConsumption): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(super.internalSubtract(this.value, brakeSpecificFuelConsumption.BaseValue))
    }

    /**
     * Multiply the given BrakeSpecificFuelConsumption with the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns A new BrakeSpecificFuelConsumption instance with the results.
     */
    public multiply(brakeSpecificFuelConsumption: BrakeSpecificFuelConsumption): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(super.internalMultiply(this.value, brakeSpecificFuelConsumption.BaseValue))
    }

    /**
     * Divide the given BrakeSpecificFuelConsumption with the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns A new BrakeSpecificFuelConsumption instance with the results.
     */
    public divide(brakeSpecificFuelConsumption: BrakeSpecificFuelConsumption): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(super.internalDivide(this.value, brakeSpecificFuelConsumption.BaseValue))
    }

    /**
     * Modulo the given BrakeSpecificFuelConsumption with the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns A new BrakeSpecificFuelConsumption instance with the results.
     */
    public modulo(brakeSpecificFuelConsumption: BrakeSpecificFuelConsumption): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(super.internalModulo(this.value, brakeSpecificFuelConsumption.BaseValue))
    }

    /**
     * Pow the given BrakeSpecificFuelConsumption with the current BrakeSpecificFuelConsumption.
     * @param brakeSpecificFuelConsumption The other BrakeSpecificFuelConsumption.
     * @returns A new BrakeSpecificFuelConsumption instance with the results.
     */
    public pow(brakeSpecificFuelConsumption: BrakeSpecificFuelConsumption): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(super.internalPow(this.value, brakeSpecificFuelConsumption.BaseValue))
    }
}
