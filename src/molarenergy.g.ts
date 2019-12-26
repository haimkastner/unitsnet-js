export enum MolarEnergyUnits {
    JoulesPerMole,
    KilojoulesPerMole,
    MegajoulesPerMole
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

    public get KilojoulesPerMole(): number {
        if(this.kilojoulespermoleLazy !== null){
            return this.kilojoulespermoleLazy;
        }
        return this.kilojoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.KilojoulesPerMole);
    }

    public get MegajoulesPerMole(): number {
        if(this.megajoulespermoleLazy !== null){
            return this.megajoulespermoleLazy;
        }
        return this.megajoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.MegajoulesPerMole);
    }

    public static FromJoulesPerMole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.JoulesPerMole);
    }

    public static FromKilojoulesPerMole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.KilojoulesPerMole);
    }

    public static FromMegajoulesPerMole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.MegajoulesPerMole);
    }

    private convertFromBase(toUnit: MolarEnergyUnits): number {
        switch (toUnit) {
                
            case MolarEnergyUnits.JoulesPerMole:
                return this.value;
            case MolarEnergyUnits.KilojoulesPerMole:
                return (this.value) / 1000;
            case MolarEnergyUnits.MegajoulesPerMole:
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
            case MolarEnergyUnits.KilojoulesPerMole:
                return (value) * 1000;
            case MolarEnergyUnits.MegajoulesPerMole:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MolarEnergyUnits = MolarEnergyUnits.JoulesPerMole): string {

        switch (toUnit) {
            
            case MolarEnergyUnits.JoulesPerMole:
                return this.JoulesPerMole + ` J/mol`;
            case MolarEnergyUnits.KilojoulesPerMole:
                return this.KilojoulesPerMole + ` J/mol`;
            case MolarEnergyUnits.MegajoulesPerMole:
                return this.MegajoulesPerMole + ` J/mol`;
        default:
            break;
        }
        return this.value.toString();
    }
}
