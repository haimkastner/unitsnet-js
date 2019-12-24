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
    Kilojoules,
    Megajoules,
    Gigajoules,
    Kilocalories,
    Megacalories,
    Kilobritishthermalunits,
    Megabritishthermalunits,
    Gigabritishthermalunits,
    Kilowatthours,
    Megawatthours,
    Gigawatthours,
    Terawatthours,
    Decathermsec,
    Decathermsus,
    Decathermsimperial
}

export class Energy {
    private value: number;

    public constructor(value: number, fromUnit: EnergyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Joules(): number {
        return this.convertFromBase(EnergyUnits.Joules);
    }

    public get Calories(): number {
        return this.convertFromBase(EnergyUnits.Calories);
    }

    public get BritishThermalUnits(): number {
        return this.convertFromBase(EnergyUnits.BritishThermalUnits);
    }

    public get ElectronVolts(): number {
        return this.convertFromBase(EnergyUnits.ElectronVolts);
    }

    public get FootPounds(): number {
        return this.convertFromBase(EnergyUnits.FootPounds);
    }

    public get Ergs(): number {
        return this.convertFromBase(EnergyUnits.Ergs);
    }

    public get WattHours(): number {
        return this.convertFromBase(EnergyUnits.WattHours);
    }

    public get ThermsEc(): number {
        return this.convertFromBase(EnergyUnits.ThermsEc);
    }

    public get ThermsUs(): number {
        return this.convertFromBase(EnergyUnits.ThermsUs);
    }

    public get ThermsImperial(): number {
        return this.convertFromBase(EnergyUnits.ThermsImperial);
    }

    public get Kilojoules(): number {
        return this.convertFromBase(EnergyUnits.Kilojoules);
    }

    public get Megajoules(): number {
        return this.convertFromBase(EnergyUnits.Megajoules);
    }

    public get Gigajoules(): number {
        return this.convertFromBase(EnergyUnits.Gigajoules);
    }

    public get Kilocalories(): number {
        return this.convertFromBase(EnergyUnits.Kilocalories);
    }

    public get Megacalories(): number {
        return this.convertFromBase(EnergyUnits.Megacalories);
    }

    public get Kilobritishthermalunits(): number {
        return this.convertFromBase(EnergyUnits.Kilobritishthermalunits);
    }

    public get Megabritishthermalunits(): number {
        return this.convertFromBase(EnergyUnits.Megabritishthermalunits);
    }

    public get Gigabritishthermalunits(): number {
        return this.convertFromBase(EnergyUnits.Gigabritishthermalunits);
    }

    public get Kilowatthours(): number {
        return this.convertFromBase(EnergyUnits.Kilowatthours);
    }

    public get Megawatthours(): number {
        return this.convertFromBase(EnergyUnits.Megawatthours);
    }

    public get Gigawatthours(): number {
        return this.convertFromBase(EnergyUnits.Gigawatthours);
    }

    public get Terawatthours(): number {
        return this.convertFromBase(EnergyUnits.Terawatthours);
    }

    public get Decathermsec(): number {
        return this.convertFromBase(EnergyUnits.Decathermsec);
    }

    public get Decathermsus(): number {
        return this.convertFromBase(EnergyUnits.Decathermsus);
    }

    public get Decathermsimperial(): number {
        return this.convertFromBase(EnergyUnits.Decathermsimperial);
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

    public static FromKilojoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Kilojoules);
    }

