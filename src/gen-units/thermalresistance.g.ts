import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ThermalResistance */
export interface ThermalResistanceDto {
    /** The value of the ThermalResistance */
    value: number;
    /**  The specific unit that the ThermalResistance value is representing */
    unit: ThermalResistanceUnits;
}

/** ThermalResistanceUnits enumeration */
export enum ThermalResistanceUnits {
    /** */
    SquareMeterKelvinsPerKilowatt = "SquareMeterKelvinPerKilowatt",
    /** */
    SquareMeterKelvinsPerWatt = "SquareMeterKelvinPerWatt",
    /** */
    SquareMeterDegreesCelsiusPerWatt = "SquareMeterDegreeCelsiusPerWatt",
    /** */
    SquareCentimeterKelvinsPerWatt = "SquareCentimeterKelvinPerWatt",
    /** */
    SquareCentimeterHourDegreesCelsiusPerKilocalorie = "SquareCentimeterHourDegreeCelsiusPerKilocalorie",
    /** */
    HourSquareFeetDegreesFahrenheitPerBtu = "HourSquareFeetDegreeFahrenheitPerBtu"
}

/** Heat Transfer Coefficient or Thermal conductivity - indicates a materials ability to conduct heat. */
export class ThermalResistance extends BaseUnit {
    protected value: number;
    private squaremeterkelvinsperkilowattLazy: number | null = null;
    private squaremeterkelvinsperwattLazy: number | null = null;
    private squaremeterdegreescelsiusperwattLazy: number | null = null;
    private squarecentimeterkelvinsperwattLazy: number | null = null;
    private squarecentimeterhourdegreescelsiusperkilocalorieLazy: number | null = null;
    private hoursquarefeetdegreesfahrenheitperbtuLazy: number | null = null;

