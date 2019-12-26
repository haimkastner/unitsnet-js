export enum LuminosityUnits {
    Watts,
    SolarLuminosities,
    Femtowatt,
    Picowatt,
    Nanowatt,
    Microwatt,
    Deciwatt,
    Decawatt,
    Kilowatt,
    Megawatt,
    Gigawatt,
    Terawatt,
    Petawatt
}

export class Luminosity {
    private value: number;
    private wattsLazy: number | null = null;
    private solarluminositiesLazy: number | null = null;
    private femtowattLazy: number | null = null;
    private picowattLazy: number | null = null;
    private nanowattLazy: number | null = null;
    private microwattLazy: number | null = null;
    private deciwattLazy: number | null = null;
    private decawattLazy: number | null = null;
    private kilowattLazy: number | null = null;
    private megawattLazy: number | null = null;
    private gigawattLazy: number | null = null;
    private terawattLazy: number | null = null;
    private petawattLazy: number | null = null;

    public constructor(value: number, fromUnit: LuminosityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Watts(): number {
        if(this.wattsLazy !== null){
            return this.wattsLazy;
        }
        return this.wattsLazy = this.convertFromBase(LuminosityUnits.Watts);
    }

    public get SolarLuminosities(): number {
        if(this.solarluminositiesLazy !== null){
            return this.solarluminositiesLazy;
        }
        return this.solarluminositiesLazy = this.convertFromBase(LuminosityUnits.SolarLuminosities);
    }

    public get Femtowatt(): number {
        if(this.femtowattLazy !== null){
            return this.femtowattLazy;
        }
        return this.femtowattLazy = this.convertFromBase(LuminosityUnits.Femtowatt);
    }

    public get Picowatt(): number {
        if(this.picowattLazy !== null){
            return this.picowattLazy;
        }
        return this.picowattLazy = this.convertFromBase(LuminosityUnits.Picowatt);
    }

    public get Nanowatt(): number {
        if(this.nanowattLazy !== null){
            return this.nanowattLazy;
        }
        return this.nanowattLazy = this.convertFromBase(LuminosityUnits.Nanowatt);
    }

    public get Microwatt(): number {
        if(this.microwattLazy !== null){
            return this.microwattLazy;
        }
        return this.microwattLazy = this.convertFromBase(LuminosityUnits.Microwatt);
    }

    public get Deciwatt(): number {
        if(this.deciwattLazy !== null){
            return this.deciwattLazy;
        }
        return this.deciwattLazy = this.convertFromBase(LuminosityUnits.Deciwatt);
    }

    public get Decawatt(): number {
        if(this.decawattLazy !== null){
            return this.decawattLazy;
        }
        return this.decawattLazy = this.convertFromBase(LuminosityUnits.Decawatt);
    }

    public get Kilowatt(): number {
        if(this.kilowattLazy !== null){
            return this.kilowattLazy;
        }
        return this.kilowattLazy = this.convertFromBase(LuminosityUnits.Kilowatt);
    }

    public get Megawatt(): number {
        if(this.megawattLazy !== null){
            return this.megawattLazy;
        }
        return this.megawattLazy = this.convertFromBase(LuminosityUnits.Megawatt);
    }

    public get Gigawatt(): number {
        if(this.gigawattLazy !== null){
            return this.gigawattLazy;
        }
        return this.gigawattLazy = this.convertFromBase(LuminosityUnits.Gigawatt);
    }

    public get Terawatt(): number {
        if(this.terawattLazy !== null){
            return this.terawattLazy;
        }
        return this.terawattLazy = this.convertFromBase(LuminosityUnits.Terawatt);
    }

    public get Petawatt(): number {
        if(this.petawattLazy !== null){
            return this.petawattLazy;
        }
        return this.petawattLazy = this.convertFromBase(LuminosityUnits.Petawatt);
    }

    public static FromWatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Watts);
    }

    public static FromSolarLuminosities(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.SolarLuminosities);
    }

    public static FromFemtowatt(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Femtowatt);
    }

    public static FromPicowatt(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Picowatt);
    }

    public static FromNanowatt(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Nanowatt);
    }

    public static FromMicrowatt(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Microwatt);
    }

    public static FromDeciwatt(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Deciwatt);
    }

    public static FromDecawatt(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Decawatt);
    }

    public static FromKilowatt(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Kilowatt);
    }

    public static FromMegawatt(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Megawatt);
    }

    public static FromGigawatt(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Gigawatt);
    }

    public static FromTerawatt(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Terawatt);
    }

    public static FromPetawatt(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Petawatt);
    }

    private convertFromBase(toUnit: LuminosityUnits): number {
        switch (toUnit) {
                
            case LuminosityUnits.Watts:
                return this.value;
            case LuminosityUnits.SolarLuminosities:
                return this.value / 3.846e26;
            case LuminosityUnits.Femtowatt:
                return (this.value) / 1e-15;
            case LuminosityUnits.Picowatt:
                return (this.value) / 1e-12;
            case LuminosityUnits.Nanowatt:
                return (this.value) / 1e-9;
            case LuminosityUnits.Microwatt:
                return (this.value) / 0.000001;
            case LuminosityUnits.Deciwatt:
                return (this.value) / 0.1;
            case LuminosityUnits.Decawatt:
                return (this.value) / 10;
            case LuminosityUnits.Kilowatt:
                return (this.value) / 1000;
            case LuminosityUnits.Megawatt:
                return (this.value) / 1000000;
            case LuminosityUnits.Gigawatt:
                return (this.value) / 1000000000;
            case LuminosityUnits.Terawatt:
                return (this.value) / 1000000000000;
            case LuminosityUnits.Petawatt:
                return (this.value) / 1000000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: LuminosityUnits): number {
        switch (fromUnit) {
                
            case LuminosityUnits.Watts:
                return value;
            case LuminosityUnits.SolarLuminosities:
                return value * 3.846e26;
            case LuminosityUnits.Femtowatt:
                return (value) * 1e-15;
            case LuminosityUnits.Picowatt:
                return (value) * 1e-12;
            case LuminosityUnits.Nanowatt:
                return (value) * 1e-9;
            case LuminosityUnits.Microwatt:
                return (value) * 0.000001;
            case LuminosityUnits.Deciwatt:
                return (value) * 0.1;
            case LuminosityUnits.Decawatt:
                return (value) * 10;
            case LuminosityUnits.Kilowatt:
                return (value) * 1000;
            case LuminosityUnits.Megawatt:
                return (value) * 1000000;
            case LuminosityUnits.Gigawatt:
                return (value) * 1000000000;
            case LuminosityUnits.Terawatt:
                return (value) * 1000000000000;
            case LuminosityUnits.Petawatt:
                return (value) * 1000000000000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: LuminosityUnits = LuminosityUnits.Watts): string {

        switch (toUnit) {
            
            case LuminosityUnits.Watts:
                return this.Watts + ` W`;
            case LuminosityUnits.SolarLuminosities:
                return this.SolarLuminosities + ` L⊙`;
            case LuminosityUnits.Femtowatt:
                return this.Femtowatt + ` W`;
            case LuminosityUnits.Picowatt:
                return this.Picowatt + ` W`;
            case LuminosityUnits.Nanowatt:
                return this.Nanowatt + ` W`;
            case LuminosityUnits.Microwatt:
                return this.Microwatt + ` W`;
            case LuminosityUnits.Deciwatt:
                return this.Deciwatt + ` W`;
            case LuminosityUnits.Decawatt:
                return this.Decawatt + ` W`;
            case LuminosityUnits.Kilowatt:
                return this.Kilowatt + ` W`;
            case LuminosityUnits.Megawatt:
                return this.Megawatt + ` W`;
            case LuminosityUnits.Gigawatt:
                return this.Gigawatt + ` W`;
            case LuminosityUnits.Terawatt:
                return this.Terawatt + ` W`;
            case LuminosityUnits.Petawatt:
                return this.Petawatt + ` W`;
        default:
            break;
        }
        return this.value.toString();
    }
}
