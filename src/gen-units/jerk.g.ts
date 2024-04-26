/** API DTO represents a Jerk */
export interface JerkDto {
    /** The value of the Jerk */
    value: number;
    /**  The specific unit that the Jerk value is representing */
    unit: JerkUnits;
}

/** JerkUnits enumeration */
export enum JerkUnits {
    /** */
    MetersPerSecondCubed = "MeterPerSecondCubed",
    /** */
    InchesPerSecondCubed = "InchPerSecondCubed",
    /** */
    FeetPerSecondCubed = "FootPerSecondCubed",
    /** */
    StandardGravitiesPerSecond = "StandardGravitiesPerSecond",
    /** */
    NanometersPerSecondCubed = "NanometerPerSecondCubed",
    /** */
    MicrometersPerSecondCubed = "MicrometerPerSecondCubed",
    /** */
    MillimetersPerSecondCubed = "MillimeterPerSecondCubed",
    /** */
    CentimetersPerSecondCubed = "CentimeterPerSecondCubed",
    /** */
    DecimetersPerSecondCubed = "DecimeterPerSecondCubed",
    /** */
    KilometersPerSecondCubed = "KilometerPerSecondCubed",
    /** */
    MillistandardGravitiesPerSecond = "MillistandardGravitiesPerSecond"
}

/** Jerk or Jolt, in physics, is the rate at which the acceleration of an object changes over time. The SI unit for jerk is the Meter per second cubed (m/s³). Jerks are vector quantities (they have magnitude and direction) and add according to the parallelogram law. */
export class Jerk extends BaseUnit {
    private value: number;
    private meterspersecondcubedLazy: number | null = null;
    private inchespersecondcubedLazy: number | null = null;
    private feetpersecondcubedLazy: number | null = null;
    private standardgravitiespersecondLazy: number | null = null;
    private nanometerspersecondcubedLazy: number | null = null;
    private micrometerspersecondcubedLazy: number | null = null;
    private millimeterspersecondcubedLazy: number | null = null;
    private centimeterspersecondcubedLazy: number | null = null;
    private decimeterspersecondcubedLazy: number | null = null;
    private kilometerspersecondcubedLazy: number | null = null;
    private millistandardgravitiespersecondLazy: number | null = null;

    /**
     * Create a new Jerk.
     * @param value The value.
     * @param fromUnit The ‘Jerk’ unit to create from.
     * The default unit is MetersPerSecondCubed
     */
    public constructor(value: number, fromUnit: JerkUnits = JerkUnits.MetersPerSecondCubed) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Jerk is MetersPerSecondCubed.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get MetersPerSecondCubed(): number {
        if(this.meterspersecondcubedLazy !== null){
            return this.meterspersecondcubedLazy;
        }
        return this.meterspersecondcubedLazy = this.convertFromBase(JerkUnits.MetersPerSecondCubed);
    }

    /** */
    public get InchesPerSecondCubed(): number {
        if(this.inchespersecondcubedLazy !== null){
            return this.inchespersecondcubedLazy;
        }
        return this.inchespersecondcubedLazy = this.convertFromBase(JerkUnits.InchesPerSecondCubed);
    }

    /** */
    public get FeetPerSecondCubed(): number {
        if(this.feetpersecondcubedLazy !== null){
            return this.feetpersecondcubedLazy;
        }
        return this.feetpersecondcubedLazy = this.convertFromBase(JerkUnits.FeetPerSecondCubed);
    }

    /** */
    public get StandardGravitiesPerSecond(): number {
        if(this.standardgravitiespersecondLazy !== null){
            return this.standardgravitiespersecondLazy;
        }
        return this.standardgravitiespersecondLazy = this.convertFromBase(JerkUnits.StandardGravitiesPerSecond);
    }

    /** */
    public get NanometersPerSecondCubed(): number {
        if(this.nanometerspersecondcubedLazy !== null){
            return this.nanometerspersecondcubedLazy;
        }
        return this.nanometerspersecondcubedLazy = this.convertFromBase(JerkUnits.NanometersPerSecondCubed);
    }

