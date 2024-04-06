import { BaseUnit } from "../base-unit";

/** IrradiationUnits enumeration */
export enum IrradiationUnits {
    /** */
    JoulesPerSquareMeter = "JoulePerSquareMeter",
    /** */
    JoulesPerSquareCentimeter = "JoulePerSquareCentimeter",
    /** */
    JoulesPerSquareMillimeter = "JoulePerSquareMillimeter",
    /** */
    WattHoursPerSquareMeter = "WattHourPerSquareMeter",
    /** */
    BtusPerSquareFoot = "BtuPerSquareFoot",
    /** */
    KilojoulesPerSquareMeter = "KilojoulePerSquareMeter",
    /** */
    MillijoulesPerSquareCentimeter = "MillijoulePerSquareCentimeter",
    /** */
    KilowattHoursPerSquareMeter = "KilowattHourPerSquareMeter",
    /** */
    KilobtusPerSquareFoot = "KilobtuPerSquareFoot"
}

/** Irradiation is the process by which an object is exposed to radiation. The exposure can originate from various sources, including natural sources. */
export class Irradiation extends BaseUnit {
    private value: number;
    private joulespersquaremeterLazy: number | null = null;
    private joulespersquarecentimeterLazy: number | null = null;
    private joulespersquaremillimeterLazy: number | null = null;
    private watthourspersquaremeterLazy: number | null = null;
    private btuspersquarefootLazy: number | null = null;
    private kilojoulespersquaremeterLazy: number | null = null;
    private millijoulespersquarecentimeterLazy: number | null = null;
    private kilowatthourspersquaremeterLazy: number | null = null;
    private kilobtuspersquarefootLazy: number | null = null;

