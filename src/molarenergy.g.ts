export enum MolarEnergyUnits {
    JoulesPerMole,
    Kilojoulespermole,
    Megajoulespermole
}

export class MolarEnergy {
    private value: number;
    private joulespermoleLazy: number | null = null;
    private kilojoulespermoleLazy: number | null = null;
    private megajoulespermoleLazy: number | null = null;

    public constructor(value: number, fromUnit: MolarEnergyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerMole(): number {
        if(this.joulespermoleLazy !== null){
            return this.joulespermoleLazy;
        }
        return this.joulespermoleLazy = this.convertFromBase(MolarEnergyUnits.JoulesPerMole);
    }

    public get Kilojoulespermole(): number {
        if(this.kilojoulespermoleLazy !== null){
            return this.kilojoulespermoleLazy;
        }
        return this.kilojoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.Kilojoulespermole);
    }

    public get Megajoulespermole(): number {
        if(this.megajoulespermoleLazy !== null){
            return this.megajoulespermoleLazy;
        }
        return this.megajoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.Megajoulespermole);
    }

    public static FromJoulesPerMole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.JoulesPerMole);
    }

    public static FromKilojoulespermole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.Kilojoulespermole);
    }

    public static FromMegajoulespermole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.Megajoulespermole);
    }

    private convertFromBase(toUnit: MolarEnergyUnits): number {
        switch (toUnit) {
                
            case MolarEnergyUnits.JoulesPerMole:
                return this.value;
            case MolarEnergyUnits.Kilojoulespermole:
                return (this.value) / 1000;
            case MolarEnergyUnits.Megajoulespermole:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MolarEnergyUnits): number {
        switch (fromUnit) {
                
            case MolarEnergyUnits.JoulesPerMole:
                return value;
            case MolarEnergyUnits.Kilojoulespermole:
                return (value) * 1000;
            case MolarEnergyUnits.Megajoulespermole:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