    /** */
    public get MicrometersPerSecondCubed(): number {
        if(this.micrometerspersecondcubedLazy !== null){
            return this.micrometerspersecondcubedLazy;
        }
        return this.micrometerspersecondcubedLazy = this.convertFromBase(JerkUnits.MicrometersPerSecondCubed);
    }

    /** */
    public get MillimetersPerSecondCubed(): number {
        if(this.millimeterspersecondcubedLazy !== null){
            return this.millimeterspersecondcubedLazy;
        }
        return this.millimeterspersecondcubedLazy = this.convertFromBase(JerkUnits.MillimetersPerSecondCubed);
    }

    /** */
    public get CentimetersPerSecondCubed(): number {
        if(this.centimeterspersecondcubedLazy !== null){
            return this.centimeterspersecondcubedLazy;
        }
        return this.centimeterspersecondcubedLazy = this.convertFromBase(JerkUnits.CentimetersPerSecondCubed);
    }

    /** */
    public get DecimetersPerSecondCubed(): number {
        if(this.decimeterspersecondcubedLazy !== null){
            return this.decimeterspersecondcubedLazy;
        }
        return this.decimeterspersecondcubedLazy = this.convertFromBase(JerkUnits.DecimetersPerSecondCubed);
    }

    /** */
    public get KilometersPerSecondCubed(): number {
        if(this.kilometerspersecondcubedLazy !== null){
            return this.kilometerspersecondcubedLazy;
        }
        return this.kilometerspersecondcubedLazy = this.convertFromBase(JerkUnits.KilometersPerSecondCubed);
    }

    /** */
    public get MillistandardGravitiesPerSecond(): number {
        if(this.millistandardgravitiespersecondLazy !== null){
            return this.millistandardgravitiespersecondLazy;
        }
        return this.millistandardgravitiespersecondLazy = this.convertFromBase(JerkUnits.MillistandardGravitiesPerSecond);
    }

    /**
     * Create a new Jerk instance from a MetersPerSecondCubed
     *
     * @param value The unit as MetersPerSecondCubed to create a new Jerk from.
     * @returns The new Jerk instance.
     */
    public static FromMetersPerSecondCubed(value: number): Jerk {
        return new Jerk(value, JerkUnits.MetersPerSecondCubed);
    }

    /**
     * Create a new Jerk instance from a InchesPerSecondCubed
     *
     * @param value The unit as InchesPerSecondCubed to create a new Jerk from.
     * @returns The new Jerk instance.
     */
    public static FromInchesPerSecondCubed(value: number): Jerk {
        return new Jerk(value, JerkUnits.InchesPerSecondCubed);
    }

    /**
     * Create a new Jerk instance from a FeetPerSecondCubed
     *
     * @param value The unit as FeetPerSecondCubed to create a new Jerk from.
     * @returns The new Jerk instance.
     */
    public static FromFeetPerSecondCubed(value: number): Jerk {
        return new Jerk(value, JerkUnits.FeetPerSecondCubed);
    }

    /**
     * Create a new Jerk instance from a StandardGravitiesPerSecond
     *
     * @param value The unit as StandardGravitiesPerSecond to create a new Jerk from.
     * @returns The new Jerk instance.
     */
    public static FromStandardGravitiesPerSecond(value: number): Jerk {
        return new Jerk(value, JerkUnits.StandardGravitiesPerSecond);
    }

    /**
     * Create a new Jerk instance from a NanometersPerSecondCubed
     *
     * @param value The unit as NanometersPerSecondCubed to create a new Jerk from.
     * @returns The new Jerk instance.
     */
    public static FromNanometersPerSecondCubed(value: number): Jerk {
        return new Jerk(value, JerkUnits.NanometersPerSecondCubed);
    }

