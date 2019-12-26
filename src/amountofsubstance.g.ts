export enum AmountOfSubstanceUnits {
    Moles,
    PoundMoles,
    Nanomole,
    Micromole,
    Centimole,
    Decimole,
    Kilomole,
    Megamole,
    NanopoundMole,
    MicropoundMole,
    CentipoundMole,
    DecipoundMole,
    KilopoundMole
}

export class AmountOfSubstance {
    private value: number;
    private molesLazy: number | null = null;
    private poundmolesLazy: number | null = null;
    private nanomoleLazy: number | null = null;
    private micromoleLazy: number | null = null;
    private centimoleLazy: number | null = null;
    private decimoleLazy: number | null = null;
    private kilomoleLazy: number | null = null;
    private megamoleLazy: number | null = null;
    private nanopoundmoleLazy: number | null = null;
    private micropoundmoleLazy: number | null = null;
    private centipoundmoleLazy: number | null = null;
    private decipoundmoleLazy: number | null = null;
    private kilopoundmoleLazy: number | null = null;

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

    public get Nanomole(): number {
        if(this.nanomoleLazy !== null){
            return this.nanomoleLazy;
        }
        return this.nanomoleLazy = this.convertFromBase(AmountOfSubstanceUnits.Nanomole);
    }

    public get Micromole(): number {
        if(this.micromoleLazy !== null){
            return this.micromoleLazy;
        }
        return this.micromoleLazy = this.convertFromBase(AmountOfSubstanceUnits.Micromole);
    }

    public get Centimole(): number {
        if(this.centimoleLazy !== null){
            return this.centimoleLazy;
        }
        return this.centimoleLazy = this.convertFromBase(AmountOfSubstanceUnits.Centimole);
    }

    public get Decimole(): number {
        if(this.decimoleLazy !== null){
            return this.decimoleLazy;
        }
        return this.decimoleLazy = this.convertFromBase(AmountOfSubstanceUnits.Decimole);
    }

    public get Kilomole(): number {
        if(this.kilomoleLazy !== null){
            return this.kilomoleLazy;
        }
        return this.kilomoleLazy = this.convertFromBase(AmountOfSubstanceUnits.Kilomole);
    }

    public get Megamole(): number {
        if(this.megamoleLazy !== null){
            return this.megamoleLazy;
        }
        return this.megamoleLazy = this.convertFromBase(AmountOfSubstanceUnits.Megamole);
    }

    public get NanopoundMole(): number {
        if(this.nanopoundmoleLazy !== null){
            return this.nanopoundmoleLazy;
        }
        return this.nanopoundmoleLazy = this.convertFromBase(AmountOfSubstanceUnits.NanopoundMole);
    }

    public get MicropoundMole(): number {
        if(this.micropoundmoleLazy !== null){
            return this.micropoundmoleLazy;
        }
        return this.micropoundmoleLazy = this.convertFromBase(AmountOfSubstanceUnits.MicropoundMole);
    }

    public get CentipoundMole(): number {
        if(this.centipoundmoleLazy !== null){
            return this.centipoundmoleLazy;
        }
        return this.centipoundmoleLazy = this.convertFromBase(AmountOfSubstanceUnits.CentipoundMole);
    }

    public get DecipoundMole(): number {
        if(this.decipoundmoleLazy !== null){
            return this.decipoundmoleLazy;
        }
        return this.decipoundmoleLazy = this.convertFromBase(AmountOfSubstanceUnits.DecipoundMole);
    }

    public get KilopoundMole(): number {
        if(this.kilopoundmoleLazy !== null){
            return this.kilopoundmoleLazy;
        }
        return this.kilopoundmoleLazy = this.convertFromBase(AmountOfSubstanceUnits.KilopoundMole);
    }

