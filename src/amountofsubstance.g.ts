export enum AmountOfSubstanceUnits {
    Moles,
    PoundMoles,
    Nanomoles,
    Micromoles,
    Centimoles,
    Decimoles,
    Kilomoles,
    Megamoles,
    Nanopoundmoles,
    Micropoundmoles,
    Centipoundmoles,
    Decipoundmoles,
    Kilopoundmoles
}

export class AmountOfSubstance {
    private value: number;

    public constructor(value: number, fromUnit: AmountOfSubstanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Moles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.Moles);
    }

    public get PoundMoles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.PoundMoles);
    }

    public get Nanomoles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.Nanomoles);
    }

    public get Micromoles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.Micromoles);
    }

    public get Centimoles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.Centimoles);
    }

    public get Decimoles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.Decimoles);
    }

    public get Kilomoles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.Kilomoles);
    }

    public get Megamoles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.Megamoles);
    }

    public get Nanopoundmoles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.Nanopoundmoles);
    }

    public get Micropoundmoles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.Micropoundmoles);
    }

    public get Centipoundmoles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.Centipoundmoles);
    }

    public get Decipoundmoles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.Decipoundmoles);
    }

    public get Kilopoundmoles(): number {
        return this.convertFromBase(AmountOfSubstanceUnits.Kilopoundmoles);
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

    public static FromNanopoundmoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Nanopoundmoles);
    }

    public static FromMicropoundmoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Micropoundmoles);
    }

    public static FromCentipoundmoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Centipoundmoles);
    }

    public static FromDecipoundmoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Decipoundmoles);
    }

    public static FromKilopoundmoles(value: number): AmountOfSubstance {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Kilopoundmoles);
    }

    private convertFromBase(toUnit: AmountOfSubstanceUnits): number {

                switch (toUnit) {
                    
                case AmountOfSubstanceUnits.Moles:
                    return this.value;
                
                case AmountOfSubstanceUnits.PoundMoles:
                    return this.value/453.59237;
                
                case AmountOfSubstanceUnits.Nanomoles:
                    return (this.value) * 1e-9;
                
                case AmountOfSubstanceUnits.Micromoles:
                    return (this.value) * 0.000001;
                
                case AmountOfSubstanceUnits.Centimoles:
                    return (this.value) * 0.01;
                
                case AmountOfSubstanceUnits.Decimoles:
                    return (this.value) * 0.1;
                
                case AmountOfSubstanceUnits.Kilomoles:
                    return (this.value) * 1000;
                
                case AmountOfSubstanceUnits.Megamoles:
                    return (this.value) * 1000000;
                
                case AmountOfSubstanceUnits.Nanopoundmoles:
                    return (this.value*453.59237) * 1e-9;
                
                case AmountOfSubstanceUnits.Micropoundmoles:
                    return (this.value*453.59237) * 0.000001;
                
                case AmountOfSubstanceUnits.Centipoundmoles:
                    return (this.value*453.59237) * 0.01;
                
                case AmountOfSubstanceUnits.Decipoundmoles:
                    return (this.value*453.59237) * 0.1;
                
                case AmountOfSubstanceUnits.Kilopoundmoles:
                    return (this.value*453.59237) * 1000;
                
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
                    return (value) / 1e-9;
                
                case AmountOfSubstanceUnits.Micromoles:
                    return (value) / 0.000001;
                
                case AmountOfSubstanceUnits.Centimoles:
                    return (value) / 0.01;
                
                case AmountOfSubstanceUnits.Decimoles:
                    return (value) / 0.1;
                
                case AmountOfSubstanceUnits.Kilomoles:
                    return (value) / 1000;
                
                case AmountOfSubstanceUnits.Megamoles:
                    return (value) / 1000000;
                
                case AmountOfSubstanceUnits.Nanopoundmoles:
                    return (value/453.59237) / 1e-9;
                
                case AmountOfSubstanceUnits.Micropoundmoles:
                    return (value/453.59237) / 0.000001;
                
                case AmountOfSubstanceUnits.Centipoundmoles:
                    return (value/453.59237) / 0.01;
                
                case AmountOfSubstanceUnits.Decipoundmoles:
                    return (value/453.59237) / 0.1;
                
                case AmountOfSubstanceUnits.Kilopoundmoles:
                    return (value/453.59237) / 1000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
