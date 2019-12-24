export enum PowerUnits {
    Watts,
    MechanicalHorsepower,
    MetricHorsepower,
    ElectricalHorsepower,
    BoilerHorsepower,
    HydraulicHorsepower,
    BritishThermalUnitsPerHour,
    JoulesPerHour,
    Picowatts,
    Nanowatts,
    Microwatts,
    Deciwatts,
    Kilowatts,
    Megawatts,
    Gigawatts,
    Terawatts,
    Petawatts,
    Kilobritishthermalunitsperhour,
    Kilojoulesperhour,
    Megajoulesperhour,
    Gigajoulesperhour
}

export class Power {
    private value: number;

    public constructor(value: number, fromUnit: PowerUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Watts(): number {
        return this.convertFromBase(PowerUnits.Watts);
    }

    public get MechanicalHorsepower(): number {
        return this.convertFromBase(PowerUnits.MechanicalHorsepower);
    }

    public get MetricHorsepower(): number {
        return this.convertFromBase(PowerUnits.MetricHorsepower);
    }

    public get ElectricalHorsepower(): number {
        return this.convertFromBase(PowerUnits.ElectricalHorsepower);
    }

    public get BoilerHorsepower(): number {
        return this.convertFromBase(PowerUnits.BoilerHorsepower);
    }

    public get HydraulicHorsepower(): number {
        return this.convertFromBase(PowerUnits.HydraulicHorsepower);
    }

    public get BritishThermalUnitsPerHour(): number {
        return this.convertFromBase(PowerUnits.BritishThermalUnitsPerHour);
    }

    public get JoulesPerHour(): number {
        return this.convertFromBase(PowerUnits.JoulesPerHour);
    }

    public get Picowatts(): number {
        return this.convertFromBase(PowerUnits.Picowatts);
    }

    public get Nanowatts(): number {
        return this.convertFromBase(PowerUnits.Nanowatts);
    }

    public get Microwatts(): number {
        return this.convertFromBase(PowerUnits.Microwatts);
    }

    public get Deciwatts(): number {
        return this.convertFromBase(PowerUnits.Deciwatts);
    }

    public get Kilowatts(): number {
        return this.convertFromBase(PowerUnits.Kilowatts);
    }

    public get Megawatts(): number {
        return this.convertFromBase(PowerUnits.Megawatts);
    }

    public get Gigawatts(): number {
        return this.convertFromBase(PowerUnits.Gigawatts);
    }

    public get Terawatts(): number {
        return this.convertFromBase(PowerUnits.Terawatts);
    }

    public get Petawatts(): number {
        return this.convertFromBase(PowerUnits.Petawatts);
    }

    public get Kilobritishthermalunitsperhour(): number {
        return this.convertFromBase(PowerUnits.Kilobritishthermalunitsperhour);
    }

    public get Kilojoulesperhour(): number {
        return this.convertFromBase(PowerUnits.Kilojoulesperhour);
    }

    public get Megajoulesperhour(): number {
        return this.convertFromBase(PowerUnits.Megajoulesperhour);
    }

    public get Gigajoulesperhour(): number {
        return this.convertFromBase(PowerUnits.Gigajoulesperhour);
    }

    public static FromWatts(value: number): Power {
        return new Power(value, PowerUnits.Watts);
    }

    public static FromMechanicalHorsepower(value: number): Power {
        return new Power(value, PowerUnits.MechanicalHorsepower);
    }

    public static FromMetricHorsepower(value: number): Power {
        return new Power(value, PowerUnits.MetricHorsepower);
    }

    public static FromElectricalHorsepower(value: number): Power {
        return new Power(value, PowerUnits.ElectricalHorsepower);
    }

    public static FromBoilerHorsepower(value: number): Power {
        return new Power(value, PowerUnits.BoilerHorsepower);
    }

    public static FromHydraulicHorsepower(value: number): Power {
        return new Power(value, PowerUnits.HydraulicHorsepower);
    }

    public static FromBritishThermalUnitsPerHour(value: number): Power {
        return new Power(value, PowerUnits.BritishThermalUnitsPerHour);
    }

    public static FromJoulesPerHour(value: number): Power {
        return new Power(value, PowerUnits.JoulesPerHour);
    }

    public static FromPicowatts(value: number): Power {
        return new Power(value, PowerUnits.Picowatts);
    }

    public static FromNanowatts(value: number): Power {
        return new Power(value, PowerUnits.Nanowatts);
    }

    public static FromMicrowatts(value: number): Power {
        return new Power(value, PowerUnits.Microwatts);
    }

    public static FromDeciwatts(value: number): Power {
        return new Power(value, PowerUnits.Deciwatts);
    }

    public static FromKilowatts(value: number): Power {
        return new Power(value, PowerUnits.Kilowatts);
    }

    public static FromMegawatts(value: number): Power {
        return new Power(value, PowerUnits.Megawatts);
    }

    public static FromGigawatts(value: number): Power {
        return new Power(value, PowerUnits.Gigawatts);
    }

    public static FromTerawatts(value: number): Power {
        return new Power(value, PowerUnits.Terawatts);
    }

    public static FromPetawatts(value: number): Power {
        return new Power(value, PowerUnits.Petawatts);
    }

    public static FromKilobritishthermalunitsperhour(value: number): Power {
        return new Power(value, PowerUnits.Kilobritishthermalunitsperhour);
    }

    public static FromKilojoulesperhour(value: number): Power {
        return new Power(value, PowerUnits.Kilojoulesperhour);
    }

    public static FromMegajoulesperhour(value: number): Power {
        return new Power(value, PowerUnits.Megajoulesperhour);
    }

    public static FromGigajoulesperhour(value: number): Power {
        return new Power(value, PowerUnits.Gigajoulesperhour);
    }

    private convertFromBase(toUnit: PowerUnits): number {

            switch (toUnit) {
                
                case PowerUnits.Watts:
                    return this.value;
                
                case PowerUnits.MechanicalHorsepower:
                    return this.value/745.69;
                
                case PowerUnits.MetricHorsepower:
                    return this.value/735.49875;
                
                case PowerUnits.ElectricalHorsepower:
                    return this.value/746;
                
                case PowerUnits.BoilerHorsepower:
                    return this.value/9812.5;
                
                case PowerUnits.HydraulicHorsepower:
                    return this.value/745.69988145;
                
                case PowerUnits.BritishThermalUnitsPerHour:
                    return this.value/0.293071;
                
                case PowerUnits.JoulesPerHour:
                    return this.value*3600;
                
                case PowerUnits.Picowatts:
                    return (this.value) * 1e-12;
                
                case PowerUnits.Nanowatts:
                    return (this.value) * 1e-9;
                
                case PowerUnits.Microwatts:
                    return (this.value) * 0.000001;
                
                case PowerUnits.Deciwatts:
                    return (this.value) * 0.1;
                
                case PowerUnits.Kilowatts:
                    return (this.value) * 1000;
                
                case PowerUnits.Megawatts:
                    return (this.value) * 1000000;
                
                case PowerUnits.Gigawatts:
                    return (this.value) * 1000000000;
                
                case PowerUnits.Terawatts:
                    return (this.value) * 1000000000000;
                
                case PowerUnits.Petawatts:
                    return (this.value) * 1000000000000000;
                
                case PowerUnits.Kilobritishthermalunitsperhour:
                    return (this.value*0.293071) * 1000;
                
                case PowerUnits.Kilojoulesperhour:
                    return (this.value/3600) * 1000;
                
                case PowerUnits.Megajoulesperhour:
                    return (this.value/3600) * 1000000;
                
                case PowerUnits.Gigajoulesperhour:
                    return (this.value/3600) * 1000000000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: PowerUnits): number {

                switch (fromUnit) {
                    
                case PowerUnits.Watts:
                    return value;
                
                case PowerUnits.MechanicalHorsepower:
                    return value*745.69;
                
                case PowerUnits.MetricHorsepower:
                    return value*735.49875;
                
                case PowerUnits.ElectricalHorsepower:
                    return value*746;
                
                case PowerUnits.BoilerHorsepower:
                    return value*9812.5;
                
                case PowerUnits.HydraulicHorsepower:
                    return value*745.69988145;
                
                case PowerUnits.BritishThermalUnitsPerHour:
                    return value*0.293071;
                
                case PowerUnits.JoulesPerHour:
                    return value/3600;
                
                case PowerUnits.Picowatts:
                    return (value) / 1e-12;
                
                case PowerUnits.Nanowatts:
                    return (value) / 1e-9;
                
                case PowerUnits.Microwatts:
                    return (value) / 0.000001;
                
                case PowerUnits.Deciwatts:
                    return (value) / 0.1;
                
                case PowerUnits.Kilowatts:
                    return (value) / 1000;
                
                case PowerUnits.Megawatts:
                    return (value) / 1000000;
                
                case PowerUnits.Gigawatts:
                    return (value) / 1000000000;
                
                case PowerUnits.Terawatts:
                    return (value) / 1000000000000;
                
                case PowerUnits.Petawatts:
                    return (value) / 1000000000000000;
                
                case PowerUnits.Kilobritishthermalunitsperhour:
                    return (value/0.293071) / 1000;
                
                case PowerUnits.Kilojoulesperhour:
                    return (value*3600) / 1000;
                
                case PowerUnits.Megajoulesperhour:
                    return (value*3600) / 1000000;
                
                case PowerUnits.Gigajoulesperhour:
                    return (value*3600) / 1000000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
