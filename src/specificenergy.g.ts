export enum SpecificEnergyUnits {
    JoulesPerKilogram,
    CaloriesPerGram,
    WattHoursPerKilogram,
    BtuPerPound,
    KilojoulesPerKilogram,
    MegajoulesPerKilogram,
    KilocaloriesPerGram,
    KilowattHoursPerKilogram,
    MegawattHoursPerKilogram
}

export class SpecificEnergy {
    private value: number;
    private joulesperkilogramLazy: number | null = null;
    private caloriespergramLazy: number | null = null;
    private watthoursperkilogramLazy: number | null = null;
    private btuperpoundLazy: number | null = null;
    private kilojoulesperkilogramLazy: number | null = null;
    private megajoulesperkilogramLazy: number | null = null;
    private kilocaloriespergramLazy: number | null = null;
    private kilowatthoursperkilogramLazy: number | null = null;
    private megawatthoursperkilogramLazy: number | null = null;

    public constructor(value: number, fromUnit: SpecificEnergyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerKilogram(): number {
        if(this.joulesperkilogramLazy !== null){
            return this.joulesperkilogramLazy;
        }
        return this.joulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.JoulesPerKilogram);
    }

    public get CaloriesPerGram(): number {
        if(this.caloriespergramLazy !== null){
            return this.caloriespergramLazy;
        }
        return this.caloriespergramLazy = this.convertFromBase(SpecificEnergyUnits.CaloriesPerGram);
    }

    public get WattHoursPerKilogram(): number {
        if(this.watthoursperkilogramLazy !== null){
            return this.watthoursperkilogramLazy;
        }
        return this.watthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.WattHoursPerKilogram);
    }

    public get BtuPerPound(): number {
        if(this.btuperpoundLazy !== null){
            return this.btuperpoundLazy;
        }
        return this.btuperpoundLazy = this.convertFromBase(SpecificEnergyUnits.BtuPerPound);
    }

    public get KilojoulesPerKilogram(): number {
        if(this.kilojoulesperkilogramLazy !== null){
            return this.kilojoulesperkilogramLazy;
        }
        return this.kilojoulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilojoulesPerKilogram);
    }

    public get MegajoulesPerKilogram(): number {
        if(this.megajoulesperkilogramLazy !== null){
            return this.megajoulesperkilogramLazy;
        }
        return this.megajoulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegajoulesPerKilogram);
    }

    public get KilocaloriesPerGram(): number {
        if(this.kilocaloriespergramLazy !== null){
            return this.kilocaloriespergramLazy;
        }
        return this.kilocaloriespergramLazy = this.convertFromBase(SpecificEnergyUnits.KilocaloriesPerGram);
    }

    public get KilowattHoursPerKilogram(): number {
        if(this.kilowatthoursperkilogramLazy !== null){
            return this.kilowatthoursperkilogramLazy;
        }
        return this.kilowatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilowattHoursPerKilogram);
    }

    public get MegawattHoursPerKilogram(): number {
        if(this.megawatthoursperkilogramLazy !== null){
            return this.megawatthoursperkilogramLazy;
        }
        return this.megawatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegawattHoursPerKilogram);
    }

    public static FromJoulesPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.JoulesPerKilogram);
    }

    public static FromCaloriesPerGram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.CaloriesPerGram);
    }

    public static FromWattHoursPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.WattHoursPerKilogram);
    }

    public static FromBtuPerPound(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.BtuPerPound);
    }

    public static FromKilojoulesPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilojoulesPerKilogram);
    }

    public static FromMegajoulesPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegajoulesPerKilogram);
    }

    public static FromKilocaloriesPerGram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilocaloriesPerGram);
    }

    public static FromKilowattHoursPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilowattHoursPerKilogram);
    }

    public static FromMegawattHoursPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegawattHoursPerKilogram);
    }

    private convertFromBase(toUnit: SpecificEnergyUnits): number {
        switch (toUnit) {
                
            case SpecificEnergyUnits.JoulesPerKilogram:
                return this.value;
            case SpecificEnergyUnits.CaloriesPerGram:
                return this.value/4.184e3;
            case SpecificEnergyUnits.WattHoursPerKilogram:
                return this.value/3.6e3;
            case SpecificEnergyUnits.BtuPerPound:
                return this.value/2326.000075362;
            case SpecificEnergyUnits.KilojoulesPerKilogram:
                return (this.value) / 1000;
            case SpecificEnergyUnits.MegajoulesPerKilogram:
                return (this.value) / 1000000;
            case SpecificEnergyUnits.KilocaloriesPerGram:
                return (this.value/4.184e3) / 1000;
            case SpecificEnergyUnits.KilowattHoursPerKilogram:
                return (this.value/3.6e3) / 1000;
            case SpecificEnergyUnits.MegawattHoursPerKilogram:
                return (this.value/3.6e3) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: SpecificEnergyUnits): number {
        switch (fromUnit) {
                
            case SpecificEnergyUnits.JoulesPerKilogram:
                return value;
            case SpecificEnergyUnits.CaloriesPerGram:
                return value*4.184e3;
            case SpecificEnergyUnits.WattHoursPerKilogram:
                return value*3.6e3;
            case SpecificEnergyUnits.BtuPerPound:
                return value*2326.000075362;
            case SpecificEnergyUnits.KilojoulesPerKilogram:
                return (value) * 1000;
            case SpecificEnergyUnits.MegajoulesPerKilogram:
                return (value) * 1000000;
            case SpecificEnergyUnits.KilocaloriesPerGram:
                return (value*4.184e3) * 1000;
            case SpecificEnergyUnits.KilowattHoursPerKilogram:
                return (value*3.6e3) * 1000;
            case SpecificEnergyUnits.MegawattHoursPerKilogram:
                return (value*3.6e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: SpecificEnergyUnits = SpecificEnergyUnits.JoulesPerKilogram): string {

        switch (toUnit) {
            
            case SpecificEnergyUnits.JoulesPerKilogram:
                return this.JoulesPerKilogram + ` J/kg`;
            case SpecificEnergyUnits.CaloriesPerGram:
                return this.CaloriesPerGram + ` cal/g`;
            case SpecificEnergyUnits.WattHoursPerKilogram:
                return this.WattHoursPerKilogram + ` Wh/kg`;
            case SpecificEnergyUnits.BtuPerPound:
                return this.BtuPerPound + ` btu/lb`;
            case SpecificEnergyUnits.KilojoulesPerKilogram:
                return this.KilojoulesPerKilogram + ` J/kg`;
            case SpecificEnergyUnits.MegajoulesPerKilogram:
                return this.MegajoulesPerKilogram + ` J/kg`;
            case SpecificEnergyUnits.KilocaloriesPerGram:
                return this.KilocaloriesPerGram + ` cal/g`;
            case SpecificEnergyUnits.KilowattHoursPerKilogram:
                return this.KilowattHoursPerKilogram + ` Wh/kg`;
            case SpecificEnergyUnits.MegawattHoursPerKilogram:
                return this.MegawattHoursPerKilogram + ` Wh/kg`;
        default:
            break;
        }
        return this.value.toString();
    }
}
