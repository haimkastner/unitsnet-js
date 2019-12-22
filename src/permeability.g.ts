export enum PermeabilityUnits {
    HenriesPerMeter
}

export class Permeability {
    private value: number;

    public constructor(value: number, fromUnit: PermeabilityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get HenriesPerMeter(): number {
        return this.convertFromBase(PermeabilityUnits.HenriesPerMeter);
    }

    public static FromHenriesPerMeter(value: number): Permeability {
        return new Permeability(value, PermeabilityUnits.HenriesPerMeter);
    }

    private convertFromBase(toUnit: PermeabilityUnits): number {

            switch (toUnit) {
                
                case PermeabilityUnits.HenriesPerMeter:
                    return this.value;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: PermeabilityUnits): number {

                switch (fromUnit) {
                    
                case PermeabilityUnits.HenriesPerMeter:
                    return this.value;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
