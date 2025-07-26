import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ElectricCharge */
export interface ElectricChargeDto {
    /** The value of the ElectricCharge */
    value: number;
    /**  The specific unit that the ElectricCharge value is representing */
    unit: ElectricChargeUnits;
}

/** ElectricChargeUnits enumeration */
export enum ElectricChargeUnits {
    /** */
    Coulombs = "Coulomb",
    /** */
    AmpereHours = "AmpereHour",
    /** */
    Picocoulombs = "Picocoulomb",
    /** */
    Nanocoulombs = "Nanocoulomb",
    /** */
    Microcoulombs = "Microcoulomb",
    /** */
    Millicoulombs = "Millicoulomb",
    /** */
    Kilocoulombs = "Kilocoulomb",
    /** */
    Megacoulombs = "Megacoulomb",
    /** */
    MilliampereHours = "MilliampereHour",
    /** */
    KiloampereHours = "KiloampereHour",
    /** */
    MegaampereHours = "MegaampereHour"
}

/** Electric charge is the physical property of matter that causes it to experience a force when placed in an electromagnetic field. */
export class ElectricCharge extends BaseUnit {
    protected value: number;
    private coulombsLazy: number | null = null;
    private amperehoursLazy: number | null = null;
    private picocoulombsLazy: number | null = null;
    private nanocoulombsLazy: number | null = null;
    private microcoulombsLazy: number | null = null;
    private millicoulombsLazy: number | null = null;
    private kilocoulombsLazy: number | null = null;
    private megacoulombsLazy: number | null = null;
    private milliamperehoursLazy: number | null = null;
    private kiloamperehoursLazy: number | null = null;
    private megaamperehoursLazy: number | null = null;

    /**
     * Create a new ElectricCharge.
     * @param value The value.
     * @param fromUnit The ‘ElectricCharge’ unit to create from.
     * The default unit is Coulombs
     */
    public constructor(value: number, fromUnit: ElectricChargeUnits = ElectricChargeUnits.Coulombs) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricCharge is Coulombs.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ElectricChargeUnits.Coulombs {
        return ElectricChargeUnits.Coulombs
    }

    /** */
    public get Coulombs(): number {
        if(this.coulombsLazy !== null){
            return this.coulombsLazy;
        }
        return this.coulombsLazy = this.convertFromBase(ElectricChargeUnits.Coulombs);
    }

    /** */
    public get AmpereHours(): number {
        if(this.amperehoursLazy !== null){
            return this.amperehoursLazy;
        }
        return this.amperehoursLazy = this.convertFromBase(ElectricChargeUnits.AmpereHours);
    }

    /** */
    public get Picocoulombs(): number {
        if(this.picocoulombsLazy !== null){
            return this.picocoulombsLazy;
        }
        return this.picocoulombsLazy = this.convertFromBase(ElectricChargeUnits.Picocoulombs);
    }

    /** */
    public get Nanocoulombs(): number {
        if(this.nanocoulombsLazy !== null){
            return this.nanocoulombsLazy;
        }
        return this.nanocoulombsLazy = this.convertFromBase(ElectricChargeUnits.Nanocoulombs);
    }

    /** */
    public get Microcoulombs(): number {
        if(this.microcoulombsLazy !== null){
            return this.microcoulombsLazy;
        }
        return this.microcoulombsLazy = this.convertFromBase(ElectricChargeUnits.Microcoulombs);
    }

    /** */
    public get Millicoulombs(): number {
        if(this.millicoulombsLazy !== null){
            return this.millicoulombsLazy;
        }
        return this.millicoulombsLazy = this.convertFromBase(ElectricChargeUnits.Millicoulombs);
    }

    /** */
    public get Kilocoulombs(): number {
        if(this.kilocoulombsLazy !== null){
            return this.kilocoulombsLazy;
        }
        return this.kilocoulombsLazy = this.convertFromBase(ElectricChargeUnits.Kilocoulombs);
    }

    /** */
    public get Megacoulombs(): number {
        if(this.megacoulombsLazy !== null){
            return this.megacoulombsLazy;
        }
        return this.megacoulombsLazy = this.convertFromBase(ElectricChargeUnits.Megacoulombs);
    }

    /** */
    public get MilliampereHours(): number {
        if(this.milliamperehoursLazy !== null){
            return this.milliamperehoursLazy;
        }
        return this.milliamperehoursLazy = this.convertFromBase(ElectricChargeUnits.MilliampereHours);
    }

