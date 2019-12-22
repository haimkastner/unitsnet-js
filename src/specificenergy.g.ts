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

    public constructor(value: number, fromUnit: SpecificEnergyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerKilogram(): number {
        return this.convertFromBase(SpecificEnergyUnits.JoulesPerKilogram);
    }

    public get CaloriesPerGram(): number {
        return this.convertFromBase(SpecificEnergyUnits.CaloriesPerGram);
    }

    public get WattHoursPerKilogram(): number {
        return this.convertFromBase(SpecificEnergyUnits.WattHoursPerKilogram);
    }

    public get BtuPerPound(): number {
        return this.convertFromBase(SpecificEnergyUnits.BtuPerPound);
    }

    public get Kilojoulesperkilogram(): number {
        return this.convertFromBase(SpecificEnergyUnits.Kilojoulesperkilogram);
    }

    public get Megajoulesperkilogram(): number {
        return this.convertFromBase(SpecificEnergyUnits.Megajoulesperkilogram);
    }

    public get Kilocaloriespergram(): number {
        return this.convertFromBase(SpecificEnergyUnits.Kilocaloriespergram);
    }

    public get Kilowatthoursperkilogram(): number {
        return this.convertFromBase(SpecificEnergyUnits.Kilowatthoursperkilogram);
    }

    public get Megawatthoursperkilogram(): number {
        return this.convertFromBase(SpecificEnergyUnits.Megawatthoursperkilogram);
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
                    return this.value*4.184e3;
                
                case SpecificEnergyUnits.WattHoursPerKilogram:
                    return this.value*3.6e3;
                
                case SpecificEnergyUnits.BtuPerPound:
                    return this.value*2326.000075362;
                
                case SpecificEnergyUnits.Kilojoulesperkilogram:
                    return (this.value) * 1000;
                
                case SpecificEnergyUnits.Megajoulesperkilogram:
                    return (this.value) * 1000000;
                
                case SpecificEnergyUnits.Kilocaloriespergram:
                    return (this.value/4.184e3) * 1000;
                
                case SpecificEnergyUnits.Kilowatthoursperkilogram:
                    return (this.value/3.6e3) * 1000;
                
                case SpecificEnergyUnits.Megawatthoursperkilogram:
                    return (this.value/3.6e3) * 1000000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: SpecificEnergyUnits): number {

                switch (fromUnit) {
                    
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
                    return (this.value*4.184e3) / 1000;
                
                case SpecificEnergyUnits.Kilowatthoursperkilogram:
                    return (this.value*3.6e3) / 1000;
                
                case SpecificEnergyUnits.Megawatthoursperkilogram:
                    return (this.value*3.6e3) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
