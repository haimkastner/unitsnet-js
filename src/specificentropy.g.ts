export enum SpecificEntropyUnits {
    JoulesPerKilogramKelvin,
    JoulesPerKilogramDegreeCelsius,
    CaloriesPerGramKelvin,
    BtusPerPoundFahrenheit,
    KilojoulesPerKilogramKelvin,
    MegajoulesPerKilogramKelvin,
    KilojoulesPerKilogramDegreeCelsius,
    MegajoulesPerKilogramDegreeCelsius,
    KilocaloriesPerGramKelvin
}

export class SpecificEntropy {
    private value: number;
    private joulesperkilogramkelvinLazy: number | null = null;
    private joulesperkilogramdegreecelsiusLazy: number | null = null;
    private caloriespergramkelvinLazy: number | null = null;
    private btusperpoundfahrenheitLazy: number | null = null;
    private kilojoulesperkilogramkelvinLazy: number | null = null;
    private megajoulesperkilogramkelvinLazy: number | null = null;
    private kilojoulesperkilogramdegreecelsiusLazy: number | null = null;
    private megajoulesperkilogramdegreecelsiusLazy: number | null = null;
    private kilocaloriespergramkelvinLazy: number | null = null;

    public constructor(value: number, fromUnit: SpecificEntropyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerKilogramKelvin(): number {
        if(this.joulesperkilogramkelvinLazy !== null){
            return this.joulesperkilogramkelvinLazy;
        }
        return this.joulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramKelvin);
    }

    public get JoulesPerKilogramDegreeCelsius(): number {
        if(this.joulesperkilogramdegreecelsiusLazy !== null){
            return this.joulesperkilogramdegreecelsiusLazy;
        }
        return this.joulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius);
    }

    public get CaloriesPerGramKelvin(): number {
        if(this.caloriespergramkelvinLazy !== null){
            return this.caloriespergramkelvinLazy;
        }
        return this.caloriespergramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.CaloriesPerGramKelvin);
    }

    public get BtusPerPoundFahrenheit(): number {
        if(this.btusperpoundfahrenheitLazy !== null){
            return this.btusperpoundfahrenheitLazy;
        }
        return this.btusperpoundfahrenheitLazy = this.convertFromBase(SpecificEntropyUnits.BtusPerPoundFahrenheit);
    }

    public get KilojoulesPerKilogramKelvin(): number {
        if(this.kilojoulesperkilogramkelvinLazy !== null){
            return this.kilojoulesperkilogramkelvinLazy;
        }
        return this.kilojoulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.KilojoulesPerKilogramKelvin);
    }

    public get MegajoulesPerKilogramKelvin(): number {
        if(this.megajoulesperkilogramkelvinLazy !== null){
            return this.megajoulesperkilogramkelvinLazy;
        }
        return this.megajoulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.MegajoulesPerKilogramKelvin);
    }

    public get KilojoulesPerKilogramDegreeCelsius(): number {
        if(this.kilojoulesperkilogramdegreecelsiusLazy !== null){
            return this.kilojoulesperkilogramdegreecelsiusLazy;
        }
        return this.kilojoulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius);
    }

    public get MegajoulesPerKilogramDegreeCelsius(): number {
        if(this.megajoulesperkilogramdegreecelsiusLazy !== null){
            return this.megajoulesperkilogramdegreecelsiusLazy;
        }
        return this.megajoulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius);
    }

    public get KilocaloriesPerGramKelvin(): number {
        if(this.kilocaloriespergramkelvinLazy !== null){
            return this.kilocaloriespergramkelvinLazy;
        }
        return this.kilocaloriespergramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.KilocaloriesPerGramKelvin);
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

    public static FromKilojoulesPerKilogramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilojoulesPerKilogramKelvin);
    }

    public static FromMegajoulesPerKilogramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.MegajoulesPerKilogramKelvin);
    }

    public static FromKilojoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius);
    }

    public static FromMegajoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius);
    }

    public static FromKilocaloriesPerGramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilocaloriesPerGramKelvin);
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
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:
                return (this.value) / 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:
                return (this.value) / 1000000;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:
                return (this.value) / 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:
                return (this.value) / 1000000;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:
                return (this.value/4.184e3) / 1000;
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
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:
                return (value) * 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:
                return (value) * 1000000;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:
                return (value) * 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:
                return (value) * 1000000;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:
                return (value*4.184e3) * 1000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: SpecificEntropyUnits = SpecificEntropyUnits.JoulesPerKilogramKelvin): string {

        switch (toUnit) {
            
            case SpecificEntropyUnits.JoulesPerKilogramKelvin:
                return this.JoulesPerKilogramKelvin + ` J/kg.K`;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:
                return this.JoulesPerKilogramDegreeCelsius + ` J/kg.C`;
            case SpecificEntropyUnits.CaloriesPerGramKelvin:
                return this.CaloriesPerGramKelvin + ` cal/g.K`;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit:
                return this.BtusPerPoundFahrenheit + ` BTU/lb·°F`;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:
                return this.KilojoulesPerKilogramKelvin + ` J/kg.K`;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:
                return this.MegajoulesPerKilogramKelvin + ` J/kg.K`;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:
                return this.KilojoulesPerKilogramDegreeCelsius + ` J/kg.C`;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:
                return this.MegajoulesPerKilogramDegreeCelsius + ` J/kg.C`;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:
                return this.KilocaloriesPerGramKelvin + ` cal/g.K`;
        default:
            break;
        }
        return this.value.toString();
    }
}
