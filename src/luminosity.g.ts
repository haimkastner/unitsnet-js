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

    public constructor(value: number, fromUnit: LuminosityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Watts(): number {
        return this.convertFromBase(LuminosityUnits.Watts);
    }

    public get SolarLuminosities(): number {
        return this.convertFromBase(LuminosityUnits.SolarLuminosities);
    }

    public get Femtowatts(): number {
        return this.convertFromBase(LuminosityUnits.Femtowatts);
    }

    public get Picowatts(): number {
        return this.convertFromBase(LuminosityUnits.Picowatts);
    }

    public get Nanowatts(): number {
        return this.convertFromBase(LuminosityUnits.Nanowatts);
    }

    public get Microwatts(): number {
        return this.convertFromBase(LuminosityUnits.Microwatts);
    }

    public get Deciwatts(): number {
        return this.convertFromBase(LuminosityUnits.Deciwatts);
    }

    public get Decawatts(): number {
        return this.convertFromBase(LuminosityUnits.Decawatts);
    }

    public get Kilowatts(): number {
        return this.convertFromBase(LuminosityUnits.Kilowatts);
    }

    public get Megawatts(): number {
        return this.convertFromBase(LuminosityUnits.Megawatts);
    }

    public get Gigawatts(): number {
        return this.convertFromBase(LuminosityUnits.Gigawatts);
    }

    public get Terawatts(): number {
        return this.convertFromBase(LuminosityUnits.Terawatts);
    }

    public get Petawatts(): number {
        return this.convertFromBase(LuminosityUnits.Petawatts);
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
