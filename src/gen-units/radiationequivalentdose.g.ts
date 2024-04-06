import { BaseUnit } from "../base-unit";

/** RadiationEquivalentDoseUnits enumeration */
export enum RadiationEquivalentDoseUnits {
    /** The sievert is a unit in the International System of Units (SI) intended to represent the stochastic health risk of ionizing radiation, which is defined as the probability of causing radiation-induced cancer and genetic damage. */
    Sieverts = "Sievert",
    /** */
    RoentgensEquivalentMan = "RoentgenEquivalentMan",
    /** */
    Nanosieverts = "Nanosievert",
    /** */
    Microsieverts = "Microsievert",
    /** */
    Millisieverts = "Millisievert",
    /** */
    MilliroentgensEquivalentMan = "MilliroentgenEquivalentMan"
}

/** Equivalent dose is a dose quantity representing the stochastic health effects of low levels of ionizing radiation on the human body which represents the probability of radiation-induced cancer and genetic damage. */
export class RadiationEquivalentDose extends BaseUnit {
    private value: number;
    private sievertsLazy: number | null = null;
    private roentgensequivalentmanLazy: number | null = null;
    private nanosievertsLazy: number | null = null;
    private microsievertsLazy: number | null = null;
    private millisievertsLazy: number | null = null;
    private milliroentgensequivalentmanLazy: number | null = null;

    /**
     * Create a new RadiationEquivalentDose.
     * @param value The value.
     * @param fromUnit The ‘RadiationEquivalentDose’ unit to create from.
     * The default unit is Sieverts
     */
    public constructor(value: number, fromUnit: RadiationEquivalentDoseUnits = RadiationEquivalentDoseUnits.Sieverts) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RadiationEquivalentDose is Sieverts.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** The sievert is a unit in the International System of Units (SI) intended to represent the stochastic health risk of ionizing radiation, which is defined as the probability of causing radiation-induced cancer and genetic damage. */
    public get Sieverts(): number {
        if(this.sievertsLazy !== null){
            return this.sievertsLazy;
        }
        return this.sievertsLazy = this.convertFromBase(RadiationEquivalentDoseUnits.Sieverts);
    }

    /** */
    public get RoentgensEquivalentMan(): number {
        if(this.roentgensequivalentmanLazy !== null){
            return this.roentgensequivalentmanLazy;
        }
        return this.roentgensequivalentmanLazy = this.convertFromBase(RadiationEquivalentDoseUnits.RoentgensEquivalentMan);
    }

    /** */
    public get Nanosieverts(): number {
        if(this.nanosievertsLazy !== null){
            return this.nanosievertsLazy;
        }
        return this.nanosievertsLazy = this.convertFromBase(RadiationEquivalentDoseUnits.Nanosieverts);
    }

    /** */
    public get Microsieverts(): number {
        if(this.microsievertsLazy !== null){
            return this.microsievertsLazy;
        }
        return this.microsievertsLazy = this.convertFromBase(RadiationEquivalentDoseUnits.Microsieverts);
    }

    /** */
    public get Millisieverts(): number {
        if(this.millisievertsLazy !== null){
            return this.millisievertsLazy;
        }
        return this.millisievertsLazy = this.convertFromBase(RadiationEquivalentDoseUnits.Millisieverts);
    }

    /** */
    public get MilliroentgensEquivalentMan(): number {
        if(this.milliroentgensequivalentmanLazy !== null){
            return this.milliroentgensequivalentmanLazy;
        }
        return this.milliroentgensequivalentmanLazy = this.convertFromBase(RadiationEquivalentDoseUnits.MilliroentgensEquivalentMan);
    }

    /**
     * Create a new RadiationEquivalentDose instance from a Sieverts
     * The sievert is a unit in the International System of Units (SI) intended to represent the stochastic health risk of ionizing radiation, which is defined as the probability of causing radiation-induced cancer and genetic damage.
     * @param value The unit as Sieverts to create a new RadiationEquivalentDose from.
     * @returns The new RadiationEquivalentDose instance.
     */
    public static FromSieverts(value: number): RadiationEquivalentDose {
        return new RadiationEquivalentDose(value, RadiationEquivalentDoseUnits.Sieverts);
    }

    /**
     * Create a new RadiationEquivalentDose instance from a RoentgensEquivalentMan
     *
     * @param value The unit as RoentgensEquivalentMan to create a new RadiationEquivalentDose from.
     * @returns The new RadiationEquivalentDose instance.
     */
    public static FromRoentgensEquivalentMan(value: number): RadiationEquivalentDose {
        return new RadiationEquivalentDose(value, RadiationEquivalentDoseUnits.RoentgensEquivalentMan);
    }

