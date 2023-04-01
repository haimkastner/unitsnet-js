/** VolumePerLengthUnits enumeration */
export enum VolumePerLengthUnits {
    /** */
    CubicMetersPerMeter,
    /** */
    LitersPerMeter,
    /** */
    LitersPerKilometer,
    /** */
    LitersPerMillimeter,
    /** */
    OilBarrelsPerFoot,
    /** */
    CubicYardsPerFoot,
    /** */
    CubicYardsPerUsSurveyFoot,
    /** */
    UsGallonsPerMile,
    /** */
    ImperialGallonsPerMile
}

/** Volume, typically of fluid, that a container can hold within a unit of length. */
export class VolumePerLength {
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

    private convertFromBase(toUnit: VolumePerLengthUnits): number {
        switch (toUnit) {
                
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return this.value;
            case VolumePerLengthUnits.LitersPerMeter:
                return this.value * 1000;
            case VolumePerLengthUnits.LitersPerKilometer:
                return this.value * 1e6;
            case VolumePerLengthUnits.LitersPerMillimeter:
                return this.value;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return this.value * 1.91713408;
            case VolumePerLengthUnits.CubicYardsPerFoot:
                return this.value / 2.50838208;
            case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot:
                return this.value / 2.50837706323584;
            case VolumePerLengthUnits.UsGallonsPerMile:
                return this.value * (1000 * 1609.344 / 3.785411784);
            case VolumePerLengthUnits.ImperialGallonsPerMile:
                return this.value * (1000 * 1609.344 / 4.54609);
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: VolumePerLengthUnits): number {
        switch (fromUnit) {
                
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return value;
            case VolumePerLengthUnits.LitersPerMeter:
                return value / 1000;
            case VolumePerLengthUnits.LitersPerKilometer:
                return value / 1e6;
            case VolumePerLengthUnits.LitersPerMillimeter:
                return value;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return value / 1.91713408;
            case VolumePerLengthUnits.CubicYardsPerFoot:
                return value * 2.50838208;
            case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot:
                return value * 2.50837706323584;
            case VolumePerLengthUnits.UsGallonsPerMile:
                return value / (1000 * 1609.344 / 3.785411784);
            case VolumePerLengthUnits.ImperialGallonsPerMile:
                return value / (1000 * 1609.344 / 4.54609);
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the VolumePerLength to string.
     * Note! the default format for VolumePerLength is CubicMetersPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the VolumePerLength.
     * @returns The string format of the VolumePerLength.
     */
    public toString(unit: VolumePerLengthUnits = VolumePerLengthUnits.CubicMetersPerMeter): string {

        switch (unit) {
            
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return this.CubicMetersPerMeter + ` m³/m`;
            case VolumePerLengthUnits.LitersPerMeter:
                return this.LitersPerMeter + ` l/m`;
            case VolumePerLengthUnits.LitersPerKilometer:
                return this.LitersPerKilometer + ` l/km`;
            case VolumePerLengthUnits.LitersPerMillimeter:
                return this.LitersPerMillimeter + ` l/mm`;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return this.OilBarrelsPerFoot + ` bbl/ft`;
            case VolumePerLengthUnits.CubicYardsPerFoot:
                return this.CubicYardsPerFoot + ` yd³/ft`;
            case VolumePerLengthUnits.CubicYardsPerUsSurveyFoot:
                return this.CubicYardsPerUsSurveyFoot + ` yd³/ftUS`;
            case VolumePerLengthUnits.UsGallonsPerMile:
                return this.UsGallonsPerMile + ` gal (U.S.)/mi`;
            case VolumePerLengthUnits.ImperialGallonsPerMile:
                return this.ImperialGallonsPerMile + ` gal (imp.)/mi`;
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
        return this.value === volumePerLength.BaseValue;
    }

    /**
     * Compare the given VolumePerLength against the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns 0 if they are equal, -1 if the current VolumePerLength is less then other, 1 if the current VolumePerLength is greater then other.
     */
    public compareTo(volumePerLength: VolumePerLength): number {

        if (this.value > volumePerLength.BaseValue)
            return 1;
        if (this.value < volumePerLength.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    public add(volumePerLength: VolumePerLength): VolumePerLength {
        return new VolumePerLength(this.value + volumePerLength.BaseValue)
    }

    /**
     * Subtract the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    public subtract(volumePerLength: VolumePerLength): VolumePerLength {
        return new VolumePerLength(this.value - volumePerLength.BaseValue)
    }

    /**
     * Multiply the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    public multiply(volumePerLength: VolumePerLength): VolumePerLength {
        return new VolumePerLength(this.value * volumePerLength.BaseValue)
    }

    /**
     * Divide the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    public divide(volumePerLength: VolumePerLength): VolumePerLength {
        return new VolumePerLength(this.value / volumePerLength.BaseValue)
    }

    /**
     * Modulo the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    public modulo(volumePerLength: VolumePerLength): VolumePerLength {
        return new VolumePerLength(this.value % volumePerLength.BaseValue)
    }

    /**
     * Pow the given VolumePerLength with the current VolumePerLength.
     * @param volumePerLength The other VolumePerLength.
     * @returns A new VolumePerLength instance with the results.
     */
    public pow(volumePerLength: VolumePerLength): VolumePerLength {
        return new VolumePerLength(this.value ** volumePerLength.BaseValue)
    }
}
