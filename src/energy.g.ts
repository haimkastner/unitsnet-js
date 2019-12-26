export enum EnergyUnits {
    Joules,
    Calories,
    BritishThermalUnits,
    ElectronVolts,
    FootPounds,
    Ergs,
    WattHours,
    ThermsEc,
    ThermsUs,
    ThermsImperial,
    Kilojoule,
    Megajoule,
    Gigajoule,
    Kilocalorie,
    Megacalorie,
    KilobritishThermalUnit,
    MegabritishThermalUnit,
    GigabritishThermalUnit,
    KilowattHour,
    MegawattHour,
    GigawattHour,
    TerawattHour,
    DecathermEc,
    DecathermUs,
    DecathermImperial
}

export class Energy {
    private value: number;
    private joulesLazy: number | null = null;
    private caloriesLazy: number | null = null;
    private britishthermalunitsLazy: number | null = null;
    private electronvoltsLazy: number | null = null;
    private footpoundsLazy: number | null = null;
    private ergsLazy: number | null = null;
    private watthoursLazy: number | null = null;
    private thermsecLazy: number | null = null;
    private thermsusLazy: number | null = null;
    private thermsimperialLazy: number | null = null;
    private kilojouleLazy: number | null = null;
    private megajouleLazy: number | null = null;
    private gigajouleLazy: number | null = null;
    private kilocalorieLazy: number | null = null;
    private megacalorieLazy: number | null = null;
    private kilobritishthermalunitLazy: number | null = null;
    private megabritishthermalunitLazy: number | null = null;
    private gigabritishthermalunitLazy: number | null = null;
    private kilowatthourLazy: number | null = null;
    private megawatthourLazy: number | null = null;
    private gigawatthourLazy: number | null = null;
    private terawatthourLazy: number | null = null;
    private decathermecLazy: number | null = null;
    private decathermusLazy: number | null = null;
    private decathermimperialLazy: number | null = null;

