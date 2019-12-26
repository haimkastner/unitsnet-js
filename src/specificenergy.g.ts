export enum SpecificEnergyUnits {
    JoulesPerKilogram,
    CaloriesPerGram,
    WattHoursPerKilogram,
    BtuPerPound,
    KilojoulePerKilogram,
    MegajoulePerKilogram,
    KilocaloriePerGram,
    KilowattHourPerKilogram,
    MegawattHourPerKilogram
}

export class SpecificEnergy {
    private value: number;
    private joulesperkilogramLazy: number | null = null;
    private caloriespergramLazy: number | null = null;
    private watthoursperkilogramLazy: number | null = null;
    private btuperpoundLazy: number | null = null;
    private kilojouleperkilogramLazy: number | null = null;
    private megajouleperkilogramLazy: number | null = null;
    private kilocaloriepergramLazy: number | null = null;
    private kilowatthourperkilogramLazy: number | null = null;
    private megawatthourperkilogramLazy: number | null = null;

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

    public get KilojoulePerKilogram(): number {
        if(this.kilojouleperkilogramLazy !== null){
            return this.kilojouleperkilogramLazy;
        }
        return this.kilojouleperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilojoulePerKilogram);
    }

    public get MegajoulePerKilogram(): number {
        if(this.megajouleperkilogramLazy !== null){
            return this.megajouleperkilogramLazy;
        }
        return this.megajouleperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegajoulePerKilogram);
    }

    public get KilocaloriePerGram(): number {
        if(this.kilocaloriepergramLazy !== null){
            return this.kilocaloriepergramLazy;
        }
        return this.kilocaloriepergramLazy = this.convertFromBase(SpecificEnergyUnits.KilocaloriePerGram);
    }

    public get KilowattHourPerKilogram(): number {
        if(this.kilowatthourperkilogramLazy !== null){
            return this.kilowatthourperkilogramLazy;
        }
        return this.kilowatthourperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilowattHourPerKilogram);
    }

    public get MegawattHourPerKilogram(): number {
        if(this.megawatthourperkilogramLazy !== null){
            return this.megawatthourperkilogramLazy;
        }
        return this.megawatthourperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegawattHourPerKilogram);
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

    public static FromKilojoulePerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilojoulePerKilogram);
    }

    public static FromMegajoulePerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegajoulePerKilogram);
    }

    public static FromKilocaloriePerGram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilocaloriePerGram);
    }

    public static FromKilowattHourPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilowattHourPerKilogram);
    }

    public static FromMegawattHourPerKilogram(value: number): SpecificEnergy {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegawattHourPerKilogram);
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
            case SpecificEnergyUnits.KilojoulePerKilogram:
                return (this.value) / 1000;
            case SpecificEnergyUnits.MegajoulePerKilogram:
                return (this.value) / 1000000;
            case SpecificEnergyUnits.KilocaloriePerGram:
                return (this.value/4.184e3) / 1000;
            case SpecificEnergyUnits.KilowattHourPerKilogram:
                return (this.value/3.6e3) / 1000;
            case SpecificEnergyUnits.MegawattHourPerKilogram:
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
            case SpecificEnergyUnits.KilojoulePerKilogram:
                return (value) * 1000;
            case SpecificEnergyUnits.MegajoulePerKilogram:
                return (value) * 1000000;
            case SpecificEnergyUnits.KilocaloriePerGram:
                return (value*4.184e3) * 1000;
            case SpecificEnergyUnits.KilowattHourPerKilogram:
                return (value*3.6e3) * 1000;
            case SpecificEnergyUnits.MegawattHourPerKilogram:
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
            case SpecificEnergyUnits.KilojoulePerKilogram:
                return this.KilojoulePerKilogram + ` J/kg`;
            case SpecificEnergyUnits.MegajoulePerKilogram:
                return this.MegajoulePerKilogram + ` J/kg`;
            case SpecificEnergyUnits.KilocaloriePerGram:
                return this.KilocaloriePerGram + ` cal/g`;
            case SpecificEnergyUnits.KilowattHourPerKilogram:
                return this.KilowattHourPerKilogram + ` Wh/kg`;
            case SpecificEnergyUnits.MegawattHourPerKilogram:
                return this.MegawattHourPerKilogram + ` Wh/kg`;
        default:
            break;
        }
        return this.value.toString();
    }
}
