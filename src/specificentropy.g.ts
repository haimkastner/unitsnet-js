export enum SpecificEntropyUnits {
    JoulesPerKilogramKelvin,
    JoulesPerKilogramDegreeCelsius,
    CaloriesPerGramKelvin,
    BtusPerPoundFahrenheit,
    Kilojoulesperkilogramkelvin,
    Megajoulesperkilogramkelvin,
    Kilojoulesperkilogramdegreecelsius,
    Megajoulesperkilogramdegreecelsius,
    Kilocaloriespergramkelvin
}

export class SpecificEntropy {
    private value: number;

    public constructor(value: number, fromUnit: SpecificEntropyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerKilogramKelvin(): number {
        return this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramKelvin);
    }

    public get JoulesPerKilogramDegreeCelsius(): number {
        return this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius);
    }

    public get CaloriesPerGramKelvin(): number {
        return this.convertFromBase(SpecificEntropyUnits.CaloriesPerGramKelvin);
    }

    public get BtusPerPoundFahrenheit(): number {
        return this.convertFromBase(SpecificEntropyUnits.BtusPerPoundFahrenheit);
    }

    public get Kilojoulesperkilogramkelvin(): number {
        return this.convertFromBase(SpecificEntropyUnits.Kilojoulesperkilogramkelvin);
    }

    public get Megajoulesperkilogramkelvin(): number {
        return this.convertFromBase(SpecificEntropyUnits.Megajoulesperkilogramkelvin);
    }

    public get Kilojoulesperkilogramdegreecelsius(): number {
        return this.convertFromBase(SpecificEntropyUnits.Kilojoulesperkilogramdegreecelsius);
    }

    public get Megajoulesperkilogramdegreecelsius(): number {
        return this.convertFromBase(SpecificEntropyUnits.Megajoulesperkilogramdegreecelsius);
    }

    public get Kilocaloriespergramkelvin(): number {
        return this.convertFromBase(SpecificEntropyUnits.Kilocaloriespergramkelvin);
    }

    public static FromJoulesPerKilogramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.JoulesPerKilogramKelvin);
    }

    public static FromJoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius);
    }

    public static FromCaloriesPerGramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.CaloriesPerGramKelvin);
    }

    public static FromBtusPerPoundFahrenheit(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.BtusPerPoundFahrenheit);
    }

    public static FromKilojoulesperkilogramkelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.Kilojoulesperkilogramkelvin);
    }

    public static FromMegajoulesperkilogramkelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.Megajoulesperkilogramkelvin);
    }

    public static FromKilojoulesperkilogramdegreecelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.Kilojoulesperkilogramdegreecelsius);
    }

    public static FromMegajoulesperkilogramdegreecelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.Megajoulesperkilogramdegreecelsius);
    }

    public static FromKilocaloriespergramkelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.Kilocaloriespergramkelvin);
    }

    private convertFromBase(toUnit: SpecificEntropyUnits): number {

            switch (toUnit) {
                
                case SpecificEntropyUnits.JoulesPerKilogramKelvin:
                    return this.value;
                
                case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:
                    return this.value;
                
                case SpecificEntropyUnits.CaloriesPerGramKelvin:
                    return this.value/4.184e3;
                
                case SpecificEntropyUnits.BtusPerPoundFahrenheit:
                    return this.value / 4.1868e3;
                
                case SpecificEntropyUnits.Kilojoulesperkilogramkelvin:
                    return (this.value) * 1000;
                
                case SpecificEntropyUnits.Megajoulesperkilogramkelvin:
                    return (this.value) * 1000000;
                
                case SpecificEntropyUnits.Kilojoulesperkilogramdegreecelsius:
                    return (this.value) * 1000;
                
                case SpecificEntropyUnits.Megajoulesperkilogramdegreecelsius:
                    return (this.value) * 1000000;
                
                case SpecificEntropyUnits.Kilocaloriespergramkelvin:
                    return (this.value*4.184e3) * 1000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: SpecificEntropyUnits): number {

                switch (fromUnit) {
                    
                case SpecificEntropyUnits.JoulesPerKilogramKelvin:
                    return value;
                
                case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:
                    return value;
                
                case SpecificEntropyUnits.CaloriesPerGramKelvin:
                    return value*4.184e3;
                
                case SpecificEntropyUnits.BtusPerPoundFahrenheit:
                    return value * 4.1868e3;
                
                case SpecificEntropyUnits.Kilojoulesperkilogramkelvin:
                    return (value) / 1000;
                
                case SpecificEntropyUnits.Megajoulesperkilogramkelvin:
                    return (value) / 1000000;
                
                case SpecificEntropyUnits.Kilojoulesperkilogramdegreecelsius:
                    return (value) / 1000;
                
                case SpecificEntropyUnits.Megajoulesperkilogramdegreecelsius:
                    return (value) / 1000000;
                
                case SpecificEntropyUnits.Kilocaloriespergramkelvin:
                    return (value/4.184e3) / 1000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