    public constructor(value: number, fromUnit: EnergyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Joules(): number {
        if(this.joulesLazy !== null){
            return this.joulesLazy;
        }
        return this.joulesLazy = this.convertFromBase(EnergyUnits.Joules);
    }

    public get Calories(): number {
        if(this.caloriesLazy !== null){
            return this.caloriesLazy;
        }
        return this.caloriesLazy = this.convertFromBase(EnergyUnits.Calories);
    }

    public get BritishThermalUnits(): number {
        if(this.britishthermalunitsLazy !== null){
            return this.britishthermalunitsLazy;
        }
        return this.britishthermalunitsLazy = this.convertFromBase(EnergyUnits.BritishThermalUnits);
    }

    public get ElectronVolts(): number {
        if(this.electronvoltsLazy !== null){
            return this.electronvoltsLazy;
        }
        return this.electronvoltsLazy = this.convertFromBase(EnergyUnits.ElectronVolts);
    }

    public get FootPounds(): number {
        if(this.footpoundsLazy !== null){
            return this.footpoundsLazy;
        }
        return this.footpoundsLazy = this.convertFromBase(EnergyUnits.FootPounds);
    }

    public get Ergs(): number {
        if(this.ergsLazy !== null){
            return this.ergsLazy;
        }
        return this.ergsLazy = this.convertFromBase(EnergyUnits.Ergs);
    }

    public get WattHours(): number {
        if(this.watthoursLazy !== null){
            return this.watthoursLazy;
        }
        return this.watthoursLazy = this.convertFromBase(EnergyUnits.WattHours);
    }

    public get ThermsEc(): number {
        if(this.thermsecLazy !== null){
            return this.thermsecLazy;
        }
        return this.thermsecLazy = this.convertFromBase(EnergyUnits.ThermsEc);
    }

    public get ThermsUs(): number {
        if(this.thermsusLazy !== null){
            return this.thermsusLazy;
        }
        return this.thermsusLazy = this.convertFromBase(EnergyUnits.ThermsUs);
    }

    public get ThermsImperial(): number {
        if(this.thermsimperialLazy !== null){
            return this.thermsimperialLazy;
        }
        return this.thermsimperialLazy = this.convertFromBase(EnergyUnits.ThermsImperial);
    }

    public get Kilojoule(): number {
        if(this.kilojouleLazy !== null){
            return this.kilojouleLazy;
        }
        return this.kilojouleLazy = this.convertFromBase(EnergyUnits.Kilojoule);
    }

    public get Megajoule(): number {
        if(this.megajouleLazy !== null){
            return this.megajouleLazy;
        }
        return this.megajouleLazy = this.convertFromBase(EnergyUnits.Megajoule);
    }

    public get Gigajoule(): number {
        if(this.gigajouleLazy !== null){
            return this.gigajouleLazy;
        }
        return this.gigajouleLazy = this.convertFromBase(EnergyUnits.Gigajoule);
    }

    public get Kilocalorie(): number {
        if(this.kilocalorieLazy !== null){
            return this.kilocalorieLazy;
        }
        return this.kilocalorieLazy = this.convertFromBase(EnergyUnits.Kilocalorie);
    }

    public get Megacalorie(): number {
        if(this.megacalorieLazy !== null){
            return this.megacalorieLazy;
        }
        return this.megacalorieLazy = this.convertFromBase(EnergyUnits.Megacalorie);
    }

    public get KilobritishThermalUnit(): number {
        if(this.kilobritishthermalunitLazy !== null){
            return this.kilobritishthermalunitLazy;
        }
        return this.kilobritishthermalunitLazy = this.convertFromBase(EnergyUnits.KilobritishThermalUnit);
    }

    public get MegabritishThermalUnit(): number {
        if(this.megabritishthermalunitLazy !== null){
            return this.megabritishthermalunitLazy;
        }
        return this.megabritishthermalunitLazy = this.convertFromBase(EnergyUnits.MegabritishThermalUnit);
    }

    public get GigabritishThermalUnit(): number {
        if(this.gigabritishthermalunitLazy !== null){
            return this.gigabritishthermalunitLazy;
        }
        return this.gigabritishthermalunitLazy = this.convertFromBase(EnergyUnits.GigabritishThermalUnit);
    }

    public get KilowattHour(): number {
        if(this.kilowatthourLazy !== null){
            return this.kilowatthourLazy;
        }
        return this.kilowatthourLazy = this.convertFromBase(EnergyUnits.KilowattHour);
    }

    public get MegawattHour(): number {
        if(this.megawatthourLazy !== null){
            return this.megawatthourLazy;
        }
        return this.megawatthourLazy = this.convertFromBase(EnergyUnits.MegawattHour);
    }

    public get GigawattHour(): number {
        if(this.gigawatthourLazy !== null){
            return this.gigawatthourLazy;
        }
        return this.gigawatthourLazy = this.convertFromBase(EnergyUnits.GigawattHour);
    }

    public get TerawattHour(): number {
        if(this.terawatthourLazy !== null){
            return this.terawatthourLazy;
        }
        return this.terawatthourLazy = this.convertFromBase(EnergyUnits.TerawattHour);
    }

    public get DecathermEc(): number {
        if(this.decathermecLazy !== null){
            return this.decathermecLazy;
        }
        return this.decathermecLazy = this.convertFromBase(EnergyUnits.DecathermEc);
    }

    public get DecathermUs(): number {
        if(this.decathermusLazy !== null){
            return this.decathermusLazy;
        }
        return this.decathermusLazy = this.convertFromBase(EnergyUnits.DecathermUs);
    }

    public get DecathermImperial(): number {
        if(this.decathermimperialLazy !== null){
            return this.decathermimperialLazy;
        }
        return this.decathermimperialLazy = this.convertFromBase(EnergyUnits.DecathermImperial);
    }

    public static FromJoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Joules);
    }

    public static FromCalories(value: number): Energy {
        return new Energy(value, EnergyUnits.Calories);
    }

    public static FromBritishThermalUnits(value: number): Energy {
        return new Energy(value, EnergyUnits.BritishThermalUnits);
    }

    public static FromElectronVolts(value: number): Energy {
        return new Energy(value, EnergyUnits.ElectronVolts);
    }

    public static FromFootPounds(value: number): Energy {
        return new Energy(value, EnergyUnits.FootPounds);
    }

    public static FromErgs(value: number): Energy {
        return new Energy(value, EnergyUnits.Ergs);
    }

    public static FromWattHours(value: number): Energy {
        return new Energy(value, EnergyUnits.WattHours);
    }

    public static FromThermsEc(value: number): Energy {
        return new Energy(value, EnergyUnits.ThermsEc);
    }

    public static FromThermsUs(value: number): Energy {
        return new Energy(value, EnergyUnits.ThermsUs);
    }

    public static FromThermsImperial(value: number): Energy {
        return new Energy(value, EnergyUnits.ThermsImperial);
    }

    public static FromKilojoule(value: number): Energy {
        return new Energy(value, EnergyUnits.Kilojoule);
    }

    public static FromMegajoule(value: number): Energy {
        return new Energy(value, EnergyUnits.Megajoule);
    }

    public static FromGigajoule(value: number): Energy {
        return new Energy(value, EnergyUnits.Gigajoule);
    }

    public static FromKilocalorie(value: number): Energy {
        return new Energy(value, EnergyUnits.Kilocalorie);
    }

    public static FromMegacalorie(value: number): Energy {
        return new Energy(value, EnergyUnits.Megacalorie);
    }

    public static FromKilobritishThermalUnit(value: number): Energy {
        return new Energy(value, EnergyUnits.KilobritishThermalUnit);
    }

    public static FromMegabritishThermalUnit(value: number): Energy {
        return new Energy(value, EnergyUnits.MegabritishThermalUnit);
    }

    public static FromGigabritishThermalUnit(value: number): Energy {
        return new Energy(value, EnergyUnits.GigabritishThermalUnit);
    }

    public static FromKilowattHour(value: number): Energy {
        return new Energy(value, EnergyUnits.KilowattHour);
    }

    public static FromMegawattHour(value: number): Energy {
        return new Energy(value, EnergyUnits.MegawattHour);
    }

    public static FromGigawattHour(value: number): Energy {
        return new Energy(value, EnergyUnits.GigawattHour);
    }

    public static FromTerawattHour(value: number): Energy {
        return new Energy(value, EnergyUnits.TerawattHour);
    }

    public static FromDecathermEc(value: number): Energy {
        return new Energy(value, EnergyUnits.DecathermEc);
    }

    public static FromDecathermUs(value: number): Energy {
        return new Energy(value, EnergyUnits.DecathermUs);
    }

    public static FromDecathermImperial(value: number): Energy {
        return new Energy(value, EnergyUnits.DecathermImperial);
    }

    private convertFromBase(toUnit: EnergyUnits): number {
        switch (toUnit) {
                
            case EnergyUnits.Joules:
                return this.value;
            case EnergyUnits.Calories:
                return this.value/4.184;
            case EnergyUnits.BritishThermalUnits:
                return this.value/1055.05585262;
            case EnergyUnits.ElectronVolts:
                return this.value/1.602176565e-19;
            case EnergyUnits.FootPounds:
                return this.value/1.355817948;
            case EnergyUnits.Ergs:
                return this.value/1e-7;
            case EnergyUnits.WattHours:
                return this.value/3600;
            case EnergyUnits.ThermsEc:
                return this.value/1.05505585262e8;
            case EnergyUnits.ThermsUs:
                return this.value/1.054804e8;
            case EnergyUnits.ThermsImperial:
                return this.value/1.05505585257348e8;
            case EnergyUnits.Kilojoule:
                return (this.value) / 1000;
            case EnergyUnits.Megajoule:
                return (this.value) / 1000000;
            case EnergyUnits.Gigajoule:
                return (this.value) / 1000000000;
            case EnergyUnits.Kilocalorie:
                return (this.value/4.184) / 1000;
            case EnergyUnits.Megacalorie:
                return (this.value/4.184) / 1000000;
            case EnergyUnits.KilobritishThermalUnit:
                return (this.value/1055.05585262) / 1000;
            case EnergyUnits.MegabritishThermalUnit:
                return (this.value/1055.05585262) / 1000000;
            case EnergyUnits.GigabritishThermalUnit:
                return (this.value/1055.05585262) / 1000000000;
            case EnergyUnits.KilowattHour:
                return (this.value/3600) / 1000;
            case EnergyUnits.MegawattHour:
                return (this.value/3600) / 1000000;
            case EnergyUnits.GigawattHour:
                return (this.value/3600) / 1000000000;
            case EnergyUnits.TerawattHour:
                return (this.value/3600) / 1000000000000;
            case EnergyUnits.DecathermEc:
                return (this.value/1.05505585262e8) / 10;
            case EnergyUnits.DecathermUs:
                return (this.value/1.054804e8) / 10;
            case EnergyUnits.DecathermImperial:
                return (this.value/1.05505585257348e8) / 10;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: EnergyUnits): number {
        switch (fromUnit) {
                
            case EnergyUnits.Joules:
                return value;
            case EnergyUnits.Calories:
                return value*4.184;
            case EnergyUnits.BritishThermalUnits:
                return value*1055.05585262;
            case EnergyUnits.ElectronVolts:
                return value*1.602176565e-19;
            case EnergyUnits.FootPounds:
                return value*1.355817948;
            case EnergyUnits.Ergs:
                return value*1e-7;
            case EnergyUnits.WattHours:
                return value*3600;
            case EnergyUnits.ThermsEc:
                return value*1.05505585262e8;
            case EnergyUnits.ThermsUs:
                return value*1.054804e8;
            case EnergyUnits.ThermsImperial:
                return value*1.05505585257348e8;
            case EnergyUnits.Kilojoule:
                return (value) * 1000;
            case EnergyUnits.Megajoule:
                return (value) * 1000000;
            case EnergyUnits.Gigajoule:
                return (value) * 1000000000;
            case EnergyUnits.Kilocalorie:
                return (value*4.184) * 1000;
            case EnergyUnits.Megacalorie:
                return (value*4.184) * 1000000;
            case EnergyUnits.KilobritishThermalUnit:
                return (value*1055.05585262) * 1000;
            case EnergyUnits.MegabritishThermalUnit:
                return (value*1055.05585262) * 1000000;
            case EnergyUnits.GigabritishThermalUnit:
                return (value*1055.05585262) * 1000000000;
            case EnergyUnits.KilowattHour:
                return (value*3600) * 1000;
            case EnergyUnits.MegawattHour:
                return (value*3600) * 1000000;
            case EnergyUnits.GigawattHour:
                return (value*3600) * 1000000000;
            case EnergyUnits.TerawattHour:
                return (value*3600) * 1000000000000;
            case EnergyUnits.DecathermEc:
                return (value*1.05505585262e8) * 10;
            case EnergyUnits.DecathermUs:
                return (value*1.054804e8) * 10;
            case EnergyUnits.DecathermImperial:
                return (value*1.05505585257348e8) * 10;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: EnergyUnits = EnergyUnits.Joules): string {

        switch (toUnit) {
            
            case EnergyUnits.Joules:
                return this.Joules + ` J`;
            case EnergyUnits.Calories:
                return this.Calories + ` cal`;
            case EnergyUnits.BritishThermalUnits:
                return this.BritishThermalUnits + ` BTU`;
            case EnergyUnits.ElectronVolts:
                return this.ElectronVolts + ` eV`;
            case EnergyUnits.FootPounds:
                return this.FootPounds + ` ft·lb`;
            case EnergyUnits.Ergs:
                return this.Ergs + ` erg`;
            case EnergyUnits.WattHours:
                return this.WattHours + ` Wh`;
            case EnergyUnits.ThermsEc:
                return this.ThermsEc + ` th (E.C.)`;
            case EnergyUnits.ThermsUs:
                return this.ThermsUs + ` th (U.S.)`;
            case EnergyUnits.ThermsImperial:
                return this.ThermsImperial + ` th (imp.)`;
            case EnergyUnits.Kilojoule:
                return this.Kilojoule + ` J`;
            case EnergyUnits.Megajoule:
                return this.Megajoule + ` J`;
            case EnergyUnits.Gigajoule:
                return this.Gigajoule + ` J`;
            case EnergyUnits.Kilocalorie:
                return this.Kilocalorie + ` cal`;
            case EnergyUnits.Megacalorie:
                return this.Megacalorie + ` cal`;
            case EnergyUnits.KilobritishThermalUnit:
                return this.KilobritishThermalUnit + ` BTU`;
            case EnergyUnits.MegabritishThermalUnit:
                return this.MegabritishThermalUnit + ` BTU`;
            case EnergyUnits.GigabritishThermalUnit:
                return this.GigabritishThermalUnit + ` BTU`;
            case EnergyUnits.KilowattHour:
                return this.KilowattHour + ` Wh`;
            case EnergyUnits.MegawattHour:
                return this.MegawattHour + ` Wh`;
            case EnergyUnits.GigawattHour:
                return this.GigawattHour + ` Wh`;
            case EnergyUnits.TerawattHour:
                return this.TerawattHour + ` Wh`;
            case EnergyUnits.DecathermEc:
                return this.DecathermEc + ` th (E.C.)`;
            case EnergyUnits.DecathermUs:
                return this.DecathermUs + ` th (U.S.)`;
            case EnergyUnits.DecathermImperial:
                return this.DecathermImperial + ` th (imp.)`;
        default:
            break;
        }
        return this.value.toString();
    }
}
