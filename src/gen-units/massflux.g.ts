import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a MassFlux */
export interface MassFluxDto {
    /** The value of the MassFlux */
    value: number;
    /**  The specific unit that the MassFlux value is representing */
    unit: MassFluxUnits;
}

/** MassFluxUnits enumeration */
export enum MassFluxUnits {
    /** */
    GramsPerSecondPerSquareMeter = "GramPerSecondPerSquareMeter",
    /** */
    GramsPerSecondPerSquareCentimeter = "GramPerSecondPerSquareCentimeter",
    /** */
    GramsPerSecondPerSquareMillimeter = "GramPerSecondPerSquareMillimeter",
    /** */
    GramsPerHourPerSquareMeter = "GramPerHourPerSquareMeter",
    /** */
    GramsPerHourPerSquareCentimeter = "GramPerHourPerSquareCentimeter",
    /** */
    GramsPerHourPerSquareMillimeter = "GramPerHourPerSquareMillimeter",
    /** */
    KilogramsPerSecondPerSquareMeter = "KilogramPerSecondPerSquareMeter",
    /** */
    KilogramsPerSecondPerSquareCentimeter = "KilogramPerSecondPerSquareCentimeter",
    /** */
    KilogramsPerSecondPerSquareMillimeter = "KilogramPerSecondPerSquareMillimeter",
    /** */
    KilogramsPerHourPerSquareMeter = "KilogramPerHourPerSquareMeter",
    /** */
    KilogramsPerHourPerSquareCentimeter = "KilogramPerHourPerSquareCentimeter",
    /** */
    KilogramsPerHourPerSquareMillimeter = "KilogramPerHourPerSquareMillimeter"
}

/** Mass flux is the mass flow rate per unit area. */
export class MassFlux extends BaseUnit {
    protected value: number;
    private gramspersecondpersquaremeterLazy: number | null = null;
    private gramspersecondpersquarecentimeterLazy: number | null = null;
    private gramspersecondpersquaremillimeterLazy: number | null = null;
    private gramsperhourpersquaremeterLazy: number | null = null;
    private gramsperhourpersquarecentimeterLazy: number | null = null;
    private gramsperhourpersquaremillimeterLazy: number | null = null;
    private kilogramspersecondpersquaremeterLazy: number | null = null;
    private kilogramspersecondpersquarecentimeterLazy: number | null = null;
    private kilogramspersecondpersquaremillimeterLazy: number | null = null;
    private kilogramsperhourpersquaremeterLazy: number | null = null;
    private kilogramsperhourpersquarecentimeterLazy: number | null = null;
    private kilogramsperhourpersquaremillimeterLazy: number | null = null;

    /**
     * Create a new MassFlux.
     * @param value The value.
     * @param fromUnit The ‘MassFlux’ unit to create from.
     * The default unit is KilogramsPerSecondPerSquareMeter
     */
    public constructor(value: number, fromUnit: MassFluxUnits = MassFluxUnits.KilogramsPerSecondPerSquareMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MassFlux is KilogramsPerSecondPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): MassFluxUnits.KilogramsPerSecondPerSquareMeter {
        return MassFluxUnits.KilogramsPerSecondPerSquareMeter
    }

