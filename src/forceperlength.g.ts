/** ForcePerLengthUnits enumeration */
export enum ForcePerLengthUnits {
    /** */
    NewtonsPerMeter,
    /** */
    KilogramsForcePerMeter,
    /** */
    PoundsForcePerFoot,
    /** */
    PoundsForcePerInch,
    /** */
    PoundsForcePerYard,
    /** */
    NanonewtonsPerMeter,
    /** */
    MicronewtonsPerMeter,
    /** */
    CentinewtonsPerMeter,
    /** */
    DecinewtonsPerMeter,
    /** */
    KilonewtonsPerMeter,
    /** */
    MeganewtonsPerMeter
}

/** The magnitude of force per unit length. */
export class ForcePerLength {
    private value: number;
    private newtonspermeterLazy: number | null = null;
    private kilogramsforcepermeterLazy: number | null = null;
    private poundsforceperfootLazy: number | null = null;
    private poundsforceperinchLazy: number | null = null;
    private poundsforceperyardLazy: number | null = null;
    private nanonewtonspermeterLazy: number | null = null;
    private micronewtonspermeterLazy: number | null = null;
    private centinewtonspermeterLazy: number | null = null;
    private decinewtonspermeterLazy: number | null = null;
    private kilonewtonspermeterLazy: number | null = null;
    private meganewtonspermeterLazy: number | null = null;

    /**
     * Create a new ForcePerLength.
     * @param value The value.
     * @param fromUnit The ‘ForcePerLength’ unit to create from.
     * The default unit is NewtonsPerMeter
     */
    public constructor(value: number, fromUnit: ForcePerLengthUnits = ForcePerLengthUnits.NewtonsPerMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ForcePerLength is NewtonsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get NewtonsPerMeter(): number {
        if(this.newtonspermeterLazy !== null){
            return this.newtonspermeterLazy;
        }
        return this.newtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.NewtonsPerMeter);
    }

    /** */
    public get KilogramsForcePerMeter(): number {
        if(this.kilogramsforcepermeterLazy !== null){
            return this.kilogramsforcepermeterLazy;
        }
        return this.kilogramsforcepermeterLazy = this.convertFromBase(ForcePerLengthUnits.KilogramsForcePerMeter);
    }

