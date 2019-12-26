export enum MolarEnergyUnits {
    JoulesPerMole,
    KilojoulePerMole,
    MegajoulePerMole
}

export class MolarEnergy {
    private value: number;
    private joulespermoleLazy: number | null = null;
    private kilojoulepermoleLazy: number | null = null;
    private megajoulepermoleLazy: number | null = null;

    public constructor(value: number, fromUnit: MolarEnergyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerMole(): number {
        if(this.joulespermoleLazy !== null){
            return this.joulespermoleLazy;
        }
        return this.joulespermoleLazy = this.convertFromBase(MolarEnergyUnits.JoulesPerMole);
    }

    public get KilojoulePerMole(): number {
        if(this.kilojoulepermoleLazy !== null){
            return this.kilojoulepermoleLazy;
        }
        return this.kilojoulepermoleLazy = this.convertFromBase(MolarEnergyUnits.KilojoulePerMole);
    }

    public get MegajoulePerMole(): number {
        if(this.megajoulepermoleLazy !== null){
            return this.megajoulepermoleLazy;
        }
        return this.megajoulepermoleLazy = this.convertFromBase(MolarEnergyUnits.MegajoulePerMole);
    }

    public static FromJoulesPerMole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.JoulesPerMole);
    }

    public static FromKilojoulePerMole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.KilojoulePerMole);
    }

    public static FromMegajoulePerMole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.MegajoulePerMole);
    }

    private convertFromBase(toUnit: MolarEnergyUnits): number {
        switch (toUnit) {
                
            case MolarEnergyUnits.JoulesPerMole:
                return this.value;
            case MolarEnergyUnits.KilojoulePerMole:
                return (this.value) / 1000;
            case MolarEnergyUnits.MegajoulePerMole:
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
            case MolarEnergyUnits.KilojoulePerMole:
                return (value) * 1000;
            case MolarEnergyUnits.MegajoulePerMole:
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
            case MolarEnergyUnits.KilojoulePerMole:
                return this.KilojoulePerMole + ` J/mol`;
            case MolarEnergyUnits.MegajoulePerMole:
                return this.MegajoulePerMole + ` J/mol`;
        default:
            break;
        }
        return this.value.toString();
    }
}
