import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a VolumePerLength */
export interface VolumePerLengthDto {
    /** The value of the VolumePerLength */
    value: number;
    /**  The specific unit that the VolumePerLength value is representing */
    unit: VolumePerLengthUnits;
}

/** VolumePerLengthUnits enumeration */
export enum VolumePerLengthUnits {
    /** */
    CubicMetersPerMeter = "CubicMeterPerMeter",
    /** */
    LitersPerMeter = "LiterPerMeter",
    /** */
    LitersPerKilometer = "LiterPerKilometer",
    /** */
    LitersPerMillimeter = "LiterPerMillimeter",
    /** */
    OilBarrelsPerFoot = "OilBarrelPerFoot",
    /** */
    CubicYardsPerFoot = "CubicYardPerFoot",
    /** */
    CubicYardsPerUsSurveyFoot = "CubicYardPerUsSurveyFoot",
    /** */
    UsGallonsPerMile = "UsGallonPerMile",
    /** */
    ImperialGallonsPerMile = "ImperialGallonPerMile"
}

/** Volume, typically of fluid, that a container can hold within a unit of length. */
export class VolumePerLength extends BaseUnit {
    protected value: number;
    private cubicmeterspermeterLazy: number | null = null;
    private literspermeterLazy: number | null = null;
    private litersperkilometerLazy: number | null = null;
    private literspermillimeterLazy: number | null = null;
    private oilbarrelsperfootLazy: number | null = null;
    private cubicyardsperfootLazy: number | null = null;
    private cubicyardsperussurveyfootLazy: number | null = null;
    private usgallonspermileLazy: number | null = null;
    private imperialgallonspermileLazy: number | null = null;

    /**
     * Create a new VolumePerLength.
     * @param value The value.
     * @param fromUnit The ‘VolumePerLength’ unit to create from.
     * The default unit is CubicMetersPerMeter
     */
    public constructor(value: number, fromUnit: VolumePerLengthUnits = VolumePerLengthUnits.CubicMetersPerMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of VolumePerLength is CubicMetersPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): VolumePerLengthUnits.CubicMetersPerMeter {
        return VolumePerLengthUnits.CubicMetersPerMeter
    }

    /** */
    public get CubicMetersPerMeter(): number {
        if(this.cubicmeterspermeterLazy !== null){
            return this.cubicmeterspermeterLazy;
        }
        return this.cubicmeterspermeterLazy = this.convertFromBase(VolumePerLengthUnits.CubicMetersPerMeter);
    }

    /** */
    public get LitersPerMeter(): number {
        if(this.literspermeterLazy !== null){
            return this.literspermeterLazy;
        }
        return this.literspermeterLazy = this.convertFromBase(VolumePerLengthUnits.LitersPerMeter);
    }

    /** */
    public get LitersPerKilometer(): number {
        if(this.litersperkilometerLazy !== null){
            return this.litersperkilometerLazy;
        }
        return this.litersperkilometerLazy = this.convertFromBase(VolumePerLengthUnits.LitersPerKilometer);
    }

    /** */
    public get LitersPerMillimeter(): number {
        if(this.literspermillimeterLazy !== null){
            return this.literspermillimeterLazy;
        }
        return this.literspermillimeterLazy = this.convertFromBase(VolumePerLengthUnits.LitersPerMillimeter);
    }

    /** */
    public get OilBarrelsPerFoot(): number {
        if(this.oilbarrelsperfootLazy !== null){
            return this.oilbarrelsperfootLazy;
        }
        return this.oilbarrelsperfootLazy = this.convertFromBase(VolumePerLengthUnits.OilBarrelsPerFoot);
    }

    /** */
    public get CubicYardsPerFoot(): number {
        if(this.cubicyardsperfootLazy !== null){
            return this.cubicyardsperfootLazy;
        }
        return this.cubicyardsperfootLazy = this.convertFromBase(VolumePerLengthUnits.CubicYardsPerFoot);
    }

    /** */
    public get CubicYardsPerUsSurveyFoot(): number {
        if(this.cubicyardsperussurveyfootLazy !== null){
            return this.cubicyardsperussurveyfootLazy;
        }
        return this.cubicyardsperussurveyfootLazy = this.convertFromBase(VolumePerLengthUnits.CubicYardsPerUsSurveyFoot);
    }

    /** */
    public get UsGallonsPerMile(): number {
        if(this.usgallonspermileLazy !== null){
            return this.usgallonspermileLazy;
        }
        return this.usgallonspermileLazy = this.convertFromBase(VolumePerLengthUnits.UsGallonsPerMile);
    }

    /** */
    public get ImperialGallonsPerMile(): number {
        if(this.imperialgallonspermileLazy !== null){
            return this.imperialgallonspermileLazy;
        }
        return this.imperialgallonspermileLazy = this.convertFromBase(VolumePerLengthUnits.ImperialGallonsPerMile);
    }

