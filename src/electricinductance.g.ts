export enum ElectricInductanceUnits {
    Henries,
    Nanohenry,
    Microhenry
}

export class ElectricInductance {
    private value: number;
    private henriesLazy: number | null = null;
    private nanohenryLazy: number | null = null;
    private microhenryLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricInductanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Henries(): number {
        if(this.henriesLazy !== null){
            return this.henriesLazy;
        }
        return this.henriesLazy = this.convertFromBase(ElectricInductanceUnits.Henries);
    }

    public get Nanohenry(): number {
        if(this.nanohenryLazy !== null){
            return this.nanohenryLazy;
        }
        return this.nanohenryLazy = this.convertFromBase(ElectricInductanceUnits.Nanohenry);
    }

    public get Microhenry(): number {
        if(this.microhenryLazy !== null){
            return this.microhenryLazy;
        }
        return this.microhenryLazy = this.convertFromBase(ElectricInductanceUnits.Microhenry);
    }

    public static FromHenries(value: number): ElectricInductance {
        return new ElectricInductance(value, ElectricInductanceUnits.Henries);
    }

    public static FromNanohenry(value: number): ElectricInductance {
        return new ElectricInductance(value, ElectricInductanceUnits.Nanohenry);
    }

    public static FromMicrohenry(value: number): ElectricInductance {
        return new ElectricInductance(value, ElectricInductanceUnits.Microhenry);
    }

    private convertFromBase(toUnit: ElectricInductanceUnits): number {
        switch (toUnit) {
                
            case ElectricInductanceUnits.Henries:
                return this.value;
            case ElectricInductanceUnits.Nanohenry:
                return (this.value) / 1e-9;
            case ElectricInductanceUnits.Microhenry:
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
            case ElectricInductanceUnits.Nanohenry:
                return (value) * 1e-9;
            case ElectricInductanceUnits.Microhenry:
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
            case ElectricInductanceUnits.Nanohenry:
                return this.Nanohenry + ` H`;
            case ElectricInductanceUnits.Microhenry:
                return this.Microhenry + ` H`;
        default:
            break;
        }
        return this.value.toString();
    }
}
