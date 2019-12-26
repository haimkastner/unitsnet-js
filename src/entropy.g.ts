export enum EntropyUnits {
    JoulesPerKelvin,
    CaloriesPerKelvin,
    JoulesPerDegreeCelsius,
    KilojoulePerKelvin,
    MegajoulePerKelvin,
    KilocaloriePerKelvin,
    KilojoulePerDegreeCelsius
}

export class Entropy {
    private value: number;
    private joulesperkelvinLazy: number | null = null;
    private caloriesperkelvinLazy: number | null = null;
    private joulesperdegreecelsiusLazy: number | null = null;
    private kilojouleperkelvinLazy: number | null = null;
    private megajouleperkelvinLazy: number | null = null;
    private kilocalorieperkelvinLazy: number | null = null;
    private kilojouleperdegreecelsiusLazy: number | null = null;

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

    public get KilojoulePerKelvin(): number {
        if(this.kilojouleperkelvinLazy !== null){
            return this.kilojouleperkelvinLazy;
        }
        return this.kilojouleperkelvinLazy = this.convertFromBase(EntropyUnits.KilojoulePerKelvin);
    }

    public get MegajoulePerKelvin(): number {
        if(this.megajouleperkelvinLazy !== null){
            return this.megajouleperkelvinLazy;
        }
        return this.megajouleperkelvinLazy = this.convertFromBase(EntropyUnits.MegajoulePerKelvin);
    }

    public get KilocaloriePerKelvin(): number {
        if(this.kilocalorieperkelvinLazy !== null){
            return this.kilocalorieperkelvinLazy;
        }
        return this.kilocalorieperkelvinLazy = this.convertFromBase(EntropyUnits.KilocaloriePerKelvin);
    }

    public get KilojoulePerDegreeCelsius(): number {
        if(this.kilojouleperdegreecelsiusLazy !== null){
            return this.kilojouleperdegreecelsiusLazy;
        }
        return this.kilojouleperdegreecelsiusLazy = this.convertFromBase(EntropyUnits.KilojoulePerDegreeCelsius);
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

    public static FromKilojoulePerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.KilojoulePerKelvin);
    }

    public static FromMegajoulePerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.MegajoulePerKelvin);
    }

    public static FromKilocaloriePerKelvin(value: number): Entropy {
        return new Entropy(value, EntropyUnits.KilocaloriePerKelvin);
    }

    public static FromKilojoulePerDegreeCelsius(value: number): Entropy {
        return new Entropy(value, EntropyUnits.KilojoulePerDegreeCelsius);
    }

    private convertFromBase(toUnit: EntropyUnits): number {
        switch (toUnit) {
                
            case EntropyUnits.JoulesPerKelvin:
                return this.value;
            case EntropyUnits.CaloriesPerKelvin:
                return this.value/4.184;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return this.value;
            case EntropyUnits.KilojoulePerKelvin:
                return (this.value) / 1000;
            case EntropyUnits.MegajoulePerKelvin:
                return (this.value) / 1000000;
            case EntropyUnits.KilocaloriePerKelvin:
                return (this.value/4.184) / 1000;
            case EntropyUnits.KilojoulePerDegreeCelsius:
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
            case EntropyUnits.KilojoulePerKelvin:
                return (value) * 1000;
            case EntropyUnits.MegajoulePerKelvin:
                return (value) * 1000000;
            case EntropyUnits.KilocaloriePerKelvin:
                return (value*4.184) * 1000;
            case EntropyUnits.KilojoulePerDegreeCelsius:
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
            case EntropyUnits.KilojoulePerKelvin:
                return this.KilojoulePerKelvin + ` J/K`;
            case EntropyUnits.MegajoulePerKelvin:
                return this.MegajoulePerKelvin + ` J/K`;
            case EntropyUnits.KilocaloriePerKelvin:
                return this.KilocaloriePerKelvin + ` cal/K`;
            case EntropyUnits.KilojoulePerDegreeCelsius:
                return this.KilojoulePerDegreeCelsius + ` J/C`;
        default:
            break;
        }
        return this.value.toString();
    }
}
