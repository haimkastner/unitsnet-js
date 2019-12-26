/** MolarMassUnits enumeration */
export enum MolarMassUnits {
    /** */
    GramsPerMole,
    /** */
    PoundsPerMole,
    /** */
    NanogramsPerMole,
    /** */
    MicrogramsPerMole,
    /** */
    CentigramsPerMole,
    /** */
    DecigramsPerMole,
    /** */
    DecagramsPerMole,
    /** */
    HectogramsPerMole,
    /** */
    KilogramsPerMole,
    /** */
    KilopoundsPerMole,
    /** */
    MegapoundsPerMole
}

/** In chemistry, the molar mass M is a physical property defined as the mass of a given substance (chemical element or chemical compound) divided by the amount of substance. */
export class MolarMass {
    private value: number;
    private gramspermoleLazy: number | null = null;
    private poundspermoleLazy: number | null = null;
    private nanogramspermoleLazy: number | null = null;
    private microgramspermoleLazy: number | null = null;
    private centigramspermoleLazy: number | null = null;
    private decigramspermoleLazy: number | null = null;
    private decagramspermoleLazy: number | null = null;
    private hectogramspermoleLazy: number | null = null;
    private kilogramspermoleLazy: number | null = null;
    private kilopoundspermoleLazy: number | null = null;
    private megapoundspermoleLazy: number | null = null;

