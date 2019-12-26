/** AmountOfSubstanceUnits enumeration */
export enum AmountOfSubstanceUnits {
    /** */
    Moles,
    /** */
    PoundMoles,
    /** */
    Nanomoles,
    /** */
    Micromoles,
    /** */
    Centimoles,
    /** */
    Decimoles,
    /** */
    Kilomoles,
    /** */
    Megamoles,
    /** */
    NanopoundMoles,
    /** */
    MicropoundMoles,
    /** */
    CentipoundMoles,
    /** */
    DecipoundMoles,
    /** */
    KilopoundMoles
}

/** Mole is the amount of substance containing Avagadro's Number (6.02 x 10 ^ 23) of real particles such as molecules,atoms, ions or radicals. */
export class AmountOfSubstance {
    private value: number;
    private molesLazy: number | null = null;
    private poundmolesLazy: number | null = null;
    private nanomolesLazy: number | null = null;
    private micromolesLazy: number | null = null;
    private centimolesLazy: number | null = null;
    private decimolesLazy: number | null = null;
    private kilomolesLazy: number | null = null;
    private megamolesLazy: number | null = null;
    private nanopoundmolesLazy: number | null = null;
    private micropoundmolesLazy: number | null = null;
    private centipoundmolesLazy: number | null = null;
    private decipoundmolesLazy: number | null = null;
    private kilopoundmolesLazy: number | null = null;

    /**
     * Create a new AmountOfSubstance.
     * @param value The value.
     * @param fromUnit The ‘AmountOfSubstance’ unit to create from.
     */
    public constructor(value: number, fromUnit: AmountOfSubstanceUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of AmountOfSubstance is Mole.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Moles(): number {
        if(this.molesLazy !== null){
            return this.molesLazy;
        }
        return this.molesLazy = this.convertFromBase(AmountOfSubstanceUnits.Moles);
    }

    /** */
    public get PoundMoles(): number {
        if(this.poundmolesLazy !== null){
            return this.poundmolesLazy;
        }
        return this.poundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.PoundMoles);
    }