    /** */
    public get PoundsForcePerFoot(): number {
        if(this.poundsforceperfootLazy !== null){
            return this.poundsforceperfootLazy;
        }
        return this.poundsforceperfootLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerFoot);
    }

    /** */
    public get PoundsForcePerInch(): number {
        if(this.poundsforceperinchLazy !== null){
            return this.poundsforceperinchLazy;
        }
        return this.poundsforceperinchLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerInch);
    }

    /** */
    public get PoundsForcePerYard(): number {
        if(this.poundsforceperyardLazy !== null){
            return this.poundsforceperyardLazy;
        }
        return this.poundsforceperyardLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerYard);
    }

    /** */
    public get NanonewtonsPerMeter(): number {
        if(this.nanonewtonspermeterLazy !== null){
            return this.nanonewtonspermeterLazy;
        }
        return this.nanonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.NanonewtonsPerMeter);
    }

    /** */
    public get MicronewtonsPerMeter(): number {
        if(this.micronewtonspermeterLazy !== null){
            return this.micronewtonspermeterLazy;
        }
        return this.micronewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.MicronewtonsPerMeter);
    }

    /** */
    public get CentinewtonsPerMeter(): number {
        if(this.centinewtonspermeterLazy !== null){
            return this.centinewtonspermeterLazy;
        }
        return this.centinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.CentinewtonsPerMeter);
    }

    /** */
    public get DecinewtonsPerMeter(): number {
        if(this.decinewtonspermeterLazy !== null){
            return this.decinewtonspermeterLazy;
        }
        return this.decinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.DecinewtonsPerMeter);
    }

    /** */
    public get KilonewtonsPerMeter(): number {
        if(this.kilonewtonspermeterLazy !== null){
            return this.kilonewtonspermeterLazy;
        }
        return this.kilonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.KilonewtonsPerMeter);
    }

    /** */
    public get MeganewtonsPerMeter(): number {
        if(this.meganewtonspermeterLazy !== null){
            return this.meganewtonspermeterLazy;
        }
        return this.meganewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.MeganewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a NewtonsPerMeter
     *
     * @param value The unit as NewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromNewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.NewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a KilogramsForcePerMeter
     *
     * @param value The unit as KilogramsForcePerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromKilogramsForcePerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilogramsForcePerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a PoundsForcePerFoot
     *
     * @param value The unit as PoundsForcePerFoot to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromPoundsForcePerFoot(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerFoot);
    }

    /**
     * Create a new ForcePerLength instance from a PoundsForcePerInch
     *
     * @param value The unit as PoundsForcePerInch to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromPoundsForcePerInch(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerInch);
    }

    /**
     * Create a new ForcePerLength instance from a PoundsForcePerYard
     *
     * @param value The unit as PoundsForcePerYard to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromPoundsForcePerYard(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerYard);
    }

    /**
     * Create a new ForcePerLength instance from a NanonewtonsPerMeter
     *
     * @param value The unit as NanonewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromNanonewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.NanonewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a MicronewtonsPerMeter
     *
     * @param value The unit as MicronewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromMicronewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MicronewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a CentinewtonsPerMeter
     *
     * @param value The unit as CentinewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromCentinewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.CentinewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a DecinewtonsPerMeter
     *
     * @param value The unit as DecinewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromDecinewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.DecinewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a KilonewtonsPerMeter
     *
     * @param value The unit as KilonewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromKilonewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.KilonewtonsPerMeter);
    }

    /**
     * Create a new ForcePerLength instance from a MeganewtonsPerMeter
     *
     * @param value The unit as MeganewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    public static FromMeganewtonsPerMeter(value: number): ForcePerLength {
        return new ForcePerLength(value, ForcePerLengthUnits.MeganewtonsPerMeter);
    }

    private convertFromBase(toUnit: ForcePerLengthUnits): number {
        switch (toUnit) {
                
            case ForcePerLengthUnits.NewtonsPerMeter:
                return this.value;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return this.value/9.80665002864;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return this.value/14.59390292;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return this.value/1.75126835e2;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return this.value/4.864634307;
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return (this.value) / 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return (this.value) / 0.000001;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return (this.value) / 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return (this.value) / 0.1;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return (this.value) / 1000;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ForcePerLengthUnits): number {
        switch (fromUnit) {
                
            case ForcePerLengthUnits.NewtonsPerMeter:
                return value;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return value*9.80665002864;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return value*14.59390292;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return value*1.75126835e2;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return value*4.864634307;
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return (value) * 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return (value) * 0.000001;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return (value) * 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return (value) * 0.1;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return (value) * 1000;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ForcePerLength to string.
     * Note! the default format for ForcePerLength is NewtonsPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ForcePerLength.
     * @returns The string format of the ForcePerLength.
     */
    public toString(toUnit: ForcePerLengthUnits = ForcePerLengthUnits.NewtonsPerMeter): string {

        switch (toUnit) {
            
            case ForcePerLengthUnits.NewtonsPerMeter:
                return this.NewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return this.KilogramsForcePerMeter + ` kgf/m`;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return this.PoundsForcePerFoot + ` lbf/ft`;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return this.PoundsForcePerInch + ` lbf/in`;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return this.PoundsForcePerYard + ` lbf/yd`;
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return this.NanonewtonsPerMeter + ` `;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return this.MicronewtonsPerMeter + ` `;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return this.CentinewtonsPerMeter + ` `;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return this.DecinewtonsPerMeter + ` `;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return this.KilonewtonsPerMeter + ` `;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return this.MeganewtonsPerMeter + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given ForcePerLength are equals to the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns True if the given ForcePerLength are equal to the current ForcePerLength.
     */
    public equals(forcePerLength: ForcePerLength): boolean {
        return this.value === forcePerLength.BaseValue;
    }

    /**
     * Compare the given ForcePerLength against the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns 0 if they are equal, -1 if the current ForcePerLength is less then other, 1 if the current ForcePerLength is greater then other.
     */
    public compareTo(forcePerLength: ForcePerLength): number {

        if (this.value > forcePerLength.BaseValue)
            return 1;
        if (this.value < forcePerLength.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public add(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(this.value + forcePerLength.BaseValue)
    }

    /**
     * Subtract the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public subtract(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(this.value - forcePerLength.BaseValue)
    }

    /**
     * Multiply the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public multiply(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(this.value * forcePerLength.BaseValue)
    }

    /**
     * Divide the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public divide(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(this.value / forcePerLength.BaseValue)
    }

    /**
     * Modulo the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public modulo(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(this.value % forcePerLength.BaseValue)
    }

    /**
     * Pow the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    public pow(forcePerLength: ForcePerLength): ForcePerLength {
        return new ForcePerLength(this.value ** forcePerLength.BaseValue)
    }
}
