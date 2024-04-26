/** API DTO represents a ElectricResistivity */
export interface ElectricResistivityDto {
    /** The value of the ElectricResistivity */
    value: number;
    /**  The specific unit that the ElectricResistivity value is representing */
    unit: ElectricResistivityUnits;
}

/** ElectricResistivityUnits enumeration */
export enum ElectricResistivityUnits {
    /** */
    OhmMeters = "OhmMeter",
    /** */
    OhmsCentimeter = "OhmCentimeter",
    /** */
    PicoohmMeters = "PicoohmMeter",
    /** */
    NanoohmMeters = "NanoohmMeter",
    /** */
    MicroohmMeters = "MicroohmMeter",
    /** */
    MilliohmMeters = "MilliohmMeter",
    /** */
    KiloohmMeters = "KiloohmMeter",
    /** */
    MegaohmMeters = "MegaohmMeter",
    /** */
    PicoohmsCentimeter = "PicoohmCentimeter",
    /** */
    NanoohmsCentimeter = "NanoohmCentimeter",
    /** */
    MicroohmsCentimeter = "MicroohmCentimeter",
    /** */
    MilliohmsCentimeter = "MilliohmCentimeter",
    /** */
    KiloohmsCentimeter = "KiloohmCentimeter",
    /** */
    MegaohmsCentimeter = "MegaohmCentimeter"
}

/** Electrical resistivity (also known as resistivity, specific electrical resistance, or volume resistivity) is a fundamental property that quantifies how strongly a given material opposes the flow of electric current. */
export class ElectricResistivity extends BaseUnit {
    private value: number;
    private ohmmetersLazy: number | null = null;
    private ohmscentimeterLazy: number | null = null;
    private picoohmmetersLazy: number | null = null;
    private nanoohmmetersLazy: number | null = null;
    private microohmmetersLazy: number | null = null;
    private milliohmmetersLazy: number | null = null;
    private kiloohmmetersLazy: number | null = null;
    private megaohmmetersLazy: number | null = null;
    private picoohmscentimeterLazy: number | null = null;
    private nanoohmscentimeterLazy: number | null = null;
    private microohmscentimeterLazy: number | null = null;
    private milliohmscentimeterLazy: number | null = null;
    private kiloohmscentimeterLazy: number | null = null;
    private megaohmscentimeterLazy: number | null = null;