    /** */
    public get Nanomoles(): number {
        if(this.nanomolesLazy !== null){
            return this.nanomolesLazy;
        }
        return this.nanomolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Nanomoles);
    }

    /** */
    public get Micromoles(): number {
        if(this.micromolesLazy !== null){
            return this.micromolesLazy;
        }
        return this.micromolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Micromoles);
    }

    /** */
    public get Centimoles(): number {
        if(this.centimolesLazy !== null){
            return this.centimolesLazy;
        }
        return this.centimolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Centimoles);
    }

    /** */
    public get Decimoles(): number {
        if(this.decimolesLazy !== null){
            return this.decimolesLazy;
        }
        return this.decimolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Decimoles);
    }

    /** */
    public get Kilomoles(): number {
        if(this.kilomolesLazy !== null){
            return this.kilomolesLazy;
        }
        return this.kilomolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Kilomoles);
    }

    /** */
    public get Megamoles(): number {
        if(this.megamolesLazy !== null){
            return this.megamolesLazy;
        }
        return this.megamolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Megamoles);
    }

    /** */
    public get NanopoundMoles(): number {
        if(this.nanopoundmolesLazy !== null){
            return this.nanopoundmolesLazy;
        }
        return this.nanopoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.NanopoundMoles);
    }

    /** */
    public get MicropoundMoles(): number {
        if(this.micropoundmolesLazy !== null){
            return this.micropoundmolesLazy;
        }
        return this.micropoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.MicropoundMoles);
    }

    /** */
    public get CentipoundMoles(): number {
        if(this.centipoundmolesLazy !== null){
            return this.centipoundmolesLazy;
        }
        return this.centipoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.CentipoundMoles);
    }

    /** */
    public get DecipoundMoles(): number {
        if(this.decipoundmolesLazy !== null){
            return this.decipoundmolesLazy;
        }
        return this.decipoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.DecipoundMoles);
    }

    /** */
    public get KilopoundMoles(): number {
        if(this.kilopoundmolesLazy !== null){
            return this.kilopoundmolesLazy;
        }
        return this.kilopoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.KilopoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Moles
     *
     * @param value The unit as Moles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Moles);
    }

    /**
     * Create a new AmountOfSubstance instance from a PoundMoles
     *
     * @param value The unit as PoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromPoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.PoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Nanomoles
     *
     * @param value The unit as Nanomoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromNanomoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Nanomoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Micromoles
     *
     * @param value The unit as Micromoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromMicromoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Micromoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Centimoles
     *
     * @param value The unit as Centimoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromCentimoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Centimoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Decimoles
     *
     * @param value The unit as Decimoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromDecimoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Decimoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Kilomoles
     *
     * @param value The unit as Kilomoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromKilomoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Kilomoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a Megamoles
     *
     * @param value The unit as Megamoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromMegamoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Megamoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a NanopoundMoles
     *
     * @param value The unit as NanopoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromNanopoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.NanopoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a MicropoundMoles
     *
     * @param value The unit as MicropoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromMicropoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.MicropoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a CentipoundMoles
     *
     * @param value The unit as CentipoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromCentipoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.CentipoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a DecipoundMoles
     *
     * @param value The unit as DecipoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromDecipoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.DecipoundMoles);
    }

    /**
     * Create a new AmountOfSubstance instance from a KilopoundMoles
     *
     * @param value The unit as KilopoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    public static FromKilopoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.KilopoundMoles);
    }

    private convertFromBase(toUnit: AmountOfSubstanceUnits): number {
        switch (toUnit) {
                
            case AmountOfSubstanceUnits.Moles:
                return this.value;
            case AmountOfSubstanceUnits.PoundMoles:
                return this.value/453.59237;
            case AmountOfSubstanceUnits.Nanomoles:
                return (this.value) / 1e-9;
            case AmountOfSubstanceUnits.Micromoles:
                return (this.value) / 0.000001;
            case AmountOfSubstanceUnits.Centimoles:
                return (this.value) / 0.01;
            case AmountOfSubstanceUnits.Decimoles:
                return (this.value) / 0.1;
            case AmountOfSubstanceUnits.Kilomoles:
                return (this.value) / 1000;
            case AmountOfSubstanceUnits.Megamoles:
                return (this.value) / 1000000;
            case AmountOfSubstanceUnits.NanopoundMoles:
                return (this.value/453.59237) / 1e-9;
            case AmountOfSubstanceUnits.MicropoundMoles:
                return (this.value/453.59237) / 0.000001;
            case AmountOfSubstanceUnits.CentipoundMoles:
                return (this.value/453.59237) / 0.01;
            case AmountOfSubstanceUnits.DecipoundMoles:
                return (this.value/453.59237) / 0.1;
            case AmountOfSubstanceUnits.KilopoundMoles:
                return (this.value/453.59237) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: AmountOfSubstanceUnits): number {
        switch (fromUnit) {
                
            case AmountOfSubstanceUnits.Moles:
                return value;
            case AmountOfSubstanceUnits.PoundMoles:
                return value*453.59237;
            case AmountOfSubstanceUnits.Nanomoles:
                return (value) * 1e-9;
            case AmountOfSubstanceUnits.Micromoles:
                return (value) * 0.000001;
            case AmountOfSubstanceUnits.Centimoles:
                return (value) * 0.01;
            case AmountOfSubstanceUnits.Decimoles:
                return (value) * 0.1;
            case AmountOfSubstanceUnits.Kilomoles:
                return (value) * 1000;
            case AmountOfSubstanceUnits.Megamoles:
                return (value) * 1000000;
            case AmountOfSubstanceUnits.NanopoundMoles:
                return (value*453.59237) * 1e-9;
            case AmountOfSubstanceUnits.MicropoundMoles:
                return (value*453.59237) * 0.000001;
            case AmountOfSubstanceUnits.CentipoundMoles:
                return (value*453.59237) * 0.01;
            case AmountOfSubstanceUnits.DecipoundMoles:
                return (value*453.59237) * 0.1;
            case AmountOfSubstanceUnits.KilopoundMoles:
                return (value*453.59237) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the AmountOfSubstance to string.
     * Note! the default format for AmountOfSubstance is Moles.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the AmountOfSubstance.
     * @returns The string format of the AmountOfSubstance.
     */
    public toString(toUnit: AmountOfSubstanceUnits = AmountOfSubstanceUnits.Moles): string {

        switch (toUnit) {
            
            case AmountOfSubstanceUnits.Moles:
                return this.Moles + ` mol`;
            case AmountOfSubstanceUnits.PoundMoles:
                return this.PoundMoles + ` lbmol`;
            case AmountOfSubstanceUnits.Nanomoles:
                return this.Nanomoles + ` mol`;
            case AmountOfSubstanceUnits.Micromoles:
                return this.Micromoles + ` mol`;
            case AmountOfSubstanceUnits.Centimoles:
                return this.Centimoles + ` mol`;
            case AmountOfSubstanceUnits.Decimoles:
                return this.Decimoles + ` mol`;
            case AmountOfSubstanceUnits.Kilomoles:
                return this.Kilomoles + ` mol`;
            case AmountOfSubstanceUnits.Megamoles:
                return this.Megamoles + ` mol`;
            case AmountOfSubstanceUnits.NanopoundMoles:
                return this.NanopoundMoles + ` lbmol`;
            case AmountOfSubstanceUnits.MicropoundMoles:
                return this.MicropoundMoles + ` lbmol`;
            case AmountOfSubstanceUnits.CentipoundMoles:
                return this.CentipoundMoles + ` lbmol`;
            case AmountOfSubstanceUnits.DecipoundMoles:
                return this.DecipoundMoles + ` lbmol`;
            case AmountOfSubstanceUnits.KilopoundMoles:
                return this.KilopoundMoles + ` lbmol`;
        default:
            break;
        }
        return this.value.toString();
    }
}
