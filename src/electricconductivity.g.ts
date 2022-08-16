/** ElectricConductivityUnits enumeration */
export enum ElectricConductivityUnits {
    /** */
    SiemensPerMeter,
    /** */
    SiemensPerInch,
    /** */
    SiemensPerFoot,
    /** */
    SiemensPerCentimeter,
    /** */
    MicrosiemensPerCentimeter,
    /** */
    MillisiemensPerCentimeter
}

/** Electrical conductivity or specific conductance is the reciprocal of electrical resistivity, and measures a material's ability to conduct an electric current. */
export class ElectricConductivity {
    private value: number;
    private siemenspermeterLazy: number | null = null;
    private siemensperinchLazy: number | null = null;
    private siemensperfootLazy: number | null = null;
    private siemenspercentimeterLazy: number | null = null;
    private microsiemenspercentimeterLazy: number | null = null;
    private millisiemenspercentimeterLazy: number | null = null;

    /**
     * Create a new ElectricConductivity.
     * @param value The value.
     * @param fromUnit The ‘ElectricConductivity’ unit to create from.
     * The default unit is SiemensPerMeter
     */
    public constructor(value: number, fromUnit: ElectricConductivityUnits = ElectricConductivityUnits.SiemensPerMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricConductivity is SiemensPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get SiemensPerMeter(): number {
        if(this.siemenspermeterLazy !== null){
            return this.siemenspermeterLazy;
        }
        return this.siemenspermeterLazy = this.convertFromBase(ElectricConductivityUnits.SiemensPerMeter);
    }

    /** */
    public get SiemensPerInch(): number {
        if(this.siemensperinchLazy !== null){
            return this.siemensperinchLazy;
        }
        return this.siemensperinchLazy = this.convertFromBase(ElectricConductivityUnits.SiemensPerInch);
    }

    /** */
    public get SiemensPerFoot(): number {
        if(this.siemensperfootLazy !== null){
            return this.siemensperfootLazy;
        }
        return this.siemensperfootLazy = this.convertFromBase(ElectricConductivityUnits.SiemensPerFoot);
    }

    /** */
    public get SiemensPerCentimeter(): number {
        if(this.siemenspercentimeterLazy !== null){
            return this.siemenspercentimeterLazy;
        }
        return this.siemenspercentimeterLazy = this.convertFromBase(ElectricConductivityUnits.SiemensPerCentimeter);
    }

    /** */
    public get MicrosiemensPerCentimeter(): number {
        if(this.microsiemenspercentimeterLazy !== null){
            return this.microsiemenspercentimeterLazy;
        }
        return this.microsiemenspercentimeterLazy = this.convertFromBase(ElectricConductivityUnits.MicrosiemensPerCentimeter);
    }

    /** */
    public get MillisiemensPerCentimeter(): number {
        if(this.millisiemenspercentimeterLazy !== null){
            return this.millisiemenspercentimeterLazy;
        }
        return this.millisiemenspercentimeterLazy = this.convertFromBase(ElectricConductivityUnits.MillisiemensPerCentimeter);
    }

    /**
     * Create a new ElectricConductivity instance from a SiemensPerMeter
     *
     * @param value The unit as SiemensPerMeter to create a new ElectricConductivity from.
     * @returns The new ElectricConductivity instance.
     */
    public static FromSiemensPerMeter(value: number): ElectricConductivity {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerMeter);
    }

