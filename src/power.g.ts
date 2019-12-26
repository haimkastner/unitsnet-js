export enum PowerUnits {
    Watts,
    MechanicalHorsepower,
    MetricHorsepower,
    ElectricalHorsepower,
    BoilerHorsepower,
    HydraulicHorsepower,
    BritishThermalUnitsPerHour,
    JoulesPerHour,
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
    Petawatt,
    KilobritishThermalUnitPerHour,
    KilojoulePerHour,
    MegajoulePerHour,
    GigajoulePerHour
}

export class Power {
    private value: number;
    private wattsLazy: number | null = null;
    private mechanicalhorsepowerLazy: number | null = null;
    private metrichorsepowerLazy: number | null = null;
    private electricalhorsepowerLazy: number | null = null;
    private boilerhorsepowerLazy: number | null = null;
    private hydraulichorsepowerLazy: number | null = null;
    private britishthermalunitsperhourLazy: number | null = null;
    private joulesperhourLazy: number | null = null;
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
    private kilobritishthermalunitperhourLazy: number | null = null;
    private kilojouleperhourLazy: number | null = null;
    private megajouleperhourLazy: number | null = null;
    private gigajouleperhourLazy: number | null = null;

    public constructor(value: number, fromUnit: PowerUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Watts(): number {
        if(this.wattsLazy !== null){
            return this.wattsLazy;
        }
        return this.wattsLazy = this.convertFromBase(PowerUnits.Watts);
    }

    public get MechanicalHorsepower(): number {
        if(this.mechanicalhorsepowerLazy !== null){
            return this.mechanicalhorsepowerLazy;
        }
        return this.mechanicalhorsepowerLazy = this.convertFromBase(PowerUnits.MechanicalHorsepower);
    }

    public get MetricHorsepower(): number {
        if(this.metrichorsepowerLazy !== null){
            return this.metrichorsepowerLazy;
        }
        return this.metrichorsepowerLazy = this.convertFromBase(PowerUnits.MetricHorsepower);
    }

    public get ElectricalHorsepower(): number {
        if(this.electricalhorsepowerLazy !== null){
            return this.electricalhorsepowerLazy;
        }
        return this.electricalhorsepowerLazy = this.convertFromBase(PowerUnits.ElectricalHorsepower);
    }

    public get BoilerHorsepower(): number {
        if(this.boilerhorsepowerLazy !== null){
            return this.boilerhorsepowerLazy;
        }
        return this.boilerhorsepowerLazy = this.convertFromBase(PowerUnits.BoilerHorsepower);
    }

    public get HydraulicHorsepower(): number {
        if(this.hydraulichorsepowerLazy !== null){
            return this.hydraulichorsepowerLazy;
        }
        return this.hydraulichorsepowerLazy = this.convertFromBase(PowerUnits.HydraulicHorsepower);
    }

    public get BritishThermalUnitsPerHour(): number {
        if(this.britishthermalunitsperhourLazy !== null){
            return this.britishthermalunitsperhourLazy;
        }
        return this.britishthermalunitsperhourLazy = this.convertFromBase(PowerUnits.BritishThermalUnitsPerHour);
    }

    public get JoulesPerHour(): number {
        if(this.joulesperhourLazy !== null){
            return this.joulesperhourLazy;
        }
        return this.joulesperhourLazy = this.convertFromBase(PowerUnits.JoulesPerHour);
    }

    public get Femtowatt(): number {
        if(this.femtowattLazy !== null){
            return this.femtowattLazy;
        }
        return this.femtowattLazy = this.convertFromBase(PowerUnits.Femtowatt);
    }

    public get Picowatt(): number {
        if(this.picowattLazy !== null){
            return this.picowattLazy;
        }
        return this.picowattLazy = this.convertFromBase(PowerUnits.Picowatt);
    }

    public get Nanowatt(): number {
        if(this.nanowattLazy !== null){
            return this.nanowattLazy;
        }
        return this.nanowattLazy = this.convertFromBase(PowerUnits.Nanowatt);
    }

    public get Microwatt(): number {
        if(this.microwattLazy !== null){
            return this.microwattLazy;
        }
        return this.microwattLazy = this.convertFromBase(PowerUnits.Microwatt);
    }

    public get Deciwatt(): number {
        if(this.deciwattLazy !== null){
            return this.deciwattLazy;
        }
        return this.deciwattLazy = this.convertFromBase(PowerUnits.Deciwatt);
    }

    public get Decawatt(): number {
        if(this.decawattLazy !== null){
            return this.decawattLazy;
        }
        return this.decawattLazy = this.convertFromBase(PowerUnits.Decawatt);
    }

    public get Kilowatt(): number {
        if(this.kilowattLazy !== null){
            return this.kilowattLazy;
        }
        return this.kilowattLazy = this.convertFromBase(PowerUnits.Kilowatt);
    }

    public get Megawatt(): number {
        if(this.megawattLazy !== null){
            return this.megawattLazy;
        }
        return this.megawattLazy = this.convertFromBase(PowerUnits.Megawatt);
    }

    public get Gigawatt(): number {
        if(this.gigawattLazy !== null){
            return this.gigawattLazy;
        }
        return this.gigawattLazy = this.convertFromBase(PowerUnits.Gigawatt);
    }

    public get Terawatt(): number {
        if(this.terawattLazy !== null){
            return this.terawattLazy;
        }
        return this.terawattLazy = this.convertFromBase(PowerUnits.Terawatt);
    }

    public get Petawatt(): number {
        if(this.petawattLazy !== null){
            return this.petawattLazy;
        }
        return this.petawattLazy = this.convertFromBase(PowerUnits.Petawatt);
    }

    public get KilobritishThermalUnitPerHour(): number {
        if(this.kilobritishthermalunitperhourLazy !== null){
            return this.kilobritishthermalunitperhourLazy;
        }
        return this.kilobritishthermalunitperhourLazy = this.convertFromBase(PowerUnits.KilobritishThermalUnitPerHour);
    }

    public get KilojoulePerHour(): number {
        if(this.kilojouleperhourLazy !== null){
            return this.kilojouleperhourLazy;
        }
        return this.kilojouleperhourLazy = this.convertFromBase(PowerUnits.KilojoulePerHour);
    }

    public get MegajoulePerHour(): number {
        if(this.megajouleperhourLazy !== null){
            return this.megajouleperhourLazy;
        }
        return this.megajouleperhourLazy = this.convertFromBase(PowerUnits.MegajoulePerHour);
    }

    public get GigajoulePerHour(): number {
        if(this.gigajouleperhourLazy !== null){
            return this.gigajouleperhourLazy;
        }
        return this.gigajouleperhourLazy = this.convertFromBase(PowerUnits.GigajoulePerHour);
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

    public static FromFemtowatt(value: number): Power {
        return new Power(value, PowerUnits.Femtowatt);
    }

    public static FromPicowatt(value: number): Power {
        return new Power(value, PowerUnits.Picowatt);
    }

    public static FromNanowatt(value: number): Power {
        return new Power(value, PowerUnits.Nanowatt);
    }

    public static FromMicrowatt(value: number): Power {
        return new Power(value, PowerUnits.Microwatt);
    }

    public static FromDeciwatt(value: number): Power {
        return new Power(value, PowerUnits.Deciwatt);
    }

    public static FromDecawatt(value: number): Power {
        return new Power(value, PowerUnits.Decawatt);
    }

    public static FromKilowatt(value: number): Power {
        return new Power(value, PowerUnits.Kilowatt);
    }

    public static FromMegawatt(value: number): Power {
        return new Power(value, PowerUnits.Megawatt);
    }

    public static FromGigawatt(value: number): Power {
        return new Power(value, PowerUnits.Gigawatt);
    }

    public static FromTerawatt(value: number): Power {
        return new Power(value, PowerUnits.Terawatt);
    }

    public static FromPetawatt(value: number): Power {
        return new Power(value, PowerUnits.Petawatt);
    }

    public static FromKilobritishThermalUnitPerHour(value: number): Power {
        return new Power(value, PowerUnits.KilobritishThermalUnitPerHour);
    }

    public static FromKilojoulePerHour(value: number): Power {
        return new Power(value, PowerUnits.KilojoulePerHour);
    }

    public static FromMegajoulePerHour(value: number): Power {
        return new Power(value, PowerUnits.MegajoulePerHour);
    }

    public static FromGigajoulePerHour(value: number): Power {
        return new Power(value, PowerUnits.GigajoulePerHour);
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
            case PowerUnits.Femtowatt:
                return (this.value) / 1e-15;
            case PowerUnits.Picowatt:
                return (this.value) / 1e-12;
            case PowerUnits.Nanowatt:
                return (this.value) / 1e-9;
            case PowerUnits.Microwatt:
                return (this.value) / 0.000001;
            case PowerUnits.Deciwatt:
                return (this.value) / 0.1;
            case PowerUnits.Decawatt:
                return (this.value) / 10;
            case PowerUnits.Kilowatt:
                return (this.value) / 1000;
            case PowerUnits.Megawatt:
                return (this.value) / 1000000;
            case PowerUnits.Gigawatt:
                return (this.value) / 1000000000;
            case PowerUnits.Terawatt:
                return (this.value) / 1000000000000;
            case PowerUnits.Petawatt:
                return (this.value) / 1000000000000000;
            case PowerUnits.KilobritishThermalUnitPerHour:
                return (this.value/0.293071) / 1000;
            case PowerUnits.KilojoulePerHour:
                return (this.value*3600) / 1000;
            case PowerUnits.MegajoulePerHour:
                return (this.value*3600) / 1000000;
            case PowerUnits.GigajoulePerHour:
                return (this.value*3600) / 1000000000;
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
            case PowerUnits.Femtowatt:
                return (value) * 1e-15;
            case PowerUnits.Picowatt:
                return (value) * 1e-12;
            case PowerUnits.Nanowatt:
                return (value) * 1e-9;
            case PowerUnits.Microwatt:
                return (value) * 0.000001;
            case PowerUnits.Deciwatt:
                return (value) * 0.1;
            case PowerUnits.Decawatt:
                return (value) * 10;
            case PowerUnits.Kilowatt:
                return (value) * 1000;
            case PowerUnits.Megawatt:
                return (value) * 1000000;
            case PowerUnits.Gigawatt:
                return (value) * 1000000000;
            case PowerUnits.Terawatt:
                return (value) * 1000000000000;
            case PowerUnits.Petawatt:
                return (value) * 1000000000000000;
            case PowerUnits.KilobritishThermalUnitPerHour:
                return (value*0.293071) * 1000;
            case PowerUnits.KilojoulePerHour:
                return (value/3600) * 1000;
            case PowerUnits.MegajoulePerHour:
                return (value/3600) * 1000000;
            case PowerUnits.GigajoulePerHour:
                return (value/3600) * 1000000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: PowerUnits = PowerUnits.Watts): string {

        switch (toUnit) {
            
            case PowerUnits.Watts:
                return this.Watts + ` W`;
            case PowerUnits.MechanicalHorsepower:
                return this.MechanicalHorsepower + ` hp(I)`;
            case PowerUnits.MetricHorsepower:
                return this.MetricHorsepower + ` hp(M)`;
            case PowerUnits.ElectricalHorsepower:
                return this.ElectricalHorsepower + ` hp(E)`;
            case PowerUnits.BoilerHorsepower:
                return this.BoilerHorsepower + ` hp(S)`;
            case PowerUnits.HydraulicHorsepower:
                return this.HydraulicHorsepower + ` hp(H)`;
            case PowerUnits.BritishThermalUnitsPerHour:
                return this.BritishThermalUnitsPerHour + ` Btu/h`;
            case PowerUnits.JoulesPerHour:
                return this.JoulesPerHour + ` J/h`;
            case PowerUnits.Femtowatt:
                return this.Femtowatt + ` W`;
            case PowerUnits.Picowatt:
                return this.Picowatt + ` W`;
            case PowerUnits.Nanowatt:
                return this.Nanowatt + ` W`;
            case PowerUnits.Microwatt:
                return this.Microwatt + ` W`;
            case PowerUnits.Deciwatt:
                return this.Deciwatt + ` W`;
            case PowerUnits.Decawatt:
                return this.Decawatt + ` W`;
            case PowerUnits.Kilowatt:
                return this.Kilowatt + ` W`;
            case PowerUnits.Megawatt:
                return this.Megawatt + ` W`;
            case PowerUnits.Gigawatt:
                return this.Gigawatt + ` W`;
            case PowerUnits.Terawatt:
                return this.Terawatt + ` W`;
            case PowerUnits.Petawatt:
                return this.Petawatt + ` W`;
            case PowerUnits.KilobritishThermalUnitPerHour:
                return this.KilobritishThermalUnitPerHour + ` Btu/h`;
            case PowerUnits.KilojoulePerHour:
                return this.KilojoulePerHour + ` J/h`;
            case PowerUnits.MegajoulePerHour:
                return this.MegajoulePerHour + ` J/h`;
            case PowerUnits.GigajoulePerHour:
                return this.GigajoulePerHour + ` J/h`;
        default:
            break;
        }
        return this.value.toString();
    }
}
