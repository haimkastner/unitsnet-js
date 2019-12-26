export enum ElectricResistanceUnits {
    Ohms,
    Kiloohm,
    Megaohm,
    Gigaohm
}

export class ElectricResistance {
    private value: number;
    private ohmsLazy: number | null = null;
    private kiloohmLazy: number | null = null;
    private megaohmLazy: number | null = null;
    private gigaohmLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricResistanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Ohms(): number {
        if(this.ohmsLazy !== null){
            return this.ohmsLazy;
        }
        return this.ohmsLazy = this.convertFromBase(ElectricResistanceUnits.Ohms);
    }

    public get Kiloohm(): number {
        if(this.kiloohmLazy !== null){
            return this.kiloohmLazy;
        }
        return this.kiloohmLazy = this.convertFromBase(ElectricResistanceUnits.Kiloohm);
    }

    public get Megaohm(): number {
        if(this.megaohmLazy !== null){
            return this.megaohmLazy;
        }
        return this.megaohmLazy = this.convertFromBase(ElectricResistanceUnits.Megaohm);
    }

    public get Gigaohm(): number {
        if(this.gigaohmLazy !== null){
            return this.gigaohmLazy;
        }
        return this.gigaohmLazy = this.convertFromBase(ElectricResistanceUnits.Gigaohm);
    }

    public static FromOhms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Ohms);
    }

    public static FromKiloohm(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Kiloohm);
    }

    public static FromMegaohm(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Megaohm);
    }

    public static FromGigaohm(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Gigaohm);
    }

    private convertFromBase(toUnit: ElectricResistanceUnits): number {
        switch (toUnit) {
                
            case ElectricResistanceUnits.Ohms:
                return this.value;
            case ElectricResistanceUnits.Kiloohm:
                return (this.value) / 1000;
            case ElectricResistanceUnits.Megaohm:
                return (this.value) / 1000000;
            case ElectricResistanceUnits.Gigaohm:
                return (this.value) / 1000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricResistanceUnits): number {
        switch (fromUnit) {
                
            case ElectricResistanceUnits.Ohms:
                return value;
            case ElectricResistanceUnits.Kiloohm:
                return (value) * 1000;
            case ElectricResistanceUnits.Megaohm:
                return (value) * 1000000;
            case ElectricResistanceUnits.Gigaohm:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricResistanceUnits = ElectricResistanceUnits.Ohms): string {

        switch (toUnit) {
            
            case ElectricResistanceUnits.Ohms:
                return this.Ohms + ` Ω`;
            case ElectricResistanceUnits.Kiloohm:
                return this.Kiloohm + ` Ω`;
            case ElectricResistanceUnits.Megaohm:
                return this.Megaohm + ` Ω`;
            case ElectricResistanceUnits.Gigaohm:
                return this.Gigaohm + ` Ω`;
        default:
            break;
        }
        return this.value.toString();
    }
}