    /**
     * Create a new MolarMass.
     * @param value The value.
     * @param fromUnit The ‘MolarMass’ unit to create from.
     */
    public constructor(value: number, fromUnit: MolarMassUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MolarMass is KilogramPerMole.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get GramsPerMole(): number {
        if(this.gramspermoleLazy !== null){
            return this.gramspermoleLazy;
        }
        return this.gramspermoleLazy = this.convertFromBase(MolarMassUnits.GramsPerMole);
    }

    /** */
    public get PoundsPerMole(): number {
        if(this.poundspermoleLazy !== null){
            return this.poundspermoleLazy;
        }
        return this.poundspermoleLazy = this.convertFromBase(MolarMassUnits.PoundsPerMole);
    }

    /** */
    public get NanogramsPerMole(): number {
        if(this.nanogramspermoleLazy !== null){
            return this.nanogramspermoleLazy;
        }
        return this.nanogramspermoleLazy = this.convertFromBase(MolarMassUnits.NanogramsPerMole);
    }

    /** */
    public get MicrogramsPerMole(): number {
        if(this.microgramspermoleLazy !== null){
            return this.microgramspermoleLazy;
        }
        return this.microgramspermoleLazy = this.convertFromBase(MolarMassUnits.MicrogramsPerMole);
    }

    /** */
    public get CentigramsPerMole(): number {
        if(this.centigramspermoleLazy !== null){
            return this.centigramspermoleLazy;
        }
        return this.centigramspermoleLazy = this.convertFromBase(MolarMassUnits.CentigramsPerMole);
    }

    /** */
    public get DecigramsPerMole(): number {
        if(this.decigramspermoleLazy !== null){
            return this.decigramspermoleLazy;
        }
        return this.decigramspermoleLazy = this.convertFromBase(MolarMassUnits.DecigramsPerMole);
    }

    /** */
    public get DecagramsPerMole(): number {
        if(this.decagramspermoleLazy !== null){
            return this.decagramspermoleLazy;
        }
        return this.decagramspermoleLazy = this.convertFromBase(MolarMassUnits.DecagramsPerMole);
    }

    /** */
    public get HectogramsPerMole(): number {
        if(this.hectogramspermoleLazy !== null){
            return this.hectogramspermoleLazy;
        }
        return this.hectogramspermoleLazy = this.convertFromBase(MolarMassUnits.HectogramsPerMole);
    }

    /** */
    public get KilogramsPerMole(): number {
        if(this.kilogramspermoleLazy !== null){
            return this.kilogramspermoleLazy;
        }
        return this.kilogramspermoleLazy = this.convertFromBase(MolarMassUnits.KilogramsPerMole);
    }

    /** */
    public get KilopoundsPerMole(): number {
        if(this.kilopoundspermoleLazy !== null){
            return this.kilopoundspermoleLazy;
        }
        return this.kilopoundspermoleLazy = this.convertFromBase(MolarMassUnits.KilopoundsPerMole);
    }

    /** */
    public get MegapoundsPerMole(): number {
        if(this.megapoundspermoleLazy !== null){
            return this.megapoundspermoleLazy;
        }
        return this.megapoundspermoleLazy = this.convertFromBase(MolarMassUnits.MegapoundsPerMole);
    }

    /**
     * Create a new MolarMass instance from a GramsPerMole
     *
     * @param value The unit as GramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    public static FromGramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.GramsPerMole);
    }

    /**
     * Create a new MolarMass instance from a PoundsPerMole
     *
     * @param value The unit as PoundsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    public static FromPoundsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.PoundsPerMole);
    }

    /**
     * Create a new MolarMass instance from a NanogramsPerMole
     *
     * @param value The unit as NanogramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    public static FromNanogramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.NanogramsPerMole);
    }

    /**
     * Create a new MolarMass instance from a MicrogramsPerMole
     *
     * @param value The unit as MicrogramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    public static FromMicrogramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.MicrogramsPerMole);
    }

    /**
     * Create a new MolarMass instance from a CentigramsPerMole
     *
     * @param value The unit as CentigramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    public static FromCentigramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.CentigramsPerMole);
    }

    /**
     * Create a new MolarMass instance from a DecigramsPerMole
     *
     * @param value The unit as DecigramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    public static FromDecigramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.DecigramsPerMole);
    }

    /**
     * Create a new MolarMass instance from a DecagramsPerMole
     *
     * @param value The unit as DecagramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    public static FromDecagramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.DecagramsPerMole);
    }

    /**
     * Create a new MolarMass instance from a HectogramsPerMole
     *
     * @param value The unit as HectogramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    public static FromHectogramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.HectogramsPerMole);
    }

    /**
     * Create a new MolarMass instance from a KilogramsPerMole
     *
     * @param value The unit as KilogramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    public static FromKilogramsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.KilogramsPerMole);
    }

    /**
     * Create a new MolarMass instance from a KilopoundsPerMole
     *
     * @param value The unit as KilopoundsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    public static FromKilopoundsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.KilopoundsPerMole);
    }

    /**
     * Create a new MolarMass instance from a MegapoundsPerMole
     *
     * @param value The unit as MegapoundsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    public static FromMegapoundsPerMole(value: number): MolarMass {
        return new MolarMass(value, MolarMassUnits.MegapoundsPerMole);
    }

    private convertFromBase(toUnit: MolarMassUnits): number {
        switch (toUnit) {
                
            case MolarMassUnits.GramsPerMole:
                return this.value*1e3;
            case MolarMassUnits.PoundsPerMole:
                return this.value/0.45359237;
            case MolarMassUnits.NanogramsPerMole:
                return (this.value*1e3) / 1e-9;
            case MolarMassUnits.MicrogramsPerMole:
                return (this.value*1e3) / 0.000001;
            case MolarMassUnits.CentigramsPerMole:
                return (this.value*1e3) / 0.01;
            case MolarMassUnits.DecigramsPerMole:
                return (this.value*1e3) / 0.1;
            case MolarMassUnits.DecagramsPerMole:
                return (this.value*1e3) / 10;
            case MolarMassUnits.HectogramsPerMole:
                return (this.value*1e3) / 100;
            case MolarMassUnits.KilogramsPerMole:
                return (this.value*1e3) / 1000;
            case MolarMassUnits.KilopoundsPerMole:
                return (this.value/0.45359237) / 1000;
            case MolarMassUnits.MegapoundsPerMole:
                return (this.value/0.45359237) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MolarMassUnits): number {
        switch (fromUnit) {
                
            case MolarMassUnits.GramsPerMole:
                return value/1e3;
            case MolarMassUnits.PoundsPerMole:
                return value*0.45359237;
            case MolarMassUnits.NanogramsPerMole:
                return (value/1e3) * 1e-9;
            case MolarMassUnits.MicrogramsPerMole:
                return (value/1e3) * 0.000001;
            case MolarMassUnits.CentigramsPerMole:
                return (value/1e3) * 0.01;
            case MolarMassUnits.DecigramsPerMole:
                return (value/1e3) * 0.1;
            case MolarMassUnits.DecagramsPerMole:
                return (value/1e3) * 10;
            case MolarMassUnits.HectogramsPerMole:
                return (value/1e3) * 100;
            case MolarMassUnits.KilogramsPerMole:
                return (value/1e3) * 1000;
            case MolarMassUnits.KilopoundsPerMole:
                return (value*0.45359237) * 1000;
            case MolarMassUnits.MegapoundsPerMole:
                return (value*0.45359237) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the MolarMass to string.
     * Note! the default format for MolarMass is KilogramsPerMole.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MolarMass.
     * @returns The string format of the MolarMass.
     */
    public toString(toUnit: MolarMassUnits = MolarMassUnits.KilogramsPerMole): string {

        switch (toUnit) {
            
            case MolarMassUnits.GramsPerMole:
                return this.GramsPerMole + ` g/mol`;
            case MolarMassUnits.PoundsPerMole:
                return this.PoundsPerMole + ` lb/mol`;
            case MolarMassUnits.NanogramsPerMole:
                return this.NanogramsPerMole + ` g/mol`;
            case MolarMassUnits.MicrogramsPerMole:
                return this.MicrogramsPerMole + ` g/mol`;
            case MolarMassUnits.CentigramsPerMole:
                return this.CentigramsPerMole + ` g/mol`;
            case MolarMassUnits.DecigramsPerMole:
                return this.DecigramsPerMole + ` g/mol`;
            case MolarMassUnits.DecagramsPerMole:
                return this.DecagramsPerMole + ` g/mol`;
            case MolarMassUnits.HectogramsPerMole:
                return this.HectogramsPerMole + ` g/mol`;
            case MolarMassUnits.KilogramsPerMole:
                return this.KilogramsPerMole + ` g/mol`;
            case MolarMassUnits.KilopoundsPerMole:
                return this.KilopoundsPerMole + ` lb/mol`;
            case MolarMassUnits.MegapoundsPerMole:
                return this.MegapoundsPerMole + ` lb/mol`;
        default:
            break;
        }
        return this.value.toString();
    }
}