    /**
     * Create a new Jerk instance from a MicrometersPerSecondCubed
     *
     * @param value The unit as MicrometersPerSecondCubed to create a new Jerk from.
     * @returns The new Jerk instance.
     */
    public static FromMicrometersPerSecondCubed(value: number): Jerk {
        return new Jerk(value, JerkUnits.MicrometersPerSecondCubed);
    }

    /**
     * Create a new Jerk instance from a MillimetersPerSecondCubed
     *
     * @param value The unit as MillimetersPerSecondCubed to create a new Jerk from.
     * @returns The new Jerk instance.
     */
    public static FromMillimetersPerSecondCubed(value: number): Jerk {
        return new Jerk(value, JerkUnits.MillimetersPerSecondCubed);
    }

    /**
     * Create a new Jerk instance from a CentimetersPerSecondCubed
     *
     * @param value The unit as CentimetersPerSecondCubed to create a new Jerk from.
     * @returns The new Jerk instance.
     */
    public static FromCentimetersPerSecondCubed(value: number): Jerk {
        return new Jerk(value, JerkUnits.CentimetersPerSecondCubed);
    }

    /**
     * Create a new Jerk instance from a DecimetersPerSecondCubed
     *
     * @param value The unit as DecimetersPerSecondCubed to create a new Jerk from.
     * @returns The new Jerk instance.
     */
    public static FromDecimetersPerSecondCubed(value: number): Jerk {
        return new Jerk(value, JerkUnits.DecimetersPerSecondCubed);
    }

    /**
     * Create a new Jerk instance from a KilometersPerSecondCubed
     *
     * @param value The unit as KilometersPerSecondCubed to create a new Jerk from.
     * @returns The new Jerk instance.
     */
    public static FromKilometersPerSecondCubed(value: number): Jerk {
        return new Jerk(value, JerkUnits.KilometersPerSecondCubed);
    }

    /**
     * Create a new Jerk instance from a MillistandardGravitiesPerSecond
     *
     * @param value The unit as MillistandardGravitiesPerSecond to create a new Jerk from.
     * @returns The new Jerk instance.
     */
    public static FromMillistandardGravitiesPerSecond(value: number): Jerk {
        return new Jerk(value, JerkUnits.MillistandardGravitiesPerSecond);
    }

    /**
     * Create API DTO represent a Jerk unit.
     * @param holdInUnit The specific Jerk unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: JerkUnits = JerkUnits.MetersPerSecondCubed): JerkDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Jerk unit from an API DTO representation.
     * @param dtoJerk The Jerk API DTO representation
     */
    public static FromDto(dtoJerk: JerkDto): Jerk {
        return new Jerk(dtoJerk.value, dtoJerk.unit);
    }

