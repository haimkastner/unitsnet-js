export enum SpecificEntropyUnits {
    JoulesPerKilogramKelvin,
    JoulesPerKilogramDegreeCelsius,
    CaloriesPerGramKelvin,
    BtusPerPoundFahrenheit,
    KilojoulePerKilogramKelvin,
    MegajoulePerKilogramKelvin,
    KilojoulePerKilogramDegreeCelsius,
    MegajoulePerKilogramDegreeCelsius,
    KilocaloriePerGramKelvin
}

export class SpecificEntropy {
    private value: number;
    private joulesperkilogramkelvinLazy: number | null = null;
    private joulesperkilogramdegreecelsiusLazy: number | null = null;
    private caloriespergramkelvinLazy: number | null = null;
    private btusperpoundfahrenheitLazy: number | null = null;
    private kilojouleperkilogramkelvinLazy: number | null = null;
    private megajouleperkilogramkelvinLazy: number | null = null;
    private kilojouleperkilogramdegreecelsiusLazy: number | null = null;
    private megajouleperkilogramdegreecelsiusLazy: number | null = null;
    private kilocaloriepergramkelvinLazy: number | null = null;

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

    public get KilojoulePerKilogramKelvin(): number {
        if(this.kilojouleperkilogramkelvinLazy !== null){
            return this.kilojouleperkilogramkelvinLazy;
        }
        return this.kilojouleperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.KilojoulePerKilogramKelvin);
    }

    public get MegajoulePerKilogramKelvin(): number {
        if(this.megajouleperkilogramkelvinLazy !== null){
            return this.megajouleperkilogramkelvinLazy;
        }
        return this.megajouleperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.MegajoulePerKilogramKelvin);
    }

    public get KilojoulePerKilogramDegreeCelsius(): number {
        if(this.kilojouleperkilogramdegreecelsiusLazy !== null){
            return this.kilojouleperkilogramdegreecelsiusLazy;
        }
        return this.kilojouleperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.KilojoulePerKilogramDegreeCelsius);
    }

    public get MegajoulePerKilogramDegreeCelsius(): number {
        if(this.megajouleperkilogramdegreecelsiusLazy !== null){
            return this.megajouleperkilogramdegreecelsiusLazy;
        }
        return this.megajouleperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.MegajoulePerKilogramDegreeCelsius);
    }

    public get KilocaloriePerGramKelvin(): number {
        if(this.kilocaloriepergramkelvinLazy !== null){
            return this.kilocaloriepergramkelvinLazy;
        }
        return this.kilocaloriepergramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.KilocaloriePerGramKelvin);
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

    public static FromKilojoulePerKilogramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilojoulePerKilogramKelvin);
    }

    public static FromMegajoulePerKilogramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.MegajoulePerKilogramKelvin);
    }

    public static FromKilojoulePerKilogramDegreeCelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilojoulePerKilogramDegreeCelsius);
    }

    public static FromMegajoulePerKilogramDegreeCelsius(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.MegajoulePerKilogramDegreeCelsius);
    }

    public static FromKilocaloriePerGramKelvin(value: number): SpecificEntropy {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilocaloriePerGramKelvin);
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
            case SpecificEntropyUnits.KilojoulePerKilogramKelvin:
                return (this.value) / 1000;
            case SpecificEntropyUnits.MegajoulePerKilogramKelvin:
                return (this.value) / 1000000;
            case SpecificEntropyUnits.KilojoulePerKilogramDegreeCelsius:
                return (this.value) / 1000;
            case SpecificEntropyUnits.MegajoulePerKilogramDegreeCelsius:
                return (this.value) / 1000000;
            case SpecificEntropyUnits.KilocaloriePerGramKelvin:
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
            case SpecificEntropyUnits.KilojoulePerKilogramKelvin:
                return (value) * 1000;
            case SpecificEntropyUnits.MegajoulePerKilogramKelvin:
                return (value) * 1000000;
            case SpecificEntropyUnits.KilojoulePerKilogramDegreeCelsius:
                return (value) * 1000;
            case SpecificEntropyUnits.MegajoulePerKilogramDegreeCelsius:
                return (value) * 1000000;
            case SpecificEntropyUnits.KilocaloriePerGramKelvin:
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
            case SpecificEntropyUnits.KilojoulePerKilogramKelvin:
                return this.KilojoulePerKilogramKelvin + ` J/kg.K`;
            case SpecificEntropyUnits.MegajoulePerKilogramKelvin:
                return this.MegajoulePerKilogramKelvin + ` J/kg.K`;
            case SpecificEntropyUnits.KilojoulePerKilogramDegreeCelsius:
                return this.KilojoulePerKilogramDegreeCelsius + ` J/kg.C`;
            case SpecificEntropyUnits.MegajoulePerKilogramDegreeCelsius:
                return this.MegajoulePerKilogramDegreeCelsius + ` J/kg.C`;
            case SpecificEntropyUnits.KilocaloriePerGramKelvin:
                return this.KilocaloriePerGramKelvin + ` cal/g.K`;
        default:
            break;
        }
        return this.value.toString();
    }
}
