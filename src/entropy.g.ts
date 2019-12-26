export enum EntropyUnits {
    JoulesPerKelvin,
    CaloriesPerKelvin,
    JoulesPerDegreeCelsius,
    KilojoulesPerKelvin,
    MegajoulesPerKelvin,
    KilocaloriesPerKelvin,
    KilojoulesPerDegreeCelsius
}

export class Entropy {
    private value: number;
    private joulesperkelvinLazy: number | null = null;
    private caloriesperkelvinLazy: number | null = null;
    private joulesperdegreecelsiusLazy: number | null = null;
    private kilojoulesperkelvinLazy: number | null = null;
    private megajoulesperkelvinLazy: number | null = null;
    private kilocaloriesperkelvinLazy: number | null = null;
    private kilojoulesperdegreecelsiusLazy: number | null = null;

    public constructor(value: number, fromUnit: EntropyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerKelvin(): number {
        if(this.joulesperkelvinLazy !== null){
            return this.joulesperkelvinLazy;
        }
        return this.joulesperkelvinLazy = this.convertFromBase(EntropyUnits.JoulesPerKelvin);
    }

    public get CaloriesPerKelvin(): number {
        if(this.caloriesperkelvinLazy !== null){
            return this.caloriesperkelvinLazy;
        }
        return this.caloriesperkelvinLazy = this.convertFromBase(EntropyUnits.CaloriesPerKelvin);
    }

    public get JoulesPerDegreeCelsius(): number {
        if(this.joulesperdegreecelsiusLazy !== null){
            return this.joulesperdegreecelsiusLazy;
        }
        return this.joulesperdegreecelsiusLazy = this.convertFromBase(EntropyUnits.JoulesPerDegreeCelsius);
    }

    public get KilojoulesPerKelvin(): number {
        if(this.kilojoulesperkelvinLazy !== null){
            return this.kilojoulesperkelvinLazy;
        }
        return this.kilojoulesperkelvinLazy = this.convertFromBase(EntropyUnits.KilojoulesPerKelvin);
    }

    public get MegajoulesPerKelvin(): number {
        if(this.megajoulesperkelvinLazy !== null){
            return this.megajoulesperkelvinLazy;
        }
        return this.megajoulesperkelvinLazy = this.convertFromBase(EntropyUnits.MegajoulesPerKelvin);
    }

    public get KilocaloriesPerKelvin(): number {
        if(this.kilocaloriesperkelvinLazy !== null){
            return this.kilocaloriesperkelvinLazy;
        }
        return this.kilocaloriesperkelvinLazy = this.convertFromBase(EntropyUnits.KilocaloriesPerKelvin);
    }

    public get KilojoulesPerDegreeCelsius(): number {
        if(this.kilojoulesperdegreecelsiusLazy !== null){
            return this.kilojoulesperdegreecelsiusLazy;
        }
        return this.kilojoulesperdegreecelsiusLazy = this.convertFromBase(EntropyUnits.KilojoulesPerDegreeCelsius);
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

    public static FromKilojoulesPerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.KilojoulesPerKelvin);
    }

    public static FromMegajoulesPerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.MegajoulesPerKelvin);
    }

    public static FromKilocaloriesPerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.KilocaloriesPerKelvin);
    }

    public static FromKilojoulesPerDegreeCelsius(value: number): Entropy {
        return new Entropy(value, EntropyUnits.KilojoulesPerDegreeCelsius);
    }

    private convertFromBase(toUnit: EntropyUnits): number {
        switch (toUnit) {
                
            case EntropyUnits.JoulesPerKelvin:
                return this.value;
            case EntropyUnits.CaloriesPerKelvin:
                return this.value/4.184;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return this.value;
            case EntropyUnits.KilojoulesPerKelvin:
                return (this.value) / 1000;
            case EntropyUnits.MegajoulesPerKelvin:
                return (this.value) / 1000000;
            case EntropyUnits.KilocaloriesPerKelvin:
                return (this.value/4.184) / 1000;
            case EntropyUnits.KilojoulesPerDegreeCelsius:
                return (this.value) / 1000;
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
            case EntropyUnits.KilojoulesPerKelvin:
                return (value) * 1000;
            case EntropyUnits.MegajoulesPerKelvin:
                return (value) * 1000000;
            case EntropyUnits.KilocaloriesPerKelvin:
                return (value*4.184) * 1000;
            case EntropyUnits.KilojoulesPerDegreeCelsius:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: EntropyUnits = EntropyUnits.JoulesPerKelvin): string {

        switch (toUnit) {
            
            case EntropyUnits.JoulesPerKelvin:
                return this.JoulesPerKelvin + ` J/K`;
            case EntropyUnits.CaloriesPerKelvin:
                return this.CaloriesPerKelvin + ` cal/K`;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return this.JoulesPerDegreeCelsius + ` J/C`;
            case EntropyUnits.KilojoulesPerKelvin:
                return this.KilojoulesPerKelvin + ` J/K`;
            case EntropyUnits.MegajoulesPerKelvin:
                return this.MegajoulesPerKelvin + ` J/K`;
            case EntropyUnits.KilocaloriesPerKelvin:
                return this.KilocaloriesPerKelvin + ` cal/K`;
            case EntropyUnits.KilojoulesPerDegreeCelsius:
                return this.KilojoulesPerDegreeCelsius + ` J/C`;
        default:
            break;
        }
        return this.value.toString();
    }
}
