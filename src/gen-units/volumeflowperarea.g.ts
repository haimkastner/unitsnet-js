import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a VolumeFlowPerArea */
export interface VolumeFlowPerAreaDto {
    /** The value of the VolumeFlowPerArea */
    value: number;
    /**  The specific unit that the VolumeFlowPerArea value is representing */
    unit: VolumeFlowPerAreaUnits;
}

/** VolumeFlowPerAreaUnits enumeration */
export enum VolumeFlowPerAreaUnits {
    /** */
    CubicMetersPerSecondPerSquareMeter = "CubicMeterPerSecondPerSquareMeter",
    /** */
    CubicFeetPerMinutePerSquareFoot = "CubicFootPerMinutePerSquareFoot"
}

/** The volumetric flow rate per area is the volume of fluid which passes through a given unit surface area per unit time. */
export class VolumeFlowPerArea extends BaseUnit {
    protected value: number;
    private cubicmeterspersecondpersquaremeterLazy: number | null = null;
    private cubicfeetperminutepersquarefootLazy: number | null = null;

    /**
     * Create a new VolumeFlowPerArea.
     * @param value The value.
     * @param fromUnit The ‘VolumeFlowPerArea’ unit to create from.
     * The default unit is CubicMetersPerSecondPerSquareMeter
     */
    public constructor(value: number, fromUnit: VolumeFlowPerAreaUnits = VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of VolumeFlowPerArea is CubicMetersPerSecondPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter {
        return VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter
    }

    /** */
    public get CubicMetersPerSecondPerSquareMeter(): number {
        if(this.cubicmeterspersecondpersquaremeterLazy !== null){
            return this.cubicmeterspersecondpersquaremeterLazy;
        }
        return this.cubicmeterspersecondpersquaremeterLazy = this.convertFromBase(VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter);
    }

    /** */
    public get CubicFeetPerMinutePerSquareFoot(): number {
        if(this.cubicfeetperminutepersquarefootLazy !== null){
            return this.cubicfeetperminutepersquarefootLazy;
        }
        return this.cubicfeetperminutepersquarefootLazy = this.convertFromBase(VolumeFlowPerAreaUnits.CubicFeetPerMinutePerSquareFoot);
    }

    /**
     * Create a new VolumeFlowPerArea instance from a CubicMetersPerSecondPerSquareMeter
     *
     * @param value The unit as CubicMetersPerSecondPerSquareMeter to create a new VolumeFlowPerArea from.
     * @returns The new VolumeFlowPerArea instance.
     */
    public static FromCubicMetersPerSecondPerSquareMeter(value: number): VolumeFlowPerArea {
        return new VolumeFlowPerArea(value, VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter);
    }

    /**
     * Create a new VolumeFlowPerArea instance from a CubicFeetPerMinutePerSquareFoot
     *
     * @param value The unit as CubicFeetPerMinutePerSquareFoot to create a new VolumeFlowPerArea from.
     * @returns The new VolumeFlowPerArea instance.
     */
    public static FromCubicFeetPerMinutePerSquareFoot(value: number): VolumeFlowPerArea {
        return new VolumeFlowPerArea(value, VolumeFlowPerAreaUnits.CubicFeetPerMinutePerSquareFoot);
    }

    /**
     * Gets the base unit enumeration associated with VolumeFlowPerArea
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof VolumeFlowPerAreaUnits {
        return VolumeFlowPerAreaUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter {
        return VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter;
    }

    /**
     * Create API DTO represent a VolumeFlowPerArea unit.
     * @param holdInUnit The specific VolumeFlowPerArea unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: VolumeFlowPerAreaUnits = VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter): VolumeFlowPerAreaDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a VolumeFlowPerArea unit from an API DTO representation.
     * @param dtoVolumeFlowPerArea The VolumeFlowPerArea API DTO representation
     */
    public static FromDto(dtoVolumeFlowPerArea: VolumeFlowPerAreaDto): VolumeFlowPerArea {
        return new VolumeFlowPerArea(dtoVolumeFlowPerArea.value, dtoVolumeFlowPerArea.unit);
    }

    /**
     * Convert VolumeFlowPerArea to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: VolumeFlowPerAreaUnits): number {
        switch (toUnit) {
            case VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter: return this.CubicMetersPerSecondPerSquareMeter;
            case VolumeFlowPerAreaUnits.CubicFeetPerMinutePerSquareFoot: return this.CubicFeetPerMinutePerSquareFoot;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: VolumeFlowPerAreaUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter: return this.value;
                case VolumeFlowPerAreaUnits.CubicFeetPerMinutePerSquareFoot: {
                    const v5 = super.internalDivide(0.028316846592, 60);
                    const v6 = super.internalDivide(9.290304e-2, v5);
                    return super.internalMultiply(this.value, v6);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter: return this.value;
            case VolumeFlowPerAreaUnits.CubicFeetPerMinutePerSquareFoot: return this.value * 9.290304e-2 / (0.028316846592 / 60);
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: VolumeFlowPerAreaUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter: return value;
                case VolumeFlowPerAreaUnits.CubicFeetPerMinutePerSquareFoot: {
                    const v4 = super.internalDivide(0.028316846592, 60);
                    const v6 = super.internalDivide(v4, 9.290304e-2);
                    return super.internalMultiply(value, v6);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter: return value;
            case VolumeFlowPerAreaUnits.CubicFeetPerMinutePerSquareFoot: return value * (0.028316846592 / 60) / 9.290304e-2;
            default: return Number.NaN;
        }
    }

    /**
     * Format the VolumeFlowPerArea to string.
     * Note! the default format for VolumeFlowPerArea is CubicMetersPerSecondPerSquareMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the VolumeFlowPerArea.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the VolumeFlowPerArea.
     */
    public toString(unit: VolumeFlowPerAreaUnits = VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter:
                return super.truncateFractionDigits(this.CubicMetersPerSecondPerSquareMeter, options as ToStringOptions) + ` m³/(s·m²)`;
            case VolumeFlowPerAreaUnits.CubicFeetPerMinutePerSquareFoot:
                return super.truncateFractionDigits(this.CubicFeetPerMinutePerSquareFoot, options as ToStringOptions) + ` CFM/ft²`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get VolumeFlowPerArea unit abbreviation.
     * Note! the default abbreviation for VolumeFlowPerArea is CubicMetersPerSecondPerSquareMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the VolumeFlowPerArea.
     * @returns The abbreviation string of VolumeFlowPerArea.
     */
    public getUnitAbbreviation(unitAbbreviation: VolumeFlowPerAreaUnits = VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter): string {

        switch (unitAbbreviation) {
            
            case VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter:
                return `m³/(s·m²)`;
            case VolumeFlowPerAreaUnits.CubicFeetPerMinutePerSquareFoot:
                return `CFM/ft²`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given VolumeFlowPerArea are equals to the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns True if the given VolumeFlowPerArea are equal to the current VolumeFlowPerArea.
     */
    public equals(volumeFlowPerArea: VolumeFlowPerArea): boolean {
        return super.internalEquals(this.value, volumeFlowPerArea.BaseValue);
    }

    /**
     * Compare the given VolumeFlowPerArea against the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns 0 if they are equal, -1 if the current VolumeFlowPerArea is less then other, 1 if the current VolumeFlowPerArea is greater then other.
     */
    public compareTo(volumeFlowPerArea: VolumeFlowPerArea): number {
        return super.internalCompareTo(this.value, volumeFlowPerArea.BaseValue);
    }

    /**
     * Add the given VolumeFlowPerArea with the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns A new VolumeFlowPerArea instance with the results.
     */
    public add(volumeFlowPerArea: VolumeFlowPerArea): VolumeFlowPerArea {
        return new VolumeFlowPerArea(super.internalAdd(this.value, volumeFlowPerArea.BaseValue))
    }

    /**
     * Subtract the given VolumeFlowPerArea with the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns A new VolumeFlowPerArea instance with the results.
     */
    public subtract(volumeFlowPerArea: VolumeFlowPerArea): VolumeFlowPerArea {
        return new VolumeFlowPerArea(super.internalSubtract(this.value, volumeFlowPerArea.BaseValue))
    }

    /**
     * Multiply the given VolumeFlowPerArea with the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns A new VolumeFlowPerArea instance with the results.
     */
    public multiply(volumeFlowPerArea: VolumeFlowPerArea): VolumeFlowPerArea {
        return new VolumeFlowPerArea(super.internalMultiply(this.value, volumeFlowPerArea.BaseValue))
    }

    /**
     * Divide the given VolumeFlowPerArea with the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns A new VolumeFlowPerArea instance with the results.
     */
    public divide(volumeFlowPerArea: VolumeFlowPerArea): VolumeFlowPerArea {
        return new VolumeFlowPerArea(super.internalDivide(this.value, volumeFlowPerArea.BaseValue))
    }

    /**
     * Modulo the given VolumeFlowPerArea with the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns A new VolumeFlowPerArea instance with the results.
     */
    public modulo(volumeFlowPerArea: VolumeFlowPerArea): VolumeFlowPerArea {
        return new VolumeFlowPerArea(super.internalModulo(this.value, volumeFlowPerArea.BaseValue))
    }

    /**
     * Pow the given VolumeFlowPerArea with the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns A new VolumeFlowPerArea instance with the results.
     */
    public pow(volumeFlowPerArea: VolumeFlowPerArea): VolumeFlowPerArea {
        return new VolumeFlowPerArea(super.internalPow(this.value, volumeFlowPerArea.BaseValue))
    }
}
