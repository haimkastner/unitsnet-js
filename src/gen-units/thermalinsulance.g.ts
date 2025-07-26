import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a ThermalInsulance */
export interface ThermalInsulanceDto {
    /** The value of the ThermalInsulance */
    value: number;
    /**  The specific unit that the ThermalInsulance value is representing */
    unit: ThermalInsulanceUnits;
}

/** ThermalInsulanceUnits enumeration */
export enum ThermalInsulanceUnits {
    /** */
    SquareMeterKelvinsPerKilowatt = "SquareMeterKelvinPerKilowatt",
    /** */
    SquareMeterKelvinsPerWatt = "SquareMeterKelvinPerWatt",
    /** */
    SquareMeterDegreesCelsiusPerWatt = "SquareMeterDegreeCelsiusPerWatt",
    /** */
    SquareCentimeterKelvinsPerWatt = "SquareCentimeterKelvinPerWatt",
    /** */
    SquareMillimeterKelvinsPerWatt = "SquareMillimeterKelvinPerWatt",
    /** */
    SquareCentimeterHourDegreesCelsiusPerKilocalorie = "SquareCentimeterHourDegreeCelsiusPerKilocalorie",
    /** */
    HourSquareFeetDegreesFahrenheitPerBtu = "HourSquareFeetDegreeFahrenheitPerBtu"
}

/** Thermal insulance (R-value) is a measure of a material's resistance to the heat current. It quantifies how effectively a material can resist the transfer of heat through conduction, convection, and radiation. It has the units square metre kelvins per watt (m2⋅K/W) in SI units or square foot degree Fahrenheit–hours per British thermal unit (ft2⋅°F⋅h/Btu) in imperial units. The higher the thermal insulance, the better a material insulates against heat transfer. It is commonly used in construction to assess the insulation properties of materials such as walls, roofs, and insulation products. */
export class ThermalInsulance extends BaseUnit {
    protected value: number;
    private squaremeterkelvinsperkilowattLazy: number | null = null;
    private squaremeterkelvinsperwattLazy: number | null = null;
    private squaremeterdegreescelsiusperwattLazy: number | null = null;
    private squarecentimeterkelvinsperwattLazy: number | null = null;
    private squaremillimeterkelvinsperwattLazy: number | null = null;
    private squarecentimeterhourdegreescelsiusperkilocalorieLazy: number | null = null;
    private hoursquarefeetdegreesfahrenheitperbtuLazy: number | null = null;