    /**
     * Create a new VolumePerLength instance from a CubicMetersPerMeter
     *
     * @param value The unit as CubicMetersPerMeter to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    public static FromCubicMetersPerMeter(value: number): VolumePerLength {
        return new VolumePerLength(value, VolumePerLengthUnits.CubicMetersPerMeter);
    }

    /**
     * Create a new VolumePerLength instance from a LitersPerMeter
     *
     * @param value The unit as LitersPerMeter to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    public static FromLitersPerMeter(value: number): VolumePerLength {
        return new VolumePerLength(value, VolumePerLengthUnits.LitersPerMeter);
    }

    /**
     * Create a new VolumePerLength instance from a LitersPerKilometer
     *
     * @param value The unit as LitersPerKilometer to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    public static FromLitersPerKilometer(value: number): VolumePerLength {
        return new VolumePerLength(value, VolumePerLengthUnits.LitersPerKilometer);
    }

    /**
     * Create a new VolumePerLength instance from a LitersPerMillimeter
     *
     * @param value The unit as LitersPerMillimeter to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    public static FromLitersPerMillimeter(value: number): VolumePerLength {
        return new VolumePerLength(value, VolumePerLengthUnits.LitersPerMillimeter);
    }

    /**
     * Create a new VolumePerLength instance from a OilBarrelsPerFoot
     *
     * @param value The unit as OilBarrelsPerFoot to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    public static FromOilBarrelsPerFoot(value: number): VolumePerLength {
        return new VolumePerLength(value, VolumePerLengthUnits.OilBarrelsPerFoot);
    }

    /**
     * Create a new VolumePerLength instance from a CubicYardsPerFoot
     *
     * @param value The unit as CubicYardsPerFoot to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    public static FromCubicYardsPerFoot(value: number): VolumePerLength {
        return new VolumePerLength(value, VolumePerLengthUnits.CubicYardsPerFoot);
    }

    /**
     * Create a new VolumePerLength instance from a CubicYardsPerUsSurveyFoot
     *
     * @param value The unit as CubicYardsPerUsSurveyFoot to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    public static FromCubicYardsPerUsSurveyFoot(value: number): VolumePerLength {
        return new VolumePerLength(value, VolumePerLengthUnits.CubicYardsPerUsSurveyFoot);
    }

    /**
     * Create a new VolumePerLength instance from a UsGallonsPerMile
     *
     * @param value The unit as UsGallonsPerMile to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    public static FromUsGallonsPerMile(value: number): VolumePerLength {
        return new VolumePerLength(value, VolumePerLengthUnits.UsGallonsPerMile);
    }

    /**
     * Create a new VolumePerLength instance from a ImperialGallonsPerMile
     *
     * @param value The unit as ImperialGallonsPerMile to create a new VolumePerLength from.
     * @returns The new VolumePerLength instance.
     */
    public static FromImperialGallonsPerMile(value: number): VolumePerLength {
        return new VolumePerLength(value, VolumePerLengthUnits.ImperialGallonsPerMile);
    }

    /**
     * Gets the base unit enumeration associated with VolumePerLength
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof VolumePerLengthUnits {
        return VolumePerLengthUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): VolumePerLengthUnits.CubicMetersPerMeter {
        return VolumePerLengthUnits.CubicMetersPerMeter;
    }

    /**
     * Create API DTO represent a VolumePerLength unit.
     * @param holdInUnit The specific VolumePerLength unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: VolumePerLengthUnits = VolumePerLengthUnits.CubicMetersPerMeter): VolumePerLengthDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a VolumePerLength unit from an API DTO representation.
     * @param dtoVolumePerLength The VolumePerLength API DTO representation
     */
    public static FromDto(dtoVolumePerLength: VolumePerLengthDto): VolumePerLength {
        return new VolumePerLength(dtoVolumePerLength.value, dtoVolumePerLength.unit);
    }