    /** */
    public get GramsPerSecondPerSquareMeter(): number {
        if(this.gramspersecondpersquaremeterLazy !== null){
            return this.gramspersecondpersquaremeterLazy;
        }
        return this.gramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.GramsPerSecondPerSquareMeter);
    }

    /** */
    public get GramsPerSecondPerSquareCentimeter(): number {
        if(this.gramspersecondpersquarecentimeterLazy !== null){
            return this.gramspersecondpersquarecentimeterLazy;
        }
        return this.gramspersecondpersquarecentimeterLazy = this.convertFromBase(MassFluxUnits.GramsPerSecondPerSquareCentimeter);
    }

    /** */
    public get GramsPerSecondPerSquareMillimeter(): number {
        if(this.gramspersecondpersquaremillimeterLazy !== null){
            return this.gramspersecondpersquaremillimeterLazy;
        }
        return this.gramspersecondpersquaremillimeterLazy = this.convertFromBase(MassFluxUnits.GramsPerSecondPerSquareMillimeter);
    }

    /** */
    public get GramsPerHourPerSquareMeter(): number {
        if(this.gramsperhourpersquaremeterLazy !== null){
            return this.gramsperhourpersquaremeterLazy;
        }
        return this.gramsperhourpersquaremeterLazy = this.convertFromBase(MassFluxUnits.GramsPerHourPerSquareMeter);
    }

    /** */
    public get GramsPerHourPerSquareCentimeter(): number {
        if(this.gramsperhourpersquarecentimeterLazy !== null){
            return this.gramsperhourpersquarecentimeterLazy;
        }
        return this.gramsperhourpersquarecentimeterLazy = this.convertFromBase(MassFluxUnits.GramsPerHourPerSquareCentimeter);
    }

    /** */
    public get GramsPerHourPerSquareMillimeter(): number {
        if(this.gramsperhourpersquaremillimeterLazy !== null){
            return this.gramsperhourpersquaremillimeterLazy;
        }
        return this.gramsperhourpersquaremillimeterLazy = this.convertFromBase(MassFluxUnits.GramsPerHourPerSquareMillimeter);
    }

    /** */
    public get KilogramsPerSecondPerSquareMeter(): number {
        if(this.kilogramspersecondpersquaremeterLazy !== null){
            return this.kilogramspersecondpersquaremeterLazy;
        }
        return this.kilogramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.KilogramsPerSecondPerSquareMeter);
    }

    /** */
    public get KilogramsPerSecondPerSquareCentimeter(): number {
        if(this.kilogramspersecondpersquarecentimeterLazy !== null){
            return this.kilogramspersecondpersquarecentimeterLazy;
        }
        return this.kilogramspersecondpersquarecentimeterLazy = this.convertFromBase(MassFluxUnits.KilogramsPerSecondPerSquareCentimeter);
    }

    /** */
    public get KilogramsPerSecondPerSquareMillimeter(): number {
        if(this.kilogramspersecondpersquaremillimeterLazy !== null){
            return this.kilogramspersecondpersquaremillimeterLazy;
        }
        return this.kilogramspersecondpersquaremillimeterLazy = this.convertFromBase(MassFluxUnits.KilogramsPerSecondPerSquareMillimeter);
    }

    /** */
    public get KilogramsPerHourPerSquareMeter(): number {
        if(this.kilogramsperhourpersquaremeterLazy !== null){
            return this.kilogramsperhourpersquaremeterLazy;
        }
        return this.kilogramsperhourpersquaremeterLazy = this.convertFromBase(MassFluxUnits.KilogramsPerHourPerSquareMeter);
    }

    /** */
    public get KilogramsPerHourPerSquareCentimeter(): number {
        if(this.kilogramsperhourpersquarecentimeterLazy !== null){
            return this.kilogramsperhourpersquarecentimeterLazy;
        }
        return this.kilogramsperhourpersquarecentimeterLazy = this.convertFromBase(MassFluxUnits.KilogramsPerHourPerSquareCentimeter);
    }

    /** */
    public get KilogramsPerHourPerSquareMillimeter(): number {
        if(this.kilogramsperhourpersquaremillimeterLazy !== null){
            return this.kilogramsperhourpersquaremillimeterLazy;
        }
        return this.kilogramsperhourpersquaremillimeterLazy = this.convertFromBase(MassFluxUnits.KilogramsPerHourPerSquareMillimeter);
    }

    /**
     * Create a new MassFlux instance from a GramsPerSecondPerSquareMeter
     *
     * @param value The unit as GramsPerSecondPerSquareMeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromGramsPerSecondPerSquareMeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.GramsPerSecondPerSquareMeter);
    }

    /**
     * Create a new MassFlux instance from a GramsPerSecondPerSquareCentimeter
     *
     * @param value The unit as GramsPerSecondPerSquareCentimeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromGramsPerSecondPerSquareCentimeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.GramsPerSecondPerSquareCentimeter);
    }

    /**
     * Create a new MassFlux instance from a GramsPerSecondPerSquareMillimeter
     *
     * @param value The unit as GramsPerSecondPerSquareMillimeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromGramsPerSecondPerSquareMillimeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.GramsPerSecondPerSquareMillimeter);
    }

    /**
     * Create a new MassFlux instance from a GramsPerHourPerSquareMeter
     *
     * @param value The unit as GramsPerHourPerSquareMeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromGramsPerHourPerSquareMeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.GramsPerHourPerSquareMeter);
    }

    /**
     * Create a new MassFlux instance from a GramsPerHourPerSquareCentimeter
     *
     * @param value The unit as GramsPerHourPerSquareCentimeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromGramsPerHourPerSquareCentimeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.GramsPerHourPerSquareCentimeter);
    }

    /**
     * Create a new MassFlux instance from a GramsPerHourPerSquareMillimeter
     *
     * @param value The unit as GramsPerHourPerSquareMillimeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromGramsPerHourPerSquareMillimeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.GramsPerHourPerSquareMillimeter);
    }

    /**
     * Create a new MassFlux instance from a KilogramsPerSecondPerSquareMeter
     *
     * @param value The unit as KilogramsPerSecondPerSquareMeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromKilogramsPerSecondPerSquareMeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.KilogramsPerSecondPerSquareMeter);
    }

    /**
     * Create a new MassFlux instance from a KilogramsPerSecondPerSquareCentimeter
     *
     * @param value The unit as KilogramsPerSecondPerSquareCentimeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromKilogramsPerSecondPerSquareCentimeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.KilogramsPerSecondPerSquareCentimeter);
    }

    /**
     * Create a new MassFlux instance from a KilogramsPerSecondPerSquareMillimeter
     *
     * @param value The unit as KilogramsPerSecondPerSquareMillimeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromKilogramsPerSecondPerSquareMillimeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.KilogramsPerSecondPerSquareMillimeter);
    }

    /**
     * Create a new MassFlux instance from a KilogramsPerHourPerSquareMeter
     *
     * @param value The unit as KilogramsPerHourPerSquareMeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromKilogramsPerHourPerSquareMeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.KilogramsPerHourPerSquareMeter);
    }

    /**
     * Create a new MassFlux instance from a KilogramsPerHourPerSquareCentimeter
     *
     * @param value The unit as KilogramsPerHourPerSquareCentimeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromKilogramsPerHourPerSquareCentimeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.KilogramsPerHourPerSquareCentimeter);
    }

    /**
     * Create a new MassFlux instance from a KilogramsPerHourPerSquareMillimeter
     *
     * @param value The unit as KilogramsPerHourPerSquareMillimeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    public static FromKilogramsPerHourPerSquareMillimeter(value: number): MassFlux {
        return new MassFlux(value, MassFluxUnits.KilogramsPerHourPerSquareMillimeter);
    }

    /**
     * Gets the base unit enumeration associated with MassFlux
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof MassFluxUnits {
        return MassFluxUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): MassFluxUnits.KilogramsPerSecondPerSquareMeter {
        return MassFluxUnits.KilogramsPerSecondPerSquareMeter;
    }

    /**
     * Create API DTO represent a MassFlux unit.
     * @param holdInUnit The specific MassFlux unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: MassFluxUnits = MassFluxUnits.KilogramsPerSecondPerSquareMeter): MassFluxDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a MassFlux unit from an API DTO representation.
     * @param dtoMassFlux The MassFlux API DTO representation
     */
    public static FromDto(dtoMassFlux: MassFluxDto): MassFlux {
        return new MassFlux(dtoMassFlux.value, dtoMassFlux.unit);
    }

    /**
     * Convert MassFlux to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: MassFluxUnits): number {
        switch (toUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter: return this.GramsPerSecondPerSquareMeter;
            case MassFluxUnits.GramsPerSecondPerSquareCentimeter: return this.GramsPerSecondPerSquareCentimeter;
            case MassFluxUnits.GramsPerSecondPerSquareMillimeter: return this.GramsPerSecondPerSquareMillimeter;
            case MassFluxUnits.GramsPerHourPerSquareMeter: return this.GramsPerHourPerSquareMeter;
            case MassFluxUnits.GramsPerHourPerSquareCentimeter: return this.GramsPerHourPerSquareCentimeter;
            case MassFluxUnits.GramsPerHourPerSquareMillimeter: return this.GramsPerHourPerSquareMillimeter;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter: return this.KilogramsPerSecondPerSquareMeter;
            case MassFluxUnits.KilogramsPerSecondPerSquareCentimeter: return this.KilogramsPerSecondPerSquareCentimeter;
            case MassFluxUnits.KilogramsPerSecondPerSquareMillimeter: return this.KilogramsPerSecondPerSquareMillimeter;
            case MassFluxUnits.KilogramsPerHourPerSquareMeter: return this.KilogramsPerHourPerSquareMeter;
            case MassFluxUnits.KilogramsPerHourPerSquareCentimeter: return this.KilogramsPerHourPerSquareCentimeter;
            case MassFluxUnits.KilogramsPerHourPerSquareMillimeter: return this.KilogramsPerHourPerSquareMillimeter;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: MassFluxUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case MassFluxUnits.GramsPerSecondPerSquareMeter: return super.internalMultiply(this.value, 1e3);
                case MassFluxUnits.GramsPerSecondPerSquareCentimeter: return super.internalMultiply(this.value, 1e-1);
                case MassFluxUnits.GramsPerSecondPerSquareMillimeter: return super.internalMultiply(this.value, 1e-3);
                case MassFluxUnits.GramsPerHourPerSquareMeter: return super.internalMultiply(this.value, 3.6e6);
                case MassFluxUnits.GramsPerHourPerSquareCentimeter: return super.internalMultiply(this.value, 3.6e2);
                case MassFluxUnits.GramsPerHourPerSquareMillimeter: return super.internalMultiply(this.value, 3.6e0);
                case MassFluxUnits.KilogramsPerSecondPerSquareMeter: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 1000);
                }
                case MassFluxUnits.KilogramsPerSecondPerSquareCentimeter: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 1000);
                }
                case MassFluxUnits.KilogramsPerSecondPerSquareMillimeter: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1000);
                }
                case MassFluxUnits.KilogramsPerHourPerSquareMeter: {
                    const v3 = super.internalMultiply(this.value, 3.6e6);
                    return super.internalDivide(v3, 1000);
                }
                case MassFluxUnits.KilogramsPerHourPerSquareCentimeter: {
                    const v3 = super.internalMultiply(this.value, 3.6e2);
                    return super.internalDivide(v3, 1000);
                }
                case MassFluxUnits.KilogramsPerHourPerSquareMillimeter: {
                    const v3 = super.internalMultiply(this.value, 3.6e0);
                    return super.internalDivide(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter: return this.value * 1e3;
            case MassFluxUnits.GramsPerSecondPerSquareCentimeter: return this.value * 1e-1;
            case MassFluxUnits.GramsPerSecondPerSquareMillimeter: return this.value * 1e-3;
            case MassFluxUnits.GramsPerHourPerSquareMeter: return this.value * 3.6e6;
            case MassFluxUnits.GramsPerHourPerSquareCentimeter: return this.value * 3.6e2;
            case MassFluxUnits.GramsPerHourPerSquareMillimeter: return this.value * 3.6e0;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter: return (this.value * 1e3) / 1000;
            case MassFluxUnits.KilogramsPerSecondPerSquareCentimeter: return (this.value * 1e-1) / 1000;
            case MassFluxUnits.KilogramsPerSecondPerSquareMillimeter: return (this.value * 1e-3) / 1000;
            case MassFluxUnits.KilogramsPerHourPerSquareMeter: return (this.value * 3.6e6) / 1000;
            case MassFluxUnits.KilogramsPerHourPerSquareCentimeter: return (this.value * 3.6e2) / 1000;
            case MassFluxUnits.KilogramsPerHourPerSquareMillimeter: return (this.value * 3.6e0) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: MassFluxUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case MassFluxUnits.GramsPerSecondPerSquareMeter: return super.internalDivide(value, 1e3);
                case MassFluxUnits.GramsPerSecondPerSquareCentimeter: return super.internalDivide(value, 1e-1);
                case MassFluxUnits.GramsPerSecondPerSquareMillimeter: return super.internalDivide(value, 1e-3);
                case MassFluxUnits.GramsPerHourPerSquareMeter: return super.internalDivide(value, 3.6e6);
                case MassFluxUnits.GramsPerHourPerSquareCentimeter: return super.internalDivide(value, 3.6e2);
                case MassFluxUnits.GramsPerHourPerSquareMillimeter: return super.internalDivide(value, 3.6e0);
                case MassFluxUnits.KilogramsPerSecondPerSquareMeter: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 1000);
                }
                case MassFluxUnits.KilogramsPerSecondPerSquareCentimeter: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 1000);
                }
                case MassFluxUnits.KilogramsPerSecondPerSquareMillimeter: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1000);
                }
                case MassFluxUnits.KilogramsPerHourPerSquareMeter: {
                    const v3 = super.internalDivide(value, 3.6e6);
                    return super.internalMultiply(v3, 1000);
                }
                case MassFluxUnits.KilogramsPerHourPerSquareCentimeter: {
                    const v3 = super.internalDivide(value, 3.6e2);
                    return super.internalMultiply(v3, 1000);
                }
                case MassFluxUnits.KilogramsPerHourPerSquareMillimeter: {
                    const v3 = super.internalDivide(value, 3.6e0);
                    return super.internalMultiply(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter: return value / 1e3;
            case MassFluxUnits.GramsPerSecondPerSquareCentimeter: return value / 1e-1;
            case MassFluxUnits.GramsPerSecondPerSquareMillimeter: return value / 1e-3;
            case MassFluxUnits.GramsPerHourPerSquareMeter: return value / 3.6e6;
            case MassFluxUnits.GramsPerHourPerSquareCentimeter: return value / 3.6e2;
            case MassFluxUnits.GramsPerHourPerSquareMillimeter: return value / 3.6e0;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter: return (value / 1e3) * 1000;
            case MassFluxUnits.KilogramsPerSecondPerSquareCentimeter: return (value / 1e-1) * 1000;
            case MassFluxUnits.KilogramsPerSecondPerSquareMillimeter: return (value / 1e-3) * 1000;
            case MassFluxUnits.KilogramsPerHourPerSquareMeter: return (value / 3.6e6) * 1000;
            case MassFluxUnits.KilogramsPerHourPerSquareCentimeter: return (value / 3.6e2) * 1000;
            case MassFluxUnits.KilogramsPerHourPerSquareMillimeter: return (value / 3.6e0) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the MassFlux to string.
     * Note! the default format for MassFlux is KilogramsPerSecondPerSquareMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the MassFlux.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the MassFlux.
     */
    public toString(unit: MassFluxUnits = MassFluxUnits.KilogramsPerSecondPerSquareMeter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return super.truncateFractionDigits(this.GramsPerSecondPerSquareMeter, options as ToStringOptions) + ` g·s⁻¹·m⁻²`;
            case MassFluxUnits.GramsPerSecondPerSquareCentimeter:
                return super.truncateFractionDigits(this.GramsPerSecondPerSquareCentimeter, options as ToStringOptions) + ` g·s⁻¹·cm⁻²`;
            case MassFluxUnits.GramsPerSecondPerSquareMillimeter:
                return super.truncateFractionDigits(this.GramsPerSecondPerSquareMillimeter, options as ToStringOptions) + ` g·s⁻¹·mm⁻²`;
            case MassFluxUnits.GramsPerHourPerSquareMeter:
                return super.truncateFractionDigits(this.GramsPerHourPerSquareMeter, options as ToStringOptions) + ` g·h⁻¹·m⁻²`;
            case MassFluxUnits.GramsPerHourPerSquareCentimeter:
                return super.truncateFractionDigits(this.GramsPerHourPerSquareCentimeter, options as ToStringOptions) + ` g·h⁻¹·cm⁻²`;
            case MassFluxUnits.GramsPerHourPerSquareMillimeter:
                return super.truncateFractionDigits(this.GramsPerHourPerSquareMillimeter, options as ToStringOptions) + ` g·h⁻¹·mm⁻²`;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return super.truncateFractionDigits(this.KilogramsPerSecondPerSquareMeter, options as ToStringOptions) + ` kg·s⁻¹·m⁻²`;
            case MassFluxUnits.KilogramsPerSecondPerSquareCentimeter:
                return super.truncateFractionDigits(this.KilogramsPerSecondPerSquareCentimeter, options as ToStringOptions) + ` kg·s⁻¹·cm⁻²`;
            case MassFluxUnits.KilogramsPerSecondPerSquareMillimeter:
                return super.truncateFractionDigits(this.KilogramsPerSecondPerSquareMillimeter, options as ToStringOptions) + ` kg·s⁻¹·mm⁻²`;
            case MassFluxUnits.KilogramsPerHourPerSquareMeter:
                return super.truncateFractionDigits(this.KilogramsPerHourPerSquareMeter, options as ToStringOptions) + ` kg·h⁻¹·m⁻²`;
            case MassFluxUnits.KilogramsPerHourPerSquareCentimeter:
                return super.truncateFractionDigits(this.KilogramsPerHourPerSquareCentimeter, options as ToStringOptions) + ` kg·h⁻¹·cm⁻²`;
            case MassFluxUnits.KilogramsPerHourPerSquareMillimeter:
                return super.truncateFractionDigits(this.KilogramsPerHourPerSquareMillimeter, options as ToStringOptions) + ` kg·h⁻¹·mm⁻²`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get MassFlux unit abbreviation.
     * Note! the default abbreviation for MassFlux is KilogramsPerSecondPerSquareMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the MassFlux.
     * @returns The abbreviation string of MassFlux.
     */
    public getUnitAbbreviation(unitAbbreviation: MassFluxUnits = MassFluxUnits.KilogramsPerSecondPerSquareMeter): string {

        switch (unitAbbreviation) {
            
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return `g·s⁻¹·m⁻²`;
            case MassFluxUnits.GramsPerSecondPerSquareCentimeter:
                return `g·s⁻¹·cm⁻²`;
            case MassFluxUnits.GramsPerSecondPerSquareMillimeter:
                return `g·s⁻¹·mm⁻²`;
            case MassFluxUnits.GramsPerHourPerSquareMeter:
                return `g·h⁻¹·m⁻²`;
            case MassFluxUnits.GramsPerHourPerSquareCentimeter:
                return `g·h⁻¹·cm⁻²`;
            case MassFluxUnits.GramsPerHourPerSquareMillimeter:
                return `g·h⁻¹·mm⁻²`;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return `kg·s⁻¹·m⁻²`;
            case MassFluxUnits.KilogramsPerSecondPerSquareCentimeter:
                return `kg·s⁻¹·cm⁻²`;
            case MassFluxUnits.KilogramsPerSecondPerSquareMillimeter:
                return `kg·s⁻¹·mm⁻²`;
            case MassFluxUnits.KilogramsPerHourPerSquareMeter:
                return `kg·h⁻¹·m⁻²`;
            case MassFluxUnits.KilogramsPerHourPerSquareCentimeter:
                return `kg·h⁻¹·cm⁻²`;
            case MassFluxUnits.KilogramsPerHourPerSquareMillimeter:
                return `kg·h⁻¹·mm⁻²`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given MassFlux are equals to the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns True if the given MassFlux are equal to the current MassFlux.
     */
    public equals(massFlux: MassFlux): boolean {
        return super.internalEquals(this.value, massFlux.BaseValue);
    }

    /**
     * Compare the given MassFlux against the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns 0 if they are equal, -1 if the current MassFlux is less then other, 1 if the current MassFlux is greater then other.
     */
    public compareTo(massFlux: MassFlux): number {
        return super.internalCompareTo(this.value, massFlux.BaseValue);
    }

    /**
     * Add the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    public add(massFlux: MassFlux): MassFlux {
        return new MassFlux(super.internalAdd(this.value, massFlux.BaseValue))
    }

    /**
     * Subtract the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    public subtract(massFlux: MassFlux): MassFlux {
        return new MassFlux(super.internalSubtract(this.value, massFlux.BaseValue))
    }

    /**
     * Multiply the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    public multiply(massFlux: MassFlux): MassFlux {
        return new MassFlux(super.internalMultiply(this.value, massFlux.BaseValue))
    }

    /**
     * Divide the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    public divide(massFlux: MassFlux): MassFlux {
        return new MassFlux(super.internalDivide(this.value, massFlux.BaseValue))
    }

    /**
     * Modulo the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    public modulo(massFlux: MassFlux): MassFlux {
        return new MassFlux(super.internalModulo(this.value, massFlux.BaseValue))
    }

    /**
     * Pow the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    public pow(massFlux: MassFlux): MassFlux {
        return new MassFlux(super.internalPow(this.value, massFlux.BaseValue))
    }
}