    /**
     * Create a new ThermalResistance.
     * @param value The value.
     * @param fromUnit The ‘ThermalResistance’ unit to create from.
     * The default unit is SquareMeterKelvinsPerKilowatt
     */
    public constructor(value: number, fromUnit: ThermalResistanceUnits = ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ThermalResistance is SquareMeterKelvinsPerKilowatt.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt {
        return ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt
    }

    /** */
    public get SquareMeterKelvinsPerKilowatt(): number {
        if(this.squaremeterkelvinsperkilowattLazy !== null){
            return this.squaremeterkelvinsperkilowattLazy;
        }
        return this.squaremeterkelvinsperkilowattLazy = this.convertFromBase(ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt);
    }

    /** */
    public get SquareMeterKelvinsPerWatt(): number {
        if(this.squaremeterkelvinsperwattLazy !== null){
            return this.squaremeterkelvinsperwattLazy;
        }
        return this.squaremeterkelvinsperwattLazy = this.convertFromBase(ThermalResistanceUnits.SquareMeterKelvinsPerWatt);
    }

    /** */
    public get SquareMeterDegreesCelsiusPerWatt(): number {
        if(this.squaremeterdegreescelsiusperwattLazy !== null){
            return this.squaremeterdegreescelsiusperwattLazy;
        }
        return this.squaremeterdegreescelsiusperwattLazy = this.convertFromBase(ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt);
    }

    /** */
    public get SquareCentimeterKelvinsPerWatt(): number {
        if(this.squarecentimeterkelvinsperwattLazy !== null){
            return this.squarecentimeterkelvinsperwattLazy;
        }
        return this.squarecentimeterkelvinsperwattLazy = this.convertFromBase(ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt);
    }

    /** */
    public get SquareCentimeterHourDegreesCelsiusPerKilocalorie(): number {
        if(this.squarecentimeterhourdegreescelsiusperkilocalorieLazy !== null){
            return this.squarecentimeterhourdegreescelsiusperkilocalorieLazy;
        }
        return this.squarecentimeterhourdegreescelsiusperkilocalorieLazy = this.convertFromBase(ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie);
    }

    /** */
    public get HourSquareFeetDegreesFahrenheitPerBtu(): number {
        if(this.hoursquarefeetdegreesfahrenheitperbtuLazy !== null){
            return this.hoursquarefeetdegreesfahrenheitperbtuLazy;
        }
        return this.hoursquarefeetdegreesfahrenheitperbtuLazy = this.convertFromBase(ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu);
    }

    /**
     * Create a new ThermalResistance instance from a SquareMeterKelvinsPerKilowatt
     *
     * @param value The unit as SquareMeterKelvinsPerKilowatt to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromSquareMeterKelvinsPerKilowatt(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt);
    }

    /**
     * Create a new ThermalResistance instance from a SquareMeterKelvinsPerWatt
     *
     * @param value The unit as SquareMeterKelvinsPerWatt to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromSquareMeterKelvinsPerWatt(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareMeterKelvinsPerWatt);
    }

    /**
     * Create a new ThermalResistance instance from a SquareMeterDegreesCelsiusPerWatt
     *
     * @param value The unit as SquareMeterDegreesCelsiusPerWatt to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromSquareMeterDegreesCelsiusPerWatt(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt);
    }

    /**
     * Create a new ThermalResistance instance from a SquareCentimeterKelvinsPerWatt
     *
     * @param value The unit as SquareCentimeterKelvinsPerWatt to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromSquareCentimeterKelvinsPerWatt(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt);
    }

    /**
     * Create a new ThermalResistance instance from a SquareCentimeterHourDegreesCelsiusPerKilocalorie
     *
     * @param value The unit as SquareCentimeterHourDegreesCelsiusPerKilocalorie to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromSquareCentimeterHourDegreesCelsiusPerKilocalorie(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie);
    }

    /**
     * Create a new ThermalResistance instance from a HourSquareFeetDegreesFahrenheitPerBtu
     *
     * @param value The unit as HourSquareFeetDegreesFahrenheitPerBtu to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    public static FromHourSquareFeetDegreesFahrenheitPerBtu(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu);
    }

    /**
     * Gets the base unit enumeration associated with ThermalResistance
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ThermalResistanceUnits {
        return ThermalResistanceUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt {
        return ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt;
    }

    /**
     * Create API DTO represent a ThermalResistance unit.
     * @param holdInUnit The specific ThermalResistance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ThermalResistanceUnits = ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt): ThermalResistanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ThermalResistance unit from an API DTO representation.
     * @param dtoThermalResistance The ThermalResistance API DTO representation
     */
    public static FromDto(dtoThermalResistance: ThermalResistanceDto): ThermalResistance {
        return new ThermalResistance(dtoThermalResistance.value, dtoThermalResistance.unit);
    }

    /**
     * Convert ThermalResistance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ThermalResistanceUnits): number {
        switch (toUnit) {
            case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt: return this.SquareMeterKelvinsPerKilowatt;
            case ThermalResistanceUnits.SquareMeterKelvinsPerWatt: return this.SquareMeterKelvinsPerWatt;
            case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt: return this.SquareMeterDegreesCelsiusPerWatt;
            case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt: return this.SquareCentimeterKelvinsPerWatt;
            case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie: return this.SquareCentimeterHourDegreesCelsiusPerKilocalorie;
            case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu: return this.HourSquareFeetDegreesFahrenheitPerBtu;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ThermalResistanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt: return this.value;
                case ThermalResistanceUnits.SquareMeterKelvinsPerWatt: return super.internalDivide(this.value, 1000);
                case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt: return super.internalDivide(this.value, 1000.0);
                case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt: return super.internalDivide(this.value, 0.1);
                case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie: return super.internalDivide(this.value, 0.0859779507590433);
                case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu: return super.internalDivide(this.value, 176.1121482159839);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt: return this.value;
            case ThermalResistanceUnits.SquareMeterKelvinsPerWatt: return this.value / 1000;
            case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt: return this.value / 1000.0;
            case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt: return this.value / 0.1;
            case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie: return this.value / 0.0859779507590433;
            case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu: return this.value / 176.1121482159839;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ThermalResistanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt: return value;
                case ThermalResistanceUnits.SquareMeterKelvinsPerWatt: return super.internalMultiply(value, 1000);
                case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt: return super.internalMultiply(value, 1000.0);
                case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt: return super.internalMultiply(value, 0.1);
                case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie: return super.internalMultiply(value, 0.0859779507590433);
                case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu: return super.internalMultiply(value, 176.1121482159839);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt: return value;
            case ThermalResistanceUnits.SquareMeterKelvinsPerWatt: return value * 1000;
            case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt: return value * 1000.0;
            case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt: return value * 0.1;
            case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie: return value * 0.0859779507590433;
            case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu: return value * 176.1121482159839;
            default: return Number.NaN;
        }
    }

    /**
     * Format the ThermalResistance to string.
     * Note! the default format for ThermalResistance is SquareMeterKelvinsPerKilowatt.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ThermalResistance.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ThermalResistance.
     */
    public toString(unit: ThermalResistanceUnits = ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt:
                return super.truncateFractionDigits(this.SquareMeterKelvinsPerKilowatt, options as ToStringOptions) + ` m²K/kW`;
            case ThermalResistanceUnits.SquareMeterKelvinsPerWatt:
                return super.truncateFractionDigits(this.SquareMeterKelvinsPerWatt, options as ToStringOptions) + ` m²K/W`;
            case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt:
                return super.truncateFractionDigits(this.SquareMeterDegreesCelsiusPerWatt, options as ToStringOptions) + ` m²°C/W`;
            case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt:
                return super.truncateFractionDigits(this.SquareCentimeterKelvinsPerWatt, options as ToStringOptions) + ` cm²K/W`;
            case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                return super.truncateFractionDigits(this.SquareCentimeterHourDegreesCelsiusPerKilocalorie, options as ToStringOptions) + ` cm²Hr°C/kcal`;
            case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                return super.truncateFractionDigits(this.HourSquareFeetDegreesFahrenheitPerBtu, options as ToStringOptions) + ` Hrft²°F/Btu`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ThermalResistance unit abbreviation.
     * Note! the default abbreviation for ThermalResistance is SquareMeterKelvinsPerKilowatt.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ThermalResistance.
     * @returns The abbreviation string of ThermalResistance.
     */
    public getUnitAbbreviation(unitAbbreviation: ThermalResistanceUnits = ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt): string {

        switch (unitAbbreviation) {
            
            case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt:
                return `m²K/kW`;
            case ThermalResistanceUnits.SquareMeterKelvinsPerWatt:
                return `m²K/W`;
            case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt:
                return `m²°C/W`;
            case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt:
                return `cm²K/W`;
            case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                return `cm²Hr°C/kcal`;
            case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                return `Hrft²°F/Btu`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ThermalResistance are equals to the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns True if the given ThermalResistance are equal to the current ThermalResistance.
     */
    public equals(thermalResistance: ThermalResistance): boolean {
        return super.internalEquals(this.value, thermalResistance.BaseValue);
    }

    /**
     * Compare the given ThermalResistance against the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns 0 if they are equal, -1 if the current ThermalResistance is less then other, 1 if the current ThermalResistance is greater then other.
     */
    public compareTo(thermalResistance: ThermalResistance): number {
        return super.internalCompareTo(this.value, thermalResistance.BaseValue);
    }

    /**
     * Add the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public add(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(super.internalAdd(this.value, thermalResistance.BaseValue))
    }

    /**
     * Subtract the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public subtract(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(super.internalSubtract(this.value, thermalResistance.BaseValue))
    }

    /**
     * Multiply the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public multiply(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(super.internalMultiply(this.value, thermalResistance.BaseValue))
    }

    /**
     * Divide the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public divide(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(super.internalDivide(this.value, thermalResistance.BaseValue))
    }

    /**
     * Modulo the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public modulo(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(super.internalModulo(this.value, thermalResistance.BaseValue))
    }

    /**
     * Pow the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    public pow(thermalResistance: ThermalResistance): ThermalResistance {
        return new ThermalResistance(super.internalPow(this.value, thermalResistance.BaseValue))
    }
}
