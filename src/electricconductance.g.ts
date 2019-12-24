export enum ElectricConductanceUnits {
    Siemens,
    Microsiemens
}

export class ElectricConductance {
    private value: number;

    public constructor(value: number, fromUnit: ElectricConductanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Siemens(): number {
        return this.convertFromBase(ElectricConductanceUnits.Siemens);
    }

    public get Microsiemens(): number {
        return this.convertFromBase(ElectricConductanceUnits.Microsiemens);
    }

    public static FromSiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Siemens);
    }

    public static FromMicrosiemens(value: number): ElectricConductance {
        return new ElectricConductance(value, ElectricConductanceUnits.Microsiemens);
    }

    private convertFromBase(toUnit: ElectricConductanceUnits): number {

                switch (toUnit) {
                    
                case ElectricConductanceUnits.Siemens:
                    return this.value;
                
                case ElectricConductanceUnits.Microsiemens:
                    return (this.value) * 0.000001;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ElectricConductanceUnits): number {

                switch (fromUnit) {
                    
                case ElectricConductanceUnits.Siemens:
                    return value;
                
                case ElectricConductanceUnits.Microsiemens:
                    return (value) / 0.000001;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