    /**
     * Convert VolumePerLength to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: VolumePerLengthUnits): number {
        switch (toUnit) {
            case VolumePerLengthUnits.CubicMetersPerMeter: return this.CubicMetersPerMeter;
            case VolumePerLengthUnits.LitersPerMeter: return this.LitersPerMeter;
            case VolumePerLengthUnits.LitersPerKilometer: return this.LitersPerKilometer;
            case VolumePerLengthUnits.LitersPerMillimeter: return this.LitersPerMillimeter;
            case VolumePerLengthUnits.OilBarrelsPerFoot: return this.OilBarrelsPerFoot;
            case VolumePerLengthUnits.CubicYardsPerFoot: return this.CubicYardsPerFoot;
            case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot: return this.CubicYardsPerUsSurveyFoot;
            case VolumePerLengthUnits.UsGallonsPerMile: return this.UsGallonsPerMile;
            case VolumePerLengthUnits.ImperialGallonsPerMile: return this.ImperialGallonsPerMile;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: VolumePerLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case VolumePerLengthUnits.CubicMetersPerMeter: return this.value;
                case VolumePerLengthUnits.LitersPerMeter: return super.internalMultiply(this.value, 1000);
                case VolumePerLengthUnits.LitersPerKilometer: return super.internalMultiply(this.value, 1e6);
                case VolumePerLengthUnits.LitersPerMillimeter: return this.value;
                case VolumePerLengthUnits.OilBarrelsPerFoot: {
                    const v4 = super.internalDivide(0.3048, 0.158987294928);
                    return super.internalMultiply(this.value, v4);
                }
                case VolumePerLengthUnits.CubicYardsPerFoot: {
                    const v4 = super.internalDivide(0.3048, 0.764554857984);
                    return super.internalMultiply(this.value, v4);
                }
                case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot: {
                    const v5 = super.internalMultiply(0.764554857984, 3937);
                    const v6 = super.internalDivide(1200, v5);
                    return super.internalMultiply(this.value, v6);
                }
                case VolumePerLengthUnits.UsGallonsPerMile: {
                    const v4 = super.internalDivide(1609.344, 0.003785411784);
                    return super.internalMultiply(this.value, v4);
                }
                case VolumePerLengthUnits.ImperialGallonsPerMile: {
                    const v4 = super.internalDivide(1609.344, 0.00454609);
                    return super.internalMultiply(this.value, v4);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case VolumePerLengthUnits.CubicMetersPerMeter: return this.value;
            case VolumePerLengthUnits.LitersPerMeter: return this.value * 1000;
            case VolumePerLengthUnits.LitersPerKilometer: return this.value * 1e6;
            case VolumePerLengthUnits.LitersPerMillimeter: return this.value;
            case VolumePerLengthUnits.OilBarrelsPerFoot: return this.value * 0.3048 / 0.158987294928;
            case VolumePerLengthUnits.CubicYardsPerFoot: return this.value * 0.3048 / 0.764554857984;
            case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot: return this.value * 1200 / (0.764554857984 * 3937);
            case VolumePerLengthUnits.UsGallonsPerMile: return this.value * 1609.344 / 0.003785411784;
            case VolumePerLengthUnits.ImperialGallonsPerMile: return this.value * 1609.344 / 0.00454609;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: VolumePerLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case VolumePerLengthUnits.CubicMetersPerMeter: return value;
                case VolumePerLengthUnits.LitersPerMeter: return super.internalDivide(value, 1000);
                case VolumePerLengthUnits.LitersPerKilometer: return super.internalDivide(value, 1e6);
                case VolumePerLengthUnits.LitersPerMillimeter: return value;
                case VolumePerLengthUnits.OilBarrelsPerFoot: {
                    const v4 = super.internalDivide(0.158987294928, 0.3048);
                    return super.internalMultiply(value, v4);
                }
                case VolumePerLengthUnits.CubicYardsPerFoot: {
                    const v4 = super.internalDivide(0.764554857984, 0.3048);
                    return super.internalMultiply(value, v4);
                }
                case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot: {
                    const v3 = super.internalMultiply(value, 0.764554857984);
                    const v6 = super.internalDivide(3937, 1200);
                    return super.internalMultiply(v3, v6);
                }
                case VolumePerLengthUnits.UsGallonsPerMile: {
                    const v4 = super.internalDivide(0.003785411784, 1609.344);
                    return super.internalMultiply(value, v4);
                }
                case VolumePerLengthUnits.ImperialGallonsPerMile: {
                    const v4 = super.internalDivide(0.00454609, 1609.344);
                    return super.internalMultiply(value, v4);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case VolumePerLengthUnits.CubicMetersPerMeter: return value;
            case VolumePerLengthUnits.LitersPerMeter: return value / 1000;
            case VolumePerLengthUnits.LitersPerKilometer: return value / 1e6;
            case VolumePerLengthUnits.LitersPerMillimeter: return value;
            case VolumePerLengthUnits.OilBarrelsPerFoot: return value * 0.158987294928 / 0.3048;
            case VolumePerLengthUnits.CubicYardsPerFoot: return value * 0.764554857984 / 0.3048;
            case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot: return value * 0.764554857984 * 3937 / 1200;
            case VolumePerLengthUnits.UsGallonsPerMile: return value * 0.003785411784 / 1609.344;
            case VolumePerLengthUnits.ImperialGallonsPerMile: return value * 0.00454609 / 1609.344;
            default: return Number.NaN;
        }
    }

    /**
     * Format the VolumePerLength to string.
     * Note! the default format for VolumePerLength is CubicMetersPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the VolumePerLength.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the VolumePerLength.
     */
    public toString(unit: VolumePerLengthUnits = VolumePerLengthUnits.CubicMetersPerMeter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return super.truncateFractionDigits(this.CubicMetersPerMeter, options as ToStringOptions) + ` m³/m`;
            case VolumePerLengthUnits.LitersPerMeter:
                return super.truncateFractionDigits(this.LitersPerMeter, options as ToStringOptions) + ` l/m`;
            case VolumePerLengthUnits.LitersPerKilometer:
                return super.truncateFractionDigits(this.LitersPerKilometer, options as ToStringOptions) + ` l/km`;
            case VolumePerLengthUnits.LitersPerMillimeter:
                return super.truncateFractionDigits(this.LitersPerMillimeter, options as ToStringOptions) + ` l/mm`;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return super.truncateFractionDigits(this.OilBarrelsPerFoot, options as ToStringOptions) + ` bbl/ft`;
            case VolumePerLengthUnits.CubicYardsPerFoot:
                return super.truncateFractionDigits(this.CubicYardsPerFoot, options as ToStringOptions) + ` yd³/ft`;
            case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot:
                return super.truncateFractionDigits(this.CubicYardsPerUsSurveyFoot, options as ToStringOptions) + ` yd³/ftUS`;
            case VolumePerLengthUnits.UsGallonsPerMile:
                return super.truncateFractionDigits(this.UsGallonsPerMile, options as ToStringOptions) + ` gal (U.S.)/mi`;
            case VolumePerLengthUnits.ImperialGallonsPerMile:
                return super.truncateFractionDigits(this.ImperialGallonsPerMile, options as ToStringOptions) + ` gal (imp.)/mi`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get VolumePerLength unit abbreviation.
     * Note! the default abbreviation for VolumePerLength is CubicMetersPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the VolumePerLength.
     * @returns The abbreviation string of VolumePerLength.
     */
    public getUnitAbbreviation(unitAbbreviation: VolumePerLengthUnits = VolumePerLengthUnits.CubicMetersPerMeter): string {

        switch (unitAbbreviation) {
            
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return `m³/m`;
            case VolumePerLengthUnits.LitersPerMeter:
                return `l/m`;
            case VolumePerLengthUnits.LitersPerKilometer:
                return `l/km`;
            case VolumePerLengthUnits.LitersPerMillimeter:
                return `l/mm`;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return `bbl/ft`;
            case VolumePerLengthUnits.CubicYardsPerFoot:
                return `yd³/ft`;
            case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot:
                return `yd³/ftUS`;
            case VolumePerLengthUnits.UsGallonsPerMile:
                return `gal (U.S.)/mi`;
            case VolumePerLengthUnits.ImperialGallonsPerMile:
                return `gal (imp.)/mi`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given VolumePerLength are equals to the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns True if the given VolumePerLength are equal to the current VolumePerLength.
     */
    public equals(volumePerLength: VolumePerLength): boolean {
        return super.internalEquals(this.value, volumePerLength.BaseValue);
    }

    /**
     * Compare the given VolumePerLength against the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns 0 if they are equal, -1 if the current VolumePerLength is less then other, 1 if the current VolumePerLength is greater then other.
     */
    public compareTo(volumePerLength: VolumePerLength): number {
        return super.internalCompareTo(this.value, volumePerLength.BaseValue);
    }

    /**
     * Add the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    public add(volumePerLength: VolumePerLength): VolumePerLength {
        return new VolumePerLength(super.internalAdd(this.value, volumePerLength.BaseValue))
    }

    /**
     * Subtract the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    public subtract(volumePerLength: VolumePerLength): VolumePerLength {
        return new VolumePerLength(super.internalSubtract(this.value, volumePerLength.BaseValue))
    }

    /**
     * Multiply the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    public multiply(volumePerLength: VolumePerLength): VolumePerLength {
        return new VolumePerLength(super.internalMultiply(this.value, volumePerLength.BaseValue))
    }

    /**
     * Divide the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    public divide(volumePerLength: VolumePerLength): VolumePerLength {
        return new VolumePerLength(super.internalDivide(this.value, volumePerLength.BaseValue))
    }

    /**
     * Modulo the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    public modulo(volumePerLength: VolumePerLength): VolumePerLength {
        return new VolumePerLength(super.internalModulo(this.value, volumePerLength.BaseValue))
    }

    /**
     * Pow the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    public pow(volumePerLength: VolumePerLength): VolumePerLength {
        return new VolumePerLength(super.internalPow(this.value, volumePerLength.BaseValue))
    }
}
