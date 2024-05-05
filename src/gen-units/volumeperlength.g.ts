import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

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
    private value: number;
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
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of VolumePerLength is CubicMetersPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
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
        return NaN;
    }

    private convertFromBase(toUnit: VolumePerLengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case VolumePerLengthUnits.CubicMetersPerMeter: return this.value;
                case VolumePerLengthUnits.LitersPerMeter: return super.internalMultiply(this.value, 1000);
                case VolumePerLengthUnits.LitersPerKilometer: return super.internalMultiply(this.value, 1e6);
                case VolumePerLengthUnits.LitersPerMillimeter: return this.value;
                case VolumePerLengthUnits.OilBarrelsPerFoot: return super.internalMultiply(this.value, 1.91713408);
                case VolumePerLengthUnits.CubicYardsPerFoot: return super.internalDivide(this.value, 2.50838208);
                case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot: return super.internalDivide(this.value, 2.50837706323584);
                case VolumePerLengthUnits.UsGallonsPerMile: {
                    const value4 = super.internalMultiply(1000, 1609.344);
                    const value6 = super.internalDivide(value4, 3.785411784);
                    return super.internalMultiply(this.value, value6);
                }
                case VolumePerLengthUnits.ImperialGallonsPerMile: {
                    const value4 = super.internalMultiply(1000, 1609.344);
                    const value6 = super.internalDivide(value4, 4.54609);
                    return super.internalMultiply(this.value, value6);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case VolumePerLengthUnits.CubicMetersPerMeter: return this.value;
            case VolumePerLengthUnits.LitersPerMeter: return this.value * 1000;
            case VolumePerLengthUnits.LitersPerKilometer: return this.value * 1e6;
            case VolumePerLengthUnits.LitersPerMillimeter: return this.value;
            case VolumePerLengthUnits.OilBarrelsPerFoot: return this.value * 1.91713408;
            case VolumePerLengthUnits.CubicYardsPerFoot: return this.value / 2.50838208;
            case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot: return this.value / 2.50837706323584;
            case VolumePerLengthUnits.UsGallonsPerMile: return this.value * (1000 * 1609.344 / 3.785411784);
            case VolumePerLengthUnits.ImperialGallonsPerMile: return this.value * (1000 * 1609.344 / 4.54609);
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
                case VolumePerLengthUnits.OilBarrelsPerFoot: return super.internalDivide(value, 1.91713408);
                case VolumePerLengthUnits.CubicYardsPerFoot: return super.internalMultiply(value, 2.50838208);
                case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot: return super.internalMultiply(value, 2.50837706323584);
                case VolumePerLengthUnits.UsGallonsPerMile: {
                    const value4 = super.internalMultiply(1000, 1609.344);
                    const value6 = super.internalDivide(value4, 3.785411784);
                    return super.internalDivide(value, value6);
                }
                case VolumePerLengthUnits.ImperialGallonsPerMile: {
                    const value4 = super.internalMultiply(1000, 1609.344);
                    const value6 = super.internalDivide(value4, 4.54609);
                    return super.internalDivide(value, value6);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case VolumePerLengthUnits.CubicMetersPerMeter: return value;
            case VolumePerLengthUnits.LitersPerMeter: return value / 1000;
            case VolumePerLengthUnits.LitersPerKilometer: return value / 1e6;
            case VolumePerLengthUnits.LitersPerMillimeter: return value;
            case VolumePerLengthUnits.OilBarrelsPerFoot: return value / 1.91713408;
            case VolumePerLengthUnits.CubicYardsPerFoot: return value * 2.50838208;
            case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot: return value * 2.50837706323584;
            case VolumePerLengthUnits.UsGallonsPerMile: return value / (1000 * 1609.344 / 3.785411784);
            case VolumePerLengthUnits.ImperialGallonsPerMile: return value / (1000 * 1609.344 / 4.54609);
            default: return Number.NaN;
        }
    }

    /**
     * Format the VolumePerLength to string.
     * Note! the default format for VolumePerLength is CubicMetersPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the VolumePerLength.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the VolumePerLength.
     */
    public toString(unit: VolumePerLengthUnits = VolumePerLengthUnits.CubicMetersPerMeter, fractionalDigits?: number): string {

        switch (unit) {
            
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return super.truncateFractionDigits(this.CubicMetersPerMeter, fractionalDigits) + ` m³/m`;
            case VolumePerLengthUnits.LitersPerMeter:
                return super.truncateFractionDigits(this.LitersPerMeter, fractionalDigits) + ` l/m`;
            case VolumePerLengthUnits.LitersPerKilometer:
                return super.truncateFractionDigits(this.LitersPerKilometer, fractionalDigits) + ` l/km`;
            case VolumePerLengthUnits.LitersPerMillimeter:
                return super.truncateFractionDigits(this.LitersPerMillimeter, fractionalDigits) + ` l/mm`;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return super.truncateFractionDigits(this.OilBarrelsPerFoot, fractionalDigits) + ` bbl/ft`;
            case VolumePerLengthUnits.CubicYardsPerFoot:
                return super.truncateFractionDigits(this.CubicYardsPerFoot, fractionalDigits) + ` yd³/ft`;
            case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot:
                return super.truncateFractionDigits(this.CubicYardsPerUsSurveyFoot, fractionalDigits) + ` yd³/ftUS`;
            case VolumePerLengthUnits.UsGallonsPerMile:
                return super.truncateFractionDigits(this.UsGallonsPerMile, fractionalDigits) + ` gal (U.S.)/mi`;
            case VolumePerLengthUnits.ImperialGallonsPerMile:
                return super.truncateFractionDigits(this.ImperialGallonsPerMile, fractionalDigits) + ` gal (imp.)/mi`;
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
