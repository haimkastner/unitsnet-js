/** MolarEnergyUnits enumeration */
export enum MolarEnergyUnits {
    /** */
    JoulesPerMole,
    /** */
    KilojoulesPerMole,
    /** */
    MegajoulesPerMole
}

/** Molar energy is the amount of energy stored in 1 mole of a substance. */
export class MolarEnergy {
    private value: number;
    private joulespermoleLazy: number | null = null;
    private kilojoulespermoleLazy: number | null = null;
    private megajoulespermoleLazy: number | null = null;

    /**
     * Create a new MolarEnergy.
     * @param value The value.
     * @param fromUnit The ‘MolarEnergy’ unit to create from.
     */
    public constructor(value: number, fromUnit: MolarEnergyUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MolarEnergy is JoulePerMole.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get JoulesPerMole(): number {
        if(this.joulespermoleLazy !== null){
            return this.joulespermoleLazy;
        }
        return this.joulespermoleLazy = this.convertFromBase(MolarEnergyUnits.JoulesPerMole);
    }

    /** */
    public get KilojoulesPerMole(): number {
        if(this.kilojoulespermoleLazy !== null){
            return this.kilojoulespermoleLazy;
        }
        return this.kilojoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.KilojoulesPerMole);
    }

    /** */
    public get MegajoulesPerMole(): number {
        if(this.megajoulespermoleLazy !== null){
            return this.megajoulespermoleLazy;
        }
        return this.megajoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.MegajoulesPerMole);
    }

    /**
     * Create a new MolarEnergy instance from a JoulesPerMole
     *
     * @param value The unit as JoulesPerMole to create a new MolarEnergy from.
     * @returns The new MolarEnergy instance.
     */
    public static FromJoulesPerMole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.JoulesPerMole);
    }

    /**
     * Create a new MolarEnergy instance from a KilojoulesPerMole
     *
     * @param value The unit as KilojoulesPerMole to create a new MolarEnergy from.
     * @returns The new MolarEnergy instance.
     */
    public static FromKilojoulesPerMole(value: number): MolarEnergy {
        return new MolarEnergy(value, MolarEnergyUnits.KilojoulesPerMole);
    }

    /**
     * Create a new MolarEnergy instance from a MegajoulesPerMole
     *
     * @param value The unit as MegajoulesPerMole to create a new MolarEnergy from.
     * @returns The new MolarEnergy instance.
     */
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

    /**
     * Format the MolarEnergy to string.
     * Note! the default format for MolarEnergy is JoulesPerMole.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MolarEnergy.
     * @returns The string format of the MolarEnergy.
     */
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
