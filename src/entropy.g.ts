export enum EntropyUnits {
    JoulesPerKelvin,
    CaloriesPerKelvin,
    JoulesPerDegreeCelsius,
    Kilojoulesperkelvin,
    Megajoulesperkelvin,
    Kilocaloriesperkelvin,
    Kilojoulesperdegreecelsius
}

export class Entropy {
    private value: number;

    public constructor(value: number, fromUnit: EntropyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerKelvin(): number {
        return this.convertFromBase(EntropyUnits.JoulesPerKelvin);
    }

    public get CaloriesPerKelvin(): number {
        return this.convertFromBase(EntropyUnits.CaloriesPerKelvin);
    }

    public get JoulesPerDegreeCelsius(): number {
        return this.convertFromBase(EntropyUnits.JoulesPerDegreeCelsius);
    }

    public get Kilojoulesperkelvin(): number {
        return this.convertFromBase(EntropyUnits.Kilojoulesperkelvin);
    }

    public get Megajoulesperkelvin(): number {
        return this.convertFromBase(EntropyUnits.Megajoulesperkelvin);
    }

    public get Kilocaloriesperkelvin(): number {
        return this.convertFromBase(EntropyUnits.Kilocaloriesperkelvin);
    }

    public get Kilojoulesperdegreecelsius(): number {
        return this.convertFromBase(EntropyUnits.Kilojoulesperdegreecelsius);
    }

    public static FromJoulesPerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.JoulesPerKelvin);
    }

    public static FromCaloriesPerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.CaloriesPerKelvin);
    }

    public static FromJoulesPerDegreeCelsius(value: number): Entropy {
        return new Entropy(value, EntropyUnits.JoulesPerDegreeCelsius);
    }

    public static FromKilojoulesperkelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.Kilojoulesperkelvin);
    }

    public static FromMegajoulesperkelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.Megajoulesperkelvin);
    }

    public static FromKilocaloriesperkelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.Kilocaloriesperkelvin);
    }

    public static FromKilojoulesperdegreecelsius(value: number): Entropy {
        return new Entropy(value, EntropyUnits.Kilojoulesperdegreecelsius);
    }

    private convertFromBase(toUnit: EntropyUnits): number {

                switch (toUnit) {
                    
                case EntropyUnits.JoulesPerKelvin:
                    return this.value;
                
                case EntropyUnits.CaloriesPerKelvin:
                    return this.value/4.184;
                
                case EntropyUnits.JoulesPerDegreeCelsius:
                    return this.value;
                
                case EntropyUnits.Kilojoulesperkelvin:
                    return (this.value) * 1000;
                
                case EntropyUnits.Megajoulesperkelvin:
                    return (this.value) * 1000000;
                
                case EntropyUnits.Kilocaloriesperkelvin:
                    return (this.value*4.184) * 1000;
                
                case EntropyUnits.Kilojoulesperdegreecelsius:
                    return (this.value) * 1000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: EntropyUnits): number {

                switch (fromUnit) {
                    
                case EntropyUnits.JoulesPerKelvin:
                    return value;
                
                case EntropyUnits.CaloriesPerKelvin:
                    return value*4.184;
                
                case EntropyUnits.JoulesPerDegreeCelsius:
                    return value;
                
                case EntropyUnits.Kilojoulesperkelvin:
                    return (value) / 1000;
                
                case EntropyUnits.Megajoulesperkelvin:
                    return (value) / 1000000;
                
                case EntropyUnits.Kilocaloriesperkelvin:
                    return (value/4.184) / 1000;
                
                case EntropyUnits.Kilojoulesperdegreecelsius:
                    return (value) / 1000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