    public static FromMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Moles);
    }

    public static FromPoundMoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.PoundMoles);
    }

    public static FromNanomole(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Nanomole);
    }

    public static FromMicromole(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Micromole);
    }

    public static FromCentimole(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Centimole);
    }

    public static FromDecimole(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Decimole);
    }

    public static FromKilomole(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Kilomole);
    }

    public static FromMegamole(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Megamole);
    }

    public static FromNanopoundMole(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.NanopoundMole);
    }

    public static FromMicropoundMole(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.MicropoundMole);
    }

    public static FromCentipoundMole(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.CentipoundMole);
    }

    public static FromDecipoundMole(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.DecipoundMole);
    }

    public static FromKilopoundMole(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.KilopoundMole);
    }

    private convertFromBase(toUnit: AmountOfSubstanceUnits): number {
        switch (toUnit) {
                
            case AmountOfSubstanceUnits.Moles:
                return this.value;
            case AmountOfSubstanceUnits.PoundMoles:
                return this.value/453.59237;
            case AmountOfSubstanceUnits.Nanomole:
                return (this.value) / 1e-9;
            case AmountOfSubstanceUnits.Micromole:
                return (this.value) / 0.000001;
            case AmountOfSubstanceUnits.Centimole:
                return (this.value) / 0.01;
            case AmountOfSubstanceUnits.Decimole:
                return (this.value) / 0.1;
            case AmountOfSubstanceUnits.Kilomole:
                return (this.value) / 1000;
            case AmountOfSubstanceUnits.Megamole:
                return (this.value) / 1000000;
            case AmountOfSubstanceUnits.NanopoundMole:
                return (this.value/453.59237) / 1e-9;
            case AmountOfSubstanceUnits.MicropoundMole:
                return (this.value/453.59237) / 0.000001;
            case AmountOfSubstanceUnits.CentipoundMole:
                return (this.value/453.59237) / 0.01;
            case AmountOfSubstanceUnits.DecipoundMole:
                return (this.value/453.59237) / 0.1;
            case AmountOfSubstanceUnits.KilopoundMole:
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
            case AmountOfSubstanceUnits.Nanomole:
                return (value) * 1e-9;
            case AmountOfSubstanceUnits.Micromole:
                return (value) * 0.000001;
            case AmountOfSubstanceUnits.Centimole:
                return (value) * 0.01;
            case AmountOfSubstanceUnits.Decimole:
                return (value) * 0.1;
            case AmountOfSubstanceUnits.Kilomole:
                return (value) * 1000;
            case AmountOfSubstanceUnits.Megamole:
                return (value) * 1000000;
            case AmountOfSubstanceUnits.NanopoundMole:
                return (value*453.59237) * 1e-9;
            case AmountOfSubstanceUnits.MicropoundMole:
                return (value*453.59237) * 0.000001;
            case AmountOfSubstanceUnits.CentipoundMole:
                return (value*453.59237) * 0.01;
            case AmountOfSubstanceUnits.DecipoundMole:
                return (value*453.59237) * 0.1;
            case AmountOfSubstanceUnits.KilopoundMole:
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
            case AmountOfSubstanceUnits.Nanomole:
                return this.Nanomole + ` mol`;
            case AmountOfSubstanceUnits.Micromole:
                return this.Micromole + ` mol`;
            case AmountOfSubstanceUnits.Centimole:
                return this.Centimole + ` mol`;
            case AmountOfSubstanceUnits.Decimole:
                return this.Decimole + ` mol`;
            case AmountOfSubstanceUnits.Kilomole:
                return this.Kilomole + ` mol`;
            case AmountOfSubstanceUnits.Megamole:
                return this.Megamole + ` mol`;
            case AmountOfSubstanceUnits.NanopoundMole:
                return this.NanopoundMole + ` lbmol`;
            case AmountOfSubstanceUnits.MicropoundMole:
                return this.MicropoundMole + ` lbmol`;
            case AmountOfSubstanceUnits.CentipoundMole:
                return this.CentipoundMole + ` lbmol`;
            case AmountOfSubstanceUnits.DecipoundMole:
                return this.DecipoundMole + ` lbmol`;
            case AmountOfSubstanceUnits.KilopoundMole:
                return this.KilopoundMole + ` lbmol`;
        default:
            break;
        }
        return this.value.toString();
    }
}
