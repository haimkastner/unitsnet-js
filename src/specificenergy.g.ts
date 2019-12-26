export enum SpecificEnergyUnits {
    JoulesPerKilogram,
    CaloriesPerGram,
    WattHoursPerKilogram,
    BtuPerPound,
    Kilojoulesperkilogram,
    Megajoulesperkilogram,
    Kilocaloriespergram,
    Kilowatthoursperkilogram,
    Megawatthoursperkilogram
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

    public get Kilojoulesperkilogram(): number {
        if(this.kilojoulesperkilogramLazy !== null){
            return this.kilojoulesperkilogramLazy;
        }
        return this.kilojoulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.Kilojoulesperkilogram);
    }

    public get Megajoulesperkilogram(): number {
        if(this.megajoulesperkilogramLazy !== null){
            return this.megajoulesperkilogramLazy;
        }
        return this.megajoulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.Megajoulesperkilogram);
    }

    public get Kilocaloriespergram(): number {
        if(this.kilocaloriespergramLazy !== null){
            return this.kilocaloriespergramLazy;
        }
        return this.kilocaloriespergramLazy = this.convertFromBase(SpecificEnergyUnits.Kilocaloriespergram);
    }

    public get Kilowatthoursperkilogram(): number {
        if(this.kilowatthoursperkilogramLazy !== null){
            return this.kilowatthoursperkilogramLazy;
        }
        return this.kilowatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.Kilowatthoursperkilogram);
    }

    public get Megawatthoursperkilogram(): number {
        if(this.megawatthoursperkilogramLazy !== null){
            return this.megawatthoursperkilogramLazy;
        }
        return this.megawatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.Megawatthoursperkilogram);
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

    public static FromKilojoulesperkilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.Kilojoulesperkilogram);
    }

    public static FromMegajoulesperkilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.Megajoulesperkilogram);
    }

    public static FromKilocaloriespergram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.Kilocaloriespergram);
    }

    public static FromKilowatthoursperkilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.Kilowatthoursperkilogram);
    }

    public static FromMegawatthoursperkilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.Megawatthoursperkilogram);
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
            case SpecificEnergyUnits.Kilojoulesperkilogram:
                return (this.value) / 1000;
            case SpecificEnergyUnits.Megajoulesperkilogram:
                return (this.value) / 1000000;
            case SpecificEnergyUnits.Kilocaloriespergram:
                return (this.value/4.184e3) / 1000;
            case SpecificEnergyUnits.Kilowatthoursperkilogram:
                return (this.value/3.6e3) / 1000;
            case SpecificEnergyUnits.Megawatthoursperkilogram:
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
            case SpecificEnergyUnits.Kilojoulesperkilogram:
                return (value) * 1000;
            case SpecificEnergyUnits.Megajoulesperkilogram:
                return (value) * 1000000;
            case SpecificEnergyUnits.Kilocaloriespergram:
                return (value*4.184e3) * 1000;
            case SpecificEnergyUnits.Kilowatthoursperkilogram:
                return (value*3.6e3) * 1000;
            case SpecificEnergyUnits.Megawatthoursperkilogram:
                return (value*3.6e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
