/** VolumeFlowPerAreaUnits enumeration */
export enum VolumeFlowPerAreaUnits {
    /** */
    CubicMetersPerSecondPerSquareMeter,
    /** */
    CubicFeetPerMinutePerSquareFoot
}

/** The volumetric flow rate per area is the volume of fluid which passes through a given unit surface area per unit time. */
export class VolumeFlowPerArea {
    private value: number;
    private cubicmeterspersecondpersquaremeterLazy: number | null = null;
    private cubicfeetperminutepersquarefootLazy: number | null = null;

    /**
     * Create a new VolumeFlowPerArea.
     * @param value The value.
     * @param fromUnit The ‘VolumeFlowPerArea’ unit to create from.
     * The default unit is CubicMetersPerSecondPerSquareMeter
     */
    public constructor(value: number, fromUnit: VolumeFlowPerAreaUnits = VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of VolumeFlowPerArea is CubicMetersPerSecondPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
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

    private convertFromBase(toUnit: VolumeFlowPerAreaUnits): number {
        switch (toUnit) {
                
            case VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter:
                return this.value;
            case VolumeFlowPerAreaUnits.CubicFeetPerMinutePerSquareFoot:
                return this.value*196.850394;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: VolumeFlowPerAreaUnits): number {
        switch (fromUnit) {
                
            case VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter:
                return value;
            case VolumeFlowPerAreaUnits.CubicFeetPerMinutePerSquareFoot:
                return value/196.850394;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the VolumeFlowPerArea to string.
     * Note! the default format for VolumeFlowPerArea is CubicMetersPerSecondPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the VolumeFlowPerArea.
     * @returns The string format of the VolumeFlowPerArea.
     */
    public toString(toUnit: VolumeFlowPerAreaUnits = VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter): string {

        switch (toUnit) {
            
            case VolumeFlowPerAreaUnits.CubicMetersPerSecondPerSquareMeter:
                return this.CubicMetersPerSecondPerSquareMeter + ` m³/(s·m²)`;
            case VolumeFlowPerAreaUnits.CubicFeetPerMinutePerSquareFoot:
                return this.CubicFeetPerMinutePerSquareFoot + ` CFM/ft²`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given VolumeFlowPerArea are equals to the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns True if the given VolumeFlowPerArea are equal to the current VolumeFlowPerArea.
     */
    public equals(volumeFlowPerArea: VolumeFlowPerArea): boolean {
        return this.value === volumeFlowPerArea.BaseValue;
    }

    /**
     * Compare the given VolumeFlowPerArea against the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns 0 if they are equal, -1 if the current VolumeFlowPerArea is less then other, 1 if the current VolumeFlowPerArea is greater then other.
     */
    public compareTo(volumeFlowPerArea: VolumeFlowPerArea): number {

        if (this.value > volumeFlowPerArea.BaseValue)
            return 1;
        if (this.value < volumeFlowPerArea.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given VolumeFlowPerArea with the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns A new VolumeFlowPerArea instance with the results.
     */
    public add(volumeFlowPerArea: VolumeFlowPerArea): VolumeFlowPerArea {
        return new VolumeFlowPerArea(this.value + volumeFlowPerArea.BaseValue)
    }

    /**
     * Subtract the given VolumeFlowPerArea with the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns A new VolumeFlowPerArea instance with the results.
     */
    public subtract(volumeFlowPerArea: VolumeFlowPerArea): VolumeFlowPerArea {
        return new VolumeFlowPerArea(this.value - volumeFlowPerArea.BaseValue)
    }

    /**
     * Multiply the given VolumeFlowPerArea with the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns A new VolumeFlowPerArea instance with the results.
     */
    public multiply(volumeFlowPerArea: VolumeFlowPerArea): VolumeFlowPerArea {
        return new VolumeFlowPerArea(this.value * volumeFlowPerArea.BaseValue)
    }

    /**
     * Divide the given VolumeFlowPerArea with the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns A new VolumeFlowPerArea instance with the results.
     */
    public divide(volumeFlowPerArea: VolumeFlowPerArea): VolumeFlowPerArea {
        return new VolumeFlowPerArea(this.value / volumeFlowPerArea.BaseValue)
    }

    /**
     * Modulo the given VolumeFlowPerArea with the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns A new VolumeFlowPerArea instance with the results.
     */
    public modulo(volumeFlowPerArea: VolumeFlowPerArea): VolumeFlowPerArea {
        return new VolumeFlowPerArea(this.value % volumeFlowPerArea.BaseValue)
    }

    /**
     * Pow the given VolumeFlowPerArea with the current VolumeFlowPerArea.
     * @param volumeFlowPerArea The other VolumeFlowPerArea.
     * @returns A new VolumeFlowPerArea instance with the results.
     */
    public pow(volumeFlowPerArea: VolumeFlowPerArea): VolumeFlowPerArea {
        return new VolumeFlowPerArea(this.value ** volumeFlowPerArea.BaseValue)
    }
}