    /**
     * Create a new ThermalInsulance.
     * @param value The value.
     * @param fromUnit The ‘ThermalInsulance’ unit to create from.
     * The default unit is SquareMeterKelvinsPerKilowatt
     */
    public constructor(value: number, fromUnit: ThermalInsulanceUnits = ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ThermalInsulance is SquareMeterKelvinsPerKilowatt.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt {
        return ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt
    }

    /** */
    public get SquareMeterKelvinsPerKilowatt(): number {
        if(this.squaremeterkelvinsperkilowattLazy !== null){
            return this.squaremeterkelvinsperkilowattLazy;
        }
        return this.squaremeterkelvinsperkilowattLazy = this.convertFromBase(ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt);
    }

    /** */
    public get SquareMeterKelvinsPerWatt(): number {
        if(this.squaremeterkelvinsperwattLazy !== null){
            return this.squaremeterkelvinsperwattLazy;
        }
        return this.squaremeterkelvinsperwattLazy = this.convertFromBase(ThermalInsulanceUnits.SquareMeterKelvinsPerWatt);
    }

    /** */
    public get SquareMeterDegreesCelsiusPerWatt(): number {
        if(this.squaremeterdegreescelsiusperwattLazy !== null){
            return this.squaremeterdegreescelsiusperwattLazy;
        }
        return this.squaremeterdegreescelsiusperwattLazy = this.convertFromBase(ThermalInsulanceUnits.SquareMeterDegreesCelsiusPerWatt);
    }

    /** */
    public get SquareCentimeterKelvinsPerWatt(): number {
        if(this.squarecentimeterkelvinsperwattLazy !== null){
            return this.squarecentimeterkelvinsperwattLazy;
        }
        return this.squarecentimeterkelvinsperwattLazy = this.convertFromBase(ThermalInsulanceUnits.SquareCentimeterKelvinsPerWatt);
    }

    /** */
    public get SquareMillimeterKelvinsPerWatt(): number {
        if(this.squaremillimeterkelvinsperwattLazy !== null){
            return this.squaremillimeterkelvinsperwattLazy;
        }
        return this.squaremillimeterkelvinsperwattLazy = this.convertFromBase(ThermalInsulanceUnits.SquareMillimeterKelvinsPerWatt);
    }

    /** */
    public get SquareCentimeterHourDegreesCelsiusPerKilocalorie(): number {
        if(this.squarecentimeterhourdegreescelsiusperkilocalorieLazy !== null){
            return this.squarecentimeterhourdegreescelsiusperkilocalorieLazy;
        }
        return this.squarecentimeterhourdegreescelsiusperkilocalorieLazy = this.convertFromBase(ThermalInsulanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie);
    }

    /** */
    public get HourSquareFeetDegreesFahrenheitPerBtu(): number {
        if(this.hoursquarefeetdegreesfahrenheitperbtuLazy !== null){
            return this.hoursquarefeetdegreesfahrenheitperbtuLazy;
        }
        return this.hoursquarefeetdegreesfahrenheitperbtuLazy = this.convertFromBase(ThermalInsulanceUnits.HourSquareFeetDegreesFahrenheitPerBtu);
    }

    /**
     * Create a new ThermalInsulance instance from a SquareMeterKelvinsPerKilowatt
     *
     * @param value The unit as SquareMeterKelvinsPerKilowatt to create a new ThermalInsulance from.
     * @returns The new ThermalInsulance instance.
     */
    public static FromSquareMeterKelvinsPerKilowatt(value: number): ThermalInsulance {
        return new ThermalInsulance(value, ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt);
    }

    /**
     * Create a new ThermalInsulance instance from a SquareMeterKelvinsPerWatt
     *
     * @param value The unit as SquareMeterKelvinsPerWatt to create a new ThermalInsulance from.
     * @returns The new ThermalInsulance instance.
     */
    public static FromSquareMeterKelvinsPerWatt(value: number): ThermalInsulance {
        return new ThermalInsulance(value, ThermalInsulanceUnits.SquareMeterKelvinsPerWatt);
    }

    /**
     * Create a new ThermalInsulance instance from a SquareMeterDegreesCelsiusPerWatt
     *
     * @param value The unit as SquareMeterDegreesCelsiusPerWatt to create a new ThermalInsulance from.
     * @returns The new ThermalInsulance instance.
     */
    public static FromSquareMeterDegreesCelsiusPerWatt(value: number): ThermalInsulance {
        return new ThermalInsulance(value, ThermalInsulanceUnits.SquareMeterDegreesCelsiusPerWatt);
    }

    /**
     * Create a new ThermalInsulance instance from a SquareCentimeterKelvinsPerWatt
     *
     * @param value The unit as SquareCentimeterKelvinsPerWatt to create a new ThermalInsulance from.
     * @returns The new ThermalInsulance instance.
     */
    public static FromSquareCentimeterKelvinsPerWatt(value: number): ThermalInsulance {
        return new ThermalInsulance(value, ThermalInsulanceUnits.SquareCentimeterKelvinsPerWatt);
    }

    /**
     * Create a new ThermalInsulance instance from a SquareMillimeterKelvinsPerWatt
     *
     * @param value The unit as SquareMillimeterKelvinsPerWatt to create a new ThermalInsulance from.
     * @returns The new ThermalInsulance instance.
     */
    public static FromSquareMillimeterKelvinsPerWatt(value: number): ThermalInsulance {
        return new ThermalInsulance(value, ThermalInsulanceUnits.SquareMillimeterKelvinsPerWatt);
    }

    /**
     * Create a new ThermalInsulance instance from a SquareCentimeterHourDegreesCelsiusPerKilocalorie
     *
     * @param value The unit as SquareCentimeterHourDegreesCelsiusPerKilocalorie to create a new ThermalInsulance from.
     * @returns The new ThermalInsulance instance.
     */
    public static FromSquareCentimeterHourDegreesCelsiusPerKilocalorie(value: number): ThermalInsulance {
        return new ThermalInsulance(value, ThermalInsulanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie);
    }

    /**
     * Create a new ThermalInsulance instance from a HourSquareFeetDegreesFahrenheitPerBtu
     *
     * @param value The unit as HourSquareFeetDegreesFahrenheitPerBtu to create a new ThermalInsulance from.
     * @returns The new ThermalInsulance instance.
     */
    public static FromHourSquareFeetDegreesFahrenheitPerBtu(value: number): ThermalInsulance {
        return new ThermalInsulance(value, ThermalInsulanceUnits.HourSquareFeetDegreesFahrenheitPerBtu);
    }

    /**
     * Gets the base unit enumeration associated with ThermalInsulance
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof ThermalInsulanceUnits {
        return ThermalInsulanceUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt {
        return ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt;
    }

    /**
     * Create API DTO represent a ThermalInsulance unit.
     * @param holdInUnit The specific ThermalInsulance unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ThermalInsulanceUnits = ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt): ThermalInsulanceDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ThermalInsulance unit from an API DTO representation.
     * @param dtoThermalInsulance The ThermalInsulance API DTO representation
     */
    public static FromDto(dtoThermalInsulance: ThermalInsulanceDto): ThermalInsulance {
        return new ThermalInsulance(dtoThermalInsulance.value, dtoThermalInsulance.unit);
    }

    /**
     * Convert ThermalInsulance to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ThermalInsulanceUnits): number {
        switch (toUnit) {
            case ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt: return this.SquareMeterKelvinsPerKilowatt;
            case ThermalInsulanceUnits.SquareMeterKelvinsPerWatt: return this.SquareMeterKelvinsPerWatt;
            case ThermalInsulanceUnits.SquareMeterDegreesCelsiusPerWatt: return this.SquareMeterDegreesCelsiusPerWatt;
            case ThermalInsulanceUnits.SquareCentimeterKelvinsPerWatt: return this.SquareCentimeterKelvinsPerWatt;
            case ThermalInsulanceUnits.SquareMillimeterKelvinsPerWatt: return this.SquareMillimeterKelvinsPerWatt;
            case ThermalInsulanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie: return this.SquareCentimeterHourDegreesCelsiusPerKilocalorie;
            case ThermalInsulanceUnits.HourSquareFeetDegreesFahrenheitPerBtu: return this.HourSquareFeetDegreesFahrenheitPerBtu;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: ThermalInsulanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt: return this.value;
                case ThermalInsulanceUnits.SquareMeterKelvinsPerWatt: return super.internalDivide(this.value, 1000);
                case ThermalInsulanceUnits.SquareMeterDegreesCelsiusPerWatt: return super.internalDivide(this.value, 1000.0);
                case ThermalInsulanceUnits.SquareCentimeterKelvinsPerWatt: return super.internalDivide(this.value, 0.1);
                case ThermalInsulanceUnits.SquareMillimeterKelvinsPerWatt: return super.internalDivide(this.value, 0.001);
                case ThermalInsulanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie: {
                    const v5 = super.internalMultiply(0.0001, 3600);
                    const v6 = super.internalDivide(4.184, v5);
                    return super.internalMultiply(this.value, v6);
                }
                case ThermalInsulanceUnits.HourSquareFeetDegreesFahrenheitPerBtu: {
                    const v4 = super.internalMultiply(1055.05585262, 1.8);
                    const v7 = super.internalMultiply(1000, 0.3048);
                    const v9 = super.internalMultiply(v7, 0.3048);
                    const v11 = super.internalMultiply(v9, 3600);
                    const v12 = super.internalDivide(v4, v11);
                    return super.internalMultiply(this.value, v12);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt: return this.value;
            case ThermalInsulanceUnits.SquareMeterKelvinsPerWatt: return this.value / 1000;
            case ThermalInsulanceUnits.SquareMeterDegreesCelsiusPerWatt: return this.value / 1000.0;
            case ThermalInsulanceUnits.SquareCentimeterKelvinsPerWatt: return this.value / 0.1;
            case ThermalInsulanceUnits.SquareMillimeterKelvinsPerWatt: return this.value / 0.001;
            case ThermalInsulanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie: return this.value * 4.184 / (0.0001 * 3600);
            case ThermalInsulanceUnits.HourSquareFeetDegreesFahrenheitPerBtu: return this.value * (1055.05585262 * 1.8) / (1000 * 0.3048 * 0.3048 * 3600);
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: ThermalInsulanceUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt: return value;
                case ThermalInsulanceUnits.SquareMeterKelvinsPerWatt: return super.internalMultiply(value, 1000);
                case ThermalInsulanceUnits.SquareMeterDegreesCelsiusPerWatt: return super.internalMultiply(value, 1000.0);
                case ThermalInsulanceUnits.SquareCentimeterKelvinsPerWatt: return super.internalMultiply(value, 0.1);
                case ThermalInsulanceUnits.SquareMillimeterKelvinsPerWatt: return super.internalMultiply(value, 0.001);
                case ThermalInsulanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie: {
                    const v4 = super.internalMultiply(0.0001, 3600);
                    const v6 = super.internalDivide(v4, 4.184);
                    return super.internalMultiply(value, v6);
                }
                case ThermalInsulanceUnits.HourSquareFeetDegreesFahrenheitPerBtu: {
                    const v4 = super.internalMultiply(1000, 0.3048);
                    const v6 = super.internalMultiply(v4, 0.3048);
                    const v8 = super.internalMultiply(v6, 3600);
                    const v11 = super.internalMultiply(1055.05585262, 1.8);
                    const v12 = super.internalDivide(v8, v11);
                    return super.internalMultiply(value, v12);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt: return value;
            case ThermalInsulanceUnits.SquareMeterKelvinsPerWatt: return value * 1000;
            case ThermalInsulanceUnits.SquareMeterDegreesCelsiusPerWatt: return value * 1000.0;
            case ThermalInsulanceUnits.SquareCentimeterKelvinsPerWatt: return value * 0.1;
            case ThermalInsulanceUnits.SquareMillimeterKelvinsPerWatt: return value * 0.001;
            case ThermalInsulanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie: return value * (0.0001 * 3600) / 4.184;
            case ThermalInsulanceUnits.HourSquareFeetDegreesFahrenheitPerBtu: return value * (1000 * 0.3048 * 0.3048 * 3600) / (1055.05585262 * 1.8);
            default: return Number.NaN;
        }
    }

    /**
     * Format the ThermalInsulance to string.
     * Note! the default format for ThermalInsulance is SquareMeterKelvinsPerKilowatt.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ThermalInsulance.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the ThermalInsulance.
     */
    public toString(unit: ThermalInsulanceUnits = ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt:
                return super.truncateFractionDigits(this.SquareMeterKelvinsPerKilowatt, options as ToStringOptions) + ` m²K/kW`;
            case ThermalInsulanceUnits.SquareMeterKelvinsPerWatt:
                return super.truncateFractionDigits(this.SquareMeterKelvinsPerWatt, options as ToStringOptions) + ` m²K/W`;
            case ThermalInsulanceUnits.SquareMeterDegreesCelsiusPerWatt:
                return super.truncateFractionDigits(this.SquareMeterDegreesCelsiusPerWatt, options as ToStringOptions) + ` m²°C/W`;
            case ThermalInsulanceUnits.SquareCentimeterKelvinsPerWatt:
                return super.truncateFractionDigits(this.SquareCentimeterKelvinsPerWatt, options as ToStringOptions) + ` cm²K/W`;
            case ThermalInsulanceUnits.SquareMillimeterKelvinsPerWatt:
                return super.truncateFractionDigits(this.SquareMillimeterKelvinsPerWatt, options as ToStringOptions) + ` mm²K/W`;
            case ThermalInsulanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                return super.truncateFractionDigits(this.SquareCentimeterHourDegreesCelsiusPerKilocalorie, options as ToStringOptions) + ` cm²Hr°C/kcal`;
            case ThermalInsulanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                return super.truncateFractionDigits(this.HourSquareFeetDegreesFahrenheitPerBtu, options as ToStringOptions) + ` Hrft²°F/Btu`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ThermalInsulance unit abbreviation.
     * Note! the default abbreviation for ThermalInsulance is SquareMeterKelvinsPerKilowatt.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ThermalInsulance.
     * @returns The abbreviation string of ThermalInsulance.
     */
    public getUnitAbbreviation(unitAbbreviation: ThermalInsulanceUnits = ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt): string {

        switch (unitAbbreviation) {
            
            case ThermalInsulanceUnits.SquareMeterKelvinsPerKilowatt:
                return `m²K/kW`;
            case ThermalInsulanceUnits.SquareMeterKelvinsPerWatt:
                return `m²K/W`;
            case ThermalInsulanceUnits.SquareMeterDegreesCelsiusPerWatt:
                return `m²°C/W`;
            case ThermalInsulanceUnits.SquareCentimeterKelvinsPerWatt:
                return `cm²K/W`;
            case ThermalInsulanceUnits.SquareMillimeterKelvinsPerWatt:
                return `mm²K/W`;
            case ThermalInsulanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                return `cm²Hr°C/kcal`;
            case ThermalInsulanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                return `Hrft²°F/Btu`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ThermalInsulance are equals to the current ThermalInsulance.
     * @param thermalInsulance The other ThermalInsulance.
     * @returns True if the given ThermalInsulance are equal to the current ThermalInsulance.
     */
    public equals(thermalInsulance: ThermalInsulance): boolean {
        return super.internalEquals(this.value, thermalInsulance.BaseValue);
    }

    /**
     * Compare the given ThermalInsulance against the current ThermalInsulance.
     * @param thermalInsulance The other ThermalInsulance.
     * @returns 0 if they are equal, -1 if the current ThermalInsulance is less then other, 1 if the current ThermalInsulance is greater then other.
     */
    public compareTo(thermalInsulance: ThermalInsulance): number {
        return super.internalCompareTo(this.value, thermalInsulance.BaseValue);
    }

    /**
     * Add the given ThermalInsulance with the current ThermalInsulance.
     * @param thermalInsulance The other ThermalInsulance.
     * @returns A new ThermalInsulance instance with the results.
     */
    public add(thermalInsulance: ThermalInsulance): ThermalInsulance {
        return new ThermalInsulance(super.internalAdd(this.value, thermalInsulance.BaseValue))
    }

    /**
     * Subtract the given ThermalInsulance with the current ThermalInsulance.
     * @param thermalInsulance The other ThermalInsulance.
     * @returns A new ThermalInsulance instance with the results.
     */
    public subtract(thermalInsulance: ThermalInsulance): ThermalInsulance {
        return new ThermalInsulance(super.internalSubtract(this.value, thermalInsulance.BaseValue))
    }

    /**
     * Multiply the given ThermalInsulance with the current ThermalInsulance.
     * @param thermalInsulance The other ThermalInsulance.
     * @returns A new ThermalInsulance instance with the results.
     */
    public multiply(thermalInsulance: ThermalInsulance): ThermalInsulance {
        return new ThermalInsulance(super.internalMultiply(this.value, thermalInsulance.BaseValue))
    }

    /**
     * Divide the given ThermalInsulance with the current ThermalInsulance.
     * @param thermalInsulance The other ThermalInsulance.
     * @returns A new ThermalInsulance instance with the results.
     */
    public divide(thermalInsulance: ThermalInsulance): ThermalInsulance {
        return new ThermalInsulance(super.internalDivide(this.value, thermalInsulance.BaseValue))
    }

    /**
     * Modulo the given ThermalInsulance with the current ThermalInsulance.
     * @param thermalInsulance The other ThermalInsulance.
     * @returns A new ThermalInsulance instance with the results.
     */
    public modulo(thermalInsulance: ThermalInsulance): ThermalInsulance {
        return new ThermalInsulance(super.internalModulo(this.value, thermalInsulance.BaseValue))
    }

    /**
     * Pow the given ThermalInsulance with the current ThermalInsulance.
     * @param thermalInsulance The other ThermalInsulance.
     * @returns A new ThermalInsulance instance with the results.
     */
    public pow(thermalInsulance: ThermalInsulance): ThermalInsulance {
        return new ThermalInsulance(super.internalPow(this.value, thermalInsulance.BaseValue))
    }
}