    /**
     * Create a new Irradiation.
     * @param value The value.
     * @param fromUnit The ‘Irradiation’ unit to create from.
     * The default unit is JoulesPerSquareMeter
     */
    public constructor(value: number, fromUnit: IrradiationUnits = IrradiationUnits.JoulesPerSquareMeter) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Irradiation is JoulesPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get JoulesPerSquareMeter(): number {
        if(this.joulespersquaremeterLazy !== null){
            return this.joulespersquaremeterLazy;
        }
        return this.joulespersquaremeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareMeter);
    }

    /** */
    public get JoulesPerSquareCentimeter(): number {
        if(this.joulespersquarecentimeterLazy !== null){
            return this.joulespersquarecentimeterLazy;
        }
        return this.joulespersquarecentimeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareCentimeter);
    }

    /** */
    public get JoulesPerSquareMillimeter(): number {
        if(this.joulespersquaremillimeterLazy !== null){
            return this.joulespersquaremillimeterLazy;
        }
        return this.joulespersquaremillimeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareMillimeter);
    }

    /** */
    public get WattHoursPerSquareMeter(): number {
        if(this.watthourspersquaremeterLazy !== null){
            return this.watthourspersquaremeterLazy;
        }
        return this.watthourspersquaremeterLazy = this.convertFromBase(IrradiationUnits.WattHoursPerSquareMeter);
    }

    /** */
    public get BtusPerSquareFoot(): number {
        if(this.btuspersquarefootLazy !== null){
            return this.btuspersquarefootLazy;
        }
        return this.btuspersquarefootLazy = this.convertFromBase(IrradiationUnits.BtusPerSquareFoot);
    }

    /** */
    public get KilojoulesPerSquareMeter(): number {
        if(this.kilojoulespersquaremeterLazy !== null){
            return this.kilojoulespersquaremeterLazy;
        }
        return this.kilojoulespersquaremeterLazy = this.convertFromBase(IrradiationUnits.KilojoulesPerSquareMeter);
    }

    /** */
    public get MillijoulesPerSquareCentimeter(): number {
        if(this.millijoulespersquarecentimeterLazy !== null){
            return this.millijoulespersquarecentimeterLazy;
        }
        return this.millijoulespersquarecentimeterLazy = this.convertFromBase(IrradiationUnits.MillijoulesPerSquareCentimeter);
    }

    /** */
    public get KilowattHoursPerSquareMeter(): number {
        if(this.kilowatthourspersquaremeterLazy !== null){
            return this.kilowatthourspersquaremeterLazy;
        }
        return this.kilowatthourspersquaremeterLazy = this.convertFromBase(IrradiationUnits.KilowattHoursPerSquareMeter);
    }

    /** */
    public get KilobtusPerSquareFoot(): number {
        if(this.kilobtuspersquarefootLazy !== null){
            return this.kilobtuspersquarefootLazy;
        }
        return this.kilobtuspersquarefootLazy = this.convertFromBase(IrradiationUnits.KilobtusPerSquareFoot);
    }

    /**
     * Create a new Irradiation instance from a JoulesPerSquareMeter
     *
     * @param value The unit as JoulesPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromJoulesPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareMeter);
    }

    /**
     * Create a new Irradiation instance from a JoulesPerSquareCentimeter
     *
     * @param value The unit as JoulesPerSquareCentimeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromJoulesPerSquareCentimeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareCentimeter);
    }

    /**
     * Create a new Irradiation instance from a JoulesPerSquareMillimeter
     *
     * @param value The unit as JoulesPerSquareMillimeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromJoulesPerSquareMillimeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareMillimeter);
    }

    /**
     * Create a new Irradiation instance from a WattHoursPerSquareMeter
     *
     * @param value The unit as WattHoursPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromWattHoursPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.WattHoursPerSquareMeter);
    }

    /**
     * Create a new Irradiation instance from a BtusPerSquareFoot
     *
     * @param value The unit as BtusPerSquareFoot to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromBtusPerSquareFoot(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.BtusPerSquareFoot);
    }

    /**
     * Create a new Irradiation instance from a KilojoulesPerSquareMeter
     *
     * @param value The unit as KilojoulesPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromKilojoulesPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.KilojoulesPerSquareMeter);
    }

    /**
     * Create a new Irradiation instance from a MillijoulesPerSquareCentimeter
     *
     * @param value The unit as MillijoulesPerSquareCentimeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromMillijoulesPerSquareCentimeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.MillijoulesPerSquareCentimeter);
    }

    /**
     * Create a new Irradiation instance from a KilowattHoursPerSquareMeter
     *
     * @param value The unit as KilowattHoursPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromKilowattHoursPerSquareMeter(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.KilowattHoursPerSquareMeter);
    }

    /**
     * Create a new Irradiation instance from a KilobtusPerSquareFoot
     *
     * @param value The unit as KilobtusPerSquareFoot to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    public static FromKilobtusPerSquareFoot(value: number): Irradiation {
        return new Irradiation(value, IrradiationUnits.KilobtusPerSquareFoot);
    }

    /**
     * Convert Irradiation to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: IrradiationUnits): number {
        switch (toUnit) {
            case IrradiationUnits.JoulesPerSquareMeter: return this.JoulesPerSquareMeter;
            case IrradiationUnits.JoulesPerSquareCentimeter: return this.JoulesPerSquareCentimeter;
            case IrradiationUnits.JoulesPerSquareMillimeter: return this.JoulesPerSquareMillimeter;
            case IrradiationUnits.WattHoursPerSquareMeter: return this.WattHoursPerSquareMeter;
            case IrradiationUnits.BtusPerSquareFoot: return this.BtusPerSquareFoot;
            case IrradiationUnits.KilojoulesPerSquareMeter: return this.KilojoulesPerSquareMeter;
            case IrradiationUnits.MillijoulesPerSquareCentimeter: return this.MillijoulesPerSquareCentimeter;
            case IrradiationUnits.KilowattHoursPerSquareMeter: return this.KilowattHoursPerSquareMeter;
            case IrradiationUnits.KilobtusPerSquareFoot: return this.KilobtusPerSquareFoot;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: IrradiationUnits): number {
        switch (toUnit) {
                
            case IrradiationUnits.JoulesPerSquareMeter:
                return this.value;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return this.value / 1e4;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return this.value / 1e6;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return this.value / 3600;
            case IrradiationUnits.BtusPerSquareFoot:
                return this.value / (52752792631 / 4645152);
            case IrradiationUnits.KilojoulesPerSquareMeter:
                return (this.value) / 1000;
            case IrradiationUnits.MillijoulesPerSquareCentimeter:
                return (this.value / 1e4) / 0.001;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
                return (this.value / 3600) / 1000;
            case IrradiationUnits.KilobtusPerSquareFoot:
                return (this.value / (52752792631 / 4645152)) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: IrradiationUnits): number {
        switch (fromUnit) {
                
            case IrradiationUnits.JoulesPerSquareMeter:
                return value;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return value * 1e4;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return value * 1e6;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return value * 3600;
            case IrradiationUnits.BtusPerSquareFoot:
                return value * (52752792631 / 4645152);
            case IrradiationUnits.KilojoulesPerSquareMeter:
                return (value) * 1000;
            case IrradiationUnits.MillijoulesPerSquareCentimeter:
                return (value * 1e4) * 0.001;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
                return (value * 3600) * 1000;
            case IrradiationUnits.KilobtusPerSquareFoot:
                return (value * (52752792631 / 4645152)) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Irradiation to string.
     * Note! the default format for Irradiation is JoulesPerSquareMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Irradiation.
     * @returns The string format of the Irradiation.
     */
    public toString(unit: IrradiationUnits = IrradiationUnits.JoulesPerSquareMeter): string {

        switch (unit) {
            
            case IrradiationUnits.JoulesPerSquareMeter:
                return this.JoulesPerSquareMeter + ` J/m²`;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return this.JoulesPerSquareCentimeter + ` J/cm²`;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return this.JoulesPerSquareMillimeter + ` J/mm²`;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return this.WattHoursPerSquareMeter + ` Wh/m²`;
            case IrradiationUnits.BtusPerSquareFoot:
                return this.BtusPerSquareFoot + ` Btu/ft²`;
            case IrradiationUnits.KilojoulesPerSquareMeter:
                return this.KilojoulesPerSquareMeter + ` kJ/m²`;
            case IrradiationUnits.MillijoulesPerSquareCentimeter:
                return this.MillijoulesPerSquareCentimeter + ` mJ/cm²`;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
                return this.KilowattHoursPerSquareMeter + ` kWh/m²`;
            case IrradiationUnits.KilobtusPerSquareFoot:
                return this.KilobtusPerSquareFoot + ` kBtu/ft²`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Irradiation unit abbreviation.
     * Note! the default abbreviation for Irradiation is JoulesPerSquareMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Irradiation.
     * @returns The abbreviation string of Irradiation.
     */
    public getUnitAbbreviation(unitAbbreviation: IrradiationUnits = IrradiationUnits.JoulesPerSquareMeter): string {

        switch (unitAbbreviation) {
            
            case IrradiationUnits.JoulesPerSquareMeter:
                return `J/m²`;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return `J/cm²`;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return `J/mm²`;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return `Wh/m²`;
            case IrradiationUnits.BtusPerSquareFoot:
                return `Btu/ft²`;
            case IrradiationUnits.KilojoulesPerSquareMeter:
                return `kJ/m²`;
            case IrradiationUnits.MillijoulesPerSquareCentimeter:
                return `mJ/cm²`;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
                return `kWh/m²`;
            case IrradiationUnits.KilobtusPerSquareFoot:
                return `kBtu/ft²`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Irradiation are equals to the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns True if the given Irradiation are equal to the current Irradiation.
     */
    public equals(irradiation: Irradiation): boolean {
        return super.internalEquals(this.value, irradiation.BaseValue);
    }

    /**
     * Compare the given Irradiation against the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns 0 if they are equal, -1 if the current Irradiation is less then other, 1 if the current Irradiation is greater then other.
     */
    public compareTo(irradiation: Irradiation): number {
        return super.internalCompareTo(this.value, irradiation.BaseValue);
    }

    /**
     * Add the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    public add(irradiation: Irradiation): Irradiation {
        return new Irradiation(super.internalAdd(this.value, irradiation.BaseValue))
    }

    /**
     * Subtract the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    public subtract(irradiation: Irradiation): Irradiation {
        return new Irradiation(super.internalSubtract(this.value, irradiation.BaseValue))
    }

    /**
     * Multiply the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    public multiply(irradiation: Irradiation): Irradiation {
        return new Irradiation(super.internalMultiply(this.value, irradiation.BaseValue))
    }

    /**
     * Divide the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    public divide(irradiation: Irradiation): Irradiation {
        return new Irradiation(super.internalDivide(this.value, irradiation.BaseValue))
    }

    /**
     * Modulo the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    public modulo(irradiation: Irradiation): Irradiation {
        return new Irradiation(super.internalModulo(this.value, irradiation.BaseValue))
    }

    /**
     * Pow the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    public pow(irradiation: Irradiation): Irradiation {
        return new Irradiation(super.internalPow(this.value, irradiation.BaseValue))
    }
}
