import { BaseUnit } from "../base-unit";

/** PorousMediumPermeabilityUnits enumeration */
export enum PorousMediumPermeabilityUnits {
    /** */
    Darcys = "Darcy",
    /** */
    SquareMeters = "SquareMeter",
    /** */
    SquareCentimeters = "SquareCentimeter",
    /** */
    Microdarcys = "Microdarcy",
    /** */
    Millidarcys = "Millidarcy"
}

/** In fluid mechanics, permeability is the measure of the ability of a porous material to allow fluids to pass through it. */
export class PorousMediumPermeability extends BaseUnit {
    private value: number;
    private darcysLazy: number | null = null;
    private squaremetersLazy: number | null = null;
    private squarecentimetersLazy: number | null = null;
    private microdarcysLazy: number | null = null;
    private millidarcysLazy: number | null = null;

    /**
     * Create a new PorousMediumPermeability.
     * @param value The value.
     * @param fromUnit The ‘PorousMediumPermeability’ unit to create from.
     * The default unit is SquareMeters
     */
    public constructor(value: number, fromUnit: PorousMediumPermeabilityUnits = PorousMediumPermeabilityUnits.SquareMeters) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of PorousMediumPermeability is SquareMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Darcys(): number {
        if(this.darcysLazy !== null){
            return this.darcysLazy;
        }
        return this.darcysLazy = this.convertFromBase(PorousMediumPermeabilityUnits.Darcys);
    }

    /** */
    public get SquareMeters(): number {
        if(this.squaremetersLazy !== null){
            return this.squaremetersLazy;
        }
        return this.squaremetersLazy = this.convertFromBase(PorousMediumPermeabilityUnits.SquareMeters);
    }

    /** */
    public get SquareCentimeters(): number {
        if(this.squarecentimetersLazy !== null){
            return this.squarecentimetersLazy;
        }
        return this.squarecentimetersLazy = this.convertFromBase(PorousMediumPermeabilityUnits.SquareCentimeters);
    }

    /** */
    public get Microdarcys(): number {
        if(this.microdarcysLazy !== null){
            return this.microdarcysLazy;
        }
        return this.microdarcysLazy = this.convertFromBase(PorousMediumPermeabilityUnits.Microdarcys);
    }

    /** */
    public get Millidarcys(): number {
        if(this.millidarcysLazy !== null){
            return this.millidarcysLazy;
        }
        return this.millidarcysLazy = this.convertFromBase(PorousMediumPermeabilityUnits.Millidarcys);
    }

    /**
     * Create a new PorousMediumPermeability instance from a Darcys
     *
     * @param value The unit as Darcys to create a new PorousMediumPermeability from.
     * @returns The new PorousMediumPermeability instance.
     */
    public static FromDarcys(value: number): PorousMediumPermeability {
        return new PorousMediumPermeability(value, PorousMediumPermeabilityUnits.Darcys);
    }

    /**
     * Create a new PorousMediumPermeability instance from a SquareMeters
     *
     * @param value The unit as SquareMeters to create a new PorousMediumPermeability from.
     * @returns The new PorousMediumPermeability instance.
     */
    public static FromSquareMeters(value: number): PorousMediumPermeability {
        return new PorousMediumPermeability(value, PorousMediumPermeabilityUnits.SquareMeters);
    }

    /**
     * Create a new PorousMediumPermeability instance from a SquareCentimeters
     *
     * @param value The unit as SquareCentimeters to create a new PorousMediumPermeability from.
     * @returns The new PorousMediumPermeability instance.
     */
    public static FromSquareCentimeters(value: number): PorousMediumPermeability {
        return new PorousMediumPermeability(value, PorousMediumPermeabilityUnits.SquareCentimeters);
    }

    /**
     * Create a new PorousMediumPermeability instance from a Microdarcys
     *
     * @param value The unit as Microdarcys to create a new PorousMediumPermeability from.
     * @returns The new PorousMediumPermeability instance.
     */
    public static FromMicrodarcys(value: number): PorousMediumPermeability {
        return new PorousMediumPermeability(value, PorousMediumPermeabilityUnits.Microdarcys);
    }