    /** */
    public get KiloampereHours(): number {
        if(this.kiloamperehoursLazy !== null){
            return this.kiloamperehoursLazy;
        }
        return this.kiloamperehoursLazy = this.convertFromBase(ElectricChargeUnits.KiloampereHours);
    }

    /** */
    public get MegaampereHours(): number {
        if(this.megaamperehoursLazy !== null){
            return this.megaamperehoursLazy;
        }
        return this.megaamperehoursLazy = this.convertFromBase(ElectricChargeUnits.MegaampereHours);
    }

    /**
     * Create a new ElectricCharge instance from a Coulombs
     *
     * @param value The unit as Coulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromCoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Coulombs);
    }

    /**
     * Create a new ElectricCharge instance from a AmpereHours
     *
     * @param value The unit as AmpereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromAmpereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.AmpereHours);
    }

    /**
     * Create a new ElectricCharge instance from a Picocoulombs
     *
     * @param value The unit as Picocoulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromPicocoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Picocoulombs);
    }

    /**
     * Create a new ElectricCharge instance from a Nanocoulombs
     *
     * @param value The unit as Nanocoulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromNanocoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Nanocoulombs);
    }

    /**
     * Create a new ElectricCharge instance from a Microcoulombs
     *
     * @param value The unit as Microcoulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromMicrocoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Microcoulombs);
    }

    /**
     * Create a new ElectricCharge instance from a Millicoulombs
     *
     * @param value The unit as Millicoulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromMillicoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Millicoulombs);
    }

    /**
     * Create a new ElectricCharge instance from a Kilocoulombs
     *
     * @param value The unit as Kilocoulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromKilocoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Kilocoulombs);
    }

    /**
     * Create a new ElectricCharge instance from a Megacoulombs
     *
     * @param value The unit as Megacoulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromMegacoulombs(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.Megacoulombs);
    }

    /**
     * Create a new ElectricCharge instance from a MilliampereHours
     *
     * @param value The unit as MilliampereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromMilliampereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.MilliampereHours);
    }

    /**
     * Create a new ElectricCharge instance from a KiloampereHours
     *
     * @param value The unit as KiloampereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromKiloampereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.KiloampereHours);
    }

    /**
     * Create a new ElectricCharge instance from a MegaampereHours
     *
     * @param value The unit as MegaampereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    public static FromMegaampereHours(value: number): ElectricCharge {
        return new ElectricCharge(value, ElectricChargeUnits.MegaampereHours);
    }

    /**
     * Gets the base unit enumeration associated with ElectricCharge
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ElectricChargeUnits {
        return ElectricChargeUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ElectricChargeUnits.Coulombs {
        return ElectricChargeUnits.Coulombs;
    }

    /**
     * Create API DTO represent a ElectricCharge unit.
     * @param holdInUnit The specific ElectricCharge unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricChargeUnits = ElectricChargeUnits.Coulombs): ElectricChargeDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricCharge unit from an API DTO representation.
     * @param dtoElectricCharge The ElectricCharge API DTO representation
     */
    public static FromDto(dtoElectricCharge: ElectricChargeDto): ElectricCharge {
        return new ElectricCharge(dtoElectricCharge.value, dtoElectricCharge.unit);
    }

