/** ElectricConductivityUnits enumeration */
export enum ElectricConductivityUnits {
    /** */
    SiemensPerMeter,
    /** */
    SiemensPerInch,
    /** */
    SiemensPerFoot
}

/** Electrical conductivity or specific conductance is the reciprocal of electrical resistivity, and measures a material's ability to conduct an electric current. */
export class ElectricConductivity {
    private value: number;
    private siemenspermeterLazy: number | null = null;
    private siemensperinchLazy: number | null = null;
    private siemensperfootLazy: number | null = null;

    /**
     * Create a new ElectricConductivity.
     * @param value The value.
     * @param fromUnit The ‘ElectricConductivity’ unit to create from.
     */
    public constructor(value: number, fromUnit: ElectricConductivityUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ElectricConductivity is SiemensPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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

    private convertFromBase(toUnit: ElectricConductivityUnits): number {
        switch (toUnit) {
                
            case ElectricConductivityUnits.SiemensPerMeter:
                return this.value;
            case ElectricConductivityUnits.SiemensPerInch:
                return this.value / 3.937007874015748e1;
            case ElectricConductivityUnits.SiemensPerFoot:
                return this.value / 3.2808398950131234;
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
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ElectricConductivity to string.
     * Note! the default format for ElectricConductivity is SiemensPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricConductivity.
     * @returns The string format of the ElectricConductivity.
     */
    public toString(toUnit: ElectricConductivityUnits = ElectricConductivityUnits.SiemensPerMeter): string {

        switch (toUnit) {
            
            case ElectricConductivityUnits.SiemensPerMeter:
                return this.SiemensPerMeter + ` S/m`;
            case ElectricConductivityUnits.SiemensPerInch:
                return this.SiemensPerInch + ` S/in`;
            case ElectricConductivityUnits.SiemensPerFoot:
                return this.SiemensPerFoot + ` S/ft`;
        default:
            break;
        }
        return this.value.toString();
    }
}