    /**
     * Create a new RadiationEquivalentDose instance from a Nanosieverts
     *
     * @param value The unit as Nanosieverts to create a new RadiationEquivalentDose from.
     * @returns The new RadiationEquivalentDose instance.
     */
    public static FromNanosieverts(value: number): RadiationEquivalentDose {
        return new RadiationEquivalentDose(value, RadiationEquivalentDoseUnits.Nanosieverts);
    }

    /**
     * Create a new RadiationEquivalentDose instance from a Microsieverts
     *
     * @param value The unit as Microsieverts to create a new RadiationEquivalentDose from.
     * @returns The new RadiationEquivalentDose instance.
     */
    public static FromMicrosieverts(value: number): RadiationEquivalentDose {
        return new RadiationEquivalentDose(value, RadiationEquivalentDoseUnits.Microsieverts);
    }

    /**
     * Create a new RadiationEquivalentDose instance from a Millisieverts
     *
     * @param value The unit as Millisieverts to create a new RadiationEquivalentDose from.
     * @returns The new RadiationEquivalentDose instance.
     */
    public static FromMillisieverts(value: number): RadiationEquivalentDose {
        return new RadiationEquivalentDose(value, RadiationEquivalentDoseUnits.Millisieverts);
    }

    /**
     * Create a new RadiationEquivalentDose instance from a MilliroentgensEquivalentMan
     *
     * @param value The unit as MilliroentgensEquivalentMan to create a new RadiationEquivalentDose from.
     * @returns The new RadiationEquivalentDose instance.
     */
    public static FromMilliroentgensEquivalentMan(value: number): RadiationEquivalentDose {
        return new RadiationEquivalentDose(value, RadiationEquivalentDoseUnits.MilliroentgensEquivalentMan);
    }

