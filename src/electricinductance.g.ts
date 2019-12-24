export enum ElectricInductanceUnits {
    Henries,
    Nanohenries,
    Microhenries
}

export class ElectricInductance {
    private value: number;

    public constructor(value: number, fromUnit: ElectricInductanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Henries(): number {
        return this.convertFromBase(ElectricInductanceUnits.Henries);
    }

    public get Nanohenries(): number {
        return this.convertFromBase(ElectricInductanceUnits.Nanohenries);
    }

    public get Microhenries(): number {
        return this.convertFromBase(ElectricInductanceUnits.Microhenries);
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
                    return (this.value) * 1e-9;
                
                case ElectricInductanceUnits.Microhenries:
                    return (this.value) * 0.000001;
                
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
                    return (value) / 1e-9;
                
                case ElectricInductanceUnits.Microhenries:
                    return (value) / 0.000001;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
