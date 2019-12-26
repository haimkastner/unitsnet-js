export enum MolarEntropyUnits {
    JoulesPerMoleKelvin,
    KilojoulePerMoleKelvin,
    MegajoulePerMoleKelvin
}

export class MolarEntropy {
    private value: number;
    private joulespermolekelvinLazy: number | null = null;
    private kilojoulepermolekelvinLazy: number | null = null;
    private megajoulepermolekelvinLazy: number | null = null;

    public constructor(value: number, fromUnit: MolarEntropyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerMoleKelvin(): number {
        if(this.joulespermolekelvinLazy !== null){
            return this.joulespermolekelvinLazy;
        }
        return this.joulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.JoulesPerMoleKelvin);
    }

    public get KilojoulePerMoleKelvin(): number {
        if(this.kilojoulepermolekelvinLazy !== null){
            return this.kilojoulepermolekelvinLazy;
        }
        return this.kilojoulepermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.KilojoulePerMoleKelvin);
    }

    public get MegajoulePerMoleKelvin(): number {
        if(this.megajoulepermolekelvinLazy !== null){
            return this.megajoulepermolekelvinLazy;
        }
        return this.megajoulepermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.MegajoulePerMoleKelvin);
    }

    public static FromJoulesPerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.JoulesPerMoleKelvin);
    }

    public static FromKilojoulePerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.KilojoulePerMoleKelvin);
    }

    public static FromMegajoulePerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.MegajoulePerMoleKelvin);
    }

    private convertFromBase(toUnit: MolarEntropyUnits): number {
        switch (toUnit) {
                
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return this.value;
            case MolarEntropyUnits.KilojoulePerMoleKelvin:
                return (this.value) / 1000;
            case MolarEntropyUnits.MegajoulePerMoleKelvin:
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
            case MolarEntropyUnits.KilojoulePerMoleKelvin:
                return (value) * 1000;
            case MolarEntropyUnits.MegajoulePerMoleKelvin:
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
            case MolarEntropyUnits.KilojoulePerMoleKelvin:
                return this.KilojoulePerMoleKelvin + ` J/(mol*K)`;
            case MolarEntropyUnits.MegajoulePerMoleKelvin:
                return this.MegajoulePerMoleKelvin + ` J/(mol*K)`;
        default:
            break;
        }
        return this.value.toString();
    }
}
