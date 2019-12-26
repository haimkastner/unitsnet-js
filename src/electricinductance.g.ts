export enum ElectricInductanceUnits {
    Henries,
    Nanohenries,
    Microhenries
}

export class ElectricInductance {
    private value: number;
    private henriesLazy: number | null = null;
    private nanohenriesLazy: number | null = null;
    private microhenriesLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricInductanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Henries(): number {
        if(this.henriesLazy !== null){
            return this.henriesLazy;
        }
        return this.henriesLazy = this.convertFromBase(ElectricInductanceUnits.Henries);
    }

    public get Nanohenries(): number {
        if(this.nanohenriesLazy !== null){
            return this.nanohenriesLazy;
        }
        return this.nanohenriesLazy = this.convertFromBase(ElectricInductanceUnits.Nanohenries);
    }

    public get Microhenries(): number {
        if(this.microhenriesLazy !== null){
            return this.microhenriesLazy;
        }
        return this.microhenriesLazy = this.convertFromBase(ElectricInductanceUnits.Microhenries);
    }

    public static FromHenries(value: number): ElectricInductance {
        return new ElectricInductance(value, ElectricInductanceUnits.Henries);
    }

    public static FromNanohenries(value: number): ElectricInductance {
        return new ElectricInductance(value, ElectricInductanceUnits.Nanohenries);
    }

    public static FromMicrohenries(value: number): ElectricInductance {
        return new ElectricInductance(value, ElectricInductanceUnits.Microhenries);
    }

    private convertFromBase(toUnit: ElectricInductanceUnits): number {
        switch (toUnit) {
                
            case ElectricInductanceUnits.Henries:
                return this.value;
            case ElectricInductanceUnits.Nanohenries:
                return (this.value) / 1e-9;
            case ElectricInductanceUnits.Microhenries:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricInductanceUnits): number {
        switch (fromUnit) {
                
            case ElectricInductanceUnits.Henries:
                return value;
            case ElectricInductanceUnits.Nanohenries:
                return (value) * 1e-9;
            case ElectricInductanceUnits.Microhenries:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricInductanceUnits = ElectricInductanceUnits.Henries): string {

        switch (toUnit) {
            
            case ElectricInductanceUnits.Henries:
                return this.Henries + ` H`;
            case ElectricInductanceUnits.Nanohenries:
                return this.Nanohenries + ` H`;
            case ElectricInductanceUnits.Microhenries:
                return this.Microhenries + ` H`;
        default:
            break;
        }
        return this.value.toString();
    }
}