    /**
     * Create a new PorousMediumPermeability instance from a Millidarcys
     *
     * @param value The unit as Millidarcys to create a new PorousMediumPermeability from.
     * @returns The new PorousMediumPermeability instance.
     */
    public static FromMillidarcys(value: number): PorousMediumPermeability {
        return new PorousMediumPermeability(value, PorousMediumPermeabilityUnits.Millidarcys);
    }

    /**
     * Convert PorousMediumPermeability to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: PorousMediumPermeabilityUnits): number {
        switch (toUnit) {
            case PorousMediumPermeabilityUnits.Darcys: return this.Darcys;
            case PorousMediumPermeabilityUnits.SquareMeters: return this.SquareMeters;
            case PorousMediumPermeabilityUnits.SquareCentimeters: return this.SquareCentimeters;
            case PorousMediumPermeabilityUnits.Microdarcys: return this.Microdarcys;
            case PorousMediumPermeabilityUnits.Millidarcys: return this.Millidarcys;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: PorousMediumPermeabilityUnits): number {
        switch (toUnit) {
                
            case PorousMediumPermeabilityUnits.Darcys:
                return this.value / 9.869233e-13;
            case PorousMediumPermeabilityUnits.SquareMeters:
                return this.value;
            case PorousMediumPermeabilityUnits.SquareCentimeters:
                return this.value / 1e-4;
            case PorousMediumPermeabilityUnits.Microdarcys:
                return (this.value / 9.869233e-13) / 0.000001;
            case PorousMediumPermeabilityUnits.Millidarcys:
                return (this.value / 9.869233e-13) / 0.001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PorousMediumPermeabilityUnits): number {
        switch (fromUnit) {
                
            case PorousMediumPermeabilityUnits.Darcys:
                return value * 9.869233e-13;
            case PorousMediumPermeabilityUnits.SquareMeters:
                return value;
            case PorousMediumPermeabilityUnits.SquareCentimeters:
                return value * 1e-4;
            case PorousMediumPermeabilityUnits.Microdarcys:
                return (value * 9.869233e-13) * 0.000001;
            case PorousMediumPermeabilityUnits.Millidarcys:
                return (value * 9.869233e-13) * 0.001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the PorousMediumPermeability to string.
     * Note! the default format for PorousMediumPermeability is SquareMeters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the PorousMediumPermeability.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the PorousMediumPermeability.
     */
    public toString(unit: PorousMediumPermeabilityUnits = PorousMediumPermeabilityUnits.SquareMeters, fractionalDigits?: number): string {

        switch (unit) {
            
            case PorousMediumPermeabilityUnits.Darcys:
                return super.truncateFractionDigits(this.Darcys, fractionalDigits) + ` D`;
            case PorousMediumPermeabilityUnits.SquareMeters:
                return super.truncateFractionDigits(this.SquareMeters, fractionalDigits) + ` m²`;
            case PorousMediumPermeabilityUnits.SquareCentimeters:
                return super.truncateFractionDigits(this.SquareCentimeters, fractionalDigits) + ` cm²`;
            case PorousMediumPermeabilityUnits.Microdarcys:
                return super.truncateFractionDigits(this.Microdarcys, fractionalDigits) + ` μD`;
            case PorousMediumPermeabilityUnits.Millidarcys:
                return super.truncateFractionDigits(this.Millidarcys, fractionalDigits) + ` mD`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get PorousMediumPermeability unit abbreviation.
     * Note! the default abbreviation for PorousMediumPermeability is SquareMeters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the PorousMediumPermeability.
     * @returns The abbreviation string of PorousMediumPermeability.
     */
    public getUnitAbbreviation(unitAbbreviation: PorousMediumPermeabilityUnits = PorousMediumPermeabilityUnits.SquareMeters): string {

        switch (unitAbbreviation) {
            
            case PorousMediumPermeabilityUnits.Darcys:
                return `D`;
            case PorousMediumPermeabilityUnits.SquareMeters:
                return `m²`;
            case PorousMediumPermeabilityUnits.SquareCentimeters:
                return `cm²`;
            case PorousMediumPermeabilityUnits.Microdarcys:
                return `μD`;
            case PorousMediumPermeabilityUnits.Millidarcys:
                return `mD`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given PorousMediumPermeability are equals to the current PorousMediumPermeability.
     * @param porousMediumPermeability The other PorousMediumPermeability.
     * @returns True if the given PorousMediumPermeability are equal to the current PorousMediumPermeability.
     */
    public equals(porousMediumPermeability: PorousMediumPermeability): boolean {
        return super.internalEquals(this.value, porousMediumPermeability.BaseValue);
    }

    /**
     * Compare the given PorousMediumPermeability against the current PorousMediumPermeability.
     * @param porousMediumPermeability The other PorousMediumPermeability.
     * @returns 0 if they are equal, -1 if the current PorousMediumPermeability is less then other, 1 if the current PorousMediumPermeability is greater then other.
     */
    public compareTo(porousMediumPermeability: PorousMediumPermeability): number {
        return super.internalCompareTo(this.value, porousMediumPermeability.BaseValue);
    }

    /**
     * Add the given PorousMediumPermeability with the current PorousMediumPermeability.
     * @param porousMediumPermeability The other PorousMediumPermeability.
     * @returns A new PorousMediumPermeability instance with the results.
     */
    public add(porousMediumPermeability: PorousMediumPermeability): PorousMediumPermeability {
        return new PorousMediumPermeability(super.internalAdd(this.value, porousMediumPermeability.BaseValue))
    }

    /**
     * Subtract the given PorousMediumPermeability with the current PorousMediumPermeability.
     * @param porousMediumPermeability The other PorousMediumPermeability.
     * @returns A new PorousMediumPermeability instance with the results.
     */
    public subtract(porousMediumPermeability: PorousMediumPermeability): PorousMediumPermeability {
        return new PorousMediumPermeability(super.internalSubtract(this.value, porousMediumPermeability.BaseValue))
    }

    /**
     * Multiply the given PorousMediumPermeability with the current PorousMediumPermeability.
     * @param porousMediumPermeability The other PorousMediumPermeability.
     * @returns A new PorousMediumPermeability instance with the results.
     */
    public multiply(porousMediumPermeability: PorousMediumPermeability): PorousMediumPermeability {
        return new PorousMediumPermeability(super.internalMultiply(this.value, porousMediumPermeability.BaseValue))
    }

    /**
     * Divide the given PorousMediumPermeability with the current PorousMediumPermeability.
     * @param porousMediumPermeability The other PorousMediumPermeability.
     * @returns A new PorousMediumPermeability instance with the results.
     */
    public divide(porousMediumPermeability: PorousMediumPermeability): PorousMediumPermeability {
        return new PorousMediumPermeability(super.internalDivide(this.value, porousMediumPermeability.BaseValue))
    }

    /**
     * Modulo the given PorousMediumPermeability with the current PorousMediumPermeability.
     * @param porousMediumPermeability The other PorousMediumPermeability.
     * @returns A new PorousMediumPermeability instance with the results.
     */
    public modulo(porousMediumPermeability: PorousMediumPermeability): PorousMediumPermeability {
        return new PorousMediumPermeability(super.internalModulo(this.value, porousMediumPermeability.BaseValue))
    }

    /**
     * Pow the given PorousMediumPermeability with the current PorousMediumPermeability.
     * @param porousMediumPermeability The other PorousMediumPermeability.
     * @returns A new PorousMediumPermeability instance with the results.
     */
    public pow(porousMediumPermeability: PorousMediumPermeability): PorousMediumPermeability {
        return new PorousMediumPermeability(super.internalPow(this.value, porousMediumPermeability.BaseValue))
    }
}