    public static FromMegajoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Megajoules);
    }

    public static FromGigajoules(value: number): Energy {
        return new Energy(value, EnergyUnits.Gigajoules);
    }

    public static FromKilocalories(value: number): Energy {
        return new Energy(value, EnergyUnits.Kilocalories);
    }

    public static FromMegacalories(value: number): Energy {
        return new Energy(value, EnergyUnits.Megacalories);
    }

    public static FromKilobritishthermalunits(value: number): Energy {
        return new Energy(value, EnergyUnits.Kilobritishthermalunits);
    }

    public static FromMegabritishthermalunits(value: number): Energy {
        return new Energy(value, EnergyUnits.Megabritishthermalunits);
    }

    public static FromGigabritishthermalunits(value: number): Energy {
        return new Energy(value, EnergyUnits.Gigabritishthermalunits);
    }

    public static FromKilowatthours(value: number): Energy {
        return new Energy(value, EnergyUnits.Kilowatthours);
    }

    public static FromMegawatthours(value: number): Energy {
        return new Energy(value, EnergyUnits.Megawatthours);
    }

    public static FromGigawatthours(value: number): Energy {
        return new Energy(value, EnergyUnits.Gigawatthours);
    }

    public static FromTerawatthours(value: number): Energy {
        return new Energy(value, EnergyUnits.Terawatthours);
    }

    public static FromDecathermsec(value: number): Energy {
        return new Energy(value, EnergyUnits.Decathermsec);
    }

    public static FromDecathermsus(value: number): Energy {
        return new Energy(value, EnergyUnits.Decathermsus);
    }

    public static FromDecathermsimperial(value: number): Energy {
        return new Energy(value, EnergyUnits.Decathermsimperial);
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
                
                case EnergyUnits.Kilojoules:
                    return (this.value) * 1000;
                
                case EnergyUnits.Megajoules:
                    return (this.value) * 1000000;
                
                case EnergyUnits.Gigajoules:
                    return (this.value) * 1000000000;
                
                case EnergyUnits.Kilocalories:
                    return (this.value*4.184) * 1000;
                
                case EnergyUnits.Megacalories:
                    return (this.value*4.184) * 1000000;
                
                case EnergyUnits.Kilobritishthermalunits:
                    return (this.value*1055.05585262) * 1000;
                
                case EnergyUnits.Megabritishthermalunits:
                    return (this.value*1055.05585262) * 1000000;
                
                case EnergyUnits.Gigabritishthermalunits:
                    return (this.value*1055.05585262) * 1000000000;
                
                case EnergyUnits.Kilowatthours:
                    return (this.value*3600) * 1000;
                
                case EnergyUnits.Megawatthours:
                    return (this.value*3600) * 1000000;
                
                case EnergyUnits.Gigawatthours:
                    return (this.value*3600) * 1000000000;
                
                case EnergyUnits.Terawatthours:
                    return (this.value*3600) * 1000000000000;
                
                case EnergyUnits.Decathermsec:
                    return (this.value*1.05505585262e8) * 10;
                
                case EnergyUnits.Decathermsus:
                    return (this.value*1.054804e8) * 10;
                
                case EnergyUnits.Decathermsimperial:
                    return (this.value*1.05505585257348e8) * 10;
                
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
                
                case EnergyUnits.Kilojoules:
                    return (value) / 1000;
                
                case EnergyUnits.Megajoules:
                    return (value) / 1000000;
                
                case EnergyUnits.Gigajoules:
                    return (value) / 1000000000;
                
                case EnergyUnits.Kilocalories:
                    return (value/4.184) / 1000;
                
                case EnergyUnits.Megacalories:
                    return (value/4.184) / 1000000;
                
                case EnergyUnits.Kilobritishthermalunits:
                    return (value/1055.05585262) / 1000;
                
                case EnergyUnits.Megabritishthermalunits:
                    return (value/1055.05585262) / 1000000;
                
                case EnergyUnits.Gigabritishthermalunits:
                    return (value/1055.05585262) / 1000000000;
                
                case EnergyUnits.Kilowatthours:
                    return (value/3600) / 1000;
                
                case EnergyUnits.Megawatthours:
                    return (value/3600) / 1000000;
                
                case EnergyUnits.Gigawatthours:
                    return (value/3600) / 1000000000;
                
                case EnergyUnits.Terawatthours:
                    return (value/3600) / 1000000000000;
                
                case EnergyUnits.Decathermsec:
                    return (value/1.05505585262e8) / 10;
                
                case EnergyUnits.Decathermsus:
                    return (value/1.054804e8) / 10;
                
                case EnergyUnits.Decathermsimperial:
                    return (value/1.05505585257348e8) / 10;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