    /**
     * Convert RadiationEquivalentDose to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: RadiationEquivalentDoseUnits): number {
        switch (toUnit) {
            case RadiationEquivalentDoseUnits.Sieverts: return this.Sieverts;
            case RadiationEquivalentDoseUnits.RoentgensEquivalentMan: return this.RoentgensEquivalentMan;
            case RadiationEquivalentDoseUnits.Nanosieverts: return this.Nanosieverts;
            case RadiationEquivalentDoseUnits.Microsieverts: return this.Microsieverts;
            case RadiationEquivalentDoseUnits.Millisieverts: return this.Millisieverts;
            case RadiationEquivalentDoseUnits.MilliroentgensEquivalentMan: return this.MilliroentgensEquivalentMan;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: RadiationEquivalentDoseUnits): number {
        switch (toUnit) {
                
            case RadiationEquivalentDoseUnits.Sieverts:
                return this.value;
            case RadiationEquivalentDoseUnits.RoentgensEquivalentMan:
                return this.value * 100;
            case RadiationEquivalentDoseUnits.Nanosieverts:
                return (this.value) / 1e-9;
            case RadiationEquivalentDoseUnits.Microsieverts:
                return (this.value) / 0.000001;
            case RadiationEquivalentDoseUnits.Millisieverts:
                return (this.value) / 0.001;
            case RadiationEquivalentDoseUnits.MilliroentgensEquivalentMan:
                return (this.value * 100) / 0.001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RadiationEquivalentDoseUnits): number {
        switch (fromUnit) {
                
            case RadiationEquivalentDoseUnits.Sieverts:
                return value;
            case RadiationEquivalentDoseUnits.RoentgensEquivalentMan:
                return value / 100;
            case RadiationEquivalentDoseUnits.Nanosieverts:
                return (value) * 1e-9;
            case RadiationEquivalentDoseUnits.Microsieverts:
                return (value) * 0.000001;
            case RadiationEquivalentDoseUnits.Millisieverts:
                return (value) * 0.001;
            case RadiationEquivalentDoseUnits.MilliroentgensEquivalentMan:
                return (value / 100) * 0.001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the RadiationEquivalentDose to string.
     * Note! the default format for RadiationEquivalentDose is Sieverts.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the RadiationEquivalentDose.
     * @returns The string format of the RadiationEquivalentDose.
     */
    public toString(unit: RadiationEquivalentDoseUnits = RadiationEquivalentDoseUnits.Sieverts): string {

        switch (unit) {
            
            case RadiationEquivalentDoseUnits.Sieverts:
                return this.Sieverts + ` Sv`;
            case RadiationEquivalentDoseUnits.RoentgensEquivalentMan:
                return this.RoentgensEquivalentMan + ` rem`;
            case RadiationEquivalentDoseUnits.Nanosieverts:
                return this.Nanosieverts + ` nSv`;
            case RadiationEquivalentDoseUnits.Microsieverts:
                return this.Microsieverts + ` μSv`;
            case RadiationEquivalentDoseUnits.Millisieverts:
                return this.Millisieverts + ` mSv`;
            case RadiationEquivalentDoseUnits.MilliroentgensEquivalentMan:
                return this.MilliroentgensEquivalentMan + ` mrem`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get RadiationEquivalentDose unit abbreviation.
     * Note! the default abbreviation for RadiationEquivalentDose is Sieverts.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the RadiationEquivalentDose.
     * @returns The abbreviation string of RadiationEquivalentDose.
     */
    public getUnitAbbreviation(unitAbbreviation: RadiationEquivalentDoseUnits = RadiationEquivalentDoseUnits.Sieverts): string {

        switch (unitAbbreviation) {
            
            case RadiationEquivalentDoseUnits.Sieverts:
                return `Sv`;
            case RadiationEquivalentDoseUnits.RoentgensEquivalentMan:
                return `rem`;
            case RadiationEquivalentDoseUnits.Nanosieverts:
                return `nSv`;
            case RadiationEquivalentDoseUnits.Microsieverts:
                return `μSv`;
            case RadiationEquivalentDoseUnits.Millisieverts:
                return `mSv`;
            case RadiationEquivalentDoseUnits.MilliroentgensEquivalentMan:
                return `mrem`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given RadiationEquivalentDose are equals to the current RadiationEquivalentDose.
     * @param radiationEquivalentDose The other RadiationEquivalentDose.
     * @returns True if the given RadiationEquivalentDose are equal to the current RadiationEquivalentDose.
     */
    public equals(radiationEquivalentDose: RadiationEquivalentDose): boolean {
        return super.internalEquals(this.value, radiationEquivalentDose.BaseValue);
    }

    /**
     * Compare the given RadiationEquivalentDose against the current RadiationEquivalentDose.
     * @param radiationEquivalentDose The other RadiationEquivalentDose.
     * @returns 0 if they are equal, -1 if the current RadiationEquivalentDose is less then other, 1 if the current RadiationEquivalentDose is greater then other.
     */
    public compareTo(radiationEquivalentDose: RadiationEquivalentDose): number {
        return super.internalCompareTo(this.value, radiationEquivalentDose.BaseValue);
    }

    /**
     * Add the given RadiationEquivalentDose with the current RadiationEquivalentDose.
     * @param radiationEquivalentDose The other RadiationEquivalentDose.
     * @returns A new RadiationEquivalentDose instance with the results.
     */
    public add(radiationEquivalentDose: RadiationEquivalentDose): RadiationEquivalentDose {
        return new RadiationEquivalentDose(super.internalAdd(this.value, radiationEquivalentDose.BaseValue))
    }

    /**
     * Subtract the given RadiationEquivalentDose with the current RadiationEquivalentDose.
     * @param radiationEquivalentDose The other RadiationEquivalentDose.
     * @returns A new RadiationEquivalentDose instance with the results.
     */
    public subtract(radiationEquivalentDose: RadiationEquivalentDose): RadiationEquivalentDose {
        return new RadiationEquivalentDose(super.internalSubtract(this.value, radiationEquivalentDose.BaseValue))
    }

    /**
     * Multiply the given RadiationEquivalentDose with the current RadiationEquivalentDose.
     * @param radiationEquivalentDose The other RadiationEquivalentDose.
     * @returns A new RadiationEquivalentDose instance with the results.
     */
    public multiply(radiationEquivalentDose: RadiationEquivalentDose): RadiationEquivalentDose {
        return new RadiationEquivalentDose(super.internalMultiply(this.value, radiationEquivalentDose.BaseValue))
    }

    /**
     * Divide the given RadiationEquivalentDose with the current RadiationEquivalentDose.
     * @param radiationEquivalentDose The other RadiationEquivalentDose.
     * @returns A new RadiationEquivalentDose instance with the results.
     */
    public divide(radiationEquivalentDose: RadiationEquivalentDose): RadiationEquivalentDose {
        return new RadiationEquivalentDose(super.internalDivide(this.value, radiationEquivalentDose.BaseValue))
    }

    /**
     * Modulo the given RadiationEquivalentDose with the current RadiationEquivalentDose.
     * @param radiationEquivalentDose The other RadiationEquivalentDose.
     * @returns A new RadiationEquivalentDose instance with the results.
     */
    public modulo(radiationEquivalentDose: RadiationEquivalentDose): RadiationEquivalentDose {
        return new RadiationEquivalentDose(super.internalModulo(this.value, radiationEquivalentDose.BaseValue))
    }

    /**
     * Pow the given RadiationEquivalentDose with the current RadiationEquivalentDose.
     * @param radiationEquivalentDose The other RadiationEquivalentDose.
     * @returns A new RadiationEquivalentDose instance with the results.
     */
    public pow(radiationEquivalentDose: RadiationEquivalentDose): RadiationEquivalentDose {
        return new RadiationEquivalentDose(super.internalPow(this.value, radiationEquivalentDose.BaseValue))
    }
}
