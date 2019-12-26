export enum MolarEntropyUnits {
    JoulesPerMoleKelvin,
    KilojoulesPerMoleKelvin,
    MegajoulesPerMoleKelvin
}

export class MolarEntropy {
    private value: number;
    private joulespermolekelvinLazy: number | null = null;
    private kilojoulespermolekelvinLazy: number | null = null;
    private megajoulespermolekelvinLazy: number | null = null;

    public constructor(value: number, fromUnit: MolarEntropyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerMoleKelvin(): number {
        if(this.joulespermolekelvinLazy !== null){
            return this.joulespermolekelvinLazy;
        }
        return this.joulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.JoulesPerMoleKelvin);
    }

    public get KilojoulesPerMoleKelvin(): number {
        if(this.kilojoulespermolekelvinLazy !== null){
            return this.kilojoulespermolekelvinLazy;
        }
        return this.kilojoulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.KilojoulesPerMoleKelvin);
    }

    public get MegajoulesPerMoleKelvin(): number {
        if(this.megajoulespermolekelvinLazy !== null){
            return this.megajoulespermolekelvinLazy;
        }
        return this.megajoulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.MegajoulesPerMoleKelvin);
    }

    public static FromJoulesPerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.JoulesPerMoleKelvin);
    }

    public static FromKilojoulesPerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.KilojoulesPerMoleKelvin);
    }

    public static FromMegajoulesPerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.MegajoulesPerMoleKelvin);
    }

    private convertFromBase(toUnit: MolarEntropyUnits): number {
        switch (toUnit) {
                
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return this.value;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return (this.value) / 1000;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MolarEntropyUnits): number {
        switch (fromUnit) {
                
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return value;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return (value) * 1000;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MolarEntropyUnits = MolarEntropyUnits.JoulesPerMoleKelvin): string {

        switch (toUnit) {
            
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return this.JoulesPerMoleKelvin + ` J/(mol*K)`;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return this.KilojoulesPerMoleKelvin + ` J/(mol*K)`;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return this.MegajoulesPerMoleKelvin + ` J/(mol*K)`;
        default:
            break;
        }
        return this.value.toString();
    }
}