    /**
     * Create a new ElectricConductivity instance from a SiemensPerInch
     *
     * @param value The unit as SiemensPerInch to create a new ElectricConductivity from.
     * @returns The new ElectricConductivity instance.
     */
    public static FromSiemensPerInch(value: number): ElectricConductivity {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerInch);
    }

    /**
     * Create a new ElectricConductivity instance from a SiemensPerFoot
     *
     * @param value The unit as SiemensPerFoot to create a new ElectricConductivity from.
     * @returns The new ElectricConductivity instance.
     */
    public static FromSiemensPerFoot(value: number): ElectricConductivity {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerFoot);
    }

    /**
     * Create a new ElectricConductivity instance from a SiemensPerCentimeter
     *
     * @param value The unit as SiemensPerCentimeter to create a new ElectricConductivity from.
     * @returns The new ElectricConductivity instance.
     */
    public static FromSiemensPerCentimeter(value: number): ElectricConductivity {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerCentimeter);
    }

    /**
     * Create a new ElectricConductivity instance from a MicrosiemensPerCentimeter
     *
     * @param value The unit as MicrosiemensPerCentimeter to create a new ElectricConductivity from.
     * @returns The new ElectricConductivity instance.
     */
    public static FromMicrosiemensPerCentimeter(value: number): ElectricConductivity {
        return new ElectricConductivity(value, ElectricConductivityUnits.MicrosiemensPerCentimeter);
    }

    /**
     * Create a new ElectricConductivity instance from a MillisiemensPerCentimeter
     *
     * @param value The unit as MillisiemensPerCentimeter to create a new ElectricConductivity from.
     * @returns The new ElectricConductivity instance.
     */
    public static FromMillisiemensPerCentimeter(value: number): ElectricConductivity {
        return new ElectricConductivity(value, ElectricConductivityUnits.MillisiemensPerCentimeter);
    }

    private convertFromBase(toUnit: ElectricConductivityUnits): number {
        switch (toUnit) {
                
            case ElectricConductivityUnits.SiemensPerMeter:
                return this.value;
            case ElectricConductivityUnits.SiemensPerInch:
                return this.value / 3.937007874015748e1;
            case ElectricConductivityUnits.SiemensPerFoot:
                return this.value / 3.2808398950131234;
            case ElectricConductivityUnits.SiemensPerCentimeter:
                return this.value / 1e2;
            case ElectricConductivityUnits.MicrosiemensPerCentimeter:
                return (this.value / 1e2) / 0.000001;
            case ElectricConductivityUnits.MillisiemensPerCentimeter:
                return (this.value / 1e2) / 0.001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricConductivityUnits): number {
        switch (fromUnit) {
                
            case ElectricConductivityUnits.SiemensPerMeter:
                return value;
            case ElectricConductivityUnits.SiemensPerInch:
                return value * 3.937007874015748e1;
            case ElectricConductivityUnits.SiemensPerFoot:
                return value * 3.2808398950131234;
            case ElectricConductivityUnits.SiemensPerCentimeter:
                return value * 1e2;
            case ElectricConductivityUnits.MicrosiemensPerCentimeter:
                return (value * 1e2) * 0.000001;
            case ElectricConductivityUnits.MillisiemensPerCentimeter:
                return (value * 1e2) * 0.001;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricConductivity to string.
     * Note! the default format for ElectricConductivity is SiemensPerMeter.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ElectricConductivity.
     * @returns The string format of the ElectricConductivity.
     */
    public toString(unit: ElectricConductivityUnits = ElectricConductivityUnits.SiemensPerMeter): string {

        switch (unit) {
            
            case ElectricConductivityUnits.SiemensPerMeter:
                return this.SiemensPerMeter + ` S/m`;
            case ElectricConductivityUnits.SiemensPerInch:
                return this.SiemensPerInch + ` S/in`;
            case ElectricConductivityUnits.SiemensPerFoot:
                return this.SiemensPerFoot + ` S/ft`;
            case ElectricConductivityUnits.SiemensPerCentimeter:
                return this.SiemensPerCentimeter + ` S/cm`;
            case ElectricConductivityUnits.MicrosiemensPerCentimeter:
                return this.MicrosiemensPerCentimeter + ` `;
            case ElectricConductivityUnits.MillisiemensPerCentimeter:
                return this.MillisiemensPerCentimeter + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ElectricConductivity unit abbreviation.
     * Note! the default abbreviation for ElectricConductivity is SiemensPerMeter.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ElectricConductivity.
     * @returns The abbreviation string of ElectricConductivity.
     */
    public getUnitAbbreviation(unitAbbreviation: ElectricConductivityUnits = ElectricConductivityUnits.SiemensPerMeter): string {

        switch (unitAbbreviation) {
            
            case ElectricConductivityUnits.SiemensPerMeter:
                return `S/m`;
            case ElectricConductivityUnits.SiemensPerInch:
                return `S/in`;
            case ElectricConductivityUnits.SiemensPerFoot:
                return `S/ft`;
            case ElectricConductivityUnits.SiemensPerCentimeter:
                return `S/cm`;
            case ElectricConductivityUnits.MicrosiemensPerCentimeter:
                return ``;
            case ElectricConductivityUnits.MillisiemensPerCentimeter:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ElectricConductivity are equals to the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns True if the given ElectricConductivity are equal to the current ElectricConductivity.
     */
    public equals(electricConductivity: ElectricConductivity): boolean {
        return this.value === electricConductivity.BaseValue;
    }

    /**
     * Compare the given ElectricConductivity against the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns 0 if they are equal, -1 if the current ElectricConductivity is less then other, 1 if the current ElectricConductivity is greater then other.
     */
    public compareTo(electricConductivity: ElectricConductivity): number {

        if (this.value > electricConductivity.BaseValue)
            return 1;
        if (this.value < electricConductivity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ElectricConductivity with the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns A new ElectricConductivity instance with the results.
     */
    public add(electricConductivity: ElectricConductivity): ElectricConductivity {
        return new ElectricConductivity(this.value + electricConductivity.BaseValue)
    }

    /**
     * Subtract the given ElectricConductivity with the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns A new ElectricConductivity instance with the results.
     */
    public subtract(electricConductivity: ElectricConductivity): ElectricConductivity {
        return new ElectricConductivity(this.value - electricConductivity.BaseValue)
    }

    /**
     * Multiply the given ElectricConductivity with the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns A new ElectricConductivity instance with the results.
     */
    public multiply(electricConductivity: ElectricConductivity): ElectricConductivity {
        return new ElectricConductivity(this.value * electricConductivity.BaseValue)
    }

    /**
     * Divide the given ElectricConductivity with the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns A new ElectricConductivity instance with the results.
     */
    public divide(electricConductivity: ElectricConductivity): ElectricConductivity {
        return new ElectricConductivity(this.value / electricConductivity.BaseValue)
    }

    /**
     * Modulo the given ElectricConductivity with the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns A new ElectricConductivity instance with the results.
     */
    public modulo(electricConductivity: ElectricConductivity): ElectricConductivity {
        return new ElectricConductivity(this.value % electricConductivity.BaseValue)
    }

    /**
     * Pow the given ElectricConductivity with the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns A new ElectricConductivity instance with the results.
     */
    public pow(electricConductivity: ElectricConductivity): ElectricConductivity {
        return new ElectricConductivity(this.value ** electricConductivity.BaseValue)
    }
}
