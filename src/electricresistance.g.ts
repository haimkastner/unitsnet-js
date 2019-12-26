export enum ElectricResistanceUnits {
    Ohms,
    Kiloohms,
    Megaohms,
    Gigaohms
}

export class ElectricResistance {
    private value: number;
    private ohmsLazy: number | null = null;
    private kiloohmsLazy: number | null = null;
    private megaohmsLazy: number | null = null;
    private gigaohmsLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricResistanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Ohms(): number {
        if(this.ohmsLazy !== null){
            return this.ohmsLazy;
        }
        return this.ohmsLazy = this.convertFromBase(ElectricResistanceUnits.Ohms);
    }

    public get Kiloohms(): number {
        if(this.kiloohmsLazy !== null){
            return this.kiloohmsLazy;
        }
        return this.kiloohmsLazy = this.convertFromBase(ElectricResistanceUnits.Kiloohms);
    }

    public get Megaohms(): number {
        if(this.megaohmsLazy !== null){
            return this.megaohmsLazy;
        }
        return this.megaohmsLazy = this.convertFromBase(ElectricResistanceUnits.Megaohms);
    }

    public get Gigaohms(): number {
        if(this.gigaohmsLazy !== null){
            return this.gigaohmsLazy;
        }
        return this.gigaohmsLazy = this.convertFromBase(ElectricResistanceUnits.Gigaohms);
    }

    public static FromOhms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Ohms);
    }

    public static FromKiloohms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Kiloohms);
    }

    public static FromMegaohms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Megaohms);
    }

    public static FromGigaohms(value: number): ElectricResistance {
        return new ElectricResistance(value, ElectricResistanceUnits.Gigaohms);
    }

    private convertFromBase(toUnit: ElectricResistanceUnits): number {
        switch (toUnit) {
                
            case ElectricResistanceUnits.Ohms:
                return this.value;
            case ElectricResistanceUnits.Kiloohms:
                return (this.value) / 1000;
            case ElectricResistanceUnits.Megaohms:
                return (this.value) / 1000000;
            case ElectricResistanceUnits.Gigaohms:
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
            case ElectricResistanceUnits.Kiloohms:
                return (value) * 1000;
            case ElectricResistanceUnits.Megaohms:
                return (value) * 1000000;
            case ElectricResistanceUnits.Gigaohms:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }
}
