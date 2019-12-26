export enum PermeabilityUnits {
    HenriesPerMeter
}

export class Permeability {
    private value: number;
    private henriespermeterLazy: number | null = null;

    public constructor(value: number, fromUnit: PermeabilityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get HenriesPerMeter(): number {
        if(this.henriespermeterLazy !== null){
            return this.henriespermeterLazy;
        }
        return this.henriespermeterLazy = this.convertFromBase(PermeabilityUnits.HenriesPerMeter);
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
                return value;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: PermeabilityUnits = PermeabilityUnits.HenriesPerMeter): string {

        switch (toUnit) {
            
            case PermeabilityUnits.HenriesPerMeter:
                return this.HenriesPerMeter + ` H/m`;
        default:
            break;
        }
        return this.value.toString();
    }
}
