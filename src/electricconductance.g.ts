export enum ElectricConductanceUnits {
    Siemens,
    Microsiemens
}

export class ElectricConductance {
    private value: number;
    private siemensLazy: number | null = null;
    private microsiemensLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricConductanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Siemens(): number {
        if(this.siemensLazy !== null){
            return this.siemensLazy;
        }
        return this.siemensLazy = this.convertFromBase(ElectricConductanceUnits.Siemens);
    }

    public get Microsiemens(): number {
        if(this.microsiemensLazy !== null){
            return this.microsiemensLazy;
        }
        return this.microsiemensLazy = this.convertFromBase(ElectricConductanceUnits.Microsiemens);
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
                return (this.value) / 0.000001;
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
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricConductanceUnits = ElectricConductanceUnits.Siemens): string {

        switch (toUnit) {
            
            case ElectricConductanceUnits.Siemens:
                return this.Siemens + ` S`;
            case ElectricConductanceUnits.Microsiemens:
                return this.Microsiemens + ` S`;
        default:
            break;
        }
        return this.value.toString();
    }
}