    /**
     * Convert ElectricCharge to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricChargeUnits): number {
        switch (toUnit) {
            case ElectricChargeUnits.Coulombs: return this.Coulombs;
            case ElectricChargeUnits.AmpereHours: return this.AmpereHours;
            case ElectricChargeUnits.Picocoulombs: return this.Picocoulombs;
            case ElectricChargeUnits.Nanocoulombs: return this.Nanocoulombs;
            case ElectricChargeUnits.Microcoulombs: return this.Microcoulombs;
            case ElectricChargeUnits.Millicoulombs: return this.Millicoulombs;
            case ElectricChargeUnits.Kilocoulombs: return this.Kilocoulombs;
            case ElectricChargeUnits.Megacoulombs: return this.Megacoulombs;
            case ElectricChargeUnits.MilliampereHours: return this.MilliampereHours;
            case ElectricChargeUnits.KiloampereHours: return this.KiloampereHours;
            case ElectricChargeUnits.MegaampereHours: return this.MegaampereHours;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ElectricChargeUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ElectricChargeUnits.Coulombs: return this.value;
                case ElectricChargeUnits.AmpereHours: return super.internalDivide(this.value, 3600);
                case ElectricChargeUnits.Picocoulombs: return super.internalDivide(this.value, 1e-12);
                case ElectricChargeUnits.Nanocoulombs: return super.internalDivide(this.value, 1e-9);
                case ElectricChargeUnits.Microcoulombs: return super.internalDivide(this.value, 0.000001);
                case ElectricChargeUnits.Millicoulombs: return super.internalDivide(this.value, 0.001);
                case ElectricChargeUnits.Kilocoulombs: return super.internalDivide(this.value, 1000);
                case ElectricChargeUnits.Megacoulombs: return super.internalDivide(this.value, 1000000);
                case ElectricChargeUnits.MilliampereHours: {
                    const v3 = super.internalDivide(this.value, 3600);
                    return super.internalDivide(v3, 0.001);
                }
                case ElectricChargeUnits.KiloampereHours: {
                    const v3 = super.internalDivide(this.value, 3600);
                    return super.internalDivide(v3, 1000);
                }
                case ElectricChargeUnits.MegaampereHours: {
                    const v3 = super.internalDivide(this.value, 3600);
                    return super.internalDivide(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ElectricChargeUnits.Coulombs: return this.value;
            case ElectricChargeUnits.AmpereHours: return this.value / 3600;
            case ElectricChargeUnits.Picocoulombs: return (this.value) / 1e-12;
            case ElectricChargeUnits.Nanocoulombs: return (this.value) / 1e-9;
            case ElectricChargeUnits.Microcoulombs: return (this.value) / 0.000001;
            case ElectricChargeUnits.Millicoulombs: return (this.value) / 0.001;
            case ElectricChargeUnits.Kilocoulombs: return (this.value) / 1000;
            case ElectricChargeUnits.Megacoulombs: return (this.value) / 1000000;
            case ElectricChargeUnits.MilliampereHours: return (this.value / 3600) / 0.001;
            case ElectricChargeUnits.KiloampereHours: return (this.value / 3600) / 1000;
            case ElectricChargeUnits.MegaampereHours: return (this.value / 3600) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ElectricChargeUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ElectricChargeUnits.Coulombs: return value;
                case ElectricChargeUnits.AmpereHours: return super.internalMultiply(value, 3600);
                case ElectricChargeUnits.Picocoulombs: return super.internalMultiply(value, 1e-12);
                case ElectricChargeUnits.Nanocoulombs: return super.internalMultiply(value, 1e-9);
                case ElectricChargeUnits.Microcoulombs: return super.internalMultiply(value, 0.000001);
                case ElectricChargeUnits.Millicoulombs: return super.internalMultiply(value, 0.001);
                case ElectricChargeUnits.Kilocoulombs: return super.internalMultiply(value, 1000);
                case ElectricChargeUnits.Megacoulombs: return super.internalMultiply(value, 1000000);
                case ElectricChargeUnits.MilliampereHours: {
                    const v3 = super.internalMultiply(value, 3600);
                    return super.internalMultiply(v3, 0.001);
                }
                case ElectricChargeUnits.KiloampereHours: {
                    const v3 = super.internalMultiply(value, 3600);
                    return super.internalMultiply(v3, 1000);
                }
                case ElectricChargeUnits.MegaampereHours: {
                    const v3 = super.internalMultiply(value, 3600);
                    return super.internalMultiply(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ElectricChargeUnits.Coulombs: return value;
            case ElectricChargeUnits.AmpereHours: return value * 3600;
            case ElectricChargeUnits.Picocoulombs: return (value) * 1e-12;
            case ElectricChargeUnits.Nanocoulombs: return (value) * 1e-9;
            case ElectricChargeUnits.Microcoulombs: return (value) * 0.000001;
            case ElectricChargeUnits.Millicoulombs: return (value) * 0.001;
            case ElectricChargeUnits.Kilocoulombs: return (value) * 1000;
            case ElectricChargeUnits.Megacoulombs: return (value) * 1000000;
            case ElectricChargeUnits.MilliampereHours: return (value * 3600) * 0.001;
            case ElectricChargeUnits.KiloampereHours: return (value * 3600) * 1000;
            case ElectricChargeUnits.MegaampereHours: return (value * 3600) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ElectricCharge to string.
     * Note! the default format for ElectricCharge is Coulombs.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricCharge.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ElectricCharge.
     */
    public toString(unit: ElectricChargeUnits = ElectricChargeUnits.Coulombs, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ElectricChargeUnits.Coulombs:
                return super.truncateFractionDigits(this.Coulombs, options as ToStringOptions) + ` C`;
            case ElectricChargeUnits.AmpereHours:
                return super.truncateFractionDigits(this.AmpereHours, options as ToStringOptions) + ` A-h`;
            case ElectricChargeUnits.Picocoulombs:
                return super.truncateFractionDigits(this.Picocoulombs, options as ToStringOptions) + ` pC`;
            case ElectricChargeUnits.Nanocoulombs:
                return super.truncateFractionDigits(this.Nanocoulombs, options as ToStringOptions) + ` nC`;
            case ElectricChargeUnits.Microcoulombs:
                return super.truncateFractionDigits(this.Microcoulombs, options as ToStringOptions) + ` μC`;
            case ElectricChargeUnits.Millicoulombs:
                return super.truncateFractionDigits(this.Millicoulombs, options as ToStringOptions) + ` mC`;
            case ElectricChargeUnits.Kilocoulombs:
                return super.truncateFractionDigits(this.Kilocoulombs, options as ToStringOptions) + ` kC`;
            case ElectricChargeUnits.Megacoulombs:
                return super.truncateFractionDigits(this.Megacoulombs, options as ToStringOptions) + ` MC`;
            case ElectricChargeUnits.MilliampereHours:
                return super.truncateFractionDigits(this.MilliampereHours, options as ToStringOptions) + ` mA-h`;
            case ElectricChargeUnits.KiloampereHours:
                return super.truncateFractionDigits(this.KiloampereHours, options as ToStringOptions) + ` kA-h`;
            case ElectricChargeUnits.MegaampereHours:
                return super.truncateFractionDigits(this.MegaampereHours, options as ToStringOptions) + ` MA-h`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricCharge unit abbreviation.
     * Note! the default abbreviation for ElectricCharge is Coulombs.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricCharge.
     * @returns The abbreviation string of ElectricCharge.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricChargeUnits = ElectricChargeUnits.Coulombs): string {

        switch (unitAbbreviation) {
            
            case ElectricChargeUnits.Coulombs:
                return `C`;
            case ElectricChargeUnits.AmpereHours:
                return `A-h`;
            case ElectricChargeUnits.Picocoulombs:
                return `pC`;
            case ElectricChargeUnits.Nanocoulombs:
                return `nC`;
            case ElectricChargeUnits.Microcoulombs:
                return `μC`;
            case ElectricChargeUnits.Millicoulombs:
                return `mC`;
            case ElectricChargeUnits.Kilocoulombs:
                return `kC`;
            case ElectricChargeUnits.Megacoulombs:
                return `MC`;
            case ElectricChargeUnits.MilliampereHours:
                return `mA-h`;
            case ElectricChargeUnits.KiloampereHours:
                return `kA-h`;
            case ElectricChargeUnits.MegaampereHours:
                return `MA-h`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricCharge are equals to the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns True if the given ElectricCharge are equal to the current ElectricCharge.
     */
    public equals(electricCharge: ElectricCharge): boolean {
        return super.internalEquals(this.value, electricCharge.BaseValue);
    }

    /**
     * Compare the given ElectricCharge against the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns 0 if they are equal, -1 if the current ElectricCharge is less then other, 1 if the current ElectricCharge is greater then other.
     */
    public compareTo(electricCharge: ElectricCharge): number {
        return super.internalCompareTo(this.value, electricCharge.BaseValue);
    }

    /**
     * Add the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public add(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(super.internalAdd(this.value, electricCharge.BaseValue))
    }

    /**
     * Subtract the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public subtract(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(super.internalSubtract(this.value, electricCharge.BaseValue))
    }

    /**
     * Multiply the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public multiply(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(super.internalMultiply(this.value, electricCharge.BaseValue))
    }

    /**
     * Divide the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public divide(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(super.internalDivide(this.value, electricCharge.BaseValue))
    }

    /**
     * Modulo the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public modulo(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(super.internalModulo(this.value, electricCharge.BaseValue))
    }

    /**
     * Pow the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    public pow(electricCharge: ElectricCharge): ElectricCharge {
        return new ElectricCharge(super.internalPow(this.value, electricCharge.BaseValue))
    }
}
