export enum LuminosityUnits {
    Watts,
    SolarLuminosities,
    Femtowatts,
    Picowatts,
    Nanowatts,
    Microwatts,
    Deciwatts,
    Decawatts,
    Kilowatts,
    Megawatts,
    Gigawatts,
    Terawatts,
    Petawatts
}

export class Luminosity {
    private value: number;
    private wattsLazy: number | null = null;
    private solarluminositiesLazy: number | null = null;
    private femtowattsLazy: number | null = null;
    private picowattsLazy: number | null = null;
    private nanowattsLazy: number | null = null;
    private microwattsLazy: number | null = null;
    private deciwattsLazy: number | null = null;
    private decawattsLazy: number | null = null;
    private kilowattsLazy: number | null = null;
    private megawattsLazy: number | null = null;
    private gigawattsLazy: number | null = null;
    private terawattsLazy: number | null = null;
    private petawattsLazy: number | null = null;

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

    public get Femtowatts(): number {
        if(this.femtowattsLazy !== null){
            return this.femtowattsLazy;
        }
        return this.femtowattsLazy = this.convertFromBase(LuminosityUnits.Femtowatts);
    }

    public get Picowatts(): number {
        if(this.picowattsLazy !== null){
            return this.picowattsLazy;
        }
        return this.picowattsLazy = this.convertFromBase(LuminosityUnits.Picowatts);
    }

    public get Nanowatts(): number {
        if(this.nanowattsLazy !== null){
            return this.nanowattsLazy;
        }
        return this.nanowattsLazy = this.convertFromBase(LuminosityUnits.Nanowatts);
    }

    public get Microwatts(): number {
        if(this.microwattsLazy !== null){
            return this.microwattsLazy;
        }
        return this.microwattsLazy = this.convertFromBase(LuminosityUnits.Microwatts);
    }

    public get Deciwatts(): number {
        if(this.deciwattsLazy !== null){
            return this.deciwattsLazy;
        }
        return this.deciwattsLazy = this.convertFromBase(LuminosityUnits.Deciwatts);
    }

    public get Decawatts(): number {
        if(this.decawattsLazy !== null){
            return this.decawattsLazy;
        }
        return this.decawattsLazy = this.convertFromBase(LuminosityUnits.Decawatts);
    }

    public get Kilowatts(): number {
        if(this.kilowattsLazy !== null){
            return this.kilowattsLazy;
        }
        return this.kilowattsLazy = this.convertFromBase(LuminosityUnits.Kilowatts);
    }

    public get Megawatts(): number {
        if(this.megawattsLazy !== null){
            return this.megawattsLazy;
        }
        return this.megawattsLazy = this.convertFromBase(LuminosityUnits.Megawatts);
    }

    public get Gigawatts(): number {
        if(this.gigawattsLazy !== null){
            return this.gigawattsLazy;
        }
        return this.gigawattsLazy = this.convertFromBase(LuminosityUnits.Gigawatts);
    }

    public get Terawatts(): number {
        if(this.terawattsLazy !== null){
            return this.terawattsLazy;
        }
        return this.terawattsLazy = this.convertFromBase(LuminosityUnits.Terawatts);
    }

    public get Petawatts(): number {
        if(this.petawattsLazy !== null){
            return this.petawattsLazy;
        }
        return this.petawattsLazy = this.convertFromBase(LuminosityUnits.Petawatts);
    }

    public static FromWatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Watts);
    }

    public static FromSolarLuminosities(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.SolarLuminosities);
    }

    public static FromFemtowatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Femtowatts);
    }

    public static FromPicowatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Picowatts);
    }

    public static FromNanowatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Nanowatts);
    }

    public static FromMicrowatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Microwatts);
    }

    public static FromDeciwatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Deciwatts);
    }

    public static FromDecawatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Decawatts);
    }

    public static FromKilowatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Kilowatts);
    }

    public static FromMegawatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Megawatts);
    }

    public static FromGigawatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Gigawatts);
    }

    public static FromTerawatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Terawatts);
    }

    public static FromPetawatts(value: number): Luminosity {
        return new Luminosity(value, LuminosityUnits.Petawatts);
    }

    private convertFromBase(toUnit: LuminosityUnits): number {
        switch (toUnit) {
                
            case LuminosityUnits.Watts:
                return this.value;
            case LuminosityUnits.SolarLuminosities:
                return this.value / 3.846e26;
            case LuminosityUnits.Femtowatts:
                return (this.value) / 1e-15;
            case LuminosityUnits.Picowatts:
                return (this.value) / 1e-12;
            case LuminosityUnits.Nanowatts:
                return (this.value) / 1e-9;
            case LuminosityUnits.Microwatts:
                return (this.value) / 0.000001;
            case LuminosityUnits.Deciwatts:
                return (this.value) / 0.1;
            case LuminosityUnits.Decawatts:
                return (this.value) / 10;
            case LuminosityUnits.Kilowatts:
                return (this.value) / 1000;
            case LuminosityUnits.Megawatts:
                return (this.value) / 1000000;
            case LuminosityUnits.Gigawatts:
                return (this.value) / 1000000000;
            case LuminosityUnits.Terawatts:
                return (this.value) / 1000000000000;
            case LuminosityUnits.Petawatts:
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
            case LuminosityUnits.Femtowatts:
                return (value) * 1e-15;
            case LuminosityUnits.Picowatts:
                return (value) * 1e-12;
            case LuminosityUnits.Nanowatts:
                return (value) * 1e-9;
            case LuminosityUnits.Microwatts:
                return (value) * 0.000001;
            case LuminosityUnits.Deciwatts:
                return (value) * 0.1;
            case LuminosityUnits.Decawatts:
                return (value) * 10;
            case LuminosityUnits.Kilowatts:
                return (value) * 1000;
            case LuminosityUnits.Megawatts:
                return (value) * 1000000;
            case LuminosityUnits.Gigawatts:
                return (value) * 1000000000;
            case LuminosityUnits.Terawatts:
                return (value) * 1000000000000;
            case LuminosityUnits.Petawatts:
                return (value) * 1000000000000000;
            default:
                break;
        }
        return NaN;
    }
}
