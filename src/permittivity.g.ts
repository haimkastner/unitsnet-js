export enum PermittivityUnits {
    FaradsPerMeter
}

export class Permittivity {
    private value: number;
    private faradspermeterLazy: number | null = null;

    public constructor(value: number, fromUnit: PermittivityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get FaradsPerMeter(): number {
        if(this.faradspermeterLazy !== null){
            return this.faradspermeterLazy;
        }
        return this.faradspermeterLazy = this.convertFromBase(PermittivityUnits.FaradsPerMeter);
    }

    public static FromFaradsPerMeter(value: number): Permittivity {
        return new Permittivity(value, PermittivityUnits.FaradsPerMeter);
    }

    private convertFromBase(toUnit: PermittivityUnits): number {
        switch (toUnit) {
                
            case PermittivityUnits.FaradsPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PermittivityUnits): number {
        switch (fromUnit) {
                
            case PermittivityUnits.FaradsPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: PermittivityUnits = PermittivityUnits.FaradsPerMeter): string {

        switch (toUnit) {
            
            case PermittivityUnits.FaradsPerMeter:
                return this.FaradsPerMeter + ` F/m`;
        default:
            break;
        }
        return this.value.toString();
    }
}