    /**
     * Create a new ElectricResistivity.
     * @param value The value.
     * @param fromUnit The ‘ElectricResistivity’ unit to create from.
     * The default unit is OhmMeters
     */
    public constructor(value: number, fromUnit: ElectricResistivityUnits = ElectricResistivityUnits.OhmMeters) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricResistivity is OhmMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get OhmMeters(): number {
        if(this.ohmmetersLazy !== null){
            return this.ohmmetersLazy;
        }
        return this.ohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.OhmMeters);
    }

    /** */
    public get OhmsCentimeter(): number {
        if(this.ohmscentimeterLazy !== null){
            return this.ohmscentimeterLazy;
        }
        return this.ohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.OhmsCentimeter);
    }

    /** */
    public get PicoohmMeters(): number {
        if(this.picoohmmetersLazy !== null){
            return this.picoohmmetersLazy;
        }
        return this.picoohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmMeters);
    }

    /** */
    public get NanoohmMeters(): number {
        if(this.nanoohmmetersLazy !== null){
            return this.nanoohmmetersLazy;
        }
        return this.nanoohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmMeters);
    }

    /** */
    public get MicroohmMeters(): number {
        if(this.microohmmetersLazy !== null){
            return this.microohmmetersLazy;
        }
        return this.microohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmMeters);
    }

    /** */
    public get MilliohmMeters(): number {
        if(this.milliohmmetersLazy !== null){
            return this.milliohmmetersLazy;
        }
        return this.milliohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.MilliohmMeters);
    }

    /** */
    public get KiloohmMeters(): number {
        if(this.kiloohmmetersLazy !== null){
            return this.kiloohmmetersLazy;
        }
        return this.kiloohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmMeters);
    }

    /** */
    public get MegaohmMeters(): number {
        if(this.megaohmmetersLazy !== null){
            return this.megaohmmetersLazy;
        }
        return this.megaohmmetersLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmMeters);
    }

    /** */
    public get PicoohmsCentimeter(): number {
        if(this.picoohmscentimeterLazy !== null){
            return this.picoohmscentimeterLazy;
        }
        return this.picoohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.PicoohmsCentimeter);
    }

    /** */
    public get NanoohmsCentimeter(): number {
        if(this.nanoohmscentimeterLazy !== null){
            return this.nanoohmscentimeterLazy;
        }
        return this.nanoohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.NanoohmsCentimeter);
    }

    /** */
    public get MicroohmsCentimeter(): number {
        if(this.microohmscentimeterLazy !== null){
            return this.microohmscentimeterLazy;
        }
        return this.microohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MicroohmsCentimeter);
    }

    /** */
    public get MilliohmsCentimeter(): number {
        if(this.milliohmscentimeterLazy !== null){
            return this.milliohmscentimeterLazy;
        }
        return this.milliohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MilliohmsCentimeter);
    }

    /** */
    public get KiloohmsCentimeter(): number {
        if(this.kiloohmscentimeterLazy !== null){
            return this.kiloohmscentimeterLazy;
        }
        return this.kiloohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.KiloohmsCentimeter);
    }

    /** */
    public get MegaohmsCentimeter(): number {
        if(this.megaohmscentimeterLazy !== null){
            return this.megaohmscentimeterLazy;
        }
        return this.megaohmscentimeterLazy = this.convertFromBase(ElectricResistivityUnits.MegaohmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a OhmMeters
     *
     * @param value The unit as OhmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromOhmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a OhmsCentimeter
     *
     * @param value The unit as OhmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromOhmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.OhmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a PicoohmMeters
     *
     * @param value The unit as PicoohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromPicoohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a NanoohmMeters
     *
     * @param value The unit as NanoohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromNanoohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a MicroohmMeters
     *
     * @param value The unit as MicroohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromMicroohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a MilliohmMeters
     *
     * @param value The unit as MilliohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromMilliohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MilliohmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a KiloohmMeters
     *
     * @param value The unit as KiloohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromKiloohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a MegaohmMeters
     *
     * @param value The unit as MegaohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromMegaohmMeters(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MegaohmMeters);
    }

    /**
     * Create a new ElectricResistivity instance from a PicoohmsCentimeter
     *
     * @param value The unit as PicoohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromPicoohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.PicoohmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a NanoohmsCentimeter
     *
     * @param value The unit as NanoohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromNanoohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.NanoohmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a MicroohmsCentimeter
     *
     * @param value The unit as MicroohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromMicroohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MicroohmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a MilliohmsCentimeter
     *
     * @param value The unit as MilliohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromMilliohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MilliohmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a KiloohmsCentimeter
     *
     * @param value The unit as KiloohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromKiloohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.KiloohmsCentimeter);
    }

    /**
     * Create a new ElectricResistivity instance from a MegaohmsCentimeter
     *
     * @param value The unit as MegaohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    public static FromMegaohmsCentimeter(value: number): ElectricResistivity {
        return new ElectricResistivity(value, ElectricResistivityUnits.MegaohmsCentimeter);
    }

    /**
     * Create API DTO represent a ElectricResistivity unit.
     * @param holdInUnit The specific ElectricResistivity unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: ElectricResistivityUnits = ElectricResistivityUnits.OhmMeters): ElectricResistivityDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a ElectricResistivity unit from an API DTO representation.
     * @param dtoElectricResistivity The ElectricResistivity API DTO representation
     */
    public static FromDto(dtoElectricResistivity: ElectricResistivityDto): ElectricResistivity {
        return new ElectricResistivity(dtoElectricResistivity.value, dtoElectricResistivity.unit);
    }

    /**
     * Convert ElectricResistivity to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ElectricResistivityUnits): number {
        switch (toUnit) {
            case ElectricResistivityUnits.OhmMeters: return this.OhmMeters;
            case ElectricResistivityUnits.OhmsCentimeter: return this.OhmsCentimeter;
            case ElectricResistivityUnits.PicoohmMeters: return this.PicoohmMeters;
            case ElectricResistivityUnits.NanoohmMeters: return this.NanoohmMeters;
            case ElectricResistivityUnits.MicroohmMeters: return this.MicroohmMeters;
            case ElectricResistivityUnits.MilliohmMeters: return this.MilliohmMeters;
            case ElectricResistivityUnits.KiloohmMeters: return this.KiloohmMeters;
            case ElectricResistivityUnits.MegaohmMeters: return this.MegaohmMeters;
            case ElectricResistivityUnits.PicoohmsCentimeter: return this.PicoohmsCentimeter;
            case ElectricResistivityUnits.NanoohmsCentimeter: return this.NanoohmsCentimeter;
            case ElectricResistivityUnits.MicroohmsCentimeter: return this.MicroohmsCentimeter;
            case ElectricResistivityUnits.MilliohmsCentimeter: return this.MilliohmsCentimeter;
            case ElectricResistivityUnits.KiloohmsCentimeter: return this.KiloohmsCentimeter;
            case ElectricResistivityUnits.MegaohmsCentimeter: return this.MegaohmsCentimeter;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: ElectricResistivityUnits): number {
        switch (toUnit) {
                
            case ElectricResistivityUnits.OhmMeters:
                return this.value;
            case ElectricResistivityUnits.OhmsCentimeter:
                return this.value * 100;
            case ElectricResistivityUnits.PicoohmMeters:
                return (this.value) / 1e-12;
            case ElectricResistivityUnits.NanoohmMeters:
                return (this.value) / 1e-9;
            case ElectricResistivityUnits.MicroohmMeters:
                return (this.value) / 0.000001;
            case ElectricResistivityUnits.MilliohmMeters:
                return (this.value) / 0.001;
            case ElectricResistivityUnits.KiloohmMeters:
                return (this.value) / 1000;
            case ElectricResistivityUnits.MegaohmMeters:
                return (this.value) / 1000000;
            case ElectricResistivityUnits.PicoohmsCentimeter:
                return (this.value * 100) / 1e-12;
            case ElectricResistivityUnits.NanoohmsCentimeter:
                return (this.value * 100) / 1e-9;
            case ElectricResistivityUnits.MicroohmsCentimeter:
                return (this.value * 100) / 0.000001;
            case ElectricResistivityUnits.MilliohmsCentimeter:
                return (this.value * 100) / 0.001;
            case ElectricResistivityUnits.KiloohmsCentimeter:
                return (this.value * 100) / 1000;
            case ElectricResistivityUnits.MegaohmsCentimeter:
                return (this.value * 100) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricResistivityUnits): number {
        switch (fromUnit) {
                
            case ElectricResistivityUnits.OhmMeters:
                return value;
            case ElectricResistivityUnits.OhmsCentimeter:
                return value / 100;
            case ElectricResistivityUnits.PicoohmMeters:
                return (value) * 1e-12;
            case ElectricResistivityUnits.NanoohmMeters:
                return (value) * 1e-9;
            case ElectricResistivityUnits.MicroohmMeters:
                return (value) * 0.000001;
            case ElectricResistivityUnits.MilliohmMeters:
                return (value) * 0.001;
            case ElectricResistivityUnits.KiloohmMeters:
                return (value) * 1000;
            case ElectricResistivityUnits.MegaohmMeters:
                return (value) * 1000000;
            case ElectricResistivityUnits.PicoohmsCentimeter:
                return (value / 100) * 1e-12;
            case ElectricResistivityUnits.NanoohmsCentimeter:
                return (value / 100) * 1e-9;
            case ElectricResistivityUnits.MicroohmsCentimeter:
                return (value / 100) * 0.000001;
            case ElectricResistivityUnits.MilliohmsCentimeter:
                return (value / 100) * 0.001;
            case ElectricResistivityUnits.KiloohmsCentimeter:
                return (value / 100) * 1000;
            case ElectricResistivityUnits.MegaohmsCentimeter:
                return (value / 100) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricResistivity to string.
     * Note! the default format for ElectricResistivity is OhmMeters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricResistivity.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the ElectricResistivity.
     */
    public toString(unit: ElectricResistivityUnits = ElectricResistivityUnits.OhmMeters, fractionalDigits?: number): string {

        switch (unit) {
            
            case ElectricResistivityUnits.OhmMeters:
                return super.truncateFractionDigits(this.OhmMeters, fractionalDigits) + ` Ω·m`;
            case ElectricResistivityUnits.OhmsCentimeter:
                return super.truncateFractionDigits(this.OhmsCentimeter, fractionalDigits) + ` Ω·cm`;
            case ElectricResistivityUnits.PicoohmMeters:
                return super.truncateFractionDigits(this.PicoohmMeters, fractionalDigits) + ` pΩ·m`;
            case ElectricResistivityUnits.NanoohmMeters:
                return super.truncateFractionDigits(this.NanoohmMeters, fractionalDigits) + ` nΩ·m`;
            case ElectricResistivityUnits.MicroohmMeters:
                return super.truncateFractionDigits(this.MicroohmMeters, fractionalDigits) + ` μΩ·m`;
            case ElectricResistivityUnits.MilliohmMeters:
                return super.truncateFractionDigits(this.MilliohmMeters, fractionalDigits) + ` mΩ·m`;
            case ElectricResistivityUnits.KiloohmMeters:
                return super.truncateFractionDigits(this.KiloohmMeters, fractionalDigits) + ` kΩ·m`;
            case ElectricResistivityUnits.MegaohmMeters:
                return super.truncateFractionDigits(this.MegaohmMeters, fractionalDigits) + ` MΩ·m`;
            case ElectricResistivityUnits.PicoohmsCentimeter:
                return super.truncateFractionDigits(this.PicoohmsCentimeter, fractionalDigits) + ` pΩ·cm`;
            case ElectricResistivityUnits.NanoohmsCentimeter:
                return super.truncateFractionDigits(this.NanoohmsCentimeter, fractionalDigits) + ` nΩ·cm`;
            case ElectricResistivityUnits.MicroohmsCentimeter:
                return super.truncateFractionDigits(this.MicroohmsCentimeter, fractionalDigits) + ` μΩ·cm`;
            case ElectricResistivityUnits.MilliohmsCentimeter:
                return super.truncateFractionDigits(this.MilliohmsCentimeter, fractionalDigits) + ` mΩ·cm`;
            case ElectricResistivityUnits.KiloohmsCentimeter:
                return super.truncateFractionDigits(this.KiloohmsCentimeter, fractionalDigits) + ` kΩ·cm`;
            case ElectricResistivityUnits.MegaohmsCentimeter:
                return super.truncateFractionDigits(this.MegaohmsCentimeter, fractionalDigits) + ` MΩ·cm`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricResistivity unit abbreviation.
     * Note! the default abbreviation for ElectricResistivity is OhmMeters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricResistivity.
     * @returns The abbreviation string of ElectricResistivity.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricResistivityUnits = ElectricResistivityUnits.OhmMeters): string {

        switch (unitAbbreviation) {
            
            case ElectricResistivityUnits.OhmMeters:
                return `Ω·m`;
            case ElectricResistivityUnits.OhmsCentimeter:
                return `Ω·cm`;
            case ElectricResistivityUnits.PicoohmMeters:
                return `pΩ·m`;
            case ElectricResistivityUnits.NanoohmMeters:
                return `nΩ·m`;
            case ElectricResistivityUnits.MicroohmMeters:
                return `μΩ·m`;
            case ElectricResistivityUnits.MilliohmMeters:
                return `mΩ·m`;
            case ElectricResistivityUnits.KiloohmMeters:
                return `kΩ·m`;
            case ElectricResistivityUnits.MegaohmMeters:
                return `MΩ·m`;
            case ElectricResistivityUnits.PicoohmsCentimeter:
                return `pΩ·cm`;
            case ElectricResistivityUnits.NanoohmsCentimeter:
                return `nΩ·cm`;
            case ElectricResistivityUnits.MicroohmsCentimeter:
                return `μΩ·cm`;
            case ElectricResistivityUnits.MilliohmsCentimeter:
                return `mΩ·cm`;
            case ElectricResistivityUnits.KiloohmsCentimeter:
                return `kΩ·cm`;
            case ElectricResistivityUnits.MegaohmsCentimeter:
                return `MΩ·cm`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricResistivity are equals to the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns True if the given ElectricResistivity are equal to the current ElectricResistivity.
     */
    public equals(electricResistivity: ElectricResistivity): boolean {
        return super.internalEquals(this.value, electricResistivity.BaseValue);
    }

    /**
     * Compare the given ElectricResistivity against the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns 0 if they are equal, -1 if the current ElectricResistivity is less then other, 1 if the current ElectricResistivity is greater then other.
     */
    public compareTo(electricResistivity: ElectricResistivity): number {
        return super.internalCompareTo(this.value, electricResistivity.BaseValue);
    }

    /**
     * Add the given ElectricResistivity with the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns A new ElectricResistivity instance with the results.
     */
    public add(electricResistivity: ElectricResistivity): ElectricResistivity {
        return new ElectricResistivity(super.internalAdd(this.value, electricResistivity.BaseValue))
    }

    /**
     * Subtract the given ElectricResistivity with the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns A new ElectricResistivity instance with the results.
     */
    public subtract(electricResistivity: ElectricResistivity): ElectricResistivity {
        return new ElectricResistivity(super.internalSubtract(this.value, electricResistivity.BaseValue))
    }

    /**
     * Multiply the given ElectricResistivity with the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns A new ElectricResistivity instance with the results.
     */
    public multiply(electricResistivity: ElectricResistivity): ElectricResistivity {
        return new ElectricResistivity(super.internalMultiply(this.value, electricResistivity.BaseValue))
    }

    /**
     * Divide the given ElectricResistivity with the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns A new ElectricResistivity instance with the results.
     */
    public divide(electricResistivity: ElectricResistivity): ElectricResistivity {
        return new ElectricResistivity(super.internalDivide(this.value, electricResistivity.BaseValue))
    }

    /**
     * Modulo the given ElectricResistivity with the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns A new ElectricResistivity instance with the results.
     */
    public modulo(electricResistivity: ElectricResistivity): ElectricResistivity {
        return new ElectricResistivity(super.internalModulo(this.value, electricResistivity.BaseValue))
    }

    /**
     * Pow the given ElectricResistivity with the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns A new ElectricResistivity instance with the results.
     */
    public pow(electricResistivity: ElectricResistivity): ElectricResistivity {
        return new ElectricResistivity(super.internalPow(this.value, electricResistivity.BaseValue))
    }
}
