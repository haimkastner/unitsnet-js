export enum MagneticFluxUnits {
    Webers
}

export class MagneticFlux {
    private value: number;

    public constructor(value: number, fromUnit: MagneticFluxUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Webers(): number {
        return this.convertFromBase(MagneticFluxUnits.Webers);
    }

    public static FromWebers(value: number): MagneticFlux {
        return new MagneticFlux(value, MagneticFluxUnits.Webers);
    }

    private convertFromBase(toUnit: MagneticFluxUnits): number {

            switch (toUnit) {
                
                case MagneticFluxUnits.Webers:
                    return this.value;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: MagneticFluxUnits): number {

                switch (fromUnit) {
                    
                case MagneticFluxUnits.Webers:
                    return this.value;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
