export enum AmountOfSubstanceUnits {
    Moles,
    PoundMoles,
    Nanomoles,
    Micromoles,
    Centimoles,
    Decimoles,
    Kilomoles,
    Megamoles,
    NanopoundMoles,
    MicropoundMoles,
    CentipoundMoles,
    DecipoundMoles,
    KilopoundMoles
}

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

    public constructor(value: number, fromUnit: AmountOfSubstanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Moles(): number {
        if(this.molesLazy !== null){
            return this.molesLazy;
        }
        return this.molesLazy = this.convertFromBase(AmountOfSubstanceUnits.Moles);
    }

    public get PoundMoles(): number {
        if(this.poundmolesLazy !== null){
            return this.poundmolesLazy;
        }
        return this.poundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.PoundMoles);
    }

    public get Nanomoles(): number {
        if(this.nanomolesLazy !== null){
            return this.nanomolesLazy;
        }
        return this.nanomolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Nanomoles);
    }

    public get Micromoles(): number {
        if(this.micromolesLazy !== null){
            return this.micromolesLazy;
        }
        return this.micromolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Micromoles);
    }

    public get Centimoles(): number {
        if(this.centimolesLazy !== null){
            return this.centimolesLazy;
        }
        return this.centimolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Centimoles);
    }

    public get Decimoles(): number {
        if(this.decimolesLazy !== null){
            return this.decimolesLazy;
        }
        return this.decimolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Decimoles);
    }

    public get Kilomoles(): number {
        if(this.kilomolesLazy !== null){
            return this.kilomolesLazy;
        }
        return this.kilomolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Kilomoles);
    }

    public get Megamoles(): number {
        if(this.megamolesLazy !== null){
            return this.megamolesLazy;
        }
        return this.megamolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Megamoles);
    }

    public get NanopoundMoles(): number {
        if(this.nanopoundmolesLazy !== null){
            return this.nanopoundmolesLazy;
        }
        return this.nanopoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.NanopoundMoles);
    }

    public get MicropoundMoles(): number {
        if(this.micropoundmolesLazy !== null){
            return this.micropoundmolesLazy;
        }
        return this.micropoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.MicropoundMoles);
    }

    public get CentipoundMoles(): number {
        if(this.centipoundmolesLazy !== null){
            return this.centipoundmolesLazy;
        }
        return this.centipoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.CentipoundMoles);
    }

    public get DecipoundMoles(): number {
        if(this.decipoundmolesLazy !== null){
            return this.decipoundmolesLazy;
        }
        return this.decipoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.DecipoundMoles);
    }

    public get KilopoundMoles(): number {
        if(this.kilopoundmolesLazy !== null){
            return this.kilopoundmolesLazy;
        }
        return this.kilopoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.KilopoundMoles);
    }

    public static FromMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Moles);
    }

    public static FromPoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.PoundMoles);
    }

    public static FromNanomoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Nanomoles);
    }

    public static FromMicromoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Micromoles);
    }

    public static FromCentimoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Centimoles);
    }

    public static FromDecimoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Decimoles);
    }

    public static FromKilomoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Kilomoles);
    }

    public static FromMegamoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Megamoles);
    }

    public static FromNanopoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.NanopoundMoles);
    }

    public static FromMicropoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.MicropoundMoles);
    }

    public static FromCentipoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.CentipoundMoles);
    }

    public static FromDecipoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.DecipoundMoles);
    }

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