    /**
     * Convert Jerk to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: JerkUnits): number {
        switch (toUnit) {
            case JerkUnits.MetersPerSecondCubed: return this.MetersPerSecondCubed;
            case JerkUnits.InchesPerSecondCubed: return this.InchesPerSecondCubed;
            case JerkUnits.FeetPerSecondCubed: return this.FeetPerSecondCubed;
            case JerkUnits.StandardGravitiesPerSecond: return this.StandardGravitiesPerSecond;
            case JerkUnits.NanometersPerSecondCubed: return this.NanometersPerSecondCubed;
            case JerkUnits.MicrometersPerSecondCubed: return this.MicrometersPerSecondCubed;
            case JerkUnits.MillimetersPerSecondCubed: return this.MillimetersPerSecondCubed;
            case JerkUnits.CentimetersPerSecondCubed: return this.CentimetersPerSecondCubed;
            case JerkUnits.DecimetersPerSecondCubed: return this.DecimetersPerSecondCubed;
            case JerkUnits.KilometersPerSecondCubed: return this.KilometersPerSecondCubed;
            case JerkUnits.MillistandardGravitiesPerSecond: return this.MillistandardGravitiesPerSecond;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: JerkUnits): number {
        switch (toUnit) {
                
            case JerkUnits.MetersPerSecondCubed:
                return this.value;
            case JerkUnits.InchesPerSecondCubed:
                return this.value / 0.0254;
            case JerkUnits.FeetPerSecondCubed:
                return this.value / 0.304800;
            case JerkUnits.StandardGravitiesPerSecond:
                return this.value / 9.80665;
            case JerkUnits.NanometersPerSecondCubed:
                return (this.value) / 1e-9;
            case JerkUnits.MicrometersPerSecondCubed:
                return (this.value) / 0.000001;
            case JerkUnits.MillimetersPerSecondCubed:
                return (this.value) / 0.001;
            case JerkUnits.CentimetersPerSecondCubed:
                return (this.value) / 0.01;
            case JerkUnits.DecimetersPerSecondCubed:
                return (this.value) / 0.1;
            case JerkUnits.KilometersPerSecondCubed:
                return (this.value) / 1000;
            case JerkUnits.MillistandardGravitiesPerSecond:
                return (this.value / 9.80665) / 0.001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: JerkUnits): number {
        switch (fromUnit) {
                
            case JerkUnits.MetersPerSecondCubed:
                return value;
            case JerkUnits.InchesPerSecondCubed:
                return value * 0.0254;
            case JerkUnits.FeetPerSecondCubed:
                return value * 0.304800;
            case JerkUnits.StandardGravitiesPerSecond:
                return value * 9.80665;
            case JerkUnits.NanometersPerSecondCubed:
                return (value) * 1e-9;
            case JerkUnits.MicrometersPerSecondCubed:
                return (value) * 0.000001;
            case JerkUnits.MillimetersPerSecondCubed:
                return (value) * 0.001;
            case JerkUnits.CentimetersPerSecondCubed:
                return (value) * 0.01;
            case JerkUnits.DecimetersPerSecondCubed:
                return (value) * 0.1;
            case JerkUnits.KilometersPerSecondCubed:
                return (value) * 1000;
            case JerkUnits.MillistandardGravitiesPerSecond:
                return (value * 9.80665) * 0.001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Jerk to string.
     * Note! the default format for Jerk is MetersPerSecondCubed.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Jerk.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Jerk.
     */
    public toString(unit: JerkUnits = JerkUnits.MetersPerSecondCubed, fractionalDigits?: number): string {

        switch (unit) {
            
            case JerkUnits.MetersPerSecondCubed:
                return super.truncateFractionDigits(this.MetersPerSecondCubed, fractionalDigits) + ` m/s³`;
            case JerkUnits.InchesPerSecondCubed:
                return super.truncateFractionDigits(this.InchesPerSecondCubed, fractionalDigits) + ` in/s³`;
            case JerkUnits.FeetPerSecondCubed:
                return super.truncateFractionDigits(this.FeetPerSecondCubed, fractionalDigits) + ` ft/s³`;
            case JerkUnits.StandardGravitiesPerSecond:
                return super.truncateFractionDigits(this.StandardGravitiesPerSecond, fractionalDigits) + ` g/s`;
            case JerkUnits.NanometersPerSecondCubed:
                return super.truncateFractionDigits(this.NanometersPerSecondCubed, fractionalDigits) + ` nm/s³`;
            case JerkUnits.MicrometersPerSecondCubed:
                return super.truncateFractionDigits(this.MicrometersPerSecondCubed, fractionalDigits) + ` μm/s³`;
            case JerkUnits.MillimetersPerSecondCubed:
                return super.truncateFractionDigits(this.MillimetersPerSecondCubed, fractionalDigits) + ` mm/s³`;
            case JerkUnits.CentimetersPerSecondCubed:
                return super.truncateFractionDigits(this.CentimetersPerSecondCubed, fractionalDigits) + ` cm/s³`;
            case JerkUnits.DecimetersPerSecondCubed:
                return super.truncateFractionDigits(this.DecimetersPerSecondCubed, fractionalDigits) + ` dm/s³`;
            case JerkUnits.KilometersPerSecondCubed:
                return super.truncateFractionDigits(this.KilometersPerSecondCubed, fractionalDigits) + ` km/s³`;
            case JerkUnits.MillistandardGravitiesPerSecond:
                return super.truncateFractionDigits(this.MillistandardGravitiesPerSecond, fractionalDigits) + ` mg/s`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Jerk unit abbreviation.
     * Note! the default abbreviation for Jerk is MetersPerSecondCubed.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Jerk.
     * @returns The abbreviation string of Jerk.
     */
    public getUnitAbbreviation(unitAbbreviation: JerkUnits = JerkUnits.MetersPerSecondCubed): string {

        switch (unitAbbreviation) {
            
            case JerkUnits.MetersPerSecondCubed:
                return `m/s³`;
            case JerkUnits.InchesPerSecondCubed:
                return `in/s³`;
            case JerkUnits.FeetPerSecondCubed:
                return `ft/s³`;
            case JerkUnits.StandardGravitiesPerSecond:
                return `g/s`;
            case JerkUnits.NanometersPerSecondCubed:
                return `nm/s³`;
            case JerkUnits.MicrometersPerSecondCubed:
                return `μm/s³`;
            case JerkUnits.MillimetersPerSecondCubed:
                return `mm/s³`;
            case JerkUnits.CentimetersPerSecondCubed:
                return `cm/s³`;
            case JerkUnits.DecimetersPerSecondCubed:
                return `dm/s³`;
            case JerkUnits.KilometersPerSecondCubed:
                return `km/s³`;
            case JerkUnits.MillistandardGravitiesPerSecond:
                return `mg/s`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Jerk are equals to the current Jerk.
     * @param jerk The other Jerk.
     * @returns True if the given Jerk are equal to the current Jerk.
     */
    public equals(jerk: Jerk): boolean {
        return super.internalEquals(this.value, jerk.BaseValue);
    }

    /**
     * Compare the given Jerk against the current Jerk.
     * @param jerk The other Jerk.
     * @returns 0 if they are equal, -1 if the current Jerk is less then other, 1 if the current Jerk is greater then other.
     */
    public compareTo(jerk: Jerk): number {
        return super.internalCompareTo(this.value, jerk.BaseValue);
    }

    /**
     * Add the given Jerk with the current Jerk.
     * @param jerk The other Jerk.
     * @returns A new Jerk instance with the results.
     */
    public add(jerk: Jerk): Jerk {
        return new Jerk(super.internalAdd(this.value, jerk.BaseValue))
    }

    /**
     * Subtract the given Jerk with the current Jerk.
     * @param jerk The other Jerk.
     * @returns A new Jerk instance with the results.
     */
    public subtract(jerk: Jerk): Jerk {
        return new Jerk(super.internalSubtract(this.value, jerk.BaseValue))
    }

    /**
     * Multiply the given Jerk with the current Jerk.
     * @param jerk The other Jerk.
     * @returns A new Jerk instance with the results.
     */
    public multiply(jerk: Jerk): Jerk {
        return new Jerk(super.internalMultiply(this.value, jerk.BaseValue))
    }

    /**
     * Divide the given Jerk with the current Jerk.
     * @param jerk The other Jerk.
     * @returns A new Jerk instance with the results.
     */
    public divide(jerk: Jerk): Jerk {
        return new Jerk(super.internalDivide(this.value, jerk.BaseValue))
    }

    /**
     * Modulo the given Jerk with the current Jerk.
     * @param jerk The other Jerk.
     * @returns A new Jerk instance with the results.
     */
    public modulo(jerk: Jerk): Jerk {
        return new Jerk(super.internalModulo(this.value, jerk.BaseValue))
    }

    /**
     * Pow the given Jerk with the current Jerk.
     * @param jerk The other Jerk.
     * @returns A new Jerk instance with the results.
     */
    public pow(jerk: Jerk): Jerk {
        return new Jerk(super.internalPow(this.value, jerk.BaseValue))
    }
}
