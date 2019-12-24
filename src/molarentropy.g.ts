export enum MolarEntropyUnits {
    JoulesPerMoleKelvin,
    Kilojoulespermolekelvin,
    Megajoulespermolekelvin
}

export class MolarEntropy {
    private value: number;

    public constructor(value: number, fromUnit: MolarEntropyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get JoulesPerMoleKelvin(): number {
        return this.convertFromBase(MolarEntropyUnits.JoulesPerMoleKelvin);
    }

    public get Kilojoulespermolekelvin(): number {
        return this.convertFromBase(MolarEntropyUnits.Kilojoulespermolekelvin);
    }

    public get Megajoulespermolekelvin(): number {
        return this.convertFromBase(MolarEntropyUnits.Megajoulespermolekelvin);
    }

    public static FromJoulesPerMoleKelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.JoulesPerMoleKelvin);
    }

    public static FromKilojoulespermolekelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.Kilojoulespermolekelvin);
    }

    public static FromMegajoulespermolekelvin(value: number): MolarEntropy {
        return new MolarEntropy(value, MolarEntropyUnits.Megajoulespermolekelvin);
    }

    private convertFromBase(toUnit: MolarEntropyUnits): number {

            switch (toUnit) {
                
                case MolarEntropyUnits.JoulesPerMoleKelvin:
                    return this.value;
                
                case MolarEntropyUnits.Kilojoulespermolekelvin:
                    return (this.value) * 1000;
                
                case MolarEntropyUnits.Megajoulespermolekelvin:
                    return (this.value) * 1000000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: MolarEntropyUnits): number {

                switch (fromUnit) {
                    
                case MolarEntropyUnits.JoulesPerMoleKelvin:
                    return value;
                
                case MolarEntropyUnits.Kilojoulespermolekelvin:
                    return (value) / 1000;
                
                case MolarEntropyUnits.Megajoulespermolekelvin:
                    return (value) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
