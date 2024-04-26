import { BaseUnit } from "../base-unit";

/** ElectricPotentialAcUnits enumeration */
export enum ElectricPotentialAcUnits {
    /** */
    VoltsAc = "VoltAc",
    /** */
    MicrovoltsAc = "MicrovoltAc",
    /** */
    MillivoltsAc = "MillivoltAc",
    /** */
    KilovoltsAc = "KilovoltAc",
    /** */
    MegavoltsAc = "MegavoltAc"
}

/** The Electric Potential of a system known to use Alternating Current. */
export class ElectricPotentialAc extends BaseUnit {
    private value: number;
    private voltsacLazy: number | null = null;
    private microvoltsacLazy: number | null = null;
    private millivoltsacLazy: number | null = null;
    private kilovoltsacLazy: number | null = null;
    private megavoltsacLazy: number | null = null;

    /**
     * Create a new ElectricPotentialAc.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotentialAc’ unit to create from.
     * The default unit is VoltsAc
     */
    public constructor(value: number, fromUnit: ElectricPotentialAcUnits = ElectricPotentialAcUnits.VoltsAc) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricPotentialAc is VoltsAc.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get VoltsAc(): number {
        if(this.voltsacLazy !== null){
            return this.voltsacLazy;
        }
        return this.voltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.VoltsAc);
    }

    /** */
    public get MicrovoltsAc(): number {
        if(this.microvoltsacLazy !== null){
            return this.microvoltsacLazy;
        }
        return this.microvoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.MicrovoltsAc);
    }

    /** */
    public get MillivoltsAc(): number {
        if(this.millivoltsacLazy !== null){
            return this.millivoltsacLazy;
        }
        return this.millivoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.MillivoltsAc);
    }

    /** */
    public get KilovoltsAc(): number {
        if(this.kilovoltsacLazy !== null){
            return this.kilovoltsacLazy;
        }
        return this.kilovoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.KilovoltsAc);
    }

    /** */
    public get MegavoltsAc(): number {
        if(this.megavoltsacLazy !== null){
            return this.megavoltsacLazy;
        }
        return this.megavoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.MegavoltsAc);
    }

    /**
     * Create a new ElectricPotentialAc instance from a VoltsAc
     *
     * @param value The unit as VoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    public static FromVoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.VoltsAc);
    }

    /**
     * Create a new ElectricPotentialAc instance from a MicrovoltsAc
     *
     * @param value The unit as MicrovoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    public static FromMicrovoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MicrovoltsAc);
    }

    /**
     * Create a new ElectricPotentialAc instance from a MillivoltsAc
     *
     * @param value The unit as MillivoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    public static FromMillivoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MillivoltsAc);
    }

    /**
     * Create a new ElectricPotentialAc instance from a KilovoltsAc
     *
     * @param value The unit as KilovoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    public static FromKilovoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.KilovoltsAc);
    }

    /**
     * Create a new ElectricPotentialAc instance from a MegavoltsAc
     *
     * @param value The unit as MegavoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    public static FromMegavoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MegavoltsAc);
    }

    /**
     * Convert ElectricPotentialAc to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricPotentialAcUnits): number {
        switch (toUnit) {
            case ElectricPotentialAcUnits.VoltsAc: return this.VoltsAc;
            case ElectricPotentialAcUnits.MicrovoltsAc: return this.MicrovoltsAc;
            case ElectricPotentialAcUnits.MillivoltsAc: return this.MillivoltsAc;
            case ElectricPotentialAcUnits.KilovoltsAc: return this.KilovoltsAc;
            case ElectricPotentialAcUnits.MegavoltsAc: return this.MegavoltsAc;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: ElectricPotentialAcUnits): number {
        switch (toUnit) {
                
            case ElectricPotentialAcUnits.VoltsAc:
                return this.value;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return (this.value) / 0.000001;
            case ElectricPotentialAcUnits.MillivoltsAc:
                return (this.value) / 0.001;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return (this.value) / 1000;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricPotentialAcUnits): number {
        switch (fromUnit) {
                
            case ElectricPotentialAcUnits.VoltsAc:
                return value;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return (value) * 0.000001;
            case ElectricPotentialAcUnits.MillivoltsAc:
                return (value) * 0.001;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return (value) * 1000;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricPotentialAc to string.
     * Note! the default format for ElectricPotentialAc is VoltsAc.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricPotentialAc.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the ElectricPotentialAc.
     */
    public toString(unit: ElectricPotentialAcUnits = ElectricPotentialAcUnits.VoltsAc, fractionalDigits?: number): string {

        switch (unit) {
            
            case ElectricPotentialAcUnits.VoltsAc:
                return super.truncateFractionDigits(this.VoltsAc, fractionalDigits) + ` Vac`;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return super.truncateFractionDigits(this.MicrovoltsAc, fractionalDigits) + ` μVac`;
            case ElectricPotentialAcUnits.MillivoltsAc:
                return super.truncateFractionDigits(this.MillivoltsAc, fractionalDigits) + ` mVac`;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return super.truncateFractionDigits(this.KilovoltsAc, fractionalDigits) + ` kVac`;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return super.truncateFractionDigits(this.MegavoltsAc, fractionalDigits) + ` MVac`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricPotentialAc unit abbreviation.
     * Note! the default abbreviation for ElectricPotentialAc is VoltsAc.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricPotentialAc.
     * @returns The abbreviation string of ElectricPotentialAc.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricPotentialAcUnits = ElectricPotentialAcUnits.VoltsAc): string {

        switch (unitAbbreviation) {
            
            case ElectricPotentialAcUnits.VoltsAc:
                return `Vac`;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return `μVac`;
            case ElectricPotentialAcUnits.MillivoltsAc:
                return `mVac`;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return `kVac`;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return `MVac`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricPotentialAc are equals to the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns True if the given ElectricPotentialAc are equal to the current ElectricPotentialAc.
     */
    public equals(electricPotentialAc: ElectricPotentialAc): boolean {
        return super.internalEquals(this.value, electricPotentialAc.BaseValue);
    }

    /**
     * Compare the given ElectricPotentialAc against the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns 0 if they are equal, -1 if the current ElectricPotentialAc is less then other, 1 if the current ElectricPotentialAc is greater then other.
     */
    public compareTo(electricPotentialAc: ElectricPotentialAc): number {
        return super.internalCompareTo(this.value, electricPotentialAc.BaseValue);
    }

    /**
     * Add the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    public add(electricPotentialAc: ElectricPotentialAc): ElectricPotentialAc {
        return new ElectricPotentialAc(super.internalAdd(this.value, electricPotentialAc.BaseValue))
    }

    /**
     * Subtract the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    public subtract(electricPotentialAc: ElectricPotentialAc): ElectricPotentialAc {
        return new ElectricPotentialAc(super.internalSubtract(this.value, electricPotentialAc.BaseValue))
    }

    /**
     * Multiply the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    public multiply(electricPotentialAc: ElectricPotentialAc): ElectricPotentialAc {
        return new ElectricPotentialAc(super.internalMultiply(this.value, electricPotentialAc.BaseValue))
    }

    /**
     * Divide the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    public divide(electricPotentialAc: ElectricPotentialAc): ElectricPotentialAc {
        return new ElectricPotentialAc(super.internalDivide(this.value, electricPotentialAc.BaseValue))
    }

    /**
     * Modulo the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    public modulo(electricPotentialAc: ElectricPotentialAc): ElectricPotentialAc {
        return new ElectricPotentialAc(super.internalModulo(this.value, electricPotentialAc.BaseValue))
    }

    /**
     * Pow the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    public pow(electricPotentialAc: ElectricPotentialAc): ElectricPotentialAc {
        return new ElectricPotentialAc(super.internalPow(this.value, electricPotentialAc.BaseValue))
    }
}
