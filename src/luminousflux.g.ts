export enum LuminousFluxUnits {
    Lumens
}

export class LuminousFlux {
    private value: number;

    public constructor(value: number, fromUnit: LuminousFluxUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Lumens(): number {
        return this.convertFromBase(LuminousFluxUnits.Lumens);
    }

    public static FromLumens(value: number): LuminousFlux {
        return new LuminousFlux(value, LuminousFluxUnits.Lumens);
    }

    private convertFromBase(toUnit: LuminousFluxUnits): number {

                switch (toUnit) {
                    
                case LuminousFluxUnits.Lumens:
                    return this.value;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: LuminousFluxUnits): number {

                switch (fromUnit) {
                    
                case LuminousFluxUnits.Lumens:
                    return value;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
